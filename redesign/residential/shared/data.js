/* AUTO-GENERATED — do not edit. Generated 2026-06-08T19:15:58.877Z (residential) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-06-08T19:15:58.877Z",
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
        "elapsedMs": 102,
        "builtAt": "2026-06-08T19:15:58.877Z"
      },
      {
        "id": "sales-overview",
        "version": "1.0-rules-encoded",
        "elapsedMs": 594,
        "builtAt": "2026-06-08T19:15:58.877Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 6,
        "builtAt": "2026-06-08T19:15:58.877Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 44,
        "builtAt": "2026-06-08T19:15:58.877Z"
      }
    ]
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 06, 2026 - Jun 08, 2026 - De-Duplicated at Job Level - 1,654 Jobs - 14 Markets - 29 PMs",
    "generated": "2026-06-08",
    "headerMeta": {
      "trueRevenue": 30613060.39,
      "uniqueJobs": 1654,
      "markets": 14,
      "pms": 29,
      "medianComplete": 23.4,
      "avgStart": 26.4,
      "multiTradeJobs": 475,
      "singleTradeJobs": 1179,
      "multiTradePct": 28.7,
      "lastBuild": "2026-06-08T19:15:58.877Z"
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
        "value": "$30.61M",
        "sub": "1,654 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$18,509",
        "sub": "Per job (deduped)"
      },
      {
        "label": "Median Days to Complete",
        "value": "23.4d",
        "sub": "Job-level median"
      },
      {
        "label": "Avg Days to Start",
        "value": "26.4d",
        "sub": "Sale to crew on-site"
      },
      {
        "label": "Multi-Trade Jobs",
        "value": "475",
        "sub": "28.7% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "1,179",
        "sub": "71.3% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$25,389",
        "sub": "+61.3% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$15,736",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+17.0d",
        "sub": "MT 36.4d vs ST 19.4d"
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
        "rev": 7873925.39,
        "jobs": 442,
        "med": 17.6,
        "start": 25
      },
      {
        "m": "2026-05",
        "label": "May",
        "key": "2026-05",
        "rev": 8350587.95,
        "jobs": 459,
        "med": 21.7,
        "start": 22
      },
      {
        "m": "2026-06",
        "label": "June",
        "key": "2026-06",
        "rev": 2511405.42,
        "jobs": 132,
        "med": 28.4,
        "start": 24.5
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
          "2026-06"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              3275604.18,
              2694605.54,
              5906931.91,
              7873925.39,
              8350587.95,
              2511405.42
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
              132
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
          "2026-06"
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
              28.4
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
              24.5
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
              475
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              1179
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
          "Painting + Roofing"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              316,
              33,
              23,
              19,
              12,
              12,
              5,
              5
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
          "Cleveland",
          "Richmond",
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
              26.8,
              27.3,
              32.7,
              34.8,
              25.4,
              27.1,
              39,
              30.5,
              13,
              31.8,
              23.7,
              41.4,
              37.5,
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
          "Cleveland",
          "Richmond",
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
              40.6,
              44.6,
              21.7,
              31.1,
              33.5,
              41.5,
              28.4,
              48.6,
              64.4,
              28.6,
              27.7,
              64.6,
              39.5,
              346.7
            ]
          },
          {
            "label": "ST Median",
            "data": [
              15.7,
              22.6,
              19.5,
              20.6,
              21.7,
              19.5,
              18.4,
              10.5,
              21.5,
              17.6,
              19.5,
              20.7,
              28.6,
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
          "Cleveland",
          "Richmond",
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
              9335005.67,
              4577977.61,
              3419457.84,
              2233624.01,
              2009272.15,
              1615934.34,
              1545268.48,
              1536407.73,
              1462443.22,
              1170294.47,
              925800.38,
              608668.35,
              139211.73,
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
          "Cleveland",
          "Richmond",
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
              21.6,
              29.5,
              20.5,
              22.6,
              25.5,
              26.7,
              24.4,
              15.6,
              27.5,
              23.1,
              21.5,
              44.5,
              32.1,
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
          "Joseph Yager",
          "Brandon Skrzypek",
          "Brandon Harter",
          "Richard Williams",
          "Landon Little",
          "Kaden Carter",
          "Levi Nieman",
          "Jason Andrews",
          "Shawn Oehlstrom",
          "Alejandro Alvarado",
          "Abraham Santiago",
          "Alex Dubanoski",
          "Galo Munive"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              2270081.06,
              2156046.54,
              1929082.44,
              1862494.77,
              1841910.38,
              1624099.87,
              1512714.73,
              1478336.14,
              1404629.54,
              1369804.54,
              1345628.2,
              1334857.18,
              1334854.41,
              1270782.91,
              1251358.36
            ]
          }
        ]
      },
      {
        "id": "ch_pm_scatter",
        "labels": [
          "Mason Bryant",
          "Eric Isakov",
          "Joseph Yager",
          "Brandon Skrzypek",
          "Brandon Harter",
          "Richard Williams",
          "Landon Little",
          "Kaden Carter",
          "Levi Nieman",
          "Jason Andrews",
          "Shawn Oehlstrom",
          "Alejandro Alvarado",
          "Abraham Santiago",
          "Alex Dubanoski",
          "Galo Munive",
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
          "Chris Atkins",
          "Mike Scott"
        ],
        "datasets": [
          {
            "label": "PMs",
            "data": [
              {
                "x": 25.4,
                "y": 2270081.06,
                "wos": 145,
                "name": "Mason Bryant"
              },
              {
                "x": 27.1,
                "y": 2156046.54,
                "wos": 116,
                "name": "Eric Isakov"
              },
              {
                "x": 26.5,
                "y": 1929082.44,
                "wos": 156,
                "name": "Joseph Yager"
              },
              {
                "x": 32.4,
                "y": 1862494.77,
                "wos": 96,
                "name": "Brandon Skrzypek"
              },
              {
                "x": 23.7,
                "y": 1841910.38,
                "wos": 98,
                "name": "Brandon Harter"
              },
              {
                "x": 27.7,
                "y": 1624099.87,
                "wos": 117,
                "name": "Richard Williams"
              },
              {
                "x": 25,
                "y": 1512714.73,
                "wos": 93,
                "name": "Landon Little"
              },
              {
                "x": 27.5,
                "y": 1478336.14,
                "wos": 87,
                "name": "Kaden Carter"
              },
              {
                "x": 35.5,
                "y": 1404629.54,
                "wos": 75,
                "name": "Levi Nieman"
              },
              {
                "x": 29.6,
                "y": 1369804.54,
                "wos": 161,
                "name": "Jason Andrews"
              },
              {
                "x": 23.6,
                "y": 1345628.2,
                "wos": 142,
                "name": "Shawn Oehlstrom"
              },
              {
                "x": 22.7,
                "y": 1334857.18,
                "wos": 100,
                "name": "Alejandro Alvarado"
              },
              {
                "x": 21.5,
                "y": 1334854.41,
                "wos": 72,
                "name": "Abraham Santiago"
              },
              {
                "x": 13.5,
                "y": 1270782.91,
                "wos": 93,
                "name": "Alex Dubanoski"
              },
              {
                "x": 28.5,
                "y": 1251358.36,
                "wos": 100,
                "name": "Galo Munive"
              },
              {
                "x": 22.1,
                "y": 1052754.73,
                "wos": 82,
                "name": "Joseph Jones"
              },
              {
                "x": 21,
                "y": 976617.54,
                "wos": 55,
                "name": "Brady Weingartner"
              },
              {
                "x": 10,
                "y": 948940,
                "wos": 178,
                "name": "Drew Bailey"
              },
              {
                "x": 28.5,
                "y": 669743.62,
                "wos": 44,
                "name": "Austin Weingartner"
              },
              {
                "x": 55.2,
                "y": 562559.13,
                "wos": 57,
                "name": "Daniel Galli"
              },
              {
                "x": 25.4,
                "y": 535023.76,
                "wos": 24,
                "name": "Cody Mitchell"
              },
              {
                "x": 65,
                "y": 448608.71,
                "wos": 41,
                "name": "Chad Williams"
              },
              {
                "x": 16.5,
                "y": 349559.5,
                "wos": 30,
                "name": "Adam Marrero"
              },
              {
                "x": 19.6,
                "y": 318918.23,
                "wos": 22,
                "name": "Michael Blevins"
              },
              {
                "x": 32.5,
                "y": 268401.56,
                "wos": 31,
                "name": "(Unassigned)"
              },
              {
                "x": 35.4,
                "y": 187815.24,
                "wos": 11,
                "name": "Neil Laux"
              },
              {
                "x": 82.7,
                "y": 98166.92,
                "wos": 12,
                "name": "Justin Milliron"
              },
              {
                "x": 61.7,
                "y": 54500.99,
                "wos": 11,
                "name": "Chris Atkins"
              },
              {
                "x": 39.5,
                "y": 54173.94,
                "wos": 9,
                "name": "Mike Scott"
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
          "Metal",
          "Masonry",
          "GAF Solar",
          "Painting",
          "Rack Mounted Solar",
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
              22563740.29,
              4757099.06,
              1427472.95,
              434209.12,
              403985.83,
              304473.46,
              245905,
              174696.88,
              122992.11,
              67210.46,
              61298.98,
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
          "Windows",
          "Metal",
          "Masonry",
          "GAF Solar",
          "Painting",
          "Rack Mounted Solar",
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
              23.6,
              29.6,
              49.5,
              78.7,
              112.7,
              68.1,
              78.2,
              75.1,
              58.7,
              65.7,
              42.6,
              29.5,
              84.4,
              67.6
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
              515,
              417,
              320,
              220,
              147,
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
              25.4,
              22.6,
              14.7,
              25.6,
              29.4,
              126.6,
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
              31.8,
              29.3,
              18.1,
              32.3,
              29.9,
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
                "x": 25.4,
                "y": 19324.44,
                "jobs": 515,
                "name": "Brandon Vera"
              },
              {
                "x": 22.6,
                "y": 20587.83,
                "jobs": 417,
                "name": "David Schwan"
              },
              {
                "x": 14.7,
                "y": 15076.45,
                "jobs": 320,
                "name": "Amanda Wade"
              },
              {
                "x": 25.6,
                "y": 17260.99,
                "jobs": 220,
                "name": "Bradley Essex"
              },
              {
                "x": 29.4,
                "y": 16265.39,
                "jobs": 147,
                "name": "Thomas Hayes"
              },
              {
                "x": 126.6,
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
            542,
            9335005.67,
            17223.26,
            21.6,
            30.3,
            26.8,
            40.6,
            15.7
          ],
          [
            "Detroit Metro",
            253,
            4577977.61,
            18094.77,
            29.5,
            34.9,
            27.3,
            44.6,
            22.6
          ],
          [
            "Nashville",
            147,
            3419457.84,
            23261.62,
            20.5,
            20.5,
            32.7,
            21.7,
            19.5
          ],
          [
            "DC Metro",
            115,
            2233624.01,
            19422.82,
            22.6,
            23,
            34.8,
            31.1,
            20.6
          ],
          [
            "Dayton",
            114,
            2009272.15,
            17625.19,
            25.5,
            20.8,
            25.4,
            33.5,
            21.7
          ],
          [
            "Cincinnati",
            85,
            1615934.34,
            19010.99,
            26.7,
            24.1,
            27.1,
            41.5,
            19.5
          ],
          [
            "Cleveland",
            105,
            1545268.48,
            14716.84,
            24.4,
            30.4,
            39,
            28.4,
            18.4
          ],
          [
            "Richmond",
            82,
            1536407.73,
            18736.68,
            15.6,
            14.3,
            30.5,
            48.6,
            10.5
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
            "Knoxville",
            66,
            1170294.47,
            17731.73,
            23.1,
            18.9,
            31.8,
            28.6,
            17.6
          ],
          [
            "Greenville",
            38,
            925800.38,
            24363.17,
            21.5,
            18.2,
            23.7,
            27.7,
            19.5
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
            8,
            139211.73,
            17401.47,
            32.1,
            27.8,
            37.5,
            39.5,
            28.6
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
            145,
            125,
            2270081.06,
            15655.73,
            25.4,
            26
          ],
          [
            "Eric Isakov",
            116,
            96,
            2156046.54,
            18586.61,
            27.1,
            28.6
          ],
          [
            "Joseph Yager",
            156,
            127,
            1929082.44,
            12365.91,
            26.5,
            23.6
          ],
          [
            "Brandon Skrzypek",
            96,
            95,
            1862494.77,
            19400.99,
            32.4,
            32
          ],
          [
            "Brandon Harter",
            98,
            75,
            1841910.38,
            18795,
            23.7,
            21.4
          ],
          [
            "Richard Williams",
            117,
            107,
            1624099.87,
            13881.2,
            27.7,
            31.4
          ],
          [
            "Landon Little",
            93,
            88,
            1512714.73,
            16265.75,
            25,
            30.5
          ],
          [
            "Kaden Carter",
            87,
            73,
            1478336.14,
            16992.37,
            27.5,
            22.4
          ],
          [
            "Levi Nieman",
            75,
            74,
            1404629.54,
            18728.39,
            35.5,
            40.7
          ],
          [
            "Jason Andrews",
            161,
            137,
            1369804.54,
            8508.1,
            29.6,
            35.5
          ],
          [
            "Shawn Oehlstrom",
            142,
            100,
            1345628.2,
            9476.25,
            23.6,
            30.6
          ],
          [
            "Alejandro Alvarado",
            100,
            76,
            1334857.18,
            13348.57,
            22.7,
            20
          ],
          [
            "Abraham Santiago",
            72,
            61,
            1334854.41,
            18539.64,
            21.5,
            21.4
          ],
          [
            "Alex Dubanoski",
            93,
            71,
            1270782.91,
            13664.33,
            13.5,
            13.6
          ],
          [
            "Galo Munive",
            100,
            76,
            1251358.36,
            12513.58,
            28.5,
            26.4
          ],
          [
            "Joseph Jones",
            82,
            62,
            1052754.73,
            12838.47,
            22.1,
            17.9
          ],
          [
            "Brady Weingartner",
            55,
            54,
            976617.54,
            17756.68,
            21,
            19.7
          ],
          [
            "Drew Bailey",
            178,
            174,
            948940,
            5331.12,
            10,
            24
          ],
          [
            "Austin Weingartner",
            44,
            41,
            669743.62,
            15221.45,
            28.5,
            27
          ],
          [
            "Daniel Galli",
            57,
            40,
            562559.13,
            9869.46,
            55.2,
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
            41,
            24,
            448608.71,
            10941.68,
            65,
            23.7
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
            22,
            19,
            318918.23,
            14496.28,
            19.6,
            15
          ],
          [
            "(Unassigned)",
            31,
            27,
            268401.56,
            8658.11,
            32.5,
            39.9
          ],
          [
            "Neil Laux",
            11,
            9,
            187815.24,
            17074.11,
            35.4,
            35.2
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
            "Chris Atkins",
            11,
            9,
            54500.99,
            4954.64,
            61.7,
            43.3
          ],
          [
            "Mike Scott",
            9,
            9,
            54173.94,
            6019.33,
            39.5,
            11.2
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
            1490,
            22563740.29,
            15143.45,
            23.6
          ],
          [
            "Gutters",
            509,
            4757099.06,
            9345.97,
            29.6
          ],
          [
            "Siding",
            143,
            1427472.95,
            9982.33,
            49.5
          ],
          [
            "Windows",
            35,
            434209.12,
            12405.97,
            78.7
          ],
          [
            "Metal",
            23,
            403985.83,
            17564.6,
            112.7
          ],
          [
            "Masonry",
            26,
            304473.46,
            11710.52,
            68.1
          ],
          [
            "GAF Solar",
            2,
            245905,
            122952.5,
            78.2
          ],
          [
            "Painting",
            10,
            174696.88,
            17469.69,
            75.1
          ],
          [
            "Rack Mounted Solar",
            14,
            122992.11,
            8785.15,
            58.7
          ],
          [
            "Flat Roof",
            5,
            67210.46,
            13442.09,
            65.7
          ],
          [
            "Electrical",
            4,
            61298.98,
            15324.75,
            42.6
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
            67.6
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
            515,
            9952087.51,
            19324.44,
            "25.4d",
            "25.5d",
            31.8,
            19324.44
          ],
          [
            "David Schwan",
            417,
            8585123.53,
            20587.83,
            "22.6d",
            "25.2d",
            29.3,
            20587.83
          ],
          [
            "Amanda Wade",
            320,
            4824463.44,
            15076.45,
            "14.7d",
            "25.5d",
            18.1,
            15076.45
          ],
          [
            "Bradley Essex",
            220,
            3797418.71,
            17260.99,
            "25.6d",
            "25d",
            32.3,
            17260.99
          ],
          [
            "Thomas Hayes",
            147,
            2391012.15,
            16265.39,
            "29.4d",
            "31.8d",
            29.9,
            16265.39
          ],
          [
            "Morgan Valois",
            19,
            497020.32,
            26158.96,
            "126.6d",
            "73.3d",
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
            229,
            0,
            1,
            0,
            0,
            0,
            32,
            0,
            0,
            1,
            57,
            0,
            320
          ],
          [
            "Bradley Essex",
            58,
            80,
            2,
            0,
            70,
            10,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            220
          ],
          [
            "Brandon Vera",
            11,
            10,
            116,
            115,
            40,
            91,
            4,
            0,
            6,
            0,
            29,
            0,
            11,
            82,
            515
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
            12,
            7,
            182,
            0,
            0,
            4,
            0,
            0,
            0,
            66,
            0,
            146,
            0,
            0,
            417
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
            5,
            1,
            0,
            3,
            130,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            147
          ],
          [
            "Total",
            85,
            105,
            542,
            115,
            114,
            253,
            8,
            1,
            38,
            66,
            29,
            147,
            69,
            82,
            1654
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Chad Williams: 41 WOs, $449K revenue, 65.0-day median complete, top-volume PM with the slowest cycle in the network.",
        "Multi-trade penalty is severe in 3 markets: NOVA MT 64.6d vs ST 20.7d, Raleigh MT 64.4d vs ST 21.5d, Richmond MT 48.6d vs ST 10.5d.",
        "Days to Start averages 26.4 days company-wide and 34.9 days in Detroit Metro (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [
        "Drew Bailey: 178 WOs, $5,331 revenue per WO, the lowest revenue density of any active high-volume PM.",
        "Gutters-only work runs at 29.6-day median complete versus 23.6 days for roofing, 25% slower cycle on the lowest-priced trade.",
        "Amanda Wade creates 320 jobs at $15,076 average contract and 18.1% multi-trade attach, well below the top creator."
      ],
      "positivesToBuildOn": [
        "May delivered $8.35M across 459 invoiced jobs at 21.7-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "Richmond hits 15.6-day median complete and a $18,737 average contract on 82 jobs.",
        "Multi-trade jobs carry a $25,389 average contract versus $15,736 for single-trade, a 61% revenue lift per job.",
        "Columbus is the best-balanced market: 21.6-day median complete, 26.8% multi-trade attach, $17,223 average contract on 542 jobs."
      ]
    }
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-06-28",
    "ytdDays": 159,
    "rowCount": 2448,
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
        "value": "$40.50M",
        "sub": "2,448 signed contracts across 13 markets"
      },
      {
        "label": "Sold",
        "value": "$37.61M",
        "sub": "2,317 deals | 94.6% of signed contracts"
      },
      {
        "label": "Production Review",
        "value": "$1.97M",
        "sub": "87 deals | Ops Review, PM Review, Contracted"
      },
      {
        "label": "Kicked Back",
        "value": "$852K",
        "sub": "39 deals | 1.6% of signed contracts",
        "trend": "negative"
      },
      {
        "label": "Sales Action",
        "value": "$30K",
        "sub": "2 deals requiring sales follow-up",
        "trend": "neutral"
      },
      {
        "label": "Avg Deal Size",
        "value": "$16,543",
        "sub": "Median: $15,419 | Install avg: $18,893"
      },
      {
        "label": "Organization",
        "value": "143 Reps",
        "sub": "13 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$92.96M",
        "sub": "Based on 159 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "86.1% / 13.7%",
        "sub": "2,107 installs | 336 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 2317,
        "amount": 37610536.18
      },
      {
        "label": "Production Review",
        "count": 87,
        "amount": 1969151.89
      },
      {
        "label": "Kicked Back",
        "count": 39,
        "amount": 852471.53
      },
      {
        "label": "Sales Action",
        "count": 2,
        "amount": 30000
      },
      {
        "label": "Other",
        "count": 3,
        "amount": 33890.59
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
        "count": 234,
        "amount": 4121426.44,
        "installs": 198,
        "repairs": 36,
        "avgDeal": 17613,
        "repairPct": 15.4,
        "installAvg": 20549,
        "repairAvg": 1464
      },
      {
        "key": "2026-03",
        "label": "March",
        "count": 499,
        "amount": 6954165.43,
        "installs": 388,
        "repairs": 111,
        "avgDeal": 13936,
        "repairPct": 22.2,
        "installAvg": 17380,
        "repairAvg": 1897
      },
      {
        "key": "2026-04",
        "label": "April",
        "count": 790,
        "amount": 12496935.05,
        "installs": 686,
        "repairs": 104,
        "avgDeal": 15819,
        "repairPct": 13.2,
        "installAvg": 17968,
        "repairAvg": 1644
      },
      {
        "key": "2026-05",
        "label": "May",
        "count": 618,
        "amount": 11214762.41,
        "installs": 558,
        "repairs": 55,
        "avgDeal": 18147,
        "repairPct": 8.9,
        "installAvg": 19741,
        "repairAvg": 1979
      },
      {
        "key": "2026-06",
        "label": "June",
        "count": 125,
        "amount": 2444862.08,
        "installs": 114,
        "repairs": 11,
        "avgDeal": 19559,
        "repairPct": 8.8,
        "installAvg": 21150,
        "repairAvg": 3067
      }
    ],
    "jobTypeMixByMonth": {
      "Retail-No Financing": {
        "2026-01": 1317788.72,
        "2026-02": 1796529.77,
        "2026-03": 2995941.7,
        "2026-04": 4883616.69,
        "2026-05": 3864023.79,
        "2026-06": 585771.41
      },
      "Insurance": {
        "2026-01": 1437020.6,
        "2026-02": 1693326.5,
        "2026-03": 2772525.17,
        "2026-04": 6168338.16,
        "2026-05": 5009499.01,
        "2026-06": 509755.62
      },
      "Retail-Financing": {
        "2026-01": 509089.46,
        "2026-02": 631570.17,
        "2026-03": 1135621.56,
        "2026-04": 1283810.92,
        "2026-05": 1030416.64,
        "2026-06": 108973.18
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Insurance",
        "count": 857,
        "amount": 17590465.06,
        "avg": 20526
      },
      {
        "jobType": "Retail-No Financing",
        "count": 1241,
        "amount": 15443672.08,
        "avg": 12445
      },
      {
        "jobType": "Retail-Financing",
        "count": 224,
        "amount": 4699481.93,
        "avg": 20980
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
        "count": 81,
        "amount": 1906146.86
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
        "count": 152,
        "amount": 2386444.41
      },
      {
        "w": 14,
        "count": 152,
        "amount": 2171241.03
      },
      {
        "w": 15,
        "count": 176,
        "amount": 2690092.55
      },
      {
        "w": 16,
        "count": 187,
        "amount": 3105707.41
      },
      {
        "w": 17,
        "count": 203,
        "amount": 3276484.77
      },
      {
        "w": 18,
        "count": 167,
        "amount": 2551308.54
      },
      {
        "w": 19,
        "count": 142,
        "amount": 2572279.72
      },
      {
        "w": 20,
        "count": 151,
        "amount": 2611418.22
      },
      {
        "w": 21,
        "count": 140,
        "amount": 2528925.15
      },
      {
        "w": 22,
        "count": 141,
        "amount": 2804583.69
      },
      {
        "w": 23,
        "count": 122,
        "amount": 2407412.36
      },
      {
        "w": 25,
        "count": 1,
        "amount": 35991.17
      },
      {
        "w": 26,
        "count": 3,
        "amount": 51838.26
      },
      {
        "w": 27,
        "count": 1,
        "amount": 990
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
          14404487.29,
          858,
          16788,
          721,
          137,
          16,
          9
        ],
        [
          "Detroit Metro",
          6622625.85,
          387,
          17113,
          355,
          32,
          8.3,
          4
        ],
        [
          "Cleveland",
          3833272.67,
          273,
          14041,
          225,
          44,
          16.1,
          8
        ],
        [
          "Nashville",
          3294833.73,
          221,
          14909,
          161,
          60,
          27.1,
          5
        ],
        [
          "DC Metro",
          2635156.87,
          161,
          16367,
          123,
          38,
          23.6,
          14
        ],
        [
          "Dayton",
          2373066.3,
          135,
          17578,
          129,
          6,
          4.4,
          21
        ],
        [
          "Richmond",
          2135017.47,
          98,
          21786,
          94,
          4,
          4.1,
          31
        ],
        [
          "Cincinnati",
          1566251.29,
          100,
          15663,
          93,
          7,
          7,
          9
        ],
        [
          "Knoxville",
          1153905.75,
          70,
          16484,
          69,
          1,
          1.4,
          18
        ],
        [
          "Raleigh",
          1012665.59,
          63,
          16074,
          59,
          4,
          6.3,
          36
        ],
        [
          "Greenville",
          744236.59,
          36,
          20673,
          36,
          0,
          0,
          3
        ],
        [
          "Grand Rapids",
          485314.53,
          31,
          15655,
          29,
          1,
          3.2,
          24
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
          "opps": 1846,
          "soldAmt": 7837446.07,
          "closePct": 34,
          "nsli": 4246
        },
        {
          "branch": "Detroit",
          "opps": 775,
          "soldAmt": 4425255.23,
          "closePct": 39.1,
          "nsli": 5710
        },
        {
          "branch": "Cleveland",
          "opps": 598,
          "soldAmt": 1893542.43,
          "closePct": 27.8,
          "nsli": 3166
        },
        {
          "branch": "Nashville",
          "opps": 287,
          "soldAmt": 1402225.42,
          "closePct": 42.5,
          "nsli": 4886
        },
        {
          "branch": "DC Metro",
          "opps": 352,
          "soldAmt": 1335342.73,
          "closePct": 29.8,
          "nsli": 3794
        },
        {
          "branch": "Cincinnati",
          "opps": 302,
          "soldAmt": 815096.83,
          "closePct": 20.2,
          "nsli": 2699
        },
        {
          "branch": "Dayton",
          "opps": 209,
          "soldAmt": 754063.49,
          "closePct": 23.4,
          "nsli": 3608
        },
        {
          "branch": "Greenville",
          "opps": 96,
          "soldAmt": 453099.79,
          "closePct": 28.1,
          "nsli": 4720
        },
        {
          "branch": "Knoxville",
          "opps": 80,
          "soldAmt": 288517.27,
          "closePct": 28.7,
          "nsli": 3606
        },
        {
          "branch": "Raleigh",
          "opps": 131,
          "soldAmt": 266440.04,
          "closePct": 17.6,
          "nsli": 2034
        },
        {
          "branch": "Richmond",
          "opps": 72,
          "soldAmt": 238787.13,
          "closePct": 25,
          "nsli": 3316
        },
        {
          "branch": "Grand Rapids",
          "opps": 73,
          "soldAmt": 195668.92,
          "closePct": 20.5,
          "nsli": 2680
        }
      ],
      "totals": {
        "opps": 4824,
        "soldAmt": 19905485.35,
        "closePct": 31.9,
        "nsli": 4126
      },
      "source": "Closing Percent By Branch-2026-06-08-14-56-50.xlsx",
      "format": "per-opportunity"
    },
    "marketKickbacks": [
      {
        "market": "Cleveland",
        "kicked": 15,
        "kickedAmount": 268181.28
      },
      {
        "market": "Columbus",
        "kicked": 12,
        "kickedAmount": 327667.06
      },
      {
        "market": "Cincinnati",
        "kicked": 4,
        "kickedAmount": 76310.29
      },
      {
        "market": "Dayton",
        "kicked": 4,
        "kickedAmount": 119096.69
      },
      {
        "market": "Nashville",
        "kicked": 2,
        "kickedAmount": 18041.9
      },
      {
        "market": "Grand Rapids",
        "kicked": 1,
        "kickedAmount": 2064.7
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
        "name": "Sam Scorziell",
        "amount": 1217873.73,
        "count": 50,
        "avg": 24357,
        "medDays": 26,
        "jt": {
          "Insurance": 37,
          "Retail-No Financing": 10
        },
        "installs": 50,
        "repairs": 0
      },
      {
        "name": "Michael Conley",
        "amount": 1193447.9,
        "count": 70,
        "avg": 17049,
        "medDays": 11,
        "jt": {
          "Insurance": 30,
          "Retail-Financing": 8,
          "Retail-No Financing": 25
        },
        "installs": 66,
        "repairs": 4
      },
      {
        "name": "Kevin Ditty",
        "amount": 1177572.59,
        "count": 67,
        "avg": 17576,
        "medDays": 2,
        "jt": {
          "Retail-No Financing": 39,
          "Insurance": 10,
          "Retail-Financing": 15
        },
        "installs": 48,
        "repairs": 19
      },
      {
        "name": "Storm Drumm",
        "amount": 1036437.38,
        "count": 67,
        "avg": 15469,
        "medDays": 2,
        "jt": {
          "Retail-No Financing": 40,
          "Retail-Financing": 12,
          "Insurance": 15
        },
        "installs": 62,
        "repairs": 5
      },
      {
        "name": "Stephen Harmon",
        "amount": 979104.63,
        "count": 43,
        "avg": 22770,
        "medDays": 13,
        "jt": {
          "Retail-No Financing": 41,
          "Insurance": 2
        },
        "installs": 39,
        "repairs": 4
      },
      {
        "name": "Robert Beck",
        "amount": 950526.09,
        "count": 36,
        "avg": 26404,
        "medDays": 60,
        "jt": {
          "Retail-No Financing": 10,
          "Insurance": 25,
          "Retail-Financing": 1
        },
        "installs": 34,
        "repairs": 2
      },
      {
        "name": "Cole Burgess",
        "amount": 917891.84,
        "count": 46,
        "avg": 19954,
        "medDays": 3,
        "jt": {
          "Retail-Financing": 6,
          "Retail-No Financing": 34,
          "Insurance": 4
        },
        "installs": 45,
        "repairs": 1
      },
      {
        "name": "Dave Norris",
        "amount": 807032.58,
        "count": 61,
        "avg": 13230,
        "medDays": 14,
        "jt": {
          "Insurance": 24,
          "Retail-No Financing": 36,
          "Retail-Financing": 1
        },
        "installs": 42,
        "repairs": 19
      },
      {
        "name": "Brian Ogrin",
        "amount": 802316.38,
        "count": 37,
        "avg": 21684,
        "medDays": 32,
        "jt": {
          "Insurance": 22,
          "Retail-No Financing": 13,
          "Retail-Financing": 1
        },
        "installs": 33,
        "repairs": 4
      },
      {
        "name": "Frank Butts",
        "amount": 799285.02,
        "count": 60,
        "avg": 13321,
        "medDays": 8,
        "jt": {
          "Retail-No Financing": 28,
          "Insurance": 26,
          "Retail-Financing": 1
        },
        "installs": 53,
        "repairs": 7
      },
      {
        "name": "Donald Richard",
        "amount": 781676,
        "count": 44,
        "avg": 17765,
        "medDays": 4,
        "jt": {
          "Retail-No Financing": 36,
          "Retail-Financing": 2,
          "Insurance": 2
        },
        "installs": 41,
        "repairs": 3
      },
      {
        "name": "Scott Scaperato",
        "amount": 763894.66,
        "count": 69,
        "avg": 11071,
        "medDays": 2,
        "jt": {
          "Retail-Financing": 13,
          "Retail-No Financing": 39,
          "Insurance": 8
        },
        "installs": 56,
        "repairs": 13
      },
      {
        "name": "Frank Drummond",
        "amount": 762721.31,
        "count": 70,
        "avg": 10896,
        "medDays": 3,
        "jt": {
          "Insurance": 20,
          "Retail-No Financing": 48,
          "Retail-Financing": 2
        },
        "installs": 46,
        "repairs": 24
      },
      {
        "name": "Matthew Ross",
        "amount": 742370.56,
        "count": 42,
        "avg": 17675,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 29,
          "Insurance": 1,
          "Retail-Financing": 10
        },
        "installs": 38,
        "repairs": 4
      },
      {
        "name": "Bill Applegate",
        "amount": 709546.35,
        "count": 39,
        "avg": 18193,
        "medDays": 23,
        "jt": {
          "Insurance": 20,
          "Retail-No Financing": 16,
          "Retail-Financing": 1
        },
        "installs": 32,
        "repairs": 7
      },
      {
        "name": "Derrick Sieber",
        "amount": 679668.79,
        "count": 49,
        "avg": 13871,
        "medDays": 13,
        "jt": {
          "Retail-No Financing": 31,
          "Retail-Financing": 4,
          "Insurance": 14
        },
        "installs": 32,
        "repairs": 17
      },
      {
        "name": "Nick Junker",
        "amount": 674439.35,
        "count": 33,
        "avg": 20438,
        "medDays": 32,
        "jt": {
          "Insurance": 15,
          "Retail-No Financing": 18
        },
        "installs": 30,
        "repairs": 3
      },
      {
        "name": "Zachary Schneider",
        "amount": 655284.25,
        "count": 40,
        "avg": 16382,
        "medDays": 16,
        "jt": {
          "Retail-No Financing": 18,
          "Insurance": 21
        },
        "installs": 33,
        "repairs": 7
      },
      {
        "name": "Matt Williams",
        "amount": 650865.24,
        "count": 44,
        "avg": 14792,
        "medDays": 7,
        "jt": {
          "Retail-No Financing": 31,
          "Retail-Financing": 4,
          "Insurance": 5
        },
        "installs": 35,
        "repairs": 9
      },
      {
        "name": "Trey Rury",
        "amount": 624874.1,
        "count": 32,
        "avg": 19527,
        "medDays": 7,
        "jt": {
          "Retail-No Financing": 10,
          "Insurance": 6,
          "Retail-Financing": 13
        },
        "installs": 31,
        "repairs": 1
      }
    ],
    "speedSellers": [
      {
        "name": "Scott Scaperato",
        "medDays": 2
      },
      {
        "name": "Kevin Ditty",
        "medDays": 2
      },
      {
        "name": "Storm Drumm",
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
        "name": "Cole Burgess",
        "medDays": 3
      },
      {
        "name": "Derik Heinz",
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
        "repairs": 15,
        "deals": 28,
        "pct": 53.6
      },
      {
        "name": "Jeff Camp",
        "repairs": 11,
        "deals": 25,
        "pct": 44
      },
      {
        "name": "Dan Haske",
        "repairs": 12,
        "deals": 32,
        "pct": 37.5
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
          "count": 1160
        },
        {
          "label": "Retail-Fin",
          "median": 3,
          "mean": 18,
          "count": 219
        },
        {
          "label": "Insurance",
          "median": 27,
          "mean": 63,
          "count": 807
        },
        {
          "label": "Repair",
          "median": 3,
          "mean": 9,
          "count": 310
        },
        {
          "label": "Install",
          "median": 11,
          "mean": 41,
          "count": 1983
        }
      ],
      "byMarket": [
        {
          "market": "Greenville",
          "median": 3,
          "mean": 5,
          "count": 36
        },
        {
          "market": "Detroit Metro",
          "median": 4,
          "mean": 26,
          "count": 374
        },
        {
          "market": "Nashville",
          "median": 5,
          "mean": 19,
          "count": 216
        },
        {
          "market": "Cleveland",
          "median": 8,
          "mean": 29,
          "count": 244
        },
        {
          "market": "Columbus",
          "median": 9,
          "mean": 35,
          "count": 782
        },
        {
          "market": "Cincinnati",
          "median": 9,
          "mean": 34,
          "count": 98
        },
        {
          "market": "DC Metro",
          "median": 14,
          "mean": 60,
          "count": 149
        },
        {
          "market": "Knoxville",
          "median": 18,
          "mean": 40,
          "count": 69
        },
        {
          "market": "NOVA",
          "median": 18,
          "mean": 63,
          "count": 15
        },
        {
          "market": "Dayton",
          "median": 21,
          "mean": 45,
          "count": 130
        },
        {
          "market": "Grand Rapids",
          "median": 24,
          "mean": 29,
          "count": 29
        },
        {
          "market": "Richmond",
          "median": 31,
          "mean": 80,
          "count": 95
        },
        {
          "market": "Raleigh",
          "median": 36,
          "mean": 97,
          "count": 61
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
          "name": "Matt Williams",
          "medDays": 2,
          "count": 5
        },
        {
          "name": "Frank Drummond",
          "medDays": 3,
          "count": 20
        },
        {
          "name": "Justin Koenig",
          "medDays": 3,
          "count": 11
        }
      ]
    },
    "completedBilling": {
      "totalUnbilled": 1643275.95,
      "totalJobs": 89,
      "avgAge": 20.5,
      "medAge": 12,
      "tiers": [
        {
          "label": "Critical (60+ days)",
          "count": 4,
          "amount": 66299.31,
          "color": "red"
        },
        {
          "label": "Warning (30-59 days)",
          "count": 25,
          "amount": 497264.89,
          "color": "orange"
        },
        {
          "label": "Watch (14-29 days)",
          "count": 12,
          "amount": 250805.81,
          "color": "blue"
        },
        {
          "label": "Fresh (0-13 days)",
          "count": 48,
          "amount": 828905.94,
          "color": "green"
        }
      ],
      "bySubStatus": [
        {
          "subStatus": "Pending Supplement",
          "count": 54,
          "amount": 1103510.56,
          "avgAge": 27,
          "action": "Follow up with insurance carrier on supplement approval. Escalate if >30 days."
        },
        {
          "subStatus": "Accounting Kickback",
          "count": 19,
          "amount": 277169.9,
          "avgAge": 13,
          "action": "Review kickback reason, correct documentation or pricing, resubmit to accounting."
        },
        {
          "subStatus": "Ready to Invoice",
          "count": 15,
          "amount": 262395.49,
          "avgAge": 1,
          "action": "No blockers, submit invoice immediately. This is free cash waiting."
        },
        {
          "subStatus": "No Sub Status",
          "count": 1,
          "amount": 200,
          "avgAge": 82,
          "action": "Review job, identify what is blocking billing, assign owner."
        }
      ],
      "byMarket": [
        {
          "market": "Columbus",
          "count": 32,
          "amount": 531377.27,
          "avgAge": 19,
          "urgency": "MEDIUM"
        },
        {
          "market": "Richmond",
          "count": 12,
          "amount": 243084.36,
          "avgAge": 20,
          "urgency": "MEDIUM"
        },
        {
          "market": "Cleveland",
          "count": 15,
          "amount": 233347.69,
          "avgAge": 17,
          "urgency": "MEDIUM"
        },
        {
          "market": "Dayton",
          "count": 8,
          "amount": 140019.19,
          "avgAge": 15,
          "urgency": "MEDIUM"
        },
        {
          "market": "Knoxville",
          "count": 5,
          "amount": 105383.1,
          "avgAge": 36,
          "urgency": "HIGH"
        },
        {
          "market": "Nashville",
          "count": 3,
          "amount": 101915.08,
          "avgAge": 28,
          "urgency": "MEDIUM"
        },
        {
          "market": "Detroit Metro",
          "count": 3,
          "amount": 93909,
          "avgAge": 12,
          "urgency": "LOW"
        },
        {
          "market": "Cincinnati",
          "count": 4,
          "amount": 67609.82,
          "avgAge": 40,
          "urgency": "HIGH"
        },
        {
          "market": "DC Metro",
          "count": 3,
          "amount": 62809.77,
          "avgAge": 22,
          "urgency": "MEDIUM"
        },
        {
          "market": "Greenville",
          "count": 2,
          "amount": 36758.61,
          "avgAge": 20,
          "urgency": "MEDIUM"
        },
        {
          "market": "Raleigh",
          "count": 2,
          "amount": 27062.06,
          "avgAge": 21,
          "urgency": "MEDIUM"
        }
      ],
      "byRepTop15": [
        {
          "rep": "Frank Butts",
          "count": 7,
          "amount": 121625.24,
          "oldest": 34
        },
        {
          "rep": "Nick Junker",
          "count": 4,
          "amount": 107882.97,
          "oldest": 68
        },
        {
          "rep": "Sam Doyle",
          "count": 4,
          "amount": 106046.88,
          "oldest": 47
        },
        {
          "rep": "Derek Hastings",
          "count": 4,
          "amount": 85934.13,
          "oldest": 47
        },
        {
          "rep": "Sam Scorziell",
          "count": 3,
          "amount": 73664.75,
          "oldest": 69
        },
        {
          "rep": "Robert Beck",
          "count": 2,
          "amount": 65411.3,
          "oldest": 21
        },
        {
          "rep": "Kevin Ditty",
          "count": 2,
          "amount": 61920.08,
          "oldest": 32
        },
        {
          "rep": "Bill Applegate",
          "count": 2,
          "amount": 51890.65,
          "oldest": 60
        },
        {
          "rep": "Kyle Gibson",
          "count": 3,
          "amount": 50026.7,
          "oldest": 52
        },
        {
          "rep": "Sean Hickey",
          "count": 2,
          "amount": 48483.47,
          "oldest": 7
        },
        {
          "rep": "Justin Koenig",
          "count": 3,
          "amount": 47938.67,
          "oldest": 82
        },
        {
          "rep": "Andrew Coleman",
          "count": 2,
          "amount": 45039.39,
          "oldest": 46
        },
        {
          "rep": "Derrick Sieber",
          "count": 2,
          "amount": 43996.78,
          "oldest": 51
        },
        {
          "rep": "Trey Rury",
          "count": 1,
          "amount": 39995,
          "oldest": 41
        },
        {
          "rep": "Michael Marinelli",
          "count": 2,
          "amount": 39678.6,
          "oldest": 28
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
          82,
          "Insurance"
        ],
        [
          "Job-109530",
          "Paul Blizniuk",
          "Sam Scorziell",
          "Knoxville",
          "Pending Supplement",
          29945.74,
          69,
          "Insurance"
        ],
        [
          "Job-108536",
          "Carole Bertolini",
          "Nick Junker",
          "Columbus",
          "Accounting Kickback",
          24752.82,
          68,
          "Insurance"
        ],
        [
          "Job-110826",
          "Julie Landholt",
          "Bill Applegate",
          "Columbus",
          "Pending Supplement",
          11400.75,
          60,
          "Insurance"
        ],
        [
          "Job-110950",
          "Teddy Douglass",
          "Luke Allberry",
          "Columbus",
          "Pending Supplement",
          12839.86,
          59,
          "Insurance"
        ],
        [
          "Job-110961",
          "Rey Spinosa Brown",
          "Morgan King",
          "Columbus",
          "Pending Supplement",
          7916.87,
          54,
          "Insurance"
        ],
        [
          "Job-111122",
          "Dennis Whitlock",
          "Kyle Gibson",
          "Cincinnati",
          "Pending Supplement",
          24331.74,
          52,
          "Insurance"
        ],
        [
          "Job-111125",
          "Jerold fourman",
          "Kyle Gibson",
          "Cincinnati",
          "Pending Supplement",
          17478.75,
          52,
          "Insurance"
        ],
        [
          "Job-111238",
          "Lasean Gray",
          "Derrick Sieber",
          "DC Metro",
          "Pending Supplement",
          21251.56,
          51,
          "Retail-No Financing"
        ],
        [
          "Job-110498",
          "Wendell Thomas",
          "Sam Doyle",
          "Richmond",
          "Pending Supplement",
          32213.27,
          47,
          "Insurance"
        ],
        [
          "Job-111385",
          "Lauren Burwell",
          "Frank Drummond",
          "Columbus",
          "Pending Supplement",
          6237.55,
          47,
          "Insurance"
        ],
        [
          "Job-111453",
          "Ron Lowe",
          "Derek Hastings",
          "Dayton",
          "Pending Supplement",
          18331.98,
          47,
          "Insurance"
        ],
        [
          "Job-111541",
          "Kent Carringer",
          "Andrew Coleman",
          "Knoxville",
          "Pending Supplement",
          19218.03,
          46,
          "Retail-No Financing"
        ],
        [
          "Job-110010",
          "David Swift",
          "Sam Scorziell",
          "Columbus",
          "Pending Supplement",
          30679.32,
          42,
          "Insurance"
        ],
        [
          "Job-111161",
          "Gary Longberry",
          "Jacob Miller",
          "Columbus",
          "Pending Supplement",
          16640.48,
          42,
          "Insurance"
        ],
        [
          "Job-110964",
          "Shane Goodwin",
          "Trey Rury",
          "Nashville",
          "Pending Supplement",
          39995,
          41,
          "Insurance"
        ],
        [
          "Job-108336",
          "Debora Cruz",
          "Sam Doyle",
          "Richmond",
          "Pending Supplement",
          31629.98,
          40,
          "Insurance"
        ],
        [
          "Job-111806",
          "Shelby Jordan",
          "Storm Drumm",
          "Columbus",
          "Pending Supplement",
          13132,
          40,
          "Insurance"
        ],
        [
          "Job-111883",
          "Workneh Abate",
          "Micah Hayes",
          "Richmond",
          "Pending Supplement",
          9372.63,
          40,
          "Insurance"
        ],
        [
          "Job-112034",
          "Raymond Richardson",
          "Jacoby Taylor",
          "Cincinnati",
          "Pending Supplement",
          17583.12,
          39,
          "Insurance"
        ],
        [
          "Job-110692",
          "Daniel Crow",
          "David Walden",
          "Detroit Metro",
          "Pending Supplement",
          34483,
          35,
          "Retail-No Financing"
        ],
        [
          "Job-111743",
          "Norma Diaz",
          "Frank Butts",
          "Cleveland",
          "Pending Supplement",
          12694.99,
          34,
          "Insurance"
        ],
        [
          "Job-111944",
          "Beverly  Clabo",
          "Tim Washer",
          "Knoxville",
          "Pending Supplement",
          24600,
          34,
          "Insurance"
        ],
        [
          "Job-111624",
          "Keith Stella",
          "Griffin Gregory",
          "Greenville",
          "Pending Supplement",
          20400,
          33,
          "Insurance"
        ],
        [
          "Job-112042",
          "Bernard D Young Lesa A Young",
          "Kevin Ditty",
          "Nashville",
          "Pending Supplement",
          21921.52,
          32,
          "Insurance"
        ],
        [
          "Job-112324",
          "Katie Noel",
          "Justin Godde",
          "Raleigh",
          "Pending Supplement",
          14272.06,
          32,
          "Insurance"
        ],
        [
          "Job-112063",
          "Allison Davis",
          "Dylan Macdonald",
          "Richmond",
          "Pending Supplement",
          16515.08,
          31,
          "Insurance"
        ],
        [
          "Job-112130",
          "Sunitha Nandakumar",
          "Jake Caldwell",
          "Columbus",
          "Accounting Kickback",
          20486.41,
          31,
          "Insurance"
        ],
        [
          "Job-112765",
          "Jeremy Schmitter",
          "Sam Scorziell",
          "Columbus",
          "Pending Supplement",
          13039.69,
          31,
          "Insurance"
        ],
        [
          "Job-108537",
          "Gene & Sue Parsley",
          "Nick Junker",
          "Columbus",
          "Pending Supplement",
          35306.61,
          28,
          "Insurance"
        ],
        [
          "Job-111682",
          "Devin Rench",
          "Frank Butts",
          "Cleveland",
          "Pending Supplement",
          18570.44,
          28,
          "Insurance"
        ],
        [
          "Job-111695",
          "Matt Bame",
          "Michael Marinelli",
          "Columbus",
          "Pending Supplement",
          39178.6,
          28,
          "Insurance"
        ],
        [
          "Job-111729",
          "John Morgan",
          "Frank Butts",
          "Cleveland",
          "Accounting Kickback",
          18607.6,
          27,
          "Insurance"
        ],
        [
          "Job-111802",
          "Brian Horten",
          "Jim Zipp",
          "Cleveland",
          "Pending Supplement",
          8668.11,
          25,
          "Insurance"
        ],
        [
          "Job-112215",
          "Trish McMahon",
          "Dylan Macdonald",
          "Richmond",
          "Pending Supplement",
          20468.17,
          25,
          "Insurance"
        ],
        [
          "Job-112789",
          "Sandra Prior",
          "Andrew Coleman",
          "Knoxville",
          "Pending Supplement",
          25821.36,
          24,
          "Insurance"
        ],
        [
          "Job-112500",
          "Alfred Bachman",
          "Robert Beck",
          "Columbus",
          "Accounting Kickback",
          20000,
          21,
          "Insurance"
        ],
        [
          "Job-112846",
          "Amanda Herzog",
          "Christian Hill",
          "Dayton",
          "Pending Supplement",
          24257.06,
          21,
          "Insurance"
        ],
        [
          "Job-112925",
          "Thomas Blessing",
          "Derek Hastings",
          "Dayton",
          "Pending Supplement",
          18783.65,
          17,
          "Insurance"
        ],
        [
          "Job-113052",
          "George Low",
          "Michael Conley",
          "Dayton",
          "Accounting Kickback",
          12928,
          17,
          "Insurance"
        ],
        [
          "Job-113139",
          "Wanda Young",
          "Kyle Gibson",
          "Cincinnati",
          "Pending Supplement",
          8216.21,
          17,
          "Insurance"
        ],
        [
          "Job-112569",
          "Rosemary Renn",
          "Rob Blackmore",
          "Columbus",
          "Accounting Kickback",
          5207.42,
          13,
          "Retail-No Financing"
        ],
        [
          "Job-113239",
          "John Kasperek",
          "Frank Butts",
          "Cleveland",
          "Pending Supplement",
          14601.92,
          13,
          "Insurance"
        ],
        [
          "Job-113211",
          "Grace Hughes",
          "Bryce Fink",
          "Cleveland",
          "Pending Supplement",
          26293.8,
          12,
          "Insurance"
        ],
        [
          "Job-113293",
          "Lillian & Vince  Welch",
          "Nate Boyer",
          "Cleveland",
          "Pending Supplement",
          12961.71,
          12,
          "Insurance"
        ],
        [
          "Job-113674",
          "Cara Tomasino",
          "Daniel Beyer",
          "Richmond",
          "Pending Supplement",
          10777.47,
          11,
          "Insurance"
        ],
        [
          "Job-102549",
          "Ron & Angie Zurawski",
          "Kevin Ditty",
          "Nashville",
          "Accounting Kickback",
          39998.56,
          11,
          "Retail-Financing"
        ],
        [
          "Job-112022",
          "Barb Holliday",
          "Zachary Schneider",
          "Columbus",
          "Accounting Kickback",
          14400,
          10,
          "Insurance"
        ],
        [
          "Job-112861",
          "Giorgio bittoni",
          "Robert Beck",
          "Columbus",
          "Pending Supplement",
          45411.3,
          10,
          "Insurance"
        ],
        [
          "Job-113193",
          "Vladimir Bogatov",
          "Matthew Mabe",
          "Raleigh",
          "Pending Supplement",
          12790,
          10,
          "Insurance"
        ],
        [
          "Job-113265",
          "Shirley Robinson",
          "Derek Hastings",
          "Dayton",
          "Pending Supplement",
          14880.43,
          10,
          "Insurance"
        ],
        [
          "Job-112075",
          "Vadivel Kumaresan",
          "Derrick Sieber",
          "DC Metro",
          "Pending Supplement",
          22745.22,
          7,
          "Insurance"
        ],
        [
          "Job-112213",
          "Winnie  Chen",
          "Sean Hickey",
          "Richmond",
          "Pending Supplement",
          25395.56,
          7,
          "Insurance"
        ],
        [
          "Job-112987",
          "Sharry Carey",
          "Jorge Jimenez",
          "Columbus",
          "Ready to Invoice",
          13351,
          7,
          "Retail-Financing"
        ],
        [
          "Job-113083",
          "Joseph Deyarmon",
          "Mark Daggett",
          "Columbus",
          "Accounting Kickback",
          19333,
          7,
          "Retail-Financing"
        ],
        [
          "Job-113109",
          "Kelly Valenta",
          "Sam Doyle",
          "Richmond",
          "Pending Supplement",
          24455.73,
          7,
          "Insurance"
        ],
        [
          "Job-113273",
          "Thomas Coleman",
          "Sam Doyle",
          "Richmond",
          "Pending Supplement",
          17747.9,
          7,
          "Insurance"
        ],
        [
          "Job-113286",
          "Louis Kaltenstein",
          "Justin Koenig",
          "Cleveland",
          "Accounting Kickback",
          10709.29,
          7,
          "Insurance"
        ],
        [
          "Job-113328",
          "Bassem Houssami",
          "Jacob Conway",
          "DC Metro",
          "Ready to Invoice",
          18812.99,
          7,
          "Insurance"
        ],
        [
          "Job-113681",
          "Pamela Bailey Brian Bailey",
          "Luca Benedetti",
          "Richmond",
          "Accounting Kickback",
          18111.63,
          7,
          "Insurance"
        ],
        [
          "Job-113746",
          "Jeanine - Carol Hernandez",
          "Sean Hickey",
          "Richmond",
          "Pending Supplement",
          23087.91,
          7,
          "Insurance"
        ],
        [
          "Job-113747",
          "Dan Fancy",
          "Hunter Carrington Scott",
          "Richmond",
          "Pending Supplement",
          13309.03,
          7,
          "Insurance"
        ],
        [
          "Job-112900",
          "Rickey D Thomas Shirley D Thomas",
          "Cody Mitchell",
          "Greenville",
          "Accounting Kickback",
          16358.61,
          6,
          "Retail-Financing"
        ],
        [
          "Job-113283",
          "DeWyatt Oneal",
          "Frank Butts",
          "Cleveland",
          "Pending Supplement",
          13896.39,
          6,
          "Insurance"
        ],
        [
          "Job-113381",
          "Chad W And Jeri Spencer",
          "Jacob Perry",
          "Knoxville",
          "Accounting Kickback",
          5797.97,
          6,
          "Insurance"
        ],
        [
          "Job-112337",
          "Judith M Bond",
          "Storm Drumm",
          "Columbus",
          "Accounting Kickback",
          14211,
          5,
          "Insurance"
        ],
        [
          "Job-111877",
          "Thomas & Mary Brady",
          "Storm Drumm",
          "Columbus",
          "Accounting Kickback",
          3200,
          4,
          "Retail-No Financing"
        ],
        [
          "Job-112796",
          "Jon Fromm",
          "Bill Applegate",
          "Columbus",
          "Pending Supplement",
          40489.9,
          4,
          "Insurance"
        ],
        [
          "Job-112914",
          "Chiaothong Yong",
          "Nick Junker",
          "Columbus",
          "Pending Supplement",
          20277.54,
          4,
          "Insurance"
        ],
        [
          "Job-113333",
          "Paula Granville",
          "Frank Butts",
          "Cleveland",
          "Pending Supplement",
          12555.5,
          4,
          "Insurance"
        ],
        [
          "Job-113662",
          "Ruth Bernard",
          "Michael Conley",
          "Dayton",
          "Accounting Kickback",
          16400,
          4,
          "Insurance"
        ],
        [
          "Job-113591",
          "Jenny Brady",
          "Zachary Schneider",
          "Columbus",
          "Accounting Kickback",
          9172.5,
          3,
          "Insurance"
        ],
        [
          "Job-113150",
          "Jasvir Kaur",
          "Brian Ogrin",
          "Columbus",
          "Ready to Invoice",
          11361.62,
          2,
          "Insurance"
        ],
        [
          "Job-105173",
          "John Koslosky",
          "Frank Butts",
          "Cleveland",
          "Ready to Invoice",
          30698.4,
          0,
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
          "Job-111331",
          "Bob Dacey",
          "Donald Richard",
          "Detroit Metro",
          "Ready to Invoice",
          33854,
          0,
          "Insurance"
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
          "Job-112007",
          "Jay Pepper",
          "Gabe Baker",
          "Columbus",
          "Ready to Invoice",
          14113,
          0,
          "Insurance"
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
          "Job-112797",
          "Nishit Jhaveri",
          "Dave Norris",
          "Columbus",
          "Ready to Invoice",
          5342.63,
          0,
          "Insurance"
        ],
        [
          "Job-113045",
          "Ann Radjewski",
          "Luke Duquette",
          "Detroit Metro",
          "Ready to Invoice",
          25572,
          0,
          "Insurance"
        ],
        [
          "Job-113132",
          "Dana Neumann",
          "Nate Boyer",
          "Cleveland",
          "Ready to Invoice",
          12028.51,
          0,
          "Insurance"
        ],
        [
          "Job-113135",
          "Janis Yoder",
          "Nate Boyer",
          "Cleveland",
          "Ready to Invoice",
          3831.65,
          0,
          "Insurance"
        ],
        [
          "Job-113153",
          "Jean Mager",
          "Nick Junker",
          "Columbus",
          "Ready to Invoice",
          27546,
          0,
          "Retail-No Financing"
        ],
        [
          "Job-113404",
          "Jim Kilgore",
          "Brian Ogrin",
          "Columbus",
          "Ready to Invoice",
          14247.31,
          0,
          "Insurance"
        ],
        [
          "Job-113493",
          "Carol Stanton",
          "Derik Heinz",
          "Columbus",
          "Ready to Invoice",
          14107,
          0,
          "Insurance"
        ],
        [
          "Job-113770",
          "Jennifer Esposito-Hatina",
          "Justin Koenig",
          "Cleveland",
          "Ready to Invoice",
          37029.38,
          0,
          "Insurance"
        ],
        [
          "Job-114425",
          "Joy And Mathew  Kapas",
          "Amanda Wade",
          "Columbus",
          "Ready to Invoice",
          500,
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
      "recent4WkAvg": 624057.95
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
          "liveActual": 11214762.41
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
        "Sales Trajectory: Monthly sales moved from January $3.26M to June $2.44M (-25%). Annualized run rate: $92.96M.",
        "Premium Deal Types: Insurance averages $20,526 per deal. Retail-Financing averages $20,980 (highest per-deal value). Retail-No Financing averages $12,445 (the volume engine).",
        "Sold Conversion: 2,317 of 2,448 signed contracts (94.6%) have made it to Sold status for $37.61M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Kickback Concentration: Cleveland has the most kickbacks (15, $268K). Total company kickbacks: 39 worth $852K.",
        "Production Review Queue: 87 deals worth $1.97M sitting in Production Review. Watch for backlog growth, it delays revenue recognition."
      ],
      "criticalRisks": [
        "Cleveland Kickback Concentration drives the company's largest single-market rework volume.",
        "$1.64M sitting unbilled in Completed Jobs (89 jobs averaging 21 days; 4 jobs are 60+ days/$66K).",
        "Pending Supplements aging: 54 supplement jobs ($1.10M), avg 27 days.",
        "Accounting Kickbacks blocking $277K (19 completed jobs).",
        "Pipeline kickbacks company-wide: 39 kickbacks totaling $852K.",
        "Production Review backlog: 87 deals ($1.97M)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 4d median close on 1,379 retail deals.",
        "Insurance Density: $20,526 avg on 857 deals = $17.59M; +20% lift = ~$3.52M.",
        "June repair rate at 8.8% vs YTD 13.7%, correction in latest month.",
        "Financing Lifts Ticket: Retail-Financing averages $20,980, highest per-deal value."
      ],
      "fixList": [
        "Cleveland Pipeline Kickback Intervention, pull every kickback and categorize root cause.",
        "Supplement Follow-Up Process, 54 supplement jobs ($1.10M).",
        "Accounting Kickback Root Causes, 19 jobs ($277K), need a Kickback Reason field.",
        "Production Review Bottleneck, 87 deals; add temporary PM capacity.",
        "Financing Push, 224 financing deals YTD (9.2%) at $20,980 avg. Target 15% mix."
      ],
      "actionPlan": {
        "thisWeek": [
          "Invoice Immediately: $262K, 15 jobs marked Ready to Invoice.",
          "Escalate 60+ Day Jobs: $66K, 4 jobs are 60+ days unbilled.",
          "Accounting Kickback Blitz: $277K, 19 jobs kicked back; cross-functional meeting w/ accounting + sales ops.",
          "Cleveland Pipeline Kickback Review, meet with branch leadership.",
          "Production Review Surge Plan, 87 deals ($1.97M) in queue."
        ],
        "thisMonth": [
          "Supplement Escalation SOP, 7/14/30 day cadence with carrier escalation.",
          "Completed-to-Billing SLA, 100% invoiced within 21 days.",
          "Repair Triage Pilot in markets where repair rate exceeds 25%.",
          "Financing Training, peer training led by top financing reps. Target 15% mix."
        ],
        "thisQuarter": [
          "Add Kickback Reason field to accounting workflow.",
          "Repair Business Decision, 336 repairs YTD at ~$1,780 avg.",
          "Ops Capacity Planning, June hit 125 deals; summer typically exceeds spring."
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
      "totalJobs": 656,
      "totalWOs": 985,
      "portfolioValue": 14476292.63,
      "avgDaysInStatus": 12,
      "lastBuild": "2026-06-08T19:15:58.774Z"
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
        "value": "656",
        "sub": "985 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "143",
        "sub": "21.8% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "513",
        "sub": "78.2% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "82",
        "sub": "57.3% of In Progress",
        "tone": "crit"
      },
      {
        "label": "Avg Days in Status",
        "value": "12",
        "sub": "Job-level average",
        "tone": "warn"
      },
      {
        "label": "Total Portfolio Value",
        "value": "$14.48M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$2.24M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$2.38M",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "82",
        "sub": "57.3% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$2.38M",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "100",
        "sub": "Across 82 jobs",
        "tone": "info"
      },
      {
        "label": "RTS Ready Today",
        "value": "43",
        "sub": "No blocker, dispatch now",
        "tone": "good"
      },
      {
        "label": "Top Trailing Trade",
        "value": "Gutters",
        "sub": "56 open WOs / 56 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "320",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "232",
        "sub": "72.5% of all holds",
        "tone": "warn"
      },
      {
        "label": "Pending Sales",
        "value": "29",
        "sub": "Awaiting sales disposition",
        "tone": "warn"
      },
      {
        "label": "Avg Hold Age",
        "value": "21d",
        "sub": "Mean days in hold across all sub-statuses",
        "tone": "info"
      }
    ],
    "kpisSales": [
      {
        "label": "Active Reps",
        "value": "115",
        "sub": "Reps with at least one open WO",
        "tone": "info"
      },
      {
        "label": "Stuck Value >30d",
        "value": "$2.24M",
        "sub": "Sum of stale value across all reps",
        "tone": "crit"
      },
      {
        "label": "Reps with Stuck Work",
        "value": "49",
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
        "value": "513",
        "sub": "78.2% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$10.78M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "259d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Columbus",
        "sub": "247 jobs (48.1% of backlog)",
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
              320,
              304,
              200,
              99,
              39,
              21,
              2
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
          "Nashville",
          "Richmond",
          "Grand Rapids",
          "Dayton",
          "Cincinnati",
          "Greenville",
          "Raleigh",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              39,
              15,
              11,
              15,
              3,
              6,
              0,
              3,
              4,
              1,
              1,
              1
            ]
          },
          {
            "label": "Open",
            "data": [
              26,
              9,
              7,
              4,
              3,
              3,
              3,
              4,
              1,
              1,
              1,
              0
            ]
          },
          {
            "label": "On Hold",
            "data": [
              142,
              73,
              49,
              15,
              8,
              7,
              8,
              6,
              4,
              5,
              1,
              2
            ]
          },
          {
            "label": "RTS",
            "data": [
              176,
              52,
              39,
              7,
              5,
              1,
              11,
              1,
              6,
              3,
              2,
              1
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              59,
              14,
              28,
              25,
              19,
              16,
              3,
              9,
              8,
              4,
              7,
              8
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
          "Pending Estimate Approval",
          "Scheduled",
          "In Progress"
        ],
        "datasets": [
          {
            "label": "Avg Days",
            "data": [
              25,
              21,
              15,
              12,
              12,
              8,
              1
            ]
          },
          {
            "label": "Max Days",
            "data": [
              91,
              269,
              74,
              174,
              13,
              115,
              12
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
          "Flat Roof",
          "Painting",
          "GAF Solar",
          "Insulation",
          "Carpentry"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              78,
              9,
              7,
              2,
              2,
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
              472,
              255,
              96,
              16,
              13,
              12,
              8,
              5,
              3,
              3,
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
          "In Progress",
          "Requires Additional Service"
        ],
        "datasets": [
          {
            "label": "WOs",
            "data": [
              43,
              26,
              21,
              6,
              4
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
              47,
              8,
              19,
              12,
              4,
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
          "DC Metro",
          "Grand Rapids",
          "Richmond",
          "Dayton",
          "Cincinnati",
          "Knoxville",
          "Raleigh",
          "Greenville"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              247,
              91,
              65,
              22,
              21,
              15,
              11,
              10,
              10,
              8,
              7,
              6
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
            442,
            39,
            142,
            176,
            59,
            16,
            10,
            101,
            300,
            6654402.09
          ],
          [
            "Detroit Metro",
            163,
            15,
            73,
            52,
            14,
            6,
            3,
            68,
            116,
            2636067.21
          ],
          [
            "Cleveland",
            134,
            11,
            49,
            39,
            28,
            4,
            3,
            43,
            81,
            1564872.2
          ],
          [
            "DC Metro",
            66,
            15,
            15,
            7,
            25,
            4,
            0,
            3,
            36,
            986188.77
          ],
          [
            "Nashville",
            38,
            3,
            8,
            5,
            19,
            1,
            2,
            0,
            28,
            572085.69
          ],
          [
            "Richmond",
            33,
            6,
            7,
            1,
            16,
            3,
            0,
            0,
            20,
            767387.24
          ],
          [
            "Grand Rapids",
            25,
            0,
            8,
            11,
            3,
            1,
            2,
            7,
            18,
            288822.72
          ],
          [
            "Dayton",
            23,
            3,
            6,
            1,
            9,
            2,
            0,
            4,
            16,
            301235.99
          ],
          [
            "Cincinnati",
            23,
            4,
            4,
            6,
            8,
            1,
            0,
            2,
            15,
            307223.79
          ],
          [
            "Greenville",
            14,
            1,
            5,
            3,
            4,
            1,
            0,
            4,
            8,
            113702.43
          ],
          [
            "Raleigh",
            12,
            1,
            1,
            2,
            7,
            0,
            1,
            0,
            9,
            149237.36
          ],
          [
            "Knoxville",
            12,
            1,
            2,
            1,
            8,
            0,
            0,
            0,
            9,
            135067.14
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
            223,
            13,
            230
          ],
          [
            "Pending Material",
            48,
            26,
            249
          ],
          [
            "Pending Sales",
            28,
            51,
            269
          ],
          [
            "Homeowner Request",
            17,
            61,
            259
          ],
          [
            "Pending HOA",
            3,
            16,
            26
          ],
          [
            "Pending Deposit",
            1,
            28,
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
            56,
            56,
            1527530.83
          ],
          [
            "Siding",
            16,
            16,
            348187.63
          ],
          [
            "Roofing",
            8,
            8,
            277101.4
          ],
          [
            "Masonry",
            6,
            6,
            222811.08
          ],
          [
            "Metal",
            6,
            6,
            342247.95
          ],
          [
            "Rack Mounted Solar",
            4,
            4,
            194912.25
          ],
          [
            "Insulation",
            1,
            1,
            21849
          ],
          [
            "Windows",
            1,
            1,
            6234.49
          ],
          [
            "Painting",
            1,
            1,
            30537.14
          ],
          [
            "Electrical",
            1,
            1,
            10988
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
            "On Hold",
            77
          ],
          [
            "Scheduled",
            41
          ],
          [
            "Completed",
            9
          ],
          [
            "In Progress",
            6
          ],
          [
            "Requires Additional Service",
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
            550,
            78,
            472,
            542,
            12677662.25
          ],
          [
            "Gutters",
            264,
            9,
            255,
            263,
            6106599.47
          ],
          [
            "Siding",
            103,
            7,
            96,
            102,
            1866352.28
          ],
          [
            "Masonry",
            18,
            2,
            16,
            18,
            581202.15
          ],
          [
            "Metal",
            15,
            2,
            13,
            14,
            892125.32
          ],
          [
            "Windows",
            12,
            0,
            12,
            12,
            212522.19
          ],
          [
            "Rack Mounted Solar",
            8,
            0,
            8,
            7,
            329004.61
          ],
          [
            "Electrical",
            5,
            0,
            5,
            5,
            118995.07
          ],
          [
            "Flat Roof",
            4,
            1,
            3,
            4,
            104186
          ],
          [
            "Painting",
            3,
            0,
            3,
            3,
            155973.75
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
            21849
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
            15
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
            6,
            3,
            239596.83,
            2,
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
            "Scott Scaperato",
            28,
            16,
            109713.38,
            10,
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
            "Mark Daggett",
            13,
            10,
            100305,
            3,
            1
          ],
          [
            "Cole Burgess",
            29,
            21,
            99060,
            6,
            1
          ],
          [
            "Brian Ogrin",
            31,
            19,
            98359.43,
            6,
            1
          ],
          [
            "Gary Benedict Jr",
            14,
            10,
            89351.42,
            1,
            1
          ],
          [
            "Jake Caldwell",
            13,
            10,
            85759.95,
            2,
            1
          ],
          [
            "Robert Beck",
            19,
            13,
            80492.13,
            1,
            1
          ],
          [
            "Matthew Ross",
            20,
            13,
            76181,
            3,
            2
          ],
          [
            "Storm Drumm",
            35,
            20,
            71731,
            3,
            1
          ],
          [
            "Kevin Ditty",
            9,
            6,
            63618.27,
            4,
            1
          ],
          [
            "Donald Richard",
            15,
            12,
            47214,
            3,
            1
          ],
          [
            "Luca Benedetti",
            7,
            4,
            44222.07,
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
            247,
            5297427.38,
            104
          ],
          [
            "Detroit Metro",
            91,
            1898938.69,
            259
          ],
          [
            "Cleveland",
            65,
            1193216.93,
            52
          ],
          [
            "Nashville",
            22,
            450938.54,
            39
          ],
          [
            "DC Metro",
            21,
            536881.41,
            91
          ],
          [
            "Grand Rapids",
            15,
            236186.47,
            28
          ],
          [
            "Richmond",
            11,
            491831.41,
            110
          ],
          [
            "Dayton",
            10,
            205045.34,
            19
          ],
          [
            "Cincinnati",
            10,
            174947.99,
            87
          ],
          [
            "Knoxville",
            8,
            111867.14,
            21
          ],
          [
            "Raleigh",
            7,
            127398.87,
            39
          ],
          [
            "Greenville",
            6,
            53935.72,
            5
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
            259,
            44826
          ],
          [
            "Job-108163",
            "Mayank Srivastava",
            "Richmond",
            "Roofing",
            "Pending Sales",
            "Luca Benedetti",
            110,
            29205.81
          ],
          [
            "Job-108368",
            "Jason And Jamie Russel",
            "Columbus",
            "Gutters",
            "Homeowner Request",
            "Bill Applegate",
            104,
            3241.17
          ],
          [
            "Job-108783",
            "Susie Kelly",
            "Detroit Metro",
            "Gutters",
            "",
            "Gary Holm",
            96,
            9000
          ],
          [
            "Job-108962",
            "Kent Mccullough",
            "DC Metro",
            "Roofing",
            "Pending Permit",
            "Derrick Sieber",
            91,
            20300
          ],
          [
            "Job-106057",
            "David Wedig",
            "Cincinnati",
            "Roofing",
            "",
            "Wes McCorkle",
            87,
            19675.69
          ],
          [
            "Job-109681",
            "George Potts",
            "DC Metro",
            "Roofing",
            "Pending Sales",
            "Dan Haske",
            82,
            24567
          ],
          [
            "Job-099374",
            "Good Shepard Baptist Church",
            "Richmond",
            "Metal",
            "Pending Material",
            "Hunter Carrington Scott",
            73,
            239596.83
          ],
          [
            "Job-109426",
            "Karen Sahijdak",
            "Detroit Metro",
            "Roofing",
            "Homeowner Request",
            "James Cole Dionisi",
            68,
            36148
          ],
          [
            "Job-110755",
            "Brian Whitney",
            "Columbus",
            "Roofing",
            "Homeowner Request",
            "Jake Caldwell",
            63,
            41272.39
          ],
          [
            "Job-111056",
            "Suzanne Strawser",
            "Columbus",
            "Metal",
            "",
            "Zachary Schneider",
            61,
            3200
          ],
          [
            "Job-109698",
            "Don Wright",
            "Detroit Metro",
            "Roofing",
            "Pending Sales",
            "Matthew Ross",
            59,
            38862
          ],
          [
            "Job-108540",
            "Robert Jurczysyzn",
            "Detroit Metro",
            "Masonry",
            "",
            "Donald Richard",
            56,
            3000
          ],
          [
            "Job-111444",
            "James Sharples",
            "Detroit Metro",
            "Roofing",
            "Pending Permit",
            "Richard Rice",
            56,
            12718
          ],
          [
            "Job-109118",
            "Joshua Vandixhorn",
            "Columbus",
            "Roofing",
            "Pending Material",
            "Evan Kelley",
            55,
            27521
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Columbus",
          "permits": 101
        },
        {
          "branch": "Detroit Metro",
          "permits": 68
        },
        {
          "branch": "Cleveland",
          "permits": 43
        },
        {
          "branch": "Grand Rapids",
          "permits": 7
        },
        {
          "branch": "Dayton",
          "permits": 4
        },
        {
          "branch": "Greenville",
          "permits": 4
        },
        {
          "branch": "DC Metro",
          "permits": 3
        },
        {
          "branch": "Cincinnati",
          "permits": 2
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $2.38M of trapped partial-job revenue into billable revenue, reduce $2.24M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Dispatch the 43 RTS WOs sitting on partial jobs. No blocker, no hold, just dispatch.",
        "Re-dispatch the 21 RAS WOs (oldest at 74 days). These are pure re-work fastballs.",
        "Gutters sweep: 56 open WOs across 56 partial jobs blocking $1.53M. Highest single-trade leverage in the book.",
        "Columbus permit sweep: 101 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one.",
        "Close out the 5 zombie jobs (all WOs Completed, parent still In Progress). Pure paperwork."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Gutters): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 513 jobs ($10.78M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $2.38M, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  }
};
