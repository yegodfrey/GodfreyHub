---
name: document/cn/HMSCore-Guides/verifying-signature-returned-result-0000001050033088
title: 对返回结果验签
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/verifying-signature-returned-result-0000001050033088
---

# 对返回结果验签

在接口调用过程中，请求方在获取接收方的响应结果后，如果返回结果中包含了签名字符串，请求方可以对签名字符串使用IAP公钥进行验签，确认返回结果没有被篡改。公钥获取参见[查询支付服务信息](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/query-payment-info-0000001050166299)。建议您把公钥存放在服务端并在服务端来完成签名校验，保证接口调用的安全性。

1. 获取需要验签的返回结果字符串，例如[obtainOwnedPurchases](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/iapclient-0000001050137587#section15126153542812)接口返回的inAppPurchaseDataList（购买数据[InAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/json-inapppurchasedata-0000001050986125)的JSON字符串列表）需要验签，先取inAppPurchaseDataList的第1条字符串参与验签。
2. 获取对应的签名字符串，例如[obtainOwnedPurchases](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/harmonyos-js-hmsiap-0000001333923881#section12785229123913)接口返回的inAppSignature（对应inAppPurchaseDataList的签名字符串列表），取inAppSignature的第1条签名字符串参与验签。
3. 使用IAP公钥对结果字符串和对应的签名字符串进行验签。可从返回对象（[PurchaseResultInfo](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/purchaseresultinfo-0000001050135886)、[OwnedPurchasesResult](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ownedpurchasesresult-0000001050135770)和[ConsumeOwnedPurchaseResult](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/consumeownedpurchaseresult-0000001050137625)）中获取signatureAlgorithm（例如：[OwnedPurchasesResult.getSignatureAlgorithm](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ownedpurchasesresult-0000001050135770#section1721042803811)），然后使用获取到的算法进行验签。若获取到的算法为空，则使用SHA256WithRSA算法进行验签。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260206135214.16820269972322797776255727606023:50001231000000:2800:6E0824525F2713DC271F09B5DD2861AF7CFF2E42134FCF386839C75C4D645AA1.png)  
IAP提供了Java、PHP、C#、Python、Node.js、Golang、Ruby和Perl语言的示例代码，具体请参见[服务端示例代码](https://developer.huawei.com/consumer/cn/doc/HMSCore-Examples/server-sample-code-0000001050145549)。  

```
"Android"
/** 
 * 校验签名信息
 *
 * @param content 结果字符串
 * @param sign 签名字符串
 * @param publicKey IAP公钥
 * @return 是否校验通过
 */ 
public static boolean checkSign(String content, String sign, String publicKey) {
    return checkSign(content, sign, publicKey, "SHA256WithRSA");;
}

/** 
 * 校验签名信息
 *
 * @param content 结果字符串
 * @param sign 签名字符串
 * @param publicKey IAP公钥
 * @param signatureAlgorithm 签名算法字段，可从接口返回数据中获取，例如：OwnedPurchasesResult.getSignatureAlgorithm()
 * @return 是否校验通过
 */
public static boolean checkSign(String content, String sign, String publicKey, String signatureAlgorithm) {
    if (TextUtils.isEmpty(content) || TextUtils.isEmpty(sign)) {
        return false;
    }
    if (TextUtils.isEmpty(publicKey)) {
        return false;
    }
    // 当signatureAlgorithm为空时使用默认签名算法
    if (TextUtils.isEmpty(signatureAlgorithm)) {
        signatureAlgorithm = "SHA256WithRSA";
    }
    try {
        // 生成"RSA"的KeyFactory对象
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        byte[] decodedKey = Base64.decode(publicKey, Base64.DEFAULT);
        // 生成公钥
        PublicKey pubKey = keyFactory.generatePublic(new X509EncodedKeySpec(decodedKey));
        // 根据SHA256WithRSA算法获取签名对象实例
        java.security.Signature signature = java.security.Signature.getInstance(signatureAlgorithm);
        // 初始化验证签名的公钥
        signature.initVerify(pubKey);
        // 把原始报文更新到签名对象中
        signature.update(content.getBytes("utf-8"));
        // 将sign解码
        byte[] bsign = Base64.decode(sign, Base64.DEFAULT);
        // 进行验签
        return signature.verify(bsign);
    } catch (NoSuchAlgorithmException e) {
        Log.e("doCheck", "NoSuchAlgorithmException" + e);
    } catch (InvalidKeySpecException e) {
        Log.e("doCheck", "InvalidKeySpecException" + e);
    } catch (InvalidKeyException e) {
        Log.e("doCheck", "InvalidKeyException" + e);
    } catch (SignatureException e) {
        Log.e("doCheck", "SignatureException" + e);
    } catch (UnsupportedEncodingException e) {
        Log.e("doCheck", "UnsupportedEncodingException" + e);
    }
    return false;
}
```

```
"Java"
/** 
 * 校验签名信息 
 *
 * @param content 结果字符串
 * @param sign 签名字符串
 * @param publicKey IAP公钥
 * @param yourOrderInfo 您的订单信息，包括productId、price、currency
 * @return 是否校验通过
 */ 
public static boolean checkSign(String content, String sign, String publicKey, YourOrderInfo yourOrderInfo) {
    return checkSign(content, sign, publicKey, "SHA256WithRSA");
}

/** 
 * 校验签名信息
 *
 * @param content 结果字符串
 * @param sign 签名字符串
 * @param publicKey IAP公钥
 * @param signatureAlgorithm 签名算法字段，可从接口返回数据中获取，例如：OwnedPurchasesResult.getSignatureAlgorithm()
 * @return 是否校验通过
 */ 
public static boolean checkSign(String content, String sign, String publicKey, String signatureAlgorithm) { 
    if (sign == null) { 
        return false; 
    } 
    if (publicKey == null) { 
        return false; 
    } 
    
   // 当signatureAlgorithm为空时使用默认签名算法
   if (signatureAlgorithm == null || signatureAlgorithm.length() == 0) {
        signatureAlgorithm = "SHA256WithRSA";
        System.out.println("doCheck, algorithm: SHA256WithRSA");
    }
    try { 
        Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
        // 生成"RSA"的KeyFactory对象
        KeyFactory keyFactory = KeyFactory.getInstance("RSA"); 
        byte[] decodedKey = Base64.decodeBase64(publicKey); 
        // 生成公钥
        PublicKey pubKey = keyFactory.generatePublic(new X509EncodedKeySpec(decodedKey)); 
        java.security.Signature signature = null; 
        // 根据SHA256WithRSA算法获取签名对象实例
        signature = java.security.Signature.getInstance(signatureAlgorithm); 
        // 初始化验证签名的公钥
        signature.initVerify(pubKey); 
        // 把原始报文更新到签名对象中
        signature.update(content.getBytes(StandardCharsets.UTF_8));
        // 将sign解码
        byte[] bsign = Base64.decodeBase64(sign);
        // 进行验签
        return signature.verify(bsign); 
    } catch (RuntimeException e) { 
        throw e; 
    } catch (Exception e) { 
        e.printStackTrace(); 
    } 
    return false; 
}
```

```
"HarmonyOS-JavaScript"
// 执行CMD命令打开命令行工具，执行cd命令进入HarmonyOS应用"entry"目录。
// 引入jsrsasign库
npm install jsrsasign

// 编写工具类 CipherUtil.js
import jsrsasign from 'jsrsasign/lib/jsrsasign'

// IAP公钥
const PUBLIC_KEY = 'XXXXXXXXXXXX';
// 默认SHA256withRSA算法
const DEFAULT_ALGORITHM = 'SHA256withRSA';

export default {
    checkSign(content, sign, yourOrderInfo) {
        // 生成公钥对象
        const pubk = "-----BEGIN PUBLIC KEY-----\n" + PUBLIC_KEY + "-----END PUBLIC KEY-----"
        let rsaKey = new jsrsasign.RSAKey();
        rsaKey = jsrsasign.KEYUTIL.getKey(pubk);
        const sig = new jsrsasign.KJUR.crypto.Signature({
            alg: DEFAULT_ALGORITHM
        });
        sig.init(rsaKey);
        sig.updateString(content)
        // 对签名数据sign进行校验，true为验签通过
        let res = sig.verify(jsrsasign.b64tohex(sign))
        return res;
    } 
}
```

```
"HarmonyOS-ArkTS"
import cryptoFramework from '@ohos.security.cryptoFramework';
import util from '@ohos.util';
import hilog from '@ohos.hilog';

const sign = 'SPmlHLKaoxCEgFUusyJTHzhhBfBwlU65......'
const content = "{\"autoRenewing\":false,\"ord......"
const pubkey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ......'

function checkSign(sign, content):Promise<void> {
  return new Promise((success, reject) => {
    let rsaGenerator = cryptoFramework.createAsyKeyGenerator("RSA3072");
    let base64 = new util.Base64Helper()
    let pkBlob = {data : base64.decodeSync(pubkey)};
    rsaGenerator.convertKey(pkBlob, null, function(err, keyPair) {
      if (keyPair == null) {
        hilog.info(0x0001, "Iap Demo", "convertKey fail.")
        reject()
        return
      }
      // use SHA256WithRSA/PSS
      let verifyer = cryptoFramework.createVerify("RSA3072|PSS|SHA256|MGF1_SHA256");
      let verifyInitPromise = verifyer.init(keyPair.pubKey);
      verifyInitPromise.then(() => {
        let contentBlob = {data : (new util.TextEncoder()).encodeInto(content)};
        let signDataBlob = {data : base64.decodeSync(sign)};
        return verifyer.verify(contentBlob, signDataBlob);
      }).then(res => {
        hilog.info(0x0001, "Iap Demo", "Verify result is " + res);
        if (res === true) {
          success()
        } else {
          reject()
        }
      }).catch(err => {
        reject()
      });
    })
  })
}
```

