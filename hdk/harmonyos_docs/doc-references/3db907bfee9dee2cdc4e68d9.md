---
name: document/cn/doc-references/printstream-0000001054199708
title: PrintStream
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/printstream-0000001054199708
source: portal
---

# PrintStream

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.io.OutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403) |---|---[java.io.FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431) |---|---|---java.io.PrintStream
    
    public class PrintStream
    extends [FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)
    implements [Appendable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714), [Closeable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closeable-0000001054119755)  
  
---  
A PrintStream adds functionality to another output stream, namely the ability to print representations of various data values conveniently. Two other features are provided as well. Unlike other output streams, a PrintStream never throws an IOException; instead, exceptional situations merely set an internal flag that can be tested via the checkError method. Optionally, a PrintStream can be created so as to flush automatically; this means that the flush method is automatically invoked after a byte array is written, one of the println methods is invoked, or a newline character or byte ('\n') is written. 

All characters printed by a PrintStream are converted into bytes using the platform's default character encoding. The [PrintWriter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printwriter-0000001054518448) class should be used in situations that require writing characters rather than bytes.

**Since:**

JDK1.0

#### Field Summary

Fields inherited from class java.io.[FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)  
---  
[out](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__out)  
  
#### Constructor Summary

Constructor | Description  
---|---  
[PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__PrintStream-java_io_File-)​([File](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759) file) |  Creates a new print stream, without automatic line flushing, with the specified file.   
[PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__PrintStream-java_io_File-java_lang_String-)​([File](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759) file, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) csn) |  Creates a new print stream, without automatic line flushing, with the specified file and charset.   
[PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__PrintStream-java_io_OutputStream-)​([OutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403) out) |  Creates a new print stream.   
[PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__PrintStream-java_io_OutputStream-boolean-)​([OutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403) out, boolean autoFlush) |  Creates a new print stream.   
[PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__PrintStream-java_io_OutputStream-boolean-java_lang_String-)​([OutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403) out, boolean autoFlush, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) encoding) |  Creates a new print stream.   
[PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__PrintStream-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) fileName) |  Creates a new print stream, without automatic line flushing, with the specified file name.   
[PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__PrintStream-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) fileName, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) csn) |  Creates a new print stream, without automatic line flushing, with the specified file name and charset.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708) | [append](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__append-char-)​(char c) |  Appends the specified character to this output stream.   
[PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708) | [append](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__append-java_lang_CharSequence-)​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) csq) |  Appends the specified character sequence to this output stream.   
[PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708) | [append](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__append-java_lang_CharSequence-int-int-)​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) csq, int start, int end) |  Appends a subsequence of the specified character sequence to this output stream.   
boolean | [checkError](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__checkError--)​() |  Flushes the stream and checks its error state.   
protected void | [clearError](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__clearError--)​() |  Clears the internal error state of this stream.   
void | [close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__close--)​() |  Closes the stream.   
void | [flush](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__flush--)​() |  Flushes the stream.   
[PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708) | [format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__format-java_lang_String-java_lang_Object___-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) format, [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)... args) |  Writes a formatted string to this output stream using the specified format string and arguments.   
[PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708) | [format](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__format-java_util_Locale-java_lang_String-java_lang_Object___-)​([Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) l, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) format, [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)... args) |  Writes a formatted string to this output stream using the specified format string and arguments.   
void | [print](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-boolean-)​(boolean b) |  Prints a boolean value.   
void | [print](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-char-)​(char c) |  Prints a character.   
void | [print](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-char:A-)​(char[] s) |  Prints an array of characters.   
void | [print](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-double-)​(double d) |  Prints a double-precision floating-point number.   
void | [print](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-float-)​(float f) |  Prints a floating-point number.   
void | [print](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-int-)​(int i) |  Prints an integer.   
void | [print](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-long-)​(long l) |  Prints a long integer.   
void | [print](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-java_lang_Object-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) obj) |  Prints an object.   
void | [print](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) s) |  Prints a string.   
[PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708) | [printf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__printf-java_lang_String-java_lang_Object___-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) format, [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)... args) |  A convenience method to write a formatted string to this output stream using the specified format string and arguments.   
[PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708) | [printf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__printf-java_util_Locale-java_lang_String-java_lang_Object___-)​([Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) l, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) format, [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)... args) |  A convenience method to write a formatted string to this output stream using the specified format string and arguments.   
void | [println](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println--)​() |  Terminates the current line by writing the line separator string.   
void | [println](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println-boolean-)​(boolean x) |  Prints a boolean and then terminate the line.   
void | [println](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println-char-)​(char x) |  Prints a character and then terminate the line.   
void | [println](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println-char:A-)​(char[] x) |  Prints an array of characters and then terminate the line.   
void | [println](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println-double-)​(double x) |  Prints a double and then terminate the line.   
void | [println](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println-float-)​(float x) |  Prints a float and then terminate the line.   
void | [println](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println-int-)​(int x) |  Prints an integer and then terminate the line.   
void | [println](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println-long-)​(long x) |  Prints a long and then terminate the line.   
void | [println](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println-java_lang_Object-)​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) x) |  Prints an Object and then terminate the line.   
void | [println](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) x) |  Prints a String and then terminate the line.   
protected void | [setError](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__setError--)​() |  Sets the error state of the stream to true.   
void | [write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__write-byte:A-int-int-)​(byte[] buf, int off, int len) |  Writes len bytes from the specified byte array starting at offset off to this stream.   
void | [write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__write-int-)​(int b) |  Writes the specified byte to this stream.   
  
