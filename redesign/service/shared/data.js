/* AUTO-GENERATED — do not edit. Generated 2026-05-07T12:43:24.973Z (service) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-05-07T12:43:24.973Z",
    "pipelineVersion": "2.0.0",
    "lob": "service",
    "lastBuiltProjects": [
      "revenue-forecast",
      "service-calls"
    ],
    "projects": [
      {
        "id": "revenue-forecast",
        "version": "V5-locked-2026-04-19-shell-1.0",
        "elapsedMs": 967,
        "builtAt": "2026-05-07T12:43:24.973Z"
      },
      {
        "id": "service-calls",
        "version": "Service-Calls-v1.0-2026-05-06",
        "elapsedMs": 767,
        "builtAt": "2026-05-07T12:43:24.973Z"
      }
    ]
  },
  "REVENUE_FORECAST": {
    "_source": "calculator/revenue-forecast-service.js Service-v1.0-2026-05-06",
    "title": "Service Revenue Forecast",
    "subtitle": "Service-v1 · Budget-anchored forecast · Data through 2026-05-06",
    "runDate": "2026-05-07",
    "methodologyLock": {
      "version": "Service-v1.0-2026-05-06",
      "lockedOn": "2026-05-06",
      "items": [
        "Annual budget $6.80M (sourced from 2026 Service Budget XLSX)",
        "Revenue = NetSuite invoiced revenue (Type = Invoice, Date in FY)",
        "Annualized pace = (YTD revenue / months elapsed) × 12",
        "Plan-rest forecast = YTD actual + monthly plan for remaining months",
        "Profitability cost mix sourced from GregProfitabilityServiceResults*.csv"
      ]
    },
    "kpis": [
      {
        "label": "Invoiced YTD",
        "value": "$2.16M",
        "sub": "5 months elapsed · 2470 invoices"
      },
      {
        "label": "YTD vs Plan",
        "value": "$-353,319",
        "sub": "Plan YTD: $2.51M",
        "trend": "negative"
      },
      {
        "label": "Annualized Pace",
        "value": "$5.18M",
        "sub": "YTD × 12/5",
        "trend": "negative"
      },
      {
        "label": "Plan-Rest Forecast",
        "value": "$6.27M",
        "sub": "YTD actual + remaining-month plan"
      },
      {
        "label": "Annual Budget",
        "value": "$6.8M",
        "sub": "2026 Service plan"
      },
      {
        "label": "Forecast vs Budget",
        "value": "$-1,625,120",
        "sub": "23.9% uplift needed",
        "trend": "negative"
      },
      {
        "label": "Last Month Revenue",
        "value": "$79K",
        "sub": "May 2026"
      },
      {
        "label": "Last Month vs Plan",
        "value": "$-831,334",
        "sub": "Plan: $910K"
      }
    ],
    "execSummary": {
      "budget": 6800179.4799999995,
      "modelAnnualInvoiced": 5175059.327999989,
      "gap": -1625120.152000011,
      "narrative": "5 months of FY2026 Service activity reported, $2.16M invoiced YTD. Run-rate annualizes to $5.18M against the $6.8M plan, a $1.63M shortfall (23.9% uplift needed)."
    },
    "monthRevenue": {
      "january": {
        "label": "January",
        "invoiced": 434089.77000000025,
        "budget": 334070.38999999996,
        "gap": 100019.3800000003
      },
      "february": {
        "label": "February",
        "invoiced": 412095.43,
        "budget": 310366.66,
        "gap": 101728.77000000002
      },
      "march": {
        "label": "March",
        "invoiced": 617919.8800000002,
        "budget": 474113.1746066653,
        "gap": 143806.7053933349
      },
      "april": {
        "label": "April",
        "invoiced": 613096.8999999998,
        "budget": 480636.80534897133,
        "gap": 132460.09465102846
      },
      "may": {
        "label": "May",
        "invoiced": 79072.74,
        "budget": 910406.9363225256,
        "gap": -831334.1963225256
      },
      "june": {
        "label": "June",
        "invoiced": 0,
        "budget": 626060.4024353181,
        "gap": -626060.4024353181
      },
      "july": {
        "label": "July",
        "invoiced": 0,
        "budget": 567463.4730525267,
        "gap": -567463.4730525267
      },
      "august": {
        "label": "August",
        "invoiced": 0,
        "budget": 647749.3443287316,
        "gap": -647749.3443287316
      },
      "september": {
        "label": "September",
        "invoiced": 0,
        "budget": 578096.2729940619,
        "gap": -578096.2729940619
      },
      "october": {
        "label": "October",
        "invoiced": 0,
        "budget": 765976.1409289142,
        "gap": -765976.1409289142
      },
      "november": {
        "label": "November",
        "invoiced": 0,
        "budget": 500371.77142246766,
        "gap": -500371.77142246766
      },
      "december": {
        "label": "December",
        "invoiced": 0,
        "budget": 424311.64,
        "gap": -424311.64
      }
    },
    "weeklyTargetsHeader": {
      "avgWeeklyNeed": 130772.6823076923,
      "recent4WkAvg": 0,
      "gap": 0
    },
    "budgetRecoveryHeader": {
      "fullYearBudget": 6800179.4799999995,
      "gap": 1625120.152000011,
      "upliftPct": 23.89819499293585,
      "aprilGap": 132460.09465102846,
      "q1OriginalBudget": 1118550.2246066653,
      "q1Actual": 1464105.0800000005,
      "q1Shortfall": 345554.8553933352,
      "recoveryRatio": 0
    },
    "profitabilitySummary": {
      "combinedGP": 1202895.7000000002,
      "combinedGP_pct": 61.337037779354894,
      "combinedRevenue": 1961124.5400000003,
      "y2025_GP_pct": 63.82076973883224,
      "y2025_revenue": 1633595.12,
      "y2025_jobs": 898,
      "y2026_GP_pct": 48.94910509107853,
      "y2026_revenue": 327529.42000000004,
      "y2026_jobs": 260,
      "materialCost": 260208.57000000004,
      "laborCost": 487047.7499999998,
      "otherCost": 13240.199999999999,
      "commissions": 65465.050000000025,
      "materialPctContract": 13.268334809578183,
      "laborPctContract": 24.835125973182702,
      "otherPctContract": 0.6751330540180787,
      "commissionPctContract": 3.3381383315921394,
      "sourceFile": "GregProfitabilityServiceResults455.csv",
      "jobsParsed": 1158
    },
    "profitabilityByJobType": [
      {
        "key": "Repair",
        "jobs": 132,
        "revenue": 224353.1,
        "expenses": 111851.77000000002,
        "gross_profit": 112501.33,
        "material": 20151.810000000005,
        "labor": 89387.15000000001,
        "other": 569.28,
        "commission": 9206.37,
        "contract": 234255.04,
        "gp_pct": 50.14476287601999
      },
      {
        "key": "T&M",
        "jobs": 123,
        "revenue": 100826.32,
        "expenses": 51136.78999999997,
        "gross_profit": 49689.53000000003,
        "material": 9838.890000000009,
        "labor": 41563.9,
        "other": 0,
        "commission": 0,
        "contract": 97826.32,
        "gp_pct": 49.28230049455343
      },
      {
        "key": "Warranty",
        "jobs": 5,
        "revenue": 2350,
        "expenses": 4218.14,
        "gross_profit": -1868.1400000000003,
        "material": 173.38000000000002,
        "labor": 4044.76,
        "other": 0,
        "commission": 0,
        "contract": 2000,
        "gp_pct": -79.49531914893619
      }
    ],
    "profitabilityByMarket": [
      {
        "key": "Columbus",
        "jobs": 92,
        "revenue": 110883.8,
        "expenses": 59798.249999999985,
        "gross_profit": 51085.55000000002,
        "material": 12034.000000000002,
        "labor": 45388.850000000006,
        "other": 369.28,
        "commission": 5784.639999999999,
        "contract": 110843.8,
        "gp_pct": 46.07124755825469
      },
      {
        "key": "Detroit Metro",
        "jobs": 17,
        "revenue": 70258.5,
        "expenses": 42224.08000000001,
        "gross_profit": 28034.420000000006,
        "material": 1846.4499999999998,
        "labor": 40301.4,
        "other": 0,
        "commission": 172.5,
        "contract": 78588.5,
        "gp_pct": 39.90181970864736
      },
      {
        "key": "Raleigh",
        "jobs": 45,
        "revenue": 43551.990000000005,
        "expenses": 19213.260000000002,
        "gross_profit": 24338.730000000003,
        "material": 2078.64,
        "labor": 17324.8,
        "other": 0,
        "commission": 613.27,
        "contract": 43211.93,
        "gp_pct": 55.88431206013779
      },
      {
        "key": "Cincinnati",
        "jobs": 62,
        "revenue": 40695,
        "expenses": 25752.04,
        "gross_profit": 14942.959999999995,
        "material": 6988.880000000002,
        "labor": 18988.760000000002,
        "other": 0,
        "commission": 0,
        "contract": 39297,
        "gp_pct": 36.719400417741724
      },
      {
        "key": "Nashville",
        "jobs": 22,
        "revenue": 34744.84,
        "expenses": 9915.620000000003,
        "gross_profit": 24829.220000000005,
        "material": 2961.4,
        "labor": 6961,
        "other": 100,
        "commission": 2006.11,
        "contract": 34744.84,
        "gp_pct": 71.46160408279331
      },
      {
        "key": "Dayton",
        "jobs": 7,
        "revenue": 7015,
        "expenses": 3941.42,
        "gross_profit": 3073.58,
        "material": 1246.42,
        "labor": 2706,
        "other": 0,
        "commission": 0,
        "contract": 7015,
        "gp_pct": 43.8143977191732
      },
      {
        "key": "DC Metro",
        "jobs": 4,
        "revenue": 6770,
        "expenses": 987.33,
        "gross_profit": 5782.67,
        "material": 737.33,
        "labor": 250,
        "other": 0,
        "commission": 288,
        "contract": 6770,
        "gp_pct": 85.41610044313146
      },
      {
        "key": "Richmond",
        "jobs": 4,
        "revenue": 5090,
        "expenses": 1358.5700000000002,
        "gross_profit": 3731.4300000000003,
        "material": 672.23,
        "labor": 700,
        "other": 0,
        "commission": 126,
        "contract": 5090,
        "gp_pct": 73.3090373280943
      },
      {
        "key": "Cleveland",
        "jobs": 4,
        "revenue": 4300.29,
        "expenses": 1197.77,
        "gross_profit": 3102.5200000000004,
        "material": 712.1700000000001,
        "labor": 400,
        "other": 100,
        "commission": 119.85,
        "contract": 4300.29,
        "gp_pct": 72.14676219510778
      },
      {
        "key": "Knoxville",
        "jobs": 1,
        "revenue": 3200,
        "expenses": 2137.42,
        "gross_profit": 1062.58,
        "material": 712.42,
        "labor": 1425,
        "other": 0,
        "commission": 96,
        "contract": 3200,
        "gp_pct": 33.205625
      },
      {
        "key": "Indianapolis",
        "jobs": 1,
        "revenue": 520,
        "expenses": 430.94,
        "gross_profit": 89.06,
        "material": 174.14,
        "labor": 300,
        "other": 0,
        "commission": 0,
        "contract": 520,
        "gp_pct": 17.126923076923077
      },
      {
        "key": "NOVA",
        "jobs": 1,
        "revenue": 500,
        "expenses": 250,
        "gross_profit": 250,
        "material": 0,
        "labor": 250,
        "other": 0,
        "commission": 0,
        "contract": 500,
        "gp_pct": 50
      }
    ],
    "profitabilityByJobType2025": [
      {
        "key": "Repair",
        "jobs": 662,
        "revenue": 1382288.0100000002,
        "expenses": 492914.2399999993,
        "gross_profit": 889373.7699999996,
        "material": 197485.71000000005,
        "labor": 289618.4899999999,
        "other": 11365.609999999999,
        "commission": 54914.93000000003,
        "contract": 1336626.3999999994,
        "gp_pct": 64.34069915718935
      },
      {
        "key": "T&M",
        "jobs": 202,
        "revenue": 221784.48,
        "expenses": 83140.74000000002,
        "gross_profit": 138643.73999999996,
        "material": 26437.560000000012,
        "labor": 53650.57,
        "other": 1305.31,
        "commission": 1207.75,
        "contract": 215757.9700000001,
        "gp_pct": 62.51282325977
      },
      {
        "key": "Warranty",
        "jobs": 34,
        "revenue": 29522.63,
        "expenses": 14967.159999999996,
        "gross_profit": 14555.470000000001,
        "material": 6121.22,
        "labor": 8782.880000000001,
        "other": 0,
        "commission": 136,
        "contract": 24847.63,
        "gp_pct": 49.30275520846212
      }
    ],
    "profitabilityByMarket2025": [
      {
        "key": "Columbus",
        "jobs": 221,
        "revenue": 490876.37000000005,
        "expenses": 186859.7999999999,
        "gross_profit": 304016.5700000002,
        "material": 84517.70000000004,
        "labor": 105071.03,
        "other": 2615,
        "commission": 18154.859999999997,
        "contract": 458125.59,
        "gp_pct": 61.93342938874816
      },
      {
        "key": "Detroit Metro",
        "jobs": 208,
        "revenue": 416023.63,
        "expenses": 144040.25000000003,
        "gross_profit": 271983.38,
        "material": 41089.34000000001,
        "labor": 98180.48,
        "other": 4548.62,
        "commission": 7226.360000000001,
        "contract": 412973.2,
        "gp_pct": 65.37690659542584
      },
      {
        "key": "Cincinnati",
        "jobs": 207,
        "revenue": 193592.33,
        "expenses": 72573.49,
        "gross_profit": 121018.84,
        "material": 22817.869999999988,
        "labor": 47184.75,
        "other": 1235.31,
        "commission": 6064.9800000000005,
        "contract": 187061.47999999998,
        "gp_pct": 62.51220799914956
      },
      {
        "key": "Raleigh",
        "jobs": 54,
        "revenue": 129550.40000000001,
        "expenses": 48638.57,
        "gross_profit": 80911.82999999999,
        "material": 15230.559999999998,
        "labor": 32987.490000000005,
        "other": 327.96000000000004,
        "commission": 4820.42,
        "contract": 129768.79999999999,
        "gp_pct": 62.45587045659449
      },
      {
        "key": "Nashville",
        "jobs": 66,
        "revenue": 122782.53000000001,
        "expenses": 38725.169999999984,
        "gross_profit": 84057.35999999994,
        "material": 18339.64000000001,
        "labor": 17898.5,
        "other": 2508.16,
        "commission": 9576.14,
        "contract": 118522.74,
        "gp_pct": 68.46035832622111
      },
      {
        "key": "DC Metro",
        "jobs": 48,
        "revenue": 120984.6,
        "expenses": 36822.82,
        "gross_profit": 84161.77999999998,
        "material": 24819.809999999998,
        "labor": 12031.94,
        "other": 0,
        "commission": 3991.3,
        "contract": 115749.6,
        "gp_pct": 69.56404368820492
      },
      {
        "key": "Cleveland",
        "jobs": 37,
        "revenue": 56528.55,
        "expenses": 12461.449999999995,
        "gross_profit": 44067.1,
        "material": 4324,
        "labor": 6862.05,
        "other": 1309.2,
        "commission": 4336.24,
        "contract": 53454.75,
        "gp_pct": 77.95547559595991
      },
      {
        "key": "Indianapolis",
        "jobs": 22,
        "revenue": 40268.01,
        "expenses": 24727.15,
        "gross_profit": 15540.86,
        "material": 8493.86,
        "labor": 16233.29,
        "other": 0,
        "commission": 165.4,
        "contract": 40668.01,
        "gp_pct": 38.5935634763178
      },
      {
        "key": "Dayton",
        "jobs": 15,
        "revenue": 24049,
        "expenses": 9233.909999999998,
        "gross_profit": 14815.090000000002,
        "material": 3811.21,
        "labor": 5340,
        "other": 0,
        "commission": 416.54,
        "contract": 23799,
        "gp_pct": 61.603767308412
      },
      {
        "key": "Winston-Salem",
        "jobs": 5,
        "revenue": 14704.72,
        "expenses": 6310.250000000001,
        "gross_profit": 8394.47,
        "material": 1560.25,
        "labor": 4750,
        "other": 0,
        "commission": 108.5,
        "contract": 14778.289999999999,
        "gp_pct": 57.086908149220115
      },
      {
        "key": "Richmond",
        "jobs": 8,
        "revenue": 12143.94,
        "expenses": 7011.24,
        "gross_profit": 5132.7,
        "material": 3975.2200000000003,
        "labor": 3075,
        "other": 0,
        "commission": 437.33,
        "contract": 12143.94,
        "gp_pct": 42.265525027297564
      },
      {
        "key": "NOVA",
        "jobs": 6,
        "revenue": 9191.04,
        "expenses": 2118.04,
        "gross_profit": 7072.999999999999,
        "material": 1065.03,
        "labor": 937.41,
        "other": 126.67,
        "commission": 569.11,
        "contract": 7286.6,
        "gp_pct": 76.95538263352132
      },
      {
        "key": "Greenville",
        "jobs": 1,
        "revenue": 2900,
        "expenses": 1500,
        "gross_profit": 1400,
        "material": 0,
        "labor": 1500,
        "other": 0,
        "commission": 391.5,
        "contract": 2900,
        "gp_pct": 48.275862068965516
      }
    ],
    "profitabilityByTrade": [
      {
        "key": "Roofing",
        "jobs": 215,
        "revenue": 270471.42000000004,
        "expenses": 133911.93,
        "gross_profit": 136559.49000000002,
        "material": 25285.300000000003,
        "labor": 106462.16,
        "other": 569.28,
        "commission": 8926.37,
        "contract": 268464.36,
        "gp_pct": 50.4894343365373
      },
      {
        "key": "Siding",
        "jobs": 25,
        "revenue": 27346,
        "expenses": 19472.22,
        "gross_profit": 7873.779999999998,
        "material": 1894.8,
        "labor": 17667,
        "other": 0,
        "commission": 150,
        "contract": 36953,
        "gp_pct": 28.79316901923498
      },
      {
        "key": "Gutters",
        "jobs": 15,
        "revenue": 21657,
        "expenses": 9947.470000000003,
        "gross_profit": 11709.53,
        "material": 2685.2999999999997,
        "labor": 7275.85,
        "other": 0,
        "commission": 0,
        "contract": 20609,
        "gp_pct": 54.06810730941497
      },
      {
        "key": "(unassigned)",
        "jobs": 4,
        "revenue": 5955,
        "expenses": 2944.2799999999997,
        "gross_profit": 3010.7200000000003,
        "material": 298.68,
        "labor": 2660,
        "other": 0,
        "commission": 130,
        "contract": 5955,
        "gp_pct": 50.55785054575988
      },
      {
        "key": "Other",
        "jobs": 1,
        "revenue": 2100,
        "expenses": 930.8,
        "gross_profit": 1169.2,
        "material": 0,
        "labor": 930.8,
        "other": 0,
        "commission": 0,
        "contract": 2100,
        "gp_pct": 55.67619047619048
      }
    ],
    "pipelineSnapshot": {
      "stages": [],
      "totalJobs": 0,
      "totalValue": 0
    },
    "commentary": {
      "actionableRecommendations": [
        "Annualized Service pace is $1.63M short of the $6.8M plan. 23.9% uplift needed on remaining months."
      ],
      "strategyHighlights": []
    },
    "tables": [
      {
        "id": "sv-monthly-rollup",
        "title": "Monthly Roll-Up",
        "headers": [
          "Month",
          {
            "label": "Revenue",
            "num": true
          },
          {
            "label": "Plan",
            "num": true
          },
          {
            "label": "Gap",
            "num": true
          },
          {
            "label": "# Inv.",
            "num": true
          }
        ],
        "rows": [
          [
            "January",
            "$434K",
            "$334K",
            "+$100K",
            519
          ],
          [
            "February",
            "$412K",
            "$310K",
            "+$102K",
            505
          ],
          [
            "March",
            "$618K",
            "$474K",
            "+$144K",
            753
          ],
          [
            "April",
            "$613K",
            "$481K",
            "+$132K",
            595
          ],
          [
            "May",
            "$79K",
            "$910K",
            "$-831,334",
            98
          ],
          [
            "June",
            "$0",
            "$626K",
            "$-626,060",
            0
          ],
          [
            "July",
            "$0",
            "$567K",
            "$-567,463",
            0
          ],
          [
            "August",
            "$0",
            "$648K",
            "$-647,749",
            0
          ],
          [
            "September",
            "$0",
            "$578K",
            "$-578,096",
            0
          ],
          [
            "October",
            "$0",
            "$766K",
            "$-765,976",
            0
          ],
          [
            "November",
            "$0",
            "$500K",
            "$-500,372",
            0
          ],
          [
            "December",
            "$0",
            "$424K",
            "$-424,312",
            0
          ]
        ]
      },
      {
        "id": "sv-by-branch",
        "title": "YTD Invoiced by Branch",
        "headers": [
          "Branch",
          {
            "label": "Invoiced",
            "num": true
          },
          {
            "label": "# Inv.",
            "num": true
          }
        ],
        "rows": [
          [
            "Columbus",
            "$633K",
            726
          ],
          [
            "Detroit",
            "$482K",
            349
          ],
          [
            "Raleigh",
            "$374K",
            512
          ],
          [
            "Cincinnati",
            "$194K",
            367
          ],
          [
            "DC Metro",
            "$165K",
            101
          ],
          [
            "Nashville",
            "$112K",
            106
          ],
          [
            "Cleveland",
            "$104K",
            186
          ],
          [
            "Richmond",
            "$36K",
            34
          ],
          [
            "Dayton",
            "$36K",
            62
          ],
          [
            "Indianapolis",
            "$15K",
            18
          ],
          [
            "Knoxville",
            "$2K",
            6
          ],
          [
            "Greenville",
            "$2K",
            2
          ],
          [
            "Grand Rapids",
            "$500",
            1
          ]
        ]
      }
    ],
    "charts": [
      {
        "id": "sv-rev-vs-plan",
        "title": "Monthly Revenue vs Plan",
        "labels": [
          "Jan 2026",
          "Feb 2026",
          "Mar 2026",
          "Apr 2026",
          "May 2026",
          "Jun 2026",
          "Jul 2026",
          "Aug 2026",
          "Sep 2026",
          "Oct 2026",
          "Nov 2026",
          "Dec 2026"
        ],
        "datasets": [
          {
            "type": "bar",
            "label": "Invoiced",
            "data": [
              434089.77000000025,
              412095.43,
              617919.8800000002,
              613096.8999999998,
              79072.74,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ],
            "backgroundColor": "#16a085"
          },
          {
            "type": "bar",
            "label": "Plan",
            "data": [
              334070.38999999996,
              310366.66,
              474113.1746066653,
              480636.80534897133,
              910406.9363225256,
              626060.4024353181,
              567463.4730525267,
              647749.3443287316,
              578096.2729940619,
              765976.1409289142,
              500371.77142246766,
              424311.64
            ],
            "backgroundColor": "#1f2d4b"
          }
        ],
        "config": {
          "type": "bar",
          "data": {
            "labels": [
              "Jan 2026",
              "Feb 2026",
              "Mar 2026",
              "Apr 2026",
              "May 2026",
              "Jun 2026",
              "Jul 2026",
              "Aug 2026",
              "Sep 2026",
              "Oct 2026",
              "Nov 2026",
              "Dec 2026"
            ],
            "datasets": [
              {
                "label": "Invoiced",
                "data": [
                  434089.77000000025,
                  412095.43,
                  617919.8800000002,
                  613096.8999999998,
                  79072.74,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                "backgroundColor": "#16a085",
                "borderRadius": 4
              },
              {
                "label": "Plan",
                "data": [
                  334070.38999999996,
                  310366.66,
                  474113.1746066653,
                  480636.80534897133,
                  910406.9363225256,
                  626060.4024353181,
                  567463.4730525267,
                  647749.3443287316,
                  578096.2729940619,
                  765976.1409289142,
                  500371.77142246766,
                  424311.64
                ],
                "backgroundColor": "#1f2d4b",
                "borderRadius": 4
              }
            ]
          }
        }
      }
    ],
    "monthsLabel": [
      "Jan 2026",
      "Feb 2026",
      "Mar 2026",
      "Apr 2026",
      "May 2026",
      "Jun 2026",
      "Jul 2026",
      "Aug 2026",
      "Sep 2026",
      "Oct 2026",
      "Nov 2026",
      "Dec 2026"
    ],
    "budgetInv": [
      334070.38999999996,
      310366.66,
      474113.1746066653,
      480636.80534897133,
      910406.9363225256,
      626060.4024353181,
      567463.4730525267,
      647749.3443287316,
      578096.2729940619,
      765976.1409289142,
      500371.77142246766,
      424311.64
    ],
    "revModel": [
      434089.77000000025,
      412095.43,
      617919.8800000002,
      613096.8999999998,
      79072.74,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "revFromKnown": [
      434089.77000000025,
      412095.43,
      617919.8800000002,
      613096.8999999998,
      79072.74,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "requiredSales": [
      334070.38999999996,
      310366.66,
      474113.1746066653,
      480636.80534897133,
      910406.9363225256,
      626060.4024353181,
      567463.4730525267,
      647749.3443287316,
      578096.2729940619,
      765976.1409289142,
      500371.77142246766,
      424311.64
    ],
    "backlogData": [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "netsuiteInvoiced": {
      "source": "ServiceInvoicedYTDResults476.csv",
      "format": "per-invoice",
      "totalInvoiced": 2156274.719999995,
      "invoiceCount": 2470,
      "monthly": [
        434089.77000000025,
        412095.43,
        617919.8800000002,
        613096.8999999998,
        79072.74,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "byBranch": {
        "Cincinnati": {
          "invoiced": 194267,
          "count": 367
        },
        "Raleigh": {
          "invoiced": 374214.54999999935,
          "count": 512
        },
        "DC Metro": {
          "invoiced": 165226.84,
          "count": 101
        },
        "Dayton": {
          "invoiced": 36125,
          "count": 62
        },
        "Detroit": {
          "invoiced": 481902.95,
          "count": 349
        },
        "Columbus": {
          "invoiced": 632647.1500000001,
          "count": 726
        },
        "Richmond": {
          "invoiced": 36175,
          "count": 34
        },
        "Nashville": {
          "invoiced": 112252.34,
          "count": 106
        },
        "Indianapolis": {
          "invoiced": 15490,
          "count": 18
        },
        "Cleveland": {
          "invoiced": 103857.70999999999,
          "count": 186
        },
        "Knoxville": {
          "invoiced": 2000,
          "count": 6
        },
        "Grand Rapids": {
          "invoiced": 500,
          "count": 1
        },
        "Greenville": {
          "invoiced": 1616.1799999999998,
          "count": 2
        }
      },
      "latestInvoiceDate": "2026-05-06"
    },
    "installServiceOverlap": {
      "sourceFile": "All Jobs with WOs and SAs-2026-05-07-08-38-55.xlsx",
      "rowCount": 7998,
      "totals": {
        "installJobs": 1601,
        "installJobsWithSvc": 203,
        "installAccounts": 1507,
        "installAccountsWithSvc": 143,
        "repairWOsAtInstallAccts": 2320,
        "hoursAtInstallAccts": 0,
        "avgHoursPerWO": 0,
        "repairAmtAtInstallAccts": 1207441
      },
      "buckets": {
        "<1h": 0,
        "1-2h": 0,
        "2-4h": 0,
        "4-8h": 0,
        ">8h": 0
      },
      "branchRows": [
        {
          "branch": "Columbus",
          "installJobs": 534,
          "installJobsWithSvc": 73,
          "repairWOs": 614,
          "hours": 0,
          "repairAmt": 252894.44
        },
        {
          "branch": "Raleigh",
          "installJobs": 86,
          "installJobsWithSvc": 25,
          "repairWOs": 624,
          "hours": 0,
          "repairAmt": 315117
        },
        {
          "branch": "Detroit",
          "installJobs": 261,
          "installJobsWithSvc": 20,
          "repairWOs": 317,
          "hours": 0,
          "repairAmt": 251241.5
        },
        {
          "branch": "Cleveland",
          "installJobs": 124,
          "installJobsWithSvc": 19,
          "repairWOs": 178,
          "hours": 0,
          "repairAmt": 82087
        },
        {
          "branch": "Cincinnati",
          "installJobs": 85,
          "installJobsWithSvc": 18,
          "repairWOs": 372,
          "hours": 0,
          "repairAmt": 109674
        },
        {
          "branch": "DC Metro",
          "installJobs": 117,
          "installJobsWithSvc": 16,
          "repairWOs": 52,
          "hours": 0,
          "repairAmt": 126763
        },
        {
          "branch": "Nashville",
          "installJobs": 129,
          "installJobsWithSvc": 15,
          "repairWOs": 38,
          "hours": 0,
          "repairAmt": 23274
        },
        {
          "branch": "Dayton",
          "installJobs": 98,
          "installJobsWithSvc": 6,
          "repairWOs": 91,
          "hours": 0,
          "repairAmt": 29465
        },
        {
          "branch": "Richmond",
          "installJobs": 68,
          "installJobsWithSvc": 5,
          "repairWOs": 7,
          "hours": 0,
          "repairAmt": 2175
        },
        {
          "branch": "Indianapolis",
          "installJobs": 4,
          "installJobsWithSvc": 3,
          "repairWOs": 24,
          "hours": 0,
          "repairAmt": 13150
        },
        {
          "branch": "Knoxville",
          "installJobs": 57,
          "installJobsWithSvc": 2,
          "repairWOs": 1,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "branch": "Grand Rapids",
          "installJobs": 10,
          "installJobsWithSvc": 1,
          "repairWOs": 2,
          "hours": 0,
          "repairAmt": 1600
        },
        {
          "branch": "Greenville",
          "installJobs": 28,
          "installJobsWithSvc": 0,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        }
      ],
      "tradeRows": [
        {
          "trade": "Roofing",
          "installJobs": 1387,
          "installJobsWithSvc": 155,
          "repairWOs": 2038,
          "hours": 0,
          "repairAmt": 1027587.9400000001
        },
        {
          "trade": "Gutters",
          "installJobs": 96,
          "installJobsWithSvc": 24,
          "repairWOs": 140,
          "hours": 0,
          "repairAmt": 80936
        },
        {
          "trade": "Siding",
          "installJobs": 90,
          "installJobsWithSvc": 19,
          "repairWOs": 119,
          "hours": 0,
          "repairAmt": 72540
        },
        {
          "trade": "Other",
          "installJobs": 2,
          "installJobsWithSvc": 2,
          "repairWOs": 9,
          "hours": 0,
          "repairAmt": 15145
        },
        {
          "trade": "Windows",
          "installJobs": 14,
          "installJobsWithSvc": 2,
          "repairWOs": 4,
          "hours": 0,
          "repairAmt": 350
        },
        {
          "trade": "Flat Roof",
          "installJobs": 3,
          "installJobsWithSvc": 1,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Door",
          "installJobs": 0,
          "installJobsWithSvc": 0,
          "repairWOs": 1,
          "hours": 0,
          "repairAmt": 1282
        },
        {
          "trade": "Carpentry",
          "installJobs": 0,
          "installJobsWithSvc": 0,
          "repairWOs": 1,
          "hours": 0,
          "repairAmt": 350
        },
        {
          "trade": "Masonry",
          "installJobs": 5,
          "installJobsWithSvc": 0,
          "repairWOs": 7,
          "hours": 0,
          "repairAmt": 9250
        },
        {
          "trade": "GAF Solar",
          "installJobs": 1,
          "installJobsWithSvc": 0,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Metal",
          "installJobs": 1,
          "installJobsWithSvc": 0,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Rack Mounted Solar",
          "installJobs": 2,
          "installJobsWithSvc": 0,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Painting",
          "installJobs": 0,
          "installJobsWithSvc": 0,
          "repairWOs": 1,
          "hours": 0,
          "repairAmt": 0
        }
      ],
      "accountRows": [
        {
          "account": "David Floyd and Associates",
          "installJobs": 2,
          "installAmt": 304360.45,
          "repairWOs": 1,
          "hours": 0,
          "repairAmt": 350
        },
        {
          "account": "James fordyce fascia",
          "installJobs": 2,
          "installAmt": 46970,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Leanne McCoy",
          "installJobs": 1,
          "installAmt": 0,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Melany Herrera",
          "installJobs": 1,
          "installAmt": 11672.73,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Mary Creasman",
          "installJobs": 1,
          "installAmt": 8080,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Mike Walsh",
          "installJobs": 1,
          "installAmt": 24000,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Terry Wilson",
          "installJobs": 1,
          "installAmt": 25400,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Anthony Traylor",
          "installJobs": 1,
          "installAmt": 23095,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Brett Bonda",
          "installJobs": 1,
          "installAmt": 5485,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Professional Properties Management",
          "installJobs": 3,
          "installAmt": 392750,
          "repairWOs": 82,
          "hours": 0,
          "repairAmt": 36410
        },
        {
          "account": "Michelle Richardson",
          "installJobs": 1,
          "installAmt": 18159,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Susan Mullins",
          "installJobs": 1,
          "installAmt": 18616,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Ken Wood",
          "installJobs": 1,
          "installAmt": 29175,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Donald Kelly",
          "installJobs": 1,
          "installAmt": 20741,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Mike Fullen",
          "installJobs": 1,
          "installAmt": 17054,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Tracy Johnson",
          "installJobs": 1,
          "installAmt": 16659,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Jean Penrod",
          "installJobs": 1,
          "installAmt": 24788.81,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "MBR watch Harbour",
          "installJobs": 1,
          "installAmt": 16485,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Abbington of Arlington",
          "installJobs": 1,
          "installAmt": 234852.03,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Kolette and Mike Hoyle",
          "installJobs": 1,
          "installAmt": 19869.45,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Vicki Seraphim",
          "installJobs": 1,
          "installAmt": 25836,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Samantha Seibel",
          "installJobs": 1,
          "installAmt": 2000,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Danielle Gilliam",
          "installJobs": 1,
          "installAmt": 26787,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Priestley Management Company",
          "installJobs": 2,
          "installAmt": 56240.2,
          "repairWOs": 201,
          "hours": 0,
          "repairAmt": 131812
        },
        {
          "account": "CAS, Inc",
          "installJobs": 4,
          "installAmt": 293459,
          "repairWOs": 25,
          "hours": 0,
          "repairAmt": 8500
        }
      ],
      "installJobRows": [
        {
          "jobNumber": "Job-106099",
          "account": "David Floyd and Associates",
          "branch": "Nashville",
          "trade": "Roofing",
          "salesperson": "Aaron Ellis",
          "installAmt": 289430.45,
          "acctRepairWOs": 1,
          "acctHours": 0,
          "acctRepairAmt": 350
        },
        {
          "jobNumber": "Job-110059",
          "account": "David Floyd and Associates",
          "branch": "Nashville",
          "trade": "Roofing",
          "salesperson": "Aaron Ellis",
          "installAmt": 14930,
          "acctRepairWOs": 1,
          "acctHours": 0,
          "acctRepairAmt": 350
        },
        {
          "jobNumber": "Job-106158",
          "account": "Professional Properties Management",
          "branch": "Raleigh",
          "trade": "Roofing",
          "salesperson": "Evan Hall",
          "installAmt": 239011,
          "acctRepairWOs": 82,
          "acctHours": 0,
          "acctRepairAmt": 36410
        },
        {
          "jobNumber": "Job-106790",
          "account": "Professional Properties Management",
          "branch": "Raleigh",
          "trade": "Roofing",
          "salesperson": "Evan Hall",
          "installAmt": 88501,
          "acctRepairWOs": 82,
          "acctHours": 0,
          "acctRepairAmt": 36410
        },
        {
          "jobNumber": "Job-111502",
          "account": "Professional Properties Management",
          "branch": "Raleigh",
          "trade": "Roofing",
          "salesperson": "Evan Hall",
          "installAmt": 65238,
          "acctRepairWOs": 82,
          "acctHours": 0,
          "acctRepairAmt": 36410
        },
        {
          "jobNumber": "Job-106231",
          "account": "Priestley Management Company",
          "branch": "Raleigh",
          "trade": "Roofing",
          "salesperson": "Evan Hall",
          "installAmt": 21133.2,
          "acctRepairWOs": 201,
          "acctHours": 0,
          "acctRepairAmt": 131812
        },
        {
          "jobNumber": "Job-112287",
          "account": "Priestley Management Company",
          "branch": "Raleigh",
          "trade": "Roofing",
          "salesperson": "Evan Hall",
          "installAmt": 35107,
          "acctRepairWOs": 201,
          "acctHours": 0,
          "acctRepairAmt": 131812
        },
        {
          "jobNumber": "Job-106238",
          "account": "CAS, Inc",
          "branch": "Raleigh",
          "trade": "Roofing",
          "salesperson": "Evan Hall",
          "installAmt": 68342,
          "acctRepairWOs": 25,
          "acctHours": 0,
          "acctRepairAmt": 8500
        },
        {
          "jobNumber": "Job-108117",
          "account": "CAS, Inc",
          "branch": "Raleigh",
          "trade": "Roofing",
          "salesperson": "Evan Hall",
          "installAmt": 32760,
          "acctRepairWOs": 25,
          "acctHours": 0,
          "acctRepairAmt": 8500
        },
        {
          "jobNumber": "Job-112081",
          "account": "CAS, Inc",
          "branch": "Raleigh",
          "trade": "Roofing",
          "salesperson": "Evan Hall",
          "installAmt": 144680,
          "acctRepairWOs": 25,
          "acctHours": 0,
          "acctRepairAmt": 8500
        },
        {
          "jobNumber": "Job-112084",
          "account": "CAS, Inc",
          "branch": "Raleigh",
          "trade": "Gutters",
          "salesperson": "Lisa Gibson",
          "installAmt": 47677,
          "acctRepairWOs": 25,
          "acctHours": 0,
          "acctRepairAmt": 8500
        },
        {
          "jobNumber": "Job-106240",
          "account": "Hal Breitenberg",
          "branch": "Richmond",
          "trade": "Gutters",
          "salesperson": "Griffin Keller",
          "installAmt": 979,
          "acctRepairWOs": 1,
          "acctHours": 0,
          "acctRepairAmt": 0
        },
        {
          "jobNumber": "Job-106258",
          "account": "Wake HOA Management",
          "branch": "Raleigh",
          "trade": "Roofing",
          "salesperson": "Evan Hall",
          "installAmt": 129419.7,
          "acctRepairWOs": 1,
          "acctHours": 0,
          "acctRepairAmt": 1275
        },
        {
          "jobNumber": "Job-106276",
          "account": "Gates Hudson Multifamily",
          "branch": "DC Metro",
          "trade": "Roofing",
          "salesperson": "Lisa Gibson",
          "installAmt": 0,
          "acctRepairWOs": 1,
          "acctHours": 0,
          "acctRepairAmt": 0
        },
        {
          "jobNumber": "Job-111500",
          "account": "Gates Hudson Multifamily",
          "branch": "DC Metro",
          "trade": "Roofing",
          "salesperson": "Marko Jovanovic",
          "installAmt": 41931,
          "acctRepairWOs": 1,
          "acctHours": 0,
          "acctRepairAmt": 0
        },
        {
          "jobNumber": "Job-106317",
          "account": "Barrett & Stokely Inc",
          "branch": "Indianapolis",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 8100,
          "acctRepairWOs": 7,
          "acctHours": 0,
          "acctRepairAmt": 8432
        },
        {
          "jobNumber": "Job-106320",
          "account": "Associa Tennessee",
          "branch": "Nashville",
          "trade": "Gutters",
          "salesperson": "Aaron Ellis",
          "installAmt": 880,
          "acctRepairWOs": 17,
          "acctHours": 0,
          "acctRepairAmt": 6100
        },
        {
          "jobNumber": "Job-106324",
          "account": "Kirkpatrick Management Company - Indianapolis",
          "branch": "Indianapolis",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 75825,
          "acctRepairWOs": 17,
          "acctHours": 0,
          "acctRepairAmt": 5900
        },
        {
          "jobNumber": "Job-106343",
          "account": "Monarch Investment and Management Group",
          "branch": "Cleveland",
          "trade": "Siding",
          "salesperson": "Nicholas Andrukat",
          "installAmt": 7616.5,
          "acctRepairWOs": 1,
          "acctHours": 0,
          "acctRepairAmt": 0
        },
        {
          "jobNumber": "Job-106348",
          "account": "Towne Properties - Northern Kentucky",
          "branch": "Cincinnati",
          "trade": "Siding",
          "salesperson": "Mark Leedy",
          "installAmt": 40825,
          "acctRepairWOs": 21,
          "acctHours": 0,
          "acctRepairAmt": 4700
        },
        {
          "jobNumber": "Job-106353",
          "account": "Towne Properties - Northern Kentucky",
          "branch": "Cincinnati",
          "trade": "Siding",
          "salesperson": "Mark Leedy",
          "installAmt": 42560,
          "acctRepairWOs": 21,
          "acctHours": 0,
          "acctRepairAmt": 4700
        },
        {
          "jobNumber": "Job-109960",
          "account": "Towne Properties - Northern Kentucky",
          "branch": "Cincinnati",
          "trade": "Gutters",
          "salesperson": "Mark Leedy",
          "installAmt": 10847,
          "acctRepairWOs": 21,
          "acctHours": 0,
          "acctRepairAmt": 4700
        },
        {
          "jobNumber": "Job-106474",
          "account": "Charles Moodispaw",
          "branch": "Columbus",
          "trade": "Roofing",
          "salesperson": "Nick Junker",
          "installAmt": 12200,
          "acctRepairWOs": 1,
          "acctHours": 0,
          "acctRepairAmt": 0
        },
        {
          "jobNumber": "Job-106519",
          "account": "Charleston Management",
          "branch": "Raleigh",
          "trade": "Gutters",
          "salesperson": "Evan Hall",
          "installAmt": 1481,
          "acctRepairWOs": 110,
          "acctHours": 0,
          "acctRepairAmt": 49045
        },
        {
          "jobNumber": "Job-108843",
          "account": "Charleston Management",
          "branch": "Raleigh",
          "trade": "Roofing",
          "salesperson": "Evan Hall",
          "installAmt": 44356.8,
          "acctRepairWOs": 110,
          "acctHours": 0,
          "acctRepairAmt": 49045
        }
      ]
    },
    "tabs": []
  },
  "SERVICE_CALLS": {
    "_source": "calculator/service-calls.js Service-Calls-v1.0-2026-05-06",
    "title": "Service Calls YTD",
    "subtitle": "Service Appointments · 5,588 calls across 60 techs · ",
    "sourceFile": "Service Appointments YTD-2026-05-07-08-38-47.xlsx",
    "headerMeta": {
      "totalAppts": 5588,
      "uniqTechs": 60,
      "uniqWOs": 1869,
      "uniqAccounts": 3,
      "uniqJobs": 325,
      "totalHours": 0,
      "totalBillable": 0,
      "networkBillRatio": 0,
      "totalContract": 0,
      "avgMinPerAppt": 0,
      "aptsCompleted": 0,
      "aptsOpen": 5588,
      "monthsCovered": 0
    },
    "kpis": [
      {
        "label": "Appointments YTD",
        "value": "5,588",
        "sub": "0 months · 1,869 work orders",
        "tone": "info"
      },
      {
        "label": "Service Techs",
        "value": "60",
        "sub": "distinct primary resources",
        "tone": "info"
      },
      {
        "label": "Total Hours",
        "value": "0 h",
        "sub": "avg 0 min/appt",
        "tone": "info"
      },
      {
        "label": "Billable Man-Hours",
        "value": "0 h",
        "sub": "0.00x actual (laborers × time)",
        "tone": "info"
      },
      {
        "label": "Contract $ on Calls",
        "value": "$0",
        "sub": "3 unique accounts",
        "tone": "good"
      },
      {
        "label": "Open Appointments",
        "value": "5,588",
        "sub": "no Actual End in Salesforce",
        "tone": "warn"
      }
    ],
    "monthly": [],
    "techRows": [
      {
        "tech": "(unassigned)",
        "count": 1020,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 112,
        "accounts": 3,
        "branches": "(unassigned), 2"
      },
      {
        "tech": "Darren Vaught",
        "count": 315,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 19,
        "accounts": 3,
        "branches": "(unassigned), 1, 1.5, 11, 17, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 8, 9"
      },
      {
        "tech": "Kevin Green",
        "count": 292,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 19,
        "accounts": 2,
        "branches": "(unassigned), 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 7, 7.5, 9"
      },
      {
        "tech": "Nick Foster",
        "count": 279,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 30,
        "accounts": 3,
        "branches": "(unassigned), 1, 1.5, 11, 13.5, 16.5, 19.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 7.5"
      },
      {
        "tech": "Chris Coyour",
        "count": 278,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 37,
        "accounts": 3,
        "branches": "(unassigned), 1, 1.5, 10.5, 12, 14.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 64, 7, 8"
      },
      {
        "tech": "Nick Velazquez",
        "count": 261,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 31,
        "accounts": 3,
        "branches": "(unassigned), 1, 1.5, 10, 17, 17.5, 19, 2, 2.5, 20.5, 22, 3, 3.5, 4, 5, 6, 7, 90"
      },
      {
        "tech": "Matt Large",
        "count": 254,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 24,
        "accounts": 3,
        "branches": "(unassigned), 1, 1.5, 10, 11, 12, 17, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 7.5, 8, 9"
      },
      {
        "tech": "Randy Pfeiffer",
        "count": 237,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 16,
        "accounts": 3,
        "branches": "(unassigned), 1, 1.5, 12, 2, 2.5, 3, 3.5, 4, 4.5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9"
      },
      {
        "tech": "Richard Hoffman",
        "count": 232,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 38,
        "accounts": 3,
        "branches": "(unassigned), 1, 1.5, 12, 13, 14.5, 2, 2.5, 21.5, 29, 3, 3.5, 4, 4.5, 5, 5.5, 6, 7, 7.5, 724, 8, 9"
      },
      {
        "tech": "Matt Velazquez",
        "count": 212,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 15,
        "accounts": 3,
        "branches": "(unassigned), 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7"
      },
      {
        "tech": "Andrew Pruitt",
        "count": 212,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 12,
        "accounts": 3,
        "branches": "(unassigned), 1, 1.5, 2, 2.5, 20.5, 3, 3.5, 4, 4.5, 5"
      },
      {
        "tech": "David Frindt",
        "count": 207,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 33,
        "accounts": 3,
        "branches": "(unassigned), 1, 1.5, 15, 2, 2.5, 3, 3.5, 4.5, 5, 6, 8, 8.5"
      },
      {
        "tech": "Andrii Shvets",
        "count": 203,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 15,
        "accounts": 3,
        "branches": "(unassigned), 1, 1.5, 10, 12, 13, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 7"
      },
      {
        "tech": "Jose Cartagena",
        "count": 193,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 24,
        "accounts": 3,
        "branches": "(unassigned), 1, 1.5, 10, 13, 132, 17, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8, 9"
      },
      {
        "tech": "Will Vickers",
        "count": 173,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 38,
        "accounts": 3,
        "branches": "(unassigned), 1, 1.5, 10, 106, 11, 12, 16, 16.5, 17, 19.5, 2, 3, 374, 4, 4.5, 5, 6, 7, 7.5, 8, 9, 90"
      },
      {
        "tech": "Ricardo Nunez",
        "count": 170,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 34,
        "accounts": 3,
        "branches": "(unassigned), 1, 10, 10.5, 13, 2, 2.5, 3, 4, 4.5, 5, 6, 7, 7.5, 8, 9"
      },
      {
        "tech": "Edwin Irizarry-Vasquez",
        "count": 163,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 33,
        "accounts": 3,
        "branches": "(unassigned), 1.5, 11, 12, 16, 2, 3, 4, 4.5, 5, 6, 7, 7.5, 8, 9"
      },
      {
        "tech": "Santos Alfaro-Delcid",
        "count": 99,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 26,
        "accounts": 2,
        "branches": "(unassigned), 1, 1.5, 12, 15, 16, 16.5, 165, 17, 2, 2.5, 23.5, 28.5, 3, 3.5, 32, 4, 4.5, 5, 5.5, 6, 6.5, 67.5, 7.5, 8, 960"
      },
      {
        "tech": "Rene Alvarado",
        "count": 99,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 33,
        "accounts": 2,
        "branches": "(unassigned), 1, 1.5, 10, 10.5, 11, 14.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 8.5, 9, 9.5"
      },
      {
        "tech": "G3 Construction",
        "count": 94,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 10,
        "accounts": 3,
        "branches": "(unassigned), 1"
      },
      {
        "tech": "Jose Alberto-Amaya",
        "count": 93,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 27,
        "accounts": 2,
        "branches": "(unassigned), 1, 1.5, 10.5, 11, 15, 2, 2.5, 3, 3.5, 33, 4, 4.5, 5, 5.5, 6, 7.5, 9.5"
      },
      {
        "tech": "Wilver Velasquez",
        "count": 88,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 29,
        "accounts": 3,
        "branches": "(unassigned), 1, 1.5, 11, 16, 2, 2.5, 22, 24, 3, 3.5, 4, 4.5, 5, 7, 9, 9.5"
      },
      {
        "tech": "Israel Velasquez",
        "count": 85,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 38,
        "accounts": 3,
        "branches": "(unassigned), 1, 1.5, 10, 12, 19, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 8, 8.5, 9, 9.5"
      },
      {
        "tech": "Ethan Epperson",
        "count": 69,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 19,
        "accounts": 2,
        "branches": "(unassigned), 1, 1.5, 2, 2.5, 278, 286, 3, 4, 5, 6, 7, 8, 9"
      },
      {
        "tech": "GGM Guillermo Campuzano",
        "count": 34,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 28,
        "accounts": 3,
        "branches": "(unassigned)"
      },
      {
        "tech": "Above All Exteriors LLC",
        "count": 34,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 33,
        "accounts": 2,
        "branches": "(unassigned)"
      },
      {
        "tech": "David Salisbury",
        "count": 33,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 4,
        "accounts": 2,
        "branches": "(unassigned), 1, 2"
      },
      {
        "tech": "Daniel Brown",
        "count": 29,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 11,
        "accounts": 3,
        "branches": "(unassigned), 1, 2, 2.5, 3, 33.5, 6, 7.5, 8"
      },
      {
        "tech": "Alonzie/Lonnie Wright",
        "count": 29,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 6,
        "accounts": 3,
        "branches": "(unassigned), 2, 4"
      },
      {
        "tech": "Ryan Brady",
        "count": 20,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 6,
        "accounts": 2,
        "branches": "(unassigned), 1.5, 2, 2.5, 3, 3.5, 4.5, 5, 5.5, 7.5"
      },
      {
        "tech": "ASM Construction",
        "count": 11,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 11,
        "accounts": 2,
        "branches": "(unassigned)"
      },
      {
        "tech": "Ignacio Roofing and Siding",
        "count": 10,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 9,
        "accounts": 2,
        "branches": "(unassigned), 1"
      },
      {
        "tech": "PREMIER ROOFING",
        "count": 6,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 5,
        "accounts": 2,
        "branches": "(unassigned)"
      },
      {
        "tech": "Rene/Choppo",
        "count": 5,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 3,
        "accounts": 3,
        "branches": "(unassigned)"
      },
      {
        "tech": "Allied Gutter Company",
        "count": 5,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 4,
        "accounts": 2,
        "branches": "(unassigned), 2"
      },
      {
        "tech": "Intermediaries In Construction Services LLC",
        "count": 5,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 2,
        "accounts": 2,
        "branches": "(unassigned), 5"
      },
      {
        "tech": "EAL Roofing",
        "count": 4,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 2,
        "accounts": 2,
        "branches": "(unassigned)"
      },
      {
        "tech": "JMU Construction",
        "count": 3,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 1,
        "accounts": 1,
        "branches": "(unassigned)"
      },
      {
        "tech": "Skillz Contracting Co",
        "count": 3,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 3,
        "accounts": 1,
        "branches": "(unassigned)"
      },
      {
        "tech": "Manuel Vega",
        "count": 3,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 3,
        "accounts": 2,
        "branches": "37, 4, 6"
      },
      {
        "tech": "Corey Parrett",
        "count": 3,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 0,
        "accounts": 1,
        "branches": "(unassigned)"
      },
      {
        "tech": "Arias Builders",
        "count": 2,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 2,
        "accounts": 1,
        "branches": "(unassigned)"
      },
      {
        "tech": "Cameron Campbell",
        "count": 2,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 1,
        "accounts": 1,
        "branches": "2"
      },
      {
        "tech": "Hernandez Roofing",
        "count": 2,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 2,
        "accounts": 0,
        "branches": "(unassigned)"
      },
      {
        "tech": "Casa Home Services, LLC",
        "count": 2,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 2,
        "accounts": 0,
        "branches": "(unassigned)"
      },
      {
        "tech": "EVER ROOFING",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 0,
        "accounts": 1,
        "branches": "8"
      },
      {
        "tech": "Tase Inc",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 0,
        "accounts": 1,
        "branches": "(unassigned)"
      },
      {
        "tech": "JLT Roofing & Construction LLC",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 1,
        "accounts": 1,
        "branches": "(unassigned)"
      },
      {
        "tech": "Chris Kerns",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 1,
        "accounts": 0,
        "branches": "(unassigned)"
      },
      {
        "tech": "Orman Construction",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 1,
        "accounts": 0,
        "branches": "(unassigned)"
      },
      {
        "tech": "A&H Roofing Services",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 1,
        "accounts": 1,
        "branches": "10"
      },
      {
        "tech": "JCR Roofing, LLC",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 1,
        "accounts": 0,
        "branches": "(unassigned)"
      },
      {
        "tech": "Edwin Morales Roofing",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 1,
        "accounts": 0,
        "branches": "8"
      },
      {
        "tech": "A1 Exteriors",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 1,
        "accounts": 0,
        "branches": "(unassigned)"
      },
      {
        "tech": "AB6",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 1,
        "accounts": 1,
        "branches": "(unassigned)"
      },
      {
        "tech": "Zunun Roofing LLC",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 0,
        "accounts": 1,
        "branches": "(unassigned)"
      },
      {
        "tech": "Almez Renovations",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 1,
        "accounts": 0,
        "branches": "(unassigned)"
      },
      {
        "tech": "Wili's Alpha Construction",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 1,
        "accounts": 0,
        "branches": "(unassigned)"
      },
      {
        "tech": "Confidential Information - Do Not Distribute",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 0,
        "accounts": 0,
        "branches": "(unassigned)"
      },
      {
        "tech": "Copyright © 2000-2026 salesforce.com, inc. All rights reserved.",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 0,
        "accounts": 0,
        "branches": "(unassigned)"
      }
    ],
    "branchRows": [
      {
        "branch": "(unassigned)",
        "count": 2209,
        "techs": 55,
        "accounts": 3,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "2",
        "count": 772,
        "techs": 29,
        "accounts": 3,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "1",
        "count": 636,
        "techs": 25,
        "accounts": 3,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "1.5",
        "count": 622,
        "techs": 22,
        "accounts": 3,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "3",
        "count": 361,
        "techs": 24,
        "accounts": 3,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "2.5",
        "count": 277,
        "techs": 22,
        "accounts": 3,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "4",
        "count": 140,
        "techs": 23,
        "accounts": 3,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "5",
        "count": 131,
        "techs": 23,
        "accounts": 3,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "3.5",
        "count": 79,
        "techs": 19,
        "accounts": 2,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "6",
        "count": 71,
        "techs": 19,
        "accounts": 3,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "4.5",
        "count": 43,
        "techs": 21,
        "accounts": 3,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "7",
        "count": 39,
        "techs": 15,
        "accounts": 3,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "8",
        "count": 31,
        "techs": 16,
        "accounts": 3,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "9",
        "count": 27,
        "techs": 13,
        "accounts": 2,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "7.5",
        "count": 19,
        "techs": 12,
        "accounts": 3,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "5.5",
        "count": 18,
        "techs": 11,
        "accounts": 2,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "10",
        "count": 14,
        "techs": 9,
        "accounts": 3,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "12",
        "count": 10,
        "techs": 9,
        "accounts": 2,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "11",
        "count": 9,
        "techs": 8,
        "accounts": 2,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "13",
        "count": 7,
        "techs": 4,
        "accounts": 2,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "6.5",
        "count": 7,
        "techs": 4,
        "accounts": 2,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "17",
        "count": 6,
        "techs": 6,
        "accounts": 2,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "16",
        "count": 5,
        "techs": 4,
        "accounts": 2,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "10.5",
        "count": 5,
        "techs": 4,
        "accounts": 2,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "9.5",
        "count": 4,
        "techs": 4,
        "accounts": 2,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "8.5",
        "count": 4,
        "techs": 4,
        "accounts": 2,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "19",
        "count": 3,
        "techs": 2,
        "accounts": 2,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "15",
        "count": 3,
        "techs": 3,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "16.5",
        "count": 3,
        "techs": 3,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "14.5",
        "count": 3,
        "techs": 3,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "19.5",
        "count": 3,
        "techs": 2,
        "accounts": 2,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "22",
        "count": 2,
        "techs": 2,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "20.5",
        "count": 2,
        "techs": 2,
        "accounts": 2,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "90",
        "count": 2,
        "techs": 2,
        "accounts": 2,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "165",
        "count": 1,
        "techs": 1,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "28.5",
        "count": 1,
        "techs": 1,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "23.5",
        "count": 1,
        "techs": 1,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "67.5",
        "count": 1,
        "techs": 1,
        "accounts": 0,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "32",
        "count": 1,
        "techs": 1,
        "accounts": 0,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "960",
        "count": 1,
        "techs": 1,
        "accounts": 0,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "33.5",
        "count": 1,
        "techs": 1,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "286",
        "count": 1,
        "techs": 1,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "278",
        "count": 1,
        "techs": 1,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "132",
        "count": 1,
        "techs": 1,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "21.5",
        "count": 1,
        "techs": 1,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "724",
        "count": 1,
        "techs": 1,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "29",
        "count": 1,
        "techs": 1,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "64",
        "count": 1,
        "techs": 1,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "24",
        "count": 1,
        "techs": 1,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "33",
        "count": 1,
        "techs": 1,
        "accounts": 0,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "17.5",
        "count": 1,
        "techs": 1,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "374",
        "count": 1,
        "techs": 1,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "106",
        "count": 1,
        "techs": 1,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "13.5",
        "count": 1,
        "techs": 1,
        "accounts": 1,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "37",
        "count": 1,
        "techs": 1,
        "accounts": 0,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      }
    ],
    "accountRows": [
      {
        "account": "Time & Material",
        "count": 2861,
        "jobs": 125,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "branches": "(unassigned), 1, 1.5, 2, 2.5, 5, 3, 6, 4, 3.5, 4.5, 8, 5.5, 19, 12, 7, 28.5, 17, 6.5, 16.5, 9, 10, 286, 278, 7.5, 132, 13, 21.5, 8.5, 16, 11, 24, 22, 10.5, 14.5, 9.5, 15, 20.5, 17.5, 374, 90, 106"
      },
      {
        "account": "Warranty",
        "count": 2058,
        "jobs": 18,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "branches": "(unassigned), 1, 2, 3, 1.5, 2.5, 6, 11, 5.5, 3.5, 17, 4, 7, 4.5, 5, 12, 10, 13, 8, 9.5, 165, 23.5, 16, 7.5, 33.5, 9, 10.5, 6.5, 8.5, 724, 29, 64, 20.5, 90, 19, 19.5, 13.5"
      },
      {
        "account": "Contracted Work",
        "count": 162,
        "jobs": 76,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "branches": "3, 1.5, (unassigned), 2, 2.5, 5, 10, 6, 4, 8, 1, 7.5, 4.5, 7, 19.5"
      }
    ],
    "woStats": {
      "stuck": [],
      "inProgress60Plus": [
        {
          "wo": "00201259",
          "account": "Ernest Bedell",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 71.67,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00202625",
          "account": "Avenue5",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 68.78,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00201746",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 64.95,
          "contract": 400,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00201158",
          "account": "Lawrence Community Management Group, Inc",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 58.97,
          "contract": 1300,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00204036",
          "account": "Sentry Management - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 48,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00202568",
          "account": "Associa On Call",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 47.98,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00206354",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Siding",
          "status": "In Progress",
          "subStatus": "Return Trip Required",
          "days": 44.98,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00203249",
          "account": "Condo Management of Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 44.96,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00205594",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 44.79,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00205615",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 43.98,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00206356",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 42.89,
          "contract": 1000,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207505",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 41.72,
          "contract": 1700,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208113",
          "account": "Oakwood Management Company",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 40.03,
          "contract": 1700,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00203665",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Return Trip Required",
          "days": 37.99,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00205350",
          "account": "Windsor Village Condos",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 37.75,
          "contract": 1850,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207091",
          "account": "Carlton Equities",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 36.99,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00206923",
          "account": "Teri Umbarger",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 36.87,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207136",
          "account": "Carlton Equities",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 36.86,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208098",
          "account": "Jim Kerr",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 36.85,
          "contract": 1381,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00206071",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Gutters",
          "status": "In Progress",
          "subStatus": "",
          "days": 36.78,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00206371",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 36.75,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208245",
          "account": "Stephen Russell",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 36.67,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208147",
          "account": "Roger Myers",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 35.99,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208889",
          "account": "Kevin Schoedinger",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 34.81,
          "contract": 0.1,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00206379",
          "account": "Central Buckeye Management and Construction Services, LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 34.76,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208835",
          "account": "Jason Rowland",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 34.7,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00206406",
          "account": "Central Buckeye Management and Construction Services, LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 34.64,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208558",
          "account": "Bialy Corp",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 30.96,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207283",
          "account": "Central Buckeye Management and Construction Services, LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 30.95,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208467",
          "account": "Central Buckeye Management and Construction Services, LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 30.91,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208253",
          "account": "Thomas Cash",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 30.88,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00201023",
          "account": "Sergio Arce (Madison First Baptist Church)",
          "branch": "Nashville",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 29.92,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208786",
          "account": "Good Shepherd Evangelical Church",
          "branch": "Detroit",
          "trade": "Siding",
          "status": "In Progress",
          "subStatus": "",
          "days": 29.81,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00209611",
          "account": "Oakwood Management Company",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 29.8,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00209736",
          "account": "Shelby Jordan",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 29.76,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207835",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Masonry",
          "status": "In Progress",
          "subStatus": "",
          "days": 29.67,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207931",
          "account": "Comsource Management, Inc.",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 29.05,
          "contract": 1800,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00205694",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Siding",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 28.91,
          "contract": 400,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207418",
          "account": "Kramer Triad Management - Ann Arbor",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 28.8,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00206485",
          "account": "Kramer Triad Management - Ann Arbor",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 28.74,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208028",
          "account": "Erin Cox",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 28.71,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00198504",
          "account": "Andrew Hack",
          "branch": "Detroit",
          "trade": "Siding",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.98,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00201679",
          "account": "KC Property Service",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.96,
          "contract": 900,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00203805",
          "account": "In Rhodes Management, Inc",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.91,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00201680",
          "account": "KC Property Service",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.89,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208151",
          "account": "DJ Soriano",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.82,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208665",
          "account": "Herriman & Associates, Inc.",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.82,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00201675",
          "account": "KC Property Service",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.78,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00205649",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.78,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210072",
          "account": "Josh Sheilds",
          "branch": "Nashville",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.78,
          "contract": 835,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207841",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.75,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00202180",
          "account": "B & E Ciotola Enterprises Ltd",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.7,
          "contract": 400,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00209851",
          "account": "Israel Garcia",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.55,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207361",
          "account": "Michael Prodywus",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00204663",
          "account": "Steven Cortese",
          "branch": "Detroit",
          "trade": "Siding",
          "status": "In Progress",
          "subStatus": "",
          "days": 26.98,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00209395",
          "account": "Dan Bunner",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 26.87,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210516",
          "account": "Associa On Call",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 26.84,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207915",
          "account": "Clayman Property Services",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 26.77,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00204523",
          "account": "Rita Repko",
          "branch": "Detroit",
          "trade": "Gutters",
          "status": "In Progress",
          "subStatus": "",
          "days": 26.76,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207754",
          "account": "Associa On Call",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 26.72,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207785",
          "account": "TGM Communities DC",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 24.7,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207406",
          "account": "Compass Management Professionals",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 23.99,
          "contract": 1962,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00203130",
          "account": "Christ Memorial Missionary Baptist Church",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 23.99,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208535",
          "account": "C&F Real Estate",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 23.95,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207765",
          "account": "Associa On Call",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 23.89,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00209296",
          "account": "Nick Despas",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 23.85,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00206831",
          "account": "Kathleen Loucks",
          "branch": "Columbus",
          "trade": "Siding",
          "status": "In Progress",
          "subStatus": "",
          "days": 23.81,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208352",
          "account": "Andrew Tomasch",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 23.74,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210677",
          "account": "Compass Management Professionals",
          "branch": "Detroit",
          "trade": "Gutters",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 23.72,
          "contract": 500,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00209863",
          "account": "Cedar Management Group",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 22.96,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00204332",
          "account": "Central Buckeye Management and Construction Services, LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 22.93,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207993",
          "account": "Joe Rotella",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 22.92,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207639",
          "account": "Central Buckeye Management and Construction Services, LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 22.82,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00206396",
          "account": "Central Buckeye Management and Construction Services, LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 22.81,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00204621",
          "account": "Singh Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 22.8,
          "contract": 500,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210090",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 22.78,
          "contract": 400,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00211040",
          "account": "Naseer Wasim",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 22.71,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00204259",
          "account": "Kramer Triad Management - Novi",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 22.7,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00200472",
          "account": "In Rhodes Management, Inc",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 21.87,
          "contract": 500,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210328",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 21.76,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207411",
          "account": "Lori Criner",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 21.75,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00209432",
          "account": "Hari Sunkara",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 21.73,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210125",
          "account": "Oakwood Management Company",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.99,
          "contract": 750,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210424",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.99,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00204194",
          "account": "KS Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.98,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210263",
          "account": "Mike Breakwell",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.95,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210155",
          "account": "Compass Management Professionals",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 20.91,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00211256",
          "account": "Barrington Apartment Homes",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.91,
          "contract": 500,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210461",
          "account": "Condo Management of Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.8,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00211240",
          "account": "Erinn Estates",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.79,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207539",
          "account": "Banyan Living LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.76,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207633",
          "account": "Banyan Living LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.76,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00198947",
          "account": "O'Brien Association Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.64,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00204394",
          "account": "O'Brien Association Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.64,
          "contract": 600,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210361",
          "account": "Natalie Crafts",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.64,
          "contract": 1100,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210895",
          "account": "Singh Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19.96,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00209388",
          "account": "Compass Management Professionals",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19.93,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210714",
          "account": "Michigan Condominium Management Co",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Work Completed",
          "days": 19.92,
          "contract": 500,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00203810",
          "account": "Herriman & Associates, Inc.",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19.91,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00206700",
          "account": "Jan Wolff",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19.91,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00211590",
          "account": "Redwood Living Inc.",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19.89,
          "contract": 450,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210584",
          "account": "Jacob Nysson",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19.83,
          "contract": 500,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00201932",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19.79,
          "contract": 850,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00211654",
          "account": "Condominium Management Associates, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19.76,
          "contract": 600,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210333",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19.68,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00209891",
          "account": "Sunrise Treatment Center",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 17.05,
          "contract": 2278.82,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00205897",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 16.98,
          "contract": 1600,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00211098",
          "account": "WPM Real Estate Management",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 16.97,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210423",
          "account": "Victor Cassar Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 16.95,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210781",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 16.88,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210025",
          "account": "Herriman & Associates, Inc.",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 16.88,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00209646",
          "account": "Michael Donahue",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 16.73,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210345",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 16.67,
          "contract": 400,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00205378",
          "account": "Faith United Methodist Church",
          "branch": "DC Metro",
          "trade": "Windows",
          "status": "In Progress",
          "subStatus": "",
          "days": 16.02,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00209539",
          "account": "Harrison Skye",
          "branch": "DC Metro",
          "trade": "Windows",
          "status": "In Progress",
          "subStatus": "",
          "days": 16.02,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00209857",
          "account": "WPM Real Estate Management",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 16.02,
          "contract": 600,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00204321",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.98,
          "contract": 1300,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210491",
          "account": "Singh Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.98,
          "contract": 500,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210953",
          "account": "Donwater Properties, LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.95,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210237",
          "account": "Murn Properties",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.88,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210577",
          "account": "Singh Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.87,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210998",
          "account": "Sentry Management - East Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.87,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210154",
          "account": "Kramer Triad Management - Ann Arbor",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.82,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210587",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.81,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00205598",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.8,
          "contract": 400,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00206234",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.79,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208855",
          "account": "KS Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.78,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00204610",
          "account": "Marilyn VanTassel",
          "branch": "Detroit",
          "trade": "Siding",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.77,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208886",
          "account": "David Ohm",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.75,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00206046",
          "account": "O'Brien Association Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.99,
          "contract": 500,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00209484",
          "account": "Draiman Properties",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.99,
          "contract": 1525,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00211054",
          "account": "Adam Sherman",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.99,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210944",
          "account": "Vaughan Group Ltd",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.97,
          "contract": 400,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210046",
          "account": "KS Management",
          "branch": "Detroit",
          "trade": "Siding",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.94,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00211261",
          "account": "Ackermann Group",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.93,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210682",
          "account": "Wenzell Carter",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.92,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208851",
          "account": "Kramer Triad Management - Ann Arbor",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.91,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210500",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.9,
          "contract": 1000,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00207365",
          "account": "Brian Shang",
          "branch": "Columbus",
          "trade": "Siding",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.82,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210330",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Work Completed",
          "days": 14.81,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210007",
          "account": "Kyle Belman",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.73,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210850",
          "account": "Condo Management of Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.72,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00211306",
          "account": "Condo Management of Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.71,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00204391",
          "account": "Condo Administrators",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.68,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        }
      ],
      "notStarted": [
        {
          "wo": "00198032",
          "account": "Associa Tennessee",
          "branch": "Nashville",
          "trade": "Roofing",
          "status": "Pending Insurance Claim",
          "subStatus": "",
          "days": 119.82,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00197919",
          "account": "Gene Peter Melnik GAF Solar",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "On Hold",
          "subStatus": "Spring Hold",
          "days": 111.8,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00198750",
          "account": "Associa Tennessee",
          "branch": "Nashville",
          "trade": "Roofing",
          "status": "Pending Insurance Claim",
          "subStatus": "",
          "days": 110.89,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00198489",
          "account": "Associa Tennessee",
          "branch": "Nashville",
          "trade": "Roofing",
          "status": "Pending Insurance Claim",
          "subStatus": "",
          "days": 107.77,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00199177",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 98.93,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00199911",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Gutters",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 92.86,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00198653",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 90.63,
          "contract": 500,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00198212",
          "account": "Condo Management of Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 89.73,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00198257",
          "account": "Condo Management of Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 89.47,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00198154",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 89.41,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00200239",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 84.92,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00198684",
          "account": "Barnett Management Inc.",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 80.01,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00201187",
          "account": "Linda Creasey",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "On Hold",
          "subStatus": "Pending Sales",
          "days": 79.86,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00198578",
          "account": "Singh Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 79.67,
          "contract": 310,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00199692",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Gutters",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 79.65,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00201620",
          "account": "TH Management Consultants, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Ready to Schedule",
          "subStatus": "",
          "days": 78.96,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00200070",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 78.92,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00201447",
          "account": "Aaron Carroll",
          "branch": "Columbus",
          "trade": "Gutters",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 77.92,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00200692",
          "account": "Professional Properties Management",
          "branch": "Raleigh",
          "trade": "Gutters",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 77.81,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00200898",
          "account": "Tonya Molett",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 77.77,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00202195",
          "account": "KS Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Ready to Schedule",
          "subStatus": "",
          "days": 75.64,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00198680",
          "account": "Condo Management of Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 75.63,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00202287",
          "account": "Sentry Management - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 71.93,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00200135",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 71.76,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00200520",
          "account": "Korcsmaros, Alex",
          "branch": "Nashville",
          "trade": "Roofing",
          "status": "Scheduled",
          "subStatus": "",
          "days": 71.75,
          "contract": 2480,
          "contractSigned": null,
          "hasSA": false
        }
      ],
      "notStartedByStatus": [
        {
          "status": "Ready to Schedule",
          "count": 265,
          "avgDays": 13.8,
          "maxDays": 79
        },
        {
          "status": "Scheduled",
          "count": 261,
          "avgDays": 7.7,
          "maxDays": 71.8
        },
        {
          "status": "Pending Estimate Approval",
          "count": 130,
          "avgDays": 38.9,
          "maxDays": 98.9
        },
        {
          "status": "On Hold",
          "count": 39,
          "avgDays": 24.3,
          "maxDays": 111.8
        },
        {
          "status": "New",
          "count": 36,
          "avgDays": 0.2,
          "maxDays": 7.7
        },
        {
          "status": "Pending Insurance Claim",
          "count": 4,
          "avgDays": 100.3,
          "maxDays": 119.8
        }
      ],
      "notStartedTotal": 735,
      "multiTouch": [
        {
          "wo": "Towne Properties - Columbus",
          "account": "Time & Material",
          "branch": "1",
          "tech": "Darren Vaught",
          "appointments": 230,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Priestley Management Company",
          "account": "Time & Material",
          "branch": "1",
          "tech": "Daniel Brown",
          "appointments": 201,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Capital Property Solutions",
          "account": "Time & Material",
          "branch": "(unassigned)",
          "tech": "Darren Vaught",
          "appointments": 198,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Towne Properties - East Cincinnati District Office",
          "account": "Warranty",
          "branch": "1.5",
          "tech": "Andrii Shvets",
          "appointments": 161,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Towne Properties - Cincinnati West District Office",
          "account": "Warranty",
          "branch": "2",
          "tech": "Andrii Shvets",
          "appointments": 123,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Associated Property Management, LLC",
          "account": "",
          "branch": "1.5",
          "tech": "Randy Pfeiffer",
          "appointments": 118,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Solomon Organization, LLC",
          "account": "Time & Material",
          "branch": "(unassigned)",
          "tech": "Allied Gutter Company",
          "appointments": 117,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Charleston Management",
          "account": "Warranty",
          "branch": "(unassigned)",
          "tech": "Daniel Brown",
          "appointments": 110,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Towne Properties - Raleigh District",
          "account": "Warranty",
          "branch": "7.5",
          "tech": "Daniel Brown",
          "appointments": 110,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Condo Management of Columbus",
          "account": "Warranty",
          "branch": "1",
          "tech": "Darren Vaught",
          "appointments": 103,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Compass Management Professionals",
          "account": "Time & Material",
          "branch": "(unassigned)",
          "tech": "Allied Gutter Company",
          "appointments": 100,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Singh Management",
          "account": "Time & Material",
          "branch": "3",
          "tech": "Ethan Epperson",
          "appointments": 93,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Professional Properties Management",
          "account": "Time & Material",
          "branch": "8",
          "tech": "Daniel Brown",
          "appointments": 82,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "KS Management",
          "account": "Time & Material",
          "branch": "(unassigned)",
          "tech": "Allied Gutter Company",
          "appointments": 80,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Towne Properties - Dayton",
          "account": "Warranty",
          "branch": "7",
          "tech": "Andrii Shvets",
          "appointments": 78,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "RowCal Construction & Maintenance TN, LLC",
          "account": "Time & Material",
          "branch": "2",
          "tech": "Rene Alvarado",
          "appointments": 56,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Associa On Call",
          "account": "Time & Material",
          "branch": "1.5",
          "tech": "Darren Vaught",
          "appointments": 41,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Sentry Management - Columbus",
          "account": "Time & Material",
          "branch": "6",
          "tech": "Darren Vaught",
          "appointments": 37,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "In Rhodes Management, Inc",
          "account": "Time & Material",
          "branch": "3",
          "tech": "Ethan Epperson",
          "appointments": 36,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Kare Condominium Management Company",
          "account": "Time & Material",
          "branch": "(unassigned)",
          "tech": "Richard Hoffman",
          "appointments": 36,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Greystar Real Estate Management - NC",
          "account": "Warranty",
          "branch": "2",
          "tech": "Daniel Brown",
          "appointments": 35,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Link Real Estate Group",
          "account": "Time & Material",
          "branch": "1.5",
          "tech": "Darren Vaught",
          "appointments": 33,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Cedar Management Group",
          "account": "Time & Material",
          "branch": "1",
          "tech": "Darren Vaught",
          "appointments": 32,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Central Buckeye Management and Construction Services, LLC",
          "account": "Time & Material",
          "branch": "2",
          "tech": "Darren Vaught",
          "appointments": 29,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "Eclipse Communites Management",
          "account": "Time & Material",
          "branch": "1.5",
          "tech": "Andrii Shvets",
          "appointments": 29,
          "hours": 0,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        }
      ],
      "disproportionate": []
    },
    "longAppts": [],
    "buckets": {
      "<30m": 5588,
      "30-60m": 0,
      "1-2h": 0,
      "2-4h": 0,
      "4-8h": 0,
      ">8h": 0
    },
    "findings": {
      "concerns": [],
      "watch": [
        "144 work orders are In Progress 14+ days. Oldest: WO 00201259 (72 days, Ernest Bedell). Should be closed or escalated.",
        "735 Repair WOs are not yet started; the oldest has been in \"Pending Insurance Claim\" for 120 days (WO 00198032, Associa Tennessee). Slow-scheduling backlog.",
        "5588 appointments have no Actual End — either still in progress or never closed out. Likely a data hygiene problem in Salesforce."
      ],
      "positives": []
    },
    "benchmarks": {
      "avgBillRatio": 0,
      "avgMinPerAppt": 0
    },
    "tabs": [
      {
        "id": "index",
        "label": "Dashboard Home",
        "short": "Home"
      },
      {
        "id": "appointments",
        "label": "Service Appointments",
        "short": "Appointments"
      },
      {
        "id": "techs",
        "label": "Techs",
        "short": "Techs"
      },
      {
        "id": "branches",
        "label": "Branches",
        "short": "Branches"
      },
      {
        "id": "accounts",
        "label": "Accounts",
        "short": "Accounts"
      },
      {
        "id": "aging",
        "label": "Aging & Warnings",
        "short": "Aging"
      },
      {
        "id": "findings",
        "label": "Findings",
        "short": "Findings"
      }
    ]
  }
};
