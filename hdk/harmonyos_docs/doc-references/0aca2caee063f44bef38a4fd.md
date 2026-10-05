---
name: document/cn/doc-references/methodhandles-0000001054358443
title: MethodHandles
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/methodhandles-0000001054358443
source: portal
---

# MethodHandles  
  
[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---java.lang.invoke.MethodHandles
    
    public class MethodHandles
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
This class consists exclusively of static methods that operate on or return method handles. They fall into several categories: 
    * Lookup methods which help create method handles for methods and fields. 
    * Combinator methods, which combine or transform pre-existing method handles into new ones. 
    * Other factory methods to create method handles that emulate other common JVM operations or control flow patterns. 

**Since:**

1.7

#### Nested Class Summary

Modifier and Type | Class | Description  
---|---|---  
static class  | [MethodHandles.Lookup](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465) |  A lookup object is a factory for creating method handles, when the creation requires access checking.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [arrayElementGetter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__arrayElementGetter-java_lang_Class-)​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> arrayClass) |  Produces a method handle giving read access to elements of an array.   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [arrayElementSetter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__arrayElementSetter-java_lang_Class-)​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> arrayClass) |  Produces a method handle giving write access to elements of an array.   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [catchException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__catchException-java_lang_invoke_MethodHandle-java_lang_Class-java_lang_invoke_MethodHandle-)​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, [Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<? extends [Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436)> exType, [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) handler) |  Makes a method handle which adapts a target method handle, by running it inside an exception handler.   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [collectArguments](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__collectArguments-java_lang_invoke_MethodHandle-int-java_lang_invoke_MethodHandle-)​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, int pos, [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) filter) |  Adapts a target method handle by pre-processing a sub-sequence of its arguments with a filter (another method handle).   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [constant](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__constant-java_lang_Class-java_lang_Object-)​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> type, [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) value) |  Produces a method handle of the requested return type which returns the given constant value every time it is invoked.   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [dropArguments](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__dropArguments-java_lang_invoke_MethodHandle-int-java_lang_Class___-)​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, int pos, [Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?>... valueTypes) |  Produces a method handle which will discard some dummy arguments before calling some other specified _target_ method handle.   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [dropArguments](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__dropArguments-java_lang_invoke_MethodHandle-int-java_util_List-)​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, int pos, [List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?>> valueTypes) |  Produces a method handle which will discard some dummy arguments before calling some other specified _target_ method handle.   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [exactInvoker](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__exactInvoker-java_lang_invoke_MethodType-)​([MethodType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodtype-0000001054238463) type) |  Produces a special invoker method handle which can be used to invoke any method handle of the given type, as if by [MethodHandle#invokeExact](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__invokeExact-java_lang_Object___-).   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [explicitCastArguments](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__explicitCastArguments-java_lang_invoke_MethodHandle-java_lang_invoke_MethodType-)​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, [MethodType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodtype-0000001054238463) newType) |  Produces a method handle which adapts the type of the given method handle to a new type by pairwise argument and return type conversion.   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [filterArguments](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__filterArguments-java_lang_invoke_MethodHandle-int-java_lang_invoke_MethodHandle___-)​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, int pos, [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464)... filters) |  Adapts a target method handle by pre-processing one or more of its arguments, each with its own unary filter function, and then calling the target with each pre-processed argument replaced by the result of its corresponding filter function.   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [filterReturnValue](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__filterReturnValue-java_lang_invoke_MethodHandle-java_lang_invoke_MethodHandle-)​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) filter) |  Adapts a target method handle by post-processing its return value (if any) with a filter (another method handle).   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [foldArguments](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__foldArguments-java_lang_invoke_MethodHandle-java_lang_invoke_MethodHandle-)​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) combiner) |  Adapts a target method handle by pre-processing some of its arguments, and then calling the target with the result of the pre-processing, inserted into the original sequence of arguments.   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [guardWithTest](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__guardWithTest-java_lang_invoke_MethodHandle-java_lang_invoke_MethodHandle-java_lang_invoke_MethodHandle-)​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) test, [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) fallback) |  Makes a method handle which adapts a target method handle, by guarding it with a test, a boolean-valued method handle.   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [identity](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__identity-java_lang_Class-)​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> type) |  Produces a method handle which returns its sole argument when invoked.   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [insertArguments](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__insertArguments-java_lang_invoke_MethodHandle-int-java_lang_Object___-)​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, int pos, [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)... values) |  Provides a target method handle with one or more bound arguments in advance of the method handle's invocation.   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [invoker](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__invoker-java_lang_invoke_MethodType-)​([MethodType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodtype-0000001054238463) type) |  Produces a special invoker method handle which can be used to invoke any method handle compatible with the given type, as if by [MethodHandle#invoke](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__invoke-java_lang_Object___-).   
static [MethodHandles.Lookup](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465) | [lookup](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__lookup--)​() |  Returns a [Lookup](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465) with full capabilities to emulate all supported bytecode behaviors of the caller.   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [permuteArguments](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__permuteArguments-java_lang_invoke_MethodHandle-java_lang_invoke_MethodType-int___-)​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, [MethodType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodtype-0000001054238463) newType, int... reorder) |  Produces a method handle which adapts the calling sequence of the given method handle to a new type, by reordering the arguments.   
static [MethodHandles.Lookup](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465) | [publicLookup](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__publicLookup--)​() |  Returns a [Lookup](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465) which is trusted minimally.   
static <T extends [Member](https://developer.harmonyos.com/cn/docs/documentation/doc-references/member-0000001054678468)>T | [reflectAs](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__reflectAs-java_lang_Class-java_lang_invoke_MethodHandle-)​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<T> expected, [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target) |  Performs an unchecked "crack" of a [direct method handle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__directmh).   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [spreadInvoker](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__spreadInvoker-java_lang_invoke_MethodType-int-)​([MethodType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodtype-0000001054238463) type, int leadingArgCount) |  Produces a method handle which will invoke any method handle of the given type, with a given number of trailing arguments replaced by a single trailing Object[] array.   
static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) | [throwException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__throwException-java_lang_Class-java_lang_Class-)​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> returnType, [Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<? extends [Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436)> exType) |  Produces a method handle which will throw exceptions of the given exType.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Method Detail

