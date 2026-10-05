---
name: document/cn/doc-references/certpathvalidatorresult-0000001054558537
title: CertPathValidatorResult
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/certpathvalidatorresult-0000001054558537
source: portal
---

CertPathValidatorResult
    
    public interface CertPathValidatorResult
    extends [Cloneable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cloneable-0000001054358421)  
  
---  
A specification of the result of a certification path validator algorithm.  The purpose of this interface is to group (and provide type safety for) all certification path validator results. All results returned by the [CertPathValidator#validate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certpathvalidator-0000001054358526#ZH-CN_TOPIC_0000001054358526__validate-java_security_cert_CertPath-java_security_cert_CertPathParameters-) method must implement this interface. **Since:** 1.4**See Also:** [CertPathValidator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certpathvalidator-0000001054358526)Method Summary Modifier and Type | Method | Description  
---|---|---  
[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) | [clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certpathvalidatorresult-0000001054558537#ZH-CN_TOPIC_0000001054558537__clone--)​() |  Makes a copy of this CertPathValidatorResult.   
Method Detail [h2]clone [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) clone​() Makes a copy of this CertPathValidatorResult. Changes to the copy will not affect the original and vice versa. **Returns:** a copy of this CertPathValidatorResult
