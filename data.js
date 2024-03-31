var APP_DATA = {
  "scenes": [
    {
      "id": "0-start",
      "name": "Start",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5108910763019798,
        "pitch": 0.056436847492207676,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.5148712770079076,
          "pitch": 0.08186896214054151,
          "rotation": 0,
          "target": "1-papan-selamat-datang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-papan-selamat-datang",
      "name": "Papan Selamat Datang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6213957766263754,
        "pitch": 0.0675815590362685,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.5891235053510844,
          "pitch": -0.020548739959362905,
          "rotation": 0,
          "target": "2-tangga"
        },
        {
          "yaw": -1.5093422745725356,
          "pitch": 0.058945914751266315,
          "rotation": 3.141592653589793,
          "target": "0-start"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-tangga",
      "name": "Tangga",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3519371852046955,
          "pitch": -0.15745095902626716,
          "rotation": 0,
          "target": "3-klp-2---villa-oasis"
        },
        {
          "yaw": -1.6003746486322434,
          "pitch": 0.1530371282477283,
          "rotation": 3.141592653589793,
          "target": "1-papan-selamat-datang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-klp-2---villa-oasis",
      "name": "Klp 2 - Villa Oasis",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5400051049212244,
        "pitch": -0.11899421600182336,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.4662641405829318,
          "pitch": 0.010191658628464495,
          "rotation": 10.995574287564278,
          "target": "4-klp-1---asmaraloka-house"
        },
        {
          "yaw": -3.0286859229472576,
          "pitch": 0.021731951890874512,
          "rotation": 3.141592653589793,
          "target": "2-tangga"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7809911148589457,
          "pitch": 0.08427202128844691,
          "title": "Villa Oasis",
          "text": "Kelompok 2"
        }
      ]
    },
    {
      "id": "4-klp-1---asmaraloka-house",
      "name": "Klp 1 - Asmaraloka House",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6068422603961006,
        "pitch": -0.0825996832665492,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.0314455251110815,
          "pitch": 0.045821134832415567,
          "rotation": 3.141592653589793,
          "target": "5-simpang-1"
        },
        {
          "yaw": 0.558378791674981,
          "pitch": 0.03787330400008315,
          "rotation": 7.853981633974483,
          "target": "3-klp-2---villa-oasis"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1175934836636987,
          "pitch": 0.1153330335713143,
          "title": "Asmaraloka House",
          "text": "Kelompok 1"
        }
      ]
    },
    {
      "id": "5-simpang-1",
      "name": "Simpang 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.9698053046510022,
        "pitch": -0.03320723548642057,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.631317014121965,
          "pitch": 0.03618704488373048,
          "rotation": 7.853981633974483,
          "target": "7-klp-7---holux-house"
        },
        {
          "yaw": -0.11005756677474565,
          "pitch": 0.012351708254843885,
          "rotation": 3.141592653589793,
          "target": "4-klp-1---asmaraloka-house"
        },
        {
          "yaw": -2.7095698440037026,
          "pitch": 0.01826215172171075,
          "rotation": 9.42477796076938,
          "target": "6-simpang-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-simpang-2",
      "name": "Simpang 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.2587536482236992,
        "pitch": -0.02136547545513423,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.0880545971189113,
          "pitch": 0.02988473185838103,
          "rotation": 9.42477796076938,
          "target": "5-simpang-1"
        },
        {
          "yaw": -0.5340766502871599,
          "pitch": 0.03235623081405592,
          "rotation": 5.497787143782138,
          "target": "13-klp-3---the-simplicity-house"
        },
        {
          "yaw": -1.5874490545159166,
          "pitch": 0.010777615213637404,
          "rotation": 5.497787143782138,
          "target": "14-klp-4---industriestil-chic-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-klp-7---holux-house",
      "name": "Klp 7 - Holux House",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5566139275204565,
        "pitch": -0.070084579741307,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.8373495626914504,
          "pitch": 0.09230916160771585,
          "rotation": 3.141592653589793,
          "target": "8-klp-10---khatulistiwa-sanctuary"
        },
        {
          "yaw": 3.033248909530424,
          "pitch": 0.08875792479351574,
          "rotation": 3.141592653589793,
          "target": "5-simpang-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.0626197440643352,
          "pitch": 0.21848212820255597,
          "title": "Holux House",
          "text": "Kelompok 7"
        }
      ]
    },
    {
      "id": "8-klp-10---khatulistiwa-sanctuary",
      "name": "Klp 10 - Khatulistiwa Sanctuary",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5770000611573085,
        "pitch": -0.03522219389176051,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.7848739530173887,
          "pitch": -0.014865973040723901,
          "rotation": 3.141592653589793,
          "target": "9-klp-6---high-tech-living"
        },
        {
          "yaw": 2.2400609967221436,
          "pitch": 0.03215183612324424,
          "rotation": 3.141592653589793,
          "target": "10-klp-9---slip-house"
        },
        {
          "yaw": 3.0534789879195205,
          "pitch": 0.03863262690376601,
          "rotation": 7.0685834705770345,
          "target": "11-klp-5---ceiling-shatterers"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.123179895767798,
          "pitch": 0.19690270324223214,
          "title": "Khatulistiwa Sanctuary",
          "text": "Kelompok 10"
        }
      ]
    },
    {
      "id": "9-klp-6---high-tech-living",
      "name": "Klp 6 - High Tech Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6083627388298352,
        "pitch": -0.08207543007185159,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.5081797507759944,
          "pitch": 0.08269457387684653,
          "rotation": 4.71238898038469,
          "target": "8-klp-10---khatulistiwa-sanctuary"
        },
        {
          "yaw": 0.0018592742011875885,
          "pitch": 0.05428977957713954,
          "rotation": 23.561944901923464,
          "target": "7-klp-7---holux-house"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9810296408810135,
          "pitch": 0.0704927425996349,
          "title": "High Tech Living",
          "text": "Kelompok 6"
        }
      ]
    },
    {
      "id": "10-klp-9---slip-house",
      "name": "Klp 9 - Slip House",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.8077970670283108,
        "pitch": 0.05528087391176584,
        "fov": 1.1523247834722807
      },
      "linkHotspots": [
        {
          "yaw": 2.8700035564003503,
          "pitch": -0.010353544672252468,
          "rotation": 3.141592653589793,
          "target": "9-klp-6---high-tech-living"
        },
        {
          "yaw": 1.2107884584660074,
          "pitch": -0.017017382570873707,
          "rotation": 3.141592653589793,
          "target": "11-klp-5---ceiling-shatterers"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9958347979388211,
          "pitch": 0.12613453151781684,
          "title": "Slip House",
          "text": "Kelompok 9"
        }
      ]
    },
    {
      "id": "11-klp-5---ceiling-shatterers",
      "name": "Klp 5 - Ceiling SHatterers",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.597825567524553,
        "pitch": -0.02007172679672209,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 3.0242189840221627,
          "pitch": 0.17486679494381008,
          "rotation": 3.141592653589793,
          "target": "10-klp-9---slip-house"
        },
        {
          "yaw": 2.567315242975573,
          "pitch": 0.07266378033431664,
          "rotation": 8.63937979737193,
          "target": "8-klp-10---khatulistiwa-sanctuary"
        },
        {
          "yaw": 0.025253243219985677,
          "pitch": 0.14312294577035445,
          "rotation": 3.141592653589793,
          "target": "12-simpang-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9767952303270588,
          "pitch": 0.26095229450115554,
          "title": "Ceiling Shatterers",
          "text": "Klp 5"
        }
      ]
    },
    {
      "id": "12-simpang-3",
      "name": "Simpang 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.9151415176512483,
        "pitch": -0.10225019012263203,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 1.7962303608351018,
          "pitch": 0.0424536623173033,
          "rotation": 14.137166941154074,
          "target": "15-klp-8---daisy-dukes"
        },
        {
          "yaw": 0.3205258507433726,
          "pitch": 0.039305215147413364,
          "rotation": 1.5707963267948966,
          "target": "14-klp-4---industriestil-chic-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-klp-3---the-simplicity-house",
      "name": "Klp 3 - The Simplicity House",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.55405368719543,
        "pitch": -0.016102092753094155,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.45587969901677816,
          "pitch": 0.09369556212050867,
          "rotation": 3.141592653589793,
          "target": "6-simpang-2"
        },
        {
          "yaw": -0.34343276974454895,
          "pitch": 0.02791560710434915,
          "rotation": 6.283185307179586,
          "target": "4-klp-1---asmaraloka-house"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.867565363642484,
          "pitch": -0.040532373498855634,
          "title": "The Simplicity House",
          "text": "Kelompok 3"
        }
      ]
    },
    {
      "id": "14-klp-4---industriestil-chic-house",
      "name": "Klp 4 - Industriestil Chic House",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5686235175571408,
        "pitch": -0.08349074390461375,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.17196512116794693,
          "pitch": 0.08809632063021056,
          "rotation": 3.141592653589793,
          "target": "6-simpang-2"
        },
        {
          "yaw": 2.5657099359935778,
          "pitch": 0.09665845018235508,
          "rotation": 3.141592653589793,
          "target": "12-simpang-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.985981624703288,
          "pitch": 0.1379619943391095,
          "title": "Industriestil Chic House",
          "text": "Kelompok 4"
        }
      ]
    },
    {
      "id": "15-klp-8---daisy-dukes",
      "name": "Klp 8 - Daisy Dukes",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5695217951663993,
        "pitch": 0.041316005391244914,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 2.986368800676055,
          "pitch": 0.210903308143358,
          "rotation": 3.141592653589793,
          "target": "12-simpang-3"
        },
        {
          "yaw": -0.10689705123457571,
          "pitch": 0.14461598152122335,
          "rotation": 4.71238898038469,
          "target": "11-klp-5---ceiling-shatterers"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1214395745078116,
          "pitch": 0.21679996852663308,
          "title": "Daisy Dukes",
          "text": "Kelompok 8"
        }
      ]
    }
  ],
  "name": "ARCHILOGUE - Virtual Exhibition 2024",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
