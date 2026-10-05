---
name: document/cn/DevicePartner-References/integration-methodology-0000002659075067
title: 集成方式
uri: https://developer.huawei.com/consumer/cn/doc/DevicePartner-References/integration-methodology-0000002659075067
source: portal
---

# 集成方式  
  
插件必需集成pluginbridge.har，通过har包提供的通用API，插件就可以调用宿主（智慧生活）的接口。在接口调用上，智慧生活采用了通用化设计，使用通用接口控制，相关的接口命令统一封装为 JSON ，作为参数传递。同理，智慧生活调用插件的接口时，插件需要将公开的接口导出，提供给智慧生活har，智慧生活集成har进行调用。

插件须集成 pluginbridge.har 包，借助其提供的通用 API 实现与宿主（智慧生活）的交互。在接口调用机制上，智慧生活采用通用化设计，所有接口命令均统一封装为 JSON 格式作为参数传递。反之，当智慧生活调用插件接口时，插件需将公开接口导出至智慧生活 HAR 包，以便宿主进行集成与调用。

智慧生活通用接口定义
    
    
    PluginApi.callHost(paramJsonString:string,callback:PluginCallback)

回调接口：
    
    
    interface PluginCallback { 
       /** 
         * @param code 1000：成功 ，其他：失败
         * @param data 接口返回的数据
         * @param msg
         */
        onResult: (code: number, data: Object, msg?: string) => void; 
    }

#### 集成调用方式

在插件module的oh-package.json5里面：
    
    
    "dynamicDependencies": {
      "@ohos/pluginbridge": "file:../vendor/pluginbridge.har"
    }

调用形式（paramJsonString）：
    
    
    {
        "functionName":"setDeviceName",
        "deviceId":"bf91*****12d1",
        "param1":"xxx",
        "param2":"xxx",
        ...
    }

插件调用智慧生活接口示例：
    
    
    let param: Record<string, string | number | object> = {}
    param['functionName'] = '"setDeviceName"'
    param['deviceId'] = 'xxxx'
    param['param1'] = 'xxx'
    param['param2'] = 'xxx'
    let paramJsonString = JSON.stringify(param)
    import("@ohos/pluginbridge").then((data) => {
          data.PluginApi.callHost(paramJsonString, {
            onResult: (code: number, data: Object, msg?: string | undefined): void => {
                 //code 错误码
                 // data 返回内容
                 // msg 错误描述                  
            }
          })
     })

其中：

参数 | 类型 | 描述  
---|---|---  
functionName | string | 接口名称，上面示例中"setDeviceName"，为设置设备名称接口。  
deviceId | string | 华为设备id，为setDeviceName接口所需参数。  
  
回调接口：
    
    
    interface PluginCallback { 
       /** 
         * @param code 1000：成功 ，其他：失败
         * @param data 接口返回的数据
         * @param msg
         */
        onResult: (code: number, data: Object, msg?: string) => void; 
    }
