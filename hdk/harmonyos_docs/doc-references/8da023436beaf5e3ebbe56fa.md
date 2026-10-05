---
name: document/cn/doc-references/x509trustmanager-0000001054119918
title: X509TrustManager
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/x509trustmanager-0000001054119918
source: portal
---

X509TrustManager
    
    public interface X509TrustManager
    extends [TrustManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/trustmanager-0000001054358648)  
  
---  
Instance of this interface manage which X509 certificates may be used to authenticate the remote side of a secure socket. Decisions may be based on trusted certificate authorities, certificate revocation lists, online status checking or other means.**Since:** 1.4Method Summary Modifier and Type | Method | Description  
---|---|---  
void | [checkClientTrusted](https://developer.harmonyos.com/cn/docs/documentation/doc-references/x509trustmanager-0000001054119918#ZH-CN_TOPIC_0000001054119918__checkClientTrusted-java_security_cert_X509Certificate:A-java_lang_String-)​([X509Certificate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/x509certificate-0000001054439827)[] chain, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) authType) |  Given the partial or complete certificate chain provided by the peer, build a certificate path to a trusted root and return if it can be validated and is trusted for client SSL authentication based on the authentication type.   
void | [checkServerTrusted](https://developer.harmonyos.com/cn/docs/documentation/doc-references/x509trustmanager-0000001054119918#ZH-CN_TOPIC_0000001054119918__checkServerTrusted-java_security_cert_X509Certificate:A-java_lang_String-)​([X509Certificate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/x509certificate-0000001054439827)[] chain, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) authType) |  Given the partial or complete certificate chain provided by the peer, build a certificate path to a trusted root and return if it can be validated and is trusted for server SSL authentication based on the authentication type.   
[X509Certificate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/x509certificate-0000001054439827)[] | [getAcceptedIssuers](https://developer.harmonyos.com/cn/docs/documentation/doc-references/x509trustmanager-0000001054119918#ZH-CN_TOPIC_0000001054119918__getAcceptedIssuers--)​() |  Return an array of certificate authority certificates which are trusted for authenticating peers.   
Method Detail [h2]checkClientTrusted void checkClientTrusted​([X509Certificate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/x509certificate-0000001054439827)[] chain, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) authType) throws [CertificateException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certificateexception-0000001054439829) Given the partial or complete certificate chain provided by the peer, build a certificate path to a trusted root and return if it can be validated and is trusted for client SSL authentication based on the authentication type.  The authentication type is determined by the actual certificate used. For instance, if RSAPublicKey is used, the authType should be "RSA". Checking is case-sensitive. **Parameters:** Parameter Name | Parameter Description  
---|---  
chain  |  the peer certificate chain  
authType  |  the authentication type based on the client certificate  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if null or zero-length chain is passed in for the chain parameter or if null or zero-length string is passed in for the authType parameter  
[CertificateException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certificateexception-0000001054439829) |  if the certificate chain is not trusted by this TrustManager.  
[h2]checkServerTrusted void checkServerTrusted​([X509Certificate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/x509certificate-0000001054439827)[] chain, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) authType) throws [CertificateException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certificateexception-0000001054439829) Given the partial or complete certificate chain provided by the peer, build a certificate path to a trusted root and return if it can be validated and is trusted for server SSL authentication based on the authentication type.  The authentication type is the key exchange algorithm portion of the cipher suites represented as a String, such as "RSA", "DHE_DSS". Note: for some exportable cipher suites, the key exchange algorithm is determined at run time during the handshake. For instance, for TLS_RSA_EXPORT_WITH_RC4_40_MD5, the authType should be RSA_EXPORT when an ephemeral RSA key is used for the key exchange, and RSA when the key from the server certificate is used. Checking is case-sensitive. **Parameters:** Parameter Name | Parameter Description  
---|---  
chain  |  the peer certificate chain  
authType  |  the key exchange algorithm used  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if null or zero-length chain is passed in for the chain parameter or if null or zero-length string is passed in for the authType parameter  
[CertificateException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certificateexception-0000001054439829) |  if the certificate chain is not trusted by this TrustManager.  
[h2]getAcceptedIssuers [X509Certificate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/x509certificate-0000001054439827)[] getAcceptedIssuers​() Return an array of certificate authority certificates which are trusted for authenticating peers. **Returns:** a non-null (possibly empty) array of acceptable CA issuer certificates.
