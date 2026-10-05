---
name: document/cn/openharmony-cangjie/fs_package_classes
title: 类
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes
source: portal
---

类 class Directory
    
    public class Directory <: Iterable<FileInfo> {
        public init(path: Path)
        public init(path: String)
    }

功能：对应文件系统中的目录，它提供创建、移动、复制、删除、查询属性以及遍历目录等能力。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215158.40390591505257312531995706715646:50001231000000:2800:8220BBFF867897956582E3D73F48ECD08A2F408619D75F27A5B013E4666EFF88.png?needInitFileName=true?needInitFileName=true) 非法路径指的是以下情况之一：
    * 路径中包含非法字符，例如空格、制表符、换行符等；
    * 路径中包含不合法的字符，例如特殊字符、控制字符等；
    * 路径中包含不存在的目录或文件；
    * 路径中包含无法访问的目录或文件，例如权限不足或被锁定等。
在输入路径时，应该避免使用非法字符，确保路径的合法性，以便正确地访问目标文件或目录。 [h2]prop info
    
    public prop info: FileInfo

功能：当前目录元数据信息。 类型：[FileInfo](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-fileinfo) [h2]init(Path)
    
    public init(path: Path)

功能：创建 [Directory](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-directory) 实例。 参数：
    * path: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) 形式的目录路径。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 如果路径非法，则抛异常。
[h2]init(String)
    
    public init(path: String)

功能：创建 [Directory](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-directory) 实例，支持绝对路径和相对路径，路径非法抛异常。 参数：
    * path: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 字符串形式的目录路径。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 当路径不存在时或路径为空时，抛出异常。
[h2]static func copy(Path, Path, Bool)
    
    public static func copy(sourceDirPath: Path, destinationDirPath: Path, overwrite: Bool): Unit

功能：将该目录以及文件、子文件夹都拷贝到新的位置。 参数：
    * sourceDirPath: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) 形式的源目录路径。
    * destinationDirPath: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) 形式的目标目录路径。
    * overwrite: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 是否覆盖, 为 true 时覆盖，为false 时不覆盖。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 源目录不存在，或 overwrite 为 false 时目标目录已存在，或目标目录在源目录中，或复制失败，抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 源目录或目标目录名包含空字符则抛出异常。
[h2]static func copy(String, String, Bool)
    
    public static func copy(sourceDirPath: String, destinationDirPath: String, overwrite: Bool): Unit

功能：将该目录以及文件、子文件夹都拷贝到新的位置，不成功则抛异常。 参数：
    * sourceDirPath: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 字符串形式的源目录路径。
    * destinationDirPath: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 字符串形式的目标目录路径。
    * overwrite: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 是否覆盖, 为 true 时覆盖，为false 时不覆盖。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 源目录不存在，或 overwrite 为 false 时目标目录已存在，或目标目录在源目录中，或复制失败，抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 源目录或目标目录名包含空字符则抛出异常。
[h2]static func create(Path, Bool)
    
    public static func create(path: Path, recursive!: Bool = false): Directory

功能：创建目录。 可指定是否递归创建，如果需要递归创建，将逐级创建路径中不存在的目录。 参数：
    * path: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- 待创建的目录路径。
    * recursive!: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 是否递归创建目录，true 代表递归创建，false 代表不递归创建，默认 false。
返回值：
    * [Directory](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-directory) \- 新创建的 [Directory](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-directory) 实例。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 目录已存在时，抛出异常；非递归时中间有不存在的目录时抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 目录为空、目录为当前目录、目录为根目录，或目录中存在空字符时抛出异常。
[h2]static func create(String, Bool)
    
    public static func create(path: String, recursive!: Bool = false): Directory

功能：创建目录。 可指定是否递归创建，如果需要递归创建，将逐级创建路径中不存在的目录。 参数：
    * path: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 待创建的目录路径。
    * recursive!: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 是否递归创建目录，true 代表递归创建，false 代表不递归创建，默认 false。
返回值：
    * [Directory](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-directory) \- 新创建的 [Directory](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-directory) 实例。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 目录已存在时，抛出异常；非递归时中间有不存在的目录时抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 目录为空、目录为当前目录、目录为根目录，或目录中存在空字符时抛出异常。
[h2]static func createTemp(Path)
    
    public static func createTemp(directoryPath: Path): Directory

