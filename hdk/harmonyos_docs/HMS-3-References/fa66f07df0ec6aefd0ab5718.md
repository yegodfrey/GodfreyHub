---
name: document/cn/HMS-3-References/29507473
title: 查询导出任务状态接口
uri: https://developer.huawei.com/consumer/cn/doc/HMS-3-References/29507473
source: portal
---

应用服务端通过该接口查询导出请求任务在分析平台的执行进展，如果平台处理完毕，应用服务器需要在指定时间内(当前是6个小时)将数据下载后提供给终端用户。

# Request

## HTTP request

> GET https://<URI>/analytics/gdpr/user_data_export_tasks/v2

### Parameters

参数名称| Value| Description  
---|---|---  
aaid| String| 通过HMS端侧接口获取。  
  
  


# Response

响应HTTP状态码：

状态码| 描述  
---|---  
200| 成功。  
400| 错误，具体错误详情见错误码说明。  
500| 服务器系统错误。  
  
调用成功情况下，返回如下：
    
    
    复制
      
        1. {
        2.   "result_code":"0",
        3.   "result_msg":"success",
        4.   "task_list":[{
        5.     "request_id":"12345678",
        6.     "request_time":"datetime",
        7.     "status":"EXPORTED",
        8.     "status_time":"datetime",
        9.     "file_path":"https://xxx/xxx.xx"
        10.   }]
        11. }
    
    

状态码说明  


Parameter name| Value| Description  
---|---|---  
result_code| String| 响应码，详见错误码说明。  
result_msg| String| 响应描述。  
task_list| TaskList| 任务列表。  
  
  


TaskList结构  


**参数名**| **值**| **说明**  
---|---|---  
request_id| String| 请求ID。  
request_time| DateTime| 请求时间。  
status| String| 任务状态：

  * EXPORTING: 导出中
  * PENDING: 等待导出
  * EXPORTED: 成功导出
  * NO_DATA: 没有该用户数据
  * QUERY_FAILED: 查询失败
  * DATAPUSH_FAILED:导出失败

  
file_path| String| 电子拷贝下载路径，该字段只有在任务状态是“EXPORTED”才会有值。  
status_time| DateTime| 状态最后更新时间。  
  
  


错误码说明：

**错误码**| **原因**| **说明**  
---|---|---  
10020| invalidParameter| 非法参数。  
10008| tooFrequentRequest| 接口请求过于频繁。  
  
  

