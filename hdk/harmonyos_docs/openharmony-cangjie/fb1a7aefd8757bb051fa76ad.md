---
name: document/cn/openharmony-cangjie/byte_array_stream
title: ByteArrayStream 示例
uri: https://developer.huawei.com/consumer/cn/doc/openharmony-cangjie/byte_array_stream
source: portal
---

ByteArrayStream 示例 下面是 ByteArrayStream 对流进行写入数据，读取数据等操作的示例。
    
    import std.io.*
    
    main(): Unit {
        let arr1 = b"test case"
        let byteArrayStream = ByteArrayStream()
    
        /* 将 arr1 中的数据写入到流中 */
        byteArrayStream.write(arr1)
    
        /* 读取 4 个字节的数据到 arr2 中 */
        let arr2 = Array<Byte>(4, item: 0)
        byteArrayStream.read(arr2)
        println(String.fromUtf8(arr2))
    
        /* 将流的索引指向起点 */
        byteArrayStream.seek(Begin(0))
    
        /* 读取流中全部数据 */
        let arr3 = byteArrayStream.readToEnd()
        println(String.fromUtf8(arr3))
    
        /* 将流的索引指向字母 c */
        byteArrayStream.seek(End(-4))
    
        /* 读取流中剩余数据 */
        let str = byteArrayStream.readString()
        println(str)
    }

运行结果
    
    test
    test case
    case
