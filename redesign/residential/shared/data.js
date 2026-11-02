/* AUTO-GENERATED — do not edit. Generated 2026-11-02T17:33:48.950Z (residential) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-11-02T17:33:48.950Z",
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
        "elapsedMs": 185,
        "builtAt": "2026-11-02T17:33:48.950Z"
      },
      {
        "id": "sales-overview",
        "version": "1.0-rules-encoded",
        "elapsedMs": 809,
        "builtAt": "2026-11-02T17:33:48.950Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 2125,
        "builtAt": "2026-11-02T17:33:48.950Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 30,
        "builtAt": "2026-11-02T17:33:48.950Z"
      }
    ]
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 06, 2026 - Nov 02, 2026 - De-Duplicated at Job Level - 4,198 Jobs - 14 Markets - 33 PMs",
    "generated": "2026-11-02",
    "headerMeta": {
      "trueRevenue": 81137872.95,
      "uniqueJobs": 4198,
      "markets": 14,
      "pms": 33,
      "medianComplete": 27.7,
      "avgStart": 26.4,
      "multiTradeJobs": 1434,
      "singleTradeJobs": 2764,
      "multiTradePct": 34.2,
      "lastBuild": "2026-11-02T17:33:48.950Z"
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
        "value": "$81.14M",
        "sub": "4,198 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$19,328",
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
        "value": "1,434",
        "sub": "34.2% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "2,764",
        "sub": "65.8% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$24,192",
        "sub": "+44.0% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$16,804",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+20.8d",
        "sub": "MT 42.6d vs ST 21.8d"
      }
    ],
    "monthly": [
      {
        "m": "2026-01",
        "label": "January",
        "key": "2026-01",
        "rev": 3275604.18,
        "jobs": 147,
        "med": 46.8,
        "start": 25.4
      },
      {
        "m": "2026-02",
        "label": "February",
        "key": "2026-02",
        "rev": 2694605.54,
        "jobs": 139,
        "med": 32.7,
        "start": 33.2
      },
      {
        "m": "2026-03",
        "label": "March",
        "key": "2026-03",
        "rev": 5913056.86,
        "jobs": 335,
        "med": 23.7,
        "start": 34.3
      },
      {
        "m": "2026-04",
        "label": "April",
        "key": "2026-04",
        "rev": 7878201.39,
        "jobs": 442,
        "med": 17.7,
        "start": 25.2
      },
      {
        "m": "2026-05",
        "label": "May",
        "key": "2026-05",
        "rev": 8377996.95,
        "jobs": 459,
        "med": 21.9,
        "start": 22.2
      },
      {
        "m": "2026-06",
        "label": "June",
        "key": "2026-06",
        "rev": 11029046.94,
        "jobs": 556,
        "med": 28.7,
        "start": 24.5
      },
      {
        "m": "2026-07",
        "label": "July",
        "key": "2026-07",
        "rev": 10681299.57,
        "jobs": 536,
        "med": 30.6,
        "start": 27
      },
      {
        "m": "2026-08",
        "label": "August",
        "key": "2026-08",
        "rev": 9084567.23,
        "jobs": 451,
        "med": 29.7,
        "start": 26.9
      },
      {
        "m": "2026-09",
        "label": "September",
        "key": "2026-09",
        "rev": 9372427.08,
        "jobs": 484,
        "med": 28.8,
        "start": 26.3
      },
      {
        "m": "2026-10",
        "label": "October",
        "key": "2026-10",
        "rev": 12163036.13,
        "jobs": 619,
        "med": 32.6,
        "start": 27.2
      },
      {
        "m": "2026-11",
        "label": "November",
        "key": "2026-11",
        "rev": 668031.08,
        "jobs": 30,
        "med": 31.4,
        "start": 19.9
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
              668031.08
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
              30
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
              46.8,
              32.7,
              23.7,
              17.7,
              21.9,
              28.7,
              30.6,
              29.7,
              28.8,
              32.6,
              31.4
            ]
          },
          {
            "label": "Avg Days to Start",
            "data": [
              25.4,
              33.2,
              34.3,
              25.2,
              22.2,
              24.5,
              27,
              26.9,
              26.3,
              27.2,
              19.9
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
              1434
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              2764
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
              93,
              88,
              83,
              29,
              22,
              21,
              16
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
          "Dayton",
          "Richmond",
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
              45.5,
              31.4,
              39.4,
              27.2,
              27.9,
              36.5,
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
          "Dayton",
          "Richmond",
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
              47.8,
              44.8,
              54.6,
              21.9,
              22.8,
              41.7,
              38.4,
              31.7,
              34.8,
              26.9,
              26.8,
              59.7,
              64.8,
              346.9
            ]
          },
          {
            "label": "ST Median",
            "data": [
              21.7,
              24.7,
              30.6,
              18.9,
              14.7,
              23.6,
              22.7,
              13.7,
              19.8,
              17.7,
              16.8,
              35.8,
              20.8,
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
          "Dayton",
          "Richmond",
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
              31019108.31,
              11268644.95,
              6590455.42,
              6340558.81,
              5356438.05,
              4045608,
              3978316.34,
              3958300.87,
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
          "Dayton",
          "Richmond",
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
              29.8,
              29.7,
              39.7,
              20.6,
              18.9,
              27.8,
              25.8,
              19.7,
              21.8,
              21.2,
              21.6,
              45.7,
              44.7,
              346.9
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
              3657360.32,
              3653618.72,
              3507684.13,
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
          "Mike Scott",
          "Michael McLaughlin",
          "Justin Milliron",
          "Chris Atkins",
          "Spencer Boyette"
        ],
        "datasets": [
          {
            "label": "PMs",
            "data": [
              {
                "x": 31.9,
                "y": 6845946.44,
                "wos": 440,
                "name": "Mason Bryant"
              },
              {
                "x": 29.6,
                "y": 6648253.1,
                "wos": 410,
                "name": "Eric Isakov"
              },
              {
                "x": 33.7,
                "y": 5474574.52,
                "wos": 374,
                "name": "Richard Williams"
              },
              {
                "x": 33.6,
                "y": 5044563.49,
                "wos": 309,
                "name": "Landon Little"
              },
              {
                "x": 32.9,
                "y": 4357419.33,
                "wos": 249,
                "name": "Brandon Skrzypek"
              },
              {
                "x": 29.8,
                "y": 4131671.73,
                "wos": 330,
                "name": "Joseph Yager"
              },
              {
                "x": 33.7,
                "y": 4087004.81,
                "wos": 475,
                "name": "Drew Bailey"
              },
              {
                "x": 19.9,
                "y": 3657360.32,
                "wos": 266,
                "name": "Alex Dubanoski"
              },
              {
                "x": 35.6,
                "y": 3653618.72,
                "wos": 356,
                "name": "Jason Andrews-INACTIVE"
              },
              {
                "x": 43.2,
                "y": 3507684.13,
                "wos": 349,
                "name": "Shawn Oehlstrom"
              },
              {
                "x": 19.6,
                "y": 2870877.77,
                "wos": 211,
                "name": "Alejandro Alvarado"
              },
              {
                "x": 22.6,
                "y": 2811343.12,
                "wos": 212,
                "name": "Kaden Carter"
              },
              {
                "x": 20.2,
                "y": 2674148.21,
                "wos": 235,
                "name": "Galo Munive"
              },
              {
                "x": 24.8,
                "y": 2650286.97,
                "wos": 150,
                "name": "Brady Weingartner"
              },
              {
                "x": 23.7,
                "y": 2483522.89,
                "wos": 138,
                "name": "Brandon Harter"
              },
              {
                "x": 19.1,
                "y": 2417106.63,
                "wos": 129,
                "name": "Abraham Santiago"
              },
              {
                "x": 20.7,
                "y": 2402784.15,
                "wos": 184,
                "name": "Joseph Jones"
              },
              {
                "x": 27.6,
                "y": 2318623.32,
                "wos": 145,
                "name": "Malik Ford"
              },
              {
                "x": 42.6,
                "y": 2218012.42,
                "wos": 160,
                "name": "Joshua Collins"
              },
              {
                "x": 58.2,
                "y": 1722713.55,
                "wos": 154,
                "name": "Daniel Galli"
              },
              {
                "x": 19.6,
                "y": 1558366.94,
                "wos": 111,
                "name": "Adam Marrero-INACTIVE"
              },
              {
                "x": 21.6,
                "y": 1469499.7,
                "wos": 132,
                "name": "Michael Blevins"
              },
              {
                "x": 35.7,
                "y": 1179069.54,
                "wos": 72,
                "name": "Levi Nieman - INACTIVE"
              },
              {
                "x": 28.7,
                "y": 975444.28,
                "wos": 68,
                "name": "Austin Weingartner-INACTIVE"
              },
              {
                "x": 56.8,
                "y": 645165.49,
                "wos": 58,
                "name": "Chad Williams"
              },
              {
                "x": 36.3,
                "y": 583162,
                "wos": 67,
                "name": "(Unassigned)"
              },
              {
                "x": 25.7,
                "y": 535023.76,
                "wos": 24,
                "name": "Cody Mitchell-INACTIVE"
              },
              {
                "x": 33.7,
                "y": 425038.81,
                "wos": 25,
                "name": "Neil Laux"
              },
              {
                "x": 57.7,
                "y": 390272.67,
                "wos": 53,
                "name": "Mike Scott"
              },
              {
                "x": 99.2,
                "y": 378266,
                "wos": 34,
                "name": "Michael McLaughlin"
              },
              {
                "x": 69.3,
                "y": 330247.7,
                "wos": 36,
                "name": "Justin Milliron"
              },
              {
                "x": 56.2,
                "y": 217677.15,
                "wos": 34,
                "name": "Chris Atkins"
              },
              {
                "x": 15.8,
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
              58624314.63,
              13778428.27,
              4428751.9,
              954580.92,
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
              27.7,
              36.6,
              52.8,
              70.6,
              59.8,
              66.7,
              77.3,
              49.1,
              63.7,
              42.2,
              39.7,
              35.9,
              71.6,
              50.2,
              50.6,
              39.7,
              84.6,
              67.8
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
              1319,
              1092,
              512,
              316,
              314,
              286,
              237,
              68,
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
              30.8,
              24.8,
              23.8,
              24.7,
              30.8,
              24.9,
              31.6,
              37.6,
              127.8,
              34.2,
              39.7,
              47.7,
              42.7
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
              37.9,
              31.7,
              29.1,
              33.9,
              36.6,
              31.8,
              31.6,
              42.6,
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
                "x": 30.8,
                "y": 19718.46,
                "jobs": 1319,
                "name": "Brandon Vera"
              },
              {
                "x": 24.8,
                "y": 19964.2,
                "jobs": 1092,
                "name": "David Schwan"
              },
              {
                "x": 23.8,
                "y": 17094.36,
                "jobs": 512,
                "name": "Amanda Wade - INACTIVE"
              },
              {
                "x": 24.7,
                "y": 19349.06,
                "jobs": 316,
                "name": "Allison Webb"
              },
              {
                "x": 30.8,
                "y": 18910.51,
                "jobs": 314,
                "name": "Bradley Essex - INACTIVE"
              },
              {
                "x": 24.9,
                "y": 19446.24,
                "jobs": 286,
                "name": "Ethan Wolfe"
              },
              {
                "x": 31.6,
                "y": 17907.95,
                "jobs": 237,
                "name": "Thomas Hayes"
              },
              {
                "x": 37.6,
                "y": 17754.7,
                "jobs": 68,
                "name": "Bruce Lemon Jr."
              },
              {
                "x": 127.8,
                "y": 27851.14,
                "jobs": 23,
                "name": "Morgan Valois"
              },
              {
                "x": 34.2,
                "y": 30956.79,
                "jobs": 20,
                "name": "Brenda Dixon-INACTIVE"
              },
              {
                "x": 39.7,
                "y": 25382.56,
                "jobs": 9,
                "name": "Kayla Wright"
              },
              {
                "x": 47.7,
                "y": 16913.44,
                "jobs": 1,
                "name": "Jeff Craft"
              },
              {
                "x": 42.7,
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
            1569,
            31019108.31,
            19769.99,
            29.8,
            28.8,
            34.4,
            47.8,
            21.7
          ],
          [
            "Detroit Metro",
            592,
            11268644.95,
            19034.87,
            29.7,
            33.3,
            30.2,
            44.8,
            24.7
          ],
          [
            "Cleveland",
            369,
            6590455.42,
            17860.31,
            39.7,
            35.4,
            45.5,
            54.6,
            30.6
          ],
          [
            "Nashville",
            277,
            6340558.81,
            22890.1,
            20.6,
            19.8,
            31.4,
            21.9,
            18.9
          ],
          [
            "DC Metro",
            287,
            5356438.05,
            18663.55,
            18.9,
            19.7,
            39.4,
            22.8,
            14.7
          ],
          [
            "Cincinnati",
            213,
            4045608,
            18993.46,
            27.8,
            23.4,
            27.2,
            41.7,
            23.6
          ],
          [
            "Dayton",
            215,
            3978316.34,
            18503.8,
            25.8,
            21.3,
            27.9,
            38.4,
            22.7
          ],
          [
            "Richmond",
            200,
            3958300.87,
            19791.5,
            19.7,
            15.9,
            36.5,
            31.7,
            13.7
          ],
          [
            "Raleigh",
            159,
            2737197.58,
            17215.08,
            21.8,
            21.4,
            23.3,
            34.8,
            19.8
          ],
          [
            "Knoxville",
            150,
            2620183.81,
            17467.89,
            21.2,
            15.5,
            34,
            26.9,
            17.7
          ],
          [
            "Greenville",
            102,
            1963754.25,
            19252.49,
            21.6,
            17.7,
            39.2,
            26.8,
            16.8
          ],
          [
            "Grand Rapids",
            35,
            616943.8,
            17626.97,
            45.7,
            36.4,
            42.9,
            59.7,
            35.8
          ],
          [
            "NOVA",
            29,
            608668.35,
            20988.56,
            44.7,
            24.7,
            41.4,
            64.8,
            20.8
          ],
          [
            "Greensboro",
            1,
            33694.41,
            33694.41,
            346.9,
            38.8,
            100,
            346.9,
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
            31.9,
            25.3
          ],
          [
            "Eric Isakov",
            410,
            339,
            6648253.1,
            16215.25,
            29.6,
            25.6
          ],
          [
            "Richard Williams",
            374,
            339,
            5474574.52,
            14637.9,
            33.7,
            29.7
          ],
          [
            "Landon Little",
            309,
            279,
            5044563.49,
            16325.45,
            33.6,
            28.7
          ],
          [
            "Brandon Skrzypek",
            249,
            243,
            4357419.33,
            17499.68,
            32.9,
            31.7
          ],
          [
            "Joseph Yager",
            330,
            264,
            4131671.73,
            12520.22,
            29.8,
            22
          ],
          [
            "Drew Bailey",
            475,
            435,
            4087004.81,
            8604.22,
            33.7,
            26.7
          ],
          [
            "Alex Dubanoski",
            266,
            196,
            3657360.32,
            13749.47,
            19.9,
            16.4
          ],
          [
            "Jason Andrews-INACTIVE",
            356,
            297,
            3653618.72,
            10262.97,
            35.6,
            35.9
          ],
          [
            "Shawn Oehlstrom",
            349,
            260,
            3507684.13,
            10050.67,
            43.2,
            36.9
          ],
          [
            "Alejandro Alvarado",
            211,
            156,
            2870877.77,
            13606.06,
            19.6,
            17.8
          ],
          [
            "Kaden Carter",
            212,
            167,
            2811343.12,
            13261.05,
            22.6,
            21.8
          ],
          [
            "Galo Munive",
            235,
            180,
            2674148.21,
            11379.35,
            20.2,
            21.5
          ],
          [
            "Brady Weingartner",
            150,
            140,
            2650286.97,
            17668.58,
            24.8,
            23.2
          ],
          [
            "Brandon Harter",
            138,
            108,
            2483522.89,
            17996.54,
            23.7,
            20.5
          ],
          [
            "Abraham Santiago",
            129,
            106,
            2417106.63,
            18737.26,
            19.1,
            19.5
          ],
          [
            "Joseph Jones",
            184,
            141,
            2402784.15,
            13058.61,
            20.7,
            15.3
          ],
          [
            "Malik Ford",
            145,
            139,
            2318623.32,
            15990.51,
            27.6,
            29.7
          ],
          [
            "Joshua Collins",
            160,
            159,
            2218012.42,
            13862.58,
            42.6,
            31.8
          ],
          [
            "Daniel Galli",
            154,
            124,
            1722713.55,
            11186.45,
            58.2,
            42.8
          ],
          [
            "Adam Marrero-INACTIVE",
            111,
            90,
            1558366.94,
            14039.34,
            19.6,
            18.9
          ],
          [
            "Michael Blevins",
            132,
            89,
            1469499.7,
            11132.57,
            21.6,
            17.9
          ],
          [
            "Levi Nieman - INACTIVE",
            72,
            71,
            1179069.54,
            16375.97,
            35.7,
            40.7
          ],
          [
            "Austin Weingartner-INACTIVE",
            68,
            65,
            975444.28,
            14344.77,
            28.7,
            22.9
          ],
          [
            "Chad Williams",
            58,
            40,
            645165.49,
            11123.54,
            56.8,
            20.6
          ],
          [
            "(Unassigned)",
            67,
            60,
            583162,
            8703.91,
            36.3,
            32.6
          ],
          [
            "Cody Mitchell-INACTIVE",
            24,
            21,
            535023.76,
            22292.66,
            25.7,
            21.4
          ],
          [
            "Neil Laux",
            25,
            22,
            425038.81,
            17001.55,
            33.7,
            28
          ],
          [
            "Mike Scott",
            53,
            52,
            390272.67,
            7363.64,
            57.7,
            33.8
          ],
          [
            "Michael McLaughlin",
            34,
            34,
            378266,
            11125.47,
            99.2,
            63.9
          ],
          [
            "Justin Milliron",
            36,
            32,
            330247.7,
            9173.55,
            69.3,
            51.7
          ],
          [
            "Chris Atkins",
            34,
            30,
            217677.15,
            6402.27,
            56.2,
            44.2
          ],
          [
            "Spencer Boyette",
            5,
            5,
            86316.31,
            17263.26,
            15.8,
            17.3
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
            3788,
            58624314.63,
            15476.32,
            27.7
          ],
          [
            "Gutters",
            1454,
            13778428.27,
            9476.22,
            36.6
          ],
          [
            "Siding",
            445,
            4428751.9,
            9952.25,
            52.8
          ],
          [
            "Metal",
            57,
            954580.92,
            16747.03,
            70.6
          ],
          [
            "Masonry",
            79,
            898893.9,
            11378.4,
            59.8
          ],
          [
            "Windows",
            65,
            680950.48,
            10476.16,
            66.7
          ],
          [
            "GAF Solar",
            6,
            406662.67,
            67777.11,
            77.3
          ],
          [
            "Painting",
            28,
            378440.79,
            13515.74,
            49.1
          ],
          [
            "Rack Mounted Solar",
            29,
            304096.92,
            10486.1,
            63.7
          ],
          [
            "Flat Roof",
            24,
            229606.39,
            9566.93,
            42.2
          ],
          [
            "Electrical",
            18,
            209645.05,
            11646.95,
            39.7
          ],
          [
            "Carpentry",
            9,
            88777.9,
            9864.21,
            35.9
          ],
          [
            "Other",
            9,
            75751.57,
            8416.84,
            71.6
          ],
          [
            "Stucco",
            4,
            37248.17,
            9312.04,
            50.2
          ],
          [
            "Skylights",
            3,
            23709.23,
            7903.08,
            50.6
          ],
          [
            "Insulation",
            1,
            10924.5,
            10924.5,
            39.7
          ],
          [
            "Unspecified",
            1,
            4786.5,
            4786.5,
            84.6
          ],
          [
            "Door",
            1,
            2303.15,
            2303.15,
            67.8
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
            1319,
            26008654.99,
            19718.46,
            "30.8d",
            "27.2d",
            37.9,
            19718.46
          ],
          [
            "David Schwan",
            1092,
            21800904.1,
            19964.2,
            "24.8d",
            "24.5d",
            31.7,
            19964.2
          ],
          [
            "Amanda Wade - INACTIVE",
            512,
            8752314.84,
            17094.36,
            "23.8d",
            "28.7d",
            29.1,
            17094.36
          ],
          [
            "Allison Webb",
            316,
            6114302.56,
            19349.06,
            "24.7d",
            "19.3d",
            33.9,
            19349.06
          ],
          [
            "Bradley Essex - INACTIVE",
            314,
            5937900.19,
            18910.51,
            "30.8d",
            "29.9d",
            36.6,
            18910.51
          ],
          [
            "Ethan Wolfe",
            286,
            5561624.31,
            19446.24,
            "24.9d",
            "20.1d",
            31.8,
            19446.24
          ],
          [
            "Thomas Hayes",
            237,
            4244184.01,
            17907.95,
            "31.6d",
            "32.6d",
            31.6,
            17907.95
          ],
          [
            "Bruce Lemon Jr.",
            68,
            1207319.4,
            17754.7,
            "37.6d",
            "28.1d",
            42.6,
            17754.7
          ],
          [
            "Morgan Valois",
            23,
            640576.32,
            27851.14,
            "127.8d",
            "103.8d",
            56.5,
            27851.14
          ],
          [
            "Brenda Dixon-INACTIVE",
            20,
            619135.73,
            30956.79,
            "34.2d",
            "31.5d",
            30,
            30956.79
          ],
          [
            "Kayla Wright",
            9,
            228443.06,
            25382.56,
            "39.7d",
            "15.1d",
            33.3,
            25382.56
          ],
          [
            "Jeff Craft",
            1,
            16913.44,
            16913.44,
            "47.7d",
            "45.5d",
            0,
            16913.44
          ],
          [
            "Brandi Cordray",
            1,
            5600,
            5600,
            "42.7d",
            "26.6d",
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
            134,
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
            1319
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
            3,
            68
          ],
          [
            "David Schwan",
            15,
            18,
            424,
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
            1092
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
            369,
            1569,
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
            200,
            4198
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Michael McLaughlin: 34 WOs, $378K revenue, 99.2-day median complete, top-volume PM with the slowest cycle in the network.",
        "Multi-trade penalty is severe in 1 markets: NOVA MT 64.8d vs ST 20.8d.",
        "Days to Start averages 26.4 days company-wide and 36.4 days in Grand Rapids (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [
        "Gutters-only work runs at 36.6-day median complete versus 27.7 days for roofing, 32% slower cycle on the lowest-priced trade."
      ],
      "positivesToBuildOn": [
        "October delivered $12.16M across 619 invoiced jobs at 32.6-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "DC Metro hits 18.9-day median complete and a $18,664 average contract on 287 jobs.",
        "Multi-trade jobs carry a $24,192 average contract versus $16,804 for single-trade, a 44% revenue lift per job.",
        "Nashville is the best-balanced market: 20.6-day median complete, 31.4% multi-trade attach, $22,890 average contract on 277 jobs."
      ]
    }
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-11-25",
    "ytdDays": 306,
    "rowCount": 5435,
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
        "value": "$93.71M",
        "sub": "5,435 signed contracts across 13 markets"
      },
      {
        "label": "Sold",
        "value": "$91.38M",
        "sub": "5,319 deals | 97.9% of signed contracts"
      },
      {
        "label": "Production Review",
        "value": "$2.02M",
        "sub": "94 deals | Ops Review, PM Review, Contracted"
      },
      {
        "label": "Kicked Back",
        "value": "$210K",
        "sub": "13 deals | 0.2% of signed contracts",
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
        "value": "$17,242",
        "sub": "Median: $16,024 | Install avg: $19,625"
      },
      {
        "label": "Organization",
        "value": "180 Reps",
        "sub": "13 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$111.78M",
        "sub": "Based on 306 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "86.0% / 13.9%",
        "sub": "4,676 installs | 755 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 5319,
        "amount": 91382958.6
      },
      {
        "label": "Production Review",
        "count": 94,
        "amount": 2016710.93
      },
      {
        "label": "Kicked Back",
        "count": 13,
        "amount": 210484.12
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
        "count": 177,
        "amount": 3162697.21,
        "installs": 158,
        "repairs": 19,
        "avgDeal": 17868,
        "repairPct": 10.7,
        "installAvg": 19883,
        "repairAvg": 1113
      },
      {
        "key": "2026-02",
        "label": "February",
        "count": 234,
        "amount": 4094334.27,
        "installs": 197,
        "repairs": 37,
        "avgDeal": 17497,
        "repairPct": 15.8,
        "installAvg": 20508,
        "repairAvg": 1469
      },
      {
        "key": "2026-03",
        "label": "March",
        "count": 519,
        "amount": 7313053.65,
        "installs": 407,
        "repairs": 112,
        "avgDeal": 14091,
        "repairPct": 21.6,
        "installAvg": 17450,
        "repairAvg": 1884
      },
      {
        "key": "2026-04",
        "label": "April",
        "count": 785,
        "amount": 12519237.49,
        "installs": 682,
        "repairs": 103,
        "avgDeal": 15948,
        "repairPct": 13.1,
        "installAvg": 18108,
        "repairAvg": 1649
      },
      {
        "key": "2026-05",
        "label": "May",
        "count": 642,
        "amount": 11740642.96,
        "installs": 574,
        "repairs": 68,
        "avgDeal": 18288,
        "repairPct": 10.6,
        "installAvg": 20178,
        "repairAvg": 2332
      },
      {
        "key": "2026-06",
        "label": "June",
        "count": 616,
        "amount": 10929499.26,
        "installs": 541,
        "repairs": 75,
        "avgDeal": 17743,
        "repairPct": 12.2,
        "installAvg": 19870,
        "repairAvg": 2400
      },
      {
        "key": "2026-07",
        "label": "July",
        "count": 589,
        "amount": 10951735.08,
        "installs": 507,
        "repairs": 82,
        "avgDeal": 18594,
        "repairPct": 13.9,
        "installAvg": 21147,
        "repairAvg": 2809
      },
      {
        "key": "2026-08",
        "label": "August",
        "count": 644,
        "amount": 11488612.76,
        "installs": 561,
        "repairs": 83,
        "avgDeal": 17839,
        "repairPct": 12.9,
        "installAvg": 20018,
        "repairAvg": 3113
      },
      {
        "key": "2026-09",
        "label": "September",
        "count": 671,
        "amount": 11246918.68,
        "installs": 576,
        "repairs": 95,
        "avgDeal": 16761,
        "repairPct": 14.2,
        "installAvg": 19074,
        "repairAvg": 2740
      },
      {
        "key": "2026-10",
        "label": "October",
        "count": 556,
        "amount": 10230907.43,
        "installs": 471,
        "repairs": 81,
        "avgDeal": 18401,
        "repairPct": 14.6,
        "installAvg": 20867,
        "repairAvg": 4047
      },
      {
        "key": "2026-11",
        "label": "November",
        "count": 2,
        "amount": 35132.99,
        "installs": 2,
        "repairs": 0,
        "avgDeal": 17566,
        "repairPct": 0,
        "installAvg": 17566,
        "repairAvg": 0
      }
    ],
    "jobTypeMixByMonth": {
      "Retail-No Financing": {
        "2026-01": 1323966.72,
        "2026-02": 1798437.6,
        "2026-03": 3151206.7,
        "2026-04": 4923931.54,
        "2026-05": 4338338.67,
        "2026-06": 4059951.45,
        "2026-07": 4813500.07,
        "2026-08": 4985167.42,
        "2026-09": 4317073.53,
        "2026-10": 3201888.76,
        "2026-11": 0
      },
      "Insurance": {
        "2026-01": 1371874.69,
        "2026-02": 1686849.5,
        "2026-03": 2992266.39,
        "2026-04": 6281679.12,
        "2026-05": 6266007.67,
        "2026-06": 5878471.9,
        "2026-07": 4672528.99,
        "2026-08": 4630270.97,
        "2026-09": 4795683.22,
        "2026-10": 4095268.26,
        "2026-11": 25599.99
      },
      "Retail-Financing": {
        "2026-01": 466855.8,
        "2026-02": 609047.17,
        "2026-03": 1129503.56,
        "2026-04": 1292231.83,
        "2026-05": 1078890.5,
        "2026-06": 957787.91,
        "2026-07": 1369260.63,
        "2026-08": 1838787.1,
        "2026-09": 1810933.39,
        "2026-10": 1373569.87,
        "2026-11": 0
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Insurance",
        "count": 2055,
        "amount": 42696500.7,
        "avg": 20777
      },
      {
        "jobType": "Retail-No Financing",
        "count": 2712,
        "amount": 36913462.46,
        "avg": 13611
      },
      {
        "jobType": "Retail-Financing",
        "count": 557,
        "amount": 11926867.76,
        "avg": 21413
      }
    ],
    "weeklyTrend": [
      {
        "w": 1,
        "count": 2,
        "amount": 72707.99
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
        "count": 143,
        "amount": 2601794.46
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
        "count": 139,
        "amount": 2440546.54
      },
      {
        "w": 43,
        "count": 135,
        "amount": 2545534.09
      },
      {
        "w": 44,
        "count": 80,
        "amount": 1559417.98
      },
      {
        "w": 45,
        "count": 4,
        "amount": 79489.99
      },
      {
        "w": 48,
        "count": 1,
        "amount": 9533
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
          36185759.1,
          1993,
          18156,
          1717,
          276,
          13.8,
          10
        ],
        [
          "Detroit Metro",
          13176995.87,
          809,
          16288,
          673,
          136,
          16.8,
          5
        ],
        [
          "Cleveland",
          10391080.7,
          621,
          16733,
          534,
          83,
          13.4,
          16
        ],
        [
          "Nashville",
          6389614,
          356,
          17948,
          278,
          78,
          21.9,
          5
        ],
        [
          "DC Metro",
          5774492.22,
          391,
          14769,
          304,
          87,
          22.3,
          9
        ],
        [
          "Richmond",
          5138967.96,
          233,
          22056,
          223,
          10,
          4.3,
          26
        ],
        [
          "Cincinnati",
          4692478.32,
          284,
          16523,
          255,
          29,
          10.2,
          6
        ],
        [
          "Dayton",
          4160503.16,
          249,
          16709,
          221,
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
          "opps": 3512,
          "soldAmt": 20728044.73,
          "closePct": 40.8,
          "nsli": 5902
        },
        {
          "branch": "Detroit",
          "opps": 1569,
          "soldAmt": 9761766.07,
          "closePct": 41.8,
          "nsli": 6222
        },
        {
          "branch": "Cleveland",
          "opps": 1174,
          "soldAmt": 6056322.94,
          "closePct": 34.3,
          "nsli": 5159
        },
        {
          "branch": "DC Metro",
          "opps": 964,
          "soldAmt": 3708991.69,
          "closePct": 31.4,
          "nsli": 3848
        },
        {
          "branch": "Cincinnati",
          "opps": 762,
          "soldAmt": 3405287.3,
          "closePct": 30.7,
          "nsli": 4469
        },
        {
          "branch": "Nashville",
          "opps": 547,
          "soldAmt": 3311663.99,
          "closePct": 41.7,
          "nsli": 6054
        },
        {
          "branch": "Dayton",
          "opps": 451,
          "soldAmt": 2080563.85,
          "closePct": 30.8,
          "nsli": 4613
        },
        {
          "branch": "Raleigh",
          "opps": 399,
          "soldAmt": 1410688.82,
          "closePct": 31.8,
          "nsli": 3536
        },
        {
          "branch": "Richmond",
          "opps": 163,
          "soldAmt": 1242008.92,
          "closePct": 42.3,
          "nsli": 7620
        },
        {
          "branch": "Greenville",
          "opps": 203,
          "soldAmt": 1101493.36,
          "closePct": 33.5,
          "nsli": 5426
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
        "opps": 10005,
        "soldAmt": 54077982.35,
        "closePct": 37.5,
        "nsli": 5405
      },
      "source": "Closing Percent By Branch-2026-11-02-12-29-39.xlsx",
      "format": "per-opportunity"
    },
    "marketKickbacks": [
      {
        "market": "Columbus",
        "kicked": 3,
        "kickedAmount": 12115.17
      },
      {
        "market": "Cleveland",
        "kicked": 2,
        "kickedAmount": 64582.45
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
        "market": "Raleigh",
        "kicked": 2,
        "kickedAmount": 34029
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
        "amount": 2091459.63,
        "count": 105,
        "avg": 19919,
        "medDays": 11,
        "jt": {
          "Retail-No Financing": 96,
          "Insurance": 4,
          "Retail-Financing": 4
        },
        "installs": 95,
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
          "Retail-No Financing": 67,
          "Retail-Financing": 15,
          "Insurance": 6
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
        "name": "Michael Conley-INACTIVE",
        "amount": 1562618.27,
        "count": 91,
        "avg": 17172,
        "medDays": 15,
        "jt": {
          "Retail-No Financing": 34,
          "Insurance": 47,
          "Retail-Financing": 9
        },
        "installs": 85,
        "repairs": 6
      },
      {
        "name": "Derrick Sieber",
        "amount": 1560100.69,
        "count": 104,
        "avg": 15001,
        "medDays": 10,
        "jt": {
          "Retail-No Financing": 64,
          "Retail-Financing": 4,
          "Insurance": 34
        },
        "installs": 72,
        "repairs": 32
      },
      {
        "name": "Matthew Ross",
        "amount": 1499652.56,
        "count": 89,
        "avg": 16850,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 67,
          "Insurance": 2,
          "Retail-Financing": 19
        },
        "installs": 76,
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
        "name": "Frank Butts",
        "amount": 1392524.58,
        "count": 101,
        "avg": 13787,
        "medDays": 11,
        "jt": {
          "Retail-No Financing": 44,
          "Insurance": 52,
          "Retail-Financing": 2
        },
        "installs": 91,
        "repairs": 9
      },
      {
        "name": "Matt Busch",
        "amount": 1386560,
        "count": 84,
        "avg": 16507,
        "medDays": 4,
        "jt": {
          "Retail-No Financing": 55,
          "Retail-Financing": 11,
          "Insurance": 15
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
        "deals": 75,
        "pct": 41.3
      },
      {
        "name": "Luke Duquette",
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
          "count": 2538
        },
        {
          "label": "Retail-Fin",
          "median": 3,
          "mean": 15,
          "count": 544
        },
        {
          "label": "Insurance",
          "median": 27,
          "mean": 63,
          "count": 1921
        },
        {
          "label": "Repair",
          "median": 3,
          "mean": 14,
          "count": 699
        },
        {
          "label": "Install",
          "median": 10,
          "mean": 41,
          "count": 4402
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
          "count": 341
        },
        {
          "market": "Detroit Metro",
          "median": 5,
          "mean": 22,
          "count": 770
        },
        {
          "market": "Cincinnati",
          "median": 6,
          "mean": 25,
          "count": 281
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
          "mean": 45,
          "count": 373
        },
        {
          "market": "Columbus",
          "median": 10,
          "mean": 39,
          "count": 1828
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
          "count": 562
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
      "recent4WkAvg": 1048493.77
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
          "liveActual": 11740642.96
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
      "generatedAt": "2026-11-02T09:04:29-05:00",
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
            "amount": 7452235,
            "convertPct": 92.6,
            "lands": 6900646,
            "note": "Already installing. Needs completion and billing only."
          },
          {
            "label": "Not Started",
            "amount": 9815215,
            "convertPct": 81,
            "lands": 7948854,
            "note": "Sold and processed, awaiting schedule. Throughput decides this."
          },
          {
            "label": "Sold Not Processed",
            "amount": 2170671,
            "convertPct": 81,
            "lands": 1757918,
            "note": "Signed but not yet a job. Processing delay is pure lost time."
          }
        ],
        "alreadySoldLands": 16607419,
        "mustBeNewlySoldNet": 24921730,
        "mustBeNewlySoldGross": 51115673,
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
        "backlogTotal": 19438121,
        "perDay": 114130,
        "perWeek": 577635,
        "leverageCurve": [
          {
            "daysBeforeYearEnd": 61,
            "onDate": "10/31/2026",
            "worthPerDay": 114130
          },
          {
            "daysBeforeYearEnd": 60,
            "onDate": "11/01/2026",
            "worthPerDay": 67458
          },
          {
            "daysBeforeYearEnd": 45,
            "onDate": "11/16/2026",
            "worthPerDay": 108044
          },
          {
            "daysBeforeYearEnd": 30,
            "onDate": "12/01/2026",
            "worthPerDay": 201474
          },
          {
            "daysBeforeYearEnd": 21,
            "onDate": "12/10/2026",
            "worthPerDay": 363390
          },
          {
            "daysBeforeYearEnd": 14,
            "onDate": "12/17/2026",
            "worthPerDay": 445892
          },
          {
            "daysBeforeYearEnd": 7,
            "onDate": "12/24/2026",
            "worthPerDay": 535553
          }
        ],
        "strandedBacklog": 2830702,
        "completedAwaitingInvoice": {
          "total": 1628347,
          "jobs": 68,
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
              "jobs": 36,
              "amount": 1020579
            },
            {
              "reason": "Ready to Invoice",
              "jobs": 16,
              "amount": 351016
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
        "requiredPerWeek": 5679519,
        "demonstratedPerWeek": 2680761,
        "liftRequiredPct": 111.9,
        "trendPerWeek": -25054
      },
      "scenarios": [
        {
          "name": "Hold current pace",
          "weeklySales": 2680761,
          "newSalesRevenue": 11763177,
          "landsAt": 110798341,
          "note": "Trailing 4-week average, carried flat."
        },
        {
          "name": "Stretch +15%",
          "weeklySales": 3082875,
          "newSalesRevenue": 13527654,
          "landsAt": 112562818,
          "note": "Ambitious but inside what the team has produced before."
        },
        {
          "name": "Required to hit plan",
          "weeklySales": 5679519,
          "newSalesRevenue": 24921730,
          "landsAt": 123956895,
          "note": "What closing the full gap by selling alone would take."
        }
      ],
      "modelComparison": {
        "v5FullYear": 94947414,
        "paceLandingZone": 110798341,
        "note": "V5 is the forecast of record. The pace landing zone runs higher because these conversion rates are drawn from jobs that did invoice and because V5 also carries a declining sales trend."
      },
      "verdict": {
        "band": "not-reachable",
        "headline": "Plan is not reachable by selling alone. Closing the gap needs a production pull-forward, a budget reset, or both.",
        "reasons": [
          "Required $5,679,519/wk against a demonstrated $2,680,761/wk, a 112% lift.",
          "Sales are trending down $25,054 per week, not flat.",
          "After 11/14/2026, under 75% of what is sold still invoices this year.",
          "$16,607,419 of the gap is already sold and needs production, not selling."
        ]
      }
    },
    "commentary": {
      "whatsWorking": [
        "Sales Trajectory: Monthly sales moved from January $3.16M to November $35K (-99%). Annualized run rate: $111.78M.",
        "Premium Deal Types: Insurance averages $20,777 per deal. Retail-Financing averages $21,413 (highest per-deal value). Retail-No Financing averages $13,611 (the volume engine).",
        "Sold Conversion: 5,319 of 5,435 signed contracts (97.9%) have made it to Sold status for $91.38M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Kickback Concentration: Columbus has the most kickbacks (3, $12K). Total company kickbacks: 13 worth $210K.",
        "Production Review Queue: 94 deals worth $2.02M sitting in Production Review. Watch for backlog growth, it delays revenue recognition."
      ],
      "criticalRisks": [
        "Columbus Kickback Concentration drives the company's largest single-market rework volume.",
        "Pipeline kickbacks company-wide: 13 kickbacks totaling $210K.",
        "Production Review backlog: 94 deals ($2.02M)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 4d median close on 3,082 retail deals.",
        "Insurance Density: $20,777 avg on 2,055 deals = $42.70M; +20% lift = ~$8.54M.",
        "November repair rate at 0.0% vs YTD 13.9%, correction in latest month.",
        "Financing Lifts Ticket: Retail-Financing averages $21,413, highest per-deal value."
      ],
      "fixList": [
        "Columbus Pipeline Kickback Intervention, pull every kickback and categorize root cause.",
        "Production Review Bottleneck, 94 deals; add temporary PM capacity.",
        "Financing Push, 557 financing deals YTD (10.2%) at $21,413 avg. Target 15% mix."
      ],
      "actionPlan": {
        "thisWeek": [
          "Columbus Pipeline Kickback Review, meet with branch leadership.",
          "Production Review Surge Plan, 94 deals ($2.02M) in queue."
        ],
        "thisMonth": [
          "Supplement Escalation SOP, 7/14/30 day cadence with carrier escalation.",
          "Completed-to-Billing SLA, 100% invoiced within 21 days.",
          "Repair Triage Pilot in markets where repair rate exceeds 25%.",
          "Financing Training, peer training led by top financing reps. Target 15% mix."
        ],
        "thisQuarter": [
          "Add Kickback Reason field to accounting workflow.",
          "Repair Business Decision, 755 repairs YTD at ~$2,479 avg.",
          "Ops Capacity Planning, November hit 2 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "title": "Residential Revenue Forecast",
    "subtitle": "V5 Model with Job Type Analysis · Data as of October 31, 2026",
    "runDate": "October 31, 2026",
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
        "value": "$91.6M",
        "sub": "Jobs processed into system"
      },
      {
        "label": "Invoiced YTD",
        "value": "$82.43M",
        "sub": "NetSuite AR · 4615 invoices booked"
      },
      {
        "label": "4-Week Avg Weekly Sales",
        "value": "$2.7M",
        "sub": "Trend: -25,054/week"
      },
      {
        "label": "Current Week (Projected)",
        "value": "$2.2M",
        "sub": "WTD: $1.8M"
      },
      {
        "label": "Annual Forecast",
        "value": "$110M",
        "sub": "Model invoiced revenue"
      },
      {
        "label": "Annual Budget",
        "value": "$125.9M",
        "sub": "Board plan · full year"
      },
      {
        "label": "Forecast vs Budget",
        "value": "-$15.9M",
        "sub": "12.6% under plan"
      },
      {
        "label": "Active Pipeline",
        "value": "$19.5M",
        "sub": "Backlog + IP + SNP"
      }
    ],
    "execSummary": {
      "budget": 125890005.2103,
      "modelAnnualInvoiced": 110009533.339,
      "gap": 15880471.8713,
      "narrative": "The V5 model projects $110M in annual invoiced revenue against a $125.9M plan. The challenge is timing, not volume: Q1 ramped slowly so Q2 invoicing will lag. If the current weekly pace of $2.7M holds, H2 should catch up as earlier sales convert to invoiced revenue."
    },
    "monthRevenue": {
      "april": {
        "invoiced": 8405959.810000002,
        "wipChange": -7032146.3,
        "netRevenue": 1373813.5100000026,
        "beginningWip": 7032146.3,
        "endingWip": 0,
        "materialCost": 3986339.4235,
        "laborCost": 2386424.2932,
        "grossProfit": -3475634.3967,
        "grossMarginPct": -119.9682
      },
      "may": {
        "invoiced": 8564976.120000001,
        "wipChange": 0,
        "netRevenue": 8564976.120000001,
        "beginningWip": 0,
        "endingWip": 0,
        "materialCost": 1745277.1277,
        "laborCost": 1044811.1145,
        "grossProfit": 9424471.7677,
        "grossMarginPct": 77.1577
      }
    },
    "weeklyTargetsHeader": {
      "avgWeeklyNeed": 2342988.5295,
      "recent4WkAvg": 2680760.5275,
      "gap": 0,
      "productionAvgWeeklyNeed": 2591858.9713,
      "productionCycleStart": 13,
      "productionCycleComplete": 8,
      "productionTotalCycle": 21
    },
    "budgetRecoveryHeader": {
      "fullYearBudget": 125890005.2103,
      "gap": 19394451.1547,
      "upliftPct": 1.3,
      "aprilGap": 137895.2651,
      "q1OriginalBudget": 89469741.5096,
      "q1Actual": 70213185.62,
      "q1Shortfall": 19256555.8896,
      "recoveryRatio": 1.8438
    },
    "profitabilitySummary": {
      "combinedGP": 62391943.82,
      "combinedGP_pct": 40.3721,
      "combinedRevenue": 154542238.62,
      "y2025_GP_pct": 41.5339,
      "y2025_revenue": 73967604.11,
      "y2025_jobs": 3482,
      "y2026_GP_pct": 39.3056,
      "y2026_revenue": 80574634.51,
      "y2026_jobs": 4154,
      "materialCost": 57410972.01,
      "laborCost": 34369110.04,
      "commissions": 13129969.71,
      "materialPctContract": 37.149,
      "laborPctContract": 22.2393,
      "commissionPctContract": 8.496
    },
    "pipelineSnapshot": {
      "stages": [
        {
          "label": "New Sales",
          "subtitle": "101 jobs · 4d avg",
          "value": 2019514.32,
          "jobs": 101,
          "color": "#3b82f6",
          "byMarket": [
            {
              "market": "Cleveland",
              "jobs": 25,
              "value": 562870.21
            },
            {
              "market": "Detroit Metro",
              "jobs": 24,
              "value": 496917.12
            },
            {
              "market": "Columbus",
              "jobs": 16,
              "value": 344542.54
            },
            {
              "market": "Cincinnati",
              "jobs": 10,
              "value": 170769
            },
            {
              "market": "DC Metro",
              "jobs": 10,
              "value": 162536.67
            },
            {
              "market": "Nashville",
              "jobs": 5,
              "value": 89717
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
              "market": "Richmond",
              "jobs": 2,
              "value": 37245.5
            },
            {
              "market": "Greenville",
              "jobs": 1,
              "value": 8673.28
            }
          ],
          "avgDays": 3.9,
          "medianDays": 3
        },
        {
          "label": "Backlog",
          "subtitle": "450 jobs · 28d avg",
          "value": 9808714.22,
          "jobs": 450,
          "color": "#f97316",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 175,
              "value": 4143409.04
            },
            {
              "market": "Detroit Metro",
              "jobs": 74,
              "value": 1639641.3
            },
            {
              "market": "Cleveland",
              "jobs": 74,
              "value": 1568267.1
            },
            {
              "market": "Cincinnati",
              "jobs": 35,
              "value": 695965.6
            },
            {
              "market": "Richmond",
              "jobs": 21,
              "value": 542648.25
            },
            {
              "market": "DC Metro",
              "jobs": 22,
              "value": 362937.54
            },
            {
              "market": "Raleigh",
              "jobs": 14,
              "value": 248717.64
            },
            {
              "market": "Nashville",
              "jobs": 11,
              "value": 229075.29
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
              "jobs": 4,
              "value": 73620.08
            },
            {
              "market": "Grand Rapids",
              "jobs": 3,
              "value": 68801.93
            }
          ],
          "avgDays": 28.5,
          "medianDays": 18
        },
        {
          "label": "In Progress",
          "subtitle": "251 jobs",
          "value": 7628020.33,
          "jobs": 251,
          "color": "#22c55e",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 108,
              "value": 3134670.87
            },
            {
              "market": "Cleveland",
              "jobs": 68,
              "value": 1697459.34
            },
            {
              "market": "Nashville",
              "jobs": 7,
              "value": 709625.56
            },
            {
              "market": "Detroit Metro",
              "jobs": 18,
              "value": 527883.07
            },
            {
              "market": "Richmond",
              "jobs": 10,
              "value": 516448.65
            },
            {
              "market": "DC Metro",
              "jobs": 11,
              "value": 426415.16
            },
            {
              "market": "Dayton",
              "jobs": 10,
              "value": 251095.38
            },
            {
              "market": "Cincinnati",
              "jobs": 9,
              "value": 218392.39
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
              "jobs": 2,
              "value": 33532.16
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
          "subtitle": "72 jobs",
          "value": 1647689.26,
          "jobs": 72,
          "color": "#a855f7",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 34,
              "value": 744281.86
            },
            {
              "market": "Richmond",
              "jobs": 13,
              "value": 406250.88
            },
            {
              "market": "Cleveland",
              "jobs": 11,
              "value": 240785
            },
            {
              "market": "DC Metro",
              "jobs": 4,
              "value": 92052.24
            },
            {
              "market": "Knoxville",
              "jobs": 4,
              "value": 68125.62
            },
            {
              "market": "Cincinnati",
              "jobs": 3,
              "value": 63724.53
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
      "totalJobs": 874,
      "totalValue": 21103938.13
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
            21103938.13,
            10113960.9,
            7293977.3543,
            -907747.7057
          ],
          [
            "May 2026",
            14117621.6688,
            21103938.13,
            11714245.78,
            9767666.4168,
            -4349955.252
          ],
          [
            "Jun 2026",
            14800571.2162,
            21103938.13,
            11842012.17,
            11605928.1666,
            -3194643.0496
          ],
          [
            "Jul 2026",
            11641331.0926,
            21103938.13,
            11745730.89,
            9185484.015,
            -2455847.0776
          ],
          [
            "Aug 2026",
            12738223.8858,
            21103938.13,
            10139440.83,
            12660696.8531,
            -77527.0327
          ],
          [
            "Sep 2026",
            13673037.2551,
            21103938.13,
            14362847.99,
            5530747.5702,
            -8142289.6849
          ],
          [
            "Oct 2026",
            13483638.9808,
            21103938.13,
            14014669.6438,
            13426766.9686,
            -56872.0122
          ],
          [
            "Nov 2026",
            12392297.9669,
            27775048.9658,
            11708587.9615,
            12150283.5407,
            -242014.4262
          ],
          [
            "Dec 2026",
            7988852.274,
            9838967.8572,
            8556694.5111,
            8289610.2195,
            300757.9455
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
            21103938.13,
            7498212.1043,
            907747.7057,
            10113960.9
          ],
          [
            "May 2026",
            21103938.13,
            9868653.0334,
            0,
            11714245.78
          ],
          [
            "Jun 2026",
            21103938.13,
            10997769.9242,
            90653.3858,
            11842012.17
          ],
          [
            "Jul 2026",
            21103938.13,
            11394961.6274,
            0,
            11745730.89
          ],
          [
            "Aug 2026",
            21103938.13,
            10718023.5499,
            0,
            10139440.83
          ],
          [
            "Sep 2026",
            21103938.13,
            12562893.8702,
            0,
            14362847.99
          ],
          [
            "Oct 2026",
            21103938.13,
            6083208.1606,
            7481454.0732,
            14014669.6438
          ],
          [
            "Nov 2026",
            27775048.9658,
            2471457.2813,
            10315831.3463,
            11708587.9615
          ],
          [
            "Dec 2026",
            9838967.8572,
            1025863.4588,
            9042449.3805,
            8556694.5111
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
            14362847.99,
            14362847.99,
            14362847.99
          ],
          [
            "Oct 2026",
            11.3828,
            0,
            15970544.7548,
            17825458.4475
          ],
          [
            "Nov 2026",
            7.7142,
            0,
            10823326.1061,
            12080411.3279
          ],
          [
            "Dec 2026",
            2.7932,
            0,
            3918916.1947,
            4374082.341
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
            "Wk 10/25",
            5834975.2467,
            3164602.8228,
            2670372.4239
          ],
          [
            "Wk 11/01",
            5037338.2621,
            2732003.8577,
            2305334.4044
          ],
          [
            "Wk 11/08",
            5037338.2621,
            2732003.8577,
            2305334.4044
          ],
          [
            "Wk 11/15",
            5037338.2621,
            2732003.8577,
            2305334.4044
          ],
          [
            "Wk 11/22",
            5037338.2621,
            2732003.8577,
            2305334.4044
          ],
          [
            "Wk 11/29",
            3983925.1759,
            2160684.5487,
            1823240.6273
          ],
          [
            "Wk 12/06",
            3562559.9415,
            1932156.8251,
            1630403.1164
          ],
          [
            "Wk 12/13",
            3562559.9415,
            1932156.8251,
            1630403.1164
          ],
          [
            "Wk 12/20",
            3562559.9415,
            1932156.8251,
            1630403.1164
          ],
          [
            "Wk 12/27",
            2544685.6725,
            1380112.0179,
            1164573.6546
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
            23840.4129,
            18,
            1324.4674,
            40.3787,
            39098277.2
          ],
          [
            "Retail-Financing",
            21932.8185,
            19,
            1154.3589,
            60.2881,
            10659349.77
          ],
          [
            "Retail-No Financing",
            19121.3778,
            19,
            1006.3883,
            61.1233,
            34762664.92
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
            1640,
            23840.4129
          ],
          [
            "Retail-Financing",
            13,
            6,
            19,
            486,
            21932.8185
          ],
          [
            "Retail-No Financing",
            13,
            6,
            19,
            1818,
            19121.3778
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
            175,
            4143409.04
          ],
          [
            "Detroit Metro",
            74,
            1639641.3
          ],
          [
            "Cleveland",
            74,
            1568267.1
          ],
          [
            "Cincinnati",
            35,
            695965.6
          ],
          [
            "Richmond",
            21,
            542648.25
          ],
          [
            "DC Metro",
            22,
            362937.54
          ],
          [
            "Raleigh",
            14,
            248717.64
          ],
          [
            "Nashville",
            11,
            229075.29
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
            4,
            73620.08
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
            108,
            3134670.87
          ],
          [
            "Cleveland",
            68,
            1697459.34
          ],
          [
            "Nashville",
            7,
            709625.56
          ],
          [
            "Detroit Metro",
            18,
            527883.07
          ],
          [
            "Richmond",
            10,
            516448.65
          ],
          [
            "DC Metro",
            11,
            426415.16
          ],
          [
            "Dayton",
            10,
            251095.38
          ],
          [
            "Cincinnati",
            9,
            218392.39
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
            2,
            33532.16
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
            25,
            562870.21
          ],
          [
            "Detroit Metro",
            24,
            496917.12
          ],
          [
            "Columbus",
            16,
            344542.54
          ],
          [
            "Cincinnati",
            10,
            170769
          ],
          [
            "DC Metro",
            10,
            162536.67
          ],
          [
            "Nashville",
            5,
            89717
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
            "Richmond",
            2,
            37245.5
          ],
          [
            "Greenville",
            1,
            8673.28
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
            34,
            744281.86
          ],
          [
            "Richmond",
            13,
            406250.88
          ],
          [
            "Cleveland",
            11,
            240785
          ],
          [
            "DC Metro",
            4,
            92052.24
          ],
          [
            "Knoxville",
            4,
            68125.62
          ],
          [
            "Cincinnati",
            3,
            63724.53
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
            1107042.4733,
            47.2492
          ],
          [
            "Retail-No Financing",
            926354.2958,
            39.5373
          ],
          [
            "Retail-Financing",
            309591.7604,
            13.2135
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
            1259685.1943,
            53.764
          ],
          [
            "Gutters",
            899300.7734,
            38.3826
          ],
          [
            "Siding",
            56772.9929,
            2.4231
          ],
          [
            "Rack Mounted Solar",
            23389.837,
            0.9983
          ],
          [
            "Metal",
            22860.882,
            0.9757
          ],
          [
            "Flat Roof",
            17332.8749,
            0.7398
          ],
          [
            "GAF Solar",
            17124.3998,
            0.7309
          ],
          [
            "Masonry",
            15140.5165,
            0.6462
          ],
          [
            "Painting",
            9586.4456,
            0.4092
          ],
          [
            "Carpentry",
            9020.8466,
            0.385
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
            "Wk 10/25",
            "Oct",
            3164602.8228
          ],
          [
            "Wk 11/01",
            "Nov",
            2732003.8577
          ],
          [
            "Wk 11/08",
            "Nov",
            2732003.8577
          ],
          [
            "Wk 11/15",
            "Nov",
            2732003.8577
          ],
          [
            "Wk 11/22",
            "Nov",
            2732003.8577
          ],
          [
            "Wk 11/29",
            "Nov",
            2160684.5487
          ],
          [
            "Wk 12/06",
            "Dec",
            1932156.8251
          ],
          [
            "Wk 12/13",
            "Dec",
            1932156.8251
          ],
          [
            "Wk 12/20",
            "Dec",
            1932156.8251
          ],
          [
            "Wk 12/27",
            "Dec",
            1380112.0179
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
              2429453.71,
              2413450.54,
              2499267.27,
              2189900.982,
              2515918.437,
              2490864.2701,
              2465810.1032,
              2440755.9363,
              2415701.7694,
              2390647.6025,
              2365593.4356,
              2340539.2687,
              2315485.1018
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
              7293977.3543,
              9767666.4168,
              11605928.1666,
              9185484.015,
              12660696.8531,
              5530747.5702,
              13426766.9686,
              12150283.5407,
              8289610.2195
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
              14362847.99,
              14014669.6438,
              11708587.9615,
              8556694.5111
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
              3078329.4843,
              3091370.4128,
              4458207.3776,
              7498212.1043,
              9868653.0334,
              10997769.9242,
              11394961.6274,
              10718023.5499,
              12562893.8702,
              13426766.9686,
              12545274.2014,
              10369070.7848
            ]
          },
          {
            "label": "From Known Sales",
            "data": [
              3078329.4843,
              3091370.4128,
              4458207.3776,
              7498212.1043,
              9868653.0334,
              10997769.9242,
              11394961.6274,
              10718023.5499,
              12562893.8702,
              6083208.1606,
              2471457.2813,
              1025863.4588
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
              39.7364,
              13.5526,
              10.5907,
              6.8176,
              6.4347,
              5.2595,
              4.9075,
              4.4225,
              2.8006,
              2.6816
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
              40.3787,
              30.8491,
              16.6158,
              6.7196,
              2.6268,
              1.405
            ]
          },
          {
            "label": "Retail-Financing",
            "data": [
              60.2881,
              28.1893,
              7.6132,
              1.2346,
              1.0288,
              0.4115
            ]
          },
          {
            "label": "Retail-No Financing",
            "data": [
              61.1233,
              25.6057,
              7.2687,
              2.9736,
              1.4317,
              0.8811
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
      13564662.2337,
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
      13426766.9686,
      12545274.2014,
      10369070.7848
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
      6083208.1606,
      2471457.2813,
      1025863.4588
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
      14362847.99,
      14014669.6438,
      11708587.9615,
      8556694.5111
    ],
    "backlogData": [
      {
        "month": "Jan 2026",
        "total_backlog": 21103938.13,
        "wip_est": 9275709.59,
        "not_started": 11828228.54,
        "budget_rev": 3312733.06,
        "pipeline_backlog": 21103938.13,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 3078329.4843,
        "revenue_gap": 234403.5757,
        "adjusted_required_sales": 3257140.76,
        "backlog_surplus": 17846797.37
      },
      {
        "month": "Feb 2026",
        "total_backlog": 21103938.13,
        "wip_est": 9275709.59,
        "not_started": 11828228.54,
        "budget_rev": 2855781.11,
        "pipeline_backlog": 21103938.13,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 3091370.4128,
        "revenue_gap": 0,
        "adjusted_required_sales": 3101368.34,
        "backlog_surplus": 18002569.79
      },
      {
        "month": "Mar 2026",
        "total_backlog": 21103938.13,
        "wip_est": 9275709.59,
        "not_started": 11828228.54,
        "budget_rev": 6228299.34,
        "pipeline_backlog": 21103938.13,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 4458207.3776,
        "revenue_gap": 1770091.9624,
        "adjusted_required_sales": 5679200.03,
        "backlog_surplus": 15424738.1
      },
      {
        "month": "Apr 2026",
        "total_backlog": 21103938.13,
        "wip_est": 9275709.59,
        "not_started": 11828228.54,
        "budget_rev": 8405959.81,
        "pipeline_backlog": 21103938.13,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 7498212.1043,
        "revenue_gap": 907747.7057,
        "adjusted_required_sales": 10113960.9,
        "backlog_surplus": 10989977.23
      },
      {
        "month": "May 2026",
        "total_backlog": 21103938.13,
        "wip_est": 12662362.878,
        "not_started": 8441575.252,
        "budget_rev": 8564976.12,
        "pipeline_backlog": 21103938.13,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 9868653.0334,
        "revenue_gap": 0,
        "adjusted_required_sales": 11714245.78,
        "backlog_surplus": 9389692.35
      },
      {
        "month": "Jun 2026",
        "total_backlog": 21103938.13,
        "wip_est": 12662362.878,
        "not_started": 8441575.252,
        "budget_rev": 11088423.31,
        "pipeline_backlog": 21103938.13,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 10997769.9242,
        "revenue_gap": 90653.3858,
        "adjusted_required_sales": 11842012.17,
        "backlog_surplus": 9261925.96
      },
      {
        "month": "Jul 2026",
        "total_backlog": 21103938.13,
        "wip_est": 12662362.878,
        "not_started": 8441575.252,
        "budget_rev": 10676120.9,
        "pipeline_backlog": 21103938.13,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 11394961.6274,
        "revenue_gap": 0,
        "adjusted_required_sales": 11745730.89,
        "backlog_surplus": 9358207.24
      },
      {
        "month": "Aug 2026",
        "total_backlog": 21103938.13,
        "wip_est": 12662362.878,
        "not_started": 8441575.252,
        "budget_rev": 9151616.35,
        "pipeline_backlog": 21103938.13,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 10718023.5499,
        "revenue_gap": 0,
        "adjusted_required_sales": 10139440.83,
        "backlog_surplus": 10964497.3
      },
      {
        "month": "Sep 2026",
        "total_backlog": 21103938.13,
        "wip_est": 12662362.878,
        "not_started": 8441575.252,
        "budget_rev": 9929275.62,
        "pipeline_backlog": 21103938.13,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 12562893.8702,
        "revenue_gap": 0,
        "adjusted_required_sales": 14362847.99,
        "backlog_surplus": 6741090.14
      },
      {
        "month": "Oct 2026",
        "total_backlog": 21103938.13,
        "wip_est": 12662362.878,
        "not_started": 8441575.252,
        "budget_rev": 13564662.2337,
        "pipeline_backlog": 21103938.13,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 6083208.1606,
        "revenue_gap": 7481454.0732,
        "adjusted_required_sales": 14014669.6438,
        "backlog_surplus": 7089268.4862
      },
      {
        "month": "Nov 2026",
        "total_backlog": 27775048.9658,
        "wip_est": 16665029.3795,
        "not_started": 11110019.5863,
        "budget_rev": 12787288.6277,
        "pipeline_backlog": 21103938.13,
        "new_sales_backlog": 6671110.8358,
        "pipe_invoicing": 19570852.15,
        "future_invoicing": 5006782.71,
        "rev_from_backlog": 2471457.2813,
        "revenue_gap": 10315831.3463,
        "adjusted_required_sales": 11708587.9615,
        "backlog_surplus": 16066461.0043
      },
      {
        "month": "Dec 2026",
        "total_backlog": 9838967.8572,
        "wip_est": 5903380.7143,
        "not_started": 3935587.1429,
        "budget_rev": 10068312.8393,
        "pipeline_backlog": 1533085.98,
        "new_sales_backlog": 8305881.8772,
        "pipe_invoicing": 1515481.98,
        "future_invoicing": 9712915.41,
        "rev_from_backlog": 1025863.4588,
        "revenue_gap": 9042449.3805,
        "adjusted_required_sales": 8556694.5111,
        "backlog_surplus": 1282273.3461
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
      "source": "ResInvoicedYTDResults-2026-11-02.csv",
      "format": "per-invoice",
      "aggregatedOnly": false,
      "totalInvoiced": 82427745.62999997,
      "invoiceCount": 4615,
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
        12214560.009999998,
        0,
        0
      ],
      "byBranch": {
        "Greenville": {
          "invoiced": 1952908.6300000001,
          "count": 149
        },
        "Richmond": {
          "invoiced": 4041700.3200000003,
          "count": 235
        },
        "DC Metro": {
          "invoiced": 6037968.349999999,
          "count": 342
        },
        "Cleveland": {
          "invoiced": 6697269.640000001,
          "count": 421
        },
        "Nashville": {
          "invoiced": 6460616.030000001,
          "count": 303
        },
        "Columbus": {
          "invoiced": 31591627.35,
          "count": 1678
        },
        "Dayton": {
          "invoiced": 4128465.33,
          "count": 246
        },
        "Cincinnati": {
          "invoiced": 4101830.7100000014,
          "count": 239
        },
        "Detroit": {
          "invoiced": 11241125.749999998,
          "count": 597
        },
        "Raleigh": {
          "invoiced": 2834855.8799999994,
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
        9
      ],
      "latestInvoiceDate": "2026-10-31",
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
        }
      ]
    }
  },
  "BACKLOG": {
    "_source": "calculator/backlog.js v1.0-rules-encoded",
    "title": "Job Backlog & Production",
    "subtitle": "Live job-level backlog",
    "headerMeta": {
      "totalJobs": 695,
      "totalWOs": 1068,
      "portfolioValue": 17400805.47,
      "avgDaysInStatus": 22,
      "lastBuild": "2026-11-02T17:33:48.763Z"
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
        "value": "695",
        "sub": "1,068 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "251",
        "sub": "36.1% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "444",
        "sub": "63.9% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "92",
        "sub": "36.7% of In Progress",
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
        "value": "$17.40M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$5.17M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$2.98M",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "92",
        "sub": "36.7% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$2.98M",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "108",
        "sub": "Across 92 jobs",
        "tone": "info"
      },
      {
        "label": "RTS Ready Today",
        "value": "41",
        "sub": "No blocker, dispatch now",
        "tone": "good"
      },
      {
        "label": "Top Trailing Trade",
        "value": "Gutters",
        "sub": "64 open WOs / 64 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "371",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "161",
        "sub": "43.4% of all holds",
        "tone": "warn"
      },
      {
        "label": "Pending Sales",
        "value": "30",
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
        "value": "$5.17M",
        "sub": "Sum of stale value across all reps",
        "tone": "crit"
      },
      {
        "label": "Reps with Stuck Work",
        "value": "68",
        "sub": "Reps carrying any >30d WO",
        "tone": "warn"
      },
      {
        "label": "Top Stuck Rep",
        "value": "$465K",
        "sub": "Highest single-rep stuck value",
        "tone": "warn"
      }
    ],
    "kpisBacklog": [
      {
        "label": "Not Started Jobs",
        "value": "444",
        "sub": "63.9% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$9.84M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "188d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Columbus",
        "sub": "170 jobs (38.3% of backlog)",
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
              371,
              264,
              256,
              112,
              35,
              28,
              2
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
          "Knoxville",
          "Grand Rapids",
          "Greenville"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              45,
              44,
              6,
              4,
              2,
              3,
              4,
              2,
              1,
              0,
              1,
              0
            ]
          },
          {
            "label": "Open",
            "data": [
              19,
              17,
              7,
              3,
              5,
              5,
              2,
              6,
              0,
              1,
              0,
              0
            ]
          },
          {
            "label": "On Hold",
            "data": [
              148,
              106,
              38,
              19,
              15,
              21,
              5,
              8,
              5,
              1,
              3,
              2
            ]
          },
          {
            "label": "RTS",
            "data": [
              79,
              59,
              43,
              21,
              16,
              4,
              16,
              5,
              9,
              6,
              1,
              5
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              138,
              29,
              25,
              19,
              15,
              9,
              5,
              4,
              4,
              3,
              4,
              1
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
              48,
              27,
              27,
              22,
              13,
              2,
              0
            ]
          },
          {
            "label": "Max Days",
            "data": [
              238,
              377,
              90,
              188,
              76,
              26,
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
          "Metal",
          "Skylights",
          "Flat Roof",
          "GAF Solar",
          "Masonry",
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
              97,
              6,
              7,
              0,
              0,
              1,
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
              352,
              351,
              155,
              29,
              17,
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
              41,
              31,
              27,
              7,
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
              16,
              11,
              11,
              35,
              20,
              15
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
          "Raleigh",
          "Nashville",
          "Dayton",
          "Knoxville",
          "Greenville",
          "Grand Rapids"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              170,
              72,
              72,
              36,
              23,
              20,
              13,
              12,
              10,
              9,
              4,
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
            429,
            45,
            148,
            79,
            138,
            6,
            13,
            53,
            277,
            7153181.47
          ],
          [
            "Cleveland",
            255,
            44,
            106,
            59,
            29,
            10,
            7,
            29,
            142,
            3277925.97
          ],
          [
            "Detroit Metro",
            119,
            6,
            38,
            43,
            25,
            6,
            1,
            27,
            87,
            2172930.37
          ],
          [
            "Cincinnati",
            66,
            4,
            19,
            21,
            19,
            1,
            2,
            12,
            45,
            940321.99
          ],
          [
            "Richmond",
            53,
            2,
            15,
            16,
            15,
            3,
            2,
            11,
            31,
            1126880.08
          ],
          [
            "DC Metro",
            42,
            3,
            21,
            4,
            9,
            4,
            1,
            13,
            35,
            765219.79
          ],
          [
            "Dayton",
            32,
            4,
            5,
            16,
            5,
            1,
            0,
            3,
            21,
            353642.8
          ],
          [
            "Nashville",
            25,
            2,
            8,
            5,
            4,
            3,
            2,
            7,
            19,
            962346.85
          ],
          [
            "Raleigh",
            19,
            1,
            5,
            9,
            4,
            0,
            0,
            2,
            16,
            273056.37
          ],
          [
            "Knoxville",
            11,
            0,
            1,
            6,
            3,
            1,
            0,
            2,
            11,
            163240.61
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
          ],
          [
            "Greenville",
            8,
            0,
            2,
            5,
            1,
            0,
            0,
            1,
            6,
            88285.14
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
            "Pending Material",
            164,
            34,
            220
          ],
          [
            "Pending Permit",
            158,
            17,
            377
          ],
          [
            "Pending Sales",
            30,
            28,
            111
          ],
          [
            "Homeowner Request",
            13,
            63,
            160
          ],
          [
            "Pending HOA",
            5,
            15,
            39
          ],
          [
            "(no sub-status)",
            1,
            10,
            10
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
            64,
            64,
            1709497.23
          ],
          [
            "Siding",
            23,
            23,
            760824.41
          ],
          [
            "Roofing",
            6,
            6,
            218918.62
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
            "Carpentry",
            2,
            2,
            308442.83
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
            128
          ],
          [
            "Scheduled",
            113
          ],
          [
            "On Hold",
            106
          ],
          [
            "Completed",
            6
          ],
          [
            "In Progress",
            3
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
            449,
            97,
            352,
            443,
            12568250.28
          ],
          [
            "Gutters",
            357,
            6,
            351,
            356,
            8692384.24
          ],
          [
            "Siding",
            162,
            7,
            155,
            162,
            3496264.53
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
            "Windows",
            17,
            0,
            17,
            17,
            180636.18
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
            "Carpentry",
            3,
            0,
            3,
            3,
            324942.83
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
            67679.04
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
            45,
            19,
            465117.91,
            40,
            2
          ],
          [
            "Justin Koenig",
            18,
            8,
            284513.84,
            12,
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
            34,
            20,
            199298.24,
            17,
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
            8,
            7,
            173822,
            4,
            1
          ],
          [
            "Jake Ross",
            28,
            15,
            169414.69,
            12,
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
            24,
            20,
            166110.15,
            10,
            1
          ],
          [
            "Caleb Severance",
            24,
            13,
            146362.83,
            8,
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
            28,
            17,
            119463.47,
            14,
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
            170,
            4023710.6,
            188
          ],
          [
            "Cleveland",
            72,
            1565622.1,
            102
          ],
          [
            "Detroit Metro",
            72,
            1697736.3,
            160
          ],
          [
            "Cincinnati",
            36,
            721929.6,
            49
          ],
          [
            "DC Metro",
            23,
            365498.54,
            139
          ],
          [
            "Richmond",
            20,
            609224.25,
            39
          ],
          [
            "Raleigh",
            13,
            232695.78,
            53
          ],
          [
            "Nashville",
            12,
            252721.29,
            52
          ],
          [
            "Dayton",
            10,
            99745,
            34
          ],
          [
            "Knoxville",
            9,
            129708.45,
            13
          ],
          [
            "Greenville",
            4,
            73620.08,
            10
          ],
          [
            "Grand Rapids",
            3,
            68801.93,
            34
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
            188,
            5800
          ],
          [
            "Job-107178",
            "Damien Pakula",
            "Detroit Metro",
            "Roofing",
            "Homeowner Request",
            "Gary Benedict Jr",
            160,
            13597
          ],
          [
            "Job-115035",
            "Erik Steensen",
            "DC Metro",
            "GAF Solar",
            "Pending Material",
            "Derrick Sieber",
            139,
            59822
          ],
          [
            "Job-112457",
            "Michelle  Pullens",
            "Columbus",
            "Siding",
            "Homeowner Request",
            "Mark Daggett",
            129,
            27000
          ],
          [
            "Job-117302",
            "Marcia Williams",
            "Cleveland",
            "Siding",
            "Pending Material",
            "Jake Ross",
            102,
            19654.5
          ],
          [
            "Job-117309",
            "Eddie Black",
            "Cleveland",
            "Gutters",
            "Pending Material",
            "Frank Butts",
            101,
            16713.23
          ],
          [
            "Job-118286",
            "Denise Evans Lane",
            "Cleveland",
            "Siding",
            "Pending Material",
            "Frank Butts",
            87,
            12795.5
          ],
          [
            "Job-118348",
            "Angie & MIke Fleshman",
            "Columbus",
            "Siding",
            "Pending Sales",
            "Frank Drummond",
            84,
            2608
          ],
          [
            "Job-118681",
            "Roger Nolan",
            "Columbus",
            "Skylights",
            "Pending Material",
            "Frank Drummond",
            82,
            7506
          ],
          [
            "Job-118981",
            "Jill Townsend",
            "Cleveland",
            "Siding",
            "Pending Material",
            "Mike Stack",
            77,
            27895.44
          ],
          [
            "Job-118734",
            "Mindi Burkette",
            "DC Metro",
            "Roofing",
            "",
            "David Poole",
            76,
            15829
          ],
          [
            "Job-117442",
            "Joseph George",
            "Detroit Metro",
            "GAF Solar",
            "Pending Material",
            "Richard Rice",
            75,
            179999
          ],
          [
            "Job-118731",
            "Kaitlyn Valis",
            "DC Metro",
            "Roofing",
            "Homeowner Request",
            "David Poole",
            75,
            9833
          ],
          [
            "Job-118669",
            "Ephriam King",
            "DC Metro",
            "Roofing",
            "",
            "Stephen Harmon",
            74,
            21119
          ],
          [
            "Job-119479",
            "Louis Mallis",
            "Cleveland",
            "Siding",
            "Pending Material",
            "Tyler Sponseller",
            70,
            13944.87
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Columbus",
          "permits": 53
        },
        {
          "branch": "Cleveland",
          "permits": 29
        },
        {
          "branch": "Detroit Metro",
          "permits": 27
        },
        {
          "branch": "DC Metro",
          "permits": 13
        },
        {
          "branch": "Cincinnati",
          "permits": 12
        },
        {
          "branch": "Richmond",
          "permits": 11
        },
        {
          "branch": "Nashville",
          "permits": 7
        },
        {
          "branch": "Dayton",
          "permits": 3
        },
        {
          "branch": "Raleigh",
          "permits": 2
        },
        {
          "branch": "Knoxville",
          "permits": 2
        },
        {
          "branch": "Grand Rapids",
          "permits": 1
        },
        {
          "branch": "Greenville",
          "permits": 1
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $2.98M of trapped partial-job revenue into billable revenue, reduce $5.17M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Dispatch the 41 RTS WOs sitting on partial jobs. No blocker, no hold, just dispatch.",
        "Re-dispatch the 28 RAS WOs (oldest at 90 days). These are pure re-work fastballs.",
        "Gutters sweep: 64 open WOs across 64 partial jobs blocking $1.71M. Highest single-trade leverage in the book.",
        "Columbus permit sweep: 53 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one.",
        "Close out the 13 zombie jobs (all WOs Completed, parent still In Progress). Pure paperwork."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Gutters): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 444 jobs ($9.84M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $2.98M, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  }
};
