TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "gyroscopeEnabled": true,
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "id": "panorama_55CAF8A5_5F0E_563E_41CE_7B7EA01CCBB5",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 90,
  "label": "Ulaz",
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_55CAF8A5_5F0E_563E_41CE_7B7EA01CCBB5_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_55CAF8A5_5F0E_563E_41CE_7B7EA01CCBB5_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_55CAF8A5_5F0E_563E_41CE_7B7EA01CCBB5.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_4A851F1C_5F99_DF72_41D6_ECF8ECBF626C, 0, this.panorama_55CAF8A5_5F0E_563E_41CE_7B7EA01CCBB5)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_49D0C38F_5F09_FA0A_41CC_46FF9BB05248",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 14.53,
        "yaw": 40.97,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 63,
           "url": "media/panorama_55CAF8A5_5F0E_563E_41CE_7B7EA01CCBB5_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -12.62
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 40.97,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.53,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "width": 266,
           "url": "media/panorama_55CAF8A5_5F0E_563E_41CE_7B7EA01CCBB5_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -12.62
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_4A6268FC_5F0E_360E_4160_589260618B71",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 16.52,
        "yaw": -12.65,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 18,
           "width": 16,
           "url": "media/panorama_55CAF8A5_5F0E_563E_41CE_7B7EA01CCBB5_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -6.97
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -12.65,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 16.52,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 341,
           "width": 297,
           "url": "media/panorama_55CAF8A5_5F0E_563E_41CE_7B7EA01CCBB5_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -6.97
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_4A112B16_5F0F_CA1A_41B0_B618DF035337",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 12.56,
        "yaw": 85.57,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 24,
           "width": 16,
           "url": "media/panorama_55CAF8A5_5F0E_563E_41CE_7B7EA01CCBB5_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.72
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 85.57,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 12.56,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 350,
           "width": 225,
           "url": "media/panorama_55CAF8A5_5F0E_563E_41CE_7B7EA01CCBB5_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -5.72
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_55CAF8A5_5F0E_563E_41CE_7B7EA01CCBB5_t.jpg"
 },
 {
  "id": "panorama_55CAF8A5_5F0E_563E_41CE_7B7EA01CCBB5_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 360
    }
   ],
   "id": "sequence_489A3066_5F16_563A_41D5_E3DEFC9D7DC4",
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 599,
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 37.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0.19
  }
 },
 {
  "id": "panorama_5435B44A_5F0E_FE0A_41B6_28F01C8F517E",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 90,
  "label": "Panorama1_000@3x",
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5435B44A_5F0E_FE0A_41B6_28F01C8F517E_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_5435B44A_5F0E_FE0A_41B6_28F01C8F517E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5435B44A_5F0E_FE0A_41B6_28F01C8F517E.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_4BCF9939_5F1E_5616_41A1_A7F020C10749",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 19.41,
        "yaw": 45.76,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 17,
           "url": "media/panorama_5435B44A_5F0E_FE0A_41B6_28F01C8F517E_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -0.82
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 45.76,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 19.41,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 318,
           "width": 346,
           "url": "media/panorama_5435B44A_5F0E_FE0A_41B6_28F01C8F517E_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -0.82
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_497FC51B_5F0A_5E0A_41BE_943708EEB371",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 9.79,
        "yaw": -26.88,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 22,
           "width": 16,
           "url": "media/panorama_5435B44A_5F0E_FE0A_41B6_28F01C8F517E_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 2.07
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -26.88,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.79,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 242,
           "width": 175,
           "url": "media/panorama_5435B44A_5F0E_FE0A_41B6_28F01C8F517E_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 2.07
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_5435B44A_5F0E_FE0A_41B6_28F01C8F517E_t.jpg"
 },
 {
  "id": "panorama_5435B44A_5F0E_FE0A_41B6_28F01C8F517E_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 600,
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_55AD7E99_5F0E_CA17_41D3_73FAE1F6392B",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 90,
  "label": "Panorama2@3x",
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_55AD7E99_5F0E_CA17_41D3_73FAE1F6392B_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_55AD7E99_5F0E_CA17_41D3_73FAE1F6392B_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_55AD7E99_5F0E_CA17_41D3_73FAE1F6392B.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_4A851F1C_5F99_DF72_41D6_ECF8ECBF626C, 0, this.panorama_55AD7E99_5F0E_CA17_41D3_73FAE1F6392B)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_48071DFD_5F16_4E0E_41D2_E6AD51A469EC",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 10.21,
        "yaw": 87.42,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "width": 16,
           "url": "media/panorama_55AD7E99_5F0E_CA17_41D3_73FAE1F6392B_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -7.47
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 87.42,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 422,
           "width": 184,
           "url": "media/panorama_55AD7E99_5F0E_CA17_41D3_73FAE1F6392B_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -7.47
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_494544EA_5F1A_5E0A_4184_6D7542576447",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 11.16,
        "yaw": 65.07,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 27,
           "url": "media/panorama_55AD7E99_5F0E_CA17_41D3_73FAE1F6392B_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -19.03
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 65.07,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.16,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 125,
           "width": 211,
           "url": "media/panorama_55AD7E99_5F0E_CA17_41D3_73FAE1F6392B_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -19.03
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_55AD7E99_5F0E_CA17_41D3_73FAE1F6392B_t.jpg"
 },
 {
  "id": "panorama_55AD7E99_5F0E_CA17_41D3_73FAE1F6392B_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 600,
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 43.04,
   "class": "PanoramaCameraPosition",
   "pitch": -5.4
  }
 },
 {
  "id": "panorama_55AD58E5_5F0E_D63E_41CB_766EBDEC489A",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 90,
  "label": "Panorama2_000@3x",
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_55AD58E5_5F0E_D63E_41CB_766EBDEC489A_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_55AD58E5_5F0E_D63E_41CB_766EBDEC489A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_55AD58E5_5F0E_D63E_41CB_766EBDEC489A.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_49BF6669_5F1A_3A36_41A2_7E59A67E5D55",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 7.92,
        "yaw": 14.77,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 23,
           "width": 16,
           "url": "media/panorama_55AD58E5_5F0E_D63E_41CB_766EBDEC489A_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.03
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 14.77,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.92,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 210,
           "width": 141,
           "url": "media/panorama_55AD58E5_5F0E_D63E_41CB_766EBDEC489A_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -2.03
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_49BAA3C7_5F1E_5A7A_4190_CFE933D05810",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 4.04,
        "yaw": -9.15,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 16,
           "url": "media/panorama_55AD58E5_5F0E_D63E_41CB_766EBDEC489A_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 0.43
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -9.15,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.04,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 201,
           "width": 72,
           "url": "media/panorama_55AD58E5_5F0E_D63E_41CB_766EBDEC489A_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 0.43
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_55AD58E5_5F0E_D63E_41CB_766EBDEC489A_t.jpg"
 },
 {
  "id": "panorama_55AD58E5_5F0E_D63E_41CB_766EBDEC489A_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 600,
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0.09,
   "class": "PanoramaCameraPosition",
   "pitch": 1.95
  }
 },
 {
  "id": "panorama_55F20E0E_5F0E_4A0A_41D1_55321371A85A",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 90,
  "label": "Panorama4@3x",
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_55F20E0E_5F0E_4A0A_41D1_55321371A85A_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_55F20E0E_5F0E_4A0A_41D1_55321371A85A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_55F20E0E_5F0E_4A0A_41D1_55321371A85A.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_522292F7_5F78_A6BE_41B4_37D48B695C0B",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 14.89,
        "yaw": -72.77,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 28,
           "width": 16,
           "url": "media/panorama_55F20E0E_5F0E_4A0A_41D1_55321371A85A_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -15.89
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -72.77,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.89,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 498,
           "width": 276,
           "url": "media/panorama_55F20E0E_5F0E_4A0A_41D1_55321371A85A_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -15.89
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_513D3045_5F79_E1D2_41D0_483FF56FE696",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 20.03,
        "yaw": -9.34,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 40,
           "url": "media/panorama_55F20E0E_5F0E_4A0A_41D1_55321371A85A_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.94
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -9.34,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 20.03,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 157,
           "width": 397,
           "url": "media/panorama_55F20E0E_5F0E_4A0A_41D1_55321371A85A_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.94
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_55F20E0E_5F0E_4A0A_41D1_55321371A85A_t.jpg"
 },
 {
  "id": "panorama_55F20E0E_5F0E_4A0A_41D1_55321371A85A_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 360000
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 600,
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_558212D4_5F0E_7A1E_4164_1B56A716E424",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 90,
  "label": "Panorama5@3x",
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_558212D4_5F0E_7A1E_4164_1B56A716E424_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_558212D4_5F0E_7A1E_4164_1B56A716E424_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_558212D4_5F0E_7A1E_4164_1B56A716E424.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_51624F04_5F7B_BF52_41AC_AD0D80B73FD9",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 18.69,
        "yaw": -16.12,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 44,
           "url": "media/panorama_558212D4_5F0E_7A1E_4164_1B56A716E424_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.81
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -16.12,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 18.69,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 371,
           "url": "media/panorama_558212D4_5F0E_7A1E_4164_1B56A716E424_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -25.81
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_509403D6_5F7B_66FE_41D7_DF0923FABCD9",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 8.83,
        "yaw": 12.64,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 32,
           "width": 16,
           "url": "media/panorama_558212D4_5F0E_7A1E_4164_1B56A716E424_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -9.61
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 12.64,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.83,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 327,
           "width": 160,
           "url": "media/panorama_558212D4_5F0E_7A1E_4164_1B56A716E424_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -9.61
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_558212D4_5F0E_7A1E_4164_1B56A716E424_t.jpg"
 },
 {
  "id": "panorama_558212D4_5F0E_7A1E_4164_1B56A716E424_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 600,
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 2.76,
   "class": "PanoramaCameraPosition",
   "pitch": -4.04
  }
 },
 {
  "id": "panorama_4DC69EF5_5F19_CA1E_41BC_DDD6AD8609A3",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 90,
  "label": "Panofsgsgsdgsdgsdgrama3@3xfegwehewh",
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4DC69EF5_5F19_CA1E_41BC_DDD6AD8609A3_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_4DC69EF5_5F19_CA1E_41BC_DDD6AD8609A3_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_4DC69EF5_5F19_CA1E_41BC_DDD6AD8609A3.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_506B0BCD_5F79_E6D3_41CB_4D9018CE2702",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 16.66,
        "yaw": -73.4,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 38,
           "url": "media/panorama_4DC69EF5_5F19_CA1E_41BC_DDD6AD8609A3_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -24.05
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -73.4,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 16.66,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 326,
           "url": "media/panorama_4DC69EF5_5F19_CA1E_41BC_DDD6AD8609A3_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -24.05
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_4A851F1C_5F99_DF72_41D6_ECF8ECBF626C, 0, this.panorama_4DC69EF5_5F19_CA1E_41BC_DDD6AD8609A3)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_4F1E390A_5F78_E351_41C8_FD14F7E009A9",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 8.95,
        "yaw": -39.86,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 26,
           "width": 16,
           "url": "media/panorama_4DC69EF5_5F19_CA1E_41BC_DDD6AD8609A3_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 0.06
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -39.86,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.95,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 269,
           "width": 160,
           "url": "media/panorama_4DC69EF5_5F19_CA1E_41BC_DDD6AD8609A3_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 0.06
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_4DC69EF5_5F19_CA1E_41BC_DDD6AD8609A3_t.jpg"
 },
 {
  "id": "panorama_4DC69EF5_5F19_CA1E_41BC_DDD6AD8609A3_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 360000
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 600,
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_4D0FA3D7_5F1E_3A1A_41CE_CC7BFF899442",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 90,
  "label": "Panorafafafama1@3x22222",
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4D0FA3D7_5F1E_3A1A_41CE_CC7BFF899442_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_4D0FA3D7_5F1E_3A1A_41CE_CC7BFF899442_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_4D0FA3D7_5F1E_3A1A_41CE_CC7BFF899442.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 6)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_50EB6E21_5F89_E153_41D0_BB54A05C460A",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 20.97,
        "yaw": 63.14,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 39,
           "url": "media/panorama_4D0FA3D7_5F1E_3A1A_41CE_CC7BFF899442_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -36.36
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 63.14,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 20.97,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 188,
           "width": 465,
           "url": "media/panorama_4D0FA3D7_5F1E_3A1A_41CE_CC7BFF899442_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -36.36
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_4EBBC0A0_5F8B_6152_41D3_30B9EE12DC28",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 16.45,
        "yaw": -37.73,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 37,
           "url": "media/panorama_4D0FA3D7_5F1E_3A1A_41CE_CC7BFF899442_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -22.04
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -37.73,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 16.45,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 134,
           "width": 317,
           "url": "media/panorama_4D0FA3D7_5F1E_3A1A_41CE_CC7BFF899442_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -22.04
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_4A851F1C_5F99_DF72_41D6_ECF8ECBF626C, 0, this.panorama_4D0FA3D7_5F1E_3A1A_41CE_CC7BFF899442)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_50330BFC_5F8B_A6B2_41D0_E85AAD3B4C5C",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 7.28,
        "yaw": -62.93,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 50,
           "width": 16,
           "url": "media/panorama_4D0FA3D7_5F1E_3A1A_41CE_CC7BFF899442_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -14.88
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -62.93,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.28,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 426,
           "width": 134,
           "url": "media/panorama_4D0FA3D7_5F1E_3A1A_41CE_CC7BFF899442_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -14.88
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_4D0FA3D7_5F1E_3A1A_41CE_CC7BFF899442_t.jpg"
 },
 {
  "id": "panorama_4D0FA3D7_5F1E_3A1A_41CE_CC7BFF899442_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 360000
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 600,
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 90,
  "label": "Panorama1@3x",
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_4A828F24_5F99_DF51_41CF_C6FA3C8CC07D, 0, this.panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_4D756D91_5F1A_4E16_41C9_A312BEDB8F14",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 18.95,
        "yaw": 17.77,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 38,
           "url": "media/panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -31.54
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 17.77,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 18.95,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 167,
           "width": 397,
           "url": "media/panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -31.54
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_4A82EF24_5F99_DF51_41C0_FC873D555693, 0, this.panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_4EBD580A_5F1A_360A_41C7_97258869EEF6",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 9.81,
        "yaw": 29.88,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 32,
           "url": "media/panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -14.33
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 29.88,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 9.81,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 90,
           "width": 180,
           "url": "media/panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -14.33
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_4A851F1C_5F99_DF72_41D6_ECF8ECBF626C, 0, this.panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845); this.setMediaBehaviour(this.playList_4A851F1C_5F99_DF72_41D6_ECF8ECBF626C, 0, this.panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_4C0D62A3_5F7A_FA3A_41D0_E4D5C62EA139",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 18.12,
        "yaw": -150.34,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 23,
           "width": 16,
           "url": "media/panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 7.76
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -150.34,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 18.12,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 488,
           "width": 326,
           "url": "media/panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 7.76
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845_t.jpg"
 },
 {
  "id": "panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 600,
  "automaticRotationSpeed": 1,
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 27.22,
   "class": "PanoramaCameraPosition",
   "pitch": -1.36
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_55CAF8A5_5F0E_563E_41CE_7B7EA01CCBB5",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_55CAF8A5_5F0E_563E_41CE_7B7EA01CCBB5_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_5435B44A_5F0E_FE0A_41B6_28F01C8F517E",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5435B44A_5F0E_FE0A_41B6_28F01C8F517E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_55AD7E99_5F0E_CA17_41D3_73FAE1F6392B",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_55AD7E99_5F0E_CA17_41D3_73FAE1F6392B_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_55AD58E5_5F0E_D63E_41CB_766EBDEC489A",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_55AD58E5_5F0E_D63E_41CB_766EBDEC489A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_55F20E0E_5F0E_4A0A_41D1_55321371A85A",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_55F20E0E_5F0E_4A0A_41D1_55321371A85A_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_558212D4_5F0E_7A1E_4164_1B56A716E424",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_558212D4_5F0E_7A1E_4164_1B56A716E424_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_4DC69EF5_5F19_CA1E_41BC_DDD6AD8609A3",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_4DC69EF5_5F19_CA1E_41BC_DDD6AD8609A3_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_4D0FA3D7_5F1E_3A1A_41CE_CC7BFF899442",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_4D0FA3D7_5F1E_3A1A_41CE_CC7BFF899442_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_56C2235F_5F0E_DA0B_41D0_86CB950E4845_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)"
   }
  ]
 },
 {
  "id": "panorama_55A8FD3F_5F0E_4E0A_41D4_E8D428A1C2AB",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 90,
  "label": "Panorama5_001@3x",
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_55A8FD3F_5F0E_4E0A_41D4_E8D428A1C2AB_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_55A8FD3F_5F0E_4E0A_41D4_E8D428A1C2AB_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_55A8FD3F_5F0E_4E0A_41D4_E8D428A1C2AB.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_4BC220FD_5F0A_360E_41C2_430301390370",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 20.73,
        "yaw": 8.98,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 43,
           "url": "media/panorama_55A8FD3F_5F0E_4E0A_41D4_E8D428A1C2AB_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -17.89
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 8.98,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 20.73,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 142,
           "width": 389,
           "url": "media/panorama_55A8FD3F_5F0E_4E0A_41D4_E8D428A1C2AB_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -17.89
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_4E391FC4_5F88_BED2_4194_13A1C0EE265C",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 8.92,
        "yaw": 35.5,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 32,
           "width": 16,
           "url": "media/panorama_55A8FD3F_5F0E_4E0A_41D4_E8D428A1C2AB_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -4.84
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 35.5,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.92,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 327,
           "width": 160,
           "url": "media/panorama_55A8FD3F_5F0E_4E0A_41D4_E8D428A1C2AB_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -4.84
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_4D915910_5F89_6372_41C8_54C607E4FA16",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 16.44,
        "yaw": -131.81,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 43,
           "width": 16,
           "url": "media/panorama_55A8FD3F_5F0E_4E0A_41D4_E8D428A1C2AB_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -4.71
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -131.81,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 16.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 799,
           "width": 294,
           "url": "media/panorama_55A8FD3F_5F0E_4E0A_41D4_E8D428A1C2AB_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -4.71
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_4DCB62AC_5F89_6151_4193_183F5E23166E",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 14.73,
        "yaw": -168.11,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 31,
           "width": 16,
           "url": "media/panorama_55A8FD3F_5F0E_4E0A_41D4_E8D428A1C2AB_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.57
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -168.11,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 14.73,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 525,
           "width": 263,
           "url": "media/panorama_55A8FD3F_5F0E_4E0A_41D4_E8D428A1C2AB_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -1.57
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_55A8FD3F_5F0E_4E0A_41D4_E8D428A1C2AB_t.jpg"
 },
 {
  "id": "panorama_55A8FD3F_5F0E_4E0A_41D4_E8D428A1C2AB_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 600,
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "playList_4A851F1C_5F99_DF72_41D6_ECF8ECBF626C",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_55A8FD3F_5F0E_4E0A_41D4_E8D428A1C2AB",
    "camera": "this.panorama_55A8FD3F_5F0E_4E0A_41D4_E8D428A1C2AB_camera"
   }
  ]
 },
 {
  "id": "panorama_55911315_5F0E_3A1E_41D3_616C6BC8150C",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 90,
  "label": "Panorama3@3x",
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_55911315_5F0E_3A1E_41D3_616C6BC8150C_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_55911315_5F0E_3A1E_41D3_616C6BC8150C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_55911315_5F0E_3A1E_41D3_616C6BC8150C.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_4D88BCA6_5F7F_CE3A_41CE_5026D880739E",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 18.85,
        "yaw": 27.47,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 42,
           "url": "media/panorama_55911315_5F0E_3A1E_41D3_616C6BC8150C_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -31.21
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 27.47,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 18.85,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 148,
           "width": 393,
           "url": "media/panorama_55911315_5F0E_3A1E_41D3_616C6BC8150C_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -31.21
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_4A82EF24_5F99_DF51_41C0_FC873D555693, 0, this.panorama_55911315_5F0E_3A1E_41D3_616C6BC8150C)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_4C790390_5F7E_FA16_41B7_5968DBAC7664",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 8.76,
        "yaw": -112.1,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 49,
           "url": "media/panorama_55911315_5F0E_3A1E_41D3_616C6BC8150C_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -13.38
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -112.1,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.76,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 52,
           "width": 160,
           "url": "media/panorama_55911315_5F0E_3A1E_41D3_616C6BC8150C_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -13.38
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_4A851F1C_5F99_DF72_41D6_ECF8ECBF626C, 0, this.panorama_55911315_5F0E_3A1E_41D3_616C6BC8150C)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_4CCFF5C5_5F7A_7E7F_41D6_8D3B9C226AA2",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 11.11,
        "yaw": 45.98,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 22,
           "width": 16,
           "url": "media/panorama_55911315_5F0E_3A1E_41D3_616C6BC8150C_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 1.68
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 45.98,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 11.11,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 279,
           "width": 198,
           "url": "media/panorama_55911315_5F0E_3A1E_41D3_616C6BC8150C_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 1.68
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_55911315_5F0E_3A1E_41D3_616C6BC8150C_t.jpg"
 },
 {
  "id": "panorama_55911315_5F0E_3A1E_41D3_616C6BC8150C_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 600,
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": -3.26,
   "class": "PanoramaCameraPosition",
   "pitch": -0.16
  }
 },
 {
  "id": "playList_4A828F24_5F99_DF51_41CF_C6FA3C8CC07D",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_55911315_5F0E_3A1E_41D3_616C6BC8150C",
    "camera": "this.panorama_55911315_5F0E_3A1E_41D3_616C6BC8150C_camera"
   }
  ]
 },
 {
  "id": "panorama_4EC9E937_5F19_D61A_41C1_2F2B5204016C",
  "pitch": 0,
  "hfovMax": 120,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "hfovMin": 90,
  "label": "Panogdgdsdgshshdshdshrama2@3x3r3tt33tt",
  "vfov": 180,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_4EC9E937_5F19_D61A_41C1_2F2B5204016C_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_4EC9E937_5F19_D61A_41C1_2F2B5204016C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_4EC9E937_5F19_D61A_41C1_2F2B5204016C.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_4A828F24_5F99_DF51_41CF_C6FA3C8CC07D, 0, this.panorama_4EC9E937_5F19_D61A_41C1_2F2B5204016C)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_4CE3959E_5F79_FE0A_41D6_C09661C4CEAA",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 10.81,
        "yaw": 10.43,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 56,
           "url": "media/panorama_4EC9E937_5F19_D61A_41C1_2F2B5204016C_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -11.99
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 10.43,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.81,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 56,
           "width": 197,
           "url": "media/panorama_4EC9E937_5F19_D61A_41C1_2F2B5204016C_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -11.99
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_4A851F1C_5F99_DF72_41D6_ECF8ECBF626C, 0, this.panorama_4EC9E937_5F19_D61A_41C1_2F2B5204016C)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_4A259585_5F76_3EFE_41AC_CCD9E1DAE861",
      "class": "HotspotPanoramaOverlay",
      "maps": [
       {
        "hfov": 4.42,
        "yaw": 3.5,
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 22,
           "width": 16,
           "url": "media/panorama_4EC9E937_5F19_D61A_41C1_2F2B5204016C_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 0.51
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 3.5,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 4.42,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 112,
           "width": 79,
           "url": "media/panorama_4EC9E937_5F19_D61A_41C1_2F2B5204016C_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 0.51
       }
      ]
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_4EC9E937_5F19_D61A_41C1_2F2B5204016C_t.jpg"
 },
 {
  "id": "panorama_4EC9E937_5F19_D61A_41C1_2F2B5204016C_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 0.54,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 600,
  "class": "PanoramaCamera",
  "initialPosition": {
   "hfov": 110,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "playList_4A82EF24_5F99_DF51_41C0_FC873D555693",
  "class": "PlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_4EC9E937_5F19_D61A_41C1_2F2B5204016C",
    "camera": "this.panorama_4EC9E937_5F19_D61A_41C1_2F2B5204016C_camera"
   }
  ]
 }
], "children": [
 {
  "progressHeight": 10,
  "toolTipOpacity": 1,
  "progressBottom": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBorderRadius": 0,
  "paddingRight": 0,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "borderRadius": 0,
  "class": "ViewerArea",
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "minWidth": 100,
  "toolTipShadowOpacity": 1,
  "shadow": false,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBottom": 5,
  "playbackBarProgressOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "paddingBottom": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "height": "100%",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowColor": "#000000",
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarLeft": 0,
  "width": "100%",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
  "toolTipShadowHorizontalLength": 0,
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipBorderRadius": 3,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "minHeight": 50,
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeight": 10,
  "progressLeft": 0,
  "toolTipBorderColor": "#767676",
  "id": "MainViewer",
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "progressBorderColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderRadius": 0,
  "progressOpacity": 1,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "toolTipFontStyle": "normal",
  "playbackBarBackgroundOpacity": 1,
  "paddingLeft": 0,
  "transitionDuration": 500,
  "playbackBarRight": 0,
  "playbackBarOpacity": 1,
  "toolTipBorderSize": 1,
  "borderSize": 0,
  "toolTipPaddingRight": 6
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "layout": "absolute",
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "width": "100%",
 "paddingRight": 0,
 "creationPolicy": "delayed",
 "vrPolyfillScale": 1,
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "class": "Player",
 "gap": 10,
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": true,
 "minWidth": 20,
 "minHeight": 20,
 "scripts": {
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); }
 },
 "shadow": false,
 "scrollBarMargin": 2,
 "id": "rootPlayer",
 "data": {
  "name": "Player441"
 },
 "desktopMipmappingEnabled": true,
 "horizontalAlign": "left",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "paddingLeft": 0,
 "contentOpaque": false,
 "overflow": "visible"
})