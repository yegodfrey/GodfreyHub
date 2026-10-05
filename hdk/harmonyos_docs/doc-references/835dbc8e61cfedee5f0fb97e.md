---
name: document/cn/doc-references/fileattribute-0000001054119770
title: FileAttribute
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/fileattribute-0000001054119770
source: portal
---

# FileAttribute
    
    public interface FileAttribute<T>  
  
---  
An object that encapsulates the value of a file attribute that can be set atomically when creating a new file or directory by invoking the [createFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/files-0000001054678506#ZH-CN_TOPIC_0000001054678506__createFile-java_nio_file_Path-java_nio_file_attribute_FileAttribute___-) or [createDirectory](https://developer.harmonyos.com/cn/docs/documentation/doc-references/files-0000001054678506#ZH-CN_TOPIC_0000001054678506__createDirectory-java_nio_file_Path-java_nio_file_attribute_FileAttribute___-) methods.

**Since:**

1.7

**See Also:**

[PosixFilePermissions.asFileAttribute(java.util.Set<java.nio.file.attribute.PosixFilePermission>)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/posixfilepermissions-0000001054439801#ZH-CN_TOPIC_0000001054439801__asFileAttribute-java_util_Set-)

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [name](https://developer.harmonyos.com/cn/docs/documentation/doc-references/fileattribute-0000001054119770#ZH-CN_TOPIC_0000001054119770__name--)​() |  Returns the attribute name.   
[T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/fileattribute-0000001054119770) | [value](https://developer.harmonyos.com/cn/docs/documentation/doc-references/fileattribute-0000001054119770#ZH-CN_TOPIC_0000001054119770__value--)​() |  Returns the attribute value.   
  
#### Method Detail

#### [h2]name

[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name​()

Returns the attribute name. 

**Returns:**

The attribute name

#### [h2]value

[T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/fileattribute-0000001054119770) value​()

Returns the attribute value. 

**Returns:**

The attribute value
