/* AUTO-GENERATED — do not edit. Generated 2026-05-06T20:44:13.510Z (residential) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-05-06T20:44:13.510Z",
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
        "elapsedMs": 76,
        "builtAt": "2026-05-06T20:44:13.510Z"
      },
      {
        "id": "sales-overview",
        "version": "1.0-rules-encoded",
        "elapsedMs": 434,
        "builtAt": "2026-05-06T20:44:13.510Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-locked-2026-04-19-shell-1.0",
        "elapsedMs": 4619,
        "builtAt": "2026-05-06T20:44:13.510Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 43,
        "builtAt": "2026-05-06T20:44:13.510Z"
      }
    ]
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 06, 2026 - May 05, 2026 - De-Duplicated at Job Level - 1,127 Jobs - 14 Markets - 28 PMs",
    "generated": "2026-05-06",
    "headerMeta": {
      "trueRevenue": 20926817.06,
      "uniqueJobs": 1127,
      "markets": 14,
      "pms": 28,
      "medianComplete": 22.6,
      "avgStart": 28,
      "multiTradeJobs": 318,
      "singleTradeJobs": 809,
      "multiTradePct": 28.2,
      "lastBuild": "2026-05-06T20:44:13.510Z"
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
        "value": "$20.93M",
        "sub": "1,127 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$18,569",
        "sub": "Per job (deduped)"
      },
      {
        "label": "Median Days to Complete",
        "value": "22.6d",
        "sub": "Job-level median"
      },
      {
        "label": "Avg Days to Start",
        "value": "28.0d",
        "sub": "Sale to crew on-site"
      },
      {
        "label": "Multi-Trade Jobs",
        "value": "318",
        "sub": "28.2% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "809",
        "sub": "71.8% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$25,920",
        "sub": "+65.3% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$15,679",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+28.0d",
        "sub": "MT 45.6d vs ST 17.5d"
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
        "rev": 1193906.98,
        "jobs": 64,
        "med": 19.6,
        "start": 18.2
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
              1193906.98
            ]
          },
          {
            "label": "Jobs",
            "data": [
              147,
              139,
              335,
              442,
              64
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
              19.6
            ]
          },
          {
            "label": "Avg Days to Start",
            "data": [
              25.2,
              32.9,
              33.7,
              25,
              18.2
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
              318
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              809
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
              211,
              22,
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
          "Nashville",
          "Detroit Metro",
          "DC Metro",
          "Dayton",
          "Cincinnati",
          "Raleigh",
          "Richmond",
          "Knoxville",
          "Cleveland",
          "Greenville",
          "NOVA",
          "Greensboro",
          "Grand Rapids"
        ],
        "datasets": [
          {
            "label": "MT %",
            "data": [
              25.5,
              31.6,
              28.3,
              31,
              23.8,
              29.9,
              15.3,
              35.6,
              35.2,
              33.9,
              22.2,
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
          "Nashville",
          "Detroit Metro",
          "DC Metro",
          "Dayton",
          "Cincinnati",
          "Raleigh",
          "Richmond",
          "Knoxville",
          "Cleveland",
          "Greenville",
          "NOVA",
          "Greensboro",
          "Grand Rapids"
        ],
        "datasets": [
          {
            "label": "MT Median",
            "data": [
              69.1,
              26.6,
              43.7,
              40.5,
              54.7,
              50.1,
              64.4,
              56.5,
              28.6,
              30.4,
              38,
              66.6,
              346.7,
              31.6
            ]
          },
          {
            "label": "ST Median",
            "data": [
              12.4,
              18.5,
              21.5,
              22.6,
              25.6,
              18.6,
              21.5,
              10.1,
              17.5,
              16.6,
              20.7,
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
          "Nashville",
          "Detroit Metro",
          "DC Metro",
          "Dayton",
          "Cincinnati",
          "Raleigh",
          "Richmond",
          "Knoxville",
          "Cleveland",
          "Greenville",
          "NOVA",
          "Greensboro",
          "Grand Rapids"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              6146980.94,
              2459007.73,
              2440240.6,
              1615474.46,
              1396751.37,
              1369183.73,
              1302689.39,
              1152891.85,
              1022490.26,
              757880.16,
              742330.19,
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
          "Nashville",
          "Detroit Metro",
          "DC Metro",
          "Dayton",
          "Cincinnati",
          "Raleigh",
          "Richmond",
          "Knoxville",
          "Cleveland",
          "Greenville",
          "NOVA",
          "Greensboro",
          "Grand Rapids"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              17.7,
              21.6,
              27.7,
              25.4,
              30,
              28.6,
              27.7,
              22.4,
              23.1,
              21.1,
              22.5,
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
          "Abraham Santiago",
          "Galo Munive",
          "Alex Dubanoski",
          "Brandon Skrzypek",
          "Joseph Jones",
          "Levi Nieman",
          "Brady Weingartner"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              1572998.11,
              1453608.82,
              1438022.98,
              1315830.81,
              1309091.78,
              1107279.6,
              1015843.62,
              988499.75,
              951087.4,
              945425.09,
              907922.8,
              905982.38,
              904950.52,
              830819.42,
              736434.86
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
          "Abraham Santiago",
          "Galo Munive",
          "Alex Dubanoski",
          "Brandon Skrzypek",
          "Joseph Jones",
          "Levi Nieman",
          "Brady Weingartner",
          "Shawn Oehlstrom",
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
                "x": 29.6,
                "y": 1572998.11,
                "wos": 76,
                "name": "Eric Isakov"
              },
              {
                "x": 30.5,
                "y": 1453608.82,
                "wos": 117,
                "name": "Joseph Yager"
              },
              {
                "x": 25.5,
                "y": 1438022.98,
                "wos": 92,
                "name": "Mason Bryant"
              },
              {
                "x": 23.7,
                "y": 1315830.81,
                "wos": 69,
                "name": "Brandon Harter"
              },
              {
                "x": 28.5,
                "y": 1309091.78,
                "wos": 75,
                "name": "Kaden Carter"
              },
              {
                "x": 28.5,
                "y": 1107279.6,
                "wos": 68,
                "name": "Landon Little"
              },
              {
                "x": 39.6,
                "y": 1015843.62,
                "wos": 76,
                "name": "Richard Williams"
              },
              {
                "x": 25.4,
                "y": 988499.75,
                "wos": 75,
                "name": "Alejandro Alvarado"
              },
              {
                "x": 23.6,
                "y": 951087.4,
                "wos": 48,
                "name": "Abraham Santiago"
              },
              {
                "x": 34.5,
                "y": 945425.09,
                "wos": 75,
                "name": "Galo Munive"
              },
              {
                "x": 14.6,
                "y": 907922.8,
                "wos": 66,
                "name": "Alex Dubanoski"
              },
              {
                "x": 32,
                "y": 905982.38,
                "wos": 46,
                "name": "Brandon Skrzypek"
              },
              {
                "x": 22.1,
                "y": 904950.52,
                "wos": 67,
                "name": "Joseph Jones"
              },
              {
                "x": 29.7,
                "y": 830819.42,
                "wos": 48,
                "name": "Levi Nieman"
              },
              {
                "x": 25.6,
                "y": 736434.86,
                "wos": 38,
                "name": "Brady Weingartner"
              },
              {
                "x": 21.1,
                "y": 736013.17,
                "wos": 81,
                "name": "Shawn Oehlstrom"
              },
              {
                "x": 28.4,
                "y": 677909.8,
                "wos": 91,
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
                "y": 491657.14,
                "wos": 128,
                "name": "Drew Bailey"
              },
              {
                "x": 31.1,
                "y": 461133.14,
                "wos": 29,
                "name": "Austin Weingartner"
              },
              {
                "x": 65,
                "y": 376232.44,
                "wos": 38,
                "name": "Chad Williams"
              },
              {
                "x": 69.7,
                "y": 359460.88,
                "wos": 36,
                "name": "Daniel Galli"
              },
              {
                "x": 17.7,
                "y": 300173.44,
                "wos": 18,
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
                "x": 63,
                "y": 25111,
                "wos": 6,
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
              15592830.15,
              3073743.21,
              907439.7,
              378035.09,
              359655.52,
              256070.04,
              122992.11,
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
              22.7,
              33.7,
              59.1,
              148.7,
              84,
              105.6,
              58.7,
              108.6,
              76.1,
              149.7,
              84.7,
              43.7,
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
          "Kayla Wright",
          "Brenda Dixon"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              348,
              258,
              236,
              151,
              104,
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
              32.1,
              22.6,
              12,
              27.5,
              24.6,
              117.4,
              103.1,
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
              34.5,
              30.6,
              14.4,
              30.5,
              23.1,
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
                "x": 32.1,
                "y": 19684.9,
                "jobs": 348,
                "name": "Brandon Vera"
              },
              {
                "x": 22.6,
                "y": 22232.27,
                "jobs": 258,
                "name": "David Schwan"
              },
              {
                "x": 12,
                "y": 14242.07,
                "jobs": 236,
                "name": "Amanda Wade"
              },
              {
                "x": 27.5,
                "y": 17423.66,
                "jobs": 151,
                "name": "Bradley Essex"
              },
              {
                "x": 24.6,
                "y": 15355.76,
                "jobs": 104,
                "name": "Thomas Hayes"
              },
              {
                "x": 117.4,
                "y": 25689.43,
                "jobs": 17,
                "name": "Morgan Valois"
              },
              {
                "x": 103.1,
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
            368,
            6146980.94,
            16703.75,
            17.7,
            34.2,
            25.5,
            69.1,
            12.4
          ],
          [
            "Nashville",
            98,
            2459007.73,
            25091.92,
            21.6,
            18.3,
            31.6,
            26.6,
            18.5
          ],
          [
            "Detroit Metro",
            145,
            2440240.6,
            16829.25,
            27.7,
            37.9,
            28.3,
            43.7,
            21.5
          ],
          [
            "DC Metro",
            87,
            1615474.46,
            18568.67,
            25.4,
            23.4,
            31,
            40.5,
            22.6
          ],
          [
            "Dayton",
            80,
            1396751.37,
            17459.39,
            30,
            23.4,
            23.8,
            54.7,
            25.6
          ],
          [
            "Cincinnati",
            67,
            1369183.73,
            20435.58,
            28.6,
            26,
            29.9,
            50.1,
            18.6
          ],
          [
            "Raleigh",
            59,
            1302689.39,
            22079.48,
            27.7,
            23.4,
            15.3,
            64.4,
            21.5
          ],
          [
            "Richmond",
            59,
            1152891.85,
            19540.54,
            22.4,
            16.6,
            35.6,
            56.5,
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
            28.6,
            17.5
          ],
          [
            "Cleveland",
            56,
            757880.16,
            13533.57,
            21.1,
            35.3,
            33.9,
            30.4,
            16.6
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
            29.6,
            33.1
          ],
          [
            "Joseph Yager",
            117,
            96,
            1453608.82,
            12424.01,
            30.5,
            26.3
          ],
          [
            "Mason Bryant",
            92,
            78,
            1438022.98,
            15630.68,
            25.5,
            29.3
          ],
          [
            "Brandon Harter",
            69,
            51,
            1315830.81,
            19070.01,
            23.7,
            17.8
          ],
          [
            "Kaden Carter",
            75,
            61,
            1309091.78,
            17454.56,
            28.5,
            23.9
          ],
          [
            "Landon Little",
            68,
            63,
            1107279.6,
            16283.52,
            28.5,
            33.9
          ],
          [
            "Richard Williams",
            76,
            71,
            1015843.62,
            13366.36,
            39.6,
            33.5
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
            "Abraham Santiago",
            48,
            42,
            951087.4,
            19814.32,
            23.6,
            19.8
          ],
          [
            "Galo Munive",
            75,
            57,
            945425.09,
            12605.67,
            34.5,
            27.3
          ],
          [
            "Alex Dubanoski",
            66,
            49,
            907922.8,
            13756.41,
            14.6,
            15.9
          ],
          [
            "Brandon Skrzypek",
            46,
            46,
            905982.38,
            19695.27,
            32,
            32.3
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
            "Levi Nieman",
            48,
            47,
            830819.42,
            17308.74,
            29.7,
            44.2
          ],
          [
            "Brady Weingartner",
            38,
            38,
            736434.86,
            19379.86,
            25.6,
            21.9
          ],
          [
            "Shawn Oehlstrom",
            81,
            56,
            736013.17,
            9086.58,
            21.1,
            35.3
          ],
          [
            "Jason Andrews",
            91,
            79,
            677909.8,
            7449.56,
            28.4,
            39
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
            128,
            127,
            491657.14,
            3841.07,
            5.6,
            28.1
          ],
          [
            "Austin Weingartner",
            29,
            26,
            461133.14,
            15901.14,
            31.1,
            29.9
          ],
          [
            "Chad Williams",
            38,
            22,
            376232.44,
            9900.85,
            65,
            23.1
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
            18,
            15,
            300173.44,
            16676.3,
            17.7,
            22.6
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
            70.8
          ],
          [
            "Chris Atkins",
            6,
            4,
            25111,
            4185.17,
            63,
            43.8
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
            1025,
            15592830.15,
            15212.52,
            22.7
          ],
          [
            "Gutters",
            327,
            3073743.21,
            9399.83,
            33.7
          ],
          [
            "Siding",
            94,
            907439.7,
            9653.61,
            59.1
          ],
          [
            "Metal",
            21,
            378035.09,
            18001.67,
            148.7
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
            256070.04,
            12803.5,
            105.6
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
            348,
            6850344.83,
            19684.9,
            "32.1d",
            "27.5d",
            34.5,
            19684.9
          ],
          [
            "David Schwan",
            258,
            5735926.63,
            22232.27,
            "22.6d",
            "26.1d",
            30.6,
            22232.27
          ],
          [
            "Amanda Wade",
            236,
            3361128.82,
            14242.07,
            "12d",
            "29.7d",
            14.4,
            14242.07
          ],
          [
            "Bradley Essex",
            151,
            2630973.12,
            17423.66,
            "27.5d",
            "26.5d",
            30.5,
            17423.66
          ],
          [
            "Thomas Hayes",
            104,
            1596998.61,
            15355.76,
            "24.6d",
            "29.6d",
            23.1,
            15355.76
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
            "103.1d",
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
            48,
            0,
            236
          ],
          [
            "Bradley Essex",
            46,
            46,
            2,
            0,
            55,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            151
          ],
          [
            "Brandon Vera",
            8,
            2,
            95,
            87,
            21,
            36,
            0,
            0,
            6,
            0,
            24,
            0,
            10,
            59,
            348
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
            95,
            0,
            0,
            0,
            0,
            0,
            0,
            54,
            0,
            97,
            0,
            0,
            258
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
            92,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            104
          ],
          [
            "Total",
            67,
            56,
            368,
            87,
            80,
            145,
            2,
            1,
            27,
            54,
            24,
            98,
            59,
            59,
            1127
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Daniel Galli: 36 WOs, $359K revenue, 69.7-day median complete, top-volume PM with the slowest cycle in the network.",
        "Multi-trade penalty is severe in 3 markets: Columbus MT 69.1d vs ST 12.4d, Richmond MT 56.5d vs ST 10.1d, Raleigh MT 64.4d vs ST 21.5d.",
        "Days to Start averages 28.0 days company-wide and 37.9 days in Detroit Metro (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [
        "Drew Bailey: 128 WOs, $3,841 revenue per WO, the lowest revenue density of any active high-volume PM.",
        "Gutters-only work runs at 33.7-day median complete versus 22.7 days for roofing, 48% slower cycle on the lowest-priced trade.",
        "Amanda Wade creates 236 jobs at $14,242 average contract and 14.4% multi-trade attach, well below the top creator."
      ],
      "positivesToBuildOn": [
        "April delivered $7.86M across 442 invoiced jobs at 17.6-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "Columbus hits 17.7-day median complete and a $16,704 average contract on 368 jobs.",
        "Multi-trade jobs carry a $25,920 average contract versus $15,679 for single-trade, a 65% revenue lift per job.",
        "Columbus is the best-balanced market: 17.7-day median complete, 25.5% multi-trade attach, $16,704 average contract on 368 jobs."
      ]
    }
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-05-28",
    "ytdDays": 126,
    "rowCount": 1730,
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
        "value": "$26.87M",
        "sub": "1,730 signed contracts across 13 markets"
      },
      {
        "label": "Sold",
        "value": "$23.34M",
        "sub": "1,538 deals | 88.9% of signed contracts"
      },
      {
        "label": "Production Review",
        "value": "$2.32M",
        "sub": "130 deals | Ops Review, PM Review, Contracted"
      },
      {
        "label": "Kicked Back",
        "value": "$1.16M",
        "sub": "58 deals | 3.4% of signed contracts",
        "trend": "negative"
      },
      {
        "label": "Sales Action",
        "value": "$49K",
        "sub": "3 deals requiring sales follow-up",
        "trend": "neutral"
      },
      {
        "label": "Avg Deal Size",
        "value": "$15,533",
        "sub": "Median: $14,322 | Install avg: $18,134"
      },
      {
        "label": "Organization",
        "value": "131 Reps",
        "sub": "13 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$77.84M",
        "sub": "Based on 126 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "84.1% / 15.7%",
        "sub": "1,455 installs | 272 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 1538,
        "amount": 23344184.55
      },
      {
        "label": "Production Review",
        "count": 130,
        "amount": 2318458.17
      },
      {
        "label": "Kicked Back",
        "count": 58,
        "amount": 1160372.47
      },
      {
        "label": "Sales Action",
        "count": 3,
        "amount": 48656
      },
      {
        "label": "Other",
        "count": 1,
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
        "count": 757,
        "amount": 11776809.37,
        "installs": 656,
        "repairs": 100,
        "avgDeal": 15557,
        "repairPct": 13.2,
        "installAvg": 17724,
        "repairAvg": 1493
      },
      {
        "key": "2026-05",
        "label": "May",
        "count": 55,
        "amount": 787190.21,
        "installs": 49,
        "repairs": 5,
        "avgDeal": 14313,
        "repairPct": 9.1,
        "installAvg": 15376,
        "repairAvg": 1903
      }
    ],
    "jobTypeMixByMonth": {
      "Retail-No Financing": {
        "2026-01": 1317788.72,
        "2026-02": 1790259.77,
        "2026-03": 2949119.7,
        "2026-04": 3922553.93,
        "2026-05": 69144.53
      },
      "Insurance": {
        "2026-01": 1437020.6,
        "2026-02": 1673072.24,
        "2026-03": 2685615.35,
        "2026-04": 4334714.91,
        "2026-05": 106063.02
      },
      "Retail-Financing": {
        "2026-01": 509089.46,
        "2026-02": 648180.17,
        "2026-03": 1135621.56,
        "2026-04": 951111.6,
        "2026-05": 31220.99
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Insurance",
        "count": 514,
        "amount": 10236486.12,
        "avg": 19915
      },
      {
        "jobType": "Retail-No Financing",
        "count": 877,
        "amount": 10048866.65,
        "avg": 11458
      },
      {
        "jobType": "Retail-Financing",
        "count": 156,
        "amount": 3275223.78,
        "avg": 20995
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
        "count": 178,
        "amount": 2707784.69
      },
      {
        "w": 16,
        "count": 184,
        "amount": 3006933.72
      },
      {
        "w": 17,
        "count": 189,
        "amount": 2923062.45
      },
      {
        "w": 18,
        "count": 137,
        "amount": 2036666.78
      },
      {
        "w": 19,
        "count": 25,
        "amount": 388064.24
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
          8401827.47,
          564,
          14897,
          454,
          110,
          19.5,
          7
        ],
        [
          "Detroit Metro",
          4913914.87,
          293,
          16771,
          270,
          23,
          7.8,
          4
        ],
        [
          "Nashville",
          2667924.7,
          177,
          15073,
          126,
          51,
          28.8,
          6
        ],
        [
          "Dayton",
          1728563.62,
          105,
          16463,
          98,
          6,
          5.7,
          20
        ],
        [
          "DC Metro",
          1718036.24,
          113,
          15204,
          84,
          29,
          25.7,
          13
        ],
        [
          "Cleveland",
          1660892.1,
          159,
          10446,
          120,
          39,
          24.5,
          4
        ],
        [
          "Richmond",
          1575624.09,
          68,
          23171,
          65,
          2,
          2.9,
          32
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
          "opps": 1521,
          "soldAmt": 4727768.37,
          "closePct": 30.3,
          "nsli": 3108
        },
        {
          "branch": "Detroit",
          "opps": 596,
          "soldAmt": 3421548.25,
          "closePct": 41.1,
          "nsli": 5741
        },
        {
          "branch": "Cleveland",
          "opps": 473,
          "soldAmt": 1167845.29,
          "closePct": 27.5,
          "nsli": 2469
        },
        {
          "branch": "Nashville",
          "opps": 224,
          "soldAmt": 1090218.22,
          "closePct": 43.3,
          "nsli": 4867
        },
        {
          "branch": "DC Metro",
          "opps": 237,
          "soldAmt": 781206.74,
          "closePct": 26.6,
          "nsli": 3296
        },
        {
          "branch": "Cincinnati",
          "opps": 228,
          "soldAmt": 679287.61,
          "closePct": 23.2,
          "nsli": 2979
        },
        {
          "branch": "Dayton",
          "opps": 160,
          "soldAmt": 536081.51,
          "closePct": 25,
          "nsli": 3351
        },
        {
          "branch": "Greenville",
          "opps": 71,
          "soldAmt": 326223.36,
          "closePct": 25.4,
          "nsli": 4595
        },
        {
          "branch": "Knoxville",
          "opps": 51,
          "soldAmt": 229155.66,
          "closePct": 35.3,
          "nsli": 4493
        },
        {
          "branch": "Richmond",
          "opps": 59,
          "soldAmt": 209553.93,
          "closePct": 25.4,
          "nsli": 3552
        },
        {
          "branch": "Raleigh",
          "opps": 109,
          "soldAmt": 196833.06,
          "closePct": 16.5,
          "nsli": 1806
        },
        {
          "branch": "Grand Rapids",
          "opps": 74,
          "soldAmt": 158964.2,
          "closePct": 16.2,
          "nsli": 2148
        },
        {
          "branch": "DC Metro",
          "opps": 24,
          "soldAmt": 50729.35,
          "closePct": 29.2,
          "nsli": 2114
        }
      ],
      "totals": {
        "opps": 3827,
        "soldAmt": 13575415.55,
        "closePct": 30.8,
        "nsli": 3547
      },
      "source": "Closing Percent By Branch-2026-05-06-13-59-30.xlsx",
      "format": "aggregated"
    },
    "marketKickbacks": [
      {
        "market": "Columbus",
        "kicked": 25,
        "kickedAmount": 581199.07
      },
      {
        "market": "Dayton",
        "kicked": 6,
        "kickedAmount": 60694.98
      },
      {
        "market": "Cincinnati",
        "kicked": 5,
        "kickedAmount": 29086.74
      },
      {
        "market": "Cleveland",
        "kicked": 5,
        "kickedAmount": 27498.18
      },
      {
        "market": "Richmond",
        "kicked": 4,
        "kickedAmount": 216638.9
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
        "Dayton",
        "DC Metro",
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
          "Retail-Financing": 13
        },
        "installs": 40,
        "repairs": 17
      },
      {
        "name": "Storm Drumm",
        "amount": 843559.38,
        "count": 55,
        "avg": 15337,
        "medDays": 2,
        "jt": {
          "Retail-No Financing": 27,
          "Retail-Financing": 11,
          "Insurance": 12
        },
        "installs": 52,
        "repairs": 3
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
          "Retail-No Financing": 24,
          "Insurance": 2
        },
        "installs": 33,
        "repairs": 0
      },
      {
        "name": "Scott Scaperato",
        "amount": 563287.66,
        "count": 55,
        "avg": 10242,
        "medDays": 2,
        "jt": {
          "Retail-Financing": 12,
          "Retail-No Financing": 32,
          "Insurance": 6
        },
        "installs": 43,
        "repairs": 12
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
        "name": "Donald Richard",
        "amount": 544962,
        "count": 31,
        "avg": 17579,
        "medDays": 4,
        "jt": {
          "Retail-No Financing": 23,
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
        "amount": 497541,
        "count": 25,
        "avg": 19902,
        "medDays": 6,
        "jt": {
          "Retail-No Financing": 15,
          "Insurance": 3,
          "Retail-Financing": 2
        },
        "installs": 22,
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
          "Retail-No Financing": 20,
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
          "Retail-No Financing": 37,
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
          "Retail-No Financing": 15,
          "Retail-Financing": 1
        },
        "installs": 25,
        "repairs": 7
      }
    ],
    "speedSellers": [
      {
        "name": "Evan Kelley",
        "medDays": 1
      },
      {
        "name": "Storm Drumm",
        "medDays": 2
      },
      {
        "name": "Scott Scaperato",
        "medDays": 2
      },
      {
        "name": "Cole Burgess",
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
      },
      {
        "name": "Derik Heinz",
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
        "name": "Justin Koenig",
        "repairs": 7,
        "deals": 13,
        "pct": 53.8
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
          "sub": "Median | Mean: 73 days"
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
          "count": 828
        },
        {
          "label": "Retail-Fin",
          "median": 3,
          "mean": 19,
          "count": 152
        },
        {
          "label": "Insurance",
          "median": 27,
          "mean": 73,
          "count": 492
        },
        {
          "label": "Repair",
          "median": 3,
          "mean": 7,
          "count": 253
        },
        {
          "label": "Install",
          "median": 9,
          "mean": 42,
          "count": 1384
        }
      ],
      "byMarket": [
        {
          "market": "Detroit Metro",
          "median": 4,
          "mean": 24,
          "count": 284
        },
        {
          "market": "Cleveland",
          "median": 4,
          "mean": 28,
          "count": 152
        },
        {
          "market": "Greenville",
          "median": 5,
          "mean": 6,
          "count": 24
        },
        {
          "market": "Nashville",
          "median": 6,
          "mean": 18,
          "count": 172
        },
        {
          "market": "Columbus",
          "median": 7,
          "mean": 33,
          "count": 514
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
          "mean": 58,
          "count": 105
        },
        {
          "market": "Dayton",
          "median": 20,
          "mean": 46,
          "count": 102
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
          "median": 32,
          "mean": 88,
          "count": 65
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
          "count": 12
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
      "totalUnbilled": 898982.82,
      "totalJobs": 48,
      "avgAge": 12.8,
      "medAge": 11,
      "tiers": [
        {
          "label": "Warning (30-59 days)",
          "count": 4,
          "amount": 70014.64,
          "color": "orange"
        },
        {
          "label": "Watch (14-29 days)",
          "count": 15,
          "amount": 293366.16,
          "color": "blue"
        },
        {
          "label": "Fresh (0-13 days)",
          "count": 29,
          "amount": 535602.02,
          "color": "green"
        }
      ],
      "bySubStatus": [
        {
          "subStatus": "Pending Supplement",
          "count": 31,
          "amount": 579782.77,
          "avgAge": 14,
          "action": "Follow up with insurance carrier on supplement approval. Escalate if >30 days."
        },
        {
          "subStatus": "Accounting Kickback",
          "count": 9,
          "amount": 170236.92,
          "avgAge": 14,
          "action": "Review kickback reason, correct documentation or pricing, resubmit to accounting."
        },
        {
          "subStatus": "Ready to Invoice",
          "count": 6,
          "amount": 123338.39,
          "avgAge": 0,
          "action": "No blockers, submit invoice immediately. This is free cash waiting."
        },
        {
          "subStatus": "No Sub Status",
          "count": 2,
          "amount": 25624.74,
          "avgAge": 25,
          "action": "Review job, identify what is blocking billing, assign owner."
        }
      ],
      "byMarket": [
        {
          "market": "Columbus",
          "count": 16,
          "amount": 267707.45,
          "avgAge": 14,
          "urgency": "LOW"
        },
        {
          "market": "Knoxville",
          "count": 5,
          "amount": 100194.46,
          "avgAge": 16,
          "urgency": "MEDIUM"
        },
        {
          "market": "Cincinnati",
          "count": 4,
          "amount": 91740.7,
          "avgAge": 11,
          "urgency": "LOW"
        },
        {
          "market": "Richmond",
          "count": 3,
          "amount": 73215.88,
          "avgAge": 9,
          "urgency": "LOW"
        },
        {
          "market": "Detroit Metro",
          "count": 3,
          "amount": 71145,
          "avgAge": 1,
          "urgency": "LOW"
        },
        {
          "market": "Dayton",
          "count": 3,
          "amount": 61233.98,
          "avgAge": 11,
          "urgency": "LOW"
        },
        {
          "market": "Nashville",
          "count": 2,
          "amount": 55857.53,
          "avgAge": 18,
          "urgency": "MEDIUM"
        },
        {
          "market": "Cleveland",
          "count": 5,
          "amount": 51650.08,
          "avgAge": 14,
          "urgency": "LOW"
        },
        {
          "market": "DC Metro",
          "count": 2,
          "amount": 47286.54,
          "avgAge": 12,
          "urgency": "LOW"
        },
        {
          "market": "Greenville",
          "count": 3,
          "amount": 46352.81,
          "avgAge": 9,
          "urgency": "LOW"
        },
        {
          "market": "Raleigh",
          "count": 2,
          "amount": 32598.39,
          "avgAge": 26,
          "urgency": "MEDIUM"
        }
      ],
      "byRepTop15": [
        {
          "rep": "Sam Doyle",
          "count": 2,
          "amount": 63843.25,
          "oldest": 14
        },
        {
          "rep": "Sam Scorziell",
          "count": 2,
          "amount": 60625.06,
          "oldest": 36
        },
        {
          "rep": "Trey Rury",
          "count": 2,
          "amount": 55857.53,
          "oldest": 28
        },
        {
          "rep": "Frank Butts",
          "count": 4,
          "amount": 51450.08,
          "oldest": 12
        },
        {
          "rep": "Derrick Sieber",
          "count": 2,
          "amount": 47286.54,
          "oldest": 18
        },
        {
          "rep": "Tim Washer",
          "count": 2,
          "amount": 44600,
          "oldest": 16
        },
        {
          "rep": "Robert Beck",
          "count": 1,
          "amount": 43482,
          "oldest": 19
        },
        {
          "rep": "Michael Conley",
          "count": 2,
          "amount": 42902,
          "oldest": 14
        },
        {
          "rep": "Kyle Gibson",
          "count": 2,
          "amount": 41810.49,
          "oldest": 19
        },
        {
          "rep": "David Walden",
          "count": 1,
          "amount": 34483,
          "oldest": 2
        },
        {
          "rep": "Zachary Schneider",
          "count": 2,
          "amount": 34346.45,
          "oldest": 13
        },
        {
          "rep": "Morgan King",
          "count": 2,
          "amount": 33341.61,
          "oldest": 21
        },
        {
          "rep": "Thomas Urling",
          "count": 1,
          "amount": 32347.09,
          "oldest": 0
        },
        {
          "rep": "Nick Junker",
          "count": 1,
          "amount": 24752.82,
          "oldest": 35
        },
        {
          "rep": "Savage Grant",
          "count": 1,
          "amount": 24102.97,
          "oldest": 26
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
          49,
          "Insurance"
        ],
        [
          "Job-109182",
          "Amanda Walton",
          "Clint Humphreys",
          "Raleigh",
          "Pending Supplement",
          15116.08,
          44,
          "Insurance"
        ],
        [
          "Job-109530",
          "Paul Blizniuk",
          "Sam Scorziell",
          "Knoxville",
          "Pending Supplement",
          29945.74,
          36,
          "Insurance"
        ],
        [
          "Job-108536",
          "Carole Bertolini",
          "Nick Junker",
          "Columbus",
          "Accounting Kickback",
          24752.82,
          35,
          "Insurance"
        ],
        [
          "Job-110423",
          "Ann Jones",
          "Trey Rury",
          "Nashville",
          "Pending Supplement",
          15862.53,
          28,
          "Insurance"
        ],
        [
          "Job-110826",
          "Julie Landholt",
          "Bill Applegate",
          "Columbus",
          "Pending Supplement",
          11400.75,
          27,
          "Insurance"
        ],
        [
          "Job-110776",
          "Jason & Amy Conard",
          "Savage Grant",
          "Greenville",
          "Accounting Kickback",
          24102.97,
          26,
          "Insurance"
        ],
        [
          "Job-110950",
          "Teddy Douglass",
          "Luke Allberry",
          "Columbus",
          "Pending Supplement",
          12839.86,
          26,
          "Insurance"
        ],
        [
          "Job-110961",
          "Rey Spinosa Brown",
          "Morgan King",
          "Columbus",
          "Pending Supplement",
          7916.87,
          21,
          "Insurance"
        ],
        [
          "Job-110965",
          "Mark Lee",
          "Dave Norris",
          "Columbus",
          "Pending Supplement",
          11738.33,
          21,
          "Insurance"
        ],
        [
          "Job-109539",
          "Jennifer Young",
          "Robert Beck",
          "Columbus",
          "Accounting Kickback",
          43482,
          19,
          "Insurance"
        ],
        [
          "Job-111122",
          "Dennis Whitlock",
          "Kyle Gibson",
          "Cincinnati",
          "Pending Supplement",
          24331.74,
          19,
          "Insurance"
        ],
        [
          "Job-111125",
          "Jerold fourman",
          "Kyle Gibson",
          "Cincinnati",
          "Pending Supplement",
          17478.75,
          19,
          "Insurance"
        ],
        [
          "Job-111238",
          "Lasean Gray",
          "Derrick Sieber",
          "DC Metro",
          "Pending Supplement",
          21251.56,
          18,
          "Retail-No Financing"
        ],
        [
          "Job-110425",
          "Christopher Spollen Nicole Schmidt",
          "Tim Washer",
          "Knoxville",
          "Accounting Kickback",
          20000,
          16,
          "Retail-No Financing"
        ],
        [
          "Job-110498",
          "Wendell Thomas",
          "Sam Doyle",
          "Richmond",
          "Pending Supplement",
          32213.27,
          14,
          "Insurance"
        ],
        [
          "Job-111385",
          "Lauren Burwell",
          "Frank Drummond",
          "Columbus",
          "Pending Supplement",
          6237.55,
          14,
          "Insurance"
        ],
        [
          "Job-111453",
          "Ron Lowe",
          "Derek Hastings",
          "Dayton",
          "Pending Supplement",
          18331.98,
          14,
          "Insurance"
        ],
        [
          "Job-111572",
          "Jim Waite",
          "Michael Conley",
          "Dayton",
          "Pending Supplement",
          26178,
          14,
          "Insurance"
        ],
        [
          "Job-111471",
          "Todd Bernhard",
          "Zachary Schneider",
          "Columbus",
          "Pending Supplement",
          17440.21,
          13,
          "Insurance"
        ],
        [
          "Job-111541",
          "Kent Carringer",
          "Andrew Coleman",
          "Knoxville",
          "Pending Supplement",
          19218.03,
          13,
          "Retail-No Financing"
        ],
        [
          "Job-111656",
          "Silva Garcia",
          "Isaiah Morales-Laurel",
          "Knoxville",
          "Pending Supplement",
          6430.69,
          13,
          "Insurance"
        ],
        [
          "Job-111720",
          "Gary Mott",
          "Zachary Schneider",
          "Columbus",
          "Pending Supplement",
          16906.24,
          13,
          "Insurance"
        ],
        [
          "Job-111299",
          "Anthony Vath Jessica Vath",
          "Frank Butts",
          "Cleveland",
          "Accounting Kickback",
          13498.3,
          12,
          "Insurance"
        ],
        [
          "Job-110010",
          "David Swift",
          "Sam Scorziell",
          "Columbus",
          "Pending Supplement",
          30679.32,
          9,
          "Insurance"
        ],
        [
          "Job-111161",
          "Gary Longberry",
          "Jacob Miller",
          "Columbus",
          "Pending Supplement",
          16640.48,
          9,
          "Insurance"
        ],
        [
          "Job-111321",
          "Michael J Kopp Sandra Kopp",
          "Frank Butts",
          "Cleveland",
          "Pending Supplement",
          9823.79,
          9,
          "Insurance"
        ],
        [
          "Job-110964",
          "Shane Goodwin",
          "Trey Rury",
          "Nashville",
          "Pending Supplement",
          39995,
          8,
          "Insurance"
        ],
        [
          "Job-108336",
          "Debora Cruz",
          "Sam Doyle",
          "Richmond",
          "Pending Supplement",
          31629.98,
          7,
          "Insurance"
        ],
        [
          "Job-111708",
          "Anu Patil",
          "Eric England",
          "Raleigh",
          "Pending Supplement",
          17482.31,
          7,
          "Insurance"
        ],
        [
          "Job-111806",
          "Shelby Jordan",
          "Storm Drumm",
          "Columbus",
          "Accounting Kickback",
          13132,
          7,
          "Insurance"
        ],
        [
          "Job-111883",
          "Workneh Abate",
          "Micah Hayes",
          "Richmond",
          "Pending Supplement",
          9372.63,
          7,
          "Insurance"
        ],
        [
          "Job-111711",
          "Tina Colter",
          "Dave Norris",
          "Columbus",
          "Pending Supplement",
          10119.98,
          6,
          "Insurance"
        ],
        [
          "Job-111737",
          "Dennis Poole",
          "Derrick Sieber",
          "DC Metro",
          "Pending Supplement",
          26034.98,
          6,
          "Insurance"
        ],
        [
          "Job-111964",
          "Sarah Pax",
          "Michael Conley",
          "Dayton",
          "Accounting Kickback",
          16724,
          6,
          "Insurance"
        ],
        [
          "Job-112034",
          "Raymond Richardson",
          "Jacoby Taylor",
          "Cincinnati",
          "Pending Supplement",
          17583.12,
          6,
          "Insurance"
        ],
        [
          "Job-110692",
          "Daniel Crow",
          "David Walden",
          "Detroit Metro",
          "Pending Supplement",
          34483,
          2,
          "Retail-No Financing"
        ],
        [
          "Job-111743",
          "Norma Diaz",
          "Frank Butts",
          "Cleveland",
          "Accounting Kickback",
          12694.99,
          1,
          "Insurance"
        ],
        [
          "Job-111944",
          "Beverly  Clabo",
          "Tim Washer",
          "Knoxville",
          "Pending Supplement",
          24600,
          1,
          "Insurance"
        ],
        [
          "Job-106002",
          "Steve And Brenda  Wetz",
          "Mark Younce",
          "Columbus",
          "Ready to Invoice",
          18496.3,
          0,
          "Insurance"
        ],
        [
          "Job-110101",
          "Frank  Mehling",
          "Frank Butts",
          "Cleveland",
          "Ready to Invoice",
          15433,
          0,
          "Retail-No Financing"
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
          "Job-110782",
          "Mokhira Safarova",
          "Thomas Urling",
          "Cincinnati",
          "Ready to Invoice",
          32347.09,
          0,
          "Insurance"
        ],
        [
          "Job-110790",
          "Samantha Watson",
          "Matthew Ross",
          "Detroit Metro",
          "Ready to Invoice",
          13662,
          0,
          "Retail-No Financing"
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
          "Job-111513",
          "Mary Soulen",
          "Morgan King",
          "Columbus",
          "",
          25424.74,
          0,
          "Insurance"
        ],
        [
          "Job-111624",
          "Keith Stella",
          "Griffin Gregory",
          "Greenville",
          "Ready to Invoice",
          20400,
          0,
          "Insurance"
        ],
        [
          "Job-111867",
          "Linda  McKinney",
          "Donald Richard",
          "Detroit Metro",
          "Ready to Invoice",
          23000,
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
      "recent4WkAvg": 1337260.87
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
          "liveActual": 787190.21
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
        "Sales Trajectory: Monthly sales moved from January $3.26M to May $787K (-76%). Annualized run rate: $77.84M.",
        "Premium Deal Types: Insurance averages $19,915 per deal. Retail-Financing averages $20,995 (highest per-deal value). Retail-No Financing averages $11,458 (the volume engine).",
        "Sold Conversion: 1,538 of 1,730 signed contracts (88.9%) have made it to Sold status for $23.34M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Kickback Concentration: Columbus has the most kickbacks (25, $581K). Total company kickbacks: 58 worth $1.16M.",
        "Production Review Queue: 130 deals worth $2.32M sitting in Production Review. Watch for backlog growth, it delays revenue recognition.",
        "Repair Rate Elevated: 15.7% of all deals are repairs (272 of 1,730). Repairs average ~$1,632, low value relative to installs at $18,134."
      ],
      "criticalRisks": [
        "Columbus Kickback Concentration drives the company's largest single-market rework volume.",
        "$899K sitting unbilled in Completed Jobs (48 jobs averaging 13 days).",
        "Pending Supplements aging: 31 supplement jobs ($580K), avg 14 days.",
        "Accounting Kickbacks blocking $170K (9 completed jobs).",
        "Pipeline kickbacks company-wide: 58 kickbacks totaling $1.16M.",
        "Production Review backlog: 130 deals ($2.32M)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 4d median close on 980 retail deals.",
        "Insurance Density: $19,915 avg on 514 deals = $10.24M; +20% lift = ~$2.05M.",
        "May repair rate at 9.1% vs YTD 15.7%, correction in latest month.",
        "Financing Lifts Ticket: Retail-Financing averages $20,995, highest per-deal value."
      ],
      "fixList": [
        "Columbus Pipeline Kickback Intervention, pull every kickback and categorize root cause.",
        "Supplement Follow-Up Process, 31 supplement jobs ($580K).",
        "Accounting Kickback Root Causes, 9 jobs ($170K), need a Kickback Reason field.",
        "Production Review Bottleneck, 130 deals; add temporary PM capacity.",
        "Financing Push, 156 financing deals YTD (9.0%) at $20,995 avg. Target 15% mix."
      ],
      "actionPlan": {
        "thisWeek": [
          "Invoice Immediately: $123K, 6 jobs marked Ready to Invoice.",
          "Accounting Kickback Blitz: $170K, 9 jobs kicked back; cross-functional meeting w/ accounting + sales ops.",
          "Columbus Pipeline Kickback Review, meet with branch leadership.",
          "Production Review Surge Plan, 130 deals ($2.32M) in queue."
        ],
        "thisMonth": [
          "Supplement Escalation SOP, 7/14/30 day cadence with carrier escalation.",
          "Completed-to-Billing SLA, 100% invoiced within 21 days.",
          "Repair Triage Pilot in markets where repair rate exceeds 25%.",
          "Financing Training, peer training led by top financing reps. Target 15% mix."
        ],
        "thisQuarter": [
          "Add Kickback Reason field to accounting workflow.",
          "Repair Business Decision, 272 repairs YTD at ~$1,632 avg.",
          "Ops Capacity Planning, May hit 55 deals; summer typically exceeds spring."
        ]
      }
    }
  },
  "REVENUE_FORECAST": {
    "title": "Residential Revenue Forecast",
    "subtitle": "V5 Model with Job Type Analysis · Data as of May 06, 2026",
    "runDate": "May 06, 2026",
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
        "value": "$2M",
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
        "materialCost": 3121266.477,
        "laborCost": 1961938.9284,
        "grossProfit": 3856338.5946,
        "grossMarginPct": 43.138
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
          "subtitle": "184 jobs · 7d avg",
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
          "avgDays": 6.7,
          "medianDays": 2.5
        },
        {
          "label": "Backlog",
          "subtitle": "411 jobs · 20d avg",
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
          "avgDays": 20.1,
          "medianDays": 12
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
            8732259.0128,
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
            8732259.0128,
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
              1967982.4439,
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
        "pipe_invoicing": 14016990.65,
        "future_invoicing": 3219501.92,
        "rev_from_backlog": 4508755.8355,
        "revenue_gap": 9783574.1645,
        "adjusted_required_sales": 17119791.0951,
        "backlog_surplus": -2007702.0451
      },
      {
        "month": "Jun 2026",
        "total_backlog": 8732259.0128,
        "wip_est": 5239355.4077,
        "not_started": 3492903.6051,
        "budget_rev": 14833760,
        "pipeline_backlog": 1095098.4,
        "new_sales_backlog": 7637160.6128,
        "pipe_invoicing": 1033591.6,
        "future_invoicing": 14665661.45,
        "rev_from_backlog": 1691390.3258,
        "revenue_gap": 13142369.6742,
        "adjusted_required_sales": 14343976.3478,
        "backlog_surplus": -5611717.3351
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
      "totalJobs": 513,
      "totalWOs": 749,
      "portfolioValue": 10743756.42,
      "avgDaysInStatus": 12,
      "lastBuild": "2026-05-06T20:44:13.431Z"
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
        "value": "513",
        "sub": "749 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "103",
        "sub": "20.1% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "410",
        "sub": "79.9% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "67",
        "sub": "65.0% of In Progress",
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
        "value": "$10.74M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$1.82M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$1.79M",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "67",
        "sub": "65.0% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$1.79M",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "81",
        "sub": "Across 67 jobs",
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
        "sub": "43 open WOs / 43 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "212",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "133",
        "sub": "62.7% of all holds",
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
        "value": "23d",
        "sub": "Mean days in hold across all sub-statuses",
        "tone": "info"
      }
    ],
    "kpisSales": [
      {
        "label": "Active Reps",
        "value": "102",
        "sub": "Reps with at least one open WO",
        "tone": "info"
      },
      {
        "label": "Stuck Value >30d",
        "value": "$1.82M",
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
        "value": "410",
        "sub": "79.9% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$8.05M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "226d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Columbus",
        "sub": "150 jobs (36.6% of backlog)",
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
              217,
              212,
              195,
              82,
              27,
              14,
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
              31,
              20,
              7,
              5,
              9,
              3,
              1,
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
              15,
              8,
              6,
              6,
              4,
              3,
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
            "label": "On Hold",
            "data": [
              46,
              77,
              30,
              6,
              21,
              11,
              8,
              6,
              2,
              1,
              4,
              0,
              0
            ]
          },
          {
            "label": "RTS",
            "data": [
              127,
              38,
              12,
              14,
              3,
              5,
              0,
              3,
              4,
              1,
              2,
              4,
              4
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              49,
              23,
              29,
              29,
              14,
              8,
              19,
              4,
              6,
              6,
              3,
              2,
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
              7,
              2,
              0
            ]
          },
          {
            "label": "Max Days",
            "data": [
              113,
              236,
              58,
              141,
              82,
              12,
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
              62,
              8,
              9,
              1,
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
              371,
              183,
              65,
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
              19,
              16,
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
              21,
              16,
              15,
              17,
              4,
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
          "Knoxville",
          "NOVA",
          "Greenville"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              150,
              91,
              46,
              34,
              22,
              18,
              14,
              10,
              8,
              6,
              5,
              4,
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
            268,
            31,
            46,
            127,
            49,
            10,
            3,
            23,
            185,
            3596610.68
          ],
          [
            "Detroit Metro",
            166,
            20,
            77,
            38,
            23,
            4,
            4,
            72,
            115,
            2585273.88
          ],
          [
            "Cleveland",
            84,
            7,
            30,
            12,
            29,
            4,
            2,
            22,
            57,
            1015208.65
          ],
          [
            "Nashville",
            60,
            5,
            6,
            14,
            29,
            2,
            4,
            0,
            42,
            900053.17
          ],
          [
            "DC Metro",
            51,
            9,
            21,
            3,
            14,
            3,
            1,
            3,
            28,
            815123.5
          ],
          [
            "Richmond",
            30,
            3,
            11,
            5,
            8,
            3,
            0,
            0,
            19,
            567165.31
          ],
          [
            "Dayton",
            28,
            1,
            8,
            0,
            19,
            0,
            0,
            6,
            23,
            456303.82
          ],
          [
            "Cincinnati",
            17,
            4,
            6,
            3,
            4,
            0,
            0,
            3,
            12,
            192942.12
          ],
          [
            "Raleigh",
            13,
            0,
            2,
            4,
            6,
            1,
            0,
            0,
            11,
            179262.13
          ],
          [
            "Knoxville",
            9,
            1,
            1,
            1,
            6,
            0,
            0,
            0,
            6,
            80624.3
          ],
          [
            "Grand Rapids",
            9,
            0,
            4,
            2,
            3,
            0,
            0,
            4,
            7,
            158517.24
          ],
          [
            "Greenville",
            7,
            1,
            0,
            4,
            2,
            0,
            0,
            0,
            4,
            74024.83
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
            15,
            197
          ],
          [
            "Pending Material",
            32,
            22,
            216
          ],
          [
            "Pending Sales",
            31,
            40,
            236
          ],
          [
            "Homeowner Request",
            14,
            67,
            226
          ],
          [
            "Pending HOA",
            5,
            22,
            37
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
            1045084.06
          ],
          [
            "Siding",
            15,
            15,
            404768.28
          ],
          [
            "Roofing",
            7,
            6,
            128078.71
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
            93
          ],
          [
            "On Hold",
            49
          ],
          [
            "Scheduled",
            38
          ],
          [
            "Completed",
            8
          ],
          [
            "In Progress",
            2
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
            433,
            62,
            371,
            425,
            9311904.22
          ],
          [
            "Gutters",
            191,
            8,
            183,
            191,
            4311257.48
          ],
          [
            "Siding",
            74,
            9,
            65,
            74,
            1486943.43
          ],
          [
            "Masonry",
            13,
            1,
            12,
            13,
            348441.71
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
            31,
            21,
            117381,
            5,
            2
          ],
          [
            "Kevin Ditty",
            27,
            17,
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
            27,
            18,
            99591,
            3,
            1
          ],
          [
            "Dan Haske",
            10,
            6,
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
            "Mark Younce",
            8,
            3,
            54749.35,
            3,
            2
          ],
          [
            "Richard Rice",
            19,
            12,
            43980,
            5,
            1
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
            "Brian Ogrin",
            13,
            6,
            40300,
            1,
            1
          ],
          [
            "Scott Scaperato",
            27,
            17,
            38491,
            3,
            1
          ],
          [
            "Frank Drummond",
            23,
            15,
            37819,
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
            150,
            2729346.89,
            71
          ],
          [
            "Detroit Metro",
            91,
            1905700.46,
            226
          ],
          [
            "Cleveland",
            46,
            765482.7,
            30
          ],
          [
            "Nashville",
            34,
            665533.48,
            16
          ],
          [
            "Dayton",
            22,
            440703.82,
            23
          ],
          [
            "DC Metro",
            18,
            385347.88,
            58
          ],
          [
            "Richmond",
            14,
            478880.67,
            77
          ],
          [
            "Raleigh",
            10,
            164990.07,
            79
          ],
          [
            "Cincinnati",
            8,
            116867.09,
            54
          ],
          [
            "Grand Rapids",
            6,
            149734.26,
            33
          ],
          [
            "Knoxville",
            5,
            67124.3,
            7
          ],
          [
            "NOVA",
            4,
            122646.79,
            2
          ],
          [
            "Greenville",
            2,
            57988.01,
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
            226,
            44826
          ],
          [
            "Job-107171",
            "Janetta Reese",
            "Detroit Metro",
            "Siding",
            "Pending Permit",
            "Richard Rice",
            92,
            2078
          ],
          [
            "Job-107193",
            "Saju Michil",
            "Raleigh",
            "Roofing",
            "Pending Sales",
            "Eric England",
            79,
            20332.62
          ],
          [
            "Job-108163",
            "Mayank Sri",
            "Richmond",
            "Roofing",
            "Pending Sales",
            "Luca Benedetti",
            77,
            29205.81
          ],
          [
            "Job-108368",
            "Jason And Jamie Russel",
            "Columbus",
            "Gutters",
            "Homeowner Request",
            "Bill Applegate",
            71,
            3241.17
          ],
          [
            "Job-108783",
            "Susie Kelly",
            "Detroit Metro",
            "Gutters",
            "",
            "Gary Holm",
            63,
            9000
          ],
          [
            "Job-108962",
            "Kent Mccullough",
            "DC Metro",
            "Roofing",
            "Pending Permit",
            "Derrick Sieber",
            58,
            20300
          ],
          [
            "Job-106057",
            "David Wedig",
            "Cincinnati",
            "Roofing",
            "",
            "Wes McCorkle",
            54,
            19675.69
          ],
          [
            "Job-109039",
            "Joe Dials",
            "Columbus",
            "Roofing",
            "Pending Sales",
            "Derik Heinz",
            53,
            22523
          ],
          [
            "Job-109681",
            "George Potts",
            "DC Metro",
            "Roofing",
            "Pending Sales",
            "Dan Haske",
            49,
            24567
          ],
          [
            "Job-110332",
            "Peter Quigley",
            "Detroit Metro",
            "Gutters",
            "",
            "Matthew Ross",
            41,
            3075
          ],
          [
            "Job-110338",
            "Charlene Zupanick",
            "Detroit Metro",
            "Gutters",
            "",
            "Richard Rice",
            41,
            4757
          ],
          [
            "Job-099374",
            "Good Shepard Baptist Church",
            "Richmond",
            "Metal",
            "Pending Material",
            "Hunter Carrington Scott",
            40,
            239596.83
          ],
          [
            "Job-110493",
            "Cindy Song",
            "DC Metro",
            "Roofing",
            "Pending HOA",
            "Derrick Sieber",
            37,
            13459.99
          ],
          [
            "Job-110461",
            "Karen Parenteau",
            "Detroit Metro",
            "Roofing",
            "Pending Permit",
            "Cole Burgess",
            36,
            38100
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Detroit Metro",
          "permits": 72
        },
        {
          "branch": "Columbus",
          "permits": 23
        },
        {
          "branch": "Cleveland",
          "permits": 22
        },
        {
          "branch": "Dayton",
          "permits": 6
        },
        {
          "branch": "Grand Rapids",
          "permits": 4
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
      "strategicGoal": "Convert $1.79M of trapped partial-job revenue into billable revenue, reduce $1.82M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Dispatch the 34 RTS WOs sitting on partial jobs. No blocker, no hold, just dispatch.",
        "Re-dispatch the 14 RAS WOs (oldest at 113 days). These are pure re-work fastballs.",
        "Gutters sweep: 43 open WOs across 43 partial jobs blocking $1.05M. Highest single-trade leverage in the book.",
        "Detroit Metro permit sweep: 72 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one.",
        "Close out the 6 zombie jobs (all WOs Completed, parent still In Progress). Pure paperwork."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Gutters): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 410 jobs ($8.05M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $1.79M, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  }
};
