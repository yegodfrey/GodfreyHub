---
name: document/cn/doc-references/objectinput-0000001054558429
title: ObjectInput
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/objectinput-0000001054558429
source: portal
---

# ObjectInput
    
    public interface ObjectInput
    extends [DataInput](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datainput-0000001054119684), [AutoCloseable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/autocloseable-0000001054518454)  
  
---  
ObjectInput extends the DataInput interface to include the reading of objects. DataInput includes methods for the input of primitive types, ObjectInput extends that interface to include objects, arrays, and Strings.

**Since:**

JDK1.1

**See Also:**

[InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420), [ObjectOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectoutputstream-0000001054678434), [ObjectInputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectinputstream-0000001054199706)

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
int | [available](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectinput-0000001054558429#ZH-CN_TOPIC_0000001054558429__available--)​() |  Returns the number of bytes that can be read without blocking.   
void | [close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectinput-0000001054558429#ZH-CN_TOPIC_0000001054558429__close--)​() |  Closes the input stream.   
int | [read](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectinput-0000001054558429#ZH-CN_TOPIC_0000001054558429__read--)​() |  Reads a byte of data.   
int | [read](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectinput-0000001054558429#ZH-CN_TOPIC_0000001054558429__read-byte:A-)​(byte[] b) |  Reads into an array of bytes.   
int | [read](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectinput-0000001054558429#ZH-CN_TOPIC_0000001054558429__read-byte:A-int-int-)​(byte[] b, int off, int len) |  Reads into an array of bytes.   
[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) | [readObject](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectinput-0000001054558429#ZH-CN_TOPIC_0000001054558429__readObject--)​() |  Read and return an object.   
long | [skip](https://developer.harmonyos.com/cn/docs/documentation/doc-references/objectinput-0000001054558429#ZH-CN_TOPIC_0000001054558429__skip-long-)​(long n) |  Skips n bytes of input.   
  
Methods inherited from interface java.io.[DataInput](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datainput-0000001054119684)  
---  
[readBoolean](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datainput-0000001054119684#ZH-CN_TOPIC_0000001054119684__readBoolean--), [readByte](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datainput-0000001054119684#ZH-CN_TOPIC_0000001054119684__readByte--), [readChar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datainput-0000001054119684#ZH-CN_TOPIC_0000001054119684__readChar--), [readDouble](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datainput-0000001054119684#ZH-CN_TOPIC_0000001054119684__readDouble--), [readFloat](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datainput-0000001054119684#ZH-CN_TOPIC_0000001054119684__readFloat--), [readFully](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datainput-0000001054119684#ZH-CN_TOPIC_0000001054119684__readFully-byte:A-), [readFully](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datainput-0000001054119684#ZH-CN_TOPIC_0000001054119684__readFully-byte:A-int-int-), [readInt](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datainput-0000001054119684#ZH-CN_TOPIC_0000001054119684__readInt--), [readLine](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datainput-0000001054119684#ZH-CN_TOPIC_0000001054119684__readLine--), [readLong](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datainput-0000001054119684#ZH-CN_TOPIC_0000001054119684__readLong--), [readShort](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datainput-0000001054119684#ZH-CN_TOPIC_0000001054119684__readShort--), [readUnsignedByte](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datainput-0000001054119684#ZH-CN_TOPIC_0000001054119684__readUnsignedByte--), [readUnsignedShort](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datainput-0000001054119684#ZH-CN_TOPIC_0000001054119684__readUnsignedShort--), [readUTF](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datainput-0000001054119684#ZH-CN_TOPIC_0000001054119684__readUTF--), [skipBytes](https://developer.harmonyos.com/cn/docs/documentation/doc-references/datainput-0000001054119684#ZH-CN_TOPIC_0000001054119684__skipBytes-int-)  
  
#### Method Detail

#### [h2]readObject

[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) readObject​() throws [ClassNotFoundException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/classnotfoundexception-0000001054838404), [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Read and return an object. The class that implements this interface defines where the object is "read" from. 

**Returns:**

the object read from the stream

**Throws:**

Throw Name | Throw Description  
---|---  
[ClassNotFoundException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/classnotfoundexception-0000001054838404) |  If the class of a serialized object cannot be found.  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If any of the usual Input/Output related exceptions occur.  
  
#### [h2]read

int read​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Reads a byte of data. This method will block if no input is available. 

**Returns:**

the byte read, or -1 if the end of the stream is reached.

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If an I/O error has occurred.  
  
#### [h2]read

int read​(byte[] b) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Reads into an array of bytes. This method will block until some input is available. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
b  |  the buffer into which the data is read  
  
**Returns:**

the actual number of bytes read, -1 is returned when the end of the stream is reached.

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If an I/O error has occurred.  
  
#### [h2]read

int read​(byte[] b, int off, int len) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Reads into an array of bytes. This method will block until some input is available. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
b  |  the buffer into which the data is read  
off  |  the start offset of the data  
len  |  the maximum number of bytes read  
  
**Returns:**

the actual number of bytes read, -1 is returned when the end of the stream is reached.

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If an I/O error has occurred.  
  
#### [h2]skip

long skip​(long n) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Skips n bytes of input. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
n  |  the number of bytes to be skipped  
  
**Returns:**

the actual number of bytes skipped.

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If an I/O error has occurred.  
  
#### [h2]available

int available​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Returns the number of bytes that can be read without blocking. 

**Returns:**

the number of available bytes.

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If an I/O error has occurred.  
  
#### [h2]close

void close​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Closes the input stream. Must be called to release any resources associated with the stream. 

**Specified by:**

[close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/autocloseable-0000001054518454#ZH-CN_TOPIC_0000001054518454__close--) in interface [AutoCloseable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/autocloseable-0000001054518454)

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  If an I/O error has occurred.