#### [h2]lookup

public static [MethodHandles.Lookup](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465) lookup​()

Returns a [Lookup](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465) with full capabilities to emulate all supported bytecode behaviors of the caller. These capabilities include [private access](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465#ZH-CN_TOPIC_0000001054558465__privacc) to the caller. Factory methods on the lookup object can create [direct method handles](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__directmh) for any member that the caller has access to via bytecodes, including protected and private fields and methods. This lookup object is a capability which may be delegated to trusted agents. Do not store it in place where untrusted code can access it. 

This method is caller sensitive, which means that it may return different values to different callers. 

For any given caller class C, the lookup object returned by this call has equivalent capabilities to any lookup object supplied by the JVM to the bootstrap method of an [invokedynamic instruction](https://developer.harmonyos.com/cn/docs/documentation/doc-references/overview-0000001054358450#ZH-CN_TOPIC_0000001054358450__indyinsn) executing in the same caller class C.

**Returns:**

a lookup object for the caller of this method, with private access

#### [h2]publicLookup

public static [MethodHandles.Lookup](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465) publicLookup​()

Returns a [Lookup](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465) which is trusted minimally. It can only be used to create method handles to publicly accessible fields and methods. 

As a matter of pure convention, the [Lookup#lookupClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465#ZH-CN_TOPIC_0000001054558465__lookupClass--) of this lookup object will be [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446). 

Discussion: The lookup class can be changed to any other class C using an expression of the form [Lookup#in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465#ZH-CN_TOPIC_0000001054558465__in-java_lang_Class-). Since all classes have equal access to public names, such a change would confer no new access rights. A public lookup object is always subject to [security manager checks](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465#ZH-CN_TOPIC_0000001054558465__secmgr). Also, it cannot access [caller sensitive methods](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465#ZH-CN_TOPIC_0000001054558465__callsens).

**Returns:**

a lookup object which is trusted minimally

#### [h2]reflectAs

public static <T extends [Member](https://developer.harmonyos.com/cn/docs/documentation/doc-references/member-0000001054678468)> T reflectAs​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<T> expected, [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target)

Performs an unchecked "crack" of a [direct method handle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__directmh). The result is as if the user had obtained a lookup object capable enough to crack the target method handle, called [Lookup.revealDirect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465#ZH-CN_TOPIC_0000001054558465__revealDirect-java_lang_invoke_MethodHandle-) on the target to obtain its symbolic reference, and then called [MethodHandleInfo.reflectAs](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__reflectAs-java_lang_Class-java_lang_invoke_MethodHandles_Lookup-) to resolve the symbolic reference to a member. 

If there is a security manager, its checkPermission method is called with a ReflectPermission("suppressAccessChecks") permission.

**Type Parameters:**

Type Parameter Name | Type Parameter Description  
---|---  
T  |  the desired type of the result, either [Member](https://developer.harmonyos.com/cn/docs/documentation/doc-references/member-0000001054678468) or a subtype  
  
**Parameters:**

Parameter Name | Parameter Description  
---|---  
target  |  a direct method handle to crack into symbolic reference components  
expected  |  a class object representing the desired result type T  
  
**Returns:**

a reference to the method, constructor, or field object

**Throws:**

Throw Name | Throw Description  
---|---  
[SecurityException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securityexception-0000001054678454) |  if the caller is not privileged to call setAccessible  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if either argument is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the target is not a direct method handle  
[ClassCastException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/classcastexception-0000001054678419) |  if the member is not of the expected type  
  
**Since:**

1.8

#### [h2]arrayElementGetter

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) arrayElementGetter​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> arrayClass) throws [IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724)

Produces a method handle giving read access to elements of an array. The type of the method handle will have a return type of the array's element type. Its first argument will be the array type, and the second will be int. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
arrayClass  |  an array type  
  
**Returns:**

a method handle which can load values from the given array type

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the argument is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if arrayClass is not an array type  
  
#### [h2]arrayElementSetter

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) arrayElementSetter​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> arrayClass) throws [IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724)

Produces a method handle giving write access to elements of an array. The type of the method handle will have a void return type. Its last argument will be the array's element type. The first and second arguments will be the array type and int. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
arrayClass  |  the class of an array  
  
**Returns:**

a method handle which can store values into the array type

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the argument is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if arrayClass is not an array type  
  
#### [h2]spreadInvoker

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) spreadInvoker​([MethodType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodtype-0000001054238463) type, int leadingArgCount)

Produces a method handle which will invoke any method handle of the given type, with a given number of trailing arguments replaced by a single trailing Object[] array. The resulting invoker will be a method handle with the following arguments: 
    * a single MethodHandle target 
    * zero or more leading values (counted by leadingArgCount) 
    * an Object[] array containing trailing arguments 

The invoker will invoke its target like a call to [MethodHandle#invoke](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__invoke-java_lang_Object___-) with the indicated type. That is, if the target is exactly of the given type, it will behave like invokeExact; otherwise it behave as if [MethodHandle#asType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__asType-java_lang_invoke_MethodType-) is used to convert the target to the required type. 

The type of the returned invoker will not be the given type, but rather will have all parameters except the first leadingArgCount replaced by a single array of type Object[], which will be the final parameter. 

Before invoking its target, the invoker will spread the final array, apply reference casts as necessary, and unbox and widen primitive arguments. If, when the invoker is called, the supplied array argument does not have the correct number of elements, the invoker will throw an [IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) instead of invoking the target. 

This method is equivalent to the following code (though it may be more efficient): 
    
    MethodHandle invoker = MethodHandles.invoker(type);
     int spreadArgCount = type.parameterCount() - leadingArgCount;
     invoker = invoker.asSpreader(Object[].class, spreadArgCount);
     return invoker;
     

This method throws no reflective or security exceptions. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
type  |  the desired target type  
leadingArgCount  |  number of fixed arguments, to be passed unchanged to the target  
  
**Returns:**

a method handle suitable for invoking any method handle of the given type

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if type is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if leadingArgCount is not in the range from 0 to type.parameterCount() inclusive, or if the resulting method handle's type would have [too many parameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__maxarity)  
  
#### [h2]exactInvoker

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) exactInvoker​([MethodType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodtype-0000001054238463) type)

Produces a special invoker method handle which can be used to invoke any method handle of the given type, as if by [MethodHandle#invokeExact](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__invokeExact-java_lang_Object___-). The resulting invoker will have a type which is exactly equal to the desired type, except that it will accept an additional leading argument of type MethodHandle. 

This method is equivalent to the following code (though it may be more efficient): publicLookup().findVirtual(MethodHandle.class, "invokeExact", type) 

Discussion: Invoker method handles can be useful when working with variable method handles of unknown types. For example, to emulate an invokeExact call to a variable method handle M, extract its type T, look up the invoker method X for T, and call the invoker method, as X.invoke(T, A...). (It would not work to call X.invokeExact, since the type T is unknown.) If spreading, collecting, or other argument transformations are required, they can be applied once to the invoker X and reused on many M method handle values, as long as they are compatible with the type of X. 

(Note: The invoker method is not available via the Core Reflection API. An attempt to call [java.lang.reflect.Method.invoke](https://developer.harmonyos.com/cn/docs/documentation/doc-references/method-0000001054518482#ZH-CN_TOPIC_0000001054518482__invoke-java_lang_Object-java_lang_Object___-) on the declared invokeExact or invoke method will raise an [UnsupportedOperationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedoperationexception-0000001054238453).) 

This method throws no reflective or security exceptions.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
type  |  the desired target type  
  
**Returns:**

a method handle suitable for invoking any method handle of the given type

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the resulting method handle's type would have [too many parameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__maxarity)  
  
#### [h2]invoker

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) invoker​([MethodType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodtype-0000001054238463) type)

Produces a special invoker method handle which can be used to invoke any method handle compatible with the given type, as if by [MethodHandle#invoke](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__invoke-java_lang_Object___-). The resulting invoker will have a type which is exactly equal to the desired type, except that it will accept an additional leading argument of type MethodHandle. 

Before invoking its target, if the target differs from the expected type, the invoker will apply reference casts as necessary and box, unbox, or widen primitive values, as if by [MethodHandle#asType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__asType-java_lang_invoke_MethodType-). Similarly, the return value will be converted as necessary. If the target is a [MethodHandle#asVarargsCollector](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__asVarargsCollector-java_lang_Class-), the required arity conversion will be made, again as if by [MethodHandle#asType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__asType-java_lang_invoke_MethodType-). 

This method is equivalent to the following code (though it may be more efficient): publicLookup().findVirtual(MethodHandle.class, "invoke", type) 

Discussion: A [MethodType#genericMethodType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodtype-0000001054238463#ZH-CN_TOPIC_0000001054238463__genericMethodType-int-boolean-) is one which mentions only Object arguments and return values. An invoker for such a type is capable of calling any method handle of the same arity as the general type. 

(Note: The invoker method is not available via the Core Reflection API. An attempt to call [java.lang.reflect.Method.invoke](https://developer.harmonyos.com/cn/docs/documentation/doc-references/method-0000001054518482#ZH-CN_TOPIC_0000001054518482__invoke-java_lang_Object-java_lang_Object___-) on the declared invokeExact or invoke method will raise an [UnsupportedOperationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedoperationexception-0000001054238453).) 

This method throws no reflective or security exceptions.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
type  |  the desired target type  
  
**Returns:**

a method handle suitable for invoking any method handle convertible to the given type

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the resulting method handle's type would have [too many parameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__maxarity)  
  
#### [h2]explicitCastArguments

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) explicitCastArguments​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, [MethodType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodtype-0000001054238463) newType)

Produces a method handle which adapts the type of the given method handle to a new type by pairwise argument and return type conversion. The original type and new type must have the same number of arguments. The resulting method handle is guaranteed to report a type which is equal to the desired new type. 

If the original type and new type are equal, returns target. 

The same conversions are allowed as for [MethodHandle#asType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__asType-java_lang_invoke_MethodType-), and some additional conversions are also applied if those conversions fail. Given types T0, T1, one of the following conversions is applied if possible, before or instead of any conversions done by asType: 

    * If T0 and T1 are references, and T1 is an interface type, then the value of type T0 is passed as a T1 without a cast. (This treatment of interfaces follows the usage of the bytecode verifier.) 
    * If T0 is boolean and T1 is another primitive, the boolean is converted to a byte value, 1 for true, 0 for false. (This treatment follows the usage of the bytecode verifier.) 
    * If T1 is boolean and T0 is another primitive, T0 is converted to byte via Java casting conversion (JLS 5.5), and the low order bit of the result is tested, as if by (x & 1) != 0. 
    * If T0 and T1 are primitives other than boolean, then a Java casting conversion (JLS 5.5) is applied. (Specifically, T0 will convert to T1 by widening and/or narrowing.) 
    * If T0 is a reference and T1 a primitive, an unboxing conversion will be applied at runtime, possibly followed by a Java casting conversion (JLS 5.5) on the primitive value, possibly followed by a conversion from byte to boolean by testing the low-order bit. 
    * If T0 is a reference and T1 a primitive, and if the reference is null at runtime, a zero value is introduced. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
target  |  the method handle to invoke after arguments are retyped  
newType  |  the expected type of the new method handle  
  
**Returns:**

a method handle which delegates to the target after performing any necessary argument conversions, and arranges for any necessary return value conversions

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if either argument is null  
[WrongMethodTypeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/wrongmethodtypeexception-0000001054119722) |  if the conversion cannot be made  
  
**See Also:**

[MethodHandle.asType(java.lang.invoke.MethodType)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__asType-java_lang_invoke_MethodType-)

#### [h2]permuteArguments

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) permuteArguments​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, [MethodType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodtype-0000001054238463) newType, int... reorder)

Produces a method handle which adapts the calling sequence of the given method handle to a new type, by reordering the arguments. The resulting method handle is guaranteed to report a type which is equal to the desired new type. 

The given array controls the reordering. Call #I the number of incoming parameters (the value newType.parameterCount(), and call #O the number of outgoing parameters (the value target.type().parameterCount()). Then the length of the reordering array must be #O, and each element must be a non-negative number less than #I. For every N less than #O, the N-th outgoing argument will be taken from the I-th incoming argument, where I is reorder[N]. 

No argument or return value conversions are applied. The type of each incoming argument, as determined by newType, must be identical to the type of the corresponding outgoing parameter or parameters in the target method handle. The return type of newType must be identical to the return type of the original target. 

The reordering array need not specify an actual permutation. An incoming argument will be duplicated if its index appears more than once in the array, and an incoming argument will be dropped if its index does not appear in the array. As in the case of [dropArguments](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__dropArguments-java_lang_invoke_MethodHandle-int-java_util_List-), incoming arguments which are not mentioned in the reordering array are may be any type, as determined only by newType. 
    
    import static java.lang.invoke.MethodHandles.*;
     import static java.lang.invoke.MethodType.*;
     ...
     MethodType intfn1 = methodType(int.class, int.class);
     MethodType intfn2 = methodType(int.class, int.class, int.class);
     MethodHandle sub = ... (int x, int y) -> (x-y) ...;
     assert(sub.type().equals(intfn2));
     MethodHandle sub1 = permuteArguments(sub, intfn2, 0, 1);
     MethodHandle rsub = permuteArguments(sub, intfn2, 1, 0);
     assert((int)rsub.invokeExact(1, 100) == 99);
     MethodHandle add = ... (int x, int y) -> (x+y) ...;
     assert(add.type().equals(intfn2));
     MethodHandle twice = permuteArguments(add, intfn1, 0, 0);
     assert(twice.type().equals(intfn1));
     assert((int)twice.invokeExact(21) == 42);
     

**Parameters:**

Parameter Name | Parameter Description  
---|---  
target  |  the method handle to invoke after arguments are reordered  
newType  |  the expected type of the new method handle  
reorder  |  an index array which controls the reordering  
  
**Returns:**

a method handle which delegates to the target after it drops unused arguments and moves and/or duplicates the other arguments

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if any argument is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the index array length is not equal to the arity of the target, or if any index array element not a valid index for a parameter of newType, or if two corresponding parameter types in target.type() and newType are not identical,  
  
#### [h2]constant

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) constant​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> type, [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) value)

Produces a method handle of the requested return type which returns the given constant value every time it is invoked. 

Before the method handle is returned, the passed-in value is converted to the requested type. If the requested type is primitive, widening primitive conversions are attempted, else reference conversions are attempted. 

The returned method handle is equivalent to identity(type).bindTo(value).

**Parameters:**

Parameter Name | Parameter Description  
---|---  
type  |  the return type of the desired method handle  
value  |  the value to return  
  
**Returns:**

a method handle of the given return type and no arguments, which always returns the given value

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the type argument is null  
[ClassCastException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/classcastexception-0000001054678419) |  if the value cannot be converted to the required return type  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the given type is void.class  
  
#### [h2]identity

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) identity​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> type)

Produces a method handle which returns its sole argument when invoked. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
type  |  the type of the sole parameter and return value of the desired method handle  
  
**Returns:**

a unary method handle which accepts and returns the given type

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the argument is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the given type is void.class  
  
#### [h2]insertArguments

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) insertArguments​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, int pos, [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)... values)

