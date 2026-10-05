---
name: document/cn/doc-references/oshelperconstants-0000001054519004
title: OsHelperConstants
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/oshelperconstants-0000001054519004
source: portal
---

# OsHelperConstants

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.system.OsHelperConstants
    
    public final class OsHelperConstants
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Provides methods and constants related to the [OsHelper](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264) class.

**Since:**

3

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static int | [_SC_CLK_TCK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__Z:Z_SC_CLK_TCK) |  Used in the [OsHelper#getSystemConfig(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__getSystemConfig-int-) method for querying the number of clock ticks per second.   
static int | [EEXIST](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__EEXIST) |  Error value indicating that the file does not exist.   
static int | [ENOENT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__ENOENT) |  Error value indicating that the file or directory does not exist.   
static int | [ENOSPC](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__ENOSPC) |  Error value indicating that there is no space available on the device.   
static int | [EXDEV](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__EXDEV) |  Error value returned when trying to establish a cross-device link.   
static int | [F_OK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__F_OK) |  File permission mode used to check whether a file exists.   
static int | [PR_SET_DUMPABLE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__PR_SET_DUMPABLE) |  A flag set for a process that determines whether the process performs core dump when it receives such a default signal.   
static int | [R_OK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__R_OK) |  File permission mode used to check whether a file exists, and give read permissions.   
static int | [S_IRGRP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__S_IRGRP) |  File permission mode to specify whether a file can be read group.   
static int | [S_IROTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__S_IROTH) |  File permission mode to specify whether a file can be read by other users.   
static int | [S_IRUSR](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__S_IRUSR) |  File permission mode to specify whether a file can be read by user.   
static int | [S_IRWXG](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__S_IRWXG) |  File permission mode to specify whether a file can be read、written and executed by group.   
static int | [S_IRWXO](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__S_IRWXO) |  File permission mode to specify whether a file can be read、written and executed by others.   
static int | [S_IRWXU](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__S_IRWXU) |  File permission mode to specify whether a file can be read、written and executed by owner.   
static int | [S_ISUID](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__S_ISUID) |  Set user id.   
static int | [S_ISVTX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__S_ISVTX) |  The permissions for file holders, can renamed or deleted.   
static int | [S_IWGRP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__S_IWGRP) |  File permission mode to specify whether a file can be written by user.   
static int | [S_IWOTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__S_IWOTH) |  File permission mode to specify whether a file can be written by others.   
static int | [S_IWUSR](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__S_IWUSR) |  File permission mode to specify whether a file can be written by owner.   
static int | [S_IXGRP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__S_IXGRP) |  File permission mode to specify whether a file can be executed or searched by other members in the group to which the file owner belongs.   
static int | [S_IXOTH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__S_IXOTH) |  File permission mode to specify whether a file can be executed or searched by other users.   
static int | [S_IXUSR](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__S_IXUSR) |  File permission mode to specify whether a file can be executed or searched by the file owner.   
static int | [SEEK_CUR](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__SEEK_CUR) |  File offset, current position plus offset   
static int | [SEEK_END](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__SEEK_END) |  Set the file offset to be offset add the size of file.   
static int | [SEEK_SET](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__SEEK_SET) |  File operation mode, which is used together with the offset value to specify the offset of the file operation position.   
static int | [SO_SNDTIMEO](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__SO_SNDTIMEO) |  A socket option to specify the sending timeout, upon which an error is reported.   
static int | [SOL_SOCKET](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__SOL_SOCKET) |  Used as a level option to obtain or set the attribute of the socket level.   
static int | [W_OK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__W_OK) |  File permission mode used to check whether a file exists, and give write permissions.   
static int | [X_OK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__X_OK) |  File permission mode used to check whether a file exists, and give execute permissions.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
static boolean | [isDir](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__isDir-int-)​(int mode) |  Checks whether the file is a directory based on the specified file mode.   
static boolean | [isRegularFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelperconstants-0000001054519004#ZH-CN_TOPIC_0000001054519004__isRegularFile-int-)​(int mode) |  Checks whether the file is a regular file based on the specified file mode.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]EEXIST

public static final int EEXIST

Error value indicating that the file does not exist. 

**Since:**

3

#### [h2]ENOENT

public static final int ENOENT

Error value indicating that the file or directory does not exist. 

**Since:**

3

#### [h2]ENOSPC

public static final int ENOSPC

Error value indicating that there is no space available on the device. 

**Since:**

3

#### [h2]EXDEV

public static final int EXDEV

Error value returned when trying to establish a cross-device link. 

**Since:**

3

#### [h2]F_OK

public static final int F_OK

File permission mode used to check whether a file exists. 

**Since:**

3

#### [h2]PR_SET_DUMPABLE

public static final int PR_SET_DUMPABLE

A flag set for a process that determines whether the process performs core dump when it receives such a default signal. 

**Since:**

3

#### [h2]R_OK

public static final int R_OK

File permission mode used to check whether a file exists, and give read permissions. 

**Since:**

3

#### [h2]SEEK_CUR

public static final int SEEK_CUR

File offset, current position plus offset 

**Since:**

3

#### [h2]SEEK_END

public static final int SEEK_END

Set the file offset to be offset add the size of file. 

**Since:**

3

#### [h2]SEEK_SET

public static final int SEEK_SET

File operation mode, which is used together with the offset value to specify the offset of the file operation position. 

**Since:**

3

#### [h2]SOL_SOCKET

public static final int SOL_SOCKET

Used as a level option to obtain or set the attribute of the socket level. 

**Since:**

3

#### [h2]SO_SNDTIMEO

public static final int SO_SNDTIMEO

A socket option to specify the sending timeout, upon which an error is reported. 

**Since:**

3

#### [h2]S_IRGRP

public static final int S_IRGRP

File permission mode to specify whether a file can be read group. 

**Since:**

3

#### [h2]S_IROTH

public static final int S_IROTH

File permission mode to specify whether a file can be read by other users. 

**Since:**

3

#### [h2]S_IRUSR

public static final int S_IRUSR

File permission mode to specify whether a file can be read by user. 

**Since:**

3

#### [h2]S_IRWXG

public static final int S_IRWXG

File permission mode to specify whether a file can be read、written and executed by group. 

**Since:**

3

#### [h2]S_IRWXO

public static final int S_IRWXO

File permission mode to specify whether a file can be read、written and executed by others. 

**Since:**

3

#### [h2]S_IRWXU

public static final int S_IRWXU

File permission mode to specify whether a file can be read、written and executed by owner. 

**Since:**

3

#### [h2]S_ISUID

public static final int S_ISUID

Set user id. 

**Since:**

3

#### [h2]S_ISVTX

public static final int S_ISVTX

The permissions for file holders, can renamed or deleted. 

**Since:**

3

#### [h2]S_IWGRP

public static final int S_IWGRP

File permission mode to specify whether a file can be written by user. 

**Since:**

3

#### [h2]S_IWOTH

public static final int S_IWOTH

File permission mode to specify whether a file can be written by others. 

**Since:**

3

#### [h2]S_IWUSR

public static final int S_IWUSR

File permission mode to specify whether a file can be written by owner. 

**Since:**

3

#### [h2]S_IXGRP

public static final int S_IXGRP

File permission mode to specify whether a file can be executed or searched by other members in the group to which the file owner belongs. 

**Since:**

3

#### [h2]S_IXOTH

public static final int S_IXOTH

File permission mode to specify whether a file can be executed or searched by other users. 

**Since:**

3

#### [h2]S_IXUSR

public static final int S_IXUSR

File permission mode to specify whether a file can be executed or searched by the file owner. 

**Since:**

3

#### [h2]W_OK

public static final int W_OK

File permission mode used to check whether a file exists, and give write permissions. 

**Since:**

3

#### [h2]X_OK

public static final int X_OK

File permission mode used to check whether a file exists, and give execute permissions. 

**Since:**

3

#### [h2]_SC_CLK_TCK

public static final int _SC_CLK_TCK

Used in the [OsHelper#getSystemConfig(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/oshelper-0000001054200264#ZH-CN_TOPIC_0000001054200264__getSystemConfig-int-) method for querying the number of clock ticks per second. 

**Since:**

3

#### Method Detail

#### [h2]isRegularFile

public static boolean isRegularFile​(int mode)

Checks whether the file is a regular file based on the specified file mode. This method corresponds to the S_ISREG macro in the Linux sys/stat.h file. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
mode  |  Indicates the file mode.  
  
**Returns:**

Returns true if the file is a regular file; returns false otherwise.

**Since:**

3

#### [h2]isDir

public static boolean isDir​(int mode)

Checks whether the file is a directory based on the specified file mode. This method corresponds to the S_ISDIR macro in the Linux sys/stat.h file. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
mode  |  Indicates the file mode.  
  
**Returns:**

Returns true if the file is a directory; returns false otherwise.

**Since:**

3
