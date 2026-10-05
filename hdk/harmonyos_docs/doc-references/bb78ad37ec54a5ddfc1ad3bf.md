---
name: document/cn/doc-references/pssparameterspec-0000001054119879
title: PSSParameterSpec
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/pssparameterspec-0000001054119879
source: portal
---

# PSSParameterSpec

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---java.security.spec.PSSParameterSpec
    
    public class PSSParameterSpec
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)
    implements [AlgorithmParameterSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/algorithmparameterspec-0000001054358527)  
  
---  
This class specifies a parameter spec for RSASSA-PSS signature scheme, as defined in the [PKCS#1 v2.2](https://tools.ietf.org/rfc/rfc8017.txt) standard. 

Its ASN.1 definition in PKCS#1 standard is described below: 
    
    RSASSA-PSS-params ::= SEQUENCE {
       hashAlgorithm      [0] HashAlgorithm      DEFAULT sha1,
       maskGenAlgorithm   [1] MaskGenAlgorithm   DEFAULT mgf1SHA1,
       saltLength         [2] INTEGER            DEFAULT 20,
       trailerField       [3] TrailerField       DEFAULT trailerFieldBC(1)
     }
     

where 
    
    HashAlgorithm ::= AlgorithmIdentifier {
       {OAEP-PSSDigestAlgorithms}
     }
     MaskGenAlgorithm ::= AlgorithmIdentifier { {PKCS1MGFAlgorithms} }
     TrailerField ::= INTEGER { trailerFieldBC(1) }
    
     OAEP-PSSDigestAlgorithms    ALGORITHM-IDENTIFIER ::= {
       { OID id-sha1       PARAMETERS NULL }|
       { OID id-sha224     PARAMETERS NULL }|
       { OID id-sha256     PARAMETERS NULL }|
       { OID id-sha384     PARAMETERS NULL }|
       { OID id-sha512     PARAMETERS NULL }|
       { OID id-sha512-224 PARAMETERS NULL }|
       { OID id-sha512-256 PARAMETERS NULL },
       ...  -- Allows for future expansion --
     }
     PKCS1MGFAlgorithms    ALGORITHM-IDENTIFIER ::= {
       { OID id-mgf1 PARAMETERS HashAlgorithm },
       ...  -- Allows for future expansion --
     }
     

Note: the PSSParameterSpec.DEFAULT uses the following: message digest -- "SHA-1" mask generation function (mgf) -- "MGF1" parameters for mgf -- MGF1ParameterSpec.SHA1 SaltLength -- 20 TrailerField -- 1

**Since:**

1.4

**See Also:**

[MGF1ParameterSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mgf1parameterspec-0000001054838504), [AlgorithmParameterSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/algorithmparameterspec-0000001054358527), [Signature](https://developer.harmonyos.com/cn/docs/documentation/doc-references/signature-0000001054838482)

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static [PSSParameterSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pssparameterspec-0000001054119879) | [DEFAULT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pssparameterspec-0000001054119879#ZH-CN_TOPIC_0000001054119879__DEFAULT) |  The PSS parameter set with all default values   
  
#### Constructor Summary

Constructor | Description  
---|---  
[PSSParameterSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pssparameterspec-0000001054119879#ZH-CN_TOPIC_0000001054119879__PSSParameterSpec-int-)​(int saltLen) |  Creates a new PSSParameterSpec using the specified salt length and other default values as defined in PKCS#1.   
[PSSParameterSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pssparameterspec-0000001054119879#ZH-CN_TOPIC_0000001054119879__PSSParameterSpec-java_lang_String-java_lang_String-java_security_spec_AlgorithmParameterSpec-int-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) mdName, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) mgfName, [AlgorithmParameterSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/algorithmparameterspec-0000001054358527) mgfSpec, int saltLen, int trailerField) |  Creates a new PSSParameterSpec as defined in the PKCS #1 standard using the specified message digest, mask generation function, parameters for mask generation function, salt length, and trailer field values.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getDigestAlgorithm](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pssparameterspec-0000001054119879#ZH-CN_TOPIC_0000001054119879__getDigestAlgorithm--)​() |  Returns the message digest algorithm name.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getMGFAlgorithm](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pssparameterspec-0000001054119879#ZH-CN_TOPIC_0000001054119879__getMGFAlgorithm--)​() |  Returns the mask generation function algorithm name.   
[AlgorithmParameterSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/algorithmparameterspec-0000001054358527) | [getMGFParameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pssparameterspec-0000001054119879#ZH-CN_TOPIC_0000001054119879__getMGFParameters--)​() |  Returns the parameters for the mask generation function.   
int | [getSaltLength](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pssparameterspec-0000001054119879#ZH-CN_TOPIC_0000001054119879__getSaltLength--)​() |  Returns the salt length in bytes.   
int | [getTrailerField](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pssparameterspec-0000001054119879#ZH-CN_TOPIC_0000001054119879__getTrailerField--)​() |  Returns the value for the trailer field.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]DEFAULT

public static final [PSSParameterSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pssparameterspec-0000001054119879) DEFAULT

The PSS parameter set with all default values 

**Since:**

1.5

#### Constructor Detail

#### [h2]PSSParameterSpec

public PSSParameterSpec​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) mdName, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) mgfName, [AlgorithmParameterSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/algorithmparameterspec-0000001054358527) mgfSpec, int saltLen, int trailerField)

Creates a new PSSParameterSpec as defined in the PKCS #1 standard using the specified message digest, mask generation function, parameters for mask generation function, salt length, and trailer field values. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
mdName  |  the algorithm name of the hash function  
mgfName  |  the algorithm name of the mask generation function  
mgfSpec  |  the parameters for the mask generation function. If null is specified, null will be returned by getMGFParameters().  
saltLen  |  the length of salt  
trailerField  |  the value of the trailer field  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if mdName, or mgfName is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if saltLen or trailerField is less than 0  
  
**Since:**

1.5

#### [h2]PSSParameterSpec

public PSSParameterSpec​(int saltLen)

Creates a new PSSParameterSpec using the specified salt length and other default values as defined in PKCS#1. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
saltLen  |  the length of salt in bytes to be used in PKCS#1 PSS encoding  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if saltLen is less than 0  
  
#### Method Detail

#### [h2]getDigestAlgorithm

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getDigestAlgorithm​()

Returns the message digest algorithm name. 

**Returns:**

the message digest algorithm name

**Since:**

1.5

#### [h2]getMGFAlgorithm

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getMGFAlgorithm​()

Returns the mask generation function algorithm name. 

**Returns:**

the mask generation function algorithm name

**Since:**

1.5

#### [h2]getMGFParameters

public [AlgorithmParameterSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/algorithmparameterspec-0000001054358527) getMGFParameters​()

Returns the parameters for the mask generation function. 

**Returns:**

the parameters for the mask generation function

**Since:**

1.5

#### [h2]getSaltLength

public int getSaltLength​()

Returns the salt length in bytes. 

**Returns:**

the salt length

#### [h2]getTrailerField

public int getTrailerField​()

Returns the value for the trailer field. 

**Returns:**

the value for the trailer field

**Since:**

1.5
