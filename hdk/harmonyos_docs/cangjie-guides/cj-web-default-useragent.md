---
name: cangjie-guides/cj-web-default-useragent
title: User-Agent开发指导
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-web-default-useragent
nodePath: 应用框架 / ArkWeb（方舟Web） / 设置基本属性和事件 / User-Agent开发指导
---

# User-Agent开发指导

User-Agent（简称UA）是一个特殊的字符串，包含设备类型、操作系统及版本等关键信息。在Web开发中，这个字符串使服务器能够识别请求的来源设备及其特性，从而根据这些信息提供定制化的内容和服务。如果页面无法正确识别UA，可能会导致多种异常情况。例如，为移动设备优化的页面布局可能会在桌面设备上显示错乱，反之亦然。此外，某些特定的浏览器功能或CSS样式可能仅在特定的浏览器版本中受支持，如果页面无法根据UA字符串做出正确的判断，就可能导致渲染问题或逻辑错误。

#### 默认User-Agent结构

  * 默认User-Agent定义
        
        Mozilla/5.0 ({DeviceType}; {OSName} {OSVersion}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/{ChromeCompatibleVersion}.0.0.0 Safari/537.36  ArkWeb/{ArkWeb VersionCode} {DeviceCompat} {扩展区}

  * 举例说明
        
        Mozilla/5.0 (Phone; OpenHarmony 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36  ArkWeb/4.1.6.1 Mobile

  * 字段说明

字段 | 含义  
---|---  
DeviceType |  当前的设备类型。 取值范围： \- Phone：手机 \- Tablet：平板设备  
OSName |  基础操作系统名称。 默认取值：OpenHarmony  
OSVersion |  基础操作系统版本，两位数字，M.S。 通过系统参数const.ohos.fullname解析版本号得到，取版本号部分M.S前两位。 默认取值：例如5.0  
ChromeCompatibleVersion |  兼容Chrome主版本的版本号，从114版本开始演进。 默认取值：114  
ArkWeb |  HarmonyOS版本Web内核名称。 默认取值：ArkWeb  
ArkWeb VersionCode |  ArkWeb版本号，格式a.b.c.d。 默认取值：例如4.1.6.1  
DeviceCompat |  前向兼容字段。 默认取值：Mobile  
扩展区 |  三方应用可以扩展的字段。 三方应用使用ArkWeb组件时，可以做UA扩展，例如加入APP相关信息标识。  
  



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/p70vtQcXRDORzxLlLiCpWA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090123Z&HW-CC-Expire=86400&HW-CC-Sign=D95F8B68A154A22808938DA4D3F43B7B94B443D8473748BA14B36E595BE07CB0)

  * 当前默认User-Agent的ArkWeb字段前有两个空格。
  * 当前通过User-Agent中是否含有"Mobile"字段来判断是否开启前端HTML页面中meta标签的viewport属性。当User-Agent中不含有"Mobile"字段时，meta标签中viewport属性默认关闭。
  * 建议通过HarmonyOS关键字识别是否是HarmonyOS设备，同时可以通过DeviceType识别设备类型用于不同设备上的页面显示（ArkWeb关键字表示设备使用的web内核，HarmonyOS关键字表示设备使用的操作系统，因此推荐通过HarmonyOS关键字识别是否是HarmonyOS设备）。



#### 自定义User-Agent结构

在下面的示例中，通过调用[getUserAgent()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-webview#func-getuseragent)接口获取当前默认的用户代理（User-Agent）字符串。这一接口提供的默认User-Agent信息为开发者提供了基础，使开发者能够基于这个默认信息进行定制或扩展。
    
    
    // index.cj
    import kit.ArkUI.LengthProp
    import kit.ArkUI.Column
    import kit.ArkUI.Row
    import kit.ArkUI.Text
    import kit.ArkUI.CustomView
    import kit.ArkUI.CJEntry
    import kit.ArkUI.loadNativeView
    import kit.ArkUI.FontWeight
    import kit.ArkUI.SubscriberManager
    import kit.ArkUI.ObservedProperty
    import kit.ArkUI.LocalStorage
    import ohos.arkui.state_macro_manage.Entry
    import ohos.arkui.state_macro_manage.Component
    import ohos.arkui.state_macro_manage.State
    import kit.ArkWeb.*
    import ohos.arkui.component.button.Button
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    import kit.ArkUI.Web
    
    @Entry
    @Component
    class EntryView {
        let webController = WebviewController()
    
        func build() {
            Column {
                Button("getUserAgent").onClick ({
                    evt => try {
                        let userAgent = webController.getUserAgent()
                        Hilog.info(0, "CangjieTest", "userAgent: ${userAgent}")
                    } catch (e: BusinessException) {
                        Hilog.error(0, "CangjieTest", "getUserAgent ErrorCode: ${e.code},  Message: ${e.message}")
                    }
                })
                Web(src: 'www.example.com', controller: webController)
            }
        }
    }

在下面的示例中，通过[getCustomUserAgent()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-webview#func-getcustomuseragent)接口获取自定义用户代理。
    
    
    // index.cj
    import kit.ArkUI.LengthProp
    import kit.ArkUI.Column
    import kit.ArkUI.Row
    import kit.ArkUI.Text
    import kit.ArkUI.CustomView
    import kit.ArkUI.CJEntry
    import kit.ArkUI.loadNativeView
    import kit.ArkUI.FontWeight
    import kit.ArkUI.SubscriberManager
    import kit.ArkUI.ObservedProperty
    import kit.ArkUI.LocalStorage
    import ohos.arkui.state_macro_manage.Entry
    import ohos.arkui.state_macro_manage.Component
    import ohos.arkui.state_macro_manage.State
    import kit.ArkWeb.*
    import ohos.arkui.component.button.Button
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    import kit.ArkUI.Web
    import kit.ArkWeb.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    @Entry
    @Component
    class EntryView {
        let webController = WebviewController()
    
        func build() {
            Column {
                Button("getUserAgent").onClick ({
                    evt => try {
                        let customUserAgent = webController.getCustomUserAgent()
                        Hilog.info(0, "CangjieTest", "customUserAgent: ${customUserAgent}")
                    } catch (e: BusinessException) {
                        Hilog.error(0, "CangjieTest", "getCustomUserAgent ErrorCode: ${e.code},  Message: ${e.message}")
                    }
                })
                Web(src: 'www.example.com', controller: webController)
            }
        }
    }

#### 常见问题

#### [h2]如何通过User-Agent来识别HarmonyOS操作系统中不同设备

HarmonyOS设备的识别主要通过User-Agent中的系统、系统版本和设备类型三个维度来判断。建议同时检查系统、系统版本和设备类型，以确保更准确的设备识别。

  1. 系统识别

通过User-Agent中的{OSName}字段识别HarmonyOS系统。
         
         const isHarmonyOS = () => /HarmonyOS/i.test(navigator.userAgent);

  2. 系统版本识别

通过User-Agent中的{OSName}和{OSVersion}字段识别HarmonyOS系统及系统版本。格式为：OpenHarmony + 版本号。
         
         const matches = navigator.userAgent.match(/OpenHarmony (\d+\.?\d*)/);
         matches?.length && Number(matches[1]) >= 5;

  3. 设备类型识别

通过DeviceType字段来识别不同设备类型。
         
         // 检测是否为手机设备
         const isPhone = () => /Phone/i.test(navigator.userAgent);
         
         // 检测是否为平板设备
         const isTablet = () => /Tablet/i.test(navigator.userAgent);




#### [h2]如何模拟HarmonyOS操作系统的User-Agent进行前端调试

在Windows/MacOS/Linux等操作系统中，可以通过Chrome/Edge/Firefox等浏览器DevTools提供的User-Agent复写能力，模拟HarmonyOS User-Agent。
