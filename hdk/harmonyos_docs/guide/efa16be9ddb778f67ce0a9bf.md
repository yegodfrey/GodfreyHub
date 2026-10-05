---
name: document/cn/guide/guide-atomic-service-device-ctrl-json-dialog-0000001158045931
title: Dialog类型控件配置说明
uri: https://developer.huawei.com/consumer/cn/doc/guide/guide-atomic-service-device-ctrl-json-dialog-0000001158045931
source: portal
---

# Dialog类型控件配置说明

#### 概述

Dialog类型控件一共有七个，分别是枚举类型Dialog、单选类型Dialog、展示类型Dialog、时间选择器类型Dialog、日期选择器类型Dialog、日期时间选择器类型Dialog、多列文本选择器类型Dialog。

#### 枚举类型Dialog

枚举类型Dialog用于在Dialog中类型的选择，可以显示一到八个内容区域。每个区域均可以点击，点击后将根据设置切换为对应的图片，表示状态已更改，每次只有一个区域内容处于激活的状态。

示例图：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230511111806.39833014944053873306032322359454:50001231000000:2800:D9DD15841371CE8168E69CC8D46F575FDACF713D92906A995801A34A2B6DB39B.png?needInitFileName=true?needInitFileName=true)

对应样例：
    
    {
          "name": "饮功能选择",
          "id": "drinkKind",
          "path": "drinkKind",
          "dialogType": "ENUM",
          "controlItems": [
            {
              "name": "取消",
              "type": "cancel"
            },
            {
              "name": "下一步",
              "type": "submit"
            }
          ],
          "command": [
            {
              "name": "五谷",
              "icon": {
                "value": {
                  "defaultTarget": "/ic_grains_nor.png",
                  "target": "/ic_grains_on.png"
                },
                "valueNight": {
                  "defaultTarget": "/ic_grains_nor.png",
                  "target": "/ic_grains_on.png"
                }
              },
              "dialogList": ["duration", "temperature", "capacity", "speed"],
              "value": 1
            },
            {
              "name": "豆浆",
              "icon": {
                "value": {
                  "defaultTarget": "/ic_soy_milk_nor.png",
                  "target": "/ic_soy_milk_on.png"
                },
                "valueNight": {
                  "defaultTarget": "/ic_soy_milk_nor.png",
                  "target": "/ic_soy_milk_on.png"
                }
              },
              "dialogList": ["duration", "temperature", "capacity", "speed"],
              "value": 2
            }
          ]
        }

相关的参数，定义如下：

字段名称 | 可选/必选 | 字段类型 | 字段描述 | 备注  
---|---|---|---|---  
name | 必选 | String（1-128） | 当前弹框显示名称 | 例如：“饮功能选择”。  
id | 必选 | String（1-128） | 弹框唯一标识 | 例如：“drinkKind”。  
path | 必选 | String（1-128） | 动态内容条件值 | 例如：“drinkKind”。  
dialogType | 必选 | String（1-128） | 弹框类型 | 弹框类型为：“RADIO”，“ENUM”，“PICKER”，“INFO”。  
controlItems | 必选 | ControlItems[] | 弹框底部控制项 | -  
command | 必选 | Command[] | 弹框对应的动作数组 | -  
  
ControlItems

字段名称 | 可选/必选 | 字段类型 | 字段描述 | 备注  
---|---|---|---|---  
name | 必选 | String（1-128） | 控制项显示名称 | 例如：“取消”。  
type | 必选 | String（1-128） | 控制项类型 | 控制项类型为：“submit”，“cancel”。  
  
Command

字段名称 | 可选/必选 | 字段类型 | 字段描述 | 备注  
---|---|---|---|---  
name | 必选 | String（1-128） | 显示名称 | 例如：“五谷”。  
icon.value.defaultTarget | 必选 | String（1-128） | 默认图标url | 例如：“/ic_soymilk_nor.png”。  
icon.value.target | 必选 | String（1-128） | 点击状态图标url | 例如：“/ic_soymilk_on.png”。  
icon.valueNight.defaultTarget | 必选 | String（1-128） | 深色模式默认图标url | 例如：“/ic_soymilk_nor.png”。  
icon.valueNight.target | 必选 | String（1-128） | 深色模式点击状态图标url | 例如：“/ic_soymilk_on.png”。  
dialogList | 可选 | Array | 继续显示的弹框列表 | -  
value | 必选 | int | 命令下发对应的属性值 | 例如：1，表示点了第一个按钮。  
  
