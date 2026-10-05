---
name: document/cn/doc-references/oshelper-0000001054200264
title: OsHelper
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/oshelper-0000001054200264
source: portal
---

# OsHelper  
  
[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.system.OsHelper
    
    public final class OsHelper
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Provides high-level language APIs that access to low-level operating system functionalities. Most of these APIs are system calls.

**Since:**

3

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
static void | [allocSpaceForFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__allocSpaceForFile-java_io_FileDescriptor-long-long-)​([FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) fd, long offset, long length) |  Allocates disk space for a file.   
static void | [changeFileName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__changeFileName-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) oldPath, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) newPath) |  Changes the file name.   
static void | [changeFilePermission](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__changeFilePermission-java_lang_String-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path, int mode) |  Changes the file permission.   
static boolean | [checkFilePermission](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__checkFilePermission-java_lang_String-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path, int mode) |  Checks whether the user can access the specified file.   
static void | [closeFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__closeFile-java_io_FileDescriptor-)​([FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) fd) |  Closes the file referred to by the specified file descriptor.   
static [FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) | [copyFileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__copyFileDescriptor-java_io_FileDescriptor-)​([FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) fileDescriptor) |  Copies a file descriptor.   
static [FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) | [copyFileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__copyFileDescriptor-java_io_FileDescriptor-int-)​([FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) oldFd, int newFd) |  Copies the specified file descriptor.   
static [FileStat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filestat-0000001054440277) | [getFileStatus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__getFileStatus-java_io_FileDescriptor-)​([FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) fd) |  Obtains the file status.   
static [FileStat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filestat-0000001054440277) | [getFileStatus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__getFileStatus-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path) |  Obtains file status information.   
static [FileStat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filestat-0000001054440277) | [getLinkFileStatus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__getLinkFileStatus-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path) |  Obtains the file status.   
static long | [getSystemConfig](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__getSystemConfig-int-)​(int name) |  Obtains the system configuration at runtime.   
static int | [getUID](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__getUID--)​() |  Obtains the user ID of the calling process.   
static int | [readFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__readFile-java_io_FileDescriptor-byte:A-int-int-)​([FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) fd, byte[] bytes, int byteOffset, int byteCount) |  Reads a specified number of bytes from the specified file and saves the bytes to the specified byte array.   
static int | [readFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__readFile-java_io_FileDescriptor-java_nio_ByteBuffer-)​([FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) fd, [ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) buffer) |  Reads data from the specified file and saves the data to the specified byte buffer.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [readSymbolicLink](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__readSymbolicLink-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path) |  Obtains the target file path to which the symbolic link points.   
static void | [removeFileExtendedAttribute](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__removeFileExtendedAttribute-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name) |  Removes the specified extended attribute of the specified file.   
static void | [setEnvironmentVar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__setEnvironmentVar-java_lang_String-java_lang_String-boolean-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value, boolean overwrite) |  Replaces or adds the specified environment variable.   
static void | [setFileExtendedAttribute](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__setFileExtendedAttribute-java_lang_String-java_lang_String-byte:A-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name, byte[] value, int flag) |  Sets the specified extended attribute of the specified file, directory, or symbolic link.   
static long | [setFileOperationPos](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__setFileOperationPos-java_io_FileDescriptor-long-int-)​([FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) fd, long offset, int whence) |  Sets the offset of the read or write position in the specified file based on offset and whence.   
static int | [setProcessOption](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__setProcessOption-int-long-long-long-long-)​(int option, long arg2, long arg3, long arg4, long arg5) |  Sets the specified option for the calling process.   
static void | [symbolLink](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__symbolLink-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) oldPath, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) newPath) |  Creates a symbolic link to the target file.   
static void | [trimFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__trimFile-long-java_io_FileDescriptor-)​(long targetFileSize, [FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) fileDescriptor) |  Truncates a given file to the specified size.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Method Detail

#### [h2]readSymbolicLink

public static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) readSymbolicLink​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Obtains the target file path to which the symbolic link points. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
path  |  Indicates the symbolic link.  
  
**Returns:**

Returns the target file path.

**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution.  
  
**Since:**

3

#### [h2]getFileStatus

public static [FileStat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filestat-0000001054440277) getFileStatus​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Obtains file status information. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
path  |  Indicates the file path.  
  
