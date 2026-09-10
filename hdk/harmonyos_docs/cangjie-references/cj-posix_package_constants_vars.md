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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a0/v3/KJcO-RJ7T82aWHjzwufZTQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=E27A871F618B31418E35C192DF43A3AF2F3BB599E12C53D7DD94E16BB49DB6D5)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/ioJKKZHVSXimPsVVuQgZYQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=941099EECC772B0730B5586069ABA377971B60AAAB67962E8A0FBE25F2258D31)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/YMonDMwsR-eklB22Pn0lSw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=EAD06B1F14EE3C4ECF111B4FA9E33501A7BB8A39D50C338CA363FCDF2B8C1775)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/WYGOQ4VQT3e2mdnjUaRnxg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=2A4143E2B8E4E3BD9B0100FA33EB6FCAF9157E7ED60341DA6B99C484C8F6487A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f8/v3/Dx3fSR3qSsS2B6UbTt1gCA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=C9956AD39F6D8D1B3DD1B2409FB5A793DB5EEEAD9D51828EF696BD920E887120)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/DZAKUnLqSQS178Hjt9oHwg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=C5BBB96F5AEF03B71AAF45A5CE195A32F48AC14612B472C1F0DD77A140B54F66)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/Nm8OzhF8SRi62JMdxtWOcg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=C0346117E54F3B82E8306A9F4E81165405DEADEB54E42F0142182D8AEAF62292)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/gU9vOkTTSwuey6kRMkTdqA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=4C4F17B1CBD71538B3C2DB902B12C9B0793AB0E159F06FAEC71186CCB51A30FD)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d/v3/O49udEq0RU-fxsuzNCaWlQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=2EC1F9E43BE5F94F09AA026DB55332BBB03A9D3E47BDC730D79109FE57B1EEA0)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/D64oS1izR8GPRMViD5Mxrg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=A32C1705DB5FC6C66C83F8225DDBBFD42709CC4BD558070B5BB300C9BDD43F1C)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/GXQarrxjQ7yDiI2N2SXdXQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=64054FC478D51BDE570A6B6D17B379C381A04E73A7BF78596EFD12E9283E945B)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/cp_zAPZITuKLFtzE6It7DA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=57204CB30D0F588B0B2EA829141CB82C7CAE65F0ED377B0BF1BDDCD13CD89FEC)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/TQv7EDyMTiKwxKYEbjnruQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=1CCF2DB79D83237DB6D390720E400CCEF50F6251F481A2E8D23E51B3C7DADF31)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/7dcxTXuoRtW-e0LOGhBnog/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=D83CF36879D290E2EE12A573C4DD85EF2D124859D96BB89693D9B1B3B78A3C7B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/y1XXACqkR9Gbpnr3T9HBvA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=3FE1BC3F74598391A533FF0068CA7D887A3EBE06C06035559250CC6DAD4E795C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/uG_QobZIQ-aHhxD1Qt-Cfg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=889E778AA3A89704022B2C6FC6BBF0298ED11A70B58E6CFBA6357EA4D1AD877A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/y-gxYJ0eQzWY5jR2xi8NVw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=4B5164B913950A03B0E0BA97EB87BDBA4F951FCD12F20D209934D8CAB9050A17)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/SwPSCZ_fTe6mbSXBWwXYUw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=06378B8700812B9014C2468315604F6046D20CFE5364D875EAA57A57C98BD05E)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/YlCj4gyNRVWe75BntxaZnQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=C194DF136875E0BAA735E83EFCC744A750C5299D46E6645968E971F8C28234B4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/KHwlPPlpSwKe2Xl53NRG9Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=4D27BD61E4BD74DAF37F4B626DF7F2D842E0A59ABA08755308702DD9B637C0E8)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/64/v3/QRhrkzBrTZ-fuQHeOpIsPg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=3D21956A5C8FD91E7EB4E4A4B17B86189DF279D8A0155D84E29EBE1FC78D2BD5)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/xaQzGZCqT_eDWVB9LGkWrA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=D01C5E418C26844490291DD4A44E227A7507DEA0D95DC5D88AFE080057094DC2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d8/v3/dYi2dqUuQwSTRtDJ5HxTXg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=CD0960127BD470C22CD2308599989CFFAA9AA53AFCC4EB2B674646952598C744)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/p9MqJ4K1R0-dXOn-Bn8cLQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=756FDC984294B50122B8B0CC57510074C5BFD901B253C9A914CB0D7E0875196C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/20/v3/78erujrUQSCQ68gTm20Izw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=7DB933DABE88381BDC02BAC5B4EBED366D7B80818954A4A38DF7B6CFC7B33D4A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/nyqvSLQpQxKkvs6iKnIYgw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=860591F0F99F9AEB4A129CA4CCDC45FAACF998544227E172BA63E0329519441A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/mQ4fY-NfSmGF14csV7kKjQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=CE0320BA8EC67ECE8524D10FB68676CA9D52DFC7BA4A48F24E794E94DE584FAA)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/rl-tecQWQjut-6JmQWH9QA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=55245CBEE1EFEE17A6A717384B87BFFD8D35A44CAD76F0483FE6CD7705619F0C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/TbtNMEytRROM5zFuxFgsPQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=2FEA213D62392AA5C7F5F1BED7E5ED7CD7BD9D6CFFC63DFCA3EAFF7EC1549223)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/gciCAraEQ5uEPSCYIXjnRw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=8A68F7935EB5EAD1A1556DB260BF07B50FF3446601917F9AD918C69963585984)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/IDSED6LKQkusydK7SUwjUg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=0E5A179954749D3F97CEE7C371A79066CF06E3922A7D05FA90AF77EE0021EAC9)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/U2Y6TC8NQqiK0UfKde1vXA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=4CB4AA4E966EF1928CB5AE52D9D81E663AB053EB3DAD29B48CDC4780D6717033)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/t35TV7EbT-mkVKY5DHvVtA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=CD0990EC720CB3D3A53797B61F711009B73AB7DB64ED44E3AF105B2AD803DC13)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/P6-K6Pu-RcqjIvLthRZbGQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=512224B3D9C0AC1521867F3EE9F08EE33471BCC9E90001FA96C834D9897A9788)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/l0eZCmAtQ9CTncTceqc5-A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=7140A1C4387D9D00A069EB24AE2636848AF8CB655C9E5ACDB5C199676637C8F7)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/61/v3/EOUWFcfkTLW9tRlp2d9HQg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=9363DF4793C9DE9D8F298D879DBBA946955C6C20E495F336B1096BA5ADA8605A)

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

