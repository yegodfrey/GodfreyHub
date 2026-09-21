---
name: document/cn/Security-References/conveyancepreference-0000001050420307
title: AttestationConveyancePreference
uri: https://developer.huawei.com/consumer/cn/doc/Security-References/conveyancepreference-0000001050420307
---

# AttestationConveyancePreference

|Enum Info|
|:---------------------------------------------------------------------------|
|public enum AttestationConveyancePreference 生成凭据时，供WebAuthn依赖方参考，以指定凭据传递的偏好。|

## Enum Value Summary

|Enum Value and Description|
|:-------------------------------------------------------------------------------------------------------------------------------------------|
|NONE none依赖方对验证者证明不感兴趣，默认值*。*|
|INDIRECT indirect依赖方倾向于提供可验证的证明声明文件，但允许客户决定如何获取此类证明声明*。* 客户端可能用匿名CA生成的证明声明替换认证者生成的证明声明，以保护用户的隐私，或在一个异构生态系统中协助依赖方进行证明验证*。* 目前不支持，同direct处理*。*|
|DIRECT direct依赖方希望接收由验证方生成的证明声明。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:--------------------------------------------|:-----------------------------------------------------------------------------------------|
|public static AttestationConveyancePreference|[fromValue](#section29172053182415)(String value) 根据名称生成AttestationConveyancePreference实例。|
|public final String|[getValue](#section7751741172512)() 获取AttestationConveyancePreference枚举值。|

## Public Methods

### fromValue

|Method|
|:--------------------------------------------------------------------------------------------------------|
|public AttestationConveyancePreference fromValue(String value) 根据名称生成AttestationConveyancePreference实例*。*|

**Parameters**

|Name|Description|
|:----|:------------------------------------------------------------------------------------|
|value|AttestationConveyancePreference枚举值。 * none：不需要凭据。 * indirect：由客户端自行处理。 * direct：需要凭据。|

**Returns**

|Type|Description|
|:------------------------------|:----------------------------------|
|AttestationConveyancePreference|AttestationConveyancePreference的实例。|

### getValue

|Method|
|:--------------------------------------------------------------------|
|public String getValue() 获取AttestationConveyancePreference实例当前的枚举值*。*|

**Returns**

|Type|Description|
|:-----|:---------------------------------------|
|String|AttestationConveyancePreference实例当前的枚举值。|

