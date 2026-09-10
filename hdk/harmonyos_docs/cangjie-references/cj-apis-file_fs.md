---
name: cangjie-references/cj-apis-file_fs
title: ohos.file.fs（文件管理）
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-file_fs
nodePath: 应用框架 / Core File Kit（文件基础服务） / 仓颉API / ohos.file.fs（文件管理）
---

# ohos.file.fs（文件管理）

fs模块提供基础文件操作能力，包括文件基本管理、文件目录管理、文件信息统计、文件流式读写等常用功能。

#### 导入模块
    
    
    import kit.CoreFileKit.*

#### 使用说明

API示例代码使用说明：

  * 若示例代码首行有“// index.cj”注释，表示该示例可在仓颉模板工程的“index.cj”文件中编译运行。
  * 若示例需获取[Context](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#class-context)应用上下文，需在仓颉模板工程中的“main_ability.cj”文件中进行配置。
  * 获取当前应用沙箱所在路径可通过UIAbilityContext.[filesDir](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-app-ability-ui_ability#prop-filesdir)获取。



上述示例工程及配置模板详见[仓颉示例代码说明](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-development-intro#仓颉示例代码说明)。

#### class ConflictFiles
    
    
    public class ConflictFiles {
        public var srcFile: String
        public var destFile: String
    }

**功能：** 冲突文件信息，支持copyDir及moveDir接口使用。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var destFile
    
    
    public var destFile: String

**功能：** 目标冲突文件路径。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var srcFile
    
    
    public var srcFile: String

**功能：** 源冲突文件路径。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### class File
    
    
    public class File {}

**功能：** 由open接口打开的File对象。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]prop fd
    
    
    public prop fd: Int32

**功能：** 打开的文件描述符。

**类型：** Int32

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]prop name
    
    
    public prop name: String

**功能：** 文件名。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]prop path
    
    
    public prop path: String

**功能：** 文件路径。

**类型：** String

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]func getParent()
    
    
    public func getParent(): String

**功能：** 获取File对象对应文件父目录。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
String | 返回父目录路径。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900005 | I/O error.  
13900042 | Unknown error.  
14300002 | Invalid URI.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let file = FileIo.open(filePath, mode: (OpenMode.READ_WRITE | OpenMode.CREATE))
        Hilog.info(0, "", "The parent path is: " + file.getParent())
        FileIo.close(file)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func tryLock(Bool)
    
    
    public func tryLock(exclusive!: Bool = false): Unit

**功能：** 文件非阻塞式施加共享锁或独占锁。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
exclusive | Bool | 否 | false | **命名参数。** 是否施加独占锁，默认false。true：施加独占锁；false：不施加独占锁。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900004 | Interrupted system call.  
13900008 | Bad file descriptor.  
13900020 | Invalid argument.  
13900034 | Operation would block.  
13900042 | Unknown error.  
13900043 | No record locks available.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let file = FileIo.open(filePath, mode:(OpenMode.READ_WRITE | OpenMode.CREATE))
        file.tryLock(exclusive: true)
        FileIo.close(file)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func unlock()
    
    
    public func unlock(): Unit

**功能：** 解锁文件。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900004 | Interrupted system call.  
13900008 | Bad file descriptor.  
13900020 | Invalid argument.  
13900034 | Operation would block.  
13900042 | Unknown error.  
13900043 | No record locks available.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let file = FileIo.open(filePath, mode: (OpenMode.READ_WRITE | OpenMode.CREATE))
        file.tryLock(exclusive: true)
        file.unlock()
        FileIo.close(file)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class FileIo
    
    
    public class FileIo {}

**功能：** 提供文件基础操作的能力。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]static func access(String, AccessModeType, AccessFlagType)
    
    
    public static func access(path: String, mode!: AccessModeType = AccessModeType.Exist,
        flag!: AccessFlagType = AccessFlagType.Local): Bool

**功能：** 检查文件或目录是否在本地，或校验操作权限。

校验读、写或读写权限不通过会抛出13900012（Permission denied）错误码。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
path | String | 是 | - | 文件或目录应用沙箱路径。  
mode | AccessModeType | 否 | AccessModeType.Exist | **命名参数。** 文件或目录校验的权限。  
flag | AccessFlagType | 否 | AccessFlagType.Local | **命名参数。** 文件或目录校验的位置。  
  
**返回值：**

类型 | 说明  
---|---  
Bool | 返回布尔值。返回true，表示文件或目录在本地且校验权限存在；返回false，表示文件或目录不存在或者文件或目录在云端或其他分布式设备上。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900002 | No such file or directory.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900018 | Not a directory.  
13900020 | Invalid argument.  
13900023 | Text file busy.  
13900030 | File name too long.  
13900033 | Too many symbolic links encountered.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    let pathDir = "path/to/file"
    let filePath = pathDir + "/test.txt"
    try {
        let res = FileIo.access(filePath, mode: AccessModeType.Write, flag: AccessFlagType.Local)
        if (res) {
            Hilog.info(0, "test", "file exists", "")
        } else {
            Hilog.info(0, "test", "file not exists", "")
        }
    } catch (e: BusinessException) {
        Hilog.error(0, "test", "access failed with error message: ${e.message}, error code: ${e.code}", "")
    }

#### [h2]static func close(Int32)
    
    
    public static func close(file: Int32): Unit

**功能：** 关闭文件。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
file | Int32 | 是 | - | 已打开的文件描述符fd。关闭后文件描述符fd不再具备实际意义，不可再用于进行读写等操作。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900025 | No space left on device.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let file = FileIo.open(filePath)
        FileIo.close(file.fd)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func close(File)
    
    
    public static func close(file: File): Unit

**功能：** 关闭文件。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
file | File | 是 | - | 已打开的File对象，关闭后file对象不再具备实际意义，不可再用于进行读写等操作。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900025 | No space left on device.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let file = FileIo.open(filePath)
        FileIo.close(file)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func copyDir(String, String, Int32)
    
    
    public static func copyDir(src: String, dest: String, mode!: Int32 = 0): Unit

**功能：** 复制源文件夹至目标路径下。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
src | String | 是 | - | 源文件夹的应用沙箱路径。  
dest | String | 是 | - | 目标文件夹的应用沙箱路径。  
mode | Int32 | 否 | 0 |  **命名参数。** 复制模式，默认值为0。 \- mode为0，文件级别抛异常。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部移动至目标目录下，目标目录下未冲突文件将继续保留，且冲突文件信息将在抛出异常的data属性中以Array<ConflictFiles>形式提供。 \- mode为1，文件级别强制覆盖。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件，未冲突文件将继续保留。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900002 | No such file or directory.  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900010 | Try again.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900015 | File exists.  
13900018 | Not a directory.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900030 | File name too long.  
13900031 | Function not implemented.  
13900033 | Too many symbolic links encountered.  
13900034 | Operation would block.  
13900038 | Value too large for defined data type.  
13900042 | Unknown error.  
13900044 | Network is unreachable.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let srcPath = pathDir + "/srcDir/"
        let destPath = pathDir + "/destDir/"
        FileIo.copyDir(srcPath, destPath, mode: 0)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func copyFile(String, String, Int32)
    
    
    public static func copyFile(src: String, dest: String, mode!: Int32 = 0): Unit

**功能：** 复制文件。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
src | String | 是 | - | 待复制文件的路径。  
dest | String | 是 | - | 目标文件路径。  
mode | Int32 | 否 | 0 |  **命名参数。** mode提供覆盖文件的选项，当前仅支持0，且默认为0。 0：完全覆盖目标文件，未覆盖部分将被裁切掉。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900002 | No such file or directory.  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900010 | Try again.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900018 | Not a directory.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900030 | File name too long.  
13900031 | Function not implemented.  
13900033 | Too many symbolic links encountered.  
13900034 | Operation would block.  
13900038 | Value too large for defined data type.  
13900042 | Unknown error.  
13900044 | Network is unreachable.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let srcPath = pathDir + "/srcDir/test.txt"
        let dstPath = pathDir + "/dstDir/test.txt"
        FileIo.copyFile(srcPath, dstPath, mode: 0)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func copyFile(String, Int32, Int32)
    
    
    public static func copyFile(src: String, dest: Int32, mode!: Int32 = 0): Unit

**功能：** 复制文件。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
src | String | 是 | - | 待复制文件的路径。  
dest | Int32 | 是 | - | 目标文件的文件描述符。  
mode | Int32 | 否 | 0 |  **命名参数。** mode提供覆盖文件的选项，当前仅支持0，且默认为0。 0：完全覆盖目标文件，未覆盖部分将被裁切掉。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900002 | No such file or directory.  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900010 | Try again.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900018 | Not a directory.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900030 | File name too long.  
13900031 | Function not implemented.  
13900033 | Too many symbolic links encountered.  
13900034 | Operation would block.  
13900038 | Value too large for defined data type.  
13900042 | Unknown error.  
13900044 | Network is unreachable.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let srcPath = pathDir + "/srcDir/test.txt"
        let dstPath = pathDir + "/dstDir/test.txt"
        let dstFile = FileIo.open(dstPath)
        FileIo.copyFile(srcPath, dstFile.fd, mode: 0)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func copyFile(Int32, String, Int32)
    
    
    public static func copyFile(src: Int32, dest: String, mode!: Int32 = 0): Unit

