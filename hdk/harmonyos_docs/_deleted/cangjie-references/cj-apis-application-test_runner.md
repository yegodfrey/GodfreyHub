---
name: cangjie-references/cj-apis-application-test_runner
title: ohos.application.test_runner
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-application-test_runner
nodePath: 应用框架 / Ability Kit（程序框架服务） / 仓颉API / ohos.application.test_runner
---

# ohos.application.test_runner

test_runner模块提供了框架测试的能力。包括准备单元测试环境和运行测试用例。

如果您想实现自己的单元测试框架，您必须继承这个类并覆盖它的所有方法。

#### 导入模块
    
    
    import kit.AbilityKit.*

#### 权限列表

ohos.permission.DISTRIBUTED_DATASYNC

ohos.permission.PREPARE_APP_TERMINATE

ohos.permission.PRIVACY_WINDOW

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### class TestRunner
    
    
    public open class TestRunner {}

**功能：** 提供了框架测试的能力。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

#### [h2]func onPrepare()
    
    
    public open func onPrepare(): Unit

**功能：** 为运行测试用例准备单元测试环境。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**示例：**
    
    
    import kit.TestKit.*
    
    let TESTRUNNER_REGISTER_RESULT = TestRunner.registerCreator("test", {=> MyTestRunner()})
    
    class MyTestRunner <: TestRunner {
        public override func onPrepare(): Unit {
        }
    }

#### [h2]func onRun()
    
    
    public open func onRun(): Unit

**功能：** 运行测试用例。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**起始版本：** 22

**示例：**
    
    
    import kit.TestKit.*
    
    let TESTRUNNER_REGISTER_RESULT = TestRunner.registerCreator("test", {=> MyTestRunner()})
    
    class MyTestRunner <: TestRunner {
        public override func onRun(): Unit {
        }
    }
