---
name: document/cn/SPPartnerCenter-develop-Guides/ht-obbfile-init-0000002338698976
title: 分片上传初始化
uri: https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/ht-obbfile-init-0000002338698976
source: portal
---

# 分片上传初始化  
  
#### 功能介绍

此接口用于分片信息初始化，在获取分片文件上传地址前调用。

#### 接口原型

承载协议 | HTTPS POST  
---|---  
接口方向 | 服务商服务器 -> 华为服务器  
接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/upload/multipart/init  
数据格式 | 请求：Content-Type: application/json 响应：Content-Type: application/json  
  
#### 请求参数

#### [h2]Header

参数名称 | 必选(M)/可选(O) | 类型 | 参数说明  
---|---|---|---  
client_id | M | String | API客户端ID。 创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台“开发配置 > 开发资料设置”页面中获取，详情请参见[接口访问凭证（平台访问凭据）](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/ht-configure-platform-0000002372776705#ZH-CN_TOPIC_0000002372776705__zh-cn_topic_0000002329159394_p0838591506)。# 分片上传初始化  
  
#### 功能介绍

此接口用于分片信息初始化，在获取分片文件上传地址前调用。

#### 接口原型

| 承载协议 | HTTPS POST  
---|---  
接口方向 | 服务商服务器 -> 华为服务器  
接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/upload/multipart/init  
数据格式 | 请求：Content-Type: application/json 响应：Content-Type: application/json  
  
#### 请求参数

#### [h2]Header

参数名称 | 必选(M)/可选(O) | 类型 | 参数说明  
---|---|---|---  
client_id | M | String | API客户端ID。 创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台“开发配置 > 开发资料设置”页面中获取，详情请参见[接口访问凭证（平台访问凭据）](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/ht-configure-platform-0000002372776705#ZH-CN_TOPIC_0000002372776705__zh-cn_topic_0000002329159394_p0838591506)。  
Authorization | M | String | 认证信息，格式为“Authorization: Bearer ${access_token}”。access_token为[获取平台级Token](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/ht-get-token-0000002338698720)中获取的access_token。  
  
#### [h2]Query

参数名称 | 必选(M)/可选(O) | 类型 | 参数说明  
---|---|---|---  
appId | M | String(32) | 应用ID。  
fileName | M | String(256) | 原始文件名，需要带文件后缀。  
contentType | O | String | 对象内容的类型，为http标准的content-type，例如image/jpeg。 如果不传，默认值：“application/octet-stream”。  
fileType | O | Integer | 文件类型。 取值范围：
                * 1：APP文件（元服务软件包）。
                * 2：OBB（Android APK扩展文件）。
                * 3：APK（Android软件包，含APK、AAB）。
默认值：2  
releaseType | O | Integer | 应用发布方式。 取值范围：
                * 1：全网发布。
                * 6：HarmonyOS测试发布（API>=10）。  
obbType | O | Integer | OBB文件类型。 取值范围：
                * 1：主扩展文件
                * 2：补丁扩展文件
上传OBB文件时必填，非OBB文件不能传入此参数。上传OBB文件前，应用最新版本必须已经关联了APK包。  
chineseMainlandFlag | O | Integer | 软件包是否分发中国大陆（不包括港澳台）。 取值范围：
                * 0：不分发中国大陆
                * 1：分发中国大陆
说明： 当fileType为1且开发者注册地非中国大陆时，必须设置chineseMainlandFlag参数。  
  
#### 响应参数

参数名称 | 必选(M)/可选(O) | 类型 | 参数说明  
---|---|---|---  
ret | M | ConnectRet | 包含返回码及描述信息的结果。  
objectId | M | String(128) | 生成的对象ID。在[获取分片上传地址](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/ht-obbfile-uploadurl-0000002372696865)时需要使用此ID。  
nspPartMinSize | M | Integer(64) | 分片文件的最小值，单位字节。默认分片最小值为5MB。  
nspPartMaxSize | M | Integer(64) | 分片文件的最大值，单位字节。默认分片最大值为1024MB。  
nspUploadId | M | String(128) | 文件上传ID。在[获取分片上传地址](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/ht-obbfile-uploadurl-0000002372696865)时需要使用此ID。  
  
**ConnectRet**

参数名称 | 必选(M)/可选(O) | 类型 | 参数说明  
---|---|---|---  
code | O | Integer | 返回码，请参见[错误码](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/ht-error-code-information-0000002338858792)。  
msg | O | Authorization | M | String | 认证信息，格式为“Authorization: Bearer ${access_token}”。access_token为[获取平台级Token](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/ht-get-token-0000002338698720)中获取的access_token。  
  
#### [h2]Query

参数名称 | 必选(M)/可选(O) | 类型 | 参数说明  
---|---|---|---  
appId | M | String(32) | 应用ID。  
fileName | M | String(256) | 原始文件名，需要带文件后缀。  
contentType | O | String | 对象内容的类型，为http标准的content-type，例如image/jpeg。 如果不传，默认值：“application/octet-stream”。  
fileType | O | Integer | 文件类型。 取值范围：
                * 1：APP文件（元服务软件包）。
                * 2：OBB（Android APK扩展文件）。
                * 3：APK（Android软件包，含APK、AAB）。
默认值：2  
releaseType | O | Integer | 应用发布方式。 取值范围：
                * 1：全网发布。
                * 6：HarmonyOS测试发布（API>=10）。  
obbType | O | Integer | OBB文件类型。 取值范围：
                * 1：主扩展文件
                * 2：补丁扩展文件
上传OBB文件时必填，非OBB文件不能传入此参数。上传OBB文件前，应用最新版本必须已经关联了APK包。  
chineseMainlandFlag | O | Integer | 软件包是否分发中国大陆（不包括港澳台）。 取值范围：
                * 0：不分发中国大陆
                * 1：分发中国大陆
说明： 当fileType为1且开发者注册地非中国大陆时，必须设置chineseMainlandFlag参数。  
  
#### 响应参数

参数名称 | 必选(M)/可选(O) | 类型 String | 返回码描述信息。  
---|---|---|---  
  
# 更新测试版本

#### 功能介绍

此接口用于更新已创建的测试版本。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260126140046.33340958266293408937247934774354:50001231000000:2800:ABD8C65FBBC6C2B6DFCCB9EA8662551E4C21C1797009B6093DD461819E3792D3.png)

在架的测试版本不允许调用此接口。

                * 如果需要改其他参数，请新建一个测试版本。

#### 接口原型

承载协议 | HTTPS PUT  
---|---  
接口方向 | 服务商服务器 -> 华为服务器  
接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/test/app/version  
数据格式 | 请求：Content-Type: application/json 响应：Content-Type: application/json  
  
#### 请求参数

#### [h2]Header

参数名称 | 必选(M)/可选(O) | 类型 | 参数说明  
---|---|---|---  
client_id | M | String | API客户端ID。 创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台“开发配置 > 开发资料设置”页面中获取，详情请参见[接口访问凭证（平台访问凭据）](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/ht-configure-platform-0000002372776705#ZH-CN_TOPIC_0000002372776705__zh-cn_topic_0000002329159394_p0838591506)。  
Authorization | M | String | 认证信息，格式为“Authorization: Bearer ${access_token}”。access_token为[获取平台级Token](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/ht-get-token-0000002338698720)中获取的access_token。  
  
#### [h2]Query

参数名称 | 必选(M)/可选(O) | 类型 | 参数说明  
---|---|---|---  
appId | M | String | 应用ID。  
  
#### [h2]Body

请求Body中使用JSON格式携带需要更新的测试版本信息，参数如下表所示。

参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 | 参数说明  
---|---|---|---|---  
ret | M | ConnectRet | 包含返回码及描述信息的结果。  
objectId | M | String(128) | 生成的对象ID。在[获取分片上传地址](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/ht-obbfile-uploadurl-0000002372696865)时需要使用此ID。  
nspPartMinSize | M | Integer(64) | 分片文件的最小值，单位字节。默认分片最小值为5MB。  
nspPartMaxSize | M | Integer(64) | 分片文件的最大值，单位字节。默认分片最大值为1024MB。  
nspUploadId | M | String(128) | 文件上传ID。在[获取分片上传地址](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/ht-obbfile-uploadurl-0000002372696865)时需要使用此ID。  
  
**ConnectRet**

参数名称 | 必选(M)/可选(O) | 类型 | 参数说明  
---|---|---|---  
code | O | Integer | 返回码，请参见[错误码](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/ht-error-code-information-0000002338858792)。  
msg | O | String | 返回码描述信息。
