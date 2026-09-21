---
name: document/cn/ecosystem-Guides/05_04_03_02_aggregation-0000001090423901
title: 聚合查询数据表
uri: https://developer.huawei.com/consumer/cn/doc/ecosystem-Guides/05_04_03_02_aggregation-0000001090423901
---

# 聚合查询数据表

使用过滤条件查询到数据结果集后，再使用聚合方法筛选出想要的数据。目前支持的聚合方法包括MIN，MAX，AVG，SUM及Group_by。

当使用聚合查询时aggregation_info时，desired_size，sorts，include_fields，exclude_fields四个参数无需设置。

|聚合类型|说明|
|:-------|:----|
|MIN|最小值|
|MAX|最大值|
|AVG|平均值|
|SUM|总和|
|Group_by|按字段分组|
[**表1**聚合类型]

举例：查询如下数据表（Table ID：t_0ee43ca9_nvblz8ww）：

**图1**数据表1   
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240813172631.16884674693363451985430861855617:50001231000000:2800:A594F3C448FA45B53C5808226AC0823AC6FB3713DBC8CD340A51943FFE7C5C50.png?needInitFileName=true?needInitFileName=true "点击放大")

**图2**数据表2   
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240813172631.43913593654491595486254751412544:50001231000000:2800:082B3C47596EABDE9A52E576778E8CEB72582B01FB6F21B532C63BBBB3335E6D.png?needInitFileName=true?needInitFileName=true "点击放大")

样例代码如下：

```codeblock
from hiresearchsdk import BridgeClient
from hiresearchsdk.config import BridgeConfig, HttpClientConfig
from hiresearchsdk.model import AuthRequest
from hiresearchsdk.model.table import SearchTableDataRequest, FilterCondition, \
    FilterOperatorType, FilterLogicType,AggregationInfo, AggregationOperation, AggregationType
# 初始化BridgeConfig类
bridgeconfig = BridgeConfig("<yourPojectCode>", "product")
# 连接超时时间，单位s，不设置则默认30s
connect_timeout = 20
# 等待接口返回超时时间，单位s，不设置则默认30s
read_timeout = 20
# 是否失败重试，默认不重试
retry_on_fail = True
# 初始化HttpClientConfig类
httpconfig = HttpClientConfig(connect_timeout, read_timeout, retry_on_fail)
bridgeclient = BridgeClient(bridgeconfig, httpconfig)
# 获取SDK鉴权
request = AuthRequest("<yourAccessKey>", "<yourSecretKey>")
authResponse = bridgeclient.get_authenticate_provider().auth(request)
accessToken = authResponse.get_accessToken()
accessTokenDurationInMillis = authResponse.get_accessTokenDurationInMillis()
refreshToken =  authResponse.get_refreshToken()
refreshTokenDurationInMillis = authResponse.get_refreshTokenDurationInMillis()
# 所查询数据表的Table ID
table_ID = "t_0ee43ca9_nvblz8ww"
# filters过滤器列表拼接
condition = [FilterCondition("gender", FilterOperatorType.EQUALS, "male")]
# 构造聚合条件,根据province分组，求单个用户每天中"age"参数的最小值
aggregation_info = AggregationInfo(aggregations=[AggregationOperation(field="age", aggregation_type=AggregationType.MIN)], group_by_fields=['province'])
# 构造查询请求
req = SearchTableDataRequest(accessToken, table_ID, filters=condition, aggregation_info=aggregation_info)
rs = list()
# 构造回调函数，聚合查询是返回的totalCnt是无意义的，总条数可根据结果计算
def rows_processor(rows, totalCnt):
    print("len(rows): ",len(rows))
    rs.extend(rows)
# 结果list的大小，即为结果总条数
print("totalCnt: ",len(rs))
# 查询数据结果
bridgeclient.get_bridgedata_provider().query_table_data(req, callback=rows_processor)
```

