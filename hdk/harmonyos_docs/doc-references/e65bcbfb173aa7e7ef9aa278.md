---
name: document/cn/doc-references/certstoreparameters-0000001054678505
title: CertStoreParameters
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/certstoreparameters-0000001054678505
source: portal
---

CertStoreParameters
    
    public interface CertStoreParameters
    extends [Cloneable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cloneable-0000001054358421)  
  
---  
A specification of CertStore parameters.  The purpose of this interface is to group (and provide type safety for) all CertStore parameter specifications. All CertStore parameter specifications must implement this interface.  Typically, a CertStoreParameters object is passed as a parameter to one of the [CertStore#getInstance](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certstore-0000001054119796#ZH-CN_TOPIC_0000001054119796__getInstance-java_lang_String-java_security_cert_CertStoreParameters-) methods. The getInstance method returns a CertStore that is used for retrieving Certificates and CRLs. The CertStore that is returned is initialized with the specified parameters. The type of parameters needed may vary between different types of CertStores. **Since:** 1.4**See Also:** [CertStore.getInstance(java.lang.String, java.security.cert.CertStoreParameters)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certstore-0000001054119796#ZH-CN_TOPIC_0000001054119796__getInstance-java_lang_String-java_security_cert_CertStoreParameters-)Method Summary Modifier and Type | Method | Description  
---|---|---  
[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) | [clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certstoreparameters-0000001054678505#ZH-CN_TOPIC_0000001054678505__clone--)​() |  Makes a copy of this CertStoreParameters.   
Method Detail [h2]clone [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) clone​() Makes a copy of this CertStoreParameters.  The precise meaning of "copy" may depend on the class of the CertStoreParameters object. A typical implementation performs a "deep copy" of this object, but this is not an absolute requirement. Some implementations may perform a "shallow copy" of some or all of the fields of this object.  Note that the CertStore.getInstance methods make a copy of the specified CertStoreParameters. A deep copy implementation of clone is safer and more robust, as it prevents the caller from corrupting a shared CertStore by subsequently modifying the contents of its initialization parameters. However, a shallow copy implementation of clone is more appropriate for applications that need to hold a reference to a parameter contained in the CertStoreParameters. For example, a shallow copy clone allows an application to release the resources of a particular CertStore initialization parameter immediately, rather than waiting for the garbage collection mechanism. This should be done with the utmost care, since the CertStore may still be in use by other threads.  Each subclass should state the precise behavior of this method so that users and developers know what to expect. **Returns:** a copy of this CertStoreParameters
