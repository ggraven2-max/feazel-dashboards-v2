/* AUTO-GENERATED — do not edit. Generated 2026-05-27T17:05:48.715Z (residential) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-05-27T17:05:48.715Z",
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
        "elapsedMs": 70,
        "builtAt": "2026-05-27T17:05:48.715Z"
      },
      {
        "id": "sales-overview",
        "version": "1.0-rules-encoded",
        "elapsedMs": 407,
        "builtAt": "2026-05-27T17:05:48.715Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 43,
        "builtAt": "2026-05-27T17:05:48.715Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 36,
        "builtAt": "2026-05-27T17:05:48.715Z"
      }
    ]
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 06, 2026 - May 27, 2026 - De-Duplicated at Job Level - 1,464 Jobs - 14 Markets - 29 PMs",
    "generated": "2026-05-27",
    "headerMeta": {
      "trueRevenue": 27133258.96,
      "uniqueJobs": 1464,
      "markets": 14,
      "pms": 29,
      "medianComplete": 22.6,
      "avgStart": 26.6,
      "multiTradeJobs": 430,
      "singleTradeJobs": 1034,
      "multiTradePct": 29.4,
      "lastBuild": "2026-05-27T17:05:48.715Z"
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
        "value": "$27.13M",
        "sub": "1,464 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$18,534",
        "sub": "Per job (deduped)"
      },
      {
        "label": "Median Days to Complete",
        "value": "22.6d",
        "sub": "Job-level median"
      },
      {
        "label": "Avg Days to Start",
        "value": "26.6d",
        "sub": "Sale to crew on-site"
      },
      {
        "label": "Multi-Trade Jobs",
        "value": "430",
        "sub": "29.4% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "1,034",
        "sub": "70.6% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$25,289",
        "sub": "+60.8% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$15,724",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+19.1d",
        "sub": "MT 37.5d vs ST 18.5d"
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
        "rev": 5906931.91,
        "jobs": 335,
        "med": 23.5,
        "start": 34.1
      },
      {
        "m": "2026-04",
        "label": "April",
        "key": "2026-04",
        "rev": 7874574.98,
        "jobs": 442,
        "med": 17.6,
        "start": 25
      },
      {
        "m": "2026-05",
        "label": "May",
        "key": "2026-05",
        "rev": 7381542.35,
        "jobs": 401,
        "med": 21.7,
        "start": 21.6
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
              3275604.18,
              2694605.54,
              5906931.91,
              7874574.98,
              7381542.35
            ]
          },
          {
            "label": "Jobs",
            "data": [
              147,
              139,
              335,
              442,
              401
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
              46.6,
              32.5,
              23.5,
              17.6,
              21.7
            ]
          },
          {
            "label": "Avg Days to Start",
            "data": [
              25.2,
              32.9,
              34.1,
              25,
              21.6
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
              430
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              1034
            ]
          }
        ]
      },
      {
        "id": "ch_combos",
        "labels": [
          "Gutters + Roofing",
          "Gutters + Siding",
          "Gutters + Roofing + Siding",
          "Roofing + Siding",
          "Masonry + Roofing",
          "Metal + Roofing",
          "Gutters + Metal + Roofing",
          "Roofing + Windows"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              286,
              32,
              23,
              18,
              11,
              11,
              5,
              4
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
          "DC Metro",
          "Dayton",
          "Cincinnati",
          "Raleigh",
          "Richmond",
          "Cleveland",
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
              27.5,
              28.8,
              34.8,
              35.3,
              24.5,
              28.7,
              13,
              30.6,
              40.2,
              32.2,
              22.9,
              42.9,
              20,
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
          "DC Metro",
          "Dayton",
          "Cincinnati",
          "Raleigh",
          "Richmond",
          "Cleveland",
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
              43.4,
              44.6,
              21.7,
              28,
              37.1,
              41.5,
              64.4,
              53.5,
              28.4,
              28.5,
              31.1,
              64.6,
              31.6,
              346.7
            ]
          },
          {
            "label": "ST Median",
            "data": [
              14.5,
              22.6,
              19.1,
              20.6,
              22.7,
              18.6,
              21.5,
              10.5,
              18,
              16.5,
              19.5,
              20.6,
              26.6,
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
          "DC Metro",
          "Dayton",
          "Cincinnati",
          "Raleigh",
          "Richmond",
          "Cleveland",
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
              8285589.88,
              3834686.16,
              3110785.38,
              1947695.94,
              1701751.62,
              1562447.06,
              1462443.22,
              1331777.74,
              1241921.82,
              1077816.78,
              894085.54,
              599368.43,
              49194.98,
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
          "DC Metro",
          "Dayton",
          "Cincinnati",
          "Raleigh",
          "Richmond",
          "Cleveland",
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
              20,
              29.5,
              19.6,
              22.6,
              26,
              27.5,
              27.5,
              17.1,
              23.6,
              22.7,
              22.4,
              41,
              31.6,
              346.7
            ]
          }
        ]
      },
      {
        "id": "ch_pm_top",
        "labels": [
          "Eric Isakov",
          "Mason Bryant",
          "Joseph Yager",
          "Brandon Harter",
          "Kaden Carter",
          "Landon Little",
          "Brandon Skrzypek",
          "Richard Williams",
          "Levi Nieman",
          "Alejandro Alvarado",
          "Abraham Santiago",
          "Shawn Oehlstrom",
          "Alex Dubanoski",
          "Galo Munive",
          "Jason Andrews"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              1968556.22,
              1922716.69,
              1716371.65,
              1649597.91,
              1475486.3,
              1438718.82,
              1428655.38,
              1400272.2,
              1365777.42,
              1283476.27,
              1218494.42,
              1154360.07,
              1073577.84,
              1047212.1,
              1021630.85
            ]
          }
        ]
      },
      {
        "id": "ch_pm_scatter",
        "labels": [
          "Eric Isakov",
          "Mason Bryant",
          "Joseph Yager",
          "Brandon Harter",
          "Kaden Carter",
          "Landon Little",
          "Brandon Skrzypek",
          "Richard Williams",
          "Levi Nieman",
          "Alejandro Alvarado",
          "Abraham Santiago",
          "Shawn Oehlstrom",
          "Alex Dubanoski",
          "Galo Munive",
          "Jason Andrews",
          "Joseph Jones",
          "Brady Weingartner",
          "Drew Bailey",
          "Austin Weingartner",
          "Daniel Galli",
          "Cody Mitchell",
          "Chad Williams",
          "Adam Marrero",
          "Michael Blevins",
          "(Unassigned)",
          "Neil Laux",
          "Justin Milliron",
          "Mike Scott",
          "Chris Atkins"
        ],
        "datasets": [
          {
            "label": "PMs",
            "data": [
              {
                "x": 26.6,
                "y": 1968556.22,
                "wos": 104,
                "name": "Eric Isakov"
              },
              {
                "x": 23.5,
                "y": 1922716.69,
                "wos": 126,
                "name": "Mason Bryant"
              },
              {
                "x": 27.6,
                "y": 1716371.65,
                "wos": 140,
                "name": "Joseph Yager"
              },
              {
                "x": 24.1,
                "y": 1649597.91,
                "wos": 88,
                "name": "Brandon Harter"
              },
              {
                "x": 27.7,
                "y": 1475486.3,
                "wos": 85,
                "name": "Kaden Carter"
              },
              {
                "x": 24,
                "y": 1438718.82,
                "wos": 89,
                "name": "Landon Little"
              },
              {
                "x": 32.6,
                "y": 1428655.38,
                "wos": 74,
                "name": "Brandon Skrzypek"
              },
              {
                "x": 27.5,
                "y": 1400272.2,
                "wos": 103,
                "name": "Richard Williams"
              },
              {
                "x": 34.7,
                "y": 1365777.42,
                "wos": 72,
                "name": "Levi Nieman"
              },
              {
                "x": 22.7,
                "y": 1283476.27,
                "wos": 96,
                "name": "Alejandro Alvarado"
              },
              {
                "x": 21.5,
                "y": 1218494.42,
                "wos": 65,
                "name": "Abraham Santiago"
              },
              {
                "x": 23.5,
                "y": 1154360.07,
                "wos": 125,
                "name": "Shawn Oehlstrom"
              },
              {
                "x": 12.6,
                "y": 1073577.84,
                "wos": 80,
                "name": "Alex Dubanoski"
              },
              {
                "x": 30.4,
                "y": 1047212.1,
                "wos": 85,
                "name": "Galo Munive"
              },
              {
                "x": 29.6,
                "y": 1021630.85,
                "wos": 131,
                "name": "Jason Andrews"
              },
              {
                "x": 21.6,
                "y": 960277.04,
                "wos": 73,
                "name": "Joseph Jones"
              },
              {
                "x": 20.4,
                "y": 885438.61,
                "wos": 48,
                "name": "Brady Weingartner"
              },
              {
                "x": 8.9,
                "y": 801802.47,
                "wos": 161,
                "name": "Drew Bailey"
              },
              {
                "x": 29.1,
                "y": 608413,
                "wos": 39,
                "name": "Austin Weingartner"
              },
              {
                "x": 56.7,
                "y": 537968.13,
                "wos": 56,
                "name": "Daniel Galli"
              },
              {
                "x": 25.4,
                "y": 535023.76,
                "wos": 24,
                "name": "Cody Mitchell"
              },
              {
                "x": 65.5,
                "y": 441183.79,
                "wos": 40,
                "name": "Chad Williams"
              },
              {
                "x": 16.5,
                "y": 349559.5,
                "wos": 30,
                "name": "Adam Marrero"
              },
              {
                "x": 16.7,
                "y": 221801.65,
                "wos": 15,
                "name": "Michael Blevins"
              },
              {
                "x": 28.7,
                "y": 218751.21,
                "wos": 28,
                "name": "(Unassigned)"
              },
              {
                "x": 52.6,
                "y": 122527.24,
                "wos": 8,
                "name": "Neil Laux"
              },
              {
                "x": 82.7,
                "y": 98166.92,
                "wos": 12,
                "name": "Justin Milliron"
              },
              {
                "x": 47.1,
                "y": 44788.06,
                "wos": 6,
                "name": "Mike Scott"
              },
              {
                "x": 61.7,
                "y": 40571.49,
                "wos": 9,
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
          "Windows",
          "Masonry",
          "GAF Solar",
          "Rack Mounted Solar",
          "Painting",
          "Flat Roof",
          "Electrical",
          "Other",
          "Unspecified",
          "Door"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              19919955.38,
              4226371.55,
              1302978.08,
              390854.4,
              385136.59,
              279712.37,
              245905,
              122992.11,
              98078.62,
              56424.37,
              54874.24,
              42886.6,
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
          "Windows",
          "Masonry",
          "GAF Solar",
          "Rack Mounted Solar",
          "Painting",
          "Flat Roof",
          "Electrical",
          "Other",
          "Unspecified",
          "Door"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              22.6,
              30.5,
              48.4,
              130.7,
              81,
              93.5,
              78.2,
              58.7,
              108.6,
              107.7,
              67.6,
              29.5,
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
          "Amanda Wade",
          "Bradley Essex",
          "Thomas Hayes",
          "Morgan Valois",
          "Brenda Dixon",
          "Kayla Wright"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              431,
              361,
              295,
              205,
              137,
              19,
              8,
              8
            ]
          }
        ]
      },
      {
        "id": "ch_cb_eff",
        "labels": [
          "Brandon Vera",
          "David Schwan",
          "Amanda Wade",
          "Bradley Essex",
          "Thomas Hayes",
          "Morgan Valois",
          "Brenda Dixon",
          "Kayla Wright"
        ],
        "datasets": [
          {
            "label": "Median Complete",
            "data": [
              27.4,
              21.7,
              14.5,
              24.5,
              28.6,
              126.5,
              26.9,
              43.1
            ]
          }
        ]
      },
      {
        "id": "ch_cb_mt",
        "labels": [
          "Brandon Vera",
          "David Schwan",
          "Amanda Wade",
          "Bradley Essex",
          "Thomas Hayes",
          "Morgan Valois",
          "Brenda Dixon",
          "Kayla Wright"
        ],
        "datasets": [
          {
            "label": "MT %",
            "data": [
              33.4,
              31,
              18,
              31.7,
              29.2,
              57.9,
              25,
              37.5
            ]
          }
        ]
      },
      {
        "id": "ch_cb_scatter",
        "labels": [
          "Brandon Vera",
          "David Schwan",
          "Amanda Wade",
          "Bradley Essex",
          "Thomas Hayes",
          "Morgan Valois",
          "Brenda Dixon",
          "Kayla Wright"
        ],
        "datasets": [
          {
            "label": "Creators",
            "data": [
              {
                "x": 27.4,
                "y": 19489.43,
                "jobs": 431,
                "name": "Brandon Vera"
              },
              {
                "x": 21.7,
                "y": 20944.48,
                "jobs": 361,
                "name": "David Schwan"
              },
              {
                "x": 14.5,
                "y": 15063.91,
                "jobs": 295,
                "name": "Amanda Wade"
              },
              {
                "x": 24.5,
                "y": 17130.5,
                "jobs": 205,
                "name": "Bradley Essex"
              },
              {
                "x": 28.6,
                "y": 15721.17,
                "jobs": 137,
                "name": "Thomas Hayes"
              },
              {
                "x": 126.5,
                "y": 26158.96,
                "jobs": 19,
                "name": "Morgan Valois"
              },
              {
                "x": 26.9,
                "y": 42996.83,
                "jobs": 8,
                "name": "Brenda Dixon"
              },
              {
                "x": 43.1,
                "y": 27745.01,
                "jobs": 8,
                "name": "Kayla Wright"
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
            484,
            8285589.88,
            17118.99,
            20,
            31.3,
            27.5,
            43.4,
            14.5
          ],
          [
            "Detroit Metro",
            212,
            3834686.16,
            18088.14,
            29.5,
            36,
            28.8,
            44.6,
            22.6
          ],
          [
            "Nashville",
            132,
            3110785.38,
            23566.56,
            19.6,
            19.8,
            34.8,
            21.7,
            19.1
          ],
          [
            "DC Metro",
            102,
            1947695.94,
            19095.06,
            22.6,
            21.8,
            35.3,
            28,
            20.6
          ],
          [
            "Dayton",
            98,
            1701751.62,
            17364.81,
            26,
            21.6,
            24.5,
            37.1,
            22.7
          ],
          [
            "Cincinnati",
            80,
            1562447.06,
            19530.59,
            27.5,
            24.1,
            28.7,
            41.5,
            18.6
          ],
          [
            "Raleigh",
            69,
            1462443.22,
            21194.83,
            27.5,
            22.4,
            13,
            64.4,
            21.5
          ],
          [
            "Richmond",
            72,
            1331777.74,
            18496.91,
            17.1,
            14.9,
            30.6,
            53.5,
            10.5
          ],
          [
            "Cleveland",
            87,
            1241921.82,
            14274.96,
            23.6,
            30.2,
            40.2,
            28.4,
            18
          ],
          [
            "Knoxville",
            59,
            1077816.78,
            18268.08,
            22.7,
            19,
            32.2,
            28.5,
            16.5
          ],
          [
            "Greenville",
            35,
            894085.54,
            25545.3,
            22.4,
            19.6,
            22.9,
            31.1,
            19.5
          ],
          [
            "NOVA",
            28,
            599368.43,
            21406.02,
            41,
            25.2,
            42.9,
            64.6,
            20.6
          ],
          [
            "Grand Rapids",
            5,
            49194.98,
            9839,
            31.6,
            25.5,
            20,
            31.6,
            26.6
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
            "Eric Isakov",
            104,
            85,
            1968556.22,
            18928.43,
            26.6,
            29.7
          ],
          [
            "Mason Bryant",
            126,
            108,
            1922716.69,
            15259.66,
            23.5,
            25.9
          ],
          [
            "Joseph Yager",
            140,
            114,
            1716371.65,
            12259.8,
            27.6,
            24.4
          ],
          [
            "Brandon Harter",
            88,
            66,
            1649597.91,
            18745.43,
            24.1,
            21.5
          ],
          [
            "Kaden Carter",
            85,
            71,
            1475486.3,
            17358.66,
            27.7,
            22.9
          ],
          [
            "Landon Little",
            89,
            84,
            1438718.82,
            16165.38,
            24,
            31
          ],
          [
            "Brandon Skrzypek",
            74,
            73,
            1428655.38,
            19306.15,
            32.6,
            33.2
          ],
          [
            "Richard Williams",
            103,
            96,
            1400272.2,
            13594.88,
            27.5,
            32.2
          ],
          [
            "Levi Nieman",
            72,
            71,
            1365777.42,
            18969.13,
            34.7,
            40.6
          ],
          [
            "Alejandro Alvarado",
            96,
            72,
            1283476.27,
            13369.54,
            22.7,
            20
          ],
          [
            "Abraham Santiago",
            65,
            55,
            1218494.42,
            18746.07,
            21.5,
            19.8
          ],
          [
            "Shawn Oehlstrom",
            125,
            85,
            1154360.07,
            9234.88,
            23.5,
            30.3
          ],
          [
            "Alex Dubanoski",
            80,
            62,
            1073577.84,
            13419.72,
            12.6,
            14.1
          ],
          [
            "Galo Munive",
            85,
            65,
            1047212.1,
            12320.14,
            30.4,
            25.4
          ],
          [
            "Jason Andrews",
            131,
            112,
            1021630.85,
            7798.71,
            29.6,
            37.2
          ],
          [
            "Joseph Jones",
            73,
            55,
            960277.04,
            13154.48,
            21.6,
            17.9
          ],
          [
            "Brady Weingartner",
            48,
            47,
            885438.61,
            18446.64,
            20.4,
            19.9
          ],
          [
            "Drew Bailey",
            161,
            158,
            801802.47,
            4980.14,
            8.9,
            25
          ],
          [
            "Austin Weingartner",
            39,
            36,
            608413,
            15600.33,
            29.1,
            27.7
          ],
          [
            "Daniel Galli",
            56,
            39,
            537968.13,
            9606.57,
            56.7,
            41.9
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
            "Chad Williams",
            40,
            23,
            441183.79,
            11029.59,
            65.5,
            24.6
          ],
          [
            "Adam Marrero",
            30,
            24,
            349559.5,
            11651.98,
            16.5,
            15.7
          ],
          [
            "Michael Blevins",
            15,
            13,
            221801.65,
            14786.78,
            16.7,
            11.9
          ],
          [
            "(Unassigned)",
            28,
            24,
            218751.21,
            7812.54,
            28.7,
            40.3
          ],
          [
            "Neil Laux",
            8,
            6,
            122527.24,
            15315.91,
            52.6,
            42.1
          ],
          [
            "Justin Milliron",
            12,
            11,
            98166.92,
            8180.58,
            82.7,
            64.6
          ],
          [
            "Mike Scott",
            6,
            6,
            44788.06,
            7464.68,
            47.1,
            9.2
          ],
          [
            "Chris Atkins",
            9,
            7,
            40571.49,
            4507.94,
            61.7,
            38.4
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
            1327,
            19919955.38,
            15011.27,
            22.6
          ],
          [
            "Gutters",
            451,
            4226371.55,
            9371.11,
            30.5
          ],
          [
            "Siding",
            134,
            1302978.08,
            9723.72,
            48.4
          ],
          [
            "Metal",
            22,
            390854.4,
            17766.11,
            130.7
          ],
          [
            "Windows",
            30,
            385136.59,
            12837.89,
            81
          ],
          [
            "Masonry",
            23,
            279712.37,
            12161.41,
            93.5
          ],
          [
            "GAF Solar",
            2,
            245905,
            122952.5,
            78.2
          ],
          [
            "Rack Mounted Solar",
            14,
            122992.11,
            8785.15,
            58.7
          ],
          [
            "Painting",
            5,
            98078.62,
            19615.72,
            108.6
          ],
          [
            "Flat Roof",
            4,
            56424.37,
            14106.09,
            107.7
          ],
          [
            "Electrical",
            3,
            54874.24,
            18291.41,
            67.6
          ],
          [
            "Other",
            5,
            42886.6,
            8577.32,
            29.5
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
            431,
            8399942.86,
            19489.43,
            "27.4d",
            "26.1d",
            33.4,
            19489.43
          ],
          [
            "David Schwan",
            361,
            7560956.66,
            20944.48,
            "21.7d",
            "25.4d",
            31,
            20944.48
          ],
          [
            "Amanda Wade",
            295,
            4443852.09,
            15063.91,
            "14.5d",
            "26.4d",
            18,
            15063.91
          ],
          [
            "Bradley Essex",
            205,
            3511752.15,
            17130.5,
            "24.5d",
            "24.1d",
            31.7,
            17130.5
          ],
          [
            "Thomas Hayes",
            137,
            2153800.15,
            15721.17,
            "28.6d",
            "31d",
            29.2,
            15721.17
          ],
          [
            "Morgan Valois",
            19,
            497020.32,
            26158.96,
            "126.5d",
            "73.2d",
            57.9,
            26158.96
          ],
          [
            "Brenda Dixon",
            8,
            343974.62,
            42996.83,
            "26.9d",
            "22.4d",
            25,
            42996.83
          ],
          [
            "Kayla Wright",
            8,
            221960.11,
            27745.01,
            "43.1d",
            "16.9d",
            37.5,
            27745.01
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
            "Amanda Wade",
            0,
            0,
            207,
            0,
            1,
            0,
            0,
            0,
            29,
            0,
            0,
            1,
            57,
            0,
            295
          ],
          [
            "Bradley Essex",
            55,
            71,
            2,
            0,
            68,
            9,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            205
          ],
          [
            "Brandon Vera",
            10,
            2,
            109,
            102,
            26,
            63,
            2,
            0,
            6,
            0,
            28,
            0,
            11,
            72,
            431
          ],
          [
            "Brenda Dixon",
            0,
            1,
            6,
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
            8
          ],
          [
            "David Schwan",
            11,
            7,
            153,
            0,
            0,
            0,
            0,
            0,
            0,
            59,
            0,
            131,
            0,
            0,
            361
          ],
          [
            "Kayla Wright",
            0,
            0,
            6,
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
            8
          ],
          [
            "Morgan Valois",
            0,
            2,
            0,
            0,
            0,
            17,
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
            "Thomas Hayes",
            4,
            4,
            1,
            0,
            3,
            122,
            3,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            137
          ],
          [
            "Total",
            80,
            87,
            484,
            102,
            98,
            212,
            5,
            1,
            35,
            59,
            28,
            132,
            69,
            72,
            1464
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Chad Williams: 40 WOs, $441K revenue, 65.5-day median complete, top-volume PM with the slowest cycle in the network.",
        "Multi-trade penalty is severe in 3 markets: NOVA MT 64.6d vs ST 20.6d, Richmond MT 53.5d vs ST 10.5d, Raleigh MT 64.4d vs ST 21.5d.",
        "Days to Start averages 26.6 days company-wide and 36.0 days in Detroit Metro (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [
        "Drew Bailey: 161 WOs, $4,980 revenue per WO, the lowest revenue density of any active high-volume PM.",
        "Gutters-only work runs at 30.5-day median complete versus 22.6 days for roofing, 35% slower cycle on the lowest-priced trade.",
        "Amanda Wade creates 295 jobs at $15,064 average contract and 18.0% multi-trade attach, well below the top creator."
      ],
      "positivesToBuildOn": [
        "April delivered $7.87M across 442 invoiced jobs at 17.6-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "Richmond hits 17.1-day median complete and a $18,497 average contract on 72 jobs.",
        "Multi-trade jobs carry a $25,289 average contract versus $15,724 for single-trade, a 61% revenue lift per job.",
        "Columbus is the best-balanced market: 20.0-day median complete, 27.5% multi-trade attach, $17,119 average contract on 484 jobs."
      ]
    }
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-05-26",
    "ytdDays": 147,
    "rowCount": 2158,
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
        "value": "$34.80M",
        "sub": "2,158 signed contracts across 13 markets"
      },
      {
        "label": "Sold",
        "value": "$32.19M",
        "sub": "2,028 deals | 94.0% of signed contracts"
      },
      {
        "label": "Production Review",
        "value": "$1.50M",
        "sub": "80 deals | Ops Review, PM Review, Contracted"
      },
      {
        "label": "Kicked Back",
        "value": "$966K",
        "sub": "43 deals | 2.0% of signed contracts",
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
        "value": "$16,125",
        "sub": "Median: $15,009 | Install avg: $18,560"
      },
      {
        "label": "Organization",
        "value": "139 Reps",
        "sub": "13 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$86.40M",
        "sub": "Based on 147 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "85.4% / 14.4%",
        "sub": "1,843 installs | 311 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 2028,
        "amount": 32194020.32
      },
      {
        "label": "Production Review",
        "count": 80,
        "amount": 1501430.51
      },
      {
        "label": "Kicked Back",
        "count": 43,
        "amount": 965605.62
      },
      {
        "label": "Sales Action",
        "count": 1,
        "amount": 15000
      },
      {
        "label": "Other",
        "count": 6,
        "amount": 121975.19
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
        "count": 233,
        "amount": 4101172.18,
        "installs": 197,
        "repairs": 36,
        "avgDeal": 17602,
        "repairPct": 15.5,
        "installAvg": 20551,
        "repairAvg": 1464
      },
      {
        "key": "2026-03",
        "label": "March",
        "count": 498,
        "amount": 6941750.95,
        "installs": 387,
        "repairs": 111,
        "avgDeal": 13939,
        "repairPct": 22.3,
        "installAvg": 17393,
        "repairAvg": 1897
      },
      {
        "key": "2026-04",
        "label": "April",
        "count": 783,
        "amount": 12326412.2,
        "installs": 679,
        "repairs": 104,
        "avgDeal": 15743,
        "repairPct": 13.3,
        "installAvg": 17904,
        "repairAvg": 1632
      },
      {
        "key": "2026-05",
        "label": "May",
        "count": 462,
        "amount": 8164797.53,
        "installs": 417,
        "repairs": 41,
        "avgDeal": 17673,
        "repairPct": 8.9,
        "installAvg": 19251,
        "repairAvg": 1877
      }
    ],
    "jobTypeMixByMonth": {
      "Retail-No Financing": {
        "2026-01": 1317788.72,
        "2026-02": 1796529.77,
        "2026-03": 2995941.7,
        "2026-04": 4856854.81,
        "2026-05": 2150850.18
      },
      "Insurance": {
        "2026-01": 1437020.6,
        "2026-02": 1673072.24,
        "2026-03": 2747046.62,
        "2026-04": 5963623.42,
        "2026-05": 3299409.66
      },
      "Retail-Financing": {
        "2026-01": 509089.46,
        "2026-02": 631570.17,
        "2026-03": 1135621.56,
        "2026-04": 1272450.61,
        "2026-05": 519726.69
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Insurance",
        "count": 744,
        "amount": 15120172.54,
        "avg": 20323
      },
      {
        "jobType": "Retail-No Financing",
        "count": 1093,
        "amount": 13117965.18,
        "avg": 12002
      },
      {
        "jobType": "Retail-Financing",
        "count": 196,
        "amount": 4068458.49,
        "avg": 20757
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
        "count": 45,
        "amount": 705781.14
      },
      {
        "w": 3,
        "count": 44,
        "amount": 757883.56
      },
      {
        "w": 4,
        "count": 51,
        "amount": 1014145.12
      },
      {
        "w": 5,
        "count": 35,
        "amount": 612179.4
      },
      {
        "w": 6,
        "count": 55,
        "amount": 627392.06
      },
      {
        "w": 7,
        "count": 51,
        "amount": 834901.83
      },
      {
        "w": 8,
        "count": 47,
        "amount": 752985.69
      },
      {
        "w": 9,
        "count": 80,
        "amount": 1885892.6
      },
      {
        "w": 10,
        "count": 75,
        "amount": 1175624.58
      },
      {
        "w": 11,
        "count": 79,
        "amount": 1160574.12
      },
      {
        "w": 12,
        "count": 140,
        "amount": 1579808.99
      },
      {
        "w": 13,
        "count": 151,
        "amount": 2374029.93
      },
      {
        "w": 14,
        "count": 151,
        "amount": 2170741.03
      },
      {
        "w": 15,
        "count": 176,
        "amount": 2689630.67
      },
      {
        "w": 16,
        "count": 184,
        "amount": 3029941.44
      },
      {
        "w": 17,
        "count": 203,
        "amount": 3273527.77
      },
      {
        "w": 18,
        "count": 160,
        "amount": 2363645.03
      },
      {
        "w": 19,
        "count": 141,
        "amount": 2547073.47
      },
      {
        "w": 20,
        "count": 148,
        "amount": 2529477.74
      },
      {
        "w": 21,
        "count": 115,
        "amount": 2042544.54
      },
      {
        "w": 22,
        "count": 20,
        "amount": 496341.37
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
          11895539.65,
          740,
          16075,
          609,
          131,
          17.7,
          9
        ],
        [
          "Detroit Metro",
          6036923.85,
          352,
          17150,
          325,
          27,
          7.7,
          4
        ],
        [
          "Nashville",
          2959657.43,
          200,
          14798,
          145,
          55,
          27.5,
          5
        ],
        [
          "Cleveland",
          2728305.32,
          222,
          12290,
          176,
          43,
          19.4,
          7
        ],
        [
          "DC Metro",
          2286540.35,
          138,
          16569,
          106,
          32,
          23.2,
          13
        ],
        [
          "Dayton",
          2140825.5,
          124,
          17265,
          118,
          6,
          4.8,
          21
        ],
        [
          "Richmond",
          1904397.49,
          89,
          21398,
          85,
          4,
          4.5,
          31
        ],
        [
          "Cincinnati",
          1432817.29,
          94,
          15243,
          88,
          6,
          6.4,
          11
        ],
        [
          "Knoxville",
          1107004.23,
          66,
          16773,
          65,
          1,
          1.5,
          21
        ],
        [
          "Raleigh",
          983412.82,
          62,
          15861,
          58,
          4,
          6.5,
          37
        ],
        [
          "Greenville",
          684249.78,
          28,
          24437,
          28,
          0,
          0,
          4
        ],
        [
          "Grand Rapids",
          403141.67,
          28,
          14398,
          27,
          0,
          0,
          20
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
          "opps": 1723,
          "soldAmt": 6209993.49,
          "closePct": 31.7,
          "nsli": 3604
        },
        {
          "branch": "Detroit",
          "opps": 698,
          "soldAmt": 3900940.23,
          "closePct": 39,
          "nsli": 5589
        },
        {
          "branch": "Cleveland",
          "opps": 571,
          "soldAmt": 1528604.39,
          "closePct": 25.6,
          "nsli": 2677
        },
        {
          "branch": "Nashville",
          "opps": 264,
          "soldAmt": 1228211.95,
          "closePct": 41.3,
          "nsli": 4652
        },
        {
          "branch": "DC Metro",
          "opps": 307,
          "soldAmt": 892399.82,
          "closePct": 26.1,
          "nsli": 2907
        },
        {
          "branch": "Cincinnati",
          "opps": 268,
          "soldAmt": 763978.61,
          "closePct": 20.9,
          "nsli": 2851
        },
        {
          "branch": "Dayton",
          "opps": 190,
          "soldAmt": 678177.75,
          "closePct": 23.7,
          "nsli": 3569
        },
        {
          "branch": "Greenville",
          "opps": 80,
          "soldAmt": 399914.07,
          "closePct": 26.3,
          "nsli": 4999
        },
        {
          "branch": "Knoxville",
          "opps": 68,
          "soldAmt": 258153.63,
          "closePct": 29.4,
          "nsli": 3796
        },
        {
          "branch": "Raleigh",
          "opps": 124,
          "soldAmt": 237187.27,
          "closePct": 17.7,
          "nsli": 1913
        },
        {
          "branch": "Richmond",
          "opps": 68,
          "soldAmt": 191077.82,
          "closePct": 23.5,
          "nsli": 2810
        },
        {
          "branch": "Grand Rapids",
          "opps": 72,
          "soldAmt": 169473.22,
          "closePct": 18.1,
          "nsli": 2354
        }
      ],
      "totals": {
        "opps": 4435,
        "soldAmt": 16458112.25,
        "closePct": 30.4,
        "nsli": 3711
      },
      "source": "Closing Percent By Branch-2026-05-27-12-53-03.xlsx",
      "format": "per-opportunity"
    },
    "marketKickbacks": [
      {
        "market": "Columbus",
        "kicked": 23,
        "kickedAmount": 656234.41
      },
      {
        "market": "Cleveland",
        "kicked": 8,
        "kickedAmount": 71522.51
      },
      {
        "market": "Cincinnati",
        "kicked": 4,
        "kickedAmount": 63390.29
      },
      {
        "market": "Dayton",
        "kicked": 3,
        "kickedAmount": 69812
      },
      {
        "market": "DC Metro",
        "kicked": 2,
        "kickedAmount": 47343.42
      },
      {
        "market": "Detroit Metro",
        "kicked": 2,
        "kickedAmount": 36395
      }
    ],
    "marketJobTypeChart": {
      "_description": "Stacked horizontal bar; sales-by-job-type per branch.",
      "branches": [
        "Columbus",
        "Detroit Metro",
        "Nashville",
        "Cleveland",
        "DC Metro",
        "Dayton",
        "Richmond",
        "Cincinnati",
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
        "amount": 1068560.7,
        "count": 63,
        "avg": 16961,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 38,
          "Insurance": 10,
          "Retail-Financing": 15
        },
        "installs": 45,
        "repairs": 18
      },
      {
        "name": "Michael Conley",
        "amount": 1058942.16,
        "count": 63,
        "avg": 16809,
        "medDays": 14,
        "jt": {
          "Insurance": 30,
          "Retail-Financing": 6,
          "Retail-No Financing": 21
        },
        "installs": 60,
        "repairs": 3
      },
      {
        "name": "Sam Scorziell",
        "amount": 1051958.2,
        "count": 45,
        "avg": 23377,
        "medDays": 28,
        "jt": {
          "Insurance": 31,
          "Retail-No Financing": 9
        },
        "installs": 45,
        "repairs": 0
      },
      {
        "name": "Storm Drumm",
        "amount": 921524.38,
        "count": 60,
        "avg": 15359,
        "medDays": 2,
        "jt": {
          "Retail-No Financing": 32,
          "Retail-Financing": 12,
          "Insurance": 15
        },
        "installs": 56,
        "repairs": 4
      },
      {
        "name": "Cole Burgess",
        "amount": 853554.84,
        "count": 40,
        "avg": 21339,
        "medDays": 3,
        "jt": {
          "Retail-Financing": 5,
          "Retail-No Financing": 30,
          "Insurance": 4
        },
        "installs": 40,
        "repairs": 0
      },
      {
        "name": "Stephen Harmon",
        "amount": 823371.63,
        "count": 36,
        "avg": 22871,
        "medDays": 11,
        "jt": {
          "Retail-No Financing": 34,
          "Insurance": 2
        },
        "installs": 32,
        "repairs": 4
      },
      {
        "name": "Robert Beck",
        "amount": 741807.41,
        "count": 29,
        "avg": 25580,
        "medDays": 47,
        "jt": {
          "Retail-No Financing": 9,
          "Insurance": 19,
          "Retail-Financing": 1
        },
        "installs": 27,
        "repairs": 2
      },
      {
        "name": "Dave Norris",
        "amount": 699995.4,
        "count": 54,
        "avg": 12963,
        "medDays": 14,
        "jt": {
          "Insurance": 23,
          "Retail-No Financing": 30,
          "Retail-Financing": 1
        },
        "installs": 38,
        "repairs": 16
      },
      {
        "name": "Frank Butts",
        "amount": 672113.66,
        "count": 51,
        "avg": 13179,
        "medDays": 8,
        "jt": {
          "Retail-No Financing": 27,
          "Insurance": 22,
          "Retail-Financing": 1
        },
        "installs": 44,
        "repairs": 7
      },
      {
        "name": "Brian Ogrin",
        "amount": 647928.37,
        "count": 31,
        "avg": 20901,
        "medDays": 24,
        "jt": {
          "Insurance": 16,
          "Retail-No Financing": 9,
          "Retail-Financing": 1
        },
        "installs": 27,
        "repairs": 4
      },
      {
        "name": "Frank Drummond",
        "amount": 638931.33,
        "count": 66,
        "avg": 9681,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 43,
          "Insurance": 14,
          "Retail-Financing": 2
        },
        "installs": 43,
        "repairs": 23
      },
      {
        "name": "Scott Scaperato",
        "amount": 636466.66,
        "count": 59,
        "avg": 10788,
        "medDays": 2,
        "jt": {
          "Retail-Financing": 12,
          "Retail-No Financing": 36,
          "Insurance": 7
        },
        "installs": 46,
        "repairs": 13
      },
      {
        "name": "Derrick Sieber",
        "amount": 628541.07,
        "count": 44,
        "avg": 14285,
        "medDays": 13,
        "jt": {
          "Retail-No Financing": 25,
          "Retail-Financing": 3,
          "Insurance": 13
        },
        "installs": 30,
        "repairs": 14
      },
      {
        "name": "Matthew Ross",
        "amount": 625893.56,
        "count": 38,
        "avg": 16471,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 26,
          "Insurance": 1,
          "Retail-Financing": 9
        },
        "installs": 34,
        "repairs": 4
      },
      {
        "name": "Donald Richard",
        "amount": 605924,
        "count": 35,
        "avg": 17312,
        "medDays": 4,
        "jt": {
          "Retail-No Financing": 29,
          "Retail-Financing": 2,
          "Insurance": 2
        },
        "installs": 33,
        "repairs": 2
      },
      {
        "name": "Nick Junker",
        "amount": 601195.35,
        "count": 27,
        "avg": 22266,
        "medDays": 27,
        "jt": {
          "Insurance": 14,
          "Retail-No Financing": 12
        },
        "installs": 25,
        "repairs": 2
      },
      {
        "name": "Mark Daggett",
        "amount": 575414.05,
        "count": 32,
        "avg": 17982,
        "medDays": 3,
        "jt": {
          "Insurance": 3,
          "Retail-No Financing": 23,
          "Retail-Financing": 3
        },
        "installs": 27,
        "repairs": 5
      },
      {
        "name": "Matt Busch",
        "amount": 567450,
        "count": 35,
        "avg": 16213,
        "medDays": 3,
        "jt": {
          "Insurance": 5,
          "Retail-No Financing": 22,
          "Retail-Financing": 3
        },
        "installs": 33,
        "repairs": 2
      },
      {
        "name": "Zachary Schneider",
        "amount": 559427.27,
        "count": 36,
        "avg": 15540,
        "medDays": 15,
        "jt": {
          "Retail-No Financing": 17,
          "Insurance": 16
        },
        "installs": 29,
        "repairs": 7
      },
      {
        "name": "Kyle Gibson",
        "amount": 553588.93,
        "count": 40,
        "avg": 13840,
        "medDays": 7,
        "jt": {
          "Retail-Financing": 8,
          "Retail-No Financing": 17,
          "Insurance": 13
        },
        "installs": 38,
        "repairs": 2
      }
    ],
    "speedSellers": [
      {
        "name": "Storm Drumm",
        "medDays": 2
      },
      {
        "name": "Scott Scaperato",
        "medDays": 2
      },
      {
        "name": "Gary Holm",
        "medDays": 2
      },
      {
        "name": "Frank Drummond",
        "medDays": 3
      },
      {
        "name": "Kevin Ditty",
        "medDays": 3
      },
      {
        "name": "Derik Heinz",
        "medDays": 3
      },
      {
        "name": "Cole Burgess",
        "medDays": 3
      },
      {
        "name": "Matthew Ross",
        "medDays": 3
      }
    ],
    "repairHeavy": [
      {
        "name": "Ryan Johnson",
        "repairs": 13,
        "deals": 23,
        "pct": 56.5
      },
      {
        "name": "Jeff Camp",
        "repairs": 10,
        "deals": 23,
        "pct": 43.5
      },
      {
        "name": "Justin Koenig",
        "repairs": 7,
        "deals": 18,
        "pct": 38.9
      }
    ],
    "salesCycle": {
      "kpis": [
        {
          "label": "Overall Median",
          "value": "9 days",
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
          "sub": "Median | Mean: 65 days"
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
          "median": 4,
          "mean": 21,
          "count": 1023
        },
        {
          "label": "Retail-Fin",
          "median": 3,
          "mean": 19,
          "count": 191
        },
        {
          "label": "Insurance",
          "median": 27,
          "mean": 65,
          "count": 702
        },
        {
          "label": "Repair",
          "median": 3,
          "mean": 8,
          "count": 285
        },
        {
          "label": "Install",
          "median": 11,
          "mean": 42,
          "count": 1746
        }
      ],
      "byMarket": [
        {
          "market": "Detroit Metro",
          "median": 4,
          "mean": 25,
          "count": 342
        },
        {
          "market": "Greenville",
          "median": 4,
          "mean": 6,
          "count": 28
        },
        {
          "market": "Nashville",
          "median": 5,
          "mean": 19,
          "count": 195
        },
        {
          "market": "Cleveland",
          "median": 7,
          "mean": 29,
          "count": 204
        },
        {
          "market": "Columbus",
          "median": 9,
          "mean": 34,
          "count": 675
        },
        {
          "market": "Cincinnati",
          "median": 11,
          "mean": 32,
          "count": 92
        },
        {
          "market": "DC Metro",
          "median": 13,
          "mean": 67,
          "count": 126
        },
        {
          "market": "NOVA",
          "median": 18,
          "mean": 63,
          "count": 15
        },
        {
          "market": "Grand Rapids",
          "median": 20,
          "mean": 27,
          "count": 27
        },
        {
          "market": "Knoxville",
          "median": 21,
          "mean": 42,
          "count": 66
        },
        {
          "market": "Dayton",
          "median": 21,
          "mean": 45,
          "count": 119
        },
        {
          "market": "Richmond",
          "median": 31,
          "mean": 79,
          "count": 86
        },
        {
          "market": "Raleigh",
          "median": 37,
          "mean": 99,
          "count": 60
        }
      ],
      "starInsuranceClosers": [
        {
          "name": "Jacob Perry",
          "medDays": 1,
          "count": 4
        },
        {
          "name": "Storm Drumm",
          "medDays": 1,
          "count": 15
        },
        {
          "name": "Justin Koenig",
          "medDays": 3,
          "count": 7
        },
        {
          "name": "Scott Scaperato",
          "medDays": 3,
          "count": 7
        },
        {
          "name": "Matt Williams",
          "medDays": 3,
          "count": 4
        }
      ]
    },
    "completedBilling": {
      "totalUnbilled": 1220604.08,
      "totalJobs": 66,
      "avgAge": 19.2,
      "medAge": 16,
      "tiers": [
        {
          "label": "Critical (60+ days)",
          "count": 1,
          "amount": 200,
          "color": "red"
        },
        {
          "label": "Warning (30-59 days)",
          "count": 16,
          "amount": 297109.62,
          "color": "orange"
        },
        {
          "label": "Watch (14-29 days)",
          "count": 21,
          "amount": 431889.07,
          "color": "blue"
        },
        {
          "label": "Fresh (0-13 days)",
          "count": 28,
          "amount": 491405.39,
          "color": "green"
        }
      ],
      "bySubStatus": [
        {
          "subStatus": "Pending Supplement",
          "count": 47,
          "amount": 922556.36,
          "avgAge": 22,
          "action": "Follow up with insurance carrier on supplement approval. Escalate if >30 days."
        },
        {
          "subStatus": "Accounting Kickback",
          "count": 11,
          "amount": 156248.17,
          "avgAge": 10,
          "action": "Review kickback reason, correct documentation or pricing, resubmit to accounting."
        },
        {
          "subStatus": "Ready to Invoice",
          "count": 5,
          "amount": 127269.71,
          "avgAge": 10,
          "action": "No blockers, submit invoice immediately. This is free cash waiting."
        },
        {
          "subStatus": "No Sub Status",
          "count": 3,
          "amount": 14529.84,
          "avgAge": 30,
          "action": "Review job, identify what is blocking billing, assign owner."
        }
      ],
      "byMarket": [
        {
          "market": "Columbus",
          "count": 23,
          "amount": 404477.5,
          "avgAge": 20,
          "urgency": "MEDIUM"
        },
        {
          "market": "Cleveland",
          "count": 10,
          "amount": 168867.97,
          "avgAge": 15,
          "urgency": "MEDIUM"
        },
        {
          "market": "Dayton",
          "count": 9,
          "amount": 168729.15,
          "avgAge": 8,
          "urgency": "LOW"
        },
        {
          "market": "Knoxville",
          "count": 6,
          "amount": 125464.5,
          "avgAge": 28,
          "urgency": "MEDIUM"
        },
        {
          "market": "Richmond",
          "count": 6,
          "amount": 117624.05,
          "avgAge": 22,
          "urgency": "MEDIUM"
        },
        {
          "market": "Nashville",
          "count": 3,
          "amount": 75574.63,
          "avgAge": 19,
          "urgency": "MEDIUM"
        },
        {
          "market": "Cincinnati",
          "count": 4,
          "amount": 67609.82,
          "avgAge": 28,
          "urgency": "MEDIUM"
        },
        {
          "market": "Detroit Metro",
          "count": 1,
          "amount": 34483,
          "avgAge": 23,
          "urgency": "MEDIUM"
        },
        {
          "market": "Greenville",
          "count": 2,
          "amount": 22249.84,
          "avgAge": 21,
          "urgency": "MEDIUM"
        },
        {
          "market": "DC Metro",
          "count": 1,
          "amount": 21251.56,
          "avgAge": 39,
          "urgency": "HIGH"
        },
        {
          "market": "Raleigh",
          "count": 1,
          "amount": 14272.06,
          "avgAge": 20,
          "urgency": "MEDIUM"
        }
      ],
      "byRepTop15": [
        {
          "rep": "Nick Junker",
          "count": 3,
          "amount": 89469.36,
          "oldest": 56
        },
        {
          "rep": "Derek Hastings",
          "count": 4,
          "amount": 86729.09,
          "oldest": 35
        },
        {
          "rep": "Sam Scorziell",
          "count": 3,
          "amount": 73664.75,
          "oldest": 57
        },
        {
          "rep": "Andrew Coleman",
          "count": 3,
          "amount": 64488.07,
          "oldest": 34
        },
        {
          "rep": "Frank Butts",
          "count": 4,
          "amount": 64474.95,
          "oldest": 22
        },
        {
          "rep": "Sam Doyle",
          "count": 2,
          "amount": 63843.25,
          "oldest": 35
        },
        {
          "rep": "Michael Conley",
          "count": 3,
          "amount": 57243,
          "oldest": 14
        },
        {
          "rep": "Trey Rury",
          "count": 2,
          "amount": 53653.11,
          "oldest": 29
        },
        {
          "rep": "Robert Beck",
          "count": 2,
          "amount": 52358.26,
          "oldest": 9
        },
        {
          "rep": "Kyle Gibson",
          "count": 3,
          "amount": 50026.7,
          "oldest": 40
        },
        {
          "rep": "Michael Marinelli",
          "count": 2,
          "amount": 39678.6,
          "oldest": 16
        },
        {
          "rep": "Dylan Macdonald",
          "count": 2,
          "amount": 36983.25,
          "oldest": 19
        },
        {
          "rep": "Zachary Schneider",
          "count": 2,
          "amount": 36019.71,
          "oldest": 34
        },
        {
          "rep": "David Walden",
          "count": 1,
          "amount": 34483,
          "oldest": 23
        },
        {
          "rep": "Jake Caldwell",
          "count": 2,
          "amount": 32966.41,
          "oldest": 19
        }
      ],
      "fullJobList": [
        [
          "Job-109309",
          "Michael Sebald",
          "Justin Koenig",
          "Cleveland",
          "",
          200,
          70,
          "Insurance"
        ],
        [
          "Job-109530",
          "Paul Blizniuk",
          "Sam Scorziell",
          "Knoxville",
          "Pending Supplement",
          29945.74,
          57,
          "Insurance"
        ],
        [
          "Job-108536",
          "Carole Bertolini",
          "Nick Junker",
          "Columbus",
          "Accounting Kickback",
          24752.82,
          56,
          "Insurance"
        ],
        [
          "Job-110826",
          "Julie Landholt",
          "Bill Applegate",
          "Columbus",
          "Pending Supplement",
          11400.75,
          48,
          "Insurance"
        ],
        [
          "Job-110950",
          "Teddy Douglass",
          "Luke Allberry",
          "Columbus",
          "Pending Supplement",
          12839.86,
          47,
          "Insurance"
        ],
        [
          "Job-110961",
          "Rey Spinosa Brown",
          "Morgan King",
          "Columbus",
          "Pending Supplement",
          7916.87,
          42,
          "Insurance"
        ],
        [
          "Job-111122",
          "Dennis Whitlock",
          "Kyle Gibson",
          "Cincinnati",
          "Pending Supplement",
          24331.74,
          40,
          "Insurance"
        ],
        [
          "Job-111125",
          "Jerold fourman",
          "Kyle Gibson",
          "Cincinnati",
          "Pending Supplement",
          17478.75,
          40,
          "Insurance"
        ],
        [
          "Job-111238",
          "Lasean Gray",
          "Derrick Sieber",
          "DC Metro",
          "Pending Supplement",
          21251.56,
          39,
          "Retail-No Financing"
        ],
        [
          "Job-110498",
          "Wendell Thomas",
          "Sam Doyle",
          "Richmond",
          "Pending Supplement",
          32213.27,
          35,
          "Insurance"
        ],
        [
          "Job-111385",
          "Lauren Burwell",
          "Frank Drummond",
          "Columbus",
          "Pending Supplement",
          6237.55,
          35,
          "Insurance"
        ],
        [
          "Job-111453",
          "Ron Lowe",
          "Derek Hastings",
          "Dayton",
          "Pending Supplement",
          18331.98,
          35,
          "Insurance"
        ],
        [
          "Job-111471",
          "Todd Bernhard",
          "Zachary Schneider",
          "Columbus",
          "Ready to Invoice",
          17440.21,
          34,
          "Insurance"
        ],
        [
          "Job-111541",
          "Kent Carringer",
          "Andrew Coleman",
          "Knoxville",
          "Pending Supplement",
          19218.03,
          34,
          "Retail-No Financing"
        ],
        [
          "Job-111656",
          "Silva Garcia",
          "Isaiah Morales-Laurel",
          "Knoxville",
          "Pending Supplement",
          6430.69,
          34,
          "Insurance"
        ],
        [
          "Job-110010",
          "David Swift",
          "Sam Scorziell",
          "Columbus",
          "Pending Supplement",
          30679.32,
          30,
          "Insurance"
        ],
        [
          "Job-111161",
          "Gary Longberry",
          "Jacob Miller",
          "Columbus",
          "Pending Supplement",
          16640.48,
          30,
          "Insurance"
        ],
        [
          "Job-110964",
          "Shane Goodwin",
          "Trey Rury",
          "Nashville",
          "Pending Supplement",
          39995,
          29,
          "Insurance"
        ],
        [
          "Job-108336",
          "Debora Cruz",
          "Sam Doyle",
          "Richmond",
          "Pending Supplement",
          31629.98,
          28,
          "Insurance"
        ],
        [
          "Job-111806",
          "Shelby Jordan",
          "Storm Drumm",
          "Columbus",
          "Pending Supplement",
          13132,
          28,
          "Insurance"
        ],
        [
          "Job-111883",
          "Workneh Abate",
          "Micah Hayes",
          "Richmond",
          "Pending Supplement",
          9372.63,
          28,
          "Insurance"
        ],
        [
          "Job-112034",
          "Raymond Richardson",
          "Jacoby Taylor",
          "Cincinnati",
          "Pending Supplement",
          17583.12,
          27,
          "Insurance"
        ],
        [
          "Job-110692",
          "Daniel Crow",
          "David Walden",
          "Detroit Metro",
          "Pending Supplement",
          34483,
          23,
          "Retail-No Financing"
        ],
        [
          "Job-111743",
          "Norma Diaz",
          "Frank Butts",
          "Cleveland",
          "Pending Supplement",
          12694.99,
          22,
          "Insurance"
        ],
        [
          "Job-111944",
          "Beverly  Clabo",
          "Tim Washer",
          "Knoxville",
          "Pending Supplement",
          24600,
          22,
          "Insurance"
        ],
        [
          "Job-111624",
          "Keith Stella",
          "Griffin Gregory",
          "Greenville",
          "Pending Supplement",
          20400,
          21,
          "Insurance"
        ],
        [
          "Job-112042",
          "Bernard D Young Lesa A Young",
          "Kevin Ditty",
          "Nashville",
          "Pending Supplement",
          21921.52,
          20,
          "Insurance"
        ],
        [
          "Job-112324",
          "Katie Noel",
          "Justin Godde",
          "Raleigh",
          "Pending Supplement",
          14272.06,
          20,
          "Insurance"
        ],
        [
          "Job-112755",
          "Jeremy and Alicia Nowak",
          "Cody Mitchell",
          "Greenville",
          "",
          1849.84,
          20,
          "Insurance"
        ],
        [
          "Job-112063",
          "Allison Davis",
          "Dylan Macdonald",
          "Richmond",
          "Pending Supplement",
          16515.08,
          19,
          "Insurance"
        ],
        [
          "Job-112130",
          "Sunitha Nandakumar",
          "Jake Caldwell",
          "Columbus",
          "Pending Supplement",
          20486.41,
          19,
          "Insurance"
        ],
        [
          "Job-112765",
          "Jeremy Schmitter",
          "Sam Scorziell",
          "Columbus",
          "Pending Supplement",
          13039.69,
          19,
          "Insurance"
        ],
        [
          "Job-108537",
          "Gene & Sue Parsley",
          "Nick Junker",
          "Columbus",
          "Pending Supplement",
          35306.61,
          16,
          "Insurance"
        ],
        [
          "Job-111682",
          "Devin Rench",
          "Frank Butts",
          "Cleveland",
          "Pending Supplement",
          18570.44,
          16,
          "Insurance"
        ],
        [
          "Job-111695",
          "Matt Bame",
          "Michael Marinelli",
          "Columbus",
          "Pending Supplement",
          39178.6,
          16,
          "Insurance"
        ],
        [
          "Job-111811",
          "Rock Tanner",
          "Zachary Schneider",
          "Columbus",
          "Ready to Invoice",
          18579.5,
          16,
          "Insurance"
        ],
        [
          "Job-111729",
          "John Morgan",
          "Frank Butts",
          "Cleveland",
          "Accounting Kickback",
          18607.6,
          15,
          "Insurance"
        ],
        [
          "Job-112494",
          "Howard Phillips",
          "Michael Conley",
          "Dayton",
          "Pending Supplement",
          9671,
          14,
          "Insurance"
        ],
        [
          "Job-111802",
          "Brian Horten",
          "Jim Zipp",
          "Cleveland",
          "Pending Supplement",
          8668.11,
          13,
          "Insurance"
        ],
        [
          "Job-112215",
          "Trish McMahon",
          "Dylan Macdonald",
          "Richmond",
          "Pending Supplement",
          20468.17,
          13,
          "Insurance"
        ],
        [
          "Job-112789",
          "Sandra Prior",
          "Andrew Coleman",
          "Knoxville",
          "Pending Supplement",
          25821.36,
          12,
          "Insurance"
        ],
        [
          "Job-104867",
          "Joseph Daubenmire",
          "Gabe Baker",
          "Columbus",
          "Accounting Kickback",
          4290.13,
          9,
          "Insurance"
        ],
        [
          "Job-112500",
          "Alfred Bachman",
          "Robert Beck",
          "Columbus",
          "Accounting Kickback",
          20000,
          9,
          "Insurance"
        ],
        [
          "Job-112846",
          "Amanda Herzog",
          "Christian Hill",
          "Dayton",
          "Pending Supplement",
          24257.06,
          9,
          "Insurance"
        ],
        [
          "Job-107396",
          "Kathleen Hausch",
          "Mark Younce",
          "Cleveland",
          "Accounting Kickback",
          19899.07,
          8,
          "Insurance"
        ],
        [
          "Job-112436",
          "Keith Nix",
          "Andrew Coleman",
          "Knoxville",
          "Pending Supplement",
          19448.68,
          8,
          "Insurance"
        ],
        [
          "Job-112587",
          "Chris Holder",
          "Trey Rury",
          "Nashville",
          "Accounting Kickback",
          13658.11,
          8,
          "Insurance"
        ],
        [
          "Job-111970",
          "Connie crow",
          "Robert Beck",
          "Columbus",
          "Pending Supplement",
          32358.26,
          7,
          "Insurance"
        ],
        [
          "Job-113331",
          "Abebaw Liyeh",
          "Micah Hayes",
          "Richmond",
          "Pending Supplement",
          7424.92,
          7,
          "Insurance"
        ],
        [
          "Job-112925",
          "Thomas Blessing",
          "Derek Hastings",
          "Dayton",
          "Pending Supplement",
          18783.65,
          5,
          "Insurance"
        ],
        [
          "Job-113052",
          "George Low",
          "Michael Conley",
          "Dayton",
          "Accounting Kickback",
          12928,
          5,
          "Insurance"
        ],
        [
          "Job-113139",
          "Wanda Young",
          "Kyle Gibson",
          "Cincinnati",
          "Pending Supplement",
          8216.21,
          5,
          "Insurance"
        ],
        [
          "Job-112477",
          "Steve Reed",
          "Nick Junker",
          "Columbus",
          "Accounting Kickback",
          29409.93,
          1,
          "Retail-No Financing"
        ],
        [
          "Job-112569",
          "Rosemary Renn",
          "Rob Blackmore",
          "Columbus",
          "Accounting Kickback",
          5207.42,
          1,
          "Retail-No Financing"
        ],
        [
          "Job-113239",
          "John Kasperek",
          "Frank Butts",
          "Cleveland",
          "Pending Supplement",
          14601.92,
          1,
          "Insurance"
        ],
        [
          "Job-110533",
          "John  Brosnan",
          "Michael Marinelli",
          "Columbus",
          "Pending Supplement",
          500,
          0,
          "Insurance"
        ],
        [
          "Job-110863",
          "Tyler Anderson",
          "Jake Caldwell",
          "Columbus",
          "",
          12480,
          0,
          "Retail-No Financing"
        ],
        [
          "Job-111469",
          "Doug Noble",
          "Derek Hastings",
          "Dayton",
          "Pending Supplement",
          33938.07,
          0,
          "Insurance"
        ],
        [
          "Job-111521",
          "Joe  Blakemore",
          "Bradley Essex",
          "Dayton",
          "Accounting Kickback",
          500,
          0,
          "Retail-No Financing"
        ],
        [
          "Job-112236",
          "William Dobrolenski",
          "Storm Drumm",
          "Columbus",
          "Accounting Kickback",
          6995.09,
          0,
          "Insurance"
        ],
        [
          "Job-112619",
          "Vicky Patterson",
          "Gabe Baker",
          "Columbus",
          "Ready to Invoice",
          25606,
          0,
          "Insurance"
        ],
        [
          "Job-113051",
          "Lynn  Taylor",
          "Michael Conley",
          "Dayton",
          "Ready to Invoice",
          34644,
          0,
          "Retail-No Financing"
        ],
        [
          "Job-113059",
          "Michael Harmer",
          "Derek Hastings",
          "Dayton",
          "Pending Supplement",
          15675.39,
          0,
          "Insurance"
        ],
        [
          "Job-113211",
          "Grace Hughes",
          "Bryce Fink",
          "Cleveland",
          "Pending Supplement",
          26293.8,
          0,
          "Insurance"
        ],
        [
          "Job-113290",
          "Daniel McCormick",
          "Mike Stack",
          "Cleveland",
          "Pending Supplement",
          18332.04,
          0,
          "Insurance"
        ],
        [
          "Job-113293",
          "Lillian & Vince  Welch",
          "Nate Boyer",
          "Cleveland",
          "Ready to Invoice",
          31000,
          0,
          "Insurance"
        ]
      ]
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
      "recent4WkAvg": 1903859.28
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
          "liveActual": 8164797.53
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
        "Sales Trajectory: Monthly sales moved from January $3.26M to May $8.16M (+150%). Annualized run rate: $86.40M.",
        "Premium Deal Types: Insurance averages $20,323 per deal. Retail-Financing averages $20,757 (highest per-deal value). Retail-No Financing averages $12,002 (the volume engine).",
        "Sold Conversion: 2,028 of 2,158 signed contracts (94.0%) have made it to Sold status for $32.19M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Kickback Concentration: Columbus has the most kickbacks (23, $656K). Total company kickbacks: 43 worth $966K.",
        "Production Review Queue: 80 deals worth $1.50M sitting in Production Review. Watch for backlog growth, it delays revenue recognition."
      ],
      "criticalRisks": [
        "Columbus Kickback Concentration drives the company's largest single-market rework volume.",
        "$1.22M sitting unbilled in Completed Jobs (66 jobs averaging 19 days; 1 jobs are 60+ days/$200).",
        "Pending Supplements aging: 47 supplement jobs ($923K), avg 22 days.",
        "Accounting Kickbacks blocking $156K (11 completed jobs).",
        "Pipeline kickbacks company-wide: 43 kickbacks totaling $966K.",
        "Production Review backlog: 80 deals ($1.50M)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 4d median close on 1,214 retail deals.",
        "Insurance Density: $20,323 avg on 744 deals = $15.12M; +20% lift = ~$3.02M.",
        "May repair rate at 8.9% vs YTD 14.4%, correction in latest month.",
        "Financing Lifts Ticket: Retail-Financing averages $20,757, highest per-deal value."
      ],
      "fixList": [
        "Columbus Pipeline Kickback Intervention, pull every kickback and categorize root cause.",
        "Supplement Follow-Up Process, 47 supplement jobs ($923K).",
        "Accounting Kickback Root Causes, 11 jobs ($156K), need a Kickback Reason field.",
        "Production Review Bottleneck, 80 deals; add temporary PM capacity.",
        "Financing Push, 196 financing deals YTD (9.1%) at $20,757 avg. Target 15% mix."
      ],
      "actionPlan": {
        "thisWeek": [
          "Invoice Immediately: $127K, 5 jobs marked Ready to Invoice.",
          "Escalate 60+ Day Jobs: $200, 1 jobs are 60+ days unbilled.",
          "Accounting Kickback Blitz: $156K, 11 jobs kicked back; cross-functional meeting w/ accounting + sales ops.",
          "Columbus Pipeline Kickback Review, meet with branch leadership.",
          "Production Review Surge Plan, 80 deals ($1.50M) in queue."
        ],
        "thisMonth": [
          "Supplement Escalation SOP, 7/14/30 day cadence with carrier escalation.",
          "Completed-to-Billing SLA, 100% invoiced within 21 days.",
          "Repair Triage Pilot in markets where repair rate exceeds 25%.",
          "Financing Training, peer training led by top financing reps. Target 15% mix."
        ],
        "thisQuarter": [
          "Add Kickback Reason field to accounting workflow.",
          "Repair Business Decision, 311 repairs YTD at ~$1,708 avg.",
          "Ops Capacity Planning, May hit 462 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "title": "Residential Revenue Forecast",
    "subtitle": "V5 Model with Job Type Analysis · Data as of May 07, 2026",
    "runDate": "May 07, 2026",
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
        "value": "$24M",
        "sub": "Jobs processed into system"
      },
      {
        "label": "Invoiced YTD",
        "value": "$21.5M",
        "sub": "NetSuite AR · 1198 invoices booked"
      },
      {
        "label": "4-Week Avg Weekly Sales",
        "value": "$2.7M",
        "sub": "Trend: +178,765/week"
      },
      {
        "label": "Current Week (Projected)",
        "value": "$1.5M",
        "sub": "WTD: $477K"
      },
      {
        "label": "Annual Forecast",
        "value": "$119.6M",
        "sub": "Model invoiced revenue"
      },
      {
        "label": "Annual Budget",
        "value": "$125.6M",
        "sub": "Residential plan"
      },
      {
        "label": "Forecast vs Budget",
        "value": "-$6.1M",
        "sub": "4.8% under plan"
      },
      {
        "label": "Active Pipeline",
        "value": "$14.2M",
        "sub": "Backlog + IP + SNP"
      }
    ],
    "execSummary": {
      "budget": 125615037,
      "modelAnnualInvoiced": 119558869.1552,
      "gap": 6056167.8448,
      "narrative": "The V5 model projects $119.6M in annual invoiced revenue against a $125.6M plan. The challenge is timing, not volume: Q1 ramped slowly so Q2 invoicing will lag. If the current weekly pace of $2.7M holds, H2 should catch up as earlier sales convert to invoiced revenue."
    },
    "monthRevenue": {
      "april": {
        "invoiced": 8411661.160000004,
        "wipChange": 813618,
        "netRevenue": 9225279.160000004,
        "beginningWip": 3518463.231,
        "endingWip": 3092796.9555,
        "materialCost": 3156763.827,
        "laborCost": 1984251.5484,
        "grossProfit": 3798528.6246,
        "grossMarginPct": 42.4913
      },
      "may": {
        "invoiced": 13991386.3178,
        "wipChange": 232525.677,
        "netRevenue": 14223911.9948,
        "beginningWip": 3092796.9555,
        "endingWip": 3325322.6325,
        "materialCost": 50499.617,
        "laborCost": 31742.6164,
        "grossProfit": 14141669.7614,
        "grossMarginPct": 99.4218
      }
    },
    "weeklyTargetsHeader": {
      "avgWeeklyNeed": 2685239.7874,
      "recent4WkAvg": 2652527.4,
      "gap": 32712.3874,
      "productionAvgWeeklyNeed": 2751322.9784,
      "productionCycleStart": 12,
      "productionCycleComplete": 9,
      "productionTotalCycle": 21
    },
    "budgetRecoveryHeader": {
      "fullYearBudget": 126105724,
      "gap": 3172387.7132,
      "upliftPct": 3.3,
      "aprilGap": 2681700.7132,
      "q1OriginalBudget": 16900198,
      "q1Actual": 16409511,
      "q1Shortfall": 490687,
      "recoveryRatio": 1.0355
    },
    "profitabilitySummary": {
      "combinedGP": 39124297.84,
      "combinedGP_pct": 41.2522,
      "combinedRevenue": 94841787.02,
      "y2025_GP_pct": 41.5616,
      "y2025_revenue": 74115057.45,
      "y2025_jobs": 3507,
      "y2026_GP_pct": 40.1457,
      "y2026_revenue": 20726729.57,
      "y2026_jobs": 1117,
      "materialCost": 35126836.24,
      "laborCost": 20378710.68,
      "commissions": 8947755.11,
      "materialPctContract": 37.0373,
      "laborPctContract": 21.4871,
      "commissionPctContract": 9.4344
    },
    "pipelineSnapshot": {
      "stages": [
        {
          "label": "New Sales",
          "subtitle": "184 jobs · 8d avg",
          "value": 3472211.67,
          "jobs": 184,
          "color": "#3b82f6",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 66,
              "value": 1403993.39
            },
            {
              "market": "Detroit Metro",
              "jobs": 43,
              "value": 827723.89
            },
            {
              "market": "Cleveland",
              "jobs": 18,
              "value": 257235.83
            },
            {
              "market": "Richmond",
              "jobs": 5,
              "value": 230769.91
            },
            {
              "market": "Dayton",
              "jobs": 16,
              "value": 199226.72
            },
            {
              "market": "Grand Rapids",
              "jobs": 12,
              "value": 173535.71
            },
            {
              "market": "Nashville",
              "jobs": 5,
              "value": 120322.5
            },
            {
              "market": "Cincinnati",
              "jobs": 9,
              "value": 77950.86
            },
            {
              "market": "DC Metro",
              "jobs": 3,
              "value": 73643.42
            },
            {
              "market": "Knoxville",
              "jobs": 3,
              "value": 46353
            },
            {
              "market": "Raleigh",
              "jobs": 1,
              "value": 12431.04
            },
            {
              "market": "Greenville",
              "jobs": 1,
              "value": 4187.62
            }
          ],
          "avgDays": 7.7,
          "medianDays": 3.5
        },
        {
          "label": "Backlog",
          "subtitle": "411 jobs · 21d avg",
          "value": 8047482.56,
          "jobs": 411,
          "color": "#f97316",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 153,
              "value": 2731649.03
            },
            {
              "market": "Detroit Metro",
              "jobs": 92,
              "value": 1950010.46
            },
            {
              "market": "Cleveland",
              "jobs": 45,
              "value": 762682.7
            },
            {
              "market": "Nashville",
              "jobs": 34,
              "value": 665533.48
            },
            {
              "market": "DC Metro",
              "jobs": 21,
              "value": 486939.67
            },
            {
              "market": "Richmond",
              "jobs": 14,
              "value": 478880.67
            },
            {
              "market": "Dayton",
              "jobs": 22,
              "value": 440703.82
            },
            {
              "market": "Raleigh",
              "jobs": 10,
              "value": 164990.07
            },
            {
              "market": "Grand Rapids",
              "jobs": 5,
              "value": 124113.26
            },
            {
              "market": "Cincinnati",
              "jobs": 8,
              "value": 116867.09
            },
            {
              "market": "Knoxville",
              "jobs": 5,
              "value": 67124.3
            },
            {
              "market": "Greenville",
              "jobs": 2,
              "value": 57988.01
            }
          ],
          "avgDays": 21.1,
          "medianDays": 13
        },
        {
          "label": "In Progress",
          "subtitle": "103 jobs",
          "value": 2693410,
          "jobs": 103,
          "color": "#22c55e",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 35,
              "value": 867263.79
            },
            {
              "market": "Detroit Metro",
              "jobs": 24,
              "value": 679573.42
            },
            {
              "market": "DC Metro",
              "jobs": 10,
              "value": 429775.62
            },
            {
              "market": "Cleveland",
              "jobs": 11,
              "value": 249725.95
            },
            {
              "market": "Nashville",
              "jobs": 8,
              "value": 234519.69
            },
            {
              "market": "Richmond",
              "jobs": 5,
              "value": 88284.64
            },
            {
              "market": "Cincinnati",
              "jobs": 4,
              "value": 76075.03
            },
            {
              "market": "Greenville",
              "jobs": 2,
              "value": 16036.82
            },
            {
              "market": "Dayton",
              "jobs": 1,
              "value": 15600
            },
            {
              "market": "Raleigh",
              "jobs": 1,
              "value": 14272.06
            },
            {
              "market": "Knoxville",
              "jobs": 1,
              "value": 13500
            },
            {
              "market": "Grand Rapids",
              "jobs": 1,
              "value": 8782.98
            }
          ],
          "avgDays": null,
          "medianDays": null
        },
        {
          "label": "Completed",
          "subtitle": "50 jobs",
          "value": 898984.82,
          "jobs": 50,
          "color": "#a855f7",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 16,
              "value": 267707.45
            },
            {
              "market": "Knoxville",
              "jobs": 5,
              "value": 100194.46
            },
            {
              "market": "Cincinnati",
              "jobs": 4,
              "value": 91740.7
            },
            {
              "market": "Richmond",
              "jobs": 3,
              "value": 73215.88
            },
            {
              "market": "Detroit Metro",
              "jobs": 3,
              "value": 71145
            },
            {
              "market": "Dayton",
              "jobs": 3,
              "value": 61233.98
            },
            {
              "market": "Nashville",
              "jobs": 2,
              "value": 55857.53
            },
            {
              "market": "Cleveland",
              "jobs": 5,
              "value": 51650.08
            },
            {
              "market": "DC Metro",
              "jobs": 4,
              "value": 47288.54
            },
            {
              "market": "Greenville",
              "jobs": 3,
              "value": 46352.81
            },
            {
              "market": "Raleigh",
              "jobs": 2,
              "value": 32598.39
            }
          ],
          "avgDays": null,
          "medianDays": null
        }
      ],
      "totalJobs": 748,
      "totalValue": 15112089.05
    },
    "commentary": {
      "actionableRecommendations": [
        "Hold weekly sales pace at or above $2.7M to defend the May invoicing target.",
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
            12078221,
            15112089.05,
            13438006.62,
            10476210.2868,
            -1602010.7132
          ],
          [
            "May 2026",
            13699230,
            15112089.05,
            17119791.0951,
            14223911.9948,
            524681.9948
          ],
          [
            "Jun 2026",
            14956779,
            8732260.0128,
            14343976.3478,
            14397126.8353,
            -559652.1647
          ],
          [
            "Jul 2026",
            10167762,
            9459926.2511,
            10247536.5879,
            11357513.9589,
            1189751.9589
          ],
          [
            "Aug 2026",
            14285167,
            8387640.2668,
            15161045.4751,
            13345977.6123,
            -939189.3877
          ],
          [
            "Sep 2026",
            13073277,
            10299397.5324,
            12151145.2668,
            13729094.9077,
            655817.9077
          ],
          [
            "Oct 2026",
            14107969,
            9751597.4035,
            13413940.918,
            13582437.0175,
            -525531.9825
          ],
          [
            "Nov 2026",
            11218840,
            10103602.6948,
            8407045.6541,
            10962050.1583,
            -256789.8417
          ],
          [
            "Dec 2026",
            6019238,
            8029825.2727,
            3134188.1401,
            6495215.7505,
            475977.7505
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
            15112089.05,
            9662592.2868,
            2681700.7132,
            13438006.62
          ],
          [
            "May 2026",
            15112089.05,
            4508755.8355,
            9783574.1645,
            17119791.0951
          ],
          [
            "Jun 2026",
            8732260.0128,
            1691390.3258,
            13142369.6742,
            14343976.3478
          ],
          [
            "Jul 2026",
            9459926.2511,
            683452.1866,
            10068563.8134,
            10247536.5879
          ],
          [
            "Aug 2026",
            8387640.2668,
            324998.4028,
            14188477.5972,
            15161045.4751
          ],
          [
            "Sep 2026",
            10299397.5324,
            185617.5121,
            12043127.4879,
            12151145.2668
          ],
          [
            "Oct 2026",
            9751597.4035,
            65449.3908,
            13587467.6092,
            13413940.918
          ],
          [
            "Nov 2026",
            10103602.6948,
            34556.0821,
            10737612.9179,
            8407045.6541
          ],
          [
            "Dec 2026",
            8029825.2727,
            12523.7713,
            5803296.2287,
            3134188.1401
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
            0.2164,
            3257140.76,
            3257140.76,
            3257140.76
          ],
          [
            "Feb 2026 [Actual]",
            1.3223,
            3120739.51,
            3120739.51,
            3120739.51
          ],
          [
            "Mar 2026 [Actual]",
            2.6268,
            5723327.3,
            5723327.3,
            5723327.3
          ],
          [
            "Apr 2026 [Actual]",
            9.3129,
            13438006.62,
            13438006.62,
            13438006.62
          ],
          [
            "May 2026",
            13.6415,
            0,
            15465655.9703,
            14511133.8103
          ],
          [
            "Jun 2026",
            12.4041,
            0,
            14062857.0889,
            13194914.0317
          ],
          [
            "Jul 2026",
            13.3389,
            0,
            15122636.2632,
            14189284.8775
          ],
          [
            "Aug 2026",
            13.4938,
            0,
            15298281.2329,
            14354089.2454
          ],
          [
            "Sep 2026",
            11.7374,
            0,
            13306940.5609,
            12485651.7858
          ],
          [
            "Oct 2026",
            11.4365,
            0,
            12965868.6719,
            12165630.4541
          ],
          [
            "Nov 2026",
            7.6573,
            0,
            8681280.5306,
            8145482.0711
          ],
          [
            "Dec 2026",
            2.8119,
            0,
            3187969.0313,
            2991211.3191
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
            "Wk 04/19",
            3135534.878,
            3135534.878,
            0
          ],
          [
            "Wk 04/26",
            3383421.6925,
            3344170.4213,
            39251.2712
          ],
          [
            "Wk 05/03",
            4003138.7287,
            3865759.2795,
            137379.4491
          ],
          [
            "Wk 05/10",
            4003138.7287,
            3865759.2795,
            137379.4491
          ],
          [
            "Wk 05/17",
            4003138.7287,
            3865759.2795,
            137379.4491
          ],
          [
            "Wk 05/24",
            4003138.7287,
            3865759.2795,
            137379.4491
          ],
          [
            "Wk 05/31",
            3542622.064,
            3421046.5952,
            121575.4688
          ],
          [
            "Wk 06/07",
            3465869.2866,
            3346927.8145,
            118941.4721
          ],
          [
            "Wk 06/14",
            3465869.2866,
            3346927.8145,
            118941.4721
          ],
          [
            "Wk 06/21",
            3465869.2866,
            3346927.8145,
            118941.4721
          ],
          [
            "Wk 06/28",
            2854625.2605,
            2756660.4203,
            97964.8402
          ],
          [
            "Wk 07/05",
            2396192.2409,
            2313959.8747,
            82232.3662
          ],
          [
            "Wk 07/12",
            2396192.2409,
            2313959.8747,
            82232.3662
          ],
          [
            "Wk 07/19",
            2396192.2409,
            2313959.8747,
            82232.3662
          ],
          [
            "Wk 07/26",
            2560325.2327,
            2472460.1614,
            87865.0714
          ],
          [
            "Wk 08/02",
            3545123.1835,
            3423461.8815,
            121661.3021
          ],
          [
            "Wk 08/09",
            3545123.1835,
            3423461.8815,
            121661.3021
          ],
          [
            "Wk 08/16",
            3545123.1835,
            3423461.8815,
            121661.3021
          ],
          [
            "Wk 08/23",
            3545123.1835,
            3423461.8815,
            121661.3021
          ],
          [
            "Wk 08/30",
            3110053.4518,
            3003322.8439,
            106730.6079
          ],
          [
            "Wk 09/06",
            2936025.5591,
            2835267.2289,
            100758.3302
          ],
          [
            "Wk 09/13",
            2936025.5591,
            2835267.2289,
            100758.3302
          ],
          [
            "Wk 09/20",
            2936025.5591,
            2835267.2289,
            100758.3302
          ],
          [
            "Wk 09/27",
            3021984.2725,
            2918276.0169,
            103708.2556
          ],
          [
            "Wk 10/04",
            3136595.8904,
            3028954.4008,
            107641.4895
          ],
          [
            "Wk 10/11",
            3136595.8904,
            3028954.4008,
            107641.4895
          ],
          [
            "Wk 10/18",
            3136595.8904,
            3028954.4008,
            107641.4895
          ],
          [
            "Wk 10/25",
            3136595.8904,
            3028954.4008,
            107641.4895
          ],
          [
            "Wk 11/01",
            2031355.9237,
            1961643.986,
            69711.9377
          ],
          [
            "Wk 11/08",
            2031355.9237,
            1961643.986,
            69711.9377
          ],
          [
            "Wk 11/15",
            2031355.9237,
            1961643.986,
            69711.9377
          ],
          [
            "Wk 11/22",
            2031355.9237,
            1961643.986,
            69711.9377
          ],
          [
            "Wk 11/29",
            1103866.3381,
            1065983.9264,
            37882.4117
          ],
          [
            "Wk 12/06",
            732870.5039,
            707719.9026,
            25150.6013
          ],
          [
            "Wk 12/13",
            732870.5039,
            707719.9026,
            25150.6013
          ],
          [
            "Wk 12/20",
            732870.5039,
            707719.9026,
            25150.6013
          ],
          [
            "Wk 12/27",
            523478.9314,
            505514.2161,
            17964.7152
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
            25116.2487,
            18,
            1395.3471,
            43.7937,
            28783220.98
          ],
          [
            "Retail-Financing",
            21841.4339,
            18,
            1213.413,
            61.086,
            9653913.8
          ],
          [
            "Retail-No Financing",
            18739.4232,
            18,
            1041.0791,
            61.9718,
            30620217.59
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
            12,
            6,
            18,
            1146,
            25116.2487
          ],
          [
            "Retail-Financing",
            12,
            6,
            18,
            442,
            21841.4339
          ],
          [
            "Retail-No Financing",
            12,
            6,
            18,
            1634,
            18739.4232
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
            153,
            2731649.03
          ],
          [
            "Detroit Metro",
            92,
            1950010.46
          ],
          [
            "Cleveland",
            45,
            762682.7
          ],
          [
            "Nashville",
            34,
            665533.48
          ],
          [
            "DC Metro",
            21,
            486939.67
          ],
          [
            "Richmond",
            14,
            478880.67
          ],
          [
            "Dayton",
            22,
            440703.82
          ],
          [
            "Raleigh",
            10,
            164990.07
          ],
          [
            "Grand Rapids",
            5,
            124113.26
          ],
          [
            "Cincinnati",
            8,
            116867.09
          ],
          [
            "Knoxville",
            5,
            67124.3
          ],
          [
            "Greenville",
            2,
            57988.01
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
            35,
            867263.79
          ],
          [
            "Detroit Metro",
            24,
            679573.42
          ],
          [
            "DC Metro",
            10,
            429775.62
          ],
          [
            "Cleveland",
            11,
            249725.95
          ],
          [
            "Nashville",
            8,
            234519.69
          ],
          [
            "Richmond",
            5,
            88284.64
          ],
          [
            "Cincinnati",
            4,
            76075.03
          ],
          [
            "Greenville",
            2,
            16036.82
          ],
          [
            "Dayton",
            1,
            15600
          ],
          [
            "Raleigh",
            1,
            14272.06
          ],
          [
            "Knoxville",
            1,
            13500
          ],
          [
            "Grand Rapids",
            1,
            8782.98
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
            66,
            1403993.39
          ],
          [
            "Detroit Metro",
            43,
            827723.89
          ],
          [
            "Cleveland",
            18,
            257235.83
          ],
          [
            "Richmond",
            5,
            230769.91
          ],
          [
            "Dayton",
            16,
            199226.72
          ],
          [
            "Grand Rapids",
            12,
            173535.71
          ],
          [
            "Nashville",
            5,
            120322.5
          ],
          [
            "Cincinnati",
            9,
            77950.86
          ],
          [
            "DC Metro",
            3,
            73643.42
          ],
          [
            "Knoxville",
            3,
            46353
          ],
          [
            "Raleigh",
            1,
            12431.04
          ],
          [
            "Greenville",
            1,
            4187.62
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
            16,
            267707.45
          ],
          [
            "Knoxville",
            5,
            100194.46
          ],
          [
            "Cincinnati",
            4,
            91740.7
          ],
          [
            "Richmond",
            3,
            73215.88
          ],
          [
            "Detroit Metro",
            3,
            71145
          ],
          [
            "Dayton",
            3,
            61233.98
          ],
          [
            "Nashville",
            2,
            55857.53
          ],
          [
            "Cleveland",
            5,
            51650.08
          ],
          [
            "DC Metro",
            4,
            47288.54
          ],
          [
            "Greenville",
            3,
            46352.81
          ],
          [
            "Raleigh",
            2,
            32598.39
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
            1172262.9603,
            43.6558
          ],
          [
            "Retail-No Financing",
            1127705.0001,
            41.9964
          ],
          [
            "Retail-Financing",
            385271.8269,
            14.3478
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
            1645209.3931,
            61.2686
          ],
          [
            "Gutters",
            855782.3507,
            31.8699
          ],
          [
            "Siding",
            70213.045,
            2.6148
          ],
          [
            "Metal",
            27729.6492,
            1.0327
          ],
          [
            "GAF Solar",
            23711.4432,
            0.883
          ],
          [
            "Flat Roof",
            19351.1023,
            0.7206
          ],
          [
            "Masonry",
            12696.2956,
            0.4728
          ],
          [
            "Rack Mounted Solar",
            12149.5243,
            0.4525
          ],
          [
            "Windows",
            9488.8364,
            0.3534
          ],
          [
            "Other",
            6874.9115,
            0.256
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
            "Wk 04/19",
            "Apr",
            3135534.878
          ],
          [
            "Wk 04/26",
            "Apr",
            3344170.4213
          ],
          [
            "Wk 05/03",
            "May",
            3865759.2795
          ],
          [
            "Wk 05/10",
            "May",
            3865759.2795
          ],
          [
            "Wk 05/17",
            "May",
            3865759.2795
          ],
          [
            "Wk 05/24",
            "May",
            3865759.2795
          ],
          [
            "Wk 05/31",
            "May",
            3421046.5952
          ],
          [
            "Wk 06/07",
            "Jun",
            3346927.8145
          ],
          [
            "Wk 06/14",
            "Jun",
            3346927.8145
          ],
          [
            "Wk 06/21",
            "Jun",
            3346927.8145
          ],
          [
            "Wk 06/28",
            "Jun",
            2756660.4203
          ],
          [
            "Wk 07/05",
            "Jul",
            2313959.8747
          ],
          [
            "Wk 07/12",
            "Jul",
            2313959.8747
          ],
          [
            "Wk 07/19",
            "Jul",
            2313959.8747
          ],
          [
            "Wk 07/26",
            "Jul",
            2472460.1614
          ],
          [
            "Wk 08/02",
            "Aug",
            3423461.8815
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
          "2026-07-13"
        ],
        "datasets": [
          {
            "label": "Weekly Sales",
            "data": [
              727682.14,
              716982.56,
              1008803.46,
              595579.4,
              667645.24,
              790460.13,
              801859.46,
              1838460.76,
              1212369.55,
              1189026.57,
              1582423.74,
              2319106.72,
              2189670.89,
              2666699.8,
              2993442.64,
              2949104.42,
              2000862.74,
              1475986.8329,
              3219501.8677,
              3398267.2637,
              3577032.6596,
              3755798.0556,
              3934563.4515,
              4113328.8475,
              4292094.2435,
              4470859.6394,
              4649625.0354,
              4828390.4313
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
              12078221,
              13699230,
              14956779,
              10167762,
              14285167,
              13073277,
              14107969,
              11218840,
              6019238
            ]
          },
          {
            "label": "Forecast Net Revenue",
            "data": [
              10476210.2868,
              14223911.9948,
              14397126.8353,
              11357513.9589,
              13345977.6123,
              13729094.9077,
              13582437.0175,
              10962050.1583,
              6495215.7505
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
              13438006.62,
              17119791.0951,
              14343976.3478,
              10247536.5879,
              15161045.4751,
              12151145.2668,
              13413940.918,
              8407045.6541,
              3134188.1401
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
              4747192,
              3536393,
              8125926,
              12344293,
              14292330,
              14833760,
              10752016,
              14513476,
              12228745,
              13652917,
              10772169,
              5815820
            ]
          },
          {
            "label": "Model Revenue",
            "data": [
              4747192,
              3726314.181,
              4822097.129,
              9662592.2868,
              13991386.3178,
              14274107.8353,
              11941767.9589,
              13574286.6123,
              12884562.9077,
              13127385.0175,
              10515379.1583,
              6291797.7505
            ]
          },
          {
            "label": "From Known Sales",
            "data": [
              4747192,
              3726314.181,
              4822097.129,
              9662592.2868,
              4508755.8355,
              1691390.3258,
              683452.1866,
              324998.4028,
              185617.5121,
              65449.3908,
              34556.0821,
              12523.7713
            ]
          }
        ]
      },
      {
        "id": "branchChart",
        "labels": [
          "Columbus",
          "Detroit Metro",
          "Nashville",
          "DC Metro",
          "Dayton",
          "Cleveland",
          "Richmond",
          "Cincinnati",
          "Raleigh",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "Mix %",
            "data": [
              30.7801,
              17.1234,
              10.0656,
              8.7331,
              6.7884,
              5.938,
              4.9448,
              4.7631,
              3.8379,
              3.8196
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
              43.7937,
              29.1084,
              14.9476,
              6.3811,
              2.6224,
              1.6608
            ]
          },
          {
            "label": "Retail-Financing",
            "data": [
              61.086,
              28.0543,
              7.0136,
              1.3575,
              1.1312,
              0.4525
            ]
          },
          {
            "label": "Retail-No Financing",
            "data": [
              61.9718,
              25.4133,
              7.1647,
              2.6944,
              1.286,
              0.9798
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
              12,
              12,
              12
            ]
          },
          {
            "label": "In Progress -> Complete",
            "data": [
              6,
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
      4747192,
      3536393,
      8125926,
      12344293,
      14292330,
      14833760,
      10752016,
      14513476,
      12228745,
      13652917,
      10772169,
      5815820
    ],
    "revModel": [
      3312733.0599999987,
      2855781.11,
      6228299.340000002,
      8411661.160000004,
      13991386.3178,
      14274107.8353,
      11941767.9589,
      13574286.6123,
      12884562.9077,
      13127385.0175,
      10515379.1583,
      6291797.7505
    ],
    "revFromKnown": [
      3312733.0599999987,
      2855781.11,
      6228299.340000002,
      8411661.160000004,
      4508755.8355,
      1691390.3258,
      683452.1866,
      324998.4028,
      185617.5121,
      65449.3908,
      34556.0821,
      12523.7713
    ],
    "requiredSales": [
      3257140.76,
      3120739.51,
      5723327.3,
      13438006.62,
      17119791.0951,
      14343976.3478,
      10247536.5879,
      15161045.4751,
      12151145.2668,
      13413940.918,
      8407045.6541,
      3134188.1401
    ],
    "backlogData": [
      {
        "month": "Jan 2026",
        "total_backlog": 15112089.05,
        "wip_est": 3592394.82,
        "not_started": 11519694.23,
        "budget_rev": 4747192,
        "pipeline_backlog": 15112089.05,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 4747192,
        "revenue_gap": 0,
        "adjusted_required_sales": 3257140.76,
        "backlog_surplus": 11854948.29
      },
      {
        "month": "Feb 2026",
        "total_backlog": 15112089.05,
        "wip_est": 3592394.82,
        "not_started": 11519694.23,
        "budget_rev": 3536393,
        "pipeline_backlog": 15112089.05,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 3726314.181,
        "revenue_gap": 0,
        "adjusted_required_sales": 3120739.51,
        "backlog_surplus": 11991349.54
      },
      {
        "month": "Mar 2026",
        "total_backlog": 15112089.05,
        "wip_est": 3592394.82,
        "not_started": 11519694.23,
        "budget_rev": 8125926,
        "pipeline_backlog": 15112089.05,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 4822097.129,
        "revenue_gap": 3303828.871,
        "adjusted_required_sales": 5723327.3,
        "backlog_surplus": 9388761.75
      },
      {
        "month": "Apr 2026",
        "total_backlog": 15112089.05,
        "wip_est": 3592394.82,
        "not_started": 11519694.23,
        "budget_rev": 12344293,
        "pipeline_backlog": 15112089.05,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 9662592.2868,
        "revenue_gap": 2681700.7132,
        "adjusted_required_sales": 13438006.62,
        "backlog_surplus": 1674082.43
      },
      {
        "month": "May 2026",
        "total_backlog": 15112089.05,
        "wip_est": 9067253.43,
        "not_started": 6044835.62,
        "budget_rev": 14292330,
        "pipeline_backlog": 15112089.05,
        "new_sales_backlog": 0,
        "pipe_invoicing": 14016989.65,
        "future_invoicing": 3219501.92,
        "rev_from_backlog": 4508755.8355,
        "revenue_gap": 9783574.1645,
        "adjusted_required_sales": 17119791.0951,
        "backlog_surplus": -2007702.0451
      },
      {
        "month": "Jun 2026",
        "total_backlog": 8732260.0128,
        "wip_est": 5239356.0077,
        "not_started": 3492904.0051,
        "budget_rev": 14833760,
        "pipeline_backlog": 1095099.4,
        "new_sales_backlog": 7637160.6128,
        "pipe_invoicing": 1033592.6,
        "future_invoicing": 14665661.45,
        "rev_from_backlog": 1691390.3258,
        "revenue_gap": 13142369.6742,
        "adjusted_required_sales": 14343976.3478,
        "backlog_surplus": -5611716.3351
      },
      {
        "month": "Jul 2026",
        "total_backlog": 9459926.2511,
        "wip_est": 5675955.7507,
        "not_started": 3783970.5004,
        "budget_rev": 10752016,
        "pipeline_backlog": 61506.8,
        "new_sales_backlog": 9398419.4511,
        "pipe_invoicing": 61506.8,
        "future_invoicing": 22354298.23,
        "rev_from_backlog": 683452.1866,
        "revenue_gap": 10068563.8134,
        "adjusted_required_sales": 10247536.5879,
        "backlog_surplus": -787610.3368
      },
      {
        "month": "Aug 2026",
        "total_backlog": 8387640.2668,
        "wip_est": 5032584.1601,
        "not_started": 3355056.1067,
        "budget_rev": 14513476,
        "pipeline_backlog": 0,
        "new_sales_backlog": 8387640.2668,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 324998.4028,
        "revenue_gap": 14188477.5972,
        "adjusted_required_sales": 15161045.4751,
        "backlog_surplus": -6773405.2083
      },
      {
        "month": "Sep 2026",
        "total_backlog": 10299397.5324,
        "wip_est": 6179638.5194,
        "not_started": 4119759.0129,
        "budget_rev": 12228745,
        "pipeline_backlog": 0,
        "new_sales_backlog": 10299397.5324,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 185617.5121,
        "revenue_gap": 12043127.4879,
        "adjusted_required_sales": 12151145.2668,
        "backlog_surplus": -1851747.7344
      },
      {
        "month": "Oct 2026",
        "total_backlog": 9751597.4035,
        "wip_est": 5850958.4421,
        "not_started": 3900638.9614,
        "budget_rev": 13652917,
        "pipeline_backlog": 0,
        "new_sales_backlog": 9751597.4035,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 65449.3908,
        "revenue_gap": 13587467.6092,
        "adjusted_required_sales": 13413940.918,
        "backlog_surplus": -3662343.5145
      },
      {
        "month": "Nov 2026",
        "total_backlog": 10103602.6948,
        "wip_est": 6062161.6169,
        "not_started": 4041441.0779,
        "budget_rev": 10772169,
        "pipeline_backlog": 0,
        "new_sales_backlog": 10103602.6948,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 34556.0821,
        "revenue_gap": 10737612.9179,
        "adjusted_required_sales": 8407045.6541,
        "backlog_surplus": 1696557.0407
      },
      {
        "month": "Dec 2026",
        "total_backlog": 8029825.2727,
        "wip_est": 4817895.1636,
        "not_started": 3211930.1091,
        "budget_rev": 5815820,
        "pipeline_backlog": 0,
        "new_sales_backlog": 8029825.2727,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 12523.7713,
        "revenue_gap": 5803296.2287,
        "adjusted_required_sales": 3134188.1401,
        "backlog_surplus": 4895637.1326
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
    "_source": "calculator/revenue-forecast.js V5-locked-2026-04-19-shell-1.0",
    "netsuiteInvoiced": {
      "source": "ResInvoicedYTDResults803.csv",
      "format": "per-invoice",
      "aggregatedOnly": false,
      "totalInvoiced": 21497088.189999983,
      "invoiceCount": 1198,
      "monthly": [
        3312733.0599999987,
        2855781.11,
        6228299.340000002,
        8411661.160000004,
        688613.5200000001,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      "byBranch": {
        "Greenville": {
          "invoiced": 736143.71,
          "count": 29
        },
        "Richmond": {
          "invoiced": 1156300.3499999999,
          "count": 64
        },
        "DC Metro": {
          "invoiced": 2141431.48,
          "count": 119
        },
        "Cleveland": {
          "invoiced": 776359.75,
          "count": 62
        },
        "Nashville": {
          "invoiced": 2592880.680000001,
          "count": 102
        },
        "Columbus": {
          "invoiced": 6320324.290000001,
          "count": 380
        },
        "Dayton": {
          "invoiced": 1427315.9800000002,
          "count": 86
        },
        "Cincinnati": {
          "invoiced": 1413096.8600000003,
          "count": 80
        },
        "Detroit": {
          "invoiced": 2462883.9999999995,
          "count": 149
        },
        "Raleigh": {
          "invoiced": 1351157.4300000002,
          "count": 67
        },
        "Knoxville": {
          "invoiced": 1068071.25,
          "count": 57
        },
        "Charlotte": {
          "invoiced": 33694.41,
          "count": 1
        },
        "Grand Rapids": {
          "invoiced": 17428,
          "count": 2
        }
      },
      "monthsWithData": [
        0,
        1,
        2,
        3,
        4
      ],
      "latestInvoiceDate": "2026-05-06",
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
          "invoiced": 8411661.160000004,
          "source": "NetSuite (locked)",
          "locked": true
        }
      ]
    },
    "v5ExcelCheck": {
      "source": "Revenue Forecast Model.xlsx",
      "kpis": {
        "invoicedYTD": 20921267.06,
        "ytdSalesCreated": 22966615.39,
        "fourWeekAvgSales": 2592295.12,
        "weeklyTrend": 162967.2566666667,
        "aprilNetRevenue": 8207307.73,
        "mayNetRevenue": 14078388.64948155,
        "annualBudgetNet": 120519027.5601507,
        "annualModelNet": 120625271.3144793,
        "annualVariance": 106243.7543286383
      },
      "monthly": {
        "Apr 2026": 8411542.48,
        "May 2026": 13845862.97248155,
        "Jun 2026": 14321425.64390209,
        "Jul 2026": 13434748.76426967,
        "Aug 2026": 11733720.08536634,
        "Sep 2026": 13631707.00448261,
        "Oct 2026": 13644851.18018833,
        "Nov 2026": 12539279.44330397,
        "Dec 2026": 10340883.43761677
      },
      "checks": [
        {
          "label": "Invoiced YTD",
          "excel": 20921267.06,
          "calc": 21497088.189999983,
          "diff": 575821.129999984,
          "drift": true
        },
        {
          "label": "April Invoiced",
          "excel": 8411542.48,
          "calc": 8411661.160000004,
          "diff": 118.68000000342727,
          "drift": false
        }
      ],
      "drifted": 1
    }
  },
  "BACKLOG": {
    "_source": "calculator/backlog.js v1.0-rules-encoded",
    "title": "Job Backlog & Production",
    "subtitle": "Live job-level backlog",
    "headerMeta": {
      "totalJobs": 605,
      "totalWOs": 879,
      "portfolioValue": 13058941.03,
      "avgDaysInStatus": 13,
      "lastBuild": "2026-05-27T17:05:48.644Z"
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
        "value": "605",
        "sub": "879 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "109",
        "sub": "18.0% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "496",
        "sub": "82.0% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "65",
        "sub": "59.6% of In Progress",
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
        "value": "$13.06M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$1.94M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$1.84M",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "65",
        "sub": "59.6% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$1.84M",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "75",
        "sub": "Across 65 jobs",
        "tone": "info"
      },
      {
        "label": "RTS Ready Today",
        "value": "24",
        "sub": "No blocker, dispatch now",
        "tone": "good"
      },
      {
        "label": "Top Trailing Trade",
        "value": "Gutters",
        "sub": "42 open WOs / 42 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "317",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "220",
        "sub": "69.4% of all holds",
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
        "value": "20d",
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
        "value": "$1.94M",
        "sub": "Sum of stale value across all reps",
        "tone": "crit"
      },
      {
        "label": "Reps with Stuck Work",
        "value": "42",
        "sub": "Reps carrying any >30d WO",
        "tone": "warn"
      },
      {
        "label": "Top Stuck Rep",
        "value": "$240K",
        "sub": "Highest single-rep stuck value",
        "tone": "warn"
      }
    ],
    "kpisBacklog": [
      {
        "label": "Not Started Jobs",
        "value": "496",
        "sub": "82.0% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$10.22M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "247d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Columbus",
        "sub": "210 jobs (42.3% of backlog)",
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
          "Pending Estimate Approval"
        ],
        "datasets": [
          {
            "label": "Work Orders",
            "data": [
              317,
              255,
              175,
              81,
              33,
              17,
              1
            ]
          }
        ]
      },
      {
        "id": "ch-branch",
        "labels": [
          "Columbus",
          "Detroit Metro",
          "Cleveland",
          "DC Metro",
          "Richmond",
          "Nashville",
          "Dayton",
          "Grand Rapids",
          "Cincinnati",
          "Raleigh",
          "Knoxville",
          "Greenville"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              28,
              16,
              10,
              9,
              6,
              3,
              3,
              1,
              3,
              0,
              1,
              1
            ]
          },
          {
            "label": "Open",
            "data": [
              5,
              13,
              11,
              4,
              4,
              6,
              2,
              2,
              1,
              1,
              2,
              0
            ]
          },
          {
            "label": "On Hold",
            "data": [
              95,
              91,
              59,
              16,
              14,
              7,
              5,
              20,
              6,
              1,
              1,
              2
            ]
          },
          {
            "label": "RTS",
            "data": [
              149,
              38,
              23,
              11,
              6,
              5,
              8,
              4,
              2,
              7,
              1,
              1
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              59,
              18,
              22,
              15,
              11,
              19,
              14,
              0,
              5,
              3,
              7,
              2
            ]
          }
        ]
      },
      {
        "id": "ch-wo-aging",
        "labels": [
          "Requires Additional Service",
          "Completed",
          "On Hold",
          "Ready to Schedule",
          "Scheduled",
          "Pending Estimate Approval",
          "In Progress"
        ],
        "datasets": [
          {
            "label": "Avg Days",
            "data": [
              29,
              28,
              20,
              15,
              10,
              1,
              1
            ]
          },
          {
            "label": "Max Days",
            "data": [
              134,
              79,
              257,
              162,
              103,
              1,
              8
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
          "Masonry",
          "Metal",
          "Windows",
          "Rack Mounted Solar",
          "Electrical",
          "Painting",
          "Flat Roof",
          "GAF Solar",
          "Insulation",
          "Carpentry"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              63,
              11,
              3,
              1,
              1,
              1,
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
              442,
              215,
              87,
              14,
              13,
              12,
              5,
              3,
              2,
              2,
              1,
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
          "Scheduled",
          "On Hold",
          "Requires Additional Service",
          "In Progress"
        ],
        "datasets": [
          {
            "label": "WOs",
            "data": [
              24,
              21,
              21,
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
              13,
              24,
              14,
              9,
              5,
              10
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
          "Nashville",
          "Dayton",
          "DC Metro",
          "Richmond",
          "Grand Rapids",
          "Raleigh",
          "Knoxville",
          "Cincinnati",
          "Greenville"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              210,
              99,
              65,
              23,
              20,
              20,
              17,
              17,
              8,
              7,
              7,
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
            336,
            28,
            95,
            149,
            59,
            3,
            2,
            51,
            237,
            4928491.89
          ],
          [
            "Detroit Metro",
            176,
            16,
            91,
            38,
            18,
            9,
            4,
            85,
            126,
            2833597.21
          ],
          [
            "Cleveland",
            125,
            10,
            59,
            23,
            22,
            7,
            4,
            56,
            78,
            1493424.58
          ],
          [
            "DC Metro",
            55,
            9,
            16,
            11,
            15,
            3,
            1,
            3,
            30,
            834442.45
          ],
          [
            "Richmond",
            41,
            6,
            14,
            6,
            11,
            3,
            1,
            0,
            26,
            877324.54
          ],
          [
            "Nashville",
            40,
            3,
            7,
            5,
            19,
            2,
            4,
            0,
            31,
            694351.84
          ],
          [
            "Dayton",
            32,
            3,
            5,
            8,
            14,
            1,
            0,
            3,
            24,
            448298.49
          ],
          [
            "Grand Rapids",
            27,
            1,
            20,
            4,
            0,
            1,
            1,
            20,
            20,
            352450.97
          ],
          [
            "Cincinnati",
            17,
            3,
            6,
            2,
            5,
            1,
            0,
            1,
            11,
            216725.24
          ],
          [
            "Raleigh",
            12,
            0,
            1,
            7,
            3,
            1,
            0,
            0,
            9,
            131998.59
          ],
          [
            "Knoxville",
            12,
            1,
            1,
            1,
            7,
            2,
            0,
            0,
            9,
            142984.91
          ],
          [
            "Greenville",
            6,
            1,
            2,
            1,
            2,
            0,
            0,
            1,
            4,
            104850.32
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
            216,
            13,
            218
          ],
          [
            "Pending Material",
            57,
            20,
            237
          ],
          [
            "Pending Sales",
            25,
            52,
            257
          ],
          [
            "Homeowner Request",
            14,
            73,
            247
          ],
          [
            "Pending HOA",
            4,
            9,
            14
          ],
          [
            "Pending Deposit",
            1,
            16,
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
            42,
            42,
            1138937.45
          ],
          [
            "Siding",
            12,
            12,
            368158.18
          ],
          [
            "Metal",
            5,
            5,
            167866.22
          ],
          [
            "Roofing",
            5,
            5,
            119249.9
          ],
          [
            "Masonry",
            4,
            4,
            120297.71
          ],
          [
            "Rack Mounted Solar",
            3,
            3,
            167063.25
          ],
          [
            "Painting",
            2,
            2,
            95402.14
          ],
          [
            "Electrical",
            1,
            1,
            11456
          ],
          [
            "Windows",
            1,
            1,
            22745.22
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
            90
          ],
          [
            "On Hold",
            79
          ],
          [
            "Scheduled",
            37
          ],
          [
            "Completed",
            11
          ],
          [
            "In Progress",
            8
          ],
          [
            "Requires Additional Service",
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
            505,
            63,
            442,
            500,
            11359282.9
          ],
          [
            "Gutters",
            226,
            11,
            215,
            225,
            5066457.67
          ],
          [
            "Siding",
            90,
            3,
            87,
            89,
            1787271.33
          ],
          [
            "Masonry",
            15,
            1,
            14,
            15,
            395936.91
          ],
          [
            "Metal",
            14,
            1,
            13,
            14,
            859541.45
          ],
          [
            "Windows",
            13,
            1,
            12,
            13,
            253599.7
          ],
          [
            "Rack Mounted Solar",
            5,
            0,
            5,
            5,
            208099.61
          ],
          [
            "Electrical",
            4,
            1,
            3,
            4,
            62855.29
          ],
          [
            "Painting",
            2,
            0,
            2,
            2,
            95402.14
          ],
          [
            "Flat Roof",
            2,
            0,
            2,
            2,
            63456
          ],
          [
            "GAF Solar",
            1,
            0,
            1,
            1,
            35132
          ],
          [
            "Insulation",
            1,
            0,
            1,
            1,
            19399
          ],
          [
            "Carpentry",
            1,
            0,
            1,
            1,
            239596.83
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
            14
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
            "Hunter Carrington Scott",
            8,
            5,
            239596.83,
            2,
            1
          ],
          [
            "Dan Haske",
            9,
            5,
            172516.45,
            4,
            1
          ],
          [
            "Adam Johns",
            4,
            2,
            138551.25,
            4,
            2
          ],
          [
            "Storm Drumm",
            29,
            18,
            123504,
            7,
            1
          ],
          [
            "Kevin Ditty",
            13,
            9,
            116110.88,
            6,
            1
          ],
          [
            "Justin Hook",
            3,
            1,
            105020.5,
            1,
            1
          ],
          [
            "Matthew Ross",
            18,
            12,
            103775,
            5,
            2
          ],
          [
            "Cole Burgess",
            30,
            22,
            78805,
            3,
            1
          ],
          [
            "Rudy Mendez",
            5,
            2,
            64655,
            4,
            1
          ],
          [
            "Frank Butts",
            35,
            21,
            55474.88,
            5,
            1
          ],
          [
            "James Cole Dionisi",
            17,
            13,
            48653,
            2,
            1
          ],
          [
            "Noah Jenkins",
            2,
            1,
            41831.11,
            2,
            1
          ],
          [
            "Jake Caldwell",
            16,
            13,
            41272.39,
            1,
            1
          ],
          [
            "Brian Ogrin",
            19,
            11,
            40300,
            2,
            1
          ],
          [
            "Richard Rice",
            12,
            9,
            38261,
            5,
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
            210,
            4287449.51,
            92
          ],
          [
            "Detroit Metro",
            99,
            2068229.58,
            247
          ],
          [
            "Cleveland",
            65,
            1126028.52,
            40
          ],
          [
            "Nashville",
            23,
            514746.85,
            27
          ],
          [
            "Dayton",
            20,
            374791.49,
            23
          ],
          [
            "DC Metro",
            20,
            393660.61,
            79
          ],
          [
            "Richmond",
            17,
            697557.21,
            98
          ],
          [
            "Grand Rapids",
            17,
            296951.71,
            27
          ],
          [
            "Raleigh",
            8,
            117030.59,
            40
          ],
          [
            "Knoxville",
            7,
            120689.59,
            28
          ],
          [
            "Cincinnati",
            7,
            131412.05,
            75
          ],
          [
            "Greenville",
            3,
            95108.31,
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
            "Job-102733",
            "Alex Tironi",
            "Detroit Metro",
            "Roofing",
            "Homeowner Request",
            "Cole Burgess",
            247,
            44826
          ],
          [
            "Job-108163",
            "Mayank Srivastava",
            "Richmond",
            "Roofing",
            "Pending Sales",
            "Luca Benedetti",
            98,
            29205.81
          ],
          [
            "Job-108368",
            "Jason And Jamie Russel",
            "Columbus",
            "Gutters",
            "Homeowner Request",
            "Bill Applegate",
            92,
            3241.17
          ],
          [
            "Job-108783",
            "Susie Kelly",
            "Detroit Metro",
            "Gutters",
            "",
            "Gary Holm",
            84,
            9000
          ],
          [
            "Job-108962",
            "Kent Mccullough",
            "DC Metro",
            "Roofing",
            "Pending Permit",
            "Derrick Sieber",
            79,
            20300
          ],
          [
            "Job-106057",
            "David Wedig",
            "Cincinnati",
            "Roofing",
            "",
            "Wes McCorkle",
            75,
            19675.69
          ],
          [
            "Job-109681",
            "George Potts",
            "DC Metro",
            "Roofing",
            "Pending Sales",
            "Dan Haske",
            70,
            24567
          ],
          [
            "Job-099374",
            "Good Shepard Baptist Church",
            "Richmond",
            "Metal",
            "Pending Material",
            "Hunter Carrington Scott",
            61,
            239596.83
          ],
          [
            "Job-109426",
            "Karen Sahijdak",
            "Detroit Metro",
            "Roofing",
            "Homeowner Request",
            "James Cole Dionisi",
            56,
            36148
          ],
          [
            "Job-110755",
            "Brian Whitney",
            "Columbus",
            "Roofing",
            "Homeowner Request",
            "Jake Caldwell",
            51,
            41272.39
          ],
          [
            "Job-111056",
            "Suzanne Strawser",
            "Columbus",
            "Metal",
            "",
            "Zachary Schneider",
            49,
            3200
          ],
          [
            "Job-110850",
            "Jeff Short",
            "Columbus",
            "Roofing",
            "",
            "Storm Drumm",
            49,
            61956
          ],
          [
            "Job-109698",
            "Don Wright",
            "Detroit Metro",
            "Roofing",
            "Pending Sales",
            "Matthew Ross",
            47,
            38862
          ],
          [
            "Job-108540",
            "Robert Jurczysyzn",
            "Detroit Metro",
            "Masonry",
            "",
            "Donald Richard",
            44,
            3000
          ],
          [
            "Job-110557",
            "Sam Brown",
            "Detroit Metro",
            "Roofing",
            "",
            "Matthew Ross",
            44,
            27594
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Detroit Metro",
          "permits": 85
        },
        {
          "branch": "Cleveland",
          "permits": 56
        },
        {
          "branch": "Columbus",
          "permits": 51
        },
        {
          "branch": "Grand Rapids",
          "permits": 20
        },
        {
          "branch": "DC Metro",
          "permits": 3
        },
        {
          "branch": "Dayton",
          "permits": 3
        },
        {
          "branch": "Cincinnati",
          "permits": 1
        },
        {
          "branch": "Greenville",
          "permits": 1
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $1.84M of trapped partial-job revenue into billable revenue, reduce $1.94M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Dispatch the 24 RTS WOs sitting on partial jobs. No blocker, no hold, just dispatch.",
        "Re-dispatch the 17 RAS WOs (oldest at 134 days). These are pure re-work fastballs.",
        "Gutters sweep: 42 open WOs across 42 partial jobs blocking $1.14M. Highest single-trade leverage in the book.",
        "Detroit Metro permit sweep: 85 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one.",
        "Close out the 6 zombie jobs (all WOs Completed, parent still In Progress). Pure paperwork."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Gutters): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 496 jobs ($10.22M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $1.84M, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  }
};