**Returns:**

Returns the [FileStat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filestat-0000001054440277) object storing the file status information.

**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution.  
  
**Since:**

3

#### [h2]getFileStatus

public static [FileStat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filestat-0000001054440277) getFileStatus​([FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) fd) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Obtains the file status. This method is identical to [getFileStatus(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__getFileStatus-java_lang_String-), except that the file is specified by the file descriptor in this method. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
fd  |  Indicates the file descriptor.  
  
**Returns:**

Returns the file status.

**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution. It contains the specific error message.  
  
**Since:**

3

#### [h2]getLinkFileStatus

public static [FileStat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filestat-0000001054440277) getLinkFileStatus​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Obtains the file status. This method is identical to [getFileStatus(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__getFileStatus-java_lang_String-), except that if the file path is a symbolic link, this method returns information about the link rather than the file the link points to. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
path  |  Indicates the file path.  
  
**Returns:**

Returns the file status.

**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution. It contains the specific error message.  
  
**Since:**

3

#### [h2]symbolLink

public static void symbolLink​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) oldPath, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) newPath) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Creates a symbolic link to the target file. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
oldPath  |  Indicates the target file path.  
newPath  |  Indicates the symbolic link to the target file.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution.  
  
**Since:**

3

#### [h2]getSystemConfig

public static long getSystemConfig​(int name)

Obtains the system configuration at runtime. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
name  |  Indicates the name of the system configuration to obtain.  
  
**Returns:**

Returns the system configuration.

**Since:**

3

#### [h2]setFileExtendedAttribute

public static void setFileExtendedAttribute​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name, byte[] value, int flag) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Sets the specified extended attribute of the specified file, directory, or symbolic link. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
path  |  Indicates the file path.  
name  |  Indicates the name of the extended attribute to set.  
value  |  Indicates the value of the extended attribute to set.  
flag  |  Specifies whether to create or update the extended attribute. Value 0 indicates creating or updating the extended attribute; value 1 indicates only creating the extended attribute(the creation fails if the extended attribute already exists); value 2 indicates only updating the extended attribute (the update fails if the extended attribute does not exist).  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution. It contains the specific error message.  
  
**Since:**

3

#### [h2]setEnvironmentVar

public static void setEnvironmentVar​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value, boolean overwrite) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Replaces or adds the specified environment variable. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
name  |  Indicates the name of the environment variable.  
value  |  Indicates the value of the environment variable.  
overwrite  |  Specifies whether to overwrite the value of the existing environment variable. This parameter takes effect only when the environment variable already exists. If this parameter is set to 0, the value of the existing environment variable will not be overwritten; otherwise, the value of the existing environment variable will be overwritten.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution. It contains the specific error message.  
  
**Since:**

3

#### [h2]removeFileExtendedAttribute

public static void removeFileExtendedAttribute​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Removes the specified extended attribute of the specified file. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
path  |  Indicates the file path.  
name  |  Indicates the name of the extended attribute.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution. It contains the specific error message.  
  
**Since:**

3

#### [h2]changeFileName

public static void changeFileName​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) oldPath, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) newPath) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Changes the file name. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
oldPath  |  Indicates the current file name.  
newPath  |  Indicates the new file name.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution. It contains the specific error message.  
  
**Since:**

3

#### [h2]readFile

