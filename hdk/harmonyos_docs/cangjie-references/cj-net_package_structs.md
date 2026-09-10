---
name: cangjie-references/cj-net_package_structs
title: 结构体
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.net / 结构体
---

# 结构体

#### struct AddressFamily
    
    
    public struct AddressFamily <: ToString & Equatable<AddressFamily> {
        public static const INET = AddressFamily("INET", 2)
        public static const INET6: AddressFamily
        public static const NETLINK: AddressFamily
        public static const UNIX = AddressFamily("UNIX", 1)
        public static const UNSPEC = AddressFamily("UNSPEC", 0)
        public let name: String
        public let value: UInt16
        public const init(name: String, value: UInt16)
    }

功能：[AddressFamily](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-addressfamily) 地址族用于指示 Socket 的寻址方案，常用的有 INET / INET6 / UNIX 地址族。地址族标识符最初在 [RFC 2453](https://datatracker.ietf.org/doc/html/rfc2453) 中定义。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)
  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<AddressFamily>



#### [h2]static const INET
    
    
    public static const INET: AddressFamily = AddressFamily("INET", 2)

功能：IPv4 地址族。

类型：[AddressFamily](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-addressfamily)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${AddressFamily.INET}")
        println("name: ${AddressFamily.INET.name}")
        println("value: ${AddressFamily.INET.value}")
        return 0
    }

运行结果：
    
    
    toString: INET
    name: INET
    value: 2

#### [h2]static const INET6
    
    
    public static const INET6: AddressFamily

功能：IPv6 地址族。不同系统下的值分别为：

  * macOS: AddressFamily("INET6", 30)
  * Windows: AddressFamily("INET6", 23)
  * 其他情况：AddressFamily("INET6", 10)



类型：[AddressFamily](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-addressfamily)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${AddressFamily.INET6}")
        println("name: ${AddressFamily.INET6.name}")
        println("value: ${AddressFamily.INET6.value}")
        return 0
    }

运行结果：
    
    
    toString: INET6
    name: INET6
    value: 10

#### [h2]static const NETLINK
    
    
    public static const NETLINK: AddressFamily

功能：NetLink 地址族，其值为：

  * Linux: AddressFamily("NETLINK", 16)



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/ywKhzYuLS6agazPaP-Dj4Q/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090207Z&HW-CC-Expire=86400&HW-CC-Sign=6036C80D889D5F2CF913D5E1EB868AE99E56BBA0C50396B3E64A714B8FF77954)

不支持平台：Windows、macOS、iOS。

类型：[AddressFamily](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-addressfamily)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${AddressFamily.NETLINK}")
        println("name: ${AddressFamily.NETLINK.name}")
        println("value: ${AddressFamily.NETLINK.value}")
        return 0
    }

运行结果：
    
    
    toString: NETLINK
    name: NETLINK
    value: 16

#### [h2]static const UNIX
    
    
    public static const UNIX: AddressFamily = AddressFamily("UNIX", 1)

功能：unix domain socket 地址族。

类型：[AddressFamily](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-addressfamily)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${AddressFamily.UNIX}")
        println("name: ${AddressFamily.UNIX.name}")
        println("value: ${AddressFamily.UNIX.value}")
        return 0
    }

运行结果：
    
    
    toString: UNIX
    name: UNIX
    value: 1

#### [h2]static const UNSPEC
    
    
    public static const UNSPEC: AddressFamily = AddressFamily("UNSPEC", 0)

功能：未指定的地址族。

类型：[AddressFamily](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-addressfamily)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${AddressFamily.UNSPEC}")
        println("name: ${AddressFamily.UNSPEC.name}")
        println("value: ${AddressFamily.UNSPEC.value}")
        return 0
    }

运行结果：
    
    
    toString: UNSPEC
    name: UNSPEC
    value: 0

#### [h2]let name
    
    
    public let name: String

功能：地址族名。

类型：[String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的AddressFamily实例
        let inet = AddressFamily.INET
        let unix = AddressFamily.UNIX
        let unspec = AddressFamily.UNSPEC
    
        // 访问name属性并打印结果
        println("INET name: ${inet.name}")
        println("UNIX name: ${unix.name}")
        println("UNSPEC name: ${unspec.name}")
    
        return 0
    }

运行结果：
    
    
    INET name: INET
    UNIX name: UNIX
    UNSPEC name: UNSPEC

#### [h2]let value
    
    
    public let value: UInt16

功能：地址族值。

类型：[UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的AddressFamily实例
        let inet = AddressFamily.INET
        let unix = AddressFamily.UNIX
        let unspec = AddressFamily.UNSPEC
    
        // 访问value属性并打印结果
        println("INET value: ${inet.value}")
        println("UNIX value: ${unix.value}")
        println("UNSPEC value: ${unspec.value}")
    
        return 0
    }

运行结果：
    
    
    INET value: 2
    UNIX value: 1
    UNSPEC value: 0

#### [h2]init(String, UInt16)
    
    
    public const init(name: String, value: UInt16)

功能：常量构造函数，创建 [AddressFamily](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-addressfamily) 对象。

参数：

  * name: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 地址族名。
  * value: [UInt16](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint16) \- 地址族值。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 使用构造函数创建自定义的AddressFamily实例
        let customFamily = AddressFamily("CUSTOM", 100u16)
    
        // 访问属性并打印结果
        println("Custom family name: ${customFamily.name}")
        println("Custom family value: ${customFamily.value}")
    
        return 0
    }

运行结果：
    
    
    Custom family name: CUSTOM
    Custom family value: 100

#### [h2]func toString()
    
    
    public func toString(): String

功能：获取地址族对应的名称。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 当前地址族的名称。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的AddressFamily实例
        let inet = AddressFamily.INET
        let unix = AddressFamily.UNIX
        let unspec = AddressFamily.UNSPEC
        let custom = AddressFamily("CUSTOM", 100u16)
    
        // 使用toString()方法并打印结果
        println("INET toString: ${inet.toString()}")
        println("UNIX toString: ${unix.toString()}")
        println("UNSPEC toString: ${unspec.toString()}")
        println("CUSTOM toString: ${custom.toString()}")
    
        return 0
    }

运行结果：
    
    
    INET toString: INET
    UNIX toString: UNIX
    UNSPEC toString: UNSPEC
    CUSTOM toString: CUSTOM

#### [h2]operator func !=(AddressFamily)
    
    
    public operator func !=(other: AddressFamily): Bool

功能：比较地址族值是否不等。

参数：

  * other: [AddressFamily](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-addressfamily) \- 参与比较的 [AddressFamily](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-addressfamily) 对象。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果两个 [AddressFamily](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-addressfamily) 对象不等，则返回 true；否则，返回 false。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的AddressFamily实例
        let inet1 = AddressFamily.INET
        let inet2 = AddressFamily.INET
        let unix = AddressFamily.UNIX
        let custom1 = AddressFamily("CUSTOM", 100u16)
        let custom2 = AddressFamily("CUSTOM", 100u16)
    
        // 使用!=操作符比较它们
        let inetNotEqual = inet1 != inet2
        let unixNotEqual = unix != unix
        let customNotEqual = custom1 != custom2
        let inetUnixNotEqual = inet1 != unix
    
        println("INET1 != INET2: ${inetNotEqual}")
        println("UNIX != UNIX: ${unixNotEqual}")
        println("CUSTOM1 != CUSTOM2: ${customNotEqual}")
        println("INET != UNIX: ${inetUnixNotEqual}")
    
        return 0
    }

