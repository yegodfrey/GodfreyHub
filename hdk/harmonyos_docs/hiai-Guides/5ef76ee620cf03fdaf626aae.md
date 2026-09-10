---
name: document/cn/hiai-Guides/face-detection-development-guide-0000001053631579
title: 开发指南
uri: https://developer.huawei.com/consumer/cn/doc/hiai-Guides/face-detection-development-guide-0000001053631579
---

# 开发指南

#### 应用开发

#### 必须导入类

在使用人脸检测API时，将实现人脸检测的相关的类添加至工程。

```
import com.huawei.hiai.vision.visionkit.common.Frame; // 加载Frame类
import com.huawei.hiai.vision.visionkit.face.detector.Face; // 加载人脸检测结果类
import com.huawei.hiai.vision.visionkit.common.BoundingBox;
import com.huawei.hiai.vision.face.detector.FaceDetector; // 加载人脸检测detector类
import com.huawei.hiai.vision.common.VisionBase; // 加载连接服务的静态类
import com.huawei.hiai.vision.common.ConnectionCallback; // 加载连接服务的回调函数
```

#### 开发

1. 应用VisionBase静态类进行初始化，拿到服务连接的结果。

   ```
   VisionBase.init(MainActivity.this, new ConnectionCallback(){
       @Override
       public void onServiceConnect(){
           Log.i(LOG_TAG, "onServiceConnect");
       }

       @Override
       public void onServiceDisconnect(){
           Log.i(LOG_TAG, "onServiceDisconnect");
       }
   });
   ```

2. 定义detector实例，将此应用的Context当做入参。

   ```
   mFaceDetector = new FaceDetector(mContext);
   ```

3. 定义frame，将需进行人脸检测图像的bitmap放入frame中。

   ```
   Frame frame = new Frame();
   frame.setBitmap(bitmap);
   ```

4. 实现detect接口，调用算法，获取结果（如果使用回调的话需要实现基本回调函数）。

   ```
   JSONObject jsonObject = faceDetector.detect(frame,null);
   // 通过convertResult将json字符串转为java类的形式（ 您也可以自己解析json字符串）。
   List<Face> faces = faceDetector.convertResult(jsonObject);
   ```

