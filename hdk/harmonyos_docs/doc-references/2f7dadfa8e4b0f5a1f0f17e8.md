---
name: document/cn/doc-references/overview-0000001054558673
title: Overview
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/overview-0000001054558673
source: portal
---

# Overview  
  
Provides classes for public key certificates. These classes include a simplified version of the java.security.cert package. These classes were developed as part of the Java Secure Socket Extension (JSSE). When JSSE was added to the J2SE version 1.4, this package was added for backward-compatibility reasons only. New applications should not use this package, but rather java.security.cert.

**Since:**

1.4

#### Class Summary

Class | Description  
---|---  
[Certificate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certificate-0000001054678641) | Abstract class for managing a variety of identity certificates.  
[X509Certificate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/x509certificate-0000001054838626) | Abstract class for X.509 v1 certificates.  
  
#### Exception Summary

Exception | Description  
---|---  
[CertificateEncodingException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certificateencodingexception-0000001054120001) | Certificate Encoding Exception.  
[CertificateException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certificateexception-0000001054119930) | This exception indicates one of a variety of certificate problems.  
[CertificateExpiredException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certificateexpiredexception-0000001054439959) | Certificate Expired Exception.  
[CertificateNotYetValidException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certificatenotyetvalidexception-0000001054199946) | Certificate is not yet valid exception.  
[CertificateParsingException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certificateparsingexception-0000001054518686) | Certificate Parsing Exception.