运行结果：
    
    
    INET1 != INET2: false
    UNIX != UNIX: false
    CUSTOM1 != CUSTOM2: false
    INET != UNIX: true

#### [h2]operator func ==(AddressFamily)
    
    
    public operator func ==(other: AddressFamily): Bool

功能：比较地址族值是否相等。

参数：

  * other: [AddressFamily](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-addressfamily) \- 参与比较的 [AddressFamily](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-addressfamily) 对象。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果两个 [AddressFamily](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-addressfamily) 对象相等，则返回 true；否则，返回 false。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的AddressFamily实例
        let inet1 = AddressFamily.INET
        let inet2 = AddressFamily.INET
        let unix = AddressFamily.UNIX
        let custom1 = AddressFamily("CUSTOM", 100u16)
        let custom2 = AddressFamily("CUSTOM", 100u16)
    
        // 使用==操作符比较它们
        let inetEqual = inet1 == inet2
        let unixEqual = unix == unix
        let customEqual = custom1 == custom2
        let inetUnixEqual = inet1 == unix
    
        println("INET1 == INET2: ${inetEqual}")
        println("UNIX == UNIX: ${unixEqual}")
        println("CUSTOM1 == CUSTOM2: ${customEqual}")
        println("INET == UNIX: ${inetUnixEqual}")
    
        return 0
    }

运行结果：
    
    
    INET1 == INET2: true
    UNIX == UNIX: true
    CUSTOM1 == CUSTOM2: true
    INET == UNIX: false

#### struct OptionLevel
    
    
    public struct OptionLevel {
        public static const ICMP: Int32 = 1
        public static const IP: Int32 = 0
        public static const RAW: Int32 = 255
        public static const SOCKET: Int32
        public static const TCP: Int32 = 6
        public static const UDP: Int32 = 17
    }

功能：提供了常用的套接字选项级别。

#### [h2]static const ICMP
    
    
    public static const ICMP: Int32 = 1

功能：控制 ICMP 协议行为的套接字选项级别。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionLevel.ICMP}")
        return 0
    }

运行结果：
    
    
    toString: 1

#### [h2]static const IP
    
    
    public static const IP: Int32 = 0

功能：控制 IP 协议行为的套接字选项级别。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionLevel.IP}")
        return 0
    }

运行结果：
    
    
    toString: 0

#### [h2]static const RAW
    
    
    public static const RAW: Int32 = 255

功能：控制 RAW 协议行为的套接字选项级别。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionLevel.RAW}")
        return 0
    }

运行结果：
    
    
    toString: 255

#### [h2]static const SOCKET
    
    
    public static const SOCKET: Int32

功能：控制基本套接字行为的套接字选项级别。不同系统下的值分别为：

  * macOS: 0xFFFF
  * Windows: 0xFFFF
  * 其他情况：1



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionLevel.SOCKET}")
        return 0
    }

运行结果：
    
    
    toString: 1

#### [h2]static const TCP
    
    
    public static const TCP: Int32 = 6

功能：控制 TCP 协议行为的套接字选项级别。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionLevel.TCP}")
        return 0
    }

运行结果：
    
    
    toString: 6

#### [h2]static const UDP
    
    
    public static const UDP: Int32 = 17

功能：控制 UDP 协议行为的套接字选项级别。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionLevel.UDP}")
        return 0
    }

运行结果：
    
    
    toString: 17

#### struct OptionName
    
    
    public struct OptionName {
        public static const IP_HDRINCL: Int32
        public static const IP_TOS: Int32
        public static const IP_TTL: Int32
        public static const SO_ACCEPTCONN: Int32
        public static const SO_BROADCAST: Int32
        public static const SO_DEBUG: Int32 = 0x0001
        public static const SO_DONTROUTE: Int32
        public static const SO_ERROR: Int32
        public static const SO_KEEPALIVE: Int32
        public static const SO_LINGER: Int32
        public static const SO_OOBINLINE: Int32
        public static const SO_RCVBUF: Int32
        public static const SO_RCVTIMEO: Int32
        public static const SO_REUSEADDR: Int32
        public static const SO_SNDBUF: Int32
        public static const SO_SNDTIMEO: Int32
        public static const TCP_KEEPCNT: Int32
        public static const TCP_KEEPIDLE: Int32
        public static const TCP_KEEPINTVL: Int32
        public static const TCP_NODELAY: Int32 = 0x0001
    }

功能：提供了常用的套接字选项。

#### [h2]static const IP_HDRINCL
    
    
    public static const IP_HDRINCL: Int32

功能：用于在发送数据包时指定 IP 头部是否由应用程序提供的套接字选项。不同系统下的值分别为：

  * macOS: 0x0002
  * Windows: 0x0002
  * 其他情况：0x0003



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.IP_HDRINCL}")
        return 0
    }

运行结果：
    
    
    toString: 3

#### [h2]static const IP_TOS
    
    
    public static const IP_TOS: Int32

功能：用于指定数据包服务类型和优先级的套接字选项。不同系统下的值分别为：

  * macOS: 0x0003
  * Windows: 0x0003
  * 其他情况：0x0001



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.IP_TOS}")
        return 0
    }

运行结果：
    
    
    toString: 1

#### [h2]static const IP_TTL
    
    
    public static const IP_TTL: Int32

功能：用于限制IP数据包在网络中传输最大跳数的套接字选项。不同系统下的值分别为：

  * macOS: 0x0004
  * Windows: 0x0004
  * 其他情况：0x0002



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.IP_TTL}")
        return 0
    }

运行结果：
    
    
    toString: 2

#### [h2]static const SO_ACCEPTCONN
    
    
    public static const SO_ACCEPTCONN: Int32

功能：用于查询套接字是否处于监听状态的套接字选项。不同系统下的值分别为：

  * macOS: 0x0002
  * Windows: 0x0002
  * 其他情况：0x001E



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.SO_ACCEPTCONN}")
        return 0
    }

运行结果：
    
    
    toString: 30

#### [h2]static const SO_BROADCAST
    
    
    public static const SO_BROADCAST: Int32

功能：用于设置套接字是否允许发送广播消息的套接字选项。不同系统下的值分别为：

  * macOS: 0x0020
  * Windows: 0x0020
  * 其他情况：0x0006



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.SO_BROADCAST}")
        return 0
    }

运行结果：
    
    
    toString: 6

#### [h2]static const SO_DEBUG
    
    
    public static const SO_DEBUG: Int32 = 0x0001

