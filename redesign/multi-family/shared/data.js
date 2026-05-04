/* AUTO-GENERATED — do not edit. Generated 2026-05-04T13:50:23.665Z (multi-family) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-05-04T13:50:23.665Z",
    "pipelineVersion": "2.0.0",
    "lob": "multi-family",
    "lastBuiltProjects": [
      "sales-overview",
      "revenue-forecast",
      "backlog",
      "installs-ytd"
    ],
    "projects": [
      {
        "id": "sales-overview",
        "version": "1.0-rules-encoded",
        "elapsedMs": 1,
        "builtAt": "2026-05-04T13:50:23.665Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-locked-2026-04-19-shell-1.0",
        "elapsedMs": 1,
        "builtAt": "2026-05-04T13:50:23.665Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 1,
        "builtAt": "2026-05-04T13:50:23.665Z"
      },
      {
        "id": "installs-ytd",
        "version": "1.0-rules-encoded",
        "elapsedMs": 0,
        "builtAt": "2026-05-04T13:50:23.665Z"
      }
    ]
  },
  "SALES_OVERVIEW": {
    "title": "Residential Sales Overview",
    "subtitle": "No data uploaded yet — drop XLSX files in inputs/sales-overview/",
    "lastSigned": null,
    "ytdDays": 0,
    "rowCount": 0,
    "kpis": [
      {
        "label": "Signed Contracts YTD",
        "value": "$0",
        "sub": "No data uploaded yet"
      },
      {
        "label": "Sold",
        "value": "$0",
        "sub": ""
      },
      {
        "label": "Production Review",
        "value": "$0",
        "sub": ""
      },
      {
        "label": "Kicked Back",
        "value": "$0",
        "sub": ""
      },
      {
        "label": "Avg Deal Size",
        "value": "$0",
        "sub": ""
      }
    ],
    "pipelineBuckets": [],
    "stageBuckets": {},
    "monthly": [
      {
        "key": "2026-01",
        "label": "January",
        "count": 0,
        "amount": 0,
        "installs": 0,
        "repairs": 0,
        "avgDeal": 0,
        "repairPct": 0,
        "installAvg": 0,
        "repairAvg": 0
      }
    ],
    "jobTypeMixByMonth": {
      "Insurance": {},
      "Retail-Financing": {},
      "Retail-No Financing": {}
    },
    "jobTypeTotals": [],
    "weeklyTrend": [],
    "marketScorecard": {
      "headers": [
        "Branch",
        "Sales",
        "Deals",
        "Avg Deal",
        "Installs",
        "Repairs",
        "Repair %",
        "Median Days"
      ],
      "rows": []
    },
    "marketKickbacks": [],
    "marketJobTypeChart": {
      "labels": [],
      "datasets": []
    },
    "topPeople": [],
    "speedSellers": [],
    "repairHeavy": [],
    "salesCycle": {
      "kpis": [],
      "byJobType": [],
      "byMarket": [],
      "starInsuranceClosers": []
    },
    "completedBilling": {
      "headers": [],
      "rows": [],
      "totalJobs": 0,
      "totalAmount": 0
    },
    "weeklyTargets_BUDGET": {
      "avgWeeklyNeed": 2672228,
      "byJobType": [
        {
          "type": "Retail-No Financing",
          "perWeek": 1148847,
          "mix": 43
        },
        {
          "type": "Insurance",
          "perWeek": 1098205,
          "mix": 41.1
        },
        {
          "type": "Retail-Financing",
          "perWeek": 425175,
          "mix": 15.9
        }
      ],
      "byTrade": [
        {
          "trade": "Roofing",
          "perWeek": 1681438,
          "mix": 62.9
        },
        {
          "trade": "Gutters",
          "perWeek": 792458,
          "mix": 29.7
        },
        {
          "trade": "Siding",
          "perWeek": 60871,
          "mix": 2.3
        }
      ],
      "byMarket": [
        {
          "market": "Columbus",
          "total": 743805,
          "retNoFin": 292428,
          "ins": 352071,
          "retFin": 99306,
          "deals": 77.6
        },
        {
          "market": "Detroit Metro",
          "total": 482937,
          "retNoFin": 331878,
          "ins": 45067,
          "retFin": 105992,
          "deals": 30.9
        },
        {
          "market": "Nashville",
          "total": 274827,
          "retNoFin": 101518,
          "ins": 89300,
          "retFin": 84008,
          "deals": 19.8
        },
        {
          "market": "DC Metro",
          "total": 249809,
          "retNoFin": 143958,
          "ins": 101508,
          "retFin": 4342,
          "deals": 16.5
        },
        {
          "market": "Dayton",
          "total": 177987,
          "retNoFin": 50851,
          "ins": 102425,
          "retFin": 24710,
          "deals": 10.9
        },
        {
          "market": "Cincinnati",
          "total": 158777,
          "retNoFin": 49568,
          "ins": 89449,
          "retFin": 19760,
          "deals": 10.1
        },
        {
          "market": "Richmond",
          "total": 137413,
          "retNoFin": 22286,
          "ins": 108672,
          "retFin": 6455,
          "deals": 7.1
        },
        {
          "market": "Cleveland",
          "total": 121677,
          "retNoFin": 60088,
          "ins": 35216,
          "retFin": 26373,
          "deals": 16.2
        },
        {
          "market": "Raleigh",
          "total": 118023,
          "retNoFin": 13029,
          "ins": 98208,
          "retFin": 6786,
          "deals": 7.7
        },
        {
          "market": "Knoxville",
          "total": 115116,
          "retNoFin": 59627,
          "ins": 48658,
          "retFin": 6831,
          "deals": 6.5
        },
        {
          "market": "Greenville",
          "total": 79373,
          "retNoFin": 21025,
          "ins": 17738,
          "retFin": 40611,
          "deals": 3.3
        }
      ],
      "weekSchedule": [
        {
          "wk": "04/19/2026",
          "mo": "Apr",
          "target": 1959782
        },
        {
          "wk": "04/26/2026",
          "mo": "Apr",
          "target": 2619633
        },
        {
          "wk": "05/03/2026",
          "mo": "May",
          "target": 4269260
        },
        {
          "wk": "05/10/2026",
          "mo": "May",
          "target": 4269260
        },
        {
          "wk": "05/17/2026",
          "mo": "May",
          "target": 4269260
        },
        {
          "wk": "05/24/2026",
          "mo": "May",
          "target": 4269260
        },
        {
          "wk": "05/31/2026",
          "mo": "May",
          "target": 3489371
        },
        {
          "wk": "06/07/2026",
          "mo": "Jun",
          "target": 3359390
        },
        {
          "wk": "06/14/2026",
          "mo": "Jun",
          "target": 3359390
        },
        {
          "wk": "06/21/2026",
          "mo": "Jun",
          "target": 3359390
        },
        {
          "wk": "06/28/2026",
          "mo": "Jun",
          "target": 2757071
        },
        {
          "wk": "07/05/2026",
          "mo": "Jul",
          "target": 2305332
        },
        {
          "wk": "07/12/2026",
          "mo": "Jul",
          "target": 2305332
        },
        {
          "wk": "07/19/2026",
          "mo": "Jul",
          "target": 2305332
        },
        {
          "wk": "07/26/2026",
          "mo": "Jul",
          "target": 2465088
        },
        {
          "wk": "08/02/2026",
          "mo": "Aug",
          "target": 3423621
        },
        {
          "wk": "08/09/2026",
          "mo": "Aug",
          "target": 3423621
        },
        {
          "wk": "08/16/2026",
          "mo": "Aug",
          "target": 3423621
        },
        {
          "wk": "08/23/2026",
          "mo": "Aug",
          "target": 3423621
        },
        {
          "wk": "08/30/2026",
          "mo": "Aug",
          "target": 3007788
        },
        {
          "wk": "09/06/2026",
          "mo": "Sep",
          "target": 2841454
        },
        {
          "wk": "09/13/2026",
          "mo": "Sep",
          "target": 2841454
        },
        {
          "wk": "09/20/2026",
          "mo": "Sep",
          "target": 2841454
        },
        {
          "wk": "09/27/2026",
          "mo": "Sep",
          "target": 2918633
        },
        {
          "wk": "10/04/2026",
          "mo": "Oct",
          "target": 3021539
        },
        {
          "wk": "10/11/2026",
          "mo": "Oct",
          "target": 3021539
        },
        {
          "wk": "10/18/2026",
          "mo": "Oct",
          "target": 3021539
        },
        {
          "wk": "10/25/2026",
          "mo": "Oct",
          "target": 3021539
        },
        {
          "wk": "11/01/2026",
          "mo": "Nov",
          "target": 1925810
        },
        {
          "wk": "11/08/2026",
          "mo": "Nov",
          "target": 1925810
        },
        {
          "wk": "11/15/2026",
          "mo": "Nov",
          "target": 1925810
        },
        {
          "wk": "11/22/2026",
          "mo": "Nov",
          "target": 1925810
        },
        {
          "wk": "11/29/2026",
          "mo": "Nov",
          "target": 1038196
        },
        {
          "wk": "12/06/2026",
          "mo": "Dec",
          "target": 683150
        },
        {
          "wk": "12/13/2026",
          "mo": "Dec",
          "target": 683150
        },
        {
          "wk": "12/20/2026",
          "mo": "Dec",
          "target": 683150
        },
        {
          "wk": "12/27/2026",
          "mo": "Dec",
          "target": 487965
        }
      ]
    },
    "budgetRecovery": {
      "fullYearBudget": 126105724,
      "totalToRecover": 5948966,
      "upliftPct": 6.9,
      "q1Budget": 16900198,
      "q1Actual": 16409511,
      "q1Shortfall": 490687,
      "aprilGap": 5458279,
      "aprilBudget": 12344293,
      "aprilFcst": 6886014,
      "adjWeeklySalesAvg": 2849800,
      "origWeeklySalesAvg": 2672228,
      "salesDeltaPerWeek": 177572,
      "adjWeeklyProdAvg": 2853097,
      "origWeeklyProdAvg": 2751323,
      "prodDeltaPerWeek": 101774,
      "monthlyBridge": [
        {
          "mo": "Jan 2026",
          "origBudget": 4269114,
          "fcst": 4747192,
          "recovTarget": 4747192,
          "catchUp": 0,
          "status": "Actual"
        },
        {
          "mo": "Feb 2026",
          "origBudget": 4505158,
          "fcst": 3778526,
          "recovTarget": 3536393,
          "catchUp": 0,
          "status": "Actual"
        },
        {
          "mo": "Mar 2026",
          "origBudget": 8125926,
          "fcst": 4932169,
          "recovTarget": 8125926,
          "catchUp": 0,
          "status": "Actual"
        },
        {
          "mo": "Apr 2026",
          "origBudget": 12344293,
          "fcst": 6886014,
          "recovTarget": 6886014,
          "catchUp": 0,
          "status": "Forecast"
        },
        {
          "mo": "May 2026",
          "origBudget": 14292330,
          "fcst": 13455265,
          "recovTarget": 15170128,
          "catchUp": 877798,
          "status": "Recovery"
        },
        {
          "mo": "Jun 2026",
          "origBudget": 14833760,
          "fcst": 14345614,
          "recovTarget": 15744811,
          "catchUp": 911051,
          "status": "Recovery"
        },
        {
          "mo": "Jul 2026",
          "origBudget": 10752016,
          "fcst": 12035648,
          "recovTarget": 11412377,
          "catchUp": 660361,
          "status": "Recovery"
        },
        {
          "mo": "Aug 2026",
          "origBudget": 14513476,
          "fcst": 13517193,
          "recovTarget": 15404856,
          "catchUp": 891380,
          "status": "Recovery"
        },
        {
          "mo": "Sep 2026",
          "origBudget": 12228745,
          "fcst": 12920784,
          "recovTarget": 12979803,
          "catchUp": 751058,
          "status": "Recovery"
        },
        {
          "mo": "Oct 2026",
          "origBudget": 13652917,
          "fcst": 13110876,
          "recovTarget": 14491444,
          "catchUp": 838527,
          "status": "Recovery"
        },
        {
          "mo": "Nov 2026",
          "origBudget": 10772169,
          "fcst": 10505376,
          "recovTarget": 11433768,
          "catchUp": 661599,
          "status": "Recovery"
        },
        {
          "mo": "Dec 2026",
          "origBudget": 5815820,
          "fcst": 6302469,
          "recovTarget": 6173013,
          "catchUp": 357193,
          "status": "Recovery"
        }
      ],
      "adjSalesByMarket": [
        {
          "market": "Columbus",
          "recovTarget": 264411,
          "original": 247935,
          "delta": 16476
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 171676,
          "original": 160979,
          "delta": 10697
        },
        {
          "market": "Nashville",
          "recovTarget": 97696,
          "original": 91609,
          "delta": 6088
        },
        {
          "market": "DC Metro",
          "recovTarget": 88803,
          "original": 83270,
          "delta": 5533
        },
        {
          "market": "Dayton",
          "recovTarget": 63271,
          "original": 59329,
          "delta": 3942
        },
        {
          "market": "Cincinnati",
          "recovTarget": 56442,
          "original": 52926,
          "delta": 3517
        },
        {
          "market": "Richmond",
          "recovTarget": 48848,
          "original": 45804,
          "delta": 3044
        },
        {
          "market": "Cleveland",
          "recovTarget": 43254,
          "original": 40559,
          "delta": 2695
        },
        {
          "market": "Raleigh",
          "recovTarget": 41955,
          "original": 39341,
          "delta": 2614
        },
        {
          "market": "Knoxville",
          "recovTarget": 40922,
          "original": 38372,
          "delta": 2550
        },
        {
          "market": "Greenville",
          "recovTarget": 28216,
          "original": 26458,
          "delta": 1758
        },
        {
          "market": "Grand Rapids",
          "recovTarget": 6657,
          "original": 6242,
          "delta": 415
        }
      ],
      "adjProdByMarket": [
        {
          "market": "Columbus",
          "recovTarget": 273284,
          "pct": 29.9
        },
        {
          "market": "DC Metro",
          "recovTarget": 116716,
          "pct": 12.8
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 115017,
          "pct": 12.6
        },
        {
          "market": "Nashville",
          "recovTarget": 96986,
          "pct": 10.6
        },
        {
          "market": "Cincinnati",
          "recovTarget": 74119,
          "pct": 8.1
        },
        {
          "market": "Richmond",
          "recovTarget": 57007,
          "pct": 6.2
        },
        {
          "market": "Cleveland",
          "recovTarget": 42408,
          "pct": 4.6
        },
        {
          "market": "Dayton",
          "recovTarget": 40967,
          "pct": 4.5
        },
        {
          "market": "Raleigh",
          "recovTarget": 35135,
          "pct": 3.8
        },
        {
          "market": "Knoxville",
          "recovTarget": 30491,
          "pct": 3.3
        },
        {
          "market": "Greenville",
          "recovTarget": 14251,
          "pct": 1.6
        },
        {
          "market": "Grand Rapids",
          "recovTarget": 10020,
          "pct": 1.1
        },
        {
          "market": "Indianapolis",
          "recovTarget": 4781,
          "pct": 0.5
        },
        {
          "market": "Greensboro",
          "recovTarget": 1469,
          "pct": 0.2
        },
        {
          "market": "Winston-Salem",
          "recovTarget": 63,
          "pct": 0
        }
      ]
    },
    "commentary": {
      "whatsWorking": [],
      "whatNeedsAttention": [],
      "criticalRisks": [],
      "strengthsToAmplify": [],
      "fixList": [],
      "actionPlan": {
        "thisWeek": [],
        "thisMonth": [],
        "thisQuarter": []
      }
    }
  },
  "REVENUE_FORECAST": {
    "_source": "calculator/revenue-forecast.js V5-locked-2026-04-19-shell-1.0 (stub: no extracted snapshot found)",
    "title": "Residential Revenue Forecast",
    "subtitle": "V5 Model with Job Type Analysis",
    "runDate": "2026-05-04",
    "kpis": [],
    "tabs": [],
    "execSummary": {
      "budget": 125600000,
      "modelAnnualInvoiced": 0,
      "gap": 0,
      "narrative": "No data yet."
    },
    "monthRevenue": {
      "april": {
        "invoiced": 0,
        "wipChange": 0,
        "netRevenue": 0
      },
      "may": {
        "invoiced": 0,
        "wipChange": 0,
        "netRevenue": 0
      }
    },
    "weeklyTargetsHeader": {
      "avgWeeklyNeed": 0,
      "recent4WkAvg": 0,
      "gap": 0,
      "productionAvgWeeklyNeed": 0,
      "productionCycleStart": 0,
      "productionCycleComplete": 0,
      "productionTotalCycle": 0
    },
    "budgetRecoveryHeader": {
      "fullYearBudget": 125600000,
      "gap": 0,
      "upliftPct": 0,
      "aprilGap": 0,
      "q1OriginalBudget": 0,
      "q1Actual": 0,
      "q1Shortfall": 0
    },
    "profitabilitySummary": {
      "combinedGP": 0,
      "combinedGP_pct": 0,
      "combinedRevenue": 0,
      "y2025_GP_pct": 0,
      "y2026_GP_pct": 0,
      "y2025_revenue": 0,
      "y2025_jobs": 0,
      "materialCost": 0,
      "laborCost": 0,
      "commissions": 0,
      "materialPctContract": 0,
      "laborPctContract": 0,
      "commissionPctContract": 0
    },
    "pipelineSnapshot": {
      "stages": []
    },
    "commentary": {
      "actionableRecommendations": [],
      "strategyHighlights": []
    },
    "tables": [],
    "charts": []
  },
  "BACKLOG": {
    "_source": "calculator/backlog.js v1.0-rules-encoded (stub: no extracted-data.json present and no inputs to compute from)",
    "title": "Job Backlog & Production",
    "subtitle": "Awaiting Salesforce export",
    "headerMeta": {
      "totalJobs": 0,
      "totalWOs": 0,
      "portfolioValue": 0,
      "avgDaysInStatus": 0,
      "lastBuild": "2026-05-04T13:50:23.664Z"
    },
    "tabs": [
      {
        "id": "index",
        "label": "Overview"
      },
      {
        "id": "executive",
        "label": "Executive Summary"
      },
      {
        "id": "partial",
        "label": "Partially Complete"
      },
      {
        "id": "holds",
        "label": "Holds & Blockers"
      },
      {
        "id": "trades",
        "label": "Trade Analysis"
      },
      {
        "id": "branches",
        "label": "Branch Drilldown"
      },
      {
        "id": "salespeople",
        "label": "Salesperson View"
      },
      {
        "id": "pipeline",
        "label": "Backlog Pipeline"
      },
      {
        "id": "action-plan",
        "label": "Action Plan"
      }
    ],
    "kpisExecutive": [],
    "kpisRiskOpportunity": [],
    "kpisPartial": [],
    "kpisHolds": [],
    "kpisSales": [],
    "kpisBacklog": [],
    "charts": [],
    "tables": [],
    "computedExtras": {
      "permitsByBranch": []
    },
    "actionPlan": {
      "strategicGoal": "No data yet.",
      "immediate": [],
      "structural": [],
      "cadence": [],
      "bottomLine": ""
    }
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded (stub: no extracted-data.json present and no inputs to compute from)",
    "title": "Residential Installs YTD",
    "subtitle": "Awaiting Salesforce invoiced-jobs export",
    "generated": "2026-05-04",
    "headerMeta": {
      "trueRevenue": 0,
      "uniqueJobs": 0,
      "markets": 0,
      "pms": 0,
      "medianComplete": 0,
      "avgStart": 0,
      "multiTradeJobs": 0,
      "singleTradeJobs": 0,
      "multiTradePct": 0,
      "lastBuild": "2026-05-04T13:50:23.665Z"
    },
    "tabs": [
      {
        "id": "index",
        "label": "Overview"
      },
      {
        "id": "kpis",
        "label": "KPIs"
      },
      {
        "id": "trends",
        "label": "Monthly Trends"
      },
      {
        "id": "multi-trade",
        "label": "Multi-Trade"
      },
      {
        "id": "markets",
        "label": "Markets"
      },
      {
        "id": "pms",
        "label": "Project Managers"
      },
      {
        "id": "work-types",
        "label": "Work Types"
      },
      {
        "id": "creators",
        "label": "Created By"
      },
      {
        "id": "findings",
        "label": "Key Findings"
      }
    ],
    "kpis": [],
    "kpisMultiTrade": [],
    "monthly": [],
    "charts": [
      {
        "id": "ch_monthly",
        "labels": [],
        "datasets": [
          {
            "label": "Revenue",
            "data": []
          },
          {
            "label": "Jobs",
            "data": []
          }
        ]
      },
      {
        "id": "ch_efficiency",
        "labels": [],
        "datasets": [
          {
            "label": "Median Days to Complete",
            "data": []
          },
          {
            "label": "Avg Days to Start",
            "data": []
          }
        ]
      },
      {
        "id": "ch_jobmix",
        "labels": [
          "Job Mix"
        ],
        "datasets": [
          {
            "label": "Multi-Trade",
            "data": [
              0
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              0
            ]
          }
        ]
      },
      {
        "id": "ch_combos",
        "labels": [],
        "datasets": [
          {
            "label": "Jobs",
            "data": []
          }
        ]
      },
      {
        "id": "ch_mt_by_market",
        "labels": [],
        "datasets": [
          {
            "label": "MT %",
            "data": []
          }
        ]
      },
      {
        "id": "ch_mt_vs_st",
        "labels": [],
        "datasets": [
          {
            "label": "MT Median",
            "data": []
          },
          {
            "label": "ST Median",
            "data": []
          }
        ]
      },
      {
        "id": "ch_mk_rev",
        "labels": [],
        "datasets": [
          {
            "label": "Revenue",
            "data": []
          }
        ]
      },
      {
        "id": "ch_mk_days",
        "labels": [],
        "datasets": [
          {
            "label": "Median Days",
            "data": []
          }
        ]
      },
      {
        "id": "ch_pm_top",
        "labels": [],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": []
          }
        ]
      },
      {
        "id": "ch_pm_scatter",
        "labels": [],
        "datasets": [
          {
            "label": "PMs",
            "data": []
          }
        ]
      },
      {
        "id": "ch_wt_pie",
        "labels": [],
        "datasets": [
          {
            "label": "Revenue",
            "data": []
          }
        ]
      },
      {
        "id": "ch_wt_days",
        "labels": [],
        "datasets": [
          {
            "label": "Median Days",
            "data": []
          }
        ]
      },
      {
        "id": "ch_cb_vol",
        "labels": [],
        "datasets": [
          {
            "label": "Jobs",
            "data": []
          }
        ]
      },
      {
        "id": "ch_cb_eff",
        "labels": [],
        "datasets": [
          {
            "label": "Median Complete",
            "data": []
          }
        ]
      },
      {
        "id": "ch_cb_mt",
        "labels": [],
        "datasets": [
          {
            "label": "MT %",
            "data": []
          }
        ]
      },
      {
        "id": "ch_cb_scatter",
        "labels": [],
        "datasets": [
          {
            "label": "Creators",
            "data": []
          }
        ]
      }
    ],
    "tables": [
      {
        "id": "tbl_markets",
        "title": "All markets",
        "headers": [
          "Market",
          "Jobs",
          "Revenue",
          "Avg Contract",
          "Median Complete",
          "Avg Start",
          "MT %",
          "MT Median",
          "ST Median"
        ],
        "rows": []
      },
      {
        "id": "tbl_pms",
        "title": "All PMs (5+ work orders)",
        "headers": [
          "PM",
          "WOs",
          "Jobs",
          "Fractional Revenue",
          "Rev / WO",
          "Median Complete",
          "Avg Start"
        ],
        "rows": []
      },
      {
        "id": "tbl_worktypes",
        "title": "Work type detail",
        "headers": [
          "Service Object",
          "WOs",
          "Fractional Revenue",
          "Avg Contract / WO",
          "Median Complete"
        ],
        "rows": []
      },
      {
        "id": "tbl_creators",
        "title": "Creator detail",
        "headers": [
          "Creator",
          "Jobs",
          "Revenue",
          "Avg Contract",
          "Median Complete",
          "Avg Start",
          "MT %",
          "Rev / Job"
        ],
        "rows": []
      },
      {
        "id": "creatorMarketHeatmap",
        "title": "Creator x Market Volume Heatmap (Jobs)",
        "headers": [
          "Creator",
          "Total"
        ],
        "rows": []
      }
    ],
    "commentary": {
      "areasOfConcern": [],
      "watchList": [],
      "positivesToBuildOn": []
    }
  }
};
