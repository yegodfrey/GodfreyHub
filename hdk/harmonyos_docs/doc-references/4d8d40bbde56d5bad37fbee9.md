---
name: document/cn/doc-references/filterinputstream-0000001054558433
title: FilterInputStream
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/filterinputstream-0000001054558433
source: portal
---

# FilterInputStream

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.io.InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420) |---|---java.io.FilterInputStream
    
    public class FilterInputStream
    extends [InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420)  
  
---  
A FilterInputStream contains some other input stream, which it uses as its basic source of data, possibly transforming the data along the way or providing additional functionality. The class FilterInputStream itself simply overrides all methods of InputStream with versions that pass all requests to the contained input stream. Subclasses of FilterInputStream may further override some of these methods and may also provide additional methods and fields.

**Since:**

JDK1.0

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
protected [InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420) | [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__in) |  The input stream to be filtered.   
  
#### Constructor Summary

Modifier | Constructor | Description  
---|---|---  
protected  | [FilterInputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__FilterInputStream-java_io_InputStream-)​([InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420) in) |  Creates a FilterInputStream by assigning the argument in to the field this.in so as to remember it for later use.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
int | [available](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__available--)​() |  Returns an estimate of the number of bytes that can be read (or skipped over) from this input stream without blocking by the next caller of a method for this input stream.   
void | [close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__close--)​() |  Closes this input stream and releases any system resources associated with the stream.   
void | [mark](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__mark-int-)​(int readlimit) |  Marks the current position in this input stream.   
boolean | [markSupported](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__markSupported--)​() |  Tests if this input stream supports the mark and reset methods.   
int | [read](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__read--)​() |  Reads the next byte of data from this input stream.   
int | [read](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__read-byte:A-)​(byte[] b) |  Reads up to byte.length bytes of data from this input stream into an array of bytes.   
int | [read](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__read-byte:A-int-int-)​(byte[] b, int off, int len) |  Reads up to len bytes of data from this input stream into an array of bytes.   
void | [reset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__reset--)​() |  Repositions this stream to the position at the time the mark method was last called on this input stream.   
long | [skip](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__skip-long-)​(long n) |  Skips over and discards n bytes of data from the input stream.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]in

protected volatile [InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420) in

The input stream to be filtered. 

#### Constructor Detail

#### [h2]FilterInputStream

protected FilterInputStream​([InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420) in)

Creates a FilterInputStream by assigning the argument in to the field this.in so as to remember it for later use. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
in  |  the underlying input stream, or null if this instance is to be created without an underlying stream.  
  
#### Method Detail

#### [h2]read

public int read​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Reads the next byte of data from this input stream. The value byte is returned as an int in the range 0 to 255. If no byte is available because the end of the stream has been reached, the value -1 is returned. This method blocks until input data is available, the end of the stream is detected, or an exception is thrown. 

This method simply performs in.read() and returns the result.

**Specified by:**

