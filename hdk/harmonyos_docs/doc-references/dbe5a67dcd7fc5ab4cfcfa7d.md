---
name: document/cn/doc-references/codesource-0000001054678491
title: CodeSource
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/codesource-0000001054678491
source: portal
---

# CodeSource

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---java.security.CodeSource
    
    public class CodeSource
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)
    implements [Serializable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/serializable-0000001054358416)  
  
---  
  
This class extends the concept of a codebase to encapsulate not only the location (URL) but also the certificate chains that were used to verify signed code originating from that location.

#### Constructor Summary

Constructor | Description  
---|---  
[CodeSource](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codesource-0000001054678491#ZH-CN_TOPIC_0000001054678491__CodeSource-java_net_URL-java_security_cert_Certificate:A-)​([URL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/url-0000001054358468) url, [Certificate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certificate-0000001054199810)[] certs) |  Constructs a CodeSource and associates it with the specified location and set of certificates.   
[CodeSource](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codesource-0000001054678491#ZH-CN_TOPIC_0000001054678491__CodeSource-java_net_URL-java_security_CodeSigner:A-)​([URL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/url-0000001054358468) url, [CodeSigner](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codesigner-0000001054238521)[] signers) |  Constructs a CodeSource and associates it with the specified location and set of code signers.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[Certificate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certificate-0000001054199810)[] | [getCertificates](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codesource-0000001054678491#ZH-CN_TOPIC_0000001054678491__getCertificates--)​() |  Returns the certificates associated with this CodeSource.   
[CodeSigner](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codesigner-0000001054238521)[] | [getCodeSigners](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codesource-0000001054678491#ZH-CN_TOPIC_0000001054678491__getCodeSigners--)​() |  Returns the code signers associated with this CodeSource.   
[URL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/url-0000001054358468) | [getLocation](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codesource-0000001054678491#ZH-CN_TOPIC_0000001054678491__getLocation--)​() |  Returns the location associated with this CodeSource.   
boolean | [implies](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codesource-0000001054678491#ZH-CN_TOPIC_0000001054678491__implies-java_security_CodeSource-)​([CodeSource](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codesource-0000001054678491) codesource) |  Returns true if this CodeSource object "implies" the specified CodeSource.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]CodeSource

public CodeSource​([URL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/url-0000001054358468) url, [Certificate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certificate-0000001054199810)[] certs)

Constructs a CodeSource and associates it with the specified location and set of certificates. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
url  |  the location (URL).  
certs  |  the certificate(s). It may be null. The contents of the array are copied to protect against subsequent modification.  
  
#### [h2]CodeSource

public CodeSource​([URL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/url-0000001054358468) url, [CodeSigner](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codesigner-0000001054238521)[] signers)

Constructs a CodeSource and associates it with the specified location and set of code signers. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
url  |  the location (URL).  
signers  |  the code signers. It may be null. The contents of the array are copied to protect against subsequent modification.  
  
**Since:**

1.5

#### Method Detail

#### [h2]getLocation

public final [URL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/url-0000001054358468) getLocation​()

Returns the location associated with this CodeSource. 

**Returns:**

the location (URL).

#### [h2]getCertificates

public final [Certificate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/certificate-0000001054199810)[] getCertificates​()

Returns the certificates associated with this CodeSource. 

If this CodeSource object was created using the [CodeSource(java.net.URL,java.security.CodeSigner[])](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codesource-0000001054678491#ZH-CN_TOPIC_0000001054678491__CodeSource-java_net_URL-java_security_CodeSigner:A-) constructor then its certificate chains are extracted and used to create an array of Certificate objects. Each signer certificate is followed by its supporting certificate chain (which may be empty). Each signer certificate and its supporting certificate chain is ordered bottom-to-top (i.e., with the signer certificate first and the (root) certificate authority last).

**Returns:**

A copy of the certificates array, or null if there is none.

#### [h2]getCodeSigners

public final [CodeSigner](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codesigner-0000001054238521)[] getCodeSigners​()

Returns the code signers associated with this CodeSource. 

If this CodeSource object was created using the [CodeSource(java.net.URL,java.security.cert.Certificate[] certs)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codesource-0000001054678491#ZH-CN_TOPIC_0000001054678491__CodeSource-java_net_URL-java_security_cert_Certificate:A-) constructor then its certificate chains are extracted and used to create an array of CodeSigner objects. Note that only X.509 certificates are examined - all other certificate types are ignored.

**Returns:**

A copy of the code signer array, or null if there is none.

**Since:**

1.5

#### [h2]implies

public boolean implies​([CodeSource](https://developer.harmonyos.com/cn/docs/documentation/doc-references/codesource-0000001054678491) codesource)

Returns true if this CodeSource object "implies" the specified CodeSource. 

More specifically, this method makes the following checks. If any fail, it returns false. If they all succeed, it returns true. 

    * _codesource_ must not be null. 
    * If this object's certificates are not null, then all of this object's certificates must be present in _codesource_ 's certificates. 
    * If this object's location (getLocation()) is not null, then the following checks are made against this object's location and _codesource_ 's: 
      * _codesource_ 's location must not be null. 
      * If this object's location equals _codesource_ 's location, then return true. 
      * This object's protocol (getLocation().getProtocol()) must be equal to _codesource_ 's protocol, ignoring case. 
      * If this object's host (getLocation().getHost()) is not null, then the SocketPermission constructed with this object's host must imply the SocketPermission constructed with _codesource_ 's host. 
      * If this object's port (getLocation().getPort()) is not equal to -1 (that is, if a port is specified), it must equal _codesource_ 's port or default port (codesource.getLocation().getDefaultPort()). 
      * If this object's file (getLocation().getFile()) doesn't equal _codesource_ 's file, then the following checks are made: If this object's file ends with "/-", then _codesource_ 's file must start with this object's file (exclusive the trailing "-"). If this object's file ends with a "/*", then _codesource_ 's file must start with this object's file and must not have any further "/" separators. If this object's file doesn't end with a "/", then _codesource_ 's file must match this object's file with a '/' appended. 
      * If this object's reference (getLocation().getRef()) is not null, it must equal _codesource_ 's reference. 

For example, the codesource objects with the following locations and null certificates all imply the codesource with the location "http://java.sun.com/classes/foo.jar" and null certificates: 
    
    http:
         http://*.sun.com/classes/*
         http://java.sun.com/classes/-
         http://java.sun.com/classes/foo.jar
     

Note that if this CodeSource has a null location and a null certificate chain, then it implies every other CodeSource. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
codesource  |  CodeSource to compare against.  
  
**Returns:**

true if the specified codesource is implied by this codesource, false if not.