功能：在指定目录下创建临时目录。 参数：
    * directoryPath: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) 形式的目录路径。
返回值：
    * [Directory](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-directory) \- 临时目录的 [Directory](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-directory) 实例。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 目录不存在或创建失败时抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 目录为空或包含空字符时抛出异常。
[h2]static func createTemp(String)
    
    public static func createTemp(directoryPath: String): Directory

功能：在指定目录下创建临时目录。 参数：
    * directoryPath: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 字符串形式的目录路径。
返回值：
    * [Directory](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-directory) \- 临时目录的 [Directory](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-directory) 实例。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 目录不存在或创建失败时抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 目录为空或包含空字符时抛出异常。
[h2]static func delete(Path, Bool)
    
    public static func delete(path: Path, recursive!: Bool = false): Unit

功能：删除目录。 可指定是否递归删除，如果需要递归删除，将逐级删除目录。 参数：
    * path: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) 形式的指定目录路径。
    * recursive!: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 是否递归，true 代表递归，false 代表不递归，默认 false 不递归。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 如果目录不存在或递归删除失败，则抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 如果 path 为空字符串或包含空字符或长度大于 4096 ，则出抛异常。
[h2]static func delete(String, Bool)
    
    public static func delete(path: String, recursive!: Bool = false): Unit

功能：删除目录。 可指定是否递归删除，如果需要递归删除，将逐级删除目录。 参数：
    * path: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 字符串形式的指定目录路径。
    * recursive!: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 是否递归，true 代表递归，false 代表不递归，默认 false 不递归。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 如果目录不存在或递归删除失败，则抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 如果 path 为空字符串或包含空字符或长度大于 4096 ，则出抛异常。
[h2]static func exists(Path)
    
    public static func exists(path: Path): Bool

功能：判断路径对应的目录是否存在。 参数：
    * path: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) 形式的目录路径。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- false 表示路径不存在或者路径对应的不是目录，true 表示路径对应的是目录或指向目录的软链接。
[h2]static func exists(String)
    
    public static func exists(path: String): Bool

功能：判断路径对应的目录是否存在。 参数：
    * path: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 字符串形式的目录路径。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- false 表示路径不存在，或者路径对应的不是目录，true 表示路径对应的是目录或指向目录的软链接。
[h2]static func move(Path, Path, Bool)
    
    public static func move(sourceDirPath: Path, destinationDirPath: Path, overwrite: Bool): Unit

功能：将该目录以及文件、子文件夹都移动到指定路径。 参数：
    * sourceDirPath: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) 形式的源目录路径。
    * destinationDirPath: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) 形式的目标目录路径。
    * overwrite: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 是否覆盖, 为 true 时将覆盖目标路径中的所有子文件夹和文件，为 false 时不覆盖。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 目标目录名为空，或目标目录名包含空字符。
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 源目录不存在，或 overwrite 为 false 时目标目录已存在，或移动失败。
[h2]static func move(String, String, Bool)
    
    public static func move(sourceDirPath: String, destinationDirPath: String, overwrite: Bool): Unit

功能：将该目录以及文件、子文件夹都移动到指定路径。 参数：
    * sourceDirPath: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 字符串形式的源目录路径。
    * destinationDirPath: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 字符串形式的目标目录路径。
    * overwrite: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 是否覆盖, 为 true 时将覆盖目标路径中的所有子文件夹和文件，为 false 时不覆盖。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 目标目录名为空，或目标目录名包含空字符。
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 源目录不存在，或 overwrite 为 false 时目标目录已存在，或移动失败。
[h2]func createFile(String)
    
    public func createFile(name: String): File

功能：在当前 [Directory](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-directory) 下创建指定名字的子文件。 参数：
    * name: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 子文件名，参数只接受不带路径前缀的字符串。
