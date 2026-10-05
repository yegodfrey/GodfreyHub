---
name: document/cn/doc-guides/basic-resource-file-example-0000001051733014
title: 资源文件的使用
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/basic-resource-file-example-0000001051733014
source: portal
---

# 资源文件的使用

#### 资源文件的引用方法

**base目录与限定词目录中的资源文件** ：通过指定资源类型（type）和资源名称（name）来引用。

     * Java文件引用资源文件的格式：**ResourceTable._type_ _**_**name**_ 。特别地，如果引用的是系统资源，则采用：**ohos.global.systemres.ResourceTable._type_ __name_** 。
       * 示例一：在Java文件中，引用string.json文件中类型为“String”、名称为“app_name”的资源。
             
             ohos.global.resource.ResourceManager resManager = this.getResourceManager();
             String result = resManager.getElement(**ResourceTable.String_app_name**).getString();

       * 示例二：在Java文件中，引用color.json文件中类型为“Color”、名称为“red”的资源。
             
             ohos.global.resource.ResourceManager resManager = this.getResourceManager();
             int color = resManager.getElement(**ResourceTable.Color_red**).getColor();

     * XML文件引用资源文件的格式：**$_type_ _:__name_** 。特别地，如果引用的是系统资源，则采用：**$ohos:_type_ _:__name_** 。

在XML文件中，引用string.json文件中类型为“String”、名称为“app_name”的资源，示例如下：
           
           <?xml version="1.0" encoding="utf-8"?>
           <DirectionalLayout xmlns:ohos="http://schemas.huawei.com/res/ohos"
               ohos:width="match_parent"
               ohos:height="match_parent"
               ohos:orientation="vertical">
               <Text ohos:text="**$string:app_name** "/>
           </DirectionalLayout>

**rawfile目录中的资源文件** ：通过指定文件路径和文件名称来引用。

在Java文件中，引用一个路径为“resources/rawfile/”、名称为“example.js”的资源文件，示例如下：
    
    ohos.global.resource.ResourceManager resManager = this.getResourceManager();
    ohos.global.resource.RawFileEntry rawFileEntry = resManager.getRawFileEntry("resources/rawfile/example.js"); 

#### 系统资源文件

目前支持的部分系统资源文件详见表1。

**表1** 系统资源文件说明系统资源名称 | 含义 | 类型  
---|---|---  
**ic_app** | 表示HarmonyOS应用的默认图标。 | 媒体  
**request_location_reminder_title** | 表示“请求使用设备定位功能”的提示标题。 | 字符串  
**request_location_reminder_content** | 表示“请求使用设备定位功能”的提示内容，即：请在下拉快捷栏打开"位置信息"开关。 | 字符串  
  
#### 颜色模式的定义

应用可以在config.json的module字段下定义“colorMode”字段，“colorMode”字段用来定义应用自身的颜色模式，值可以是“dark”，“light”，“auto”（默认值）。示例：
    
    "colorMode": "light"

当应用的颜色模式值是“dark”时，无论系统当前颜色模式是什么，应用始终会按照深色模式选取资源；同理，当应用的颜色模式值是“light”时，无论系统当前颜色模式是什么，应用始终会按照浅色模式选取资源；当应用的颜色模式值是“auto”时，应用会跟随系统的颜色模式值选取资源。应用可以在代码中通过如下方式获取应用当前的颜色模式：
    
    int colorMode = Configuration.colorMode;

#### 为Element资源文件添加注释或特殊标识

Element目录下的不同种类元素的资源均采用JSON文件表示，资源的名称“name”和取值“value”是每一条资源的必备字段。

     * 如果需要为某一条资源备注信息，以便于资源的理解和使用，可以通过comment字段添加注释。
     * 如果value字段中的部分文本不需要被翻译人员处理，也不会被显示在应用界面上，可以通过特殊结构来标识无需翻译的内容。

