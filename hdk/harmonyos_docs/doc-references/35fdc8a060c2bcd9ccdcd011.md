---
name: document/cn/doc-references/task-0000001054120067
title: Task
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/task-0000001054120067
source: portal
---

Task [java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.agp.render.render3d.Task
    
    public abstract class Task
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Abstract class used to implement tasks that can be executed synchronously with rendering.**Since:** 3Nested Class Summary Modifier and Type | Class | Description  
---|---|---  
static class  | [Task.State](https://developer.harmonyos.com/cn/docs/documentation/doc-references/task_state-0000001054678740) |  Indicates the running state of a task.   
Constructor Summary Constructor | Description  
---|---  
[Task](https://developer.harmonyos.com/cn/docs/documentation/doc-references/task-0000001054120067#ZH-CN_TOPIC_0000001054120067__Task--)​() |     
Method Summary Modifier and Type | Method | Description  
---|---|---  
[Task.State](https://developer.harmonyos.com/cn/docs/documentation/doc-references/task_state-0000001054678740) | [getState](https://developer.harmonyos.com/cn/docs/documentation/doc-references/task-0000001054120067#ZH-CN_TOPIC_0000001054120067__getState--)​() |  Obtains the task state.   
void | [initialize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/task-0000001054120067#ZH-CN_TOPIC_0000001054120067__initialize--)​() |  Initializes a task.   
abstract void | [onCancel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/task-0000001054120067#ZH-CN_TOPIC_0000001054120067__onCancel--)​() |  Called back when a task is cancelled.   
abstract boolean | [onExecute](https://developer.harmonyos.com/cn/docs/documentation/doc-references/task-0000001054120067#ZH-CN_TOPIC_0000001054120067__onExecute--)​() |  Called back when executing a task.   
abstract void | [onFinish](https://developer.harmonyos.com/cn/docs/documentation/doc-references/task-0000001054120067#ZH-CN_TOPIC_0000001054120067__onFinish--)​() |  Called back when a task is finished.   
abstract void | [onInitialize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/task-0000001054120067#ZH-CN_TOPIC_0000001054120067__onInitialize--)​() |  Called back when initializing a task.   
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
Constructor Detail [h2]Task public Task​() Method Detail [h2]getState public final [Task.State](https://developer.harmonyos.com/cn/docs/documentation/doc-references/task_state-0000001054678740) getState​() Obtains the task state. **Returns:** Returns the task state. [h2]initialize public final void initialize​() Initializes a task. This method calls [onInitialize()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/task-0000001054120067#ZH-CN_TOPIC_0000001054120067__onInitialize--) to initialize a task and set the task state to [State#RUNNING](https://developer.harmonyos.com/cn/docs/documentation/doc-references/task_state-0000001054678740#ZH-CN_TOPIC_0000001054678740__RUNNING). [h2]onInitialize public abstract void onInitialize​() Called back when initializing a task.  [h2]onExecute public abstract boolean onExecute​() Called back when executing a task. This method will not be called again if the task is already executed. **Returns:** Returns true if the task is executed; returns false otherwise. [h2]onFinish public abstract void onFinish​() Called back when a task is finished.  [h2]onCancel public abstract void onCancel​() Called back when a task is cancelled. 
