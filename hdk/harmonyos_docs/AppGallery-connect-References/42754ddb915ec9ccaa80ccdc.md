---
name: document/cn/AppGallery-connect-References/binary-optimization-obtain-url-0000001863302878
title: 获取文件上传地址
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/binary-optimization-obtain-url-0000001863302878
---

# 获取文件上传地址

## 功能介绍

调用此接口可以获取so文件、profile文件、symbol文件的上传地址。

## 接口原型

|承载协议|HTTPS|
|-----|-----------------------------------------------------------------------|
|接口方向|开发者服务器 -> 华为服务器|
|接口方法|POST|
|接口URL|https://connect-api.cloud.huawei.com/api/gpos/v1/file/upload/url|
|数据格式|* 请求：Content-Type: application/json * 响应：Content-Type: application/json|

## 请求参数

### Header

|参数|类型|必选(M)/可选(O)|说明|
|:------------|:-----|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Content-Type|string|M|固定取值为"application/json"。|
|client_id|string|M|客户端ID，即[创建API客户端](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/binary-optimization-agc-works-0000001588520205#section2939558155118)中生成的客户端ID。|
|Authorization|string|M|认证信息，格式为"Authorization: Bearer ${access_token}"，其中access_token为调用[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/binary-optimization-obtain-token-0000001909302281)接口返回的access_token。|
|projectId|string|M|在AppGallery Connect[创建项目和应用](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/binary-optimization-agc-works-0000001588520205#section210054711512)后的项目ID。最大长度20个字符。|

### Body

|参数|类型|必选(M)/可选(O)|说明|
|:---------|:-----|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
|fileName|string|M|包含后缀名的文件名称，最大长度256个字符。具体要求如下： * 文件名不能有特殊字符：（%）（/）（\）。 * 文件后缀支持so、tar、sym。|
|fileSha256|string|M|文件内容的sha256哈希值，在上传到文件服务器后会执行完整性校验。根据文件生成sha256的示例代码可参见[sha256哈希值](#ZH-CN_TOPIC_0000001863302878__zh-cn_topic_0000001536629733_p14017735218)。最大长度64个字符。|
|fileSize|int|M|待上传文件的大小，单位：字节。文件大小要求不超过4GB。|

sha256哈希值

```screen
     /**
     * 16进位编码
     */
    private static final char[] HEX_CODE = "0123456789ABCDEF".toCharArray();
     /**
     * 获取文件SHA256值
     *
     * @param filePath 入参
     * @return 文件SHA256值
     * @throws AvatarException
     */
    public static String getFileSha256(String filePath) {
        try (FileInputStream fileInputStream = new FileInputStream(filePath)) {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            ByteBuffer buffer = ByteBuffer.allocate(4096);
            FileChannel channel = fileInputStream.getChannel();
            while (channel.read(buffer) != -1) {
                buffer.flip();
                md.update(buffer);
                buffer.clear();
            }
            return toHexString(md.digest());
        } catch (IOException | NoSuchAlgorithmException e) {
            Log.e(TAG, "getFileSha256 onResponse Exception:" + e.getMessage());
            return "";
        }
    }
    /**
     * 将byte转hex
     *
     * @param data byte数组
     * @return String
     */
    public static String toHexString(byte[] data) {
        StringBuilder r = new StringBuilder(data.length * 2);
        for (byte b : data) {
            r.append(HEX_CODE[(b >> 4) & 0xF]);
            r.append(HEX_CODE[(b & 0xF)]);
        }
        return r.toString().toLowerCase(Locale.US);
    }
```

## 请求示例

```screen
POST /api/gpos/v1/file/upload/url
Host: connect-api.cloud.huawei.com
Content-Type: application/json
client_id: ***
Authorization: Bearer ***
projectId: ***

{
  "fileName": "test.so",
  "fileSha256": "fe2***1d",
  "fileSize": 20000
}
```

## 响应参数

|参数|类型|必选(M)/可选(O)|说明|
|:---|:-----------------------------------------------------------------------------------------|:----------|:-----------------------------------------------------------------|
|ret|[CommonRet](#ZH-CN_TOPIC_0000001863302878__zh-cn_topic_0000001536629733_p1170913233715)|M|包含返回码及描述信息的JSON字符串，格式为{"code":*retcode* , "msg": "*description*"}。|
|data|[CommonUrlInfo](#ZH-CN_TOPIC_0000001863302878__zh-cn_topic_0000001536629733_p886916120356)|O|若调用成功，将返回文件上传信息。|

CommonRet参数说明

|参数|类型|必选(M)/可选(O)|说明|
|:---|:-----|:----------|:---------------------------|
|code|int|O|[返回码](#section918166192811)。|
|msg|string|O|描述信息。|

CommonUrlInfo参数说明

|参数|类型|必选(M)/可选(O)|说明|
|:-------|:-----|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|objectId|string|O|文件在文件服务器中的对象ID。|
|url|string|O|单个文件的上传URL，例如*https://contentcenter.myhuaweicloud.com/GameCenter_xxx/67/v3/xxx/xxx.so*。 > 说明 > 文件上传地址有效时间约为15分钟，超时后地址将失效，您需重新调用此接口获取文件上传地址。|
|method|string|O|上传文件的HTTP请求方法： * POST * PUT|
|headers|string|O|通过文件上传URL上传文件至文件服务器时，请求头所需的参数，为JSON结构，格式为：{"x-amz-content-sha256":"***","Authorization":"***","x-amz-date":"***","Host":"***","Content-Type":"***"}，详情可参见[上传单个文件](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/binary-optimization-upload-files-0000001909142601)。|

## 响应示例

```screen
{
    "ret": {
        "code": 0,
        "msg": "Success"
    },
    "data": {
        "objectId": "pvt_2/GameCenter_perf_900_9/2/v3/8VJBonG4T1CyxP88MM0IuQ/xxx.so",
        "url": "https://contentcenter.myhuaweicloud.com/GameCenter_xxx/67/v3/xxx/xxx.so",
        "method": "PUT",
        "headers": {
             "x-amz-content-sha256":"a06***8d3",
             "Authorization":"***",
             "x-amz-date":"20220615T033053Z",
             "Host":"nsp-contentcenter-content-p01-drcn.obs.cn-north-2.myhuaweicloud.cn",
             "Content-Type":"application/octet-stream"
        }
    }
}
```

## 返回码

|code|msg|Description|
|:---|:------------------------|:-------------------------------------------|
|0|Success|成功。|
|1015|The file name is invalid.|* 文件名不能有特殊字符：（%）（/）（\）。 * 文件后缀仅支持so、tar、sym。|
|1016|The file is too large.|目前文件最大支持4GB。|
|3001|invalid parameters.|参数错误。|

