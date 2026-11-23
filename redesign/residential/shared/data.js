/* AUTO-GENERATED — do not edit. Generated 2026-11-23T14:04:29.499Z (residential) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-11-23T14:04:29.499Z",
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
        "elapsedMs": 198,
        "builtAt": "2026-11-23T14:04:29.499Z"
      },
      {
        "id": "sales-overview",
        "version": "1.0-rules-encoded",
        "elapsedMs": 854,
        "builtAt": "2026-11-23T14:04:29.499Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 2647,
        "builtAt": "2026-11-23T14:04:29.499Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 29,
        "builtAt": "2026-11-23T14:04:29.499Z"
      }
    ]
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 06, 2026 - Nov 20, 2026 - De-Duplicated at Job Level - 4,514 Jobs - 14 Markets - 34 PMs",
    "generated": "2026-11-23",
    "headerMeta": {
      "trueRevenue": 87695934.67,
      "uniqueJobs": 4514,
      "markets": 14,
      "pms": 34,
      "medianComplete": 27.7,
      "avgStart": 26.5,
      "multiTradeJobs": 1590,
      "singleTradeJobs": 2924,
      "multiTradePct": 35.2,
      "lastBuild": "2026-11-23T14:04:29.499Z"
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
        "value": "$87.70M",
        "sub": "4,514 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$19,428",
        "sub": "Per job (deduped)"
      },
      {
        "label": "Median Days to Complete",
        "value": "27.7d",
        "sub": "Job-level median"
      },
      {
        "label": "Avg Days to Start",
        "value": "26.5d",
        "sub": "Sale to crew on-site"
      },
      {
        "label": "Multi-Trade Jobs",
        "value": "1,590",
        "sub": "35.2% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "2,924",
        "sub": "64.8% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$24,301",
        "sub": "+44.8% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$16,777",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+20.8d",
        "sub": "MT 42.4d vs ST 21.7d"
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
        "rev": 7222494.48,
        "jobs": 346,
        "med": 32.7,
        "start": 27.3
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
              7222494.48
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
              346
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
              25.6,
              22,
              24.4,
              26.8,
              27,
              26.1,
              27.1,
              27.3
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
              1590
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              2924
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
              1014,
              110,
              99,
              93,
              30,
              26,
              23,
              18
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
              36.1,
              31.1,
              46.8,
              30.8,
              38.4,
              39.4,
              27.8,
              30,
              22.2,
              32.7,
              42.2,
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
              21.7,
              25.4,
              35.5,
              41.6,
              37.6,
              35.1,
              27.5,
              27.6,
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
              31.4,
              18.5,
              14.6,
              13.6,
              24.1,
              22.5,
              19.5,
              16.6,
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
              33812769.85,
              11912531.93,
              7403948.01,
              6616910.39,
              5812886.02,
              4580588.55,
              4371054.2,
              4047859.85,
              2940072.85,
              2861548.24,
              2051891.22,
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
              5902928.42,
              5333833.61,
              4701879.68,
              4548580.82,
              4263940.81,
              3980116.93,
              3774339.57,
              3673770.22,
              3171099.47,
              3014218.39,
              2906721.43,
              2848863.98,
              2726864.81
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
          "Neil Laux",
          "Nathaniel Pardes",
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
                "x": 33.6,
                "y": 5902928.42,
                "wos": 408,
                "name": "Richard Williams"
              },
              {
                "x": 32.5,
                "y": 5333833.61,
                "wos": 329,
                "name": "Landon Little"
              },
              {
                "x": 33.7,
                "y": 4701879.68,
                "wos": 542,
                "name": "Drew Bailey"
              },
              {
                "x": 32.6,
                "y": 4548580.82,
                "wos": 273,
                "name": "Brandon Skrzypek"
              },
              {
                "x": 30.4,
                "y": 4263940.81,
                "wos": 350,
                "name": "Joseph Yager"
              },
              {
                "x": 21.5,
                "y": 3980116.93,
                "wos": 290,
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
                "y": 3171099.47,
                "wos": 226,
                "name": "Alejandro Alvarado"
              },
              {
                "x": 22.4,
                "y": 3014218.39,
                "wos": 225,
                "name": "Kaden Carter"
              },
              {
                "x": 27.1,
                "y": 2906721.43,
                "wos": 167,
                "name": "Brady Weingartner"
              },
              {
                "x": 20.5,
                "y": 2848863.98,
                "wos": 251,
                "name": "Galo Munive"
              },
              {
                "x": 27.5,
                "y": 2726864.81,
                "wos": 174,
                "name": "Malik Ford"
              },
              {
                "x": 20.5,
                "y": 2623723.15,
                "wos": 200,
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
                "y": 1842309.18,
                "wos": 164,
                "name": "Daniel Galli"
              },
              {
                "x": 22,
                "y": 1557636.67,
                "wos": 146,
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
                "x": 52.1,
                "y": 940765.41,
                "wos": 65,
                "name": "Chad Williams"
              },
              {
                "x": 42.4,
                "y": 710761.09,
                "wos": 78,
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
                "x": 57.5,
                "y": 445012.21,
                "wos": 62,
                "name": "Mike Scott"
              },
              {
                "x": 33.5,
                "y": 425038.81,
                "wos": 25,
                "name": "Neil Laux"
              },
              {
                "x": 17.5,
                "y": 394793.51,
                "wos": 16,
                "name": "Nathaniel Pardes"
              },
              {
                "x": 68.5,
                "y": 352866.21,
                "wos": 39,
                "name": "Justin Milliron"
              },
              {
                "x": 49.5,
                "y": 260266.48,
                "wos": 42,
                "name": "Chris Atkins"
              },
              {
                "x": 22.1,
                "y": 235692.61,
                "wos": 10,
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
          "Rack Mounted Solar",
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
              62485368.63,
              15280233.2,
              4901236.7,
              1132306.44,
              967320.4,
              757066.21,
              406662.67,
              400994.86,
              392933.1,
              266142.1,
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
          "GAF Solar",
          "Rack Mounted Solar",
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
              27.7,
              36.5,
              52.6,
              70,
              55.5,
              67.5,
              77.1,
              72.6,
              47.4,
              42,
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
              1388,
              1152,
              513,
              395,
              353,
              317,
              267,
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
              31.5,
              24.6,
              23.6,
              26.5,
              26.5,
              31.5,
              29.6,
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
              38.8,
              31.8,
              29,
              38.7,
              34.8,
              36.3,
              33,
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
                "x": 31.5,
                "y": 19791.59,
                "jobs": 1388,
                "name": "Brandon Vera"
              },
              {
                "x": 24.6,
                "y": 19910.82,
                "jobs": 1152,
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
                "y": 19475.17,
                "jobs": 395,
                "name": "Allison Webb"
              },
              {
                "x": 26.5,
                "y": 19364.83,
                "jobs": 353,
                "name": "Ethan Wolfe"
              },
              {
                "x": 31.5,
                "y": 18809.97,
                "jobs": 317,
                "name": "Bradley Essex - INACTIVE"
              },
              {
                "x": 29.6,
                "y": 19323.73,
                "jobs": 267,
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
            1697,
            33812769.85,
            19925.03,
            30.5,
            28.2,
            36.1,
            46.6,
            21.6
          ],
          [
            "Detroit Metro",
            633,
            11912531.93,
            18819.17,
            29.5,
            33.3,
            31.1,
            43.4,
            24.5
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
            289,
            6616910.39,
            22895.88,
            20.4,
            20,
            30.8,
            21.7,
            18.5
          ],
          [
            "DC Metro",
            310,
            5812886.02,
            18751.25,
            19.5,
            19.8,
            38.4,
            25.4,
            14.6
          ],
          [
            "Richmond",
            216,
            4580588.55,
            21206.43,
            20.5,
            16.1,
            39.4,
            35.5,
            13.6
          ],
          [
            "Cincinnati",
            230,
            4371054.2,
            19004.58,
            28.4,
            23.7,
            27.8,
            41.6,
            24.1
          ],
          [
            "Dayton",
            220,
            4047859.85,
            18399.36,
            25.6,
            21.2,
            30,
            37.6,
            22.5
          ],
          [
            "Raleigh",
            171,
            2940072.85,
            17193.41,
            21.5,
            20.8,
            22.2,
            35.1,
            19.5
          ],
          [
            "Knoxville",
            165,
            2861548.24,
            17342.72,
            20.5,
            14.9,
            32.7,
            27.5,
            16.6
          ],
          [
            "Greenville",
            109,
            2051891.22,
            18824.69,
            21.5,
            17.2,
            42.2,
            27.6,
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
            408,
            365,
            5902928.42,
            14467.96,
            33.6,
            28.8
          ],
          [
            "Landon Little",
            329,
            295,
            5333833.61,
            16212.26,
            32.5,
            27.8
          ],
          [
            "Drew Bailey",
            542,
            489,
            4701879.68,
            8675.05,
            33.7,
            25.9
          ],
          [
            "Brandon Skrzypek",
            273,
            265,
            4548580.82,
            16661.47,
            32.6,
            31.7
          ],
          [
            "Joseph Yager",
            350,
            274,
            4263940.81,
            12182.69,
            30.4,
            22.2
          ],
          [
            "Alex Dubanoski",
            290,
            211,
            3980116.93,
            13724.54,
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
            226,
            168,
            3171099.47,
            14031.41,
            20.5,
            18.1
          ],
          [
            "Kaden Carter",
            225,
            179,
            3014218.39,
            13396.53,
            22.4,
            21.1
          ],
          [
            "Brady Weingartner",
            167,
            154,
            2906721.43,
            17405.52,
            27.1,
            23.7
          ],
          [
            "Galo Munive",
            251,
            194,
            2848863.98,
            11350.06,
            20.5,
            22.5
          ],
          [
            "Malik Ford",
            174,
            166,
            2726864.81,
            15671.64,
            27.5,
            29.1
          ],
          [
            "Joseph Jones",
            200,
            156,
            2623723.15,
            13118.62,
            20.5,
            14.7
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
            164,
            130,
            1842309.18,
            11233.59,
            56.7,
            42.3
          ],
          [
            "Michael Blevins",
            146,
            96,
            1557636.67,
            10668.74,
            22,
            17.4
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
            65,
            46,
            940765.41,
            14473.31,
            52.1,
            20.3
          ],
          [
            "(Unassigned)",
            78,
            71,
            710761.09,
            9112.32,
            42.4,
            35.6
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
            62,
            61,
            445012.21,
            7177.62,
            57.5,
            32.5
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
            "Nathaniel Pardes",
            16,
            14,
            394793.51,
            24674.59,
            17.5,
            24.1
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
            42,
            37,
            260266.48,
            6196.82,
            49.5,
            47
          ],
          [
            "Spencer Boyette",
            10,
            10,
            235692.61,
            23569.26,
            22.1,
            27.8
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
            4058,
            62485368.63,
            15398.07,
            27.7
          ],
          [
            "Gutters",
            1611,
            15280233.2,
            9484.94,
            36.5
          ],
          [
            "Siding",
            499,
            4901236.7,
            9822.12,
            52.6
          ],
          [
            "Metal",
            64,
            1132306.44,
            17692.29,
            70
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
            70,
            757066.21,
            10815.23,
            67.5
          ],
          [
            "GAF Solar",
            6,
            406662.67,
            67777.11,
            77.1
          ],
          [
            "Rack Mounted Solar",
            36,
            400994.86,
            11138.75,
            72.6
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
            28,
            266142.1,
            9505.07,
            42
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
            1388,
            27470726.83,
            19791.59,
            "31.5d",
            "27.6d",
            38.8,
            19791.59
          ],
          [
            "David Schwan",
            1152,
            22937264.92,
            19910.82,
            "24.6d",
            "24.2d",
            31.8,
            19910.82
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
            395,
            7692693.15,
            19475.17,
            "26.5d",
            "20.4d",
            38.7,
            19475.17
          ],
          [
            "Ethan Wolfe",
            353,
            6835785.09,
            19364.83,
            "26.5d",
            "20.9d",
            34.8,
            19364.83
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
            267,
            5159436.77,
            19323.73,
            "29.6d",
            "31.2d",
            33,
            19323.73
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
            63,
            29,
            248,
            13,
            29,
            8,
            0,
            0,
            1,
            0,
            0,
            0,
            1,
            3,
            395
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
            342,
            289,
            98,
            157,
            20,
            0,
            7,
            0,
            30,
            0,
            15,
            202,
            1388
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
            45,
            165,
            0,
            287,
            76,
            6,
            1152
          ],
          [
            "Ethan Wolfe",
            4,
            20,
            179,
            0,
            2,
            145,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            353
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
            56,
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
            267
          ],
          [
            "Total",
            230,
            408,
            1697,
            310,
            220,
            633,
            35,
            1,
            109,
            165,
            30,
            289,
            171,
            216,
            4514
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Michael McLaughlin: 46 WOs, $538K revenue, 100.7-day median complete, top-volume PM with the slowest cycle in the network.",
        "Multi-trade penalty is severe in 1 markets: NOVA MT 64.6d vs ST 32.6d.",
        "Days to Start averages 26.5 days company-wide and 37.2 days in Cleveland (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [
        "Gutters-only work runs at 36.5-day median complete versus 27.7 days for roofing, 32% slower cycle on the lowest-priced trade."
      ],
      "positivesToBuildOn": [
        "October delivered $12.16M across 619 invoiced jobs at 32.5-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "DC Metro hits 19.5-day median complete and a $18,751 average contract on 310 jobs.",
        "Multi-trade jobs carry a $24,301 average contract versus $16,777 for single-trade, a 45% revenue lift per job.",
        "Nashville is the best-balanced market: 20.4-day median complete, 30.8% multi-trade attach, $22,896 average contract on 289 jobs."
      ]
    }
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-12-08",
    "ytdDays": 326,
    "rowCount": 5792,
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
        "value": "$100.04M",
        "sub": "5,792 signed contracts across 13 markets"
      },
      {
        "label": "Sold",
        "value": "$97.79M",
        "sub": "5,676 deals | 98.0% of signed contracts"
      },
      {
        "label": "Production Review",
        "value": "$1.77M",
        "sub": "88 deals | Ops Review, PM Review, Contracted"
      },
      {
        "label": "Kicked Back",
        "value": "$413K",
        "sub": "23 deals | 0.4% of signed contracts",
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
        "value": "$17,273",
        "sub": "Median: $16,004 | Install avg: $19,664"
      },
      {
        "label": "Organization",
        "value": "184 Reps",
        "sub": "13 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$112.01M",
        "sub": "Based on 326 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "85.9% / 14.0%",
        "sub": "4,973 installs | 809 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 5676,
        "amount": 97787591.32
      },
      {
        "label": "Production Review",
        "count": 88,
        "amount": 1771231.45
      },
      {
        "label": "Kicked Back",
        "count": 23,
        "amount": 412848.77
      },
      {
        "label": "Sales Action",
        "count": 1,
        "amount": 15000
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
        "count": 625,
        "amount": 11371219.98,
        "installs": 530,
        "repairs": 94,
        "avgDeal": 18194,
        "repairPct": 15,
        "installAvg": 20804,
        "repairAvg": 3404
      },
      {
        "key": "2026-11",
        "label": "November",
        "count": 318,
        "amount": 5518309.79,
        "installs": 262,
        "repairs": 47,
        "avgDeal": 17353,
        "repairPct": 14.8,
        "installAvg": 19461,
        "repairAvg": 4256
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
        "2026-11": 1488893.62,
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
        "2026-11": 1567088.95,
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
        "2026-10": 1701718.34,
        "2026-11": 719300.06,
        "2026-12": 0
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Insurance",
        "count": 2186,
        "amount": 45520904.14,
        "avg": 20824
      },
      {
        "jobType": "Retail-No Financing",
        "count": 2879,
        "amount": 39299672.55,
        "avg": 13650
      },
      {
        "jobType": "Retail-Financing",
        "count": 610,
        "amount": 12979977.95,
        "avg": 21279
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
        "count": 111,
        "amount": 2073597.74
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
        "count": 85,
        "amount": 1678065.43
      },
      {
        "w": 48,
        "count": 5,
        "amount": 83280.53
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
          39238186.9,
          2142,
          18318,
          1836,
          297,
          13.9,
          11
        ],
        [
          "Detroit Metro",
          13811322.76,
          858,
          16097,
          710,
          148,
          17.2,
          5
        ],
        [
          "Cleveland",
          11069100.09,
          667,
          16595,
          577,
          90,
          13.5,
          15
        ],
        [
          "Nashville",
          6812691.47,
          376,
          18119,
          294,
          82,
          21.8,
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
          4998834.91,
          299,
          16719,
          268,
          31,
          10.4,
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
          196,
          13630,
          174,
          22,
          11.2,
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
          "opps": 3646,
          "soldAmt": 21982962.23,
          "closePct": 41.4,
          "nsli": 6029
        },
        {
          "branch": "Detroit",
          "opps": 1617,
          "soldAmt": 10478005.25,
          "closePct": 43.7,
          "nsli": 6480
        },
        {
          "branch": "Cleveland",
          "opps": 1244,
          "soldAmt": 6686663.75,
          "closePct": 35.6,
          "nsli": 5375
        },
        {
          "branch": "DC Metro",
          "opps": 1008,
          "soldAmt": 4007049.04,
          "closePct": 32.4,
          "nsli": 3975
        },
        {
          "branch": "Cincinnati",
          "opps": 815,
          "soldAmt": 3865218.27,
          "closePct": 31.5,
          "nsli": 4743
        },
        {
          "branch": "Nashville",
          "opps": 575,
          "soldAmt": 3676104.47,
          "closePct": 43,
          "nsli": 6393
        },
        {
          "branch": "Dayton",
          "opps": 480,
          "soldAmt": 2185868.12,
          "closePct": 30.6,
          "nsli": 4554
        },
        {
          "branch": "Raleigh",
          "opps": 436,
          "soldAmt": 1681020.86,
          "closePct": 32.6,
          "nsli": 3856
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
          "opps": 148,
          "soldAmt": 971176.27,
          "closePct": 43.2,
          "nsli": 6562
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
        "opps": 10487,
        "soldAmt": 58653075.64,
        "closePct": 38.4,
        "nsli": 5593
      },
      "source": "Closing Percent By Branch-2026-11-23-09-00-07.xlsx",
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
        "market": "Richmond",
        "kicked": 3,
        "kickedAmount": 58903.68
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
        "market": "Raleigh",
        "kicked": 2,
        "kickedAmount": 11673.48
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
          "Retail-No Financing": 73,
          "Retail-Financing": 33
        },
        "installs": 103,
        "repairs": 23
      },
      {
        "name": "Storm Drumm",
        "amount": 2520512.82,
        "count": 161,
        "avg": 15655,
        "medDays": 3,
        "jt": {
          "Retail-Financing": 28,
          "Retail-No Financing": 88,
          "Insurance": 39
        },
        "installs": 146,
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
        "amount": 1685796.84,
        "count": 91,
        "avg": 18525,
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
        "amount": 1516455,
        "count": 93,
        "avg": 16306,
        "medDays": 4,
        "jt": {
          "Retail-No Financing": 63,
          "Retail-Financing": 13,
          "Insurance": 16
        },
        "installs": 77,
        "repairs": 16
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
          "count": 2689
        },
        {
          "label": "Retail-Fin",
          "median": 3,
          "mean": 16,
          "count": 596
        },
        {
          "label": "Insurance",
          "median": 27,
          "mean": 63,
          "count": 2043
        },
        {
          "label": "Repair",
          "median": 3,
          "mean": 15,
          "count": 749
        },
        {
          "label": "Install",
          "median": 10,
          "mean": 41,
          "count": 4681
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
          "count": 815
        },
        {
          "market": "Cincinnati",
          "median": 6,
          "mean": 27,
          "count": 296
        },
        {
          "market": "Raleigh",
          "median": 6,
          "mean": 46,
          "count": 190
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
          "count": 1966
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
          "count": 607
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
      "recent4WkAvg": 784995.53
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
      "generatedAt": "2026-11-12T09:04:25-05:00",
      "modelRunDate": "2026-11-11",
      "fiscalYear": 2026,
      "gap": {
        "fullYearBudget": 123956895,
        "invoicedYtd": 85653474,
        "stillToInvoice": 38303421,
        "daysRemaining": 50,
        "weeksRemaining": 8
      },
      "bridge": {
        "rows": [
          {
            "label": "In Progress",
            "amount": 7693018,
            "convertPct": 89.9,
            "lands": 6916537,
            "note": "Already installing. Needs completion and billing only."
          },
          {
            "label": "Not Started",
            "amount": 10188683,
            "convertPct": 74.6,
            "lands": 7604453,
            "note": "Sold and processed, awaiting schedule. Throughput decides this."
          },
          {
            "label": "Sold Not Processed",
            "amount": 990376,
            "convertPct": 74.6,
            "lands": 739180,
            "note": "Signed but not yet a job. Processing delay is pure lost time."
          }
        ],
        "alreadySoldLands": 15260171,
        "mustBeNewlySoldNet": 23043250,
        "mustBeNewlySoldGross": 57680225,
        "meanCapturePct": 39.9
      },
      "sellingWindow": {
        "weeks": [
          {
            "weekStart": "11/11/2026",
            "daysToYearEnd": 50,
            "capturePct": 74.6,
            "valueOfOneMillion": 746363
          },
          {
            "weekStart": "11/18/2026",
            "daysToYearEnd": 43,
            "capturePct": 69.1,
            "valueOfOneMillion": 691077
          },
          {
            "weekStart": "11/25/2026",
            "daysToYearEnd": 36,
            "capturePct": 61.7,
            "valueOfOneMillion": 617362
          },
          {
            "weekStart": "12/02/2026",
            "daysToYearEnd": 29,
            "capturePct": 50.8,
            "valueOfOneMillion": 508244
          },
          {
            "weekStart": "12/09/2026",
            "daysToYearEnd": 22,
            "capturePct": 36.7,
            "valueOfOneMillion": 366634
          },
          {
            "weekStart": "12/16/2026",
            "daysToYearEnd": 15,
            "capturePct": 20.4,
            "valueOfOneMillion": 203686
          },
          {
            "weekStart": "12/23/2026",
            "daysToYearEnd": 8,
            "capturePct": 6.1,
            "valueOfOneMillion": 60621
          },
          {
            "weekStart": "12/30/2026",
            "daysToYearEnd": 1,
            "capturePct": 0.2,
            "valueOfOneMillion": 1940
          }
        ],
        "belowThreeQuartersFrom": "11/11/2026",
        "belowHalfFrom": "12/09/2026"
      },
      "pullForward": {
        "backlogTotal": 18872078,
        "perDay": 91836,
        "perWeek": 689179,
        "leverageCurve": [
          {
            "daysBeforeYearEnd": 50,
            "onDate": "11/11/2026",
            "worthPerDay": 91836
          },
          {
            "daysBeforeYearEnd": 45,
            "onDate": "11/16/2026",
            "worthPerDay": 108018
          },
          {
            "daysBeforeYearEnd": 30,
            "onDate": "12/01/2026",
            "worthPerDay": 196321
          },
          {
            "daysBeforeYearEnd": 21,
            "onDate": "12/10/2026",
            "worthPerDay": 349518
          },
          {
            "daysBeforeYearEnd": 14,
            "onDate": "12/17/2026",
            "worthPerDay": 424924
          },
          {
            "daysBeforeYearEnd": 7,
            "onDate": "12/24/2026",
            "worthPerDay": 516264
          }
        ],
        "strandedBacklog": 3611907,
        "completedAwaitingInvoice": {
          "total": 2042172,
          "jobs": 84,
          "medianAgeDays": 7,
          "agingBuckets": [
            {
              "bucket": "0-15 days",
              "jobs": 46,
              "amount": 1145504
            },
            {
              "bucket": "15-30 days",
              "jobs": 13,
              "amount": 323780
            },
            {
              "bucket": "30-60 days",
              "jobs": 10,
              "amount": 284922
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
              "reason": "Pending Supplement",
              "jobs": 31,
              "amount": 956589
            },
            {
              "reason": "Ready to Invoice",
              "jobs": 33,
              "amount": 740110
            },
            {
              "reason": "Accounting Kickback",
              "jobs": 11,
              "amount": 220547
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
        "requiredPerWeek": 7210028,
        "demonstratedPerWeek": 2306404,
        "liftRequiredPct": 212.6,
        "trendPerWeek": -101389
      },
      "scenarios": [
        {
          "name": "Hold current pace",
          "weeklySales": 2306404,
          "newSalesRevenue": 7371266,
          "landsAt": 108284911,
          "note": "Trailing 4-week average, carried flat."
        },
        {
          "name": "Stretch +15%",
          "weeklySales": 2652364,
          "newSalesRevenue": 8476956,
          "landsAt": 109390601,
          "note": "Ambitious but inside what the team has produced before."
        },
        {
          "name": "Required to hit plan",
          "weeklySales": 7210028,
          "newSalesRevenue": 23043250,
          "landsAt": 123956895,
          "note": "What closing the full gap by selling alone would take."
        }
      ],
      "modelComparison": {
        "v5FullYear": 93145967,
        "paceLandingZone": 108284911,
        "note": "V5 is the forecast of record. The pace landing zone runs higher because these conversion rates are drawn from jobs that did invoice and because V5 also carries a declining sales trend."
      },
      "verdict": {
        "band": "not-reachable",
        "headline": "Plan is not reachable by selling alone. Closing the gap needs a production pull-forward, a budget reset, or both.",
        "reasons": [
          "Required $7,210,028/wk against a demonstrated $2,306,404/wk, a 213% lift.",
          "Sales are trending down $101,389 per week, not flat.",
          "After 11/11/2026, under 75% of what is sold still invoices this year.",
          "$15,260,171 of the gap is already sold and needs production, not selling."
        ]
      }
    },
    "commentary": {
      "whatsWorking": [
        "Sales Trajectory: Monthly sales moved from January $3.26M to December $3K (-100%). Annualized run rate: $112.01M.",
        "Premium Deal Types: Insurance averages $20,824 per deal. Retail-Financing averages $21,279 (highest per-deal value). Retail-No Financing averages $13,650 (the volume engine).",
        "Sold Conversion: 5,676 of 5,792 signed contracts (98.0%) have made it to Sold status for $97.79M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Kickback Concentration: Cleveland has the most kickbacks (7, $144K). Total company kickbacks: 23 worth $413K.",
        "Production Review Queue: 88 deals worth $1.77M sitting in Production Review. Watch for backlog growth, it delays revenue recognition."
      ],
      "criticalRisks": [
        "Cleveland Kickback Concentration drives the company's largest single-market rework volume.",
        "Pipeline kickbacks company-wide: 23 kickbacks totaling $413K.",
        "Production Review backlog: 88 deals ($1.77M)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 4d median close on 3,285 retail deals.",
        "Insurance Density: $20,824 avg on 2,186 deals = $45.52M; +20% lift = ~$9.10M.",
        "Financing Lifts Ticket: Retail-Financing averages $21,279, highest per-deal value."
      ],
      "fixList": [
        "Cleveland Pipeline Kickback Intervention, pull every kickback and categorize root cause.",
        "Production Review Bottleneck, 88 deals; add temporary PM capacity.",
        "Financing Push, 610 financing deals YTD (10.5%) at $21,279 avg. Target 15% mix."
      ],
      "actionPlan": {
        "thisWeek": [
          "Cleveland Pipeline Kickback Review, meet with branch leadership.",
          "Production Review Surge Plan, 88 deals ($1.77M) in queue."
        ],
        "thisMonth": [
          "Supplement Escalation SOP, 7/14/30 day cadence with carrier escalation.",
          "Completed-to-Billing SLA, 100% invoiced within 21 days.",
          "Repair Triage Pilot in markets where repair rate exceeds 25%.",
          "Financing Training, peer training led by top financing reps. Target 15% mix."
        ],
        "thisQuarter": [
          "Add Kickback Reason field to accounting workflow.",
          "Repair Business Decision, 809 repairs YTD at ~$2,485 avg.",
          "Ops Capacity Planning, December hit 1 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "title": "Residential Revenue Forecast",
    "subtitle": "V5 Model with Job Type Analysis · Data as of November 20, 2026",
    "runDate": "November 20, 2026",
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
        "value": "$97.8M",
        "sub": "Jobs processed into system"
      },
      {
        "label": "Invoiced YTD",
        "value": "$89.04M",
        "sub": "NetSuite AR · 4988 invoices booked"
      },
      {
        "label": "4-Week Avg Weekly Sales",
        "value": "$2.1M",
        "sub": "Trend: -173,431/week"
      },
      {
        "label": "Current Week (Projected)",
        "value": "$2.5M",
        "sub": "WTD: $1.7M"
      },
      {
        "label": "Annual Forecast",
        "value": "$108M",
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
        "sub": "14.2% under plan"
      },
      {
        "label": "Active Pipeline",
        "value": "$18.6M",
        "sub": "Backlog + IP + SNP"
      }
    ],
    "execSummary": {
      "budget": 125890005.2103,
      "modelAnnualInvoiced": 107978376.1,
      "gap": 17911629.1103,
      "narrative": "The V5 model projects $108M in annual invoiced revenue against a $125.9M plan. The challenge is timing, not volume: Q1 ramped slowly so Q2 invoicing will lag. If the current weekly pace of $2.1M holds, H2 should catch up as earlier sales convert to invoiced revenue."
    },
    "monthRevenue": {
      "april": {
        "invoiced": 8405959.810000002,
        "wipChange": -9104314.09,
        "netRevenue": -698354.2799999975,
        "beginningWip": 9104314.09,
        "endingWip": 0,
        "materialCost": 4580426.059,
        "laborCost": 2778298.6927,
        "grossProfit": -4189772.1717,
        "grossMarginPct": -132.2132
      },
      "may": {
        "invoiced": 8564976.120000001,
        "wipChange": 0,
        "netRevenue": 8564976.120000001,
        "beginningWip": 0,
        "endingWip": 0,
        "materialCost": 3873311.4523,
        "laborCost": 2349391.9574,
        "grossProfit": 6114117.1145,
        "grossMarginPct": 49.5599
      }
    },
    "weeklyTargetsHeader": {
      "avgWeeklyNeed": 2161112.2911,
      "recent4WkAvg": 2113645.7625,
      "gap": 47466.5286,
      "productionAvgWeeklyNeed": 2412600.0153,
      "productionCycleStart": 14,
      "productionCycleComplete": 7,
      "productionTotalCycle": 21
    },
    "budgetRecoveryHeader": {
      "fullYearBudget": 125890005.2103,
      "gap": 20987844.0391,
      "upliftPct": 1.3,
      "aprilGap": 439892.5857,
      "q1OriginalBudget": 103034403.7434,
      "q1Actual": 82486452.29,
      "q1Shortfall": 20547951.4534,
      "recoveryRatio": 2.9881
    },
    "profitabilitySummary": {
      "combinedGP": 64102832.54,
      "combinedGP_pct": 39.8023,
      "combinedRevenue": 161053200.93,
      "y2025_GP_pct": 41.5376,
      "y2025_revenue": 73942457.17,
      "y2025_jobs": 3481,
      "y2026_GP_pct": 38.3292,
      "y2026_revenue": 87110743.76,
      "y2026_jobs": 4468,
      "materialCost": 60107692.49,
      "laborCost": 36458862.41,
      "commissions": 13680134.34,
      "materialPctContract": 37.3216,
      "laborPctContract": 22.6378,
      "commissionPctContract": 8.4942
    },
    "pipelineSnapshot": {
      "stages": [
        {
          "label": "New Sales",
          "subtitle": "101 jobs · 4d avg",
          "value": 1947296.08,
          "jobs": 101,
          "color": "#3b82f6",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 46,
              "value": 1029260.77
            },
            {
              "market": "Detroit Metro",
              "jobs": 15,
              "value": 284102.83
            },
            {
              "market": "Cleveland",
              "jobs": 12,
              "value": 224861.31
            },
            {
              "market": "Nashville",
              "jobs": 3,
              "value": 93639.98
            },
            {
              "market": "Richmond",
              "jobs": 4,
              "value": 85961.86
            },
            {
              "market": "Cincinnati",
              "jobs": 5,
              "value": 71898.66
            },
            {
              "market": "Knoxville",
              "jobs": 5,
              "value": 71400
            },
            {
              "market": "DC Metro",
              "jobs": 3,
              "value": 39086.19
            },
            {
              "market": "Dayton",
              "jobs": 5,
              "value": 25571
            },
            {
              "market": "Raleigh",
              "jobs": 3,
              "value": 21513.48
            }
          ],
          "avgDays": 4.1,
          "medianDays": 4
        },
        {
          "label": "Backlog",
          "subtitle": "400 jobs · 31d avg",
          "value": 8755555.46,
          "jobs": 400,
          "color": "#f97316",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 145,
              "value": 3336406.34
            },
            {
              "market": "Cleveland",
              "jobs": 89,
              "value": 1873436.94
            },
            {
              "market": "Detroit Metro",
              "jobs": 67,
              "value": 1491661.45
            },
            {
              "market": "Cincinnati",
              "jobs": 24,
              "value": 470441.7
            },
            {
              "market": "DC Metro",
              "jobs": 22,
              "value": 371966.77
            },
            {
              "market": "Nashville",
              "jobs": 15,
              "value": 340384.99
            },
            {
              "market": "Richmond",
              "jobs": 10,
              "value": 284563.75
            },
            {
              "market": "Dayton",
              "jobs": 8,
              "value": 197501.35
            },
            {
              "market": "Knoxville",
              "jobs": 10,
              "value": 195353.88
            },
            {
              "market": "Raleigh",
              "jobs": 8,
              "value": 170278.91
            },
            {
              "market": "Greenville",
              "jobs": 2,
              "value": 23559.38
            }
          ],
          "avgDays": 30.8,
          "medianDays": 20
        },
        {
          "label": "In Progress",
          "subtitle": "261 jobs",
          "value": 7873874.18,
          "jobs": 261,
          "color": "#22c55e",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 101,
              "value": 3130132.54
            },
            {
              "market": "Cleveland",
              "jobs": 65,
              "value": 1704003.1
            },
            {
              "market": "Detroit Metro",
              "jobs": 24,
              "value": 721447.07
            },
            {
              "market": "Nashville",
              "jobs": 7,
              "value": 668095.08
            },
            {
              "market": "Richmond",
              "jobs": 16,
              "value": 479849.08
            },
            {
              "market": "Cincinnati",
              "jobs": 21,
              "value": 459842.23
            },
            {
              "market": "DC Metro",
              "jobs": 9,
              "value": 310208.75
            },
            {
              "market": "Dayton",
              "jobs": 7,
              "value": 181751
            },
            {
              "market": "Raleigh",
              "jobs": 6,
              "value": 128666.59
            },
            {
              "market": "Grand Rapids",
              "jobs": 4,
              "value": 80478.03
            },
            {
              "market": "Greenville",
              "jobs": 1,
              "value": 9400.71
            }
          ],
          "avgDays": null,
          "medianDays": null
        },
        {
          "label": "Completed",
          "subtitle": "97 jobs",
          "value": 2225680.27,
          "jobs": 97,
          "color": "#a855f7",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 41,
              "value": 1009831.59
            },
            {
              "market": "Richmond",
              "jobs": 13,
              "value": 396853.47
            },
            {
              "market": "Cleveland",
              "jobs": 11,
              "value": 184091.8
            },
            {
              "market": "DC Metro",
              "jobs": 6,
              "value": 116312.97
            },
            {
              "market": "Cincinnati",
              "jobs": 4,
              "value": 114748.54
            },
            {
              "market": "Nashville",
              "jobs": 4,
              "value": 100912.73
            },
            {
              "market": "Detroit Metro",
              "jobs": 4,
              "value": 100691.99
            },
            {
              "market": "Raleigh",
              "jobs": 4,
              "value": 57433
            },
            {
              "market": "Dayton",
              "jobs": 3,
              "value": 52928.87
            },
            {
              "market": "Grand Rapids",
              "jobs": 1,
              "value": 43551
            },
            {
              "market": "Greenville",
              "jobs": 4,
              "value": 26330.77
            },
            {
              "market": "Knoxville",
              "jobs": 2,
              "value": 21993.54
            }
          ],
          "avgDays": null,
          "medianDays": null
        }
      ],
      "totalJobs": 859,
      "totalValue": 20802405.99
    },
    "commentary": {
      "actionableRecommendations": [
        "Hold weekly sales pace at or above $2.2M to defend the May invoicing target.",
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
            20802405.99,
            10113960.9,
            7287239.6358,
            -914485.4242
          ],
          [
            "May 2026",
            14117621.6688,
            20802405.99,
            11714245.78,
            9767611.9753,
            -4350009.6935
          ],
          [
            "Jun 2026",
            14800571.2162,
            20802405.99,
            11845208.49,
            11608722.6568,
            -3191848.5594
          ],
          [
            "Jul 2026",
            11641331.0926,
            20802405.99,
            11754306.81,
            9194028.7409,
            -2447302.3517
          ],
          [
            "Aug 2026",
            12738223.8858,
            20802405.99,
            10162045.12,
            12681675.6499,
            -56548.2359
          ],
          [
            "Sep 2026",
            13673037.2551,
            20802405.99,
            12441316.71,
            10992865.7473,
            -2680171.5078
          ],
          [
            "Oct 2026",
            13483638.9808,
            20802405.99,
            13360596.02,
            3444058.0881,
            -10039580.8927
          ],
          [
            "Nov 2026",
            12392297.9669,
            20802405.99,
            12080370.1173,
            12347396.0419,
            -44901.925
          ],
          [
            "Dec 2026",
            7988852.274,
            16300136.092,
            8684921.9749,
            8313932.0961,
            325079.8221
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
            20802405.99,
            7491474.3858,
            914485.4242,
            10113960.9
          ],
          [
            "May 2026",
            20802405.99,
            9868598.592,
            0,
            11714245.78
          ],
          [
            "Jun 2026",
            20802405.99,
            11000564.4145,
            87858.8955,
            11845208.49
          ],
          [
            "Jul 2026",
            20802405.99,
            11403506.3533,
            0,
            11754306.81
          ],
          [
            "Aug 2026",
            20802405.99,
            10739002.3467,
            0,
            10162045.12
          ],
          [
            "Sep 2026",
            20802405.99,
            11561931.3156,
            0,
            12441316.71
          ],
          [
            "Oct 2026",
            20802405.99,
            12548372.1781,
            0,
            13360596.02
          ],
          [
            "Nov 2026",
            20802405.99,
            6038443.9666,
            6748844.661,
            12080370.1173
          ],
          [
            "Dec 2026",
            16300136.092,
            2440122.6132,
            7628190.2261,
            8684921.9749
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
            0.2141,
            3257140.76,
            3257140.76,
            3257140.76
          ],
          [
            "Feb 2026 [Actual]",
            1.3086,
            3101368.34,
            3101368.34,
            3101368.34
          ],
          [
            "Mar 2026 [Actual]",
            2.5996,
            5679200.03,
            5679200.03,
            5679200.03
          ],
          [
            "Apr 2026 [Actual]",
            9.2163,
            10113960.9,
            10113960.9,
            10113960.9
          ],
          [
            "May 2026 [Actual]",
            13.4999,
            11714245.78,
            11714245.78,
            11714245.78
          ],
          [
            "Jun 2026 [Actual]",
            12.2754,
            11845208.49,
            11845208.49,
            11845208.49
          ],
          [
            "Jul 2026 [Actual]",
            13.6231,
            11754306.81,
            11754306.81,
            11754306.81
          ],
          [
            "Aug 2026 [Actual]",
            13.4041,
            10162045.12,
            10162045.12,
            10162045.12
          ],
          [
            "Sep 2026 [Actual]",
            12.0502,
            12441316.71,
            12441316.71,
            12441316.71
          ],
          [
            "Oct 2026 [Actual]",
            11.3405,
            13360596.02,
            13360596.02,
            13360596.02
          ],
          [
            "Nov 2026",
            7.6855,
            0,
            13198335.8276,
            15245274.3224
          ],
          [
            "Dec 2026",
            2.7828,
            0,
            4778861.0923,
            5520017.7698
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
            "Wk 11/15",
            8422623.7834,
            2818753.0274,
            5603870.756
          ],
          [
            "Wk 11/22",
            8422623.7834,
            2818753.0274,
            5603870.756
          ],
          [
            "Wk 11/29",
            6592130.3035,
            2206151.8747,
            4385978.4288
          ],
          [
            "Wk 12/06",
            5859932.9116,
            1961111.4137,
            3898821.4979
          ],
          [
            "Wk 12/13",
            5859932.9116,
            1961111.4137,
            3898821.4979
          ],
          [
            "Wk 12/20",
            5859932.9116,
            1961111.4137,
            3898821.4979
          ],
          [
            "Wk 12/27",
            4185666.3654,
            1400793.8669,
            2784872.4985
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
            23791.447,
            18,
            1321.7471,
            40.2918,
            42491524.41
          ],
          [
            "Retail-Financing",
            22141.4266,
            18,
            1230.0793,
            60.9524,
            11624248.96
          ],
          [
            "Retail-No Financing",
            19277.7234,
            19,
            1014.617,
            60.7234,
            37880726.49
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
            1786,
            23791.447
          ],
          [
            "Retail-Financing",
            13,
            5,
            18,
            525,
            22141.4266
          ],
          [
            "Retail-No Financing",
            13,
            6,
            19,
            1965,
            19277.7234
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
            145,
            3336406.34
          ],
          [
            "Cleveland",
            89,
            1873436.94
          ],
          [
            "Detroit Metro",
            67,
            1491661.45
          ],
          [
            "Cincinnati",
            24,
            470441.7
          ],
          [
            "DC Metro",
            22,
            371966.77
          ],
          [
            "Nashville",
            15,
            340384.99
          ],
          [
            "Richmond",
            10,
            284563.75
          ],
          [
            "Dayton",
            8,
            197501.35
          ],
          [
            "Knoxville",
            10,
            195353.88
          ],
          [
            "Raleigh",
            8,
            170278.91
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
            101,
            3130132.54
          ],
          [
            "Cleveland",
            65,
            1704003.1
          ],
          [
            "Detroit Metro",
            24,
            721447.07
          ],
          [
            "Nashville",
            7,
            668095.08
          ],
          [
            "Richmond",
            16,
            479849.08
          ],
          [
            "Cincinnati",
            21,
            459842.23
          ],
          [
            "DC Metro",
            9,
            310208.75
          ],
          [
            "Dayton",
            7,
            181751
          ],
          [
            "Raleigh",
            6,
            128666.59
          ],
          [
            "Grand Rapids",
            4,
            80478.03
          ],
          [
            "Greenville",
            1,
            9400.71
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
            1029260.77
          ],
          [
            "Detroit Metro",
            15,
            284102.83
          ],
          [
            "Cleveland",
            12,
            224861.31
          ],
          [
            "Nashville",
            3,
            93639.98
          ],
          [
            "Richmond",
            4,
            85961.86
          ],
          [
            "Cincinnati",
            5,
            71898.66
          ],
          [
            "Knoxville",
            5,
            71400
          ],
          [
            "DC Metro",
            3,
            39086.19
          ],
          [
            "Dayton",
            5,
            25571
          ],
          [
            "Raleigh",
            3,
            21513.48
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
            41,
            1009831.59
          ],
          [
            "Richmond",
            13,
            396853.47
          ],
          [
            "Cleveland",
            11,
            184091.8
          ],
          [
            "DC Metro",
            6,
            116312.97
          ],
          [
            "Cincinnati",
            4,
            114748.54
          ],
          [
            "Nashville",
            4,
            100912.73
          ],
          [
            "Detroit Metro",
            4,
            100691.99
          ],
          [
            "Raleigh",
            4,
            57433
          ],
          [
            "Dayton",
            3,
            52928.87
          ],
          [
            "Grand Rapids",
            1,
            43551
          ],
          [
            "Greenville",
            4,
            26330.77
          ],
          [
            "Knoxville",
            2,
            21993.54
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
            1020356.4347,
            47.2144
          ],
          [
            "Retail-No Financing",
            850849.1208,
            39.3709
          ],
          [
            "Retail-Financing",
            289906.7356,
            13.4147
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
            1151115.893,
            53.265
          ],
          [
            "Gutters",
            839447.118,
            38.8433
          ],
          [
            "Siding",
            50857.3428,
            2.3533
          ],
          [
            "Rack Mounted Solar",
            22719.0591,
            1.0513
          ],
          [
            "Metal",
            19744.0358,
            0.9136
          ],
          [
            "Flat Roof",
            17400.4454,
            0.8052
          ],
          [
            "GAF Solar",
            14789.6639,
            0.6844
          ],
          [
            "Masonry",
            14425.168,
            0.6675
          ],
          [
            "Carpentry",
            9718.1327,
            0.4497
          ],
          [
            "Painting",
            8640.3393,
            0.3998
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
            "Wk 11/15",
            "Nov",
            2818753.0274
          ],
          [
            "Wk 11/22",
            "Nov",
            2818753.0274
          ],
          [
            "Wk 11/29",
            "Nov",
            2206151.8747
          ],
          [
            "Wk 12/06",
            "Dec",
            1961111.4137
          ],
          [
            "Wk 12/13",
            "Dec",
            1961111.4137
          ],
          [
            "Wk 12/20",
            "Dec",
            1961111.4137
          ],
          [
            "Wk 12/27",
            "Dec",
            1400793.8669
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
              2026821.08,
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
              2111829.48,
              2318898.76,
              1458561.98,
              2457002.7303,
              1478899.0986,
              1305468.3654,
              1132037.6321,
              958606.8989,
              785176.1657,
              611745.4325
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
              7287239.6358,
              9767611.9753,
              11608722.6568,
              9194028.7409,
              12681675.6499,
              10992865.7473,
              3444058.0881,
              12347396.0419,
              8313932.0961
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
              13360596.02,
              12080370.1173,
              8684921.9749
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
              3077152.3007,
              3094189.766,
              4452795.7442,
              7491474.3858,
              9868598.592,
              11000564.4145,
              11403506.3533,
              10739002.3467,
              11561931.3156,
              12548372.1781,
              12347396.0419,
              10393392.6614
            ]
          },
          {
            "label": "From Known Sales",
            "data": [
              3077152.3007,
              3094189.766,
              4452795.7442,
              7491474.3858,
              9868598.592,
              11000564.4145,
              11403506.3533,
              10739002.3467,
              11561931.3156,
              12548372.1781,
              6038443.9666,
              2440122.6132
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
              39.4658,
              13.4976,
              11.0088,
              6.8072,
              6.4321,
              5.25,
              4.9962,
              4.2889,
              2.8547,
              2.7317
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
              40.2918,
              31.0887,
              16.3861,
              6.7901,
              2.7497,
              1.3468
            ]
          },
          {
            "label": "Retail-Financing",
            "data": [
              60.9524,
              27.619,
              7.8095,
              1.1429,
              0.9524,
              0.381
            ]
          },
          {
            "label": "Retail-No Financing",
            "data": [
              60.7234,
              25.9297,
              7.3867,
              2.9547,
              1.3754,
              0.866
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
      12347396.0419,
      10393392.6614
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
      6038443.9666,
      2440122.6132
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
      13360596.02,
      12080370.1173,
      8684921.9749
    ],
    "backlogData": [
      {
        "month": "Jan 2026",
        "total_backlog": 20802405.99,
        "wip_est": 10099554.45,
        "not_started": 10702851.54,
        "budget_rev": 3312733.06,
        "pipeline_backlog": 20802405.99,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 3077152.3007,
        "revenue_gap": 235580.7593,
        "adjusted_required_sales": 3257140.76,
        "backlog_surplus": 17545265.23
      },
      {
        "month": "Feb 2026",
        "total_backlog": 20802405.99,
        "wip_est": 10099554.45,
        "not_started": 10702851.54,
        "budget_rev": 2855781.11,
        "pipeline_backlog": 20802405.99,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 3094189.766,
        "revenue_gap": 0,
        "adjusted_required_sales": 3101368.34,
        "backlog_surplus": 17701037.65
      },
      {
        "month": "Mar 2026",
        "total_backlog": 20802405.99,
        "wip_est": 10099554.45,
        "not_started": 10702851.54,
        "budget_rev": 6228299.34,
        "pipeline_backlog": 20802405.99,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 4452795.7442,
        "revenue_gap": 1775503.5958,
        "adjusted_required_sales": 5679200.03,
        "backlog_surplus": 15123205.96
      },
      {
        "month": "Apr 2026",
        "total_backlog": 20802405.99,
        "wip_est": 10099554.45,
        "not_started": 10702851.54,
        "budget_rev": 8405959.81,
        "pipeline_backlog": 20802405.99,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 7491474.3858,
        "revenue_gap": 914485.4242,
        "adjusted_required_sales": 10113960.9,
        "backlog_surplus": 10688445.09
      },
      {
        "month": "May 2026",
        "total_backlog": 20802405.99,
        "wip_est": 12481443.594,
        "not_started": 8320962.396,
        "budget_rev": 8564976.12,
        "pipeline_backlog": 20802405.99,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 9868598.592,
        "revenue_gap": 0,
        "adjusted_required_sales": 11714245.78,
        "backlog_surplus": 9088160.21
      },
      {
        "month": "Jun 2026",
        "total_backlog": 20802405.99,
        "wip_est": 12481443.594,
        "not_started": 8320962.396,
        "budget_rev": 11088423.31,
        "pipeline_backlog": 20802405.99,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 11000564.4145,
        "revenue_gap": 87858.8955,
        "adjusted_required_sales": 11845208.49,
        "backlog_surplus": 8957197.5
      },
      {
        "month": "Jul 2026",
        "total_backlog": 20802405.99,
        "wip_est": 12481443.594,
        "not_started": 8320962.396,
        "budget_rev": 10676120.9,
        "pipeline_backlog": 20802405.99,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 11403506.3533,
        "revenue_gap": 0,
        "adjusted_required_sales": 11754306.81,
        "backlog_surplus": 9048099.18
      },
      {
        "month": "Aug 2026",
        "total_backlog": 20802405.99,
        "wip_est": 12481443.594,
        "not_started": 8320962.396,
        "budget_rev": 9151616.35,
        "pipeline_backlog": 20802405.99,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 10739002.3467,
        "revenue_gap": 0,
        "adjusted_required_sales": 10162045.12,
        "backlog_surplus": 10640360.87
      },
      {
        "month": "Sep 2026",
        "total_backlog": 20802405.99,
        "wip_est": 12481443.594,
        "not_started": 8320962.396,
        "budget_rev": 9929275.62,
        "pipeline_backlog": 20802405.99,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 11561931.3156,
        "revenue_gap": 0,
        "adjusted_required_sales": 12441316.71,
        "backlog_surplus": 8361089.28
      },
      {
        "month": "Oct 2026",
        "total_backlog": 20802405.99,
        "wip_est": 12481443.594,
        "not_started": 8320962.396,
        "budget_rev": 12273266.67,
        "pipeline_backlog": 20802405.99,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 12548372.1781,
        "revenue_gap": 0,
        "adjusted_required_sales": 13360596.02,
        "backlog_surplus": 7441809.97
      },
      {
        "month": "Nov 2026",
        "total_backlog": 20802405.99,
        "wip_est": 12481443.594,
        "not_started": 8320962.396,
        "budget_rev": 12787288.6277,
        "pipeline_backlog": 20802405.99,
        "new_sales_backlog": 0,
        "pipe_invoicing": 10273687.94,
        "future_invoicing": 0,
        "rev_from_backlog": 6038443.9666,
        "revenue_gap": 6748844.661,
        "adjusted_required_sales": 12080370.1173,
        "backlog_surplus": 8722035.8727
      },
      {
        "month": "Dec 2026",
        "total_backlog": 16300136.092,
        "wip_est": 9780081.6552,
        "not_started": 6520054.4368,
        "budget_rev": 10068312.8393,
        "pipeline_backlog": 10528718.05,
        "new_sales_backlog": 5771418.042,
        "pipe_invoicing": 10461609.25,
        "future_invoicing": 5072749.86,
        "rev_from_backlog": 2440122.6132,
        "revenue_gap": 7628190.2261,
        "adjusted_required_sales": 8684921.9749,
        "backlog_surplus": 7615214.1171
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
      "source": "ResInvoicedYTDResults-2026-11-23.csv",
      "format": "per-invoice",
      "aggregatedOnly": false,
      "totalInvoiced": 89037130.08000006,
      "invoiceCount": 4988,
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
        6550677.789999998,
        0
      ],
      "byBranch": {
        "Greenville": {
          "invoiced": 2040665.3199999998,
          "count": 162
        },
        "Richmond": {
          "invoiced": 4636736.730000001,
          "count": 259
        },
        "DC Metro": {
          "invoiced": 6538432.6899999995,
          "count": 368
        },
        "Cleveland": {
          "invoiced": 7489010.540000001,
          "count": 470
        },
        "Nashville": {
          "invoiced": 6739208.000000003,
          "count": 316
        },
        "Columbus": {
          "invoiced": 34456879.72000002,
          "count": 1824
        },
        "Dayton": {
          "invoiced": 4197928.17,
          "count": 252
        },
        "Cincinnati": {
          "invoiced": 4428087.740000001,
          "count": 260
        },
        "Detroit": {
          "invoiced": 11889050.369999997,
          "count": 639
        },
        "Raleigh": {
          "invoiced": 3029186.6999999993,
          "count": 216
        },
        "Knoxville": {
          "invoiced": 2950347.759999999,
          "count": 183
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
      "latestInvoiceDate": "2026-11-20",
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
      "totalJobs": 647,
      "totalWOs": 928,
      "portfolioValue": 16323599.25,
      "avgDaysInStatus": 21,
      "lastBuild": "2026-11-23T14:04:29.299Z"
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
        "value": "647",
        "sub": "928 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "255",
        "sub": "39.4% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "392",
        "sub": "60.6% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "44",
        "sub": "17.3% of In Progress",
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
        "value": "$16.32M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$4.21M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$1.32M",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "44",
        "sub": "17.3% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$1.32M",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "56",
        "sub": "Across 44 jobs",
        "tone": "info"
      },
      {
        "label": "RTS Ready Today",
        "value": "20",
        "sub": "No blocker, dispatch now",
        "tone": "good"
      },
      {
        "label": "Top Trailing Trade",
        "value": "Gutters",
        "sub": "29 open WOs / 29 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "281",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "117",
        "sub": "41.6% of all holds",
        "tone": "warn"
      },
      {
        "label": "Pending Sales",
        "value": "32",
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
        "value": "104",
        "sub": "Reps with at least one open WO",
        "tone": "info"
      },
      {
        "label": "Stuck Value >30d",
        "value": "$4.21M",
        "sub": "Sum of stale value across all reps",
        "tone": "crit"
      },
      {
        "label": "Reps with Stuck Work",
        "value": "64",
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
        "value": "392",
        "sub": "60.6% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$8.59M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "181d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Columbus",
        "sub": "140 jobs (35.7% of backlog)",
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
              281,
              268,
              247,
              58,
              45,
              28,
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
          "Nashville",
          "Dayton",
          "Raleigh",
          "Knoxville",
          "Grand Rapids",
          "Greenville"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              16,
              28,
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
              11,
              8,
              7,
              3,
              5,
              3,
              2,
              3,
              0,
              2,
              1
            ]
          },
          {
            "label": "On Hold",
            "data": [
              111,
              83,
              25,
              14,
              20,
              6,
              10,
              5,
              4,
              2,
              0,
              1
            ]
          },
          {
            "label": "RTS",
            "data": [
              62,
              94,
              41,
              23,
              4,
              11,
              9,
              11,
              2,
              6,
              2,
              3
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              124,
              36,
              29,
              11,
              13,
              12,
              6,
              4,
              7,
              4,
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
          "In Progress",
          "New"
        ],
        "datasets": [
          {
            "label": "Avg Days",
            "data": [
              74,
              29,
              27,
              19,
              11,
              4,
              0
            ]
          },
          {
            "label": "Max Days",
            "data": [
              259,
              355,
              96,
              112,
              97,
              28,
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
          "GAF Solar",
          "Masonry",
          "Carpentry",
          "Stucco",
          "Other",
          "Painting"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              51,
              2,
              5,
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
              334,
              308,
              137,
              31,
              18,
              13,
              12,
              5,
              4,
              2,
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
              20,
              10,
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
              14,
              8,
              4,
              7,
              11,
              12
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
          "Dayton",
          "Knoxville",
          "Richmond",
          "Raleigh",
          "Greenville"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              140,
              88,
              64,
              24,
              22,
              15,
              11,
              10,
              9,
              7,
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
            342,
            16,
            111,
            62,
            124,
            17,
            12,
            29,
            238,
            6286428.05
          ],
          [
            "Cleveland",
            252,
            28,
            83,
            94,
            36,
            8,
            3,
            36,
            154,
            3578564.12
          ],
          [
            "Detroit Metro",
            108,
            5,
            25,
            41,
            29,
            7,
            1,
            19,
            86,
            2169869.58
          ],
          [
            "Cincinnati",
            56,
            1,
            14,
            23,
            11,
            3,
            4,
            6,
            46,
            956247.93
          ],
          [
            "DC Metro",
            41,
            1,
            20,
            4,
            13,
            2,
            1,
            13,
            32,
            694975.52
          ],
          [
            "Richmond",
            35,
            1,
            6,
            11,
            12,
            2,
            3,
            0,
            21,
            660272.59
          ],
          [
            "Nashville",
            30,
            2,
            10,
            9,
            6,
            1,
            2,
            5,
            21,
            1006991.19
          ],
          [
            "Dayton",
            26,
            4,
            5,
            11,
            4,
            0,
            1,
            3,
            19,
            378534.63
          ],
          [
            "Raleigh",
            16,
            0,
            4,
            2,
            7,
            3,
            0,
            2,
            13,
            282923.64
          ],
          [
            "Knoxville",
            12,
            0,
            2,
            6,
            4,
            0,
            0,
            3,
            10,
            195353.88
          ],
          [
            "Grand Rapids",
            5,
            0,
            0,
            2,
            1,
            1,
            1,
            0,
            4,
            80478.03
          ],
          [
            "Greenville",
            5,
            0,
            1,
            3,
            0,
            1,
            0,
            1,
            3,
            32960.09
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
            112,
            20,
            355
          ],
          [
            "Pending Material",
            102,
            32,
            127
          ],
          [
            "Pending Sales",
            32,
            35,
            131
          ],
          [
            "Homeowner Request",
            21,
            55,
            181
          ],
          [
            "Spring Hold",
            11,
            27,
            160
          ],
          [
            "Pending HOA",
            3,
            16,
            28
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
            29,
            29,
            749460.06
          ],
          [
            "Siding",
            16,
            16,
            531540.97
          ],
          [
            "Metal",
            4,
            4,
            218510.47
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
            133
          ],
          [
            "Scheduled",
            90
          ],
          [
            "On Hold",
            83
          ],
          [
            "Requires Additional Service",
            2
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
            385,
            51,
            334,
            382,
            10724325.6
          ],
          [
            "Gutters",
            310,
            2,
            308,
            310,
            7666361.79
          ],
          [
            "Siding",
            142,
            5,
            137,
            142,
            3107715.41
          ],
          [
            "Rack Mounted Solar",
            31,
            0,
            31,
            25,
            932793.63
          ],
          [
            "Windows",
            18,
            0,
            18,
            18,
            190565.78
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
            12,
            0,
            12,
            12,
            541549.22
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
            "Masonry",
            2,
            0,
            2,
            2,
            46967.36
          ],
          [
            "Carpentry",
            2,
            0,
            2,
            2,
            52707.5
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
            12
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
            12,
            9,
            297649.24,
            6,
            3
          ],
          [
            "Frank Drummond",
            25,
            20,
            278173.21,
            14,
            1
          ],
          [
            "Bill Applegate",
            26,
            17,
            209701.99,
            7,
            1
          ],
          [
            "Derrick Sieber",
            12,
            9,
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
            8,
            8,
            175901.17,
            3,
            1
          ],
          [
            "Frank Butts",
            31,
            18,
            145519.36,
            7,
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
            15,
            10,
            116577.27,
            4,
            1
          ],
          [
            "Tony Seagraves",
            17,
            13,
            113219,
            4,
            1
          ],
          [
            "Jake Ross",
            26,
            15,
            111780.39,
            8,
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
            140,
            3226447.24,
            150
          ],
          [
            "Cleveland",
            88,
            1872041.94,
            123
          ],
          [
            "Detroit Metro",
            64,
            1456366.51,
            181
          ],
          [
            "Cincinnati",
            24,
            470441.7,
            54
          ],
          [
            "DC Metro",
            22,
            371966.77,
            160
          ],
          [
            "Nashville",
            15,
            340384.99,
            73
          ],
          [
            "Dayton",
            11,
            193981.21,
            55
          ],
          [
            "Knoxville",
            10,
            195353.88,
            25
          ],
          [
            "Richmond",
            9,
            284562.75,
            42
          ],
          [
            "Raleigh",
            7,
            154257.05,
            74
          ],
          [
            "Greenville",
            2,
            23559.38,
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
            "Job-107178",
            "Damien Pakula",
            "Detroit Metro",
            "Roofing",
            "Homeowner Request",
            "Gary Benedict Jr",
            181,
            13597
          ],
          [
            "Job-115035",
            "Erik Steensen",
            "DC Metro",
            "GAF Solar",
            "Spring Hold",
            "Derrick Sieber",
            160,
            59822
          ],
          [
            "Job-112457",
            "Michelle  Pullens",
            "Columbus",
            "Siding",
            "Homeowner Request",
            "Mark Daggett",
            150,
            27000
          ],
          [
            "Job-117302",
            "Marcia Williams",
            "Cleveland",
            "Siding",
            "Pending Material",
            "Jake Ross",
            123,
            19654.5
          ],
          [
            "Job-118348",
            "Angie & MIke Fleshman",
            "Columbus",
            "Siding",
            "Pending Sales",
            "Frank Drummond",
            105,
            2608
          ],
          [
            "Job-118734",
            "Mindi Burkette",
            "DC Metro",
            "Roofing",
            "",
            "David Poole",
            97,
            15829
          ],
          [
            "Job-118731",
            "Kaitlyn Valis",
            "DC Metro",
            "Roofing",
            "Homeowner Request",
            "David Poole",
            96,
            9833
          ],
          [
            "Job-120022",
            "Christina Gustavson",
            "Columbus",
            "Roofing",
            "Pending Permit",
            "Bill Applegate",
            82,
            12894.63
          ],
          [
            "Job-116908",
            "Corey and Shemika Hamilton",
            "Raleigh",
            "Roofing",
            "",
            "Trevor Frazier",
            74,
            11805.8
          ],
          [
            "Job-116547",
            "Brandi J Jacobs",
            "Nashville",
            "Roofing",
            "Homeowner Request",
            "Jeff Camp",
            73,
            21659.5
          ],
          [
            "Job-121089",
            "Lisa Churella’miller",
            "Columbus",
            "Gutters",
            "Pending Material",
            "Yosef Kumnegere",
            66,
            21664.28
          ],
          [
            "Job-121175",
            "Jon Fromm",
            "Columbus",
            "Roofing",
            "Pending Material",
            "Bill Applegate",
            63,
            4000
          ],
          [
            "Job-121195",
            "Miguel Torres",
            "Cleveland",
            "Gutters",
            "Pending Material",
            "Tyler Sponseller",
            63,
            22336.47
          ],
          [
            "Job-121001",
            "Maureen Campion",
            "Columbus",
            "Roofing",
            "Homeowner Request",
            "Frank Drummond",
            62,
            20336.04
          ],
          [
            "Job-121346",
            "Ted McDonnell",
            "Columbus",
            "Gutters",
            "",
            "Frank Drummond",
            61,
            7281
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Cleveland",
          "permits": 36
        },
        {
          "branch": "Columbus",
          "permits": 29
        },
        {
          "branch": "Detroit Metro",
          "permits": 19
        },
        {
          "branch": "DC Metro",
          "permits": 13
        },
        {
          "branch": "Cincinnati",
          "permits": 6
        },
        {
          "branch": "Nashville",
          "permits": 5
        },
        {
          "branch": "Dayton",
          "permits": 3
        },
        {
          "branch": "Knoxville",
          "permits": 3
        },
        {
          "branch": "Raleigh",
          "permits": 2
        },
        {
          "branch": "Greenville",
          "permits": 1
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $1.32M of trapped partial-job revenue into billable revenue, reduce $4.21M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Dispatch the 20 RTS WOs sitting on partial jobs. No blocker, no hold, just dispatch.",
        "Re-dispatch the 28 RAS WOs (oldest at 96 days). These are pure re-work fastballs.",
        "Gutters sweep: 29 open WOs across 29 partial jobs blocking $749K. Highest single-trade leverage in the book.",
        "Cleveland permit sweep: 36 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one.",
        "Close out the 10 zombie jobs (all WOs Completed, parent still In Progress). Pure paperwork."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Gutters): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 392 jobs ($8.59M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $1.32M, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  }
};
