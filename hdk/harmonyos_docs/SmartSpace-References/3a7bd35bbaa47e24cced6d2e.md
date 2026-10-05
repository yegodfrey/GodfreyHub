---
name: document/cn/SmartSpace-References/signature-authentication-guide-0000001455235350
title: AK/SK签名认证操作指导
uri: https://developer.huawei.com/consumer/cn/doc/SmartSpace-References/signature-authentication-guide-0000001455235350
---

# AK/SK签名认证操作指导

AK/SK签名机制，以创建空间的报文为例：

```screen
POST 
https://domain:port/openapi/asset/v1/space
Content-Type:application/json
Accept: application/json
x-access-key: 101867757
x-project-id: 123456112355442
x-request-id: 4871cc67-a2ec-41f7-b4e7-a5c1b236ee1b
x-timestamp：1640759898914
x-sign:  x-access-key,x-project-id,x-request-id,x-timestamp;MTIzMTIzMTLpmLAOIYTkjYTTHpPIWNUTGFEEE
 
Body
{
         "scenarioType" : "0"
}
```

1. 首先构造待签名的字符串：
   1. 计算header区数据headStr = 1018677571234561123554424871cc67-a2ec-41f7-b4e7-a5c1b236ee1b1640759898914

      （分别为**x-access-key,x-project-id,x-request-id,x-timestamp** **的值** ，**注意必须要报文头的顺序一致**）
   2. 计算body区数据bodyStr = {"scenarioType" : "0"} 注：如果没有消息体，则bodyStr为空字符串

   3. 得到最终待签名的字符串：stringToSign = headStr + bodyStr;

2、计算哈希值：hashValue=Base64(HMAC-SHA256(stringToSign,secretKey));

3、转小写格式：hashValue = hashValue.toLowerCase(Locale.ENGLISH)

4、 Header区的x-sign = x-access-key,x-project-id,x-request-id,x-timestamp;hashValue

5、 AK/SK签名认证客户端Java代码Demo：

```codeblock
private static String caleHash(String projectId, String requestId, String timestamp, String messageBody,
       String accessKey, String secretKey) throws NoSuchAlgorithmException, InvalidKeyException {
 
        // 拼接字符串，生成待签名原始字符串
        String stringToSign = accessKey + projectId + requestId + timestamp + messageBody;
 
        // 用HmacSHA256计算签名
        Mac sha256HMAC = Mac.getInstance("HmacSHA256");
              // secretKey为16进制的字符串，建议用hex转成字节数组
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey转成字节数组, "HmacSHA256");
        sha256HMAC.init(secretKeySpec);
        byte[] hashByteArray = sha256HMAC.doFinal(stringToSign.getBytes(StandardCharsets.UTF_8));
 
        // Base64转码
        String base64String = java.util.Base64.getEncoder().encodeToString(hashByteArray);
 
        // 转小写
        base64String = base64String.toLowerCase(Locale.ENGLISH);
 
        // 生成Http header x-sign字段的值。
        return "x-access-key,x-project-id,x-request-id,x-timestamp;" + base64String;
    }
```

> 说明
>
> secretKey转成字节数组:建议使用Hex.decodeHex(secretKey), 其中Hex为org.apache.commons.codec.binary包的类
