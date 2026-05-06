/* AUTO-GENERATED — do not edit. Generated 2026-05-06T20:44:14.546Z (service) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-05-06T20:44:14.546Z",
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
        "elapsedMs": 318,
        "builtAt": "2026-05-06T20:44:14.546Z"
      },
      {
        "id": "service-calls",
        "version": "Service-Calls-v1.0-2026-05-06",
        "elapsedMs": 517,
        "builtAt": "2026-05-06T20:44:14.546Z"
      }
    ]
  },
  "REVENUE_FORECAST": {
    "_source": "calculator/revenue-forecast-service.js Service-v1.0-2026-05-06",
    "title": "Service Revenue Forecast",
    "subtitle": "Service-v1 · Budget-anchored forecast · Data through 2026-05-06",
    "runDate": "2026-05-06",
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
        "value": "$2.14M",
        "sub": "5 months elapsed · 2454 invoices"
      },
      {
        "label": "YTD vs Plan",
        "value": "$-364,785",
        "sub": "Plan YTD: $2.51M",
        "trend": "negative"
      },
      {
        "label": "Annualized Pace",
        "value": "$5.15M",
        "sub": "YTD × 12/5",
        "trend": "negative"
      },
      {
        "label": "Plan-Rest Forecast",
        "value": "$6.25M",
        "sub": "YTD actual + remaining-month plan"
      },
      {
        "label": "Annual Budget",
        "value": "$6.8M",
        "sub": "2026 Service plan"
      },
      {
        "label": "Forecast vs Budget",
        "value": "$-1,652,637",
        "sub": "24.3% uplift needed",
        "trend": "negative"
      },
      {
        "label": "Last Month Revenue",
        "value": "$68K",
        "sub": "May 2026"
      },
      {
        "label": "Last Month vs Plan",
        "value": "$-842,800",
        "sub": "Plan: $910K"
      }
    ],
    "execSummary": {
      "budget": 6800179.4799999995,
      "modelAnnualInvoiced": 5147542.319999989,
      "gap": -1652637.1600000104,
      "narrative": "5 months of FY2026 Service activity reported, $2.14M invoiced YTD. Run-rate annualizes to $5.15M against the $6.8M plan, a $1.65M shortfall (24.3% uplift needed)."
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
        "invoiced": 67607.32,
        "budget": 910406.9363225256,
        "gap": -842799.6163225255
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
      "gap": 1652637.1600000104,
      "upliftPct": 24.302846194877354,
      "aprilGap": 132460.09465102846,
      "q1OriginalBudget": 1118550.2246066653,
      "q1Actual": 1464105.0800000005,
      "q1Shortfall": 345554.8553933352,
      "recoveryRatio": 0
    },
    "profitabilitySummary": {
      "combinedGP": 1197844.86,
      "combinedGP_pct": 61.2465719080278,
      "combinedRevenue": 1955774.5400000003,
      "y2025_GP_pct": 63.811341064889795,
      "y2025_revenue": 1629595.12,
      "y2025_jobs": 896,
      "y2026_GP_pct": 48.43296367379645,
      "y2026_revenue": 326179.42000000004,
      "y2026_jobs": 258,
      "materialCost": 260044.11000000004,
      "laborCost": 486922.7499999998,
      "otherCost": 13240.199999999999,
      "commissions": 65465.050000000025,
      "materialPctContract": 13.296221250533305,
      "laborPctContract": 24.896670860640192,
      "otherPctContract": 0.6769798731504091,
      "commissionPctContract": 3.3472697727213494,
      "sourceFile": "GregProfitabilityServiceResults617.csv",
      "jobsParsed": 1154
    },
    "profitabilityByJobType": [
      {
        "key": "Repair",
        "jobs": 131,
        "revenue": 223353.1,
        "expenses": 112589.25000000001,
        "gross_profit": 110763.85,
        "material": 20089.290000000005,
        "labor": 90187.15000000001,
        "other": 569.28,
        "commission": 9206.37,
        "contract": 232695.04,
        "gp_pct": 49.591364525497966
      },
      {
        "key": "T&M",
        "jobs": 122,
        "revenue": 100476.32,
        "expenses": 51393.66999999997,
        "gross_profit": 49082.65000000003,
        "material": 9795.770000000008,
        "labor": 41863.9,
        "other": 0,
        "commission": 0,
        "contract": 97476.32,
        "gp_pct": 48.84996783321685
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
        "gross_profit": 51085.55000000001,
        "material": 12034.000000000002,
        "labor": 45388.850000000006,
        "other": 369.28,
        "commission": 5784.639999999999,
        "contract": 110283.8,
        "gp_pct": 46.07124755825468
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
        "jobs": 61,
        "revenue": 40345,
        "expenses": 26008.920000000002,
        "gross_profit": 14336.079999999996,
        "material": 6945.760000000002,
        "labor": 19288.760000000002,
        "other": 0,
        "commission": 0,
        "contract": 38947,
        "gp_pct": 35.53372165076217
      },
      {
        "key": "Nashville",
        "jobs": 21,
        "revenue": 33744.84,
        "expenses": 9853.100000000002,
        "gross_profit": 23891.740000000005,
        "material": 2898.88,
        "labor": 6961,
        "other": 100,
        "commission": 2006.11,
        "contract": 33744.84,
        "gp_pct": 70.8011654522588
      },
      {
        "key": "Dayton",
        "jobs": 7,
        "revenue": 7015,
        "expenses": 4741.419999999999,
        "gross_profit": 2273.58,
        "material": 1246.42,
        "labor": 3506,
        "other": 0,
        "commission": 0,
        "contract": 7015,
        "gp_pct": 32.410263720598714
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
        "jobs": 661,
        "revenue": 1381788.0100000002,
        "expenses": 492845.7199999993,
        "gross_profit": 888942.2899999996,
        "material": 197426.89000000004,
        "labor": 289618.4899999999,
        "other": 11365.609999999999,
        "commission": 54914.93000000003,
        "contract": 1336126.3999999994,
        "gp_pct": 64.33275463144302
      },
      {
        "key": "T&M",
        "jobs": 201,
        "revenue": 218284.48,
        "expenses": 81915.74,
        "gross_profit": 136368.73999999996,
        "material": 26437.560000000012,
        "labor": 52425.57,
        "other": 1305.31,
        "commission": 1207.75,
        "contract": 212257.97000000006,
        "gp_pct": 62.472943564288194
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
        "jobs": 220,
        "revenue": 487376.37000000005,
        "expenses": 185634.79999999993,
        "gross_profit": 301741.5700000002,
        "material": 84517.70000000004,
        "labor": 103846.03,
        "other": 2615,
        "commission": 18154.859999999997,
        "contract": 454625.59,
        "gp_pct": 61.911407399583226
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
        "jobs": 7,
        "revenue": 11643.94,
        "expenses": 6942.719999999999,
        "gross_profit": 4701.22,
        "material": 3916.4,
        "labor": 3075,
        "other": 0,
        "commission": 437.33,
        "contract": 11643.94,
        "gp_pct": 40.37482158101124
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
        "jobs": 213,
        "revenue": 269121.42000000004,
        "expenses": 134606.29,
        "gross_profit": 134515.12999999998,
        "material": 25179.660000000003,
        "labor": 107262.16,
        "other": 569.28,
        "commission": 8926.37,
        "contract": 266554.36,
        "gp_pct": 49.98306340684437
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
        "expenses": 10247.470000000003,
        "gross_profit": 11409.53,
        "material": 2685.2999999999997,
        "labor": 7575.85,
        "other": 0,
        "commission": 0,
        "contract": 20609,
        "gp_pct": 52.68287389758508
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
        "Annualized Service pace is $1.65M short of the $6.8M plan. 24.3% uplift needed on remaining months."
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
            "$68K",
            "$910K",
            "$-842,800",
            82
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
            "$628K",
            723
          ],
          [
            "Detroit",
            "$478K",
            341
          ],
          [
            "Raleigh",
            "$373K",
            510
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
            "$103K",
            185
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
            "$14K",
            16
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
              67607.32,
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
                  67607.32,
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
      67607.32,
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
      67607.32,
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
      "source": "ServiceInvoicedYTDResults84.csv",
      "format": "per-invoice",
      "totalInvoiced": 2144809.299999995,
      "invoiceCount": 2454,
      "monthly": [
        434089.77000000025,
        412095.43,
        617919.8800000002,
        613096.8999999998,
        67607.32,
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
          "invoiced": 372524.54999999935,
          "count": 510
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
          "invoiced": 478402.95,
          "count": 341
        },
        "Columbus": {
          "invoiced": 628377.1500000001,
          "count": 723
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
          "invoiced": 14490,
          "count": 16
        },
        "Cleveland": {
          "invoiced": 102852.29,
          "count": 185
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
      "sourceFile": "Jobs with WOs and SAs-2026-05-06-14-29-54.xlsx",
      "rowCount": 4940,
      "totals": {
        "installJobs": 1553,
        "installJobsWithSvc": 142,
        "installAccounts": 1464,
        "installAccountsWithSvc": 89,
        "repairWOsAtInstallAccts": 1410,
        "hoursAtInstallAccts": 2470,
        "avgHoursPerWO": 1.98,
        "repairAmtAtInstallAccts": 923508
      },
      "buckets": {
        "<1h": 407,
        "1-2h": 520,
        "2-4h": 257,
        "4-8h": 47,
        ">8h": 17
      },
      "branchRows": [
        {
          "branch": "Columbus",
          "installJobs": 512,
          "installJobsWithSvc": 41,
          "repairWOs": 387,
          "hours": 507.3000000000003,
          "repairAmt": 213622.26
        },
        {
          "branch": "Raleigh",
          "installJobs": 85,
          "installJobsWithSvc": 24,
          "repairWOs": 376,
          "hours": 622.4000000000001,
          "repairAmt": 228309
        },
        {
          "branch": "Cincinnati",
          "installJobs": 82,
          "installJobsWithSvc": 18,
          "repairWOs": 207,
          "hours": 253.74999999999991,
          "repairAmt": 89137
        },
        {
          "branch": "Detroit",
          "installJobs": 251,
          "installJobsWithSvc": 16,
          "repairWOs": 221,
          "hours": 617.6500000000002,
          "repairAmt": 238085.5
        },
        {
          "branch": "Cleveland",
          "installJobs": 122,
          "installJobsWithSvc": 12,
          "repairWOs": 111,
          "hours": 214.95000000000007,
          "repairAmt": 51838
        },
        {
          "branch": "Nashville",
          "installJobs": 128,
          "installJobsWithSvc": 11,
          "repairWOs": 28,
          "hours": 69.83333333333333,
          "repairAmt": 19274
        },
        {
          "branch": "DC Metro",
          "installJobs": 115,
          "installJobsWithSvc": 10,
          "repairWOs": 24,
          "hours": 105.28333333333335,
          "repairAmt": 49377
        },
        {
          "branch": "Dayton",
          "installJobs": 96,
          "installJobsWithSvc": 6,
          "repairWOs": 38,
          "hours": 51.41666666666667,
          "repairAmt": 19790
        },
        {
          "branch": "Indianapolis",
          "installJobs": 4,
          "installJobsWithSvc": 3,
          "repairWOs": 14,
          "hours": 21.000000000000004,
          "repairAmt": 10300
        },
        {
          "branch": "Richmond",
          "installJobs": 67,
          "installJobsWithSvc": 1,
          "repairWOs": 2,
          "hours": 0,
          "repairAmt": 2175
        },
        {
          "branch": "Greenville",
          "installJobs": 28,
          "installJobsWithSvc": 0,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "branch": "Knoxville",
          "installJobs": 55,
          "installJobsWithSvc": 0,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "branch": "Grand Rapids",
          "installJobs": 8,
          "installJobsWithSvc": 0,
          "repairWOs": 2,
          "hours": 6.466666666666667,
          "repairAmt": 1600
        }
      ],
      "tradeRows": [
        {
          "trade": "Roofing",
          "installJobs": 1346,
          "installJobsWithSvc": 112,
          "repairWOs": 1263,
          "hours": 2259.733333333333,
          "repairAmt": 782352.7600000001
        },
        {
          "trade": "Gutters",
          "installJobs": 94,
          "installJobsWithSvc": 15,
          "repairWOs": 72,
          "hours": 126.58333333333333,
          "repairAmt": 57666
        },
        {
          "trade": "Siding",
          "installJobs": 86,
          "installJobsWithSvc": 12,
          "repairWOs": 61,
          "hours": 70.80000000000003,
          "repairAmt": 64362
        },
        {
          "trade": "Windows",
          "installJobs": 14,
          "installJobsWithSvc": 2,
          "repairWOs": 1,
          "hours": 0.9333333333333333,
          "repairAmt": 350
        },
        {
          "trade": "Other",
          "installJobs": 2,
          "installJobsWithSvc": 1,
          "repairWOs": 5,
          "hours": 10.116666666666667,
          "repairAmt": 8245
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
          "hours": 1,
          "repairAmt": 350
        },
        {
          "trade": "Masonry",
          "installJobs": 5,
          "installJobsWithSvc": 0,
          "repairWOs": 6,
          "hours": 0.8833333333333333,
          "repairAmt": 8900
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
          "trade": "Flat Roof",
          "installJobs": 3,
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
          "installJobs": 1,
          "installJobsWithSvc": 0,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        }
      ],
      "accountRows": [
        {
          "account": "Singh Management",
          "installJobs": 2,
          "installAmt": 2308880,
          "repairWOs": 70,
          "hours": 376.75000000000006,
          "repairAmt": 68834.5
        },
        {
          "account": "Priestley Management Company",
          "installJobs": 3,
          "installAmt": 180614.9,
          "repairWOs": 153,
          "hours": 293.01666666666654,
          "repairAmt": 95574
        },
        {
          "account": "Towne Properties - Columbus",
          "installJobs": 4,
          "installAmt": 1386864.5299999998,
          "repairWOs": 159,
          "hours": 214.63333333333327,
          "repairAmt": 83177.28
        },
        {
          "account": "Capital Property Solutions",
          "installJobs": 1,
          "installAmt": 74242,
          "repairWOs": 134,
          "hours": 194.46666666666678,
          "repairAmt": 75217.56
        },
        {
          "account": "Solomon Organization, LLC",
          "installJobs": 3,
          "installAmt": 257794.28,
          "repairWOs": 86,
          "hours": 175.2833333333333,
          "repairAmt": 114182
        },
        {
          "account": "Associated Property Management, LLC",
          "installJobs": 8,
          "installAmt": 2043965.2,
          "repairWOs": 80,
          "hours": 146.31666666666675,
          "repairAmt": 33303
        },
        {
          "account": "Towne Properties - East Cincinnati District Office",
          "installJobs": 3,
          "installAmt": 183138.3,
          "repairWOs": 94,
          "hours": 127.06666666666666,
          "repairAmt": 42470
        },
        {
          "account": "Charleston Management",
          "installJobs": 4,
          "installAmt": 793126.8,
          "repairWOs": 70,
          "hours": 100.25000000000001,
          "repairAmt": 38370
        },
        {
          "account": "Professional Properties Management",
          "installJobs": 3,
          "installAmt": 392750,
          "repairWOs": 54,
          "hours": 83.95,
          "repairAmt": 30475
        },
        {
          "account": "Towne Properties - Cincinnati West District Office",
          "installJobs": 2,
          "installAmt": 32203,
          "repairWOs": 73,
          "hours": 78.35000000000001,
          "repairAmt": 30285
        },
        {
          "account": "Towne Properties - Raleigh District",
          "installJobs": 3,
          "installAmt": 264913,
          "repairWOs": 47,
          "hours": 74.7,
          "repairAmt": 27910
        },
        {
          "account": "KS Management",
          "installJobs": 3,
          "installAmt": 412808,
          "repairWOs": 46,
          "hours": 55.249999999999986,
          "repairAmt": 48475
        },
        {
          "account": "Towne Properties - Dayton",
          "installJobs": 5,
          "installAmt": 397303,
          "repairWOs": 33,
          "hours": 43.933333333333344,
          "repairAmt": 17915
        },
        {
          "account": "Kare Condominium Management Company",
          "installJobs": 1,
          "installAmt": 55539.01,
          "repairWOs": 22,
          "hours": 41.91666666666667,
          "repairAmt": 8850
        },
        {
          "account": "WPM Real Estate Management",
          "installJobs": 2,
          "installAmt": 325859,
          "repairWOs": 10,
          "hours": 34.21666666666667,
          "repairAmt": 12072
        },
        {
          "account": "Oakwood Management Company",
          "installJobs": 3,
          "installAmt": 1207619,
          "repairWOs": 13,
          "hours": 34.083333333333336,
          "repairAmt": 6925
        },
        {
          "account": "Tidewater Property Management, Inc.",
          "installJobs": 1,
          "installAmt": 66493,
          "repairWOs": 2,
          "hours": 33.75,
          "repairAmt": 2350
        },
        {
          "account": "Associa Tennessee",
          "installJobs": 1,
          "installAmt": 880,
          "repairWOs": 14,
          "hours": 33.00000000000001,
          "repairAmt": 5350
        },
        {
          "account": "Abaris Realty, Inc.",
          "installJobs": 1,
          "installAmt": 4100,
          "repairWOs": 7,
          "hours": 27.183333333333334,
          "repairAmt": 31355
        },
        {
          "account": "Sentry (Charlotte) & CSI Community Management",
          "installJobs": 1,
          "installAmt": 122983,
          "repairWOs": 22,
          "hours": 24.883333333333333,
          "repairAmt": 10235
        },
        {
          "account": "Main Street Management Group",
          "installJobs": 1,
          "installAmt": 9579,
          "repairWOs": 15,
          "hours": 24,
          "repairAmt": 13785
        },
        {
          "account": "Kirkpatrick Management Company - Indianapolis",
          "installJobs": 1,
          "installAmt": 75825,
          "repairWOs": 11,
          "hours": 19.350000000000005,
          "repairAmt": 4050
        },
        {
          "account": "Carlton Equities",
          "installJobs": 1,
          "installAmt": 61900,
          "repairWOs": 18,
          "hours": 17.049999999999997,
          "repairAmt": 9500
        },
        {
          "account": "Central Buckeye Management and Construction Services, LLC",
          "installJobs": 1,
          "installAmt": 35850,
          "repairWOs": 15,
          "hours": 16.866666666666667,
          "repairAmt": 5500
        },
        {
          "account": "Sentry Management Nashville",
          "installJobs": 1,
          "installAmt": 34271.18,
          "repairWOs": 4,
          "hours": 14.583333333333332,
          "repairAmt": 4800
        }
      ],
      "installJobRows": [
        {
          "jobNumber": "Job-109156",
          "account": "Singh Management",
          "branch": "Detroit",
          "trade": "Gutters",
          "salesperson": "Micah Williamson",
          "installAmt": 8880,
          "acctRepairWOs": 70,
          "acctHours": 376.75000000000006,
          "acctRepairAmt": 68834.5
        },
        {
          "jobNumber": "Job-111827",
          "account": "Singh Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "salesperson": "Micah Williamson",
          "installAmt": 2300000,
          "acctRepairWOs": 70,
          "acctHours": 376.75000000000006,
          "acctRepairAmt": 68834.5
        },
        {
          "jobNumber": "Job-106231",
          "account": "Priestley Management Company",
          "branch": "Raleigh",
          "trade": "Roofing",
          "salesperson": "Evan Hall",
          "installAmt": 21133.2,
          "acctRepairWOs": 153,
          "acctHours": 293.01666666666654,
          "acctRepairAmt": 95574
        },
        {
          "jobNumber": "Job-106796",
          "account": "Priestley Management Company",
          "branch": "Raleigh",
          "trade": "Roofing",
          "salesperson": "Evan Hall",
          "installAmt": 124374.7,
          "acctRepairWOs": 153,
          "acctHours": 293.01666666666654,
          "acctRepairAmt": 95574
        },
        {
          "jobNumber": "Job-112287",
          "account": "Priestley Management Company",
          "branch": "Raleigh",
          "trade": "Roofing",
          "salesperson": "Evan Hall",
          "installAmt": 35107,
          "acctRepairWOs": 153,
          "acctHours": 293.01666666666654,
          "acctRepairAmt": 95574
        },
        {
          "jobNumber": "Job-106732",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "salesperson": "Christy Osborne",
          "installAmt": 1206129.41,
          "acctRepairWOs": 159,
          "acctHours": 214.63333333333327,
          "acctRepairAmt": 83177.28
        },
        {
          "jobNumber": "Job-107059",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "salesperson": "Ron Saxe",
          "installAmt": 47310,
          "acctRepairWOs": 159,
          "acctHours": 214.63333333333327,
          "acctRepairAmt": 83177.28
        },
        {
          "jobNumber": "Job-108840",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Siding",
          "salesperson": "Christy Osborne",
          "installAmt": 87935.12,
          "acctRepairWOs": 159,
          "acctHours": 214.63333333333327,
          "acctRepairAmt": 83177.28
        },
        {
          "jobNumber": "Job-112288",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "salesperson": "Lisa Gibson",
          "installAmt": 45490,
          "acctRepairWOs": 159,
          "acctHours": 214.63333333333327,
          "acctRepairAmt": 83177.28
        },
        {
          "jobNumber": "Job-111825",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Siding",
          "salesperson": "Ron Saxe",
          "installAmt": 74242,
          "acctRepairWOs": 134,
          "acctHours": 194.46666666666678,
          "acctRepairAmt": 75217.56
        },
        {
          "jobNumber": "Job-108756",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "salesperson": "Micah Williamson",
          "installAmt": 77444.12,
          "acctRepairWOs": 86,
          "acctHours": 175.2833333333333,
          "acctRepairAmt": 114182
        },
        {
          "jobNumber": "Job-108829",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "salesperson": "Micah Williamson",
          "installAmt": 27506.16,
          "acctRepairWOs": 86,
          "acctHours": 175.2833333333333,
          "acctRepairAmt": 114182
        },
        {
          "jobNumber": "Job-112377",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "salesperson": "Micah Williamson",
          "installAmt": 152844,
          "acctRepairWOs": 86,
          "acctHours": 175.2833333333333,
          "acctRepairAmt": 114182
        },
        {
          "jobNumber": "Job-108473",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Roofing",
          "salesperson": "Nicholas Andrukat",
          "installAmt": 243523,
          "acctRepairWOs": 80,
          "acctHours": 146.31666666666675,
          "acctRepairAmt": 33303
        },
        {
          "jobNumber": "Job-108838",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Roofing",
          "salesperson": "Nicholas Andrukat",
          "installAmt": 89221.6,
          "acctRepairWOs": 80,
          "acctHours": 146.31666666666675,
          "acctRepairAmt": 33303
        },
        {
          "jobNumber": "Job-110164",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Roofing",
          "salesperson": "Nicholas Andrukat",
          "installAmt": 144503.6,
          "acctRepairWOs": 80,
          "acctHours": 146.31666666666675,
          "acctRepairAmt": 33303
        },
        {
          "jobNumber": "Job-110170",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Roofing",
          "salesperson": "Nicholas Andrukat",
          "installAmt": 6470,
          "acctRepairWOs": 80,
          "acctHours": 146.31666666666675,
          "acctRepairAmt": 33303
        },
        {
          "jobNumber": "Job-112328",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Roofing",
          "salesperson": "Nicholas Andrukat",
          "installAmt": 1253704,
          "acctRepairWOs": 80,
          "acctHours": 146.31666666666675,
          "acctRepairAmt": 33303
        },
        {
          "jobNumber": "Job-112329",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Gutters",
          "salesperson": "Nicholas Andrukat",
          "installAmt": 256141,
          "acctRepairWOs": 80,
          "acctHours": 146.31666666666675,
          "acctRepairAmt": 33303
        },
        {
          "jobNumber": "Job-112655",
          "account": "Associated Property Management, LLC",
          "branch": "Dayton",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 39313,
          "acctRepairWOs": 80,
          "acctHours": 146.31666666666675,
          "acctRepairAmt": 33303
        },
        {
          "jobNumber": "Job-112656",
          "account": "Associated Property Management, LLC",
          "branch": "Cincinnati",
          "trade": "Gutters",
          "salesperson": "Mark Leedy",
          "installAmt": 11089,
          "acctRepairWOs": 80,
          "acctHours": 146.31666666666675,
          "acctRepairAmt": 33303
        },
        {
          "jobNumber": "Job-108416",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 52912.3,
          "acctRepairWOs": 94,
          "acctHours": 127.06666666666666,
          "acctRepairAmt": 42470
        },
        {
          "jobNumber": "Job-108707",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Gutters",
          "salesperson": "Mark Leedy",
          "installAmt": 7074,
          "acctRepairWOs": 94,
          "acctHours": 127.06666666666666,
          "acctRepairAmt": 42470
        },
        {
          "jobNumber": "Job-112768",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 123152,
          "acctRepairWOs": 94,
          "acctHours": 127.06666666666666,
          "acctRepairAmt": 42470
        },
        {
          "jobNumber": "Job-106519",
          "account": "Charleston Management",
          "branch": "Raleigh",
          "trade": "Gutters",
          "salesperson": "Evan Hall",
          "installAmt": 1481,
          "acctRepairWOs": 70,
          "acctHours": 100.25000000000001,
          "acctRepairAmt": 38370
        }
      ]
    },
    "tabs": []
  },
  "SERVICE_CALLS": {
    "_source": "calculator/service-calls.js Service-Calls-v1.0-2026-05-06",
    "title": "Service Calls YTD",
    "subtitle": "Service Appointments · 5,256 calls across 57 techs · 2026-01 through 2026-05",
    "sourceFile": "Service Appointments-2026-05-06-14-57-03.xlsx",
    "headerMeta": {
      "totalAppts": 5256,
      "uniqTechs": 57,
      "uniqWOs": 4122,
      "uniqAccounts": 1434,
      "uniqJobs": 3993,
      "totalHours": 10065.4,
      "totalBillable": 14914.5,
      "networkBillRatio": 1.482,
      "totalContract": 20894355.13,
      "avgMinPerAppt": 115,
      "aptsCompleted": 4050,
      "aptsOpen": 1206,
      "monthsCovered": 5
    },
    "kpis": [
      {
        "label": "Appointments YTD",
        "value": "5,256",
        "sub": "5 months · 4,122 work orders",
        "tone": "info"
      },
      {
        "label": "Service Techs",
        "value": "57",
        "sub": "distinct primary resources",
        "tone": "info"
      },
      {
        "label": "Total Hours",
        "value": "10,065.4 h",
        "sub": "avg 115 min/appt",
        "tone": "info"
      },
      {
        "label": "Billable Man-Hours",
        "value": "14,914.5 h",
        "sub": "1.50x actual (laborers × time)",
        "tone": "info"
      },
      {
        "label": "Contract $ on Calls",
        "value": "$20.89M",
        "sub": "1,434 unique accounts",
        "tone": "good"
      },
      {
        "label": "Open Appointments",
        "value": "1,206",
        "sub": "no Actual End in Salesforce",
        "tone": "warn"
      }
    ],
    "monthly": [
      {
        "key": "2026-01",
        "label": "2026-01",
        "count": 702,
        "hours": 1533.8,
        "billable": 2622,
        "contract": 740770.82
      },
      {
        "key": "2026-02",
        "label": "2026-02",
        "count": 1143,
        "hours": 2774.3,
        "billable": 4360.5,
        "contract": 1188447.63
      },
      {
        "key": "2026-03",
        "label": "2026-03",
        "count": 1176,
        "hours": 2878.5,
        "billable": 4098.5,
        "contract": 8867215.91
      },
      {
        "key": "2026-04",
        "label": "2026-04",
        "count": 1000,
        "hours": 2592.9,
        "billable": 3779,
        "contract": 3996036.47
      },
      {
        "key": "2026-05",
        "label": "2026-05",
        "count": 163,
        "hours": 275,
        "billable": 54.5,
        "contract": 92867.85
      }
    ],
    "techRows": [
      {
        "tech": "Darren Vaught",
        "count": 347,
        "hours": 374.7,
        "billHours": 524,
        "billRatio": 1.399,
        "avgMinPerAppt": 65,
        "contract": 102175.39,
        "avgContract": 294,
        "jobs": 324,
        "accounts": 146,
        "branches": "Columbus"
      },
      {
        "tech": "Nick Velazquez",
        "count": 308,
        "hours": 430.5,
        "billHours": 654,
        "billRatio": 1.5190000000000001,
        "avgMinPerAppt": 84,
        "contract": 133058.6,
        "avgContract": 432,
        "jobs": 273,
        "accounts": 134,
        "branches": "Columbus"
      },
      {
        "tech": "Kevin Green",
        "count": 300,
        "hours": 400.4,
        "billHours": 417.5,
        "billRatio": 1.043,
        "avgMinPerAppt": 80,
        "contract": 121335,
        "avgContract": 404,
        "jobs": 284,
        "accounts": 60,
        "branches": "Raleigh"
      },
      {
        "tech": "Nick Foster",
        "count": 299,
        "hours": 464.2,
        "billHours": 574.5,
        "billRatio": 1.238,
        "avgMinPerAppt": 93,
        "contract": 147584,
        "avgContract": 494,
        "jobs": 283,
        "accounts": 64,
        "branches": "Raleigh"
      },
      {
        "tech": "Chris Coyour",
        "count": 298,
        "hours": 843.1,
        "billHours": 656,
        "billRatio": 0.778,
        "avgMinPerAppt": 170,
        "contract": 168293,
        "avgContract": 565,
        "jobs": 266,
        "accounts": 58,
        "branches": "Raleigh"
      },
      {
        "tech": "Matt Large",
        "count": 262,
        "hours": 354.5,
        "billHours": 670.5,
        "billRatio": 1.891,
        "avgMinPerAppt": 81,
        "contract": 157762.78,
        "avgContract": 602,
        "jobs": 236,
        "accounts": 103,
        "branches": "Columbus"
      },
      {
        "tech": "Matt Velazquez",
        "count": 257,
        "hours": 321.5,
        "billHours": 487.5,
        "billRatio": 1.516,
        "avgMinPerAppt": 75,
        "contract": 277458.9,
        "avgContract": 1080,
        "jobs": 228,
        "accounts": 117,
        "branches": "Columbus"
      },
      {
        "tech": "Richard Hoffman",
        "count": 255,
        "hours": 981.5,
        "billHours": 1250.5,
        "billRatio": 1.274,
        "avgMinPerAppt": 231,
        "contract": 296868.94,
        "avgContract": 1164,
        "jobs": 230,
        "accounts": 109,
        "branches": "Cleveland, Columbus, Detroit"
      },
      {
        "tech": "Randy Pfeiffer",
        "count": 251,
        "hours": 384.2,
        "billHours": 417,
        "billRatio": 1.0859999999999999,
        "avgMinPerAppt": 92,
        "contract": 57968.53,
        "avgContract": 231,
        "jobs": 201,
        "accounts": 102,
        "branches": "Cincinnati, Dayton, Indianapolis"
      },
      {
        "tech": "Andrew Pruitt",
        "count": 238,
        "hours": 328.5,
        "billHours": 378,
        "billRatio": 1.151,
        "avgMinPerAppt": 83,
        "contract": 111059.9,
        "avgContract": 467,
        "jobs": 215,
        "accounts": 61,
        "branches": "Cincinnati, Columbus, Dayton, Indianapolis"
      },
      {
        "tech": "Jose Cartagena",
        "count": 229,
        "hours": 463.1,
        "billHours": 785.5,
        "billRatio": 1.696,
        "avgMinPerAppt": 121,
        "contract": 143942.92,
        "avgContract": 629,
        "jobs": 217,
        "accounts": 138,
        "branches": "Columbus"
      },
      {
        "tech": "David Frindt",
        "count": 227,
        "hours": 294.6,
        "billHours": 349.5,
        "billRatio": 1.187,
        "avgMinPerAppt": 78,
        "contract": 306584.56,
        "avgContract": 1351,
        "jobs": 205,
        "accounts": 100,
        "branches": "Cleveland"
      },
      {
        "tech": "Will Vickers",
        "count": 223,
        "hours": 465.8,
        "billHours": 1389,
        "billRatio": 2.9819999999999998,
        "avgMinPerAppt": 125,
        "contract": 246951.75,
        "avgContract": 1107,
        "jobs": 190,
        "accounts": 79,
        "branches": "Detroit"
      },
      {
        "tech": "Andrii Shvets",
        "count": 220,
        "hours": 356.9,
        "billHours": 460,
        "billRatio": 1.2890000000000001,
        "avgMinPerAppt": 97,
        "contract": 107785.9,
        "avgContract": 490,
        "jobs": 197,
        "accounts": 79,
        "branches": "Cincinnati, Columbus, Dayton, Indianapolis"
      },
      {
        "tech": "Ricardo Nunez",
        "count": 215,
        "hours": 390.9,
        "billHours": 807,
        "billRatio": 2.065,
        "avgMinPerAppt": 109,
        "contract": 566911.6,
        "avgContract": 2637,
        "jobs": 181,
        "accounts": 73,
        "branches": "Detroit"
      },
      {
        "tech": "Edwin Irizarry-Vasquez",
        "count": 210,
        "hours": 303.8,
        "billHours": 683,
        "billRatio": 2.248,
        "avgMinPerAppt": 87,
        "contract": 316864.65,
        "avgContract": 1509,
        "jobs": 181,
        "accounts": 78,
        "branches": "Columbus, Detroit"
      },
      {
        "tech": "Santos Alfaro-Delcid",
        "count": 128,
        "hours": 956.2,
        "billHours": 1890.5,
        "billRatio": 1.9769999999999999,
        "avgMinPerAppt": 448,
        "contract": 7110422.05,
        "avgContract": 55550,
        "jobs": 102,
        "accounts": 77,
        "branches": "DC Metro, Richmond"
      },
      {
        "tech": "Wilver Velasquez",
        "count": 125,
        "hours": 280.3,
        "billHours": 357.5,
        "billRatio": 1.275,
        "avgMinPerAppt": 135,
        "contract": 4688918.66,
        "avgContract": 37511,
        "jobs": 102,
        "accounts": 61,
        "branches": "Columbus, DC Metro, Detroit, Richmond"
      },
      {
        "tech": "Israel Velasquez",
        "count": 120,
        "hours": 402.8,
        "billHours": 495,
        "billRatio": 1.229,
        "avgMinPerAppt": 201,
        "contract": 4716365.16,
        "avgContract": 39303,
        "jobs": 95,
        "accounts": 71,
        "branches": "DC Metro, Richmond"
      },
      {
        "tech": "Rene Alvarado",
        "count": 105,
        "hours": 344.4,
        "billHours": 287.5,
        "billRatio": 0.835,
        "avgMinPerAppt": 197,
        "contract": 97816.85,
        "avgContract": 932,
        "jobs": 92,
        "accounts": 67,
        "branches": "Knoxville, Nashville"
      },
      {
        "tech": "G3 Construction",
        "count": 102,
        "hours": 14,
        "billHours": 27,
        "billRatio": 1.926,
        "avgMinPerAppt": 8,
        "contract": 58465,
        "avgContract": 573,
        "jobs": 102,
        "accounts": 21,
        "branches": "Cincinnati, Dayton"
      },
      {
        "tech": "Jose Alberto-Amaya",
        "count": 100,
        "hours": 283.7,
        "billHours": 297,
        "billRatio": 1.047,
        "avgMinPerAppt": 170,
        "contract": 83239.35,
        "avgContract": 832,
        "jobs": 86,
        "accounts": 50,
        "branches": "Knoxville, Nashville"
      },
      {
        "tech": "Ethan Epperson",
        "count": 88,
        "hours": 395.8,
        "billHours": 828.5,
        "billRatio": 2.093,
        "avgMinPerAppt": 270,
        "contract": 183973.98,
        "avgContract": 2091,
        "jobs": 86,
        "accounts": 37,
        "branches": "Detroit, Grand Rapids"
      },
      {
        "tech": "Above All Exteriors LLC",
        "count": 49,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 159088,
        "avgContract": 3247,
        "jobs": 49,
        "accounts": 15,
        "branches": "Detroit"
      },
      {
        "tech": "GGM Guillermo Campuzano",
        "count": 45,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 116027.87,
        "avgContract": 2578,
        "jobs": 45,
        "accounts": 40,
        "branches": "Columbus"
      },
      {
        "tech": "Daniel Brown",
        "count": 42,
        "hours": 130,
        "billHours": 85.5,
        "billRatio": 0.6579999999999999,
        "avgMinPerAppt": 186,
        "contract": 49376,
        "avgContract": 1176,
        "jobs": 42,
        "accounts": 21,
        "branches": "Raleigh"
      },
      {
        "tech": "ASM Construction",
        "count": 35,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 88525.5,
        "avgContract": 2529,
        "jobs": 35,
        "accounts": 14,
        "branches": "Detroit"
      },
      {
        "tech": "David Salisbury",
        "count": 34,
        "hours": 7.3,
        "billHours": 3,
        "billRatio": 0.409,
        "avgMinPerAppt": 13,
        "contract": 9780.85,
        "avgContract": 288,
        "jobs": 30,
        "accounts": 22,
        "branches": "Columbus"
      },
      {
        "tech": "Alonzie/Lonnie Wright",
        "count": 31,
        "hours": 5.5,
        "billHours": 10,
        "billRatio": 1.824,
        "avgMinPerAppt": 11,
        "contract": 13670,
        "avgContract": 441,
        "jobs": 31,
        "accounts": 17,
        "branches": "Cincinnati, Dayton, Indianapolis"
      },
      {
        "tech": "Ryan Brady",
        "count": 25,
        "hours": 48.1,
        "billHours": 49.5,
        "billRatio": 1.0290000000000001,
        "avgMinPerAppt": 115,
        "contract": 40113.74,
        "avgContract": 1605,
        "jobs": 23,
        "accounts": 11,
        "branches": "Richmond"
      },
      {
        "tech": "(unassigned)",
        "count": 11,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 6750,
        "avgContract": 614,
        "jobs": 10,
        "accounts": 10,
        "branches": "Cleveland, Columbus, DC Metro, Detroit"
      },
      {
        "tech": "Ignacio Roofing and Siding",
        "count": 10,
        "hours": 0,
        "billHours": 1,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 30137.27,
        "avgContract": 3014,
        "jobs": 10,
        "accounts": 10,
        "branches": "Columbus"
      },
      {
        "tech": "Allied Gutter Company",
        "count": 8,
        "hours": 1.8,
        "billHours": 2,
        "billRatio": 1.143,
        "avgMinPerAppt": 13,
        "contract": 14150,
        "avgContract": 1769,
        "jobs": 8,
        "accounts": 7,
        "branches": "Detroit"
      },
      {
        "tech": "Skillz Contracting Co",
        "count": 8,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 18823.8,
        "avgContract": 2353,
        "jobs": 8,
        "accounts": 8,
        "branches": "Columbus"
      },
      {
        "tech": "Cameron Campbell",
        "count": 5,
        "hours": 1.6,
        "billHours": 7,
        "billRatio": 4.2860000000000005,
        "avgMinPerAppt": 20,
        "contract": 5982,
        "avgContract": 1196,
        "jobs": 5,
        "accounts": 3,
        "branches": "Detroit"
      },
      {
        "tech": "Intermediaries In Construction Services LLC",
        "count": 5,
        "hours": 5,
        "billHours": 5,
        "billRatio": 1,
        "avgMinPerAppt": 60,
        "contract": 8400,
        "avgContract": 1680,
        "jobs": 4,
        "accounts": 4,
        "branches": "Columbus"
      },
      {
        "tech": "PREMIER ROOFING",
        "count": 4,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 9935.13,
        "avgContract": 2484,
        "jobs": 4,
        "accounts": 4,
        "branches": "Cincinnati, Dayton"
      },
      {
        "tech": "Rene/Choppo",
        "count": 4,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 5750,
        "avgContract": 1438,
        "jobs": 4,
        "accounts": 3,
        "branches": "Dayton, Indianapolis"
      },
      {
        "tech": "Tase Inc",
        "count": 3,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 5752,
        "avgContract": 1917,
        "jobs": 3,
        "accounts": 3,
        "branches": "Columbus"
      },
      {
        "tech": "Manuel Vega",
        "count": 3,
        "hours": 22.3,
        "billHours": 47,
        "billRatio": 2.108,
        "avgMinPerAppt": 446,
        "contract": 1635,
        "avgContract": 545,
        "jobs": 3,
        "accounts": 3,
        "branches": "Detroit"
      },
      {
        "tech": "JMU Construction",
        "count": 3,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 450,
        "avgContract": 150,
        "jobs": 3,
        "accounts": 3,
        "branches": "DC Metro"
      },
      {
        "tech": "Arias Builders",
        "count": 3,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 6961.54,
        "avgContract": 2321,
        "jobs": 3,
        "accounts": 3,
        "branches": "Columbus"
      },
      {
        "tech": "EAL Roofing",
        "count": 3,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 7011,
        "avgContract": 2337,
        "jobs": 3,
        "accounts": 3,
        "branches": "Columbus"
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
        "jobs": 3,
        "accounts": 3,
        "branches": "Columbus"
      },
      {
        "tech": "Rodela's Masonry LLC",
        "count": 2,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 5699.78,
        "avgContract": 2850,
        "jobs": 2,
        "accounts": 2,
        "branches": "Columbus"
      },
      {
        "tech": "JLT Roofing & Construction LLC",
        "count": 2,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 12184.88,
        "avgContract": 6092,
        "jobs": 2,
        "accounts": 2,
        "branches": "Columbus"
      },
      {
        "tech": "Shaddai Services",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 56787,
        "avgContract": 56787,
        "jobs": 1,
        "accounts": 1,
        "branches": "DC Metro"
      },
      {
        "tech": "EVER ROOFING",
        "count": 1,
        "hours": 8,
        "billHours": 8,
        "billRatio": 1,
        "avgMinPerAppt": 480,
        "contract": 0,
        "avgContract": 0,
        "jobs": 1,
        "accounts": 1,
        "branches": "Cincinnati"
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
        "jobs": 1,
        "accounts": 1,
        "branches": "Dayton"
      },
      {
        "tech": "Chris Kerns",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 1944.54,
        "avgContract": 1945,
        "jobs": 1,
        "accounts": 1,
        "branches": "Columbus"
      },
      {
        "tech": "A&H Roofing Services",
        "count": 1,
        "hours": 0.7,
        "billHours": 10,
        "billRatio": 14.634,
        "avgMinPerAppt": 41,
        "contract": 2700,
        "avgContract": 2700,
        "jobs": 1,
        "accounts": 1,
        "branches": "Columbus"
      },
      {
        "tech": "A1 Exteriors",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 3600,
        "avgContract": 3600,
        "jobs": 1,
        "accounts": 1,
        "branches": "Columbus"
      },
      {
        "tech": "AB6",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 200,
        "avgContract": 200,
        "jobs": 1,
        "accounts": 1,
        "branches": "Detroit"
      },
      {
        "tech": "Edwin Morales Roofing",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 11111.76,
        "avgContract": 11112,
        "jobs": 1,
        "accounts": 1,
        "branches": "Cleveland"
      },
      {
        "tech": "Ram It Construction",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 1,
        "accounts": 1,
        "branches": "Cleveland"
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
        "branch": "Columbus",
        "count": 1563,
        "techs": 25,
        "accounts": 534,
        "hours": 1994.3,
        "billHours": 3176,
        "contract": 1054522.12,
        "avgMinPerAppt": 77
      },
      {
        "branch": "Raleigh",
        "count": 939,
        "techs": 4,
        "accounts": 127,
        "hours": 1837.7,
        "billHours": 1733.5,
        "contract": 486588,
        "avgMinPerAppt": 117
      },
      {
        "branch": "Detroit",
        "count": 842,
        "techs": 13,
        "accounts": 193,
        "hours": 1572.1,
        "billHours": 3744.5,
        "contract": 1576849.5,
        "avgMinPerAppt": 112
      },
      {
        "branch": "Cincinnati",
        "count": 638,
        "techs": 7,
        "accounts": 134,
        "hours": 787.8,
        "billHours": 898,
        "contract": 304354.46,
        "avgMinPerAppt": 74
      },
      {
        "branch": "Cleveland",
        "count": 483,
        "techs": 5,
        "accounts": 155,
        "hours": 1271.7,
        "billHours": 1594,
        "contract": 614815.26,
        "avgMinPerAppt": 158
      },
      {
        "branch": "DC Metro",
        "count": 343,
        "techs": 6,
        "accounts": 129,
        "hours": 1573.4,
        "billHours": 2660.5,
        "contract": 16566792.87,
        "avgMinPerAppt": 275
      },
      {
        "branch": "Nashville",
        "count": 203,
        "techs": 2,
        "accounts": 100,
        "hours": 622.1,
        "billHours": 578,
        "contract": 180206.2,
        "avgMinPerAppt": 184
      },
      {
        "branch": "Dayton",
        "count": 170,
        "techs": 8,
        "accounts": 58,
        "hours": 241.5,
        "billHours": 309.5,
        "contract": 43180,
        "avgMinPerAppt": 85
      },
      {
        "branch": "Indianapolis",
        "count": 41,
        "techs": 5,
        "accounts": 13,
        "hours": 64.4,
        "billHours": 88,
        "contract": 16750,
        "avgMinPerAppt": 94
      },
      {
        "branch": "Richmond",
        "count": 29,
        "techs": 4,
        "accounts": 12,
        "hours": 84.3,
        "billHours": 105,
        "contract": 40663.74,
        "avgMinPerAppt": 174
      },
      {
        "branch": "Knoxville",
        "count": 2,
        "techs": 2,
        "accounts": 1,
        "hours": 6,
        "billHours": 6.5,
        "contract": 850,
        "avgMinPerAppt": 179
      },
      {
        "branch": "(unassigned)",
        "count": 2,
        "techs": 2,
        "accounts": 0,
        "hours": 0,
        "billHours": 0,
        "contract": 0,
        "avgMinPerAppt": 0
      },
      {
        "branch": "Grand Rapids",
        "count": 1,
        "techs": 1,
        "accounts": 1,
        "hours": 10.4,
        "billHours": 21,
        "contract": 8782.98,
        "avgMinPerAppt": 621
      }
    ],
    "accountRows": [
      {
        "account": "Towne Properties - Columbus",
        "count": 220,
        "jobs": 182,
        "hours": 234.2,
        "billHours": 425,
        "contract": 122433.18,
        "branches": "Columbus"
      },
      {
        "account": "Priestley Management Company",
        "count": 208,
        "jobs": 166,
        "hours": 518.4,
        "billHours": 371.5,
        "contract": 151657,
        "branches": "Raleigh"
      },
      {
        "account": "Capital Property Solutions",
        "count": 204,
        "jobs": 150,
        "hours": 250.8,
        "billHours": 461,
        "contract": 84387.38,
        "branches": "Columbus"
      },
      {
        "account": "Towne Properties - East Cincinnati District Office",
        "count": 175,
        "jobs": 153,
        "hours": 266.8,
        "billHours": 254,
        "contract": 63379,
        "branches": "Cincinnati"
      },
      {
        "account": "Solomon Organization, LLC",
        "count": 140,
        "jobs": 93,
        "hours": 245.1,
        "billHours": 508.5,
        "contract": 266425,
        "branches": "Detroit, Cleveland, Cincinnati"
      },
      {
        "account": "Towne Properties - Cincinnati West District Office",
        "count": 134,
        "jobs": 123,
        "hours": 112.8,
        "billHours": 143,
        "contract": 41460,
        "branches": "Cincinnati, Dayton"
      },
      {
        "account": "Associated Property Management, LLC",
        "count": 122,
        "jobs": 95,
        "hours": 380.5,
        "billHours": 221.5,
        "contract": 58781,
        "branches": "Cleveland, Dayton, Cincinnati"
      },
      {
        "account": "Charleston Management",
        "count": 114,
        "jobs": 95,
        "hours": 134,
        "billHours": 151.5,
        "contract": 51871,
        "branches": "Raleigh"
      },
      {
        "account": "Towne Properties - Raleigh District",
        "count": 112,
        "jobs": 86,
        "hours": 184.3,
        "billHours": 197,
        "contract": 69000,
        "branches": "Raleigh"
      },
      {
        "account": "Condo Management of Columbus",
        "count": 106,
        "jobs": 86,
        "hours": 175.6,
        "billHours": 203,
        "contract": 51410.64,
        "branches": "Columbus, Cincinnati"
      },
      {
        "account": "Compass Management Professionals",
        "count": 103,
        "jobs": 74,
        "hours": 135.3,
        "billHours": 316,
        "contract": 87389,
        "branches": "Detroit"
      },
      {
        "account": "Singh Management",
        "count": 102,
        "jobs": 76,
        "hours": 392.6,
        "billHours": 837,
        "contract": 103257.5,
        "branches": "Detroit"
      },
      {
        "account": "Professional Properties Management",
        "count": 83,
        "jobs": 73,
        "hours": 110.3,
        "billHours": 126.5,
        "contract": 39660,
        "branches": "Raleigh"
      },
      {
        "account": "Towne Properties - Dayton",
        "count": 72,
        "jobs": 54,
        "hours": 81.2,
        "billHours": 117,
        "contract": 31465,
        "branches": "Dayton"
      },
      {
        "account": "KS Management",
        "count": 64,
        "jobs": 53,
        "hours": 84.6,
        "billHours": 198.5,
        "contract": 42149,
        "branches": "Detroit, Columbus"
      },
      {
        "account": "RowCal Construction & Maintenance TN, LLC",
        "count": 57,
        "jobs": 45,
        "hours": 135.8,
        "billHours": 130.5,
        "contract": 22900,
        "branches": "Nashville, Knoxville"
      },
      {
        "account": "Greystar Real Estate Management - NC",
        "count": 53,
        "jobs": 22,
        "hours": 66.4,
        "billHours": 226,
        "contract": 13685,
        "branches": "Raleigh"
      },
      {
        "account": "In Rhodes Management, Inc",
        "count": 48,
        "jobs": 27,
        "hours": 52.7,
        "billHours": 501,
        "contract": 49616,
        "branches": "Detroit"
      },
      {
        "account": "Associa On Call",
        "count": 40,
        "jobs": 36,
        "hours": 37.6,
        "billHours": 61,
        "contract": 16320,
        "branches": "Columbus, Cincinnati"
      },
      {
        "account": "Link Real Estate Group",
        "count": 38,
        "jobs": 22,
        "hours": 40.4,
        "billHours": 57,
        "contract": 22450,
        "branches": "Columbus, Cincinnati"
      },
      {
        "account": "Sentry Management - Columbus",
        "count": 37,
        "jobs": 29,
        "hours": 83.8,
        "billHours": 61.5,
        "contract": 20509.38,
        "branches": "Columbus"
      },
      {
        "account": "Kare Condominium Management Company",
        "count": 36,
        "jobs": 30,
        "hours": 51.4,
        "billHours": 60.5,
        "contract": 10550,
        "branches": "Cleveland"
      },
      {
        "account": "Main Street Management Group",
        "count": 32,
        "jobs": 26,
        "hours": 63.8,
        "billHours": 46.5,
        "contract": 29465,
        "branches": "Raleigh"
      },
      {
        "account": "Central Buckeye Management and Construction Services, LLC",
        "count": 30,
        "jobs": 26,
        "hours": 34.2,
        "billHours": 54,
        "contract": 22770,
        "branches": "Columbus"
      },
      {
        "account": "Oakwood Management Company",
        "count": 28,
        "jobs": 24,
        "hours": 43.9,
        "billHours": 73,
        "contract": 10825,
        "branches": "Columbus"
      }
    ],
    "woStats": {
      "stuck": [
        {
          "wo": "00198374",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "tech": "Darren Vaught",
          "appointments": 3,
          "hours": 1.1,
          "billHours": 1.5,
          "contract": 350,
          "hoursPer100": 0.3,
          "oldest": "2026-01-09",
          "newest": "2026-04-14",
          "spanDays": 95
        },
        {
          "wo": "00198210",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "tech": "Jose Cartagena",
          "appointments": 3,
          "hours": 7.8,
          "billHours": 17,
          "contract": 1700,
          "hoursPer100": 0.5,
          "oldest": "2026-01-19",
          "newest": "2026-04-22",
          "spanDays": 93
        },
        {
          "wo": "00198404",
          "account": "3292: Grant Clarke",
          "branch": "Nashville",
          "tech": "Rene Alvarado",
          "appointments": 4,
          "hours": 4.6,
          "billHours": 6,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-01-13",
          "newest": "2026-04-13",
          "spanDays": 90
        },
        {
          "wo": "00199422",
          "account": "Haddon Communitites",
          "branch": "Columbus",
          "tech": "Nick Velazquez",
          "appointments": 4,
          "hours": 4.3,
          "billHours": 3.5,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-01-29",
          "newest": "2026-04-29",
          "spanDays": 90
        },
        {
          "wo": "00197107",
          "account": "Licking Memorial Hospital",
          "branch": "Columbus",
          "tech": "Matt Velazquez",
          "appointments": 3,
          "hours": 8.9,
          "billHours": 19,
          "contract": 350,
          "hoursPer100": 2.5,
          "oldest": "2026-01-09",
          "newest": "2026-04-08",
          "spanDays": 89
        },
        {
          "wo": "00196090",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "tech": "Nick Velazquez",
          "appointments": 3,
          "hours": 3.1,
          "billHours": 7.5,
          "contract": 1050,
          "hoursPer100": 0.3,
          "oldest": "2026-01-14",
          "newest": "2026-04-08",
          "spanDays": 84
        },
        {
          "wo": "00199580",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "tech": "David Frindt",
          "appointments": 2,
          "hours": 3,
          "billHours": 3.5,
          "contract": 350,
          "hoursPer100": 0.9,
          "oldest": "2026-01-30",
          "newest": "2026-04-24",
          "spanDays": 84
        },
        {
          "wo": "00200765",
          "account": "Vaughan Group Ltd",
          "branch": "Columbus",
          "tech": "Jose Cartagena",
          "appointments": 2,
          "hours": 4.1,
          "billHours": 2,
          "contract": 350,
          "hoursPer100": 1.2,
          "oldest": "2026-02-11",
          "newest": "2026-05-04",
          "spanDays": 82
        },
        {
          "wo": "00200194",
          "account": "Champion Property Management",
          "branch": "Columbus",
          "tech": "Nick Velazquez",
          "appointments": 3,
          "hours": 4.4,
          "billHours": 11,
          "contract": 624.78,
          "hoursPer100": 0.7,
          "oldest": "2026-02-05",
          "newest": "2026-04-27",
          "spanDays": 81
        },
        {
          "wo": "00198088",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "tech": "Nick Velazquez",
          "appointments": 2,
          "hours": 1,
          "billHours": 3,
          "contract": 350,
          "hoursPer100": 0.3,
          "oldest": "2026-01-20",
          "newest": "2026-04-09",
          "spanDays": 79
        },
        {
          "wo": "00197520",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "tech": "Darren Vaught",
          "appointments": 3,
          "hours": 2.4,
          "billHours": 5.5,
          "contract": 550,
          "hoursPer100": 0.4,
          "oldest": "2026-01-07",
          "newest": "2026-03-26",
          "spanDays": 78
        },
        {
          "wo": "00198504",
          "account": "Andrew Hack",
          "branch": "Detroit",
          "tech": "Ethan Epperson",
          "appointments": 2,
          "hours": 5.8,
          "billHours": 6.5,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-01-21",
          "newest": "2026-04-09",
          "spanDays": 78
        },
        {
          "wo": "00198509",
          "account": "Compass Management Professionals",
          "branch": "Detroit",
          "tech": "Will Vickers",
          "appointments": 2,
          "hours": 3.1,
          "billHours": 8,
          "contract": 800,
          "hoursPer100": 0.4,
          "oldest": "2026-01-15",
          "newest": "2026-04-02",
          "spanDays": 77
        },
        {
          "wo": "00185160",
          "account": "Jerry Helms",
          "branch": "Raleigh",
          "tech": "Nick Foster",
          "appointments": 7,
          "hours": 13.1,
          "billHours": 22,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-01-22",
          "newest": "2026-04-06",
          "spanDays": 74
        },
        {
          "wo": "00198947",
          "account": "O'Brien Association Management",
          "branch": "Detroit",
          "tech": "Ricardo Nunez",
          "appointments": 3,
          "hours": 5.5,
          "billHours": 12,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-01-30",
          "newest": "2026-04-14",
          "spanDays": 74
        },
        {
          "wo": "00198711",
          "account": "Central Buckeye Management and Construction Services, LLC",
          "branch": "Columbus",
          "tech": "Nick Velazquez",
          "appointments": 2,
          "hours": 3.7,
          "billHours": 5,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-01-19",
          "newest": "2026-04-02",
          "spanDays": 73
        },
        {
          "wo": "00197892",
          "account": "Barb Campbell",
          "branch": "Cincinnati",
          "tech": "Andrii Shvets",
          "appointments": 2,
          "hours": 8.4,
          "billHours": 9,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-01-08",
          "newest": "2026-03-20",
          "spanDays": 71
        },
        {
          "wo": "00195750",
          "account": "Compass Management Professionals",
          "branch": "Detroit",
          "tech": "Will Vickers",
          "appointments": 3,
          "hours": 4.9,
          "billHours": 11,
          "contract": 1100,
          "hoursPer100": 0.4,
          "oldest": "2026-01-28",
          "newest": "2026-04-08",
          "spanDays": 70
        },
        {
          "wo": "00199864",
          "account": "Horizon Asset Management",
          "branch": "Columbus",
          "tech": "Matt Velazquez",
          "appointments": 2,
          "hours": 0.8,
          "billHours": 2,
          "contract": 350,
          "hoursPer100": 0.2,
          "oldest": "2026-02-02",
          "newest": "2026-04-10",
          "spanDays": 67
        },
        {
          "wo": "00200929",
          "account": "Wes Pierce",
          "branch": "Cleveland",
          "tech": "David Frindt",
          "appointments": 3,
          "hours": 6.6,
          "billHours": 11.5,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-02-13",
          "newest": "2026-04-21",
          "spanDays": 67
        },
        {
          "wo": "00196619",
          "account": "Associa On Call",
          "branch": "Columbus",
          "tech": "Darren Vaught",
          "appointments": 2,
          "hours": 1.4,
          "billHours": 3,
          "contract": 350,
          "hoursPer100": 0.4,
          "oldest": "2026-01-05",
          "newest": "2026-03-12",
          "spanDays": 66
        },
        {
          "wo": "00195155",
          "account": "Ryan  Wells",
          "branch": "Columbus",
          "tech": "Darren Vaught",
          "appointments": 2,
          "hours": 2.7,
          "billHours": 3,
          "contract": 750,
          "hoursPer100": 0.4,
          "oldest": "2026-01-06",
          "newest": "2026-03-13",
          "spanDays": 66
        },
        {
          "wo": "00197985",
          "account": "Jim Kerr",
          "branch": "Columbus",
          "tech": "Nick Velazquez",
          "appointments": 3,
          "hours": 2,
          "billHours": 6,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-01-12",
          "newest": "2026-03-19",
          "spanDays": 66
        },
        {
          "wo": "00198164",
          "account": "Kramer Triad Management - Ann Arbor",
          "branch": "Detroit",
          "tech": "Will Vickers",
          "appointments": 2,
          "hours": 2.6,
          "billHours": 6,
          "contract": 300,
          "hoursPer100": 0.8,
          "oldest": "2026-01-20",
          "newest": "2026-03-27",
          "spanDays": 66
        },
        {
          "wo": "00197533",
          "account": "Sai Gadam",
          "branch": "Detroit",
          "tech": "Edwin Irizarry-Vasquez",
          "appointments": 2,
          "hours": 10.9,
          "billHours": 22,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-01-30",
          "newest": "2026-04-06",
          "spanDays": 66
        }
      ],
      "inProgress60Plus": [
        {
          "wo": "00202625",
          "account": "Avenue5",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 68.03,
          "contract": 350,
          "contractSigned": "2/25/2026",
          "hasSA": true
        },
        {
          "wo": "00201746",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 64.2,
          "contract": 400,
          "contractSigned": "2/17/2026",
          "hasSA": true
        },
        {
          "wo": "00201158",
          "account": "Lawrence Community Management Group, Inc",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 58.22,
          "contract": 1300,
          "contractSigned": "1/15/2026",
          "hasSA": true
        },
        {
          "wo": "00204036",
          "account": "Sentry Management - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 47.24,
          "contract": 350,
          "contractSigned": "3/10/2026",
          "hasSA": true
        },
        {
          "wo": "00202568",
          "account": "Associa On Call",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 47.23,
          "contract": 350,
          "contractSigned": "2/25/2026",
          "hasSA": true
        },
        {
          "wo": "00206354",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Siding",
          "status": "In Progress",
          "subStatus": "Return Trip Required",
          "days": 44.23,
          "contract": 350,
          "contractSigned": "3/19/2026",
          "hasSA": true
        },
        {
          "wo": "00203249",
          "account": "Condo Management of Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 44.2,
          "contract": 350,
          "contractSigned": "3/3/2026",
          "hasSA": true
        },
        {
          "wo": "00205594",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 44.03,
          "contract": 350,
          "contractSigned": "3/17/2026",
          "hasSA": true
        },
        {
          "wo": "00205615",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 43.22,
          "contract": 350,
          "contractSigned": "3/17/2026",
          "hasSA": true
        },
        {
          "wo": "00206356",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 42.13,
          "contract": 1000,
          "contractSigned": "3/19/2026",
          "hasSA": true
        },
        {
          "wo": "00207505",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 40.96,
          "contract": 1700,
          "contractSigned": "3/25/2026",
          "hasSA": true
        },
        {
          "wo": "00208113",
          "account": "Oakwood Management Company",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 39.27,
          "contract": 1700,
          "contractSigned": "3/27/2026",
          "hasSA": true
        },
        {
          "wo": "00203665",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Return Trip Required",
          "days": 37.23,
          "contract": 350,
          "contractSigned": "3/5/2026",
          "hasSA": true
        },
        {
          "wo": "00205350",
          "account": "Windsor Village Condos",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 36.99,
          "contract": 1850,
          "contractSigned": "3/16/2026",
          "hasSA": true
        },
        {
          "wo": "00207091",
          "account": "Carlton Equities",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 36.23,
          "contract": 350,
          "contractSigned": "3/24/2026",
          "hasSA": true
        },
        {
          "wo": "00207136",
          "account": "Carlton Equities",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 36.1,
          "contract": 350,
          "contractSigned": "3/24/2026",
          "hasSA": true
        },
        {
          "wo": "00208098",
          "account": "Jim Kerr",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 36.09,
          "contract": 1381,
          "contractSigned": "3/27/2026",
          "hasSA": true
        },
        {
          "wo": "00206071",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Gutters",
          "status": "In Progress",
          "subStatus": "",
          "days": 36.02,
          "contract": 350,
          "contractSigned": "3/18/2026",
          "hasSA": true
        },
        {
          "wo": "00206371",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 35.99,
          "contract": 350,
          "contractSigned": "3/19/2026",
          "hasSA": true
        },
        {
          "wo": "00208835",
          "account": "Jason Rowland",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 33.95,
          "contract": 350,
          "contractSigned": "4/1/2026",
          "hasSA": true
        },
        {
          "wo": "00206406",
          "account": "Central Buckeye Management and Construction Services, LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 33.88,
          "contract": 350,
          "contractSigned": "3/19/2026",
          "hasSA": true
        },
        {
          "wo": "00207283",
          "account": "Central Buckeye Management and Construction Services, LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 30.2,
          "contract": 350,
          "contractSigned": "3/24/2026",
          "hasSA": true
        },
        {
          "wo": "00208467",
          "account": "Central Buckeye Management and Construction Services, LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 30.15,
          "contract": 350,
          "contractSigned": "3/31/2026",
          "hasSA": true
        },
        {
          "wo": "00209611",
          "account": "Oakwood Management Company",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 29.05,
          "contract": 350,
          "contractSigned": "4/6/2026",
          "hasSA": true
        },
        {
          "wo": "00209736",
          "account": "Shelby Jordan",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 29,
          "contract": 350,
          "contractSigned": "4/7/2026",
          "hasSA": true
        },
        {
          "wo": "00207835",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Masonry",
          "status": "In Progress",
          "subStatus": "",
          "days": 28.92,
          "contract": 350,
          "contractSigned": "3/26/2026",
          "hasSA": true
        },
        {
          "wo": "00207931",
          "account": "Comsource Management, Inc.",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 28.29,
          "contract": 1800,
          "contractSigned": "3/26/2026",
          "hasSA": true
        },
        {
          "wo": "00205694",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Siding",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 28.15,
          "contract": 400,
          "contractSigned": "3/17/2026",
          "hasSA": true
        },
        {
          "wo": "00207418",
          "account": "Kramer Triad Management - Ann Arbor",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 28.04,
          "contract": 350,
          "contractSigned": "3/25/2026",
          "hasSA": true
        },
        {
          "wo": "00206485",
          "account": "Kramer Triad Management - Ann Arbor",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.98,
          "contract": 350,
          "contractSigned": "3/19/2026",
          "hasSA": true
        },
        {
          "wo": "00201679",
          "account": "KC Property Service",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.21,
          "contract": 900,
          "contractSigned": "2/17/2026",
          "hasSA": true
        },
        {
          "wo": "00203805",
          "account": "In Rhodes Management, Inc",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.15,
          "contract": 350,
          "contractSigned": "1/29/2026",
          "hasSA": true
        },
        {
          "wo": "00201680",
          "account": "KC Property Service",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.13,
          "contract": 350,
          "contractSigned": "2/17/2026",
          "hasSA": true
        },
        {
          "wo": "00208665",
          "account": "Herriman & Associates, Inc.",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.07,
          "contract": 350,
          "contractSigned": "3/31/2026",
          "hasSA": true
        },
        {
          "wo": "00205649",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.03,
          "contract": 350,
          "contractSigned": "3/17/2026",
          "hasSA": true
        },
        {
          "wo": "00201675",
          "account": "KC Property Service",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.02,
          "contract": 350,
          "contractSigned": "2/17/2026",
          "hasSA": true
        },
        {
          "wo": "00210072",
          "account": "Josh Sheilds",
          "branch": "Nashville",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.02,
          "contract": 835,
          "contractSigned": "4/1/2026",
          "hasSA": true
        },
        {
          "wo": "00207841",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27,
          "contract": 350,
          "contractSigned": "3/26/2026",
          "hasSA": true
        },
        {
          "wo": "00202180",
          "account": "B & E Ciotola Enterprises Ltd",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 26.95,
          "contract": 400,
          "contractSigned": "2/20/2026",
          "hasSA": true
        },
        {
          "wo": "00210516",
          "account": "Associa On Call",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 26.08,
          "contract": 350,
          "contractSigned": "4/10/2026",
          "hasSA": true
        },
        {
          "wo": "00207915",
          "account": "Clayman Property Services",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 26.01,
          "contract": 350,
          "contractSigned": "3/27/2026",
          "hasSA": true
        },
        {
          "wo": "00207754",
          "account": "Associa On Call",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 25.97,
          "contract": 350,
          "contractSigned": "3/26/2026",
          "hasSA": true
        },
        {
          "wo": "00207785",
          "account": "TGM Communities DC",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 23.94,
          "contract": 350,
          "contractSigned": "3/26/2026",
          "hasSA": true
        },
        {
          "wo": "00207406",
          "account": "Compass Management Professionals",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 23.23,
          "contract": 1962,
          "contractSigned": "2/10/2026",
          "hasSA": true
        },
        {
          "wo": "00207765",
          "account": "Associa On Call",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 23.13,
          "contract": 350,
          "contractSigned": "3/26/2026",
          "hasSA": true
        },
        {
          "wo": "00210677",
          "account": "Compass Management Professionals",
          "branch": "Detroit",
          "trade": "Gutters",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 22.96,
          "contract": 500,
          "contractSigned": "4/13/2026",
          "hasSA": true
        },
        {
          "wo": "00209863",
          "account": "Cedar Management Group",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 22.2,
          "contract": 350,
          "contractSigned": "4/7/2026",
          "hasSA": true
        },
        {
          "wo": "00204332",
          "account": "Central Buckeye Management and Construction Services, LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 22.17,
          "contract": 350,
          "contractSigned": "3/11/2026",
          "hasSA": true
        },
        {
          "wo": "00207639",
          "account": "Central Buckeye Management and Construction Services, LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 22.07,
          "contract": 350,
          "contractSigned": "3/25/2026",
          "hasSA": true
        },
        {
          "wo": "00206396",
          "account": "Central Buckeye Management and Construction Services, LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 22.05,
          "contract": 350,
          "contractSigned": "3/19/2026",
          "hasSA": true
        },
        {
          "wo": "00204621",
          "account": "Singh Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 22.04,
          "contract": 500,
          "contractSigned": "3/13/2026",
          "hasSA": true
        },
        {
          "wo": "00210090",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 22.02,
          "contract": 400,
          "contractSigned": "4/8/2026",
          "hasSA": true
        },
        {
          "wo": "00204259",
          "account": "Kramer Triad Management - Novi",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 21.94,
          "contract": 350,
          "contractSigned": "3/11/2026",
          "hasSA": true
        },
        {
          "wo": "00200472",
          "account": "In Rhodes Management, Inc",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 21.11,
          "contract": 500,
          "contractSigned": "2/5/2026",
          "hasSA": true
        },
        {
          "wo": "00210328",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 21.01,
          "contract": 350,
          "contractSigned": "4/9/2026",
          "hasSA": true
        },
        {
          "wo": "00207411",
          "account": "Lori Criner",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.99,
          "contract": 350,
          "contractSigned": "3/25/2026",
          "hasSA": true
        },
        {
          "wo": "00210125",
          "account": "Oakwood Management Company",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.23,
          "contract": 750,
          "contractSigned": "4/8/2026",
          "hasSA": true
        },
        {
          "wo": "00210424",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.23,
          "contract": 350,
          "contractSigned": "4/9/2026",
          "hasSA": true
        },
        {
          "wo": "00211256",
          "account": "Barrington Apartment Homes",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.16,
          "contract": 500,
          "contractSigned": "4/15/2026",
          "hasSA": true
        },
        {
          "wo": "00210155",
          "account": "Compass Management Professionals",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 20.15,
          "contract": 350,
          "contractSigned": "4/9/2026",
          "hasSA": true
        },
        {
          "wo": "00210461",
          "account": "Condo Management of Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.04,
          "contract": 350,
          "contractSigned": "4/10/2026",
          "hasSA": true
        },
        {
          "wo": "00207539",
          "account": "Banyan Living LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.01,
          "contract": 350,
          "contractSigned": "3/25/2026",
          "hasSA": true
        },
        {
          "wo": "00207633",
          "account": "Banyan Living LLC",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20,
          "contract": 350,
          "contractSigned": "3/25/2026",
          "hasSA": true
        },
        {
          "wo": "00204394",
          "account": "O'Brien Association Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19.88,
          "contract": 600,
          "contractSigned": "3/11/2026",
          "hasSA": true
        },
        {
          "wo": "00210361",
          "account": "Natalie Crafts",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19.88,
          "contract": 1100,
          "contractSigned": "4/9/2026",
          "hasSA": true
        },
        {
          "wo": "00210895",
          "account": "Singh Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19.2,
          "contract": 350,
          "contractSigned": "4/13/2026",
          "hasSA": true
        },
        {
          "wo": "00209388",
          "account": "Compass Management Professionals",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19.17,
          "contract": 350,
          "contractSigned": "4/6/2026",
          "hasSA": true
        },
        {
          "wo": "00210714",
          "account": "Michigan Condominium Management Co",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Work Completed",
          "days": 19.17,
          "contract": 500,
          "contractSigned": "4/13/2026",
          "hasSA": true
        },
        {
          "wo": "00211590",
          "account": "Redwood Living Inc.",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19.14,
          "contract": 450,
          "contractSigned": "4/17/2026",
          "hasSA": true
        },
        {
          "wo": "00210584",
          "account": "Jacob Nysson",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19.07,
          "contract": 500,
          "contractSigned": "4/10/2026",
          "hasSA": true
        },
        {
          "wo": "00201932",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19.04,
          "contract": 850,
          "contractSigned": "2/19/2026",
          "hasSA": true
        },
        {
          "wo": "00211654",
          "account": "Condominium Management Associates, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19,
          "contract": 600,
          "contractSigned": "4/17/2026",
          "hasSA": true
        },
        {
          "wo": "00210333",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 18.93,
          "contract": 350,
          "contractSigned": "3/11/2026",
          "hasSA": true
        },
        {
          "wo": "00209891",
          "account": "Sunrise Treatment Center",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 16.29,
          "contract": 2278.82,
          "contractSigned": "4/7/2026",
          "hasSA": true
        },
        {
          "wo": "00205897",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 16.22,
          "contract": 1600,
          "contractSigned": "3/18/2026",
          "hasSA": true
        },
        {
          "wo": "00211098",
          "account": "WPM Real Estate Management",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 16.22,
          "contract": 350,
          "contractSigned": "4/14/2026",
          "hasSA": true
        },
        {
          "wo": "00210781",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 16.13,
          "contract": 350,
          "contractSigned": "3/10/2026",
          "hasSA": true
        },
        {
          "wo": "00210025",
          "account": "Herriman & Associates, Inc.",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 16.13,
          "contract": 350,
          "contractSigned": "4/8/2026",
          "hasSA": true
        },
        {
          "wo": "00210928",
          "account": "Jason Zelenka",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 16.11,
          "contract": 950,
          "contractSigned": "4/10/2026",
          "hasSA": true
        },
        {
          "wo": "00210345",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.91,
          "contract": 400,
          "contractSigned": "4/9/2026",
          "hasSA": true
        },
        {
          "wo": "00209857",
          "account": "WPM Real Estate Management",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.27,
          "contract": 600,
          "contractSigned": "4/7/2026",
          "hasSA": true
        },
        {
          "wo": "00204321",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.22,
          "contract": 1300,
          "contractSigned": "3/11/2026",
          "hasSA": true
        },
        {
          "wo": "00210491",
          "account": "Singh Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.22,
          "contract": 500,
          "contractSigned": "4/10/2026",
          "hasSA": true
        },
        {
          "wo": "00210237",
          "account": "Murn Properties",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.12,
          "contract": 350,
          "contractSigned": "4/9/2026",
          "hasSA": true
        },
        {
          "wo": "00210577",
          "account": "Singh Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.12,
          "contract": 350,
          "contractSigned": "4/10/2026",
          "hasSA": true
        },
        {
          "wo": "00210998",
          "account": "Sentry Management - East Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.11,
          "contract": 350,
          "contractSigned": "4/14/2026",
          "hasSA": true
        },
        {
          "wo": "00210154",
          "account": "Kramer Triad Management - Ann Arbor",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.06,
          "contract": 350,
          "contractSigned": "4/9/2026",
          "hasSA": true
        },
        {
          "wo": "00210587",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.06,
          "contract": 350,
          "contractSigned": "4/10/2026",
          "hasSA": true
        },
        {
          "wo": "00205598",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.05,
          "contract": 400,
          "contractSigned": "3/17/2026",
          "hasSA": true
        },
        {
          "wo": "00206234",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.03,
          "contract": 350,
          "contractSigned": "3/19/2026",
          "hasSA": true
        },
        {
          "wo": "00206046",
          "account": "O'Brien Association Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.24,
          "contract": 500,
          "contractSigned": "3/18/2026",
          "hasSA": true
        },
        {
          "wo": "00209484",
          "account": "Draiman Properties",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.23,
          "contract": 1525,
          "contractSigned": "3/30/2026",
          "hasSA": true
        },
        {
          "wo": "00210944",
          "account": "Vaughan Group Ltd",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.21,
          "contract": 400,
          "contractSigned": "2/2/2026",
          "hasSA": true
        },
        {
          "wo": "00210046",
          "account": "KS Management",
          "branch": "Detroit",
          "trade": "Siding",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.18,
          "contract": 350,
          "contractSigned": "4/8/2026",
          "hasSA": true
        },
        {
          "wo": "00211261",
          "account": "Ackermann Group",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.18,
          "contract": 350,
          "contractSigned": "4/15/2026",
          "hasSA": true
        },
        {
          "wo": "00208851",
          "account": "Kramer Triad Management - Ann Arbor",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.15,
          "contract": 350,
          "contractSigned": "4/1/2026",
          "hasSA": true
        },
        {
          "wo": "00210500",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.14,
          "contract": 1000,
          "contractSigned": "4/10/2026",
          "hasSA": true
        },
        {
          "wo": "00210330",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Work Completed",
          "days": 14.05,
          "contract": 350,
          "contractSigned": "4/9/2026",
          "hasSA": true
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
          "days": 119.06,
          "contract": 350,
          "contractSigned": "1/5/2026",
          "hasSA": true
        },
        {
          "wo": "00198750",
          "account": "Associa Tennessee",
          "branch": "Nashville",
          "trade": "Roofing",
          "status": "Pending Insurance Claim",
          "subStatus": "",
          "days": 110.13,
          "contract": 350,
          "contractSigned": "1/13/2026",
          "hasSA": true
        },
        {
          "wo": "00198489",
          "account": "Associa Tennessee",
          "branch": "Nashville",
          "trade": "Roofing",
          "status": "Pending Insurance Claim",
          "subStatus": "",
          "days": 107.01,
          "contract": 350,
          "contractSigned": "1/9/2026",
          "hasSA": true
        },
        {
          "wo": "00199177",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 98.18,
          "contract": 350,
          "contractSigned": "1/20/2026",
          "hasSA": true
        },
        {
          "wo": "00199911",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Gutters",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 92.11,
          "contract": 350,
          "contractSigned": "2/2/2026",
          "hasSA": true
        },
        {
          "wo": "00198653",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 89.87,
          "contract": 500,
          "contractSigned": "1/13/2026",
          "hasSA": true
        },
        {
          "wo": "00198212",
          "account": "Condo Management of Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 88.98,
          "contract": 350,
          "contractSigned": "1/7/2026",
          "hasSA": true
        },
        {
          "wo": "00198257",
          "account": "Condo Management of Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 88.72,
          "contract": 350,
          "contractSigned": "1/7/2026",
          "hasSA": true
        },
        {
          "wo": "00198154",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 88.65,
          "contract": 350,
          "contractSigned": "1/6/2026",
          "hasSA": true
        },
        {
          "wo": "00198578",
          "account": "Singh Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 78.91,
          "contract": 310,
          "contractSigned": "1/12/2026",
          "hasSA": true
        },
        {
          "wo": "00199692",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Gutters",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 78.9,
          "contract": 350,
          "contractSigned": "1/28/2026",
          "hasSA": true
        },
        {
          "wo": "00200070",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 78.16,
          "contract": 350,
          "contractSigned": "2/2/2026",
          "hasSA": true
        },
        {
          "wo": "00201447",
          "account": "Aaron Carroll",
          "branch": "Columbus",
          "trade": "Gutters",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 77.17,
          "contract": 350,
          "contractSigned": "2/16/2026",
          "hasSA": true
        },
        {
          "wo": "00198680",
          "account": "Condo Management of Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 74.88,
          "contract": 350,
          "contractSigned": "1/13/2026",
          "hasSA": true
        },
        {
          "wo": "00202287",
          "account": "Sentry Management - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 71.17,
          "contract": 350,
          "contractSigned": "2/23/2026",
          "hasSA": true
        },
        {
          "wo": "00200135",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 71,
          "contract": 350,
          "contractSigned": "2/3/2026",
          "hasSA": true
        },
        {
          "wo": "00200520",
          "account": "Korcsmaros, Alex",
          "branch": "Nashville",
          "trade": "Roofing",
          "status": "Scheduled",
          "subStatus": "",
          "days": 70.99,
          "contract": 2480,
          "contractSigned": "2/2/2026",
          "hasSA": true
        },
        {
          "wo": "00200329",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 70.91,
          "contract": 350,
          "contractSigned": "2/4/2026",
          "hasSA": true
        },
        {
          "wo": "00200349",
          "account": "Condo Management of Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 69.03,
          "contract": 350,
          "contractSigned": "2/4/2026",
          "hasSA": true
        },
        {
          "wo": "00201376",
          "account": "Avenue5",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 69,
          "contract": 550,
          "contractSigned": "2/13/2026",
          "hasSA": true
        },
        {
          "wo": "00200434",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 68.97,
          "contract": 350,
          "contractSigned": "2/5/2026",
          "hasSA": true
        },
        {
          "wo": "00201116",
          "account": "Custom Property Management, Inc.",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 65.09,
          "contract": 350,
          "contractSigned": "2/11/2026",
          "hasSA": true
        },
        {
          "wo": "00201844",
          "account": "Kalyan Hospitality",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 65.01,
          "contract": 350,
          "contractSigned": "2/18/2026",
          "hasSA": true
        },
        {
          "wo": "00200535",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 63.15,
          "contract": 350,
          "contractSigned": "2/6/2026",
          "hasSA": true
        },
        {
          "wo": "00200550",
          "account": "Sentry Management - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 63.06,
          "contract": 350,
          "contractSigned": "2/6/2026",
          "hasSA": true
        }
      ],
      "notStartedByStatus": [
        {
          "status": "Pending Estimate Approval",
          "count": 110,
          "avgDays": 38.4,
          "maxDays": 98.2
        },
        {
          "status": "Scheduled",
          "count": 87,
          "avgDays": 8.5,
          "maxDays": 71
        },
        {
          "status": "Ready to Schedule",
          "count": 73,
          "avgDays": 11.4,
          "maxDays": 44.2
        },
        {
          "status": "On Hold",
          "count": 24,
          "avgDays": 16.8,
          "maxDays": 50.6
        },
        {
          "status": "New",
          "count": 19,
          "avgDays": 0.4,
          "maxDays": 7
        },
        {
          "status": "Pending Insurance Claim",
          "count": 4,
          "avgDays": 99.6,
          "maxDays": 119.1
        }
      ],
      "notStartedTotal": 317,
      "multiTouch": [
        {
          "wo": "00191882",
          "account": "The Wheel House",
          "branch": "DC Metro",
          "tech": "Israel Velasquez",
          "appointments": 14,
          "hours": 33.9,
          "billHours": 57.5,
          "contract": 6900,
          "hoursPer100": 0.5,
          "oldest": "2026-01-30",
          "newest": "2026-02-03",
          "spanDays": 4
        },
        {
          "wo": "00196194",
          "account": "TGM Communities DC",
          "branch": "DC Metro",
          "tech": "Israel Velasquez",
          "appointments": 9,
          "hours": 40.6,
          "billHours": 98,
          "contract": 7125,
          "hoursPer100": 0.6,
          "oldest": "2026-01-09",
          "newest": "2026-03-05",
          "spanDays": 55
        },
        {
          "wo": "00191559",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "tech": "Edwin Irizarry-Vasquez",
          "appointments": 9,
          "hours": 23.2,
          "billHours": 48,
          "contract": 4600,
          "hoursPer100": 0.5,
          "oldest": "2026-01-12",
          "newest": "2026-03-16",
          "spanDays": 63
        },
        {
          "wo": "00196912",
          "account": "Avenue5",
          "branch": "DC Metro",
          "tech": "Santos Alfaro-Delcid",
          "appointments": 9,
          "hours": 46.1,
          "billHours": 98.5,
          "contract": 9340,
          "hoursPer100": 0.5,
          "oldest": "2026-01-21",
          "newest": "2026-02-13",
          "spanDays": 23
        },
        {
          "wo": "00196518",
          "account": "Solomon Organization, LLC",
          "branch": "Cleveland",
          "tech": "David Frindt",
          "appointments": 7,
          "hours": 4.6,
          "billHours": 5,
          "contract": 5785,
          "hoursPer100": 0.1,
          "oldest": "2026-01-12",
          "newest": "2026-01-23",
          "spanDays": 11
        },
        {
          "wo": "00185160",
          "account": "Jerry Helms",
          "branch": "Raleigh",
          "tech": "Nick Foster",
          "appointments": 7,
          "hours": 13.1,
          "billHours": 22,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-01-22",
          "newest": "2026-04-06",
          "spanDays": 74
        },
        {
          "wo": "00193070",
          "account": "Ravines of Plymouth",
          "branch": "Detroit",
          "tech": "Will Vickers",
          "appointments": 6,
          "hours": 13.4,
          "billHours": 15,
          "contract": 7750,
          "hoursPer100": 0.2,
          "oldest": "2026-04-10",
          "newest": "2026-05-04",
          "spanDays": 24
        },
        {
          "wo": "00198347",
          "account": "Benny Iaquinta",
          "branch": "Detroit",
          "tech": "Will Vickers",
          "appointments": 6,
          "hours": 10.9,
          "billHours": 26,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-01-13",
          "newest": "2026-03-19",
          "spanDays": 65
        },
        {
          "wo": "00199364",
          "account": "Fred Gartenlaub",
          "branch": "Cincinnati",
          "tech": "Andrew Pruitt",
          "appointments": 6,
          "hours": 15.8,
          "billHours": 35,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-02-03",
          "newest": "2026-03-20",
          "spanDays": 45
        },
        {
          "wo": "00199282",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "tech": "Richard Hoffman",
          "appointments": 6,
          "hours": 6.9,
          "billHours": 17,
          "contract": 1700,
          "hoursPer100": 0.4,
          "oldest": "2026-02-04",
          "newest": "2026-03-16",
          "spanDays": 40
        },
        {
          "wo": "00190957",
          "account": "Kramer Triad Management - Ann Arbor",
          "branch": "Detroit",
          "tech": "Will Vickers",
          "appointments": 6,
          "hours": 0,
          "billHours": 0,
          "contract": 7700,
          "hoursPer100": 0,
          "oldest": "2026-04-08",
          "newest": "2026-04-08",
          "spanDays": 0
        },
        {
          "wo": "00198341",
          "account": "Community Association Management, Limited",
          "branch": "Raleigh",
          "tech": "Chris Coyour",
          "appointments": 5,
          "hours": 8.7,
          "billHours": 9,
          "contract": 8060,
          "hoursPer100": 0.1,
          "oldest": "2026-01-15",
          "newest": "2026-03-11",
          "spanDays": 55
        },
        {
          "wo": "00199830",
          "account": "James Langmeier",
          "branch": "Cincinnati",
          "tech": "Randy Pfeiffer",
          "appointments": 5,
          "hours": 15.9,
          "billHours": 24,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-02-02",
          "newest": "2026-03-10",
          "spanDays": 36
        },
        {
          "wo": "00200019",
          "account": "Comsource Management, Inc.",
          "branch": "DC Metro",
          "tech": "Santos Alfaro-Delcid",
          "appointments": 5,
          "hours": 8.7,
          "billHours": 14.5,
          "contract": 1450,
          "hoursPer100": 0.6,
          "oldest": "2026-02-04",
          "newest": "2026-03-04",
          "spanDays": 28
        },
        {
          "wo": "00200222",
          "account": "Jas Bains",
          "branch": "Raleigh",
          "tech": "Kevin Green",
          "appointments": 5,
          "hours": 7.1,
          "billHours": 12.5,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-02-05",
          "newest": "2026-02-26",
          "spanDays": 21
        },
        {
          "wo": "00200238",
          "account": "Pegnato",
          "branch": "Raleigh",
          "tech": "Chris Coyour",
          "appointments": 5,
          "hours": 30.3,
          "billHours": 48,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-02-05",
          "newest": "2026-02-28",
          "spanDays": 23
        },
        {
          "wo": "00185287",
          "account": "Greystar Real Estate Management - NC",
          "branch": "Raleigh",
          "tech": "Chris Coyour",
          "appointments": 5,
          "hours": 4.9,
          "billHours": 14,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-02-13",
          "newest": "2026-03-16",
          "spanDays": 31
        },
        {
          "wo": "00192417",
          "account": "Encompass Management Group, LLC",
          "branch": "Detroit",
          "tech": "Edwin Irizarry-Vasquez",
          "appointments": 5,
          "hours": 0.4,
          "billHours": 2,
          "contract": 64009.4,
          "hoursPer100": 0,
          "oldest": "2026-02-23",
          "newest": "2026-03-06",
          "spanDays": 11
        },
        {
          "wo": "00202609",
          "account": "Associa - Community Management Corporation DC Market - Opp# 254255",
          "branch": "DC Metro",
          "tech": "Israel Velasquez",
          "appointments": 5,
          "hours": 26.2,
          "billHours": 26.5,
          "contract": 250494,
          "hoursPer100": 0,
          "oldest": "2026-03-25",
          "newest": "2026-03-25",
          "spanDays": 0
        },
        {
          "wo": "00191397",
          "account": "Jessi Toth",
          "branch": "Columbus",
          "tech": "Matt Velazquez",
          "appointments": 4,
          "hours": 8.8,
          "billHours": 15,
          "contract": 24000,
          "hoursPer100": 0,
          "oldest": "2026-01-06",
          "newest": "2026-03-06",
          "spanDays": 59
        },
        {
          "wo": "00197622",
          "account": "Michael Boulus",
          "branch": "Detroit",
          "tech": "Wilver Velasquez",
          "appointments": 4,
          "hours": 7.3,
          "billHours": 16,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-01-06",
          "newest": "2026-02-10",
          "spanDays": 35
        },
        {
          "wo": "00197336",
          "account": "Management Plus",
          "branch": "Cincinnati",
          "tech": "Andrew Pruitt",
          "appointments": 4,
          "hours": 4.3,
          "billHours": 6.5,
          "contract": 1250,
          "hoursPer100": 0.3,
          "oldest": "2026-01-08",
          "newest": "2026-02-13",
          "spanDays": 36
        },
        {
          "wo": "00172168",
          "account": "K&K Associates LLC",
          "branch": "DC Metro",
          "tech": "Israel Velasquez",
          "appointments": 4,
          "hours": 14.2,
          "billHours": 43.5,
          "contract": 66262.5,
          "hoursPer100": 0,
          "oldest": "2026-01-12",
          "newest": "2026-01-12",
          "spanDays": 0
        },
        {
          "wo": "00192397",
          "account": "Olga Vovk",
          "branch": "DC Metro",
          "tech": "Israel Velasquez",
          "appointments": 4,
          "hours": 17,
          "billHours": 25,
          "contract": 2500,
          "hoursPer100": 0.7,
          "oldest": "2026-01-13",
          "newest": "2026-03-05",
          "spanDays": 51
        },
        {
          "wo": "00198404",
          "account": "3292: Grant Clarke",
          "branch": "Nashville",
          "tech": "Rene Alvarado",
          "appointments": 4,
          "hours": 4.6,
          "billHours": 6,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-01-13",
          "newest": "2026-04-13",
          "spanDays": 90
        }
      ],
      "disproportionate": [
        {
          "wo": "00203680",
          "account": "Priestley Management Company",
          "branch": "Raleigh",
          "tech": "Chris Coyour",
          "appointments": 1,
          "hours": 142.6,
          "billHours": 1.5,
          "contract": 350,
          "hoursPer100": 40.8,
          "oldest": "2026-03-12",
          "newest": "2026-03-12",
          "spanDays": 0
        },
        {
          "wo": "00200002",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "tech": "Richard Hoffman",
          "appointments": 1,
          "hours": 138.3,
          "billHours": 2,
          "contract": 350,
          "hoursPer100": 39.5,
          "oldest": "2026-02-05",
          "newest": "2026-02-05",
          "spanDays": 0
        },
        {
          "wo": "00206365",
          "account": "Singh Management",
          "branch": "Detroit",
          "tech": "Ethan Epperson",
          "appointments": 1,
          "hours": 142.9,
          "billHours": 286,
          "contract": 400,
          "hoursPer100": 35.7,
          "oldest": "2026-03-27",
          "newest": "2026-03-27",
          "spanDays": 0
        },
        {
          "wo": "00206363",
          "account": "Singh Management",
          "branch": "Detroit",
          "tech": "Ethan Epperson",
          "appointments": 1,
          "hours": 138.8,
          "billHours": 278,
          "contract": 400,
          "hoursPer100": 34.7,
          "oldest": "2026-03-27",
          "newest": "2026-03-27",
          "spanDays": 0
        },
        {
          "wo": "00200315",
          "account": "Kuester Management",
          "branch": "Raleigh",
          "tech": "Chris Coyour",
          "appointments": 1,
          "hours": 69.4,
          "billHours": 1.5,
          "contract": 300,
          "hoursPer100": 23.1,
          "oldest": "2026-02-06",
          "newest": "2026-02-06",
          "spanDays": 0
        },
        {
          "wo": "00212709",
          "account": "Stewart Latwin",
          "branch": "DC Metro",
          "tech": "Israel Velasquez",
          "appointments": 2,
          "hours": 480,
          "billHours": 960,
          "contract": 3071,
          "hoursPer100": 15.6,
          "oldest": "2026-04-19",
          "newest": "2026-04-19",
          "spanDays": 0
        },
        {
          "wo": "00198653",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "tech": "Richard Hoffman",
          "appointments": 1,
          "hours": 76.1,
          "billHours": 5,
          "contract": 500,
          "hoursPer100": 15.2,
          "oldest": "2026-01-19",
          "newest": "2026-01-19",
          "spanDays": 0
        },
        {
          "wo": "00204039",
          "account": "Lakewoode Parkhomes Condominium  Association",
          "branch": "Detroit",
          "tech": "Will Vickers",
          "appointments": 1,
          "hours": 44.9,
          "billHours": 90,
          "contract": 300,
          "hoursPer100": 15,
          "oldest": "2026-03-31",
          "newest": "2026-03-31",
          "spanDays": 0
        },
        {
          "wo": "00208777",
          "account": "Denise Muscatello",
          "branch": "DC Metro",
          "tech": "Israel Velasquez",
          "appointments": 1,
          "hours": 66.2,
          "billHours": 1.5,
          "contract": 450,
          "hoursPer100": 14.7,
          "oldest": "2026-04-03",
          "newest": "2026-04-03",
          "spanDays": 0
        },
        {
          "wo": "00196524",
          "account": "Sentry Management - Columbus",
          "branch": "Columbus",
          "tech": "Matt Velazquez",
          "appointments": 2,
          "hours": 51.3,
          "billHours": 9,
          "contract": 350,
          "hoursPer100": 14.6,
          "oldest": "2026-01-21",
          "newest": "2026-03-19",
          "spanDays": 57
        },
        {
          "wo": "00198339",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "tech": "Jose Cartagena",
          "appointments": 1,
          "hours": 65.9,
          "billHours": 132,
          "contract": 500,
          "hoursPer100": 13.2,
          "oldest": "2026-01-16",
          "newest": "2026-01-16",
          "spanDays": 0
        },
        {
          "wo": "00207379",
          "account": "Condo Management of Columbus",
          "branch": "Columbus",
          "tech": "Jose Cartagena",
          "appointments": 2,
          "hours": 67.7,
          "billHours": 5.5,
          "contract": 550,
          "hoursPer100": 12.3,
          "oldest": "2026-04-10",
          "newest": "2026-04-30",
          "spanDays": 20
        },
        {
          "wo": "00200809",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "tech": "Nick Velazquez",
          "appointments": 1,
          "hours": 21.7,
          "billHours": 22,
          "contract": 200,
          "hoursPer100": 10.9,
          "oldest": "2026-02-12",
          "newest": "2026-02-12",
          "spanDays": 0
        },
        {
          "wo": "00200319",
          "account": "Sentry (Charlotte) & CSI Community Management",
          "branch": "Raleigh",
          "tech": "Chris Coyour",
          "appointments": 2,
          "hours": 67.2,
          "billHours": 3,
          "contract": 695,
          "hoursPer100": 9.7,
          "oldest": "2026-02-06",
          "newest": "2026-02-16",
          "spanDays": 10
        },
        {
          "wo": "00199129",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "tech": "Andrew Pruitt",
          "appointments": 2,
          "hours": 31.7,
          "billHours": 3,
          "contract": 450,
          "hoursPer100": 7.1,
          "oldest": "2026-01-23",
          "newest": "2026-02-11",
          "spanDays": 19
        },
        {
          "wo": "00200663",
          "account": "Barnett Management Inc.",
          "branch": "Cleveland",
          "tech": "Richard Hoffman",
          "appointments": 1,
          "hours": 21.3,
          "billHours": 21.5,
          "contract": 350,
          "hoursPer100": 6.1,
          "oldest": "2026-02-13",
          "newest": "2026-02-13",
          "spanDays": 0
        },
        {
          "wo": "00205477",
          "account": "Kalyan  Eadala",
          "branch": "DC Metro",
          "tech": "Santos Alfaro-Delcid",
          "appointments": 1,
          "hours": 67.4,
          "billHours": 67.5,
          "contract": 1200,
          "hoursPer100": 5.6,
          "oldest": "2026-03-30",
          "newest": "2026-03-30",
          "spanDays": 0
        },
        {
          "wo": "00200788",
          "account": "Linda Denison",
          "branch": "Columbus",
          "tech": "Nick Velazquez",
          "appointments": 1,
          "hours": 18.7,
          "billHours": 2,
          "contract": 350,
          "hoursPer100": 5.4,
          "oldest": "2026-02-12",
          "newest": "2026-02-12",
          "spanDays": 0
        },
        {
          "wo": "00206837",
          "account": "Towne Properties - Raleigh District",
          "branch": "Raleigh",
          "tech": "Chris Coyour",
          "appointments": 2,
          "hours": 25,
          "billHours": 2,
          "contract": 495,
          "hoursPer100": 5.1,
          "oldest": "2026-04-03",
          "newest": "2026-04-03",
          "spanDays": 0
        },
        {
          "wo": "00199521",
          "account": "RowCal Construction & Maintenance TN, LLC",
          "branch": "Nashville",
          "tech": "Rene Alvarado",
          "appointments": 2,
          "hours": 16.1,
          "billHours": 17,
          "contract": 350,
          "hoursPer100": 4.6,
          "oldest": "2026-02-04",
          "newest": "2026-02-04",
          "spanDays": 1
        },
        {
          "wo": "00197532",
          "account": "Murn Properties",
          "branch": "DC Metro",
          "tech": "Wilver Velasquez",
          "appointments": 3,
          "hours": 11.8,
          "billHours": 17.5,
          "contract": 350,
          "hoursPer100": 3.4,
          "oldest": "2026-01-06",
          "newest": "2026-01-16",
          "spanDays": 10
        },
        {
          "wo": "00197467",
          "account": "Main Street Management Group",
          "branch": "Raleigh",
          "tech": "Chris Coyour",
          "appointments": 2,
          "hours": 19.3,
          "billHours": 3,
          "contract": 595,
          "hoursPer100": 3.2,
          "oldest": "2026-01-06",
          "newest": "2026-01-06",
          "spanDays": 0
        }
      ]
    },
    "longAppts": [
      {
        "apptNum": "SA-161706",
        "wo": "00212709",
        "account": "Stewart Latwin",
        "tech": "Santos Alfaro-Delcid",
        "branch": "DC Metro",
        "hours": 480,
        "contract": 3071,
        "laborers": 2,
        "start": "2026-04-19 12:00"
      },
      {
        "apptNum": "SA-147863",
        "wo": "00201063",
        "account": "Wanda Garnett",
        "tech": "Richard Hoffman",
        "branch": "Cleveland",
        "hours": 361.8,
        "contract": 0,
        "laborers": 2,
        "start": "2026-02-16 08:30"
      },
      {
        "apptNum": "SA-153902",
        "wo": "00206365",
        "account": "Singh Management",
        "tech": "Ethan Epperson",
        "branch": "Detroit",
        "hours": 142.9,
        "contract": 400,
        "laborers": 2,
        "start": "2026-03-27 13:17"
      },
      {
        "apptNum": "SA-150920",
        "wo": "00203680",
        "account": "Priestley Management Company",
        "tech": "Chris Coyour",
        "branch": "Raleigh",
        "hours": 142.6,
        "contract": 350,
        "laborers": 1,
        "start": "2026-03-12 12:25"
      },
      {
        "apptNum": "SA-153900",
        "wo": "00206363",
        "account": "Singh Management",
        "tech": "Ethan Epperson",
        "branch": "Detroit",
        "hours": 138.8,
        "contract": 400,
        "laborers": 2,
        "start": "2026-03-27 17:24"
      },
      {
        "apptNum": "SA-146641",
        "wo": "00200002",
        "account": "Associated Property Management, LLC",
        "tech": "Richard Hoffman",
        "branch": "Cleveland",
        "hours": 138.3,
        "contract": 350,
        "laborers": 1,
        "start": "2026-02-05 13:52"
      },
      {
        "apptNum": "SA-148985",
        "wo": "00202037",
        "account": "Nan Wylie",
        "tech": "Nick Velazquez",
        "branch": "Columbus",
        "hours": 89.7,
        "contract": 0,
        "laborers": 1,
        "start": "2026-02-20 14:45"
      },
      {
        "apptNum": "SA-145002",
        "wo": "00198653",
        "account": "Associated Property Management, LLC",
        "tech": "Richard Hoffman",
        "branch": "Cleveland",
        "hours": 76.1,
        "contract": 500,
        "laborers": 2,
        "start": "2026-01-19 10:19"
      },
      {
        "apptNum": "SA-147428",
        "wo": "00200693",
        "account": "R O Nason",
        "tech": "Rene Alvarado",
        "branch": "Nashville",
        "hours": 70.2,
        "contract": 5000,
        "laborers": 1,
        "start": "2026-03-06 09:45"
      },
      {
        "apptNum": "SA-146980",
        "wo": "00200315",
        "account": "Kuester Management",
        "tech": "Chris Coyour",
        "branch": "Raleigh",
        "hours": 69.4,
        "contract": 300,
        "laborers": 1,
        "start": "2026-02-06 11:25"
      },
      {
        "apptNum": "SA-152905",
        "wo": "00205477",
        "account": "Kalyan  Eadala",
        "tech": "Santos Alfaro-Delcid",
        "branch": "DC Metro",
        "hours": 67.4,
        "contract": 1200,
        "laborers": 1,
        "start": "2026-03-30 13:30"
      },
      {
        "apptNum": "SA-150389",
        "wo": "00200308",
        "account": "Phillip Hadden",
        "tech": "Daniel Brown",
        "branch": "Raleigh",
        "hours": 66.5,
        "contract": 0,
        "laborers": 1,
        "start": "2026-03-06 12:33"
      },
      {
        "apptNum": "SA-156646",
        "wo": "00208777",
        "account": "Denise Muscatello",
        "tech": "Israel Velasquez",
        "branch": "DC Metro",
        "hours": 66.2,
        "contract": 450,
        "laborers": 1,
        "start": "2026-04-03 13:57"
      },
      {
        "apptNum": "SA-144624",
        "wo": "00198339",
        "account": "Capital Property Solutions",
        "tech": "Jose Cartagena",
        "branch": "Columbus",
        "hours": 65.9,
        "contract": 500,
        "laborers": 2,
        "start": "2026-01-16 14:01"
      },
      {
        "apptNum": "SA-158582",
        "wo": "00207379",
        "account": "Condo Management of Columbus",
        "tech": "Jose Cartagena",
        "branch": "Columbus",
        "hours": 65.5,
        "contract": 550,
        "laborers": 1,
        "start": "2026-04-10 14:26"
      },
      {
        "apptNum": "SA-146986",
        "wo": "00200319",
        "account": "Sentry (Charlotte) & CSI Community Management",
        "tech": "Chris Coyour",
        "branch": "Raleigh",
        "hours": 65.3,
        "contract": 695,
        "laborers": 1,
        "start": "2026-02-06 15:38"
      },
      {
        "apptNum": "SA-155490",
        "wo": "00207783",
        "account": "Solomon Organization, LLC",
        "tech": "Will Vickers",
        "branch": "Detroit",
        "hours": 52.9,
        "contract": 2130,
        "laborers": 2,
        "start": "2026-03-28 09:25"
      },
      {
        "apptNum": "SA-146327",
        "wo": "00196524",
        "account": "Sentry Management - Columbus",
        "tech": "Jose Cartagena",
        "branch": "Columbus",
        "hours": 51.2,
        "contract": 350,
        "laborers": 2,
        "start": "2026-03-19 09:38"
      },
      {
        "apptNum": "SA-151325",
        "wo": "00204039",
        "account": "Lakewoode Parkhomes Condominium  Association",
        "tech": "Will Vickers",
        "branch": "Detroit",
        "hours": 44.9,
        "contract": 300,
        "laborers": 2,
        "start": "2026-03-31 15:14"
      },
      {
        "apptNum": "SA-155334",
        "wo": "00207650",
        "account": "Nancy Greenberg",
        "tech": "Daniel Brown",
        "branch": "Raleigh",
        "hours": 33.1,
        "contract": 0,
        "laborers": 1,
        "start": "2026-04-03 11:47"
      },
      {
        "apptNum": "SA-157963",
        "wo": "00209874",
        "account": "Tidewater Property Management, Inc.",
        "tech": "Santos Alfaro-Delcid",
        "branch": "DC Metro",
        "hours": 32,
        "contract": 2000,
        "laborers": 1,
        "start": "2026-04-24 09:30"
      },
      {
        "apptNum": "SA-145929",
        "wo": "00199129",
        "account": "Towne Properties - East Cincinnati District Office",
        "tech": "Andrew Pruitt",
        "branch": "Cincinnati",
        "hours": 30.2,
        "contract": 450,
        "laborers": 1,
        "start": "2026-02-11 10:02"
      },
      {
        "apptNum": "SA-156145",
        "wo": "00206837",
        "account": "Towne Properties - Raleigh District",
        "tech": "Nick Foster",
        "branch": "Raleigh",
        "hours": 25,
        "contract": 495,
        "laborers": 1,
        "start": "2026-04-03 10:33"
      },
      {
        "apptNum": "SA-142649",
        "wo": "00196608",
        "account": "Towne Properties - East Cincinnati District Office",
        "tech": "Andrew Pruitt",
        "branch": "Cincinnati",
        "hours": 22,
        "contract": 784,
        "laborers": 1,
        "start": "2026-01-05 10:20"
      },
      {
        "apptNum": "SA-147572",
        "wo": "00200809",
        "account": "Towne Properties - Columbus",
        "tech": "Nick Velazquez",
        "branch": "Columbus",
        "hours": 21.7,
        "contract": 200,
        "laborers": 1,
        "start": "2026-02-12 10:39"
      }
    ],
    "buckets": {
      "<30m": 1773,
      "30-60m": 662,
      "1-2h": 1542,
      "2-4h": 919,
      "4-8h": 245,
      ">8h": 115
    },
    "findings": {
      "concerns": [
        "Matt Large bills 1.89x actual hours (network avg 1.30x). Review crew sizing or labor allocation.",
        "Will Vickers bills 2.98x actual hours (network avg 1.30x). Review crew sizing or labor allocation.",
        "Ricardo Nunez bills 2.06x actual hours (network avg 1.30x). Review crew sizing or labor allocation.",
        "Edwin Irizarry-Vasquez bills 2.25x actual hours (network avg 1.30x). Review crew sizing or labor allocation.",
        "Santos Alfaro-Delcid bills 1.98x actual hours (network avg 1.30x). Review crew sizing or labor allocation.",
        "G3 Construction bills 1.93x actual hours (network avg 1.30x). Review crew sizing or labor allocation.",
        "Ethan Epperson bills 2.09x actual hours (network avg 1.30x). Review crew sizing or labor allocation.",
        "Alonzie/Lonnie Wright bills 1.82x actual hours (network avg 1.30x). Review crew sizing or labor allocation.",
        "Richard Hoffman averages 231min per appointment vs network 114min. Heavy skew on this tech's book.",
        "Santos Alfaro-Delcid averages 448min per appointment vs network 114min. Heavy skew on this tech's book.",
        "Israel Velasquez averages 201min per appointment vs network 114min. Heavy skew on this tech's book.",
        "Rene Alvarado averages 197min per appointment vs network 114min. Heavy skew on this tech's book.",
        "Ethan Epperson averages 270min per appointment vs network 114min. Heavy skew on this tech's book."
      ],
      "watch": [
        "98 work orders are In Progress 14+ days. Oldest: WO 00202625 (68 days, Avenue5). Should be closed or escalated.",
        "317 Repair WOs are not yet started; the oldest has been in \"Pending Insurance Claim\" for 119 days (WO 00198032, Associa Tennessee). Slow-scheduling backlog.",
        "22 work orders are eating disproportionate hours vs their contract value. Top offender: WO 00203680 (142.6h on $350 contract).",
        "1206 appointments have no Actual End — either still in progress or never closed out. Likely a data hygiene problem in Salesforce."
      ],
      "positives": [
        "Darren Vaught runs 347 appointments at just 65min avg — efficient dispatch density.",
        "Nick Velazquez runs 308 appointments at just 84min avg — efficient dispatch density.",
        "Kevin Green runs 300 appointments at just 80min avg — efficient dispatch density.",
        "Nick Foster runs 299 appointments at just 93min avg — efficient dispatch density.",
        "Matt Large runs 262 appointments at just 81min avg — efficient dispatch density.",
        "Matt Velazquez runs 257 appointments at just 75min avg — efficient dispatch density.",
        "Randy Pfeiffer runs 251 appointments at just 92min avg — efficient dispatch density.",
        "Andrew Pruitt runs 238 appointments at just 83min avg — efficient dispatch density.",
        "David Frindt runs 227 appointments at just 78min avg — efficient dispatch density.",
        "Andrii Shvets runs 220 appointments at just 97min avg — efficient dispatch density.",
        "Edwin Irizarry-Vasquez runs 210 appointments at just 87min avg — efficient dispatch density.",
        "Most service tickets close in a single visit (1.28 appointments per WO on average). Low return-trip rate."
      ]
    },
    "benchmarks": {
      "avgBillRatio": 1.298,
      "avgMinPerAppt": 114
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
