/* AUTO-GENERATED — do not edit. Generated 2026-10-21T12:51:10.388Z (service) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-10-21T12:51:10.388Z",
    "pipelineVersion": "2.0.0",
    "lob": "service",
    "lastBuiltProjects": [
      "revenue-forecast",
      "service-calls"
    ],
    "projects": [
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 769,
        "builtAt": "2026-10-21T12:51:10.388Z"
      },
      {
        "id": "service-calls",
        "version": "Service-Calls-v1.1-2026-05-07",
        "elapsedMs": 1033,
        "builtAt": "2026-10-21T12:51:10.388Z"
      }
    ]
  },
  "REVENUE_FORECAST": {
    "_source": "calculator/revenue-forecast-service.js Service-v1.0-2026-05-06",
    "title": "Service Revenue Forecast",
    "subtitle": "Service-v1 · Budget-anchored forecast · Data through 2026-10-20",
    "runDate": "2026-10-21",
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
        "value": "$5.71M",
        "sub": "10 months elapsed · 5885 invoices"
      },
      {
        "label": "YTD vs Plan",
        "value": "$-304,887",
        "sub": "Plan YTD: $6.02M",
        "trend": "negative"
      },
      {
        "label": "Annualized Pace",
        "value": "$6.85M",
        "sub": "YTD × 12/10",
        "trend": "positive"
      },
      {
        "label": "Plan-Rest Forecast",
        "value": "$6.64M",
        "sub": "YTD actual + remaining-month plan"
      },
      {
        "label": "Annual Budget",
        "value": "$6.8M",
        "sub": "2026 Service plan"
      },
      {
        "label": "Forecast vs Budget",
        "value": "+$55K",
        "sub": "0.0% uplift needed",
        "trend": "positive"
      },
      {
        "label": "Last Month Revenue",
        "value": "$367K",
        "sub": "October 2026"
      },
      {
        "label": "Last Month vs Plan",
        "value": "$-398,755",
        "sub": "Plan: $766K"
      }
    ],
    "execSummary": {
      "budget": 6800179.48,
      "modelAnnualInvoiced": 6854954.952000024,
      "gap": 54775.47200002335,
      "narrative": "10 months of FY2026 Service activity reported, $5.71M invoiced YTD. Run-rate annualizes to $6.85M against the $6.8M plan, a $55K lead."
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
        "budget": 480636.8053489713,
        "gap": 132460.0946510285
      },
      "may": {
        "label": "May",
        "invoiced": 604498.2100000003,
        "budget": 910406.9363225256,
        "gap": -305908.7263225253
      },
      "june": {
        "label": "June",
        "invoiced": 686672.0700000001,
        "budget": 626060.4024353181,
        "gap": 60611.667564681964
      },
      "july": {
        "label": "July",
        "invoiced": 654209.1300000001,
        "budget": 567463.4730525267,
        "gap": 86745.65694747341
      },
      "august": {
        "label": "August",
        "invoiced": 699253.2200000002,
        "budget": 647749.3443287316,
        "gap": 51503.87567126856
      },
      "september": {
        "label": "September",
        "invoiced": 623406.29,
        "budget": 578096.2729940619,
        "gap": 45310.017005938105
      },
      "october": {
        "label": "October",
        "invoiced": 367221.5600000001,
        "budget": 765976.1409289142,
        "gap": -398754.5809289141
      },
      "november": {
        "label": "November",
        "invoiced": 0,
        "budget": 500371.7714224677,
        "gap": -500371.7714224677
      },
      "december": {
        "label": "December",
        "invoiced": 0,
        "budget": 424311.64,
        "gap": -424311.64
      }
    },
    "weeklyTargetsHeader": {
      "avgWeeklyNeed": 130772.68230769232,
      "recent4WkAvg": 0,
      "gap": 0
    },
    "budgetRecoveryHeader": {
      "fullYearBudget": 6800179.48,
      "gap": 0,
      "upliftPct": 0,
      "aprilGap": 132460.0946510285,
      "q1OriginalBudget": 1440959.7346066653,
      "q1Actual": 1464105.0800000005,
      "q1Shortfall": 23145.345393335214,
      "recoveryRatio": 0
    },
    "profitabilitySummary": {
      "combinedGP": 1947510.9699999997,
      "combinedGP_pct": 56.8478137516502,
      "combinedRevenue": 3425832.6599999927,
      "y2025_GP_pct": 63.47410110849657,
      "y2025_revenue": 1724246.1900000004,
      "y2025_jobs": 987,
      "y2026_GP_pct": 50.13328532166804,
      "y2026_revenue": 1701586.4700000014,
      "y2026_jobs": 1022,
      "materialCost": 514660.73,
      "laborCost": 933841.1799999996,
      "otherCost": 30707.009999999995,
      "commissions": 109789.96999999996,
      "materialPctContract": 15.022938394194686,
      "laborPctContract": 27.258808957703195,
      "otherPctContract": 0.8963371258186341,
      "commissionPctContract": 3.2047674506086405,
      "sourceFile": "GregProfitabilityServiceResults856.csv",
      "jobsParsed": 2009
    },
    "profitabilityByJobType": [
      {
        "key": "Repair",
        "jobs": 478,
        "revenue": 1199817.5800000003,
        "expenses": 614592.05,
        "gross_profit": 585225.5299999996,
        "material": 211062.1899999998,
        "labor": 395816.64,
        "other": 7579.98,
        "commission": 51495.13000000001,
        "contract": 1212439,
        "gp_pct": 48.77620896336586
      },
      {
        "key": "T&M",
        "jobs": 533,
        "revenue": 487788.8900000001,
        "expenses": 222063.59999999995,
        "gross_profit": 265725.28999999986,
        "material": 57991.96999999998,
        "labor": 161543.90000000002,
        "other": 1446.65,
        "commission": 0,
        "contract": 483397.8900000001,
        "gp_pct": 54.475469910764026
      },
      {
        "key": "Warranty",
        "jobs": 11,
        "revenue": 13980,
        "expenses": 11869.62,
        "gross_profit": 2110.379999999999,
        "material": 4029.62,
        "labor": 7799.76,
        "other": 0,
        "commission": 692.16,
        "contract": 13630,
        "gp_pct": 15.095708154506433
      }
    ],
    "profitabilityByMarket": [
      {
        "key": "Columbus",
        "jobs": 379,
        "revenue": 677530.9700000006,
        "expenses": 347755.39000000025,
        "gross_profit": 329775.58000000013,
        "material": 124173.88,
        "labor": 220248.62000000008,
        "other": 1144.78,
        "commission": 30662.03,
        "contract": 679131.6800000005,
        "gp_pct": 48.67313740654539
      },
      {
        "key": "Detroit Metro",
        "jobs": 121,
        "revenue": 372966.75,
        "expenses": 182554.44000000006,
        "gross_profit": 190412.30999999997,
        "material": 38150.67,
        "labor": 140222.95,
        "other": 4401.1,
        "commission": 8015.5599999999995,
        "contract": 381296.75,
        "gp_pct": 51.05342768490756
      },
      {
        "key": "Cincinnati",
        "jobs": 219,
        "revenue": 208119.1,
        "expenses": 126892.84999999995,
        "gross_profit": 81226.25000000004,
        "material": 34319.11000000001,
        "labor": 92971.53,
        "other": 0,
        "commission": 1633.52,
        "contract": 206221.1,
        "gp_pct": 39.028734027775464
      },
      {
        "key": "Raleigh",
        "jobs": 140,
        "revenue": 146076.91,
        "expenses": 64998.02000000001,
        "gross_profit": 81078.89000000001,
        "material": 15082.470000000003,
        "labor": 46804.8,
        "other": 3054.3599999999997,
        "commission": 1217.8500000000001,
        "contract": 145491.85,
        "gp_pct": 55.504247728131716
      },
      {
        "key": "DC Metro",
        "jobs": 42,
        "revenue": 95768.81,
        "expenses": 31990.199999999997,
        "gross_profit": 63778.610000000015,
        "material": 24033.199999999997,
        "labor": 7957,
        "other": 0,
        "commission": 3855.2099999999996,
        "contract": 95982.45999999999,
        "gp_pct": 66.59643155219325
      },
      {
        "key": "Nashville",
        "jobs": 41,
        "revenue": 51072.409999999996,
        "expenses": 13834.929999999998,
        "gross_profit": 37237.479999999996,
        "material": 6884.070000000001,
        "labor": 6961,
        "other": 100,
        "commission": 3865.17,
        "contract": 51118.62,
        "gp_pct": 72.9111471340397
      },
      {
        "key": "Dayton",
        "jobs": 26,
        "revenue": 48961,
        "expenses": 31021.700000000008,
        "gross_profit": 17939.3,
        "material": 5941.150000000001,
        "labor": 25197.98,
        "other": 0,
        "commission": 371,
        "contract": 48961,
        "gp_pct": 36.63997875860379
      },
      {
        "key": "Cleveland",
        "jobs": 24,
        "revenue": 44607.479999999996,
        "expenses": 17218.11,
        "gross_profit": 27389.370000000006,
        "material": 13799.5,
        "labor": 3370.52,
        "other": 226.39000000000001,
        "commission": 1588.98,
        "contract": 44739.34,
        "gp_pct": 61.400845777434654
      },
      {
        "key": "Richmond",
        "jobs": 21,
        "revenue": 41115.34,
        "expenses": 23164.78,
        "gross_profit": 17950.559999999998,
        "material": 8127.58,
        "labor": 14960,
        "other": 0,
        "commission": 178.5,
        "contract": 41156.39,
        "gp_pct": 43.65903334375928
      },
      {
        "key": "Indianapolis",
        "jobs": 3,
        "revenue": 4475,
        "expenses": 5057.589999999999,
        "gross_profit": -582.5900000000001,
        "material": 1005.7900000000001,
        "labor": 4095,
        "other": 0,
        "commission": 0,
        "contract": 4475,
        "gp_pct": -13.018770949720674
      },
      {
        "key": "Grand Rapids",
        "jobs": 2,
        "revenue": 3901.7,
        "expenses": 1470.1000000000001,
        "gross_profit": 2431.5999999999995,
        "material": 674.2,
        "labor": 695.9,
        "other": 100,
        "commission": 275.55,
        "contract": 3901.7,
        "gp_pct": 62.32155214393724
      },
      {
        "key": "Knoxville",
        "jobs": 2,
        "revenue": 3550,
        "expenses": 2188.77,
        "gross_profit": 1361.23,
        "material": 763.77,
        "labor": 1425,
        "other": 0,
        "commission": 96,
        "contract": 3550,
        "gp_pct": 38.344507042253525
      },
      {
        "key": "Greenville",
        "jobs": 1,
        "revenue": 2941,
        "expenses": 128.39,
        "gross_profit": 2812.61,
        "material": 128.39,
        "labor": 0,
        "other": 0,
        "commission": 427.92,
        "contract": 2941,
        "gp_pct": 95.63447806868413
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
        "jobs": 677,
        "revenue": 1429689.1400000001,
        "expenses": 519130.69999999925,
        "gross_profit": 910558.4399999995,
        "material": 205251.23,
        "labor": 299038.4799999999,
        "other": 20375.069999999996,
        "commission": 56258.93000000002,
        "contract": 1383977.5299999993,
        "gp_pct": 63.689260450002394
      },
      {
        "key": "T&M",
        "jobs": 275,
        "revenue": 264534.42000000004,
        "expenses": 95683.56000000001,
        "gross_profit": 168850.86000000004,
        "material": 30204.50000000002,
        "labor": 60859.52,
        "other": 1305.31,
        "commission": 1207.75,
        "contract": 267830.47000000015,
        "gp_pct": 63.82944797883013
      },
      {
        "key": "Warranty",
        "jobs": 35,
        "revenue": 30022.63,
        "expenses": 14982.159999999996,
        "gross_profit": 15040.470000000001,
        "material": 6121.22,
        "labor": 8782.880000000001,
        "other": 0,
        "commission": 136,
        "contract": 25347.63,
        "gp_pct": 50.09711007996302
      }
    ],
    "profitabilityByMarket2025": [
      {
        "key": "Columbus",
        "jobs": 261,
        "revenue": 511708.0900000002,
        "expenses": 191222.62999999992,
        "gross_profit": 320485.46000000025,
        "material": 83945.15000000007,
        "labor": 109287.47,
        "other": 2615,
        "commission": 18695.909999999996,
        "contract": 483207.3100000002,
        "gp_pct": 62.63052436790674
      },
      {
        "key": "Detroit Metro",
        "jobs": 224,
        "revenue": 456632.98,
        "expenses": 166007.77000000005,
        "gross_profit": 290625.21,
        "material": 49184.76,
        "labor": 102958.48,
        "other": 13558.079999999998,
        "commission": 7923.860000000001,
        "contract": 458482.55,
        "gp_pct": 63.64525181689681
      },
      {
        "key": "Cincinnati",
        "jobs": 230,
        "revenue": 211167.33,
        "expenses": 80677.67000000001,
        "gross_profit": 130489.66000000002,
        "material": 25788.79999999998,
        "labor": 51594.75,
        "other": 1235.31,
        "commission": 6064.9800000000005,
        "contract": 204636.47999999998,
        "gp_pct": 61.79443572071496
      },
      {
        "key": "Raleigh",
        "jobs": 60,
        "revenue": 132775.40000000002,
        "expenses": 48715.16,
        "gross_profit": 84060.24,
        "material": 15230.559999999998,
        "labor": 32987.490000000005,
        "other": 327.96000000000004,
        "commission": 4875.87,
        "contract": 133166.36,
        "gp_pct": 63.310101118128806
      },
      {
        "key": "Nashville",
        "jobs": 67,
        "revenue": 123132.53000000001,
        "expenses": 38725.169999999984,
        "gross_profit": 84407.35999999994,
        "material": 18339.64000000001,
        "labor": 17898.5,
        "other": 2508.16,
        "commission": 9576.14,
        "contract": 118822.74,
        "gp_pct": 68.55000867764184
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
        "jobs": 24,
        "revenue": 42928.01,
        "expenses": 26350.530000000002,
        "gross_profit": 16577.48,
        "material": 8742.740000000002,
        "labor": 17607.79,
        "other": 0,
        "commission": 165.4,
        "contract": 43328.01,
        "gp_pct": 38.616930996801386
      },
      {
        "key": "Dayton",
        "jobs": 16,
        "revenue": 24949,
        "expenses": 9314.529999999999,
        "gross_profit": 15634.470000000001,
        "material": 3891.83,
        "labor": 5340,
        "other": 0,
        "commission": 416.54,
        "contract": 24699,
        "gp_pct": 62.66571806485231
      },
      {
        "key": "Richmond",
        "jobs": 8,
        "revenue": 16643.940000000002,
        "expenses": 9570.4,
        "gross_profit": 7073.540000000001,
        "material": 4684.380000000001,
        "labor": 4925,
        "other": 0,
        "commission": 487.33,
        "contract": 16643.940000000002,
        "gp_pct": 42.49919189807221
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
        "jobs": 797,
        "revenue": 1347496.980000001,
        "expenses": 658571.2100000002,
        "gross_profit": 688925.7699999998,
        "material": 226567.50999999986,
        "labor": 426728.39,
        "other": 4319.330000000001,
        "commission": 47543.62,
        "contract": 1347710.490000001,
        "gp_pct": 51.12633128127674
      },
      {
        "key": "Siding",
        "jobs": 92,
        "revenue": 142506.16,
        "expenses": 74429.43999999997,
        "gross_profit": 68076.72,
        "material": 16913.530000000002,
        "labor": 54110.060000000005,
        "other": 3233.9300000000003,
        "commission": 1219.1399999999999,
        "contract": 152441.26000000004,
        "gp_pct": 47.77107179086153
      },
      {
        "key": "Gutters",
        "jobs": 104,
        "revenue": 135543.6,
        "expenses": 75113.38000000002,
        "gross_profit": 60430.22,
        "material": 15190.309999999994,
        "labor": 58445.35,
        "other": 1322.26,
        "commission": 1124,
        "contract": 132449.6,
        "gp_pct": 44.58360261937856
      },
      {
        "key": "(unassigned)",
        "jobs": 16,
        "revenue": 38081.95,
        "expenses": 25302.1,
        "gross_profit": 12779.850000000002,
        "material": 11824.09,
        "labor": 13355.7,
        "other": 151.11,
        "commission": 1199.98,
        "contract": 38907.76,
        "gp_pct": 33.55881198310486
      },
      {
        "key": "Masonry",
        "jobs": 6,
        "revenue": 25300.78,
        "expenses": 11430.56,
        "gross_profit": 13870.220000000001,
        "material": 1370.5600000000002,
        "labor": 10060,
        "other": 0,
        "commission": 1100.55,
        "contract": 25300.78,
        "gp_pct": 54.82131380929759
      },
      {
        "key": "Other",
        "jobs": 3,
        "revenue": 8717,
        "expenses": 2317.58,
        "gross_profit": 6399.42,
        "material": 936.78,
        "labor": 1380.8,
        "other": 0,
        "commission": 0,
        "contract": 8717,
        "gp_pct": 73.41310083744408
      },
      {
        "key": "Carpentry",
        "jobs": 3,
        "revenue": 3300,
        "expenses": 954.82,
        "gross_profit": 2345.1800000000003,
        "material": 174.82,
        "labor": 780,
        "other": 0,
        "commission": 0,
        "contract": 3300,
        "gp_pct": 71.06606060606062
      },
      {
        "key": "Windows",
        "jobs": 1,
        "revenue": 640,
        "expenses": 406.18,
        "gross_profit": 233.82,
        "material": 106.18,
        "labor": 300,
        "other": 0,
        "commission": 0,
        "contract": 640,
        "gp_pct": 36.534375
      }
    ],
    "pipelineSnapshot": {
      "stages": [],
      "totalJobs": 0,
      "totalValue": 0
    },
    "commentary": {
      "actionableRecommendations": [
        "Service tracking ahead of plan by $55K. Hold pace."
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
            "$604K",
            "$910K",
            "$-305,909",
            640
          ],
          [
            "June",
            "$687K",
            "$626K",
            "+$61K",
            653
          ],
          [
            "July",
            "$654K",
            "$567K",
            "+$87K",
            628
          ],
          [
            "August",
            "$699K",
            "$648K",
            "+$52K",
            699
          ],
          [
            "September",
            "$623K",
            "$578K",
            "+$45K",
            540
          ],
          [
            "October",
            "$367K",
            "$766K",
            "$-398,755",
            353
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
            "$1.86M",
            1882
          ],
          [
            "Detroit",
            "$1.35M",
            960
          ],
          [
            "Raleigh",
            "$777K",
            1025
          ],
          [
            "Cincinnati",
            "$534K",
            833
          ],
          [
            "DC Metro",
            "$464K",
            288
          ],
          [
            "Cleveland",
            "$269K",
            408
          ],
          [
            "Nashville",
            "$188K",
            196
          ],
          [
            "Dayton",
            "$114K",
            145
          ],
          [
            "Richmond",
            "$109K",
            96
          ],
          [
            "Indianapolis",
            "$31K",
            38
          ],
          [
            "Grand Rapids",
            "$5K",
            4
          ],
          [
            "Greenville",
            "$5K",
            3
          ],
          [
            "Knoxville",
            "$2K",
            7
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
              604498.2100000003,
              686672.0700000001,
              654209.1300000001,
              699253.2200000002,
              623406.29,
              367221.5600000001,
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
              480636.8053489713,
              910406.9363225256,
              626060.4024353181,
              567463.4730525267,
              647749.3443287316,
              578096.2729940619,
              765976.1409289142,
              500371.7714224677,
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
                  604498.2100000003,
                  686672.0700000001,
                  654209.1300000001,
                  699253.2200000002,
                  623406.29,
                  367221.5600000001,
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
                  480636.8053489713,
                  910406.9363225256,
                  626060.4024353181,
                  567463.4730525267,
                  647749.3443287316,
                  578096.2729940619,
                  765976.1409289142,
                  500371.7714224677,
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
      480636.8053489713,
      910406.9363225256,
      626060.4024353181,
      567463.4730525267,
      647749.3443287316,
      578096.2729940619,
      765976.1409289142,
      500371.7714224677,
      424311.64
    ],
    "revModel": [
      434089.77000000025,
      412095.43,
      617919.8800000002,
      613096.8999999998,
      604498.2100000003,
      686672.0700000001,
      654209.1300000001,
      699253.2200000002,
      623406.29,
      367221.5600000001,
      0,
      0
    ],
    "revFromKnown": [
      434089.77000000025,
      412095.43,
      617919.8800000002,
      613096.8999999998,
      604498.2100000003,
      686672.0700000001,
      654209.1300000001,
      699253.2200000002,
      623406.29,
      367221.5600000001,
      0,
      0
    ],
    "requiredSales": [
      461401.71,
      363591.85,
      615966.1746066653,
      480636.8053489713,
      910406.9363225256,
      626060.4024353181,
      567463.4730525267,
      647749.3443287316,
      578096.2729940619,
      765976.1409289142,
      500371.7714224677,
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
      "source": "ServiceInvoicedYTDResults939.csv",
      "format": "per-invoice",
      "totalInvoiced": 5712462.46000002,
      "invoiceCount": 5885,
      "monthly": [
        434089.77000000025,
        412095.43,
        617919.8800000002,
        613096.8999999998,
        604498.2100000003,
        686672.0700000001,
        654209.1300000001,
        699253.2200000002,
        623406.29,
        367221.5600000001,
        0,
        0
      ],
      "byBranch": {
        "Cincinnati": {
          "invoiced": 534489.1000000001,
          "count": 833
        },
        "Raleigh": {
          "invoiced": 777258.680000002,
          "count": 1025
        },
        "DC Metro": {
          "invoiced": 464345.57999999996,
          "count": 288
        },
        "Dayton": {
          "invoiced": 114408.39,
          "count": 145
        },
        "Detroit": {
          "invoiced": 1348234.64,
          "count": 960
        },
        "Columbus": {
          "invoiced": 1864996.6500000027,
          "count": 1882
        },
        "Richmond": {
          "invoiced": 108922.5,
          "count": 96
        },
        "Nashville": {
          "invoiced": 188181.27,
          "count": 196
        },
        "Indianapolis": {
          "invoiced": 30795,
          "count": 38
        },
        "Cleveland": {
          "invoiced": 269021.77,
          "count": 408
        },
        "Knoxville": {
          "invoiced": 2350,
          "count": 7
        },
        "Grand Rapids": {
          "invoiced": 4901.7,
          "count": 4
        },
        "Greenville": {
          "invoiced": 4557.18,
          "count": 3
        }
      },
      "latestInvoiceDate": "2026-10-20"
    },
    "installServiceOverlap": {
      "sourceFile": "All Jobs with WOs and SAs-2026-10-21-08-47-57.xlsx",
      "rowCount": 21368,
      "totals": {
        "installJobs": 4929,
        "installJobsWithSvc": 682,
        "installAccounts": 4500,
        "installAccountsWithSvc": 455,
        "repairWOsAtInstallAccts": 6817,
        "hoursAtInstallAccts": 0,
        "avgHoursPerWO": 0,
        "repairAmtAtInstallAccts": 4608287
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
          "installJobs": 1814,
          "installJobsWithSvc": 265,
          "repairWOs": 2031,
          "hours": 0,
          "repairAmt": 1159263.2100000018
        },
        {
          "branch": "Detroit",
          "installJobs": 688,
          "installJobsWithSvc": 89,
          "repairWOs": 1065,
          "hours": 0,
          "repairAmt": 842129.74
        },
        {
          "branch": "Cleveland",
          "installJobs": 587,
          "installJobsWithSvc": 83,
          "repairWOs": 507,
          "hours": 0,
          "repairAmt": 563400.94
        },
        {
          "branch": "Raleigh",
          "installJobs": 209,
          "installJobsWithSvc": 59,
          "repairWOs": 1646,
          "hours": 0,
          "repairAmt": 842617
        },
        {
          "branch": "Cincinnati",
          "installJobs": 269,
          "installJobsWithSvc": 47,
          "repairWOs": 982,
          "hours": 0,
          "repairAmt": 314914.13
        },
        {
          "branch": "DC Metro",
          "installJobs": 320,
          "installJobsWithSvc": 40,
          "repairWOs": 201,
          "hours": 0,
          "repairAmt": 551645
        },
        {
          "branch": "Nashville",
          "installJobs": 283,
          "installJobsWithSvc": 38,
          "repairWOs": 78,
          "hours": 0,
          "repairAmt": 31824
        },
        {
          "branch": "Dayton",
          "installJobs": 230,
          "installJobsWithSvc": 27,
          "repairWOs": 184,
          "hours": 0,
          "repairAmt": 63560
        },
        {
          "branch": "Richmond",
          "installJobs": 233,
          "installJobsWithSvc": 17,
          "repairWOs": 71,
          "hours": 0,
          "repairAmt": 210627.5
        },
        {
          "branch": "Knoxville",
          "installJobs": 150,
          "installJobsWithSvc": 9,
          "repairWOs": 8,
          "hours": 0,
          "repairAmt": 2600
        },
        {
          "branch": "Indianapolis",
          "installJobs": 5,
          "installJobsWithSvc": 4,
          "repairWOs": 38,
          "hours": 0,
          "repairAmt": 19605
        },
        {
          "branch": "Grand Rapids",
          "installJobs": 40,
          "installJobsWithSvc": 3,
          "repairWOs": 5,
          "hours": 0,
          "repairAmt": 6100
        },
        {
          "branch": "Greenville",
          "installJobs": 101,
          "installJobsWithSvc": 1,
          "repairWOs": 1,
          "hours": 0,
          "repairAmt": 0
        }
      ],
      "tradeRows": [
        {
          "trade": "Roofing",
          "installJobs": 3466,
          "installJobsWithSvc": 473,
          "repairWOs": 5785,
          "hours": 0,
          "repairAmt": 3912481.470000001
        },
        {
          "trade": "Gutters",
          "installJobs": 921,
          "installJobsWithSvc": 119,
          "repairWOs": 522,
          "hours": 0,
          "repairAmt": 306502.74
        },
        {
          "trade": "Siding",
          "installJobs": 370,
          "installJobsWithSvc": 59,
          "repairWOs": 374,
          "hours": 0,
          "repairAmt": 291831.85000000003
        },
        {
          "trade": "Windows",
          "installJobs": 45,
          "installJobsWithSvc": 8,
          "repairWOs": 73,
          "hours": 0,
          "repairAmt": 40438.45999999999
        },
        {
          "trade": "Masonry",
          "installJobs": 20,
          "installJobsWithSvc": 6,
          "repairWOs": 19,
          "hours": 0,
          "repairAmt": 25855
        },
        {
          "trade": "Flat Roof",
          "installJobs": 18,
          "installJobsWithSvc": 5,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Other",
          "installJobs": 8,
          "installJobsWithSvc": 4,
          "repairWOs": 29,
          "hours": 0,
          "repairAmt": 19045
        },
        {
          "trade": "Rack Mounted Solar",
          "installJobs": 19,
          "installJobsWithSvc": 2,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Skylights",
          "installJobs": 10,
          "installJobsWithSvc": 2,
          "repairWOs": 1,
          "hours": 0,
          "repairAmt": 4400
        },
        {
          "trade": "Metal",
          "installJobs": 25,
          "installJobsWithSvc": 2,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Carpentry",
          "installJobs": 6,
          "installJobsWithSvc": 2,
          "repairWOs": 9,
          "hours": 0,
          "repairAmt": 6450
        },
        {
          "trade": "Door",
          "installJobs": 1,
          "installJobsWithSvc": 0,
          "repairWOs": 1,
          "hours": 0,
          "repairAmt": 1282
        },
        {
          "trade": "Painting",
          "installJobs": 11,
          "installJobsWithSvc": 0,
          "repairWOs": 4,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "GAF Solar",
          "installJobs": 5,
          "installJobsWithSvc": 0,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Electrical",
          "installJobs": 3,
          "installJobsWithSvc": 0,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Stucco",
          "installJobs": 1,
          "installJobsWithSvc": 0,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        }
      ],
      "accountRows": [
        {
          "account": "Amy Schmitz",
          "installJobs": 1,
          "installAmt": 20233.66,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Anika Busby",
          "installJobs": 1,
          "installAmt": 27850,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Towne Properties - Northern Kentucky",
          "installJobs": 4,
          "installAmt": 163722,
          "repairWOs": 61,
          "hours": 0,
          "repairAmt": 14450
        },
        {
          "account": "Mark Beers",
          "installJobs": 1,
          "installAmt": 23354.67,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Management Plus",
          "installJobs": 3,
          "installAmt": 436122.88,
          "repairWOs": 45,
          "hours": 0,
          "repairAmt": 10650
        },
        {
          "account": "North American Properties",
          "installJobs": 1,
          "installAmt": 27008,
          "repairWOs": 16,
          "hours": 0,
          "repairAmt": 7449
        },
        {
          "account": "Kathy Patterson",
          "installJobs": 1,
          "installAmt": 22804,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Mary Esbenshade",
          "installJobs": 1,
          "installAmt": 19732.8,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Kevin Siegel",
          "installJobs": 2,
          "installAmt": 29203.44,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Michelle Dillion",
          "installJobs": 1,
          "installAmt": 18500,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Charles Rj Snider",
          "installJobs": 1,
          "installAmt": 39095.29,
          "repairWOs": 1,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Laura Vest",
          "installJobs": 1,
          "installAmt": 31000,
          "repairWOs": 1,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "JVW Properties (Jennifer White)",
          "installJobs": 1,
          "installAmt": 16068,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Bobby Moore",
          "installJobs": 1,
          "installAmt": 34771.07,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Richard Elma",
          "installJobs": 1,
          "installAmt": 32923.76,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Chuck & Jennifer Fedders",
          "installJobs": 1,
          "installAmt": 9580.31,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Kathleen Forrester",
          "installJobs": 1,
          "installAmt": 29883.36,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Jordan Mueller",
          "installJobs": 1,
          "installAmt": 1800,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Tim Mark Runyan",
          "installJobs": 1,
          "installAmt": 23000,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Samuel Shah",
          "installJobs": 1,
          "installAmt": 18400,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Clarence M.  Livesay",
          "installJobs": 1,
          "installAmt": 14400,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Daniel Schraffenberger",
          "installJobs": 1,
          "installAmt": 30797.42,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Stonegate Property Management - Northern Kentucky",
          "installJobs": 4,
          "installAmt": 343011,
          "repairWOs": 69,
          "hours": 0,
          "repairAmt": 25025
        },
        {
          "account": "glen brendel gutter guards",
          "installJobs": 1,
          "installAmt": 2223.23,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "account": "Towne Properties - Cincinnati West District Office",
          "installJobs": 4,
          "installAmt": 161500.4,
          "repairWOs": 272,
          "hours": 0,
          "repairAmt": 76590
        }
      ],
      "installJobRows": [
        {
          "jobNumber": "Job-106348",
          "account": "Towne Properties - Northern Kentucky",
          "branch": "Cincinnati",
          "trade": "Siding",
          "salesperson": "Mark Leedy",
          "installAmt": 40825,
          "acctRepairWOs": 61,
          "acctHours": 0,
          "acctRepairAmt": 14450
        },
        {
          "jobNumber": "Job-106353",
          "account": "Towne Properties - Northern Kentucky",
          "branch": "Cincinnati",
          "trade": "Siding",
          "salesperson": "Mark Leedy",
          "installAmt": 42560,
          "acctRepairWOs": 61,
          "acctHours": 0,
          "acctRepairAmt": 14450
        },
        {
          "jobNumber": "Job-109960",
          "account": "Towne Properties - Northern Kentucky",
          "branch": "Cincinnati",
          "trade": "Gutters",
          "salesperson": "Mark Leedy",
          "installAmt": 10847,
          "acctRepairWOs": 61,
          "acctHours": 0,
          "acctRepairAmt": 14450
        },
        {
          "jobNumber": "Job-117667",
          "account": "Towne Properties - Northern Kentucky",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 69490,
          "acctRepairWOs": 61,
          "acctHours": 0,
          "acctRepairAmt": 14450
        },
        {
          "jobNumber": "Job-106687",
          "account": "Management Plus",
          "branch": "Cincinnati",
          "trade": "Other",
          "salesperson": "Mark Leedy",
          "installAmt": 32200,
          "acctRepairWOs": 45,
          "acctHours": 0,
          "acctRepairAmt": 10650
        },
        {
          "jobNumber": "Job-111089",
          "account": "Management Plus",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 221438.74,
          "acctRepairWOs": 45,
          "acctHours": 0,
          "acctRepairAmt": 10650
        },
        {
          "jobNumber": "Job-111090",
          "account": "Management Plus",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 182484.14,
          "acctRepairWOs": 45,
          "acctHours": 0,
          "acctRepairAmt": 10650
        },
        {
          "jobNumber": "Job-106693",
          "account": "North American Properties",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Samuel Kayser - INACTIVE",
          "installAmt": 27008,
          "acctRepairWOs": 16,
          "acctHours": 0,
          "acctRepairAmt": 7449
        },
        {
          "jobNumber": "Job-106825",
          "account": "Charles Rj Snider",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Kyle Gibson - INACTIVE",
          "installAmt": 39095.29,
          "acctRepairWOs": 1,
          "acctHours": 0,
          "acctRepairAmt": 0
        },
        {
          "jobNumber": "Job-106834",
          "account": "Laura Vest",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Michael Conley-INACTIVE",
          "installAmt": 31000,
          "acctRepairWOs": 1,
          "acctHours": 0,
          "acctRepairAmt": 0
        },
        {
          "jobNumber": "Job-108176",
          "account": "Stonegate Property Management - Northern Kentucky",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 33431,
          "acctRepairWOs": 69,
          "acctHours": 0,
          "acctRepairAmt": 25025
        },
        {
          "jobNumber": "Job-112100",
          "account": "Stonegate Property Management - Northern Kentucky",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 178585,
          "acctRepairWOs": 69,
          "acctHours": 0,
          "acctRepairAmt": 25025
        },
        {
          "jobNumber": "Job-112101",
          "account": "Stonegate Property Management - Northern Kentucky",
          "branch": "Cincinnati",
          "trade": "Gutters",
          "salesperson": "Mark Leedy",
          "installAmt": 40232,
          "acctRepairWOs": 69,
          "acctHours": 0,
          "acctRepairAmt": 25025
        },
        {
          "jobNumber": "Job-112103",
          "account": "Stonegate Property Management - Northern Kentucky",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 90763,
          "acctRepairWOs": 69,
          "acctHours": 0,
          "acctRepairAmt": 25025
        },
        {
          "jobNumber": "Job-108318",
          "account": "Towne Properties - Cincinnati West District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 30745.4,
          "acctRepairWOs": 272,
          "acctHours": 0,
          "acctRepairAmt": 76590
        },
        {
          "jobNumber": "Job-108754",
          "account": "Towne Properties - Cincinnati West District Office",
          "branch": "Cincinnati",
          "trade": "Siding",
          "salesperson": "Mark Leedy",
          "installAmt": 4500,
          "acctRepairWOs": 272,
          "acctHours": 0,
          "acctRepairAmt": 76590
        },
        {
          "jobNumber": "Job-122168",
          "account": "Towne Properties - Cincinnati West District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 60817,
          "acctRepairWOs": 272,
          "acctHours": 0,
          "acctRepairAmt": 76590
        },
        {
          "jobNumber": "Job-122190",
          "account": "Towne Properties - Cincinnati West District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 65438,
          "acctRepairWOs": 272,
          "acctHours": 0,
          "acctRepairAmt": 76590
        },
        {
          "jobNumber": "Job-108416",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 56812.3,
          "acctRepairWOs": 359,
          "acctHours": 0,
          "acctRepairAmt": 128055
        },
        {
          "jobNumber": "Job-108707",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Gutters",
          "salesperson": "Mark Leedy",
          "installAmt": 7074,
          "acctRepairWOs": 359,
          "acctHours": 0,
          "acctRepairAmt": 128055
        },
        {
          "jobNumber": "Job-112768",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 129146.36,
          "acctRepairWOs": 359,
          "acctHours": 0,
          "acctRepairAmt": 128055
        },
        {
          "jobNumber": "Job-115219",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Gutters",
          "salesperson": "Mark Leedy",
          "installAmt": 98128,
          "acctRepairWOs": 359,
          "acctHours": 0,
          "acctRepairAmt": 128055
        },
        {
          "jobNumber": "Job-116644",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 107499.01,
          "acctRepairWOs": 359,
          "acctHours": 0,
          "acctRepairAmt": 128055
        },
        {
          "jobNumber": "Job-120329",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 57674,
          "acctRepairWOs": 359,
          "acctHours": 0,
          "acctRepairAmt": 128055
        },
        {
          "jobNumber": "Job-120331",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Gutters",
          "salesperson": "Mark Leedy",
          "installAmt": 23088,
          "acctRepairWOs": 359,
          "acctHours": 0,
          "acctRepairAmt": 128055
        }
      ]
    },
    "tabs": []
  },
  "SERVICE_CALLS": {
    "_source": "calculator/service-calls.js Service-Calls-v1.1-2026-05-07",
    "title": "Service Calls YTD",
    "subtitle": "Service Appointments · 13,248 calls across 91 techs · ",
    "sourceFile": "Service Appointments YTD-2026-10-21-08-47-57.xlsx",
    "headerMeta": {
      "totalAppts": 13248,
      "uniqTechs": 91,
      "uniqWOs": 10731,
      "uniqAccounts": 3826,
      "uniqJobs": 10199,
      "totalHours": 23324.7,
      "totalBillable": 15435,
      "networkBillRatio": 0.662,
      "totalContract": 9456522.34,
      "avgMinPerAppt": 106,
      "aptsCompleted": 0,
      "aptsOpen": 13248,
      "monthsCovered": 0
    },
    "kpis": [
      {
        "label": "Appointments YTD",
        "value": "13,248",
        "sub": "0 months · 10,731 work orders",
        "tone": "info"
      },
      {
        "label": "Service Techs",
        "value": "91",
        "sub": "distinct primary resources",
        "tone": "info"
      },
      {
        "label": "Total Hours",
        "value": "23,324.7 h",
        "sub": "avg 106 min/appt",
        "tone": "info"
      },
      {
        "label": "Billable Man-Hours",
        "value": "15,435 h",
        "sub": "0.70x actual (laborers × time)",
        "tone": "info"
      },
      {
        "label": "Contract $ on Calls",
        "value": "$9.46M",
        "sub": "3,826 unique accounts",
        "tone": "good"
      },
      {
        "label": "Open Appointments",
        "value": "13,248",
        "sub": "no Actual End in Salesforce",
        "tone": "warn"
      }
    ],
    "monthly": [],
    "techRows": [
      {
        "tech": "(unassigned)",
        "count": 1865,
        "hours": 7.5,
        "billHours": 7.5,
        "billRatio": 1,
        "avgMinPerAppt": 0,
        "contract": 1396724.63,
        "avgContract": 749,
        "jobs": 1822,
        "accounts": 1266,
        "branches": "Cincinnati, Cleveland, Columbus, DC Metro, Dayton, Detroit, Grand Rapids, Greenville, Indianapolis, Knoxville, Nashville, Raleigh, Richmond"
      },
      {
        "tech": "Matt Large",
        "count": 763,
        "hours": 1747.8,
        "billHours": 606.5,
        "billRatio": 0.34700000000000003,
        "avgMinPerAppt": 137,
        "contract": 328092.44,
        "avgContract": 430,
        "jobs": 666,
        "accounts": 278,
        "branches": "Columbus, Dayton"
      },
      {
        "tech": "Darren Vaught",
        "count": 747,
        "hours": 880.4,
        "billHours": 1227.5,
        "billRatio": 1.3940000000000001,
        "avgMinPerAppt": 71,
        "contract": 273723.9,
        "avgContract": 366,
        "jobs": 681,
        "accounts": 294,
        "branches": "Columbus"
      },
      {
        "tech": "Nick Foster",
        "count": 676,
        "hours": 1036.9,
        "billHours": 492.5,
        "billRatio": 0.475,
        "avgMinPerAppt": 92,
        "contract": 317114.3,
        "avgContract": 469,
        "jobs": 644,
        "accounts": 135,
        "branches": "Raleigh"
      },
      {
        "tech": "Chris Coyour",
        "count": 628,
        "hours": 1254.4,
        "billHours": 622.5,
        "billRatio": 0.496,
        "avgMinPerAppt": 120,
        "contract": 322342.75,
        "avgContract": 513,
        "jobs": 567,
        "accounts": 129,
        "branches": "Greenville, Raleigh"
      },
      {
        "tech": "Randy Pfeiffer",
        "count": 573,
        "hours": 1285.1,
        "billHours": 837,
        "billRatio": 0.6509999999999999,
        "avgMinPerAppt": 135,
        "contract": 149853.53,
        "avgContract": 262,
        "jobs": 478,
        "accounts": 209,
        "branches": "Cincinnati, Columbus, Dayton, Indianapolis"
      },
      {
        "tech": "Kevin Green",
        "count": 556,
        "hours": 967.3,
        "billHours": 382.5,
        "billRatio": 0.395,
        "avgMinPerAppt": 104,
        "contract": 197004.4,
        "avgContract": 354,
        "jobs": 514,
        "accounts": 105,
        "branches": "Raleigh"
      },
      {
        "tech": "Richard Hoffman",
        "count": 460,
        "hours": 2151.3,
        "billHours": 2529.5,
        "billRatio": 1.176,
        "avgMinPerAppt": 281,
        "contract": 440446.25,
        "avgContract": 957,
        "jobs": 406,
        "accounts": 185,
        "branches": "Cincinnati, Cleveland, Columbus, Detroit"
      },
      {
        "tech": "David Frindt",
        "count": 436,
        "hours": 754.3,
        "billHours": 399.5,
        "billRatio": 0.53,
        "avgMinPerAppt": 104,
        "contract": 343185.95,
        "avgContract": 787,
        "jobs": 368,
        "accounts": 173,
        "branches": "Cleveland, Columbus"
      },
      {
        "tech": "Will Vickers",
        "count": 428,
        "hours": 858.6,
        "billHours": 1159,
        "billRatio": 1.35,
        "avgMinPerAppt": 120,
        "contract": 246032.37,
        "avgContract": 575,
        "jobs": 370,
        "accounts": 130,
        "branches": "Cleveland, Detroit, Grand Rapids"
      },
      {
        "tech": "Ricardo Nunez",
        "count": 399,
        "hours": 1241.9,
        "billHours": 650,
        "billRatio": 0.523,
        "avgMinPerAppt": 187,
        "contract": 306873.97,
        "avgContract": 769,
        "jobs": 367,
        "accounts": 143,
        "branches": "Detroit, Grand Rapids"
      },
      {
        "tech": "Edwin Irizarry-Vasquez",
        "count": 395,
        "hours": 686.8,
        "billHours": 502.5,
        "billRatio": 0.732,
        "avgMinPerAppt": 104,
        "contract": 296120.7,
        "avgContract": 750,
        "jobs": 351,
        "accounts": 137,
        "branches": "Detroit, Grand Rapids"
      },
      {
        "tech": "Wayne Young",
        "count": 387,
        "hours": 816.3,
        "billHours": 5,
        "billRatio": 0.006,
        "avgMinPerAppt": 127,
        "contract": 157887.68,
        "avgContract": 408,
        "jobs": 345,
        "accounts": 168,
        "branches": "Columbus"
      },
      {
        "tech": "Maxwell Sousa",
        "count": 356,
        "hours": 600.9,
        "billHours": 3,
        "billRatio": 0.005,
        "avgMinPerAppt": 101,
        "contract": 174339.92,
        "avgContract": 490,
        "jobs": 310,
        "accounts": 86,
        "branches": "Cincinnati, Dayton, Raleigh"
      },
      {
        "tech": "Wilver Velasquez",
        "count": 328,
        "hours": 607.7,
        "billHours": 247.5,
        "billRatio": 0.40700000000000003,
        "avgMinPerAppt": 111,
        "contract": 408857.19,
        "avgContract": 1247,
        "jobs": 296,
        "accounts": 167,
        "branches": "Columbus, DC Metro, Detroit"
      },
      {
        "tech": "Rene Alvarado",
        "count": 302,
        "hours": 836.1,
        "billHours": 278.5,
        "billRatio": 0.33299999999999996,
        "avgMinPerAppt": 166,
        "contract": 161306.44,
        "avgContract": 534,
        "jobs": 250,
        "accounts": 148,
        "branches": "Cincinnati, Knoxville, Nashville"
      },
      {
        "tech": "G3 Construction",
        "count": 298,
        "hours": 5.3,
        "billHours": 6,
        "billRatio": 1.143,
        "avgMinPerAppt": 1,
        "contract": 94197.16,
        "avgContract": 316,
        "jobs": 292,
        "accounts": 60,
        "branches": "Cincinnati, Dayton"
      },
      {
        "tech": "Santos Alfaro-Delcid",
        "count": 279,
        "hours": 1720.5,
        "billHours": 1417,
        "billRatio": 0.8240000000000001,
        "avgMinPerAppt": 370,
        "contract": 364792.69,
        "avgContract": 1308,
        "jobs": 227,
        "accounts": 152,
        "branches": "DC Metro, Nashville"
      },
      {
        "tech": "Andrii Shvets",
        "count": 267,
        "hours": 413.8,
        "billHours": 406.5,
        "billRatio": 0.982,
        "avgMinPerAppt": 93,
        "contract": 70138.33,
        "avgContract": 263,
        "jobs": 239,
        "accounts": 98,
        "branches": "Cincinnati, Columbus, Dayton, Detroit, Indianapolis"
      },
      {
        "tech": "Israel Velasquez",
        "count": 257,
        "hours": 806.9,
        "billHours": 336,
        "billRatio": 0.41600000000000004,
        "avgMinPerAppt": 188,
        "contract": 394931.4,
        "avgContract": 1537,
        "jobs": 210,
        "accounts": 140,
        "branches": "DC Metro, Richmond"
      },
      {
        "tech": "Andrew Pruitt",
        "count": 256,
        "hours": 315.9,
        "billHours": 365,
        "billRatio": 1.156,
        "avgMinPerAppt": 74,
        "contract": 63500,
        "avgContract": 248,
        "jobs": 237,
        "accounts": 69,
        "branches": "Cincinnati, Columbus, Dayton, Indianapolis"
      },
      {
        "tech": "Nick Velazquez",
        "count": 247,
        "hours": 375.9,
        "billHours": 532,
        "billRatio": 1.415,
        "avgMinPerAppt": 91,
        "contract": 107738.95,
        "avgContract": 436,
        "jobs": 218,
        "accounts": 111,
        "branches": "Cincinnati, Columbus"
      },
      {
        "tech": "Gavyn Stone",
        "count": 229,
        "hours": 365.2,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 96,
        "contract": 76936.33,
        "avgContract": 336,
        "jobs": 200,
        "accounts": 113,
        "branches": "Columbus"
      },
      {
        "tech": "Matt Velazquez",
        "count": 211,
        "hours": 249.3,
        "billHours": 374.5,
        "billRatio": 1.5019999999999998,
        "avgMinPerAppt": 71,
        "contract": 66097.26,
        "avgContract": 313,
        "jobs": 188,
        "accounts": 105,
        "branches": "Cincinnati, Cleveland, Columbus"
      },
      {
        "tech": "Leonardo Acosta",
        "count": 199,
        "hours": 216.8,
        "billHours": 9,
        "billRatio": 0.042,
        "avgMinPerAppt": 65,
        "contract": 62424.65,
        "avgContract": 314,
        "jobs": 190,
        "accounts": 98,
        "branches": "Columbus"
      },
      {
        "tech": "Tristan Waters",
        "count": 198,
        "hours": 405.4,
        "billHours": 1,
        "billRatio": 0.002,
        "avgMinPerAppt": 123,
        "contract": 173682.7,
        "avgContract": 877,
        "jobs": 179,
        "accounts": 80,
        "branches": "Cincinnati, Detroit, Grand Rapids"
      },
      {
        "tech": "Jose Cartagena",
        "count": 197,
        "hours": 385.8,
        "billHours": 714.5,
        "billRatio": 1.8519999999999999,
        "avgMinPerAppt": 118,
        "contract": 81547.98,
        "avgContract": 414,
        "jobs": 188,
        "accounts": 117,
        "branches": "Cincinnati, Columbus"
      },
      {
        "tech": "GGM Guillermo Campuzano",
        "count": 183,
        "hours": 0,
        "billHours": 1,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 443601.02,
        "avgContract": 2424,
        "jobs": 175,
        "accounts": 126,
        "branches": "Columbus"
      },
      {
        "tech": "Joseph Duncan",
        "count": 172,
        "hours": 124.7,
        "billHours": 3,
        "billRatio": 0.024,
        "avgMinPerAppt": 43,
        "contract": 49124,
        "avgContract": 286,
        "jobs": 165,
        "accounts": 65,
        "branches": "Cincinnati, Columbus, Dayton, Indianapolis"
      },
      {
        "tech": "Ethan Epperson",
        "count": 145,
        "hours": 670.2,
        "billHours": 815.5,
        "billRatio": 1.217,
        "avgMinPerAppt": 277,
        "contract": 105657,
        "avgContract": 729,
        "jobs": 134,
        "accounts": 59,
        "branches": "Columbus, Detroit, Grand Rapids"
      },
      {
        "tech": "David Salisbury",
        "count": 118,
        "hours": 94.8,
        "billHours": 17,
        "billRatio": 0.179,
        "avgMinPerAppt": 48,
        "contract": 59685.97,
        "avgContract": 506,
        "jobs": 108,
        "accounts": 70,
        "branches": "Columbus"
      },
      {
        "tech": "Jose Alberto-Amaya",
        "count": 91,
        "hours": 256.4,
        "billHours": 254,
        "billRatio": 0.991,
        "avgMinPerAppt": 169,
        "contract": 65207.35,
        "avgContract": 717,
        "jobs": 80,
        "accounts": 45,
        "branches": "Knoxville, Nashville"
      },
      {
        "tech": "Alonzie/Lonnie Wright",
        "count": 82,
        "hours": 5.2,
        "billHours": 7.5,
        "billRatio": 1.452,
        "avgMinPerAppt": 4,
        "contract": 48590,
        "avgContract": 593,
        "jobs": 81,
        "accounts": 41,
        "branches": "Cincinnati, Columbus, Dayton, Indianapolis"
      },
      {
        "tech": "Ignacio Roofing and Siding",
        "count": 76,
        "hours": 0,
        "billHours": 2,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 147710.85,
        "avgContract": 1944,
        "jobs": 76,
        "accounts": 54,
        "branches": "Columbus"
      },
      {
        "tech": "Ryan deKalands",
        "count": 64,
        "hours": 207.2,
        "billHours": 9.5,
        "billRatio": 0.046,
        "avgMinPerAppt": 194,
        "contract": 22943,
        "avgContract": 358,
        "jobs": 62,
        "accounts": 34,
        "branches": "Cincinnati, Dayton, Indianapolis"
      },
      {
        "tech": "Above All Exteriors LLC",
        "count": 56,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 231252.25,
        "avgContract": 4130,
        "jobs": 56,
        "accounts": 21,
        "branches": "Detroit"
      },
      {
        "tech": "Daniel Brown",
        "count": 54,
        "hours": 875.7,
        "billHours": 73.5,
        "billRatio": 0.084,
        "avgMinPerAppt": 973,
        "contract": 60990.01,
        "avgContract": 1129,
        "jobs": 52,
        "accounts": 30,
        "branches": "Raleigh"
      },
      {
        "tech": "ASM Construction",
        "count": 41,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 84790.15,
        "avgContract": 2068,
        "jobs": 41,
        "accounts": 16,
        "branches": "Detroit"
      },
      {
        "tech": "Ryan Brady",
        "count": 39,
        "hours": 44.8,
        "billHours": 46,
        "billRatio": 1.0270000000000001,
        "avgMinPerAppt": 69,
        "contract": 26800.35,
        "avgContract": 687,
        "jobs": 36,
        "accounts": 21,
        "branches": "Richmond"
      },
      {
        "tech": "M&K Repairs",
        "count": 17,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 135962,
        "avgContract": 7998,
        "jobs": 17,
        "accounts": 12,
        "branches": "Detroit"
      },
      {
        "tech": "Allied Gutter Company",
        "count": 17,
        "hours": 1.8,
        "billHours": 2,
        "billRatio": 1.143,
        "avgMinPerAppt": 6,
        "contract": 72526.7,
        "avgContract": 4266,
        "jobs": 17,
        "accounts": 14,
        "branches": "Detroit, Grand Rapids"
      },
      {
        "tech": "Rene/Choppo",
        "count": 16,
        "hours": 10,
        "billHours": 10,
        "billRatio": 1,
        "avgMinPerAppt": 38,
        "contract": 65872.1,
        "avgContract": 4117,
        "jobs": 15,
        "accounts": 12,
        "branches": "Cincinnati, Dayton, Indianapolis"
      },
      {
        "tech": "PREMIER ROOFING",
        "count": 11,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 12360.13,
        "avgContract": 1124,
        "jobs": 11,
        "accounts": 11,
        "branches": "Cincinnati, Dayton"
      },
      {
        "tech": "Gutters Unlimited - Brian Bell",
        "count": 11,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 21027.78,
        "avgContract": 1912,
        "jobs": 11,
        "accounts": 9,
        "branches": "Columbus"
      },
      {
        "tech": "Manuel Vega",
        "count": 10,
        "hours": 20.7,
        "billHours": 47,
        "billRatio": 2.271,
        "avgMinPerAppt": 124,
        "contract": 20130,
        "avgContract": 2013,
        "jobs": 10,
        "accounts": 8,
        "branches": "Detroit"
      },
      {
        "tech": "Chris Kerns",
        "count": 9,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 25644.89,
        "avgContract": 2849,
        "jobs": 9,
        "accounts": 9,
        "branches": "Columbus"
      },
      {
        "tech": "Intermediaries In Construction Services LLC",
        "count": 8,
        "hours": 5,
        "billHours": 5,
        "billRatio": 1,
        "avgMinPerAppt": 38,
        "contract": 17263,
        "avgContract": 2158,
        "jobs": 7,
        "accounts": 6,
        "branches": "Columbus"
      },
      {
        "tech": "Orman Construction",
        "count": 7,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 37537.42,
        "avgContract": 5362,
        "jobs": 6,
        "accounts": 6,
        "branches": "Cincinnati, Dayton"
      },
      {
        "tech": "Arias Builders",
        "count": 7,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 50687.32,
        "avgContract": 7241,
        "jobs": 7,
        "accounts": 7,
        "branches": "Columbus"
      },
      {
        "tech": "Alpha & Omega Gutters Installation LLC",
        "count": 5,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 11094,
        "avgContract": 2219,
        "jobs": 5,
        "accounts": 5,
        "branches": "DC Metro, Richmond"
      },
      {
        "tech": "EAL Roofing",
        "count": 4,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 7011,
        "avgContract": 1753,
        "jobs": 4,
        "accounts": 4,
        "branches": "Columbus"
      },
      {
        "tech": "EVER ROOFING",
        "count": 3,
        "hours": 8,
        "billHours": 8,
        "billRatio": 1,
        "avgMinPerAppt": 160,
        "contract": 8368,
        "avgContract": 2789,
        "jobs": 3,
        "accounts": 3,
        "branches": "Cincinnati"
      },
      {
        "tech": "Skillz Contracting Co",
        "count": 3,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 6245.2,
        "avgContract": 2082,
        "jobs": 3,
        "accounts": 3,
        "branches": "Columbus"
      },
      {
        "tech": "JLT Roofing & Construction LLC",
        "count": 3,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 43644.53,
        "avgContract": 14548,
        "jobs": 3,
        "accounts": 3,
        "branches": "Columbus"
      },
      {
        "tech": "Rodela's Masonry LLC",
        "count": 3,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 3382.78,
        "avgContract": 1128,
        "jobs": 3,
        "accounts": 3,
        "branches": "Columbus"
      },
      {
        "tech": "Quality Roof Source LLC",
        "count": 3,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 11639.56,
        "avgContract": 3880,
        "jobs": 2,
        "accounts": 2,
        "branches": "Columbus"
      },
      {
        "tech": "Guerra Construction",
        "count": 3,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 30150.99,
        "avgContract": 10050,
        "jobs": 3,
        "accounts": 3,
        "branches": "Columbus"
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
        "tech": "Shaddai Services",
        "count": 3,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 3560.1,
        "avgContract": 1187,
        "jobs": 3,
        "accounts": 3,
        "branches": "DC Metro"
      },
      {
        "tech": "HDZ Roofing and Construction",
        "count": 3,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 11329.02,
        "avgContract": 3776,
        "jobs": 3,
        "accounts": 3,
        "branches": "Raleigh"
      },
      {
        "tech": "GM Custom Gutters, LLC",
        "count": 2,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 27815.24,
        "avgContract": 13908,
        "jobs": 2,
        "accounts": 2,
        "branches": "Cincinnati"
      },
      {
        "tech": "A1 Exteriors",
        "count": 2,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 24751.72,
        "avgContract": 12376,
        "jobs": 2,
        "accounts": 2,
        "branches": "Columbus"
      },
      {
        "tech": "JCR Roofing, LLC",
        "count": 2,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 35408,
        "avgContract": 17704,
        "jobs": 2,
        "accounts": 2,
        "branches": "Columbus"
      },
      {
        "tech": "Mexus Construction",
        "count": 2,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 38971.53,
        "avgContract": 19486,
        "jobs": 2,
        "accounts": 2,
        "branches": "Dayton"
      },
      {
        "tech": "DS Windows",
        "count": 2,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 17296,
        "avgContract": 8648,
        "jobs": 2,
        "accounts": 2,
        "branches": "DC Metro"
      },
      {
        "tech": "Wili's Alpha Construction",
        "count": 2,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 21055,
        "avgContract": 10528,
        "jobs": 2,
        "accounts": 2,
        "branches": "DC Metro, Richmond"
      },
      {
        "tech": "Cameron Campbell",
        "count": 2,
        "hours": 0.5,
        "billHours": 4,
        "billRatio": 8.889,
        "avgMinPerAppt": 14,
        "contract": 700,
        "avgContract": 350,
        "jobs": 2,
        "accounts": 1,
        "branches": "Detroit"
      },
      {
        "tech": "Brittian Construction LLC",
        "count": 2,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 91698,
        "avgContract": 45849,
        "jobs": 2,
        "accounts": 2,
        "branches": "Detroit"
      },
      {
        "tech": "Casa Home Services, LLC",
        "count": 2,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 7542.27,
        "avgContract": 3771,
        "jobs": 2,
        "accounts": 2,
        "branches": "Nashville"
      },
      {
        "tech": "Coco Construction LLC - Adrian Villegas",
        "count": 2,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 2745.9,
        "avgContract": 1373,
        "jobs": 2,
        "accounts": 2,
        "branches": "Nashville"
      },
      {
        "tech": "Jonnell Morgan",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 1,
        "accounts": 1,
        "branches": "Cincinnati"
      },
      {
        "tech": "Edwin Morales Roofing",
        "count": 1,
        "hours": 5.5,
        "billHours": 8,
        "billRatio": 1.455,
        "avgMinPerAppt": 330,
        "contract": 2800,
        "avgContract": 2800,
        "jobs": 1,
        "accounts": 1,
        "branches": "Cleveland"
      },
      {
        "tech": "Malva Roofing LLC",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 14500,
        "avgContract": 14500,
        "jobs": 1,
        "accounts": 1,
        "branches": "Cleveland"
      },
      {
        "tech": "380 Exteriors",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 12325.45,
        "avgContract": 12325,
        "jobs": 1,
        "accounts": 1,
        "branches": "Cleveland"
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
        "tech": "Kerns Gutters Plus LLC",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 3354.81,
        "avgContract": 3355,
        "jobs": 1,
        "accounts": 1,
        "branches": "Columbus"
      },
      {
        "tech": "Bow Fish",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 9835,
        "avgContract": 9835,
        "jobs": 1,
        "accounts": 1,
        "branches": "Columbus"
      },
      {
        "tech": "JL Shingles, LLC",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 7294.97,
        "avgContract": 7295,
        "jobs": 1,
        "accounts": 1,
        "branches": "Columbus"
      },
      {
        "tech": "Smart Roofing Services - Jose",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 4252.75,
        "avgContract": 4253,
        "jobs": 1,
        "accounts": 1,
        "branches": "Columbus"
      },
      {
        "tech": "Gale Gutters",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 31000,
        "avgContract": 31000,
        "jobs": 1,
        "accounts": 1,
        "branches": "Columbus"
      },
      {
        "tech": "Porfirio Pacheco",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 15594.35,
        "avgContract": 15594,
        "jobs": 1,
        "accounts": 1,
        "branches": "Columbus"
      },
      {
        "tech": "Mike Scott",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 1,
        "accounts": 1,
        "branches": "Columbus"
      },
      {
        "tech": "Matt Sherry",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 0,
        "avgContract": 0,
        "jobs": 1,
        "accounts": 1,
        "branches": "Columbus"
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
        "tech": "Gutter Doctor",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 37811,
        "avgContract": 37811,
        "jobs": 1,
        "accounts": 1,
        "branches": "Dayton"
      },
      {
        "tech": "Gutter Werks",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 1845,
        "avgContract": 1845,
        "jobs": 1,
        "accounts": 1,
        "branches": "DC Metro"
      },
      {
        "tech": "Martinez Exterior Solutions",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 2500,
        "avgContract": 2500,
        "jobs": 1,
        "accounts": 1,
        "branches": "DC Metro"
      },
      {
        "tech": "Roofs by Chavez",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 4500,
        "avgContract": 4500,
        "jobs": 1,
        "accounts": 1,
        "branches": "Detroit"
      },
      {
        "tech": "BM Exterior Construction LLC",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 17660,
        "avgContract": 17660,
        "jobs": 1,
        "accounts": 1,
        "branches": "Detroit"
      },
      {
        "tech": "Almez Renovations",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 2433.01,
        "avgContract": 2433,
        "jobs": 1,
        "accounts": 1,
        "branches": "Raleigh"
      }
    ],
    "branchRows": [
      {
        "branch": "Columbus",
        "count": 4378,
        "techs": 43,
        "accounts": 1525,
        "hours": 5370.2,
        "billHours": 3558.5,
        "contract": 2619398.43,
        "avgMinPerAppt": 74
      },
      {
        "branch": "Raleigh",
        "count": 2304,
        "techs": 8,
        "accounts": 301,
        "hours": 4655.4,
        "billHours": 1571,
        "contract": 1109959.59,
        "avgMinPerAppt": 121
      },
      {
        "branch": "Detroit",
        "count": 2064,
        "techs": 18,
        "accounts": 540,
        "hours": 3869.4,
        "billHours": 3169,
        "contract": 2279266.74,
        "avgMinPerAppt": 112
      },
      {
        "branch": "Cincinnati",
        "count": 1539,
        "techs": 21,
        "accounts": 356,
        "hours": 1904.6,
        "billHours": 824,
        "contract": 555914.53,
        "avgMinPerAppt": 74
      },
      {
        "branch": "Cleveland",
        "count": 976,
        "techs": 8,
        "accounts": 315,
        "hours": 2901.7,
        "billHours": 2921,
        "contract": 842685.14,
        "avgMinPerAppt": 178
      },
      {
        "branch": "DC Metro",
        "count": 806,
        "techs": 11,
        "accounts": 336,
        "hours": 2896.6,
        "billHours": 1944.5,
        "contract": 1220860.86,
        "avgMinPerAppt": 216
      },
      {
        "branch": "Nashville",
        "count": 481,
        "techs": 6,
        "accounts": 230,
        "hours": 1095.8,
        "billHours": 535.5,
        "contract": 252980.16,
        "avgMinPerAppt": 137
      },
      {
        "branch": "Dayton",
        "count": 417,
        "techs": 16,
        "accounts": 173,
        "hours": 457,
        "billHours": 769,
        "contract": 265698.75,
        "avgMinPerAppt": 66
      },
      {
        "branch": "Richmond",
        "count": 177,
        "techs": 5,
        "accounts": 75,
        "hours": 55.9,
        "billHours": 46,
        "contract": 263414.86,
        "avgMinPerAppt": 19
      },
      {
        "branch": "Indianapolis",
        "count": 75,
        "techs": 8,
        "accounts": 27,
        "hours": 89.9,
        "billHours": 69,
        "contract": 23755,
        "avgMinPerAppt": 72
      },
      {
        "branch": "Knoxville",
        "count": 14,
        "techs": 3,
        "accounts": 9,
        "hours": 9.6,
        "billHours": 10.5,
        "contract": 3900,
        "avgMinPerAppt": 41
      },
      {
        "branch": "Grand Rapids",
        "count": 13,
        "techs": 7,
        "accounts": 9,
        "hours": 17.8,
        "billHours": 17,
        "contract": 14131.1,
        "avgMinPerAppt": 82
      },
      {
        "branch": "Greenville",
        "count": 4,
        "techs": 2,
        "accounts": 4,
        "hours": 1,
        "billHours": 0,
        "contract": 4557.18,
        "avgMinPerAppt": 15
      }
    ],
    "accountRows": [
      {
        "account": "Towne Properties - Columbus",
        "count": 533,
        "jobs": 418,
        "hours": 1548.5,
        "billHours": 384.5,
        "contract": 316119.87,
        "branches": "Columbus"
      },
      {
        "account": "Priestley Management Company",
        "count": 412,
        "jobs": 294,
        "hours": 777.5,
        "billHours": 334,
        "contract": 295593,
        "branches": "Raleigh"
      },
      {
        "account": "Capital Property Solutions",
        "count": 382,
        "jobs": 290,
        "hours": 526.3,
        "billHours": 406.5,
        "contract": 191343.36,
        "branches": "Columbus"
      },
      {
        "account": "Charleston Management",
        "count": 369,
        "jobs": 265,
        "hours": 855.3,
        "billHours": 148,
        "contract": 191525,
        "branches": "Raleigh"
      },
      {
        "account": "Towne Properties - East Cincinnati District Office",
        "count": 359,
        "jobs": 317,
        "hours": 441.6,
        "billHours": 224,
        "contract": 128055,
        "branches": "Cincinnati"
      },
      {
        "account": "Towne Properties - Cincinnati West District Office",
        "count": 272,
        "jobs": 242,
        "hours": 226.2,
        "billHours": 122,
        "contract": 76590,
        "branches": "Cincinnati, Dayton"
      },
      {
        "account": "Condo Management of Columbus",
        "count": 268,
        "jobs": 205,
        "hours": 293,
        "billHours": 172,
        "contract": 165871.67,
        "branches": "Cincinnati, Columbus"
      },
      {
        "account": "Towne Properties - Raleigh District",
        "count": 258,
        "jobs": 195,
        "hours": 441.3,
        "billHours": 166.5,
        "contract": 108415,
        "branches": "Raleigh"
      },
      {
        "account": "KS Management",
        "count": 238,
        "jobs": 182,
        "hours": 282.1,
        "billHours": 177.5,
        "contract": 166527.94,
        "branches": "DC Metro, Detroit, Grand Rapids"
      },
      {
        "account": "Professional Properties Management",
        "count": 232,
        "jobs": 178,
        "hours": 501.5,
        "billHours": 151.5,
        "contract": 109939,
        "branches": "Raleigh"
      },
      {
        "account": "Associated Property Management, LLC",
        "count": 220,
        "jobs": 169,
        "hours": 438.2,
        "billHours": 205,
        "contract": 145620.46,
        "branches": "Cincinnati, Cleveland, Columbus, Dayton"
      },
      {
        "account": "Compass Management Professionals",
        "count": 220,
        "jobs": 169,
        "hours": 258.7,
        "billHours": 250.5,
        "contract": 184181,
        "branches": "Detroit"
      },
      {
        "account": "Singh Management",
        "count": 194,
        "jobs": 149,
        "hours": 638.9,
        "billHours": 825,
        "contract": 179430.8,
        "branches": "Detroit"
      },
      {
        "account": "Solomon Organization, LLC",
        "count": 191,
        "jobs": 143,
        "hours": 297.4,
        "billHours": 421,
        "contract": 207991,
        "branches": "Cincinnati, Cleveland, Columbus, Detroit, Grand Rapids"
      },
      {
        "account": "Towne Properties - Dayton",
        "count": 155,
        "jobs": 127,
        "hours": 138.7,
        "billHours": 112.5,
        "contract": 60215,
        "branches": "Cincinnati, Dayton"
      },
      {
        "account": "Associa On Call",
        "count": 146,
        "jobs": 107,
        "hours": 128.2,
        "billHours": 66.5,
        "contract": 74597.94,
        "branches": "Cincinnati, Columbus, Dayton"
      },
      {
        "account": "Kare Condominium Management Company",
        "count": 112,
        "jobs": 95,
        "hours": 165,
        "billHours": 60.5,
        "contract": 38065.84,
        "branches": "Cincinnati, Cleveland"
      },
      {
        "account": "RowCal Construction & Maintenance TN, LLC",
        "count": 102,
        "jobs": 83,
        "hours": 218.9,
        "billHours": 119.5,
        "contract": 35950,
        "branches": "Cincinnati, Nashville, Knoxville"
      },
      {
        "account": "Link Real Estate Group",
        "count": 89,
        "jobs": 64,
        "hours": 76.3,
        "billHours": 44,
        "contract": 40422.56,
        "branches": "Cincinnati, Columbus"
      },
      {
        "account": "In Rhodes Management, Inc",
        "count": 85,
        "jobs": 62,
        "hours": 153.8,
        "billHours": 479,
        "contract": 137522,
        "branches": "Detroit"
      },
      {
        "account": "Sentry Management - Columbus",
        "count": 75,
        "jobs": 62,
        "hours": 64.3,
        "billHours": 52,
        "contract": 33902.18,
        "branches": "Columbus"
      },
      {
        "account": "Stonegate Property Management - Northern Kentucky",
        "count": 69,
        "jobs": 56,
        "hours": 47.5,
        "billHours": 26,
        "contract": 25025,
        "branches": "Cincinnati"
      },
      {
        "account": "Greystar Real Estate Management - NC",
        "count": 67,
        "jobs": 40,
        "hours": 151.9,
        "billHours": 159.5,
        "contract": 14565,
        "branches": "Raleigh"
      },
      {
        "account": "Oakwood Management Company",
        "count": 64,
        "jobs": 56,
        "hours": 60.4,
        "billHours": 64,
        "contract": 42031,
        "branches": "Columbus"
      },
      {
        "account": "Central Buckeye Management and Construction Services, LLC",
        "count": 63,
        "jobs": 51,
        "hours": 61.8,
        "billHours": 48,
        "contract": 17304,
        "branches": "Columbus"
      }
    ],
    "woStats": {
      "stuck": [],
      "inProgress60Plus": [
        {
          "wo": "00231102",
          "account": "Walt Weiskopf",
          "branch": "Richmond",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 54.62,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00231014",
          "account": "MaryFaire Garnett",
          "branch": "Richmond",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 53.62,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00231855",
          "account": "Lifestyle Communities",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 48.88,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00223832",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Return Trip Required",
          "days": 48.87,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00232904",
          "account": "Elite Management Professionals Inc.",
          "branch": "Raleigh",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Work Completed",
          "days": 42.81,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00232284",
          "account": "Clayman Property Services",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 40.01,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00232112",
          "account": "BH Management Services, LLC",
          "branch": "Cleveland",
          "trade": "Gutters",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 35.92,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00230882",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 35.86,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00232184",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 34.99,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00232552",
          "account": "Kare Condominium Management Company",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 34.95,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00229585",
          "account": "Link Real Estate Group",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 34.88,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00230737",
          "account": "Association Management Inc.",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 33.9,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00235068",
          "account": "Professional Properties Management",
          "branch": "Raleigh",
          "trade": "Gutters",
          "status": "In Progress",
          "subStatus": "Work Completed",
          "days": 33.84,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00230016",
          "account": "Condo Management of Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 33.81,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00231352",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Siding",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 33.65,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00235307",
          "account": "The Bray Company",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 32.88,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00235388",
          "account": "Oakwood Management Company",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 31.66,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00224882",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Siding",
          "status": "In Progress",
          "subStatus": "Return Trip Required",
          "days": 29.95,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00231589",
          "account": "Link Real Estate Group",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 28.85,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00233058",
          "account": "Link Real Estate Group",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 28.85,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00231590",
          "account": "Link Real Estate Group",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 28.81,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00236474",
          "account": "Judith Roberts",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 27.85,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00234103",
          "account": "Chad Jordan",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 27.77,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00231597",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 27.7,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00236446",
          "account": "Kevin O’Brien",
          "branch": "Raleigh",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 26.95,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00231656",
          "account": "Link Real Estate Group",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 25.69,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00231662",
          "account": "Link Real Estate Group",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 25.69,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00236002",
          "account": "Condo Management of Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 24.73,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00229284",
          "account": "Kettler Management",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 22.85,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00230438",
          "account": "CIMS Property Management",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 21.92,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00236056",
          "account": "CIMS Property Management",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 21.86,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00232850",
          "account": "Coastal Ridge Real Estate",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Return Trip Required",
          "days": 21.72,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00235405",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 20.99,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00237406",
          "account": "Diane Delaney",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 20.98,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00237240",
          "account": "Associa HRW Inc",
          "branch": "Raleigh",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.92,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00234832",
          "account": "Masha Meyta & Aaron Smith",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 20.63,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00237139",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Gutters",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 19.74,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00237078",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 18.98,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00235505",
          "account": "Kare Condominium Management Company",
          "branch": "Cleveland",
          "trade": "Siding",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 18.96,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00234618",
          "account": "Carole Mack",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 15.97,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00230388",
          "account": "Warren Berry",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 15.96,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00236856",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 15.72,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00235331",
          "account": "Associa Richmond VA",
          "branch": "Richmond",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 15.61,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00232799",
          "account": "Jim Muscroft",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 15.58,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00238242",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Gutters",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 14.81,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00237446",
          "account": "Kare Condominium Management Company",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 14.8,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00235557",
          "account": "Associa - Community Management Corporation DC Market - Opp# 254255",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14.75,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00235774",
          "account": "KS Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Work Completed",
          "days": 14.75,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00238006",
          "account": "Brian Mason",
          "branch": "Nashville",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Work Completed",
          "days": 14.75,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00238236",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 14.7,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00233035",
          "account": "Condo Administrators",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 14,
          "contract": 1200,
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
          "days": 286.83,
          "contract": 350,
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
          "days": 277.9,
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
          "days": 274.77,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00200375",
          "account": "Associa Tennessee",
          "branch": "Nashville",
          "trade": "Roofing",
          "status": "Pending Insurance Claim",
          "subStatus": "",
          "days": 229.85,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00205897",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 153.11,
          "contract": 1600,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210345",
          "account": "Solomon Organization, LLC",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 153.11,
          "contract": 400,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00218982",
          "account": "Mark Taylor",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Ready to Schedule",
          "subStatus": "",
          "days": 146.92,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00219287",
          "account": "Ben Norris (Solar Panel Add-On)",
          "branch": "Columbus",
          "trade": "GAF Solar",
          "status": "Ready to Schedule",
          "subStatus": "",
          "days": 145.72,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00219764",
          "account": "Rochester Property Management Group",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 134.78,
          "contract": 390,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00214587",
          "account": "Compass Management Professionals",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 133.05,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00216461",
          "account": "Kramer Triad Management - Ann Arbor",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 132.77,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00219455",
          "account": "Compass Management Professionals",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 131.75,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00219784",
          "account": "Compass Management Professionals",
          "branch": "Detroit",
          "trade": "Siding",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 123.7,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00208913",
          "account": "KS Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 120.86,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00210495",
          "account": "Singh Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 120.85,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00211442",
          "account": "Singh Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 120.83,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00211265",
          "account": "Singh Management",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 120.82,
          "contract": 500,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00218369",
          "account": "BLS Property Management",
          "branch": "Detroit",
          "trade": "Windows",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 119.73,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00221292",
          "account": "Centerra Pointe",
          "branch": "Detroit",
          "trade": "Gutters",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 118.88,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00221144",
          "account": "Compass Management Professionals",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 118.87,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00221145",
          "account": "Compass Management Professionals",
          "branch": "Detroit",
          "trade": "Siding",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 118.87,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00221228",
          "account": "Mountain View Condos",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 118.87,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00216548",
          "account": "Compass Management Professionals",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 111.89,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00219452",
          "account": "James Grannis",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "On Hold",
          "subStatus": "Pending Material",
          "days": 105.91,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00222793",
          "account": "Compass Management Professionals",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 105.87,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        }
      ],
      "notStartedByStatus": [
        {
          "status": "Scheduled",
          "count": 345,
          "avgDays": 10.1,
          "maxDays": 78
        },
        {
          "status": "Ready to Schedule",
          "count": 237,
          "avgDays": 13.8,
          "maxDays": 146.9
        },
        {
          "status": "Pending Estimate Approval",
          "count": 176,
          "avgDays": 37.3,
          "maxDays": 153.1
        },
        {
          "status": "New",
          "count": 46,
          "avgDays": 2.2,
          "maxDays": 39.8
        },
        {
          "status": "On Hold",
          "count": 25,
          "avgDays": 21.5,
          "maxDays": 105.9
        },
        {
          "status": "Pending Insurance Claim",
          "count": 4,
          "avgDays": 267.3,
          "maxDays": 286.8
        }
      ],
      "notStartedTotal": 833,
      "multiTouch": [
        {
          "wo": "00220969",
          "account": "Associa - Community Management Corporation DC Market - Opp# 254255",
          "branch": "DC Metro",
          "tech": "Israel Velasquez",
          "appointments": 12,
          "hours": 62.5,
          "billHours": 31.5,
          "contract": 12452,
          "hoursPer100": 0.5,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00233652",
          "account": "Abaris Realty, Inc.",
          "branch": "DC Metro",
          "tech": "Israel Velasquez",
          "appointments": 9,
          "hours": 42.4,
          "billHours": 48.5,
          "contract": 20000,
          "hoursPer100": 0.2,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00223483",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "tech": "Richard Hoffman",
          "appointments": 7,
          "hours": 29.6,
          "billHours": 0,
          "contract": 8500,
          "hoursPer100": 0.3,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00222298",
          "account": "Patterson Merkle",
          "branch": "Columbus",
          "tech": "Leonardo Acosta",
          "appointments": 7,
          "hours": 10.1,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 2.9,
          "oldest": null,
          "newest": null,
          "spanDays": 0
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
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00212471",
          "account": "Terese M Coon",
          "branch": "Cleveland",
          "tech": "Richard Hoffman",
          "appointments": 6,
          "hours": 5.1,
          "billHours": 0,
          "contract": 1001.63,
          "hoursPer100": 0.5,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00202821",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "tech": "Richard Hoffman",
          "appointments": 6,
          "hours": 0.8,
          "billHours": 4,
          "contract": 400,
          "hoursPer100": 0.2,
          "oldest": null,
          "newest": null,
          "spanDays": 0
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
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00231609",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "tech": "Matt Large",
          "appointments": 6,
          "hours": 8.8,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 2.5,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00219852",
          "account": "Comsource Management, Inc.",
          "branch": "DC Metro",
          "tech": "Israel Velasquez",
          "appointments": 6,
          "hours": 7.1,
          "billHours": 2,
          "contract": 350,
          "hoursPer100": 2,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00213959",
          "account": "Roger West (AllClaims Pro)",
          "branch": "DC Metro",
          "tech": "Israel Velasquez",
          "appointments": 6,
          "hours": 28.7,
          "billHours": 4,
          "contract": 2985,
          "hoursPer100": 1,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00218367",
          "account": "Tanks Direct- John Massey",
          "branch": "DC Metro",
          "tech": "Israel Velasquez",
          "appointments": 6,
          "hours": 7.7,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 2.2,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00198347",
          "account": "Benny Iaquinta",
          "branch": "Detroit",
          "tech": "Edwin Irizarry-Vasquez",
          "appointments": 6,
          "hours": 10.9,
          "billHours": 26,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00222675",
          "account": "Priestley Management Company",
          "branch": "Raleigh",
          "tech": "Chris Coyour",
          "appointments": 6,
          "hours": 1.8,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00232132",
          "account": "Priestley Management Company",
          "branch": "Raleigh",
          "tech": "Maxwell Sousa",
          "appointments": 6,
          "hours": 6.2,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
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
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00235027",
          "account": "Daniel Giraldo",
          "branch": "Cincinnati",
          "tech": "Andrew Pruitt",
          "appointments": 5,
          "hours": 11.1,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00213400",
          "account": "Solomon Organization, LLC",
          "branch": "Cleveland",
          "tech": "David Frindt",
          "appointments": 5,
          "hours": 6.4,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 1.8,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00201158",
          "account": "Lawrence Community Management Group, Inc",
          "branch": "Cleveland",
          "tech": "Richard Hoffman",
          "appointments": 5,
          "hours": 6.1,
          "billHours": 357.5,
          "contract": 35750,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00202635",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "tech": "David Frindt",
          "appointments": 5,
          "hours": 2.9,
          "billHours": 8,
          "contract": 800,
          "hoursPer100": 0.4,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00219825",
          "account": "Kare Condominium Management Company",
          "branch": "Cleveland",
          "tech": "David Frindt",
          "appointments": 5,
          "hours": 5.5,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00202214",
          "account": "Link Real Estate Group",
          "branch": "Columbus",
          "tech": "Matt Large",
          "appointments": 5,
          "hours": 7,
          "billHours": 14,
          "contract": 1400,
          "hoursPer100": 0.5,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00207898",
          "account": "Adam Ferne",
          "branch": "Columbus",
          "tech": "Matt Velazquez",
          "appointments": 5,
          "hours": 6.8,
          "billHours": 3,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00218587",
          "account": "Bruce Frazier",
          "branch": "Columbus",
          "tech": "Wayne Young",
          "appointments": 5,
          "hours": 2.8,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00200019",
          "account": "Comsource Management, Inc.",
          "branch": "DC Metro",
          "tech": "Wilver Velasquez",
          "appointments": 5,
          "hours": 8.7,
          "billHours": 14.5,
          "contract": 350,
          "hoursPer100": 2.5,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        }
      ],
      "disproportionate": [
        {
          "wo": "00215308",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "tech": "Matt Large",
          "appointments": 1,
          "hours": 504,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 144,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00230675",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "tech": "Wayne Young",
          "appointments": 1,
          "hours": 428.5,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 122.4,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00229029",
          "account": "Redwood Living Inc.",
          "branch": "Detroit",
          "tech": "Ricardo Nunez",
          "appointments": 1,
          "hours": 456.7,
          "billHours": 0,
          "contract": 400,
          "hoursPer100": 114.2,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00232403",
          "account": "Towne Properties - Northern Kentucky",
          "branch": "Cincinnati",
          "tech": "G3 Construction",
          "appointments": 2,
          "hours": 241.2,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 68.9,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00232420",
          "account": "Associa - Community Management Corporation DC Market - Opp# 254255",
          "branch": "DC Metro",
          "tech": "Santos Alfaro-Delcid",
          "appointments": 4,
          "hours": 291.5,
          "billHours": 5.5,
          "contract": 550,
          "hoursPer100": 53,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00218599",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "tech": "Matt Large",
          "appointments": 1,
          "hours": 160.6,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 45.9,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
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
          "oldest": null,
          "newest": null,
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
          "oldest": null,
          "newest": null,
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
          "oldest": null,
          "newest": null,
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
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00227468",
          "account": "Charleston Management",
          "branch": "Raleigh",
          "tech": "Maxwell Sousa",
          "appointments": 3,
          "hours": 382.7,
          "billHours": 0,
          "contract": 1390,
          "hoursPer100": 27.5,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00231618",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "tech": "Matt Large",
          "appointments": 1,
          "hours": 90.6,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 25.9,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00231751",
          "account": "BH Management Services, LLC",
          "branch": "Cleveland",
          "tech": "David Frindt",
          "appointments": 1,
          "hours": 90.3,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 25.8,
          "oldest": null,
          "newest": null,
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
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00230450",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "tech": "Darren Vaught",
          "appointments": 2,
          "hours": 66,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 18.8,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00229062",
          "account": "Singh Management",
          "branch": "Detroit",
          "tech": "Tristan Waters",
          "appointments": 2,
          "hours": 164.7,
          "billHours": 0,
          "contract": 875,
          "hoursPer100": 18.8,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00238374",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "tech": "Randy Pfeiffer",
          "appointments": 1,
          "hours": 65.1,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 18.6,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00235053",
          "account": "Associa HRW Inc",
          "branch": "Raleigh",
          "tech": "Daniel Brown",
          "appointments": 1,
          "hours": 60.1,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 17.2,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00238838",
          "account": "Towne Properties - Raleigh District",
          "branch": "Raleigh",
          "tech": "Maxwell Sousa",
          "appointments": 1,
          "hours": 60.2,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 17.2,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00212709",
          "account": "Stewart Latwin",
          "branch": "DC Metro",
          "tech": "Israel Velasquez",
          "appointments": 2,
          "hours": 486.2,
          "billHours": 18.5,
          "contract": 3071,
          "hoursPer100": 15.8,
          "oldest": null,
          "newest": null,
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
          "oldest": null,
          "newest": null,
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
          "oldest": null,
          "newest": null,
          "spanDays": 0
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
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00217364",
          "account": "Kare Condominium Management Company",
          "branch": "Cleveland",
          "tech": "David Frindt",
          "appointments": 1,
          "hours": 45.5,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 13,
          "oldest": null,
          "newest": null,
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
          "oldest": null,
          "newest": null,
          "spanDays": 0
        }
      ]
    },
    "longAppts": [
      {
        "apptNum": "",
        "wo": "00211054",
        "account": "Adam Sherman",
        "tech": "Richard Hoffman",
        "branch": "Cleveland",
        "hours": 960,
        "contract": 0,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00215308",
        "account": "Towne Properties - Columbus",
        "tech": "Matt Large",
        "branch": "Columbus",
        "hours": 504,
        "contract": 350,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00212709",
        "account": "Stewart Latwin",
        "tech": "Santos Alfaro-Delcid",
        "branch": "DC Metro",
        "hours": 480,
        "contract": 3071,
        "laborers": 2,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00229029",
        "account": "Redwood Living Inc.",
        "tech": "Ricardo Nunez",
        "branch": "Detroit",
        "hours": 456.7,
        "contract": 400,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00230675",
        "account": "Towne Properties - Columbus",
        "tech": "Wayne Young",
        "branch": "Columbus",
        "hours": 428.5,
        "contract": 350,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00227468",
        "account": "Charleston Management",
        "tech": "Daniel Brown",
        "branch": "Raleigh",
        "hours": 379.9,
        "contract": 1390,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00201063",
        "account": "Wanda Garnett",
        "tech": "Richard Hoffman",
        "branch": "Cleveland",
        "hours": 361.8,
        "contract": 0,
        "laborers": 2,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00232420",
        "account": "Associa - Community Management Corporation DC Market - Opp# 254255",
        "tech": "Santos Alfaro-Delcid",
        "branch": "DC Metro",
        "hours": 288,
        "contract": 550,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00232403",
        "account": "Towne Properties - Northern Kentucky",
        "tech": "Randy Pfeiffer",
        "branch": "Cincinnati",
        "hours": 241.2,
        "contract": 350,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00223189",
        "account": "David Hughes",
        "tech": "Gavyn Stone",
        "branch": "Columbus",
        "hours": 213.4,
        "contract": 0,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00228115",
        "account": "Julie Cushel",
        "tech": "Tristan Waters",
        "branch": "Detroit",
        "hours": 188.9,
        "contract": 0,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00227462",
        "account": "Billy Pearce",
        "tech": "Daniel Brown",
        "branch": "Raleigh",
        "hours": 171.6,
        "contract": 0,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00229062",
        "account": "Singh Management",
        "tech": "Ethan Epperson",
        "branch": "Detroit",
        "hours": 164.7,
        "contract": 875,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00218599",
        "account": "Towne Properties - Columbus",
        "tech": "Matt Large",
        "branch": "Columbus",
        "hours": 160.6,
        "contract": 350,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00206365",
        "account": "Singh Management",
        "tech": "Ethan Epperson",
        "branch": "Detroit",
        "hours": 142.9,
        "contract": 400,
        "laborers": 2,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00203680",
        "account": "Priestley Management Company",
        "tech": "Chris Coyour",
        "branch": "Raleigh",
        "hours": 142.6,
        "contract": 350,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00206363",
        "account": "Singh Management",
        "tech": "Ethan Epperson",
        "branch": "Detroit",
        "hours": 138.8,
        "contract": 400,
        "laborers": 2,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00200002",
        "account": "Associated Property Management, LLC",
        "tech": "Richard Hoffman",
        "branch": "Cleveland",
        "hours": 138.3,
        "contract": 350,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00234750",
        "account": "Professional Properties Management",
        "tech": "Kevin Green",
        "branch": "Raleigh",
        "hours": 93.6,
        "contract": 0,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00231618",
        "account": "Capital Property Solutions",
        "tech": "Matt Large",
        "branch": "Columbus",
        "hours": 90.6,
        "contract": 350,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00231751",
        "account": "BH Management Services, LLC",
        "tech": "David Frindt",
        "branch": "Cleveland",
        "hours": 90.3,
        "contract": 350,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00202037",
        "account": "Nan Wylie",
        "tech": "Nick Velazquez",
        "branch": "Columbus",
        "hours": 89.7,
        "contract": 0,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00200693",
        "account": "R O Nason",
        "tech": "Rene Alvarado",
        "branch": "Nashville",
        "hours": 70.2,
        "contract": 5000,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00200315",
        "account": "Kuester Management",
        "tech": "Chris Coyour",
        "branch": "Raleigh",
        "hours": 69.4,
        "contract": 300,
        "laborers": 1,
        "start": null
      },
      {
        "apptNum": "",
        "wo": "00224378",
        "account": "In Rhodes Management, Inc",
        "tech": "Tristan Waters",
        "branch": "Detroit",
        "hours": 68.9,
        "contract": 980,
        "laborers": 1,
        "start": null
      }
    ],
    "buckets": {
      "<30m": 5819,
      "30-60m": 1716,
      "1-2h": 3152,
      "2-4h": 1861,
      "4-8h": 478,
      ">8h": 222
    },
    "findings": {
      "concerns": [
        "(unassigned) bills 1.00x actual hours (network avg 0.62x). Review crew sizing or labor allocation.",
        "Darren Vaught bills 1.39x actual hours (network avg 0.62x). Review crew sizing or labor allocation.",
        "Richard Hoffman bills 1.18x actual hours (network avg 0.62x). Review crew sizing or labor allocation.",
        "Will Vickers bills 1.35x actual hours (network avg 0.62x). Review crew sizing or labor allocation.",
        "G3 Construction bills 1.14x actual hours (network avg 0.62x). Review crew sizing or labor allocation.",
        "Andrii Shvets bills 0.98x actual hours (network avg 0.62x). Review crew sizing or labor allocation.",
        "Andrew Pruitt bills 1.16x actual hours (network avg 0.62x). Review crew sizing or labor allocation.",
        "Nick Velazquez bills 1.42x actual hours (network avg 0.62x). Review crew sizing or labor allocation.",
        "Matt Velazquez bills 1.50x actual hours (network avg 0.62x). Review crew sizing or labor allocation.",
        "Jose Cartagena bills 1.85x actual hours (network avg 0.62x). Review crew sizing or labor allocation.",
        "Ethan Epperson bills 1.22x actual hours (network avg 0.62x). Review crew sizing or labor allocation.",
        "Jose Alberto-Amaya bills 0.99x actual hours (network avg 0.62x). Review crew sizing or labor allocation.",
        "Alonzie/Lonnie Wright bills 1.45x actual hours (network avg 0.62x). Review crew sizing or labor allocation.",
        "Ryan Brady bills 1.03x actual hours (network avg 0.62x). Review crew sizing or labor allocation.",
        "Richard Hoffman averages 281min per appointment vs network 129min. Heavy skew on this tech's book.",
        "Santos Alfaro-Delcid averages 370min per appointment vs network 129min. Heavy skew on this tech's book.",
        "Ethan Epperson averages 277min per appointment vs network 129min. Heavy skew on this tech's book.",
        "Ryan deKalands averages 194min per appointment vs network 129min. Heavy skew on this tech's book.",
        "Daniel Brown averages 973min per appointment vs network 129min. Heavy skew on this tech's book."
      ],
      "watch": [
        "51 work orders are In Progress 14+ days. Oldest: WO 00231102 (55 days, Walt Weiskopf). Should be closed or escalated.",
        "833 Repair WOs are not yet started; the oldest has been in \"Pending Insurance Claim\" for 287 days (WO 00198032, Associa Tennessee). Slow-scheduling backlog.",
        "25 work orders are eating disproportionate hours vs their contract value. Top offender: WO 00215308 (504h on $350 contract).",
        "13248 appointments have no Actual End — either still in progress or never closed out. Likely a data hygiene problem in Salesforce."
      ],
      "positives": [
        "Darren Vaught runs 747 appointments at just 71min avg — efficient dispatch density.",
        "Nick Foster runs 676 appointments at just 92min avg — efficient dispatch density.",
        "Kevin Green runs 556 appointments at just 104min avg — efficient dispatch density.",
        "David Frindt runs 436 appointments at just 104min avg — efficient dispatch density.",
        "Edwin Irizarry-Vasquez runs 395 appointments at just 104min avg — efficient dispatch density.",
        "Maxwell Sousa runs 356 appointments at just 101min avg — efficient dispatch density.",
        "G3 Construction runs 298 appointments at just 1min avg — efficient dispatch density.",
        "Andrii Shvets runs 267 appointments at just 93min avg — efficient dispatch density.",
        "Andrew Pruitt runs 256 appointments at just 74min avg — efficient dispatch density.",
        "Nick Velazquez runs 247 appointments at just 91min avg — efficient dispatch density.",
        "Gavyn Stone runs 229 appointments at just 96min avg — efficient dispatch density.",
        "Matt Velazquez runs 211 appointments at just 71min avg — efficient dispatch density.",
        "Most service tickets close in a single visit (1.23 appointments per WO on average). Low return-trip rate."
      ]
    },
    "benchmarks": {
      "avgBillRatio": 0.62,
      "avgMinPerAppt": 129
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
