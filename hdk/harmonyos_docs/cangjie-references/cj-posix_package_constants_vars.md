---
name: cangjie-references/cj-posix_package_constants_vars
title: 常量&变量
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.posix / 常量&变量
---

# 常量&变量

#### const AT_EMPTY_PATH (deprecated)
    
    
    public const AT_EMPTY_PATH: Int32 = 0x1000

功能：表示允许空路径作为路径名参数的标志，用于引用文件描述符本身，适用函数 open、open64、openat、openat64，所属函数参数 oflag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/KJcO-RJ7T82aWHjzwufZTQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=7258E91947F0FC23589BB6B333C25DD0C16C43DC0FBC6F034B56DB4AA207EF63)

  * 不支持平台：macOS、iOS。
  * 未来版本即将废弃。



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${AT_EMPTY_PATH}")
        return 0
    }

运行结果：
    
    
    value: 4096

#### const AT_FDCWD (deprecated)
    
    
    public const AT_FDCWD: Int32

功能：表示在文件系统中相对路径操作的特殊文件描述符常量，用于在使用 *at() 系列系统调用时指定相对路径的解析起点。主要用于 fchmodat、 fchownat、linkat、renameat、symlinkat、unlinkat 等函数，所属函数参数 fd。不同系统下的值分别为：

  * macOS: -0x2
  * 其他情况：-0x64



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/ioJKKZHVSXimPsVVuQgZYQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=A7411FE4505BED342E6A180FD9591FC15B5E78A57A697C671DAA43F02714704D)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${AT_FDCWD}")
        return 0
    }

运行结果：
    
    
    value: -100

#### const AT_REMOVEDIR (deprecated)
    
    
    public const AT_REMOVEDIR: Int32 = 0x200

功能：如果指定了 [AT_REMOVEDIR](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-at_removedir-deprecated) 标志，则对 pathname 执行等效于 rmdir(2) 的操作，适用函数 unlinkat，所属函数参数 ulflag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/YMonDMwsR-eklB22Pn0lSw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=67524A1433B6A409170C6F7C994966D6766E5B085D886B5CB44A0BC1BC726E2A)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${AT_REMOVEDIR}")
        return 0
    }

运行结果：
    
    
    value: 512

#### const AT_SYMLINK_FOLLOW (deprecated)
    
    
    public const AT_SYMLINK_FOLLOW: Int32

功能：表示一个用于控制符号链接解析行为的标志，指定在操作符号链接时是否跟随链接指向的目标文件。通常与 AT_FDCWD 结合使用。若无该标志，大多数系统调用会直接操作符号链接本身（如读取链接路径）。使用该标志后，系统调用会先解析符号链接，然后操作其指向的目标文件。主要用于 linkat、unlinkat 等函数，所属函数参数 fd。不同系统下的值分别为：

  * macOS 和 iOS：0x040
  * 其他情况：0x400



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/WYGOQ4VQT3e2mdnjUaRnxg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=B3061ACD18000B3B1898A356F50687CFB7458D13B4AF9B5CFD3E28E33A89362F)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${AT_SYMLINK_FOLLOW}")
        return 0
    }

运行结果：
    
    
    value: 1024

#### const F_OK (deprecated)
    
    
    public const F_OK: Int32 = 0x0

功能：测试文件是否存在，适用函数 [access](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-accessstring-int32-deprecated)，[faccessat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-faccessatint32-string-int32-int32-deprecated)，所属函数参数 mode。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/Dx3fSR3qSsS2B6UbTt1gCA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=4E17F41F644AC06DD85BE985F6BCDB48C504A2A9980730F31F1E8064B3222797)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${F_OK}")
        return 0
    }

运行结果：
    
    
    value: 0

#### const O_APPEND (deprecated)
    
    
    public const O_APPEND: Int32

功能：读取或写入文件时，数据将被写入到文件末尾，适用函数 open、open64、openat、openat64，所属函数参数 oflag。不同系统下的值分别为：

  * macOS 和 iOS：0x00000008
  * Windows：0x8
  * 其他情况：0x400



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/DZAKUnLqSQS178Hjt9oHwg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=F82A4BF6017C0AB32B4B4057F5A61E1C8BCCD1294CF10074314E709B17D423AC)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${O_APPEND}")
        return 0
    }

运行结果：
    
    
    value: 1024

#### const O_CLOEXEC (deprecated)
    
    
    public const O_CLOEXEC: Int32

功能：在某些多线程程序中，使用此标志是必不可少的。因为在一个线程同时打开文件描述符，而另一个线程执行 fork(2) 加 execve(2) 场景下使用单独的 fcntl(2) F_SETFD 操作设置 FD_CLOEXEC 标志并不足以避免竞争条件，适用函数 open、open64、openat、openat64，所属函数参数 oflag。不同系统下的值分别为：

  * macOS 和 iOS：0x01000000
  * 其他情况：0x80000



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/Nm8OzhF8SRi62JMdxtWOcg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=29D23153DBBF325F9A2C46BE3018EAD538F57243AAAF85CEFB9578218AB60231)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${O_CLOEXEC}")
        return 0
    }

运行结果：
    
    
    value: 524288

#### const O_CREAT (deprecated)
    
    
    public const O_CREAT: Int32

