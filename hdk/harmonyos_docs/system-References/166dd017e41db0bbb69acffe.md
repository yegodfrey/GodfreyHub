---
name: document/cn/system-References/commonresponse-0000001115529724
title: CommonResponse
uri: https://developer.huawei.com/consumer/cn/doc/system-References/commonresponse-0000001115529724
---

# CommonResponse

|Class Info|
|:-----------------------------------------------------------------------------------------------------|
|public class CommonResponse implements Parcelable 定义Modem查询数据以及连接信息的回调消息类。android.os.Parcelable接口的实现类。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:--------------------------------------------------------------------------|
|int|[getCode](#section10857203517598)() 获取消息错误码。|
|void|[setCode](#section42361481035)(int code) 设置消息错误码。|
|String|[getMsg](#section8674184412417)() 获取错误消息，包括参数查询错误消息或者连接错误消息。|
|void|[setMsg](#section143415201568)(String msg) 设置错误消息描述信息。|
|String|[getQueryParameters](#section24305712718)() 获取查询参数。|
|void|[setQueryParameters](#section4419111914914)(String queryParameters) 设置查询参数。|
|String|[getValue](#section736413454100)() 获取查询数据。|
|void|[setValue](#section18219417181211)(String value) 设置查询数据。|

#### Public Methods

#### getCode

|Method|
|:----------------------------|
|public int getCode() 获取消息错误码。|

Returns  

|Type|Description|
|:---|:-------------------------------------------------------------------------------------------------------------------------|
|int|获取消息错误码，具体参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/system-References/error-code-0000001126788617)。|

#### setCode

|Method|
|:-------------------------------------|
|public void setCode(int code) 设置消息错误码。|

Parameters  

|Name|Description|
|:---|:-------------------------------------------------------------------------------------------------------------------------|
|code|设置消息错误码，具体参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/system-References/error-code-0000001126788617)。|

#### getMsg

|Method|
|:------------------------------------------------|
|public String getMsg() 获取错误消息，包括参数查询错误消息或者连接错误消息。|

Returns  

|Type|Description|
|:-----|:----------------------------------------------------------------------------------------------------------------------------|
|String|获取错误消息描述信息，具体参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/system-References/error-code-0000001126788617)。|

#### setMsg

|Method|
|:-----------------------------------------|
|public void setMsg(String msg) 设置错误消息描述信息。|

Parameters  

|Name|Description|
|:---|:----------------------------------------------------------------------------------------------------------------------------|
|msg|设置错误消息描述信息，具体参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/system-References/error-code-0000001126788617)。|

#### getQueryParameters

|Method|
|:-----------------------------------------|
|public String getQueryParameters() 获取查询参数。|

Returns  

|Type|Description|
|:-----|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|String|获取查询参数，具体参见[Lte](https://developer.huawei.com/consumer/cn/doc/development/system-References/constant-values-0000001079806248#section32831837192112)、[Nr](https://developer.huawei.com/consumer/cn/doc/development/system-References/constant-values-0000001079806248#section1335964412278)、[Bearer](https://developer.huawei.com/consumer/cn/doc/development/system-References/constant-values-0000001079806248#section4586124114311)、[NetDiagnosis](https://developer.huawei.com/consumer/cn/doc/development/system-References/constant-values-0000001079806248#section169311615161016)、[ModemSlice](https://developer.huawei.com/consumer/cn/doc/development/system-References/constant-values-0000001079806248#section78891400123)或者[queryParameters与value映射表](https://developer.huawei.com/consumer/cn/doc/development/system-References/iresprocess-0000001132456931#section172381142121416)。|

#### setQueryParameters

|Method|
|:-------------------------------------------------------------|
|public void setQueryParameters(String queryParameters) 设置查询参数。|

Parameters  

|Name|Description|
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|queryParameters|设置查询参数，具体参见[Lte](https://developer.huawei.com/consumer/cn/doc/development/system-References/constant-values-0000001079806248#section32831837192112)、[Nr](https://developer.huawei.com/consumer/cn/doc/development/system-References/constant-values-0000001079806248#section1335964412278)、[Bearer](https://developer.huawei.com/consumer/cn/doc/development/system-References/constant-values-0000001079806248#section4586124114311)、[NetDiagnosis](https://developer.huawei.com/consumer/cn/doc/development/system-References/constant-values-0000001079806248#section169311615161016)、[ModemSlice](https://developer.huawei.com/consumer/cn/doc/development/system-References/constant-values-0000001079806248#section78891400123)或者[queryParameters与value映射表](https://developer.huawei.com/consumer/cn/doc/development/system-References/iresprocess-0000001132456931#section172381142121416)。|

#### getValue

|Method|
|:-------------------------------|
|public String getValue() 获取查询数据。|

Returns  

|Type|Description|
|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|String|获取查询数据，具体参见[queryParameters与value映射表](https://developer.huawei.com/consumer/cn/doc/development/system-References/iresprocess-0000001132456931#section172381142121416)。|

#### setValue

|Method|
|:-----------------------------------------|
|public void setValue(String value) 设置查询数据。|

Parameters  

|Name|Description|
|:----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|value|设置查询数据，具体参见[queryParameters与value映射表](https://developer.huawei.com/consumer/cn/doc/development/system-References/iresprocess-0000001132456931#section172381142121416)。|

