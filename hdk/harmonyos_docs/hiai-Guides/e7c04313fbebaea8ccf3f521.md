---
name: document/cn/hiai-Guides/videoportrait-ocr-development-guide-0000001054628180
title: 开发指南
uri: https://developer.huawei.com/consumer/cn/doc/hiai-Guides/videoportrait-ocr-development-guide-0000001054628180
---

# 开发指南

#### 应用开发

#### 必须导入类

在使用视频人像分割API时，将实现视频人像分割的相关的类添加至工程。

```
import com.huawei.hiai.vision.image.segmentation.ImageSegmentation; // 加载图像分割方法类
import com.huawei.hiai.vision.common.VisionImage; // 加载输入数据类
import com.huawei.hiai.vision.visionkit.image.ImageResult; // 加载返回结果类
import com.huawei.hiai.pdk.resultcode.HwHiAIResultCode; // 加载返回结果码类
import com.huawei.hiai.vision.image.segmentation.SegConfiguration; // 加载配置类
import com.huawei.hiai.vision.visionkit.common.VisionConfiguration;
import com.huawei.hiai.vision.common.VisionImageMetadata;
import com.huawei.hiai.vision.common.VisionBase; // 加载连接服务的静态类
import com.huawei.hiai.vision.common.ConnectionCallback; // 加载连接服务的回调函数
import com.huawei.hiai.vision.common.VisionCallback;
import com.huawei.hiai.pdk.pluginservice.ILoadPluginCallback;
```

#### 开发

1. 应用VisionBase静态类进行初始化，获取服务连接的结果。

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

2. 定义mImageSegmentation实例，将此应用的Context当做入参。

   ```
   ImageSegmentation mImageSegmentation = new ImageSegmentation(mContext);
   ```

3. 设置参数。

   ```
   SegConfiguration mSegmentationConfiguration = new SegConfiguration.Builder()
       .setProcessMode(VisionConfiguration.MODE_IN)
       .setSegmentationType(SegConfiguration.TYPE_PORTRAIT_SEGMENTATION_VIDEO)
       .setOutputType(SegConfiguration.OUTPUT_TYPE_BYTEARRAY)
       .build();
   mImageSegmentation.setConfiguration(mSegmentationConfiguration);
   ```

4. 定义VisionImageMetadata。视频人像分割不支持传入图片，默认旋转角度是270°。

   ```
   VisionImageMetadata.Builder builder = new VisionImageMetadata.Builder();
   builder.setFormat(17); // nv21格式
   builder.setHeight(mHeight);
   builder.setWidth(mWidth);
   builder.setRotation(mRotation);
   VisionImageMetadata metadata = builder.build();
   ```

5. 设置进行人像分割图像的byte数组。

   ```
   VisionImage image = VisionImage.fromByteArray(mybytes, metadata);
   ```

6. 懒加载进行插件下载，通过getAvailability()函数获取是否需要下载插件。如果需要，可通过loadPlugin()来进行插件下载。

   ```
   int availability = imageSegmentation.getAvailability();
   if (availability == HwHiAIResultCode.AIRESULT_PLUGIN_PENDING_UPDATE) {
       Lock lock = new ReentrantLock();
   	Condition condition = lock.newCondition();
   	LoadPluginCallback cb = new LoadPluginCallback(lock, condition);
   	imageSegmentation.loadPlugin(cb);
   	lock.lock();
   	try {
   	    condition.await(90, TimeUnit.SECONDS);
   	} catch (InterruptedException e) {
   	    Log.e(TAG, e.getMessage());
   	} finally {
   	    lock.unlock();     
   	}
   }
   ```

7. 调用方法doSegmentation进行人像分割。

   ```
   ImageResult srt = new ImageResult();
   int rltCode = mImageSegmentation.doSegmentation(image, srt, null);
   ```

8. 调用方法getBytes得到人像分割结果。

   ```
   byte[] values = srt.getByteArray();
   ```

9. 生成Bitmap进行分割结果保存。

   ```
   private static final int A_CHANNEL_PIXEL_MASK = 0xFF;
   private static final int A_CHANNEL_RIGHT_SHIFT_INDEX = 24;
   private static final int HUMAN_VALUE_THRESHOLD = 50;
   private static final int HUMAN_PIXEL_VALUE = 0xFF0000FF;
   private static final int BACKGROUND_PIXEL_VALUE = 0xFF000000;

   int pixels[] = new int[mWidth * mHeight];
   int out_pixels[] = new int[mWidth * mHeight];
   for (int i = 0; i < pixels.length; ++i) {
       pixels[i] = values[i];
   }
   for (int pixelIdx = 0; pixelIdx < mWidth * mHeight; pixelIdx++) {
       int pixelValue = pixels[pixelIdx];
       if (((pixelValue >> A_CHANNEL_RIGHT_SHIFT_INDEX) & A_CHANNEL_PIXEL_MASK) < HUMAN_VALUE_THRESHOLD ) {
           out_pixels[pixelIdx] = BACKGROUND_PIXEL_VALUE;
       } else {
           out_pixels[pixelIdx] = HUMAN_PIXEL_VALUE;
       }
   }
   Bitmap segmentedBitmap = Bitmap.createBitmap(mWidth, mHeight, Bitmap.Config.ARGB_8888);
   setgmentedBitmap.setPixels(out_pixels, 0, mWidth, 0, 0, mWidth, mHeight);
   saveMyBitmap(filename, segmentedBitmap);
   ```

