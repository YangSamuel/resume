﻿$axure.loadCurrentPage({
  "url":"扫一扫.html",
  "generationDate":new Date(1448007539588.18),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable",
"bohao"],
  "page":{
    "packageId":"7dc10bfa18db4a458442fd1c59a00232",
    "type":"Axure:Page",
    "name":"扫一扫",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"应用字体",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
      "onLoad":{
        "description":"OnLoad",
        "cases":[{
            "description":"用例 1<br> (If area of yd 接触 area of dibu)",
            "isNewIfGroup":false,
            "condition":{
              "exprType":"fcall",
              "functionName":"IsOver",
              "arguments":[{
                  "exprType":"fcall",
                  "functionName":"GetWidgetRectangles",
                  "arguments":[{
                      "exprType":"pathLiteral",
                      "isThis":false,
                      "isFocused":false,
                      "isTarget":false,
                      "value":["458d048dba5446c2be9e7e61001c4535"]}]},
{
                  "exprType":"fcall",
                  "functionName":"GetWidgetRectangles",
                  "arguments":[{
                      "exprType":"pathLiteral",
                      "isThis":false,
                      "isFocused":false,
                      "isTarget":false,
                      "value":["2b1283e12d3240fdaa39cf684b7e186e"]}]}]},
            "actions":[{
                "action":"moveWidget",
                "description":"移动 yd 到 (98,248) 线性 1000ms",
                "objectsToMoves":[{
                    "objectPath":["458d048dba5446c2be9e7e61001c4535"],
                    "moveInfo":{
                      "moveType":"location",
                      "xValue":{
                        "exprType":"stringLiteral",
                        "value":"98",
                        "stos":[]},
                      "yValue":{
                        "exprType":"stringLiteral",
                        "value":"248",
                        "stos":[]},
                      "options":{
                        "easing":"linear",
                        "duration":1000}}}]},
{
                "action":"moveWidget",
                "description":"移动 yd 到 (98,340) 线性 1000ms",
                "objectsToMoves":[{
                    "objectPath":["458d048dba5446c2be9e7e61001c4535"],
                    "moveInfo":{
                      "moveType":"location",
                      "xValue":{
                        "exprType":"stringLiteral",
                        "value":"98",
                        "stos":[]},
                      "yValue":{
                        "exprType":"stringLiteral",
                        "value":"340",
                        "stos":[]},
                      "options":{
                        "easing":"linear",
                        "duration":1000}}}]}]}]}},
    "diagram":{
      "objects":[{
          "id":"60688f5c4e5446139efee39a47e31ab7",
          "label":"",
          "type":"referenceDiagramObject",
          "styleType":"referenceDiagramObject",
          "visible":true,
          "style":{
},
          "adaptiveStyles":{
},
          "masterId":"93fd5d385bb2419698ca8d204db6bd4a"},
{
          "id":"b8762d457d2048edb733140347350a89",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fill":{
              "fillType":"solid",
              "color":0xFF030105},
            "location":{
              "x":40,
              "y":127.5},
            "size":{
              "width":250,
              "height":401}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"6a55502ae36543db925f7e37e8dc42c1",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFF030105},
                "location":{
                  "x":40,
                  "y":127.5},
                "size":{
                  "width":250,
                  "height":401}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/扫一扫/u5.png"}},
{
          "id":"9b17e502f2b94a22a37f3a589ecc9f6b",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":40,
              "y":98.5},
            "size":{
              "width":250,
              "height":30}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"13dca4b2012e44a8a229a1062375fa72",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":40,
                  "y":98.5},
                "size":{
                  "width":250,
                  "height":30}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/index/u30.png"}},
{
          "id":"5e3b89e2e5014f059b68ed67ec6e325f",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":138,
              "y":106},
            "size":{
              "width":40,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"b1c42cf602a24ff1a72bb59b527dd350",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":138,
                  "y":106},
                "size":{
                  "width":40,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"ed63d187428b40c78e3114e70f82a86c",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":48,
              "y":106},
            "size":{
              "width":35,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"5d1a93bd0262411990b400182a21deed",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":48,
                  "y":106},
                "size":{
                  "width":35,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 个人中心",
                      "target":{
                        "targetType":"page",
                        "url":"个人中心.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"ebc542790eff45229247755969c595b2",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":70,
              "y":218.5},
            "size":{
              "width":190,
              "height":170}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"6c259de242d647b1b1c62a13708792d8",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":70,
                  "y":218.5},
                "size":{
                  "width":190,
                  "height":170}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/扫一扫/u13.png"}},
{
          "id":"849a78e226f44c909f002da64bda3510",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fill":{
              "fillType":"solid",
              "color":0xFF030105},
            "location":{
              "x":110,
              "y":338.5},
            "size":{
              "width":120,
              "height":20},
            "borderWidth":"-1"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"356f8228e9644e40962c097da229ea07",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFF030105},
                "location":{
                  "x":110,
                  "y":338.5},
                "size":{
                  "width":120,
                  "height":20},
                "borderWidth":"-1"},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/扫一扫/u15.png"}},
{
          "id":"458d048dba5446c2be9e7e61001c4535",
          "label":"yd",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":98,
              "y":340},
            "size":{
              "width":131,
              "height":27}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"6375a9322b0f4aa6a21467d7e81213d9",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":98,
                  "y":340},
                "size":{
                  "width":131,
                  "height":27}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/扫一扫/yd_u17.png"}},
{
          "id":"2b1283e12d3240fdaa39cf684b7e186e",
          "label":"dibu",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fill":{
              "fillType":"solid",
              "color":0xFF030105},
            "location":{
              "x":115,
              "y":365},
            "size":{
              "width":100,
              "height":23},
            "borderWidth":"-1"},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"aafbac9000ef45a481f5a86ed857698e",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fill":{
                  "fillType":"solid",
                  "color":0xFF030105},
                "location":{
                  "x":115,
                  "y":365},
                "size":{
                  "width":100,
                  "height":23},
                "borderWidth":"-1"},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/扫一扫/dibu_u19.png"}}]}},
  "masters":{
    "93fd5d385bb2419698ca8d204db6bd4a":{
      "packageId":"93fd5d385bb2419698ca8d204db6bd4a",
      "type":"Axure:Master",
      "name":"手机",
      "notes":{
},
      "style":{
        "baseStyle":"627587b6038d43cca051c114ac41ad32",
        "pageAlignment":"near",
        "fill":{
          "fillType":"solid",
          "color":0xFFFFFFFF},
        "image":null,
        "imageHorizontalAlignment":"near",
        "imageVerticalAlignment":"near",
        "imageRepeat":"auto",
        "favicon":null,
        "sketchFactor":"0",
        "colorStyle":"appliedColor",
        "fontName":"应用字体",
        "borderWidth":"0"},
      "adaptiveStyles":{
},
      "interactionMap":{
},
      "diagram":{
        "objects":[{
            "id":"2e194cf0c2b54c5680885a8df07da4e2",
            "label":"",
            "type":"imageBox",
            "styleType":"imageBox",
            "visible":true,
            "style":{
              "size":{
                "width":336,
                "height":627}},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"0c76e3d052f04fcfb070a80a46e1e3f9",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "size":{
                    "width":336,
                    "height":627}},
                "adaptiveStyles":{
}}],
            "images":{
              "normal~":"images/index/u1.png"}},
{
            "id":"12b733eb02494e5a8662e96bcc215f5f",
            "label":"",
            "type":"buttonShape",
            "styleType":"buttonShape",
            "visible":true,
            "style":{
              "location":{
                "x":40,
                "y":100},
              "size":{
                "width":250,
                "height":430}},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"18c2b83789bc48f89e71a44ca19cb8ae",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "location":{
                    "x":40,
                    "y":100},
                  "size":{
                    "width":250,
                    "height":430}},
                "adaptiveStyles":{
}}],
            "images":{
              "normal~":"images/index/u3.png"}}]}}},
  "objectPaths":{
    "60688f5c4e5446139efee39a47e31ab7":{
      "scriptId":"u0",
      "2e194cf0c2b54c5680885a8df07da4e2":{
        "scriptId":"u1"},
      "0c76e3d052f04fcfb070a80a46e1e3f9":{
        "scriptId":"u2"},
      "12b733eb02494e5a8662e96bcc215f5f":{
        "scriptId":"u3"},
      "18c2b83789bc48f89e71a44ca19cb8ae":{
        "scriptId":"u4"}},
    "b8762d457d2048edb733140347350a89":{
      "scriptId":"u5"},
    "6a55502ae36543db925f7e37e8dc42c1":{
      "scriptId":"u6"},
    "9b17e502f2b94a22a37f3a589ecc9f6b":{
      "scriptId":"u7"},
    "13dca4b2012e44a8a229a1062375fa72":{
      "scriptId":"u8"},
    "5e3b89e2e5014f059b68ed67ec6e325f":{
      "scriptId":"u9"},
    "b1c42cf602a24ff1a72bb59b527dd350":{
      "scriptId":"u10"},
    "ed63d187428b40c78e3114e70f82a86c":{
      "scriptId":"u11"},
    "5d1a93bd0262411990b400182a21deed":{
      "scriptId":"u12"},
    "ebc542790eff45229247755969c595b2":{
      "scriptId":"u13"},
    "6c259de242d647b1b1c62a13708792d8":{
      "scriptId":"u14"},
    "849a78e226f44c909f002da64bda3510":{
      "scriptId":"u15"},
    "356f8228e9644e40962c097da229ea07":{
      "scriptId":"u16"},
    "458d048dba5446c2be9e7e61001c4535":{
      "scriptId":"u17"},
    "6375a9322b0f4aa6a21467d7e81213d9":{
      "scriptId":"u18"},
    "2b1283e12d3240fdaa39cf684b7e186e":{
      "scriptId":"u19"},
    "aafbac9000ef45a481f5a86ed857698e":{
      "scriptId":"u20"}}});