功能：用于启用或禁用调试模式的套接字选项。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.SO_DEBUG}")
        return 0
    }

运行结果：
    
    
    toString: 1

#### [h2]static const SO_DONTROUTE
    
    
    public static const SO_DONTROUTE: Int32

功能：用于在连接套接字时，不路由套接字数据包的套接字选项。不同系统下的值分别为：

  * macOS: 0x0010
  * Windows: 0x0010
  * 其他情况：0x0005



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.SO_DONTROUTE}")
        return 0
    }

运行结果：
    
    
    toString: 5

#### [h2]static const SO_ERROR
    
    
    public static const SO_ERROR: Int32

功能：获取和清除套接字上错误状态的套接字选项。不同系统下的值分别为：

  * macOS: 0x1007
  * Windows: 0x1007
  * 其他情况：0x0004



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.SO_ERROR}")
        return 0
    }

运行结果：
    
    
    toString: 4

#### [h2]static const SO_KEEPALIVE
    
    
    public static const SO_KEEPALIVE: Int32

功能：用于检测 TCP 连接是否仍然处于活动状态的套接字选项。不同系统下的值分别为：

  * macOS: 0x0008
  * Windows: 0x0008
  * 其他情况：0x0009



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.SO_KEEPALIVE}")
        return 0
    }

运行结果：
    
    
    toString: 9

#### [h2]static const SO_LINGER
    
    
    public static const SO_LINGER: Int32

功能：用于设置套接字关闭时行为的套接字选项。不同系统下的值分别为：

  * macOS: 0x0080
  * Windows: 0x0080
  * 其他情况：0x000D



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.SO_LINGER}")
        return 0
    }

运行结果：
    
    
    toString: 13

#### [h2]static const SO_OOBINLINE
    
    
    public static const SO_OOBINLINE: Int32

功能：用于控制接收带外数据方式的套接字选项。不同系统下的值分别为：

  * macOS: 0x0100
  * Windows: 0x0100
  * 其他情况：0x000A



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.SO_OOBINLINE}")
        return 0
    }

运行结果：
    
    
    toString: 10

#### [h2]static const SO_RCVBUF
    
    
    public static const SO_RCVBUF: Int32

功能：用于设置套接字接收缓冲区大小的套接字选项。不同系统下的值分别为：

  * macOS: 0x1002
  * Windows: 0x1002
  * 其他情况：0x0008



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.SO_RCVBUF}")
        return 0
    }

运行结果：
    
    
    toString: 8

#### [h2]static const SO_RCVTIMEO
    
    
    public static const SO_RCVTIMEO: Int32

功能：用于设置套接字接收数据超时时间的套接字选项。不同系统下的值分别为：

  * macOS: 0x1006
  * Windows: 0x1006
  * 其他情况：0x0014



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.SO_RCVTIMEO}")
        return 0
    }

运行结果：
    
    
    toString: 20

#### [h2]static const SO_REUSEADDR
    
    
    public static const SO_REUSEADDR: Int32

功能：用于在套接字关闭后立即释放其绑定端口，以便其他套接字可以立即绑定该端口的套接字选项。不同系统下的值分别为：

  * macOS: 0x0004
  * Windows: 0x0004
  * 其他情况：0x0002



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.SO_REUSEADDR}")
        return 0
    }

运行结果：
    
    
    toString: 2

#### [h2]static const SO_SNDBUF
    
    
    public static const SO_SNDBUF: Int32

功能：用于设置套接字发送缓冲区大小的套接字选项。不同系统下的值分别为：

  * macOS: 0x1001
  * Windows: 0x1001
  * 其他情况：0x0007



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.SO_SNDBUF}")
        return 0
    }

运行结果：
    
    
    toString: 7

#### [h2]static const SO_SNDTIMEO
    
    
    public static const SO_SNDTIMEO: Int32

功能：用于设置套接字发送数据超时时间的套接字选项。不同系统下的值分别为：

  * macOS: 0x1005
  * Windows: 0x1005
  * 其他情况：0x0015



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.SO_SNDTIMEO}")
        return 0
    }

运行结果：
    
    
    toString: 21

#### [h2]static const TCP_KEEPCNT
    
    
    public static const TCP_KEEPCNT: Int32

功能：用于控制 TCP 连接中发送保持存活探测报文次数的套接字选项。不同系统下的值分别为：

  * macOS: 0x0102
  * Windows: 0x0010
  * 其他情况：0x0006



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.TCP_KEEPCNT}")
        return 0
    }

运行结果：
    
    
    toString: 6

#### [h2]static const TCP_KEEPIDLE
    
    
    public static const TCP_KEEPIDLE: Int32

功能：用于设置在没有收到对端确认的情况下，TCP 保持连接最大次数的套接字选项。不同系统下的值分别为：

  * macOS: 0x0010
  * Windows: 0x0003
  * 其他情况：0x0004



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.TCP_KEEPIDLE}")
        return 0
    }

运行结果：
    
    
    toString: 4

#### [h2]static const TCP_KEEPINTVL
    
    
    public static const TCP_KEEPINTVL: Int32

功能：用于设置 TCP 保持连接时发送探测报文时间间隔的套接字选项。不同系统下的值分别为：

  * macOS: 0x0101
  * Windows: 0x0011
  * 其他情况：0x0005



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.TCP_KEEPINTVL}")
        return 0
    }

运行结果：
    
    
    toString: 5

#### [h2]static const TCP_NODELAY
    
    
    public static const TCP_NODELAY: Int32 = 0x0001

功能：用于控制 TCP 协议延迟行为的套接字选项。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${OptionName.TCP_NODELAY}")
        return 0
    }

运行结果：
    
    
    toString: 1

#### struct ProtocolType
    
    
    public struct ProtocolType <: Equatable<ProtocolType> & ToString & Hashable {
        public static let ICMP: ProtocolType = ProtocolType(1)
        public static let IPV4: ProtocolType = ProtocolType(4)
        public static let IPV6: ProtocolType = ProtocolType(41)
        public static let RAW: ProtocolType = ProtocolType(255)
        public static let TCP: ProtocolType = ProtocolType(6)
        public static let UDP: ProtocolType = ProtocolType(17)
        public static let Unspecified: ProtocolType = ProtocolType(0)
        public init(protocol: Int32)
    }

功能：提供了常用的套接字协议，以及通过指定 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值来构建套接字协议的功能。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<ProtocolType>
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)



#### [h2]static let ICMP
    
    
    public static let ICMP: ProtocolType = ProtocolType(1)

功能：指定协议类型为 ICMP。

类型：[ProtocolType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-protocoltype)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${ProtocolType.ICMP}")
        return 0
    }

运行结果：
    
    
    toString: ICMP

#### [h2]static let IPV4
    
    
    public static let IPV4: ProtocolType = ProtocolType(4)

功能：指定协议类型为 IPv4 。

类型：[ProtocolType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-protocoltype)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${ProtocolType.IPV4}")
        return 0
    }

运行结果：
    
    
    toString: IPv4

#### [h2]static let IPV6
    
    
    public static let IPV6: ProtocolType = ProtocolType(41)

