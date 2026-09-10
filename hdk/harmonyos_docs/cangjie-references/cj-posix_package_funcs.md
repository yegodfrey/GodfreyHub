---
name: cangjie-references/cj-posix_package_funcs
title: 函数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.posix / 函数
---

# 函数

#### func `open`(String, Int32) (deprecated)
    
    
    public func `open`(path: String, oflag: Int32): Int32

功能：打开文件并为其返回新的文件描述符，或在失败时返回 -1。

当文件打开方式参数 oflag 设置为 [O_CREAT](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_creat-deprecated) 时，可以通过参数设置文件权限。

[O_RDONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdonly-deprecated)、[O_RDWR](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdwr-deprecated)、[O_WRONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_wronly-deprecated) 作为 oflag 取值为互斥关系，但可以与其他操作标识一起使用，如 [O_APPEND](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_append-deprecated) 。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/NncvqrMaQMGNHpNVW8KaIg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=5F1DC78131007DD2BE0B664AA0A02FBBBF929F0ED078183DFB6ACCABD96D21DB)

  * 不支持平台：Windows、macOS、iOS。
  * 未来版本即将废弃。



参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * oflag: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件打开的方式。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回新的文件描述符，执行失败时返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let filePath = "./test_open_file.txt"
        // 创建一个测试文件
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 使用open打开文件（只读模式）
            let openedFd = `open`(filePath, O_RDONLY)
            if (openedFd != -1) {
                println("Successfully opened file with fd: ${openedFd}")
                close(openedFd)
            } else {
                println("Failed to open file")
            }
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
        return 0
    }

运行结果：
    
    
    Successfully opened file with fd: 3

#### func `open`(String, Int32, UInt32) (deprecated)
    
    
    public func `open`(path: String, oflag: Int32, flag: UInt32): Int32

功能：打开文件并为其返回新的文件描述符，或在失败时返回 -1。path 代表文件路径，oflag 代表文件打开的方式，其中 [O_RDONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdonly-deprecated)、[O_RDWR](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdwr-deprecated)、[O_WRONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_wronly-deprecated) 作为 oflag 取值为互斥关系，但可以与其他操作标识一起使用，如 [O_APPEND](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_append-deprecated) 操作。

当文件打开方式参数 oflag 设置为 [O_CREAT](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_creat-deprecated) 时，可以通过参数设置文件权限。

[O_RDONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdonly-deprecated)、[O_RDWR](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdwr-deprecated)、[O_WRONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_wronly-deprecated) 作为 oflag 取值为互斥关系，但可以与其他操作标识一起使用，如 [O_APPEND](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_append-deprecated) 。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/b7_ADC9ISxCfjfuqpv6bKg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=0316F69498D1C812C3AB4BFE8C09CDEF16980BFE14B53DFEAED4318915538E48)

  * 不支持平台：Windows、macOS、iOS。
  * 未来版本即将废弃。



参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * oflag: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件打开的方式。
  * flag: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 如果 oflag 设置了 [O_CREAT](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_creat-deprecated) 并且需要创建新文件，则 flag 参数标识对新文件的权限，否则 flag 不改变文件权限。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回新的文件描述符，执行失败时返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let filePath = "./test_open_file2.txt"
    
        // 使用open创建并打开文件（创建模式）
        let fd = `open`(filePath, O_CREAT | O_WRONLY, 0o644u32)
        if (fd != -1) {
            println("Successfully created and opened file with fd: ${fd}")
            close(fd)
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create and open file")
        }
        return 0
    }

运行结果：
    
    
    Successfully created and opened file with fd: 3

#### func access(String, Int32) (deprecated)
    
    
    public func access(path: String, mode: Int32): Int32

功能：判断某个文件是否具有某种权限，具有返回 0，否则返回 -1。

mode 为指定权限，传入类型 [R_OK](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-r_ok-deprecated)、W_OK、[X_OK](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-x_ok-deprecated)、[F_OK](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-f_ok-deprecated)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/4fb9yUAcRjCweViKLFxN1g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=7E5B589261FE3EAA6B1ED1B31F1A6B3DD345394CB493721F62988C5636DBD05E)

未来版本即将废弃。

参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * mode: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 待检查的权限。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件具有待检查的权限返回 0，否则返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let filePath = "./test.txt"
        // 创建一个测试文件
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
            // 检查文件是否存在和可读
            let result = access(filePath, R_OK)
            if (result == 0) {
                println("File is readable")
            } else {
                println("File is not readable")
            }
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
        return 0
    }

运行结果：
    
    
    File is readable

#### func chdir(String) (deprecated)
    
    
    public func chdir(path: String): Int32

功能：通过指定路径的方式，更改调用进程的当前工作目录。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/TT2IzmyeS6qMervoIO2o3Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=6CE110F29684DED9DEF8BFB4AC86B33961983F7A0D41448795F799B9B27EF2E6)

未来版本即将废弃。

参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 改变后的路径。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 设置成功，返回 0，设置失败, 返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 获取当前执行进程工作目录的绝对路径。
        let currentDir = getcwd()
    
        // 尝试切换到根目录
        let result = chdir("/")
        if (result == 0) {
            let newDir = getcwd()
            println("Changed to directory: ${newDir}")
            // 切换回原目录
            chdir(currentDir)
        } else {
            println("Failed to change directory")
        }
        return 0
    }

运行结果：
    
    
    Changed to directory: /

#### func chmod(String, UInt32) (deprecated)
    
    
    public func chmod(path: String, mode: UInt32): Int32

功能：修改文件访问权限。

  * 在 Windows 环境下，所有文件和目录都是可读的，chmod() 不能更改文件的可读权限。
  * 在 Windows 环境下，文件的可执行权限通过文件扩展名设置，所有目录都是可执行的，chmod() 不能更改文件和目录的可执行权限。
  * 在 iOS 环境下，运行设置了可执行权限的文件，系统会忽略设置的可执行权限。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/t6m9jbbFSNa4y3hgO6bi1g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=AF0AE60BA35D1455F6F9E3F91402B9BC5E714A595B178E3AC3C780EA4C8359AB)

未来版本即将废弃。

参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * mode: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 要修改的权限。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 操作成功时返回 0，失败时返回 -1。当 mode 为非法参数时，[chmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-chmodstring-uint32-deprecated) 会忽略该参数，返回 0。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let filePath = "./test_chmod.txt"
        // 创建一个测试文件
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 修改文件权限为可读可写可执行
            let result = chmod(filePath, 0o755u32)
            if (result == 0) {
                println("Successfully changed file permissions")
            } else {
                println("Failed to change file permissions")
            }
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
        return 0
    }

运行结果：
    
    
    Successfully changed file permissions

#### func chown(String, UInt32, UInt32) (deprecated)
    
    
    public func chown(path: String, owner: UInt32, group: UInt32): Int32

功能：修改文件所有者和文件所有者所属组。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/2GFmYpAxRWa76FWr0NBlWw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=C77C145B7DFEBE5397897600E6AE2287430AC7DE6A8086B1D96BCCB1E7DF7077)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * owner: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 所有者 uid。
  * group: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 指定 gid 参数。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 操作成功时返回 0，失败时返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let filePath = "./test_chown.txt"
        // 创建一个测试文件
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 注意：在大多数系统上，需要root权限才能真正改变文件所有者
            // 这里只是演示函数调用方式
            let result = chown(filePath, 1000u32, 1000u32) // 使用常见的用户ID和组ID
            if (result == 0) {
                println("Successfully changed file ownership")
            } else {
                println("Failed to change file ownership (may need root permissions)")
            }
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
        return 0
    }

运行结果：
    
    
    Successfully changed file ownership

#### func close(Int32) (deprecated)
    
    
    public func close(fd: Int32): Int32

功能：关闭文件，[close](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-closeint32-deprecated) 将会触发数据写回磁盘，并释放文件占用的资源。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/78/v3/yqtpn_kmTrGc8rRJ27JypA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=AC265AF4CD8258A3514358AA8127C41026DB6C2F1F4F96170644455DB8CD97A4)

未来版本即将废弃。

参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件描述符。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 成功时返回 0，失败时返回 -1。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let filePath = "./test_close.txt"
        // 创建一个测试文件
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            println("File descriptor created: ${fd}")
    
            // 关闭文件描述符
            let result = close(fd)
            if (result == 0) {
                println("Successfully closed file descriptor")
            } else {
                println("Failed to close file descriptor")
            }
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
        return 0
    }

运行结果：
    
    
    File descriptor created: 3
    Successfully closed file descriptor

#### func creat(String, UInt32) (deprecated)
    
    
    public func creat(path: String, flag: UInt32): Int32

功能：创建文件并为其返回文件描述符，或在失败时返回 -1。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/TVKeHnA4QU2u0zg4Bu4oGA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=5B43E82252B2A5E6DC3D6E3C15DEC7763E32358ADA88E7EDA6473A6679CD1D26)

未来版本即将废弃。

参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * flag: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 创建文件的权限。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回文件描述符，执行失败时返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let filePath = "./test_creat_file.txt"
        // 创建一个测试文件，权限为0o644 (rw-r--r--)
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            println("Successfully created file with fd: ${fd}")
            // 关闭文件描述符
            close(fd)
            // 清理测试文件
            unlink(filePath)
            println("File created and cleaned up successfully")
        } else {
            println("Failed to create file")
        }
        return 0
    }

运行结果：
    
    
    Successfully created file with fd: 3
    File created and cleaned up successfully

#### func dup(Int32) (deprecated)
    
    
    public func dup(fd: Int32): Int32

功能：用于复制旧 fd 参数指定的文件描述符并返回。此新文件描述符和旧的参数 fd 引用同一文件，共享文件各种状态。共享所有的锁定、读写位置和各项权限或标志等。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/XLru8RnBRQKLU5t749E-vg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=5E8BB278AA9B2FB7031305E6A95469093CF5E204AE43CFFAB7E205B742EAF994)

未来版本即将废弃。

