---
name: document/cn/hiai-References/mldocumentskewdetectresult-0000001051576320
title: MLDocumentSkewDetectResult
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/mldocumentskewdetectresult-0000001051576320
---

# MLDocumentSkewDetectResult

|Class Info|
|:-----------------------------------------------------------|
|com.huawei.hms.mlsdk.dsc.MLDocumentSkewDetectResult 文本框检测结果。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:---------------------------------------------------------------|
|Point|[getLeftBottomPosition](#section14195387454)() 获取检测到的文本框的左下角坐标。|
|Point|[getLeftTopPosition](#section134947472420)() 获取检测到的文本框的左上角坐标。|
|int|[getResultCode](#section6895016456)() 获取文本框检测结果返回码。|
|Point|[getRightBottomPosition](#section10906118853)() 获取检测到的文本框的右下角坐标。|
|Point|[getRightTopPosition](#section17829162113101)() 获取检测到的文本框的右上角坐标。|

## Public Methods

### getLeftBottomPosition()

|Method|
|:----------------------------------------------------|
|public Point getLeftBottomPosition() 获取检测到的文本框的左下角坐标。|

**Returns**

|Type|Description|
|:----|:-------------|
|Point|检测到的文本框的左下角坐标。|

### getLeftTopPosition()

|Method|
|:-------------------------------------------------|
|public Point getLeftTopPosition() 获取检测到的文本框的左上角坐标。|

**Returns**

|Type|Description|
|:----|:-------------|
|Point|检测到的文本框的左上角坐标。|

### getResultCode()

|Method|
|:---------------------------------------|
|public int getResultCode() 获取文本框检测结果返回码。|

**Returns**

|Type|Description|
|:---|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|int|检测结果返回码，包含以下三个： * [DETECT_FAILED](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mldocumentskewcorreciontype-0000001052135066#section1471313260333)：文本框检测失败。 * [IMAGE_DATA_ERROR](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mldocumentskewcorreciontype-0000001052135066#section6272183913410)：文本框检测/校正输入参数有误。 * [SUCCESS](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mldocumentskewcorreciontype-0000001052135066#section98371751183413)：文本框检测/校正成功。|

### getRightBottomPosition()

|Method|
|:-----------------------------------------------------|
|public Point getRightBottomPosition() 获取检测到的文本框的右下角坐标。|

**Returns**

|Type|Description|
|:----|:-------------|
|Point|检测到的文本框的右下角坐标。|

### getRightTopPosition()

|Method|
|:--------------------------------------------------|
|public Point getRightTopPosition() 获取检测到的文本框的右上角坐标。|

**Returns**

|Type|Description|
|:----|:-------------|
|Point|检测到的文本框的右上角坐标。|

**Sample code：**

1. 创建文本框检测/校正分析器。

   ```screen
   MLDocumentSkewCorrectionAnalyzerSetting setting = new MLDocumentSkewCorrectionAnalyzerSetting.Factory().create();
   MLDocumentSkewCorrectionAnalyzer analyzer = MLDocumentSkewCorrectionAnalyzerFactory.getInstance().getDocumentSkewCorrectionAnalyzer(setting);
   ```

2. 通过android.graphics.Bitmap创建[MLFrame](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mlframe-0000001050167430)对象用于分析器检测图片，支持的图片格式包括：jpg/jpeg/png，建议图片尺寸不小于320*320像素，不大于1920*1920像素。

   ```screen
   MLFrame frame = MLFrame.fromBitmap(bitmap);
   ```

3. 调用[asyncDocumentSkewDetect](https://developer.huawei.com/consumer/cn/doc/development/hiai-References/mldocumentskewcorrectionanalyzer-0000001052064843#section9672155014167)方法进行文本框的检测。当函数返回true时，返回文本框的四个顶点的坐标值，该坐标值是相对于传入图像的坐标，若与设备坐标不一致，需调用者进行转换；当函数返回false时，数据没有意义。

   ```screen
   Task<MLDocumentSkewDetectResult> detectTask = analyzer.asyncDocumentSkewDetect(mlFrame);
   detectTask.addOnSuccessListener(new OnSuccessListener<MLDocumentSkewDetectResult>() {
       @Override
       public void onSuccess(MLDocumentSkewDetectResult detectResult) {
           // 检测成功。
       }
   }).addOnFailureListener(new OnFailureListener() {
       @Override
       public void onFailure(Exception e) {
           // 检测失败。
           }
   })
   ```

