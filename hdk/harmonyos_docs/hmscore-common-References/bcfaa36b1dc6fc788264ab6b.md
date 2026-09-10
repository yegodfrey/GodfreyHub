---
name: document/cn/hmscore-common-References/resultcallback_r-0000001050121136
title: ResultCallback<R>
uri: https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/resultcallback_r-0000001050121136
---

# ResultCallback\<R\>

|Class Info|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public interface [ResultCallback](https://developer.huawei.com/consumer/cn/doc/development/hmscore-common-References/resultcallback_r-0000001050121136)\<R\> 结果回调，当异步调用HMS Core SDK方法时，结果是通过此回调返回。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:---------------------------------------------------------------|
|void|[onResult](#section32821622269)(R result) 回调结果，该方法为接口，需要业务实现该接口。|

#### Public Methods

#### onResult

|Method|
|:---------------------------------------------|
|void onResult(R result) 回调结果，该方法为接口，需要业务实现该接口。|

Parameters  

|Name|Type|Constraint|Description|
|:-----|:---|:---------|:-------------------|
|result|R|Y|调用HMS Core SDK返回的结果。|

