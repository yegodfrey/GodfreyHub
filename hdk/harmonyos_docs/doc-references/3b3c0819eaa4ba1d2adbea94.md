---
name: document/cn/doc-references/certpathparameters-0000001054678536
title: CertPathParameters
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/certpathparameters-0000001054678536
source: portal
---

CertPathParameters  
      
    public interface CertPathParameters
    extends [Cloneable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cloneable-0000001054358421)  
  
---  
A specification of certification path algorithm parameters. The purpose of this interface is to group (and provide type safety for) all CertPath parameter specifications. All CertPath parameter specifications must implement this interface.**Since:** 1.4**See Also:** [CertPathValidator.validate(CertPath, CertPathParameters)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certpathvalidator-0000001054358526#ZH-CN_TOPIC_0000001054358526__validate-java_security_cert_CertPath-java_security_cert_CertPathParameters-), [CertPathBuilder.build(CertPathParameters)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certpathbuilder-0000001054678507#ZH-CN_TOPIC_0000001054678507__build-java_security_cert_CertPathParameters-)Method Summary Modifier and Type | Method | Description  
---|---|---  
[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) | [clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certpathparameters-0000001054678536#ZH-CN_TOPIC_0000001054678536__clone--)​() |  Makes a copy of this CertPathParameters.   
Method Detail [h2]clone [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) clone​() Makes a copy of this CertPathParameters. Changes to the copy will not affect the original and vice versa. **Returns:** a copy of this CertPathParameters