**功能：** 复制文件。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
src | Int32 | 是 | - | 待复制文件的文件描述符。  
dest | String | 是 | - | 目标文件路径。  
mode | Int32 | 否 | 0 |  **命名参数。** mode提供覆盖文件的选项，当前仅支持0，且默认为0。 0：完全覆盖目标文件，未覆盖部分将被裁切掉。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900002 | No such file or directory.  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900010 | Try again.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900018 | Not a directory.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900030 | File name too long.  
13900031 | Function not implemented.  
13900033 | Too many symbolic links encountered.  
13900034 | Operation would block.  
13900038 | Value too large for defined data type.  
13900042 | Unknown error.  
13900044 | Network is unreachable.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let srcPath = pathDir + "/srcDir/test.txt"
        let dstPath = pathDir + "/dstDir/test.txt"
        let srcFile = FileIo.open(srcPath)
        FileIo.copyFile(srcFile.fd, dstPath, mode: 0)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func copyFile(Int32, Int32, Int32)
    
    
    public static func copyFile(src: Int32, dest: Int32, mode!: Int32 = 0): Unit

**功能：** 复制文件。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
src | Int32 | 是 | - | 待复制文件的文件描述符。  
dest | Int32 | 是 | - | 目标文件的文件描述符。  
mode | Int32 | 否 | 0 |  **命名参数。** mode提供覆盖文件的选项，当前仅支持0，且默认为0。 0：完全覆盖目标文件，未覆盖部分将被裁切掉。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900002 | No such file or directory.  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900010 | Try again.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900018 | Not a directory.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900030 | File name too long.  
13900031 | Function not implemented.  
13900033 | Too many symbolic links encountered.  
13900034 | Operation would block.  
13900038 | Value too large for defined data type.  
13900042 | Unknown error.  
13900044 | Network is unreachable.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let srcPath = pathDir + "/srcDir/test.txt"
        let dstPath = pathDir + "/dstDir/test.txt"
        let srcFile = FileIo.open(srcPath)
        let dstFile = FileIo.open(dstPath)
        FileIo.copyFile(srcFile.fd, dstFile.fd, mode: 0)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func createRandomAccessFile(String, Int64, RandomAccessFileOptions)
    
    
    public static func createRandomAccessFile(file: String, mode!: Int64 = OpenMode.READ_ONLY,
        options!: RandomAccessFileOptions = RandomAccessFileOptions()): RandomAccessFile

**功能：** 基于文件路径创建RandomAccessFile文件对象。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
file | String | 是 | - | 文件的应用沙箱路径。  
mode | Int64 | 否 | OpenMode.READ_ONLY |  **命名参数。** 创建文件RandomAccessFile对象的选项，仅当传入文件沙箱路径时生效，必须指定如下选项中的一个，默认以只读方式创建： \- OpenMode.READ_ONLY(0o0)：只读创建。 \- OpenMode.WRITE_ONLY(0o1)：只写创建。 \- OpenMode.READ_WRITE(0o2)：读写创建。 给定如下功能选项，以按位或的方式追加，默认不给定任何额外选项： \- OpenMode.CREATE(0o100)：若文件不存在，则创建文件。 \- OpenMode.TRUNC(0o1000)：如果RandomAccessFile对象存在且文件具有写权限，则将其长度裁剪为零。 \- OpenMode.APPEND(0o2000)：以追加方式打开，后续写将追加到RandomAccessFile对象末尾。 \- OpenMode.NONBLOCK(0o4000)：如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续 IO 进行非阻塞操作。 \- OpenMode.DIR(0o200000)：如果path不指向目录，则出错。不允许附加写权限。 \- OpenMode.NOFOLLOW(0o400000)：如果path指向符号链接，则出错。 \- OpenMode.SYNC(0o4010000)：以同步IO的方式创建RandomAccessFile对象。  
options | RandomAccessFileOptions | 否 | RandomAccessFileOptions() |  **命名参数。** 支持如下选项： \- start，Option<Int64>类型，表示期望读取文件的位置。可选，默认从当前位置开始读。 \- end，Option<Int64>类型，表示期望读取结束的位置。可选，默认文件末尾。  
  
**返回值：**

类型 | 说明  
---|---  
RandomAccessFile | 返回RandomAccessFile文件对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900002 | No such file or directory.  
13900004 | Interrupted system call.  
13900006 | No such device or address.  
13900008 | Bad file descriptor.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900014 | Device or resource busy.  
13900015 | File exists.  
13900017 | No such device.  
13900018 | Not a directory.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900022 | Too many open files.  
13900023 | Text file busy.  
13900024 | File too large.  
13900025 | No space left on device.  
13900027 | Read-only file system.  
13900029 | Resource deadlock would occur.  
13900030 | File name too long.  
13900033 | Too many symbolic links encountered.  
13900034 | Operation would block.  
13900038 | Value too large for defined data type.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
13900044 | Network is unreachable.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let file = FileIo.open(filePath, mode: (OpenMode.CREATE | OpenMode.READ_WRITE))
        FileIo.write(file.fd, "hello world")
        FileIo.fdatasync(file.fd)
        let randomAccessFile = FileIo.createRandomAccessFile(filePath)
        randomAccessFile.close()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func createRandomAccessFile(File, Int64, RandomAccessFileOptions)
    
    
    public static func createRandomAccessFile(file: File, mode!: Int64 = OpenMode.READ_ONLY,
        options!: RandomAccessFileOptions = RandomAccessFileOptions()): RandomAccessFile

**功能：** 基于文件对象创建RandomAccessFile文件对象。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
file | File | 是 | - | 已打开的File对象。  
mode | Int64 | 否 | OpenMode.READ_ONLY |  **命名参数。** 创建文件RandomAccessFile对象的选项，仅当传入文件沙箱路径时生效，必须指定如下选项中的一个，默认以只读方式创建： \- OpenMode.READ_ONLY(0o0)：只读创建。 \- OpenMode.WRITE_ONLY(0o1)：只写创建。 \- OpenMode.READ_WRITE(0o2)：读写创建。 给定如下功能选项，以按位或的方式追加，默认不给定任何额外选项： \- OpenMode.CREATE(0o100)：若文件不存在，则创建文件。 \- OpenMode.TRUNC(0o1000)：如果RandomAccessFile对象存在且文件具有写权限，则将其长度裁剪为零。 \- OpenMode.APPEND(0o2000)：以追加方式打开，后续写将追加到RandomAccessFile对象末尾。 \- OpenMode.NONBLOCK(0o4000)：如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续 IO 进行非阻塞操作。 \- OpenMode.DIR(0o200000)：如果path不指向目录，则出错。不允许附加写权限。 \- OpenMode.NOFOLLOW(0o400000)：如果path指向符号链接，则出错。 \- OpenMode.SYNC(0o4010000)：以同步IO的方式创建RandomAccessFile对象。  
options | RandomAccessFileOptions | 否 | RandomAccessFileOptions() |  **命名参数。** 支持如下选项： \- start，Option<Int64>类型，表示期望读取文件的位置。可选，默认从当前位置开始读。 \- end，Option<Int64>类型，表示期望读取结束的位置。可选，默认文件末尾。  
  
**返回值：**

类型 | 说明  
---|---  
RandomAccessFile | 返回RandomAccessFile文件对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900002 | No such file or directory.  
13900004 | Interrupted system call.  
13900006 | No such device or address.  
13900008 | Bad file descriptor.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900014 | Device or resource busy.  
13900015 | File exists.  
13900017 | No such device.  
13900018 | Not a directory.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900022 | Too many open files.  
13900023 | Text file busy.  
13900024 | File too large.  
13900025 | No space left on device.  
13900027 | Read-only file system.  
13900029 | Resource deadlock would occur.  
13900030 | File name too long.  
13900033 | Too many symbolic links encountered.  
13900034 | Operation would block.  
13900038 | Value too large for defined data type.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
13900044 | Network is unreachable.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let file = FileIo.open(filePath, mode: (OpenMode.CREATE | OpenMode.READ_WRITE))
        FileIo.write(file.fd, "hello world")
        FileIo.fdatasync(file.fd)
        let randomAccessFile = FileIo.createRandomAccessFile(file)
        randomAccessFile.close()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func createStream(String, String)
    
    
    public static func createStream(path: String, mode: String): Stream

**功能：** 基于文件路径创建文件流。需要配合Stream中的close()函数关闭文件流。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
path | String | 是 | - | 文件的应用沙箱路径。  
mode | String | 是 | - |  \- r：打开只读文件，该文件必须存在。 \- r+：打开可读写的文件，该文件必须存在。 \- w：打开只写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。 \- w+：打开可读写文件，若文件存在则文件长度清0，即该文件内容会消失。若文件不存在则建立该文件。 \- a：以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾，即文件原先的内容会被保留。 \- a+：以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾后，即文件原先的内容会被保留。  
  
**返回值：**

类型 | 说明  
---|---  
Stream | 返回文件流的结果。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900002 | No such file or directory.  
13900004 | Interrupted system call.  
13900006 | No such device or address.  
13900008 | Bad file descriptor.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900014 | Device or resource busy.  
13900015 | File exists.  
13900017 | No such device.  
13900018 | Not a directory.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900022 | Too many open files.  
13900023 | Text file busy.  
13900024 | File too large.  
13900025 | No space left on device.  
13900027 | Read-only file system.  
13900029 | Resource deadlock would occur.  
13900030 | File name too long.  
13900033 | Too many symbolic links encountered.  
13900034 | Operation would block.  
13900038 | Value too large for defined data type.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
13900044 | Network is unreachable.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let stream = FileIo.createStream(filePath, "r+")
        Hilog.info(0, "test", "createStream succeed", "")
        stream.close()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func dup(Int32)
    
    
    public static func dup(fd: Int32): File

