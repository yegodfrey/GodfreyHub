---
name: document/cn/AppGallery-connect-References/genasykeypairbase64-0000001964620505
title: genAsyKeyPairBase64
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/genasykeypairbase64-0000001964620505
---

# genAsyKeyPairBase64

genAsyKeyPairBase64(alg: AsyKeyAlg): Promise\<AsyKeyPair\>

生成非对称算法的公私钥，返回base64编码的[AsyKeyPair](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/asykeypair-0000001964740729)。

导入模块：

```
import { aegis } from '@hw-agconnect/petal-aegis';
```

参数：  

|参数名|类型|必填|说明|
|:--|:-----------------------------------------------------------------------------------------------------------------|:-|:-------|
|alg|[AsyKeyAlg](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/asykeyalg-0000001937701462)|是|非对称算法枚举。|

返回值：  

|参数|类型|说明|
|:-----------|:---------|:-------------------------------------------------------------------|
|AsyKeyPair对象|AsyKeyPair|AsyKeyPair.publicKey 公钥，base64编码, AsyKeyPair.privateKey 私钥, base64编码|

示例：

```
import { aegis } from '@hw-agconnect/petal-aegis';
import { buffer } from '@kit.ArkTS';

async function demo() {
  try {
    let keyPair: aegis.AsyKeyPair = await aegis.genAsyKeyPairBase64(aegis.AsyKeyAlg.RSA3072_PRIMES_2)
    console.log('publicKey: ' + keyPair.publicKey);
    console.log('privateKey: ' + keyPair.privateKey);
  } catch (err) {
    console.log('err: ' + err);
  }
}
```

