---
name: document/cn/doc-references/dhprivatekeyspec-0000001054238655
title: DHPrivateKeySpec
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/dhprivatekeyspec-0000001054238655
source: portal
---

# DHPrivateKeySpec

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---javax.crypto.spec.DHPrivateKeySpec
    
    public class DHPrivateKeySpec
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)
    implements [KeySpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyspec-0000001054238547)  
  
---  
This class specifies a Diffie-Hellman private key with its associated parameters. 

Note that this class does not perform any validation on specified parameters. Thus, the specified values are returned directly even if they are null.

**Since:**

1.4

**See Also:**

[DHPublicKeySpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dhpublickeyspec-0000001054678625)

#### Constructor Summary

Constructor | Description  
---|---  
[DHPrivateKeySpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dhprivatekeyspec-0000001054238655#ZH-CN_TOPIC_0000001054238655__DHPrivateKeySpec-java_math_BigInteger-java_math_BigInteger-java_math_BigInteger-)​([BigInteger](https://developer.harmonyos.com/cn/docs/documentation/doc-references/biginteger-0000001054238471) x, [BigInteger](https://developer.harmonyos.com/cn/docs/documentation/doc-references/biginteger-0000001054238471) p, [BigInteger](https://developer.harmonyos.com/cn/docs/documentation/doc-references/biginteger-0000001054238471) g) |  Constructor that takes a private value x, a prime modulus p, and a base generator g.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[BigInteger](https://developer.harmonyos.com/cn/docs/documentation/doc-references/biginteger-0000001054238471) | [getG](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dhprivatekeyspec-0000001054238655#ZH-CN_TOPIC_0000001054238655__getG--)​() |  Returns the base generator g.   
[BigInteger](https://developer.harmonyos.com/cn/docs/documentation/doc-references/biginteger-0000001054238471) | [getP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dhprivatekeyspec-0000001054238655#ZH-CN_TOPIC_0000001054238655__getP--)​() |  Returns the prime modulus p.   
[BigInteger](https://developer.harmonyos.com/cn/docs/documentation/doc-references/biginteger-0000001054238471) | [getX](https://developer.harmonyos.com/cn/docs/documentation/doc-references/dhprivatekeyspec-0000001054238655#ZH-CN_TOPIC_0000001054238655__getX--)​() |  Returns the private value x.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]DHPrivateKeySpec

public DHPrivateKeySpec​([BigInteger](https://developer.harmonyos.com/cn/docs/documentation/doc-references/biginteger-0000001054238471) x, [BigInteger](https://developer.harmonyos.com/cn/docs/documentation/doc-references/biginteger-0000001054238471) p, [BigInteger](https://developer.harmonyos.com/cn/docs/documentation/doc-references/biginteger-0000001054238471) g)

Constructor that takes a private value x, a prime modulus p, and a base generator g. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
x  |  private value x  
p  |  prime modulus p  
g  |  base generator g  
  
#### Method Detail

#### [h2]getX

public [BigInteger](https://developer.harmonyos.com/cn/docs/documentation/doc-references/biginteger-0000001054238471) getX​()

Returns the private value x. 

**Returns:**

the private value x

#### [h2]getP

public [BigInteger](https://developer.harmonyos.com/cn/docs/documentation/doc-references/biginteger-0000001054238471) getP​()

Returns the prime modulus p. 

**Returns:**

the prime modulus p

#### [h2]getG

public [BigInteger](https://developer.harmonyos.com/cn/docs/documentation/doc-references/biginteger-0000001054238471) getG​()

Returns the base generator g. 

**Returns:**

the base generator g