**功能：** 复制文件描述符，并返回对应的File对象。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
fd | Int32 | 是 | - | 文件描述符。  
  
**返回值：**

类型 | 说明  
---|---  
File | 打开的File对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900014 | Device or resource busy.  
13900020 | Invalid argument.  
13900022 | Too many open files.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let file1 = FileIo.open(filePath, mode: (OpenMode.READ_WRITE | OpenMode.CREATE))
        let fd = file1.fd
        let file2 = FileIo.dup(fd)
        Hilog.info(0, "test", "The name of the file2 is ${file2.name}", "")
        FileIo.close(file1)
        FileIo.close(file2)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func fdatasync(Int32)
    
    
    public static func fdatasync(fd: Int32): Unit

**功能：** 实现文件内容数据同步。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
fd | Int32 | 是 | - | 已打开的文件描述符。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900020 | Invalid argument.  
13900025 | No space left on device.  
13900027 | Read-only file system.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let file = FileIo.open(filePath)
        FileIo.fdatasync(file.fd)
        FileIo.close(file)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func fdopenStream(Int32, String)
    
    
    public static func fdopenStream(fd: Int32, mode: String): Stream

**功能：** 基于文件描述符打开文件流。需要配合Stream中的close()函数关闭文件流。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
fd | Int32 | 是 | - | 已打开的文件描述符。  
mode | String | 是 | - |  \- r：打开只读文件，该文件必须存在。 \- r+：打开可读写的文件，该文件必须存在。 \- w：打开只写文件，若文件存在原文件内容将被覆盖。 \- w+：打开可读写文件，若文件存在原文件内容将被覆盖。 \- a：以附加的方式打开只写文件，写入的数据会被加到文件尾，即文件原先的内容会被保留。 \- a+：以附加方式打开可读写的文件，写入的数据会被加到文件尾后，即文件原先的内容会被保留。  
  
**返回值：**

类型 | 说明  
---|---  
Stream | 返回文件流的结果。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900002 | No such file or directory.  
13900004 | Interrupted system call.  
13900006 | No such device or address.  
13900008 | Bad file descriptor.  
13900010 | Try again.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900014 | Device or resource busy.  
13900015 | File exists.  
13900017 | No such device.  
13900018 | Not a directory.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900022 | Too many open files.  
13900023 | Text file busy.  
13900024 | File too large.  
13900025 | No space left on device.  
13900027 | Read-only file system.  
13900029 | Resource deadlock would occur.  
13900030 | File name too long.  
13900033 | Too many symbolic links encountered.  
13900034 | Operation would block.  
13900038 | Value too large for defined data type.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let file = FileIo.open(filePath, mode: (OpenMode.READ_ONLY | OpenMode.CREATE))
        let stream = FileIo.fdopenStream(file.fd, "r+")
        FileIo.close(file)
        stream.close()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func fsync(Int32)
    
    
    public static func fsync(fd: Int32): Unit

**功能：** 将文件系统缓存数据写入磁盘。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
fd | Int32 | 是 | - | 已打开的文件描述符。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900020 | Invalid argument.  
13900025 | No space left on device.  
13900027 | Read-only file system.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let file = FileIo.open(filePath)
        FileIo.fsync(file.fd)
        FileIo.close(file)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func listFile(String, ListFileOptions)
    
    
    public static func listFile(path: String, options!: ListFileOptions = ListFileOptions()): Array<String>

**功能：** 列出当前目录下所有文件名和目录名。支持过滤。

可通过配置options中recursion参数实现递归列出所有文件的相对路径，相对路径以“/”开头。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
path | String | 是 | - | 目录的应用沙箱路径。  
options | ListFileOptions | 否 | ListFileOptions() | **命名参数。** 文件过滤选项。默认不进行过滤。  
  
**返回值：**

类型 | 说明  
---|---  
Array<String> | 返回文件名数组。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900002 | No such file or directory.  
13900008 | Bad file descriptor.  
13900011 | Out of memory.  
13900018 | Not a directory.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filter = Filter(suffix: [".png", ".jpg", ".jpeg"], displayName: ["*abc", "efg*"])
        let listFileOptions = ListFileOptions(recursion: false, listNum: 0, filter: filter)
        let filenames = FileIo.listFile(pathDir, options: listFileOptions)
        for (name in filenames) {
            Hilog.info(0, "test", name, "")
        }
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func lseek(Int32, Int64, WhenceType)
    
    
    public static func lseek(fd: Int32, offset: Int64, whence!: WhenceType = SeekSet): Int64

**功能：** 调整文件偏置指针位置。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
fd | Int32 | 是 | - | 文件描述符。  
offset | Int64 | 是 | - | 相对偏移位置，单位为字节。  
whence | WhenceType | 否 | SeekSet | **命名参数。** 偏移指针相对位置类型。不指定则默认为文件起始位置处。  
  
**返回值：**

类型 | 说明  
---|---  
Int64 | 当前文件偏移指针位置（相对于文件头的偏移量，单位为字节）。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900008 | Bad file descriptor.  
13900020 | Invalid argument.  
13900026 | Illegal seek.  
13900038 | Value too large for defined data type.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let file = FileIo.open(filePath, mode: OpenMode.CREATE)
        let offset = FileIo.lseek(file.fd, 5, whence: WhenceType.SeekSet)
        Hilog.info(0, "test", "The current offset is at ${offset.toString()}", "")
        FileIo.close(file)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func lstat(String)
    
    
    public static func lstat(path: String): Stat

**功能：** 获取链接文件信息。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
path | String | 是 | - | 文件的应用沙箱路径path或URI。  
  
**返回值：**

类型 | 说明  
---|---  
Stat | 返回Stat对象，表示文件的具体信息，详情见Stat。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900002 | No such file or directory.  
13900008 | Bad file descriptor.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900018 | Not a directory.  
13900030 | File name too long.  
13900033 | Too many symbolic links encountered.  
13900038 | Value too large for defined data type.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/linkToFile"
        let fileStat = FileIo.lstat(filePath)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func mkdir(String)
    
    
    public static func mkdir(path: String): Unit

**功能：** 创建目录。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
path | String | 是 | - | 目录的应用沙箱路径。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900002 | No such file or directory.  
13900008 | Bad file descriptor.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900015 | File exists.  
13900018 | Not a directory.  
13900020 | Invalid argument.  
13900025 | No space left on device.  
13900028 | Too many links.  
13900030 | File name too long.  
13900033 | Too many symbolic links encountered.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let dirPath = pathDir + "/testDir1/testDir2/testDir3"
        FileIo.mkdir(dirPath)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func mkdir(String, Bool)
    
    
    public static func mkdir(path: String, recursion: Bool): Unit

**功能：** 创建目录。当recursion指定为true时，可递归创建目录。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
path | String | 是 | - | 目录的应用沙箱路径。  
recursion | Bool | 是 | - | 是否递归创建目录。recursion指定为true时，可递归创建目录。recursion指定为false时，仅可创建单层目录。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900002 | No such file or directory.  
13900008 | Bad file descriptor.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900015 | File exists.  
13900018 | Not a directory.  
13900020 | Invalid argument.  
13900025 | No space left on device.  
13900028 | Too many links.  
13900030 | File name too long.  
13900033 | Too many symbolic links encountered.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let dirPath = pathDir + "/testDir1/testDir2/testDir3"
        FileIo.mkdir(dirPath, true)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func mkdtemp(String)
    
    
    public static func mkdtemp(prefix: String): String

**功能：** 创建临时目录。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
prefix | String | 是 | - | 指定目录路径，命名时需要以"XXXXXX"作为结尾。路径末尾的"XXXXXX"字符串将被替换为随机字符，以创建唯一的目录名。  
  
**返回值：**

类型 | 说明  
---|---  
String | 返回生成的唯一目录路径。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900002 | No such file or directory.  
13900008 | Bad file descriptor.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900015 | File exists.  
13900018 | Not a directory.  
13900020 | Invalid argument.  
13900025 | No space left on device.  
13900028 | Too many links.  
13900030 | File name too long.  
13900033 | Too many symbolic links encountered.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let res = FileIo.mkdtemp(pathDir + "/XXXXXX")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func moveDir(String, String, Int32)
    
    
    public static func moveDir(src: String, dest: String, mode!: Int32 = 0): Unit

**功能：** 移动源目录至目标路径下。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/9bfYPZ_VQvG_raI8s17xMQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090217Z&HW-CC-Expire=86400&HW-CC-Sign=3BA4241F8FD24AADB1E03083BB2828B417109F141C932848C5F8D5FA89453DFD)

