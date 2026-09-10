---
name: document/cn/HMSCore-References/miniprogram-api-wxanalytics-0000001198293007
title: WxHiAnalytics
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/miniprogram-api-wxanalytics-0000001198293007
---

# WxHiAnalytics

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
|Promise\<void\>|[setAnalyticsEnabled](#section1644555762111)(flag: boolean) 是否打开埋点采集能力。|
|Promise\<void\>|[setUserId](#section7861174811228)(userId:string) 设置用户ID。|
|Promise\<void\>|[setUserProfile](#section8235141952311)(name:string,value:string) 设置用户属性。|
|Promise\<void\>|[setSessionDuration](#section85531244182319)(sessionDuration: number) 设置Session超时时长。|
|Promise\<void\>|[onEvent](#section1039116385275)(eventId: string, params?: { \[key: string\]: any }) 记录事件。|
|Promise\<void\>|[pageStart](#section13579190152815)(screenName:string) 自定义进入页面事件。|
|Promise\<void\>|[pageEnd](#section20502516152912)(screenName:string) 自定义退出页面事件。|
|Promise\<void\>|[setAppVersion](#section19628161613311)(version: string) 设置版本信息。|
|Promise\<{ \[key: string\]: string \| number }\>|[getUserProfiles](#section1862412149497)(preDefined: boolean) 获取自采集或者自定义的用户属性。|
|Promise\<void\>|[setRestrictionEnabled](#section069215373517)(flag: boolean) 设置是否限制数据分析能力。|
|Promise\<boolean\>|[isRestrictionEnabled](#section68896424389)() 获取当前限制数据分析开关的状态。|
|Promise\<void\>|[setRestrictionShared](#section1080412382538)(shared: boolean) 设置是否限制数据共享。|
|Promise\<boolean\>|[isRestrictionShared](#section10116161211549)() 获取限制数据共享开关的状态。|
|Promise\<string\>|[getAAID](#section993793015410)() 获取Anonymous Application ID。|
|Promise\<void\>|[addDefaultEventParams](#section1740315510397)(params?: { \[key: string\]: string \| number \| boolean \| null }) 添加默认事件参数。|
|Promise\<void\>|[setOpenId](#section1655719516195)(openid: string \| null) 设置微信openid。|
|Promise\<void\>|[setUnionId](#section756417514196)(unionid: string \| null) 设置微信unionid。|
|Promise\<void\>|[setWXAppId](#section25298430463)(appid: string \| null) 设置微信appid。|
|Promise\<void\>|[setRoutePolicy](#section16634538151912)(id: string \| null ) 设置数据处理位置。|
|Promise\<void\>|[setReportPolicies](#section59744832014)(policies: ReportPolicy) 设置上报策略。|
|Promise\<void\>|[onReport](#section82761885241)() 立即上报所有事件。|

#### Public Methods

#### setAnalyticsEnabled

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|setAnalyticsEnabled(flag: boolean): Promise\<void\> 是否打开埋点采集开关。关闭后将不再记录任何数据。 说明： * 如果您已经调用过[setRestrictionEnabled](#section069215373517)接口，再次打开埋点采集能力时，数据分析能力不会同步打开，需要您设置[setRestrictionEnabled](#section069215373517)接口的参数值为false。 * 如果您未调用过[setRestrictionEnabled](#section069215373517)接口，再次打开埋点采集能力时，数据分析能力会同步打开。|

Parameters  

|Name|Description|
|:---|:---------------------------------------|
|flag|是否打开埋点采集开关。默认为true。 * true：打开 * false：关闭|

Sample code：

SDK默认打开采集数据，您可参考以下示例代码，关闭埋点采集能力。

```
...
agconnect.instance().configInstance(agConnectConfig);
let analytics = agconnect.analytics();
analytics.setAnalyticsEnabled(false);
```

#### setUserId

|Method|
|:--------------------------------------------------------------------------------|
|setUserId(userId:string): Promise\<void\> 设置用户ID。SDK不会保存您的用户ID，建议您在每次应用启动后设置用户ID。|

Parameters  

|Name|Description|
|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|userId|用户ID，非空，长度不超过256字符。 userId：匿名化用户标识，在华为分析服务侧通过此标识进行关联用户数据。只有您可以使用该标识符追溯到具体的用户，分析系统无法使用您设置的ID追溯到原始用户。 说明： 设置userId时，需要遵守[分析服务协议](https://developer.huawei.com/consumer/cn/doc/distribution/app/20212)，避免使用能标识个人身份信息的原始userId，建议使用随机化的userId。|

#### setUserProfile

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------|
|setUserProfile(name:string, value:string): Promise\<void\> 设置用户属性。用户属性值将在整个应用程序生命周期和会话期间保持不变。最多支持25个用户属性名称，如果后面设置属性有重复的name，则刷新value值。|

Parameters  

|Name|Description|
|:----|:-----------------------------------------|
|name|用户属性的标识符。非空，由数字、字母、下划线组成，以字母开头，长度不超过256字符。|
|value|属性值。长度不超过256字符。|

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115356.78201419212997281195309239471390:50001231000000:2800:773DE284AAF64A37F587B80072DEADBB0E2B4EDA630F0948C9A60450D251D6A8.png?needInitFileName=true?needInitFileName=true)  
* value可以设置为null，通过传null来实现删除对应的用户属性。
* 如果您删除或新增属性，需要在端侧和云侧同步修改，并通过设置的属性name进行关联。  

#### setSessionDuration

|Method|
|:-------------------------------------------------------------------------------------------------------------------------|
|setSessionDuration(sessionDuration: number): Promise\<void\> 设置Session超时时长。微信小程序一直在前台运行，当两个相邻事件的时间间隔超过此接口设置的阈值时，将生成一个新的会话。|

Parameters  

|Name|Description|
|:--------------|:------------------------------------------------------------------------------|
|sessionDuration|Session超时时长。单位：毫秒。 取值范围：最小值5秒，最大值5小时。如果设置的值小于最小则取最小，大于最大则取最大。默认1800000毫秒（30分钟）。|

#### onEvent

|Method|
|:---------------------------------------------------------------------------------|
|onEvent(eventId: string, params?: { \[key: string\]: any }): Promise\<void\> 记录事件。|

Parameters  

|Name|Description|
|:------|:--------------------------------------------------------------------------------------|
|eventId|事件标识符。非空，由数字、字母、下划线组成，不能以数字开头，不能包含空格，长度不超过256字符，不能使用自动采集事件ID。 例如："event_description10"。|
|params|事件携带的信息。键值对个数不超过2048，同时大小不超过204800个字符。键值对中key由数字、字母、下划线组成，不能以数字开头。|

#### pageStart

|Method|
|:--------------------------------------------------------------------------------|
|pageStart(screenName:string): Promise\<void\> 用该接口可自定义进入页面事件。该接口通常与pageEnd接口配对使用。|

Parameters  

|Name|Description|
|:---------|:----------|
|screenName|进入页面的名字。|

#### pageEnd

|Method|
|:--------------------------------------------------------------------------------|
|pageEnd(screenName:string): Promise\<void\> 用该接口可自定义退出页面事件。该接口通常与pageStart接口配对使用。|

Parameters  

|Name|Description|
|:---------|:----------|
|screenName|退出页面的名字。|

#### setAppVersion

|Method|
|:------------------------------------------------------|
|setAppVersion(version: string): Promise\<void\> 设置版本信息。|

Parameters  

|Name|Description|
|:------|:----------------|
|version|版本信息。最长不超过100个字符。|

#### getUserProfiles

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------|
|getUserProfiles(preDefined: boolean):Promise\<{ \[key: string\]: string \| number }\> 获取自采集或者自定义的用户属性。 说明： 此接口获取不到自动采集用户属性中的AAID。|

Parameters  

|Name|Description|
|:---------|:-------------------------------------------------------|
|preDefined|获取自采集用户属性或者自定义用户属性。 * true：获取自采集用户属性。 * false：获取自定义用户属性。|

Returns  

|Type|Description|
|:-----------------------------------------------|:-------------|
|Promise\<{ \[key: string\]: string \| number }\>|自采集或者自定义的用户属性。|

#### setRestrictionEnabled

|Method|
|:----------------------------------------------------------------------------------------------|
|setRestrictionEnabled(flag: boolean): Promise\<void\> 设置是否限制数据分析能力。限制分析开关默认值为false，即默认开启数据分析能力。|

Parameters  

|Name|Description|
|:---|:----------------------------------------------------|
|flag|打开或关闭数据分析能力。默认值为false，即打开数据分析能力。 * true：关闭 * false：打开|

#### isRestrictionEnabled

|Method|
|:----------------------------------------------------------|
|isRestrictionEnabled(): Promise\<boolean\> 获取当前限制数据分析开关的状态。|

Returns  

|Type|Description|
|:-----------------|:------------------------------------------------------------|
|Promise\<boolean\>|获取当前限制数据分析开关的状态。 * true：表示当前数据分析是关闭状态。 * false：表示当前数据分析是打开状态。|

#### setRestrictionShared

|Method|
|:------------------------------------------------------------------------------------------------------------------------|
|setRestrictionShared(shared: boolean): Promise\<void\> 设置是否限制数据共享能力。限制数据共享开关默认值为false，即默认开启数据共享能力。 说明： 仅中国大陆可用，非中国大陆调用无效。|

Parameters  

|Name|Description|
|:-----|:----------------------------------------------------|
|shared|打开或关闭数据共享能力。默认值为false，即打开数据共享能力。 * true：关闭 * false：打开|

#### isRestrictionShared

|Method|
|:-------------------------------------------------------------------------------|
|isRestrictionShared(): Promise\<boolean\> 获取当前限制数据共享开关状态。 说明： 仅中国大陆可用，非中国大陆调用无效。|

Returns  

|Type|Description|
|:-----------------|:-------------------------------------------------------|
|Promise\<boolean\>|获取当前限制数据共享开关状态。 * true：当前数据共享是关闭状态。 * false：当前数据共享是打开状态。|

#### getAAID

|Method|
|:--------------------------------------------------------------------------------------|
|getAAID(): Promise\<string\> 从AppGallery Connect（以下简称AGC）服务中获取Anonymous Application ID。|

Returns  

|Type|Description|
|:----------------|:----------------------------------|
|Promise\<string\>|获取Anonymous Application ID的Promise。|

#### addDefaultEventParams

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|addDefaultEventParams(params?: { \[key: string\]: string \| number \| boolean \| null }): Promise\<void\> 添加默认事件参数，默认事件参数将被添加到除自动采集事件之外的所有事件中，默认事件参数与事件参数同名时，使用事件参数。|

Parameters  

|Name|Description|
|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|params|默认事件参数。 参数最多支持100个键值对，每个键值对中key的长度不能超过256个字符，且只能由数字、字母、下划线组成，不能以数字开头；value长度不能超过256个字符，value只支持string、number、boolean、null。 说明： * 如果传入的params为null，将清除所有缓存的默认事件参数；如果传入的键值对中value为null，将删除对应的默认事件参数；如果传入的键值对中key已存在，将更新对应的默认事件参数。 * 默认事件参数的个数和大小会被[onEvent](#section1039116385275)计入，请注意参数的使用限制。|

#### setOpenId

|Method|
|:-----------------------------------------------------------------------------------------------------------|
|setOpenId(openid: string \| null): Promise\<void\> 设置微信openid。 若您不希望使用setOpenId标识用户（如用户退出时），必须将openid设为null。|

Parameters  

|Name|Description|
|:-----|:---------------------------------------------------------------------------------|
|openid|非空，长度不超过256字符。 说明： * 如果参数非法，SDK将会重置openid为空字符串。 * 如果传入的openid为null，将清除设置的微信openid。|

#### setUnionId

|Method|
|:----------------------------------------------------------------------------------------------------------------|
|setUnionId(unionid: string \| null): Promise\<void\> 设置微信unionid。 若您不希望使用setUnionId标识用户（如用户退出时），必须将unionid设为null。|

Parameters  

|Name|Description|
|:------|:------------------------------------------------------------------------------------|
|unionid|非空，长度不超过256字符。 说明： * 如果参数非法，SDK将会重置unionid为空字符串。 * 如果传入的unionid为null，将清除设置的微信unionid。|

#### setWXAppId

|Method|
|:------------------------------------------------------------|
|setWXAppId(appid: string \| null): Promise\<void\> 设置微信appid。|

Parameters  

|Name|Description|
|:----|:------------------------------------------------------------------------------|
|appid|非空，长度不超过256字符。 说明： * 如果参数非法，SDK将会重置appid为空字符串。 * 如果传入的appid为null，将清除设置的微信appid。|

#### setRoutePolicy

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|setRoutePolicy (id: string \| null ): Promise\<void\> 设置数据处理位置。 说明： * 需通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/)申请多数据处理位置功能体验，该接口方可生效。在线提单操作详情请参见[在线提单指导](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/online-application-guide-0000001174952406)。 * 使用多数据处理位置接口时，请务必使用最新的SDK配置信息。获取最新SDK配置信息方法：在"项目设置"页面中，复制"应用"下的SDK代码片段。|

Parameters  

|Name|Description|
|:---|:--------------------------------------------------------------------------------------------------------------------------------------------|
|id|设置的数据处理位置。 数据处理位置包括：CN(中国)、DE(德国)、SG(新加坡)、RU(俄罗斯)。 说明： * 设置的数据处理位置必须是开通过存储权限的数据处理位置，如果没有开通，数据将无法上报，请务必设置有效的数据处理位置。 * 如果设置为null，数据上报到默认数据处理位置。|

#### setReportPolicies

|Method|
|:------------------------------------------------------------------|
|setReportPolicies (policies: ReportPolicy): Promise\<void\> 设置上报策略。|

Parameters  

|Name|Description|
|:-------|:----------|
|policies|设置上报策略。|

#### onReport

|Method|
|:------------------------------------|
|onReport(): Promise\<void\> 立即上报所有事件。|

