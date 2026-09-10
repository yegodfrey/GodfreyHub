---
name: document/cn/HMSCore-References/reporturllistener-0000002039342792
title: ReportUrlListener
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/reporturllistener-0000002039342792
---

# ReportUrlListener

|Interface Info|
|:---------------------------------------------------|
|public interface ReportUrlListener Bidding竞价结果上报监听器。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:--------------------------------------------------------------------------|
|void|[reportSuccess](#section9447132322113)() 竞价结果上报成功回调。|
|void|[reportFailed](#section124533411224)(String url, int errorCode) 竞价结果上报失败回调。|

#### Public Methods

#### reportSuccess

|Method|
|:-------------------------------|
|void reportSuccess() 竞价结果上报成功回调。|

#### reportFailed

|Method|
|:-------------------------------------------------------|
|void reportFailed(String url, int errorCode) 竞价结果上报失败回调。|

Parameters  

|Name|Description|
|:--------|:--------------------------------------------------------------|
|url|宏替换后的url。|
|errorCode|上报失败的结果码： -1：http请求失败，非业务失败 。 1301：HMS版本较低不支持，媒体可通过返回的URL自行上报 。|

