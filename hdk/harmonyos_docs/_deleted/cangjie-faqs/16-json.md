---
name: cangjie-faqs/16-json
title: 仓颉语言提供json编解码能力吗
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/16-json
nodePath: FAQ / 标准库 / 仓颉语言提供json编解码能力吗
---

# 仓颉语言提供json编解码能力吗

仓颉语言官方扩展库中stdx.encoding.json.stream包提供仓颉对象和json数据流之间的互相转换。

以下示例展示了如何使用stdx.encoding.json.stream包实现仓颉实例的json格式编解码：
    
    
    import stdx.encoding.json.stream.*
    import std.io.ByteBuffer
    import kit.PerformanceAnalysisKit.Hilog
    
    class Person <: JsonSerializable & JsonDeserializable<Person> & ToString {
        var id: Array<Int64>
        var name: String
        var age: Int64
    
        public init(id!: Array<Int64> = [], name!: String = "", age!: Int64 = 0) {
            this.id = id
            this.name = name
            this.age = age
        }
    
        public func toJson(w: JsonWriter): Unit {
            w.startObject()
            w.writeName("id").writeValue<Array<Int64>>(this.id)
            w.writeName("name").writeValue<String>(this.name)
            w.writeName("age").writeValue<Int64>(this.age)
            w.endObject()
        }
    
        public static func fromJson(r: JsonReader): Person {
            let result: Person = Person()
            while (let Some(v) <- r.peek()) {
                match (v) {
                    case BeginObject =>
                        r.startObject()
                        while (r.peek() != EndObject) {
                            let n = r.readName()
                            match (n) {
                                case "id" => result.id = r.readValue<Array<Int64>>()
                                case "name" => result.name = r.readValue<String>()
                                case "age" => result.age = r.readValue<Int64>()
                                case _ => ()
                            }
                        }
                        r.endObject()
                        break
                    case _ => throw Exception()
                }
            }
            return result
        }
    
        public func toString(): String {
            "id: ${id}, name: ${name}, age: ${age}"
        }
    }
    
    public func FAQ35Test(): Unit {
        let personCangjie = Person(id: [0, 0, 1], name: "Cangjie", age: 15)
        let stream = ByteBuffer()
        let write = JsonWriter(stream)
        write.writeValue<Person>(personCangjie)
        write.flush()
        Hilog.info(0, "Cangjie Test", String.fromUtf8(stream.bytes()))
        let reader = JsonReader(stream)
        let studentCangjieDeserialized = Person.fromJson(reader)
        Hilog.info(0, "Cangjie Test", studentCangjieDeserialized.toString())
    }

调用FAQ35Test，日志输出结果：
    
    
    {"id":[0,0,1],"name":"Cangjie","age":15}
    id: [0, 0, 1], name: Cangjie, age: 15

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/L3y7KPEDSPGx5cbcQqJllw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260804T120359Z&HW-CC-Expire=86400&HW-CC-Sign=65DBA6E79257C8935412BE247D07F37B22BA7D83966511226CE8B3B8399ED1BB)

  1. 获取stdx版本，请参见：[Cangjie/cangjie_stdx](https://gitcode.com/Cangjie/cangjie_stdx)。
  2. 此外，仓颉三方库[cangjieJSON](https://gitcode.com/Cangjie-TPC/cangjieJSON)提供了json相关宏，可以自动生成json编解码代码，实现快速编程。


