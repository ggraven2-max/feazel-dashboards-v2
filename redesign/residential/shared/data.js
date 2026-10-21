/* AUTO-GENERATED — do not edit. Generated 2026-10-21T12:51:08.358Z (residential) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-10-21T12:51:08.358Z",
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
        "elapsedMs": 180,
        "builtAt": "2026-10-21T12:51:08.358Z"
      },
      {
        "id": "sales-overview",
        "version": "1.0-rules-encoded",
        "elapsedMs": 806,
        "builtAt": "2026-10-21T12:51:08.358Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 2441,
        "builtAt": "2026-10-21T12:51:08.358Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 34,
        "builtAt": "2026-10-21T12:51:08.358Z"
      }
    ]
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 06, 2026 - Oct 20, 2026 - De-Duplicated at Job Level - 3,937 Jobs - 14 Markets - 32 PMs",
    "generated": "2026-10-21",
    "headerMeta": {
      "trueRevenue": 75570478.56,
      "uniqueJobs": 3937,
      "markets": 14,
      "pms": 32,
      "medianComplete": 27.7,
      "avgStart": 26.4,
      "multiTradeJobs": 1311,
      "singleTradeJobs": 2626,
      "multiTradePct": 33.3,
      "lastBuild": "2026-10-21T12:51:08.358Z"
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
        "value": "$75.57M",
        "sub": "3,937 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$19,195",
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
        "value": "1,311",
        "sub": "33.3% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "2,626",
        "sub": "66.7% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$24,193",
        "sub": "+44.9% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$16,700",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+20.9d",
        "sub": "MT 42.6d vs ST 21.7d"
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
        "rev": 7263672.82,
        "jobs": 388,
        "med": 31.6,
        "start": 26.6
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
              3275604.18,
              2694605.54,
              5913056.86,
              7878201.39,
              8377996.95,
              11029046.94,
              10681299.57,
              9084567.23,
              9372427.08,
              7263672.82
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
              388
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
              46.8,
              32.7,
              23.7,
              17.7,
              21.9,
              28.7,
              30.6,
              29.7,
              28.8,
              31.6
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
              26.6
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
              1311
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              2626
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
              851,
              81,
              79,
              77,
              27,
              21,
              19,
              15
            ]
          }
        ]
      },
      {
        "id": "ch_mt_by_market",
        "labels": [
          "Columbus",
          "Detroit Metro",
          "Nashville",
          "Cleveland",
          "DC Metro",
          "Dayton",
          "Richmond",
          "Cincinnati",
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
              33.2,
              30.3,
              31.8,
              43,
              38.4,
              27.5,
              36.1,
              27.2,
              23.7,
              33.6,
              35.6,
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
          "Nashville",
          "Cleveland",
          "DC Metro",
          "Dayton",
          "Richmond",
          "Cincinnati",
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
              48.6,
              46.8,
              21.9,
              51.6,
              22.8,
              37.9,
              31.7,
              41.8,
              35.2,
              26.8,
              26.3,
              59.7,
              64.8,
              346.9
            ]
          },
          {
            "label": "ST Median",
            "data": [
              21.7,
              25.6,
              18.7,
              29.7,
              14.6,
              22.7,
              13.7,
              22.6,
              20.6,
              17.8,
              18.3,
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
          "Nashville",
          "Cleveland",
          "DC Metro",
          "Dayton",
          "Richmond",
          "Cincinnati",
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
              28672673.65,
              10658132.64,
              6078499.2,
              5780648.94,
              4927898.96,
              3876417.34,
              3712488.02,
              3703476,
              2662960.52,
              2484966.5,
              1753010.23,
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
          "Nashville",
          "Cleveland",
          "DC Metro",
          "Dayton",
          "Richmond",
          "Cincinnati",
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
              29.8,
              19.9,
              38.2,
              18.6,
              25.8,
              18.9,
              27.7,
              22.6,
              21.7,
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
          "Jason Andrews-INACTIVE",
          "Drew Bailey",
          "Alex Dubanoski",
          "Shawn Oehlstrom",
          "Kaden Carter",
          "Alejandro Alvarado",
          "Brandon Harter",
          "Galo Munive",
          "Abraham Santiago"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              6338564.47,
              6115390.81,
              5248629.83,
              4707164.1,
              4151511.66,
              4008553.73,
              3608976.22,
              3548477.18,
              3475618.7,
              3202231.1,
              2757106.06,
              2673031.68,
              2483522.89,
              2478257.21,
              2417106.63
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
          "Jason Andrews-INACTIVE",
          "Drew Bailey",
          "Alex Dubanoski",
          "Shawn Oehlstrom",
          "Kaden Carter",
          "Alejandro Alvarado",
          "Brandon Harter",
          "Galo Munive",
          "Abraham Santiago",
          "Brady Weingartner",
          "Joseph Jones",
          "Malik Ford",
          "Joshua Collins",
          "Daniel Galli",
          "Adam Marrero",
          "Michael Blevins",
          "Levi Nieman - INACTIVE",
          "Austin Weingartner-INACTIVE",
          "Chad Williams",
          "(Unassigned)",
          "Cody Mitchell-INACTIVE",
          "Neil Laux",
          "Mike Scott",
          "Justin Milliron",
          "Michael McLaughlin",
          "Chris Atkins"
        ],
        "datasets": [
          {
            "label": "PMs",
            "data": [
              {
                "x": 30.8,
                "y": 6338564.47,
                "wos": 408,
                "name": "Mason Bryant"
              },
              {
                "x": 28.9,
                "y": 6115390.81,
                "wos": 375,
                "name": "Eric Isakov"
              },
              {
                "x": 32.8,
                "y": 5248629.83,
                "wos": 356,
                "name": "Richard Williams"
              },
              {
                "x": 31.8,
                "y": 4707164.1,
                "wos": 289,
                "name": "Landon Little"
              },
              {
                "x": 34.1,
                "y": 4151511.66,
                "wos": 236,
                "name": "Brandon Skrzypek"
              },
              {
                "x": 29.7,
                "y": 4008553.73,
                "wos": 317,
                "name": "Joseph Yager"
              },
              {
                "x": 35.6,
                "y": 3608976.22,
                "wos": 352,
                "name": "Jason Andrews-INACTIVE"
              },
              {
                "x": 31.7,
                "y": 3548477.18,
                "wos": 430,
                "name": "Drew Bailey"
              },
              {
                "x": 19.7,
                "y": 3475618.7,
                "wos": 256,
                "name": "Alex Dubanoski"
              },
              {
                "x": 42.6,
                "y": 3202231.1,
                "wos": 320,
                "name": "Shawn Oehlstrom"
              },
              {
                "x": 22.7,
                "y": 2757106.06,
                "wos": 205,
                "name": "Kaden Carter"
              },
              {
                "x": 18.8,
                "y": 2673031.68,
                "wos": 199,
                "name": "Alejandro Alvarado"
              },
              {
                "x": 23.7,
                "y": 2483522.89,
                "wos": 138,
                "name": "Brandon Harter"
              },
              {
                "x": 19.8,
                "y": 2478257.21,
                "wos": 221,
                "name": "Galo Munive"
              },
              {
                "x": 19.1,
                "y": 2417106.63,
                "wos": 129,
                "name": "Abraham Santiago"
              },
              {
                "x": 24.6,
                "y": 2332873.97,
                "wos": 129,
                "name": "Brady Weingartner"
              },
              {
                "x": 21.7,
                "y": 2296609.81,
                "wos": 176,
                "name": "Joseph Jones"
              },
              {
                "x": 28.8,
                "y": 1977693.85,
                "wos": 123,
                "name": "Malik Ford"
              },
              {
                "x": 42.6,
                "y": 1880985.72,
                "wos": 133,
                "name": "Joshua Collins"
              },
              {
                "x": 59.2,
                "y": 1643905.97,
                "wos": 147,
                "name": "Daniel Galli"
              },
              {
                "x": 18.2,
                "y": 1423570.33,
                "wos": 103,
                "name": "Adam Marrero"
              },
              {
                "x": 21.7,
                "y": 1258755.68,
                "wos": 111,
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
                "y": 971944.28,
                "wos": 67,
                "name": "Austin Weingartner-INACTIVE"
              },
              {
                "x": 59.9,
                "y": 581094.26,
                "wos": 54,
                "name": "Chad Williams"
              },
              {
                "x": 35.7,
                "y": 544883.92,
                "wos": 63,
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
                "y": 322302.96,
                "wos": 44,
                "name": "Mike Scott"
              },
              {
                "x": 68.7,
                "y": 312073.88,
                "wos": 33,
                "name": "Justin Milliron"
              },
              {
                "x": 55.2,
                "y": 242844.07,
                "wos": 22,
                "name": "Michael McLaughlin"
              },
              {
                "x": 58.9,
                "y": 198644.48,
                "wos": 31,
                "name": "Chris Atkins"
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
          "Painting",
          "GAF Solar",
          "Rack Mounted Solar",
          "Flat Roof",
          "Electrical",
          "Other",
          "Carpentry",
          "Skylights",
          "Insulation",
          "Stucco",
          "Unspecified",
          "Door"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              55049966.25,
              12580779.87,
              4036524.01,
              903021.77,
              806363.37,
              638595.33,
              378440.79,
              348699.67,
              276804.49,
              193630.92,
              173825.05,
              68893.13,
              62683.52,
              23709.23,
              10924.5,
              10527,
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
          "Painting",
          "GAF Solar",
          "Rack Mounted Solar",
          "Flat Roof",
          "Electrical",
          "Other",
          "Carpentry",
          "Skylights",
          "Insulation",
          "Stucco",
          "Unspecified",
          "Door"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              27.7,
              35.8,
              53.6,
              74.8,
              60.7,
              66.7,
              49.1,
              82.8,
              63.7,
              38.7,
              43.2,
              57.7,
              51.8,
              50.6,
              39.7,
              30.7,
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
          "Bradley Essex - INACTIVE",
          "Allison Webb",
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
              1263,
              1046,
              509,
              311,
              238,
              226,
              225,
              65,
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
          "Bradley Essex - INACTIVE",
          "Allison Webb",
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
              30.7,
              25.6,
              23.7,
              30.8,
              21.8,
              21.7,
              31.8,
              34.8,
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
          "Bradley Essex - INACTIVE",
          "Allison Webb",
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
              37.2,
              31.4,
              28.5,
              36,
              28.6,
              29.6,
              32.4,
              40,
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
          "Bradley Essex - INACTIVE",
          "Allison Webb",
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
                "x": 30.7,
                "y": 19660.26,
                "jobs": 1263,
                "name": "Brandon Vera"
              },
              {
                "x": 25.6,
                "y": 19991.67,
                "jobs": 1046,
                "name": "David Schwan"
              },
              {
                "x": 23.7,
                "y": 17080.85,
                "jobs": 509,
                "name": "Amanda Wade - INACTIVE"
              },
              {
                "x": 30.8,
                "y": 18878.55,
                "jobs": 311,
                "name": "Bradley Essex - INACTIVE"
              },
              {
                "x": 21.8,
                "y": 18277.06,
                "jobs": 238,
                "name": "Allison Webb"
              },
              {
                "x": 21.7,
                "y": 18890.1,
                "jobs": 226,
                "name": "Ethan Wolfe"
              },
              {
                "x": 31.8,
                "y": 17749.43,
                "jobs": 225,
                "name": "Thomas Hayes"
              },
              {
                "x": 34.8,
                "y": 17530.93,
                "jobs": 65,
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
            1468,
            28672673.65,
            19531.79,
            29.6,
            29.2,
            33.2,
            48.6,
            21.7
          ],
          [
            "Detroit Metro",
            561,
            10658132.64,
            18998.45,
            29.8,
            33.6,
            30.3,
            46.8,
            25.6
          ],
          [
            "Nashville",
            267,
            6078499.2,
            22765.91,
            19.9,
            19.4,
            31.8,
            21.9,
            18.7
          ],
          [
            "Cleveland",
            330,
            5780648.94,
            17517.12,
            38.2,
            34.2,
            43,
            51.6,
            29.7
          ],
          [
            "DC Metro",
            268,
            4927898.96,
            18387.68,
            18.6,
            19.1,
            38.4,
            22.8,
            14.6
          ],
          [
            "Dayton",
            207,
            3876417.34,
            18726.65,
            25.8,
            20.9,
            27.5,
            37.9,
            22.7
          ],
          [
            "Richmond",
            191,
            3712488.02,
            19437.11,
            18.9,
            15.8,
            36.1,
            31.7,
            13.7
          ],
          [
            "Cincinnati",
            195,
            3703476,
            18992.18,
            27.7,
            23.1,
            27.2,
            41.8,
            22.6
          ],
          [
            "Raleigh",
            152,
            2662960.52,
            17519.48,
            22.6,
            22,
            23.7,
            35.2,
            20.6
          ],
          [
            "Knoxville",
            143,
            2484966.5,
            17377.39,
            21.7,
            15.7,
            33.6,
            26.8,
            17.8
          ],
          [
            "Greenville",
            90,
            1753010.23,
            19477.89,
            21.6,
            18.6,
            35.6,
            26.3,
            18.3
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
            408,
            357,
            6338564.47,
            15535.7,
            30.8,
            25.6
          ],
          [
            "Eric Isakov",
            375,
            313,
            6115390.81,
            16307.71,
            28.9,
            26.3
          ],
          [
            "Richard Williams",
            356,
            322,
            5248629.83,
            14743.34,
            32.8,
            30.1
          ],
          [
            "Landon Little",
            289,
            259,
            4707164.1,
            16287.77,
            31.8,
            28.4
          ],
          [
            "Brandon Skrzypek",
            236,
            230,
            4151511.66,
            17591.15,
            34.1,
            31.7
          ],
          [
            "Joseph Yager",
            317,
            254,
            4008553.73,
            12645.28,
            29.7,
            21.7
          ],
          [
            "Jason Andrews-INACTIVE",
            352,
            293,
            3608976.22,
            10252.77,
            35.6,
            36.1
          ],
          [
            "Drew Bailey",
            430,
            395,
            3548477.18,
            8252.27,
            31.7,
            27.2
          ],
          [
            "Alex Dubanoski",
            256,
            189,
            3475618.7,
            13576.64,
            19.7,
            16.2
          ],
          [
            "Shawn Oehlstrom",
            320,
            234,
            3202231.1,
            10006.97,
            42.6,
            36.4
          ],
          [
            "Kaden Carter",
            205,
            161,
            2757106.06,
            13449.3,
            22.7,
            22.2
          ],
          [
            "Alejandro Alvarado",
            199,
            149,
            2673031.68,
            13432.32,
            18.8,
            17.3
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
            "Galo Munive",
            221,
            169,
            2478257.21,
            11213.83,
            19.8,
            21.1
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
            "Brady Weingartner",
            129,
            125,
            2332873.97,
            18084.29,
            24.6,
            22.6
          ],
          [
            "Joseph Jones",
            176,
            135,
            2296609.81,
            13048.92,
            21.7,
            15.4
          ],
          [
            "Malik Ford",
            123,
            119,
            1977693.85,
            16078.81,
            28.8,
            31.1
          ],
          [
            "Joshua Collins",
            133,
            132,
            1880985.72,
            14142.75,
            42.6,
            33.2
          ],
          [
            "Daniel Galli",
            147,
            118,
            1643905.97,
            11183.03,
            59.2,
            42.7
          ],
          [
            "Adam Marrero",
            103,
            84,
            1423570.33,
            13821.07,
            18.2,
            17.6
          ],
          [
            "Michael Blevins",
            111,
            77,
            1258755.68,
            11340.14,
            21.7,
            18.9
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
            67,
            64,
            971944.28,
            14506.63,
            28.7,
            23.1
          ],
          [
            "Chad Williams",
            54,
            36,
            581094.26,
            10761,
            59.9,
            21.3
          ],
          [
            "(Unassigned)",
            63,
            57,
            544883.92,
            8648.95,
            35.7,
            34.8
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
            44,
            43,
            322302.96,
            7325.07,
            57.7,
            33.2
          ],
          [
            "Justin Milliron",
            33,
            29,
            312073.88,
            9456.78,
            68.7,
            55.5
          ],
          [
            "Michael McLaughlin",
            22,
            22,
            242844.07,
            11038.37,
            55.2,
            50
          ],
          [
            "Chris Atkins",
            31,
            27,
            198644.48,
            6407.89,
            58.9,
            45.8
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
            3564,
            55049966.25,
            15446.12,
            27.7
          ],
          [
            "Gutters",
            1334,
            12580779.87,
            9430.87,
            35.8
          ],
          [
            "Siding",
            405,
            4036524.01,
            9966.73,
            53.6
          ],
          [
            "Metal",
            53,
            903021.77,
            17038.15,
            74.8
          ],
          [
            "Masonry",
            73,
            806363.37,
            11046.07,
            60.7
          ],
          [
            "Windows",
            61,
            638595.33,
            10468.78,
            66.7
          ],
          [
            "Painting",
            28,
            378440.79,
            13515.74,
            49.1
          ],
          [
            "GAF Solar",
            5,
            348699.67,
            69739.93,
            82.8
          ],
          [
            "Rack Mounted Solar",
            27,
            276804.49,
            10252.02,
            63.7
          ],
          [
            "Flat Roof",
            22,
            193630.92,
            8801.41,
            38.7
          ],
          [
            "Electrical",
            16,
            173825.05,
            10864.07,
            43.2
          ],
          [
            "Other",
            8,
            68893.13,
            8611.64,
            57.7
          ],
          [
            "Carpentry",
            5,
            62683.52,
            12536.7,
            51.8
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
            "Stucco",
            1,
            10527,
            10527,
            30.7
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
            1263,
            24830906.02,
            19660.26,
            "30.7d",
            "26.8d",
            37.2,
            19660.26
          ],
          [
            "David Schwan",
            1046,
            20911288.32,
            19991.67,
            "25.6d",
            "24.6d",
            31.4,
            19991.67
          ],
          [
            "Amanda Wade - INACTIVE",
            509,
            8694150.72,
            17080.85,
            "23.7d",
            "28.6d",
            28.5,
            17080.85
          ],
          [
            "Bradley Essex - INACTIVE",
            311,
            5871230.24,
            18878.55,
            "30.8d",
            "29.4d",
            36,
            18878.55
          ],
          [
            "Allison Webb",
            238,
            4349939.87,
            18277.06,
            "21.8d",
            "17.6d",
            28.6,
            18277.06
          ],
          [
            "Ethan Wolfe",
            226,
            4269162.74,
            18890.1,
            "21.7d",
            "19.6d",
            29.6,
            18890.1
          ],
          [
            "Thomas Hayes",
            225,
            3993621.58,
            17749.43,
            "31.8d",
            "33.2d",
            32.4,
            17749.43
          ],
          [
            "Bruce Lemon Jr.",
            65,
            1139510.52,
            17530.93,
            "34.8d",
            "27.1d",
            40,
            17530.93
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
            32,
            16,
            148,
            13,
            20,
            5,
            0,
            0,
            1,
            0,
            0,
            0,
            1,
            2,
            238
          ],
          [
            "Amanda Wade - INACTIVE",
            0,
            1,
            373,
            0,
            2,
            1,
            0,
            0,
            53,
            0,
            0,
            1,
            78,
            0,
            509
          ],
          [
            "Bradley Essex - INACTIVE",
            70,
            141,
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
            311
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
            70,
            118,
            324,
            248,
            94,
            157,
            20,
            0,
            7,
            0,
            29,
            0,
            14,
            182,
            1263
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
            19,
            31,
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
            65
          ],
          [
            "David Schwan",
            15,
            18,
            414,
            3,
            0,
            95,
            3,
            0,
            27,
            143,
            0,
            266,
            58,
            4,
            1046
          ],
          [
            "Ethan Wolfe",
            4,
            2,
            135,
            0,
            2,
            80,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            226
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
            16,
            0,
            3,
            184,
            8,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            225
          ],
          [
            "Total",
            195,
            330,
            1468,
            268,
            207,
            561,
            35,
            1,
            90,
            143,
            29,
            267,
            152,
            191,
            3937
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Justin Milliron: 33 WOs, $312K revenue, 68.7-day median complete, top-volume PM with the slowest cycle in the network.",
        "Multi-trade penalty is severe in 1 markets: NOVA MT 64.8d vs ST 20.8d.",
        "Days to Start averages 26.4 days company-wide and 36.4 days in Grand Rapids (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [
        "Gutters-only work runs at 35.8-day median complete versus 27.7 days for roofing, 29% slower cycle on the lowest-priced trade."
      ],
      "positivesToBuildOn": [
        "June delivered $11.03M across 556 invoiced jobs at 28.7-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "DC Metro hits 18.6-day median complete and a $18,388 average contract on 268 jobs.",
        "Multi-trade jobs carry a $24,193 average contract versus $16,700 for single-trade, a 45% revenue lift per job.",
        "Nashville is the best-balanced market: 19.9-day median complete, 31.8% multi-trade attach, $22,766 average contract on 267 jobs."
      ]
    }
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-10-19",
    "ytdDays": 293,
    "rowCount": 5206,
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
        "value": "$89.36M",
        "sub": "5,206 signed contracts across 13 markets"
      },
      {
        "label": "Sold",
        "value": "$86.99M",
        "sub": "5,086 deals | 97.7% of signed contracts"
      },
      {
        "label": "Production Review",
        "value": "$1.83M",
        "sub": "91 deals | Ops Review, PM Review, Contracted"
      },
      {
        "label": "Kicked Back",
        "value": "$437K",
        "sub": "21 deals | 0.4% of signed contracts",
        "trend": "negative"
      },
      {
        "label": "Sales Action",
        "value": "$15K",
        "sub": "1 deals requiring sales follow-up",
        "trend": "neutral"
      },
      {
        "label": "Avg Deal Size",
        "value": "$17,166",
        "sub": "Median: $16,000 | Install avg: $19,504"
      },
      {
        "label": "Organization",
        "value": "180 Reps",
        "sub": "13 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$111.32M",
        "sub": "Based on 293 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "86.1% / 13.9%",
        "sub": "4,480 installs | 722 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 5086,
        "amount": 86989198.95
      },
      {
        "label": "Production Review",
        "count": 91,
        "amount": 1831266.28
      },
      {
        "label": "Kicked Back",
        "count": 21,
        "amount": 437167.26
      },
      {
        "label": "Sales Action",
        "count": 1,
        "amount": 15000
      },
      {
        "label": "Other",
        "count": 7,
        "amount": 91945.56
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
        "amount": 7326693.19,
        "installs": 407,
        "repairs": 112,
        "avgDeal": 14117,
        "repairPct": 21.6,
        "installAvg": 17483,
        "repairAvg": 1884
      },
      {
        "key": "2026-04",
        "label": "April",
        "count": 786,
        "amount": 12533464.92,
        "installs": 683,
        "repairs": 103,
        "avgDeal": 15946,
        "repairPct": 13.1,
        "installAvg": 18102,
        "repairAvg": 1649
      },
      {
        "key": "2026-05",
        "label": "May",
        "count": 642,
        "amount": 11740887.64,
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
        "count": 615,
        "amount": 10885948.26,
        "installs": 540,
        "repairs": 75,
        "avgDeal": 17701,
        "repairPct": 12.2,
        "installAvg": 19826,
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
        "count": 642,
        "amount": 11396583.86,
        "installs": 559,
        "repairs": 83,
        "avgDeal": 17752,
        "repairPct": 12.9,
        "installAvg": 19925,
        "repairAvg": 3113
      },
      {
        "key": "2026-09",
        "label": "September",
        "count": 665,
        "amount": 11103832.35,
        "installs": 570,
        "repairs": 95,
        "avgDeal": 16697,
        "repairPct": 14.3,
        "installAvg": 19024,
        "repairAvg": 2740
      },
      {
        "key": "2026-10",
        "label": "October",
        "count": 337,
        "amount": 6168401.27,
        "installs": 285,
        "repairs": 48,
        "avgDeal": 18304,
        "repairPct": 14.2,
        "installAvg": 20085,
        "repairAvg": 5066
      }
    ],
    "jobTypeMixByMonth": {
      "Retail-No Financing": {
        "2026-01": 1323966.72,
        "2026-02": 1798437.6,
        "2026-03": 3179616.7,
        "2026-04": 4923931.54,
        "2026-05": 4338338.67,
        "2026-06": 4059951.45,
        "2026-07": 4813500.07,
        "2026-08": 4964066.35,
        "2026-09": 4235135.54,
        "2026-10": 2029453.09
      },
      "Insurance": {
        "2026-01": 1371874.69,
        "2026-02": 1686849.5,
        "2026-03": 2977495.93,
        "2026-04": 6281679.12,
        "2026-05": 6266007.67,
        "2026-06": 5834920.9,
        "2026-07": 4652538.59,
        "2026-08": 4528303.69,
        "2026-09": 4569559.96,
        "2026-10": 1960881.51
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
        "2026-09": 1782701.95,
        "2026-10": 797845.86
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Insurance",
        "count": 1954,
        "amount": 40130111.56,
        "avg": 20537
      },
      {
        "jobType": "Retail-No Financing",
        "count": 2608,
        "amount": 35666397.73,
        "avg": 13676
      },
      {
        "jobType": "Retail-Financing",
        "count": 528,
        "amount": 11322912.31,
        "avg": 21445
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
        "amount": 1168723.84
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
        "count": 175,
        "amount": 2711960.89
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
        "amount": 2602039.14
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
        "count": 112,
        "amount": 1791054.73
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
        "count": 124,
        "amount": 2026736.27
      },
      {
        "w": 33,
        "count": 151,
        "amount": 2801257.27
      },
      {
        "w": 34,
        "count": 158,
        "amount": 2727655.18
      },
      {
        "w": 35,
        "count": 143,
        "amount": 2578039.71
      },
      {
        "w": 36,
        "count": 153,
        "amount": 2722121.96
      },
      {
        "w": 37,
        "count": 141,
        "amount": 2212256.32
      },
      {
        "w": 38,
        "count": 146,
        "amount": 2576367.46
      },
      {
        "w": 39,
        "count": 159,
        "amount": 2677007.98
      },
      {
        "w": 40,
        "count": 192,
        "amount": 3320565.89
      },
      {
        "w": 41,
        "count": 129,
        "amount": 2321304.9
      },
      {
        "w": 42,
        "count": 125,
        "amount": 2223604.86
      },
      {
        "w": 43,
        "count": 23,
        "amount": 481899.68
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
          34702167.85,
          1918,
          18093,
          1649,
          267,
          13.9,
          10
        ],
        [
          "Detroit Metro",
          12274404.48,
          762,
          16108,
          637,
          125,
          16.4,
          4
        ],
        [
          "Cleveland",
          9574056.17,
          585,
          16366,
          502,
          81,
          13.8,
          14
        ],
        [
          "Nashville",
          6186795.65,
          346,
          17881,
          268,
          78,
          22.5,
          5
        ],
        [
          "DC Metro",
          5655021.55,
          379,
          14921,
          298,
          81,
          21.4,
          9
        ],
        [
          "Richmond",
          4979224.73,
          226,
          22032,
          217,
          9,
          4,
          25
        ],
        [
          "Cincinnati",
          4476071.75,
          270,
          16578,
          242,
          28,
          10.4,
          6
        ],
        [
          "Dayton",
          4092235.16,
          245,
          16703,
          218,
          27,
          11,
          15
        ],
        [
          "Knoxville",
          2507908.79,
          150,
          16719,
          149,
          1,
          0.7,
          13
        ],
        [
          "Raleigh",
          2285243.96,
          170,
          13443,
          151,
          19,
          11.2,
          7
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
          651714.1,
          41,
          15895,
          38,
          3,
          7.3,
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
          "opps": 3437,
          "soldAmt": 19914889.52,
          "closePct": 40.2,
          "nsli": 5794
        },
        {
          "branch": "Detroit",
          "opps": 1529,
          "soldAmt": 9012198.35,
          "closePct": 40.7,
          "nsli": 5894
        },
        {
          "branch": "Cleveland",
          "opps": 1131,
          "soldAmt": 5863011.68,
          "closePct": 34.8,
          "nsli": 5184
        },
        {
          "branch": "DC Metro",
          "opps": 927,
          "soldAmt": 3552271.08,
          "closePct": 30.9,
          "nsli": 3832
        },
        {
          "branch": "Cincinnati",
          "opps": 738,
          "soldAmt": 3261538.58,
          "closePct": 30.4,
          "nsli": 4419
        },
        {
          "branch": "Nashville",
          "opps": 525,
          "soldAmt": 3158142.64,
          "closePct": 41.9,
          "nsli": 6016
        },
        {
          "branch": "Dayton",
          "opps": 441,
          "soldAmt": 2053639.85,
          "closePct": 30.6,
          "nsli": 4657
        },
        {
          "branch": "Raleigh",
          "opps": 382,
          "soldAmt": 1222847.26,
          "closePct": 29.8,
          "nsli": 3201
        },
        {
          "branch": "Richmond",
          "opps": 158,
          "soldAmt": 1095792.42,
          "closePct": 39.2,
          "nsli": 6935
        },
        {
          "branch": "Greenville",
          "opps": 196,
          "soldAmt": 1053536.03,
          "closePct": 34.2,
          "nsli": 5375
        },
        {
          "branch": "Knoxville",
          "opps": 146,
          "soldAmt": 815677.9,
          "closePct": 38.4,
          "nsli": 5587
        },
        {
          "branch": "Grand Rapids",
          "opps": 109,
          "soldAmt": 347670.74,
          "closePct": 23.9,
          "nsli": 3190
        }
      ],
      "totals": {
        "opps": 9725,
        "soldAmt": 51351216.05,
        "closePct": 36.9,
        "nsli": 5280
      },
      "source": "Closing Percent By Branch-2026-10-21-08-47-57.xlsx",
      "format": "per-opportunity"
    },
    "marketKickbacks": [
      {
        "market": "Columbus",
        "kicked": 5,
        "kickedAmount": 79414.5
      },
      {
        "market": "Cleveland",
        "kicked": 4,
        "kickedAmount": 160628.56
      },
      {
        "market": "DC Metro",
        "kicked": 3,
        "kickedAmount": 30718
      },
      {
        "market": "Greenville",
        "kicked": 3,
        "kickedAmount": 54762.25
      },
      {
        "market": "Cincinnati",
        "kicked": 2,
        "kickedAmount": 32920
      },
      {
        "market": "Detroit Metro",
        "kicked": 2,
        "kickedAmount": 32667.98
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
        "amount": 2353968.33,
        "count": 147,
        "avg": 16013,
        "medDays": 3,
        "jt": {
          "Retail-Financing": 24,
          "Retail-No Financing": 84,
          "Insurance": 36
        },
        "installs": 136,
        "repairs": 11
      },
      {
        "name": "Kevin Ditty",
        "amount": 2219915.26,
        "count": 112,
        "avg": 19821,
        "medDays": 3,
        "jt": {
          "Insurance": 16,
          "Retail-No Financing": 68,
          "Retail-Financing": 28
        },
        "installs": 91,
        "repairs": 21
      },
      {
        "name": "Stephen Harmon",
        "amount": 2064324.63,
        "count": 104,
        "avg": 19849,
        "medDays": 11,
        "jt": {
          "Retail-No Financing": 94,
          "Insurance": 4,
          "Retail-Financing": 4
        },
        "installs": 94,
        "repairs": 10
      },
      {
        "name": "Brian Ogrin",
        "amount": 2013172.22,
        "count": 75,
        "avg": 26842,
        "medDays": 51,
        "jt": {
          "Insurance": 50,
          "Retail-No Financing": 23,
          "Retail-Financing": 1
        },
        "installs": 69,
        "repairs": 6
      },
      {
        "name": "Sam Scorziell",
        "amount": 1908453.37,
        "count": 84,
        "avg": 22720,
        "medDays": 21,
        "jt": {
          "Insurance": 60,
          "Retail-No Financing": 20,
          "Retail-Financing": 1
        },
        "installs": 80,
        "repairs": 4
      },
      {
        "name": "Frank Drummond",
        "amount": 1899188.9,
        "count": 145,
        "avg": 13098,
        "medDays": 6,
        "jt": {
          "Retail-No Financing": 85,
          "Insurance": 55,
          "Retail-Financing": 5
        },
        "installs": 105,
        "repairs": 40
      },
      {
        "name": "Robert Beck",
        "amount": 1891724.88,
        "count": 69,
        "avg": 27416,
        "medDays": 33,
        "jt": {
          "Insurance": 52,
          "Retail-No Financing": 16,
          "Retail-Financing": 1
        },
        "installs": 65,
        "repairs": 4
      },
      {
        "name": "Bill Applegate",
        "amount": 1753776.33,
        "count": 81,
        "avg": 21652,
        "medDays": 39,
        "jt": {
          "Insurance": 52,
          "Retail-No Financing": 25,
          "Retail-Financing": 1
        },
        "installs": 68,
        "repairs": 12
      },
      {
        "name": "Dave Norris",
        "amount": 1679299.96,
        "count": 119,
        "avg": 14112,
        "medDays": 13,
        "jt": {
          "Retail-No Financing": 73,
          "Retail-Financing": 1,
          "Insurance": 45
        },
        "installs": 87,
        "repairs": 32
      },
      {
        "name": "Cole Burgess",
        "amount": 1612456.84,
        "count": 87,
        "avg": 18534,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 67,
          "Retail-Financing": 13,
          "Insurance": 6
        },
        "installs": 78,
        "repairs": 9
      },
      {
        "name": "Caleb Severance",
        "amount": 1581304.59,
        "count": 71,
        "avg": 22272,
        "medDays": 2,
        "jt": {
          "Retail-No Financing": 49,
          "Retail-Financing": 21,
          "Insurance": 1
        },
        "installs": 64,
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
        "name": "Clay Hastings",
        "amount": 1536089.01,
        "count": 85,
        "avg": 18072,
        "medDays": 9,
        "jt": {
          "Retail-No Financing": 22,
          "Insurance": 33,
          "Retail-Financing": 27
        },
        "installs": 78,
        "repairs": 7
      },
      {
        "name": "Derrick Sieber",
        "amount": 1531532.83,
        "count": 101,
        "avg": 15164,
        "medDays": 11,
        "jt": {
          "Retail-No Financing": 60,
          "Retail-Financing": 4,
          "Insurance": 32
        },
        "installs": 72,
        "repairs": 29
      },
      {
        "name": "Zachary Schneider",
        "amount": 1407529.64,
        "count": 80,
        "avg": 17594,
        "medDays": 21,
        "jt": {
          "Retail-No Financing": 34,
          "Insurance": 46
        },
        "installs": 66,
        "repairs": 14
      },
      {
        "name": "Nick Junker",
        "amount": 1395601.61,
        "count": 72,
        "avg": 19383,
        "medDays": 36,
        "jt": {
          "Insurance": 42,
          "Retail-No Financing": 29,
          "Retail-Financing": 1
        },
        "installs": 67,
        "repairs": 5
      },
      {
        "name": "Mark Daggett",
        "amount": 1386291.31,
        "count": 86,
        "avg": 16120,
        "medDays": 5,
        "jt": {
          "Retail-No Financing": 56,
          "Insurance": 23,
          "Retail-Financing": 6
        },
        "installs": 76,
        "repairs": 10
      },
      {
        "name": "Matthew Ross",
        "amount": 1382699.56,
        "count": 83,
        "avg": 16659,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 62,
          "Insurance": 2,
          "Retail-Financing": 17
        },
        "installs": 71,
        "repairs": 12
      },
      {
        "name": "Frank Butts",
        "amount": 1328908.01,
        "count": 96,
        "avg": 13843,
        "medDays": 10,
        "jt": {
          "Retail-No Financing": 42,
          "Insurance": 52,
          "Retail-Financing": 2
        },
        "installs": 88,
        "repairs": 8
      },
      {
        "name": "James Cole Dionisi",
        "amount": 1295746.17,
        "count": 85,
        "avg": 15244,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 67,
          "Retail-Financing": 10,
          "Insurance": 5
        },
        "installs": 69,
        "repairs": 16
      }
    ],
    "speedSellers": [
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
        "name": "Adam Petulla",
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
        "deals": 72,
        "pct": 43.1
      },
      {
        "name": "Luke Duquette",
        "repairs": 15,
        "deals": 42,
        "pct": 35.7
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
          "sub": "Median | Mean: 62 days"
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
          "mean": 23,
          "count": 2439
        },
        {
          "label": "Retail-Fin",
          "median": 3,
          "mean": 15,
          "count": 516
        },
        {
          "label": "Insurance",
          "median": 27,
          "mean": 62,
          "count": 1831
        },
        {
          "label": "Repair",
          "median": 3,
          "mean": 14,
          "count": 667
        },
        {
          "label": "Install",
          "median": 10,
          "mean": 40,
          "count": 4222
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
          "market": "Detroit Metro",
          "median": 4,
          "mean": 22,
          "count": 725
        },
        {
          "market": "Nashville",
          "median": 5,
          "mean": 22,
          "count": 333
        },
        {
          "market": "Cincinnati",
          "median": 6,
          "mean": 24,
          "count": 267
        },
        {
          "market": "Raleigh",
          "median": 7,
          "mean": 52,
          "count": 165
        },
        {
          "market": "DC Metro",
          "median": 9,
          "mean": 44,
          "count": 361
        },
        {
          "market": "Columbus",
          "median": 10,
          "mean": 39,
          "count": 1758
        },
        {
          "market": "Knoxville",
          "median": 13,
          "mean": 40,
          "count": 148
        },
        {
          "market": "Cleveland",
          "median": 14,
          "mean": 39,
          "count": 530
        },
        {
          "market": "Dayton",
          "median": 15,
          "mean": 42,
          "count": 239
        },
        {
          "market": "NOVA",
          "median": 18,
          "mean": 63,
          "count": 15
        },
        {
          "market": "Richmond",
          "median": 25,
          "mean": 81,
          "count": 217
        },
        {
          "market": "Grand Rapids",
          "median": 33,
          "mean": 53,
          "count": 39
        }
      ],
      "starInsuranceClosers": [
        {
          "name": "Jacob Perry",
          "medDays": 2,
          "count": 8
        },
        {
          "name": "Tyler Mentges",
          "medDays": 3,
          "count": 3
        },
        {
          "name": "Nelson Sutton",
          "medDays": 3,
          "count": 4
        },
        {
          "name": "Brian Sullivan",
          "medDays": 3,
          "count": 6
        },
        {
          "name": "Scott Scaperato-INACTIVE",
          "medDays": 4,
          "count": 12
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
      "recent4WkAvg": 2086843.83
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
          "liveActual": 11740887.64
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
      "generatedAt": "2026-09-28T14:40:34-04:00",
      "modelRunDate": "2026-09-28",
      "fiscalYear": 2026,
      "gap": {
        "fullYearBudget": 123956895,
        "invoicedYtd": 67532475,
        "stillToInvoice": 56424420,
        "daysRemaining": 94,
        "weeksRemaining": 14
      },
      "bridge": {
        "rows": [
          {
            "label": "In Progress",
            "amount": 7268809,
            "convertPct": 97.2,
            "lands": 7064301,
            "note": "Already installing. Needs completion and billing only."
          },
          {
            "label": "Not Started",
            "amount": 10812274,
            "convertPct": 92.6,
            "lands": 10012533,
            "note": "Sold and processed, awaiting schedule. Throughput decides this."
          },
          {
            "label": "Sold Not Processed",
            "amount": 1884792,
            "convertPct": 92.6,
            "lands": 1745382,
            "note": "Signed but not yet a job. Processing delay is pure lost time."
          }
        ],
        "alreadySoldLands": 18822215,
        "mustBeNewlySoldNet": 37602204,
        "mustBeNewlySoldGross": 60669685,
        "meanCapturePct": 62
      },
      "sellingWindow": {
        "weeks": [
          {
            "weekStart": "09/28/2026",
            "daysToYearEnd": 94,
            "capturePct": 92.6,
            "valueOfOneMillion": 926034
          },
          {
            "weekStart": "10/05/2026",
            "daysToYearEnd": 87,
            "capturePct": 91.3,
            "valueOfOneMillion": 913043
          },
          {
            "weekStart": "10/12/2026",
            "daysToYearEnd": 80,
            "capturePct": 89.5,
            "valueOfOneMillion": 894751
          },
          {
            "weekStart": "10/19/2026",
            "daysToYearEnd": 73,
            "capturePct": 87.6,
            "valueOfOneMillion": 875928
          },
          {
            "weekStart": "10/26/2026",
            "daysToYearEnd": 66,
            "capturePct": 84.7,
            "valueOfOneMillion": 847031
          },
          {
            "weekStart": "11/02/2026",
            "daysToYearEnd": 59,
            "capturePct": 80.9,
            "valueOfOneMillion": 809385
          },
          {
            "weekStart": "11/09/2026",
            "daysToYearEnd": 52,
            "capturePct": 76.5,
            "valueOfOneMillion": 765376
          },
          {
            "weekStart": "11/16/2026",
            "daysToYearEnd": 45,
            "capturePct": 71.7,
            "valueOfOneMillion": 717391
          },
          {
            "weekStart": "11/23/2026",
            "daysToYearEnd": 38,
            "capturePct": 64.7,
            "valueOfOneMillion": 646607
          },
          {
            "weekStart": "11/30/2026",
            "daysToYearEnd": 31,
            "capturePct": 54.5,
            "valueOfOneMillion": 545069
          },
          {
            "weekStart": "12/07/2026",
            "daysToYearEnd": 24,
            "capturePct": 40.2,
            "valueOfOneMillion": 401644
          },
          {
            "weekStart": "12/14/2026",
            "daysToYearEnd": 17,
            "capturePct": 24.3,
            "valueOfOneMillion": 243107
          },
          {
            "weekStart": "12/21/2026",
            "daysToYearEnd": 10,
            "capturePct": 8.6,
            "valueOfOneMillion": 86161
          },
          {
            "weekStart": "12/28/2026",
            "daysToYearEnd": 3,
            "capturePct": 0.6,
            "valueOfOneMillion": 5567
          }
        ],
        "belowThreeQuartersFrom": "11/16/2026",
        "belowHalfFrom": "12/07/2026"
      },
      "pullForward": {
        "backlogTotal": 19965876,
        "perDay": 26040,
        "perWeek": 181750,
        "leverageCurve": [
          {
            "daysBeforeYearEnd": 94,
            "onDate": "09/28/2026",
            "worthPerDay": 26040
          },
          {
            "daysBeforeYearEnd": 60,
            "onDate": "11/01/2026",
            "worthPerDay": 73695
          },
          {
            "daysBeforeYearEnd": 45,
            "onDate": "11/16/2026",
            "worthPerDay": 110003
          },
          {
            "daysBeforeYearEnd": 30,
            "onDate": "12/01/2026",
            "worthPerDay": 213104
          },
          {
            "daysBeforeYearEnd": 21,
            "onDate": "12/10/2026",
            "worthPerDay": 384925
          },
          {
            "daysBeforeYearEnd": 14,
            "onDate": "12/17/2026",
            "worthPerDay": 472593
          },
          {
            "daysBeforeYearEnd": 7,
            "onDate": "12/24/2026",
            "worthPerDay": 551538
          }
        ],
        "strandedBacklog": 1143660,
        "completedAwaitingInvoice": {
          "total": 2385480,
          "jobs": 122,
          "medianAgeDays": 24,
          "agingBuckets": [
            {
              "bucket": "0-15 days",
              "jobs": 32,
              "amount": 632279
            },
            {
              "bucket": "15-30 days",
              "jobs": 16,
              "amount": 345638
            },
            {
              "bucket": "30-60 days",
              "jobs": 21,
              "amount": 446540
            },
            {
              "bucket": "60-90 days",
              "jobs": 9,
              "amount": 136330
            },
            {
              "bucket": "over 90 days",
              "jobs": 4,
              "amount": 36398
            }
          ],
          "byReason": [
            {
              "reason": "Ready to Invoice",
              "jobs": 37,
              "amount": 863084
            },
            {
              "reason": "Pending Supplement",
              "jobs": 45,
              "amount": 859403
            },
            {
              "reason": "Accounting Kickback",
              "jobs": 31,
              "amount": 587809
            },
            {
              "reason": "Unspecified",
              "jobs": 9,
              "amount": 75185
            }
          ],
          "note": "Work finished but not invoiced. No selling and no scheduling required, only the blocking process cleared."
        },
        "note": "Revenue moved into 2026 by finishing and billing existing work sooner. Requires no new selling."
      },
      "capacity": {
        "requiredPerWeek": 4333549,
        "demonstratedPerWeek": 2422900,
        "liftRequiredPct": 78.9,
        "trendPerWeek": -14471
      },
      "scenarios": [
        {
          "name": "Hold current pace",
          "weeklySales": 2422900,
          "newSalesRevenue": 21023507,
          "landsAt": 107378197,
          "note": "Trailing 4-week average, carried flat."
        },
        {
          "name": "Stretch +15%",
          "weeklySales": 2786336,
          "newSalesRevenue": 24177033,
          "landsAt": 110531724,
          "note": "Ambitious but inside what the team has produced before."
        },
        {
          "name": "Required to hit plan",
          "weeklySales": 4333549,
          "newSalesRevenue": 37602204,
          "landsAt": 123956895,
          "note": "What closing the full gap by selling alone would take."
        }
      ],
      "modelComparison": {
        "v5FullYear": 95493440,
        "paceLandingZone": 107378197,
        "note": "V5 is the forecast of record. The pace landing zone runs higher because these conversion rates are drawn from jobs that did invoice and because V5 also carries a declining sales trend."
      },
      "verdict": {
        "band": "not-reachable",
        "headline": "Plan is not reachable by selling alone. Closing the gap needs a production pull-forward, a budget reset, or both.",
        "reasons": [
          "Required $4,333,549/wk against a demonstrated $2,422,900/wk, a 79% lift.",
          "Sales are trending down $14,471 per week, not flat.",
          "After 11/16/2026, under 75% of what is sold still invoices this year.",
          "$18,822,215 of the gap is already sold and needs production, not selling."
        ]
      }
    },
    "commentary": {
      "whatsWorking": [
        "Sales Trajectory: Monthly sales moved from January $3.16M to October $6.17M (+95%). Annualized run rate: $111.32M.",
        "Premium Deal Types: Insurance averages $20,537 per deal. Retail-Financing averages $21,445 (highest per-deal value). Retail-No Financing averages $13,676 (the volume engine).",
        "Sold Conversion: 5,086 of 5,206 signed contracts (97.7%) have made it to Sold status for $86.99M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Kickback Concentration: Columbus has the most kickbacks (5, $79K). Total company kickbacks: 21 worth $437K.",
        "Production Review Queue: 91 deals worth $1.83M sitting in Production Review. Watch for backlog growth, it delays revenue recognition."
      ],
      "criticalRisks": [
        "Columbus Kickback Concentration drives the company's largest single-market rework volume.",
        "Pipeline kickbacks company-wide: 21 kickbacks totaling $437K.",
        "Production Review backlog: 91 deals ($1.83M)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 4d median close on 2,955 retail deals.",
        "Insurance Density: $20,537 avg on 1,954 deals = $40.13M; +20% lift = ~$8.03M.",
        "Financing Lifts Ticket: Retail-Financing averages $21,445, highest per-deal value."
      ],
      "fixList": [
        "Columbus Pipeline Kickback Intervention, pull every kickback and categorize root cause.",
        "Production Review Bottleneck, 91 deals; add temporary PM capacity.",
        "Financing Push, 528 financing deals YTD (10.1%) at $21,445 avg. Target 15% mix."
      ],
      "actionPlan": {
        "thisWeek": [
          "Columbus Pipeline Kickback Review, meet with branch leadership.",
          "Production Review Surge Plan, 91 deals ($1.83M) in queue."
        ],
        "thisMonth": [
          "Supplement Escalation SOP, 7/14/30 day cadence with carrier escalation.",
          "Completed-to-Billing SLA, 100% invoiced within 21 days.",
          "Repair Triage Pilot in markets where repair rate exceeds 25%.",
          "Financing Training, peer training led by top financing reps. Target 15% mix."
        ],
        "thisQuarter": [
          "Add Kickback Reason field to accounting workflow.",
          "Repair Business Decision, 722 repairs YTD at ~$2,475 avg.",
          "Ops Capacity Planning, October hit 337 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "title": "Residential Revenue Forecast",
    "subtitle": "V5 Model with Job Type Analysis · Data as of October 20, 2026",
    "runDate": "October 20, 2026",
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
        "value": "$87.3M",
        "sub": "Jobs processed into system"
      },
      {
        "label": "Invoiced YTD",
        "value": "$76.87M",
        "sub": "NetSuite AR · 4328 invoices booked"
      },
      {
        "label": "4-Week Avg Weekly Sales",
        "value": "$2.6M",
        "sub": "Trend: -24,806/week"
      },
      {
        "label": "Current Week (Projected)",
        "value": "$3M",
        "sub": "WTD: $552K"
      },
      {
        "label": "Annual Forecast",
        "value": "$109.9M",
        "sub": "Model invoiced revenue"
      },
      {
        "label": "Annual Budget",
        "value": "$125.9M",
        "sub": "Board plan · full year"
      },
      {
        "label": "Forecast vs Budget",
        "value": "-$16M",
        "sub": "12.7% under plan"
      },
      {
        "label": "Active Pipeline",
        "value": "$21.1M",
        "sub": "Backlog + IP + SNP"
      }
    ],
    "execSummary": {
      "budget": 125890005.2103,
      "modelAnnualInvoiced": 109892766.3822,
      "gap": 15997238.8281,
      "narrative": "The V5 model projects $109.9M in annual invoiced revenue against a $125.9M plan. The challenge is timing, not volume: Q1 ramped slowly so Q2 invoicing will lag. If the current weekly pace of $2.6M holds, H2 should catch up as earlier sales convert to invoiced revenue."
    },
    "monthRevenue": {
      "april": {
        "invoiced": 8405959.810000002,
        "wipChange": -7023183.34,
        "netRevenue": 1382776.4700000025,
        "beginningWip": 7023183.34,
        "endingWip": 0,
        "materialCost": 3999612.2578,
        "laborCost": 2406120.5813,
        "grossProfit": -3499640.5592,
        "grossMarginPct": -120.4243
      },
      "may": {
        "invoiced": 8564976.120000001,
        "wipChange": 0,
        "netRevenue": 8564976.120000001,
        "beginningWip": 0,
        "endingWip": 0,
        "materialCost": 4667418.0759,
        "laborCost": 2807864.8554,
        "grossProfit": 5671009.6459,
        "grossMarginPct": 43.1377
      }
    },
    "weeklyTargetsHeader": {
      "avgWeeklyNeed": 2421155.1081,
      "recent4WkAvg": 2604923.8225,
      "gap": 0,
      "productionAvgWeeklyNeed": 2634688.9054,
      "productionCycleStart": 13,
      "productionCycleComplete": 8,
      "productionTotalCycle": 21
    },
    "budgetRecoveryHeader": {
      "fullYearBudget": 125890005.2103,
      "gap": 19404550.3329,
      "upliftPct": 1.3,
      "aprilGap": 147994.4433,
      "q1OriginalBudget": 89469741.5096,
      "q1Actual": 70213185.62,
      "q1Shortfall": 19256555.8896,
      "recoveryRatio": 1.844
    },
    "profitabilitySummary": {
      "combinedGP": 60091282.6,
      "combinedGP_pct": 40.29,
      "combinedRevenue": 149147062.46,
      "y2025_GP_pct": 41.5548,
      "y2025_revenue": 74004425.33,
      "y2025_jobs": 3503,
      "y2026_GP_pct": 39.0443,
      "y2026_revenue": 75142637.13,
      "y2026_jobs": 3910,
      "materialCost": 55388300.94,
      "laborCost": 33320962.7,
      "commissions": 12958302.48,
      "materialPctContract": 37.1367,
      "laborPctContract": 22.341,
      "commissionPctContract": 8.6883
    },
    "pipelineSnapshot": {
      "stages": [
        {
          "label": "New Sales",
          "subtitle": "97 jobs · 3d avg",
          "value": 1971462.72,
          "jobs": 97,
          "color": "#3b82f6",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 28,
              "value": 607516.56
            },
            {
              "market": "Detroit Metro",
              "jobs": 17,
              "value": 360618.43
            },
            {
              "market": "Cleveland",
              "jobs": 9,
              "value": 270481.98
            },
            {
              "market": "DC Metro",
              "jobs": 16,
              "value": 240911.51
            },
            {
              "market": "Cincinnati",
              "jobs": 7,
              "value": 157639.72
            },
            {
              "market": "Richmond",
              "jobs": 3,
              "value": 78639.28
            },
            {
              "market": "Greenville",
              "jobs": 4,
              "value": 71897.86
            },
            {
              "market": "Nashville",
              "jobs": 2,
              "value": 63096.97
            },
            {
              "market": "Knoxville",
              "jobs": 3,
              "value": 47216.41
            },
            {
              "market": "Raleigh",
              "jobs": 3,
              "value": 37450
            },
            {
              "market": "Dayton",
              "jobs": 5,
              "value": 35994
            }
          ],
          "avgDays": 2.7,
          "medianDays": 1
        },
        {
          "label": "Backlog",
          "subtitle": "483 jobs · 27d avg",
          "value": 10877289.35,
          "jobs": 483,
          "color": "#f97316",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 193,
              "value": 4852111.12
            },
            {
              "market": "Cleveland",
              "jobs": 79,
              "value": 1560778.25
            },
            {
              "market": "Detroit Metro",
              "jobs": 71,
              "value": 1432661.31
            },
            {
              "market": "Cincinnati",
              "jobs": 40,
              "value": 798737.35
            },
            {
              "market": "Richmond",
              "jobs": 25,
              "value": 694283.28
            },
            {
              "market": "DC Metro",
              "jobs": 24,
              "value": 521845.91
            },
            {
              "market": "Nashville",
              "jobs": 14,
              "value": 394229.82
            },
            {
              "market": "Dayton",
              "jobs": 14,
              "value": 199665.87
            },
            {
              "market": "Knoxville",
              "jobs": 7,
              "value": 133571.84
            },
            {
              "market": "Raleigh",
              "jobs": 8,
              "value": 128163.98
            },
            {
              "market": "Greenville",
              "jobs": 6,
              "value": 115438.69
            },
            {
              "market": "Grand Rapids",
              "jobs": 2,
              "value": 45801.93
            }
          ],
          "avgDays": 27.2,
          "medianDays": 16
        },
        {
          "label": "In Progress",
          "subtitle": "296 jobs",
          "value": 8293776.26,
          "jobs": 296,
          "color": "#22c55e",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 120,
              "value": 3158585.42
            },
            {
              "market": "Cleveland",
              "jobs": 84,
              "value": 2098972.29
            },
            {
              "market": "Richmond",
              "jobs": 15,
              "value": 664723.12
            },
            {
              "market": "Nashville",
              "jobs": 6,
              "value": 630614.36
            },
            {
              "market": "Detroit Metro",
              "jobs": 18,
              "value": 502874.17
            },
            {
              "market": "DC Metro",
              "jobs": 14,
              "value": 481083.25
            },
            {
              "market": "Cincinnati",
              "jobs": 12,
              "value": 279016.39
            },
            {
              "market": "Dayton",
              "jobs": 9,
              "value": 234399.51
            },
            {
              "market": "Greenville",
              "jobs": 10,
              "value": 131668.52
            },
            {
              "market": "Raleigh",
              "jobs": 4,
              "value": 54593.2
            },
            {
              "market": "Knoxville",
              "jobs": 3,
              "value": 45824.93
            },
            {
              "market": "Grand Rapids",
              "jobs": 1,
              "value": 11421.1
            }
          ],
          "avgDays": null,
          "medianDays": null
        },
        {
          "label": "Completed",
          "subtitle": "58 jobs",
          "value": 1150033.53,
          "jobs": 58,
          "color": "#a855f7",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 28,
              "value": 555687.23
            },
            {
              "market": "Cleveland",
              "jobs": 9,
              "value": 152372.66
            },
            {
              "market": "Richmond",
              "jobs": 6,
              "value": 152017.22
            },
            {
              "market": "DC Metro",
              "jobs": 5,
              "value": 97406.36
            },
            {
              "market": "Nashville",
              "jobs": 2,
              "value": 50302.76
            },
            {
              "market": "Knoxville",
              "jobs": 2,
              "value": 50170.18
            },
            {
              "market": "Cincinnati",
              "jobs": 2,
              "value": 47423.06
            },
            {
              "market": "Dayton",
              "jobs": 2,
              "value": 22051
            },
            {
              "market": "Raleigh",
              "jobs": 1,
              "value": 22000
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
      "totalJobs": 934,
      "totalValue": 22292561.86
    },
    "commentary": {
      "actionableRecommendations": [
        "Hold weekly sales pace at or above $2.4M to defend the May invoicing target.",
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
            22292561.86,
            10105160.9,
            7297757.2529,
            -903967.8071
          ],
          [
            "May 2026",
            14117621.6688,
            22292561.86,
            11714245.78,
            9770749.1459,
            -4346872.5229
          ],
          [
            "Jun 2026",
            14800571.2162,
            22292561.86,
            11842012.17,
            11606951.7366,
            -3193619.4795
          ],
          [
            "Jul 2026",
            11641331.0926,
            22292561.86,
            11699229.89,
            9159526.8387,
            -2481804.2539
          ],
          [
            "Aug 2026",
            12738223.8858,
            22292561.86,
            10098060.87,
            12621655.9735,
            -116567.9123
          ],
          [
            "Sep 2026",
            13673037.2551,
            22292561.86,
            14279316.82,
            5484661.2519,
            -8188376.0032
          ],
          [
            "Oct 2026",
            13483638.9808,
            22292561.86,
            14052683.1431,
            13416667.7905,
            -66971.1903
          ],
          [
            "Nov 2026",
            12392297.9669,
            18216457.4974,
            11721988.534,
            12153841.5839,
            -238456.3831
          ],
          [
            "Dec 2026",
            7988852.274,
            8679072.7603,
            8564344.623,
            8289181.8172,
            300329.5432
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
            22292561.86,
            7501992.0029,
            903967.8071,
            10105160.9
          ],
          [
            "May 2026",
            22292561.86,
            9871735.7625,
            0,
            11714245.78
          ],
          [
            "Jun 2026",
            22292561.86,
            10998793.4943,
            89629.8157,
            11842012.17
          ],
          [
            "Jul 2026",
            22292561.86,
            11369004.451,
            0,
            11699229.89
          ],
          [
            "Aug 2026",
            22292561.86,
            10678982.6703,
            0,
            10098060.87
          ],
          [
            "Sep 2026",
            22292561.86,
            12507844.5919,
            0,
            14279316.82
          ],
          [
            "Oct 2026",
            22292561.86,
            6029217.8947,
            7535444.339,
            14052683.1431
          ],
          [
            "Nov 2026",
            18216457.4974,
            2455750.2235,
            10331538.4042,
            11721988.534
          ],
          [
            "Dec 2026",
            8679072.7603,
            1013688.8622,
            9054623.9771,
            8564344.623
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
            10105160.9,
            10105160.9,
            10105160.9
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
            11699229.89,
            11699229.89,
            11699229.89
          ],
          [
            "Aug 2026 [Actual]",
            13.4542,
            10098060.87,
            10098060.87,
            10098060.87
          ],
          [
            "Sep 2026 [Actual]",
            12.0952,
            14279316.82,
            14279316.82,
            14279316.82
          ],
          [
            "Oct 2026",
            11.3828,
            0,
            16065378.5575,
            17856171.6221
          ],
          [
            "Nov 2026",
            7.7142,
            0,
            10887595.4963,
            12101225.8154
          ],
          [
            "Dec 2026",
            2.7932,
            0,
            3942186.8928,
            4381618.8627
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
            "Wk 10/18",
            5851401.4326,
            3173186.5162,
            2678214.9164
          ],
          [
            "Wk 10/25",
            5851401.4326,
            3173186.5162,
            2678214.9164
          ],
          [
            "Wk 11/01",
            5043620.1492,
            2735130.6579,
            2308489.4912
          ],
          [
            "Wk 11/08",
            5043620.1492,
            2735130.6579,
            2308489.4912
          ],
          [
            "Wk 11/15",
            5043620.1492,
            2735130.6579,
            2308489.4912
          ],
          [
            "Wk 11/22",
            5043620.1492,
            2735130.6579,
            2308489.4912
          ],
          [
            "Wk 11/29",
            3988255.9863,
            2162811.8092,
            1825444.1771
          ],
          [
            "Wk 12/06",
            3566110.3211,
            1933884.2697,
            1632226.0514
          ],
          [
            "Wk 12/13",
            3566110.3211,
            1933884.2697,
            1632226.0514
          ],
          [
            "Wk 12/20",
            3566110.3211,
            1933884.2697,
            1632226.0514
          ],
          [
            "Wk 12/27",
            2547221.6579,
            1381345.9069,
            1165875.751
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
            23833.5638,
            18,
            1324.0869,
            40.6173,
            38658040.46
          ],
          [
            "Retail-Financing",
            21954.583,
            19,
            1155.5044,
            60.2062,
            10647972.77
          ],
          [
            "Retail-No Financing",
            19111.8871,
            19,
            1005.8888,
            61.2403,
            34554291.92
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
            1622,
            23833.5638
          ],
          [
            "Retail-Financing",
            13,
            6,
            19,
            485,
            21954.583
          ],
          [
            "Retail-No Financing",
            13,
            6,
            19,
            1808,
            19111.8871
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
            193,
            4852111.12
          ],
          [
            "Cleveland",
            79,
            1560778.25
          ],
          [
            "Detroit Metro",
            71,
            1432661.31
          ],
          [
            "Cincinnati",
            40,
            798737.35
          ],
          [
            "Richmond",
            25,
            694283.28
          ],
          [
            "DC Metro",
            24,
            521845.91
          ],
          [
            "Nashville",
            14,
            394229.82
          ],
          [
            "Dayton",
            14,
            199665.87
          ],
          [
            "Knoxville",
            7,
            133571.84
          ],
          [
            "Raleigh",
            8,
            128163.98
          ],
          [
            "Greenville",
            6,
            115438.69
          ],
          [
            "Grand Rapids",
            2,
            45801.93
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
            120,
            3158585.42
          ],
          [
            "Cleveland",
            84,
            2098972.29
          ],
          [
            "Richmond",
            15,
            664723.12
          ],
          [
            "Nashville",
            6,
            630614.36
          ],
          [
            "Detroit Metro",
            18,
            502874.17
          ],
          [
            "DC Metro",
            14,
            481083.25
          ],
          [
            "Cincinnati",
            12,
            279016.39
          ],
          [
            "Dayton",
            9,
            234399.51
          ],
          [
            "Greenville",
            10,
            131668.52
          ],
          [
            "Raleigh",
            4,
            54593.2
          ],
          [
            "Knoxville",
            3,
            45824.93
          ],
          [
            "Grand Rapids",
            1,
            11421.1
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
            28,
            607516.56
          ],
          [
            "Detroit Metro",
            17,
            360618.43
          ],
          [
            "Cleveland",
            9,
            270481.98
          ],
          [
            "DC Metro",
            16,
            240911.51
          ],
          [
            "Cincinnati",
            7,
            157639.72
          ],
          [
            "Richmond",
            3,
            78639.28
          ],
          [
            "Greenville",
            4,
            71897.86
          ],
          [
            "Nashville",
            2,
            63096.97
          ],
          [
            "Knoxville",
            3,
            47216.41
          ],
          [
            "Raleigh",
            3,
            37450
          ],
          [
            "Dayton",
            5,
            35994
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
            28,
            555687.23
          ],
          [
            "Cleveland",
            9,
            152372.66
          ],
          [
            "Richmond",
            6,
            152017.22
          ],
          [
            "DC Metro",
            5,
            97406.36
          ],
          [
            "Nashville",
            2,
            50302.76
          ],
          [
            "Knoxville",
            2,
            50170.18
          ],
          [
            "Cincinnati",
            2,
            47423.06
          ],
          [
            "Dayton",
            2,
            22051
          ],
          [
            "Raleigh",
            1,
            22000
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
            1130105.33,
            46.6763
          ],
          [
            "Retail-No Financing",
            969976.1218,
            40.0625
          ],
          [
            "Retail-Financing",
            321073.6563,
            13.2612
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
            1311846.2509,
            54.1827
          ],
          [
            "Gutters",
            919075.0833,
            37.9602
          ],
          [
            "Siding",
            57829.4064,
            2.3885
          ],
          [
            "Rack Mounted Solar",
            25369.6604,
            1.0478
          ],
          [
            "Metal",
            23893.3306,
            0.9869
          ],
          [
            "GAF Solar",
            16955.5386,
            0.7003
          ],
          [
            "Flat Roof",
            16617.2291,
            0.6863
          ],
          [
            "Masonry",
            16422.0795,
            0.6783
          ],
          [
            "Painting",
            10397.8864,
            0.4295
          ],
          [
            "Carpentry",
            9013.2813,
            0.3723
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
            "Wk 10/18",
            "Oct",
            3173186.5162
          ],
          [
            "Wk 10/25",
            "Oct",
            3173186.5162
          ],
          [
            "Wk 11/01",
            "Nov",
            2735130.6579
          ],
          [
            "Wk 11/08",
            "Nov",
            2735130.6579
          ],
          [
            "Wk 11/15",
            "Nov",
            2735130.6579
          ],
          [
            "Wk 11/22",
            "Nov",
            2735130.6579
          ],
          [
            "Wk 11/29",
            "Nov",
            2162811.8092
          ],
          [
            "Wk 12/06",
            "Dec",
            1933884.2697
          ],
          [
            "Wk 12/13",
            "Dec",
            1933884.2697
          ],
          [
            "Wk 12/20",
            "Dec",
            1933884.2697
          ],
          [
            "Wk 12/27",
            "Dec",
            1381345.9069
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
              1195376.29,
              1589852.56,
              2360846.42,
              2209259.5,
              2709223.35,
              3056922.73,
              3334263.04,
              2530755.7,
              2556204.57,
              2644989.19,
              2584908.65,
              2814740.46,
              3246224.14,
              2631254.36,
              1796725.51,
              2590375.72,
              2044281.41,
              2241746.93,
              2383296.45,
              2744582.66,
              2832525.01,
              1963559.42,
              2762449.55,
              2732600.57,
              2569049.85,
              2682117.75,
              2620252.04,
              2583721.59,
              2554683.83,
              3319761.12,
              2287985.62,
              2257264.72,
              2973213.0229,
              2472923.9824,
              2448118.4219,
              2423312.8614,
              2398507.301,
              2373701.7405,
              2348896.18,
              2324090.6195,
              2299285.059,
              2274479.4986,
              2249673.9381
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
              7297757.2529,
              9770749.1459,
              11606951.7366,
              9159526.8387,
              12621655.9735,
              5484661.2519,
              13416667.7905,
              12153841.5839,
              8289181.8172
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
              10105160.9,
              11714245.78,
              11842012.17,
              11699229.89,
              10098060.87,
              14279316.82,
              14052683.1431,
              11721988.534,
              8564344.623
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
              3076499.6799,
              3089901.5363,
              4463869.7755,
              7501992.0029,
              9871735.7625,
              10998793.4943,
              11369004.451,
              10678982.6703,
              12507844.5919,
              13416667.7905,
              12548832.2446,
              10368642.3824
            ]
          },
          {
            "label": "From Known Sales",
            "data": [
              3076499.6799,
              3089901.5363,
              4463869.7755,
              7501992.0029,
              9871735.7625,
              10998793.4943,
              11369004.451,
              10678982.6703,
              12507844.5919,
              6029217.8947,
              2455750.2235,
              1013688.8622
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
              39.6429,
              13.2597,
              10.5385,
              7.012,
              6.5138,
              5.2912,
              4.9276,
              4.6387,
              2.7826,
              2.6065
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
              40.6173,
              30.6173,
              16.6667,
              6.6049,
              2.6543,
              1.4198
            ]
          },
          {
            "label": "Retail-Financing",
            "data": [
              60.2062,
              28.2474,
              7.6289,
              1.2371,
              1.0309,
              0.4124
            ]
          },
          {
            "label": "Retail-No Financing",
            "data": [
              61.2403,
              25.526,
              7.2536,
              2.9347,
              1.4396,
              0.8859
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
      13416667.7905,
      12548832.2446,
      10368642.3824
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
      6029217.8947,
      2455750.2235,
      1013688.8622
    ],
    "requiredSales": [
      3257140.76,
      3101368.34,
      5679200.03,
      10105160.9,
      11714245.78,
      11842012.17,
      11699229.89,
      10098060.87,
      14279316.82,
      14052683.1431,
      11721988.534,
      8564344.623
    ],
    "backlogData": [
      {
        "month": "Jan 2026",
        "total_backlog": 22292561.86,
        "wip_est": 9443809.79,
        "not_started": 12848752.07,
        "budget_rev": 3312733.06,
        "pipeline_backlog": 22292561.86,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 3076499.6799,
        "revenue_gap": 236233.3801,
        "adjusted_required_sales": 3257140.76,
        "backlog_surplus": 19035421.1
      },
      {
        "month": "Feb 2026",
        "total_backlog": 22292561.86,
        "wip_est": 9443809.79,
        "not_started": 12848752.07,
        "budget_rev": 2855781.11,
        "pipeline_backlog": 22292561.86,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 3089901.5363,
        "revenue_gap": 0,
        "adjusted_required_sales": 3101368.34,
        "backlog_surplus": 19191193.52
      },
      {
        "month": "Mar 2026",
        "total_backlog": 22292561.86,
        "wip_est": 9443809.79,
        "not_started": 12848752.07,
        "budget_rev": 6228299.34,
        "pipeline_backlog": 22292561.86,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 4463869.7755,
        "revenue_gap": 1764429.5645,
        "adjusted_required_sales": 5679200.03,
        "backlog_surplus": 16613361.83
      },
      {
        "month": "Apr 2026",
        "total_backlog": 22292561.86,
        "wip_est": 9443809.79,
        "not_started": 12848752.07,
        "budget_rev": 8405959.81,
        "pipeline_backlog": 22292561.86,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 7501992.0029,
        "revenue_gap": 903967.8071,
        "adjusted_required_sales": 10105160.9,
        "backlog_surplus": 12187400.96
      },
      {
        "month": "May 2026",
        "total_backlog": 22292561.86,
        "wip_est": 13375537.116,
        "not_started": 8917024.744,
        "budget_rev": 8564976.12,
        "pipeline_backlog": 22292561.86,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 9871735.7625,
        "revenue_gap": 0,
        "adjusted_required_sales": 11714245.78,
        "backlog_surplus": 10578316.08
      },
      {
        "month": "Jun 2026",
        "total_backlog": 22292561.86,
        "wip_est": 13375537.116,
        "not_started": 8917024.744,
        "budget_rev": 11088423.31,
        "pipeline_backlog": 22292561.86,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 10998793.4943,
        "revenue_gap": 89629.8157,
        "adjusted_required_sales": 11842012.17,
        "backlog_surplus": 10450549.69
      },
      {
        "month": "Jul 2026",
        "total_backlog": 22292561.86,
        "wip_est": 13375537.116,
        "not_started": 8917024.744,
        "budget_rev": 10676120.9,
        "pipeline_backlog": 22292561.86,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 11369004.451,
        "revenue_gap": 0,
        "adjusted_required_sales": 11699229.89,
        "backlog_surplus": 10593331.97
      },
      {
        "month": "Aug 2026",
        "total_backlog": 22292561.86,
        "wip_est": 13375537.116,
        "not_started": 8917024.744,
        "budget_rev": 9151616.35,
        "pipeline_backlog": 22292561.86,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 10678982.6703,
        "revenue_gap": 0,
        "adjusted_required_sales": 10098060.87,
        "backlog_surplus": 12194500.99
      },
      {
        "month": "Sep 2026",
        "total_backlog": 22292561.86,
        "wip_est": 13375537.116,
        "not_started": 8917024.744,
        "budget_rev": 9929275.62,
        "pipeline_backlog": 22292561.86,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 12507844.5919,
        "revenue_gap": 0,
        "adjusted_required_sales": 14279316.82,
        "backlog_surplus": 8013245.04
      },
      {
        "month": "Oct 2026",
        "total_backlog": 22292561.86,
        "wip_est": 13375537.116,
        "not_started": 8917024.744,
        "budget_rev": 13564662.2337,
        "pipeline_backlog": 22292561.86,
        "new_sales_backlog": 0,
        "pipe_invoicing": 10741337.61,
        "future_invoicing": 0,
        "rev_from_backlog": 6029217.8947,
        "revenue_gap": 7535444.339,
        "adjusted_required_sales": 14052683.1431,
        "backlog_surplus": 8239878.7169
      },
      {
        "month": "Nov 2026",
        "total_backlog": 18216457.4974,
        "wip_est": 10929874.4984,
        "not_started": 7286582.999,
        "budget_rev": 12787288.6277,
        "pipeline_backlog": 11551224.25,
        "new_sales_backlog": 6665233.2474,
        "pipe_invoicing": 11166291.25,
        "future_invoicing": 7344355.26,
        "rev_from_backlog": 2455750.2235,
        "revenue_gap": 10331538.4042,
        "adjusted_required_sales": 11721988.534,
        "backlog_surplus": 6494468.9633
      },
      {
        "month": "Dec 2026",
        "total_backlog": 8679072.7603,
        "wip_est": 5207443.6562,
        "not_started": 3471629.1041,
        "budget_rev": 10068312.8393,
        "pipeline_backlog": 384933,
        "new_sales_backlog": 8294139.7603,
        "pipe_invoicing": 384933,
        "future_invoicing": 9445195.87,
        "rev_from_backlog": 1013688.8622,
        "revenue_gap": 9054623.9771,
        "adjusted_required_sales": 8564344.623,
        "backlog_surplus": 114728.1373
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
      "source": "ResInvoicedYTDResults461.csv",
      "format": "per-invoice",
      "aggregatedOnly": false,
      "totalInvoiced": 76872684.38000001,
      "invoiceCount": 4328,
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
        6659498.76,
        0,
        0
      ],
      "byBranch": {
        "Greenville": {
          "invoiced": 1742374.4000000001,
          "count": 129
        },
        "Richmond": {
          "invoiced": 3816216.450000001,
          "count": 223
        },
        "DC Metro": {
          "invoiced": 5609871.259999999,
          "count": 323
        },
        "Cleveland": {
          "invoiced": 5887348.299999999,
          "count": 380
        },
        "Nashville": {
          "invoiced": 6197647.910000001,
          "count": 290
        },
        "Columbus": {
          "invoiced": 29264649.580000002,
          "count": 1573
        },
        "Dayton": {
          "invoiced": 4028776.3200000003,
          "count": 237
        },
        "Cincinnati": {
          "invoiced": 3760435.7100000014,
          "count": 218
        },
        "Detroit": {
          "invoiced": 10627291.439999998,
          "count": 566
        },
        "Raleigh": {
          "invoiced": 2751505.139999999,
          "count": 192
        },
        "Knoxville": {
          "invoiced": 2548956.1599999997,
          "count": 159
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
      "latestInvoiceDate": "2026-10-20",
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
      "totalJobs": 779,
      "totalWOs": 1253,
      "portfolioValue": 19243944.7,
      "avgDaysInStatus": 19,
      "lastBuild": "2026-10-21T12:51:08.177Z"
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
        "value": "779",
        "sub": "1,253 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "298",
        "sub": "38.3% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "481",
        "sub": "61.7% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "164",
        "sub": "55.0% of In Progress",
        "tone": "crit"
      },
      {
        "label": "Avg Days in Status",
        "value": "19",
        "sub": "Job-level average",
        "tone": "warn"
      },
      {
        "label": "Total Portfolio Value",
        "value": "$19.24M",
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
        "value": "$4.87M",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "164",
        "sub": "55.0% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$4.87M",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "199",
        "sub": "Across 164 jobs",
        "tone": "info"
      },
      {
        "label": "RTS Ready Today",
        "value": "74",
        "sub": "No blocker, dispatch now",
        "tone": "good"
      },
      {
        "label": "Top Trailing Trade",
        "value": "Gutters",
        "sub": "126 open WOs / 126 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "356",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "170",
        "sub": "47.8% of all holds",
        "tone": "warn"
      },
      {
        "label": "Pending Sales",
        "value": "24",
        "sub": "Awaiting sales disposition",
        "tone": "warn"
      },
      {
        "label": "Avg Hold Age",
        "value": "25d",
        "sub": "Mean days in hold across all sub-statuses",
        "tone": "info"
      }
    ],
    "kpisSales": [
      {
        "label": "Active Reps",
        "value": "108",
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
        "value": "55",
        "sub": "Reps carrying any >30d WO",
        "tone": "warn"
      },
      {
        "label": "Top Stuck Rep",
        "value": "$620K",
        "sub": "Highest single-rep stuck value",
        "tone": "warn"
      }
    ],
    "kpisBacklog": [
      {
        "label": "Not Started Jobs",
        "value": "481",
        "sub": "61.7% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$10.96M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "176d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Columbus",
        "sub": "189 jobs (39.3% of backlog)",
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
          "Completed",
          "In Progress",
          "Requires Additional Service",
          "New"
        ],
        "datasets": [
          {
            "label": "Work Orders",
            "data": [
              356,
              326,
              301,
              188,
              52,
              29,
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
          "Greenville",
          "Nashville",
          "Knoxville",
          "Raleigh",
          "Grand Rapids"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              87,
              66,
              6,
              5,
              7,
              5,
              4,
              4,
              2,
              0,
              1,
              1
            ]
          },
          {
            "label": "Open",
            "data": [
              25,
              17,
              7,
              4,
              8,
              7,
              3,
              3,
              5,
              2,
              1,
              0
            ]
          },
          {
            "label": "On Hold",
            "data": [
              147,
              107,
              43,
              14,
              11,
              18,
              6,
              4,
              5,
              0,
              0,
              1
            ]
          },
          {
            "label": "RTS",
            "data": [
              101,
              82,
              38,
              16,
              28,
              3,
              14,
              3,
              4,
              7,
              3,
              2
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              152,
              33,
              26,
              33,
              18,
              20,
              12,
              11,
              9,
              4,
              8,
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
          "In Progress",
          "New"
        ],
        "datasets": [
          {
            "label": "Avg Days",
            "data": [
              34,
              25,
              24,
              19,
              10,
              2,
              0
            ]
          },
          {
            "label": "Max Days",
            "data": [
              226,
              365,
              78,
              176,
              106,
              14,
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
          "Masonry",
          "Electrical",
          "Carpentry",
          "Stucco",
          "GAF Solar",
          "Other",
          "Painting"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              158,
              8,
              14,
              1,
              1,
              1,
              0,
              2,
              2,
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
              389,
              398,
              168,
              32,
              19,
              18,
              10,
              7,
              6,
              4,
              5,
              3,
              3,
              2,
              1
            ]
          }
        ]
      },
      {
        "id": "ch-incomplete-status",
        "labels": [
          "Ready to Schedule",
          "Scheduled",
          "On Hold",
          "Requires Additional Service",
          "In Progress"
        ],
        "datasets": [
          {
            "label": "WOs",
            "data": [
              74,
              71,
              35,
              11,
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
              44,
              18,
              66,
              36,
              21,
              14
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
          "Dayton",
          "Nashville",
          "Knoxville",
          "Raleigh",
          "Greenville",
          "Grand Rapids"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              189,
              79,
              71,
              41,
              26,
              25,
              14,
              14,
              7,
              7,
              6,
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
            512,
            87,
            147,
            101,
            152,
            14,
            10,
            74,
            310,
            7946093.36
          ],
          [
            "Cleveland",
            305,
            66,
            107,
            82,
            33,
            10,
            7,
            25,
            166,
            3676975.07
          ],
          [
            "Detroit Metro",
            120,
            6,
            43,
            38,
            26,
            5,
            2,
            33,
            87,
            2009030.48
          ],
          [
            "Cincinnati",
            72,
            5,
            14,
            16,
            33,
            4,
            0,
            10,
            53,
            1103717.74
          ],
          [
            "Richmond",
            72,
            7,
            11,
            28,
            18,
            7,
            1,
            7,
            40,
            1426789.58
          ],
          [
            "DC Metro",
            53,
            5,
            18,
            3,
            20,
            1,
            6,
            10,
            40,
            1000702.16
          ],
          [
            "Dayton",
            39,
            4,
            6,
            14,
            12,
            3,
            0,
            3,
            24,
            407829.8
          ],
          [
            "Greenville",
            25,
            4,
            4,
            3,
            11,
            3,
            0,
            3,
            16,
            247107.21
          ],
          [
            "Nashville",
            25,
            2,
            5,
            4,
            9,
            2,
            3,
            4,
            20,
            1024844.18
          ],
          [
            "Knoxville",
            13,
            0,
            0,
            7,
            4,
            2,
            0,
            0,
            10,
            179396.77
          ],
          [
            "Raleigh",
            13,
            1,
            0,
            3,
            8,
            1,
            0,
            0,
            10,
            164235.32
          ],
          [
            "Grand Rapids",
            4,
            1,
            1,
            2,
            0,
            0,
            0,
            1,
            3,
            57223.03
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
            168,
            14,
            365
          ],
          [
            "Pending Material",
            140,
            33,
            208
          ],
          [
            "Pending Sales",
            24,
            34,
            100
          ],
          [
            "Homeowner Request",
            20,
            53,
            148
          ],
          [
            "Pending HOA",
            3,
            14,
            27
          ],
          [
            "Pending Deposit",
            1,
            1,
            1
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
            126,
            126,
            3330532.12
          ],
          [
            "Siding",
            36,
            36,
            1073068.05
          ],
          [
            "Roofing",
            9,
            9,
            371627.67
          ],
          [
            "Metal",
            9,
            9,
            356869.16
          ],
          [
            "Windows",
            4,
            4,
            73598.26
          ],
          [
            "Masonry",
            3,
            3,
            97667
          ],
          [
            "Carpentry",
            3,
            3,
            325037.83
          ],
          [
            "Rack Mounted Solar",
            3,
            3,
            127462.88
          ],
          [
            "Flat Roof",
            2,
            2,
            71177
          ],
          [
            "Skylights",
            1,
            1,
            41771.55
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
            "Stucco",
            1,
            1,
            19829
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
            153
          ],
          [
            "Scheduled",
            131
          ],
          [
            "On Hold",
            108
          ],
          [
            "Completed",
            8
          ],
          [
            "Requires Additional Service",
            3
          ],
          [
            "In Progress",
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
            547,
            158,
            389,
            538,
            14779748.96
          ],
          [
            "Gutters",
            406,
            8,
            398,
            406,
            9734534.68
          ],
          [
            "Siding",
            182,
            14,
            168,
            181,
            3965187.53
          ],
          [
            "Rack Mounted Solar",
            33,
            1,
            32,
            27,
            1040724.07
          ],
          [
            "Windows",
            20,
            1,
            19,
            20,
            299872.18
          ],
          [
            "Metal",
            19,
            1,
            18,
            19,
            957589.54
          ],
          [
            "Skylights",
            10,
            0,
            10,
            10,
            158839.42
          ],
          [
            "Flat Roof",
            9,
            2,
            7,
            9,
            190617.16
          ],
          [
            "Masonry",
            8,
            2,
            6,
            7,
            222119.72
          ],
          [
            "Electrical",
            5,
            1,
            4,
            4,
            100893.26
          ],
          [
            "Carpentry",
            5,
            0,
            5,
            5,
            345437.83
          ],
          [
            "Stucco",
            3,
            0,
            3,
            3,
            81918.04
          ],
          [
            "GAF Solar",
            3,
            0,
            3,
            3,
            297784
          ],
          [
            "Other",
            2,
            0,
            2,
            2,
            131989
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
            19
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
            60,
            23,
            619625.68,
            43,
            3
          ],
          [
            "Nick Milliken",
            1,
            1,
            552024.2,
            1,
            1
          ],
          [
            "Justin Koenig",
            28,
            12,
            300841.84,
            13,
            1
          ],
          [
            "Hunter Carrington Scott",
            5,
            2,
            267717.61,
            3,
            1
          ],
          [
            "Richard Rice",
            6,
            5,
            179999,
            1,
            1
          ],
          [
            "Frank Butts",
            37,
            23,
            177360.5,
            15,
            1
          ],
          [
            "Jake Ross",
            28,
            16,
            175710.45,
            15,
            1
          ],
          [
            "Brian Ogrin",
            23,
            15,
            162453.67,
            3,
            1
          ],
          [
            "Derrick Sieber",
            9,
            7,
            158822,
            3,
            1
          ],
          [
            "Scott Scaperato-INACTIVE",
            17,
            10,
            149797.75,
            13,
            1
          ],
          [
            "Bryce Fink",
            28,
            17,
            143535.86,
            9,
            1
          ],
          [
            "Frank Drummond",
            32,
            22,
            139372.39,
            9,
            1
          ],
          [
            "Gary Benedict Jr",
            16,
            12,
            126576.42,
            5,
            1
          ],
          [
            "Michael Cox",
            13,
            8,
            122470.95,
            4,
            1
          ],
          [
            "Mark Younce",
            19,
            14,
            116652,
            2,
            3
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
            189,
            4764847.68,
            176
          ],
          [
            "Cleveland",
            79,
            1560778.25,
            90
          ],
          [
            "Detroit Metro",
            71,
            1536694.31,
            148
          ],
          [
            "Cincinnati",
            41,
            824701.35,
            37
          ],
          [
            "DC Metro",
            26,
            540418.91,
            127
          ],
          [
            "Richmond",
            25,
            762066.46,
            27
          ],
          [
            "Dayton",
            14,
            170627.87,
            26
          ],
          [
            "Nashville",
            14,
            394229.82,
            40
          ],
          [
            "Knoxville",
            7,
            133571.84,
            8
          ],
          [
            "Raleigh",
            7,
            112142.12,
            41
          ],
          [
            "Greenville",
            6,
            115438.69,
            8
          ],
          [
            "Grand Rapids",
            2,
            45801.93,
            22
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
            176,
            5800
          ],
          [
            "Job-107178",
            "Damien Pakula",
            "Detroit Metro",
            "Roofing",
            "Homeowner Request",
            "Gary Benedict Jr",
            148,
            13597
          ],
          [
            "Job-115035",
            "Erik Steensen",
            "DC Metro",
            "GAF Solar",
            "Pending Material",
            "Derrick Sieber",
            127,
            59822
          ],
          [
            "Job-112457",
            "Michelle  Pullens",
            "Columbus",
            "Siding",
            "Homeowner Request",
            "Mark Daggett",
            117,
            27000
          ],
          [
            "Job-109681",
            "George Potts",
            "DC Metro",
            "Roofing",
            "",
            "Dan Haske",
            106,
            24567
          ],
          [
            "Job-117302",
            "Marcia Williams",
            "Cleveland",
            "Siding",
            "Pending Material",
            "Jake Ross",
            90,
            19654.5
          ],
          [
            "Job-117309",
            "Eddie Black",
            "Cleveland",
            "Gutters",
            "Pending Material",
            "Frank Butts",
            89,
            16713.23
          ],
          [
            "Job-111901",
            "Suzanne Groot",
            "Detroit Metro",
            "Gutters",
            "Homeowner Request",
            "Matthew Ross",
            77,
            8800
          ],
          [
            "Job-118285",
            "George Mehallick",
            "Cleveland",
            "Siding",
            "Pending Material",
            "Bryce Fink",
            75,
            21490.53
          ],
          [
            "Job-118286",
            "Denise Evans Lane",
            "Cleveland",
            "Gutters",
            "Pending Material",
            "Frank Butts",
            75,
            12795.5
          ],
          [
            "Job-118287",
            "Miguel Matos",
            "Cleveland",
            "Siding",
            "Pending Material",
            "Frank Butts",
            75,
            11656.93
          ],
          [
            "Job-118348",
            "Angie & MIke Fleshman",
            "Columbus",
            "Siding",
            "Pending Sales",
            "Frank Drummond",
            72,
            2608
          ],
          [
            "Job-118681",
            "Roger Nolan",
            "Columbus",
            "Skylights",
            "Pending Material",
            "Frank Drummond",
            70,
            7506
          ],
          [
            "Job-118852",
            "Brian Baciak",
            "Cleveland",
            "Siding",
            "Pending Material",
            "Scott Scaperato-INACTIVE",
            68,
            23285
          ],
          [
            "Job-118981",
            "Jill Townsend",
            "Cleveland",
            "Gutters",
            "Pending Material",
            "Mike Stack",
            65,
            27895.44
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Columbus",
          "permits": 74
        },
        {
          "branch": "Detroit Metro",
          "permits": 33
        },
        {
          "branch": "Cleveland",
          "permits": 25
        },
        {
          "branch": "Cincinnati",
          "permits": 10
        },
        {
          "branch": "DC Metro",
          "permits": 10
        },
        {
          "branch": "Richmond",
          "permits": 7
        },
        {
          "branch": "Nashville",
          "permits": 4
        },
        {
          "branch": "Dayton",
          "permits": 3
        },
        {
          "branch": "Greenville",
          "permits": 3
        },
        {
          "branch": "Grand Rapids",
          "permits": 1
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $4.87M of trapped partial-job revenue into billable revenue, reduce $5.00M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Dispatch the 74 RTS WOs sitting on partial jobs. No blocker, no hold, just dispatch.",
        "Re-dispatch the 29 RAS WOs (oldest at 78 days). These are pure re-work fastballs.",
        "Gutters sweep: 126 open WOs across 126 partial jobs blocking $3.33M. Highest single-trade leverage in the book.",
        "Columbus permit sweep: 74 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one.",
        "Close out the 10 zombie jobs (all WOs Completed, parent still In Progress). Pure paperwork."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Gutters): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 481 jobs ($10.96M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $4.87M, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  }
};
