---
name: document/cn/games-references/games-api-quickgame-server-verify-sign-0000002399676897
title: 对登录验签响应消息验签的方法
uri: https://developer.huawei.com/consumer/cn/doc/games-references/games-api-quickgame-server-verify-sign-0000002399676897
---

# 对登录验签响应消息验签的方法

在接口调用过程中，请求方在获取接收方的响应结果后，如果响应结果中包含了接收方返回的签名字符串，请求方可以对签名字符串进行验签，确认响应结果是否被篡改，保证接口调用的安全性。

1. 获取返回结果中的签名字符串，即校验登录签名接口返回的rtnSign字段。
2. 将返回参数中rtnCode和ts参数，按参数名首字母的ASCII码将参数升序排序。
3. 排序完成之后，将所有参与签名的参数名和参数值的键值对以"\&"字符连接成字符串，例如"rtnCode=xxxxxx\&ts=xxxxxxx"。  
   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212154036.61696130869352645772920889451064:50001231000000:2800:377206391D23466E3350F6ED68C03CCBAA099502A4B86670206D39F59A26C318.png)  
   * 参数名和参数值请勿进行urlencode。
   * 参数值应与响应消息中的实际参数值保持一致。
4. 使用游戏公钥对待验签字符串和响应消息的签名字符串进行验证。  
   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260212154036.13462286021510454055488328087660:50001231000000:2800:3BC8AB20DDFE42B72EBB1C4148B65DA92077FF2F2E9232734D9F9BB466403045.png)  
   游戏公钥在开通游戏服务后生成，查询方法参见[查询游戏服务信息](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-enable-account-kit-0000001159772367)。

Java示例代码如下：

```
/** 
 * 校验签名信息 
 * @param  content 待校验字符串 
 * @param sign  签名字符串 
 * @param publicKey 公钥 
 * @param signType 加密类型 
 * @param 是否校验通过 
*/
public static boolean doCheck(String content, String sign, String publicKey, String signType) {
   try {
      KeyFactory keyFactory = KeyFactory.getInstance("RSA");
      byte[] encodedKey = decoder.decode(publicKey);
      PublicKey pubKey = keyFactory.generatePublic(new X509EncodedKeySpec(encodedKey));
      java.security.Signature signature = null;
      if ("RSA256".equals(signType)) {
        signature = java.security.Signature.getInstance(SIGN_ALGORITHMS256);
      } else {
        signature = java.security.Signature.getInstance(SIGN_ALGORITHMS);
      }       
      signature.initVerify(pubKey);
      signature.update(content.getBytes("utf-8"));
      boolean bverify = signature.verify(decoder.decode(sign));
      return bverify;
   } catch (Exception e) {
     logger.error("验签异常", e);
   }
   return false;
}
```

