---
name: document/cn/Media-Guides/vision-service-dev_layout-0000001054447321
title: 图文智能排版服务
uri: https://developer.huawei.com/consumer/cn/doc/Media-Guides/vision-service-dev_layout-0000001054447321
---

# 图文智能排版服务

## 场景介绍

图文智能排版服务为您提供图文智能排版功能，共有9种智能排版样式。您可以完成图像、文字的智能排版处理，实现图文内容高效生产。图片智能排版服务只支持在中国大陆使用。
> 说明
>
> 图文智能排版服务已于2022/7/11下线，如使用将返回默认兜底版式[样式三](https://developer.huawei.com/consumer/cn/doc/development/Media-Guides/layout_styles-0000001055579860#section04235019433)。

## 开发步骤

图文智能排版服务开发步骤如下，需要您提供图片和相关参数，得到相应的返回值。

1. 导入图文智能排版服务包。

   ```screen
   "Java"
   import com.huawei.hms.image.vision.bean.ImageLayoutInfo ;
   import com.huawei.hms.image.vision.*;
   ```

   ```screen
   "Kotlin"
   import com.huawei.hms.image.vision.ImageVision
   import com.huawei.hms.image.vision.ImageVision.VisionCallBack
   import com.huawei.hms.image.vision.ImageVisionImpl
   import com.huawei.hms.image.vision.bean.ImageLayoutInfo
   import com.huawei.hms.image.vision.bean.ResultCode
   ```

2. 获取图文智能排版服务实例。

   ```screen
   "Java"
   // 获取ImageVisionImpl 对象
   ImageVisionImpl imageVisionAPI = ImageVision.getInstance(this);
   ```

   ```screen
   "Kotlin"
   // 获取ImageVisionImpl 对象
   imageVisionLayoutAPI = ImageVision.getInstance(this)
   ```

3. 服务初始化，与滤镜服务一致，可参见[开发步骤](https://developer.huawei.com/consumer/cn/doc/development/Media-Guides/vision-service-dev_filter-0000001054127298#section13785131963212)中的相关描述。
4. 构建参数对象。

   |参数列表|类型|M/O（必选/可选）|说明|
   |:----------|:---------|:---------|:----------------------|
   |requestJson|JSONObject|M|图片处理请求参数。|
   |imageBitmap|Bitmap|M|需要制作图文智能排版的图片（宽高比9:16）。|

   requestJson字段信息：

   |参数列表|类型|M/O（必选/可选）|说明|
   |:--------|:---------|:---------|:---------|
   |requestId|String|O|业务提供的请求ID。|
   |taskJson|JSONObject|M|具体的业务请求信息。|

   图文智能排版的taskJson字段信息：

   |参数列表|类型|M/O（必选/可选）|说明|
   |:----------------------------------------------------------------|:--------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   |title|String|M|文案标题，必填字段，不超过7个中文汉字（总字符数量不超过10个），如果超过字数限制会被强制截断。|
   |description|String|M|文案内容，不超过44个中文汉字（总字符数量不超过66个），超过字数限制则进行截断，用'...'代替。|
   |copyRight|String|O|图片版权归属的个人/公司名称，建议不超过7个中文汉字（总字符数量不超过10个），超过字数限制则进行截断，用'...'代替。|
   |anchor|String|O|"详情"或"查看更多"，建议4个中文汉字（总字符数不超过6个）超过字数限制则进行截断，用'...'代替。|
   |isNeedMask|boolean|O|是否需要蒙层。|
   |styleList[构建参数](#ZH-CN_TOPIC_0000001054447321__table469818247327)|JSONArray|O|样式列表，默认[]，若为默认值，依据描述文本是否有换行符选择文本；若用户传入list，从用户给出的版式中选择。 取值范围['info1', 'info2', ..., 'info9']。 > 说明 > styleList中，info8为竖板排版，当前仅支持中文版式，不支持其他语言版式；info3为默认兜底版式；若用户输入info8且输入标签、文本描述有非中文语种，返回用户info3版式。|

   图文智能排版服务requestJson示例：

   ```screen
   {
     "requestId":"requestId",
     "taskJson":{"title":"轻奢新生代","description":"远离城市的喧嚣","copyRight":"华为杂志锁屏","isNeedMask":false,"anchor":"查看详情","styleList":["info1"]},
    }
   ```

5. 图文智能排版服务获取结果。

   您在调用[analyzeImageLayout](https://developer.huawei.com/consumer/cn/doc/development/Media-References/imagevisionimpl-0000001050197188#section13948153813308)接口时，需要输入待处理图片Bitmap并选择样式和需要添加的文字等（[构建参数](#ZH-CN_TOPIC_0000001054447321__table469818247327)）。图文智能排版服务需要联网，如不联网，则默认返回info3样式。图文智能排版服务会返回[ImageLayoutInfo](https://developer.huawei.com/consumer/cn/doc/development/Media-References/imagelayoutinfo-0000001307724001)封装类，根据封装类的参数进行view绘制（可以参见[示例代码](https://developer.huawei.com/consumer/cn/doc/development/Media-Examples/sample-code-0000001050199421)绘制方式）。

   ```screen
   "Java"
   // 获取ImageLayoutInfo返回值
   new Thread(new Runnable() {
       @Override    
       public void run() {
               ImageLayoutInfo imageLayoutInfo = imageVisionAPI.analyzeImageLayout(requestJson, imageBitmap);
           }           
       }).start();
   ```

   ```screen
   "Kotlin"
   // 获取ImageLayoutInfo返回值
   Thread(Runnable {
       val imageLayoutInfo = imageVisionLayoutAPI!!.analyzeImageLayout(requestJson,reBitmap)        
   }).start()
   ```

   ImageLayoutInfo返回值：

   |参数列表|类型|M/O（必选/可选）|说明|
   |:---------|:---------|:---------|:-------------------|
   |resultCode|int|M|返回结果码。|
   |viewGroup|ViewGroup|O|返回的目标view。|
   |maskView|View|O|返回蒙层view（无蒙层时为null）。|
   |response|JSONObject|O|返回结果。|

   response字段：

   |参数列表|类型|M/O（必选/可选）|说明|
   |:---------|:-----|:---------|:-------------------------------|
   |locationX|int|O|返回view位于手机的起始位置X。|
   |locationY|int|O|返回view位于手机的起始位置Y。|
   |maskColor|int|O|返回蒙层的颜色值。|
   |colorHeigh|int|O|返回蒙层的高度（无蒙层时为0）。|
   |requestId|String|O|业务提供的请求ID（如果请求时携带了就返回，没有携带就不返回）。|
   |serviceId|String|M|调用的服务名。|

   > 说明
   >
   > 因为接口涉及网络请求，需要开启子线程去调用接口。
   >
   > 使用图文智能排版服务时，您需要保证提供的token是有效的，否则无法使用该服务。
   >
   > token的获取方式可参见[token获取方式](https://developer.huawei.com/consumer/cn/doc/development/Media-Guides/get_token-0000001055139693)。
6. 停止服务。

   当不再需要图文智能排版效果时，调用该接口停止服务，stopCode为0时，执行成功。

   ```screen
   "Java"
   if (null != imageVisionAPI) {
       int stopCode = imageVisionAPI.stop();
   }
   ```

   ```screen
   "Kotlin"
   if (null != imageVisionFilterAPI) {
       val stopCode = imageVisionFilterAPI!!.stop()
   }
   ```

