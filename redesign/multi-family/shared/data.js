/* AUTO-GENERATED — do not edit. Generated 2026-11-02T17:40:07.261Z (multi-family) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-11-02T17:40:07.261Z",
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
        "elapsedMs": 192,
        "builtAt": "2026-11-02T17:40:07.261Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 102,
        "builtAt": "2026-11-02T17:40:07.261Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 8,
        "builtAt": "2026-11-02T17:40:07.261Z"
      },
      {
        "id": "installs-ytd",
        "version": "1.0-rules-encoded",
        "elapsedMs": 32,
        "builtAt": "2026-11-02T17:40:07.261Z"
      }
    ]
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-11-02",
    "ytdDays": 306,
    "rowCount": 5164,
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
        "value": "$53.35M",
        "sub": "5,164 signed contracts across 12 markets"
      },
      {
        "label": "Sold",
        "value": "$53.35M",
        "sub": "5,164 deals | 100.0% of signed contracts"
      },
      {
        "label": "Production Review",
        "value": "$0",
        "sub": "0 deals | Ops Review, PM Review, Contracted"
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
        "value": "$10,331",
        "sub": "Median: $350 | Install avg: $114,889"
      },
      {
        "label": "Organization",
        "value": "43 Reps",
        "sub": "12 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$63.64M",
        "sub": "Based on 306 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "8.4% / 91.6%",
        "sub": "433 installs | 4,729 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 5164,
        "amount": 53351417.46
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
        "count": 386,
        "amount": 3815023.61,
        "installs": 35,
        "repairs": 350,
        "avgDeal": 9883,
        "repairPct": 90.7,
        "installAvg": 99184,
        "repairAvg": 980
      },
      {
        "key": "2026-02",
        "label": "February",
        "count": 712,
        "amount": 2833850.6,
        "installs": 31,
        "repairs": 681,
        "avgDeal": 3980,
        "repairPct": 95.6,
        "installAvg": 78828,
        "repairAvg": 573
      },
      {
        "key": "2026-03",
        "label": "March",
        "count": 672,
        "amount": 3749053.84,
        "installs": 33,
        "repairs": 639,
        "avgDeal": 5579,
        "repairPct": 95.1,
        "installAvg": 101050,
        "repairAvg": 649
      },
      {
        "key": "2026-04",
        "label": "April",
        "count": 478,
        "amount": 8149728.11,
        "installs": 50,
        "repairs": 428,
        "avgDeal": 17050,
        "repairPct": 89.5,
        "installAvg": 156618,
        "repairAvg": 745
      },
      {
        "key": "2026-05",
        "label": "May",
        "count": 429,
        "amount": 4279241,
        "installs": 35,
        "repairs": 394,
        "avgDeal": 9975,
        "repairPct": 91.8,
        "installAvg": 114366,
        "repairAvg": 702
      },
      {
        "key": "2026-06",
        "label": "June",
        "count": 540,
        "amount": 4203019.77,
        "installs": 76,
        "repairs": 464,
        "avgDeal": 7783,
        "repairPct": 85.9,
        "installAvg": 50181,
        "repairAvg": 839
      },
      {
        "key": "2026-07",
        "label": "July",
        "count": 615,
        "amount": 7796386.23,
        "installs": 48,
        "repairs": 567,
        "avgDeal": 12677,
        "repairPct": 92.2,
        "installAvg": 153551,
        "repairAvg": 751
      },
      {
        "key": "2026-08",
        "label": "August",
        "count": 592,
        "amount": 8683673.27,
        "installs": 43,
        "repairs": 549,
        "avgDeal": 14668,
        "repairPct": 92.7,
        "installAvg": 191947,
        "repairAvg": 783
      },
      {
        "key": "2026-09",
        "label": "September",
        "count": 476,
        "amount": 4063558.19,
        "installs": 47,
        "repairs": 428,
        "avgDeal": 8537,
        "repairPct": 89.9,
        "installAvg": 78334,
        "repairAvg": 889
      },
      {
        "key": "2026-10",
        "label": "October",
        "count": 263,
        "amount": 5777432.84,
        "installs": 35,
        "repairs": 228,
        "avgDeal": 21967,
        "repairPct": 86.7,
        "installAvg": 158393,
        "repairAvg": 1025
      },
      {
        "key": "2026-11",
        "label": "November",
        "count": 1,
        "amount": 450,
        "installs": 0,
        "repairs": 1,
        "avgDeal": 450,
        "repairPct": 100,
        "installAvg": 0,
        "repairAvg": 450
      }
    ],
    "jobTypeMixByMonth": {
      "Retail-No Financing": {
        "2026-01": 2576027.32,
        "2026-02": 2783148.94,
        "2026-03": 3748553.84,
        "2026-04": 6639883.11,
        "2026-05": 3584493.65,
        "2026-06": 3816270.53,
        "2026-07": 3963283.77,
        "2026-08": 4849542.17,
        "2026-09": 2387787.28,
        "2026-10": 3162532.84,
        "2026-11": 450
      },
      "Insurance": {
        "2026-01": 1206796.29,
        "2026-02": 50701.66,
        "2026-03": 500,
        "2026-04": 1509845,
        "2026-05": 694747.35,
        "2026-06": 386749.24,
        "2026-07": 3833102.46,
        "2026-08": 3827943.1,
        "2026-09": 1675770.91,
        "2026-10": 2614900,
        "2026-11": 0
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
        "2026-10": 0,
        "2026-11": 0
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Retail-No Financing",
        "count": 5138,
        "amount": 37511973.45,
        "avg": 7301
      },
      {
        "jobType": "Insurance",
        "count": 24,
        "amount": 15801056.01,
        "avg": 658377
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
        "count": 135,
        "amount": 650347.32
      },
      {
        "w": 3,
        "count": 83,
        "amount": 559664
      },
      {
        "w": 4,
        "count": 82,
        "amount": 2008345.29
      },
      {
        "w": 5,
        "count": 84,
        "amount": 278431
      },
      {
        "w": 6,
        "count": 189,
        "amount": 590371.78
      },
      {
        "w": 7,
        "count": 173,
        "amount": 165976.56
      },
      {
        "w": 8,
        "count": 201,
        "amount": 765630.78
      },
      {
        "w": 9,
        "count": 149,
        "amount": 1311871.48
      },
      {
        "w": 10,
        "count": 119,
        "amount": 1401807.78
      },
      {
        "w": 11,
        "count": 126,
        "amount": 426287.9
      },
      {
        "w": 12,
        "count": 258,
        "amount": 1203030.38
      },
      {
        "w": 13,
        "count": 130,
        "amount": 522520.78
      },
      {
        "w": 14,
        "count": 86,
        "amount": 372162.87
      },
      {
        "w": 15,
        "count": 151,
        "amount": 1265270.83
      },
      {
        "w": 16,
        "count": 116,
        "amount": 1398578.78
      },
      {
        "w": 17,
        "count": 77,
        "amount": 3090393.04
      },
      {
        "w": 18,
        "count": 100,
        "amount": 2233482.59
      },
      {
        "w": 19,
        "count": 98,
        "amount": 1446629.6
      },
      {
        "w": 20,
        "count": 90,
        "amount": 1051578.38
      },
      {
        "w": 21,
        "count": 108,
        "amount": 190599.73
      },
      {
        "w": 22,
        "count": 120,
        "amount": 1575680.29
      },
      {
        "w": 23,
        "count": 128,
        "amount": 772553.49
      },
      {
        "w": 24,
        "count": 120,
        "amount": 1395160.02
      },
      {
        "w": 25,
        "count": 113,
        "amount": 618897.38
      },
      {
        "w": 26,
        "count": 135,
        "amount": 1131393.88
      },
      {
        "w": 27,
        "count": 85,
        "amount": 1051815.83
      },
      {
        "w": 28,
        "count": 145,
        "amount": 1201779.85
      },
      {
        "w": 29,
        "count": 128,
        "amount": 1111143.31
      },
      {
        "w": 30,
        "count": 173,
        "amount": 1478127.41
      },
      {
        "w": 31,
        "count": 129,
        "amount": 3238884.83
      },
      {
        "w": 32,
        "count": 104,
        "amount": 2157651.55
      },
      {
        "w": 33,
        "count": 176,
        "amount": 1660447.55
      },
      {
        "w": 34,
        "count": 154,
        "amount": 3118324.41
      },
      {
        "w": 35,
        "count": 140,
        "amount": 1736272.76
      },
      {
        "w": 36,
        "count": 100,
        "amount": 1514516.37
      },
      {
        "w": 37,
        "count": 97,
        "amount": 1212633.05
      },
      {
        "w": 38,
        "count": 139,
        "amount": 710739.94
      },
      {
        "w": 39,
        "count": 105,
        "amount": 559863.86
      },
      {
        "w": 40,
        "count": 94,
        "amount": 142144.89
      },
      {
        "w": 41,
        "count": 76,
        "amount": 442470.97
      },
      {
        "w": 42,
        "count": 64,
        "amount": 837791.95
      },
      {
        "w": 43,
        "count": 55,
        "amount": 3242333
      },
      {
        "w": 44,
        "count": 26,
        "amount": 1189124
      },
      {
        "w": 45,
        "count": 1,
        "amount": 450
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
          16239636.03,
          1572,
          10331,
          79,
          1493,
          95,
          0
        ],
        [
          "Detroit Metro",
          10531004.31,
          949,
          11097,
          68,
          881,
          92.8,
          0
        ],
        [
          "Raleigh",
          9211223,
          1033,
          8917,
          67,
          965,
          93.4,
          0
        ],
        [
          "Cleveland",
          6547565.35,
          422,
          15516,
          100,
          322,
          76.3,
          0
        ],
        [
          "Nashville",
          3534778,
          140,
          25248,
          15,
          125,
          89.3,
          0
        ],
        [
          "Cincinnati",
          3307808.22,
          639,
          5177,
          39,
          600,
          93.9,
          0
        ],
        [
          "DC Metro",
          1848218,
          191,
          9677,
          21,
          169,
          88.5,
          0
        ],
        [
          "Dayton",
          744856.55,
          117,
          6366,
          15,
          102,
          87.2,
          0
        ],
        [
          "Richmond",
          683983.5,
          50,
          13680,
          14,
          36,
          72,
          0
        ],
        [
          "Indianapolis",
          428325,
          37,
          11576,
          7,
          30,
          81.1,
          0
        ],
        [
          "Knoxville",
          272969.5,
          11,
          24815,
          8,
          3,
          27.3,
          16
        ],
        [
          "NOVA",
          1050,
          3,
          350,
          0,
          3,
          100,
          0
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
        "Nashville",
        "Cincinnati",
        "DC Metro",
        "Dayton",
        "Richmond",
        "Indianapolis",
        "Knoxville",
        "NOVA"
      ]
    },
    "topPeople": [
      {
        "name": "Christy Osborne",
        "amount": 8062476.54,
        "count": 24,
        "avg": 335937,
        "medDays": 64,
        "jt": {
          "Retail-No Financing": 15,
          "Insurance": 9
        },
        "installs": 18,
        "repairs": 6
      },
      {
        "name": "Micah Williamson",
        "amount": 7014904,
        "count": 108,
        "avg": 64953,
        "medDays": 8,
        "jt": {
          "Retail-No Financing": 108
        },
        "installs": 40,
        "repairs": 68
      },
      {
        "name": "Nicholas Andrukat",
        "amount": 6238744.64,
        "count": 98,
        "avg": 63661,
        "medDays": 41,
        "jt": {
          "Retail-No Financing": 91,
          "Insurance": 6,
          "LowMar": 1
        },
        "installs": 91,
        "repairs": 7
      },
      {
        "name": "Evan Hall",
        "amount": 6169298,
        "count": 59,
        "avg": 104564,
        "medDays": 79,
        "jt": {
          "Retail-No Financing": 59
        },
        "installs": 54,
        "repairs": 4
      },
      {
        "name": "Mark Leedy",
        "amount": 4123571.22,
        "count": 77,
        "avg": 53553,
        "medDays": 23,
        "jt": {
          "Retail-No Financing": 74,
          "Retail-Financing": 1,
          "Insurance": 2
        },
        "installs": 59,
        "repairs": 18
      },
      {
        "name": "Ron Saxe",
        "amount": 3589948,
        "count": 48,
        "avg": 74791,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 46,
          "Insurance": 2
        },
        "installs": 38,
        "repairs": 10
      },
      {
        "name": "Josh Kennedy",
        "amount": 3261960,
        "count": 2,
        "avg": 1630980,
        "medDays": 1025,
        "jt": {
          "Insurance": 2
        },
        "installs": 2,
        "repairs": 0
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
        "amount": 2601279,
        "count": 26,
        "avg": 100049,
        "medDays": 109,
        "jt": {
          "Retail-No Financing": 26
        },
        "installs": 23,
        "repairs": 3
      },
      {
        "name": "Kristi Mitchell",
        "amount": 1983115,
        "count": 885,
        "avg": 2241,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 885
        },
        "installs": 7,
        "repairs": 878
      },
      {
        "name": "Marko Jovanovic",
        "amount": 1810993,
        "count": 146,
        "avg": 12404,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 146
        },
        "installs": 21,
        "repairs": 124
      },
      {
        "name": "Aaron Ellis",
        "amount": 1146797.5,
        "count": 24,
        "avg": 47783,
        "medDays": 43,
        "jt": {
          "Retail-No Financing": 24
        },
        "installs": 21,
        "repairs": 3
      },
      {
        "name": "Allyson Lepage",
        "amount": 993433.62,
        "count": 1652,
        "avg": 601,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 1652
        },
        "installs": 0,
        "repairs": 1652
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
        "name": "Jason Crooke",
        "amount": 657138.5,
        "count": 24,
        "avg": 27381,
        "medDays": 15,
        "jt": {
          "Retail-No Financing": 24
        },
        "installs": 14,
        "repairs": 10
      },
      {
        "name": "Katelyn Stewart",
        "amount": 374778.38,
        "count": 601,
        "avg": 624,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 601
        },
        "installs": 0,
        "repairs": 601
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
        "amount": 184855.35,
        "count": 7,
        "avg": 26408,
        "medDays": 12,
        "jt": {
          "Retail-No Financing": 6,
          "Insurance": 1
        },
        "installs": 6,
        "repairs": 1
      },
      {
        "name": "Morgan Valois",
        "amount": 110358.99,
        "count": 185,
        "avg": 597,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 185
        },
        "installs": 0,
        "repairs": 185
      },
      {
        "name": "Alyssa Stephens",
        "amount": 108237.82,
        "count": 196,
        "avg": 552,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 196
        },
        "installs": 0,
        "repairs": 196
      }
    ],
    "speedSellers": [
      {
        "name": "Allyson Lepage",
        "medDays": 0
      },
      {
        "name": "Kristi Mitchell",
        "medDays": 0
      },
      {
        "name": "Katelyn Stewart",
        "medDays": 0
      },
      {
        "name": "Alyssa Stephens",
        "medDays": 0
      },
      {
        "name": "Morgan Valois",
        "medDays": 0
      },
      {
        "name": "Brooklyn Parks",
        "medDays": 0
      },
      {
        "name": "Diane Derderian",
        "medDays": 0
      },
      {
        "name": "Marko Jovanovic",
        "medDays": 0
      }
    ],
    "repairHeavy": [
      {
        "name": "Allyson Lepage",
        "repairs": 1652,
        "deals": 1652,
        "pct": 100
      },
      {
        "name": "Katelyn Stewart",
        "repairs": 601,
        "deals": 601,
        "pct": 100
      },
      {
        "name": "Morgan Valois",
        "repairs": 185,
        "deals": 185,
        "pct": 100
      }
    ],
    "salesCycle": {
      "kpis": [
        {
          "label": "Overall Median",
          "value": "0 days",
          "sub": "Mean: 9 days (skewed by insurance)"
        },
        {
          "label": "Retail",
          "value": "0 days",
          "sub": "All retail job types"
        },
        {
          "label": "Insurance",
          "value": "147 days",
          "sub": "Median | Mean: 380 days"
        },
        {
          "label": "Repair",
          "value": "0 days",
          "sub": "Fast turn, low value"
        }
      ],
      "byJobType": [
        {
          "label": "Retail-No Fin",
          "median": 0,
          "mean": 7,
          "count": 5002
        },
        {
          "label": "Retail-Fin",
          "median": 0,
          "mean": 0,
          "count": 0
        },
        {
          "label": "Insurance",
          "median": 147,
          "mean": 380,
          "count": 18
        },
        {
          "label": "Repair",
          "median": 0,
          "mean": 1,
          "count": 4697
        },
        {
          "label": "Install",
          "median": 52,
          "mean": 126,
          "count": 322
        }
      ],
      "byMarket": [
        {
          "market": "Nashville",
          "median": 0,
          "mean": 12,
          "count": 138
        },
        {
          "market": "Richmond",
          "median": 0,
          "mean": 19,
          "count": 47
        },
        {
          "market": "Raleigh",
          "median": 0,
          "mean": 9,
          "count": 1028
        },
        {
          "market": "Cincinnati",
          "median": 0,
          "mean": 3,
          "count": 615
        },
        {
          "market": "Columbus",
          "median": 0,
          "mean": 10,
          "count": 1539
        },
        {
          "market": "Detroit Metro",
          "median": 0,
          "mean": 7,
          "count": 926
        },
        {
          "market": "DC Metro",
          "median": 0,
          "mean": 12,
          "count": 187
        },
        {
          "market": "Cleveland",
          "median": 0,
          "mean": 12,
          "count": 378
        },
        {
          "market": "Indianapolis",
          "median": 0,
          "mean": 14,
          "count": 36
        },
        {
          "market": "Dayton",
          "median": 0,
          "mean": 5,
          "count": 113
        },
        {
          "market": "Knoxville",
          "median": 16,
          "mean": 63,
          "count": 11
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
      "avgWeeklyNeed": 5741467.44,
      "weeksRemaining": 9,
      "annualPlan": 51673207,
      "byJobType": [],
      "byTrade": [],
      "byMarket": [
        {
          "market": "Columbus",
          "total": 1747645.07,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 34.9
        },
        {
          "market": "Detroit Metro",
          "total": 1133304.82,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 21.1
        },
        {
          "market": "Raleigh",
          "total": 991275.2,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 23
        },
        {
          "market": "Cleveland",
          "total": 704622.95,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 9.4
        },
        {
          "market": "Nashville",
          "total": 380398.76,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 3.1
        },
        {
          "market": "Cincinnati",
          "total": 355973.17,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 14.2
        },
        {
          "market": "DC Metro",
          "total": 198897.87,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 4.2
        },
        {
          "market": "Dayton",
          "total": 80158.5,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 2.6
        },
        {
          "market": "Richmond",
          "total": 73607.59,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.1
        },
        {
          "market": "Indianapolis",
          "total": 46094.63,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.8
        },
        {
          "market": "Knoxville",
          "total": 29375.89,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.2
        },
        {
          "market": "NOVA",
          "total": 113,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.1
        }
      ],
      "weekSchedule": [
        {
          "wk": "11/09/2026",
          "mo": "Nov",
          "target": 5741467.44
        },
        {
          "wk": "11/16/2026",
          "mo": "Nov",
          "target": 5741467.44
        },
        {
          "wk": "11/23/2026",
          "mo": "Nov",
          "target": 5741467.44
        },
        {
          "wk": "11/30/2026",
          "mo": "Nov",
          "target": 5741467.44
        },
        {
          "wk": "12/07/2026",
          "mo": "Dec",
          "target": 5741467.44
        },
        {
          "wk": "12/14/2026",
          "mo": "Dec",
          "target": 5741467.44
        },
        {
          "wk": "12/21/2026",
          "mo": "Dec",
          "target": 5741467.44
        },
        {
          "wk": "12/28/2026",
          "mo": "Dec",
          "target": 5741467.44
        }
      ],
      "recent4WkAvg": 1317424.74
    },
    "budgetRecovery": {
      "fullYearBudget": 51673207,
      "sourceFile": "2026 Commercial Budget.xlsx",
      "totalToRecover": 0,
      "upliftPct": -61.5,
      "q1Budget": 4533497.2,
      "q1Actual": 5414371.34,
      "q1Shortfall": 880874.14,
      "aprilGap": 1583469.55,
      "aprilBudget": 3233126.48,
      "aprilFcst": 4816596.03,
      "adjWeeklySalesAvg": 476950.71,
      "origWeeklySalesAvg": 1239098.83,
      "salesDeltaPerWeek": -762148.13,
      "weeksRemaining": 9,
      "adjWeeklyProdAvg": 476950.71,
      "origWeeklyProdAvg": 1239098.83,
      "prodDeltaPerWeek": -762148.13,
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
          "deals": 386
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
          "deals": 712
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
          "deals": 672
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
          "deals": 478
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
          "deals": 429
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
          "deals": 540
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
          "deals": 615
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
          "deals": 592
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
          "deals": 476
        },
        {
          "mo": "Oct 2026",
          "monthIdx": 9,
          "origBudget": 7363288.71,
          "fcst": 7363288.71,
          "recovTarget": 8121463.42,
          "catchUp": 0,
          "status": "Actual",
          "liveActual": 8121463.42,
          "deals": 263
        },
        {
          "mo": "Nov 2026",
          "monthIdx": 10,
          "origBudget": 5872277.99,
          "fcst": 5872277.99,
          "recovTarget": 5872277.99,
          "catchUp": 0,
          "status": "Active",
          "deals": 1
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
          "recovTarget": 2087957.76,
          "original": 2319948,
          "delta": -231990.24
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 1353989.23,
          "original": 1504429.19,
          "delta": -150439.96
        },
        {
          "market": "Raleigh",
          "recovTarget": 1184302.69,
          "original": 1315889,
          "delta": -131586.31
        },
        {
          "market": "Cleveland",
          "recovTarget": 841831.67,
          "original": 935366.48,
          "delta": -93534.81
        },
        {
          "market": "Nashville",
          "recovTarget": 454472.45,
          "original": 504968.29,
          "delta": -50495.84
        },
        {
          "market": "Cincinnati",
          "recovTarget": 425290.56,
          "original": 472544.03,
          "delta": -47253.47
        },
        {
          "market": "DC Metro",
          "recovTarget": 237628.55,
          "original": 264031.14,
          "delta": -26402.6
        },
        {
          "market": "Dayton",
          "recovTarget": 95767.48,
          "original": 106408.08,
          "delta": -10640.6
        },
        {
          "market": "Richmond",
          "recovTarget": 87940.93,
          "original": 97711.93,
          "delta": -9771
        },
        {
          "market": "Indianapolis",
          "recovTarget": 55070.48,
          "original": 61189.29,
          "delta": -6118.81
        },
        {
          "market": "Knoxville",
          "recovTarget": 35096.16,
          "original": 38995.64,
          "delta": -3899.49
        },
        {
          "market": "NOVA",
          "recovTarget": 135,
          "original": 150,
          "delta": -15
        }
      ],
      "adjProdByMarket": [
        {
          "market": "Columbus",
          "recovTarget": 2087957.76,
          "original": 2319948,
          "delta": -231990.24
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 1353989.23,
          "original": 1504429.19,
          "delta": -150439.96
        },
        {
          "market": "Raleigh",
          "recovTarget": 1184302.69,
          "original": 1315889,
          "delta": -131586.31
        },
        {
          "market": "Cleveland",
          "recovTarget": 841831.67,
          "original": 935366.48,
          "delta": -93534.81
        },
        {
          "market": "Nashville",
          "recovTarget": 454472.45,
          "original": 504968.29,
          "delta": -50495.84
        },
        {
          "market": "Cincinnati",
          "recovTarget": 425290.56,
          "original": 472544.03,
          "delta": -47253.47
        },
        {
          "market": "DC Metro",
          "recovTarget": 237628.55,
          "original": 264031.14,
          "delta": -26402.6
        },
        {
          "market": "Dayton",
          "recovTarget": 95767.48,
          "original": 106408.08,
          "delta": -10640.6
        },
        {
          "market": "Richmond",
          "recovTarget": 87940.93,
          "original": 97711.93,
          "delta": -9771
        },
        {
          "market": "Indianapolis",
          "recovTarget": 55070.48,
          "original": 61189.29,
          "delta": -6118.81
        },
        {
          "market": "Knoxville",
          "recovTarget": 35096.16,
          "original": 38995.64,
          "delta": -3899.49
        },
        {
          "market": "NOVA",
          "recovTarget": 135,
          "original": 150,
          "delta": -15
        }
      ],
      "actualSource": "NetSuite AR · invoiced revenue",
      "netsuiteTotal": 47380650.65,
      "netsuiteInvoiceCount": 392,
      "netsuiteLatestDate": "2026-10-30"
    },
    "pathToPlan": null,
    "commentary": {
      "whatsWorking": [
        "Sales Trajectory: Monthly sales moved from January $3.82M to November $450 (-100%). Annualized run rate: $63.64M.",
        "Premium Deal Types: Insurance averages $658,377 per deal. Retail-Financing averages $32,200 (highest per-deal value). Retail-No Financing averages $7,301 (the volume engine).",
        "Sold Conversion: 5,164 of 5,164 signed contracts (100.0%) have made it to Sold status for $53.35M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Repair Rate Elevated: 91.6% of all deals are repairs (4,729 of 5,164). Repairs average ~$762, low value relative to installs at $114,889."
      ],
      "criticalRisks": [
        "Pipeline kickbacks company-wide: 0 kickbacks totaling $0."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 0d median close on 5,002 retail deals.",
        "Insurance Density: $658,377 avg on 24 deals = $15.80M; +20% lift = ~$3.16M.",
        "Financing Lifts Ticket: Retail-Financing averages $32,200, highest per-deal value."
      ],
      "fixList": [
        "Financing Push, 1 financing deals YTD (0.0%) at $32,200 avg. Target 15% mix."
      ],
      "actionPlan": {
        "thisWeek": [],
        "thisMonth": [
          "Supplement Escalation SOP, 7/14/30 day cadence with carrier escalation.",
          "Completed-to-Billing SLA, 100% invoiced within 21 days.",
          "Repair Triage Pilot in markets where repair rate exceeds 25%.",
          "Financing Training, peer training led by top financing reps. Target 15% mix."
        ],
        "thisQuarter": [
          "Add Kickback Reason field to accounting workflow.",
          "Repair Business Decision, 4,729 repairs YTD at ~$762 avg.",
          "Ops Capacity Planning, November hit 1 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "_source": "calculator/revenue-forecast-mf.js MF-v1.1-2026-05-04",
    "title": "Multi-Family Revenue Forecast",
    "subtitle": "MF-v1 · Job-by-job event model · Data through 2026-11-02",
    "runDate": "2026-11-02",
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
        "value": "$47.38M",
        "sub": "11 months elapsed"
      },
      {
        "label": "YTD vs Plan",
        "value": "+$2.73M",
        "sub": "Plan YTD: $44.65M",
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
        "value": "$52.46M",
        "sub": "YTD actual + remaining-month plan"
      },
      {
        "label": "Annual Budget",
        "value": "$51.67M",
        "sub": "2026 MF target"
      },
      {
        "label": "Forecast vs Budget",
        "value": "+$788K",
        "sub": "ahead of plan",
        "trend": "positive"
      },
      {
        "label": "Current WIP",
        "value": "$6.06M",
        "sub": "27 jobs in flight today"
      },
      {
        "label": "Last Month Revenue",
        "value": "$8.12M",
        "sub": "October 2026"
      }
    ],
    "execSummary": {
      "budget": 51673207,
      "modelAnnualInvoiced": 51687982.52727273,
      "gap": 788373.8011712432,
      "narrative": "11 months of FY2026 MF activity reported, $47.38M invoiced YTD. Run-rate annualizes to $51.69M against the $51.67M plan, a surplus."
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
        "wipChange": -1526666.9399999985,
        "netRevenue": 6026432.949999999,
        "startingCount": 50,
        "completingCount": 51,
        "plan": 5134896.622445581,
        "gap": 891536.3275544187
      },
      "sep": {
        "invoiced": 5942432.259999998,
        "wipChange": 453832.0500000017,
        "netRevenue": 5942432.259999998,
        "startingCount": 39,
        "completingCount": 41,
        "plan": 4305784.787290315,
        "gap": 1636647.4727096828
      },
      "oct": {
        "invoiced": 8121463.42,
        "wipChange": -264275.69999999925,
        "netRevenue": 8121463.42,
        "startingCount": 44,
        "completingCount": 48,
        "plan": 7086194.828295313,
        "gap": 1035268.5917046871
      },
      "nov": {
        "invoiced": 0,
        "wipChange": 930576.4,
        "netRevenue": 0,
        "startingCount": 5,
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
      "combinedGP": 26782721.269999992,
      "combinedGP_pct": 34.440117936381434,
      "combinedRevenue": 77766055.62000002,
      "y2025_GP_pct": 33.17695966570233,
      "y2025_revenue": 45086676.720000036,
      "y2025_jobs": 298,
      "y2026_GP_pct": 36.18285633941471,
      "y2026_revenue": 32679378.89999999,
      "y2026_jobs": 251,
      "materialCost": 26825544.950000007,
      "laborCost": 23526656.899999995,
      "otherCost": 623124.3299999996,
      "commissions": 221632.6399999997,
      "materialPctContract": 34.49518525290996,
      "laborPctContract": 30.25311842349551,
      "otherPctContract": 0.801280616629016,
      "commissionPctContract": 0.2849992046439858,
      "sourceFile": "GregProfitabilityMFResults-2026-11-02.csv",
      "jobsParsed": 549
    },
    "profitabilityByJobType": [
      {
        "key": "Retail",
        "jobs": 241,
        "revenue": 23342309.419999998,
        "expenses": 16246302.189999986,
        "gross_profit": 7096007.229999993,
        "material": 8745127.479999997,
        "labor": 7369098.6499999985,
        "other": 143945.37999999998,
        "commission": 18738.14,
        "contract": 23223349.329999994,
        "gp_pct": 30.39976508888208
      },
      {
        "key": "Insurance",
        "jobs": 10,
        "revenue": 9337069.479999999,
        "expenses": 4608743.989999999,
        "gross_profit": 4728325.49,
        "material": 2514547.69,
        "labor": 2033112.4799999997,
        "other": 40913.79,
        "commission": 0,
        "contract": 9342981.599999998,
        "gp_pct": 50.640358842012176
      }
    ],
    "profitabilityByMarket": [
      {
        "key": "Columbus",
        "jobs": 49,
        "revenue": 11412512.78,
        "expenses": 6435173.229999999,
        "gross_profit": 4977339.550000001,
        "material": 3469709.8000000007,
        "labor": 2867462.1999999997,
        "other": 89181.83000000002,
        "commission": 0,
        "contract": 11340797,
        "gp_pct": 43.613003077837526
      },
      {
        "key": "Detroit Metro",
        "jobs": 42,
        "revenue": 6658967.500000001,
        "expenses": 4680410.77,
        "gross_profit": 1978556.7300000004,
        "material": 2358125.53,
        "labor": 2272041.8799999994,
        "other": 47948.19,
        "commission": 558.73,
        "contract": 6624810.3100000005,
        "gp_pct": 29.71266536441273
      },
      {
        "key": "Raleigh",
        "jobs": 38,
        "revenue": 6179924.29,
        "expenses": 4360584.090000001,
        "gross_profit": 1819340.2000000004,
        "material": 2544877.730000001,
        "labor": 1809410.6299999997,
        "other": 905,
        "commission": 6643.9,
        "contract": 6179981.59,
        "gp_pct": 29.43952247026639
      },
      {
        "key": "Cleveland",
        "jobs": 65,
        "revenue": 4219115.8500000015,
        "expenses": 2529806.57,
        "gross_profit": 1689309.2800000007,
        "material": 1428345.69,
        "labor": 1067522.99,
        "other": 30241.010000000002,
        "commission": 0,
        "contract": 4217338.250000002,
        "gp_pct": 40.03941441901862
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
        "expenses": 681013.1599999999,
        "gross_profit": 362565.0700000001,
        "material": 282432.17999999993,
        "labor": 386811.26,
        "other": 11375.900000000001,
        "commission": 4481.38,
        "contract": 1039458.53,
        "gp_pct": 34.7424907474354
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
        "jobs": 9,
        "revenue": 361769.36,
        "expenses": 244251.15000000002,
        "gross_profit": 117518.21,
        "material": 147543,
        "labor": 96990.70999999999,
        "other": 4907.24,
        "commission": 0,
        "contract": 361769.36,
        "gp_pct": 32.48429054356621
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
          "jobs": 27,
          "value": 6062797.6899999995
        }
      ],
      "totalJobs": 27,
      "totalValue": 6062797.6899999995
    },
    "commentary": {
      "actionableRecommendations": [
        "Tracking ahead of plan by $788K."
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
            "$4.5M",
            "$5.28M",
            51,
            50
          ],
          [
            "September",
            "$5.94M",
            "$4.31M",
            "$1.64M",
            "$6.4M",
            "$6.52M",
            41,
            39
          ],
          [
            "October",
            "$8.12M",
            "$7.09M",
            "$1.04M",
            "$7.86M",
            "$5.13M",
            48,
            44
          ],
          [
            "November",
            "$0",
            "$5.65M",
            "$-5.65M",
            "$931K",
            "$6.06M",
            0,
            5
          ],
          [
            "December",
            "$0",
            "$5.08M",
            "$-5.08M",
            "$0",
            "$6.06M",
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
            "$8.12M",
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
            "$14.39M",
            "$1.06M",
            70
          ],
          [
            "Detroit",
            "$10.47M",
            "$0",
            71
          ],
          [
            "Raleigh",
            "$8.54M",
            "$41K",
            72
          ],
          [
            "Cleveland",
            "$4.77M",
            "$460K",
            91
          ],
          [
            "Cincinnati",
            "$2.07M",
            "$2.61M",
            48
          ],
          [
            "DC Metro",
            "$4.51M",
            "$161K",
            21
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
            "Richmond",
            "$389K",
            "$137K",
            11
          ],
          [
            "Dayton",
            "$451K",
            "$35K",
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
            "$207K",
            "$0",
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
            "$35.4M",
            358
          ],
          [
            "Insurance",
            "$10.27M",
            14
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
            "Job-119028",
            "Village at Cornerstone",
            "Detroit Metro",
            "$693K",
            "2026-10-15"
          ],
          [
            "Job-120658",
            "The Bray Company",
            "Columbus",
            "$420K",
            "2026-11-02"
          ],
          [
            "Job-122589",
            "Clayman Property Services",
            "Columbus",
            "$303K",
            "2026-10-26"
          ],
          [
            "Job-114174",
            "Sundance Property Management Inc",
            "Cincinnati",
            "$204K",
            "2026-08-21"
          ],
          [
            "Job-120506",
            "Associated Property Management, LLC",
            "Cleveland",
            "$176K",
            "2026-10-26"
          ],
          [
            "Job-118118",
            "Kare Condominium Management Company",
            "Cleveland",
            "$164K",
            "2026-11-01"
          ],
          [
            "Job-110180",
            "WPM Real Estate Management",
            "DC Metro",
            "$161K",
            "2026-10-12"
          ],
          [
            "Job-121480",
            "The Bray Company",
            "Columbus",
            "$152K",
            "2026-11-02"
          ],
          [
            "Job-121606",
            "Brooks Real Estate",
            "Richmond",
            "$137K",
            "2026-11-02"
          ],
          [
            "Job-101477",
            "Towne Properties - Cincinnati West District Office",
            "Cincinnati",
            "$110K",
            "2025-11-17"
          ],
          [
            "Job-119410",
            "Capital Property Solutions",
            "Columbus",
            "$99K",
            "2026-09-30"
          ],
          [
            "Job-115971",
            "Sentry Management - East Columbus",
            "Columbus",
            "$89K",
            "2026-10-11"
          ],
          [
            "Job-120329",
            "Towne Properties - East Cincinnati District Office",
            "Cincinnati",
            "$58K",
            "2026-11-02"
          ],
          [
            "Job-106353",
            "Towne Properties - Northern Kentucky",
            "Cincinnati",
            "$43K",
            "2026-10-13"
          ],
          [
            "Job-121152",
            "104 Osterville Drive",
            "Raleigh",
            "$41K",
            "2026-10-24"
          ],
          [
            "Job-115565",
            "Associated Property Management, LLC",
            "Cleveland",
            "$41K",
            "2026-10-24"
          ],
          [
            "Job-120517",
            "Associated Property Management, LLC",
            "Cleveland",
            "$38K",
            "2026-10-26"
          ],
          [
            "Job-119576",
            "Towne Properties - Dayton",
            "Dayton",
            "$35K",
            "2026-09-29"
          ],
          [
            "Job-118868",
            "Continental Management",
            "Cleveland",
            "$31K",
            "2026-10-29"
          ],
          [
            "Job-120331",
            "Towne Properties - East Cincinnati District Office",
            "Cincinnati",
            "$23K",
            "2026-10-31"
          ],
          [
            "Job-121309",
            "Towne Properties -  Central Cincinnati District Office",
            "Cincinnati",
            "$21K",
            "2026-10-30"
          ],
          [
            "Job-122366",
            "Nancy Haneberg",
            "Cleveland",
            "$8K",
            "2026-10-30"
          ],
          [
            "Job-123123",
            "Towne Properties - East Cincinnati District Office",
            "Cincinnati",
            "$6K",
            "2026-10-29"
          ],
          [
            "Job-122760",
            "Jeanette Doria",
            "Cleveland",
            "$2K",
            "2026-10-31"
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
                  8121463.42,
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
                  5275513.15,
                  6518991.840000001,
                  5132221.290000001,
                  6062797.6899999995,
                  6062797.6899999995
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
                  4499766.010000001,
                  6396264.31,
                  7857187.720000001,
                  930576.4,
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
                  8121463.42,
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
      8121463.42,
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
      8121463.42,
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
      5275513.15,
      6518991.840000001,
      5132221.290000001,
      6062797.6899999995,
      6062797.6899999995
    ],
    "tabs": []
  },
  "BACKLOG": {
    "_source": "calculator/backlog.js v1.0-rules-encoded",
    "title": "Job Backlog & Production",
    "subtitle": "Live job-level backlog",
    "headerMeta": {
      "totalJobs": 110,
      "totalWOs": 326,
      "portfolioValue": 18653031.53,
      "avgDaysInStatus": 51,
      "lastBuild": "2026-11-02T17:40:07.229Z"
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
        "value": "110",
        "sub": "326 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "24",
        "sub": "21.8% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "86",
        "sub": "78.2% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "3",
        "sub": "12.5% of In Progress",
        "tone": "crit"
      },
      {
        "label": "Avg Days in Status",
        "value": "51",
        "sub": "Job-level average",
        "tone": "warn"
      },
      {
        "label": "Total Portfolio Value",
        "value": "$18.65M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$7.19M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$140K",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "3",
        "sub": "12.5% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$140K",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "3",
        "sub": "Across 3 jobs",
        "tone": "info"
      },
      {
        "label": "RTS Ready Today",
        "value": "2",
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
        "value": "109",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "48",
        "sub": "44.0% of all holds",
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
        "value": "67d",
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
        "value": "$7.19M",
        "sub": "Sum of stale value across all reps",
        "tone": "crit"
      },
      {
        "label": "Reps with Stuck Work",
        "value": "13",
        "sub": "Reps carrying any >30d WO",
        "tone": "warn"
      },
      {
        "label": "Top Stuck Rep",
        "value": "$2.60M",
        "sub": "Highest single-rep stuck value",
        "tone": "warn"
      }
    ],
    "kpisBacklog": [
      {
        "label": "Not Started Jobs",
        "value": "86",
        "sub": "78.2% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$10.05M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "760d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Columbus",
        "sub": "19 jobs (22.1% of backlog)",
        "tone": "warn"
      }
    ],
    "charts": [
      {
        "id": "ch-wo-status",
        "labels": [
          "Scheduled",
          "On Hold",
          "In Progress",
          "Ready to Schedule",
          "Completed",
          "New"
        ],
        "datasets": [
          {
            "label": "Work Orders",
            "data": [
              120,
              109,
              54,
              27,
              8,
              8
            ]
          }
        ]
      },
      {
        "id": "ch-branch",
        "labels": [
          "Nashville",
          "Cincinnati",
          "Detroit Metro",
          "Raleigh",
          "Columbus",
          "Cleveland",
          "Dayton",
          "Richmond",
          "DC Metro",
          "Knoxville",
          "Indianapolis"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              0,
              1,
              0,
              0,
              6,
              1,
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
              7,
              17,
              19,
              2,
              4,
              6,
              1,
              2,
              4,
              0,
              0
            ]
          },
          {
            "label": "On Hold",
            "data": [
              0,
              13,
              24,
              22,
              18,
              9,
              6,
              3,
              4,
              7,
              3
            ]
          },
          {
            "label": "RTS",
            "data": [
              0,
              1,
              2,
              3,
              7,
              12,
              1,
              0,
              0,
              0,
              1
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              51,
              24,
              11,
              21,
              4,
              4,
              1,
              4,
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
          "In Progress",
          "Ready to Schedule",
          "Completed",
          "Scheduled",
          "New"
        ],
        "datasets": [
          {
            "label": "Avg Days",
            "data": [
              67,
              25,
              20,
              12,
              7,
              0
            ]
          },
          {
            "label": "Max Days",
            "data": [
              760,
              350,
              158,
              18,
              40,
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
              7,
              1,
              0,
              0,
              0,
              0
            ]
          },
          {
            "label": "Open",
            "data": [
              274,
              29,
              8,
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
          "Ready to Schedule",
          "On Hold"
        ],
        "datasets": [
          {
            "label": "WOs",
            "data": [
              2,
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
              1,
              0
            ]
          }
        ]
      },
      {
        "id": "ch-backlog",
        "labels": [
          "Columbus",
          "Detroit Metro",
          "Cleveland",
          "Raleigh",
          "Cincinnati",
          "Dayton",
          "DC Metro",
          "Richmond",
          "Indianapolis",
          "Knoxville",
          "Nashville"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              19,
              14,
              11,
              11,
              10,
              7,
              6,
              4,
              2,
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
            "Nashville",
            58,
            0,
            0,
            0,
            51,
            6,
            0,
            0,
            2,
            2620000
          ],
          [
            "Cincinnati",
            56,
            1,
            13,
            1,
            24,
            16,
            0,
            8,
            17,
            3052597.56
          ],
          [
            "Detroit Metro",
            56,
            0,
            24,
            2,
            11,
            18,
            0,
            4,
            16,
            5298419
          ],
          [
            "Raleigh",
            48,
            0,
            22,
            3,
            21,
            0,
            0,
            13,
            11,
            1981045
          ],
          [
            "Columbus",
            39,
            6,
            18,
            7,
            4,
            4,
            0,
            12,
            24,
            2151250.48
          ],
          [
            "Cleveland",
            32,
            1,
            9,
            12,
            4,
            6,
            0,
            5,
            17,
            1933453.99
          ],
          [
            "Dayton",
            9,
            0,
            6,
            1,
            1,
            1,
            0,
            0,
            8,
            271232
          ],
          [
            "Richmond",
            9,
            0,
            3,
            0,
            4,
            2,
            0,
            2,
            5,
            357709.5
          ],
          [
            "DC Metro",
            8,
            0,
            4,
            0,
            0,
            1,
            0,
            3,
            7,
            827449
          ],
          [
            "Knoxville",
            7,
            0,
            7,
            0,
            0,
            0,
            0,
            0,
            1,
            67959
          ],
          [
            "Indianapolis",
            4,
            0,
            3,
            1,
            0,
            0,
            0,
            1,
            2,
            91916
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
            48,
            42,
            760
          ],
          [
            "Pending Deposit",
            37,
            46,
            151
          ],
          [
            "Spring Hold",
            15,
            180,
            585
          ],
          [
            "(no sub-status)",
            5,
            80,
            196
          ],
          [
            "Pending HOA",
            2,
            89,
            137
          ],
          [
            "Pending Material",
            1,
            196,
            196
          ],
          [
            "Homeowner Request",
            1,
            101,
            101
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
            20917
          ],
          [
            "Other",
            1,
            1,
            30926
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
            13
          ],
          [
            "Ready to Schedule",
            6
          ],
          [
            "Scheduled",
            5
          ],
          [
            "In Progress",
            4
          ],
          [
            "Completed",
            1
          ],
          [
            "New",
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
            281,
            7,
            274,
            80,
            14722059.81
          ],
          [
            "Gutters",
            30,
            1,
            29,
            30,
            7111762.3
          ],
          [
            "Siding",
            8,
            0,
            8,
            8,
            2369414.42
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
            "Shawn Dunnigan - INACTIVE",
            16,
            3,
            2600000,
            7,
            1
          ],
          [
            "Mark Leedy",
            66,
            25,
            1877075,
            9,
            3
          ],
          [
            "Nicholas Andrukat",
            31,
            16,
            928332.42,
            5,
            1
          ],
          [
            "Micah Williamson",
            16,
            7,
            473615,
            4,
            1
          ],
          [
            "Marko Jovanovic",
            8,
            7,
            393255,
            4,
            1
          ],
          [
            "Courtney Lyon",
            24,
            6,
            226253,
            7,
            1
          ],
          [
            "Jason Crooke",
            9,
            5,
            185178.5,
            2,
            1
          ],
          [
            "Ron Saxe",
            23,
            10,
            177012,
            3,
            1
          ],
          [
            "Lisa Gibson",
            9,
            8,
            118901,
            4,
            3
          ],
          [
            "Christy Osborne",
            3,
            2,
            72360,
            2,
            1
          ],
          [
            "Aaron Ellis",
            8,
            2,
            67959,
            7,
            2
          ],
          [
            "Matthew Cooke",
            2,
            2,
            47687.35,
            1,
            1
          ],
          [
            "Todd Sandler",
            4,
            3,
            22123,
            1,
            1
          ],
          [
            "Josh Kennedy",
            58,
            2,
            0,
            0,
            2
          ],
          [
            "Cody Roberts",
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
            "Columbus",
            19,
            1088960.35,
            196
          ],
          [
            "Detroit Metro",
            14,
            3738416,
            497
          ],
          [
            "Cleveland",
            11,
            1481682.99,
            158
          ],
          [
            "Raleigh",
            11,
            1981045,
            20
          ],
          [
            "Cincinnati",
            10,
            474676,
            151
          ],
          [
            "Dayton",
            7,
            236722,
            101
          ],
          [
            "DC Metro",
            6,
            666029,
            760
          ],
          [
            "Richmond",
            4,
            221173.5,
            88
          ],
          [
            "Indianapolis",
            2,
            91916,
            21
          ],
          [
            "Knoxville",
            1,
            67959,
            103
          ],
          [
            "Nashville",
            1,
            5100,
            0
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
            760,
            69162
          ],
          [
            "Job-093347",
            "Comsource Management, Inc.",
            "DC Metro",
            "Roofing",
            "Spring Hold",
            "Marko Jovanovic",
            585,
            205493
          ],
          [
            "Job-098561",
            "Compass Management Professionals",
            "Detroit Metro",
            "Gutters",
            "Spring Hold",
            "Shawn Dunnigan - INACTIVE",
            497,
            866666
          ],
          [
            "Job-098563",
            "Compass Management Professionals",
            "Detroit Metro",
            "Roofing",
            "Spring Hold",
            "Shawn Dunnigan - INACTIVE",
            497,
            866667
          ],
          [
            "Job-111825",
            "Capital Property Solutions",
            "Columbus",
            "Gutters",
            "",
            "Ron Saxe",
            196,
            74242
          ],
          [
            "Job-112329",
            "Associated Property Management, LLC",
            "Cleveland",
            "Gutters",
            "",
            "Nicholas Andrukat",
            158,
            256141
          ],
          [
            "Job-114434",
            "John Hurley",
            "Cincinnati",
            "Roofing",
            "Pending Deposit",
            "Lisa Gibson",
            151,
            1800
          ],
          [
            "Job-115219",
            "Towne Properties - East Cincinnati District Office",
            "Cincinnati",
            "Gutters",
            "Pending HOA",
            "Mark Leedy",
            137,
            98128
          ],
          [
            "Job-117156",
            "Associa On Call Tennessee Knoxville",
            "Knoxville",
            "Roofing",
            "Pending Deposit",
            "Aaron Ellis",
            103,
            67959
          ],
          [
            "Job-117331",
            "Towne Properties - Dayton",
            "Dayton",
            "Gutters",
            "",
            "Mark Leedy",
            101,
            43988
          ],
          [
            "Job-117333",
            "Towne Properties - Dayton",
            "Dayton",
            "Gutters",
            "Homeowner Request",
            "Mark Leedy",
            101,
            40460
          ],
          [
            "Job-118193",
            "United Property Associates",
            "Richmond",
            "Roofing",
            "Pending Deposit",
            "Jason Crooke",
            88,
            168762.5
          ],
          [
            "Job-118820",
            "D. Bloomington, LLC",
            "Cincinnati",
            "Gutters",
            "Pending Deposit",
            "Lisa Gibson",
            81,
            18327
          ],
          [
            "Job-114967",
            "Piper Reality & Management",
            "Detroit Metro",
            "Other",
            "Pending Deposit",
            "Courtney Lyon",
            80,
            19233
          ],
          [
            "Job-119548",
            "Towne Properties - Dayton",
            "Dayton",
            "Roofing",
            "Pending Deposit",
            "Mark Leedy",
            69,
            16950
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Raleigh",
          "permits": 13
        },
        {
          "branch": "Columbus",
          "permits": 12
        },
        {
          "branch": "Cincinnati",
          "permits": 8
        },
        {
          "branch": "Cleveland",
          "permits": 5
        },
        {
          "branch": "Detroit Metro",
          "permits": 4
        },
        {
          "branch": "DC Metro",
          "permits": 3
        },
        {
          "branch": "Richmond",
          "permits": 2
        },
        {
          "branch": "Indianapolis",
          "permits": 1
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $140K of trapped partial-job revenue into billable revenue, reduce $7.19M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Dispatch the 2 RTS WOs sitting on partial jobs. No blocker, no hold, just dispatch.",
        "Gutters sweep: 1 open WOs across 1 partial jobs blocking $21K. Highest single-trade leverage in the book.",
        "Raleigh permit sweep: 13 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Gutters): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 86 jobs ($10.05M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $140K, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 08, 2026 - Oct 30, 2026 - De-Duplicated at Job Level - 377 Jobs - 11 Markets - 14 PMs",
    "generated": "2026-11-02",
    "headerMeta": {
      "trueRevenue": 46521685.22,
      "uniqueJobs": 377,
      "markets": 11,
      "pms": 14,
      "medianComplete": 58,
      "avgStart": 64,
      "multiTradeJobs": 44,
      "singleTradeJobs": 333,
      "multiTradePct": 11.7,
      "lastBuild": "2026-11-02T17:40:07.261Z"
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
        "value": "$46.52M",
        "sub": "377 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$123,400",
        "sub": "Per job (deduped)"
      },
      {
        "label": "Median Days to Complete",
        "value": "58.0d",
        "sub": "Job-level median"
      },
      {
        "label": "Avg Days to Start",
        "value": "64.0d",
        "sub": "Sale to crew on-site"
      },
      {
        "label": "Multi-Trade Jobs",
        "value": "44",
        "sub": "11.7% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "333",
        "sub": "88.3% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$272,216",
        "sub": "+162.4% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$103,736",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+19.6d",
        "sub": "MT 73.0d vs ST 53.4d"
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
        "rev": 4489988.77,
        "jobs": 51,
        "med": 64.6,
        "start": 58.3
      },
      {
        "m": "2026-09",
        "label": "September",
        "key": "2026-09",
        "rev": 5201963.26,
        "jobs": 41,
        "med": 64.6,
        "start": 66.3
      },
      {
        "m": "2026-10",
        "label": "October",
        "key": "2026-10",
        "rev": 9337971.42,
        "jobs": 48,
        "med": 57.6,
        "start": 60.9
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
              9337971.42
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
              48
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
              71.1,
              49.7,
              60.3,
              45.9,
              41.4,
              54,
              49.4,
              64.6,
              64.6,
              57.6
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
              66.3,
              60.9
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
              44
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              333
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
              35,
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
          "Cleveland",
          "DC Metro",
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
              22.2,
              11.3,
              4.7,
              1.2,
              41.2,
              20,
              0,
              0,
              10,
              0,
              33.3
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
          "Cleveland",
          "DC Metro",
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
              71.4,
              99.9,
              71.7,
              73.6,
              68.4,
              70.4,
              0,
              0,
              106.6,
              0,
              60.5
            ]
          },
          {
            "label": "ST Median",
            "data": [
              58.4,
              59.5,
              53.9,
              41.3,
              39,
              69.4,
              46.1,
              82.5,
              77.1,
              47.4,
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
          "Cleveland",
          "DC Metro",
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
              14465801.61,
              9724404.85,
              8490785.68,
              4682649.54,
              4506454.71,
              2101484.31,
              1237498.08,
              451019,
              388772.25,
              250593,
              222222.19
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
          "Cleveland",
          "DC Metro",
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
              61.4,
              64.6,
              54.4,
              41.3,
              48.5,
              70.4,
              46.1,
              82.5,
              82.6,
              47.4,
              34.9
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
          "Jeremy Wolfe",
          "(Unassigned)",
          "Rob Vanderlinden",
          "Daniel Wallace",
          "Jordan Pyle",
          "Shawn Marlow",
          "Mike Scott",
          "Justin Milliron"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              12962756.73,
              8250923.51,
              6461683.94,
              4593791,
              2584083.23,
              2296576.93,
              1738947.61,
              1376691.69,
              1039635.35,
              1019570.44,
              789880,
              373557.37,
              152753.07,
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
          "Jeremy Wolfe",
          "(Unassigned)",
          "Rob Vanderlinden",
          "Daniel Wallace",
          "Jordan Pyle",
          "Shawn Marlow",
          "Mike Scott",
          "Justin Milliron"
        ],
        "datasets": [
          {
            "label": "PMs",
            "data": [
              {
                "x": 59.5,
                "y": 12962756.73,
                "wos": 371,
                "name": "Brian Walker"
              },
              {
                "x": 67.6,
                "y": 8250923.51,
                "wos": 187,
                "name": "Ryan Wolf"
              },
              {
                "x": 61.1,
                "y": 6461683.94,
                "wos": 191,
                "name": "Bryan Paquin-INACTIVE"
              },
              {
                "x": 48.4,
                "y": 4593791,
                "wos": 148,
                "name": "James Foky"
              },
              {
                "x": 70.4,
                "y": 2584083.23,
                "wos": 106,
                "name": "Wayne Iles"
              },
              {
                "x": 48.5,
                "y": 2296576.93,
                "wos": 45,
                "name": "Erik Patla"
              },
              {
                "x": 60.3,
                "y": 1738947.61,
                "wos": 29,
                "name": "Jeremy Wolfe"
              },
              {
                "x": 42.5,
                "y": 1376691.69,
                "wos": 61,
                "name": "(Unassigned)"
              },
              {
                "x": 90.5,
                "y": 1039635.35,
                "wos": 9,
                "name": "Rob Vanderlinden"
              },
              {
                "x": 43.5,
                "y": 1019570.44,
                "wos": 49,
                "name": "Daniel Wallace"
              },
              {
                "x": 52.6,
                "y": 789880,
                "wos": 21,
                "name": "Jordan Pyle"
              },
              {
                "x": 64.4,
                "y": 373557.37,
                "wos": 9,
                "name": "Shawn Marlow"
              },
              {
                "x": 72.6,
                "y": 152753.07,
                "wos": 5,
                "name": "Mike Scott"
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
              41587273.84,
              2916550.84,
              1088010.8,
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
              63.6,
              68.4,
              94.3,
              0,
              132.5,
              64
            ]
          }
        ]
      },
      {
        "id": "ch_cb_vol",
        "labels": [
          "Lisa Gibson",
          "RaShauna Watts-INACTIVE",
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
              258,
              110,
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
          "RaShauna Watts-INACTIVE",
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
              60.5,
              50.1,
              351.4,
              147.5,
              17.4,
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
          "RaShauna Watts-INACTIVE",
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
              12.8,
              10,
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
          "RaShauna Watts-INACTIVE",
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
                "x": 60.5,
                "y": 145069.49,
                "jobs": 258,
                "name": "Lisa Gibson"
              },
              {
                "x": 50.1,
                "y": 76221.04,
                "jobs": 110,
                "name": "RaShauna Watts-INACTIVE"
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
                "x": 17.4,
                "y": 7236,
                "jobs": 1,
                "name": "Katelyn Stewart"
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
            63,
            14465801.61,
            229615.9,
            61.4,
            54,
            22.2,
            71.4,
            58.4
          ],
          [
            "Detroit Metro",
            71,
            9724404.85,
            136963.45,
            64.6,
            74.8,
            11.3,
            99.9,
            59.5
          ],
          [
            "Raleigh",
            64,
            8490785.68,
            132668.53,
            54.4,
            63.3,
            4.7,
            71.7,
            53.9
          ],
          [
            "Cleveland",
            82,
            4682649.54,
            57105.48,
            41.3,
            58.3,
            1.2,
            73.6,
            41.3
          ],
          [
            "DC Metro",
            17,
            4506454.71,
            265085.57,
            48.5,
            50.6,
            41.2,
            68.4,
            39
          ],
          [
            "Cincinnati",
            40,
            2101484.31,
            52537.11,
            70.4,
            78.2,
            20,
            70.4,
            69.4
          ],
          [
            "Nashville",
            14,
            1237498.08,
            88392.72,
            46.1,
            48.9,
            0,
            0,
            46.1
          ],
          [
            "Dayton",
            7,
            451019,
            64431.29,
            82.5,
            94,
            0,
            0,
            82.5
          ],
          [
            "Richmond",
            10,
            388772.25,
            38877.23,
            82.6,
            76.4,
            10,
            106.6,
            77.1
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
            "Knoxville",
            6,
            222222.19,
            37037.03,
            34.9,
            32.4,
            33.3,
            60.5,
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
            371,
            54,
            12962756.73,
            34940.05,
            59.5,
            51.7
          ],
          [
            "Ryan Wolf",
            187,
            57,
            8250923.51,
            44122.59,
            67.6,
            74.6
          ],
          [
            "Bryan Paquin-INACTIVE",
            191,
            54,
            6461683.94,
            33830.81,
            61.1,
            65.6
          ],
          [
            "James Foky",
            148,
            69,
            4593791,
            31039.13,
            48.4,
            59.8
          ],
          [
            "Wayne Iles",
            106,
            46,
            2584083.23,
            24378.14,
            70.4,
            80.8
          ],
          [
            "Erik Patla",
            45,
            15,
            2296576.93,
            51035.04,
            48.5,
            54
          ],
          [
            "Jeremy Wolfe",
            29,
            13,
            1738947.61,
            59963.71,
            60.3,
            63.6
          ],
          [
            "(Unassigned)",
            61,
            51,
            1376691.69,
            22568.72,
            42.5,
            51
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
            49,
            3,
            1019570.44,
            20807.56,
            43.5,
            32.4
          ],
          [
            "Jordan Pyle",
            21,
            5,
            789880,
            37613.33,
            52.6,
            49.4
          ],
          [
            "Shawn Marlow",
            9,
            8,
            373557.37,
            41506.37,
            64.4,
            53.9
          ],
          [
            "Mike Scott",
            5,
            4,
            152753.07,
            30550.61,
            72.6,
            32
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
            1150,
            41587273.84,
            36162.85,
            63.6
          ],
          [
            "Gutters",
            74,
            2916550.84,
            39412.85,
            68.4
          ],
          [
            "Siding",
            19,
            1088010.8,
            57263.73,
            94.3
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
            132.5
          ],
          [
            "Other",
            6,
            156646.03,
            26107.67,
            64
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
            258,
            37427929.34,
            145069.49,
            "60.5d",
            "65.8d",
            12.8,
            145069.49
          ],
          [
            "RaShauna Watts-INACTIVE",
            110,
            8384313.89,
            76221.04,
            "50.1d",
            "58.3d",
            10,
            76221.04
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
            "Katelyn Stewart",
            1,
            7236,
            7236,
            "17.4d",
            "13.3d",
            0,
            7236
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
            34,
            63,
            40,
            8,
            6,
            51,
            1,
            1,
            9,
            37,
            8,
            258
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
            "RaShauna Watts-INACTIVE",
            5,
            19,
            21,
            8,
            1,
            19,
            2,
            5,
            5,
            23,
            2,
            110
          ],
          [
            "Total",
            40,
            82,
            63,
            17,
            7,
            71,
            3,
            6,
            14,
            64,
            10,
            377
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Multi-trade penalty is severe in 2 markets: Detroit Metro MT 99.9d vs ST 59.5d, Cleveland MT 73.6d vs ST 41.3d.",
        "Days to Start averages 64.0 days company-wide and 78.2 days in Cincinnati (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [
        "RaShauna Watts-INACTIVE creates 110 jobs at $76,221 average contract and 10.0% multi-trade attach, well below the top creator."
      ],
      "positivesToBuildOn": [
        "October delivered $9.34M across 48 invoiced jobs at 57.6-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "Cleveland hits 41.3-day median complete and a $57,105 average contract on 82 jobs.",
        "Multi-trade jobs carry a $272,216 average contract versus $103,736 for single-trade, a 162% revenue lift per job."
      ]
    }
  }
};