该接口不支持在分布式文件路径下操作。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
src | String | 是 | - | 源文件夹的应用沙箱路径。  
dest | String | 是 | - | 目标文件夹的应用沙箱路径。  
mode | Int32 | 否 | 0 |  **命名参数。** 移动模式，默认值为0。 \- mode为0，目录级别抛异常。若目标目录下存在与源目录名冲突的非空目录，则抛出异常。 \- mode为1，文件级别抛异常。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则抛出异常。源目录下未冲突的文件全部移动至目标目录下，目标目录下未冲突文件将继续保留，且冲突文件信息将在抛出异常的data属性中以Array<ConflictFiles>形式提供。 \- mode为2，文件级别强制覆盖。目标目录下存在与源目录名冲突的目录，若冲突目录下存在同名文件，则强制覆盖冲突目录下所有同名文件，未冲突文件将继续保留。 \- mode为3，目录级别强制覆盖。移动源目录至目标目录下，目标目录下移动的目录内容与源目录完全一致。若目标目录下存在与源目录名冲突的目录，该目录下的所有原始文件将被删除。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900002 | No such file or directory.  
13900008 | Bad file descriptor.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900014 | Device or resource busy.  
13900015 | File exists.  
13900016 | Cross-device link.  
13900018 | Not a directory.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900025 | No space left on device.  
13900027 | Read-only file system.  
13900028 | Too many links.  
13900032 | Directory not empty.  
13900033 | Too many symbolic links encountered.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        // move directory from srcPath to destPath
        let srcPath = pathDir + "/srcDir/"
        let destPath = pathDir + "/destDir/"
        FileIo.moveDir(srcPath, destPath, mode: 1)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func moveFile(String, String, Int32)
    
    
    public static func moveFile(src: String, dest: String, mode!: Int32 = 0): Unit

**功能：** 移动文件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/mTDs_ml4Tbmd7LHFYprqHQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090217Z&HW-CC-Expire=86400&HW-CC-Sign=0EFF8BD3428885D4383FF35D615CB011A6EE65BAFFFB6EED4A286F13871E64BF)

该接口不支持在分布式文件路径下操作。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
src | String | 是 | - | 源文件夹的应用沙箱路径。  
dest | String | 是 | - | 目标文件夹的应用沙箱路径。  
mode | Int32 | 否 | 0 | **命名参数。** 移动模式。若mode为0，移动位置存在同名文件时，强制移动覆盖。若mode为1，移动位置存在同名文件时，抛出异常。默认为0。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900002 | No such file or directory.  
13900008 | Bad file descriptor.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900014 | Device or resource busy.  
13900015 | File exists.  
13900016 | Cross-device link.  
13900018 | Not a directory.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900025 | No space left on device.  
13900027 | Read-only file system.  
13900028 | Too many links.  
13900032 | Directory not empty.  
13900033 | Too many symbolic links encountered.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let srcPath = pathDir + "/srcDir/"
        let destPath = pathDir + "/destDir/"
        FileIo.moveFile(srcPath, destPath, mode: 0)
        Hilog.info(0, "test", "move file succeed", "")
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func open(String, Int64)
    
    
    public static func open(path: String, mode!: Int64 = OpenMode.READ_ONLY): File

**功能：** 打开文件或目录。支持使用URI打开文件。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
path | String | 是 | - | 打开文件或目录的应用沙箱路径或URI。  
mode | Int64 | 否 | OpenMode.READ_ONLY |  **命名参数。** 打开文件或目录的选项，必须指定如下选项中的一个，默认以只读方式打开： \- OpenMode.READ_ONLY(0o0)：只读打开。 \- OpenMode.WRITE_ONLY(0o1)：只写打开。 \- OpenMode.READ_WRITE(0o2)：读写打开。 给定如下功能选项，以按位或的方式追加，默认不给定任何额外选项： \- OpenMode.CREATE(0o100)：若文件不存在，则创建文件。 \- OpenMode.TRUNC(0o1000)：如果文件存在且文件具有写权限，则将其长度裁剪为零。 \- OpenMode.APPEND(0o2000)：以追加方式打开，后续写将追加到文件末尾。 \- OpenMode.NONBLOCK(0o4000)：如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续 IO 进行非阻塞操作。 \- OpenMode.DIR(0o200000)：如果path不指向目录，则出错。不允许附加写权限。 \- OpenMode.NOFOLLOW(0o400000)：如果path指向符号链接，则出错。 \- OpenMode.SYNC(0o4010000)：以同步IO的方式打开文件。  
  
**返回值：**

类型 | 说明  
---|---  
File | 打开的File对象。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900002 | No such file or directory.  
13900004 | Interrupted system call.  
13900006 | No such device or address.  
13900008 | Bad file descriptor.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900014 | Device or resource busy.  
13900015 | File exists.  
13900017 | No such device.  
13900018 | Not a directory.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900022 | Too many open files.  
13900023 | Text file busy.  
13900024 | File too large.  
13900025 | No space left on device.  
13900027 | Read-only file system.  
13900029 | Resource deadlock would occur.  
13900030 | File name too long.  
13900033 | Too many symbolic links encountered.  
13900034 | Operation would block.  
13900038 | Value too large for defined data type.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
13900044 | Network is unreachable.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let file = FileIo.open(filePath, mode: (OpenMode.READ_WRITE | OpenMode.CREATE))
        Hilog.info(0, "test", "open file success, file fd: ${file.fd.toString()}", "")
        FileIo.close(file)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func read(Int32, Array<Byte>, ReadOptions)
    
    
    public static func read(fd: Int32, buffer: Array<Byte>, options!: ReadOptions = ReadOptions()): Int64

**功能：** 从文件读取数据。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
fd | Int32 | 是 | - | 已打开的文件描述符。  
buffer | Array<Byte> | 是 | - | 用于保存读取到的文件数据的缓冲区。  
options | ReadOptions | 否 | ReadOptions() |  **命名参数。** 支持如下选项： \- offset，?Int64类型，表示期望读取文件的位置。默认从当前位置开始读。 \- length，?UIntNative类型，表示期望读取数据的长度。默认缓冲区长度。  
  
**返回值：**

类型 | 说明  
---|---  
Int64 | 返回实际读取的数据长度（单位：字节）。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900010 | Try again.  
13900013 | Bad address.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900034 | Operation would block.  
13900042 | Unknown error.  
13900044 | Network is unreachable.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let file = FileIo.open(filePath, mode: (OpenMode.READ_WRITE | OpenMode.CREATE))
        let buf = Array<Byte>(4096, repeat: 0)
        FileIo.read(file.fd, buf)
        FileIo.close(file)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func readLines(String, Options)
    
    
    public static func readLines(filePath: String, options!: Options = Options()): ReaderIterator

**功能：** 逐行读取文件的文本内容。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
filePath | String | 是 | - | 文件的应用沙箱路径。  
options | Options | 否 | Options() |  **命名参数。** 可选项。支持以下选项： \- encoding，String类型，当数据是 String 类型时有效，表示数据的编码方式，默认 "utf-8"，仅支持 "utf-8"。  
  
**返回值：**

类型 | 说明  
---|---  
ReaderIterator | 返回文件读取迭代器。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900002 | No such file or directory.  
13900012 | Permission denied.  
13900015 | File exists.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900022 | Too many open files.  
13900025 | No space left on device.  
13900027 | Read-only file system.  
13900030 | File name too long.  
13900033 | Too many symbolic links encountered.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
13900044 | Network is unreachable.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let options: Options = Options(encoding: "utf-8")
        let readerIterator = FileIo.readLines(filePath, options: options)
        var result = readerIterator.next()
        while (!result.done) {
            Hilog.info(0, "test", "content: ${result.value}", "")
            result = readerIterator.next()
        }
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func readText(String, ReadTextOptions)
    
    
    public static func readText(filePath: String, options!: ReadTextOptions = ReadTextOptions()): String

**功能：** 基于文本方式读取文件（即直接读取文件的文本内容）。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
filePath | String | 是 | - | 文件的应用沙箱路径。  
options | ReadTextOptions | 否 | ReadTextOptions() |  **命名参数。** 支持如下选项： \- offset，Int64类型，表示期望读取文件的位置。可选，默认从初始位置开始读取。 \- length，Int64类型，表示期望读取数据的长度。可选，默认文件长度。 \- encoding，String类型，当数据是 String 类型时有效，表示数据的编码方式，默认 "utf-8"，仅支持 "utf-8"。  
  
**返回值：**

类型 | 说明  
---|---  
String | 返回读取文件的内容。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900010 | Try again.  
13900013 | Bad address.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900024 | File too large.  
13900025 | No space left on device.  
13900034 | Operation would block.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
13900044 | Network is unreachable.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let str = FileIo.readText(filePath)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func rename(String, String)
    
    
    public static func rename(oldPath: String, newPath: String): Unit

**功能：** 重命名文件或目录。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/pZB_7bXMRdqdrlZUtBpAtw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090217Z&HW-CC-Expire=86400&HW-CC-Sign=43C09AAAE57EF7740EDD838AEA0742D5F0152537935AD9DDDBA6F5069F71F5A2)

该接口不支持在分布式文件路径下操作。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
oldPath | String | 是 | - | 文件的应用沙箱原路径。  
newPath | String | 是 | - | 文件的应用沙箱新路径。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900002 | No such file or directory.  
13900008 | Bad file descriptor.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900014 | Device or resource busy.  
13900015 | File exists.  
13900016 | Cross-device link.  
13900018 | Not a directory.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900025 | No space left on device.  
13900027 | Read-only file system.  
13900028 | Too many links.  
13900032 | Directory not empty.  
13900033 | Too many symbolic links encountered.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let srcFile = pathDir + "/test.txt"
        let dstFile = pathDir + "/new.txt"
        FileIo.rename(srcFile, dstFile)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func rmdir(String)
    
    
    public static func rmdir(path: String): Unit

