---
name: document/cn/HMSCore-References/hms-common-apiexception-0000001199553037
title: ApiException
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hms-common-apiexception-0000001199553037
---

# ApiException

|Class Info|
|:----------------------------------------------------|
|public class ApiException extends Exception SDK抛出的异常。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:----------------------------------------------------|
|int|[getStatusCode](#section1522014320326)() 获取错误码。|
|String|[getStatusMessage](#section1475373813335)() 获取错误描述信息。|

## Public Methods

### getStatusCode

|Method|
|:--------------------------------|
|public int getStatusCode() 获取错误码。|

**Returns**

|Type|Description|
|:---|:-------------------------------------------------------------------------------------------------------------------------------|
|int|错误码，含义请参见[错误码](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/error-code-harmony-0000001251809575)。|

### getStatusMessage

|Method|
|:-----------------------------------------|
|public String getStatusMessage() 获取错误描述信息。|

**Returns**

|Type|Description|
|:-----|:----------|
|String|错误描述信息。|

