/* AUTO-GENERATED — do not edit. Generated 2026-11-02T17:40:08.998Z (service) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-11-02T17:40:08.998Z",
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
        "elapsedMs": 701,
        "builtAt": "2026-11-02T17:40:08.998Z"
      },
      {
        "id": "service-calls",
        "version": "Service-Calls-v1.1-2026-05-07",
        "elapsedMs": 1034,
        "builtAt": "2026-11-02T17:40:08.998Z"
      }
    ]
  },
  "REVENUE_FORECAST": {
    "_source": "calculator/revenue-forecast-service.js Service-v1.0-2026-05-06",
    "title": "Service Revenue Forecast",
    "subtitle": "Service-v1 · Budget-anchored forecast · Data through 2026-10-30",
    "runDate": "2026-11-02",
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
        "value": "$5.96M",
        "sub": "11 months elapsed · 6125 invoices"
      },
      {
        "label": "YTD vs Plan",
        "value": "$-560,760",
        "sub": "Plan YTD: $6.52M",
        "trend": "negative"
      },
      {
        "label": "Annualized Pace",
        "value": "$6.5M",
        "sub": "YTD × 12/11",
        "trend": "negative"
      },
      {
        "label": "Plan-Rest Forecast",
        "value": "$6.38M",
        "sub": "YTD actual + remaining-month plan"
      },
      {
        "label": "Annual Budget",
        "value": "$6.8M",
        "sub": "2026 Service plan"
      },
      {
        "label": "Forecast vs Budget",
        "value": "$-301,677",
        "sub": "4.4% uplift needed",
        "trend": "negative"
      },
      {
        "label": "Last Month Revenue",
        "value": "$0",
        "sub": "November 2026"
      },
      {
        "label": "Last Month vs Plan",
        "value": "$-500,372",
        "sub": "Plan: $500K"
      }
    ],
    "execSummary": {
      "budget": 6800179.48,
      "modelAnnualInvoiced": 6498502.3745454755,
      "gap": -301677.105454525,
      "narrative": "11 months of FY2026 Service activity reported, $5.96M invoiced YTD. Run-rate annualizes to $6.5M against the $6.8M plan, a $302K shortfall (4.4% uplift needed)."
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
        "invoiced": 611719.6099999998,
        "budget": 765976.1409289142,
        "gap": -154256.53092891444
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
      "gap": 301677.105454525,
      "upliftPct": 4.436310928877497,
      "aprilGap": 132460.0946510285,
      "q1OriginalBudget": 1440959.7346066653,
      "q1Actual": 1464105.0800000005,
      "q1Shortfall": 23145.345393335214,
      "recoveryRatio": 0
    },
    "profitabilitySummary": {
      "combinedGP": 903624.52,
      "combinedGP_pct": 50.13464776791159,
      "combinedRevenue": 1802395.2700000019,
      "y2025_GP_pct": 0,
      "y2025_revenue": 0,
      "y2025_jobs": 0,
      "y2026_GP_pct": 50.13464776791159,
      "y2026_revenue": 1802395.2700000019,
      "y2026_jobs": 1071,
      "materialCost": 296398.5800000001,
      "laborCost": 586378.74,
      "otherCost": 14864.919999999998,
      "commissions": 54764.25000000003,
      "materialPctContract": 16.44470471785025,
      "laborPctContract": 32.53330441773737,
      "otherPctContract": 0.824731414214152,
      "commissionPctContract": 3.038415097483027,
      "sourceFile": "GregProfitabilityServiceResults-2026-11-02.csv",
      "jobsParsed": 1071
    },
    "profitabilityByJobType": [
      {
        "key": "Repair",
        "jobs": 508,
        "revenue": 1287355.5100000007,
        "expenses": 662762.1600000001,
        "gross_profit": 624593.35,
        "material": 233887.86999999985,
        "labor": 415467.26,
        "other": 13418.269999999999,
        "commission": 54072.09000000002,
        "contract": 1300476.9300000004,
        "gp_pct": 48.51754974816549
      },
      {
        "key": "T&M",
        "jobs": 550,
        "revenue": 499414.76000000007,
        "expenses": 224048.13999999996,
        "gross_profit": 275366.6199999998,
        "material": 58388.71999999997,
        "labor": 163111.72,
        "other": 1446.65,
        "commission": 0,
        "contract": 495023.76000000007,
        "gp_pct": 55.137861764438
      },
      {
        "key": "Warranty",
        "jobs": 13,
        "revenue": 15625,
        "expenses": 11960.45,
        "gross_profit": 3664.5499999999997,
        "material": 4121.99,
        "labor": 7799.76,
        "other": 0,
        "commission": 692.16,
        "contract": 15275,
        "gp_pct": 23.45312
      }
    ],
    "profitabilityByMarket": [
      {
        "key": "Columbus",
        "jobs": 398,
        "revenue": 742140.1900000003,
        "expenses": 376566.5400000004,
        "gross_profit": 365573.65,
        "material": 142283.96999999994,
        "labor": 230778.06000000006,
        "other": 1269.61,
        "commission": 30662.03,
        "contract": 744240.9000000003,
        "gp_pct": 49.25937914775911
      },
      {
        "key": "Detroit Metro",
        "jobs": 123,
        "revenue": 379116.75,
        "expenses": 188652.19000000006,
        "gross_profit": 190464.55999999994,
        "material": 38514.98999999999,
        "labor": 140222.95,
        "other": 10114.56,
        "commission": 9401.56,
        "contract": 387446.75,
        "gp_pct": 50.23902531344234
      },
      {
        "key": "Cincinnati",
        "jobs": 227,
        "revenue": 217409.1,
        "expenses": 132743.62999999995,
        "gross_profit": 84665.47000000003,
        "material": 35243.76,
        "labor": 97915.53,
        "other": 0,
        "commission": 1887.43,
        "contract": 215511.1,
        "gp_pct": 38.94292833188677
      },
      {
        "key": "Raleigh",
        "jobs": 151,
        "revenue": 154121.91,
        "expenses": 67867.23,
        "gross_profit": 86254.68000000004,
        "material": 15103.220000000003,
        "labor": 49654.8,
        "other": 3054.3599999999997,
        "commission": 1331.8500000000001,
        "contract": 153536.85,
        "gp_pct": 55.96522908391158
      },
      {
        "key": "DC Metro",
        "jobs": 45,
        "revenue": 100512.06,
        "expenses": 33618.399999999994,
        "gross_profit": 66893.66,
        "material": 25661.399999999994,
        "labor": 7957,
        "other": 0,
        "commission": 4678.26,
        "contract": 100725.70999999999,
        "gp_pct": 66.5528693770678
      },
      {
        "key": "Dayton",
        "jobs": 31,
        "revenue": 56582.33,
        "expenses": 35584.65000000001,
        "gross_profit": 20997.679999999997,
        "material": 8157.500000000002,
        "labor": 27717.98,
        "other": 0,
        "commission": 371,
        "contract": 56582.33,
        "gp_pct": 37.109959946859725
      },
      {
        "key": "Nashville",
        "jobs": 42,
        "revenue": 51422.409999999996,
        "expenses": 13885.369999999999,
        "gross_profit": 37537.03999999999,
        "material": 6934.51,
        "labor": 6961,
        "other": 100,
        "commission": 3865.17,
        "contract": 51468.62,
        "gp_pct": 72.99743438706976
      },
      {
        "key": "Cleveland",
        "jobs": 24,
        "revenue": 44607.479999999996,
        "expenses": 17593.110000000004,
        "gross_profit": 27014.370000000006,
        "material": 13799.5,
        "labor": 3745.52,
        "other": 226.39000000000001,
        "commission": 1588.98,
        "contract": 44739.34,
        "gp_pct": 60.56017959319829
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
    "profitabilityByJobType2025": [],
    "profitabilityByMarket2025": [],
    "profitabilityByTrade": [
      {
        "key": "Roofing",
        "jobs": 835,
        "revenue": 1429170.000000001,
        "expenses": 694355.7200000001,
        "gross_profit": 734814.28,
        "material": 247660.36999999985,
        "labor": 441418.4,
        "other": 4444.16,
        "commission": 49358.58000000001,
        "contract": 1429883.510000001,
        "gp_pct": 51.41545652371653
      },
      {
        "key": "Siding",
        "jobs": 96,
        "revenue": 151948.16,
        "expenses": 82334.26999999995,
        "gross_profit": 69613.89,
        "material": 17066.4,
        "labor": 56148.560000000005,
        "other": 8947.39,
        "commission": 1219.1399999999999,
        "contract": 161883.26000000004,
        "gp_pct": 45.81423690816657
      },
      {
        "key": "Gutters",
        "jobs": 109,
        "revenue": 138737.38,
        "expenses": 76907.37000000002,
        "gross_profit": 61830.01000000001,
        "material": 15883.159999999994,
        "labor": 59549.35,
        "other": 1322.26,
        "commission": 1124,
        "contract": 135643.38,
        "gp_pct": 44.56622288816468
      },
      {
        "key": "(unassigned)",
        "jobs": 18,
        "revenue": 44581.95,
        "expenses": 30064.25,
        "gross_profit": 14517.7,
        "material": 13200.31,
        "labor": 16741.63,
        "other": 151.11,
        "commission": 1199.98,
        "contract": 45407.759999999995,
        "gp_pct": 32.564075819922635
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
        "commission": 1862.55,
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
        "Annualized Service pace is $302K short of the $6.8M plan. 4.4% uplift needed on remaining months."
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
            "$612K",
            "$766K",
            "$-154,257",
            593
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
            "$1.95M",
            1953
          ],
          [
            "Detroit",
            "$1.43M",
            1042
          ],
          [
            "Raleigh",
            "$803K",
            1058
          ],
          [
            "Cincinnati",
            "$548K",
            854
          ],
          [
            "DC Metro",
            "$471K",
            293
          ],
          [
            "Cleveland",
            "$279K",
            419
          ],
          [
            "Nashville",
            "$190K",
            199
          ],
          [
            "Dayton",
            "$123K",
            153
          ],
          [
            "Richmond",
            "$112K",
            100
          ],
          [
            "Indianapolis",
            "$31K",
            40
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
              611719.6099999998,
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
                  611719.6099999998,
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
      611719.6099999998,
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
      611719.6099999998,
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
      "source": "ServiceInvoicedYTDResults-2026-11-02.csv",
      "format": "per-invoice",
      "totalInvoiced": 5956960.510000019,
      "invoiceCount": 6125,
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
        611719.6099999998,
        0,
        0
      ],
      "byBranch": {
        "Cincinnati": {
          "invoiced": 548369.6000000001,
          "count": 854
        },
        "Raleigh": {
          "invoiced": 802833.4300000025,
          "count": 1058
        },
        "DC Metro": {
          "invoiced": 470837.82999999996,
          "count": 293
        },
        "Dayton": {
          "invoiced": 123379.72,
          "count": 153
        },
        "Detroit": {
          "invoiced": 1434171.49,
          "count": 1042
        },
        "Columbus": {
          "invoiced": 1953566.5100000028,
          "count": 1953
        },
        "Richmond": {
          "invoiced": 112013.55,
          "count": 100
        },
        "Nashville": {
          "invoiced": 189631.27,
          "count": 199
        },
        "Indianapolis": {
          "invoiced": 31495,
          "count": 40
        },
        "Cleveland": {
          "invoiced": 278853.23,
          "count": 419
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
      "latestInvoiceDate": "2026-10-30"
    },
    "installServiceOverlap": {
      "sourceFile": "All Jobs with WOs and SAs-2026-11-02-12-35-59.xlsx",
      "rowCount": 22125,
      "totals": {
        "installJobs": 5149,
        "installJobsWithSvc": 716,
        "installAccounts": 4694,
        "installAccountsWithSvc": 474,
        "repairWOsAtInstallAccts": 7035,
        "hoursAtInstallAccts": 0,
        "avgHoursPerWO": 0,
        "repairAmtAtInstallAccts": 4937675
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
          "installJobs": 1897,
          "installJobsWithSvc": 279,
          "repairWOs": 2073,
          "hours": 0,
          "repairAmt": 1200780.7100000014
        },
        {
          "branch": "Detroit",
          "installJobs": 723,
          "installJobsWithSvc": 92,
          "repairWOs": 1105,
          "hours": 0,
          "repairAmt": 965897.6199999999
        },
        {
          "branch": "Cleveland",
          "installJobs": 607,
          "installJobsWithSvc": 83,
          "repairWOs": 516,
          "hours": 0,
          "repairAmt": 587304.19
        },
        {
          "branch": "Raleigh",
          "installJobs": 227,
          "installJobsWithSvc": 64,
          "repairWOs": 1696,
          "hours": 0,
          "repairAmt": 885362
        },
        {
          "branch": "Cincinnati",
          "installJobs": 284,
          "installJobsWithSvc": 51,
          "repairWOs": 1008,
          "hours": 0,
          "repairAmt": 334689.13
        },
        {
          "branch": "DC Metro",
          "installJobs": 335,
          "installJobsWithSvc": 42,
          "repairWOs": 230,
          "hours": 0,
          "repairAmt": 623675
        },
        {
          "branch": "Nashville",
          "installJobs": 290,
          "installJobsWithSvc": 38,
          "repairWOs": 79,
          "hours": 0,
          "repairAmt": 32174
        },
        {
          "branch": "Dayton",
          "installJobs": 233,
          "installJobsWithSvc": 29,
          "repairWOs": 189,
          "hours": 0,
          "repairAmt": 65085
        },
        {
          "branch": "Richmond",
          "installJobs": 241,
          "installJobsWithSvc": 20,
          "repairWOs": 85,
          "hours": 0,
          "repairAmt": 213627.5
        },
        {
          "branch": "Knoxville",
          "installJobs": 160,
          "installJobsWithSvc": 9,
          "repairWOs": 8,
          "hours": 0,
          "repairAmt": 2600
        },
        {
          "branch": "Indianapolis",
          "installJobs": 6,
          "installJobsWithSvc": 5,
          "repairWOs": 40,
          "hours": 0,
          "repairAmt": 20380
        },
        {
          "branch": "Grand Rapids",
          "installJobs": 42,
          "installJobsWithSvc": 3,
          "repairWOs": 5,
          "hours": 0,
          "repairAmt": 6100
        },
        {
          "branch": "Greenville",
          "installJobs": 104,
          "installJobsWithSvc": 1,
          "repairWOs": 1,
          "hours": 0,
          "repairAmt": 0
        }
      ],
      "tradeRows": [
        {
          "trade": "Roofing",
          "installJobs": 3600,
          "installJobsWithSvc": 496,
          "repairWOs": 5966,
          "hours": 0,
          "repairAmt": 4147152.160000001
        },
        {
          "trade": "Gutters",
          "installJobs": 968,
          "installJobsWithSvc": 129,
          "repairWOs": 533,
          "hours": 0,
          "repairAmt": 378436.74
        },
        {
          "trade": "Siding",
          "installJobs": 387,
          "installJobsWithSvc": 63,
          "repairWOs": 392,
          "hours": 0,
          "repairAmt": 312515.79000000004
        },
        {
          "trade": "Other",
          "installJobs": 13,
          "installJobsWithSvc": 6,
          "repairWOs": 34,
          "hours": 0,
          "repairAmt": 19395
        },
        {
          "trade": "Windows",
          "installJobs": 37,
          "installJobsWithSvc": 6,
          "repairWOs": 76,
          "hours": 0,
          "repairAmt": 42188.45999999999
        },
        {
          "trade": "Flat Roof",
          "installJobs": 23,
          "installJobsWithSvc": 5,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Masonry",
          "installJobs": 31,
          "installJobsWithSvc": 4,
          "repairWOs": 19,
          "hours": 0,
          "repairAmt": 25855
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
          "trade": "Skylights",
          "installJobs": 14,
          "installJobsWithSvc": 2,
          "repairWOs": 1,
          "hours": 0,
          "repairAmt": 4400
        },
        {
          "trade": "Rack Mounted Solar",
          "installJobs": 25,
          "installJobsWithSvc": 1,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Metal",
          "installJobs": 26,
          "installJobsWithSvc": 1,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Painting",
          "installJobs": 7,
          "installJobsWithSvc": 1,
          "repairWOs": 4,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "GAF Solar",
          "installJobs": 6,
          "installJobsWithSvc": 0,
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
          "trade": "Electrical",
          "installJobs": 3,
          "installJobsWithSvc": 0,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Stucco",
          "installJobs": 2,
          "installJobsWithSvc": 0,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Insulation",
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
          "repairWOs": 69,
          "hours": 0,
          "repairAmt": 22425
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
          "repairWOs": 47,
          "hours": 0,
          "repairAmt": 13750
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
          "repairWOs": 72,
          "hours": 0,
          "repairAmt": 25375
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
          "installJobs": 5,
          "installAmt": 275655.4,
          "repairWOs": 275,
          "hours": 0,
          "repairAmt": 81440
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
          "acctRepairWOs": 69,
          "acctHours": 0,
          "acctRepairAmt": 22425
        },
        {
          "jobNumber": "Job-106353",
          "account": "Towne Properties - Northern Kentucky",
          "branch": "Cincinnati",
          "trade": "Siding",
          "salesperson": "Mark Leedy",
          "installAmt": 42560,
          "acctRepairWOs": 69,
          "acctHours": 0,
          "acctRepairAmt": 22425
        },
        {
          "jobNumber": "Job-109960",
          "account": "Towne Properties - Northern Kentucky",
          "branch": "Cincinnati",
          "trade": "Gutters",
          "salesperson": "Mark Leedy",
          "installAmt": 10847,
          "acctRepairWOs": 69,
          "acctHours": 0,
          "acctRepairAmt": 22425
        },
        {
          "jobNumber": "Job-117667",
          "account": "Towne Properties - Northern Kentucky",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 69490,
          "acctRepairWOs": 69,
          "acctHours": 0,
          "acctRepairAmt": 22425
        },
        {
          "jobNumber": "Job-106687",
          "account": "Management Plus",
          "branch": "Cincinnati",
          "trade": "Other",
          "salesperson": "Mark Leedy",
          "installAmt": 32200,
          "acctRepairWOs": 47,
          "acctHours": 0,
          "acctRepairAmt": 13750
        },
        {
          "jobNumber": "Job-111089",
          "account": "Management Plus",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 221438.74,
          "acctRepairWOs": 47,
          "acctHours": 0,
          "acctRepairAmt": 13750
        },
        {
          "jobNumber": "Job-111090",
          "account": "Management Plus",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 182484.14,
          "acctRepairWOs": 47,
          "acctHours": 0,
          "acctRepairAmt": 13750
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
          "trade": "Gutters",
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
          "trade": "Gutters",
          "salesperson": "Mark Leedy",
          "installAmt": 33431,
          "acctRepairWOs": 72,
          "acctHours": 0,
          "acctRepairAmt": 25375
        },
        {
          "jobNumber": "Job-112100",
          "account": "Stonegate Property Management - Northern Kentucky",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 178585,
          "acctRepairWOs": 72,
          "acctHours": 0,
          "acctRepairAmt": 25375
        },
        {
          "jobNumber": "Job-112101",
          "account": "Stonegate Property Management - Northern Kentucky",
          "branch": "Cincinnati",
          "trade": "Gutters",
          "salesperson": "Mark Leedy",
          "installAmt": 40232,
          "acctRepairWOs": 72,
          "acctHours": 0,
          "acctRepairAmt": 25375
        },
        {
          "jobNumber": "Job-112103",
          "account": "Stonegate Property Management - Northern Kentucky",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 90763,
          "acctRepairWOs": 72,
          "acctHours": 0,
          "acctRepairAmt": 25375
        },
        {
          "jobNumber": "Job-108318",
          "account": "Towne Properties - Cincinnati West District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 30745.4,
          "acctRepairWOs": 275,
          "acctHours": 0,
          "acctRepairAmt": 81440
        },
        {
          "jobNumber": "Job-108754",
          "account": "Towne Properties - Cincinnati West District Office",
          "branch": "Cincinnati",
          "trade": "Siding",
          "salesperson": "Mark Leedy",
          "installAmt": 4500,
          "acctRepairWOs": 275,
          "acctHours": 0,
          "acctRepairAmt": 81440
        },
        {
          "jobNumber": "Job-122168",
          "account": "Towne Properties - Cincinnati West District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 60817,
          "acctRepairWOs": 275,
          "acctHours": 0,
          "acctRepairAmt": 81440
        },
        {
          "jobNumber": "Job-122190",
          "account": "Towne Properties - Cincinnati West District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 65438,
          "acctRepairWOs": 275,
          "acctHours": 0,
          "acctRepairAmt": 81440
        },
        {
          "jobNumber": "Job-122773",
          "account": "Towne Properties - Cincinnati West District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 114155,
          "acctRepairWOs": 275,
          "acctHours": 0,
          "acctRepairAmt": 81440
        },
        {
          "jobNumber": "Job-108416",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 56812.3,
          "acctRepairWOs": 366,
          "acctHours": 0,
          "acctRepairAmt": 131205
        },
        {
          "jobNumber": "Job-108707",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Gutters",
          "salesperson": "Mark Leedy",
          "installAmt": 7074,
          "acctRepairWOs": 366,
          "acctHours": 0,
          "acctRepairAmt": 131205
        },
        {
          "jobNumber": "Job-112768",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 129146.36,
          "acctRepairWOs": 366,
          "acctHours": 0,
          "acctRepairAmt": 131205
        },
        {
          "jobNumber": "Job-115219",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Gutters",
          "salesperson": "Mark Leedy",
          "installAmt": 98128,
          "acctRepairWOs": 366,
          "acctHours": 0,
          "acctRepairAmt": 131205
        },
        {
          "jobNumber": "Job-116644",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 107499.01,
          "acctRepairWOs": 366,
          "acctHours": 0,
          "acctRepairAmt": 131205
        },
        {
          "jobNumber": "Job-120329",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 57674,
          "acctRepairWOs": 366,
          "acctHours": 0,
          "acctRepairAmt": 131205
        }
      ]
    },
    "tabs": []
  },
  "SERVICE_CALLS": {
    "_source": "calculator/service-calls.js Service-Calls-v1.1-2026-05-07",
    "title": "Service Calls YTD",
    "subtitle": "Service Appointments · 13,638 calls across 97 techs · 2026-01 through 2026-11",
    "sourceFile": "Service Appointments YTD-2026-11-02-12-35-59.xlsx",
    "headerMeta": {
      "totalAppts": 13638,
      "uniqTechs": 97,
      "uniqWOs": 11011,
      "uniqAccounts": 3924,
      "uniqJobs": 10451,
      "totalHours": 25176.3,
      "totalBillable": 15560,
      "networkBillRatio": 0.618,
      "totalContract": 10101906.4,
      "avgMinPerAppt": 111,
      "aptsCompleted": 9391,
      "aptsOpen": 4247,
      "monthsCovered": 11
    },
    "kpis": [
      {
        "label": "Appointments YTD",
        "value": "13,638",
        "sub": "11 months · 11,011 work orders",
        "tone": "info"
      },
      {
        "label": "Service Techs",
        "value": "97",
        "sub": "distinct primary resources",
        "tone": "info"
      },
      {
        "label": "Total Hours",
        "value": "25,176.3 h",
        "sub": "avg 111 min/appt",
        "tone": "info"
      },
      {
        "label": "Billable Man-Hours",
        "value": "15,560 h",
        "sub": "0.60x actual (laborers × time)",
        "tone": "info"
      },
      {
        "label": "Contract $ on Calls",
        "value": "$10.1M",
        "sub": "3,924 unique accounts",
        "tone": "good"
      },
      {
        "label": "Open Appointments",
        "value": "4,247",
        "sub": "no Actual End in Salesforce",
        "tone": "warn"
      }
    ],
    "monthly": [
      {
        "key": "2026-01",
        "label": "2026-01",
        "count": 412,
        "hours": 760.8,
        "billable": 1399,
        "contract": 192724.02
      },
      {
        "key": "2026-02",
        "label": "2026-02",
        "count": 1038,
        "hours": 2543.4,
        "billable": 3909.5,
        "contract": 452392.68
      },
      {
        "key": "2026-03",
        "label": "2026-03",
        "count": 1105,
        "hours": 2682.4,
        "billable": 3831,
        "contract": 577924.02
      },
      {
        "key": "2026-04",
        "label": "2026-04",
        "count": 952,
        "hours": 2939.3,
        "billable": 3512.5,
        "contract": 432876.04
      },
      {
        "key": "2026-05",
        "label": "2026-05",
        "count": 832,
        "hours": 1926.6,
        "billable": 1062,
        "contract": 433550.28
      },
      {
        "key": "2026-06",
        "label": "2026-06",
        "count": 971,
        "hours": 2346.4,
        "billable": 1079.5,
        "contract": 672856.84
      },
      {
        "key": "2026-07",
        "label": "2026-07",
        "count": 1046,
        "hours": 1761.5,
        "billable": 135,
        "contract": 652566.69
      },
      {
        "key": "2026-08",
        "label": "2026-08",
        "count": 1215,
        "hours": 3977.5,
        "billable": 100,
        "contract": 635320.04
      },
      {
        "key": "2026-09",
        "label": "2026-09",
        "count": 989,
        "hours": 3672.6,
        "billable": 244.5,
        "contract": 601739.97
      },
      {
        "key": "2026-10",
        "label": "2026-10",
        "count": 1001,
        "hours": 2547,
        "billable": 286,
        "contract": 642709.61
      },
      {
        "key": "2026-11",
        "label": "2026-11",
        "count": 29,
        "hours": 18.9,
        "billable": 1,
        "contract": 18568.91
      }
    ],
    "techRows": [
      {
        "tech": "(unassigned)",
        "count": 1799,
        "hours": 7.5,
        "billHours": 7.5,
        "billRatio": 1,
        "avgMinPerAppt": 0,
        "contract": 1377904.58,
        "avgContract": 766,
        "jobs": 1759,
        "accounts": 1265,
        "branches": "Cincinnati, Cleveland, Columbus, DC Metro, Dayton, Detroit, Grand Rapids, Greenville, Indianapolis, Knoxville, Nashville, Raleigh, Richmond"
      },
      {
        "tech": "Matt Large",
        "count": 797,
        "hours": 1804,
        "billHours": 606.5,
        "billRatio": 0.336,
        "avgMinPerAppt": 136,
        "contract": 354730.31,
        "avgContract": 445,
        "jobs": 692,
        "accounts": 288,
        "branches": "Columbus, Dayton"
      },
      {
        "tech": "Darren Vaught",
        "count": 782,
        "hours": 911.6,
        "billHours": 1227.5,
        "billRatio": 1.347,
        "avgMinPerAppt": 70,
        "contract": 287169.25,
        "avgContract": 367,
        "jobs": 714,
        "accounts": 309,
        "branches": "Columbus"
      },
      {
        "tech": "Nick Foster",
        "count": 689,
        "hours": 1064.8,
        "billHours": 492.5,
        "billRatio": 0.46299999999999997,
        "avgMinPerAppt": 93,
        "contract": 328444.3,
        "avgContract": 477,
        "jobs": 655,
        "accounts": 137,
        "branches": "Raleigh"
      },
      {
        "tech": "Chris Coyour",
        "count": 660,
        "hours": 1305.3,
        "billHours": 622.5,
        "billRatio": 0.47700000000000004,
        "avgMinPerAppt": 119,
        "contract": 346014.76,
        "avgContract": 524,
        "jobs": 593,
        "accounts": 134,
        "branches": "Greenville, Raleigh"
      },
      {
        "tech": "Randy Pfeiffer",
        "count": 596,
        "hours": 1348.6,
        "billHours": 837,
        "billRatio": 0.621,
        "avgMinPerAppt": 136,
        "contract": 156778.53,
        "avgContract": 263,
        "jobs": 500,
        "accounts": 224,
        "branches": "Cincinnati, Columbus, Dayton, Detroit, Indianapolis"
      },
      {
        "tech": "Kevin Green",
        "count": 576,
        "hours": 1014.7,
        "billHours": 382.5,
        "billRatio": 0.377,
        "avgMinPerAppt": 106,
        "contract": 207919.4,
        "avgContract": 361,
        "jobs": 534,
        "accounts": 106,
        "branches": "Raleigh"
      },
      {
        "tech": "Richard Hoffman",
        "count": 469,
        "hours": 2168.9,
        "billHours": 2529.5,
        "billRatio": 1.166,
        "avgMinPerAppt": 277,
        "contract": 454141.78,
        "avgContract": 968,
        "jobs": 413,
        "accounts": 188,
        "branches": "Cincinnati, Cleveland, Columbus, Detroit"
      },
      {
        "tech": "Will Vickers",
        "count": 445,
        "hours": 884.3,
        "billHours": 1159,
        "billRatio": 1.311,
        "avgMinPerAppt": 119,
        "contract": 283361.28,
        "avgContract": 637,
        "jobs": 383,
        "accounts": 130,
        "branches": "Cleveland, Detroit, Grand Rapids"
      },
      {
        "tech": "David Frindt",
        "count": 443,
        "hours": 894.2,
        "billHours": 399.5,
        "billRatio": 0.447,
        "avgMinPerAppt": 121,
        "contract": 356808.67,
        "avgContract": 805,
        "jobs": 372,
        "accounts": 175,
        "branches": "Cleveland, Columbus"
      },
      {
        "tech": "Wayne Young",
        "count": 423,
        "hours": 840.5,
        "billHours": 6,
        "billRatio": 0.006999999999999999,
        "avgMinPerAppt": 119,
        "contract": 170242.94,
        "avgContract": 402,
        "jobs": 378,
        "accounts": 182,
        "branches": "Columbus"
      },
      {
        "tech": "Ricardo Nunez",
        "count": 415,
        "hours": 1287.7,
        "billHours": 650,
        "billRatio": 0.505,
        "avgMinPerAppt": 186,
        "contract": 333081,
        "avgContract": 803,
        "jobs": 378,
        "accounts": 144,
        "branches": "Detroit, Grand Rapids"
      },
      {
        "tech": "Edwin Irizarry-Vasquez",
        "count": 403,
        "hours": 745.6,
        "billHours": 502.5,
        "billRatio": 0.674,
        "avgMinPerAppt": 111,
        "contract": 319950.7,
        "avgContract": 794,
        "jobs": 358,
        "accounts": 140,
        "branches": "Detroit, Grand Rapids"
      },
      {
        "tech": "Maxwell Sousa",
        "count": 397,
        "hours": 692.8,
        "billHours": 3,
        "billRatio": 0.004,
        "avgMinPerAppt": 105,
        "contract": 203465.39,
        "avgContract": 513,
        "jobs": 341,
        "accounts": 96,
        "branches": "Cincinnati, Dayton, Raleigh"
      },
      {
        "tech": "Wilver Velasquez",
        "count": 348,
        "hours": 638.3,
        "billHours": 247.5,
        "billRatio": 0.38799999999999996,
        "avgMinPerAppt": 110,
        "contract": 411674.19,
        "avgContract": 1183,
        "jobs": 316,
        "accounts": 172,
        "branches": "Columbus, DC Metro, Detroit, Richmond"
      },
      {
        "tech": "Rene Alvarado",
        "count": 309,
        "hours": 844.9,
        "billHours": 278.5,
        "billRatio": 0.33,
        "avgMinPerAppt": 164,
        "contract": 161656.44,
        "avgContract": 523,
        "jobs": 256,
        "accounts": 150,
        "branches": "Cincinnati, Knoxville, Nashville"
      },
      {
        "tech": "G3 Construction",
        "count": 302,
        "hours": 37.3,
        "billHours": 38,
        "billRatio": 1.02,
        "avgMinPerAppt": 7,
        "contract": 115168.63,
        "avgContract": 381,
        "jobs": 296,
        "accounts": 61,
        "branches": "Cincinnati, Dayton"
      },
      {
        "tech": "Santos Alfaro-Delcid",
        "count": 292,
        "hours": 1774.9,
        "billHours": 1486,
        "billRatio": 0.8370000000000001,
        "avgMinPerAppt": 365,
        "contract": 397695.69,
        "avgContract": 1362,
        "jobs": 238,
        "accounts": 160,
        "branches": "DC Metro, Nashville, Richmond"
      },
      {
        "tech": "Andrii Shvets",
        "count": 291,
        "hours": 456.6,
        "billHours": 406.5,
        "billRatio": 0.89,
        "avgMinPerAppt": 94,
        "contract": 75151.33,
        "avgContract": 258,
        "jobs": 258,
        "accounts": 109,
        "branches": "Cincinnati, Columbus, Dayton, Detroit, Indianapolis"
      },
      {
        "tech": "Andrew Pruitt",
        "count": 282,
        "hours": 336.2,
        "billHours": 380.5,
        "billRatio": 1.1320000000000001,
        "avgMinPerAppt": 72,
        "contract": 69815,
        "avgContract": 248,
        "jobs": 261,
        "accounts": 76,
        "branches": "Cincinnati, Columbus, Dayton, Indianapolis"
      },
      {
        "tech": "Israel Velasquez",
        "count": 264,
        "hours": 846.2,
        "billHours": 336,
        "billRatio": 0.397,
        "avgMinPerAppt": 192,
        "contract": 422267.4,
        "avgContract": 1599,
        "jobs": 215,
        "accounts": 144,
        "branches": "DC Metro, Richmond"
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
        "tech": "Tristan Waters",
        "count": 228,
        "hours": 673.3,
        "billHours": 1,
        "billRatio": 0.001,
        "avgMinPerAppt": 177,
        "contract": 233037.7,
        "avgContract": 1022,
        "jobs": 203,
        "accounts": 89,
        "branches": "Cincinnati, Detroit, Grand Rapids"
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
        "tech": "Gavyn Stone",
        "count": 205,
        "hours": 375.7,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 110,
        "contract": 72005.61,
        "avgContract": 351,
        "jobs": 184,
        "accounts": 104,
        "branches": "Columbus"
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
        "count": 197,
        "hours": 0,
        "billHours": 1,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 484552.52,
        "avgContract": 2460,
        "jobs": 187,
        "accounts": 137,
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
        "count": 159,
        "hours": 671,
        "billHours": 815.5,
        "billRatio": 1.215,
        "avgMinPerAppt": 253,
        "contract": 115437,
        "avgContract": 726,
        "jobs": 148,
        "accounts": 68,
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
        "count": 80,
        "hours": 0,
        "billHours": 2,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 151705.41,
        "avgContract": 1896,
        "jobs": 80,
        "accounts": 58,
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
        "tech": "Daniel Brown",
        "count": 57,
        "hours": 1525.9,
        "billHours": 73.5,
        "billRatio": 0.048,
        "avgMinPerAppt": 1606,
        "contract": 63185.01,
        "avgContract": 1109,
        "jobs": 54,
        "accounts": 32,
        "branches": "Raleigh"
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
        "tech": "ASM Construction",
        "count": 44,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 88088.15,
        "avgContract": 2002,
        "jobs": 44,
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
        "count": 23,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 195140.97,
        "avgContract": 8484,
        "jobs": 22,
        "accounts": 13,
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
        "tech": "Manuel Vega",
        "count": 12,
        "hours": 23.5,
        "billHours": 47,
        "billRatio": 1.9969999999999999,
        "avgMinPerAppt": 118,
        "contract": 20130,
        "avgContract": 1678,
        "jobs": 12,
        "accounts": 10,
        "branches": "Detroit"
      },
      {
        "tech": "PREMIER ROOFING",
        "count": 11,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 13310.13,
        "avgContract": 1210,
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
        "contract": 50978.32,
        "avgContract": 7283,
        "jobs": 7,
        "accounts": 7,
        "branches": "Columbus"
      },
      {
        "tech": "Jonnell Morgan",
        "count": 5,
        "hours": 10.3,
        "billHours": 7.5,
        "billRatio": 0.732,
        "avgMinPerAppt": 123,
        "contract": 900,
        "avgContract": 180,
        "jobs": 5,
        "accounts": 5,
        "branches": "Cincinnati, Dayton"
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
        "tech": "Brittian Construction LLC",
        "count": 3,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 138198,
        "avgContract": 46066,
        "jobs": 2,
        "accounts": 2,
        "branches": "Detroit"
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
        "tech": "Richard Lenyk",
        "count": 2,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 1200,
        "avgContract": 600,
        "jobs": 2,
        "accounts": 2,
        "branches": "Columbus"
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
        "tech": "Monde Home Improvement",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 2380,
        "avgContract": 2380,
        "jobs": 1,
        "accounts": 1,
        "branches": "Cleveland"
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
        "tech": "Arctic Insulation Co.",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 46500,
        "avgContract": 46500,
        "jobs": 1,
        "accounts": 1,
        "branches": "Detroit"
      },
      {
        "tech": "Top Experts Renovation",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 43068,
        "avgContract": 43068,
        "jobs": 1,
        "accounts": 1,
        "branches": "Detroit"
      },
      {
        "tech": "Operation Exterior Shield, LLC",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 2590,
        "avgContract": 2590,
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
      },
      {
        "tech": "Rain Carriers",
        "count": 1,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 1207.18,
        "avgContract": 1207,
        "jobs": 1,
        "accounts": 1,
        "branches": "Richmond"
      }
    ],
    "branchRows": [
      {
        "branch": "Columbus",
        "count": 4473,
        "techs": 44,
        "accounts": 1557,
        "hours": 5494.4,
        "billHours": 3559.5,
        "contract": 2707937.95,
        "avgMinPerAppt": 74
      },
      {
        "branch": "Raleigh",
        "count": 2395,
        "techs": 8,
        "accounts": 311,
        "hours": 5523.7,
        "billHours": 1571,
        "contract": 1188526.6,
        "avgMinPerAppt": 138
      },
      {
        "branch": "Detroit",
        "count": 2138,
        "techs": 22,
        "accounts": 561,
        "hours": 4273.7,
        "billHours": 3169,
        "contract": 2626043.02,
        "avgMinPerAppt": 120
      },
      {
        "branch": "Cincinnati",
        "count": 1586,
        "techs": 21,
        "accounts": 361,
        "hours": 2048.6,
        "billHours": 873,
        "contract": 576939.53,
        "avgMinPerAppt": 77
      },
      {
        "branch": "Cleveland",
        "count": 995,
        "techs": 9,
        "accounts": 320,
        "hours": 3059.2,
        "billHours": 2921,
        "contract": 870603.39,
        "avgMinPerAppt": 184
      },
      {
        "branch": "DC Metro",
        "count": 833,
        "techs": 11,
        "accounts": 349,
        "hours": 3006.1,
        "billHours": 1995.5,
        "contract": 1287195.86,
        "avgMinPerAppt": 217
      },
      {
        "branch": "Nashville",
        "count": 489,
        "techs": 6,
        "accounts": 233,
        "hours": 1104.5,
        "billHours": 535.5,
        "contract": 253330.16,
        "avgMinPerAppt": 136
      },
      {
        "branch": "Dayton",
        "count": 435,
        "techs": 17,
        "accounts": 179,
        "hours": 475.8,
        "billHours": 770.5,
        "contract": 275611.75,
        "avgMinPerAppt": 66
      },
      {
        "branch": "Richmond",
        "count": 186,
        "techs": 8,
        "accounts": 79,
        "hours": 68.6,
        "billHours": 64,
        "contract": 268599.86,
        "avgMinPerAppt": 22
      },
      {
        "branch": "Indianapolis",
        "count": 77,
        "techs": 8,
        "accounts": 27,
        "hours": 93.4,
        "billHours": 73.5,
        "contract": 24530,
        "avgMinPerAppt": 73
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
        "count": 544,
        "jobs": 427,
        "hours": 1565.1,
        "billHours": 384.5,
        "contract": 324459.87,
        "branches": "Columbus"
      },
      {
        "account": "Priestley Management Company",
        "count": 421,
        "jobs": 302,
        "hours": 804.5,
        "billHours": 334,
        "contract": 309793,
        "branches": "Raleigh"
      },
      {
        "account": "Capital Property Solutions",
        "count": 394,
        "jobs": 297,
        "hours": 533,
        "billHours": 406.5,
        "contract": 207207.02,
        "branches": "Columbus"
      },
      {
        "account": "Charleston Management",
        "count": 375,
        "jobs": 270,
        "hours": 885.5,
        "billHours": 148,
        "contract": 198020,
        "branches": "Raleigh"
      },
      {
        "account": "Towne Properties - East Cincinnati District Office",
        "count": 366,
        "jobs": 323,
        "hours": 455.5,
        "billHours": 225.5,
        "contract": 131205,
        "branches": "Cincinnati"
      },
      {
        "account": "Towne Properties - Cincinnati West District Office",
        "count": 275,
        "jobs": 243,
        "hours": 243.3,
        "billHours": 127,
        "contract": 81440,
        "branches": "Cincinnati, Dayton"
      },
      {
        "account": "Condo Management of Columbus",
        "count": 274,
        "jobs": 209,
        "hours": 298,
        "billHours": 172,
        "contract": 169429.67,
        "branches": "Cincinnati, Columbus"
      },
      {
        "account": "Towne Properties - Raleigh District",
        "count": 268,
        "jobs": 199,
        "hours": 468.2,
        "billHours": 166.5,
        "contract": 115775,
        "branches": "Raleigh"
      },
      {
        "account": "KS Management",
        "count": 242,
        "jobs": 186,
        "hours": 284.2,
        "billHours": 177.5,
        "contract": 167227.94,
        "branches": "DC Metro, Detroit, Grand Rapids"
      },
      {
        "account": "Professional Properties Management",
        "count": 242,
        "jobs": 183,
        "hours": 519,
        "billHours": 151.5,
        "contract": 116699,
        "branches": "Raleigh"
      },
      {
        "account": "Associated Property Management, LLC",
        "count": 223,
        "jobs": 169,
        "hours": 444.7,
        "billHours": 205,
        "contract": 155968.8,
        "branches": "Cincinnati, Cleveland, Columbus, Dayton"
      },
      {
        "account": "Compass Management Professionals",
        "count": 223,
        "jobs": 170,
        "hours": 274.5,
        "billHours": 250.5,
        "contract": 193566.94,
        "branches": "Detroit"
      },
      {
        "account": "Singh Management",
        "count": 201,
        "jobs": 153,
        "hours": 910.1,
        "billHours": 825,
        "contract": 247654.8,
        "branches": "Detroit"
      },
      {
        "account": "Solomon Organization, LLC",
        "count": 195,
        "jobs": 144,
        "hours": 299.5,
        "billHours": 421,
        "contract": 218273,
        "branches": "Cincinnati, Cleveland, Columbus, Detroit, Grand Rapids"
      },
      {
        "account": "Towne Properties - Dayton",
        "count": 160,
        "jobs": 132,
        "hours": 148,
        "billHours": 118,
        "contract": 62090,
        "branches": "Cincinnati, Dayton"
      },
      {
        "account": "Associa On Call",
        "count": 144,
        "jobs": 108,
        "hours": 132.3,
        "billHours": 67.5,
        "contract": 74947.94,
        "branches": "Cincinnati, Columbus, Dayton"
      },
      {
        "account": "Kare Condominium Management Company",
        "count": 115,
        "jobs": 96,
        "hours": 165.7,
        "billHours": 60.5,
        "contract": 44950.75,
        "branches": "Cincinnati, Cleveland"
      },
      {
        "account": "RowCal Construction & Maintenance TN, LLC",
        "count": 104,
        "jobs": 85,
        "hours": 218.9,
        "billHours": 119.5,
        "contract": 35950,
        "branches": "Cincinnati, Nashville, Knoxville"
      },
      {
        "account": "Link Real Estate Group",
        "count": 89,
        "jobs": 64,
        "hours": 77.6,
        "billHours": 44,
        "contract": 40497.56,
        "branches": "Cincinnati, Columbus"
      },
      {
        "account": "In Rhodes Management, Inc",
        "count": 88,
        "jobs": 63,
        "hours": 166.7,
        "billHours": 479,
        "contract": 172880,
        "branches": "Detroit"
      },
      {
        "account": "Sentry Management - Columbus",
        "count": 77,
        "jobs": 64,
        "hours": 67.5,
        "billHours": 52,
        "contract": 34252.18,
        "branches": "Columbus"
      },
      {
        "account": "Stonegate Property Management - Northern Kentucky",
        "count": 72,
        "jobs": 59,
        "hours": 48.6,
        "billHours": 26,
        "contract": 25375,
        "branches": "Cincinnati"
      },
      {
        "account": "Towne Properties - Northern Kentucky",
        "count": 69,
        "jobs": 51,
        "hours": 293.8,
        "billHours": 25.5,
        "contract": 22425,
        "branches": "Cincinnati"
      },
      {
        "account": "Greystar Real Estate Management - NC",
        "count": 67,
        "jobs": 40,
        "hours": 151.9,
        "billHours": 159.5,
        "contract": 14810,
        "branches": "Raleigh"
      },
      {
        "account": "Oakwood Management Company",
        "count": 66,
        "jobs": 58,
        "hours": 60.4,
        "billHours": 64,
        "contract": 42031,
        "branches": "Columbus"
      }
    ],
    "woStats": {
      "stuck": [
        {
          "wo": "00200898",
          "account": "Tonya Molett",
          "branch": "Detroit",
          "tech": "Ricardo Nunez",
          "appointments": 2,
          "hours": 2.6,
          "billHours": 5,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-02-11",
          "newest": "2026-08-04",
          "spanDays": 174
        },
        {
          "wo": "00198478",
          "account": "Barrett & Stokely Inc",
          "branch": "Columbus",
          "tech": "Darren Vaught",
          "appointments": 3,
          "hours": 8.8,
          "billHours": 1,
          "contract": 4900,
          "hoursPer100": 0.2,
          "oldest": "2026-01-21",
          "newest": "2026-06-24",
          "spanDays": 154
        },
        {
          "wo": "00202568",
          "account": "Associa On Call",
          "branch": "Columbus",
          "tech": "Matt Velazquez",
          "appointments": 3,
          "hours": 2.5,
          "billHours": 1,
          "contract": 350,
          "hoursPer100": 0.7,
          "oldest": "2026-03-20",
          "newest": "2026-08-21",
          "spanDays": 154
        },
        {
          "wo": "00204241",
          "account": "Kramer Triad Management - Troy",
          "branch": "Detroit",
          "tech": "Ethan Epperson",
          "appointments": 2,
          "hours": 2.6,
          "billHours": 1.5,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-04-24",
          "newest": "2026-09-02",
          "spanDays": 131
        },
        {
          "wo": "00203665",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "tech": "Matt Velazquez",
          "appointments": 2,
          "hours": 1.2,
          "billHours": 2,
          "contract": 350,
          "hoursPer100": 0.3,
          "oldest": "2026-03-30",
          "newest": "2026-07-27",
          "spanDays": 119
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
          "oldest": "2026-06-10",
          "newest": "2026-10-05",
          "spanDays": 117
        },
        {
          "wo": "00206354",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "tech": "Richard Hoffman",
          "appointments": 3,
          "hours": 3.8,
          "billHours": 1.5,
          "contract": 350,
          "hoursPer100": 1.1,
          "oldest": "2026-03-23",
          "newest": "2026-07-16",
          "spanDays": 115
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
          "oldest": "2026-03-09",
          "newest": "2026-06-30",
          "spanDays": 113
        },
        {
          "wo": "00212471",
          "account": "Terese M Coon",
          "branch": "Cleveland",
          "tech": "David Frindt",
          "appointments": 6,
          "hours": 5.1,
          "billHours": 0,
          "contract": 1001.63,
          "hoursPer100": 0.5,
          "oldest": "2026-04-30",
          "newest": "2026-08-19",
          "spanDays": 111
        },
        {
          "wo": "00205653",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "tech": "Jose Cartagena",
          "appointments": 2,
          "hours": 3.8,
          "billHours": 5,
          "contract": 500,
          "hoursPer100": 0.8,
          "oldest": "2026-03-17",
          "newest": "2026-07-06",
          "spanDays": 111
        },
        {
          "wo": "00206614",
          "account": "Maurice Potvin",
          "branch": "Columbus",
          "tech": "Darren Vaught",
          "appointments": 2,
          "hours": 0.7,
          "billHours": 1,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-04-06",
          "newest": "2026-07-25",
          "spanDays": 110
        },
        {
          "wo": "00199135",
          "account": "In Rhodes Management, Inc",
          "branch": "Detroit",
          "tech": "Ethan Epperson",
          "appointments": 2,
          "hours": 7.4,
          "billHours": 3,
          "contract": 350,
          "hoursPer100": 2.1,
          "oldest": "2026-01-20",
          "newest": "2026-05-08",
          "spanDays": 108
        },
        {
          "wo": "00208245",
          "account": "Stephen Russell",
          "branch": "Columbus",
          "tech": "Matt Large",
          "appointments": 4,
          "hours": 4.6,
          "billHours": 1,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-03-31",
          "newest": "2026-07-16",
          "spanDays": 107
        },
        {
          "wo": "00210416",
          "account": "Associa On Call",
          "branch": "Columbus",
          "tech": "Wilver Velasquez",
          "appointments": 3,
          "hours": 1.9,
          "billHours": 1,
          "contract": 350,
          "hoursPer100": 0.5,
          "oldest": "2026-05-07",
          "newest": "2026-08-14",
          "spanDays": 99
        },
        {
          "wo": "00213025",
          "account": "Singh Management",
          "branch": "Detroit",
          "tech": "Will Vickers",
          "appointments": 3,
          "hours": 1.5,
          "billHours": 1,
          "contract": 350,
          "hoursPer100": 0.4,
          "oldest": "2026-04-27",
          "newest": "2026-08-03",
          "spanDays": 98
        },
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
          "wo": "00207898",
          "account": "Adam Ferne",
          "branch": "Columbus",
          "tech": "Matt Velazquez",
          "appointments": 5,
          "hours": 6.8,
          "billHours": 3,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-04-13",
          "newest": "2026-07-15",
          "spanDays": 93
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
          "wo": "00215725",
          "account": "Associa - Community Management Corporation DC Market - Opp# 254255",
          "branch": "DC Metro",
          "tech": "Santos Alfaro-Delcid",
          "appointments": 2,
          "hours": 5.7,
          "billHours": 6,
          "contract": 775,
          "hoursPer100": 0.7,
          "oldest": "2026-05-18",
          "newest": "2026-08-19",
          "spanDays": 93
        },
        {
          "wo": "00223081",
          "account": "David Rustom",
          "branch": "Detroit",
          "tech": "Will Vickers",
          "appointments": 4,
          "hours": 5.9,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-07-06",
          "newest": "2026-10-06",
          "spanDays": 92
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
          "wo": "00206923",
          "account": "Teri Umbarger",
          "branch": "Columbus",
          "tech": "Matt Large",
          "appointments": 3,
          "hours": 2.2,
          "billHours": 2,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-03-31",
          "newest": "2026-06-29",
          "spanDays": 90
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
          "wo": "00216419",
          "account": "David Swartz",
          "branch": "Detroit",
          "tech": "Ethan Epperson",
          "appointments": 2,
          "hours": 3.2,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-06-03",
          "newest": "2026-08-31",
          "spanDays": 89
        },
        {
          "wo": "00204757",
          "account": "BLS Property Management",
          "branch": "Detroit",
          "tech": "Will Vickers",
          "appointments": 2,
          "hours": 3.6,
          "billHours": 7,
          "contract": 700,
          "hoursPer100": 0.5,
          "oldest": "2026-03-30",
          "newest": "2026-06-25",
          "spanDays": 87
        }
      ],
      "inProgress60Plus": [
        {
          "wo": "00231102",
          "account": "Walt Weiskopf",
          "branch": "Richmond",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 66.82,
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
          "days": 65.82,
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
          "days": 61.08,
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
          "days": 55.01,
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
          "days": 52.21,
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
          "days": 48.12,
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
          "days": 48.06,
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
          "days": 47.19,
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
          "days": 47.16,
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
          "days": 47.08,
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
          "days": 46.1,
          "contract": 0,
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
          "days": 46.01,
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
          "days": 45.85,
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
          "days": 45.08,
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
          "days": 43.86,
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
          "days": 41.05,
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
          "days": 41.05,
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
          "days": 41.01,
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
          "days": 40.05,
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
          "days": 39.97,
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
          "days": 39.9,
          "contract": 350,
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
          "days": 37.89,
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
          "days": 37.89,
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
          "days": 35.05,
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
          "days": 34.06,
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
          "days": 33.92,
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
          "days": 33.19,
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
          "days": 33.18,
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
          "days": 31.94,
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
          "days": 31.19,
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
          "days": 28.17,
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
          "days": 28.16,
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
          "days": 27.92,
          "contract": 350,
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
          "days": 27.78,
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
          "days": 27.01,
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
          "days": 27,
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
          "days": 26.95,
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
          "days": 26.95,
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
          "days": 26.95,
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
          "days": 26.9,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00234892",
          "account": "Gahanna Moose Lodge",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 25.02,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00238051",
          "account": "Charleston Management",
          "branch": "Raleigh",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 24.99,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00238246",
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
          "wo": "00236401",
          "account": "Nan Grandstaff",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 20.16,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00238462",
          "account": "Comsource Management, Inc.",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "",
          "days": 19.06,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00232147",
          "account": "Sundance Property Management Inc",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 18.88,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00235966",
          "account": "Sentry Management - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 17.23,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00237155",
          "account": "Eric laipple",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 17.23,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00237965",
          "account": "Link Real Estate Group",
          "branch": "Columbus",
          "trade": "Gutters",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 17.23,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00236363",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 17.2,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00226305",
          "account": "Richard Moffa",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 17.01,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00235556",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 16.15,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00236681",
          "account": "Greystar Real Estate Management - VA",
          "branch": "DC Metro",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Return Trip Required",
          "days": 14.25,
          "contract": 3150,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00237832",
          "account": "PMI Centerline",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 14.06,
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
          "days": 299.03,
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
          "days": 290.1,
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
          "days": 286.97,
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
          "days": 242.05,
          "contract": 350,
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
          "days": 159.12,
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
          "days": 157.92,
          "contract": 0,
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
          "days": 118.11,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00215262",
          "account": "Franklin Arms Association",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 112.02,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00227212",
          "account": "Harbor Group Management",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Ready to Schedule",
          "subStatus": "",
          "days": 97.97,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00222030",
          "account": "Don Coburn",
          "branch": "Columbus",
          "trade": "Gutters",
          "status": "Scheduled",
          "subStatus": "",
          "days": 89.98,
          "contract": 1481,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00229054",
          "account": "United Property Associates",
          "branch": "Richmond",
          "trade": "Roofing",
          "status": "On Hold",
          "subStatus": "Pending Deposit",
          "days": 88.07,
          "contract": 168762.5,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00229380",
          "account": "Angie & MIke Fleshman",
          "branch": "Columbus",
          "trade": "Siding",
          "status": "On Hold",
          "subStatus": "Pending Sales",
          "days": 83.87,
          "contract": 2608,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00227424",
          "account": "Associa Tennessee",
          "branch": "Nashville",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 81.93,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00225651",
          "account": "Leah A Rehfus Maxwell G Rehfus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "On Hold",
          "subStatus": "Pending Sales",
          "days": 75.11,
          "contract": 1501.82,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00230382",
          "account": "Associa Richmond VA",
          "branch": "Richmond",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 74.78,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00233033",
          "account": "Redwood Living Inc.",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Ready to Schedule",
          "subStatus": "",
          "days": 66.06,
          "contract": 20993,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00233579",
          "account": "Priestley Management Company",
          "branch": "Raleigh",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 54.12,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00228654",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "Ready to Schedule",
          "subStatus": "",
          "days": 53.06,
          "contract": 2499.94,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00234749",
          "account": "KS Management",
          "branch": "Detroit",
          "trade": "Windows",
          "status": "Ready to Schedule",
          "subStatus": "",
          "days": 52.9,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00233896",
          "account": "Greenway Realty Management - Charlotte",
          "branch": "Raleigh",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 52.87,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00234221",
          "account": "Diana Murray",
          "branch": "Detroit",
          "trade": "Siding",
          "status": "Ready to Schedule",
          "subStatus": "",
          "days": 52.78,
          "contract": 2687,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00235545",
          "account": "In Rhodes Management, Inc",
          "branch": "Detroit",
          "trade": "Roofing",
          "status": "Ready to Schedule",
          "subStatus": "",
          "days": 47.13,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00222403",
          "account": "RowCal Construction & Maintenance TN, LLC",
          "branch": "Nashville",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 46.72,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00228877",
          "account": "Steve & Nancy Fry",
          "branch": "Nashville",
          "trade": "Roofing",
          "status": "Pending Estimate Approval",
          "subStatus": "",
          "days": 46.72,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00230983",
          "account": "United Church Homes",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "status": "Scheduled",
          "subStatus": "",
          "days": 46.1,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        }
      ],
      "notStartedByStatus": [
        {
          "status": "Scheduled",
          "count": 344,
          "avgDays": 9.5,
          "maxDays": 90
        },
        {
          "status": "Ready to Schedule",
          "count": 130,
          "avgDays": 16.8,
          "maxDays": 159.1
        },
        {
          "status": "Pending Estimate Approval",
          "count": 102,
          "avgDays": 22.2,
          "maxDays": 112
        },
        {
          "status": "New",
          "count": 42,
          "avgDays": 0.7,
          "maxDays": 12
        },
        {
          "status": "On Hold",
          "count": 26,
          "avgDays": 28.4,
          "maxDays": 118.1
        },
        {
          "status": "Pending Insurance Claim",
          "count": 4,
          "avgDays": 279.5,
          "maxDays": 299
        }
      ],
      "notStartedTotal": 648,
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
          "oldest": "2026-07-27",
          "newest": "2026-07-29",
          "spanDays": 2
        },
        {
          "wo": "00233652",
          "account": "Abaris Realty, Inc.",
          "branch": "DC Metro",
          "tech": "Israel Velasquez",
          "appointments": 11,
          "hours": 49.9,
          "billHours": 56,
          "contract": 20000,
          "hoursPer100": 0.2,
          "oldest": "2026-09-17",
          "newest": "2026-10-21",
          "spanDays": 34
        },
        {
          "wo": "00236151",
          "account": "Chuck Thiemann",
          "branch": "Cincinnati",
          "tech": "Jonnell Morgan",
          "appointments": 7,
          "hours": 8.7,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-09-30",
          "newest": "2026-10-29",
          "spanDays": 29
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
          "oldest": "2026-07-02",
          "newest": "2026-09-08",
          "spanDays": 68
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
          "oldest": "2026-06-24",
          "newest": "2026-09-02",
          "spanDays": 70
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
          "wo": "00202821",
          "account": "Associated Property Management, LLC",
          "branch": "Cleveland",
          "tech": "Richard Hoffman",
          "appointments": 6,
          "hours": 0.8,
          "billHours": 4,
          "contract": 400,
          "hoursPer100": 0.2,
          "oldest": "2026-03-05",
          "newest": "2026-03-16",
          "spanDays": 11
        },
        {
          "wo": "00212471",
          "account": "Terese M Coon",
          "branch": "Cleveland",
          "tech": "David Frindt",
          "appointments": 6,
          "hours": 5.1,
          "billHours": 0,
          "contract": 1001.63,
          "hoursPer100": 0.5,
          "oldest": "2026-04-30",
          "newest": "2026-08-19",
          "spanDays": 111
        },
        {
          "wo": "00231609",
          "account": "Towne Properties - Columbus",
          "branch": "Columbus",
          "tech": "Darren Vaught",
          "appointments": 6,
          "hours": 8.8,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 2.5,
          "oldest": "2026-08-22",
          "newest": "2026-09-16",
          "spanDays": 25
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
          "oldest": "2026-05-22",
          "newest": "2026-07-09",
          "spanDays": 48
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
          "oldest": "2026-06-15",
          "newest": "2026-07-02",
          "spanDays": 17
        },
        {
          "wo": "00213959",
          "account": "Roger West (AllClaims Pro)",
          "branch": "DC Metro",
          "tech": "Wilver Velasquez",
          "appointments": 6,
          "hours": 28.7,
          "billHours": 4,
          "contract": 2985,
          "hoursPer100": 1,
          "oldest": "2026-05-07",
          "newest": "2026-06-01",
          "spanDays": 25
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
          "wo": "00222675",
          "account": "Priestley Management Company",
          "branch": "Raleigh",
          "tech": "Chris Coyour",
          "appointments": 6,
          "hours": 1.8,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-06-25",
          "newest": "2026-08-13",
          "spanDays": 49
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
          "oldest": "2026-08-31",
          "newest": "2026-09-22",
          "spanDays": 22
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
          "oldest": "2026-09-14",
          "newest": "2026-10-07",
          "spanDays": 23
        },
        {
          "wo": "00199830",
          "account": "James Langmeier",
          "branch": "Cincinnati",
          "tech": "Andrii Shvets",
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
          "wo": "00219825",
          "account": "Kare Condominium Management Company",
          "branch": "Cleveland",
          "tech": "David Frindt",
          "appointments": 5,
          "hours": 5.5,
          "billHours": 0,
          "contract": 0,
          "hoursPer100": 0,
          "oldest": "2026-06-10",
          "newest": "2026-10-05",
          "spanDays": 117
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
          "oldest": "2026-03-09",
          "newest": "2026-06-30",
          "spanDays": 113
        },
        {
          "wo": "00213400",
          "account": "Solomon Organization, LLC",
          "branch": "Cleveland",
          "tech": "Richard Hoffman",
          "appointments": 5,
          "hours": 6.4,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 1.8,
          "oldest": "2026-05-06",
          "newest": "2026-05-12",
          "spanDays": 6
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
          "oldest": "2026-03-05",
          "newest": "2026-03-16",
          "spanDays": 11
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
          "oldest": "2026-02-27",
          "newest": "2026-05-11",
          "spanDays": 73
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
          "oldest": "2026-04-13",
          "newest": "2026-07-15",
          "spanDays": 93
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
          "oldest": "2026-06-08",
          "newest": "2026-06-25",
          "spanDays": 17
        }
      ],
      "disproportionate": [
        {
          "wo": "00237240",
          "account": "Associa HRW Inc",
          "branch": "Raleigh",
          "tech": "Daniel Brown",
          "appointments": 1,
          "hours": 649.7,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 185.6,
          "oldest": "2026-09-30",
          "newest": "2026-09-30",
          "spanDays": 0
        },
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
          "oldest": "2026-06-02",
          "newest": "2026-06-02",
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
          "oldest": "2026-09-11",
          "newest": "2026-09-11",
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
          "oldest": "2026-08-07",
          "newest": "2026-08-07",
          "spanDays": 0
        },
        {
          "wo": "00236008",
          "account": "Singh Management",
          "branch": "Detroit",
          "tech": "Tristan Waters",
          "appointments": 2,
          "hours": 257,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 73.4,
          "oldest": "2026-10-15",
          "newest": "2026-10-15",
          "spanDays": 0
        },
        {
          "wo": "00232403",
          "account": "Towne Properties - Northern Kentucky",
          "branch": "Cincinnati",
          "tech": "Randy Pfeiffer",
          "appointments": 2,
          "hours": 241.2,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 68.9,
          "oldest": "2026-09-04",
          "newest": "2026-09-04",
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
          "oldest": "2026-08-28",
          "newest": "2026-09-11",
          "spanDays": 14
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
          "oldest": "2026-05-23",
          "newest": "2026-05-23",
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
          "wo": "00227468",
          "account": "Charleston Management",
          "branch": "Raleigh",
          "tech": "Daniel Brown",
          "appointments": 3,
          "hours": 382.7,
          "billHours": 0,
          "contract": 1390,
          "hoursPer100": 27.5,
          "oldest": "2026-07-31",
          "newest": "2026-08-24",
          "spanDays": 24
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
          "oldest": "2026-09-04",
          "newest": "2026-09-04",
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
          "oldest": "2026-08-22",
          "newest": "2026-08-22",
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
          "wo": "00230450",
          "account": "Capital Property Solutions",
          "branch": "Columbus",
          "tech": "Darren Vaught",
          "appointments": 2,
          "hours": 66,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 18.8,
          "oldest": "2026-08-12",
          "newest": "2026-08-21",
          "spanDays": 9
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
          "oldest": "2026-08-19",
          "newest": "2026-08-19",
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
          "oldest": "2026-10-16",
          "newest": "2026-10-16",
          "spanDays": 0
        },
        {
          "wo": "00235053",
          "account": "Associa HRW Inc",
          "branch": "Raleigh",
          "tech": "Daniel Brown",
          "appointments": 2,
          "hours": 60.6,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 17.3,
          "oldest": "2026-09-30",
          "newest": "2026-10-27",
          "spanDays": 27
        },
        {
          "wo": "00212709",
          "account": "Stewart Latwin",
          "branch": "DC Metro",
          "tech": "Santos Alfaro-Delcid",
          "appointments": 2,
          "hours": 486.2,
          "billHours": 18.5,
          "contract": 3071,
          "hoursPer100": 15.8,
          "oldest": "2026-05-12",
          "newest": "2026-05-12",
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
          "wo": "00217364",
          "account": "Kare Condominium Management Company",
          "branch": "Cleveland",
          "tech": "David Frindt",
          "appointments": 1,
          "hours": 45.5,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 13,
          "oldest": "2026-06-03",
          "newest": "2026-06-03",
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
        "start": "2026-04-22 08:56"
      },
      {
        "apptNum": "",
        "wo": "00237240",
        "account": "Associa HRW Inc",
        "tech": "Daniel Brown",
        "branch": "Raleigh",
        "hours": 649.7,
        "contract": 350,
        "laborers": 1,
        "start": "2026-09-30 10:39"
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
        "start": "2026-06-02 11:03"
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
        "start": "2026-05-12 08:45"
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
        "start": "2026-08-07 13:10"
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
        "start": "2026-09-11 14:39"
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
        "start": "2026-08-24 15:06"
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
        "start": "2026-02-16 08:30"
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
        "start": "2026-08-28 13:49"
      },
      {
        "apptNum": "",
        "wo": "00236008",
        "account": "Singh Management",
        "tech": "Tristan Waters",
        "branch": "Detroit",
        "hours": 257,
        "contract": 350,
        "laborers": 1,
        "start": "2026-10-15 13:46"
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
        "start": "2026-09-04 13:10"
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
        "start": "2026-09-02 10:38"
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
        "start": "2026-08-17 16:03"
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
        "start": "2026-08-12 09:06"
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
        "start": "2026-08-19 12:01"
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
        "start": "2026-05-23 17:56"
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
        "start": "2026-03-27 13:17"
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
        "start": "2026-03-12 12:25"
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
        "start": "2026-03-27 17:24"
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
        "start": "2026-02-05 13:52"
      },
      {
        "apptNum": "",
        "wo": "00238747",
        "account": "Christine Ann Sutcliffe",
        "tech": "David Frindt",
        "branch": "Cleveland",
        "hours": 118.7,
        "contract": 0,
        "laborers": 1,
        "start": "2026-10-16 10:30"
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
        "start": "2026-09-11 11:30"
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
        "start": "2026-09-04 17:56"
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
        "start": "2026-08-22 14:43"
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
        "start": "2026-02-20 14:45"
      }
    ],
    "buckets": {
      "<30m": 5914,
      "30-60m": 1779,
      "1-2h": 3260,
      "2-4h": 1938,
      "4-8h": 507,
      ">8h": 240
    },
    "findings": {
      "concerns": [
        "(unassigned) bills 1.00x actual hours (network avg 0.60x). Review crew sizing or labor allocation.",
        "Darren Vaught bills 1.35x actual hours (network avg 0.60x). Review crew sizing or labor allocation.",
        "Richard Hoffman bills 1.17x actual hours (network avg 0.60x). Review crew sizing or labor allocation.",
        "Will Vickers bills 1.31x actual hours (network avg 0.60x). Review crew sizing or labor allocation.",
        "G3 Construction bills 1.02x actual hours (network avg 0.60x). Review crew sizing or labor allocation.",
        "Andrii Shvets bills 0.89x actual hours (network avg 0.60x). Review crew sizing or labor allocation.",
        "Andrew Pruitt bills 1.13x actual hours (network avg 0.60x). Review crew sizing or labor allocation.",
        "Nick Velazquez bills 1.42x actual hours (network avg 0.60x). Review crew sizing or labor allocation.",
        "Matt Velazquez bills 1.50x actual hours (network avg 0.60x). Review crew sizing or labor allocation.",
        "Jose Cartagena bills 1.85x actual hours (network avg 0.60x). Review crew sizing or labor allocation.",
        "Ethan Epperson bills 1.22x actual hours (network avg 0.60x). Review crew sizing or labor allocation.",
        "Jose Alberto-Amaya bills 0.99x actual hours (network avg 0.60x). Review crew sizing or labor allocation.",
        "Alonzie/Lonnie Wright bills 1.45x actual hours (network avg 0.60x). Review crew sizing or labor allocation.",
        "Ryan Brady bills 1.03x actual hours (network avg 0.60x). Review crew sizing or labor allocation.",
        "Richard Hoffman averages 277min per appointment vs network 147min. Heavy skew on this tech's book.",
        "Santos Alfaro-Delcid averages 365min per appointment vs network 147min. Heavy skew on this tech's book.",
        "Ethan Epperson averages 253min per appointment vs network 147min. Heavy skew on this tech's book.",
        "Daniel Brown averages 1606min per appointment vs network 147min. Heavy skew on this tech's book."
      ],
      "watch": [
        "54 work orders are In Progress 14+ days. Oldest: WO 00231102 (67 days, Walt Weiskopf). Should be closed or escalated.",
        "648 Repair WOs are not yet started; the oldest has been in \"Pending Insurance Claim\" for 299 days (WO 00198032, Associa Tennessee). Slow-scheduling backlog.",
        "25 work orders are eating disproportionate hours vs their contract value. Top offender: WO 00237240 (649.7h on $350 contract).",
        "4247 appointments have no Actual End — either still in progress or never closed out. Likely a data hygiene problem in Salesforce."
      ],
      "positives": [
        "Darren Vaught runs 782 appointments at just 70min avg — efficient dispatch density.",
        "Nick Foster runs 689 appointments at just 93min avg — efficient dispatch density.",
        "Chris Coyour runs 660 appointments at just 119min avg — efficient dispatch density.",
        "Kevin Green runs 576 appointments at just 106min avg — efficient dispatch density.",
        "Will Vickers runs 445 appointments at just 119min avg — efficient dispatch density.",
        "David Frindt runs 443 appointments at just 121min avg — efficient dispatch density.",
        "Wayne Young runs 423 appointments at just 119min avg — efficient dispatch density.",
        "Edwin Irizarry-Vasquez runs 403 appointments at just 111min avg — efficient dispatch density.",
        "Maxwell Sousa runs 397 appointments at just 105min avg — efficient dispatch density.",
        "Wilver Velasquez runs 348 appointments at just 110min avg — efficient dispatch density.",
        "G3 Construction runs 302 appointments at just 7min avg — efficient dispatch density.",
        "Andrii Shvets runs 291 appointments at just 94min avg — efficient dispatch density.",
        "Andrew Pruitt runs 282 appointments at just 72min avg — efficient dispatch density.",
        "Nick Velazquez runs 247 appointments at just 91min avg — efficient dispatch density.",
        "Matt Velazquez runs 211 appointments at just 71min avg — efficient dispatch density.",
        "Gavyn Stone runs 205 appointments at just 110min avg — efficient dispatch density.",
        "Most service tickets close in a single visit (1.24 appointments per WO on average). Low return-trip rate."
      ]
    },
    "benchmarks": {
      "avgBillRatio": 0.603,
      "avgMinPerAppt": 147
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