功能：指定协议类型为 IPv6。

类型：[ProtocolType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-protocoltype)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${ProtocolType.IPV6}")
        return 0
    }

运行结果：
    
    
    toString: IPv6

#### [h2]static let RAW
    
    
    public static let RAW: ProtocolType = ProtocolType(255)

功能：指定协议类型为 RAW。

类型：[ProtocolType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-protocoltype)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${ProtocolType.RAW}")
        return 0
    }

运行结果：
    
    
    toString: RAW

#### [h2]static let TCP
    
    
    public static let TCP: ProtocolType = ProtocolType(6)

功能：指定协议类型为 TCP。

类型：[ProtocolType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-protocoltype)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${ProtocolType.TCP}")
        return 0
    }

运行结果：
    
    
    toString: TCP

#### [h2]static let UDP
    
    
    public static let UDP: ProtocolType = ProtocolType(17)

功能：指定协议类型为 UDP。

类型：[ProtocolType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-protocoltype)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${ProtocolType.UDP}")
        return 0
    }

运行结果：
    
    
    toString: UDP

#### [h2]static let Unspecified
    
    
    public static let Unspecified: ProtocolType = ProtocolType(0)

功能：不指定协议类型。

类型：[ProtocolType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-protocoltype)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${ProtocolType.Unspecified}")
        return 0
    }

运行结果：
    
    
    toString: Unspecified

#### [h2]init(Int32)
    
    
    public init(protocol: Int32)

功能：通过指定套接字协议值创建协议。

参数：

  * protocol: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 套接字协议值。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 使用构造函数创建自定义的ProtocolType实例
        let customProtocol = ProtocolType(100)
    
        // 打印结果
        println("toString: ${customProtocol}")
        println("hashCode: ${customProtocol.hashCode()}")
    
        return 0
    }

运行结果：
    
    
    toString: Protocol(100)
    hashCode: 100

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：返回当前 [ProtocolType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-protocoltype) 实例的哈希值。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 当前 [ProtocolType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-protocoltype) 实例的哈希值。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的ProtocolType实例
        let tcp = ProtocolType.TCP
        let udp = ProtocolType.UDP
        let custom = ProtocolType(100)
    
        // 获取并打印它们的哈希码
        println("TCP hashCode: ${tcp.hashCode()}")
        println("UDP hashCode: ${udp.hashCode()}")
        println("Custom hashCode: ${custom.hashCode()}")
    
        return 0
    }

运行结果：
    
    
    TCP hashCode: 6
    UDP hashCode: 17
    Custom hashCode: 100

#### [h2]func toString()
    
    
    public func toString(): String

功能：返回当前 [ProtocolType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-protocoltype) 实例的字符串表示。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 当前 [ProtocolType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-protocoltype) 实例的字符串表示。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的ProtocolType实例
        let tcp = ProtocolType.TCP
        let udp = ProtocolType.UDP
        let custom = ProtocolType(100)
    
        // 获取并打印它们的字符串表示
        println("TCP toString: ${tcp.toString()}")
        println("UDP toString: ${udp.toString()}")
        println("Custom toString: ${custom.toString()}")
    
        return 0
    }

运行结果：
    
    
    TCP toString: TCP
    UDP toString: UDP
    Custom toString: Protocol(100)

#### [h2]operator func !=(ProtocolType)
    
    
    public operator func !=(r: ProtocolType): Bool

功能：判断两个 [ProtocolType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-protocoltype) 实例是否不等。

参数：

  * r: [ProtocolType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-protocoltype) \- 参与比较的 [ProtocolType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-protocoltype) 实例。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 当二者代表的 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值不等时，返回 true；否则，返回 false。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的ProtocolType实例
        let tcp = ProtocolType.TCP
        let udp = ProtocolType.UDP
        let custom1 = ProtocolType(100)
        let custom2 = ProtocolType(100)
    
        // 使用!=操作符比较它们
        let tcpNotUdp = tcp != udp
        let customNotTcp = custom1 != tcp
        let custom1NotCustom2 = custom1 != custom2
    
        println("TCP != UDP: ${tcpNotUdp}")
        println("Custom != TCP: ${customNotTcp}")
        println("Custom1 != Custom2: ${custom1NotCustom2}")
    
        return 0
    }

运行结果：
    
    
    TCP != UDP: true
    Custom != TCP: true
    Custom1 != Custom2: false

#### [h2]operator func ==(ProtocolType)
    
    
    public operator func ==(r: ProtocolType): Bool

功能：判断两个 [ProtocolType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-protocoltype) 实例是否相等。

参数：

  * r: [ProtocolType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-protocoltype) \- 参与比较的 [ProtocolType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-protocoltype) 实例。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 当二者代表的 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值相等时，返回 true；否则，返回 false。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的ProtocolType实例
        let tcp1 = ProtocolType.TCP
        let tcp2 = ProtocolType.TCP
        let udp = ProtocolType.UDP
        let custom1 = ProtocolType(100)
        let custom2 = ProtocolType(100)
    
        // 使用==操作符比较它们
        let tcp1EqualsTcp2 = tcp1 == tcp2
        let tcpEqualsUdp = tcp1 == udp
        let custom1EqualsCustom2 = custom1 == custom2
    
        println("TCP1 == TCP2: ${tcp1EqualsTcp2}")
        println("TCP == UDP: ${tcpEqualsUdp}")
        println("Custom1 == Custom2: ${custom1EqualsCustom2}")
    
        return 0
    }

运行结果：
    
    
    TCP1 == TCP2: true
    TCP == UDP: false
    Custom1 == Custom2: true

#### struct RawAddress
    
    
    public struct RawAddress {
        public init(addr: Array<Byte>)
    }

功能：提供了 [RawSocket](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_classes#class-rawsocket) 的通信地址创建和获取功能。

#### [h2]prop addr
    
    
    public prop addr: Array<Byte>

功能：获取地址。

类型：[Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)>

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建一个字节数组作为地址
        let addressBytes: Array<Byte> = [192, 168, 1, 1]
    
        // 使用字节数组创建RawAddress实例
        let rawAddress = RawAddress(addressBytes)
    
        // 获取并打印地址
        println("Address bytes: ${rawAddress.addr}")
    
        return 0
    }

运行结果：
    
    
    Address bytes: [192, 168, 1, 1]

#### [h2]init(Array<Byte>)
    
    
    public init(addr: Array<Byte>)

功能：根据字节数组创建地址。

参数：

  * addr: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 存储地址的字节数组。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建一个字节数组作为地址
        let addressBytes: Array<Byte> = [10, 0, 0, 1]
    
        // 使用字节数组创建RawAddress实例
        let rawAddress = RawAddress(addressBytes)
    
        // 打印地址信息
        println("RawAddress created with bytes: ${rawAddress.addr}")
    
        return 0
    }

运行结果：
    
    
    RawAddress created with bytes: [10, 0, 0, 1]