返回值：
    * [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) \- 子文件的 [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) 实例，该实例需要手动及时调用 [close](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#func-close) 函数关闭文件。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 当子文件名中含有路径信息或文件名已存在，抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当文件名包含空字符时抛出异常。
[h2]func createSubDirectory(String)
    
    public func createSubDirectory(name: String): Directory

功能：在当前 [Directory](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-directory) 下创建指定名字的子目录。 参数：
    * name: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 子目录名，参数只接受不带路径前缀的字符串。
返回值：
    * [Directory](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-directory) \- 子目录的 [Directory](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-directory) 实例。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 当子目录名中含有路径信息、路径已存在或创建目录失败时，抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 当目录名中含有空字符时，抛出异常。
[h2]func directories()
    
    public func directories(): Iterator<FileInfo>

功能：返回当前目录的子目录迭代器。 返回值：
    * [Iterator](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_classes#class-iteratort)<[FileInfo](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-fileinfo)> \- 当前目录的子目录迭代器。
返回值：目录是否为空，true 为空，false 不为空。 异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 获取目录的成员信息失败时，抛出异常。
[h2]func directoryList()
    
    public func directoryList(): ArrayList<FileInfo>

功能：返回当前目录的子目录列表。 返回值：
    * [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[FileInfo](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-fileinfo)> \- 当前目录的所有子目录列表。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 获取目录的成员信息失败时，抛出异常。
[h2]func entryList()
    
    public func entryList(): ArrayList<FileInfo>

功能：返回当前目录的文件或子目录列表。 返回值：
    * [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[FileInfo](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-fileinfo)> \- 当前目录的文件或子目录列表。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 获取目录的成员信息失败时，抛出异常。
[h2]func fileList()
    
    public func fileList(): ArrayList<FileInfo>

功能：返回当前目录的子文件列表。 返回值：
    * [ArrayList](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/collection_package_class#class-arraylistt)<[FileInfo](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-fileinfo)> \- 当前目录的子文件列表。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 获取目录的成员信息失败时，抛出异常。
[h2]func files()
    
    public func files(): Iterator<FileInfo>

功能：返回当前目录的子文件迭代器。 返回值：
    * [Iterator](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_classes#class-iteratort)<[FileInfo](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-fileinfo)> \- 当前目录的子文件迭代器。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 获取目录的成员信息失败时，抛出异常。
[h2]func isEmpty()
    
    public func isEmpty(): Bool

功能：判断当前目录是否为空。 返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 为 true 时目录为空，为 false 时不为空。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 如果判断过程中底层调用的系统接口发生错误，则抛异常。
[h2]func iterator()
    
    public func iterator(): Iterator<FileInfo>

功能：返回当前目录的文件或子目录迭代器。 返回值：
    * [Iterator](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_classes#class-iteratort)<[FileInfo](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-fileinfo)> \- 当前目录的文件或子目录迭代器。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 获取目录的成员信息失败时，抛出异常。
class File
    
    public class File <: Resource & IOStream & Seekable {
        public init(path: Path, openOption: OpenOption)
        public init(path: String, openOption: OpenOption)
    }

功能：提供一些对文件进行操作的函数，包括文件的打开、创建、关闭、移动、复制、删除，文件的流式读写操作，查询属性以及一些其他函数。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215158.46817599028893542894785655608753:50001231000000:2800:630C8E5046478ECE59C05BCF9C6E7440ED330B08F9767424388CCC70775B18D4.png?needInitFileName=true?needInitFileName=true) 非法路径指的是以下情况之一：
    * 路径中包含非法字符，例如空格、制表符、换行符等；
    * 路径中包含不合法的字符，例如特殊字符、控制字符等；
    * 路径中包含不存在的目录或文件；
    * 路径中包含无法访问的目录或文件，例如权限不足或被锁定等。
在输入路径时，应该避免使用非法字符，确保路径的合法性，以便正确地访问目标文件或目录。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240621215158.17830659917510281488625596824882:50001231000000:2800:A15A995E15192903B829F90074138EBDAF7EADBEC4C775F9A39EE411E245A093.png?needInitFileName=true?needInitFileName=true)
    * 创建的 [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) 对象会默认打开对应的文件，当使用结束后需要及时调用 [close](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#func-close) 函数关闭文件, 否则会造成资源泄露。
[h2]prop fileDescriptor
    
    public prop fileDescriptor: FileDescriptor

功能：获取文件描述符信息。 类型：[FileDescriptor](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-filedescriptor) [h2]prop info
    
    public prop info: FileInfo

功能：获取文件元数据信息。 类型：[FileInfo](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-fileinfo) [h2]prop length
    
    public prop length: Int64

功能：获取文件头至文件尾的数据字节数。 类型：[Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) [h2]prop position
    
    public prop position: Int64

功能：获取文件当前光标位置。 类型：[Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) [h2]prop remainLength
    
    public prop remainLength: Int64

功能：获取文件当前光标位置至文件尾的数据字节数。 类型：[Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) [h2]init(Path, OpenOption)
    
    public init(path: Path, openOption: OpenOption)

功能：创建一个 [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) 对象。 需指定文件路径和文件打开方式（读写权限），路径支持相对路径和绝对路径。 参数：
    * path: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- 文件路径。
    * openOption: [OpenOption](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_enums#enum-openoption) \- 文件打开选项。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 如果创建操作时文件已存在、进行操作时文件不存在、文件的父目录不存在，或其他原因导致无法打开文件，则抛异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 如果 path 为空路径或者 path 路径中包含空字符，则抛出异常。
[h2]init(String, OpenOption)
    
    public init(path: String, openOption: OpenOption)

功能：创建 [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) 对象。 需指定文件路径和文件打开方式（读写权限），路径支持相对路径和绝对路径。 参数：
    * path: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 文件路径字符串。
    * openOption: [OpenOption](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_enums#enum-openoption) \- 文件打开选项。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 如果创建操作时文件已存在、进行操作时文件不存在、文件的父目录不存在，或其他原因导致无法打开文件，则抛异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 如果 path 是空字符串或者 path 包含空字符，则抛出异常。
[h2]static func copy(Path, Path, Bool)
    
    public static func copy(sourcePath: Path, destinationPath: Path, overwrite: Bool): Unit

功能：将文件拷贝到新的位置，不成功则抛异常。 参数：
    * sourcePath: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- 文件原路径。
    * destinationPath: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- 文件目标路径。
    * overwrite: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 是否覆盖, 为 true 时覆盖，为false 时不覆盖。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 文件路径为空，或源路径文件无读权限，或目标路径文件已存在且无写权限则抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 文件路径包含空字符则抛出异常。
[h2]static func copy(String, String, Bool)
    
    public static func copy(sourcePath: String, destinationPath: String, overwrite: Bool): Unit

功能：将文件拷贝到新的位置，不成功则抛异常。 参数：
    * sourcePath: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 文件原路径。
    * destinationPath: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 文件目标路径。
    * overwrite: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 是否覆盖, 为 true 时覆盖，为false 时不覆盖。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 文件路径为空，或源路径文件无读权限，或目标路径文件已存在且无写权限则抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 文件路径包含空字符则抛出异常。
[h2]static func create(Path)
    
    public static func create(path: Path): File

功能：以只写模式创建指定路径的文件。 参数：
    * path: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- 文件路径。
返回值：
    * [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) \- [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) 实例。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 如果路径指向的文件的上级目录不存在或文件已存在，则抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 如果文件路径为空或包含空字符，则抛出异常。
[h2]static func create(String)
    
    public static func create(path: String): File

功能：以只写模式创建指定路径的文件。 参数：
    * path: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 文件路径字符串。
返回值：
    * [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) \- [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) 实例。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 如果路径指向的文件的上级目录不存在或文件已存在，则抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 如果文件路径为空字符串或包含空字符，则抛出异常。
[h2]static func createTemp(Path)
    
    public static func createTemp(directoryPath: Path): File

功能：在指定目录下创建临时文件。 创建的文件名称是 tmpFileXXXXXX 形式，不使用的临时文件应手动删除。 参数：
    * directoryPath: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- 目录路径。
返回值：
    * [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) \- 临时文件 [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) 实例。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 创建文件失败或路径不存在则抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 如果文件路径为空或包含空字符，则抛出异常。
[h2]static func createTemp(String)
    
    public static func createTemp(directoryPath: String): File

功能：在指定目录下创建临时文件。 创建的文件名称是 tmpFileXXXXXX 形式，不使用的临时文件应手动删除。 参数：
    * directoryPath: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 目录路径字符串。
返回值：
    * [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) \- 临时文件 [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) 实例。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 创建文件失败或路径不存在则抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 如果文件路径为空字符串或包含空字符，则抛出异常。
[h2]static func delete(Path)
    
    public static func delete(path: Path): Unit

功能：删除指定路径下的文件。 删除文件前需保证文件存在并且已关闭，否则可能删除失败。 参数：
    * path: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- 文件路径。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 如果指定文件不存在，或删除失败，则抛异常。
[h2]static func delete(String)
    
    public static func delete(path: String): Unit

功能：删除指定路径下的文件。 删除文件前需保证文件存在并且已关闭，否则可能删除失败。 参数：
    * path: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 文件路径字符串。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 如果指定文件不存在，或删除失败，则抛异常。
[h2]static func exists(Path)
    
    public static func exists(path: Path): Bool

功能：判断路径对应的文件是否存在。 参数：
    * path: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- 文件路径。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- false 表示路径不存在或者路径对应的不是文件，true 表示路径对应的是文件或指向文件的软链接。
[h2]static func exists(String)
    
    public static func exists(path: String): Bool

功能：判断路径对应的文件是否存在。 参数：
    * path: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 文件路径字符串。
返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- false 表示路径不存在或者路径对应的不是文件，true 表示路径对应的是文件或指向文件的软链接。
[h2]static func move(Path, Path, Bool)
    
    public static func move(sourcePath: Path, destinationPath: Path, overwrite: Bool): Unit

功能：移动文件。 当 overwrite 为 true，如果指定路径中已有同名的文件，则会覆盖已存在的文件，当 overwrite 为 false，不覆盖，如果目标目录已存在会抛出异常。 参数：
    * sourcePath: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- 文件原路径。
    * destinationPath: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- 文件目标路径。
    * overwrite: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 是否覆盖, 为 true 时覆盖，为false 时不覆盖。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 目标目录名为空，或目标目录名包含空字符。
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 源目录不存在，或 overwrite 为 false 时目标目录已存在，或移动失败。
[h2]static func move(String, String, Bool)
    
    public static func move(sourcePath: String, destinationPath: String, overwrite: Bool): Unit

功能：移动文件。 当 overwrite 为 true，如果指定路径中已有同名的文件，则会覆盖已存在的文件，当 overwrite 为 false，不覆盖，如果目标目录已存在会抛出异常。 参数：
    * sourcePath: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 文件原路径。
    * destinationPath: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 文件目标路径。
    * overwrite: [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 是否覆盖, 为 true 时将覆盖目标路径中的文件，为 false 时不覆盖。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 目标目录名为空，或目标目录名包含空字符。
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 源目录不存在，或 overwrite 为 false 时目标目录已存在，或移动失败。
[h2]static func openRead(Path)
    
    public static func openRead(path: Path): File

功能：以只读模式打开指定路径的文件。 参数：
    * path: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- 文件路径。
返回值：
    * [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) \- [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) 实例，该实例需要手动及时调用 [close](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#func-close) 函数关闭文件。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 如果文件不存在，或文件不可读，则抛异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 文件路径包含空字符则抛出异常。
[h2]static func openRead(String)
    
    public static func openRead(path: String): File

功能：以只读模式打开指定路径的文件。 参数：
    * path: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 文件路径字符串。
返回值：
    * [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) \- [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) 实例，该实例需要手动及时调用 [close](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#func-close) 函数关闭文件。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 如果文件不存在，或文件不可读，则抛异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 文件路径包含空字符则抛出异常。
[h2]static func readFrom(Path)
    
    public static func readFrom(path: Path): Array<Byte>

功能：根据指定路径读取文件全部内容，以字节数组的形式返回其内容。 参数：
    * path: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- 文件路径。
返回值：
    * [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_types#type-byte)> \- 字节数组形式的文件全部内容。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 文件路径为空、文件不可读、文件读取失败，则抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 文件路径包含空字符则抛出异常。
[h2]static func readFrom(String)
    
    public static func readFrom(path: String): Array<Byte>

功能：根据指定路径读取文件全部内容，以字节数组的形式返回其内容。 参数：
    * path: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 文件路径字符串。
返回值：
    * [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_types#type-byte)> \- 字节数组形式的文件全部内容。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 文件读取失败、文件关闭失败、文件路径为空、文件不可读，则抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 文件路径包含空字符则抛出异常。
[h2]static func writeTo(Path, Array<Byte>, OpenOption)
    
    public static func writeTo(path: Path, buffer: Array<Byte>, openOption!: OpenOption = CreateOrAppend): Unit

功能：按照 openOption 打开指定路径的文件并将 buffer 写入。 参数：
    * path: [Path](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_structs#struct-path) \- 文件路径。
    * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_types#type-byte)> \- 待写入的 bytes。
    * openOption!: [OpenOption](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_enums#enum-openoption) \- 文件打开选项，默认为 CreateOrAppend。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 文件路径为空则抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 如果文件路径为空或包含空字符，则抛出异常。
[h2]static func writeTo(String, Array<Byte>, OpenOption)
    
    public static func writeTo(path: String, buffer: Array<Byte>, openOption!: OpenOption = CreateOrAppend): Unit

功能：按照 openOption 打开指定路径的文件并将 buffer 写入。 参数：
    * path: [String](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-string) \- 文件路径字符串。
    * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_types#type-byte)> \- 待写入的 bytes。
    * openOption!: [OpenOption](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_enums#enum-openoption) \- 文件打开选项，默认为 CreateOrAppend。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 文件路径为空则抛出异常。
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 如果文件路径为空字符串或包含空字符，则抛出异常。
[h2]func canRead()
    
    public func canRead(): Bool

功能：判断当前 [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) 对象是否可读。 该函数返回值由创建文件对象的 openOption 所决定，文件对象关闭后返回 false。 返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 返回 true 表示可读，返回 false 表示不可读或文件对象已关闭。
[h2]func canWrite()
    
    public func canWrite(): Bool

功能：判断当前 [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) 对象是否可写。 该函数返回值由创建文件对象的 openOption 所决定，文件对象关闭后返回 false。 返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- 返回 true 表示可写，false 表示不可写或文件对象已关闭。
[h2]func close()
    
    public func close(): Unit

功能：关闭当前 [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) 对象。 异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 如果关闭失败，则抛异常。
[h2]func copyTo(OutputStream)
    
    public func copyTo(out: OutputStream): Unit

功能：将当前 [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) 还没读取的数据全部写入到指定的 [OutputStream](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/io_package_interfaces#interface-outputstream) 中。 参数：
    * out: [OutputStream](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/io_package_interfaces#interface-outputstream) \- 待写入的 [OutputStream](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/io_package_interfaces#interface-outputstream)。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 文件读取时未被打开或文件没有读取权限，则抛出异常。
[h2]func flush()
    
    public func flush(): Unit

功能：将缓冲区数据写入流。由于 [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) 不存在缓冲区，所以该函数没有具体作用。 [h2]func isClosed()
    
    public func isClosed(): Bool

功能：判断当前 [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) 对象是否已关闭。 返回值：
    * [Bool](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#bool) \- true 表示已关闭，false 表示未关闭。
[h2]func read(Array<Byte>)
    
    public func read(buffer: Array<Byte>): Int64

功能：从文件中读出数据到 buffer 中。 参数：
    * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_types#type-byte)> \- 读取数据存放的缓冲区。
返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 读取成功，返回读取字节数，如果文件被读完，返回 0。
异常：
    * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_exceptions#class-illegalargumentexception) \- 如果 buffer 为空，则抛出异常。
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 读取失败、文件已关闭，或文件不可读，则抛出异常。
[h2]func readToEnd()
    
    public func readToEnd(): Array<Byte>

功能：读取当前 [File](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_classes#class-file) 所有剩余数据，以 [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_types#type-byte)> 形式返回剩余的 bytes。 返回值：
    * [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_types#type-byte)> \- 文件内剩余的字节数组形式内容。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 如果读取失败，或文件不可读，则抛异常。
[h2]func seek(SeekPosition)
    
    public func seek(sp: SeekPosition): Int64

功能：将光标跳转到指定位置。 指定的位置不能位于文件头部之前，指定位置可以超过文件末尾，但指定位置到文件头部的最大偏移量不能超过当前文件系统允许的最大值，这个最大值接近当前文件系统的所允许的最大文件大小，一般为最大文件大小减去 4096 个字节。 参数：
    * sp: [SeekPosition](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/io_package_enums#enum-seekposition) \- 指定光标跳转后的位置。
返回值：
    * [Int64](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_intrinsics#int64) \- 返回文件头部到跳转后位置的偏移量（以字节为单位）。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 指定位置不满足以上情况时，或文件不能 seek 时均会抛异常。
[h2]func write(Array<Byte>)
    
    public func write(buffer: Array<Byte>): Unit

功能：将 buffer 中的数据写入到文件中。 参数：
    * buffer: [Array](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/core_package_types#type-byte)> \- 待写入数据的缓冲区，若 buffer 为空则直接返回。
异常：
    * [FSException](https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/fs_package_exceptions#class-fsexception) \- 如果写入失败、只写入了部分数据、文件已关闭或文件不可写则抛出异常。