功能：如果要打开的文件不存在，则自动创建该文件，适用函数 open、open64、openat、openat64，所属函数参数 oflag。不同系统下的值分别为：

  * macOS 和 iOS：0x00000200
  * Windows：0x100
  * 其他情况：0x40



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/gU9vOkTTSwuey6kRMkTdqA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=F2C7CAE2D89900ECB29F743FBCF527201F4A09FFA27D6D8762C7277675CF8B20)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${O_CREAT}")
        return 0
    }

运行结果：
    
    
    value: 64

#### const O_DIRECTORY (deprecated)
    
    
    public const O_DIRECTORY: Int32

功能：如果 pathname 指定的文件不是目录，则打开文件失败，适用函数 open、open64、openat、openat64，所属函数参数 oflag。不同系统下的值分别为：

  * macOS 和 iOS：0x00100000
  * 其他情况：0x10000



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d/v3/O49udEq0RU-fxsuzNCaWlQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=AFA58AE0096C80E35C5A62FAE662C9BD1BBE0CB84B72A721AFE5C50F893645FA)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${O_DIRECTORY}")
        return 0
    }

运行结果：
    
    
    value: 65536

#### const O_DSYNC (deprecated)
    
    
    public const O_DSYNC: Int32

功能：每次写入都会等待物理 I/O 完成，但如果写操作不影响读取刚写入的数据，则不等待文件属性更新，适用函数 open、open64、openat、openat64，所属函数参数 oflag。不同系统下的值分别为：

  * macOS 和 iOS：0x400000
  * 其他情况：0x1000



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/D64oS1izR8GPRMViD5Mxrg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=E491B40D949079ED722AC5BF7CAA55115A0ACEC580BB3AD60959F95CDC2DDD1B)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${O_DSYNC}")
        return 0
    }

运行结果：
    
    
    value: 4096

#### const O_EXCL (deprecated)
    
    
    public const O_EXCL: Int32

功能：如同时设置 [O_CREAT](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_creat-deprecated)，则此指令检查文件是否存在。如果文件不存在，则创建文件。否则，打开文件出错。此外，如果同时设置了 [O_CREAT](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_creat-deprecated) 和 [O_EXCL](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_excl-deprecated)，并且要打开的文件是符号链接，则打开文件失败，适用函数 open、open64、openat、openat64，所属函数参数 oflag。不同系统下的值分别为：

  * macOS 和 iOS：0x00000800
  * Windows：0x400
  * 其他情况：0x80



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/GXQarrxjQ7yDiI2N2SXdXQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=20598E43FC5CCA6DDDE3AF3F5BA28EE194DD471326A38C31FC0F4B0D74B4F25D)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${O_EXCL}")
        return 0
    }

运行结果：
    
    
    value: 128

#### const O_NOCTTY (deprecated)
    
    
    public const O_NOCTTY: Int32

功能：如要打开的文件是终端设备，则该文件不会成为这个进程的控制终端，适用函数 open、open64、openat、openat64，所属函数参数 oflag。不同系统下的值分别为：

  * macOS 和 iOS：0x00020000
  * 其他情况：0x100



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/cp_zAPZITuKLFtzE6It7DA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=F655BF2D9ACEB7E05D14EB168409B8EA38F70B59D709EE6837FDCD50C0EBFD11)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${O_NOCTTY}")
        return 0
    }

运行结果：
    
    
    value: 256

#### const O_NOFOLLOW (deprecated)
    
    
    public const O_NOFOLLOW: Int32

功能：如 pathname 指定的文件是符号链接，则打开文件失败，适用函数 open、open64、openat、openat64，所属函数参数 oflag。不同系统下的值分别为：

  * macOS 和 iOS：0x00000100
  * 其他情况：0x20000



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/TQv7EDyMTiKwxKYEbjnruQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=115209DB050824B37B33A50C8FD72CC4721F3DDD9EEE7ACAEB7F6284B1A0935E)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${O_NOFOLLOW}")
        return 0
    }

运行结果：
    
    
    value: 131072

#### const O_NONBLOCK (deprecated)
    
    
    public const O_NONBLOCK: Int32

功能：以非阻塞的方式打开文件，即 I/O 操作不会导致调用进程等待，适用函数 open、open64、openat、openat64，所属函数参数 oflag。不同系统下的值分别为：

  * macOS 和 iOS：0x00000004
  * 其他情况：0x800



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/7dcxTXuoRtW-e0LOGhBnog/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=27A8FCF994F3CFBC2F8AC540F14DD26CC356EA4276ED774249784E7C8C7EE347)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${O_NONBLOCK}")
        return 0
    }

运行结果：
    
    
    value: 2048

#### const O_RDONLY (deprecated)
    
    
    public const O_RDONLY: Int32 = 0x0

功能：以只读方式打开文件，适用函数 open、open64、openat、openat64，所属函数参数 oflag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/y1XXACqkR9Gbpnr3T9HBvA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=7DF3D3778A5A7A19ABA29FB4679C7CB26006EE6E3A507A265BD4F7D33DA39F52)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${O_RDONLY}")
        return 0
    }

运行结果：
    
    
    value: 0

#### const O_RDWR (deprecated)
    
    
    public const O_RDWR: Int32 = 0x2

功能：以读写模式打开文件，适用函数 open、open64、openat、openat64，所属函数参数 oflag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/uG_QobZIQ-aHhxD1Qt-Cfg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=3075CA3BBD22DF65DDF4275B6A9D8831331BCD721B7FBFF662F217D25CB7A770)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${O_RDWR}")
        return 0
    }