**功能：** 删除目录及其所有子目录和文件。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
path | String | 是 | - | 目录的应用沙箱路径。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900002 | No such file or directory.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900014 | Device or resource busy.  
13900018 | Not a directory.  
13900020 | Invalid argument.  
13900027 | Read-only file system.  
13900030 | File name too long.  
13900032 | Directory not empty.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let dirPath = pathDir + "/testDir"
        FileIo.rmdir(dirPath)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func stat(Int32)
    
    
    public static func stat(file: Int32): Stat

**功能：** 获取文件或目录详细属性信息。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
file | Int32 | 是 | - | 已打开的文件描述符fd。  
  
**返回值：**

类型 | 说明  
---|---  
Stat | 表示文件或目录的具体信息。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900002 | No such file or directory.  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900018 | Not a directory.  
13900030 | File name too long.  
13900031 | Function not implemented.  
13900033 | Too many symbolic links encountered.  
13900038 | Value too large for defined data type.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let dirPath = pathDir + "/testDir"
        let file = FileIo.open(dirPath)
        FileIo.stat(file.fd)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func stat(String)
    
    
    public static func stat(file: String): Stat

**功能：** 获取文件或目录详细属性信息。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
file | String | 是 | - | 文件或目录的应用沙箱路径path、URI。  
  
**返回值：**

类型 | 说明  
---|---  
Stat | 表示文件或目录的具体信息。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900002 | No such file or directory.  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900018 | Not a directory.  
13900030 | File name too long.  
13900031 | Function not implemented.  
13900033 | Too many symbolic links encountered.  
13900038 | Value too large for defined data type.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let dirPath = pathDir + "/testDir"
        FileIo.stat(dirPath)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func truncate(String, Int64)
    
    
    public static func truncate(file: String, len!: Int64 = 0): Unit

**功能：** 截断文件内容。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
file | String | 是 | - | 文件的应用沙箱路径。  
len | Int64 | 否 | 0 | **命名参数。** 文件截断后的长度（单位：字节）。默认为0。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900002 | No such file or directory.  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900018 | Not a directory.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900023 | Text file busy.  
13900024 | File too large.  
13900027 | Read-only file system.  
13900030 | File name too long.  
13900033 | Too many symbolic links encountered.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let len: Int64 = 5
        FileIo.truncate(filePath, len: len)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func truncate(Int32, Int64)
    
    
    public static func truncate(file: Int32, len!: Int64 = 0): Unit

**功能：** 截断文件内容。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
file | Int32 | 是 | - | 已打开的文件描述符fd。  
len | Int64 | 否 | 0 | **命名参数。** 文件截断后的长度（单位：字节）。默认为0。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900002 | No such file or directory.  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900018 | Not a directory.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900023 | Text file busy.  
13900024 | File too large.  
13900027 | Read-only file system.  
13900030 | File name too long.  
13900033 | Too many symbolic links encountered.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let len: Int64 = 5
        let file  = FileIo.open(filePath, mode: OpenMode.READ_WRITE)
        FileIo.truncate(file.fd, len: len)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func unlink(String)
    
    
    public static func unlink(path: String): Unit

**功能：** 删除文件。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
path | String | 是 | - | 文件的应用沙箱路径。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900002 | No such file or directory.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900011 | Out of memory.  
13900012 | Permission denied.  
13900013 | Bad address.  
13900014 | Device or resource busy.  
13900018 | Not a directory.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900027 | Read-only file system.  
13900030 | File name too long.  
13900033 | Too many symbolic links encountered.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        FileIo.unlink(filePath)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func utimes(String, Float64)
    
    
    public static func utimes(path: String, mtime: Float64): Unit

**功能：** 更改文件上次修改该文件的时间。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
path | String | 是 | - | 文件的应用沙箱路径。  
mtime | Float64 | 是 | - | 待更新的时间戳。自1970年1月1日起至目标时间的毫秒数。仅支持更改上次修改该文件的时间属性。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900002 | No such file or directory.  
13900012 | Permission denied.  
13900020 | Invalid argument.  
13900027 | Read-only file system.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import std.time.DateTime
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let file = FileIo.open(filePath, mode: (OpenMode.CREATE | OpenMode.READ_WRITE))
        FileIo.write(file.fd, "test data")
        FileIo.close(file)
        FileIo.utimes(filePath, Float64(DateTime.UnixEpoch.second))
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func write(Int32, Array<Byte>, WriteOptions)
    
    
    public static func write(fd: Int32, buffer: Array<Byte>, options!: WriteOptions = WriteOptions()): Int64

**功能：** 将数据写入文件。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
fd | Int32 | 是 | - | 已打开的文件描述符。  
buffer | Array<Byte> | 是 | - | 待写入文件的数据，来自缓冲区。  
options | WriteOptions | 否 | WriteOptions() |  **命名参数。** 支持如下选项： \- offset，?Int64类型，表示期望写入文件的位置。可选，默认从当前位置开始写。 \- length，?UIntNative类型，表示期望写入数据的长度。可选，默认缓冲区长度。 \- encoding，String类型，当数据是String类型时有效，表示数据的编码方式，默认 "utf-8"。当前仅支持 "utf-8"。  
  
**返回值：**

类型 | 说明  
---|---  
Int64 | 返回实际写入的数据长度（单位：字节）。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900010 | Try again.  
13900013 | Bad address.  
13900020 | Invalid argument.  
13900024 | File too large.  
13900025 | No space left on device.  
13900034 | Operation would block.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let file = FileIo.open(filePath, mode: (OpenMode.CREATE | OpenMode.READ_WRITE))
        let str = "hello, world"
        let writeLen = FileIo.write(file.fd, str.toArray())
        FileIo.close(file)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]static func write(Int32, String, WriteOptions)
    
    
    public static func write(fd: Int32, buffer: String, options!: WriteOptions = WriteOptions()): Int64

**功能：** 将数据写入文件。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
fd | Int32 | 是 | - | 已打开的文件描述符。  
buffer | String | 是 | - | 待写入文件的数据，来自字符串。  
options | WriteOptions | 否 | WriteOptions() |  **命名参数。** 支持如下选项： \- offset，?Int64类型，表示期望写入文件的位置。可选，默认从当前位置开始写。 \- length，?UIntNative类型，表示期望写入数据的长度。可选，默认缓冲区长度。 \- encoding，String类型，当数据是String类型时有效，表示数据的编码方式，默认 "utf-8"。当前仅支持 "utf-8"。  
  
**返回值：**

类型 | 说明  
---|---  
Int64 | 返回实际写入的数据长度（单位：字节）。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900010 | Try again.  
13900013 | Bad address.  
13900020 | Invalid argument.  
13900024 | File too large.  
13900025 | No space left on device.  
13900034 | Operation would block.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let file = FileIo.open(filePath, mode: (OpenMode.CREATE | OpenMode.READ_WRITE))
        let str = "hello, world"
        let writeLen = FileIo.write(file.fd, str)
        FileIo.close(file)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class Filter
    
    
    public class Filter {
        public var suffix: Array<String>
        public var displayName: Array<String>
        public var mimeType: Array<String>
        public var fileSizeOver:?Int64
        public var lastModifiedAfter:?Float64
        public var excludeMedia: Bool
        public init(
            suffix!: Array<String> = Array<String>(),
            displayName!: Array<String> = Array<String>(),
            mimeType!: Array<String> = Array<String>(),
            fileSizeOver!: ?Int64 = None,
            lastModifiedAfter!: ?Float64 = None,
            excludeMedia!: Bool = false
        )
    }

**功能：** 文件过滤配置项，支持listFile接口使用。其中mimeType与excludeMedia过滤暂不支持。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var displayName
    
    
    public var displayName: Array<String>

**功能：** 文件名模糊匹配，各个关键词OR关系。当前仅支持通配符*。

**类型：** Array<String>

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var excludeMedia
    
    
    public var excludeMedia: Bool

**功能：** 是否排除Media中已有的文件。true：排除Media中已有的文件；false：不排除Media中已有的文件。预留字段，暂不支持使用。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var fileSizeOver
    
    
    public var fileSizeOver:?Int64

**功能：** 文件大小匹配，大于指定大小的文件。

**类型：** ?Int64

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var lastModifiedAfter
    
    
    public var lastModifiedAfter:?Float64

**功能：** 文件最近修改时间匹配，在指定时间点及之后的文件。

**类型：** ?Float64

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var mimeType
    
    
    public var mimeType: Array<String>

**功能：** mime类型完全匹配，各个关键词OR关系。预留字段，暂不支持使用。

**类型：** Array<String>

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var suffix
    
    
    public var suffix: Array<String>

**功能：** 文件后缀名完全匹配，各个关键词OR关系。

**类型：** Array<String>

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]init(Array<String>, Array<String>, Array<String>, ?Int64, ?Float64, Bool)
    
    
    public init(
        suffix!: Array<String> = Array<String>(),
        displayName!: Array<String> = Array<String>(),
        mimeType!: Array<String> = Array<String>(),
        fileSizeOver!: ?Int64 = None,
        lastModifiedAfter!: ?Float64 = None,
        excludeMedia!: Bool = false
    )