参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件描述符。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回最小且未使用的文件描述符，执行失败时返回 -1。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let filePath = "./test_dup_file.txt"
        // 创建一个测试文件
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            // 复制文件描述符
            let dupFd = dup(fd)
            if (dupFd != -1) {
                println("Original fd: ${fd}, Duplicated fd: ${dupFd}")
                // 关闭两个文件描述符
                close(fd)
                close(dupFd)
            } else {
                println("Failed to duplicate file descriptor")
                close(fd)
            }
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create file")
        }
        return 0
    }

运行结果：
    
    
    Original fd: 3, Duplicated fd: 4

#### func dup2(Int32, Int32) (deprecated)
    
    
    public func dup2(fd: Int32, fd2: Int32): Int32

功能：用于复制 oldfd 参数指定的文件描述符，并将其返回到 newfd 参数。如果参数 newfd 是打开的文件描述符，则 newfd 指定的文件将首先关闭。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/j1wkYh9LTcSl6MtU-aKFTg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=0857AACCC1B8D0AFAE28F4CEB8D759A515D1D6586A62F046D216162585C5A806)

未来版本即将废弃。

参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- oldfd 参数指定的文件描述符。
  * fd2: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- newfd 参数指定的文件描述符。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- fd2 文件描述符。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let filePath1 = "./test_dup2_file1.txt"
        let filePath2 = "./test_dup2_file2.txt"
    
        // 创建两个测试文件
        let fd1 = creat(filePath1, 0o644u32)
        let fd2 = creat(filePath2, 0o644u32)
    
        if (fd1 != -1 && fd2 != -1) {
            println("Original fd1: ${fd1}, fd2: ${fd2}")
            // 使用dup2将fd1复制到fd2，这会先关闭fd2
            let result = dup2(fd1, fd2)
            if (result != -1) {
                println("dup2 successful, result fd: ${result}")
                // 关闭文件描述符
                close(fd1)
                close(fd2)
            } else {
                println("Failed to dup2 file descriptors")
                close(fd1)
                close(fd2)
            }
            // 清理测试文件
            unlink(filePath1)
            unlink(filePath2)
        } else {
            println("Failed to create files")
            if (fd1 != -1) {
                close(fd1)
            }
            if (fd2 != -1) {
                close(fd2)
            }
        }
        return 0
    }

运行结果：
    
    
    Original fd1: 3, fd2: 4
    dup2 successful, result fd: 4

#### func faccessat(Int32, String, Int32, Int32) (deprecated)
    
    
    public func faccessat(fd: Int32, path: String, mode: Int32, flag: Int32): Int32

功能：判断 fd 对应的文件是否具有某种权限，具有返回 0，否则返回 -1。

mode 为指定权限，传入类型 [R_OK](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-r_ok-deprecated)、W_OK、[X_OK](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-x_ok-deprecated)、[F_OK](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-f_ok-deprecated)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bc/v3/atg-qma9TUiJFYrR78IlkA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=6C34ACE7D4B3B5F7A4D2B55E92757EB86411139C3AE66B3D6A8C4864150F817F)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件描述符。
  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * mode: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 待检查的权限。
  * flag: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 将以下一个或多个值按位或运算获取。(512)使用有效的用户和组 ID 执行访问检查，默认情况下使用有效 ID；(256) 如果路径名是符号链接，不会取消引用而是返回有关链接本身信息。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件具有待检查的权限返回 0，否则返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let filePath = "./test_faccessat_file.txt"
        // 创建一个测试文件
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 使用faccessat检查文件是否可读
            let result = faccessat(AT_FDCWD, filePath, R_OK, 0)
            if (result == 0) {
                println("File is readable")
            } else {
                println("File is not readable")
            }
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
        return 0
    }

运行结果：
    
    
    File is readable

#### func fchdir(Int32) (deprecated)
    
    
    public func fchdir(fd: Int32): Int32

功能：通过指定文件路径的描述符，更改调用进程的当前工作目录。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/eQ7mScxGT0mKtxNMyg7kLA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=B8331373221C0FE389C7AFCAC9E5DDA43C172788A3E5D2874992528692A77020)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 改变后的文件路径的描述符。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 设置成功，返回 0，设置失败, 返回 -1。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let currentDir = getcwd()
        println("Current directory: ${currentDir}")
    
        // 打开当前目录获取文件描述符
        let fd = open(".", O_RDONLY, 0u32)
        if (fd != -1) {
            // 使用fchdir切换到当前目录（实际上不会改变目录）
            let result = fchdir(fd)
            if (result == 0) {
                let newDir = getcwd()
                println("Directory after fchdir: ${newDir}")
            } else {
                println("Failed to change directory with fchdir")
            }
            close(fd)
        } else {
            println("Failed to open current directory")
        }
        return 0
    }

可能的运行结果：
    
    
    Current directory: /home/usr/temp
    Directory after fchdir: /home/usr/temp

#### func fchmod(Int32, UInt32) (deprecated)
    
    
    public func fchmod(fd: Int32, mode: UInt32): Int32

功能：修改文件描述符对应的文件访问权限。 在 iOS 环境下，运行设置了可执行权限的文件，系统会忽略设置的可执行权限。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/ypVFUs5bTZSLVCUml9TvTg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=5C33A263FDFA57E101338A80EEDFE858ABCC137BF6F226A93A142EF852E10B59)

未来版本即将废弃。

参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件描述符。
  * mode: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 要修改的权限。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 操作成功时返回 0，失败时返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let filePath = "./test_fchmod_file.txt"
        // 创建一个测试文件
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            // 使用fchmod修改文件权限
            let result = fchmod(fd, 0o755u32)
            if (result == 0) {
                println("Successfully changed file permissions with fchmod")
            } else {
                println("Failed to change file permissions with fchmod")
            }
            close(fd)
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
        return 0
    }

运行结果：
    
    
    Successfully changed file permissions with fchmod

#### func fchmodat(Int32, String, UInt32, Int32) (deprecated)
    
    
    public func fchmodat(fd: Int32, path: String, mode: UInt32, flag: Int32): Int32

功能：修改文件描述符对应的文件访问权限。

  * path 为相对路径且 fd 为特殊值 AT_FDCWD 时，则路径将相对于调用进程的当前工作目录。
  * path 为相对路径且 fd 非 AT_FDCWD 时，则路径将相对于 fd 引用的文件所属目录。
  * path 为绝对路径时 fd 参数将被忽略。
  * 在 iOS 环境下，运行设置了可执行权限的文件，系统会忽略设置的可执行权限。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/53/v3/WdLsII_MTWqnlJpV5NGDzQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=3D9657C0876040682DBE6E5B573F1F1E30707DAA8A1DC850F66B010310A87842)

未来版本即将废弃。

参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件描述符。
  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * mode: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 要修改的权限。
  * flag: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 取值可为 0，或 (256) 如果路径名是符号链接，不会取消引用它，而是返回有关链接本身的信息。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 操作成功时返回 0，失败时返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let filePath = "./test_fchmodat_file.txt"
        // 创建一个测试文件
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 使用fchmodat修改文件权限
            let result = fchmodat(AT_FDCWD, filePath, 0o755u32, 0)
            if (result == 0) {
                println("Successfully changed file permissions with fchmodat")
            } else {
                println("Failed to change file permissions with fchmodat")
            }
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
        return 0
    }

运行结果：
    
    
    Successfully changed file permissions with fchmodat

#### func fchown(Int32, UInt32, UInt32) (deprecated)
    
    
    public func fchown(fd: Int32, owner: UInt32, group: UInt32): Int32

功能：修改 fd 对应的文件所有者和文件所有者所属组。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/jdxrN_XVTseSXVAFHJZtlA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=F987CC7E5B9BDE1897E580D82A7CE21C2001967D7142157457803FAB76483637)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件描述符。
  * owner: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 所有者 uid。
  * group: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 指定 gid 参数。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 操作成功时返回 0，失败时返回 -1。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let filePath = "./test_fchown_file.txt"
        // 创建一个测试文件
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            // 使用fchown修改文件所有者（需要root权限才能真正生效）
            let result = fchown(fd, 1000u32, 1000u32) // 使用常见的用户ID和组ID
            if (result == 0) {
                println("fchown call succeeded (may not have actual effect without root permissions)")
            } else {
                println("fchown call failed")
            }
            close(fd)
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
        return 0
    }

可能的运行结果：
    
    
    fchown call succeeded (may not have actual effect without root permissions)

#### func fchownat(Int32, String, UInt32, UInt32, Int32) (deprecated)
    
    
    public func fchownat(fd: Int32, path: String, owner: UInt32, group: UInt32, flag: Int32): Int32

功能：修改文件描述符对应的文件所有者和文件所有者所属组。

  * path 为相对路径且 fd 为特殊值 AT_FDCWD 时，则路径将相对于调用进程的当前工作目录。
  * path 为相对路径且 fd 非 AT_FDCWD 时，则路径将相对于 fd 引用的文件所属目录。
  * path 为绝对路径时 fd 参数将被忽略。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/aNcmY2t4R0uT-k27xzzzTQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=1C42D7804DF2A2B89B02989FFC39BD72948B59B9A0CD3095A780CDAAE2E3A6B2)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件描述符。
  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * owner: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 所有者 uid。
  * group: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 指定 gid 参数。
  * flag: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 取值可为 0，或 (256) 如果路径名是符号链接，不会取消引用它，而是返回有关链接本身的信息。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 操作成功时返回 0，失败时返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let filePath = "./test_fchownat_file.txt"
        // 创建一个测试文件
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 使用fchownat修改文件所有者（需要root权限才能真正生效）
            let result = fchownat(AT_FDCWD, filePath, 1000u32, 1000u32, 0) // 使用常见的用户ID和组ID
            if (result == 0) {
                println("fchownat call succeeded (may not have actual effect without root permissions)")
            } else {
                println("fchownat call failed")
            }
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
        return 0
    }

可能的运行结果：
    
    
    fchownat call succeeded (may not have actual effect without root permissions)

#### func getcwd() (deprecated)
    
    
    public func getcwd(): String

