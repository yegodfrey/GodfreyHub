---
name: document/cn/doc-references/digestoutputstream-0000001054358510
title: DigestOutputStream
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/digestoutputstream-0000001054358510
source: portal
---

# DigestOutputStream

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.io.OutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403) |---|---[java.io.FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431) |---|---|---java.security.DigestOutputStream
    
    public class DigestOutputStream
    extends [FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)  
  
---  
A transparent stream that updates the associated message digest using the bits going through the stream. 

To complete the message digest computation, call one of the digest methods on the associated message digest after your calls to one of this digest output stream's [write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/digestoutputstream-0000001054358510#ZH-CN_TOPIC_0000001054358510__write-int-) methods. 

It is possible to turn this stream on or off (see [on](https://developer.harmonyos.com/cn/docs/documentation/doc-references/digestoutputstream-0000001054358510#ZH-CN_TOPIC_0000001054358510__on-boolean-)). When it is on, a call to one of the write methods results in an update on the message digest. But when it is off, the message digest is not updated. The default is for the stream to be on.

**See Also:**

[MessageDigest](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagedigest-0000001054358505), [DigestInputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/digestinputstream-0000001054838476)

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
protected [MessageDigest](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagedigest-0000001054358505) | [digest](https://developer.harmonyos.com/cn/docs/documentation/doc-references/digestoutputstream-0000001054358510#ZH-CN_TOPIC_0000001054358510__digest) |  The message digest associated with this stream.   
  
Fields inherited from class java.io.[FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)  
---  
[out](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__out)  
  
#### Constructor Summary

Constructor | Description  
---|---  
[DigestOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/digestoutputstream-0000001054358510#ZH-CN_TOPIC_0000001054358510__DigestOutputStream-java_io_OutputStream-java_security_MessageDigest-)​([OutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403) stream, [MessageDigest](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagedigest-0000001054358505) digest) |  Creates a digest output stream, using the specified output stream and message digest.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[MessageDigest](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagedigest-0000001054358505) | [getMessageDigest](https://developer.harmonyos.com/cn/docs/documentation/doc-references/digestoutputstream-0000001054358510#ZH-CN_TOPIC_0000001054358510__getMessageDigest--)​() |  Returns the message digest associated with this stream.   
void | [on](https://developer.harmonyos.com/cn/docs/documentation/doc-references/digestoutputstream-0000001054358510#ZH-CN_TOPIC_0000001054358510__on-boolean-)​(boolean on) |  Turns the digest function on or off.   
void | [setMessageDigest](https://developer.harmonyos.com/cn/docs/documentation/doc-references/digestoutputstream-0000001054358510#ZH-CN_TOPIC_0000001054358510__setMessageDigest-java_security_MessageDigest-)​([MessageDigest](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagedigest-0000001054358505) digest) |  Associates the specified message digest with this stream.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/digestoutputstream-0000001054358510#ZH-CN_TOPIC_0000001054358510__toString--)​() |  Prints a string representation of this digest output stream and its associated message digest object.   
void | [write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/digestoutputstream-0000001054358510#ZH-CN_TOPIC_0000001054358510__write-byte:A-int-int-)​(byte[] b, int off, int len) |  Updates the message digest (if the digest function is on) using the specified subarray, and in any case writes the subarray to the output stream.   
void | [write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/digestoutputstream-0000001054358510#ZH-CN_TOPIC_0000001054358510__write-int-)​(int b) |  Updates the message digest (if the digest function is on) using the specified byte, and in any case writes the byte to the output stream.   
  
Methods inherited from class java.io.[FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)  
---  
[close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__close--), [flush](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__flush--), [write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__write-byte:A-)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]digest

protected [MessageDigest](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagedigest-0000001054358505) digest

The message digest associated with this stream. 

#### Constructor Detail

#### [h2]DigestOutputStream

public DigestOutputStream​([OutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403) stream, [MessageDigest](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagedigest-0000001054358505) digest)

Creates a digest output stream, using the specified output stream and message digest. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
stream  |  the output stream.  
digest  |  the message digest to associate with this stream.  
  
#### Method Detail

#### [h2]getMessageDigest

public [MessageDigest](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagedigest-0000001054358505) getMessageDigest​()

Returns the message digest associated with this stream. 

**Returns:**

the message digest associated with this stream.

**See Also:**

[setMessageDigest(java.security.MessageDigest)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/digestoutputstream-0000001054358510#ZH-CN_TOPIC_0000001054358510__setMessageDigest-java_security_MessageDigest-)

#### [h2]setMessageDigest

public void setMessageDigest​([MessageDigest](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagedigest-0000001054358505) digest)

Associates the specified message digest with this stream. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
digest  |  the message digest to be associated with this stream.  
  
**See Also:**

[getMessageDigest()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/digestoutputstream-0000001054358510#ZH-CN_TOPIC_0000001054358510__getMessageDigest--)

#### [h2]write

public void write​(int b) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Updates the message digest (if the digest function is on) using the specified byte, and in any case writes the byte to the output stream. That is, if the digest function is on (see [on](https://developer.harmonyos.com/cn/docs/documentation/doc-references/digestoutputstream-0000001054358510#ZH-CN_TOPIC_0000001054358510__on-boolean-)), this method calls update on the message digest associated with this stream, passing it the byte b. This method then writes the byte to the output stream, blocking until the byte is actually written. 

**Overrides:**

[write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__write-int-) in class [FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
b  |  the byte to be used for updating and writing to the output stream.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  if an I/O error occurs.  
  
**See Also:**

[MessageDigest.update(byte)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagedigest-0000001054358505#ZH-CN_TOPIC_0000001054358505__update-byte-)

#### [h2]write

public void write​(byte[] b, int off, int len) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Updates the message digest (if the digest function is on) using the specified subarray, and in any case writes the subarray to the output stream. That is, if the digest function is on (see [on](https://developer.harmonyos.com/cn/docs/documentation/doc-references/digestoutputstream-0000001054358510#ZH-CN_TOPIC_0000001054358510__on-boolean-)), this method calls update on the message digest associated with this stream, passing it the subarray specifications. This method then writes the subarray bytes to the output stream, blocking until the bytes are actually written. 

**Overrides:**

[write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__write-byte:A-int-int-) in class [FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
b  |  the array containing the subarray to be used for updating and writing to the output stream.  
off  |  the offset into b of the first byte to be updated and written.  
len  |  the number of bytes of data to be updated and written from b, starting at offset off.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  if an I/O error occurs.  
  
**See Also:**

[MessageDigest.update(byte[], int, int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/messagedigest-0000001054358505#ZH-CN_TOPIC_0000001054358505__update-byte:A-int-int-)

#### [h2]on

public void on​(boolean on)

Turns the digest function on or off. The default is on. When it is on, a call to one of the write methods results in an update on the message digest. But when it is off, the message digest is not updated. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
on  |  true to turn the digest function on, false to turn it off.  
  
#### [h2]toString

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) toString​()

Prints a string representation of this digest output stream and its associated message digest object. 

**Overrides:**

[toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

a string representation of the object.
