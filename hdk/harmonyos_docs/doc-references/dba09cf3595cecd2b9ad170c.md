---
name: document/cn/doc-references/tolongbifunction-0000001054439917
title: ToLongBiFunction
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/tolongbifunction-0000001054439917
source: portal
---

ToLongBiFunction
    
    [@FunctionalInterface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/functionalinterface-0000001054358446)
    public interface ToLongBiFunction<T,U>  
  
---  
Represents a function that accepts two arguments and produces a long-valued result. This is the long-producing primitive specialization for [BiFunction](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bifunction-0000001054358612). This is a [functional interface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/overview-0000001054238623) whose functional method is [applyAsLong(java.lang.Object,java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tolongbifunction-0000001054439917#ZH-CN_TOPIC_0000001054439917__applyAsLong-T-U-). **Since:** 1.8**See Also:** [BiFunction](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bifunction-0000001054358612)Method Summary Modifier and Type | Method | Description  
---|---|---  
long | [applyAsLong](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tolongbifunction-0000001054439917#ZH-CN_TOPIC_0000001054439917__applyAsLong-T-U-)​([T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tolongbifunction-0000001054439917) t, [U](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tolongbifunction-0000001054439917) u) |  Applies this function to the given arguments.   
Method Detail [h2]applyAsLong long applyAsLong​([T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tolongbifunction-0000001054439917) t, [U](https://developer.harmonyos.com/cn/docs/documentation/doc-references/tolongbifunction-0000001054439917) u) Applies this function to the given arguments. **Parameters:** Parameter Name | Parameter Description  
---|---  
t  |  the first function argument  
u  |  the second function argument  
**Returns:** the function result
