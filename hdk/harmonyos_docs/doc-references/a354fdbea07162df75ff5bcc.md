---
name: document/cn/doc-references/propertyresourcebundle-0000001054439883
title: PropertyResourceBundle
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/propertyresourcebundle-0000001054439883
source: portal
---

# PropertyResourceBundle  
  
[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.util.ResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610) |---|---java.util.PropertyResourceBundle
    
    public class PropertyResourceBundle
    extends [ResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610)  
  
---  
PropertyResourceBundle is a concrete subclass of ResourceBundle that manages resources for a locale using a set of static strings from a property file. See [ResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610) for more information about resource bundles. 

Unlike other types of resource bundle, you don't subclass PropertyResourceBundle. Instead, you supply properties files containing the resource data. ResourceBundle.getBundle will automatically look for the appropriate properties file and create a PropertyResourceBundle that refers to it. See [ResourceBundle#getBundle(java.lang.String, java.util.Locale, java.lang.ClassLoader)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__getBundle-java_lang_String-java_util_Locale-java_lang_ClassLoader-) for a complete description of the search and instantiation strategy. 

The following _example_ shows a member of a resource bundle family with the base name "MyResources". The text defines the bundle "MyResources_de", the German member of the bundle family. This member is based on PropertyResourceBundle, and the text therefore is the content of the file "MyResources_de.properties" (a related [example](https://developer.harmonyos.com/cn/docs/documentation/doc-references/listresourcebundle-0000001054119923#ZH-CN_TOPIC_0000001054119923__sample) shows how you can add bundles to this family that are implemented as subclasses of ListResourceBundle). The keys in this example are of the form "s1" etc. The actual keys are entirely up to your choice, so long as they are the same as the keys you use in your program to retrieve the objects from the bundle. Keys are case-sensitive. 
    
    # MessageFormat pattern
     s1=Die Platte \"{1}\" enthält {0}.
    
     # location of {0} in pattern
     s2=1
    
     # sample disk name
     s3=Meine Platte
    
     # first ChoiceFormat choice
     s4=keine Dateien
    
     # second ChoiceFormat choice
     s5=eine Datei
    
     # third ChoiceFormat choice
     s6={0,number} Dateien
    
     # sample date
     s7=3. März 1996
     

The implementation of a PropertyResourceBundle subclass must be thread-safe if it's simultaneously used by multiple threads. The default implementations of the non-abstract methods in this class are thread-safe. 

**Note:** PropertyResourceBundle can be constructed either from an InputStream or a Reader, which represents a property file. Constructing a PropertyResourceBundle instance from an InputStream requires that the input stream be encoded in ISO-8859-1. In that case, characters that cannot be represented in ISO-8859-1 encoding must be represented by Unicode Escapes as defined in section 3.3 of 《The Java™ Language Specification》 whereas the other constructor which takes a Reader does not have that limitation.

**Since:**

JDK1.1

**See Also:**

[ResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610), [ListResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/listresourcebundle-0000001054119923), [Properties](https://developer.harmonyos.com/cn/docs/documentation/doc-references/properties-0000001054119925)

#### Nested Class Summary

Nested classes/interfaces inherited from class java.util.[ResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610)  
---  
[ResourceBundle.Control](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle_control-0000001054678598)  
  
#### Field Summary

Fields inherited from class java.util.[ResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610)  
---  
[parent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__parent)  
  
#### Constructor Summary

Constructor | Description  
---|---  
[PropertyResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/propertyresourcebundle-0000001054439883#ZH-CN_TOPIC_0000001054439883__PropertyResourceBundle-java_io_InputStream-)​([InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420) stream) |  Creates a property resource bundle from an [InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420).   
[PropertyResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/propertyresourcebundle-0000001054439883#ZH-CN_TOPIC_0000001054439883__PropertyResourceBundle-java_io_Reader-)​([Reader](https://developer.harmonyos.com/cn/docs/documentation/doc-references/reader-0000001054238435) reader) |  Creates a property resource bundle from a [Reader](https://developer.harmonyos.com/cn/docs/documentation/doc-references/reader-0000001054238435).   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[Enumeration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enumeration-0000001054678553)<[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)> | [getKeys](https://developer.harmonyos.com/cn/docs/documentation/doc-references/propertyresourcebundle-0000001054439883#ZH-CN_TOPIC_0000001054439883__getKeys--)​() |  Returns an Enumeration of the keys contained in this ResourceBundle and its parent bundles.   
[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) | [handleGetObject](https://developer.harmonyos.com/cn/docs/documentation/doc-references/propertyresourcebundle-0000001054439883#ZH-CN_TOPIC_0000001054439883__handleGetObject-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) key) |  Gets an object for the given key from this resource bundle.   
protected [Set](https://developer.harmonyos.com/cn/docs/documentation/doc-references/set-0000001054439873)<[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)> | [handleKeySet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/propertyresourcebundle-0000001054439883#ZH-CN_TOPIC_0000001054439883__handleKeySet--)​() |  Returns a Set of the keys contained only in this ResourceBundle.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
Methods inherited from class java.util.[ResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610)  
---  
[clearCache](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__clearCache--), [clearCache](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__clearCache-java_lang_ClassLoader-), [containsKey](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__containsKey-java_lang_String-), [getBaseBundleName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__getBaseBundleName--), [getBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__getBundle-java_lang_String-), [getBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__getBundle-java_lang_String-java_util_Locale-), [getBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__getBundle-java_lang_String-java_util_Locale-java_lang_ClassLoader-), [getBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__getBundle-java_lang_String-java_util_Locale-java_lang_ClassLoader-java_util_ResourceBundle_Control-), [getBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__getBundle-java_lang_String-java_util_Locale-java_util_ResourceBundle_Control-), [getBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__getBundle-java_lang_String-java_util_ResourceBundle_Control-), [getLocale](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__getLocale--), [getObject](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__getObject-java_lang_String-), [getString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__getString-java_lang_String-), [getStringArray](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__getStringArray-java_lang_String-), [keySet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__keySet--), [setParent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__setParent-java_util_ResourceBundle-)  
  
#### Constructor Detail

#### [h2]PropertyResourceBundle

public PropertyResourceBundle​([InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420) stream) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Creates a property resource bundle from an [InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420). The property file read with this constructor must be encoded in ISO-8859-1. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
stream  |  an InputStream that represents a property file to read from.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  if an I/O error occurs  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if stream is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if stream contains a malformed Unicode escape sequence.  
  
#### [h2]PropertyResourceBundle

public PropertyResourceBundle​([Reader](https://developer.harmonyos.com/cn/docs/documentation/doc-references/reader-0000001054238435) reader) throws [IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426)

Creates a property resource bundle from a [Reader](https://developer.harmonyos.com/cn/docs/documentation/doc-references/reader-0000001054238435). Unlike the constructor [PropertyResourceBundle(InputStream)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/propertyresourcebundle-0000001054439883#ZH-CN_TOPIC_0000001054439883__PropertyResourceBundle-java_io_InputStream-), there is no limitation as to the encoding of the input property file. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
reader  |  a Reader that represents a property file to read from.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IOException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/ioexception-0000001054358426) |  if an I/O error occurs  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if reader is null  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if a malformed Unicode escape sequence appears from reader.  
  
**Since:**

1.6

#### Method Detail

#### [h2]handleGetObject

public [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) handleGetObject​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) key)

Description copied from class: [ResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__handleGetObject-java_lang_String-)

Gets an object for the given key from this resource bundle. Returns null if this resource bundle does not contain an object for the given key. 

**Specified by:**

[handleGetObject](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__handleGetObject-java_lang_String-) in class [ResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610)

**Parameters:**

Parameter Name | Parameter Description  
---|---  
key  |  the key for the desired object  
  
**Returns:**

the object for the given key, or null

#### [h2]getKeys

public [Enumeration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enumeration-0000001054678553)<[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)> getKeys​()

Returns an Enumeration of the keys contained in this ResourceBundle and its parent bundles. 

**Specified by:**

[getKeys](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__getKeys--) in class [ResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610)

**Returns:**

an Enumeration of the keys contained in this ResourceBundle and its parent bundles.

**See Also:**

[ResourceBundle.keySet()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__keySet--)

#### [h2]handleKeySet

protected [Set](https://developer.harmonyos.com/cn/docs/documentation/doc-references/set-0000001054439873)<[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)> handleKeySet​()

Returns a Set of the keys contained only in this ResourceBundle. 

**Overrides:**

[handleKeySet](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__handleKeySet--) in class [ResourceBundle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610)

**Returns:**

a Set of the keys contained only in this ResourceBundle

**Since:**

1.6

**See Also:**

[ResourceBundle.keySet()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourcebundle-0000001054518610#ZH-CN_TOPIC_0000001054518610__keySet--)
