---
name: document/cn/doc-references/testrunner-0000001054238685
title: TestRunner
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/testrunner-0000001054238685
source: portal
---

TestRunner [java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.aafwk.ability.delegation.TestRunner
    
    public abstract class TestRunner
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Base class for the test framework.  If you want to implement your own unit test framework, you must inherit this class and overrides all its methods. **Since:** 3Constructor Summary Constructor | Description  
---|---  
[TestRunner](https://developer.harmonyos.com/cn/docs/documentation/doc-references/testrunner-0000001054238685#ZH-CN_TOPIC_0000001054238685__TestRunner--)​() |     
Method Summary Modifier and Type | Method | Description  
---|---|---  
abstract boolean | [prepare](https://developer.harmonyos.com/cn/docs/documentation/doc-references/testrunner-0000001054238685#ZH-CN_TOPIC_0000001054238685__prepare--)​() |  Prepares the unit testing environment for running test cases.   
abstract void | [run](https://developer.harmonyos.com/cn/docs/documentation/doc-references/testrunner-0000001054238685#ZH-CN_TOPIC_0000001054238685__run--)​() |  Runs all test cases.   
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
Constructor Detail [h2]TestRunner public TestRunner​() Method Detail [h2]prepare public abstract boolean prepare​() Prepares the unit testing environment for running test cases. **Returns:** Returns true if the environment is successfully initialized; returns false otherwise. **Since:** 3 [h2]run public abstract void run​() Runs all test cases. **Since:** 3
