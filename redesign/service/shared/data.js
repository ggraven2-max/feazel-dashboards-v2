/* AUTO-GENERATED — do not edit. Generated 2026-05-06T18:39:50.765Z (service) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-05-06T18:39:50.765Z",
    "pipelineVersion": "2.0.0",
    "lob": "service",
    "lastBuiltProjects": [
      "revenue-forecast"
    ],
    "projects": [
      {
        "id": "revenue-forecast",
        "version": "V5-locked-2026-04-19-shell-1.0",
        "elapsedMs": 311,
        "builtAt": "2026-05-06T18:39:50.765Z"
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
        "value": "$-687,194",
        "sub": "Plan YTD: $2.83M",
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
        "budget": 461401.71,
        "gap": -27311.93999999977
      },
      "february": {
        "label": "February",
        "invoiced": 412095.43,
        "budget": 363591.85,
        "gap": 48503.580000000016
      },
      "march": {
        "label": "March",
        "invoiced": 617919.8800000002,
        "budget": 615966.1746066653,
        "gap": 1953.705393334967
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
      "q1OriginalBudget": 1440959.7346066653,
      "q1Actual": 1464105.0800000005,
      "q1Shortfall": 23145.345393335214,
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
            "$461K",
            "$-27,312",
            519
          ],
          [
            "February",
            "$412K",
            "$364K",
            "+$49K",
            505
          ],
          [
            "March",
            "$618K",
            "$616K",
            "+$2K",
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
              461401.71,
              363591.85,
              615966.1746066653,
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
                  461401.71,
                  363591.85,
                  615966.1746066653,
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
      461401.71,
      363591.85,
      615966.1746066653,
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
      461401.71,
      363591.85,
      615966.1746066653,
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
  }
};
