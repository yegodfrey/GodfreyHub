---
name: document/cn/HMSCore-Guides/scan-generate-barcode-0000001050995005
title: 构建码生成功能
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/scan-generate-barcode-0000001050995005
---

# 构建码生成功能

Scan Kit支持将字符串转换为一维码或二维码，目前已支持的码制式为EAN-8、EAN-13、UPC-A、UPC-E、Codabar、Code 39、Code 93、Code 128、ITF14、QR、DataMatrix、PDF417、Aztec。您只需要提供字符串、码制式和码图尺寸要求，即可获得相应的码图。在生成QR码前，您还可以在固定区域上传图片，如厂家Logo，生成一些个性化的QR码。  

#### 业务流程

使用[buildBitmap](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/scan-scanutil4-0000001050167699#section56266161243)接口来生成码图，主要业务流程如下：

![](https://media:301775707692783560 "点击放大")

1. App指定码宽度和高度、生成码的字符串和码制式，并初始化[HmsBuildBitmapOption](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/scan-hmsbuildbitmapoption-0000001050165980)对象。
2. App调用华为统一扫码SDK中的[buildBitmap](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/scan-scanutil4-0000001050167699#section56266161243)生成码接口。
3. 华为统一扫码SDK返回生成码图给应用。  

#### 开发步骤

1. 根据实际需求设置生成码的字符串值，指定生成码图的宽度和高度，指定码制式（支持的码制式参见[Scan Kit支持的码制式](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/barcode-formats-supported-0000001050043981)）。

   <br />

   ```
   "Java"
   String content = "QR Code Content";
   int type = HmsScan.QRCODE_SCAN_TYPE;
   int width = 400; 
   int height = 400;
   ```

   ```
   "Kotlin"
   val content = "QR Code Content"
   val type = HmsScan.QRCODE_SCAN_TYPE
   val width = 400
   val height = 400
   ```

   <br />

2. 初始化[HmsBuildBitmapOption](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/scan-hmsbuildbitmapoption-0000001050165980)，设置可选参数。

   <br />

   您可以通过如下方式设置可选参数。当不需要定制如下参数时，可以跳过此步骤。
   * [setBitmapBackgroundColor](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/scan-hmsbuildbitmapoption-creator-0000001050167937#section0886152135112)()：设置码图背景色，如果不调用，默认背景色为白色（Color.WHITE）。
   * [setBitmapColor](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/scan-hmsbuildbitmapoption-creator-0000001050167937#section16658205811016)()：设置码图颜色，如果不调用，默认码图颜色为黑色（Color.BLACK）。
   * [setBitmapMargin](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/scan-hmsbuildbitmapoption-creator-0000001050167937#section234718323116)()：设置码图边框宽度，如果不调用，默认码图边框宽度为1。

   ```
   "Java"
   HmsBuildBitmapOption options = new HmsBuildBitmapOption.Creator().setBitmapBackgroundColor(Color.RED).setBitmapColor(Color.BLUE).setBitmapMargin(3).create();
   ```

   ```
   "Kotlin"
   val options = HmsBuildBitmapOption.Creator().setBitmapBackgroundColor(Color.RED).setBitmapColor(Color.BLUE).setBitmapMargin(3).create()
   ```

   <br />

3. 调用[buildBitmap](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/scan-scanutil4-0000001050167699#section56266161243)接口生成码。

   <br />

   ```
   "Java"
   try {
       // 如果未设置HmsBuildBitmapOption对象，生成二维码参数options置null
       Bitmap qrBitmap = ScanUtil.buildBitmap(content, type, width, height, options);
   } catch (WriterException e) {
       Log.w("buildBitmap", e);
   }
   ```

   ```
   "Kotlin"
   try {
       // 如果未设置HmsBuildBitmapOption对象，生成二维码参数options置null
       val qrBitmap = ScanUtil.buildBitmap(content, type, width, height, options)
   } catch (WriterException e) {
       Log.w("buildBitmap", e)
   }
   ```

   <br />

当输入参数不合法时，会抛出异常，需要显式的捕获[WriterException](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/writerexception-0000001221284651)异常。生成码参数设置请参见[生成码参数建议](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/recommended-set-0000001050043983)。  
![](https://media:301775707692811561)  
生成的码图中可能会包含个人数据，如银行卡号、用户姓名、用户身份证信息等，甚至可能包含更敏感的个人数据。使用HUAWEI Scan Kit生成码图，对于码图内容，以及处理码图中可能包含的个人数据时，您将承担所有责任。在使用HUAWEI提供的生成码图API时，您必须遵守所有关于个人数据处理的规则和规范，尤其是此类数据的安全要求。您还应遵守[《华为开发者服务协议》](https://developer.huawei.com/consumer/cn/doc/start/agreement-0000001052728169)、[《华为API使用协议》](https://developer.huawei.com/consumer/cn/doc/distribution/app/20209)等相关条款。您需确保API不会用于非法活动或侵犯第三方权利，并确保您对API的使用符合所有适用的法律法规。您或任何第三方使用API产生的结果引起的任何争议，您应予以解决，华为不承担任何责任。  
