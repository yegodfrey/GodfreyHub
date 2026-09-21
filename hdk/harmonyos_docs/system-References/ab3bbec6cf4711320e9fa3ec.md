---
name: document/cn/system-References/network-httpclient-metricstime-0000001075560830
title: RequestFinishedInfo.MetricsTime
uri: https://developer.huawei.com/consumer/cn/doc/system-References/network-httpclient-metricstime-0000001075560830
---

# RequestFinishedInfo.MetricsTime

|Class Info|
|:------------------------------------------------------------------------------------------------------------------------------|
|public abstract static class RequestFinishedInfo.MetricsTime 时延指标相关数据。约束说明，使能QUIC的时候，在请求完成后，从ReqeustFinishInfo获取各种耗时数据会偶现为0的情况。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-------------------|:---------------------------------------------------------------------|
|public abstract long|[getCallEndTime](#section6682103715237)() 获取请求结束时间。|
|public abstract long|[getCallStartTime](#section1647559161318)() 获取请求开始时间。|
|public abstract long|[getConnectEndTime](#section7624447181513)() 获取连接结束时间。|
|public abstract long|[getConnectionAcquiredTime](#section241054811157)() 获取连接建立时间。|
|public abstract long|[getConnectionReleasedTime](#section1912244919151)() 获取连接释放时间。|
|public abstract long|[getConnectStartTime](#section284154971511)() 获取TCP连接开始时间。|
|public abstract long|[getDnsEndTime](#section1543045011157)() 获取DNS解析结束时间，当DNS解析异常时，则为0。|
|public abstract long|[getDnsStartTime](#section49954508156)() 获取DNS解析开始时间。|
|public abstract long|[getRequestBodyEndTime](#section9545125191513)() 获取请求体发送完成时间。|
|public abstract long|[getRequestBodyStartTime](#section1516665241518)() 获取请求体开始发送时间。|
|public abstract long|[getRequestHeadersEndTime](#section1676512524152)() 获取请求消息头发送完成时间。|
|public abstract long|[getRequestHeadersStartTime](#section8341953111510)() 获取请求消息头开始发送时间。|
|public abstract long|[getResponseBodyEndTime](#section8893125391518)() 获取响应体发送完成时间。|
|public abstract long|[getResponseBodyStartTime](#section13454165491520)() 获取响应体开始发送时间。|
|public abstract long|[getResponseHeadersEndTime](#section3982454181514)() 获取响应消息头发送完成时间。|
|public abstract long|[getResponseHeadersStartTime](#section75842055111517)() 获取响应消息头开始发送时间。|
|public abstract long|[getSecureConnectEndTime](#section151217567155)() 获取TLS连接结束时间。|
|public abstract long|[getSecureConnectStartTime](#section66781456111517)() 获取TLS连接开始时间。|
|public abstract long|[getTotalTime](#section17162857171513)() 获取请求耗时时长（请求结束时间减去请求开始时间）。|
|public abstract long|[getTtfb](#section8645857151519)() 获取首包返回时延。|

## Public Methods

### getCallEndTime

|Method|
|:----------------------------------------------------|
|public abstract long getCallEndTime() 获取请求结束时间，单位：ms。|

**Returns**

|Type|Description|
|:---|:---------------------------|
|long|请求结束时间，存在为0的情况。如果流未关闭，则一定为0。|

### getCallStartTime

|Method|
|:------------------------------------------------------|
|public abstract long getCallStartTime() 获取请求开始时间，单位：ms。|

**Returns**

|Type|Description|
|:---|:----------|
|long|请求开始时间。|

### getConnectEndTime

|Method|
|:-------------------------------------------------------|
|public abstract long getConnectEndTime() 获取连接结束时间，单位：ms。|

**Returns**

|Type|Description|
|:---|:--------------|
|long|连接结束时间，存在为0的情况。|

### getConnectionAcquiredTime

|Method|
|:---------------------------------------------------------------|
|public abstract long getConnectionAcquiredTime() 获取连接建立时间，单位：ms。|

**Returns**

|Type|Description|
|:---|:--------------|
|long|连接建立时间，存在为0的情况。|

### getConnectionReleasedTime

|Method|
|:---------------------------------------------------------------|
|public abstract long getConnectionReleasedTime() 获取连接释放时间，单位：ms。|

**Returns**

|Type|Description|
|:---|:--------------|
|long|连接释放时间，存在为0的情况。|

### getConnectStartTime

|Method|
|:------------------------------------------------------------|
|public abstract long getConnectStartTime() 获取TCP连接开始时间，单位：ms。|

**Returns**

|Type|Description|
|:---|:---------------|
|long|TCP连接开始时间，默认值为0。|

### getDnsEndTime

|Method|
|:--------------------------------------------------------------------|
|public abstract long getDnsEndTime() 获取DNS解析结束时间，当DNS解析异常时，则为0，单位：ms。|

**Returns**

|Type|Description|
|:---|:-----------------------|
|long|DNS解析结束时间，当DNS解析异常时，则为0。|

### getDnsStartTime

|Method|
|:--------------------------------------------------------|
|public abstract long getDnsStartTime() 获取DNS解析开始时间，单位：ms。|

**Returns**

|Type|Description|
|:---|:----------|
|long|DNS解析开始时间。|

### getRequestBodyEndTime

|Method|
|:--------------------------------------------------------------|
|public abstract long getRequestBodyEndTime() 获取请求体发送完成时间，单位：ms。|

**Returns**

|Type|Description|
|:---|:-----------------|
|long|请求体发送完成时间，存在为0的情况。|

### getRequestBodyStartTime

|Method|
|:----------------------------------------------------------------|
|public abstract long getRequestBodyStartTime() 获取请求体发送开始时间，单位：ms。|

**Returns**

|Type|Description|
|:---|:---------------|
|long|请求体开始发送时间，默认值为0。|

### getRequestHeadersEndTime

|Method|
|:-------------------------------------------------------------------|
|public abstract long getRequestHeadersEndTime() 获取请求消息头发送完成时间，单位：ms。|

**Returns**

|Type|Description|
|:---|:-------------------|
|long|请求消息头发送完成时间，存在为0的情况。|

### getRequestHeadersStartTime

|Method|
|:---------------------------------------------------------------------|
|public abstract long getRequestHeadersStartTime() 获取请求消息头开始发送时间，单位：ms。|

**Returns**

|Type|Description|
|:---|:-----------|
|long|请求消息头开始发送时间。|

### getResponseBodyEndTime

|Method|
|:---------------------------------------------------------------|
|public abstract long getResponseBodyEndTime() 获取响应体发送完成时间，单位：ms。|

**Returns**

|Type|Description|
|:---|:------------------------------|
|long|响应体发送完成时间，存在为0的情况。如果流未关闭，则一定为0。|

### getResponseBodyStartTime

|Method|
|:-----------------------------------------------------------------|
|public abstract long getResponseBodyStartTime() 获取响应体开始发送时间，单位：ms。|

**Returns**

|Type|Description|
|:---|:-----------|
|long|响应体数据开始发送时间。|

### getResponseHeadersEndTime

|Method|
|:--------------------------------------------------------------------|
|public abstract long getResponseHeadersEndTime() 获取响应消息头发送完成时间，单位：ms。|

**Returns**

|Type|Description|
|:---|:-----------|
|long|响应消息头发送完成时间。|

### getResponseHeadersStartTime

|Method|
|:------------------------------------------------------------------------------------------|
|public abstract long getResponseHeadersStartTime() 获取响应消息头开始发送时间。实际上为客户端等待服务器返回消息头时间，单位：ms。|

**Returns**

|Type|Description|
|:---|:-------------------|
|long|响应消息头开始发送时间，存在为0的情况。|

### getSecureConnectEndTime

|Method|
|:----------------------------------------------------------------|
|public abstract long getSecureConnectEndTime() 获取TLS连接结束时间，单位：ms。|

**Returns**

|Type|Description|
|:---|:-----------------|
|long|TLS连接结束时间，存在为0的情况。|

### getSecureConnectStartTime

|Method|
|:------------------------------------------------------------------|
|public abstract long getSecureConnectStartTime() 获取TLS连接开始时间，单位：ms。|

**Returns**

|Type|Description|
|:---|:----------|
|long|TLS连接开始时间。|

### getTotalTime

|Method|
|:------------------------------------------------------------------|
|public abstract long getTotalTime() 获取请求耗时时长（请求结束时间减去请求开始时间）。单位：ms。|

**Returns**

|Type|Description|
|:---|:----------|
|long|请求总耗时。|

### getTtfb

|Method|
|:---------------------------------------------|
|public abstract long getTtfb() 获取首包返回时延，单位：ms。|

**Returns**

|Type|Description|
|:---|:------------|
|long|首包返回时延，默认值为0。|

