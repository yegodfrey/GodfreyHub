---
name: document/cn/HMSCore-References/scan-hmsbuildbitmapoption-creator-0000001050167937
title: HmsBuildBitmapOption.Creator
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/scan-hmsbuildbitmapoption-creator-0000001050167937
---

# HmsBuildBitmapOption.Creator

|Class Info|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static class Creator 用于创建生成码参数选项[HmsBuildBitmapOption](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/scan-hmsbuildbitmapoption-0000001050165980)的Creator类。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[HmsBuildBitmapOption](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/scan-hmsbuildbitmapoption-0000001050165980)|[create](#section08851056175016)() 创建设置生成码参数选项HmsBuildBitmapOption的方法。|
|HmsBuildBitmapOption.Creator|[setBitmapBackgroundColor](#section0886152135112)(int color) 设置生成码图背景。|
|HmsBuildBitmapOption.Creator|[setBitmapColor](#section16658205811016)(int color) 设置生成码图颜色。|
|HmsBuildBitmapOption.Creator|[setBitmapMargin](#section234718323116)(int margin) 设置生成码图边框大小。|
|HmsBuildBitmapOption.Creator|[setQRErrorCorrection](#section7401194916325)([ErrorCorrectionLevel](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/scan-hmsbuildbitmapoption-ecl-0000001280602542) level) 设置QR码纠错率。|
|HmsBuildBitmapOption.Creator|[setQRLogoBitmap](#section273415507278)(Bitmap bitmap) 设置QR码中心的图标。|

#### Public Methods

#### create

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public HmsBuildBitmapOption create() 创建设置生成码参数选项[HmsBuildBitmapOption](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/scan-hmsbuildbitmapoption-0000001050165980)的方法。|

Returns  

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|
|[HmsBuildBitmapOption](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/scan-hmsbuildbitmapoption-0000001050165980)|生成码参数选项HmsBuildBitmapOption。|

#### setBitmapBackgroundColor

|Method|
|:--------------------------------------------------------------------------------|
|public HmsBuildBitmapOption.Creator setBitmapBackgroundColor(int color) 设置生成码图背景。|

Parameters  

|Name|Description|
|:----|:----------|
|color|生成码图背景色值。|

Returns  

|Type|Description|
|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HmsBuildBitmapOption.Creator|用于创建生成码参数选项[HmsBuildBitmapOption](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/scan-hmsbuildbitmapoption-0000001050165980)的Creator类。|

#### setBitmapColor

|Method|
|:----------------------------------------------------------------------|
|public HmsBuildBitmapOption.Creator setBitmapColor(int color) 设置生成码图颜色。|

Parameters  

|Name|Description|
|:----|:----------|
|color|生成码图颜色值。|

Returns  

|Type|Description|
|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HmsBuildBitmapOption.Creator|用于创建生成码参数选项[HmsBuildBitmapOption](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/scan-hmsbuildbitmapoption-0000001050165980)的Creator类。|

#### setBitmapMargin

|Method|
|:--------------------------------------------------------------------------|
|public HmsBuildBitmapOption.Creator setBitmapMargin(int margin) 设置生成码图边框大小。|

Parameters  

|Name|Description|
|:-----|:----------|
|margin|边框大小值。|

Returns  

|Type|Description|
|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HmsBuildBitmapOption.Creator|用于创建生成码参数选项[HmsBuildBitmapOption](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/scan-hmsbuildbitmapoption-0000001050165980)的Creator类。|

#### setQRErrorCorrection

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public HmsBuildBitmapOption.Creator setQRErrorCorrection([ErrorCorrectionLevel](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/scan-hmsbuildbitmapoption-ecl-0000001280602542) level) 设置QR码纠错率。此接口对应的纠错率为H，数值为30%。|

Parameters  

|Name|Description|
|:----|:------------------------------------------------|
|level|QR码纠错等级。纠错等级和数值如下： * L：7% * M：15% * Q：25% * H：30%|

Returns  

|Type|Description|
|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HmsBuildBitmapOption.Creator|用于创建生成码参数选项[HmsBuildBitmapOption](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/scan-hmsbuildbitmapoption-0000001050165980)的Creator类。|

#### setQRLogoBitmap

|Method|
|:-------------------------------------------------------------------------------------------------|
|public HmsBuildBitmapOption.Creator setQRLogoBitmap(Bitmap bitmap) 设置QR码中心的图标。 说明： 此接口只适用QR码生成时调用。|

Parameters  

|Name|Description|
|:-----|:----------|
|bitmap|QR码中心的图标。|

Returns  

|Type|Description|
|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|HmsBuildBitmapOption.Creator|用于创建生成码参数选项[HmsBuildBitmapOption](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/scan-hmsbuildbitmapoption-0000001050165980)的Creator类。|

