---
name: document/cn/hiai-References/savetoexternalbuffer-0000001139069067
title: SaveToExternalBuffer
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/savetoexternalbuffer-0000001139069067
---

# SaveToExternalBuffer

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150636.51263959003368372576054032567172:50001231000000:2800:E261A24E775FBC75DF6844B9FB75CC20FED2BA9B70173EEB2AB93D8308E63D23.png)  
此接口从DDK 5.0.1.0版本起废弃。  

#### 接口定义

```
virtual Status SaveToExternalBuffer(std::shared_ptr<IBuffer>& buffer, size_t& realSize) const = 0;
```

#### 功能介绍

保存模型到指定的buffer地址，内存由创建者释放。  

#### 参数

|名称|类型|描述|
|:-------|:------------------------------------------------------------------------------------------------------------------------------|:----------------|
|buffer|std::shared_ptr\<[IBuffer](https://developer.huawei.com/consumer/cn/doc/hiai-References/createlocalbuffer-0000001139126323)\>\&|用户指定的保存模型的buffer。|
|realSize|size_t\&|模型真实大小，单位：bytes。|

#### 返回

|类型|描述|
|:-----|:-------------------------|
|Status|* SUCCESS：成功。 * Others：失败。|