#### struct SocketDomain
    
    
    public struct SocketDomain <: Equatable<SocketDomain> & ToString & Hashable {
        public static let IPV4: SocketDomain = SocketDomain(2)
        public static let IPV6: SocketDomain
        public static let NETLINK: SocketDomain = SocketDomain(16)
        public static let PACKET: SocketDomain = SocketDomain(17)
        public static let UNIX: SocketDomain
        public init(domain: Int32)
    }

功能：提供了常用的套接字通信域，以及通过指定 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值来构建套接字通信域的功能。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<SocketDomain>
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)



#### [h2]static let IPV4
    
    
    public static let IPV4: SocketDomain = SocketDomain(2)

功能：IPv4 通信域。

类型：[SocketDomain](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketdomain)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${SocketDomain.IPV4}")
        println("hashCode: ${SocketDomain.IPV4.hashCode()}")
        return 0
    }

运行结果：
    
    
    toString: IPv4
    hashCode: 2

#### [h2]static let IPV6
    
    
    public static let IPV6: SocketDomain

功能：IPv6 通信域。不同系统下的值分别为：

  * macOS: SocketDomain(30)
  * Windows: SocketDomain(23)
  * 其他情况：SocketDomain(10)



类型：[SocketDomain](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketdomain)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${SocketDomain.IPV6}")
        println("hashCode: ${SocketDomain.IPV6.hashCode()}")
        return 0
    }

运行结果：
    
    
    toString: IPv6
    hashCode: 10

#### [h2]static let NETLINK
    
    
    public static let NETLINK: SocketDomain = SocketDomain(16)

功能：内核和用户空间进程之间通信。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/Nz7sTxlJTK2TZud0xBUd5A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090207Z&HW-CC-Expire=86400&HW-CC-Sign=D53B6E4DD6335E5CC3D786A58CAEBC84072633412202966FCD3E4AF84F3AE65B)

不支持平台：Windows、macOS、iOS。

类型：[SocketDomain](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketdomain)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${SocketDomain.NETLINK}")
        println("hashCode: ${SocketDomain.NETLINK.hashCode()}")
        return 0
    }

运行结果：
    
    
    toString: netlink
    hashCode: 16

#### [h2]static let PACKET
    
    
    public static let PACKET: SocketDomain = SocketDomain(17)

功能：允许用户空间程序直接访问网络数据包。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f3/v3/ASRc6aBuRBi_tA0SGjODSw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090207Z&HW-CC-Expire=86400&HW-CC-Sign=FBBD0CD8816A63F4CE53B3D60FE782E9D8BF02D055E2D06D83372F93E9A07117)

不支持平台：Windows、macOS、iOS。

类型：[SocketDomain](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketdomain)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${SocketDomain.PACKET}")
        println("hashCode: ${SocketDomain.PACKET.hashCode()}")
        return 0
    }

运行结果：
    
    
    toString: packet
    hashCode: 17

#### [h2]static let UNIX
    
    
    public static let UNIX: SocketDomain

功能：本机通信。不同系统下的值分别为：

  * Windows: SocketDomain(0)
  * 其他情况：SocketDomain(1)



类型：[SocketDomain](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketdomain)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("toString: ${SocketDomain.UNIX}")
        println("hashCode: ${SocketDomain.UNIX.hashCode()}")
        return 0
    }

运行结果：
    
    
    toString: unix
    hashCode: 1

#### [h2]init(Int32)
    
    
    public init(domain: Int32)

功能：根据指定通信域值创建套接字通信域。

参数：

  * domain: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 通信域值。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 使用构造函数创建自定义的SocketDomain实例
        let customDomain = SocketDomain(100)
    
        // 打印结果
        println("toString: ${customDomain}")
        println("hashCode: ${customDomain.hashCode()}")
    
        return 0
    }

运行结果：
    
    
    toString: Domain(100)
    hashCode: 100

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：返回当前 [SocketDomain](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketdomain) 实例的哈希值。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 当前 [SocketDomain](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketdomain) 实例的哈希值。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的SocketDomain实例
        let ipv4 = SocketDomain.IPV4
        let ipv6 = SocketDomain.IPV6
        let unix = SocketDomain.UNIX
        let custom = SocketDomain(100)
    
        // 获取并打印它们的哈希码
        println("IPv4 hashCode: ${ipv4.hashCode()}")
        println("IPv6 hashCode: ${ipv6.hashCode()}")
        println("UNIX hashCode: ${unix.hashCode()}")
        println("Custom hashCode: ${custom.hashCode()}")
    
        return 0
    }

运行结果：
    
    
    IPv4 hashCode: 2
    IPv6 hashCode: 10
    UNIX hashCode: 1
    Custom hashCode: 100

#### [h2]func toString()
    
    
    public func toString(): String

功能：返回当前 [SocketDomain](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketdomain) 实例的字符串表示。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 当前 [SocketDomain](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketdomain) 实例的字符串表示。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的SocketDomain实例
        let ipv4 = SocketDomain.IPV4
        let ipv6 = SocketDomain.IPV6
        let unix = SocketDomain.UNIX
        let custom = SocketDomain(100)
    
        // 获取并打印它们的字符串表示
        println("IPv4 toString: ${ipv4.toString()}")
        println("IPv6 toString: ${ipv6.toString()}")
        println("UNIX toString: ${unix.toString()}")
        println("Custom toString: ${custom.toString()}")
    
        return 0
    }

运行结果：
    
    
    IPv4 toString: IPv4
    IPv6 toString: IPv6
    UNIX toString: unix
    Custom toString: Domain(100)

#### [h2]operator func !=(SocketDomain)
    
    
    public operator func !=(r: SocketDomain): Bool

功能：比较两个 [SocketDomain](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketdomain) 实例是否不等。

参数：

  * r: [SocketDomain](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketdomain) \- 参与比较的 [SocketDomain](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketdomain) 实例。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 当二者代表的 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值不等时，返回 true；否则，返回 false。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的SocketDomain实例
        let ipv4 = SocketDomain.IPV4
        let ipv6 = SocketDomain.IPV6
        let unix = SocketDomain.UNIX
        let custom1 = SocketDomain(100)
        let custom2 = SocketDomain(100)
    
        // 使用!=操作符比较它们
        let ipv4NotIpv6 = ipv4 != ipv6
        let unixNotIpv4 = unix != ipv4
        let custom1NotCustom2 = custom1 != custom2
    
        println("IPv4 != IPv6: ${ipv4NotIpv6}")
        println("UNIX != IPv4: ${unixNotIpv4}")
        println("Custom1 != Custom2: ${custom1NotCustom2}")
    
        return 0
    }

运行结果：
    
    
    IPv4 != IPv6: true
    UNIX != IPv4: true
    Custom1 != Custom2: false

#### [h2]operator func ==(SocketDomain)
    
    
    public operator func ==(r: SocketDomain): Bool

功能：比较两个 [SocketDomain](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketdomain) 实例是否相等。

