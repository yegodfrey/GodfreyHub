---
name: document/cn/doc-references/js-apis-fa-calls-pa-result-0000000000617997
title: JS端返回结果格式以及常见错误码
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/js-apis-fa-calls-pa-result-0000000000617997
source: portal
---

# JS端返回结果格式以及常见错误码

#### JS端返回结果/上报事件格式

**表1** 结果 | 格式： | 样例 | 备注  
---|---|---|---  
成功结果 | string | { "code":0, "data": { "abilityResult":3072 } } | 成功响应结果为原始字符串格式，通道不做处理，透传到JS端，对于复杂类型，可以将结果序列化为JSON字符串格式进行传输，如样例。 成功响应在Promise对象的resolve回调中返回。 成功响应的处理方式可参考[计算服务-FA JavaScript端](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fa-calls-pa-examples-0000000000618000#ZH-CN_TOPIC_0000001127284832__li1438701393720)。  
一般事件 | { "code": 0, "data": Object, } | { "code":0, "data":100 } | Event一般事件上报为JSON字符串格式，包含业务码(code)和事件信息(data)。 在subscribeAbilityEvent方法注册的回调函数中获取该事件结果。 一般事件的处理方式可参考[计算服务-FA JavaScript端](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fa-calls-pa-examples-0000000000618000#ZH-CN_TOPIC_0000001127284832__li1438701393720)。  
失败结果/异常事件 | { "code":Number, "data":Object } | { "code":52, "data":"Internal ability not register." } | 失败响应在Promise对象中返回，错误码参见：常见错误码。 Event异常事件在subscribeAbilityEvent方法注册的回调函数中获取。 失败响应处理方式可参考[计算服务-FA JavaScript端](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fa-calls-pa-examples-0000000000618000#ZH-CN_TOPIC_0000001127284832__li1438701393720)和[订阅及取消订阅服务-FA JavaScript端](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fa-calls-pa-examples-0000000000618000#ZH-CN_TOPIC_0000001127284832__li614614541402)章节。  
  
#### 常见错误码

**表2** 错误码 | 含义 | 处理建议  
---|---|---  
0 | 成功 | -  
2001 | 一般错误 | FA调用PA一般错误，请根据JS返回的错误信息，分析失败原因，或通过日志进一步查看详细原因。  
2002 | 携带参数非法 | 携带参数非法，请参见[FeatureAbility模块(JS端SDK接口)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fa-calls-pa-featureability-0000000000617992)对应接口，检查JS携带的必填参数是否完整，以及其类型是否正确。若检查无误，请通过日志进一步查看详细原因。  
2003 | 连接PA失败 | 连接PA失败，请按以下步骤排查原因：
    1. 请先确认使用的Ability类型是否为Ability，使用示例参见：[PA端（Ability方式）](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fa-calls-pa-examples-0000000000618000#ZH-CN_TOPIC_0000001127284832__li16236172420374)。
    2. 检查确认JS携带的bundleName和abilityName是否和PA相同。
    3. 检查PA的配置是否正确。
    4. 根据JS返回的错误信息，分析失败原因，或通过日志进一步查看详细原因。  
2004 | Internal Ability未注册 | Internal Ability未注册，请按以下步骤排查原因：
    1. 请先确认使用的Ability类型是否为Internal Ability，使用示例参见：[PA端（Internal Ability方式）](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fa-calls-pa-examples-0000000000618000#ZH-CN_TOPIC_0000001127284832__li137466553377)。
    2. 检查确认JS携带的bundleName和abilityName是否和注册的Internal Ability相同。
    3. 根据JS返回的错误信息，分析失败原因，或通过日志进一步查看详细原因。  
2005 | FA与PA连接断开 | FA与PA的连接已断开，可能是由于PA端产生了异常，请根据JS返回的错误信息，分析失败原因，或通过日志进一步查看详细原因。  
2006 | 调用PA服务，PA返回失败 | 调用PA服务，PA侧返回失败，请根据JS返回的错误信息，分析失败原因，或通过日志进一步查看详细原因。  
2007 | 订阅PA服务，PA返回失败 | 订阅PA服务，PA侧返回失败，请根据JS返回的错误信息，分析失败原因，或通过日志进一步查看详细原因。  
2008 | 取消订阅PA服务，PA返回失败 | 取消订阅PA服务，PA侧返回失败，请根据JS返回的错误信息，分析失败原因，或通过日志进一步查看详细原因。  
2009 | 解析PA发送的JSON消息异常 | PA发送的JSON字符串格式异常，请根据JS返回的错误信息检查消息格式是否正确，或通过日志进一步查看详细原因。  
2010 | 远端异常捕获 | 调用PA服务，PA端抛出异常，请根据JS返回的异常信息，分析原因，或通过日志进一步查看详细原因。