运行结果：
    
    
    value: 2

#### const O_RSYNC (deprecated)
    
    
    public const O_RSYNC: Int32 = 0x101000

功能：此标志仅影响读取操作，必须与 [O_SYNC](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_sync-deprecated) 或 [O_DSYNC](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_dsync-deprecated) 结合使用。如果有必要，它将导致读取调用阻塞，直到正在读取的数据（可能还有元数据）刷新到磁盘，适用函数 open、open64、openat、openat64，所属函数参数 oflag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/y-gxYJ0eQzWY5jR2xi8NVw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=A44875AAD5C2AD32CC5688B359298E2A416C6DBE5E747D0B061CD40821AA95C9)

  * 不支持平台：Windows、macOS、iOS。
  * 未来版本即将废弃。



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${O_RSYNC}")
        return 0
    }

运行结果：
    
    
    value: 1052672

#### const O_SYNC (deprecated)
    
    
    public const O_SYNC: Int32

功能：同步打开文件，适用函数 open、open64、openat、openat64，所属函数参数 oflag。不同系统下的值分别为：

  * macOS 和 iOS：0x0080
  * 其他情况：0x101000



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/SwPSCZ_fTe6mbSXBWwXYUw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=E349A7932F37C9256F2C348D4C044339A3FF6B00D8C55562BC6628C196075C86)

  * 不支持平台：Windows。
  * 未来版本即将废弃。



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${O_SYNC}")
        return 0
    }

运行结果：
    
    
    value: 1052672

#### const O_TRUNC (deprecated)
    
    
    public const O_TRUNC: Int32

功能：如果文件存在且打开可写，则此标志将文件长度清除为 0，文件中以前存储的数据消失，适用函数 open、open64、openat、openat64，所属函数参数 oflag。不同系统下的值分别为：

  * macOS 和 iOS：0x00000400
  * 其他情况：0x200



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/YlCj4gyNRVWe75BntxaZnQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=294BA2C42302820F63270CE6E5860262614B71EF598312390A2EC43DB4F5D5EC)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${O_TRUNC}")
        return 0
    }

运行结果：
    
    
    value: 512

#### const O_WRONLY (deprecated)
    
    
    public const O_WRONLY: Int32 = 0x1

功能：以只写方式打开文件，适用函数 open、open64、openat、openat64，所属函数参数 oflag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/KHwlPPlpSwKe2Xl53NRG9Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=1E2EE362F2AEA02ED335AD4C69F53CA6913927D54B2D52ACA252B10F85C707BC)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${O_WRONLY}")
        return 0
    }

运行结果：
    
    
    value: 1

#### const R_OK (deprecated)
    
    
    public const R_OK: Int32 = 0x4

功能：测试文件读权限，适用函数 [access](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-accessstring-int32-deprecated)，[faccessat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-faccessatint32-string-int32-int32-deprecated)，所属函数参数 mode。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/QRhrkzBrTZ-fuQHeOpIsPg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=BAC8EBC68DA0FA8C1E0A67DDD19FB03D42EBCAFAD3C9A049F2CC124CF19E8077)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${R_OK}")
        return 0
    }

运行结果：
    
    
    value: 4

#### const S_IFBLK (deprecated)
    
    
    public const S_IFBLK: UInt32 = 0x6000

功能：文件类型为块设备，适用函数 [isType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-istypestring-uint32-deprecated)， 所属函数参数 mode。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/xaQzGZCqT_eDWVB9LGkWrA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=2C0B52DDFDFF6ECFD75CA4A57889FABBCBE2F9353D789519B3DE145D15640F05)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IFBLK}")
        return 0
    }

运行结果：
    
    
    value: 24576

#### const S_IFCHR (deprecated)
    
    
    public const S_IFCHR: UInt32 = 0x2000

功能：文件类型为字符设备，适用函数 [isType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-istypestring-uint32-deprecated)， 所属函数参数 mode。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d8/v3/dYi2dqUuQwSTRtDJ5HxTXg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=FB1B72EEB6F2B17374D6C2881783CE98DB3E2F589865A9C7BEC1527ECBA1A405)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IFCHR}")
        return 0
    }

运行结果：
    
    
    value: 8192

#### const S_IFDIR (deprecated)
    
    
    public const S_IFDIR: UInt32 = 0x4000

功能：文件类型为目录，适用函数 [isType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-istypestring-uint32-deprecated)， 所属函数参数 mode。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/p9MqJ4K1R0-dXOn-Bn8cLQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=B6F568EF136FE4F6115364B86514FE3E6F0342F06788F76D40F99E7E50668E26)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IFDIR}")
        return 0
    }

运行结果：
    
    
    value: 16384

#### const S_IFIFO (deprecated)
    
    
    public const S_IFIFO: UInt32 = 0x1000

功能：文件类型为 FIFO 文件，适用函数 [isType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-istypestring-uint32-deprecated)， 所属函数参数 mode。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/78erujrUQSCQ68gTm20Izw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=0D01F8976241181B41E1D4A705088DD5DD8D0DA3B38C57E6D48032D711C52EFC)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IFIFO}")
        return 0
    }

运行结果：
    
    
    value: 4096

#### const S_IFLNK (deprecated)
    
    
    public const S_IFLNK: UInt32 = 0xA000