Provides a target method handle with one or more bound arguments in advance of the method handle's invocation. The formal parameters to the target corresponding to the bound arguments are called bound parameters. Returns a new method handle which saves away the bound arguments. When it is invoked, it receives arguments for any non-bound parameters, binds the saved arguments to their corresponding parameters, and calls the original target. 

The type of the new method handle will drop the types for the bound parameters from the original target type, since the new method handle will no longer require those arguments to be supplied by its callers. 

Each given argument object must match the corresponding bound parameter type. If a bound parameter type is a primitive, the argument object must be a wrapper, and will be unboxed to produce the primitive value. 

The pos argument selects which parameters are to be bound. It may range between zero and _N-L_ (inclusively), where _N_ is the arity of the target method handle and _L_ is the length of the values array.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
target  |  the method handle to invoke after the argument is inserted  
pos  |  where to insert the argument (zero for the first)  
values  |  the series of arguments to insert  
  
**Returns:**

a method handle which inserts an additional argument, before calling the original method handle

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the target or the values array is null  
  
**See Also:**

[MethodHandle.bindTo(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__bindTo-java_lang_Object-)

#### [h2]dropArguments

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) dropArguments​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, int pos, [List](https://developer.harmonyos.com/cn/docs/documentation/doc-references/list-0000001054119842)<[Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?>> valueTypes)

Produces a method handle which will discard some dummy arguments before calling some other specified _target_ method handle. The type of the new method handle will be the same as the target's type, except it will also include the dummy argument types, at some given position. 

The pos argument may range between zero and _N_ , where _N_ is the arity of the target. If pos is zero, the dummy arguments will precede the target's real arguments; if pos is _N_ they will come after. 

**Example:**
    
    import static java.lang.invoke.MethodHandles.*;
     import static java.lang.invoke.MethodType.*;
     ...
     MethodHandle cat = lookup().findVirtual(String.class,
      "concat", methodType(String.class, String.class));
     assertEquals("xy", (String) cat.invokeExact("x", "y"));
     MethodType bigType = cat.type().insertParameterTypes(0, int.class, String.class);
     MethodHandle d0 = dropArguments(cat, 0, bigType.parameterList().subList(0,2));
     assertEquals(bigType, d0.type());
     assertEquals("yz", (String) d0.invokeExact(123, "x", "y", "z"));
     

This method is also equivalent to the following code: 
    
    [dropArguments](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__dropArguments-java_lang_invoke_MethodHandle-int-java_lang_Class___-)(target, pos, valueTypes.toArray(new Class[0]))
     

**Parameters:**

Parameter Name | Parameter Description  
---|---  
target  |  the method handle to invoke after the arguments are dropped  
valueTypes  |  the type(s) of the argument(s) to drop  
pos  |  position of first argument to drop (zero for the leftmost)  
  
**Returns:**

a method handle which drops arguments of the given types, before calling the original method handle

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the target is null, or if the valueTypes list or any of its elements is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if any element of valueTypes is void.class, or if pos is negative or greater than the arity of the target, or if the new method handle's type would have too many parameters  
  
#### [h2]dropArguments

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) dropArguments​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, int pos, [Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?>... valueTypes)

