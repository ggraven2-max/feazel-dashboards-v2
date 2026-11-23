/* AUTO-GENERATED — do not edit. Generated 2026-11-23T14:04:29.894Z (multi-family) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-11-23T14:04:29.894Z",
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
        "elapsedMs": 226,
        "builtAt": "2026-11-23T14:04:29.894Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 119,
        "builtAt": "2026-11-23T14:04:29.894Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 9,
        "builtAt": "2026-11-23T14:04:29.894Z"
      },
      {
        "id": "installs-ytd",
        "version": "1.0-rules-encoded",
        "elapsedMs": 36,
        "builtAt": "2026-11-23T14:04:29.894Z"
      }
    ]
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-11-20",
    "ytdDays": 326,
    "rowCount": 5439,
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
        "value": "$56.19M",
        "sub": "5,439 signed contracts across 12 markets"
      },
      {
        "label": "Sold",
        "value": "$56.19M",
        "sub": "5,438 deals | 100.0% of signed contracts"
      },
      {
        "label": "Production Review",
        "value": "$300",
        "sub": "1 deals | Ops Review, PM Review, Contracted"
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
        "value": "$10,332",
        "sub": "Median: $350 | Install avg: $114,093"
      },
      {
        "label": "Organization",
        "value": "44 Reps",
        "sub": "12 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$62.92M",
        "sub": "Based on 326 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "8.4% / 91.5%",
        "sub": "459 installs | 4,978 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 5438,
        "amount": 56192951.2
      },
      {
        "label": "Production Review",
        "count": 1,
        "amount": 300
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
        "amount": 4286391,
        "installs": 35,
        "repairs": 394,
        "avgDeal": 9992,
        "repairPct": 91.8,
        "installAvg": 114366,
        "repairAvg": 720
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
        "count": 616,
        "amount": 7796736.23,
        "installs": 48,
        "repairs": 568,
        "avgDeal": 12657,
        "repairPct": 92.2,
        "installAvg": 153551,
        "repairAvg": 750
      },
      {
        "key": "2026-08",
        "label": "August",
        "count": 590,
        "amount": 8659492.27,
        "installs": 41,
        "repairs": 549,
        "avgDeal": 14677,
        "repairPct": 93.1,
        "installAvg": 200659,
        "repairAvg": 788
      },
      {
        "key": "2026-09",
        "label": "September",
        "count": 498,
        "amount": 4096746.9,
        "installs": 47,
        "repairs": 450,
        "avgDeal": 8226,
        "repairPct": 90.4,
        "installAvg": 78334,
        "repairAvg": 920
      },
      {
        "key": "2026-10",
        "label": "October",
        "count": 370,
        "amount": 5991092.92,
        "installs": 39,
        "repairs": 331,
        "avgDeal": 16192,
        "repairPct": 89.5,
        "installAvg": 145799,
        "repairAvg": 921
      },
      {
        "key": "2026-11",
        "label": "November",
        "count": 148,
        "amount": 2612115.95,
        "installs": 24,
        "repairs": 124,
        "avgDeal": 17649,
        "repairPct": 83.8,
        "installAvg": 104411,
        "repairAvg": 857
      }
    ],
    "jobTypeMixByMonth": {
      "Retail-No Financing": {
        "2026-01": 2576027.32,
        "2026-02": 2783148.94,
        "2026-03": 3748553.84,
        "2026-04": 6639883.11,
        "2026-05": 3591643.65,
        "2026-06": 3816270.53,
        "2026-07": 3963633.77,
        "2026-08": 4825361.17,
        "2026-09": 2420975.99,
        "2026-10": 3376192.92,
        "2026-11": 2403416.96
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
        "2026-11": 182606.99
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
        "2026-11": 25792
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Retail-No Financing",
        "count": 5410,
        "amount": 40145108.2,
        "avg": 7421
      },
      {
        "jobType": "Insurance",
        "count": 25,
        "amount": 15983663,
        "avg": 639347
      },
      {
        "jobType": "Retail-Financing",
        "count": 2,
        "amount": 57992,
        "avg": 28996
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
        "amount": 1582830.29
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
        "count": 130,
        "amount": 3239234.83
      },
      {
        "w": 32,
        "count": 104,
        "amount": 2157651.55
      },
      {
        "w": 33,
        "count": 175,
        "amount": 1635263.55
      },
      {
        "w": 34,
        "count": 153,
        "amount": 3119327.41
      },
      {
        "w": 35,
        "count": 140,
        "amount": 1736272.76
      },
      {
        "w": 36,
        "count": 101,
        "amount": 1516628.37
      },
      {
        "w": 37,
        "count": 99,
        "amount": 1216051.05
      },
      {
        "w": 38,
        "count": 145,
        "amount": 724258.91
      },
      {
        "w": 39,
        "count": 117,
        "amount": 570475.63
      },
      {
        "w": 40,
        "count": 97,
        "amount": 150534.82
      },
      {
        "w": 41,
        "count": 92,
        "amount": 449175.97
      },
      {
        "w": 42,
        "count": 92,
        "amount": 855363.73
      },
      {
        "w": 43,
        "count": 75,
        "amount": 3329996.56
      },
      {
        "w": 44,
        "count": 67,
        "amount": 1285981.78
      },
      {
        "w": 45,
        "count": 67,
        "amount": 736148.81
      },
      {
        "w": 46,
        "count": 53,
        "amount": 1414802.73
      },
      {
        "w": 47,
        "count": 28,
        "amount": 461164.41
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
          16726101.48,
          1648,
          10149,
          85,
          1563,
          94.8,
          0
        ],
        [
          "Detroit Metro",
          10661946.31,
          1004,
          10619,
          70,
          934,
          93,
          0
        ],
        [
          "Raleigh",
          10190271.44,
          1090,
          9349,
          72,
          1017,
          93.3,
          0
        ],
        [
          "Cleveland",
          6698283.22,
          431,
          15541,
          100,
          331,
          76.8,
          0
        ],
        [
          "Nashville",
          4248386.98,
          163,
          26064,
          19,
          144,
          88.3,
          0
        ],
        [
          "Cincinnati",
          3534899.22,
          673,
          5252,
          44,
          629,
          93.5,
          0
        ],
        [
          "DC Metro",
          1854398,
          202,
          9180,
          21,
          180,
          89.1,
          0
        ],
        [
          "Dayton",
          745906.55,
          120,
          6216,
          15,
          105,
          87.5,
          0
        ],
        [
          "Richmond",
          690983.5,
          52,
          13288,
          15,
          37,
          71.2,
          0
        ],
        [
          "Indianapolis",
          536643,
          40,
          13416,
          8,
          32,
          80,
          0
        ],
        [
          "Knoxville",
          304381.5,
          13,
          23414,
          10,
          3,
          23.1,
          13
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
        "amount": 8190156.54,
        "count": 26,
        "avg": 315006,
        "medDays": 64,
        "jt": {
          "Retail-No Financing": 17,
          "Insurance": 9
        },
        "installs": 19,
        "repairs": 7
      },
      {
        "name": "Micah Williamson",
        "amount": 7016429,
        "count": 111,
        "avg": 63211,
        "medDays": 8,
        "jt": {
          "Retail-No Financing": 111
        },
        "installs": 40,
        "repairs": 71
      },
      {
        "name": "Evan Hall",
        "amount": 6901726.44,
        "count": 63,
        "avg": 109551,
        "medDays": 69,
        "jt": {
          "Retail-No Financing": 63
        },
        "installs": 57,
        "repairs": 5
      },
      {
        "name": "Nicholas Andrukat",
        "amount": 6406615.63,
        "count": 99,
        "avg": 64713,
        "medDays": 39,
        "jt": {
          "Retail-No Financing": 91,
          "Insurance": 7,
          "LowMar": 1
        },
        "installs": 92,
        "repairs": 7
      },
      {
        "name": "Mark Leedy",
        "amount": 4436980.22,
        "count": 83,
        "avg": 53458,
        "medDays": 24,
        "jt": {
          "Retail-No Financing": 80,
          "Retail-Financing": 1,
          "Insurance": 2
        },
        "installs": 65,
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
        "amount": 3329053,
        "count": 3,
        "avg": 1109684,
        "medDays": 890,
        "jt": {
          "Insurance": 2,
          "Retail-No Financing": 1
        },
        "installs": 3,
        "repairs": 0
      },
      {
        "name": "Todd Sandler",
        "amount": 2976970.71,
        "count": 20,
        "avg": 148849,
        "medDays": 55,
        "jt": {
          "Retail-No Financing": 18,
          "Insurance": 2
        },
        "installs": 17,
        "repairs": 3
      },
      {
        "name": "Courtney Lyon",
        "amount": 2665399,
        "count": 27,
        "avg": 98718,
        "medDays": 111,
        "jt": {
          "Retail-No Financing": 27
        },
        "installs": 24,
        "repairs": 3
      },
      {
        "name": "Kristi Mitchell",
        "amount": 2162417,
        "count": 937,
        "avg": 2308,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 937
        },
        "installs": 8,
        "repairs": 929
      },
      {
        "name": "Aaron Ellis",
        "amount": 1879477.48,
        "count": 29,
        "avg": 64810,
        "medDays": 30,
        "jt": {
          "Retail-No Financing": 29
        },
        "installs": 26,
        "repairs": 3
      },
      {
        "name": "Marko Jovanovic",
        "amount": 1816173,
        "count": 154,
        "avg": 11793,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 154
        },
        "installs": 20,
        "repairs": 133
      },
      {
        "name": "Allyson Lepage",
        "amount": 1127521.95,
        "count": 1825,
        "avg": 618,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 1825
        },
        "installs": 0,
        "repairs": 1825
      },
      {
        "name": "Nick Warmath",
        "amount": 948940,
        "count": 3,
        "avg": 316313,
        "medDays": 46,
        "jt": {
          "Retail-No Financing": 3
        },
        "installs": 3,
        "repairs": 0
      },
      {
        "name": "Jason Crooke",
        "amount": 663638.5,
        "count": 25,
        "avg": 26546,
        "medDays": 12,
        "jt": {
          "Retail-No Financing": 25
        },
        "installs": 15,
        "repairs": 10
      },
      {
        "name": "Katelyn Stewart",
        "amount": 375478.38,
        "count": 603,
        "avg": 623,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 603
        },
        "installs": 0,
        "repairs": 603
      },
      {
        "name": "Matthew Cooke",
        "amount": 215742.35,
        "count": 9,
        "avg": 23971,
        "medDays": 13,
        "jt": {
          "Retail-No Financing": 8,
          "Insurance": 1
        },
        "installs": 7,
        "repairs": 2
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
        "name": "Morgan Valois",
        "amount": 110708.99,
        "count": 186,
        "avg": 595,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 186
        },
        "installs": 0,
        "repairs": 186
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
        "repairs": 1825,
        "deals": 1825,
        "pct": 100
      },
      {
        "name": "Katelyn Stewart",
        "repairs": 603,
        "deals": 603,
        "pct": 100
      },
      {
        "name": "Morgan Valois",
        "repairs": 186,
        "deals": 186,
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
          "value": "148 days",
          "sub": "Median | Mean: 390 days"
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
          "count": 5270
        },
        {
          "label": "Retail-Fin",
          "median": 0,
          "mean": 0,
          "count": 0
        },
        {
          "label": "Insurance",
          "median": 148,
          "mean": 390,
          "count": 19
        },
        {
          "label": "Repair",
          "median": 0,
          "mean": 1,
          "count": 4943
        },
        {
          "label": "Install",
          "median": 52,
          "mean": 123,
          "count": 346
        }
      ],
      "byMarket": [
        {
          "market": "Nashville",
          "median": 0,
          "mean": 13,
          "count": 161
        },
        {
          "market": "Richmond",
          "median": 0,
          "mean": 18,
          "count": 49
        },
        {
          "market": "Raleigh",
          "median": 0,
          "mean": 9,
          "count": 1085
        },
        {
          "market": "Cincinnati",
          "median": 0,
          "mean": 3,
          "count": 648
        },
        {
          "market": "Columbus",
          "median": 0,
          "mean": 10,
          "count": 1613
        },
        {
          "market": "Detroit Metro",
          "median": 0,
          "mean": 7,
          "count": 980
        },
        {
          "market": "DC Metro",
          "median": 0,
          "mean": 11,
          "count": 198
        },
        {
          "market": "Cleveland",
          "median": 0,
          "mean": 12,
          "count": 387
        },
        {
          "market": "Indianapolis",
          "median": 0,
          "mean": 15,
          "count": 39
        },
        {
          "market": "Dayton",
          "median": 0,
          "mean": 5,
          "count": 116
        },
        {
          "market": "Knoxville",
          "median": 13,
          "mean": 58,
          "count": 12
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
          "total": 1708966.2,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 35.1
        },
        {
          "market": "Detroit Metro",
          "total": 1089369.57,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 21.4
        },
        {
          "market": "Raleigh",
          "total": 1041176.84,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 23.2
        },
        {
          "market": "Cleveland",
          "total": 684387.79,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 9.2
        },
        {
          "market": "Nashville",
          "total": 434073.04,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 3.5
        },
        {
          "market": "Cincinnati",
          "total": 361173.42,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 14.3
        },
        {
          "market": "DC Metro",
          "total": 189470.54,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 4.3
        },
        {
          "market": "Dayton",
          "total": 76211.97,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 2.6
        },
        {
          "market": "Richmond",
          "total": 70600.28,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.1
        },
        {
          "market": "Indianapolis",
          "total": 54830.75,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.9
        },
        {
          "market": "Knoxville",
          "total": 31099.76,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.3
        },
        {
          "market": "NOVA",
          "total": 107.28,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.1
        }
      ],
      "weekSchedule": [
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
      "recent4WkAvg": 974524.43
    },
    "budgetRecovery": {
      "fullYearBudget": 51673207,
      "sourceFile": "2026 Commercial Budget.xlsx",
      "totalToRecover": 0,
      "upliftPct": -61.6,
      "q1Budget": 4533497.2,
      "q1Actual": 5414371.34,
      "q1Shortfall": 880874.14,
      "aprilGap": 1583469.55,
      "aprilBudget": 3233126.48,
      "aprilFcst": 4816596.03,
      "adjWeeklySalesAvg": 475789.59,
      "origWeeklySalesAvg": 1239098.83,
      "salesDeltaPerWeek": -763309.24,
      "weeksRemaining": 9,
      "adjWeeklyProdAvg": 475789.59,
      "origWeeklyProdAvg": 1239098.83,
      "prodDeltaPerWeek": -763309.24,
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
          "deals": 616
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
          "deals": 590
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
          "deals": 498
        },
        {
          "mo": "Oct 2026",
          "monthIdx": 9,
          "origBudget": 7363288.71,
          "fcst": 7363288.71,
          "recovTarget": 8131913.42,
          "catchUp": 0,
          "status": "Actual",
          "liveActual": 8131913.42,
          "deals": 370
        },
        {
          "mo": "Nov 2026",
          "monthIdx": 10,
          "origBudget": 5872277.99,
          "fcst": 5872277.99,
          "recovTarget": 5872277.99,
          "catchUp": 0,
          "status": "Active",
          "liveActual": 2970590.33,
          "deals": 148
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
          "recovTarget": 2162241.63,
          "original": 2389443.07,
          "delta": -227201.44
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 1378307.08,
          "original": 1523135.19,
          "delta": -144828.11
        },
        {
          "market": "Raleigh",
          "recovTarget": 1317332.02,
          "original": 1455753.06,
          "delta": -138421.04
        },
        {
          "market": "Cleveland",
          "recovTarget": 865910.49,
          "original": 956897.6,
          "delta": -90987.11
        },
        {
          "market": "Nashville",
          "recovTarget": 549203.84,
          "original": 606912.43,
          "delta": -57708.59
        },
        {
          "market": "Cincinnati",
          "recovTarget": 456968.78,
          "original": 504985.6,
          "delta": -48016.82
        },
        {
          "market": "DC Metro",
          "recovTarget": 239724.51,
          "original": 264914,
          "delta": -25189.49
        },
        {
          "market": "Dayton",
          "recovTarget": 96425.95,
          "original": 106558.08,
          "delta": -10132.13
        },
        {
          "market": "Richmond",
          "recovTarget": 89325.85,
          "original": 98711.93,
          "delta": -9386.08
        },
        {
          "market": "Indianapolis",
          "recovTarget": 69373.72,
          "original": 76663.29,
          "delta": -7289.57
        },
        {
          "market": "Knoxville",
          "recovTarget": 39348.46,
          "original": 43483.07,
          "delta": -4134.61
        },
        {
          "market": "NOVA",
          "recovTarget": 135.74,
          "original": 150,
          "delta": -14.26
        }
      ],
      "adjProdByMarket": [
        {
          "market": "Columbus",
          "recovTarget": 2162241.63,
          "original": 2389443.07,
          "delta": -227201.44
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 1378307.08,
          "original": 1523135.19,
          "delta": -144828.11
        },
        {
          "market": "Raleigh",
          "recovTarget": 1317332.02,
          "original": 1455753.06,
          "delta": -138421.04
        },
        {
          "market": "Cleveland",
          "recovTarget": 865910.49,
          "original": 956897.6,
          "delta": -90987.11
        },
        {
          "market": "Nashville",
          "recovTarget": 549203.84,
          "original": 606912.43,
          "delta": -57708.59
        },
        {
          "market": "Cincinnati",
          "recovTarget": 456968.78,
          "original": 504985.6,
          "delta": -48016.82
        },
        {
          "market": "DC Metro",
          "recovTarget": 239724.51,
          "original": 264914,
          "delta": -25189.49
        },
        {
          "market": "Dayton",
          "recovTarget": 96425.95,
          "original": 106558.08,
          "delta": -10132.13
        },
        {
          "market": "Richmond",
          "recovTarget": 89325.85,
          "original": 98711.93,
          "delta": -9386.08
        },
        {
          "market": "Indianapolis",
          "recovTarget": 69373.72,
          "original": 76663.29,
          "delta": -7289.57
        },
        {
          "market": "Knoxville",
          "recovTarget": 39348.46,
          "original": 43483.07,
          "delta": -4134.61
        },
        {
          "market": "NOVA",
          "recovTarget": 135.74,
          "original": 150,
          "delta": -14.26
        }
      ],
      "actualSource": "NetSuite AR · invoiced revenue",
      "netsuiteTotal": 50361690.98,
      "netsuiteInvoiceCount": 423,
      "netsuiteLatestDate": "2026-11-20"
    },
    "pathToPlan": null,
    "commentary": {
      "whatsWorking": [
        "Sales Trajectory: Monthly sales moved from January $3.82M to November $2.61M (-32%). Annualized run rate: $62.92M.",
        "Premium Deal Types: Insurance averages $639,347 per deal. Retail-Financing averages $28,996 (highest per-deal value). Retail-No Financing averages $7,421 (the volume engine).",
        "Sold Conversion: 5,438 of 5,439 signed contracts (100.0%) have made it to Sold status for $56.19M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Production Review Queue: 1 deals worth $300 sitting in Production Review. Watch for backlog growth, it delays revenue recognition.",
        "Repair Rate Elevated: 91.5% of all deals are repairs (4,978 of 5,439). Repairs average ~$768, low value relative to installs at $114,093."
      ],
      "criticalRisks": [
        "Pipeline kickbacks company-wide: 0 kickbacks totaling $0.",
        "Production Review backlog: 1 deals ($300)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 0d median close on 5,270 retail deals.",
        "Insurance Density: $639,347 avg on 25 deals = $15.98M; +20% lift = ~$3.20M.",
        "November repair rate at 83.8% vs YTD 91.5%, correction in latest month.",
        "Financing Lifts Ticket: Retail-Financing averages $28,996, highest per-deal value."
      ],
      "fixList": [
        "Production Review Bottleneck, 1 deals; add temporary PM capacity.",
        "Financing Push, 2 financing deals YTD (0.0%) at $28,996 avg. Target 15% mix."
      ],
      "actionPlan": {
        "thisWeek": [
          "Production Review Surge Plan, 1 deals ($300) in queue."
        ],
        "thisMonth": [
          "Supplement Escalation SOP, 7/14/30 day cadence with carrier escalation.",
          "Completed-to-Billing SLA, 100% invoiced within 21 days.",
          "Repair Triage Pilot in markets where repair rate exceeds 25%.",
          "Financing Training, peer training led by top financing reps. Target 15% mix."
        ],
        "thisQuarter": [
          "Add Kickback Reason field to accounting workflow.",
          "Repair Business Decision, 4,978 repairs YTD at ~$768 avg.",
          "Ops Capacity Planning, November hit 148 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "_source": "calculator/revenue-forecast-mf.js MF-v1.1-2026-05-04",
    "title": "Multi-Family Revenue Forecast",
    "subtitle": "MF-v1 · Job-by-job event model · Data through 2026-11-23",
    "runDate": "2026-11-23",
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
        "value": "$50.36M",
        "sub": "11 months elapsed"
      },
      {
        "label": "YTD vs Plan",
        "value": "+$5.71M",
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
        "value": "$55.44M",
        "sub": "YTD actual + remaining-month plan"
      },
      {
        "label": "Annual Budget",
        "value": "$51.67M",
        "sub": "2026 MF target"
      },
      {
        "label": "Forecast vs Budget",
        "value": "+$3.77M",
        "sub": "ahead of plan",
        "trend": "positive"
      },
      {
        "label": "Current WIP",
        "value": "$5.32M",
        "sub": "30 jobs in flight today"
      },
      {
        "label": "Last Month Revenue",
        "value": "$8.13M",
        "sub": "October 2026"
      }
    ],
    "execSummary": {
      "budget": 51673207,
      "modelAnnualInvoiced": 54940026.52363637,
      "gap": 3769414.1311712414,
      "narrative": "11 months of FY2026 MF activity reported, $50.36M invoiced YTD. Run-rate annualizes to $54.94M against the $51.67M plan, a surplus."
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
        "wipChange": -1439682.7799999984,
        "netRevenue": 6026432.949999999,
        "startingCount": 50,
        "completingCount": 51,
        "plan": 5134896.622445581,
        "gap": 891536.3275544187
      },
      "sep": {
        "invoiced": 5942432.259999998,
        "wipChange": 424199.8500000015,
        "netRevenue": 5942432.259999998,
        "startingCount": 39,
        "completingCount": 41,
        "plan": 4305784.787290315,
        "gap": 1636647.4727096828
      },
      "oct": {
        "invoiced": 8131913.42,
        "wipChange": -245376.95000000112,
        "netRevenue": 8131913.42,
        "startingCount": 43,
        "completingCount": 48,
        "plan": 7086194.828295313,
        "gap": 1045718.5917046871
      },
      "nov": {
        "invoiced": 2970590.3299999996,
        "wipChange": 104467.45000000065,
        "netRevenue": 2970590.3299999996,
        "startingCount": 39,
        "completingCount": 32,
        "plan": 5651293.539092463,
        "gap": -2680703.209092464
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
      "combinedGP": 28736639.56,
      "combinedGP_pct": 33.866314823820026,
      "combinedRevenue": 84853163.70999998,
      "y2025_GP_pct": 33.05050709886004,
      "y2025_revenue": 48747863.480000034,
      "y2025_jobs": 315,
      "y2026_GP_pct": 34.96778422994435,
      "y2026_revenue": 36105300.23,
      "y2026_jobs": 289,
      "materialCost": 29245940.410000023,
      "laborCost": 26138332.609999996,
      "otherCost": 697730.4399999997,
      "commissions": 225828.57999999967,
      "materialPctContract": 34.466529156123116,
      "laborPctContract": 30.804193346676108,
      "otherPctContract": 0.8222798178564225,
      "commissionPctContract": 0.2661404361678334,
      "sourceFile": "GregProfitabilityMFResults-2026-11-23.csv",
      "jobsParsed": 604
    },
    "profitabilityByJobType": [
      {
        "key": "Retail",
        "jobs": 277,
        "revenue": 25990331.749999996,
        "expenses": 18180452.71000001,
        "gross_profit": 7809879.039999992,
        "material": 9524583.749999993,
        "labor": 8493371.510000002,
        "other": 167154.81999999998,
        "commission": 20188.439999999995,
        "contract": 25873211.659999996,
        "gp_pct": 30.049170265015924
      },
      {
        "key": "Insurance",
        "jobs": 12,
        "revenue": 10114968.479999999,
        "expenses": 5299624.04,
        "gross_profit": 4815344.439999999,
        "material": 2792587.23,
        "labor": 2420205.35,
        "other": 59446.009999999995,
        "commission": 0,
        "contract": 10120880.599999998,
        "gp_pct": 47.60612402817887
      }
    ],
    "profitabilityByMarket": [
      {
        "key": "Columbus",
        "jobs": 60,
        "revenue": 12740911.96,
        "expenses": 7477184.58,
        "gross_profit": 5263727.379999999,
        "material": 3901085.160000001,
        "labor": 3436443.7800000003,
        "other": 122322.39,
        "commission": 0,
        "contract": 12667301.180000002,
        "gp_pct": 41.31358411803984
      },
      {
        "key": "Detroit Metro",
        "jobs": 43,
        "revenue": 6677682.500000001,
        "expenses": 4717342.809999999,
        "gross_profit": 1960339.6900000002,
        "material": 2360530.9600000004,
        "labor": 2300776.28,
        "other": 52791.68,
        "commission": 558.73,
        "contract": 6643525.3100000005,
        "gp_pct": 29.356587259127696
      },
      {
        "key": "Raleigh",
        "jobs": 43,
        "revenue": 6661081.29,
        "expenses": 4707618.6400000015,
        "gross_profit": 1953462.65,
        "material": 2740055.2100000004,
        "labor": 1959833.0499999996,
        "other": 905,
        "commission": 8094.2,
        "contract": 6662188.59,
        "gp_pct": 29.32650969044096
      },
      {
        "key": "Cleveland",
        "jobs": 73,
        "revenue": 4793588.9399999995,
        "expenses": 2993183.4799999995,
        "gross_profit": 1800405.4600000002,
        "material": 1620880.3099999998,
        "labor": 1333597.9100000001,
        "other": 33998.62,
        "commission": 0,
        "contract": 4788286.339999999,
        "gp_pct": 37.558611773666186
      },
      {
        "key": "Cincinnati",
        "jobs": 22,
        "revenue": 1728515.11,
        "expenses": 1229671.17,
        "gross_profit": 498843.94,
        "material": 575958.36,
        "labor": 657604.96,
        "other": 300,
        "commission": 5647.89,
        "contract": 1728515.11,
        "gp_pct": 28.85968060759388
      },
      {
        "key": "Nashville",
        "jobs": 9,
        "revenue": 1171054.97,
        "expenses": 772130.0599999998,
        "gross_profit": 398924.9100000001,
        "material": 328760.70999999996,
        "labor": 431651.26,
        "other": 11375.900000000001,
        "commission": 4481.38,
        "contract": 1166935.2699999998,
        "gp_pct": 34.0654299088966
      },
      {
        "key": "DC Metro",
        "jobs": 10,
        "revenue": 790149.71,
        "expenses": 506820.55000000005,
        "gross_profit": 283329.16000000003,
        "material": 242633.93,
        "labor": 262853.62,
        "other": 0,
        "commission": 0,
        "contract": 788814.71,
        "gp_pct": 35.85765538026965
      },
      {
        "key": "Richmond",
        "jobs": 13,
        "revenue": 564375.01,
        "expenses": 396015.13,
        "gross_profit": 168359.88,
        "material": 232550.92,
        "labor": 170634.63,
        "other": 4907.24,
        "commission": 0,
        "contract": 557450.01,
        "gp_pct": 29.831207444851255
      },
      {
        "key": "Dayton",
        "jobs": 9,
        "revenue": 544310,
        "expenses": 339131.85000000003,
        "gross_profit": 205178.15,
        "material": 136281.27000000002,
        "labor": 202322.55,
        "other": 0,
        "commission": 0,
        "contract": 539695,
        "gp_pct": 37.69509103268358
      },
      {
        "key": "Indianapolis",
        "jobs": 3,
        "revenue": 308754.24,
        "expenses": 220767.05,
        "gross_profit": 87987.19,
        "material": 124614.78,
        "labor": 91464.8,
        "other": 0,
        "commission": 1406.24,
        "contract": 308404.24,
        "gp_pct": 28.497483953580687
      },
      {
        "key": "Knoxville",
        "jobs": 4,
        "revenue": 124876.5,
        "expenses": 120211.43000000001,
        "gross_profit": 4665.07,
        "material": 53819.37,
        "labor": 66394.01999999999,
        "other": 0,
        "commission": 0,
        "contract": 142976.5,
        "gp_pct": 3.7357469179549394
      }
    ],
    "profitabilityByJobType2025": [
      {
        "key": "Retail",
        "jobs": 296,
        "revenue": 41197938.68000002,
        "expenses": 28419004.119999994,
        "gross_profit": 12778934.560000014,
        "material": 14757281.81,
        "labor": 13289909.359999998,
        "other": 390003.73999999993,
        "commission": 163625.6599999997,
        "contract": 41179965.38000004,
        "gp_pct": 31.018383369272023
      },
      {
        "key": "Insurance",
        "jobs": 18,
        "revenue": 7491415.6,
        "expenses": 4173434.020000001,
        "gross_profit": 3317981.58,
        "material": 2146157.96,
        "labor": 1915276.39,
        "other": 81125.87,
        "commission": 42014.48,
        "contract": 7571324.66,
        "gp_pct": 44.29044865699348
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
        "jobs": 76,
        "revenue": 12819959.209999992,
        "expenses": 9033894.869999997,
        "gross_profit": 3786064.3399999985,
        "material": 4604653.540000002,
        "labor": 4270248.18,
        "other": 164082.63000000003,
        "commission": 22258.990000000005,
        "contract": 12806113.449999992,
        "gp_pct": 29.532577116522674
      },
      {
        "key": "Raleigh",
        "jobs": 68,
        "revenue": 10770594.090000002,
        "expenses": 7552978.959999999,
        "gross_profit": 3217615.129999999,
        "material": 4098683.369999999,
        "labor": 3383436.4200000004,
        "other": 64141.77,
        "commission": 41706.77999999999,
        "contract": 10775718.280000001,
        "gp_pct": 29.874072898053093
      },
      {
        "key": "Columbus",
        "jobs": 37,
        "revenue": 7170635.199999998,
        "expenses": 4940661.25,
        "gross_profit": 2229973.9500000007,
        "material": 2609972.559999999,
        "labor": 2139522.03,
        "other": 146959.06000000003,
        "commission": 0,
        "contract": 7221445.199999998,
        "gp_pct": 31.09869471535801
      },
      {
        "key": "DC Metro",
        "jobs": 19,
        "revenue": 6132323.2700000005,
        "expenses": 3994371.020000001,
        "gross_profit": 2137952.2499999995,
        "material": 1901452.54,
        "labor": 2121817.02,
        "other": 6695.08,
        "commission": 45418.21000000001,
        "contract": 6137703.03,
        "gp_pct": 34.86365861465747
      },
      {
        "key": "Cleveland",
        "jobs": 38,
        "revenue": 5050472.38,
        "expenses": 2906925.0899999994,
        "gross_profit": 2143547.2899999996,
        "material": 1474498.4000000004,
        "labor": 1382563.21,
        "other": 49664.83999999999,
        "commission": 37278.56,
        "contract": 5193655.62,
        "gp_pct": 42.44251089241675
      },
      {
        "key": "Cincinnati",
        "jobs": 43,
        "revenue": 2396994.5300000003,
        "expenses": 1558893.7400000007,
        "gross_profit": 838100.79,
        "material": 811267.7199999999,
        "labor": 739435.8500000001,
        "other": 7736.63,
        "commission": 23698.500000000007,
        "contract": 2385119.86,
        "gp_pct": 34.964651754962496
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
        "jobs": 5,
        "revenue": 269994.4,
        "expenses": 229938.57,
        "gross_profit": 40055.83000000001,
        "material": 138053.52000000002,
        "labor": 87510.02,
        "other": 4550.43,
        "commission": 0,
        "contract": 269994.4,
        "gp_pct": 14.83580029808026
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
          "jobs": 30,
          "value": 5320377.550000001
        }
      ],
      "totalJobs": 30,
      "totalValue": 5320377.550000001
    },
    "commentary": {
      "actionableRecommendations": [
        "Tracking ahead of plan by $3.77M."
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
            "$4.59M",
            "$5.36M",
            51,
            50
          ],
          [
            "September",
            "$5.94M",
            "$4.31M",
            "$1.64M",
            "$6.37M",
            "$6.57M",
            41,
            39
          ],
          [
            "October",
            "$8.13M",
            "$7.09M",
            "$1.05M",
            "$7.89M",
            "$5.21M",
            48,
            43
          ],
          [
            "November",
            "$2.97M",
            "$5.65M",
            "$-2.68M",
            "$3.08M",
            "$5.32M",
            32,
            39
          ],
          [
            "December",
            "$0",
            "$5.08M",
            "$-5.08M",
            "$0",
            "$5.32M",
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
            "$8.13M",
            "—",
            "—"
          ],
          [
            "November",
            "—",
            "$2.97M",
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
            "$14.94M",
            "$1.25M",
            83
          ],
          [
            "Detroit",
            "$11.36M",
            "$0",
            72
          ],
          [
            "Raleigh",
            "$8.88M",
            "$106K",
            76
          ],
          [
            "Cleveland",
            "$5.35M",
            "$332K",
            94
          ],
          [
            "Cincinnati",
            "$2.38M",
            "$2.58M",
            53
          ],
          [
            "DC Metro",
            "$4.51M",
            "$161K",
            21
          ],
          [
            "Nashville",
            "$1.35M",
            "$0",
            15
          ],
          [
            "Detroit Metro",
            "$0",
            "$852K",
            3
          ],
          [
            "Dayton",
            "$544K",
            "$46K",
            11
          ],
          [
            "Richmond",
            "$581K",
            "$0",
            14
          ],
          [
            "Indianapolis",
            "$267K",
            "$0",
            4
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
            "$38.39M",
            390
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
            "Job-118834",
            "Towne Properties -  Central Cincinnati District Office",
            "Cincinnati",
            "$837K",
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
            "Job-122396",
            "Kare Condominium Management Company",
            "Cleveland",
            "$299K",
            "2026-11-18"
          ],
          [
            "Job-117641",
            "Towne Properties - Columbus",
            "Columbus",
            "$250K",
            "2026-11-11"
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
            "Job-119838",
            "KMG Prestige",
            "Detroit Metro",
            "$92K",
            "2026-11-20"
          ],
          [
            "Job-122729",
            "Priestley Management Company",
            "Raleigh",
            "$91K",
            "2026-11-18"
          ],
          [
            "Job-115971",
            "Sentry Management - East Columbus",
            "Columbus",
            "$89K",
            "2026-10-11"
          ],
          [
            "Job-123785",
            "Sundance Property Management Inc",
            "Columbus",
            "$67K",
            "2026-11-23"
          ],
          [
            "Job-121064",
            "Solomon Organization, LLC",
            "Detroit Metro",
            "$66K",
            "2026-11-20"
          ],
          [
            "Job-122190",
            "Towne Properties - Cincinnati West District Office",
            "Cincinnati",
            "$65K",
            "2026-11-10"
          ],
          [
            "Job-122168",
            "Towne Properties - Cincinnati West District Office",
            "Cincinnati",
            "$61K",
            "2026-11-17"
          ],
          [
            "Job-120329",
            "Towne Properties - East Cincinnati District Office",
            "Cincinnati",
            "$58K",
            "2026-11-02"
          ],
          [
            "Job-123151",
            "Towne Properties - Columbus",
            "Columbus",
            "$48K",
            "2026-11-23"
          ],
          [
            "Job-106353",
            "Towne Properties - Northern Kentucky",
            "Cincinnati",
            "$43K",
            "2026-10-13"
          ],
          [
            "Job-123130",
            "Strathaven Condominiums",
            "Columbus",
            "$39K",
            "2026-11-23"
          ],
          [
            "Job-123445",
            "Towne Properties - Apartments",
            "Cincinnati",
            "$35K",
            "2026-11-17"
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
            "2026-11-10"
          ],
          [
            "Job-119548",
            "Towne Properties - Dayton",
            "Cincinnati",
            "$17K",
            "2026-11-23"
          ],
          [
            "Job-122071",
            "Alliance Realty",
            "Columbus",
            "$17K",
            "2026-11-19"
          ],
          [
            "Job-122987",
            "Service Roofing",
            "Raleigh",
            "$15K",
            "2026-11-21"
          ],
          [
            "Job-121355",
            "Dave Jones",
            "Columbus",
            "$14K",
            "2026-11-23"
          ],
          [
            "Job-123035",
            "Associated Property Management, LLC",
            "Dayton",
            "$11K",
            "2026-11-18"
          ],
          [
            "Job-121744",
            "Roxanne Briggs",
            "Cleveland",
            "$3K",
            "2026-11-04"
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
                  8131913.42,
                  2970590.3299999996,
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
                  5362497.3100000005,
                  6571801.9,
                  5214380.1,
                  5320377.550000001,
                  5320377.550000001
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
                  4586750.170000001,
                  6366632.109999999,
                  7886536.469999999,
                  3075057.7800000003,
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
                  8131913.42,
                  2970590.3299999996,
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
      8131913.42,
      2970590.3299999996,
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
      8131913.42,
      2970590.3299999996,
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
      5362497.3100000005,
      6571801.9,
      5214380.1,
      5320377.550000001,
      5320377.550000001
    ],
    "tabs": []
  },
  "BACKLOG": {
    "_source": "calculator/backlog.js v1.0-rules-encoded",
    "title": "Job Backlog & Production",
    "subtitle": "Live job-level backlog",
    "headerMeta": {
      "totalJobs": 103,
      "totalWOs": 333,
      "portfolioValue": 18114933.8,
      "avgDaysInStatus": 53,
      "lastBuild": "2026-11-23T14:04:29.858Z"
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
        "value": "103",
        "sub": "333 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "26",
        "sub": "25.2% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "77",
        "sub": "74.8% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "5",
        "sub": "19.2% of In Progress",
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
        "value": "$18.11M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$6.43M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$3.63M",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "5",
        "sub": "19.2% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$3.63M",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "25",
        "sub": "Across 5 jobs",
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
        "sub": "23 open WOs / 4 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "128",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "35",
        "sub": "27.3% of all holds",
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
        "value": "64d",
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
        "value": "$6.43M",
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
        "value": "$1.81M",
        "sub": "Highest single-rep stuck value",
        "tone": "warn"
      }
    ],
    "kpisBacklog": [
      {
        "label": "Not Started Jobs",
        "value": "77",
        "sub": "74.8% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$10.59M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "781d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Detroit Metro",
        "sub": "13 jobs (16.9% of backlog)",
        "tone": "warn"
      }
    ],
    "charts": [
      {
        "id": "ch-wo-status",
        "labels": [
          "On Hold",
          "Completed",
          "Scheduled",
          "In Progress",
          "Ready to Schedule",
          "New",
          "Pending Estimate Approval"
        ],
        "datasets": [
          {
            "label": "Work Orders",
            "data": [
              128,
              76,
              61,
              39,
              21,
              7,
              1
            ]
          }
        ]
      },
      {
        "id": "ch-branch",
        "labels": [
          "Raleigh",
          "Nashville",
          "Cincinnati",
          "Detroit Metro",
          "Columbus",
          "Cleveland",
          "Knoxville",
          "Dayton",
          "DC Metro",
          "Indianapolis",
          "Richmond"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              0,
              39,
              29,
              1,
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
              5,
              6,
              7,
              14,
              9,
              1,
              1,
              2,
              2,
              0,
              0
            ]
          },
          {
            "label": "On Hold",
            "data": [
              42,
              4,
              16,
              19,
              22,
              5,
              8,
              2,
              5,
              4,
              1
            ]
          },
          {
            "label": "RTS",
            "data": [
              0,
              1,
              5,
              7,
              0,
              3,
              0,
              1,
              0,
              3,
              1
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              29,
              15,
              1,
              7,
              3,
              4,
              0,
              2,
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
          "Scheduled",
          "Ready to Schedule",
          "Completed",
          "Pending Estimate Approval",
          "New"
        ],
        "datasets": [
          {
            "label": "Avg Days",
            "data": [
              64,
              35,
              19,
              10,
              10,
              6,
              0
            ]
          },
          {
            "label": "Max Days",
            "data": [
              781,
              371,
              60,
              25,
              38,
              6,
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
              74,
              1,
              0,
              1,
              0,
              0
            ]
          },
          {
            "label": "Open",
            "data": [
              216,
              25,
              10,
              4,
              1,
              1
            ]
          }
        ]
      },
      {
        "id": "ch-incomplete-status",
        "labels": [
          "Scheduled",
          "In Progress",
          "Pending Estimate Approval",
          "On Hold"
        ],
        "datasets": [
          {
            "label": "WOs",
            "data": [
              18,
              5,
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
              7,
              1,
              16,
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
          "Detroit Metro",
          "Columbus",
          "Raleigh",
          "Cincinnati",
          "Cleveland",
          "Dayton",
          "DC Metro",
          "Nashville",
          "Knoxville",
          "Richmond",
          "Indianapolis"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              13,
              12,
              12,
              9,
              9,
              5,
              5,
              5,
              3,
              2,
              2
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
            "Raleigh",
            76,
            0,
            42,
            0,
            29,
            4,
            0,
            10,
            14,
            2599269.44
          ],
          [
            "Nashville",
            65,
            39,
            4,
            1,
            15,
            3,
            0,
            4,
            6,
            3326758.98
          ],
          [
            "Cincinnati",
            58,
            29,
            16,
            5,
            1,
            6,
            0,
            1,
            16,
            2966142.56
          ],
          [
            "Detroit Metro",
            48,
            1,
            19,
            7,
            7,
            14,
            0,
            4,
            16,
            4495872
          ],
          [
            "Columbus",
            40,
            6,
            22,
            0,
            3,
            8,
            0,
            6,
            21,
            2008374.34
          ],
          [
            "Cleveland",
            14,
            1,
            5,
            3,
            4,
            1,
            0,
            2,
            11,
            1243322.98
          ],
          [
            "Knoxville",
            9,
            0,
            8,
            0,
            0,
            0,
            0,
            1,
            3,
            99371
          ],
          [
            "Dayton",
            7,
            0,
            2,
            1,
            2,
            2,
            0,
            0,
            6,
            182556
          ],
          [
            "DC Metro",
            7,
            0,
            5,
            0,
            0,
            1,
            0,
            3,
            6,
            825929
          ],
          [
            "Indianapolis",
            7,
            0,
            4,
            3,
            0,
            0,
            0,
            4,
            2,
            182159
          ],
          [
            "Richmond",
            2,
            0,
            1,
            1,
            0,
            0,
            0,
            0,
            2,
            185178.5
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
            "Spring Hold",
            56,
            63,
            606
          ],
          [
            "Pending Permit",
            34,
            60,
            781
          ],
          [
            "Pending Deposit",
            29,
            58,
            124
          ],
          [
            "(no sub-status)",
            4,
            94,
            217
          ],
          [
            "Pending HOA",
            2,
            109,
            158
          ],
          [
            "Homeowner Request",
            2,
            70,
            122
          ],
          [
            "Pending Material",
            1,
            217,
            217
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
            23,
            4,
            3601635.56
          ],
          [
            "Other",
            1,
            1,
            30926
          ],
          [
            "Gutters",
            1,
            1,
            2614900
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
            12
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
            "New",
            2
          ],
          [
            "Scheduled",
            2
          ],
          [
            "Completed",
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
            290,
            74,
            216,
            75,
            13993302.1
          ],
          [
            "Gutters",
            26,
            1,
            25,
            26,
            6093629.3
          ],
          [
            "Siding",
            10,
            0,
            10,
            10,
            2892676.4
          ],
          [
            "Other",
            5,
            1,
            4,
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
            70,
            23,
            1812676,
            11,
            3
          ],
          [
            "Shawn Dunnigan - INACTIVE",
            4,
            2,
            1733333,
            4,
            1
          ],
          [
            "Courtney Lyon",
            28,
            7,
            712569,
            11,
            1
          ],
          [
            "Nicholas Andrukat",
            14,
            11,
            644219.42,
            2,
            1
          ],
          [
            "Marko Jovanovic",
            7,
            6,
            554675,
            5,
            1
          ],
          [
            "Micah Williamson",
            16,
            7,
            425820,
            3,
            1
          ],
          [
            "Jason Crooke",
            2,
            2,
            168762.5,
            1,
            1
          ],
          [
            "Ron Saxe",
            14,
            7,
            162867,
            7,
            1
          ],
          [
            "Josh Kennedy",
            60,
            3,
            81972,
            1,
            2
          ],
          [
            "Aaron Ellis",
            14,
            5,
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
            "Lisa Gibson",
            11,
            9,
            18327,
            2,
            4
          ],
          [
            "Todd Sandler",
            8,
            2,
            0,
            0,
            1
          ],
          [
            "Cody Roberts",
            1,
            1,
            0,
            0,
            1
          ],
          [
            "Christy Osborne",
            6,
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
            13,
            3643896,
            518
          ],
          [
            "Columbus",
            12,
            762892.35,
            217
          ],
          [
            "Raleigh",
            12,
            2492995.44,
            27
          ],
          [
            "Cincinnati",
            9,
            490041,
            158
          ],
          [
            "Cleveland",
            9,
            1209608.98,
            76
          ],
          [
            "Dayton",
            5,
            148046,
            122
          ],
          [
            "DC Metro",
            5,
            664509,
            781
          ],
          [
            "Nashville",
            5,
            711858.98,
            19
          ],
          [
            "Knoxville",
            3,
            99371,
            124
          ],
          [
            "Richmond",
            2,
            185178.5,
            109
          ],
          [
            "Indianapolis",
            2,
            182159,
            11
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
            781,
            69162
          ],
          [
            "Job-093347",
            "Comsource Management, Inc.",
            "DC Metro",
            "Roofing",
            "Spring Hold",
            "Marko Jovanovic",
            606,
            205493
          ],
          [
            "Job-098561",
            "Compass Management Professionals",
            "Detroit Metro",
            "Gutters",
            "Spring Hold",
            "Shawn Dunnigan - INACTIVE",
            518,
            866666
          ],
          [
            "Job-098563",
            "Compass Management Professionals",
            "Detroit Metro",
            "Roofing",
            "Spring Hold",
            "Shawn Dunnigan - INACTIVE",
            518,
            866667
          ],
          [
            "Job-111825",
            "Capital Property Solutions",
            "Columbus",
            "Siding",
            "Pending Material",
            "Ron Saxe",
            217,
            74242
          ],
          [
            "Job-115219",
            "Towne Properties - East Cincinnati District Office",
            "Cincinnati",
            "Gutters",
            "Pending HOA",
            "Mark Leedy",
            158,
            98128
          ],
          [
            "Job-117156",
            "Associa On Call Tennessee Knoxville",
            "Knoxville",
            "Roofing",
            "Pending Deposit",
            "Aaron Ellis",
            124,
            67959
          ],
          [
            "Job-117331",
            "Towne Properties - Dayton",
            "Dayton",
            "Gutters",
            "",
            "Mark Leedy",
            122,
            43988
          ],
          [
            "Job-117333",
            "Towne Properties - Dayton",
            "Dayton",
            "Gutters",
            "Homeowner Request",
            "Mark Leedy",
            122,
            40460
          ],
          [
            "Job-118193",
            "United Property Associates",
            "Richmond",
            "Roofing",
            "Pending Deposit",
            "Jason Crooke",
            109,
            168762.5
          ],
          [
            "Job-118820",
            "D. Bloomington, LLC",
            "Cincinnati",
            "Gutters",
            "Pending Deposit",
            "Lisa Gibson",
            102,
            18327
          ],
          [
            "Job-114967",
            "Piper Reality & Management",
            "Detroit Metro",
            "Other",
            "Pending Deposit",
            "Courtney Lyon",
            101,
            19233
          ],
          [
            "Job-120315",
            "Cedar Management Group",
            "Cleveland",
            "Siding",
            "Pending Permit",
            "Nicholas Andrukat",
            76,
            613293.42
          ],
          [
            "Job-121065",
            "Comsource Management, Inc.",
            "DC Metro",
            "Roofing",
            "Pending Permit",
            "Marko Jovanovic",
            62,
            118600
          ],
          [
            "Job-114244",
            "Village of Gambier",
            "Columbus",
            "Roofing",
            "Pending HOA",
            "Matthew Cooke",
            61,
            47687.35
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Raleigh",
          "permits": 10
        },
        {
          "branch": "Columbus",
          "permits": 6
        },
        {
          "branch": "Nashville",
          "permits": 4
        },
        {
          "branch": "Detroit Metro",
          "permits": 4
        },
        {
          "branch": "Indianapolis",
          "permits": 4
        },
        {
          "branch": "DC Metro",
          "permits": 3
        },
        {
          "branch": "Cleveland",
          "permits": 2
        },
        {
          "branch": "Cincinnati",
          "permits": 1
        },
        {
          "branch": "Knoxville",
          "permits": 1
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $3.63M of trapped partial-job revenue into billable revenue, reduce $6.43M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Roofing sweep: 23 open WOs across 4 partial jobs blocking $3.60M. Highest single-trade leverage in the book.",
        "Raleigh permit sweep: 10 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one.",
        "Close out the 1 zombie jobs (all WOs Completed, parent still In Progress). Pure paperwork."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Roofing): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 77 jobs ($10.59M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $3.63M, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 08, 2026 - Nov 20, 2026 - De-Duplicated at Job Level - 409 Jobs - 11 Markets - 14 PMs",
    "generated": "2026-11-23",
    "headerMeta": {
      "trueRevenue": 49503587.45,
      "uniqueJobs": 409,
      "markets": 11,
      "pms": 14,
      "medianComplete": 57,
      "avgStart": 63,
      "multiTradeJobs": 46,
      "singleTradeJobs": 363,
      "multiTradePct": 11.2,
      "lastBuild": "2026-11-23T14:04:29.894Z"
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
        "value": "$49.50M",
        "sub": "409 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$121,036",
        "sub": "Per job (deduped)"
      },
      {
        "label": "Median Days to Complete",
        "value": "57.0d",
        "sub": "Job-level median"
      },
      {
        "label": "Avg Days to Start",
        "value": "63.0d",
        "sub": "Sale to crew on-site"
      },
      {
        "label": "Multi-Trade Jobs",
        "value": "46",
        "sub": "11.2% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "363",
        "sub": "88.8% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$280,206",
        "sub": "+177.8% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$100,865",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+19.1d",
        "sub": "MT 73.0d vs ST 53.9d"
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
        "rev": 5206505.16,
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
        "start": 61.4
      },
      {
        "m": "2026-11",
        "label": "November",
        "key": "2026-11",
        "rev": 2977360.33,
        "jobs": 32,
        "med": 56.1,
        "start": 52.6
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
          "2026-10",
          "2026-11"
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
              5206505.16,
              9337971.42,
              2977360.33
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
              48,
              32
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
          "2026-10",
          "2026-11"
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
              57.6,
              56.1
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
              61.4,
              52.6
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
              46
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              363
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
              37,
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
          "Richmond",
          "Dayton",
          "Indianapolis",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "MT %",
            "data": [
              19.2,
              12.5,
              4.5,
              1.1,
              41.2,
              20.5,
              0,
              7.1,
              0,
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
          "Richmond",
          "Dayton",
          "Indianapolis",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "MT Median",
            "data": [
              71.4,
              104.4,
              71.7,
              73.6,
              68.4,
              70.4,
              0,
              106.6,
              0,
              0,
              60.5
            ]
          },
          {
            "label": "ST Median",
            "data": [
              56.7,
              59.5,
              53.4,
              41.3,
              39,
              70.4,
              46.1,
              52.4,
              82.5,
              53.6,
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
          "Richmond",
          "Dayton",
          "Indianapolis",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              15023071.79,
              10618602.23,
              8835133.14,
              5257118.9,
              4506454.71,
              2418245.98,
              1237498.08,
              574120.01,
              544310,
              266810.42,
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
          "Richmond",
          "Dayton",
          "Indianapolis",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              60.4,
              65.6,
              54.4,
              41.3,
              48.5,
              70.4,
              46.1,
              64.7,
              82.5,
              53.6,
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
          "Jeremy Wolfe",
          "Erik Patla",
          "(Unassigned)",
          "Daniel Wallace",
          "Rob Vanderlinden",
          "Jordan Pyle",
          "Shawn Marlow",
          "Mike Scott",
          "Justin Milliron"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              13401514.96,
              8323900.44,
              6660730.16,
              5160250.36,
              3004353.32,
              2560168.06,
              2296576.93,
              1494433.63,
              1350219.44,
              1039635.35,
              789880,
              373557.37,
              159523.07,
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
          "Jeremy Wolfe",
          "Erik Patla",
          "(Unassigned)",
          "Daniel Wallace",
          "Rob Vanderlinden",
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
                "x": 58.4,
                "y": 13401514.96,
                "wos": 381,
                "name": "Brian Walker"
              },
              {
                "x": 68.5,
                "y": 8323900.44,
                "wos": 188,
                "name": "Ryan Wolf"
              },
              {
                "x": 60.7,
                "y": 6660730.16,
                "wos": 198,
                "name": "Bryan Paquin-INACTIVE"
              },
              {
                "x": 48.5,
                "y": 5160250.36,
                "wos": 166,
                "name": "James Foky"
              },
              {
                "x": 70.4,
                "y": 3004353.32,
                "wos": 113,
                "name": "Wayne Iles"
              },
              {
                "x": 60.5,
                "y": 2560168.06,
                "wos": 41,
                "name": "Jeremy Wolfe"
              },
              {
                "x": 48.5,
                "y": 2296576.93,
                "wos": 45,
                "name": "Erik Patla"
              },
              {
                "x": 43,
                "y": 1494433.63,
                "wos": 68,
                "name": "(Unassigned)"
              },
              {
                "x": 29.8,
                "y": 1350219.44,
                "wos": 61,
                "name": "Daniel Wallace"
              },
              {
                "x": 90.5,
                "y": 1039635.35,
                "wos": 9,
                "name": "Rob Vanderlinden"
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
                "x": 71.6,
                "y": 159523.07,
                "wos": 6,
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
              44175545.53,
              3289571.38,
              1108620.8,
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
              84.4,
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
          "Allyson Lepage",
          "Micah Williamson",
          "Kristi Mitchell",
          "Lisa Stachura - INACTIVE"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              281,
              118,
              4,
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
        "id": "ch_cb_eff",
        "labels": [
          "Lisa Gibson",
          "RaShauna Watts-INACTIVE",
          "Jamie Sanders - INACTIVE",
          "Evan Hall",
          "Katelyn Stewart",
          "Allyson Lepage",
          "Micah Williamson",
          "Kristi Mitchell",
          "Lisa Stachura - INACTIVE"
        ],
        "datasets": [
          {
            "label": "Median Complete",
            "data": [
              59.5,
              49.6,
              351.4,
              147.5,
              17.4,
              8.1,
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
          "Allyson Lepage",
          "Micah Williamson",
          "Kristi Mitchell",
          "Lisa Stachura - INACTIVE"
        ],
        "datasets": [
          {
            "label": "MT %",
            "data": [
              12.5,
              9.3,
              0,
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
          "Allyson Lepage",
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
                "y": 140938.7,
                "jobs": 281,
                "name": "Lisa Gibson"
              },
              {
                "x": 49.6,
                "y": 77833.65,
                "jobs": 118,
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
                "x": 8.1,
                "y": 6000,
                "jobs": 1,
                "name": "Allyson Lepage"
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
            73,
            15023071.79,
            205795.5,
            60.4,
            53.7,
            19.2,
            71.4,
            56.7
          ],
          [
            "Detroit Metro",
            72,
            10618602.23,
            147480.59,
            65.6,
            74.9,
            12.5,
            104.4,
            59.5
          ],
          [
            "Raleigh",
            67,
            8835133.14,
            131867.66,
            54.4,
            61.7,
            4.5,
            71.7,
            53.4
          ],
          [
            "Cleveland",
            89,
            5257118.9,
            59068.75,
            41.3,
            57.6,
            1.1,
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
            44,
            2418245.98,
            54960.14,
            70.4,
            79.4,
            20.5,
            70.4,
            70.4
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
            "Richmond",
            14,
            574120.01,
            41008.57,
            64.7,
            64.8,
            7.1,
            106.6,
            52.4
          ],
          [
            "Dayton",
            9,
            544310,
            60478.89,
            82.5,
            83.3,
            0,
            0,
            82.5
          ],
          [
            "Indianapolis",
            4,
            266810.42,
            66702.61,
            53.6,
            72.6,
            0,
            0,
            53.6
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
            381,
            62,
            13401514.96,
            35174.58,
            58.4,
            52.4
          ],
          [
            "Ryan Wolf",
            188,
            58,
            8323900.44,
            44276.07,
            68.5,
            74.7
          ],
          [
            "Bryan Paquin-INACTIVE",
            198,
            57,
            6660730.16,
            33640.05,
            60.7,
            64.6
          ],
          [
            "James Foky",
            166,
            75,
            5160250.36,
            31085.85,
            48.5,
            59.6
          ],
          [
            "Wayne Iles",
            113,
            52,
            3004353.32,
            26587.2,
            70.4,
            80.1
          ],
          [
            "Jeremy Wolfe",
            41,
            14,
            2560168.06,
            62443.12,
            60.5,
            63.6
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
            "(Unassigned)",
            68,
            54,
            1494433.63,
            21976.97,
            43,
            51
          ],
          [
            "Daniel Wallace",
            61,
            7,
            1350219.44,
            22134.74,
            29.8,
            26.7
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
            6,
            5,
            159523.07,
            26587.18,
            71.6,
            28.1
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
            1217,
            44175545.53,
            36298.72,
            63.6
          ],
          [
            "Gutters",
            81,
            3289571.38,
            40611.99,
            68.4
          ],
          [
            "Siding",
            21,
            1108620.8,
            52791.47,
            84.4
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
            281,
            39603774.85,
            140938.7,
            "59.5d",
            "64.7d",
            12.5,
            140938.7
          ],
          [
            "RaShauna Watts-INACTIVE",
            118,
            9184370.61,
            77833.65,
            "49.6d",
            "57.5d",
            9.3,
            77833.65
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
            "Allyson Lepage",
            1,
            6000,
            6000,
            "8.1d",
            "0d",
            0,
            6000
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
            "Allyson Lepage",
            1,
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
            1
          ],
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
            37,
            68,
            48,
            8,
            8,
            52,
            2,
            1,
            9,
            38,
            10,
            281
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
            21,
            23,
            8,
            1,
            19,
            2,
            5,
            5,
            25,
            4,
            118
          ],
          [
            "Total",
            44,
            89,
            73,
            17,
            9,
            72,
            4,
            6,
            14,
            67,
            14,
            409
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Multi-trade penalty is severe in 2 markets: Detroit Metro MT 104.4d vs ST 59.5d, Cleveland MT 73.6d vs ST 41.3d.",
        "Days to Start averages 63.0 days company-wide and 79.4 days in Cincinnati (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [
        "RaShauna Watts-INACTIVE creates 118 jobs at $77,834 average contract and 9.3% multi-trade attach, well below the top creator."
      ],
      "positivesToBuildOn": [
        "October delivered $9.34M across 48 invoiced jobs at 57.6-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "Cleveland hits 41.3-day median complete and a $59,069 average contract on 89 jobs.",
        "Multi-trade jobs carry a $280,206 average contract versus $100,865 for single-trade, a 178% revenue lift per job."
      ]
    }
  }
};
