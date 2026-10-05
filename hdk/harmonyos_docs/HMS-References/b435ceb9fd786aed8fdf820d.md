---
name: document/cn/HMS-References/ads-api-splashview
title: SplashView
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/ads-api-splashview
source: portal
---

CLASS info  
---  
public class SplashView  
开屏广告视图，用于获取广告，获取到广告后，SDK会自动根据配置处理和展示广告素材。  
  
## Nested Class Summary

Type| Name| Desc  
---|---|---  
Class| [SplashView.SplashAdLoadListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/ads-api-splashview-splashadLoadlistener)| 开屏广告加载监听器。  
  
## Public Constructor Summary

Constructor name  
---  
SplashView(Context context)  
开屏广告视图构造函数。  
SplashView(Context context, AttributeSet attrs)  
开屏广告视图构造函数。  
SplashView(Context context, AttributeSet attrs, int defStyleAttr)  
开屏广告视图构造函数。  
  
## Public Method Summary

Return type| Method name  
---|---  
void| load(String adId, int orientation, [AdParam](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/ads-api-adparam) adParam, [SplashAdLoadListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/ads-api-splashview-splashadLoadlistener) listener)  
获取并显示开屏广告，必须在UI线程调用。  
void| setLogo(View logo)  
设置需要隐藏的Logo区域。  
void| setLogo(View logo, int defaultVisibility)  
设置需要操作的Logo区域，并设置应用Logo的可见性。  
void| setLogoResId(int logoResId)  
设置应用Logo资源ID。  
void| setMediaNameResId(int mediaNameResId)  
设置应用文本描述资源ID。  
void| setSloganResId(int resId)  
设置竖屏下的默认开屏图片，用于开屏广告素材展示前显示。  
void| setWideSloganResId(int resId)  
设置横屏下的默认开屏图片，用于开屏广告素材展示前显示。  
boolean| isLoading()  
判断广告是否正在加载。  
boolean| isLoaded()  
判断广告是否已经加载完毕。  
void| setAdDisplayListener([SplashAdDisplayListener](https://developer.huawei.com/consumer/en/doc/development/HMS-References/ads-api-splashaddisplaylistener) adDisplayListener)  
设置开屏广告展示、点击事件的监听器。  
void| setAudioFocusType(int audioFocusType)  
设置视频类开屏广告的的音频焦点抢占策略。  
void| resumeView()  
恢复视图。  
void| pauseView()  
暂停视图。  
void| destroyView()  
销毁视图。  
  
## Public Constructors

Constructor  
---  
public SplashView(Context context)  
开屏广告视图构造函数。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
context| 上下文。  
Constructor  
---  
public SplashView(Context context, AttributeSet attrs)  
开屏广告视图构造函数。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
context| 上下文。  
attrs| 视图属性集合。  
Constructor  
---  
public SplashView(Context context, AttributeSet attrs, int defStyleAttr)  
开屏广告视图构造函数。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
context| 上下文。  
attrs| 视图属性集合。  
defStyleAttr| 基础样式值。  
  
## Public Methods

Method  
---  
public void load(String adId, int orientation, [AdParam](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/ads-api-adparam) adParam, [SplashAdLoadListener](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/ads-api-splashview-splashadLoadlistener) listener)  
获取并显示开屏广告，必须在UI线程调用。  
  
  
**Parameters**  


Parameter name| Parameter desc  
---|---  
adId| 广告位ID。  
orientation| 请求的资源方向。  
adParam| 广告请求参数。  
listener| 广告加载监听器。  
Method  
---  
public void setLogo(View logo)  
设置需要隐藏的Logo区域。  
  
  
**Parameters**  


Parameter name| Parameter desc  
---|---  
logo| 应用Logo区域的View实例。  
Method  
---  
public void setLogo(View logo, int defaultVisibility)  
设置需要操作的Logo区域，并设置应用Logo的可见性。  
  
  
**Parameters**  


Parameter name| Parameter desc  
---|---  
logo| 应用Logo区域的View实例。  
defaultVisibility| Logo区域可见性。

  * View.VISIBLE：不隐藏Logo区域。
  * View.INVISIBLE：隐藏Logo区域，但保留Logo区域。
  * View.GONE：隐藏Logo区域，且不保留Logo区域。

  
Method  
---  
public void setLogoResId(int logoResId)  
设置应用Logo资源ID。  
  
  
**Parameters**  


Parameter name| Parameter desc  
---|---  
logoResId| Logo资源ID。  
Method  
---  
public void setMediaNameResId(int mediaNameResId)  
设置应用文本描述资源ID。  
  
  
**Parameters**  


Parameter name| Parameter desc  
---|---  
mediaNameResId| 媒体信息文本描述资源ID。  
Method  
---  
public void setSloganResId(int resId)  
设置竖屏下的默认开屏图片，用于开屏广告素材展示前显示。  
  
  
**Parameters**  


Parameter name| Parameter desc  
---|---  
resId| 默认开屏图片的资源ID。  
Method  
---  
public void setWideSloganResId(int resId)  
设置横屏下的默认开屏图片，用于开屏广告素材展示前显示。  
  
  
**Parameters**  


Parameter name| Parameter desc  
---|---  
resId| 默认开屏图片的资源ID。  
Method  
---  
public boolean isLoading()  
判断广告是否正在加载。  
  
  
**Return**  


Parameter name| Parameter desc  
---|---  
boolean| true 正在加载；false 非加载中状态。  
Method  
---  
public boolean isLoaded()  
判断广告是否已经加载完毕。  
  
  
**Return**  


Parameter name| Parameter desc  
---|---  
boolean| true 已经加载完毕 ；false 未加载完毕。  
Method  
---  
public void setAdDisplayListener([SplashAdDisplayListener](https://developer.huawei.com/consumer/en/doc/development/HMS-References/ads-api-splashaddisplaylistener) adDisplayListener)  
设置开屏广告展示、点击事件的监听器。  
  
  
**Parameters**  


Parameter name| Parameter desc  
---|---  
adDisplayListener| 开屏广告展示监听器。  
Method  
---  
public void setAudioFocusType(int audioFocusType)  
设置视频类开屏广告的的音频焦点抢占策略。  
  
  
**Parameters**  


Parameter name| Parameter desc  
---|---  
audioFocusType| 音频焦点抢占策略。  
Method  
---  
public void resumeView()  
恢复视图。  
Method  
---  
public void pauseView()  
暂停视图。  
Method  
---  
public void destroyView()  
销毁视图。
