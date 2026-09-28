/* AUTO-GENERATED — do not edit. Generated 2026-09-28T18:40:34.591Z (multi-family) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-09-28T18:40:34.591Z",
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
        "elapsedMs": 45,
        "builtAt": "2026-09-28T18:40:34.591Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 138,
        "builtAt": "2026-09-28T18:40:34.591Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 15,
        "builtAt": "2026-09-28T18:40:34.591Z"
      },
      {
        "id": "installs-ytd",
        "version": "1.0-rules-encoded",
        "elapsedMs": 32,
        "builtAt": "2026-09-28T18:40:34.591Z"
      }
    ]
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-09-23",
    "ytdDays": 271,
    "rowCount": 527,
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
        "value": "$44.01M",
        "sub": "527 signed contracts across 11 markets"
      },
      {
        "label": "Sold",
        "value": "$44.01M",
        "sub": "522 deals | 99.1% of signed contracts"
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
        "value": "$83,514",
        "sub": "Median: $18,327 | Install avg: $111,179"
      },
      {
        "label": "Organization",
        "value": "25 Reps",
        "sub": "11 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$59.28M",
        "sub": "Based on 271 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "74.2% / 25.6%",
        "sub": "391 installs | 135 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 522,
        "amount": 44007691.26
      },
      {
        "label": "Production Review",
        "count": 2,
        "amount": 0
      },
      {
        "label": "Other",
        "count": 3,
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
        "count": 54,
        "amount": 3486024.79,
        "installs": 34,
        "repairs": 19,
        "avgDeal": 64556,
        "repairPct": 35.2,
        "installAvg": 99556,
        "repairAvg": 5295
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
        "count": 50,
        "amount": 3380516,
        "installs": 34,
        "repairs": 16,
        "avgDeal": 67610,
        "repairPct": 32,
        "installAvg": 98078,
        "repairAvg": 2867
      },
      {
        "key": "2026-04",
        "label": "April",
        "count": 75,
        "amount": 7886297.34,
        "installs": 53,
        "repairs": 22,
        "avgDeal": 105151,
        "repairPct": 29.3,
        "installAvg": 147494,
        "repairAvg": 3141
      },
      {
        "key": "2026-05",
        "label": "May",
        "count": 52,
        "amount": 4035812.35,
        "installs": 35,
        "repairs": 17,
        "avgDeal": 77612,
        "repairPct": 32.7,
        "installAvg": 114366,
        "repairAvg": 1941
      },
      {
        "key": "2026-06",
        "label": "June",
        "count": 96,
        "amount": 3911832.74,
        "installs": 76,
        "repairs": 20,
        "avgDeal": 40748,
        "repairPct": 20.8,
        "installAvg": 50181,
        "repairAvg": 4902
      },
      {
        "key": "2026-07",
        "label": "July",
        "count": 62,
        "amount": 7433300.46,
        "installs": 49,
        "repairs": 13,
        "avgDeal": 119892,
        "repairPct": 21,
        "installAvg": 151124,
        "repairAvg": 2173
      },
      {
        "key": "2026-08",
        "label": "August",
        "count": 52,
        "amount": 7997381.87,
        "installs": 41,
        "repairs": 11,
        "avgDeal": 153796,
        "repairPct": 21.2,
        "installAvg": 193111,
        "repairAvg": 7259
      },
      {
        "key": "2026-09",
        "label": "September",
        "count": 49,
        "amount": 3428491.05,
        "installs": 39,
        "repairs": 10,
        "avgDeal": 69969,
        "repairPct": 20.4,
        "installAvg": 85970,
        "repairAvg": 7567
      }
    ],
    "jobTypeMixByMonth": {
      "Retail-No Financing": {
        "2026-01": 2247028.5,
        "2026-02": 2401613,
        "2026-03": 3380016,
        "2026-04": 6376452.34,
        "2026-05": 3341065,
        "2026-06": 3525083.5,
        "2026-07": 3600198,
        "2026-08": 4466063.5,
        "2026-09": 1752720.14
      },
      "Insurance": {
        "2026-01": 1206796.29,
        "2026-02": 50701.66,
        "2026-03": 500,
        "2026-04": 1509845,
        "2026-05": 694747.35,
        "2026-06": 386749.24,
        "2026-07": 3833102.46,
        "2026-08": 3525130.37,
        "2026-09": 1675770.91
      },
      "Retail-Financing": {
        "2026-01": 32200,
        "2026-02": 0,
        "2026-03": 0,
        "2026-04": 0,
        "2026-05": 0,
        "2026-06": 0,
        "2026-07": 0,
        "2026-08": 0,
        "2026-09": 0
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Retail-No Financing",
        "count": 499,
        "amount": 31090239.98,
        "avg": 62305
      },
      {
        "jobType": "Insurance",
        "count": 26,
        "amount": 12883343.28,
        "avg": 495513
      },
      {
        "jobType": "Retail-Financing",
        "count": 1,
        "amount": 32200,
        "avg": 32200
      },
      {
        "jobType": "LowMar",
        "count": 1,
        "amount": 6188,
        "avg": 6188
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
        "count": 18,
        "amount": 574696.5
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
        "count": 13,
        "amount": 462722
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
        "amount": 2946969
      },
      {
        "w": 18,
        "count": 16,
        "amount": 2177355.03
      },
      {
        "w": 19,
        "count": 16,
        "amount": 1396041
      },
      {
        "w": 20,
        "count": 12,
        "amount": 998029
      },
      {
        "w": 21,
        "count": 9,
        "amount": 128347.35
      },
      {
        "w": 22,
        "count": 13,
        "amount": 1509457
      },
      {
        "w": 23,
        "count": 25,
        "amount": 713761
      },
      {
        "w": 24,
        "count": 19,
        "amount": 1345414.24
      },
      {
        "w": 25,
        "count": 15,
        "amount": 536652
      },
      {
        "w": 26,
        "count": 26,
        "amount": 1044270.5
      },
      {
        "w": 27,
        "count": 24,
        "amount": 1010600.99
      },
      {
        "w": 28,
        "count": 7,
        "amount": 1088169
      },
      {
        "w": 29,
        "count": 11,
        "amount": 1030406
      },
      {
        "w": 30,
        "count": 18,
        "amount": 1408620.97
      },
      {
        "w": 31,
        "count": 13,
        "amount": 3167238.5
      },
      {
        "w": 32,
        "count": 13,
        "amount": 2094160.58
      },
      {
        "w": 33,
        "count": 16,
        "amount": 1571249.56
      },
      {
        "w": 34,
        "count": 16,
        "amount": 2730786.73
      },
      {
        "w": 35,
        "count": 7,
        "amount": 1601185
      },
      {
        "w": 36,
        "count": 13,
        "amount": 1461028.65
      },
      {
        "w": 37,
        "count": 15,
        "amount": 1031191.26
      },
      {
        "w": 38,
        "count": 14,
        "amount": 604669
      },
      {
        "w": 39,
        "count": 7,
        "amount": 331602.14
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
          14715106.9,
          85,
          173119,
          72,
          13,
          15.3,
          56
        ],
        [
          "Detroit Metro",
          9677279.5,
          117,
          82712,
          65,
          52,
          44.4,
          19
        ],
        [
          "Raleigh",
          7162016,
          62,
          115516,
          57,
          4,
          6.5,
          100
        ],
        [
          "Cleveland",
          5785403.64,
          98,
          59035,
          91,
          7,
          7.1,
          35
        ],
        [
          "Cincinnati",
          2706360.22,
          50,
          54127,
          33,
          17,
          34,
          23
        ],
        [
          "DC Metro",
          1446343,
          45,
          32141,
          20,
          25,
          55.6,
          14
        ],
        [
          "Nashville",
          882396,
          17,
          51906,
          15,
          2,
          11.8,
          50
        ],
        [
          "Dayton",
          556696,
          16,
          34794,
          12,
          4,
          25,
          9
        ],
        [
          "Richmond",
          472966.5,
          19,
          24893,
          11,
          8,
          42.1,
          19
        ],
        [
          "Indianapolis",
          335634,
          7,
          47948,
          6,
          1,
          14.3,
          31
        ],
        [
          "Knoxville",
          271769.5,
          11,
          24706,
          9,
          2,
          18.2,
          42
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
        "name": "Christy Osborne",
        "amount": 7706910.81,
        "count": 19,
        "avg": 405627,
        "medDays": 147,
        "jt": {
          "Retail-No Financing": 11,
          "Insurance": 8
        },
        "installs": 16,
        "repairs": 3
      },
      {
        "name": "Micah Williamson",
        "amount": 6973824,
        "count": 87,
        "avg": 80159,
        "medDays": 10,
        "jt": {
          "Retail-No Financing": 87
        },
        "installs": 39,
        "repairs": 48
      },
      {
        "name": "Nicholas Andrukat",
        "amount": 5739053.64,
        "count": 90,
        "avg": 63767,
        "medDays": 36,
        "jt": {
          "Retail-No Financing": 83,
          "Insurance": 6,
          "LowMar": 1
        },
        "installs": 83,
        "repairs": 7
      },
      {
        "name": "Evan Hall",
        "amount": 4784099,
        "count": 48,
        "avg": 99669,
        "medDays": 90,
        "jt": {
          "Retail-No Financing": 48
        },
        "installs": 45,
        "repairs": 2
      },
      {
        "name": "Mark Leedy",
        "amount": 3564270.22,
        "count": 65,
        "avg": 54835,
        "medDays": 25,
        "jt": {
          "Retail-No Financing": 62,
          "Retail-Financing": 1,
          "Insurance": 2
        },
        "installs": 49,
        "repairs": 16
      },
      {
        "name": "Ron Saxe",
        "amount": 3359390,
        "count": 36,
        "avg": 93316,
        "medDays": 63,
        "jt": {
          "Retail-No Financing": 34,
          "Insurance": 2
        },
        "installs": 33,
        "repairs": 3
      },
      {
        "name": "Todd Sandler",
        "amount": 2809600.71,
        "count": 19,
        "avg": 147874,
        "medDays": 54,
        "jt": {
          "Retail-No Financing": 17,
          "Insurance": 2
        },
        "installs": 16,
        "repairs": 3
      },
      {
        "name": "Courtney Lyon",
        "amount": 2516009,
        "count": 24,
        "avg": 104834,
        "medDays": 109,
        "jt": {
          "Retail-No Financing": 24
        },
        "installs": 21,
        "repairs": 3
      },
      {
        "name": "Marko Jovanovic",
        "amount": 1446343,
        "count": 45,
        "avg": 32141,
        "medDays": 14,
        "jt": {
          "Retail-No Financing": 44,
          "Insurance": 1
        },
        "installs": 20,
        "repairs": 25
      },
      {
        "name": "Kristi Mitchell",
        "amount": 1396084,
        "count": 7,
        "avg": 199441,
        "medDays": 209,
        "jt": {
          "Retail-No Financing": 7
        },
        "installs": 6,
        "repairs": 1
      },
      {
        "name": "Aaron Ellis",
        "amount": 1153015.5,
        "count": 27,
        "avg": 42704,
        "medDays": 47,
        "jt": {
          "Retail-No Financing": 24,
          "Insurance": 3
        },
        "installs": 23,
        "repairs": 4
      },
      {
        "name": "Nick Warmath",
        "amount": 840374,
        "count": 1,
        "avg": 840374,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 1
        },
        "installs": 1,
        "repairs": 0
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
        "name": "Jason Crooke",
        "amount": 472966.5,
        "count": 19,
        "avg": 24893,
        "medDays": 19,
        "jt": {
          "Retail-No Financing": 19
        },
        "installs": 11,
        "repairs": 8
      },
      {
        "name": "Shawn Dunnigan - INACTIVE",
        "amount": 214180,
        "count": 6,
        "avg": 35697,
        "medDays": 165,
        "jt": {
          "Retail-No Financing": 6
        },
        "installs": 6,
        "repairs": 0
      },
      {
        "name": "Matthew Cooke",
        "amount": 192062.35,
        "count": 6,
        "avg": 32010,
        "medDays": 55,
        "jt": {
          "Retail-No Financing": 5,
          "Insurance": 1
        },
        "installs": 6,
        "repairs": 0
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
        "name": "Lisa Gibson",
        "amount": 64759.03,
        "count": 13,
        "avg": 4981,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 13
        },
        "installs": 11,
        "repairs": 2
      },
      {
        "name": "Samuel Kayser - INACTIVE",
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
        "name": "Trent Wakefield",
        "amount": 18023,
        "count": 3,
        "avg": 6008,
        "medDays": 139,
        "jt": {
          "Retail-No Financing": 3
        },
        "installs": 2,
        "repairs": 1
      }
    ],
    "speedSellers": [
      {
        "name": "Lisa Gibson",
        "medDays": 0
      }
    ],
    "repairHeavy": [
      {
        "name": "Marko Jovanovic",
        "repairs": 25,
        "deals": 45,
        "pct": 55.6
      },
      {
        "name": "Micah Williamson",
        "repairs": 48,
        "deals": 87,
        "pct": 55.2
      },
      {
        "name": "Jason Crooke",
        "repairs": 8,
        "deals": 19,
        "pct": 42.1
      }
    ],
    "salesCycle": {
      "kpis": [
        {
          "label": "Overall Median",
          "value": "35 days",
          "sub": "Mean: 100 days (skewed by insurance)"
        },
        {
          "label": "Retail",
          "value": "34 days",
          "sub": "All retail job types"
        },
        {
          "label": "Insurance",
          "value": "94 days",
          "sub": "Median | Mean: 313 days"
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
          "median": 34,
          "mean": 89,
          "count": 371
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
          "mean": 313,
          "count": 21
        },
        {
          "label": "Repair",
          "median": 1,
          "mean": 17,
          "count": 105
        },
        {
          "label": "Install",
          "median": 55,
          "mean": 131,
          "count": 287
        }
      ],
      "byMarket": [
        {
          "market": "Dayton",
          "median": 9,
          "mean": 40,
          "count": 13
        },
        {
          "market": "DC Metro",
          "median": 14,
          "mean": 61,
          "count": 41
        },
        {
          "market": "Richmond",
          "median": 19,
          "mean": 39,
          "count": 16
        },
        {
          "market": "Detroit Metro",
          "median": 19,
          "mean": 58,
          "count": 94
        },
        {
          "market": "Cincinnati",
          "median": 23,
          "mean": 59,
          "count": 30
        },
        {
          "market": "Indianapolis",
          "median": 31,
          "mean": 57,
          "count": 6
        },
        {
          "market": "Cleveland",
          "median": 35,
          "mean": 62,
          "count": 56
        },
        {
          "market": "Knoxville",
          "median": 42,
          "mean": 67,
          "count": 11
        },
        {
          "market": "Nashville",
          "median": 50,
          "mean": 66,
          "count": 15
        },
        {
          "market": "Columbus",
          "median": 56,
          "mean": 279,
          "count": 54
        },
        {
          "market": "Raleigh",
          "median": 100,
          "mean": 140,
          "count": 57
        }
      ],
      "starInsuranceClosers": [
        {
          "name": "Aaron Ellis",
          "medDays": 0,
          "count": 3
        }
      ]
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
      "avgWeeklyNeed": 2870733.72,
      "weeksRemaining": 18,
      "annualPlan": 51673207,
      "byJobType": [],
      "byTrade": [],
      "byMarket": [
        {
          "market": "Columbus",
          "total": 959810.53,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 2.2
        },
        {
          "market": "Detroit Metro",
          "total": 631212.19,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 3
        },
        {
          "market": "Raleigh",
          "total": 467151.1,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.6
        },
        {
          "market": "Cleveland",
          "total": 377359.91,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 2.5
        },
        {
          "market": "Cincinnati",
          "total": 176525.6,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.3
        },
        {
          "market": "DC Metro",
          "total": 94339.46,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.2
        },
        {
          "market": "Nashville",
          "total": 57555.34,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.4
        },
        {
          "market": "Dayton",
          "total": 36311.17,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.4
        },
        {
          "market": "Richmond",
          "total": 30849.81,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.5
        },
        {
          "market": "Indianapolis",
          "total": 21892.13,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.2
        },
        {
          "market": "Knoxville",
          "total": 17726.49,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.3
        }
      ],
      "weekSchedule": [
        {
          "wk": "10/05/2026",
          "mo": "Oct",
          "target": 2870733.72
        },
        {
          "wk": "10/12/2026",
          "mo": "Oct",
          "target": 2870733.72
        },
        {
          "wk": "10/19/2026",
          "mo": "Oct",
          "target": 2870733.72
        },
        {
          "wk": "10/26/2026",
          "mo": "Oct",
          "target": 2870733.72
        },
        {
          "wk": "11/02/2026",
          "mo": "Nov",
          "target": 2870733.72
        },
        {
          "wk": "11/09/2026",
          "mo": "Nov",
          "target": 2870733.72
        },
        {
          "wk": "11/16/2026",
          "mo": "Nov",
          "target": 2870733.72
        },
        {
          "wk": "11/23/2026",
          "mo": "Nov",
          "target": 2870733.72
        },
        {
          "wk": "11/30/2026",
          "mo": "Nov",
          "target": 2870733.72
        },
        {
          "wk": "12/07/2026",
          "mo": "Dec",
          "target": 2870733.72
        },
        {
          "wk": "12/14/2026",
          "mo": "Dec",
          "target": 2870733.72
        },
        {
          "wk": "12/21/2026",
          "mo": "Dec",
          "target": 2870733.72
        },
        {
          "wk": "12/28/2026",
          "mo": "Dec",
          "target": 2870733.72
        }
      ],
      "recent4WkAvg": 857122.76
    },
    "budgetRecovery": {
      "fullYearBudget": 51673207,
      "sourceFile": "2026 Commercial Budget.xlsx",
      "totalToRecover": 0,
      "upliftPct": -20.2,
      "q1Budget": 4533497.2,
      "q1Actual": 5414371.34,
      "q1Shortfall": 880874.14,
      "aprilGap": 1583469.55,
      "aprilBudget": 3233126.48,
      "aprilFcst": 4816596.03,
      "adjWeeklySalesAvg": 1019802.89,
      "origWeeklySalesAvg": 1277185.2,
      "salesDeltaPerWeek": -257382.31,
      "weeksRemaining": 18,
      "adjWeeklyProdAvg": 1019802.89,
      "origWeeklyProdAvg": 1277185.2,
      "prodDeltaPerWeek": -257382.31,
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
          "deals": 54
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
          "deals": 50
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
          "deals": 75
        },
        {
          "mo": "May 2026",
          "monthIdx": 4,
          "origBudget": 6618395.96,
          "fcst": 6618395.96,
          "recovTarget": 6618395.96,
          "catchUp": 0,
          "status": "Actual",
          "liveActual": 5965958.91,
          "deals": 52
        },
        {
          "mo": "Jun 2026",
          "monthIdx": 5,
          "origBudget": 3664695.3,
          "fcst": 3664695.3,
          "recovTarget": 5981269.68,
          "catchUp": 0,
          "status": "Actual",
          "liveActual": 5981269.68,
          "deals": 96
        },
        {
          "mo": "Jul 2026",
          "monthIdx": 6,
          "origBudget": 5298470.3,
          "fcst": 5298470.3,
          "recovTarget": 5298470.3,
          "catchUp": 0,
          "status": "Actual",
          "liveActual": 5112126.06,
          "deals": 62
        },
        {
          "mo": "Aug 2026",
          "monthIdx": 7,
          "origBudget": 5335688.23,
          "fcst": 5335688.23,
          "recovTarget": 6026432.95,
          "catchUp": 0,
          "status": "Actual",
          "liveActual": 6026432.95,
          "deals": 52
        },
        {
          "mo": "Sep 2026",
          "monthIdx": 8,
          "origBudget": 4474155.35,
          "fcst": 4474155.35,
          "recovTarget": 4474155.35,
          "catchUp": 0,
          "status": "Active",
          "liveActual": 4635380.87,
          "deals": 49
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
          "recovTarget": 2016104.08,
          "original": 2102158.13,
          "delta": -86054.04
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 1325875.7,
          "original": 1382468.5,
          "delta": -56592.8
        },
        {
          "market": "Raleigh",
          "recovTarget": 981261.62,
          "original": 1023145.14,
          "delta": -41883.52
        },
        {
          "market": "Cleveland",
          "recovTarget": 792653.15,
          "original": 826486.23,
          "delta": -33833.08
        },
        {
          "market": "Cincinnati",
          "recovTarget": 370796.08,
          "original": 386622.89,
          "delta": -15826.81
        },
        {
          "market": "DC Metro",
          "recovTarget": 198162.2,
          "original": 206620.43,
          "delta": -8458.22
        },
        {
          "market": "Nashville",
          "recovTarget": 120896.31,
          "original": 126056.57,
          "delta": -5160.26
        },
        {
          "market": "Dayton",
          "recovTarget": 76272.44,
          "original": 79528,
          "delta": -3255.56
        },
        {
          "market": "Richmond",
          "recovTarget": 64800.73,
          "original": 67566.64,
          "delta": -2765.91
        },
        {
          "market": "Indianapolis",
          "recovTarget": 45984.92,
          "original": 47947.71,
          "delta": -1962.79
        },
        {
          "market": "Knoxville",
          "recovTarget": 37234.9,
          "original": 38824.21,
          "delta": -1589.31
        }
      ],
      "adjProdByMarket": [
        {
          "market": "Columbus",
          "recovTarget": 2016104.08,
          "original": 2102158.13,
          "delta": -86054.04
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 1325875.7,
          "original": 1382468.5,
          "delta": -56592.8
        },
        {
          "market": "Raleigh",
          "recovTarget": 981261.62,
          "original": 1023145.14,
          "delta": -41883.52
        },
        {
          "market": "Cleveland",
          "recovTarget": 792653.15,
          "original": 826486.23,
          "delta": -33833.08
        },
        {
          "market": "Cincinnati",
          "recovTarget": 370796.08,
          "original": 386622.89,
          "delta": -15826.81
        },
        {
          "market": "DC Metro",
          "recovTarget": 198162.2,
          "original": 206620.43,
          "delta": -8458.22
        },
        {
          "market": "Nashville",
          "recovTarget": 120896.31,
          "original": 126056.57,
          "delta": -5160.26
        },
        {
          "market": "Dayton",
          "recovTarget": 76272.44,
          "original": 79528,
          "delta": -3255.56
        },
        {
          "market": "Richmond",
          "recovTarget": 64800.73,
          "original": 67566.64,
          "delta": -2765.91
        },
        {
          "market": "Indianapolis",
          "recovTarget": 45984.92,
          "original": 47947.71,
          "delta": -1962.79
        },
        {
          "market": "Knoxville",
          "recovTarget": 37234.9,
          "original": 38824.21,
          "delta": -1589.31
        }
      ],
      "actualSource": "NetSuite AR · invoiced revenue",
      "netsuiteTotal": 37952135.84,
      "netsuiteInvoiceCount": 341,
      "netsuiteLatestDate": "2026-09-25"
    },
    "pathToPlan": null,
    "commentary": {
      "whatsWorking": [
        "Sales Trajectory: Monthly sales moved from January $3.49M to September $3.43M (-2%). Annualized run rate: $59.28M.",
        "Premium Deal Types: Insurance averages $495,513 per deal. Retail-Financing averages $32,200 (highest per-deal value). Retail-No Financing averages $62,305 (the volume engine).",
        "Sold Conversion: 522 of 527 signed contracts (99.1%) have made it to Sold status for $44.01M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Production Review Queue: 2 deals worth $0 sitting in Production Review. Watch for backlog growth, it delays revenue recognition.",
        "Repair Rate Elevated: 25.6% of all deals are repairs (135 of 527). Repairs average ~$4,002, low value relative to installs at $111,179."
      ],
      "criticalRisks": [
        "Pipeline kickbacks company-wide: 0 kickbacks totaling $0.",
        "Production Review backlog: 2 deals ($0)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 34d median close on 371 retail deals.",
        "Insurance Density: $495,513 avg on 26 deals = $12.88M; +20% lift = ~$2.58M.",
        "September repair rate at 20.4% vs YTD 25.6%, correction in latest month.",
        "Financing Lifts Ticket: Retail-Financing averages $32,200, highest per-deal value."
      ],
      "fixList": [
        "Production Review Bottleneck, 2 deals; add temporary PM capacity.",
        "Financing Push, 1 financing deals YTD (0.2%) at $32,200 avg. Target 15% mix."
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
          "Repair Business Decision, 135 repairs YTD at ~$4,002 avg.",
          "Ops Capacity Planning, September hit 49 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "_source": "calculator/revenue-forecast-mf.js MF-v1.1-2026-05-04",
    "title": "Multi-Family Revenue Forecast",
    "subtitle": "MF-v1 · Job-by-job event model · Data through 2026-09-28",
    "runDate": "2026-09-28",
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
        "value": "$37.95M",
        "sub": "9 months elapsed"
      },
      {
        "label": "YTD vs Plan",
        "value": "+$6.04M",
        "sub": "Plan YTD: $31.91M",
        "trend": "positive"
      },
      {
        "label": "YTD vs Forecast",
        "value": "—",
        "sub": "No monthly schedules uploaded yet",
        "trend": "positive"
      },
      {
        "label": "Plan-Rest Forecast",
        "value": "$55.77M",
        "sub": "YTD actual + remaining-month plan"
      },
      {
        "label": "Annual Budget",
        "value": "$51.67M",
        "sub": "2026 MF target"
      },
      {
        "label": "Forecast vs Budget",
        "value": "+$4.1M",
        "sub": "ahead of plan",
        "trend": "positive"
      },
      {
        "label": "Current WIP",
        "value": "$6.06M",
        "sub": "17 jobs in flight today"
      },
      {
        "label": "Last Month Revenue",
        "value": "$6.03M",
        "sub": "August 2026"
      }
    ],
    "execSummary": {
      "budget": 51673207,
      "modelAnnualInvoiced": 50602847.78666668,
      "gap": 4097347.35855902,
      "narrative": "9 months of FY2026 MF activity reported, $37.95M invoiced YTD. Run-rate annualizes to $50.6M against the $51.67M plan, a surplus."
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
        "wipChange": 3834748.2600000007,
        "netRevenue": 3966078.4399999995,
        "startingCount": 29,
        "completingCount": 33,
        "plan": 2964722.142117475,
        "gap": 1001356.2978825243
      },
      "apr": {
        "invoiced": 4816596.029999999,
        "wipChange": 811293.79,
        "netRevenue": 4816596.029999999,
        "startingCount": 31,
        "completingCount": 37,
        "plan": 3111458.078051097,
        "gap": 1705137.951948902
      },
      "may": {
        "invoiced": 5965958.91,
        "wipChange": -778259.1199999992,
        "netRevenue": 5965958.91,
        "startingCount": 23,
        "completingCount": 39,
        "plan": 6369333.738681715,
        "gap": -403374.82868171483
      },
      "jun": {
        "invoiced": 5981269.680000001,
        "wipChange": -1510531.71,
        "netRevenue": 5981269.680000001,
        "startingCount": 40,
        "completingCount": 36,
        "plan": 3526786.183669391,
        "gap": 2454483.4963306095
      },
      "jul": {
        "invoiced": 5112126.0600000005,
        "wipChange": -337586.5200000005,
        "netRevenue": 5112126.0600000005,
        "startingCount": 37,
        "completingCount": 65,
        "plan": 5099079.268445946,
        "gap": 13046.791554054245
      },
      "aug": {
        "invoiced": 6026432.949999999,
        "wipChange": -1536786.9399999985,
        "netRevenue": 6026432.949999999,
        "startingCount": 50,
        "completingCount": 51,
        "plan": 5134896.622445581,
        "gap": 891536.3275544187
      },
      "sep": {
        "invoiced": 4635380.869999999,
        "wipChange": 801067.3300000001,
        "netRevenue": 4635380.869999999,
        "startingCount": 31,
        "completingCount": 35,
        "plan": 4305784.787290315,
        "gap": 329596.08270968404
      },
      "oct": {
        "invoiced": 0,
        "wipChange": 7236,
        "netRevenue": 0,
        "startingCount": 1,
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
        "plan": 5651293.539092463,
        "gap": -5651293.539092463
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
      "gap": 0,
      "upliftPct": 0,
      "aprilGap": 0,
      "q1OriginalBudget": 0,
      "q1Actual": 0,
      "q1Shortfall": 0,
      "recoveryRatio": 0
    },
    "profitabilitySummary": {
      "combinedGP": 20629425.700000007,
      "combinedGP_pct": 32.812213943599176,
      "combinedRevenue": 62871178.810000055,
      "y2025_GP_pct": 32.44182325074924,
      "y2025_revenue": 40866593.71000002,
      "y2025_jobs": 294,
      "y2026_GP_pct": 33.5000981227317,
      "y2026_revenue": 22004585.099999994,
      "y2026_jobs": 199,
      "materialCost": 22144867.880000006,
      "laborCost": 19484135.43,
      "otherCost": 569907.3099999996,
      "commissions": 174553.80999999968,
      "materialPctContract": 35.222606445670344,
      "laborPctContract": 30.990568013496393,
      "otherPctContract": 0.9064683067614954,
      "commissionPctContract": 0.27763724699279185,
      "sourceFile": "GregProfitabilityMFResults925.csv",
      "jobsParsed": 493
    },
    "profitabilityByJobType": [
      {
        "key": "Retail",
        "jobs": 195,
        "revenue": 18293377.499999993,
        "expenses": 12624363.679999992,
        "gross_profit": 5669013.819999993,
        "material": 6702532.920000009,
        "labor": 5825290.689999997,
        "other": 106030.00000000001,
        "commission": 15293.419999999996,
        "contract": 18173930.399999995,
        "gp_pct": 30.98943221392548
      },
      {
        "key": "Insurance",
        "jobs": 4,
        "revenue": 3711207.5999999996,
        "expenses": 2008663.82,
        "gross_profit": 1702543.7800000003,
        "material": 1118380.48,
        "labor": 845978.63,
        "other": 25820.7,
        "commission": 0,
        "contract": 3711419.7199999997,
        "gp_pct": 45.87573543447153
      }
    ],
    "profitabilityByMarket": [
      {
        "key": "Columbus",
        "jobs": 36,
        "revenue": 5587195.89,
        "expenses": 3604456.8400000003,
        "gross_profit": 1982739.0499999996,
        "material": 1914587.7000000004,
        "labor": 1616867.3499999999,
        "other": 65284.64000000001,
        "commission": 0,
        "contract": 5507180.109999999,
        "gp_pct": 35.48719409585619
      },
      {
        "key": "Detroit Metro",
        "jobs": 33,
        "revenue": 5261112.33,
        "expenses": 3696690.799999999,
        "gross_profit": 1564421.5300000007,
        "material": 1902185.3099999998,
        "labor": 1757514.79,
        "other": 34725.600000000006,
        "commission": 558.73,
        "contract": 5230068.43,
        "gp_pct": 29.735566014801297
      },
      {
        "key": "Raleigh",
        "jobs": 28,
        "revenue": 4561212.279999999,
        "expenses": 3127943.5400000005,
        "gross_profit": 1433268.7400000002,
        "material": 1771604.3,
        "labor": 1352281.26,
        "other": 0,
        "commission": 3636.93,
        "contract": 4560269.58,
        "gp_pct": 31.422978191227713
      },
      {
        "key": "Cleveland",
        "jobs": 56,
        "revenue": 3403579.3600000003,
        "expenses": 2089891.0699999994,
        "gross_profit": 1313688.290000001,
        "material": 1204268.3399999999,
        "labor": 856345.49,
        "other": 26996.480000000003,
        "commission": 0,
        "contract": 3401801.7600000002,
        "gp_pct": 38.59725750599219
      },
      {
        "key": "Cincinnati",
        "jobs": 14,
        "revenue": 985717.8099999999,
        "expenses": 659294.4099999999,
        "gross_profit": 326423.39999999997,
        "material": 369382.3,
        "labor": 302234.70999999996,
        "other": 0,
        "commission": 5647.89,
        "contract": 985717.8099999999,
        "gp_pct": 33.11529899211215
      },
      {
        "key": "Nashville",
        "jobs": 8,
        "revenue": 855073.51,
        "expenses": 549764.1399999999,
        "gross_profit": 305309.37000000005,
        "material": 202051.91,
        "labor": 341989.03,
        "other": 4843.98,
        "commission": 4043.63,
        "contract": 850953.51,
        "gp_pct": 35.7056283967913
      },
      {
        "key": "DC Metro",
        "jobs": 9,
        "revenue": 578137.41,
        "expenses": 376838.14,
        "gross_profit": 201299.27000000002,
        "material": 185852.23,
        "labor": 193118.31,
        "other": 0,
        "commission": 0,
        "contract": 576802.41,
        "gp_pct": 34.818585775309025
      },
      {
        "key": "Dayton",
        "jobs": 5,
        "revenue": 356165,
        "expenses": 254893.63,
        "gross_profit": 101271.37,
        "material": 118307.1,
        "labor": 136018.94,
        "other": 0,
        "commission": 0,
        "contract": 356165,
        "gp_pct": 28.43383544143866
      },
      {
        "key": "Indianapolis",
        "jobs": 2,
        "revenue": 206885.24,
        "expenses": 146256.59,
        "gross_profit": 60628.65000000001,
        "material": 81577.68,
        "labor": 59991.44,
        "other": 0,
        "commission": 1406.24,
        "contract": 206885.24,
        "gp_pct": 29.30544972662139
      },
      {
        "key": "Richmond",
        "jobs": 5,
        "revenue": 186637.77,
        "expenses": 114869.88,
        "gross_profit": 71767.89,
        "material": 67393.07,
        "labor": 46483,
        "other": 0,
        "commission": 0,
        "contract": 186637.77,
        "gp_pct": 38.45303659596876
      },
      {
        "key": "Knoxville",
        "jobs": 3,
        "revenue": 22868.5,
        "expenses": 12128.46,
        "gross_profit": 10740.04,
        "material": 3703.46,
        "labor": 8425,
        "other": 0,
        "commission": 0,
        "contract": 22868.5,
        "gp_pct": 46.96433959376435
      }
    ],
    "profitabilityByJobType2025": [
      {
        "key": "Retail",
        "jobs": 278,
        "revenue": 34571851,
        "expenses": 24045317.18999999,
        "gross_profit": 10526533.810000017,
        "material": 12497955.359999996,
        "labor": 11178648.199999997,
        "other": 364630.51999999996,
        "commission": 124751.50999999995,
        "contract": 34649132.96,
        "gp_pct": 30.44827946875051
      },
      {
        "key": "Insurance",
        "jobs": 15,
        "revenue": 6236233.51,
        "expenses": 3519399.16,
        "gross_profit": 2716834.3500000006,
        "material": 1800669.46,
        "labor": 1614647.91,
        "other": 73426.09,
        "commission": 34508.880000000005,
        "contract": 6170968.51,
        "gp_pct": 43.56530822079497
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
        "jobs": 70,
        "revenue": 11382788.689999996,
        "expenses": 8134758.330000001,
        "gross_profit": 3248030.3599999985,
        "material": 4143387.260000002,
        "labor": 3839230.38,
        "other": 157758.72000000003,
        "commission": 22258.990000000005,
        "contract": 11372160.929999996,
        "gp_pct": 28.534574860846334
      },
      {
        "key": "Raleigh",
        "jobs": 66,
        "revenue": 10247416.09,
        "expenses": 7186280.219999999,
        "gross_profit": 3061135.869999999,
        "material": 3880814.8799999994,
        "labor": 3234986.1700000004,
        "other": 64141.77,
        "commission": 41301.77999999999,
        "contract": 10254540.28,
        "gp_pct": 29.872270659402872
      },
      {
        "key": "Columbus",
        "jobs": 32,
        "revenue": 6058740.699999998,
        "expenses": 4142650.94,
        "gross_profit": 1916089.7600000002,
        "material": 2142916.19,
        "labor": 1841149.43,
        "other": 125047.36999999998,
        "commission": 0,
        "contract": 6111475.699999998,
        "gp_pct": 31.62521479092183
      },
      {
        "key": "Cleveland",
        "jobs": 36,
        "revenue": 4017102.290000001,
        "expenses": 2379200.2199999997,
        "gross_profit": 1637902.0699999998,
        "material": 1197659.5100000002,
        "labor": 1136773.7299999997,
        "other": 44827.439999999995,
        "commission": 29772.96,
        "contract": 4013186.4700000007,
        "gp_pct": 40.773222879519935
      },
      {
        "key": "DC Metro",
        "jobs": 17,
        "revenue": 2661255.06,
        "expenses": 1790621.2200000002,
        "gross_profit": 870633.84,
        "material": 868098.3300000002,
        "labor": 916079.02,
        "other": 6695.08,
        "commission": 10707.53,
        "contract": 2754798.8200000003,
        "gp_pct": 32.715159590903696
      },
      {
        "key": "Cincinnati",
        "jobs": 40,
        "revenue": 2187118.7399999998,
        "expenses": 1433649.4800000004,
        "gross_profit": 753469.26,
        "material": 740067.0599999997,
        "labor": 686964.36,
        "other": 7736.63,
        "commission": 19940.030000000006,
        "contract": 2177117.3299999996,
        "gp_pct": 34.450313383533995
      },
      {
        "key": "Nashville",
        "jobs": 9,
        "revenue": 1841735.6199999999,
        "expenses": 994457.8999999999,
        "gross_profit": 847277.7200000001,
        "material": 502741.73000000004,
        "labor": 474823.49,
        "other": 14053.54,
        "commission": 15841.939999999999,
        "contract": 1726735.6199999999,
        "gp_pct": 46.00430761066565
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
        "commission": 16023.029999999999,
        "contract": 1599017.2,
        "gp_pct": 40.09686119331222
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
        "key": "Richmond",
        "jobs": 3,
        "revenue": 179379.48,
        "expenses": 124673.12999999999,
        "gross_profit": 54706.350000000006,
        "material": 67713.23,
        "labor": 57026,
        "other": 0,
        "commission": 0,
        "contract": 180293.48,
        "gp_pct": 30.497551893895558
      },
      {
        "key": "Indianapolis",
        "jobs": 4,
        "revenue": 175281.74,
        "expenses": 122781.3,
        "gross_profit": 52500.44,
        "material": 60823.469999999994,
        "labor": 57460,
        "other": 4550.43,
        "commission": 0,
        "contract": 175281.74,
        "gp_pct": 29.952030371218363
      },
      {
        "key": "Knoxville",
        "jobs": 6,
        "revenue": 167209.4,
        "expenses": 113565.59000000001,
        "gross_profit": 53643.810000000005,
        "material": 57874.87,
        "labor": 55696,
        "other": 0,
        "commission": 342.78,
        "contract": 167740.4,
        "gp_pct": 32.08181477835576
      }
    ],
    "pipelineSnapshot": {
      "stages": [
        {
          "stage": "In WIP today",
          "jobs": 17,
          "value": 6063607.08
        }
      ],
      "totalJobs": 17,
      "totalValue": 6063607.08
    },
    "commentary": {
      "actionableRecommendations": [
        "Tracking ahead of plan by $4.1M."
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
            "$7.8M",
            "$6.19M",
            33,
            29
          ],
          [
            "April",
            "$4.82M",
            "$3.11M",
            "$1.71M",
            "$5.63M",
            "$8.17M",
            37,
            31
          ],
          [
            "May",
            "$5.97M",
            "$6.37M",
            "$-403K",
            "$5.19M",
            "$4.94M",
            39,
            23
          ],
          [
            "June",
            "$5.98M",
            "$3.53M",
            "$2.45M",
            "$4.47M",
            "$5.66M",
            36,
            40
          ],
          [
            "July",
            "$5.11M",
            "$5.1M",
            "$13K",
            "$4.77M",
            "$5.22M",
            65,
            37
          ],
          [
            "August",
            "$6.03M",
            "$5.13M",
            "$892K",
            "$4.49M",
            "$5.24M",
            51,
            50
          ],
          [
            "September",
            "$4.64M",
            "$4.31M",
            "$330K",
            "$5.44M",
            "$6.06M",
            35,
            31
          ],
          [
            "October",
            "$0",
            "$7.09M",
            "$-7.09M",
            "$7K",
            "$6.07M",
            0,
            1
          ],
          [
            "November",
            "$0",
            "$5.65M",
            "$-5.65M",
            "$0",
            "$6.07M",
            0,
            0
          ],
          [
            "December",
            "$0",
            "$5.08M",
            "$-5.08M",
            "$0",
            "$6.07M",
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
            "—",
            "$4.82M",
            "—",
            "—"
          ],
          [
            "May",
            "—",
            "$5.97M",
            "—",
            "—"
          ],
          [
            "June",
            "—",
            "$5.98M",
            "—",
            "—"
          ],
          [
            "July",
            "—",
            "$5.11M",
            "—",
            "—"
          ],
          [
            "August",
            "—",
            "$6.03M",
            "—",
            "—"
          ],
          [
            "September",
            "—",
            "$4.64M",
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
        "rows": []
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
        "rows": []
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
            "$9.51M",
            "$2.88M",
            62
          ],
          [
            "Detroit",
            "$9.14M",
            "$0",
            65
          ],
          [
            "Raleigh",
            "$7.36M",
            "$80K",
            65
          ],
          [
            "DC Metro",
            "$4.27M",
            "$164K",
            19
          ],
          [
            "Cleveland",
            "$3.91M",
            "$0",
            70
          ],
          [
            "Cincinnati",
            "$1.8M",
            "$1.79M",
            40
          ],
          [
            "Detroit Metro",
            "$0",
            "$1.06M",
            3
          ],
          [
            "Nashville",
            "$1.05M",
            "$0",
            14
          ],
          [
            "Dayton",
            "$356K",
            "$0",
            5
          ],
          [
            "Richmond",
            "$187K",
            "$90K",
            6
          ],
          [
            "Indianapolis",
            "$251K",
            "$0",
            3
          ],
          [
            "Knoxville",
            "$105K",
            "$0",
            6
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
            "$30.57M",
            310
          ],
          [
            "Insurance",
            "$5.2M",
            8
          ],
          [
            "LowMar",
            "$59K",
            1
          ],
          [
            "Retail-Financing",
            "$32K",
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
            "Job-118198",
            "Towne Properties - Columbus",
            "Columbus",
            "$1.44M",
            "2026-09-22"
          ],
          [
            "Job-101476",
            "Towne Properties - Cincinnati West District Office",
            "Cincinnati",
            "$1.33M",
            "2025-11-17"
          ],
          [
            "Job-116689",
            "Worly Plumbing Supply Inc",
            "Columbus",
            "$753K",
            "2026-08-26"
          ],
          [
            "Job-109026",
            "Select Management",
            "Detroit Metro",
            "$671K",
            "2026-04-13"
          ],
          [
            "Job-116756",
            "Pirhl",
            "Columbus",
            "$427K",
            "2026-08-26"
          ],
          [
            "Job-118802",
            "Singh Management",
            "Detroit Metro",
            "$275K",
            "2026-09-18"
          ],
          [
            "Job-114174",
            "Sundance Property Management Inc",
            "Cincinnati",
            "$204K",
            "2026-08-21"
          ],
          [
            "Job-119094",
            "Clayman Property Services",
            "Columbus",
            "$172K",
            "2026-09-18"
          ],
          [
            "Job-110389",
            "WPM Real Estate Management",
            "DC Metro",
            "$164K",
            "2026-05-06"
          ],
          [
            "Job-117727",
            "Advantage Property Management, Inc",
            "Cincinnati",
            "$129K",
            "2026-09-09"
          ],
          [
            "Job-118044",
            "KS Management",
            "Detroit Metro",
            "$114K",
            "2026-09-22"
          ],
          [
            "Job-101477",
            "Towne Properties - Cincinnati West District Office",
            "Cincinnati",
            "$110K",
            "2025-11-17"
          ],
          [
            "Job-108500",
            "MyStreet Community Management",
            "Richmond",
            "$90K",
            "2026-06-29"
          ],
          [
            "Job-117713",
            "Priestley Management Company",
            "Raleigh",
            "$80K",
            "2026-09-25"
          ],
          [
            "Job-119453",
            "The Bray Company",
            "Columbus",
            "$64K",
            "2026-09-28"
          ],
          [
            "Job-116327",
            "Steve Salvini",
            "Columbus",
            "$22K",
            "2026-09-14"
          ],
          [
            "Job-113378",
            "C&F Real Estate",
            "Cincinnati",
            "$21K",
            "2026-09-17"
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
                "backgroundColor": "#7895c4"
              },
              {
                "label": "Actual",
                "data": [
                  1085061.87,
                  363231.03,
                  3966078.4399999995,
                  4816596.029999999,
                  5965958.91,
                  5981269.680000001,
                  5112126.0600000005,
                  6026432.949999999,
                  4635380.869999999,
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
                  3111458.078051097,
                  6369333.738681715,
                  3526786.183669391,
                  5099079.268445946,
                  5134896.622445581,
                  4305784.787290315,
                  7086194.828295313,
                  5651293.539092463,
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
                "backgroundColor": [
                  "#e3e6ec",
                  "#e3e6ec",
                  "#e3e6ec",
                  "#e3e6ec",
                  "#e3e6ec",
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
                  6190409.79,
                  8165288.68,
                  4935608.970000001,
                  5656077.859999999,
                  5217007.01,
                  5239949.75,
                  6063607.08,
                  6070843.08,
                  6070843.08,
                  6070843.08
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
                  7800826.7,
                  5627889.819999999,
                  5187699.790000001,
                  4470737.970000001,
                  4774539.54,
                  4489646.010000001,
                  5436448.199999999,
                  7236,
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
                  5965958.91,
                  5981269.680000001,
                  5112126.0600000005,
                  6026432.949999999,
                  4635380.869999999,
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
      3111458.078051097,
      6369333.738681715,
      3526786.183669391,
      5099079.268445946,
      5134896.622445581,
      4305784.787290315,
      7086194.828295313,
      5651293.539092463,
      5080930.151171241
    ],
    "revModel": [
      1085061.87,
      363231.03,
      3966078.4399999995,
      4816596.029999999,
      5965958.91,
      5981269.680000001,
      5112126.0600000005,
      6026432.949999999,
      4635380.869999999,
      0,
      0,
      0
    ],
    "revFromKnown": [
      1085061.87,
      363231.03,
      3966078.4399999995,
      4816596.029999999,
      5965958.91,
      5981269.680000001,
      5112126.0600000005,
      6026432.949999999,
      4635380.869999999,
      0,
      0,
      0
    ],
    "requiredSales": [
      639122.2851245126,
      759049.0680259366,
      2964722.142117475,
      3111458.078051097,
      6369333.738681715,
      3526786.183669391,
      5099079.268445946,
      5134896.622445581,
      4305784.787290315,
      7086194.828295313,
      5651293.539092463,
      5080930.151171241
    ],
    "backlogData": [
      2081200.16,
      2217620.42,
      6190409.79,
      8165288.68,
      4935608.970000001,
      5656077.859999999,
      5217007.01,
      5239949.75,
      6063607.08,
      6070843.08,
      6070843.08,
      6070843.08
    ],
    "tabs": []
  },
  "BACKLOG": {
    "_source": "calculator/backlog.js v1.0-rules-encoded",
    "title": "Job Backlog & Production",
    "subtitle": "Live job-level backlog",
    "headerMeta": {
      "totalJobs": 119,
      "totalWOs": 435,
      "portfolioValue": 22052898.77,
      "avgDaysInStatus": 53,
      "lastBuild": "2026-09-28T18:40:34.559Z"
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
        "value": "119",
        "sub": "435 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "16",
        "sub": "13.4% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "103",
        "sub": "86.6% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "4",
        "sub": "25.0% of In Progress",
        "tone": "crit"
      },
      {
        "label": "Avg Days in Status",
        "value": "53",
        "sub": "Job-level average",
        "tone": "warn"
      },
      {
        "label": "Total Portfolio Value",
        "value": "$22.05M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$9.45M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$2.30M",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "4",
        "sub": "25.0% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$2.30M",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "44",
        "sub": "Across 4 jobs",
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
        "value": "Roofing",
        "sub": "42 open WOs / 2 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "177",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "56",
        "sub": "31.6% of all holds",
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
        "value": "54d",
        "sub": "Mean days in hold across all sub-statuses",
        "tone": "info"
      }
    ],
    "kpisSales": [
      {
        "label": "Active Reps",
        "value": "15",
        "sub": "Reps with at least one open WO",
        "tone": "info"
      },
      {
        "label": "Stuck Value >30d",
        "value": "$9.45M",
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
        "value": "$2.40M",
        "sub": "Highest single-rep stuck value",
        "tone": "warn"
      }
    ],
    "kpisBacklog": [
      {
        "label": "Not Started Jobs",
        "value": "103",
        "sub": "86.6% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$16.42M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "725d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Cleveland",
        "sub": "26 jobs (25.2% of backlog)",
        "tone": "warn"
      }
    ],
    "charts": [
      {
        "id": "ch-wo-status",
        "labels": [
          "On Hold",
          "Ready to Schedule",
          "Scheduled",
          "In Progress",
          "Completed",
          "New"
        ],
        "datasets": [
          {
            "label": "Work Orders",
            "data": [
              177,
              116,
              79,
              37,
              19,
              7
            ]
          }
        ]
      },
      {
        "id": "ch-branch",
        "labels": [
          "Columbus",
          "Detroit Metro",
          "Raleigh",
          "Cincinnati",
          "Cleveland",
          "Nashville",
          "Richmond",
          "Dayton",
          "Knoxville",
          "DC Metro",
          "Indianapolis"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              6,
              12,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1
            ]
          },
          {
            "label": "Open",
            "data": [
              18,
              9,
              3,
              6,
              2,
              0,
              2,
              0,
              0,
              3,
              1
            ]
          },
          {
            "label": "On Hold",
            "data": [
              49,
              36,
              8,
              10,
              35,
              18,
              2,
              7,
              7,
              4,
              1
            ]
          },
          {
            "label": "RTS",
            "data": [
              36,
              13,
              22,
              31,
              8,
              0,
              5,
              1,
              0,
              0,
              0
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              33,
              9,
              26,
              2,
              0,
              0,
              3,
              2,
              3,
              1,
              0
            ]
          }
        ]
      },
      {
        "id": "ch-wo-aging",
        "labels": [
          "Completed",
          "On Hold",
          "In Progress",
          "Ready to Schedule",
          "Scheduled",
          "New"
        ],
        "datasets": [
          {
            "label": "Avg Days",
            "data": [
              87,
              54,
              33,
              18,
              14,
              0
            ]
          },
          {
            "label": "Max Days",
            "data": [
              131,
              725,
              315,
              238,
              119,
              0
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
              19,
              0,
              0,
              0,
              0
            ]
          },
          {
            "label": "Open",
            "data": [
              364,
              36,
              11,
              4,
              1
            ]
          }
        ]
      },
      {
        "id": "ch-incomplete-status",
        "labels": [
          "Scheduled",
          "In Progress"
        ],
        "datasets": [
          {
            "label": "WOs",
            "data": [
              30,
              14
            ]
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
              12,
              31,
              0,
              0,
              0,
              1
            ]
          }
        ]
      },
      {
        "id": "ch-backlog",
        "labels": [
          "Cleveland",
          "Columbus",
          "Detroit Metro",
          "Cincinnati",
          "Dayton",
          "Raleigh",
          "DC Metro",
          "Richmond",
          "Nashville",
          "Knoxville",
          "Indianapolis"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              26,
              18,
              16,
              10,
              8,
              8,
              6,
              6,
              2,
              2,
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
            "Columbus",
            142,
            6,
            49,
            36,
            33,
            17,
            0,
            13,
            23,
            6617328.06
          ],
          [
            "Detroit Metro",
            79,
            12,
            36,
            13,
            9,
            8,
            0,
            8,
            19,
            6437799
          ],
          [
            "Raleigh",
            59,
            0,
            8,
            22,
            26,
            3,
            0,
            7,
            9,
            1747922
          ],
          [
            "Cincinnati",
            49,
            0,
            10,
            31,
            2,
            6,
            0,
            4,
            14,
            2951472.56
          ],
          [
            "Cleveland",
            45,
            0,
            35,
            8,
            0,
            0,
            0,
            18,
            26,
            2371534.65
          ],
          [
            "Nashville",
            18,
            0,
            18,
            0,
            0,
            0,
            0,
            1,
            2,
            311628
          ],
          [
            "Richmond",
            12,
            0,
            2,
            5,
            3,
            1,
            0,
            0,
            7,
            345583.5
          ],
          [
            "Dayton",
            10,
            0,
            7,
            1,
            2,
            0,
            0,
            1,
            8,
            298337
          ],
          [
            "Knoxville",
            10,
            0,
            7,
            0,
            3,
            0,
            0,
            0,
            2,
            169617
          ],
          [
            "DC Metro",
            8,
            0,
            4,
            0,
            1,
            1,
            0,
            3,
            7,
            764417
          ],
          [
            "Indianapolis",
            3,
            1,
            1,
            0,
            0,
            1,
            0,
            1,
            2,
            37260
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
            "Pending Deposit",
            82,
            48,
            161
          ],
          [
            "Pending Permit",
            56,
            41,
            725
          ],
          [
            "Pending HOA",
            17,
            12,
            102
          ],
          [
            "Spring Hold",
            11,
            221,
            550
          ],
          [
            "(no sub-status)",
            8,
            22,
            66
          ],
          [
            "Homeowner Request",
            3,
            184,
            487
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
        "rows": [
          [
            "Roofing",
            42,
            2,
            1608634.08
          ],
          [
            "Gutters",
            2,
            2,
            692640
          ]
        ]
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
            18
          ],
          [
            "Ready to Schedule",
            9
          ],
          [
            "New",
            4
          ],
          [
            "Scheduled",
            3
          ],
          [
            "In Progress",
            2
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
            383,
            19,
            364,
            89,
            18207851.78
          ],
          [
            "Gutters",
            36,
            0,
            36,
            36,
            6639569.3
          ],
          [
            "Siding",
            11,
            0,
            11,
            11,
            2565786.42
          ],
          [
            "Other",
            4,
            0,
            4,
            4,
            1419126.73
          ],
          [
            "Windows",
            1,
            0,
            1,
            1,
            22040
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
            "Shawn Dunnigan - INACTIVE",
            29,
            4,
            2404688,
            17,
            1
          ],
          [
            "Mark Leedy",
            56,
            20,
            1953888,
            10,
            3
          ],
          [
            "Christy Osborne",
            100,
            6,
            1402800.5,
            29,
            1
          ],
          [
            "Todd Sandler",
            10,
            5,
            753394,
            1,
            1
          ],
          [
            "Courtney Lyon",
            27,
            7,
            746019,
            18,
            1
          ],
          [
            "Marko Jovanovic",
            8,
            7,
            600514,
            5,
            1
          ],
          [
            "Nicholas Andrukat",
            43,
            24,
            588828,
            10,
            1
          ],
          [
            "Aaron Ellis",
            28,
            4,
            366369,
            8,
            2
          ],
          [
            "Lisa Gibson",
            11,
            9,
            270127,
            4,
            5
          ],
          [
            "Jason Crooke",
            12,
            7,
            268558.5,
            6,
            1
          ],
          [
            "Ron Saxe",
            28,
            8,
            96282,
            3,
            1
          ],
          [
            "Micah Williamson",
            24,
            9,
            0,
            0,
            2
          ],
          [
            "Evan Hall",
            23,
            5,
            0,
            0,
            1
          ],
          [
            "Matthew Cooke",
            1,
            1,
            0,
            0,
            1
          ],
          [
            "Kristi Mitchell",
            35,
            3,
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
            "Cleveland",
            26,
            2371534.65,
            487
          ],
          [
            "Columbus",
            18,
            4168779.98,
            161
          ],
          [
            "Detroit Metro",
            16,
            5377104,
            462
          ],
          [
            "Cincinnati",
            10,
            1179337.56,
            238
          ],
          [
            "Dayton",
            8,
            298337,
            66
          ],
          [
            "Raleigh",
            8,
            1668337,
            24
          ],
          [
            "DC Metro",
            6,
            599978,
            725
          ],
          [
            "Richmond",
            6,
            256026.5,
            53
          ],
          [
            "Nashville",
            2,
            311628,
            20
          ],
          [
            "Knoxville",
            2,
            169617,
            68
          ],
          [
            "Indianapolis",
            1,
            15975,
            6
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
            "Gutters",
            "Pending Permit",
            "Marko Jovanovic",
            725,
            69162
          ],
          [
            "Job-093347",
            "Comsource Management, Inc.",
            "DC Metro",
            "Roofing",
            "Spring Hold",
            "Marko Jovanovic",
            550,
            205493
          ],
          [
            "Job-097306",
            "Barnett Management Inc.",
            "Cleveland",
            "Gutters",
            "Homeowner Request",
            "Nicholas Andrukat",
            487,
            34652
          ],
          [
            "Job-098561",
            "Compass Management Professionals",
            "Detroit Metro",
            "Roofing",
            "Spring Hold",
            "Shawn Dunnigan - INACTIVE",
            462,
            866666
          ],
          [
            "Job-098563",
            "Compass Management Professionals",
            "Detroit Metro",
            "Roofing",
            "Spring Hold",
            "Shawn Dunnigan - INACTIVE",
            462,
            866667
          ],
          [
            "Job-106353",
            "Towne Properties - Northern Kentucky",
            "Cincinnati",
            "Siding",
            "",
            "Mark Leedy",
            238,
            42560
          ],
          [
            "Job-111825",
            "Capital Property Solutions",
            "Columbus",
            "Siding",
            "Pending Deposit",
            "Ron Saxe",
            161,
            74242
          ],
          [
            "Job-112329",
            "Associated Property Management, LLC",
            "Cleveland",
            "Gutters",
            "",
            "Nicholas Andrukat",
            123,
            256141
          ],
          [
            "Job-110180",
            "WPM Real Estate Management",
            "DC Metro",
            "Siding",
            "",
            "Marko Jovanovic",
            119,
            161420
          ],
          [
            "Job-114434",
            "John Hurley",
            "Cincinnati",
            "Roofing",
            "Pending Deposit",
            "Lisa Gibson",
            116,
            1800
          ],
          [
            "Job-115219",
            "Towne Properties - East Cincinnati District Office",
            "Cincinnati",
            "Gutters",
            "Pending HOA",
            "Mark Leedy",
            102,
            98128
          ],
          [
            "Job-115565",
            "Associated Property Management, LLC",
            "Cleveland",
            "Roofing",
            "Pending Deposit",
            "Nicholas Andrukat",
            97,
            40750
          ],
          [
            "Job-116339",
            "New Testament Church",
            "Detroit Metro",
            "Roofing",
            "Pending Permit",
            "Courtney Lyon",
            81,
            33450
          ],
          [
            "Job-117156",
            "Associa On Call Tennessee Knoxville",
            "Knoxville",
            "Roofing",
            "Pending Deposit",
            "Aaron Ellis",
            68,
            67959
          ],
          [
            "Job-117331",
            "Towne Properties - Dayton",
            "Dayton",
            "Gutters",
            "",
            "Mark Leedy",
            66,
            43988
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Cleveland",
          "permits": 18
        },
        {
          "branch": "Columbus",
          "permits": 13
        },
        {
          "branch": "Detroit Metro",
          "permits": 8
        },
        {
          "branch": "Raleigh",
          "permits": 7
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
          "branch": "Nashville",
          "permits": 1
        },
        {
          "branch": "Dayton",
          "permits": 1
        },
        {
          "branch": "Indianapolis",
          "permits": 1
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $2.30M of trapped partial-job revenue into billable revenue, reduce $9.45M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Roofing sweep: 42 open WOs across 2 partial jobs blocking $1.61M. Highest single-trade leverage in the book.",
        "Cleveland permit sweep: 18 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Roofing): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 103 jobs ($16.42M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $2.30M, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 08, 2026 - Sep 25, 2026 - De-Duplicated at Job Level - 323 Jobs - 11 Markets - 12 PMs",
    "generated": "2026-09-28",
    "headerMeta": {
      "trueRevenue": 36625406.41,
      "uniqueJobs": 323,
      "markets": 11,
      "pms": 12,
      "medianComplete": 57.4,
      "avgStart": 64.6,
      "multiTradeJobs": 37,
      "singleTradeJobs": 286,
      "multiTradePct": 11.5,
      "lastBuild": "2026-09-28T18:40:34.591Z"
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
        "value": "$36.63M",
        "sub": "323 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$113,391",
        "sub": "Per job (deduped)"
      },
      {
        "label": "Median Days to Complete",
        "value": "57.4d",
        "sub": "Job-level median"
      },
      {
        "label": "Avg Days to Start",
        "value": "64.6d",
        "sub": "Sale to crew on-site"
      },
      {
        "label": "Multi-Trade Jobs",
        "value": "37",
        "sub": "11.5% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "286",
        "sub": "88.5% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$265,255",
        "sub": "+183.0% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$93,745",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+18.3d",
        "sub": "MT 71.7d vs ST 53.4d"
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
        "rev": 3745588.93,
        "jobs": 36,
        "med": 45.9,
        "start": 65.1
      },
      {
        "m": "2026-05",
        "label": "May",
        "key": "2026-05",
        "rev": 8648464.86,
        "jobs": 39,
        "med": 41.4,
        "start": 74.2
      },
      {
        "m": "2026-06",
        "label": "June",
        "key": "2026-06",
        "rev": 4478837.21,
        "jobs": 37,
        "med": 54,
        "start": 58
      },
      {
        "m": "2026-07",
        "label": "July",
        "key": "2026-07",
        "rev": 5315445.06,
        "jobs": 65,
        "med": 49.4,
        "start": 62.8
      },
      {
        "m": "2026-08",
        "label": "August",
        "key": "2026-08",
        "rev": 4500863.77,
        "jobs": 51,
        "med": 64.6,
        "start": 58.3
      },
      {
        "m": "2026-09",
        "label": "September",
        "key": "2026-09",
        "rev": 4632780.87,
        "jobs": 35,
        "med": 64.6,
        "start": 66.9
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
          "2026-05",
          "2026-06",
          "2026-07",
          "2026-08",
          "2026-09"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              959133.87,
              321676.41,
              4022615.43,
              3745588.93,
              8648464.86,
              4478837.21,
              5315445.06,
              4500863.77,
              4632780.87
            ]
          },
          {
            "label": "Jobs",
            "data": [
              14,
              11,
              35,
              36,
              39,
              37,
              65,
              51,
              35
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
          "2026-05",
          "2026-06",
          "2026-07",
          "2026-08",
          "2026-09"
        ],
        "datasets": [
          {
            "label": "Median Days to Complete",
            "data": [
              71.1,
              49.7,
              60.3,
              45.9,
              41.4,
              54,
              49.4,
              64.6,
              64.6
            ]
          },
          {
            "label": "Avg Days to Start",
            "data": [
              51.7,
              89.5,
              72.8,
              65.1,
              74.2,
              58,
              62.8,
              58.3,
              66.9
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
              37
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              286
            ]
          }
        ]
      },
      {
        "id": "ch_combos",
        "labels": [
          "Gutters + Roofing",
          "Roofing + Siding",
          "Gutters + Roofing + Siding",
          "Siding + Windows",
          "Gutters + Roofing + Siding + Windows",
          "Gutters + Other + Roofing + Siding"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              30,
              3,
              1,
              1,
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
          "DC Metro",
          "Cleveland",
          "Cincinnati",
          "Nashville",
          "Dayton",
          "Indianapolis",
          "Richmond",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "MT %",
            "data": [
              22.6,
              10.9,
              3.5,
              50,
              1.5,
              19.4,
              0,
              0,
              0,
              0,
              20
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
          "DC Metro",
          "Cleveland",
          "Cincinnati",
          "Nashville",
          "Dayton",
          "Indianapolis",
          "Richmond",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "MT Median",
            "data": [
              71.4,
              95.4,
              63,
              68.4,
              73.6,
              70.4,
              0,
              0,
              0,
              0,
              68.4
            ]
          },
          {
            "label": "ST Median",
            "data": [
              58.4,
              59.5,
              55,
              40.6,
              31.7,
              68.4,
              42.5,
              82.5,
              47.4,
              88.1,
              24.9
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
          "DC Metro",
          "Cleveland",
          "Cincinnati",
          "Nashville",
          "Dayton",
          "Indianapolis",
          "Richmond",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              9173172.03,
              8382785.05,
              7320538.17,
              4264837.41,
              3810938.67,
              1838537.04,
              939088.08,
              356165,
              250593,
              186637.77,
              102114.19
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
          "DC Metro",
          "Cleveland",
          "Cincinnati",
          "Nashville",
          "Dayton",
          "Indianapolis",
          "Richmond",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              61.4,
              64.5,
              55,
              50.4,
              33.1,
              69.4,
              42.5,
              82.5,
              47.4,
              88.1,
              33.5
            ]
          }
        ]
      },
      {
        "id": "ch_pm_top",
        "labels": [
          "Brian Walker",
          "Ryan Wolf",
          "Bryan Paquin",
          "James Foky",
          "Erik Patla",
          "Wayne Iles",
          "(Unassigned)",
          "Rob Vanderlinden",
          "Daniel Wallace",
          "Jeremy Wolfe",
          "Shawn Marlow",
          "Justin Milliron"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              8433641.15,
              6924979.4,
              5151368.47,
              3804275.95,
              2242607.93,
              2226281.96,
              1209727.46,
              1039635.35,
              999770.44,
              975433.61,
              279733.22,
              62921.85
            ]
          }
        ]
      },
      {
        "id": "ch_pm_scatter",
        "labels": [
          "Brian Walker",
          "Ryan Wolf",
          "Bryan Paquin",
          "James Foky",
          "Erik Patla",
          "Wayne Iles",
          "(Unassigned)",
          "Rob Vanderlinden",
          "Daniel Wallace",
          "Jeremy Wolfe",
          "Shawn Marlow",
          "Justin Milliron"
        ],
        "datasets": [
          {
            "label": "PMs",
            "data": [
              {
                "x": 58.5,
                "y": 8433641.15,
                "wos": 244,
                "name": "Brian Walker"
              },
              {
                "x": 66.6,
                "y": 6924979.4,
                "wos": 154,
                "name": "Ryan Wolf"
              },
              {
                "x": 61.6,
                "y": 5151368.47,
                "wos": 147,
                "name": "Bryan Paquin"
              },
              {
                "x": 44.3,
                "y": 3804275.95,
                "wos": 123,
                "name": "James Foky"
              },
              {
                "x": 52.3,
                "y": 2242607.93,
                "wos": 43,
                "name": "Erik Patla"
              },
              {
                "x": 70.4,
                "y": 2226281.96,
                "wos": 95,
                "name": "Wayne Iles"
              },
              {
                "x": 38.5,
                "y": 1209727.46,
                "wos": 56,
                "name": "(Unassigned)"
              },
              {
                "x": 90.5,
                "y": 1039635.35,
                "wos": 9,
                "name": "Rob Vanderlinden"
              },
              {
                "x": 64.1,
                "y": 999770.44,
                "wos": 48,
                "name": "Daniel Wallace"
              },
              {
                "x": 55.9,
                "y": 975433.61,
                "wos": 28,
                "name": "Jeremy Wolfe"
              },
              {
                "x": 63.4,
                "y": 279733.22,
                "wos": 8,
                "name": "Shawn Marlow"
              },
              {
                "x": 143.4,
                "y": 62921.85,
                "wos": 6,
                "name": "Justin Milliron"
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
          "Window",
          "Windows",
          "Other"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              32195317.41,
              2674666.01,
              881647.5,
              527233.99,
              238989.73,
              107551.78
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
          "Window",
          "Windows",
          "Other"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              64.5,
              66.6,
              89.4,
              0,
              143.4,
              64.4
            ]
          }
        ]
      },
      {
        "id": "ch_cb_vol",
        "labels": [
          "Lisa Gibson",
          "RaShauna Watts",
          "Jamie Sanders - INACTIVE",
          "Evan Hall",
          "Micah Williamson",
          "Kristi Mitchell",
          "Lisa Stachura - INACTIVE"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              227,
              88,
              4,
              1,
              1,
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
          "Jamie Sanders - INACTIVE",
          "Evan Hall",
          "Micah Williamson",
          "Kristi Mitchell",
          "Lisa Stachura - INACTIVE"
        ],
        "datasets": [
          {
            "label": "Median Complete",
            "data": [
              59.5,
              48.4,
              351.4,
              147.5,
              49.4,
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
          "Jamie Sanders - INACTIVE",
          "Evan Hall",
          "Micah Williamson",
          "Kristi Mitchell",
          "Lisa Stachura - INACTIVE"
        ],
        "datasets": [
          {
            "label": "MT %",
            "data": [
              12.8,
              9.1,
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
        "id": "ch_cb_scatter",
        "labels": [
          "Lisa Gibson",
          "RaShauna Watts",
          "Jamie Sanders - INACTIVE",
          "Evan Hall",
          "Micah Williamson",
          "Kristi Mitchell",
          "Lisa Stachura - INACTIVE"
        ],
        "datasets": [
          {
            "label": "Creators",
            "data": [
              {
                "x": 59.5,
                "y": 132316.21,
                "jobs": 227,
                "name": "Lisa Gibson"
              },
              {
                "x": 48.4,
                "y": 66902.52,
                "jobs": 88,
                "name": "RaShauna Watts"
              },
              {
                "x": 351.4,
                "y": 165903.25,
                "jobs": 4,
                "name": "Jamie Sanders - INACTIVE"
              },
              {
                "x": 147.5,
                "y": 34512,
                "jobs": 1,
                "name": "Evan Hall"
              },
              {
                "x": 49.4,
                "y": 2250,
                "jobs": 1,
                "name": "Micah Williamson"
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
                "name": "Lisa Stachura - INACTIVE"
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
            53,
            9173172.03,
            173078.72,
            61.4,
            55.4,
            22.6,
            71.4,
            58.4
          ],
          [
            "Detroit Metro",
            64,
            8382785.05,
            130981.02,
            64.5,
            75.3,
            10.9,
            95.4,
            59.5
          ],
          [
            "Raleigh",
            57,
            7320538.17,
            128430.49,
            55,
            65.1,
            3.5,
            63,
            55
          ],
          [
            "DC Metro",
            14,
            4264837.41,
            304631.24,
            50.4,
            55.8,
            50,
            68.4,
            40.6
          ],
          [
            "Cleveland",
            68,
            3810938.67,
            56043.22,
            33.1,
            59,
            1.5,
            73.6,
            31.7
          ],
          [
            "Cincinnati",
            36,
            1838537.04,
            51070.47,
            69.4,
            75.3,
            19.4,
            70.4,
            68.4
          ],
          [
            "Nashville",
            13,
            939088.08,
            72237.54,
            42.5,
            37.3,
            0,
            0,
            42.5
          ],
          [
            "Dayton",
            5,
            356165,
            71233,
            82.5,
            72,
            0,
            0,
            82.5
          ],
          [
            "Indianapolis",
            3,
            250593,
            83531,
            47.4,
            77,
            0,
            0,
            47.4
          ],
          [
            "Richmond",
            5,
            186637.77,
            37327.55,
            88.1,
            83.6,
            0,
            0,
            88.1
          ],
          [
            "Knoxville",
            5,
            102114.19,
            20422.84,
            33.5,
            37.2,
            20,
            68.4,
            24.9
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
            244,
            45,
            8433641.15,
            34564.1,
            58.5,
            52.7
          ],
          [
            "Ryan Wolf",
            154,
            49,
            6924979.4,
            44967.4,
            66.6,
            75.1
          ],
          [
            "Bryan Paquin",
            147,
            44,
            5151368.47,
            35043.32,
            61.6,
            65.4
          ],
          [
            "James Foky",
            123,
            57,
            3804275.95,
            30929.07,
            44.3,
            60.8
          ],
          [
            "Erik Patla",
            43,
            13,
            2242607.93,
            52153.67,
            52.3,
            59
          ],
          [
            "Wayne Iles",
            95,
            40,
            2226281.96,
            23434.55,
            70.4,
            75.8
          ],
          [
            "(Unassigned)",
            56,
            46,
            1209727.46,
            21602.28,
            38.5,
            46.5
          ],
          [
            "Rob Vanderlinden",
            9,
            7,
            1039635.35,
            115515.04,
            90.5,
            86
          ],
          [
            "Daniel Wallace",
            48,
            2,
            999770.44,
            20828.55,
            64.1,
            40.9
          ],
          [
            "Jeremy Wolfe",
            28,
            12,
            975433.61,
            34836.91,
            55.9,
            65.9
          ],
          [
            "Shawn Marlow",
            8,
            7,
            279733.22,
            34966.65,
            63.4,
            56.1
          ],
          [
            "Justin Milliron",
            6,
            3,
            62921.85,
            10486.98,
            143.4,
            93.4
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
            896,
            32195317.41,
            35932.27,
            64.5
          ],
          [
            "Gutters",
            63,
            2674666.01,
            42455.02,
            66.6
          ],
          [
            "Siding",
            16,
            881647.5,
            55102.97,
            89.4
          ],
          [
            "Window",
            1,
            527233.99,
            527233.99,
            0
          ],
          [
            "Windows",
            5,
            238989.73,
            47797.95,
            143.4
          ],
          [
            "Other",
            5,
            107551.78,
            21510.36,
            64.4
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
            227,
            30035778.64,
            132316.21,
            "59.5d",
            "65.8d",
            12.8,
            132316.21
          ],
          [
            "RaShauna Watts",
            88,
            5887421.78,
            66902.52,
            "48.4d",
            "58.6d",
            9.1,
            66902.52
          ],
          [
            "Jamie Sanders - INACTIVE",
            4,
            663612.99,
            165903.25,
            "351.4d",
            "140.9d",
            0,
            165903.25
          ],
          [
            "Evan Hall",
            1,
            34512,
            34512,
            "147.5d",
            "142.4d",
            0,
            34512
          ],
          [
            "Micah Williamson",
            1,
            2250,
            2250,
            "49.4d",
            "0d",
            0,
            2250
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
            "Lisa Stachura - INACTIVE",
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
            "Evan Hall",
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
            "Jamie Sanders - INACTIVE",
            1,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            4
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
            30,
            55,
            33,
            8,
            4,
            50,
            1,
            1,
            8,
            33,
            4,
            227
          ],
          [
            "Lisa Stachura - INACTIVE",
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
            "Micah Williamson",
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            1
          ],
          [
            "RaShauna Watts",
            5,
            13,
            18,
            6,
            1,
            13,
            2,
            4,
            5,
            20,
            1,
            88
          ],
          [
            "Total",
            36,
            68,
            53,
            14,
            5,
            64,
            3,
            5,
            13,
            57,
            5,
            323
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Multi-trade penalty is severe in 2 markets: Cleveland MT 73.6d vs ST 31.7d, Detroit Metro MT 95.4d vs ST 59.5d.",
        "Days to Start averages 64.6 days company-wide and 75.3 days in Cincinnati (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [
        "Lisa Gibson creates 227 jobs at $132,316 average contract and 12.8% multi-trade attach, well below the top creator."
      ],
      "positivesToBuildOn": [
        "May delivered $8.65M across 39 invoiced jobs at 41.4-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "Cleveland hits 33.1-day median complete and a $56,043 average contract on 68 jobs.",
        "Multi-trade jobs carry a $265,255 average contract versus $93,745 for single-trade, a 183% revenue lift per job."
      ]
    }
  }
};
