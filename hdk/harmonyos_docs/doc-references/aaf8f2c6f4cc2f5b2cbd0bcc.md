---
name: document/cn/doc-references/dosfileattributes-0000001054358500
title: DosFileAttributes
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/dosfileattributes-0000001054358500
source: portal
---

# DosFileAttributes
    
    public interface DosFileAttributes
    extends [BasicFileAttributes](https://developer.harmonyos.com/cn/docs/documentation/doc-references/basicfileattributes-0000001054678481)  
  
---  
File attributes associated with a file in a file system that supports legacy "DOS" attributes. 

**Usage Example:**
    
    Path file = ...
        DosFileAttributes attrs = Files.readAttributes(file, DosFileAttributes.class);
     

**Since:**

1.7

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
boolean | [isArchive](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dosfileattributes-0000001054358500#ZH-CN_TOPIC_0000001054358500__isArchive--)​() |  Returns the value of the archive attribute.   
boolean | [isHidden](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dosfileattributes-0000001054358500#ZH-CN_TOPIC_0000001054358500__isHidden--)​() |  Returns the value of the hidden attribute.   
boolean | [isReadOnly](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dosfileattributes-0000001054358500#ZH-CN_TOPIC_0000001054358500__isReadOnly--)​() |  Returns the value of the read-only attribute.   
boolean | [isSystem](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dosfileattributes-0000001054358500#ZH-CN_TOPIC_0000001054358500__isSystem--)​() |  Returns the value of the system attribute.   
  
Methods inherited from interface java.nio.file.attribute.[BasicFileAttributes](https://developer.harmonyos.com/cn/docs/documentation/doc-references/basicfileattributes-0000001054678481)  
---  
[creationTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/basicfileattributes-0000001054678481#ZH-CN_TOPIC_0000001054678481__creationTime--), [fileKey](https://developer.harmonyos.com/cn/docs/documentation/doc-references/basicfileattributes-0000001054678481#ZH-CN_TOPIC_0000001054678481__fileKey--), [isDirectory](https://developer.harmonyos.com/cn/docs/documentation/doc-references/basicfileattributes-0000001054678481#ZH-CN_TOPIC_0000001054678481__isDirectory--), [isOther](https://developer.harmonyos.com/cn/docs/documentation/doc-references/basicfileattributes-0000001054678481#ZH-CN_TOPIC_0000001054678481__isOther--), [isRegularFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/basicfileattributes-0000001054678481#ZH-CN_TOPIC_0000001054678481__isRegularFile--), [isSymbolicLink](https://developer.harmonyos.com/cn/docs/documentation/doc-references/basicfileattributes-0000001054678481#ZH-CN_TOPIC_0000001054678481__isSymbolicLink--), [lastAccessTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/basicfileattributes-0000001054678481#ZH-CN_TOPIC_0000001054678481__lastAccessTime--), [lastModifiedTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/basicfileattributes-0000001054678481#ZH-CN_TOPIC_0000001054678481__lastModifiedTime--), [size](https://developer.harmonyos.com/cn/docs/documentation/doc-references/basicfileattributes-0000001054678481#ZH-CN_TOPIC_0000001054678481__size--)  
  
#### Method Detail

#### [h2]isReadOnly

boolean isReadOnly​()

Returns the value of the read-only attribute. 

This attribute is often used as a simple access control mechanism to prevent files from being deleted or updated. Whether the file system or platform does any enforcement to prevent read-only files from being updated is implementation specific.

**Returns:**

the value of the read-only attribute

#### [h2]isHidden

boolean isHidden​()

Returns the value of the hidden attribute. 

This attribute is often used to indicate if the file is visible to users.

**Returns:**

the value of the hidden attribute

#### [h2]isArchive

boolean isArchive​()

Returns the value of the archive attribute. 

This attribute is typically used by backup programs.

**Returns:**

the value of the archive attribute

#### [h2]isSystem

boolean isSystem​()

Returns the value of the system attribute. 

This attribute is often used to indicate that the file is a component of the operating system.

**Returns:**

the value of the system attribute
