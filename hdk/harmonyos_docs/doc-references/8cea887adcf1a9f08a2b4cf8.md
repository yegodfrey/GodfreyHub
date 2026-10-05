---
name: document/cn/doc-references/methodhandleinfo-0000001054119720
title: MethodHandleInfo
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/methodhandleinfo-0000001054119720
source: portal
---

# MethodHandleInfo
    
    public interface MethodHandleInfo  
  
---  
A symbolic reference obtained by cracking a direct method handle into its consitutent symbolic parts. To crack a direct method handle, call [Lookup#revealDirect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465#ZH-CN_TOPIC_0000001054558465__revealDirect-java_lang_invoke_MethodHandle-). **__Direct Method Handles** A direct method handle represents a method, constructor, or field without any intervening argument bindings or other transformations. The method, constructor, or field referred to by a direct method handle is called its underlying member. Direct method handles may be obtained in any of these ways: 
    * By executing an ldc instruction on a CONSTANT_MethodHandle constant. (See the Java Virtual Machine Specification, sections 4.4.8 and 5.4.3.) 
    * By calling one of the [Lookup Factory Methods](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465#ZH-CN_TOPIC_0000001054558465__lookups), such as [Lookup#findVirtual](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465#ZH-CN_TOPIC_0000001054558465__findVirtual-java_lang_Class-java_lang_String-java_lang_invoke_MethodType-), to resolve a symbolic reference into a method handle. A symbolic reference consists of a class, name string, and type. 
    * By calling the factory method [Lookup#unreflect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465#ZH-CN_TOPIC_0000001054558465__unreflect-java_lang_reflect_Method-) or [Lookup#unreflectSpecial](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465#ZH-CN_TOPIC_0000001054558465__unreflectSpecial-java_lang_reflect_Method-java_lang_Class-) to convert a [Method](https://developer.harmonyos.com/cn/docs/documentation/doc-references/method-0000001054518482) into a method handle. 
    * By calling the factory method [Lookup#unreflectConstructor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465#ZH-CN_TOPIC_0000001054558465__unreflectConstructor-java_lang_reflect_Constructor-) to convert a [Constructor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constructor-0000001054119726) into a method handle. 
    * By calling the factory method [Lookup#unreflectGetter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465#ZH-CN_TOPIC_0000001054558465__unreflectGetter-java_lang_reflect_Field-) or [Lookup#unreflectSetter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465#ZH-CN_TOPIC_0000001054558465__unreflectSetter-java_lang_reflect_Field-) to convert a [Field](https://developer.harmonyos.com/cn/docs/documentation/doc-references/field-0000001054199742) into a method handle. 
**Restrictions on Cracking** Given a suitable Lookup object, it is possible to crack any direct method handle to recover a symbolic reference for the underlying method, constructor, or field. Cracking must be done via a Lookup object equivalent to that which created the target method handle, or which has enough access permissions to recreate an equivalent method handle. 

If the underlying method is [caller sensitive](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465#ZH-CN_TOPIC_0000001054558465__callsens), the direct method handle will have been "bound" to a particular caller class, the [lookup class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465#ZH-CN_TOPIC_0000001054558465__lookupClass--) of the lookup object used to create it. Cracking this method handle with a different lookup class will fail even if the underlying method is public (like Class.forName). 

The requirement of lookup object matching provides a "fast fail" behavior for programs which may otherwise trust erroneous revelation of a method handle with symbolic information (or caller binding) from an unexpected scope. Use [MethodHandles.reflectAs(java.lang.Class<T>, java.lang.invoke.MethodHandle)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles-0000001054358443#ZH-CN_TOPIC_0000001054358443__reflectAs-java_lang_Class-java_lang_invoke_MethodHandle-) to override this limitation. 

**__Reference kinds** The [Lookup Factory Methods](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465#ZH-CN_TOPIC_0000001054558465__lookups) correspond to all major use cases for methods, constructors, and fields. These use cases may be distinguished using small integers as follows: 

**Since:**

1.8

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static int | [REF_getField](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__REF_getField) |  A direct method handle reference kind, as defined in the [table above](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__refkinds).   
static int | [REF_getStatic](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__REF_getStatic) |     
static int | [REF_invokeInterface](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__REF_invokeInterface) |     
static int | [REF_invokeSpecial](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__REF_invokeSpecial) |     
static int | [REF_invokeStatic](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__REF_invokeStatic) |     
static int | [REF_invokeVirtual](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__REF_invokeVirtual) |     
static int | [REF_newInvokeSpecial](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__REF_newInvokeSpecial) |     
static int | [REF_putField](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__REF_putField) |     
static int | [REF_putStatic](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__REF_putStatic) |     
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> | [getDeclaringClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__getDeclaringClass--)​() |  Returns the class in which the cracked method handle's underlying member was defined.   
[MethodType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodtype-0000001054238463) | [getMethodType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__getMethodType--)​() |  Returns the nominal type of the cracked symbolic reference, expressed as a method type.   
int | [getModifiers](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__getModifiers--)​() |  Returns the access modifiers of the underlying member.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__getName--)​() |  Returns the name of the cracked method handle's underlying member.   
int | [getReferenceKind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__getReferenceKind--)​() |  Returns the reference kind of the cracked method handle, which in turn determines whether the method handle's underlying member was a constructor, method, or field.   
default boolean | [isVarArgs](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__isVarArgs--)​() |  Determines if the underlying member was a variable arity method or constructor.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [referenceKindToString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__referenceKindToString-int-)​(int referenceKind) |  Returns the descriptive name of the given reference kind, as defined in the [table above](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__refkinds).   
<T extends [Member](https://developer.harmonyos.com/cn/docs/documentation/doc-references/member-0000001054678468)>T | [reflectAs](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__reflectAs-java_lang_Class-java_lang_invoke_MethodHandles_Lookup-)​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<T> expected, [MethodHandles.Lookup](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465) lookup) |  Reflects the underlying member as a method, constructor, or field object.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__toString-int-java_lang_Class-java_lang_String-java_lang_invoke_MethodType-)​(int kind, [Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> defc, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name, [MethodType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodtype-0000001054238463) type) |  Returns a string representation for a MethodHandleInfo, given the four parts of its symbolic reference.   
  
#### Field Detail

#### [h2]REF_getField

static final int REF_getField

A direct method handle reference kind, as defined in the [table above](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__refkinds). 

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_lang_invoke_MethodHandleInfo_REF_getField)

#### [h2]REF_getStatic

static final int REF_getStatic

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_lang_invoke_MethodHandleInfo_REF_getStatic)

#### [h2]REF_invokeInterface

static final int REF_invokeInterface

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_lang_invoke_MethodHandleInfo_REF_invokeInterface)

#### [h2]REF_invokeSpecial

static final int REF_invokeSpecial

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_lang_invoke_MethodHandleInfo_REF_invokeSpecial)

#### [h2]REF_invokeStatic

static final int REF_invokeStatic

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_lang_invoke_MethodHandleInfo_REF_invokeStatic)

#### [h2]REF_invokeVirtual

static final int REF_invokeVirtual

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_lang_invoke_MethodHandleInfo_REF_invokeVirtual)

#### [h2]REF_newInvokeSpecial

static final int REF_newInvokeSpecial

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_lang_invoke_MethodHandleInfo_REF_newInvokeSpecial)

#### [h2]REF_putField

static final int REF_putField

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_lang_invoke_MethodHandleInfo_REF_putField)