#### 单选类型Dialog

单选类型Dialog用于在Dialog中进行唯一选择，下方以时间设置为例进行说明。

示例图：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230511111807.27790232981723911644504897287945:50001231000000:2800:960EA85FE23D91AB029A64026D5BB776E31CA7FFC4FC5507C5FB4716DA7A3833.png?needInitFileName=true?needInitFileName=true)

对应样例：
    
    {
    "name": "时间设置",
        "id": "drinkTime1",
        "path": "drinkTime1",
        "dialogType": "RADIO",
        "controlItems": [
    	{
    	    "name": "取消",
    	    "type": "cancel"
    	},
    	{
    	    "name": "下一步",
    	    "type": "submit"
            }
        ],
        "range": ["1分钟", "3分钟", "5分钟", "10分钟"],
        "value": [1, 3, 5, 10]
        }

相关的参数，定义如下：

字段名称 | 可选/必选 | 字段类型 | 字段描述 | 备注  
---|---|---|---|---  
name | 必选 | String（1-128） | 当前弹框显示名称 | 例如：“时长设置”。  
id | 必选 | String（1-128） | 弹框唯一标识 | 例如：“duration”。  
path | 必选 | String（1-128） | 动态内容条件值 | 例如：“duration”。  
dialogType | 必选 | String（1-128） | 弹框类型 | 弹框类型为：“RADIO”，“ENUM”，“PICKER”，“INFO”。  
controlItems | 必选 | ControlItems[] | 弹框底部控制项 | -  
range | 必选 | Array | 单选项的数组 | 例如：["1分钟", "3分钟", "5分钟", "10分钟"]。  
value | 必选 | Array | 单选项对应值的数组 | 例如：[1, 3, 5, 10]。  
  
#### 展示类型Dialog

展示类型Dialog用于显示需要展示的图片和描述文字。

示例图：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230511111807.09689205257305660550532285734901:50001231000000:2800:6D3BB43C316F0C0430AF60B17FE344629D9FB5941585C231D65A2987D9409907.png?needInitFileName=true?needInitFileName=true)

对应样例：
    
    {
      "name": "手磨咖啡功能",
      "id": "handGrindingCoffee",
      "dialogType": "INFO",
      "controlItems": [
        {
          "name": "取消",
          "type": "cancel"
        },
        {
          "name": "确认",
          "type": "submit"
        }
      ],
      "icon": "/ic_grand_coffee.png",
      "headline": "温馨提示",
      "desc": "请将干磨杯内的咖啡粉装到咖啡滤网中，再点击开始进行冲泡。"
        }

相关的参数，定义如下：

字段名称 | 可选/必选 | 字段类型 | 字段描述 | 备注  
---|---|---|---|---  
name | 必选 | String（1-128） | 当前弹框显示名称 | 例如：“手磨咖啡功能”。  
id | 必选 | String（1-128） | 弹框唯一标识 | 例如：“handGrindingCoffee”。  
dialogType | 必选 | String（1-128） | 弹框类型 | 弹框类型为：“RADIO”，“ENUM”，“PICKER”，“INFO”。  
controlItems | 必选 | ControlItems[] | 弹框底部控制项 | -  
icon | 必选 | String（1-128） | 展示图片url | 例如：“/ic_handGrindingCoffee.png”。  
headline | 必选 | String（1-128） | 标题 | 例如：“温馨提示”。  
desc | 必选 | String（1-128） | 描述 | 例如：“请将干磨杯内的咖啡粉装到咖啡滤网中，再点击开始进行冲泡。”  
  
#### 时间选择器类型Dialog

时间选择器类型Dialog用于在Dialog中选择时间，可以通过设置 "hours"参数，将时间显示为12小时制或者24小时制。

示例图：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230511111807.74981548262520909719860635224562:50001231000000:2800:EB450DE60B02A7190C53494C9A1F30F3F9023A0A1D42594BBB9067B3EEDB4B5E.png?needInitFileName=true?needInitFileName=true)

对应样例：
    
    {
      "name": "时间设置",
      "id": "time",
      "path": "time",
      "dialogType": "PICKER",
      "controlItems": [
        {
          "name": "取消",
          "type": "cancel"
        },
        {
          "name": "确认",
          "type": "submit"
        }
      ],
      "pickerType": "time",
      "containSecond": true,
      "hours": 24
        }

相关的参数，定义如下：

