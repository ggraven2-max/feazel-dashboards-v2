/* AUTO-GENERATED — do not edit. Generated 2026-05-05T13:47:36.393Z (residential) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-05-05T13:47:36.393Z",
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
        "elapsedMs": 53,
        "builtAt": "2026-05-05T13:47:36.393Z"
      },
      {
        "id": "sales-overview",
        "version": "1.0-rules-encoded",
        "elapsedMs": 148,
        "builtAt": "2026-05-05T13:47:36.393Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-locked-2026-04-19-shell-1.0",
        "elapsedMs": 35,
        "builtAt": "2026-05-05T13:47:36.393Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 48,
        "builtAt": "2026-05-05T13:47:36.393Z"
      }
    ]
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 06, 2026 - May 04, 2026 - De-Duplicated at Job Level - 1,096 Jobs - 14 Markets - 28 PMs",
    "generated": "2026-05-05",
    "headerMeta": {
      "trueRevenue": 20539478.28,
      "uniqueJobs": 1096,
      "markets": 14,
      "pms": 28,
      "medianComplete": 23.6,
      "avgStart": 28.4,
      "multiTradeJobs": 303,
      "singleTradeJobs": 793,
      "multiTradePct": 27.6,
      "lastBuild": "2026-05-05T13:47:36.392Z"
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
        "value": "$20.54M",
        "sub": "1,096 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$18,740",
        "sub": "Per job (deduped)"
      },
      {
        "label": "Median Days to Complete",
        "value": "23.6d",
        "sub": "Job-level median"
      },
      {
        "label": "Avg Days to Start",
        "value": "28.4d",
        "sub": "Sale to crew on-site"
      },
      {
        "label": "Multi-Trade Jobs",
        "value": "303",
        "sub": "27.6% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "793",
        "sub": "72.4% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$26,552",
        "sub": "+68.5% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$15,756",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+31.0d",
        "sub": "MT 48.7d vs ST 17.6d"
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
        "start": 33.7
      },
      {
        "m": "2026-04",
        "label": "April",
        "key": "2026-04",
        "rev": 7855768.45,
        "jobs": 442,
        "med": 17.6,
        "start": 25
      },
      {
        "m": "2026-05",
        "label": "May",
        "key": "2026-05",
        "rev": 806568.2,
        "jobs": 33,
        "med": 29.7,
        "start": 20.9
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
              7855768.45,
              806568.2
            ]
          },
          {
            "label": "Jobs",
            "data": [
              147,
              139,
              335,
              442,
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
              29.7
            ]
          },
          {
            "label": "Avg Days to Start",
            "data": [
              25.2,
              32.9,
              33.7,
              25,
              20.9
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
              303
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              793
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
              200,
              20,
              15,
              11,
              10,
              10,
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
          "Knoxville",
          "Greenville",
          "Cleveland",
          "NOVA",
          "Greensboro",
          "Grand Rapids"
        ],
        "datasets": [
          {
            "label": "MT %",
            "data": [
              25.7,
              26.8,
              30.1,
              30.6,
              21.8,
              28.1,
              15.8,
              35.7,
              35.2,
              22.2,
              32.7,
              41.7,
              100,
              50
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
          "Knoxville",
          "Greenville",
          "Cleveland",
          "NOVA",
          "Greensboro",
          "Grand Rapids"
        ],
        "datasets": [
          {
            "label": "MT Median",
            "data": [
              70.6,
              45.4,
              29.6,
              40.5,
              56.4,
              50.1,
              64.4,
              60,
              28.5,
              38,
              32.9,
              66.6,
              346.7,
              31.6
            ]
          },
          {
            "label": "ST Median",
            "data": [
              11.7,
              21.5,
              18.7,
              22.6,
              25.6,
              20.1,
              24.6,
              10.1,
              17.5,
              20.7,
              16.6,
              32.6,
              0,
              20.6
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
          "Knoxville",
          "Greenville",
          "Cleveland",
          "NOVA",
          "Greensboro",
          "Grand Rapids"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              6067186.34,
              2382691.6,
              2378079.88,
              1599195.46,
              1366634.79,
              1338278.34,
              1283819.06,
              1098540.29,
              1022490.26,
              742330.19,
              739335.69,
              469773.97,
              33694.41,
              17428
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
          "Knoxville",
          "Greenville",
          "Cleveland",
          "NOVA",
          "Greensboro",
          "Grand Rapids"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              18.6,
              28.5,
              22.6,
              26.6,
              30.6,
              29.1,
              28.5,
              25.1,
              23.1,
              22.5,
              22.6,
              54,
              346.7,
              26.1
            ]
          }
        ]
      },
      {
        "id": "ch_pm_top",
        "labels": [
          "Eric Isakov",
          "Joseph Yager",
          "Mason Bryant",
          "Brandon Harter",
          "Kaden Carter",
          "Landon Little",
          "Richard Williams",
          "Alejandro Alvarado",
          "Galo Munive",
          "Joseph Jones",
          "Abraham Santiago",
          "Brandon Skrzypek",
          "Alex Dubanoski",
          "Levi Nieman",
          "Shawn Oehlstrom"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              1572998.11,
              1423904.74,
              1422121.98,
              1299220.81,
              1290221.45,
              1087074.73,
              997296.89,
              988499.75,
              933971.09,
              904950.52,
              887769.55,
              873539.38,
              853571.24,
              830819.42,
              717468.7
            ]
          }
        ]
      },
      {
        "id": "ch_pm_scatter",
        "labels": [
          "Eric Isakov",
          "Joseph Yager",
          "Mason Bryant",
          "Brandon Harter",
          "Kaden Carter",
          "Landon Little",
          "Richard Williams",
          "Alejandro Alvarado",
          "Galo Munive",
          "Joseph Jones",
          "Abraham Santiago",
          "Brandon Skrzypek",
          "Alex Dubanoski",
          "Levi Nieman",
          "Shawn Oehlstrom",
          "Brady Weingartner",
          "Jason Andrews",
          "Cody Mitchell",
          "Drew Bailey",
          "Austin Weingartner",
          "Chad Williams",
          "Daniel Galli",
          "Adam Marrero",
          "(Unassigned)",
          "Neil Laux",
          "Michael Blevins",
          "Justin Milliron",
          "Chris Atkins"
        ],
        "datasets": [
          {
            "label": "PMs",
            "data": [
              {
                "x": 29.5,
                "y": 1572998.11,
                "wos": 76,
                "name": "Eric Isakov"
              },
              {
                "x": 30.6,
                "y": 1423904.74,
                "wos": 111,
                "name": "Joseph Yager"
              },
              {
                "x": 25.6,
                "y": 1422121.98,
                "wos": 91,
                "name": "Mason Bryant"
              },
              {
                "x": 24.1,
                "y": 1299220.81,
                "wos": 67,
                "name": "Brandon Harter"
              },
              {
                "x": 29.5,
                "y": 1290221.45,
                "wos": 73,
                "name": "Kaden Carter"
              },
              {
                "x": 30.5,
                "y": 1087074.73,
                "wos": 67,
                "name": "Landon Little"
              },
              {
                "x": 40.6,
                "y": 997296.89,
                "wos": 75,
                "name": "Richard Williams"
              },
              {
                "x": 25.4,
                "y": 988499.75,
                "wos": 75,
                "name": "Alejandro Alvarado"
              },
              {
                "x": 35.5,
                "y": 933971.09,
                "wos": 73,
                "name": "Galo Munive"
              },
              {
                "x": 22.1,
                "y": 904950.52,
                "wos": 67,
                "name": "Joseph Jones"
              },
              {
                "x": 26.6,
                "y": 887769.55,
                "wos": 43,
                "name": "Abraham Santiago"
              },
              {
                "x": 32.5,
                "y": 873539.38,
                "wos": 44,
                "name": "Brandon Skrzypek"
              },
              {
                "x": 13.1,
                "y": 853571.24,
                "wos": 61,
                "name": "Alex Dubanoski"
              },
              {
                "x": 29.7,
                "y": 830819.42,
                "wos": 48,
                "name": "Levi Nieman"
              },
              {
                "x": 22.6,
                "y": 717468.7,
                "wos": 79,
                "name": "Shawn Oehlstrom"
              },
              {
                "x": 26.7,
                "y": 717172.16,
                "wos": 37,
                "name": "Brady Weingartner"
              },
              {
                "x": 28.6,
                "y": 655083.8,
                "wos": 83,
                "name": "Jason Andrews"
              },
              {
                "x": 24,
                "y": 533173.92,
                "wos": 23,
                "name": "Cody Mitchell"
              },
              {
                "x": 5.6,
                "y": 466515.14,
                "wos": 124,
                "name": "Drew Bailey"
              },
              {
                "x": 32.5,
                "y": 449077.95,
                "wos": 27,
                "name": "Austin Weingartner"
              },
              {
                "x": 65.5,
                "y": 371407.44,
                "wos": 37,
                "name": "Chad Williams"
              },
              {
                "x": 69.7,
                "y": 359460.88,
                "wos": 36,
                "name": "Daniel Galli"
              },
              {
                "x": 20.6,
                "y": 299173.44,
                "wos": 17,
                "name": "Adam Marrero"
              },
              {
                "x": 28.1,
                "y": 168146.65,
                "wos": 22,
                "name": "(Unassigned)"
              },
              {
                "x": 52.6,
                "y": 122527.24,
                "wos": 8,
                "name": "Neil Laux"
              },
              {
                "x": 16.1,
                "y": 96019.14,
                "wos": 7,
                "name": "Michael Blevins"
              },
              {
                "x": 107.5,
                "y": 68552.43,
                "wos": 9,
                "name": "Justin Milliron"
              },
              {
                "x": 70.5,
                "y": 22831,
                "wos": 5,
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
          "Rack Mounted Solar",
          "Painting",
          "Electrical",
          "Flat Roof",
          "GAF Solar",
          "Other",
          "Unspecified",
          "Door"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              15323619.88,
              2977274.41,
              895672.55,
              378035.09,
              359655.52,
              257320.04,
              111849.55,
              98078.62,
              39423.33,
              32090.81,
              31695,
              27673.83,
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
          "Rack Mounted Solar",
          "Painting",
          "Electrical",
          "Flat Roof",
          "GAF Solar",
          "Other",
          "Unspecified",
          "Door"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              23.7,
              35.6,
              59.4,
              148.6,
              84,
              105.6,
              61.1,
              108.6,
              76.1,
              149.7,
              84.7,
              43.7,
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
          "Kayla Wright",
          "Brenda Dixon"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              339,
              248,
              234,
              145,
              100,
              17,
              6,
              7
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
          "Kayla Wright",
          "Brenda Dixon"
        ],
        "datasets": [
          {
            "label": "Median Complete",
            "data": [
              33.5,
              23.6,
              12,
              27.5,
              24.6,
              117.4,
              103.2,
              25.4
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
          "Kayla Wright",
          "Brenda Dixon"
        ],
        "datasets": [
          {
            "label": "MT %",
            "data": [
              33.9,
              30.2,
              14.5,
              29,
              22,
              64.7,
              33.3,
              28.6
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
          "Kayla Wright",
          "Brenda Dixon"
        ],
        "datasets": [
          {
            "label": "Creators",
            "data": [
              {
                "x": 33.5,
                "y": 19883.05,
                "jobs": 339,
                "name": "Brandon Vera"
              },
              {
                "x": 23.6,
                "y": 22492.76,
                "jobs": 248,
                "name": "David Schwan"
              },
              {
                "x": 12,
                "y": 14283.16,
                "jobs": 234,
                "name": "Amanda Wade"
              },
              {
                "x": 27.5,
                "y": 17647.96,
                "jobs": 145,
                "name": "Bradley Essex"
              },
              {
                "x": 24.6,
                "y": 15682.61,
                "jobs": 100,
                "name": "Thomas Hayes"
              },
              {
                "x": 117.4,
                "y": 25689.43,
                "jobs": 17,
                "name": "Morgan Valois"
              },
              {
                "x": 103.2,
                "y": 30826.69,
                "jobs": 6,
                "name": "Kayla Wright"
              },
              {
                "x": 25.4,
                "y": 18537.8,
                "jobs": 7,
                "name": "Brenda Dixon"
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
            362,
            6067186.34,
            16760.18,
            18.6,
            34.6,
            25.7,
            70.6,
            11.7
          ],
          [
            "Detroit Metro",
            138,
            2382691.6,
            17265.88,
            28.5,
            38.8,
            26.8,
            45.4,
            21.5
          ],
          [
            "Nashville",
            93,
            2378079.88,
            25570.75,
            22.6,
            18.9,
            30.1,
            29.6,
            18.7
          ],
          [
            "DC Metro",
            85,
            1599195.46,
            18814.06,
            26.6,
            23.7,
            30.6,
            40.5,
            22.6
          ],
          [
            "Dayton",
            78,
            1366634.79,
            17520.96,
            30.6,
            23.6,
            21.8,
            56.4,
            25.6
          ],
          [
            "Cincinnati",
            64,
            1338278.34,
            20910.6,
            29.1,
            26,
            28.1,
            50.1,
            20.1
          ],
          [
            "Raleigh",
            57,
            1283819.06,
            22523.14,
            28.5,
            23.7,
            15.8,
            64.4,
            24.6
          ],
          [
            "Richmond",
            56,
            1098540.29,
            19616.79,
            25.1,
            16.4,
            35.7,
            60,
            10.1
          ],
          [
            "Knoxville",
            54,
            1022490.26,
            18935,
            23.1,
            19.6,
            35.2,
            28.5,
            17.5
          ],
          [
            "Greenville",
            27,
            742330.19,
            27493.71,
            22.5,
            24.1,
            22.2,
            38,
            20.7
          ],
          [
            "Cleveland",
            55,
            739335.69,
            13442.47,
            22.6,
            35.8,
            32.7,
            32.9,
            16.6
          ],
          [
            "NOVA",
            24,
            469773.97,
            19573.92,
            54,
            25.3,
            41.7,
            66.6,
            32.6
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
          ],
          [
            "Grand Rapids",
            2,
            17428,
            8714,
            26.1,
            14.6,
            50,
            31.6,
            20.6
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
            76,
            64,
            1572998.11,
            20697.34,
            29.5,
            33.1
          ],
          [
            "Joseph Yager",
            111,
            92,
            1423904.74,
            12827.97,
            30.6,
            26.4
          ],
          [
            "Mason Bryant",
            91,
            77,
            1422121.98,
            15627.71,
            25.6,
            29.6
          ],
          [
            "Brandon Harter",
            67,
            50,
            1299220.81,
            19391.36,
            24.1,
            17.9
          ],
          [
            "Kaden Carter",
            73,
            59,
            1290221.45,
            17674.27,
            29.5,
            24.2
          ],
          [
            "Landon Little",
            67,
            62,
            1087074.73,
            16225,
            30.5,
            34.2
          ],
          [
            "Richard Williams",
            75,
            70,
            997296.89,
            13297.29,
            40.6,
            33.9
          ],
          [
            "Alejandro Alvarado",
            75,
            57,
            988499.75,
            13180,
            25.4,
            21.3
          ],
          [
            "Galo Munive",
            73,
            56,
            933971.09,
            12794.12,
            35.5,
            27.5
          ],
          [
            "Joseph Jones",
            67,
            50,
            904950.52,
            13506.72,
            22.1,
            18.4
          ],
          [
            "Abraham Santiago",
            43,
            39,
            887769.55,
            20645.8,
            26.6,
            20.6
          ],
          [
            "Brandon Skrzypek",
            44,
            44,
            873539.38,
            19853.17,
            32.5,
            32.9
          ],
          [
            "Alex Dubanoski",
            61,
            46,
            853571.24,
            13992.97,
            13.1,
            15.6
          ],
          [
            "Levi Nieman",
            48,
            47,
            830819.42,
            17308.74,
            29.7,
            44.2
          ],
          [
            "Shawn Oehlstrom",
            79,
            55,
            717468.7,
            9081.88,
            22.6,
            35.8
          ],
          [
            "Brady Weingartner",
            37,
            37,
            717172.16,
            19383.03,
            26.7,
            22.1
          ],
          [
            "Jason Andrews",
            83,
            74,
            655083.8,
            7892.58,
            28.6,
            40.3
          ],
          [
            "Cody Mitchell",
            23,
            20,
            533173.92,
            23181.47,
            24,
            21.2
          ],
          [
            "Drew Bailey",
            124,
            124,
            466515.14,
            3762.22,
            5.6,
            28.5
          ],
          [
            "Austin Weingartner",
            27,
            24,
            449077.95,
            16632.52,
            32.5,
            31.3
          ],
          [
            "Chad Williams",
            37,
            21,
            371407.44,
            10038.04,
            65.5,
            23.7
          ],
          [
            "Daniel Galli",
            36,
            25,
            359460.88,
            9985.02,
            69.7,
            43.5
          ],
          [
            "Adam Marrero",
            17,
            14,
            299173.44,
            17598.44,
            20.6,
            24.6
          ],
          [
            "(Unassigned)",
            22,
            18,
            168146.65,
            7643.03,
            28.1,
            47
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
            "Michael Blevins",
            7,
            6,
            96019.14,
            13717.02,
            16.1,
            17.4
          ],
          [
            "Justin Milliron",
            9,
            8,
            68552.43,
            7616.94,
            107.5,
            70.9
          ],
          [
            "Chris Atkins",
            5,
            3,
            22831,
            4566.2,
            70.5,
            49.6
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
            997,
            15323619.88,
            15369.73,
            23.7
          ],
          [
            "Gutters",
            313,
            2977274.41,
            9512.06,
            35.6
          ],
          [
            "Siding",
            91,
            895672.55,
            9842.56,
            59.4
          ],
          [
            "Metal",
            21,
            378035.09,
            18001.67,
            148.6
          ],
          [
            "Windows",
            26,
            359655.52,
            13832.9,
            84
          ],
          [
            "Masonry",
            20,
            257320.04,
            12866,
            105.6
          ],
          [
            "Rack Mounted Solar",
            12,
            111849.55,
            9320.8,
            61.1
          ],
          [
            "Painting",
            5,
            98078.62,
            19615.72,
            108.6
          ],
          [
            "Electrical",
            2,
            39423.33,
            19711.67,
            76.1
          ],
          [
            "Flat Roof",
            3,
            32090.81,
            10696.94,
            149.7
          ],
          [
            "GAF Solar",
            1,
            31695,
            31695,
            84.7
          ],
          [
            "Other",
            3,
            27673.83,
            9224.61,
            43.7
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
            339,
            6740355.27,
            19883.05,
            "33.5d",
            "27.7d",
            33.9,
            19883.05
          ],
          [
            "David Schwan",
            248,
            5578204.18,
            22492.76,
            "23.6d",
            "26.8d",
            30.2,
            22492.76
          ],
          [
            "Amanda Wade",
            234,
            3342258.49,
            14283.16,
            "12d",
            "29.9d",
            14.5,
            14283.16
          ],
          [
            "Bradley Essex",
            145,
            2558954.68,
            17647.96,
            "27.5d",
            "26.8d",
            29,
            17647.96
          ],
          [
            "Thomas Hayes",
            100,
            1568260.61,
            15682.61,
            "24.6d",
            "29.9d",
            22,
            15682.61
          ],
          [
            "Morgan Valois",
            17,
            436720.32,
            25689.43,
            "117.4d",
            "67.6d",
            64.7,
            25689.43
          ],
          [
            "Kayla Wright",
            6,
            184960.11,
            30826.69,
            "103.2d",
            "17.5d",
            33.3,
            30826.69
          ],
          [
            "Brenda Dixon",
            7,
            129764.62,
            18537.8,
            "25.4d",
            "15.5d",
            28.6,
            18537.8
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
            165,
            0,
            1,
            0,
            0,
            0,
            21,
            0,
            0,
            1,
            46,
            0,
            234
          ],
          [
            "Bradley Essex",
            43,
            45,
            2,
            0,
            54,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            145
          ],
          [
            "Brandon Vera",
            8,
            2,
            94,
            85,
            20,
            34,
            0,
            0,
            6,
            0,
            24,
            0,
            10,
            56,
            339
          ],
          [
            "Brenda Dixon",
            0,
            1,
            6,
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
            7
          ],
          [
            "David Schwan",
            10,
            2,
            90,
            0,
            0,
            0,
            0,
            0,
            0,
            54,
            0,
            92,
            0,
            0,
            248
          ],
          [
            "Kayla Wright",
            0,
            0,
            4,
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
            6
          ],
          [
            "Morgan Valois",
            0,
            2,
            0,
            0,
            0,
            15,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            17
          ],
          [
            "Thomas Hayes",
            3,
            3,
            1,
            0,
            3,
            88,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            100
          ],
          [
            "Total",
            64,
            55,
            362,
            85,
            78,
            138,
            2,
            1,
            27,
            54,
            24,
            93,
            57,
            56,
            1096
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Daniel Galli: 36 WOs, $359K revenue, 69.7-day median complete, top-volume PM with the slowest cycle in the network.",
        "Multi-trade penalty is severe in 3 markets: Columbus MT 70.6d vs ST 11.7d, Richmond MT 60.0d vs ST 10.1d, Raleigh MT 64.4d vs ST 24.6d.",
        "Days to Start averages 28.4 days company-wide and 38.8 days in Detroit Metro (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [
        "Drew Bailey: 124 WOs, $3,762 revenue per WO, the lowest revenue density of any active high-volume PM.",
        "Gutters-only work runs at 35.6-day median complete versus 23.7 days for roofing, 50% slower cycle on the lowest-priced trade.",
        "Amanda Wade creates 234 jobs at $14,283 average contract and 14.5% multi-trade attach, well below the top creator."
      ],
      "positivesToBuildOn": [
        "April delivered $7.86M across 442 invoiced jobs at 17.6-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "Columbus hits 18.6-day median complete and a $16,760 average contract on 362 jobs.",
        "Multi-trade jobs carry a $26,552 average contract versus $15,756 for single-trade, a 69% revenue lift per job.",
        "Columbus is the best-balanced market: 18.6-day median complete, 25.7% multi-trade attach, $16,760 average contract on 362 jobs."
      ]
    }
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-05-28",
    "ytdDays": 124,
    "rowCount": 1707,
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
        "value": "$26.59M",
        "sub": "1,707 signed contracts across 13 markets"
      },
      {
        "label": "Sold",
        "value": "$22.85M",
        "sub": "1,506 deals | 88.2% of signed contracts"
      },
      {
        "label": "Production Review",
        "value": "$2.54M",
        "sub": "139 deals | Ops Review, PM Review, Contracted"
      },
      {
        "label": "Kicked Back",
        "value": "$1.17M",
        "sub": "58 deals | 3.4% of signed contracts",
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
        "value": "$15,579",
        "sub": "Median: $14,400 | Install avg: $18,192"
      },
      {
        "label": "Organization",
        "value": "131 Reps",
        "sub": "13 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$78.28M",
        "sub": "Based on 124 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "84.0% / 15.8%",
        "sub": "1,434 installs | 269 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 1506,
        "amount": 22850602.15
      },
      {
        "label": "Production Review",
        "count": 139,
        "amount": 2540807.13
      },
      {
        "label": "Kicked Back",
        "count": 58,
        "amount": 1167187.02
      },
      {
        "label": "Sales Action",
        "count": 2,
        "amount": 34333
      },
      {
        "label": "Other",
        "count": 2,
        "amount": 746.39
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
        "amount": 4111512.18,
        "installs": 197,
        "repairs": 36,
        "avgDeal": 17646,
        "repairPct": 15.5,
        "installAvg": 20603,
        "repairAvg": 1464
      },
      {
        "key": "2026-03",
        "label": "March",
        "count": 503,
        "amount": 6933007.04,
        "installs": 390,
        "repairs": 112,
        "avgDeal": 13783,
        "repairPct": 22.3,
        "installAvg": 17187,
        "repairAvg": 1887
      },
      {
        "key": "2026-04",
        "label": "April",
        "count": 750,
        "amount": 11716536.34,
        "installs": 649,
        "repairs": 99,
        "avgDeal": 15622,
        "repairPct": 13.2,
        "installAvg": 17792,
        "repairAvg": 1508
      },
      {
        "key": "2026-05",
        "label": "May",
        "count": 39,
        "amount": 568721.35,
        "installs": 35,
        "repairs": 3,
        "avgDeal": 14583,
        "repairPct": 7.7,
        "installAvg": 15333,
        "repairAvg": 2606
      }
    ],
    "jobTypeMixByMonth": {
      "Retail-No Financing": {
        "2026-01": 1275388.72,
        "2026-02": 1790259.77,
        "2026-03": 2949119.7,
        "2026-04": 3705972.97,
        "2026-05": 17102.53
      },
      "Insurance": {
        "2026-01": 1437020.6,
        "2026-02": 1673072.24,
        "2026-03": 2685615.35,
        "2026-04": 4268253.12,
        "2026-05": 88036.36
      },
      "Retail-Financing": {
        "2026-01": 509089.46,
        "2026-02": 648180.17,
        "2026-03": 1135621.56,
        "2026-04": 903761.6,
        "2026-05": 0
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Insurance",
        "count": 509,
        "amount": 10151997.67,
        "avg": 19945
      },
      {
        "jobType": "Retail-No Financing",
        "count": 854,
        "amount": 9737843.69,
        "avg": 11403
      },
      {
        "jobType": "Retail-Financing",
        "count": 153,
        "amount": 3196652.79,
        "avg": 20893
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
        "count": 54,
        "amount": 621122.06
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
        "amount": 1902502.6
      },
      {
        "w": 10,
        "count": 75,
        "amount": 1175624.58
      },
      {
        "w": 11,
        "count": 81,
        "amount": 1166374.12
      },
      {
        "w": 12,
        "count": 141,
        "amount": 1580608.99
      },
      {
        "w": 13,
        "count": 153,
        "amount": 2357002.02
      },
      {
        "w": 14,
        "count": 151,
        "amount": 2153635.03
      },
      {
        "w": 15,
        "count": 177,
        "amount": 2699641.09
      },
      {
        "w": 16,
        "count": 184,
        "amount": 3006933.72
      },
      {
        "w": 17,
        "count": 187,
        "amount": 2900850.12
      },
      {
        "w": 18,
        "count": 128,
        "amount": 1947299.89
      },
      {
        "w": 19,
        "count": 14,
        "amount": 229045.17
      },
      {
        "w": 22,
        "count": 1,
        "amount": 1250
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
          8277264.75,
          554,
          14941,
          445,
          108,
          19.5,
          7
        ],
        [
          "Detroit Metro",
          4878964.87,
          291,
          16766,
          268,
          23,
          7.9,
          4
        ],
        [
          "Nashville",
          2650289.7,
          176,
          15058,
          125,
          51,
          29,
          5
        ],
        [
          "DC Metro",
          1691736.24,
          112,
          15105,
          84,
          28,
          25,
          13
        ],
        [
          "Dayton",
          1670674.43,
          100,
          16707,
          93,
          6,
          6,
          20
        ],
        [
          "Cleveland",
          1657618.13,
          156,
          10626,
          117,
          39,
          25,
          4
        ],
        [
          "Richmond",
          1561493.08,
          67,
          23306,
          64,
          2,
          3,
          34
        ],
        [
          "Cincinnati",
          1155086.46,
          79,
          14621,
          73,
          6,
          7.6,
          9
        ],
        [
          "Knoxville",
          921048.06,
          54,
          17056,
          53,
          1,
          1.9,
          22
        ],
        [
          "Raleigh",
          902287.9,
          56,
          16112,
          53,
          3,
          5.4,
          37
        ],
        [
          "Greenville",
          576059.37,
          24,
          24002,
          24,
          0,
          0,
          5
        ],
        [
          "NOVA",
          341477.75,
          18,
          18971,
          16,
          2,
          11.1,
          26
        ],
        [
          "Grand Rapids",
          309674.95,
          20,
          15484,
          19,
          0,
          0,
          24
        ]
      ]
    },
    "marketKickbacks": [
      {
        "market": "Columbus",
        "kicked": 25,
        "kickedAmount": 576566.8
      },
      {
        "market": "Cleveland",
        "kicked": 7,
        "kickedAmount": 72786.21
      },
      {
        "market": "Dayton",
        "kicked": 6,
        "kickedAmount": 60694.98
      },
      {
        "market": "Richmond",
        "kicked": 4,
        "kickedAmount": 216638.9
      },
      {
        "market": "Cincinnati",
        "kicked": 4,
        "kickedAmount": 21545.53
      },
      {
        "market": "Nashville",
        "kicked": 4,
        "kickedAmount": 96567.5
      }
    ],
    "marketJobTypeChart": {
      "_description": "Stacked horizontal bar; sales-by-job-type per branch.",
      "branches": [
        "Columbus",
        "Detroit Metro",
        "Nashville",
        "DC Metro",
        "Dayton",
        "Cleveland",
        "Richmond",
        "Cincinnati",
        "Knoxville",
        "Raleigh",
        "Greenville",
        "NOVA",
        "Grand Rapids"
      ]
    },
    "topPeople": [
      {
        "name": "Kevin Ditty",
        "amount": 998831.75,
        "count": 57,
        "avg": 17523,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 35,
          "Insurance": 9,
          "Retail-Financing": 12
        },
        "installs": 40,
        "repairs": 17
      },
      {
        "name": "Michael Conley",
        "amount": 835684.16,
        "count": 53,
        "avg": 15768,
        "medDays": 14,
        "jt": {
          "Insurance": 25,
          "Retail-Financing": 5,
          "Retail-No Financing": 16
        },
        "installs": 49,
        "repairs": 4
      },
      {
        "name": "Storm Drumm",
        "amount": 803429.38,
        "count": 51,
        "avg": 15754,
        "medDays": 2,
        "jt": {
          "Retail-No Financing": 27,
          "Retail-Financing": 11,
          "Insurance": 11
        },
        "installs": 48,
        "repairs": 3
      },
      {
        "name": "Stephen Harmon",
        "amount": 793486.63,
        "count": 32,
        "avg": 24796,
        "medDays": 11,
        "jt": {
          "Retail-No Financing": 30,
          "Insurance": 2
        },
        "installs": 30,
        "repairs": 2
      },
      {
        "name": "Sam Scorziell",
        "amount": 729143.65,
        "count": 35,
        "avg": 20833,
        "medDays": 18,
        "jt": {
          "Insurance": 22,
          "Retail-No Financing": 8
        },
        "installs": 35,
        "repairs": 0
      },
      {
        "name": "Robert Beck",
        "amount": 687591.7,
        "count": 26,
        "avg": 26446,
        "medDays": 28,
        "jt": {
          "Retail-No Financing": 6,
          "Insurance": 13
        },
        "installs": 25,
        "repairs": 1
      },
      {
        "name": "Cole Burgess",
        "amount": 681750.84,
        "count": 33,
        "avg": 20659,
        "medDays": 2,
        "jt": {
          "Retail-Financing": 3,
          "Retail-No Financing": 23,
          "Insurance": 2
        },
        "installs": 33,
        "repairs": 0
      },
      {
        "name": "Matthew Ross",
        "amount": 556177.56,
        "count": 33,
        "avg": 16854,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 23,
          "Insurance": 1,
          "Retail-Financing": 7
        },
        "installs": 29,
        "repairs": 4
      },
      {
        "name": "Scott Scaperato",
        "amount": 552955.79,
        "count": 54,
        "avg": 10240,
        "medDays": 2,
        "jt": {
          "Retail-Financing": 12,
          "Retail-No Financing": 31,
          "Insurance": 6
        },
        "installs": 42,
        "repairs": 12
      },
      {
        "name": "Donald Richard",
        "amount": 544962,
        "count": 31,
        "avg": 17579,
        "medDays": 4,
        "jt": {
          "Retail-No Financing": 22,
          "Retail-Financing": 1,
          "Insurance": 2
        },
        "installs": 29,
        "repairs": 2
      },
      {
        "name": "Dave Norris",
        "amount": 535707.94,
        "count": 44,
        "avg": 12175,
        "medDays": 13,
        "jt": {
          "Retail-No Financing": 23,
          "Retail-Financing": 1,
          "Insurance": 16
        },
        "installs": 30,
        "repairs": 14
      },
      {
        "name": "Kyle Gibson",
        "amount": 501189.18,
        "count": 38,
        "avg": 13189,
        "medDays": 7,
        "jt": {
          "Retail-Financing": 7,
          "Retail-No Financing": 16,
          "Insurance": 11
        },
        "installs": 36,
        "repairs": 2
      },
      {
        "name": "Richard Rice",
        "amount": 496391,
        "count": 24,
        "avg": 20683,
        "medDays": 6,
        "jt": {
          "Retail-No Financing": 15,
          "Insurance": 3,
          "Retail-Financing": 2
        },
        "installs": 21,
        "repairs": 3
      },
      {
        "name": "Trey Rury",
        "amount": 478854.1,
        "count": 25,
        "avg": 19154,
        "medDays": 10,
        "jt": {
          "Retail-No Financing": 7,
          "Insurance": 7,
          "Retail-Financing": 9
        },
        "installs": 24,
        "repairs": 1
      },
      {
        "name": "Mark Daggett",
        "amount": 469569.46,
        "count": 26,
        "avg": 18060,
        "medDays": 3,
        "jt": {
          "Insurance": 3,
          "Retail-No Financing": 19
        },
        "installs": 21,
        "repairs": 5
      },
      {
        "name": "James Cole Dionisi",
        "amount": 446516,
        "count": 24,
        "avg": 18605,
        "medDays": 3,
        "jt": {
          "Retail-Financing": 7,
          "Retail-No Financing": 13,
          "Insurance": 1
        },
        "installs": 23,
        "repairs": 1
      },
      {
        "name": "Frank Butts",
        "amount": 437451.31,
        "count": 36,
        "avg": 12151,
        "medDays": 9,
        "jt": {
          "Retail-No Financing": 19,
          "Insurance": 13,
          "Retail-Financing": 1
        },
        "installs": 30,
        "repairs": 6
      },
      {
        "name": "Matt Busch",
        "amount": 432355,
        "count": 26,
        "avg": 16629,
        "medDays": 3,
        "jt": {
          "Insurance": 5,
          "Retail-No Financing": 12,
          "Retail-Financing": 3
        },
        "installs": 26,
        "repairs": 0
      },
      {
        "name": "Frank Drummond",
        "amount": 406338.51,
        "count": 50,
        "avg": 8127,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 36,
          "Insurance": 8,
          "Retail-Financing": 1
        },
        "installs": 28,
        "repairs": 22
      },
      {
        "name": "Bill Applegate",
        "amount": 405391.29,
        "count": 32,
        "avg": 12668,
        "medDays": 16,
        "jt": {
          "Insurance": 12,
          "Retail-No Financing": 14,
          "Retail-Financing": 1
        },
        "installs": 26,
        "repairs": 6
      }
    ],
    "speedSellers": [
      {
        "name": "Evan Kelley",
        "medDays": 1
      },
      {
        "name": "Scott Scaperato",
        "medDays": 2
      },
      {
        "name": "Storm Drumm",
        "medDays": 2
      },
      {
        "name": "Cole Burgess",
        "medDays": 2
      },
      {
        "name": "Gary Holm",
        "medDays": 2
      },
      {
        "name": "Kevin Ditty",
        "medDays": 3
      },
      {
        "name": "Frank Drummond",
        "medDays": 3
      },
      {
        "name": "Matthew Ross",
        "medDays": 3
      }
    ],
    "repairHeavy": [
      {
        "name": "Justin Koenig",
        "repairs": 7,
        "deals": 12,
        "pct": 58.3
      },
      {
        "name": "Ryan Johnson",
        "repairs": 13,
        "deals": 23,
        "pct": 56.5
      },
      {
        "name": "John Emrich",
        "repairs": 8,
        "deals": 17,
        "pct": 47.1
      }
    ],
    "salesCycle": {
      "kpis": [
        {
          "label": "Overall Median",
          "value": "7 days",
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
          "sub": "Median | Mean: 74 days"
        },
        {
          "label": "Repair",
          "value": "2 days",
          "sub": "Fast turn, low value"
        }
      ],
      "byJobType": [
        {
          "label": "Retail-No Fin",
          "median": 4,
          "mean": 21,
          "count": 805
        },
        {
          "label": "Retail-Fin",
          "median": 3,
          "mean": 19,
          "count": 149
        },
        {
          "label": "Insurance",
          "median": 27,
          "mean": 74,
          "count": 487
        },
        {
          "label": "Repair",
          "median": 2,
          "mean": 7,
          "count": 250
        },
        {
          "label": "Install",
          "median": 9,
          "mean": 42,
          "count": 1365
        }
      ],
      "byMarket": [
        {
          "market": "Detroit Metro",
          "median": 4,
          "mean": 24,
          "count": 282
        },
        {
          "market": "Cleveland",
          "median": 4,
          "mean": 28,
          "count": 150
        },
        {
          "market": "Nashville",
          "median": 5,
          "mean": 18,
          "count": 171
        },
        {
          "market": "Greenville",
          "median": 5,
          "mean": 6,
          "count": 24
        },
        {
          "market": "Columbus",
          "median": 7,
          "mean": 33,
          "count": 504
        },
        {
          "market": "Cincinnati",
          "median": 9,
          "mean": 31,
          "count": 77
        },
        {
          "market": "DC Metro",
          "median": 13,
          "mean": 59,
          "count": 104
        },
        {
          "market": "Dayton",
          "median": 20,
          "mean": 46,
          "count": 98
        },
        {
          "market": "Knoxville",
          "median": 22,
          "mean": 41,
          "count": 54
        },
        {
          "market": "Grand Rapids",
          "median": 24,
          "mean": 31,
          "count": 19
        },
        {
          "market": "NOVA",
          "median": 26,
          "mean": 97,
          "count": 18
        },
        {
          "market": "Richmond",
          "median": 34,
          "mean": 89,
          "count": 64
        },
        {
          "market": "Raleigh",
          "median": 37,
          "mean": 102,
          "count": 54
        }
      ],
      "starInsuranceClosers": [
        {
          "name": "Jacob Perry",
          "medDays": 1,
          "count": 3
        },
        {
          "name": "Justin Koenig",
          "medDays": 2,
          "count": 4
        },
        {
          "name": "Storm Drumm",
          "medDays": 2,
          "count": 11
        },
        {
          "name": "Scott Scaperato",
          "medDays": 3,
          "count": 6
        },
        {
          "name": "Matt Busch",
          "medDays": 4,
          "count": 5
        }
      ]
    },
    "completedBilling": {
      "totalUnbilled": 861025.06,
      "totalJobs": 51,
      "avgAge": 12.3,
      "medAge": 8,
      "tiers": [
        {
          "label": "Warning (30-59 days)",
          "count": 5,
          "amount": 79594.95,
          "color": "orange"
        },
        {
          "label": "Watch (14-29 days)",
          "count": 11,
          "amount": 210405.36,
          "color": "blue"
        },
        {
          "label": "Fresh (0-13 days)",
          "count": 35,
          "amount": 571024.75,
          "color": "green"
        }
      ],
      "bySubStatus": [
        {
          "subStatus": "Pending Supplement",
          "count": 30,
          "amount": 555182.77,
          "avgAge": 14,
          "action": "Follow up with insurance carrier on supplement approval. Escalate if >30 days."
        },
        {
          "subStatus": "Accounting Kickback",
          "count": 14,
          "amount": 209649.04,
          "avgAge": 12,
          "action": "Review kickback reason, correct documentation or pricing, resubmit to accounting."
        },
        {
          "subStatus": "Ready to Invoice",
          "count": 6,
          "amount": 95993.25,
          "avgAge": 1,
          "action": "No blockers, submit invoice immediately. This is free cash waiting."
        },
        {
          "subStatus": "No Sub Status",
          "count": 1,
          "amount": 200,
          "avgAge": 48,
          "action": "Review job, identify what is blocking billing, assign owner."
        }
      ],
      "byMarket": [
        {
          "market": "Columbus",
          "count": 16,
          "amount": 258234.14,
          "avgAge": 13,
          "urgency": "LOW"
        },
        {
          "market": "Richmond",
          "count": 6,
          "amount": 127367.44,
          "avgAge": 4,
          "urgency": "LOW"
        },
        {
          "market": "Knoxville",
          "count": 4,
          "amount": 75594.46,
          "avgAge": 19,
          "urgency": "MEDIUM"
        },
        {
          "market": "Cincinnati",
          "count": 5,
          "amount": 71036.3,
          "avgAge": 16,
          "urgency": "MEDIUM"
        },
        {
          "market": "Dayton",
          "count": 4,
          "amount": 69302.56,
          "avgAge": 9,
          "urgency": "LOW"
        },
        {
          "market": "Nashville",
          "count": 3,
          "amount": 56857.53,
          "avgAge": 11,
          "urgency": "LOW"
        },
        {
          "market": "DC Metro",
          "count": 3,
          "amount": 52111.54,
          "avgAge": 8,
          "urgency": "LOW"
        },
        {
          "market": "Raleigh",
          "count": 3,
          "amount": 48018.72,
          "avgAge": 16,
          "urgency": "MEDIUM"
        },
        {
          "market": "Cleveland",
          "count": 4,
          "amount": 42066.56,
          "avgAge": 17,
          "urgency": "MEDIUM"
        },
        {
          "market": "Detroit Metro",
          "count": 1,
          "amount": 34483,
          "avgAge": 1,
          "urgency": "LOW"
        },
        {
          "market": "Greenville",
          "count": 2,
          "amount": 25952.81,
          "avgAge": 13,
          "urgency": "LOW"
        }
      ],
      "byRepTop15": [
        {
          "rep": "Zachary Schneider",
          "count": 4,
          "amount": 68794.18,
          "oldest": 12
        },
        {
          "rep": "Sam Doyle",
          "count": 2,
          "amount": 63843.25,
          "oldest": 13
        },
        {
          "rep": "Sam Scorziell",
          "count": 2,
          "amount": 60625.06,
          "oldest": 35
        },
        {
          "rep": "Trey Rury",
          "count": 2,
          "amount": 55857.53,
          "oldest": 27
        },
        {
          "rep": "Kyle Gibson",
          "count": 4,
          "amount": 51941.45,
          "oldest": 18
        },
        {
          "rep": "Derrick Sieber",
          "count": 2,
          "amount": 47286.54,
          "oldest": 17
        },
        {
          "rep": "Robert Beck",
          "count": 1,
          "amount": 43482,
          "oldest": 18
        },
        {
          "rep": "Michael Conley",
          "count": 2,
          "amount": 42902,
          "oldest": 13
        },
        {
          "rep": "David Walden",
          "count": 1,
          "amount": 34483,
          "oldest": 1
        },
        {
          "rep": "Clint Humphreys",
          "count": 2,
          "amount": 30536.41,
          "oldest": 43
        },
        {
          "rep": "Travis Beale",
          "count": 1,
          "amount": 26580.72,
          "oldest": 0
        },
        {
          "rep": "Nick Junker",
          "count": 1,
          "amount": 24752.82,
          "oldest": 34
        },
        {
          "rep": "Savage Grant",
          "count": 1,
          "amount": 24102.97,
          "oldest": 25
        },
        {
          "rep": "Frank Butts",
          "count": 2,
          "amount": 23322.09,
          "oldest": 11
        },
        {
          "rep": "Dave Norris",
          "count": 2,
          "amount": 21858.31,
          "oldest": 20
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
          48,
          "Insurance"
        ],
        [
          "Job-109182",
          "Amanda Walton",
          "Clint Humphreys",
          "Raleigh",
          "Pending Supplement",
          15116.08,
          43,
          "Insurance"
        ],
        [
          "Job-107075",
          "Chuck & Jennifer Fedders",
          "Thomas Nordholt",
          "Cincinnati",
          "Accounting Kickback",
          9580.31,
          35,
          "Insurance"
        ],
        [
          "Job-109530",
          "Paul Blizniuk",
          "Sam Scorziell",
          "Knoxville",
          "Pending Supplement",
          29945.74,
          35,
          "Insurance"
        ],
        [
          "Job-108536",
          "Carole Bertolini",
          "Nick Junker",
          "Columbus",
          "Accounting Kickback",
          24752.82,
          34,
          "Insurance"
        ],
        [
          "Job-110423",
          "Ann Jones",
          "Trey Rury",
          "Nashville",
          "Pending Supplement",
          15862.53,
          27,
          "Insurance"
        ],
        [
          "Job-110826",
          "Julie Landholt",
          "Bill Applegate",
          "Columbus",
          "Pending Supplement",
          11400.75,
          26,
          "Insurance"
        ],
        [
          "Job-110776",
          "Jason & Amy Conard",
          "Savage Grant",
          "Greenville",
          "Accounting Kickback",
          24102.97,
          25,
          "Insurance"
        ],
        [
          "Job-110950",
          "Teddy Douglass",
          "Luke Allberry",
          "Columbus",
          "Pending Supplement",
          12839.86,
          25,
          "Insurance"
        ],
        [
          "Job-110961",
          "Rey Spinosa Brown",
          "Morgan King",
          "Columbus",
          "Pending Supplement",
          7916.87,
          20,
          "Insurance"
        ],
        [
          "Job-110965",
          "Mark Lee",
          "Dave Norris",
          "Columbus",
          "Pending Supplement",
          11738.33,
          20,
          "Insurance"
        ],
        [
          "Job-109539",
          "Jennifer Young",
          "Robert Beck",
          "Columbus",
          "Accounting Kickback",
          43482,
          18,
          "Insurance"
        ],
        [
          "Job-111122",
          "Dennis Whitlock",
          "Kyle Gibson",
          "Cincinnati",
          "Pending Supplement",
          24331.74,
          18,
          "Insurance"
        ],
        [
          "Job-111125",
          "Jerold fourman",
          "Kyle Gibson",
          "Cincinnati",
          "Pending Supplement",
          17478.75,
          18,
          "Insurance"
        ],
        [
          "Job-111238",
          "Lasean Gray",
          "Derrick Sieber",
          "DC Metro",
          "Pending Supplement",
          21251.56,
          17,
          "Retail-No Financing"
        ],
        [
          "Job-110425",
          "Christopher Spollen Nicole Schmidt",
          "Tim Washer",
          "Knoxville",
          "Accounting Kickback",
          20000,
          15,
          "Retail-No Financing"
        ],
        [
          "Job-110498",
          "Wendell Thomas",
          "Sam Doyle",
          "Richmond",
          "Pending Supplement",
          32213.27,
          13,
          "Insurance"
        ],
        [
          "Job-111385",
          "Lauren Burwell",
          "Frank Drummond",
          "Columbus",
          "Pending Supplement",
          6237.55,
          13,
          "Insurance"
        ],
        [
          "Job-111453",
          "Ron Lowe",
          "Derek Hastings",
          "Dayton",
          "Pending Supplement",
          18331.98,
          13,
          "Insurance"
        ],
        [
          "Job-111572",
          "Jim Waite",
          "Michael Conley",
          "Dayton",
          "Pending Supplement",
          26178,
          13,
          "Insurance"
        ],
        [
          "Job-111471",
          "Todd Bernhard",
          "Zachary Schneider",
          "Columbus",
          "Pending Supplement",
          17440.21,
          12,
          "Insurance"
        ],
        [
          "Job-111541",
          "Kent Carringer",
          "Andrew Coleman",
          "Knoxville",
          "Pending Supplement",
          19218.03,
          12,
          "Retail-No Financing"
        ],
        [
          "Job-111656",
          "Silva Garcia",
          "Isaiah Morales-Laurel",
          "Knoxville",
          "Pending Supplement",
          6430.69,
          12,
          "Insurance"
        ],
        [
          "Job-111720",
          "Gary Mott",
          "Zachary Schneider",
          "Columbus",
          "Pending Supplement",
          16906.24,
          12,
          "Insurance"
        ],
        [
          "Job-111299",
          "Anthony Vath Jessica Vath",
          "Frank Butts",
          "Cleveland",
          "Accounting Kickback",
          13498.3,
          11,
          "Insurance"
        ],
        [
          "Job-110010",
          "David Swift",
          "Sam Scorziell",
          "Columbus",
          "Pending Supplement",
          30679.32,
          8,
          "Insurance"
        ],
        [
          "Job-111161",
          "Gary Longberry",
          "Jacob Miller",
          "Columbus",
          "Pending Supplement",
          16640.48,
          8,
          "Insurance"
        ],
        [
          "Job-111321",
          "Michael J Kopp Sandra Kopp",
          "Frank Butts",
          "Cleveland",
          "Pending Supplement",
          9823.79,
          8,
          "Insurance"
        ],
        [
          "Job-110964",
          "Shane Goodwin",
          "Trey Rury",
          "Nashville",
          "Pending Supplement",
          39995,
          7,
          "Insurance"
        ],
        [
          "Job-108336",
          "Debora Cruz",
          "Sam Doyle",
          "Richmond",
          "Pending Supplement",
          31629.98,
          6,
          "Insurance"
        ],
        [
          "Job-111130",
          "Saundra Smith",
          "Kyle Gibson",
          "Cincinnati",
          "Accounting Kickback",
          2062.38,
          6,
          "Retail-No Financing"
        ],
        [
          "Job-111708",
          "Anu Patil",
          "Eric England",
          "Raleigh",
          "Pending Supplement",
          17482.31,
          6,
          "Insurance"
        ],
        [
          "Job-111806",
          "Shelby Jordan",
          "Storm Drumm",
          "Columbus",
          "Accounting Kickback",
          13132,
          6,
          "Insurance"
        ],
        [
          "Job-111883",
          "Workneh Abate",
          "Micah Hayes",
          "Richmond",
          "Pending Supplement",
          9372.63,
          6,
          "Insurance"
        ],
        [
          "Job-111711",
          "Tina Colter",
          "Dave Norris",
          "Columbus",
          "Pending Supplement",
          10119.98,
          5,
          "Insurance"
        ],
        [
          "Job-111737",
          "Dennis Poole",
          "Derrick Sieber",
          "DC Metro",
          "Pending Supplement",
          26034.98,
          5,
          "Insurance"
        ],
        [
          "Job-111964",
          "Sarah Pax",
          "Michael Conley",
          "Dayton",
          "Accounting Kickback",
          16724,
          5,
          "Insurance"
        ],
        [
          "Job-112034",
          "Raymond Richardson",
          "Jacoby Taylor",
          "Cincinnati",
          "Pending Supplement",
          17583.12,
          5,
          "Insurance"
        ],
        [
          "Job-112057",
          "John Liedkte",
          "Zachary Schneider",
          "Columbus",
          "Ready to Invoice",
          18546.73,
          5,
          "Insurance"
        ],
        [
          "Job-111139",
          "Patricia A Holloway",
          "Kyle Gibson",
          "Dayton",
          "Accounting Kickback",
          8068.58,
          4,
          "Insurance"
        ],
        [
          "Job-110692",
          "Daniel Crow",
          "David Walden",
          "Detroit Metro",
          "Pending Supplement",
          34483,
          1,
          "Retail-No Financing"
        ],
        [
          "Job-111587",
          "Tiffany Bright Jamie Bright",
          "Luca Benedetti",
          "Richmond",
          "Accounting Kickback",
          16713.84,
          1,
          "Insurance"
        ],
        [
          "Job-111854",
          "Elroy Matthews",
          "David Poole",
          "DC Metro",
          "Accounting Kickback",
          4825,
          1,
          "Insurance"
        ],
        [
          "Job-109438",
          "Pham Hoang",
          "Travis Beale",
          "Richmond",
          "Ready to Invoice",
          26580.72,
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
          "Job-110814",
          "Jeremy and Alicia Nowak",
          "Cody Mitchell",
          "Greenville",
          "Accounting Kickback",
          1849.84,
          0,
          "Insurance"
        ],
        [
          "Job-111501",
          "Tracy Pacetti",
          "Clint Humphreys",
          "Raleigh",
          "Ready to Invoice",
          15420.33,
          0,
          "Insurance"
        ],
        [
          "Job-111763",
          "Heather Lenz",
          "Justin Koenig",
          "Cleveland",
          "Ready to Invoice",
          18544.47,
          0,
          "Insurance"
        ],
        [
          "Job-112019",
          "Tracy Dobner",
          "Zachary Schneider",
          "Columbus",
          "Ready to Invoice",
          15901,
          0,
          "Retail-No Financing"
        ],
        [
          "Job-112395",
          "Amer Kulic",
          "Griffin Keller",
          "Richmond",
          "Accounting Kickback",
          10857,
          0,
          "Insurance"
        ],
        [
          "Job-112422",
          "Kathy  Kuchenbecker",
          "Kevin Ditty",
          "Nashville",
          "Ready to Invoice",
          1000,
          0,
          "Retail-No Financing"
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
      "recent4WkAvg": 1269611.3
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
          "liveActual": 568721.35
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
        "Sales Trajectory: Monthly sales moved from January $3.26M to May $569K (-83%). Annualized run rate: $78.28M.",
        "Premium Deal Types: Insurance averages $19,945 per deal. Retail-Financing averages $20,893 (highest per-deal value). Retail-No Financing averages $11,403 (the volume engine).",
        "Sold Conversion: 1,506 of 1,707 signed contracts (88.2%) have made it to Sold status for $22.85M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Kickback Concentration: Columbus has the most kickbacks (25, $577K). Total company kickbacks: 58 worth $1.17M.",
        "Production Review Queue: 139 deals worth $2.54M sitting in Production Review. Watch for backlog growth, it delays revenue recognition.",
        "Repair Rate Elevated: 15.8% of all deals are repairs (269 of 1,707). Repairs average ~$1,644, low value relative to installs at $18,192."
      ],
      "criticalRisks": [
        "Columbus Kickback Concentration drives the company's largest single-market rework volume.",
        "$861K sitting unbilled in Completed Jobs (51 jobs averaging 12 days).",
        "Pending Supplements aging: 30 supplement jobs ($555K), avg 14 days.",
        "Accounting Kickbacks blocking $210K (14 completed jobs).",
        "Pipeline kickbacks company-wide: 58 kickbacks totaling $1.17M.",
        "Production Review backlog: 139 deals ($2.54M)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 4d median close on 954 retail deals.",
        "Insurance Density: $19,945 avg on 509 deals = $10.15M; +20% lift = ~$2.03M.",
        "May repair rate at 7.7% vs YTD 15.8%, correction in latest month.",
        "Financing Lifts Ticket: Retail-Financing averages $20,893, highest per-deal value."
      ],
      "fixList": [
        "Columbus Pipeline Kickback Intervention, pull every kickback and categorize root cause.",
        "Supplement Follow-Up Process, 30 supplement jobs ($555K).",
        "Accounting Kickback Root Causes, 14 jobs ($210K), need a Kickback Reason field.",
        "Production Review Bottleneck, 139 deals; add temporary PM capacity.",
        "Financing Push, 153 financing deals YTD (9.0%) at $20,893 avg. Target 15% mix."
      ],
      "actionPlan": {
        "thisWeek": [
          "Invoice Immediately: $96K, 6 jobs marked Ready to Invoice.",
          "Accounting Kickback Blitz: $210K, 14 jobs kicked back; cross-functional meeting w/ accounting + sales ops.",
          "Columbus Pipeline Kickback Review, meet with branch leadership.",
          "Production Review Surge Plan, 139 deals ($2.54M) in queue."
        ],
        "thisMonth": [
          "Supplement Escalation SOP, 7/14/30 day cadence with carrier escalation.",
          "Completed-to-Billing SLA, 100% invoiced within 21 days.",
          "Repair Triage Pilot in markets where repair rate exceeds 25%.",
          "Financing Training, peer training led by top financing reps. Target 15% mix."
        ],
        "thisQuarter": [
          "Add Kickback Reason field to accounting workflow.",
          "Repair Business Decision, 269 repairs YTD at ~$1,644 avg.",
          "Ops Capacity Planning, May hit 39 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "title": "Residential Revenue Forecast",
    "subtitle": "V5 Model with Job Type Analysis · Data as of May 04, 2026",
    "runDate": "May 04, 2026",
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
        "value": "$23M",
        "sub": "Jobs processed into system"
      },
      {
        "label": "Invoiced YTD",
        "value": "$20.92M",
        "sub": "NetSuite AR · 1148 invoices booked"
      },
      {
        "label": "4-Week Avg Weekly Sales",
        "value": "$2.6M",
        "sub": "Trend: +162,967/week"
      },
      {
        "label": "Current Week (Projected)",
        "value": "$1.5M",
        "sub": "WTD: $0"
      },
      {
        "label": "Annual Forecast",
        "value": "$119.8M",
        "sub": "Model invoiced revenue"
      },
      {
        "label": "Annual Budget",
        "value": "$125.6M",
        "sub": "Residential plan"
      },
      {
        "label": "Forecast vs Budget",
        "value": "-$5.8M",
        "sub": "4.7% under plan"
      },
      {
        "label": "Active Pipeline",
        "value": "$14.1M",
        "sub": "Backlog + IP + SNP"
      }
    ],
    "execSummary": {
      "budget": 125615037,
      "modelAnnualInvoiced": 119770380.373,
      "gap": 5844656.627,
      "narrative": "The V5 model projects $119.8M in annual invoiced revenue against a $125.6M plan. The challenge is timing, not volume: Q1 ramped slowly so Q2 invoicing will lag. If the current weekly pace of $2.6M holds, H2 should catch up as earlier sales convert to invoiced revenue."
    },
    "monthRevenue": {
      "april": {
        "invoiced": 8411542.480000002,
        "wipChange": 813618,
        "netRevenue": 9225160.480000002,
        "beginningWip": 3518328.231,
        "endingWip": 3092796.9555,
        "materialCost": 2748866.2285,
        "laborCost": 1727858.7722,
        "grossProfit": 4462818.9993,
        "grossMarginPct": 49.9222
      },
      "may": {
        "invoiced": 14023183.1226,
        "wipChange": 232525.677,
        "netRevenue": 14255708.7996,
        "beginningWip": 3092796.9555,
        "endingWip": 3325322.6325,
        "materialCost": 40804.617,
        "laborCost": 25648.6164,
        "grossProfit": 14189255.5662,
        "grossMarginPct": 99.5338
      }
    },
    "weeklyTargetsHeader": {
      "avgWeeklyNeed": 2685091.2466,
      "recent4WkAvg": 2592295.12,
      "gap": 92796.1266,
      "productionAvgWeeklyNeed": 2751322.9784,
      "productionCycleStart": 12,
      "productionCycleComplete": 9,
      "productionTotalCycle": 21
    },
    "budgetRecoveryHeader": {
      "fullYearBudget": 126105724,
      "gap": 2979587.9023,
      "upliftPct": 3.1,
      "aprilGap": 2488900.9023,
      "q1OriginalBudget": 16900198,
      "q1Actual": 16409511,
      "q1Shortfall": 490687,
      "recoveryRatio": 1.0333
    },
    "profitabilitySummary": {
      "combinedGP": 38824224.12,
      "combinedGP_pct": 41.2754,
      "combinedRevenue": 94061417.94,
      "y2025_GP_pct": 41.5616,
      "y2025_revenue": 74115057.45,
      "y2025_jobs": 3507,
      "y2026_GP_pct": 40.2119,
      "y2026_revenue": 19946360.49,
      "y2026_jobs": 1066,
      "materialCost": 34872014.79,
      "laborCost": 20164085.95,
      "commissions": 8880795.51,
      "materialPctContract": 37.0737,
      "laborPctContract": 21.4371,
      "commissionPctContract": 9.4415
    },
    "pipelineSnapshot": {
      "stages": [
        {
          "label": "New Sales",
          "subtitle": "193 jobs · 7d avg",
          "value": 3818438.28,
          "jobs": 193,
          "color": "#3b82f6",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 72,
              "value": 1555582.62
            },
            {
              "market": "Detroit Metro",
              "jobs": 42,
              "value": 856618.1
            },
            {
              "market": "Richmond",
              "jobs": 8,
              "value": 288612.54
            },
            {
              "market": "Nashville",
              "jobs": 11,
              "value": 262356.69
            },
            {
              "market": "Cleveland",
              "jobs": 17,
              "value": 252843.76
            },
            {
              "market": "Grand Rapids",
              "jobs": 12,
              "value": 173535.71
            },
            {
              "market": "DC Metro",
              "jobs": 5,
              "value": 156655.72
            },
            {
              "market": "Dayton",
              "jobs": 10,
              "value": 111731.82
            },
            {
              "market": "Cincinnati",
              "jobs": 10,
              "value": 79200.86
            },
            {
              "market": "Knoxville",
              "jobs": 3,
              "value": 24031.64
            },
            {
              "market": "Raleigh",
              "jobs": 1,
              "value": 12431.04
            }
          ],
          "avgDays": 7.1,
          "medianDays": 4
        },
        {
          "label": "Backlog",
          "subtitle": "391 jobs · 21d avg",
          "value": 7655881.11,
          "jobs": 391,
          "color": "#f97316",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 145,
              "value": 2646724.5
            },
            {
              "market": "Detroit Metro",
              "jobs": 92,
              "value": 1852909.25
            },
            {
              "market": "Cleveland",
              "jobs": 44,
              "value": 746946.74
            },
            {
              "market": "Nashville",
              "jobs": 28,
              "value": 546386.89
            },
            {
              "market": "DC Metro",
              "jobs": 21,
              "value": 489665.37
            },
            {
              "market": "Dayton",
              "jobs": 21,
              "value": 416745.82
            },
            {
              "market": "Richmond",
              "jobs": 10,
              "value": 407547.75
            },
            {
              "market": "Raleigh",
              "jobs": 12,
              "value": 182712.13
            },
            {
              "market": "Grand Rapids",
              "jobs": 5,
              "value": 124113.26
            },
            {
              "market": "Cincinnati",
              "jobs": 7,
              "value": 115617.09
            },
            {
              "market": "Greenville",
              "jobs": 3,
              "value": 78388.01
            },
            {
              "market": "Knoxville",
              "jobs": 3,
              "value": 48124.3
            }
          ],
          "avgDays": 21.3,
          "medianDays": 12
        },
        {
          "label": "In Progress",
          "subtitle": "107 jobs",
          "value": 2663403.95,
          "jobs": 107,
          "color": "#22c55e",
          "byMarket": [
            {
              "market": "Detroit Metro",
              "jobs": 28,
              "value": 718519.42
            },
            {
              "market": "Columbus",
              "jobs": 28,
              "value": 670318.11
            },
            {
              "market": "DC Metro",
              "jobs": 11,
              "value": 442741.62
            },
            {
              "market": "Nashville",
              "jobs": 11,
              "value": 247248.55
            },
            {
              "market": "Cleveland",
              "jobs": 10,
              "value": 239797.69
            },
            {
              "market": "Cincinnati",
              "jobs": 6,
              "value": 127684.82
            },
            {
              "market": "Richmond",
              "jobs": 5,
              "value": 101115.61
            },
            {
              "market": "Knoxville",
              "jobs": 2,
              "value": 38100
            },
            {
              "market": "Dayton",
              "jobs": 2,
              "value": 37648
            },
            {
              "market": "Greenville",
              "jobs": 2,
              "value": 16026.82
            },
            {
              "market": "Raleigh",
              "jobs": 1,
              "value": 15420.33
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
          "subtitle": "61 jobs",
          "value": 1058474.38,
          "jobs": 61,
          "color": "#a855f7",
          "byMarket": [
            {
              "market": "Columbus",
              "jobs": 18,
              "value": 257550.76
            },
            {
              "market": "Raleigh",
              "jobs": 5,
              "value": 121704.07
            },
            {
              "market": "Richmond",
              "jobs": 5,
              "value": 105764.71
            },
            {
              "market": "Nashville",
              "jobs": 3,
              "value": 104086.53
            },
            {
              "market": "Knoxville",
              "jobs": 5,
              "value": 100403.46
            },
            {
              "market": "DC Metro",
              "jobs": 6,
              "value": 85928.54
            },
            {
              "market": "Dayton",
              "jobs": 5,
              "value": 82261.11
            },
            {
              "market": "Cincinnati",
              "jobs": 5,
              "value": 71036.3
            },
            {
              "market": "Detroit Metro",
              "jobs": 3,
              "value": 61039
            },
            {
              "market": "Greenville",
              "jobs": 3,
              "value": 45177.81
            },
            {
              "market": "Cleveland",
              "jobs": 3,
              "value": 23522.09
            }
          ],
          "avgDays": null,
          "medianDays": null
        }
      ],
      "totalJobs": 752,
      "totalValue": 15196197.72
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
            15196197.72,
            13801318.23,
            10669010.0977,
            -1409210.9023
          ],
          [
            "May 2026",
            13699230,
            15196197.72,
            17005879.0142,
            14255708.7996,
            556478.7996
          ],
          [
            "Jun 2026",
            14956779,
            8305393.9313,
            14315330.8748,
            14390579.4592,
            -566199.5408
          ],
          [
            "Jul 2026",
            10167762,
            9442548.5661,
            10248248.3437,
            11358376.6874,
            1190614.6874
          ],
          [
            "Aug 2026",
            14285167,
            8381128.6455,
            15164887.7523,
            13342895.7663,
            -942271.2337
          ],
          [
            "Sep 2026",
            13073277,
            10303361.9206,
            12152455.6891,
            13731402.0564,
            658125.0564
          ],
          [
            "Oct 2026",
            14107969,
            9759628.8582,
            13411494.7148,
            13581547.3886,
            -526421.6114
          ],
          [
            "Nov 2026",
            11218840,
            10111744.267,
            8399578.5535,
            10961643.9489,
            -257196.0511
          ],
          [
            "Dec 2026",
            6019238,
            8031861.2978,
            3129973.8884,
            6495645.3949,
            476407.3949
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
            15196197.72,
            9855392.0977,
            2488900.9023,
            13801318.23
          ],
          [
            "May 2026",
            15196197.72,
            4617934.1797,
            9674395.8203,
            17005879.0142
          ],
          [
            "Jun 2026",
            8305393.9313,
            1732641.2793,
            13101118.7207,
            14315330.8748
          ],
          [
            "Jul 2026",
            9442548.5661,
            694469.2232,
            10057546.7768,
            10248248.3437
          ],
          [
            "Aug 2026",
            8381128.6455,
            328550.2892,
            14184925.7108,
            15164887.7523
          ],
          [
            "Sep 2026",
            10303361.9206,
            190681.3049,
            12038063.6951,
            12152455.6891
          ],
          [
            "Oct 2026",
            9759628.8582,
            67116.0825,
            13585800.9175,
            13411494.7148
          ],
          [
            "Nov 2026",
            10111744.267,
            35511.4262,
            10736657.5738,
            8399578.5535
          ],
          [
            "Dec 2026",
            8031861.2978,
            12922.5826,
            5802897.4174,
            3129973.8884
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
            0.2165,
            3257140.76,
            3257140.76,
            3257140.76
          ],
          [
            "Feb 2026 [Actual]",
            1.323,
            3120739.51,
            3120739.51,
            3120739.51
          ],
          [
            "Mar 2026 [Actual]",
            2.6283,
            5723127.3,
            5723127.3,
            5723127.3
          ],
          [
            "Apr 2026 [Actual]",
            9.3182,
            13801318.23,
            13801318.23,
            13801318.23
          ],
          [
            "May 2026",
            13.6491,
            0,
            15585571.8909,
            14663780.7095
          ],
          [
            "Jun 2026",
            12.4111,
            0,
            14171896.1401,
            13333715.2266
          ],
          [
            "Jul 2026",
            13.3464,
            0,
            15239892.5149,
            14338546.1528
          ],
          [
            "Aug 2026",
            13.5014,
            0,
            15416899.3814,
            14505084.1465
          ],
          [
            "Sep 2026",
            11.744,
            0,
            13410118.4687,
            12616992.0418
          ],
          [
            "Oct 2026",
            11.443,
            0,
            13066402.0137,
            12293604.3113
          ],
          [
            "Nov 2026",
            7.6616,
            0,
            8748592.499,
            8231166.801
          ],
          [
            "Dec 2026",
            2.7573,
            0,
            3148442.6851,
            2962231.5712
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
            3220307.587,
            3220307.587,
            0
          ],
          [
            "Wk 04/26",
            3433886.3585,
            3397373.1898,
            36513.1687
          ],
          [
            "Wk 05/03",
            3967833.2873,
            3840037.1968,
            127796.0905
          ],
          [
            "Wk 05/10",
            3967833.2873,
            3840037.1968,
            127796.0905
          ],
          [
            "Wk 05/17",
            3967833.2873,
            3840037.1968,
            127796.0905
          ],
          [
            "Wk 05/24",
            3967833.2873,
            3840037.1968,
            127796.0905
          ],
          [
            "Wk 05/31",
            3525182.085,
            3411642.9174,
            113539.1676
          ],
          [
            "Wk 06/07",
            3451406.8846,
            3340243.8708,
            111163.0138
          ],
          [
            "Wk 06/14",
            3451406.8846,
            3340243.8708,
            111163.0138
          ],
          [
            "Wk 06/21",
            3451406.8846,
            3340243.8708,
            111163.0138
          ],
          [
            "Wk 06/28",
            2845536.8464,
            2753887.7125,
            91649.1339
          ],
          [
            "Wk 07/05",
            2391134.3177,
            2314120.5937,
            77013.724
          ],
          [
            "Wk 07/12",
            2391134.3177,
            2314120.5937,
            77013.724
          ],
          [
            "Wk 07/19",
            2391134.3177,
            2314120.5937,
            77013.724
          ],
          [
            "Wk 07/26",
            2555013.8249,
            2472721.865,
            82291.96
          ],
          [
            "Wk 08/02",
            3538290.8681,
            3424329.4924,
            113961.3757
          ],
          [
            "Wk 08/09",
            3538290.8681,
            3424329.4924,
            113961.3757
          ],
          [
            "Wk 08/16",
            3538290.8681,
            3424329.4924,
            113961.3757
          ],
          [
            "Wk 08/23",
            3538290.8681,
            3424329.4924,
            113961.3757
          ],
          [
            "Wk 08/30",
            3103754.9672,
            3003789.1365,
            99965.8307
          ],
          [
            "Wk 09/06",
            2929940.6068,
            2835572.9941,
            94367.6127
          ],
          [
            "Wk 09/13",
            2929940.6068,
            2835572.9941,
            94367.6127
          ],
          [
            "Wk 09/20",
            2929940.6068,
            2835572.9941,
            94367.6127
          ],
          [
            "Wk 09/27",
            3015331.9088,
            2918214.0105,
            97117.8983
          ],
          [
            "Wk 10/04",
            3129186.978,
            3028402.0324,
            100784.9457
          ],
          [
            "Wk 10/11",
            3129186.978,
            3028402.0324,
            100784.9457
          ],
          [
            "Wk 10/18",
            3129186.978,
            3028402.0324,
            100784.9457
          ],
          [
            "Wk 10/25",
            3129186.978,
            3028402.0324,
            100784.9457
          ],
          [
            "Wk 11/01",
            2025127.0125,
            1959901.6625,
            65225.35
          ],
          [
            "Wk 11/08",
            2025127.0125,
            1959901.6625,
            65225.35
          ],
          [
            "Wk 11/15",
            2025127.0125,
            1959901.6625,
            65225.35
          ],
          [
            "Wk 11/22",
            2025127.0125,
            1959901.6625,
            65225.35
          ],
          [
            "Wk 11/29",
            1100243.0624,
            1064806.4017,
            35436.6607
          ],
          [
            "Wk 12/06",
            730289.4824,
            706768.2974,
            23521.185
          ],
          [
            "Wk 12/13",
            730289.4824,
            706768.2974,
            23521.185
          ],
          [
            "Wk 12/20",
            730289.4824,
            706768.2974,
            23521.185
          ],
          [
            "Wk 12/27",
            521635.3445,
            504834.4981,
            16800.8464
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
            25200.5851,
            18,
            1400.0325,
            43.5512,
            28577463.56
          ],
          [
            "Retail-Financing",
            21855.7859,
            18,
            1214.2103,
            60.9091,
            9616545.8
          ],
          [
            "Retail-No Financing",
            18749.6358,
            18,
            1041.6464,
            61.9485,
            30618155.21
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
            1134,
            25200.5851
          ],
          [
            "Retail-Financing",
            12,
            6,
            18,
            440,
            21855.7859
          ],
          [
            "Retail-No Financing",
            12,
            6,
            18,
            1633,
            18749.6358
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
            2646724.5
          ],
          [
            "Detroit Metro",
            92,
            1852909.25
          ],
          [
            "Cleveland",
            44,
            746946.74
          ],
          [
            "Nashville",
            28,
            546386.89
          ],
          [
            "DC Metro",
            21,
            489665.37
          ],
          [
            "Dayton",
            21,
            416745.82
          ],
          [
            "Richmond",
            10,
            407547.75
          ],
          [
            "Raleigh",
            12,
            182712.13
          ],
          [
            "Grand Rapids",
            5,
            124113.26
          ],
          [
            "Cincinnati",
            7,
            115617.09
          ],
          [
            "Greenville",
            3,
            78388.01
          ],
          [
            "Knoxville",
            3,
            48124.3
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
            "Detroit Metro",
            28,
            718519.42
          ],
          [
            "Columbus",
            28,
            670318.11
          ],
          [
            "DC Metro",
            11,
            442741.62
          ],
          [
            "Nashville",
            11,
            247248.55
          ],
          [
            "Cleveland",
            10,
            239797.69
          ],
          [
            "Cincinnati",
            6,
            127684.82
          ],
          [
            "Richmond",
            5,
            101115.61
          ],
          [
            "Knoxville",
            2,
            38100
          ],
          [
            "Dayton",
            2,
            37648
          ],
          [
            "Greenville",
            2,
            16026.82
          ],
          [
            "Raleigh",
            1,
            15420.33
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
            72,
            1555582.62
          ],
          [
            "Detroit Metro",
            42,
            856618.1
          ],
          [
            "Richmond",
            8,
            288612.54
          ],
          [
            "Nashville",
            11,
            262356.69
          ],
          [
            "Cleveland",
            17,
            252843.76
          ],
          [
            "Grand Rapids",
            12,
            173535.71
          ],
          [
            "DC Metro",
            5,
            156655.72
          ],
          [
            "Dayton",
            10,
            111731.82
          ],
          [
            "Cincinnati",
            10,
            79200.86
          ],
          [
            "Knoxville",
            3,
            24031.64
          ],
          [
            "Raleigh",
            1,
            12431.04
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
            18,
            257550.76
          ],
          [
            "Raleigh",
            5,
            121704.07
          ],
          [
            "Richmond",
            5,
            105764.71
          ],
          [
            "Nashville",
            3,
            104086.53
          ],
          [
            "Knoxville",
            5,
            100403.46
          ],
          [
            "DC Metro",
            6,
            85928.54
          ],
          [
            "Dayton",
            5,
            82261.11
          ],
          [
            "Cincinnati",
            5,
            71036.3
          ],
          [
            "Detroit Metro",
            3,
            61039
          ],
          [
            "Greenville",
            3,
            45177.81
          ],
          [
            "Cleveland",
            3,
            23522.09
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
            1167023.3717,
            43.4631
          ],
          [
            "Retail-No Financing",
            1130604.8121,
            42.1068
          ],
          [
            "Retail-Financing",
            387463.0627,
            14.4302
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
            1647129.2783,
            61.3435
          ],
          [
            "Gutters",
            857331.5271,
            31.9293
          ],
          [
            "Siding",
            66644.5161,
            2.482
          ],
          [
            "Metal",
            25915.2694,
            0.9652
          ],
          [
            "GAF Solar",
            24785.513,
            0.9231
          ],
          [
            "Flat Roof",
            20227.6594,
            0.7533
          ],
          [
            "Masonry",
            13271.4064,
            0.4943
          ],
          [
            "Rack Mounted Solar",
            12699.8677,
            0.473
          ],
          [
            "Windows",
            9918.6572,
            0.3694
          ],
          [
            "Other",
            5042.2151,
            0.1878
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
            3220307.587
          ],
          [
            "Wk 04/26",
            "Apr",
            3397373.1898
          ],
          [
            "Wk 05/03",
            "May",
            3840037.1968
          ],
          [
            "Wk 05/10",
            "May",
            3840037.1968
          ],
          [
            "Wk 05/17",
            "May",
            3840037.1968
          ],
          [
            "Wk 05/24",
            "May",
            3840037.1968
          ],
          [
            "Wk 05/31",
            "May",
            3411642.9174
          ],
          [
            "Wk 06/07",
            "Jun",
            3340243.8708
          ],
          [
            "Wk 06/14",
            "Jun",
            3340243.8708
          ],
          [
            "Wk 06/21",
            "Jun",
            3340243.8708
          ],
          [
            "Wk 06/28",
            "Jun",
            2753887.7125
          ],
          [
            "Wk 07/05",
            "Jul",
            2314120.5937
          ],
          [
            "Wk 07/12",
            "Jul",
            2314120.5937
          ],
          [
            "Wk 07/19",
            "Jul",
            2314120.5937
          ],
          [
            "Wk 07/26",
            "Jul",
            2472721.865
          ],
          [
            "Wk 08/02",
            "Aug",
            3424329.4924
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
              1190526.57,
              1582423.74,
              2319106.72,
              2175347.89,
              2658556.2,
              2920948.73,
              2940704.47,
              1848971.08,
              1468962.915,
              3100893.0867,
              3263860.3433,
              3426827.6,
              3589794.8567,
              3752762.1133,
              3915729.37,
              4078696.6267,
              4241663.8833,
              4404631.14,
              4567598.3967
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
              10669010.0977,
              14255708.7996,
              14390579.4592,
              11358376.6874,
              13342895.7663,
              13731402.0564,
              13581547.3886,
              10961643.9489,
              6495645.3949
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
              13801318.23,
              17005879.0142,
              14315330.8748,
              10248248.3437,
              15164887.7523,
              12152455.6891,
              13411494.7148,
              8399578.5535,
              3129973.8884
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
              3724888.0114,
              4817763.4396,
              9855392.0977,
              14023183.1226,
              14267560.4592,
              11942630.6874,
              13571204.7663,
              12886870.0564,
              13126495.3886,
              10514972.9489,
              6292227.3949
            ]
          },
          {
            "label": "From Known Sales",
            "data": [
              4747192,
              3724888.0114,
              4817763.4396,
              9855392.0977,
              4617934.1797,
              1732641.2793,
              694469.2232,
              328550.2892,
              190681.3049,
              67116.0825,
              35511.4262,
              12922.5826
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
          "Cincinnati",
          "Richmond",
          "Raleigh",
          "Knoxville"
        ],
        "datasets": [
          {
            "label": "Mix %",
            "data": [
              30.3887,
              17.2366,
              9.6681,
              8.8461,
              6.9898,
              5.8923,
              4.9737,
              4.7505,
              4.012,
              3.9101
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
              43.5512,
              29.2403,
              15.106,
              6.3604,
              2.5618,
              1.6784
            ]
          },
          {
            "label": "Retail-Financing",
            "data": [
              60.9091,
              28.1818,
              7.0455,
              1.3636,
              1.1364,
              0.4545
            ]
          },
          {
            "label": "Retail-No Financing",
            "data": [
              61.9485,
              25.4289,
              7.1691,
              2.6961,
              1.2868,
              0.9804
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
      8411542.480000002,
      14023183.1226,
      14267560.4592,
      11942630.6874,
      13571204.7663,
      12886870.0564,
      13126495.3886,
      10514972.9489,
      6292227.3949
    ],
    "revFromKnown": [
      3312733.0599999987,
      2855781.11,
      6228299.340000002,
      8411542.480000002,
      4617934.1797,
      1732641.2793,
      694469.2232,
      328550.2892,
      190681.3049,
      67116.0825,
      35511.4262,
      12922.5826
    ],
    "requiredSales": [
      3257140.76,
      3120739.51,
      5723127.3,
      13801318.23,
      17005879.0142,
      14315330.8748,
      10248248.3437,
      15164887.7523,
      12152455.6891,
      13411494.7148,
      8399578.5535,
      3129973.8884
    ],
    "backlogData": [
      {
        "month": "Jan 2026",
        "total_backlog": 15196197.72,
        "wip_est": 3721878.33,
        "not_started": 11474319.39,
        "budget_rev": 4747192,
        "pipeline_backlog": 15196197.72,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 4747192,
        "revenue_gap": 0,
        "adjusted_required_sales": 3257140.76,
        "backlog_surplus": 11939056.96
      },
      {
        "month": "Feb 2026",
        "total_backlog": 15196197.72,
        "wip_est": 3721878.33,
        "not_started": 11474319.39,
        "budget_rev": 3536393,
        "pipeline_backlog": 15196197.72,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 3724888.0114,
        "revenue_gap": 0,
        "adjusted_required_sales": 3120739.51,
        "backlog_surplus": 12075458.21
      },
      {
        "month": "Mar 2026",
        "total_backlog": 15196197.72,
        "wip_est": 3721878.33,
        "not_started": 11474319.39,
        "budget_rev": 8125926,
        "pipeline_backlog": 15196197.72,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 4817763.4396,
        "revenue_gap": 3308162.5604,
        "adjusted_required_sales": 5723127.3,
        "backlog_surplus": 9473070.42
      },
      {
        "month": "Apr 2026",
        "total_backlog": 15196197.72,
        "wip_est": 3721878.33,
        "not_started": 11474319.39,
        "budget_rev": 12344293,
        "pipeline_backlog": 15196197.72,
        "new_sales_backlog": 0,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 9855392.0977,
        "revenue_gap": 2488900.9023,
        "adjusted_required_sales": 13801318.23,
        "backlog_surplus": 1394879.49
      },
      {
        "month": "May 2026",
        "total_backlog": 15196197.72,
        "wip_est": 9117718.632,
        "not_started": 6078479.088,
        "budget_rev": 14292330,
        "pipeline_backlog": 15196197.72,
        "new_sales_backlog": 0,
        "pipe_invoicing": 14491433.86,
        "future_invoicing": 3100893.09,
        "rev_from_backlog": 4617934.1797,
        "revenue_gap": 9674395.8203,
        "adjusted_required_sales": 17005879.0142,
        "backlog_surplus": -1809681.2942
      },
      {
        "month": "Jun 2026",
        "total_backlog": 8305393.9313,
        "wip_est": 4983236.3588,
        "not_started": 3322157.5725,
        "budget_rev": 14833760,
        "pipeline_backlog": 704763.86,
        "new_sales_backlog": 7600630.0713,
        "pipe_invoicing": 643257.06,
        "future_invoicing": 14033244.89,
        "rev_from_backlog": 1732641.2793,
        "revenue_gap": 13101118.7207,
        "adjusted_required_sales": 14315330.8748,
        "backlog_surplus": -6009936.9436
      },
      {
        "month": "Jul 2026",
        "total_backlog": 9442548.5661,
        "wip_est": 5665529.1397,
        "not_started": 3777019.4265,
        "budget_rev": 10752016,
        "pipeline_backlog": 61506.8,
        "new_sales_backlog": 9381041.7661,
        "pipe_invoicing": 61506.8,
        "future_invoicing": 21208319.4,
        "rev_from_backlog": 694469.2232,
        "revenue_gap": 10057546.7768,
        "adjusted_required_sales": 10248248.3437,
        "backlog_surplus": -805699.7775
      },
      {
        "month": "Aug 2026",
        "total_backlog": 8381128.6455,
        "wip_est": 5028677.1873,
        "not_started": 3352451.4582,
        "budget_rev": 14513476,
        "pipeline_backlog": 0,
        "new_sales_backlog": 8381128.6455,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 328550.2892,
        "revenue_gap": 14184925.7108,
        "adjusted_required_sales": 15164887.7523,
        "backlog_surplus": -6783759.1067
      },
      {
        "month": "Sep 2026",
        "total_backlog": 10303361.9206,
        "wip_est": 6182017.1524,
        "not_started": 4121344.7682,
        "budget_rev": 12228745,
        "pipeline_backlog": 0,
        "new_sales_backlog": 10303361.9206,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 190681.3049,
        "revenue_gap": 12038063.6951,
        "adjusted_required_sales": 12152455.6891,
        "backlog_surplus": -1849093.7684
      },
      {
        "month": "Oct 2026",
        "total_backlog": 9759628.8582,
        "wip_est": 5855777.3149,
        "not_started": 3903851.5433,
        "budget_rev": 13652917,
        "pipeline_backlog": 0,
        "new_sales_backlog": 9759628.8582,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 67116.0825,
        "revenue_gap": 13585800.9175,
        "adjusted_required_sales": 13411494.7148,
        "backlog_surplus": -3651865.8566
      },
      {
        "month": "Nov 2026",
        "total_backlog": 10111744.267,
        "wip_est": 6067046.5602,
        "not_started": 4044697.7068,
        "budget_rev": 10772169,
        "pipeline_backlog": 0,
        "new_sales_backlog": 10111744.267,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 35511.4262,
        "revenue_gap": 10736657.5738,
        "adjusted_required_sales": 8399578.5535,
        "backlog_surplus": 1712165.7134
      },
      {
        "month": "Dec 2026",
        "total_backlog": 8031861.2978,
        "wip_est": 4819116.7787,
        "not_started": 3212744.5191,
        "budget_rev": 5815820,
        "pipeline_backlog": 0,
        "new_sales_backlog": 8031861.2978,
        "pipe_invoicing": 0,
        "future_invoicing": 0,
        "rev_from_backlog": 12922.5826,
        "revenue_gap": 5802897.4174,
        "adjusted_required_sales": 3129973.8884,
        "backlog_surplus": 4901887.4094
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
      "source": "ResInvoicedYTDResults650.csv",
      "totalInvoiced": 20921267.059999984,
      "invoiceCount": 1148,
      "monthly": [
        3312733.0599999987,
        2855781.11,
        6228299.340000002,
        8411542.480000002,
        112911.07,
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
          "invoiced": 731703.71,
          "count": 28
        },
        "Richmond": {
          "invoiced": 1107542.0299999998,
          "count": 59
        },
        "DC Metro": {
          "invoiced": 2055694.3800000001,
          "count": 115
        },
        "Cleveland": {
          "invoiced": 742091.9099999999,
          "count": 59
        },
        "Nashville": {
          "invoiced": 2497005.230000001,
          "count": 96
        },
        "Columbus": {
          "invoiced": 6181571.15,
          "count": 369
        },
        "Dayton": {
          "invoiced": 1397115.6700000002,
          "count": 82
        },
        "Cincinnati": {
          "invoiced": 1385863.8400000003,
          "count": 75
        },
        "Detroit": {
          "invoiced": 2368922.9999999995,
          "count": 140
        },
        "Raleigh": {
          "invoiced": 1334562.4800000002,
          "count": 65
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
      "latestInvoiceDate": "2026-05-04",
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
          "invoiced": 8411542.480000002,
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
          "calc": 20921267.059999984,
          "diff": -1.4901161193847656e-8,
          "drift": false
        },
        {
          "label": "April Invoiced",
          "excel": 8411542.48,
          "calc": 8411542.480000002,
          "diff": 1.862645149230957e-9,
          "drift": false
        }
      ],
      "drifted": 0
    }
  },
  "BACKLOG": {
    "_source": "calculator/backlog.js v1.0-rules-encoded",
    "title": "Job Backlog & Production",
    "subtitle": "Live job-level backlog",
    "headerMeta": {
      "totalJobs": 512,
      "totalWOs": 751,
      "portfolioValue": 10695926.56,
      "avgDaysInStatus": 12,
      "lastBuild": "2026-05-05T13:47:36.338Z"
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
        "value": "512",
        "sub": "751 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "117",
        "sub": "22.9% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "395",
        "sub": "77.1% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "72",
        "sub": "61.5% of In Progress",
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
        "value": "$10.70M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$1.85M",
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
        "value": "72",
        "sub": "61.5% of In Progress",
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
        "value": "88",
        "sub": "Across 72 jobs",
        "tone": "info"
      },
      {
        "label": "RTS Ready Today",
        "value": "34",
        "sub": "No blocker, dispatch now",
        "tone": "good"
      },
      {
        "label": "Top Trailing Trade",
        "value": "Gutters",
        "sub": "48 open WOs / 48 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "210",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "133",
        "sub": "63.3% of all holds",
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
        "value": "23d",
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
        "value": "$1.85M",
        "sub": "Sum of stale value across all reps",
        "tone": "crit"
      },
      {
        "label": "Reps with Stuck Work",
        "value": "38",
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
        "value": "395",
        "sub": "77.1% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$7.74M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "225d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Columbus",
        "sub": "146 jobs (37% of backlog)",
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
          "Requires Additional Service",
          "New"
        ],
        "datasets": [
          {
            "label": "Work Orders",
            "data": [
              218,
              210,
              191,
              83,
              32,
              15,
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
          "Nashville",
          "DC Metro",
          "Richmond",
          "Dayton",
          "Cincinnati",
          "Raleigh",
          "Knoxville",
          "Grand Rapids",
          "Greenville",
          "NOVA"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              29,
              19,
              8,
              7,
              10,
              2,
              2,
              4,
              0,
              1,
              0,
              1,
              0
            ]
          },
          {
            "label": "Open",
            "data": [
              16,
              11,
              5,
              8,
              3,
              2,
              0,
              2,
              1,
              1,
              0,
              0,
              0
            ]
          },
          {
            "label": "On Hold",
            "data": [
              54,
              70,
              24,
              6,
              21,
              13,
              7,
              7,
              2,
              1,
              5,
              0,
              0
            ]
          },
          {
            "label": "RTS",
            "data": [
              119,
              43,
              18,
              10,
              3,
              2,
              0,
              3,
              5,
              3,
              3,
              5,
              4
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              48,
              27,
              26,
              30,
              16,
              9,
              19,
              2,
              6,
              3,
              1,
              1,
              3
            ]
          }
        ]
      },
      {
        "id": "ch-wo-aging",
        "labels": [
          "Requires Additional Service",
          "On Hold",
          "Completed",
          "Ready to Schedule",
          "Scheduled",
          "In Progress",
          "New"
        ],
        "datasets": [
          {
            "label": "Avg Days",
            "data": [
              27,
              23,
              20,
              13,
              8,
              2,
              0
            ]
          },
          {
            "label": "Max Days",
            "data": [
              112,
              235,
              57,
              140,
              81,
              11,
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
          "Masonry",
          "Windows",
          "Metal",
          "Rack Mounted Solar",
          "Flat Roof",
          "Electrical",
          "GAF Solar",
          "Painting",
          "Other",
          "Carpentry"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              65,
              9,
              7,
              0,
              2,
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
              370,
              184,
              66,
              12,
              9,
              10,
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
              34,
              25,
              17,
              7,
              5
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
              22,
              14,
              18,
              3,
              8
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
          "Raleigh",
          "Cincinnati",
          "Grand Rapids",
          "NOVA",
          "Knoxville",
          "Greenville"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              146,
              90,
              43,
              30,
              20,
              18,
              13,
              11,
              7,
              6,
              4,
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
            266,
            29,
            54,
            119,
            48,
            11,
            3,
            32,
            182,
            3562224.34
          ],
          [
            "Detroit Metro",
            170,
            19,
            70,
            43,
            27,
            7,
            4,
            67,
            120,
            2566120.88
          ],
          [
            "Cleveland",
            81,
            8,
            24,
            18,
            26,
            3,
            2,
            17,
            54,
            970999.96
          ],
          [
            "Nashville",
            61,
            7,
            6,
            10,
            30,
            4,
            4,
            0,
            42,
            886137.21
          ],
          [
            "DC Metro",
            53,
            10,
            21,
            3,
            16,
            2,
            1,
            3,
            29,
            826577.5
          ],
          [
            "Richmond",
            28,
            2,
            13,
            2,
            9,
            2,
            0,
            0,
            17,
            546095.65
          ],
          [
            "Dayton",
            28,
            2,
            7,
            0,
            19,
            0,
            0,
            6,
            22,
            453893.82
          ],
          [
            "Cincinnati",
            18,
            4,
            7,
            3,
            2,
            1,
            1,
            3,
            13,
            243301.91
          ],
          [
            "Raleigh",
            14,
            0,
            2,
            5,
            6,
            1,
            0,
            0,
            12,
            182712.13
          ],
          [
            "Knoxville",
            9,
            1,
            1,
            3,
            3,
            1,
            0,
            0,
            6,
            86724.3
          ],
          [
            "Grand Rapids",
            9,
            0,
            5,
            3,
            1,
            0,
            0,
            5,
            7,
            158517.24
          ],
          [
            "Greenville",
            7,
            1,
            0,
            5,
            1,
            0,
            0,
            0,
            4,
            89974.83
          ],
          [
            "NOVA",
            7,
            0,
            0,
            4,
            3,
            0,
            0,
            0,
            4,
            122646.79
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
            130,
            14,
            196
          ],
          [
            "Pending Material",
            33,
            20,
            215
          ],
          [
            "Pending Sales",
            29,
            42,
            235
          ],
          [
            "Homeowner Request",
            12,
            77,
            225
          ],
          [
            "Pending HOA",
            6,
            18,
            36
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
            48,
            48,
            1134175.53
          ],
          [
            "Siding",
            16,
            16,
            428443.28
          ],
          [
            "Roofing",
            8,
            7,
            112332.71
          ],
          [
            "Masonry",
            5,
            5,
            141394.71
          ],
          [
            "Metal",
            4,
            4,
            222168.13
          ],
          [
            "Rack Mounted Solar",
            3,
            3,
            167063.25
          ],
          [
            "Windows",
            1,
            1,
            29182.47
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
            11456
          ],
          [
            "GAF Solar",
            1,
            1,
            11456
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
            92
          ],
          [
            "On Hold",
            46
          ],
          [
            "Scheduled",
            44
          ],
          [
            "Completed",
            9
          ],
          [
            "In Progress",
            1
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
            435,
            65,
            370,
            427,
            9287334.22
          ],
          [
            "Gutters",
            193,
            9,
            184,
            193,
            4363253.15
          ],
          [
            "Siding",
            73,
            7,
            66,
            73,
            1445859.5
          ],
          [
            "Masonry",
            12,
            0,
            12,
            12,
            303988.71
          ],
          [
            "Windows",
            11,
            2,
            9,
            11,
            182270.6
          ],
          [
            "Metal",
            10,
            0,
            10,
            10,
            612224.26
          ],
          [
            "Rack Mounted Solar",
            5,
            0,
            5,
            5,
            200457.25
          ],
          [
            "Flat Roof",
            4,
            0,
            4,
            4,
            168814.93
          ],
          [
            "Electrical",
            2,
            0,
            2,
            2,
            57358.73
          ],
          [
            "GAF Solar",
            2,
            0,
            2,
            2,
            223456
          ],
          [
            "Painting",
            2,
            0,
            2,
            2,
            94737.14
          ],
          [
            "Other",
            1,
            0,
            1,
            1,
            5207.42
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
            10
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
            3,
            2,
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
            "Matthew Ross",
            32,
            22,
            117381,
            6,
            2
          ],
          [
            "Kevin Ditty",
            31,
            19,
            116110.88,
            6,
            1
          ],
          [
            "Justin Hook",
            3,
            1,
            105020.5,
            2,
            1
          ],
          [
            "Cole Burgess",
            28,
            18,
            99591,
            3,
            1
          ],
          [
            "Dan Haske",
            12,
            7,
            80884,
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
            "Richard Rice",
            20,
            13,
            62780,
            6,
            1
          ],
          [
            "Mark Younce",
            9,
            4,
            54749.35,
            3,
            2
          ],
          [
            "Storm Drumm",
            31,
            22,
            43821,
            3,
            1
          ],
          [
            "Noah Jenkins",
            2,
            1,
            41831.11,
            1,
            1
          ],
          [
            "Dan Strudgeon",
            6,
            5,
            41260,
            2,
            1
          ],
          [
            "Brian Ogrin",
            13,
            6,
            40300,
            1,
            1
          ],
          [
            "Scott Scaperato",
            26,
            16,
            38491,
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
            146,
            2671135.02,
            70
          ],
          [
            "Detroit Metro",
            90,
            1806426.46,
            225
          ],
          [
            "Cleveland",
            43,
            724313.74,
            29
          ],
          [
            "Nashville",
            30,
            571689.67,
            15
          ],
          [
            "Dayton",
            20,
            416245.82,
            22
          ],
          [
            "DC Metro",
            18,
            385347.88,
            57
          ],
          [
            "Richmond",
            13,
            465902.68,
            76
          ],
          [
            "Raleigh",
            11,
            179262.13,
            78
          ],
          [
            "Cincinnati",
            7,
            115617.09,
            53
          ],
          [
            "Grand Rapids",
            6,
            149734.26,
            32
          ],
          [
            "NOVA",
            4,
            122646.79,
            1
          ],
          [
            "Knoxville",
            4,
            48624.3,
            6
          ],
          [
            "Greenville",
            3,
            78388.01,
            6
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
            225,
            44826
          ],
          [
            "Job-107171",
            "Janetta Reese",
            "Detroit Metro",
            "Siding",
            "Pending Permit",
            "Richard Rice",
            91,
            2078
          ],
          [
            "Job-107193",
            "Saju Michil",
            "Raleigh",
            "Roofing",
            "Pending Sales",
            "Eric England",
            78,
            20332.62
          ],
          [
            "Job-108163",
            "Mayank Sri",
            "Richmond",
            "Metal",
            "Pending Sales",
            "Luca Benedetti",
            76,
            29205.81
          ],
          [
            "Job-108368",
            "Jason And Jamie Russel",
            "Columbus",
            "Gutters",
            "Homeowner Request",
            "Bill Applegate",
            70,
            3241.17
          ],
          [
            "Job-108783",
            "Susie Kelly",
            "Detroit Metro",
            "Gutters",
            "",
            "Gary Holm",
            62,
            9000
          ],
          [
            "Job-108962",
            "Kent Mccullough",
            "DC Metro",
            "Roofing",
            "Pending Permit",
            "Derrick Sieber",
            57,
            20300
          ],
          [
            "Job-106057",
            "David Wedig",
            "Cincinnati",
            "Roofing",
            "",
            "Wes McCorkle",
            53,
            19675.69
          ],
          [
            "Job-109039",
            "Joe Dials",
            "Columbus",
            "Roofing",
            "Pending Sales",
            "Derik Heinz",
            52,
            22523
          ],
          [
            "Job-109681",
            "George Potts",
            "DC Metro",
            "Roofing",
            "Pending Sales",
            "Dan Haske",
            48,
            24567
          ],
          [
            "Job-108475",
            "Tom Lisk",
            "Detroit Metro",
            "Roofing",
            "",
            "Dan Strudgeon",
            47,
            8985
          ],
          [
            "Job-110332",
            "Peter Quigley",
            "Detroit Metro",
            "Gutters",
            "",
            "Matthew Ross",
            40,
            3075
          ],
          [
            "Job-110338",
            "Charlene Zupanick",
            "Detroit Metro",
            "Gutters",
            "",
            "Richard Rice",
            40,
            4757
          ],
          [
            "Job-099374",
            "Good Shepard Baptist Church",
            "Richmond",
            "Metal",
            "Pending Material",
            "Hunter Carrington Scott",
            39,
            239596.83
          ],
          [
            "Job-110493",
            "Cindy Song",
            "DC Metro",
            "Roofing",
            "Pending HOA",
            "Derrick Sieber",
            36,
            13459.99
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Detroit Metro",
          "permits": 67
        },
        {
          "branch": "Columbus",
          "permits": 32
        },
        {
          "branch": "Cleveland",
          "permits": 17
        },
        {
          "branch": "Dayton",
          "permits": 6
        },
        {
          "branch": "Grand Rapids",
          "permits": 5
        },
        {
          "branch": "DC Metro",
          "permits": 3
        },
        {
          "branch": "Cincinnati",
          "permits": 3
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $1.84M of trapped partial-job revenue into billable revenue, reduce $1.85M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Dispatch the 34 RTS WOs sitting on partial jobs. No blocker, no hold, just dispatch.",
        "Re-dispatch the 15 RAS WOs (oldest at 112 days). These are pure re-work fastballs.",
        "Gutters sweep: 48 open WOs across 48 partial jobs blocking $1.13M. Highest single-trade leverage in the book.",
        "Detroit Metro permit sweep: 67 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one.",
        "Close out the 6 zombie jobs (all WOs Completed, parent still In Progress). Pure paperwork."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Gutters): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 395 jobs ($7.74M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
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
