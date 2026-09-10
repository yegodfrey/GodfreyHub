---
name: document/cn/HMSCore-References/hwrecyclerview-class-hwrecyclerview-0000001052662283
title: HwRecyclerView
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hwrecyclerview-class-hwrecyclerview-0000001052662283
---

# HwRecyclerView

|Class Info|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class HwRecyclerView extends RecyclerView implements ScrollCallback 该类在继承原生RecyclerView基础特性上，增加点击状态栏回滚到列表顶端、挖孔屏手机边距自动适配、自动滚动、OverScroll物理回弹效果、列表删除动效。|

#### Nested Class Summary

|Qualifier and Type|Class Name and Description|
|:-----------------|:-------------------------------|
|public interface|DeleteAnimatorCallback 删除动画所需接口。|

#### XML Attributes

|Qualifier and Type|Attributes Name and Description|
|:-----------------|:---------------------------------------------|
|boolean|hwScrollTopEnable 是否支持点击状态栏回滚到顶部。该属性只在华为手机下生效。|

#### Public Constructor Summary

|Constructor Name|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HwRecyclerView](#ZH-CN_TOPIC_0000001052662283__section17402101411411)(Context context) 通过代码实例化[HwRecyclerView](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hwrecyclerview-class-hwrecyclerview-0000001052662283)对象。|
|public [HwRecyclerView](#ZH-CN_TOPIC_0000001052662283__section497163411416)(Context context, AttributeSet attrs) 通过XML实例化[HwRecyclerView](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hwrecyclerview-class-hwrecyclerview-0000001052662283)对象。|
|public [HwRecyclerView](#ZH-CN_TOPIC_0000001052662283__section9169145812414)(Context context, AttributeSet attrs, int defStyle) 通过XML实例化[HwRecyclerView](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hwrecyclerview-class-hwrecyclerview-0000001052662283)对象，并应用主题中定义的样式。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|static [HwRecyclerView](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hwrecyclerview-class-hwrecyclerview-0000001052662283)|[instantiate](#ZH-CN_TOPIC_0000001052662283__section144581433465)(Context context) 实例化一个[HwRecyclerView](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hwrecyclerview-class-hwrecyclerview-0000001052662283)对象。|
|void|[setScrollTopEnable](#ZH-CN_TOPIC_0000001052662283__section7653731710)(boolean isScrollTopEnable) 设置点击状态栏滚动到列表顶部功能开关。|
|void|[setOverScrollListener](#ZH-CN_TOPIC_0000001052662283__section71921528678)([HwOnOverScrollListener](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hwrecyclerview-interface-hwonoverscrolllistener-0000001052543561) listener) 设置OverScroll回调。|
|[HwOnOverScrollListener](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hwrecyclerview-interface-hwonoverscrolllistener-0000001052543561)|[getOverScrollListener](#ZH-CN_TOPIC_0000001052662283__section738756172)() 获取OverScroll回调。|
|void|[setAutoScrollEnable](#ZH-CN_TOPIC_0000001052662283__section15177623681)(boolean isEnable) 设置自动滚动功能开关。|
|void|[deleteItemsWithAnimator](#ZH-CN_TOPIC_0000001052662283__section764711461783)(List\<Object\> deleteItems, DeleteAnimatorCallback callback) 删除动画接口，使用该接口删除元素呈现华为自定义动画。|
|float|[getDividerAlphaWhenDeleting](#ZH-CN_TOPIC_0000001052662283__section17139183911)(View view, float defaultValue) 使用删除动画时，获取控件对应的分割线透明度。|
|int|[getFirstVisibleViewIndex](#ZH-CN_TOPIC_0000001052662283__section989213281991)() 在删除结束时获取第一个可见控件索引。|
|void|[setSubHeaderDeleteUpdate](#ZH-CN_TOPIC_0000001052662283__section20325851696)(Runnable runnable) 设置SubHeader控件删除更新操作。|
|void|[enableOverScroll](#ZH-CN_TOPIC_0000001052662283__section117414241108)(boolean isEnable) 打开或关闭Over Scroll功能。|
|void|[enablePhysicalFling](#ZH-CN_TOPIC_0000001052662283__section10266134771019)(boolean isEnable) 打开或关闭物理滑动功能。|
|void|[setLinkedViewCallBack](#ZH-CN_TOPIC_0000001052662283__section1589853355915)([HwLinkedViewCallBack](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hwrecyclerview-interface-hwlinkedviewcallback-0000001052222252) linkedViewCallBack) 存在大标题时设置与大标题回调。|
|[HwLinkedViewCallBack](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hwrecyclerview-interface-hwlinkedviewcallback-0000001052222252)|[getLinkedViewCallBack](#ZH-CN_TOPIC_0000001052662283__section18901133365918)() 获取大标题相关回调。|

|Methods Inherited from Class android.view.View|
|:--------------------------------------------------------------------------------------------------------------------------------------|
|onApplyWindowInsets, onLayout, onAttachedToWindow, setPadding, onTouchEvent, onDetachedFromWindow, dispatchTouchEvent, dispatchKeyEvent|
|onApplyWindowInsets, onLayout, onAttachedToWindow, setPadding, onTouchEvent, onDetachedFromWindow, dispatchTouchEvent, dispatchKeyEvent|
|onApplyWindowInsets, onLayout, onAttachedToWindow, setPadding, onTouchEvent, onDetachedFromWindow, dispatchTouchEvent, dispatchKeyEvent|
|onApplyWindowInsets, onLayout, onAttachedToWindow, setPadding, onTouchEvent, onDetachedFromWindow, dispatchTouchEvent, dispatchKeyEvent|
|onApplyWindowInsets, onLayout, onAttachedToWindow, setPadding, onTouchEvent, onDetachedFromWindow, dispatchTouchEvent, dispatchKeyEvent|
|onApplyWindowInsets, onLayout, onAttachedToWindow, setPadding, onTouchEvent, onDetachedFromWindow, dispatchTouchEvent, dispatchKeyEvent|
|onApplyWindowInsets, onLayout, onAttachedToWindow, setPadding, onTouchEvent, onDetachedFromWindow, dispatchTouchEvent, dispatchKeyEvent|
|onApplyWindowInsets, onLayout, onAttachedToWindow, setPadding, onTouchEvent, onDetachedFromWindow, dispatchTouchEvent, dispatchKeyEvent|

|Methods Inherited from Class android.view.ViewGroup|
|:--------------------------------------------------|
|addView, onInterceptTouchEvent|
|addView, onInterceptTouchEvent|

|Methods Inherited from Class androidx.recyclerview.widget.RecyclerView|
|:---------------------------------------------------------------------|
|fling|

|Methods Inherited from Class huawei.android.widget.ScrollCallback|
|:----------------------------------------------------------------|
|scrollToTop|

#### Public Constructors

#### HwRecyclerView(Context context)

|Constructor|
|:--------------------------------------------------------------|
|public HwRecyclerView(Context context) 通过代码实例化HwRecyclerView对象。|

Parameters  

|Name|Description|
|:------|:----------|
|context|控件的上下文。|

#### HwRecyclerView(Context context, AttributeSet attrs)

|Constructor|
|:-----------------------------------------------------------------------------------|
|public HwRecyclerView(Context context, AttributeSet attrs) 通过XML实例化HwRecyclerView对象。|

Parameters  

|Name|Description|
|:------|:-------------|
|context|控件的上下文。|
|attrs|XML中配置的控件属性集合。|

#### HwRecyclerView(Context context, AttributeSet attrs, int defStyleAttr)

|Constructor|
|:-----------------------------------------------------------------------------------------------------------------|
|public HwRecyclerView(Context context, AttributeSet attrs, int defStyleAttr) 通过XML实例化HwRecyclerView对象，并应用主题中定义的样式。|

Parameters  

|Name|Description|
|:-----------|:------------------------------------|
|context|控件的上下文。|
|attrs|XML中配置的控件属性集合。|
|defStyleAttr|通过XML实例化HwRecyclerView对象，并应用主题中定义的样式。|

#### Public Methods

#### instantiate

|Method|
|:-------------------------------------------------------------------------------|
|public static HwRecyclerView instantiate(Context context) 实例化一个HwRecyclerView对象。|

Parameters  

|Name|Description|
|:------|:----------|
|context|控件的上下文。|

Returns  

|Type|Description|
|:-------------|:---------------------|
|HwRecyclerView|实例化多态对象，若未适配多态，可能返回为空。|

#### setScrollTopEnable

|Method|
|:-----------------------------------------------------------------------------------------|
|public void setScrollTopEnable(boolean isScrollTopEnable) 设置点击状态栏滚动到列表顶部功能开关。该功能只在华为手机下生效。|

Parameters  

|Name|Description|
|:----------------|:----------------|
|isScrollTopEnable|状态栏滚动到列表顶部功能是否打开。|

#### setOverScrollListener

|Method|
|:---------------------------------------------------------------------------------------|
|public void setOverScrollListener(HwOnOverScrollListener listener) 设置OverScroll物理回弹状态回调。|

Parameters  

|Name|Description|
|:-------|:----------------|
|listener|OverScroll状态更改回调。|

#### getOverScrollListener

|Method|
|:--------------------------------------------------------------------|
|public HwOnOverScrollListener getOverScrollListener() 获取OverScroll回调。|

Returns  

|Type|Description|
|:---------------------|:---------------------|
|HwOnOverScrollListener|注册到此控件的OverScroll回调接口。|

#### setAutoScrollEnable

|Method|
|:------------------------------------------------------------|
|public void setAutoScrollEnable(boolean isEnable) 设置自动滚动功能开关。|

Parameters  

|Name|Description|
|:-------|:----------|
|isEnable|自动滚动功能是否打开。|

#### deleteItemsWithAnimator

|Method|
|:--------------------------------------------------------------------------------------------------------------------------|
|public void deleteItemsWithAnimator(List\<Object\> deleteItems, DeleteAnimatorCallback callback) 删除动画接口，使用该接口删除元素呈现华为自定义动画。|

Parameters  

|Name|Description|
|:----------|:-----------|
|deleteItems|待删除表项列表。|
|callback|删除动画所需的回调接口。|

#### getDividerAlphaWhenDeleting

|Method|
|:---------------------------------------------------------------------------------------------|
|public float getDividerAlphaWhenDeleting(View view, float defaultValue) 使用删除动画时，获取控件对应的分割线透明度。|

Parameters  

|Name|Description|
|:-----------|:----------|
|view|待删除控件对象。|
|defaultValue|默认透明度值。|

Returns  

|Type|Description|
|:----|:-----------|
|float|控件对应的分割线透明度。|

#### getFirstVisibleViewIndex

|Method|
|:-------------------------------------------------------|
|public int getFirstVisibleViewIndex() 在删除结束时获取第一个可见控件索引。|

Returns  

|Type|Description|
|:---|:----------------|
|int|返回删除结束时第一个可见控件索引。|

#### setSubHeaderDeleteUpdate

|Method|
|:---------------------------------------------------------------------------|
|public void setSubHeaderDeleteUpdate(Runnable runnable) 设置SubHeader控件删除更新操作。|

Parameters  

|Name|Description|
|:-------|:-----------------|
|runnable|SubHeader控件删除更新操作。|

#### enableOverScroll

|Method|
|:-----------------------------------------------------------------|
|public void enableOverScroll(boolean isEnable) 打开或关闭Over Scroll功能。|

Parameters  

|Name|Description|
|:-------|:-----------------|
|isEnable|是否打开Over Scroll功能。|

#### enablePhysicalFling

|Method|
|:-------------------------------------------------------------|
|public void enablePhysicalFling(boolean isEnable) 打开或关闭物理滑动功能。|

Parameters  

|Name|Description|
|:-------|:----------|
|isEnable|是否打开物理滑动功能。|

#### setLinkedViewCallBack

|Method|
|:-----------------------------------------------------------------------------------------|
|public void setLinkedViewCallBack(HwLinkedViewCallBack linkedViewCallBack) 存在大标题时设置与大标题回调。|

Parameters  

|Name|Description|
|:-------------------|:-----------------------------|
|HwLinkedViewCallBack|HwRecyclerview与AppBar的状态变化的回调。|

#### getLinkedViewCallBack

|Method|
|:-------------------------------------------------------------|
|public HwLinkedViewCallBack getLinkedViewCallBack() 获取大标题相关回调。|

Returns  

|Type|Description|
|:-------------------|:-----------------------------|
|HwLinkedViewCallBack|HwRecyclerview与AppBar的状态变化的回调。|

