---
name: document/cn/FASP-by-Template-develop-References/provision-apply-cert-0000002483602973
title: 申请证书
uri: https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/provision-apply-cert-0000002483602973
source: portal
---

# 申请证书

#### 功能介绍

此接口用于申请二进制证书、In-house发布证书、调试证书或发布证书。

#### 接口原型

承载协议 |  HTTPS POST  
---|---  
接口方向 |  服务商服务器 -> 华为服务器  
接口URL |  https://connect-api.cloud.huawei.com/api/publish/v3/cert  
数据格式 |  请求：Content-Type: application/json 响应：Content-Type: application/json  
  
#### 请求参数

#### [h2]Header

**参数** |  必选(M)/可选(O) |  **类型** |  **说明**  
---|---|---|---  
client_id |  M |  String |  API客户端ID。 创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台“开发配置 > 开发资料设置”页面中获取，详情请参见[获取平台访问凭据](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/obtain-development-infor-0000002523235520#section3986829135420)。  
Authorization |  M |  String |  认证信息。 格式为“Authorization: Bearer _${access_token}_ ”。 其中， _${access_token}_ 为[获取平台级Token](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/get-token-0000001569170877)中获取的access_token。  
appId |  M |  String(32) |  应用ID。 元服务则为元服务的应用ID。 应用ID可以调用[获取指定授权账号详情](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/get-authorization-info-0000001501417588)接口从**authorizerAppId** 字段获取。  
  
#### [h2]Body

参数名称 |  必选(M)/可选(O) |  类型 |  参数说明  
---|---|---|---  
csr |  M |  String(2048) |  证书的CSR。  
certName |  M |  String(100) |  证书名称。  
certType |  M |  Integer(32) |  证书类型。 取值范围：

  * 1：调试
  * 2：发布
  * 3：In-house发布
  * 4：二进制证书（用于二进制程序签名）  说明：  二进制证书目前为受限开放，如需体验可通过[在线工单系统](https://developer.huawei.com/consumer/cn/support/feedback/#/)与我们联系。 工单“问题分类”请选择“AppGallery Connect > 证书、APP ID和Profile > 证书”，并在“问题描述”中提供如下信息：
    * 企业名称与资质
    * 应用名称及APP ID
    * 应用的业务场景与用途
    * 申请的证书类型：二进制证书

  
  
#### 请求样例
    
    
    POST /api/publish/v3/cert HTTP/1.1
    Host: connect-api.cloud.huawei.com
    client_id: 41******68
    Content-Type: application/json
    Authorization: Bearer ******
    appId: 1********57
    {
      "csr": "-----BEGIN NEW CERTIFICATE REQUEST-----****-----END NEW CERTIFICATE REQUEST-----",
      "certName": "test",
      "certType": 1
    }

#### 响应参数

参数名称 |  必选(M)/可选(O) |  类型 |  参数说明  
---|---|---|---  
ret |  M |  [ConnectRet](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/provision-connectret-0000002483482969) |  包含返回码及描述信息的结果。  
certInfo |  O |  [CertInfo](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/provision-certinfo-0000002483602989) |  证书信息。  
  
#### 响应示例
    
    
    {
      "ret": {
        "code": 0,
        "msg": "success"
      },
      "certInfo": {
        "id": "14***************72",
        "certName": "test",
        "certType": 1,
        "createTime": 1844593505000,
        "expireTime": 1718363106749,
        "certDownloadUrl": "https://****de0d.cer?X-Amz-Algorithm=****"
      }
    }
