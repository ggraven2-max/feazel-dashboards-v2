/* AUTO-GENERATED — do not edit. Generated 2026-05-27T17:05:48.836Z (multi-family) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-05-27T17:05:48.836Z",
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
        "elapsedMs": 13,
        "builtAt": "2026-05-27T17:05:48.836Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 85,
        "builtAt": "2026-05-27T17:05:48.836Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 12,
        "builtAt": "2026-05-27T17:05:48.836Z"
      },
      {
        "id": "installs-ytd",
        "version": "1.0-rules-encoded",
        "elapsedMs": 10,
        "builtAt": "2026-05-27T17:05:48.836Z"
      }
    ]
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-05-26",
    "ytdDays": 147,
    "rowCount": 248,
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
        "value": "$19.56M",
        "sub": "248 signed contracts across 11 markets"
      },
      {
        "label": "Sold",
        "value": "$19.55M",
        "sub": "245 deals | 98.8% of signed contracts"
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
        "value": "$78,856",
        "sub": "Median: $13,121 | Install avg: $113,130"
      },
      {
        "label": "Organization",
        "value": "22 Reps",
        "sub": "11 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$48.56M",
        "sub": "Based on 147 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "69.0% / 30.6%",
        "sub": "171 installs | 76 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 245,
        "amount": 19552063.79
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
        "count": 75,
        "amount": 7887157.34,
        "installs": 53,
        "repairs": 22,
        "avgDeal": 105162,
        "repairPct": 29.3,
        "installAvg": 147494,
        "repairAvg": 3180
      },
      {
        "key": "2026-05",
        "label": "May",
        "count": 35,
        "amount": 2376631,
        "installs": 21,
        "repairs": 14,
        "avgDeal": 67904,
        "repairPct": 40,
        "installAvg": 112156,
        "repairAvg": 1525
      }
    ],
    "jobTypeMixByMonth": {
      "Retail-No Financing": {
        "2026-01": 2224228.5,
        "2026-02": 2401613,
        "2026-03": 3376516,
        "2026-04": 6377312.34,
        "2026-05": 1729571
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
        "count": 239,
        "amount": 16109240.84,
        "avg": 67403
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
        "count": 15,
        "amount": 2174367.03
      },
      {
        "w": 19,
        "count": 16,
        "amount": 1396041
      },
      {
        "w": 20,
        "count": 12,
        "amount": 902755
      },
      {
        "w": 21,
        "count": 5,
        "amount": 74910
      },
      {
        "w": 22,
        "count": 1,
        "amount": 1975
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
          5485802.63,
          42,
          130614,
          31,
          11,
          26.2,
          57
        ],
        [
          "Detroit Metro",
          5399401.5,
          52,
          103835,
          29,
          23,
          44.2,
          22
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
          2249626,
          30,
          74988,
          24,
          6,
          20,
          25
        ],
        [
          "Cincinnati",
          1157107.66,
          31,
          37326,
          20,
          11,
          35.5,
          28
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
          503880,
          11,
          45807,
          9,
          2,
          18.2,
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
          260849,
          10,
          26085,
          5,
          5,
          50,
          23
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
        "amount": 3850470,
        "count": 32,
        "avg": 120327,
        "medDays": 15,
        "jt": {
          "Retail-No Financing": 32
        },
        "installs": 12,
        "repairs": 20
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
        "amount": 1872736,
        "count": 16,
        "avg": 117046,
        "medDays": 82,
        "jt": {
          "Retail-No Financing": 16
        },
        "installs": 14,
        "repairs": 2
      },
      {
        "name": "Mark Leedy",
        "amount": 1683930.66,
        "count": 35,
        "avg": 48112,
        "medDays": 26,
        "jt": {
          "Retail-No Financing": 33,
          "Retail-Financing": 1,
          "Insurance": 1
        },
        "installs": 26,
        "repairs": 9
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
        "name": "Courtney Lyon",
        "amount": 1212275,
        "count": 12,
        "avg": 101023,
        "medDays": 62,
        "jt": {
          "Retail-No Financing": 12
        },
        "installs": 10,
        "repairs": 2
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
        "amount": 556469,
        "count": 13,
        "avg": 42805,
        "medDays": 57,
        "jt": {
          "Retail-No Financing": 12,
          "Insurance": 1
        },
        "installs": 11,
        "repairs": 2
      },
      {
        "name": "Shawn Dunnigan",
        "amount": 334640,
        "count": 7,
        "avg": 47806,
        "medDays": 156,
        "jt": {
          "Retail-No Financing": 7
        },
        "installs": 7,
        "repairs": 0
      },
      {
        "name": "Jason Crooke",
        "amount": 260849,
        "count": 10,
        "avg": 26085,
        "medDays": 23,
        "jt": {
          "Retail-No Financing": 10
        },
        "installs": 5,
        "repairs": 5
      },
      {
        "name": "Lisa Gibson",
        "amount": 167734.03,
        "count": 16,
        "avg": 10483,
        "medDays": 28,
        "jt": {
          "Retail-No Financing": 16
        },
        "installs": 13,
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
        "name": "RaShauna Watts",
        "amount": 60781,
        "count": 2,
        "avg": 30391,
        "medDays": 0,
        "jt": {
          "Retail-No Financing": 2
        },
        "installs": 1,
        "repairs": 1
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
        "repairs": 20,
        "deals": 32,
        "pct": 62.5
      },
      {
        "name": "Jason Crooke",
        "repairs": 5,
        "deals": 10,
        "pct": 50
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
          "value": "37 days",
          "sub": "Mean: 94 days (skewed by insurance)"
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
          "mean": 83,
          "count": 176
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
          "mean": 18,
          "count": 54
        },
        {
          "label": "Install",
          "median": 59,
          "mean": 127,
          "count": 129
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
          "median": 22,
          "mean": 54,
          "count": 40
        },
        {
          "market": "Richmond",
          "median": 23,
          "mean": 43,
          "count": 8
        },
        {
          "market": "Cleveland",
          "median": 25,
          "mean": 49,
          "count": 16
        },
        {
          "market": "Cincinnati",
          "median": 28,
          "mean": 43,
          "count": 19
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
          "total": 414142.58,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.9
        },
        {
          "market": "Detroit Metro",
          "total": 407619.86,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 2.4
        },
        {
          "market": "Raleigh",
          "total": 233755.28,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.5
        },
        {
          "market": "Cleveland",
          "total": 169832.2,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.4
        },
        {
          "market": "Cincinnati",
          "total": 87354.14,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.4
        },
        {
          "market": "DC Metro",
          "total": 59425.33,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.1
        },
        {
          "market": "Nashville",
          "total": 38039.68,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.5
        },
        {
          "market": "Dayton",
          "total": 26189.84,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.4
        },
        {
          "market": "Richmond",
          "total": 19692.41,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.5
        },
        {
          "market": "Indianapolis",
          "total": 16269.08,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.1
        },
        {
          "market": "Knoxville",
          "total": 4056.95,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.1
        }
      ],
      "weekSchedule": [
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
      "recent4WkAvg": 593920.25
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
          "deals": 75
        },
        {
          "mo": "May 2026",
          "monthIdx": 4,
          "origBudget": 6618395.96,
          "fcst": 6618395.96,
          "recovTarget": 6618395.96,
          "catchUp": 0,
          "status": "Active",
          "liveActual": 5067777.55,
          "deals": 35
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
          "recovTarget": 763935.24,
          "original": 783686.09,
          "delta": -19750.85
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 751903.3,
          "original": 771343.07,
          "delta": -19439.77
        },
        {
          "market": "Raleigh",
          "recovTarget": 431189.42,
          "original": 442337.43,
          "delta": -11148.01
        },
        {
          "market": "Cleveland",
          "recovTarget": 313275.69,
          "original": 321375.14,
          "delta": -8099.46
        },
        {
          "market": "Cincinnati",
          "recovTarget": 161135.09,
          "original": 165301.09,
          "delta": -4166
        },
        {
          "market": "DC Metro",
          "recovTarget": 109617.09,
          "original": 112451.14,
          "delta": -2834.05
        },
        {
          "market": "Nashville",
          "recovTarget": 70168.71,
          "original": 71982.86,
          "delta": -1814.15
        },
        {
          "market": "Dayton",
          "recovTarget": 48310.27,
          "original": 49559.29,
          "delta": -1249.02
        },
        {
          "market": "Richmond",
          "recovTarget": 36324.99,
          "original": 37264.14,
          "delta": -939.15
        },
        {
          "market": "Indianapolis",
          "recovTarget": 30010.26,
          "original": 30786.14,
          "delta": -775.89
        },
        {
          "market": "Knoxville",
          "recovTarget": 7483.52,
          "original": 7677,
          "delta": -193.48
        }
      ],
      "adjProdByMarket": [
        {
          "market": "Columbus",
          "recovTarget": 763935.24,
          "original": 783686.09,
          "delta": -19750.85
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 751903.3,
          "original": 771343.07,
          "delta": -19439.77
        },
        {
          "market": "Raleigh",
          "recovTarget": 431189.42,
          "original": 442337.43,
          "delta": -11148.01
        },
        {
          "market": "Cleveland",
          "recovTarget": 313275.69,
          "original": 321375.14,
          "delta": -8099.46
        },
        {
          "market": "Cincinnati",
          "recovTarget": 161135.09,
          "original": 165301.09,
          "delta": -4166
        },
        {
          "market": "DC Metro",
          "recovTarget": 109617.09,
          "original": 112451.14,
          "delta": -2834.05
        },
        {
          "market": "Nashville",
          "recovTarget": 70168.71,
          "original": 71982.86,
          "delta": -1814.15
        },
        {
          "market": "Dayton",
          "recovTarget": 48310.27,
          "original": 49559.29,
          "delta": -1249.02
        },
        {
          "market": "Richmond",
          "recovTarget": 36324.99,
          "original": 37264.14,
          "delta": -939.15
        },
        {
          "market": "Indianapolis",
          "recovTarget": 30010.26,
          "original": 30786.14,
          "delta": -775.89
        },
        {
          "market": "Knoxville",
          "recovTarget": 7483.52,
          "original": 7677,
          "delta": -193.48
        }
      ],
      "actualSource": "NetSuite AR · invoiced revenue",
      "netsuiteTotal": 15298744.92,
      "netsuiteInvoiceCount": 146,
      "netsuiteLatestDate": "2026-05-26"
    },
    "commentary": {
      "whatsWorking": [
        "Sales Trajectory: Monthly sales moved from January $3.46M to May $2.38M (-31%). Annualized run rate: $48.56M.",
        "Premium Deal Types: Insurance averages $426,863 per deal. Retail-Financing averages $32,200 (highest per-deal value). Retail-No Financing averages $67,403 (the volume engine).",
        "Sold Conversion: 245 of 248 signed contracts (98.8%) have made it to Sold status for $19.55M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Production Review Queue: 2 deals worth $0 sitting in Production Review. Watch for backlog growth, it delays revenue recognition.",
        "Repair Rate Elevated: 30.6% of all deals are repairs (76 of 248). Repairs average ~$2,771, low value relative to installs at $113,130."
      ],
      "criticalRisks": [
        "Pipeline kickbacks company-wide: 0 kickbacks totaling $0.",
        "Production Review backlog: 2 deals ($0)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 36d median close on 176 retail deals.",
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
          "Repair Business Decision, 76 repairs YTD at ~$2,771 avg.",
          "Ops Capacity Planning, May hit 35 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "_source": "calculator/revenue-forecast-mf.js MF-v1.1-2026-05-04",
    "title": "Multi-Family Revenue Forecast",
    "subtitle": "MF-v1 · Job-by-job event model · Data through 2026-05-27",
    "runDate": "2026-05-27",
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
        "value": "$15.3M",
        "sub": "5 months elapsed"
      },
      {
        "label": "YTD vs Plan",
        "value": "+$1.46M",
        "sub": "Plan YTD: $13.84M",
        "trend": "positive"
      },
      {
        "label": "YTD vs Forecast",
        "value": "+$4.94M",
        "sub": "Lisa's forecast YTD: $10.36M",
        "trend": "positive"
      },
      {
        "label": "Plan-Rest Forecast",
        "value": "$51.18M",
        "sub": "YTD actual + remaining-month plan"
      },
      {
        "label": "Annual Budget",
        "value": "$51.67M",
        "sub": "2026 MF target"
      },
      {
        "label": "Forecast vs Budget",
        "value": "−$489K",
        "sub": "0.9% uplift needed",
        "trend": "negative"
      },
      {
        "label": "Current WIP",
        "value": "$5.52M",
        "sub": "13 jobs in flight today"
      },
      {
        "label": "Last Month Revenue",
        "value": "$4.82M",
        "sub": "April 2026"
      }
    ],
    "execSummary": {
      "budget": 51673207,
      "modelAnnualInvoiced": 36716987.808,
      "gap": -489496.6995897442,
      "narrative": "5 months of FY2026 MF activity reported, $15.3M invoiced YTD. Run-rate annualizes to $36.72M against the $51.67M plan, a $489K shortfall (0.9% uplift needed)."
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
        "wipChange": 3731408.2600000007,
        "netRevenue": 3966078.4399999995,
        "startingCount": 29,
        "completingCount": 33,
        "plan": 2964722.142117475,
        "gap": 1001356.2978825243
      },
      "apr": {
        "invoiced": 4816596.029999999,
        "wipChange": 796643.79,
        "netRevenue": 4816596.029999999,
        "startingCount": 31,
        "completingCount": 37,
        "plan": 3111458.0780510968,
        "gap": 1705137.9519489026
      },
      "may": {
        "invoiced": 5067777.55,
        "wipChange": -82287.22999999952,
        "netRevenue": 5067777.55,
        "startingCount": 22,
        "completingCount": 37,
        "plan": 6369333.738681715,
        "gap": -1301556.1886817152
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
      "gap": 489496.6995897442,
      "upliftPct": 0.9472930518706614,
      "aprilGap": 0,
      "q1OriginalBudget": 0,
      "q1Actual": 0,
      "q1Shortfall": 0,
      "recoveryRatio": 0
    },
    "profitabilitySummary": {
      "combinedGP": 17995202.630000006,
      "combinedGP_pct": 34.97098902577401,
      "combinedRevenue": 51457517.02000003,
      "y2025_GP_pct": 34.49027588993454,
      "y2025_revenue": 44605435.57000004,
      "y2025_jobs": 344,
      "y2026_GP_pct": 38.10031826168673,
      "y2026_revenue": 6852081.45,
      "y2026_jobs": 59,
      "materialCost": 17237149.86,
      "laborCost": 15721963.07,
      "otherCost": 463051.9799999999,
      "commissions": 117539.95999999996,
      "materialPctContract": 33.497826669911845,
      "laborPctContract": 30.553287411612445,
      "otherPctContract": 0.8998723739818715,
      "commissionPctContract": 0.2284213596126599,
      "sourceFile": "GregProfitabilityMFResults160.csv",
      "jobsParsed": 403
    },
    "profitabilityByJobType": [
      {
        "key": "Retail",
        "jobs": 57,
        "revenue": 5593039.740000001,
        "expenses": 3690191.8000000003,
        "gross_profit": 1902847.9400000002,
        "material": 1891732.8599999994,
        "labor": 1775861.6600000001,
        "other": 16616.94,
        "commission": 0,
        "contract": 6842270.21,
        "gp_pct": 34.0217132088534
      },
      {
        "key": "Insurance",
        "jobs": 2,
        "revenue": 1259041.71,
        "expenses": 551224.8099999999,
        "gross_profit": 707816.8999999999,
        "material": 299820.03,
        "labor": 246488.54,
        "other": 4578.1,
        "commission": 0,
        "contract": 1259041.71,
        "gp_pct": 56.21870144397361
      }
    ],
    "profitabilityByMarket": [
      {
        "key": "Columbus",
        "jobs": 11,
        "revenue": 2150218.7399999998,
        "expenses": 1182475.8800000001,
        "gross_profit": 967742.86,
        "material": 611157.52,
        "labor": 551272.1,
        "other": 16212.130000000003,
        "commission": 0,
        "contract": 2151213.84,
        "gp_pct": 45.006716851514376
      },
      {
        "key": "Raleigh",
        "jobs": 15,
        "revenue": 1614236.2,
        "expenses": 1103620.41,
        "gross_profit": 510615.79000000004,
        "material": 602870.3799999998,
        "labor": 500298.04,
        "other": 122,
        "commission": 0,
        "contract": 1614236.2,
        "gp_pct": 31.6320368729186
      },
      {
        "key": "Detroit Metro",
        "jobs": 8,
        "revenue": 1541520.1400000001,
        "expenses": 943499.2299999999,
        "gross_profit": 598020.91,
        "material": 446960.25999999995,
        "labor": 492890.02,
        "other": 2880,
        "commission": 0,
        "contract": 2791090.5100000002,
        "gp_pct": 38.79423268514675
      },
      {
        "key": "DC Metro",
        "jobs": 6,
        "revenue": 385860,
        "expenses": 242267.44,
        "gross_profit": 143592.56,
        "material": 108331.19999999998,
        "labor": 133925.81,
        "other": 0,
        "commission": 0,
        "contract": 384525,
        "gp_pct": 37.21364225366713
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
        "expenses": 128346.23999999999,
        "gross_profit": 92265.38,
        "material": 72133.47,
        "labor": 56180.16,
        "other": 0,
        "commission": 0,
        "contract": 220611.62,
        "gp_pct": 41.82253863146465
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
        "expenses": 94558.79,
        "gross_profit": 46065.21000000001,
        "material": 54373.79,
        "labor": 40185,
        "other": 0,
        "commission": 0,
        "contract": 140624,
        "gp_pct": 32.757715610422125
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
        "jobs": 324,
        "revenue": 37148741.450000025,
        "expenses": 25036752.599999994,
        "gross_profit": 12111988.850000009,
        "material": 12897061.819999997,
        "labor": 11776244.33,
        "other": 358559.4299999999,
        "commission": 97549.74,
        "contract": 38292204.570000045,
        "gp_pct": 32.60403549956603
      },
      {
        "key": "Insurance",
        "jobs": 19,
        "revenue": 7398184.92,
        "expenses": 4140135.9200000004,
        "gross_profit": 3258048.9999999995,
        "material": 2123205.4899999998,
        "labor": 1903798.54,
        "other": 83297.51,
        "commission": 19990.22,
        "contract": 7330994.92,
        "gp_pct": 44.03849099787032
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
        "revenue": 10916463.209999995,
        "expenses": 7645463.900000001,
        "gross_profit": 3270999.3099999977,
        "material": 3846110.180000001,
        "labor": 3681816.27,
        "other": 129949.63,
        "commission": 15631.079999999998,
        "contract": 10907314.849999996,
        "gp_pct": 29.96391090297092
      },
      {
        "key": "Raleigh",
        "jobs": 64,
        "revenue": 8947128.639999999,
        "expenses": 6275842.939999999,
        "gross_profit": 2671285.7,
        "material": 3372058.179999999,
        "labor": 2835640.22,
        "other": 60887.43,
        "commission": 24122.440000000006,
        "contract": 8959484.229999999,
        "gp_pct": 29.85634618080109
      },
      {
        "key": "Columbus",
        "jobs": 52,
        "revenue": 7751662.729999999,
        "expenses": 5327134.460000001,
        "gross_profit": 2424528.27,
        "material": 2730522.2399999993,
        "labor": 2407124.35,
        "other": 151901.05000000005,
        "commission": 0,
        "contract": 7805172.729999999,
        "gp_pct": 31.277525280050472
      },
      {
        "key": "DC Metro",
        "jobs": 21,
        "revenue": 5036797.589999999,
        "expenses": 2767400.8400000003,
        "gross_profit": 2269396.749999999,
        "material": 1341751.7,
        "labor": 1418630,
        "other": 6695.08,
        "commission": 10707.53,
        "contract": 6190094.03,
        "gp_pct": 45.05634203974434
      },
      {
        "key": "Cleveland",
        "jobs": 40,
        "revenue": 4867525.16,
        "expenses": 2821324.1799999992,
        "gross_profit": 2046200.9800000002,
        "material": 1422793.5800000003,
        "labor": 1348530.4999999998,
        "other": 50091.87999999999,
        "commission": 28116.73,
        "contract": 4863609.34,
        "gp_pct": 42.037810031576704
      },
      {
        "key": "Cincinnati",
        "jobs": 47,
        "revenue": 2570331.4200000004,
        "expenses": 1646141.8200000005,
        "gross_profit": 924189.6000000001,
        "material": 858546.9099999998,
        "labor": 778206.9900000001,
        "other": 8643.12,
        "commission": 18596.600000000006,
        "contract": 2558456.7500000005,
        "gp_pct": 35.9560480336812
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
        "jobs": 5,
        "revenue": 323082.7,
        "expenses": 207533.71999999997,
        "gross_profit": 115548.98,
        "material": 114459.02000000002,
        "labor": 89213,
        "other": 3861.7,
        "commission": 3071.35,
        "contract": 323082.7,
        "gp_pct": 35.76452097249403
      },
      {
        "key": "Knoxville",
        "jobs": 12,
        "revenue": 237968.4,
        "expenses": 179580.94,
        "gross_profit": 58387.45999999999,
        "material": 90661.07000000002,
        "labor": 87086,
        "other": 1839.15,
        "commission": 342.78,
        "contract": 238499.4,
        "gp_pct": 24.53580391346078
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
          "jobs": 13,
          "value": 5518905
        }
      ],
      "totalJobs": 13,
      "totalValue": 5518905
    },
    "commentary": {
      "actionableRecommendations": [
        "Annualized pace is $489K short of the $51.67M plan. Push to invoice WIP balance ($5.5M) faster, or accelerate starts."
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
            "$7.7M",
            "$6.09M",
            33,
            29
          ],
          [
            "April",
            "$4.82M",
            "$3.11M",
            "$1.71M",
            "$5.61M",
            "$8.05M",
            37,
            31
          ],
          [
            "May",
            "$5.07M",
            "$6.37M",
            "$-1.3M",
            "$4.99M",
            "$5.52M",
            37,
            22
          ],
          [
            "June",
            "$0",
            "$3.53M",
            "$-3.53M",
            "$0",
            "$5.52M",
            0,
            0
          ],
          [
            "July",
            "$0",
            "$5.1M",
            "$-5.1M",
            "$0",
            "$5.52M",
            0,
            0
          ],
          [
            "August",
            "$0",
            "$5.13M",
            "$-5.13M",
            "$0",
            "$5.52M",
            0,
            0
          ],
          [
            "September",
            "$0",
            "$4.31M",
            "$-4.31M",
            "$0",
            "$5.52M",
            0,
            0
          ],
          [
            "October",
            "$0",
            "$7.09M",
            "$-7.09M",
            "$0",
            "$5.52M",
            0,
            0
          ],
          [
            "November",
            "$0",
            "$5.65M",
            "$-5.65M",
            "$0",
            "$5.52M",
            0,
            0
          ],
          [
            "December",
            "$0",
            "$5.08M",
            "$-5.08M",
            "$0",
            "$5.52M",
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
            "$5.07M",
            "$-357K",
            "-7%"
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
            "$3.6M",
            "$1.48M",
            26
          ],
          [
            "Detroit",
            "$3.62M",
            "$0",
            22
          ],
          [
            "Raleigh",
            "$2.92M",
            "$486K",
            35
          ],
          [
            "DC Metro",
            "$2.61M",
            "$164K",
            12
          ],
          [
            "Cincinnati",
            "$688K",
            "$1.44M",
            21
          ],
          [
            "Detroit Metro",
            "$0",
            "$1.6M",
            4
          ],
          [
            "Nashville",
            "$628K",
            "$352K",
            10
          ],
          [
            "Cleveland",
            "$736K",
            "$0",
            21
          ],
          [
            "Dayton",
            "$220K",
            "$0",
            3
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
            "$14.07M",
            126
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
            "$758K",
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
            "Job-112878",
            "Capital Property Solutions",
            "Columbus",
            "$647K",
            "2026-05-22"
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
            "Job-111826",
            "Ghertner & Company",
            "Nashville",
            "$352K",
            "2026-04-26"
          ],
          [
            "Job-111615",
            "Johnathan Rose Companies",
            "Detroit Metro",
            "$317K",
            "2026-05-18"
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
            "Job-111645",
            "Rochester Property Management Group",
            "Detroit Metro",
            "$75K",
            "2026-05-22"
          ],
          [
            "Job-108824",
            "Ann Hall",
            "Columbus",
            "$48K",
            "2026-05-14"
          ],
          [
            "Job-110601",
            "Allie Dye",
            "Columbus",
            "$24K",
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
                  5067777.55,
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
                  -356551.7600000007,
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
                  6087069.79,
                  8052398.68,
                  5518905,
                  5518905,
                  5518905,
                  5518905,
                  5518905,
                  5518905,
                  5518905,
                  5518905
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
                  7697486.7,
                  5613239.819999999,
                  4985490.32,
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
                  5067777.55,
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
      5067777.55,
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
      5067777.55,
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
      6087069.79,
      8052398.68,
      5518905,
      5518905,
      5518905,
      5518905,
      5518905,
      5518905,
      5518905,
      5518905
    ],
    "tabs": []
  },
  "BACKLOG": {
    "_source": "calculator/backlog.js v1.0-rules-encoded",
    "title": "Job Backlog & Production",
    "subtitle": "Live job-level backlog",
    "headerMeta": {
      "totalJobs": 94,
      "totalWOs": 374,
      "portfolioValue": 19142803,
      "avgDaysInStatus": 45,
      "lastBuild": "2026-05-27T17:05:48.826Z"
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
        "value": "94",
        "sub": "374 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "7",
        "sub": "7.4% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "87",
        "sub": "92.6% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "2",
        "sub": "28.6% of In Progress",
        "tone": "crit"
      },
      {
        "label": "Avg Days in Status",
        "value": "45",
        "sub": "Job-level average",
        "tone": "warn"
      },
      {
        "label": "Total Portfolio Value",
        "value": "$19.14M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$7.48M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$3.06M",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "2",
        "sub": "28.6% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$3.06M",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "28",
        "sub": "Across 2 jobs",
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
        "sub": "27 open WOs / 1 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "168",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "126",
        "sub": "75.0% of all holds",
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
        "value": "34d",
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
        "value": "$7.48M",
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
        "value": "$3.40M",
        "sub": "Highest single-rep stuck value",
        "tone": "warn"
      }
    ],
    "kpisBacklog": [
      {
        "label": "Not Started Jobs",
        "value": "87",
        "sub": "92.6% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$13.59M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "601d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Detroit Metro",
        "sub": "23 jobs (26.4% of backlog)",
        "tone": "warn"
      }
    ],
    "charts": [
      {
        "id": "ch-wo-status",
        "labels": [
          "On Hold",
          "Scheduled",
          "Completed",
          "Ready to Schedule",
          "In Progress",
          "New"
        ],
        "datasets": [
          {
            "label": "Work Orders",
            "data": [
              168,
              71,
              60,
              46,
              22,
              7
            ]
          }
        ]
      },
      {
        "id": "ch-branch",
        "labels": [
          "Detroit Metro",
          "Columbus",
          "Cincinnati",
          "Cleveland",
          "Raleigh",
          "Richmond",
          "DC Metro",
          "Dayton",
          "Indianapolis",
          "Nashville"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              35,
              24,
              0,
              0,
              0,
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
              17,
              1,
              4,
              1,
              4,
              0,
              1,
              0,
              0,
              1
            ]
          },
          {
            "label": "On Hold",
            "data": [
              36,
              54,
              10,
              36,
              13,
              6,
              7,
              3,
              3,
              0
            ]
          },
          {
            "label": "RTS",
            "data": [
              3,
              24,
              10,
              0,
              5,
              2,
              0,
              2,
              0,
              0
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              38,
              1,
              22,
              0,
              10,
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
          "In Progress",
          "Ready to Schedule",
          "Scheduled",
          "Completed",
          "New"
        ],
        "datasets": [
          {
            "label": "Avg Days",
            "data": [
              34,
              25,
              22,
              12,
              9,
              5
            ]
          },
          {
            "label": "Max Days",
            "data": [
              601,
              191,
              117,
              29,
              68,
              35
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
              59,
              0,
              0,
              1,
              0
            ]
          },
          {
            "label": "Open",
            "data": [
              275,
              24,
              11,
              2,
              2
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
              20,
              8
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
              20,
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
          "Cincinnati",
          "Raleigh",
          "Cleveland",
          "DC Metro",
          "Richmond",
          "Dayton",
          "Indianapolis"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              23,
              16,
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
            129,
            35,
            36,
            3,
            38,
            15,
            0,
            28,
            25,
            8665581
          ],
          [
            "Columbus",
            104,
            24,
            54,
            24,
            1,
            1,
            0,
            37,
            17,
            3236606
          ],
          [
            "Cincinnati",
            46,
            0,
            10,
            10,
            22,
            2,
            0,
            9,
            16,
            2417523
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
            "Raleigh",
            32,
            0,
            13,
            5,
            10,
            2,
            0,
            12,
            13,
            1426378
          ],
          [
            "Richmond",
            9,
            1,
            6,
            2,
            0,
            0,
            0,
            2,
            4,
            160035
          ],
          [
            "DC Metro",
            8,
            0,
            7,
            0,
            0,
            1,
            0,
            3,
            6,
            654993
          ],
          [
            "Dayton",
            5,
            0,
            3,
            2,
            0,
            0,
            0,
            1,
            3,
            216531
          ],
          [
            "Indianapolis",
            3,
            0,
            3,
            0,
            0,
            0,
            0,
            0,
            1,
            75825
          ],
          [
            "Nashville",
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            1,
            352042
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
            124,
            17,
            601
          ],
          [
            "Pending Deposit",
            27,
            25,
            246
          ],
          [
            "Spring Hold",
            7,
            350,
            426
          ],
          [
            "Homeowner Request",
            6,
            79,
            363
          ],
          [
            "(no sub-status)",
            3,
            13,
            16
          ],
          [
            "Pending Material",
            1,
            34,
            34
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
            27,
            1,
            2305395
          ],
          [
            "Gutters",
            1,
            1,
            758345
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
            11
          ],
          [
            "New",
            4
          ],
          [
            "Ready to Schedule",
            4
          ],
          [
            "In Progress",
            3
          ],
          [
            "Scheduled",
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
            334,
            59,
            275,
            74,
            16313042
          ],
          [
            "Gutters",
            24,
            0,
            24,
            24,
            6418873
          ],
          [
            "Siding",
            11,
            0,
            11,
            10,
            2036573
          ],
          [
            "Windows",
            3,
            1,
            2,
            3,
            66348
          ],
          [
            "Other",
            2,
            0,
            2,
            2,
            703555
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
            "Shawn Dunnigan",
            29,
            10,
            3400255,
            9,
            1
          ],
          [
            "Mark Leedy",
            45,
            15,
            1541338,
            5,
            3
          ],
          [
            "Marko Jovanovic",
            8,
            6,
            490554,
            6,
            1
          ],
          [
            "Courtney Lyon",
            14,
            5,
            485830,
            2,
            1
          ],
          [
            "Aaron Ellis",
            1,
            1,
            352042,
            1,
            1
          ],
          [
            "Lisa Gibson",
            26,
            11,
            330186,
            4,
            5
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
            "Evan Hall",
            30,
            11,
            212721,
            3,
            1
          ],
          [
            "Ron Saxe",
            22,
            5,
            183602,
            4,
            1
          ],
          [
            "Jason Crooke",
            9,
            4,
            123449,
            4,
            1
          ],
          [
            "Matthew Cooke",
            1,
            1,
            44845,
            1,
            1
          ],
          [
            "Micah Williamson",
            83,
            9,
            0,
            0,
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
            28,
            1,
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
            5823486,
            338
          ],
          [
            "Columbus",
            16,
            2478261,
            43
          ],
          [
            "Cincinnati",
            14,
            978648,
            117
          ],
          [
            "Raleigh",
            13,
            1426378,
            246
          ],
          [
            "Cleveland",
            8,
            1937289,
            363
          ],
          [
            "DC Metro",
            5,
            490554,
            601
          ],
          [
            "Richmond",
            4,
            160035,
            20
          ],
          [
            "Dayton",
            3,
            216531,
            21
          ],
          [
            "Indianapolis",
            1,
            75825,
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
            "Roofing",
            "Pending Permit",
            "Marko Jovanovic",
            601,
            69162
          ],
          [
            "Job-093347",
            "Comsource Management, Inc.",
            "DC Metro",
            "Roofing",
            "Spring Hold",
            "Marko Jovanovic",
            426,
            205493
          ],
          [
            "Job-097306",
            "Barnett Management Inc.",
            "Cleveland",
            "Gutters",
            "Homeowner Request",
            "Nicholas Andrukat",
            363,
            34652
          ],
          [
            "Job-098561",
            "Compass Management Professionals",
            "Detroit Metro",
            "Roofing",
            "Spring Hold",
            "Shawn Dunnigan",
            338,
            866666
          ],
          [
            "Job-098557",
            "Compass Management Professionals",
            "Detroit Metro",
            "Roofing",
            "Spring Hold",
            "Shawn Dunnigan",
            338,
            866667
          ],
          [
            "Job-098563",
            "Compass Management Professionals",
            "Detroit Metro",
            "Roofing",
            "Spring Hold",
            "Shawn Dunnigan",
            338,
            866667
          ],
          [
            "Job-102699",
            "Main Street Management Group",
            "Raleigh",
            "Gutters",
            "Pending Deposit",
            "Evan Hall",
            246,
            24500
          ],
          [
            "Job-106687",
            "Management Plus",
            "Cincinnati",
            "Other",
            "",
            "Mark Leedy",
            117,
            32200
          ],
          [
            "Job-106353",
            "Towne Properties - Northern Kentucky",
            "Cincinnati",
            "Siding",
            "",
            "Mark Leedy",
            114,
            42560
          ],
          [
            "Job-108318",
            "Towne Properties - Cincinnati West District Office",
            "Cincinnati",
            "Roofing",
            "Pending Deposit",
            "Mark Leedy",
            93,
            27703
          ],
          [
            "Job-108407",
            "Continental Management",
            "Cleveland",
            "Roofing",
            "Pending Permit",
            "Nicholas Andrukat",
            90,
            32035
          ],
          [
            "Job-110180",
            "WPM Real Estate Management",
            "DC Metro",
            "Siding",
            "Pending Permit",
            "Marko Jovanovic",
            54,
            161420
          ],
          [
            "Job-108183",
            "Saint John AME Church",
            "Columbus",
            "Roofing",
            "",
            "Ron Saxe",
            43,
            61440
          ],
          [
            "Job-111653",
            "Sequoia Management",
            "DC Metro",
            "Windows",
            "Pending Deposit",
            "Marko Jovanovic",
            41,
            12548
          ],
          [
            "Job-111825",
            "Capital Property Solutions",
            "Columbus",
            "Siding",
            "Pending Deposit",
            "Ron Saxe",
            37,
            74242
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Columbus",
          "permits": 37
        },
        {
          "branch": "Cleveland",
          "permits": 34
        },
        {
          "branch": "Detroit Metro",
          "permits": 28
        },
        {
          "branch": "Raleigh",
          "permits": 12
        },
        {
          "branch": "Cincinnati",
          "permits": 9
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
          "branch": "Dayton",
          "permits": 1
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $3.06M of trapped partial-job revenue into billable revenue, reduce $7.48M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Roofing sweep: 27 open WOs across 1 partial jobs blocking $2.31M. Highest single-trade leverage in the book.",
        "Columbus permit sweep: 37 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Roofing): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 87 jobs ($13.59M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $3.06M, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 08, 2026 - May 26, 2026 - De-Duplicated at Job Level - 132 Jobs - 11 Markets - 9 PMs",
    "generated": "2026-05-27",
    "headerMeta": {
      "trueRevenue": 14359442.64,
      "uniqueJobs": 132,
      "markets": 11,
      "pms": 9,
      "medianComplete": 53,
      "avgStart": 70.4,
      "multiTradeJobs": 15,
      "singleTradeJobs": 117,
      "multiTradePct": 11.4,
      "lastBuild": "2026-05-27T17:05:48.836Z"
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
        "value": "$14.36M",
        "sub": "132 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$108,784",
        "sub": "Per job (deduped)"
      },
      {
        "label": "Median Days to Complete",
        "value": "53.0d",
        "sub": "Job-level median"
      },
      {
        "label": "Avg Days to Start",
        "value": "70.4d",
        "sub": "Sale to crew on-site"
      },
      {
        "label": "Multi-Trade Jobs",
        "value": "15",
        "sub": "11.4% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "117",
        "sub": "88.6% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$326,868",
        "sub": "+304.4% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$80,824",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+17.0d",
        "sub": "MT 68.4d vs ST 51.4d"
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
        "rev": 3740488.93,
        "jobs": 36,
        "med": 45.9,
        "start": 65.1
      },
      {
        "m": "2026-05",
        "label": "May",
        "key": "2026-05",
        "rev": 5315528,
        "jobs": 36,
        "med": 45,
        "start": 78.5
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
              3740488.93,
              5315528
            ]
          },
          {
            "label": "Jobs",
            "data": [
              14,
              11,
              35,
              36,
              36
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
              45.9,
              45
            ]
          },
          {
            "label": "Avg Days to Start",
            "data": [
              51.7,
              89.5,
              72.8,
              65.1,
              78.5
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
              15
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              117
            ]
          }
        ]
      },
      {
        "id": "ch_combos",
        "labels": [
          "Gutters + Roofing",
          "Gutters + Roofing + Siding",
          "Siding + Windows",
          "Roofing + Siding"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              12,
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
          "DC Metro",
          "Raleigh",
          "Detroit Metro",
          "Cincinnati",
          "Cleveland",
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
              20,
              44.4,
              0,
              4.8,
              31.6,
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
        "id": "ch_mt_vs_st",
        "labels": [
          "Columbus",
          "DC Metro",
          "Raleigh",
          "Detroit Metro",
          "Cincinnati",
          "Cleveland",
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
              54.5,
              67.4,
              0,
              138.4,
              70.4,
              0,
              0,
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
              34.4,
              55,
              48.5,
              70.4,
              41.3,
              43.2,
              63.4,
              29.9,
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
          "DC Metro",
          "Raleigh",
          "Detroit Metro",
          "Cincinnati",
          "Cleveland",
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
              3684004.45,
              3656133,
              2869893.6,
              1796808.94,
              688219.55,
              643530.71,
              513263.27,
              220085,
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
          "DC Metro",
          "Raleigh",
          "Detroit Metro",
          "Cincinnati",
          "Cleveland",
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
              54.5,
              40.6,
              55,
              52.7,
              70.4,
              41.3,
              43.2,
              63.4,
              29.9,
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
          "Erik Patla",
          "Ryan Wolf",
          "Wayne Iles",
          "Jeremy Wolfe",
          "James Foky",
          "Rob Vanderlinden",
          "(Unassigned)"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              3014353.56,
              2623298.4,
              1700962,
              950358.8,
              910480.19,
              905955.93,
              718290.71,
              587513.9,
              430089.64
            ]
          }
        ]
      },
      {
        "id": "ch_pm_scatter",
        "labels": [
          "Brian Walker",
          "Bryan Paquin",
          "Erik Patla",
          "Ryan Wolf",
          "Wayne Iles",
          "Jeremy Wolfe",
          "James Foky",
          "Rob Vanderlinden",
          "(Unassigned)"
        ],
        "datasets": [
          {
            "label": "PMs",
            "data": [
              {
                "x": 47.1,
                "y": 3014353.56,
                "wos": 52,
                "name": "Brian Walker"
              },
              {
                "x": 55.5,
                "y": 2623298.4,
                "wos": 60,
                "name": "Bryan Paquin"
              },
              {
                "x": 44.5,
                "y": 1700962,
                "wos": 18,
                "name": "Erik Patla"
              },
              {
                "x": 48.5,
                "y": 950358.8,
                "wos": 22,
                "name": "Ryan Wolf"
              },
              {
                "x": 70.4,
                "y": 910480.19,
                "wos": 31,
                "name": "Wayne Iles"
              },
              {
                "x": 55.9,
                "y": 905955.93,
                "wos": 25,
                "name": "Jeremy Wolfe"
              },
              {
                "x": 52.5,
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
                "y": 430089.64,
                "wos": 21,
                "name": "(Unassigned)"
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
              11904003.69,
              1512690.89,
              701166.33,
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
              56.5,
              58.9,
              94.3,
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
              90,
              37,
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
              54.4,
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
              11.1,
              13.5,
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
                "x": 54.4,
                "y": 130411.99,
                "jobs": 90,
                "name": "Lisa Gibson"
              },
              {
                "x": 44.2,
                "y": 67139.27,
                "jobs": 37,
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
            3684004.45,
            184200.22,
            54.5,
            52.8,
            20,
            54.5,
            56.4
          ],
          [
            "DC Metro",
            9,
            3656133,
            406237,
            40.6,
            57.9,
            44.4,
            67.4,
            34.4
          ],
          [
            "Raleigh",
            28,
            2869893.6,
            102496.2,
            55,
            78.2,
            0,
            0,
            55
          ],
          [
            "Detroit Metro",
            21,
            1796808.94,
            85562.33,
            52.7,
            77.1,
            4.8,
            138.4,
            48.5
          ],
          [
            "Cincinnati",
            19,
            688219.55,
            36222.08,
            70.4,
            91.2,
            31.6,
            70.4,
            70.4
          ],
          [
            "Cleveland",
            19,
            643530.71,
            33870.04,
            41.3,
            90.7,
            0,
            0,
            41.3
          ],
          [
            "Nashville",
            8,
            513263.27,
            64157.91,
            43.2,
            43.2,
            0,
            0,
            43.2
          ],
          [
            "Dayton",
            3,
            220085,
            73361.67,
            63.4,
            37.6,
            0,
            0,
            63.4
          ],
          [
            "Indianapolis",
            2,
            148724,
            74362,
            29.9,
            25,
            0,
            0,
            29.9
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
            3014353.56,
            57968.34,
            47.1,
            48.8
          ],
          [
            "Bryan Paquin",
            60,
            19,
            2623298.4,
            43721.64,
            55.5,
            72.2
          ],
          [
            "Erik Patla",
            18,
            8,
            1700962,
            94497.89,
            44.5,
            57.9
          ],
          [
            "Ryan Wolf",
            22,
            12,
            950358.8,
            43198.13,
            48.5,
            96.1
          ],
          [
            "Wayne Iles",
            31,
            21,
            910480.19,
            29370.33,
            70.4,
            87.8
          ],
          [
            "Jeremy Wolfe",
            25,
            10,
            905955.93,
            36238.24,
            55.9,
            68.3
          ],
          [
            "James Foky",
            22,
            15,
            718290.71,
            32649.58,
            52.5,
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
            21,
            21,
            430089.64,
            20480.46,
            22.5,
            37.9
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
            237,
            11904003.69,
            50227.86,
            56.5
          ],
          [
            "Gutters",
            30,
            1512690.89,
            50423.03,
            58.9
          ],
          [
            "Siding",
            9,
            701166.33,
            77907.37,
            94.3
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
            90,
            11737079.55,
            130411.99,
            "54.4d",
            "76.7d",
            11.1,
            130411.99
          ],
          [
            "RaShauna Watts",
            37,
            2484153.09,
            67139.27,
            "44.2d",
            "54.4d",
            13.5,
            67139.27
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
            15,
            17,
            14,
            4,
            2,
            18,
            1,
            0,
            5,
            14,
            0,
            90
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
            5,
            1,
            3,
            1,
            2,
            3,
            12,
            1,
            37
          ],
          [
            "Total",
            19,
            19,
            20,
            9,
            3,
            21,
            2,
            2,
            8,
            28,
            1,
            132
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Multi-trade penalty is severe in 1 markets: Detroit Metro MT 138.4d vs ST 48.5d."
      ],
      "watchList": [],
      "positivesToBuildOn": [
        "May delivered $5.32M across 36 invoiced jobs at 45.0-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "Detroit Metro hits 52.6-day median complete and a $85,562 average contract on 21 jobs.",
        "Multi-trade jobs carry a $326,868 average contract versus $80,824 for single-trade, a 304% revenue lift per job."
      ]
    }
  }
};