功能：获取当前执行进程工作目录的绝对路径。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/5Fzo3s9iTl6QT0d94j8cPg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=71DBF7C2C22DD9DFB9062558C557BA9031790B082ACA20AA85C38B78231CB99D)

未来版本即将废弃。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 操作成功，返回包含路径信息的字符串，操作失败则返回空字符串。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 获取当前工作目录
        let currentDir = getcwd()
        println("currentDir: ${currentDir}")
        return 0
    }

可能的运行结果：
    
    
    currentDir: /home/usr/temp

#### func getgid() (deprecated)
    
    
    public func getgid(): UInt32

功能：获取用户组 ID。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cb/v3/DBvd4VU1Q0CGKJKt1azaBA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=C4B258BAF2BBB3F3DEB56C4635656D36D9B0FA031642B5B0EC38B57718CF8E15)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 当前用户组 ID。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 获取当前用户组ID
        let gid = getgid()
        println("Current group ID: ${gid}")
        return 0
    }

可能的运行结果：
    
    
    Current group ID: 1000

#### func getgroups(Int32, CPointer<UInt32>) (deprecated)
    
    
    public unsafe func getgroups(size: Int32, gidArray: CPointer<UInt32>): Int32

功能：获取当前用户所属组的组 ID 列表。

如果 gidArray 参数大小的值为零，则函数仅返回表示用户所属的组数，不会向 gidArray 中放入 gid。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/MP7y7FTsQEq1nsNymiRCZQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=7C567187F85CFA5657A86406088014E5AD65A97842D85D5634B497F574207393)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * size: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- gidArray 可以容纳的 gid 的数量。
  * gidArray: [CPointer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#cpointert)<[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)> \- 存放 gid 信息。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 执行成功，返回组代码，执行失败, 返回 -1。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        unsafe {
            var cp: CPointer<UInt32> = CPointer<UInt32>()
            var getg = getgroups(0, cp)
            println("groups: ${getg}")
        }
        return 0
    }

可能的运行结果：
    
    
    groups: 12

#### func gethostname() (deprecated)
    
    
    public func gethostname(): String

功能：获取主机名称，此名称通常是 TCP/IP 网络上主机的名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/g-VwgBnfQZKpW5z9DyMMPw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=8CCBDC7A8E47C8EE347E9587A0FA0C475E51D181F87931D1E53B24556CE91202)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 获取到的主机的名称字符串, 获取失败则返回空字符串。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 获取主机名
        let hostname = gethostname()
        println("Hostname: ${hostname}")
        return 0
    }

可能的运行结果：
    
    
    Hostname: myhost

#### func getlogin() (deprecated)
    
    
    public func getlogin(): String

功能：获取当前登录名。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/dJPGilGDS8Khj0aWrf6p1g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=85EA7944BA9C7AA04E9EB22C16F24D4BEE2753CD571B4311C5C8F5F4428DCF0F)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 操作成功时返回登录名，失败时返回空字串。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 获取当前登录名
        let loginName = getlogin()
        println("Login name: ${loginName}")
        return 0
    }

可能的运行结果：
    
    
    Login name: root

#### func getos() (deprecated)
    
    
    public func getos(): String

功能：从 /proc/version 文件中获取 Linux 系统的信息。例如: Linux version 4.15.0-142-generic (buildd@lgw01-amd64-036) (gcc version 7.5.0 (Ubuntu 7.5.0-3ubuntu1~18.04)) #146-Ubuntu SMP Tue Apr 13 01:11:19 UTC 2021。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/5WqC2jFfSzKeWwKeBii2wQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=78961B95F94FA55B2B2AC25E61A029FE8DD94DFDD024F7FA16E272841359C1D5)

  * 不支持平台：Windows、macOS、iOS。
  * 未来版本即将废弃。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 获取到的 Linux 系统的信息字符串。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let osInfo = getos()
        println("OS Info: ${osInfo}")
        return 0
    }

可能的运行结果：
    
    
    OS Info: Your system information

#### func getpgid(Int32) (deprecated)
    
    
    public func getpgid(pid: Int32): Int32

功能：获取 pid 指定的进程的 PGID，如果 pid 为零，返回调用进程的进程 ID。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/Tcy-VxEnQnqjPXC4_u5ugQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=EEC63726985A89E4B7142EE3ADB388EADA2C8D888724D69F71D6BB121DB28BDE)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * pid: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 目标进程 ID。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 执行成功，返回进程组 ID，执行失败, 返回 -1。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let pgid = getpgid(0)
        if (pgid != -1) {
            println("Process group ID: ${pgid}")
        } else {
            println("Failed to get process group ID")
        }
        return 0
    }

可能的运行结果：
    
    
    Process group ID: 3969041

#### func getpgrp() (deprecated)
    
    
    public func getpgrp(): Int32

功能：获取调用进程的进程组 ID。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/af/v3/YG0lqzFaSNyhQCG1lCyBvQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=18B563FB94F79C0ED99B6BED641D8107A69AE28BE1D6587F954AA0E6568ECB2C)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回调用进程的进程组 ID。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let pgrp = getpgrp()
        if (pgrp != -1) {
            println("Process group: ${pgrp}")
        } else {
            println("Failed to get process group")
        }
        return 0
    }

可能的运行结果：
    
    
    Process group: 3969491

#### func getpid() (deprecated)
    
    
    public func getpid(): Int32

功能：获取调用进程的进程 ID(PID)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/ZA2YAjGiQDeJ0ON3aY4Wjw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=6F4B7113006A933097A5BAF6327E51B63E8A9C5E292EABC00615F23AD51BB791)

未来版本即将废弃。

返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回调用进程的进程 ID(PID)。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let pid = getpid()
        println("Process ID: ${pid}")
        return 0
    }

可能的运行结果：
    
    
    Process ID: 3969905

#### func getppid() (deprecated)
    
    
    public func getppid(): Int32

功能：获取调用进程的父进程 ID。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/GP5rKG5NQziG-awwtfvktA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=D28A92A81CDA011F99CD6979FC376D6A28897F296DF48EDA35B98A11FD9B5275)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回调用进程的父进程 ID。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let ppid = getppid()
        if (ppid != -1) {
            println("Parent process ID: ${ppid}")
        } else {
            println("Failed to get parent process ID")
        }
        return 0
    }

可能的运行结果：
    
    
    Parent process ID: 3159546

#### func getuid() (deprecated)
    
    
    public func getuid(): UInt32

功能：获取调用进程的真实用户 ID。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/72/v3/wdwHI_fERrq-dokAZQ9qnA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=D3F68D7F4ADABE85E9C80ED013F9B0E64CF2A2C93CE6D0A3AB102109EE9DCD62)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 当前真实用户 ID。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let uid = getuid()
        println("User ID: ${uid}")
        return 0
    }

可能的运行结果：
    
    
    User ID: 1000

#### func isatty(Int32) (deprecated)
    
    
    public func isatty(fd: Int32): Bool

功能：用于测试文件描述符是否引用终端，成功时返回 true，否则返回 false。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/uRR5bqWESEixvown3OTrAA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=C9EE24F91C2C122E58445B40867BA81C3F835CD551300098025D237CD948EA10)

未来版本即将废弃。

参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件描述符。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 操作成功时返回 true，否则返回 false。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 检查标准输入是否为终端
        let isStdinTTY = isatty(0)
        println("Is stdin a TTY: ${isStdinTTY}")
    
        // 检查标准输出是否为终端
        let isStdoutTTY = isatty(1)
        println("Is stdout a TTY: ${isStdoutTTY}")
    
        return 0
    }

可能的运行结果：
    
    
    Is stdin a TTY: true
    Is stdout a TTY: true

#### func isBlk(String) (deprecated)
    
    
    public func isBlk(path: String): Bool

功能：检查传入对象是否为块设备，并返回布尔类型。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/u06LAVHhQg2OvogDd8626w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=5F0E7858437C3CDE1A7D49DBF7E4E7381A2433C199ED5CF56B0D04C0D5D21CCD)

未来版本即将废弃。

参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果是，返回 true，否则返回 false。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let filePath = "./test_isblk_file.txt"
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 检查文件是否为块设备
            let isBlockDevice = isBlk(filePath)
            println("Is '${filePath}' a block device: ${isBlockDevice}")
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Is './test_isblk_file.txt' a block device: false

#### func isChr(String) (deprecated)
    
    
    public func isChr(path: String): Bool

功能：检查传入对象是否为字符设备，返回布尔类型。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e3/v3/cpZBqtSWSM2TLxg4fFbC6g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=427CE24ADB89E64DB2454853B764DCC1C7ADA4AF829B38359900E94B14E72F84)

未来版本即将废弃。

参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果是，返回 true，否则返回 false。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let filePath = "./test_ischr_file.txt"
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 检查文件是否为字符设备
            let isCharDevice = isChr(filePath)
            println("Is '${filePath}' a character device: ${isCharDevice}")
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Is './test_ischr_file.txt' a character device: false

#### func isDir(String) (deprecated)
    
    
    public func isDir(path: String): Bool

功能：检查传入对象是否为文件夹，返回布尔类型。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f3/v3/PnndOpUdRBCk6TO2NxQCmg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=47A4873566955893D579BFBDB0856F4CDDF00C8CF7D877A4797ABD7562AB55E2)

未来版本即将废弃。

参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果是，返回 true，否则返回 false。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let filePath = "./test_isdir_file.txt"
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 检查文件是否为目录
            let isDirectory = isDir(filePath)
            println("Is '${filePath}' a directory: ${isDirectory}")
    
            // 检查当前目录是否为目录
            let isCurrentDirectory = isDir(".")
            println("Is '.' a directory: ${isCurrentDirectory}")
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Is './test_isdir_file.txt' a directory: false
    Is '.' a directory: true

#### func isFIFO(String) (deprecated)
    
    
    public func isFIFO(path: String): Bool