功能：文件类型为软链接，适用函数 [isType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-istypestring-uint32-deprecated)， 所属函数参数 mode。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/nyqvSLQpQxKkvs6iKnIYgw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=C714A8D1EF70955644FAE069D324AEFB8FAC93DBCED54C09684C4605DD04AB7D)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IFLNK}")
        return 0
    }

运行结果：
    
    
    value: 40960

#### const S_IFREG (deprecated)
    
    
    public const S_IFREG: UInt32 = 0x8000

功能：文件类型为一般文件，适用函数 [isType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-istypestring-uint32-deprecated)， 所属函数参数 mode。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/mQ4fY-NfSmGF14csV7kKjQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=51A5CF4966BE1FB426A6F6DB94288848330193B68BC5C3B86B11735F4A265E0D)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IFREG}")
        return 0
    }

运行结果：
    
    
    value: 32768

#### const S_IFSOCK (deprecated)
    
    
    public const S_IFSOCK: UInt32 = 0xC000

功能：文件类型为套接字文件，适用函数 [isType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-istypestring-uint32-deprecated)， 所属函数参数 mode。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/rl-tecQWQjut-6JmQWH9QA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=E0D288ED8D3DAE3F32405BF01172BB3AA0AF63443978ED1FDD74A733A7B4514E)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IFSOCK}")
        return 0
    }

运行结果：
    
    
    value: 49152

#### const S_IRGRP (deprecated)
    
    
    public const S_IRGRP: UInt32 = 0x20

功能：表示文件用户组具有读权限，适用函数 open，open64，openat，openat64，[chmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-chmodstring-uint32-deprecated)(mode)，[fchmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodint32-uint32-deprecated)(mode)，[fchmodat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodatint32-string-uint32-int32-deprecated)(mode)，[creat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-creatstring-uint32-deprecated)， 所属函数参数 flag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/TbtNMEytRROM5zFuxFgsPQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=80E4D08B1711D7C927F741D3C2D26E8BC6F0AED89F733453C0FDB5F6B6451B76)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IRGRP}")
        return 0
    }

运行结果：
    
    
    value: 32

#### const S_IROTH (deprecated)
    
    
    public const S_IROTH: UInt32 = 0x4

功能：表示其他用户对文件具有读权限，适用函数 open，open64，openat，openat64，[chmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-chmodstring-uint32-deprecated)(mode)，[fchmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodint32-uint32-deprecated)(mode)，[fchmodat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodatint32-string-uint32-int32-deprecated)(mode)，[creat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-creatstring-uint32-deprecated)， 所属函数参数 flag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/gciCAraEQ5uEPSCYIXjnRw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=D798B48C037F5B2BBADB3E7991BED4721AEC52449129A709FED3EC2C69BE1B1B)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IROTH}")
        return 0
    }

运行结果：
    
    
    value: 4

#### const S_IRUSR (deprecated)
    
    
    public const S_IRUSR: UInt32 = 0x100

功能：表示文件所有者具有读权限，适用函数 open，open64，openat，openat64，[chmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-chmodstring-uint32-deprecated)(mode)，[fchmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodint32-uint32-deprecated)(mode)，[fchmodat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodatint32-string-uint32-int32-deprecated)(mode)，[creat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-creatstring-uint32-deprecated)， 所属函数参数 flag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/IDSED6LKQkusydK7SUwjUg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=51D6FF9E6EBE3255BCFCCAA7C7E4EC813D4A503B4E8522ED3A7D1FEDF053FE8A)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IRUSR}")
        return 0
    }

运行结果：
    
    
    value: 256

#### const S_IRWXG (deprecated)
    
    
    public const S_IRWXG: UInt32 = 0x38

功能：表示文件用户组具有读、写、执行权限，适用函数 open，open64，openat，openat64，[chmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-chmodstring-uint32-deprecated)(mode)，[fchmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodint32-uint32-deprecated)(mode)，[fchmodat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodatint32-string-uint32-int32-deprecated)(mode)，[creat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-creatstring-uint32-deprecated)， 所属函数参数 flag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/U2Y6TC8NQqiK0UfKde1vXA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=768AE03AAFD06F419960EC1D62BB919BACC870E17860DB2EB87A30707BEC3222)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IRWXG}")
        return 0
    }

运行结果：
    
    
    value: 56

#### const S_IRWXO (deprecated)
    
    
    public const S_IRWXO: UInt32 = 0x7

功能：表示其他用户对文件具有读、写和执行权限，适用函数 open，open64，openat，openat64，[chmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-chmodstring-uint32-deprecated)(mode)，[fchmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodint32-uint32-deprecated)(mode)，[fchmodat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodatint32-string-uint32-int32-deprecated)(mode)，[creat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-creatstring-uint32-deprecated)， 所属函数参数 flag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/t35TV7EbT-mkVKY5DHvVtA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=2C125D6BA8C15F3FE59CB98CC2ED971188ADE281AB9583D3FD3558C067C38825)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IRWXO}")
        return 0
    }

运行结果：
    
    
    value: 7

#### const S_IRWXU (deprecated)
    
    
    public const S_IRWXU: UInt32 = 0x1C0

功能：表示文件所有者具有读、写和执行权限，适用函数 open，open64，openat，openat64，[chmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-chmodstring-uint32-deprecated)(mode)，[fchmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodint32-uint32-deprecated)(mode)，[fchmodat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodatint32-string-uint32-int32-deprecated)(mode)，[creat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-creatstring-uint32-deprecated)， 所属函数参数 flag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/P6-K6Pu-RcqjIvLthRZbGQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=E68EC7238C176B5EE46F4280FD63AE1BFEF2708C7FFBF783140BC259D2547797)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IRWXU}")
        return 0
    }

