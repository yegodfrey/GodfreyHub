---
name: document/cn/HMS-References/activityrecords_list-0000001050114862
title: activityRecords: list
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/activityrecords_list-0000001050114862
source: portal
---

# activityRecords: list  
  
查询用户已创建的活动记录列表。

#### 请求

#### [h2]HTTP请求
    
    
    GET 
    https://health-api.cloud.huawei.com/hihealth/v1/activityRecords?startTime=***&endTime=***&includeDeleted=***&cursor=***

#### [h2]请求参数

参数名称 | 参数类型 | 参数描述 | 可选/必选 | 约束说明  
---|---|---|---|---  
startTime | string | 开始时间，RFC3339 格式 | 可选 | 最大长度是24，需符合UTC格式，例如：2019-11-18T19:34:25.000Z。 startTime时间早于endTime时间。 startTime/endTime同时为非空字符串时生效，否则不生效  
endTime | string | 结束时间，RFC3339 格式 | 可选 | 最大长度是24，需符合UTC格式，例如：2019-11-18T19:34:25.000Z。 StartTime时间早于endTime时间。  
includeDeleted | boolean | 是否返回已删除的活动记录： true：返回 false：不返回 | 可选 |     
cursor | string | 分页继续查询的标识，填入上一个请求的cursor值即可 | 可选 | 长度范围：1~1000  
  
#### [h2]请求体

无

#### 响应

参数名称 | 参数类型 | 参数描述 | 可选/必选  
---|---|---|---  
activityRecord | list<ActivityRecord> | 开始/结束时间范围内的活动记录列表 | 可选  
deletedActivityRecord | list<ActivityRecord> | 已删除的活动记录列表，仅当includeDeleted为true时生效 | 可选  
cursor | string | 下次查询的分页标识 | 可选  
hasMoreData | boolean | 标识服务端是否有更多数据 | 可选  
  
其中ActivityRecord的结构参考[activityRecords: update](https://developer.huawei.com/consumer/cn/doc/HMS-References/activityrecords_update-0000001050116813)中请求体。

注意：

  1. startTime/endTime同时为非空字符串时，查询startTime-endTime内的活动记录列表，此时cursor配置不生效。 
  2. 不满足1时，如果cursor为非空字符串，按照cursor查询活动记录列表。 
  3. 1和2都不满足时，返回当前时间前30天的活动记录列表。 



#### 返回码

成功：http 200

失败：其他

#### 示例

#### [h2]请求
    
    
    GET
    https://health-api.cloud.huawei.com/hihealth/v1/activityRecords?startTime=2019-10-18T19:34:25Z&endTime=2019-12-25T19:34:25Z&cursor=&includeDeleted=false
    Content-Type: application/json
    Authorization: Bearer ***

#### [h2]响应
    
    
    HTTP 200 OK
    {
        "activityRecord": [
            {
                "id": "145789654314",
                "name": "app9session",
                "desc": "test",
                "startTime": "1574686124535",
                "endTime": "1574746124535",
                "modifyTime": "1577268222013",
                "appInfo": {
                    "appName": "123",
                    "appPackageName": "com.huawei.demo",
                    "appVersion": "2",
                    "desc": "",
                    "clientId": "101222525"
                },
                "activityType": 89,
                "activeTime": "1800000"
            },
            {
                "id": "1457896543155",
                "name": "app9session",
                "desc": "test",
                "startTime": "1574686124535",
                "endTime": "1574746124535",
                "modifyTime": "1577328560018",
                "appInfo": {
                    "appName": "123",
                    "appPackageName": "com.huawei.demo",
                    "appVersion": "2",
                    "desc": "",
                    "clientId": "101222525"
                },
                "activityType": 89,
                "activeTime": "1800000"
            }
        ],
        "deletedActivityRecord": []
    }