参数：

  * r: [SocketDomain](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketdomain) \- 参与比较的 [SocketDomain](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketdomain) 实例。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 当二者代表的 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值相等时，返回 true；否则，返回 false。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的SocketDomain实例
        let ipv4a = SocketDomain.IPV4
        let ipv4b = SocketDomain.IPV4
        let ipv6 = SocketDomain.IPV6
        let custom1 = SocketDomain(100)
        let custom2 = SocketDomain(100)
    
        // 使用==操作符比较它们
        let ipv4aEqualsIpv4b = ipv4a == ipv4b
        let ipv4EqualsIpv6 = ipv4a == ipv6
        let custom1EqualsCustom2 = custom1 == custom2
    
        println("IPv4a == IPv4b: ${ipv4aEqualsIpv4b}")
        println("IPv4 == IPv6: ${ipv4EqualsIpv6}")
        println("Custom1 == Custom2: ${custom1EqualsCustom2}")
    
        return 0
    }

运行结果：
    
    
    IPv4a == IPv4b: true
    IPv4 == IPv6: false
    Custom1 == Custom2: true

#### struct SocketKeepAliveConfig
    
    
    public struct SocketKeepAliveConfig <: ToString & Equatable<SocketKeepAliveConfig> {
        public let count: UInt32
        public let idle: Duration
        public let interval: Duration
        public init(idle!: Duration = Duration.second * 45, interval!: Duration = Duration.second * 5, count!: UInt32 = 5)
    }

功能：TCP KeepAlive 属性配置。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)
  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<SocketKeepAliveConfig>



#### [h2]let count
    
    
    public let count: UInt32

功能：查询连接是否失效的报文个数。

类型：[UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建一个SocketKeepAliveConfig实例
        let config = SocketKeepAliveConfig()
    
        // 获取并打印count属性
        println("Count: ${config.count}")
    
        return 0
    }

运行结果：
    
    
    Count: 5

#### [h2]let idle
    
    
    public let idle: Duration

功能：允许连接空闲的时长，空闲超时将关闭连接。

类型：[Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建一个SocketKeepAliveConfig实例
        let config = SocketKeepAliveConfig()
    
        // 获取并打印idle属性
        println("Idle duration: ${config.idle}")
    
        return 0
    }

运行结果：
    
    
    Idle duration: 45s

#### [h2]let interval
    
    
    public let interval: Duration

功能：保活报文发送周期。

类型：[Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建一个SocketKeepAliveConfig实例
        let config = SocketKeepAliveConfig()
    
        // 获取并打印interval属性
        println("Interval duration: ${config.interval}")
    
        return 0
    }

运行结果：
    
    
    Interval duration: 5s

#### [h2]init(Duration, Duration, UInt32)
    
    
    public init(idle!: Duration = Duration.second * 45, interval!: Duration = Duration.second * 5, count!: UInt32 = 5)

功能：初始化 [SocketKeepAliveConfig](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketkeepaliveconfig) 实例对象。

参数：

  * idle!: [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 允许空闲的时长，默认 45 秒。
  * interval!: [Duration](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-duration) \- 保活报文发送周期，默认 45 秒。
  * count!: [UInt32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#uint32) \- 查询连接是否失效的报文个数， 默认 5 个。



异常：

  * [IllegalArgumentException](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_exceptions#class-illegalargumentexception) \- 当配置为空闲状态或设置间隔小于 0 时，抛出异常。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 使用自定义参数创建SocketKeepAliveConfig实例
        let config = SocketKeepAliveConfig(
            idle: Duration.second * 30,
            interval: Duration.second * 10,
            count: 3
        )
    
        // 打印配置信息
        println("Idle: ${config.idle}")
        println("Interval: ${config.interval}")
        println("Count: ${config.count}")
    
        return 0
    }

运行结果：
    
    
    Idle: 30s
    Interval: 10s
    Count: 3

#### [h2]func toString()
    
    
    public override func toString(): String

功能：将 TCP KeepAlive 属性配置转换为字符串。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 转换后的字符串。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建一个SocketKeepAliveConfig实例
        let config = SocketKeepAliveConfig(
            idle: Duration.second * 30,
            interval: Duration.second * 10,
            count: 3
        )
    
        // 获取并打印toString结果
        println("ToString: ${config.toString()}")
    
        return 0
    }

运行结果：
    
    
    ToString: SocketKeepAliveConfig(idle: 30s, interval: 10s, count: 3)

#### [h2]operator func !=(SocketKeepAliveConfig)
    
    
    public override operator func !=(other: SocketKeepAliveConfig): Bool

功能：判断两个 [SocketKeepAliveConfig](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketkeepaliveconfig) 实例是否不等。

参数：

  * other: [SocketKeepAliveConfig](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketkeepaliveconfig) \- 参与比较的 [SocketKeepAliveConfig](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketkeepaliveconfig) 实例。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果不等，则返回 true；否则，返回 false。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建两个相同的SocketKeepAliveConfig实例
        let config1 = SocketKeepAliveConfig(
            idle: Duration.second * 30,
            interval: Duration.second * 10,
            count: 3
        )
    
        let config2 = SocketKeepAliveConfig(
            idle: Duration.second * 30,
            interval: Duration.second * 10,
            count: 3
        )
    
        // 创建一个不同的SocketKeepAliveConfig实例
        let config3 = SocketKeepAliveConfig(
            idle: Duration.second * 60,
            interval: Duration.second * 10,
            count: 3
        )
    
        // 使用!=操作符比较它们
        let notEqual1 = config1 != config2
        let notEqual2 = config1 != config3
    
        println("Config1 != Config2: ${notEqual1}")
        println("Config1 != Config3: ${notEqual2}")
    
        return 0
    }

运行结果：
    
    
    Config1 != Config2: false
    Config1 != Config3: true

#### [h2]operator func ==(SocketKeepAliveConfig)
    
    
    public override operator func ==(other: SocketKeepAliveConfig): Bool

功能：判断两个 [SocketKeepAliveConfig](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketkeepaliveconfig) 实例是否相等。

参数：

  * other: [SocketKeepAliveConfig](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketkeepaliveconfig) \- 参与比较的 [SocketKeepAliveConfig](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketkeepaliveconfig) 实例。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果相等，则返回 true；否则，返回 false。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建两个相同的SocketKeepAliveConfig实例
        let config1 = SocketKeepAliveConfig(
            idle: Duration.second * 30,
            interval: Duration.second * 10,
            count: 3
        )
    
        let config2 = SocketKeepAliveConfig(
            idle: Duration.second * 30,
            interval: Duration.second * 10,
            count: 3
        )
    
        // 创建一个不同的SocketKeepAliveConfig实例
        let config3 = SocketKeepAliveConfig(
            idle: Duration.second * 60,
            interval: Duration.second * 10,
            count: 3
        )
    
        // 使用==操作符比较它们
        let equal1 = config1 == config2
        let equal2 = config1 == config3
    
        println("Config1 == Config2: ${equal1}")
        println("Config1 == Config3: ${equal2}")
    
        return 0
    }

