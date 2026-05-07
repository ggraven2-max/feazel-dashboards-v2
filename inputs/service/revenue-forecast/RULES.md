# Revenue Forecast, Service — RULES (Service-v1)

> **Owners:** Greg Graven (COO), Jeff Craft (National Director of Service), Mahlet Teshome Mandefro (FP&A)
> **Methodology version:** Service-v1 (locked 2026-05-06)
> **Calculator file:** `calculators/revenue-forecast-service.js`

---

## What this dashboard answers

How much net invoiced revenue the Service line will book in 2026, by month, against the **$6,800,179** annual budget (sourced from `2026 Service Budget*.xlsx`). What the gap is, what the run-rate annualizes to, and where Service is overlapping with Install (a customer that bought a roof and now has Repair WOs open, which informs warranty exposure).

Service is a fee-for-service model with short cycles, so we do NOT statistically forecast (no V5-style cycle and conversion curves) and we do NOT track WIP via Salesforce stage transitions. The forecast is anchored on the YTD annualized run-rate against the budget plan, with NetSuite AR as the canonical source for invoiced revenue.

---

## Operating definitions (LOCKED Service-v1)

1. **Revenue trigger.** `Type == Invoice` rows in the NetSuite invoice export (`ServiceInvoicedYTDResults*.csv`). Sum of the `Amount` column. NetSuite is canonical, the same rule we use for Residential and MF.
2. **Year filter.** Only invoices in FY 2026 are counted.
3. **Month assignment.** An invoice belongs to the month of its NetSuite `Date` column (NetSuite posting date, not Salesforce stage date).
4. **Annual budget.** Sourced from the `2026 Service Budget*.xlsx` file in this folder. The calculator looks for the line that totals the 12 monthly cells. The annual cell drives the headline budget; per-month cells drive the monthly plan.
5. **Plan-Rest Forecast.** Conservative forward view: YTD actual + remaining-month plan numbers from the budget. Used for the "Forecast vs Budget" KPI.
6. **Naive Pace.** YTD invoiced × (12 / months_elapsed). Sensitive to lumpy months but useful as a "what if every month from now on looks like the average so far" sanity check.
7. **Branch normalization.** `Detroit Metro` → `Detroit`, `NOVA` → `DC Metro`. Same conventions as the rest of the suite. Add aliases to `calculators/lib/netsuite-invoices.js` if Mahlet's exports use unexpected branch names.

Changes to any of these require sign-off from Greg + Jeff + Mahlet, a version bump (Service-v2), and a snapshot test refresh.

---

## Required inputs (drop in this folder)

| File pattern | What it is | Source |
|---|---|---|
| `2026 Service Budget*.xlsx` | Annual + monthly plan for the Service line | NetSuite export from Mahlet |
| `ServiceInvoicedYTDResults*.csv` | NetSuite per-invoice export | NetSuite saved search, AR Trade invoices, Service subsidiary |

Optional (improves the dashboard but not required):

| File pattern | What it is | Source |
|---|---|---|
| `GregProfitabilityServiceResults*.csv` | Per-job cost mix | NetSuite saved search; provides labor / material / commission split |
| `All Jobs with WOs and SAs*.xlsx` | Salesforce Jobs + Work Orders + Service Appointments export | Used for install↔service overlap analysis (see below); also feeds the Service Calls Aging tab |

If `GregProfitabilityServiceResults*.csv` is missing, the Profitability tab degrades to an empty state with a clear "no data" message. The forecast itself does not depend on it.

---

## What the calculator computes

For each FY 2026 month:

```
revenue[M]    = Σ Amount where Type == 'Invoice' AND Date ∈ month M
plan[M]       = monthly cell from 2026 Service Budget
gap[M]        = revenue[M] − plan[M]
```

Annual:

```
ytd_invoiced         = Σ revenue[M] for closed months
ytd_plan             = Σ plan[1..months_elapsed]
ytd_vs_plan          = ytd_invoiced − ytd_plan
naive_pace           = ytd_invoiced / months_elapsed × 12
plan_rest_forecast   = ytd_invoiced + Σ plan[months_elapsed+1..12]
budget               = annual cell from 2026 Service Budget
gap_to_budget        = plan_rest_forecast − budget
```

---

## Install↔Service overlap analysis (when the Jobs/WOs/SAs file is present)

The "Service on Installs" tab links Repair Service Appointments back to their originating Install jobs (account-to-account, not job-to-job, since a Salesforce Job Number is scoped to a single service type).

For each account that has both an Install job and Repair Service Appointments in 2026:
- Total Install contract value
- Count of Repair WOs against the same account
- Hours and Billable Time logged on those WOs
- Service GM% (from the profitability CSV when available)

This surfaces warranty-eligibility candidates and accounts where the service follow-up is disproportionate to the install (a warranty-cost early-warning signal). It is also one of the seed inputs for the Agentforce warranty-eligibility pilot.

---

## Sanity-check guardrails

The calculator surfaces warnings (in the build log) for:

- **Budget total discrepancy.** If the "annual" cell and the summed months differ by >5%, falls back to the summed months and prints both numbers.
- **Pace divergence.** If naive pace and plan-rest forecast differ by more than 20% of plan, the dashboard narrative flags the discrepancy and recommends which to anchor on.
- **Last-month outlier.** If the most recent closed month's invoiced is less than 25% of plan, the narrative calls it out as a potential billing lag.

---

## Versioning

This is **Service-v1**. Future versions will likely add:

- **v1.1:** Slice the forecast by Service Type (Repair vs Maintenance vs Warranty)
- **v1.2:** Per-tech revenue attribution (link the Service Appointments file to the invoiced revenue)
- **v2:** Forward-looking commit of scheduled-but-not-yet-invoiced WOs
- **v2.1:** Backlog aging by Days in Status, integrated with the Service Calls dashboard

When the methodology changes, document the diff in this file and bump `SERVICE_VERSION` in the calculator.

---

## Out of scope (intentional)

- Forward-looking scheduling forecast (no analog of Lisa's MF monthly-schedule CSVs for Service today)
- Pipeline of contracts signed but not yet started (Service does not have a "Contracts Signed YTD" report; the book is appointment-driven, not contract-driven)
- WIP balance (Service work cycles measure in days, not months; WIP carrying value is immaterial)

---

## Source-of-truth rules

NetSuite `ServiceInvoicedYTDResults*.csv` is canonical for invoiced revenue. Do not derive Service invoicing from Salesforce stage transitions, the Service Salesforce object lacks the equivalent of a `Date Moved to Invoiced` column for the appointment line items.

`GregProfitabilityServiceResults*.csv` is canonical for GP/GM. Treat as authoritative for board reporting. If it is not present, the calculator emits an empty Profitability tab; do not estimate margin from another source.

The `2026 Service Budget*.xlsx` is canonical for the budget plan. If Mahlet revises mid-year, drop the new file in this folder and rerun, the calculator picks up the latest by mtime.
