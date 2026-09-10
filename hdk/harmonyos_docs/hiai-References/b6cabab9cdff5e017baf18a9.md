---
name: document/cn/hiai-References/cannkit-getname-0000002158596265
title: GetName
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-getname-0000002158596265
---

# GetName

#### 函数功能

获取算子名称。  

#### 函数原型

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150658.30845093701728822818770849439011:50001231000000:2800:63EE66D4D2D0D8DB01781410CDDA6B6BBCD2A264F162956C0438DB39F8764F32.png)  
数据类型为string的接口后续版本会废弃，建议使用数据类型为非string的接口。

```
std::string GetName() const;
graphStatus GetName(AscendString &name) const;
```

#### 参数说明

|参数名|输入/输出|描述|
|:---|:----|:----|
|name|输出|算子名称。|

#### 返回值

|类型|描述|
|:----------|:---------------------------------|
|graphStatus|GRAPH_FAILED：失败。 GRAPH_SUCCESS：成功。|

#### 异常处理

无  

#### 约束说明

无  