字段名称 | 可选/必选 | 字段类型 | 字段描述 | 备注  
---|---|---|---|---  
name | 必选 | String（1-128） | 当前弹框显示名称 | 例如：“时间设置”。  
id | 必选 | String（1-128） | 弹框唯一标识 | 例如：“time”。  
path | 必选 | String（1-128） | 动态内容条件值 | 例如：“time”。  
dialogType | 必选 | String（1-128） | 弹框类型 | 弹框类型为：“RADIO”，“ENUM”，“PICKER”，“INFO”。  
controlItems | 必选 | ControlItems[] | 弹框底部控制项 | -  
pickerType | 必选 | String（1-128） | 选择器类型 | 选择器类型为：“text”，“time”，“date”，“datetime”，“multi-text”。  
containSecond | 可选 | boolean | 时间选择器是否包含秒 | 例如：true。  
hours | 可选 | int | 时间选择器采用的时间格式 | 可选值：12：按照12小时制显示，用上午和下午进行区分；24：按照24小时制显示。  
  
#### 日期选择器类型Dialog

日期选择器类型Dialog用于在Dialog中选择日期，可以通过设置"lunar"的值，显示为农历时间或者公历时间。

示例图：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230511111807.09908933916346231270812436230735:50001231000000:2800:D6040FAD359056446BC28D2CBD4F9C3998B3FBF845F01879611E0701075EFEC9.png?needInitFileName=true?needInitFileName=true)

对应样例：
    
    {
    "name": "设置日期",
      "id": "date",
      "path": "date",
      "dialogType": "PICKER",
      "controlItems": [
        {
          "name": "取消",
          "type": "cancel"
        },
        {
          "name": "确认",
          "type": "submit"
        }
      ],
      "pickerType": "date",
      "start": "1970-1-1",
      "end": "2100-12-31",
      "lunar": false
        }

相关的参数，定义如下：

字段名称 | 可选/必选 | 字段类型 | 字段描述 | 备注  
---|---|---|---|---  
name | 必选 | String（1-128） | 当前弹框显示名称 | 例如：“设置日期”。  
id | 必选 | String（1-128） | 弹框唯一标识 | 例如：“date”。  
path | 必选 | String（1-128） | 动态内容条件值 | 例如：“date”。  
dialogType | 必选 | String（1-128） | 弹框类型 | 弹框类型为：“RADIO”，“ENUM”，“PICKER”，“INFO”。  
controlItems | 必选 | ControlItems[] | 弹框底部控制项 | -  
pickerType | 必选 | String（1-128） | 选择器类型 | 选择器类型为：“text”，“time”，“date”，“datetime”，“multi-text”。  
start | 可选 | time | 日期选择器的起始时间 | 格式为 YYYY-MM-DD。  
end | 可选 | time | 日期选择器的结束时间 | 格式为 YYYY-MM-DD。  
lunar | 可选 | boolean | 日期选择器是否为农历展示 | 例如：false。  
  
#### 日期时间选择器类型Dialog

日期时间选择器类型Dialog用于在Dialog中选择日期和时间，可以通过设置 "hours"参数，将时间显示为12小时制或者24小时制。可以通过设置"lunar"的值，显示为农历时间或者公历时间。

示例图：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230511111807.91324986685687950458527538975144:50001231000000:2800:AE6BDF95C81BDB73AF92BEE6B36A93F006C3E160B7AB696C7AD5F837097D0E17.png?needInitFileName=true?needInitFileName=true)

对应样例：
    
    {
      "name": "日期时间设置",
      "id": "datetime",
      "path": "datetime",
      "dialogType": "PICKER",
      "controlItems": [
        {
          "name": "取消",
          "type": "cancel"
        },
        {
          "name": "确认",
          "type": "submit"
        }
      ],
      "pickerType": "datetime",
      "lunar": false,
      "hours": 24
        }

相关的参数，定义如下：

字段名称 | 可选/必选 | 字段类型 | 字段描述 | 备注  
---|---|---|---|---  
name | 必选 | String（1-128） | 当前弹框显示名称 | 例如：“日期时间设置”。  
id | 必选 | String（1-128） | 弹框唯一标识 | 例如：“datetime”。  
path | 必选 | String（1-128） | 动态内容条件值 | 例如：“datetime”。  
dialogType | 必选 | String（1-128） | 弹框类型 | 弹框类型为：“RADIO”，“ENUM”，“PICKER”，“INFO”。  
controlItems | 必选 | ControlItems[] | 弹框底部控制项 | -  
pickerType | 必选 | String（1-128） | 选择器类型 | 选择器类型为：“text”，“time”，“date”，“datetime”，“multi-text”。  
lunar | 可选 | boolean | 日期时间选择器是否为农历显示 | 例如：false。  
hours | 可选 | int | 时间选择器采用的时间格式 | 可选值：12：按照12小时制显示，用上午和下午进行区分；24：按照24小时制显示。  
  
