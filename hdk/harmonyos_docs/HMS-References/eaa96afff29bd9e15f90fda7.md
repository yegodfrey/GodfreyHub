---
name: document/cn/HMS-References/hms-map-matrix-development
title: Matrix API
uri: https://developer.huawei.com/consumer/cn/doc/HMS-References/hms-map-matrix-development
source: portal
---

# 步行矩阵规划  
  
### 1\. 使用样例

请求消息：
      
      1. POST https://mapapi.cloud.huawei.com/mapApi/v1/routeService/walkingMatrix?key=API KEY HTTP/1.1 
        2. Content-Type: application/json 
        3. Accept: application/json 
        4. { 
        5.     "origins": [ 
        6.             {"lng": 2.359782, "lat": 48.862544}, 
        7.             {"lng": 2.358537, "lat": 48.861443} 
        8.     ], 
        9.     "destinations": [ 
        10.             {"lng": 2.361702, "lat": 48.860420} 
        11.     ], 
        12.     "language": "en" 
        13. }
    
    

响应消息：
      
      1. { 
        2.   "originAddresses": [ 
        3.     "3e Arrondissement, Paris, Ile-de-France, France", 
        4.     "3e Arrondissement, Paris, Ile-de-France, France" 
        5.   ], 
        6.   "returnCode": "0", 
        7.   "destinationAddresses": [ 
        8.     "3e Arrondissement, Paris, Ile-de-France, France" 
        9.   ], 
        10.   "rows": [ 
        11.     { 
        12.       "cells": [ 
        13.         { 
        14.           "duration": 268, 
        15.           "durationText": "4min", 
        16.           "distance": 353, 
        17.           "distanceText": "353m", 
        18.           "status": 0 
        19.         } 
        20.       ] 
        21.     }, 
        22.     { 
        23.       "cells": [ 
        24.         { 
        25.           "duration": 256, 
        26.           "durationText": "4min", 
        27.           "distance": 352, 
        28.           "distanceText": "352m", 
        29.           "status": 0 
        30.         } 
        31.       ] 
        32.     } 
        33.   ], 
        34.   "returnDesc": "OK" 
        35. }
    
    

### 2\. 请求参数

HTTP请求：

> POST  https://mapapi.cloud.huawei.com/mapApi/v1/routeService/walkingMatrix?key=API KEY

注意：

使用API KEY需要进行**encodeURI** 编码。例如：原始API KEY：**ABC/DFG+** ，转换结果：**ABC%2FDFG%2B。**

步行矩阵规划请求参数通过JSON Body体的方式进行携带，下面的列表对相关参数进行说明。相关参数类型详细说明请参见“[参数说明](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-directions-parameters)”章节描述。