#### [h2]通过comment字段添加注释

通过comment字段，可以为JSON文件的资源添加注释。示例如下：
    
    {
        "string":[
            {
                "name":"message_arrive",
                "value":"We will arrive at %s",
                "comment":"Transfer Arrival Time. %s is time,like 5:00 am"
            }
        ]
    }

#### [h2]通过特殊结构来标识无需翻译的内容

在string、strarray、plural这三类资源中，可以通过特殊标识来处理无需被翻译的内容。例如，一个字符串资源的Value取值为“We will arrive at %s”，其中的变量“%s”在翻译过程中希望保持不变。有以下两种方式处理：

     * 方式一：在value字段中添加{}。示例如下：
           
           {
               "string":[
                   {
                       "name":"message_arrive",
                       "value":["We will arrive at",{
                           "id":"time",
                           "example":"5:00 am",
                           "value":"%s"
                       }
                       ]
                   }
               ]
           }

     * 方式二：添加<xliff:g></xliff:g>标记对。示例如下：
           
           {
               "string":[
                   {
                       "name":"message_arrive",
                       "value":"We will arrive at <xliff:g id='time' example='5:00 am'>%s</xliff:g>"
                   }
               ]
           }

#### boolean.json示例
    
    {
        "boolean":[
            {
                "name":"boolean_1",
                "value":true
            },
            {
                "name":"boolean_ref",
                "value":"$boolean:boolean_1"
            }
        ]
    }
    

#### color.json示例
    
    {
        "color":[
            {
                "name":"red",
                "value":"#ff0000"
            },
            {
                "name":"red_ref",
                "value":"$color:red"
            }
        ]
    }
    

#### float.json示例
    
    {
        "float":[
            {
                "name":"float_1",
                "value":"30.6"
            },
            {
                "name":"float_ref",
                "value":"$float:float_1"
            },
            {
                "name":"float_px",
                "value":"100px"
            }
        ]
    }
    

#### intarray.json示例
    
    {
        "intarray":[
            {
                "name":"intarray_1",
                "value":[
                    100,
                    200,
                    "$integer:integer_1"
                ]
            }
        ]
    }
    

#### integer.json示例
    
    {
        "integer":[
            {
                "name":"integer_1",
                "value":100
            },
            {
                "name":"integer_ref",
                "value":"$integer:integer_1"
            }
        ]
    }
    

#### pattern.json示例
    
    {
        "pattern":[
            {
                "name":"base",
                "value":[
                    {
                        "name":"width",
                        "value":"100vp"
                    },
                    {
                        "name":"height",
                        "value":"100vp"
                    },
                    {
                        "name":"size",
                        "value":"25px"
                    }
                ]
            },
            {
               "name":"child",
               "parent":"base",
               "value":[
                   {
                       "name":"noTitile",
                       "value":"Yes"
                   }
               ]
            }
        ]
    }
    

#### plural.json示例
    
    {
        "plural":[
            {
                "name":"eat_apple",
                "value":[
                    {
                        "quantity":"one",
                        "value":"%d apple"
                    },
                    {
                        "quantity":"other",
                        "value":"%d apples"
                    }
                ]
            }
        ]
    }
    

#### strarray.json示例
    
    {
        "strarray":[
           {
               "name":"size",
               "value":[
                   {
                       "value":"small"
                   },
                   {
                       "value":"$string:hello"
                   },
                   {
                       "value":"large"
                   },
                   {
                       "value":"extra large"
                   }
                ]
           }
        ]
    }
    

#### string.json示例
    
    {
        "string":[
            {
                "name":"hello",
                "value":"hello base"
            },
            {
                "name":"app_name",
                "value":"my application"
            },
            {
                "name":"app_name_ref",
                "value":"$string:app_name"
            },
            {
                "name":"app_sys_ref",
                "value":"$ohos:string:request_location_reminder_title"
            }
        ]
    }
