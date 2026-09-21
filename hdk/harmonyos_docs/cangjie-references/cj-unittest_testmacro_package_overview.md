---
name: cangjie-references/cj-unittest_testmacro_package_overview
title: std.unittest.testmacro
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.unittest.testmacro
---

# std.unittest.testmacro

#### 功能介绍

unittest.testmacro 为单元测试框架提供了用户所需的宏。

#### API 列表

#### [h2]宏

宏名 | 功能  
---|---  
[AfterAll](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#afterall-宏) | 声明测试类中的函数为[测试生命周期](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_basics#测试生命周期)函数。被该宏修饰的函数在所有测试用例之后运行一次。  
[AfterEach](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#aftereach-宏) | 声明测试类中的函数为[测试生命周期](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_basics#测试生命周期)函数。被该宏修饰的函数在每个测试用例之后运行一次。  
[Assert](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#assert-宏) | 声明 Assert 断言，测试函数内部使用，断言失败停止用例。  
[AssertThrows](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#assertthrows-宏) | 声明[预期异常的断言](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_basics#预期异常的断言)，测试函数内部使用，断言失败停止用例。  
[BeforeAll](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#beforeall-宏) | 声明测试类中的函数为[测试生命周期](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_basics#测试生命周期)函数。被该宏修饰的函数在所有测试用例之前运行一次。  
[BeforeEach](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#beforeeach-宏) | 声明测试类中的函数为[测试生命周期](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_basics#测试生命周期)函数。被该宏修饰的函数在每个测试用例之前运行一次��  
[Bench](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#bench-宏) | 宏用于标记要执行多次的函数并计算该函数的预期执行时间。  
[Configure](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#configure-宏) | 为测试类或测试函数提供配置参数。它可以放置在测试类或测试函数上。  
[CustomAssertion](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#customassertion-宏) | @CustomAssertion 将函数指定为用户自定义断言。  
[Expect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#expect-宏) | 声明 Expect 断言，测试函数内部使用，断言失败继续执行用例。  
[ExpectThrows](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#expectthrows-宏) | 声明[预期异常的断言](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_basics#预期异常的断言)，测试函数内部使用，断言失败继续执行用例。  
[Fail](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#fail-宏) | 声明[预期失败的断言](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_basics#失败断言)，测试函数内部使用，断言失败停止用例。  
[FailExpect](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#failexpect-宏) | 声明[预期失败的断言](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_basics#失败断言)，测试函数内部使用，断言失败继续执行用例。  
[Measure](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#measure-宏) | 用于为性能测试指定 [Measurement](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_package_interfaces#interface-measurement) 实例。只能应用于标有 @Test 宏的类或顶级函数的范围内。  
[Parallel](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#parallel-宏) | 可以修饰测试类。被 @Parallel 修饰的测试类中的测试用例可并行执行。  
[PowerAssert](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#powerassert-宏) | 检查传递的表达式是否为真，并显示包含传递表达式的中间值和异常的详细图表。  
[Skip](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#skip-宏) | 修饰已经被 @TestCase / @Bench 修饰的函数，使该测试用例被跳过。  
[Strategy](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#strategy-宏) | 用于组合、映射和重用各种数据策略。  
[Tag](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#tag-宏) | @Tag 宏可以应用于 @Test 类和 @Test 或 @TestCase 函数，提供测试实体的元信息。  
[Test](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#test-宏) | 宏应用于顶级函数或顶级类，使该函数或类转换为单元测试类。  
[TestBuilder](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#testbuilder-宏) | 声明一个[动态测试](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_dynamic_tests)套。  
[TestCase](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#testcase-宏) | 宏用于标记单元测试类内的函数，使这些函数成为单元测试的测试用例。  
[TestTemplate](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#testtemplate-宏) | @TestTemplate 宏可修饰抽象类，使得它成为一个测试模板。  
[Timeout](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#timeout-宏) | 指示测试应在指定时间后终止。它有助于测试可能运行很长时间或陷入无限循环的复杂算法。  
[Types](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#types-宏) | 宏为测试类或测试函数提供类型参数。它可以放置在测试类或测试函数上。  
[UnittestOption](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros#unittestoption-宏) | 该宏可用于注册自定义配置项。只有已注册的配置项才能与单元测试框架一起使用。  
  
  * **[宏](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unittest_testmacro_package_macros)**  



