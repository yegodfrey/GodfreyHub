---
name: document/cn/hiai-Guides/documentskewcorrection-0000001051703156
title: 文档校正
uri: https://developer.huawei.com/consumer/cn/doc/hiai-Guides/documentskewcorrection-0000001051703156
---

# 文档校正

#### 服务介绍

文档校正服务支持自动识别文档在图片中的位置，能够根据识别到的位置信息校正拍摄角度，并且支持用户自定义边界点位置进行文档校正，即使位于倾斜角度也能够拍摄出文档的正面图像。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250514172334.80604513764258687595851310844372:50001231000000:2800:ED22702C34527F9898D986E97520EBCCB7DF97F58A1C018B3CC4CC2DD9165737.png "点击放大")  

#### 应用场景

文档校正服务在生活中有广泛应用。当纸质文档需要备份电子版保存，但图片中却是倾斜的文档时，可以通过此功能校正文档位置。同样，在记录卡证时，无需调整到正对卡证的视角，也可以拍摄出卡证正面照片。另外，行程中因处于倾斜位置无法准确识别道路两旁的路牌时，可以通过此服务拍摄到路牌正面图片，为出行带来便捷。  

#### 注意事项

* 请在拍摄时尽可能让相机正对文档，让文档占据画面大部内容，同时保持文档四条边界入镜以获得更佳效果。
* 拍摄角度在30度以内校正效果最佳，超过30度角拍摄对文档内容边界清晰度有要求。  

#### 开发步骤

