---
name: document/cn/doc-references/uniontype-0000001123694546
title: UnionType
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/uniontype-0000001123694546
source: portal
---

UnionType  
      
    public interface UnionType
    extends [TypeMirror](https://developer.harmonyos.com/cn/docs/documentation/doc-references/typemirror-0000001123534712)  
  
---  
Represents a union type. As of the [RELEASE_7](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sourceversion-0000001170214357#ZH-CN_TOPIC_0000001170214357__RELEASE_7) source version, union types can appear as the type of a multi-catch exception parameter.**Since:** 1.7Method Summary Modifier and Type | Method | Description  
---|---|---  
[List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<? extends [TypeMirror](https://developer.harmonyos.com/cn/docs/documentation/doc-references/typemirror-0000001123534712)> | [getAlternatives](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uniontype-0000001123694546#ZH-CN_TOPIC_0000001123694546__getAlternatives--)​() |  Return the alternatives comprising this union type.   
Methods inherited from interface javax.lang.model.[AnnotatedConstruct](https://developer.harmonyos.com/cn/docs/documentation/doc-references/annotatedconstruct-0000001123534692)  
---  
[getAnnotation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/annotatedconstruct-0000001123534692#ZH-CN_TOPIC_0000001123534692__getAnnotation-java_lang_Class-), [getAnnotationMirrors](https://developer.harmonyos.com/cn/docs/documentation/doc-references/annotatedconstruct-0000001123534692#ZH-CN_TOPIC_0000001123534692__getAnnotationMirrors--), [getAnnotationsByType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/annotatedconstruct-0000001123534692#ZH-CN_TOPIC_0000001123534692__getAnnotationsByType-java_lang_Class-)  
Methods inherited from interface javax.lang.model.type.[TypeMirror](https://developer.harmonyos.com/cn/docs/documentation/doc-references/typemirror-0000001123534712)  
---  
[accept](https://developer.harmonyos.com/cn/docs/documentation/doc-references/typemirror-0000001123534712#ZH-CN_TOPIC_0000001123534712__accept-javax_lang_model_type_TypeVisitor-P-), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/typemirror-0000001123534712#ZH-CN_TOPIC_0000001123534712__equals-java_lang_Object-), [getKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/typemirror-0000001123534712#ZH-CN_TOPIC_0000001123534712__getKind--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/typemirror-0000001123534712#ZH-CN_TOPIC_0000001123534712__hashCode--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/typemirror-0000001123534712#ZH-CN_TOPIC_0000001123534712__toString--)  
Method Detail [h2]getAlternatives [List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<? extends [TypeMirror](https://developer.harmonyos.com/cn/docs/documentation/doc-references/typemirror-0000001123534712)> getAlternatives​() Return the alternatives comprising this union type. **Returns:** the alternatives comprising this union type.
