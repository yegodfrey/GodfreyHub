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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/4pu2y6rxTliIyKBwE6jf0Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=1B39258722210CA7F1005BADE90A94F80D8B79F0A6DFA181F8BED0AC51B1ABC3)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/3HReP_yhQJuYiPDgPnAb8g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=0270FC95EF2BE9D28019C414A1BFBFCD37207481AEBAF0301E28B7330EC7000F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fc/v3/fFeGX0AbTlKrnz-fFxtMew/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=2143AB505BF8F447B5252E1CAD08633DDA71D823CD5A39F89ECC89D2539B334F)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/RLPvBgTXReeNTSawrZCHYA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=BD2E283B3BB1603CE6884CC376C9AFB4F1B1D6FA029F1CC97032F250800C3516)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/3CLnPgaJSYWi1VXZYjttFQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=908738823F7A91E102964F0185000A11D241576C80A833F834D4DF6ADC7FF0C7)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6a/v3/Ia-kXYRwR7qhwux2t18bDw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=FED075076105EEC39ADDF73A1DBDC5A9EB3A8F85454C881D58F1EA31C4D42371)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/a8JujN-YTZSld0Ci7cx5AQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=C71C714905607A4F4992244D181E072E62659FE7A15941383823FDAB540FF44F)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/Simy5ytFR3mlUDDiQ4kk4g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=2ABA1E5BACD28B682CDB1BB8338CA60B79968FA2494ED8ADD6138768A636C3B3)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/80/v3/WbovMwihRneCm8IVZJIk0Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=E9234496A400AE01D23AED0047369F95B8D353C8047F1679AD81E45E8E56F211)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/2aUzEJd9StavsjH2p514Fw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=FDD32DC9707A5D290DFCB196B93E317C23D71D95D83C899DA48DE63D4EED2F26)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/Z-LH482kR6qbpz23GYNxhw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=4EB84F77D02820ABF6F49E744679FF08D5ACA3F61DBE8EFD5AC6E0775719804C)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/UWcc0qA7RcyMZhWTGg0z5A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=0B87B1AE64B2CB1CB92FC53C93F579A9AE5A225C1DC6FB40F1FDEEB7C40F24AD)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/xEIgxVEvSPy1rfBjJYFdOg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=0AAFBAE34E77191285D4949AC786CF5D75373CB0F388009ABE5227ECA9C80176)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9b/v3/1pz72qy_Q8efG0xwJcoVwA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=B54204F2C07A9A79D22CAD372A1A478740058AF503194CEC1D0AEF52316ED83C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/tc4WQR8MRKeyV6Uh_7d14g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=1D5E66D146EA2F125BED5CF7BA58F64185B506A0D7158A42F1FFB9B920AC225C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/YOFjJPH8T2-pcSB2sFjylw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=6FA772B985BC2FABA0D490AE7150CF62B5C6B69ED6CA227DBBD176475EC0CFEE)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/nNnKZq66SpWB3YfJOW8klw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=BB5B22ACBD7C19D2BEA63FAD188AB74FE6F81ED9EBFC1C8DD6CF96668277D86B)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b4/v3/Hgn9lE-hTJqxmjp3YpLkNQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=14F6D75732FB96624CA998CC9E18302B73385DF36E68B5E691F4ABACB7214090)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6/v3/-Wq9lnWMT8eAsHiRgGpgPw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=6C0328BE4741334F0319CCE31C7FCE97C4F44DB386114CEAF1C4FA3918CF07D3)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/42/v3/0Ve8WptTTjqLbfGp3072wQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=F4845702AF9BE414C09E34B388047BB0067DCF46D674E4020667A209C8B262D5)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ac/v3/6OTUpycpRQOrWV_SPbEXeg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=1ABEE88158C2823CA1046B8BD30E1B8F009C9F802FD1195BF6A14326FE8C4CA0)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/-GB58Ag2QICjLsRfL1cJNA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=E0EB0ECACE94EE0A744624E657CB17421F23960B0252EC769F13D101BDE1654D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7c/v3/H2XfLLM3QqC78f8pbsLFng/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=7BC3AA75E03203928CD21E128AC5839C9CB83B15111835C9F5028CD46B0339D1)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/a_m_Q9EBRz24ZcLqQWiNcQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=C9E0C8446EAA9572F24780E9CEE09A256B5AB5F446E3D927E2BD35931759D292)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/gkj9_Xk1TcCKKYT3LVfF7g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=E7985313356B105419C5235BB09D7CFE9FCD4947668B0FDCF9794993C7BA61EC)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cd/v3/74Q226OWTy-rjVNzu-ocLA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=6AEF2CAC101322395262E35BAA15D550E5E4F826AC73C2135E83CF6DCE31B877)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/28/v3/6SJSF8UyQ7GxfLRp_P1_5g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=F6CF9226CA8F3F81D67A7ACF77457A375B92BBC3B1381BBDCBE2D95B68628862)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ad/v3/SNOG7I1RSkukuZz7SEfqWQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=010B50E8E624D41765D347369749FE9BF07D3E43599FAB51C9A9921D7F8352B7)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/2A-3xbx-SYueiH_Yk7PxYQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=A60323DC8534777A55C9F550936D9BBA675D827E3B44843DFFCD730C1A4409DF)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/24a_ozE1QPa3Hk78tniy7A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=51AAEDFA1154416DE59482CEE143521586657217B8894CDBDEAA9F41F6CFE345)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3e/v3/t8ovyZoUSOK_wlA4Qs885g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=D5A6B1E88A2381C52A2F52370D3F8A96332E80280D72ADB7CA1711B50327CEA6)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/AO-qsB7QSiah6j0oHsbbNQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=C65F1183C6830B25FB2A8BA722EC57424C7212998D9835A4EEF30000C3542BC6)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e3/v3/dS4rFQiOTBef5uLM-F1k5w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=FF12C6DD49D97FEBBFC554EFEF71F6F2D7C08B6135AA205880A8A0155FB6B50E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8f/v3/wQTjin8wSL2E453C23vZNg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=C3B98DF7659542D7B195919A8BC44CAF1F9294ED3D62AA74ADF31B39AA7AA9B1)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/eSCKKU3tS6WvbixaVViMGA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=57C378398DB36431F557610F07FB33FC42BC13682ECFDE165948E6906986FB63)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/lp2jlNgqQgmAI0TddnirAA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=355DC5FB11B5227A8E5E580F65753DB7B538D2F02650501A2C4C30B3CEC4E4D1)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f9/v3/B8QwfQE7QNy2dswzc-QP2A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=8A75D6ABCF5834C5A9E1ACA6679835D716A8F02864184125A0EAC00C82BA1F03)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c9/v3/aJZHjrFbS7CYIpOH0OWOtQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=9F27BE5BA24D24177803C8335D1FD484D3AD76B37BB0D4569450307505029ED4)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f0/v3/z937PrFwRvGtj6i0AXcMRg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=028F741A66E8F0952D023FB03F5AE9D1A7CC62513E7200711C19C6257FFF59CD)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/HKCH3fkjR7GMrCpu6O9vNw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=2A259B188D0BB96D6D6FF50450AEC0F9ACE1DFF21C1CFFE07D4D71E2418CD9A7)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2a/v3/d6yG_jkgTwihvdUIVhP6jQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=C6F24CBEFBE30248D5F7BC58FAB718514C36A4FBE7FA354F948F6654E372DDE0)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/13/v3/RQt184G8Q_SMjjvv_ZKbAQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=421F58589BA94A1B8405F5C5E44E9760650D7428F0A5DC7A3780D2540D383907)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/86/v3/D60RmZfgSIKQRslUn7FtjQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=23D40FF274F2C9B21B105F8992EEB1873D428A2B9747A8932668312A297A5C6F)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/2PlsfIY0TaWfu59me1f9jg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=12B1E280D9DCF61D9B3D6B34E16769D1EFEF00A5471470D476812E42D214D971)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/sKUO_5DiSKu5NYp-7HGYKw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=34B173E3854BF13833D4F1D8F3CC54DB0A5EEE86D909704706F000DD9479FB2E)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/mFFpqf8HQ_ykzqcNrzO1ug/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=649BB7FC2CF1F9FC4768A9480A890B432642FA157DBAFC93F052EE8714BA18CD)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/27/v3/4PS178SzR4yx3WiGXrkUIg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=797AF4AAA5C2043FA1384D548FB74ADA9ABF342DEB4B2BB9384DF2597A635F16)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d4/v3/vJTr9XmuQxi0JYGxfkhufA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=C883A7429DD0053E0664F51A7C6B09F282B8727B39FC44A77409C63EE00B0EFC)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/iqEs9_0UQU6b-TdmU6j4Ow/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=DCDB60A54E2079514C091761814B4D472748C52DEC39CA7C49905646B7300C53)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/sYEsMGNCQ8ixWi42IBIVqA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=9B8147DBA9CEB8668347492276574FE0EF83E91FEE330DF28FE4EC2EC4601396)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/enoQmzfGQSiNdFiSBcj3uw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=221012F251634C60A66639B16CF2C9768060ED4556D27A3FE310418936287355)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3d/v3/nvdT3wtIQyi03-d4iFswEw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=115E64CDCB026FD0ADC6748AD188DF6D20CFDB6508FEA94AD5C8AE172DAE6521)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/42/v3/pEoMcSvKRFi3vAvyJ750Aw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=05F58A6AA559CCE37A7D96EFA59FCF2B07A6E074178D9DB8A36080E44A98E22E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3c/v3/FXa9TXRAQiu9DBjoK5pXiw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=8006A71C0022C763747FF247EF213F3C9A71CFF8C1579B6D5DE4EA89C7644072)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d/v3/t0t1D9B4QKKwEYElNcrjRQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=85365FCC9ACF8BF4E318382CFB5BD8F1C61196A469FDD8D11E587879CE106166)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/91/v3/v_j9m0XBTuuMii_Nkbe9ng/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=9309CE65FB6ADD73472860A89967C71BE77B7B21E0BBEBE33207EABAC9D30116)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7c/v3/A5EToY-5SAWq2EOT0kkaQg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=9D8E6B0231A1A5DA1513A05C28DAD7C88E87EA44B8DA00F4B0868F93FCC9DE13)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/fbAMGBgcRMm_z4aucTGWyw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=07729059FCADCDB6B15A356DDFBBC0DDA2EF8314F57C6E3D78AA08C2848B98E5)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/kNXkLkeNQLu1xVkCYnoKBQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=54EF5A8D2353E330857371EECC487F850EDBE6B953BC9F280ABB257104B0D896)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/QOJSJMTzTC69Kuqc3ZrnCA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=A0026E4DE7B2D26B702C3B0298913ADC9EE49F5A3B70FD7D6116EE4AE9DB8F7B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/So76cRQxTRK0uHZ2hj9jZw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=279ADBCA24218E83439B1E1208A30E3C1D92D7992D93C3527BE2BF6C355C123C)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/73/v3/duLhZyHnSi2cRpX6pvtvKA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=2025140D840D15FF87263A49D9E5D2E45CC9398A251B50C582CBAAEAF19A2D2C)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/nPAiNO3WQY2wxqgSMANKMg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=FE2FE4F723364BE8F6E46983762F61823D694D29A10869E561CC93500F431EE2)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/xBnHc07vTZ-CJHxgPSF_Pw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=26AB0EE6F09FC8D3E2609756DC1B3C2117EF4C1AF8DA0F87E2D66471759BC051)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/05/v3/XQ0KgR30SnSTe2NrHuGAbw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=9B6CEA9577CAC967BC674782D254D879188221397333C674DC1057590E4C5C9D)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/5DV9_PvxQFe4n931Cvhmyw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=6C56FFCE8A8FD1FA560AE9198504E063F2476BBF2D6D9855BE1F605915C3E158)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/-ijsC6e9StmFlKpch5xV5w/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=58784AF3EF3D3260073202742F984A9FE85DC040643786C7D3C2973D8ECE6D0B)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/EMfTbOUiTs6Z1D4COOFvVA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=290A13718EEA382D3E2FFA6D67282B70785B6BFA96AF4BF3EB49B2CE6CA6C446)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e6/v3/U8lDxSqSS2aRkeUEWtd5qw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=57779F77914948A22556D1486F4B8E589A68C967BE5D048A04C8E921597475CB)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/72/v3/vER5rWE4QJ283Pz2xP-dxA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=87FAB324E975FD3384AABE5085C0DC72FE84A3B5BE1BF7AE7461227C29815B8A)

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



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/AYX1yw07QyWzR3X61PwPVw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=9669541A43F5E7934C2F9D09DC7CEE41961E37F689D2B6695FE89564A51B5841)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/tIEprBEmT5GiNQk335ozqw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=14240ED2CC730216F073F295E4733FA8F98142B4A027D3D83FC04384550271EA)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6c/v3/_TMmfkxWSr2vGruw0C4CFg/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=DA39CEAE645849EEB02238FA9CFC97B0F4C7A2DB66E8C3E92DCFCDFEFF8F75B0)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/K1Vb5wSKQpCtRyVRSzVFyQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=F4C2D5C92FCF6BDDC51246D27DF25CA1D168345ECA3F796343148993C145D33C)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/31/v3/oFbsvzOHQSqknc0M38dm7g/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=9637298CD601611BE5B45CBA28C7F31E063D80A098F07DB48E2006D349B0D550)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/uDodfOuYT4miZdp-Avno6A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=DCCD96EEA3BBBCBDDDE7A44976947D364CA49559FD7A84E60860CE1E4A33F84D)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/CXaVnBBiROy0Ot-rIOGhjA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111712Z&HW-CC-Expire=86400&HW-CC-Sign=F0989F65C4D009E73F78C075314098381F2C7DBEBBE4C86DB678E9774B2283EC)

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