Produces a method handle which will discard some dummy arguments before calling some other specified _target_ method handle. The type of the new method handle will be the same as the target's type, except it will also include the dummy argument types, at some given position. 

The pos argument may range between zero and _N_ , where _N_ is the arity of the target. If pos is zero, the dummy arguments will precede the target's real arguments; if pos is _N_ they will come after. 

**Example:**
    
    import static java.lang.invoke.MethodHandles.*;
     import static java.lang.invoke.MethodType.*;
     ...
     MethodHandle cat = lookup().findVirtual(String.class,
      "concat", methodType(String.class, String.class));
     assertEquals("xy", (String) cat.invokeExact("x", "y"));
     MethodHandle d0 = dropArguments(cat, 0, String.class);
     assertEquals("yz", (String) d0.invokeExact("x", "y", "z"));
     MethodHandle d1 = dropArguments(cat, 1, String.class);
     assertEquals("xz", (String) d1.invokeExact("x", "y", "z"));
     MethodHandle d2 = dropArguments(cat, 2, String.class);
     assertEquals("xy", (String) d2.invokeExact("x", "y", "z"));
     MethodHandle d12 = dropArguments(cat, 1, int.class, boolean.class);
     assertEquals("xz", (String) d12.invokeExact("x", 12, true, "z"));
     

