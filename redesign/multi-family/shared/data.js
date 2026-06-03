/* AUTO-GENERATED — do not edit. Generated 2026-06-03T13:14:26.024Z (multi-family) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-06-03T13:14:26.024Z",
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
        "builtAt": "2026-06-03T13:14:26.024Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 85,
        "builtAt": "2026-06-03T13:14:26.024Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 14,
        "builtAt": "2026-06-03T13:14:26.024Z"
      },
      {
        "id": "installs-ytd",
        "version": "1.0-rules-encoded",
        "elapsedMs": 10,
        "builtAt": "2026-06-03T13:14:26.024Z"
      }
    ]
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-06-01",
    "ytdDays": 153,
    "rowCount": 265,
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
        "value": "$21.27M",
        "sub": "265 signed contracts across 11 markets"
      },
      {
        "label": "Sold",
        "value": "$21.26M",
        "sub": "262 deals | 98.9% of signed contracts"
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
        "value": "$80,246",
        "sub": "Median: $13,482 | Install avg: $113,736"
      },
      {
        "label": "Organization",
        "value": "23 Reps",
        "sub": "11 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$50.73M",
        "sub": "Based on 153 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "69.8% / 29.8%",
        "sub": "185 installs | 79 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 262,
        "amount": 21260951.14
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
        "count": 49,
        "amount": 3930950.35,
        "installs": 32,
        "repairs": 17,
        "avgDeal": 80223,
        "repairPct": 34.7,
        "installAvg": 121770,
        "repairAvg": 2018
      },
      {
        "key": "2026-06",
        "label": "June",
        "count": 3,
        "amount": 154568,
        "installs": 3,
        "repairs": 0,
        "avgDeal": 51523,
        "repairPct": 0,
        "installAvg": 51523,
        "repairAvg": 0
      }
    ],
    "jobTypeMixByMonth": {
      "Retail-No Financing": {
        "2026-01": 2224228.5,
        "2026-02": 2401613,
        "2026-03": 3376516,
        "2026-04": 6377312.34,
        "2026-05": 3236203,
        "2026-06": 154568
      },
      "Insurance": {
        "2026-01": 1206796.29,
        "2026-02": 50701.66,
        "2026-03": 500,
        "2026-04": 1509845,
        "2026-05": 694747.35,
        "2026-06": 0
      },
      "Retail-Financing": {
        "2026-01": 32200,
        "2026-02": 0,
        "2026-03": 0,
        "2026-04": 0,
        "2026-05": 0,
        "2026-06": 0
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Retail-No Financing",
        "count": 255,
        "amount": 17770440.84,
        "avg": 69688
      },
      {
        "jobType": "Insurance",
        "count": 9,
        "amount": 3462590.3,
        "avg": 384732
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
        "count": 8,
        "amount": 126147.35
      },
      {
        "w": 22,
        "count": 12,
        "amount": 1505057
      },
      {
        "w": 23,
        "count": 3,
        "amount": 154568
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
          5541489.98,
          44,
          125943,
          33,
          11,
          25,
          57
        ],
        [
          "Detroit Metro",
          5507456.5,
          56,
          98347,
          31,
          25,
          44.6,
          22
        ],
        [
          "Raleigh",
          4339360,
          38,
          114194,
          35,
          2,
          5.3,
          102
        ],
        [
          "Cleveland",
          2336859,
          32,
          73027,
          26,
          6,
          18.8,
          26
        ],
        [
          "Cincinnati",
          1362621.66,
          33,
          41292,
          22,
          11,
          33.3,
          31
        ],
        [
          "DC Metro",
          796558,
          27,
          29502,
          14,
          13,
          48.1,
          12
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
        "amount": 3859920,
        "count": 34,
        "avg": 113527,
        "medDays": 15,
        "jt": {
          "Retail-No Financing": 34
        },
        "installs": 12,
        "repairs": 22
      },
      {
        "name": "Evan Hall",
        "amount": 3360019,
        "count": 34,
        "avg": 98824,
        "medDays": 99,
        "jt": {
          "Retail-No Financing": 34
        },
        "installs": 31,
        "repairs": 2
      },
      {
        "name": "Nicholas Andrukat",
        "amount": 2314859,
        "count": 25,
        "avg": 92594,
        "medDays": 26,
        "jt": {
          "Retail-No Financing": 23,
          "Insurance": 2
        },
        "installs": 19,
        "repairs": 6
      },
      {
        "name": "Ron Saxe",
        "amount": 1918226,
        "count": 17,
        "avg": 112837,
        "medDays": 82,
        "jt": {
          "Retail-No Financing": 17
        },
        "installs": 15,
        "repairs": 2
      },
      {
        "name": "Mark Leedy",
        "amount": 1889444.66,
        "count": 37,
        "avg": 51066,
        "medDays": 26,
        "jt": {
          "Retail-No Financing": 35,
          "Retail-Financing": 1,
          "Insurance": 1
        },
        "installs": 28,
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
        "amount": 1431340,
        "count": 15,
        "avg": 95423,
        "medDays": 76,
        "jt": {
          "Retail-No Financing": 15
        },
        "installs": 13,
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
        "name": "Marko Jovanovic",
        "amount": 796558,
        "count": 27,
        "avg": 29502,
        "medDays": 12,
        "jt": {
          "Retail-No Financing": 26,
          "Insurance": 1
        },
        "installs": 14,
        "repairs": 13
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
        "name": "Shawn Dunnigan",
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
        "amount": 100532.35,
        "count": 3,
        "avg": 33511,
        "medDays": 34,
        "jt": {
          "Retail-No Financing": 2,
          "Insurance": 1
        },
        "installs": 3,
        "repairs": 0
      },
      {
        "name": "Lisa Gibson",
        "amount": 74567.03,
        "count": 14,
        "avg": 5326,
        "medDays": 28,
        "jt": {
          "Retail-No Financing": 14
        },
        "installs": 11,
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
      }
    ],
    "speedSellers": [],
    "repairHeavy": [
      {
        "name": "Micah Williamson",
        "repairs": 22,
        "deals": 34,
        "pct": 64.7
      },
      {
        "name": "Jason Crooke",
        "repairs": 5,
        "deals": 10,
        "pct": 50
      },
      {
        "name": "Marko Jovanovic",
        "repairs": 13,
        "deals": 27,
        "pct": 48.1
      }
    ],
    "salesCycle": {
      "kpis": [
        {
          "label": "Overall Median",
          "value": "39 days",
          "sub": "Mean: 94 days (skewed by insurance)"
        },
        {
          "label": "Retail",
          "value": "37 days",
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
          "median": 37,
          "mean": 84,
          "count": 189
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
          "count": 57
        },
        {
          "label": "Install",
          "median": 62,
          "mean": 126,
          "count": 139
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
          "median": 12,
          "mean": 74,
          "count": 24
        },
        {
          "market": "Detroit Metro",
          "median": 22,
          "mean": 57,
          "count": 44
        },
        {
          "market": "Richmond",
          "median": 23,
          "mean": 43,
          "count": 8
        },
        {
          "market": "Cleveland",
          "median": 26,
          "mean": 49,
          "count": 17
        },
        {
          "market": "Cincinnati",
          "median": 31,
          "mean": 44,
          "count": 20
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
          "mean": 243,
          "count": 26
        },
        {
          "market": "Raleigh",
          "median": 102,
          "mean": 122,
          "count": 36
        }
      ],
      "starInsuranceClosers": []
    },
    "completedBilling": {
      "totalUnbilled": 585577,
      "totalJobs": 2,
      "avgAge": 0,
      "medAge": 0,
      "tiers": [
        {
          "label": "Fresh (0-13 days)",
          "count": 2,
          "amount": 585577,
          "color": "green"
        }
      ],
      "bySubStatus": [
        {
          "subStatus": "Ready to Invoice",
          "count": 2,
          "amount": 585577,
          "avgAge": 0,
          "action": "No blockers, submit invoice immediately. This is free cash waiting."
        }
      ],
      "byMarket": [
        {
          "market": "Detroit Metro",
          "count": 1,
          "amount": 539235,
          "avgAge": 0,
          "urgency": "LOW"
        },
        {
          "market": "DC Metro",
          "count": 1,
          "amount": 46342,
          "avgAge": 0,
          "urgency": "LOW"
        }
      ],
      "byRepTop15": [
        {
          "rep": "Shawn Dunnigan",
          "count": 1,
          "amount": 539235,
          "oldest": 0
        },
        {
          "rep": "Marko Jovanovic",
          "count": 1,
          "amount": 46342,
          "oldest": 0
        }
      ],
      "fullJobList": [
        [
          "Job-111500",
          "Gates Hudson Multifamily",
          "Marko Jovanovic",
          "DC Metro",
          "Ready to Invoice",
          46342,
          0,
          "Retail-No Financing"
        ],
        [
          "Job-101478",
          "John P. Carroll",
          "Shawn Dunnigan",
          "Detroit Metro",
          "Ready to Invoice",
          539235,
          0,
          "Retail-No Financing"
        ]
      ]
    },
    "weeklyTargets_BUDGET": {
      "avgWeeklyNeed": 1666877.65,
      "weeksRemaining": 31,
      "annualPlan": 51673207,
      "byJobType": [],
      "byTrade": [],
      "byMarket": [
        {
          "market": "Columbus",
          "total": 434370.34,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.9
        },
        {
          "market": "Detroit Metro",
          "total": 431702.63,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 2.4
        },
        {
          "market": "Raleigh",
          "total": 340141.24,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.7
        },
        {
          "market": "Cleveland",
          "total": 183174.97,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.4
        },
        {
          "market": "Cincinnati",
          "total": 106809.26,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.4
        },
        {
          "market": "DC Metro",
          "total": 62438.29,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 1.2
        },
        {
          "market": "Nashville",
          "total": 39496.69,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.5
        },
        {
          "market": "Dayton",
          "total": 27192.97,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.4
        },
        {
          "market": "Richmond",
          "total": 20446.68,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.4
        },
        {
          "market": "Indianapolis",
          "total": 16892.23,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.1
        },
        {
          "market": "Knoxville",
          "total": 4212.34,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0.1
        }
      ],
      "weekSchedule": [
        {
          "wk": "06/08/2026",
          "mo": "Jun",
          "target": 1666877.65
        },
        {
          "wk": "06/15/2026",
          "mo": "Jun",
          "target": 1666877.65
        },
        {
          "wk": "06/22/2026",
          "mo": "Jun",
          "target": 1666877.65
        },
        {
          "wk": "06/29/2026",
          "mo": "Jun",
          "target": 1666877.65
        },
        {
          "wk": "07/06/2026",
          "mo": "Jul",
          "target": 1666877.65
        },
        {
          "wk": "07/13/2026",
          "mo": "Jul",
          "target": 1666877.65
        },
        {
          "wk": "07/20/2026",
          "mo": "Jul",
          "target": 1666877.65
        },
        {
          "wk": "07/27/2026",
          "mo": "Jul",
          "target": 1666877.65
        },
        {
          "wk": "08/03/2026",
          "mo": "Aug",
          "target": 1666877.65
        },
        {
          "wk": "08/10/2026",
          "mo": "Aug",
          "target": 1666877.65
        },
        {
          "wk": "08/17/2026",
          "mo": "Aug",
          "target": 1666877.65
        },
        {
          "wk": "08/24/2026",
          "mo": "Aug",
          "target": 1666877.65
        },
        {
          "wk": "08/31/2026",
          "mo": "Aug",
          "target": 1666877.65
        },
        {
          "wk": "09/07/2026",
          "mo": "Sep",
          "target": 1666877.65
        },
        {
          "wk": "09/14/2026",
          "mo": "Sep",
          "target": 1666877.65
        },
        {
          "wk": "09/21/2026",
          "mo": "Sep",
          "target": 1666877.65
        },
        {
          "wk": "09/28/2026",
          "mo": "Sep",
          "target": 1666877.65
        },
        {
          "wk": "10/05/2026",
          "mo": "Oct",
          "target": 1666877.65
        },
        {
          "wk": "10/12/2026",
          "mo": "Oct",
          "target": 1666877.65
        },
        {
          "wk": "10/19/2026",
          "mo": "Oct",
          "target": 1666877.65
        },
        {
          "wk": "10/26/2026",
          "mo": "Oct",
          "target": 1666877.65
        },
        {
          "wk": "11/02/2026",
          "mo": "Nov",
          "target": 1666877.65
        },
        {
          "wk": "11/09/2026",
          "mo": "Nov",
          "target": 1666877.65
        },
        {
          "wk": "11/16/2026",
          "mo": "Nov",
          "target": 1666877.65
        },
        {
          "wk": "11/23/2026",
          "mo": "Nov",
          "target": 1666877.65
        },
        {
          "wk": "11/30/2026",
          "mo": "Nov",
          "target": 1666877.65
        },
        {
          "wk": "12/07/2026",
          "mo": "Dec",
          "target": 1666877.65
        },
        {
          "wk": "12/14/2026",
          "mo": "Dec",
          "target": 1666877.65
        },
        {
          "wk": "12/21/2026",
          "mo": "Dec",
          "target": 1666877.65
        },
        {
          "wk": "12/28/2026",
          "mo": "Dec",
          "target": 1666877.65
        }
      ],
      "recent4WkAvg": 672131.84
    },
    "budgetRecovery": {
      "fullYearBudget": 51673207,
      "sourceFile": "2026 Commercial Budget.xlsx",
      "totalToRecover": 0,
      "upliftPct": -4.9,
      "q1Budget": 4533497.2,
      "q1Actual": 5414371.34,
      "q1Shortfall": 880874.14,
      "aprilGap": 1583469.55,
      "aprilBudget": 3233126.48,
      "aprilFcst": 4816596.03,
      "adjWeeklySalesAvg": 1144396.15,
      "origWeeklySalesAvg": 1202844.75,
      "salesDeltaPerWeek": -58448.6,
      "weeksRemaining": 31,
      "adjWeeklyProdAvg": 1144396.15,
      "origWeeklyProdAvg": 1202844.75,
      "prodDeltaPerWeek": -58448.6,
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
          "status": "Actual",
          "liveActual": 5965958.91,
          "deals": 49
        },
        {
          "mo": "Jun 2026",
          "monthIdx": 5,
          "origBudget": 3664695.3,
          "fcst": 3664695.3,
          "recovTarget": 3664695.3,
          "catchUp": 0,
          "status": "Active",
          "deals": 3
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
          "recovTarget": 776410.35,
          "original": 791641.43,
          "delta": -15231.08
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 771641.97,
          "original": 786779.5,
          "delta": -15137.53
        },
        {
          "market": "Raleigh",
          "recovTarget": 607981.61,
          "original": 619908.57,
          "delta": -11926.96
        },
        {
          "market": "Cleveland",
          "recovTarget": 327414.02,
          "original": 333837,
          "delta": -6422.98
        },
        {
          "market": "Cincinnati",
          "recovTarget": 190915,
          "original": 194660.24,
          "delta": -3745.24
        },
        {
          "market": "DC Metro",
          "recovTarget": 111604.62,
          "original": 113794,
          "delta": -2189.38
        },
        {
          "market": "Nashville",
          "recovTarget": 70597.92,
          "original": 71982.86,
          "delta": -1384.94
        },
        {
          "market": "Dayton",
          "recovTarget": 48605.77,
          "original": 49559.29,
          "delta": -953.51
        },
        {
          "market": "Richmond",
          "recovTarget": 36547.19,
          "original": 37264.14,
          "delta": -716.96
        },
        {
          "market": "Indianapolis",
          "recovTarget": 30193.82,
          "original": 30786.14,
          "delta": -592.32
        },
        {
          "market": "Knoxville",
          "recovTarget": 7529.3,
          "original": 7677,
          "delta": -147.7
        }
      ],
      "adjProdByMarket": [
        {
          "market": "Columbus",
          "recovTarget": 776410.35,
          "original": 791641.43,
          "delta": -15231.08
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 771641.97,
          "original": 786779.5,
          "delta": -15137.53
        },
        {
          "market": "Raleigh",
          "recovTarget": 607981.61,
          "original": 619908.57,
          "delta": -11926.96
        },
        {
          "market": "Cleveland",
          "recovTarget": 327414.02,
          "original": 333837,
          "delta": -6422.98
        },
        {
          "market": "Cincinnati",
          "recovTarget": 190915,
          "original": 194660.24,
          "delta": -3745.24
        },
        {
          "market": "DC Metro",
          "recovTarget": 111604.62,
          "original": 113794,
          "delta": -2189.38
        },
        {
          "market": "Nashville",
          "recovTarget": 70597.92,
          "original": 71982.86,
          "delta": -1384.94
        },
        {
          "market": "Dayton",
          "recovTarget": 48605.77,
          "original": 49559.29,
          "delta": -953.51
        },
        {
          "market": "Richmond",
          "recovTarget": 36547.19,
          "original": 37264.14,
          "delta": -716.96
        },
        {
          "market": "Indianapolis",
          "recovTarget": 30193.82,
          "original": 30786.14,
          "delta": -592.32
        },
        {
          "market": "Knoxville",
          "recovTarget": 7529.3,
          "original": 7677,
          "delta": -147.7
        }
      ],
      "actualSource": "NetSuite AR · invoiced revenue",
      "netsuiteTotal": 16196926.28,
      "netsuiteInvoiceCount": 148,
      "netsuiteLatestDate": "2026-05-28"
    },
    "commentary": {
      "whatsWorking": [
        "Sales Trajectory: Monthly sales moved from January $3.46M to June $155K (-96%). Annualized run rate: $50.73M.",
        "Premium Deal Types: Insurance averages $384,732 per deal. Retail-Financing averages $32,200 (highest per-deal value). Retail-No Financing averages $69,688 (the volume engine).",
        "Sold Conversion: 262 of 265 signed contracts (98.9%) have made it to Sold status for $21.26M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Production Review Queue: 2 deals worth $0 sitting in Production Review. Watch for backlog growth, it delays revenue recognition.",
        "Repair Rate Elevated: 29.8% of all deals are repairs (79 of 265). Repairs average ~$2,830, low value relative to installs at $113,736."
      ],
      "criticalRisks": [
        "$586K sitting unbilled in Completed Jobs (2 jobs averaging 0 days).",
        "Pipeline kickbacks company-wide: 0 kickbacks totaling $0.",
        "Production Review backlog: 2 deals ($0)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 37d median close on 189 retail deals.",
        "Insurance Density: $384,732 avg on 9 deals = $3.46M; +20% lift = ~$693K.",
        "June repair rate at 0.0% vs YTD 29.8%, correction in latest month.",
        "Financing Lifts Ticket: Retail-Financing averages $32,200, highest per-deal value."
      ],
      "fixList": [
        "Production Review Bottleneck, 2 deals; add temporary PM capacity.",
        "Financing Push, 1 financing deals YTD (0.4%) at $32,200 avg. Target 15% mix."
      ],
      "actionPlan": {
        "thisWeek": [
          "Invoice Immediately: $586K, 2 jobs marked Ready to Invoice.",
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
          "Repair Business Decision, 79 repairs YTD at ~$2,830 avg.",
          "Ops Capacity Planning, June hit 3 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "_source": "calculator/revenue-forecast-mf.js MF-v1.1-2026-05-04",
    "title": "Multi-Family Revenue Forecast",
    "subtitle": "MF-v1 · Job-by-job event model · Data through 2026-06-03",
    "runDate": "2026-06-03",
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
        "value": "$16.2M",
        "sub": "6 months elapsed"
      },
      {
        "label": "YTD vs Plan",
        "value": "−$1.17M",
        "sub": "Plan YTD: $17.37M",
        "trend": "negative"
      },
      {
        "label": "YTD vs Forecast",
        "value": "+$5.84M",
        "sub": "Lisa's forecast YTD: $10.36M",
        "trend": "positive"
      },
      {
        "label": "Plan-Rest Forecast",
        "value": "$48.56M",
        "sub": "YTD actual + remaining-month plan"
      },
      {
        "label": "Annual Budget",
        "value": "$51.67M",
        "sub": "2026 MF target"
      },
      {
        "label": "Forecast vs Budget",
        "value": "−$3.12M",
        "sub": "6.0% uplift needed",
        "trend": "negative"
      },
      {
        "label": "Current WIP",
        "value": "$5.02M",
        "sub": "15 jobs in flight today"
      },
      {
        "label": "Last Month Revenue",
        "value": "$5.97M",
        "sub": "May 2026"
      }
    ],
    "execSummary": {
      "budget": 51673207,
      "modelAnnualInvoiced": 32393852.560000002,
      "gap": -3118101.5232591406,
      "narrative": "6 months of FY2026 MF activity reported, $16.2M invoiced YTD. Run-rate annualizes to $32.39M against the $51.67M plan, a $3.12M shortfall (6.0% uplift needed)."
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
        "wipChange": 807333.79,
        "netRevenue": 4816596.029999999,
        "startingCount": 31,
        "completingCount": 37,
        "plan": 3111458.0780510968,
        "gap": 1705137.9519489026
      },
      "may": {
        "invoiced": 5965958.91,
        "wipChange": -913908.5899999999,
        "netRevenue": 5965958.91,
        "startingCount": 23,
        "completingCount": 39,
        "plan": 6369333.738681715,
        "gap": -403374.82868171483
      },
      "jun": {
        "invoiced": 0,
        "wipChange": 194792,
        "netRevenue": 0,
        "startingCount": 2,
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
      "gap": 3118101.5232591406,
      "upliftPct": 6.03427134541725,
      "aprilGap": 0,
      "q1OriginalBudget": 0,
      "q1Actual": 0,
      "q1Shortfall": 0,
      "recoveryRatio": 0
    },
    "profitabilitySummary": {
      "combinedGP": 18000912.630000003,
      "combinedGP_pct": 34.44580998997747,
      "combinedRevenue": 52258642.30000003,
      "y2025_GP_pct": 34.45921292607911,
      "y2025_revenue": 44564630.17000004,
      "y2025_jobs": 343,
      "y2026_GP_pct": 34.368178595528136,
      "y2026_revenue": 7694012.130000001,
      "y2026_jobs": 59,
      "materialCost": 17534019.669999994,
      "laborCost": 16212608.150000002,
      "otherCost": 472232.3399999999,
      "commissions": 117539.95999999996,
      "materialPctContract": 33.55238272235018,
      "laborPctContract": 31.023783696730277,
      "otherPctContract": 0.9036444867608046,
      "commissionPctContract": 0.2249196588867367,
      "sourceFile": "GregProfitabilityMFResults94.csv",
      "jobsParsed": 402
    },
    "profitabilityByJobType": [
      {
        "key": "Retail",
        "jobs": 57,
        "revenue": 6434970.420000002,
        "expenses": 4498495.49,
        "gross_profit": 1936474.9300000004,
        "material": 2189845.61,
        "labor": 2278537.4899999998,
        "other": 25797.3,
        "commission": 0,
        "contract": 7684200.890000001,
        "gp_pct": 30.09298883459358
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
        "jobs": 12,
        "revenue": 2917253.74,
        "expenses": 1746329.51,
        "gross_profit": 1170924.2299999995,
        "material": 893444.3099999999,
        "labor": 830954.2999999998,
        "other": 20978.06,
        "commission": 0,
        "contract": 2918248.8400000003,
        "gp_pct": 40.13789455284063
      },
      {
        "key": "Raleigh",
        "jobs": 15,
        "revenue": 1614236.2,
        "expenses": 1103701.73,
        "gross_profit": 510534.4700000001,
        "material": 602870.3799999998,
        "labor": 499999.36,
        "other": 122,
        "commission": 0,
        "contract": 1614236.2,
        "gp_pct": 31.62699919627624
      },
      {
        "key": "Detroit Metro",
        "jobs": 8,
        "revenue": 1541520.1400000001,
        "expenses": 1169475.2500000002,
        "gross_profit": 372044.89,
        "material": 471307.42,
        "labor": 689285.4500000001,
        "other": 7294.43,
        "commission": 0,
        "contract": 2791090.5100000002,
        "gp_pct": 24.13493540214142
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
        "key": "Cincinnati",
        "jobs": 7,
        "revenue": 349757.98000000004,
        "expenses": 185246.68,
        "gross_profit": 164511.3,
        "material": 81966.03,
        "labor": 103248.04,
        "other": 0,
        "commission": 0,
        "contract": 349757.98000000004,
        "gp_pct": 47.035753122773635
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
      }
    ],
    "profitabilityByJobType2025": [
      {
        "key": "Retail",
        "jobs": 323,
        "revenue": 37107936.05000003,
        "expenses": 25023864.189999994,
        "gross_profit": 12084071.860000009,
        "material": 12895818.879999997,
        "labor": 11764213.58,
        "other": 358559.4299999999,
        "commission": 97549.74,
        "contract": 38248868.17000005,
        "gp_pct": 32.56465636816252
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
        "expenses": 7662943.400000001,
        "gross_profit": 3253519.8099999977,
        "material": 3863589.680000001,
        "labor": 3681816.27,
        "other": 129949.63,
        "commission": 15631.079999999998,
        "contract": 10907314.849999996,
        "gp_pct": 29.803790361512146
      },
      {
        "key": "Raleigh",
        "jobs": 64,
        "revenue": 8949128.639999999,
        "expenses": 6275322.169999998,
        "gross_profit": 2673806.47,
        "material": 3369957.4099999988,
        "labor": 2836840.22,
        "other": 60887.43,
        "commission": 24122.440000000006,
        "contract": 8959484.229999999,
        "gp_pct": 29.877841492286343
      },
      {
        "key": "Columbus",
        "jobs": 52,
        "revenue": 7751662.729999999,
        "expenses": 5328430.260000001,
        "gross_profit": 2423232.47,
        "material": 2730668.0399999996,
        "labor": 2408274.35,
        "other": 151901.05000000005,
        "commission": 0,
        "contract": 7805172.729999999,
        "gp_pct": 31.2608088664869
      },
      {
        "key": "DC Metro",
        "jobs": 21,
        "revenue": 5036797.589999999,
        "expenses": 2768407.0900000003,
        "gross_profit": 2268390.499999999,
        "material": 1341751.7,
        "labor": 1419636.25,
        "other": 6695.08,
        "commission": 10707.53,
        "contract": 6190094.03,
        "gp_pct": 45.03636406798709
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
        "jobs": 11,
        "revenue": 195163,
        "expenses": 147431.74999999997,
        "gross_profit": 47731.249999999985,
        "material": 73893.6,
        "labor": 71699,
        "other": 1839.15,
        "commission": 342.78,
        "contract": 195163,
        "gp_pct": 24.457120458283583
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
          "jobs": 15,
          "value": 5017687
        }
      ],
      "totalJobs": 15,
      "totalValue": 5017687
    },
    "commentary": {
      "actionableRecommendations": [
        "Annualized pace is $3.12M short of the $51.67M plan. Push to invoice WIP balance ($5.0M) faster, or accelerate starts."
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
            "$5.62M",
            "$8.06M",
            37,
            31
          ],
          [
            "May",
            "$5.97M",
            "$6.37M",
            "$-403K",
            "$5.05M",
            "$4.82M",
            39,
            23
          ],
          [
            "June",
            "$0",
            "$3.53M",
            "$-3.53M",
            "$195K",
            "$5.02M",
            0,
            2
          ],
          [
            "July",
            "$0",
            "$5.1M",
            "$-5.1M",
            "$0",
            "$5.02M",
            0,
            0
          ],
          [
            "August",
            "$0",
            "$5.13M",
            "$-5.13M",
            "$0",
            "$5.02M",
            0,
            0
          ],
          [
            "September",
            "$0",
            "$4.31M",
            "$-4.31M",
            "$0",
            "$5.02M",
            0,
            0
          ],
          [
            "October",
            "$0",
            "$7.09M",
            "$-7.09M",
            "$0",
            "$5.02M",
            0,
            0
          ],
          [
            "November",
            "$0",
            "$5.65M",
            "$-5.65M",
            "$0",
            "$5.02M",
            0,
            0
          ],
          [
            "December",
            "$0",
            "$5.08M",
            "$-5.08M",
            "$0",
            "$5.02M",
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
            "$5.97M",
            "+$542K",
            "+10%"
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
            "$4.36M",
            "$719K",
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
            "$546K",
            36
          ],
          [
            "DC Metro",
            "$2.61M",
            "$211K",
            13
          ],
          [
            "Cincinnati",
            "$817K",
            "$1.44M",
            22
          ],
          [
            "Detroit Metro",
            "$0",
            "$1.75M",
            5
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
            "$14.98M",
            128
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
            "$539K",
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
            "Job-110360",
            "KS Management",
            "Detroit Metro",
            "$148K",
            "2026-06-01"
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
            "Job-111732",
            "Towne Properties - Raleigh District",
            "Raleigh",
            "$60K",
            "2026-05-28"
          ],
          [
            "Job-108824",
            "Ann Hall",
            "Columbus",
            "$48K",
            "2026-05-14"
          ],
          [
            "Job-111500",
            "Gates Hudson Multifamily",
            "DC Metro",
            "$46K",
            "2026-06-01"
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
                  5965958.91,
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
                  541629.5999999996,
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
                  "#2e7d55",
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
                  8063088.68,
                  4822895,
                  5017687,
                  5017687,
                  5017687,
                  5017687,
                  5017687,
                  5017687,
                  5017687
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
                  5623929.819999999,
                  5052050.32,
                  194792,
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
                  5965958.91,
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
      5965958.91,
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
      5965958.91,
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
      8063088.68,
      4822895,
      5017687,
      5017687,
      5017687,
      5017687,
      5017687,
      5017687,
      5017687
    ],
    "tabs": []
  },
  "BACKLOG": {
    "_source": "calculator/backlog.js v1.0-rules-encoded",
    "title": "Job Backlog & Production",
    "subtitle": "Live job-level backlog",
    "headerMeta": {
      "totalJobs": 103,
      "totalWOs": 397,
      "portfolioValue": 19418623.35,
      "avgDaysInStatus": 44,
      "lastBuild": "2026-06-03T13:14:26.014Z"
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
        "sub": "397 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "6",
        "sub": "5.8% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "97",
        "sub": "94.2% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "1",
        "sub": "16.7% of In Progress",
        "tone": "crit"
      },
      {
        "label": "Avg Days in Status",
        "value": "44",
        "sub": "Job-level average",
        "tone": "warn"
      },
      {
        "label": "Total Portfolio Value",
        "value": "$19.42M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$8.73M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$2.31M",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "1",
        "sub": "16.7% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$2.31M",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "7",
        "sub": "Across 1 jobs",
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
        "sub": "7 open WOs / 1 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "183",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "149",
        "sub": "81.4% of all holds",
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
        "value": "33d",
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
        "value": "$8.73M",
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
        "value": "$3.33M",
        "sub": "Highest single-rep stuck value",
        "tone": "warn"
      }
    ],
    "kpisBacklog": [
      {
        "label": "Not Started Jobs",
        "value": "97",
        "sub": "94.2% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$15.09M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "608d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Detroit Metro",
        "sub": "25 jobs (25.8% of backlog)",
        "tone": "warn"
      }
    ],
    "charts": [
      {
        "id": "ch-wo-status",
        "labels": [
          "On Hold",
          "Ready to Schedule",
          "Completed",
          "Scheduled",
          "In Progress",
          "New"
        ],
        "datasets": [
          {
            "label": "Work Orders",
            "data": [
              183,
              68,
              58,
              50,
              28,
              10
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
          "Raleigh",
          "Cleveland",
          "Richmond",
          "DC Metro",
          "Dayton",
          "Indianapolis",
          "Greenville",
          "Nashville"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              55,
              2,
              0,
              0,
              0,
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
              17,
              2,
              4,
              11,
              0,
              0,
              2,
              0,
              0,
              1,
              1
            ]
          },
          {
            "label": "On Hold",
            "data": [
              38,
              59,
              16,
              17,
              37,
              6,
              4,
              3,
              3,
              0,
              0
            ]
          },
          {
            "label": "RTS",
            "data": [
              5,
              38,
              12,
              5,
              4,
              2,
              0,
              2,
              0,
              0,
              0
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              16,
              2,
              22,
              9,
              0,
              0,
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
              33,
              22,
              21,
              13,
              11,
              4
            ]
          },
          {
            "label": "Max Days",
            "data": [
              608,
              198,
              124,
              36,
              75,
              42
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
              57,
              0,
              0,
              1,
              0
            ]
          },
          {
            "label": "Open",
            "data": [
              299,
              27,
              9,
              2,
              2
            ]
          }
        ]
      },
      {
        "id": "ch-incomplete-status",
        "labels": [
          "In Progress",
          "Scheduled"
        ],
        "datasets": [
          {
            "label": "WOs",
            "data": [
              4,
              3
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
              4,
              0,
              3,
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
          "Richmond",
          "Dayton",
          "Greenville",
          "Indianapolis"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              25,
              18,
              16,
              14,
              10,
              5,
              4,
              3,
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
            "Detroit Metro",
            131,
            55,
            38,
            5,
            16,
            16,
            0,
            30,
            26,
            8231711
          ],
          [
            "Columbus",
            103,
            2,
            59,
            38,
            2,
            0,
            0,
            46,
            18,
            2533948.35
          ],
          [
            "Cincinnati",
            54,
            0,
            16,
            12,
            22,
            2,
            0,
            14,
            16,
            2498535
          ],
          [
            "Raleigh",
            42,
            0,
            17,
            5,
            9,
            8,
            0,
            21,
            17,
            1866138
          ],
          [
            "Cleveland",
            41,
            0,
            37,
            4,
            0,
            0,
            0,
            33,
            10,
            2024522
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
            7,
            0,
            4,
            0,
            1,
            1,
            0,
            2,
            6,
            618962
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
            "Greenville",
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            840374
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
            142,
            15,
            608
          ],
          [
            "Pending Deposit",
            23,
            32,
            253
          ],
          [
            "Spring Hold",
            7,
            357,
            433
          ],
          [
            "Homeowner Request",
            6,
            85,
            370
          ],
          [
            "(no sub-status)",
            4,
            15,
            23
          ],
          [
            "Pending Material",
            1,
            41,
            41
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
            7,
            1,
            2309620
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
            "New",
            3
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
            356,
            57,
            299,
            83,
            16626744.35
          ],
          [
            "Gutters",
            27,
            0,
            27,
            26,
            5923058
          ],
          [
            "Siding",
            9,
            0,
            9,
            9,
            1998441
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
            28,
            9,
            3325405,
            8,
            1
          ],
          [
            "Nicholas Andrukat",
            41,
            10,
            1563914,
            5,
            1
          ],
          [
            "Mark Leedy",
            43,
            15,
            1541338,
            5,
            3
          ],
          [
            "Courtney Lyon",
            17,
            7,
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
            "Micah Williamson",
            83,
            9,
            308669,
            6,
            1
          ],
          [
            "Lisa Gibson",
            36,
            11,
            304136,
            4,
            5
          ],
          [
            "Marko Jovanovic",
            7,
            6,
            287203,
            4,
            1
          ],
          [
            "Evan Hall",
            40,
            15,
            207071,
            3,
            1
          ],
          [
            "Ron Saxe",
            41,
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
            3,
            3,
            44845,
            1,
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
            "Nick Warmath",
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
            25,
            5922091,
            345
          ],
          [
            "Columbus",
            18,
            2533948.35,
            50
          ],
          [
            "Raleigh",
            16,
            1806338,
            253
          ],
          [
            "Cincinnati",
            14,
            1059660,
            124
          ],
          [
            "Cleveland",
            10,
            2024522,
            370
          ],
          [
            "DC Metro",
            5,
            454523,
            608
          ],
          [
            "Richmond",
            4,
            160035,
            27
          ],
          [
            "Dayton",
            3,
            216531,
            28
          ],
          [
            "Greenville",
            1,
            840374,
            0
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
            608,
            69162
          ],
          [
            "Job-093347",
            "Comsource Management, Inc.",
            "DC Metro",
            "Roofing",
            "Spring Hold",
            "Marko Jovanovic",
            433,
            205493
          ],
          [
            "Job-097306",
            "Barnett Management Inc.",
            "Cleveland",
            "Gutters",
            "Homeowner Request",
            "Nicholas Andrukat",
            370,
            34652
          ],
          [
            "Job-098561",
            "Compass Management Professionals",
            "Detroit Metro",
            "Roofing",
            "Spring Hold",
            "Shawn Dunnigan",
            345,
            866666
          ],
          [
            "Job-098557",
            "Compass Management Professionals",
            "Detroit Metro",
            "Roofing",
            "Spring Hold",
            "Shawn Dunnigan",
            345,
            866667
          ],
          [
            "Job-098563",
            "Compass Management Professionals",
            "Detroit Metro",
            "Roofing",
            "Spring Hold",
            "Shawn Dunnigan",
            345,
            866667
          ],
          [
            "Job-102699",
            "Main Street Management Group",
            "Raleigh",
            "Gutters",
            "Pending Deposit",
            "Evan Hall",
            253,
            18850
          ],
          [
            "Job-106687",
            "Management Plus",
            "Cincinnati",
            "Other",
            "",
            "Mark Leedy",
            124,
            32200
          ],
          [
            "Job-106353",
            "Towne Properties - Northern Kentucky",
            "Cincinnati",
            "Siding",
            "",
            "Mark Leedy",
            121,
            42560
          ],
          [
            "Job-108318",
            "Towne Properties - Cincinnati West District Office",
            "Cincinnati",
            "Roofing",
            "Pending Deposit",
            "Mark Leedy",
            100,
            27703
          ],
          [
            "Job-108407",
            "Continental Management",
            "Cleveland",
            "Roofing",
            "Pending Permit",
            "Nicholas Andrukat",
            97,
            32035
          ],
          [
            "Job-108183",
            "Saint John AME Church",
            "Columbus",
            "Roofing",
            "",
            "Ron Saxe",
            50,
            61440
          ],
          [
            "Job-111653",
            "Sequoia Management",
            "DC Metro",
            "Windows",
            "Pending Deposit",
            "Marko Jovanovic",
            48,
            12548
          ],
          [
            "Job-111825",
            "Capital Property Solutions",
            "Columbus",
            "Siding",
            "Pending Deposit",
            "Ron Saxe",
            44,
            74242
          ],
          [
            "Job-111502",
            "Professional Properties Management",
            "Raleigh",
            "Roofing",
            "",
            "Evan Hall",
            42,
            65238
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Columbus",
          "permits": 46
        },
        {
          "branch": "Cleveland",
          "permits": 33
        },
        {
          "branch": "Detroit Metro",
          "permits": 30
        },
        {
          "branch": "Raleigh",
          "permits": 21
        },
        {
          "branch": "Cincinnati",
          "permits": 14
        },
        {
          "branch": "Richmond",
          "permits": 2
        },
        {
          "branch": "DC Metro",
          "permits": 2
        },
        {
          "branch": "Dayton",
          "permits": 1
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $2.31M of trapped partial-job revenue into billable revenue, reduce $8.73M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Roofing sweep: 7 open WOs across 1 partial jobs blocking $2.31M. Highest single-trade leverage in the book.",
        "Columbus permit sweep: 46 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Roofing): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 97 jobs ($15.09M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $2.31M, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 08, 2026 - May 28, 2026 - De-Duplicated at Job Level - 134 Jobs - 11 Markets - 9 PMs",
    "generated": "2026-06-03",
    "headerMeta": {
      "trueRevenue": 15257624,
      "uniqueJobs": 134,
      "markets": 11,
      "pms": 9,
      "medianComplete": 53,
      "avgStart": 70.2,
      "multiTradeJobs": 16,
      "singleTradeJobs": 118,
      "multiTradePct": 11.9,
      "lastBuild": "2026-06-03T13:14:26.024Z"
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
        "value": "$15.26M",
        "sub": "134 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$113,863",
        "sub": "Per job (deduped)"
      },
      {
        "label": "Median Days to Complete",
        "value": "53.0d",
        "sub": "Job-level median"
      },
      {
        "label": "Avg Days to Start",
        "value": "70.2d",
        "sub": "Sale to crew on-site"
      },
      {
        "label": "Multi-Trade Jobs",
        "value": "16",
        "sub": "11.9% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "118",
        "sub": "88.1% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$354,378",
        "sub": "+336.2% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$81,251",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+18.4d",
        "sub": "MT 69.4d vs ST 51.0d"
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
        "rev": 6213709.36,
        "jobs": 38,
        "med": 45,
        "start": 76.9
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
              6213709.36
            ]
          },
          {
            "label": "Jobs",
            "data": [
              14,
              11,
              35,
              36,
              38
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
              76.9
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
              16
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              118
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
              13,
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
              23.8,
              44.4,
              0,
              4.8,
              30,
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
              56.5,
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
              67.9,
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
              4451039.45,
              3656133,
              2871893.6,
              1796808.94,
              817365.91,
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
              56.5,
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
          "Wayne Iles",
          "Ryan Wolf",
          "Jeremy Wolfe",
          "James Foky",
          "Rob Vanderlinden",
          "(Unassigned)"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              3781388.56,
              2625298.4,
              1700962,
              1039626.55,
              950358.8,
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
          "Wayne Iles",
          "Ryan Wolf",
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
                "x": 52.6,
                "y": 3781388.56,
                "wos": 75,
                "name": "Brian Walker"
              },
              {
                "x": 55.5,
                "y": 2625298.4,
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
                "x": 70.4,
                "y": 1039626.55,
                "wos": 34,
                "name": "Wayne Iles"
              },
              {
                "x": 48.5,
                "y": 950358.8,
                "wos": 22,
                "name": "Ryan Wolf"
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
              12768835.7,
              1546040.24,
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
              60.3,
              61.3,
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
              92,
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
              12,
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
                "y": 137339.79,
                "jobs": 92,
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
            21,
            4451039.45,
            211954.26,
            56.5,
            52.5,
            23.8,
            56.5,
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
            2871893.6,
            102567.63,
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
            20,
            817365.91,
            40868.3,
            70.4,
            91.2,
            30,
            70.4,
            67.9
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
            75,
            15,
            3781388.56,
            50418.51,
            52.6,
            48.6
          ],
          [
            "Bryan Paquin",
            60,
            19,
            2625298.4,
            43754.97,
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
            "Wayne Iles",
            34,
            22,
            1039626.55,
            30577.25,
            70.4,
            87.8
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
            262,
            12768835.7,
            48736.01,
            60.3
          ],
          [
            "Gutters",
            31,
            1546040.24,
            49872.27,
            61.3
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
            92,
            12635260.91,
            137339.79,
            "54.4d",
            "76.2d",
            12,
            137339.79
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
            16,
            17,
            15,
            4,
            2,
            18,
            1,
            0,
            5,
            14,
            0,
            92
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
            20,
            19,
            21,
            9,
            3,
            21,
            2,
            2,
            8,
            28,
            1,
            134
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Multi-trade penalty is severe in 1 markets: Detroit Metro MT 138.4d vs ST 48.5d.",
        "Days to Start averages 70.2 days company-wide and 91.2 days in Cincinnati (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [],
      "positivesToBuildOn": [
        "May delivered $6.21M across 38 invoiced jobs at 45.0-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "Detroit Metro hits 52.6-day median complete and a $85,562 average contract on 21 jobs.",
        "Multi-trade jobs carry a $354,378 average contract versus $81,251 for single-trade, a 336% revenue lift per job."
      ]
    }
  }
};
