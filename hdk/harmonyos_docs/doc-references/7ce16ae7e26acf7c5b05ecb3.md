---
name: document/cn/doc-references/distfile-0000001054120066
title: DistFile
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/distfile-0000001054120066
source: portal
---

# DistFile

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.io.File](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759) |---|---ohos.data.distributed.file.DistFile
    
    [@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412)
    public class DistFile
    extends [File](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759)  
  
---  
Deprecated. This change is effective since API version 6. This class conflicts with the sandbox design. You are discouraged from using them. This class will be deleted in a future release. 

**Since:**

3

#### Field Summary

Fields inherited from class java.io.[File](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759)  
---  
[pathSeparator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__pathSeparator), [pathSeparatorChar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__pathSeparatorChar), [separator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__separator), [separatorChar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__separatorChar)  
  
#### Constructor Summary

Constructor | Description  
---|---  
[DistFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066#ZH-CN_TOPIC_0000001054120066__DistFile-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path) |  Deprecated.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
boolean | [copyTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066#ZH-CN_TOPIC_0000001054120066__copyTo-ohos_data_distributed_file_DistFile-)​([DistFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066) file) |  Deprecated.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getDevice](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066#ZH-CN_TOPIC_0000001054120066__getDevice--)​() |  Deprecated.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getGroup](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066#ZH-CN_TOPIC_0000001054120066__getGroup--)​() |  Deprecated.   
[DistFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066) | [getParentFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066#ZH-CN_TOPIC_0000001054120066__getParentFile--)​() |  Deprecated.   
boolean | [isDistFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066#ZH-CN_TOPIC_0000001054120066__isDistFile--)​() |  Deprecated.   
[DistFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066)[] | [listFiles](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066#ZH-CN_TOPIC_0000001054120066__listFiles--)​() |  Deprecated.   
[DistFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066)[] | [listFiles](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066#ZH-CN_TOPIC_0000001054120066__listFiles-java_io_FileFilter-)​([FileFilter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filefilter-0000001054518440) filter) |  Deprecated.   
[DistFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066)[] | [listFiles](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066#ZH-CN_TOPIC_0000001054120066__listFiles-java_io_FilenameFilter-)​([FilenameFilter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filenamefilter-0000001054678428) filter) |  Deprecated.   
  
Methods inherited from class java.io.[File](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759)  
---  
[canExecute](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__canExecute--), [canRead](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__canRead--), [canWrite](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__canWrite--), [compareTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__compareTo-java_io_File-), [createNewFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__createNewFile--), [createTempFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__createTempFile-java_lang_String-java_lang_String-), [createTempFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__createTempFile-java_lang_String-java_lang_String-java_io_File-), [delete](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__delete--), [deleteOnExit](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__deleteOnExit--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__equals-java_lang_Object-), [exists](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__exists--), [getAbsoluteFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__getAbsoluteFile--), [getAbsolutePath](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__getAbsolutePath--), [getCanonicalFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__getCanonicalFile--), [getCanonicalPath](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__getCanonicalPath--), [getFreeSpace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__getFreeSpace--), [getName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__getName--), [getParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__getParent--), [getPath](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__getPath--), [getTotalSpace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__getTotalSpace--), [getUsableSpace](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__getUsableSpace--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__hashCode--), [isAbsolute](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__isAbsolute--), [isDirectory](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__isDirectory--), [isFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__isFile--), [isHidden](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__isHidden--), [lastModified](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__lastModified--), [length](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__length--), [list](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__list--), [list](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__list-java_io_FilenameFilter-), [listRoots](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__listRoots--), [mkdir](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__mkdir--), [mkdirs](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__mkdirs--), [renameTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__renameTo-java_io_File-), [setExecutable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__setExecutable-boolean-), [setExecutable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__setExecutable-boolean-boolean-), [setLastModified](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__setLastModified-long-), [setReadable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__setReadable-boolean-), [setReadable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__setReadable-boolean-boolean-), [setReadOnly](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__setReadOnly--), [setWritable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__setWritable-boolean-), [setWritable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__setWritable-boolean-boolean-), [toPath](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__toPath--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__toString--), [toURI](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__toURI--), [toURL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__toURL--)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]DistFile

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public DistFile​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path)

Deprecated. 

#### Method Detail

#### [h2]isDistFile

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public boolean isDistFile​()

Deprecated. 

Checks whether this abstract pathname denotes a distributed file or directory. 

**Returns:**

Returns true if this abstract pathname denotes a distributed file or directory; returns false otherwise.

**Since:**

3

#### [h2]getDevice

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getDevice​()

Deprecated. 

Obtains information about the device to which the file or directory denoted by this abstract pathname belongs. 

**Returns:**

Returns local if this abstract pathname denotes a distributed file or directory; returns null otherwise.

**Since:**

3

#### [h2]getGroup

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getGroup​()

Deprecated. 

Obtains information about the account to which the file or directory denoted by this abstract pathname belongs. 

**Returns:**

Returns the account information if this abstract pathname denotes a distributed file or directory; returns null otherwise.

**Since:**

3

#### [h2]copyTo

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public boolean copyTo​([DistFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066) file) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Deprecated. 

Copies the content of a distributed file to another on the same device. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
file  |  Indicates the target distributed file.  
  
**Returns:**

Returns true if the content is successfully copied to the target file; returns false otherwise.

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  Throws this exception if an I/O error occurs.  
  
**Since:**

3

#### [h2]getParentFile

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public [DistFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066) getParentFile​()

Deprecated. 

Obtains the parent directory of the distributed file or directory denoted by this abstract pathname. 

**Overrides:**

[getParentFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__getParentFile--) in class [File](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759)

**Returns:**

Returns the parent directory if obtained; returns null if this abstract pathname does not denote a parent directory.

**Since:**

3

#### [h2]listFiles

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public [DistFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066)[] listFiles​()

Deprecated. 

Obtains a list of distributed files and directories in the directory denoted by this abstract pathname. 

**Overrides:**

[listFiles](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__listFiles--) in class [File](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759)

**Returns:**

Returns the list of distributed files and directories if obtained; returns an empty list if the directory denoted by this abstract pathname is empty; returns null if this abstract pathname does not denote a directory or if an I/O error occurs.

**Since:**

3

#### [h2]listFiles

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public [DistFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066)[] listFiles​([FileFilter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filefilter-0000001054518440) filter)

Deprecated. 

Obtains a list of distributed files and directories matching a specified file filter in the directory denoted by this abstract pathname. 

**Overrides:**

[listFiles](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__listFiles-java_io_FileFilter-) in class [File](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
filter  |  Indicates the file filter.  
  
**Returns:**

Returns the list of distributed files and directories matching the specified file filter if obtained; returns an empty list if the directory denoted by this abstract pathname is empty; returns null if this abstract pathname does not denote a directory or if an I/O error occurs.

**Since:**

3

**See Also:**

[Files.newDirectoryStream(Path,java.nio.file.DirectoryStream.Filter)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/files-0000001054678506#ZH-CN_TOPIC_0000001054678506__newDirectoryStream-java_nio_file_Path-java_nio_file_DirectoryStream_Filter-)

#### [h2]listFiles

[@Deprecated](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deprecated-0000001054838412) public [DistFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/distfile-0000001054120066)[] listFiles​([FilenameFilter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filenamefilter-0000001054678428) filter)

Deprecated. 

Obtains a list of distributed files and directories matching a specified file name filter in the directory denoted by this abstract pathname. 

**Overrides:**

[listFiles](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759#ZH-CN_TOPIC_0000001054119759__listFiles-java_io_FilenameFilter-) in class [File](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
filter  |  Indicates the file name filter.  
  
**Returns:**

Returns the list of distributed files and directories matching the specified file name filter if obtained; returns an empty list if the directory denoted by this abstract pathname is empty; returns null if this abstract pathname does not denote a directory or if an I/O error occurs.

**Since:**

3

**See Also:**

[Files.newDirectoryStream(Path,String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/files-0000001054678506#ZH-CN_TOPIC_0000001054678506__newDirectoryStream-java_nio_file_Path-java_lang_String-)