运行结果：
    
    
    value: 448

#### const S_IWGRP (deprecated)
    
    
    public const S_IWGRP: UInt32 = 0x10

功能：表示文件用户组具有写权限，适用函数 open，open64，openat，openat64，[chmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-chmodstring-uint32-deprecated)(mode)，[fchmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodint32-uint32-deprecated)(mode)，[fchmodat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodatint32-string-uint32-int32-deprecated)(mode)，[creat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-creatstring-uint32-deprecated)， 所属函数参数 flag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/l0eZCmAtQ9CTncTceqc5-A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=E510FFCBE1F36C1A867F1277F1D6E642006E9ECD72F23637BCC40A03444D7B51)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IWGRP}")
        return 0
    }

运行结果：
    
    
    value: 16

#### const S_IWOTH (deprecated)
    
    
    public const S_IWOTH: UInt32 = 0x2

功能：表示其他用户对文件具有写权限，适用函数 open，open64，openat，openat64，[chmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-chmodstring-uint32-deprecated)(mode)，[fchmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodint32-uint32-deprecated)(mode)，[fchmodat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodatint32-string-uint32-int32-deprecated)(mode)，[creat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-creatstring-uint32-deprecated)， 所属函数参数 flag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/61/v3/EOUWFcfkTLW9tRlp2d9HQg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=6AA0960A04F0C124EAD4C34D541BD1C487C4C9E2CEF9DB330A0AA99D275A93C8)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IWOTH}")
        return 0
    }

运行结果：
    
    
    value: 2

#### const S_IWUSR (deprecated)
    
    
    public const S_IWUSR: UInt32 = 0x80

功能：表示文件所有者具有写权限，适用��数 open，open64，openat，openat64，[chmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-chmodstring-uint32-deprecated)(mode)，[fchmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodint32-uint32-deprecated)(mode)，[fchmodat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodatint32-string-uint32-int32-deprecated)(mode)，[creat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-creatstring-uint32-deprecated)， 所属函数参数 flag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/NHDbqJF3TCaoa2pmX8OXOw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=B694E1820B00BEBC4843C9DB8C317C144785BD878CA45A4AD27A0D18516FDBC7)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IWUSR}")
        return 0
    }

运行结果：
    
    
    value: 128

#### const S_IXGRP (deprecated)
    
    
    public const S_IXGRP: UInt32 = 0x8

功能：表示文件用户组具有执行权限，适用函数 open，open64，openat，openat64，[chmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-chmodstring-uint32-deprecated)(mode)，[fchmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodint32-uint32-deprecated)(mode)，[fchmodat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodatint32-string-uint32-int32-deprecated)(mode)，[creat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-creatstring-uint32-deprecated)， 所属函数参数 flag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f/v3/uYVq0h4_RYm5lomP6iPiUA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=7ACBCDF7407AF3D7847D77CE66D583E7D5F03F015A57E81CB7265A6A1C4501EC)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IXGRP}")
        return 0
    }

运行结果：
    
    
    value: 8

#### const S_IXOTH (deprecated)
    
    
    public const S_IXOTH: UInt32 = 0x1

功能：表示其他用户对文件具有执行权限，适用函数 open，open64，openat，openat64，[chmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-chmodstring-uint32-deprecated)(mode)，[fchmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodint32-uint32-deprecated)(mode)，[fchmodat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodatint32-string-uint32-int32-deprecated)(mode)，[creat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-creatstring-uint32-deprecated)， 所属函数参数 flag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/TADqlv7uQuSKdRdzcFt-jQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=1E6CDCB7D28F097BA708A027F230E7E428EF8438A01F56F509F3F15025A44513)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IXOTH}")
        return 0
    }

运行结果：
    
    
    value: 1

#### const S_IXUSR (deprecated)
    
    
    public const S_IXUSR: UInt32 = 0x40

功能：表示文件所有者具有执行权限，适用函数 open，open64，openat，openat64，[chmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-chmodstring-uint32-deprecated)(mode)，[fchmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodint32-uint32-deprecated)(mode)，[fchmodat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodatint32-string-uint32-int32-deprecated)(mode)，[creat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-creatstring-uint32-deprecated)， 所属函数参数 flag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/2kLfXO82ScyITyj9Fp7F1Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=4D41A740FABB9B8B5D15B7997E0CC08E5738F2DF1459294A35ED3ED466501F16)

未来版本即将废弃。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${S_IXUSR}")
        return 0
    }

运行结果：
    
    
    value: 64

#### const SEEK_CUR (deprecated)
    
    
    public const SEEK_CUR: Int32 = 0x1

功能：向当前读或写位置添加偏移量，适用函数 [lseek](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-lseekint32-int64-int32-deprecated)，所属函数参数 whence。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/Kwzhot1iRIK-pbDbT5r4_A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=590F9C4B8AAA82D3EDFC8DC989B71D0AAFD2D77B53875B3CB187328887ECFD6A)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SEEK_CUR}")
        return 0
    }

运行结果：
    
    
    value: 1

#### const SEEK_END (deprecated)
    
    
    public const SEEK_END: Int32 = 0x2