运行结果：
    
    
    Config1 == Config2: true
    Config1 == Config3: false

#### struct SocketOptions
    
    
    public struct SocketOptions {
        public static const IPPROTO_TCP: Int32 = 6
        public static const IPPROTO_UDP: Int32 = 17
        public static const SOL_SOCKET: Int32
        public static const SO_BINDTODEVICE: Int32
        public static const SO_KEEPALIVE: Int32
        public static const SO_LINGER: Int32
        public static const SO_RCVBUF: Int32
        public static const SO_REUSEADDR: Int32
        public static const SO_REUSEPORT: Int32
        public static const SO_SNDBUF: Int32
        public static const TCP_NODELAY: Int32 = 0x0001
        public static const TCP_QUICKACK: Int32
    }

功能：[SocketOptions](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-socketoptions) 存储了设置套接字选项的一些参数常量方便后续调用。

#### [h2]static const IPPROTO_TCP (deprecated)
    
    
    public static const IPPROTO_TCP: Int32 = 6

功能：常数，用于将套接字选项的 level 层级设为 IPPROTO_TCP。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/xB7jEIYzQqOvFNOxLIeqkA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090207Z&HW-CC-Expire=86400&HW-CC-Sign=2D6810999EAF01C1DB5B99D6DB6A0B8F979D87BE90334DD0C0C125611DB601D5)

未来版本即将废弃，使用 OptionLevel.TCP 替代。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("IPPROTO_TCP: ${SocketOptions.IPPROTO_TCP}")
    
        return 0
    }

运行结果：
    
    
    IPPROTO_TCP: 6

#### [h2]static const IPPROTO_UDP (deprecated)
    
    
    public static const IPPROTO_UDP: Int32 = 17

功能：常数，用于将套接字选项的 level 层级设为 IPPROTO_UDP。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d/v3/BSq6xEM6SpCkWeNhl5952A/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090207Z&HW-CC-Expire=86400&HW-CC-Sign=A40B773756EC02A524FE8DE45F4B6F88EAC3D155BE285BCB5BDB7493B6BD4F98)

未来版本即将废弃，使用 OptionLevel.UDP 替代。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("IPPROTO_UDP: ${SocketOptions.IPPROTO_UDP}")
    
        return 0
    }

运行结果：
    
    
    IPPROTO_UDP: 17

#### [h2]static const SO_BINDTODEVICE
    
    
    public static const SO_BINDTODEVICE: Int32

功能：常数，用于将套接字选项的 optname 设为 SO_BINDTODEVICE。不同系统下的值分别为：

  * macOS: 0xFFFF
  * Windows: 0xFFFF
  * 其他情况：0x0019



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("SO_BINDTODEVICE: ${SocketOptions.SO_BINDTODEVICE}")
    
        return 0
    }

运行结果：
    
    
    SO_BINDTODEVICE: 25

#### [h2]static const SO_KEEPALIVE
    
    
    public static const SO_KEEPALIVE: Int32

功能：常数，用于将套接字选项的 optname 设为 SO_KEEPALIVE。不同系统下的值分别为：

  * macOS: 0x0008
  * Windows: 0x0008
  * 其他情况：0x0009



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("SO_KEEPALIVE: ${SocketOptions.SO_KEEPALIVE}")
    
        return 0
    }

运行结果：
    
    
    SO_KEEPALIVE: 9

#### [h2]static const SO_LINGER
    
    
    public static const SO_LINGER: Int32

功能：常数，用于将套接字选项的 optname 设为 SO_LINGER。不同系统下的值分别为：

  * macOS: 0x0080
  * Windows: 0x0080
  * 其他情况：0x000D



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("SO_LINGER: ${SocketOptions.SO_LINGER}")
    
        return 0
    }

运行结果：
    
    
    SO_LINGER: 13

#### [h2]static const SO_RCVBUF
    
    
    public static const SO_RCVBUF: Int32

功能：常数，用于将套接字选项的 optname 设为 SO_RCVBUF。不同系统下的值分别为：

  * macOS: 0x1002
  * Windows: 0x1002
  * 其他情况：0x0008



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("SO_RCVBUF: ${SocketOptions.SO_RCVBUF}")
    
        return 0
    }

运行结果：
    
    
    SO_RCVBUF: 8

#### [h2]static const SO_REUSEADDR
    
    
    public static const SO_REUSEADDR: Int32

功能：常数，用于将套接字选项的 optname 设为 SO_REUSEADDR。不同系统下的值分别为：

  * macOS: 0x0004
  * Windows: 0x0004
  * 其他情况：0x0002



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("SO_REUSEADDR: ${SocketOptions.SO_REUSEADDR}")
    
        return 0
    }

运行结果：
    
    
    SO_REUSEADDR: 2

#### [h2]static const SO_REUSEPORT
    
    
    public static const SO_REUSEPORT: Int32

功能：常数，用于将套接字选项的 optname 设为 SO_REUSEPORT。不同系统下的值分别为：

  * macOS: 0x0200
  * Windows: 0xFFFF
  * 其他情况：0x000F



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("SO_REUSEPORT: ${SocketOptions.SO_REUSEPORT}")
    
        return 0
    }

运行结果：
    
    
    SO_REUSEPORT: 15

#### [h2]static const SO_SNDBUF
    
    
    public static const SO_SNDBUF: Int32

功能：常数，用于将套接字选项的 optname 设为 SO_SNDBUF。不同系统下的值分别为：

  * macOS: 0x1001
  * Windows: 0x1001
  * 其他情况：0x0007



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("SO_SNDBUF: ${SocketOptions.SO_SNDBUF}")
    
        return 0
    }

运行结果：
    
    
    SO_SNDBUF: 7

#### [h2]static const SOL_SOCKET (deprecated)
    
    
    public static const SOL_SOCKET: Int32

功能：常数，用于将套接字选项的 level 层级设为 SOL_SOCKET。不同系统下的值分别为：

  * macOS: 0xFFFF
  * Windows: 0xFFFF
  * 其他情况：1



![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bb/v3/tp43Ku1jRt6gX0UCN8aQmw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090207Z&HW-CC-Expire=86400&HW-CC-Sign=E241BC8B6A73E49A83C5A56E8DBD3202656ED93F33BE0875855FF497C5D3F872)

未来版本即将废弃，使用 OptionLevel.SOCKET 替代。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("SOL_SOCKET: ${SocketOptions.SOL_SOCKET}")
    
        return 0
    }

运行结果：
    
    
    SOL_SOCKET: 1

#### [h2]static const TCP_NODELAY
    
    
    public static const TCP_NODELAY: Int32 = 0x0001

功能：常数，用于将套接字选项的 optname 设为 TCP_NODELAY。

类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("TCP_NODELAY: ${SocketOptions.TCP_NODELAY}")
    
        return 0
    }

运行结果：
    
    
    TCP_NODELAY: 1

#### [h2]static const TCP_QUICKACK
    
    
    public static const TCP_QUICKACK: Int32

