---
name: document/cn/doc-references/repeatable-0000001054558463
title: Repeatable
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/repeatable-0000001054558463
source: portal
---

# Repeatable  
      
    [@Documented](https://developer.harmonyos.com/cn/docs/documentation/doc-references/documented-0000001054518474)
    [@Retention](https://developer.harmonyos.com/cn/docs/documentation/doc-references/retention-0000001054238461)([RUNTIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/retentionpolicy-0000001054678429#ZH-CN_TOPIC_0000001054678429__RUNTIME))
    [@Target](https://developer.harmonyos.com/cn/docs/documentation/doc-references/target-0000001054678431)([ANNOTATION_TYPE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/elementtype-0000001054238459#ZH-CN_TOPIC_0000001054238459__ANNOTATION_TYPE))
    public @interface Repeatable  
  
---  
The annotation type java.lang.annotation.Repeatable is used to indicate that the annotation type whose declaration it (meta-)annotates is repeatable. The value of @Repeatable indicates the containing annotation type for the repeatable annotation type.

**Since:**

1.8

#### Required Element Summary

Modifier and Type | Required Element | Description  
---|---|---  
[Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<? extends [Annotation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/annotation-0000001054358439)> | [value](https://developer.harmonyos.com/cn/docs/documentation/doc-references/repeatable-0000001054558463#ZH-CN_TOPIC_0000001054558463__value--) |  Indicates the containing annotation type for the repeatable annotation type.   
  
#### Element Detail

#### [h2]value

[Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<? extends [Annotation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/annotation-0000001054358439)> value

Indicates the containing annotation type for the repeatable annotation type. 

**Returns:**

the containing annotation type
