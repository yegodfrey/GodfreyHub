---
name: document/cn/doc-references/longbinaryoperator-0000001054678597
title: LongBinaryOperator
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/longbinaryoperator-0000001054678597
source: portal
---

# LongBinaryOperator
    
    [@FunctionalInterface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/functionalinterface-0000001054358446)
    public interface LongBinaryOperator  
  
---  
Represents an operation upon two long-valued operands and producing a long-valued result. This is the primitive type specialization of [BinaryOperator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/binaryoperator-0000001054119953) for long. 

This is a [functional interface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/overview-0000001054238623) whose functional method is [applyAsLong(long,long)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longbinaryoperator-0000001054678597#ZH-CN_TOPIC_0000001054678597__applyAsLong-long-long-).

**Since:**

1.8

**See Also:**

[BinaryOperator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/binaryoperator-0000001054119953), [LongUnaryOperator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longunaryoperator-0000001054518642)

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
long | [applyAsLong](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longbinaryoperator-0000001054678597#ZH-CN_TOPIC_0000001054678597__applyAsLong-long-long-)​(long left, long right) |  Applies this operator to the given operands.   
  
#### Method Detail

#### [h2]applyAsLong

long applyAsLong​(long left, long right)

Applies this operator to the given operands. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
left  |  the first operand  
right  |  the second operand  
  
**Returns:**

the operator result
