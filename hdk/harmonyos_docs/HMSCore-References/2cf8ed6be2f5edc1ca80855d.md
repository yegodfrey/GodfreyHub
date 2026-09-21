---
name: document/cn/HMSCore-References/androidsup-hwrsprecyclerview-class-0000001220867812
title: HwRspRecyclerView
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/androidsup-hwrsprecyclerview-class-0000001220867812
---

# HwRspRecyclerView

|Class Info|
|:----------------------------------------------------------------------------------------------------------------|
|public class HwRspRecyclerView extends RecyclerView 该类是华为响应式RecyclerView，继承了原生的RecyclerView，可以设置列数控制折叠手机展开态的显示效果。|

## Xml Attributes

|Qualifier and Type|Attributes Name and Description|
|:-----------------|:-------------------------------------------------|
|boolean|expandStateEnableRsp 使能响应式能力配置。|
|integer|expandStateSpanCount 响应式控件展开态列数设置。|
|dimension|expandStateItemGap 响应式控件展开态每列元素之间间距设置。|
|dimension|expandStateFirstRowTop 响应式控件展开态首行上间距|
|integer|expandStateGapType 响应式控件展开态列间距类型：0代表n个间距；1代表n-1个间距|
|dimension|expandStateItemBottom 响应式控件展开态元素下间距|
[**表1**]

## Public Constructor Summary

|Constructor Name|
|:-----------------------------------------------------------------------------------------------------------------------|
|public HwRspRecyclerView(Context context) 通过代码实例化HwRspRecyclerView对象。|
|public HwRspRecyclerView(Context context, AttributeSet attrs) 通过XML实例化HwRspRecyclerView对象。|
|public HwRspRecyclerView(Context context, AttributeSet attrs, int defStyleAttr) 通过XML实例化HwRspRecyclerView对象，并应用主题中定义的样式。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:------------------------------------------------------------------------|
|void|setRspEnable(boolean isRspEnable) 设置响应式控件是否生效。|
|void|setExpandStateSpanCount(int expandStateSpanCount) 设置展开态列数|
|void|setExpandStateItemGap(int expandStateItemGap) 设置展开态列间距|
|void|setFirstRowTop(int firstRowTop) 设置展开态首行top值|
|void|setExpandStateGapType(int expandStateGapType) 设置展开态间距类型：0代表n个间距；1代表n-1个间距|
|void|setItemBottom(int itemBottom) 设置展开态item底部bottom值|

## Public Constructors

### HwRspRecyclerView(Context context)

|Constructor|
|:--------------------------------------------------------------------|
|public HwRspRecyclerView(Context context) 通过代码实例化HwRspRecyclerView对象。|

**Parameters**

|Name|D**esc**ription|
|:------|:--------------|
|context|控件的上下文。|

### HwRspRecyclerView(Context context, AttributeSet attrs)

|Constructor|
|:-----------------------------------------------------------------------------------------|
|public HwRspRecyclerView(Context context, AttributeSet attrs) 通过XML实例化HwRspRecyclerView对象。|

**Parameters**

|Name|D**esc**ription|
|:------|:--------------|
|context|控件的上下文。|
|attrs|XML中配置的控件属性集合。|

### HwRspRecyclerView(Context context, AttributeSet attrs, int defStyleAttr)

|Constructor|
|:-----------------------------------------------------------------------------------------------------------------------|
|public HwRspRecyclerView(Context context, AttributeSet attrs, int defStyleAttr) 通过XML实例化HwRspRecyclerView对象，并应用主题中定义的样式。|

**Parameters**

|Name|D**esc**ription|
|:-----------|:--------------------------|
|context|控件的上下文。|
|attrs|XML中配置的控件属性集合。|
|defStyleAttr|当前主题中配置的控件默认样式，为0表示不应用默认样式。|

## Public Methods

### setRspEnable

|Method|
|:---------------------------------------------------------|
|public void setRspEnable(boolean isRspEnable) 设置响应式控件是否生效。|

**Parameters**

|Name|D**esc**ription|
|:----------|:--------------|
|isRspEnable|控件是否生效。|

## setExpandStateSpanCount

|Method|
|:--------------------------------------------------------------------|
|public void setExpandStateSpanCount(int expandStateSpanCount) 设置展开态列数|

**Parameters**

|Name|D**esc**ription|
|:-------------------|:--------------|
|expandStateSpanCount|展开态列数|

## setExpandStateItemGap

|Method|
|:-----------------------------------------------------------------|
|public void setExpandStateItemGap(int expandStateItemGap) 设置展开态列间距|

**Parameters**

|Name|D**esc**ription|
|:-----------------|:--------------|
|expandStateItemGap|展开态列间距|

## setFirstRowTop

|Method|
|:------------------------------------------------------|
|public void setFirstRowTop(int firstRowTop) 设置展开态首行top值|

**Parameters**

|Name|D**esc**ription|
|:----------|:--------------|
|firstRowTop|展开态首行top值|

## setExpandStateGapType

|Method|
|:------------------------------------------------------------------------------------|
|public void setExpandStateGapType(int expandStateGapType) 设置展开态间距类型：0代表n个间距；1代表n-1个间距|

**Parameters**

|Name|D**esc**ription|
|:-----------------|:---------------------|
|expandStateGapType|间距类型：0代表n个间距；1代表n-1个间距|

## setItemBottom

|Method|
|:-----------------------------------------------------------|
|public void setItemBottom(int itemBottom) 设置展开态item底部bottom值|

**Parameters**

|Name|D**esc**ription|
|:---------|:---------------|
|itemBottom|展开态item底部bottom值|