在进行开发之前，您需要完成必要的[开发准备工作](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/config-agc-0000001050990353)，同时请确保您的工程中已经[配置HMS Core SDK的Maven仓地址](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/config-maven-0000001050040031)，并且完成了本服务的[SDK集成](https://developer.huawei.com/consumer/cn/doc/hiai-Guides/documentskewcorrection-sdk-0000001051384430)。

1. 创建文本框检测/校正分析器。  

   ```
   "Java"
   MLDocumentSkewCorrectionAnalyzerSetting setting = new MLDocumentSkewCorrectionAnalyzerSetting.Factory().create();
   MLDocumentSkewCorrectionAnalyzer analyzer = MLDocumentSkewCorrectionAnalyzerFactory.getInstance().getDocumentSkewCorrectionAnalyzer(setting);
   ```

   ```
   "Kotlin"
   var setting = MLDocumentSkewCorrectionAnalyzerSetting.Factory().create()
   var analyzer = MLDocumentSkewCorrectionAnalyzerFactory.getInstance().getDocumentSkewCorrectionAnalyzer(setting)
   ```

2. 通过android.graphics.Bitmap创建[MLFrame](https://developer.huawei.com/consumer/cn/doc/hiai-References/mlframe-0000001050167430)对象用于分析器检测图片，支持的图片格式包括：.jpg/.jpeg/.png，建议图片尺寸不小于320\*320像素，不大于1920\*1920像素。  

   ```
   "Java"
   MLFrame frame = MLFrame.fromBitmap(bitmap);
   ```

   ```
   "Kotlin"
   var frame = MLFrame.fromBitmap(bitmap)
   ```

3. 调用[asyncDocumentSkewDetect](https://developer.huawei.com/consumer/cn/doc/hiai-References/mldocumentskewcorrectionanalyzer-0000001052064843#section9672155014167)异步方法或[analyseFrame](https://developer.huawei.com/consumer/cn/doc/hiai-References/mldocumentskewcorrectionanalyzer-0000001052064843#section635985319386)同步方法进行文本框的检测。当返回码是MLDocumentSkewCorrectionConstant.SUCCESS时，将会返回文本框的四个顶点的坐标值，该坐标值是相对于传入图像的坐标，若与设备坐标不一致，需调用者进行转换；否则，返回的数据没有意义。  

   ```
   "Java"
   // asyncDocumentSkewDetect异步调用。
   Task<MLDocumentSkewDetectResult> detectTask = analyzer.asyncDocumentSkewDetect(frame);
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
   });

   // analyseFrame同步调用。
   SparseArray<MLDocumentSkewDetectResult> detect = analyzer.analyseFrame(frame);
   if (detect  != null && detect.get(0).getResultCode() == MLDocumentSkewCorrectionConstant.SUCCESS) {
       // 检测成功。
   } else {
       // 检测失败。
   }
   ```

   ```
   "Kotlin"
   // asyncDocumentSkewDetect异步调用。
   val detectTask = analyzer!!.asyncDocumentSkewDetect(frame)
    detectTask.addOnSuccessListener {
        // 检测成功。
   }.addOnFailureListener {
        // 检测失败。
   }

   // analyseFrame同步调用。
   val detect = analyzer!!.analyseFrame(frame)
    if (detect != null && detect[0].getResultCode() == MLDocumentSkewCorrectionConstant.SUCCESS) {
        // 检测成功。
   } else {
        // 检测失败。
    }
   ```

4. 检测成功后，分别获取文本框四个顶点的坐标数据，然后以左上角为起点，按顺时针方向，分别把左上角、右上角、右下角、左下角加入到列表（List\<Point\>）中，最后构建[MLDocumentSkewCorrectionCoordinateInput](https://developer.huawei.com/consumer/cn/doc/hiai-References/mldocumentskewcorrectioncoordinateinput-0000001052775072)对象。
   1. 如果使用[analyseFrame](https://developer.huawei.com/consumer/cn/doc/hiai-References/mldocumentskewcorrectionanalyzer-0000001052064843#section635985319386)同步调用，先获取到检测结果，如下所示（使用[asyncDocumentSkewDetect](https://developer.huawei.com/consumer/cn/doc/hiai-References/mldocumentskewcorrectionanalyzer-0000001052064843#section9672155014167)异步调用可忽略此步骤直接进行步骤b）：  

      ```
      "Java"
      MLDocumentSkewDetectResult detectResult = detect.get(0);
      ```

      ```
      "Kotlin"
      val detectResult = detect!![0]
      ```

   2. 获取文本框四个顶点的坐标数据并构建[MLDocumentSkewCorrectionCoordinateInput](https://developer.huawei.com/consumer/cn/doc/hiai-References/mldocumentskewcorrectioncoordinateinput-0000001052775072)对象。  

      ```
      "Java"
      Point leftTop = detectResult.getLeftTopPosition();
      Point rightTop = detectResult.getRightTopPosition();
      Point leftBottom = detectResult.getLeftBottomPosition();
      Point rightBottom = detectResult.getRightBottomPosition();
      List<Point> coordinates = new ArrayList<>();
      coordinates.add(leftTop);
      coordinates.add(rightTop);
      coordinates.add(rightBottom);
      coordinates.add(leftBottom);
      MLDocumentSkewCorrectionCoordinateInput coordinateData = new MLDocumentSkewCorrectionCoordinateInput(coordinates);
      ```

      ```
      "Kotlin"
      val leftTop = detectResult.leftTopPosition
      val rightTop = detectResult.rightTopPosition
      val leftBottom = detectResult.leftBottomPosition
      val rightBottom = detectResult.rightBottomPosition
      val coordinates: MutableList<Point> = ArrayList()
      coordinates.add(leftTop)
      coordinates.add(rightTop)
      coordinates.add(rightBottom)
      coordinates.add(leftBottom)
      val coordinateData = MLDocumentSkewCorrectionCoordinateInput(coordinates)
      ```

5. 调用[asyncDocumentSkewCorrect](https://developer.huawei.com/consumer/cn/doc/hiai-References/mldocumentskewcorrectionanalyzer-0000001052064843#section157181861419)异步方法或[syncDocumentSkewCorrect](https://developer.huawei.com/consumer/cn/doc/hiai-References/mldocumentskewcorrectionanalyzer-0000001052064843#section31067525228)同步方法进行文本框的校正。  

   ```
   "Java"
   // asyncDocumentSkewCorrect异步调用。
   Task<MLDocumentSkewCorrectionResult> correctionTask = analyzer.asyncDocumentSkewCorrect(frame, coordinateData);
   correctionTask.addOnSuccessListener(new OnSuccessListener<MLDocumentSkewCorrectionResult>() {
       @Override
       public void onSuccess(MLDocumentSkewCorrectionResult refineResult) {
           // 检测成功。
       }
   }).addOnFailureListener(new OnFailureListener() {
       @Override
       public void onFailure(Exception e) {
           // 检测失败。
       }
   });

   // syncDocumentSkewCorrect同步调用。
   SparseArray<MLDocumentSkewCorrectionResult> correct= analyzer.syncDocumentSkewCorrect(frame,  coordinateData);
   if (correct != null && correct.get(0).getResultCode() == MLDocumentSkewCorrectionConstant.SUCCESS) {
       // 校正成功。
   } else {
       // 校正失败。
   }
   ```

   ```
   "Kotlin"
   // asyncDocumentSkewCorrect异步调用。
   val correctionTask = analyzer!!.asyncDocumentSkewCorrect(frame, coordinateData)
    correctionTask.addOnSuccessListener {
         // 检测成功。
   }.addOnFailureListener {
         // 检测失败。
   }

   // syncDocumentSkewCorrect同步调用。
   val correct = analyzer!!.syncDocumentSkewCorrect(frame, coordinateData)
    if (correct != null && correct[0].getResultCode() == MLDocumentSkewCorrectionConstant.SUCCESS) {
        // 校正成功。
   } else {
        // 校正失败。
    }
   ```

6. 检测完成，停止分析器，释放检测资源。  

   ```
   "Java"
   if (analyzer != null) {
       try{
           analyzer.stop();
       }catch (IOException e) {
        e.printStackTrace();
       }
   }
   ```

   ```
   "Kotlin"
   if (analyzer != null) {
       try {
            analyzer.stop()
       } catch (e: IOException) {
       }
   }
   ```