功能：检查传入对象是否为 FIFO 文件，返回布尔类型。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/j3xR-PUxQBuDc8erZg3kTQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=BE181EC572F27A9245F57A462C997EF79C85C8A56858BDFCA3C4217BE79FFD34)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果是，返回 true，否则返回 false。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let filePath = "./test_isfifo_file.txt"
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 检查文件是否为FIFO文件
            let isFIFO = isFIFO(filePath)
            println("Is '${filePath}' a FIFO file: ${isFIFO}")
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Is './test_isfifo_file.txt' a FIFO file: false

#### func isLnk(String) (deprecated)
    
    
    public func isLnk(path: String): Bool

功能：检查传入对象是否为软链接，返回布尔类型。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/hqhxbWyyTrejqQD7V5dBWQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=E532EEEE37390928FEE8D43A67BC2E6FDFAB23901143410BF9A4CCBED8A65994)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果是，返回 true，否则返回 false。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let filePath = "./test_islnk_file.txt"
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 检查文件是否为软链接
            let isLink = isLnk(filePath)
            println("Is '${filePath}' a symbolic link: ${isLink}")
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Is './test_islnk_file.txt' a symbolic link: false

#### func isReg(String) (deprecated)
    
    
    public func isReg(path: String): Bool

功能：检查传入对象是否为普通文件，返回布尔类型。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/8BCCyjooQJ6efkL_xeg6Fw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=70B29FCC55F87B1E37586EF7FC5D2DF7947E058C4D6852C9B7DB247CEEB50055)

未来版本即将废弃。

参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果是，返回 true，否则返回 false。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let filePath = "./test_isreg_file.txt"
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 检查文件是否为普通文件
            let isRegular = isReg(filePath)
            println("Is '${filePath}' a regular file: ${isRegular}")
    
            // 检查当前目录是否为普通文件
            let isCurrentDirRegular = isReg(".")
            println("Is '.' a regular file: ${isCurrentDirRegular}")
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Is './test_isreg_file.txt' a regular file: true
    Is '.' a regular file: false

#### func isSock(String) (deprecated)
    
    
    public func isSock(path: String): Bool

功能：检查传入对象是否为套接字文件，返回布尔类型。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/eUzfyoYrSCuO-new_Sgfsw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=20D041E97D66367842037B1CC65116CA693BD47668CAA5B4E0831E3FB20495D8)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果是，返回 true，否则返回 false。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let filePath = "./test_issock_file.txt"
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 检查文件是否为套接字文件
            let isSocket = isSock(filePath)
            println("Is '${filePath}' a socket file: ${isSocket}")
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Is './test_issock_file.txt' a socket file: false

#### func isType(String, UInt32) (deprecated)
    
    
    public func isType(path: String, mode: UInt32): Bool

功能：检查文件是否为指定模式的文件。如果是，返回 ture，否则返回 false。根据模式的不同值确定不同的类型。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/mTQa8kTVQM2HSHtgqd3cYA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=20F89C1D0920DE722F831FD364F7DC79BF1615DC99127741816775A35F35FAED)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * mode: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 判断参数。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果是指定模式的文件，返回 true，否则返回 false。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let filePath = "./test_istype_file.txt"
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 检查文件是否为指定类型的文件（普通文件类型）
            let isRegularFile = isType(filePath, S_IFREG)
            println("Is '${filePath}' a regular file: ${isRegularFile}")
    
            // 检查文件是否为指定类型的文件（目录类型）
            let isDirectory = isType(filePath, S_IFDIR)
            println("Is '${filePath}' a directory: ${isDirectory}")
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Is './test_istype_file.txt' a regular file: true
    Is './test_istype_file.txt' a directory: false

#### func kill(Int32, Int32) (deprecated)
    
    
    public func kill(pid: Int32, sig: Int32): Int32

功能：系统调用可用于向任何进程组或进程发送任何信号。

  * 如果 pid 大于 0，则信号 sig 将发送到 pid 对应的进程。
  * 如果 pid 等于 0，然后 sig 被发送到调用进程的进程组中的每个进程。
  * 如果 pid 等于 -1，则 sig 被发送到调用进程有权发送信号的每个进程。
  * 如果 pid 小于 -1，则将 sig 发送到 ID 为 -pid 的进程组中的每个进程。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/3i4CS1-9ScuZka_hMbjO9w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=A14848239BDC32FEC9BA70D4F2A7CB48F2049DA6809781A1ECD8A6059A3DB450)

  * 不支持平台：Windows、iOS、HarmonyOS。
  * 未来版本即将废弃。



参数：

  * pid: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 进程 ID。
  * sig: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 信号 ID。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 操作成功时返回 0，否则返回 -1。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 获取当前进程ID
        let pid = getpid()
    
        // 发送SIGCONT信号给自己
        let result = kill(pid, SIGCONT)
        if (result == 0) {
            println("Successfully sent SIGCONT signal to process.")
        } else {
            println("Failed to send SIGCONT signal to process.")
        }
    
        return 0
    }

运行结果：
    
    
    Successfully sent SIGCONT signal to process.

#### func killpg(Int32, Int32) (deprecated)
    
    
    public func killpg(pgid: Int32, sig: Int32): Int32

功能：将信号 sig 发送到进程组 pgrp，如果 pgrp 为 0，则 [killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)() 将信号发送到调用进程的进程组。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/VeM3N7-PQIuxwsLXNfgKTA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=D601BD2B695A017B912DBBC7C54B5D2976006F4956EA2A0F77AE2342D9B05618)

  * 不支持平台：Windows、iOS、HarmonyOS。
  * 未来版本即将废弃。



参数：

  * pgid: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 组 ID。
  * sig: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 信号 ID。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 操作成功时返回 0，否则返回 -1。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 获取当前进程的进程组ID
        let pgid = getpgrp()
    
        // 发送SIGCONT信号到当前进程组
        let result = killpg(pgid, SIGCONT)
        if (result == 0) {
            println("Successfully sent SIGCONT signal to process group.")
        } else {
            println("Failed to send SIGCONT signal to process group.")
        }
    
        return 0
    }

运行结果：
    
    
    Successfully sent SIGCONT signal to process group.

#### func lchown(String, UInt32, UInt32) (deprecated)
    
    
    public func lchown(path: String, owner: UInt32, group: UInt32): Int32

功能：修改文件链接本身所有者和所有者所属组。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/9GMUMPVJT96EE4OnvDf9pA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=CA096FB45790C55EC29CF6EA77B7ACED391A3B66D36B9760F65D4712039FBA7F)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 字符串类型的文件路径。
  * owner: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 所有者 uid。
  * group: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 指定 gid 参数。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 操作成功时返回 0，失败时返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let filePath = "./test_lchown_file.txt"
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 获取当前用户的UID和GID
            let uid = getuid()
            let gid = getgid()
    
            // 修改文件链接本身的所有者和组
            let result = lchown(filePath, uid, gid)
            if (result == 0) {
                println("Successfully changed ownership of '${filePath}'")
            } else {
                println("Failed to change ownership of '${filePath}'")
            }
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Successfully changed ownership of './test_lchown_file.txt'

#### func link(String, String) (deprecated)
    
    
    public func link(path: String, newpath: String): Int32

功能：为存在的文件创建链接，一个文件可以有多个指向其 i-node 的目录条目。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/eXFHuAxnRDStH9lMKpJMBw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=02B528877CF58F5D616B86218E23A04D66C89F12DF7ABE8E3B30E23E90AF660E)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * newpath: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 其他文件路径。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 成功返回 0，错误返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 或 newPath 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let filePath = "./test_link_file.txt"
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 为存在的文件创建硬链接
            let linkPath = "./test_link_file_hardlink.txt"
            let result = link(filePath, linkPath)
            if (result == 0) {
                println("Successfully created hard link from '${filePath}' to '${linkPath}'")
            } else {
                println("Failed to create hard link from '${filePath}' to '${linkPath}'")
            }
    
            // 清理测试文件
            unlink(filePath)
            unlink(linkPath)
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Successfully created hard link from './test_link_file.txt' to './test_link_file_hardlink.txt'

#### func linkat(Int32, String, Int32, String, Int32) (deprecated)
    
    
    public func linkat(fd: Int32, path: String, nfd: Int32, newPath: String, lflag: Int32): Int32

功能：创建相对于目录文件描述符的文件链接。

  * path 为相对路径且 fd 为特殊值 AT_FDCWD 时，则路径将相对于调用进程的当前工作目录。
  * path 为相对路径且 fd 非 AT_FDCWD 时，则路径将相对于 fd 引用的文件所属目录。
  * path 为绝对路径时 fd 参数将被忽略。
  * newPath 的场景与 path 相同，只是当 newPath 为相对路径时是相对于 nfd 引用的文件所属目录。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/41/v3/wsZ1LlvAQee6dJP1dedOlw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=D08AAB05D4374BDC5CAE32320789640F6275A5CE5ABABFC63CF3066228F30BEC)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件描述符。
  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * nfd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 其他文件描述符。
  * newPath: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 其他文件路径，如果 newpath 存在，则不会覆盖。
  * lflag: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- [AT_EMPTY_PATH](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-at_empty_path-deprecated) 或 AT_SYMLINK_FOLLOW 或 0。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 成功返回 0，错误返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 或 newPath 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let filePath = "./test_linkat_file.txt"
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 使用linkat创建相对于当前目录的硬链接
            let linkPath = "./test_linkat_file_hardlink.txt"
            let result = linkat(AT_FDCWD, filePath, AT_FDCWD, linkPath, 0)
            if (result == 0) {
                println("Successfully created hard link from '${filePath}' to '${linkPath}' using linkat")
            } else {
                println("Failed to create hard link from '${filePath}' to '${linkPath}' using linkat")
            }
    
            // 清理测试文件
            unlink(filePath)
            unlink(linkPath)
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Successfully created hard link from './test_linkat_file.txt' to './test_linkat_file_hardlink.txt' using linkat

#### func lseek(Int32, Int64, Int32) (deprecated)
    
    
    public func lseek(fd: Int32, offset: Int64, whence: Int32): Int64

