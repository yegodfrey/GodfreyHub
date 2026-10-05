---
name: document/cn/doc-references/pkixcertpathvalidatorresult-0000001054678509
title: PKIXCertPathValidatorResult
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/pkixcertpathvalidatorresult-0000001054678509
source: portal
---

# PKIXCertPathValidatorResult

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---java.security.cert.PKIXCertPathValidatorResult
    
    public class PKIXCertPathValidatorResult
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)
    implements [CertPathValidatorResult](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certpathvalidatorresult-0000001054558537)  
  
---  
This class represents the successful result of the PKIX certification path validation algorithm. 

Instances of PKIXCertPathValidatorResult are returned by the [CertPathValidator#validate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certpathvalidator-0000001054358526#ZH-CN_TOPIC_0000001054358526__validate-java_security_cert_CertPath-java_security_cert_CertPathParameters-) method of CertPathValidator objects implementing the PKIX algorithm. 

All PKIXCertPathValidatorResult objects contain the valid policy tree and subject public key resulting from the validation algorithm, as well as a TrustAnchor describing the certification authority (CA) that served as a trust anchor for the certification path. 

**Concurrent Access**

Unless otherwise specified, the methods defined in this class are not thread-safe. Multiple threads that need to access a single object concurrently should synchronize amongst themselves and provide the necessary locking. Multiple threads each manipulating separate objects need not synchronize.

**Since:**

1.4

**See Also:**

[CertPathValidatorResult](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certpathvalidatorresult-0000001054558537)

#### Constructor Summary

Constructor | Description  
---|---  
[PKIXCertPathValidatorResult](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pkixcertpathvalidatorresult-0000001054678509#ZH-CN_TOPIC_0000001054678509__PKIXCertPathValidatorResult-java_security_cert_TrustAnchor-java_security_cert_PolicyNode-java_security_PublicKey-)​([TrustAnchor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/trustanchor-0000001054119798) trustAnchor, [PolicyNode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/policynode-0000001054119865) policyTree, [PublicKey](https://developer.harmonyos.com/cn/docs/documentation/doc-references/publickey-0000001054678489) subjectPublicKey) |  Creates an instance of PKIXCertPathValidatorResult containing the specified parameters.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) | [clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pkixcertpathvalidatorresult-0000001054678509#ZH-CN_TOPIC_0000001054678509__clone--)​() |  Returns a copy of this object.   
[PolicyNode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/policynode-0000001054119865) | [getPolicyTree](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pkixcertpathvalidatorresult-0000001054678509#ZH-CN_TOPIC_0000001054678509__getPolicyTree--)​() |  Returns the root node of the valid policy tree resulting from the PKIX certification path validation algorithm.   
[PublicKey](https://developer.harmonyos.com/cn/docs/documentation/doc-references/publickey-0000001054678489) | [getPublicKey](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pkixcertpathvalidatorresult-0000001054678509#ZH-CN_TOPIC_0000001054678509__getPublicKey--)​() |  Returns the public key of the subject (target) of the certification path, including any inherited public key parameters if applicable.   
[TrustAnchor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/trustanchor-0000001054119798) | [getTrustAnchor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pkixcertpathvalidatorresult-0000001054678509#ZH-CN_TOPIC_0000001054678509__getTrustAnchor--)​() |  Returns the TrustAnchor describing the CA that served as a trust anchor for the certification path.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pkixcertpathvalidatorresult-0000001054678509#ZH-CN_TOPIC_0000001054678509__toString--)​() |  Return a printable representation of this PKIXCertPathValidatorResult.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]PKIXCertPathValidatorResult

public PKIXCertPathValidatorResult​([TrustAnchor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/trustanchor-0000001054119798) trustAnchor, [PolicyNode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/policynode-0000001054119865) policyTree, [PublicKey](https://developer.harmonyos.com/cn/docs/documentation/doc-references/publickey-0000001054678489) subjectPublicKey)

Creates an instance of PKIXCertPathValidatorResult containing the specified parameters. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
trustAnchor  |  a TrustAnchor describing the CA that served as a trust anchor for the certification path  
policyTree  |  the immutable valid policy tree, or null if there are no valid policies  
subjectPublicKey  |  the public key of the subject  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the subjectPublicKey or trustAnchor parameters are null  
  
#### Method Detail

#### [h2]getTrustAnchor

public [TrustAnchor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/trustanchor-0000001054119798) getTrustAnchor​()

Returns the TrustAnchor describing the CA that served as a trust anchor for the certification path. 

**Returns:**

the TrustAnchor (never null)

#### [h2]getPolicyTree

public [PolicyNode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/policynode-0000001054119865) getPolicyTree​()

Returns the root node of the valid policy tree resulting from the PKIX certification path validation algorithm. The PolicyNode object that is returned and any objects that it returns through public methods are immutable. 

Most applications will not need to examine the valid policy tree. They can achieve their policy processing goals by setting the policy-related parameters in PKIXParameters. However, more sophisticated applications, especially those that process policy qualifiers, may need to traverse the valid policy tree using the [PolicyNode#getParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/policynode-0000001054119865#ZH-CN_TOPIC_0000001054119865__getParent--) and [PolicyNode#getChildren](https://developer.harmonyos.com/cn/docs/documentation/doc-references/policynode-0000001054119865#ZH-CN_TOPIC_0000001054119865__getChildren--) methods.

**Returns:**

the root node of the valid policy tree, or null if there are no valid policies

#### [h2]getPublicKey

public [PublicKey](https://developer.harmonyos.com/cn/docs/documentation/doc-references/publickey-0000001054678489) getPublicKey​()

Returns the public key of the subject (target) of the certification path, including any inherited public key parameters if applicable. 

**Returns:**

the public key of the subject (never null)

#### [h2]clone

public [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) clone​()

Returns a copy of this object. 

**Specified by:**

[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certpathvalidatorresult-0000001054558537#ZH-CN_TOPIC_0000001054558537__clone--) in interface [CertPathValidatorResult](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certpathvalidatorresult-0000001054558537)

**Overrides:**

[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

the copy

**See Also:**

[Cloneable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cloneable-0000001054358421)

#### [h2]toString

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) toString​()

Return a printable representation of this PKIXCertPathValidatorResult. 

**Overrides:**

[toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

a String describing the contents of this PKIXCertPathValidatorResult
