---
name: document/cn/doc-references/inflateroutputstream-0000001054199920
title: InflaterOutputStream
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/inflateroutputstream-0000001054199920
source: portal
---

# InflaterOutputStream

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.io.OutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403) |---|---[java.io.FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431) |---|---|---java.util.zip.InflaterOutputStream
    
    public class InflaterOutputStream
    extends [FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)  
  
---  
Implements an output stream filter for uncompressing data stored in the "deflate" compression format.

**Since:**

1.6

**See Also:**

[InflaterInputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inflaterinputstream-0000001054439933), [DeflaterInputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deflaterinputstream-0000001054678615), [DeflaterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/deflateroutputstream-0000001054838600)

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
protected byte[] | [buf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inflateroutputstream-0000001054199920#ZH-CN_TOPIC_0000001054199920__buf) |  Output buffer for writing uncompressed data.   
protected [Inflater](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inflater-0000001054119904) | [inf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inflateroutputstream-0000001054199920#ZH-CN_TOPIC_0000001054199920__inf) |  Decompressor for this stream.   
  
Fields inherited from class java.io.[FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)  
---  
[out](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__out)  
  
#### Constructor Summary

Constructor | Description  
---|---  
[InflaterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inflateroutputstream-0000001054199920#ZH-CN_TOPIC_0000001054199920__InflaterOutputStream-java_io_OutputStream-)​([OutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403) out) |  Creates a new output stream with a default decompressor and buffer size.   
[InflaterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inflateroutputstream-0000001054199920#ZH-CN_TOPIC_0000001054199920__InflaterOutputStream-java_io_OutputStream-java_util_zip_Inflater-)​([OutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403) out, [Inflater](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inflater-0000001054119904) infl) |  Creates a new output stream with the specified decompressor and a default buffer size.   
[InflaterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inflateroutputstream-0000001054199920#ZH-CN_TOPIC_0000001054199920__InflaterOutputStream-java_io_OutputStream-java_util_zip_Inflater-int-)​([OutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403) out, [Inflater](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inflater-0000001054119904) infl, int bufLen) |  Creates a new output stream with the specified decompressor and buffer size.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inflateroutputstream-0000001054199920#ZH-CN_TOPIC_0000001054199920__close--)​() |  Writes any remaining uncompressed data to the output stream and closes the underlying output stream.   
void | [finish](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inflateroutputstream-0000001054199920#ZH-CN_TOPIC_0000001054199920__finish--)​() |  Finishes writing uncompressed data to the output stream without closing the underlying stream.   
void | [flush](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inflateroutputstream-0000001054199920#ZH-CN_TOPIC_0000001054199920__flush--)​() |  Flushes this output stream, forcing any pending buffered output bytes to be written.   
void | [write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inflateroutputstream-0000001054199920#ZH-CN_TOPIC_0000001054199920__write-byte:A-int-int-)​(byte[] b, int off, int len) |  Writes an array of bytes to the uncompressed output stream.   
void | [write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inflateroutputstream-0000001054199920#ZH-CN_TOPIC_0000001054199920__write-int-)​(int b) |  Writes a byte to the uncompressed output stream.   
  
Methods inherited from class java.io.[FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)  
---  
[write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__write-byte:A-)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]buf

protected final byte[] buf

Output buffer for writing uncompressed data. 

#### [h2]inf

protected final [Inflater](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inflater-0000001054119904) inf

Decompressor for this stream. 

#### Constructor Detail

#### [h2]InflaterOutputStream

public InflaterOutputStream​([OutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403) out)

Creates a new output stream with a default decompressor and buffer size. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
out  |  output stream to write the uncompressed data to  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if out is null  
  
#### [h2]InflaterOutputStream

public InflaterOutputStream​([OutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403) out, [Inflater](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inflater-0000001054119904) infl)

Creates a new output stream with the specified decompressor and a default buffer size. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
out  |  output stream to write the uncompressed data to  
infl  |  decompressor ("inflater") for this stream  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if out or infl is null  
  
#### [h2]InflaterOutputStream

public InflaterOutputStream​([OutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403) out, [Inflater](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inflater-0000001054119904) infl, int bufLen)

Creates a new output stream with the specified decompressor and buffer size. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
out  |  output stream to write the uncompressed data to  
infl  |  decompressor ("inflater") for this stream  
bufLen  |  decompression buffer size  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if bufLen <= 0  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if out or infl is null  
  
#### Method Detail

#### [h2]close

public void close​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Writes any remaining uncompressed data to the output stream and closes the underlying output stream. 

**Specified by:**

[close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/autocloseable-0000001054518454#ZH-CN_TOPIC_0000001054518454__close--) in interface [AutoCloseable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/autocloseable-0000001054518454)

**Specified by:**

[close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closeable-0000001054119755#ZH-CN_TOPIC_0000001054119755__close--) in interface [Closeable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closeable-0000001054119755)

**Overrides:**

[close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__close--) in class [FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  if an I/O error occurs  
  
**See Also:**

[FilterOutputStream.flush()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__flush--), [FilterOutputStream.out](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__out)

#### [h2]flush

public void flush​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Flushes this output stream, forcing any pending buffered output bytes to be written. 

**Specified by:**

[flush](https://developer.harmonyos.com/cn/docs/documentation/doc-references/flushable-0000001054358407#ZH-CN_TOPIC_0000001054358407__flush--) in interface [Flushable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/flushable-0000001054358407)

**Overrides:**

[flush](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__flush--) in class [FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  if an I/O error occurs or this stream is already closed  
  
**See Also:**

[FilterOutputStream.out](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__out)

#### [h2]finish

public void finish​() throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Finishes writing uncompressed data to the output stream without closing the underlying stream. Use this method when applying multiple filters in succession to the same output stream. 

**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  if an I/O error occurs or this stream is already closed  
  
#### [h2]write

public void write​(int b) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Writes a byte to the uncompressed output stream. 

**Overrides:**

[write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__write-int-) in class [FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
b  |  a single byte of compressed data to decompress and write to the output stream  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  if an I/O error occurs or this stream is already closed  
[ZipException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/zipexception-0000001054838602) |  if a compression (ZIP) format error occurs  
  
#### [h2]write

public void write​(byte[] b, int off, int len) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Writes an array of bytes to the uncompressed output stream. 

**Overrides:**

[write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__write-byte:A-int-int-) in class [FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
b  |  buffer containing compressed data to decompress and write to the output stream  
off  |  starting offset of the compressed data within b  
len  |  number of bytes to decompress from b  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IndexOutOfBoundsException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexoutofboundsexception-0000001054558453) |  if off < 0, or if len < 0, or if len > b.length - off  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  if an I/O error occurs or this stream is already closed  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if b is null  
[ZipException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/zipexception-0000001054838602) |  if a compression (ZIP) format error occurs  
  
**See Also:**

[FilterOutputStream.write(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__write-int-)
