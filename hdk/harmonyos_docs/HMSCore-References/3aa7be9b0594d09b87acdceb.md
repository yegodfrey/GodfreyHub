---
name: document/cn/HMSCore-References/accountauthservice-0000001050199395
title: AccountAuthService
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/accountauthservice-0000001050199395
---

# AccountAuthService

* 支持的场景：手机、平板、华为智慧屏、车机。
* 支持的OS：EMUI 3.0及以上、Android 4.4及以上。

|Interface Info|
|:---------------------------------------------------------------|
|public interface AccountAuthService extends AuthService 帐号登录客户端。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------|
|Intent|[getSignInIntent](#section76155516411)() 获取登录授权页面的Intent，可以通过startActivityForResult拉起授权页面。|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<[AuthAccount](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/authaccount-0000001050315810)\>|[silentSignIn](#section782995853116)() 静默授权，该接口不会拉起授权页面。|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<Void\>|[signOut](#section1170815179335)() 退出。|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<Void\>|[cancelAuthorization](#section9140325133319)() 取消授权。|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<[AccountIcon](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/accounticon-0000001074372710)\>|[getChannel](#section1512412401209)() 获取图标信息。 说明： 目前仅支持手机和平板。|
|Intent|[getIndependentSignInIntent](#section202596712357)(String accessToken) 获取独立授权弹框的Intent，可通过startActivityForResult拉起独立授权弹框。 说明： 目前仅支持手机和平板。|

#### Public Methods

#### getSignInIntent

|Method|
|:-----------------------------------------------------------------------------------------------------|
|public Intent getSignInIntent() 获取到帐号登录授权页面的Intent，并通过调用startActivityForResult(Intent, int)打开帐号登录授权页面。|

Returns  

|Type|Description|
|:-----|:------------------------------------------------------------------|
|Intent|返回可以拉起帐号登录页面的Intent对象，可通过startActivityForResult(Intent, int)方法打开页面。|

#### silentSignIn

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<[AuthAccount](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/authaccount-0000001050315810)\> silentSignIn() 返回已登录此应用的帐号登录信息（或者错误信息），在此过程中不会展现授权界面给帐号用户。|

Returns  

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<[AuthAccount](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/authaccount-0000001050315810)\>|用来获取[AuthAccount](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/authaccount-0000001050315810)或者[ApiException](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/apiexception-0000001050123087)的Task，通过在Task中设置回调来处理异步结果。 在接口返回的Task中需要设置两个回调监听： * 使用OnSuccessListener可以获取到成功场景返回的数据。 * 使用OnFailureListener可以获取到此次请求失败的相关信息。在OnFailureListener中需要判断该方式回调的异常对象是否是一个[ApiException](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/apiexception-0000001050123087)实例对象，然后根据[ApiException](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/apiexception-0000001050123087)实例对象中包含的getStatusCode()进行一些必要错误场景的处理。|

#### signOut

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<Void\> signOut() 应用调用此接口退出当前帐号，HMS Core SDK将删除当前帐号信息。|

Returns  

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<Void\>|用来检查请求是否成功、失败、已完成的Task对象。 在接口返回的Task中需要设置两个回调监听： * 使用OnSuccessListener可以获取到成功场景返回的数据。 * 使用OnFailureListener可以获取到此次请求失败的相关信息。在OnFailureListener中需要判断该方式回调的异常对象是否是一个[ApiException](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/apiexception-0000001050123087)实例对象，然后根据[ApiException](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/apiexception-0000001050123087)实例对象中包含的getStatusCode()进行一些必要错误场景的处理。|

#### cancelAuthorization

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<Void\> cancelAuthorization() 应用调用此接口取消帐号的授权。|

Returns  

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<Void\>|用来检查请求是否成功、失败、已完成的Task对象。 在接口返回的Task中需要设置两个回调监听： * 使用OnSuccessListener可以获取到成功场景返回的数据。 * 使用OnFailureListener可以获取到此次请求失败的相关信息。在OnFailureListener中需要判断该方式回调的异常对象是否是一个[ApiException](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/apiexception-0000001050123087)实例对象，然后根据[ApiException](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/apiexception-0000001050123087)实例对象中包含的getStatusCode()进行一些必要错误场景的处理。|

#### getChannel

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<[AccountIcon](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/accounticon-0000001074372710)\> getChannel() 应用调用此接口获取图标信息。 说明： 目前仅支持手机和平板。|

Returns  

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Task](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/task_tresult-0000001050121148)\<[AccountIcon](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/accounticon-0000001074372710)\>|用来获取图标信息。 在接口返回的Task中需要设置两个回调监听： * 使用OnSuccessListener可以获取到成功场景返回的数据。 * 使用OnFailureListener可以获取到此次请求失败的相关信息。在OnFailureListener中需要判断该方式回调的异常对象是否是一个[ApiException](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/apiexception-0000001050123087)实例对象，然后根据[ApiException](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/apiexception-0000001050123087)实例对象中包含的getStatusCode()进行一些必要错误场景的处理。|

#### getIndependentSignInIntent

|Method|
|:------------------------------------------------------------------------------------------------------------------------------|
|public Intent getIndependentSignInIntent(String accessToken) 获取独立授权弹框的Intent，可通过startActivityForResult拉起独立授权弹框。 说明： 目前仅支持手机和平板。|

Parameters  

|Name|Description|
|:----------|:---------------------------|
|accessToken|应用使用华为帐号登录后，获取的Access Token。|

Returns  

|Type|Description|
|:-----|:------------------------------------------------------------------|
|Intent|返回可以拉起独立授权弹框的Intent对象，可通过startActivityForResult(Intent, int)方法打开页面。|

