---
name: document/cn/HMS-Guides/scan-bitmap4
title: Bitmap Mode
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/scan-bitmap4
source: portal
---

Bitmap Mode需要开发者自行控制相机。提供相机扫码和导入图片扫码两种模式，需要开发者在调用扫码接口时设置。针对两种模式，Scan Kit扫码算法有针对性优化，正确设置您的使用模式将提升实际体验。

# 1\. 相机扫码模式

**业务流程**

使用Bitmap相机扫码模式的主要业务流程如下：

1\. 用户打开应用发起扫码请求。

2\. 校验是否有相机权限。

3\. 权限验证通过后，调用HMS SDK的“decodeWithBitmap”扫码接口。

4\. 返回扫码结果。

5\. 判断扫码结果是否有效，结果有效则处理扫码结果。如果接收到的“zoomValue”大于1.0，代表当前扫描的码过小，需要按照这个值调整焦距后重新扫码。

6\. 应用封装扫码结果返回给用户。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221164846.42809515753303042402639904144227:50510401072536:2800:A43E9CB7AD871CA60310402621DDCCD8667AE12BD86D5F623AB4EFA9CC139560.png)

**开发步骤**

1\. 获取相机一帧图像。
    
    
    复制
      
        1. YuvImage yuv = new YuvImage(data, ImageFormat.NV21, camera.getParameters().getPreviewSize().width, 
        2.         camera.getParameters().getPreviewSize().height, null); 
        3. ByteArrayOutputStream stream = new ByteArrayOutputStream(); 
        4. yuv.compressToJpeg(new Rect(0, 0, camera.getParameters().getPreviewSize().width, 
        5.         camera.getParameters().getPreviewSize().height), 100, stream);
    
    

2\. 将相机数据转化为Bitmap。
    
    
    复制
      
        1. Bitmap bitmap = BitmapFactory.decodeByteArray(stream.toByteArray(), 0,stream.toByteArray().length);
    
    

3\. 初始化“HmsScanAnalyzerOptions”，设置支持识别的码制式，设置Bitmap模式为相机扫码模式。

    开发者可以通过如下方式设置可选参数，不需要定制如下参数时，可以跳过此步骤：

  * setHmsScanTypes()：设置码制式，默认识别[Scan Kit支持的码制式](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/scan-code-4)，指定特定码制式，可以提高扫码速度。

  * setPhotoMode(false)：设置Bitmap模式，默认为相机扫码模式。



    
    
    复制
      
        1. //“QRCODE_SCAN_TYPE”和“DATAMATRIX_SCAN_TYPE”表示只扫描QR和Data Matrix的码 
        2. HmsScanAnalyzerOptions options = new HmsScanAnalyzerOptions.Creator().setHmsScanTypes(HmsScan.QRCODE_SCAN_TYPE, HmsScan.DATAMATRIX_SCAN_TYPE).setPhotoMode(false).create();
    
    

4\. 调用“ScanUtil”的静态方法“decodeWithBitmap”方法发起扫码请求并获取扫码结果对象HmsScan，其中包含的信息请参考[码值解析](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/scan-value-4)。

  * 如果开发者不需要指定只检测特定的码制式，此处的“options”可以置为“null”。

  * 如果用户扫描的码过小，Scan Kit会返回调整相机焦距的指令给App，需要App调整相机以便于获取到清晰的码图。



    
    
    复制
      
        1. HmsScan[] hmsScans = ScanUtil.decodeWithBitmap(BitmapActivity.this, bitmap, options);  
        2. //扫码成功时处理解码结果 
        3. if (hmsScans != null && hmsScans.length > 0 && !TextUtils.isEmpty(hmsScans[0].getOriginalValue())) {  
        4.     //展示扫码结果 
        5.     showResult(hmsScans); 
        6. } 
        7. //zoomValue大于1.0时，根据getZoomValue()调整焦距重新扫码 
        8. if (hmsScans != null && hmsScans.length > 0 && TextUtils.isEmpty(hmsScans[0].getOriginalValue()) && hmsScans[0].getZoomValue() != 1.0) { 
        9.     //设置相机焦距，相机重新生成Bitmap继续扫码(convertZoomInt()将放大倍数转化为相机接收的焦距参数） 
        10.     params = camera.getParameters();
        11.     params.setZoom(convertZoomInt(hmsScans[0].getZoomValue())); 
        12.     camera.setParameters(params); 
        13. }
    
    

convertZoomInt()函数实现示例代码：
    
    
    复制
      
        1. public int convertZoomInt(double zoomValue) {     
        2.     List<Integer> allZoomRatios = parameters.getZoomRatios();     
        3.     float maxZoom = Math.round(allZoomRatios.get(allZoomRatios.size() - 1) / 100f);     
        4.     if (zoomValue >= maxZoom) { 
        5.         return allZoomRatios.size() - 1;     
        6.     } 
        7.     for (int i = 1; i < allZoomRatios.size(); i++) { 
        8.         if (allZoomRatios.get(i) >= (zoomValue * 100) && allZoomRatios.get(i - 1) <= (zoomValue * 100)) { 
        9.             return i;         
        10.         }     
        11.     } 
        12.     return -1; 
        13. }
    
    

# **2\. 图片扫码模式**

**业务流程**

使用Bitmap图片扫码模式的主要业务流程如下：

1\. 用户打开应用发起扫码请求。

2\. 校验是否有文件读取权限。

3\. 权限验证通过后，调用HMS SDK的“decodeWithBitmap”扫码接口。

4\. 返回扫码结果。

5\. 应用封装扫码结果返回给用户。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221165341.75750994377244208057112740885716:50510401072536:2800:D5AC9985B575D44294D764B3D521B07A89DF954FDB460795F048352F4BE27DD6.png)

**开发步骤**

1\. 获取图片，将图片转化为Bitmap。
    
    
    复制
      
        1. Bitmap bitmap = MediaStore.Images.Media.getBitmap(BitmapActivity.this.getContentResolver(), data.getData());
    
    

2\. 初始化“HmsScanAnalyzerOptions”，设置支持识别的码制式和设置Bitmap模式为图片扫码模式。

    开发者可以通过如下方式设置可选参数，不需要定制如下参数时，可以跳过此步骤：

  * setHmsScanTypes()：设置码制式，默认识别[Scan Kit支持的码制式](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/scan-code-4)，指定扫码特定码制式，可以提高扫码速度。

  * setPhotoMode(true)：设置图片扫码模式，默认为相机扫码模式。



    
    
    复制
      
        1. //“QRCODE_SCAN_TYPE ”和“ DATAMATRIX_SCAN_TYPE表示只扫描QR和Data Matrix的码
        2. HmsScanAnalyzerOptions options = new HmsScanAnalyzerOptions.Creator().setHmsScanTypes(HmsScan.QRCODE_SCAN_TYPE, HmsScan.DATAMATRIX_SCAN_TYPE).setPhotoMode(true).create();
    
    

3\. 调用“ScanUtil”的静态方法“decodeWithBitmap”方法发起扫码请求并获取扫码结果对象HmsScan，其中包含的信息请参考[码值解析](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/scan-value-4)。

   如果开发者不需要指定只检测特定的码制式，此处的“options”可以置“null”。
    
    
    复制
      
        1. HmsScan[] hmsScans = ScanUtil.decodeWithBitmap(BitmapActivity.this, bitmap, options);  
        2. //处理扫码结果  
        3. if (hmsScans != null && hmsScans.length > 0) {  
        4.     //展示扫码结果 
        5.     showResult(hmsScans); 
        6. }
    
    

  

