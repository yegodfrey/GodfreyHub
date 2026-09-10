---
name: document/cn/connectivity-References/OneHopLinuxKit-API
title: driver_adapt.h
uri: https://developer.huawei.com/consumer/cn/doc/connectivity-References/OneHopLinuxKit-API
---

|-----------------------------------------------------------------------------------------|
|File info|
|driver_adapt.h|
|设备层驱动接口，驱动适配的具体实现待OneHop SDK的调用者开发并提供。driver_adapt.h文件是一个通用的设备适配接口文件，本文档仅介绍OneHop依赖的相关接口。|

## Constant Summary

|-----|---------------|-------|
|Type|Name|Desc|
|Macro|NFC_DRIVER_NAME|NFC驱动名称|

## Constants

|---------------|
|Constant|
|NFC_DRIVER_NAME|
|"nfc"|

## Structs

|----------------------------------------------------------------|
|Struct|
|FcDriverAdaptOps|
|驱动适配回调结构体。FcDriverAdaptOps是一个通用的设备适配回调结构体，本文档仅介绍OneHop依赖的相关回调函数。|

Members

|---------------|---------------------------------------------------------|
|Member name|Member desc|
|const char name|设备驱动名称。例如，如果是适配OneHop的NFC接口，其名称必须为提前定义的宏：NFC_DRIVER_NAME|
|const char desc|设备驱动描述|
|Init|驱动初始化，详见章节 3.6.1|
|Deinit|驱动去初始化，详见章节 3.6.2|
|SendData|发送数据，该回调将待写入NFC标签的数据发送给上层应用，由上层应用负责NFC标签数据写入操作，详见章节 3.6.3|
|GetParam|获取设备参数，详见章节3.6.4|

|--------------|
|Struct|
|GetParamsType|
|向设备查询的参数类型枚举值。|

Members

|----------------|-----------|
|Member name|Member desc|
|GET_DEV_MAC = 0|获取设备MAC地址|
|GET_MODEL_ID = 1|获取设备对应的标识码|
|GET_DEV_NAME = 2|获取设备名称|

## Callback Methods

|------------------------------------------|
|Method|
|int (Init)(void ctx, const char\* ifName);|
|初始化驱动。|

Parameters

|--------------|-------------------|
|Parameter name|Parameter desc|
|ctx|驱动初始化所需的信息。该参数可以为空。|
|ifName|接口名称。该参数可以为空。|

Return  

|----|-----------|
|type|desc|
|int|0 成功, -1 失败|

|------------------------|
|Method|
|int (Deinit)(void priv);|
|去初始化驱动。|

Parameters

|--------------|----------------------------------|
|Parameter name|Parameter desc|
|priv|设备参数，采用void 通配不同设备参数结构体差异。该参数可以为空。|

Return  

|----|-----------|
|type|desc|
|int|0 成功, -1 失败|

|--------------------------------------------------------------|
|Method|
|int (SendData)( unsigned char data, int dataLen, void\* priv);|
|数据发送函数。OneHop服务通过该回调，将需要写入NFC标签的数据发送给上层应用，由上层应用将数据写入NFC标签。|

Parameters

|--------------|---------------------------------|
|Parameter name|Parameter desc|
|data|待写入NFC标签的数据。|
|dataLen|待发送数据的长度，取值0到256。|
|priv|发送数据的结构体指针，采用void 通配不同设备发送数据结构体差异|

Return  

|----|-----------|
|type|desc|
|int|0 成功, -1 失败|

|---------------------------------------------------------------------------------------------------------------------------------|
|Method|
|int (GetParam)(GetParamsType paramType, void result);|
|获取设备参数。OneHop服务通过该回调，从上层应用获取所属设备的参数信息，通过函数入参paramType区分待获取的参数类型。目前仅使用"GET_DEV_NAME"作为参数paramType的值，来获取设备名称，上层应用需在result参数中返回设备名称。|

Parameters

|--------------|-----------------------------------------------------|
|Parameter name|Parameter desc|
|paramType|待获取的参数类型枚举值，详见章节3.4.2。|
|result|获取参数值的结构体指针，采用void 通配不同设备参数结构体差异获取设备名称时，字符串最大长度为256字节|

Return  

|----|-----------|
|type|desc|
|int|0 成功, -1 失败|