功能：表示文件所有者具有写权限，适用函数 open，open64，openat，openat64，[chmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-chmodstring-uint32-deprecated)(mode)，[fchmod](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodint32-uint32-deprecated)(mode)，[fchmodat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodatint32-string-uint32-int32-deprecated)(mode)，[creat](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-creatstring-uint32-deprecated)， 所属函数参数 flag。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/NHDbqJF3TCaoa2pmX8OXOw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=ADD4F4617A11415A3FAF5BFF8709663D2D2076E32CA8C85DB61B8B814898A86C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f/v3/uYVq0h4_RYm5lomP6iPiUA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=22434245D9569B24F6314C3DB31D471B615BAC76F42FCB31E8095AC91FB6AC66)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/TADqlv7uQuSKdRdzcFt-jQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=5A453BFD14A75319B7DA809157FAEFC16FB42CDD82B604E53AF2CFB21BF783EF)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/2kLfXO82ScyITyj9Fp7F1Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=0E9F21D9C453A84778A73FAF2BEDE704F75659F9DF690597DA32CD4A8ED2C8AD)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/Kwzhot1iRIK-pbDbT5r4_A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=15F2A01080175F946780E4C2AA2F8B64F0EF05A79662A0D1AE354B15A5571082)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/Kyv8xc3rTeW7jn7phTAiGw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=180B942C9C519959E923D3783437F1C5377223621475A53E49626FD42D536FC4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/YVY7JZvHT4ejBgMjYUH70w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=92503C025091F58A381572A0589ED4107801BD6C9E1E89F65A09D5DE304835C4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/b1uoGfBoRxy9Z7euthGu0g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=DE9316DB064E859BB866225C8DE571FBEE55578D4D3855A3B2E5AAB2106136CB)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ca/v3/Eyp8zYn_Sz-k7zQHNIz2eQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=EB2DD36CF73700BADA6388951D473C02742AC1F7533CA7DCC496E32037355073)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/zzPwZUQNRTKN_oile-eVkA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=18B021E92C40741169D9973CE4171FFD3D6FAE63CD28A46CCA753C64F7430350)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/7ap8gkGQSoGrLiRkO99SWA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=4C503FF907C4B570A9887C549DC9CD5D492773413D90CB764005F83C60DC9D34)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8c/v3/C2e3oWqXQcSoaaSbvvkFYA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=CD3204DA03E51953A670E69D6D3ACA911817043BC4DE47574424B13482A86B58)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/kPnyvHegSsWG87XegKCClQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=0D75400D7AD116E1CD92F5FEA30FF40DF3CF47B43B66DF272EF7302D47B9C457)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/D7E6I3biS22eZyywjVJRfg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=FF36453EF1A10E97BA2C949F334259B7C1262AE7607F536C496CFE6F6D6DC9B2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/9qh1A9o1R06Ec_SMzzG0QA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=F48B6DED78E4E10E580BEBFD46D88AECF47F21D66B03A002F2C8CBE5548E2479)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c5/v3/PvkN2PsoSx-5nELtozz6rA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=9E4F2229F7765429A9780598A02FB71BFDB352256F367F6AC03CB0F8D325D57D)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/60/v3/Ec8rt9AZRyGQ3OXWefp5Og/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=0C891DF1F5F72198AB562EB378C760DCD547CB2116525242B0B0CECB1C1E31F2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/y_8ACKoCSf-fgCdkh9sjOg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=CA01964D5C69D54A6E64534BA9EE58C92D00CF716C8AFE376AA2843D8F616B03)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1f/v3/BF2N40dNQd60cvde-UWUEw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=6B4C2FC632A46733A0FE01CAF5E55FCC0AB84D401CC91880385AFA90A4590F38)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/huxu7jLXSl2Rd_RbsJ-vtw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=8B4D57164B7CB4B8CFC91525BB04793A80D4AE0255A5D6FB543377DE78B2C768)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/bQZVklOhT1yQWr8ZTmg7NA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=1CCB5EED0DEE6DFF90777189468DCDD78A423FA3A9E3F4A9AE8F1222181B5295)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/l-BbhsC8TMyVKPHuCVx0ug/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=E5DF32C563667FF539F48934BF4863B6DCEFDA357922CC20C80438EB7CD37BFD)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/Bd_1MRtsSYGWxlkpcvK3Og/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=95A53A645A462035109AD226EC253727A3626628C94FDAF40BD0514E345C46BF)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a8/v3/R54ItUwEQh2oMxQj184DUg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=8F76FA58823BD0DD909086F317ABE5EBDF3B7509B9A519B87A11774BE26C69DE)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a3/v3/SrEk-DzqQCCJTqmO-em3mg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=D1A3DBEF72F16E564A2712E8DB26E5485F5A49C8FDB1E87E80605F207701078C)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/52/v3/fICtNi5GRdqfI_4AHUFYzA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=0B4DCF9A1AB2140144F9C2E69AB952F4BD08D907D38B1E82A109026B6CF8091E)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f3/v3/sl2NRgNAQL2TnXXGCBihOQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=32E6332508D84468AEAE4AAA8B267F6F4226DB9431E60328CF7F8B99AAAC02C4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f/v3/a5iUol0JQ1OXUEm2DZOYwQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=346981388CEE6F2CE5DDE32C42BA811A4970CA8A59AF7609B51BA154C13DD25A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/vcqXtmmXQpSRE_IWSfqEuA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=A2422C3776E3BA737123D04B1E23526F77BC730ADB3FC538E47961A9B7F987CF)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7b/v3/agINlDMVTpmU9bGuSDH9ew/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=D25C09C0C6CC9EA8D6602DD78A5AC3EEA3BBA114FE5D09B2C8C6D6D931CD3A41)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/CaEPoulJR26Z_cfErAS5bQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=CE32360290D2EE55AF502833E25CC3BB6AECEF36525E64259432E964E2C01B76)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/aJHhLbFHQNm3ksY-3oQHIw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=E7DE233F0F1B59D019007B85D3E705CC6B63A9762B671F8E6DD2B3A05CB3088F)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/55/v3/8XXJJTpMSkCy1B2NdSh1xA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=1237EA919D46953B772DDBFA0EAA842BE5FBF99A86F39A01DB7CDEEEA26D0671)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/PjnpIaT7RQODw8rj1Fig8g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=0F0F54C3BBDF79591D5F793CE637E34E171645EB17018CC3F6AA2F904365DD85)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/75/v3/6BfcSkEtTZqT5uM620BCSg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=517D7CBA03CB32D0F655D92553DD6AB74B2934395FA2EFD1870180589A8AA278)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/eKdHV-UmTliVBFm4wZKp9Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=9647A89DA36A8351A71558541EF5F2854D14095CC66699A37B9570A913AD342A)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/_BP3RZfCSKWGGQUuhm0zPA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=195ED1ADE2E3FE4A4EECE1B9BC13F1A99B8F2612FE50C388DCA7EDB90B73B5AB)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/pyy-STOeTBKINOZVn_MSRQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=66B6773AB96AC3F5971C05CF17843E98473826BCCF083BECD8B27CC840C3DE73)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/23/v3/fKaK8P1QR6GXgY2cLul7aQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=44701A6D00B2AB605E07A0A0958B8461D1500A53010E30314FD42973BAC6A102)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c3/v3/2aEvgCcnQf-Y81iBl_Cu3w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=AFC639423796AA6D51C74315112CEA6FBFA6E644BD9A06D5BC0A7F54C4B87CA4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/rVB15ktPSROAJO4PrwShfg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=B3D1FE00AB21CD2297B7E4791414A143CCE25BF35AE795FD0A285758219DAAE5)

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