功能：当文件进行读或写时，读或写位置相应增加。本函数用于控制文件的读或写位置。调用成功时，返回当前读写位置，即从文件开头开始的字节数。如果发生错误，返回 -1。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/Zmb_-9_OQDmYcVBgc6sG-g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=CEFBEC0154F9D237217DB5B8DBC54264C77E2139EA0DD3B8231959DA6E9B1A90)

未来版本即将废弃。

参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 打开文件的文件描述符。
  * offset: [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 偏移量。
  * whence: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 表示控制模式。



返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 调用成功时，返回当前读写位置，即从文件开头开始的字节数。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let filePath = "./test_lseek_file.txt"
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            // 写入数据到文件
            unsafe {
                var buf = LibC.mallocCString("123456")
                let written = pwrite(fd, buf.getChars(), UIntNative(buf.size()), 0)
                LibC.free(buf)
                println("Written ${written} bytes to file")
            }
            close(fd)
    
            // 重新打开文件用于读写
            let fd2 = open64(filePath, O_RDWR)
            if (fd2 != -1) {
                // 将文件位置设置到文件开头
                let pos1 = lseek(fd2, 0, SEEK_SET)
                println("Position after SEEK_SET: ${pos1}")
    
                // 将文件位置设置到文件末尾
                let pos2 = lseek(fd2, 0, SEEK_END)
                println("Position after SEEK_END: ${pos2}")
    
                // 关闭文件
                close(fd2)
            }
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Written 6 bytes to file
    Position after SEEK_SET: 0
    Position after SEEK_END: 6

#### func nice(Int32) (deprecated)
    
    
    public func nice(inc: Int32): Int32

功能：更改当前线程的优先级。

成功时返回新值，失败时返回 -1。 inc 在值大于 19 时，返回最大值 19。

只有超级用户才能使用负的 inc 值，表示优先级高，进程执行得更快。 inc 代表当前进程的优先级，取值的范围是 +19（低优先级）到 -20。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d3/v3/Vosl-OA7QF-dYtmq6HaPtQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=8D5D20955A9D214B07FDBC79B6C98BDAB3A58E77C6A5CBD3581A901A5B41E684)

  * 不支持平台：Windows、iOS、HarmonyOS。
  * 未来版本即将废弃。



参数：

  * inc: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 当前进程的优先级, 值的范围是 +19（低优先级）到 -20。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回新优先级值。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 获取当前进程的优先级
        let currentPriority = nice(0)
        println("Current process priority: ${currentPriority}")
    
        // 尝试降低进程优先级（增加nice值）
        let newPriority = nice(5)
        if (newPriority != -1) {
            println("New process priority after nice(5): ${newPriority}")
        } else {
            println("Failed to change process priority")
        }
    
        return 0
    }

运行结果：
    
    
    Current process priority: 0
    New process priority after nice(5): 5

#### func open64(String, Int32) (deprecated)
    
    
    public func open64(path: String, oflag: Int32): Int32

功能：打开文件并为其返回新的文件描述符，或在失败时返回 -1。

  * 当文件打开方式参数 oflag 设置为 [O_CREAT](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_creat-deprecated) 时，可以通过参数设置文件权限。
  * [O_RDONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdonly-deprecated)、[O_RDWR](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdwr-deprecated)、[O_WRONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_wronly-deprecated) 作为 oflag 取值为互斥关系，但可以与其他操作标识一起使用，如 [O_APPEND](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_append-deprecated) 。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4c/v3/70C5zNSaTYiQQgvgRY3Hxg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=FE8A79EDE19DA60EE072AFE275DA8985C64E604AC282528868767B6BEBAA5C96)

未来版本即将废弃。

参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * oflag: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件打开的方式。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回新的文件描述符，执行失败时返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let filePath = "./test_open64_file.txt"
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 重新打开文件用于读写
            let fd2 = open64(filePath, O_RDWR)
            if (fd2 != -1) {
                // 写入数据到文件
                unsafe {
                    var buf = LibC.mallocCString("123456")
                    let written = pwrite(fd2, buf.getChars(), UIntNative(buf.size()), 0)
                    LibC.free(buf)
                    println("Written ${written} bytes to file")
                }
                // 关闭文件
                close(fd2)
            }
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Written 6 bytes to file

#### func open64(String, Int32, UInt32) (deprecated)
    
    
    public func open64(path: String, oflag: Int32, flag: UInt32): Int32

功能：打开文件并为其返回新的文件描述符，或在失败时返回 -1。

  * 当文件打开方式参数 oflag 设置为 [O_CREAT](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_creat-deprecated) 时，可以通过参数设置文件权限。
  * [O_RDONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdonly-deprecated)、[O_RDWR](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdwr-deprecated)、[O_WRONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_wronly-deprecated) 作为 oflag 取值为互斥关系，但可以与其他操作标识一起使用，如 [O_APPEND](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_append-deprecated) 。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/t-9Qxd3eQyurfnGjU5qrHg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=97DC60FB56E84CC17AB49560F5656920FE5BD857F97AD8D3FBF2ACF78B059C62)

未来版本即将废弃。

参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * oflag: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件打开的方式。
  * flag: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 如果 oflag 设置了 [O_CREAT](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_creat-deprecated) 并且需要创建新文件，则 flag 参数标识对新文件的权限，否则 flag 不改变文件权限。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回新的文件描述符，执行失败时返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 使用open64创建一个新文件
        let filePath = "./test_open64_file.txt"
        let fd = open64(filePath, O_CREAT | O_WRONLY, 0o644u32)
        if (fd != -1) {
            println("Successfully opened file '${filePath}' with fd: ${fd}")
    
            // 关闭文件
            close(fd)
    
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to open file '${filePath}'")
        }
    
        return 0
    }

运行结果：
    
    
    Successfully opened file './test_open64_file.txt' with fd: 3

#### func openat(Int32, String, Int32) (deprecated)
    
    
    public func openat(fd: Int32, path: String, oflag: Int32): Int32

功能：打开文件并为其返回新的文件描述符，或在失败时返回 -1。

  * 当文件打开方式参数 oflag 设置为 [O_CREAT](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_creat-deprecated) 时，可以通过参数设置文件权限。
  * [O_RDONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdonly-deprecated)、[O_RDWR](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdwr-deprecated)、[O_WRONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_wronly-deprecated) 作为 oflag 取值为互斥关系，但可以与其他操作标识一起使用，如 [O_APPEND](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_append-deprecated) 。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/bMABcIojQX24FZa-CljiTQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=9D669A844957DCDB6D446D809996B4E0E9C86AEDA58DB8506FEC3E9CA0FD9F1B)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 路径的文件描述符。
  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * oflag: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件打开的方式。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回新的文件描述符，执行失败时返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 先创建一个文件
        let filePath = "./test_openat_3args_file.txt"
        let fd1 = creat(filePath, 0o644u32)
        if (fd1 != -1) {
            close(fd1)
    
            // 使用openat打开已存在的文件（三个参数版本）
            let fd2 = openat(AT_FDCWD, filePath, O_RDONLY)
            if (fd2 != -1) {
                println("Successfully opened existing file '${filePath}' with fd: ${fd2}")
    
                // 关闭文件
                close(fd2)
    
                // 清理测试文件
                unlink(filePath)
            } else {
                println("Failed to open existing file '${filePath}'")
            }
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Successfully opened existing file './test_openat_3args_file.txt' with fd: 3

#### func openat(Int32, String, Int32, UInt32) (deprecated)
    
    
    public func openat(fd: Int32, path: String, oflag: Int32, flag: UInt32): Int32

功能：打开文件并为其返回新的文件描述符，或在失败时返回 -1。

  * 当文件打开方式参数 oflag 设置为 [O_CREAT](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_creat-deprecated) 时，可以通过参数设置文件权限。
  * [O_RDONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdonly-deprecated)、[O_RDWR](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdwr-deprecated)、[O_WRONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_wronly-deprecated) 作为 oflag 取值为互斥关系，但可以与其他操作标识一起使用，如 [O_APPEND](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_append-deprecated) 。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0f/v3/FTwJEhiFTa2yJ4F8VofYOA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=C3F371D82DD3B2F34B4303725DC8C9A9D3683E7B900E973914D424F8026014FD)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 路径的文件描述符。
  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * oflag: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件打开的方式。
  * flag: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 如果 oflag 设置了 [O_CREAT](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_creat-deprecated) 并且需要创建新文件，则 flag 参数标识对新文件的权限，否则 flag 不改变文件权限。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回新的文件描述符，执行失败时返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 使用AT_FDCWD作为文件描述符，表示当前工作目录
        let fd = AT_FDCWD
    
        // 尝试打开一个不存在的文件，使用O_CREAT标志创建新文件
        // 使用O_WRONLY表示只写模式
        let oflag = O_CREAT | O_WRONLY
    
        // 设置文件权限为所有者读写，组和其他用户只读
        let flag = S_IRUSR | S_IWUSR | S_IRGRP | S_IROTH
    
        // 尝试打开或创建文件
        let result = openat(fd, "test_file.txt", oflag, flag)
    
        if (result != -1) {
            println("Successfully opened/created file with fd: ${result}")
        } else {
            println("Failed to open/create file")
        }
    
        return 0
    }

运行结果：
    
    
    Successfully opened/created file with fd: 3

#### func openat64(Int32, String, Int32) (deprecated)
    
    
    public func openat64(fd: Int32, path: String, oflag: Int32): Int32

功能：打开文件并为其返回新的文件描述符，或在失败时返回 -1。

  * 当文件打开方式参数 oflag 设置为 [O_CREAT](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_creat-deprecated) 时，可以通过参数设置文件权限。
  * [O_RDONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdonly-deprecated)、[O_RDWR](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdwr-deprecated)、[O_WRONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_wronly-deprecated) 作为 oflag 取值为互斥关系，但可以与其他操作标识一起使用，如 [O_APPEND](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_append-deprecated) 。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/_3oDIZrdQTCRmA0DRSk3nw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=8F934B29C523D14D05DD258DB91D9D7290A9820869DA09E6952A21A5E7F9FC9F)

  * 不支持平台：Windows、macOS、iOS。
  * 未来版本即将废弃。



