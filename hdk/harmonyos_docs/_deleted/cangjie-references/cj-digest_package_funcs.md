---
name: cangjie-references/cj-digest_package_funcs
title: 函数
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-digest_package_funcs
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.crypto.digest / 函数
---

# 函数

#### func digest<T>(T, Array<Byte>) where T <: Digest
    
    
    public func digest<T>(algorithm: T, data: Array<Byte>): Array<Byte> where T <: Digest

功能：提供 digest 泛型函数，实现用指定的摘要算法进行摘要运算。

参数：

  * algorithm: T - 具体的摘要算法。
  * data: [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 待进行摘要运算的数据。



返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 摘要运算结果。



示例：
    
    
    import std.crypto.digest.*
    
    main() {
        let data: Array<Byte> = [1, 2, 3, 4, 5]
        let mydigest = MyDigest()
        let digestBytes = digest<MyDigest>(mydigest, data)
        println(digestBytes)
    }
    
    // 自定义 Digest
    class MyDigest <: Digest {
        public prop size: Int64 {
            get() {
                0
            }
        }
        public prop blockSize: Int64 {
            get() {
                0
            }
        }
        public prop algorithm: String {
            get() {
                ""
            }
        }
        public func write(buffer: Array<Byte>): Unit {
            println("buffer = ${buffer}")
        }
        public func finish(to!: Array<Byte>): Unit {
            println("to = ${to}")
        }
        public func finish(): Array<Byte> {
            [3, 2, 1]
        }
        public func reset(): Unit {}
    }

运行结果：
    
    
    buffer = [1, 2, 3, 4, 5]
    [3, 2, 1]

#### func digest<T>(T, InputStream) where T <: Digest
    
    
    public func digest<T>(algorithm: T, input: InputStream): Array<Byte> where T <: Digest

功能：提供 digest 泛型函数，实现用指定的摘要算法对 InputStream 里的数据进行摘要运算。当 digest 函数调用 input.read() 读取数据返回值为 0 时，digest 函数会认为 InputStream 已经读取完毕，不会继续读取。

参数：

  * algorithm: T - 具体的摘要算法。
  * input: [InputStream](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-io_package_interfaces#interface-inputstream) \- 待进行摘要运算的 InputStream。



返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 摘要运算结果。



示例：
    
    
    import std.crypto.digest.*
    import std.io.*
    
    main() {
        /* 将原始的字节数组 data 转换为一个输入流 BufferedInputStream */
        let data: Array<Byte> = [1, 2, 3, 4, 5]
        let byteBuffer = ByteBuffer(data)
        let bufferedInputStream = BufferedInputStream(byteBuffer)
        let mydigest = MyDigest()
        let digestBytes = digest<MyDigest>(mydigest, bufferedInputStream)
        println(digestBytes)
    }
    
    // 自定义 Digest
    class MyDigest <: Digest {
        public prop size: Int64 {
            get() {
                0
            }
        }
        public prop blockSize: Int64 {
            get() {
                2
            }
        }
        public prop algorithm: String {
            get() {
                ""
            }
        }
        public func write(buffer: Array<Byte>): Unit {
            println("buffer = ${buffer}")
        }
        public func finish(to!: Array<Byte>): Unit {
            println("to = ${to}")
        }
        public func finish(): Array<Byte> {
            [3, 2, 1]
        }
        public func reset(): Unit {}
    }

运行结果：
    
    
    buffer = [1, 2]
    buffer = [3, 4]
    buffer = [5]
    [3, 2, 1]

#### func digest<T>(T, String) where T <: Digest (deprecated)
    
    
    public func digest<T>(algorithm: T, data: String): Array<Byte> where T <: Digest

功能：提供 digest 泛型函数，实现用指定的摘要算法进行摘要运算。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ee/v3/SkPCOR4OSGWN5hD8ddkvIQ/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111703Z&HW-CC-Expire=86400&HW-CC-Sign=8D3F4083D58557374EF0A1FBFF4640E393F0028D0B36ABBDDA77C66EB205CBD6)

未来版本即将废弃，可使用 [digest<T>(T, Array<Byte>) where T <: Digest](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-digest_package_funcs#func-digesttt-arraybyte-where-t--digest) 替代。

参数：

  * algorithm: T - 具体的摘要算法。
  * data: [String](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-string) \- 待进行摘要运算的数据。



返回值：

  * [Array](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_structs#struct-arrayt)<[Byte](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-core_package_types#type-byte)> \- 摘要运算结果。



示例：
    
    
    import std.crypto.digest.*
    
    main() {
        // 创建一些测试数据
        let data = "Hello, World!"
    
        // 创建一个自定义的摘要算法实例
        let mydigest = MyDigest()
    
        // 使用digest函数处理字符串数据
        let digestBytes = digest<MyDigest>(mydigest, data)
    
        println("Input string: '${data}'")
        println("Digest result: ${digestBytes}")
    }
    
    // 自定义 Digest 算法
    class MyDigest <: Digest {
        public prop size: Int64 {
            get() {
                3
            }
        }
        public prop blockSize: Int64 {
            get() {
                1
            }
        }
        public prop algorithm: String {
            get() {
                "MyDigest"
            }
        }
        public func write(buffer: Array<Byte>): Unit {
            println("Processing buffer with ${buffer.size} bytes")
        }
        public func finish(to!: Array<Byte>): Unit {
            to[0] = 1
            to[1] = 2
            to[2] = 3
        }
        public func finish(): Array<Byte> {
            [1, 2, 3]
        }
        public func reset(): Unit {}
    }

运行结果：
    
    
    Processing buffer with 13 bytes
    Input string: 'Hello, World!'
    Digest result: [1, 2, 3]
