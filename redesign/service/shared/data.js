/* AUTO-GENERATED — do not edit. Generated 2026-10-29T16:31:20.639Z (service) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-10-29T16:31:20.639Z",
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
        "elapsedMs": 729,
        "builtAt": "2026-10-29T16:31:20.639Z"
      },
      {
        "id": "service-calls",
        "version": "Service-Calls-v1.1-2026-05-07",
        "elapsedMs": 1086,
        "builtAt": "2026-10-29T16:31:20.639Z"
      }
    ]
  },
  "REVENUE_FORECAST": {
    "_source": "calculator/revenue-forecast-service.js Service-v1.0-2026-05-06",
    "title": "Service Revenue Forecast",
    "subtitle": "Service-v1 · Budget-anchored forecast · Data through 2026-10-28",
    "runDate": "2026-10-29",
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
        "value": "$5.9M",
        "sub": "10 months elapsed · 6079 invoices"
      },
      {
        "label": "YTD vs Plan",
        "value": "$-121,884",
        "sub": "Plan YTD: $6.02M",
        "trend": "negative"
      },
      {
        "label": "Annualized Pace",
        "value": "$7.07M",
        "sub": "YTD × 12/10",
        "trend": "positive"
      },
      {
        "label": "Plan-Rest Forecast",
        "value": "$6.82M",
        "sub": "YTD actual + remaining-month plan"
      },
      {
        "label": "Annual Budget",
        "value": "$6.8M",
        "sub": "2026 Service plan"
      },
      {
        "label": "Forecast vs Budget",
        "value": "+$274K",
        "sub": "0.0% uplift needed",
        "trend": "positive"
      },
      {
        "label": "Last Month Revenue",
        "value": "$550K",
        "sub": "October 2026"
      },
      {
        "label": "Last Month vs Plan",
        "value": "$-215,752",
        "sub": "Plan: $766K"
      }
    ],
    "execSummary": {
      "budget": 6800179.48,
      "modelAnnualInvoiced": 7074558.372000024,
      "gap": 274378.8920000233,
      "narrative": "10 months of FY2026 Service activity reported, $5.9M invoiced YTD. Run-rate annualizes to $7.07M against the $6.8M plan, a $274K lead."
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
        "invoiced": 550224.4099999997,
        "budget": 765976.1409289142,
        "gap": -215751.7309289145
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
      "combinedGP": 898524.7499999999,
      "combinedGP_pct": 50.45285113842327,
      "combinedRevenue": 1780919.6700000018,
      "y2025_GP_pct": 0,
      "y2025_revenue": 0,
      "y2025_jobs": 0,
      "y2026_GP_pct": 50.45285113842327,
      "y2026_revenue": 1780919.6700000018,
      "y2026_jobs": 1055,
      "materialCost": 293618.6600000001,
      "laborCost": 578469.31,
      "otherCost": 9151.459999999997,
      "commissions": 54764.25000000003,
      "materialPctContract": 16.486912068302317,
      "laborPctContract": 32.48149367680349,
      "otherPctContract": 0.513861470236891,
      "commissionPctContract": 3.0750544745232653,
      "sourceFile": "GregProfitabilityServiceResults-2026-10-29.csv",
      "jobsParsed": 1055
    },
    "profitabilityByJobType": [
      {
        "key": "Repair",
        "jobs": 501,
        "revenue": 1272234.9100000006,
        "expenses": 648546.3500000003,
        "gross_profit": 623688.5599999998,
        "material": 231219.50999999983,
        "labor": 409607.83,
        "other": 7704.8099999999995,
        "commission": 54072.09000000002,
        "contract": 1285356.3300000003,
        "gp_pct": 49.02306603109952
      },
      {
        "key": "T&M",
        "jobs": 542,
        "revenue": 493954.76000000007,
        "expenses": 221907.32999999996,
        "gross_profit": 272047.42999999976,
        "material": 58297.909999999974,
        "labor": 161061.72,
        "other": 1446.65,
        "commission": 0,
        "contract": 489563.76000000007,
        "gp_pct": 55.075373704263875
      },
      {
        "key": "Warranty",
        "jobs": 12,
        "revenue": 14730,
        "expenses": 11941.240000000002,
        "gross_profit": 2788.759999999999,
        "material": 4101.24,
        "labor": 7799.76,
        "other": 0,
        "commission": 692.16,
        "contract": 14380,
        "gp_pct": 18.932518669382205
      }
    ],
    "profitabilityByMarket": [
      {
        "key": "Columbus",
        "jobs": 394,
        "revenue": 735620.5900000004,
        "expenses": 371368.19000000035,
        "gross_profit": 364252.39999999997,
        "material": 140084.98999999993,
        "labor": 227798.63000000006,
        "other": 1269.61,
        "commission": 30662.03,
        "contract": 737721.3000000003,
        "gp_pct": 49.51634102574531
      },
      {
        "key": "Detroit Metro",
        "jobs": 122,
        "revenue": 374616.75,
        "expenses": 182938.73000000007,
        "gross_profit": 191678.01999999996,
        "material": 38514.98999999999,
        "labor": 140222.95,
        "other": 4401.1,
        "commission": 9401.56,
        "contract": 382946.75,
        "gp_pct": 51.16643075890226
      },
      {
        "key": "Cincinnati",
        "jobs": 224,
        "revenue": 211914.1,
        "expenses": 129580.41999999994,
        "gross_profit": 82333.68000000005,
        "material": 34915.170000000006,
        "labor": 95035.53,
        "other": 0,
        "commission": 1887.43,
        "contract": 210016.1,
        "gp_pct": 38.852384055615005
      },
      {
        "key": "Raleigh",
        "jobs": 143,
        "revenue": 148261.91,
        "expenses": 65798.02000000002,
        "gross_profit": 82463.89000000001,
        "material": 15082.470000000003,
        "labor": 47604.8,
        "other": 3054.3599999999997,
        "commission": 1331.8500000000001,
        "contract": 147676.85,
        "gp_pct": 55.62041525028243
      },
      {
        "key": "DC Metro",
        "jobs": 45,
        "revenue": 101411.06,
        "expenses": 33386.799999999996,
        "gross_profit": 68024.26,
        "material": 25429.799999999992,
        "labor": 7957,
        "other": 0,
        "commission": 4678.26,
        "contract": 101624.70999999999,
        "gp_pct": 67.07775266326966
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
        "jobs": 823,
        "revenue": 1418389.4000000008,
        "expenses": 686638.0200000001,
        "gross_profit": 731751.3799999999,
        "material": 244550.68999999983,
        "labor": 436783.4,
        "other": 4444.16,
        "commission": 49358.58000000001,
        "contract": 1419102.910000001,
        "gp_pct": 51.59030235279533
      },
      {
        "key": "Siding",
        "jobs": 93,
        "revenue": 143753.16,
        "expenses": 74829.43999999996,
        "gross_profit": 68923.72000000002,
        "material": 16913.530000000002,
        "labor": 54510.060000000005,
        "other": 3233.9300000000003,
        "commission": 1219.1399999999999,
        "contract": 153688.26000000004,
        "gp_pct": 47.945881676618455
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
        "jobs": 17,
        "revenue": 42081.95,
        "expenses": 28910.949999999997,
        "gross_profit": 13171.000000000002,
        "material": 13682.94,
        "labor": 15105.7,
        "other": 151.11,
        "commission": 1199.98,
        "contract": 42907.76,
        "gp_pct": 31.29845456306089
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
        "Service tracking ahead of plan by $274K. Hold pace."
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
            "$550K",
            "$766K",
            "$-215,752",
            547
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
            "$1.94M",
            1937
          ],
          [
            "Detroit",
            "$1.41M",
            1035
          ],
          [
            "Raleigh",
            "$793K",
            1047
          ],
          [
            "Cincinnati",
            "$544K",
            847
          ],
          [
            "DC Metro",
            "$471K",
            293
          ],
          [
            "Cleveland",
            "$273K",
            414
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
              550224.4099999997,
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
                  550224.4099999997,
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
      550224.4099999997,
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
      550224.4099999997,
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
      "source": "ServiceInvoicedYTDResults-2026-10-29.csv",
      "format": "per-invoice",
      "totalInvoiced": 5895465.310000019,
      "invoiceCount": 6079,
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
        550224.4099999997,
        0,
        0
      ],
      "byBranch": {
        "Cincinnati": {
          "invoiced": 543699.6000000001,
          "count": 847
        },
        "Raleigh": {
          "invoiced": 793263.9800000024,
          "count": 1047
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
          "invoiced": 1406316.49,
          "count": 1035
        },
        "Columbus": {
          "invoiced": 1939528.5700000029,
          "count": 1937
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
          "invoiced": 273490.42000000004,
          "count": 414
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
      "latestInvoiceDate": "2026-10-28"
    },
    "installServiceOverlap": {
      "sourceFile": "All Jobs with WOs and SAs-2026-10-29-12-28-10.xlsx",
      "rowCount": 21960,
      "totals": {
        "installJobs": 5110,
        "installJobsWithSvc": 712,
        "installAccounts": 4658,
        "installAccountsWithSvc": 471,
        "repairWOsAtInstallAccts": 6991,
        "hoursAtInstallAccts": 0,
        "avgHoursPerWO": 0,
        "repairAmtAtInstallAccts": 4895761
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
          "installJobs": 1883,
          "installJobsWithSvc": 275,
          "repairWOs": 2058,
          "hours": 0,
          "repairAmt": 1190423.9300000016
        },
        {
          "branch": "Detroit",
          "installJobs": 717,
          "installJobsWithSvc": 92,
          "repairWOs": 1099,
          "hours": 0,
          "repairAmt": 956683.6199999999
        },
        {
          "branch": "Cleveland",
          "installJobs": 601,
          "installJobsWithSvc": 83,
          "repairWOs": 514,
          "hours": 0,
          "repairAmt": 578355.8499999999
        },
        {
          "branch": "Raleigh",
          "installJobs": 226,
          "installJobsWithSvc": 64,
          "repairWOs": 1686,
          "hours": 0,
          "repairAmt": 875917
        },
        {
          "branch": "Cincinnati",
          "installJobs": 284,
          "installJobsWithSvc": 51,
          "repairWOs": 1002,
          "hours": 0,
          "repairAmt": 332139.13
        },
        {
          "branch": "DC Metro",
          "installJobs": 333,
          "installJobsWithSvc": 42,
          "repairWOs": 228,
          "hours": 0,
          "repairAmt": 621775
        },
        {
          "branch": "Nashville",
          "installJobs": 287,
          "installJobsWithSvc": 38,
          "repairWOs": 78,
          "hours": 0,
          "repairAmt": 32174
        },
        {
          "branch": "Dayton",
          "installJobs": 233,
          "installJobsWithSvc": 29,
          "repairWOs": 188,
          "hours": 0,
          "repairAmt": 64735
        },
        {
          "branch": "Richmond",
          "installJobs": 236,
          "installJobsWithSvc": 20,
          "repairWOs": 85,
          "hours": 0,
          "repairAmt": 214477.5
        },
        {
          "branch": "Knoxville",
          "installJobs": 158,
          "installJobsWithSvc": 9,
          "repairWOs": 8,
          "hours": 0,
          "repairAmt": 2600
        },
        {
          "branch": "Indianapolis",
          "installJobs": 6,
          "installJobsWithSvc": 5,
          "repairWOs": 39,
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
          "installJobs": 3561,
          "installJobsWithSvc": 490,
          "repairWOs": 5930,
          "hours": 0,
          "repairAmt": 4107288.0400000014
        },
        {
          "trade": "Gutters",
          "installJobs": 984,
          "installJobsWithSvc": 136,
          "repairWOs": 528,
          "hours": 0,
          "repairAmt": 377186.74
        },
        {
          "trade": "Siding",
          "installJobs": 375,
          "installJobsWithSvc": 56,
          "repairWOs": 390,
          "hours": 0,
          "repairAmt": 312065.79000000004
        },
        {
          "trade": "Other",
          "installJobs": 13,
          "installJobsWithSvc": 9,
          "repairWOs": 33,
          "hours": 0,
          "repairAmt": 19045
        },
        {
          "trade": "Windows",
          "installJobs": 44,
          "installJobsWithSvc": 6,
          "repairWOs": 76,
          "hours": 0,
          "repairAmt": 42188.45999999999
        },
        {
          "trade": "Masonry",
          "installJobs": 30,
          "installJobsWithSvc": 4,
          "repairWOs": 19,
          "hours": 0,
          "repairAmt": 25855
        },
        {
          "trade": "Flat Roof",
          "installJobs": 16,
          "installJobsWithSvc": 4,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Rack Mounted Solar",
          "installJobs": 27,
          "installJobsWithSvc": 2,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Carpentry",
          "installJobs": 8,
          "installJobsWithSvc": 2,
          "repairWOs": 9,
          "hours": 0,
          "repairAmt": 6450
        },
        {
          "trade": "Electrical",
          "installJobs": 2,
          "installJobsWithSvc": 1,
          "repairWOs": 0,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Skylights",
          "installJobs": 11,
          "installJobsWithSvc": 1,
          "repairWOs": 1,
          "hours": 0,
          "repairAmt": 4400
        },
        {
          "trade": "Painting",
          "installJobs": 8,
          "installJobsWithSvc": 1,
          "repairWOs": 4,
          "hours": 0,
          "repairAmt": 0
        },
        {
          "trade": "Metal",
          "installJobs": 24,
          "installJobsWithSvc": 0,
          "repairWOs": 0,
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
          "trade": "Door",
          "installJobs": 0,
          "installJobsWithSvc": 0,
          "repairWOs": 1,
          "hours": 0,
          "repairAmt": 1282
        },
        {
          "trade": "Stucco",
          "installJobs": 2,
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
          "repairAmt": 22075
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
          "repairWOs": 46,
          "hours": 0,
          "repairAmt": 13300
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
          "repairWOs": 71,
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
          "repairWOs": 274,
          "hours": 0,
          "repairAmt": 81090
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
          "acctRepairAmt": 22075
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
          "acctRepairAmt": 22075
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
          "acctRepairAmt": 22075
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
          "acctRepairAmt": 22075
        },
        {
          "jobNumber": "Job-106687",
          "account": "Management Plus",
          "branch": "Cincinnati",
          "trade": "Other",
          "salesperson": "Mark Leedy",
          "installAmt": 32200,
          "acctRepairWOs": 46,
          "acctHours": 0,
          "acctRepairAmt": 13300
        },
        {
          "jobNumber": "Job-111089",
          "account": "Management Plus",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 221438.74,
          "acctRepairWOs": 46,
          "acctHours": 0,
          "acctRepairAmt": 13300
        },
        {
          "jobNumber": "Job-111090",
          "account": "Management Plus",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 182484.14,
          "acctRepairWOs": 46,
          "acctHours": 0,
          "acctRepairAmt": 13300
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
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 33431,
          "acctRepairWOs": 71,
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
          "acctRepairWOs": 71,
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
          "acctRepairWOs": 71,
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
          "acctRepairWOs": 71,
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
          "acctRepairWOs": 274,
          "acctHours": 0,
          "acctRepairAmt": 81090
        },
        {
          "jobNumber": "Job-108754",
          "account": "Towne Properties - Cincinnati West District Office",
          "branch": "Cincinnati",
          "trade": "Siding",
          "salesperson": "Mark Leedy",
          "installAmt": 4500,
          "acctRepairWOs": 274,
          "acctHours": 0,
          "acctRepairAmt": 81090
        },
        {
          "jobNumber": "Job-122168",
          "account": "Towne Properties - Cincinnati West District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 60817,
          "acctRepairWOs": 274,
          "acctHours": 0,
          "acctRepairAmt": 81090
        },
        {
          "jobNumber": "Job-122190",
          "account": "Towne Properties - Cincinnati West District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 65438,
          "acctRepairWOs": 274,
          "acctHours": 0,
          "acctRepairAmt": 81090
        },
        {
          "jobNumber": "Job-122773",
          "account": "Towne Properties - Cincinnati West District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 114155,
          "acctRepairWOs": 274,
          "acctHours": 0,
          "acctRepairAmt": 81090
        },
        {
          "jobNumber": "Job-108416",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 56812.3,
          "acctRepairWOs": 364,
          "acctHours": 0,
          "acctRepairAmt": 130155
        },
        {
          "jobNumber": "Job-108707",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Gutters",
          "salesperson": "Mark Leedy",
          "installAmt": 7074,
          "acctRepairWOs": 364,
          "acctHours": 0,
          "acctRepairAmt": 130155
        },
        {
          "jobNumber": "Job-112768",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 129146.36,
          "acctRepairWOs": 364,
          "acctHours": 0,
          "acctRepairAmt": 130155
        },
        {
          "jobNumber": "Job-115219",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Gutters",
          "salesperson": "Mark Leedy",
          "installAmt": 98128,
          "acctRepairWOs": 364,
          "acctHours": 0,
          "acctRepairAmt": 130155
        },
        {
          "jobNumber": "Job-116644",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 107499.01,
          "acctRepairWOs": 364,
          "acctHours": 0,
          "acctRepairAmt": 130155
        },
        {
          "jobNumber": "Job-120329",
          "account": "Towne Properties - East Cincinnati District Office",
          "branch": "Cincinnati",
          "trade": "Roofing",
          "salesperson": "Mark Leedy",
          "installAmt": 57674,
          "acctRepairWOs": 364,
          "acctHours": 0,
          "acctRepairAmt": 130155
        }
      ]
    },
    "tabs": []
  },
  "SERVICE_CALLS": {
    "_source": "calculator/service-calls.js Service-Calls-v1.1-2026-05-07",
    "title": "Service Calls YTD",
    "subtitle": "Service Appointments · 13,538 calls across 97 techs · ",
    "sourceFile": "Service Appointments YTD-2026-10-29-12-28-10.xlsx",
    "headerMeta": {
      "totalAppts": 13538,
      "uniqTechs": 97,
      "uniqWOs": 10939,
      "uniqAccounts": 3900,
      "uniqJobs": 10387,
      "totalHours": 24945,
      "totalBillable": 15554,
      "networkBillRatio": 0.624,
      "totalContract": 9923978.72,
      "avgMinPerAppt": 111,
      "aptsCompleted": 0,
      "aptsOpen": 13538,
      "monthsCovered": 0
    },
    "kpis": [
      {
        "label": "Appointments YTD",
        "value": "13,538",
        "sub": "0 months · 10,939 work orders",
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
        "value": "24,945 h",
        "sub": "avg 111 min/appt",
        "tone": "info"
      },
      {
        "label": "Billable Man-Hours",
        "value": "15,554 h",
        "sub": "0.60x actual (laborers × time)",
        "tone": "info"
      },
      {
        "label": "Contract $ on Calls",
        "value": "$9.92M",
        "sub": "3,900 unique accounts",
        "tone": "good"
      },
      {
        "label": "Open Appointments",
        "value": "13,538",
        "sub": "no Actual End in Salesforce",
        "tone": "warn"
      }
    ],
    "monthly": [],
    "techRows": [
      {
        "tech": "(unassigned)",
        "count": 1811,
        "hours": 7.5,
        "billHours": 7.5,
        "billRatio": 1,
        "avgMinPerAppt": 0,
        "contract": 1384691.66,
        "avgContract": 765,
        "jobs": 1772,
        "accounts": 1262,
        "branches": "Cincinnati, Cleveland, Columbus, DC Metro, Dayton, Detroit, Grand Rapids, Greenville, Indianapolis, Knoxville, Nashville, Raleigh, Richmond"
      },
      {
        "tech": "Matt Large",
        "count": 793,
        "hours": 1788.4,
        "billHours": 606.5,
        "billRatio": 0.33899999999999997,
        "avgMinPerAppt": 135,
        "contract": 344592.46,
        "avgContract": 435,
        "jobs": 689,
        "accounts": 288,
        "branches": "Columbus, Dayton"
      },
      {
        "tech": "Darren Vaught",
        "count": 776,
        "hours": 905,
        "billHours": 1227.5,
        "billRatio": 1.3559999999999999,
        "avgMinPerAppt": 70,
        "contract": 284121.33,
        "avgContract": 366,
        "jobs": 708,
        "accounts": 304,
        "branches": "Columbus"
      },
      {
        "tech": "Nick Foster",
        "count": 686,
        "hours": 1051.2,
        "billHours": 492.5,
        "billRatio": 0.469,
        "avgMinPerAppt": 92,
        "contract": 326509.3,
        "avgContract": 476,
        "jobs": 652,
        "accounts": 137,
        "branches": "Raleigh"
      },
      {
        "tech": "Chris Coyour",
        "count": 653,
        "hours": 1297.1,
        "billHours": 622.5,
        "billRatio": 0.48,
        "avgMinPerAppt": 119,
        "contract": 343729.76,
        "avgContract": 526,
        "jobs": 587,
        "accounts": 133,
        "branches": "Greenville, Raleigh"
      },
      {
        "tech": "Randy Pfeiffer",
        "count": 589,
        "hours": 1333.9,
        "billHours": 837,
        "billRatio": 0.627,
        "avgMinPerAppt": 136,
        "contract": 154528.53,
        "avgContract": 262,
        "jobs": 493,
        "accounts": 217,
        "branches": "Cincinnati, Columbus, Dayton, Detroit, Indianapolis"
      },
      {
        "tech": "Kevin Green",
        "count": 574,
        "hours": 1010.5,
        "billHours": 382.5,
        "billRatio": 0.379,
        "avgMinPerAppt": 106,
        "contract": 204634.4,
        "avgContract": 357,
        "jobs": 532,
        "accounts": 106,
        "branches": "Raleigh"
      },
      {
        "tech": "Richard Hoffman",
        "count": 466,
        "hours": 2164.4,
        "billHours": 2529.5,
        "billRatio": 1.169,
        "avgMinPerAppt": 279,
        "contract": 448526.22,
        "avgContract": 963,
        "jobs": 411,
        "accounts": 187,
        "branches": "Cincinnati, Cleveland, Columbus, Detroit"
      },
      {
        "tech": "Will Vickers",
        "count": 453,
        "hours": 876.1,
        "billHours": 1159,
        "billRatio": 1.3230000000000002,
        "avgMinPerAppt": 116,
        "contract": 282901.28,
        "avgContract": 625,
        "jobs": 392,
        "accounts": 133,
        "branches": "Cleveland, Detroit, Grand Rapids"
      },
      {
        "tech": "David Frindt",
        "count": 441,
        "hours": 890.2,
        "billHours": 399.5,
        "billRatio": 0.449,
        "avgMinPerAppt": 121,
        "contract": 353475.89,
        "avgContract": 802,
        "jobs": 370,
        "accounts": 175,
        "branches": "Cleveland, Columbus"
      },
      {
        "tech": "Wayne Young",
        "count": 418,
        "hours": 834.3,
        "billHours": 6,
        "billRatio": 0.006999999999999999,
        "avgMinPerAppt": 120,
        "contract": 167674.97,
        "avgContract": 401,
        "jobs": 375,
        "accounts": 180,
        "branches": "Columbus"
      },
      {
        "tech": "Ricardo Nunez",
        "count": 406,
        "hours": 1276.4,
        "billHours": 650,
        "billRatio": 0.509,
        "avgMinPerAppt": 189,
        "contract": 321746,
        "avgContract": 792,
        "jobs": 374,
        "accounts": 142,
        "branches": "Detroit, Grand Rapids"
      },
      {
        "tech": "Edwin Irizarry-Vasquez",
        "count": 402,
        "hours": 713.9,
        "billHours": 502.5,
        "billRatio": 0.7040000000000001,
        "avgMinPerAppt": 107,
        "contract": 314118.7,
        "avgContract": 781,
        "jobs": 358,
        "accounts": 140,
        "branches": "Detroit, Grand Rapids"
      },
      {
        "tech": "Maxwell Sousa",
        "count": 393,
        "hours": 639.3,
        "billHours": 3,
        "billRatio": 0.005,
        "avgMinPerAppt": 98,
        "contract": 200225.39,
        "avgContract": 509,
        "jobs": 339,
        "accounts": 96,
        "branches": "Cincinnati, Dayton, Raleigh"
      },
      {
        "tech": "Wilver Velasquez",
        "count": 331,
        "hours": 631.8,
        "billHours": 247.5,
        "billRatio": 0.392,
        "avgMinPerAppt": 115,
        "contract": 407882.19,
        "avgContract": 1232,
        "jobs": 299,
        "accounts": 169,
        "branches": "Columbus, DC Metro, Detroit, Richmond"
      },
      {
        "tech": "Rene Alvarado",
        "count": 307,
        "hours": 844.9,
        "billHours": 278.5,
        "billRatio": 0.33,
        "avgMinPerAppt": 165,
        "contract": 161656.44,
        "avgContract": 527,
        "jobs": 254,
        "accounts": 148,
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
        "count": 290,
        "hours": 1763.2,
        "billHours": 1480.5,
        "billRatio": 0.84,
        "avgMinPerAppt": 365,
        "contract": 397695.69,
        "avgContract": 1371,
        "jobs": 236,
        "accounts": 160,
        "branches": "DC Metro, Nashville, Richmond"
      },
      {
        "tech": "Andrii Shvets",
        "count": 285,
        "hours": 450.1,
        "billHours": 406.5,
        "billRatio": 0.903,
        "avgMinPerAppt": 95,
        "contract": 73188.33,
        "avgContract": 257,
        "jobs": 253,
        "accounts": 105,
        "branches": "Cincinnati, Columbus, Dayton, Detroit, Indianapolis"
      },
      {
        "tech": "Andrew Pruitt",
        "count": 272,
        "hours": 330.2,
        "billHours": 380.5,
        "billRatio": 1.1520000000000001,
        "avgMinPerAppt": 73,
        "contract": 68125,
        "avgContract": 250,
        "jobs": 251,
        "accounts": 73,
        "branches": "Cincinnati, Columbus, Dayton, Indianapolis"
      },
      {
        "tech": "Israel Velasquez",
        "count": 261,
        "hours": 833.6,
        "billHours": 336,
        "billRatio": 0.40299999999999997,
        "avgMinPerAppt": 192,
        "contract": 415281.4,
        "avgContract": 1591,
        "jobs": 212,
        "accounts": 141,
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
        "count": 221,
        "hours": 671.9,
        "billHours": 1,
        "billRatio": 0.001,
        "avgMinPerAppt": 182,
        "contract": 185338.7,
        "avgContract": 839,
        "jobs": 197,
        "accounts": 87,
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
        "count": 195,
        "hours": 0,
        "billHours": 1,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 479494.62,
        "avgContract": 2459,
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
        "count": 146,
        "hours": 670.2,
        "billHours": 815.5,
        "billRatio": 1.217,
        "avgMinPerAppt": 275,
        "contract": 105657,
        "avgContract": 724,
        "jobs": 135,
        "accounts": 60,
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
        "count": 79,
        "hours": 0,
        "billHours": 2,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 150222.63,
        "avgContract": 1902,
        "jobs": 79,
        "accounts": 57,
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
        "count": 22,
        "hours": 0,
        "billHours": 0,
        "billRatio": 0,
        "avgMinPerAppt": 0,
        "contract": 191650.97,
        "avgContract": 8711,
        "jobs": 21,
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
        "count": 11,
        "hours": 23.5,
        "billHours": 47,
        "billRatio": 1.9969999999999999,
        "avgMinPerAppt": 128,
        "contract": 20130,
        "avgContract": 1830,
        "jobs": 11,
        "accounts": 9,
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
        "contract": 50978.32,
        "avgContract": 7283,
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
        "tech": "Jonnell Morgan",
        "count": 4,
        "hours": 6.8,
        "billHours": 7,
        "billRatio": 1.037,
        "avgMinPerAppt": 101,
        "contract": 900,
        "avgContract": 225,
        "jobs": 4,
        "accounts": 4,
        "branches": "Cincinnati, Dayton"
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
        "count": 4447,
        "techs": 44,
        "accounts": 1550,
        "hours": 5463.8,
        "billHours": 3559.5,
        "contract": 2687465.61,
        "avgMinPerAppt": 74
      },
      {
        "branch": "Raleigh",
        "count": 2383,
        "techs": 8,
        "accounts": 309,
        "hours": 5444.2,
        "billHours": 1571,
        "contract": 1178731.6,
        "avgMinPerAppt": 137
      },
      {
        "branch": "Detroit",
        "count": 2115,
        "techs": 22,
        "accounts": 554,
        "hours": 4217.7,
        "billHours": 3169,
        "contract": 2502136.02,
        "avgMinPerAppt": 120
      },
      {
        "branch": "Cincinnati",
        "count": 1570,
        "techs": 21,
        "accounts": 359,
        "hours": 2022.9,
        "billHours": 872.5,
        "contract": 574389.53,
        "avgMinPerAppt": 77
      },
      {
        "branch": "Cleveland",
        "count": 988,
        "techs": 9,
        "accounts": 318,
        "hours": 3050.7,
        "billHours": 2921,
        "contract": 861405.05,
        "avgMinPerAppt": 185
      },
      {
        "branch": "DC Metro",
        "count": 826,
        "techs": 11,
        "accounts": 346,
        "hours": 2977.4,
        "billHours": 1990,
        "contract": 1277230.86,
        "avgMinPerAppt": 216
      },
      {
        "branch": "Nashville",
        "count": 486,
        "techs": 6,
        "accounts": 232,
        "hours": 1104.5,
        "billHours": 535.5,
        "contract": 253330.16,
        "avgMinPerAppt": 136
      },
      {
        "branch": "Dayton",
        "count": 431,
        "techs": 17,
        "accounts": 178,
        "hours": 473.4,
        "billHours": 770.5,
        "contract": 272721.75,
        "avgMinPerAppt": 66
      },
      {
        "branch": "Richmond",
        "count": 185,
        "techs": 8,
        "accounts": 79,
        "hours": 68.6,
        "billHours": 64,
        "contract": 269449.86,
        "avgMinPerAppt": 22
      },
      {
        "branch": "Indianapolis",
        "count": 76,
        "techs": 8,
        "accounts": 27,
        "hours": 93.4,
        "billHours": 73.5,
        "contract": 24530,
        "avgMinPerAppt": 74
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
        "count": 540,
        "jobs": 424,
        "hours": 1562.9,
        "billHours": 384.5,
        "contract": 322034.87,
        "branches": "Columbus"
      },
      {
        "account": "Priestley Management Company",
        "count": 421,
        "jobs": 302,
        "hours": 802.1,
        "billHours": 334,
        "contract": 308308,
        "branches": "Raleigh"
      },
      {
        "account": "Capital Property Solutions",
        "count": 390,
        "jobs": 294,
        "hours": 533,
        "billHours": 406.5,
        "contract": 205521.08,
        "branches": "Columbus"
      },
      {
        "account": "Charleston Management",
        "count": 372,
        "jobs": 268,
        "hours": 885.5,
        "billHours": 148,
        "contract": 197725,
        "branches": "Raleigh"
      },
      {
        "account": "Towne Properties - East Cincinnati District Office",
        "count": 364,
        "jobs": 321,
        "hours": 452.1,
        "billHours": 225.5,
        "contract": 130155,
        "branches": "Cincinnati"
      },
      {
        "account": "Towne Properties - Cincinnati West District Office",
        "count": 274,
        "jobs": 242,
        "hours": 243,
        "billHours": 127,
        "contract": 81090,
        "branches": "Cincinnati, Dayton"
      },
      {
        "account": "Condo Management of Columbus",
        "count": 273,
        "jobs": 209,
        "hours": 297.3,
        "billHours": 172,
        "contract": 169429.67,
        "branches": "Cincinnati, Columbus"
      },
      {
        "account": "Towne Properties - Raleigh District",
        "count": 265,
        "jobs": 199,
        "hours": 454.5,
        "billHours": 166.5,
        "contract": 111310,
        "branches": "Raleigh"
      },
      {
        "account": "KS Management",
        "count": 241,
        "jobs": 185,
        "hours": 284.2,
        "billHours": 177.5,
        "contract": 167227.94,
        "branches": "DC Metro, Detroit, Grand Rapids"
      },
      {
        "account": "Professional Properties Management",
        "count": 240,
        "jobs": 183,
        "hours": 515.6,
        "billHours": 151.5,
        "contract": 114864,
        "branches": "Raleigh"
      },
      {
        "account": "Compass Management Professionals",
        "count": 223,
        "jobs": 170,
        "hours": 272.8,
        "billHours": 250.5,
        "contract": 193216.94,
        "branches": "Detroit"
      },
      {
        "account": "Associated Property Management, LLC",
        "count": 221,
        "jobs": 169,
        "hours": 443.8,
        "billHours": 205,
        "contract": 147020.46,
        "branches": "Cincinnati, Cleveland, Columbus, Dayton"
      },
      {
        "account": "Singh Management",
        "count": 200,
        "jobs": 152,
        "hours": 910.1,
        "billHours": 825,
        "contract": 247104.8,
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
        "hours": 146.3,
        "billHours": 118,
        "contract": 61390,
        "branches": "Cincinnati, Dayton"
      },
      {
        "account": "Associa On Call",
        "count": 143,
        "jobs": 108,
        "hours": 132.3,
        "billHours": 67.5,
        "contract": 74597.94,
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
        "count": 103,
        "jobs": 84,
        "hours": 218.9,
        "billHours": 119.5,
        "contract": 35950,
        "branches": "Cincinnati, Nashville, Knoxville"
      },
      {
        "account": "Link Real Estate Group",
        "count": 89,
        "jobs": 64,
        "hours": 76.6,
        "billHours": 44,
        "contract": 40497.56,
        "branches": "Cincinnati, Columbus"
      },
      {
        "account": "In Rhodes Management, Inc",
        "count": 87,
        "jobs": 63,
        "hours": 158.6,
        "billHours": 479,
        "contract": 166625,
        "branches": "Detroit"
      },
      {
        "account": "Sentry Management - Columbus",
        "count": 76,
        "jobs": 63,
        "hours": 65.6,
        "billHours": 52,
        "contract": 33902.18,
        "branches": "Columbus"
      },
      {
        "account": "Stonegate Property Management - Northern Kentucky",
        "count": 71,
        "jobs": 58,
        "hours": 48.6,
        "billHours": 26,
        "contract": 25375,
        "branches": "Cincinnati"
      },
      {
        "account": "Towne Properties - Northern Kentucky",
        "count": 69,
        "jobs": 51,
        "hours": 286.5,
        "billHours": 22,
        "contract": 22075,
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
        "count": 64,
        "jobs": 56,
        "hours": 60.4,
        "billHours": 64,
        "contract": 42031,
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
          "days": 62.77,
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
          "days": 61.77,
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
          "days": 57.03,
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
          "days": 50.97,
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
          "days": 48.17,
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
          "days": 44.07,
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
          "days": 44.02,
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
          "days": 43.14,
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
          "days": 43.11,
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
          "days": 43.03,
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
          "days": 42.06,
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
          "days": 41.96,
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
          "days": 41.81,
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
          "days": 41.04,
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
          "days": 39.82,
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
          "days": 37,
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
          "days": 37,
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
          "days": 36.97,
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
          "days": 36.01,
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
          "days": 35.92,
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
          "days": 35.86,
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
          "days": 33.85,
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
          "days": 33.84,
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
          "days": 31,
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
          "days": 30.02,
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
          "days": 29.88,
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
          "days": 29.15,
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
          "days": 29.13,
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
          "days": 27.89,
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
          "days": 27.14,
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
          "days": 27.12,
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
          "days": 24.13,
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
          "days": 24.11,
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
          "days": 23.87,
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
          "days": 23.74,
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
          "days": 22.96,
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
          "days": 22.95,
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
          "days": 22.91,
          "contract": 0,
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
          "days": 22.9,
          "contract": 350,
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
          "days": 22.9,
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
          "days": 22.85,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00238183",
          "account": "Sentry Management - Columbus",
          "branch": "Columbus",
          "trade": "Roofing",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 21.85,
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
          "days": 20.97,
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
          "days": 20.94,
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
          "days": 16.94,
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
          "days": 16.11,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00238531",
          "account": "Michelle Steele",
          "branch": "Columbus",
          "trade": "Siding",
          "status": "In Progress",
          "subStatus": "Quote Required",
          "days": 15.92,
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
          "days": 15.02,
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
          "days": 14.84,
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
          "days": 294.98,
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
          "days": 286.05,
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
          "days": 282.93,
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
          "days": 238,
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
          "days": 155.07,
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
          "days": 153.87,
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
          "days": 114.07,
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
          "days": 107.98,
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
          "days": 93.93,
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
          "days": 85.93,
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
          "days": 84.02,
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
          "days": 79.83,
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
          "days": 77.88,
          "contract": 350,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00230888",
          "account": "Kare Condominium Management Company",
          "branch": "Cleveland",
          "trade": "Windows",
          "status": "Ready to Schedule",
          "subStatus": "",
          "days": 76.06,
          "contract": 0,
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
          "days": 71.06,
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
          "days": 70.73,
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
          "days": 62.01,
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
          "days": 50.08,
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
          "days": 49.02,
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
          "days": 48.86,
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
          "days": 48.82,
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
          "days": 48.73,
          "contract": 2687,
          "contractSigned": null,
          "hasSA": false
        },
        {
          "wo": "00235475",
          "account": "Karen & Dorothy Andermills",
          "branch": "Columbus",
          "trade": "Gutters",
          "status": "Ready to Schedule",
          "subStatus": "",
          "days": 43.83,
          "contract": 0,
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
          "days": 43.08,
          "contract": 0,
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
          "days": 42.68,
          "contract": 0,
          "contractSigned": null,
          "hasSA": false
        }
      ],
      "notStartedByStatus": [
        {
          "status": "Scheduled",
          "count": 330,
          "avgDays": 8.3,
          "maxDays": 85.9
        },
        {
          "status": "Ready to Schedule",
          "count": 154,
          "avgDays": 15.5,
          "maxDays": 155.1
        },
        {
          "status": "Pending Estimate Approval",
          "count": 106,
          "avgDays": 18.6,
          "maxDays": 108
        },
        {
          "status": "New",
          "count": 42,
          "avgDays": 0.3,
          "maxDays": 8
        },
        {
          "status": "On Hold",
          "count": 26,
          "avgDays": 24.4,
          "maxDays": 114.1
        },
        {
          "status": "Pending Insurance Claim",
          "count": 4,
          "avgDays": 275.5,
          "maxDays": 295
        }
      ],
      "notStartedTotal": 662,
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
          "appointments": 11,
          "hours": 49.9,
          "billHours": 56,
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
          "wo": "00218367",
          "account": "Tanks Direct- John Massey",
          "branch": "DC Metro",
          "tech": "Wilver Velasquez",
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
          "wo": "00219852",
          "account": "Comsource Management, Inc.",
          "branch": "DC Metro",
          "tech": "Santos Alfaro-Delcid",
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
          "tech": "Wilver Velasquez",
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
          "tech": "Santos Alfaro-Delcid",
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
          "wo": "00237240",
          "account": "Associa HRW Inc",
          "branch": "Raleigh",
          "tech": "Daniel Brown",
          "appointments": 1,
          "hours": 649.7,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 185.6,
          "oldest": null,
          "newest": null,
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
          "wo": "00236008",
          "account": "Singh Management",
          "branch": "Detroit",
          "tech": "Tristan Waters",
          "appointments": 2,
          "hours": 257,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 73.4,
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
          "appointments": 2,
          "hours": 60.6,
          "billHours": 0,
          "contract": 350,
          "hoursPer100": 17.3,
          "oldest": null,
          "newest": null,
          "spanDays": 0
        },
        {
          "wo": "00238838",
          "account": "Towne Properties - Raleigh District",
          "branch": "Raleigh",
          "tech": "Chris Coyour",
          "appointments": 3,
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
          "tech": "Santos Alfaro-Delcid",
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
        "wo": "00237240",
        "account": "Associa HRW Inc",
        "tech": "Daniel Brown",
        "branch": "Raleigh",
        "hours": 649.7,
        "contract": 350,
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
        "wo": "00236008",
        "account": "Singh Management",
        "tech": "Tristan Waters",
        "branch": "Detroit",
        "hours": 257,
        "contract": 350,
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
        "wo": "00238747",
        "account": "Christine Ann Sutcliffe",
        "tech": "David Frindt",
        "branch": "Cleveland",
        "hours": 118.7,
        "contract": 0,
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
      }
    ],
    "buckets": {
      "<30m": 5880,
      "30-60m": 1766,
      "1-2h": 3234,
      "2-4h": 1921,
      "4-8h": 504,
      ">8h": 233
    },
    "findings": {
      "concerns": [
        "(unassigned) bills 1.00x actual hours (network avg 0.61x). Review crew sizing or labor allocation.",
        "Darren Vaught bills 1.36x actual hours (network avg 0.61x). Review crew sizing or labor allocation.",
        "Richard Hoffman bills 1.17x actual hours (network avg 0.61x). Review crew sizing or labor allocation.",
        "Will Vickers bills 1.32x actual hours (network avg 0.61x). Review crew sizing or labor allocation.",
        "G3 Construction bills 1.02x actual hours (network avg 0.61x). Review crew sizing or labor allocation.",
        "Andrii Shvets bills 0.90x actual hours (network avg 0.61x). Review crew sizing or labor allocation.",
        "Andrew Pruitt bills 1.15x actual hours (network avg 0.61x). Review crew sizing or labor allocation.",
        "Nick Velazquez bills 1.42x actual hours (network avg 0.61x). Review crew sizing or labor allocation.",
        "Matt Velazquez bills 1.50x actual hours (network avg 0.61x). Review crew sizing or labor allocation.",
        "Jose Cartagena bills 1.85x actual hours (network avg 0.61x). Review crew sizing or labor allocation.",
        "Ethan Epperson bills 1.22x actual hours (network avg 0.61x). Review crew sizing or labor allocation.",
        "Jose Alberto-Amaya bills 0.99x actual hours (network avg 0.61x). Review crew sizing or labor allocation.",
        "Alonzie/Lonnie Wright bills 1.45x actual hours (network avg 0.61x). Review crew sizing or labor allocation.",
        "Ryan Brady bills 1.03x actual hours (network avg 0.61x). Review crew sizing or labor allocation.",
        "Richard Hoffman averages 279min per appointment vs network 147min. Heavy skew on this tech's book.",
        "Santos Alfaro-Delcid averages 365min per appointment vs network 147min. Heavy skew on this tech's book.",
        "Ethan Epperson averages 275min per appointment vs network 147min. Heavy skew on this tech's book.",
        "Daniel Brown averages 1606min per appointment vs network 147min. Heavy skew on this tech's book."
      ],
      "watch": [
        "49 work orders are In Progress 14+ days. Oldest: WO 00231102 (63 days, Walt Weiskopf). Should be closed or escalated.",
        "662 Repair WOs are not yet started; the oldest has been in \"Pending Insurance Claim\" for 295 days (WO 00198032, Associa Tennessee). Slow-scheduling backlog.",
        "25 work orders are eating disproportionate hours vs their contract value. Top offender: WO 00237240 (649.7h on $350 contract).",
        "13538 appointments have no Actual End — either still in progress or never closed out. Likely a data hygiene problem in Salesforce."
      ],
      "positives": [
        "Darren Vaught runs 776 appointments at just 70min avg — efficient dispatch density.",
        "Nick Foster runs 686 appointments at just 92min avg — efficient dispatch density.",
        "Chris Coyour runs 653 appointments at just 119min avg — efficient dispatch density.",
        "Kevin Green runs 574 appointments at just 106min avg — efficient dispatch density.",
        "Will Vickers runs 453 appointments at just 116min avg — efficient dispatch density.",
        "David Frindt runs 441 appointments at just 121min avg — efficient dispatch density.",
        "Wayne Young runs 418 appointments at just 120min avg — efficient dispatch density.",
        "Edwin Irizarry-Vasquez runs 402 appointments at just 107min avg — efficient dispatch density.",
        "Maxwell Sousa runs 393 appointments at just 98min avg — efficient dispatch density.",
        "Wilver Velasquez runs 331 appointments at just 115min avg — efficient dispatch density.",
        "G3 Construction runs 302 appointments at just 7min avg — efficient dispatch density.",
        "Andrii Shvets runs 285 appointments at just 95min avg — efficient dispatch density.",
        "Andrew Pruitt runs 272 appointments at just 73min avg — efficient dispatch density.",
        "Nick Velazquez runs 247 appointments at just 91min avg — efficient dispatch density.",
        "Matt Velazquez runs 211 appointments at just 71min avg — efficient dispatch density.",
        "Gavyn Stone runs 205 appointments at just 110min avg — efficient dispatch density.",
        "Most service tickets close in a single visit (1.24 appointments per WO on average). Low return-trip rate."
      ]
    },
    "benchmarks": {
      "avgBillRatio": 0.606,
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