**功能：** 构造Filter对象。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
suffix | Array<String> | 否 | Array<String>() | **命名参数。** 文件后缀名完全匹配，各个关键词OR关系。  
displayName | Array<String> | 否 | Array<String>() | **命名参数。** 文件名模糊匹配，各个关键词OR关系。当前仅支持通配符*。  
mimeType | Array<String> | 否 | Array<String>() | **命名参数。** mime类型完全匹配，各个关键词OR关系。预留字段，暂不支持使用。  
fileSizeOver | ?Int64 | 否 | None | **命名参数。** 文件大小匹配，大于指定大小的文件。  
lastModifiedAfter | ?Float64 | 否 | None | **命名参数。** 文件最近修改时间匹配，在指定时间点及之后的文件。  
excludeMedia | Bool | 否 | false | **命名参数。** 是否排除Media中已有的文件。true：排除Media中已有的文件；false：不排除Media中已有的文件。预留字段，暂不支持使用。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900020 | Invalid argument.  
  



#### class ListFileOptions
    
    
    public class ListFileOptions {
        public var recursion: Bool
        public var listNum: Int32
        public var filter: Filter
        public init(
            recursion!: Bool = false,
            listNum!: Int32 = 0,
            filter!: Filter = Filter()
        )
    }

**功能：** 可选项类型，支持listFile接口使用。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var filter
    
    
    public var filter: Filter

**功能：** 文件过滤配置项。

**类型：** Filter

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var listNum
    
    
    public var listNum: Int32

**功能：** 列出文件名数量。当设置0时，列出所有文件。

**类型：** Int32

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var recursion
    
    
    public var recursion: Bool

**功能：** 是否递归子目录下文件名。当recursion为false时，返回当前目录下满足过滤要求的文件名及目录名。当recursion为true时，返回此目录下所有满足过滤要求的文件的相对路径（以/开头）。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]init(Bool, Int32, Filter)
    
    
    public init(
        recursion!: Bool = false,
        listNum!: Int32 = 0,
        filter!: Filter = Filter()
    )

**功能：** 构造ListFileOptions对象。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
recursion | Bool | 否 | false | **命名参数。** 是否递归子目录下文件名。可选，默认为false。当recursion为false时，返回当前目录下满足过滤要求的文件名及目录名。当recursion为true时，返回此目录下所有满足过滤要求的文件的相对路径（以/开头）。  
listNum | Int32 | 否 | 0 | **命名参数。** 列出文件名数量。可选，当设置0时，列出所有文件，默认为0。  
filter | Filter | 否 | Filter() | **命名参数。** 文件过滤配置项。 可选，设置过滤条件。  
  
#### class OpenMode
    
    
    public class OpenMode {
        public static const READ_ONLY: Int64 = 0o0
        public static const WRITE_ONLY: Int64 = 0o1
        public static const READ_WRITE: Int64 = 0o2
        public static const CREATE: Int64 = 0o100
        public static const TRUNC: Int64 = 0o1000
        public static const APPEND: Int64 = 0o2000
        public static const NONBLOCK: Int64 = 0o4000
        public static const DIR: Int64 = 0o200000
        public static const NOFOLLOW: Int64 = 0o400000
        public static const SYNC: Int64 = 0o4010000
    }

**功能：** open接口flags参数常量。文件打开标签。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]static const APPEND
    
    
    public static const APPEND: Int64 = 0o2000

**功能：** 以追加方式打开，后续写将追加到文件末尾。

**类型：** Int64

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]static const CREATE
    
    
    public static const CREATE: Int64 = 0o100

**功能：** 若文件不存在，则创建文件。

**类型：** Int64

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]static const DIR
    
    
    public static const DIR: Int64 = 0o200000

**功能：** 如果path不指向目录，则出错。

**类型：** Int64

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]static const NOFOLLOW
    
    
    public static const NOFOLLOW: Int64 = 0o400000

**功能：** 如果path指向符号链接，则出错。

**类型：** Int64

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]static const NONBLOCK
    
    
    public static const NONBLOCK: Int64 = 0o4000

**功能：** 如果path指向FIFO、块特殊文件或字符特殊文件，则本次打开及后续 IO 进行非阻塞操作。

**类型：** Int64

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]static const READ_ONLY
    
    
    public static const READ_ONLY: Int64 = 0o0

**功能：** 只读打开。

**类型：** Int64

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]static const READ_WRITE
    
    
    public static const READ_WRITE: Int64 = 0o2

**功能：** 读写打开。

**类型：** Int64

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]static const SYNC
    
    
    public static const SYNC: Int64 = 0o4010000

**功能：** 以同步IO的方式打开文件。

**类型：** Int64

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]static const TRUNC
    
    
    public static const TRUNC: Int64 = 0o1000

**功能：** 如果文件存在且以只写或读写的方式打开，则将其长度裁剪为零。

**类型：** Int64

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]static const WRITE_ONLY
    
    
    public static const WRITE_ONLY: Int64 = 0o1

**功能：** 只写打开。

**类型：** Int64

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### class Options
    
    
    public open class Options {
        public var encoding: String
        public init(
            encoding!: String = "utf-8"
        )
    }

**功能：** 可选项类型，支持readLines接口使用。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var encoding
    
    
    public var encoding: String

**功能：** 文件编码方式。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]init(String)
    
    
    public init(
        encoding!: String = "utf-8"
    )

**功能：** 构造Options对象。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
encoding | String | 否 | "utf-8" | **命名参数。** 文件编码方式。可选项。  
  
#### class RandomAccessFile
    
    
    public class RandomAccessFile {}

**功能：** 随机读写文件流。在调用RandomAccessFile的方法前，需要先通过createRandomAccessFile方法来构建一个RandomAccessFile实例。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]prop fd
    
    
    public prop fd: Int32

**功能：** 打开的文件描述符。

**类型：** Int32

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]prop filePointer
    
    
    public prop filePointer: Int64

**功能：** RandomAccessFile对象的偏置指针。

**类型：** Int64

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]func close()
    
    
    public func close(): Unit

**功能：** 关闭RandomAccessFile对象。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let randomAccessFile = FileIo.createRandomAccessFile(filePath, mode: (OpenMode.CREATE | OpenMode.READ_WRITE))
        randomAccessFile.close()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func read(Array<Byte>, ReadOptions)
    
    
    public func read(buffer: Array<Byte>, options!: ReadOptions = ReadOptions()): Int64

**功能：** 从文件读取数据。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
buffer | Array<Byte> | 是 | - | 用于读取文件的缓冲区。  
options | ReadOptions | 否 | ReadOptions() |  **命名参数。** 支持如下选项： \- length，?UIntNative类型，表示期望读取数据的长度。可选，默认缓冲区长度。 \- offset，?Int64类型，表示期望读取文件的位置。可选，默认从当前位置开始读。  
  
**返回值：**

类型 | 说明  
---|---  
Int64 | 实际读取的长度。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900010 | Try again.  
13900013 | Bad address.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900034 | Operation would block.  
13900042 | Unknown error.  
13900044 | Network is unreachable.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let file = FileIo.open(filePath, mode: (OpenMode.CREATE | OpenMode.READ_WRITE))
        let randomAccessFile = FileIo.createRandomAccessFile(file)
        let length: Int64 = 4096
        let arrayBuffer = Array<Byte>(length, repeat: 0)
        let readLength = randomAccessFile.read(arrayBuffer)
        randomAccessFile.close()
        FileIo.close(file)
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func setFilePointer(Int64)
    
    
    public func setFilePointer(filePointer: Int64): Unit

**功能：** 设置文件偏移指针。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
filePointer | Int64 | 是 | - | RandomAccessFile对象的偏移指针。  
  
**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let randomAccessFile = FileIo.createRandomAccessFile(filePath, mode: (OpenMode.CREATE | OpenMode.READ_WRITE))
        randomAccessFile.setFilePointer(1)
        randomAccessFile.close()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func write(String, WriteOptions)
    
    
    public func write(buffer: String, options!: WriteOptions = WriteOptions()): Int64

**功能：** 将数据写入文件。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
buffer | String | 是 | - | 待写入文件的数据，可来自字符串。  
options | WriteOptions | 否 | WriteOptions() |  **命名参数。** 支持如下选项： \- length，?UIntNative类型，表示期望写入数据的长度。默认缓冲区长度。 \- offset，?Int64类型，表示期望写入文件的位置。可选，默认从当前位置开始写。 \- encoding，String类型，当数据是String类型时有效，表示数据的编码方式，默认"utf-8"。仅支持"utf-8"。  
  
**返回值：**

类型 | 说明  
---|---  
Int64 | 实际写入的长度。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900010 | Try again.  
13900013 | Bad address.  
13900020 | Invalid argument.  
13900024 | File too large.  
13900025 | No space left on device.  
13900034 | Operation would block.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let randomAccessFile = FileIo.createRandomAccessFile(filePath, mode: (OpenMode.CREATE | OpenMode.READ_WRITE))
        let option = WriteOptions(length: 5, offset: 5)
        let bytesWritten = randomAccessFile.write("hello, world", options: option)
        randomAccessFile.close()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func write(Array<Byte>, WriteOptions)
    
    
    public func write(buffer: Array<Byte>, options!: WriteOptions = WriteOptions()): Int64

**功能：** 将数据写入文件。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
buffer | Array<Byte> | 是 | - | 待写入文件的数据，可来自缓冲区。  
options | WriteOptions | 否 | WriteOptions() |  **命名参数。** 支持如下选项： \- length，?UIntNative类型，表示期望写入数据的长度。默认缓冲区长度。 \- offset，?Int64类型，表示期望写入文件的位置。可选，默认从当前位置开始写。 \- encoding，String类型，当数据是String类型时有效，表示数据的编码方式，默认"utf-8"。仅支持"utf-8"。  
  