功能：将读写位置设置为文件末尾，并添加偏移量，适用函数 [lseek](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-lseekint32-int64-int32-deprecated)，所属函数参数 whence。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/Kyv8xc3rTeW7jn7phTAiGw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=EEEE9BEA370AC2B63AE139E3B9ABCD5F9EA86FBD7E281E7F702C3F1D4957E64C)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SEEK_END}")
        return 0
    }

运行结果：
    
    
    value: 2

#### const SEEK_SET (deprecated)
    
    
    public const SEEK_SET: Int32 = 0x0

功能：偏移参数表示新的读写位置，适用函数 [lseek](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-lseekint32-int64-int32-deprecated)，所属函数参数 whence。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/YVY7JZvHT4ejBgMjYUH70w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=E3C5C06B27AA138E7E5FAE80E22F3D124709528AEA39AA9F1EFCE3ACE9F7C1A8)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SEEK_SET}")
        return 0
    }

运行结果：
    
    
    value: 0

#### const SIGABRT (deprecated)
    
    
    public const SIGABRT: Int32 = 0x6

功能：异常终止，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/b1uoGfBoRxy9Z7euthGu0g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=B368988520E87744C732EC916334AB6C8D206D96AB08574CB92966DF55D1C6A3)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGABRT}")
        return 0
    }

运行结果：
    
    
    value: 6

#### const SIGALRM (deprecated)
    
    
    public const SIGALRM: Int32 = 0xE

功能：计时器到期，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ca/v3/Eyp8zYn_Sz-k7zQHNIz2eQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=04DA7AAC77DB37364AE8B8E3E1E0284E81611E543EF4CD9FDCCB69087F111873)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGALRM}")
        return 0
    }

运行结果：
    
    
    value: 14

#### const SIGBUS (deprecated)
    
    
    public const SIGBUS: Int32

功能：硬件故障，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。不同系统下的值分别为：

  * macOS 和 iOS：0xA
  * 其他情况：0x7



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/zzPwZUQNRTKN_oile-eVkA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=AB4E370B382E9378CB3A7B86CA10A56204178D579DFE8255CC5025553F22FBF5)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGBUS}")
        return 0
    }

运行结果：
    
    
    value: 7

#### const SIGCHLD (deprecated)
    
    
    public const SIGCHLD: Int32

功能：子进程状态更改，默认操作忽略，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。不同系统下的值分别为：

  * macOS 和 iOS：0x14
  * 其他情况：0x11



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/7ap8gkGQSoGrLiRkO99SWA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=722165002E8AF57B2920737BA12B4E2398BB1ACC30365371075BA6EA3598C3B3)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGCHLD}")
        return 0
    }

运行结果：
    
    
    value: 17

#### const SIGCONT (deprecated)
    
    
    public const SIGCONT: Int32

功能：继续暂停的进程，默认操作继续或忽略，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。不同系统下的值分别为：

  * macOS 和 iOS：0x13
  * 其他情况：0x12



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/C2e3oWqXQcSoaaSbvvkFYA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=88DFA95D9B5FAF46D136607C4095C7D2B836415EE563C8CE5AF88553422B6912)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGCONT}")
        return 0
    }

运行结果：
    
    
    value: 18

#### const SIGFPE (deprecated)
    
    
    public const SIGFPE: Int32 = 0x8

功能：算术错误，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/kPnyvHegSsWG87XegKCClQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=A6D698AFC8B4E4F9B73A70E9674F10D49BE83B173FF1A581272E267288A25D51)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGFPE}")
        return 0
    }

运行结果：
    
    
    value: 8

#### const SIGHUP (deprecated)
    
    
    public const SIGHUP: Int32 = 0x1

功能：挂起信号，当终端断开连接时发送，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/D7E6I3biS22eZyywjVJRfg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=F48A8E4E66319B649590A81583762235021234840D133D70BAFC2A1D25818CF0)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGHUP}")
        return 0
    }

运行结果：
    
    
    value: 1

#### const SIGILL (deprecated)
    
    
    public const SIGILL: Int32 = 0x4

功能：硬件指令无效，默认动作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/9qh1A9o1R06Ec_SMzzG0QA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=7D08F5FD5E79187D184FC005007EC12313D2AB27C491C7CEAB6BC8905B0F3BEA)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGILL}")
        return 0
    }

运行结果：
    
    
    value: 4

#### const SIGINT (deprecated)
    
    
    public const SIGINT: Int32 = 0x2

功能：终端中断字符，默认动作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/PvkN2PsoSx-5nELtozz6rA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=70E5E20E21779610AE05959D633A4CB4ED207F0F3EBAFE44F66B3CD20800FD2C)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGINT}")
        return 0
    }

运行结果：
    
    
    value: 2

#### const SIGIO (deprecated)
    
    
    public const SIGIO: Int32

功能：异步 IO，默认操作忽略，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。不同系统下的值分别为：

  * macOS 和 iOS：0x17
  * 其他情况：0x1D



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/60/v3/Ec8rt9AZRyGQ3OXWefp5Og/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=AD5E78A8B490033B74C59328DAF2A05CC1DCE37EFF1C04BC29F90E2448CF542D)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGIO}")
        return 0
    }

运行结果：
    
    
    value: 29

#### const SIGIOT (deprecated)
    
    
    public const SIGIOT: Int32 = 0x6

