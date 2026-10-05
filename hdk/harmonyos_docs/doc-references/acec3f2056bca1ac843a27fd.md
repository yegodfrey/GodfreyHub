---
name: document/cn/doc-references/cipherspi-0000001054678619
title: CipherSpi
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/cipherspi-0000001054678619
source: portal
---

# CipherSpi

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---javax.crypto.CipherSpi
    
    public abstract class CipherSpi
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
This class defines the _Service Provider Interface_ (**SPI**) for the Cipher class. All the abstract methods in this class must be implemented by each cryptographic service provider who wishes to supply the implementation of a particular cipher algorithm. 

In order to create an instance of Cipher, which encapsulates an instance of this CipherSpi class, an application calls one of the [Cipher#getInstance(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipher-0000001054358629#ZH-CN_TOPIC_0000001054358629__getInstance-java_lang_String-) factory methods of the [Cipher](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipher-0000001054358629) engine class and specifies the requested _transformation_. Optionally, the application may also specify the name of a provider. 

A _transformation_ is a string that describes the operation (or set of operations) to be performed on the given input, to produce some output. A transformation always includes the name of a cryptographic algorithm (e.g., _AES_), and may be followed by a feedback mode and padding scheme. 

A transformation is of the form: 

    * "_algorithm/mode/padding_ " or 
    * "_algorithm_ " 

(in the latter case, provider-specific default values for the mode and padding scheme are used). For example, the following is a valid transformation: 
    
    Cipher c = Cipher.getInstance("_AES/CBC/PKCS5Padding_ ");
     

A provider may supply a separate class for each combination of _algorithm/mode/padding_ , or may decide to provide more generic classes representing sub-transformations corresponding to _algorithm_ or _algorithm/mode_ or _algorithm//padding_ (note the double slashes), in which case the requested mode and/or padding are set automatically by the getInstance methods of Cipher, which invoke the [engineSetMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineSetMode-java_lang_String-) and [engineSetPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineSetPadding-java_lang_String-) methods of the provider's subclass of CipherSpi. 

A Cipher property in a provider master class may have one of the following formats: 

    * // provider's subclass of "CipherSpi" implements "algName" with
               // pluggable mode and padding
               Cipher._algName_
           

    * // provider's subclass of "CipherSpi" implements "algName" in the
               // specified "mode", with pluggable padding
               Cipher._algName/mode_
           

    * // provider's subclass of "CipherSpi" implements "algName" with the
               // specified "padding", with pluggable mode
               Cipher._algName//padding_
           

    * // provider's subclass of "CipherSpi" implements "algName" with the
               // specified "mode" and "padding"
               Cipher._algName/mode/padding_
           

For example, a provider may supply a subclass of CipherSpi that implements _AES/ECB/PKCS5Padding_ , one that implements _AES/CBC/PKCS5Padding_ , one that implements _AES/CFB/PKCS5Padding_ , and yet another one that implements _AES/OFB/PKCS5Padding_. That provider would have the following Cipher properties in its master class: 

    * Cipher._AES/ECB/PKCS5Padding_
           

    * Cipher._AES/CBC/PKCS5Padding_
           

    * Cipher._AES/CFB/PKCS5Padding_
           

    * Cipher._AES/OFB/PKCS5Padding_
           

Another provider may implement a class for each of the above modes (i.e., one class for _ECB_ , one for _CBC_ , one for _CFB_ , and one for _OFB_), one class for _PKCS5Padding_ , and a generic _AES_ class that subclasses from CipherSpi. That provider would have the following Cipher properties in its master class: 

    * Cipher._AES_
           

The getInstance factory method of the Cipher engine class follows these rules in order to instantiate a provider's implementation of CipherSpi for a transformation of the form "_algorithm_ ": 

    1. Check if the provider has registered a subclass of CipherSpi for the specified "_algorithm_ ". 

If the answer is YES, instantiate this class, for whose mode and padding scheme default values (as supplied by the provider) are used. 

If the answer is NO, throw a NoSuchAlgorithmException exception. 

The getInstance factory method of the Cipher engine class follows these rules in order to instantiate a provider's implementation of CipherSpi for a transformation of the form "_algorithm/mode/padding_ ": 

    1. Check if the provider has registered a subclass of CipherSpi for the specified "_algorithm/mode/padding_ " transformation. 

If the answer is YES, instantiate it. 

If the answer is NO, go to the next step. 

    2. Check if the provider has registered a subclass of CipherSpi for the sub-transformation "_algorithm/mode_ ". 

If the answer is YES, instantiate it, and call engineSetPadding(_padding_) on the new instance. 

If the answer is NO, go to the next step. 

    3. Check if the provider has registered a subclass of CipherSpi for the sub-transformation "_algorithm//padding_ " (note the double slashes). 

If the answer is YES, instantiate it, and call engineSetMode(_mode_) on the new instance. 

If the answer is NO, go to the next step. 

    4. Check if the provider has registered a subclass of CipherSpi for the sub-transformation "_algorithm_ ". 

If the answer is YES, instantiate it, and call engineSetMode(_mode_) and engineSetPadding(_padding_) on the new instance. 

If the answer is NO, throw a NoSuchAlgorithmException exception. 

**Since:**

1.4

**See Also:**

[KeyGenerator](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keygenerator-0000001054199924), [SecretKey](https://developer.harmonyos.com/cn/docs/documentation/doc-references/secretkey-0000001054518662)

#### Constructor Summary

Constructor | Description  
---|---  
[CipherSpi](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__CipherSpi--)​() |     
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
protected abstract byte[] | [engineDoFinal](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineDoFinal-byte:A-int-int-)​(byte[] input, int inputOffset, int inputLen) |  Encrypts or decrypts data in a single-part operation, or finishes a multiple-part operation.   
protected abstract int | [engineDoFinal](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineDoFinal-byte:A-int-int-byte:A-int-)​(byte[] input, int inputOffset, int inputLen, byte[] output, int outputOffset) |  Encrypts or decrypts data in a single-part operation, or finishes a multiple-part operation.   
protected int | [engineDoFinal](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineDoFinal-java_nio_ByteBuffer-java_nio_ByteBuffer-)​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) input, [ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) output) |  Encrypts or decrypts data in a single-part operation, or finishes a multiple-part operation.   
protected abstract int | [engineGetBlockSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineGetBlockSize--)​() |  Returns the block size (in bytes).   
protected abstract byte[] | [engineGetIV](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineGetIV--)​() |  Returns the initialization vector (IV) in a new buffer.   
protected int | [engineGetKeySize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineGetKeySize-java_security_Key-)​([Key](https://developer.harmonyos.com/cn/docs/documentation/doc-references/key-0000001054358506) key) |  Returns the key size of the given key object in bits.   
protected abstract int | [engineGetOutputSize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineGetOutputSize-int-)​(int inputLen) |  Returns the length in bytes that an output buffer would need to be in order to hold the result of the next update or doFinal operation, given the input length inputLen (in bytes).   
protected abstract [AlgorithmParameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/algorithmparameters-0000001054199794) | [engineGetParameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineGetParameters--)​() |  Returns the parameters used with this cipher.   
protected abstract void | [engineInit](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineInit-int-java_security_Key-java_security_AlgorithmParameters-java_security_SecureRandom-)​(int opmode, [Key](https://developer.harmonyos.com/cn/docs/documentation/doc-references/key-0000001054358506) key, [AlgorithmParameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/algorithmparameters-0000001054199794) params, [SecureRandom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securerandom-0000001054358507) random) |  Initializes this cipher with a key, a set of algorithm parameters, and a source of randomness.   
protected abstract void | [engineInit](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineInit-int-java_security_Key-java_security_SecureRandom-)​(int opmode, [Key](https://developer.harmonyos.com/cn/docs/documentation/doc-references/key-0000001054358506) key, [SecureRandom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securerandom-0000001054358507) random) |  Initializes this cipher with a key and a source of randomness.   
protected abstract void | [engineInit](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineInit-int-java_security_Key-java_security_spec_AlgorithmParameterSpec-java_security_SecureRandom-)​(int opmode, [Key](https://developer.harmonyos.com/cn/docs/documentation/doc-references/key-0000001054358506) key, [AlgorithmParameterSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/algorithmparameterspec-0000001054358527) params, [SecureRandom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securerandom-0000001054358507) random) |  Initializes this cipher with a key, a set of algorithm parameters, and a source of randomness.   
protected abstract void | [engineSetMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineSetMode-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) mode) |  Sets the mode of this cipher.   
protected abstract void | [engineSetPadding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineSetPadding-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) padding) |  Sets the padding mechanism of this cipher.   
protected [Key](https://developer.harmonyos.com/cn/docs/documentation/doc-references/key-0000001054358506) | [engineUnwrap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineUnwrap-byte:A-java_lang_String-int-)​(byte[] wrappedKey, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) wrappedKeyAlgorithm, int wrappedKeyType) |  Unwrap a previously wrapped key.   
protected abstract byte[] | [engineUpdate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineUpdate-byte:A-int-int-)​(byte[] input, int inputOffset, int inputLen) |  Continues a multiple-part encryption or decryption operation (depending on how this cipher was initialized), processing another data part.   
protected abstract int | [engineUpdate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineUpdate-byte:A-int-int-byte:A-int-)​(byte[] input, int inputOffset, int inputLen, byte[] output, int outputOffset) |  Continues a multiple-part encryption or decryption operation (depending on how this cipher was initialized), processing another data part.   
protected int | [engineUpdate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineUpdate-java_nio_ByteBuffer-java_nio_ByteBuffer-)​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) input, [ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) output) |  Continues a multiple-part encryption or decryption operation (depending on how this cipher was initialized), processing another data part.   
protected void | [engineUpdateAAD](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineUpdateAAD-byte:A-int-int-)​(byte[] src, int offset, int len) |  Continues a multi-part update of the Additional Authentication Data (AAD), using a subset of the provided buffer.   
protected void | [engineUpdateAAD](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineUpdateAAD-java_nio_ByteBuffer-)​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) src) |  Continues a multi-part update of the Additional Authentication Data (AAD).   
protected byte[] | [engineWrap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineWrap-java_security_Key-)​([Key](https://developer.harmonyos.com/cn/docs/documentation/doc-references/key-0000001054358506) key) |  Wrap a key.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]CipherSpi

public CipherSpi​()

#### Method Detail

#### [h2]engineSetMode

protected abstract void engineSetMode​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) mode) throws [NoSuchAlgorithmException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nosuchalgorithmexception-0000001054678532)

Sets the mode of this cipher. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
mode  |  the cipher mode  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[NoSuchAlgorithmException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nosuchalgorithmexception-0000001054678532) |  if the requested cipher mode does not exist  
  
#### [h2]engineSetPadding

protected abstract void engineSetPadding​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) padding) throws [NoSuchPaddingException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nosuchpaddingexception-0000001054518666)

Sets the padding mechanism of this cipher. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
padding  |  the padding mechanism  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[NoSuchPaddingException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nosuchpaddingexception-0000001054518666) |  if the requested padding mechanism does not exist  
  
#### [h2]engineGetBlockSize

protected abstract int engineGetBlockSize​()

Returns the block size (in bytes). 

**Returns:**

the block size (in bytes), or 0 if the underlying algorithm is not a block cipher

#### [h2]engineGetOutputSize

protected abstract int engineGetOutputSize​(int inputLen)

Returns the length in bytes that an output buffer would need to be in order to hold the result of the next update or doFinal operation, given the input length inputLen (in bytes). 

This call takes into account any unprocessed (buffered) data from a previous update call, padding, and AEAD tagging. 

The actual output length of the next update or doFinal call may be smaller than the length returned by this method.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
inputLen  |  the input length (in bytes)  
  
**Returns:**

the required output buffer size (in bytes)

#### [h2]engineGetIV

protected abstract byte[] engineGetIV​()

Returns the initialization vector (IV) in a new buffer. 

This is useful in the context of password-based encryption or decryption, where the IV is derived from a user-provided passphrase.

**Returns:**

the initialization vector in a new buffer, or null if the underlying algorithm does not use an IV, or if the IV has not yet been set.

#### [h2]engineGetParameters

protected abstract [AlgorithmParameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/algorithmparameters-0000001054199794) engineGetParameters​()

Returns the parameters used with this cipher. 

The returned parameters may be the same that were used to initialize this cipher, or may contain a combination of default and random parameter values used by the underlying cipher implementation if this cipher requires algorithm parameters but was not initialized with any.

**Returns:**

the parameters used with this cipher, or null if this cipher does not use any parameters.

#### [h2]engineInit

protected abstract void engineInit​(int opmode, [Key](https://developer.harmonyos.com/cn/docs/documentation/doc-references/key-0000001054358506) key, [SecureRandom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securerandom-0000001054358507) random) throws [InvalidKeyException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidkeyexception-0000001054119859)

Initializes this cipher with a key and a source of randomness. 

The cipher is initialized for one of the following four operations: encryption, decryption, key wrapping or key unwrapping, depending on the value of opmode. 

If this cipher requires any algorithm parameters that cannot be derived from the given key, the underlying cipher implementation is supposed to generate the required parameters itself (using provider-specific default or random values) if it is being initialized for encryption or key wrapping, and raise an InvalidKeyException if it is being initialized for decryption or key unwrapping. The generated parameters can be retrieved using [engineGetParameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineGetParameters--) or [engineGetIV](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineGetIV--) (if the parameter is an IV). 

If this cipher requires algorithm parameters that cannot be derived from the input parameters, and there are no reasonable provider-specific default values, initialization will necessarily fail. 

If this cipher (including its underlying feedback or padding scheme) requires any random bytes (e.g., for parameter generation), it will get them from random. 

Note that when a Cipher object is initialized, it loses all previously-acquired state. In other words, initializing a Cipher is equivalent to creating a new instance of that Cipher and initializing it.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
opmode  |  the operation mode of this cipher (this is one of the following: ENCRYPT_MODE, DECRYPT_MODE, WRAP_MODE or UNWRAP_MODE)  
key  |  the encryption key  
random  |  the source of randomness  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[InvalidKeyException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidkeyexception-0000001054119859) |  if the given key is inappropriate for initializing this cipher, or requires algorithm parameters that cannot be determined from the given key.  
[UnsupportedOperationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedoperationexception-0000001054238453) |  if opmode is WRAP_MODE or UNWRAP_MODE is not implemented by the cipher.  
  
#### [h2]engineInit

protected abstract void engineInit​(int opmode, [Key](https://developer.harmonyos.com/cn/docs/documentation/doc-references/key-0000001054358506) key, [AlgorithmParameterSpec](https://developer.harmonyos.com/cn/docs/documentation/doc-references/algorithmparameterspec-0000001054358527) params, [SecureRandom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securerandom-0000001054358507) random) throws [InvalidAlgorithmParameterException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidalgorithmparameterexception-0000001054358518), [InvalidKeyException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidkeyexception-0000001054119859)

Initializes this cipher with a key, a set of algorithm parameters, and a source of randomness. 

The cipher is initialized for one of the following four operations: encryption, decryption, key wrapping or key unwrapping, depending on the value of opmode. 

If this cipher requires any algorithm parameters and params is null, the underlying cipher implementation is supposed to generate the required parameters itself (using provider-specific default or random values) if it is being initialized for encryption or key wrapping, and raise an InvalidAlgorithmParameterException if it is being initialized for decryption or key unwrapping. The generated parameters can be retrieved using [engineGetParameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineGetParameters--) or [engineGetIV](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineGetIV--) (if the parameter is an IV). 

If this cipher requires algorithm parameters that cannot be derived from the input parameters, and there are no reasonable provider-specific default values, initialization will necessarily fail. 

If this cipher (including its underlying feedback or padding scheme) requires any random bytes (e.g., for parameter generation), it will get them from random. 

Note that when a Cipher object is initialized, it loses all previously-acquired state. In other words, initializing a Cipher is equivalent to creating a new instance of that Cipher and initializing it.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
opmode  |  the operation mode of this cipher (this is one of the following: ENCRYPT_MODE, DECRYPT_MODE, WRAP_MODE or UNWRAP_MODE)  
key  |  the encryption key  
params  |  the algorithm parameters  
random  |  the source of randomness  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[InvalidKeyException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidkeyexception-0000001054119859) |  if the given key is inappropriate for initializing this cipher  
[InvalidAlgorithmParameterException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidalgorithmparameterexception-0000001054358518) |  if the given algorithm parameters are inappropriate for this cipher, or if this cipher requires algorithm parameters and params is null.  
[UnsupportedOperationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedoperationexception-0000001054238453) |  if opmode is WRAP_MODE or UNWRAP_MODE is not implemented by the cipher.  
  
#### [h2]engineInit

protected abstract void engineInit​(int opmode, [Key](https://developer.harmonyos.com/cn/docs/documentation/doc-references/key-0000001054358506) key, [AlgorithmParameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/algorithmparameters-0000001054199794) params, [SecureRandom](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securerandom-0000001054358507) random) throws [InvalidAlgorithmParameterException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidalgorithmparameterexception-0000001054358518), [InvalidKeyException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidkeyexception-0000001054119859)

Initializes this cipher with a key, a set of algorithm parameters, and a source of randomness. 

The cipher is initialized for one of the following four operations: encryption, decryption, key wrapping or key unwrapping, depending on the value of opmode. 

If this cipher requires any algorithm parameters and params is null, the underlying cipher implementation is supposed to generate the required parameters itself (using provider-specific default or random values) if it is being initialized for encryption or key wrapping, and raise an InvalidAlgorithmParameterException if it is being initialized for decryption or key unwrapping. The generated parameters can be retrieved using [engineGetParameters](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineGetParameters--) or [engineGetIV](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cipherspi-0000001054678619#ZH-CN_TOPIC_0000001054678619__engineGetIV--) (if the parameter is an IV). 

If this cipher requires algorithm parameters that cannot be derived from the input parameters, and there are no reasonable provider-specific default values, initialization will necessarily fail. 

If this cipher (including its underlying feedback or padding scheme) requires any random bytes (e.g., for parameter generation), it will get them from random. 

Note that when a Cipher object is initialized, it loses all previously-acquired state. In other words, initializing a Cipher is equivalent to creating a new instance of that Cipher and initializing it.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
opmode  |  the operation mode of this cipher (this is one of the following: ENCRYPT_MODE, DECRYPT_MODE, WRAP_MODE or UNWRAP_MODE)  
key  |  the encryption key  
params  |  the algorithm parameters  
random  |  the source of randomness  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[InvalidKeyException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidkeyexception-0000001054119859) |  if the given key is inappropriate for initializing this cipher  
[InvalidAlgorithmParameterException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidalgorithmparameterexception-0000001054358518) |  if the given algorithm parameters are inappropriate for this cipher, or if this cipher requires algorithm parameters and params is null.  
[UnsupportedOperationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedoperationexception-0000001054238453) |  if opmode is WRAP_MODE or UNWRAP_MODE is not implemented by the cipher.  
  
#### [h2]engineUpdate

protected abstract byte[] engineUpdate​(byte[] input, int inputOffset, int inputLen)

Continues a multiple-part encryption or decryption operation (depending on how this cipher was initialized), processing another data part. 

The first inputLen bytes in the input buffer, starting at inputOffset inclusive, are processed, and the result is stored in a new buffer.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
input  |  the input buffer  
inputOffset  |  the offset in input where the input starts  
inputLen  |  the input length  
  
**Returns:**

the new buffer with the result, or null if the underlying cipher is a block cipher and the input data is too short to result in a new block.

#### [h2]engineUpdate

protected abstract int engineUpdate​(byte[] input, int inputOffset, int inputLen, byte[] output, int outputOffset) throws [ShortBufferException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/shortbufferexception-0000001054678654)

Continues a multiple-part encryption or decryption operation (depending on how this cipher was initialized), processing another data part. 

The first inputLen bytes in the input buffer, starting at inputOffset inclusive, are processed, and the result is stored in the output buffer, starting at outputOffset inclusive. 

If the output buffer is too small to hold the result, a ShortBufferException is thrown.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
input  |  the input buffer  
inputOffset  |  the offset in input where the input starts  
inputLen  |  the input length  
output  |  the buffer for the result  
outputOffset  |  the offset in output where the result is stored  
  
**Returns:**

the number of bytes stored in output

**Throws:**

Throw Name | Throw Description  
---|---  
[ShortBufferException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/shortbufferexception-0000001054678654) |  if the given output buffer is too small to hold the result  
  
#### [h2]engineUpdate

protected int engineUpdate​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) input, [ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) output) throws [ShortBufferException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/shortbufferexception-0000001054678654)

Continues a multiple-part encryption or decryption operation (depending on how this cipher was initialized), processing another data part. 

All input.remaining() bytes starting at input.position() are processed. The result is stored in the output buffer. Upon return, the input buffer's position will be equal to its limit; its limit will not have changed. The output buffer's position will have advanced by n, where n is the value returned by this method; the output buffer's limit will not have changed. 

If output.remaining() bytes are insufficient to hold the result, a ShortBufferException is thrown. 

Subclasses should consider overriding this method if they can process ByteBuffers more efficiently than byte arrays.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
input  |  the input ByteBuffer  
output  |  the output ByteByffer  
  
**Returns:**

the number of bytes stored in output

**Throws:**

Throw Name | Throw Description  
---|---  
[ShortBufferException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/shortbufferexception-0000001054678654) |  if there is insufficient space in the output buffer  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if either parameter is null  
  
**Since:**

1.5

#### [h2]engineDoFinal

protected abstract byte[] engineDoFinal​(byte[] input, int inputOffset, int inputLen) throws [BadPaddingException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/badpaddingexception-0000001054119910), [IllegalBlockSizeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalblocksizeexception-0000001054199926)

Encrypts or decrypts data in a single-part operation, or finishes a multiple-part operation. The data is encrypted or decrypted, depending on how this cipher was initialized. 

The first inputLen bytes in the input buffer, starting at inputOffset inclusive, and any input bytes that may have been buffered during a previous update operation, are processed, with padding (if requested) being applied. If an AEAD mode such as GCM/CCM is being used, the authentication tag is appended in the case of encryption, or verified in the case of decryption. The result is stored in a new buffer. 

Upon finishing, this method resets this cipher object to the state it was in when previously initialized via a call to engineInit. That is, the object is reset and available to encrypt or decrypt (depending on the operation mode that was specified in the call to engineInit) more data. 

Note: if any exception is thrown, this cipher object may need to be reset before it can be used again.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
input  |  the input buffer  
inputOffset  |  the offset in input where the input starts  
inputLen  |  the input length  
  
**Returns:**

the new buffer with the result

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalBlockSizeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalblocksizeexception-0000001054199926) |  if this cipher is a block cipher, no padding has been requested (only in encryption mode), and the total input length of the data processed by this cipher is not a multiple of block size; or if this encryption algorithm is unable to process the input data provided.  
[BadPaddingException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/badpaddingexception-0000001054119910) |  if this cipher is in decryption mode, and (un)padding has been requested, but the decrypted data is not bounded by the appropriate padding bytes  
[AEADBadTagException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/aeadbadtagexception-0000001054119981) |  if this cipher is decrypting in an AEAD mode (such as GCM/CCM), and the received authentication tag does not match the calculated value  
  
#### [h2]engineDoFinal

protected abstract int engineDoFinal​(byte[] input, int inputOffset, int inputLen, byte[] output, int outputOffset) throws [BadPaddingException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/badpaddingexception-0000001054119910), [IllegalBlockSizeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalblocksizeexception-0000001054199926), [ShortBufferException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/shortbufferexception-0000001054678654)

Encrypts or decrypts data in a single-part operation, or finishes a multiple-part operation. The data is encrypted or decrypted, depending on how this cipher was initialized. 

The first inputLen bytes in the input buffer, starting at inputOffset inclusive, and any input bytes that may have been buffered during a previous update operation, are processed, with padding (if requested) being applied. If an AEAD mode such as GCM/CCM is being used, the authentication tag is appended in the case of encryption, or verified in the case of decryption. The result is stored in the output buffer, starting at outputOffset inclusive. 

If the output buffer is too small to hold the result, a ShortBufferException is thrown. 

Upon finishing, this method resets this cipher object to the state it was in when previously initialized via a call to engineInit. That is, the object is reset and available to encrypt or decrypt (depending on the operation mode that was specified in the call to engineInit) more data. 

Note: if any exception is thrown, this cipher object may need to be reset before it can be used again.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
input  |  the input buffer  
inputOffset  |  the offset in input where the input starts  
inputLen  |  the input length  
output  |  the buffer for the result  
outputOffset  |  the offset in output where the result is stored  
  
**Returns:**

the number of bytes stored in output

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalBlockSizeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalblocksizeexception-0000001054199926) |  if this cipher is a block cipher, no padding has been requested (only in encryption mode), and the total input length of the data processed by this cipher is not a multiple of block size; or if this encryption algorithm is unable to process the input data provided.  
[ShortBufferException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/shortbufferexception-0000001054678654) |  if the given output buffer is too small to hold the result  
[BadPaddingException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/badpaddingexception-0000001054119910) |  if this cipher is in decryption mode, and (un)padding has been requested, but the decrypted data is not bounded by the appropriate padding bytes  
[AEADBadTagException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/aeadbadtagexception-0000001054119981) |  if this cipher is decrypting in an AEAD mode (such as GCM/CCM), and the received authentication tag does not match the calculated value  
  
#### [h2]engineDoFinal

protected int engineDoFinal​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) input, [ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) output) throws [BadPaddingException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/badpaddingexception-0000001054119910), [IllegalBlockSizeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalblocksizeexception-0000001054199926), [ShortBufferException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/shortbufferexception-0000001054678654)

Encrypts or decrypts data in a single-part operation, or finishes a multiple-part operation. The data is encrypted or decrypted, depending on how this cipher was initialized. 

All input.remaining() bytes starting at input.position() are processed. If an AEAD mode such as GCM/CCM is being used, the authentication tag is appended in the case of encryption, or verified in the case of decryption. The result is stored in the output buffer. Upon return, the input buffer's position will be equal to its limit; its limit will not have changed. The output buffer's position will have advanced by n, where n is the value returned by this method; the output buffer's limit will not have changed. 

If output.remaining() bytes are insufficient to hold the result, a ShortBufferException is thrown. 

Upon finishing, this method resets this cipher object to the state it was in when previously initialized via a call to engineInit. That is, the object is reset and available to encrypt or decrypt (depending on the operation mode that was specified in the call to engineInit) more data. 

Note: if any exception is thrown, this cipher object may need to be reset before it can be used again. 

Subclasses should consider overriding this method if they can process ByteBuffers more efficiently than byte arrays.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
input  |  the input ByteBuffer  
output  |  the output ByteByffer  
  
**Returns:**

the number of bytes stored in output

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalBlockSizeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalblocksizeexception-0000001054199926) |  if this cipher is a block cipher, no padding has been requested (only in encryption mode), and the total input length of the data processed by this cipher is not a multiple of block size; or if this encryption algorithm is unable to process the input data provided.  
[ShortBufferException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/shortbufferexception-0000001054678654) |  if there is insufficient space in the output buffer  
[BadPaddingException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/badpaddingexception-0000001054119910) |  if this cipher is in decryption mode, and (un)padding has been requested, but the decrypted data is not bounded by the appropriate padding bytes  
[AEADBadTagException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/aeadbadtagexception-0000001054119981) |  if this cipher is decrypting in an AEAD mode (such as GCM/CCM), and the received authentication tag does not match the calculated value  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if either parameter is null  
  
**Since:**

1.5

#### [h2]engineWrap

protected byte[] engineWrap​([Key](https://developer.harmonyos.com/cn/docs/documentation/doc-references/key-0000001054358506) key) throws [IllegalBlockSizeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalblocksizeexception-0000001054199926), [InvalidKeyException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidkeyexception-0000001054119859)

Wrap a key. 

This concrete method has been added to this previously-defined abstract class. (For backwards compatibility, it cannot be abstract.) It may be overridden by a provider to wrap a key. Such an override is expected to throw an IllegalBlockSizeException or InvalidKeyException (under the specified circumstances), if the given key cannot be wrapped. If this method is not overridden, it always throws an UnsupportedOperationException.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
key  |  the key to be wrapped.  
  
**Returns:**

the wrapped key.

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalBlockSizeException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalblocksizeexception-0000001054199926) |  if this cipher is a block cipher, no padding has been requested, and the length of the encoding of the key to be wrapped is not a multiple of the block size.  
[InvalidKeyException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidkeyexception-0000001054119859) |  if it is impossible or unsafe to wrap the key with this cipher (e.g., a hardware protected key is being passed to a software-only cipher).  
[UnsupportedOperationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedoperationexception-0000001054238453) |  if this method is not supported.  
  
#### [h2]engineUnwrap

protected [Key](https://developer.harmonyos.com/cn/docs/documentation/doc-references/key-0000001054358506) engineUnwrap​(byte[] wrappedKey, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) wrappedKeyAlgorithm, int wrappedKeyType) throws [InvalidKeyException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidkeyexception-0000001054119859), [NoSuchAlgorithmException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nosuchalgorithmexception-0000001054678532)

Unwrap a previously wrapped key. 

This concrete method has been added to this previously-defined abstract class. (For backwards compatibility, it cannot be abstract.) It may be overridden by a provider to unwrap a previously wrapped key. Such an override is expected to throw an InvalidKeyException if the given wrapped key cannot be unwrapped. If this method is not overridden, it always throws an UnsupportedOperationException.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
wrappedKey  |  the key to be unwrapped.  
wrappedKeyAlgorithm  |  the algorithm associated with the wrapped key.  
wrappedKeyType  |  the type of the wrapped key. This is one of SECRET_KEY, PRIVATE_KEY, or PUBLIC_KEY.  
  
**Returns:**

the unwrapped key.

**Throws:**

Throw Name | Throw Description  
---|---  
[NoSuchAlgorithmException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nosuchalgorithmexception-0000001054678532) |  if no installed providers can create keys of type wrappedKeyType for the wrappedKeyAlgorithm.  
[InvalidKeyException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidkeyexception-0000001054119859) |  if wrappedKey does not represent a wrapped key of type wrappedKeyType for the wrappedKeyAlgorithm.  
[UnsupportedOperationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedoperationexception-0000001054238453) |  if this method is not supported.  
  
#### [h2]engineGetKeySize

protected int engineGetKeySize​([Key](https://developer.harmonyos.com/cn/docs/documentation/doc-references/key-0000001054358506) key) throws [InvalidKeyException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidkeyexception-0000001054119859)

Returns the key size of the given key object in bits. 

This concrete method has been added to this previously-defined abstract class. It throws an UnsupportedOperationException if it is not overridden by the provider.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
key  |  the key object.  
  
**Returns:**

the key size of the given key object.

**Throws:**

Throw Name | Throw Description  
---|---  
[InvalidKeyException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/invalidkeyexception-0000001054119859) |  if key is invalid.  
  
#### [h2]engineUpdateAAD

protected void engineUpdateAAD​(byte[] src, int offset, int len)

Continues a multi-part update of the Additional Authentication Data (AAD), using a subset of the provided buffer. 

Calls to this method provide AAD to the cipher when operating in modes such as AEAD (GCM/CCM). If this cipher is operating in either GCM or CCM mode, all AAD must be supplied before beginning operations on the ciphertext (via the update and doFinal methods).

**Parameters:**

Parameter Name | Parameter Description  
---|---  
src  |  the buffer containing the AAD  
offset  |  the offset in src where the AAD input starts  
len  |  the number of AAD bytes  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalStateException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalstateexception-0000001054678452) |  if this cipher is in a wrong state (e.g., has not been initialized), does not accept AAD, or if operating in either GCM or CCM mode and one of the update methods has already been called for the active encryption/decryption operation  
[UnsupportedOperationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedoperationexception-0000001054238453) |  if this method has not been overridden by an implementation  
  
**Since:**

1.7

#### [h2]engineUpdateAAD

protected void engineUpdateAAD​([ByteBuffer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bytebuffer-0000001054439771) src)

Continues a multi-part update of the Additional Authentication Data (AAD). 

Calls to this method provide AAD to the cipher when operating in modes such as AEAD (GCM/CCM). If this cipher is operating in either GCM or CCM mode, all AAD must be supplied before beginning operations on the ciphertext (via the update and doFinal methods). 

All src.remaining() bytes starting at src.position() are processed. Upon return, the input buffer's position will be equal to its limit; its limit will not have changed.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
src  |  the buffer containing the AAD  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalStateException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalstateexception-0000001054678452) |  if this cipher is in a wrong state (e.g., has not been initialized), does not accept AAD, or if operating in either GCM or CCM mode and one of the update methods has already been called for the active encryption/decryption operation  
[UnsupportedOperationException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedoperationexception-0000001054238453) |  if this method has not been overridden by an implementation  
  
**Since:**

1.7
