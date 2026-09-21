---
name: cangjie-faqs/14-encode-decode
title: 仓颉语言如何实现字符串编解码
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/14-encode-decode
nodePath: FAQ / 标准库 / 仓颉语言如何实现字符串编解码
---

# 仓颉语言如何实现字符串编解码

#### 通过仓颉语言扩展库stdx实现

仓颉语言扩展库stdx中encoding包提供部分字符串编解码能力。

#### [h2]Base64
    
    
    public func FAQ32Test1(): Unit {
        let a = String.fromUtf8(fromBase64String("aGVsbG8gd29ybGQK").getOrThrow({=> Exception("Illegal Base64 string")}))
        Hilog.info(0, "Cangjie Test", a.toString())
        let b = toBase64String(a.toArray())
        Hilog.info(0, "Cangjie Test", b.toString())
    }

调用FAQ32Test1，日志输出结果：
    
    
    hello world
    aGVsbG8gd29ybGQK

#### [h2]Hex
    
    
    public func FAQ32Test2(): Unit {
        let a = fromHexString("FF0000").getOrThrow({=> Exception("Illegal Hex string")})
        Hilog.info(0, "Cangjie Test", a.toString())
        let b = toHexString(a)
        Hilog.info(0, "Cangjie Test", b.toString())
    }

调用FAQ32Test2，日志输出结果：
    
    
    [255, 0, 0]
    ff0000

#### [h2]URL
    
    
    public func FAQ32Test3(): Unit {
        var url = URL.parse("http://www.example.com:80/path%E4%BB%93%E9%A2%89?key=value%E4%BB%93%E9%A2%89#%E4%BD%A0%E5%A5%BD")
        Hilog.info(0, "Cangjie Test", "url.scheme = ${url.scheme}")
        Hilog.info(0, "Cangjie Test", "url.opaque = ${url.opaque}")
        Hilog.info(0, "Cangjie Test", "url.userInfo = ${url.userInfo}")
        Hilog.info(0, "Cangjie Test", "url.rawUserInfo = ${url.rawUserInfo}")
        Hilog.info(0, "Cangjie Test", "url.host = ${url.host}")
        Hilog.info(0, "Cangjie Test", "url.hostName = ${url.hostName}")
        Hilog.info(0, "Cangjie Test", "url.port = ${url.port}")
        Hilog.info(0, "Cangjie Test", "url.path = ${url.path}")
        Hilog.info(0, "Cangjie Test", "url.rawPath = ${url.rawPath}")
        Hilog.info(0, "Cangjie Test", "url.query = ${url.query.getOrThrow()}")
        Hilog.info(0, "Cangjie Test", "url.rawQuery = ${url.rawQuery.getOrThrow()}")
        Hilog.info(0, "Cangjie Test", "url.fragment = ${url.fragment.getOrThrow()}")
        Hilog.info(0, "Cangjie Test", "url.rawfragment = ${url.rawFragment.getOrThrow()}")
        Hilog.info(0, "Cangjie Test", "url = ${url}")
    }

调用FAQ32Test3，日志输出结果：
    
    
    url.scheme = http
    url.opaque =
    url.userInfo =
    url.rawUserInfo =
    url.host = www.example.com:80
    url.hostName = www.example.com
    url.port = 80
    url.path = /path仓颉
    url.rawPath = /path%E4%BB%93%E9%A2%89
    url.query = key=value仓颉
    url.rawQuery = key=value%E4%BB%93%E9%A2%89
    url.fragment = 你好
    url.rawfragment = %E4%BD%A0%E5%A5%BD
    url = http://www.example.com:80/path%E4%BB%93%E9%A2%89?key=value%E4%BB%93%E9%A2%89#%E4%BD%A0%E5%A5%BD

#### 通过三方库charset4cj实现

在社区三方库中，charset4cj提供了字符串编解码能力，详情请参见[项目首页-charset4cj](https://gitcode.com/Cangjie-TPC/charset4cj)。
    
    
    public func FAQ32Test4(): Unit {
        let charset = Charsets.GB18030
        let decoder = charset.newDecoder()
        let src: Array<UInt8> = [0xCB, 0xAE, 0xB5, 0xB7, 0xD1]
        let destStr = decoder.decode(src)
        Hilog.info(0, "Cangjie Test", destStr)
    }

调用FAQ32Test4，日志输出结果：
    
    
    水捣

本文示例涉及到使用仓颉语言扩展库以及三方库，具体使用方法，请参见：

  * 获取stdx版本，请参见：[Cangjie/cangjie_stdx](https://gitcode.com/Cangjie/cangjie_stdx)
  * 仓颉项目如何进行二进制三方库依赖，请参见：[如何使用cjpm以二进制的形式依赖三方库](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/01-cjpm-dependencies-bytecode)
  * 仓颉项目如何进行源码三方库依赖，请参见：[如何使用cjpm以源码的形式依赖三方库](https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/02-cjpm-dependencies-source)