**返回值：**

类型 | 说明  
---|---  
Int64 | 实际写入的长度。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900010 | Try again.  
13900013 | Bad address.  
13900020 | Invalid argument.  
13900024 | File too large.  
13900025 | No space left on device.  
13900034 | Operation would block.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let randomAccessFile = FileIo.createRandomAccessFile(filePath, mode: (OpenMode.CREATE | OpenMode.READ_WRITE))
        let option = WriteOptions(length: 5, offset: 5)
        let arr: Array<UInt8> = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
        let bytesWritten = randomAccessFile.write(arr, options: option)
        randomAccessFile.close()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class RandomAccessFileOptions
    
    
    public class RandomAccessFileOptions {
        public var start: Option<Int64>
        public var end: Option<Int64>
        public init(
            start!: Option<Int64> = None,
            end!: Option<Int64> = None
        )
    }

**功能：** 可选项类型，支持 createRandomAccessFile 接口使用。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var end
    
    
    public var end: Option<Int64>

**功能：** 表示期望读取结束的位置，单位为字节。可选，默认文件末尾。

**类型：** Option<Int64>

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var start
    
    
    public var start: Option<Int64>

**功能：** 表示期望读取文件的位置，单位为字节。可选，默认从当前位置开始读。

**类型：** Option<Int64>

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]init(Option<Int64>, Option<Int64>)
    
    
    public init(
        start!: Option<Int64> = None,
        end!: Option<Int64> = None
    )

**功能：** 构造RandomAccessFileOptions对象。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
start | Option<Int64> | 否 | None | **命名参数。** 表示期望读取文件的位置，单位为字节。可选，默认从当前位置开始读。  
end | Option<Int64> | 否 | None | **命名参数。** 表示期望读取结束的位置，单位为字节。可选，默认文件末尾。  
  
#### class ReaderIterator
    
    
    public class ReaderIterator {}

**功能：** 文件读取迭代器。在调用ReaderIterator的方法前，需要先通过readLines方法来构建一个ReaderIterator实例。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]func next()
    
    
    public func next(): ReaderIteratorResult

**功能：** 获取迭代器下一项内容。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
ReaderIteratorResult | 文件读取迭代器返回结果。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900005 | I/O error.  
13900037 | No data available.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"
        let options: Options = Options(encoding: "utf-8")
        let readerIterator = FileIo.readLines(filePath, options: options)
        var result = readerIterator.next()
        while (!result.done) {
            Hilog.info(0, "test", "content: ${result.value}", "")
            result = readerIterator.next()
        }
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class ReaderIteratorResult
    
    
    public class ReaderIteratorResult {
        public var done: Bool
        public var value: String
    }

**功能：** 文件读取迭代器返回结果，支持ReaderIterator接口使用。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var done
    
    
    public var done: Bool

**功能：** 迭代器是否已完成迭代。true：已完成迭代；false：未完成迭代。

**类型：** Bool

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var value
    
    
    public var value: String

**功能：** 逐行读取的文件文本内容。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### class ReadOptions
    
    
    public open class ReadOptions {
        public var offset: Option<Int64>
        public var length: Option<UIntNative>
        public init(
            offset!: Option<Int64> = None,
            length!: Option<UIntNative> = None
        )
    }

**功能：** 可选项类型，支持read接口使用。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var length
    
    
    public var length: Option<UIntNative>

**功能：** 期望读取数据的长度，单位为字节。

**类型：** Option<UIntNative>

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var offset
    
    
    public var offset: Option<Int64>

**功能：** 期望读取文件位置，单位为字节（基于当前filePointer加上offset的位置）。

**类型：** Option<Int64>

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]init(Option<Int64>, Option<UIntNative>)
    
    
    public init(
        offset!: Option<Int64> = None,
        length!: Option<UIntNative> = None
    )

**功能：** 构造ReadOptions对象。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
offset | Option<Int64> | 否 | None | **命名参数。** 期望读取文件位置，单位为字节（基于当前filePointer加上offset的位置）。可选，默认从偏移指针（filePointer）开始读。  
length | Option<UIntNative> | 否 | None | **命名参数。** 期望读取数据的长度，单位为字节。可选，默认缓冲区长度。  
  
#### class ReadTextOptions
    
    
    public class ReadTextOptions <: ReadOptions {
        public var encoding: String
        public init(
            offset!: Option<Int64> = None,
            length!: Option<UIntNative> = None,
            encoding!: String = "utf-8"
        )
    }

**功能：** 可选项类型，支持readText接口使用。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**父类型：**

  * ReadOptions



#### [h2]var encoding
    
    
    public var encoding: String

**功能：** 当数据是 String 类型时有效，表示数据的编码方式，仅支持 'utf-8'。

**类型：** String

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]init(Option<Int64>, Option<UIntNative>, String)
    
    
    public init(
        offset!: Option<Int64> = None,
        length!: Option<UIntNative> = None,
        encoding!: String = "utf-8"
    )

**功能：** 构造ReadOptions对象。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
offset | Option<Int64> | 否 | None | **命名参数。** 期望读取文件的位置，单位为字节。可选，默认从当前位置开始读取。  
length | Option<UIntNative> | 否 | None | **命名参数。** 期望读取数据的长度，单位为字节。可选，默认文件长度。  
encoding | String | 否 | "utf-8" | **命名参数。** 当数据是 String 类型时有效，表示数据的编码方式，默认 'utf-8'，仅支持 'utf-8'。  
  
#### class Stat
    
    
    public class Stat {}

**功能：** 文件具体信息。在调用Stat的方法前，需要先通过FileIo.stat()方法来构建一个Stat实例。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]prop atime
    
    
    public prop atime: Int64

**功能：** 上次访问该文件的时间，表示距1970年1月1日0时0分0秒的秒数。

注意：目前用户数据分区默认以“noatime”方式挂载，atime更新被禁用。

**类型：** Int64

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]prop ctime
    
    
    public prop ctime: Int64

**功能：** 最近改变文件状态的时间，表示距1970年1月1日0时0分0秒的秒数。

**类型：** Int64

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]prop gid
    
    
    public prop gid: Int64

**功能：** 文件所有组的ID。

**类型：** Int64

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]prop ino
    
    
    public prop ino: Int64

**功能：** 标识该文件。通常同设备上的不同文件的INO不同。

**类型：** Int64

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]prop mode
    
    
    public prop mode: Int64

**功能：** 表示文件权限，各特征位的含义如下：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/J0VmSqYuRqKpb4y02nwROw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090217Z&HW-CC-Expire=86400&HW-CC-Sign=0F845EF825BF0E340AFA8A11E71379F64E887848F1CC54146289C9DC13292F00)

  * 以下值为八进制，取得的返回值为十进制，请换算后查看。

  * 0o400：用户读。对于普通文件，所有者可读取文件；对于目录，所有者可读取目录项。

  * 0o200：用户写。对于普通文件，所有者可写入文件；对于目录，所有者可创建/删除目录项。

  * 0o100：用户执行。对于普通文件，所有者可执行文件；对于目录，所有者可在目录中搜索给定路径名。

  * 0o040：用户组读。对于普通文件，所有用户组可读取文件；对于目录，所有用户组可读取目录项。

  * 0o020：用户组写。对于普通文件，所有用户组可写入文件；对于目录，所有用户组可创建/删除目录项。

  * 0o010：用户组执行。对于普通文件，所有用户组可执行文件；对于目录，所有用户组是否可在目录中搜索给定路径名。

  * 0o004：其他读。对于普通文件，其余用户可读取文件；对于目录，其他用户组可读取目录项。

  * 0o002：其他写。对于普通文件，其余用户可写入文件；对于目录，其他用户组可创建/删除目录项。

  * 0o001：其他执行。对于普通文件，其余用户可执行文件；对于目录，其他用户组可在目录中搜索给定路径名。




**类型：** Int64

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]prop mtime
    
    
    public prop mtime: Int64

**功能：** 上次修改该文件的时间，表示距1970年1月1日0时0分0秒的秒数。

**类型：** Int64

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]prop size
    
    
    public prop size: Int64

**功能：** 文件的大小，以字节为单位。仅对普通文件有效。

**类型：** Int64

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]prop uid
    
    
    public prop uid: Int64

**功能：** 文件所有者的ID。

**类型：** Int64

**读写能力：** 只读

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]func isBlockDevice()
    
    
    public func isBlockDevice(): Bool

**功能：** 用于判断文件是否是块特殊文件。一个块特殊文件只能以块为粒度进行访问，且访问的时候带缓存。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool | 表示文件是否是块特殊设备。true：是块特殊设备；false：不是块特殊设备。  
  
**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let isBLockDevice = FileIo.stat(filePath).isBlockDevice()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func isCharacterDevice()
    
    
    public func isCharacterDevice(): Bool

**功能：** 判断文件是否为字符特殊文件。字符特殊设备支持随机访问，且访问时无缓存。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool | 表示文件是否是字符特殊设备。true：是字符特殊设备；false：不是字符特殊设备。  
  
**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let isCharacterDevice = FileIo.stat(filePath).isCharacterDevice()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func isDirectory()
    
    
    public func isDirectory(): Bool