功能：常数，用于将套接字选项的 optname 设为 TCP_QUICKACK。不同系统下的值分别为：

  * macOS: 0xFFFF
  * Windows: 0xFFFF
  * 其他情况：0x000C



类型：[Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("TCP_QUICKACK: ${SocketOptions.TCP_QUICKACK}")
    
        return 0
    }

运行结果：
    
    
    TCP_QUICKACK: 12

#### struct SocketType
    
    
    public struct SocketType <: Equatable<SocketType> & ToString & Hashable {
        public static let DATAGRAM: SocketType = SocketType(2)
        public static let RAW: SocketType = SocketType(3)
        public static let SEQPACKET: SocketType = SocketType(5)
        public static let STREAM: SocketType = SocketType(1)
        public init(`type`: Int32)
    }

功能：提供了常用的套接字类型，以及通过指定 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值来构建套接字类型的功能。

父类型：

  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<SocketType>
  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)
  * [Hashable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-hashable)



#### [h2]static let DATAGRAM
    
    
    public static let DATAGRAM: SocketType = SocketType(2)

功能：数据报套接字类型。

类型：[SocketType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-sockettype)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("DATAGRAM: ${SocketType.DATAGRAM}")
        println("DATAGRAM hashCode: ${SocketType.DATAGRAM.hashCode()}")
    
        return 0
    }

运行结果：
    
    
    DATAGRAM: DATAGRAM
    DATAGRAM hashCode: 2

#### [h2]static let RAW
    
    
    public static let RAW: SocketType = SocketType(3)

功能：原始套接字类型。

类型：[SocketType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-sockettype)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("RAW: ${SocketType.RAW}")
        println("RAW hashCode: ${SocketType.RAW.hashCode()}")
    
        return 0
    }

运行结果：
    
    
    RAW: RAW
    RAW hashCode: 3

#### [h2]static let SEQPACKET
    
    
    public static let SEQPACKET: SocketType = SocketType(5)

功能：有序数据包套接字类型。

类型：[SocketType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-sockettype)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("SEQPACKET: ${SocketType.SEQPACKET}")
        println("SEQPACKET hashCode: ${SocketType.SEQPACKET.hashCode()}")
    
        return 0
    }

运行结果：
    
    
    SEQPACKET: SEQPACKET
    SEQPACKET hashCode: 5

#### [h2]static let STREAM
    
    
    public static let STREAM: SocketType = SocketType(1)

功能：流式套接字类型。

类型：[SocketType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-sockettype)

示例：
    
    
    import std.net.*
    
    main(): Int64 {
        println("STREAM: ${SocketType.STREAM}")
        println("STREAM hashCode: ${SocketType.STREAM.hashCode()}")
    
        return 0
    }

运行结果：
    
    
    STREAM: STREAM
    STREAM hashCode: 1

#### [h2]init(Int32)
    
    
    public init(`type`: Int32)

功能：通过指定套接字类型值创建套接字类型。

参数：

  * `type`: [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) \- 套接字类型值。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 使用构造函数创建自定义的SocketType实例
        let customSocketType = SocketType(100)
    
        // 打印结果
        println("Custom SocketType: ${customSocketType}")
        println("Custom SocketType hashCode: ${customSocketType.hashCode()}")
    
        return 0
    }

运行结果：
    
    
    Custom SocketType: Type(100)
    Custom SocketType hashCode: 100

#### [h2]func hashCode()
    
    
    public func hashCode(): Int64

功能：返回当前 [SocketType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-sockettype) 实例的哈希值。

返回值：

  * [Int64](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int64) \- 当前 [SocketType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-sockettype) 实例的哈希值。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的SocketType实例
        let datagram = SocketType.DATAGRAM
        let stream = SocketType.STREAM
        let custom = SocketType(100)
    
        // 获取并打印它们的哈希码
        println("DATAGRAM hashCode: ${datagram.hashCode()}")
        println("STREAM hashCode: ${stream.hashCode()}")
        println("Custom hashCode: ${custom.hashCode()}")
    
        return 0
    }

运行结果：
    
    
    DATAGRAM hashCode: 2
    STREAM hashCode: 1
    Custom hashCode: 100

#### [h2]func toString()
    
    
    public func toString(): String

功能：返回当前 [SocketType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-sockettype) 实例的字符串表示。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 当前 [SocketType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-sockettype) 实例的字符串表示。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的SocketType实例
        let datagram = SocketType.DATAGRAM
        let stream = SocketType.STREAM
        let custom = SocketType(100)
    
        // 获取并打印它们的字符串表示
        println("DATAGRAM toString: ${datagram.toString()}")
        println("STREAM toString: ${stream.toString()}")
        println("Custom toString: ${custom.toString()}")
    
        return 0
    }

运行结果：
    
    
    DATAGRAM toString: DATAGRAM
    STREAM toString: STREAM
    Custom toString: Type(100)

#### [h2]operator func !=(SocketType)
    
    
    public operator func !=(r: SocketType): Bool

功能：判断两个 [SocketType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-sockettype) 实例是否不等。

参数：

  * r: [SocketType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-sockettype) \- 参与比较的 [SocketType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-sockettype) 实例。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 当二者代表的 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值不等时，返回 true；否则，返回 false。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的SocketType实例
        let datagram = SocketType.DATAGRAM
        let stream = SocketType.STREAM
        let custom1 = SocketType(100)
        let custom2 = SocketType(100)
    
        // 使用!=操作符比较它们
        let datagramNotStream = datagram != stream
        let custom1NotCustom2 = custom1 != custom2
    
        println("DATAGRAM != STREAM: ${datagramNotStream}")
        println("Custom1 != Custom2: ${custom1NotCustom2}")
    
        return 0
    }

运行结果：
    
    
    DATAGRAM != STREAM: true
    Custom1 != Custom2: false

#### [h2]operator func ==(SocketType)
    
    
    public operator func ==(r: SocketType): Bool

功能：判断两个 [SocketType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-sockettype) 实例是否相等。

参数：

  * r: [SocketType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-sockettype) \- 参与比较的 [SocketType](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_structs#struct-sockettype) 实例。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 当二者代表的 [Int32](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#int32) 值相等时，返回 true；否则，返回 false。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的SocketType实例
        let datagram1 = SocketType.DATAGRAM
        let datagram2 = SocketType.DATAGRAM
        let stream = SocketType.STREAM
        let custom1 = SocketType(100)
        let custom2 = SocketType(100)
    
        // 使用==操作符比较它们
        let datagram1EqualsDatagram2 = datagram1 == datagram2
        let datagramEqualsStream = datagram1 == stream
        let custom1EqualsCustom2 = custom1 == custom2
    
        println("DATAGRAM1 == DATAGRAM2: ${datagram1EqualsDatagram2}")
        println("DATAGRAM == STREAM: ${datagramEqualsStream}")
        println("Custom1 == Custom2: ${custom1EqualsCustom2}")
    
        return 0
    }

运行结果：
    
    
    DATAGRAM1 == DATAGRAM2: true
    DATAGRAM == STREAM: false
    Custom1 == Custom2: true