参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 路径的文件描述符。
  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * oflag: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件打开的方式。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回新的文件描述符，执行失败时返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 使用AT_FDCWD作为文件描述符，表示当前工作目录
        let fd = AT_FDCWD
    
        // 尝试打开一个不存在的文件，使用O_CREAT标志创建新文件
        // 使用O_RDWR表示读写模式
        let oflag = O_CREAT | O_RDWR
    
        let file = "test_file64.txt"
        // 尝试打开或创建文件
        let result = openat64(fd, file, oflag)
    
        if (result != -1) {
            println("Successfully opened/created file with fd: ${result}")
        } else {
            println("Failed to open/create file")
        }
    
        // 清理测试文件
        unlink(file)
        return 0
    }

运行结果：
    
    
    Successfully opened/created file with fd: 3

#### func openat64(Int32, String, Int32, UInt32) (deprecated)
    
    
    public func openat64(fd: Int32, path: String, oflag: Int32, flag: UInt32): Int32

功能：打开文件并为其返回新的文件描述符，或在失败时返回 -1。

  * 当文件打开方式参数 oflag 设置为 [O_CREAT](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_creat-deprecated) 时，可以通过参数设置文件权限。
  * [O_RDONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdonly-deprecated)、[O_RDWR](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdwr-deprecated)、[O_WRONLY](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_wronly-deprecated) 作为 oflag 取值为互斥关系，但可以与其他操作标识一起使用，如 [O_APPEND](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_append-deprecated) 。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fa/v3/CiERCvIfS4qjdV4doG4keQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=E6CE0581BF7913065E43B8914480ABF6FEE9C0A993549428EDD62C73DA816B2F)

  * 不支持平台：Windows、macOS、iOS。
  * 未来版本即将废弃。



参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 路径的文件描述符。
  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * oflag: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件打开的方式。
  * flag: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 如果 oflag 设置了 [O_CREAT](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_creat-deprecated) 并且需要创建新文件，则 flag 参数标识对新文件的权限，否则 flag 不改变文件权限。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 返回新的文件描述符，执行失败时返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 使用AT_FDCWD作为文件描述符，表示当前工作目录
        let fd = AT_FDCWD
    
        // 尝试打开一个不存在的文件，使用O_CREAT标志创建新文件
        // 使用O_RDONLY表示只读模式
        let oflag = O_CREAT | O_RDONLY
    
        // 设置文件权限为所有者读写，组和其他用户只读
        let flag = S_IRUSR | S_IWUSR | S_IRGRP | S_IROTH
    
        let file = "test_file64.txt"
        // 尝试打开或创建文件
        let result = openat64(fd, file, oflag, flag)
    
        if (result != -1) {
            println("Successfully opened/created file with fd: ${result}")
        } else {
            println("Failed to open/create file")
        }
    
        // 清理测试文件
        unlink(file)
        return 0
    }

运行结果：
    
    
    Successfully opened/created file with fd: 3

#### func pread(Int32, CPointer<UInt8>, UIntNative, Int32) (deprecated)
    
    
    public unsafe func pread(fd: Int32, buffer: CPointer<UInt8>, nbyte: UIntNative, offset: Int32): IntNative

功能：将 fd 指向的文件的 nbyte 字节传输到 buffer 指向的内存中。如果 nbyte 为 0，则函数无效果，并返回 0。返回值是实际读取的字节数。返回值为 0 表示到达文件末尾或无法读取数据。此外，文件的读写位置随着读取字节的变化而变化。

建议 nbyte 的大小与 buffer 的大小相同，且 buffer 的大小小于或等于 150000 字节。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/r6-iCKSNRVKp6JIVPPoEFg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=96F419F59B8D0FAF428517F8E9E03B7C631F38B51717D50AC285415FA11DDC7F)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 待读取文件的文件描述符。
  * buffer: [CPointer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#cpointert)<[UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8)> \- 缓冲区容器。
  * nbyte: [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) \- 读取字节数，建议采用 buffer.size。
  * offset: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 读取位置的偏移量。



返回值：

  * [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) \- 返回实际读取字节数，读取无效时返回 -1。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let filePath = "./test_file.txt"
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 重新打开文件用于读写
            let fd2 = open64(filePath, O_RDWR)
            if (fd2 != -1) {
                // 写入数据到文件
                unsafe {
                    var buf = LibC.mallocCString("123456")
                    let written = pwrite(fd2, buf.getChars(), UIntNative(buf.size()), 0)
                    LibC.free(buf)
                    println("Written ${written} bytes to file")
                }
                // 读取数据到缓冲区
                unsafe {
                    let buf = LibC.mallocCString("")
                    let read = pread(fd2, buf.getChars(), 1024, 0)
                    println("Read ${read} bytes from file: ${buf}")
                    LibC.free(buf)
                }
                // 关闭文件
                close(fd2)
            }
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Written 6 bytes to file
    Read 6 bytes from file: 123456

#### func pwrite(Int32, CPointer<UInt8>, UIntNative, Int32) (deprecated)
    
    
    public unsafe func pwrite(fd: Int32, buffer: CPointer<UInt8>, nbyte: UIntNative, offset: Int32): IntNative

功能：将 buffer 指向的内存中 nbyte 字节从指定偏移位置开始写入到 fd 指向的文件。指定文件的读写位置会随之移动。

建议 nbyte 的大小与 buffer 的大小相同，且 buffer 的大小小于或等于 150000 字节。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/x6kMsF5AQ4G8ipEVrC5qtQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=74DC727B2BBDED1CA4D4F49AE85E7CC6D3CEA40D3EA069EC8E4690E8B798D44A)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 待读取文件的文件描述符。
  * buffer: [CPointer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#cpointert)<[UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8)> \- 缓冲区容器。
  * nbyte: [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) \- 读取字节数，建议采用 buffer.size。
  * offset: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 读取位置的偏移量。



返回值：

  * [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) \- 返回实际写入数，执行失败时返回 -1。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let filePath = "./test_file.txt"
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 重新打开文件用于读写
            let fd2 = open64(filePath, O_RDWR)
            if (fd2 != -1) {
                // 写入数据到文件
                unsafe {
                    var buf = LibC.mallocCString("123456")
                    let written = pwrite(fd2, buf.getChars(), UIntNative(buf.size()), 0)
                    LibC.free(buf)
                    println("Written ${written} bytes to file")
                }
                // 读取数据到缓冲区
                unsafe {
                    let buf = LibC.mallocCString("")
                    let read = pread(fd2, buf.getChars(), 1024, 0)
                    println("Read ${read} bytes from file: ${buf}")
                    LibC.free(buf)
                }
                // 关闭文件
                close(fd2)
            }
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Written 6 bytes to file
    Read 6 bytes from file: 123456

#### func read(Int32, CPointer<UInt8>, UIntNative) (deprecated)
    
    
    public unsafe func read(fd: Int32, buffer: CPointer<UInt8>, nbyte: UIntNative): IntNative

功能：将 fd 指向的文件的 nbyte 字节传输到 buffer 指向的内存中。如果 nbyte 为 0，则函数无效果，并返回 0。返回值是实际读取的字节数。返回值为 0 表示到达文件末尾或无法读取数据。此外，文件的读写位置随着读取字节的变化而变化。

建议 nbyte 的大小与 buffer 的大小相同，且 buffer 的大小小于或等于 150000 字节。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/5JIY-dOOTYmk8UqTqKc6uw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=C59861937F2248E77AA2662CB6A152AD193C9572D243D459BBAD170A33974B32)

未来版本即将废弃。

参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 待读取文件的文件描述符。
  * buffer: [CPointer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#cpointert)<[UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8)> \- 缓冲区容器。
  * nbyte: [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) \- 读取字节数，建议采用 buffer.size。



返回值：

  * [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) \- 返回实际读取字节数，读取无效时返回 -1。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let filePath = "./test_file.txt"
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 重新打开文件用于读写
            let fd2 = open64(filePath, O_RDWR)
            if (fd2 != -1) {
                // 写入数据到文件
                unsafe {
                    var buf = LibC.mallocCString("123456")
                    let written = pwrite(fd2, buf.getChars(), UIntNative(buf.size()), 0)
                    LibC.free(buf)
                    println("Written ${written} bytes to file")
                }
                // 读取数据到缓冲区
                unsafe {
                    let buf = LibC.mallocCString("")
                    let read = read(fd2, buf.getChars(), 1024)
                    println("Read ${read} bytes from file: ${buf}")
                    LibC.free(buf)
                }
                // 关闭文件
                close(fd2)
            }
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Written 6 bytes to file
    Read 6 bytes from file: 123456

#### func remove(String) (deprecated)
    
    
    public func remove(path: String): Int32

功能：删除文件或目录。

  * 对于文件，[remove](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-removestring-deprecated)() 等同于 [unlink](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-unlinkstring-deprecated)()。
  * 对于目录，[remove](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-removestring-deprecated)() 等同于 rmdir()。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c7/v3/mLjzML11RXinGSxtmaRbUw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=CC06941CC4155E95850FA3493D4BCD87C091D2561835E85A165782ECCAF87A69)

未来版本即将废弃。

参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 成功返回 0，错误返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 尝试删除一个不存在的文件
        let result1 = remove("nonexistent_file.txt")
        if (result1 == 0) {
            println("Removed nonexistent file (unexpected)")
        } else {
            println("Failed to remove nonexistent file (expected)")
        }
    
        // 创建一个测试文件
        let fd = open("test_remove.txt", O_CREAT | O_WRONLY, S_IRUSR | S_IWUSR)
        if (fd != -1) {
            close(fd)
    
            // 现在删除文件
            let result2 = remove("test_remove.txt")
            if (result2 == 0) {
                println("Successfully removed existing file")
            } else {
                println("Failed to remove existing file")
            }
        }
    
        return 0
    }

运行结果：
    
    
    Failed to remove nonexistent file (expected)
    Successfully removed existing file

