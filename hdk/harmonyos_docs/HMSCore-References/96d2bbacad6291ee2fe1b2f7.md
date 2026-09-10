---
name: document/cn/HMSCore-References/geofenceservice-0000001050986187
title: GeofenceService
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/geofenceservice-0000001050986187
---

# GeofenceService

|Class Info|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class GeofenceService 地理围栏，程序定位交互接入类。在调用[LocationServices](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/locationservice-0000001050746175)类的[getGeofenceService](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/locationservice-0000001050746175#section185947269819)(Activity activity)或[getGeofenceService](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/locationservice-0000001050746175#section986215751114)(Context context)方法时返回一个该类型的实例。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Void\>|[createGeofenceList](#section9254532817)([GeofenceRequest](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/geofencerequest-0000001050746171) geofenceRequest, PendingIntent pendingIntent) 通过传入PendingIntent的方式添加地理围栏，当触发围栏的时候，会通过广播通知。|
|[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Void\>|[deleteGeofenceList](#section8918132319409)(List\<String\> geofenceRequestIds) 通过地理围栏请求Id移除地理围栏。|
|[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Void\>|[deleteGeofenceList](#section1270519314305)(PendingIntent pendingIntent) 通过添加地理围栏请求时对应的PendingIntent移除地理围栏。|

#### Public Methods

#### createGeofenceList(GeofenceRequest geofenceRequest, PendingIntent pendingIntent)

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Void\> createGeofenceList([GeofenceRequest](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/geofencerequest-0000001050746171) geofenceRequest, PendingIntent pendingIntent) 通过传入PendingIntent的方式添加地理围栏，当触发围栏的时候，会通过广播通知。|

Parameters  

|Name|Description|
|:--------------|:--------------------------------------------------------------------|
|geofenceRequest|地理围栏请求对象。|
|pendingIntent|每个地理围栏请求关联的PendingIntent，构造PendingIntent时需设置Class、Action，不能构造空Intent。|

Returns  

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Void\>|任务，可以通过添加[onComplete](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/oncompletelistener-0000001050121142#section32821622269)([Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148) task)回调接受添加结果，如果task.[isSuccessful](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148#section1548820091913)()为true，则代表添加地理围栏成功；否则添加失败。|

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250123172210.36104581804100576262530369528718:50001231000000:2800:BDA4F16B7FC9BFF29CC0167090ADC4F96FB17E4DF11EC4F604898AA071043E34.png?needInitFileName=true?needInitFileName=true)  
需要用户App重新下发地理围栏的场景：

* 用户App卸载后重装。
* 用户App版本升级。
* HMS Core删除数据。
* 手机重启。  

#### deleteGeofenceList(List\<String\> geofenceRequestIds)

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Void\> deleteGeofenceList(List\<String\> geofenceRequestIds) 通过地理围栏请求ID移除地理围栏。|

Parameters  

|Name|Description|
|:-----------------|:-------------|
|geofenceRequestIds|待移除的地理围栏请求IDs。|

Returns  

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Void\>|任务，可以通过添加[onComplete](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/oncompletelistener-0000001050121142#section32821622269)(Task task)回调接受移除结果，如果task.[isSuccessful](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148#section1548820091913)()为true，则代表移除地理围栏成功；否则移除失败。|

#### deleteGeofenceList(PendingIntent pendingIntent)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public [Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Void\> deleteGeofenceList(PendingIntent pendingIntent) 通过添加地理围栏请求时对应的PendingIntent移除地理围栏。|

Parameters  

|Name|Description|
|:------------|:--------------------------|
|pendingIntent|待移除的地理围栏请求对应的PendingIntent。|

Returns  

|Type|Description|
|:-------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Void\>|任务，可以通过添加[onComplete](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/oncompletelistener-0000001050121142#section32821622269)(Task task)回调接受移除结果，如果task.[isSuccessful](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148#section1548820091913)()为true，则代表移除地理围栏成功；否则移除失败。|

