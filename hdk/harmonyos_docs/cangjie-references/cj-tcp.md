---
name: cangjie-references/cj-tcp
title: TCP 使用示例
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-tcp
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.net / 示例教程 / TCP 使用示例
---

# TCP 使用示例
    
    
    import std.net.*
    import std.sync.*
    
    let SERVER_PORT: UInt16 = 33333
    let syncCounter = SyncCounter(1)
    
    func runTcpServer() {
        try (serverSocket = TcpServerSocket(bindAt: SERVER_PORT)) {
            serverSocket.bind()
            syncCounter.dec()
    
            try (client = serverSocket.accept()) {
                let buf = Array<Byte>(10, repeat: 0)
                let count = client.read(buf)
    
                // Server read 3 bytes: [1, 2, 3, 0, 0, 0, 0, 0, 0, 0]
                println("Server read ${count} bytes: ${buf}")
            }
        }
    }
    
    main(): Int64 {
        let fut = spawn {
            runTcpServer()
        }
        syncCounter.waitUntilZero()
    
        try (socket = TcpSocket("127.0.0.1", SERVER_PORT)) {
            socket.connect()
            socket.write([1, 2, 3])
        }
    
        fut.get()
    
        return 0
    }

运行结果：
    
    
    Server read 3 bytes: [1, 2, 3, 0, 0, 0, 0, 0, 0, 0]