功能：IOT 陷阱信号，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/y_8ACKoCSf-fgCdkh9sjOg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=264047B876C993D462014C651BF03B179472DB4D2FA54342EA6F7AA9A0887DEB)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGIOT}")
        return 0
    }

运行结果：
    
    
    value: 6

#### const SIGKILL (deprecated)
    
    
    public const SIGKILL: Int32 = 0x9

功能：终止，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/BF2N40dNQd60cvde-UWUEw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=2A7A501081882E82D6291C5DE2F5C86F45E59EF54F2D50EBF8592F65661A69A9)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGKILL}")
        return 0
    }

运行结果：
    
    
    value: 9

#### const SIGPIPE (deprecated)
    
    
    public const SIGPIPE: Int32 = 0xD

功能：写入未读进程的管道，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/huxu7jLXSl2Rd_RbsJ-vtw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=BE7E53BAB84CDE97C0655CDDAA3B256468DB50DB5DA616FBC43ED8BE362E0B52)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGPIPE}")
        return 0
    }

运行结果：
    
    
    value: 13

#### const SIGPROF (deprecated)
    
    
    public const SIGPROF: Int32 = 0x1B

功能：摘要超时，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/bQZVklOhT1yQWr8ZTmg7NA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=6025B0A1769CF0D232DA7EB0407E04BE17FFDE67D942FB8A819E4B8BDC4BF53D)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGPROF}")
        return 0
    }

运行结果：
    
    
    value: 27

#### const SIGPWR (deprecated)
    
    
    public const SIGPWR: Int32 = 0x1E

功能：电源故障或重启，系统调用无效，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/l-BbhsC8TMyVKPHuCVx0ug/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=E80497CEC7D9F9DA027D102C03E770315D1C0D3D66712A06B3803E0BDB083170)

  * 不支持平台：macOS、iOS。
  * 未来版本即将废弃。



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGPWR}")
        return 0
    }

运行结果：
    
    
    value: 30

#### const SIGQUIT (deprecated)
    
    
    public const SIGQUIT: Int32 = 0x3

功能：终端退出字符，默认动作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/Bd_1MRtsSYGWxlkpcvK3Og/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=0B38819DF52DE692EB705C139F494D76B11FD5731836080F3E84337C76567D89)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGQUIT}")
        return 0
    }

运行结果：
    
    
    value: 3

#### const SIGSEGV (deprecated)
    
    
    public const SIGSEGV: Int32 = 0xB

功能：内存引用无效，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/R54ItUwEQh2oMxQj184DUg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=DF5F86AA165C67943519A8B630C03EF25BAE63DFCA6A85475BCF93BD44588E27)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGSEGV}")
        return 0
    }

运行结果：
    
    
    value: 11

#### const SIGSTKFLT (deprecated)
    
    
    public const SIGSTKFLT: Int32 = 0x10

功能：协处理器堆栈故障，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/SrEk-DzqQCCJTqmO-em3mg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=3D4C5FC48D4D881283C276F4683FF30D496DFB7E3CE06DBD07A01584F1303252)

  * 不支持平台：macOS、iOS。
  * 未来版本即将废弃。



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGSTKFLT}")
        return 0
    }

运行结果：
    
    
    value: 16

#### const SIGSTOP (deprecated)
    
    
    public const SIGSTOP: Int32

功能：停止，默认操作停止进程，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。不同系统下的值分别为：

  * macOS 和 iOS：0x11
  * 其他情况：0x13



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/52/v3/fICtNi5GRdqfI_4AHUFYzA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=8EB26842D75B7DC68C4845E54D5A7D30130D7F54AB5A1E9BDBE45C13B3A9581E)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGSTOP}")
        return 0
    }

运行结果：
    
    
    value: 19

#### const SIGSYS (deprecated)
    
    
    public const SIGSYS: Int32

功能：非法系统调用，默认操作终止进程并生成核心转储文件（core dump），用于调试分析，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。不同系统下的值分别为：

  * macOS 和 iOS：0xC
  * 其他情况：0x1F



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f3/v3/sl2NRgNAQL2TnXXGCBihOQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=E3DE7D3CA8F19364020A7C62BCAFD1954409BD0C684F398F5C7D7F643CE71307)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGSYS}")
        return 0
    }

运行结果：
    
    
    value: 31

#### const SIGTERM (deprecated)
    
    
    public const SIGTERM: Int32 = 0xF

功能：终止，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f/v3/a5iUol0JQ1OXUEm2DZOYwQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=510E455C239BEA64D6CC2F17D58937CB03455873434A7FE39A49843AA823DB9A)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGTERM}")
        return 0
    }

运行结果：
    
    
    value: 15

#### const SIGTRAP (deprecated)
    
    
    public const SIGTRAP: Int32 = 0x5

功能：跟踪/断点陷阱，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/vcqXtmmXQpSRE_IWSfqEuA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=0FB1C536D4AED07C9FAFD73C0572741A6876DF27BF4011873363283BA35DFE9E)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGTRAP}")
        return 0
    }

运行结果：
    
    
    value: 5

#### const SIGTSTP (deprecated)
    
    
    public const SIGTSTP: Int32

功能：终端停止符号，默认操作停止进程，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。不同系统下的值分别为：

  * macOS 和 iOS：0x12
  * 其他情况：0x14



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7b/v3/agINlDMVTpmU9bGuSDH9ew/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=BB5CFBDA21461927C605620AD5AD2E11921722514DEAB99BAA9B8862B7ADC82E)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGTSTP}")
        return 0
    }

