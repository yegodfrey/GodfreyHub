---
name: document/cn/Media-References/failcontent-errordetail-0000001376599006
title: FailContent.ErrorDetail
uri: https://developer.huawei.com/consumer/cn/doc/Media-References/failcontent-errordetail-0000001376599006
---

# FailContent.ErrorDetail

|Class Info|
|:---------------------------------------------------------------------|
|public static class FailContent.ErrorDetail 操作失败的草稿信息，包括草稿ID、错误码、错误信息。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-----------------------------------------------------------------|
|String|[getDraftId](#section1967117821611)() 获取操作失败的草稿ID。|
|int|[getErrCode](#section1956420218162)() 获取错误码。|
|String|[getErrMsg](#section9558142914168)() 获取失败信息。|
|void|[setDraftId](#section134571738111614)(String draftId) 设置操作失败的草稿ID。|
|void|[setErrCode](#section13302046131618)(int errCode) 设置错误码。|
|void|[setErrMsg](#section1469365310160)(String errMsg) 设置失败信息。|

## Public Methods

### getDraftId

|Method|
|:--------------------------------------|
|public String getDraftId() 获取操作失败的草稿ID。|

**Returns**

|Type|Description|
|:-----|:----------|
|String|操作失败的草稿ID。|

### getErrCode

|Method|
|:-----------------------------|
|public int getErrCode() 获取错误码。|

**Returns**

|Type|Description|
|:---|:----------------------------------------------------------------------------------------------------------------|
|int|[错误码](https://developer.huawei.com/consumer/cn/doc/development/Media-References/error-code-api-0000001110802270)。|

### getErrMsg

|Method|
|:--------------------------------|
|public String getErrMsg() 获取失败信息。|

**Returns**

|Type|Description|
|:-----|:------------------------------------------------------------------------------------------------------------------------------|
|String|失败信息。请查看[错误码](https://developer.huawei.com/consumer/cn/doc/development/Media-References/error-code-api-0000001110802270)查找解决方法。|

### setDraftId

|Method|
|:--------------------------------------------------|
|public void setDraftId(String draftId) 设置操作失败的草稿ID。|

**Parameters**

|Name|Description|
|:------|:----------|
|draftId|操作失败的草稿ID。|

### setErrCode

|Method|
|:-----------------------------------------|
|public void setErrCode(int errCode) 设置错误码。|

**Parameters**

|Name|Description|
|:------|:----------------------------------------------------------------------------------------------------------------|
|errCode|[错误码](https://developer.huawei.com/consumer/cn/doc/development/Media-References/error-code-api-0000001110802270)。|

### setErrMsg

|Method|
|:-------------------------------------------|
|public void setErrMsg(String errMsg) 设置失败信息。|

**Parameters**

|Name|Description|
|:-----|:------------------------------------------------------------------------------------------------------------------------------|
|errMsg|失败信息。请查看[错误码](https://developer.huawei.com/consumer/cn/doc/development/Media-References/error-code-api-0000001110802270)查找解决方法。|

