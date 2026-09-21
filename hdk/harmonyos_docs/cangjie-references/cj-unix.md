---
name: cangjie-references/cj-unix
title: UNIX 使用示例
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-unix
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.net / 示例教程 / UNIX 使用示例
---

# UNIX 使用示例
    
    
    import std.net.*
    import std.sync.*
    import std.fs.*
    
    let SOCKET_PATH = "/tmp/tmpsock"
    let barrier = Barrier(2)
    
    func runUnixServer() {
        try (serverSocket = UnixServerSocket(bindAt: SOCKET_PATH)) {
            serverSocket.bind()
            barrier.wait()
    
            try (client = serverSocket.accept()) {
                client.write("hello".toArray())
            }
        }
    }
    
    main(): Int64 {
        removeIfExists(SOCKET_PATH)
        let fut = spawn {
            runUnixServer()
        }
        barrier.wait()
        try (socket = UnixSocket(SOCKET_PATH)) {
            socket.connect()
    
            let buf = Array<Byte>(5, repeat: 0)
            socket.read(buf)
    
            println(String.fromUtf8(buf)) // hello
        }
        fut.get()
        removeIfExists(SOCKET_PATH)
        return 0
    }

运行结果：
    
    
    hello
