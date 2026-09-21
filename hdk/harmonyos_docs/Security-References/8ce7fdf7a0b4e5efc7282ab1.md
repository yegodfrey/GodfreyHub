---
name: document/cn/Security-References/credentialcreationoptions-0000001050176682
title: PublicKeyCredentialCreationOptions
uri: https://developer.huawei.com/consumer/cn/doc/Security-References/credentialcreationoptions-0000001050176682
---

# PublicKeyCredentialCreationOptions

|Class Info|
|:-------------------------------------------------------------|
|public class PublicKeyCredentialCreationOptions 表示新建认证凭据的选项*。*|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------|
|public byte[]|[getChallenge](#section5913334173614)() 获取挑战值。|
|public [PublicKeyCredentialRpEntity](https://developer.huawei.com/consumer/cn/doc/development/Security-References/rpentity-0000001050267652)|[getRp](#section14378101583713)() 获取在新建凭据时的依赖方属性。|
|public [PublicKeyCredentialUserEntity](https://developer.huawei.com/consumer/cn/doc/development/Security-References/userentity-0000001050178759)|[getUser](#section1864674612376)() 获取帐户信息。|
|public List<[PublicKeyCredentialParameters](https://developer.huawei.com/consumer/cn/doc/development/Security-References/credentialparameters-0000001050418671)>|[getPubKeyCredParams](#section185881815133819)() 获取认证凭据额外参数列表。|
|public List<[PublicKeyCredentialDescriptor](https://developer.huawei.com/consumer/cn/doc/development/Security-References/publickeycredentialdescriptor-0000001050418659)>|[getExcludeList](#section17610020394)() 获取排除列表。|
|public Map<String, Object>|[getExtensions](#section1830816490391)() 获取扩展参数。|
|public [AuthenticatorSelectionCriteria](https://developer.huawei.com/consumer/cn/doc/development/Security-References/selectioncriteria-0000001050267660)|[getAuthenticatorSelection](#section18561926144020)() 获取与认证器相关的配置项。|
|public [AttestationConveyancePreference](https://developer.huawei.com/consumer/cn/doc/development/Security-References/conveyancepreference-0000001050420307)|[getAttestation](#section97874611417)() 获取凭据偏好*。*|
|public Long|[getTimeoutSeconds](#section119374934120)() 获取超时时间。|

## Public Methods

### getChallenge

|Method|
|:----------------------------------------|
|public byte[] getChallenge() 获取challenge。|

**Returns**

|Type|Description|
|:-----|:------------|
|byte[]|challenge挑战值。|

### getRp

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [PublicKeyCredentialRpEntity](https://developer.huawei.com/consumer/cn/doc/development/Security-References/rpentity-0000001050267652) getRp() 获取[PublicKeyCredentialRpEntity](https://developer.huawei.com/consumer/cn/doc/development/Security-References/rpentity-0000001050267652)，在新建凭据时依赖方的属性。|

**Returns**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
|[PublicKeyCredentialRpEntity](https://developer.huawei.com/consumer/cn/doc/development/Security-References/rpentity-0000001050267652)|用于获取在新建凭据时依赖方属性。 参见[PublicKeyCredentialRpEntity](https://developer.huawei.com/consumer/cn/doc/development/Security-References/rpentity-0000001050267652)。|

### getUser

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [PublicKeyCredentialUserEntity](https://developer.huawei.com/consumer/cn/doc/development/Security-References/userentity-0000001050178759) getUser() 获取用户帐号信息。|

**Returns**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------------------|:--------------|
|[PublicKeyCredentialUserEntity](https://developer.huawei.com/consumer/cn/doc/development/Security-References/userentity-0000001050178759)|新建凭据时提供的用户帐户属性。|

### getPubKeyCredParams

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public List<[PublicKeyCredentialParameters](https://developer.huawei.com/consumer/cn/doc/development/Security-References/credentialparameters-0000001050418671)> getPubKeyCredParams() 获取认证凭据额外参数列表。|

**Returns**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------|
|List<[PublicKeyCredentialParameters](https://developer.huawei.com/consumer/cn/doc/development/Security-References/credentialparameters-0000001050418671)>|新建认证凭据的额外参数列表。|

### getExcludeList

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public List<[PublicKeyCredentialDescriptor](https://developer.huawei.com/consumer/cn/doc/development/Security-References/publickeycredentialdescriptor-0000001050418659)> getExcludeList() 获取排除列表。|

**Returns**

|Type|Description|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|List<[PublicKeyCredentialDescriptor](https://developer.huawei.com/consumer/cn/doc/development/Security-References/publickeycredentialdescriptor-0000001050418659)>|注册请求的入参*。*|

### getExtensions

|Method|
|:--------------------------------------------------|
|public Map<String, Object> getExtensions() 获取扩展项*。*|

**Returns**

|Type|Description|
|:------------------|:----------|
|Map<String, Object>|扩展项。|

### getAuthenticatorSelection

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [AuthenticatorSelectionCriteria](https://developer.huawei.com/consumer/cn/doc/development/Security-References/selectioncriteria-0000001050267660) getAuthenticatorSelection() 获取[AuthenticatorSelectionCriteria](https://developer.huawei.com/consumer/cn/doc/development/Security-References/selectioncriteria-0000001050267660)。|

**Returns**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------|
|[AuthenticatorSelectionCriteria](https://developer.huawei.com/consumer/cn/doc/development/Security-References/selectioncriteria-0000001050267660)|用于WebAuthn依赖方指定，与认证器相关的配置项。|

### getAttestation

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [AttestationConveyancePreference](https://developer.huawei.com/consumer/cn/doc/development/Security-References/conveyancepreference-0000001050420307) getAttestation() 获取凭据传递偏好设置，WebAuthn依赖方指定在生成凭据过程中对证明传递的偏好。|

**Returns**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|
|[AttestationConveyancePreference](https://developer.huawei.com/consumer/cn/doc/development/Security-References/conveyancepreference-0000001050420307)|用于WebAuthn依赖方指定在生成凭据过程中对证明传递的偏好。|

### getTimeoutSeconds

|Method|
|:--------------------------------------|
|public Long getTimeoutSeconds() 获取超时时间。|

**Returns**

|Type|Description|
|:---|:----------|
|Long|超时时间。|

