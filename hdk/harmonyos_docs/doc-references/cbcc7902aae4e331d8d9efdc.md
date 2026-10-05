---
name: document/cn/doc-references/stream_builder-0000001054678644
title: Stream.Builder
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/stream_builder-0000001054678644
source: portal
---

Stream.Builder
    
    public static interface Stream.Builder<T>
    extends [Consumer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/consumer-0000001054199898)<T>  
  
---  
A mutable builder for a Stream. This allows the creation of a Stream by generating elements individually and adding them to the Builder (without the copying overhead that comes from using an ArrayList as a temporary buffer.) A stream builder has a lifecycle, which starts in a building phase, during which elements can be added, and then transitions to a built phase, after which elements may not be added. The built phase begins when the [build()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream_builder-0000001054678644#ZH-CN_TOPIC_0000001054678644__build--) method is called, which creates an ordered Stream whose elements are the elements that were added to the stream builder, in the order they were added. **Since:** 1.8**See Also:** [Stream.builder()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream-0000001054518656#ZH-CN_TOPIC_0000001054518656__builder--)Method Summary Modifier and Type | Method | Description  
---|---|---  
void | [accept](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream_builder-0000001054678644#ZH-CN_TOPIC_0000001054678644__accept-T-)​([T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream_builder-0000001054678644) t) |  Adds an element to the stream being built.   
default [Stream.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream_builder-0000001054678644)<[T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream_builder-0000001054678644)> | [add](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream_builder-0000001054678644#ZH-CN_TOPIC_0000001054678644__add-T-)​([T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream_builder-0000001054678644) t) |  Adds an element to the stream being built.   
[Stream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream-0000001054518656)<[T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream_builder-0000001054678644)> | [build](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream_builder-0000001054678644#ZH-CN_TOPIC_0000001054678644__build--)​() |  Builds the stream, transitioning this builder to the built state.   
Methods inherited from interface java.util.function.[Consumer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/consumer-0000001054199898)  
---  
[andThen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/consumer-0000001054199898#ZH-CN_TOPIC_0000001054199898__andThen-java_util_function_Consumer-)  
Method Detail [h2]accept void accept​([T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream_builder-0000001054678644) t) Adds an element to the stream being built. **Specified by:** [accept](https://developer.harmonyos.com/cn/docs/documentation/doc-references/consumer-0000001054199898#ZH-CN_TOPIC_0000001054199898__accept-T-) in interface [Consumer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/consumer-0000001054199898)<[T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream_builder-0000001054678644)> **Parameters:** Parameter Name | Parameter Description  
---|---  
t  |  the input argument  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalStateException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalstateexception-0000001054678452) |  if the builder has already transitioned to the built state  
[h2]add default [Stream.Builder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream_builder-0000001054678644)<[T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream_builder-0000001054678644)> add​([T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream_builder-0000001054678644) t) Adds an element to the stream being built. **Parameters:** Parameter Name | Parameter Description  
---|---  
t  |  the element to add  
**Returns:** this builder **Throws:** Throw Name | Throw Description  
---|---  
[IllegalStateException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalstateexception-0000001054678452) |  if the builder has already transitioned to the built state  
[h2]build [Stream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream-0000001054518656)<[T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream_builder-0000001054678644)> build​() Builds the stream, transitioning this builder to the built state. An IllegalStateException is thrown if there are further attempts to operate on the builder after it has entered the built state. **Returns:** the built stream **Throws:** Throw Name | Throw Description  
---|---  
[IllegalStateException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalstateexception-0000001054678452) |  if the builder has already transitioned to the built state
