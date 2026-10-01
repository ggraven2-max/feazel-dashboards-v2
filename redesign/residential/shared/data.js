/* AUTO-GENERATED — do not edit. Generated 2026-10-01T14:55:00.930Z (residential) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-10-01T14:55:00.930Z",
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
        "elapsedMs": 486,
        "builtAt": "2026-10-01T14:55:00.930Z"
      },
      {
        "id": "sales-overview",
        "version": "1.0-rules-encoded",
        "elapsedMs": 2757,
        "builtAt": "2026-10-01T14:55:00.930Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 8904,
        "builtAt": "2026-10-01T14:55:00.930Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 152,
        "builtAt": "2026-10-01T14:55:00.930Z"
      }
    ]
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 06, 2026 - Oct 01, 2026 - De-Duplicated at Job Level - 3,554 Jobs - 14 Markets - 32 PMs",
    "generated": "2026-10-01",
    "headerMeta": {
      "trueRevenue": 68356108.16,
      "uniqueJobs": 3554,
      "markets": 14,
      "pms": 32,
      "medianComplete": 27.2,
      "avgStart": 26.2,
      "multiTradeJobs": 1149,
      "singleTradeJobs": 2405,
      "multiTradePct": 32.3,
      "lastBuild": "2026-10-01T14:55:00.930Z"
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
        "value": "$68.36M",
        "sub": "3,554 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$19,234",
        "sub": "Per job (deduped)"
      },
      {
        "label": "Median Days to Complete",
        "value": "27.2d",
        "sub": "Job-level median"
      },
      {
        "label": "Avg Days to Start",
        "value": "26.2d",
        "sub": "Sale to crew on-site"
      },
      {
        "label": "Multi-Trade Jobs",
        "value": "1,149",
        "sub": "32.3% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "2,405",
        "sub": "67.7% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$24,468",
        "sub": "+46.2% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$16,733",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+20.0d",
        "sub": "MT 41.5d vs ST 21.5d"
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
        "rev": 10667812.54,
        "jobs": 536,
        "med": 30.5,
        "start": 26.7
      },
      {
        "m": "2026-08",
        "label": "August",
        "key": "2026-08",
        "rev": 9082863.3,
        "jobs": 451,
        "med": 29.5,
        "start": 26.8
      },
      {
        "m": "2026-09",
        "label": "September",
        "key": "2026-09",
        "rev": 9361743.15,
        "jobs": 484,
        "med": 28.7,
        "start": 26.1
      },
      {
        "m": "2026-10",
        "label": "October",
        "key": "2026-10",
        "rev": 75177.31,
        "jobs": 5,
        "med": 42.4,
        "start": 17.7
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
              10667812.54,
              9082863.3,
              9361743.15,
              75177.31
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
              5
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
              46.6,
              32.5,
              23.5,
              17.6,
              21.7,
              28.5,
              30.5,
              29.5,
              28.7,
              42.4
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
              26.7,
              26.8,
              26.1,
              17.7
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
              1149
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              2405
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
          "Painting + Roofing"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              751,
              72,
              67,
              63,
              24,
              21,
              18,
              14
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
          "NOVA",
          "Grand Rapids",
          "Greensboro"
        ],
        "datasets": [
          {
            "label": "MT %",
            "data": [
              31.8,
              29.3,
              31.9,
              41.8,
              39,
              25.9,
              36,
              26.8,
              21.9,
              32.8,
              35,
              41.4,
              40.6,
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
          "NOVA",
          "Grand Rapids",
          "Greensboro"
        ],
        "datasets": [
          {
            "label": "MT Median",
            "data": [
              47.4,
              49.5,
              21.7,
              45.6,
              22.6,
              36.6,
              30.1,
              41.5,
              35.1,
              26.7,
              28.2,
              64.6,
              59.5,
              346.7
            ]
          },
          {
            "label": "ST Median",
            "data": [
              21.6,
              25.6,
              18.5,
              28.4,
              14.5,
              21.7,
              13.4,
              21.7,
              20.5,
              17.6,
              20.4,
              20.7,
              35.5,
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
          "NOVA",
          "Grand Rapids",
          "Greensboro"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              25290785.83,
              9779194.24,
              5788219.14,
              4918273.94,
              4640313,
              3526442.84,
              3465592.55,
              3327174.16,
              2488076.18,
              2289878.44,
              1649011.72,
              608668.35,
              550783.36,
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
          "NOVA",
          "Grand Rapids",
          "Greensboro"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              28.6,
              30.7,
              19.5,
              35.6,
              18.4,
              25.5,
              18.6,
              27.1,
              22.6,
              21.6,
              22,
              44.5,
              42.5,
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
          "Jason Andrews-INACTIVE",
          "Joseph Yager",
          "Alex Dubanoski",
          "Drew Bailey",
          "Shawn Oehlstrom",
          "Kaden Carter",
          "Alejandro Alvarado",
          "Brandon Harter",
          "Abraham Santiago",
          "Galo Munive"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              5716090.2,
              5347366.66,
              4597162.66,
              4259481.67,
              3668172.68,
              3597217.93,
              3582474.44,
              3234404.73,
              2993637.03,
              2911803.98,
              2584554.48,
              2523158.22,
              2483522.89,
              2417106.63,
              2344059.71
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
          "Jason Andrews-INACTIVE",
          "Joseph Yager",
          "Alex Dubanoski",
          "Drew Bailey",
          "Shawn Oehlstrom",
          "Kaden Carter",
          "Alejandro Alvarado",
          "Brandon Harter",
          "Abraham Santiago",
          "Galo Munive",
          "Joseph Jones",
          "Brady Weingartner",
          "Malik Ford",
          "Joshua Collins",
          "Daniel Galli",
          "Levi Nieman - INACTIVE",
          "Michael Blevins",
          "Adam Marrero",
          "Austin Weingartner-INACTIVE",
          "Chad Williams",
          "Cody Mitchell",
          "(Unassigned)",
          "Neil Laux",
          "Mike Scott",
          "Justin Milliron",
          "Chris Atkins",
          "Michael McLaughlin"
        ],
        "datasets": [
          {
            "label": "PMs",
            "data": [
              {
                "x": 30.5,
                "y": 5716090.2,
                "wos": 365,
                "name": "Mason Bryant"
              },
              {
                "x": 28.5,
                "y": 5347366.66,
                "wos": 321,
                "name": "Eric Isakov"
              },
              {
                "x": 32.6,
                "y": 4597162.66,
                "wos": 312,
                "name": "Richard Williams"
              },
              {
                "x": 31.5,
                "y": 4259481.67,
                "wos": 256,
                "name": "Landon Little"
              },
              {
                "x": 34.6,
                "y": 3668172.68,
                "wos": 207,
                "name": "Brandon Skrzypek"
              },
              {
                "x": 35.5,
                "y": 3597217.93,
                "wos": 341,
                "name": "Jason Andrews-INACTIVE"
              },
              {
                "x": 28.5,
                "y": 3582474.44,
                "wos": 272,
                "name": "Joseph Yager"
              },
              {
                "x": 18.6,
                "y": 3234404.73,
                "wos": 238,
                "name": "Alex Dubanoski"
              },
              {
                "x": 29.5,
                "y": 2993637.03,
                "wos": 375,
                "name": "Drew Bailey"
              },
              {
                "x": 37.4,
                "y": 2911803.98,
                "wos": 294,
                "name": "Shawn Oehlstrom"
              },
              {
                "x": 22.6,
                "y": 2584554.48,
                "wos": 186,
                "name": "Kaden Carter"
              },
              {
                "x": 19.5,
                "y": 2523158.22,
                "wos": 185,
                "name": "Alejandro Alvarado"
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
                "x": 19.7,
                "y": 2344059.71,
                "wos": 206,
                "name": "Galo Munive"
              },
              {
                "x": 21.6,
                "y": 2137245.33,
                "wos": 163,
                "name": "Joseph Jones"
              },
              {
                "x": 22.7,
                "y": 2050079.6,
                "wos": 107,
                "name": "Brady Weingartner"
              },
              {
                "x": 32.5,
                "y": 1574942.01,
                "wos": 94,
                "name": "Malik Ford"
              },
              {
                "x": 41.6,
                "y": 1476015.92,
                "wos": 108,
                "name": "Joshua Collins"
              },
              {
                "x": 56.7,
                "y": 1417846.46,
                "wos": 130,
                "name": "Daniel Galli"
              },
              {
                "x": 35.5,
                "y": 1189570.54,
                "wos": 73,
                "name": "Levi Nieman - INACTIVE"
              },
              {
                "x": 22,
                "y": 1150040.65,
                "wos": 92,
                "name": "Michael Blevins"
              },
              {
                "x": 17.5,
                "y": 1097566.68,
                "wos": 82,
                "name": "Adam Marrero"
              },
              {
                "x": 28.5,
                "y": 968875.78,
                "wos": 67,
                "name": "Austin Weingartner-INACTIVE"
              },
              {
                "x": 60.7,
                "y": 575412.76,
                "wos": 53,
                "name": "Chad Williams"
              },
              {
                "x": 25.4,
                "y": 535023.76,
                "wos": 24,
                "name": "Cody Mitchell"
              },
              {
                "x": 35.6,
                "y": 516410.41,
                "wos": 61,
                "name": "(Unassigned)"
              },
              {
                "x": 31.6,
                "y": 419909.18,
                "wos": 24,
                "name": "Neil Laux"
              },
              {
                "x": 55.5,
                "y": 279589.48,
                "wos": 36,
                "name": "Mike Scott"
              },
              {
                "x": 69.1,
                "y": 223165.24,
                "wos": 26,
                "name": "Justin Milliron"
              },
              {
                "x": 58.7,
                "y": 140893.75,
                "wos": 25,
                "name": "Chris Atkins"
              },
              {
                "x": 39.4,
                "y": 126921.42,
                "wos": 13,
                "name": "Michael McLaughlin"
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
          "Electrical",
          "Flat Roof",
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
              50194451.57,
              11207182.81,
              3504362.28,
              883021.77,
              692023.83,
              560074.79,
              358674.64,
              284699.67,
              249206.25,
              166473.55,
              141370.8,
              59520.6,
              14672,
              11832.45,
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
          "Electrical",
          "Flat Roof",
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
              27.5,
              34.7,
              52,
              74.7,
              60.1,
              62.4,
              45,
              78.2,
              61.6,
              40.4,
              53.1,
              43.7,
              51.7,
              31.7,
              39.5,
              30.5,
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
          "Bradley Essex - INACTIVE",
          "Thomas Hayes",
          "Allison Webb",
          "Ethan Wolfe",
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
              1184,
              964,
              504,
              303,
              216,
              137,
              136,
              57,
              23,
              19,
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
          "Thomas Hayes",
          "Allison Webb",
          "Ethan Wolfe",
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
              29.5,
              25.6,
              23.5,
              30.5,
              32.4,
              18.6,
              21.5,
              34.5,
              127.5,
              28.5,
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
          "Bradley Essex - INACTIVE",
          "Thomas Hayes",
          "Allison Webb",
          "Ethan Wolfe",
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
              36.9,
              30,
              28,
              35,
              32.9,
              20.4,
              25,
              36.8,
              56.5,
              31.6,
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
          "Thomas Hayes",
          "Allison Webb",
          "Ethan Wolfe",
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
                "x": 29.5,
                "y": 19786.86,
                "jobs": 1184,
                "name": "Brandon Vera"
              },
              {
                "x": 25.6,
                "y": 20101.62,
                "jobs": 964,
                "name": "David Schwan"
              },
              {
                "x": 23.5,
                "y": 16931.35,
                "jobs": 504,
                "name": "Amanda Wade - INACTIVE"
              },
              {
                "x": 30.5,
                "y": 18631.56,
                "jobs": 303,
                "name": "Bradley Essex - INACTIVE"
              },
              {
                "x": 32.4,
                "y": 17724.07,
                "jobs": 216,
                "name": "Thomas Hayes"
              },
              {
                "x": 18.6,
                "y": 18812.25,
                "jobs": 137,
                "name": "Allison Webb"
              },
              {
                "x": 21.5,
                "y": 18644.62,
                "jobs": 136,
                "name": "Ethan Wolfe"
              },
              {
                "x": 34.5,
                "y": 17258.45,
                "jobs": 57,
                "name": "Bruce Lemon Jr."
              },
              {
                "x": 127.5,
                "y": 27851.14,
                "jobs": 23,
                "name": "Morgan Valois"
              },
              {
                "x": 28.5,
                "y": 29217.67,
                "jobs": 19,
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
            1305,
            25290785.83,
            19379.91,
            28.6,
            29.1,
            31.8,
            47.4,
            21.6
          ],
          [
            "Detroit Metro",
            516,
            9779194.24,
            18951.93,
            30.7,
            34.3,
            29.3,
            49.5,
            25.6
          ],
          [
            "Nashville",
            254,
            5788219.14,
            22788.26,
            19.5,
            19.1,
            31.9,
            21.7,
            18.5
          ],
          [
            "Cleveland",
            292,
            4918273.94,
            16843.4,
            35.6,
            32,
            41.8,
            45.6,
            28.4
          ],
          [
            "DC Metro",
            246,
            4640313,
            18863.06,
            18.4,
            18.9,
            39,
            22.6,
            14.5
          ],
          [
            "Dayton",
            185,
            3526442.84,
            19061.85,
            25.5,
            20.5,
            25.9,
            36.6,
            21.7
          ],
          [
            "Richmond",
            178,
            3465592.55,
            19469.62,
            18.6,
            15.8,
            36,
            30.1,
            13.4
          ],
          [
            "Cincinnati",
            168,
            3327174.16,
            19804.61,
            27.1,
            22.6,
            26.8,
            41.5,
            21.7
          ],
          [
            "Raleigh",
            137,
            2488076.18,
            18161.14,
            22.6,
            22.1,
            21.9,
            35.1,
            20.5
          ],
          [
            "Knoxville",
            131,
            2289878.44,
            17479.99,
            21.6,
            15.8,
            32.8,
            26.7,
            17.6
          ],
          [
            "Greenville",
            80,
            1649011.72,
            20612.65,
            22,
            19,
            35,
            28.2,
            20.4
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
            "Grand Rapids",
            32,
            550783.36,
            17211.98,
            42.5,
            38.6,
            40.6,
            59.5,
            35.5
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
            365,
            319,
            5716090.2,
            15660.52,
            30.5,
            25.6
          ],
          [
            "Eric Isakov",
            321,
            272,
            5347366.66,
            16658.46,
            28.5,
            26.3
          ],
          [
            "Richard Williams",
            312,
            281,
            4597162.66,
            14734.5,
            32.6,
            30.5
          ],
          [
            "Landon Little",
            256,
            235,
            4259481.67,
            16638.6,
            31.5,
            28.6
          ],
          [
            "Brandon Skrzypek",
            207,
            203,
            3668172.68,
            17720.64,
            34.6,
            32.4
          ],
          [
            "Jason Andrews-INACTIVE",
            341,
            283,
            3597217.93,
            10549.03,
            35.5,
            36.3
          ],
          [
            "Joseph Yager",
            272,
            219,
            3582474.44,
            13170.86,
            28.5,
            21.4
          ],
          [
            "Alex Dubanoski",
            238,
            176,
            3234404.73,
            13589.94,
            18.6,
            16.2
          ],
          [
            "Drew Bailey",
            375,
            347,
            2993637.03,
            7983.03,
            29.5,
            26.7
          ],
          [
            "Shawn Oehlstrom",
            294,
            212,
            2911803.98,
            9904.1,
            37.4,
            33.4
          ],
          [
            "Kaden Carter",
            186,
            147,
            2584554.48,
            13895.45,
            22.6,
            22.4
          ],
          [
            "Alejandro Alvarado",
            185,
            138,
            2523158.22,
            13638.69,
            19.5,
            17.1
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
            "Galo Munive",
            206,
            157,
            2344059.71,
            11378.93,
            19.7,
            20.9
          ],
          [
            "Joseph Jones",
            163,
            124,
            2137245.33,
            13111.93,
            21.6,
            15.5
          ],
          [
            "Brady Weingartner",
            107,
            105,
            2050079.6,
            19159.62,
            22.7,
            21.7
          ],
          [
            "Malik Ford",
            94,
            90,
            1574942.01,
            16754.7,
            32.5,
            33.4
          ],
          [
            "Joshua Collins",
            108,
            107,
            1476015.92,
            13666.81,
            41.6,
            31.5
          ],
          [
            "Daniel Galli",
            130,
            104,
            1417846.46,
            10906.51,
            56.7,
            40.1
          ],
          [
            "Levi Nieman - INACTIVE",
            73,
            72,
            1189570.54,
            16295.49,
            35.5,
            40.2
          ],
          [
            "Michael Blevins",
            92,
            66,
            1150040.65,
            12500.44,
            22,
            19.3
          ],
          [
            "Adam Marrero",
            82,
            67,
            1097566.68,
            13384.96,
            17.5,
            17.3
          ],
          [
            "Austin Weingartner-INACTIVE",
            67,
            63,
            968875.78,
            14460.83,
            28.5,
            23.1
          ],
          [
            "Chad Williams",
            53,
            35,
            575412.76,
            10856.84,
            60.7,
            21.5
          ],
          [
            "Cody Mitchell",
            24,
            21,
            535023.76,
            22292.66,
            25.4,
            21.2
          ],
          [
            "(Unassigned)",
            61,
            55,
            516410.41,
            8465.74,
            35.6,
            34.3
          ],
          [
            "Neil Laux",
            24,
            21,
            419909.18,
            17496.22,
            31.6,
            28.7
          ],
          [
            "Mike Scott",
            36,
            36,
            279589.48,
            7766.37,
            55.5,
            32.2
          ],
          [
            "Justin Milliron",
            26,
            24,
            223165.24,
            8583.28,
            69.1,
            55.8
          ],
          [
            "Chris Atkins",
            25,
            21,
            140893.75,
            5635.75,
            58.7,
            49.9
          ],
          [
            "Michael McLaughlin",
            13,
            13,
            126921.42,
            9763.19,
            39.4,
            43.2
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
            3220,
            50194451.57,
            15588.34,
            27.5
          ],
          [
            "Gutters",
            1183,
            11207182.81,
            9473.53,
            34.7
          ],
          [
            "Siding",
            354,
            3504362.28,
            9899.33,
            52
          ],
          [
            "Metal",
            51,
            883021.77,
            17314.15,
            74.7
          ],
          [
            "Masonry",
            62,
            692023.83,
            11161.67,
            60.1
          ],
          [
            "Windows",
            55,
            560074.79,
            10183.18,
            62.4
          ],
          [
            "Painting",
            26,
            358674.64,
            13795.18,
            45
          ],
          [
            "GAF Solar",
            4,
            284699.67,
            71174.92,
            78.2
          ],
          [
            "Rack Mounted Solar",
            24,
            249206.25,
            10383.59,
            61.6
          ],
          [
            "Electrical",
            15,
            166473.55,
            11098.24,
            40.4
          ],
          [
            "Flat Roof",
            14,
            141370.8,
            10097.91,
            53.1
          ],
          [
            "Other",
            7,
            59520.6,
            8502.94,
            43.7
          ],
          [
            "Carpentry",
            2,
            14672,
            7336,
            51.7
          ],
          [
            "Skylights",
            1,
            11832.45,
            11832.45,
            31.7
          ],
          [
            "Insulation",
            1,
            10924.5,
            10924.5,
            39.5
          ],
          [
            "Stucco",
            1,
            10527,
            10527,
            30.5
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
            1184,
            23427636.7,
            19786.86,
            "29.5d",
            "26.1d",
            36.9,
            19786.86
          ],
          [
            "David Schwan",
            964,
            19377959.18,
            20101.62,
            "25.6d",
            "24.5d",
            30,
            20101.62
          ],
          [
            "Amanda Wade - INACTIVE",
            504,
            8533400.8,
            16931.35,
            "23.5d",
            "27.7d",
            28,
            16931.35
          ],
          [
            "Bradley Essex - INACTIVE",
            303,
            5645363.95,
            18631.56,
            "30.5d",
            "28.7d",
            35,
            18631.56
          ],
          [
            "Thomas Hayes",
            216,
            3828400.04,
            17724.07,
            "32.4d",
            "34d",
            32.9,
            17724.07
          ],
          [
            "Allison Webb",
            137,
            2577278.79,
            18812.25,
            "18.6d",
            "14.9d",
            20.4,
            18812.25
          ],
          [
            "Ethan Wolfe",
            136,
            2535668.53,
            18644.62,
            "21.5d",
            "18.8d",
            25,
            18644.62
          ],
          [
            "Bruce Lemon Jr.",
            57,
            983731.62,
            17258.45,
            "34.5d",
            "22.5d",
            36.8,
            17258.45
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
            19,
            555135.73,
            29217.67,
            "28.5d",
            "28.7d",
            31.6,
            29217.67
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
            16,
            9,
            84,
            10,
            10,
            4,
            0,
            0,
            1,
            0,
            0,
            0,
            1,
            2,
            137
          ],
          [
            "Amanda Wade - INACTIVE",
            0,
            1,
            368,
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
            504
          ],
          [
            "Bradley Essex - INACTIVE",
            70,
            134,
            2,
            0,
            84,
            13,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            303
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
            61,
            103,
            310,
            230,
            84,
            155,
            19,
            0,
            7,
            0,
            29,
            0,
            14,
            172,
            1184
          ],
          [
            "Brenda Dixon-INACTIVE",
            0,
            2,
            16,
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
            19
          ],
          [
            "Bruce Lemon Jr.",
            0,
            17,
            26,
            4,
            1,
            3,
            1,
            0,
            2,
            0,
            0,
            0,
            0,
            3,
            57
          ],
          [
            "David Schwan",
            14,
            13,
            395,
            2,
            0,
            92,
            3,
            0,
            17,
            131,
            0,
            253,
            43,
            1,
            964
          ],
          [
            "Ethan Wolfe",
            3,
            0,
            89,
            0,
            1,
            42,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            136
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
            7,
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
            216
          ],
          [
            "Total",
            168,
            292,
            1305,
            246,
            185,
            516,
            32,
            1,
            80,
            131,
            29,
            254,
            137,
            178,
            3554
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Chad Williams: 53 WOs, $575K revenue, 60.7-day median complete, top-volume PM with the slowest cycle in the network.",
        "Multi-trade penalty is severe in 1 markets: NOVA MT 64.6d vs ST 20.7d.",
        "Days to Start averages 26.2 days company-wide and 38.6 days in Grand Rapids (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [
        "Gutters-only work runs at 34.7-day median complete versus 27.5 days for roofing, 26% slower cycle on the lowest-priced trade."
      ],
      "positivesToBuildOn": [
        "June delivered $11.03M across 556 invoiced jobs at 28.5-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "DC Metro hits 18.4-day median complete and a $18,863 average contract on 246 jobs.",
        "Multi-trade jobs carry a $24,468 average contract versus $16,733 for single-trade, a 46% revenue lift per job.",
        "Nashville is the best-balanced market: 19.5-day median complete, 31.9% multi-trade attach, $22,788 average contract on 254 jobs."
      ]
    }
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-09-30",
    "ytdDays": 273,
    "rowCount": 4793,
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
        "value": "$81.99M",
        "sub": "4,793 signed contracts across 13 markets"
      },
      {
        "label": "Sold",
        "value": "$79.55M",
        "sub": "4,666 deals | 97.4% of signed contracts"
      },
      {
        "label": "Production Review",
        "value": "$1.66M",
        "sub": "90 deals | Ops Review, PM Review, Contracted"
      },
      {
        "label": "Kicked Back",
        "value": "$695K",
        "sub": "30 deals | 0.6% of signed contracts",
        "trend": "negative"
      },
      {
        "label": "Sales Action",
        "value": "$35K",
        "sub": "3 deals requiring sales follow-up",
        "trend": "neutral"
      },
      {
        "label": "Avg Deal Size",
        "value": "$17,106",
        "sub": "Median: $16,000 | Install avg: $19,457"
      },
      {
        "label": "Organization",
        "value": "177 Reps",
        "sub": "13 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$109.62M",
        "sub": "Based on 273 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "86.3% / 13.6%",
        "sub": "4,134 installs | 653 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 4666,
        "amount": 79550021.53
      },
      {
        "label": "Production Review",
        "count": 90,
        "amount": 1657818.7
      },
      {
        "label": "Kicked Back",
        "count": 30,
        "amount": 695243.7
      },
      {
        "label": "Sales Action",
        "count": 3,
        "amount": 34804.03
      },
      {
        "label": "Other",
        "count": 4,
        "amount": 49188.18
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
        "amount": 6921024.72,
        "installs": 386,
        "repairs": 111,
        "avgDeal": 13926,
        "repairPct": 22.3,
        "installAvg": 17385,
        "repairAvg": 1897
      },
      {
        "key": "2026-04",
        "label": "April",
        "count": 784,
        "amount": 12580835.43,
        "installs": 680,
        "repairs": 104,
        "avgDeal": 16047,
        "repairPct": 13.3,
        "installAvg": 18250,
        "repairAvg": 1643
      },
      {
        "key": "2026-05",
        "label": "May",
        "count": 627,
        "amount": 11409130.74,
        "installs": 564,
        "repairs": 63,
        "avgDeal": 18196,
        "repairPct": 10,
        "installAvg": 19969,
        "repairAvg": 2329
      },
      {
        "key": "2026-06",
        "label": "June",
        "count": 631,
        "amount": 11116294.33,
        "installs": 554,
        "repairs": 77,
        "avgDeal": 17617,
        "repairPct": 12.2,
        "installAvg": 19738,
        "repairAvg": 2357
      },
      {
        "key": "2026-07",
        "label": "July",
        "count": 608,
        "amount": 11259213.62,
        "installs": 522,
        "repairs": 86,
        "avgDeal": 18518,
        "repairPct": 14.1,
        "installAvg": 21106,
        "repairAvg": 2811
      },
      {
        "key": "2026-08",
        "label": "August",
        "count": 622,
        "amount": 11013434.58,
        "installs": 542,
        "repairs": 80,
        "avgDeal": 17706,
        "repairPct": 12.9,
        "installAvg": 19857,
        "repairAvg": 3137
      },
      {
        "key": "2026-09",
        "label": "September",
        "count": 610,
        "amount": 10334058.67,
        "installs": 527,
        "repairs": 77,
        "avgDeal": 16941,
        "repairPct": 12.6,
        "installAvg": 19085,
        "repairAvg": 2347
      }
    ],
    "jobTypeMixByMonth": {
      "Retail-No Financing": {
        "2026-01": 1339788.72,
        "2026-02": 1793288.6,
        "2026-03": 2978579.7,
        "2026-04": 4946562.91,
        "2026-05": 4247818.79,
        "2026-06": 4233213.92,
        "2026-07": 4812812.83,
        "2026-08": 4802071.97,
        "2026-09": 3448544.18
      },
      "Insurance": {
        "2026-01": 1437020.6,
        "2026-02": 1686849.5,
        "2026-03": 2796894.46,
        "2026-04": 6289581.37,
        "2026-05": 6111318.17,
        "2026-06": 5855261.98,
        "2026-07": 4949727.57,
        "2026-08": 4370381,
        "2026-09": 3349747.19
      },
      "Retail-Financing": {
        "2026-01": 487089.46,
        "2026-02": 609047.17,
        "2026-03": 1105473.56,
        "2026-04": 1316261.83,
        "2026-05": 992342.98,
        "2026-06": 994530.43,
        "2026-07": 1391182.63,
        "2026-08": 1752357.96,
        "2026-09": 1509057.85
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Insurance",
        "count": 1792,
        "amount": 36846781.84,
        "avg": 20562
      },
      {
        "jobType": "Retail-No Financing",
        "count": 2391,
        "amount": 32602681.62,
        "avg": 13636
      },
      {
        "jobType": "Retail-Financing",
        "count": 483,
        "amount": 10157343.87,
        "avg": 21030
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
        "amount": 2698423.75
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
        "count": 162,
        "amount": 2508105.82
      },
      {
        "w": 19,
        "count": 144,
        "amount": 2590202.11
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
        "amount": 2885219.33
      },
      {
        "w": 23,
        "count": 167,
        "amount": 3201451.35
      },
      {
        "w": 24,
        "count": 148,
        "amount": 2666895.75
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
        "amount": 2107324.72
      },
      {
        "w": 28,
        "count": 141,
        "amount": 2294759.06
      },
      {
        "w": 29,
        "count": 140,
        "amount": 2368411.55
      },
      {
        "w": 30,
        "count": 138,
        "amount": 2729476.33
      },
      {
        "w": 31,
        "count": 128,
        "amount": 2845240.43
      },
      {
        "w": 32,
        "count": 124,
        "amount": 2026736.27
      },
      {
        "w": 33,
        "count": 152,
        "amount": 2826194.16
      },
      {
        "w": 34,
        "count": 159,
        "amount": 2729155.18
      },
      {
        "w": 35,
        "count": 139,
        "amount": 2503194.37
      },
      {
        "w": 36,
        "count": 152,
        "amount": 2729127.66
      },
      {
        "w": 37,
        "count": 138,
        "amount": 2168412.2
      },
      {
        "w": 38,
        "count": 142,
        "amount": 2406604.09
      },
      {
        "w": 39,
        "count": 142,
        "amount": 2449429.11
      },
      {
        "w": 40,
        "count": 74,
        "amount": 1309162.14
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
          31966150.36,
          1779,
          17969,
          1527,
          247,
          13.9,
          10
        ],
        [
          "Detroit Metro",
          10907544.05,
          683,
          15970,
          576,
          107,
          15.7,
          5
        ],
        [
          "Cleveland",
          8813621.9,
          543,
          16231,
          469,
          74,
          13.6,
          12
        ],
        [
          "Nashville",
          5955648.7,
          339,
          17568,
          260,
          78,
          23,
          5
        ],
        [
          "DC Metro",
          5193960.95,
          338,
          15367,
          269,
          69,
          20.4,
          10
        ],
        [
          "Richmond",
          4271777.95,
          200,
          21359,
          192,
          8,
          4,
          26
        ],
        [
          "Cincinnati",
          4029174.15,
          247,
          16312,
          222,
          25,
          10.1,
          6
        ],
        [
          "Dayton",
          3961819.91,
          233,
          17004,
          212,
          21,
          9,
          15
        ],
        [
          "Knoxville",
          2285029.74,
          136,
          16802,
          135,
          1,
          0.7,
          13
        ],
        [
          "Raleigh",
          2192642.91,
          160,
          13704,
          143,
          17,
          10.6,
          7
        ],
        [
          "Greenville",
          1535157.09,
          80,
          19189,
          79,
          1,
          1.3,
          4
        ],
        [
          "Grand Rapids",
          639332.17,
          40,
          15983,
          37,
          3,
          7.5,
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
          "opps": 3257,
          "soldAmt": 18235181.24,
          "closePct": 39.2,
          "nsli": 5599
        },
        {
          "branch": "Detroit",
          "opps": 1384,
          "soldAmt": 7983400.35,
          "closePct": 40.4,
          "nsli": 5768
        },
        {
          "branch": "Cleveland",
          "opps": 1075,
          "soldAmt": 5511250.68,
          "closePct": 34.8,
          "nsli": 5127
        },
        {
          "branch": "DC Metro",
          "opps": 842,
          "soldAmt": 3218933.44,
          "closePct": 30.4,
          "nsli": 3823
        },
        {
          "branch": "Nashville",
          "opps": 498,
          "soldAmt": 2861472.5,
          "closePct": 41.6,
          "nsli": 5746
        },
        {
          "branch": "Cincinnati",
          "opps": 705,
          "soldAmt": 2858006.11,
          "closePct": 28.7,
          "nsli": 4054
        },
        {
          "branch": "Dayton",
          "opps": 410,
          "soldAmt": 1913924.52,
          "closePct": 29.3,
          "nsli": 4668
        },
        {
          "branch": "Raleigh",
          "opps": 332,
          "soldAmt": 1098715.87,
          "closePct": 30.7,
          "nsli": 3309
        },
        {
          "branch": "Richmond",
          "opps": 137,
          "soldAmt": 1056886.68,
          "closePct": 43.1,
          "nsli": 7715
        },
        {
          "branch": "Greenville",
          "opps": 186,
          "soldAmt": 895801.67,
          "closePct": 28,
          "nsli": 4816
        },
        {
          "branch": "Knoxville",
          "opps": 131,
          "soldAmt": 766777.9,
          "closePct": 40.5,
          "nsli": 5853
        },
        {
          "branch": "Grand Rapids",
          "opps": 108,
          "soldAmt": 335288.81,
          "closePct": 23.1,
          "nsli": 3105
        }
      ],
      "totals": {
        "opps": 9071,
        "soldAmt": 46735639.77,
        "closePct": 36.2,
        "nsli": 5152
      },
      "source": "Closing Percent By Branch-2026-10-01-10-45-03.xlsx",
      "format": "per-opportunity"
    },
    "marketKickbacks": [
      {
        "market": "Cincinnati",
        "kicked": 8,
        "kickedAmount": 139061.65
      },
      {
        "market": "Columbus",
        "kicked": 7,
        "kickedAmount": 134381.76
      },
      {
        "market": "Richmond",
        "kicked": 4,
        "kickedAmount": 138630.17
      },
      {
        "market": "DC Metro",
        "kicked": 3,
        "kickedAmount": 73859
      },
      {
        "market": "Cleveland",
        "kicked": 3,
        "kickedAmount": 106517.81
      },
      {
        "market": "Detroit Metro",
        "kicked": 2,
        "kickedAmount": 59483.31
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
        "amount": 2251079.98,
        "count": 136,
        "avg": 16552,
        "medDays": 3,
        "jt": {
          "Retail-Financing": 22,
          "Retail-No Financing": 77,
          "Insurance": 32
        },
        "installs": 128,
        "repairs": 8
      },
      {
        "name": "Kevin Ditty",
        "amount": 2075127.26,
        "count": 108,
        "avg": 19214,
        "medDays": 3,
        "jt": {
          "Insurance": 15,
          "Retail-No Financing": 65,
          "Retail-Financing": 26
        },
        "installs": 86,
        "repairs": 21
      },
      {
        "name": "Stephen Harmon",
        "amount": 1944089.63,
        "count": 97,
        "avg": 20042,
        "medDays": 11,
        "jt": {
          "Retail-No Financing": 87,
          "Insurance": 4,
          "Retail-Financing": 4
        },
        "installs": 89,
        "repairs": 8
      },
      {
        "name": "Brian Ogrin",
        "amount": 1895146.69,
        "count": 71,
        "avg": 26692,
        "medDays": 49,
        "jt": {
          "Insurance": 47,
          "Retail-No Financing": 22,
          "Retail-Financing": 1
        },
        "installs": 65,
        "repairs": 6
      },
      {
        "name": "Frank Drummond",
        "amount": 1878741.52,
        "count": 144,
        "avg": 13047,
        "medDays": 6,
        "jt": {
          "Retail-No Financing": 83,
          "Insurance": 52,
          "Retail-Financing": 5
        },
        "installs": 104,
        "repairs": 40
      },
      {
        "name": "Sam Scorziell",
        "amount": 1845388.57,
        "count": 79,
        "avg": 23359,
        "medDays": 22,
        "jt": {
          "Insurance": 55,
          "Retail-No Financing": 19,
          "Retail-Financing": 1
        },
        "installs": 76,
        "repairs": 3
      },
      {
        "name": "Robert Beck",
        "amount": 1792529.44,
        "count": 64,
        "avg": 28008,
        "medDays": 30,
        "jt": {
          "Insurance": 47,
          "Retail-No Financing": 16,
          "Retail-Financing": 1
        },
        "installs": 60,
        "repairs": 4
      },
      {
        "name": "Dave Norris",
        "amount": 1662327.32,
        "count": 116,
        "avg": 14330,
        "medDays": 13,
        "jt": {
          "Retail-No Financing": 69,
          "Retail-Financing": 1,
          "Insurance": 45
        },
        "installs": 86,
        "repairs": 30
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
        "name": "Bill Applegate",
        "amount": 1507441.7,
        "count": 73,
        "avg": 20650,
        "medDays": 39,
        "jt": {
          "Insurance": 47,
          "Retail-No Financing": 24,
          "Retail-Financing": 1
        },
        "installs": 61,
        "repairs": 12
      },
      {
        "name": "Cole Burgess",
        "amount": 1409618.84,
        "count": 77,
        "avg": 18307,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 59,
          "Retail-Financing": 11,
          "Insurance": 6
        },
        "installs": 71,
        "repairs": 6
      },
      {
        "name": "Derrick Sieber",
        "amount": 1396542.93,
        "count": 91,
        "avg": 15347,
        "medDays": 11,
        "jt": {
          "Retail-No Financing": 53,
          "Retail-Financing": 4,
          "Insurance": 31
        },
        "installs": 65,
        "repairs": 26
      },
      {
        "name": "Caleb Severance",
        "amount": 1386643.59,
        "count": 62,
        "avg": 22365,
        "medDays": 2,
        "jt": {
          "Retail-No Financing": 41,
          "Retail-Financing": 19,
          "Insurance": 1
        },
        "installs": 57,
        "repairs": 5
      },
      {
        "name": "Mark Daggett",
        "amount": 1377691.31,
        "count": 84,
        "avg": 16401,
        "medDays": 5,
        "jt": {
          "Retail-No Financing": 54,
          "Insurance": 22,
          "Retail-Financing": 6
        },
        "installs": 74,
        "repairs": 10
      },
      {
        "name": "Clay Hastings",
        "amount": 1351592.5,
        "count": 75,
        "avg": 18021,
        "medDays": 9,
        "jt": {
          "Retail-No Financing": 21,
          "Insurance": 27,
          "Retail-Financing": 24
        },
        "installs": 67,
        "repairs": 6
      },
      {
        "name": "Zachary Schneider",
        "amount": 1311786.13,
        "count": 74,
        "avg": 17727,
        "medDays": 21,
        "jt": {
          "Retail-No Financing": 30,
          "Insurance": 44
        },
        "installs": 61,
        "repairs": 13
      },
      {
        "name": "Frank Butts",
        "amount": 1308058.01,
        "count": 93,
        "avg": 14065,
        "medDays": 10,
        "jt": {
          "Retail-No Financing": 39,
          "Insurance": 52,
          "Retail-Financing": 2
        },
        "installs": 85,
        "repairs": 8
      },
      {
        "name": "Matthew Ross",
        "amount": 1238863.56,
        "count": 77,
        "avg": 16089,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 57,
          "Insurance": 2,
          "Retail-Financing": 17
        },
        "installs": 67,
        "repairs": 10
      },
      {
        "name": "Nick Junker",
        "amount": 1230204.4,
        "count": 64,
        "avg": 19222,
        "medDays": 33,
        "jt": {
          "Insurance": 36,
          "Retail-No Financing": 27,
          "Retail-Financing": 1
        },
        "installs": 60,
        "repairs": 4
      },
      {
        "name": "Derik Heinz",
        "amount": 1142200.26,
        "count": 95,
        "avg": 12023,
        "medDays": 2,
        "jt": {
          "Retail-Financing": 17,
          "Retail-No Financing": 57,
          "Insurance": 18
        },
        "installs": 71,
        "repairs": 24
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
        "name": "Storm Drumm",
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
        "repairs": 27,
        "deals": 62,
        "pct": 43.5
      },
      {
        "name": "Jeff Camp",
        "repairs": 17,
        "deals": 47,
        "pct": 36.2
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
          "value": "28 days",
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
          "mean": 23,
          "count": 2229
        },
        {
          "label": "Retail-Fin",
          "median": 3,
          "mean": 15,
          "count": 470
        },
        {
          "label": "Insurance",
          "median": 28,
          "mean": 63,
          "count": 1679
        },
        {
          "label": "Repair",
          "median": 3,
          "mean": 14,
          "count": 602
        },
        {
          "label": "Install",
          "median": 10,
          "mean": 41,
          "count": 3892
        }
      ],
      "byMarket": [
        {
          "market": "Greenville",
          "median": 4,
          "mean": 6,
          "count": 78
        },
        {
          "market": "Nashville",
          "median": 5,
          "mean": 22,
          "count": 326
        },
        {
          "market": "Detroit Metro",
          "median": 5,
          "mean": 24,
          "count": 649
        },
        {
          "market": "Cincinnati",
          "median": 6,
          "mean": 26,
          "count": 243
        },
        {
          "market": "Raleigh",
          "median": 7,
          "mean": 56,
          "count": 157
        },
        {
          "market": "Columbus",
          "median": 10,
          "mean": 38,
          "count": 1631
        },
        {
          "market": "DC Metro",
          "median": 10,
          "mean": 46,
          "count": 321
        },
        {
          "market": "Cleveland",
          "median": 12,
          "mean": 40,
          "count": 489
        },
        {
          "market": "Knoxville",
          "median": 13,
          "mean": 39,
          "count": 134
        },
        {
          "market": "Dayton",
          "median": 15,
          "mean": 40,
          "count": 226
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
          "mean": 88,
          "count": 191
        },
        {
          "market": "Grand Rapids",
          "median": 33,
          "mean": 50,
          "count": 38
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
          "name": "Tyler Mentges",
          "medDays": 3,
          "count": 3
        },
        {
          "name": "Brian Sullivan",
          "medDays": 3,
          "count": 4
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
      "recent4WkAvg": 2083401.89
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
          "liveActual": 11409130.74
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
      "generatedAt": "2026-10-01T10:54:47-04:00",
      "modelRunDate": "2026-10-01",
      "fiscalYear": 2026,
      "gap": {
        "fullYearBudget": 123956895,
        "invoicedYtd": 69370750,
        "stillToInvoice": 54586145,
        "daysRemaining": 91,
        "weeksRemaining": 14
      },
      "bridge": {
        "rows": [
          {
            "label": "In Progress",
            "amount": 7595406,
            "convertPct": 97,
            "lands": 7368738,
            "note": "Already installing. Needs completion and billing only."
          },
          {
            "label": "Not Started",
            "amount": 10389133,
            "convertPct": 92.1,
            "lands": 9570163,
            "note": "Sold and processed, awaiting schedule. Throughput decides this."
          },
          {
            "label": "Sold Not Processed",
            "amount": 2358516,
            "convertPct": 92.1,
            "lands": 2172595,
            "note": "Signed but not yet a job. Processing delay is pure lost time."
          }
        ],
        "alreadySoldLands": 19111497,
        "mustBeNewlySoldNet": 35474648,
        "mustBeNewlySoldGross": 59642737,
        "meanCapturePct": 59.5
      },
      "sellingWindow": {
        "weeks": [
          {
            "weekStart": "10/01/2026",
            "daysToYearEnd": 91,
            "capturePct": 92.1,
            "valueOfOneMillion": 921171
          },
          {
            "weekStart": "10/08/2026",
            "daysToYearEnd": 84,
            "capturePct": 90.7,
            "valueOfOneMillion": 907197
          },
          {
            "weekStart": "10/15/2026",
            "daysToYearEnd": 77,
            "capturePct": 88.7,
            "valueOfOneMillion": 886633
          },
          {
            "weekStart": "10/22/2026",
            "daysToYearEnd": 70,
            "capturePct": 86.8,
            "valueOfOneMillion": 867915
          },
          {
            "weekStart": "10/29/2026",
            "daysToYearEnd": 63,
            "capturePct": 83.1,
            "valueOfOneMillion": 831004
          },
          {
            "weekStart": "11/05/2026",
            "daysToYearEnd": 56,
            "capturePct": 79.4,
            "valueOfOneMillion": 793567
          },
          {
            "weekStart": "11/12/2026",
            "daysToYearEnd": 49,
            "capturePct": 74.6,
            "valueOfOneMillion": 745584
          },
          {
            "weekStart": "11/19/2026",
            "daysToYearEnd": 42,
            "capturePct": 69.4,
            "valueOfOneMillion": 694173
          },
          {
            "weekStart": "11/26/2026",
            "daysToYearEnd": 35,
            "capturePct": 61.4,
            "valueOfOneMillion": 614289
          },
          {
            "weekStart": "12/03/2026",
            "daysToYearEnd": 28,
            "capturePct": 49.4,
            "valueOfOneMillion": 494332
          },
          {
            "weekStart": "12/10/2026",
            "daysToYearEnd": 21,
            "capturePct": 35.1,
            "valueOfOneMillion": 351173
          },
          {
            "weekStart": "12/17/2026",
            "daysToYearEnd": 14,
            "capturePct": 18,
            "valueOfOneMillion": 180332
          },
          {
            "weekStart": "12/24/2026",
            "daysToYearEnd": 7,
            "capturePct": 4,
            "valueOfOneMillion": 40337
          },
          {
            "weekStart": "12/31/2026",
            "daysToYearEnd": 0,
            "capturePct": 0,
            "valueOfOneMillion": 264
          }
        ],
        "belowThreeQuartersFrom": "11/12/2026",
        "belowHalfFrom": "12/03/2026"
      },
      "pullForward": {
        "backlogTotal": 20343055,
        "perDay": 25550,
        "perWeek": 194425,
        "leverageCurve": [
          {
            "daysBeforeYearEnd": 91,
            "onDate": "10/01/2026",
            "worthPerDay": 25550
          },
          {
            "daysBeforeYearEnd": 60,
            "onDate": "11/01/2026",
            "worthPerDay": 73975
          },
          {
            "daysBeforeYearEnd": 45,
            "onDate": "11/16/2026",
            "worthPerDay": 111017
          },
          {
            "daysBeforeYearEnd": 30,
            "onDate": "12/01/2026",
            "worthPerDay": 214590
          },
          {
            "daysBeforeYearEnd": 21,
            "onDate": "12/10/2026",
            "worthPerDay": 388199
          },
          {
            "daysBeforeYearEnd": 14,
            "onDate": "12/17/2026",
            "worthPerDay": 477788
          },
          {
            "daysBeforeYearEnd": 7,
            "onDate": "12/24/2026",
            "worthPerDay": 564959
          }
        ],
        "strandedBacklog": 1231558,
        "completedAwaitingInvoice": {
          "total": 2092599,
          "jobs": 109,
          "medianAgeDays": 16,
          "agingBuckets": [
            {
              "bucket": "0-15 days",
              "jobs": 33,
              "amount": 761980
            },
            {
              "bucket": "15-30 days",
              "jobs": 16,
              "amount": 319866
            },
            {
              "bucket": "30-60 days",
              "jobs": 21,
              "amount": 439250
            },
            {
              "bucket": "60-90 days",
              "jobs": 6,
              "amount": 94112
            },
            {
              "bucket": "over 90 days",
              "jobs": 4,
              "amount": 36398
            }
          ],
          "byReason": [
            {
              "reason": "Pending Supplement",
              "jobs": 43,
              "amount": 880238
            },
            {
              "reason": "Ready to Invoice",
              "jobs": 33,
              "amount": 674651
            },
            {
              "reason": "Accounting Kickback",
              "jobs": 26,
              "amount": 487131
            },
            {
              "reason": "Unspecified",
              "jobs": 7,
              "amount": 50579
            }
          ],
          "note": "Work finished but not invoiced. No selling and no scheduling required, only the blocking process cleared."
        },
        "note": "Revenue moved into 2026 by finishing and billing existing work sooner. Requires no new selling."
      },
      "capacity": {
        "requiredPerWeek": 4260196,
        "demonstratedPerWeek": 2542553,
        "liftRequiredPct": 67.6,
        "trendPerWeek": 18797
      },
      "scenarios": [
        {
          "name": "Hold current pace",
          "weeklySales": 2542553,
          "newSalesRevenue": 21171837,
          "landsAt": 109654084,
          "note": "Trailing 4-week average, carried flat."
        },
        {
          "name": "Stretch +15%",
          "weeklySales": 2923936,
          "newSalesRevenue": 24347613,
          "landsAt": 112829860,
          "note": "Ambitious but inside what the team has produced before."
        },
        {
          "name": "Required to hit plan",
          "weeklySales": 4260196,
          "newSalesRevenue": 35474648,
          "landsAt": 123956895,
          "note": "What closing the full gap by selling alone would take."
        }
      ],
      "modelComparison": {
        "v5FullYear": 96162436,
        "paceLandingZone": 109654084,
        "note": "V5 is the forecast of record. The pace landing zone runs higher because these conversion rates are drawn from jobs that did invoice and because V5 also carries a declining sales trend."
      },
      "verdict": {
        "band": "not-reachable",
        "headline": "Plan is not reachable by selling alone. Closing the gap needs a production pull-forward, a budget reset, or both.",
        "reasons": [
          "Required $4,260,196/wk against a demonstrated $2,542,553/wk, a 68% lift.",
          "After 11/12/2026, under 75% of what is sold still invoices this year.",
          "$19,111,497 of the gap is already sold and needs production, not selling."
        ]
      }
    },
    "commentary": {
      "whatsWorking": [
        "Sales Trajectory: Monthly sales moved from January $3.26M to September $10.33M (+217%). Annualized run rate: $109.62M.",
        "Premium Deal Types: Insurance averages $20,562 per deal. Retail-Financing averages $21,030 (highest per-deal value). Retail-No Financing averages $13,636 (the volume engine).",
        "Sold Conversion: 4,666 of 4,793 signed contracts (97.4%) have made it to Sold status for $79.55M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Kickback Concentration: Cincinnati has the most kickbacks (8, $139K). Total company kickbacks: 30 worth $695K.",
        "Production Review Queue: 90 deals worth $1.66M sitting in Production Review. Watch for backlog growth, it delays revenue recognition."
      ],
      "criticalRisks": [
        "Cincinnati Kickback Concentration drives the company's largest single-market rework volume.",
        "Pipeline kickbacks company-wide: 30 kickbacks totaling $695K.",
        "Production Review backlog: 90 deals ($1.66M)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 4d median close on 2,699 retail deals.",
        "Insurance Density: $20,562 avg on 1,792 deals = $36.85M; +20% lift = ~$7.37M.",
        "September repair rate at 12.6% vs YTD 13.6%, correction in latest month.",
        "Financing Lifts Ticket: Retail-Financing averages $21,030, highest per-deal value."
      ],
      "fixList": [
        "Cincinnati Pipeline Kickback Intervention, pull every kickback and categorize root cause.",
        "Production Review Bottleneck, 90 deals; add temporary PM capacity.",
        "Financing Push, 483 financing deals YTD (10.1%) at $21,030 avg. Target 15% mix."
      ],
      "actionPlan": {
        "thisWeek": [
          "Cincinnati Pipeline Kickback Review, meet with branch leadership.",
          "Production Review Surge Plan, 90 deals ($1.66M) in queue."
        ],
        "thisMonth": [
          "Supplement Escalation SOP, 7/14/30 day cadence with carrier escalation.",
          "Completed-to-Billing SLA, 100% invoiced within 21 days.",
          "Repair Triage Pilot in markets where repair rate exceeds 25%.",
          "Financing Training, peer training led by top financing reps. Target 15% mix."
        ],
        "thisQuarter": [
          "Add Kickback Reason field to accounting workflow.",
          "Repair Business Decision, 653 repairs YTD at ~$2,231 avg.",
          "Ops Capacity Planning, September hit 610 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "title": "Residential Revenue Forecast",
    "subtitle": "V5 Model with Job Type Analysis · Data as of October 01, 2026",
    "runDate": "October 01, 2026",
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
        "value": "$79.8M",
        "sub": "Jobs processed into system"
      },
      {
        "label": "Invoiced YTD",
        "value": "$69.37M",
        "sub": "NetSuite AR · 3895 invoices booked"
      },
      {
        "label": "4-Week Avg Weekly Sales",
        "value": "$2.5M",
        "sub": "Trend: +18,797/week"
      },
      {
        "label": "Current Week (Projected)",
        "value": "$2.9M",
        "sub": "WTD: $1.5M"
      },
      {
        "label": "Annual Forecast",
        "value": "$110.3M",
        "sub": "Model invoiced revenue"
      },
      {
        "label": "Annual Budget",
        "value": "$125.9M",
        "sub": "Board plan · full year"
      },
      {
        "label": "Forecast vs Budget",
        "value": "-$15.6M",
        "sub": "12.4% under plan"
      },
      {
        "label": "Active Pipeline",
        "value": "$20.3M",
        "sub": "Backlog + IP + SNP"
      }
    ],
    "execSummary": {
      "budget": 125890005.2103,
      "modelAnnualInvoiced": 110269694.2448,
      "gap": 15620310.9655,
      "narrative": "The V5 model projects $110.3M in annual invoiced revenue against a $125.9M plan. The challenge is timing, not volume: Q1 ramped slowly so Q2 invoicing will lag. If the current weekly pace of $2.5M holds, H2 should catch up as earlier sales convert to invoiced revenue."
    },
    "monthRevenue": {
      "april": {
        "invoiced": 8405959.810000002,
        "wipChange": -6137773.8422,
        "netRevenue": 2268185.9678000025,
        "beginningWip": 6137773.8422,
        "endingWip": 0,
        "materialCost": 4001791.6766,
        "laborCost": 2385132.9474,
        "grossProfit": -3507675.8762,
        "grossMarginPct": -121.8261
      },
      "may": {
        "invoiced": 8564976.120000001,
        "wipChange": 0,
        "netRevenue": 8564976.120000001,
        "beginningWip": 0,
        "endingWip": 0,
        "materialCost": 4019539.4983,
        "laborCost": 2395710.9379,
        "grossProfit": 7034524.9751,
        "grossMarginPct": 52.3022
      }
    },
    "weeklyTargetsHeader": {
      "avgWeeklyNeed": 2587017.907,
      "recent4WkAvg": 2542552.8225,
      "gap": 44465.0845,
      "productionAvgWeeklyNeed": 2687323.8128,
      "productionCycleStart": 13,
      "productionCycleComplete": 8,
      "productionTotalCycle": 21
    },
    "budgetRecoveryHeader": {
      "fullYearBudget": 125890005.2103,
      "gap": 20283695.7422,
      "upliftPct": 1.3,
      "aprilGap": 114886.8225,
      "q1OriginalBudget": 89469741.5096,
      "q1Actual": 69300932.59,
      "q1Shortfall": 20168808.9196,
      "recoveryRatio": 1.8831
    },
    "profitabilitySummary": {
      "combinedGP": 57622624.34,
      "combinedGP_pct": 40.5852,
      "combinedRevenue": 141979328.88,
      "y2025_GP_pct": 41.5542,
      "y2025_revenue": 74003675.33,
      "y2025_jobs": 3503,
      "y2026_GP_pct": 39.5303,
      "y2026_revenue": 67975653.55,
      "y2026_jobs": 3530,
      "materialCost": 52662369.39,
      "laborCost": 31387628.96,
      "commissions": 12489724.64,
      "materialPctContract": 37.0916,
      "laborPctContract": 22.1072,
      "commissionPctContract": 8.7969
    },
    "pipelineSnapshot": {
      "stages": [
        {
          "label": "New Sales",
          "subtitle": "117 jobs · 2d avg",
          "value": 2358515.85,
          "jobs": 117,
          "color": "#3b82f6",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 44,
              "value": 868857.73
            },
            {
              "market": "DC Metro",
              "jobs": 12,
              "value": 275243.55
            },
            {
              "market": "Cincinnati",
              "jobs": 15,
              "value": 265236.78
            },
            {
              "market": "Detroit Metro",
              "jobs": 10,
              "value": 263828.31
            },
            {
              "market": "Cleveland",
              "jobs": 7,
              "value": 200209.15
            },
            {
              "market": "Nashville",
              "jobs": 9,
              "value": 169406.53
            },
            {
              "market": "Richmond",
              "jobs": 4,
              "value": 138630.17
            },
            {
              "market": "Dayton",
              "jobs": 10,
              "value": 72074
            },
            {
              "market": "Raleigh",
              "jobs": 5,
              "value": 64601.48
            },
            {
              "market": "Greenville",
              "jobs": 1,
              "value": 40428.15
            }
          ],
          "avgDays": 2.1,
          "medianDays": 1
        },
        {
          "label": "Backlog",
          "subtitle": "493 jobs · 26d avg",
          "value": 10389132.69,
          "jobs": 493,
          "color": "#f97316",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 201,
              "value": 4698374.24
            },
            {
              "market": "Cleveland",
              "jobs": 89,
              "value": 1693863.81
            },
            {
              "market": "Detroit Metro",
              "jobs": 57,
              "value": 1167043
            },
            {
              "market": "Cincinnati",
              "jobs": 42,
              "value": 706516.59
            },
            {
              "market": "DC Metro",
              "jobs": 26,
              "value": 512075.91
            },
            {
              "market": "Richmond",
              "jobs": 16,
              "value": 427861.17
            },
            {
              "market": "Dayton",
              "jobs": 23,
              "value": 424944.64
            },
            {
              "market": "Nashville",
              "jobs": 13,
              "value": 292227.78
            },
            {
              "market": "Raleigh",
              "jobs": 11,
              "value": 181794.38
            },
            {
              "market": "Knoxville",
              "jobs": 7,
              "value": 130787.76
            },
            {
              "market": "Greenville",
              "jobs": 6,
              "value": 96092.41
            },
            {
              "market": "Grand Rapids",
              "jobs": 2,
              "value": 57551
            }
          ],
          "avgDays": 26.3,
          "medianDays": 15
        },
        {
          "label": "In Progress",
          "subtitle": "255 jobs",
          "value": 7595406.48,
          "jobs": 255,
          "color": "#22c55e",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 114,
              "value": 3088898.92
            },
            {
              "market": "Cleveland",
              "jobs": 74,
              "value": 2026191.77
            },
            {
              "market": "Nashville",
              "jobs": 5,
              "value": 646707.68
            },
            {
              "market": "Detroit Metro",
              "jobs": 17,
              "value": 554987.57
            },
            {
              "market": "Richmond",
              "jobs": 9,
              "value": 434763.48
            },
            {
              "market": "DC Metro",
              "jobs": 11,
              "value": 396775.25
            },
            {
              "market": "Cincinnati",
              "jobs": 8,
              "value": 189581.69
            },
            {
              "market": "Dayton",
              "jobs": 6,
              "value": 107278.99
            },
            {
              "market": "Greenville",
              "jobs": 3,
              "value": 73770.74
            },
            {
              "market": "Raleigh",
              "jobs": 5,
              "value": 40002.11
            },
            {
              "market": "Knoxville",
              "jobs": 2,
              "value": 25027.18
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
          "subtitle": "108 jobs",
          "value": 2092601.73,
          "jobs": 108,
          "color": "#a855f7",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 51,
              "value": 1100835
            },
            {
              "market": "Cleveland",
              "jobs": 16,
              "value": 325494.25
            },
            {
              "market": "Richmond",
              "jobs": 8,
              "value": 121590.04
            },
            {
              "market": "Dayton",
              "jobs": 6,
              "value": 116434
            },
            {
              "market": "Knoxville",
              "jobs": 4,
              "value": 86540.43
            },
            {
              "market": "Cincinnati",
              "jobs": 4,
              "value": 81812.06
            },
            {
              "market": "Detroit Metro",
              "jobs": 6,
              "value": 80423
            },
            {
              "market": "Grand Rapids",
              "jobs": 3,
              "value": 66160.44
            },
            {
              "market": "Nashville",
              "jobs": 3,
              "value": 64479.85
            },
            {
              "market": "Raleigh",
              "jobs": 2,
              "value": 24610.64
            },
            {
              "market": "DC Metro",
              "jobs": 4,
              "value": 23618.96
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
      "totalJobs": 973,
      "totalValue": 22435656.75
    },
    "commentary": {
      "actionableRecommendations": [
        "Hold weekly sales pace at or above $2.6M to defend the May invoicing target.",
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
            22435656.75,
            10105760.31,
            7343944.5827,
            -857780.4773
          ],
          [
            "May 2026",
            14117621.6688,
            22435656.75,
            11701433.75,
            9816462.4752,
            -4301159.1936
          ],
          [
            "Jun 2026",
            14800571.2162,
            22435656.75,
            11835298.24,
            11632340.4856,
            -3168230.7306
          ],
          [
            "Jul 2026",
            11641331.0926,
            22435656.75,
            11823206.05,
            9232077.5588,
            -2409253.5338
          ],
          [
            "Aug 2026",
            12738223.8858,
            22435656.75,
            10116853.19,
            12654758.3912,
            -83465.4946
          ],
          [
            "Sep 2026",
            13673037.2551,
            22435656.75,
            14494132.45,
            6510047.4681,
            -7162989.787
          ],
          [
            "Oct 2026",
            13483638.9808,
            22435656.75,
            13946043.2829,
            13449775.4112,
            -33863.5696
          ],
          [
            "Nov 2026",
            12392297.9669,
            7521275.4384,
            11729360.0567,
            12151626.5795,
            -240671.3875
          ],
          [
            "Dec 2026",
            7988852.274,
            8132994.3128,
            8610296.3648,
            8282411.0523,
            293558.7783
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
            22435656.75,
            7548179.3327,
            857780.4773,
            10105760.31
          ],
          [
            "May 2026",
            22435656.75,
            9917449.0918,
            0,
            11701433.75
          ],
          [
            "Jun 2026",
            22435656.75,
            11024182.2433,
            64241.0667,
            11835298.24
          ],
          [
            "Jul 2026",
            22435656.75,
            11441555.1711,
            0,
            11823206.05
          ],
          [
            "Aug 2026",
            22435656.75,
            10712085.088,
            0,
            10116853.19
          ],
          [
            "Sep 2026",
            22435656.75,
            12647821.3103,
            0,
            14494132.45
          ],
          [
            "Oct 2026",
            22435656.75,
            6041054.8167,
            7523607.4171,
            13946043.2829
          ],
          [
            "Nov 2026",
            7521275.4384,
            2385008.8079,
            10402279.8198,
            11729360.0567
          ],
          [
            "Dec 2026",
            8132994.3128,
            974497.2907,
            9093815.5485,
            8610296.3648
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
            10099416.28,
            10099416.28,
            10099416.28
          ],
          [
            "May 2026 [Actual]",
            13.5504,
            11701433.75,
            11701433.75,
            11701433.75
          ],
          [
            "Jun 2026 [Actual]",
            12.3213,
            11835298.24,
            11835298.24,
            11835298.24
          ],
          [
            "Jul 2026 [Actual]",
            13.3002,
            11769656.32,
            11769656.32,
            11769656.32
          ],
          [
            "Aug 2026 [Actual]",
            13.4542,
            10098655.59,
            10098655.59,
            10098655.59
          ],
          [
            "Sep 2026 [Actual]",
            12.0952,
            14572223.81,
            14572223.81,
            14572223.81
          ],
          [
            "Oct 2026",
            11.3828,
            0,
            15331751.1964,
            17828447.1738
          ],
          [
            "Nov 2026",
            7.7142,
            0,
            10390412.1947,
            12082436.8041
          ],
          [
            "Dec 2026",
            2.7932,
            0,
            3762166.4745,
            4374815.7266
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
            "Wk 09/27",
            6180696.8324,
            3282168.0852,
            2898528.7472
          ],
          [
            "Wk 10/04",
            5930126.7818,
            3149106.5478,
            2781020.2341
          ],
          [
            "Wk 10/11",
            5930126.7818,
            3149106.5478,
            2781020.2341
          ],
          [
            "Wk 10/18",
            5930126.7818,
            3149106.5478,
            2781020.2341
          ],
          [
            "Wk 10/25",
            5930126.7818,
            3149106.5478,
            2781020.2341
          ],
          [
            "Wk 11/01",
            5153801.9653,
            2736850.6799,
            2416951.2854
          ],
          [
            "Wk 11/08",
            5153801.9653,
            2736850.6799,
            2416951.2854
          ],
          [
            "Wk 11/15",
            5153801.9653,
            2736850.6799,
            2416951.2854
          ],
          [
            "Wk 11/22",
            5153801.9653,
            2736850.6799,
            2416951.2854
          ],
          [
            "Wk 11/29",
            4087703.5651,
            2170714.8153,
            1916988.7497
          ],
          [
            "Wk 12/06",
            3661264.205,
            1944260.4695,
            1717003.7355
          ],
          [
            "Wk 12/13",
            3661264.205,
            1944260.4695,
            1717003.7355
          ],
          [
            "Wk 12/20",
            3661264.205,
            1944260.4695,
            1717003.7355
          ],
          [
            "Wk 12/27",
            2615188.7178,
            1388757.4782,
            1226431.2396
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
            24024.8137,
            18,
            1334.7119,
            41.4194,
            37286510.9
          ],
          [
            "Retail-Financing",
            21891.7949,
            19,
            1152.1997,
            60.5485,
            10376710.77
          ],
          [
            "Retail-No Financing",
            19071.2082,
            18,
            1059.5116,
            61.3906,
            33775109.75
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
            5,
            18,
            1552,
            24024.8137
          ],
          [
            "Retail-Financing",
            13,
            6,
            19,
            474,
            21891.7949
          ],
          [
            "Retail-No Financing",
            12,
            6,
            18,
            1771,
            19071.2082
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
            201,
            4698374.24
          ],
          [
            "Cleveland",
            89,
            1693863.81
          ],
          [
            "Detroit Metro",
            57,
            1167043
          ],
          [
            "Cincinnati",
            42,
            706516.59
          ],
          [
            "DC Metro",
            26,
            512075.91
          ],
          [
            "Richmond",
            16,
            427861.17
          ],
          [
            "Dayton",
            23,
            424944.64
          ],
          [
            "Nashville",
            13,
            292227.78
          ],
          [
            "Raleigh",
            11,
            181794.38
          ],
          [
            "Knoxville",
            7,
            130787.76
          ],
          [
            "Greenville",
            6,
            96092.41
          ],
          [
            "Grand Rapids",
            2,
            57551
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
            114,
            3088898.92
          ],
          [
            "Cleveland",
            74,
            2026191.77
          ],
          [
            "Nashville",
            5,
            646707.68
          ],
          [
            "Detroit Metro",
            17,
            554987.57
          ],
          [
            "Richmond",
            9,
            434763.48
          ],
          [
            "DC Metro",
            11,
            396775.25
          ],
          [
            "Cincinnati",
            8,
            189581.69
          ],
          [
            "Dayton",
            6,
            107278.99
          ],
          [
            "Greenville",
            3,
            73770.74
          ],
          [
            "Raleigh",
            5,
            40002.11
          ],
          [
            "Knoxville",
            2,
            25027.18
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
            44,
            868857.73
          ],
          [
            "DC Metro",
            12,
            275243.55
          ],
          [
            "Cincinnati",
            15,
            265236.78
          ],
          [
            "Detroit Metro",
            10,
            263828.31
          ],
          [
            "Cleveland",
            7,
            200209.15
          ],
          [
            "Nashville",
            9,
            169406.53
          ],
          [
            "Richmond",
            4,
            138630.17
          ],
          [
            "Dayton",
            10,
            72074
          ],
          [
            "Raleigh",
            5,
            64601.48
          ],
          [
            "Greenville",
            1,
            40428.15
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
            51,
            1100835
          ],
          [
            "Cleveland",
            16,
            325494.25
          ],
          [
            "Richmond",
            8,
            121590.04
          ],
          [
            "Dayton",
            6,
            116434
          ],
          [
            "Knoxville",
            4,
            86540.43
          ],
          [
            "Cincinnati",
            4,
            81812.06
          ],
          [
            "Detroit Metro",
            6,
            80423
          ],
          [
            "Grand Rapids",
            3,
            66160.44
          ],
          [
            "Nashville",
            3,
            64479.85
          ],
          [
            "Raleigh",
            2,
            24610.64
          ],
          [
            "DC Metro",
            4,
            23618.96
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
            1214232.6376,
            46.9356
          ],
          [
            "Retail-No Financing",
            1037659.2563,
            40.1102
          ],
          [
            "Retail-Financing",
            335126.013,
            12.9541
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
            1444920.4075,
            55.8527
          ],
          [
            "Gutters",
            953771.5902,
            36.8676
          ],
          [
            "Siding",
            60276.7689,
            2.33
          ],
          [
            "Metal",
            28627.1115,
            1.1066
          ],
          [
            "GAF Solar",
            19894.6152,
            0.769
          ],
          [
            "Masonry",
            18576.5235,
            0.7181
          ],
          [
            "Rack Mounted Solar",
            18240.0164,
            0.7051
          ],
          [
            "Flat Roof",
            16293.2539,
            0.6298
          ],
          [
            "Painting",
            12998.8661,
            0.5025
          ],
          [
            "Windows",
            5850.1768,
            0.2261
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
            "Wk 09/27",
            "Sep",
            3282168.0852
          ],
          [
            "Wk 10/04",
            "Oct",
            3149106.5478
          ],
          [
            "Wk 10/11",
            "Oct",
            3149106.5478
          ],
          [
            "Wk 10/18",
            "Oct",
            3149106.5478
          ],
          [
            "Wk 10/25",
            "Oct",
            3149106.5478
          ],
          [
            "Wk 11/01",
            "Nov",
            2736850.6799
          ],
          [
            "Wk 11/08",
            "Nov",
            2736850.6799
          ],
          [
            "Wk 11/15",
            "Nov",
            2736850.6799
          ],
          [
            "Wk 11/22",
            "Nov",
            2736850.6799
          ],
          [
            "Wk 11/29",
            "Nov",
            2170714.8153
          ],
          [
            "Wk 12/06",
            "Dec",
            1944260.4695
          ],
          [
            "Wk 12/13",
            "Dec",
            1944260.4695
          ],
          [
            "Wk 12/20",
            "Dec",
            1944260.4695
          ],
          [
            "Wk 12/27",
            "Dec",
            1388757.4782
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
              2544367.54,
              2644989.19,
              2584908.65,
              2813036.53,
              3246224.14,
              2655413.97,
              1840276.51,
              2590375.72,
              2036347.48,
              2250802.96,
              2388600.17,
              2741106.38,
              2890436.76,
              1963559.42,
              2787386.44,
              2734100.57,
              2514722.03,
              2648962.97,
              2607631.14,
              2444697.35,
              2468919.83,
              2896218.4242,
              2624628.4852,
              2643425.0337,
              2662221.5821,
              2681018.1306,
              2699814.679,
              2718611.2275,
              2737407.776,
              2756204.3244,
              2775000.8729,
              2793797.4213,
              2812593.9698,
              2831390.5182,
              2850187.0667
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
              7343944.5827,
              9816462.4752,
              11632340.4856,
              9232077.5588,
              12654758.3912,
              6510047.4681,
              13449775.4112,
              12151626.5795,
              8282411.0523
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
              10105760.31,
              11701433.75,
              11835298.24,
              11823206.05,
              10116853.19,
              14494132.45,
              13946043.2829,
              11729360.0567,
              8610296.3648
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
              3059846.9399,
              3082877.244,
              4477433.5547,
              7548179.3327,
              9917449.0918,
              11024182.2433,
              11441555.1711,
              10712085.088,
              12647821.3103,
              13449775.4112,
              12546617.2402,
              10361871.6176
            ]
          },
          {
            "label": "From Known Sales",
            "data": [
              3059846.9399,
              3082877.244,
              4477433.5547,
              7548179.3327,
              9917449.0918,
              11024182.2433,
              11441555.1711,
              10712085.088,
              12647821.3103,
              6041054.8167,
              2385008.8079,
              974497.2907
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
          "Dayton",
          "Richmond",
          "Cincinnati",
          "Knoxville",
          "Raleigh"
        ],
        "datasets": [
          {
            "label": "Mix %",
            "data": [
              39.5133,
              13.2308,
              10.7353,
              7.2137,
              6.5519,
              4.875,
              4.8162,
              4.732,
              2.8142,
              2.6832
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
              41.4194,
              31.0323,
              16.0645,
              6.129,
              2.4516,
              1.4194
            ]
          },
          {
            "label": "Retail-Financing",
            "data": [
              60.5485,
              28.27,
              7.173,
              1.2658,
              1.0549,
              0.4219
            ]
          },
          {
            "label": "Retail-No Financing",
            "data": [
              61.3906,
              25.6642,
              7.1792,
              2.8265,
              1.3002,
              0.9045
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
              12
            ]
          },
          {
            "label": "In Progress -> Complete",
            "data": [
              5,
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
      9017022.59,
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
      9017022.589999998,
      13449775.4112,
      12546617.2402,
      10361871.6176
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
      9017022.589999998,
      6041054.8167,
      2385008.8079,
      974497.2907
    ],
    "requiredSales": [
      3257140.76,
      3101368.34,
      5679200.03,
      10105760.31,
      11701433.75,
      11835298.24,
      11823206.05,
      10116853.19,
      14494132.45,
      13946043.2829,
      11729360.0567,
      8610296.3648
    ],
    "backlogData": [
      {
        "month": "Jan 2026",
        "total_backlog": 22435656.75,
        "wip_est": 9688008.21,
        "not_started": 12747648.54,
        "budget_rev": 3312733.06,
        "pipeline_backlog": 22435656.75,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 3059846.9399,
        "revenue_gap": 252886.1201,
        "adjusted_required_sales": 3257140.76,
        "backlog_surplus": 19178515.99
      },
      {
        "month": "Feb 2026",
        "total_backlog": 22435656.75,
        "wip_est": 9688008.21,
        "not_started": 12747648.54,
        "budget_rev": 2855781.11,
        "pipeline_backlog": 22435656.75,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 3082877.244,
        "revenue_gap": 0,
        "adjusted_required_sales": 3101368.34,
        "backlog_surplus": 19334288.41
      },
      {
        "month": "Mar 2026",
        "total_backlog": 22435656.75,
        "wip_est": 9688008.21,
        "not_started": 12747648.54,
        "budget_rev": 6228299.34,
        "pipeline_backlog": 22435656.75,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 4477433.5547,
        "revenue_gap": 1750865.7853,
        "adjusted_required_sales": 5679200.03,
        "backlog_surplus": 16756456.72
      },
      {
        "month": "Apr 2026",
        "total_backlog": 22435656.75,
        "wip_est": 9688008.21,
        "not_started": 12747648.54,
        "budget_rev": 8405959.81,
        "pipeline_backlog": 22435656.75,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 7548179.3327,
        "revenue_gap": 857780.4773,
        "adjusted_required_sales": 10105760.31,
        "backlog_surplus": 12329896.44
      },
      {
        "month": "May 2026",
        "total_backlog": 22435656.75,
        "wip_est": 13461394.05,
        "not_started": 8974262.7,
        "budget_rev": 8564976.12,
        "pipeline_backlog": 22435656.75,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 9917449.0918,
        "revenue_gap": 0,
        "adjusted_required_sales": 11701433.75,
        "backlog_surplus": 10734223
      },
      {
        "month": "Jun 2026",
        "total_backlog": 22435656.75,
        "wip_est": 13461394.05,
        "not_started": 8974262.7,
        "budget_rev": 11088423.31,
        "pipeline_backlog": 22435656.75,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 11024182.2433,
        "revenue_gap": 64241.0667,
        "adjusted_required_sales": 11835298.24,
        "backlog_surplus": 10600358.51
      },
      {
        "month": "Jul 2026",
        "total_backlog": 22435656.75,
        "wip_est": 13461394.05,
        "not_started": 8974262.7,
        "budget_rev": 10676120.9,
        "pipeline_backlog": 22435656.75,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 11441555.1711,
        "revenue_gap": 0,
        "adjusted_required_sales": 11823206.05,
        "backlog_surplus": 10612450.7
      },
      {
        "month": "Aug 2026",
        "total_backlog": 22435656.75,
        "wip_est": 13461394.05,
        "not_started": 8974262.7,
        "budget_rev": 9151616.35,
        "pipeline_backlog": 22435656.75,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 10712085.088,
        "revenue_gap": 0,
        "adjusted_required_sales": 10116853.19,
        "backlog_surplus": 12318803.56
      },
      {
        "month": "Sep 2026",
        "total_backlog": 22435656.75,
        "wip_est": 13461394.05,
        "not_started": 8974262.7,
        "budget_rev": 9017022.59,
        "pipeline_backlog": 22435656.75,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 12647821.3103,
        "revenue_gap": 0,
        "adjusted_required_sales": 14494132.45,
        "backlog_surplus": 7941524.3
      },
      {
        "month": "Oct 2026",
        "total_backlog": 22435656.75,
        "wip_est": 13461394.05,
        "not_started": 8974262.7,
        "budget_rev": 13564662.2337,
        "pipeline_backlog": 22435656.75,
        "new_sales_backlog": 0,
        "pipe_invoicing": 21451704,
        "future_invoicing": 5268053.46,
        "rev_from_backlog": 6041054.8167,
        "revenue_gap": 7523607.4171,
        "adjusted_required_sales": 13946043.2829,
        "backlog_surplus": 8489613.4671
      },
      {
        "month": "Nov 2026",
        "total_backlog": 7521275.4384,
        "wip_est": 4512765.263,
        "not_started": 3008510.1753,
        "budget_rev": 12787288.6277,
        "pipeline_backlog": 983952.75,
        "new_sales_backlog": 6537322.6884,
        "pipe_invoicing": 956032.75,
        "future_invoicing": 10761665.58,
        "rev_from_backlog": 2385008.8079,
        "revenue_gap": 10402279.8198,
        "adjusted_required_sales": 11729360.0567,
        "backlog_surplus": -4208084.6183
      },
      {
        "month": "Dec 2026",
        "total_backlog": 8132994.3128,
        "wip_est": 4879796.5877,
        "not_started": 3253197.7251,
        "budget_rev": 10068312.8393,
        "pipeline_backlog": 27920,
        "new_sales_backlog": 8105074.3128,
        "pipe_invoicing": 27920,
        "future_invoicing": 11062410.44,
        "rev_from_backlog": 974497.2907,
        "revenue_gap": 9093815.5485,
        "adjusted_required_sales": 8610296.3648,
        "backlog_surplus": -477302.052
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
      "source": "ResInvoicedYTDResults264.csv",
      "format": "per-invoice",
      "aggregatedOnly": false,
      "totalInvoiced": 69370749.59000003,
      "invoiceCount": 3895,
      "monthly": [
        3312733.0599999987,
        2855781.11,
        6228299.340000002,
        8405959.810000002,
        8564976.120000001,
        11088423.309999999,
        10676120.900000002,
        9151616.350000001,
        9017022.589999998,
        69817,
        0,
        0
      ],
      "byBranch": {
        "Greenville": {
          "invoiced": 1634247.5,
          "count": 112
        },
        "Richmond": {
          "invoiced": 3523655.290000002,
          "count": 207
        },
        "DC Metro": {
          "invoiced": 5346720.639999999,
          "count": 302
        },
        "Cleveland": {
          "invoiced": 4966698.559999998,
          "count": 336
        },
        "Nashville": {
          "invoiced": 5940243.570000002,
          "count": 277
        },
        "Columbus": {
          "invoiced": 25677948.44999999,
          "count": 1391
        },
        "Dayton": {
          "invoiced": 3643472.5500000003,
          "count": 208
        },
        "Cincinnati": {
          "invoiced": 3398977.1700000013,
          "count": 190
        },
        "Detroit": {
          "invoiced": 9747585.619999997,
          "count": 520
        },
        "Raleigh": {
          "invoiced": 2568329.6999999997,
          "count": 172
        },
        "Knoxville": {
          "invoiced": 2352654.6499999994,
          "count": 147
        },
        "Charlotte": {
          "invoiced": 33694.41,
          "count": 1
        },
        "Grand Rapids": {
          "invoiced": 536521.48,
          "count": 32
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
      "latestInvoiceDate": "2026-10-01",
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
          "invoiced": 9017022.589999998,
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
      "totalJobs": 754,
      "totalWOs": 1230,
      "portfolioValue": 18082769.37,
      "avgDaysInStatus": 13,
      "lastBuild": "2026-10-01T14:55:00.442Z"
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
        "value": "754",
        "sub": "1,230 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "261",
        "sub": "34.6% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "493",
        "sub": "65.4% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "176",
        "sub": "67.4% of In Progress",
        "tone": "crit"
      },
      {
        "label": "Avg Days in Status",
        "value": "13",
        "sub": "Job-level average",
        "tone": "warn"
      },
      {
        "label": "Total Portfolio Value",
        "value": "$18.08M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$5.23M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$5.19M",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "176",
        "sub": "67.4% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$5.19M",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "216",
        "sub": "Across 176 jobs",
        "tone": "info"
      },
      {
        "label": "RTS Ready Today",
        "value": "96",
        "sub": "No blocker, dispatch now",
        "tone": "good"
      },
      {
        "label": "Top Trailing Trade",
        "value": "Gutters",
        "sub": "131 open WOs / 131 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "342",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "155",
        "sub": "45.3% of all holds",
        "tone": "warn"
      },
      {
        "label": "Pending Sales",
        "value": "27",
        "sub": "Awaiting sales disposition",
        "tone": "warn"
      },
      {
        "label": "Avg Hold Age",
        "value": "23d",
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
        "value": "$5.23M",
        "sub": "Sum of stale value across all reps",
        "tone": "crit"
      },
      {
        "label": "Reps with Stuck Work",
        "value": "57",
        "sub": "Reps carrying any >30d WO",
        "tone": "warn"
      },
      {
        "label": "Top Stuck Rep",
        "value": "$582K",
        "sub": "Highest single-rep stuck value",
        "tone": "warn"
      }
    ],
    "kpisBacklog": [
      {
        "label": "Not Started Jobs",
        "value": "493",
        "sub": "65.4% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$10.41M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "156d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Columbus",
        "sub": "199 jobs (40.4% of backlog)",
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
              342,
              320,
              276,
              211,
              44,
              36,
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
          "Dayton",
          "Richmond",
          "Raleigh",
          "Nashville",
          "Greenville",
          "Knoxville",
          "Grand Rapids"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              97,
              65,
              11,
              6,
              7,
              11,
              5,
              2,
              3,
              2,
              1,
              1
            ]
          },
          {
            "label": "Open",
            "data": [
              38,
              13,
              8,
              3,
              5,
              2,
              4,
              3,
              3,
              1,
              1,
              0
            ]
          },
          {
            "label": "On Hold",
            "data": [
              150,
              79,
              44,
              7,
              26,
              11,
              7,
              6,
              5,
              3,
              3,
              1
            ]
          },
          {
            "label": "RTS",
            "data": [
              93,
              129,
              24,
              23,
              8,
              17,
              12,
              3,
              1,
              5,
              4,
              1
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              137,
              28,
              18,
              30,
              13,
              11,
              13,
              7,
              7,
              7,
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
          "Ready to Schedule",
          "Requires Additional Service",
          "Scheduled",
          "In Progress",
          "New"
        ],
        "datasets": [
          {
            "label": "Avg Days",
            "data": [
              24,
              23,
              20,
              17,
              9,
              1,
              0
            ]
          },
          {
            "label": "Max Days",
            "data": [
              206,
              345,
              156,
              58,
              86,
              9,
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
          "Masonry",
          "Flat Roof",
          "Skylights",
          "GAF Solar",
          "Electrical",
          "Painting",
          "Other",
          "Carpentry"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              175,
              17,
              9,
              0,
              1,
              2,
              3,
              1,
              2,
              0,
              0,
              0,
              1,
              0
            ]
          },
          {
            "label": "Open",
            "data": [
              402,
              362,
              167,
              18,
              16,
              15,
              11,
              11,
              5,
              4,
              3,
              2,
              1,
              2
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
              96,
              70,
              30,
              14,
              6
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
              65,
              43,
              42,
              44,
              19,
              3
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
          "Dayton",
          "Richmond",
          "Nashville",
          "Raleigh",
          "Knoxville",
          "Greenville",
          "Grand Rapids"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              199,
              91,
              56,
              44,
              28,
              24,
              15,
              11,
              10,
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
            515,
            97,
            150,
            93,
            137,
            19,
            18,
            66,
            315,
            7795844.45
          ],
          [
            "Cleveland",
            314,
            65,
            79,
            129,
            28,
            9,
            4,
            19,
            165,
            3728180.2
          ],
          [
            "Detroit Metro",
            105,
            11,
            44,
            24,
            18,
            3,
            5,
            33,
            74,
            1768571.57
          ],
          [
            "Cincinnati",
            69,
            6,
            7,
            23,
            30,
            2,
            1,
            4,
            52,
            900020.52
          ],
          [
            "DC Metro",
            59,
            7,
            26,
            8,
            13,
            2,
            3,
            11,
            40,
            954463.16
          ],
          [
            "Dayton",
            52,
            11,
            11,
            17,
            11,
            2,
            0,
            7,
            31,
            522124.58
          ],
          [
            "Richmond",
            41,
            5,
            7,
            12,
            13,
            2,
            2,
            4,
            24,
            929200.65
          ],
          [
            "Raleigh",
            21,
            2,
            6,
            3,
            7,
            2,
            1,
            3,
            16,
            207230.34
          ],
          [
            "Nashville",
            19,
            3,
            5,
            1,
            7,
            1,
            2,
            2,
            16,
            882483.71
          ],
          [
            "Greenville",
            18,
            2,
            3,
            5,
            7,
            1,
            0,
            2,
            9,
            169863.15
          ],
          [
            "Knoxville",
            13,
            1,
            3,
            4,
            4,
            1,
            0,
            3,
            9,
            155814.94
          ],
          [
            "Grand Rapids",
            4,
            1,
            1,
            1,
            1,
            0,
            0,
            1,
            3,
            68972.1
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
            153,
            13,
            345
          ],
          [
            "Pending Material",
            135,
            30,
            188
          ],
          [
            "Pending Sales",
            27,
            25,
            80
          ],
          [
            "Homeowner Request",
            25,
            42,
            128
          ],
          [
            "Pending HOA",
            2,
            11,
            16
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
            131,
            131,
            3586306.06
          ],
          [
            "Siding",
            43,
            43,
            1322157.72
          ],
          [
            "Roofing",
            13,
            12,
            417323.86
          ],
          [
            "Metal",
            7,
            7,
            297403.34
          ],
          [
            "Masonry",
            6,
            6,
            145454.77
          ],
          [
            "Flat Roof",
            4,
            4,
            101132.37
          ],
          [
            "Windows",
            4,
            4,
            88895.84
          ],
          [
            "Rack Mounted Solar",
            3,
            3,
            118279.25
          ],
          [
            "Painting",
            1,
            1,
            27608.11
          ],
          [
            "Other",
            1,
            1,
            85489
          ],
          [
            "Skylights",
            1,
            1,
            41771.55
          ],
          [
            "Carpentry",
            1,
            1,
            239596.83
          ],
          [
            "Electrical",
            1,
            1,
            14703
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
            164
          ],
          [
            "Scheduled",
            102
          ],
          [
            "On Hold",
            93
          ],
          [
            "Completed",
            17
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
            577,
            175,
            402,
            571,
            14793277.32
          ],
          [
            "Gutters",
            379,
            17,
            362,
            378,
            8652918.69
          ],
          [
            "Siding",
            176,
            9,
            167,
            176,
            3830885.32
          ],
          [
            "Rack Mounted Solar",
            18,
            0,
            18,
            16,
            615828.56
          ],
          [
            "Metal",
            17,
            1,
            16,
            17,
            866272.33
          ],
          [
            "Windows",
            17,
            2,
            15,
            17,
            336197.21
          ],
          [
            "Masonry",
            14,
            3,
            11,
            13,
            366999.21
          ],
          [
            "Flat Roof",
            12,
            1,
            11,
            12,
            255561.04
          ],
          [
            "Skylights",
            7,
            2,
            5,
            7,
            96633.9
          ],
          [
            "GAF Solar",
            4,
            0,
            4,
            4,
            364387.72
          ],
          [
            "Electrical",
            3,
            0,
            3,
            3,
            50156.26
          ],
          [
            "Painting",
            2,
            0,
            2,
            2,
            126608.11
          ],
          [
            "Other",
            2,
            1,
            1,
            2,
            113606.6
          ],
          [
            "Carpentry",
            2,
            0,
            2,
            2,
            284794.83
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
            66,
            25,
            581720.47,
            39,
            3
          ],
          [
            "Justin Koenig",
            36,
            16,
            325096.9,
            13,
            1
          ],
          [
            "Hunter Carrington Scott",
            6,
            3,
            267717.61,
            3,
            1
          ],
          [
            "Bryce Fink",
            33,
            19,
            230651.21,
            14,
            1
          ],
          [
            "Bill Applegate",
            26,
            13,
            200771.91,
            8,
            1
          ],
          [
            "Scott Scaperato-INACTIVE",
            24,
            13,
            197310.38,
            16,
            1
          ],
          [
            "Brian Ogrin",
            26,
            16,
            187556.13,
            3,
            1
          ],
          [
            "Frank Butts",
            39,
            22,
            183208.44,
            15,
            1
          ],
          [
            "Richard Rice",
            3,
            3,
            179999,
            1,
            1
          ],
          [
            "Gary Benedict Jr",
            17,
            11,
            175901.17,
            4,
            1
          ],
          [
            "Michael Cox",
            18,
            10,
            166749.97,
            8,
            1
          ],
          [
            "Derrick Sieber",
            13,
            8,
            158822,
            3,
            1
          ],
          [
            "Jake Ross",
            27,
            15,
            147932.12,
            13,
            1
          ],
          [
            "Mike Stack",
            17,
            11,
            143981.42,
            5,
            1
          ],
          [
            "Zachary Schneider",
            23,
            12,
            133476.59,
            3,
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
            199,
            4675861.77,
            156
          ],
          [
            "Cleveland",
            91,
            1701988.43,
            80
          ],
          [
            "Detroit Metro",
            56,
            1199749,
            128
          ],
          [
            "Cincinnati",
            44,
            710438.83,
            48
          ],
          [
            "DC Metro",
            28,
            544887.91,
            107
          ],
          [
            "Dayton",
            24,
            398519.59,
            34
          ],
          [
            "Richmond",
            15,
            494437.17,
            44
          ],
          [
            "Nashville",
            11,
            235776.03,
            77
          ],
          [
            "Raleigh",
            10,
            165772.52,
            41
          ],
          [
            "Knoxville",
            7,
            130787.76,
            10
          ],
          [
            "Greenville",
            6,
            96092.41,
            2
          ],
          [
            "Grand Rapids",
            2,
            57551,
            27
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
            156,
            5800
          ],
          [
            "Job-107178",
            "Damien Pakula",
            "Detroit Metro",
            "Roofing",
            "Homeowner Request",
            "Gary Benedict Jr",
            128,
            13597
          ],
          [
            "Job-115035",
            "Erik Steensen",
            "DC Metro",
            "GAF Solar",
            "Pending Material",
            "Derrick Sieber",
            107,
            59822
          ],
          [
            "Job-112457",
            "Michelle  Pullens",
            "Columbus",
            "Siding",
            "Homeowner Request",
            "Mark Daggett",
            97,
            27000
          ],
          [
            "Job-109681",
            "George Potts",
            "DC Metro",
            "Roofing",
            "",
            "Dan Haske",
            86,
            24567
          ],
          [
            "Job-116474",
            "Eric Valente",
            "Cleveland",
            "Gutters",
            "",
            "Michael Cox",
            80,
            39496.49
          ],
          [
            "Job-116660",
            "Arthur Moore",
            "Nashville",
            "Roofing",
            "Pending Sales",
            "John Emrich",
            77,
            9000
          ],
          [
            "Job-116891",
            "Anthony Pezzutti",
            "Columbus",
            "Flat Roof",
            "",
            "Dave Norris",
            73,
            5750
          ],
          [
            "Job-117293",
            "Millie Franz",
            "Columbus",
            "Windows",
            "Pending Material",
            "Evan Kelley-INACTIVE",
            70,
            6713.33
          ],
          [
            "Job-117302",
            "Marcia Williams",
            "Cleveland",
            "Gutters",
            "Pending Material",
            "Jake Ross",
            70,
            19654.5
          ],
          [
            "Job-117309",
            "Eddie Black",
            "Cleveland",
            "Gutters",
            "Pending Material",
            "Frank Butts",
            69,
            16713.23
          ],
          [
            "Job-117357",
            "SARAH SLEDGE",
            "Cleveland",
            "Gutters",
            "Pending Material",
            "Rob Blackmore-INACTIVE",
            69,
            24159.61
          ],
          [
            "Job-114882",
            "Brenda Glass",
            "Cleveland",
            "Gutters",
            "",
            "Frank Butts",
            65,
            12314.16
          ],
          [
            "Job-114998",
            "Virgil Williams",
            "Cleveland",
            "Gutters",
            "",
            "Nate Boyer",
            65,
            32412.4
          ],
          [
            "Job-115915",
            "Denise Zielski",
            "Cleveland",
            "Siding",
            "",
            "Bryce Fink",
            60,
            19556.59
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Columbus",
          "permits": 66
        },
        {
          "branch": "Detroit Metro",
          "permits": 33
        },
        {
          "branch": "Cleveland",
          "permits": 19
        },
        {
          "branch": "DC Metro",
          "permits": 11
        },
        {
          "branch": "Dayton",
          "permits": 7
        },
        {
          "branch": "Cincinnati",
          "permits": 4
        },
        {
          "branch": "Richmond",
          "permits": 4
        },
        {
          "branch": "Raleigh",
          "permits": 3
        },
        {
          "branch": "Knoxville",
          "permits": 3
        },
        {
          "branch": "Nashville",
          "permits": 2
        },
        {
          "branch": "Greenville",
          "permits": 2
        },
        {
          "branch": "Grand Rapids",
          "permits": 1
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $5.19M of trapped partial-job revenue into billable revenue, reduce $5.23M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Dispatch the 96 RTS WOs sitting on partial jobs. No blocker, no hold, just dispatch.",
        "Re-dispatch the 36 RAS WOs (oldest at 58 days). These are pure re-work fastballs.",
        "Gutters sweep: 131 open WOs across 131 partial jobs blocking $3.59M. Highest single-trade leverage in the book.",
        "Columbus permit sweep: 66 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one.",
        "Close out the 11 zombie jobs (all WOs Completed, parent still In Progress). Pure paperwork."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Gutters): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 493 jobs ($10.41M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $5.19M, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  }
};
