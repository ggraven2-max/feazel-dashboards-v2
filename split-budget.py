#!/usr/bin/env python3
"""
Split a consolidated Budget workbook into the per-LOB files the calculators read.

The budget Greg exports has all three lines of business stacked as sections in
one sheet: Company, Residential, Multi Family, Service. Both the MF and the
Service parsers scan the FIRST sheet and take the FIRST row matching
"Total ... 40000 ... Revenue", which in the consolidated file is the COMPANY
row. Pointed at the consolidated file directly, multi-family would silently
read the $181M company plan as its own. Hence this split.

Writes, next to wherever you point it:
    2026 Commercial Budget.xlsx   (the Multi Family section)
    2026 Service Budget.xlsx      (the Service section)

Residential is deliberately NOT written: it already has its own budget file
with a second "Actual" sheet that this consolidated export does not carry, and
overwriting it would throw that away.

    python3 split-budget.py <consolidated.xlsx> <output-dir> [--only "Multi Family"|"Service"]

--only writes just that section's file. Use it when the destination folder
must contain exactly one budget file: both the MF and Service calculators
take the FIRST filename containing "budget", so a stray second one wins
non-deterministically.
"""
import sys, os, warnings
warnings.filterwarnings("ignore")
import pandas as pd
from openpyxl import Workbook

SECTIONS = {"Multi Family": "2026 Commercial Budget.xlsx",
            "Service":      "2026 Service Budget.xlsx"}

def main(src_path, out_dir, only=None):
    xl = pd.ExcelFile(src_path)
    df = xl.parse(xl.sheet_names[0], header=None)

    # A section starts where col 1 is the LOB name and col 2 is a "<Mon> YYYY" header.
    heads = {}
    for i in range(len(df)):
        v = df.iloc[i, 1]
        if isinstance(v, str) and v.strip() in SECTIONS and str(df.iloc[i, 2]).startswith("Jan "):
            heads[v.strip()] = i

    missing = [k for k in SECTIONS if k not in heads]
    if missing:
        print("  split-budget: no section found for %s in %s" % (", ".join(missing), os.path.basename(src_path)))
        if not heads:
            return 1

    for name, out_name in SECTIONS.items():
        if name not in heads:
            continue
        if only and name != only:
            continue
        i = heads[name]
        months = [str(df.iloc[i, c]) for c in range(2, 14)]
        rows = []
        for r in range(i + 1, i + 5):
            lab = df.iloc[r, 1]
            if not isinstance(lab, str) or not lab.strip():
                continue
            vals = [df.iloc[r, c] for c in range(2, 14)]
            rows.append((lab.strip(), vals, df.iloc[r, 14]))

        total = [r for r in rows if "total" in r[0].lower() and "40000" in r[0]]
        if not total:
            print("  split-budget: %s has no 'Total - 40000 - Revenue' row, skipped" % name)
            continue
        lab, vals, annual = total[0]
        summed = sum(float(v) for v in vals if pd.notna(v))
        annual = float(annual) if pd.notna(annual) else summed

        wb = Workbook(); ws = wb.active; ws.title = "Budget"
        ws.append([name] + months + ["Total 2026"])
        for lab_i, vals_i, tot_i in rows:
            ws.append([lab_i] +
                      [None if pd.isna(v) else float(v) for v in vals_i] +
                      [None if pd.isna(tot_i) else float(tot_i)])
        dest = os.path.join(out_dir, out_name)
        wb.save(dest)

        gap = annual - summed
        note = ""
        if summed and abs(gap) / abs(annual or 1) > 0.001:
            note = "   RECONCILE: months sum to %s, Total 2026 cell says %s, gap %s" % (
                format(summed, ",.0f"), format(annual, ",.0f"), format(gap, ",.0f"))
        print("  split-budget: wrote %s (annual %s)%s" % (out_name, format(annual, ",.0f"), note))
    return 0

if __name__ == "__main__":
    args = sys.argv[1:]
    only = None
    if "--only" in args:
        i = args.index("--only")
        only = args[i + 1] if i + 1 < len(args) else None
        del args[i:i + 2]
    if len(args) != 2 or (only and only not in SECTIONS):
        print(__doc__); sys.exit(2)
    sys.exit(main(args[0], args[1], only))
