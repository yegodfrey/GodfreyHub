---
name: cangjie-faqs/04-api-http
title: 仓颉如何使用系统HTTP网络请求API
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/04-api-http
nodePath: FAQ / HarmonyOS API / 仓颉如何使用系统HTTP网络请求API
---

# 仓颉如何使用系统HTTP网络请求API

仓颉语言通过kit.NetworkKit提供HTTP网络请求能力。使用createHttp()创建请求对象，通过callback回调处理响应。

#### 基本用法

GET请求示例：
    
    
    import kit.NetworkKit.*
    import kit.PerformanceAnalysisKit.Hilog
    
    public func testHttpRequestGet(): Unit {
        let httpRequest = createHttp()
        let url = "https://developer.huawei.com/consumer/cn/"
    
        httpRequest.request(
            url,
            HttpRequestOptions(method: RequestMethod.Get),
            {
                err, resp =>
                    if (let Some(e) <- err) {
                        Hilog.error(0, "Cangjie Test", "error: ${e.message}")
                    }
                    if (let Some(r) <- resp) {
                        Hilog.info(0, "Cangjie Test", "responseCode: ${r.responseCode}")
                        match (r.result) {
                            case HttpData.StringData(s) => Hilog.info(0, "Cangjie Test", "result: ${s}")
                            case HttpData.ArrayData(arr) => Hilog.info(0, "Cangjie Test", "result: binary data")
                            case _ => Hilog.info(0, "Cangjie Test", "result: unknown type")
                        }
                    }
                    httpRequest.destroy()
            }
        )
    }

调用testHttpRequestGet，日志输出结果：
    
    
    responseCode: 200
    result: binary data

#### POST请求
    
    
    import kit.NetworkKit.*
    import kit.PerformanceAnalysisKit.Hilog
    import std.collection.*
    
    public func testHttpRequestPost(): Unit {
        let httpRequest = createHttp()
        let url = "https://developer.huawei.com/consumer/cn/"
    
        let options = HttpRequestOptions(
            method: RequestMethod.Post,
            extraData: HttpData.StringData("{\"name\":\"Cangjie\"}"),
            header: HashMap<String, String>([("content-type", "application/json")])
        )
    
        httpRequest.request(
            url,
            options,
            {
                err, resp =>
                    if (let Some(e) <- err) {
                        Hilog.error(0, "Cangjie Test", "error: ${e.message}")
                    }
                    if (let Some(r) <- resp) {
                        match (r.result) {
                            case HttpData.StringData(s) => Hilog.info(0, "Cangjie Test", "POST result: ${s}")
                            case HttpData.ArrayData(arr) => Hilog.info(0, "Cangjie Test", "POST result: binary data")
                            case _ => Hilog.info(0, "Cangjie Test", "POST result: unknown type")
                        }
                    }
                    httpRequest.destroy()
            }
        )
    }

调用testHttpRequestPost，日志输出结果：
    
    
    POST result: binary data

#### 销毁请求

请求完成后应调用destroy()释放资源，销毁操作应在回调函数内执行：
    
    
    httpRequest.destroy()

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6f/v3/57bpY4qNTjuFmRTF_Wr3gw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260921T085445Z&HW-CC-Expire=86400&HW-CC-Sign=241C1413FB0F5ECEA84F4FE120C52075676C769A1F8571A0AA166F661FFE1576)

  1. 使用HTTP网络请求须在module.json5中申请ohos.permission.INTERNET权限。
  2. 每个HttpRequest对象对应一个请求任务，不可复用。
  3. 请求完成后须调用destroy()释放资源。



更多HTTP网络请求API的使用方法，详情请参见[kit.NetworkKit.http](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-apis-net-http)。