运行结果：
    
    
    value: 20

#### const SIGTTIN (deprecated)
    
    
    public const SIGTTIN: Int32 = 0x15

功能：后台读取控件 tty，默认操作停止进程，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/CaEPoulJR26Z_cfErAS5bQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=A4AD7037B739F50C6E68D606219B41AFC324C3A659A052AB9E5A53A761E3552D)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGTTIN}")
        return 0
    }

运行结果：
    
    
    value: 21

#### const SIGTTOU (deprecated)
    
    
    public const SIGTTOU: Int32 = 0x16

功能：后台写控制 tty，默认操作停止进程，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/aJHhLbFHQNm3ksY-3oQHIw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=55DA0FADFCE5099892B7E4AC970F7F9FBEF6E948267814365C3DDC99738AFFAA)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGTTOU}")
        return 0
    }

运行结果：
    
    
    value: 22

#### const SIGURG (deprecated)
    
    
    public const SIGURG: Int32

功能：紧急情况（套接字），默认操作忽略，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。不同系统下的值分别为：

  * macOS 和 iOS：0x10
  * 其他情况：0x17



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/8XXJJTpMSkCy1B2NdSh1xA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=A1D4E3D9448499A299FDB0DE14596AF3C968BBD9667CE973195E62537AE24946)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGURG}")
        return 0
    }

运行结果：
    
    
    value: 23

#### const SIGUSR1 (deprecated)
    
    
    public const SIGUSR1: Int32

功能：用户定义的信号，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。不同系统下的值分别为：

  * macOS 和 iOS：0x1E
  * 其他情况：0xA



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/PjnpIaT7RQODw8rj1Fig8g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=9744DCC9B2DBD9BC3D1C5ACD7E2914EF5541C05634E5E306F0C2CF7190B47715)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGUSR1}")
        return 0
    }

运行结果：
    
    
    value: 10

#### const SIGUSR2 (deprecated)
    
    
    public const SIGUSR2: Int32

功能：用户定义的信号，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。不同系统下的值分别为：

  * macOS 和 iOS：0x1F
  * 其他情况：0xC



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/6BfcSkEtTZqT5uM620BCSg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=7870A68C00DD70C1434FE4BFCDFF6B7C09D9949869DBC230331197AEC2121A78)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGUSR2}")
        return 0
    }

运行结果：
    
    
    value: 12

#### const SIGVTALRM (deprecated)
    
    
    public const SIGVTALRM: Int32 = 0x1A

功能：虚拟时间警报，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/eKdHV-UmTliVBFm4wZKp9Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=557A6F104B211972ABBAAD4B0ED57A55A08BA5325CC501C12F2BB0E806324774)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGVTALRM}")
        return 0
    }

运行结果：
    
    
    value: 26

#### const SIGWINCH (deprecated)
    
    
    public const SIGWINCH: Int32 = 0x1C

功能：终端窗口大小更改，默认操作忽略，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/_BP3RZfCSKWGGQUuhm0zPA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=3E922FACC6EA354F62219F9C30FDA7864E13E9F830F67DC036225E3BC92BA5C1)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGWINCH}")
        return 0
    }

运行结果：
    
    
    value: 28

#### const SIGXCPU (deprecated)
    
    
    public const SIGXCPU: Int32 = 0x18

功能：CPU 占用率超过上限，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/pyy-STOeTBKINOZVn_MSRQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=9970E8E76F61AD067175AFA99DF594DB33378D219652802DFFA9595F0356F310)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGXCPU}")
        return 0
    }

运行结果：
    
    
    value: 24

#### const SIGXFSZ (deprecated)
    
    
    public const SIGXFSZ: Int32 = 0x19

功能：文件长度超过上限，默认操作终止，适用函数 [kill](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated)，[killpg](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated)，所属函数参数 sig。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/fKaK8P1QR6GXgY2cLul7aQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=E9C0FF8F369779D82F4FB25D360F468E853D05124BEEE7C0153ADDA8B308D531)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${SIGXFSZ}")
        return 0
    }

运行结果：
    
    
    value: 25

#### const W_OK (deprecated)
    
    
    public const W_OK: Int32 = 0x2

功能：测试文件写权限，适用函数 [access](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-accessstring-int32-deprecated)，[faccessat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-faccessatint32-string-int32-int32-deprecated)，所属函数参数 mode。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/2aEvgCcnQf-Y81iBl_Cu3w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=7610129F797640A7EC12F57AE06F5C8DDE60EDE3D26AE687E83D5DDE7CAC881E)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${W_OK}")
        return 0
    }

运行结果：
    
    
    value: 2

#### const X_OK (deprecated)
    
    
    public const X_OK: Int32 = 0x1

功能：测试文件执行权限，适用函数 [access](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-accessstring-int32-deprecated)，[faccessat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-faccessatint32-string-int32-int32-deprecated)，所属函数参数 mode。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/rVB15ktPSROAJO4PrwShfg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T111104Z&HW-CC-Expire=86400&HW-CC-Sign=04F6931D2A70DBE73774ABB1F5373369F7B8F741B661B0C0AB65543332AC9EB7)

未来版本即将废弃。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.posix.*
    
    main(): Int32 {
        println("value: ${X_OK}")
        return 0
    }

运行结果：
    
    
    value: 1