#### func rename(String, String) (deprecated)
    
    
    public func rename(oldName: String, newName: String): Int32

功能：重命名文件，如果需要将会移动文件所在目录。文件的任何其他硬链接不受影响。旧路径打开的文件描述符也不受影响。

各种限制将决定重命名操作是否成功，具体场景如下：

  * 如果 newName 已经存在，它将被原子替换，这样另一个尝试访问 newName 的进程就不会发现它丢失，但是可能会有一个窗口，其中旧路径和新路径都引用要重命名的文件。
  * 如果旧路径和新路径是引用同一文件的现有硬链接，则重命名不做任何操作，并返回成功状态。
  * 如果 newName 存在，但操作因某种原因失败，则重命名保证保留 newName 的实例。
  * oldName 可以指定目录。在这种情况下，newName 必须不存在，或者它必须指定空目录。
  * 如果旧路径引用符号链接，则链接将重命名；如果新路径引用符号链接，则链接将被覆盖。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c/v3/QsfauVzIQDmYrWd2oMMgBw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=0CE2BA84A8DB89192C2E70E60DE43FC6AFDBC8710BA898E7AA1A4EF9920DE433)

未来版本即将废弃。

参数：

  * oldName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件名(含路径)。
  * newName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件名(含路径)。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 成功返回 0，错误返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 oldName 或 newName 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let filePathOld = "old_name.txt"
        let filePathNew = "new_name.txt"
        // 创建一个测试文件
        let fd = open(filePathOld, O_CREAT | O_WRONLY, S_IRUSR | S_IWUSR)
        if (fd != -1) {
            close(fd)
    
            // 重命名文件
            let result = rename(filePathOld, filePathNew)
            if (result == 0) {
                println("Successfully renamed file from '${filePathOld}' to '${filePathNew}'")
            } else {
                println("Failed to rename file")
            }
        }
        // 清理测试文件
        unlink(filePathNew)
        return 0
    }

运行结果：
    
    
    Successfully renamed file from 'old_name.txt' to 'new_name.txt'

#### func renameat(Int32, String, Int32, String) (deprecated)
    
    
    public func renameat(oldfd: Int32, oldName: String, newfd: Int32, newName: String): Int32

功能：重命名文件，如果需要将会移动文件所在目录。

[renameat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-renameatint32-string-int32-string-deprecated)() 与 [rename](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-renamestring-string-deprecated)() 处理相同，此处仅描述两者差异点：

  * oldName 为相对路径且 oldfd 为特殊值 AT_FDCWD 时，则路径将相对于调用进程的当前工作目录。
  * oldName 为相对路径且 oldfd 非 AT_FDCWD 时，则路径将相对于 oldfd 引用的文件所属目录。
  * oldName 为绝对路径时 oldfd 参数将被忽略。
  * newName 的场景与 oldName 相同，只是当 newName 为相对路径时是相对于 newfd 引用的文件所属目录。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f1/v3/dbf_8cWSRFyyPt_d8TDfYQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=30488DD1014F8AEEE7A930060F957A9F1BB668399EB24A5EA54FA31D77FAA261)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * oldfd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件描述符。
  * oldName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件名。
  * newfd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件描述符。
  * newName: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件名。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 成功返回 0，错误返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 oldName 或 newName 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        let filePathOld = "old_name.txt"
        let filePathNew = "new_name.txt"
        // 创建一个测试文件
        let fd = open(filePathOld, O_CREAT | O_WRONLY, S_IRUSR | S_IWUSR)
        if (fd != -1) {
            close(fd)
    
            // 使用renameat重命名文件
            let result = renameat(AT_FDCWD, filePathOld, AT_FDCWD, filePathNew)
            if (result == 0) {
                println("Successfully renamed file using renameat from '${filePathOld}' to '${filePathNew}'")
            } else {
                println("Failed to rename file using renameat")
            }
        }
        // 清理测试文件
        unlink(filePathNew)
        return 0
    }

运行结果：
    
    
    Successfully renamed file using renameat from 'old_name.txt' to 'new_name.txt'

#### func setgid(UInt32) (deprecated)
    
    
    public func setgid(id: UInt32): Int32

功能：设置调用进程的有效组 ID，需要适当的权限。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/43/v3/dbvYSAqZQSinkwCjNrF26w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=707F4823C5381EEF79FDDD41FA5F153501EE476A2B42B3DE7C379470FB87DCDF)

  * 不支持平台：Windows、iOS、HarmonyOS。
  * 未来版本即将废弃。



参数：

  * id: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 调用进程的有效组 ID 号。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 设置成功，返回 0，设置失败, 返回 -1。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 获取当前进程的有效组ID
        let current_gid = getgid()
        println("Current effective group ID: ${current_gid}")
        0
        // 尝试设置组ID（需要适当的权限）
        let result = setgid(current_gid)
    
        if (result == 0) {
            println("Successfully set group ID")
        } else {
            println("Failed to set group ID")
        }
    
        return 0
    }

可能的运行结果：
    
    
    Current effective group ID: 1000
    Successfully set group ID

#### func sethostname(String) (deprecated)
    
    
    public func sethostname(buf: String): Int32

功能：设置主机名，仅超级用户可以调用。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/yHZWGO7bSJq5JtGfp8n7Gg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=F22EF5E3AA3D007E1214ABE67FBD2DD9EE1DF09F21E2C5815FD88525B8471E7A)

  * 不支持平台：Windows、iOS、HarmonyOS。
  * 未来版本即将废弃。



参数：

  * buf: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 需要设置的主机名。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 设置成功，返回 0，设置失败, 返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 如果参数 buf 包含空字符则抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 注意：sethostname需要超级用户权限才能执行成功
        let result = sethostname("new-hostname")
    
        if (result == 0) {
            println("Successfully set hostname")
        } else {
            println("Failed to set hostname (requires root privileges)")
        }
    
        return 0
    }

运行结果：
    
    
    Failed to set hostname (requires root privileges)

#### func setpgid(Int32, Int32) (deprecated)
    
    
    public func setpgid(pid: Int32, pgrp: Int32): Int32

功能：此函数将参数 pid 指定的组 ID 设置为参数 pgrp 指定的组 ID。 如果 pid 为 0，则使用当前进程的组 ID。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0a/v3/8Lt6PxR6RKWryHu48r3MUg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=3CB4F988E2224E3FE965C6BE8B68565364F589A99CB1D76BF7593BCF5102EC48)

  * 不支持平台：Windows、iOS。
  * 未来版本即将废弃。



参数：

  * pid: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 进程 ID。
  * pgrp: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 进程组 ID。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 执行成功，返回组 ID，执行失败, 返回 -1。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 获取当前进程ID和进程组ID
        let pid = getpid()
        let pgid = getpgid(0) // 0表示获取当前进程的组ID
    
        println("Current process ID: ${pid}")
        println("Current process group ID: ${pgid}")
    
        // 尝试设置当前进程的组ID为自身
        let result = setpgid(0, 0) // 两个参数都为0，表示将当前进程ID设置为当前进程组ID
    
        if (result == 0) {
            println("Successfully set process group ID")
        } else {
            println("Failed to set process group ID")
        }
    
        return 0
    }

可能的运行结果：
    
    
    Current process ID: 12345
    Current process group ID: 12345
    Successfully set process group ID

#### func setpgrp() (deprecated)
    
    
    public func setpgrp(): Int32

功能：将当前进程所属的组 ID 设置为当前进程的进程 ID，此函数等同于调用 [setpgid](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-setpgidint32-int32-deprecated)(0, 0)。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/vWP93uByR7OoC-0JPM97Dg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=8EC1B002F62384A4D6986345F69C6B2F1FDD323A58BC117BD333505C5C27B07F)

  * 不支持平台：Windows、iOS。
  * 未来版本即将废弃。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 执行成功，返回当前进程的组 ID，执行失败, 返回 -1。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 调用setpgrp设置当前进程的组ID为当前进程ID
        let new_pgid = setpgrp()
    
        if (new_pgid != -1) {
            println("Successfully set process group ID")
        } else {
            println("Failed to set process group ID")
        }
    
        return 0
    }

运行结果：
    
    
    Successfully set process group ID

#### func setuid(UInt32) (deprecated)
    
    
    public func setuid(id: UInt32): Int32

功能：设置调用进程的有效用户 ID，需要适当的权限。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/HXX-O2hWTfubFZ__1lOhQg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=8966D58344ED407D4230C5D3101D01F33AD7F583D29095F0A8B50D929C510348)

  * 不支持平台：Windows、iOS、HarmonyOS。
  * 未来版本即将废弃。



参数：

  * id: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 调用进程的有效用户 ID 号。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 设置成功，返回 0，设置失败, 返回 -1。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 获取当前进程的有效用户ID
        let current_uid = getuid()
    
        // 尝试设置用户ID（需要适当的权限）
        let result = setuid(current_uid)
    
        if (result == 0) {
            println("Successfully set user ID")
        } else {
            println("Failed to set user ID")
        }
    
        return 0
    }

运行结果：
    
    
    Successfully set user ID

#### func symlink(String, String) (deprecated)
    
    
    public func symlink(path: String, symPath: String): Int32

功能：创建一个名为 symPath 链接到 path 所指定的文件。

  * 符号链接在运行时被解释为链接的内容已被替换到要查找文件或目录的路径中。
  * 符号链接可能包含..路径组件，这些组件（如果在链接的开头使用）引用链接所在目录的父目录。
  * 符号链接（也称为软链接）可以指向现有文件或不存在的文件，后者被称为悬空链接。
  * 符号链接的权限是不相关的，在跟踪链接时，所有权将被忽略，但当请求删除或重命名链接并且链接位于设置了粘滞位的目录中时，所有权将被检查。
  * 如果 symPath 已存在，则不会被覆盖。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/fNYnb591S7aITZmmTcDRqQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=2A5C7B816348A204FBADEACFE8F338EF6D24FD2CA479E67AA7C235F0A626F991)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * symPath: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 链接文件路径。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 成功返回 0，错误返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 或 symPath 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let fd = `open`("test_file.txt", O_CREAT | O_WRONLY, S_IRUSR | S_IWUSR)
        if (fd != -1) {
            close(fd)
    
            // 创建符号链接
            let result = symlink("test_file.txt", "test_symlink.txt")
    
            if (result == 0) {
                println("Successfully created symbolic link")
    
                // 验证符号链接是否存在
                let access_result = access("test_symlink.txt", F_OK)
                if (access_result == 0) {
                    println("Symbolic link verified")
                }
            } else {
                println("Failed to create symbolic link")
            }
        } else {
            println("Failed to create test file")
        }
        // 删除测试文件和符号链接
        unlink("test_file.txt")
        unlink("test_symlink.txt")
        return 0
    }

