---
name: document/cn/hiai-References/cannkit-cannkit-sub-0000002123235314
title: Sub
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-cannkit-sub-0000002123235314
---

# Sub

#### 功能说明

按元素求差，计算公式如下，其中PAR表示矢量计算单元一个迭代能够处理的元素个数：

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150702.80238034288587375431724134066139:50001231000000:2800:516D39BE20165E96C17AC128FA93844B107A8E8711DCB5864F8F1B9153C85C74.png "点击放大")  

#### 函数原型

tensor前n个数据计算：

```
template <typename T>
__aicore__ inline void Sub(const LocalTensor<T>& dstLocal, const LocalTensor<T>& src0Local, const LocalTensor<T>& src1Local, const int32_t& calCount)
```

#### 参数说明

|参数名|描述|
|:--|:-------|
|T|操作数数据类型。|
[表1 模板参数说明]

|参数名|输入/输出|描述|
|:------------------|:----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|dstLocal|输出|目的操作数。 类型为[LocalTensor](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-localtensor-0000002123235286)，支持的TPosition为VECIN/VECCALC/VECOUT。 LocalTensor的起始地址需要32字节对齐。 Kirin9020系列处理器支持的数据类型为：half/int16_t/float/int32_t KirinX90系列处理器支持的数据类型为：half/int16_t/float/int32_t|
|src0Local、src1Local|输入|源操作数。 类型为[LocalTensor](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-localtensor-0000002123235286)，支持的TPosition为VECIN/VECCALC/VECOUT。 LocalTensor的起始地址需要32字节对齐。 两个源操作数的数据类型需要与目的操作数保持一致。 Kirin9020系列处理器支持的数据类型为：half/int16_t/float/int32_t KirinX90系列处理器支持的数据类型为：half/int16_t/float/int32_t|
|calCount|输入|输入数据元素个数。|
[表2 参数说明]

#### 返回值

无  

#### 支持的型号

Kirin9020系列处理器

KirinX90系列处理器  

#### 注意事项

操作数地址偏移对齐要求请参见[通用约束](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-general-constraints-0000002158595261)。  

#### 调用示例

本样例中只展示Compute流程中的部分代码。如果开发者需要运行样例代码，请将该代码段拷贝并替换双目指令样例模板[更多样例](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkitvectorcalculation-binocularinstructions-0000002158476925)中的Compute函数即可。  
tensor前n个数据计算样例：

```
AscendC::Sub(dstLocal, src0Local, src1Local, 512);
```

结果示例如下。

```
输入数据(src0Local): [1 2 3 ... 512] 
输入数据(src1Local): [513 514 515 ... 1024] 
输出数据(dstLocal): [-512 -512 -512 ... -512]
```