#### [h2]REF_putStatic

static final int REF_putStatic

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_lang_invoke_MethodHandleInfo_REF_putStatic)

#### Method Detail

#### [h2]getReferenceKind

int getReferenceKind​()

Returns the reference kind of the cracked method handle, which in turn determines whether the method handle's underlying member was a constructor, method, or field. See the [table above](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__refkinds) for definitions. 

**Returns:**

the integer code for the kind of reference used to access the underlying member

#### [h2]getDeclaringClass

[Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> getDeclaringClass​()

Returns the class in which the cracked method handle's underlying member was defined. 

**Returns:**

the declaring class of the underlying member

#### [h2]getName

[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getName​()

Returns the name of the cracked method handle's underlying member. This is "<init>" if the underlying member was a constructor, else it is a simple method name or field name. 

**Returns:**

the simple name of the underlying member

#### [h2]getMethodType

[MethodType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodtype-0000001054238463) getMethodType​()

Returns the nominal type of the cracked symbolic reference, expressed as a method type. If the reference is to a constructor, the return type will be void. If it is to a non-static method, the method type will not mention the this parameter. If it is to a field and the requested access is to read the field, the method type will have no parameters and return the field type. If it is to a field and the requested access is to write the field, the method type will have one parameter of the field type and return void. 

Note that original direct method handle may include a leading this parameter, or (in the case of a constructor) will replace the void return type with the constructed class. The nominal type does not include any this parameter, and (in the case of a constructor) will return void.

**Returns:**

the type of the underlying member, expressed as a method type

#### [h2]reflectAs

<T extends [Member](https://developer.harmonyos.com/cn/docs/documentation/doc-references/member-0000001054678468)> T reflectAs​([Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<T> expected, [MethodHandles.Lookup](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandles_lookup-0000001054558465) lookup)

Reflects the underlying member as a method, constructor, or field object. If the underlying member is public, it is reflected as if by getMethod, getConstructor, or getField. Otherwise, it is reflected as if by getDeclaredMethod, getDeclaredConstructor, or getDeclaredField. The underlying member must be accessible to the given lookup object. 

**Type Parameters:**

Type Parameter Name | Type Parameter Description  
---|---  
T  |  the desired type of the result, either [Member](https://developer.harmonyos.com/cn/docs/documentation/doc-references/member-0000001054678468) or a subtype  
  
**Parameters:**

Parameter Name | Parameter Description  
---|---  
expected  |  a class object representing the desired result type T  
lookup  |  the lookup object that created this MethodHandleInfo, or one with equivalent access privileges  
  
**Returns:**

a reference to the method, constructor, or field object

**Throws:**

Throw Name | Throw Description  
---|---  
[ClassCastException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/classcastexception-0000001054678419) |  if the member is not of the expected type  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if either argument is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the underlying member is not accessible to the given lookup object  
  
#### [h2]getModifiers

int getModifiers​()

Returns the access modifiers of the underlying member. 

**Returns:**

the Java language modifiers for underlying member, or -1 if the member cannot be accessed

**See Also:**

[Modifier](https://developer.harmonyos.com/cn/docs/documentation/doc-references/modifier-0000001054678470), [reflectAs(java.lang.Class<T>, java.lang.invoke.MethodHandles.Lookup)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__reflectAs-java_lang_Class-java_lang_invoke_MethodHandles_Lookup-)

#### [h2]isVarArgs

default boolean isVarArgs​()

Determines if the underlying member was a variable arity method or constructor. Such members are represented by method handles that are varargs collectors. 

**Returns:**

true if and only if the underlying member was declared with variable arity.

#### [h2]referenceKindToString

static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) referenceKindToString​(int referenceKind)

Returns the descriptive name of the given reference kind, as defined in the [table above](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__refkinds). The conventional prefix "REF_" is omitted. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
referenceKind  |  an integer code for a kind of reference used to access a class member  
  
**Returns:**

a mixed-case string such as "getField"

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the argument is not a valid [reference kind number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__refkinds)  
  
#### [h2]toString

static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) toString​(int kind, [Class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423)<?> defc, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name, [MethodType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodtype-0000001054238463) type)

Returns a string representation for a MethodHandleInfo, given the four parts of its symbolic reference. This is defined to be of the form "RK C.N:MT", where RK is the [reference kind string](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__referenceKindToString-int-) for kind, C is the [name](https://developer.harmonyos.com/cn/docs/documentation/doc-references/class-0000001054358423#ZH-CN_TOPIC_0000001054358423__getName--) of defc N is the name, and MT is the type. These four values may be obtained from the [reference kind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__getReferenceKind--), [declaring class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__getDeclaringClass--), [member name](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__getName--), and [method type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__getMethodType--) of a MethodHandleInfo object. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
kind  |  the [reference kind](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__getReferenceKind--) part of the symbolic reference  
defc  |  the [declaring class](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__getDeclaringClass--) part of the symbolic reference  
name  |  the [member name](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__getName--) part of the symbolic reference  
type  |  the [method type](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__getMethodType--) part of the symbolic reference  
  
**Returns:**

a string of the form "RK C.N:MT"

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if the first argument is not a valid [reference kind number](https://developer.harmonyos.com/cn/docs/documentation/doc-references/methodhandleinfo-0000001054119720#ZH-CN_TOPIC_0000001054119720__refkinds)  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if any reference argument is null
