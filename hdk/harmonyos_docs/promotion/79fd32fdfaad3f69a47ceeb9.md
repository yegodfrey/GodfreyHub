---
name: document/cn/promotion/ads_api29-0000001058436248
title: 编辑任务时间段
uri: https://developer.huawei.com/consumer/cn/doc/promotion/ads_api29-0000001058436248
---

# 编辑任务时间段

通过此接口可以编辑任务时间段

请求地址

https://ads.cloud.huawei.com/openapi/v2/promotion/adgroup/period/update

请求方法

POST

请求参数  

|-----------------------|--------|----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|参数名称|类型|是否必选|描述|
|advertiser_id|long|否|广告主ID，当登录授权的华为账号为如下场景时此字段必填： 1）授权账号关联的是经理账户； 2）授权账号关联的是服务商账户； 3）授权账号关联了多个子客账户。|
|adgroup_ids|long\[\]|是|任务ID数组, 最大长度是50|
|time_period_type <br />|string|是|时间段类型，可以从三种类型中根据自己需要选择一个。 time_period为空时，时间段类型不得为TIME_PERIOD_DAY_SPECIFIC或TIME_PERIOD_HOUR_SPECIFIC 详见[【时间段类型】](https://developer.huawei.com/consumer/cn/doc/promotion/ads_api73-0000001058884698#section7362176515)|
|time_period|string|否|regexp="\^\[0-1\]\*$"; time_period_type为TIME_PERIOD_DAY_SPECIFIC、TIME_PERIOD_HOUR_SPECIFIC时有值。 按照特定时间段投放时，01010100010010......表示指定特殊时段，半小时为粒度，用0、1标识是否选中，1为选中，0为未选中。一天24小时，即每天24\*2=48位，共7天，即共48\*7=336位，并且每天时间要相同。|

请求示例

=========================================================================================================

POST openapi/v2/promotion/adgroup/period/update HTTP/1.1

Accept:application/json

Content-Type:application/json

Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

<br />

```
{
"adgroup_ids":[45000786],
"time_period_type":"TIME_PERIOD_ALL"
}
```

=========================================================================================================

响应字段  

|-------|-----------|----|-------|
|参数名称|类型|是否必选|描述|
|code|string|是|返回码|
|message|string|否|返回描述|
|data|Struct1\[\]|否|批量更新返回体|

<br />

data(Struct1)定义  

|---------------|-----------|----|---------|
|参数名称|类型|是否必选|描述|
|error_info_list|Struct2\[\]|是|编辑失败的任务列表|

<br />

error_info_list(Struct2)定义  

|-------|-------|----|-----|
|参数名称|类型|是否必选|描述|
|id|long|是|错误ID|
|code|integer|是|错误结果码|
|message|string|否|错误描述|

应答示例

=======================================================================================================

HTTPS/1.1 200 OK

```
{
"code":"200"
}
```

========================================================================================================  
