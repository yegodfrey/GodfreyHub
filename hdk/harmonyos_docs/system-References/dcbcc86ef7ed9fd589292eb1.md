---
name: document/cn/system-References/setprifilterrulesinfo-0000001759440596
title: SetPriFilterRulesInfo
uri: https://developer.huawei.com/consumer/cn/doc/system-References/setprifilterrulesinfo-0000001759440596
---

# SetPriFilterRulesInfo

|Class Info|
|:-----------------------------------------------------|
|public class SetPriFilterRulesInfo 设置数据包发送优先级规则的业务参数类。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:--------------------|:---------------------------------------------------------------------------------------------------|
|int|[getValidRulesNum](#section10857203517598)() 获取有效规则个数。|
|void|[setValidRulesNum](#section42361481035)(int validRulesNum) 设置有效规则个数。|
|IpFilterRulesInfo\[\]|[getIpFilterRulesInfo](#section98982795217)() 获取数据包过滤规则数组。|
|void|[setIpFilterRulesInfo](#section13899127115210)(IpFilterRulesInfo\[\] ipFilterRulesInfo) 设置数据包过滤规则数组。|

#### Public Methods

#### getValidRulesNum

|Method|
|:--------------------------------------|
|public int getValidRulesNum() 获取有效规则个数。|

Returns  

|Type|Description|
|:---|:----------|
|int|有效规则个数。|

#### setValidRulesNum

|Method|
|:--------------------------------------------------------|
|public void setValidRulesNum(int validRulesNum) 设置有效规则个数。|

Parameters  

|Name|Description|
|:------------|:------------------|
|validRulesNum|有效规则个数，最大可设置4条过滤规则。|

#### getIpFilterRulesInfo

|Method|
|:---------------------------------------------------------------|
|public IpFilterRulesInfo\[\] getIpFilterRulesInfo() 获取数据包过滤规则数组。|

Returns  

|Type|Description|
|:--------------------|:----------|
|IpFilterRulesInfo\[\]|数据包过滤规则数组。|

#### setIpFilterRulesInfo

|Method|
|:-------------------------------------------------------------------------------------|
|public void setIpFilterRulesInfo(IpFilterRulesInfo\[\] ipFilterRulesInfo) 设置数据包过滤规则数组。|

Parameters  

|Name|Description|
|:----------------|:-------------------------------------------------------|
|ipFilterRulesInfo|设置数据包过滤规则数组，长度与validRulesNum保持一致，超过validRulesNum的规则将会丢弃。|

