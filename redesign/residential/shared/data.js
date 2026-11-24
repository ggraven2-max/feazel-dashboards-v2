/* AUTO-GENERATED — do not edit. Generated 2026-11-24T14:04:42.584Z (residential) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-11-24T14:04:42.584Z",
    "pipelineVersion": "2.0.0",
    "lob": "residential",
    "lastBuiltProjects": [
      "sales-overview",
      "revenue-forecast",
      "backlog",
      "installs-ytd"
    ],
    "projects": [
      {
        "id": "installs-ytd",
        "version": "1.0-rules-encoded",
        "elapsedMs": 172,
        "builtAt": "2026-11-24T14:04:42.584Z"
      },
      {
        "id": "sales-overview",
        "version": "1.0-rules-encoded",
        "elapsedMs": 800,
        "builtAt": "2026-11-24T14:04:42.584Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 2546,
        "builtAt": "2026-11-24T14:04:42.584Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 27,
        "builtAt": "2026-11-24T14:04:42.584Z"
      }
    ]
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 06, 2026 - Nov 24, 2026 - De-Duplicated at Job Level - 4,545 Jobs - 14 Markets - 34 PMs",
    "generated": "2026-11-24",
    "headerMeta": {
      "trueRevenue": 88336424.77,
      "uniqueJobs": 4545,
      "markets": 14,
      "pms": 34,
      "medianComplete": 27.7,
      "avgStart": 26.4,
      "multiTradeJobs": 1601,
      "singleTradeJobs": 2944,
      "multiTradePct": 35.2,
      "lastBuild": "2026-11-24T14:04:42.583Z"
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
        "value": "$88.34M",
        "sub": "4,545 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$19,436",
        "sub": "Per job (deduped)"
      },
      {
        "label": "Median Days to Complete",
        "value": "27.7d",
        "sub": "Job-level median"
      },
      {
        "label": "Avg Days to Start",
        "value": "26.4d",
        "sub": "Sale to crew on-site"
      },
      {
        "label": "Multi-Trade Jobs",
        "value": "1,601",
        "sub": "35.2% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "2,944",
        "sub": "64.8% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$24,312",
        "sub": "+44.8% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$16,784",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+20.8d",
        "sub": "MT 42.4d vs ST 21.6d"
      }
    ],
    "monthly": [
      {
        "m": "2026-01",
        "label": "January",
        "key": "2026-01",
        "rev": 3275604.18,
        "jobs": 147,
        "med": 46.6,
        "start": 25.2
      },
      {
        "m": "2026-02",
        "label": "February",
        "key": "2026-02",
        "rev": 2694605.54,
        "jobs": 139,
        "med": 32.5,
        "start": 32.9
      },
      {
        "m": "2026-03",
        "label": "March",
        "key": "2026-03",
        "rev": 5913056.86,
        "jobs": 335,
        "med": 23.5,
        "start": 34.1
      },
      {
        "m": "2026-04",
        "label": "April",
        "key": "2026-04",
        "rev": 7878201.39,
        "jobs": 442,
        "med": 17.6,
        "start": 25.6
      },
      {
        "m": "2026-05",
        "label": "May",
        "key": "2026-05",
        "rev": 8377996.95,
        "jobs": 459,
        "med": 21.7,
        "start": 22
      },
      {
        "m": "2026-06",
        "label": "June",
        "key": "2026-06",
        "rev": 11029046.94,
        "jobs": 556,
        "med": 28.5,
        "start": 24.4
      },
      {
        "m": "2026-07",
        "label": "July",
        "key": "2026-07",
        "rev": 10681299.57,
        "jobs": 536,
        "med": 30.5,
        "start": 26.8
      },
      {
        "m": "2026-08",
        "label": "August",
        "key": "2026-08",
        "rev": 9087763.55,
        "jobs": 451,
        "med": 29.5,
        "start": 27
      },
      {
        "m": "2026-09",
        "label": "September",
        "key": "2026-09",
        "rev": 9372427.08,
        "jobs": 484,
        "med": 28.7,
        "start": 26.1
      },
      {
        "m": "2026-10",
        "label": "October",
        "key": "2026-10",
        "rev": 12163438.13,
        "jobs": 619,
        "med": 32.5,
        "start": 27.1
      },
      {
        "m": "2026-11",
        "label": "November",
        "key": "2026-11",
        "rev": 7862984.58,
        "jobs": 377,
        "med": 31.5,
        "start": 26.8
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
              3275604.18,
              2694605.54,
              5913056.86,
              7878201.39,
              8377996.95,
              11029046.94,
              10681299.57,
              9087763.55,
              9372427.08,
              12163438.13,
              7862984.58
            ]
          },
          {
            "label": "Jobs",
            "data": [
              147,
              139,
              335,
              442,
              459,
              556,
              536,
              451,
              484,
              619,
              377
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
              46.6,
              32.5,
              23.5,
              17.6,
              21.7,
              28.5,
              30.5,
              29.5,
              28.7,
              32.5,
              31.5
            ]
          },
          {
            "label": "Avg Days to Start",
            "data": [
              25.2,
              32.9,
              34.1,
              25.6,
              22,
              24.4,
              26.8,
              27,
              26.1,
              27.1,
              26.8
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
              1601
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              2944
            ]
          }
        ]
      },
      {
        "id": "ch_combos",
        "labels": [
          "Gutters + Roofing",
          "Gutters + Roofing + Siding",
          "Gutters + Siding",
          "Roofing + Siding",
          "Masonry + Roofing",
          "Gutters + Masonry + Roofing",
          "Metal + Roofing",
          "Gutters + Metal + Roofing"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              1022,
              110,
              99,
              92,
              30,
              26,
              23,
              19
            ]
          }
        ]
      },
      {
        "id": "ch_mt_by_market",
        "labels": [
          "Columbus",
          "Detroit Metro",
          "Cleveland",
          "Nashville",
          "DC Metro",
          "Richmond",
          "Cincinnati",
          "Dayton",
          "Raleigh",
          "Knoxville",
          "Greenville",
          "NOVA",
          "Grand Rapids",
          "Greensboro"
        ],
        "datasets": [
          {
            "label": "MT %",
            "data": [
              36.2,
              30.9,
              46.8,
              30.8,
              38.7,
              39.7,
              27.6,
              29.7,
              21.8,
              32.5,
              42.9,
              40,
              42.9,
              100
            ]
          }
        ]
      },
      {
        "id": "ch_mt_vs_st",
        "labels": [
          "Columbus",
          "Detroit Metro",
          "Cleveland",
          "Nashville",
          "DC Metro",
          "Richmond",
          "Cincinnati",
          "Dayton",
          "Raleigh",
          "Knoxville",
          "Greenville",
          "NOVA",
          "Grand Rapids",
          "Greensboro"
        ],
        "datasets": [
          {
            "label": "MT Median",
            "data": [
              46.6,
              43.4,
              57.5,
              22.2,
              25.4,
              35.7,
              41.6,
              37.5,
              35.1,
              27.5,
              26.5,
              64.6,
              59.5,
              346.7
            ]
          },
          {
            "label": "ST Median",
            "data": [
              21.6,
              25.4,
              31.4,
              18.6,
              14.6,
              13.6,
              24.1,
              22.5,
              19.5,
              16.5,
              18.1,
              32.6,
              35.6,
              0
            ]
          }
        ]
      },
      {
        "id": "ch_mk_rev",
        "labels": [
          "Columbus",
          "Detroit Metro",
          "Cleveland",
          "Nashville",
          "DC Metro",
          "Richmond",
          "Cincinnati",
          "Dayton",
          "Raleigh",
          "Knoxville",
          "Greenville",
          "NOVA",
          "Grand Rapids",
          "Greensboro"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              34055579.95,
              12011333.73,
              7403948.01,
              6665948.27,
              5875083.02,
              4661172.23,
              4429590.68,
              4032552.34,
              2966388.85,
              2873335.2,
              2077618.93,
              633235.35,
              616943.8,
              33694.41
            ]
          }
        ]
      },
      {
        "id": "ch_mk_days",
        "labels": [
          "Columbus",
          "Detroit Metro",
          "Cleveland",
          "Nashville",
          "DC Metro",
          "Richmond",
          "Cincinnati",
          "Dayton",
          "Raleigh",
          "Knoxville",
          "Greenville",
          "NOVA",
          "Grand Rapids",
          "Greensboro"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              30.5,
              29.5,
              42.1,
              20.4,
              19.5,
              20.5,
              28.4,
              25.6,
              21.5,
              20.5,
              21.5,
              54,
              45.6,
              346.7
            ]
          }
        ]
      },
      {
        "id": "ch_pm_top",
        "labels": [
          "Mason Bryant",
          "Eric Isakov",
          "Richard Williams",
          "Landon Little",
          "Drew Bailey",
          "Brandon Skrzypek",
          "Joseph Yager",
          "Alex Dubanoski",
          "Shawn Oehlstrom",
          "Jason Andrews-INACTIVE",
          "Alejandro Alvarado",
          "Kaden Carter",
          "Brady Weingartner",
          "Galo Munive",
          "Malik Ford"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              7378315.91,
              7190156.42,
              5982262.42,
              5352535.71,
              4772256.35,
              4624757.82,
              4248633.3,
              4041597.24,
              3774339.57,
              3673770.22,
              3196925.47,
              3016918.39,
              2965257.91,
              2870978.98,
              2747101.61
            ]
          }
        ]
      },
      {
        "id": "ch_pm_scatter",
        "labels": [
          "Mason Bryant",
          "Eric Isakov",
          "Richard Williams",
          "Landon Little",
          "Drew Bailey",
          "Brandon Skrzypek",
          "Joseph Yager",
          "Alex Dubanoski",
          "Shawn Oehlstrom",
          "Jason Andrews-INACTIVE",
          "Alejandro Alvarado",
          "Kaden Carter",
          "Brady Weingartner",
          "Galo Munive",
          "Malik Ford",
          "Joseph Jones",
          "Joshua Collins",
          "Brandon Harter",
          "Abraham Santiago",
          "Daniel Galli",
          "Michael Blevins",
          "Adam Marrero-INACTIVE",
          "Levi Nieman - INACTIVE",
          "Austin Weingartner-INACTIVE",
          "Chad Williams",
          "(Unassigned)",
          "Michael McLaughlin",
          "Cody Mitchell-INACTIVE",
          "Mike Scott",
          "Nathaniel Pardes",
          "Neil Laux",
          "Justin Milliron",
          "Chris Atkins",
          "Spencer Boyette"
        ],
        "datasets": [
          {
            "label": "PMs",
            "data": [
              {
                "x": 32.1,
                "y": 7378315.91,
                "wos": 481,
                "name": "Mason Bryant"
              },
              {
                "x": 29.5,
                "y": 7190156.42,
                "wos": 451,
                "name": "Eric Isakov"
              },
              {
                "x": 33.5,
                "y": 5982262.42,
                "wos": 413,
                "name": "Richard Williams"
              },
              {
                "x": 32.5,
                "y": 5352535.71,
                "wos": 330,
                "name": "Landon Little"
              },
              {
                "x": 33.7,
                "y": 4772256.35,
                "wos": 547,
                "name": "Drew Bailey"
              },
              {
                "x": 32.6,
                "y": 4624757.82,
                "wos": 275,
                "name": "Brandon Skrzypek"
              },
              {
                "x": 30.4,
                "y": 4248633.3,
                "wos": 347,
                "name": "Joseph Yager"
              },
              {
                "x": 21.5,
                "y": 4041597.24,
                "wos": 295,
                "name": "Alex Dubanoski"
              },
              {
                "x": 45.5,
                "y": 3774339.57,
                "wos": 376,
                "name": "Shawn Oehlstrom"
              },
              {
                "x": 35.4,
                "y": 3673770.22,
                "wos": 359,
                "name": "Jason Andrews-INACTIVE"
              },
              {
                "x": 20.5,
                "y": 3196925.47,
                "wos": 228,
                "name": "Alejandro Alvarado"
              },
              {
                "x": 22.4,
                "y": 3016918.39,
                "wos": 226,
                "name": "Kaden Carter"
              },
              {
                "x": 27.1,
                "y": 2965257.91,
                "wos": 169,
                "name": "Brady Weingartner"
              },
              {
                "x": 20.5,
                "y": 2870978.98,
                "wos": 253,
                "name": "Galo Munive"
              },
              {
                "x": 27.5,
                "y": 2747101.61,
                "wos": 175,
                "name": "Malik Ford"
              },
              {
                "x": 20.5,
                "y": 2635510.11,
                "wos": 201,
                "name": "Joseph Jones"
              },
              {
                "x": 45,
                "y": 2531032.08,
                "wos": 185,
                "name": "Joshua Collins"
              },
              {
                "x": 23.5,
                "y": 2483522.89,
                "wos": 138,
                "name": "Brandon Harter"
              },
              {
                "x": 19,
                "y": 2417106.63,
                "wos": 129,
                "name": "Abraham Santiago"
              },
              {
                "x": 56.7,
                "y": 1854309.18,
                "wos": 165,
                "name": "Daniel Galli"
              },
              {
                "x": 21.5,
                "y": 1583364.38,
                "wos": 151,
                "name": "Michael Blevins"
              },
              {
                "x": 19.5,
                "y": 1532394.86,
                "wos": 111,
                "name": "Adam Marrero-INACTIVE"
              },
              {
                "x": 35.6,
                "y": 1163946.04,
                "wos": 72,
                "name": "Levi Nieman - INACTIVE"
              },
              {
                "x": 28.5,
                "y": 972143.45,
                "wos": 68,
                "name": "Austin Weingartner-INACTIVE"
              },
              {
                "x": 49.7,
                "y": 959868.78,
                "wos": 66,
                "name": "Chad Williams"
              },
              {
                "x": 42.5,
                "y": 732941.09,
                "wos": 80,
                "name": "(Unassigned)"
              },
              {
                "x": 100.7,
                "y": 537506.58,
                "wos": 46,
                "name": "Michael McLaughlin"
              },
              {
                "x": 25.4,
                "y": 535023.76,
                "wos": 24,
                "name": "Cody Mitchell-INACTIVE"
              },
              {
                "x": 56.6,
                "y": 465093.21,
                "wos": 63,
                "name": "Mike Scott"
              },
              {
                "x": 18.5,
                "y": 443831.39,
                "wos": 20,
                "name": "Nathaniel Pardes"
              },
              {
                "x": 33.5,
                "y": 425038.81,
                "wos": 25,
                "name": "Neil Laux"
              },
              {
                "x": 68.5,
                "y": 352866.21,
                "wos": 39,
                "name": "Justin Milliron"
              },
              {
                "x": 49.1,
                "y": 262654.48,
                "wos": 43,
                "name": "Chris Atkins"
              },
              {
                "x": 22.1,
                "y": 257927.94,
                "wos": 12,
                "name": "Spencer Boyette"
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
          "Metal",
          "Masonry",
          "Windows",
          "Rack Mounted Solar",
          "GAF Solar",
          "Painting",
          "Flat Roof",
          "Carpentry",
          "Electrical",
          "Other",
          "Skylights",
          "Stucco",
          "Insulation",
          "Unspecified",
          "Door"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              62949845.07,
              15376347.51,
              4907343.69,
              1151409.8,
              967320.4,
              759165.21,
              435331.86,
              406662.67,
              392933.1,
              284395.1,
              264881.27,
              228408.39,
              82018.24,
              57048.61,
              55299.72,
              10924.5,
              4786.5,
              2303.15
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
          "Metal",
          "Masonry",
          "Windows",
          "Rack Mounted Solar",
          "GAF Solar",
          "Painting",
          "Flat Roof",
          "Carpentry",
          "Electrical",
          "Other",
          "Skylights",
          "Stucco",
          "Insulation",
          "Unspecified",
          "Door"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              27.6,
              36.5,
              52.6,
              69.7,
              55.5,
              66.6,
              72.6,
              77.1,
              47.4,
              41.5,
              45,
              43,
              73.6,
              50.4,
              31,
              39.5,
              84.4,
              67.5
            ]
          }
        ]
      },
      {
        "id": "ch_cb_vol",
        "labels": [
          "Brandon Vera",
          "David Schwan",
          "Amanda Wade - INACTIVE",
          "Allison Webb",
          "Ethan Wolfe",
          "Bradley Essex - INACTIVE",
          "Thomas Hayes",
          "Bruce Lemon Jr.",
          "Morgan Valois",
          "Brenda Dixon-INACTIVE",
          "Kayla Wright",
          "Jeff Craft",
          "Brandi Cordray"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              1395,
              1162,
              513,
              400,
              358,
              317,
              271,
              75,
              23,
              20,
              9,
              1,
              1
            ]
          }
        ]
      },
      {
        "id": "ch_cb_eff",
        "labels": [
          "Brandon Vera",
          "David Schwan",
          "Amanda Wade - INACTIVE",
          "Allison Webb",
          "Ethan Wolfe",
          "Bradley Essex - INACTIVE",
          "Thomas Hayes",
          "Bruce Lemon Jr.",
          "Morgan Valois",
          "Brenda Dixon-INACTIVE",
          "Kayla Wright",
          "Jeff Craft",
          "Brandi Cordray"
        ],
        "datasets": [
          {
            "label": "Median Complete",
            "data": [
              31.6,
              24.5,
              23.6,
              26.5,
              26.6,
              31.5,
              29.5,
              37.4,
              127.5,
              34,
              39.6,
              47.5,
              42.6
            ]
          }
        ]
      },
      {
        "id": "ch_cb_mt",
        "labels": [
          "Brandon Vera",
          "David Schwan",
          "Amanda Wade - INACTIVE",
          "Allison Webb",
          "Ethan Wolfe",
          "Bradley Essex - INACTIVE",
          "Thomas Hayes",
          "Bruce Lemon Jr.",
          "Morgan Valois",
          "Brenda Dixon-INACTIVE",
          "Kayla Wright",
          "Jeff Craft",
          "Brandi Cordray"
        ],
        "datasets": [
          {
            "label": "MT %",
            "data": [
              39,
              31.8,
              29,
              38.5,
              34.4,
              36.3,
              33.2,
              45.3,
              60.9,
              30,
              33.3,
              0,
              0
            ]
          }
        ]
      },
      {
        "id": "ch_cb_scatter",
        "labels": [
          "Brandon Vera",
          "David Schwan",
          "Amanda Wade - INACTIVE",
          "Allison Webb",
          "Ethan Wolfe",
          "Bradley Essex - INACTIVE",
          "Thomas Hayes",
          "Bruce Lemon Jr.",
          "Morgan Valois",
          "Brenda Dixon-INACTIVE",
          "Kayla Wright",
          "Jeff Craft",
          "Brandi Cordray"
        ],
        "datasets": [
          {
            "label": "Creators",
            "data": [
              {
                "x": 31.6,
                "y": 19823.42,
                "jobs": 1395,
                "name": "Brandon Vera"
              },
              {
                "x": 24.5,
                "y": 19836.6,
                "jobs": 1162,
                "name": "David Schwan"
              },
              {
                "x": 23.6,
                "y": 17072.35,
                "jobs": 513,
                "name": "Amanda Wade - INACTIVE"
              },
              {
                "x": 26.5,
                "y": 19580.26,
                "jobs": 400,
                "name": "Allison Webb"
              },
              {
                "x": 26.6,
                "y": 19406.56,
                "jobs": 358,
                "name": "Ethan Wolfe"
              },
              {
                "x": 31.5,
                "y": 18809.97,
                "jobs": 317,
                "name": "Bradley Essex - INACTIVE"
              },
              {
                "x": 29.5,
                "y": 19383.55,
                "jobs": 271,
                "name": "Thomas Hayes"
              },
              {
                "x": 37.4,
                "y": 18246.47,
                "jobs": 75,
                "name": "Bruce Lemon Jr."
              },
              {
                "x": 127.5,
                "y": 27851.14,
                "jobs": 23,
                "name": "Morgan Valois"
              },
              {
                "x": 34,
                "y": 30956.79,
                "jobs": 20,
                "name": "Brenda Dixon-INACTIVE"
              },
              {
                "x": 39.6,
                "y": 25382.56,
                "jobs": 9,
                "name": "Kayla Wright"
              },
              {
                "x": 47.5,
                "y": 16913.44,
                "jobs": 1,
                "name": "Jeff Craft"
              },
              {
                "x": 42.6,
                "y": 5600,
                "jobs": 1,
                "name": "Brandi Cordray"
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
            1707,
            34055579.95,
            19950.54,
            30.5,
            28.2,
            36.2,
            46.6,
            21.6
          ],
          [
            "Detroit Metro",
            637,
            12011333.73,
            18856.1,
            29.5,
            33.4,
            30.9,
            43.4,
            25.4
          ],
          [
            "Cleveland",
            408,
            7403948.01,
            18146.93,
            42.1,
            37.2,
            46.8,
            57.5,
            31.4
          ],
          [
            "Nashville",
            292,
            6665948.27,
            22828.59,
            20.4,
            20,
            30.8,
            22.2,
            18.6
          ],
          [
            "DC Metro",
            313,
            5875083.02,
            18770.23,
            19.5,
            19.9,
            38.7,
            25.4,
            14.6
          ],
          [
            "Richmond",
            219,
            4661172.23,
            21283.89,
            20.5,
            16.1,
            39.7,
            35.7,
            13.6
          ],
          [
            "Cincinnati",
            232,
            4429590.68,
            19093.06,
            28.4,
            23.9,
            27.6,
            41.6,
            24.1
          ],
          [
            "Dayton",
            219,
            4032552.34,
            18413.48,
            25.6,
            21.2,
            29.7,
            37.5,
            22.5
          ],
          [
            "Raleigh",
            174,
            2966388.85,
            17048.21,
            21.5,
            20.8,
            21.8,
            35.1,
            19.5
          ],
          [
            "Knoxville",
            166,
            2873335.2,
            17309.25,
            20.5,
            14.8,
            32.5,
            27.5,
            16.5
          ],
          [
            "Greenville",
            112,
            2077618.93,
            18550.17,
            21.5,
            17.1,
            42.9,
            26.5,
            18.1
          ],
          [
            "NOVA",
            30,
            633235.35,
            21107.85,
            54,
            31.2,
            40,
            64.6,
            32.6
          ],
          [
            "Grand Rapids",
            35,
            616943.8,
            17626.97,
            45.6,
            36.2,
            42.9,
            59.5,
            35.6
          ],
          [
            "Greensboro",
            1,
            33694.41,
            33694.41,
            346.7,
            38.6,
            100,
            346.7,
            0
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
            "Mason Bryant",
            481,
            414,
            7378315.91,
            15339.53,
            32.1,
            24.4
          ],
          [
            "Eric Isakov",
            451,
            368,
            7190156.42,
            15942.7,
            29.5,
            25.1
          ],
          [
            "Richard Williams",
            413,
            369,
            5982262.42,
            14484.9,
            33.5,
            28.7
          ],
          [
            "Landon Little",
            330,
            296,
            5352535.71,
            16219.81,
            32.5,
            27.8
          ],
          [
            "Drew Bailey",
            547,
            493,
            4772256.35,
            8724.42,
            33.7,
            25.8
          ],
          [
            "Brandon Skrzypek",
            275,
            267,
            4624757.82,
            16817.3,
            32.6,
            31.8
          ],
          [
            "Joseph Yager",
            347,
            273,
            4248633.3,
            12243.9,
            30.4,
            22.2
          ],
          [
            "Alex Dubanoski",
            295,
            214,
            4041597.24,
            13700.33,
            21.5,
            16.5
          ],
          [
            "Shawn Oehlstrom",
            376,
            282,
            3774339.57,
            10038.14,
            45.5,
            38.8
          ],
          [
            "Jason Andrews-INACTIVE",
            359,
            301,
            3673770.22,
            10233.34,
            35.4,
            35.8
          ],
          [
            "Alejandro Alvarado",
            228,
            170,
            3196925.47,
            14021.6,
            20.5,
            18
          ],
          [
            "Kaden Carter",
            226,
            180,
            3016918.39,
            13349.2,
            22.4,
            21.1
          ],
          [
            "Brady Weingartner",
            169,
            156,
            2965257.91,
            17545.9,
            27.1,
            23.9
          ],
          [
            "Galo Munive",
            253,
            196,
            2870978.98,
            11347.74,
            20.5,
            22.6
          ],
          [
            "Malik Ford",
            175,
            167,
            2747101.61,
            15697.72,
            27.5,
            29.1
          ],
          [
            "Joseph Jones",
            201,
            157,
            2635510.11,
            13111.99,
            20.5,
            14.6
          ],
          [
            "Joshua Collins",
            185,
            182,
            2531032.08,
            13681.25,
            45,
            31.7
          ],
          [
            "Brandon Harter",
            138,
            108,
            2483522.89,
            17996.54,
            23.5,
            20.4
          ],
          [
            "Abraham Santiago",
            129,
            106,
            2417106.63,
            18737.26,
            19,
            19.3
          ],
          [
            "Daniel Galli",
            165,
            131,
            1854309.18,
            11238.24,
            56.7,
            42.1
          ],
          [
            "Michael Blevins",
            151,
            99,
            1583364.38,
            10485.86,
            21.5,
            17.3
          ],
          [
            "Adam Marrero-INACTIVE",
            111,
            91,
            1532394.86,
            13805.36,
            19.5,
            19.6
          ],
          [
            "Levi Nieman - INACTIVE",
            72,
            71,
            1163946.04,
            16165.92,
            35.6,
            40.6
          ],
          [
            "Austin Weingartner-INACTIVE",
            68,
            65,
            972143.45,
            14296.23,
            28.5,
            22.7
          ],
          [
            "Chad Williams",
            66,
            47,
            959868.78,
            14543.47,
            49.7,
            20.2
          ],
          [
            "(Unassigned)",
            80,
            73,
            732941.09,
            9161.76,
            42.5,
            35.4
          ],
          [
            "Michael McLaughlin",
            46,
            46,
            537506.58,
            11684.93,
            100.7,
            62.5
          ],
          [
            "Cody Mitchell-INACTIVE",
            24,
            21,
            535023.76,
            22292.66,
            25.4,
            21.2
          ],
          [
            "Mike Scott",
            63,
            62,
            465093.21,
            7382.43,
            56.6,
            32.3
          ],
          [
            "Nathaniel Pardes",
            20,
            17,
            443831.39,
            22191.57,
            18.5,
            23.1
          ],
          [
            "Neil Laux",
            25,
            22,
            425038.81,
            17001.55,
            33.5,
            27.8
          ],
          [
            "Justin Milliron",
            39,
            35,
            352866.21,
            9047.85,
            68.5,
            49.4
          ],
          [
            "Chris Atkins",
            43,
            38,
            262654.48,
            6108.24,
            49.1,
            47.1
          ],
          [
            "Spencer Boyette",
            12,
            12,
            257927.94,
            21494,
            22.1,
            24.6
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
            4085,
            62949845.07,
            15410,
            27.6
          ],
          [
            "Gutters",
            1622,
            15376347.51,
            9479.87,
            36.5
          ],
          [
            "Siding",
            499,
            4907343.69,
            9834.36,
            52.6
          ],
          [
            "Metal",
            65,
            1151409.8,
            17714,
            69.7
          ],
          [
            "Masonry",
            86,
            967320.4,
            11247.91,
            55.5
          ],
          [
            "Windows",
            71,
            759165.21,
            10692.47,
            66.6
          ],
          [
            "Rack Mounted Solar",
            38,
            435331.86,
            11456.1,
            72.6
          ],
          [
            "GAF Solar",
            6,
            406662.67,
            67777.11,
            77.1
          ],
          [
            "Painting",
            31,
            392933.1,
            12675.26,
            47.4
          ],
          [
            "Flat Roof",
            29,
            284395.1,
            9806.73,
            41.5
          ],
          [
            "Carpentry",
            14,
            264881.27,
            18920.09,
            45
          ],
          [
            "Electrical",
            20,
            228408.39,
            11420.42,
            43
          ],
          [
            "Other",
            10,
            82018.24,
            8201.82,
            73.6
          ],
          [
            "Skylights",
            7,
            57048.61,
            8149.8,
            50.4
          ],
          [
            "Stucco",
            6,
            55299.72,
            9216.62,
            31
          ],
          [
            "Insulation",
            1,
            10924.5,
            10924.5,
            39.5
          ],
          [
            "Unspecified",
            1,
            4786.5,
            4786.5,
            84.4
          ],
          [
            "Door",
            1,
            2303.15,
            2303.15,
            67.5
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
            "Brandon Vera",
            1395,
            27653669.51,
            19823.42,
            "31.6d",
            "27.5d",
            39,
            19823.42
          ],
          [
            "David Schwan",
            1162,
            23050133.47,
            19836.6,
            "24.5d",
            "24.1d",
            31.8,
            19836.6
          ],
          [
            "Amanda Wade - INACTIVE",
            513,
            8758114.84,
            17072.35,
            "23.6d",
            "29d",
            29,
            17072.35
          ],
          [
            "Allison Webb",
            400,
            7832103.22,
            19580.26,
            "26.5d",
            "20.5d",
            38.5,
            19580.26
          ],
          [
            "Ethan Wolfe",
            358,
            6947547.89,
            19406.56,
            "26.6d",
            "21d",
            34.4,
            19406.56
          ],
          [
            "Bradley Essex - INACTIVE",
            317,
            5962759.03,
            18809.97,
            "31.5d",
            "31.4d",
            36.3,
            18809.97
          ],
          [
            "Thomas Hayes",
            271,
            5252942.77,
            19383.55,
            "29.5d",
            "30.9d",
            33.2,
            19383.55
          ],
          [
            "Bruce Lemon Jr.",
            75,
            1368485.49,
            18246.47,
            "37.4d",
            "28.2d",
            45.3,
            18246.47
          ],
          [
            "Morgan Valois",
            23,
            640576.32,
            27851.14,
            "127.5d",
            "103.6d",
            60.9,
            27851.14
          ],
          [
            "Brenda Dixon-INACTIVE",
            20,
            619135.73,
            30956.79,
            "34d",
            "31.3d",
            30,
            30956.79
          ],
          [
            "Kayla Wright",
            9,
            228443.06,
            25382.56,
            "39.6d",
            "15d",
            33.3,
            25382.56
          ],
          [
            "Jeff Craft",
            1,
            16913.44,
            16913.44,
            "47.5d",
            "45.3d",
            0,
            16913.44
          ],
          [
            "Brandi Cordray",
            1,
            5600,
            5600,
            "42.6d",
            "26.4d",
            0,
            5600
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
          "Grand Rapids",
          "Greensboro",
          "Greenville",
          "Knoxville",
          "NOVA",
          "Nashville",
          "Raleigh",
          "Richmond",
          "Total"
        ],
        "rows": [
          [
            "Allison Webb",
            65,
            29,
            252,
            13,
            28,
            8,
            0,
            0,
            1,
            0,
            0,
            0,
            1,
            3,
            400
          ],
          [
            "Amanda Wade - INACTIVE",
            0,
            1,
            376,
            0,
            2,
            1,
            0,
            0,
            54,
            0,
            0,
            1,
            78,
            0,
            513
          ],
          [
            "Bradley Essex - INACTIVE",
            70,
            146,
            2,
            0,
            85,
            14,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            317
          ],
          [
            "Brandi Cordray",
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
            0,
            0,
            0,
            0,
            1
          ],
          [
            "Brandon Vera",
            74,
            154,
            343,
            292,
            98,
            157,
            20,
            0,
            7,
            0,
            30,
            0,
            15,
            205,
            1395
          ],
          [
            "Brenda Dixon-INACTIVE",
            0,
            2,
            17,
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
            20
          ],
          [
            "Bruce Lemon Jr.",
            0,
            23,
            33,
            5,
            1,
            5,
            1,
            0,
            2,
            0,
            0,
            1,
            0,
            4,
            75
          ],
          [
            "David Schwan",
            15,
            20,
            436,
            3,
            0,
            96,
            3,
            0,
            48,
            166,
            0,
            290,
            79,
            6,
            1162
          ],
          [
            "Ethan Wolfe",
            4,
            20,
            180,
            0,
            2,
            149,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            358
          ],
          [
            "Jeff Craft",
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
            0,
            0,
            0,
            1
          ],
          [
            "Kayla Wright",
            0,
            0,
            7,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            9
          ],
          [
            "Morgan Valois",
            0,
            2,
            0,
            0,
            0,
            21,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            23
          ],
          [
            "Thomas Hayes",
            4,
            10,
            60,
            0,
            3,
            185,
            8,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            271
          ],
          [
            "Total",
            232,
            408,
            1707,
            313,
            219,
            637,
            35,
            1,
            112,
            166,
            30,
            292,
            174,
            219,
            4545
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Michael McLaughlin: 46 WOs, $538K revenue, 100.7-day median complete, top-volume PM with the slowest cycle in the network.",
        "Multi-trade penalty is severe in 1 markets: NOVA MT 64.6d vs ST 32.6d.",
        "Days to Start averages 26.4 days company-wide and 37.2 days in Cleveland (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [
        "Gutters-only work runs at 36.5-day median complete versus 27.6 days for roofing, 32% slower cycle on the lowest-priced trade."
      ],
      "positivesToBuildOn": [
        "October delivered $12.16M across 619 invoiced jobs at 32.5-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "DC Metro hits 19.5-day median complete and a $18,770 average contract on 313 jobs.",
        "Multi-trade jobs carry a $24,312 average contract versus $16,784 for single-trade, a 45% revenue lift per job.",
        "Nashville is the best-balanced market: 20.4-day median complete, 30.8% multi-trade attach, $22,829 average contract on 292 jobs."
      ]
    }
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-12-08",
    "ytdDays": 327,
    "rowCount": 5804,
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
        "value": "$100.24M",
        "sub": "5,804 signed contracts across 13 markets"
      },
      {
        "label": "Sold",
        "value": "$98.10M",
        "sub": "5,692 deals | 98.1% of signed contracts"
      },
      {
        "label": "Production Review",
        "value": "$1.67M",
        "sub": "84 deals | Ops Review, PM Review, Contracted"
      },
      {
        "label": "Kicked Back",
        "value": "$373K",
        "sub": "22 deals | 0.4% of signed contracts",
        "trend": "negative"
      },
      {
        "label": "Sales Action",
        "value": "$34K",
        "sub": "2 deals requiring sales follow-up",
        "trend": "neutral"
      },
      {
        "label": "Avg Deal Size",
        "value": "$17,270",
        "sub": "Median: $16,009 | Install avg: $19,661"
      },
      {
        "label": "Organization",
        "value": "186 Reps",
        "sub": "13 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$111.88M",
        "sub": "Based on 327 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "85.9% / 13.9%",
        "sub": "4,987 installs | 808 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 5692,
        "amount": 98099306.71
      },
      {
        "label": "Production Review",
        "count": 84,
        "amount": 1674666.35
      },
      {
        "label": "Kicked Back",
        "count": 22,
        "amount": 372542.59
      },
      {
        "label": "Sales Action",
        "count": 2,
        "amount": 34288
      },
      {
        "label": "Other",
        "count": 4,
        "amount": 55675.06
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
        "count": 182,
        "amount": 3263898.78,
        "installs": 163,
        "repairs": 19,
        "avgDeal": 17934,
        "repairPct": 10.4,
        "installAvg": 19894,
        "repairAvg": 1113
      },
      {
        "key": "2026-02",
        "label": "February",
        "count": 232,
        "amount": 4089185.27,
        "installs": 196,
        "repairs": 36,
        "avgDeal": 17626,
        "repairPct": 15.5,
        "installAvg": 20594,
        "repairAvg": 1464
      },
      {
        "key": "2026-03",
        "label": "March",
        "count": 497,
        "amount": 6907385.18,
        "installs": 386,
        "repairs": 111,
        "avgDeal": 13898,
        "repairPct": 22.3,
        "installAvg": 17349,
        "repairAvg": 1897
      },
      {
        "key": "2026-04",
        "label": "April",
        "count": 784,
        "amount": 12586489.17,
        "installs": 680,
        "repairs": 104,
        "avgDeal": 16054,
        "repairPct": 13.3,
        "installAvg": 18258,
        "repairAvg": 1643
      },
      {
        "key": "2026-05",
        "label": "May",
        "count": 627,
        "amount": 11465193.01,
        "installs": 564,
        "repairs": 63,
        "avgDeal": 18286,
        "repairPct": 10,
        "installAvg": 20068,
        "repairAvg": 2329
      },
      {
        "key": "2026-06",
        "label": "June",
        "count": 630,
        "amount": 11100068.65,
        "installs": 553,
        "repairs": 77,
        "avgDeal": 17619,
        "repairPct": 12.2,
        "installAvg": 19744,
        "repairAvg": 2357
      },
      {
        "key": "2026-07",
        "label": "July",
        "count": 605,
        "amount": 11265564.01,
        "installs": 519,
        "repairs": 86,
        "avgDeal": 18621,
        "repairPct": 14.2,
        "installAvg": 21241,
        "repairAvg": 2811
      },
      {
        "key": "2026-08",
        "label": "August",
        "count": 624,
        "amount": 11103439.45,
        "installs": 543,
        "repairs": 81,
        "avgDeal": 17794,
        "repairPct": 13,
        "installAvg": 19985,
        "repairAvg": 3106
      },
      {
        "key": "2026-09",
        "label": "September",
        "count": 667,
        "amount": 11368181.31,
        "installs": 577,
        "repairs": 90,
        "avgDeal": 17044,
        "repairPct": 13.5,
        "installAvg": 19338,
        "repairAvg": 2335
      },
      {
        "key": "2026-10",
        "label": "October",
        "count": 626,
        "amount": 11399051.98,
        "installs": 531,
        "repairs": 94,
        "avgDeal": 18209,
        "repairPct": 15,
        "installAvg": 20817,
        "repairAvg": 3404
      },
      {
        "key": "2026-11",
        "label": "November",
        "count": 329,
        "amount": 5684609.9,
        "installs": 275,
        "repairs": 46,
        "avgDeal": 17278,
        "repairPct": 14,
        "installAvg": 19394,
        "repairAvg": 3744
      },
      {
        "key": "2026-12",
        "label": "December",
        "count": 1,
        "amount": 3412,
        "installs": 0,
        "repairs": 1,
        "avgDeal": 3412,
        "repairPct": 100,
        "installAvg": 0,
        "repairAvg": 3412
      }
    ],
    "jobTypeMixByMonth": {
      "Retail-No Financing": {
        "2026-01": 1339788.72,
        "2026-02": 1793288.6,
        "2026-03": 2950169.7,
        "2026-04": 4946562.91,
        "2026-05": 4246843.79,
        "2026-06": 4233213.92,
        "2026-07": 4797515.11,
        "2026-08": 4803321.2,
        "2026-09": 4451311.08,
        "2026-10": 4245351.9,
        "2026-11": 1615223.62,
        "2026-12": 3412
      },
      "Insurance": {
        "2026-01": 1437020.6,
        "2026-02": 1686849.5,
        "2026-03": 2811664.92,
        "2026-04": 6323664.43,
        "2026-05": 6209669.79,
        "2026-06": 5839036.3,
        "2026-07": 4990961.88,
        "2026-08": 4512423.02,
        "2026-09": 4823468.3,
        "2026-10": 5319056.45,
        "2026-11": 1623764.36,
        "2026-12": 0
      },
      "Retail-Financing": {
        "2026-01": 487089.46,
        "2026-02": 609047.17,
        "2026-03": 1105473.56,
        "2026-04": 1316261.83,
        "2026-05": 992342.98,
        "2026-06": 994530.43,
        "2026-07": 1381591.63,
        "2026-08": 1752357.96,
        "2026-09": 1920264.53,
        "2026-10": 1704788.34,
        "2026-11": 844940.04,
        "2026-12": 0
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Insurance",
        "count": 2188,
        "amount": 45577579.55,
        "avg": 20831
      },
      {
        "jobType": "Retail-No Financing",
        "count": 2889,
        "amount": 39426002.55,
        "avg": 13647
      },
      {
        "jobType": "Retail-Financing",
        "count": 614,
        "amount": 13108687.93,
        "avg": 21350
      }
    ],
    "weeklyTrend": [
      {
        "w": 1,
        "count": 7,
        "amount": 173909.56
      },
      {
        "w": 2,
        "count": 44,
        "amount": 683781.14
      },
      {
        "w": 3,
        "count": 44,
        "amount": 757883.56
      },
      {
        "w": 4,
        "count": 52,
        "amount": 1036145.12
      },
      {
        "w": 5,
        "count": 35,
        "amount": 612179.4
      },
      {
        "w": 6,
        "count": 54,
        "amount": 598392.06
      },
      {
        "w": 7,
        "count": 51,
        "amount": 834901.83
      },
      {
        "w": 8,
        "count": 46,
        "amount": 749744.52
      },
      {
        "w": 9,
        "count": 81,
        "amount": 1906146.86
      },
      {
        "w": 10,
        "count": 73,
        "amount": 1106739.53
      },
      {
        "w": 11,
        "count": 79,
        "amount": 1155084.3
      },
      {
        "w": 12,
        "count": 140,
        "amount": 1585808.99
      },
      {
        "w": 13,
        "count": 152,
        "amount": 2403039.03
      },
      {
        "w": 14,
        "count": 151,
        "amount": 2185854.8
      },
      {
        "w": 15,
        "count": 174,
        "amount": 2697733.46
      },
      {
        "w": 16,
        "count": 186,
        "amount": 3100710.24
      },
      {
        "w": 17,
        "count": 203,
        "amount": 3342258.07
      },
      {
        "w": 18,
        "count": 163,
        "amount": 2514449.85
      },
      {
        "w": 19,
        "count": 144,
        "amount": 2642864.13
      },
      {
        "w": 20,
        "count": 153,
        "amount": 2647634.97
      },
      {
        "w": 21,
        "count": 144,
        "amount": 2634532.35
      },
      {
        "w": 22,
        "count": 144,
        "amount": 2888619.58
      },
      {
        "w": 23,
        "count": 167,
        "amount": 3201451.35
      },
      {
        "w": 24,
        "count": 147,
        "amount": 2642736.14
      },
      {
        "w": 25,
        "count": 113,
        "amount": 1834605.73
      },
      {
        "w": 26,
        "count": 146,
        "amount": 2580559.16
      },
      {
        "w": 27,
        "count": 129,
        "amount": 2097798.32
      },
      {
        "w": 28,
        "count": 140,
        "amount": 2285703.03
      },
      {
        "w": 29,
        "count": 138,
        "amount": 2362044.03
      },
      {
        "w": 30,
        "count": 139,
        "amount": 2737264.61
      },
      {
        "w": 31,
        "count": 128,
        "amount": 2876686.42
      },
      {
        "w": 32,
        "count": 127,
        "amount": 2115802.39
      },
      {
        "w": 33,
        "count": 151,
        "amount": 2822358.34
      },
      {
        "w": 34,
        "count": 157,
        "amount": 2696615.73
      },
      {
        "w": 35,
        "count": 142,
        "amount": 2569832.21
      },
      {
        "w": 36,
        "count": 153,
        "amount": 2765673.17
      },
      {
        "w": 37,
        "count": 140,
        "amount": 2227000.09
      },
      {
        "w": 38,
        "count": 147,
        "amount": 2592395.86
      },
      {
        "w": 39,
        "count": 159,
        "amount": 2704834.69
      },
      {
        "w": 40,
        "count": 196,
        "amount": 3433619.36
      },
      {
        "w": 41,
        "count": 140,
        "amount": 2492459.29
      },
      {
        "w": 42,
        "count": 142,
        "amount": 2533636.93
      },
      {
        "w": 43,
        "count": 141,
        "amount": 2615536.87
      },
      {
        "w": 44,
        "count": 112,
        "amount": 2101429.74
      },
      {
        "w": 45,
        "count": 133,
        "amount": 2381739.69
      },
      {
        "w": 46,
        "count": 95,
        "amount": 1375224.14
      },
      {
        "w": 47,
        "count": 91,
        "amount": 1737754.43
      },
      {
        "w": 48,
        "count": 10,
        "amount": 189891.64
      },
      {
        "w": 50,
        "count": 1,
        "amount": 3412
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
          39326961.01,
          2148,
          18309,
          1843,
          297,
          13.8,
          11
        ],
        [
          "Detroit Metro",
          13824219.76,
          859,
          16093,
          710,
          149,
          17.3,
          5
        ],
        [
          "Cleveland",
          11131137.09,
          669,
          16638,
          579,
          90,
          13.5,
          15
        ],
        [
          "Nashville",
          6812691.47,
          376,
          18119,
          295,
          81,
          21.5,
          5
        ],
        [
          "DC Metro",
          6071590.76,
          414,
          14666,
          322,
          92,
          22.2,
          9
        ],
        [
          "Richmond",
          5466857.43,
          248,
          22044,
          236,
          11,
          4.4,
          26
        ],
        [
          "Cincinnati",
          5029258.91,
          301,
          16709,
          270,
          31,
          10.3,
          6
        ],
        [
          "Dayton",
          4274338.37,
          257,
          16632,
          228,
          29,
          11.3,
          14
        ],
        [
          "Knoxville",
          2894533.59,
          174,
          16635,
          173,
          1,
          0.6,
          13
        ],
        [
          "Raleigh",
          2671391.1,
          197,
          13560,
          176,
          21,
          10.7,
          6
        ],
        [
          "Greenville",
          1780017.86,
          103,
          17282,
          102,
          1,
          1,
          4
        ],
        [
          "Grand Rapids",
          718265.1,
          43,
          16704,
          40,
          3,
          7,
          33
        ],
        [
          "NOVA",
          235216.26,
          15,
          15681,
          13,
          2,
          13.3,
          18
        ]
      ]
    },
    "closingByBranch": {
      "headers": [
        "Branch",
        "Sum of Sold Deals",
        "Closing Percent",
        "NSLI",
        "Record Count"
      ],
      "rows": [
        {
          "branch": "Columbus",
          "opps": 3650,
          "soldAmt": 22058702.23,
          "closePct": 41.5,
          "nsli": 6043
        },
        {
          "branch": "Detroit",
          "opps": 1625,
          "soldAmt": 10463355.25,
          "closePct": 43.4,
          "nsli": 6439
        },
        {
          "branch": "Cleveland",
          "opps": 1245,
          "soldAmt": 6686663.75,
          "closePct": 35.6,
          "nsli": 5371
        },
        {
          "branch": "DC Metro",
          "opps": 1009,
          "soldAmt": 4007049.04,
          "closePct": 32.4,
          "nsli": 3971
        },
        {
          "branch": "Cincinnati",
          "opps": 817,
          "soldAmt": 3865218.27,
          "closePct": 31.5,
          "nsli": 4731
        },
        {
          "branch": "Nashville",
          "opps": 578,
          "soldAmt": 3704392.47,
          "closePct": 43.1,
          "nsli": 6409
        },
        {
          "branch": "Dayton",
          "opps": 480,
          "soldAmt": 2187218.12,
          "closePct": 31,
          "nsli": 4557
        },
        {
          "branch": "Raleigh",
          "opps": 444,
          "soldAmt": 1690860.86,
          "closePct": 32.4,
          "nsli": 3808
        },
        {
          "branch": "Richmond",
          "opps": 183,
          "soldAmt": 1431035.94,
          "closePct": 42.6,
          "nsli": 7820
        },
        {
          "branch": "Greenville",
          "opps": 221,
          "soldAmt": 1296749.7,
          "closePct": 38,
          "nsli": 5868
        },
        {
          "branch": "Knoxville",
          "opps": 149,
          "soldAmt": 973276.27,
          "closePct": 43.6,
          "nsli": 6532
        },
        {
          "branch": "Grand Rapids",
          "opps": 109,
          "soldAmt": 391221.74,
          "closePct": 24.8,
          "nsli": 3589
        }
      ],
      "totals": {
        "opps": 10515,
        "soldAmt": 58755743.64,
        "closePct": 38.5,
        "nsli": 5588
      },
      "source": "Closing Percent By Branch-2026-11-24-09-00-07.xlsx",
      "format": "per-opportunity"
    },
    "marketKickbacks": [
      {
        "market": "Cleveland",
        "kicked": 7,
        "kickedAmount": 144364.05
      },
      {
        "market": "Columbus",
        "kicked": 5,
        "kickedAmount": 117589.71
      },
      {
        "market": "Raleigh",
        "kicked": 3,
        "kickedAmount": 11673.48
      },
      {
        "market": "Cincinnati",
        "kicked": 2,
        "kickedAmount": 49993.66
      },
      {
        "market": "DC Metro",
        "kicked": 2,
        "kickedAmount": 11204.19
      },
      {
        "market": "Richmond",
        "kicked": 2,
        "kickedAmount": 36317.5
      }
    ],
    "marketJobTypeChart": {
      "_description": "Stacked horizontal bar; sales-by-job-type per branch.",
      "branches": [
        "Columbus",
        "Detroit Metro",
        "Cleveland",
        "Nashville",
        "DC Metro",
        "Richmond",
        "Cincinnati",
        "Dayton",
        "Knoxville",
        "Raleigh",
        "Greenville",
        "Grand Rapids",
        "NOVA"
      ]
    },
    "topPeople": [
      {
        "name": "Kevin Ditty",
        "amount": 2542250.12,
        "count": 126,
        "avg": 20177,
        "medDays": 3,
        "jt": {
          "Insurance": 17,
          "Retail-No Financing": 74,
          "Retail-Financing": 35
        },
        "installs": 104,
        "repairs": 22
      },
      {
        "name": "Storm Drumm",
        "amount": 2539062.82,
        "count": 163,
        "avg": 15577,
        "medDays": 3,
        "jt": {
          "Retail-Financing": 28,
          "Retail-No Financing": 89,
          "Insurance": 39
        },
        "installs": 148,
        "repairs": 15
      },
      {
        "name": "Brian Ogrin",
        "amount": 2356651.49,
        "count": 84,
        "avg": 28055,
        "medDays": 62,
        "jt": {
          "Insurance": 57,
          "Retail-No Financing": 24,
          "Retail-Financing": 1
        },
        "installs": 76,
        "repairs": 6
      },
      {
        "name": "Robert Beck",
        "amount": 2153315.09,
        "count": 77,
        "avg": 27965,
        "medDays": 34,
        "jt": {
          "Insurance": 58,
          "Retail-No Financing": 17,
          "Retail-Financing": 1
        },
        "installs": 72,
        "repairs": 5
      },
      {
        "name": "Stephen Harmon",
        "amount": 2135989.63,
        "count": 108,
        "avg": 19778,
        "medDays": 10,
        "jt": {
          "Retail-No Financing": 100,
          "Insurance": 4,
          "Retail-Financing": 4
        },
        "installs": 97,
        "repairs": 11
      },
      {
        "name": "Sam Scorziell",
        "amount": 2104751.45,
        "count": 91,
        "avg": 23129,
        "medDays": 25,
        "jt": {
          "Insurance": 68,
          "Retail-No Financing": 20,
          "Retail-Financing": 1
        },
        "installs": 87,
        "repairs": 4
      },
      {
        "name": "Frank Drummond",
        "amount": 1986722.47,
        "count": 153,
        "avg": 12985,
        "medDays": 6,
        "jt": {
          "Retail-No Financing": 89,
          "Insurance": 57,
          "Retail-Financing": 6
        },
        "installs": 111,
        "repairs": 42
      },
      {
        "name": "Bill Applegate",
        "amount": 1960481.72,
        "count": 93,
        "avg": 21080,
        "medDays": 37,
        "jt": {
          "Insurance": 59,
          "Retail-No Financing": 28,
          "Retail-Financing": 1
        },
        "installs": 74,
        "repairs": 14
      },
      {
        "name": "Caleb Severance",
        "amount": 1814166.59,
        "count": 84,
        "avg": 21597,
        "medDays": 2,
        "jt": {
          "Retail-No Financing": 56,
          "Retail-Financing": 23,
          "Insurance": 1
        },
        "installs": 73,
        "repairs": 11
      },
      {
        "name": "Clay Hastings",
        "amount": 1741397.12,
        "count": 93,
        "avg": 18725,
        "medDays": 7,
        "jt": {
          "Retail-No Financing": 30,
          "Insurance": 33,
          "Retail-Financing": 28
        },
        "installs": 85,
        "repairs": 8
      },
      {
        "name": "Dave Norris",
        "amount": 1730886.73,
        "count": 127,
        "avg": 13629,
        "medDays": 14,
        "jt": {
          "Retail-No Financing": 77,
          "Retail-Financing": 2,
          "Insurance": 46
        },
        "installs": 92,
        "repairs": 35
      },
      {
        "name": "Cole Burgess",
        "amount": 1688866.84,
        "count": 91,
        "avg": 18559,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 67,
          "Retail-Financing": 16,
          "Insurance": 7
        },
        "installs": 81,
        "repairs": 10
      },
      {
        "name": "Matthew Ross",
        "amount": 1666926.39,
        "count": 98,
        "avg": 17009,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 72,
          "Insurance": 2,
          "Retail-Financing": 21
        },
        "installs": 84,
        "repairs": 14
      },
      {
        "name": "Derrick Sieber",
        "amount": 1648693.04,
        "count": 113,
        "avg": 14590,
        "medDays": 10,
        "jt": {
          "Retail-No Financing": 72,
          "Retail-Financing": 4,
          "Insurance": 37
        },
        "installs": 79,
        "repairs": 34
      },
      {
        "name": "Nick Junker",
        "amount": 1633390.06,
        "count": 79,
        "avg": 20676,
        "medDays": 33,
        "jt": {
          "Insurance": 46,
          "Retail-No Financing": 31,
          "Retail-Financing": 1
        },
        "installs": 74,
        "repairs": 5
      },
      {
        "name": "Michael Conley-INACTIVE",
        "amount": 1575836.27,
        "count": 92,
        "avg": 17129,
        "medDays": 15,
        "jt": {
          "Insurance": 48,
          "Retail-No Financing": 34,
          "Retail-Financing": 9
        },
        "installs": 86,
        "repairs": 6
      },
      {
        "name": "Mark Daggett",
        "amount": 1538789.09,
        "count": 93,
        "avg": 16546,
        "medDays": 5,
        "jt": {
          "Retail-No Financing": 60,
          "Insurance": 26,
          "Retail-Financing": 7
        },
        "installs": 82,
        "repairs": 11
      },
      {
        "name": "Matt Busch",
        "amount": 1526282,
        "count": 94,
        "avg": 16237,
        "medDays": 4,
        "jt": {
          "Retail-No Financing": 63,
          "Retail-Financing": 13,
          "Insurance": 16
        },
        "installs": 77,
        "repairs": 17
      },
      {
        "name": "Austin Mitchell",
        "amount": 1502260.08,
        "count": 56,
        "avg": 26826,
        "medDays": 18,
        "jt": {
          "Insurance": 47,
          "Retail-No Financing": 7,
          "Retail-Financing": 2
        },
        "installs": 54,
        "repairs": 2
      },
      {
        "name": "Frank Butts",
        "amount": 1496441.5,
        "count": 110,
        "avg": 13604,
        "medDays": 10,
        "jt": {
          "Retail-No Financing": 48,
          "Insurance": 58,
          "Retail-Financing": 2
        },
        "installs": 99,
        "repairs": 11
      }
    ],
    "speedSellers": [
      {
        "name": "Adam Petulla",
        "medDays": 1
      },
      {
        "name": "Derik Heinz",
        "medDays": 2
      },
      {
        "name": "Scott Scaperato-INACTIVE",
        "medDays": 2
      },
      {
        "name": "Caleb Severance",
        "medDays": 2
      },
      {
        "name": "David Brumfield",
        "medDays": 2
      },
      {
        "name": "Alec Arehart",
        "medDays": 2
      },
      {
        "name": "Seth Seigler",
        "medDays": 2
      },
      {
        "name": "Mina Khalil",
        "medDays": 2
      }
    ],
    "repairHeavy": [
      {
        "name": "Ryan Johnson-INACTIVE",
        "repairs": 18,
        "deals": 33,
        "pct": 54.5
      },
      {
        "name": "Dan Haske",
        "repairs": 33,
        "deals": 83,
        "pct": 39.8
      },
      {
        "name": "Luke Duquette-INACTIVE",
        "repairs": 15,
        "deals": 44,
        "pct": 34.1
      }
    ],
    "salesCycle": {
      "kpis": [
        {
          "label": "Overall Median",
          "value": "8 days",
          "sub": "Mean: 37 days (skewed by insurance)"
        },
        {
          "label": "Retail",
          "value": "4 days",
          "sub": "All retail job types"
        },
        {
          "label": "Insurance",
          "value": "27 days",
          "sub": "Median | Mean: 63 days"
        },
        {
          "label": "Repair",
          "value": "3 days",
          "sub": "Fast turn, low value"
        }
      ],
      "byJobType": [
        {
          "label": "Retail-No Fin",
          "median": 5,
          "mean": 22,
          "count": 2699
        },
        {
          "label": "Retail-Fin",
          "median": 3,
          "mean": 17,
          "count": 600
        },
        {
          "label": "Insurance",
          "median": 27,
          "mean": 63,
          "count": 2045
        },
        {
          "label": "Repair",
          "median": 3,
          "mean": 15,
          "count": 748
        },
        {
          "label": "Install",
          "median": 10,
          "mean": 41,
          "count": 4695
        }
      ],
      "byMarket": [
        {
          "market": "Greenville",
          "median": 4,
          "mean": 6,
          "count": 100
        },
        {
          "market": "Nashville",
          "median": 5,
          "mean": 21,
          "count": 359
        },
        {
          "market": "Detroit Metro",
          "median": 5,
          "mean": 23,
          "count": 816
        },
        {
          "market": "Cincinnati",
          "median": 6,
          "mean": 29,
          "count": 298
        },
        {
          "market": "Raleigh",
          "median": 6,
          "mean": 45,
          "count": 191
        },
        {
          "market": "DC Metro",
          "median": 9,
          "mean": 42,
          "count": 395
        },
        {
          "market": "Columbus",
          "median": 11,
          "mean": 39,
          "count": 1972
        },
        {
          "market": "Knoxville",
          "median": 13,
          "mean": 45,
          "count": 171
        },
        {
          "market": "Dayton",
          "median": 14,
          "mean": 42,
          "count": 249
        },
        {
          "market": "Cleveland",
          "median": 15,
          "mean": 41,
          "count": 609
        },
        {
          "market": "NOVA",
          "median": 18,
          "mean": 63,
          "count": 15
        },
        {
          "market": "Richmond",
          "median": 26,
          "mean": 82,
          "count": 235
        },
        {
          "market": "Grand Rapids",
          "median": 33,
          "mean": 53,
          "count": 40
        }
      ],
      "starInsuranceClosers": [
        {
          "name": "Nelson Sutton",
          "medDays": 1,
          "count": 3
        },
        {
          "name": "Jacob Perry",
          "medDays": 2,
          "count": 8
        },
        {
          "name": "Tyler Mentges-INACTIVE",
          "medDays": 3,
          "count": 3
        },
        {
          "name": "Scott Scaperato-INACTIVE",
          "medDays": 4,
          "count": 12
        },
        {
          "name": "Matt Williams",
          "medDays": 4,
          "count": 10
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
      "avgWeeklyNeed": 3750862,
      "byJobType": [
        {
          "type": "Insurance",
          "perWeek": 1772478,
          "mix": 47.3
        },
        {
          "type": "Retail-No Financing",
          "perWeek": 1504981,
          "mix": 40.1
        },
        {
          "type": "Retail-Financing",
          "perWeek": 473403,
          "mix": 12.6
        }
      ],
      "byTrade": [
        {
          "trade": "Roofing",
          "perWeek": 2116563,
          "mix": 56.4
        },
        {
          "trade": "Gutters",
          "perWeek": 1374143,
          "mix": 36.6
        },
        {
          "trade": "Siding",
          "perWeek": 88960,
          "mix": 2.4
        },
        {
          "trade": "Metal",
          "perWeek": 38467,
          "mix": 1
        },
        {
          "trade": "GAF Solar",
          "perWeek": 32232,
          "mix": 0.9
        },
        {
          "trade": "Masonry",
          "perWeek": 22382,
          "mix": 0.6
        },
        {
          "trade": "Rack Mounted Solar",
          "perWeek": 20468,
          "mix": 0.5
        },
        {
          "trade": "Flat Roof",
          "perWeek": 20078,
          "mix": 0.5
        }
      ],
      "byMarket": [
        {
          "market": "Columbus",
          "total": 1457677,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0
        },
        {
          "market": "Detroit Metro",
          "total": 491497,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0
        },
        {
          "market": "Cleveland",
          "total": 403255,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0
        },
        {
          "market": "Nashville",
          "total": 282268,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0
        },
        {
          "market": "DC Metro",
          "total": 255859,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0
        },
        {
          "market": "Dayton",
          "total": 183531,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0
        },
        {
          "market": "Richmond",
          "total": 183405,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0
        },
        {
          "market": "Cincinnati",
          "total": 176440,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0
        },
        {
          "market": "Knoxville",
          "total": 105940,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0
        },
        {
          "market": "Raleigh",
          "total": 101987,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0
        },
        {
          "market": "Greenville",
          "total": 75588,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0
        },
        {
          "market": "Grand Rapids",
          "total": 33417,
          "retNoFin": 0,
          "ins": 0,
          "retFin": 0,
          "deals": 0
        }
      ],
      "weekSchedule": [
        {
          "wk": "09/20/2026",
          "mo": "Sep",
          "target": 5370235
        },
        {
          "wk": "09/27/2026",
          "mo": "Sep",
          "target": 4918471
        },
        {
          "wk": "10/04/2026",
          "mo": "Oct",
          "target": 4316118
        },
        {
          "wk": "10/11/2026",
          "mo": "Oct",
          "target": 4316118
        },
        {
          "wk": "10/18/2026",
          "mo": "Oct",
          "target": 4316118
        },
        {
          "wk": "10/25/2026",
          "mo": "Oct",
          "target": 4316118
        },
        {
          "wk": "11/01/2026",
          "mo": "Nov",
          "target": 3839885
        },
        {
          "wk": "11/08/2026",
          "mo": "Nov",
          "target": 3839885
        },
        {
          "wk": "11/15/2026",
          "mo": "Nov",
          "target": 3839885
        },
        {
          "wk": "11/22/2026",
          "mo": "Nov",
          "target": 3839885
        },
        {
          "wk": "11/29/2026",
          "mo": "Nov",
          "target": 3073417
        },
        {
          "wk": "12/06/2026",
          "mo": "Dec",
          "target": 2766829
        },
        {
          "wk": "12/13/2026",
          "mo": "Dec",
          "target": 2766829
        },
        {
          "wk": "12/20/2026",
          "mo": "Dec",
          "target": 2766829
        },
        {
          "wk": "12/27/2026",
          "mo": "Dec",
          "target": 1976307
        }
      ],
      "recent4WkAvg": 826570.55
    },
    "budgetRecovery": {
      "fullYearBudget": 125890005,
      "totalToRecover": 15524395,
      "upliftPct": 41.9,
      "q1Budget": 75227639,
      "q1Actual": 60283910,
      "q1Shortfall": 14943729,
      "aprilGap": 580666,
      "aprilBudget": 14242103,
      "aprilFcst": 13661437,
      "adjWeeklySalesAvg": 3750862,
      "origWeeklySalesAvg": 2643333,
      "salesDeltaPerWeek": 1107529,
      "adjWeeklyProdAvg": 3796923,
      "origWeeklyProdAvg": 2776158,
      "prodDeltaPerWeek": 1020766,
      "monthlyBridge": [
        {
          "mo": "Jan 2026",
          "origBudget": 3233666,
          "fcst": 3055453,
          "recovTarget": 3312733,
          "catchUp": 0,
          "status": "Actual"
        },
        {
          "mo": "Feb 2026",
          "origBudget": 2775688,
          "fcst": 3079743,
          "recovTarget": 2855781,
          "catchUp": 0,
          "status": "Actual"
        },
        {
          "mo": "Mar 2026",
          "origBudget": 6149893,
          "fcst": 4485790,
          "recovTarget": 6228299,
          "catchUp": 0,
          "status": "Actual"
        },
        {
          "mo": "Apr 2026",
          "origBudget": 10011012,
          "fcst": 7570070,
          "recovTarget": 8405960,
          "catchUp": 0,
          "status": "Actual"
        },
        {
          "mo": "May 2026",
          "origBudget": 14218608,
          "fcst": 9940046,
          "recovTarget": 8564976,
          "catchUp": 0,
          "status": "Actual",
          "liveActual": 11465193.01
        },
        {
          "mo": "Jun 2026",
          "origBudget": 14192413,
          "fcst": 11025767,
          "recovTarget": 11088423,
          "catchUp": 0,
          "status": "Actual"
        },
        {
          "mo": "Jul 2026",
          "origBudget": 13850809,
          "fcst": 11392414,
          "recovTarget": 10676121,
          "catchUp": 0,
          "status": "Actual"
        },
        {
          "mo": "Aug 2026",
          "origBudget": 10795551,
          "fcst": 10864774,
          "recovTarget": 9151616,
          "catchUp": 0,
          "status": "Actual"
        },
        {
          "mo": "Sep 2026",
          "origBudget": 14242103,
          "fcst": 13661437,
          "recovTarget": 13661437,
          "catchUp": 0,
          "status": "Forecast"
        },
        {
          "mo": "Oct 2026",
          "origBudget": 13564662,
          "fcst": 13722435,
          "recovTarget": 19346695,
          "catchUp": 5782033,
          "status": "Recovery"
        },
        {
          "mo": "Nov 2026",
          "origBudget": 12787289,
          "fcst": 12538533,
          "recovTarget": 18237961,
          "catchUp": 5450672,
          "status": "Recovery"
        },
        {
          "mo": "Dec 2026",
          "origBudget": 10068313,
          "fcst": 10345830,
          "recovTarget": 14360002,
          "catchUp": 4291689,
          "status": "Recovery"
        }
      ],
      "adjSalesByMarket": [
        {
          "market": "Columbus",
          "recovTarget": 1457677,
          "original": 1027264,
          "delta": 430413
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 491497,
          "original": 346371,
          "delta": 145126
        },
        {
          "market": "Cleveland",
          "recovTarget": 403255,
          "original": 284184,
          "delta": 119070
        },
        {
          "market": "Nashville",
          "recovTarget": 282268,
          "original": 198922,
          "delta": 83346
        },
        {
          "market": "DC Metro",
          "recovTarget": 255859,
          "original": 180311,
          "delta": 75548
        },
        {
          "market": "Dayton",
          "recovTarget": 183531,
          "original": 129339,
          "delta": 54192
        },
        {
          "market": "Richmond",
          "recovTarget": 183405,
          "original": 129250,
          "delta": 54154
        },
        {
          "market": "Cincinnati",
          "recovTarget": 176440,
          "original": 124342,
          "delta": 52098
        },
        {
          "market": "Knoxville",
          "recovTarget": 105940,
          "original": 74659,
          "delta": 31281
        },
        {
          "market": "Raleigh",
          "recovTarget": 101987,
          "original": 71873,
          "delta": 30114
        },
        {
          "market": "Greenville",
          "recovTarget": 75588,
          "original": 53269,
          "delta": 22319
        },
        {
          "market": "Grand Rapids",
          "recovTarget": 33417,
          "original": 23550,
          "delta": 9867
        }
      ],
      "adjProdByMarket": [
        {
          "market": "Columbus",
          "recovTarget": 1144004,
          "pct": 30.1
        },
        {
          "market": "Detroit Metro",
          "recovTarget": 592499,
          "pct": 15.6
        },
        {
          "market": "DC Metro",
          "recovTarget": 423908,
          "pct": 11.2
        },
        {
          "market": "Nashville",
          "recovTarget": 354983,
          "pct": 9.3
        },
        {
          "market": "Cincinnati",
          "recovTarget": 273691,
          "pct": 7.2
        },
        {
          "market": "Richmond",
          "recovTarget": 243127,
          "pct": 6.4
        },
        {
          "market": "Cleveland",
          "recovTarget": 198381,
          "pct": 5.2
        },
        {
          "market": "Dayton",
          "recovTarget": 175824,
          "pct": 4.6
        },
        {
          "market": "Raleigh",
          "recovTarget": 142053,
          "pct": 3.7
        },
        {
          "market": "Knoxville",
          "recovTarget": 125627,
          "pct": 3.3
        },
        {
          "market": "Greenville",
          "recovTarget": 62348,
          "pct": 1.6
        },
        {
          "market": "Grand Rapids",
          "recovTarget": 40910,
          "pct": 1.1
        },
        {
          "market": "Indianapolis",
          "recovTarget": 16240,
          "pct": 0.4
        },
        {
          "market": "Greensboro",
          "recovTarget": 3327,
          "pct": 0.1
        }
      ]
    },
    "pathToPlan": {
      "_comment": "Generated by build-path-to-plan.py from live V5 output. Conversion rates are survivorship-biased optimistic; see the module docstring. V5 remains the forecast of record.",
      "generatedAt": "2026-11-23T09:04:29-05:00",
      "modelRunDate": "2026-11-20",
      "fiscalYear": 2026,
      "gap": {
        "fullYearBudget": 123956895,
        "invoicedYtd": 89037130,
        "stillToInvoice": 34919765,
        "daysRemaining": 41,
        "weeksRemaining": 6
      },
      "bridge": {
        "rows": [
          {
            "label": "In Progress",
            "amount": 7873874,
            "convertPct": 85.9,
            "lands": 6766114,
            "note": "Already installing. Needs completion and billing only."
          },
          {
            "label": "Not Started",
            "amount": 8755555,
            "convertPct": 66.9,
            "lands": 5860276,
            "note": "Sold and processed, awaiting schedule. Throughput decides this."
          },
          {
            "label": "Sold Not Processed",
            "amount": 1947296,
            "convertPct": 66.9,
            "lands": 1303366,
            "note": "Signed but not yet a job. Processing delay is pure lost time."
          }
        ],
        "alreadySoldLands": 13929756,
        "mustBeNewlySoldNet": 20990009,
        "mustBeNewlySoldGross": 57245478,
        "meanCapturePct": 36.7
      },
      "sellingWindow": {
        "weeks": [
          {
            "weekStart": "11/20/2026",
            "daysToYearEnd": 41,
            "capturePct": 66.9,
            "valueOfOneMillion": 669321
          },
          {
            "weekStart": "11/27/2026",
            "daysToYearEnd": 34,
            "capturePct": 58.3,
            "valueOfOneMillion": 582670
          },
          {
            "weekStart": "12/04/2026",
            "daysToYearEnd": 27,
            "capturePct": 45.9,
            "valueOfOneMillion": 459016
          },
          {
            "weekStart": "12/11/2026",
            "daysToYearEnd": 20,
            "capturePct": 31.3,
            "valueOfOneMillion": 313115
          },
          {
            "weekStart": "12/18/2026",
            "daysToYearEnd": 13,
            "capturePct": 15.2,
            "valueOfOneMillion": 151756
          },
          {
            "weekStart": "12/25/2026",
            "daysToYearEnd": 6,
            "capturePct": 2.4,
            "valueOfOneMillion": 24356
          }
        ],
        "belowThreeQuartersFrom": "11/20/2026",
        "belowHalfFrom": "12/04/2026"
      },
      "pullForward": {
        "backlogTotal": 18576726,
        "perDay": 197731,
        "perWeek": 863780,
        "leverageCurve": [
          {
            "daysBeforeYearEnd": 41,
            "onDate": "11/20/2026",
            "worthPerDay": 197731
          },
          {
            "daysBeforeYearEnd": 30,
            "onDate": "12/01/2026",
            "worthPerDay": 190164
          },
          {
            "daysBeforeYearEnd": 21,
            "onDate": "12/10/2026",
            "worthPerDay": 346514
          },
          {
            "daysBeforeYearEnd": 14,
            "onDate": "12/17/2026",
            "worthPerDay": 417643
          },
          {
            "daysBeforeYearEnd": 7,
            "onDate": "12/24/2026",
            "worthPerDay": 512039
          }
        ],
        "strandedBacklog": 4646970,
        "completedAwaitingInvoice": {
          "total": 2254664,
          "jobs": 96,
          "medianAgeDays": 6,
          "agingBuckets": [
            {
              "bucket": "0-15 days",
              "jobs": 59,
              "amount": 1257223
            },
            {
              "bucket": "15-30 days",
              "jobs": 15,
              "amount": 503125
            },
            {
              "bucket": "30-60 days",
              "jobs": 8,
              "amount": 209819
            },
            {
              "bucket": "60-90 days",
              "jobs": 4,
              "amount": 123726
            },
            {
              "bucket": "over 90 days",
              "jobs": 3,
              "amount": 64266
            }
          ],
          "byReason": [
            {
              "reason": "Pending Supplement",
              "jobs": 33,
              "amount": 999920
            },
            {
              "reason": "Ready to Invoice",
              "jobs": 42,
              "amount": 875463
            },
            {
              "reason": "Accounting Kickback",
              "jobs": 13,
              "amount": 235308
            },
            {
              "reason": "Unspecified",
              "jobs": 8,
              "amount": 143975
            }
          ],
          "note": "Work finished but not invoiced. No selling and no scheduling required, only the blocking process cleared."
        },
        "note": "Revenue moved into 2026 by finishing and billing existing work sooner. Requires no new selling."
      },
      "capacity": {
        "requiredPerWeek": 9540913,
        "demonstratedPerWeek": 2113646,
        "liftRequiredPct": 351.4,
        "trendPerWeek": -173431
      },
      "scenarios": [
        {
          "name": "Hold current pace",
          "weeklySales": 2113646,
          "newSalesRevenue": 4650021,
          "landsAt": 107616907,
          "note": "Trailing 4-week average, carried flat."
        },
        {
          "name": "Stretch +15%",
          "weeklySales": 2430693,
          "newSalesRevenue": 5347524,
          "landsAt": 108314410,
          "note": "Ambitious but inside what the team has produced before."
        },
        {
          "name": "Required to hit plan",
          "weeklySales": 9540913,
          "newSalesRevenue": 20990009,
          "landsAt": 123956895,
          "note": "What closing the full gap by selling alone would take."
        }
      ],
      "modelComparison": {
        "v5FullYear": 92579290,
        "paceLandingZone": 107616907,
        "note": "V5 is the forecast of record. The pace landing zone runs higher because these conversion rates are drawn from jobs that did invoice and because V5 also carries a declining sales trend."
      },
      "verdict": {
        "band": "not-reachable",
        "headline": "Plan is not reachable by selling alone. Closing the gap needs a production pull-forward, a budget reset, or both.",
        "reasons": [
          "Required $9,540,913/wk against a demonstrated $2,113,646/wk, a 351% lift.",
          "Sales are trending down $173,431 per week, not flat.",
          "After 11/20/2026, under 75% of what is sold still invoices this year.",
          "$13,929,756 of the gap is already sold and needs production, not selling."
        ]
      }
    },
    "commentary": {
      "whatsWorking": [
        "Sales Trajectory: Monthly sales moved from January $3.26M to December $3K (-100%). Annualized run rate: $111.88M.",
        "Premium Deal Types: Insurance averages $20,831 per deal. Retail-Financing averages $21,350 (highest per-deal value). Retail-No Financing averages $13,647 (the volume engine).",
        "Sold Conversion: 5,692 of 5,804 signed contracts (98.1%) have made it to Sold status for $98.10M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Kickback Concentration: Cleveland has the most kickbacks (7, $144K). Total company kickbacks: 22 worth $373K.",
        "Production Review Queue: 84 deals worth $1.67M sitting in Production Review. Watch for backlog growth, it delays revenue recognition."
      ],
      "criticalRisks": [
        "Cleveland Kickback Concentration drives the company's largest single-market rework volume.",
        "Pipeline kickbacks company-wide: 22 kickbacks totaling $373K.",
        "Production Review backlog: 84 deals ($1.67M)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 4d median close on 3,299 retail deals.",
        "Insurance Density: $20,831 avg on 2,188 deals = $45.58M; +20% lift = ~$9.12M.",
        "Financing Lifts Ticket: Retail-Financing averages $21,350, highest per-deal value."
      ],
      "fixList": [
        "Cleveland Pipeline Kickback Intervention, pull every kickback and categorize root cause.",
        "Production Review Bottleneck, 84 deals; add temporary PM capacity.",
        "Financing Push, 614 financing deals YTD (10.6%) at $21,350 avg. Target 15% mix."
      ],
      "actionPlan": {
        "thisWeek": [
          "Cleveland Pipeline Kickback Review, meet with branch leadership.",
          "Production Review Surge Plan, 84 deals ($1.67M) in queue."
        ],
        "thisMonth": [
          "Supplement Escalation SOP, 7/14/30 day cadence with carrier escalation.",
          "Completed-to-Billing SLA, 100% invoiced within 21 days.",
          "Repair Triage Pilot in markets where repair rate exceeds 25%.",
          "Financing Training, peer training led by top financing reps. Target 15% mix."
        ],
        "thisQuarter": [
          "Add Kickback Reason field to accounting workflow.",
          "Repair Business Decision, 808 repairs YTD at ~$2,454 avg.",
          "Ops Capacity Planning, December hit 1 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "title": "Residential Revenue Forecast",
    "subtitle": "V5 Model with Job Type Analysis · Data as of November 23, 2026",
    "runDate": "November 23, 2026",
    "tabs": [
      {
        "id": "executive",
        "label": "Executive Summary"
      },
      {
        "id": "projection",
        "label": "Sales Projection"
      },
      {
        "id": "monthly",
        "label": "Monthly Forecast"
      },
      {
        "id": "budget",
        "label": "Budget Requirements"
      },
      {
        "id": "job-types",
        "label": "Job Type Analysis"
      },
      {
        "id": "pipeline",
        "label": "Pipeline & Branch"
      },
      {
        "id": "cycle",
        "label": "Cycle Times"
      },
      {
        "id": "weekly-targets",
        "label": "Weekly Sales Targets"
      },
      {
        "id": "production",
        "label": "Production Metrics"
      },
      {
        "id": "profitability",
        "label": "Profitability"
      },
      {
        "id": "budget-recovery",
        "label": "Budget Recovery"
      },
      {
        "id": "recommendations",
        "label": "Strategic Recommendations"
      }
    ],
    "kpis": [
      {
        "label": "YTD Sales (Created)",
        "value": "$98.1M",
        "sub": "Jobs processed into system"
      },
      {
        "label": "Invoiced YTD",
        "value": "$89.75M",
        "sub": "NetSuite AR · 5029 invoices booked"
      },
      {
        "label": "4-Week Avg Weekly Sales",
        "value": "$1.9M",
        "sub": "Trend: -209,601/week"
      },
      {
        "label": "Current Week (Projected)",
        "value": "$1.2M",
        "sub": "WTD: $127K"
      },
      {
        "label": "Annual Forecast",
        "value": "$107.9M",
        "sub": "Model invoiced revenue"
      },
      {
        "label": "Annual Budget",
        "value": "$125.9M",
        "sub": "Board plan · full year"
      },
      {
        "label": "Forecast vs Budget",
        "value": "-$17.9M",
        "sub": "14.3% under plan"
      },
      {
        "label": "Active Pipeline",
        "value": "$18.2M",
        "sub": "Backlog + IP + SNP"
      }
    ],
    "execSummary": {
      "budget": 125890005.2103,
      "modelAnnualInvoiced": 107948899.0164,
      "gap": 17941106.1939,
      "narrative": "The V5 model projects $107.9M in annual invoiced revenue against a $125.9M plan. The challenge is timing, not volume: Q1 ramped slowly so Q2 invoicing will lag. If the current weekly pace of $1.9M holds, H2 should catch up as earlier sales convert to invoiced revenue."
    },
    "monthRevenue": {
      "april": {
        "invoiced": 8405959.810000002,
        "wipChange": -9104314.09,
        "netRevenue": -698354.2799999975,
        "beginningWip": 9104314.09,
        "endingWip": 0,
        "materialCost": 4583061.8171,
        "laborCost": 2771872.6993,
        "grossProfit": -4185981.9364,
        "grossMarginPct": -132.0935
      },
      "may": {
        "invoiced": 8564976.120000001,
        "wipChange": 0,
        "netRevenue": 8564976.120000001,
        "beginningWip": 0,
        "endingWip": 0,
        "materialCost": 3551076.7102,
        "laborCost": 2147719.795,
        "grossProfit": 5982932.5818,
        "grossMarginPct": 51.2162
      }
    },
    "weeklyTargetsHeader": {
      "avgWeeklyNeed": 2055733.1739,
      "recent4WkAvg": 1923763.9675,
      "gap": 131969.2064,
      "productionAvgWeeklyNeed": 2317416.5713,
      "productionCycleStart": 14,
      "productionCycleComplete": 7,
      "productionTotalCycle": 21
    },
    "budgetRecoveryHeader": {
      "fullYearBudget": 125890005.2103,
      "gap": 20996474.1337,
      "upliftPct": 1.3,
      "aprilGap": 448522.6804,
      "q1OriginalBudget": 103034403.7434,
      "q1Actual": 82486452.29,
      "q1Shortfall": 20547951.4534,
      "recoveryRatio": 2.9884
    },
    "profitabilitySummary": {
      "combinedGP": 64388000.83,
      "combinedGP_pct": 39.8331,
      "combinedRevenue": 161644432.82,
      "y2025_GP_pct": 41.5376,
      "y2025_revenue": 73942457.17,
      "y2025_jobs": 3481,
      "y2026_GP_pct": 38.396,
      "y2026_revenue": 87701975.65,
      "y2026_jobs": 4494,
      "materialCost": 60363065.23,
      "laborCost": 36508068.02,
      "commissions": 13788110.88,
      "materialPctContract": 37.3431,
      "laborPctContract": 22.5854,
      "commissionPctContract": 8.5299
    },
    "pipelineSnapshot": {
      "stages": [
        {
          "label": "New Sales",
          "subtitle": "95 jobs · 4d avg",
          "value": 1842328.18,
          "jobs": 95,
          "color": "#3b82f6",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 46,
              "value": 973453.47
            },
            {
              "market": "Detroit Metro",
              "jobs": 15,
              "value": 284102.83
            },
            {
              "market": "Cleveland",
              "jobs": 14,
              "value": 279186.31
            },
            {
              "market": "Cincinnati",
              "jobs": 7,
              "value": 102322.66
            },
            {
              "market": "Richmond",
              "jobs": 4,
              "value": 85961.86
            },
            {
              "market": "Nashville",
              "jobs": 1,
              "value": 42320.38
            },
            {
              "market": "DC Metro",
              "jobs": 3,
              "value": 39086.19
            },
            {
              "market": "Dayton",
              "jobs": 3,
              "value": 24221
            },
            {
              "market": "Raleigh",
              "jobs": 2,
              "value": 11673.48
            }
          ],
          "avgDays": 4.3,
          "medianDays": 5
        },
        {
          "label": "Backlog",
          "subtitle": "385 jobs · 31d avg",
          "value": 8497386.86,
          "jobs": 385,
          "color": "#f97316",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 137,
              "value": 3152945.49
            },
            {
              "market": "Cleveland",
              "jobs": 85,
              "value": 1818307.88
            },
            {
              "market": "Detroit Metro",
              "jobs": 61,
              "value": 1415948.45
            },
            {
              "market": "Cincinnati",
              "jobs": 23,
              "value": 469462
            },
            {
              "market": "Nashville",
              "jobs": 17,
              "value": 410504.97
            },
            {
              "market": "DC Metro",
              "jobs": 20,
              "value": 337103.72
            },
            {
              "market": "Knoxville",
              "jobs": 14,
              "value": 251371.88
            },
            {
              "market": "Richmond",
              "jobs": 9,
              "value": 241552.83
            },
            {
              "market": "Dayton",
              "jobs": 8,
              "value": 196511.35
            },
            {
              "market": "Raleigh",
              "jobs": 9,
              "value": 180118.91
            },
            {
              "market": "Greenville",
              "jobs": 2,
              "value": 23559.38
            }
          ],
          "avgDays": 30.8,
          "medianDays": 21
        },
        {
          "label": "In Progress",
          "subtitle": "260 jobs",
          "value": 7837784.61,
          "jobs": 260,
          "color": "#22c55e",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 103,
              "value": 3175404.97
            },
            {
              "market": "Cleveland",
              "jobs": 65,
              "value": 1697616.21
            },
            {
              "market": "Detroit Metro",
              "jobs": 23,
              "value": 673744.07
            },
            {
              "market": "Nashville",
              "jobs": 6,
              "value": 666606.2
            },
            {
              "market": "Richmond",
              "jobs": 16,
              "value": 507860
            },
            {
              "market": "Cincinnati",
              "jobs": 19,
              "value": 392131.23
            },
            {
              "market": "DC Metro",
              "jobs": 12,
              "value": 361125.8
            },
            {
              "market": "Dayton",
              "jobs": 7,
              "value": 163069.51
            },
            {
              "market": "Raleigh",
              "jobs": 5,
              "value": 118366.59
            },
            {
              "market": "Grand Rapids",
              "jobs": 3,
              "value": 66478.03
            },
            {
              "market": "Knoxville",
              "jobs": 1,
              "value": 15382
            }
          ],
          "avgDays": null,
          "medianDays": null
        },
        {
          "label": "Completed",
          "subtitle": "98 jobs",
          "value": 2179266.5,
          "jobs": 98,
          "color": "#a855f7",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 42,
              "value": 1023626.02
            },
            {
              "market": "Richmond",
              "jobs": 11,
              "value": 331269.79
            },
            {
              "market": "Cleveland",
              "jobs": 15,
              "value": 245982.75
            },
            {
              "market": "Detroit Metro",
              "jobs": 9,
              "value": 169924.99
            },
            {
              "market": "Cincinnati",
              "jobs": 6,
              "value": 149070.76
            },
            {
              "market": "Dayton",
              "jobs": 5,
              "value": 88557.87
            },
            {
              "market": "Grand Rapids",
              "jobs": 2,
              "value": 57551
            },
            {
              "market": "Nashville",
              "jobs": 2,
              "value": 44157
            },
            {
              "market": "DC Metro",
              "jobs": 2,
              "value": 38615.97
            },
            {
              "market": "Raleigh",
              "jobs": 1,
              "value": 10300
            },
            {
              "market": "Knoxville",
              "jobs": 1,
              "value": 10206.58
            },
            {
              "market": "Greenville",
              "jobs": 2,
              "value": 10003.77
            }
          ],
          "avgDays": null,
          "medianDays": null
        }
      ],
      "totalJobs": 838,
      "totalValue": 20356766.15
    },
    "commentary": {
      "actionableRecommendations": [
        "Hold weekly sales pace at or above $2.1M to defend the May invoicing target.",
        "Prioritize Retail-No Financing and Insurance work in Columbus and Detroit Metro — they carry the highest revenue-per-day.",
        "Clear the Completed-pending-invoice queue inside seven days to keep April WIP realistic.",
        "Audit Sold-Not-Processed dollars older than 14 days; they delay April-May conversion."
      ],
      "strategyHighlights": [
        "V5 cycle-time hierarchy locked: Job Type + Trade Count is the strongest predictor.",
        "NOVA reporting now consolidated under DC Metro for cleaner branch math.",
        "Recovery plan reallocates the YTD shortfall as a uniform uplift across May-Dec rather than a one-month spike.",
        "WIP bridge uses the validated wip_reference.pkl baseline so April net revenue is defensible."
      ]
    },
    "tables": [
      {
        "id": "monthlyForecast",
        "title": "Monthly Forecast (Apr-Dec)",
        "headers": [
          "Month",
          "Budget Net Revenue",
          "Forecast Backlog",
          "Required Sales",
          "Forecast Net Revenue",
          "Variance"
        ],
        "rows": [
          [
            "Apr 2026",
            8201725.06,
            20356766.15,
            10113960.9,
            7295650.8557,
            -906074.2043
          ],
          [
            "May 2026",
            14117621.6688,
            20356766.15,
            11714245.78,
            9773287.2928,
            -4344334.376
          ],
          [
            "Jun 2026",
            14800571.2162,
            20356766.15,
            11845208.49,
            11612087.3246,
            -3188483.8916
          ],
          [
            "Jul 2026",
            11641331.0926,
            20356766.15,
            11754306.81,
            9196232.3893,
            -2445098.7032
          ],
          [
            "Aug 2026",
            12738223.8858,
            20356766.15,
            10162045.12,
            12680532.9072,
            -57690.9786
          ],
          [
            "Sep 2026",
            13673037.2551,
            20356766.15,
            12441316.71,
            10996466.4734,
            -2676570.7817
          ],
          [
            "Oct 2026",
            13483638.9808,
            20356766.15,
            13256040.92,
            3391683.5797,
            -10091955.4011
          ],
          [
            "Nov 2026",
            12392297.9669,
            20356766.15,
            12121912.5626,
            12338765.9473,
            -53532.0196
          ],
          [
            "Dec 2026",
            7988852.274,
            18449976.3671,
            8697825.2744,
            8315683.3615,
            326831.0875
          ]
        ]
      },
      {
        "id": "forecastBacklog",
        "title": "Forecasted Backlog vs Required Sales",
        "headers": [
          "Month",
          "Forecasted Backlog",
          "Revenue From Backlog",
          "Revenue Gap",
          "Total Sales Needed"
        ],
        "rows": [
          [
            "Apr 2026",
            20356766.15,
            7499885.6057,
            906074.2043,
            10113960.9
          ],
          [
            "May 2026",
            20356766.15,
            9874273.9095,
            0,
            11714245.78
          ],
          [
            "Jun 2026",
            20356766.15,
            11003929.0823,
            84494.2277,
            11845208.49
          ],
          [
            "Jul 2026",
            20356766.15,
            11405710.0017,
            0,
            11754306.81
          ],
          [
            "Aug 2026",
            20356766.15,
            10737859.604,
            0,
            10162045.12
          ],
          [
            "Sep 2026",
            20356766.15,
            11565532.0417,
            0,
            12441316.71
          ],
          [
            "Oct 2026",
            20356766.15,
            12495997.6697,
            0,
            13256040.92
          ],
          [
            "Nov 2026",
            20356766.15,
            5988924.2817,
            6798364.3459,
            12121912.5626
          ],
          [
            "Dec 2026",
            18449976.3671,
            2423054.0944,
            7645258.7449,
            8697825.2744
          ]
        ]
      },
      {
        "id": "trendBasedAnnual",
        "title": "Trend-Based Annual Sales Projection",
        "headers": [
          "Month",
          "2025 Seasonal %",
          "YTD Actual",
          "Budget Path",
          "Forecast Path"
        ],
        "rows": [
          [
            "Jan 2026 [Actual]",
            0.214,
            3257140.76,
            3257140.76,
            3257140.76
          ],
          [
            "Feb 2026 [Actual]",
            1.308,
            3101368.34,
            3101368.34,
            3101368.34
          ],
          [
            "Mar 2026 [Actual]",
            2.5984,
            5679200.03,
            5679200.03,
            5679200.03
          ],
          [
            "Apr 2026 [Actual]",
            9.2122,
            10113960.9,
            10113960.9,
            10113960.9
          ],
          [
            "May 2026 [Actual]",
            13.4939,
            11714245.78,
            11714245.78,
            11714245.78
          ],
          [
            "Jun 2026 [Actual]",
            12.27,
            11845208.49,
            11845208.49,
            11845208.49
          ],
          [
            "Jul 2026 [Actual]",
            13.617,
            11754306.81,
            11754306.81,
            11754306.81
          ],
          [
            "Aug 2026 [Actual]",
            13.3982,
            10162045.12,
            10162045.12,
            10162045.12
          ],
          [
            "Sep 2026 [Actual]",
            12.0448,
            12441316.71,
            12441316.71,
            12441316.71
          ],
          [
            "Oct 2026 [Actual]",
            11.3797,
            13256040.92,
            13256040.92,
            13256040.92
          ],
          [
            "Nov 2026",
            7.6821,
            0,
            13261531.1249,
            15285246.8068
          ],
          [
            "Dec 2026",
            2.7815,
            0,
            4801742.8822,
            5534491.0302
          ]
        ]
      },
      {
        "id": "adjustedWeeklyRunRate",
        "title": "Adjusted Weekly Run Rate (Recovery)",
        "headers": [
          "Week",
          "Adjusted Target",
          "Original Target",
          "Delta"
        ],
        "rows": [
          [
            "Wk 11/22",
            8452512.182,
            2828446.2646,
            5624065.9174
          ],
          [
            "Wk 11/29",
            6607347.012,
            2211002.5484,
            4396344.4636
          ],
          [
            "Wk 12/06",
            5869280.944,
            1964025.062,
            3905255.882
          ],
          [
            "Wk 12/13",
            5869280.944,
            1964025.062,
            3905255.882
          ],
          [
            "Wk 12/20",
            5869280.944,
            1964025.062,
            3905255.882
          ],
          [
            "Wk 12/27",
            4192343.5314,
            1402875.0443,
            2789468.4872
          ]
        ]
      },
      {
        "id": "jobTypeImpact",
        "title": "Job Type Impact on Revenue",
        "headers": [
          "Job Type",
          "Avg Job $",
          "Cycle Days",
          "Rev/Day",
          "Same-Mo Conv %",
          "Historical Revenue"
        ],
        "rows": [
          [
            "Insurance",
            23809.6041,
            18,
            1322.7558,
            40.4695,
            42690620.24
          ],
          [
            "Retail-Financing",
            22305.2365,
            18,
            1239.1798,
            61.0801,
            11977911.99
          ],
          [
            "Retail-No Financing",
            19229.2525,
            18,
            1068.2918,
            60.8101,
            38035461.37
          ]
        ]
      },
      {
        "id": "cycleByJobType",
        "title": "Cycle Times by Job Type",
        "headers": [
          "Job Type",
          "Created -> IP",
          "IP -> Complete",
          "Total Days",
          "Job Count",
          "Avg Job $"
        ],
        "rows": [
          [
            "Insurance",
            13,
            4,
            18,
            1793,
            23809.6041
          ],
          [
            "Retail-Financing",
            13,
            5,
            18,
            537,
            22305.2365
          ],
          [
            "Retail-No Financing",
            13,
            5,
            18,
            1978,
            19229.2525
          ],
          [
            "Repair",
            0,
            0,
            0,
            0,
            0
          ]
        ]
      },
      {
        "id": "backlogByMarket",
        "title": "Backlog by Market",
        "headers": [
          "Market",
          "Jobs",
          "Value"
        ],
        "rows": [
          [
            "Columbus",
            137,
            3152945.49
          ],
          [
            "Cleveland",
            85,
            1818307.88
          ],
          [
            "Detroit Metro",
            61,
            1415948.45
          ],
          [
            "Cincinnati",
            23,
            469462
          ],
          [
            "Nashville",
            17,
            410504.97
          ],
          [
            "DC Metro",
            20,
            337103.72
          ],
          [
            "Knoxville",
            14,
            251371.88
          ],
          [
            "Richmond",
            9,
            241552.83
          ],
          [
            "Dayton",
            8,
            196511.35
          ],
          [
            "Raleigh",
            9,
            180118.91
          ],
          [
            "Greenville",
            2,
            23559.38
          ]
        ]
      },
      {
        "id": "inProgressByMarket",
        "title": "In Progress by Market",
        "headers": [
          "Market",
          "Jobs",
          "Value"
        ],
        "rows": [
          [
            "Columbus",
            103,
            3175404.97
          ],
          [
            "Cleveland",
            65,
            1697616.21
          ],
          [
            "Detroit Metro",
            23,
            673744.07
          ],
          [
            "Nashville",
            6,
            666606.2
          ],
          [
            "Richmond",
            16,
            507860
          ],
          [
            "Cincinnati",
            19,
            392131.23
          ],
          [
            "DC Metro",
            12,
            361125.8
          ],
          [
            "Dayton",
            7,
            163069.51
          ],
          [
            "Raleigh",
            5,
            118366.59
          ],
          [
            "Grand Rapids",
            3,
            66478.03
          ],
          [
            "Knoxville",
            1,
            15382
          ]
        ]
      },
      {
        "id": "newSalesByMarket",
        "title": "New Sales (SNP) by Market",
        "headers": [
          "Market",
          "Jobs",
          "Value"
        ],
        "rows": [
          [
            "Columbus",
            46,
            973453.47
          ],
          [
            "Detroit Metro",
            15,
            284102.83
          ],
          [
            "Cleveland",
            14,
            279186.31
          ],
          [
            "Cincinnati",
            7,
            102322.66
          ],
          [
            "Richmond",
            4,
            85961.86
          ],
          [
            "Nashville",
            1,
            42320.38
          ],
          [
            "DC Metro",
            3,
            39086.19
          ],
          [
            "Dayton",
            3,
            24221
          ],
          [
            "Raleigh",
            2,
            11673.48
          ]
        ]
      },
      {
        "id": "completedByMarket",
        "title": "Completed Awaiting Invoice by Market",
        "headers": [
          "Market",
          "Jobs",
          "Value"
        ],
        "rows": [
          [
            "Columbus",
            42,
            1023626.02
          ],
          [
            "Richmond",
            11,
            331269.79
          ],
          [
            "Cleveland",
            15,
            245982.75
          ],
          [
            "Detroit Metro",
            9,
            169924.99
          ],
          [
            "Cincinnati",
            6,
            149070.76
          ],
          [
            "Dayton",
            5,
            88557.87
          ],
          [
            "Grand Rapids",
            2,
            57551
          ],
          [
            "Nashville",
            2,
            44157
          ],
          [
            "DC Metro",
            2,
            38615.97
          ],
          [
            "Raleigh",
            1,
            10300
          ],
          [
            "Knoxville",
            1,
            10206.58
          ],
          [
            "Greenville",
            2,
            10003.77
          ]
        ]
      },
      {
        "id": "weeklyTargetsByJobType",
        "title": "Weekly Sales Targets by Job Type",
        "headers": [
          "Job Type",
          "Weekly Target",
          "Mix %"
        ],
        "rows": [
          [
            "Insurance",
            968708.0425,
            47.1223
          ],
          [
            "Retail-No Financing",
            809417.6385,
            39.3737
          ],
          [
            "Retail-Financing",
            277607.4929,
            13.5041
          ]
        ]
      },
      {
        "id": "weeklyTargetsByTrade",
        "title": "Weekly Sales Targets by Trade",
        "headers": [
          "Trade",
          "Weekly Target",
          "Mix %"
        ],
        "rows": [
          [
            "Roofing",
            1095469.928,
            53.2885
          ],
          [
            "Gutters",
            797511.7548,
            38.7945
          ],
          [
            "Siding",
            48223.4798,
            2.3458
          ],
          [
            "Rack Mounted Solar",
            22053.586,
            1.0728
          ],
          [
            "Metal",
            18721.5073,
            0.9107
          ],
          [
            "Flat Roof",
            16499.2897,
            0.8026
          ],
          [
            "GAF Solar",
            14023.7185,
            0.6822
          ],
          [
            "Masonry",
            13678.0996,
            0.6654
          ],
          [
            "Carpentry",
            9738.5364,
            0.4737
          ],
          [
            "Painting",
            8192.8627,
            0.3985
          ]
        ]
      },
      {
        "id": "weeklyScheduleNext",
        "title": "Weekly Schedule (Next 16 Weeks)",
        "headers": [
          "Week",
          "Month",
          "Target"
        ],
        "rows": [
          [
            "Wk 11/22",
            "Nov",
            2828446.2646
          ],
          [
            "Wk 11/29",
            "Nov",
            2211002.5484
          ],
          [
            "Wk 12/06",
            "Dec",
            1964025.062
          ],
          [
            "Wk 12/13",
            "Dec",
            1964025.062
          ],
          [
            "Wk 12/20",
            "Dec",
            1964025.062
          ],
          [
            "Wk 12/27",
            "Dec",
            1402875.0443
          ]
        ]
      },
      {
        "id": "budgetRecoveryMonthlyBridge",
        "title": "Recovery Plan Monthly Bridge",
        "headers": [
          "Month",
          "Original Budget",
          "Forecast",
          "Recovery Target",
          "Catch-Up",
          "Status"
        ],
        "rows": [],
        "_stub": true,
        "_note": "Not yet emitted by V5; render skips empty body. Wire real rows when ready."
      },
      {
        "id": "productionByJobType",
        "title": "Production by Job Type",
        "headers": [
          "Job Type",
          "WOs",
          "Median Days",
          "Avg Days",
          "Volume",
          "Revenue"
        ],
        "rows": [],
        "_stub": true,
        "_note": "Not yet emitted by V5; render skips empty body. Wire real rows when ready."
      },
      {
        "id": "productionByMarketJobType",
        "title": "Production by Market & Job Type",
        "headers": [
          "Market",
          "Insurance",
          "Retail-Fin",
          "Retail-No-Fin",
          "Repair",
          "Total"
        ],
        "rows": [],
        "_stub": true,
        "_note": "Not yet emitted by V5; render skips empty body. Wire real rows when ready."
      },
      {
        "id": "productionByTrade",
        "title": "Production by Trade",
        "headers": [
          "Trade",
          "WOs",
          "Median Days",
          "Avg Days",
          "Revenue",
          "Share"
        ],
        "rows": [],
        "_stub": true,
        "_note": "Not yet emitted by V5; render skips empty body. Wire real rows when ready."
      },
      {
        "id": "profitabilityByJobType2025",
        "title": "Profitability by Job Type (2025)",
        "headers": [
          "Job Type",
          "Jobs",
          "Revenue",
          "Material",
          "Labor",
          "GP",
          "GP %"
        ],
        "rows": [],
        "_stub": true,
        "_note": "Not yet emitted by V5; render skips empty body. Wire real rows when ready."
      },
      {
        "id": "profitabilityByJobType2026",
        "title": "Profitability by Job Type (2026 YTD)",
        "headers": [
          "Job Type",
          "Jobs",
          "Revenue",
          "Material",
          "Labor",
          "GP",
          "GP %"
        ],
        "rows": [],
        "_stub": true,
        "_note": "Not yet emitted by V5; render skips empty body. Wire real rows when ready."
      },
      {
        "id": "profitabilityByMarket2026",
        "title": "Profitability by Market (2026 YTD)",
        "headers": [
          "Market",
          "Jobs",
          "Revenue",
          "GP",
          "GP %"
        ],
        "rows": [],
        "_stub": true,
        "_note": "Not yet emitted by V5; render skips empty body. Wire real rows when ready."
      },
      {
        "id": "strategicBestMarketsRevEff",
        "title": "Strategic: Best Markets by Revenue Efficiency",
        "headers": [
          "Market",
          "Jobs",
          "Revenue",
          "Median Days",
          "$ / Day"
        ],
        "rows": [],
        "_stub": true,
        "_note": "Not yet emitted by V5; render skips empty body. Wire real rows when ready."
      },
      {
        "id": "weeklyTargetByMarketJobType",
        "title": "Weekly Target by Market & Job Type",
        "headers": [
          "Market",
          "Total / Wk",
          "Retail-No Fin",
          "Insurance",
          "Retail-Fin",
          "Deals / Wk"
        ],
        "rows": [],
        "_stub": true,
        "_note": "Not yet emitted by V5; render skips empty body. Wire real rows when ready."
      }
    ],
    "charts": [
      {
        "id": "salesChart",
        "labels": [
          "2026-01-05",
          "2026-01-12",
          "2026-01-19",
          "2026-01-26",
          "2026-02-02",
          "2026-02-09",
          "2026-02-16",
          "2026-02-23",
          "2026-03-02",
          "2026-03-09",
          "2026-03-16",
          "2026-03-23",
          "2026-03-30",
          "2026-04-06",
          "2026-04-13",
          "2026-04-20",
          "2026-04-27",
          "2026-05-04",
          "2026-05-11",
          "2026-05-18",
          "2026-05-25",
          "2026-06-01",
          "2026-06-08",
          "2026-06-15",
          "2026-06-22",
          "2026-06-29",
          "2026-07-06",
          "2026-07-13",
          "2026-07-20",
          "2026-07-27",
          "2026-08-03",
          "2026-08-10",
          "2026-08-17",
          "2026-08-24",
          "2026-08-31",
          "2026-09-07",
          "2026-09-14",
          "2026-09-21",
          "2026-09-28",
          "2026-10-05",
          "2026-10-12",
          "2026-10-19",
          "2026-10-26",
          "2026-11-02",
          "2026-11-09",
          "2026-11-16",
          "2026-11-23",
          "2026-11-30",
          "2026-12-07",
          "2026-12-14",
          "2026-12-21",
          "2026-12-28"
        ],
        "datasets": [
          {
            "label": "Weekly Sales",
            "data": [
              705682.14,
              716982.56,
              1008803.46,
              595579.4,
              644915.24,
              790460.13,
              798618.29,
              1859215.02,
              1140284.5,
              1210146.75,
              1589852.56,
              2360846.42,
              2209259.5,
              2709223.35,
              3056922.73,
              3334263.04,
              2530755.7,
              2597274.24,
              2644989.19,
              2584908.65,
              2817386.78,
              3246224.14,
              2633254.36,
              1840276.51,
              2591050.5,
              2046109.08,
              2242046.93,
              2382232.65,
              2748894.66,
              2868831.8,
              2023323.96,
              2784658.62,
              2733100.57,
              2560842.35,
              2712342.75,
              2648078.08,
              2603274.12,
              2595405.12,
              3435495.95,
              2475707,
              2500953.93,
              2565292.83,
              2139661.48,
              2318898.76,
              1431561.98,
              1804933.65,
              1203371.5636,
              1181259.396,
              971658.7048,
              762058.0136,
              552457.3224,
              342856.6312
            ]
          }
        ]
      },
      {
        "id": "monthlyChart",
        "labels": [
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
            "label": "Budget Net Revenue",
            "data": [
              8201725.06,
              14117621.6688,
              14800571.2162,
              11641331.0926,
              12738223.8858,
              13673037.2551,
              13483638.9808,
              12392297.9669,
              7988852.274
            ]
          },
          {
            "label": "Forecast Net Revenue",
            "data": [
              7295650.8557,
              9773287.2928,
              11612087.3246,
              9196232.3893,
              12680532.9072,
              10996466.4734,
              3391683.5797,
              12338765.9473,
              8315683.3615
            ]
          }
        ]
      },
      {
        "id": "budgetSalesChart",
        "labels": [
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
            "label": "Required Sales",
            "data": [
              10113960.9,
              11714245.78,
              11845208.49,
              11754306.81,
              10162045.12,
              12441316.71,
              13256040.92,
              12121912.5626,
              8697825.2744
            ]
          }
        ]
      },
      {
        "id": "execChart",
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
            "label": "Budget",
            "data": [
              3233665.53,
              2775688,
              6149893,
              10011011.6094,
              14218608.2854,
              14192412.9738,
              13850808.7049,
              10795550.5826,
              14242102.8235,
              13564662.2337,
              12787288.6277,
              10068312.8393
            ]
          },
          {
            "label": "Model Revenue",
            "data": [
              3080434.5472,
              3094437.4364,
              4456929.2442,
              7499885.6057,
              9874273.9095,
              11003929.0823,
              11405710.0017,
              10737859.604,
              11565532.0417,
              12495997.6697,
              12338765.9473,
              10395143.9268
            ]
          },
          {
            "label": "From Known Sales",
            "data": [
              3080434.5472,
              3094437.4364,
              4456929.2442,
              7499885.6057,
              9874273.9095,
              11003929.0823,
              11405710.0017,
              10737859.604,
              11565532.0417,
              12495997.6697,
              5988924.2817,
              2423054.0944
            ]
          }
        ]
      },
      {
        "id": "branchChart",
        "labels": [
          "Columbus",
          "Detroit Metro",
          "Cleveland",
          "Nashville",
          "DC Metro",
          "Richmond",
          "Cincinnati",
          "Dayton",
          "Knoxville",
          "Raleigh"
        ],
        "datasets": [
          {
            "label": "Mix %",
            "data": [
              39.4751,
              13.4582,
              10.9742,
              6.8809,
              6.4121,
              5.2333,
              4.9803,
              4.2759,
              2.9184,
              2.733
            ]
          }
        ]
      },
      {
        "id": "convChart",
        "labels": [
          "M+0",
          "M+1",
          "M+2",
          "M+3",
          "M+4",
          "M+5"
        ],
        "datasets": [
          {
            "label": "Insurance",
            "data": [
              40.4695,
              30.967,
              16.322,
              6.8195,
              2.739,
              1.3415
            ]
          },
          {
            "label": "Retail-Financing",
            "data": [
              61.0801,
              27.5605,
              7.8212,
              1.1173,
              0.9311,
              0.3724
            ]
          },
          {
            "label": "Retail-No Financing",
            "data": [
              60.8101,
              25.8228,
              7.443,
              2.9367,
              1.3671,
              0.8608
            ]
          }
        ]
      },
      {
        "id": "cycleChart",
        "labels": [
          "Insurance",
          "Retail-Financing",
          "Retail-No Financing"
        ],
        "datasets": [
          {
            "label": "Created -> In Progress",
            "data": [
              13,
              13,
              13
            ]
          },
          {
            "label": "In Progress -> Complete",
            "data": [
              4,
              5,
              5
            ]
          }
        ]
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
      3233665.53,
      2775688,
      6149893,
      10011011.6094,
      14218608.2854,
      14192412.9738,
      13850808.7049,
      10795550.5826,
      14242102.8235,
      13564662.2337,
      12787288.6277,
      10068312.8393
    ],
    "budgetSolveInv": [
      3312733.06,
      2855781.11,
      6228299.34,
      8405959.81,
      8564976.12,
      11088423.31,
      10676120.9,
      9151616.35,
      9929275.62,
      12273266.67,
      12787288.6277,
      10068312.8393
    ],
    "revModel": [
      3312733.0599999987,
      2855781.11,
      6228299.340000002,
      8405959.810000002,
      8564976.120000001,
      11088423.309999999,
      10676120.900000002,
      9151616.350000001,
      9929275.619999997,
      12273266.67,
      12338765.9473,
      10395143.9268
    ],
    "revFromKnown": [
      3312733.0599999987,
      2855781.11,
      6228299.340000002,
      8405959.810000002,
      8564976.120000001,
      11088423.309999999,
      10676120.900000002,
      9151616.350000001,
      9929275.619999997,
      12273266.67,
      5988924.2817,
      2423054.0944
    ],
    "requiredSales": [
      3257140.76,
      3101368.34,
      5679200.03,
      10113960.9,
      11714245.78,
      11845208.49,
      11754306.81,
      10162045.12,
      12441316.71,
      13256040.92,
      12121912.5626,
      8697825.2744
    ],
    "backlogData": [
      {
        "month": "Jan 2026",
        "total_backlog": 20356766.15,
        "wip_est": 10017051.11,
        "not_started": 10339715.04,
        "budget_rev": 3312733.06,
        "pipeline_backlog": 20356766.15,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 3080434.5472,
        "revenue_gap": 232298.5128,
        "adjusted_required_sales": 3257140.76,
        "backlog_surplus": 17099625.39
      },
      {
        "month": "Feb 2026",
        "total_backlog": 20356766.15,
        "wip_est": 10017051.11,
        "not_started": 10339715.04,
        "budget_rev": 2855781.11,
        "pipeline_backlog": 20356766.15,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 3094437.4364,
        "revenue_gap": 0,
        "adjusted_required_sales": 3101368.34,
        "backlog_surplus": 17255397.81
      },
      {
        "month": "Mar 2026",
        "total_backlog": 20356766.15,
        "wip_est": 10017051.11,
        "not_started": 10339715.04,
        "budget_rev": 6228299.34,
        "pipeline_backlog": 20356766.15,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 4456929.2442,
        "revenue_gap": 1771370.0958,
        "adjusted_required_sales": 5679200.03,
        "backlog_surplus": 14677566.12
      },
      {
        "month": "Apr 2026",
        "total_backlog": 20356766.15,
        "wip_est": 10017051.11,
        "not_started": 10339715.04,
        "budget_rev": 8405959.81,
        "pipeline_backlog": 20356766.15,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 7499885.6057,
        "revenue_gap": 906074.2043,
        "adjusted_required_sales": 10113960.9,
        "backlog_surplus": 10242805.25
      },
      {
        "month": "May 2026",
        "total_backlog": 20356766.15,
        "wip_est": 12214059.69,
        "not_started": 8142706.46,
        "budget_rev": 8564976.12,
        "pipeline_backlog": 20356766.15,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 9874273.9095,
        "revenue_gap": 0,
        "adjusted_required_sales": 11714245.78,
        "backlog_surplus": 8642520.37
      },
      {
        "month": "Jun 2026",
        "total_backlog": 20356766.15,
        "wip_est": 12214059.69,
        "not_started": 8142706.46,
        "budget_rev": 11088423.31,
        "pipeline_backlog": 20356766.15,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 11003929.0823,
        "revenue_gap": 84494.2277,
        "adjusted_required_sales": 11845208.49,
        "backlog_surplus": 8511557.66
      },
      {
        "month": "Jul 2026",
        "total_backlog": 20356766.15,
        "wip_est": 12214059.69,
        "not_started": 8142706.46,
        "budget_rev": 10676120.9,
        "pipeline_backlog": 20356766.15,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 11405710.0017,
        "revenue_gap": 0,
        "adjusted_required_sales": 11754306.81,
        "backlog_surplus": 8602459.34
      },
      {
        "month": "Aug 2026",
        "total_backlog": 20356766.15,
        "wip_est": 12214059.69,
        "not_started": 8142706.46,
        "budget_rev": 9151616.35,
        "pipeline_backlog": 20356766.15,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 10737859.604,
        "revenue_gap": 0,
        "adjusted_required_sales": 10162045.12,
        "backlog_surplus": 10194721.03
      },
      {
        "month": "Sep 2026",
        "total_backlog": 20356766.15,
        "wip_est": 12214059.69,
        "not_started": 8142706.46,
        "budget_rev": 9929275.62,
        "pipeline_backlog": 20356766.15,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 11565532.0417,
        "revenue_gap": 0,
        "adjusted_required_sales": 12441316.71,
        "backlog_surplus": 7915449.44
      },
      {
        "month": "Oct 2026",
        "total_backlog": 20356766.15,
        "wip_est": 12214059.69,
        "not_started": 8142706.46,
        "budget_rev": 12273266.67,
        "pipeline_backlog": 20356766.15,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 12495997.6697,
        "revenue_gap": 0,
        "adjusted_required_sales": 13256040.92,
        "backlog_surplus": 7100725.23
      },
      {
        "month": "Nov 2026",
        "total_backlog": 20356766.15,
        "wip_est": 12214059.69,
        "not_started": 8142706.46,
        "budget_rev": 12787288.6277,
        "pipeline_backlog": 20356766.15,
        "new_sales_backlog": 0,
        "pipe_invoicing": 7678860.68,
        "future_invoicing": 0,
        "rev_from_backlog": 5988924.2817,
        "revenue_gap": 6798364.3459,
        "adjusted_required_sales": 12121912.5626,
        "backlog_surplus": 8234853.5874
      },
      {
        "month": "Dec 2026",
        "total_backlog": 18449976.3671,
        "wip_est": 11069985.8202,
        "not_started": 7379990.5468,
        "budget_rev": 10068312.8393,
        "pipeline_backlog": 12677905.47,
        "new_sales_backlog": 5772070.8971,
        "pipe_invoicing": 12579086.07,
        "future_invoicing": 3078022.32,
        "rev_from_backlog": 2423054.0944,
        "revenue_gap": 7645258.7449,
        "adjusted_required_sales": 8697825.2744,
        "backlog_surplus": 9752151.0927
      }
    ],
    "methodologyLock": {
      "version": "V5",
      "lockedOn": "2026-04-19",
      "items": [
        "WIP constants (PCT_NEW=0.75, PCT_PRIOR=0.90, MARGIN=0.40)",
        "Cycle hierarchy (JT+TC, JT+Branch, JT, TC, Overall)",
        "Same-month conversion rates per job type",
        "Material mark-up assumptions (35% material, 22% labor of new IP)"
      ]
    },
    "_source": "calculator/revenue-forecast.js V5-baseline-2026-05-04-shell-1.1",
    "netsuiteInvoiced": {
      "source": "ResInvoicedYTDResults-2026-11-24.csv",
      "format": "per-invoice",
      "aggregatedOnly": false,
      "totalInvoiced": 89752345.02000007,
      "invoiceCount": 5029,
      "monthly": [
        3312733.0599999987,
        2855781.11,
        6228299.340000002,
        8405959.810000002,
        8564976.120000001,
        11088423.309999999,
        10676120.900000002,
        9151616.350000001,
        9929275.619999997,
        12273266.67,
        7265892.729999998,
        0
      ],
      "byBranch": {
        "Greenville": {
          "invoiced": 2065774.2399999998,
          "count": 168
        },
        "Richmond": {
          "invoiced": 4725861.380000002,
          "count": 263
        },
        "DC Metro": {
          "invoiced": 6600629.6899999995,
          "count": 371
        },
        "Cleveland": {
          "invoiced": 7501335.990000001,
          "count": 472
        },
        "Nashville": {
          "invoiced": 6786757.000000003,
          "count": 318
        },
        "Columbus": {
          "invoiced": 34741884.24000002,
          "count": 1838
        },
        "Dayton": {
          "invoiced": 4197928.17,
          "count": 252
        },
        "Cincinnati": {
          "invoiced": 4484339.380000001,
          "count": 262
        },
        "Detroit": {
          "invoiced": 11989110.169999998,
          "count": 643
        },
        "Raleigh": {
          "invoiced": 3054993.6999999993,
          "count": 219
        },
        "Knoxville": {
          "invoiced": 2962134.719999999,
          "count": 184
        },
        "Charlotte": {
          "invoiced": 33694.41,
          "count": 1
        },
        "Grand Rapids": {
          "invoiced": 607901.93,
          "count": 38
        }
      },
      "monthsWithData": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "latestInvoiceDate": "2026-11-23",
      "actualMonths": [
        {
          "monthIdx": 0,
          "short": "Jan 2026",
          "long": "January 2026",
          "invoiced": 3312733.0599999987,
          "source": "NetSuite (locked)",
          "locked": true
        },
        {
          "monthIdx": 1,
          "short": "Feb 2026",
          "long": "February 2026",
          "invoiced": 2855781.11,
          "source": "NetSuite (locked)",
          "locked": true
        },
        {
          "monthIdx": 2,
          "short": "Mar 2026",
          "long": "March 2026",
          "invoiced": 6228299.340000002,
          "source": "NetSuite (locked)",
          "locked": true
        },
        {
          "monthIdx": 3,
          "short": "Apr 2026",
          "long": "April 2026",
          "invoiced": 8405959.810000002,
          "source": "NetSuite (locked)",
          "locked": true
        },
        {
          "monthIdx": 4,
          "short": "May 2026",
          "long": "May 2026",
          "invoiced": 8564976.120000001,
          "source": "NetSuite (locked)",
          "locked": true
        },
        {
          "monthIdx": 5,
          "short": "Jun 2026",
          "long": "June 2026",
          "invoiced": 11088423.309999999,
          "source": "NetSuite (locked)",
          "locked": true
        },
        {
          "monthIdx": 6,
          "short": "Jul 2026",
          "long": "July 2026",
          "invoiced": 10676120.900000002,
          "source": "NetSuite (locked)",
          "locked": true
        },
        {
          "monthIdx": 7,
          "short": "Aug 2026",
          "long": "August 2026",
          "invoiced": 9151616.350000001,
          "source": "NetSuite (locked)",
          "locked": true
        },
        {
          "monthIdx": 8,
          "short": "Sep 2026",
          "long": "September 2026",
          "invoiced": 9929275.619999997,
          "source": "NetSuite (locked)",
          "locked": true
        },
        {
          "monthIdx": 9,
          "short": "Oct 2026",
          "long": "October 2026",
          "invoiced": 12273266.67,
          "source": "NetSuite (locked)",
          "locked": true
        }
      ]
    }
  },
  "BACKLOG": {
    "_source": "calculator/backlog.js v1.0-rules-encoded",
    "title": "Job Backlog & Production",
    "subtitle": "Live job-level backlog",
    "headerMeta": {
      "totalJobs": 626,
      "totalWOs": 900,
      "portfolioValue": 15919116.89,
      "avgDaysInStatus": 21,
      "lastBuild": "2026-11-24T14:04:42.410Z"
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
        "value": "626",
        "sub": "900 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "250",
        "sub": "39.9% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "376",
        "sub": "60.1% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "42",
        "sub": "16.8% of In Progress",
        "tone": "crit"
      },
      {
        "label": "Avg Days in Status",
        "value": "21",
        "sub": "Job-level average",
        "tone": "warn"
      },
      {
        "label": "Total Portfolio Value",
        "value": "$15.92M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$3.97M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$1.28M",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "42",
        "sub": "16.8% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$1.28M",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "54",
        "sub": "Across 42 jobs",
        "tone": "info"
      },
      {
        "label": "RTS Ready Today",
        "value": "21",
        "sub": "No blocker, dispatch now",
        "tone": "good"
      },
      {
        "label": "Top Trailing Trade",
        "value": "Gutters",
        "sub": "28 open WOs / 28 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "266",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "101",
        "sub": "38.0% of all holds",
        "tone": "warn"
      },
      {
        "label": "Pending Sales",
        "value": "33",
        "sub": "Awaiting sales disposition",
        "tone": "warn"
      },
      {
        "label": "Avg Hold Age",
        "value": "29d",
        "sub": "Mean days in hold across all sub-statuses",
        "tone": "info"
      }
    ],
    "kpisSales": [
      {
        "label": "Active Reps",
        "value": "103",
        "sub": "Reps with at least one open WO",
        "tone": "info"
      },
      {
        "label": "Stuck Value >30d",
        "value": "$3.97M",
        "sub": "Sum of stale value across all reps",
        "tone": "crit"
      },
      {
        "label": "Reps with Stuck Work",
        "value": "62",
        "sub": "Reps carrying any >30d WO",
        "tone": "warn"
      },
      {
        "label": "Top Stuck Rep",
        "value": "$332K",
        "sub": "Highest single-rep stuck value",
        "tone": "warn"
      }
    ],
    "kpisBacklog": [
      {
        "label": "Not Started Jobs",
        "value": "376",
        "sub": "60.1% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$8.34M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "182d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Columbus",
        "sub": "132 jobs (35.1% of backlog)",
        "tone": "warn"
      }
    ],
    "charts": [
      {
        "id": "ch-wo-status",
        "labels": [
          "Ready to Schedule",
          "On Hold",
          "Scheduled",
          "Completed",
          "In Progress",
          "Requires Additional Service"
        ],
        "datasets": [
          {
            "label": "Work Orders",
            "data": [
              269,
              266,
              235,
              55,
              45,
              30
            ]
          }
        ]
      },
      {
        "id": "ch-branch",
        "labels": [
          "Columbus",
          "Cleveland",
          "Detroit Metro",
          "Cincinnati",
          "DC Metro",
          "Richmond",
          "Nashville",
          "Dayton",
          "Knoxville",
          "Raleigh",
          "Grand Rapids",
          "Greenville"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              15,
              26,
              5,
              1,
              1,
              1,
              2,
              4,
              0,
              0,
              0,
              0
            ]
          },
          {
            "label": "Open",
            "data": [
              29,
              10,
              7,
              7,
              5,
              7,
              3,
              2,
              1,
              3,
              1,
              0
            ]
          },
          {
            "label": "On Hold",
            "data": [
              107,
              75,
              20,
              14,
              18,
              6,
              13,
              4,
              3,
              5,
              0,
              1
            ]
          },
          {
            "label": "RTS",
            "data": [
              61,
              99,
              44,
              15,
              6,
              11,
              8,
              10,
              9,
              1,
              2,
              3
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              124,
              30,
              23,
              15,
              11,
              10,
              6,
              4,
              4,
              7,
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
          "Requires Additional Service",
          "Ready to Schedule",
          "Scheduled",
          "In Progress"
        ],
        "datasets": [
          {
            "label": "Avg Days",
            "data": [
              72,
              29,
              26,
              17,
              11,
              3
            ]
          },
          {
            "label": "Max Days",
            "data": [
              260,
              356,
              97,
              113,
              98,
              29
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
          "Rack Mounted Solar",
          "Windows",
          "Skylights",
          "Metal",
          "Flat Roof",
          "GAF Solar",
          "Carpentry",
          "Masonry",
          "Stucco",
          "Other",
          "Painting"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              49,
              2,
              4,
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
            ]
          },
          {
            "label": "Open",
            "data": [
              319,
              304,
              131,
              32,
              17,
              13,
              11,
              5,
              4,
              3,
              2,
              2,
              1,
              1
            ]
          }
        ]
      },
      {
        "id": "ch-incomplete-status",
        "labels": [
          "On Hold",
          "Ready to Schedule",
          "Scheduled",
          "Requires Additional Service",
          "In Progress"
        ],
        "datasets": [
          {
            "label": "WOs",
            "data": [
              21,
              21,
              7,
              3,
              2
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
              15,
              4,
              6,
              7,
              11,
              11
            ]
          }
        ]
      },
      {
        "id": "ch-backlog",
        "labels": [
          "Columbus",
          "Cleveland",
          "Detroit Metro",
          "Cincinnati",
          "DC Metro",
          "Nashville",
          "Knoxville",
          "Dayton",
          "Raleigh",
          "Richmond",
          "Greenville"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              132,
              84,
              59,
              23,
              20,
              16,
              14,
              10,
              8,
              8,
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
            "Columbus",
            336,
            15,
            107,
            61,
            124,
            16,
            13,
            29,
            232,
            6148239.63
          ],
          [
            "Cleveland",
            240,
            26,
            75,
            99,
            30,
            7,
            3,
            27,
            148,
            3488929.1
          ],
          [
            "Detroit Metro",
            99,
            5,
            20,
            44,
            23,
            6,
            1,
            11,
            78,
            1993908.58
          ],
          [
            "Cincinnati",
            52,
            1,
            14,
            15,
            15,
            3,
            4,
            6,
            42,
            861593.23
          ],
          [
            "DC Metro",
            41,
            1,
            18,
            6,
            11,
            3,
            2,
            11,
            33,
            711029.52
          ],
          [
            "Richmond",
            35,
            1,
            6,
            11,
            10,
            4,
            3,
            0,
            20,
            645272.59
          ],
          [
            "Nashville",
            32,
            2,
            13,
            8,
            6,
            1,
            2,
            6,
            22,
            1076611.17
          ],
          [
            "Dayton",
            24,
            4,
            4,
            10,
            4,
            1,
            1,
            3,
            18,
            354278.14
          ],
          [
            "Knoxville",
            17,
            0,
            3,
            9,
            4,
            1,
            0,
            4,
            15,
            266753.88
          ],
          [
            "Raleigh",
            16,
            0,
            5,
            1,
            7,
            3,
            0,
            3,
            13,
            282463.64
          ],
          [
            "Grand Rapids",
            4,
            0,
            0,
            2,
            1,
            0,
            1,
            0,
            3,
            66478.03
          ],
          [
            "Greenville",
            4,
            0,
            1,
            3,
            0,
            0,
            0,
            1,
            2,
            23559.38
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
            99,
            20,
            356
          ],
          [
            "Pending Material",
            97,
            32,
            128
          ],
          [
            "Pending Sales",
            33,
            34,
            132
          ],
          [
            "Homeowner Request",
            21,
            56,
            182
          ],
          [
            "Spring Hold",
            14,
            22,
            161
          ],
          [
            "Pending HOA",
            2,
            23,
            29
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
            28,
            28,
            734760.06
          ],
          [
            "Siding",
            16,
            16,
            531540.97
          ],
          [
            "Metal",
            3,
            3,
            193089.44
          ],
          [
            "Roofing",
            3,
            3,
            66629.16
          ],
          [
            "Windows",
            2,
            2,
            21571.16
          ],
          [
            "Other",
            1,
            1,
            85489
          ],
          [
            "Rack Mounted Solar",
            1,
            1,
            64593.25
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
            "Ready to Schedule",
            121
          ],
          [
            "Scheduled",
            97
          ],
          [
            "On Hold",
            79
          ],
          [
            "In Progress",
            4
          ],
          [
            "Requires Additional Service",
            3
          ],
          [
            "Completed",
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
            368,
            49,
            319,
            364,
            10104233.78
          ],
          [
            "Gutters",
            306,
            2,
            304,
            306,
            7549519.93
          ],
          [
            "Siding",
            135,
            4,
            131,
            135,
            2999914.98
          ],
          [
            "Rack Mounted Solar",
            32,
            0,
            32,
            26,
            935427.68
          ],
          [
            "Windows",
            17,
            0,
            17,
            17,
            180265.78
          ],
          [
            "Skylights",
            13,
            0,
            13,
            13,
            288766.06
          ],
          [
            "Metal",
            11,
            0,
            11,
            11,
            516128.19
          ],
          [
            "Flat Roof",
            5,
            0,
            5,
            5,
            128766.68
          ],
          [
            "GAF Solar",
            4,
            0,
            4,
            3,
            298150.92
          ],
          [
            "Carpentry",
            3,
            0,
            3,
            3,
            77707.5
          ],
          [
            "Masonry",
            2,
            0,
            2,
            2,
            46967.36
          ],
          [
            "Stucco",
            2,
            0,
            2,
            2,
            29810.32
          ],
          [
            "Other",
            1,
            0,
            1,
            1,
            85489
          ],
          [
            "Painting",
            1,
            0,
            1,
            1,
            99000
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
            11
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
            "Rob Blackmore-INACTIVE",
            34,
            15,
            332328.19,
            28,
            2
          ],
          [
            "Mark Younce",
            11,
            8,
            274373.24,
            6,
            3
          ],
          [
            "Frank Drummond",
            25,
            20,
            239223.21,
            13,
            1
          ],
          [
            "Bill Applegate",
            25,
            17,
            196807.36,
            6,
            1
          ],
          [
            "Derrick Sieber",
            13,
            10,
            188822,
            4,
            1
          ],
          [
            "Tyler Sponseller",
            37,
            25,
            180927.71,
            10,
            1
          ],
          [
            "Gary Benedict Jr",
            7,
            7,
            175901.17,
            3,
            1
          ],
          [
            "Frank Butts",
            28,
            16,
            130819.36,
            6,
            1
          ],
          [
            "Caleb Severance",
            15,
            8,
            124848.83,
            4,
            1
          ],
          [
            "Brian Ogrin",
            14,
            10,
            116577.27,
            4,
            1
          ],
          [
            "Tony Seagraves",
            18,
            13,
            113219,
            4,
            1
          ],
          [
            "Justin Koenig",
            12,
            7,
            102321.04,
            4,
            1
          ],
          [
            "Jake Ross",
            23,
            15,
            96885.39,
            7,
            1
          ],
          [
            "Mike Stack",
            16,
            10,
            96680.63,
            4,
            1
          ],
          [
            "Bryce Fink",
            19,
            13,
            92456.83,
            7,
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
            132,
            3042986.39,
            151
          ],
          [
            "Cleveland",
            84,
            1816912.88,
            124
          ],
          [
            "Detroit Metro",
            59,
            1395168.51,
            182
          ],
          [
            "Cincinnati",
            23,
            469462,
            55
          ],
          [
            "DC Metro",
            20,
            337103.72,
            161
          ],
          [
            "Nashville",
            16,
            410004.97,
            74
          ],
          [
            "Knoxville",
            14,
            251371.88,
            26
          ],
          [
            "Dayton",
            10,
            188406.21,
            56
          ],
          [
            "Raleigh",
            8,
            164097.05,
            75
          ],
          [
            "Richmond",
            8,
            241551.83,
            43
          ],
          [
            "Greenville",
            2,
            23559.38,
            15
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
            "Job-107178",
            "Damien Pakula",
            "Detroit Metro",
            "Roofing",
            "Homeowner Request",
            "Gary Benedict Jr",
            182,
            13597
          ],
          [
            "Job-115035",
            "Erik Steensen",
            "DC Metro",
            "GAF Solar",
            "Spring Hold",
            "Derrick Sieber",
            161,
            59822
          ],
          [
            "Job-112457",
            "Michelle  Pullens",
            "Columbus",
            "Siding",
            "Homeowner Request",
            "Mark Daggett",
            151,
            27000
          ],
          [
            "Job-117302",
            "Marcia Williams",
            "Cleveland",
            "Gutters",
            "Pending Material",
            "Jake Ross",
            124,
            19654.5
          ],
          [
            "Job-118348",
            "Angie & MIke Fleshman",
            "Columbus",
            "Siding",
            "Pending Sales",
            "Frank Drummond",
            106,
            2608
          ],
          [
            "Job-118734",
            "Mindi Burkette",
            "DC Metro",
            "Roofing",
            "",
            "David Poole",
            98,
            15829
          ],
          [
            "Job-118731",
            "Kaitlyn Valis",
            "DC Metro",
            "Roofing",
            "Homeowner Request",
            "David Poole",
            97,
            9833
          ],
          [
            "Job-116908",
            "Corey and Shemika Hamilton",
            "Raleigh",
            "Roofing",
            "",
            "Trevor Frazier",
            75,
            11805.8
          ],
          [
            "Job-116547",
            "Brandi J Jacobs",
            "Nashville",
            "Roofing",
            "Homeowner Request",
            "Jeff Camp",
            74,
            21659.5
          ],
          [
            "Job-121089",
            "Lisa Churella’miller",
            "Columbus",
            "Gutters",
            "Pending Material",
            "Yosef Kumnegere",
            67,
            21664.28
          ],
          [
            "Job-121175",
            "Jon Fromm",
            "Columbus",
            "Roofing",
            "Pending Material",
            "Bill Applegate",
            64,
            4000
          ],
          [
            "Job-121195",
            "Miguel Torres",
            "Cleveland",
            "Siding",
            "Pending Material",
            "Tyler Sponseller",
            64,
            22336.47
          ],
          [
            "Job-121001",
            "Maureen Campion",
            "Columbus",
            "Roofing",
            "Homeowner Request",
            "Frank Drummond",
            63,
            20336.04
          ],
          [
            "Job-121346",
            "Ted McDonnell",
            "Columbus",
            "Gutters",
            "",
            "Frank Drummond",
            62,
            7281
          ],
          [
            "Job-121437",
            "Janean Chambers",
            "DC Metro",
            "Roofing",
            "Homeowner Request",
            "David Poole",
            61,
            23150
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Columbus",
          "permits": 29
        },
        {
          "branch": "Cleveland",
          "permits": 27
        },
        {
          "branch": "Detroit Metro",
          "permits": 11
        },
        {
          "branch": "DC Metro",
          "permits": 11
        },
        {
          "branch": "Cincinnati",
          "permits": 6
        },
        {
          "branch": "Nashville",
          "permits": 6
        },
        {
          "branch": "Knoxville",
          "permits": 4
        },
        {
          "branch": "Dayton",
          "permits": 3
        },
        {
          "branch": "Raleigh",
          "permits": 3
        },
        {
          "branch": "Greenville",
          "permits": 1
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $1.28M of trapped partial-job revenue into billable revenue, reduce $3.97M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Dispatch the 21 RTS WOs sitting on partial jobs. No blocker, no hold, just dispatch.",
        "Re-dispatch the 30 RAS WOs (oldest at 97 days). These are pure re-work fastballs.",
        "Gutters sweep: 28 open WOs across 28 partial jobs blocking $735K. Highest single-trade leverage in the book.",
        "Columbus permit sweep: 29 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one.",
        "Close out the 9 zombie jobs (all WOs Completed, parent still In Progress). Pure paperwork."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Gutters): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 376 jobs ($8.34M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $1.28M, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  }
};
