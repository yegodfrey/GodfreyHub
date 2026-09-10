---
name: document/cn/HMSCore-References/webapi-error-code-0000001050163432
title: 错误码
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/webapi-error-code-0000001050163432
---

# 错误码

|状态码|错误码|值|描述|解决方法|是否计费|
|:--|:---------------------------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---|
|200|OK|0|成功。|-|是|
|404|NOT_FOUND|5|请求的URL有问题。|请确认请求的URL与发布的是否一致。|否|
|401|REQUEST_DENIED|6|API密钥或Token非法或者失效。|请参见[FAQ](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050166997#section041110146273)。|否|
|406|INVALID_REQUEST|7|Content Type非法。|当前业务的Swagger JSON定义的范围与请求的类型和要求不一致，请根据业务的要求修改。|否|
|406|INVALID_REQUEST|8|Accept Type非法。|当前业务的Swagger JSON定义的范围与请求的类型和要求不一致，请根据业务的要求修改。|否|
|400|INVALID_REQUEST|105|参数错误。|出现该问题可能是输入的参数与文档不一致，请核对接口文档的入参和约束，进行重试。|否|
|503|UNKNOWN_ERROR|110|服务内部错误。|请选择[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。|否|
|503|UNKNOWN_ERROR|111|服务忙，请求被淘汰。|服务器繁忙，请稍后重试。|否|
|405|REQUEST_DENIED|403|APP ID没有调用权限。|使用Site服务需要在[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)上打开Site Kit权限开关，具体操作步骤请参见[开通服务](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-enabling-service-0000001146598793)。|否|
|401|UNKNOWN_ERROR|010001|鉴权服务异常。|请参见[FAQ](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050166997#section1817194262911)。|否|
|401|REQUEST_DENIED|010002|证书指纹错误。|请参见[FAQ](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050166997#section1817194262911)。|否|
|401|REQUEST_DENIED|010003|缺少接口调用权限。|请参见[FAQ](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050166997#section1817194262911)。|否|
|200|ZERO_RESULTS|010004|查询成功，但是没有找到记录。|查询记录不存在。|是|
|403|REQUEST_DENIED|010005|鉴权失败。|请参见[FAQ](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050166997#section1817194262911)。|否|
|403|OVER_QUERY_LIMIT|010006|计费类API调用受限。|* 企业开发者，请参见[开通付费](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/about-charging-0000001052557393#section1177212364910)升级套餐。 * 个人开发者，请通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)申请配额。|否|
|400|INVALID_REQUEST|010007|地点查询失败。|查询的地点不存在或查询受限，请更换查询地点。|是|
|400|INVALID_REQUEST|010009|不支持跨区进行路径规划。|使用路径规划服务接口时可能出现该问题，起点和终点不支持跨区。|是|
|400|INVALID_REQUEST|010010|参数错误。|出现该问题可能是输入的参数与文档不一致，请核对接口文档的入参和约束，进行重试。|否|
|404|NOT_FOUND|010011|资源没有找到。|请确认请求的URI与发布的是否一致。|是|
|500|UNKNOWN_ERROR|010012|服务器内部错误。|请选择[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。|否|
|401|REQUEST_DENIED|010017|请求签名非法。|* 查看是否手动设置过终端系统时间，如果手动设置过，请调整回来重试。如果没有手动设置过，请选择[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。 * 网络原因导致获取签名失败，请重试。|否|
|503|REQUEST_DENIED|010018|因为服务器繁忙，服务被降级。|服务器繁忙，请稍后重试。|否|
|403|OVER_QUERY_LIMIT|010024|接口已经欠费。|请参见[FAQ](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050166997#section54575281643)。|否|
|403|OVER_QUERY_LIMIT|010027|未订购付费套餐。|请参见[FAQ](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/faq-0000001050166997#section164757516)。|否|
|403|OVER_QUERY_LIMIT|010037|请求的QPS超过配额。|请参见[服务配额](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/service-quota-0000001113463342)QPS限制说明。|否|
|-|NETWORK_ERROR|070003|网络错误。|请检查手机网络是否可以正常访问互联网。|否|
|-|INTERNAL_ERROR|070004|服务内部错误。|请选择[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。|否|
|-|ACCESS_TIMEOUT|070005|网络超时。|请检查手机网络是否可以正常访问互联网，重新进行连接。|否|
|-|BUSINESS_VERIFICATION_FAILED|070006|业务校验失败。|出现该问题可能是输入的参数与文档不一致，请核对接口文档的入参和约束，进行重试。|否|
|-|QUERY_CANCELED|070100|在使用搜索组件时，如果用户点击返回键取消搜索，在[SearchStatus](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-searchstatus-0000001050154777)对象里会返回此错误码。|-|否|

其他错误码请参见[HMS Core SDK框架错误码](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/error-code-0000001050045846)。

若您的问题仍无法解决，请选择[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。
