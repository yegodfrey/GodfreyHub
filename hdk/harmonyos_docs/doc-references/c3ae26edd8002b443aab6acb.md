---
name: document/cn/doc-references/datauriutils-0000001054358668
title: DataUriUtils
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/datauriutils-0000001054358668
source: portal
---

# DataUriUtils

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.aafwk.ability.DataUriUtils
    
    public class DataUriUtils
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
A utility class used for handling [Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) objects that use the dataability scheme.

**Since:**

3

**See Also:**

[Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009)

#### Constructor Summary

Constructor | Description  
---|---  
[DataUriUtils](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datauriutils-0000001054358668#ZH-CN_TOPIC_0000001054358668__DataUriUtils--)​() |     
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
static [Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) | [attachId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datauriutils-0000001054358668#ZH-CN_TOPIC_0000001054358668__attachId-ohos_utils_net_Uri-long-)​([Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) dataUri, long id) |  Attaches the given ID to the end of the path component of the given URI.   
static [Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) | [deleteId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datauriutils-0000001054358668#ZH-CN_TOPIC_0000001054358668__deleteId-ohos_utils_net_Uri-)​([Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) dataUri) |  Deletes the ID from the end of the path component of the given URI.   
static long | [getId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datauriutils-0000001054358668#ZH-CN_TOPIC_0000001054358668__getId-ohos_utils_net_Uri-)​([Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) dataUri) |  Obtains the ID attached to the end of the path component of the given URI.   
static [Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) | [updateId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datauriutils-0000001054358668#ZH-CN_TOPIC_0000001054358668__updateId-ohos_utils_net_Uri-long-)​([Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) dataUri, long id) |  Updates the ID in the specified dataUri.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]DataUriUtils

public DataUriUtils​()

#### Method Detail

#### [h2]getId

public static long getId​([Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) dataUri)

Obtains the ID attached to the end of the path component of the given URI. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
dataUri  |  Indicates the [Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) object from which the ID is to be obtained.  
  
**Returns:**

Returns the ID attached to the end of the path component; returns -1 if the given dataUri does not contain a path component.

**Throws:**

Throw Name | Throw Description  
---|---  
[NumberFormatException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/numberformatexception-0000001054439739) |  Throws this exception if the last segment of the path component is not a number.  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if dataUri is null.  
  
**Since:**

3

#### [h2]attachId

public static [Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) attachId​([Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) dataUri, long id)

Attaches the given ID to the end of the path component of the given URI. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
dataUri  |  Indicates the [Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) object to which the ID is to be attached.  
id  |  Indicates the ID to attach.  
  
**Returns:**

Returns the [Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) object with the given ID attached.

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if the uri is illegal  
  
**Since:**

3

#### [h2]deleteId

public static [Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) deleteId​([Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) dataUri)

Deletes the ID from the end of the path component of the given URI. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
dataUri  |  Indicates the [Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) object from which the ID is to be deleted.  
  
**Returns:**

Returns the [Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) object with the ID deleted.

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if dataUri is null or does not contain a path component.  
[NumberFormatException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/numberformatexception-0000001054439739) |  Throws this exception if the last segment of the path component is not a number.  
  
**Since:**

3

#### [h2]updateId

public static [Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) updateId​([Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) dataUri, long id)

Updates the ID in the specified dataUri. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
dataUri  |  Indicates the [Uri](https://developer.harmonyos.com/cn/docs/documentation/doc-references/uri-0000001054559009) object to be updated.  
id  |  Indicates the new ID.  
  
**Returns:**

Returns the updated Uri object.

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if the format of the specified dataUri is incorrect.  
[NumberFormatException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/numberformatexception-0000001054439739) |  Throws this exception if the last segment of the path in the specified dataUri is not a number.  
  
**Since:**

4
