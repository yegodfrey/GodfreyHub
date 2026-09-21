---
name: document/cn/HMSCore-References/account-support-hwid-ui-huaweiidauthbutton-0000001050048570
title: HuaweiIdAuthButton
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/account-support-hwid-ui-huaweiidauthbutton-0000001050048570
---

# HuaweiIdAuthButton

* 支持的场景：手机、平板、华为智慧屏、车机。
* 支持的OS：EMUI 3.0及以上、Android 4.4及以上。

|Class Info|
|:----------------------------------------------------------------------------------|
|public class HuaweiIdAuthButton extends RelativeLayout 华为帐号提供的一个按钮控件，此类展示华为风格的登录按钮。|

## Public Field Summary

|Qualifier and Type|Field and Description|
|:-----------------|:-----------------------------------------------------------------|
|int|[COLOR_POLICY_RED](#section434915475404) 按钮颜色风格为红色。|
|int|[COLOR_POLICY_WHITE](#section166121556164013) 按钮颜色风格为白色。|
|int|[COLOR_POLICY_WHITE_WITH_BORDER](#section6348452414) 按钮颜色风格为带描边白色。|
|int|[COLOR_POLICY_BLACK](#section168351920134714) 按钮颜色风格为黑色。|
|int|[COLOR_POLICY_GRAY](#section13651142712474) 按钮颜色风格为灰色。|
|int|[THEME_NO_TITLE](#section132832036194711) 按钮主题为不展示标题。|
|int|[THEME_FULL_TITLE](#section10358184212473) 按钮主题为展示图标+标题。|
|int|[CORNER_RADIUS_LARGE](#section865914492477) 按钮圆角设置，大圆角。|
|int|[CORNER_RADIUS_MEDIUM](#section729205614472) 按钮圆角设置，中等圆角。|
|int|[CORNER_RADIUS_SMALL](#section925923194818) 按钮圆角设置，小圆角。|

## Public Constructor Summary

|Constructor Name|
|:-----------------------------------------------------------------------------------------------------------------------------------------------|
|[HuaweiIdAuthButton](#section11682356316)(Context context) 构造方法，创建HuaweiIdAuthButton实例。|
|[HuaweiIdAuthButton](#section153981337172119)(Context context, AttributeSet attributeSet) 构造方法，创建HuaweiIdAuthButton实例。|
|[HuaweiIdAuthButton](#section14358345182117)(Context context, AttributeSet attributeSet, int defStyleAttr) 构造方法，创建HuaweiIdAuthButton实例，可以指定默认样式。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
|boolean|[performClick](#section12081731113516)() 点击事件。|
|void|[setColorPolicy](#section54460127220)(int colorPolicy) 设置配色方案。|
|void|[setEnabled](#section289432392214)(boolean flag) 设置是否可以点击。|
|void|[setOnClickListener](#section880532132218)(View.OnClickListener onClickListener) 监听点击事件。|
|void|[setTheme](#section1991133932216)(int theme) 设置HuaweiIdAuthButton的主题。|
|void|[setUIMode](#section6838134710221)(int theme, int colorPolicy, int cornerRadius) 设置HuaweiIdAuthButton的主题、配色方案和圆角半径。|
|void|[setCornerRadius](#section4374105510227)(int cornerRadiusPx) 设置圆角半径，单位：px，可以是常量值CORNER_RADIUS_LARGE、CORNER_RADIUS_MEDIUM、CORNER_RADIUS_SMALL。|
|int|[getTheme](#section535413532314)() 获取按钮主题。|
|int|[getColorPolicy](#section96554116234)() 获取配色方案。|
|int|[getCornerRadius](#section1846181862314)() 获取圆角半径，单位：px，可以是常量值CORNER_RADIUS_LARGE、CORNER_RADIUS_MEDIUM、CORNER_RADIUS_SMALL。|

## Public Fields

### COLOR_POLICY_RED

|Field|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int COLOR_POLICY_RED 该常量表示HuaweiIdAuthButton的颜色风格为红色。 另请参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-apk-constant-values-0000001050048468#section15718144113915)|

### COLOR_POLICY_WHITE

|Field|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int COLOR_POLICY_WHITE 该常量表示HuaweiIdAuthButton的颜色风格为白色。 另请参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-apk-constant-values-0000001050048468#section15718144113915)|

### COLOR_POLICY_WHITE_WITH_BORDER

|Field|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int COLOR_POLICY_WHITE_WITH_BORDER 该常量表示HuaweiIdAuthButton的颜色风格为带描边白色。 另请参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-apk-constant-values-0000001050048468#section15718144113915)|

### COLOR_POLICY_BLACK

|Field|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int COLOR_POLICY_BLACK 该常量表示HuaweiIdAuthButton的颜色风格为黑色。 另请参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-apk-constant-values-0000001050048468#section15718144113915)|

### COLOR_POLICY_GRAY

|Field|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int COLOR_POLICY_GRAY 该常量表示HuaweiIdAuthButton的颜色风格为灰色。 另请参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-apk-constant-values-0000001050048468#section15718144113915)|

### THEME_NO_TITLE

|Field|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int THEME_NO_TITLE 该常量表示HuaweiIdAuthButton主题为不展示标题。 另请参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-apk-constant-values-0000001050048468#section15718144113915)|

### THEME_FULL_TITLE

|Field|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int THEME_FULL_TITLE 该常量表示HuaweiIdAuthButton主题为展示图标+标题。 另请参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-apk-constant-values-0000001050048468#section15718144113915)|

### CORNER_RADIUS_LARGE

|Field|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int CORNER_RADIUS_LARGE 该常量表示HuaweiIdAuthButton圆角设置，大圆角。 另请参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-apk-constant-values-0000001050048468#section15718144113915)|

### CORNER_RADIUS_MEDIUM

|Field|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int CORNER_RADIUS_MEDIUM 该常量表示HuaweiIdAuthButton圆角设置，中等圆角。 另请参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-apk-constant-values-0000001050048468#section15718144113915)|

### CORNER_RADIUS_SMALL

|Field|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int CORNER_RADIUS_SMALL 该常量表示HuaweiIdAuthButton圆角设置，小圆角。 另请参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/account-apk-constant-values-0000001050048468#section15718144113915)|

## Public Constructors

### HuaweiIdAuthButton(Context context)

|Constructor|
|:---------------------------------------------------------------|
|HuaweiIdAuthButton(Context context) 构造方法，创建HuaweiIdAuthButton实例。|

**Parameters**

|Name|Description|
|:------|:-------------------------------|
|context|要创建HuaweiIdAuthButton实例的Context。|

### HuaweiIdAuthButton(Context context, AttributeSet attributeSet)

|Constructor|
|:------------------------------------------------------------------------------------------|
|HuaweiIdAuthButton(Context context, AttributeSet attributeSet) 构造方法，创建HuaweiIdAuthButton实例。|

**Parameters**

|Name|Description|
|:-----------|:-------------------------------|
|context|要创建HuaweiIdAuthButton实例的Context。|
|attributeSet|存有View在xml布局文件中的自定义的属性。|

### HuaweiIdAuthButton(Context context, AttributeSet attributeSet, int defStyleAttr)

|Constructor|
|:---------------------------------------------------------------------------------------------------------------------|
|HuaweiIdAuthButton(Context context, AttributeSet attributeSet, int defStyleAttr) 构造方法，创建HuaweiIdAuthButton实例，可以指定默认样式。|

**Parameters**

|Name|Description|
|:-----------|:-----------------------------------|
|context|要创建HuaweiIdAuthButton实例的Context。|
|attributeSet|存有View在xml布局文件中的自定义的属性。|
|defStyleAttr|当前theme中包含的指向View的样式资源的属性（0表示此参数无效）。|

## Public Methods

### performClick

|Method|
|:----------------------------------|
|public boolean performClick() 点击事件。|

**Returns**

|Type|Description|
|:------|:----------------------------------|
|boolean|是否已点击按钮。 * true：已点击按钮 * false：未点击按钮|

### setColorPolicy

|Method|
|:--------------------------------------------------|
|public void setColorPolicy(int colorPolicy) 设置配色方案。|

**Parameters**

|Name|Description|
|:----------|:----------|
|colorPolicy|配色方案。|

### setEnabled

|Method|
|:----------------------------------------------|
|public void setEnabled(boolean flag) 设置按钮是否可点击。|

**Parameters**

|Name|Description|
|:---|:------------------------------------|
|flag|设置是否可点击的标志位。 * true：可以点击 * false：不可点击|

### setOnClickListener

|Method|
|:---------------------------------------------------------------------------|
|public void setOnClickListener(View.OnClickListener onClickListener) 监听点击事件。|

**Parameters**

|Name|Description|
|:--------------|:----------|
|onClickListener|点击事件监听器。|

### setTheme

|Method|
|:-------------------------------------------------------|
|public void setTheme(int theme) 设置HuaweiIdAuthButton的主题。|

**Parameters**

|Name|Description|
|:----|:-----------------------------------------------------------------------------------------------|
|theme|主题。 * 0：[THEME_NO_TITLE](#section132832036194711) * 1：[THEME_FULL_TITLE](#section10358184212473)|

### setUIMode

|Method|
|:-----------------------------------------------------------------------------------------------------|
|public void setUIMode(int theme, int colorPolicy, int cornerRadius) 设置HuaweiIdAuthButton的主题、配色方案和圆角半径。|

**Parameters**

|Name|Description|
|:-----------|:----------|
|theme|主题。|
|colorPolicy|配色方案。|
|cornerRadius|圆角半径。|

### setCornerRadius

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------|
|public void setCornerRadius(int cornerRadiusPx) 设置圆角半径，单位：px，可以是常量值CORNER_RADIUS_LARGE、CORNER_RADIUS_MEDIUM、CORNER_RADIUS_SMALL。|

**Parameters**

|Name|Description|
|:-------------|:----------|
|cornerRadiusPx|圆角半径。|

### getTheme

|Method|
|:--------------------------------------------|
|public int getTheme() 获取HuaweiIdAuthButton主题。|

### getColorPolicy

|Method|
|:----------------------------------|
|public int getColorPolicy() 获取配色方案。|

### getCornerRadius

|Method|
|:------------------------------------------------------------------------------------------------------------|
|public int getCornerRadius() 获取圆角半径，单位：px，可以是常量值CORNER_RADIUS_LARGE、CORNER_RADIUS_MEDIUM、CORNER_RADIUS_SMALL。|

