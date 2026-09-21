---
name: cangjie-guides/cj-web-pdf-preview
title: 使用Web组件的PDF文档预览能力
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-web-pdf-preview
nodePath: 应用框架 / ArkWeb（方舟Web） / 处理网页内容 / 使用Web组件的PDF文档预览能力
---

# 使用Web组件的PDF文档预览能力

Web组件提供了在网页中预览PDF的能力。应用可以通过Web组件的[src](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-web-web)参数接口中传入PDF文件，来加载PDF文档。根据PDF文档来源不同，可以分为三种常用场景：加载网络PDF文档、加载本地PDF文档、加载应用内resource资源PDF文档。

PDF文档预览加载过程中，若涉及网络文档获取，请在module.json5中配置网络访问权限，添加方法请参见[在配置文件中声明权限](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-declare-permissions)。
    
    
    "requestPermissions":[
      {
        "name" : "ohos.permission.INTERNET"
      }
    ]

在下面的示例中，Web组件创建时指定默认加载的网络PDF文档 www.example.com/test.pdf，该地址为示例，使用时需替换为真实可访问地址:
    
    
    // index.cj
    import ohos.arkui.state_macro_manage.*
    import ohos.web.webview.WebviewController
    import kit.ArkUI.Web
    
    @Entry
    @Component
    class EntryView {
        let webController = WebviewController()
    
        func build() {
            Column {
                /*
                * src设置方式：
                * 方式一 加载网络PDF文档："https://www.example.com/test.pdf"
                * 方式二 加载本地应用沙箱内PDF文档： abilityContext.filesDirectory + "/test.pdf"
                * 方式三 应用内resource资源PDF文档： "resource://rawfile/test.pdf"
                * 方式四 应用内resource资源PDF文档： @rawfile(“test.pdf”)
                */
                Web(src: "https://www.example.com/test.pdf", controller: this.webController)
                    .domStorageAccess(true)
            }
        }
    }

上述示例中，由于PDF预览页面对于侧边导航栏是否展开会根据用户操作使用window.localStorage进行持久化记录，所以需开启文档对象模型存储[domStorageAccess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-web-web#func-domstorageaccessbool)权限:
    
    
    Web().domStorageAccess(true)

在Web组件创建时，指定默认加载的PDF文档。[Web组件](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-web-web)的第一个参数变量src不能通过状态变量（例如：@State）动态更改地址。

同时包含三种PDF文档加载预览场景:

  * 预览加载网络PDF文件。
        
        Web(src: "https://www.example.com/test.pdf", controller: this.webController)
            .domStorageAccess(true)

  * 预览加载应用沙箱内PDF文件，需要开启应用中文件系统的访问[fileAccess](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-web-web#func-fileaccessbool)权限。

    1. 获取context
           
           // main_ability.cj
           import kit.AbilityKit.UIAbilityContext
           import kit.PerformanceAnalysisKit.Hilog
           
           func loggerInfo(str: String) {
               Hilog.info(0, "CangjieTest", str)
           }
           
           var globalAbilityContext: Option<UIAbilityContext> = Option<UIAbilityContext>.None
           
           class MainAbility <: UIAbility {
               public init() {
                   super()
                   registerSelf()
               }
           
               public override func onCreate(want: Want, launchParam: LaunchParam): Unit {
                   Hilog.info(1, "info", "MainAbility OnCreated.${want.abilityName}")
           
                   // 获取context
                   globalAbilityContext = Option<UIAbilityContext>.Some(this.context)
           
                   match (launchParam.launchReason) {
                       case LaunchReason.StartAbility => Hilog.info(1, "info", "StartAbility")
                       case _ => ()
                   }
               }
           
               // ...
           }

    2. 开启应用中文件系统的访问
           
           Web(src: globalAbilityContext.getOrThrow().filesDir + "/test.pdf", controller: this.webController)
               .domStorageAccess(true)
               .fileAccess(true)

  * 预览加载应用内PDF资源文件，有两种使用形式。@rawfile("test.pdf")形式无法指定下面介绍的预览参数。

为实现预览加载应用内PDF资源文件功能，需要导入如下包：
        
        import kit.LocalizationKit.*

实现预览加载应用内PDF资源文件功能的核心代码是：
        
        // 格式一
        Web(src: @rawfile("test.pdf"), controller: this.webController)
            .domStorageAccess(true)
        
        // 格式二
        Web(src: "resource://rawfile/test.pdf", controller: this.webController)
            .domStorageAccess(true)




此外，通过配置PDF文件预览参数，可以控制打开预览时页面状态。

当前支持如下参数:

语法 | 描述  
---|---  
nameddest=destination | 指定PDF文档中的命名目标。  
page=pagenum | 使用整数指定文档中的页码，文档第一页的pagenum值为1。  
zoom=scale zoom=scale,left,top | 使用浮点或整数值设置缩放和滚动系数。 例如：缩放值100表示缩放值为100%。 向左和向上滚动值位于坐标系中，0,0 表示可见页面的左上角，无论文档如何旋转。  
toolbar=1 | 0 | 打开或关闭顶部工具栏。  
navpanes=1 | 0 | 打开或关闭侧边导航窗格。  
  
URL示例:
    
    
    https://example.com/test.pdf#Chapter6
    https://example.com/test.pdf#page=3
    https://example.com/test.pdf#zoom=50
    https://example.com/test.pdf#page=3&zoom=200,250,100
    https://example.com/test.pdf#toolbar=0
    https://example.com/test.pdf#navpanes=0