This method is also equivalent to the following code: 
    
    [dropArguments](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__dropArguments-java_lang_invoke_MethodHandle-int-java_util_List-)(target, pos, Arrays.asList(valueTypes))
     

**Parameters:**

Parameter Name | Parameter Description  
---|---  
target  |  the method handle to invoke after the arguments are dropped  
valueTypes  |  the type(s) of the argument(s) to drop  
pos  |  position of first argument to drop (zero for the leftmost)  
  
**Returns:**

a method handle which drops arguments of the given types, before calling the original method handle

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the target is null, or if the valueTypes array or any of its elements is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if any element of valueTypes is void.class, or if pos is negative or greater than the arity of the target, or if the new method handle's type would have [too many parameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__maxarity)  
  
#### [h2]filterArguments

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) filterArguments​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, int pos, [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464)... filters)

Adapts a target method handle by pre-processing one or more of its arguments, each with its own unary filter function, and then calling the target with each pre-processed argument replaced by the result of its corresponding filter function. 

The pre-processing is performed by one or more method handles, specified in the elements of the filters array. The first element of the filter array corresponds to the pos argument of the target, and so on in sequence. 

Null arguments in the array are treated as identity functions, and the corresponding arguments left unchanged. (If there are no non-null elements in the array, the original target is returned.) Each filter is applied to the corresponding argument of the adapter. 

