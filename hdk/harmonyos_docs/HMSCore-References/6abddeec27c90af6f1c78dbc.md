---
name: document/cn/HMSCore-References/hwscrollbarview-class-hwscrollbarview-0000001052463589
title: HwScrollbarView
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/hwscrollbarview-class-hwscrollbarview-0000001052463589
---

# HwScrollbarView

|Class Info|
|:-----------------------------------------------------------------------------------------------|
|public class HwScrollbarView extends View 该类是华为的新型滚动条，继承了View，可以通过布局调整滚动条的宽度，高度和位置，使其比系统滚动条更加灵活。|

## Nested Class Summary

|Qualifier and Type|Class Name and Description|
|:-----------------|:----------------------------------------------------------------------------|
|public interface|OnTouchOffsetListener 该界面是一个快速滚动的回调，通过此接口类，您可以快速滚动滚动条，并监视滚动条的滚动方向，滚动范围和滚动偏移量。|

## XML Attributes

|Qualifier and Type|Attributes Name and Description|
|:-----------------|:------------------------------|
|drawable|hwScrollThumb 定义可绘制的垂直滚动条滑块。|
|drawable|hwScrollTrack 定义可绘制的垂直滚动条轨道。|
|color|hwScrollThumbTint 指定滚动条滑块的着色颜色。|
|color|hwScrollTrackTint 指定滚动条轨道的着色颜色。|
|dimension|hwMinThumbHeight 定义滚动条滑块的最小高度。|
|dimension|hwMinThumbWidth 定义滚动条滑块的最小宽度。|

## Style Summary

|Style Name|Style Description|
|:--------------------------------|:----------------|
|Widget.Emui.HwScrollbarView|滚动条默认风格。|
|Widget.Emui.HwScrollbarView.Light|滚动条浅色风格。|

## Public Constructor Summary

