---
name: cangjie-faqs/08-custom-dialog
title: 仓颉如何创建自定义弹窗
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/08-custom-dialog
nodePath: FAQ / UI开发 / 仓颉如何创建自定义弹窗
---

# 仓颉如何创建自定义弹窗

仓颉语言通过CustomDialog组件创建自定义弹窗，支持自定义弹窗内容和交互逻辑。

#### 基本用法
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @CustomDialog
    public class MyDialogDemo {
        public var controller: Option<CustomDialogController> = Option.None
        public var message: String = "Default message"
    
        public func build() {
            Column {
                Text(this.message)
                    .fontSize(18)
                    .padding(20)
                Row {
                    Button("Cancel").onClick({
                        evt => if (let Some(v) <- this.controller) {
                            v.closeDialog()
                        }
                    })
                    Button("Confirm").onClick({
                        evt => if (let Some(v) <- this.controller) {
                            v.closeDialog()
                        }
                    })
                }.justifyContent(FlexAlign.Center)
            }.padding(20)
        }
    }

#### 在组件中使用
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    
    @Component
    public class DialogDemoPage {
        public var dialogController: CustomDialogController = CustomDialogController(
            CustomDialogControllerOptions(
                builder: MyDialogDemo(),
                autoCancel: true,
                alignment: DialogAlignment.Center
            )
        )
    
        public func build() {
            Column {
                Button("Show Dialog").onClick({
                    evt => this
                        .dialogController
                        .openDialog()
                })
            }.padding(20)
        }
    }

**UI效果** ：点击"Show Dialog"按钮弹出自定义弹窗，显示"Default message"文本，包含Cancel和Confirm按钮，点击任一按钮关闭弹窗。

#### 弹窗传参

可以通过属性向弹窗传递数据：
    
    
    import kit.ArkUI.*
    import ohos.arkui.state_macro_manage.*
    import kit.PerformanceAnalysisKit.Hilog
    
    @CustomDialog
    public class ConfirmDialogDemo {
        public var controller: Option<CustomDialogController> = Option.None
        public var title: String = ""
        public var onConfirm: () -> Unit = {=>}
    
        public func build() {
            Column {
                Text(this.title)
                    .fontSize(20)
                    .fontWeight(FontWeight.Bold)
                    .padding(15)
                Row {
                    Button("Cancel").onClick({
                        evt => if (let Some(v) <- this.controller) {
                            v.closeDialog()
                        }
                    })
                    Button("Confirm").onClick(
                        {
                            evt =>
                                this.onConfirm()
                                if (let Some(v) <- this.controller) {
                                    v.closeDialog()
                                }
                        }
                    )
                }.justifyContent(FlexAlign.SpaceEvenly)
            }.padding(20)
        }
    }
    
    @Component
    public class ParamDialogDemo {
        public var dialogController: CustomDialogController = CustomDialogController(
            CustomDialogControllerOptions(
                builder: ConfirmDialogDemo(
                    title: "Delete Item",
                    onConfirm: {
                        => Hilog.info(0, "Cangjie Test", "Item deleted confirmed")
                    }
                ),
                autoCancel: false
            )
        )
    
        public func build() {
            Column {
                Button("Delete").onClick({
                    evt => this
                        .dialogController
                        .openDialog()
                })
            }.padding(20)
        }
    }

**UI效果** ：点击"Delete"按钮弹出确认弹窗，显示"Delete Item"标题，点击Confirm按钮执行回调并输出日志"Item deleted confirmed"，点击Cancel关闭弹窗。

#### 弹窗位置设置

alignment值 | 弹窗位置  
---|---  
DialogAlignment.Center | 屏幕中央  
DialogAlignment.Top | 屏幕顶部  
DialogAlignment.Bottom | 屏幕底部  
... | ...  
  
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/-y13mk2wS0eHFx1xkvI3hQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120411Z&HW-CC-Expire=86400&HW-CC-Sign=31F09877DA97725E9A5D0C8885F63E1C37E29CA4E299544C914861D6ED652AFA)

  1. 自定义弹窗须使用@CustomDialog宏修饰。
  2. controller变量类型为Option<CustomDialogController>，使用模式匹配if (let Some(v) <\- this.controller)安全调用closeDialog()方法关闭弹窗。
  3. CustomDialogController构造函数使用CustomDialogControllerOptions配置参数。
  4. 通过openDialog()方法打开弹窗。
  5. autoCancel: true表示点击弹窗外部区域可关闭弹窗。



更多自定义弹窗的使用方法，详情请参见[CustomDialog](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-use-dialog)。
