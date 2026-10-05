---
name: document/cn/doc-references/doubleadder-0000001054838574
title: DoubleAdder
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/doubleadder-0000001054838574
source: portal
---

# DoubleAdder

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.lang.Number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458) |---|---java.util.concurrent.atomic.DoubleAdder
    
    public class DoubleAdder
    extends [Number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458)
    implements [Serializable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/serializable-0000001054358416)  
  
---  
One or more variables that together maintain an initially zero double sum. When updates (method [add(double)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__add-double-)) are contended across threads, the set of variables may grow dynamically to reduce contention. Method [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__sum--) (or, equivalently [doubleValue()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__doubleValue--)) returns the current total combined across the variables maintaining the sum. The order of accumulation within or across threads is not guaranteed. Thus, this class may not be applicable if numerical stability is required, especially when combining values of substantially different orders of magnitude. 

This class is usually preferable to alternatives when multiple threads update a common value that is used for purposes such as summary statistics that are frequently updated but less frequently read. 

This class extends [Number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458), but does not define methods such as equals, hashCode and compareTo because instances are expected to be mutated, and so are not useful as collection keys.

**Since:**

1.8

#### Constructor Summary

Constructor | Description  
---|---  
[DoubleAdder](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__DoubleAdder--)​() |  Creates a new adder with initial sum of zero.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [add](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__add-double-)​(double x) |  Adds the given value.   
double | [doubleValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__doubleValue--)​() |  Equivalent to [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__sum--).   
float | [floatValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__floatValue--)​() |  Returns the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__sum--) as a float after a narrowing primitive conversion.   
int | [intValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__intValue--)​() |  Returns the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__sum--) as an int after a narrowing primitive conversion.   
long | [longValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__longValue--)​() |  Returns the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__sum--) as a long after a narrowing primitive conversion.   
void | [reset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__reset--)​() |  Resets variables maintaining the sum to zero.   
double | [sum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__sum--)​() |  Returns the current sum.   
double | [sumThenReset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__sumThenReset--)​() |  Equivalent in effect to [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__sum--) followed by [reset()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__reset--).   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__toString--)​() |  Returns the String representation of the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__sum--).   
  
Methods inherited from class java.lang.[Number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458)  
---  
[byteValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458#ZH-CN_TOPIC_0000001054518458__byteValue--), [shortValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458#ZH-CN_TOPIC_0000001054518458__shortValue--)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]DoubleAdder

public DoubleAdder​()

Creates a new adder with initial sum of zero. 

#### Method Detail

#### [h2]add

public void add​(double x)

Adds the given value. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
x  |  the value to add  
  
#### [h2]sum

public double sum​()

Returns the current sum. The returned value is NOT an atomic snapshot; invocation in the absence of concurrent updates returns an accurate result, but concurrent updates that occur while the sum is being calculated might not be incorporated. Also, because floating-point arithmetic is not strictly associative, the returned result need not be identical to the value that would be obtained in a sequential series of updates to a single variable. 

**Returns:**

the sum

#### [h2]reset

public void reset​()

Resets variables maintaining the sum to zero. This method may be a useful alternative to creating a new adder, but is only effective if there are no concurrent updates. Because this method is intrinsically racy, it should only be used when it is known that no threads are concurrently updating. 

#### [h2]sumThenReset

public double sumThenReset​()

Equivalent in effect to [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__sum--) followed by [reset()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__reset--). This method may apply for example during quiescent points between multithreaded computations. If there are updates concurrent with this method, the returned value is not guaranteed to be the final value occurring before the reset. 

**Returns:**

the sum

#### [h2]toString

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) toString​()

Returns the String representation of the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__sum--). 

**Overrides:**

[toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

the String representation of the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__sum--)

#### [h2]doubleValue

public double doubleValue​()

Equivalent to [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__sum--). 

**Specified by:**

[doubleValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458#ZH-CN_TOPIC_0000001054518458__doubleValue--) in class [Number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458)

**Returns:**

the sum

#### [h2]longValue

public long longValue​()

Returns the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__sum--) as a long after a narrowing primitive conversion. 

**Specified by:**

[longValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458#ZH-CN_TOPIC_0000001054518458__longValue--) in class [Number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458)

**Returns:**

the numeric value represented by this object after conversion to type long.

#### [h2]intValue

public int intValue​()

Returns the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__sum--) as an int after a narrowing primitive conversion. 

**Specified by:**

[intValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458#ZH-CN_TOPIC_0000001054518458__intValue--) in class [Number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458)

**Returns:**

the numeric value represented by this object after conversion to type int.

#### [h2]floatValue

public float floatValue​()

Returns the [sum()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/doubleadder-0000001054838574#ZH-CN_TOPIC_0000001054838574__sum--) as a float after a narrowing primitive conversion. 

**Specified by:**

[floatValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458#ZH-CN_TOPIC_0000001054518458__floatValue--) in class [Number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/number-0000001054518458)

**Returns:**

the numeric value represented by this object after conversion to type float.
