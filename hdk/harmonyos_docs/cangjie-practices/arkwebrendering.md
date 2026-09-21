---
name: cangjie-practices/arkwebrendering
title: ArkWeb渲染框架适配
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-practices/arkwebrendering
nodePath: 实践 / ArkWeb渲染框架适配
---

# ArkWeb渲染框架适配

#### 概述

Hybrid应用开发是介于Web应用和系统应用两者之间的应用开发技术，兼具“系统应用良好交互体验”的优势和“Web应用跨平台开发”的优势。其主要原理是由Native通过JSBridge通道提供统一的API，然后用HTML/CSS实现界面，JS来写业务逻辑，能够调用系统API，最终的页面在WebView中显示。

#### Hybrid应用HarmonyOS化方案

#### [h2]整体架构

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/yMOB2fkwTHizFgjBNtz7IQ/zh-cn_image_0000002639520978.png?HW-CC-KV=V1&HW-CC-Date=20260921T111119Z&HW-CC-Expire=86400&HW-CC-Sign=8648B0E416668C9CAA4B9A8025ED1B88E0014A29713E5A93DEC60E2D47F249CF)

  1. 仓颉进程：由仓颉提供运行时，具备调用系统API的能力。应用启动从仓颉进程进入，完成EntryAbility的初始化并创建HarmonyOS应用页面。仓颉进程可以动态或者静态创建Webview运行时环境，并加载HTML/css/js资源文件。
  2. Webview进程：默认支持标准W3C API，对ArkTS侧资源的访问有限制。Webview渲染能力主要由Web组件提供。用户可以通过Web组件的属性配置是否开启同层渲染能力、是否允许执行JavaScript脚本等。
  3. JSBridge：上述两种进程的通讯机制，允许数据双向流动。Webview进程通过JSBridge通道访问拓展API。



#### [h2]方案设计

Hybrid应用HarmonyOS化方案主要集中在双端通信JSBridge实现、拓展接口实现，以及基于同层渲染的原生组件实现。JSBridge是前端与ArkTS进行双向通信的桥梁。通过JSBridge，前端应用能访问到ArkTS侧实现的拓展接口，实现更丰富的业务功能。视图层方面，可以使用系统提供的同层渲染能力，把部分性能要求比较高的前端组件改成ArkTS实现，以达到更好的体验效果。下图蓝色背景的方框图展示了上述三点所处的框架位置：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/8uVqPxPDQS-Wt2a1GDNWWg/zh-cn_image_0000002669680985.png?HW-CC-KV=V1&HW-CC-Date=20260921T111119Z&HW-CC-Expire=86400&HW-CC-Sign=5CBC0FBDF2147F1213BC324565C9A3CB75A413882D03E4C97ABDC559A2A08F2F)

#### 业务实现中的关键点

Hybrid应用HarmonyOS化方案主要围绕双端通信进行开发。双端通信：JS侧使用仓颉的通道，是HarmonyOS化的基石；

#### [h2]双端通信

JSBridge扮演Webview进程与ArkUI主进程沟通的桥梁，是一种双向通信的机制。HarmonyOS系统提供Web组件以及ohos.webview等ArkWeb API来进行Web开发。可以通过javaScriptProxy代理的方式实现JSBridge。

  1. WebMessagePort是一种比较基础的消息发送以及接收机制，支持的消息类型为string和ArrayBuffer，具体业务消息内容的封装和解析需要从零设计，存在上手难、工作量大的特点。
  2. JavaScriptProxy代理机制注入ArkUI主进程对象（如命名为native）到Webview中，在Webview的window上生成对应代理对象，业务可以直接调用该代理对象的方法，相关的操作将作用到ArkUI主进程的native对象。例如贪吃蛇游戏中，JS侧通知仓颉游戏相关状态。


  * 在仓颉侧，调用[registerJavaScriptProxy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-webview#func-registerjavascriptproxyarraystring---string-string-arraystring)方法注册代理对象。例如以下代码片段通过调用registerJavaScriptProxy方法，注册了名称为Cjobj的仓颉方法数组，该数组包含gameover,getscore两个仓颉方法。
        
        @Builder
        func WebPlayground() {
            Web(src: @rawfile("index.html"), controller: webController)
                .width(80.percent)
                .height(40.percent)
                .onPageBegin ({
                    evt => if (!isloaded) {
                        webController.registerJavaScriptProxy(
                            [
                                {
                                    s: String =>
                                    gameState = GameState.GameOver
                                    return ""
                                },
                                {
                                    s: String =>
                                    scoreNow = Int64.parse(s)
                                    return ""
                                }
                            ],
                            "CjObj",
                            ["gameover", "getscore"]
                        )
                        isloaded = true
                        webController.reload()
                    }
                })
        }

  * 在JS侧，windows对象可以通过CjObj名称访问调用已注册的gameover、getscore方法。
        
        // ...
        // JS侧判断得分后，调用仓颉注册的函数
        CjObj.getscore(score.toString())
        // ...
        // JS侧判断游戏结束，调用仓颉注册的函数
         CjObj.gameover()
        // ...

  * 在仓颉侧也可以直接调用[webController.runJavaScript](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-webview#func-runjavascriptstring-asynccallbackstring)方法执行一段JS代码。
        
        @Builder
         func ControlBtn(msg: String, jsscript: String, suc_cb: (String) -> Unit, err_cb: (Int32) -> Unit) {
             Button(msg)
                 .onClick ({
                     evt => webController.runJavaScript(jsscript, JsCallback(suc_cb, err_cb))
                 })
                 .height(200.px)
                 .backgroundColor(Color(0, 0, 0))
         }
        
         func JsCallback(suc_cb: (String) -> Unit, err_cb: (Int32) -> Unit): AsyncCallback<String> {
             return {
                 errorCode: ?BusinessException, data: ?String => match (errorCode) {
                     case Some(e) => err_cb(e.code)
                     case _ => match (data) {
                         case Some(value) => suc_cb(value)
                         case _ => suc_cb("undefined")
                     }
                 }
             }
         }




#### 示例代码

[ArkWeb渲染框架适配示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260728183050.94603987368972684991386722431513:20260922191119:2800:91E0F1E8A82AC127A98F2B703ED89F20FD8634BD5401A81F460359419E0B7C8C.zip?needInitFileName=true)
