---
name: document/cn/HMSCore-References/awareness-capture-timecategoriesresponse-0000001050166015
title: TimeCategoriesResponse
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/awareness-capture-timecategoriesresponse-0000001050166015
---

# TimeCategoriesResponse

* 支持的场景：手机。
* 支持的OS：EMUI 7.0及以上，Android 7.0及以上。

|Class Info|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class [TimeCategoriesResponse](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-capture-timecategoriesresponse-0000001050166015) 时间状态的请求响应，可通过调用[CaptureClient](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-captureclient-0000001050164395)中提供的[getTimeCategories](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-captureclient-0000001050164395#section161371955805)方法获取。|

#### Public Method Summary

|Qualifier and Type|Method Name|
|:-------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------|
|[TimeCategories](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/time-categories-4-0000001050167035)|[getTimeCategories](#section147590117160)()|

#### Public Methods

#### getTimeCategories

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [TimeCategories](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/time-categories-4-0000001050167035) getTimeCategories() 返回设备当前所在地的时间状态信息。时间状态是[TimeBarrier](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-barrier-timebarrier-0000001050166041)类中定义的上午[TIME_CATEGORY_MORNING](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-barrier-timebarrier-0000001050166041#section10271398168)，下午[TIME_CATEGORY_AFTERNOON](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-barrier-timebarrier-0000001050166041#section191005571097)，晚上[TIME_CATEGORY_EVENING](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-barrier-timebarrier-0000001050166041#section1668363820154)，夜间[TIME_CATEGORY_NIGHT](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-barrier-timebarrier-0000001050166041#section108974225166)，工作日[TIME_CATEGORY_WEEKDAY](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-barrier-timebarrier-0000001050166041#section291914399163)，休息日[TIME_CATEGORY_WEEKEND](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-barrier-timebarrier-0000001050166041#section12936145791617)，节假日[TIME_CATEGORY_HOLIDAY](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-barrier-timebarrier-0000001050166041#section19935165181512)，非节假日[TIME_CATEGORY_NOT_HOLIDAY](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/awareness-barrier-timebarrier-0000001050166041#section4591131316174)。|

Returns  

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------------------|:----------|
|[TimeCategories](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/time-categories-4-0000001050167035)|时间状态信息。|

