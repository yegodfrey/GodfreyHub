---
name: document/cn/doc-references/longadder-0000001054119949
title: LongAdder
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/longadder-0000001054119949
source: portal
---

# LongAdder

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.lang.Number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458) |---|---java.util.concurrent.atomic.LongAdder
    
    public class LongAdder
    extends [Number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458)
    implements [Serializable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/serializable-0000001054358416)  
  
---  
One or more variables that together maintain an initially zero long sum. When updates (method [add(long)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__add-long-)) are contended across threads, the set of variables may grow dynamically to reduce contention. Method [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__sum--) (or, equivalently, [longValue()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__longValue--)) returns the current total combined across the variables maintaining the sum. 

This class is usually preferable to [AtomicLong](https://developer.harmonyos.com/cn/docs/documentation/doc-references/atomiclong-0000001054119876) when multiple threads update a common sum that is used for purposes such as collecting statistics, not for fine-grained synchronization control. Under low update contention, the two classes have similar characteristics. But under high contention, expected throughput of this class is significantly higher, at the expense of higher space consumption. 

LongAdders can be used with a [ConcurrentHashMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/concurrenthashmap-0000001054838564) to maintain a scalable frequency map (a form of histogram or multiset). For example, to add a count to a ConcurrentHashMap<String,LongAdder> freqs, initializing if not already present, you can use freqs.computeIfAbsent(k -> new LongAdder()).increment(); 

This class extends [Number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458), but does not define methods such as equals, hashCode and compareTo because instances are expected to be mutated, and so are not useful as collection keys.

**Since:**

1.8

#### Constructor Summary

Constructor | Description  
---|---  
[LongAdder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__LongAdder--)​() |  Creates a new adder with initial sum of zero.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [add](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__add-long-)​(long x) |  Adds the given value.   
void | [decrement](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__decrement--)​() |  Equivalent to add(-1).   
double | [doubleValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__doubleValue--)​() |  Returns the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__sum--) as a double after a widening primitive conversion.   
float | [floatValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__floatValue--)​() |  Returns the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__sum--) as a float after a widening primitive conversion.   
void | [increment](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__increment--)​() |  Equivalent to add(1).   
int | [intValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__intValue--)​() |  Returns the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__sum--) as an int after a narrowing primitive conversion.   
long | [longValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__longValue--)​() |  Equivalent to [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__sum--).   
void | [reset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__reset--)​() |  Resets variables maintaining the sum to zero.   
long | [sum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__sum--)​() |  Returns the current sum.   
long | [sumThenReset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__sumThenReset--)​() |  Equivalent in effect to [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__sum--) followed by [reset()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__reset--).   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__toString--)​() |  Returns the String representation of the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__sum--).   
  
Methods inherited from class java.lang.[Number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458)  
---  
[byteValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458#ZH-CN_TOPIC_0000001054518458__byteValue--), [shortValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458#ZH-CN_TOPIC_0000001054518458__shortValue--)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]LongAdder

public LongAdder​()

Creates a new adder with initial sum of zero. 

#### Method Detail

#### [h2]add

public void add​(long x)

Adds the given value. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
x  |  the value to add  
  
#### [h2]increment

public void increment​()

Equivalent to add(1). 

#### [h2]decrement

public void decrement​()

Equivalent to add(-1). 

#### [h2]sum

public long sum​()

Returns the current sum. The returned value is NOT an atomic snapshot; invocation in the absence of concurrent updates returns an accurate result, but concurrent updates that occur while the sum is being calculated might not be incorporated. 

**Returns:**

the sum

#### [h2]reset

public void reset​()

Resets variables maintaining the sum to zero. This method may be a useful alternative to creating a new adder, but is only effective if there are no concurrent updates. Because this method is intrinsically racy, it should only be used when it is known that no threads are concurrently updating. 

#### [h2]sumThenReset

public long sumThenReset​()

Equivalent in effect to [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__sum--) followed by [reset()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__reset--). This method may apply for example during quiescent points between multithreaded computations. If there are updates concurrent with this method, the returned value is not guaranteed to be the final value occurring before the reset. 

**Returns:**

the sum

#### [h2]toString

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) toString​()

Returns the String representation of the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__sum--). 

**Overrides:**

[toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

the String representation of the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__sum--)

#### [h2]longValue

public long longValue​()

Equivalent to [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__sum--). 

**Specified by:**

[longValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458#ZH-CN_TOPIC_0000001054518458__longValue--) in class [Number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458)

**Returns:**

the sum

#### [h2]intValue

public int intValue​()

Returns the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__sum--) as an int after a narrowing primitive conversion. 

**Specified by:**

[intValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458#ZH-CN_TOPIC_0000001054518458__intValue--) in class [Number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458)

**Returns:**

the numeric value represented by this object after conversion to type int.

#### [h2]floatValue

public float floatValue​()

Returns the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__sum--) as a float after a widening primitive conversion. 

**Specified by:**

[floatValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458#ZH-CN_TOPIC_0000001054518458__floatValue--) in class [Number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458)

**Returns:**

the numeric value represented by this object after conversion to type float.

#### [h2]doubleValue

public double doubleValue​()

Returns the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/longadder-0000001054119949#ZH-CN_TOPIC_0000001054119949__sum--) as a double after a widening primitive conversion. 

**Specified by:**

[doubleValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458#ZH-CN_TOPIC_0000001054518458__doubleValue--) in class [Number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458)

**Returns:**

the numeric value represented by this object after conversion to type double.
