/* AUTO-GENERATED — do not edit. Generated 2026-05-06T13:29:01.086Z (multi-family) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-05-06T13:29:01.086Z",
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
        "elapsedMs": 12,
        "builtAt": "2026-05-06T13:29:01.086Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-locked-2026-04-19-shell-1.0",
        "elapsedMs": 139,
        "builtAt": "2026-05-06T13:29:01.086Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 19,
        "builtAt": "2026-05-06T13:29:01.086Z"
      },
      {
        "id": "installs-ytd",
        "version": "1.0-rules-encoded",
        "elapsedMs": 14,
        "builtAt": "2026-05-06T13:29:01.086Z"
      }
    ]
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-05-05",
    "ytdDays": 126,
    "rowCount": 210,
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
        "value": "$17.12M",
        "sub": "210 signed contracts across 11 markets"
      },
      {
        "label": "Sold",
        "value": "$17.12M",
        "sub": "207 deals | 98.6% of signed contracts"
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
        "value": "$81,532",
        "sub": "Median: $13,980 | Install avg: $115,194"
      },
      {
        "label": "Organization",
        "value": "21 Reps",
        "sub": "11 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$49.60M",
        "sub": "Based on 126 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "70.0% / 29.5%",
        "sub": "147 installs | 62 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 207,
        "amount": 17117453.79
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
        "count": 51,
        "amount": 3459924.79,
        "installs": 33,
        "repairs": 17,
        "avgDeal": 67842,
        "repairPct": 33.3,
        "installAvg": 102907,
        "repairAvg": 3736
      },
      {
        "key": "2026-02",
        "label": "February",
        "count": 35,
        "amount": 2446214.66,
        "installs": 29,
        "repairs": 6,
        "avgDeal": 69892,
        "repairPct": 17.1,
        "installAvg": 84068,
        "repairAvg": 1373
      },
      {
        "key": "2026-03",
        "label": "March",
        "count": 49,
        "amount": 3377991,
        "installs": 33,
        "repairs": 16,
        "avgDeal": 68939,
        "repairPct": 32.7,
        "installAvg": 100944,
        "repairAvg": 2928
      },
      {
        "key": "2026-04",
        "label": "April",
        "count": 70,
        "amount": 7708261.34,
        "installs": 49,
        "repairs": 21,
        "avgDeal": 110118,
        "repairPct": 30,
        "installAvg": 155932,
        "repairAvg": 3219
      },
      {
        "key": "2026-05",
        "label": "May",
        "count": 5,
        "amount": 129342,
        "installs": 3,
        "repairs": 2,
        "avgDeal": 25868,
        "repairPct": 40,
        "installAvg": 42614,
        "repairAvg": 750
      }
    ],
    "jobTypeMixByMonth": {
      "Retail-No Financing": {
        "2026-01": 2220928.5,
        "2026-02": 2395513,
        "2026-03": 3377491,
        "2026-04": 6198416.34,
        "2026-05": 129342
      },
      "Insurance": {
        "2026-01": 1206796.29,
        "2026-02": 50701.66,
        "2026-03": 500,
        "2026-04": 1509845,
        "2026-05": 0
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
        "count": 202,
        "amount": 14321690.84,
        "avg": 70899
      },
      {
        "jobType": "Insurance",
        "count": 7,
        "amount": 2767842.95,
        "avg": 395406
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
        "count": 9,
        "amount": 232397
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
        "count": 12,
        "amount": 657720
      },
      {
        "w": 9,
        "count": 15,
        "amount": 1212851.66
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
        "amount": 1049961
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
        "count": 27,
        "amount": 1368220
      },
      {
        "w": 17,
        "count": 14,
        "amount": 2940834
      },
      {
        "w": 18,
        "count": 13,
        "amount": 2053338.03
      },
      {
        "w": 19,
        "count": 4,
        "amount": 128392
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
          "Detroit Metro",
          5099322.5,
          43,
          118589,
          24,
          19,
          44.2,
          21
        ],
        [
          "Columbus",
          3729477.63,
          37,
          100797,
          25,
          12,
          32.4,
          36
        ],
        [
          "Raleigh",
          3082880,
          32,
          96340,
          29,
          2,
          6.3,
          99
        ],
        [
          "Cleveland",
          2118742,
          23,
          92119,
          17,
          6,
          26.1,
          13
        ],
        [
          "Cincinnati",
          901569.66,
          21,
          42932,
          16,
          5,
          23.8,
          21
        ],
        [
          "DC Metro",
          781383,
          21,
          37209,
          13,
          8,
          38.1,
          35
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
          "Indianapolis",
          278937,
          3,
          92979,
          3,
          0,
          0,
          63
        ],
        [
          "Richmond",
          225238,
          8,
          28155,
          3,
          5,
          62.5,
          19
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
    "marketKickbacks": [],
    "marketJobTypeChart": {
      "_description": "Stacked horizontal bar; sales-by-job-type per branch.",
      "branches": [
        "Detroit Metro",
        "Columbus",
        "Raleigh",
        "Cleveland",
        "Cincinnati",
        "DC Metro",
        "Nashville",
        "Dayton",
        "Indianapolis",
        "Richmond",
        "Knoxville"
      ]
    },
    "topPeople": [
      {
        "name": "Micah Williamson",
        "amount": 3748227,
        "count": 26,
        "avg": 144163,
        "medDays": 11,
        "jt": {
          "Retail-No Financing": 26
        },
        "installs": 9,
        "repairs": 17
      },
      {
        "name": "Evan Hall",
        "amount": 2896236,
        "count": 28,
        "avg": 103437,
        "medDays": 99,
        "jt": {
          "Retail-No Financing": 28
        },
        "installs": 25,
        "repairs": 2
      },
      {
        "name": "Nicholas Andrukat",
        "amount": 2095442,
        "count": 16,
        "avg": 130965,
        "medDays": 13,
        "jt": {
          "Retail-No Financing": 14,
          "Insurance": 2
        },
        "installs": 10,
        "repairs": 6
      },
      {
        "name": "Mark Leedy",
        "amount": 1458169.66,
        "count": 28,
        "avg": 52077,
        "medDays": 26,
        "jt": {
          "Retail-No Financing": 26,
          "Retail-Financing": 1,
          "Insurance": 1
        },
        "installs": 22,
        "repairs": 6
      },
      {
        "name": "Christy Osborne",
        "amount": 1303964.29,
        "count": 6,
        "avg": 217327,
        "medDays": 35,
        "jt": {
          "Retail-No Financing": 4,
          "Insurance": 2
        },
        "installs": 3,
        "repairs": 3
      },
      {
        "name": "Ron Saxe",
        "amount": 1124582,
        "count": 14,
        "avg": 80327,
        "medDays": 76,
        "jt": {
          "Retail-No Financing": 14
        },
        "installs": 12,
        "repairs": 2
      },
      {
        "name": "Todd Sandler",
        "amount": 1103836,
        "count": 6,
        "avg": 183973,
        "medDays": 67,
        "jt": {
          "Retail-No Financing": 6
        },
        "installs": 4,
        "repairs": 2
      },
      {
        "name": "Courtney Lyon",
        "amount": 849540,
        "count": 6,
        "avg": 141590,
        "medDays": 112,
        "jt": {
          "Retail-No Financing": 6
        },
        "installs": 6,
        "repairs": 0
      },
      {
        "name": "Marko Jovanovic",
        "amount": 781383,
        "count": 21,
        "avg": 37209,
        "medDays": 35,
        "jt": {
          "Retail-No Financing": 20,
          "Insurance": 1
        },
        "installs": 13,
        "repairs": 8
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
        "name": "Jason Crooke",
        "amount": 225238,
        "count": 8,
        "avg": 28155,
        "medDays": 19,
        "jt": {
          "Retail-No Financing": 8
        },
        "installs": 3,
        "repairs": 5
      },
      {
        "name": "Lisa Gibson",
        "amount": 209855.03,
        "count": 17,
        "avg": 12344,
        "medDays": 28,
        "jt": {
          "Retail-No Financing": 17
        },
        "installs": 14,
        "repairs": 3
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
        "name": "RaShauna Watts",
        "amount": 68321.31,
        "count": 2,
        "avg": 34161,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 2
        },
        "installs": 1,
        "repairs": 1
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
        "amount": 29020,
        "count": 4,
        "avg": 7255,
        "medDays": 6,
        "jt": {
          "Retail-No Financing": 4
        },
        "installs": 1,
        "repairs": 3
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
      },
      {
        "name": "Justin Milliron",
        "amount": 1282,
        "count": 1,
        "avg": 1282,
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
        "repairs": 17,
        "deals": 26,
        "pct": 65.4
      },
      {
        "name": "Jason Crooke",
        "repairs": 5,
        "deals": 8,
        "pct": 62.5
      },
      {
        "name": "Marko Jovanovic",
        "repairs": 8,
        "deals": 21,
        "pct": 38.1
      }
    ],
    "salesCycle": {
      "kpis": [
        {
          "label": "Overall Median",
          "value": "41 days",
          "sub": "Mean: 96 days (skewed by insurance)"
        },
        {
          "label": "Retail",
          "value": "40 days",
          "sub": "All retail job types"
        },
        {
          "label": "Insurance",
          "value": "94 days",
          "sub": "Median | Mean: 216 days"
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
          "median": 40,
          "mean": 90,
          "count": 149
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
          "mean": 216,
          "count": 7
        },
        {
          "label": "Repair",
          "median": 1,
          "mean": 18,
          "count": 43
        },
        {
          "label": "Install",
          "median": 63,
          "mean": 126,
          "count": 112
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
          "market": "Cleveland",
          "median": 13,
          "mean": 50,
          "count": 13
        },
        {
          "market": "Richmond",
          "median": 19,
          "mean": 47,
          "count": 6
        },
        {
          "market": "Detroit Metro",
          "median": 21,
          "mean": 51,
          "count": 31
        },
        {
          "market": "Cincinnati",
          "median": 21,
          "mean": 48,
          "count": 13
        },
        {
          "market": "DC Metro",
          "median": 35,
          "mean": 97,
          "count": 18
        },
        {
          "market": "Columbus",
          "median": 36,
          "mean": 226,
          "count": 21
        },
        {
          "market": "Nashville",
          "median": 50,
          "mean": 83,
          "count": 9
        },
        {
          "market": "Raleigh",
          "median": 99,
          "mean": 121,
          "count": 31
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
      ],
      "recent4WkAvg": 1622696.01
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
          "status": "Recovery",
          "liveActual": 129342
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
      "whatsWorking": [
        "Sales Trajectory: Monthly sales moved from January $3.46M to May $129K (-96%). Annualized run rate: $49.60M.",
        "Premium Deal Types: Insurance averages $395,406 per deal. Retail-Financing averages $32,200 (highest per-deal value). Retail-No Financing averages $70,899 (the volume engine).",
        "Sold Conversion: 207 of 210 signed contracts (98.6%) have made it to Sold status for $17.12M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Repair Rate Elevated: 29.5% of all deals are repairs (62 of 210). Repairs average ~$3,027, low value relative to installs at $115,194."
      ],
      "criticalRisks": [
        "Pipeline kickbacks company-wide: 0 kickbacks totaling $0."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 40d median close on 149 retail deals.",
        "Insurance Density: $395,406 avg on 7 deals = $2.77M; +20% lift = ~$554K.",
        "Financing Lifts Ticket: Retail-Financing averages $32,200, highest per-deal value."
      ],
      "fixList": [
        "Financing Push, 1 financing deals YTD (0.5%) at $32,200 avg. Target 15% mix."
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
          "Repair Business Decision, 62 repairs YTD at ~$3,027 avg.",
          "Ops Capacity Planning, May hit 5 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "_source": "calculator/revenue-forecast-mf.js MF-v1.1-2026-05-04",
    "title": "Multi-Family Revenue Forecast",
    "subtitle": "MF-v1 · Job-by-job event model · Data through 2026-05-06",
    "runDate": "2026-05-06",
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
        "value": "$10.23M",
        "sub": "5 months elapsed"
      },
      {
        "label": "YTD vs Plan",
        "value": "−$3.61M",
        "sub": "Plan YTD: $13.84M",
        "trend": "negative"
      },
      {
        "label": "YTD vs Forecast",
        "value": "−$125K",
        "sub": "Lisa's forecast YTD: $10.36M",
        "trend": "negative"
      },
      {
        "label": "Plan-Rest Forecast",
        "value": "$46.12M",
        "sub": "YTD actual + remaining-month plan"
      },
      {
        "label": "Annual Budget",
        "value": "$51.67M",
        "sub": "2026 MF target"
      },
      {
        "label": "Forecast vs Budget",
        "value": "−$5.56M",
        "sub": "10.8% uplift needed",
        "trend": "negative"
      },
      {
        "label": "Current WIP",
        "value": "$7.95M",
        "sub": "16 jobs in flight today"
      },
      {
        "label": "Last Month Revenue",
        "value": "$4.82M",
        "sub": "April 2026"
      }
    ],
    "execSummary": {
      "budget": 51673207,
      "modelAnnualInvoiced": 24554321.688,
      "gap": -5557274.249589749,
      "narrative": "5 months of FY2026 MF activity reported, $10.23M invoiced YTD. Run-rate annualizes to $24.55M against the $51.67M plan, a $5.56M shortfall (10.8% uplift needed)."
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
        "wipChange": 3682486.1800000006,
        "netRevenue": 3966078.4399999995,
        "startingCount": 29,
        "completingCount": 33,
        "plan": 2964722.142117475,
        "gap": 1001356.2978825243
      },
      "apr": {
        "invoiced": 4816596.029999999,
        "wipChange": 712717.79,
        "netRevenue": 4816596.029999999,
        "startingCount": 31,
        "completingCount": 37,
        "plan": 3111458.0780510968,
        "gap": 1705137.9519489026
      },
      "may": {
        "invoiced": 0,
        "wipChange": 299586.31,
        "netRevenue": 0,
        "startingCount": 8,
        "completingCount": 4,
        "plan": 6369333.738681715,
        "gap": -6369333.738681715
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
      "gap": 5557274.249589749,
      "upliftPct": 10.754653276290261,
      "aprilGap": 0,
      "q1OriginalBudget": 0,
      "q1Actual": 0,
      "q1Shortfall": 0,
      "recoveryRatio": 0
    },
    "profitabilitySummary": {
      "combinedGP": 0,
      "combinedGP_pct": 0,
      "combinedRevenue": 10230967.37,
      "y2025_GP_pct": 0,
      "y2026_GP_pct": 0,
      "y2025_revenue": 0,
      "y2026_revenue": 10230967.37,
      "y2025_jobs": 0,
      "y2026_jobs": 98,
      "materialCost": 0,
      "laborCost": 0,
      "commissions": 0,
      "materialPctContract": 0,
      "laborPctContract": 0,
      "commissionPctContract": 0,
      "_note": "Cost mix and profitability for MF v1 not parsed yet. Profitability CSV is in folder; v2 will read it."
    },
    "pipelineSnapshot": {
      "stages": [
        {
          "stage": "In WIP today",
          "jobs": 16,
          "value": 7947267.3100000005
        }
      ],
      "totalJobs": 16,
      "totalValue": 7947267.3100000005
    },
    "commentary": {
      "actionableRecommendations": [
        "Annualized pace is $5.56M short of the $51.67M plan. Push to invoice WIP balance ($7.9M) faster, or accelerate starts."
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
            "$7.94M",
            37,
            31
          ],
          [
            "May",
            "$0",
            "$6.37M",
            "$-6.37M",
            "$300K",
            "$7.95M",
            4,
            8
          ],
          [
            "June",
            "$0",
            "$3.53M",
            "$-3.53M",
            "$0",
            "$7.95M",
            0,
            0
          ],
          [
            "July",
            "$0",
            "$5.1M",
            "$-5.1M",
            "$0",
            "$7.95M",
            0,
            0
          ],
          [
            "August",
            "$0",
            "$5.13M",
            "$-5.13M",
            "$0",
            "$7.95M",
            0,
            0
          ],
          [
            "September",
            "$0",
            "$4.31M",
            "$-4.31M",
            "$0",
            "$7.95M",
            0,
            0
          ],
          [
            "October",
            "$0",
            "$7.09M",
            "$-7.09M",
            "$0",
            "$7.95M",
            0,
            0
          ],
          [
            "November",
            "$0",
            "$5.65M",
            "$-5.65M",
            "$0",
            "$7.95M",
            0,
            0
          ],
          [
            "December",
            "$0",
            "$5.08M",
            "$-5.08M",
            "$0",
            "$7.95M",
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
            "$0",
            "$-5.42M",
            "-100%"
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
            "$3.45M",
            "$817K",
            21
          ],
          [
            "DC Metro",
            "$346K",
            "$3.41M",
            10
          ],
          [
            "Raleigh",
            "$1.79M",
            "$1.08M",
            34
          ],
          [
            "Detroit",
            "$2.39M",
            "$0",
            19
          ],
          [
            "Cincinnati",
            "$492K",
            "$1.49M",
            16
          ],
          [
            "Nashville",
            "$584K",
            "$352K",
            9
          ],
          [
            "Detroit Metro",
            "$0",
            "$800K",
            2
          ],
          [
            "Cleveland",
            "$694K",
            "$0",
            9
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
            "$6.73M",
            93
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
            "Job-104447",
            "Lakefront Manor Condominiums",
            "Detroit Metro",
            "$129K",
            "2026-04-30"
          ],
          [
            "Job-101477",
            "Towne Properties - Cincinnati West District Office",
            "Cincinnati",
            "$110K",
            "2025-11-17"
          ],
          [
            "Job-111899",
            "Ohio Plastic Surgery Specialists",
            "Columbus",
            "$53K",
            "2026-05-02"
          ],
          [
            "Job-108755",
            "Conover Family Dental",
            "Cincinnati",
            "$36K",
            "2026-03-30"
          ],
          [
            "Job-110601",
            "Allie Dye",
            "Columbus",
            "$24K",
            "2026-05-04"
          ],
          [
            "Job-111148",
            "Associa - Community Management Corporation DC Market - Opp# 254255",
            "DC Metro",
            "$24K",
            "2026-05-04"
          ],
          [
            "Job-111157",
            "Associa - Community Management Corporation DC Market - Opp# 254255",
            "DC Metro",
            "$12K",
            "2026-05-04"
          ],
          [
            "Job-109960",
            "Towne Properties - Northern Kentucky",
            "Cincinnati",
            "$11K",
            "2026-05-05"
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
                  0,
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
                  -5424329.3100000005,
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
                  6038147.71,
                  7943603.6,
                  7951767.3100000005,
                  7951767.3100000005,
                  7951767.3100000005,
                  7951767.3100000005,
                  7951767.3100000005,
                  7951767.3100000005,
                  7951767.3100000005,
                  7951767.3100000005
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
                  7648564.62,
                  5529313.819999999,
                  299586.31,
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
                  0,
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
      0,
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
      0,
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
      6038147.71,
      7943603.6,
      7951767.3100000005,
      7951767.3100000005,
      7951767.3100000005,
      7951767.3100000005,
      7951767.3100000005,
      7951767.3100000005,
      7951767.3100000005,
      7951767.3100000005
    ],
    "tabs": []
  },
  "BACKLOG": {
    "_source": "calculator/backlog.js v1.0-rules-encoded",
    "title": "Job Backlog & Production",
    "subtitle": "Live job-level backlog",
    "headerMeta": {
      "totalJobs": 100,
      "totalWOs": 322,
      "portfolioValue": 21350727.31,
      "avgDaysInStatus": 40,
      "lastBuild": "2026-05-06T13:29:01.070Z"
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
        "value": "100",
        "sub": "322 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "11",
        "sub": "11.0% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "89",
        "sub": "89.0% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "1",
        "sub": "9.1% of In Progress",
        "tone": "crit"
      },
      {
        "label": "Avg Days in Status",
        "value": "40",
        "sub": "Job-level average",
        "tone": "warn"
      },
      {
        "label": "Total Portfolio Value",
        "value": "$21.35M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$9.24M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$36K",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "1",
        "sub": "9.1% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$36K",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "1",
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
        "value": "145",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "114",
        "sub": "78.6% of all holds",
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
        "value": "37d",
        "sub": "Mean days in hold across all sub-statuses",
        "tone": "info"
      }
    ],
    "kpisSales": [
      {
        "label": "Active Reps",
        "value": "16",
        "sub": "Reps with at least one open WO",
        "tone": "info"
      },
      {
        "label": "Stuck Value >30d",
        "value": "$9.24M",
        "sub": "Sum of stale value across all reps",
        "tone": "crit"
      },
      {
        "label": "Reps with Stuck Work",
        "value": "8",
        "sub": "Reps carrying any >30d WO",
        "tone": "warn"
      },
      {
        "label": "Top Stuck Rep",
        "value": "$3.64M",
        "sub": "Highest single-rep stuck value",
        "tone": "warn"
      }
    ],
    "kpisBacklog": [
      {
        "label": "Not Started Jobs",
        "value": "89",
        "sub": "89.0% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$15.52M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "580d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Detroit Metro",
        "sub": "20 jobs (22.5% of backlog)",
        "tone": "warn"
      }
    ],
    "charts": [
      {
        "id": "ch-wo-status",
        "labels": [
          "On Hold",
          "Scheduled",
          "In Progress",
          "Ready to Schedule",
          "New",
          "Completed"
        ],
        "datasets": [
          {
            "label": "Work Orders",
            "data": [
              145,
              90,
              43,
              33,
              8,
              3
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
              0,
              0,
              0,
              2,
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
              8,
              20,
              10,
              2,
              4,
              5,
              0,
              1,
              0,
              1
            ]
          },
          {
            "label": "On Hold",
            "data": [
              27,
              23,
              26,
              38,
              16,
              7,
              4,
              4,
              0,
              0
            ]
          },
          {
            "label": "RTS",
            "data": [
              9,
              10,
              2,
              0,
              4,
              0,
              2,
              0,
              6,
              0
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              65,
              6,
              12,
              0,
              3,
              2,
              0,
              1,
              0,
              1
            ]
          }
        ]
      },
      {
        "id": "ch-wo-aging",
        "labels": [
          "On Hold",
          "Completed",
          "Ready to Schedule",
          "In Progress",
          "Scheduled",
          "New"
        ],
        "datasets": [
          {
            "label": "Avg Days",
            "data": [
              37,
              27,
              23,
              19,
              8,
              2
            ]
          },
          {
            "label": "Max Days",
            "data": [
              580,
              47,
              96,
              170,
              34,
              14
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
          "Windows",
          "Other"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              3,
              0,
              0,
              0,
              0
            ]
          },
          {
            "label": "Open",
            "data": [
              275,
              28,
              11,
              3,
              2
            ]
          }
        ]
      },
      {
        "id": "ch-incomplete-status",
        "labels": [
          "Ready to Schedule"
        ],
        "datasets": [
          {
            "label": "WOs",
            "data": [
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
        "id": "ch-backlog",
        "labels": [
          "Detroit Metro",
          "Cincinnati",
          "Columbus",
          "Cleveland",
          "Raleigh",
          "DC Metro",
          "Dayton",
          "Richmond",
          "Indianapolis",
          "Nashville"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              20,
              14,
              14,
              13,
              13,
              6,
              4,
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
            "Detroit Metro",
            109,
            0,
            27,
            9,
            65,
            8,
            0,
            21,
            21,
            8265262
          ],
          [
            "Columbus",
            59,
            0,
            23,
            10,
            6,
            19,
            0,
            16,
            14,
            1556269.31
          ],
          [
            "Raleigh",
            50,
            0,
            26,
            2,
            12,
            7,
            0,
            25,
            14,
            2496553
          ],
          [
            "Cleveland",
            40,
            0,
            38,
            0,
            0,
            0,
            0,
            34,
            13,
            1847755
          ],
          [
            "Cincinnati",
            29,
            2,
            16,
            4,
            3,
            3,
            0,
            7,
            18,
            2363542
          ],
          [
            "DC Metro",
            14,
            0,
            7,
            0,
            2,
            5,
            0,
            3,
            10,
            3914509
          ],
          [
            "Richmond",
            7,
            1,
            4,
            2,
            0,
            0,
            0,
            4,
            2,
            123449
          ],
          [
            "Dayton",
            6,
            0,
            4,
            0,
            1,
            0,
            0,
            4,
            4,
            249944
          ],
          [
            "Indianapolis",
            6,
            0,
            0,
            6,
            0,
            0,
            0,
            0,
            2,
            139259
          ],
          [
            "Nashville",
            2,
            0,
            0,
            0,
            1,
            1,
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
            114,
            19,
            580
          ],
          [
            "Pending Deposit",
            18,
            26,
            225
          ],
          [
            "Spring Hold",
            7,
            329,
            405
          ],
          [
            "(no sub-status)",
            4,
            12,
            14
          ],
          [
            "Pending Material",
            1,
            13,
            13
          ],
          [
            "Homeowner Request",
            1,
            342,
            342
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
            36158
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
            10
          ],
          [
            "Ready to Schedule",
            7
          ],
          [
            "In Progress",
            5
          ],
          [
            "New",
            3
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
            278,
            3,
            275,
            76,
            18491323.31
          ],
          [
            "Gutters",
            28,
            0,
            28,
            28,
            8954675.31
          ],
          [
            "Siding",
            11,
            0,
            11,
            11,
            2014770
          ],
          [
            "Windows",
            3,
            0,
            3,
            3,
            66348
          ],
          [
            "Other",
            2,
            0,
            2,
            2,
            702970
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
            14,
            10,
            3644279,
            5,
            1
          ],
          [
            "Shawn Dunnigan",
            28,
            10,
            3270770,
            11,
            1
          ],
          [
            "Mark Leedy",
            35,
            19,
            1589325,
            7,
            3
          ],
          [
            "Nicholas Andrukat",
            32,
            5,
            310210,
            3,
            1
          ],
          [
            "Lisa Gibson",
            26,
            18,
            196500,
            5,
            6
          ],
          [
            "Jason Crooke",
            7,
            2,
            123449,
            4,
            1
          ],
          [
            "Evan Hall",
            48,
            12,
            52660,
            2,
            1
          ],
          [
            "Ron Saxe",
            22,
            6,
            47920,
            3,
            1
          ],
          [
            "Courtney Lyon",
            11,
            4,
            0,
            0,
            1
          ],
          [
            "Micah Williamson",
            67,
            6,
            0,
            0,
            1
          ],
          [
            "Samuel Kayser",
            1,
            1,
            0,
            0,
            1
          ],
          [
            "Todd Sandler",
            23,
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
            "Kristi Mitchell",
            1,
            1,
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
            20,
            8135987,
            317
          ],
          [
            "Cincinnati",
            14,
            877662,
            96
          ],
          [
            "Columbus",
            14,
            1556269.31,
            22
          ],
          [
            "Cleveland",
            13,
            1847755,
            342
          ],
          [
            "Raleigh",
            13,
            2037195,
            225
          ],
          [
            "DC Metro",
            6,
            505778,
            580
          ],
          [
            "Dayton",
            4,
            249944,
            1
          ],
          [
            "Richmond",
            2,
            123449,
            0
          ],
          [
            "Indianapolis",
            2,
            139259,
            16
          ],
          [
            "Nashville",
            1,
            42143,
            7
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
            580,
            69162
          ],
          [
            "Job-093347",
            "Comsource Management, Inc.",
            "DC Metro",
            "Roofing",
            "Spring Hold",
            "Marko Jovanovic",
            405,
            205493
          ],
          [
            "Job-097306",
            "Barnett Management Inc.",
            "Cleveland",
            "Gutters",
            "Homeowner Request",
            "Nicholas Andrukat",
            342,
            34652
          ],
          [
            "Job-098561",
            "Compass Management Professionals",
            "Detroit Metro",
            "Roofing",
            "Spring Hold",
            "Shawn Dunnigan",
            317,
            866666
          ],
          [
            "Job-098557",
            "Compass Management Professionals",
            "Detroit Metro",
            "Roofing",
            "Spring Hold",
            "Shawn Dunnigan",
            317,
            866667
          ],
          [
            "Job-098563",
            "Compass Management Professionals",
            "Detroit Metro",
            "Roofing",
            "Spring Hold",
            "Shawn Dunnigan",
            317,
            866667
          ],
          [
            "Job-102699",
            "Main Street Management Group",
            "Raleigh",
            "Gutters",
            "Pending Deposit",
            "Evan Hall",
            225,
            24500
          ],
          [
            "Job-106687",
            "Management Plus",
            "Cincinnati",
            "Other",
            "",
            "Mark Leedy",
            96,
            32200
          ],
          [
            "Job-106353",
            "Towne Properties - Northern Kentucky",
            "Cincinnati",
            "Siding",
            "",
            "Mark Leedy",
            93,
            42560
          ],
          [
            "Job-107174",
            "Keystone Professional Association Management",
            "Raleigh",
            "Siding",
            "",
            "Evan Hall",
            75,
            28160
          ],
          [
            "Job-108318",
            "Towne Properties - Cincinnati West District Office",
            "Cincinnati",
            "Roofing",
            "Pending Deposit",
            "Mark Leedy",
            72,
            27703
          ],
          [
            "Job-108479",
            "Mike LaSalvia",
            "Cleveland",
            "Roofing",
            "Pending Permit",
            "Lisa Gibson",
            70,
            1100
          ],
          [
            "Job-108497",
            "Julie Yamokski",
            "Cleveland",
            "Roofing",
            "Pending Permit",
            "Lisa Gibson",
            70,
            2200
          ],
          [
            "Job-108499",
            "William Kemer",
            "Cleveland",
            "Roofing",
            "Pending Permit",
            "Lisa Gibson",
            70,
            2200
          ],
          [
            "Job-108407",
            "Continental Management",
            "Cleveland",
            "Roofing",
            "Pending Permit",
            "Nicholas Andrukat",
            69,
            32035
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Cleveland",
          "permits": 34
        },
        {
          "branch": "Raleigh",
          "permits": 25
        },
        {
          "branch": "Detroit Metro",
          "permits": 21
        },
        {
          "branch": "Columbus",
          "permits": 16
        },
        {
          "branch": "Cincinnati",
          "permits": 7
        },
        {
          "branch": "Richmond",
          "permits": 4
        },
        {
          "branch": "Dayton",
          "permits": 4
        },
        {
          "branch": "DC Metro",
          "permits": 3
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $36K of trapped partial-job revenue into billable revenue, reduce $9.24M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Dispatch the 1 RTS WOs sitting on partial jobs. No blocker, no hold, just dispatch.",
        "Gutters sweep: 1 open WOs across 1 partial jobs blocking $36K. Highest single-trade leverage in the book.",
        "Cleveland permit sweep: 34 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Gutters): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 89 jobs ($15.52M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $36K, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 08, 2026 - May 04, 2026 - De-Duplicated at Job Level - 100 Jobs - 11 Markets - 9 PMs",
    "generated": "2026-05-06",
    "headerMeta": {
      "trueRevenue": 9318907.24,
      "uniqueJobs": 100,
      "markets": 11,
      "pms": 9,
      "medianComplete": 53,
      "avgStart": 70,
      "multiTradeJobs": 10,
      "singleTradeJobs": 90,
      "multiTradePct": 10,
      "lastBuild": "2026-05-06T13:29:01.086Z"
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
        "value": "$9.32M",
        "sub": "100 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$93,189",
        "sub": "Per job (deduped)"
      },
      {
        "label": "Median Days to Complete",
        "value": "53.0d",
        "sub": "Job-level median"
      },
      {
        "label": "Avg Days to Start",
        "value": "70.0d",
        "sub": "Sale to crew on-site"
      },
      {
        "label": "Multi-Trade Jobs",
        "value": "10",
        "sub": "10.0% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "90",
        "sub": "90.0% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$150,158",
        "sub": "+72.9% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$86,859",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+15.9d",
        "sub": "MT 67.5d vs ST 51.6d"
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
        "rev": 299045.6,
        "jobs": 4,
        "med": 41.3,
        "start": 110.8
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
              299045.6
            ]
          },
          {
            "label": "Jobs",
            "data": [
              14,
              11,
              35,
              36,
              4
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
              110.8
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
              10
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              90
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
              8,
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
          "Raleigh",
          "Detroit Metro",
          "Cleveland",
          "Cincinnati",
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
              17.6,
              0,
              5.3,
              0,
              33.3,
              0,
              40,
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
          "Raleigh",
          "Detroit Metro",
          "Cleveland",
          "Cincinnati",
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
              56.5,
              0,
              138.4,
              0,
              68,
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
              66,
              53.9,
              44.3,
              52.6,
              108.4,
              36.7,
              0.6,
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
          "Raleigh",
          "Detroit Metro",
          "Cleveland",
          "Cincinnati",
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
              3560699.14,
              1747911.6,
              1628236.07,
              601530.71,
              492309.23,
              469488.37,
              344556,
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
          "Raleigh",
          "Detroit Metro",
          "Cleveland",
          "Cincinnati",
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
              61.4,
              53.9,
              44.4,
              52.6,
              89,
              36.7,
              48.5,
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
          "Jeremy Wolfe",
          "Ryan Wolf",
          "Wayne Iles",
          "James Foky",
          "Rob Vanderlinden",
          "(Unassigned)",
          "Erik Patla"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              2917834.41,
              1501316.4,
              862181.03,
              781785.93,
              704992.37,
              694090.71,
              587513.9,
              379588.98,
              343456
            ]
          }
        ]
      },
      {
        "id": "ch_pm_scatter",
        "labels": [
          "Brian Walker",
          "Bryan Paquin",
          "Jeremy Wolfe",
          "Ryan Wolf",
          "Wayne Iles",
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
                "x": 56.5,
                "y": 2917834.41,
                "wos": 49,
                "name": "Brian Walker"
              },
              {
                "x": 54.4,
                "y": 1501316.4,
                "wos": 41,
                "name": "Bryan Paquin"
              },
              {
                "x": 51.5,
                "y": 862181.03,
                "wos": 24,
                "name": "Jeremy Wolfe"
              },
              {
                "x": 43.5,
                "y": 781785.93,
                "wos": 17,
                "name": "Ryan Wolf"
              },
              {
                "x": 65.4,
                "y": 704992.37,
                "wos": 22,
                "name": "Wayne Iles"
              },
              {
                "x": 73.5,
                "y": 694090.71,
                "wos": 15,
                "name": "James Foky"
              },
              {
                "x": 103.8,
                "y": 587513.9,
                "wos": 5,
                "name": "Rob Vanderlinden"
              },
              {
                "x": 35.6,
                "y": 379588.98,
                "wos": 14,
                "name": "(Unassigned)"
              },
              {
                "x": 57.5,
                "y": 343456,
                "wos": 12,
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
              7669236.12,
              717337.56,
              690751.83,
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
              55,
              61.4,
              197.4,
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
              66,
              29,
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
              53.9,
              48.5,
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
              10.6,
              10.3,
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
                "x": 53.9,
                "y": 115874.32,
                "jobs": 66,
                "name": "Lisa Gibson"
              },
              {
                "x": 48.5,
                "y": 52861.79,
                "jobs": 29,
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
            17,
            3560699.14,
            209452.89,
            61.4,
            58.7,
            17.6,
            56.5,
            66
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
            "Detroit Metro",
            19,
            1628236.07,
            85696.64,
            44.4,
            71.2,
            5.3,
            138.4,
            44.3
          ],
          [
            "Cleveland",
            7,
            601530.71,
            85932.96,
            52.6,
            90.7,
            0,
            0,
            52.6
          ],
          [
            "Cincinnati",
            12,
            492309.23,
            41025.77,
            89,
            91.3,
            33.3,
            68,
            108.4
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
            5,
            344556,
            68911.2,
            48.5,
            51.6,
            40,
            67.5,
            0.6
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
            49,
            11,
            2917834.41,
            59547.64,
            56.5,
            56.9
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
            "Jeremy Wolfe",
            24,
            9,
            862181.03,
            35924.21,
            51.5,
            70.6
          ],
          [
            "Ryan Wolf",
            17,
            10,
            781785.93,
            45987.41,
            43.5,
            90.5
          ],
          [
            "Wayne Iles",
            22,
            15,
            704992.37,
            32045.11,
            65.4,
            83.7
          ],
          [
            "James Foky",
            15,
            8,
            694090.71,
            46272.71,
            73.5,
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
            14,
            14,
            379588.98,
            27113.5,
            35.6,
            42.3
          ],
          [
            "Erik Patla",
            12,
            4,
            343456,
            28621.33,
            57.5,
            51.6
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
            186,
            7669236.12,
            41232.45,
            55
          ],
          [
            "Gutters",
            21,
            717337.56,
            34158.93,
            61.4
          ],
          [
            "Siding",
            7,
            690751.83,
            98678.83,
            197.4
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
            66,
            7647705.33,
            115874.32,
            "53.9d",
            "73.8d",
            10.6,
            115874.32
          ],
          [
            "RaShauna Watts",
            29,
            1532991.91,
            52861.79,
            "48.5d",
            "56.3d",
            10.3,
            52861.79
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
            8,
            5,
            13,
            3,
            1,
            18,
            1,
            0,
            4,
            13,
            0,
            66
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
            2,
            2,
            1,
            1,
            1,
            2,
            3,
            11,
            1,
            29
          ],
          [
            "Total",
            12,
            7,
            17,
            5,
            2,
            19,
            2,
            2,
            7,
            26,
            1,
            100
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [],
      "watchList": [
        "Gutters-only work runs at 61.4-day median complete versus 55.0 days for roofing, 12% slower cycle on the lowest-priced trade."
      ],
      "positivesToBuildOn": [
        "March delivered $4.02M across 35 invoiced jobs at 60.3-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "Raleigh hits 53.9-day median complete and a $67,227 average contract on 26 jobs.",
        "Multi-trade jobs carry a $150,158 average contract versus $86,859 for single-trade, a 73% revenue lift per job."
      ]
    }
  }
};
