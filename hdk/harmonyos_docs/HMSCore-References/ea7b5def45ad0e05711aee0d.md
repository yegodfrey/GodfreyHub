---
name: document/cn/HMSCore-References/bannerview-0000001050066847
title: BannerView
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/bannerview-0000001050066847
---

# BannerView

|Class Info|
|:-------------------------------------------------------------------------|
|public class BannerView extends FrameLayout implements IBannerView 横幅广告视图。|

#### Public Constructor Summary

|Constructor Name|
|:-----------------------------------------------------------------------------------------------------|
|[BannerView](#section656315416573)(Context context) BannerView构造函数。|
|[BannerView](#section49311529205818)(Context context, AttributeSet attrs) BannerView构造函数。|
|[BannerView](#section5950357195914)(Context context, AttributeSet attrs, int defStyle) BannerView构造函数。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[destroy](#section16744164917016)() 销毁广告视图。|
|String|[getAdId](#section427971112)() 获取广告位ID。|
|[AdListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/adlistener-0000001050066825)|[getAdListener](#section1920213391019)() 获取广告监听器。|
|[BannerAdSize](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/banneradsize-0000001050066831)|[getBannerAdSize](#section197810541696)() 获取横幅广告尺寸。|
|boolean|[isLoading](#section2764911693)() 返回广告是否处于加载状态。|
|void|[loadAd](#section115158258813)([AdParam](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/adparam-0000001050066827) adParam) 加载一个广告。|
|void|[pause](#section111951387712)() 暂停与此广告视图相关的额外处理。|
|void|[resume](#section139781957168)() 在上一次调用pause()之后恢复一个广告视图。|
|void|[setAdId](#section7681319468)(String adId) 设置广告位ID。|
|void|[setAdListener](#section10638183311514)([AdListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/adlistener-0000001050066825) listener) 为广告视图设置一个广告监听器。|
|void|[setBannerAdSize](#section13312125211411)([BannerAdSize](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/banneradsize-0000001050066831) adSize) 设置广告尺寸。|
|void|[setBannerRefresh](#section422214152416)(long time) 为横幅广告设置轮播时间间隔。|
|[BiddingInfo](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/biddinginfo-0000001920219376)|@Deprecated [getBiddingInfo](#section125718305413)() 获取返回给媒体实时bidding相关数据。 注意： 已废弃。|

#### Public Constructors

#### BannerView(Context context)

|Constructor|
|:-------------------------------------------------|
|public BannerView(Context context) BannerView构造函数。|

Parameters  

|Name|Description|
|:------|:----------|
|context|上下文。|

#### BannerView(Context context, AttributeSet attrs)

|Constructor|
|:---------------------------------------------------------------------|
|public BannerView(Context context, AttributeSet attrs) BannerView构造函数。|

Parameters  

|Name|Description|
|:------|:----------|
|context|上下文。|
|attrs|视图属性集合。|

#### BannerView(Context context, AttributeSet attrs, int defStyle)

|Constructor|
|:----------------------------------------------------------------------------|
|BannerView(Context context, AttributeSet attrs, int defStyle) BannerView构造函数。|

Parameters  

|Name|Description|
|:-------|:----------|
|context|上下文。|
|attrs|视图属性集合。|
|defStyle|基础样式值。|

#### Public Methods

#### destroy

|Method|
|:----------------------------|
|public void destroy() 销毁广告视图。|

#### getAdId

|Method|
|:-------------------------------|
|public String getAdId() 获取广告位ID。|

Returns  

|Type|Description|
|:-----|:----------|
|String|广告位ID。|

#### getAdListener

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------|
|public [AdListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/adlistener-0000001050066825) getAdListener() 获取广告监听器。|

Returns  

|Type|Description|
|:--------------------------------------------------------------------------------------------------------|:----------|
|[AdListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/adlistener-0000001050066825)|广告监听器。|

#### getBannerAdSize

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------|
|public [BannerAdSize](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/banneradsize-0000001050066831) getBannerAdSize() 获取横幅广告尺寸。|

Returns  

|Type|Description|
|:------------------------------------------------------------------------------------------------------------|:----------|
|[BannerAdSize](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/banneradsize-0000001050066831)|横幅广告尺寸。|

#### isLoading

|Method|
|:---------------------------------------|
|public boolean isLoading() 返回广告是否处于加载状态。|

Returns  

|Type|Description|
|:------|:--------------------------------------|
|boolean|返回广告是否处于加载状态： * true：正在加载。 * false：非加载。|

#### loadAd

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------|
|public void loadAd([AdParam](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/adparam-0000001050066827) adParam) 加载一个广告。|

Parameters  

|Name|Description|
|:------|:----------|
|adParam|广告请求对象。|

#### pause

|Method|
|:-----------------------------------|
|public void pause() 暂停与此广告视图相关的额外处理。|

#### resume

|Method|
|:--------------------------------------------|
|public void resume() 在上一次调用pause()之后恢复一个广告视图。|

#### setAdId

|Method|
|:----------------------------------------|
|public void setAdId(String adId) 设置广告位ID。|

Parameters  

|Name|Description|
|:---|:----------|
|adId|广告位ID。|

#### setAdListener

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setAdListener([AdListener](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/adlistener-0000001050066825) listener) 为广告视图设置一个广告监听器。|

Parameters  

|Name|Description|
|:-------|:----------|
|listener|广告监听器。|

#### setBannerAdSize

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setBannerAdSize([BannerAdSize](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/banneradsize-0000001050066831) adSize) 为该横幅广告设置尺寸。|

Parameters  

|Name|Description|
|:-----|:----------|
|adSize|横幅广告尺寸。|

#### setBannerRefresh

|Method|
|:-----------------------------------------------------|
|public void setBannerRefresh(long time) 为横幅广告设置轮播时间间隔。|

Parameters  

|Name|Description|
|:---|:-------------------------------------|
|time|轮播时间间隔，单位：秒，取值范围：\[30, 120\]。 默认值：60秒。|

#### getBiddingInfo

|Method|
|:--------------------------------------------------------------------|
|@Deprecated public BiddingInfo getBiddingInfo() 获取返回给媒体实时bidding相关数据。|

Returns  

|Type|Description|
|:----------------------------------------------------------------------------------------------------------|:-----------------------------|
|[BiddingInfo](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/biddinginfo-0000001920219376)|BiddingInfo实时bidding ADX返回的参数。|

