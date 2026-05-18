/* AUTO-GENERATED — do not edit. Generated 2026-05-18T14:31:41.081Z (residential) */
window.FZ = window.FZ || {};
window.FZ.data = {
  "_meta": {
    "builtAt": "2026-05-18T14:31:41.081Z",
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
        "elapsedMs": 80,
        "builtAt": "2026-05-18T14:31:41.081Z"
      },
      {
        "id": "sales-overview",
        "version": "1.0-rules-encoded",
        "elapsedMs": 562,
        "builtAt": "2026-05-18T14:31:41.081Z"
      },
      {
        "id": "revenue-forecast",
        "version": "V5-baseline-2026-05-04-shell-1.1",
        "elapsedMs": 15,
        "builtAt": "2026-05-18T14:31:41.081Z"
      },
      {
        "id": "backlog",
        "version": "1.0-rules-encoded",
        "elapsedMs": 43,
        "builtAt": "2026-05-18T14:31:41.081Z"
      }
    ]
  },
  "INSTALLS_YTD": {
    "_source": "calculator/installs-ytd.js v1.0-rules-encoded",
    "title": "Residential Installs YTD",
    "subtitle": "Invoiced Jobs - Jan 06, 2026 - May 18, 2026 - De-Duplicated at Job Level - 1,293 Jobs - 14 Markets - 29 PMs",
    "generated": "2026-05-18",
    "headerMeta": {
      "trueRevenue": 24124525.66,
      "uniqueJobs": 1293,
      "markets": 14,
      "pms": 29,
      "medianComplete": 22.6,
      "avgStart": 27.4,
      "multiTradeJobs": 376,
      "singleTradeJobs": 917,
      "multiTradePct": 29.1,
      "lastBuild": "2026-05-18T14:31:41.081Z"
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
        "value": "$24.12M",
        "sub": "1,293 unique jobs invoiced"
      },
      {
        "label": "Avg Contract Value",
        "value": "$18,658",
        "sub": "Per job (deduped)"
      },
      {
        "label": "Median Days to Complete",
        "value": "22.6d",
        "sub": "Job-level median"
      },
      {
        "label": "Avg Days to Start",
        "value": "27.4d",
        "sub": "Sale to crew on-site"
      },
      {
        "label": "Multi-Trade Jobs",
        "value": "376",
        "sub": "29.1% of book"
      },
      {
        "label": "Single-Trade Jobs",
        "value": "917",
        "sub": "70.9% of book"
      }
    ],
    "kpisMultiTrade": [
      {
        "label": "Multi-Trade Avg Contract",
        "value": "$25,469",
        "sub": "+60.5% vs single-trade"
      },
      {
        "label": "Single-Trade Avg Contract",
        "value": "$15,865",
        "sub": "Baseline ticket"
      },
      {
        "label": "Completion Time Gap",
        "value": "+23.0d",
        "sub": "MT 40.6d vs ST 17.6d"
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
        "rev": 4391615.58,
        "jobs": 230,
        "med": 21,
        "start": 22
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
              4391615.58
            ]
          },
          {
            "label": "Jobs",
            "data": [
              147,
              139,
              335,
              442,
              230
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
              21
            ]
          },
          {
            "label": "Avg Days to Start",
            "data": [
              25.2,
              32.9,
              33.7,
              25,
              22
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
              376
            ]
          },
          {
            "label": "Single-Trade",
            "data": [
              917
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
              252,
              28,
              19,
              14,
              11,
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
          "Cleveland",
          "Greenville",
          "NOVA",
          "Grand Rapids",
          "Greensboro"
        ],
        "datasets": [
          {
            "label": "MT %",
            "data": [
              27,
              29.1,
              34.2,
              34.4,
              23.9,
              27.4,
              14.3,
              31.8,
              33.3,
              37.3,
              25,
              41.7,
              25,
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
          "Knoxville",
          "Cleveland",
          "Greenville",
          "NOVA",
          "Grand Rapids",
          "Greensboro"
        ],
        "datasets": [
          {
            "label": "MT Median",
            "data": [
              52.6,
              43.6,
              21.7,
              30.4,
              38.7,
              50.1,
              64.4,
              56.5,
              28.6,
              32,
              34.5,
              66.6,
              31.6,
              346.7
            ]
          },
          {
            "label": "ST Median",
            "data": [
              12.7,
              22,
              18.5,
              21.7,
              22.7,
              18.5,
              21.5,
              9.5,
              16.5,
              17.4,
              20.7,
              32.6,
              20.6,
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
          "Knoxville",
          "Cleveland",
          "Greenville",
          "NOVA",
          "Grand Rapids",
          "Greensboro"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              7182197.41,
              3163211.16,
              2907204.65,
              1851347.94,
              1540267.79,
              1482145.5,
              1380621.68,
              1240249.15,
              1054990.26,
              1024492.73,
              753917.01,
              469773.97,
              40412,
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
          "Knoxville",
          "Cleveland",
          "Greenville",
          "NOVA",
          "Grand Rapids",
          "Greensboro"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              19.5,
              28.6,
              19.5,
              23.6,
              27,
              27.6,
              27.5,
              18.1,
              22.7,
              23.5,
              23.1,
              54,
              26.1,
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
          "Levi Nieman",
          "Richard Williams",
          "Alejandro Alvarado",
          "Abraham Santiago",
          "Brandon Skrzypek",
          "Shawn Oehlstrom",
          "Alex Dubanoski",
          "Galo Munive",
          "Joseph Jones"
        ],
        "datasets": [
          {
            "label": "Fractional Revenue",
            "data": [
              1800696.35,
              1598265.84,
              1557902.82,
              1550407.85,
              1369541.76,
              1256646.83,
              1200296.42,
              1194863.15,
              1178047.9,
              1129418.71,
              1120941.38,
              1002625.74,
              995280.1,
              991750.42,
              937450.52
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
          "Levi Nieman",
          "Richard Williams",
          "Alejandro Alvarado",
          "Abraham Santiago",
          "Brandon Skrzypek",
          "Shawn Oehlstrom",
          "Alex Dubanoski",
          "Galo Munive",
          "Joseph Jones",
          "Brady Weingartner",
          "Jason Andrews",
          "Drew Bailey",
          "Cody Mitchell",
          "Austin Weingartner",
          "Daniel Galli",
          "Chad Williams",
          "Adam Marrero",
          "(Unassigned)",
          "Neil Laux",
          "Michael Blevins",
          "Justin Milliron",
          "Mike Scott",
          "Chris Atkins"
        ],
        "datasets": [
          {
            "label": "PMs",
            "data": [
              {
                "x": 25.1,
                "y": 1800696.35,
                "wos": 92,
                "name": "Eric Isakov"
              },
              {
                "x": 23.6,
                "y": 1598265.84,
                "wos": 101,
                "name": "Mason Bryant"
              },
              {
                "x": 29.5,
                "y": 1557902.82,
                "wos": 125,
                "name": "Joseph Yager"
              },
              {
                "x": 22.1,
                "y": 1550407.85,
                "wos": 82,
                "name": "Brandon Harter"
              },
              {
                "x": 28.1,
                "y": 1369541.76,
                "wos": 78,
                "name": "Kaden Carter"
              },
              {
                "x": 24.6,
                "y": 1256646.83,
                "wos": 78,
                "name": "Landon Little"
              },
              {
                "x": 32.6,
                "y": 1200296.42,
                "wos": 60,
                "name": "Levi Nieman"
              },
              {
                "x": 35.1,
                "y": 1194863.15,
                "wos": 90,
                "name": "Richard Williams"
              },
              {
                "x": 22.6,
                "y": 1178047.9,
                "wos": 88,
                "name": "Alejandro Alvarado"
              },
              {
                "x": 21,
                "y": 1129418.71,
                "wos": 60,
                "name": "Abraham Santiago"
              },
              {
                "x": 32,
                "y": 1120941.38,
                "wos": 59,
                "name": "Brandon Skrzypek"
              },
              {
                "x": 23.5,
                "y": 1002625.74,
                "wos": 109,
                "name": "Shawn Oehlstrom"
              },
              {
                "x": 11.5,
                "y": 995280.1,
                "wos": 73,
                "name": "Alex Dubanoski"
              },
              {
                "x": 33,
                "y": 991750.42,
                "wos": 79,
                "name": "Galo Munive"
              },
              {
                "x": 21.6,
                "y": 937450.52,
                "wos": 71,
                "name": "Joseph Jones"
              },
              {
                "x": 22.7,
                "y": 830246.05,
                "wos": 43,
                "name": "Brady Weingartner"
              },
              {
                "x": 29.4,
                "y": 821337.86,
                "wos": 109,
                "name": "Jason Andrews"
              },
              {
                "x": 7.5,
                "y": 666686.67,
                "wos": 145,
                "name": "Drew Bailey"
              },
              {
                "x": 24,
                "y": 533173.92,
                "wos": 23,
                "name": "Cody Mitchell"
              },
              {
                "x": 29.6,
                "y": 519506.14,
                "wos": 32,
                "name": "Austin Weingartner"
              },
              {
                "x": 68.6,
                "y": 483179.38,
                "wos": 47,
                "name": "Daniel Galli"
              },
              {
                "x": 65.5,
                "y": 366946.36,
                "wos": 37,
                "name": "Chad Williams"
              },
              {
                "x": 16.5,
                "y": 335462.01,
                "wos": 25,
                "name": "Adam Marrero"
              },
              {
                "x": 28.7,
                "y": 210782.54,
                "wos": 27,
                "name": "(Unassigned)"
              },
              {
                "x": 52.6,
                "y": 122527.24,
                "wos": 8,
                "name": "Neil Laux"
              },
              {
                "x": 20.7,
                "y": 107605.96,
                "wos": 9,
                "name": "Michael Blevins"
              },
              {
                "x": 132.4,
                "y": 72439.43,
                "wos": 10,
                "name": "Justin Milliron"
              },
              {
                "x": 54.7,
                "y": 39876.17,
                "wos": 5,
                "name": "Mike Scott"
              },
              {
                "x": 55.4,
                "y": 33801.5,
                "wos": 7,
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
          "Electrical",
          "Flat Roof",
          "Other",
          "Unspecified",
          "Door"
        ],
        "datasets": [
          {
            "label": "Revenue",
            "data": [
              17724587.73,
              3700851.73,
              1108258.62,
              378035.09,
              375409.1,
              264130.04,
              245905,
              122992.11,
              98078.62,
              39423.33,
              32090.81,
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
          "GAF Solar",
          "Rack Mounted Solar",
          "Painting",
          "Electrical",
          "Flat Roof",
          "Other",
          "Unspecified",
          "Door"
        ],
        "datasets": [
          {
            "label": "Median Days",
            "data": [
              22.6,
              31.6,
              56.7,
              148.7,
              83.5,
              93.5,
              78.2,
              58.7,
              108.6,
              76.1,
              149.7,
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
          "Brenda Dixon",
          "Kayla Wright"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              381,
              313,
              263,
              179,
              122,
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
              29.7,
              21.6,
              13.5,
              24.5,
              26,
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
              34.4,
              31,
              17.5,
              30.2,
              26.2,
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
                "x": 29.7,
                "y": 19635.47,
                "jobs": 381,
                "name": "Brandon Vera"
              },
              {
                "x": 21.6,
                "y": 21631.58,
                "jobs": 313,
                "name": "David Schwan"
              },
              {
                "x": 13.5,
                "y": 14670.56,
                "jobs": 263,
                "name": "Amanda Wade"
              },
              {
                "x": 24.5,
                "y": 17222.53,
                "jobs": 179,
                "name": "Bradley Essex"
              },
              {
                "x": 26,
                "y": 15316.23,
                "jobs": 122,
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
            423,
            7182197.41,
            16979.19,
            19.5,
            33,
            27,
            52.6,
            12.7
          ],
          [
            "Detroit Metro",
            175,
            3163211.16,
            18075.49,
            28.6,
            37.1,
            29.1,
            43.6,
            22
          ],
          [
            "Nashville",
            120,
            2907204.65,
            24226.71,
            19.5,
            19.1,
            34.2,
            21.7,
            18.5
          ],
          [
            "DC Metro",
            96,
            1851347.94,
            19284.87,
            23.6,
            22.5,
            34.4,
            30.4,
            21.7
          ],
          [
            "Dayton",
            88,
            1540267.79,
            17503.04,
            27,
            22.4,
            23.9,
            38.7,
            22.7
          ],
          [
            "Cincinnati",
            73,
            1482145.5,
            20303.36,
            27.6,
            24.9,
            27.4,
            50.1,
            18.5
          ],
          [
            "Raleigh",
            63,
            1380621.68,
            21914.63,
            27.5,
            23,
            14.3,
            64.4,
            21.5
          ],
          [
            "Richmond",
            66,
            1240249.15,
            18791.65,
            18.1,
            15.6,
            31.8,
            56.5,
            9.5
          ],
          [
            "Knoxville",
            57,
            1054990.26,
            18508.6,
            22.7,
            19.4,
            33.3,
            28.6,
            16.5
          ],
          [
            "Cleveland",
            75,
            1024492.73,
            13659.9,
            23.5,
            32.4,
            37.3,
            32,
            17.4
          ],
          [
            "Greenville",
            28,
            753917.01,
            26925.61,
            23.1,
            23.6,
            25,
            34.5,
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
            "Grand Rapids",
            4,
            40412,
            10103,
            26.1,
            19.6,
            25,
            31.6,
            20.6
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
            92,
            76,
            1800696.35,
            19572.79,
            25.1,
            29.9
          ],
          [
            "Mason Bryant",
            101,
            87,
            1598265.84,
            15824.41,
            23.6,
            27.5
          ],
          [
            "Joseph Yager",
            125,
            102,
            1557902.82,
            12463.22,
            29.5,
            25.3
          ],
          [
            "Brandon Harter",
            82,
            60,
            1550407.85,
            18907.41,
            22.1,
            20.4
          ],
          [
            "Kaden Carter",
            78,
            64,
            1369541.76,
            17558.23,
            28.1,
            23.7
          ],
          [
            "Landon Little",
            78,
            73,
            1256646.83,
            16110.86,
            24.6,
            32.2
          ],
          [
            "Levi Nieman",
            60,
            59,
            1200296.42,
            20004.94,
            32.6,
            41.6
          ],
          [
            "Richard Williams",
            90,
            84,
            1194863.15,
            13276.26,
            35.1,
            34.3
          ],
          [
            "Alejandro Alvarado",
            88,
            65,
            1178047.9,
            13386.91,
            22.6,
            20.3
          ],
          [
            "Abraham Santiago",
            60,
            52,
            1129418.71,
            18823.65,
            21,
            18.9
          ],
          [
            "Brandon Skrzypek",
            59,
            58,
            1120941.38,
            18999.01,
            32,
            33.6
          ],
          [
            "Shawn Oehlstrom",
            109,
            75,
            1002625.74,
            9198.4,
            23.5,
            32.4
          ],
          [
            "Alex Dubanoski",
            73,
            56,
            995280.1,
            13633.97,
            11.5,
            14.8
          ],
          [
            "Galo Munive",
            79,
            60,
            991750.42,
            12553.8,
            33,
            26.6
          ],
          [
            "Joseph Jones",
            71,
            53,
            937450.52,
            13203.53,
            21.6,
            18.2
          ],
          [
            "Brady Weingartner",
            43,
            43,
            830246.05,
            19308.05,
            22.7,
            20.8
          ],
          [
            "Jason Andrews",
            109,
            94,
            821337.86,
            7535.21,
            29.4,
            38.1
          ],
          [
            "Drew Bailey",
            145,
            143,
            666686.67,
            4597.84,
            7.5,
            25.8
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
            "Austin Weingartner",
            32,
            29,
            519506.14,
            16234.57,
            29.6,
            29
          ],
          [
            "Daniel Galli",
            47,
            32,
            483179.38,
            10280.41,
            68.6,
            44.1
          ],
          [
            "Chad Williams",
            37,
            21,
            366946.36,
            9917.47,
            65.5,
            23.8
          ],
          [
            "Adam Marrero",
            25,
            20,
            335462.01,
            13418.48,
            16.5,
            18.3
          ],
          [
            "(Unassigned)",
            27,
            23,
            210782.54,
            7806.76,
            28.7,
            41.9
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
            9,
            7,
            107605.96,
            11956.22,
            20.7,
            16.9
          ],
          [
            "Justin Milliron",
            10,
            9,
            72439.43,
            7243.94,
            132.4,
            70.3
          ],
          [
            "Mike Scott",
            5,
            5,
            39876.17,
            7975.23,
            54.7,
            10.2
          ],
          [
            "Chris Atkins",
            7,
            5,
            33801.5,
            4828.79,
            55.4,
            35.6
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
            1176,
            17724587.73,
            15071.93,
            22.6
          ],
          [
            "Gutters",
            391,
            3700851.73,
            9465.09,
            31.6
          ],
          [
            "Siding",
            111,
            1108258.62,
            9984.31,
            56.7
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
            29,
            375409.1,
            12945.14,
            83.5
          ],
          [
            "Masonry",
            21,
            264130.04,
            12577.62,
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
            381,
            7481115.8,
            19635.47,
            "29.7d",
            "27d",
            34.4,
            19635.47
          ],
          [
            "David Schwan",
            313,
            6770683.38,
            21631.58,
            "21.6d",
            "25.6d",
            31,
            21631.58
          ],
          [
            "Amanda Wade",
            263,
            3858357.58,
            14670.56,
            "13.5d",
            "28.4d",
            17.5,
            14670.56
          ],
          [
            "Bradley Essex",
            179,
            3082833.68,
            17222.53,
            "24.5d",
            "25.1d",
            30.2,
            17222.53
          ],
          [
            "Thomas Hayes",
            122,
            1868580.17,
            15316.23,
            "26d",
            "29.6d",
            26.2,
            15316.23
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
            187,
            0,
            1,
            0,
            0,
            0,
            22,
            0,
            0,
            1,
            52,
            0,
            263
          ],
          [
            "Bradley Essex",
            50,
            60,
            2,
            0,
            61,
            6,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            179
          ],
          [
            "Brandon Vera",
            8,
            2,
            101,
            96,
            23,
            43,
            2,
            0,
            6,
            0,
            24,
            0,
            10,
            66,
            381
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
            6,
            120,
            0,
            0,
            0,
            0,
            0,
            0,
            57,
            0,
            119,
            0,
            0,
            313
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
            108,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            122
          ],
          [
            "Total",
            73,
            75,
            423,
            96,
            88,
            175,
            4,
            1,
            28,
            57,
            24,
            120,
            63,
            66,
            1293
          ]
        ]
      }
    ],
    "commentary": {
      "areasOfConcern": [
        "Daniel Galli: 47 WOs, $483K revenue, 68.6-day median complete, top-volume PM with the slowest cycle in the network.",
        "Multi-trade penalty is severe in 3 markets: Richmond MT 56.5d vs ST 9.5d, Raleigh MT 64.4d vs ST 21.5d, Columbus MT 52.6d vs ST 12.7d.",
        "Days to Start averages 27.4 days company-wide and 37.1 days in Detroit Metro (a sold job sits weeks before a crew touches it)."
      ],
      "watchList": [
        "Drew Bailey: 145 WOs, $4,598 revenue per WO, the lowest revenue density of any active high-volume PM.",
        "Gutters-only work runs at 31.6-day median complete versus 22.6 days for roofing, 40% slower cycle on the lowest-priced trade.",
        "Amanda Wade creates 263 jobs at $14,671 average contract and 17.5% multi-trade attach, well below the top creator."
      ],
      "positivesToBuildOn": [
        "April delivered $7.86M across 442 invoiced jobs at 17.6-day median complete, the highest revenue month and one of the fastest cycles of the year.",
        "Richmond hits 18.1-day median complete and a $18,792 average contract on 66 jobs.",
        "Multi-trade jobs carry a $25,469 average contract versus $15,865 for single-trade, a 61% revenue lift per job.",
        "Columbus is the best-balanced market: 19.5-day median complete, 27.0% multi-trade attach, $16,979 average contract on 423 jobs."
      ]
    }
  },
  "SALES_OVERVIEW": {
    "_source": "calculator/sales-overview.js v1.0-rules-encoded",
    "title": "Residential Sales Overview",
    "subtitle": "YTD 2026",
    "lastSigned": "2026-05-17",
    "ytdDays": 138,
    "rowCount": 1972,
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
        "value": "$31.35M",
        "sub": "1,972 signed contracts across 13 markets"
      },
      {
        "label": "Sold",
        "value": "$28.47M",
        "sub": "1,836 deals | 93.1% of signed contracts"
      },
      {
        "label": "Production Review",
        "value": "$1.83M",
        "sub": "79 deals | Ops Review, PM Review, Contracted"
      },
      {
        "label": "Kicked Back",
        "value": "$967K",
        "sub": "52 deals | 2.6% of signed contracts",
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
        "value": "$15,900",
        "sub": "Median: $14,797 | Install avg: $18,422"
      },
      {
        "label": "Organization",
        "value": "135 Reps",
        "sub": "13 active markets"
      },
      {
        "label": "Annualized Sales Rate",
        "value": "~$82.93M",
        "sub": "Based on 138 days YTD"
      },
      {
        "label": "Install vs Repair",
        "value": "84.9% / 15.1%",
        "sub": "1,674 installs | 297 repairs"
      }
    ],
    "pipelineBuckets": [
      {
        "label": "Sold",
        "count": 1836,
        "amount": 28466964.65
      },
      {
        "label": "Production Review",
        "count": 79,
        "amount": 1827167.28
      },
      {
        "label": "Kicked Back",
        "count": 52,
        "amount": 966942.69
      },
      {
        "label": "Sales Action",
        "count": 1,
        "amount": 15000
      },
      {
        "label": "Other",
        "count": 4,
        "amount": 77871.92
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
        "count": 502,
        "amount": 6955365.34,
        "installs": 389,
        "repairs": 112,
        "avgDeal": 13855,
        "repairPct": 22.3,
        "installAvg": 17289,
        "repairAvg": 1887
      },
      {
        "key": "2026-04",
        "label": "April",
        "count": 781,
        "amount": 12244640.91,
        "installs": 676,
        "repairs": 105,
        "avgDeal": 15678,
        "repairPct": 13.4,
        "installAvg": 17861,
        "repairAvg": 1622
      },
      {
        "key": "2026-05",
        "label": "May",
        "count": 274,
        "amount": 4788869.33,
        "installs": 249,
        "repairs": 25,
        "avgDeal": 17478,
        "repairPct": 9.1,
        "installAvg": 19064,
        "repairAvg": 1674
      }
    ],
    "jobTypeMixByMonth": {
      "Retail-No Financing": {
        "2026-01": 1317788.72,
        "2026-02": 1796529.77,
        "2026-03": 2996741.7,
        "2026-04": 4775696.11,
        "2026-05": 1100001.89
      },
      "Insurance": {
        "2026-01": 1437020.6,
        "2026-02": 1673072.24,
        "2026-03": 2758384.53,
        "2026-04": 5631038.3,
        "2026-05": 1352010
      },
      "Retail-Financing": {
        "2026-01": 509089.46,
        "2026-02": 631570.17,
        "2026-03": 1135621.56,
        "2026-04": 1253250.61,
        "2026-05": 286995.69
      }
    },
    "jobTypeTotals": [
      {
        "jobType": "Insurance",
        "count": 647,
        "amount": 12851525.67,
        "avg": 19863
      },
      {
        "jobType": "Retail-No Financing",
        "count": 1013,
        "amount": 11986758.19,
        "avg": 11833
      },
      {
        "jobType": "Retail-Financing",
        "count": 184,
        "amount": 3816527.49,
        "avg": 20742
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
        "count": 141,
        "amount": 1580608.99
      },
      {
        "w": 13,
        "count": 154,
        "amount": 2386844.32
      },
      {
        "w": 14,
        "count": 151,
        "amount": 2170741.03
      },
      {
        "w": 15,
        "count": 178,
        "amount": 2708856.67
      },
      {
        "w": 16,
        "count": 184,
        "amount": 3018310.38
      },
      {
        "w": 17,
        "count": 200,
        "amount": 3191161.54
      },
      {
        "w": 18,
        "count": 156,
        "amount": 2294544.15
      },
      {
        "w": 19,
        "count": 136,
        "amount": 2406071.33
      },
      {
        "w": 20,
        "count": 102,
        "amount": 1795340.77
      },
      {
        "w": 21,
        "count": 1,
        "amount": 100197.7
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
          10241209.33,
          659,
          15541,
          535,
          124,
          18.8,
          8
        ],
        [
          "Detroit Metro",
          5568070.85,
          323,
          17239,
          297,
          26,
          8,
          4
        ],
        [
          "Nashville",
          2919745.9,
          195,
          14973,
          143,
          52,
          26.7,
          6
        ],
        [
          "Cleveland",
          2325480.73,
          199,
          11686,
          156,
          43,
          21.6,
          6
        ],
        [
          "DC Metro",
          2018977.41,
          126,
          16024,
          96,
          30,
          23.8,
          13
        ],
        [
          "Dayton",
          1970032.98,
          116,
          16983,
          110,
          6,
          5.2,
          20
        ],
        [
          "Richmond",
          1804425.78,
          82,
          22005,
          78,
          4,
          4.9,
          32
        ],
        [
          "Cincinnati",
          1294565.46,
          84,
          15411,
          78,
          6,
          7.1,
          9
        ],
        [
          "Knoxville",
          1038904.27,
          61,
          17031,
          60,
          1,
          1.6,
          23
        ],
        [
          "Raleigh",
          980532.82,
          61,
          16074,
          58,
          3,
          4.9,
          37
        ],
        [
          "Greenville",
          605500.08,
          26,
          23288,
          26,
          0,
          0,
          4
        ],
        [
          "Grand Rapids",
          351284.67,
          25,
          14051,
          24,
          0,
          0,
          18
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
          "opps": 1625,
          "soldAmt": 5191833.6,
          "closePct": 30.1,
          "nsli": 3195
        },
        {
          "branch": "Detroit",
          "opps": 644,
          "soldAmt": 3505681.23,
          "closePct": 38.5,
          "nsli": 5444
        },
        {
          "branch": "Cleveland",
          "opps": 527,
          "soldAmt": 1357681.57,
          "closePct": 27.1,
          "nsli": 2576
        },
        {
          "branch": "Nashville",
          "opps": 245,
          "soldAmt": 1195452.23,
          "closePct": 43.7,
          "nsli": 4879
        },
        {
          "branch": "DC Metro",
          "opps": 280,
          "soldAmt": 868669.09,
          "closePct": 27.5,
          "nsli": 3102
        },
        {
          "branch": "Cincinnati",
          "opps": 243,
          "soldAmt": 741212.61,
          "closePct": 22.6,
          "nsli": 3050
        },
        {
          "branch": "Dayton",
          "opps": 173,
          "soldAmt": 644393.51,
          "closePct": 25.4,
          "nsli": 3725
        },
        {
          "branch": "Greenville",
          "opps": 77,
          "soldAmt": 399914.07,
          "closePct": 27.3,
          "nsli": 5194
        },
        {
          "branch": "Raleigh",
          "opps": 120,
          "soldAmt": 234307.27,
          "closePct": 17.5,
          "nsli": 1953
        },
        {
          "branch": "Knoxville",
          "opps": 62,
          "soldAmt": 229155.66,
          "closePct": 29,
          "nsli": 3696
        },
        {
          "branch": "Richmond",
          "opps": 59,
          "soldAmt": 218329.18,
          "closePct": 27.1,
          "nsli": 3700
        },
        {
          "branch": "Grand Rapids",
          "opps": 71,
          "soldAmt": 169473.22,
          "closePct": 18.3,
          "nsli": 2387
        }
      ],
      "totals": {
        "opps": 4128,
        "soldAmt": 14756103.24,
        "closePct": 30.3,
        "nsli": 3575
      },
      "source": "Closing Percent By Branch-2026-05-18-10-21-41.xlsx",
      "format": "per-opportunity"
    },
    "marketKickbacks": [
      {
        "market": "Columbus",
        "kicked": 21,
        "kickedAmount": 514718.26
      },
      {
        "market": "Cleveland",
        "kicked": 8,
        "kickedAmount": 76474.72
      },
      {
        "market": "Dayton",
        "kicked": 7,
        "kickedAmount": 117298.58
      },
      {
        "market": "Richmond",
        "kicked": 4,
        "kickedAmount": 91692.61
      },
      {
        "market": "DC Metro",
        "kicked": 3,
        "kickedAmount": 49743.42
      },
      {
        "market": "Cincinnati",
        "kicked": 3,
        "kickedAmount": 40390.29
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
        "amount": 1047553.17,
        "count": 61,
        "avg": 17173,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 37,
          "Insurance": 9,
          "Retail-Financing": 15
        },
        "installs": 44,
        "repairs": 17
      },
      {
        "name": "Michael Conley",
        "amount": 1026042.16,
        "count": 61,
        "avg": 16820,
        "medDays": 14,
        "jt": {
          "Insurance": 28,
          "Retail-Financing": 6,
          "Retail-No Financing": 20
        },
        "installs": 57,
        "repairs": 4
      },
      {
        "name": "Storm Drumm",
        "amount": 884077.38,
        "count": 57,
        "avg": 15510,
        "medDays": 2,
        "jt": {
          "Retail-No Financing": 29,
          "Retail-Financing": 11,
          "Insurance": 15
        },
        "installs": 54,
        "repairs": 3
      },
      {
        "name": "Sam Scorziell",
        "amount": 836733.36,
        "count": 38,
        "avg": 22019,
        "medDays": 19,
        "jt": {
          "Insurance": 26,
          "Retail-No Financing": 9
        },
        "installs": 38,
        "repairs": 0
      },
      {
        "name": "Cole Burgess",
        "amount": 823554.84,
        "count": 39,
        "avg": 21117,
        "medDays": 3,
        "jt": {
          "Retail-Financing": 5,
          "Retail-No Financing": 26,
          "Insurance": 4
        },
        "installs": 39,
        "repairs": 0
      },
      {
        "name": "Stephen Harmon",
        "amount": 818671.63,
        "count": 34,
        "avg": 24079,
        "medDays": 11,
        "jt": {
          "Retail-No Financing": 32,
          "Insurance": 2
        },
        "installs": 32,
        "repairs": 2
      },
      {
        "name": "Robert Beck",
        "amount": 718365.7,
        "count": 28,
        "avg": 25656,
        "medDays": 34,
        "jt": {
          "Retail-No Financing": 9,
          "Insurance": 16,
          "Retail-Financing": 1
        },
        "installs": 26,
        "repairs": 2
      },
      {
        "name": "Dave Norris",
        "amount": 664450.54,
        "count": 53,
        "avg": 12537,
        "medDays": 12,
        "jt": {
          "Retail-No Financing": 26,
          "Retail-Financing": 1,
          "Insurance": 22
        },
        "installs": 36,
        "repairs": 17
      },
      {
        "name": "Frank Butts",
        "amount": 618977.67,
        "count": 49,
        "avg": 12632,
        "medDays": 7,
        "jt": {
          "Retail-No Financing": 24,
          "Insurance": 19,
          "Retail-Financing": 1
        },
        "installs": 42,
        "repairs": 7
      },
      {
        "name": "Scott Scaperato",
        "amount": 614084.66,
        "count": 58,
        "avg": 10588,
        "medDays": 2,
        "jt": {
          "Retail-Financing": 12,
          "Retail-No Financing": 36,
          "Insurance": 7
        },
        "installs": 45,
        "repairs": 13
      },
      {
        "name": "Matthew Ross",
        "amount": 590554.56,
        "count": 35,
        "avg": 16873,
        "medDays": 3,
        "jt": {
          "Retail-No Financing": 24,
          "Insurance": 1,
          "Retail-Financing": 8
        },
        "installs": 31,
        "repairs": 4
      },
      {
        "name": "Mark Daggett",
        "amount": 557574.99,
        "count": 31,
        "avg": 17986,
        "medDays": 3,
        "jt": {
          "Insurance": 3,
          "Retail-No Financing": 22,
          "Retail-Financing": 3
        },
        "installs": 26,
        "repairs": 5
      },
      {
        "name": "Nick Junker",
        "amount": 547550.65,
        "count": 25,
        "avg": 21902,
        "medDays": 32,
        "jt": {
          "Insurance": 10,
          "Retail-No Financing": 9
        },
        "installs": 23,
        "repairs": 2
      },
      {
        "name": "Donald Richard",
        "amount": 543862,
        "count": 31,
        "avg": 17544,
        "medDays": 4,
        "jt": {
          "Retail-No Financing": 27,
          "Retail-Financing": 1,
          "Insurance": 2
        },
        "installs": 29,
        "repairs": 2
      },
      {
        "name": "Kyle Gibson",
        "amount": 533414.18,
        "count": 39,
        "avg": 13677,
        "medDays": 7,
        "jt": {
          "Retail-Financing": 8,
          "Retail-No Financing": 17,
          "Insurance": 13
        },
        "installs": 37,
        "repairs": 2
      },
      {
        "name": "Gary Benedict Jr",
        "amount": 526284.42,
        "count": 24,
        "avg": 21929,
        "medDays": 8,
        "jt": {
          "Insurance": 4,
          "Retail-No Financing": 16,
          "Retail-Financing": 1
        },
        "installs": 23,
        "repairs": 1
      },
      {
        "name": "Richard Rice",
        "amount": 516940,
        "count": 26,
        "avg": 19882,
        "medDays": 6,
        "jt": {
          "Retail-No Financing": 19,
          "Insurance": 4,
          "Retail-Financing": 2
        },
        "installs": 23,
        "repairs": 3
      },
      {
        "name": "Brian Ogrin",
        "amount": 511802.04,
        "count": 28,
        "avg": 18279,
        "medDays": 17,
        "jt": {
          "Insurance": 13,
          "Retail-No Financing": 9,
          "Retail-Financing": 1
        },
        "installs": 24,
        "repairs": 4
      },
      {
        "name": "Trey Rury",
        "amount": 508632.1,
        "count": 26,
        "avg": 19563,
        "medDays": 9,
        "jt": {
          "Retail-No Financing": 8,
          "Insurance": 6,
          "Retail-Financing": 10
        },
        "installs": 25,
        "repairs": 1
      },
      {
        "name": "Derrick Sieber",
        "amount": 492360.07,
        "count": 41,
        "avg": 12009,
        "medDays": 13,
        "jt": {
          "Retail-No Financing": 24,
          "Retail-Financing": 3,
          "Insurance": 11
        },
        "installs": 27,
        "repairs": 14
      }
    ],
    "speedSellers": [
      {
        "name": "Scott Scaperato",
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
        "name": "Evan Kelley",
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
        "name": "Cole Burgess",
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
        "deals": 15,
        "pct": 46.7
      },
      {
        "name": "Frank Drummond",
        "repairs": 23,
        "deals": 55,
        "pct": 41.8
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
          "sub": "Median | Mean: 67 days"
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
          "count": 952
        },
        {
          "label": "Retail-Fin",
          "median": 3,
          "mean": 18,
          "count": 180
        },
        {
          "label": "Insurance",
          "median": 27,
          "mean": 67,
          "count": 614
        },
        {
          "label": "Repair",
          "median": 3,
          "mean": 8,
          "count": 275
        },
        {
          "label": "Install",
          "median": 10,
          "mean": 42,
          "count": 1584
        }
      ],
      "byMarket": [
        {
          "market": "Detroit Metro",
          "median": 4,
          "mean": 24,
          "count": 313
        },
        {
          "market": "Greenville",
          "median": 4,
          "mean": 6,
          "count": 26
        },
        {
          "market": "Nashville",
          "median": 6,
          "mean": 19,
          "count": 190
        },
        {
          "market": "Cleveland",
          "median": 6,
          "mean": 29,
          "count": 183
        },
        {
          "market": "Columbus",
          "median": 8,
          "mean": 34,
          "count": 601
        },
        {
          "market": "Cincinnati",
          "median": 9,
          "mean": 30,
          "count": 82
        },
        {
          "market": "DC Metro",
          "median": 13,
          "mean": 66,
          "count": 116
        },
        {
          "market": "NOVA",
          "median": 18,
          "mean": 63,
          "count": 15
        },
        {
          "market": "Grand Rapids",
          "median": 18,
          "mean": 27,
          "count": 24
        },
        {
          "market": "Dayton",
          "median": 20,
          "mean": 45,
          "count": 111
        },
        {
          "market": "Knoxville",
          "median": 23,
          "mean": 42,
          "count": 61
        },
        {
          "market": "Richmond",
          "median": 32,
          "mean": 84,
          "count": 79
        },
        {
          "market": "Raleigh",
          "median": 37,
          "mean": 101,
          "count": 59
        }
      ],
      "starInsuranceClosers": [
        {
          "name": "Jacob Perry",
          "medDays": 1,
          "count": 3
        },
        {
          "name": "Storm Drumm",
          "medDays": 1,
          "count": 15
        },
        {
          "name": "Justin Koenig",
          "medDays": 3,
          "count": 6
        },
        {
          "name": "Scott Scaperato",
          "medDays": 3,
          "count": 7
        },
        {
          "name": "Matt Busch",
          "medDays": 4,
          "count": 5
        }
      ]
    },
    "completedBilling": {
      "totalUnbilled": 1340471.36,
      "totalJobs": 81,
      "avgAge": 13.5,
      "medAge": 10,
      "tiers": [
        {
          "label": "Critical (60+ days)",
          "count": 1,
          "amount": 200,
          "color": "red"
        },
        {
          "label": "Warning (30-59 days)",
          "count": 10,
          "amount": 189137.14,
          "color": "orange"
        },
        {
          "label": "Watch (14-29 days)",
          "count": 18,
          "amount": 350055.03,
          "color": "blue"
        },
        {
          "label": "Fresh (0-13 days)",
          "count": 52,
          "amount": 801079.19,
          "color": "green"
        }
      ],
      "bySubStatus": [
        {
          "subStatus": "Pending Supplement",
          "count": 47,
          "amount": 898669.78,
          "avgAge": 17,
          "action": "Follow up with insurance carrier on supplement approval. Escalate if >30 days."
        },
        {
          "subStatus": "Accounting Kickback",
          "count": 24,
          "amount": 307155.51,
          "avgAge": 9,
          "action": "Review kickback reason, correct documentation or pricing, resubmit to accounting."
        },
        {
          "subStatus": "Ready to Invoice",
          "count": 9,
          "amount": 134446.07,
          "avgAge": 0,
          "action": "No blockers, submit invoice immediately. This is free cash waiting."
        },
        {
          "subStatus": "No Sub Status",
          "count": 1,
          "amount": 200,
          "avgAge": 61,
          "action": "Review job, identify what is blocking billing, assign owner."
        }
      ],
      "byMarket": [
        {
          "market": "Columbus",
          "count": 31,
          "amount": 505760.75,
          "avgAge": 12,
          "urgency": "LOW"
        },
        {
          "market": "Richmond",
          "count": 8,
          "amount": 151781.28,
          "avgAge": 10,
          "urgency": "LOW"
        },
        {
          "market": "Knoxville",
          "count": 6,
          "amount": 126015.82,
          "avgAge": 24,
          "urgency": "MEDIUM"
        },
        {
          "market": "Dayton",
          "count": 7,
          "amount": 115425.05,
          "avgAge": 9,
          "urgency": "LOW"
        },
        {
          "market": "Nashville",
          "count": 4,
          "amount": 100902.55,
          "avgAge": 12,
          "urgency": "LOW"
        },
        {
          "market": "Cincinnati",
          "count": 4,
          "amount": 69793.61,
          "avgAge": 21,
          "urgency": "MEDIUM"
        },
        {
          "market": "Cleveland",
          "count": 6,
          "amount": 68564.93,
          "avgAge": 19,
          "urgency": "MEDIUM"
        },
        {
          "market": "Greenville",
          "count": 6,
          "amount": 65472.37,
          "avgAge": 12,
          "urgency": "LOW"
        },
        {
          "market": "Detroit Metro",
          "count": 2,
          "amount": 42328,
          "avgAge": 7,
          "urgency": "LOW"
        },
        {
          "market": "Raleigh",
          "count": 4,
          "amount": 42220.28,
          "avgAge": 20,
          "urgency": "MEDIUM"
        },
        {
          "market": "NOVA",
          "count": 2,
          "amount": 30955.16,
          "avgAge": 2,
          "urgency": "LOW"
        },
        {
          "market": "DC Metro",
          "count": 1,
          "amount": 21251.56,
          "avgAge": 30,
          "urgency": "HIGH"
        }
      ],
      "byRepTop15": [
        {
          "rep": "Sam Scorziell",
          "count": 5,
          "amount": 113930.64,
          "oldest": 48
        },
        {
          "rep": "Sam Doyle",
          "count": 2,
          "amount": 63843.25,
          "oldest": 26
        },
        {
          "rep": "Storm Drumm",
          "count": 6,
          "amount": 62996.09,
          "oldest": 19
        },
        {
          "rep": "Kevin Ditty",
          "count": 3,
          "amount": 60907.55,
          "oldest": 11
        },
        {
          "rep": "Nick Junker",
          "count": 2,
          "amount": 60059.43,
          "oldest": 47
        },
        {
          "rep": "Frank Butts",
          "count": 4,
          "amount": 59696.82,
          "oldest": 21
        },
        {
          "rep": "Derek Hastings",
          "count": 2,
          "amount": 52270.05,
          "oldest": 26
        },
        {
          "rep": "Kyle Gibson",
          "count": 3,
          "amount": 52210.49,
          "oldest": 31
        },
        {
          "rep": "Derrick Sieber",
          "count": 3,
          "amount": 52206.72,
          "oldest": 30
        },
        {
          "rep": "Andrew Coleman",
          "count": 2,
          "amount": 45039.39,
          "oldest": 25
        },
        {
          "rep": "Tim Washer",
          "count": 2,
          "amount": 44600,
          "oldest": 28
        },
        {
          "rep": "Trey Rury",
          "count": 1,
          "amount": 39995,
          "oldest": 20
        },
        {
          "rep": "Michael Conley",
          "count": 3,
          "amount": 39845,
          "oldest": 18
        },
        {
          "rep": "Michael Marinelli",
          "count": 2,
          "amount": 39678.6,
          "oldest": 7
        },
        {
          "rep": "Dylan Macdonald",
          "count": 2,
          "amount": 36983.25,
          "oldest": 10
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
          61,
          "Insurance"
        ],
        [
          "Job-109182",
          "Amanda Walton",
          "Clint Humphreys",
          "Raleigh",
          "Pending Supplement",
          15116.08,
          56,
          "Insurance"
        ],
        [
          "Job-109530",
          "Paul Blizniuk",
          "Sam Scorziell",
          "Knoxville",
          "Pending Supplement",
          29945.74,
          48,
          "Insurance"
        ],
        [
          "Job-108536",
          "Carole Bertolini",
          "Nick Junker",
          "Columbus",
          "Accounting Kickback",
          24752.82,
          47,
          "Insurance"
        ],
        [
          "Job-110826",
          "Julie Landholt",
          "Bill Applegate",
          "Columbus",
          "Pending Supplement",
          11400.75,
          39,
          "Insurance"
        ],
        [
          "Job-110776",
          "Jason & Amy Conard",
          "Savage Grant",
          "Greenville",
          "Accounting Kickback",
          24102.97,
          38,
          "Insurance"
        ],
        [
          "Job-110950",
          "Teddy Douglass",
          "Luke Allberry",
          "Columbus",
          "Pending Supplement",
          12839.86,
          38,
          "Insurance"
        ],
        [
          "Job-110961",
          "Rey Spinosa Brown",
          "Morgan King",
          "Columbus",
          "Pending Supplement",
          7916.87,
          33,
          "Insurance"
        ],
        [
          "Job-111122",
          "Dennis Whitlock",
          "Kyle Gibson",
          "Cincinnati",
          "Pending Supplement",
          24331.74,
          31,
          "Insurance"
        ],
        [
          "Job-111125",
          "Jerold fourman",
          "Kyle Gibson",
          "Cincinnati",
          "Pending Supplement",
          17478.75,
          31,
          "Insurance"
        ],
        [
          "Job-111238",
          "Lasean Gray",
          "Derrick Sieber",
          "DC Metro",
          "Pending Supplement",
          21251.56,
          30,
          "Retail-No Financing"
        ],
        [
          "Job-110425",
          "Christopher Spollen Nicole Schmidt",
          "Tim Washer",
          "Knoxville",
          "Accounting Kickback",
          20000,
          28,
          "Retail-No Financing"
        ],
        [
          "Job-110498",
          "Wendell Thomas",
          "Sam Doyle",
          "Richmond",
          "Pending Supplement",
          32213.27,
          26,
          "Insurance"
        ],
        [
          "Job-111385",
          "Lauren Burwell",
          "Frank Drummond",
          "Columbus",
          "Pending Supplement",
          6237.55,
          26,
          "Insurance"
        ],
        [
          "Job-111453",
          "Ron Lowe",
          "Derek Hastings",
          "Dayton",
          "Pending Supplement",
          18331.98,
          26,
          "Insurance"
        ],
        [
          "Job-111471",
          "Todd Bernhard",
          "Zachary Schneider",
          "Columbus",
          "Pending Supplement",
          17440.21,
          25,
          "Insurance"
        ],
        [
          "Job-111541",
          "Kent Carringer",
          "Andrew Coleman",
          "Knoxville",
          "Pending Supplement",
          19218.03,
          25,
          "Retail-No Financing"
        ],
        [
          "Job-111656",
          "Silva Garcia",
          "Isaiah Morales-Laurel",
          "Knoxville",
          "Pending Supplement",
          6430.69,
          25,
          "Insurance"
        ],
        [
          "Job-110010",
          "David Swift",
          "Sam Scorziell",
          "Columbus",
          "Pending Supplement",
          30679.32,
          21,
          "Insurance"
        ],
        [
          "Job-111161",
          "Gary Longberry",
          "Jacob Miller",
          "Columbus",
          "Pending Supplement",
          16640.48,
          21,
          "Insurance"
        ],
        [
          "Job-111321",
          "Michael J Kopp Sandra Kopp",
          "Frank Butts",
          "Cleveland",
          "Pending Supplement",
          9823.79,
          21,
          "Insurance"
        ],
        [
          "Job-110964",
          "Shane Goodwin",
          "Trey Rury",
          "Nashville",
          "Pending Supplement",
          39995,
          20,
          "Insurance"
        ],
        [
          "Job-108336",
          "Debora Cruz",
          "Sam Doyle",
          "Richmond",
          "Pending Supplement",
          31629.98,
          19,
          "Insurance"
        ],
        [
          "Job-111806",
          "Shelby Jordan",
          "Storm Drumm",
          "Columbus",
          "Pending Supplement",
          13132,
          19,
          "Insurance"
        ],
        [
          "Job-111883",
          "Workneh Abate",
          "Micah Hayes",
          "Richmond",
          "Pending Supplement",
          9372.63,
          19,
          "Insurance"
        ],
        [
          "Job-111711",
          "Tina Colter",
          "Dave Norris",
          "Columbus",
          "Pending Supplement",
          10119.98,
          18,
          "Insurance"
        ],
        [
          "Job-111964",
          "Sarah Pax",
          "Michael Conley",
          "Dayton",
          "Accounting Kickback",
          16724,
          18,
          "Insurance"
        ],
        [
          "Job-112034",
          "Raymond Richardson",
          "Jacoby Taylor",
          "Cincinnati",
          "Pending Supplement",
          17583.12,
          18,
          "Insurance"
        ],
        [
          "Job-110692",
          "Daniel Crow",
          "David Walden",
          "Detroit Metro",
          "Pending Supplement",
          34483,
          14,
          "Retail-No Financing"
        ],
        [
          "Job-111743",
          "Norma Diaz",
          "Frank Butts",
          "Cleveland",
          "Pending Supplement",
          12694.99,
          13,
          "Insurance"
        ],
        [
          "Job-111944",
          "Beverly  Clabo",
          "Tim Washer",
          "Knoxville",
          "Pending Supplement",
          24600,
          13,
          "Insurance"
        ],
        [
          "Job-111624",
          "Keith Stella",
          "Griffin Gregory",
          "Greenville",
          "Pending Supplement",
          20400,
          12,
          "Insurance"
        ],
        [
          "Job-110957",
          "Dawn Jones",
          "Storm Drumm",
          "Columbus",
          "Pending Supplement",
          11315,
          11,
          "Insurance"
        ],
        [
          "Job-111722",
          "Kristin & Sean Reuter",
          "Brandon Staves",
          "Raleigh",
          "Accounting Kickback",
          3319.62,
          11,
          "Insurance"
        ],
        [
          "Job-112042",
          "Bernard D Young Lesa A Young",
          "Kevin Ditty",
          "Nashville",
          "Pending Supplement",
          21921.52,
          11,
          "Insurance"
        ],
        [
          "Job-112172",
          "Glenda Kimbell",
          "Kevin Ditty",
          "Nashville",
          "Pending Supplement",
          16130,
          11,
          "Insurance"
        ],
        [
          "Job-112324",
          "Katie Noel",
          "Justin Godde",
          "Raleigh",
          "Pending Supplement",
          14272.06,
          11,
          "Insurance"
        ],
        [
          "Job-112755",
          "Jeremy and Alicia Nowak",
          "Cody Mitchell",
          "Greenville",
          "Accounting Kickback",
          1849.84,
          11,
          "Insurance"
        ],
        [
          "Job-112063",
          "Allison Davis",
          "Dylan Macdonald",
          "Richmond",
          "Pending Supplement",
          16515.08,
          10,
          "Insurance"
        ],
        [
          "Job-112130",
          "Sunitha Nandakumar",
          "Jake Caldwell",
          "Columbus",
          "Pending Supplement",
          20486.41,
          10,
          "Insurance"
        ],
        [
          "Job-112445",
          "Robert F Hundt",
          "Michael Conley",
          "Dayton",
          "Accounting Kickback",
          13450,
          10,
          "Insurance"
        ],
        [
          "Job-112765",
          "Jeremy Schmitter",
          "Sam Scorziell",
          "Columbus",
          "Pending Supplement",
          13039.69,
          10,
          "Insurance"
        ],
        [
          "Job-108537",
          "Gene & Sue Parsley",
          "Nick Junker",
          "Columbus",
          "Pending Supplement",
          35306.61,
          7,
          "Insurance"
        ],
        [
          "Job-111682",
          "Devin Rench",
          "Frank Butts",
          "Cleveland",
          "Pending Supplement",
          18570.44,
          7,
          "Insurance"
        ],
        [
          "Job-111695",
          "Matt Bame",
          "Michael Marinelli",
          "Columbus",
          "Pending Supplement",
          39178.6,
          7,
          "Insurance"
        ],
        [
          "Job-111811",
          "Rock Tanner",
          "Zachary Schneider",
          "Columbus",
          "Pending Supplement",
          18579.5,
          7,
          "Insurance"
        ],
        [
          "Job-111729",
          "John Morgan",
          "Frank Butts",
          "Cleveland",
          "Accounting Kickback",
          18607.6,
          6,
          "Insurance"
        ],
        [
          "Job-111779",
          "Bessie Stinson",
          "Kevin Ditty",
          "Nashville",
          "Accounting Kickback",
          22856.03,
          6,
          "Insurance"
        ],
        [
          "Job-111070",
          "Michael Winningham",
          "Dave Norris",
          "Columbus",
          "Pending Supplement",
          25267.7,
          5,
          "Insurance"
        ],
        [
          "Job-112473",
          "Patrick M Therriault Taylor S Therriault",
          "Storm Drumm",
          "Columbus",
          "Accounting Kickback",
          16177,
          5,
          "Insurance"
        ],
        [
          "Job-112494",
          "Howard Phillips",
          "Michael Conley",
          "Dayton",
          "Pending Supplement",
          9671,
          5,
          "Insurance"
        ],
        [
          "Job-112894",
          "David Luciano Makenzie Luciano",
          "Cody Mitchell",
          "Greenville",
          "Accounting Kickback",
          4187.62,
          5,
          "Insurance"
        ],
        [
          "Job-111373",
          "Lauren Meadows",
          "Sam Scorziell",
          "Columbus",
          "Accounting Kickback",
          29182.47,
          4,
          "Insurance"
        ],
        [
          "Job-111802",
          "Brian Horten",
          "Jim Zipp",
          "Cleveland",
          "Pending Supplement",
          8668.11,
          4,
          "Insurance"
        ],
        [
          "Job-111924",
          "Eileen Baker",
          "Kyle Gibson",
          "Cincinnati",
          "Accounting Kickback",
          10400,
          4,
          "Insurance"
        ],
        [
          "Job-112215",
          "Trish McMahon",
          "Dylan Macdonald",
          "Richmond",
          "Pending Supplement",
          20468.17,
          4,
          "Insurance"
        ],
        [
          "Job-112387",
          "Brian J Mckeon",
          "Evan Kelley",
          "Columbus",
          "Accounting Kickback",
          19578,
          4,
          "Insurance"
        ],
        [
          "Job-112508",
          "Michael and Robin Mentges",
          "Tyler Mentges",
          "Dayton",
          "Pending Supplement",
          22810,
          4,
          "Insurance"
        ],
        [
          "Job-112609",
          "Megan Herman",
          "Derrick Sieber",
          "NOVA",
          "Accounting Kickback",
          16385.3,
          4,
          "Insurance"
        ],
        [
          "Job-112626",
          "Rosemary & Sandra Ciccarone",
          "Luca Benedetti",
          "Richmond",
          "Accounting Kickback",
          5939.37,
          4,
          "Insurance"
        ],
        [
          "Job-111535",
          "Eric Kasprisin Jessica Kasprisin",
          "Sam Scorziell",
          "Columbus",
          "Accounting Kickback",
          11083.42,
          3,
          "Insurance"
        ],
        [
          "Job-112002",
          "Andrea Mcclung",
          "Austyn Thurman",
          "Columbus",
          "Ready to Invoice",
          35612,
          3,
          "Retail-Financing"
        ],
        [
          "Job-112789",
          "Sandra Prior",
          "Andrew Coleman",
          "Knoxville",
          "Pending Supplement",
          25821.36,
          3,
          "Insurance"
        ],
        [
          "Job-112895",
          "Eva Gregory Jonathan Gregory",
          "Cody Mitchell",
          "Greenville",
          "Accounting Kickback",
          13082.1,
          3,
          "Retail-No Financing"
        ],
        [
          "Job-113012",
          "Annie Zureich Gregory Zureich",
          "Storm Drumm",
          "Columbus",
          "Accounting Kickback",
          110,
          3,
          "Insurance"
        ],
        [
          "Job-104867",
          "Joseph Daubenmire",
          "Gabe Baker",
          "Columbus",
          "Accounting Kickback",
          4290.13,
          0,
          "Insurance"
        ],
        [
          "Job-108193",
          "Robert Kloos",
          "Amanda Wade",
          "Columbus",
          "Ready to Invoice",
          900,
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
          "Job-111078",
          "Carlos Machado",
          "Justin Godde",
          "Raleigh",
          "Ready to Invoice",
          9512.52,
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
          "Job-111813",
          "Lucy Andrews",
          "Morgan King",
          "Columbus",
          "Accounting Kickback",
          21732.29,
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
          "Job-112276",
          "Marva Manson",
          "Derrick Sieber",
          "NOVA",
          "Ready to Invoice",
          14569.86,
          0,
          "Insurance"
        ],
        [
          "Job-112296",
          "James fordyce fascia",
          "Matthew Ross",
          "Detroit Metro",
          "Ready to Invoice",
          7845,
          0,
          "Retail-No Financing"
        ],
        [
          "Job-112451",
          "Carolyn Moghrabi",
          "Storm Drumm",
          "Columbus",
          "Ready to Invoice",
          15267,
          0,
          "Retail-Financing"
        ],
        [
          "Job-112500",
          "Alfred Bachman",
          "Robert Beck",
          "Columbus",
          "Ready to Invoice",
          20000,
          0,
          "Insurance"
        ],
        [
          "Job-112869",
          "Linda Rodden",
          "Edward Booth",
          "Columbus",
          "Ready to Invoice",
          10000,
          0,
          "Retail-No Financing"
        ],
        [
          "Job-112892",
          "William Busch",
          "Griffin Keller",
          "Richmond",
          "Pending Supplement",
          14903.09,
          0,
          "Insurance"
        ],
        [
          "Job-112922",
          "Tim Baker",
          "Quincy Redmon",
          "Richmond",
          "Ready to Invoice",
          20739.69,
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
      "recent4WkAvg": 1649038.49
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
          "liveActual": 4788869.33
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
        "Sales Trajectory: Monthly sales moved from January $3.26M to May $4.79M (+47%). Annualized run rate: $82.93M.",
        "Premium Deal Types: Insurance averages $19,863 per deal. Retail-Financing averages $20,742 (highest per-deal value). Retail-No Financing averages $11,833 (the volume engine).",
        "Sold Conversion: 1,836 of 1,972 signed contracts (93.1%) have made it to Sold status for $28.47M in confirmed sales."
      ],
      "whatNeedsAttention": [
        "Kickback Concentration: Columbus has the most kickbacks (21, $515K). Total company kickbacks: 52 worth $967K.",
        "Production Review Queue: 79 deals worth $1.83M sitting in Production Review. Watch for backlog growth, it delays revenue recognition.",
        "Repair Rate Elevated: 15.1% of all deals are repairs (297 of 1,972). Repairs average ~$1,675, low value relative to installs at $18,422."
      ],
      "criticalRisks": [
        "Columbus Kickback Concentration drives the company's largest single-market rework volume.",
        "$1.34M sitting unbilled in Completed Jobs (81 jobs averaging 14 days; 1 jobs are 60+ days/$200).",
        "Pending Supplements aging: 47 supplement jobs ($899K), avg 17 days.",
        "Accounting Kickbacks blocking $307K (24 completed jobs).",
        "Pipeline kickbacks company-wide: 52 kickbacks totaling $967K.",
        "Production Review backlog: 79 deals ($1.83M)."
      ],
      "strengthsToAmplify": [
        "Retail Velocity: 4d median close on 1,132 retail deals.",
        "Insurance Density: $19,863 avg on 647 deals = $12.85M; +20% lift = ~$2.57M.",
        "May repair rate at 9.1% vs YTD 15.1%, correction in latest month.",
        "Financing Lifts Ticket: Retail-Financing averages $20,742, highest per-deal value."
      ],
      "fixList": [
        "Columbus Pipeline Kickback Intervention, pull every kickback and categorize root cause.",
        "Supplement Follow-Up Process, 47 supplement jobs ($899K).",
        "Accounting Kickback Root Causes, 24 jobs ($307K), need a Kickback Reason field.",
        "Production Review Bottleneck, 79 deals; add temporary PM capacity.",
        "Financing Push, 184 financing deals YTD (9.3%) at $20,742 avg. Target 15% mix."
      ],
      "actionPlan": {
        "thisWeek": [
          "Invoice Immediately: $134K, 9 jobs marked Ready to Invoice.",
          "Escalate 60+ Day Jobs: $200, 1 jobs are 60+ days unbilled.",
          "Accounting Kickback Blitz: $307K, 24 jobs kicked back; cross-functional meeting w/ accounting + sales ops.",
          "Columbus Pipeline Kickback Review, meet with branch leadership.",
          "Production Review Surge Plan, 79 deals ($1.83M) in queue."
        ],
        "thisMonth": [
          "Supplement Escalation SOP, 7/14/30 day cadence with carrier escalation.",
          "Completed-to-Billing SLA, 100% invoiced within 21 days.",
          "Repair Triage Pilot in markets where repair rate exceeds 25%.",
          "Financing Training, peer training led by top financing reps. Target 15% mix."
        ],
        "thisQuarter": [
          "Add Kickback Reason field to accounting workflow.",
          "Repair Business Decision, 297 repairs YTD at ~$1,675 avg.",
          "Ops Capacity Planning, May hit 274 deals; summer typically exceeds spring."
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
      "totalJobs": 586,
      "totalWOs": 854,
      "portfolioValue": 12306322.91,
      "avgDaysInStatus": 12,
      "lastBuild": "2026-05-18T14:31:40.999Z"
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
        "value": "586",
        "sub": "854 work orders",
        "tone": "info"
      },
      {
        "label": "In Progress",
        "value": "146",
        "sub": "24.9% of book",
        "tone": "info"
      },
      {
        "label": "Not Started",
        "value": "440",
        "sub": "75.1% of book",
        "tone": "info"
      },
      {
        "label": "Partially Complete",
        "value": "80",
        "sub": "54.8% of In Progress",
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
        "value": "$12.31M",
        "sub": "Sum of signed contracts in book",
        "tone": "good"
      }
    ],
    "kpisRiskOpportunity": [
      {
        "label": "Revenue at Risk",
        "value": "$2.11M",
        "sub": "Jobs with WOs >30 days in status",
        "tone": "crit"
      },
      {
        "label": "Immediate Throughput Opportunity",
        "value": "$2.28M",
        "sub": "Partial-job value waiting on trailing trades",
        "tone": "good"
      }
    ],
    "kpisPartial": [
      {
        "label": "Partial Jobs",
        "value": "80",
        "sub": "54.8% of In Progress",
        "tone": "warn"
      },
      {
        "label": "Trapped Value",
        "value": "$2.28M",
        "sub": "Recoverable contract value",
        "tone": "good"
      },
      {
        "label": "Open WOs on Partials",
        "value": "96",
        "sub": "Across 80 jobs",
        "tone": "info"
      },
      {
        "label": "RTS Ready Today",
        "value": "45",
        "sub": "No blocker, dispatch now",
        "tone": "good"
      },
      {
        "label": "Top Trailing Trade",
        "value": "Gutters",
        "sub": "51 open WOs / 51 jobs",
        "tone": "warn"
      }
    ],
    "kpisHolds": [
      {
        "label": "Total Holds",
        "value": "280",
        "sub": "WOs in On Hold status",
        "tone": "crit"
      },
      {
        "label": "Pending Permit",
        "value": "203",
        "sub": "72.5% of all holds",
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
        "value": "19d",
        "sub": "Mean days in hold across all sub-statuses",
        "tone": "info"
      }
    ],
    "kpisSales": [
      {
        "label": "Active Reps",
        "value": "110",
        "sub": "Reps with at least one open WO",
        "tone": "info"
      },
      {
        "label": "Stuck Value >30d",
        "value": "$2.11M",
        "sub": "Sum of stale value across all reps",
        "tone": "crit"
      },
      {
        "label": "Reps with Stuck Work",
        "value": "41",
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
        "value": "440",
        "sub": "75.1% of book",
        "tone": "info"
      },
      {
        "label": "Not Started Value",
        "value": "$8.66M",
        "sub": "Signed and waiting",
        "tone": "good"
      },
      {
        "label": "Oldest Not Started",
        "value": "238d",
        "sub": "Days in status, oldest job",
        "tone": "crit"
      },
      {
        "label": "Top Branch Concentration",
        "value": "Columbus",
        "sub": "155 jobs (35.2% of backlog)",
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
              280,
              243,
              164,
              100,
              44,
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
          "Dayton",
          "Richmond",
          "Cincinnati",
          "Grand Rapids",
          "Raleigh",
          "Knoxville",
          "Greenville",
          "NOVA"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              36,
              22,
              8,
              11,
              6,
              3,
              4,
              5,
              1,
              0,
              1,
              2,
              1
            ]
          },
          {
            "label": "Open",
            "data": [
              18,
              15,
              9,
              3,
              9,
              4,
              3,
              1,
              2,
              1,
              2,
              0,
              0
            ]
          },
          {
            "label": "On Hold",
            "data": [
              66,
              81,
              61,
              13,
              8,
              3,
              13,
              10,
              20,
              1,
              1,
              3,
              0
            ]
          },
          {
            "label": "RTS",
            "data": [
              136,
              53,
              17,
              8,
              5,
              5,
              3,
              4,
              2,
              8,
              1,
              1,
              0
            ]
          },
          {
            "label": "Scheduled",
            "data": [
              38,
              18,
              22,
              16,
              23,
              22,
              11,
              6,
              0,
              3,
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
          "Requires Additional Service",
          "On Hold",
          "Ready to Schedule",
          "Scheduled",
          "In Progress",
          "New"
        ],
        "datasets": [
          {
            "label": "Avg Days",
            "data": [
              22,
              19,
              19,
              14,
              7,
              1,
              0
            ]
          },
          {
            "label": "Max Days",
            "data": [
              70,
              125,
              248,
              153,
              94,
              5,
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
          "Metal",
          "Windows",
          "Electrical",
          "Rack Mounted Solar",
          "Flat Roof",
          "Painting",
          "Insulation",
          "Other",
          "Carpentry"
        ],
        "datasets": [
          {
            "label": "Completed",
            "data": [
              76,
              15,
              5,
              2,
              0,
              1,
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
              417,
              201,
              80,
              13,
              12,
              11,
              6,
              6,
              3,
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
          "On Hold",
          "Scheduled",
          "Requires Additional Service",
          "In Progress"
        ],
        "datasets": [
          {
            "label": "WOs",
            "data": [
              45,
              23,
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
              38,
              12,
              19,
              14,
              3,
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
          "Grand Rapids",
          "Richmond",
          "Cincinnati",
          "Raleigh",
          "Knoxville",
          "Greenville"
        ],
        "datasets": [
          {
            "label": "Jobs",
            "data": [
              155,
              103,
              60,
              25,
              23,
              18,
              15,
              14,
              11,
              10,
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
            294,
            36,
            66,
            136,
            38,
            13,
            3,
            36,
            202,
            4161994.88
          ],
          [
            "Detroit Metro",
            189,
            22,
            81,
            53,
            18,
            9,
            6,
            77,
            135,
            2854036.21
          ],
          [
            "Cleveland",
            117,
            8,
            61,
            17,
            22,
            5,
            4,
            56,
            74,
            1398498.87
          ],
          [
            "DC Metro",
            51,
            11,
            13,
            8,
            16,
            2,
            1,
            3,
            30,
            798855.12
          ],
          [
            "Nashville",
            51,
            6,
            8,
            5,
            23,
            5,
            4,
            1,
            39,
            814331.12
          ],
          [
            "Dayton",
            37,
            3,
            3,
            5,
            22,
            3,
            1,
            2,
            28,
            534954.83
          ],
          [
            "Richmond",
            34,
            4,
            13,
            3,
            11,
            2,
            1,
            1,
            21,
            774129.21
          ],
          [
            "Cincinnati",
            26,
            5,
            10,
            4,
            6,
            1,
            0,
            6,
            17,
            268402.01
          ],
          [
            "Grand Rapids",
            25,
            1,
            20,
            2,
            0,
            1,
            1,
            19,
            18,
            318990.95
          ],
          [
            "Raleigh",
            13,
            0,
            1,
            8,
            3,
            1,
            0,
            0,
            11,
            182921.91
          ],
          [
            "Knoxville",
            9,
            1,
            1,
            1,
            4,
            2,
            0,
            0,
            6,
            76161.18
          ],
          [
            "Greenville",
            7,
            2,
            3,
            1,
            1,
            0,
            0,
            2,
            5,
            123046.62
          ],
          [
            "NOVA",
            1,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            25638.63
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
            200,
            11,
            209
          ],
          [
            "Pending Material",
            36,
            22,
            228
          ],
          [
            "Pending Sales",
            26,
            46,
            248
          ],
          [
            "Homeowner Request",
            12,
            81,
            238
          ],
          [
            "Pending HOA",
            5,
            23,
            49
          ],
          [
            "Pending Deposit",
            1,
            7,
            7
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
            51,
            51,
            1284771.59
          ],
          [
            "Siding",
            18,
            18,
            593046.63
          ],
          [
            "Masonry",
            6,
            6,
            173752.97
          ],
          [
            "Roofing",
            6,
            6,
            198255.34
          ],
          [
            "Metal",
            6,
            6,
            274069.62
          ],
          [
            "Rack Mounted Solar",
            3,
            3,
            167063.25
          ],
          [
            "Electrical",
            2,
            2,
            57808.73
          ],
          [
            "Painting",
            2,
            2,
            95402.14
          ],
          [
            "Flat Roof",
            1,
            1,
            32358.26
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
            85
          ],
          [
            "On Hold",
            69
          ],
          [
            "Scheduled",
            40
          ],
          [
            "Completed",
            15
          ],
          [
            "In Progress",
            4
          ],
          [
            "Requires Additional Service",
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
            493,
            76,
            417,
            489,
            10966126.07
          ],
          [
            "Gutters",
            216,
            15,
            201,
            215,
            4697823.63
          ],
          [
            "Siding",
            85,
            5,
            80,
            84,
            1700744.54
          ],
          [
            "Masonry",
            15,
            2,
            13,
            15,
            417586.97
          ],
          [
            "Metal",
            12,
            0,
            12,
            12,
            758141.31
          ],
          [
            "Windows",
            12,
            1,
            11,
            12,
            222986.13
          ],
          [
            "Electrical",
            6,
            0,
            6,
            6,
            140208.02
          ],
          [
            "Rack Mounted Solar",
            6,
            0,
            6,
            6,
            213899.61
          ],
          [
            "Flat Roof",
            4,
            1,
            3,
            4,
            168814.93
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
            "Insulation",
            1,
            0,
            1,
            1,
            19399
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
            "Hunter Carrington Scott",
            4,
            2,
            239596.83,
            2,
            1
          ],
          [
            "Matthew Ross",
            27,
            18,
            159721,
            7,
            2
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
            31,
            20,
            120304,
            6,
            1
          ],
          [
            "Cole Burgess",
            30,
            21,
            118181,
            6,
            1
          ],
          [
            "Dan Haske",
            10,
            6,
            116199.45,
            2,
            1
          ],
          [
            "Kevin Ditty",
            17,
            12,
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
            "Richard Rice",
            20,
            13,
            89226,
            6,
            1
          ],
          [
            "Brian Ogrin",
            15,
            8,
            74531.3,
            2,
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
            "Jake Caldwell",
            13,
            11,
            53752.39,
            2,
            1
          ],
          [
            "Evan Kelley",
            4,
            4,
            49521,
            2,
            1
          ],
          [
            "Derrick Sieber",
            9,
            7,
            43448.91,
            4,
            1
          ],
          [
            "Mark Younce",
            7,
            3,
            43293.35,
            2,
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
            155,
            3009259.69,
            83
          ],
          [
            "Detroit Metro",
            103,
            2058752.58,
            238
          ],
          [
            "Cleveland",
            60,
            1010559.01,
            31
          ],
          [
            "Nashville",
            25,
            539588.43,
            18
          ],
          [
            "Dayton",
            23,
            410902.76,
            25
          ],
          [
            "DC Metro",
            18,
            302087.98,
            70
          ],
          [
            "Grand Rapids",
            15,
            272208.71,
            45
          ],
          [
            "Richmond",
            14,
            631092.11,
            89
          ],
          [
            "Cincinnati",
            11,
            154872.42,
            66
          ],
          [
            "Raleigh",
            10,
            156626.2,
            31
          ],
          [
            "Knoxville",
            4,
            53885.98,
            19
          ],
          [
            "Greenville",
            2,
            60608.61,
            10
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
            238,
            44826
          ],
          [
            "Job-108163",
            "Mayank Sri",
            "Richmond",
            "Roofing",
            "Pending Sales",
            "Luca Benedetti",
            89,
            29205.81
          ],
          [
            "Job-108368",
            "Jason And Jamie Russel",
            "Columbus",
            "Gutters",
            "Homeowner Request",
            "Bill Applegate",
            83,
            3241.17
          ],
          [
            "Job-108783",
            "Susie Kelly",
            "Detroit Metro",
            "Gutters",
            "",
            "Gary Holm",
            75,
            9000
          ],
          [
            "Job-108962",
            "Kent Mccullough",
            "DC Metro",
            "Roofing",
            "Pending Permit",
            "Derrick Sieber",
            70,
            20300
          ],
          [
            "Job-106057",
            "David Wedig",
            "Cincinnati",
            "Roofing",
            "",
            "Wes McCorkle",
            66,
            19675.69
          ],
          [
            "Job-109039",
            "Joe Dials",
            "Columbus",
            "Roofing",
            "Pending Sales",
            "Derik Heinz",
            65,
            22523
          ],
          [
            "Job-109681",
            "George Potts",
            "DC Metro",
            "Roofing",
            "Pending Sales",
            "Dan Haske",
            61,
            24567
          ],
          [
            "Job-099374",
            "Good Shepard Baptist Church",
            "Richmond",
            "Metal",
            "Pending Material",
            "Hunter Carrington Scott",
            52,
            239596.83
          ],
          [
            "Job-110493",
            "Cindy Song",
            "DC Metro",
            "Roofing",
            "Pending HOA",
            "Derrick Sieber",
            49,
            13459.99
          ],
          [
            "Job-109426",
            "Karen Sahijdak",
            "Detroit Metro",
            "Roofing",
            "Homeowner Request",
            "James Cole Dionisi",
            47,
            36148
          ],
          [
            "Job-110794",
            "Dave Daily",
            "Detroit Metro",
            "Roofing",
            "",
            "Gary Holm",
            45,
            685
          ],
          [
            "Job-107178",
            "Damien Pakula",
            "Detroit Metro",
            "Roofing",
            "",
            "Gary Benedict Jr",
            45,
            13597
          ],
          [
            "Job-110844",
            "Eric Winger",
            "Grand Rapids",
            "Roofing",
            "Pending Permit",
            "Matthew Ross",
            45,
            25621
          ],
          [
            "Job-110755",
            "Brian Whitney",
            "Columbus",
            "Roofing",
            "Homeowner Request",
            "Jake Caldwell",
            42,
            41272.39
          ]
        ]
      }
    ],
    "computedExtras": {
      "permitsByBranch": [
        {
          "branch": "Detroit Metro",
          "permits": 77
        },
        {
          "branch": "Cleveland",
          "permits": 56
        },
        {
          "branch": "Columbus",
          "permits": 36
        },
        {
          "branch": "Grand Rapids",
          "permits": 19
        },
        {
          "branch": "Cincinnati",
          "permits": 6
        },
        {
          "branch": "DC Metro",
          "permits": 3
        },
        {
          "branch": "Dayton",
          "permits": 2
        },
        {
          "branch": "Greenville",
          "permits": 2
        },
        {
          "branch": "Nashville",
          "permits": 1
        },
        {
          "branch": "Richmond",
          "permits": 1
        }
      ]
    },
    "actionPlan": {
      "strategicGoal": "Convert $2.28M of trapped partial-job revenue into billable revenue, reduce $2.11M of at-risk contract value, and clear the not-started backlog without adding headcount.",
      "immediate": [
        "Dispatch the 45 RTS WOs sitting on partial jobs. No blocker, no hold, just dispatch.",
        "Re-dispatch the 21 RAS WOs (oldest at 125 days). These are pure re-work fastballs.",
        "Gutters sweep: 51 open WOs across 51 partial jobs blocking $1.28M. Highest single-trade leverage in the book.",
        "Detroit Metro permit sweep: 77 pending-permit WOs concentrated at one branch. AHJ-relations problem, not a company-wide one.",
        "Close out the 10 zombie jobs (all WOs Completed, parent still In Progress). Pure paperwork."
      ],
      "structural": [
        "Stand up a partial-job dispatch SLA: any job that crosses 14 days with at least one Completed WO and at least one open WO triggers a daily stand-up review.",
        "Add a Permit Aging escalation path: any pending-permit WO over 14 days routes to the branch GM with a daily AHJ touchpoint requirement.",
        "Trade-specific dispatch surge for the dominant trailing trade (currently Gutters): evaluate whether sub-fleet expansion or schedule re-balance moves the number faster than headcount.",
        "Pending Sales disposition cadence: weekly meeting with the top stuck reps to triage. Most are dispositions, not deals to lose.",
        "Not-Started intake review: 440 jobs ($8.66M) sit waiting. Audit the dispatch trigger so jobs do not languish post-signature."
      ],
      "cadence": [
        "Weekly Monday Action Plan refresh: re-baseline the Immediate list every 7 days.",
        "Daily branch standup includes the Permit Aging report and any RAS WO over 30 days.",
        "Bi-weekly partial-job review: walk the trailing-trades table with the production scheduler.",
        "Monthly Salesperson View read: surface the top stuck reps to sales leadership for joint disposition.",
        "Quarterly Trade Analysis read: validate that Roofing-to-Gutters cadence still matches install volume."
      ],
      "bottomLine": "The book is healthy in volume terms. The drag is in the middle of the funnel: partial jobs trap $2.28M, holds are concentrated in permits, and the not-started cohort needs an intake audit. The fix list is operational, not strategic. The top three workstreams (RTS dispatch, RAS re-dispatch, permit sweep) move the number without adding headcount."
    }
  }
};
