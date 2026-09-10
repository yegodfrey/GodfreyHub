---
name: document/cn/hiai-References/createimageconfigtensor-0000001184086998
title: CreateImageConfigTensor
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/createimageconfigtensor-0000001184086998
---

# CreateImageConfigTensor

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150640.43885944507435717022712931753830:50001231000000:2800:370D27953673E89F739B60CFC90B4EE370939B5532F6AC65B5F39EF516507EBC.png)  
此接口从DDK 5.0.1.0版本起废弃。  

#### 接口定义

```
std::shared_ptr<INDTensorBuffer> CreateImageConfigTensor(T& para);
```

#### 功能介绍

使用DDK模型管家V2接口动态AIPP模型时，除了创建image_tensor还要创建动态AIPP参数的输入，使用此接口创建的动态AIPP参数返回一个std::shared_ptr\<INDTensorBuffer\>类型的对象，作为模型的input tensor。  

#### 参数

|名称|类型|描述|
|:-------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
|T\& para|[CropPara](https://developer.huawei.com/consumer/cn/doc/hiai-References/croppara-0000001229873707)、[ResizePara](https://developer.huawei.com/consumer/cn/doc/hiai-References/resizepara-0000001184594060)、[ChannelSwapPara](https://developer.huawei.com/consumer/cn/doc/hiai-References/channelswappara-0000001184753984)、[CscPara](https://developer.huawei.com/consumer/cn/doc/hiai-References/cscpara-0000001229793647)、[DtcPara](https://developer.huawei.com/consumer/cn/doc/hiai-References/dtcpara-0000001229675199)、[RotatePara](https://developer.huawei.com/consumer/cn/doc/hiai-References/rotatepara-0000001229595155)、[PadPara](https://developer.huawei.com/consumer/cn/doc/hiai-References/padpara-0000001184275534)|用户创建好的一个结构体对象。|

#### 返回

|类型|描述|
|:---------------------------------|:---------------------|
|std::shared_ptr\<INDTensorBuffer\>|* 不为空：重建成功。 * 为空：创建失败。|

