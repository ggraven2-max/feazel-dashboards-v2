/* AUTO-GENERATED — do not edit. Generated 2026-10-21T12:51:08.583Z (multi-family) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-10-21T12:51:08.583Z",
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
        "elapsedMs": 50,
        "builtAt": "2026-10-21T12:51:08.583Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 125,
        "builtAt": "2026-10-21T12:51:08.583Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 9,
        "builtAt": "2026-10-21T12:51:08.583Z"
      },
      {
        "id": "installs-ytd",
        "version": "1.0-rules-encoded",
        "elapsedMs": 37,
        "builtAt": "2026-10-21T12:51:08.583Z"
      }
    ]
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-10-18",
    "ytdDays": 293,
    "rowCount": 559,
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
        "value": "$45.42M",
        "sub": "559 signed contracts across 11 markets"
      },
      {
        "label": "Sold",
        "value": "$45.42M",
        "sub": "554 deals | 99.1% of signed contracts"
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
        "value": "$81,258",
        "sub": "Median: $17,900 | Install avg: $108,678"
      },
      {
        "label": "Organization",
        "value": "25 Reps",
        "sub": "11 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$56.59M",
        "sub": "Based on 293 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "73.9% / 25.9%",
        "sub": "413 installs | 145 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 554,
        "amount": 45419097.99
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
        "count": 52,
        "amount": 3167788.79,
        "installs": 33,
        "repairs": 18,
        "avgDeal": 60919,
        "repairPct": 34.6,
        "installAvg": 93930,
        "repairAvg": 3756
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
        "count": 51,
        "amount": 3501507,
        "installs": 35,
        "repairs": 16,
        "avgDeal": 68657,
        "repairPct": 31.4,
        "installAvg": 98733,
        "repairAvg": 2867
      },
      {
        "key": "2026-04",
        "label": "April",
        "count": 76,
        "amount": 7769244.34,
        "installs": 53,
        "repairs": 23,
        "avgDeal": 102227,
        "repairPct": 30.3,
        "installAvg": 145268,
        "repairAvg": 3045
      },
      {
        "key": "2026-05",
        "label": "May",
        "count": 55,
        "amount": 4188742.35,
        "installs": 38,
        "repairs": 17,
        "avgDeal": 76159,
        "repairPct": 30.9,
        "installAvg": 109374,
        "repairAvg": 1915
      },
      {
        "key": "2026-06",
        "label": "June",
        "count": 98,
        "amount": 3884006.74,
        "installs": 77,
        "repairs": 21,
        "avgDeal": 39633,
        "repairPct": 21.4,
        "installAvg": 49103,
        "repairAvg": 4910
      },
      {
        "key": "2026-07",
        "label": "July",
        "count": 55,
        "amount": 7304258.46,
        "installs": 44,
        "repairs": 11,
        "avgDeal": 132805,
        "repairPct": 20,
        "installAvg": 165490,
        "repairAvg": 2062
      },
      {
        "key": "2026-08",
        "label": "August",
        "count": 56,
        "amount": 8353469.6,
        "installs": 44,
        "repairs": 12,
        "avgDeal": 149169,
        "repairPct": 21.4,
        "installAvg": 187582,
        "repairAvg": 8321
      },
      {
        "key": "2026-09",
        "label": "September",
        "count": 56,
        "amount": 3710464.05,
        "installs": 45,
        "repairs": 11,
        "avgDeal": 66258,
        "repairPct": 19.6,
        "installAvg": 81076,
        "repairAvg": 5640
      },
      {
        "key": "2026-10",
        "label": "October",
        "count": 23,
        "amount": 1091582,
        "installs": 14,
        "repairs": 9,
        "avgDeal": 47460,
        "repairPct": 39.1,
        "installAvg": 76179,
        "repairAvg": 2786
      }
    ],
    "jobTypeMixByMonth": {
      "Retail-No Financing": {
        "2026-01": 1928792.5,
        "2026-02": 2401613,
        "2026-03": 3501007,
        "2026-04": 6259399.34,
        "2026-05": 3493995,
        "2026-06": 3497257.5,
        "2026-07": 3471156,
        "2026-08": 4504953.5,
        "2026-09": 2049078.14,
        "2026-10": 1091582
      },
      "Insurance": {
        "2026-01": 1206796.29,
        "2026-02": 50701.66,
        "2026-03": 500,
        "2026-04": 1509845,
        "2026-05": 694747.35,
        "2026-06": 386749.24,
        "2026-07": 3833102.46,
        "2026-08": 3842328.1,
        "2026-09": 1661385.91,
        "2026-10": 0
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
        "2026-09": 0,
        "2026-10": 0
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Retail-No Financing",
        "count": 530,
        "amount": 32198833.98,
        "avg": 60753
      },
      {
        "jobType": "Insurance",
        "count": 27,
        "amount": 13186156.01,
        "avg": 488376
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
        "count": 17,
        "amount": 3033599.46
      },
      {
        "w": 35,
        "count": 7,
        "amount": 1601185
      },
      {
        "w": 36,
        "count": 12,
        "amount": 1447810.65
      },
      {
        "w": 37,
        "count": 16,
        "amount": 1167727.26
      },
      {
        "w": 38,
        "count": 15,
        "amount": 615439
      },
      {
        "w": 39,
        "count": 12,
        "amount": 493323.14
      },
      {
        "w": 40,
        "count": 5,
        "amount": 45694
      },
      {
        "w": 41,
        "count": 9,
        "amount": 398436
      },
      {
        "w": 42,
        "count": 9,
        "amount": 363522
      },
      {
        "w": 43,
        "count": 4,
        "amount": 323369
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
          15057978.63,
          89,
          169191,
          75,
          14,
          15.7,
          55
        ],
        [
          "Detroit Metro",
          9785849.5,
          126,
          77665,
          68,
          58,
          46,
          17
        ],
        [
          "Raleigh",
          7621396,
          67,
          113752,
          62,
          4,
          6,
          102
        ],
        [
          "Cleveland",
          6281794.64,
          105,
          59827,
          98,
          7,
          6.7,
          39
        ],
        [
          "Cincinnati",
          2832615.22,
          52,
          54473,
          35,
          17,
          32.7,
          23
        ],
        [
          "DC Metro",
          1464684,
          49,
          29892,
          21,
          28,
          57.1,
          14
        ],
        [
          "Richmond",
          625918.5,
          21,
          29806,
          13,
          8,
          38.1,
          19
        ],
        [
          "Nashville",
          589042,
          16,
          36815,
          14,
          2,
          12.5,
          30
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
        "Richmond",
        "Nashville",
        "Dayton",
        "Indianapolis",
        "Knoxville"
      ]
    },
    "topPeople": [
      {
        "name": "Christy Osborne",
        "amount": 8011547.54,
        "count": 21,
        "avg": 381502,
        "medDays": 145,
        "jt": {
          "Retail-No Financing": 12,
          "Insurance": 9
        },
        "installs": 17,
        "repairs": 4
      },
      {
        "name": "Micah Williamson",
        "amount": 6967564,
        "count": 94,
        "avg": 74123,
        "medDays": 10,
        "jt": {
          "Retail-No Financing": 94
        },
        "installs": 40,
        "repairs": 54
      },
      {
        "name": "Nicholas Andrukat",
        "amount": 6235444.64,
        "count": 97,
        "avg": 64283,
        "medDays": 41,
        "jt": {
          "Retail-No Financing": 90,
          "Insurance": 6,
          "LowMar": 1
        },
        "installs": 90,
        "repairs": 7
      },
      {
        "name": "Evan Hall",
        "amount": 5223679,
        "count": 52,
        "avg": 100455,
        "medDays": 99,
        "jt": {
          "Retail-No Financing": 52
        },
        "installs": 49,
        "repairs": 2
      },
      {
        "name": "Mark Leedy",
        "amount": 3690525.22,
        "count": 67,
        "avg": 55082,
        "medDays": 25,
        "jt": {
          "Retail-No Financing": 64,
          "Retail-Financing": 1,
          "Insurance": 2
        },
        "installs": 51,
        "repairs": 16
      },
      {
        "name": "Ron Saxe",
        "amount": 3376038,
        "count": 37,
        "avg": 91244,
        "medDays": 63,
        "jt": {
          "Retail-No Financing": 35,
          "Insurance": 2
        },
        "installs": 34,
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
        "amount": 2630839,
        "count": 26,
        "avg": 101186,
        "medDays": 92,
        "jt": {
          "Retail-No Financing": 26
        },
        "installs": 23,
        "repairs": 3
      },
      {
        "name": "Marko Jovanovic",
        "amount": 1464684,
        "count": 49,
        "avg": 29892,
        "medDays": 14,
        "jt": {
          "Retail-No Financing": 48,
          "Insurance": 1
        },
        "installs": 21,
        "repairs": 28
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
        "name": "Nick Warmath",
        "amount": 881622,
        "count": 2,
        "avg": 440811,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 2
        },
        "installs": 2,
        "repairs": 0
      },
      {
        "name": "Aaron Ellis",
        "amount": 859661.5,
        "count": 26,
        "avg": 33064,
        "medDays": 42,
        "jt": {
          "Retail-No Financing": 23,
          "Insurance": 3
        },
        "installs": 22,
        "repairs": 4
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
        "amount": 625918.5,
        "count": 21,
        "avg": 29806,
        "medDays": 19,
        "jt": {
          "Retail-No Financing": 21
        },
        "installs": 13,
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
        "amount": 213649.35,
        "count": 7,
        "avg": 30521,
        "medDays": 34,
        "jt": {
          "Retail-No Financing": 6,
          "Insurance": 1
        },
        "installs": 7,
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
        "name": "Trent Wakefield",
        "amount": 37823,
        "count": 4,
        "avg": 9456,
        "medDays": 73,
        "jt": {
          "Retail-No Financing": 4
        },
        "installs": 3,
        "repairs": 1
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
        "name": "Lisa Gibson",
        "amount": 23511.03,
        "count": 12,
        "avg": 1959,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 12
        },
        "installs": 10,
        "repairs": 2
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
        "name": "Micah Williamson",
        "repairs": 54,
        "deals": 94,
        "pct": 57.4
      },
      {
        "name": "Marko Jovanovic",
        "repairs": 28,
        "deals": 49,
        "pct": 57.1
      },
      {
        "name": "Jason Crooke",
        "repairs": 8,
        "deals": 21,
        "pct": 38.1
      }
    ],
    "salesCycle": {
      "kpis": [
        {
          "label": "Overall Median",
          "value": "34 days",
          "sub": "Mean: 98 days (skewed by insurance)"
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
          "mean": 87,
          "count": 399
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
          "mean": 19,
          "count": 116
        },
        {
          "label": "Install",
          "median": 55,
          "mean": 129,
          "count": 304
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
          "count": 45
        },
        {
          "market": "Detroit Metro",
          "median": 17,
          "mean": 56,
          "count": 104
        },
        {
          "market": "Richmond",
          "median": 19,
          "mean": 42,
          "count": 18
        },
        {
          "market": "Cincinnati",
          "median": 23,
          "mean": 59,
          "count": 30
        },
        {
          "market": "Nashville",
          "median": 30,
          "mean": 57,
          "count": 14
        },
        {
          "market": "Indianapolis",
          "median": 31,
          "mean": 57,
          "count": 6
        },
        {
          "market": "Cleveland",
          "median": 39,
          "mean": 66,
          "count": 62
        },
        {
          "market": "Knoxville",
          "median": 42,
          "mean": 67,
          "count": 11
        },
        {
          "market": "Columbus",
          "median": 55,
          "mean": 270,
          "count": 56
        },
        {
          "market": "Raleigh",
          "median": 102,
          "mean": 139,
          "count": 62
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
      "avgWeeklyNeed": 3690943.36,
      "weeksRemaining": 14,
      "annualPlan": 51673207,
      "byJobType": [],
      "byTrade": [],
      "byMarket": [
        {
          "market": "Columbus",
          "total": 1223558.19,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 2.1
        },
        {
          "market": "Detroit Metro",
          "total": 795163.59,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 3
        },
        {
          "market": "Raleigh",
          "total": 619287.74,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.6
        },
        {
          "market": "Cleveland",
          "total": 510436.46,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 2.5
        },
        {
          "market": "Cincinnati",
          "total": 230168.31,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.2
        },
        {
          "market": "DC Metro",
          "total": 119015.05,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.2
        },
        {
          "market": "Richmond",
          "total": 50859.93,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.5
        },
        {
          "market": "Nashville",
          "total": 47863.47,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.4
        },
        {
          "market": "Dayton",
          "total": 45235.15,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.4
        },
        {
          "market": "Indianapolis",
          "total": 27272.43,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.2
        },
        {
          "market": "Knoxville",
          "total": 22083.03,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.3
        }
      ],
      "weekSchedule": [
        {
          "wk": "10/26/2026",
          "mo": "Oct",
          "target": 3690943.36
        },
        {
          "wk": "11/02/2026",
          "mo": "Nov",
          "target": 3690943.36
        },
        {
          "wk": "11/09/2026",
          "mo": "Nov",
          "target": 3690943.36
        },
        {
          "wk": "11/16/2026",
          "mo": "Nov",
          "target": 3690943.36
        },
        {
          "wk": "11/23/2026",
          "mo": "Nov",
          "target": 3690943.36
        },
        {
          "wk": "11/30/2026",
          "mo": "Nov",
          "target": 3690943.36
        },
        {
          "wk": "12/07/2026",
          "mo": "Dec",
          "target": 3690943.36
        },
        {
          "wk": "12/14/2026",
          "mo": "Dec",
          "target": 3690943.36
        },
        {
          "wk": "12/21/2026",
          "mo": "Dec",
          "target": 3690943.36
        },
        {
          "wk": "12/28/2026",
          "mo": "Dec",
          "target": 3690943.36
        }
      ],
      "recent4WkAvg": 282755.25
    },
    "budgetRecovery": {
      "fullYearBudget": 51673207,
      "sourceFile": "2026 Commercial Budget.xlsx",
      "totalToRecover": 0,
      "upliftPct": -33,
      "q1Budget": 4533497.2,
      "q1Actual": 5414371.34,
      "q1Shortfall": 880874.14,
      "aprilGap": 1583469.55,
      "aprilBudget": 3233126.48,
      "aprilFcst": 4816596.03,
      "adjWeeklySalesAvg": 886715.7,
      "origWeeklySalesAvg": 1322512.73,
      "salesDeltaPerWeek": -435797.03,
      "weeksRemaining": 14,
      "adjWeeklyProdAvg": 886715.7,
      "origWeeklyProdAvg": 1322512.73,
      "prodDeltaPerWeek": -435797.03,
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
          "deals": 51
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
          "status": "Actual",
          "liveActual": 5965958.91,
          "deals": 55
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
          "deals": 98
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
          "deals": 55
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
          "deals": 56
        },
        {
          "mo": "Sep 2026",
          "monthIdx": 8,
          "origBudget": 4474155.35,
          "fcst": 4474155.35,
          "recovTarget": 5942432.26,
          "catchUp": 0,
          "status": "Actual",
          "liveActual": 5942432.26,
          "deals": 56
        },
        {
          "mo": "Oct 2026",
          "monthIdx": 9,
          "origBudget": 7363288.71,
          "fcst": 7363288.71,
          "recovTarget": 7363288.71,
          "catchUp": 0,
          "status": "Active",
          "liveActual": 4681560.9,
          "deals": 23
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
          "recovTarget": 2006671.85,
          "original": 2151139.8,
          "delta": -144467.95
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 1304091.95,
          "original": 1397978.5,
          "delta": -93886.55
        },
        {
          "market": "Raleigh",
          "recovTarget": 1015650.32,
          "original": 1088770.86,
          "delta": -73120.54
        },
        {
          "market": "Cleveland",
          "recovTarget": 837130.99,
          "original": 897399.23,
          "delta": -60268.25
        },
        {
          "market": "Cincinnati",
          "recovTarget": 377482.89,
          "original": 404659.32,
          "delta": -27176.43
        },
        {
          "market": "DC Metro",
          "recovTarget": 195188.23,
          "original": 209240.57,
          "delta": -14052.34
        },
        {
          "market": "Richmond",
          "recovTarget": 83411.8,
          "original": 89416.93,
          "delta": -6005.13
        },
        {
          "market": "Nashville",
          "recovTarget": 78497.52,
          "original": 84148.86,
          "delta": -5651.34
        },
        {
          "market": "Dayton",
          "recovTarget": 74187,
          "original": 79528,
          "delta": -5341
        },
        {
          "market": "Indianapolis",
          "recovTarget": 44727.6,
          "original": 47947.71,
          "delta": -3220.11
        },
        {
          "market": "Knoxville",
          "recovTarget": 36216.83,
          "original": 38824.21,
          "delta": -2607.39
        }
      ],
      "adjProdByMarket": [
        {
          "market": "Columbus",
          "recovTarget": 2006671.85,
          "original": 2151139.8,
          "delta": -144467.95
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 1304091.95,
          "original": 1397978.5,
          "delta": -93886.55
        },
        {
          "market": "Raleigh",
          "recovTarget": 1015650.32,
          "original": 1088770.86,
          "delta": -73120.54
        },
        {
          "market": "Cleveland",
          "recovTarget": 837130.99,
          "original": 897399.23,
          "delta": -60268.25
        },
        {
          "market": "Cincinnati",
          "recovTarget": 377482.89,
          "original": 404659.32,
          "delta": -27176.43
        },
        {
          "market": "DC Metro",
          "recovTarget": 195188.23,
          "original": 209240.57,
          "delta": -14052.34
        },
        {
          "market": "Richmond",
          "recovTarget": 83411.8,
          "original": 89416.93,
          "delta": -6005.13
        },
        {
          "market": "Nashville",
          "recovTarget": 78497.52,
          "original": 84148.86,
          "delta": -5651.34
        },
        {
          "market": "Dayton",
          "recovTarget": 74187,
          "original": 79528,
          "delta": -5341
        },
        {
          "market": "Indianapolis",
          "recovTarget": 44727.6,
          "original": 47947.71,
          "delta": -3220.11
        },
        {
          "market": "Knoxville",
          "recovTarget": 36216.83,
          "original": 38824.21,
          "delta": -2607.39
        }
      ],
      "actualSource": "NetSuite AR · invoiced revenue",
      "netsuiteTotal": 43940748.13,
      "netsuiteInvoiceCount": 370,
      "netsuiteLatestDate": "2026-10-20"
    },
    "pathToPlan": null,
    "commentary": {
      "whatsWorking": [
        "Sales Trajectory: Monthly sales moved from January $3.17M to October $1.09M (-66%). Annualized run rate: $56.59M.",
        "Premium Deal Types: Insurance averages $488,376 per deal. Retail-Financing averages $32,200 (highest per-deal value). Retail-No Financing averages $60,753 (the volume engine).",
        "Sold Conversion: 554 of 559 signed contracts (99.1%) have made it to Sold status for $45.42M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Production Review Queue: 2 deals worth $0 sitting in Production Review. Watch for backlog growth, it delays revenue recognition.",
        "Repair Rate Elevated: 25.9% of all deals are repairs (145 of 559). Repairs average ~$3,716, low value relative to installs at $108,678."
      ],
      "criticalRisks": [
        "Pipeline kickbacks company-wide: 0 kickbacks totaling $0.",
        "Production Review backlog: 2 deals ($0)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 34d median close on 399 retail deals.",
        "Insurance Density: $488,376 avg on 27 deals = $13.19M; +20% lift = ~$2.64M.",
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
          "Repair Business Decision, 145 repairs YTD at ~$3,716 avg.",
          "Ops Capacity Planning, October hit 23 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "_source": "calculator/revenue-forecast-mf.js MF-v1.1-2026-05-04",
    "title": "Multi-Family Revenue Forecast",
    "subtitle": "MF-v1 · Job-by-job event model · Data through 2026-10-21",
    "runDate": "2026-10-21",
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
        "value": "$43.94M",
        "sub": "10 months elapsed"
      },
      {
        "label": "YTD vs Plan",
        "value": "+$4.94M",
        "sub": "Plan YTD: $39M",
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
        "value": "$54.67M",
        "sub": "YTD actual + remaining-month plan"
      },
      {
        "label": "Annual Budget",
        "value": "$51.67M",
        "sub": "2026 MF target"
      },
      {
        "label": "Forecast vs Budget",
        "value": "+$3M",
        "sub": "ahead of plan",
        "trend": "positive"
      },
      {
        "label": "Current WIP",
        "value": "$7.79M",
        "sub": "18 jobs in flight today"
      },
      {
        "label": "Last Month Revenue",
        "value": "$5.94M",
        "sub": "September 2026"
      }
    ],
    "execSummary": {
      "budget": 51673207,
      "modelAnnualInvoiced": 52728897.756,
      "gap": 2999764.820263706,
      "narrative": "10 months of FY2026 MF activity reported, $43.94M invoiced YTD. Run-rate annualizes to $52.73M against the $51.67M plan, a surplus."
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
        "wipChange": 3834748.2600000016,
        "netRevenue": 3966078.4399999995,
        "startingCount": 29,
        "completingCount": 33,
        "plan": 2964722.142117475,
        "gap": 1001356.2978825243
      },
      "apr": {
        "invoiced": 4816596.029999999,
        "wipChange": 812888.79,
        "netRevenue": 4816596.029999999,
        "startingCount": 31,
        "completingCount": 37,
        "plan": 3111458.078051097,
        "gap": 1705137.951948902
      },
      "may": {
        "invoiced": 5965958.91,
        "wipChange": -765924.8200000012,
        "netRevenue": 5965958.91,
        "startingCount": 23,
        "completingCount": 39,
        "plan": 6369333.738681715,
        "gap": -403374.82868171483
      },
      "jun": {
        "invoiced": 5981269.680000001,
        "wipChange": -1509892.6100000003,
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
        "invoiced": 5942432.259999998,
        "wipChange": 423582.0500000017,
        "netRevenue": 5942432.259999998,
        "startingCount": 39,
        "completingCount": 41,
        "plan": 4305784.787290315,
        "gap": 1636647.4727096828
      },
      "oct": {
        "invoiced": 4681560.9,
        "wipChange": 2355622.6099999994,
        "netRevenue": 4681560.9,
        "startingCount": 21,
        "completingCount": 24,
        "plan": 7086194.828295313,
        "gap": -2404633.9282953124
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
      "combinedGP": 25417534.95,
      "combinedGP_pct": 33.71503394015807,
      "combinedRevenue": 75389320.36999999,
      "y2025_GP_pct": 33.17695966570233,
      "y2025_revenue": 45086676.720000036,
      "y2025_jobs": 298,
      "y2026_GP_pct": 34.51562352382414,
      "y2026_revenue": 30302643.649999995,
      "y2026_jobs": 240,
      "materialCost": 26185594.800000012,
      "laborCost": 23162324.6,
      "otherCost": 617993.2799999997,
      "commissions": 221632.6399999997,
      "materialPctContract": 34.733825257324064,
      "laborPctContract": 30.723615077470694,
      "otherPctContract": 0.8197358418499824,
      "commissionPctContract": 0.29398413317994965,
      "sourceFile": "GregProfitabilityMFResults29.csv",
      "jobsParsed": 538
    },
    "profitabilityByJobType": [
      {
        "key": "Retail",
        "jobs": 232,
        "revenue": 22825087.46,
        "expenses": 15939455.959999986,
        "gross_profit": 6885631.4999999935,
        "material": 8535414.649999997,
        "labor": 7276392.279999998,
        "other": 141038.69999999998,
        "commission": 18738.14,
        "contract": 22706127.37,
        "gp_pct": 30.16694464836891
      },
      {
        "key": "Insurance",
        "jobs": 8,
        "revenue": 7477556.1899999995,
        "expenses": 3904041.29,
        "gross_profit": 3573514.9,
        "material": 2084310.37,
        "labor": 1761486.55,
        "other": 38689.420000000006,
        "commission": 0,
        "contract": 7488643.31,
        "gp_pct": 47.78987692234246
      }
    ],
    "profitabilityByMarket": [
      {
        "key": "Columbus",
        "jobs": 47,
        "revenue": 10016108.28,
        "expenses": 5934652.869999999,
        "gross_profit": 4081455.41,
        "material": 3158403.120000001,
        "labor": 2680761.44,
        "other": 87295.31000000001,
        "commission": 0,
        "contract": 9949567.5,
        "gp_pct": 40.748914607380826
      },
      {
        "key": "Detroit Metro",
        "jobs": 41,
        "revenue": 6610161.420000001,
        "expenses": 4661267.33,
        "gross_profit": 1948894.0900000003,
        "material": 2339220.68,
        "labor": 2272041.8799999994,
        "other": 47948.19,
        "commission": 558.73,
        "contract": 6576004.23,
        "gp_pct": 29.48330556805071
      },
      {
        "key": "Raleigh",
        "jobs": 37,
        "revenue": 5992941.29,
        "expenses": 4139351.3099999996,
        "gross_profit": 1853589.9800000002,
        "material": 2416100.5200000005,
        "labor": 1716955.0599999996,
        "other": 905,
        "commission": 6643.9,
        "contract": 5992998.59,
        "gp_pct": 30.929553458048314
      },
      {
        "key": "Cleveland",
        "jobs": 59,
        "revenue": 3516138.3000000007,
        "expenses": 2269813.56,
        "gross_profit": 1246324.7400000005,
        "material": 1258011.17,
        "labor": 982379.47,
        "other": 26996.480000000003,
        "commission": 0,
        "contract": 3514360.7000000007,
        "gp_pct": 35.44583954504862
      },
      {
        "key": "Cincinnati",
        "jobs": 19,
        "revenue": 1379321.4400000002,
        "expenses": 947340.22,
        "gross_profit": 431981.2199999999,
        "material": 546092.1100000001,
        "labor": 415694.95999999996,
        "other": 300,
        "commission": 5647.89,
        "contract": 1379321.4400000002,
        "gp_pct": 31.318386524898784
      },
      {
        "key": "Nashville",
        "jobs": 8,
        "revenue": 1043578.23,
        "expenses": 680127.9699999999,
        "gross_profit": 363450.26000000007,
        "material": 281546.98999999993,
        "labor": 386811.26,
        "other": 11375.900000000001,
        "commission": 4481.38,
        "contract": 1039458.53,
        "gp_pct": 34.82731332944729
      },
      {
        "key": "DC Metro",
        "jobs": 9,
        "revenue": 743416.71,
        "expenses": 475529.42000000004,
        "gross_profit": 267887.29000000004,
        "material": 224766.05,
        "labor": 248337.51,
        "other": 0,
        "commission": 0,
        "contract": 742081.71,
        "gp_pct": 36.03460702410093
      },
      {
        "key": "Dayton",
        "jobs": 7,
        "revenue": 451019,
        "expenses": 342552.52,
        "gross_profit": 108466.48000000001,
        "material": 172501.94,
        "labor": 169522.55,
        "other": 0,
        "commission": 0,
        "contract": 451019,
        "gp_pct": 24.049204135524228
      },
      {
        "key": "Richmond",
        "jobs": 8,
        "revenue": 320205.24,
        "expenses": 234477,
        "gross_profit": 85728.24,
        "material": 137801.3,
        "labor": 96958.26,
        "other": 4907.24,
        "commission": 0,
        "contract": 320205.24,
        "gp_pct": 26.77290352899909
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
        "jobs": 280,
        "revenue": 37758563.920000024,
        "expenses": 26056757.939999994,
        "gross_profit": 11701805.980000015,
        "material": 13469940.43,
        "labor": 12256938.38,
        "other": 360001.6699999999,
        "commission": 160880.01999999973,
        "contract": 37743520.620000035,
        "gp_pct": 30.991130925405198
      },
      {
        "key": "Insurance",
        "jobs": 17,
        "revenue": 7269603.6,
        "expenses": 4027520.9700000007,
        "gross_profit": 3242082.63,
        "material": 2070599.69,
        "labor": 1847937.39,
        "other": 78263.48999999999,
        "commission": 42014.48,
        "contract": 7351437.66,
        "gp_pct": 44.597791136782206
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
        "jobs": 69,
        "revenue": 11151126.689999996,
        "expenses": 7965539.880000001,
        "gross_profit": 3185586.809999998,
        "material": 4087442.670000002,
        "labor": 3730516.05,
        "other": 153129.87,
        "commission": 22258.990000000005,
        "contract": 11138210.929999996,
        "gp_pct": 28.567398600687937
      },
      {
        "key": "Raleigh",
        "jobs": 66,
        "revenue": 10165737.09,
        "expenses": 7121131.529999998,
        "gross_profit": 3044605.5599999996,
        "material": 3853214.039999999,
        "labor": 3197797.1700000004,
        "other": 64141.77,
        "commission": 41706.77999999999,
        "contract": 10172861.28,
        "gp_pct": 29.94967834644246
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
        "key": "DC Metro",
        "jobs": 18,
        "revenue": 6017480.0600000005,
        "expenses": 3922197.340000001,
        "gross_profit": 2095282.7199999997,
        "material": 1856315.56,
        "labor": 2094777.02,
        "other": 6695.08,
        "commission": 44269.780000000006,
        "contract": 6022859.82,
        "gp_pct": 34.81993623756187
      },
      {
        "key": "Cleveland",
        "jobs": 38,
        "revenue": 5050472.38,
        "expenses": 2887322.0299999993,
        "gross_profit": 2163150.35,
        "material": 1467589.7400000005,
        "labor": 1370063.21,
        "other": 49664.83999999999,
        "commission": 37278.56,
        "contract": 5193655.62,
        "gp_pct": 42.83065399122131
      },
      {
        "key": "Cincinnati",
        "jobs": 42,
        "revenue": 2317133.9999999995,
        "expenses": 1515877.3300000005,
        "gross_profit": 801256.67,
        "material": 779941.3099999997,
        "labor": 727745.8500000001,
        "other": 7736.63,
        "commission": 22101.290000000005,
        "contract": 2305259.3299999996,
        "gp_pct": 34.57964321441921
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
        "key": "Indianapolis",
        "jobs": 4,
        "revenue": 189095.4,
        "expenses": 154785.22,
        "gross_profit": 34310.180000000015,
        "material": 88262.48999999999,
        "labor": 62174.020000000004,
        "other": 4550.43,
        "commission": 0,
        "contract": 189095.4,
        "gp_pct": 18.144375801843946
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
          "jobs": 18,
          "value": 7789051.720000001
        }
      ],
      "totalJobs": 18,
      "totalValue": 7789051.720000001
    },
    "commentary": {
      "actionableRecommendations": [
        "Tracking ahead of plan by $3M."
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
            "$5.2M",
            "$4.95M",
            39,
            23
          ],
          [
            "June",
            "$5.98M",
            "$3.53M",
            "$2.45M",
            "$4.47M",
            "$5.67M",
            36,
            40
          ],
          [
            "July",
            "$5.11M",
            "$5.1M",
            "$13K",
            "$4.77M",
            "$5.23M",
            65,
            37
          ],
          [
            "August",
            "$6.03M",
            "$5.13M",
            "$892K",
            "$4.49M",
            "$5.27M",
            51,
            50
          ],
          [
            "September",
            "$5.94M",
            "$4.31M",
            "$1.64M",
            "$6.37M",
            "$6.48M",
            41,
            39
          ],
          [
            "October",
            "$4.68M",
            "$7.09M",
            "$-2.4M",
            "$7.04M",
            "$8.09M",
            24,
            21
          ],
          [
            "November",
            "$0",
            "$5.65M",
            "$-5.65M",
            "$0",
            "$8.09M",
            0,
            0
          ],
          [
            "December",
            "$0",
            "$5.08M",
            "$-5.08M",
            "$0",
            "$8.09M",
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
            "$5.94M",
            "—",
            "—"
          ],
          [
            "October",
            "—",
            "$4.68M",
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
            "$12.23M",
            "$2.7M",
            67
          ],
          [
            "Detroit",
            "$10.42M",
            "$0",
            70
          ],
          [
            "Raleigh",
            "$8.31M",
            "$184K",
            69
          ],
          [
            "DC Metro",
            "$4.46M",
            "$161K",
            20
          ],
          [
            "Cincinnati",
            "$2.03M",
            "$2.54M",
            44
          ],
          [
            "Cleveland",
            "$4.02M",
            "$521K",
            75
          ],
          [
            "Detroit Metro",
            "$0",
            "$1.56M",
            2
          ],
          [
            "Nashville",
            "$1.35M",
            "$0",
            15
          ],
          [
            "Dayton",
            "$451K",
            "$23K",
            8
          ],
          [
            "Richmond",
            "$320K",
            "$0",
            8
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
            "$102K",
            7
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
            "$34.12M",
            337
          ],
          [
            "Insurance",
            "$7.65M",
            11
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
            "Job-117640",
            "Towne Properties - Columbus",
            "Columbus",
            "$1.33M",
            "2026-10-13"
          ],
          [
            "Job-101476",
            "Towne Properties - Cincinnati West District Office",
            "Cincinnati",
            "$1.33M",
            "2025-11-17"
          ],
          [
            "Job-098557",
            "Compass Management Professionals",
            "Detroit Metro",
            "$867K",
            "2026-10-05"
          ],
          [
            "Job-118834",
            "Towne Properties -  Central Cincinnati District Office",
            "Cincinnati",
            "$814K",
            "2026-10-09"
          ],
          [
            "Job-116689",
            "Worly Plumbing Supply Inc",
            "Columbus",
            "$753K",
            "2026-08-26"
          ],
          [
            "Job-119028",
            "Village at Cornerstone",
            "Detroit Metro",
            "$693K",
            "2026-10-16"
          ],
          [
            "Job-120318",
            "Cedar Management Group",
            "Cleveland",
            "$521K",
            "2026-10-20"
          ],
          [
            "Job-116756",
            "Pirhl",
            "Columbus",
            "$427K",
            "2026-08-26"
          ],
          [
            "Job-114174",
            "Sundance Property Management Inc",
            "Cincinnati",
            "$204K",
            "2026-08-21"
          ],
          [
            "Job-120966",
            "Priestley Management Company",
            "Raleigh",
            "$184K",
            "2026-10-21"
          ],
          [
            "Job-110180",
            "WPM Real Estate Management",
            "DC Metro",
            "$161K",
            "2026-10-12"
          ],
          [
            "Job-101477",
            "Towne Properties - Cincinnati West District Office",
            "Cincinnati",
            "$110K",
            "2025-11-17"
          ],
          [
            "Job-120371",
            "HPC Management",
            "Knoxville",
            "$102K",
            "2026-10-01"
          ],
          [
            "Job-119410",
            "Capital Property Solutions",
            "Columbus",
            "$99K",
            "2026-10-01"
          ],
          [
            "Job-115971",
            "Sentry Management - East Columbus",
            "Columbus",
            "$89K",
            "2026-10-12"
          ],
          [
            "Job-106353",
            "Towne Properties - Northern Kentucky",
            "Cincinnati",
            "$43K",
            "2026-10-13"
          ],
          [
            "Job-112101",
            "Stonegate Property Management - Northern Kentucky",
            "Cincinnati",
            "$40K",
            "2026-10-01"
          ],
          [
            "Job-119576",
            "Towne Properties - Dayton",
            "Dayton",
            "$23K",
            "2026-09-29"
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
                  5942432.259999998,
                  4681560.9,
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
                  8166883.68,
                  4949538.27,
                  5670646.26,
                  5231575.41,
                  5265393.15,
                  6478621.840000001,
                  8091864.450000001,
                  8091864.450000001,
                  8091864.450000001
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
                  7800826.700000001,
                  5629484.819999999,
                  5200034.089999999,
                  4471377.07,
                  4774539.54,
                  4489646.010000001,
                  6366014.31,
                  7037183.51,
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
                  5942432.259999998,
                  4681560.9,
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
      5942432.259999998,
      4681560.9,
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
      5942432.259999998,
      4681560.9,
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
      8166883.68,
      4949538.27,
      5670646.26,
      5231575.41,
      5265393.15,
      6478621.840000001,
      8091864.450000001,
      8091864.450000001,
      8091864.450000001
    ],
    "tabs": []
  },
  "BACKLOG": {
    "_source": "calculator/backlog.js v1.0-rules-encoded",
    "title": "Job Backlog & Production",
    "subtitle": "Live job-level backlog",
    "headerMeta": {
      "totalJobs": 114,
      "totalWOs": 304,
      "portfolioValue": 17569459.69,
      "avgDaysInStatus": 53,
      "lastBuild": "2026-10-21T12:51:08.545Z"
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
        "value": "114",
        "sub": "304 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "17",
        "sub": "14.9% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "97",
        "sub": "85.1% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "1",
        "sub": "5.9% of In Progress",
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
        "value": "$17.57M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$8.14M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$89K",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "1",
        "sub": "5.9% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$89K",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "2",
        "sub": "Across 1 jobs",
        "tone": "info"
      },
      {
        "label": "RTS Ready Today",
        "value": "1",
        "sub": "No blocker, dispatch now",
        "tone": "good"
      },
      {
        "label": "Top Trailing Trade",
        "value": "Gutters",
        "sub": "1 open WOs / 1 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "105",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "39",
        "sub": "37.1% of all holds",
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
        "value": "69d",
        "sub": "Mean days in hold across all sub-statuses",
        "tone": "info"
      }
    ],
    "kpisSales": [
      {
        "label": "Active Reps",
        "value": "17",
        "sub": "Reps with at least one open WO",
        "tone": "info"
      },
      {
        "label": "Stuck Value >30d",
        "value": "$8.14M",
        "sub": "Sum of stale value across all reps",
        "tone": "crit"
      },
      {
        "label": "Reps with Stuck Work",
        "value": "12",
        "sub": "Reps carrying any >30d WO",
        "tone": "warn"
      },
      {
        "label": "Top Stuck Rep",
        "value": "$1.94M",
        "sub": "Highest single-rep stuck value",
        "tone": "warn"
      }
    ],
    "kpisBacklog": [
      {
        "label": "Not Started Jobs",
        "value": "97",
        "sub": "85.1% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$10.21M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "748d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Cleveland",
        "sub": "27 jobs (27.8% of backlog)",
        "tone": "warn"
      }
    ],
    "charts": [
      {
        "id": "ch-wo-status",
        "labels": [
          "On Hold",
          "Scheduled",
          "Ready to Schedule",
          "In Progress",
          "New",
          "Completed"
        ],
        "datasets": [
          {
            "label": "Work Orders",
            "data": [
              105,
              68,
              68,
              53,
              5,
              5
            ]
          }
        ]
      },
      {
        "id": "ch-branch",
        "labels": [
          "Columbus",
          "Detroit Metro",
          "Cleveland",
          "Cincinnati",
          "Raleigh",
          "Richmond",
          "Knoxville",
          "DC Metro",
          "Dayton",
          "Nashville",
          "Indianapolis"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              5,
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
            ]
          },
          {
            "label": "Open",
            "data": [
              21,
              10,
              3,
              15,
              1,
              0,
              3,
              3,
              1,
              1,
              0
            ]
          },
          {
            "label": "On Hold",
            "data": [
              16,
              24,
              19,
              7,
              15,
              7,
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
              9,
              3,
              15,
              5,
              28,
              6,
              0,
              0,
              1,
              0,
              1
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              12,
              20,
              15,
              20,
              0,
              1,
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
        "id": "ch-wo-aging",
        "labels": [
          "On Hold",
          "Ready to Schedule",
          "In Progress",
          "Scheduled",
          "Completed",
          "New"
        ],
        "datasets": [
          {
            "label": "Avg Days",
            "data": [
              69,
              26,
              21,
              8,
              5,
              0
            ]
          },
          {
            "label": "Max Days",
            "data": [
              748,
              146,
              338,
              28,
              5,
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
          "Windows",
          "Carpentry"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              5,
              0,
              0,
              0,
              0,
              0
            ]
          },
          {
            "label": "Open",
            "data": [
              252,
              31,
              9,
              5,
              1,
              1
            ]
          }
        ]
      },
      {
        "id": "ch-incomplete-status",
        "labels": [
          "In Progress",
          "Ready to Schedule"
        ],
        "datasets": [
          {
            "label": "WOs",
            "data": [
              1,
              1
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
              1,
              1,
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
          "Cleveland",
          "Columbus",
          "Detroit Metro",
          "Raleigh",
          "Cincinnati",
          "DC Metro",
          "Richmond",
          "Dayton",
          "Knoxville",
          "Nashville",
          "Indianapolis"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              27,
              17,
              15,
              10,
              8,
              6,
              6,
              5,
              1,
              1,
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
            63,
            5,
            16,
            9,
            12,
            21,
            0,
            8,
            21,
            3995265.98
          ],
          [
            "Detroit Metro",
            57,
            0,
            24,
            3,
            20,
            9,
            0,
            7,
            17,
            5318344
          ],
          [
            "Cleveland",
            52,
            0,
            19,
            15,
            15,
            2,
            0,
            4,
            28,
            2688190.65
          ],
          [
            "Cincinnati",
            47,
            0,
            7,
            5,
            20,
            15,
            0,
            1,
            14,
            2879631.56
          ],
          [
            "Raleigh",
            44,
            0,
            15,
            28,
            0,
            1,
            0,
            15,
            11,
            1309215
          ],
          [
            "Richmond",
            14,
            0,
            7,
            6,
            1,
            0,
            0,
            1,
            6,
            370566.5
          ],
          [
            "Knoxville",
            10,
            0,
            7,
            0,
            0,
            3,
            0,
            0,
            2,
            169617
          ],
          [
            "DC Metro",
            8,
            0,
            5,
            0,
            0,
            1,
            0,
            3,
            7,
            610748
          ],
          [
            "Dayton",
            7,
            0,
            5,
            1,
            0,
            1,
            0,
            0,
            6,
            206806
          ],
          [
            "Nashville",
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            5100
          ],
          [
            "Indianapolis",
            1,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            15975
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
            41,
            45,
            139
          ],
          [
            "Pending Permit",
            39,
            49,
            748
          ],
          [
            "Spring Hold",
            15,
            173,
            573
          ],
          [
            "(no sub-status)",
            6,
            69,
            184
          ],
          [
            "Pending HOA",
            2,
            76,
            125
          ],
          [
            "Pending Material",
            1,
            184,
            184
          ],
          [
            "Homeowner Request",
            1,
            89,
            89
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
            "Gutters",
            1,
            1,
            88625
          ],
          [
            "Roofing",
            1,
            1,
            88625
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
            16
          ],
          [
            "Ready to Schedule",
            8
          ],
          [
            "In Progress",
            5
          ],
          [
            "New",
            1
          ],
          [
            "Scheduled",
            1
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
            257,
            5,
            252,
            82,
            13575498.97
          ],
          [
            "Gutters",
            31,
            0,
            31,
            31,
            4559172.3
          ],
          [
            "Siding",
            9,
            0,
            9,
            9,
            2388129.42
          ],
          [
            "Other",
            5,
            0,
            5,
            5,
            309300
          ],
          [
            "Windows",
            1,
            0,
            1,
            1,
            10770
          ],
          [
            "Carpentry",
            1,
            0,
            1,
            1,
            16416
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
            "Mark Leedy",
            51,
            18,
            1935841,
            10,
            3
          ],
          [
            "Shawn Dunnigan - INACTIVE",
            16,
            3,
            1733333,
            4,
            1
          ],
          [
            "Todd Sandler",
            5,
            4,
            1173366.26,
            2,
            1
          ],
          [
            "Nicholas Andrukat",
            50,
            26,
            1162075.42,
            10,
            1
          ],
          [
            "Kristi Mitchell",
            22,
            2,
            583897,
            21,
            1
          ],
          [
            "Micah Williamson",
            17,
            8,
            471240,
            4,
            1
          ],
          [
            "Marko Jovanovic",
            8,
            7,
            274655,
            3,
            1
          ],
          [
            "Lisa Gibson",
            11,
            10,
            270127,
            4,
            4
          ],
          [
            "Jason Crooke",
            14,
            6,
            192496.5,
            6,
            1
          ],
          [
            "Courtney Lyon",
            24,
            6,
            157923,
            5,
            1
          ],
          [
            "Ron Saxe",
            19,
            7,
            116722,
            3,
            1
          ],
          [
            "Aaron Ellis",
            11,
            3,
            67959,
            7,
            2
          ],
          [
            "Matthew Cooke",
            2,
            2,
            0,
            0,
            1
          ],
          [
            "Christy Osborne",
            32,
            3,
            0,
            0,
            1
          ],
          [
            "Josh Kennedy",
            1,
            1,
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
            27,
            2166711.99,
            146
          ],
          [
            "Columbus",
            17,
            1724032.48,
            184
          ],
          [
            "Detroit Metro",
            15,
            3758341,
            485
          ],
          [
            "Raleigh",
            10,
            1125592,
            35
          ],
          [
            "Cincinnati",
            8,
            340069,
            139
          ],
          [
            "DC Metro",
            6,
            449328,
            748
          ],
          [
            "Richmond",
            6,
            370566.5,
            76
          ],
          [
            "Dayton",
            5,
            184096,
            89
          ],
          [
            "Knoxville",
            1,
            67959,
            91
          ],
          [
            "Nashville",
            1,
            5100,
            0
          ],
          [
            "Indianapolis",
            1,
            15975,
            9
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
            748,
            69162
          ],
          [
            "Job-093347",
            "Comsource Management, Inc.",
            "DC Metro",
            "Roofing",
            "Spring Hold",
            "Marko Jovanovic",
            573,
            205493
          ],
          [
            "Job-098561",
            "Compass Management Professionals",
            "Detroit Metro",
            "Gutters",
            "Spring Hold",
            "Shawn Dunnigan - INACTIVE",
            485,
            866666
          ],
          [
            "Job-098563",
            "Compass Management Professionals",
            "Detroit Metro",
            "Gutters",
            "Spring Hold",
            "Shawn Dunnigan - INACTIVE",
            485,
            866667
          ],
          [
            "Job-111825",
            "Capital Property Solutions",
            "Columbus",
            "Siding",
            "Pending Material",
            "Ron Saxe",
            184,
            74242
          ],
          [
            "Job-112329",
            "Associated Property Management, LLC",
            "Cleveland",
            "Gutters",
            "",
            "Nicholas Andrukat",
            146,
            256141
          ],
          [
            "Job-114434",
            "John Hurley",
            "Cincinnati",
            "Roofing",
            "Pending Deposit",
            "Lisa Gibson",
            139,
            1800
          ],
          [
            "Job-115219",
            "Towne Properties - East Cincinnati District Office",
            "Cincinnati",
            "Gutters",
            "Pending HOA",
            "Mark Leedy",
            125,
            98128
          ],
          [
            "Job-117156",
            "Associa On Call Tennessee Knoxville",
            "Knoxville",
            "Roofing",
            "Pending Deposit",
            "Aaron Ellis",
            91,
            67959
          ],
          [
            "Job-117331",
            "Towne Properties - Dayton",
            "Dayton",
            "Gutters",
            "",
            "Mark Leedy",
            89,
            43988
          ],
          [
            "Job-117333",
            "Towne Properties - Dayton",
            "Dayton",
            "Gutters",
            "Homeowner Request",
            "Mark Leedy",
            89,
            40460
          ],
          [
            "Job-117641",
            "Towne Properties - Columbus",
            "Columbus",
            "Gutters",
            "Pending Deposit",
            "Lisa Gibson",
            84,
            250000
          ],
          [
            "Job-118118",
            "Kare Condominium Management Company",
            "Cleveland",
            "Gutters",
            "Pending Deposit",
            "Nicholas Andrukat",
            77,
            164288
          ],
          [
            "Job-118193",
            "United Property Associates",
            "Richmond",
            "Roofing",
            "Pending Deposit",
            "Jason Crooke",
            76,
            168762.5
          ],
          [
            "Job-117330",
            "Towne Properties - Dayton",
            "Dayton",
            "Gutters",
            "",
            "Mark Leedy",
            76,
            47478
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Raleigh",
          "permits": 15
        },
        {
          "branch": "Columbus",
          "permits": 8
        },
        {
          "branch": "Detroit Metro",
          "permits": 7
        },
        {
          "branch": "Cleveland",
          "permits": 4
        },
        {
          "branch": "DC Metro",
          "permits": 3
        },
        {
          "branch": "Cincinnati",
          "permits": 1
        },
        {
          "branch": "Richmond",
          "permits": 1
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $89K of trapped partial-job revenue into billable revenue, reduce $8.14M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Dispatch the 1 RTS WOs sitting on partial jobs. No blocker, no hold, just dispatch.",
        "Gutters sweep: 1 open WOs across 1 partial jobs blocking $89K. Highest single-trade leverage in the book.",
        "Raleigh permit sweep: 15 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Gutters): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 97 jobs ($10.21M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $89K, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 08, 2026 - Oct 20, 2026 - De-Duplicated at Job Level - 353 Jobs - 11 Markets - 13 PMs",
    "generated": "2026-10-21",
    "headerMeta": {
      "trueRevenue": 42613479.7,
      "uniqueJobs": 353,
      "markets": 11,
      "pms": 13,
      "medianComplete": 58.5,
      "avgStart": 64.7,
      "multiTradeJobs": 42,
      "singleTradeJobs": 311,
      "multiTradePct": 11.9,
      "lastBuild": "2026-10-21T12:51:08.583Z"
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
        "value": "$42.61M",
        "sub": "353 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$120,718",
        "sub": "Per job (deduped)"
      },
      {
        "label": "Median Days to Complete",
        "value": "58.5d",
        "sub": "Job-level median"
      },
      {
        "label": "Avg Days to Start",
        "value": "64.7d",
        "sub": "Sale to crew on-site"
      },
      {
        "label": "Multi-Trade Jobs",
        "value": "42",
        "sub": "11.9% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "311",
        "sub": "88.1% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$281,329",
        "sub": "+184.1% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$99,028",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+19.1d",
        "sub": "MT 73.2d vs ST 54.1d"
      }
    ],
    "monthly": [
      {
        "m": "2026-01",
        "label": "January",
        "key": "2026-01",
        "rev": 959133.87,
        "jobs": 14,
        "med": 71.3,
        "start": 51.9
      },
      {
        "m": "2026-02",
        "label": "February",
        "key": "2026-02",
        "rev": 321676.41,
        "jobs": 11,
        "med": 49.9,
        "start": 89.7
      },
      {
        "m": "2026-03",
        "label": "March",
        "key": "2026-03",
        "rev": 4022615.43,
        "jobs": 35,
        "med": 60.6,
        "start": 73
      },
      {
        "m": "2026-04",
        "label": "April",
        "key": "2026-04",
        "rev": 3745588.93,
        "jobs": 36,
        "med": 46.1,
        "start": 65.3
      },
      {
        "m": "2026-05",
        "label": "May",
        "key": "2026-05",
        "rev": 8648464.86,
        "jobs": 39,
        "med": 41.6,
        "start": 74.4
      },
      {
        "m": "2026-06",
        "label": "June",
        "key": "2026-06",
        "rev": 4478837.21,
        "jobs": 37,
        "med": 54.2,
        "start": 58.2
      },
      {
        "m": "2026-07",
        "label": "July",
        "key": "2026-07",
        "rev": 5315445.06,
        "jobs": 65,
        "med": 49.6,
        "start": 63
      },
      {
        "m": "2026-08",
        "label": "August",
        "key": "2026-08",
        "rev": 4489988.77,
        "jobs": 51,
        "med": 64.8,
        "start": 58.4
      },
      {
        "m": "2026-09",
        "label": "September",
        "key": "2026-09",
        "rev": 5201963.26,
        "jobs": 41,
        "med": 64.8,
        "start": 66.5
      },
      {
        "m": "2026-10",
        "label": "October",
        "key": "2026-10",
        "rev": 5429765.9,
        "jobs": 24,
        "med": 62.2,
        "start": 63.9
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
          "2026-09",
          "2026-10"
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
              4489988.77,
              5201963.26,
              5429765.9
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
              41,
              24
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
          "2026-09",
          "2026-10"
        ],
        "datasets": [
          {
            "label": "Median Days to Complete",
            "data": [
              71.3,
              49.9,
              60.6,
              46.1,
              41.6,
              54.2,
              49.6,
              64.8,
              64.8,
              62.2
            ]
          },
          {
            "label": "Avg Days to Start",
            "data": [
              51.9,
              89.7,
              73,
              65.3,
              74.4,
              58.2,
              63,
              58.4,
              66.5,
              63.9
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
              42
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              311
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
          "Gutters + Other + Roofing + Siding",
          "Gutters + Roofing + Windows",
          "Gutters + Other + Roofing"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              33,
              3,
              1,
              1,
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
          "Richmond",
          "Indianapolis",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "MT %",
            "data": [
              23.7,
              11.6,
              4.9,
              43.8,
              1.4,
              20.5,
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
          "Richmond",
          "Indianapolis",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "MT Median",
            "data": [
              71.6,
              100,
              71.9,
              68.6,
              73.8,
              70.6,
              0,
              0,
              0,
              0,
              68.5
            ]
          },
          {
            "label": "ST Median",
            "data": [
              56.7,
              59.7,
              55.7,
              40.7,
              31.8,
              68.5,
              46.3,
              82.7,
              82.7,
              47.7,
              25.1
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
          "Richmond",
          "Indianapolis",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              11878520.11,
              9656883.77,
              8269324.68,
              4459721.71,
              3926347.61,
              2061252.31,
              1237498.08,
              451019,
              320205.24,
              250593,
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
          "Richmond",
          "Indianapolis",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              61.5,
              64.8,
              56.8,
              50.6,
              33.2,
              70.6,
              46.3,
              82.7,
              82.7,
              47.7,
              33.6
            ]
          }
        ]
      },
      {
        "id": "ch_pm_top",
        "labels": [
          "Brian Walker",
          "Ryan Wolf",
          "Bryan Paquin-INACTIVE",
          "James Foky",
          "Wayne Iles",
          "Erik Patla",
          "(Unassigned)",
          "Rob Vanderlinden",
          "Daniel Wallace",
          "Jeremy Wolfe",
          "Jordan Pyle",
          "Shawn Marlow",
          "Justin Milliron"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              11138989.23,
              8183402.43,
              6199768.76,
              3887647.25,
              2543851.23,
              2249843.93,
              1374648.63,
              1039635.35,
              999770.44,
              975433.61,
              669772,
              373557.37,
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
          "Bryan Paquin-INACTIVE",
          "James Foky",
          "Wayne Iles",
          "Erik Patla",
          "(Unassigned)",
          "Rob Vanderlinden",
          "Daniel Wallace",
          "Jeremy Wolfe",
          "Jordan Pyle",
          "Shawn Marlow",
          "Justin Milliron"
        ],
        "datasets": [
          {
            "label": "PMs",
            "data": [
              {
                "x": 58.7,
                "y": 11138989.23,
                "wos": 322,
                "name": "Brian Walker"
              },
              {
                "x": 67.7,
                "y": 8183402.43,
                "wos": 185,
                "name": "Ryan Wolf"
              },
              {
                "x": 61.8,
                "y": 6199768.76,
                "wos": 180,
                "name": "Bryan Paquin-INACTIVE"
              },
              {
                "x": 44.5,
                "y": 3887647.25,
                "wos": 126,
                "name": "James Foky"
              },
              {
                "x": 70.6,
                "y": 2543851.23,
                "wos": 105,
                "name": "Wayne Iles"
              },
              {
                "x": 50.6,
                "y": 2249843.93,
                "wos": 44,
                "name": "Erik Patla"
              },
              {
                "x": 41.7,
                "y": 1374648.63,
                "wos": 60,
                "name": "(Unassigned)"
              },
              {
                "x": 90.6,
                "y": 1039635.35,
                "wos": 9,
                "name": "Rob Vanderlinden"
              },
              {
                "x": 64.2,
                "y": 999770.44,
                "wos": 48,
                "name": "Daniel Wallace"
              },
              {
                "x": 56.1,
                "y": 975433.61,
                "wos": 28,
                "name": "Jeremy Wolfe"
              },
              {
                "x": 58.6,
                "y": 669772,
                "wos": 18,
                "name": "Jordan Pyle"
              },
              {
                "x": 64.6,
                "y": 373557.37,
                "wos": 9,
                "name": "Shawn Marlow"
              },
              {
                "x": 143.6,
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
              37801564.37,
              2812769.78,
              1069295.8,
              527233.99,
              245969.73,
              156646.03
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
              63.8,
              68.5,
              121.6,
              0,
              132.6,
              64.1
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
          "Katelyn Stewart",
          "Micah Williamson",
          "Kristi Mitchell",
          "Lisa Stachura - INACTIVE"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              245,
              99,
              4,
              1,
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
          "Katelyn Stewart",
          "Micah Williamson",
          "Kristi Mitchell",
          "Lisa Stachura - INACTIVE"
        ],
        "datasets": [
          {
            "label": "Median Complete",
            "data": [
              60.8,
              49.9,
              351.6,
              147.7,
              17.6,
              49.5,
              46.6,
              71.8
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
          "Katelyn Stewart",
          "Micah Williamson",
          "Kristi Mitchell",
          "Lisa Stachura - INACTIVE"
        ],
        "datasets": [
          {
            "label": "MT %",
            "data": [
              13.1,
              10.1,
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
        "id": "ch_cb_scatter",
        "labels": [
          "Lisa Gibson",
          "RaShauna Watts",
          "Jamie Sanders - INACTIVE",
          "Evan Hall",
          "Katelyn Stewart",
          "Micah Williamson",
          "Kristi Mitchell",
          "Lisa Stachura - INACTIVE"
        ],
        "datasets": [
          {
            "label": "Creators",
            "data": [
              {
                "x": 60.8,
                "y": 138321.72,
                "jobs": 245,
                "name": "Lisa Gibson"
              },
              {
                "x": 49.9,
                "y": 80961.78,
                "jobs": 99,
                "name": "RaShauna Watts"
              },
              {
                "x": 351.6,
                "y": 165903.25,
                "jobs": 4,
                "name": "Jamie Sanders - INACTIVE"
              },
              {
                "x": 147.7,
                "y": 34512,
                "jobs": 1,
                "name": "Evan Hall"
              },
              {
                "x": 17.6,
                "y": 7236,
                "jobs": 1,
                "name": "Katelyn Stewart"
              },
              {
                "x": 49.5,
                "y": 2250,
                "jobs": 1,
                "name": "Micah Williamson"
              },
              {
                "x": 46.6,
                "y": 1481,
                "jobs": 1,
                "name": "Kristi Mitchell"
              },
              {
                "x": 71.8,
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
            59,
            11878520.11,
            201330.85,
            61.5,
            54.4,
            23.7,
            71.6,
            56.7
          ],
          [
            "Detroit Metro",
            69,
            9656883.77,
            139954.84,
            64.8,
            75.5,
            11.6,
            100,
            59.7
          ],
          [
            "Raleigh",
            61,
            8269324.68,
            135562.7,
            56.8,
            65.4,
            4.9,
            71.9,
            55.7
          ],
          [
            "DC Metro",
            16,
            4459721.71,
            278732.61,
            50.6,
            51.9,
            43.8,
            68.6,
            40.7
          ],
          [
            "Cleveland",
            72,
            3926347.61,
            54532.61,
            33.2,
            57.5,
            1.4,
            73.8,
            31.8
          ],
          [
            "Cincinnati",
            39,
            2061252.31,
            52852.62,
            70.6,
            75.8,
            20.5,
            70.6,
            68.5
          ],
          [
            "Nashville",
            14,
            1237498.08,
            88392.72,
            46.3,
            49.1,
            0,
            0,
            46.3
          ],
          [
            "Dayton",
            7,
            451019,
            64431.29,
            82.7,
            94.2,
            0,
            0,
            82.7
          ],
          [
            "Richmond",
            8,
            320205.24,
            40025.66,
            82.7,
            76.2,
            0,
            0,
            82.7
          ],
          [
            "Indianapolis",
            3,
            250593,
            83531,
            47.7,
            77.2,
            0,
            0,
            47.7
          ],
          [
            "Knoxville",
            5,
            102114.19,
            20422.84,
            33.6,
            37.3,
            20,
            68.5,
            25.1
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
            322,
            51,
            11138989.23,
            34593.13,
            58.7,
            51.8
          ],
          [
            "Ryan Wolf",
            185,
            55,
            8183402.43,
            44234.61,
            67.7,
            75.4
          ],
          [
            "Bryan Paquin-INACTIVE",
            180,
            50,
            6199768.76,
            34443.16,
            61.8,
            66.5
          ],
          [
            "James Foky",
            126,
            59,
            3887647.25,
            30854.34,
            44.5,
            59.2
          ],
          [
            "Wayne Iles",
            105,
            45,
            2543851.23,
            24227.15,
            70.6,
            78.7
          ],
          [
            "Erik Patla",
            44,
            14,
            2249843.93,
            51132.82,
            50.6,
            55.7
          ],
          [
            "(Unassigned)",
            60,
            50,
            1374648.63,
            22910.81,
            41.7,
            48.9
          ],
          [
            "Rob Vanderlinden",
            9,
            7,
            1039635.35,
            115515.04,
            90.6,
            86.2
          ],
          [
            "Daniel Wallace",
            48,
            2,
            999770.44,
            20828.55,
            64.2,
            41.1
          ],
          [
            "Jeremy Wolfe",
            28,
            12,
            975433.61,
            34836.91,
            56.1,
            66
          ],
          [
            "Jordan Pyle",
            18,
            4,
            669772,
            37209.56,
            58.6,
            62.7
          ],
          [
            "Shawn Marlow",
            9,
            8,
            373557.37,
            41506.37,
            64.6,
            54.1
          ],
          [
            "Justin Milliron",
            6,
            3,
            62921.85,
            10486.98,
            143.6,
            93.6
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
            1063,
            37801564.37,
            35561.21,
            63.8
          ],
          [
            "Gutters",
            69,
            2812769.78,
            40764.78,
            68.5
          ],
          [
            "Siding",
            18,
            1069295.8,
            59405.32,
            121.6
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
            6,
            245969.73,
            40994.96,
            132.6
          ],
          [
            "Other",
            6,
            156646.03,
            26107.67,
            64.1
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
            245,
            33888821.54,
            138321.72,
            "60.8d",
            "66.2d",
            13.1,
            138321.72
          ],
          [
            "RaShauna Watts",
            99,
            8015216.17,
            80961.78,
            "49.9d",
            "58.9d",
            10.1,
            80961.78
          ],
          [
            "Jamie Sanders - INACTIVE",
            4,
            663612.99,
            165903.25,
            "351.6d",
            "141.1d",
            0,
            165903.25
          ],
          [
            "Evan Hall",
            1,
            34512,
            34512,
            "147.7d",
            "142.6d",
            0,
            34512
          ],
          [
            "Katelyn Stewart",
            1,
            7236,
            7236,
            "17.6d",
            "13.5d",
            0,
            7236
          ],
          [
            "Micah Williamson",
            1,
            2250,
            2250,
            "49.5d",
            "0d",
            0,
            2250
          ],
          [
            "Kristi Mitchell",
            1,
            1481,
            1481,
            "46.6d",
            "34.6d",
            0,
            1481
          ],
          [
            "Lisa Stachura - INACTIVE",
            1,
            350,
            350,
            "71.8d",
            "22.7d",
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
            "Katelyn Stewart",
            0,
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
            1
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
            33,
            59,
            36,
            8,
            6,
            50,
            1,
            1,
            9,
            36,
            6,
            245
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
            21,
            7,
            1,
            18,
            2,
            4,
            5,
            21,
            2,
            99
          ],
          [
            "Total",
            39,
            72,
            59,
            16,
            7,
            69,
            3,
            5,
            14,
            61,
            8,
            353
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Multi-trade penalty is severe in 2 markets: Cleveland MT 73.8d vs ST 31.8d, Detroit Metro MT 100.0d vs ST 59.7d.",
        "Days to Start averages 64.7 days company-wide and 75.8 days in Cincinnati (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [
        "Lisa Gibson creates 245 jobs at $138,322 average contract and 13.1% multi-trade attach, well below the top creator."
      ],
      "positivesToBuildOn": [
        "May delivered $8.65M across 39 invoiced jobs at 41.6-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "Cleveland hits 33.2-day median complete and a $54,533 average contract on 72 jobs.",
        "Multi-trade jobs carry a $281,329 average contract versus $99,028 for single-trade, a 184% revenue lift per job."
      ]
    }
  }
};
