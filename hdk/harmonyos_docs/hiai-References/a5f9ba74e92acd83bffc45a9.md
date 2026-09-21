---
name: document/cn/hiai-References/savetoexternalbuffer-0000001139069067
title: SaveToExternalBuffer
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/savetoexternalbuffer-0000001139069067
---

# SaveToExternalBuffer

> 说明
>
> 此接口从DDK 5.0.1.0版本起废弃。

## 接口定义

```screen
virtual Status SaveToExternalBuffer(std::shared_ptr<IBuffer>& buffer, size_t& realSize) const = 0;
```

## 功能介绍

保存模型到指定的buffer地址，内存由创建者释放。

## 参数

|名称|类型|描述|
|:-------|:---------------------------------------------------------------------------------------------------------------------------|:----------------|
|buffer|std::shared_ptr<[IBuffer](https://developer.huawei.com/consumer/cn/doc/hiai-References/createlocalbuffer-0000001139126323)>&|用户指定的保存模型的buffer。|
|realSize|size_t&|模型真实大小，单位：bytes。|

## 返回

|类型|描述|
|:-----|:-------------------------|
|Status|* SUCCESS：成功。 * Others：失败。|