Methods inherited from class java.io.[FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)  
---  
[write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__write-byte:A-)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]PrintStream

public PrintStream​([OutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403) out)

Creates a new print stream. This stream will not flush automatically. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
out  |  The output stream to which values and objects will be printed  
  
**See Also:**

[PrintWriter(java.io.OutputStream)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printwriter-0000001054518448#ZH-CN_TOPIC_0000001054518448__PrintWriter-java_io_OutputStream-)

#### [h2]PrintStream

public PrintStream​([OutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403) out, boolean autoFlush)

Creates a new print stream. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
out  |  The output stream to which values and objects will be printed  
autoFlush  |  A boolean; if true, the output buffer will be flushed whenever a byte array is written, one of the println methods is invoked, or a newline character or byte ('\n') is written  
  
**See Also:**

[PrintWriter(java.io.OutputStream, boolean)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printwriter-0000001054518448#ZH-CN_TOPIC_0000001054518448__PrintWriter-java_io_OutputStream-boolean-)

#### [h2]PrintStream

public PrintStream​([OutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403) out, boolean autoFlush, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) encoding) throws [UnsupportedEncodingException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedencodingexception-0000001054558441)

Creates a new print stream. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
out  |  The output stream to which values and objects will be printed  
autoFlush  |  A boolean; if true, the output buffer will be flushed whenever a byte array is written, one of the println methods is invoked, or a newline character or byte ('\n') is written  
encoding  |  The name of a supported [ character encoding](https://developer.harmonyos.com/cn/docs/documentation/doc-references/overview-0000001054119698#ZH-CN_TOPIC_0000001054119698__charenc)  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[UnsupportedEncodingException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedencodingexception-0000001054558441) |  If the named encoding is not supported  
  
**Since:**

1.4

#### [h2]PrintStream

public PrintStream​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) fileName) throws [FileNotFoundException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filenotfoundexception-0000001054558439)

Creates a new print stream, without automatic line flushing, with the specified file name. This convenience constructor creates the necessary intermediate [OutputStreamWriter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstreamwriter-0000001054838388), which will encode characters using the [default charset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charset-0000001054678500#ZH-CN_TOPIC_0000001054678500__defaultCharset--) for this instance of the Java virtual machine. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
fileName  |  The name of the file to use as the destination of this print stream. If the file exists, then it will be truncated to zero size; otherwise, a new file will be created. The output will be written to the file and is buffered.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[FileNotFoundException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filenotfoundexception-0000001054558439) |  If the given file object does not denote an existing, writable regular file and a new regular file of that name cannot be created, or if some other error occurs while opening or creating the file  
[SecurityException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securityexception-0000001054678454) |  If a security manager is present and [SecurityManager#checkWrite](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securitymanager-0000001054119775#ZH-CN_TOPIC_0000001054119775__checkWrite-java_io_FileDescriptor-) denies write access to the file  
  
**Since:**

1.5

#### [h2]PrintStream

public PrintStream​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) fileName, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) csn) throws [FileNotFoundException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filenotfoundexception-0000001054558439), [UnsupportedEncodingException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedencodingexception-0000001054558441)

