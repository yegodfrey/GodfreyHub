---
name: document/cn/doc-references/eglsurface-0000001060837274
title: EGLSurface
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/eglsurface-0000001060837274
source: portal
---

# EGLSurface

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[ohos.agp.render.opengl.EGLObjectHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglobjecthandle-0000001120951633) |---|---ohos.agp.render.opengl.EGLSurface
    
    public class EGLSurface
    extends [EGLObjectHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglobjecthandle-0000001120951633)  
  
---  
Represents a wrapper class for the EGLSurface object.

**Since:**

5

#### Field Summary

Fields inherited from class ohos.agp.render.opengl.[EGLObjectHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglobjecthandle-0000001120951633)  
---  
[dafaultCodeKey](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglobjecthandle-0000001120951633#ZH-CN_TOPIC_0000001120951633__dafaultCodeKey), [defaultCodeBit](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglobjecthandle-0000001120951633#ZH-CN_TOPIC_0000001120951633__defaultCodeBit), [defaultResult](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglobjecthandle-0000001120951633#ZH-CN_TOPIC_0000001120951633__defaultResult)  
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
boolean | [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglsurface-0000001060837274#ZH-CN_TOPIC_0000001060837274__equals-java_lang_Object-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) object) |  Checks whether the specified EGLObjectHandle object equals the current EGLObjectHandle object.   
int | [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglsurface-0000001060837274#ZH-CN_TOPIC_0000001060837274__hashCode--)​() |  Calculates the hash code value based on the handle of the EGL object.   
  
Methods inherited from class ohos.agp.render.opengl.[EGLObjectHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglobjecthandle-0000001120951633)  
---  
[getNativeHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglobjecthandle-0000001120951633#ZH-CN_TOPIC_0000001120951633__getNativeHandle--)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Method Detail

#### [h2]equals

public boolean equals​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) object)

Checks whether the specified EGLObjectHandle object equals the current EGLObjectHandle object. 

**Overrides:**

[equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglobjecthandle-0000001120951633#ZH-CN_TOPIC_0000001120951633__equals-java_lang_Object-) in class [EGLObjectHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglobjecthandle-0000001120951633)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
object  |  Indicates the EGLObjectHandle object to compare.  
  
**Returns:**

Returns true if the two objects are equal; returns false otherwise.

**See Also:**

[Object.hashCode()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [HashMap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hashmap-0000001054518606)

#### [h2]hashCode

public int hashCode​()

Calculates the hash code value based on the handle of the EGL object. 

**Overrides:**

[hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglobjecthandle-0000001120951633#ZH-CN_TOPIC_0000001120951633__hashCode--) in class [EGLObjectHandle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/eglobjecthandle-0000001120951633)

**Returns:**

Returns the hash code value.

**See Also:**

[Object.equals(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [System.identityHashCode(java.lang.Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/system-0000001054558449#ZH-CN_TOPIC_0000001054558449__identityHashCode-java_lang_Object-)
