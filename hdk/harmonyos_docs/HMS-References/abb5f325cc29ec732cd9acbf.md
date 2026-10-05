---
name: document/cn/HMS-References/MaliciousAppsListRespAPI
title: SafetyDetect Entity MaliciousAppsListResp
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/MaliciousAppsListRespAPI
source: portal
---

Class info  
---  
public class MaliciousAppsListResp extends com.huawei.hms.support.api.entity.safetydetect.base.BaseResp  
  
获取应用安全检测结果的返回实体类。  
  
## Public Method Summary

Return type| Method name  
---|---  
List<MaliciousAppsData>| **getMaliciousAppsList**()返回包含恶意应用的列表。  
  
Public Methods  
method1

Method  
---  
public List<MaliciousAppsData> getMaliciousAppsList()  
返回包含恶意应用的列表。  
  
  


**Return**  


type| desc  
---|---  
List<MaliciousAppsData>| 返回包含恶意应用的列表，每个恶意应用的具体信息利用 MaliciousAppsData 类包装。
