# Revenue Forecast, Multi-Family — RULES (TBD)

> **Owner:** Greg Graven (COO), Todd Sandler (President Multi-Family & Commercial), Lisa Gibson (VP Commercial Ops)
> **Status:** METHODOLOGY NOT YET DEFINED
> **Calculator file:** `calculators/revenue-forecast.js` (currently short-circuits for `lob=multi-family`)

---

## Why this is empty

The residential V5 forecast methodology is not portable to multi-family because the operating model differs in ways that affect every step of the model:

- **Cycle times are longer.** Multi-family deals run from RFP to install over many months, often quarters. V5's "M+0 conversion" assumption breaks here.
- **Billing pattern.** MF projects bill by progress milestones, not all-on-completion. V5's invoicing-equals-revenue assumption does not hold.
- **Sale path.** MF jobs are GC-driven (general contractors, property managers, REITs), not in-home consumer sales. There is no "Sold Not Processed" lag in the same sense; once a contract is signed it goes straight into project management.
- **Cost mix.** MF gross margins, material/labor split, and commission structure differ materially from residential.
- **Job type taxonomy.** V5 buckets jobs into Insurance, Retail-Financing, Retail-No Financing, Repair. Multi-family's natural buckets are different (e.g., New Construction, Re-roof, Restoration, RFP-driven Capital Project).

Until a multi-family-specific forecast methodology is defined, signed off, and locked, the calculator returns the snapshot fallback and the dashboard renders with "no data yet" placeholders.

---

## What inputs the MF forecast will eventually need

When the MF methodology is defined, this folder will hold reports analogous to (but not identical to) the residential set. **Note: Sold Not Processed is NOT applicable to multi-family** and should not be uploaded here.

Expected inputs (subject to revision):

- **Multi-family contracts signed YTD** (Salesforce report filtered to MF division)
- **Multi-family job-level production status** (in-progress, milestones billed, milestones remaining)
- **Multi-family budget** (NetSuite export with MF revenue and cost GLs)
- **Pipeline / RFP register** (open opportunities by stage)
- **Possibly: backlog of GC contracts with milestone schedules**

---

## Next steps

1. Define multi-family forecast methodology with Todd + Lisa (cycle times, billing rules, conversion assumptions).
2. Determine which Salesforce reports feed it (filtered residential reports vs new MF-specific reports).
3. Spec the calculator behavior in a dedicated MF rules document (analogous to the residential V5 lock notice).
4. Implement either a parallel `lob === 'multi-family'` code path in `calculators/revenue-forecast.js`, or a separate `calculators/revenue-forecast-mf.js`.
5. Lock methodology, regenerate snapshot tests, and remove the short-circuit fallback.