If a filter F applies to the Nth argument of the target, then F must be a method handle which takes exactly one argument. The type of F's sole argument replaces the corresponding argument type of the target in the resulting adapted method handle. The return type of F must be identical to the corresponding parameter type of the target. 

It is an error if there are elements of filters (null or not) which do not correspond to argument positions in the target. 

**Example:**
    
    import static java.lang.invoke.MethodHandles.*;
     import static java.lang.invoke.MethodType.*;
     ...
     MethodHandle cat = lookup().findVirtual(String.class,
      "concat", methodType(String.class, String.class));
     MethodHandle upcase = lookup().findVirtual(String.class,
      "toUpperCase", methodType(String.class));
     assertEquals("xy", (String) cat.invokeExact("x", "y"));
     MethodHandle f0 = filterArguments(cat, 0, upcase);
     assertEquals("Xy", (String) f0.invokeExact("x", "y")); // Xy
     MethodHandle f1 = filterArguments(cat, 1, upcase);
     assertEquals("xY", (String) f1.invokeExact("x", "y")); // xY
     MethodHandle f2 = filterArguments(cat, 0, upcase, upcase);
     assertEquals("XY", (String) f2.invokeExact("x", "y")); // XY
     

Here is pseudocode for the resulting adapter: 
    
    V target(P... p, A[i]... a[i], B... b);
     A[i] filter[i](V[i]);
     T adapter(P... p, V[i]... v[i], B... b) {
       return target(p..., f[i](v[i])..., b...);
     }
     

**Parameters:**

Parameter Name | Parameter Description  
---|---  
target  |  the method handle to invoke after arguments are filtered  
pos  |  the position of the first argument to filter  
filters  |  method handles to call initially on filtered arguments  
  
**Returns:**

method handle which incorporates the specified argument filtering logic

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the target is null or if the filters array is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if a non-null element of filters does not match a corresponding argument type of target as described above, or if the pos+filters.length is greater than target.type().parameterCount(), or if the resulting method handle's type would have [too many parameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__maxarity)  
  
#### [h2]collectArguments

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) collectArguments​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, int pos, [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) filter)

Adapts a target method handle by pre-processing a sub-sequence of its arguments with a filter (another method handle). The pre-processed arguments are replaced by the result (if any) of the filter function. The target is then called on the modified (usually shortened) argument list. 

If the filter returns a value, the target must accept that value as its argument in position pos, preceded and/or followed by any arguments not passed to the filter. If the filter returns void, the target must accept all arguments not passed to the filter. No arguments are reordered, and a result returned from the filter replaces (in order) the whole subsequence of arguments originally passed to the adapter. 

The argument types (if any) of the filter replace zero or one argument types of the target, at position pos, in the resulting adapted method handle. The return type of the filter (if any) must be identical to the argument type of the target at position pos, and that target argument is supplied by the return value of the filter. 

In all cases, pos must be greater than or equal to zero, and pos must also be less than or equal to the target's arity. 

**Example:**
    
    import static java.lang.invoke.MethodHandles.*;
     import static java.lang.invoke.MethodType.*;
     ...
     MethodHandle deepToString = publicLookup()
      .findStatic(Arrays.class, "deepToString", methodType(String.class, Object[].class));
     
     MethodHandle ts1 = deepToString.asCollector(String[].class, 1);
     assertEquals("[strange]", (String) ts1.invokeExact("strange"));
     
     MethodHandle ts2 = deepToString.asCollector(String[].class, 2);
     assertEquals("[up, down]", (String) ts2.invokeExact("up", "down"));
     
     MethodHandle ts3 = deepToString.asCollector(String[].class, 3);
     MethodHandle ts3_ts2 = collectArguments(ts3, 1, ts2);
     assertEquals("[top, [up, down], strange]",
                 (String) ts3_ts2.invokeExact("top", "up", "down", "strange"));
     
     MethodHandle ts3_ts2_ts1 = collectArguments(ts3_ts2, 3, ts1);
     assertEquals("[top, [up, down], [strange]]",
                 (String) ts3_ts2_ts1.invokeExact("top", "up", "down", "strange"));
     
     MethodHandle ts3_ts2_ts3 = collectArguments(ts3_ts2, 1, ts3);
     assertEquals("[top, [[up, down, strange], charm], bottom]",
                 (String) ts3_ts2_ts3.invokeExact("top", "up", "down", "strange", "charm", "bottom"));
     