#### 文本选择器类型Dialog

文本选择器类型Dialog用于在Dialog中选择文本，文本内容可通过配置指定。

示例图：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230511111807.95995987826828186671334670168963:50001231000000:2800:F84CAD30EB4321482709A298FBCD3500EB2B68D2A52536ABBE7AA0781EEB3D08.png?needInitFileName=true?needInitFileName=true)

对应样例：
    
    {
      "name": "水温设置",
      "id": "temperature",
      "path": "temperature",
      "dialogType": "PICKER",
      "controlItems": [
        {
          "name": "取消",
          "type": "cancel"
        },
        {
          "name": "下一步",
          "type": "submit"
        }
      ],
      "pickerType": "text",
      "range": ["40", "50", "60", "70", "80", "90", "100"],
      "value": [40, 50, 60, 70, 80, 90, 100],
      "postField": "℃"
    }

相关的参数，定义如下：

字段名称 | 可选/必选 | 字段类型 | 字段描述 | 备注  
---|---|---|---|---  
name | 必选 | String（1-128） | 当前弹框显示名称 | 例如：“水温设置”。  
id | 必选 | String（1-128） | 弹框唯一标识 | 例如：“temperature”。  
path | 必选 | String（1-128） | 动态内容条件值 | 例如：“temperature”。  
dialogType | 必选 | String（1-128） | 弹框类型 | 弹框类型为：“RADIO”，“ENUM”，“PICKER”，“INFO”。  
controlItems | 必选 | ControlItems[] | 弹框底部控制项 | -  
pickerType | 必选 | String（1-128） | 选择器类型 | 选择器类型为：“text”，“time”，“date”，“datetime”，“multi-text”。  
range | 必选 | Array | 文本选择器的取值范围 | 例如：["40", "50", "60", "70", "80", "90", "100"]。  
value | 必选 | Array | 文本选择器对应的值的范围 | 例如：[40, 50, 60, 70, 80, 90, 100]。  
preField | 可选 | String（1-128） | 文本选择器选定值增加的前缀字段 | 例如：“1”。  
postField | 可选 | String（1-128） | 文本选择器选定值增加的后缀字段 | 例如：“℃”。  
  
#### 多文本选择器类型Dialog

多列文本选择器类型Dialog用于在Dialog中选择多列文本，文本内容通过配置指定。

示例图：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230511111807.01091084449779894980778029935652:50001231000000:2800:B9DD9B7C37FA32EDD01D734EB657A146EE0FE743BD9A2030E627C6B659E1BACD.png?needInitFileName=true?needInitFileName=true)

对应样例：
    
    {
      "name": "时长设置",
      "id": "duration",
      "path": "duration",
      "dialogType": "PICKER",
      "controlItems": [
        {
          "name": "取消",
          "type": "cancel"
        },
        {
          "name": "下一步",
          "type": "submit"
        }
      ],
      "pickerType": "multi-text",
      "range": [
        ["0分","1分","2分","3分","4分","5分","6分"],
        ["0秒","1秒","2秒","3秒","4秒","5秒","6秒"]
      ]
      }

相关的参数，定义如下：

字段名称 | 可选/必选 | 字段类型 | 字段描述 | 备注  
---|---|---|---|---  
name | 必选 | String（1-128） | 当前弹框显示名称 | 例如：“时长设置”。  
id | 必选 | String（1-128） | 弹框唯一标识 | 例如：“duration”。  
path | 必选 | String（1-128） | 动态内容条件值 | 例如：“duration”。  
dialogType | 必选 | String（1-128） | 弹框类型 | 弹框类型为：“RADIO”，“ENUM”，“PICKER”，“INFO”。  
controlItems | 必选 | ControlItems[] | 弹框底部控制项 | -  
pickerType | 必选 | String（1-128） | 选择器类型 | 选择器类型为：“text”，“time”，“date”，“datetime”，“multi-text“。  
range | 必选 | 二维Array | 多列文本选择器的选择值 | 长度表示多少列，数组的每项表示每列的数据，如 [["a","b"], ["c","d"]]。
