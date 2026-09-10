---
name: cangjie-references/cj-udp
title: UDP 使用示例
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-udp
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.net / 示例教程 / UDP 使用示例
---

# UDP 使用示例
    
    
    import std.net.*
    import std.sync.*
    
    let SERVER_PORT: UInt16 = 33333
    let barrier = Barrier(2)
    
    func runUdpServer() {
        try (serverSocket = UdpSocket(bindAt: SERVER_PORT)) {
            serverSocket.bind()
            barrier.wait()
    
            let buf = Array<Byte>(3, repeat: 0)
    
            let (clientAddr, count) = serverSocket.receiveFrom(buf)
            let sender = (clientAddr as IPSocketAddress)?.address.toString() ?? ""
    
            // Server received 3 bytes: [1, 2, 3] from 127.0.0.1
            println("Server received ${count} bytes: ${buf} from ${sender}")
        }
    }
    
    main(): Int64 {
        let fut = spawn {
            runUdpServer()
        }
        barrier.wait()
    
        try (udpSocket = UdpSocket(bindAt: 0)) { // random port
            udpSocket.sendTimeout = Duration.second * 2
            udpSocket.bind()
            udpSocket.sendTo(
                IPSocketAddress("127.0.0.1", SERVER_PORT),
                [1, 2, 3]
            )
        }
    
        fut.get()
    
        return 0
    }

运行结果：
    
    
    Server received 3 bytes: [1, 2, 3] from 127.0.0.1