Here is pseudocode for the resulting adapter: 
    
    T target(A...,V,C...);
     V filter(B...);
     T adapter(A... a,B... b,C... c) {
       V v = filter(b...);
       return target(a...,v,c...);
     }
     // and if the filter has no arguments:
     T target2(A...,V,C...);
     V filter2();
     T adapter2(A... a,C... c) {
       V v = filter2();
       return target2(a...,v,c...);
     }
     // and if the filter has a void return:
     T target3(A...,C...);
     void filter3(B...);
     void adapter3(A... a,B... b,C... c) {
       filter3(b...);
       return target3(a...,c...);
     }
     

A collection adapter collectArguments(mh, 0, coll) is equivalent to one which first "folds" the affected arguments, and then drops them, in separate steps as follows: 
    
    mh = MethodHandles.dropArguments(mh, 1, coll.type().parameterList()); //step 2
     mh = MethodHandles.foldArguments(mh, coll); //step 1
     

If the target method handle consumes no arguments besides than the result (if any) of the filter coll, then collectArguments(mh, 0, coll) is equivalent to filterReturnValue(coll, mh). If the filter method handle coll consumes one argument and produces a non-void result, then collectArguments(mh, N, coll) is equivalent to filterArguments(mh, N, coll). Other equivalences are possible but would require argument permutation. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
target  |  the method handle to invoke after filtering the subsequence of arguments  
pos  |  the position of the first adapter argument to pass to the filter, and/or the target argument which receives the result of the filter  
filter  |  method handle to call on the subsequence of arguments  
  
**Returns:**

method handle which incorporates the specified argument subsequence filtering logic

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if either argument is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the return type of filter is non-void and is not the same as the pos argument of the target, or if pos is not between 0 and the target's arity, inclusive, or if the resulting method handle's type would have [too many parameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__maxarity)  
  
**See Also:**

[foldArguments(java.lang.invoke.MethodHandle, java.lang.invoke.MethodHandle)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__foldArguments-java_lang_invoke_MethodHandle-java_lang_invoke_MethodHandle-), [filterArguments(java.lang.invoke.MethodHandle, int, java.lang.invoke.MethodHandle...)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__filterArguments-java_lang_invoke_MethodHandle-int-java_lang_invoke_MethodHandle___-), [filterReturnValue(java.lang.invoke.MethodHandle, java.lang.invoke.MethodHandle)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__filterReturnValue-java_lang_invoke_MethodHandle-java_lang_invoke_MethodHandle-)

#### [h2]filterReturnValue

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) filterReturnValue​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) filter)

Adapts a target method handle by post-processing its return value (if any) with a filter (another method handle). The result of the filter is returned from the adapter. 

If the target returns a value, the filter must accept that value as its only argument. If the target returns void, the filter must accept no arguments. 

The return type of the filter replaces the return type of the target in the resulting adapted method handle. The argument type of the filter (if any) must be identical to the return type of the target. 

**Example:**
    
    import static java.lang.invoke.MethodHandles.*;
     import static java.lang.invoke.MethodType.*;
     ...
     MethodHandle cat = lookup().findVirtual(String.class,
      "concat", methodType(String.class, String.class));
     MethodHandle length = lookup().findVirtual(String.class,
      "length", methodType(int.class));
     System.out.println((String) cat.invokeExact("x", "y")); // xy
     MethodHandle f0 = filterReturnValue(cat, length);
     System.out.println((int) f0.invokeExact("x", "y")); // 2
     

Here is pseudocode for the resulting adapter: 
    
    V target(A...);
     T filter(V);
     T adapter(A... a) {
       V v = target(a...);
       return filter(v);
     }
     // and if the target has a void return:
     void target2(A...);
     T filter2();
     T adapter2(A... a) {
       target2(a...);
       return filter2();
     }
     // and if the filter has a void return:
     V target3(A...);
     void filter3(V);
     void adapter3(A... a) {
       V v = target3(a...);
       filter3(v);
     }
     

**Parameters:**

Parameter Name | Parameter Description  
---|---  
target  |  the method handle to invoke before filtering the return value  
filter  |  method handle to call on the return value  
  
**Returns:**

method handle which incorporates the specified return value filtering logic

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if either argument is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the argument list of filter does not match the return type of target as described above  
  
#### [h2]foldArguments

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) foldArguments​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) combiner)

Adapts a target method handle by pre-processing some of its arguments, and then calling the target with the result of the pre-processing, inserted into the original sequence of arguments. 

The pre-processing is performed by combiner, a second method handle. Of the arguments passed to the adapter, the first N arguments are copied to the combiner, which is then called. (Here, N is defined as the parameter count of the combiner.) After this, control passes to the target, with any result from the combiner inserted before the original N incoming arguments. 

If the combiner returns a value, the first parameter type of the target must be identical with the return type of the combiner, and the next N parameter types of the target must exactly match the parameters of the combiner. 

If the combiner has a void return, no result will be inserted, and the first N parameter types of the target must exactly match the parameters of the combiner. 

The resulting adapter is the same type as the target, except that the first parameter type is dropped, if it corresponds to the result of the combiner. 