|Constructor Name|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [HwScrollbarView](#ZH-CN_TOPIC_0000001052463589__section46111913169)(Context context) 通过代码实例化[HwScrollbarView](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hwscrollbarview-class-hwscrollbarview-0000001052463589)对象。|
|public [HwScrollbarView](#ZH-CN_TOPIC_0000001052463589__section7659154191615)(Context context, AttributeSet attrs) 通过XML实例化[HwScrollbarView](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hwscrollbarview-class-hwscrollbarview-0000001052463589)对象。|
|public [HwScrollbarView](#ZH-CN_TOPIC_0000001052463589__section7808800171)(Context context, AttributeSet attrs, int defStyleAttr) 通过XML实例化[HwScrollbarView](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hwscrollbarview-class-hwscrollbarview-0000001052463589)对象，并应用主题中定义的样式。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|static [HwScrollbarView](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hwscrollbarview-class-hwscrollbarview-0000001052463589)|[instantiate](#ZH-CN_TOPIC_0000001052463589__section2252184516171)(Context context) 实例化[HwScrollbarView](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/hwscrollbarview-class-hwscrollbarview-0000001052463589)对象。|
|void|[setOnTouchOffsetListener](#ZH-CN_TOPIC_0000001052463589__section53131477185)(OnTouchOffsetListener listener) 设置滚动条拖拽快速滚动偏移量回调。|
|void|[setScrollableView](#ZH-CN_TOPIC_0000001052463589__section2099383517187)(View view, boolean isScrollableViewSetOnTouchListener) 设置滚动条绑定的可滚动控件，isScrollableViewSetOnTouchListener表示是否回调可滚动控件的触摸事件。|
|View|[getScrollableView](#ZH-CN_TOPIC_0000001052463589__section15648211161911)() 获取滚动条绑定的可滚动控件。|
|void|[onScrollableViewTouchEvent](#ZH-CN_TOPIC_0000001052463589__section10729104710193)(View scrollableView, MotionEvent touchEvent) 对可滚动控件的触摸事件做实时处理。|

|Methods Inherited from Class android.view.View|
|:-----------------------------------------------------------------------------------------------------------------|
|onRtlPropertiesChanged, onAttachedToWindow, onLayout, verifyDrawable, onTouchEvent, onConfigurationChanged, onDraw|
|onRtlPropertiesChanged, onAttachedToWindow, onLayout, verifyDrawable, onTouchEvent, onConfigurationChanged, onDraw|
|onRtlPropertiesChanged, onAttachedToWindow, onLayout, verifyDrawable, onTouchEvent, onConfigurationChanged, onDraw|
|onRtlPropertiesChanged, onAttachedToWindow, onLayout, verifyDrawable, onTouchEvent, onConfigurationChanged, onDraw|
|onRtlPropertiesChanged, onAttachedToWindow, onLayout, verifyDrawable, onTouchEvent, onConfigurationChanged, onDraw|
|onRtlPropertiesChanged, onAttachedToWindow, onLayout, verifyDrawable, onTouchEvent, onConfigurationChanged, onDraw|
|onRtlPropertiesChanged, onAttachedToWindow, onLayout, verifyDrawable, onTouchEvent, onConfigurationChanged, onDraw|

## Public Constructors

### HwScrollbarView(Context context)

|Constructor|
|:----------------------------------------------------------------|
|public HwScrollbarView(Context context) 通过代码实例化HwScrollbarView对象。|

**Parameters**

|Name|Description|
|:------|:----------|
|context|控件的上下文。|

### HwScrollbarView(Context context, AttributeSet attrs)

|Constructor|
|:-------------------------------------------------------------------------------------|
|public HwScrollbarView(Context context, AttributeSet attrs) 通过XML实例化HwScrollbarView对象。|

**Parameters**

|Name|Description|
|:------|:-------------|
|context|控件的上下文。|
|attrs|XML中配置的控件属性集合。|

### HwScrollbarView(Context context, AttributeSet attrs, int defStyleAttr)

|Constructor|
|:-------------------------------------------------------------------------------------------------------------------|
|public HwScrollbarView(Context context, AttributeSet attrs, int defStyleAttr) 通过XML实例化HwScrollbarView对象，并应用主题中定义的样式。|

**Parameters**

|Name|Description|
|:-----------|:--------------------------|
|context|控件的上下文。|
|attrs|XML中配置的控件属性集合。|
|defStyleAttr|当前主题中配置的控件默认样式，为0表示不应用默认样式。|

## Public Methods

### instantiate

|Method|
|:-------------------------------------------------------------------------------|
|public static HwScrollbarView instantiate(Context context) 实例化HwScrollbarView对象。|

**Parameters**

|Name|Description|
|:------|:----------|
|context|控件的上下文。|

**Returns**

|Type|Description|
|:--------------|:---------------------|
|HwScrollbarView|实例化多态对象，若未适配多态，可能返回为空。|

### setOnTouchOffsetListener

|Method|
|:-------------------------------------------------------------------------------------|
|public void setOnTouchOffsetListener(OnTouchOffsetListener listener) 设置滚动条拖拽快速滚动偏移量回调。|

**Parameters**

|Name|Description|
|:-------|:-------------|
|listener|滚动条位置更改时通知的回调。|

### setScrollableView

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setScrollableView(View view, boolean isScrollableViewSetOnTouchListener) 设置滚动条绑定的可滚动控件，isScrollableViewSetOnTouchListener表示是否回调可滚动控件的触摸事件。|

**Parameters**

|Name|Description|
|:---------------------------------|:------------------------------------------|
|view|滚动控件。|
|isScrollableViewSetOnTouchListener|scrollableView setOnTouchListener是否默认为true。|

### getScrollableView

|Method|
|:---------------------------------------------|
|public View getScrollableView() 获取滚动条绑定的可滚动控件。|

**Returns**

|Type|Description|
|:---|:----------|
|View|滚动控件。|

### onScrollableViewTouchEvent

|Method|
|:----------------------------------------------------------------------------------------------------|
|public void onScrollableViewTouchEvent(View scrollableView, MotionEvent touchEvent) 对可滚动控件的触摸事件做实时处理。|

**Parameters**

|Name|Description|
|:-------------|:------------------------------------------------------|
|scrollableView|scrollableView已绑定（例如：ListView、ScrollView、RecyclerView）。|
|touchEvent|scrollableView触摸事件。|

