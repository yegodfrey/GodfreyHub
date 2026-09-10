---
name: cangjie-references/cj-unittest_mock_package_overview
title: std.unittest.mock
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest.mock
---

# std.unittest.mock

#### 功能介绍

unittest.mock 包提供仓颉单元测试的**mock 框架** ，提供 API 用于创建和配置**mock 对象** （以及独立声明，例如顶层或静态函数和顶层或静态变量），这些 mock 对象与真实对象拥有签名一致的 API 。mock 测试技术支持隔离测试代码，测试用例使用 mock 对象编码，实现外部依赖消除。

**mock 框架** 具有以下特性：

  * 创建 mock 对象和 spy 对象：测试时无需修改生产代码。配置独立声明（例如顶层函数或变量、静态函数或变量）时不需要此步骤。
  * 简单的[配置 API](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_basics#配置-api) ：可配置 mock/spy 对象（或独立声明）的行为。
  * 单元测试框架部分：无缝集成单元测试框架的其他特性，错误输出可读。
  * 自动验证配置行为：大多数情况下不需要多余的验证代码。
  * 提供[验证 API](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_verification)：用于测试系统内部的复杂交互。



用户使用场景包括：

  * 简化测试设置和代码。
  * 测试异常场景。
  * 用轻量级 mock 对象替换代价高的依赖，提高测试性能。
  * 验证测试复杂场景，如调用的顺序/数量。



用户可通过[快速入门](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_getting_started)写出第一个带 mock 的测试程序。同时文档对于一些[基础概念及用法](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_basics)做了说明并附有示例代码，另外，针对配置 API （[桩](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_stubs)）的高阶用法做了进一步说明。

#### API 列表

#### [h2]函数

函数名 | 功能  
---|---  
[mock<T>()](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_functions#func-mockt) | 创建类型 T 的 [mock object](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_basics#创建-mock-对象)， 这个对象默认情况下，所有的成员函数、属性或运算符重载函数没有任何具体实现。  
[mock<T>(Array<StubMode>)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_functions#func-mocktarraystubmode) | 创建类型 T 的 [mock object](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_basics#创建-mock-对象) ， 参数指定了[桩的模式](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_stubs#桩的模式)。  
[spy<T>(T)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_functions#func-spytt) | 创建类型 T 的 spy object ( mock object 的扩展，对象的成员拥有默认实现的“骨架”对象)。 这个对象包装了所传入的对象，并且默认情况下成员函数、属性或运算符重载函数实现为对这个传入的实例对象的对应成员函数、属性或运算符重载函数的调用。  
  
#### [h2]接口

接口名 | 功能  
---|---  
[ValueListener<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_interfaces#interface-valuelistenert) | 此接口提供了多个成员函数以支持“监听”传入给桩签名的参数。  
  
#### [h2]类

类名 | 功能  
---|---  
[ActionSelector](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-actionselector) | 此抽象类提供了为成员函数指定一个[操作 API](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_basics#操作-api) ，并允许链式调用的方法。  
[AnyMatcher](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-anymatcher) | 任意参数匹配器，即桩签名允许任意的参数。  
[ArgumentMatcher](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-argumentmatcher) | 参数匹配器抽象类，该类与其子类可作为桩签名的入参类型。  
[CardinalitySelector<A>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-cardinalityselectora) | 此接口提供了可定义桩签名的最近一次行为的执行次数的 API 。  
[ConfigureMock](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-configuremock) | 配置 mock object 。  
[Continuation<A>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-continuationa) | 此类提供了可继续定义桩签名的行为的 API 。  
[GetterActionSelector<TRet>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-getteractionselectortret) | 此类提供了为属性 Getter 函数指定一个[操作 API](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_basics#操作-api) ，并允许链式调用的方法。  
[Matchers](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-matchers) | 该类提供生成[匹配器](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_basics#参数匹配器)的静态函数。匹配器对象仅可通过此处的静态函数生成。匹配器可在[桩链](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_basics#桩链)中使用。  
[MethodActionSelector<TRet>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-methodactionselectortret) | 此类提供了为成员函数指定一个[操作 API](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_basics#操作-api) ，并允许链式调用。  
[MockFramework](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-mockframework) | 提供用例执行所需的框架准备与结束回收阶段的函数。  
[NoneMatcher](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-nonematcher) | 参数值为 None 的匹配器。  
[OrderedVerifier](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-orderedverifier) | 此类型用于收集 “验证语句”， 可在 ordered 函数中动态传入验证行为。  
[SetterActionSelector<TArg>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-setteractionselectortarg) | 此类提供了为属性 Setter 函数指定一个[操作 API](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_basics#操作-api) ，并允许链式调用的方法。  
[SyntheticField<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-syntheticfieldt) | 合成字段。  
[TypedMatcher<T>](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-typedmatchert) | 参数类型匹配器。  
[UnorderedVerifier](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-unorderedverifier) | 此类型用于收集 “验证语句”， 可在 unordered 函数中动态传入验证行为。  
[Verify](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-verify) | Verify 提供了一系列静态方法来支持定义所需验证的动作，如 that 、 ordered 以及 unordered 。  
[VerifyStatement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes#class-verifystatement) | 此类型表示对“桩签名”在验证范围内的单个验证语句（即上文中的“验证语句”），提供了成员函数指定“桩签名”的执行次数。  
  
#### [h2]枚举

枚举名 | 功能  
---|---  
[Exhaustiveness](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_enums#enum-exhaustiveness) | 此枚举类型用于指定 unordered 函数的验证模式，包含两种模式。  
[MockSessionKind](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_enums#enum-mocksessionkind) | 控制允许在 MockSession 使用的[桩](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_basics#配置-api)的类型。  
[StubMode](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_enums#enum-stubmode) | 控制[桩的模式](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_stubs#桩的模式)。  
  
#### [h2]异常类

异常名 | 功能  
---|---  
[ExpectationFailedException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_exceptions#class-expectationfailedexception) | 在测试执行期间违反了 mock 配置期间设置的一个或多个期望。  
[MockFrameworkException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_exceptions#class-mockframeworkexception) | 框架异常信息，用户使用 API 不满足框架要求时，抛出该异常。  
[MockFrameworkInternalError](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_exceptions#class-mockframeworkinternalerror) | 框架异常信息，用户不应期望该异常被抛出。  
[PrettyException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_exceptions#class-prettyexception) | 支持 PrettyPrintable 的异常类型，可以较好地打印异常信息。  
[UnhandledCallException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_exceptions#class-unhandledcallexception) | 提供的[桩](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_basics#配置-api)均未处理该调用。  
[UnstubbedInvocationException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_exceptions#class-unstubbedinvocationexception) | 未提供与此调用匹配的[桩](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-mock_framework_basics#配置-api)。  
[VerificationFailedException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_exceptions#class-verificationfailedexception) | 验证失败时，框架所抛出的异常。  
  
  * **[函数](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_functions)**  

  * **[接口](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_interfaces)**  

  * **[类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_classes)**  

  * **[枚举](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_enums)**  

  * **[异常类](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_mock_package_exceptions)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest-mock-samples)**  