(Note that [dropArguments](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__dropArguments-java_lang_invoke_MethodHandle-int-java_util_List-) can be used to remove any arguments that either the combiner or the target does not wish to receive. If some of the incoming arguments are destined only for the combiner, consider using [MethodHandle#asCollector](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464#ZH-CN_TOPIC_0000001054678464__asCollector-java_lang_Class-int-) instead, since those arguments will not need to be live on the stack on entry to the target.) 

**Example:**
    
    import static java.lang.invoke.MethodHandles.*;
     import static java.lang.invoke.MethodType.*;
     ...
     MethodHandle trace = publicLookup().findVirtual(java.io.PrintStream.class,
      "println", methodType(void.class, String.class))
        .bindTo(System.out);
     MethodHandle cat = lookup().findVirtual(String.class,
      "concat", methodType(String.class, String.class));
     assertEquals("boojum", (String) cat.invokeExact("boo", "jum"));
     MethodHandle catTrace = foldArguments(cat, trace);
     // also prints "boo":
     assertEquals("boojum", (String) catTrace.invokeExact("boo", "jum"));
     

Here is pseudocode for the resulting adapter: 
    
    // there are N arguments in A...
     T target(V, A[N]..., B...);
     V combiner(A...);
     T adapter(A... a, B... b) {
       V v = combiner(a...);
       return target(v, a..., b...);
     }
     // and if the combiner has a void return:
     T target2(A[N]..., B...);
     void combiner2(A...);
     T adapter2(A... a, B... b) {
       combiner2(a...);
       return target2(a..., b...);
     }
     

**Parameters:**

Parameter Name | Parameter Description  
---|---  
target  |  the method handle to invoke after arguments are combined  
combiner  |  method handle to call initially on the incoming arguments  
  
**Returns:**

method handle which incorporates the specified argument folding logic

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if either argument is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if combiner's return type is non-void and not the same as the first argument type of the target, or if the initial N argument types of the target (skipping one matching the combiner's return type) are not identical with the argument types of combiner  
  
#### [h2]guardWithTest

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) guardWithTest​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) test, [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) fallback)

Makes a method handle which adapts a target method handle, by guarding it with a test, a boolean-valued method handle. If the guard fails, a fallback handle is called instead. All three method handles must have the same corresponding argument and return types, except that the return type of the test must be boolean, and the test is allowed to have fewer arguments than the other two method handles. 

Here is pseudocode for the resulting adapter: 
    
    boolean test(A...);
     T target(A...,B...);
     T fallback(A...,B...);
     T adapter(A... a,B... b) {
       if (test(a...))
         return target(a..., b...);
       else
         return fallback(a..., b...);
     }
     

Note that the test arguments (a... in the pseudocode) cannot be modified by execution of the test, and so are passed unchanged from the caller to the target or fallback as appropriate. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
test  |  method handle used for test, must return boolean  
target  |  method handle to call if test passes  
fallback  |  method handle to call if test fails  
  
**Returns:**

method handle which incorporates the specified if/then/else logic

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if any argument is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if test does not return boolean, or if all three method types do not match (with the return type of test changed to match that of the target).  
  
#### [h2]catchException

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) catchException​([MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) target, [Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<? extends [Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436)> exType, [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) handler)

Makes a method handle which adapts a target method handle, by running it inside an exception handler. If the target returns normally, the adapter returns that value. If an exception matching the specified type is thrown, the fallback handle is called instead on the exception, plus the original arguments. 

The target and handler must have the same corresponding argument and return types, except that handler may omit trailing arguments (similarly to the predicate in [guardWithTest](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__guardWithTest-java_lang_invoke_MethodHandle-java_lang_invoke_MethodHandle-java_lang_invoke_MethodHandle-)). Also, the handler must have an extra leading parameter of exType or a supertype. 

Here is pseudocode for the resulting adapter: 
    
    T target(A..., B...);
     T handler(ExType, A...);
     T adapter(A... a, B... b) {
       try {
         return target(a..., b...);
       } catch (ExType ex) {
         return handler(ex, a...);
       }
     }
     

Note that the saved arguments (a... in the pseudocode) cannot be modified by execution of the target, and so are passed unchanged from the caller to the handler, if the handler is invoked. 

The target and handler must return the same type, even if the handler always throws. (This might happen, for instance, because the handler is simulating a finally clause). To create such a throwing handler, compose the handler creation logic with [throwException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__throwException-java_lang_Class-java_lang_Class-), in order to create a method handle of the correct return type.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
target  |  method handle to call  
exType  |  the type of exception which the handler will catch  
handler  |  method handle to call if a matching exception is thrown  
  
**Returns:**

method handle which incorporates the specified try/catch logic

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if any argument is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if handler does not accept the given exception type, or if the method handle types do not match in their return types and their corresponding parameters  
  
#### [h2]throwException

public static [MethodHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandle-0000001054678464) throwException​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> returnType, [Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<? extends [Throwable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/throwable-0000001054358436)> exType)

Produces a method handle which will throw exceptions of the given exType. The method handle will accept a single argument of exType, and immediately throw it as an exception. The method type will nominally specify a return of returnType. The return type may be anything convenient: It doesn't matter to the method handle's behavior, since it will never return normally. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
returnType  |  the return type of the desired method handle  
exType  |  the parameter type of the desired method handle  
  
**Returns:**

method handle which can throw the given exceptions

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if either argument is null
