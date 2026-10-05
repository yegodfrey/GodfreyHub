---
name: document/cn/HMS-References/awareness-liveinfo
title: LiveInfo
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/awareness-liveinfo
source: portal
---

class info  
---  
public class LiveInfo implements Parcelable  
某个生活指数当天和未来一到两天的指数等级。包括该指数的指数码、当天和未来一到两天的该指数的等级。  
  
## Public Method Summary

Return type| Method name  
---|---  
String| getCode()  
List| getLevelList()  
  
## Public Methods

Method  
---  
public String getCode()  
获取生活指数码，生活指数码code有1~6六个值，“1”表示穿衣指数，“2”表示运动指数，“3”表示感冒指数，“4”表示洗车指数，“5”表示旅游指数，“6”表示紫外线指数。  
  
**Return**

Type| desc  
---|---  
String| 生活指数码，生活指数码有1~6六个值，“1”表示穿衣指数，“2”表示运动指数，“3”表示感冒指数，“4”表示洗车指数，“5”表示旅游指数，“6”表示紫外线指数。  
Method  
---  
public List<DailyLiveInfo> getLevelList()  
获取当天和未来一到两天的该指数的等级信息。例如，如果getCode获取到code为“1”，则List<[DailyLiveInfo](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/awareness-dailyliveinfo)>表示当天和未来一到两天的穿衣指数信息。  
  
**Return**

Type| desc  
---|---  
List<DailyLiveInfo>| 当天和未来一到两天的该指数的等级信息。例如，如果getCode获取到code为“1”，则List<[DailyLiveInfo](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/awareness-dailyliveinfo)>表示当天和未来一到两天的穿衣指数信息。