**参数名称**| **必选(M)/可选(O)**| **参数类型**| **参数说明**  
---|---|---|---  
origins| M| [Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-directions-parameters#coordinate)[]| 起点的经纬度，不能超过5个。  
destinations| M| [Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-directions-parameters#coordinate)[]| 终点的经纬度，不能超过5个。  
language| O| String(<=6)| 返回结果中对距离和时间描述所使用的语种。目前只支持zh_CN和en  
  
 _注：起点和终点的直线距离不能超过100km_

### 3\. 返回参数

**参数名称**| **必选(M)/可选(O)**| **参数类型**| **参数说明**  
---|---|---|---  
returnCode| M| String| 返回码，具体请参考“[返回码](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-matrix-return-codes)”。  
returnDesc| O| String| 返回值描述。  
originAddresses| O| String[]| Origins的地址详情。  
destinationAddresses| O| String[]| Destinations的地址详情。  
rows| O| [Row](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-directions-parameters#row)[]| Origins和Destinations两两进行路径规划后的计算出来的时长和距离，具体参数请参考“[参数说明](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-directions-parameters)”章节描述。  
  
# 骑行矩阵规划

### 1\. 使用样例

请求消息：
      
      1. POST https://mapapi.cloud.huawei.com/mapApi/v1/routeService/bicyclingMatrix?key=API KEY HTTP/1.1 
        2. Content-Type: application/json 
        3. Accept: application/json 
        4. { 
        5.     "origins": [ 
        6.             {"lng": 2.359782, "lat": 48.862544} 
        7.     ], 
        8.     "destinations": [ 
        9.             {"lng": 2.361702, "lat": 48.860420} 
        10.     ], 
        11.     "language": "en" 
        12. }
    
    

响应消息：
      
      1. { 
        2.   "originAddresses": [ 
        3.     "3e Arrondissement, Paris, Ile-de-France, France" 
        4.   ], 
        5.   "returnCode": "0", 
        6.   "destinationAddresses": [ 
        7.     "3e Arrondissement, Paris, Ile-de-France, France" 
        8.   ], 
        9.   "rows": [ 
        10.     { 
        11.       "cells": [ 
        12.         { 
        13.           "duration": 137, 
        14.           "durationText": "2min", 
        15.           "distance": 353, 
        16.           "distanceText": "353m", 
        17.           "status": 0 
        18.         } 
        19.       ] 
        20.     } 
        21.   ], 
        22.   "returnDesc": "OK" 
        23. }
    
    

### 2\. 请求参数

HTTP请求：

> POST  https://mapapi.cloud.huawei.com/mapApi/v1/routeService/bicyclingMatrix?key=API KEY

注意：

使用API KEY需要进行**encodeURI** 编码。例如：原始API KEY：**ABC/DFG+** ，转换结果：**ABC%2FDFG%2B。**

骑行矩阵规划请求参数通过JSON Body体的方式进行携带，下面的列表对相关参数进行说明。相关参数类型详细说明请参见“[参数说明](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-directions-parameters)”章节描述。

**参数名称**| **必选(M)/可选(O)**| **参数类型**| **参数说明**  
---|---|---|---  
origins| M| [Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-directions-parameters#coordinate)[]| 起点的经纬度，不能超过5个。  
destinations| M| [Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-directions-parameters#coordinate)[]| 终点的经纬度，不能超过5个。  
language| O| String(<=6)| 返回结果中对距离和时间描述所使用的语种。目前只支持zh_CN和en  
  
 _注：起点和终点的直线距离不能超过100km_

### 3\. 返回参数

**参数名称**| **必选(M)/可选(O)**| **参数类型**| **参数说明**  
---|---|---|---  
returnCode| M| String| 返回码，具体请参考“[返回码](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-matrix-return-codes)”。  
returnDesc| O| String| 返回值描述。  
originAddresses| O| String[]| Origins的地址详情。  
destinationAddresses| O| String[]| Destinations的地址详情。  
rows| O| [Row](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-directions-parameters#row)[]| Origins和Destinations两两进行路径规划后的计算出来的时长和距离，具体参数请参考“[参数说明](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-directions-parameters)”章节描述。  
  
# 驾车矩阵规划

### 1\. 使用样例

请求消息：
      
      1. POST https://mapapi.cloud.huawei.com/mapApi/v1/routeService/drivingMatrix?key=API KEY HTTP/1.1 
        2. Content-Type: application/json 
        3. Accept: application/json 
        4. { 
        5.     "origins": [ 
        6.             {"lng": -1.894679, "lat": 54.974887}, 
        7.             {"lng": -2.882682, "lat": 54.857616} 
        8.     ], 
        9.     "destinations": [ 
        10.             {"lng": -1.744955, "lat": 54.775040} 
        11.     ], 
        12.     "avoid": [1,2], 
        13.     "departAt":1678435530, 
        14.     "trafficMode":2, 
        15.     "language": "en" 
        16. }
    
    

响应消息：
      
      1. { 
        2.   "originAddresses": [ 
        3.     "Ovington, Northumberland, England, United Kingdom", 
        4.     "Saint Cuthbert Without, Carlisle, Cumbria, England, United Kingdom" 
        5.   ], 
        6.   "returnCode": "0", 
        7.   "destinationAddresses": [ 
        8.     "Hedleyhope, Durham, England, United Kingdom" 
        9.   ], 
        10.   "rows": [ 
        11.     { 
        12.       "cells": [ 
        13.         { 
        14.           "duration": 2183, 
        15.           "durationText": "36min", 
        16.           "distance": 36129, 
        17.           "distanceText": "36.1km", 
        18.           "status": 0 
        19.         } 
        20.       ] 
        21.     }, 
        22.     { 
        23.       "cells": [ 
        24.         { 
        25.           "duration": 4888, 
        26.           "durationText": "1h21min", 
        27.           "distance": 104703, 
        28.           "distanceText": "104.7km", 
        29.           "status": 0 
        30.         } 
        31.       ] 
        32.     } 
        33.   ], 
        34.   "returnDesc": "OK" 
        35. }
    
    

### 2\. 请求参数  


HTTP请求：

> POST  https://mapapi.cloud.huawei.com/mapApi/v1/routeService/drivingMatrix?key=API KEY

注意：

使用API KEY需要进行**encodeURI** 编码。例如：原始API KEY：**ABC/DFG+** ，转换结果：**ABC%2FDFG%2B。**

驾车矩阵规划请求参数通过JSON Body体的方式进行携带，下面的列表对相关参数进行说明。相关参数类型详细说明请参见“[参数说明](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-directions-parameters)”章节描述。

**参数名称**| **必选(M)/可选(O)**| **参数类型**| **参数说明**  
---|---|---|---  
origins| M| [Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-directions-parameters#coordinate)[]| 起点的经纬度，不能超过5个。  
destinations| M| [Coordinate](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-directions-parameters#coordinate)[]| 终点的经纬度，不能超过5个。  
avoid| O| int[]| 表示计算出的路径应避免所指示的特性，取值包括：

  * 1：避免经过收费的公路
  * 2：避开高速公路

如果不传，默认就是按时间最短返回。  
departAt| O| long| 预计出发时间。以自UTC  1970年1月1日午夜以来的秒数为单位。必须是当前或者未来时间，不能是过去时间。  
trafficMode| O| int| 时间预估模型。取值包括：

  * 0：best guess(默认)
  * 1：路况差于历史平均水平
  * 2：路况优于历史平均水平

  
language| O| String(<=6)| 返回结果中对距离和时间描述所使用的语种。目前只支持zh_CN和en  
  
 _注：起点和终点的直线距离不能超过100km_

### 3\. 返回参数

**参数名称**| **必选(M)/可选(O)**| **参数类型**| **参数说明**  
---|---|---|---  
returnCode| M| String| 返回码，具体请参考“[返回码](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-matrix-return-codes)”。  
returnDesc| O| String| 返回值描述。  
originAddresses| O| String[]| Origins的地址详情。  
destinationAddresses| O| String[]| Destinations的地址详情。  
rows| O| [Row](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-directions-parameters#row)[]| Origins和Destinations两两进行路径规划后的计算出来的时长和距离，具体参数请参考“[参数说明](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/hms-map-directions-parameters)”章节描述。  
  
  

