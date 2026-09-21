---
name: document/cn/FASP-by-Template-develop-References/recordal-upload-relation-0000002521363641
title: 上传订单关联附件
uri: https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/recordal-upload-relation-0000002521363641
---

# 上传订单关联附件

## 功能介绍

此接口用于上传附件并且修改附件关联的对象ID和附件关联的备案订单ID。

## 接口原型

|承载协议|HTTPS POST|
|-----|---------------------------------------------------------------------------|
|接口方向|服务商服务器 -> 华为服务器|
|接口URL|https://connect-api.cloud.huawei.com/api/icp-manage/v1/file/upload-relation|
|数据格式|请求：Content-Type: application/json 响应：Content-Type: application/json|

## 请求参数

### Header

|**参数**|必选(M)/可选(O)|**类型**|**说明**|
|:------------|:----------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|client_id|M|String|API客户端ID。 创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台"开发配置 > 开发资料设置"页面中获取，详情请参见[获取平台访问凭据](https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/obtain-development-infor-0000002523235520#section3986829135420)。|
|Authorization|M|String|认证信息。 格式为"Authorization: Bearer *${access_token}*"。 其中，*${access_token}* 为[获取平台级Token](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/get-token-0000001569170877)中获取的access_token。|
|appId|M|String(32)|应用ID。 元服务则为元服务的应用ID。 应用ID可以调用[获取指定授权账号详情](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/get-authorization-info-0000001501417588)接口从**authorizerAppId**字段获取。|

### Body

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:------------|:----------|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|file|M|file|附件对象。 附件大小不能超过10M，支持格式有： * .jpg * .png * .gif * .tif * .bmp * .mp4 * .doc * .pdf * .xlsx * .xml * .zip * .mov * .webm 说明 > 如果上传的附件是主体证件（如营业执照、居民身份证等），需满足文件分辨率为1100*1500；如果上传的附件是责任人证件（如居民身份证、护照等），需满足文件分辨率为1280*720|
|fileName|O|String(512)|文件名称。 文件名不能包含：:、*、?、|、<、>、&、'、"、/、;、\ > 说明 > 文件名称中文件类型必须与file字段传入文件类型保持一致。|
|id|O|String|附件关联记录ID。 此ID用于记录附件与对象（例如主体、负责人等）关联关系。 新增附件时，不需要上传此字段。只有在附件已经关联了对象，需要替换时，才需要上传此字段。 > 说明 > 在替换附件时，会通过**id** +**recordOrderId** +**relationId** 组合定位到对应的关联关系，上传文件后获得的**accessoryId**进行关联。 此入参值可以调用[查询备案订单详情](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/recordal-order-detail-0000002489083858)接口查询，从**Id**字段中获取。|
|recordOrderId|M|Integer(64)|备案订单ID。 此入参值可以在调用[备案订单创建](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/recordal-subject-website-0000002489243844)、或[查询备案订单列表](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/recordal-order-infos-0000002521243661)接口时，从**orderId**字段中获取。|
|relationId|M|String|附件关联的对象ID。 此入参值可以在调用[查询订单所需要上传的附件](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/recordal-required-attachments-0000002521363645)、或[查询订单所需要上传的许可证](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/recordal-required-licenses-0000002489243836)接口时，从**relationId**字段中获取。|
|type|M|Integer(32)|附件类型。 取值范围： * 1：营业执照（个人或企业） * 2：居民身份证 * 3：组织机构代码证 * 4：事业单位法人证书 * 5：部队代号 * 6：社会团体法人登记证书 * 7：护照 * 9：组织机构代码证 * 10：组织机构代码证 * 11：台湾居民来往大陆通行证 * 12：组织机构代码证 * 13：统一社会信用代码证书 * 14：港澳居民来往内地通行证 * 15：统一社会信用代码证书 * 16：组织机构代码证 * 17：民办非企业单位登记证书 * 18：组织机构代码证 * 19：基金会法人登记证书 * 20：组织机构代码证 * 22：外国在华文化中心登记证 * 23：军队单位对外有偿服务许可证 * 24：统一社会信用代码证书 * 25：宗教活动场所登记证 * 27：外国企业常驻代表机构登记证 * 28：司法鉴定许可证 * 30：外国人永久居留身份证 * 34：外国政府旅游部门常驻代表机构批准登记证 * 35：其他境外机构登记证 * 36：社会服务机构登记证书 * 37：民办学校办学许可证 * 38：医疗机构执业许可证 * 39：公证机构执业证 * 40：北京市外国驻华使馆人员子女学校办学许可证 * 41：港澳居民居住证 * 42：台湾居民居住证 * 43：农村集体经济组织登记证 * 44：仲裁委员会登记证 * 46：境外非政府组织代表机构登记证书 * 47：外国驻华新闻机构证 * 48：港澳台地区旅游部门常驻代表机构批准登记证 * 49：中华人民共和国社会信用代码证书 * 1001：网站前置审批件 * 2023：ICP备案信息真实性责任告知书 * 2025：ICP备案信息真实性承诺书|
|side|O|Integer(32)|附件正反面**。** 取值范围： * 0：正面 * 1：反面|
|watermark|O|Boolean|是否加水印。 取值范围： * true：是 * false：否 默认值：true|
|subRelationId|O|String|附件关联的子项ID，此子项即元服务前置审批项。 > 说明 > * 此入参值可以调用[查询订单所需要上传的附件](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/recordal-required-attachments-0000002521363645)或[查询订单所需要上传的许可证](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/recordal-required-licenses-0000002489243836)接口查询，从**subRelationId**字段中获取。如果接口没有返回subRelationId字段，表示此元服务无需上传前置审批文件，则此字段无需赋值。 > * 如果设置此字段，type必须设置为1001。|

## 请求示例

```screen
POST /api/icp-manage/v1/file/upload-relation HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41******68
appId: 10*****57
Content-Type: application/json
Authorization: Bearer *******

Content-Type: multipart/form-data; boundary=--------------------------825106398021163894996015
Content-Length: 139649

----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="fileName"

居民身份证正面.png
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="type"

2
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="id"

1*****2
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="recordOrderId"

123
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="relationId"

1020251**0000021
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="side"

0
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="watermark"

true
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="subRelationId"

123***002
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file"; filename="/C:/Users/*****/Desktop/居民身份证正面.png"

(data)
----WebKitFormBoundary7MA4YWxkTrZu0gW
```

## 响应参数

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:--------------|:----------|:----------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------|
|ret|M|[BaseRet](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/recordal-baseret-0000002521363669)|包含返回码及描述信息的结果。|
|accessoryId|O|String|附件ID。|
|id|O|String|附件关联的记录ID。|
|versionId|O|String|附件的版本ID。|
|accessoryLength|O|Integer(64)|附件的文件大小。 用于记录更新后的文件大小返回给前台。|
|risk|O|Integer(32)|上传附件是否有翻拍风险。 取值范围： * 1：有翻拍风险 * 0：无翻拍风险|
|updateTime|O|String|附件的更新时间。 UTC时间格式：*YYYY-MM-DD* T*HH:MM:SS* *.sss*Z 示例：2025-10-09T07:50:10.968Z|

## 响应示例

```screen
{
  "ret": {
    "code": 0,
    "msg": "success"
  },
  "accessoryId": "d7dd10254****6cc8018741a40cf87a2",
  "id": "5d297221ae****b7ab1eeeaf83922bd8",
  "accessoryLength": 1978013,
  "risk": 0,
  "updateTime": "2025-12-01T08:14:08.193Z"
}
```

