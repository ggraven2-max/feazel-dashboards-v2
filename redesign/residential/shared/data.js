/* AUTO-GENERATED — do not edit. Generated 2026-11-03T14:04:20.568Z (residential) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-11-03T14:04:20.568Z",
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
        "elapsedMs": 153,
        "builtAt": "2026-11-03T14:04:20.568Z"
      },
      {
        "id": "sales-overview",
        "version": "1.0-rules-encoded",
        "elapsedMs": 705,
        "builtAt": "2026-11-03T14:04:20.568Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 2336,
        "builtAt": "2026-11-03T14:04:20.568Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 27,
        "builtAt": "2026-11-03T14:04:20.568Z"
      }
    ]
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 06, 2026 - Nov 02, 2026 - De-Duplicated at Job Level - 4,201 Jobs - 14 Markets - 33 PMs",
    "generated": "2026-11-03",
    "headerMeta": {
      "trueRevenue": 81229020.22,
      "uniqueJobs": 4201,
      "markets": 14,
      "pms": 33,
      "medianComplete": 27.6,
      "avgStart": 26.3,
      "multiTradeJobs": 1436,
      "singleTradeJobs": 2765,
      "multiTradePct": 34.2,
      "lastBuild": "2026-11-03T14:04:20.568Z"
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
        "value": "$81.23M",
        "sub": "4,201 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$19,336",
        "sub": "Per job (deduped)"
      },
      {
        "label": "Median Days to Complete",
        "value": "27.6d",
        "sub": "Job-level median"
      },
      {
        "label": "Avg Days to Start",
        "value": "26.3d",
        "sub": "Sale to crew on-site"
      },
      {
        "label": "Multi-Trade Jobs",
        "value": "1,436",
        "sub": "34.2% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "2,765",
        "sub": "65.8% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$24,210",
        "sub": "+44.1% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$16,804",
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
        "rev": 12163036.13,
        "jobs": 619,
        "med": 32.5,
        "start": 27.1
      },
      {
        "m": "2026-11",
        "label": "November",
        "key": "2026-11",
        "rev": 759178.35,
        "jobs": 33,
        "med": 32.7,
        "start": 22.5
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
              12163036.13,
              759178.35
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
              33
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
              32.7
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
              22.5
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
              1436
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              2765
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
              927,
              94,
              88,
              83,
              29,
              22,
              21,
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
          "Cincinnati",
          "Richmond",
          "Dayton",
          "Raleigh",
          "Knoxville",
          "Greenville",
          "Grand Rapids",
          "NOVA",
          "Greensboro"
        ],
        "datasets": [
          {
            "label": "MT %",
            "data": [
              34.4,
              30.2,
              45.7,
              31.4,
              39.4,
              27.2,
              36.8,
              27.9,
              23.3,
              34,
              39.2,
              42.9,
              41.4,
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
          "Cincinnati",
          "Richmond",
          "Dayton",
          "Raleigh",
          "Knoxville",
          "Greenville",
          "Grand Rapids",
          "NOVA",
          "Greensboro"
        ],
        "datasets": [
          {
            "label": "MT Median",
            "data": [
              47.7,
              44.6,
              54.5,
              21.7,
              22.6,
              41.5,
              32.5,
              38.2,
              34.6,
              26.7,
              26.6,
              59.5,
              64.6,
              346.7
            ]
          },
          {
            "label": "ST Median",
            "data": [
              21.5,
              24.5,
              30.4,
              18.7,
              14.5,
              23.4,
              13.5,
              22.5,
              19.7,
              17.5,
              16.6,
              35.6,
              20.7,
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
          "Cincinnati",
          "Richmond",
          "Dayton",
          "Raleigh",
          "Knoxville",
          "Greenville",
          "Grand Rapids",
          "NOVA",
          "Greensboro"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              31036966.31,
              11268644.95,
              6635623.91,
              6340558.81,
              5356438.05,
              4045608,
              3986421.65,
              3978316.34,
              2737197.58,
              2620183.81,
              1963754.25,
              616943.8,
              608668.35,
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
          "Cincinnati",
          "Richmond",
          "Dayton",
          "Raleigh",
          "Knoxville",
          "Greenville",
          "Grand Rapids",
          "NOVA",
          "Greensboro"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              29.6,
              29.5,
              39.5,
              20.4,
              18.7,
              27.6,
              19.6,
              25.6,
              21.6,
              21,
              21.5,
              45.6,
              44.5,
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
          "Joseph Yager",
          "Drew Bailey",
          "Alex Dubanoski",
          "Jason Andrews-INACTIVE",
          "Shawn Oehlstrom",
          "Alejandro Alvarado",
          "Kaden Carter",
          "Galo Munive",
          "Brady Weingartner",
          "Brandon Harter"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              6845946.44,
              6648253.1,
              5474574.52,
              5044563.49,
              4357419.33,
              4131671.73,
              4087004.81,
              3676107.51,
              3653618.72,
              3522740.29,
              2870877.77,
              2811343.12,
              2674148.21,
              2650286.97,
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
          "Joseph Yager",
          "Drew Bailey",
          "Alex Dubanoski",
          "Jason Andrews-INACTIVE",
          "Shawn Oehlstrom",
          "Alejandro Alvarado",
          "Kaden Carter",
          "Galo Munive",
          "Brady Weingartner",
          "Brandon Harter",
          "Abraham Santiago",
          "Joseph Jones",
          "Malik Ford",
          "Joshua Collins",
          "Daniel Galli",
          "Adam Marrero-INACTIVE",
          "Michael Blevins",
          "Levi Nieman - INACTIVE",
          "Austin Weingartner-INACTIVE",
          "Chad Williams",
          "(Unassigned)",
          "Cody Mitchell-INACTIVE",
          "Neil Laux",
          "Michael McLaughlin",
          "Mike Scott",
          "Justin Milliron",
          "Chris Atkins",
          "Spencer Boyette"
        ],
        "datasets": [
          {
            "label": "PMs",
            "data": [
              {
                "x": 31.7,
                "y": 6845946.44,
                "wos": 440,
                "name": "Mason Bryant"
              },
              {
                "x": 29.4,
                "y": 6648253.1,
                "wos": 410,
                "name": "Eric Isakov"
              },
              {
                "x": 33.5,
                "y": 5474574.52,
                "wos": 374,
                "name": "Richard Williams"
              },
              {
                "x": 33.4,
                "y": 5044563.49,
                "wos": 309,
                "name": "Landon Little"
              },
              {
                "x": 32.7,
                "y": 4357419.33,
                "wos": 249,
                "name": "Brandon Skrzypek"
              },
              {
                "x": 29.6,
                "y": 4131671.73,
                "wos": 330,
                "name": "Joseph Yager"
              },
              {
                "x": 33.5,
                "y": 4087004.81,
                "wos": 475,
                "name": "Drew Bailey"
              },
              {
                "x": 19.8,
                "y": 3676107.51,
                "wos": 268,
                "name": "Alex Dubanoski"
              },
              {
                "x": 35.4,
                "y": 3653618.72,
                "wos": 356,
                "name": "Jason Andrews-INACTIVE"
              },
              {
                "x": 43.4,
                "y": 3522740.29,
                "wos": 350,
                "name": "Shawn Oehlstrom"
              },
              {
                "x": 19.5,
                "y": 2870877.77,
                "wos": 211,
                "name": "Alejandro Alvarado"
              },
              {
                "x": 22.4,
                "y": 2811343.12,
                "wos": 212,
                "name": "Kaden Carter"
              },
              {
                "x": 20.1,
                "y": 2674148.21,
                "wos": 235,
                "name": "Galo Munive"
              },
              {
                "x": 24.7,
                "y": 2650286.97,
                "wos": 150,
                "name": "Brady Weingartner"
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
                "x": 20.6,
                "y": 2402784.15,
                "wos": 184,
                "name": "Joseph Jones"
              },
              {
                "x": 27.4,
                "y": 2318623.32,
                "wos": 145,
                "name": "Malik Ford"
              },
              {
                "x": 42.5,
                "y": 2233068.58,
                "wos": 161,
                "name": "Joshua Collins"
              },
              {
                "x": 58.6,
                "y": 1740571.55,
                "wos": 155,
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
                "y": 1469499.7,
                "wos": 132,
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
                "y": 975444.28,
                "wos": 68,
                "name": "Austin Weingartner-INACTIVE"
              },
              {
                "x": 58.6,
                "y": 654539.09,
                "wos": 59,
                "name": "Chad Williams"
              },
              {
                "x": 36.1,
                "y": 583162,
                "wos": 67,
                "name": "(Unassigned)"
              },
              {
                "x": 25.4,
                "y": 535023.76,
                "wos": 24,
                "name": "Cody Mitchell-INACTIVE"
              },
              {
                "x": 33.5,
                "y": 425038.81,
                "wos": 25,
                "name": "Neil Laux"
              },
              {
                "x": 100.6,
                "y": 393322.16,
                "wos": 35,
                "name": "Michael McLaughlin"
              },
              {
                "x": 57.5,
                "y": 390272.67,
                "wos": 53,
                "name": "Mike Scott"
              },
              {
                "x": 69.1,
                "y": 330247.7,
                "wos": 36,
                "name": "Justin Milliron"
              },
              {
                "x": 56,
                "y": 217677.15,
                "wos": 34,
                "name": "Chris Atkins"
              },
              {
                "x": 15.7,
                "y": 86316.31,
                "wos": 5,
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
          "Stucco",
          "Skylights",
          "Insulation",
          "Unspecified",
          "Door"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              58648744.39,
              13802858.03,
              4461666.06,
              963954.52,
              898893.9,
              680950.48,
              406662.67,
              378440.79,
              304096.92,
              229606.39,
              209645.05,
              88777.9,
              75751.57,
              37248.17,
              23709.23,
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
          "Stucco",
          "Skylights",
          "Insulation",
          "Unspecified",
          "Door"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              27.5,
              36.4,
              53.4,
              70.5,
              59.6,
              66.6,
              77.1,
              48.9,
              63.5,
              42,
              39.5,
              35.7,
              71.4,
              50,
              50.4,
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
          "Bradley Essex - INACTIVE",
          "Ethan Wolfe",
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
              1320,
              1093,
              512,
              316,
              314,
              286,
              237,
              69,
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
          "Bradley Essex - INACTIVE",
          "Ethan Wolfe",
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
              30.6,
              24.7,
              23.6,
              24.5,
              30.7,
              24.7,
              31.4,
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
          "Bradley Essex - INACTIVE",
          "Ethan Wolfe",
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
              38,
              31.7,
              29.1,
              33.9,
              36.6,
              31.8,
              31.6,
              43.5,
              56.5,
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
          "Bradley Essex - INACTIVE",
          "Ethan Wolfe",
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
                "x": 30.6,
                "y": 19737.75,
                "jobs": 1320,
                "name": "Brandon Vera"
              },
              {
                "x": 24.7,
                "y": 19962.27,
                "jobs": 1093,
                "name": "David Schwan"
              },
              {
                "x": 23.6,
                "y": 17094.36,
                "jobs": 512,
                "name": "Amanda Wade - INACTIVE"
              },
              {
                "x": 24.5,
                "y": 19349.06,
                "jobs": 316,
                "name": "Allison Webb"
              },
              {
                "x": 30.7,
                "y": 18910.51,
                "jobs": 314,
                "name": "Bradley Essex - INACTIVE"
              },
              {
                "x": 24.7,
                "y": 19446.24,
                "jobs": 286,
                "name": "Ethan Wolfe"
              },
              {
                "x": 31.4,
                "y": 17907.95,
                "jobs": 237,
                "name": "Thomas Hayes"
              },
              {
                "x": 37.4,
                "y": 17904.93,
                "jobs": 69,
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
            1570,
            31036966.31,
            19768.77,
            29.6,
            28.7,
            34.4,
            47.7,
            21.5
          ],
          [
            "Detroit Metro",
            592,
            11268644.95,
            19034.87,
            29.5,
            33.1,
            30.2,
            44.6,
            24.5
          ],
          [
            "Cleveland",
            370,
            6635623.91,
            17934.12,
            39.5,
            35.3,
            45.7,
            54.5,
            30.4
          ],
          [
            "Nashville",
            277,
            6340558.81,
            22890.1,
            20.4,
            19.6,
            31.4,
            21.7,
            18.7
          ],
          [
            "DC Metro",
            287,
            5356438.05,
            18663.55,
            18.7,
            19.5,
            39.4,
            22.6,
            14.5
          ],
          [
            "Cincinnati",
            213,
            4045608,
            18993.46,
            27.6,
            23.2,
            27.2,
            41.5,
            23.4
          ],
          [
            "Richmond",
            201,
            3986421.65,
            19832.94,
            19.6,
            15.7,
            36.8,
            32.5,
            13.5
          ],
          [
            "Dayton",
            215,
            3978316.34,
            18503.8,
            25.6,
            21.2,
            27.9,
            38.2,
            22.5
          ],
          [
            "Raleigh",
            159,
            2737197.58,
            17215.08,
            21.6,
            21.3,
            23.3,
            34.6,
            19.7
          ],
          [
            "Knoxville",
            150,
            2620183.81,
            17467.89,
            21,
            15.4,
            34,
            26.7,
            17.5
          ],
          [
            "Greenville",
            102,
            1963754.25,
            19252.49,
            21.5,
            17.5,
            39.2,
            26.6,
            16.6
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
            "NOVA",
            29,
            608668.35,
            20988.56,
            44.5,
            24.5,
            41.4,
            64.6,
            20.7
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
            440,
            383,
            6845946.44,
            15558.97,
            31.7,
            25.1
          ],
          [
            "Eric Isakov",
            410,
            339,
            6648253.1,
            16215.25,
            29.4,
            25.4
          ],
          [
            "Richard Williams",
            374,
            339,
            5474574.52,
            14637.9,
            33.5,
            29.5
          ],
          [
            "Landon Little",
            309,
            279,
            5044563.49,
            16325.45,
            33.4,
            28.6
          ],
          [
            "Brandon Skrzypek",
            249,
            243,
            4357419.33,
            17499.68,
            32.7,
            31.5
          ],
          [
            "Joseph Yager",
            330,
            264,
            4131671.73,
            12520.22,
            29.6,
            21.9
          ],
          [
            "Drew Bailey",
            475,
            435,
            4087004.81,
            8604.22,
            33.5,
            26.5
          ],
          [
            "Alex Dubanoski",
            268,
            197,
            3676107.51,
            13716.82,
            19.8,
            16.1
          ],
          [
            "Jason Andrews-INACTIVE",
            356,
            297,
            3653618.72,
            10262.97,
            35.4,
            35.7
          ],
          [
            "Shawn Oehlstrom",
            350,
            261,
            3522740.29,
            10064.97,
            43.4,
            36.8
          ],
          [
            "Alejandro Alvarado",
            211,
            156,
            2870877.77,
            13606.06,
            19.5,
            17.7
          ],
          [
            "Kaden Carter",
            212,
            167,
            2811343.12,
            13261.05,
            22.4,
            21.6
          ],
          [
            "Galo Munive",
            235,
            180,
            2674148.21,
            11379.35,
            20.1,
            21.3
          ],
          [
            "Brady Weingartner",
            150,
            140,
            2650286.97,
            17668.58,
            24.7,
            23
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
            "Joseph Jones",
            184,
            141,
            2402784.15,
            13058.61,
            20.6,
            15.1
          ],
          [
            "Malik Ford",
            145,
            139,
            2318623.32,
            15990.51,
            27.4,
            29.5
          ],
          [
            "Joshua Collins",
            161,
            160,
            2233068.58,
            13869.99,
            42.5,
            31.8
          ],
          [
            "Daniel Galli",
            155,
            125,
            1740571.55,
            11229.49,
            58.6,
            43
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
            132,
            89,
            1469499.7,
            11132.57,
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
            975444.28,
            14344.77,
            28.5,
            22.7
          ],
          [
            "Chad Williams",
            59,
            41,
            654539.09,
            11093.88,
            58.6,
            20.1
          ],
          [
            "(Unassigned)",
            67,
            60,
            583162,
            8703.91,
            36.1,
            32.5
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
            "Neil Laux",
            25,
            22,
            425038.81,
            17001.55,
            33.5,
            27.8
          ],
          [
            "Michael McLaughlin",
            35,
            35,
            393322.16,
            11237.78,
            100.6,
            63.3
          ],
          [
            "Mike Scott",
            53,
            52,
            390272.67,
            7363.64,
            57.5,
            33.9
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
            34,
            30,
            217677.15,
            6402.27,
            56,
            44.1
          ],
          [
            "Spencer Boyette",
            5,
            5,
            86316.31,
            17263.26,
            15.7,
            17.2
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
            3790,
            58648744.39,
            15474.6,
            27.5
          ],
          [
            "Gutters",
            1456,
            13802858.03,
            9479.98,
            36.4
          ],
          [
            "Siding",
            447,
            4461666.06,
            9981.36,
            53.4
          ],
          [
            "Metal",
            58,
            963954.52,
            16619.91,
            70.5
          ],
          [
            "Masonry",
            79,
            898893.9,
            11378.4,
            59.6
          ],
          [
            "Windows",
            65,
            680950.48,
            10476.16,
            66.6
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
            28,
            378440.79,
            13515.74,
            48.9
          ],
          [
            "Rack Mounted Solar",
            29,
            304096.92,
            10486.1,
            63.5
          ],
          [
            "Flat Roof",
            24,
            229606.39,
            9566.93,
            42
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
            9,
            88777.9,
            9864.21,
            35.7
          ],
          [
            "Other",
            9,
            75751.57,
            8416.84,
            71.4
          ],
          [
            "Stucco",
            4,
            37248.17,
            9312.04,
            50
          ],
          [
            "Skylights",
            3,
            23709.23,
            7903.08,
            50.4
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
            1320,
            26053823.48,
            19737.75,
            "30.6d",
            "27d",
            38,
            19737.75
          ],
          [
            "David Schwan",
            1093,
            21818762.1,
            19962.27,
            "24.7d",
            "24.4d",
            31.7,
            19962.27
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
            316,
            6114302.56,
            19349.06,
            "24.5d",
            "19.3d",
            33.9,
            19349.06
          ],
          [
            "Bradley Essex - INACTIVE",
            314,
            5937900.19,
            18910.51,
            "30.7d",
            "29.8d",
            36.6,
            18910.51
          ],
          [
            "Ethan Wolfe",
            286,
            5561624.31,
            19446.24,
            "24.7d",
            "19.9d",
            31.8,
            19446.24
          ],
          [
            "Thomas Hayes",
            237,
            4244184.01,
            17907.95,
            "31.4d",
            "32.5d",
            31.6,
            17907.95
          ],
          [
            "Bruce Lemon Jr.",
            69,
            1235440.18,
            17904.93,
            "37.4d",
            "27.6d",
            43.5,
            17904.93
          ],
          [
            "Morgan Valois",
            23,
            640576.32,
            27851.14,
            "127.5d",
            "103.6d",
            56.5,
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
            47,
            22,
            196,
            13,
            25,
            8,
            0,
            0,
            1,
            0,
            0,
            0,
            1,
            3,
            316
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
            144,
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
            314
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
            135,
            331,
            267,
            97,
            157,
            20,
            0,
            7,
            0,
            29,
            0,
            15,
            189,
            1320
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
            32,
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
            69
          ],
          [
            "David Schwan",
            15,
            18,
            425,
            3,
            0,
            96,
            3,
            0,
            38,
            150,
            0,
            276,
            64,
            5,
            1093
          ],
          [
            "Ethan Wolfe",
            4,
            14,
            157,
            0,
            2,
            106,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            286
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
            27,
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
            237
          ],
          [
            "Total",
            213,
            370,
            1570,
            287,
            215,
            592,
            35,
            1,
            102,
            150,
            29,
            277,
            159,
            201,
            4201
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Michael McLaughlin: 35 WOs, $393K revenue, 100.6-day median complete, top-volume PM with the slowest cycle in the network.",
        "Multi-trade penalty is severe in 1 markets: NOVA MT 64.6d vs ST 20.7d.",
        "Days to Start averages 26.3 days company-wide and 36.2 days in Grand Rapids (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [
        "Gutters-only work runs at 36.4-day median complete versus 27.5 days for roofing, 32% slower cycle on the lowest-priced trade."
      ],
      "positivesToBuildOn": [
        "October delivered $12.16M across 619 invoiced jobs at 32.5-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "DC Metro hits 18.7-day median complete and a $18,664 average contract on 287 jobs.",
        "Multi-trade jobs carry a $24,210 average contract versus $16,804 for single-trade, a 44% revenue lift per job.",
        "Nashville is the best-balanced market: 20.4-day median complete, 31.4% multi-trade attach, $22,890 average contract on 277 jobs."
      ]
    }
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-11-28",
    "ytdDays": 306,
    "rowCount": 5469,
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
        "value": "$94.29M",
        "sub": "5,469 signed contracts across 13 markets"
      },
      {
        "label": "Sold",
        "value": "$91.77M",
        "sub": "5,342 deals | 97.7% of signed contracts"
      },
      {
        "label": "Production Review",
        "value": "$2.06M",
        "sub": "100 deals | Ops Review, PM Review, Contracted"
      },
      {
        "label": "Kicked Back",
        "value": "$366K",
        "sub": "18 deals | 0.3% of signed contracts",
        "trend": "negative"
      },
      {
        "label": "Sales Action",
        "value": "$15K",
        "sub": "2 deals requiring sales follow-up",
        "trend": "neutral"
      },
      {
        "label": "Avg Deal Size",
        "value": "$17,241",
        "sub": "Median: $16,012 | Install avg: $19,616"
      },
      {
        "label": "Organization",
        "value": "180 Reps",
        "sub": "13 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$112.47M",
        "sub": "Based on 306 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "86.0% / 13.9%",
        "sub": "4,705 installs | 759 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 5342,
        "amount": 91767041.72
      },
      {
        "label": "Production Review",
        "count": 100,
        "amount": 2056872.65
      },
      {
        "label": "Kicked Back",
        "count": 18,
        "amount": 366167.19
      },
      {
        "label": "Sales Action",
        "count": 2,
        "amount": 15000
      },
      {
        "label": "Other",
        "count": 7,
        "amount": 87618.13
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
        "amount": 11243469.35,
        "installs": 520,
        "repairs": 86,
        "avgDeal": 18554,
        "repairPct": 14.2,
        "installAvg": 21157,
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
        "count": 670,
        "amount": 11329344.74,
        "installs": 580,
        "repairs": 90,
        "avgDeal": 16909,
        "repairPct": 13.4,
        "installAvg": 19172,
        "repairAvg": 2331
      },
      {
        "key": "2026-10",
        "label": "October",
        "count": 600,
        "amount": 10940893.38,
        "installs": 505,
        "repairs": 90,
        "avgDeal": 18235,
        "repairPct": 15,
        "installAvg": 20712,
        "repairAvg": 4400
      },
      {
        "key": "2026-11",
        "label": "November",
        "count": 16,
        "amount": 251404.03,
        "installs": 14,
        "repairs": 2,
        "avgDeal": 15713,
        "repairPct": 12.5,
        "installAvg": 15746,
        "repairAvg": 15480
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
        "2026-09": 4385588.72,
        "2026-10": 3551415.79,
        "2026-11": 1200
      },
      "Insurance": {
        "2026-01": 1437020.6,
        "2026-02": 1686849.5,
        "2026-03": 2811664.92,
        "2026-04": 6323664.43,
        "2026-05": 6125834.13,
        "2026-06": 5839036.3,
        "2026-07": 4973179.22,
        "2026-08": 4512423.02,
        "2026-09": 4756985.95,
        "2026-10": 4384890.1,
        "2026-11": 25599.99
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
        "2026-10": 1426385.87,
        "2026-11": 0
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Insurance",
        "count": 2063,
        "amount": 42877148.16,
        "avg": 20784
      },
      {
        "jobType": "Retail-No Financing",
        "count": 2724,
        "amount": 37058221.46,
        "avg": 13604
      },
      {
        "jobType": "Retail-Financing",
        "count": 560,
        "amount": 11985345.42,
        "avg": 21402
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
        "count": 130,
        "amount": 2115258.65
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
        "count": 138,
        "amount": 2732952.61
      },
      {
        "w": 31,
        "count": 128,
        "amount": 2840379.63
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
        "count": 153,
        "amount": 2729605.62
      },
      {
        "w": 37,
        "count": 141,
        "amount": 2212256.32
      },
      {
        "w": 38,
        "count": 147,
        "amount": 2591195.86
      },
      {
        "w": 39,
        "count": 161,
        "amount": 2718359.44
      },
      {
        "w": 40,
        "count": 195,
        "amount": 3407472.36
      },
      {
        "w": 41,
        "count": 139,
        "amount": 2489926.99
      },
      {
        "w": 42,
        "count": 140,
        "amount": 2458153.54
      },
      {
        "w": 43,
        "count": 136,
        "amount": 2566171.09
      },
      {
        "w": 44,
        "count": 95,
        "amount": 1796449.61
      },
      {
        "w": 45,
        "count": 13,
        "amount": 220011.03
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
          36406675.77,
          2003,
          18176,
          1725,
          278,
          13.9,
          10
        ],
        [
          "Detroit Metro",
          13245497.87,
          814,
          16272,
          679,
          135,
          16.6,
          5
        ],
        [
          "Cleveland",
          10466941.37,
          628,
          16667,
          538,
          86,
          13.7,
          16
        ],
        [
          "Nashville",
          6486005,
          361,
          17967,
          283,
          78,
          21.6,
          5
        ],
        [
          "DC Metro",
          5830684.22,
          395,
          14761,
          307,
          87,
          22,
          9
        ],
        [
          "Richmond",
          5167581.87,
          234,
          22084,
          224,
          10,
          4.3,
          26
        ],
        [
          "Cincinnati",
          4712711.98,
          285,
          16536,
          256,
          29,
          10.2,
          6
        ],
        [
          "Dayton",
          4173721.16,
          250,
          16695,
          222,
          28,
          11.2,
          14
        ],
        [
          "Knoxville",
          2596273.97,
          157,
          16537,
          156,
          1,
          0.6,
          12
        ],
        [
          "Raleigh",
          2508607.52,
          185,
          13560,
          164,
          21,
          11.4,
          6
        ],
        [
          "Greenville",
          1744517.6,
          99,
          17621,
          98,
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
          "opps": 3520,
          "soldAmt": 20777332.73,
          "closePct": 40.7,
          "nsli": 5903
        },
        {
          "branch": "Detroit",
          "opps": 1579,
          "soldAmt": 9862821.07,
          "closePct": 41.9,
          "nsli": 6246
        },
        {
          "branch": "Cleveland",
          "opps": 1175,
          "soldAmt": 6108401.97,
          "closePct": 34.7,
          "nsli": 5199
        },
        {
          "branch": "DC Metro",
          "opps": 965,
          "soldAmt": 3708991.69,
          "closePct": 31.4,
          "nsli": 3844
        },
        {
          "branch": "Nashville",
          "opps": 549,
          "soldAmt": 3405662.99,
          "closePct": 42.3,
          "nsli": 6203
        },
        {
          "branch": "Cincinnati",
          "opps": 765,
          "soldAmt": 3405287.3,
          "closePct": 30.6,
          "nsli": 4451
        },
        {
          "branch": "Dayton",
          "opps": 452,
          "soldAmt": 2080563.85,
          "closePct": 30.8,
          "nsli": 4603
        },
        {
          "branch": "Raleigh",
          "opps": 401,
          "soldAmt": 1437030.82,
          "closePct": 31.9,
          "nsli": 3584
        },
        {
          "branch": "Richmond",
          "opps": 162,
          "soldAmt": 1242008.92,
          "closePct": 42.6,
          "nsli": 7667
        },
        {
          "branch": "Greenville",
          "opps": 201,
          "soldAmt": 1110166.64,
          "closePct": 34.3,
          "nsli": 5523
        },
        {
          "branch": "Knoxville",
          "opps": 146,
          "soldAmt": 879928.94,
          "closePct": 41.8,
          "nsli": 6027
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
        "opps": 10030,
        "soldAmt": 54409418.66,
        "closePct": 37.5,
        "nsli": 5425
      },
      "source": "Closing Percent By Branch-2026-11-03-09-00-06.xlsx",
      "format": "per-opportunity"
    },
    "marketKickbacks": [
      {
        "market": "Cleveland",
        "kicked": 4,
        "kickedAmount": 129579.52
      },
      {
        "market": "Columbus",
        "kicked": 4,
        "kickedAmount": 56903.17
      },
      {
        "market": "Raleigh",
        "kicked": 3,
        "kickedAmount": 60371
      },
      {
        "market": "DC Metro",
        "kicked": 2,
        "kickedAmount": 28126
      },
      {
        "market": "Richmond",
        "kicked": 2,
        "kickedAmount": 37245.5
      },
      {
        "market": "Cincinnati",
        "kicked": 2,
        "kickedAmount": 34386
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
        "amount": 2372720.33,
        "count": 150,
        "avg": 15818,
        "medDays": 3,
        "jt": {
          "Retail-Financing": 24,
          "Retail-No Financing": 86,
          "Insurance": 38
        },
        "installs": 137,
        "repairs": 13
      },
      {
        "name": "Kevin Ditty",
        "amount": 2351399.14,
        "count": 118,
        "avg": 19927,
        "medDays": 3,
        "jt": {
          "Insurance": 17,
          "Retail-No Financing": 71,
          "Retail-Financing": 29
        },
        "installs": 97,
        "repairs": 21
      },
      {
        "name": "Brian Ogrin",
        "amount": 2146496.06,
        "count": 79,
        "avg": 27171,
        "medDays": 59,
        "jt": {
          "Insurance": 55,
          "Retail-No Financing": 23,
          "Retail-Financing": 1
        },
        "installs": 73,
        "repairs": 6
      },
      {
        "name": "Stephen Harmon",
        "amount": 2113934.63,
        "count": 106,
        "avg": 19943,
        "medDays": 10,
        "jt": {
          "Retail-No Financing": 96,
          "Insurance": 4,
          "Retail-Financing": 4
        },
        "installs": 96,
        "repairs": 10
      },
      {
        "name": "Sam Scorziell",
        "amount": 2073623.41,
        "count": 89,
        "avg": 23299,
        "medDays": 24,
        "jt": {
          "Insurance": 66,
          "Retail-No Financing": 20,
          "Retail-Financing": 1
        },
        "installs": 85,
        "repairs": 4
      },
      {
        "name": "Robert Beck",
        "amount": 1967855.79,
        "count": 71,
        "avg": 27716,
        "medDays": 32,
        "jt": {
          "Insurance": 54,
          "Retail-No Financing": 16,
          "Retail-Financing": 1
        },
        "installs": 67,
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
          "Retail-Financing": 5
        },
        "installs": 108,
        "repairs": 41
      },
      {
        "name": "Bill Applegate",
        "amount": 1795904.19,
        "count": 84,
        "avg": 21380,
        "medDays": 39,
        "jt": {
          "Insurance": 56,
          "Retail-No Financing": 26,
          "Retail-Financing": 1
        },
        "installs": 71,
        "repairs": 13
      },
      {
        "name": "Dave Norris",
        "amount": 1692869.46,
        "count": 120,
        "avg": 14107,
        "medDays": 13,
        "jt": {
          "Retail-No Financing": 74,
          "Retail-Financing": 1,
          "Insurance": 45
        },
        "installs": 88,
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
        "name": "Caleb Severance",
        "amount": 1626864.59,
        "count": 73,
        "avg": 22286,
        "medDays": 2,
        "jt": {
          "Retail-No Financing": 51,
          "Retail-Financing": 21,
          "Insurance": 1
        },
        "installs": 66,
        "repairs": 7
      },
      {
        "name": "Clay Hastings",
        "amount": 1618608.73,
        "count": 89,
        "avg": 18187,
        "medDays": 9,
        "jt": {
          "Retail-No Financing": 27,
          "Insurance": 34,
          "Retail-Financing": 28
        },
        "installs": 82,
        "repairs": 7
      },
      {
        "name": "Derrick Sieber",
        "amount": 1583194.69,
        "count": 106,
        "avg": 14936,
        "medDays": 10,
        "jt": {
          "Retail-No Financing": 64,
          "Retail-Financing": 4,
          "Insurance": 35
        },
        "installs": 74,
        "repairs": 32
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
        "amount": 1515474.56,
        "count": 90,
        "avg": 16839,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 68,
          "Insurance": 2,
          "Retail-Financing": 19
        },
        "installs": 77,
        "repairs": 13
      },
      {
        "name": "Nick Junker",
        "amount": 1446394.44,
        "count": 75,
        "avg": 19285,
        "medDays": 34,
        "jt": {
          "Insurance": 43,
          "Retail-No Financing": 31,
          "Retail-Financing": 1
        },
        "installs": 70,
        "repairs": 5
      },
      {
        "name": "Mark Daggett",
        "amount": 1433663.65,
        "count": 88,
        "avg": 16292,
        "medDays": 6,
        "jt": {
          "Retail-No Financing": 56,
          "Insurance": 24,
          "Retail-Financing": 7
        },
        "installs": 78,
        "repairs": 10
      },
      {
        "name": "Frank Butts",
        "amount": 1431469.8,
        "count": 105,
        "avg": 13633,
        "medDays": 12,
        "jt": {
          "Retail-No Financing": 45,
          "Insurance": 52,
          "Retail-Financing": 2
        },
        "installs": 94,
        "repairs": 10
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
      },
      {
        "name": "Matt Busch",
        "amount": 1386560,
        "count": 84,
        "avg": 16507,
        "medDays": 4,
        "jt": {
          "Retail-No Financing": 56,
          "Retail-Financing": 11,
          "Insurance": 16
        },
        "installs": 70,
        "repairs": 14
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
        "name": "Storm Drumm",
        "medDays": 3
      },
      {
        "name": "Kevin Ditty",
        "medDays": 3
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
        "repairs": 31,
        "deals": 76,
        "pct": 40.8
      },
      {
        "name": "Luke Duquette-INACTIVE",
        "repairs": 16,
        "deals": 44,
        "pct": 36.4
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
          "count": 2549
        },
        {
          "label": "Retail-Fin",
          "median": 3,
          "mean": 15,
          "count": 546
        },
        {
          "label": "Insurance",
          "median": 27,
          "mean": 63,
          "count": 1927
        },
        {
          "label": "Repair",
          "median": 3,
          "mean": 14,
          "count": 703
        },
        {
          "label": "Install",
          "median": 10,
          "mean": 41,
          "count": 4427
        }
      ],
      "byMarket": [
        {
          "market": "Greenville",
          "median": 4,
          "mean": 7,
          "count": 96
        },
        {
          "market": "Nashville",
          "median": 5,
          "mean": 21,
          "count": 345
        },
        {
          "market": "Detroit Metro",
          "median": 5,
          "mean": 23,
          "count": 774
        },
        {
          "market": "Cincinnati",
          "median": 6,
          "mean": 25,
          "count": 282
        },
        {
          "market": "Raleigh",
          "median": 6,
          "mean": 48,
          "count": 179
        },
        {
          "market": "DC Metro",
          "median": 9,
          "mean": 44,
          "count": 377
        },
        {
          "market": "Columbus",
          "median": 10,
          "mean": 39,
          "count": 1838
        },
        {
          "market": "Knoxville",
          "median": 12,
          "mean": 39,
          "count": 154
        },
        {
          "market": "Dayton",
          "median": 14,
          "mean": 41,
          "count": 243
        },
        {
          "market": "Cleveland",
          "median": 16,
          "mean": 42,
          "count": 569
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
          "mean": 81,
          "count": 223
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
      "recent4WkAvg": 1153506.18
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
      "generatedAt": "2026-11-02T12:40:06-05:00",
      "modelRunDate": "2026-10-31",
      "fiscalYear": 2026,
      "gap": {
        "fullYearBudget": 123956895,
        "invoicedYtd": 82427746,
        "stillToInvoice": 41529149,
        "daysRemaining": 61,
        "weeksRemaining": 9
      },
      "bridge": {
        "rows": [
          {
            "label": "In Progress",
            "amount": 7628020,
            "convertPct": 92.6,
            "lands": 7062836,
            "note": "Already installing. Needs completion and billing only."
          },
          {
            "label": "Not Started",
            "amount": 9832360,
            "convertPct": 81,
            "lands": 7962739,
            "note": "Sold and processed, awaiting schedule. Throughput decides this."
          },
          {
            "label": "Sold Not Processed",
            "amount": 2019514,
            "convertPct": 81,
            "lands": 1635504,
            "note": "Signed but not yet a job. Processing delay is pure lost time."
          }
        ],
        "alreadySoldLands": 16661080,
        "mustBeNewlySoldNet": 24868069,
        "mustBeNewlySoldGross": 51005612,
        "meanCapturePct": 48.8
      },
      "sellingWindow": {
        "weeks": [
          {
            "weekStart": "10/31/2026",
            "daysToYearEnd": 61,
            "capturePct": 81,
            "valueOfOneMillion": 809850
          },
          {
            "weekStart": "11/07/2026",
            "daysToYearEnd": 54,
            "capturePct": 76.9,
            "valueOfOneMillion": 768977
          },
          {
            "weekStart": "11/14/2026",
            "daysToYearEnd": 47,
            "capturePct": 72.1,
            "valueOfOneMillion": 720995
          },
          {
            "weekStart": "11/21/2026",
            "daysToYearEnd": 40,
            "capturePct": 65.8,
            "valueOfOneMillion": 657781
          },
          {
            "weekStart": "11/28/2026",
            "daysToYearEnd": 33,
            "capturePct": 56.8,
            "valueOfOneMillion": 568165
          },
          {
            "weekStart": "12/05/2026",
            "daysToYearEnd": 26,
            "capturePct": 43.7,
            "valueOfOneMillion": 436659
          },
          {
            "weekStart": "12/12/2026",
            "daysToYearEnd": 19,
            "capturePct": 29,
            "valueOfOneMillion": 290175
          },
          {
            "weekStart": "12/19/2026",
            "daysToYearEnd": 12,
            "capturePct": 12.2,
            "valueOfOneMillion": 122112
          },
          {
            "weekStart": "12/26/2026",
            "daysToYearEnd": 5,
            "capturePct": 1.3,
            "valueOfOneMillion": 12947
          }
        ],
        "belowThreeQuartersFrom": "11/14/2026",
        "belowHalfFrom": "12/05/2026"
      },
      "pullForward": {
        "backlogTotal": 19479895,
        "perDay": 113685,
        "perWeek": 576794,
        "leverageCurve": [
          {
            "daysBeforeYearEnd": 61,
            "onDate": "10/31/2026",
            "worthPerDay": 113685
          },
          {
            "daysBeforeYearEnd": 60,
            "onDate": "11/01/2026",
            "worthPerDay": 66980
          },
          {
            "daysBeforeYearEnd": 45,
            "onDate": "11/16/2026",
            "worthPerDay": 107667
          },
          {
            "daysBeforeYearEnd": 30,
            "onDate": "12/01/2026",
            "worthPerDay": 200550
          },
          {
            "daysBeforeYearEnd": 21,
            "onDate": "12/10/2026",
            "worthPerDay": 365910
          },
          {
            "daysBeforeYearEnd": 14,
            "onDate": "12/17/2026",
            "worthPerDay": 447022
          },
          {
            "daysBeforeYearEnd": 7,
            "onDate": "12/24/2026",
            "worthPerDay": 535466
          }
        ],
        "strandedBacklog": 2818815,
        "completedAwaitingInvoice": {
          "total": 1713511,
          "jobs": 72,
          "medianAgeDays": 19,
          "agingBuckets": [
            {
              "bucket": "0-15 days",
              "jobs": 15,
              "amount": 391905
            },
            {
              "bucket": "15-30 days",
              "jobs": 10,
              "amount": 163630
            },
            {
              "bucket": "30-60 days",
              "jobs": 9,
              "amount": 277296
            },
            {
              "bucket": "60-90 days",
              "jobs": 2,
              "amount": 64066
            },
            {
              "bucket": "over 90 days",
              "jobs": 2,
              "amount": 16457
            }
          ],
          "byReason": [
            {
              "reason": "Pending Supplement",
              "jobs": 34,
              "amount": 978110
            },
            {
              "reason": "Ready to Invoice",
              "jobs": 22,
              "amount": 478650
            },
            {
              "reason": "Accounting Kickback",
              "jobs": 12,
              "amount": 226463
            },
            {
              "reason": "Unspecified",
              "jobs": 4,
              "amount": 30289
            }
          ],
          "note": "Work finished but not invoiced. No selling and no scheduling required, only the blocking process cleared."
        },
        "note": "Revenue moved into 2026 by finishing and billing existing work sooner. Requires no new selling."
      },
      "capacity": {
        "requiredPerWeek": 5667290,
        "demonstratedPerWeek": 2686672,
        "liftRequiredPct": 110.9,
        "trendPerWeek": -24210
      },
      "scenarios": [
        {
          "name": "Hold current pace",
          "weeklySales": 2686672,
          "newSalesRevenue": 11789117,
          "landsAt": 110877942,
          "note": "Trailing 4-week average, carried flat."
        },
        {
          "name": "Stretch +15%",
          "weeklySales": 3089673,
          "newSalesRevenue": 13557484,
          "landsAt": 112646310,
          "note": "Ambitious but inside what the team has produced before."
        },
        {
          "name": "Required to hit plan",
          "weeklySales": 5667290,
          "newSalesRevenue": 24868069,
          "landsAt": 123956895,
          "note": "What closing the full gap by selling alone would take."
        }
      ],
      "modelComparison": {
        "v5FullYear": 94950958,
        "paceLandingZone": 110877942,
        "note": "V5 is the forecast of record. The pace landing zone runs higher because these conversion rates are drawn from jobs that did invoice and because V5 also carries a declining sales trend."
      },
      "verdict": {
        "band": "not-reachable",
        "headline": "Plan is not reachable by selling alone. Closing the gap needs a production pull-forward, a budget reset, or both.",
        "reasons": [
          "Required $5,667,290/wk against a demonstrated $2,686,672/wk, a 111% lift.",
          "Sales are trending down $24,210 per week, not flat.",
          "After 11/14/2026, under 75% of what is sold still invoices this year.",
          "$16,661,080 of the gap is already sold and needs production, not selling."
        ]
      }
    },
    "commentary": {
      "whatsWorking": [
        "Sales Trajectory: Monthly sales moved from January $3.26M to November $251K (-92%). Annualized run rate: $112.47M.",
        "Premium Deal Types: Insurance averages $20,784 per deal. Retail-Financing averages $21,402 (highest per-deal value). Retail-No Financing averages $13,604 (the volume engine).",
        "Sold Conversion: 5,342 of 5,469 signed contracts (97.7%) have made it to Sold status for $91.77M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Kickback Concentration: Cleveland has the most kickbacks (4, $130K). Total company kickbacks: 18 worth $366K.",
        "Production Review Queue: 100 deals worth $2.06M sitting in Production Review. Watch for backlog growth, it delays revenue recognition."
      ],
      "criticalRisks": [
        "Cleveland Kickback Concentration drives the company's largest single-market rework volume.",
        "Pipeline kickbacks company-wide: 18 kickbacks totaling $366K.",
        "Production Review backlog: 100 deals ($2.06M)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 4d median close on 3,095 retail deals.",
        "Insurance Density: $20,784 avg on 2,063 deals = $42.88M; +20% lift = ~$8.58M.",
        "November repair rate at 12.5% vs YTD 13.9%, correction in latest month.",
        "Financing Lifts Ticket: Retail-Financing averages $21,402, highest per-deal value."
      ],
      "fixList": [
        "Cleveland Pipeline Kickback Intervention, pull every kickback and categorize root cause.",
        "Production Review Bottleneck, 100 deals; add temporary PM capacity.",
        "Financing Push, 560 financing deals YTD (10.2%) at $21,402 avg. Target 15% mix."
      ],
      "actionPlan": {
        "thisWeek": [
          "Cleveland Pipeline Kickback Review, meet with branch leadership.",
          "Production Review Surge Plan, 100 deals ($2.06M) in queue."
        ],
        "thisMonth": [
          "Supplement Escalation SOP, 7/14/30 day cadence with carrier escalation.",
          "Completed-to-Billing SLA, 100% invoiced within 21 days.",
          "Repair Triage Pilot in markets where repair rate exceeds 25%.",
          "Financing Training, peer training led by top financing reps. Target 15% mix."
        ],
        "thisQuarter": [
          "Add Kickback Reason field to accounting workflow.",
          "Repair Business Decision, 759 repairs YTD at ~$2,521 avg.",
          "Ops Capacity Planning, November hit 16 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "title": "Residential Revenue Forecast",
    "subtitle": "V5 Model with Job Type Analysis · Data as of November 02, 2026",
    "runDate": "November 02, 2026",
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
        "value": "$91.9M",
        "sub": "Jobs processed into system"
      },
      {
        "label": "Invoiced YTD",
        "value": "$82.51M",
        "sub": "NetSuite AR · 4618 invoices booked"
      },
      {
        "label": "4-Week Avg Weekly Sales",
        "value": "$2.3M",
        "sub": "Trend: -81,450/week"
      },
      {
        "label": "Current Week (Projected)",
        "value": "$1.6M",
        "sub": "WTD: $135K"
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
        "value": "-$18M",
        "sub": "14.3% under plan"
      },
      {
        "label": "Active Pipeline",
        "value": "$19.4M",
        "sub": "Backlog + IP + SNP"
      }
    ],
    "execSummary": {
      "budget": 125890005.2103,
      "modelAnnualInvoiced": 107895486.0959,
      "gap": 17994519.1144,
      "narrative": "The V5 model projects $107.9M in annual invoiced revenue against a $125.9M plan. The challenge is timing, not volume: Q1 ramped slowly so Q2 invoicing will lag. If the current weekly pace of $2.3M holds, H2 should catch up as earlier sales convert to invoiced revenue."
    },
    "monthRevenue": {
      "april": {
        "invoiced": 8405959.810000002,
        "wipChange": -8645364.4657,
        "netRevenue": -239404.65569999814,
        "beginningWip": 8645364.4657,
        "endingWip": 0,
        "materialCost": 4553550.4145,
        "laborCost": 2732479.7328,
        "grossProfit": -3660781.453,
        "grossMarginPct": -100.9801
      },
      "may": {
        "invoiced": 8564976.120000001,
        "wipChange": 0,
        "netRevenue": 8564976.120000001,
        "beginningWip": 0,
        "endingWip": 0,
        "materialCost": 3959857.0898,
        "laborCost": 2376218.1722,
        "grossProfit": 6204154.3348,
        "grossMarginPct": 49.474
      }
    },
    "weeklyTargetsHeader": {
      "avgWeeklyNeed": 2312020.7924,
      "recent4WkAvg": 2325785.495,
      "gap": 0,
      "productionAvgWeeklyNeed": 2539511.2741,
      "productionCycleStart": 13,
      "productionCycleComplete": 7,
      "productionTotalCycle": 20
    },
    "budgetRecoveryHeader": {
      "fullYearBudget": 125890005.2103,
      "gap": 20991132.8314,
      "upliftPct": 1.3,
      "aprilGap": 440527.8681,
      "q1OriginalBudget": 103034403.7434,
      "q1Actual": 82483798.78,
      "q1Shortfall": 20550604.9634,
      "recoveryRatio": 2.9883
    },
    "profitabilitySummary": {
      "combinedGP": 62212724.6,
      "combinedGP_pct": 40.2447,
      "combinedRevenue": 154586286.48,
      "y2025_GP_pct": 41.5376,
      "y2025_revenue": 73942457.17,
      "y2025_jobs": 3481,
      "y2026_GP_pct": 39.0591,
      "y2026_revenue": 80643829.31,
      "y2026_jobs": 4155,
      "materialCost": 57500099.33,
      "laborCost": 34504472.72,
      "commissions": 13218563.63,
      "materialPctContract": 37.1961,
      "laborPctContract": 22.3205,
      "commissionPctContract": 8.5509
    },
    "pipelineSnapshot": {
      "stages": [
        {
          "label": "New Sales",
          "subtitle": "101 jobs · 4d avg",
          "value": 2010574.44,
          "jobs": 101,
          "color": "#3b82f6",
          "byMarket": [
            {
              "market": "Cleveland",
              "jobs": 26,
              "value": 614733.47
            },
            {
              "market": "Detroit Metro",
              "jobs": 21,
              "value": 413314.12
            },
            {
              "market": "Columbus",
              "jobs": 20,
              "value": 411605.54
            },
            {
              "market": "Cincinnati",
              "jobs": 10,
              "value": 170769
            },
            {
              "market": "DC Metro",
              "jobs": 11,
              "value": 168732.81
            },
            {
              "market": "Raleigh",
              "jobs": 4,
              "value": 77975
            },
            {
              "market": "Dayton",
              "jobs": 4,
              "value": 68268
            },
            {
              "market": "Nashville",
              "jobs": 3,
              "value": 47931
            },
            {
              "market": "Richmond",
              "jobs": 2,
              "value": 37245.5
            }
          ],
          "avgDays": 3.7,
          "medianDays": 2
        },
        {
          "label": "Backlog",
          "subtitle": "451 jobs · 29d avg",
          "value": 9765908.55,
          "jobs": 451,
          "color": "#f97316",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 164,
              "value": 3848406.16
            },
            {
              "market": "Detroit Metro",
              "jobs": 79,
              "value": 1741771.3
            },
            {
              "market": "Cleveland",
              "jobs": 75,
              "value": 1586314.51
            },
            {
              "market": "Cincinnati",
              "jobs": 34,
              "value": 684965.6
            },
            {
              "market": "Richmond",
              "jobs": 20,
              "value": 517170.91
            },
            {
              "market": "DC Metro",
              "jobs": 23,
              "value": 389839.4
            },
            {
              "market": "Nashville",
              "jobs": 17,
              "value": 361997.29
            },
            {
              "market": "Raleigh",
              "jobs": 14,
              "value": 248717.64
            },
            {
              "market": "Knoxville",
              "jobs": 9,
              "value": 129708.45
            },
            {
              "market": "Dayton",
              "jobs": 8,
              "value": 105922
            },
            {
              "market": "Greenville",
              "jobs": 5,
              "value": 82293.36
            },
            {
              "market": "Grand Rapids",
              "jobs": 3,
              "value": 68801.93
            }
          ],
          "avgDays": 28.6,
          "medianDays": 19
        },
        {
          "label": "In Progress",
          "subtitle": "248 jobs",
          "value": 7643508.66,
          "jobs": 248,
          "color": "#22c55e",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 112,
              "value": 3273521.14
            },
            {
              "market": "Cleveland",
              "jobs": 65,
              "value": 1639234.57
            },
            {
              "market": "Nashville",
              "jobs": 7,
              "value": 709625.56
            },
            {
              "market": "Detroit Metro",
              "jobs": 18,
              "value": 510040.07
            },
            {
              "market": "Richmond",
              "jobs": 9,
              "value": 505273
            },
            {
              "market": "DC Metro",
              "jobs": 8,
              "value": 393105.16
            },
            {
              "market": "Dayton",
              "jobs": 10,
              "value": 251095.38
            },
            {
              "market": "Cincinnati",
              "jobs": 10,
              "value": 229392.39
            },
            {
              "market": "Grand Rapids",
              "jobs": 2,
              "value": 54972.1
            },
            {
              "market": "Raleigh",
              "jobs": 4,
              "value": 42860.59
            },
            {
              "market": "Knoxville",
              "jobs": 1,
              "value": 19723.64
            },
            {
              "market": "Greenville",
              "jobs": 2,
              "value": 14665.06
            }
          ],
          "avgDays": null,
          "medianDays": null
        },
        {
          "label": "Completed",
          "subtitle": "87 jobs",
          "value": 1894546.88,
          "jobs": 87,
          "color": "#a855f7",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 40,
              "value": 882876.47
            },
            {
              "market": "Richmond",
              "jobs": 14,
              "value": 414783.09
            },
            {
              "market": "Cleveland",
              "jobs": 13,
              "value": 260011.28
            },
            {
              "market": "DC Metro",
              "jobs": 7,
              "value": 125362.24
            },
            {
              "market": "Knoxville",
              "jobs": 5,
              "value": 81934.14
            },
            {
              "market": "Cincinnati",
              "jobs": 3,
              "value": 63724.53
            },
            {
              "market": "Detroit Metro",
              "jobs": 2,
              "value": 33386
            },
            {
              "market": "Raleigh",
              "jobs": 1,
              "value": 20563.44
            },
            {
              "market": "Greenville",
              "jobs": 2,
              "value": 11905.69
            }
          ],
          "avgDays": null,
          "medianDays": null
        }
      ],
      "totalJobs": 887,
      "totalValue": 21314538.53
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
            21314538.53,
            10113960.9,
            7298747.977,
            -902977.083
          ],
          [
            "May 2026",
            14117621.6688,
            21314538.53,
            11714245.78,
            9773926.605,
            -4343695.0638
          ],
          [
            "Jun 2026",
            14800571.2162,
            21314538.53,
            11842012.17,
            11609705.052,
            -3190866.1642
          ],
          [
            "Jul 2026",
            11641331.0926,
            21314538.53,
            11745730.89,
            9188877.6567,
            -2452453.4358
          ],
          [
            "Aug 2026",
            12738223.8858,
            21314538.53,
            10139440.83,
            12662817.6612,
            -75406.2246
          ],
          [
            "Sep 2026",
            13673037.2551,
            21314538.53,
            12344163.67,
            10937143.4271,
            -2735893.828
          ],
          [
            "Oct 2026",
            13483638.9808,
            21314538.53,
            13359883.18,
            3874720.9002,
            -9608918.0806
          ],
          [
            "Nov 2026",
            12392297.9669,
            21314538.53,
            12110370.3232,
            12346760.7596,
            -45537.2073
          ],
          [
            "Dec 2026",
            7988852.274,
            7343335.9824,
            8697816.8086,
            8314197.8596,
            325345.5856
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
            21314538.53,
            7502982.727,
            902977.083,
            10113960.9
          ],
          [
            "May 2026",
            21314538.53,
            9874913.2216,
            0,
            11714245.78
          ],
          [
            "Jun 2026",
            21314538.53,
            11001546.8097,
            86876.5003,
            11842012.17
          ],
          [
            "Jul 2026",
            21314538.53,
            11398355.2691,
            0,
            11745730.89
          ],
          [
            "Aug 2026",
            21314538.53,
            10720144.358,
            0,
            10139440.83
          ],
          [
            "Sep 2026",
            21314538.53,
            11506208.9955,
            0,
            12344163.67
          ],
          [
            "Oct 2026",
            21314538.53,
            12520085.3659,
            0,
            13359883.18
          ],
          [
            "Nov 2026",
            21314538.53,
            5995463.7488,
            6791824.8789,
            12110370.3232
          ],
          [
            "Dec 2026",
            7343335.9824,
            2420749.4861,
            7647563.3531,
            8697816.8086
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
            11745730.89,
            11745730.89,
            11745730.89
          ],
          [
            "Aug 2026 [Actual]",
            13.4542,
            10139440.83,
            10139440.83,
            10139440.83
          ],
          [
            "Sep 2026 [Actual]",
            12.0952,
            12344163.67,
            12344163.67,
            12344163.67
          ],
          [
            "Oct 2026 [Actual]",
            11.3828,
            13359883.18,
            13359883.18,
            13359883.18
          ],
          [
            "Nov 2026",
            7.7142,
            0,
            13292156.0249,
            15276766.6145
          ],
          [
            "Dec 2026",
            2.7932,
            0,
            4812831.5638,
            5531420.5173
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
            "Wk 11/01",
            8444218.6318,
            2825753.0754,
            5618465.5564
          ],
          [
            "Wk 11/08",
            8444218.6318,
            2825753.0754,
            5618465.5564
          ],
          [
            "Wk 11/15",
            8444218.6318,
            2825753.0754,
            5618465.5564
          ],
          [
            "Wk 11/22",
            8444218.6318,
            2825753.0754,
            5618465.5564
          ],
          [
            "Wk 11/29",
            6604851.5942,
            2210231.7004,
            4394619.8938
          ],
          [
            "Wk 12/06",
            5869104.7791,
            1964023.1503,
            3905081.6288
          ],
          [
            "Wk 12/13",
            5869104.7791,
            1964023.1503,
            3905081.6288
          ],
          [
            "Wk 12/20",
            5869104.7791,
            1964023.1503,
            3905081.6288
          ],
          [
            "Wk 12/27",
            4192217.6994,
            1402873.6788,
            2789344.0205
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
            23874.1228,
            18,
            1326.3402,
            40.4217,
            39702666.24
          ],
          [
            "Retail-Financing",
            22018.6528,
            19,
            1158.8765,
            60.6855,
            10921251.77
          ],
          [
            "Retail-No Financing",
            19209.1561,
            19,
            1011.0082,
            61.0151,
            35613775.46
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
            1663,
            23874.1228
          ],
          [
            "Retail-Financing",
            13,
            6,
            19,
            496,
            22018.6528
          ],
          [
            "Retail-No Financing",
            13,
            6,
            19,
            1854,
            19209.1561
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
            164,
            3848406.16
          ],
          [
            "Detroit Metro",
            79,
            1741771.3
          ],
          [
            "Cleveland",
            75,
            1586314.51
          ],
          [
            "Cincinnati",
            34,
            684965.6
          ],
          [
            "Richmond",
            20,
            517170.91
          ],
          [
            "DC Metro",
            23,
            389839.4
          ],
          [
            "Nashville",
            17,
            361997.29
          ],
          [
            "Raleigh",
            14,
            248717.64
          ],
          [
            "Knoxville",
            9,
            129708.45
          ],
          [
            "Dayton",
            8,
            105922
          ],
          [
            "Greenville",
            5,
            82293.36
          ],
          [
            "Grand Rapids",
            3,
            68801.93
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
            112,
            3273521.14
          ],
          [
            "Cleveland",
            65,
            1639234.57
          ],
          [
            "Nashville",
            7,
            709625.56
          ],
          [
            "Detroit Metro",
            18,
            510040.07
          ],
          [
            "Richmond",
            9,
            505273
          ],
          [
            "DC Metro",
            8,
            393105.16
          ],
          [
            "Dayton",
            10,
            251095.38
          ],
          [
            "Cincinnati",
            10,
            229392.39
          ],
          [
            "Grand Rapids",
            2,
            54972.1
          ],
          [
            "Raleigh",
            4,
            42860.59
          ],
          [
            "Knoxville",
            1,
            19723.64
          ],
          [
            "Greenville",
            2,
            14665.06
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
            26,
            614733.47
          ],
          [
            "Detroit Metro",
            21,
            413314.12
          ],
          [
            "Columbus",
            20,
            411605.54
          ],
          [
            "Cincinnati",
            10,
            170769
          ],
          [
            "DC Metro",
            11,
            168732.81
          ],
          [
            "Raleigh",
            4,
            77975
          ],
          [
            "Dayton",
            4,
            68268
          ],
          [
            "Nashville",
            3,
            47931
          ],
          [
            "Richmond",
            2,
            37245.5
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
            40,
            882876.47
          ],
          [
            "Richmond",
            14,
            414783.09
          ],
          [
            "Cleveland",
            13,
            260011.28
          ],
          [
            "DC Metro",
            7,
            125362.24
          ],
          [
            "Knoxville",
            5,
            81934.14
          ],
          [
            "Cincinnati",
            3,
            63724.53
          ],
          [
            "Detroit Metro",
            2,
            33386
          ],
          [
            "Raleigh",
            1,
            20563.44
          ],
          [
            "Greenville",
            2,
            11905.69
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
            1092533.8244,
            47.2545
          ],
          [
            "Retail-No Financing",
            913450.1295,
            39.5087
          ],
          [
            "Retail-Financing",
            306036.8385,
            13.2368
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
            1243669.2367,
            53.7914
          ],
          [
            "Gutters",
            887394.7847,
            38.3818
          ],
          [
            "Siding",
            55833.2307,
            2.4149
          ],
          [
            "Rack Mounted Solar",
            23002.6655,
            0.9949
          ],
          [
            "Metal",
            22482.4663,
            0.9724
          ],
          [
            "Flat Roof",
            17045.9641,
            0.7373
          ],
          [
            "GAF Solar",
            16840.9399,
            0.7284
          ],
          [
            "Masonry",
            14889.8958,
            0.644
          ],
          [
            "Painting",
            9427.7613,
            0.4078
          ],
          [
            "Carpentry",
            8871.5247,
            0.3837
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
            "Wk 11/01",
            "Nov",
            2825753.0754
          ],
          [
            "Wk 11/08",
            "Nov",
            2825753.0754
          ],
          [
            "Wk 11/15",
            "Nov",
            2825753.0754
          ],
          [
            "Wk 11/22",
            "Nov",
            2825753.0754
          ],
          [
            "Wk 11/29",
            "Nov",
            2210231.7004
          ],
          [
            "Wk 12/06",
            "Dec",
            1964023.1503
          ],
          [
            "Wk 12/13",
            "Dec",
            1964023.1503
          ],
          [
            "Wk 12/20",
            "Dec",
            1964023.1503
          ],
          [
            "Wk 12/27",
            "Dec",
            1402873.6788
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
              2631254.36,
              1840276.51,
              2591050.5,
              2044281.41,
              2241746.93,
              2383296.45,
              2744582.66,
              2832525.01,
              2023323.96,
              2783550.62,
              2732600.57,
              2574467.35,
              2691851.41,
              2620252.04,
              2598549.99,
              2596035.29,
              3380870.59,
              2453099.71,
              2425470.54,
              2519904.27,
              1904667.46,
              1637669.4388,
              2114382.1667,
              2032932.3358,
              1951482.505,
              1870032.6742,
              1788582.8433,
              1707133.0125,
              1625683.1817,
              1544233.3508
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
              7298747.977,
              9773926.605,
              11609705.052,
              9188877.6567,
              12662817.6612,
              10937143.4271,
              3874720.9002,
              12346760.7596,
              8314197.8596
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
              11745730.89,
              10139440.83,
              12344163.67,
              13359883.18,
              12110370.3232,
              8697816.8086
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
              3078258.806,
              3093975.2824,
              4458596.0763,
              7502982.727,
              9874913.2216,
              11001546.8097,
              11398355.2691,
              10720144.358,
              11506208.9955,
              12520085.3659,
              12346760.7596,
              10393658.4249
            ]
          },
          {
            "label": "From Known Sales",
            "data": [
              3078258.806,
              3093975.2824,
              4458596.0763,
              7502982.727,
              9874913.2216,
              11001546.8097,
              11398355.2691,
              10720144.358,
              11506208.9955,
              12520085.3659,
              5995463.7488,
              2420749.4861
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
              39.6024,
              13.6348,
              10.5812,
              6.9392,
              6.4422,
              5.2418,
              4.8909,
              4.4075,
              2.7911,
              2.6725
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
              40.4217,
              30.9639,
              16.506,
              6.6867,
              2.6506,
              1.3855
            ]
          },
          {
            "label": "Retail-Financing",
            "data": [
              60.6855,
              28.0242,
              7.4597,
              1.2097,
              1.0081,
              0.4032
            ]
          },
          {
            "label": "Retail-No Financing",
            "data": [
              61.0151,
              25.7019,
              7.2354,
              3.0778,
              1.4039,
              0.8639
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
      12270613.16,
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
      12270613.159999998,
      12346760.7596,
      10393658.4249
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
      12270613.159999998,
      5995463.7488,
      2420749.4861
    ],
    "requiredSales": [
      3257140.76,
      3101368.34,
      5679200.03,
      10113960.9,
      11714245.78,
      11842012.17,
      11745730.89,
      10139440.83,
      12344163.67,
      13359883.18,
      12110370.3232,
      8697816.8086
    ],
    "backlogData": [
      {
        "month": "Jan 2026",
        "total_backlog": 21314538.53,
        "wip_est": 9538055.54,
        "not_started": 11776482.99,
        "budget_rev": 3312733.06,
        "pipeline_backlog": 21314538.53,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 3078258.806,
        "revenue_gap": 234474.254,
        "adjusted_required_sales": 3257140.76,
        "backlog_surplus": 18057397.77
      },
      {
        "month": "Feb 2026",
        "total_backlog": 21314538.53,
        "wip_est": 9538055.54,
        "not_started": 11776482.99,
        "budget_rev": 2855781.11,
        "pipeline_backlog": 21314538.53,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 3093975.2824,
        "revenue_gap": 0,
        "adjusted_required_sales": 3101368.34,
        "backlog_surplus": 18213170.19
      },
      {
        "month": "Mar 2026",
        "total_backlog": 21314538.53,
        "wip_est": 9538055.54,
        "not_started": 11776482.99,
        "budget_rev": 6228299.34,
        "pipeline_backlog": 21314538.53,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 4458596.0763,
        "revenue_gap": 1769703.2637,
        "adjusted_required_sales": 5679200.03,
        "backlog_surplus": 15635338.5
      },
      {
        "month": "Apr 2026",
        "total_backlog": 21314538.53,
        "wip_est": 9538055.54,
        "not_started": 11776482.99,
        "budget_rev": 8405959.81,
        "pipeline_backlog": 21314538.53,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 7502982.727,
        "revenue_gap": 902977.083,
        "adjusted_required_sales": 10113960.9,
        "backlog_surplus": 11200577.63
      },
      {
        "month": "May 2026",
        "total_backlog": 21314538.53,
        "wip_est": 12788723.118,
        "not_started": 8525815.412,
        "budget_rev": 8564976.12,
        "pipeline_backlog": 21314538.53,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 9874913.2216,
        "revenue_gap": 0,
        "adjusted_required_sales": 11714245.78,
        "backlog_surplus": 9600292.75
      },
      {
        "month": "Jun 2026",
        "total_backlog": 21314538.53,
        "wip_est": 12788723.118,
        "not_started": 8525815.412,
        "budget_rev": 11088423.31,
        "pipeline_backlog": 21314538.53,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 11001546.8097,
        "revenue_gap": 86876.5003,
        "adjusted_required_sales": 11842012.17,
        "backlog_surplus": 9472526.36
      },
      {
        "month": "Jul 2026",
        "total_backlog": 21314538.53,
        "wip_est": 12788723.118,
        "not_started": 8525815.412,
        "budget_rev": 10676120.9,
        "pipeline_backlog": 21314538.53,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 11398355.2691,
        "revenue_gap": 0,
        "adjusted_required_sales": 11745730.89,
        "backlog_surplus": 9568807.64
      },
      {
        "month": "Aug 2026",
        "total_backlog": 21314538.53,
        "wip_est": 12788723.118,
        "not_started": 8525815.412,
        "budget_rev": 9151616.35,
        "pipeline_backlog": 21314538.53,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 10720144.358,
        "revenue_gap": 0,
        "adjusted_required_sales": 10139440.83,
        "backlog_surplus": 11175097.7
      },
      {
        "month": "Sep 2026",
        "total_backlog": 21314538.53,
        "wip_est": 12788723.118,
        "not_started": 8525815.412,
        "budget_rev": 9929275.62,
        "pipeline_backlog": 21314538.53,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 11506208.9955,
        "revenue_gap": 0,
        "adjusted_required_sales": 12344163.67,
        "backlog_surplus": 8970374.86
      },
      {
        "month": "Oct 2026",
        "total_backlog": 21314538.53,
        "wip_est": 12788723.118,
        "not_started": 8525815.412,
        "budget_rev": 12270613.16,
        "pipeline_backlog": 21314538.53,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 12520085.3659,
        "revenue_gap": 0,
        "adjusted_required_sales": 13359883.18,
        "backlog_surplus": 7954655.35
      },
      {
        "month": "Nov 2026",
        "total_backlog": 21314538.53,
        "wip_est": 12788723.118,
        "not_started": 8525815.412,
        "budget_rev": 12787288.6277,
        "pipeline_backlog": 21314538.53,
        "new_sales_backlog": 0,
        "pipe_invoicing": 19730275.86,
        "future_invoicing": 2114382.16,
        "rev_from_backlog": 5995463.7488,
        "revenue_gap": 6791824.8789,
        "adjusted_required_sales": 12110370.3232,
        "backlog_surplus": 9204168.2068
      },
      {
        "month": "Dec 2026",
        "total_backlog": 7343335.9824,
        "wip_est": 4406001.5894,
        "not_started": 2937334.3929,
        "budget_rev": 10068312.8393,
        "pipeline_backlog": 1584262.67,
        "new_sales_backlog": 5759073.3124,
        "pipe_invoicing": 1584262.67,
        "future_invoicing": 7715075.9,
        "rev_from_backlog": 2420749.4861,
        "revenue_gap": 7647563.3531,
        "adjusted_required_sales": 8697816.8086,
        "backlog_surplus": -1354480.8262
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
      "source": "ResInvoicedYTDResults-2026-11-03.csv",
      "format": "per-invoice",
      "aggregatedOnly": false,
      "totalInvoiced": 82511408.68999997,
      "invoiceCount": 4618,
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
        12270613.159999998,
        27609.91,
        0
      ],
      "byBranch": {
        "Greenville": {
          "invoiced": 1952908.6300000001,
          "count": 149
        },
        "Richmond": {
          "invoiced": 4067671.4600000004,
          "count": 235
        },
        "DC Metro": {
          "invoiced": 6037968.349999999,
          "count": 342
        },
        "Cleveland": {
          "invoiced": 6741363.95,
          "count": 423
        },
        "Nashville": {
          "invoiced": 6460616.030000001,
          "count": 303
        },
        "Columbus": {
          "invoiced": 31614485.35,
          "count": 1679
        },
        "Dayton": {
          "invoiced": 4128465.33,
          "count": 246
        },
        "Cincinnati": {
          "invoiced": 4101503.320000001,
          "count": 239
        },
        "Detroit": {
          "invoiced": 11241125.749999998,
          "count": 597
        },
        "Raleigh": {
          "invoiced": 2825922.8799999994,
          "count": 200
        },
        "Knoxville": {
          "invoiced": 2701765.9299999992,
          "count": 167
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
      "latestInvoiceDate": "2026-11-02",
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
          "invoiced": 12270613.159999998,
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
      "totalJobs": 690,
      "totalWOs": 1057,
      "portfolioValue": 17347434.95,
      "avgDaysInStatus": 22,
      "lastBuild": "2026-11-03T14:04:20.414Z"
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
        "value": "690",
        "sub": "1,057 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "246",
        "sub": "35.7% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "444",
        "sub": "64.3% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "88",
        "sub": "35.8% of In Progress",
        "tone": "crit"
      },
      {
        "label": "Avg Days in Status",
        "value": "22",
        "sub": "Job-level average",
        "tone": "warn"
      },
      {
        "label": "Total Portfolio Value",
        "value": "$17.35M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$5.00M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$2.82M",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "88",
        "sub": "35.8% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$2.82M",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "104",
        "sub": "Across 88 jobs",
        "tone": "info"
      },
      {
        "label": "RTS Ready Today",
        "value": "37",
        "sub": "No blocker, dispatch now",
        "tone": "good"
      },
      {
        "label": "Top Trailing Trade",
        "value": "Gutters",
        "sub": "62 open WOs / 62 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "366",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "164",
        "sub": "44.8% of all holds",
        "tone": "warn"
      },
      {
        "label": "Pending Sales",
        "value": "25",
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
        "value": "106",
        "sub": "Reps with at least one open WO",
        "tone": "info"
      },
      {
        "label": "Stuck Value >30d",
        "value": "$5.00M",
        "sub": "Sum of stale value across all reps",
        "tone": "crit"
      },
      {
        "label": "Reps with Stuck Work",
        "value": "66",
        "sub": "Reps carrying any >30d WO",
        "tone": "warn"
      },
      {
        "label": "Top Stuck Rep",
        "value": "$428K",
        "sub": "Highest single-rep stuck value",
        "tone": "warn"
      }
    ],
    "kpisBacklog": [
      {
        "label": "Not Started Jobs",
        "value": "444",
        "sub": "64.3% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$9.77M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "189d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Columbus",
        "sub": "159 jobs (35.8% of backlog)",
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
          "New"
        ],
        "datasets": [
          {
            "label": "Work Orders",
            "data": [
              366,
              269,
              250,
              109,
              35,
              27,
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
          "Richmond",
          "DC Metro",
          "Dayton",
          "Nashville",
          "Raleigh",
          "Greenville",
          "Knoxville",
          "Grand Rapids"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              43,
              43,
              6,
              4,
              2,
              3,
              4,
              2,
              1,
              0,
              0,
              1
            ]
          },
          {
            "label": "Open",
            "data": [
              27,
              14,
              5,
              3,
              5,
              2,
              2,
              5,
              0,
              0,
              0,
              0
            ]
          },
          {
            "label": "On Hold",
            "data": [
              139,
              104,
              41,
              18,
              11,
              22,
              4,
              15,
              5,
              4,
              0,
              3
            ]
          },
          {
            "label": "RTS",
            "data": [
              85,
              61,
              42,
              22,
              20,
              3,
              17,
              3,
              7,
              2,
              6,
              1
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              123,
              30,
              28,
              18,
              12,
              10,
              5,
              6,
              6,
              4,
              4,
              4
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
          "New"
        ],
        "datasets": [
          {
            "label": "Avg Days",
            "data": [
              49,
              27,
              26,
              21,
              13,
              2,
              0
            ]
          },
          {
            "label": "Max Days",
            "data": [
              239,
              378,
              91,
              189,
              77,
              27,
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
          "Metal",
          "Windows",
          "Skylights",
          "Flat Roof",
          "GAF Solar",
          "Masonry",
          "Stucco",
          "Electrical",
          "Carpentry",
          "Other",
          "Painting"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              94,
              6,
              7,
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
              0,
              0
            ]
          },
          {
            "label": "Open",
            "data": [
              354,
              344,
              153,
              29,
              16,
              16,
              16,
              5,
              4,
              3,
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
          "Ready to Schedule",
          "On Hold",
          "Scheduled",
          "Requires Additional Service",
          "In Progress"
        ],
        "datasets": [
          {
            "label": "WOs",
            "data": [
              37,
              32,
              26,
              6,
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
              18,
              7,
              14,
              32,
              19,
              14
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
          "Cincinnati",
          "DC Metro",
          "Richmond",
          "Nashville",
          "Raleigh",
          "Dayton",
          "Knoxville",
          "Greenville",
          "Grand Rapids"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              159,
              77,
              73,
              35,
              24,
              19,
              17,
              13,
              10,
              9,
              5,
              3
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
            417,
            43,
            139,
            85,
            123,
            14,
            13,
            49,
            270,
            6997028.86
          ],
          [
            "Cleveland",
            252,
            43,
            104,
            61,
            30,
            8,
            6,
            29,
            140,
            3237748.61
          ],
          [
            "Detroit Metro",
            122,
            6,
            41,
            42,
            28,
            4,
            1,
            30,
            91,
            2256017.37
          ],
          [
            "Cincinnati",
            65,
            4,
            18,
            22,
            18,
            1,
            2,
            12,
            45,
            940321.99
          ],
          [
            "Richmond",
            50,
            2,
            11,
            20,
            12,
            3,
            2,
            9,
            28,
            1089019.91
          ],
          [
            "DC Metro",
            40,
            3,
            22,
            3,
            10,
            1,
            1,
            12,
            33,
            758811.65
          ],
          [
            "Dayton",
            32,
            4,
            4,
            17,
            5,
            1,
            0,
            2,
            21,
            353642.8
          ],
          [
            "Nashville",
            31,
            2,
            15,
            3,
            6,
            3,
            2,
            14,
            24,
            1071622.85
          ],
          [
            "Raleigh",
            19,
            1,
            5,
            7,
            6,
            0,
            0,
            2,
            16,
            273056.37
          ],
          [
            "Greenville",
            10,
            0,
            4,
            2,
            4,
            0,
            0,
            3,
            7,
            96958.42
          ],
          [
            "Knoxville",
            10,
            0,
            0,
            6,
            4,
            0,
            0,
            1,
            10,
            149432.09
          ],
          [
            "Grand Rapids",
            9,
            1,
            3,
            1,
            4,
            0,
            0,
            1,
            5,
            123774.03
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
            161,
            16,
            378
          ],
          [
            "Pending Material",
            159,
            34,
            221
          ],
          [
            "Pending Sales",
            25,
            30,
            111
          ],
          [
            "Homeowner Request",
            15,
            61,
            161
          ],
          [
            "Pending HOA",
            5,
            16,
            40
          ],
          [
            "(no sub-status)",
            1,
            11,
            11
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
            62,
            62,
            1646211.68
          ],
          [
            "Siding",
            23,
            23,
            760824.41
          ],
          [
            "Roofing",
            5,
            5,
            182080.44
          ],
          [
            "Metal",
            5,
            5,
            252852.47
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
            130
          ],
          [
            "Scheduled",
            112
          ],
          [
            "On Hold",
            102
          ],
          [
            "Completed",
            6
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
            448,
            94,
            354,
            443,
            12560857.13
          ],
          [
            "Gutters",
            350,
            6,
            344,
            349,
            8540451.19
          ],
          [
            "Siding",
            160,
            7,
            153,
            160,
            3467944.51
          ],
          [
            "Rack Mounted Solar",
            29,
            0,
            29,
            24,
            927706.05
          ],
          [
            "Metal",
            17,
            1,
            16,
            17,
            908090.02
          ],
          [
            "Windows",
            16,
            0,
            16,
            16,
            178361.18
          ],
          [
            "Skylights",
            16,
            0,
            16,
            16,
            321096.28
          ],
          [
            "Flat Roof",
            5,
            0,
            5,
            5,
            118652.68
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
            "Masonry",
            3,
            0,
            3,
            3,
            71867
          ],
          [
            "Stucco",
            3,
            0,
            3,
            2,
            67679.04
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
            "Carpentry",
            2,
            0,
            2,
            2,
            256096.83
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
            17
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
            43,
            18,
            428279.73,
            38,
            2
          ],
          [
            "Justin Koenig",
            18,
            8,
            284513.84,
            11,
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
            "Frank Butts",
            33,
            19,
            186502.74,
            15,
            1
          ],
          [
            "Richard Rice",
            6,
            6,
            179999,
            1,
            1
          ],
          [
            "Mark Younce",
            15,
            11,
            175118,
            4,
            2
          ],
          [
            "Derrick Sieber",
            7,
            6,
            173822,
            4,
            1
          ],
          [
            "Jake Ross",
            28,
            15,
            169414.69,
            11,
            1
          ],
          [
            "Tyler Sponseller",
            25,
            15,
            168546.43,
            10,
            1
          ],
          [
            "Frank Drummond",
            23,
            19,
            166110.15,
            10,
            1
          ],
          [
            "Brian Ogrin",
            18,
            12,
            129898.42,
            5,
            1
          ],
          [
            "Caleb Severance",
            20,
            11,
            124848.83,
            7,
            1
          ],
          [
            "Clay Hastings",
            25,
            17,
            122000.96,
            5,
            1
          ],
          [
            "Matt Henry",
            26,
            16,
            119802.45,
            7,
            8
          ],
          [
            "Storm Drumm",
            26,
            16,
            113331.47,
            12,
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
            159,
            3728707.72,
            189
          ],
          [
            "Detroit Metro",
            77,
            1799766.3,
            161
          ],
          [
            "Cleveland",
            73,
            1583669.51,
            103
          ],
          [
            "Cincinnati",
            35,
            710929.6,
            50
          ],
          [
            "DC Metro",
            24,
            392400.4,
            140
          ],
          [
            "Richmond",
            19,
            583746.91,
            40
          ],
          [
            "Nashville",
            17,
            361997.29,
            53
          ],
          [
            "Raleigh",
            13,
            232695.78,
            103
          ],
          [
            "Dayton",
            10,
            99745,
            35
          ],
          [
            "Knoxville",
            9,
            129708.45,
            6
          ],
          [
            "Greenville",
            5,
            82293.36,
            7
          ],
          [
            "Grand Rapids",
            3,
            68801.93,
            35
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
            189,
            5800
          ],
          [
            "Job-107178",
            "Damien Pakula",
            "Detroit Metro",
            "Roofing",
            "Homeowner Request",
            "Gary Benedict Jr",
            161,
            13597
          ],
          [
            "Job-115035",
            "Erik Steensen",
            "DC Metro",
            "GAF Solar",
            "Pending Material",
            "Derrick Sieber",
            140,
            59822
          ],
          [
            "Job-112457",
            "Michelle  Pullens",
            "Columbus",
            "Siding",
            "Homeowner Request",
            "Mark Daggett",
            130,
            27000
          ],
          [
            "Job-116908",
            "Corey and Shemika Hamilton",
            "Raleigh",
            "Gutters",
            "",
            "Trevor Frazier",
            103,
            11805.8
          ],
          [
            "Job-117302",
            "Marcia Williams",
            "Cleveland",
            "Gutters",
            "Pending Material",
            "Jake Ross",
            103,
            19654.5
          ],
          [
            "Job-117309",
            "Eddie Black",
            "Cleveland",
            "Siding",
            "Pending Material",
            "Frank Butts",
            102,
            16713.23
          ],
          [
            "Job-118348",
            "Angie & MIke Fleshman",
            "Columbus",
            "Siding",
            "Pending Sales",
            "Frank Drummond",
            85,
            2608
          ],
          [
            "Job-118681",
            "Roger Nolan",
            "Columbus",
            "Skylights",
            "Pending Material",
            "Frank Drummond",
            83,
            7506
          ],
          [
            "Job-118981",
            "Jill Townsend",
            "Cleveland",
            "Siding",
            "Pending Material",
            "Mike Stack",
            78,
            27895.44
          ],
          [
            "Job-118734",
            "Mindi Burkette",
            "DC Metro",
            "Roofing",
            "",
            "David Poole",
            77,
            15829
          ],
          [
            "Job-117442",
            "Joseph George",
            "Detroit Metro",
            "GAF Solar",
            "Pending Material",
            "Richard Rice",
            76,
            179999
          ],
          [
            "Job-118731",
            "Kaitlyn Valis",
            "DC Metro",
            "Roofing",
            "Homeowner Request",
            "David Poole",
            76,
            9833
          ],
          [
            "Job-118669",
            "Ephriam King",
            "DC Metro",
            "Roofing",
            "",
            "Stephen Harmon",
            75,
            21119
          ],
          [
            "Job-119479",
            "Louis Mallis",
            "Cleveland",
            "Siding",
            "Pending Material",
            "Tyler Sponseller",
            71,
            13944.87
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Columbus",
          "permits": 49
        },
        {
          "branch": "Detroit Metro",
          "permits": 30
        },
        {
          "branch": "Cleveland",
          "permits": 29
        },
        {
          "branch": "Nashville",
          "permits": 14
        },
        {
          "branch": "Cincinnati",
          "permits": 12
        },
        {
          "branch": "DC Metro",
          "permits": 12
        },
        {
          "branch": "Richmond",
          "permits": 9
        },
        {
          "branch": "Greenville",
          "permits": 3
        },
        {
          "branch": "Dayton",
          "permits": 2
        },
        {
          "branch": "Raleigh",
          "permits": 2
        },
        {
          "branch": "Knoxville",
          "permits": 1
        },
        {
          "branch": "Grand Rapids",
          "permits": 1
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $2.82M of trapped partial-job revenue into billable revenue, reduce $5.00M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Dispatch the 37 RTS WOs sitting on partial jobs. No blocker, no hold, just dispatch.",
        "Re-dispatch the 27 RAS WOs (oldest at 91 days). These are pure re-work fastballs.",
        "Gutters sweep: 62 open WOs across 62 partial jobs blocking $1.65M. Highest single-trade leverage in the book.",
        "Columbus permit sweep: 49 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one.",
        "Close out the 14 zombie jobs (all WOs Completed, parent still In Progress). Pure paperwork."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Gutters): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 444 jobs ($9.77M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $2.82M, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  }
};