[read](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420#ZH-CN_TOPIC_0000001054358420__read--) in class [InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420)

**Returns:**

the next byte of data, or -1 if the end of the stream is reached.

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  if an I/O error occurs.  
  
**See Also:**

[in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__in)

#### [h2]read

public int read​(byte[] b) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Reads up to byte.length bytes of data from this input stream into an array of bytes. This method blocks until some input is available. 

This method simply performs the call read(b, 0, b.length) and returns the result. It is important that it does _not_ do in.read(b) instead; certain subclasses of FilterInputStream depend on the implementation strategy actually used.

**Overrides:**

[read](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420#ZH-CN_TOPIC_0000001054358420__read-byte:A-) in class [InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
b  |  the buffer into which the data is read.  
  
**Returns:**

the total number of bytes read into the buffer, or -1 if there is no more data because the end of the stream has been reached.

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  if an I/O error occurs.  
  
**See Also:**

[read(byte[], int, int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__read-byte:A-int-int-)

#### [h2]read

public int read​(byte[] b, int off, int len) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Reads up to len bytes of data from this input stream into an array of bytes. If len is not zero, the method blocks until some input is available; otherwise, no bytes are read and 0 is returned. 

This method simply performs in.read(b, off, len) and returns the result.

**Overrides:**

[read](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420#ZH-CN_TOPIC_0000001054358420__read-byte:A-int-int-) in class [InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
b  |  the buffer into which the data is read.  
off  |  the start offset in the destination array b  
len  |  the maximum number of bytes read.  
  
**Returns:**

the total number of bytes read into the buffer, or -1 if there is no more data because the end of the stream has been reached.

**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  If b is null.  
[IndexOutOfBoundsException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexoutofboundsexception-0000001054558453) |  If off is negative, len is negative, or len is greater than b.length - off  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  if an I/O error occurs.  
  
**See Also:**

[in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__in)

#### [h2]skip

public long skip​(long n) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Skips over and discards n bytes of data from the input stream. The skip method may, for a variety of reasons, end up skipping over some smaller number of bytes, possibly 0. The actual number of bytes skipped is returned. 

This method simply performs in.skip(n).

**Overrides:**

[skip](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420#ZH-CN_TOPIC_0000001054358420__skip-long-) in class [InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
n  |  the number of bytes to be skipped.  
  
**Returns:**

the actual number of bytes skipped.

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  if the stream does not support seek, or if some other I/O error occurs.  
  
#### [h2]available

public int available​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Returns an estimate of the number of bytes that can be read (or skipped over) from this input stream without blocking by the next caller of a method for this input stream. The next caller might be the same thread or another thread. A single read or skip of this many bytes will not block, but may read or skip fewer bytes. 

This method returns the result of [in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__in).available().

**Overrides:**

[available](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420#ZH-CN_TOPIC_0000001054358420__available--) in class [InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420)

**Returns:**

an estimate of the number of bytes that can be read (or skipped over) from this input stream without blocking.

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  if an I/O error occurs.  
  
#### [h2]close

public void close​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Closes this input stream and releases any system resources associated with the stream. This method simply performs in.close(). 

**Specified by:**

[close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/autocloseable-0000001054518454#ZH-CN_TOPIC_0000001054518454__close--) in interface [AutoCloseable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/autocloseable-0000001054518454)

**Specified by:**

[close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closeable-0000001054119755#ZH-CN_TOPIC_0000001054119755__close--) in interface [Closeable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closeable-0000001054119755)

**Overrides:**

[close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420#ZH-CN_TOPIC_0000001054358420__close--) in class [InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420)

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  if an I/O error occurs.  
  
**See Also:**

[in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__in)

#### [h2]mark

public void mark​(int readlimit)

Marks the current position in this input stream. A subsequent call to the reset method repositions this stream at the last marked position so that subsequent reads re-read the same bytes. 

The readlimit argument tells this input stream to allow that many bytes to be read before the mark position gets invalidated. 

This method simply performs in.mark(readlimit).

**Overrides:**

[mark](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420#ZH-CN_TOPIC_0000001054358420__mark-int-) in class [InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
readlimit  |  the maximum limit of bytes that can be read before the mark position becomes invalid.  
  
**See Also:**

[in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__in), [reset()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__reset--)

#### [h2]reset

public void reset​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Repositions this stream to the position at the time the mark method was last called on this input stream. 

This method simply performs in.reset(). 

Stream marks are intended to be used in situations where you need to read ahead a little to see what's in the stream. Often this is most easily done by invoking some general parser. If the stream is of the type handled by the parse, it just chugs along happily. If the stream is not of that type, the parser should toss an exception when it fails. If this happens within readlimit bytes, it allows the outer code to reset the stream and try another parser.

**Overrides:**

[reset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420#ZH-CN_TOPIC_0000001054358420__reset--) in class [InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420)

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  if the stream has not been marked or if the mark has been invalidated.  
  
**See Also:**

[in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__in), [mark(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__mark-int-)

#### [h2]markSupported

public boolean markSupported​()

Tests if this input stream supports the mark and reset methods. This method simply performs in.markSupported(). 

**Overrides:**

[markSupported](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420#ZH-CN_TOPIC_0000001054358420__markSupported--) in class [InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420)

**Returns:**

true if this stream type supports the mark and reset method; false otherwise.

**See Also:**

[in](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filterinputstream-0000001054558433#ZH-CN_TOPIC_0000001054558433__in), [InputStream.mark(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420#ZH-CN_TOPIC_0000001054358420__mark-int-), [InputStream.reset()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420#ZH-CN_TOPIC_0000001054358420__reset--)
