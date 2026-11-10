/* AUTO-GENERATED — do not edit. Generated 2026-11-10T14:17:21.461Z (residential) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-11-10T14:17:21.461Z",
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
        "elapsedMs": 161,
        "builtAt": "2026-11-10T14:17:21.461Z"
      },
      {
        "id": "sales-overview",
        "version": "1.0-rules-encoded",
        "elapsedMs": 787,
        "builtAt": "2026-11-10T14:17:21.461Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 2608,
        "builtAt": "2026-11-10T14:17:21.461Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 29,
        "builtAt": "2026-11-10T14:17:21.461Z"
      }
    ]
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 06, 2026 - Nov 09, 2026 - De-Duplicated at Job Level - 4,312 Jobs - 14 Markets - 34 PMs",
    "generated": "2026-11-10",
    "headerMeta": {
      "trueRevenue": 83404491.13,
      "uniqueJobs": 4312,
      "markets": 14,
      "pms": 34,
      "medianComplete": 27.7,
      "avgStart": 26.4,
      "multiTradeJobs": 1503,
      "singleTradeJobs": 2809,
      "multiTradePct": 34.9,
      "lastBuild": "2026-11-10T14:17:21.461Z"
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
        "value": "$83.40M",
        "sub": "4,312 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$19,342",
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
        "value": "1,503",
        "sub": "34.9% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "2,809",
        "sub": "65.1% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$24,122",
        "sub": "+43.7% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$16,785",
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
        "start": 25
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
        "rev": 9084567.23,
        "jobs": 451,
        "med": 29.5,
        "start": 26.8
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
        "rev": 2934247.26,
        "jobs": 144,
        "med": 32.6,
        "start": 27.5
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
              9084567.23,
              9372427.08,
              12163438.13,
              2934247.26
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
              144
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
              32.6
            ]
          },
          {
            "label": "Avg Days to Start",
            "data": [
              25.2,
              32.9,
              34.1,
              25,
              22,
              24.4,
              26.8,
              26.8,
              26.1,
              27.1,
              27.5
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
              1503
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              2809
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
          "Metal + Roofing",
          "Gutters + Masonry + Roofing",
          "Gutters + Metal + Roofing"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              964,
              100,
              94,
              91,
              29,
              23,
              22,
              17
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
              35.4,
              30.7,
              46.4,
              31.5,
              39.2,
              38.3,
              27.6,
              28.7,
              22.8,
              33.5,
              40.6,
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
              46.7,
              44.6,
              56.4,
              21.7,
              22.7,
              34.1,
              41.6,
              38.2,
              34.6,
              27.1,
              27.7,
              64.6,
              59.5,
              346.7
            ]
          },
          {
            "label": "ST Median",
            "data": [
              21.6,
              24.5,
              30.6,
              18.7,
              14.5,
              13.6,
              23.6,
              22.5,
              19.6,
              17.5,
              16.7,
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
              31991018.25,
              11433655.95,
              6974189.03,
              6394236.01,
              5500542.05,
              4193255.87,
              4177513.95,
              3993623.85,
              2776907.75,
              2671292.99,
              2014381.87,
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
              29.7,
              29.5,
              40.6,
              20.4,
              18.7,
              20.4,
              28.4,
              25.6,
              21.6,
              20.6,
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
          "Brandon Skrzypek",
          "Drew Bailey",
          "Joseph Yager",
          "Alex Dubanoski",
          "Jason Andrews-INACTIVE",
          "Shawn Oehlstrom",
          "Alejandro Alvarado",
          "Kaden Carter",
          "Brady Weingartner",
          "Galo Munive",
          "Brandon Harter"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              7022106.98,
              6801259.13,
              5585264.49,
              5172101.75,
              4381735.5,
              4359970.64,
              4179737.31,
              3836312.23,
              3666269.72,
              3655083.18,
              2982325.27,
              2851053.29,
              2752735.68,
              2725294.21,
              2483522.89
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
          "Brandon Skrzypek",
          "Drew Bailey",
          "Joseph Yager",
          "Alex Dubanoski",
          "Jason Andrews-INACTIVE",
          "Shawn Oehlstrom",
          "Alejandro Alvarado",
          "Kaden Carter",
          "Brady Weingartner",
          "Galo Munive",
          "Brandon Harter",
          "Joseph Jones",
          "Malik Ford",
          "Abraham Santiago",
          "Joshua Collins",
          "Daniel Galli",
          "Adam Marrero-INACTIVE",
          "Michael Blevins",
          "Levi Nieman - INACTIVE",
          "Austin Weingartner-INACTIVE",
          "Chad Williams",
          "(Unassigned)",
          "Cody Mitchell-INACTIVE",
          "Michael McLaughlin",
          "Neil Laux",
          "Mike Scott",
          "Justin Milliron",
          "Chris Atkins",
          "Nathaniel Pardes",
          "Spencer Boyette"
        ],
        "datasets": [
          {
            "label": "PMs",
            "data": [
              {
                "x": 31.7,
                "y": 7022106.98,
                "wos": 456,
                "name": "Mason Bryant"
              },
              {
                "x": 29.5,
                "y": 6801259.13,
                "wos": 424,
                "name": "Eric Isakov"
              },
              {
                "x": 32.7,
                "y": 5585264.49,
                "wos": 388,
                "name": "Richard Williams"
              },
              {
                "x": 32.7,
                "y": 5172101.75,
                "wos": 315,
                "name": "Landon Little"
              },
              {
                "x": 33.5,
                "y": 4381735.5,
                "wos": 253,
                "name": "Brandon Skrzypek"
              },
              {
                "x": 33.5,
                "y": 4359970.64,
                "wos": 505,
                "name": "Drew Bailey"
              },
              {
                "x": 30,
                "y": 4179737.31,
                "wos": 338,
                "name": "Joseph Yager"
              },
              {
                "x": 20.5,
                "y": 3836312.23,
                "wos": 280,
                "name": "Alex Dubanoski"
              },
              {
                "x": 35.4,
                "y": 3666269.72,
                "wos": 358,
                "name": "Jason Andrews-INACTIVE"
              },
              {
                "x": 44.4,
                "y": 3655083.18,
                "wos": 364,
                "name": "Shawn Oehlstrom"
              },
              {
                "x": 19.5,
                "y": 2982325.27,
                "wos": 215,
                "name": "Alejandro Alvarado"
              },
              {
                "x": 22.4,
                "y": 2851053.29,
                "wos": 215,
                "name": "Kaden Carter"
              },
              {
                "x": 25.2,
                "y": 2752735.68,
                "wos": 158,
                "name": "Brady Weingartner"
              },
              {
                "x": 19.7,
                "y": 2725294.21,
                "wos": 241,
                "name": "Galo Munive"
              },
              {
                "x": 23.5,
                "y": 2483522.89,
                "wos": 138,
                "name": "Brandon Harter"
              },
              {
                "x": 20.5,
                "y": 2453893.33,
                "wos": 190,
                "name": "Joseph Jones"
              },
              {
                "x": 27.5,
                "y": 2437443.66,
                "wos": 153,
                "name": "Malik Ford"
              },
              {
                "x": 19,
                "y": 2417106.63,
                "wos": 129,
                "name": "Abraham Santiago"
              },
              {
                "x": 42.5,
                "y": 2356182.51,
                "wos": 170,
                "name": "Joshua Collins"
              },
              {
                "x": 57.1,
                "y": 1767396.55,
                "wos": 160,
                "name": "Daniel Galli"
              },
              {
                "x": 19.4,
                "y": 1533366.94,
                "wos": 110,
                "name": "Adam Marrero-INACTIVE"
              },
              {
                "x": 21.5,
                "y": 1520127.32,
                "wos": 139,
                "name": "Michael Blevins"
              },
              {
                "x": 35.6,
                "y": 1179069.54,
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
                "y": 701168.58,
                "wos": 63,
                "name": "Chad Williams"
              },
              {
                "x": 42.4,
                "y": 622895.39,
                "wos": 72,
                "name": "(Unassigned)"
              },
              {
                "x": 25.4,
                "y": 535023.76,
                "wos": 24,
                "name": "Cody Mitchell-INACTIVE"
              },
              {
                "x": 100.6,
                "y": 436829.92,
                "wos": 37,
                "name": "Michael McLaughlin"
              },
              {
                "x": 33.5,
                "y": 425038.81,
                "wos": 25,
                "name": "Neil Laux"
              },
              {
                "x": 56.5,
                "y": 408373.64,
                "wos": 57,
                "name": "Mike Scott"
              },
              {
                "x": 69.1,
                "y": 330247.7,
                "wos": 36,
                "name": "Justin Milliron"
              },
              {
                "x": 52.5,
                "y": 230033.98,
                "wos": 38,
                "name": "Chris Atkins"
              },
              {
                "x": 17.5,
                "y": 180940.2,
                "wos": 7,
                "name": "Nathaniel Pardes"
              },
              {
                "x": 15.1,
                "y": 157892.93,
                "wos": 8,
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
          "GAF Solar",
          "Painting",
          "Rack Mounted Solar",
          "Flat Roof",
          "Electrical",
          "Carpentry",
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
              59919942.58,
              14387323.73,
              4671260.13,
              986160.69,
              910821.23,
              683225.48,
              406662.67,
              382764.85,
              330813.36,
              235148.34,
              209645.05,
              94319.85,
              82018.24,
              49122.61,
              37248.17,
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
          "GAF Solar",
          "Painting",
          "Rack Mounted Solar",
          "Flat Roof",
          "Electrical",
          "Carpentry",
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
              53.5,
              70,
              55.5,
              66.5,
              77.1,
              50.4,
              63.5,
              42.5,
              39.5,
              38.1,
              73.6,
              54.5,
              50,
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
              1348,
              1112,
              512,
              348,
              306,
              315,
              247,
              70,
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
              31.5,
              24.6,
              23.6,
              25.5,
              25.7,
              30.7,
              30.6,
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
              38.7,
              31.7,
              29.1,
              37.1,
              33.7,
              36.5,
              31.6,
              44.3,
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
                "x": 31.5,
                "y": 19812.11,
                "jobs": 1348,
                "name": "Brandon Vera"
              },
              {
                "x": 24.6,
                "y": 19885.43,
                "jobs": 1112,
                "name": "David Schwan"
              },
              {
                "x": 23.6,
                "y": 17094.36,
                "jobs": 512,
                "name": "Amanda Wade - INACTIVE"
              },
              {
                "x": 25.5,
                "y": 19256.44,
                "jobs": 348,
                "name": "Allison Webb"
              },
              {
                "x": 25.7,
                "y": 19432.09,
                "jobs": 306,
                "name": "Ethan Wolfe"
              },
              {
                "x": 30.7,
                "y": 18868.71,
                "jobs": 315,
                "name": "Bradley Essex - INACTIVE"
              },
              {
                "x": 30.6,
                "y": 18085.12,
                "jobs": 247,
                "name": "Thomas Hayes"
              },
              {
                "x": 37.4,
                "y": 18057.9,
                "jobs": 70,
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
            1617,
            31991018.25,
            19784.18,
            29.7,
            28.4,
            35.4,
            46.7,
            21.6
          ],
          [
            "Detroit Metro",
            602,
            11433655.95,
            18992.78,
            29.5,
            33.1,
            30.7,
            44.6,
            24.5
          ],
          [
            "Cleveland",
            386,
            6974189.03,
            18067.85,
            40.6,
            36.8,
            46.4,
            56.4,
            30.6
          ],
          [
            "Nashville",
            279,
            6394236.01,
            22918.41,
            20.4,
            19.6,
            31.5,
            21.7,
            18.7
          ],
          [
            "DC Metro",
            293,
            5500542.05,
            18773.18,
            18.7,
            19.5,
            39.2,
            22.7,
            14.5
          ],
          [
            "Richmond",
            209,
            4193255.87,
            20063.43,
            20.4,
            15.9,
            38.3,
            34.1,
            13.6
          ],
          [
            "Cincinnati",
            221,
            4177513.95,
            18902.78,
            28.4,
            23.5,
            27.6,
            41.6,
            23.6
          ],
          [
            "Dayton",
            216,
            3993623.85,
            18489,
            25.6,
            21.2,
            28.7,
            38.2,
            22.5
          ],
          [
            "Raleigh",
            162,
            2776907.75,
            17141.41,
            21.6,
            21.1,
            22.8,
            34.6,
            19.6
          ],
          [
            "Knoxville",
            155,
            2671292.99,
            17234.15,
            20.6,
            15.2,
            33.5,
            27.1,
            17.5
          ],
          [
            "Greenville",
            106,
            2014381.87,
            19003.6,
            21.5,
            17.5,
            40.6,
            27.7,
            16.7
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
            456,
            395,
            7022106.98,
            15399.36,
            31.7,
            24.7
          ],
          [
            "Eric Isakov",
            424,
            351,
            6801259.13,
            16040.71,
            29.5,
            25.5
          ],
          [
            "Richard Williams",
            388,
            350,
            5585264.49,
            14395.01,
            32.7,
            29
          ],
          [
            "Landon Little",
            315,
            284,
            5172101.75,
            16419.37,
            32.7,
            28.3
          ],
          [
            "Brandon Skrzypek",
            253,
            246,
            4381735.5,
            17319.11,
            33.5,
            31.8
          ],
          [
            "Drew Bailey",
            505,
            460,
            4359970.64,
            8633.61,
            33.5,
            25.9
          ],
          [
            "Joseph Yager",
            338,
            268,
            4179737.31,
            12366.09,
            30,
            22.1
          ],
          [
            "Alex Dubanoski",
            280,
            205,
            3836312.23,
            13701.12,
            20.5,
            16.3
          ],
          [
            "Jason Andrews-INACTIVE",
            358,
            299,
            3666269.72,
            10240.98,
            35.4,
            35.9
          ],
          [
            "Shawn Oehlstrom",
            364,
            271,
            3655083.18,
            10041.44,
            44.4,
            38.8
          ],
          [
            "Alejandro Alvarado",
            215,
            159,
            2982325.27,
            13871.28,
            19.5,
            17.8
          ],
          [
            "Kaden Carter",
            215,
            170,
            2851053.29,
            13260.71,
            22.4,
            21.5
          ],
          [
            "Brady Weingartner",
            158,
            146,
            2752735.68,
            17422.38,
            25.2,
            23.4
          ],
          [
            "Galo Munive",
            241,
            185,
            2725294.21,
            11308.27,
            19.7,
            22.3
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
            "Joseph Jones",
            190,
            146,
            2453893.33,
            12915.23,
            20.5,
            14.9
          ],
          [
            "Malik Ford",
            153,
            146,
            2437443.66,
            15931,
            27.5,
            29.3
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
            "Joshua Collins",
            170,
            169,
            2356182.51,
            13859.9,
            42.5,
            32
          ],
          [
            "Daniel Galli",
            160,
            128,
            1767396.55,
            11046.23,
            57.1,
            42.6
          ],
          [
            "Adam Marrero-INACTIVE",
            110,
            89,
            1533366.94,
            13939.7,
            19.4,
            18.7
          ],
          [
            "Michael Blevins",
            139,
            93,
            1520127.32,
            10936.17,
            21.5,
            17.7
          ],
          [
            "Levi Nieman - INACTIVE",
            72,
            71,
            1179069.54,
            16375.97,
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
            63,
            45,
            701168.58,
            11129.66,
            49.7,
            20.3
          ],
          [
            "(Unassigned)",
            72,
            65,
            622895.39,
            8651.32,
            42.4,
            32.6
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
            "Michael McLaughlin",
            37,
            37,
            436829.92,
            11806.21,
            100.6,
            64.2
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
            "Mike Scott",
            57,
            56,
            408373.64,
            7164.45,
            56.5,
            33.7
          ],
          [
            "Justin Milliron",
            36,
            32,
            330247.7,
            9173.55,
            69.1,
            51.5
          ],
          [
            "Chris Atkins",
            38,
            34,
            230033.98,
            6053.53,
            52.5,
            42.3
          ],
          [
            "Nathaniel Pardes",
            7,
            6,
            180940.2,
            25848.6,
            17.5,
            18.6
          ],
          [
            "Spencer Boyette",
            8,
            8,
            157892.93,
            19736.62,
            15.1,
            14.8
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
            3888,
            59919942.58,
            15411.51,
            27.6
          ],
          [
            "Gutters",
            1520,
            14387323.73,
            9465.34,
            36.5
          ],
          [
            "Siding",
            472,
            4671260.13,
            9896.74,
            53.5
          ],
          [
            "Metal",
            60,
            986160.69,
            16436.01,
            70
          ],
          [
            "Masonry",
            81,
            910821.23,
            11244.71,
            55.5
          ],
          [
            "Windows",
            66,
            683225.48,
            10351.9,
            66.5
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
            29,
            382764.85,
            13198.79,
            50.4
          ],
          [
            "Rack Mounted Solar",
            32,
            330813.36,
            10337.92,
            63.5
          ],
          [
            "Flat Roof",
            25,
            235148.34,
            9405.93,
            42.5
          ],
          [
            "Electrical",
            18,
            209645.05,
            11646.95,
            39.5
          ],
          [
            "Carpentry",
            10,
            94319.85,
            9431.99,
            38.1
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
            5,
            49122.61,
            9824.52,
            54.5
          ],
          [
            "Stucco",
            4,
            37248.17,
            9312.04,
            50
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
            1348,
            26706727.89,
            19812.11,
            "31.5d",
            "27.5d",
            38.7,
            19812.11
          ],
          [
            "David Schwan",
            1112,
            22112595.52,
            19885.43,
            "24.6d",
            "24.3d",
            31.7,
            19885.43
          ],
          [
            "Amanda Wade - INACTIVE",
            512,
            8752314.84,
            17094.36,
            "23.6d",
            "28.5d",
            29.1,
            17094.36
          ],
          [
            "Allison Webb",
            348,
            6701242.7,
            19256.44,
            "25.5d",
            "19.4d",
            37.1,
            19256.44
          ],
          [
            "Ethan Wolfe",
            306,
            5946219.39,
            19432.09,
            "25.7d",
            "20.2d",
            33.7,
            19432.09
          ],
          [
            "Bradley Essex - INACTIVE",
            315,
            5943644.81,
            18868.71,
            "30.7d",
            "30.3d",
            36.5,
            18868.71
          ],
          [
            "Thomas Hayes",
            247,
            4467024.38,
            18085.12,
            "30.6d",
            "31.4d",
            31.6,
            18085.12
          ],
          [
            "Bruce Lemon Jr.",
            70,
            1264053.05,
            18057.9,
            "37.4d",
            "28.7d",
            44.3,
            18057.9
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
            55,
            25,
            216,
            13,
            26,
            8,
            0,
            0,
            1,
            0,
            0,
            0,
            1,
            3,
            348
          ],
          [
            "Amanda Wade - INACTIVE",
            0,
            1,
            375,
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
            512
          ],
          [
            "Bradley Essex - INACTIVE",
            70,
            145,
            2,
            0,
            85,
            13,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            315
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
            73,
            145,
            335,
            273,
            97,
            157,
            20,
            0,
            7,
            0,
            30,
            0,
            15,
            196,
            1348
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
            21,
            33,
            4,
            1,
            4,
            1,
            0,
            2,
            0,
            0,
            0,
            0,
            4,
            70
          ],
          [
            "David Schwan",
            15,
            19,
            428,
            3,
            0,
            96,
            3,
            0,
            42,
            155,
            0,
            278,
            67,
            6,
            1112
          ],
          [
            "Ethan Wolfe",
            4,
            15,
            166,
            0,
            2,
            116,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            306
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
            37,
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
            0,
            247
          ],
          [
            "Total",
            221,
            386,
            1617,
            293,
            216,
            602,
            35,
            1,
            106,
            155,
            30,
            279,
            162,
            209,
            4312
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Michael McLaughlin: 37 WOs, $437K revenue, 100.6-day median complete, top-volume PM with the slowest cycle in the network.",
        "Multi-trade penalty is severe in 1 markets: NOVA MT 64.6d vs ST 32.6d.",
        "Days to Start averages 26.4 days company-wide and 36.8 days in Cleveland (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [
        "Gutters-only work runs at 36.5-day median complete versus 27.6 days for roofing, 32% slower cycle on the lowest-priced trade."
      ],
      "positivesToBuildOn": [
        "October delivered $12.16M across 619 invoiced jobs at 32.5-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "DC Metro hits 18.7-day median complete and a $18,773 average contract on 293 jobs.",
        "Multi-trade jobs carry a $24,122 average contract versus $16,785 for single-trade, a 44% revenue lift per job.",
        "Nashville is the best-balanced market: 20.4-day median complete, 31.5% multi-trade attach, $22,918 average contract on 279 jobs."
      ]
    }
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-11-28",
    "ytdDays": 313,
    "rowCount": 5585,
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
        "value": "$96.47M",
        "sub": "5,585 signed contracts across 13 markets"
      },
      {
        "label": "Sold",
        "value": "$94.75M",
        "sub": "5,496 deals | 98.4% of signed contracts"
      },
      {
        "label": "Production Review",
        "value": "$1.29M",
        "sub": "62 deals | Ops Review, PM Review, Contracted"
      },
      {
        "label": "Kicked Back",
        "value": "$293K",
        "sub": "18 deals | 0.3% of signed contracts",
        "trend": "negative"
      },
      {
        "label": "Sales Action",
        "value": "$53K",
        "sub": "4 deals requiring sales follow-up",
        "trend": "neutral"
      },
      {
        "label": "Avg Deal Size",
        "value": "$17,272",
        "sub": "Median: $16,012 | Install avg: $19,643"
      },
      {
        "label": "Organization",
        "value": "181 Reps",
        "sub": "13 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$112.49M",
        "sub": "Based on 313 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "86.0% / 13.8%",
        "sub": "4,805 installs | 773 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 5496,
        "amount": 94752426.48
      },
      {
        "label": "Production Review",
        "count": 62,
        "amount": 1290218.23
      },
      {
        "label": "Kicked Back",
        "count": 18,
        "amount": 293211.66
      },
      {
        "label": "Sales Action",
        "count": 4,
        "amount": 52570.11
      },
      {
        "label": "Other",
        "count": 5,
        "amount": 78398
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
        "amount": 11463496.69,
        "installs": 564,
        "repairs": 63,
        "avgDeal": 18283,
        "repairPct": 10,
        "installAvg": 20065,
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
        "count": 606,
        "amount": 11266627.81,
        "installs": 520,
        "repairs": 86,
        "avgDeal": 18592,
        "repairPct": 14.2,
        "installAvg": 21202,
        "repairAvg": 2811
      },
      {
        "key": "2026-08",
        "label": "August",
        "count": 625,
        "amount": 11117064.45,
        "installs": 544,
        "repairs": 81,
        "avgDeal": 17787,
        "repairPct": 13,
        "installAvg": 19973,
        "repairAvg": 3106
      },
      {
        "key": "2026-09",
        "label": "September",
        "count": 668,
        "amount": 11329131.18,
        "installs": 578,
        "repairs": 90,
        "avgDeal": 16960,
        "repairPct": 13.5,
        "installAvg": 19238,
        "repairAvg": 2331
      },
      {
        "key": "2026-10",
        "label": "October",
        "count": 619,
        "amount": 11259049.03,
        "installs": 524,
        "repairs": 92,
        "avgDeal": 18189,
        "repairPct": 14.9,
        "installAvg": 20762,
        "repairAvg": 3479
      },
      {
        "key": "2026-11",
        "label": "November",
        "count": 115,
        "amount": 2084428.27,
        "installs": 97,
        "repairs": 14,
        "avgDeal": 18125,
        "repairPct": 12.2,
        "installAvg": 19254,
        "repairAvg": 6257
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
        "2026-07": 4793203.11,
        "2026-08": 4816946.2,
        "2026-09": 4450961.08,
        "2026-10": 4145069.45,
        "2026-11": 629901.19
      },
      "Insurance": {
        "2026-01": 1437020.6,
        "2026-02": 1686849.5,
        "2026-03": 2811664.92,
        "2026-04": 6323664.43,
        "2026-05": 6207973.47,
        "2026-06": 5839036.3,
        "2026-07": 4992025.68,
        "2026-08": 4512423.02,
        "2026-09": 4745230.18,
        "2026-10": 4936970.53,
        "2026-11": 599504.51
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
        "2026-10": 1670411.07,
        "2026-11": 254371.37
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Insurance",
        "count": 2121,
        "amount": 44092363.14,
        "avg": 20788
      },
      {
        "jobType": "Retail-No Financing",
        "count": 2798,
        "amount": 38345948.67,
        "avg": 13705
      },
      {
        "jobType": "Retail-Financing",
        "count": 583,
        "amount": 12483741.99,
        "avg": 21413
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
        "amount": 2886923.26
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
        "count": 139,
        "amount": 2363107.83
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
        "count": 143,
        "amount": 2583457.21
      },
      {
        "w": 36,
        "count": 152,
        "amount": 2735088.06
      },
      {
        "w": 37,
        "count": 141,
        "amount": 2212256.32
      },
      {
        "w": 38,
        "count": 147,
        "amount": 2592395.86
      },
      {
        "w": 39,
        "count": 160,
        "amount": 2711463.44
      },
      {
        "w": 40,
        "count": 195,
        "amount": 3407472.36
      },
      {
        "w": 41,
        "count": 140,
        "amount": 2521462.3
      },
      {
        "w": 42,
        "count": 142,
        "amount": 2511359.69
      },
      {
        "w": 43,
        "count": 139,
        "amount": 2592314.15
      },
      {
        "w": 44,
        "count": 108,
        "amount": 2003720.74
      },
      {
        "w": 45,
        "count": 109,
        "amount": 2003133.8
      },
      {
        "w": 46,
        "count": 3,
        "amount": 49901.47
      },
      {
        "w": 48,
        "count": 3,
        "amount": 31393
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
          37493252.22,
          2055,
          18245,
          1771,
          282,
          13.7,
          10
        ],
        [
          "Detroit Metro",
          13453812.87,
          831,
          16190,
          694,
          137,
          16.5,
          5
        ],
        [
          "Cleveland",
          10801585.92,
          645,
          16747,
          553,
          88,
          13.6,
          15
        ],
        [
          "Nashville",
          6554304,
          364,
          18006,
          285,
          79,
          21.7,
          5
        ],
        [
          "DC Metro",
          5853354.22,
          400,
          14633,
          310,
          90,
          22.5,
          9
        ],
        [
          "Richmond",
          5300008.45,
          239,
          22176,
          228,
          10,
          4.2,
          26
        ],
        [
          "Cincinnati",
          4841372,
          290,
          16694,
          258,
          32,
          11,
          6
        ],
        [
          "Dayton",
          4215114.02,
          252,
          16727,
          224,
          28,
          11.1,
          14
        ],
        [
          "Knoxville",
          2628117.44,
          159,
          16529,
          158,
          1,
          0.6,
          12
        ],
        [
          "Raleigh",
          2604840.62,
          190,
          13710,
          170,
          20,
          10.5,
          6
        ],
        [
          "Greenville",
          1767581.36,
          102,
          17329,
          101,
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
          "opps": 3568,
          "soldAmt": 21412150.99,
          "closePct": 41.3,
          "nsli": 6001
        },
        {
          "branch": "Detroit",
          "opps": 1602,
          "soldAmt": 10296950.19,
          "closePct": 43,
          "nsli": 6428
        },
        {
          "branch": "Cleveland",
          "opps": 1196,
          "soldAmt": 6317853.34,
          "closePct": 35.2,
          "nsli": 5282
        },
        {
          "branch": "DC Metro",
          "opps": 979,
          "soldAmt": 3832668.5,
          "closePct": 31.7,
          "nsli": 3915
        },
        {
          "branch": "Cincinnati",
          "opps": 781,
          "soldAmt": 3582774.3,
          "closePct": 31,
          "nsli": 4587
        },
        {
          "branch": "Nashville",
          "opps": 567,
          "soldAmt": 3435037.99,
          "closePct": 41.4,
          "nsli": 6058
        },
        {
          "branch": "Dayton",
          "opps": 460,
          "soldAmt": 2151488.71,
          "closePct": 31.3,
          "nsli": 4677
        },
        {
          "branch": "Raleigh",
          "opps": 413,
          "soldAmt": 1515515.92,
          "closePct": 32,
          "nsli": 3670
        },
        {
          "branch": "Richmond",
          "opps": 174,
          "soldAmt": 1285703.71,
          "closePct": 40.8,
          "nsli": 7389
        },
        {
          "branch": "Greenville",
          "opps": 205,
          "soldAmt": 1110166.64,
          "closePct": 33.7,
          "nsli": 5415
        },
        {
          "branch": "Knoxville",
          "opps": 147,
          "soldAmt": 879928.94,
          "closePct": 41.5,
          "nsli": 5986
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
        "opps": 10207,
        "soldAmt": 56211460.97,
        "closePct": 38,
        "nsli": 5507
      },
      "source": "Closing Percent By Branch-2026-11-10-09-00-05.xlsx",
      "format": "per-opportunity"
    },
    "marketKickbacks": [
      {
        "market": "Columbus",
        "kicked": 6,
        "kickedAmount": 93487.54
      },
      {
        "market": "Detroit Metro",
        "kicked": 4,
        "kickedAmount": 70280
      },
      {
        "market": "Richmond",
        "kicked": 2,
        "kickedAmount": 43044.47
      },
      {
        "market": "Cleveland",
        "kicked": 2,
        "kickedAmount": 21418.65
      },
      {
        "market": "Nashville",
        "kicked": 1,
        "kickedAmount": 19556
      },
      {
        "market": "Dayton",
        "kicked": 1,
        "kickedAmount": 1400
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
        "name": "Storm Drumm",
        "amount": 2440656.24,
        "count": 154,
        "avg": 15848,
        "medDays": 3,
        "jt": {
          "Retail-Financing": 26,
          "Retail-No Financing": 87,
          "Insurance": 39
        },
        "installs": 140,
        "repairs": 14
      },
      {
        "name": "Kevin Ditty",
        "amount": 2351399.14,
        "count": 118,
        "avg": 19927,
        "medDays": 3,
        "jt": {
          "Insurance": 17,
          "Retail-No Financing": 72,
          "Retail-Financing": 29
        },
        "installs": 97,
        "repairs": 21
      },
      {
        "name": "Brian Ogrin",
        "amount": 2172118.72,
        "count": 80,
        "avg": 27151,
        "medDays": 61,
        "jt": {
          "Insurance": 55,
          "Retail-No Financing": 24,
          "Retail-Financing": 1
        },
        "installs": 74,
        "repairs": 6
      },
      {
        "name": "Stephen Harmon",
        "amount": 2135989.63,
        "count": 108,
        "avg": 19778,
        "medDays": 10,
        "jt": {
          "Retail-No Financing": 99,
          "Insurance": 4,
          "Retail-Financing": 4
        },
        "installs": 97,
        "repairs": 11
      },
      {
        "name": "Robert Beck",
        "amount": 2127147.09,
        "count": 75,
        "avg": 28362,
        "medDays": 33,
        "jt": {
          "Insurance": 57,
          "Retail-No Financing": 16,
          "Retail-Financing": 1
        },
        "installs": 71,
        "repairs": 4
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
        "amount": 1943053.97,
        "count": 149,
        "avg": 13041,
        "medDays": 6,
        "jt": {
          "Retail-No Financing": 87,
          "Insurance": 56,
          "Retail-Financing": 6
        },
        "installs": 108,
        "repairs": 41
      },
      {
        "name": "Bill Applegate",
        "amount": 1876302.45,
        "count": 88,
        "avg": 21322,
        "medDays": 42,
        "jt": {
          "Insurance": 58,
          "Retail-No Financing": 28,
          "Retail-Financing": 1
        },
        "installs": 73,
        "repairs": 14
      },
      {
        "name": "Caleb Severance",
        "amount": 1705251.59,
        "count": 78,
        "avg": 21862,
        "medDays": 2,
        "jt": {
          "Retail-No Financing": 54,
          "Retail-Financing": 23,
          "Insurance": 1
        },
        "installs": 69,
        "repairs": 9
      },
      {
        "name": "Dave Norris",
        "amount": 1701169.46,
        "count": 122,
        "avg": 13944,
        "medDays": 13,
        "jt": {
          "Retail-No Financing": 74,
          "Retail-Financing": 1,
          "Insurance": 45
        },
        "installs": 90,
        "repairs": 32
      },
      {
        "name": "Cole Burgess",
        "amount": 1675496.84,
        "count": 90,
        "avg": 18617,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 68,
          "Retail-Financing": 15,
          "Insurance": 7
        },
        "installs": 80,
        "repairs": 10
      },
      {
        "name": "Clay Hastings",
        "amount": 1635383.3,
        "count": 92,
        "avg": 17776,
        "medDays": 8,
        "jt": {
          "Retail-No Financing": 30,
          "Insurance": 34,
          "Retail-Financing": 28
        },
        "installs": 83,
        "repairs": 9
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
        "name": "Matthew Ross",
        "amount": 1571547.56,
        "count": 94,
        "avg": 16719,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 72,
          "Insurance": 2,
          "Retail-Financing": 20
        },
        "installs": 81,
        "repairs": 13
      },
      {
        "name": "Derrick Sieber",
        "amount": 1564630.69,
        "count": 107,
        "avg": 14623,
        "medDays": 9,
        "jt": {
          "Retail-No Financing": 66,
          "Retail-Financing": 4,
          "Insurance": 35
        },
        "installs": 74,
        "repairs": 33
      },
      {
        "name": "Mark Daggett",
        "amount": 1491578.98,
        "count": 90,
        "avg": 16573,
        "medDays": 5,
        "jt": {
          "Retail-No Financing": 57,
          "Insurance": 24,
          "Retail-Financing": 7
        },
        "installs": 80,
        "repairs": 10
      },
      {
        "name": "Frank Butts",
        "amount": 1473338.08,
        "count": 108,
        "avg": 13642,
        "medDays": 11,
        "jt": {
          "Retail-No Financing": 46,
          "Insurance": 55,
          "Retail-Financing": 2
        },
        "installs": 97,
        "repairs": 11
      },
      {
        "name": "Nick Junker",
        "amount": 1473324.44,
        "count": 76,
        "avg": 19386,
        "medDays": 34,
        "jt": {
          "Insurance": 44,
          "Retail-No Financing": 31,
          "Retail-Financing": 1
        },
        "installs": 71,
        "repairs": 5
      },
      {
        "name": "Matt Busch",
        "amount": 1472868,
        "count": 88,
        "avg": 16737,
        "medDays": 4,
        "jt": {
          "Retail-No Financing": 60,
          "Retail-Financing": 11,
          "Insurance": 16
        },
        "installs": 74,
        "repairs": 14
      },
      {
        "name": "Zachary Schneider",
        "amount": 1409529.64,
        "count": 81,
        "avg": 17402,
        "medDays": 21,
        "jt": {
          "Retail-No Financing": 35,
          "Insurance": 46
        },
        "installs": 67,
        "repairs": 14
      }
    ],
    "speedSellers": [
      {
        "name": "Adam Petulla",
        "medDays": 1
      },
      {
        "name": "Mina Khalil",
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
      }
    ],
    "repairHeavy": [
      {
        "name": "Ryan Johnson",
        "repairs": 18,
        "deals": 33,
        "pct": 54.5
      },
      {
        "name": "Dan Haske",
        "repairs": 32,
        "deals": 78,
        "pct": 41
      },
      {
        "name": "Darrell Philipps",
        "repairs": 12,
        "deals": 35,
        "pct": 34.3
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
          "count": 2618
        },
        {
          "label": "Retail-Fin",
          "median": 3,
          "mean": 15,
          "count": 568
        },
        {
          "label": "Insurance",
          "median": 27,
          "mean": 63,
          "count": 1983
        },
        {
          "label": "Repair",
          "median": 3,
          "mean": 14,
          "count": 715
        },
        {
          "label": "Install",
          "median": 10,
          "mean": 41,
          "count": 4516
        }
      ],
      "byMarket": [
        {
          "market": "Greenville",
          "median": 4,
          "mean": 6,
          "count": 99
        },
        {
          "market": "Nashville",
          "median": 5,
          "mean": 21,
          "count": 348
        },
        {
          "market": "Detroit Metro",
          "median": 5,
          "mean": 22,
          "count": 789
        },
        {
          "market": "Cincinnati",
          "median": 6,
          "mean": 27,
          "count": 287
        },
        {
          "market": "Raleigh",
          "median": 6,
          "mean": 47,
          "count": 183
        },
        {
          "market": "DC Metro",
          "median": 9,
          "mean": 43,
          "count": 381
        },
        {
          "market": "Columbus",
          "median": 10,
          "mean": 39,
          "count": 1883
        },
        {
          "market": "Knoxville",
          "median": 12,
          "mean": 39,
          "count": 156
        },
        {
          "market": "Dayton",
          "median": 14,
          "mean": 43,
          "count": 245
        },
        {
          "market": "Cleveland",
          "median": 15,
          "mean": 41,
          "count": 585
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
          "mean": 80,
          "count": 226
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
      "recent4WkAvg": 1022037.25
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
          "liveActual": 11463496.69
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
      "generatedAt": "2026-11-09T09:04:16-05:00",
      "modelRunDate": "2026-11-06",
      "fiscalYear": 2026,
      "gap": {
        "fullYearBudget": 123956895,
        "invoicedYtd": 84076690,
        "stillToInvoice": 39880205,
        "daysRemaining": 55,
        "weeksRemaining": 8
      },
      "bridge": {
        "rows": [
          {
            "label": "In Progress",
            "amount": 7818451,
            "convertPct": 91.4,
            "lands": 7142661,
            "note": "Already installing. Needs completion and billing only."
          },
          {
            "label": "Not Started",
            "amount": 10146792,
            "convertPct": 77.8,
            "lands": 7889725,
            "note": "Sold and processed, awaiting schedule. Throughput decides this."
          },
          {
            "label": "Sold Not Processed",
            "amount": 1575917,
            "convertPct": 77.8,
            "lands": 1225368,
            "note": "Signed but not yet a job. Processing delay is pure lost time."
          }
        ],
        "alreadySoldLands": 16257754,
        "mustBeNewlySoldNet": 23622450,
        "mustBeNewlySoldGross": 50855652,
        "meanCapturePct": 46.5
      },
      "sellingWindow": {
        "weeks": [
          {
            "weekStart": "11/06/2026",
            "daysToYearEnd": 55,
            "capturePct": 77.8,
            "valueOfOneMillion": 777559
          },
          {
            "weekStart": "11/13/2026",
            "daysToYearEnd": 48,
            "capturePct": 72.9,
            "valueOfOneMillion": 728977
          },
          {
            "weekStart": "11/20/2026",
            "daysToYearEnd": 41,
            "capturePct": 67.2,
            "valueOfOneMillion": 672010
          },
          {
            "weekStart": "11/27/2026",
            "daysToYearEnd": 34,
            "capturePct": 58.6,
            "valueOfOneMillion": 585943
          },
          {
            "weekStart": "12/04/2026",
            "daysToYearEnd": 27,
            "capturePct": 46.1,
            "valueOfOneMillion": 460912
          },
          {
            "weekStart": "12/11/2026",
            "daysToYearEnd": 20,
            "capturePct": 31.5,
            "valueOfOneMillion": 315166
          },
          {
            "weekStart": "12/18/2026",
            "daysToYearEnd": 13,
            "capturePct": 15.2,
            "valueOfOneMillion": 152158
          },
          {
            "weekStart": "12/25/2026",
            "daysToYearEnd": 6,
            "capturePct": 2.3,
            "valueOfOneMillion": 23428
          }
        ],
        "belowThreeQuartersFrom": "11/13/2026",
        "belowHalfFrom": "12/04/2026"
      },
      "pullForward": {
        "backlogTotal": 19541160,
        "perDay": 138215,
        "perWeek": 609817,
        "leverageCurve": [
          {
            "daysBeforeYearEnd": 55,
            "onDate": "11/06/2026",
            "worthPerDay": 138215
          },
          {
            "daysBeforeYearEnd": 45,
            "onDate": "11/16/2026",
            "worthPerDay": 109305
          },
          {
            "daysBeforeYearEnd": 30,
            "onDate": "12/01/2026",
            "worthPerDay": 207830
          },
          {
            "daysBeforeYearEnd": 21,
            "onDate": "12/10/2026",
            "worthPerDay": 365576
          },
          {
            "daysBeforeYearEnd": 14,
            "onDate": "12/17/2026",
            "worthPerDay": 446282
          },
          {
            "daysBeforeYearEnd": 7,
            "onDate": "12/24/2026",
            "worthPerDay": 535655
          }
        ],
        "strandedBacklog": 3283405,
        "completedAwaitingInvoice": {
          "total": 2198739,
          "jobs": 92,
          "medianAgeDays": 8,
          "agingBuckets": [
            {
              "bucket": "0-15 days",
              "jobs": 54,
              "amount": 1344452
            },
            {
              "bucket": "15-30 days",
              "jobs": 12,
              "amount": 274678
            },
            {
              "bucket": "30-60 days",
              "jobs": 10,
              "amount": 271822
            },
            {
              "bucket": "60-90 days",
              "jobs": 3,
              "amount": 112101
            },
            {
              "bucket": "over 90 days",
              "jobs": 2,
              "amount": 16457
            }
          ],
          "byReason": [
            {
              "reason": "Ready to Invoice",
              "jobs": 37,
              "amount": 938830
            },
            {
              "reason": "Pending Supplement",
              "jobs": 34,
              "amount": 902461
            },
            {
              "reason": "Accounting Kickback",
              "jobs": 12,
              "amount": 232522
            },
            {
              "reason": "Unspecified",
              "jobs": 9,
              "amount": 124926
            }
          ],
          "note": "Work finished but not invoiced. No selling and no scheduling required, only the blocking process cleared."
        },
        "note": "Revenue moved into 2026 by finishing and billing existing work sooner. Requires no new selling."
      },
      "capacity": {
        "requiredPerWeek": 6356957,
        "demonstratedPerWeek": 2386742,
        "liftRequiredPct": 166.3,
        "trendPerWeek": -64482
      },
      "scenarios": [
        {
          "name": "Hold current pace",
          "weeklySales": 2386742,
          "newSalesRevenue": 8869133,
          "landsAt": 109203577,
          "note": "Trailing 4-week average, carried flat."
        },
        {
          "name": "Stretch +15%",
          "weeklySales": 2744753,
          "newSalesRevenue": 10199503,
          "landsAt": 110533947,
          "note": "Ambitious but inside what the team has produced before."
        },
        {
          "name": "Required to hit plan",
          "weeklySales": 6356957,
          "newSalesRevenue": 23622450,
          "landsAt": 123956895,
          "note": "What closing the full gap by selling alone would take."
        }
      ],
      "modelComparison": {
        "v5FullYear": 93263234,
        "paceLandingZone": 109203577,
        "note": "V5 is the forecast of record. The pace landing zone runs higher because these conversion rates are drawn from jobs that did invoice and because V5 also carries a declining sales trend."
      },
      "verdict": {
        "band": "not-reachable",
        "headline": "Plan is not reachable by selling alone. Closing the gap needs a production pull-forward, a budget reset, or both.",
        "reasons": [
          "Required $6,356,957/wk against a demonstrated $2,386,742/wk, a 166% lift.",
          "Sales are trending down $64,482 per week, not flat.",
          "After 11/13/2026, under 75% of what is sold still invoices this year.",
          "$16,257,754 of the gap is already sold and needs production, not selling."
        ]
      }
    },
    "commentary": {
      "whatsWorking": [
        "Sales Trajectory: Monthly sales moved from January $3.26M to November $2.08M (-36%). Annualized run rate: $112.49M.",
        "Premium Deal Types: Insurance averages $20,788 per deal. Retail-Financing averages $21,413 (highest per-deal value). Retail-No Financing averages $13,705 (the volume engine).",
        "Sold Conversion: 5,496 of 5,585 signed contracts (98.4%) have made it to Sold status for $94.75M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Kickback Concentration: Columbus has the most kickbacks (6, $93K). Total company kickbacks: 18 worth $293K.",
        "Production Review Queue: 62 deals worth $1.29M sitting in Production Review. Watch for backlog growth, it delays revenue recognition."
      ],
      "criticalRisks": [
        "Columbus Kickback Concentration drives the company's largest single-market rework volume.",
        "Pipeline kickbacks company-wide: 18 kickbacks totaling $293K.",
        "Production Review backlog: 62 deals ($1.29M)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 4d median close on 3,186 retail deals.",
        "Insurance Density: $20,788 avg on 2,121 deals = $44.09M; +20% lift = ~$8.82M.",
        "November repair rate at 12.2% vs YTD 13.8%, correction in latest month.",
        "Financing Lifts Ticket: Retail-Financing averages $21,413, highest per-deal value."
      ],
      "fixList": [
        "Columbus Pipeline Kickback Intervention, pull every kickback and categorize root cause.",
        "Production Review Bottleneck, 62 deals; add temporary PM capacity.",
        "Financing Push, 583 financing deals YTD (10.4%) at $21,413 avg. Target 15% mix."
      ],
      "actionPlan": {
        "thisWeek": [
          "Columbus Pipeline Kickback Review, meet with branch leadership.",
          "Production Review Surge Plan, 62 deals ($1.29M) in queue."
        ],
        "thisMonth": [
          "Supplement Escalation SOP, 7/14/30 day cadence with carrier escalation.",
          "Completed-to-Billing SLA, 100% invoiced within 21 days.",
          "Repair Triage Pilot in markets where repair rate exceeds 25%.",
          "Financing Training, peer training led by top financing reps. Target 15% mix."
        ],
        "thisQuarter": [
          "Add Kickback Reason field to accounting workflow.",
          "Repair Business Decision, 773 repairs YTD at ~$2,451 avg.",
          "Ops Capacity Planning, November hit 115 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "title": "Residential Revenue Forecast",
    "subtitle": "V5 Model with Job Type Analysis · Data as of November 09, 2026",
    "runDate": "November 09, 2026",
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
        "value": "$94.8M",
        "sub": "Jobs processed into system"
      },
      {
        "label": "Invoiced YTD",
        "value": "$84.75M",
        "sub": "NetSuite AR · 4755 invoices booked"
      },
      {
        "label": "4-Week Avg Weekly Sales",
        "value": "$2.3M",
        "sub": "Trend: -111,810/week"
      },
      {
        "label": "Current Week (Projected)",
        "value": "$1.5M",
        "sub": "WTD: $123K"
      },
      {
        "label": "Annual Forecast",
        "value": "$107.6M",
        "sub": "Model invoiced revenue"
      },
      {
        "label": "Annual Budget",
        "value": "$125.9M",
        "sub": "Board plan · full year"
      },
      {
        "label": "Forecast vs Budget",
        "value": "-$18.3M",
        "sub": "14.6% under plan"
      },
      {
        "label": "Active Pipeline",
        "value": "$19.6M",
        "sub": "Backlog + IP + SNP"
      }
    ],
    "execSummary": {
      "budget": 125890005.2103,
      "modelAnnualInvoiced": 107557713.8154,
      "gap": 18332291.3949,
      "narrative": "The V5 model projects $107.6M in annual invoiced revenue against a $125.9M plan. The challenge is timing, not volume: Q1 ramped slowly so Q2 invoicing will lag. If the current weekly pace of $2.3M holds, H2 should catch up as earlier sales convert to invoiced revenue."
    },
    "monthRevenue": {
      "april": {
        "invoiced": 8405959.810000002,
        "wipChange": -9104314.09,
        "netRevenue": -698354.2799999975,
        "beginningWip": 9104314.09,
        "endingWip": 0,
        "materialCost": 4568359.2694,
        "laborCost": 2741053.7666,
        "grossProfit": -4140460.456,
        "grossMarginPct": -130.6571
      },
      "may": {
        "invoiced": 8564976.120000001,
        "wipChange": 0,
        "netRevenue": 8564976.120000001,
        "beginningWip": 0,
        "endingWip": 0,
        "materialCost": 4727832.9413,
        "laborCost": 2836739.3035,
        "grossProfit": 5007520.7494,
        "grossMarginPct": 39.8304
      }
    },
    "weeklyTargetsHeader": {
      "avgWeeklyNeed": 2271540.0556,
      "recent4WkAvg": 2275660.935,
      "gap": 0,
      "productionAvgWeeklyNeed": 2483987.5984,
      "productionCycleStart": 13,
      "productionCycleComplete": 7,
      "productionTotalCycle": 20
    },
    "budgetRecoveryHeader": {
      "fullYearBudget": 125890005.2103,
      "gap": 21050039.6619,
      "upliftPct": 1.3,
      "aprilGap": 502088.2086,
      "q1OriginalBudget": 103034403.7434,
      "q1Actual": 82486452.29,
      "q1Shortfall": 20547951.4534,
      "recoveryRatio": 2.9897
    },
    "profitabilitySummary": {
      "combinedGP": 62817451.17,
      "combinedGP_pct": 40.0719,
      "combinedRevenue": 156761757.39,
      "y2025_GP_pct": 41.5376,
      "y2025_revenue": 73942457.17,
      "y2025_jobs": 3481,
      "y2026_GP_pct": 38.7633,
      "y2026_revenue": 82819300.22,
      "y2026_jobs": 4266,
      "materialCost": 58491214.2,
      "laborCost": 35095217.68,
      "commissions": 13375326.81,
      "materialPctContract": 37.3122,
      "laborPctContract": 22.3876,
      "commissionPctContract": 8.5323
    },
    "pipelineSnapshot": {
      "stages": [
        {
          "label": "New Sales",
          "subtitle": "72 jobs · 4d avg",
          "value": 1403446.52,
          "jobs": 72,
          "color": "#3b82f6",
          "byMarket": [
            {
              "market": "Cleveland",
              "jobs": 14,
              "value": 318738.95
            },
            {
              "market": "Columbus",
              "jobs": 17,
              "value": 308371.36
            },
            {
              "market": "Detroit Metro",
              "jobs": 11,
              "value": 194164
            },
            {
              "market": "Cincinnati",
              "jobs": 8,
              "value": 164431.13
            },
            {
              "market": "Nashville",
              "jobs": 6,
              "value": 154158
            },
            {
              "market": "Richmond",
              "jobs": 5,
              "value": 131776.26
            },
            {
              "market": "Dayton",
              "jobs": 3,
              "value": 75189.35
            },
            {
              "market": "DC Metro",
              "jobs": 7,
              "value": 39774
            },
            {
              "market": "Knoxville",
              "jobs": 1,
              "value": 16843.47
            }
          ],
          "avgDays": 3.9,
          "medianDays": 3
        },
        {
          "label": "Backlog",
          "subtitle": "469 jobs · 27d avg",
          "value": 10192470.88,
          "jobs": 469,
          "color": "#f97316",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 170,
              "value": 3891113.91
            },
            {
              "market": "Cleveland",
              "jobs": 90,
              "value": 2023787.74
            },
            {
              "market": "Detroit Metro",
              "jobs": 83,
              "value": 1883345.44
            },
            {
              "market": "Cincinnati",
              "jobs": 30,
              "value": 610160.91
            },
            {
              "market": "DC Metro",
              "jobs": 26,
              "value": 441129.35
            },
            {
              "market": "Richmond",
              "jobs": 17,
              "value": 432204.26
            },
            {
              "market": "Nashville",
              "jobs": 16,
              "value": 306449.29
            },
            {
              "market": "Raleigh",
              "jobs": 16,
              "value": 300715.28
            },
            {
              "market": "Dayton",
              "jobs": 9,
              "value": 132712
            },
            {
              "market": "Knoxville",
              "jobs": 5,
              "value": 88124.69
            },
            {
              "market": "Greenville",
              "jobs": 5,
              "value": 45728.01
            },
            {
              "market": "Grand Rapids",
              "jobs": 2,
              "value": 37000
            }
          ],
          "avgDays": 27.4,
          "medianDays": 18
        },
        {
          "label": "In Progress",
          "subtitle": "260 jobs",
          "value": 8004459.41,
          "jobs": 260,
          "color": "#22c55e",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 115,
              "value": 3482781.76
            },
            {
              "market": "Cleveland",
              "jobs": 61,
              "value": 1495852.11
            },
            {
              "market": "Nashville",
              "jobs": 8,
              "value": 740452.27
            },
            {
              "market": "Detroit Metro",
              "jobs": 26,
              "value": 630169.05
            },
            {
              "market": "Richmond",
              "jobs": 8,
              "value": 490617.36
            },
            {
              "market": "DC Metro",
              "jobs": 8,
              "value": 347852.02
            },
            {
              "market": "Dayton",
              "jobs": 10,
              "value": 270547
            },
            {
              "market": "Cincinnati",
              "jobs": 10,
              "value": 253375.78
            },
            {
              "market": "Raleigh",
              "jobs": 7,
              "value": 121575.92
            },
            {
              "market": "Grand Rapids",
              "jobs": 3,
              "value": 86774.03
            },
            {
              "market": "Knoxville",
              "jobs": 2,
              "value": 49492.93
            },
            {
              "market": "Greenville",
              "jobs": 2,
              "value": 34969.18
            }
          ],
          "avgDays": null,
          "medianDays": null
        },
        {
          "label": "Completed",
          "subtitle": "80 jobs",
          "value": 1826808.35,
          "jobs": 80,
          "color": "#a855f7",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 35,
              "value": 882076.98
            },
            {
              "market": "Richmond",
              "jobs": 11,
              "value": 331971.98
            },
            {
              "market": "Cleveland",
              "jobs": 13,
              "value": 256514.99
            },
            {
              "market": "Cincinnati",
              "jobs": 5,
              "value": 117307.9
            },
            {
              "market": "DC Metro",
              "jobs": 6,
              "value": 105654.74
            },
            {
              "market": "Knoxville",
              "jobs": 4,
              "value": 57789.43
            },
            {
              "market": "Detroit Metro",
              "jobs": 3,
              "value": 43672
            },
            {
              "market": "Raleigh",
              "jobs": 1,
              "value": 21848.4
            },
            {
              "market": "Dayton",
              "jobs": 1,
              "value": 9368.87
            },
            {
              "market": "Greenville",
              "jobs": 1,
              "value": 603.06
            }
          ],
          "avgDays": null,
          "medianDays": null
        }
      ],
      "totalJobs": 881,
      "totalValue": 21427185.16
    },
    "commentary": {
      "actionableRecommendations": [
        "Hold weekly sales pace at or above $2.3M to defend the May invoicing target.",
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
            21427185.16,
            10113960.9,
            7295320.7908,
            -906404.2692
          ],
          [
            "May 2026",
            14117621.6688,
            21427185.16,
            11714245.78,
            9777394.8052,
            -4340226.8636
          ],
          [
            "Jun 2026",
            14800571.2162,
            21427185.16,
            11842012.17,
            11612262.062,
            -3188309.1541
          ],
          [
            "Jul 2026",
            11641331.0926,
            21427185.16,
            11754306.81,
            9192911.7041,
            -2448419.3885
          ],
          [
            "Aug 2026",
            12738223.8858,
            21427185.16,
            10164317.12,
            12678412.0404,
            -59811.8454
          ],
          [
            "Sep 2026",
            13673037.2551,
            21427185.16,
            12345448.67,
            10941306.3403,
            -2731730.9148
          ],
          [
            "Oct 2026",
            13483638.9808,
            21427185.16,
            12768439.24,
            3108038.23,
            -10375600.7508
          ],
          [
            "Nov 2026",
            12392297.9669,
            21427185.16,
            12303060.2448,
            12285200.4191,
            -107097.5478
          ],
          [
            "Dec 2026",
            7988852.274,
            9016140.0316,
            8739974.2572,
            8329162.2951,
            340310.0211
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
            21427185.16,
            7499555.5408,
            906404.2692,
            10113960.9
          ],
          [
            "May 2026",
            21427185.16,
            9878381.4218,
            0,
            11714245.78
          ],
          [
            "Jun 2026",
            21427185.16,
            11004103.8197,
            84319.4903,
            11842012.17
          ],
          [
            "Jul 2026",
            21427185.16,
            11402389.3164,
            0,
            11754306.81
          ],
          [
            "Aug 2026",
            21427185.16,
            10735738.7372,
            0,
            10164317.12
          ],
          [
            "Sep 2026",
            21427185.16,
            11510371.9087,
            0,
            12345448.67
          ],
          [
            "Oct 2026",
            21427185.16,
            12212352.32,
            60914.35,
            12768439.24
          ],
          [
            "Nov 2026",
            21427185.16,
            5844470.0559,
            6942818.5718,
            12303060.2448
          ],
          [
            "Dec 2026",
            9016140.0316,
            2350737.7955,
            7717575.0437,
            8739974.2572
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
            0.2149,
            3257140.76,
            3257140.76,
            3257140.76
          ],
          [
            "Feb 2026 [Actual]",
            1.3135,
            3101368.34,
            3101368.34,
            3101368.34
          ],
          [
            "Mar 2026 [Actual]",
            2.6093,
            5679200.03,
            5679200.03,
            5679200.03
          ],
          [
            "Apr 2026 [Actual]",
            9.2507,
            10113960.9,
            10113960.9,
            10113960.9
          ],
          [
            "May 2026 [Actual]",
            13.5504,
            11714245.78,
            11714245.78,
            11714245.78
          ],
          [
            "Jun 2026 [Actual]",
            12.3213,
            11842012.17,
            11842012.17,
            11842012.17
          ],
          [
            "Jul 2026 [Actual]",
            13.3002,
            11754306.81,
            11754306.81,
            11754306.81
          ],
          [
            "Aug 2026 [Actual]",
            13.4542,
            10164317.12,
            10164317.12,
            10164317.12
          ],
          [
            "Sep 2026 [Actual]",
            12.0952,
            12345448.67,
            12345448.67,
            12345448.67
          ],
          [
            "Oct 2026 [Actual]",
            11.3828,
            12768439.24,
            12768439.24,
            12768439.24
          ],
          [
            "Nov 2026",
            7.7142,
            0,
            13728354.7835,
            15449184.7326
          ],
          [
            "Dec 2026",
            2.7932,
            0,
            4970770.6633,
            5593849.7694
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
            "Wk 11/08",
            8582489.0726,
            2870714.0571,
            5711775.0155
          ],
          [
            "Wk 11/15",
            8582489.0726,
            2870714.0571,
            5711775.0155
          ],
          [
            "Wk 11/22",
            8582489.0726,
            2870714.0571,
            5711775.0155
          ],
          [
            "Wk 11/29",
            6666598.2884,
            2229877.2836,
            4436721.0048
          ],
          [
            "Wk 12/06",
            5900241.9748,
            1973542.5742,
            3926699.4006
          ],
          [
            "Wk 12/13",
            5900241.9748,
            1973542.5742,
            3926699.4006
          ],
          [
            "Wk 12/20",
            5900241.9748,
            1973542.5742,
            3926699.4006
          ],
          [
            "Wk 12/27",
            4214458.5534,
            1409673.2673,
            2804785.2861
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
            23752.8907,
            18,
            1319.605,
            40.3055,
            40498678.58
          ],
          [
            "Retail-Financing",
            22007.737,
            19,
            1158.3019,
            60.6786,
            11025876.25
          ],
          [
            "Retail-No Financing",
            19265.3043,
            19,
            1013.9634,
            61.0314,
            36276567.93
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
            1705,
            23752.8907
          ],
          [
            "Retail-Financing",
            13,
            6,
            19,
            501,
            22007.737
          ],
          [
            "Retail-No Financing",
            13,
            6,
            19,
            1883,
            19265.3043
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
            170,
            3891113.91
          ],
          [
            "Cleveland",
            90,
            2023787.74
          ],
          [
            "Detroit Metro",
            83,
            1883345.44
          ],
          [
            "Cincinnati",
            30,
            610160.91
          ],
          [
            "DC Metro",
            26,
            441129.35
          ],
          [
            "Richmond",
            17,
            432204.26
          ],
          [
            "Nashville",
            16,
            306449.29
          ],
          [
            "Raleigh",
            16,
            300715.28
          ],
          [
            "Dayton",
            9,
            132712
          ],
          [
            "Knoxville",
            5,
            88124.69
          ],
          [
            "Greenville",
            5,
            45728.01
          ],
          [
            "Grand Rapids",
            2,
            37000
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
            115,
            3482781.76
          ],
          [
            "Cleveland",
            61,
            1495852.11
          ],
          [
            "Nashville",
            8,
            740452.27
          ],
          [
            "Detroit Metro",
            26,
            630169.05
          ],
          [
            "Richmond",
            8,
            490617.36
          ],
          [
            "DC Metro",
            8,
            347852.02
          ],
          [
            "Dayton",
            10,
            270547
          ],
          [
            "Cincinnati",
            10,
            253375.78
          ],
          [
            "Raleigh",
            7,
            121575.92
          ],
          [
            "Grand Rapids",
            3,
            86774.03
          ],
          [
            "Knoxville",
            2,
            49492.93
          ],
          [
            "Greenville",
            2,
            34969.18
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
            "Cleveland",
            14,
            318738.95
          ],
          [
            "Columbus",
            17,
            308371.36
          ],
          [
            "Detroit Metro",
            11,
            194164
          ],
          [
            "Cincinnati",
            8,
            164431.13
          ],
          [
            "Nashville",
            6,
            154158
          ],
          [
            "Richmond",
            5,
            131776.26
          ],
          [
            "Dayton",
            3,
            75189.35
          ],
          [
            "DC Metro",
            7,
            39774
          ],
          [
            "Knoxville",
            1,
            16843.47
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
            35,
            882076.98
          ],
          [
            "Richmond",
            11,
            331971.98
          ],
          [
            "Cleveland",
            13,
            256514.99
          ],
          [
            "Cincinnati",
            5,
            117307.9
          ],
          [
            "DC Metro",
            6,
            105654.74
          ],
          [
            "Knoxville",
            4,
            57789.43
          ],
          [
            "Detroit Metro",
            3,
            43672
          ],
          [
            "Raleigh",
            1,
            21848.4
          ],
          [
            "Dayton",
            1,
            9368.87
          ],
          [
            "Greenville",
            1,
            603.06
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
            1070343.3871,
            47.1197
          ],
          [
            "Retail-No Financing",
            898478.845,
            39.5537
          ],
          [
            "Retail-Financing",
            302717.8235,
            13.3265
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
            1221225.3016,
            53.762
          ],
          [
            "Gutters",
            871844.4243,
            38.3812
          ],
          [
            "Siding",
            54436.5912,
            2.3965
          ],
          [
            "Rack Mounted Solar",
            22407.8631,
            0.9865
          ],
          [
            "Metal",
            21414.234,
            0.9427
          ],
          [
            "Flat Roof",
            18334.8929,
            0.8072
          ],
          [
            "GAF Solar",
            16040.7592,
            0.7062
          ],
          [
            "Masonry",
            15645.4297,
            0.6888
          ],
          [
            "Painting",
            8979.8105,
            0.3953
          ],
          [
            "Carpentry",
            8837.6901,
            0.3891
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
            "Wk 11/08",
            "Nov",
            2870714.0571
          ],
          [
            "Wk 11/15",
            "Nov",
            2870714.0571
          ],
          [
            "Wk 11/22",
            "Nov",
            2870714.0571
          ],
          [
            "Wk 11/29",
            "Nov",
            2229877.2836
          ],
          [
            "Wk 12/06",
            "Dec",
            1973542.5742
          ],
          [
            "Wk 12/13",
            "Dec",
            1973542.5742
          ],
          [
            "Wk 12/20",
            "Dec",
            1973542.5742
          ],
          [
            "Wk 12/27",
            "Dec",
            1409673.2673
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
              2815690.46,
              3246224.14,
              2633254.36,
              1840276.51,
              2591050.5,
              2026821.08,
              2241746.93,
              2383296.45,
              2748894.66,
              2868831.8,
              2023323.96,
              2784658.62,
              2732600.57,
              2574467.35,
              2709480.75,
              2620252.04,
              2602074.12,
              2596035.29,
              3388320.59,
              2488113.84,
              2478676.69,
              2546772.33,
              2101831.04,
              1975363.68,
              1502851.1525,
              1907191.0733,
              1795380.6417,
              1683570.21,
              1571759.7783,
              1459949.3467,
              1348138.915,
              1236328.4833
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
              7295320.7908,
              9777394.8052,
              11612262.062,
              9192911.7041,
              12678412.0404,
              10941306.3403,
              3108038.23,
              12285200.4191,
              8329162.2951
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
              11842012.17,
              11754306.81,
              10164317.12,
              12345448.67,
              12768439.24,
              12303060.2448,
              8739974.2572
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
              3072418.9075,
              3092788.9792,
              4455789.5845,
              7499555.5408,
              9878381.4218,
              11004103.8197,
              11402389.3164,
              10735738.7372,
              11510371.9087,
              12212352.32,
              12285200.4191,
              10408622.8604
            ]
          },
          {
            "label": "From Known Sales",
            "data": [
              3072418.9075,
              3092788.9792,
              4455789.5845,
              7499555.5408,
              9878381.4218,
              11004103.8197,
              11402389.3164,
              10735738.7372,
              11510371.9087,
              12212352.32,
              5844470.0559,
              2350737.7955
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
          "Raleigh",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "Mix %",
            "data": [
              39.6642,
              13.6794,
              10.9217,
              6.7578,
              6.409,
              5.1074,
              4.8836,
              4.3477,
              2.772,
              2.7219
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
              40.3055,
              31.1986,
              16.51,
              6.5217,
              2.7027,
              1.3514
            ]
          },
          {
            "label": "Retail-Financing",
            "data": [
              60.6786,
              28.1437,
              7.3852,
              1.1976,
              0.998,
              0.3992
            ]
          },
          {
            "label": "Retail-No Financing",
            "data": [
              61.0314,
              25.731,
              7.2302,
              3.0303,
              1.3822,
              0.8506
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
              6,
              6
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
      12285200.4191,
      10408622.8604
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
      5844470.0559,
      2350737.7955
    ],
    "requiredSales": [
      3257140.76,
      3101368.34,
      5679200.03,
      10113960.9,
      11714245.78,
      11842012.17,
      11754306.81,
      10164317.12,
      12345448.67,
      12768439.24,
      12303060.2448,
      8739974.2572
    ],
    "backlogData": [
      {
        "month": "Jan 2026",
        "total_backlog": 21427185.16,
        "wip_est": 9831267.76,
        "not_started": 11595917.4,
        "budget_rev": 3312733.06,
        "pipeline_backlog": 21427185.16,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 3072418.9075,
        "revenue_gap": 240314.1525,
        "adjusted_required_sales": 3257140.76,
        "backlog_surplus": 18170044.4
      },
      {
        "month": "Feb 2026",
        "total_backlog": 21427185.16,
        "wip_est": 9831267.76,
        "not_started": 11595917.4,
        "budget_rev": 2855781.11,
        "pipeline_backlog": 21427185.16,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 3092788.9792,
        "revenue_gap": 0,
        "adjusted_required_sales": 3101368.34,
        "backlog_surplus": 18325816.82
      },
      {
        "month": "Mar 2026",
        "total_backlog": 21427185.16,
        "wip_est": 9831267.76,
        "not_started": 11595917.4,
        "budget_rev": 6228299.34,
        "pipeline_backlog": 21427185.16,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 4455789.5845,
        "revenue_gap": 1772509.7555,
        "adjusted_required_sales": 5679200.03,
        "backlog_surplus": 15747985.13
      },
      {
        "month": "Apr 2026",
        "total_backlog": 21427185.16,
        "wip_est": 9831267.76,
        "not_started": 11595917.4,
        "budget_rev": 8405959.81,
        "pipeline_backlog": 21427185.16,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 7499555.5408,
        "revenue_gap": 906404.2692,
        "adjusted_required_sales": 10113960.9,
        "backlog_surplus": 11313224.26
      },
      {
        "month": "May 2026",
        "total_backlog": 21427185.16,
        "wip_est": 12856311.096,
        "not_started": 8570874.064,
        "budget_rev": 8564976.12,
        "pipeline_backlog": 21427185.16,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 9878381.4218,
        "revenue_gap": 0,
        "adjusted_required_sales": 11714245.78,
        "backlog_surplus": 9712939.38
      },
      {
        "month": "Jun 2026",
        "total_backlog": 21427185.16,
        "wip_est": 12856311.096,
        "not_started": 8570874.064,
        "budget_rev": 11088423.31,
        "pipeline_backlog": 21427185.16,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 11004103.8197,
        "revenue_gap": 84319.4903,
        "adjusted_required_sales": 11842012.17,
        "backlog_surplus": 9585172.99
      },
      {
        "month": "Jul 2026",
        "total_backlog": 21427185.16,
        "wip_est": 12856311.096,
        "not_started": 8570874.064,
        "budget_rev": 10676120.9,
        "pipeline_backlog": 21427185.16,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 11402389.3164,
        "revenue_gap": 0,
        "adjusted_required_sales": 11754306.81,
        "backlog_surplus": 9672878.35
      },
      {
        "month": "Aug 2026",
        "total_backlog": 21427185.16,
        "wip_est": 12856311.096,
        "not_started": 8570874.064,
        "budget_rev": 9151616.35,
        "pipeline_backlog": 21427185.16,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 10735738.7372,
        "revenue_gap": 0,
        "adjusted_required_sales": 10164317.12,
        "backlog_surplus": 11262868.04
      },
      {
        "month": "Sep 2026",
        "total_backlog": 21427185.16,
        "wip_est": 12856311.096,
        "not_started": 8570874.064,
        "budget_rev": 9929275.62,
        "pipeline_backlog": 21427185.16,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 11510371.9087,
        "revenue_gap": 0,
        "adjusted_required_sales": 12345448.67,
        "backlog_surplus": 9081736.49
      },
      {
        "month": "Oct 2026",
        "total_backlog": 21427185.16,
        "wip_est": 12856311.096,
        "not_started": 8570874.064,
        "budget_rev": 12273266.67,
        "pipeline_backlog": 21427185.16,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 12212352.32,
        "revenue_gap": 60914.35,
        "adjusted_required_sales": 12768439.24,
        "backlog_surplus": 8658745.92
      },
      {
        "month": "Nov 2026",
        "total_backlog": 21427185.16,
        "wip_est": 12856311.096,
        "not_started": 8570874.064,
        "budget_rev": 12787288.6277,
        "pipeline_backlog": 21427185.16,
        "new_sales_backlog": 0,
        "pipe_invoicing": 18273375.01,
        "future_invoicing": 0,
        "rev_from_backlog": 5844470.0559,
        "revenue_gap": 6942818.5718,
        "adjusted_required_sales": 12303060.2448,
        "backlog_surplus": 9124124.9152
      },
      {
        "month": "Dec 2026",
        "total_backlog": 9016140.0316,
        "wip_est": 5409684.019,
        "not_started": 3606456.0126,
        "budget_rev": 10068312.8393,
        "pipeline_backlog": 3153810.15,
        "new_sales_backlog": 5862329.8816,
        "pipe_invoicing": 3124400.35,
        "future_invoicing": 7368777.28,
        "rev_from_backlog": 2350737.7955,
        "revenue_gap": 7717575.0437,
        "adjusted_required_sales": 8739974.2572,
        "backlog_surplus": 276165.7744
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
      "source": "ResInvoicedYTDResults-2026-11-10.csv",
      "format": "per-invoice",
      "aggregatedOnly": false,
      "totalInvoiced": 84752710.19000003,
      "invoiceCount": 4755,
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
        2266257.899999999,
        0
      ],
      "byBranch": {
        "Greenville": {
          "invoiced": 2003155.6400000001,
          "count": 156
        },
        "Richmond": {
          "invoiced": 4294973.6400000015,
          "count": 248
        },
        "DC Metro": {
          "invoiced": 6207469.589999999,
          "count": 349
        },
        "Cleveland": {
          "invoiced": 7076900.180000001,
          "count": 444
        },
        "Nashville": {
          "invoiced": 6514293.430000002,
          "count": 305
        },
        "Columbus": {
          "invoiced": 32617951.100000005,
          "count": 1734
        },
        "Dayton": {
          "invoiced": 4143692.1699999995,
          "count": 248
        },
        "Cincinnati": {
          "invoiced": 4228117.980000001,
          "count": 248
        },
        "Detroit": {
          "invoiced": 11406840.639999999,
          "count": 607
        },
        "Raleigh": {
          "invoiced": 2865901.6099999994,
          "count": 205
        },
        "Knoxville": {
          "invoiced": 2755802.499999999,
          "count": 173
        },
        "Charlotte": {
          "invoiced": 33694.41,
          "count": 1
        },
        "Grand Rapids": {
          "invoiced": 603917.3,
          "count": 37
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
      "latestInvoiceDate": "2026-11-09",
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
      "totalJobs": 721,
      "totalWOs": 1064,
      "portfolioValue": 18121123.58,
      "avgDaysInStatus": 20,
      "lastBuild": "2026-11-10T14:17:21.299Z"
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
        "value": "721",
        "sub": "1,064 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "256",
        "sub": "35.5% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "465",
        "sub": "64.5% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "67",
        "sub": "26.2% of In Progress",
        "tone": "crit"
      },
      {
        "label": "Avg Days in Status",
        "value": "20",
        "sub": "Job-level average",
        "tone": "warn"
      },
      {
        "label": "Total Portfolio Value",
        "value": "$18.12M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$4.68M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$2.24M",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "67",
        "sub": "26.2% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$2.24M",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "82",
        "sub": "Across 67 jobs",
        "tone": "info"
      },
      {
        "label": "RTS Ready Today",
        "value": "26",
        "sub": "No blocker, dispatch now",
        "tone": "good"
      },
      {
        "label": "Top Trailing Trade",
        "value": "Gutters",
        "sub": "43 open WOs / 43 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "367",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "179",
        "sub": "48.8% of all holds",
        "tone": "warn"
      },
      {
        "label": "Pending Sales",
        "value": "26",
        "sub": "Awaiting sales disposition",
        "tone": "warn"
      },
      {
        "label": "Avg Hold Age",
        "value": "27d",
        "sub": "Mean days in hold across all sub-statuses",
        "tone": "info"
      }
    ],
    "kpisSales": [
      {
        "label": "Active Reps",
        "value": "107",
        "sub": "Reps with at least one open WO",
        "tone": "info"
      },
      {
        "label": "Stuck Value >30d",
        "value": "$4.68M",
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
        "value": "$381K",
        "sub": "Highest single-rep stuck value",
        "tone": "warn"
      }
    ],
    "kpisBacklog": [
      {
        "label": "Not Started Jobs",
        "value": "465",
        "sub": "64.5% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$10.20M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "196d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Columbus",
        "sub": "165 jobs (35.5% of backlog)",
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
          "Completed",
          "In Progress",
          "Requires Additional Service",
          "New",
          "Pending Estimate Approval"
        ],
        "datasets": [
          {
            "label": "Work Orders",
            "data": [
              367,
              293,
              243,
              81,
              46,
              31,
              2,
              1
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
          "Dayton",
          "Nashville",
          "Raleigh",
          "Greenville",
          "Grand Rapids",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              29,
              33,
              6,
              2,
              2,
              2,
              4,
              2,
              1,
              0,
              0,
              0
            ]
          },
          {
            "label": "Open",
            "data": [
              30,
              11,
              10,
              5,
              4,
              4,
              3,
              7,
              2,
              0,
              3,
              1
            ]
          },
          {
            "label": "On Hold",
            "data": [
              148,
              120,
              35,
              16,
              20,
              4,
              6,
              5,
              9,
              4,
              0,
              0
            ]
          },
          {
            "label": "RTS",
            "data": [
              87,
              67,
              58,
              14,
              11,
              19,
              15,
              8,
              7,
              1,
              3,
              3
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              117,
              23,
              25,
              23,
              10,
              17,
              4,
              9,
              6,
              4,
              2,
              3
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
          "In Progress",
          "Pending Estimate Approval",
          "New"
        ],
        "datasets": [
          {
            "label": "Avg Days",
            "data": [
              59,
              27,
              25,
              19,
              11,
              2,
              1,
              0
            ]
          },
          {
            "label": "Max Days",
            "data": [
              246,
              385,
              83,
              196,
              84,
              15,
              1,
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
          "Rack Mounted Solar",
          "Windows",
          "Skylights",
          "Metal",
          "Flat Roof",
          "Masonry",
          "GAF Solar",
          "Carpentry",
          "Electrical",
          "Stucco",
          "Other",
          "Painting"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              69,
              4,
              6,
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
              0,
              0
            ]
          },
          {
            "label": "Open",
            "data": [
              395,
              336,
              147,
              31,
              18,
              18,
              15,
              6,
              5,
              4,
              3,
              1,
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
              28,
              26,
              21,
              6,
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
              23,
              3,
              8,
              21,
              10,
              17
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
          "Richmond",
          "Nashville",
          "Raleigh",
          "Dayton",
          "Greenville",
          "Knoxville",
          "Grand Rapids"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              165,
              89,
              82,
              31,
              26,
              17,
              16,
              15,
              12,
              5,
              5,
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
            411,
            29,
            148,
            87,
            117,
            18,
            12,
            70,
            279,
            7248540.37
          ],
          [
            "Cleveland",
            254,
            33,
            120,
            67,
            23,
            6,
            5,
            43,
            150,
            3519513.93
          ],
          [
            "Detroit Metro",
            134,
            6,
            35,
            58,
            25,
            6,
            2,
            28,
            103,
            2501973.49
          ],
          [
            "Cincinnati",
            60,
            2,
            16,
            14,
            23,
            2,
            3,
            9,
            41,
            889500.69
          ],
          [
            "DC Metro",
            47,
            2,
            20,
            11,
            10,
            3,
            1,
            10,
            34,
            759793.46
          ],
          [
            "Richmond",
            46,
            2,
            4,
            19,
            17,
            2,
            2,
            3,
            25,
            1002892.62
          ],
          [
            "Dayton",
            32,
            4,
            6,
            15,
            4,
            0,
            2,
            3,
            24,
            403649.28
          ],
          [
            "Nashville",
            31,
            2,
            5,
            8,
            9,
            4,
            3,
            3,
            24,
            1046901.56
          ],
          [
            "Raleigh",
            25,
            1,
            9,
            7,
            6,
            2,
            0,
            5,
            22,
            406269.34
          ],
          [
            "Greenville",
            9,
            0,
            4,
            1,
            4,
            0,
            0,
            4,
            7,
            80697.19
          ],
          [
            "Grand Rapids",
            8,
            0,
            0,
            3,
            2,
            2,
            1,
            0,
            5,
            123774.03
          ],
          [
            "Knoxville",
            7,
            0,
            0,
            3,
            3,
            1,
            0,
            1,
            7,
            137617.62
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
            175,
            16,
            385
          ],
          [
            "Pending Material",
            139,
            38,
            228
          ],
          [
            "Pending Sales",
            26,
            32,
            118
          ],
          [
            "Homeowner Request",
            16,
            61,
            168
          ],
          [
            "Pending HOA",
            7,
            14,
            47
          ],
          [
            "Spring Hold",
            3,
            5,
            6
          ],
          [
            "(no sub-status)",
            1,
            18,
            18
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
            43,
            43,
            1185109.93
          ],
          [
            "Siding",
            21,
            21,
            691535.35
          ],
          [
            "Metal",
            5,
            5,
            252852.47
          ],
          [
            "Roofing",
            4,
            4,
            112866.06
          ],
          [
            "Windows",
            3,
            3,
            39306.06
          ],
          [
            "Rack Mounted Solar",
            2,
            2,
            93105.25
          ],
          [
            "Masonry",
            1,
            1,
            27500
          ],
          [
            "Other",
            1,
            1,
            85489
          ],
          [
            "Electrical",
            1,
            1,
            28145
          ],
          [
            "Carpentry",
            1,
            1,
            239596.83
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
            129
          ],
          [
            "Scheduled",
            105
          ],
          [
            "On Hold",
            101
          ],
          [
            "Completed",
            4
          ],
          [
            "In Progress",
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
            464,
            69,
            395,
            461,
            12869341.42
          ],
          [
            "Gutters",
            340,
            4,
            336,
            340,
            8317818.31
          ],
          [
            "Siding",
            153,
            6,
            147,
            153,
            3311519.9
          ],
          [
            "Rack Mounted Solar",
            31,
            0,
            31,
            26,
            951964.63
          ],
          [
            "Windows",
            18,
            0,
            18,
            18,
            195748.18
          ],
          [
            "Skylights",
            18,
            0,
            18,
            18,
            356281.98
          ],
          [
            "Metal",
            16,
            1,
            15,
            16,
            883090.02
          ],
          [
            "Flat Roof",
            6,
            0,
            6,
            6,
            153350.55
          ],
          [
            "Masonry",
            5,
            0,
            5,
            5,
            134309.36
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
            272276.83
          ],
          [
            "Electrical",
            2,
            1,
            1,
            1,
            28145
          ],
          [
            "Stucco",
            2,
            0,
            2,
            2,
            53234.26
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
            16
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
            40,
            16,
            381358.78,
            32,
            2
          ],
          [
            "Frank Drummond",
            22,
            19,
            242338.39,
            13,
            1
          ],
          [
            "Hunter Carrington Scott",
            2,
            1,
            239596.83,
            2,
            1
          ],
          [
            "Caleb Severance",
            25,
            14,
            234971.83,
            9,
            1
          ],
          [
            "Frank Butts",
            34,
            20,
            214766.64,
            17,
            1
          ],
          [
            "Mark Younce",
            14,
            10,
            191999.24,
            6,
            2
          ],
          [
            "Jake Ross",
            25,
            15,
            179916.05,
            12,
            1
          ],
          [
            "Gary Benedict Jr",
            10,
            9,
            175901.17,
            3,
            1
          ],
          [
            "Justin Koenig",
            15,
            8,
            171969.52,
            7,
            1
          ],
          [
            "Tyler Sponseller",
            33,
            23,
            168546.43,
            10,
            1
          ],
          [
            "Derrick Sieber",
            8,
            7,
            158822,
            3,
            1
          ],
          [
            "Michael Cox",
            9,
            6,
            121307.89,
            3,
            1
          ],
          [
            "Matt Henry",
            20,
            14,
            118244.22,
            5,
            7
          ],
          [
            "Brian Ogrin",
            16,
            12,
            116577.27,
            4,
            1
          ],
          [
            "Morgan King",
            24,
            12,
            101869.11,
            5,
            2
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
            165,
            3770958.61,
            196
          ],
          [
            "Cleveland",
            89,
            2022392.74,
            110
          ],
          [
            "Detroit Metro",
            82,
            1927190.44,
            168
          ],
          [
            "Cincinnati",
            31,
            636124.91,
            41
          ],
          [
            "DC Metro",
            26,
            441129.35,
            147
          ],
          [
            "Richmond",
            17,
            512275.26,
            47
          ],
          [
            "Nashville",
            16,
            306449.29,
            60
          ],
          [
            "Raleigh",
            15,
            284693.42,
            61
          ],
          [
            "Dayton",
            12,
            129191.86,
            42
          ],
          [
            "Greenville",
            5,
            45728.01,
            8
          ],
          [
            "Knoxville",
            5,
            88124.69,
            12
          ],
          [
            "Grand Rapids",
            2,
            37000,
            4
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
            "Job-111685",
            "Karl Osborn",
            "Columbus",
            "Rack Mounted Solar",
            "",
            "Frank Drummond",
            196,
            5800
          ],
          [
            "Job-107178",
            "Damien Pakula",
            "Detroit Metro",
            "Roofing",
            "Homeowner Request",
            "Gary Benedict Jr",
            168,
            13597
          ],
          [
            "Job-115035",
            "Erik Steensen",
            "DC Metro",
            "GAF Solar",
            "Pending Material",
            "Derrick Sieber",
            147,
            59822
          ],
          [
            "Job-112457",
            "Michelle  Pullens",
            "Columbus",
            "Siding",
            "Homeowner Request",
            "Mark Daggett",
            137,
            27000
          ],
          [
            "Job-117302",
            "Marcia Williams",
            "Cleveland",
            "Gutters",
            "Pending Material",
            "Jake Ross",
            110,
            19654.5
          ],
          [
            "Job-117309",
            "Eddie Black",
            "Cleveland",
            "Siding",
            "Pending Material",
            "Frank Butts",
            109,
            16713.23
          ],
          [
            "Job-118348",
            "Angie & MIke Fleshman",
            "Columbus",
            "Siding",
            "Pending Sales",
            "Frank Drummond",
            92,
            2608
          ],
          [
            "Job-118734",
            "Mindi Burkette",
            "DC Metro",
            "Roofing",
            "",
            "David Poole",
            84,
            15829
          ],
          [
            "Job-118731",
            "Kaitlyn Valis",
            "DC Metro",
            "Roofing",
            "Homeowner Request",
            "David Poole",
            83,
            9833
          ],
          [
            "Job-119479",
            "Louis Mallis",
            "Cleveland",
            "Siding",
            "Pending Material",
            "Tyler Sponseller",
            78,
            13944.87
          ],
          [
            "Job-119486",
            "Lisa Smith",
            "Cleveland",
            "Gutters",
            "Pending Material",
            "Jake Ross",
            78,
            16235.07
          ],
          [
            "Job-119532",
            "Bhupati Pradhan",
            "Cleveland",
            "Gutters",
            "Pending Material",
            "Bryce Fink",
            77,
            24066.79
          ],
          [
            "Job-119538",
            "Joseph Kundrat",
            "Cleveland",
            "Siding",
            "Pending Material",
            "Bryce Fink",
            77,
            28203.82
          ],
          [
            "Job-119484",
            "Mark Townson",
            "Cleveland",
            "Siding",
            "",
            "Scott Scaperato-INACTIVE",
            76,
            4500
          ],
          [
            "Job-119679",
            "Ryan Ely Property #2",
            "Cleveland",
            "Gutters",
            "",
            "Tyler Sponseller",
            75,
            2272
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Columbus",
          "permits": 70
        },
        {
          "branch": "Cleveland",
          "permits": 43
        },
        {
          "branch": "Detroit Metro",
          "permits": 28
        },
        {
          "branch": "DC Metro",
          "permits": 10
        },
        {
          "branch": "Cincinnati",
          "permits": 9
        },
        {
          "branch": "Raleigh",
          "permits": 5
        },
        {
          "branch": "Greenville",
          "permits": 4
        },
        {
          "branch": "Richmond",
          "permits": 3
        },
        {
          "branch": "Dayton",
          "permits": 3
        },
        {
          "branch": "Nashville",
          "permits": 3
        },
        {
          "branch": "Knoxville",
          "permits": 1
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $2.24M of trapped partial-job revenue into billable revenue, reduce $4.68M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Dispatch the 26 RTS WOs sitting on partial jobs. No blocker, no hold, just dispatch.",
        "Re-dispatch the 31 RAS WOs (oldest at 83 days). These are pure re-work fastballs.",
        "Gutters sweep: 43 open WOs across 43 partial jobs blocking $1.19M. Highest single-trade leverage in the book.",
        "Columbus permit sweep: 70 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one.",
        "Close out the 9 zombie jobs (all WOs Completed, parent still In Progress). Pure paperwork."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Gutters): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 465 jobs ($10.20M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $2.24M, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  }
};