运行结果：
    
    
    Successfully created symbolic link
    Symbolic link verified

#### func symlinkat(String, Int32, String) (deprecated)
    
    
    public func symlinkat(path: String, fd: Int32, symPath: String): Int32

功能：创建一个名为 symPath 链接到 path 与 fd 所指定的文件。

  * symPath 为相对路径且 fd 为特殊值 AT_FDCWD 时，则路径将相对于调用进程的当前工作目录。
  * symPath 为相对路径且 fd 非 AT_FDCWD 时，则路径将相对于 fd 引用的文件所属目录。
  * symPath 为绝对路径时 fd 参数将被忽略。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/CULz8AbeRpaGLLEot6e1JA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=83B12E26FC5D73A7924921C5CBF0790D9F2771B9A749E74D868F1F35DDB49879)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件描述符。
  * symPath: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 链接文件路径。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 成功返回 0，错误返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 或 symPath 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let fd = open("test_file_at.txt", O_CREAT | O_WRONLY, S_IRUSR | S_IWUSR)
        if (fd != -1) {
            close(fd)
    
            // 使用AT_FDCWD作为文件描述符创建符号链接
            let result = symlinkat("test_file_at.txt", AT_FDCWD, "test_symlink_at.txt")
    
            if (result == 0) {
                println("Successfully created symbolic link with symlinkat")
    
                // 验证符号链接是否存在
                let access_result = access("test_symlink_at.txt", F_OK)
                if (access_result == 0) {
                    println("Symbolic link verified")
                }
            } else {
                println("Failed to create symbolic link with symlinkat")
            }
        } else {
            println("Failed to create test file")
        }
        // 删除测试文件和符号链接
        unlink("test_file_at.txt")
        unlink("test_symlink_at.txt")
        return 0
    }

运行结果：
    
    
    Successfully created symbolic link with symlinkat
    Symbolic link verified

#### func ttyname(Int32) (deprecated)
    
    
    public func ttyname(fd: Int32): String

功能：返回终端名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a7/v3/FtG38uUkRiG_5dZdM1dCxg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=C6A710EECE399BFF48E7CA170B8EC0217C7065B10186FAFC5E6829AAA71D153C)

  * 不支持平台：Windows、iOS。
  * 未来版本即将废弃。



参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件描述符。



返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 操作成功时返回路径名，失败时，返回 NULL。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 获取标准输入的文件描述符
        let fd = 0i32
    
        // 尝试获取终端名称
        let terminal_name = ttyname(fd)
    
        if (terminal_name != "") {
            println("Terminal name: ${terminal_name}")
        } else {
            println("Not a terminal or failed to get terminal name")
        }
    
        return 0
    }

可能的运行结果：
    
    
    Terminal name: /dev/pts/0

#### func umask(UInt32) (deprecated)
    
    
    public func umask(cmask: UInt32): UInt32

功能：设置权限掩码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/3cVHw4y3QcyaGzUNYzn4SA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=A38D5A784EB716AC6EBE9D10C4BE6EEBFDD13BF84ECE19A89F5DCB9DE8065AC7)

未来版本即将废弃。

参数：

  * cmask: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 文件权限参数。



返回值：

  * [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 返回文件上一个掩码的值。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 获取当前的umask值
        let old_mask = umask(0)
    
        // 设置新的umask值
        let new_mask = umask(S_IRWXG | S_IRWXO) // 设置组和其他用户的权限掩码
    
        // 恢复原来的umask值
        umask(old_mask)
    
        return 0
    }

#### func unlink(String) (deprecated)
    
    
    public func unlink(path: String): Int32

功能：从文件系统中删除文件。

  * 如果 path 是指向文件的最后一个链接，并且没有进程打开该文件，则该文件将被删除，它使用的空间可供重复使用。
  * 如果 path 是指向文件的最后一个链接，但仍然有进程打开该文件，该文件将一直存在，直到引用它的最后一个文件描述符关闭。
  * 如果 path 引用了符号链接，则该链接将被删除。
  * 如果 path 引用了套接字、FIFO 或设备，则该文件将被删除，但打开对象的进程可能会继续使用它。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d5/v3/lReFkcmCRRSX-tsn--bw-Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=8DDFD437082090209C0E3483BF178AEEA44BB0227C0A6056CC317D3BFA331395)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 成功返回 0，错误返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let fd = `open`("test_unlink.txt", O_CREAT | O_WRONLY, S_IRUSR | S_IWUSR)
        if (fd != -1) {
            close(fd)
    
            // 验证文件是否存在
            let access_result = access("test_unlink.txt", F_OK)
            if (access_result == 0) {
                println("File exists before unlink")
            }
    
            // 删除文件
            let result = unlink("test_unlink.txt")
    
            if (result == 0) {
                println("Successfully unlinked file")
            } else {
                println("Failed to unlink file")
            }
    
            // 再次检查文件是否存在
            let access_result2 = access("test_unlink.txt", F_OK)
            if (access_result2 == -1) {
                println("File no longer exists")
            }
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    File exists before unlink
    Successfully unlinked file
    File no longer exists

#### func unlinkat(Int32, String, Int32) (deprecated)
    
    
    public func unlinkat(fd: Int32, path: String, ulflag: Int32): Int32

功能：从文件系统中删除文件。

该函数系统调用的操作方式与 [unlink](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-unlinkstring-deprecated) 函数完全相同，但此处描述的差异除外：

  * path 为相对路径且 fd 为特殊值 AT_FDCWD 时，则路径将相对于调用进程的当前工作目录。
  * path 为相对路径且 fd 非 AT_FDCWD 时，则路径将相对于 fd 引用的文件所属目录。
  * path 为绝对路径时 fd 参数将被忽略。



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/22/v3/j2EwjDCoS3O1mXdJbqLNSQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=AB785EC6236B763E7161662BF36F15AAD54DDBCE1B36FE71E066EAFCA8BCCE04)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 文件描述符。
  * path: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 文件路径。
  * ulflag: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 可以指定为 0，或者可以设置为控制 [unlinkat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-unlinkatint32-string-int32-deprecated)() 操作的标志值按位或运算。标志值当前取值仅支持 [AT_REMOVEDIR](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-at_removedir-deprecated)。



返回值：

  * [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 成功返回 0，错误返回 -1。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当函数参数 path 包含空字符时，抛出异常。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let fd = open("test_unlinkat.txt", O_CREAT | O_WRONLY, S_IRUSR | S_IWUSR)
        if (fd != -1) {
            close(fd)
    
            // 验证文件是否存在
            let access_result = access("test_unlinkat.txt", F_OK)
            if (access_result == 0) {
                println("File exists before unlinkat")
            }
    
            // 使用unlinkat删除文件
            let result = unlinkat(AT_FDCWD, "test_unlinkat.txt", 0)
    
            if (result == 0) {
                println("Successfully unlinked file with unlinkat")
            } else {
                println("Failed to unlink file with unlinkat")
            }
    
            // 再次检查文件是否存在
            let access_result2 = access("test_unlinkat.txt", F_OK)
            if (access_result2 == -1) {
                println("File no longer exists")
            }
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    File exists before unlinkat
    Successfully unlinked file with unlinkat
    File no longer exists

#### func write(Int32, CPointer<UInt8>, UIntNative) (deprecated)
    
    
    public unsafe func write(fd: Int32, buffer: CPointer<UInt8>, nbyte: UIntNative): IntNative

功能：将 buffer 指向的内存中 nbyte 字节写入到 fd 指向的文件。指定文件的读写位置会随之移动。

建议 nbyte 的大小与 buffer 的大小相同，且 buffer 的大小小于或等于 150000 字节。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/2aMDFULmRQeq8vWgIWeQJg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=1DFA08202290650B7AC9F2F750AC11B7F68B68CA0F35D13B048FF5C2AC981081)

未来版本即将废弃。

参数：

  * fd: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 待写入文件的文件描述符。
  * buffer: [CPointer](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#cpointert)<[UInt8](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint8)> \- 缓冲区容器。
  * nbyte: [UIntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uintnative) \- 读取字节数，建议采用 buffer.size。



返回值：

  * [IntNative](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#intnative) \- 返回实际读取字节数，读取无效时返回 -1。



示例：
    
    
    import std.posix.*
    
    main(): Int64 {
        // 创建一个测试文件
        let filePath = "./test_file.txt"
        let fd = creat(filePath, 0o644u32)
        if (fd != -1) {
            close(fd)
    
            // 重新打开文件用于读写
            let fd2 = open64(filePath, O_RDWR)
            if (fd2 != -1) {
                // 写入数据到文件
                unsafe {
                    var buf = LibC.mallocCString("123456")
                    let written = write(fd2, buf.getChars(), UIntNative(buf.size()))
                    LibC.free(buf)
                    println("Written ${written} bytes to file")
                }
                // 读取数据到缓冲区
                unsafe {
                    let buf = LibC.mallocCString("")
                    let read = pread(fd2, buf.getChars(), 1024, 0)
                    println("Read ${read} bytes from file: ${buf}")
                    LibC.free(buf)
                }
                // 关闭文件
                close(fd2)
            }
            // 清理测试文件
            unlink(filePath)
        } else {
            println("Failed to create test file")
        }
    
        return 0
    }

运行结果：
    
    
    Written 6 bytes to file
    Read 6 bytes from file: 123456
