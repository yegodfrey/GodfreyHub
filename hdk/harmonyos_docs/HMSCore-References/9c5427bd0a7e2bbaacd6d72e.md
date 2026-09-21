---
name: document/cn/HMSCore-References/api-hms-wallet-pass-commonfield-0000001051066296
title: CommonField
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-pass-commonfield-0000001051066296
---

# CommonField

|Class Info|
|:-------------------------------------------------------------------|
|public class CommonField implements Parcelable 卡券CommonField扩展字段的对象。|

## Nested Class Summary

|Qualifier and Type|Class Name and Description|
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|class|[CommonField.Builder](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-pass-commonfield-build-0000001050746359) CommonField.Builder对象。|

## Public Field Summary

|Qualifier and Type|Field and Description|
|:------------------------------------------------|:---------------------------------------------------------------------------|
|public static final Creator<CommonField > CREATOR|[CREATOR](#section10398152731118) 实例化CommonField静态内部对象，实现Parcelable.Creator。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:--------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
|String|[getKey()](#section122101148472) 获取key值。|
|String|[getValue()](#section1335422654718) 获取具体值。|
|String|[getLabel()](#section1789893234717) CommonField的标签值。|
|[CommonField.Builder](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-pass-commonfield-build-0000001050746359)|[getBuilder()](#section991443620475) 得到Build对象。|

## Public Fields

### CREATOR

|Fields|
|:------------------------------------------------------------------------------------------|
|public static final Creator<CommonField> CREATOR 实例化CommonField静态内部对象，实现Parcelable.Creator。|

## Public Methods

### public String getKey()

|Method|
|:-----------------------------|
|public String getKey() 获取key值。|

**Return**

|Type|Description|
|:-----|:---------------|
|String|CommonField的关键字。|

### public String getValue()

|Method|
|:---------------------------------|
|public String getValue() 获取value值。|

**Return**

|Type|Description|
|:-----|:-------------|
|String|CommonField的值。|

### public String getLabel()

|Method|
|:---------------------------------|
|public String getLabel() 获取label值。|

**Return**

|Type|Description|
|:-----|:--------------|
|String|CommonField的标签。|

### public static CommonField.Builder getBuilder()

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static [CommonField.Builder](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-pass-commonfield-build-0000001050746359) getBuilder() 得到Builder对象。|

**Return**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[CommonField.Builder](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-hms-wallet-pass-commonfield-build-0000001050746359)|实例化Builder。|

