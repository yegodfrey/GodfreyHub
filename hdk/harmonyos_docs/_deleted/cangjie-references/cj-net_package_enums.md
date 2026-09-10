---
name: cangjie-references/cj-net_package_enums
title: 枚举
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_enums
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.net / 枚举
---

# 枚举

#### enum SocketNet
    
    
    public enum SocketNet <: ToString & Equatable<SocketNet> {
        | TCP
        | UDP
        | UNIX
    }

功能：传输层协议类型。

父类型：

  * [ToString](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-tostring)
  * [Equatable](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_interfaces#interface-equatablet)<SocketNet>



#### [h2]TCP
    
    
    TCP

功能：代表 TCP 协议。

#### [h2]UDP
    
    
    UDP

功能：代表 UDP 协议。

#### [h2]UNIX
    
    
    UNIX

功能：代表 UNIX 协议。

#### [h2]func toString()
    
    
    public func toString(): String

功能：将枚举值转换为字符串。

返回值：

  * [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 转换后的字符串。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的SocketNet枚举值
        let tcp = SocketNet.TCP
        let udp = SocketNet.UDP
        let unix = SocketNet.UNIX
    
        // 使用toString()方法并打印结果
        println("TCP toString: ${tcp.toString()}")
        println("UDP toString: ${udp.toString()}")
        println("UNIX toString: ${unix.toString()}")
    
        return 0
    }

运行结果：
    
    
    TCP toString: tcp
    UDP toString: udp
    UNIX toString: domain

#### [h2]operator func !=(SocketNet)
    
    
    public operator func !=(other: SocketNet): Bool

功能：判断两个 [SocketNet](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_enums#enum-socketnet) 是否不相等。

参数：

  * other: [SocketNet](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_enums#enum-socketnet) \- 传入的 [SocketNet](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_enums#enum-socketnet)。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果不相等，则返回 true；否则，返回 false。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的SocketNet枚举值
        let tcp = SocketNet.TCP
        let udp = SocketNet.UDP
        let unix = SocketNet.UNIX
    
        // 使用!=操作符比较它们
        let tcpNotUdp = tcp != udp
        let udpNotUnix = udp != unix
        let unixNotTcp = unix != tcp
    
        println("TCP != UDP: ${tcpNotUdp}")
        println("UDP != UNIX: ${udpNotUnix}")
        println("UNIX != TCP: ${unixNotTcp}")
    
        // 比较相同的枚举值
        let tcpNotTcp = tcp != tcp
        println("TCP != TCP: ${tcpNotTcp}")
    
        return 0
    }

运行结果：
    
    
    TCP != UDP: true
    UDP != UNIX: true
    UNIX != TCP: true
    TCP != TCP: false

#### [h2]operator func ==(SocketNet)
    
    
    public operator func ==(other: SocketNet): Bool

功能：判断两个 [SocketNet](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_enums#enum-socketnet) 是否相等。

参数：

  * other: [SocketNet](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_enums#enum-socketnet) \- 的 [SocketNet](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-net_package_enums#enum-socketnet)。



返回值：

  * [Bool](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_intrinsics#bool) \- 如果相等，则返回 true；否则，返回 false。



示例：
    
    
    import std.net.*
    
    main(): Int64 {
        // 创建不同的SocketNet枚举值
        let tcp = SocketNet.TCP
        let udp = SocketNet.UDP
        let unix = SocketNet.UNIX
    
        // 使用==操作符比较它们
        let tcpEqualsUdp = tcp == udp
        let udpEqualsUnix = udp == unix
        let unixEqualsTcp = unix == tcp
    
        println("TCP == UDP: ${tcpEqualsUdp}")
        println("UDP == UNIX: ${udpEqualsUnix}")
        println("UNIX == TCP: ${unixEqualsTcp}")
    
        // 比较相同的枚举值
        let tcpEqualsTcp = tcp == tcp
        let udpEqualsUdp = udp == udp
        let unixEqualsUnix = unix == unix
    
        println("TCP == TCP: ${tcpEqualsTcp}")
        println("UDP == UDP: ${udpEqualsUdp}")
        println("UNIX == UNIX: ${unixEqualsUnix}")
    
        return 0
    }

运行结果：
    
    
    TCP == UDP: false
    UDP == UNIX: false
    UNIX == TCP: false
    TCP == TCP: true
    UDP == UDP: true
    UNIX == UNIX: true
