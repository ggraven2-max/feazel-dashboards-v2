/* AUTO-GENERATED — do not edit. Generated 2026-05-18T14:31:41.273Z (multi-family) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-05-18T14:31:41.273Z",
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
        "elapsedMs": 30,
        "builtAt": "2026-05-18T14:31:41.273Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 123,
        "builtAt": "2026-05-18T14:31:41.273Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 21,
        "builtAt": "2026-05-18T14:31:41.273Z"
      },
      {
        "id": "installs-ytd",
        "version": "1.0-rules-encoded",
        "elapsedMs": 14,
        "builtAt": "2026-05-18T14:31:41.273Z"
      }
    ]
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-05-14",
    "ytdDays": 138,
    "rowCount": 236,
    "tabs": [
      {
        "id": "overview",
        "label": "Executive Overview"
      },
      {
        "id": "trends",
        "label": "Trends & Momentum"
      },
      {
        "id": "market",
        "label": "Market Deep Dive"
      },
      {
        "id": "people",
        "label": "People & Productivity"
      },
      {
        "id": "jobtype",
        "label": "Job Type & Service Mix"
      },
      {
        "id": "salescycle",
        "label": "Sales Cycle Analysis"
      },
      {
        "id": "risks",
        "label": "Risks & Red Flags"
      },
      {
        "id": "good",
        "label": "Build on the Good"
      },
      {
        "id": "weak",
        "label": "Fix the Weak Areas"
      },
      {
        "id": "action",
        "label": "Action Plan"
      },
      {
        "id": "targets",
        "label": "Weekly Sales Targets"
      },
      {
        "id": "recovery",
        "label": "Budget Recovery"
      },
      {
        "id": "billing",
        "label": "Completed → Billing"
      }
    ],
    "kpis": [
      {
        "label": "Signed Contracts YTD",
        "value": "$19.31M",
        "sub": "236 signed contracts across 11 markets"
      },
      {
        "label": "Sold",
        "value": "$19.30M",
        "sub": "233 deals | 98.7% of signed contracts"
      },
      {
        "label": "Production Review",
        "value": "$0",
        "sub": "2 deals | Ops Review, PM Review, Contracted"
      },
      {
        "label": "Kicked Back",
        "value": "$0",
        "sub": "0 deals | 0.0% of signed contracts",
        "trend": "negative"
      },
      {
        "label": "Sales Action",
        "value": "$0",
        "sub": "0 deals requiring sales follow-up",
        "trend": "neutral"
      },
      {
        "label": "Avg Deal Size",
        "value": "$81,809",
        "sub": "Median: $14,341 | Install avg: $115,790"
      },
      {
        "label": "Organization",
        "value": "22 Reps",
        "sub": "11 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$51.07M",
        "sub": "Based on 138 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "69.9% / 29.7%",
        "sub": "165 installs | 70 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 233,
        "amount": 19302711.79
      },
      {
        "label": "Production Review",
        "count": 2,
        "amount": 0
      },
      {
        "label": "Other",
        "count": 1,
        "amount": 4280
      }
    ],
    "stageBuckets": {
      "Closed - Sold": "Sold",
      "Pending PM/Financial Review": "Production Review",
      "Ops Review": "Production Review",
      "Contracted": "Production Review",
      "CMT": "Production Review",
      "Claim Filed": "Production Review",
      "Sales Action Required": "Sales Action",
      "No Show": "Sales Action",
      "Kicked Back to Salesperson": "Kicked Back"
    },
    "monthly": [
      {
        "key": "2026-01",
        "label": "January",
        "count": 52,
        "amount": 3463224.79,
        "installs": 34,
        "repairs": 17,
        "avgDeal": 66600,
        "repairPct": 32.7,
        "installAvg": 99977,
        "repairAvg": 3736
      },
      {
        "key": "2026-02",
        "label": "February",
        "count": 37,
        "amount": 2452314.66,
        "installs": 30,
        "repairs": 7,
        "avgDeal": 66279,
        "repairPct": 18.9,
        "installAvg": 81413,
        "repairAvg": 1419
      },
      {
        "key": "2026-03",
        "label": "March",
        "count": 49,
        "amount": 3377016,
        "installs": 33,
        "repairs": 16,
        "avgDeal": 68919,
        "repairPct": 32.7,
        "installAvg": 100944,
        "repairAvg": 2867
      },
      {
        "key": "2026-04",
        "label": "April",
        "count": 76,
        "amount": 7891146.34,
        "installs": 53,
        "repairs": 23,
        "avgDeal": 103831,
        "repairPct": 30.3,
        "installAvg": 147494,
        "repairAvg": 3215
      },
      {
        "key": "2026-05",
        "label": "May",
        "count": 22,
        "amount": 2123290,
        "installs": 15,
        "repairs": 7,
        "avgDeal": 96513,
        "repairPct": 31.8,
        "installAvg": 141023,
        "repairAvg": 1136
      }
    ],
    "jobTypeMixByMonth": {
      "Retail-No Financing": {
        "2026-01": 2224228.5,
        "2026-02": 2401613,
        "2026-03": 3376516,
        "2026-04": 6381301.34,
        "2026-05": 1476230
      },
      "Insurance": {
        "2026-01": 1206796.29,
        "2026-02": 50701.66,
        "2026-03": 500,
        "2026-04": 1509845,
        "2026-05": 647060
      },
      "Retail-Financing": {
        "2026-01": 32200,
        "2026-02": 0,
        "2026-03": 0,
        "2026-04": 0,
        "2026-05": 0
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Retail-No Financing",
        "count": 227,
        "amount": 15859888.84,
        "avg": 69867
      },
      {
        "jobType": "Insurance",
        "count": 8,
        "amount": 3414902.95,
        "avg": 426863
      },
      {
        "jobType": "Retail-Financing",
        "count": 1,
        "amount": 32200,
        "avg": 32200
      }
    ],
    "weeklyTrend": [
      {
        "w": 1,
        "count": 2,
        "amount": 318236
      },
      {
        "w": 2,
        "count": 16,
        "amount": 551896.5
      },
      {
        "w": 3,
        "count": 12,
        "amount": 484096
      },
      {
        "w": 4,
        "count": 12,
        "amount": 1873299.29
      },
      {
        "w": 5,
        "count": 10,
        "amount": 235697
      },
      {
        "w": 6,
        "count": 4,
        "amount": 488729
      },
      {
        "w": 7,
        "count": 4,
        "amount": 86914
      },
      {
        "w": 8,
        "count": 13,
        "amount": 659420
      },
      {
        "w": 9,
        "count": 16,
        "amount": 1217251.66
      },
      {
        "w": 10,
        "count": 12,
        "amount": 1348853
      },
      {
        "w": 11,
        "count": 8,
        "amount": 347984
      },
      {
        "w": 12,
        "count": 13,
        "amount": 1048986
      },
      {
        "w": 13,
        "count": 12,
        "amount": 459222
      },
      {
        "w": 14,
        "count": 7,
        "amount": 323998
      },
      {
        "w": 15,
        "count": 14,
        "amount": 1194792.31
      },
      {
        "w": 16,
        "count": 28,
        "amount": 1419092
      },
      {
        "w": 17,
        "count": 16,
        "amount": 2947829
      },
      {
        "w": 18,
        "count": 16,
        "amount": 2178356.03
      },
      {
        "w": 19,
        "count": 14,
        "amount": 1374121
      },
      {
        "w": 20,
        "count": 7,
        "amount": 748219
      }
    ],
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
      "rows": [
        [
          "Columbus",
          5489791.63,
          43,
          127670,
          31,
          12,
          27.9,
          57
        ],
        [
          "Detroit Metro",
          5209125.5,
          47,
          110832,
          26,
          21,
          44.7,
          21
        ],
        [
          "Raleigh",
          3096362,
          33,
          93829,
          30,
          2,
          6.1,
          99
        ],
        [
          "Cleveland",
          2246326,
          29,
          77460,
          23,
          6,
          20.7,
          25
        ],
        [
          "Cincinnati",
          1128962.66,
          26,
          43422,
          19,
          7,
          26.9,
          33
        ],
        [
          "DC Metro",
          787158,
          25,
          31486,
          13,
          12,
          48,
          20
        ],
        [
          "Nashville",
          503530,
          10,
          50353,
          9,
          1,
          10,
          50
        ],
        [
          "Dayton",
          346915,
          9,
          38546,
          5,
          4,
          44.4,
          0
        ],
        [
          "Richmond",
          229579,
          9,
          25509,
          4,
          5,
          55.6,
          22
        ],
        [
          "Indianapolis",
          215503,
          2,
          107752,
          2,
          0,
          0,
          108
        ],
        [
          "Knoxville",
          53739,
          3,
          17913,
          3,
          0,
          0,
          70
        ]
      ]
    },
    "closingByBranch": {
      "headers": [],
      "rows": [],
      "totals": null,
      "source": null,
      "format": "none"
    },
    "marketKickbacks": [],
    "marketJobTypeChart": {
      "_description": "Stacked horizontal bar; sales-by-job-type per branch.",
      "branches": [
        "Columbus",
        "Detroit Metro",
        "Raleigh",
        "Cleveland",
        "Cincinnati",
        "DC Metro",
        "Nashville",
        "Dayton",
        "Richmond",
        "Indianapolis",
        "Knoxville"
      ]
    },
    "topPeople": [
      {
        "name": "Micah Williamson",
        "amount": 3774710,
        "count": 28,
        "avg": 134811,
        "medDays": 11,
        "jt": {
          "Retail-No Financing": 28
        },
        "installs": 10,
        "repairs": 18
      },
      {
        "name": "Evan Hall",
        "amount": 2909718,
        "count": 29,
        "avg": 100335,
        "medDays": 99,
        "jt": {
          "Retail-No Financing": 29
        },
        "installs": 26,
        "repairs": 2
      },
      {
        "name": "Nicholas Andrukat",
        "amount": 2227626,
        "count": 23,
        "avg": 96853,
        "medDays": 25,
        "jt": {
          "Retail-No Financing": 21,
          "Insurance": 2
        },
        "installs": 17,
        "repairs": 6
      },
      {
        "name": "Ron Saxe",
        "amount": 1751236,
        "count": 15,
        "avg": 116749,
        "medDays": 82,
        "jt": {
          "Retail-No Financing": 15
        },
        "installs": 13,
        "repairs": 2
      },
      {
        "name": "Mark Leedy",
        "amount": 1660660.66,
        "count": 32,
        "avg": 51896,
        "medDays": 27,
        "jt": {
          "Retail-No Financing": 30,
          "Retail-Financing": 1,
          "Insurance": 1
        },
        "installs": 25,
        "repairs": 7
      },
      {
        "name": "Christy Osborne",
        "amount": 1609758.29,
        "count": 8,
        "avg": 201220,
        "medDays": 41,
        "jt": {
          "Retail-No Financing": 6,
          "Insurance": 2
        },
        "installs": 5,
        "repairs": 3
      },
      {
        "name": "Todd Sandler",
        "amount": 1156958.31,
        "count": 7,
        "avg": 165280,
        "medDays": 67,
        "jt": {
          "Retail-No Financing": 7
        },
        "installs": 5,
        "repairs": 2
      },
      {
        "name": "Courtney Lyon",
        "amount": 932860,
        "count": 8,
        "avg": 116608,
        "medDays": 112,
        "jt": {
          "Retail-No Financing": 8
        },
        "installs": 7,
        "repairs": 1
      },
      {
        "name": "Marko Jovanovic",
        "amount": 787158,
        "count": 25,
        "avg": 31486,
        "medDays": 20,
        "jt": {
          "Retail-No Financing": 24,
          "Insurance": 1
        },
        "installs": 13,
        "repairs": 12
      },
      {
        "name": "Josh Kennedy",
        "amount": 647060,
        "count": 1,
        "avg": 647060,
        "medDays": 1160,
        "jt": {
          "Insurance": 1
        },
        "installs": 1,
        "repairs": 0
      },
      {
        "name": "Aaron Ellis",
        "amount": 556119,
        "count": 12,
        "avg": 46343,
        "medDays": 57,
        "jt": {
          "Retail-No Financing": 11,
          "Insurance": 1
        },
        "installs": 11,
        "repairs": 1
      },
      {
        "name": "Shawn Dunnigan",
        "amount": 484340,
        "count": 9,
        "avg": 53816,
        "medDays": 98,
        "jt": {
          "Retail-No Financing": 9
        },
        "installs": 9,
        "repairs": 0
      },
      {
        "name": "Lisa Gibson",
        "amount": 286523.03,
        "count": 16,
        "avg": 17908,
        "medDays": 28,
        "jt": {
          "Retail-No Financing": 16
        },
        "installs": 13,
        "repairs": 3
      },
      {
        "name": "Jason Crooke",
        "amount": 229579,
        "count": 9,
        "avg": 25509,
        "medDays": 22,
        "jt": {
          "Retail-No Financing": 9
        },
        "installs": 4,
        "repairs": 5
      },
      {
        "name": "RaShauna Watts",
        "amount": 74505,
        "count": 2,
        "avg": 37253,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 2
        },
        "installs": 1,
        "repairs": 1
      },
      {
        "name": "Emily Carey",
        "amount": 73203,
        "count": 1,
        "avg": 73203,
        "medDays": 149,
        "jt": {
          "Retail-No Financing": 1
        },
        "installs": 1,
        "repairs": 0
      },
      {
        "name": "Kristi Mitchell",
        "amount": 65764,
        "count": 2,
        "avg": 32882,
        "medDays": 165,
        "jt": {
          "Retail-No Financing": 2
        },
        "installs": 2,
        "repairs": 0
      },
      {
        "name": "Matthew Cooke",
        "amount": 44845,
        "count": 1,
        "avg": 44845,
        "medDays": 11,
        "jt": {
          "Retail-No Financing": 1
        },
        "installs": 1,
        "repairs": 0
      },
      {
        "name": "Samuel Kayser",
        "amount": 30720,
        "count": 5,
        "avg": 6144,
        "medDays": 11,
        "jt": {
          "Retail-No Financing": 5
        },
        "installs": 1,
        "repairs": 4
      },
      {
        "name": "Chris Atkins",
        "amount": 2016.5,
        "count": 1,
        "avg": 2017,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 1
        },
        "installs": 0,
        "repairs": 1
      }
    ],
    "speedSellers": [],
    "repairHeavy": [
      {
        "name": "Micah Williamson",
        "repairs": 18,
        "deals": 28,
        "pct": 64.3
      },
      {
        "name": "Jason Crooke",
        "repairs": 5,
        "deals": 9,
        "pct": 55.6
      },
      {
        "name": "Marko Jovanovic",
        "repairs": 12,
        "deals": 25,
        "pct": 48
      }
    ],
    "salesCycle": {
      "kpis": [
        {
          "label": "Overall Median",
          "value": "38 days",
          "sub": "Mean: 97 days (skewed by insurance)"
        },
        {
          "label": "Retail",
          "value": "36 days",
          "sub": "All retail job types"
        },
        {
          "label": "Insurance",
          "value": "94 days",
          "sub": "Median | Mean: 334 days"
        },
        {
          "label": "Repair",
          "value": "1 days",
          "sub": "Fast turn, low value"
        }
      ],
      "byJobType": [
        {
          "label": "Retail-No Fin",
          "median": 36,
          "mean": 86,
          "count": 168
        },
        {
          "label": "Retail-Fin",
          "median": 0,
          "mean": 0,
          "count": 0
        },
        {
          "label": "Insurance",
          "median": 94,
          "mean": 334,
          "count": 8
        },
        {
          "label": "Repair",
          "median": 1,
          "mean": 17,
          "count": 51
        },
        {
          "label": "Install",
          "median": 63,
          "mean": 131,
          "count": 124
        }
      ],
      "byMarket": [
        {
          "market": "Dayton",
          "median": 0,
          "mean": 34,
          "count": 8
        },
        {
          "market": "DC Metro",
          "median": 20,
          "mean": 80,
          "count": 22
        },
        {
          "market": "Detroit Metro",
          "median": 21,
          "mean": 54,
          "count": 35
        },
        {
          "market": "Richmond",
          "median": 22,
          "mean": 45,
          "count": 7
        },
        {
          "market": "Cleveland",
          "median": 25,
          "mean": 49,
          "count": 16
        },
        {
          "market": "Cincinnati",
          "median": 33,
          "mean": 46,
          "count": 17
        },
        {
          "market": "Nashville",
          "median": 50,
          "mean": 83,
          "count": 9
        },
        {
          "market": "Columbus",
          "median": 57,
          "mean": 250,
          "count": 25
        },
        {
          "market": "Raleigh",
          "median": 99,
          "mean": 118,
          "count": 32
        }
      ],
      "starInsuranceClosers": []
    },
    "completedBilling": {
      "totalUnbilled": 0,
      "totalJobs": 0,
      "avgAge": 0,
      "medAge": 0,
      "tiers": [],
      "bySubStatus": [],
      "byMarket": [],
      "byRepTop15": [],
      "fullJobList": []
    },
    "weeklyTargets_BUDGET": {
      "avgWeeklyNeed": 1476377.34,
      "weeksRemaining": 35,
      "annualPlan": 51673207,
      "byJobType": [],
      "byTrade": [],
      "byMarket": [
        {
          "market": "Columbus",
          "total": 419796.31,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 2.2
        },
        {
          "market": "Detroit Metro",
          "total": 398334.19,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 2.4
        },
        {
          "market": "Raleigh",
          "total": 236774.26,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.7
        },
        {
          "market": "Cleveland",
          "total": 171773.25,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.5
        },
        {
          "market": "Cincinnati",
          "total": 86330.12,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.3
        },
        {
          "market": "DC Metro",
          "total": 60192.82,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.3
        },
        {
          "market": "Nashville",
          "total": 38504.2,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.5
        },
        {
          "market": "Dayton",
          "total": 26528.08,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.5
        },
        {
          "market": "Richmond",
          "total": 17555.57,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.5
        },
        {
          "market": "Indianapolis",
          "total": 16479.2,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.1
        },
        {
          "market": "Knoxville",
          "total": 4109.34,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.2
        }
      ],
      "weekSchedule": [
        {
          "wk": "05/25/2026",
          "mo": "May",
          "target": 1476377.34
        },
        {
          "wk": "06/01/2026",
          "mo": "Jun",
          "target": 1476377.34
        },
        {
          "wk": "06/08/2026",
          "mo": "Jun",
          "target": 1476377.34
        },
        {
          "wk": "06/15/2026",
          "mo": "Jun",
          "target": 1476377.34
        },
        {
          "wk": "06/22/2026",
          "mo": "Jun",
          "target": 1476377.34
        },
        {
          "wk": "06/29/2026",
          "mo": "Jun",
          "target": 1476377.34
        },
        {
          "wk": "07/06/2026",
          "mo": "Jul",
          "target": 1476377.34
        },
        {
          "wk": "07/13/2026",
          "mo": "Jul",
          "target": 1476377.34
        },
        {
          "wk": "07/20/2026",
          "mo": "Jul",
          "target": 1476377.34
        },
        {
          "wk": "07/27/2026",
          "mo": "Jul",
          "target": 1476377.34
        },
        {
          "wk": "08/03/2026",
          "mo": "Aug",
          "target": 1476377.34
        },
        {
          "wk": "08/10/2026",
          "mo": "Aug",
          "target": 1476377.34
        },
        {
          "wk": "08/17/2026",
          "mo": "Aug",
          "target": 1476377.34
        },
        {
          "wk": "08/24/2026",
          "mo": "Aug",
          "target": 1476377.34
        },
        {
          "wk": "08/31/2026",
          "mo": "Aug",
          "target": 1476377.34
        },
        {
          "wk": "09/07/2026",
          "mo": "Sep",
          "target": 1476377.34
        },
        {
          "wk": "09/14/2026",
          "mo": "Sep",
          "target": 1476377.34
        },
        {
          "wk": "09/21/2026",
          "mo": "Sep",
          "target": 1476377.34
        },
        {
          "wk": "09/28/2026",
          "mo": "Sep",
          "target": 1476377.34
        },
        {
          "wk": "10/05/2026",
          "mo": "Oct",
          "target": 1476377.34
        },
        {
          "wk": "10/12/2026",
          "mo": "Oct",
          "target": 1476377.34
        },
        {
          "wk": "10/19/2026",
          "mo": "Oct",
          "target": 1476377.34
        },
        {
          "wk": "10/26/2026",
          "mo": "Oct",
          "target": 1476377.34
        },
        {
          "wk": "11/02/2026",
          "mo": "Nov",
          "target": 1476377.34
        },
        {
          "wk": "11/09/2026",
          "mo": "Nov",
          "target": 1476377.34
        },
        {
          "wk": "11/16/2026",
          "mo": "Nov",
          "target": 1476377.34
        },
        {
          "wk": "11/23/2026",
          "mo": "Nov",
          "target": 1476377.34
        },
        {
          "wk": "11/30/2026",
          "mo": "Nov",
          "target": 1476377.34
        },
        {
          "wk": "12/07/2026",
          "mo": "Dec",
          "target": 1476377.34
        },
        {
          "wk": "12/14/2026",
          "mo": "Dec",
          "target": 1476377.34
        },
        {
          "wk": "12/21/2026",
          "mo": "Dec",
          "target": 1476377.34
        },
        {
          "wk": "12/28/2026",
          "mo": "Dec",
          "target": 1476377.34
        }
      ],
      "recent4WkAvg": 1812131.26
    },
    "budgetRecovery": {
      "fullYearBudget": 51673207,
      "sourceFile": "2026 Commercial Budget.xlsx",
      "totalToRecover": 0,
      "upliftPct": -5.6,
      "q1Budget": 4533497.2,
      "q1Actual": 5414371.34,
      "q1Shortfall": 880874.14,
      "aprilGap": 1583469.55,
      "aprilBudget": 3233126.48,
      "aprilFcst": 4816596.03,
      "adjWeeklySalesAvg": 1184063.99,
      "origWeeklySalesAvg": 1254473.81,
      "salesDeltaPerWeek": -70409.82,
      "weeksRemaining": 35,
      "adjWeeklyProdAvg": 1184063.99,
      "origWeeklyProdAvg": 1254473.81,
      "prodDeltaPerWeek": -70409.82,
      "monthlyBridge": [
        {
          "mo": "Jan 2026",
          "monthIdx": 0,
          "origBudget": 664114.1,
          "fcst": 664114.1,
          "recovTarget": 1085061.87,
          "catchUp": 0,
          "status": "Actual",
          "liveActual": 1085061.87,
          "deals": 52
        },
        {
          "mo": "Feb 2026",
          "monthIdx": 1,
          "origBudget": 788730.42,
          "fcst": 788730.42,
          "recovTarget": 788730.42,
          "catchUp": 0,
          "status": "Actual",
          "liveActual": 363231.03,
          "deals": 37
        },
        {
          "mo": "Mar 2026",
          "monthIdx": 2,
          "origBudget": 3080652.68,
          "fcst": 3080652.68,
          "recovTarget": 3966078.44,
          "catchUp": 0,
          "status": "Actual",
          "liveActual": 3966078.44,
          "deals": 49
        },
        {
          "mo": "Apr 2026",
          "monthIdx": 3,
          "origBudget": 3233126.48,
          "fcst": 3233126.48,
          "recovTarget": 4816596.03,
          "catchUp": 0,
          "status": "Actual",
          "liveActual": 4816596.03,
          "deals": 76
        },
        {
          "mo": "May 2026",
          "monthIdx": 4,
          "origBudget": 6618395.96,
          "fcst": 6618395.96,
          "recovTarget": 6618395.96,
          "catchUp": 0,
          "status": "Active",
          "liveActual": 474041.53,
          "deals": 22
        },
        {
          "mo": "Jun 2026",
          "monthIdx": 5,
          "origBudget": 3664695.3,
          "fcst": 3664695.3,
          "recovTarget": 3664695.3,
          "catchUp": 0,
          "status": "Recovery",
          "deals": 0
        },
        {
          "mo": "Jul 2026",
          "monthIdx": 6,
          "origBudget": 5298470.3,
          "fcst": 5298470.3,
          "recovTarget": 5298470.3,
          "catchUp": 0,
          "status": "Recovery",
          "deals": 0
        },
        {
          "mo": "Aug 2026",
          "monthIdx": 7,
          "origBudget": 5335688.23,
          "fcst": 5335688.23,
          "recovTarget": 5335688.23,
          "catchUp": 0,
          "status": "Recovery",
          "deals": 0
        },
        {
          "mo": "Sep 2026",
          "monthIdx": 8,
          "origBudget": 4474155.35,
          "fcst": 4474155.35,
          "recovTarget": 4474155.35,
          "catchUp": 0,
          "status": "Recovery",
          "deals": 0
        },
        {
          "mo": "Oct 2026",
          "monthIdx": 9,
          "origBudget": 7363288.71,
          "fcst": 7363288.71,
          "recovTarget": 7363288.71,
          "catchUp": 0,
          "status": "Recovery",
          "deals": 0
        },
        {
          "mo": "Nov 2026",
          "monthIdx": 10,
          "origBudget": 5872277.99,
          "fcst": 5872277.99,
          "recovTarget": 5872277.99,
          "catchUp": 0,
          "status": "Recovery",
          "deals": 0
        },
        {
          "mo": "Dec 2026",
          "monthIdx": 11,
          "origBudget": 5279611.49,
          "fcst": 5279611.49,
          "recovTarget": 5279611.49,
          "catchUp": 0,
          "status": "Recovery",
          "deals": 0
        }
      ],
      "adjSalesByMarket": [
        {
          "market": "Columbus",
          "recovTarget": 764235.47,
          "original": 784255.95,
          "delta": -20020.48
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 725163.85,
          "original": 744160.79,
          "delta": -18996.93
        },
        {
          "market": "Raleigh",
          "recovTarget": 431045.44,
          "original": 442337.43,
          "delta": -11291.99
        },
        {
          "market": "Cleveland",
          "recovTarget": 312711.69,
          "original": 320903.71,
          "delta": -8192.03
        },
        {
          "market": "Cincinnati",
          "recovTarget": 157163.22,
          "original": 161280.38,
          "delta": -4117.16
        },
        {
          "market": "DC Metro",
          "recovTarget": 109580.49,
          "original": 112451.14,
          "delta": -2870.65
        },
        {
          "market": "Nashville",
          "recovTarget": 70096.56,
          "original": 71932.86,
          "delta": -1836.3
        },
        {
          "market": "Dayton",
          "recovTarget": 48294.14,
          "original": 49559.29,
          "delta": -1265.15
        },
        {
          "market": "Richmond",
          "recovTarget": 31959.76,
          "original": 32797,
          "delta": -837.24
        },
        {
          "market": "Indianapolis",
          "recovTarget": 30000.23,
          "original": 30786.14,
          "delta": -785.91
        },
        {
          "market": "Knoxville",
          "recovTarget": 7481.02,
          "original": 7677,
          "delta": -195.98
        }
      ],
      "adjProdByMarket": [
        {
          "market": "Columbus",
          "recovTarget": 764235.47,
          "original": 784255.95,
          "delta": -20020.48
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 725163.85,
          "original": 744160.79,
          "delta": -18996.93
        },
        {
          "market": "Raleigh",
          "recovTarget": 431045.44,
          "original": 442337.43,
          "delta": -11291.99
        },
        {
          "market": "Cleveland",
          "recovTarget": 312711.69,
          "original": 320903.71,
          "delta": -8192.03
        },
        {
          "market": "Cincinnati",
          "recovTarget": 157163.22,
          "original": 161280.38,
          "delta": -4117.16
        },
        {
          "market": "DC Metro",
          "recovTarget": 109580.49,
          "original": 112451.14,
          "delta": -2870.65
        },
        {
          "market": "Nashville",
          "recovTarget": 70096.56,
          "original": 71932.86,
          "delta": -1836.3
        },
        {
          "market": "Dayton",
          "recovTarget": 48294.14,
          "original": 49559.29,
          "delta": -1265.15
        },
        {
          "market": "Richmond",
          "recovTarget": 31959.76,
          "original": 32797,
          "delta": -837.24
        },
        {
          "market": "Indianapolis",
          "recovTarget": 30000.23,
          "original": 30786.14,
          "delta": -785.91
        },
        {
          "market": "Knoxville",
          "recovTarget": 7481.02,
          "original": 7677,
          "delta": -195.98
        }
      ],
      "actualSource": "NetSuite AR · invoiced revenue",
      "netsuiteTotal": 10705008.9,
      "netsuiteInvoiceCount": 133,
      "netsuiteLatestDate": "2026-05-14"
    },
    "commentary": {
      "whatsWorking": [
        "Sales Trajectory: Monthly sales moved from January $3.46M to May $2.12M (-39%). Annualized run rate: $51.07M.",
        "Premium Deal Types: Insurance averages $426,863 per deal. Retail-Financing averages $32,200 (highest per-deal value). Retail-No Financing averages $69,867 (the volume engine).",
        "Sold Conversion: 233 of 236 signed contracts (98.7%) have made it to Sold status for $19.30M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Production Review Queue: 2 deals worth $0 sitting in Production Review. Watch for backlog growth, it delays revenue recognition.",
        "Repair Rate Elevated: 29.7% of all deals are repairs (70 of 236). Repairs average ~$2,874, low value relative to installs at $115,790."
      ],
      "criticalRisks": [
        "Pipeline kickbacks company-wide: 0 kickbacks totaling $0.",
        "Production Review backlog: 2 deals ($0)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 36d median close on 168 retail deals.",
        "Insurance Density: $426,863 avg on 8 deals = $3.41M; +20% lift = ~$683K.",
        "Financing Lifts Ticket: Retail-Financing averages $32,200, highest per-deal value."
      ],
      "fixList": [
        "Production Review Bottleneck, 2 deals; add temporary PM capacity.",
        "Financing Push, 1 financing deals YTD (0.4%) at $32,200 avg. Target 15% mix."
      ],
      "actionPlan": {
        "thisWeek": [
          "Production Review Surge Plan, 2 deals ($0) in queue."
        ],
        "thisMonth": [
          "Supplement Escalation SOP, 7/14/30 day cadence with carrier escalation.",
          "Completed-to-Billing SLA, 100% invoiced within 21 days.",
          "Repair Triage Pilot in markets where repair rate exceeds 25%.",
          "Financing Training, peer training led by top financing reps. Target 15% mix."
        ],
        "thisQuarter": [
          "Add Kickback Reason field to accounting workflow.",
          "Repair Business Decision, 70 repairs YTD at ~$2,874 avg.",
          "Ops Capacity Planning, May hit 22 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "_source": "calculator/revenue-forecast-mf.js MF-v1.1-2026-05-04",
    "title": "Multi-Family Revenue Forecast",
    "subtitle": "MF-v1 · Job-by-job event model · Data through 2026-05-18",
    "runDate": "2026-05-18",
    "methodologyLock": {
      "version": "MF-v1.1-2026-05-04",
      "lockedOn": "2026-05-04",
      "items": [
        "Annual budget $51.67M (sourced from Commercial Budget XLSX)",
        "Revenue = Date Moved to Invoiced",
        "Start = Date Moved to In Progress (or Start Date if missing)",
        "WIP = jobs with start ≤ month-end AND no invoice (or invoice > month-end)"
      ]
    },
    "kpis": [
      {
        "label": "Invoiced YTD",
        "value": "$10.71M",
        "sub": "5 months elapsed"
      },
      {
        "label": "YTD vs Plan",
        "value": "−$3.14M",
        "sub": "Plan YTD: $13.84M",
        "trend": "negative"
      },
      {
        "label": "YTD vs Forecast",
        "value": "+$349K",
        "sub": "Lisa's forecast YTD: $10.36M",
        "trend": "positive"
      },
      {
        "label": "Plan-Rest Forecast",
        "value": "$46.59M",
        "sub": "YTD actual + remaining-month plan"
      },
      {
        "label": "Annual Budget",
        "value": "$51.67M",
        "sub": "2026 MF target"
      },
      {
        "label": "Forecast vs Budget",
        "value": "−$5.08M",
        "sub": "9.8% uplift needed",
        "trend": "negative"
      },
      {
        "label": "Current WIP",
        "value": "$11.16M",
        "sub": "18 jobs in flight today"
      },
      {
        "label": "Last Month Revenue",
        "value": "$4.82M",
        "sub": "April 2026"
      }
    ],
    "execSummary": {
      "budget": 51673207,
      "modelAnnualInvoiced": 25692021.36,
      "gap": -5083232.7195897475,
      "narrative": "5 months of FY2026 MF activity reported, $10.71M invoiced YTD. Run-rate annualizes to $25.69M against the $51.67M plan, a $5.08M shortfall (9.8% uplift needed)."
    },
    "monthRevenue": {
      "jan": {
        "invoiced": 1085061.87,
        "wipChange": -777936.1700000002,
        "netRevenue": 1085061.87,
        "startingCount": 5,
        "completingCount": 14,
        "plan": 639122.2851245126,
        "gap": 445939.5848754875
      },
      "feb": {
        "invoiced": 363231.03,
        "wipChange": 40753.27999999997,
        "netRevenue": 363231.03,
        "startingCount": 10,
        "completingCount": 10,
        "plan": 759049.0680259366,
        "gap": -395818.0380259366
      },
      "mar": {
        "invoiced": 3966078.4399999995,
        "wipChange": 3682827.2600000007,
        "netRevenue": 3966078.4399999995,
        "startingCount": 29,
        "completingCount": 33,
        "plan": 2964722.142117475,
        "gap": 1001356.2978825243
      },
      "apr": {
        "invoiced": 4816596.029999999,
        "wipChange": 715005.79,
        "netRevenue": 4816596.029999999,
        "startingCount": 31,
        "completingCount": 37,
        "plan": 3111458.0780510968,
        "gap": 1705137.9519489026
      },
      "may": {
        "invoiced": 474041.53,
        "wipChange": 3460994.0200000005,
        "netRevenue": 474041.53,
        "startingCount": 19,
        "completingCount": 26,
        "plan": 6369333.738681715,
        "gap": -5895292.208681715
      },
      "jun": {
        "invoiced": 0,
        "wipChange": 0,
        "netRevenue": 0,
        "startingCount": 0,
        "completingCount": 0,
        "plan": 3526786.1836693906,
        "gap": -3526786.1836693906
      },
      "jul": {
        "invoiced": 0,
        "wipChange": 0,
        "netRevenue": 0,
        "startingCount": 0,
        "completingCount": 0,
        "plan": 5099079.268445946,
        "gap": -5099079.268445946
      },
      "aug": {
        "invoiced": 0,
        "wipChange": 0,
        "netRevenue": 0,
        "startingCount": 0,
        "completingCount": 0,
        "plan": 5134896.622445581,
        "gap": -5134896.622445581
      },
      "sep": {
        "invoiced": 0,
        "wipChange": 0,
        "netRevenue": 0,
        "startingCount": 0,
        "completingCount": 0,
        "plan": 4305784.787290315,
        "gap": -4305784.787290315
      },
      "oct": {
        "invoiced": 0,
        "wipChange": 0,
        "netRevenue": 0,
        "startingCount": 0,
        "completingCount": 0,
        "plan": 7086194.828295313,
        "gap": -7086194.828295313
      },
      "nov": {
        "invoiced": 0,
        "wipChange": 0,
        "netRevenue": 0,
        "startingCount": 0,
        "completingCount": 0,
        "plan": 5651293.5390924625,
        "gap": -5651293.5390924625
      },
      "dec": {
        "invoiced": 0,
        "wipChange": 0,
        "netRevenue": 0,
        "startingCount": 0,
        "completingCount": 0,
        "plan": 5080930.151171241,
        "gap": -5080930.151171241
      }
    },
    "weeklyTargetsHeader": {
      "avgWeeklyNeed": 993715.5192307692,
      "recent4WkAvg": 0,
      "gap": 0,
      "productionAvgWeeklyNeed": 0,
      "productionCycleStart": 0,
      "productionCycleComplete": 0,
      "productionTotalCycle": 0
    },
    "budgetRecoveryHeader": {
      "fullYearBudget": 51673207,
      "gap": 5083232.7195897475,
      "upliftPct": 9.83726966973377,
      "aprilGap": 0,
      "q1OriginalBudget": 0,
      "q1Actual": 0,
      "q1Shortfall": 0,
      "recoveryRatio": 0
    },
    "profitabilitySummary": {
      "combinedGP": 15659711.030000005,
      "combinedGP_pct": 33.75751398840294,
      "combinedRevenue": 46388815.940000035,
      "y2025_GP_pct": 33.136567163202685,
      "y2025_revenue": 41096632.59000003,
      "y2025_jobs": 341,
      "y2026_GP_pct": 38.5794980062435,
      "y2026_revenue": 5292183.350000001,
      "y2026_jobs": 57,
      "materialCost": 15894920.870000003,
      "laborCost": 14333492.740000004,
      "otherCost": 462502.27999999997,
      "commissions": 103518.12,
      "materialPctContract": 34.264553961797006,
      "laborPctContract": 30.898595813566683,
      "otherPctContract": 0.9970124708468676,
      "commissionPctContract": 0.2231531844526746,
      "sourceFile": "GregProfitabilityMFResults578.csv",
      "jobsParsed": 398
    },
    "profitabilityByJobType": [
      {
        "key": "Retail",
        "jobs": 55,
        "revenue": 4033141.640000001,
        "expenses": 2704510.769999999,
        "gross_profit": 1328630.8700000006,
        "material": 1383377.85,
        "labor": 1302389.6600000004,
        "other": 16616.94,
        "commission": 0,
        "contract": 4033373.340000001,
        "gp_pct": 32.942826922388974
      },
      {
        "key": "Insurance",
        "jobs": 2,
        "revenue": 1259041.71,
        "expenses": 545974.8099999999,
        "gross_profit": 713066.8999999999,
        "material": 299820.03,
        "labor": 241238.54,
        "other": 4578.1,
        "commission": 0,
        "contract": 1259041.71,
        "gp_pct": 56.635685246678605
      }
    ],
    "profitabilityByMarket": [
      {
        "key": "Columbus",
        "jobs": 12,
        "revenue": 2253898.7399999998,
        "expenses": 1223430.53,
        "gross_profit": 1030468.2100000001,
        "material": 606022.2100000001,
        "labor": 600552.1,
        "other": 16212.130000000003,
        "commission": 0,
        "contract": 2254893.84,
        "gp_pct": 45.71936581321307
      },
      {
        "key": "Raleigh",
        "jobs": 15,
        "revenue": 1061433.2,
        "expenses": 718048.7899999999,
        "gross_profit": 343384.4100000001,
        "material": 378056.85,
        "labor": 339603.04,
        "other": 122,
        "commission": 0,
        "contract": 1061433.2,
        "gp_pct": 32.35101464698863
      },
      {
        "key": "Detroit Metro",
        "jobs": 6,
        "revenue": 449449.04,
        "expenses": 309408.17,
        "gross_profit": 140040.87000000002,
        "material": 167340.15000000002,
        "labor": 139188.02,
        "other": 2880,
        "commission": 0,
        "contract": 448685.63999999996,
        "gp_pct": 31.158342222735648
      },
      {
        "key": "DC Metro",
        "jobs": 5,
        "revenue": 367156,
        "expenses": 236244.07,
        "gross_profit": 130911.93,
        "material": 108454.76999999999,
        "labor": 127610.81,
        "other": 0,
        "commission": 0,
        "contract": 367156,
        "gp_pct": 35.65566952467071
      },
      {
        "key": "Cleveland",
        "jobs": 4,
        "revenue": 296880.71,
        "expenses": 190371.95,
        "gross_profit": 106508.76000000001,
        "material": 107093.8,
        "labor": 80513.07,
        "other": 1980.91,
        "commission": 0,
        "contract": 296880.71,
        "gp_pct": 35.875944920773065
      },
      {
        "key": "Cincinnati",
        "jobs": 6,
        "revenue": 220611.62,
        "expenses": 120672.15,
        "gross_profit": 99939.47,
        "material": 71749.38,
        "labor": 48890.16,
        "other": 0,
        "commission": 0,
        "contract": 220611.62,
        "gp_pct": 45.30109066784424
      },
      {
        "key": "Dayton",
        "jobs": 2,
        "revenue": 186672,
        "expenses": 127637.43,
        "gross_profit": 59034.57000000001,
        "material": 65039.84,
        "labor": 62030,
        "other": 0,
        "commission": 0,
        "contract": 186672,
        "gp_pct": 31.624758935458992
      },
      {
        "key": "Nashville",
        "jobs": 3,
        "revenue": 176677.92,
        "expenses": 128750.75,
        "gross_profit": 47927.17,
        "material": 71297.09999999999,
        "labor": 57446,
        "other": 0,
        "commission": 0,
        "contract": 176677.92,
        "gp_pct": 27.12685886272602
      },
      {
        "key": "Indianapolis",
        "jobs": 1,
        "revenue": 140624,
        "expenses": 96033.25,
        "gross_profit": 44590.75,
        "material": 55848.25,
        "labor": 40185,
        "other": 0,
        "commission": 0,
        "contract": 140624,
        "gp_pct": 31.709203265445446
      },
      {
        "key": "Richmond",
        "jobs": 1,
        "revenue": 84529.44,
        "expenses": 61380.77,
        "gross_profit": 23148.670000000006,
        "material": 33941.77,
        "labor": 27439,
        "other": 0,
        "commission": 0,
        "contract": 84529.44,
        "gp_pct": 27.38533462424453
      },
      {
        "key": "Knoxville",
        "jobs": 2,
        "revenue": 54250.68,
        "expenses": 38507.72,
        "gross_profit": 15742.96,
        "material": 18353.76,
        "labor": 20171,
        "other": 0,
        "commission": 0,
        "contract": 54250.68,
        "gp_pct": 29.018917366565727
      }
    ],
    "profitabilityByJobType2025": [
      {
        "key": "Retail",
        "jobs": 322,
        "revenue": 34070807.15,
        "expenses": 23545501.65,
        "gross_profit": 10525305.500000011,
        "material": 12191399.359999996,
        "labor": 10988804,
        "other": 358517.7099999999,
        "commission": 89990.93000000001,
        "contract": 34156436.58999999,
        "gp_pct": 30.892445411291092
      },
      {
        "key": "Insurance",
        "jobs": 18,
        "revenue": 6967316.24,
        "expenses": 3889108.4200000004,
        "gross_profit": 3078207.82,
        "material": 1994993.9700000002,
        "labor": 1781490.54,
        "other": 82789.53,
        "commission": 13527.19,
        "contract": 6900126.24,
        "gp_pct": 44.18068182878979
      },
      {
        "key": "LowMar",
        "jobs": 1,
        "revenue": 58509.2,
        "expenses": 44009.26,
        "gross_profit": 14499.939999999995,
        "material": 25329.66,
        "labor": 19570,
        "other": 0,
        "commission": 0,
        "contract": 58509.2,
        "gp_pct": 24.782324830966747
      }
    ],
    "profitabilityByMarket2025": [
      {
        "key": "Detroit Metro",
        "jobs": 75,
        "revenue": 10842963.209999995,
        "expenses": 7596323.470000002,
        "gross_profit": 3246639.739999998,
        "material": 3831066.870000001,
        "labor": 3647719.15,
        "other": 129949.63,
        "commission": 15631.079999999998,
        "contract": 10833814.849999996,
        "gp_pct": 29.942366096066458
      },
      {
        "key": "Raleigh",
        "jobs": 63,
        "revenue": 8327578.659999999,
        "expenses": 5840641.719999999,
        "gross_profit": 2486936.9399999995,
        "material": 3143360.86,
        "labor": 2630796.22,
        "other": 61938.36,
        "commission": 20939.480000000003,
        "contract": 8339934.249999999,
        "gp_pct": 29.86386609526183
      },
      {
        "key": "Columbus",
        "jobs": 53,
        "revenue": 7921068.729999999,
        "expenses": 5432709.380000001,
        "gross_profit": 2488359.35,
        "material": 2784453.329999999,
        "labor": 2451648.35,
        "other": 153879.95000000004,
        "commission": 0,
        "contract": 7974578.729999999,
        "gp_pct": 31.41443957651407
      },
      {
        "key": "Cleveland",
        "jobs": 38,
        "revenue": 4609591.16,
        "expenses": 2657564.5599999996,
        "gross_profit": 1952026.6,
        "material": 1341334.4800000004,
        "labor": 1269540.4999999998,
        "other": 47020.33,
        "commission": 25537.39,
        "contract": 4608125.340000001,
        "gp_pct": 42.34706576450481
      },
      {
        "key": "DC Metro",
        "jobs": 19,
        "revenue": 2648838.27,
        "expenses": 1777270.68,
        "gross_profit": 871567.59,
        "material": 878753.9800000001,
        "labor": 892073.7899999999,
        "other": 6695.08,
        "commission": 8911.019999999999,
        "contract": 2742382.0300000003,
        "gp_pct": 32.90376765811376
      },
      {
        "key": "Cincinnati",
        "jobs": 48,
        "revenue": 2207354.74,
        "expenses": 1417841.5700000003,
        "gross_profit": 789513.17,
        "material": 748939.7099999997,
        "labor": 660057.99,
        "other": 8135.139999999999,
        "commission": 12133.57,
        "contract": 2195480.07,
        "gp_pct": 35.76738961314392
      },
      {
        "key": "Nashville",
        "jobs": 9,
        "revenue": 1841735.6199999999,
        "expenses": 991433.23,
        "gross_profit": 850302.39,
        "material": 501467.06,
        "labor": 473073.49,
        "other": 14053.54,
        "commission": 1266.48,
        "contract": 1726735.6199999999,
        "gp_pct": 46.16853693691389
      },
      {
        "key": "Winston-Salem",
        "jobs": 5,
        "revenue": 1602303.2,
        "expenses": 959829.91,
        "gross_profit": 642473.2899999999,
        "material": 537354.01,
        "labor": 415100.53,
        "other": 9383.93,
        "commission": 15684.97,
        "contract": 1599017.2,
        "gp_pct": 40.09686119331222
      },
      {
        "key": "Indianapolis",
        "jobs": 8,
        "revenue": 376998.46,
        "expenses": 303750.0399999999,
        "gross_profit": 73248.42000000001,
        "material": 178099.49000000002,
        "labor": 121275.52,
        "other": 4550.43,
        "commission": 0,
        "contract": 376803.4,
        "gp_pct": 19.42936849131957
      },
      {
        "key": "Dayton",
        "jobs": 6,
        "revenue": 346262.7,
        "expenses": 226257.36999999997,
        "gross_profit": 120005.32999999999,
        "material": 124503.94000000002,
        "labor": 97577,
        "other": 3861.7,
        "commission": 3071.35,
        "contract": 346262.7,
        "gp_pct": 34.65730787636092
      },
      {
        "key": "Knoxville",
        "jobs": 12,
        "revenue": 238499.4,
        "expenses": 179535.6,
        "gross_profit": 58963.79999999999,
        "material": 90615.73000000001,
        "labor": 87086,
        "other": 1839.15,
        "commission": 342.78,
        "contract": 238499.4,
        "gp_pct": 24.722829491394943
      },
      {
        "key": "Richmond",
        "jobs": 4,
        "revenue": 83045.44,
        "expenses": 57095.12000000001,
        "gross_profit": 25950.320000000003,
        "material": 30035.12,
        "labor": 27060,
        "other": 0,
        "commission": 0,
        "contract": 83045.44,
        "gp_pct": 31.248338259150653
      },
      {
        "key": "Greenville",
        "jobs": 1,
        "revenue": 50393,
        "expenses": 38366.68,
        "gross_profit": 12026.32,
        "material": 21738.41,
        "labor": 16856,
        "other": 0,
        "commission": 0,
        "contract": 50393,
        "gp_pct": 23.865060623499296
      }
    ],
    "pipelineSnapshot": {
      "stages": [
        {
          "stage": "In WIP today",
          "jobs": 18,
          "value": 11158323
        }
      ],
      "totalJobs": 18,
      "totalValue": 11158323
    },
    "commentary": {
      "actionableRecommendations": [
        "Annualized pace is $5.08M short of the $51.67M plan. Push to invoice WIP balance ($11.2M) faster, or accelerate starts."
      ],
      "strategyHighlights": []
    },
    "tables": [
      {
        "id": "mf-monthly-rollup",
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
            "label": "Starts",
            "num": true
          },
          {
            "label": "WIP End",
            "num": true
          },
          {
            "label": "# Inv.",
            "num": true
          },
          {
            "label": "# Start",
            "num": true
          }
        ],
        "rows": [
          [
            "January",
            "$1.09M",
            "$639K",
            "$446K",
            "$307K",
            "$2.08M",
            14,
            5
          ],
          [
            "February",
            "$363K",
            "$759K",
            "$-396K",
            "$404K",
            "$2.22M",
            10,
            10
          ],
          [
            "March",
            "$3.97M",
            "$2.96M",
            "$1M",
            "$7.65M",
            "$6.04M",
            33,
            29
          ],
          [
            "April",
            "$4.82M",
            "$3.11M",
            "$1.71M",
            "$5.53M",
            "$7.95M",
            37,
            31
          ],
          [
            "May",
            "$474K",
            "$6.37M",
            "$-5.9M",
            "$3.94M",
            "$11.16M",
            26,
            19
          ],
          [
            "June",
            "$0",
            "$3.53M",
            "$-3.53M",
            "$0",
            "$11.16M",
            0,
            0
          ],
          [
            "July",
            "$0",
            "$5.1M",
            "$-5.1M",
            "$0",
            "$11.16M",
            0,
            0
          ],
          [
            "August",
            "$0",
            "$5.13M",
            "$-5.13M",
            "$0",
            "$11.16M",
            0,
            0
          ],
          [
            "September",
            "$0",
            "$4.31M",
            "$-4.31M",
            "$0",
            "$11.16M",
            0,
            0
          ],
          [
            "October",
            "$0",
            "$7.09M",
            "$-7.09M",
            "$0",
            "$11.16M",
            0,
            0
          ],
          [
            "November",
            "$0",
            "$5.65M",
            "$-5.65M",
            "$0",
            "$11.16M",
            0,
            0
          ],
          [
            "December",
            "$0",
            "$5.08M",
            "$-5.08M",
            "$0",
            "$11.16M",
            0,
            0
          ]
        ]
      },
      {
        "id": "mf-variance",
        "title": "Forecast vs Actual (per month)",
        "headers": [
          "Month",
          {
            "label": "Forecast",
            "num": true
          },
          {
            "label": "Actual",
            "num": true
          },
          {
            "label": "Variance",
            "num": true
          },
          {
            "label": "Variance %",
            "num": true
          }
        ],
        "rows": [
          [
            "January",
            "—",
            "$1.09M",
            "—",
            "—"
          ],
          [
            "February",
            "—",
            "$363K",
            "—",
            "—"
          ],
          [
            "March",
            "—",
            "$3.97M",
            "—",
            "—"
          ],
          [
            "April",
            "$4.93M",
            "$4.82M",
            "$-115K",
            "-2%"
          ],
          [
            "May",
            "$5.42M",
            "$474K",
            "$-4.95M",
            "-91%"
          ],
          [
            "June",
            "—",
            "$0",
            "—",
            "—"
          ],
          [
            "July",
            "—",
            "$0",
            "—",
            "—"
          ],
          [
            "August",
            "—",
            "$0",
            "—",
            "—"
          ],
          [
            "September",
            "—",
            "$0",
            "—",
            "—"
          ],
          [
            "October",
            "—",
            "$0",
            "—",
            "—"
          ],
          [
            "November",
            "—",
            "$0",
            "—",
            "—"
          ],
          [
            "December",
            "—",
            "$0",
            "—",
            "—"
          ]
        ]
      },
      {
        "id": "mf-branch-forecast",
        "title": "Forecasted Revenue by Branch (per month)",
        "headers": [
          "Month",
          "Branch",
          {
            "label": "Forecast",
            "num": true
          },
          {
            "label": "# Jobs",
            "num": true
          },
          "Avg GM"
        ],
        "rows": [
          [
            "April",
            "Columbus",
            "$1.77M",
            5,
            "33.9%"
          ],
          [
            "April",
            "Detroit",
            "$1.4M",
            6,
            "27.5%"
          ],
          [
            "April",
            "Raleigh",
            "$738K",
            8,
            "30.9%"
          ],
          [
            "April",
            "Cincinnati",
            "$536K",
            10,
            "38.2%"
          ],
          [
            "April",
            "Cleveland",
            "$383K",
            5,
            "32.6%"
          ],
          [
            "April",
            "Nashville",
            "$89K",
            3,
            "30.0%"
          ],
          [
            "April",
            "DC",
            "$22K",
            1,
            "31.0%"
          ],
          [
            "May",
            "Raleigh",
            "$1.86M",
            5,
            "—"
          ],
          [
            "May",
            "Detroit",
            "$1.28M",
            6,
            "—"
          ],
          [
            "May",
            "Columbus",
            "$969K",
            7,
            "—"
          ],
          [
            "May",
            "Cincinnati",
            "$657K",
            10,
            "—"
          ],
          [
            "May",
            "Nashville",
            "$394K",
            2,
            "—"
          ],
          [
            "May",
            "Indianapolis",
            "$139K",
            2,
            "—"
          ],
          [
            "May",
            "DC",
            "$93K",
            4,
            "—"
          ],
          [
            "May",
            "Cleveland",
            "$32K",
            1,
            "—"
          ]
        ]
      },
      {
        "id": "mf-wip-schedule",
        "title": "Forecasted WIP Schedule (from Lisa's monthly forecasts)",
        "headers": [
          "Month",
          "Job",
          {
            "label": "Contract",
            "num": true
          },
          "% Complete by EOM",
          "Anticipated Completion",
          "Est. GM"
        ],
        "rows": [
          [
            "April",
            "Woodholme Village",
            "$3.21M",
            "25%",
            "June-26",
            "32%"
          ],
          [
            "April",
            "Eagle View",
            "$1.33M",
            "20%",
            "November-26",
            "32%"
          ],
          [
            "April",
            "Ashford Place",
            "$671K",
            "50%",
            "May-26",
            "24%"
          ],
          [
            "April",
            "Rosebrook Village",
            "$740K",
            "90%",
            "May-26",
            "28.02%"
          ],
          [
            "April",
            "One West Fifth",
            "$527K",
            "90%",
            "May-26",
            "—"
          ],
          [
            "April",
            "Ivy Hall HOA",
            "$458K",
            "33%",
            "May-26",
            "25.2%"
          ],
          [
            "April",
            "Townhomes at Highland Creek",
            "$624K",
            "15%",
            "May-26",
            "25.7%"
          ],
          [
            "May",
            "Woodholme Village",
            "$3.21M",
            "—",
            "—",
            "—"
          ],
          [
            "May",
            "Eagle View",
            "$1.33M",
            "—",
            "—",
            "—"
          ],
          [
            "May",
            "Ashford Place",
            "$671K",
            "—",
            "—",
            "—"
          ],
          [
            "May",
            "One West Fifth",
            "$527K",
            "—",
            "—",
            "—"
          ],
          [
            "May (new)",
            "Cider Mill Village",
            "$2.3M",
            "—",
            "—",
            "—"
          ],
          [
            "May (new)",
            "Northcrest II",
            "$336K",
            "—",
            "—",
            "—"
          ]
        ]
      },
      {
        "id": "mf-by-branch",
        "title": "By Branch (YTD)",
        "headers": [
          "Branch",
          {
            "label": "Invoiced",
            "num": true
          },
          {
            "label": "WIP",
            "num": true
          },
          {
            "label": "# Jobs",
            "num": true
          }
        ],
        "rows": [
          [
            "Columbus",
            "$3.55M",
            "$812K",
            24
          ],
          [
            "DC Metro",
            "$370K",
            "$3.4M",
            11
          ],
          [
            "Detroit Metro",
            "$0",
            "$3.54M",
            4
          ],
          [
            "Raleigh",
            "$1.79M",
            "$1.57M",
            35
          ],
          [
            "Detroit",
            "$2.52M",
            "$0",
            20
          ],
          [
            "Cincinnati",
            "$676K",
            "$1.44M",
            20
          ],
          [
            "Nashville",
            "$584K",
            "$394K",
            10
          ],
          [
            "Cleveland",
            "$733K",
            "$0",
            20
          ],
          [
            "Dayton",
            "$187K",
            "$0",
            2
          ],
          [
            "Indianapolis",
            "$149K",
            "$0",
            2
          ],
          [
            "Richmond",
            "$85K",
            "$0",
            1
          ],
          [
            "Knoxville",
            "$54K",
            "$0",
            2
          ],
          [
            "Greenville",
            "$0",
            "$0",
            0
          ],
          [
            "Greensboro",
            "$0",
            "$0",
            0
          ],
          [
            "Winston-Salem",
            "$0",
            "$0",
            0
          ],
          [
            "(unassigned)",
            "$0",
            "$0",
            0
          ]
        ]
      },
      {
        "id": "mf-by-jobtype",
        "title": "Revenue by Job Type (YTD)",
        "headers": [
          "Job Type",
          {
            "label": "Revenue",
            "num": true
          },
          {
            "label": "# Jobs",
            "num": true
          }
        ],
        "rows": [
          [
            "Retail-No Financing",
            "$7.21M",
            115
          ],
          [
            "Insurance",
            "$2.3M",
            4
          ],
          [
            "LowMar",
            "$59K",
            1
          ]
        ]
      },
      {
        "id": "mf-in-wip",
        "title": "Currently in WIP",
        "headers": [
          "Job",
          "Account",
          "Branch",
          {
            "label": "Contract",
            "num": true
          },
          "Started"
        ],
        "rows": [
          [
            "Job-103685",
            "WPM Real Estate Management",
            "DC Metro",
            "$3.21M",
            "2026-03-27"
          ],
          [
            "Job-111827",
            "Singh Management",
            "Detroit Metro",
            "$2.3M",
            "2026-05-11"
          ],
          [
            "Job-101476",
            "Towne Properties - Cincinnati West District Office",
            "Cincinnati",
            "$1.33M",
            "2025-11-17"
          ],
          [
            "Job-108550",
            "Oakwood Management Company",
            "Columbus",
            "$740K",
            "2026-04-13"
          ],
          [
            "Job-109026",
            "Select Management",
            "Detroit Metro",
            "$671K",
            "2026-04-13"
          ],
          [
            "Job-109665",
            "Charleston Management",
            "Raleigh",
            "$624K",
            "2026-04-27"
          ],
          [
            "Job-101478",
            "John P. Carroll",
            "Detroit Metro",
            "$537K",
            "2026-05-07"
          ],
          [
            "Job-111219",
            "Greystar Real Estate Management - NC",
            "Raleigh",
            "$486K",
            "2026-05-18"
          ],
          [
            "Job-105011",
            "Charleston Management",
            "Raleigh",
            "$459K",
            "2026-04-27"
          ],
          [
            "Job-111826",
            "Ghertner & Company",
            "Nashville",
            "$352K",
            "2026-04-26"
          ],
          [
            "Job-110389",
            "WPM Real Estate Management",
            "DC Metro",
            "$164K",
            "2026-05-06"
          ],
          [
            "Job-101477",
            "Towne Properties - Cincinnati West District Office",
            "Cincinnati",
            "$110K",
            "2025-11-17"
          ],
          [
            "Job-108824",
            "Ann Hall",
            "Columbus",
            "$48K",
            "2026-05-14"
          ],
          [
            "Job-109965",
            "Buckingham Companies",
            "Nashville",
            "$42K",
            "2026-05-11"
          ],
          [
            "Job-110287",
            "KS Management",
            "Detroit Metro",
            "$36K",
            "2026-05-14"
          ],
          [
            "Job-110601",
            "Allie Dye",
            "Columbus",
            "$24K",
            "2026-05-04"
          ],
          [
            "Job-111352",
            "The Management Group",
            "DC Metro",
            "$15K",
            "2026-05-15"
          ],
          [
            "Job-111157",
            "Associa - Community Management Corporation DC Market - Opp# 254255",
            "DC Metro",
            "$12K",
            "2026-05-04"
          ]
        ]
      }
    ],
    "charts": [
      {
        "id": "mf-rev-vs-plan-vs-forecast",
        "title": "Monthly Revenue: Forecast vs Actual vs Plan",
        "sub": "Forecast = Lisa's monthly schedule. Actual = Salesforce invoiced dates. Plan = Commercial Budget.",
        "config": {
          "type": "bar",
          "data": {
            "labels": [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            "datasets": [
              {
                "label": "Forecast",
                "data": [
                  0,
                  0,
                  0,
                  4931898.45,
                  5424329.3100000005,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                "backgroundColor": "#7895c4"
              },
              {
                "label": "Actual",
                "data": [
                  1085061.87,
                  363231.03,
                  3966078.4399999995,
                  4816596.029999999,
                  474041.53,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                "backgroundColor": "#1f2d4b"
              },
              {
                "label": "Plan",
                "data": [
                  639122.2851245126,
                  759049.0680259366,
                  2964722.142117475,
                  3111458.0780510968,
                  6369333.738681715,
                  3526786.1836693906,
                  5099079.268445946,
                  5134896.622445581,
                  4305784.787290315,
                  7086194.828295313,
                  5651293.5390924625,
                  5080930.151171241
                ],
                "type": "line",
                "borderColor": "#b23a2c",
                "borderDash": [
                  6,
                  4
                ],
                "backgroundColor": "transparent",
                "pointRadius": 2
              }
            ]
          }
        }
      },
      {
        "id": "mf-variance",
        "title": "Forecast Variance per Month",
        "sub": "Actual − Forecast. Positive = overperformed Lisa's schedule, negative = underperformed.",
        "config": {
          "type": "bar",
          "data": {
            "labels": [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            "datasets": [
              {
                "label": "Variance",
                "data": [
                  0,
                  0,
                  0,
                  -115302.42000000086,
                  -4950287.78,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                "backgroundColor": [
                  "#e3e6ec",
                  "#e3e6ec",
                  "#e3e6ec",
                  "#b23a2c",
                  "#b23a2c",
                  "#e3e6ec",
                  "#e3e6ec",
                  "#e3e6ec",
                  "#e3e6ec",
                  "#e3e6ec",
                  "#e3e6ec",
                  "#e3e6ec"
                ]
              }
            ]
          }
        }
      },
      {
        "id": "mf-wip-balance",
        "title": "WIP Balance at Month-End",
        "sub": "Sum of contract values for jobs in flight (started, not yet invoiced)",
        "config": {
          "type": "line",
          "data": {
            "labels": [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            "datasets": [
              {
                "label": "WIP Balance",
                "data": [
                  2081200.16,
                  2217620.42,
                  6038488.79,
                  7946232.68,
                  11158323,
                  11158323,
                  11158323,
                  11158323,
                  11158323,
                  11158323,
                  11158323,
                  11158323
                ],
                "borderColor": "#1f2d4b",
                "backgroundColor": "rgba(31,45,75,0.12)",
                "fill": true,
                "tension": 0.3
              }
            ]
          }
        }
      },
      {
        "id": "mf-starts-vs-completions",
        "title": "WIP Starts vs Completions per Month",
        "sub": "Are we adding to WIP faster than we drain it?",
        "config": {
          "type": "bar",
          "data": {
            "labels": [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            "datasets": [
              {
                "label": "New Starts",
                "data": [
                  307125.7,
                  403984.31,
                  7648905.7,
                  5531601.819999999,
                  3935035.5500000003,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                "backgroundColor": "#c77a1a"
              },
              {
                "label": "Completions",
                "data": [
                  1085061.87,
                  363231.03,
                  3966078.4399999995,
                  4816596.029999999,
                  474041.53,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                "backgroundColor": "#2e7d55"
              }
            ]
          }
        }
      }
    ],
    "monthsLabel": [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    "budgetInv": [
      639122.2851245126,
      759049.0680259366,
      2964722.142117475,
      3111458.0780510968,
      6369333.738681715,
      3526786.1836693906,
      5099079.268445946,
      5134896.622445581,
      4305784.787290315,
      7086194.828295313,
      5651293.5390924625,
      5080930.151171241
    ],
    "revModel": [
      1085061.87,
      363231.03,
      3966078.4399999995,
      4816596.029999999,
      474041.53,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "revFromKnown": [
      1085061.87,
      363231.03,
      3966078.4399999995,
      4816596.029999999,
      474041.53,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "requiredSales": [
      639122.2851245126,
      759049.0680259366,
      2964722.142117475,
      3111458.0780510968,
      6369333.738681715,
      3526786.1836693906,
      5099079.268445946,
      5134896.622445581,
      4305784.787290315,
      7086194.828295313,
      5651293.5390924625,
      5080930.151171241
    ],
    "backlogData": [
      2081200.16,
      2217620.42,
      6038488.79,
      7946232.68,
      11158323,
      11158323,
      11158323,
      11158323,
      11158323,
      11158323,
      11158323,
      11158323
    ],
    "tabs": []
  },
  "BACKLOG": {
    "_source": "calculator/backlog.js v1.0-rules-encoded",
    "title": "Job Backlog & Production",
    "subtitle": "Live job-level backlog",
    "headerMeta": {
      "totalJobs": 98,
      "totalWOs": 374,
      "portfolioValue": 23329285,
      "avgDaysInStatus": 43,
      "lastBuild": "2026-05-18T14:31:41.258Z"
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
    "kpisExecutive": [
      {
        "label": "Total Jobs",
        "value": "98",
        "sub": "374 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "10",
        "sub": "10.2% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "88",
        "sub": "89.8% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "0",
        "sub": "0.0% of In Progress",
        "tone": "crit"
      },
      {
        "label": "Avg Days in Status",
        "value": "43",
        "sub": "Job-level average",
        "tone": "warn"
      },
      {
        "label": "Total Portfolio Value",
        "value": "$23.33M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$12.05M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$0",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "0",
        "sub": "0.0% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$0",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "0",
        "sub": "Across 0 jobs",
        "tone": "info"
      },
      {
        "label": "RTS Ready Today",
        "value": "0",
        "sub": "No blocker, dispatch now",
        "tone": "good"
      },
      {
        "label": "Top Trailing Trade",
        "value": "-",
        "sub": "0 open WOs / 0 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "176",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "140",
        "sub": "79.5% of all holds",
        "tone": "warn"
      },
      {
        "label": "Pending Sales",
        "value": "0",
        "sub": "Awaiting sales disposition",
        "tone": "warn"
      },
      {
        "label": "Avg Hold Age",
        "value": "31d",
        "sub": "Mean days in hold across all sub-statuses",
        "tone": "info"
      }
    ],
    "kpisSales": [
      {
        "label": "Active Reps",
        "value": "18",
        "sub": "Reps with at least one open WO",
        "tone": "info"
      },
      {
        "label": "Stuck Value >30d",
        "value": "$12.05M",
        "sub": "Sum of stale value across all reps",
        "tone": "crit"
      },
      {
        "label": "Reps with Stuck Work",
        "value": "11",
        "sub": "Reps carrying any >30d WO",
        "tone": "warn"
      },
      {
        "label": "Top Stuck Rep",
        "value": "$3.66M",
        "sub": "Highest single-rep stuck value",
        "tone": "warn"
      }
    ],
    "kpisBacklog": [
      {
        "label": "Not Started Jobs",
        "value": "88",
        "sub": "89.8% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$17.10M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "592d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Detroit Metro",
        "sub": "23 jobs (26.1% of backlog)",
        "tone": "warn"
      }
    ],
    "charts": [
      {
        "id": "ch-wo-status",
        "labels": [
          "On Hold",
          "In Progress",
          "Ready to Schedule",
          "Scheduled",
          "New",
          "Completed"
        ],
        "datasets": [
          {
            "label": "Work Orders",
            "data": [
              176,
              79,
              55,
              50,
              10,
              4
            ]
          }
        ]
      },
      {
        "id": "ch-branch",
        "labels": [
          "Detroit Metro",
          "Columbus",
          "Raleigh",
          "Cleveland",
          "Cincinnati",
          "DC Metro",
          "Richmond",
          "Dayton",
          "Indianapolis",
          "Nashville"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              0,
              2,
              0,
              0,
              1,
              0,
              1,
              0,
              0,
              0
            ]
          },
          {
            "label": "Open",
            "data": [
              31,
              26,
              20,
              1,
              3,
              6,
              0,
              0,
              0,
              2
            ]
          },
          {
            "label": "On Hold",
            "data": [
              35,
              56,
              19,
              36,
              13,
              7,
              5,
              5,
              0,
              0
            ]
          },
          {
            "label": "RTS",
            "data": [
              11,
              19,
              9,
              0,
              11,
              0,
              2,
              0,
              3,
              0
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              44,
              2,
              3,
              0,
              0,
              0,
              0,
              1,
              0,
              0
            ]
          }
        ]
      },
      {
        "id": "ch-wo-aging",
        "labels": [
          "On Hold",
          "Completed",
          "In Progress",
          "Ready to Schedule",
          "Scheduled",
          "New"
        ],
        "datasets": [
          {
            "label": "Avg Days",
            "data": [
              31,
              21,
              19,
              17,
              16,
              3
            ]
          },
          {
            "label": "Max Days",
            "data": [
              592,
              59,
              182,
              108,
              35,
              26
            ]
          }
        ]
      },
      {
        "id": "ch-trade",
        "labels": [
          "Roofing",
          "Gutters",
          "Siding",
          "Other",
          "Windows"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              3,
              0,
              0,
              0,
              1
            ]
          },
          {
            "label": "Open",
            "data": [
              327,
              26,
              12,
              3,
              2
            ]
          }
        ]
      },
      {
        "id": "ch-incomplete-status",
        "labels": [],
        "datasets": [
          {
            "label": "WOs",
            "data": []
          }
        ]
      },
      {
        "id": "ch-incomplete-age",
        "labels": [
          "<7d",
          "7-14d",
          "14-30d",
          "30-60d",
          "60-90d",
          "90+d"
        ],
        "datasets": [
          {
            "label": "Open WOs",
            "data": [
              0,
              0,
              0,
              0,
              0,
              0
            ]
          }
        ]
      },
      {
        "id": "ch-backlog",
        "labels": [
          "Detroit Metro",
          "Columbus",
          "Raleigh",
          "Cincinnati",
          "Cleveland",
          "DC Metro",
          "Dayton",
          "Richmond",
          "Indianapolis"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              23,
              17,
              14,
              13,
              8,
              5,
              4,
              3,
              1
            ]
          }
        ]
      }
    ],
    "tables": [
      {
        "id": "branchDetail",
        "title": "Branch detail",
        "headers": [
          "Branch",
          "WOs",
          "Completed",
          "On Hold",
          "RTS",
          "Scheduled",
          "In Progress",
          "RAS",
          "Permits",
          "Jobs",
          "Value"
        ],
        "rows": [
          [
            "Detroit Metro",
            121,
            0,
            35,
            11,
            44,
            29,
            0,
            29,
            24,
            8516945
          ],
          [
            "Columbus",
            105,
            2,
            56,
            19,
            2,
            22,
            0,
            43,
            17,
            3217931
          ],
          [
            "Raleigh",
            51,
            0,
            19,
            9,
            3,
            18,
            0,
            19,
            15,
            2510035
          ],
          [
            "Cleveland",
            37,
            0,
            36,
            0,
            0,
            0,
            0,
            34,
            8,
            1937289
          ],
          [
            "Cincinnati",
            28,
            1,
            13,
            11,
            0,
            2,
            0,
            4,
            15,
            2407557
          ],
          [
            "DC Metro",
            13,
            0,
            7,
            0,
            0,
            6,
            0,
            3,
            9,
            3890809
          ],
          [
            "Richmond",
            8,
            1,
            5,
            2,
            0,
            0,
            0,
            3,
            3,
            128765
          ],
          [
            "Dayton",
            6,
            0,
            5,
            0,
            1,
            0,
            0,
            5,
            4,
            249944
          ],
          [
            "Indianapolis",
            3,
            0,
            0,
            3,
            0,
            0,
            0,
            0,
            1,
            75825
          ],
          [
            "Nashville",
            2,
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            2,
            394185
          ]
        ]
      },
      {
        "id": "holdsBySubStatus",
        "title": "On-Hold sub-status breakdown",
        "headers": [
          "Sub-Status",
          "WOs",
          "Avg Age (d)",
          "Oldest (d)"
        ],
        "rows": [
          [
            "Pending Permit",
            138,
            15,
            592
          ],
          [
            "Pending Deposit",
            24,
            27,
            237
          ],
          [
            "Spring Hold",
            7,
            341,
            417
          ],
          [
            "Homeowner Request",
            3,
            145,
            354
          ],
          [
            "(no sub-status)",
            3,
            4,
            7
          ],
          [
            "Pending Material",
            1,
            25,
            25
          ]
        ]
      },
      {
        "id": "trailingTrades",
        "title": "Trailing trades on partial jobs",
        "headers": [
          "Trade",
          "Open WOs",
          "Jobs Blocked",
          "Trapped Value"
        ],
        "rows": []
      },
      {
        "id": "gutterStatusBreakdown",
        "title": "Gutter WO status breakdown",
        "headers": [
          "Status",
          "Count"
        ],
        "rows": [
          [
            "On Hold",
            9
          ],
          [
            "New",
            5
          ],
          [
            "In Progress",
            5
          ],
          [
            "Ready to Schedule",
            4
          ],
          [
            "Scheduled",
            3
          ]
        ]
      },
      {
        "id": "tradeDetail",
        "title": "Trade performance",
        "headers": [
          "Trade",
          "WOs",
          "Completed",
          "Open",
          "Jobs",
          "Value"
        ],
        "rows": [
          [
            "Roofing",
            330,
            3,
            327,
            75,
            20447703
          ],
          [
            "Gutters",
            26,
            0,
            26,
            26,
            9533881
          ],
          [
            "Siding",
            12,
            0,
            12,
            11,
            2048402
          ],
          [
            "Other",
            3,
            0,
            3,
            3,
            708990
          ],
          [
            "Windows",
            3,
            1,
            2,
            3,
            66348
          ]
        ]
      },
      {
        "id": "specialtyWatch",
        "title": "Specialty trade watch",
        "headers": [
          "Trade",
          "WOs"
        ],
        "rows": [
          [
            "Solar",
            0
          ],
          [
            "Metal",
            0
          ]
        ]
      },
      {
        "id": "salesTop15ByStuck",
        "title": "Top 15 salespeople by stuck value (>30d)",
        "headers": [
          "Salesperson",
          "WOs",
          "Jobs",
          "Stuck Value",
          "Stale WOs",
          "Branches"
        ],
        "rows": [
          [
            "Marko Jovanovic",
            13,
            9,
            3656827,
            6,
            1
          ],
          [
            "Shawn Dunnigan",
            28,
            10,
            3345620,
            10,
            1
          ],
          [
            "Mark Leedy",
            31,
            15,
            1802894,
            8,
            3
          ],
          [
            "Evan Hall",
            49,
            13,
            922932,
            7,
            1
          ],
          [
            "Todd Sandler",
            23,
            1,
            739670,
            6,
            1
          ],
          [
            "Courtney Lyon",
            13,
            6,
            485830,
            2,
            1
          ],
          [
            "Micah Williamson",
            77,
            7,
            317278,
            2,
            1
          ],
          [
            "Nicholas Andrukat",
            37,
            8,
            310210,
            3,
            1
          ],
          [
            "Lisa Gibson",
            23,
            11,
            235750,
            2,
            5
          ],
          [
            "Jason Crooke",
            8,
            3,
            123449,
            4,
            1
          ],
          [
            "Ron Saxe",
            22,
            5,
            109360,
            2,
            1
          ],
          [
            "Christy Osborne",
            12,
            2,
            0,
            0,
            1
          ],
          [
            "Josh Kennedy",
            29,
            1,
            0,
            0,
            1
          ],
          [
            "RaShauna Watts",
            4,
            2,
            0,
            0,
            1
          ],
          [
            "Aaron Ellis",
            2,
            2,
            0,
            0,
            1
          ]
        ]
      },
      {
        "id": "backlogByBranch",
        "title": "Backlog (not started) by branch",
        "headers": [
          "Branch",
          "Jobs",
          "Value",
          "Oldest (d)"
        ],
        "rows": [
          [
            "Detroit Metro",
            23,
            7980245,
            329
          ],
          [
            "Columbus",
            17,
            3217931,
            34
          ],
          [
            "Raleigh",
            14,
            2050677,
            237
          ],
          [
            "Cincinnati",
            13,
            968682,
            108
          ],
          [
            "Cleveland",
            8,
            1937289,
            354
          ],
          [
            "DC Metro",
            5,
            490554,
            592
          ],
          [
            "Dayton",
            4,
            249944,
            13
          ],
          [
            "Richmond",
            3,
            128765,
            11
          ],
          [
            "Indianapolis",
            1,
            75825,
            14
          ]
        ]
      },
      {
        "id": "oldest15NotStarted",
        "title": "Oldest 15 not-started jobs",
        "headers": [
          "Job #",
          "Account",
          "Branch",
          "Trade",
          "Sub-Status",
          "Salesperson",
          "Days",
          "Contract"
        ],
        "rows": [
          [
            "Job-089560",
            "Scott Management INC",
            "DC Metro",
            "Roofing",
            "Pending Permit",
            "Marko Jovanovic",
            592,
            69162
          ],
          [
            "Job-093347",
            "Comsource Management, Inc.",
            "DC Metro",
            "Roofing",
            "Spring Hold",
            "Marko Jovanovic",
            417,
            205493
          ],
          [
            "Job-097306",
            "Barnett Management Inc.",
            "Cleveland",
            "Gutters",
            "Homeowner Request",
            "Nicholas Andrukat",
            354,
            34652
          ],
          [
            "Job-098561",
            "Compass Management Professionals",
            "Detroit Metro",
            "Roofing",
            "Spring Hold",
            "Shawn Dunnigan",
            329,
            866666
          ],
          [
            "Job-098557",
            "Compass Management Professionals",
            "Detroit Metro",
            "Roofing",
            "Spring Hold",
            "Shawn Dunnigan",
            329,
            866667
          ],
          [
            "Job-098563",
            "Compass Management Professionals",
            "Detroit Metro",
            "Gutters",
            "Spring Hold",
            "Shawn Dunnigan",
            329,
            866667
          ],
          [
            "Job-102699",
            "Main Street Management Group",
            "Raleigh",
            "Gutters",
            "Pending Deposit",
            "Evan Hall",
            237,
            24500
          ],
          [
            "Job-106687",
            "Management Plus",
            "Cincinnati",
            "Other",
            "",
            "Mark Leedy",
            108,
            32200
          ],
          [
            "Job-106353",
            "Towne Properties - Northern Kentucky",
            "Cincinnati",
            "Siding",
            "",
            "Mark Leedy",
            105,
            42560
          ],
          [
            "Job-107174",
            "Keystone Professional Association Management",
            "Raleigh",
            "Siding",
            "",
            "Evan Hall",
            87,
            28160
          ],
          [
            "Job-108318",
            "Towne Properties - Cincinnati West District Office",
            "Cincinnati",
            "Roofing",
            "Pending Deposit",
            "Mark Leedy",
            84,
            27703
          ],
          [
            "Job-108407",
            "Continental Management",
            "Cleveland",
            "Roofing",
            "Pending Permit",
            "Nicholas Andrukat",
            81,
            32035
          ],
          [
            "Job-110180",
            "WPM Real Estate Management",
            "DC Metro",
            "Siding",
            "Pending Permit",
            "Marko Jovanovic",
            45,
            161420
          ],
          [
            "Job-106348",
            "Towne Properties - Northern Kentucky",
            "Cincinnati",
            "Siding",
            "",
            "Mark Leedy",
            39,
            40825
          ],
          [
            "Job-108183",
            "Saint John AME Church",
            "Columbus",
            "Roofing",
            "",
            "Ron Saxe",
            34,
            61440
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Columbus",
          "permits": 43
        },
        {
          "branch": "Cleveland",
          "permits": 34
        },
        {
          "branch": "Detroit Metro",
          "permits": 29
        },
        {
          "branch": "Raleigh",
          "permits": 19
        },
        {
          "branch": "Dayton",
          "permits": 5
        },
        {
          "branch": "Cincinnati",
          "permits": 4
        },
        {
          "branch": "DC Metro",
          "permits": 3
        },
        {
          "branch": "Richmond",
          "permits": 3
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $0 of trapped partial-job revenue into billable revenue, reduce $12.05M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Columbus permit sweep: 43 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently -): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 88 jobs ($17.10M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $0, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 08, 2026 - May 14, 2026 - De-Duplicated at Job Level - 122 Jobs - 11 Markets - 9 PMs",
    "generated": "2026-05-18",
    "headerMeta": {
      "trueRevenue": 9796203.87,
      "uniqueJobs": 122,
      "markets": 11,
      "pms": 9,
      "medianComplete": 52.6,
      "avgStart": 70,
      "multiTradeJobs": 12,
      "singleTradeJobs": 110,
      "multiTradePct": 9.8,
      "lastBuild": "2026-05-18T14:31:41.273Z"
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
    "kpis": [
      {
        "label": "True Revenue",
        "value": "$9.80M",
        "sub": "122 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$80,297",
        "sub": "Per job (deduped)"
      },
      {
        "label": "Median Days to Complete",
        "value": "52.6d",
        "sub": "Job-level median"
      },
      {
        "label": "Avg Days to Start",
        "value": "70.0d",
        "sub": "Sale to crew on-site"
      },
      {
        "label": "Multi-Trade Jobs",
        "value": "12",
        "sub": "9.8% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "110",
        "sub": "90.2% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$132,637",
        "sub": "+77.8% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$74,587",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+17.3d",
        "sub": "MT 67.5d vs ST 50.2d"
      }
    ],
    "monthly": [
      {
        "m": "2026-01",
        "label": "January",
        "key": "2026-01",
        "rev": 959133.87,
        "jobs": 14,
        "med": 71.1,
        "start": 51.7
      },
      {
        "m": "2026-02",
        "label": "February",
        "key": "2026-02",
        "rev": 321676.41,
        "jobs": 11,
        "med": 49.7,
        "start": 89.5
      },
      {
        "m": "2026-03",
        "label": "March",
        "key": "2026-03",
        "rev": 4022615.43,
        "jobs": 35,
        "med": 60.3,
        "start": 72.8
      },
      {
        "m": "2026-04",
        "label": "April",
        "key": "2026-04",
        "rev": 3716435.93,
        "jobs": 36,
        "med": 46,
        "start": 65.1
      },
      {
        "m": "2026-05",
        "label": "May",
        "key": "2026-05",
        "rev": 776342.23,
        "jobs": 26,
        "med": 41.3,
        "start": 80.1
      }
    ],
    "charts": [
      {
        "id": "ch_monthly",
        "labels": [
          "2026-01",
          "2026-02",
          "2026-03",
          "2026-04",
          "2026-05"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              959133.87,
              321676.41,
              4022615.43,
              3716435.93,
              776342.23
            ]
          },
          {
            "label": "Jobs",
            "data": [
              14,
              11,
              35,
              36,
              26
            ]
          }
        ]
      },
      {
        "id": "ch_efficiency",
        "labels": [
          "2026-01",
          "2026-02",
          "2026-03",
          "2026-04",
          "2026-05"
        ],
        "datasets": [
          {
            "label": "Median Days to Complete",
            "data": [
              71.1,
              49.7,
              60.3,
              46,
              41.3
            ]
          },
          {
            "label": "Avg Days to Start",
            "data": [
              51.7,
              89.5,
              72.8,
              65.1,
              80.1
            ]
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
              12
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              110
            ]
          }
        ]
      },
      {
        "id": "ch_combos",
        "labels": [
          "Gutters + Roofing",
          "Gutters + Roofing + Siding",
          "Siding + Windows"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              10,
              1,
              1
            ]
          }
        ]
      },
      {
        "id": "ch_mt_by_market",
        "labels": [
          "Columbus",
          "Detroit Metro",
          "Raleigh",
          "Cincinnati",
          "Cleveland",
          "Nashville",
          "DC Metro",
          "Dayton",
          "Indianapolis",
          "Richmond",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "MT %",
            "data": [
              20,
              5,
              0,
              27.8,
              0,
              0,
              33.3,
              0,
              0,
              0,
              0
            ]
          }
        ]
      },
      {
        "id": "ch_mt_vs_st",
        "labels": [
          "Columbus",
          "Detroit Metro",
          "Raleigh",
          "Cincinnati",
          "Cleveland",
          "Nashville",
          "DC Metro",
          "Dayton",
          "Indianapolis",
          "Richmond",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "MT Median",
            "data": [
              54.6,
              138.4,
              0,
              70.4,
              0,
              0,
              67.5,
              0,
              0,
              0,
              0
            ]
          },
          {
            "label": "ST Median",
            "data": [
              56.4,
              44.4,
              53.9,
              70.4,
              41.3,
              36.7,
              17.5,
              51.5,
              30,
              43.5,
              34.9
            ]
          }
        ]
      },
      {
        "id": "ch_mk_rev",
        "labels": [
          "Columbus",
          "Detroit Metro",
          "Raleigh",
          "Cincinnati",
          "Cleveland",
          "Nashville",
          "DC Metro",
          "Dayton",
          "Indianapolis",
          "Richmond",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              3659951.45,
              1759799.07,
              1747911.6,
              676390.55,
              640230.71,
              469488.37,
              368256,
              186672,
              148724,
              84529.44,
              54250.68
            ]
          }
        ]
      },
      {
        "id": "ch_mk_days",
        "labels": [
          "Columbus",
          "Detroit Metro",
          "Raleigh",
          "Cincinnati",
          "Cleveland",
          "Nashville",
          "DC Metro",
          "Dayton",
          "Indianapolis",
          "Richmond",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              54.6,
              48.6,
              53.9,
              70.4,
              41.3,
              36.7,
              41.5,
              51.5,
              30,
              43.5,
              34.9
            ]
          }
        ]
      },
      {
        "id": "ch_pm_top",
        "labels": [
          "Brian Walker",
          "Bryan Paquin",
          "Ryan Wolf",
          "Wayne Iles",
          "Jeremy Wolfe",
          "James Foky",
          "Rob Vanderlinden",
          "(Unassigned)",
          "Erik Patla"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              2990300.56,
              1501316.4,
              913348.93,
              871152.69,
              862181.03,
              718290.71,
              587513.9,
              420875.14,
              367156
            ]
          }
        ]
      },
      {
        "id": "ch_pm_scatter",
        "labels": [
          "Brian Walker",
          "Bryan Paquin",
          "Ryan Wolf",
          "Wayne Iles",
          "Jeremy Wolfe",
          "James Foky",
          "Rob Vanderlinden",
          "(Unassigned)",
          "Erik Patla"
        ],
        "datasets": [
          {
            "label": "PMs",
            "data": [
              {
                "x": 47.1,
                "y": 2990300.56,
                "wos": 52,
                "name": "Brian Walker"
              },
              {
                "x": 54.4,
                "y": 1501316.4,
                "wos": 41,
                "name": "Bryan Paquin"
              },
              {
                "x": 44.4,
                "y": 913348.93,
                "wos": 18,
                "name": "Ryan Wolf"
              },
              {
                "x": 70.4,
                "y": 871152.69,
                "wos": 29,
                "name": "Wayne Iles"
              },
              {
                "x": 51.5,
                "y": 862181.03,
                "wos": 24,
                "name": "Jeremy Wolfe"
              },
              {
                "x": 52.6,
                "y": 718290.71,
                "wos": 22,
                "name": "James Foky"
              },
              {
                "x": 103.8,
                "y": 587513.9,
                "wos": 5,
                "name": "Rob Vanderlinden"
              },
              {
                "x": 22.5,
                "y": 420875.14,
                "wos": 19,
                "name": "(Unassigned)"
              },
              {
                "x": 48.5,
                "y": 367156,
                "wos": 13,
                "name": "Erik Patla"
              }
            ]
          }
        ]
      },
      {
        "id": "ch_wt_pie",
        "labels": [
          "Roofing",
          "Gutters",
          "Siding",
          "Windows",
          "Other"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              8055376.05,
              803994.25,
              695251.83,
              208581.73,
              33000
            ]
          }
        ]
      },
      {
        "id": "ch_wt_days",
        "labels": [
          "Roofing",
          "Gutters",
          "Siding",
          "Windows",
          "Other"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              54.4,
              58.9,
              145.9,
              180.5,
              18.5
            ]
          }
        ]
      },
      {
        "id": "ch_cb_vol",
        "labels": [
          "Lisa Gibson",
          "RaShauna Watts",
          "Jamie Sanders",
          "Kristi Mitchell",
          "Lisa Stachura"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              84,
              33,
              3,
              1,
              1
            ]
          }
        ]
      },
      {
        "id": "ch_cb_eff",
        "labels": [
          "Lisa Gibson",
          "RaShauna Watts",
          "Jamie Sanders",
          "Kristi Mitchell",
          "Lisa Stachura"
        ],
        "datasets": [
          {
            "label": "Median Complete",
            "data": [
              53,
              44.2,
              351.4,
              46.4,
              71.6
            ]
          }
        ]
      },
      {
        "id": "ch_cb_mt",
        "labels": [
          "Lisa Gibson",
          "RaShauna Watts",
          "Jamie Sanders",
          "Kristi Mitchell",
          "Lisa Stachura"
        ],
        "datasets": [
          {
            "label": "MT %",
            "data": [
              9.5,
              12.1,
              0,
              0,
              0
            ]
          }
        ]
      },
      {
        "id": "ch_cb_scatter",
        "labels": [
          "Lisa Gibson",
          "RaShauna Watts",
          "Jamie Sanders",
          "Kristi Mitchell",
          "Lisa Stachura"
        ],
        "datasets": [
          {
            "label": "Creators",
            "data": [
              {
                "x": 53,
                "y": 93848.17,
                "jobs": 84,
                "name": "Lisa Gibson"
              },
              {
                "x": 44.2,
                "y": 53780.22,
                "jobs": 33,
                "name": "RaShauna Watts"
              },
              {
                "x": 351.4,
                "y": 45459.67,
                "jobs": 3,
                "name": "Jamie Sanders"
              },
              {
                "x": 46.4,
                "y": 1481,
                "jobs": 1,
                "name": "Kristi Mitchell"
              },
              {
                "x": 71.6,
                "y": 350,
                "jobs": 1,
                "name": "Lisa Stachura"
              }
            ]
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
        "rows": [
          [
            "Columbus",
            20,
            3659951.45,
            182997.57,
            54.6,
            52.8,
            20,
            54.6,
            56.4
          ],
          [
            "Detroit Metro",
            20,
            1759799.07,
            87989.95,
            48.6,
            79.1,
            5,
            138.4,
            44.4
          ],
          [
            "Raleigh",
            26,
            1747911.6,
            67227.37,
            53.9,
            76.2,
            0,
            0,
            53.9
          ],
          [
            "Cincinnati",
            18,
            676390.55,
            37577.25,
            70.4,
            91.3,
            27.8,
            70.4,
            70.4
          ],
          [
            "Cleveland",
            18,
            640230.71,
            35568.37,
            41.3,
            90.7,
            0,
            0,
            41.3
          ],
          [
            "Nashville",
            7,
            469488.37,
            67069.77,
            36.7,
            40,
            0,
            0,
            36.7
          ],
          [
            "DC Metro",
            6,
            368256,
            61376,
            41.5,
            45,
            33.3,
            67.5,
            17.5
          ],
          [
            "Dayton",
            2,
            186672,
            93336,
            51.5,
            37.7,
            0,
            0,
            51.5
          ],
          [
            "Indianapolis",
            2,
            148724,
            74362,
            30,
            25.1,
            0,
            0,
            30
          ],
          [
            "Richmond",
            1,
            84529.44,
            84529.44,
            43.5,
            35.5,
            0,
            0,
            43.5
          ],
          [
            "Knoxville",
            2,
            54250.68,
            27125.34,
            34.9,
            28.4,
            0,
            0,
            34.9
          ]
        ]
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
        "rows": [
          [
            "Brian Walker",
            52,
            14,
            2990300.56,
            57505.78,
            47.1,
            48.8
          ],
          [
            "Bryan Paquin",
            41,
            17,
            1501316.4,
            36617.47,
            54.4,
            68.8
          ],
          [
            "Ryan Wolf",
            18,
            11,
            913348.93,
            50741.61,
            44.4,
            101.9
          ],
          [
            "Wayne Iles",
            29,
            19,
            871152.69,
            30039.75,
            70.4,
            87.8
          ],
          [
            "Jeremy Wolfe",
            24,
            9,
            862181.03,
            35924.21,
            51.5,
            70.6
          ],
          [
            "James Foky",
            22,
            15,
            718290.71,
            32649.58,
            52.6,
            90.5
          ],
          [
            "Rob Vanderlinden",
            5,
            4,
            587513.9,
            117502.78,
            103.8,
            49.7
          ],
          [
            "(Unassigned)",
            19,
            19,
            420875.14,
            22151.32,
            22.5,
            37.9
          ],
          [
            "Erik Patla",
            13,
            5,
            367156,
            28242.77,
            48.5,
            45
          ]
        ]
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
        "rows": [
          [
            "Roofing",
            206,
            8055376.05,
            39103.77,
            54.4
          ],
          [
            "Gutters",
            26,
            803994.25,
            30922.86,
            58.9
          ],
          [
            "Siding",
            8,
            695251.83,
            86906.48,
            145.9
          ],
          [
            "Windows",
            2,
            208581.73,
            104290.87,
            180.5
          ],
          [
            "Other",
            1,
            33000,
            33000,
            18.5
          ]
        ]
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
        "rows": [
          [
            "Lisa Gibson",
            84,
            7883246.65,
            93848.17,
            "53d",
            "74.2d",
            9.5,
            93848.17
          ],
          [
            "RaShauna Watts",
            33,
            1774747.22,
            53780.22,
            "44.2d",
            "56.8d",
            12.1,
            53780.22
          ],
          [
            "Jamie Sanders",
            3,
            136379,
            45459.67,
            "351.4d",
            "140.9d",
            0,
            45459.67
          ],
          [
            "Kristi Mitchell",
            1,
            1481,
            1481,
            "46.4d",
            "34.4d",
            0,
            1481
          ],
          [
            "Lisa Stachura",
            1,
            350,
            350,
            "71.6d",
            "22.5d",
            0,
            350
          ]
        ]
      },
      {
        "id": "creatorMarketHeatmap",
        "title": "Creator x Market Volume Heatmap (Jobs)",
        "headers": [
          "Creator",
          "Cincinnati",
          "Cleveland",
          "Columbus",
          "DC Metro",
          "Dayton",
          "Detroit Metro",
          "Indianapolis",
          "Knoxville",
          "Nashville",
          "Raleigh",
          "Richmond",
          "Total"
        ],
        "rows": [
          [
            "Jamie Sanders",
            1,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            3
          ],
          [
            "Kristi Mitchell",
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            1
          ],
          [
            "Lisa Gibson",
            14,
            16,
            14,
            3,
            1,
            18,
            1,
            0,
            4,
            13,
            0,
            84
          ],
          [
            "Lisa Stachura",
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1
          ],
          [
            "RaShauna Watts",
            3,
            2,
            4,
            3,
            1,
            2,
            1,
            2,
            3,
            11,
            1,
            33
          ],
          [
            "Total",
            18,
            18,
            20,
            6,
            2,
            20,
            2,
            2,
            7,
            26,
            1,
            122
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Multi-trade penalty is severe in 1 markets: Detroit Metro MT 138.4d vs ST 44.4d.",
        "Days to Start averages 70.0 days company-wide and 79.1 days in Detroit Metro (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [],
      "positivesToBuildOn": [
        "March delivered $4.02M across 35 invoiced jobs at 60.3-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "Detroit Metro hits 48.6-day median complete and a $87,990 average contract on 20 jobs.",
        "Multi-trade jobs carry a $132,637 average contract versus $74,587 for single-trade, a 78% revenue lift per job."
      ]
    }
  }
};
