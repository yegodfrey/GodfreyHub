---
name: document/cn/doc-references/guardedobject-0000001054119780
title: GuardedObject
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/guardedobject-0000001054119780
source: portal
---

# GuardedObject  
  
[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---java.security.GuardedObject
    
    public class GuardedObject
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)
    implements [Serializable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/serializable-0000001054358416)  
  
---  
A GuardedObject is an object that is used to protect access to another object. 

A GuardedObject encapsulates a target object and a Guard object, such that access to the target object is possible only if the Guard object allows it. Once an object is encapsulated by a GuardedObject, access to that object is controlled by the getObject method, which invokes the checkGuard method on the Guard object that is guarding access. If access is not allowed, an exception is thrown.

**See Also:**

[Guard](https://developer.harmonyos.com/cn/docs/documentation/doc-references/guard-0000001054838472), [Permission](https://developer.harmonyos.com/cn/docs/documentation/doc-references/permission-0000001054238525), 

#### Constructor Summary

Constructor | Description  
---|---  
[GuardedObject](https://developer.harmonyos.com/cn/docs/documentation/doc-references/guardedobject-0000001054119780#ZH-CN_TOPIC_0000001054119780__GuardedObject-java_lang_Object-java_security_Guard-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) object, [Guard](https://developer.harmonyos.com/cn/docs/documentation/doc-references/guard-0000001054838472) guard) |  Constructs a GuardedObject using the specified object and guard.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) | [getObject](https://developer.harmonyos.com/cn/docs/documentation/doc-references/guardedobject-0000001054119780#ZH-CN_TOPIC_0000001054119780__getObject--)​() |  Retrieves the guarded object, or throws an exception if access to the guarded object is denied by the guard.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]GuardedObject

public GuardedObject​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) object, [Guard](https://developer.harmonyos.com/cn/docs/documentation/doc-references/guard-0000001054838472) guard)

Constructs a GuardedObject using the specified object and guard. If the Guard object is null, then no restrictions will be placed on who can access the object. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
object  |  the object to be guarded.  
guard  |  the Guard object that guards access to the object.  
  
#### Method Detail

#### [h2]getObject

public [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) getObject​() throws [SecurityException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securityexception-0000001054678454)

Retrieves the guarded object, or throws an exception if access to the guarded object is denied by the guard. 

**Returns:**

the guarded object.

**Throws:**

Throw Name | Throw Description  
---|---  
[SecurityException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securityexception-0000001054678454) |  if access to the guarded object is denied.
