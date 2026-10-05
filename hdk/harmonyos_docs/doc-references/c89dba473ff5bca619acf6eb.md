---
name: document/cn/doc-references/threadpoolexecutor_discardpolicy-0000001054238615
title: ThreadPoolExecutor.DiscardPolicy
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/threadpoolexecutor_discardpolicy-0000001054238615
source: portal
---

ThreadPoolExecutor.DiscardPolicy [java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---java.util.concurrent.ThreadPoolExecutor.DiscardPolicy  
      
    public static class ThreadPoolExecutor.DiscardPolicy
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)
    implements [RejectedExecutionHandler](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rejectedexecutionhandler-0000001054358596)  
  
---  
A handler for rejected tasks that silently discards the rejected task.Constructor Summary Constructor | Description  
---|---  
[DiscardPolicy](https://developer.harmonyos.com/cn/docs/documentation/doc-references/threadpoolexecutor_discardpolicy-0000001054238615#ZH-CN_TOPIC_0000001054238615__DiscardPolicy--)​() |  Creates a DiscardPolicy.   
Method Summary Modifier and Type | Method | Description  
---|---|---  
void | [rejectedExecution](https://developer.harmonyos.com/cn/docs/documentation/doc-references/threadpoolexecutor_discardpolicy-0000001054238615#ZH-CN_TOPIC_0000001054238615__rejectedExecution-java_lang_Runnable-java_util_concurrent_ThreadPoolExecutor-)​([Runnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/runnable-0000001054838396) r, [ThreadPoolExecutor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/threadpoolexecutor-0000001054518628) e) |  Does nothing, which has the effect of discarding task r.   
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
Constructor Detail [h2]DiscardPolicy public DiscardPolicy​() Creates a DiscardPolicy.  Method Detail [h2]rejectedExecution public void rejectedExecution​([Runnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/runnable-0000001054838396) r, [ThreadPoolExecutor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/threadpoolexecutor-0000001054518628) e) Does nothing, which has the effect of discarding task r. **Specified by:** [rejectedExecution](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rejectedexecutionhandler-0000001054358596#ZH-CN_TOPIC_0000001054358596__rejectedExecution-java_lang_Runnable-java_util_concurrent_ThreadPoolExecutor-) in interface [RejectedExecutionHandler](https://developer.harmonyos.com/cn/docs/documentation/doc-references/rejectedexecutionhandler-0000001054358596) **Parameters:** Parameter Name | Parameter Description  
---|---  
r  |  the runnable task requested to be executed  
e  |  the executor attempting to execute this task
