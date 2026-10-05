---
name: document/cn/HMS-References/activityidentification
title: ActivityIdentification
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/activityidentification
source: portal
---

CLASS info  
---  
public class ActivityIdentification  
活动识别操作调用入口，用于获取ActivityIdentificationService实例。  
  
# Public Method Summary  


Return type| Method name  
---|---  
static ActivityIdentificationService| [getService](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/activityidentification#1)(Activity activity)  
static ActivityIdentificationService| [getService](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/activityidentification#2)(Context context)  
  
# Public Methods

Method  
---  
public static ActivityIdentificationService getService(Activity activity)  
创建一个新的[ActivityIdentificationService ](https://developer.huawei.com/consumer/cn/doc/activityidentificationservice)实例，用于在Activity中使用。注意：当传入参数为Activity类型时，如果使用ActivityIdentificationService 实例调用定位服务接口发生异常，那么应用就会弹出UI交互界面提示用户处理。例如：当HMS Core不符合定位服务的版本要求时，就会拉起升级提示界面，引导用户升级。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
activity| 活动。  
  
**Return**

type| desc  
---|---  
ActivityIdentificationService| 根据Activity获取[ActivityIdentificationService ](https://developer.huawei.com/consumer/cn/doc/activityidentificationservice)实例。  
Method  
---  
public static ActivityIdentificationService getService(Context context)  
创建一个新的[ActivityIdentificationService ](https://developer.huawei.com/consumer/cn/doc/activityidentificationservice)实例，用于在Context中使用。注意：当传入参数为非Activity类型时，如果使用ActivityIdentificationService 实例调用定位服务接口发生异常，就不会弹出UI交互界面提示用户处理，只会返回错误码。例如：当HMS不符合定位服务的版本要求时，便会返回错误码907135003，此时需要手动升级HMSCore。如果需要拉起升级引导界面，建议传入Activity类型参数替代Context类型，创建Client实例。  
  
**Parameters**

Parameter name| Parameter desc  
---|---  
context| 上下文。  
  
**Return**

type| desc  
---|---  
ActivityIdentificationService| 根据Context获取[ActivityIdentificationService ](https://developer.huawei.com/consumer/cn/doc/activityidentificationservice)实例。