**功能：** 判断文件是否为目录。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool | 表示文件是否是目录。true：是目录；false：不是目录。  
  
**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let dirPath = pathDir + "/test"
        let isDirectory = FileIo.stat(dirPath).isDirectory()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func isFifo()
    
    
    public func isFifo(): Bool

**功能：** 用于判断文件是否是命名管道（有时也称为FIFO）。命名管道通常用于进程间通信。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool | 表示文件是否是 FIFO。true：是FIFO；false：不是FIFO。  
  
**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let res = FileIo.stat(filePath).isFifo()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func isFile()
    
    
    public func isFile(): Bool

**功能：** 用于判断文件是否是普通文件。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool | 表示文件是否是普通文件。true：是普通文件；false：不是普通文件。  
  
**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let isFile = FileIo.stat(filePath).isFile()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func isSocket()
    
    
    public func isSocket(): Bool

**功能：** 判断文件是否是套接字。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool | 表示文件是否是套接字。true：是套接字；false：不是套接字。  
  
**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let isSocket = FileIo.stat(filePath).isSocket()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func isSymbolicLink()
    
    
    public func isSymbolicLink(): Bool

**功能：** 判断文件是否为符号链接。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**返回值：**

类型 | 说明  
---|---  
Bool | 表示文件是否是符号链接。true：是符号链接；false：不是符号链接。  
  
**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let isSymbolicLink = FileIo.stat(filePath).isSymbolicLink()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class Stream
    
    
    public class Stream {}

**功能：** 文件流。在调用Stream的方法前，需要先通过FileIo.createStream方法或者FileIo.fdopenStream来构建一个Stream实例。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]func close()
    
    
    public func close(): Unit

**功能：** 关闭文件流。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900025 | No space left on device.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let stream = FileIo.createStream(filePath, "r+")
        stream.close()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func flush()
    
    
    public func flush(): Unit

**功能：** 刷新文件流。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900010 | Try again.  
13900013 | Bad address.  
13900020 | Invalid argument.  
13900024 | File too large.  
13900025 | No space left on device.  
13900034 | Operation would block.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let stream = FileIo.createStream(filePath, "r+")
        stream.flush()
        stream.close()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func read(Array<Byte>, ReadOptions)
    
    
    public func read(buffer: Array<Byte>, options!: ReadOptions = ReadOptions()): Int64

**功能：** 从流文件读取数据。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
buffer | Array<Byte> | 是 | - | 用于读取文件的缓冲区。  
options | ReadOptions | 否 | ReadOptions() |  **命名参数。** 支持如下选项： \- length，?UIntNative类型，表示期望读取数据的长度。可选，默认缓冲区长度。 \- offset，?Int64类型，表示期望读取文件的位置。可选，默认从当前位置开始读。  
  
**返回值：**

类型 | 说明  
---|---  
Int64 | 返回读取的结果。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900010 | Try again.  
13900013 | Bad address.  
13900019 | Is a directory.  
13900020 | Invalid argument.  
13900034 | Operation would block.  
13900042 | Unknown error.  
13900044 | Network is unreachable.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let stream = FileIo.createStream(filePath, "r+")
        let buf = Array<Byte>(4096, repeat: 0)
        let num = stream.read(buf)
        stream.close()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func write(String, WriteOptions)
    
    
    public func write(buffer: String, options!: WriteOptions = WriteOptions()): Int64

**功能：** 将数据写入流文件。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
buffer | String | 是 | - | 待写入文件的数据，可来自字符串。  
options | WriteOptions | 否 | WriteOptions() |  **命名参数。** 支持如下选项： \- length，?UIntNative类型，表示期望写入数据的长度。默认缓冲区长度。 \- offset，?Int64类型，表示期望写入文件的位置。可选，默认从当前位置开始写。 \- encoding，String类型，当数据是String类型时有效，表示数据的编码方式，默认 "utf-8"。仅支持 "utf-8"。  
  
**返回值：**

类型 | 说明  
---|---  
Int64 | 实际写入的长度。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900010 | Try again.  
13900013 | Bad address.  
13900020 | Invalid argument.  
13900024 | File too large.  
13900025 | No space left on device.  
13900034 | Operation would block.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let stream = FileIo.createStream(filePath, "r+")
        let arr: Array<UInt8> = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
        let num = stream.write(arr)
        stream.close()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### [h2]func write(Array<Byte>, WriteOptions)
    
    
    public func write(buffer: Array<Byte>, options!: WriteOptions = WriteOptions()): Int64

**功能：** 将数据写入流文件。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
buffer | Array<Byte> | 是 | - | 待写入文件的数据，可来自缓冲区。  
options | WriteOptions | 否 | WriteOptions() |  **命名参数。** 支持如下选项： \- length，?UIntNative类型，表示期望写入数据的长度。默认缓冲区长度。 \- offset，?Int64类型，表示期望写入文件的位置。可选，默认从当前位置开始写。 \- encoding，String类型，当数据是String类型时有效，表示数据的编码方式，默认 "utf-8"。仅支持 "utf-8"。  
  
**返回值：**

类型 | 说明  
---|---  
Int64 | 实际写入的长度。  
  
**异常：**

  * [BusinessException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-api-business_exception#class-businessexception)：对应错误码如下表，详见[文件管理错误码](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-errorcode-filemanagement)。

错误码ID | 错误信息  
---|---  
13900001 | Operation not permitted.  
13900004 | Interrupted system call.  
13900005 | I/O error.  
13900008 | Bad file descriptor.  
13900010 | Try again.  
13900013 | Bad address.  
13900020 | Invalid argument.  
13900024 | File too large.  
13900025 | No space left on device.  
13900034 | Operation would block.  
13900041 | Quota exceeded.  
13900042 | Unknown error.  
  



**示例：**
    
    
    // index.cj
    
    import kit.CoreFileKit.*
    import ohos.business_exception.BusinessException
    import kit.PerformanceAnalysisKit.Hilog
    
    try {
        let pathDir = "path/to/file"
        let filePath = pathDir + "/test.txt"  // 请替换正确的文件路径，获取文件路径参考本文使用说明
        let stream = FileIo.createStream(filePath, "r+")
        let arr: Array<UInt8> = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]
        let num = stream.write(arr)
        stream.close()
    } catch (e: BusinessException) {
        Hilog.info(0, "test", "${e.message}")
    }

#### class WriteOptions
    
    
    public class WriteOptions <: Options {
        public var length: Option<UIntNative>
        public var offset: Option<Int64>
        public init(
            length!: Option<UIntNative> = None,
            offset!: Option<Int64> = None,
            encoding!: String = "utf-8"
        )
    }

**功能：** 可选项类型，支持write接口使用。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**父类型：**

  * Options



#### [h2]var length
    
    
    public var length: Option<UIntNative>

**功能：** 期望写入数据的长度，单位为字节。

**类型：** Option<UIntNative>

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]var offset
    
    
    public var offset: Option<Int64>

**功能：** 期望写入文件位置，单位为字节（基于当前filePointer加上offset的位置）。

**类型：** Option<Int64>

**读写能力：** 可读写

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]init(Option<UIntNative>, Option<Int64>, String)
    
    
    public init(
        length!: Option<UIntNative> = None,
        offset!: Option<Int64> = None,
        encoding!: String = "utf-8"
    )

**功能：** 构造WriteOptions对象。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

**参数：**

参数名 | 类型 | 必填 | 默认值 | 说明  
---|---|---|---|---  
length | Option<UIntNative> | 否 | None | **命名参数。** 期望写入数据的长度，单位为字节。可选，默认缓冲区长度。  
offset | Option<Int64> | 否 | None | **命名参数。** 期望写入文件位置，单位为字节（基于当前filePointer加上offset的位置）。可选，默认从偏移指针（filePointer）开始写。  
encoding | String | 否 | "utf-8" | **命名参数。** 当数据是String类型时有效，表示数据的编码方式，默认"utf-8"，仅支持"utf-8"。  
  
#### enum AccessFlagType
    
    
    public enum AccessFlagType {
        | Local
        | ...
    }

**功能：** 枚举，表示需要校验的文件位置。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]Local
    
    
    Local

**功能：** 文件是否在本地。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### enum AccessModeType
    
    
    public enum AccessModeType {
        | Exist
        | Write
        | Read
        | ReadWrite
        | ...
    }

**功能：** 枚举，表示需要校验的具体权限。若不填，默认校验文件是否存在。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]Exist
    
    
    Exist

**功能：** 文件是否存在。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]Read
    
    
    Read

**功能：** 文件是否具有读取权限。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]ReadWrite
    
    
    ReadWrite

**功能：** 文件是否具有读写权限。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]Write
    
    
    Write

**功能：** 文件是否具有写入权限。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### enum WhenceType
    
    
    public enum WhenceType {
        | SeekSet
        | SeekCur
        | SeekEnd
        | ...
    }

**功能：** 枚举，文件偏移指针相对偏移位置类型，支持lseek接口使用。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]SeekCur
    
    
    SeekCur

**功能：** 当前文件偏移指针位置处。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]SeekEnd
    
    
    SeekEnd

**功能：** 文件末尾位置处。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22

#### [h2]SeekSet
    
    
    SeekSet

**功能：** 文件起始位置处。

**系统能力：** SystemCapability.FileManagement.File.FileIO

**起始版本：** 22