Creates a new print stream, without automatic line flushing, with the specified file name and charset. This convenience constructor creates the necessary intermediate [OutputStreamWriter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstreamwriter-0000001054838388), which will encode characters using the provided charset. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
fileName  |  The name of the file to use as the destination of this print stream. If the file exists, then it will be truncated to zero size; otherwise, a new file will be created. The output will be written to the file and is buffered.  
csn  |  The name of a supported [charset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charset-0000001054678500)  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[FileNotFoundException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filenotfoundexception-0000001054558439) |  If the given file object does not denote an existing, writable regular file and a new regular file of that name cannot be created, or if some other error occurs while opening or creating the file  
[SecurityException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securityexception-0000001054678454) |  If a security manager is present and [SecurityManager#checkWrite](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securitymanager-0000001054119775#ZH-CN_TOPIC_0000001054119775__checkWrite-java_io_FileDescriptor-) denies write access to the file  
[UnsupportedEncodingException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedencodingexception-0000001054558441) |  If the named charset is not supported  
  
**Since:**

1.5

#### [h2]PrintStream

public PrintStream​([File](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759) file) throws [FileNotFoundException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filenotfoundexception-0000001054558439)

Creates a new print stream, without automatic line flushing, with the specified file. This convenience constructor creates the necessary intermediate [OutputStreamWriter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstreamwriter-0000001054838388), which will encode characters using the [default charset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charset-0000001054678500#ZH-CN_TOPIC_0000001054678500__defaultCharset--) for this instance of the Java virtual machine. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
file  |  The file to use as the destination of this print stream. If the file exists, then it will be truncated to zero size; otherwise, a new file will be created. The output will be written to the file and is buffered.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[FileNotFoundException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filenotfoundexception-0000001054558439) |  If the given file object does not denote an existing, writable regular file and a new regular file of that name cannot be created, or if some other error occurs while opening or creating the file  
[SecurityException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securityexception-0000001054678454) |  If a security manager is present and [SecurityManager#checkWrite](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securitymanager-0000001054119775#ZH-CN_TOPIC_0000001054119775__checkWrite-java_io_FileDescriptor-) denies write access to the file  
  
**Since:**

1.5

#### [h2]PrintStream

public PrintStream​([File](https://developer.harmonyos.com/cn/docs/documentation/doc-references/file-0000001054119759) file, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) csn) throws [FileNotFoundException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filenotfoundexception-0000001054558439), [UnsupportedEncodingException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedencodingexception-0000001054558441)

Creates a new print stream, without automatic line flushing, with the specified file and charset. This convenience constructor creates the necessary intermediate [OutputStreamWriter](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstreamwriter-0000001054838388), which will encode characters using the provided charset. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
file  |  The file to use as the destination of this print stream. If the file exists, then it will be truncated to zero size; otherwise, a new file will be created. The output will be written to the file and is buffered.  
csn  |  The name of a supported [charset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charset-0000001054678500)  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[FileNotFoundException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filenotfoundexception-0000001054558439) |  If the given file object does not denote an existing, writable regular file and a new regular file of that name cannot be created, or if some other error occurs while opening or creating the file  
[SecurityException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securityexception-0000001054678454) |  If a security manager is present and [SecurityManager#checkWrite](https://developer.harmonyos.com/cn/docs/documentation/doc-references/securitymanager-0000001054119775#ZH-CN_TOPIC_0000001054119775__checkWrite-java_io_FileDescriptor-) denies write access to the file  
[UnsupportedEncodingException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/unsupportedencodingexception-0000001054558441) |  If the named charset is not supported  
  
**Since:**

1.5

#### Method Detail

#### [h2]flush

public void flush​()

Flushes the stream. This is done by writing any buffered output bytes to the underlying output stream and then flushing that stream. 

**Specified by:**

[flush](https://developer.harmonyos.com/cn/docs/documentation/doc-references/flushable-0000001054358407#ZH-CN_TOPIC_0000001054358407__flush--) in interface [Flushable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/flushable-0000001054358407)

**Overrides:**

[flush](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__flush--) in class [FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)

**See Also:**

[OutputStream.flush()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403#ZH-CN_TOPIC_0000001054678403__flush--)

#### [h2]close

public void close​()

Closes the stream. This is done by flushing the stream and then closing the underlying output stream. 

**Specified by:**

[close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/autocloseable-0000001054518454#ZH-CN_TOPIC_0000001054518454__close--) in interface [AutoCloseable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/autocloseable-0000001054518454)

**Specified by:**

[close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closeable-0000001054119755#ZH-CN_TOPIC_0000001054119755__close--) in interface [Closeable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/closeable-0000001054119755)

**Overrides:**

[close](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__close--) in class [FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)

**See Also:**

[OutputStream.close()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/outputstream-0000001054678403#ZH-CN_TOPIC_0000001054678403__close--)

#### [h2]checkError

public boolean checkError​()

Flushes the stream and checks its error state. The internal error state is set to true when the underlying output stream throws an IOException other than InterruptedIOException, and when the setError method is invoked. If an operation on the underlying output stream throws an InterruptedIOException, then the PrintStream converts the exception back into an interrupt by doing: 
    
    Thread.currentThread().interrupt();
     

or the equivalent. 

**Returns:**

true if and only if this stream has encountered an IOException other than InterruptedIOException, or the setError method has been invoked

#### [h2]setError

protected void setError​()

Sets the error state of the stream to true. 

This method will cause subsequent invocations of [checkError()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__checkError--) to return true until [clearError()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__clearError--) is invoked.

**Since:**

JDK1.1

#### [h2]clearError

protected void clearError​()

Clears the internal error state of this stream. 

This method will cause subsequent invocations of [checkError()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__checkError--) to return false until another write operation fails and invokes [setError()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__setError--).

**Since:**

1.6

#### [h2]write

public void write​(int b)

Writes the specified byte to this stream. If the byte is a newline and automatic flushing is enabled then the flush method will be invoked. 

Note that the byte is written as given; to write a character that will be translated according to the platform's default character encoding, use the print(char) or println(char) methods.

**Overrides:**

[write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__write-int-) in class [FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
b  |  The byte to be written  
  
**See Also:**

[print(char)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-char-), [println(char)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println-char-)

#### [h2]write

public void write​(byte[] buf, int off, int len)

Writes len bytes from the specified byte array starting at offset off to this stream. If automatic flushing is enabled then the flush method will be invoked. 

Note that the bytes will be written as given; to write characters that will be translated according to the platform's default character encoding, use the print(char) or println(char) methods.

**Overrides:**

[write](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__write-byte:A-int-int-) in class [FilterOutputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
buf  |  A byte array  
off  |  Offset from which to start taking bytes  
len  |  Number of bytes to write  
  
**See Also:**

[FilterOutputStream.write(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/filteroutputstream-0000001054238431#ZH-CN_TOPIC_0000001054238431__write-int-)

#### [h2]print

public void print​(boolean b)

Prints a boolean value. The string produced by [String.valueOf(boolean)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460#ZH-CN_TOPIC_0000001054518460__valueOf-boolean-) is translated into bytes according to the platform's default character encoding, and these bytes are written in exactly the manner of the [write(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__write-int-) method. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
b  |  The boolean to be printed  
  
#### [h2]print

public void print​(char c)

Prints a character. The character is translated into one or more bytes according to the platform's default character encoding, and these bytes are written in exactly the manner of the [write(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__write-int-) method. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
c  |  The char to be printed  
  
#### [h2]print

public void print​(int i)

Prints an integer. The string produced by [String.valueOf(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460#ZH-CN_TOPIC_0000001054518460__valueOf-int-) is translated into bytes according to the platform's default character encoding, and these bytes are written in exactly the manner of the [write(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__write-int-) method. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
i  |  The int to be printed  
  
**See Also:**

[Integer.toString(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/integer-0000001054119702#ZH-CN_TOPIC_0000001054119702__toString-int-)

#### [h2]print

public void print​(long l)

Prints a long integer. The string produced by [String.valueOf(long)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460#ZH-CN_TOPIC_0000001054518460__valueOf-long-) is translated into bytes according to the platform's default character encoding, and these bytes are written in exactly the manner of the [write(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__write-int-) method. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
l  |  The long to be printed  
  
**See Also:**

[Long.toString(long)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/long-0000001054439731#ZH-CN_TOPIC_0000001054439731__toString-long-)

#### [h2]print

public void print​(float f)

Prints a floating-point number. The string produced by [String.valueOf(float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460#ZH-CN_TOPIC_0000001054518460__valueOf-float-) is translated into bytes according to the platform's default character encoding, and these bytes are written in exactly the manner of the [write(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__write-int-) method. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
f  |  The float to be printed  
  
**See Also:**

[Float.toString(float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/float-0000001054358432#ZH-CN_TOPIC_0000001054358432__toString-float-)

#### [h2]print

public void print​(double d)

Prints a double-precision floating-point number. The string produced by [String.valueOf(double)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460#ZH-CN_TOPIC_0000001054518460__valueOf-double-) is translated into bytes according to the platform's default character encoding, and these bytes are written in exactly the manner of the [write(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__write-int-) method. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
d  |  The double to be printed  
  
**See Also:**

[Double.toString(double)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/double-0000001054678413#ZH-CN_TOPIC_0000001054678413__toString-double-)

#### [h2]print

public void print​(char[] s)

Prints an array of characters. The characters are converted into bytes according to the platform's default character encoding, and these bytes are written in exactly the manner of the [write(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__write-int-) method. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
s  |  The array of chars to be printed  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  If s is null  
  
#### [h2]print

public void print​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) s)

Prints a string. If the argument is null then the string "null" is printed. Otherwise, the string's characters are converted into bytes according to the platform's default character encoding, and these bytes are written in exactly the manner of the [write(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__write-int-) method. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
s  |  The String to be printed  
  
#### [h2]print

public void print​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) obj)

Prints an object. The string produced by the [String.valueOf(Object)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460#ZH-CN_TOPIC_0000001054518460__valueOf-java_lang_Object-) method is translated into bytes according to the platform's default character encoding, and these bytes are written in exactly the manner of the [write(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__write-int-) method. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
obj  |  The Object to be printed  
  
**See Also:**

[Object.toString()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--)

#### [h2]println

public void println​()

Terminates the current line by writing the line separator string. The line separator string is defined by the system property line.separator, and is not necessarily a single newline character ('\n'). 

#### [h2]println

public void println​(boolean x)

Prints a boolean and then terminate the line. This method behaves as though it invokes [print(boolean)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-boolean-) and then [println()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println--). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
x  |  The boolean to be printed  
  
#### [h2]println

public void println​(char x)

Prints a character and then terminate the line. This method behaves as though it invokes [print(char)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-char-) and then [println()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println--). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
x  |  The char to be printed.  
  
#### [h2]println

public void println​(int x)

Prints an integer and then terminate the line. This method behaves as though it invokes [print(int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-int-) and then [println()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println--). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
x  |  The int to be printed.  
  
#### [h2]println

public void println​(long x)

Prints a long and then terminate the line. This method behaves as though it invokes [print(long)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-long-) and then [println()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println--). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
x  |  a The long to be printed.  
  
#### [h2]println

public void println​(float x)

Prints a float and then terminate the line. This method behaves as though it invokes [print(float)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-float-) and then [println()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println--). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
x  |  The float to be printed.  
  
#### [h2]println

public void println​(double x)

Prints a double and then terminate the line. This method behaves as though it invokes [print(double)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-double-) and then [println()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println--). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
x  |  The double to be printed.  
  
#### [h2]println

public void println​(char[] x)

Prints an array of characters and then terminate the line. This method behaves as though it invokes [print(char[])](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-char:A-) and then [println()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println--). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
x  |  an array of chars to print.  
  
#### [h2]println

public void println​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) x)

Prints a String and then terminate the line. This method behaves as though it invokes [print(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-java_lang_String-) and then [println()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println--). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
x  |  The String to be printed.  
  
#### [h2]println

public void println​([Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) x)

Prints an Object and then terminate the line. This method calls at first String.valueOf(x) to get the printed object's string value, then behaves as though it invokes [print(java.lang.String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__print-java_lang_String-) and then [println()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708#ZH-CN_TOPIC_0000001054199708__println--). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
x  |  The Object to be printed.  
  
#### [h2]printf

public [PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708) printf​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) format, [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)... args)

A convenience method to write a formatted string to this output stream using the specified format string and arguments. 

An invocation of this method of the form out.printf(format, args) behaves in exactly the same way as the invocation 
    
    out.format(format, args) 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
format  |  A format string as described in [Format string syntax](https://developer.harmonyos.com/cn/docs/documentation/doc-references/formatter-0000001054439879#ZH-CN_TOPIC_0000001054439879__syntax)  
args  |  Arguments referenced by the format specifiers in the format string. If there are more arguments than format specifiers, the extra arguments are ignored. The number of arguments is variable and may be zero. The maximum number of arguments is limited by the maximum dimension of a Java array as defined by 《The Java™ Virtual Machine Specification》. The behaviour on a null argument depends on the [conversion](https://developer.harmonyos.com/cn/docs/documentation/doc-references/formatter-0000001054439879#ZH-CN_TOPIC_0000001054439879__syntax).  
  
**Returns:**

This output stream

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalFormatException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalformatexception-0000001054439889) |  If a format string contains an illegal syntax, a format specifier that is incompatible with the given arguments, insufficient arguments given the format string, or other illegal conditions. For specification of all possible formatting errors, see the [Details](https://developer.harmonyos.com/cn/docs/documentation/doc-references/formatter-0000001054439879#ZH-CN_TOPIC_0000001054439879__detail) section of the formatter class specification.  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  If the format is null  
  
**Since:**

1.5

#### [h2]printf

public [PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708) printf​([Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) l, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) format, [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)... args)

A convenience method to write a formatted string to this output stream using the specified format string and arguments. 

An invocation of this method of the form out.printf(l, format, args) behaves in exactly the same way as the invocation 
    
    out.format(l, format, args) 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
l  |  The [locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) to apply during formatting. If l is null then no localization is applied.  
format  |  A format string as described in [Format string syntax](https://developer.harmonyos.com/cn/docs/documentation/doc-references/formatter-0000001054439879#ZH-CN_TOPIC_0000001054439879__syntax)  
args  |  Arguments referenced by the format specifiers in the format string. If there are more arguments than format specifiers, the extra arguments are ignored. The number of arguments is variable and may be zero. The maximum number of arguments is limited by the maximum dimension of a Java array as defined by 《The Java™ Virtual Machine Specification》. The behaviour on a null argument depends on the [conversion](https://developer.harmonyos.com/cn/docs/documentation/doc-references/formatter-0000001054439879#ZH-CN_TOPIC_0000001054439879__syntax).  
  
**Returns:**

This output stream

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalFormatException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalformatexception-0000001054439889) |  If a format string contains an illegal syntax, a format specifier that is incompatible with the given arguments, insufficient arguments given the format string, or other illegal conditions. For specification of all possible formatting errors, see the [Details](https://developer.harmonyos.com/cn/docs/documentation/doc-references/formatter-0000001054439879#ZH-CN_TOPIC_0000001054439879__detail) section of the formatter class specification.  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  If the format is null  
  
**Since:**

1.5

#### [h2]format

public [PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708) format​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) format, [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)... args)

Writes a formatted string to this output stream using the specified format string and arguments. 

The locale always used is the one returned by [Locale.getDefault()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852#ZH-CN_TOPIC_0000001054119852__getDefault--), regardless of any previous invocations of other formatting methods on this object.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
format  |  A format string as described in [Format string syntax](https://developer.harmonyos.com/cn/docs/documentation/doc-references/formatter-0000001054439879#ZH-CN_TOPIC_0000001054439879__syntax)  
args  |  Arguments referenced by the format specifiers in the format string. If there are more arguments than format specifiers, the extra arguments are ignored. The number of arguments is variable and may be zero. The maximum number of arguments is limited by the maximum dimension of a Java array as defined by 《The Java™ Virtual Machine Specification》. The behaviour on a null argument depends on the [conversion](https://developer.harmonyos.com/cn/docs/documentation/doc-references/formatter-0000001054439879#ZH-CN_TOPIC_0000001054439879__syntax).  
  
**Returns:**

This output stream

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalFormatException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalformatexception-0000001054439889) |  If a format string contains an illegal syntax, a format specifier that is incompatible with the given arguments, insufficient arguments given the format string, or other illegal conditions. For specification of all possible formatting errors, see the [Details](https://developer.harmonyos.com/cn/docs/documentation/doc-references/formatter-0000001054439879#ZH-CN_TOPIC_0000001054439879__detail) section of the formatter class specification.  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  If the format is null  
  
**Since:**

1.5

#### [h2]format

public [PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708) format​([Locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) l, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) format, [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)... args)

Writes a formatted string to this output stream using the specified format string and arguments. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
l  |  The [locale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/locale-0000001054119852) to apply during formatting. If l is null then no localization is applied.  
format  |  A format string as described in [Format string syntax](https://developer.harmonyos.com/cn/docs/documentation/doc-references/formatter-0000001054439879#ZH-CN_TOPIC_0000001054439879__syntax)  
args  |  Arguments referenced by the format specifiers in the format string. If there are more arguments than format specifiers, the extra arguments are ignored. The number of arguments is variable and may be zero. The maximum number of arguments is limited by the maximum dimension of a Java array as defined by 《The Java™ Virtual Machine Specification》. The behaviour on a null argument depends on the [conversion](https://developer.harmonyos.com/cn/docs/documentation/doc-references/formatter-0000001054439879#ZH-CN_TOPIC_0000001054439879__syntax).  
  
**Returns:**

This output stream

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalFormatException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalformatexception-0000001054439889) |  If a format string contains an illegal syntax, a format specifier that is incompatible with the given arguments, insufficient arguments given the format string, or other illegal conditions. For specification of all possible formatting errors, see the [Details](https://developer.harmonyos.com/cn/docs/documentation/doc-references/formatter-0000001054439879#ZH-CN_TOPIC_0000001054439879__detail) section of the formatter class specification.  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  If the format is null  
  
**Since:**

1.5

#### [h2]append

public [PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708) append​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) csq)

Appends the specified character sequence to this output stream. 

An invocation of this method of the form out.append(csq) behaves in exactly the same way as the invocation 
    
    out.print(csq.toString()) 

Depending on the specification of toString for the character sequence csq, the entire sequence may not be appended. For instance, invoking then toString method of a character buffer will return a subsequence whose content depends upon the buffer's position and limit.

**Specified by:**

[append](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714#ZH-CN_TOPIC_0000001054199714__append-java_lang_CharSequence-) in interface [Appendable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
csq  |  The character sequence to append. If csq is null, then the four characters "null" are appended to this output stream.  
  
**Returns:**

This output stream

**Since:**

1.5

#### [h2]append

public [PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708) append​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) csq, int start, int end)

Appends a subsequence of the specified character sequence to this output stream. 

An invocation of this method of the form out.append(csq, start, end) when csq is not null, behaves in exactly the same way as the invocation 
    
    out.print(csq.subSequence(start, end).toString()) 

**Specified by:**

[append](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714#ZH-CN_TOPIC_0000001054199714__append-java_lang_CharSequence-int-int-) in interface [Appendable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
csq  |  The character sequence from which a subsequence will be appended. If csq is null, then characters will be appended as if csq contained the four characters "null".  
start  |  The index of the first character in the subsequence  
end  |  The index of the character following the last character in the subsequence  
  
**Returns:**

This output stream

**Throws:**

Throw Name | Throw Description  
---|---  
[IndexOutOfBoundsException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/indexoutofboundsexception-0000001054558453) |  If start or end are negative, start is greater than end, or end is greater than csq.length()  
  
**Since:**

1.5

#### [h2]append

public [PrintStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/printstream-0000001054199708) append​(char c)

Appends the specified character to this output stream. 

An invocation of this method of the form out.append(c) behaves in exactly the same way as the invocation 
    
    out.print(c) 

**Specified by:**

[append](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714#ZH-CN_TOPIC_0000001054199714__append-char-) in interface [Appendable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/appendable-0000001054199714)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
c  |  The 16-bit character to append  
  
**Returns:**

This output stream

**Since:**

1.5