public static int readFile​([FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) fd, [ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) buffer) throws [InterruptedIOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/interruptedioexception-0000001054238437), [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Reads data from the specified file and saves the data to the specified byte buffer. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
fd  |  Indicates the file descriptor.  
buffer  |  Indicates the byte buffer to which the data is saved.  
  
**Returns:**

Returns the number of bytes read.

**Throws:**

Throw Name | Throw Description  
---|---  
[InterruptedIOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/interruptedioexception-0000001054238437) |  Throws this exception if I/O transfer is terminated.  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution. It contains the specific error message.  
  
**Since:**

3

#### [h2]readFile

public static int readFile​([FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) fd, byte[] bytes, int byteOffset, int byteCount) throws [InterruptedIOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/interruptedioexception-0000001054238437), [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Reads a specified number of bytes from the specified file and saves the bytes to the specified byte array. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
fd  |  Indicates the file descriptor.  
bytes  |  Indicates the byte array to which the data is saved.  
byteOffset  |  Indicates the position to start saving data.  
byteCount  |  Indicates the number of bytes to read.  
  
**Returns:**

Returns the number of bytes read.

**Throws:**

Throw Name | Throw Description  
---|---  
[InterruptedIOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/interruptedioexception-0000001054238437) |  Throws this exception if I/O transfer is terminated.  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution. It contains the specific error message.  
  
**Since:**

3

#### [h2]setProcessOption

public static int setProcessOption​(int option, long arg2, long arg3, long arg4, long arg5) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Sets the specified option for the calling process. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
option  |  Indicates the option to set.  
arg2  |  Indicates an argument of the option.  
arg3  |  Indicates an argument of the option.  
arg4  |  Indicates an argument of the option.  
arg5  |  Indicates an argument of the option.  
  
**Returns:**

Returns the option setting result.

**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution. It contains the specific error message.  
  
**Since:**

3

#### [h2]allocSpaceForFile

public static void allocSpaceForFile​([FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) fd, long offset, long length) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Allocates disk space for a file. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
fd  |  Indicates the file descriptor.  
offset  |  Indicates the offset from the start position for allocating disk space.  
length  |  Indicates the disk space to allocate, in bytes.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution. It contains the specific error message.  
  
**Since:**

3

#### [h2]setFileOperationPos

public static long setFileOperationPos​([FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) fd, long offset, int whence) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Sets the offset of the read or write position in the specified file based on offset and whence. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
fd  |  Indicates the file descriptor.  
offset  |  Indicates the offset.  
whence  |  Indicates whence. The value can be SEEK_SET (the result offset is the value of offset), SEEK_CUR (the result offset is the current position plus the value of offset), or SEEK_END (the result offset is the file size plus the value of offset).  
  
**Returns:**

Returns the result offset of the read or write position if it is set successfully; returns -1 otherwise.

**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution. It contains the specific error message.  
  
**Since:**

3

#### [h2]getUID

public static int getUID​()

Obtains the user ID of the calling process. 

**Returns:**

Returns the user ID of the calling process.

**Since:**

3

#### [h2]copyFileDescriptor

public static [FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) copyFileDescriptor​([FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) oldFd, int newFd) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Copies the specified file descriptor. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
oldFd  |  Indicates the file descriptor to copy.  
newFd  |  Indicates the new file descriptor.  
  
**Returns:**

Returns the new file descriptor.

**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution. It contains the specific error message.  
  
**Since:**

3

#### [h2]closeFile

public static void closeFile​([FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) fd) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Closes the file referred to by the specified file descriptor. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
fd  |  Indicates the file descriptor.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution. It contains the specific error message.  
  
**Since:**

3

#### [h2]changeFilePermission

public static void changeFilePermission​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path, int mode) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Changes the file permission. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
path  |  Indicates the file path.  
mode  |  Indicates the permission to set, for example, [OsHelperConstants#S_IROTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__S_IROTH).  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution. It contains the specific error message.  
  
**Since:**

3

#### [h2]checkFilePermission

public static boolean checkFilePermission​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path, int mode) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Checks whether the user can access the specified file. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
path  |  Indicates the file path.  
mode  |  Indicates the permission to check, for example, [OsHelperConstants#F_OK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__F_OK).  
  
**Returns:**

Returns true if the user can access the specified file; returns false otherwise.

**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution. It contains the specific error message.  
  
**Since:**

3

#### [h2]trimFile

public static void trimFile​(long targetFileSize, [FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) fileDescriptor) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Truncates a given file to the specified size. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
targetFileSize  |  Indicates the target file size.  
fileDescriptor  |  Indicates the descriptor of the file to truncate.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution. It contains the specific error message.  
  
**Since:**

4

#### [h2]copyFileDescriptor

public static [FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) copyFileDescriptor​([FileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filedescriptor-0000001054119688) fileDescriptor) throws [OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993)

Copies a file descriptor. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
fileDescriptor  |  Indicates the file descriptor to copy.  
  
**Returns:**

Returns the copy of the file descriptor.

**Throws:**

Throw Name | Throw Description  
---|---  
[OsHelperErrnoException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelpererrnoexception-0000001054558993) |  Throws this exception if an error occurs during the execution. It contains the specific error message.  
  
**Since:**

4
