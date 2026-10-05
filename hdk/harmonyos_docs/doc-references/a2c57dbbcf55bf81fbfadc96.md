---
name: document/cn/doc-references/resourceresponse-0000001091482860
title: ResourceResponse
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/resourceresponse-0000001091482860
source: portal
---

# ResourceResponse

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.agp.components.webengine.ResourceResponse
    
    public class ResourceResponse
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Provides a response when the WebView requests a certain resource.

**Since:**

5

#### Constructor Summary

Constructor | Description  
---|---  
[ResourceResponse](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourceresponse-0000001091482860#ZH-CN_TOPIC_0000001091482860__ResourceResponse-java_lang_String-java_io_InputStream-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) mimeType, [InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420) data, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) charset) |  A constructor used to create a ResourceResponse instance.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getCharset](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourceresponse-0000001091482860#ZH-CN_TOPIC_0000001091482860__getCharset--)​() |  Obtains the encoding for the data of the resource response.   
[InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420) | [getData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourceresponse-0000001091482860#ZH-CN_TOPIC_0000001091482860__getData--)​() |  Obtains the data of the resource response.   
[Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460),[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)> | [getHeaders](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourceresponse-0000001091482860#ZH-CN_TOPIC_0000001091482860__getHeaders--)​() |  Obtains HTTP header information of the resource response.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getMimeType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourceresponse-0000001091482860#ZH-CN_TOPIC_0000001091482860__getMimeType--)​() |  Obtains the MIME type of the resource response.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getReason](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourceresponse-0000001091482860#ZH-CN_TOPIC_0000001091482860__getReason--)​() |  Obtains the reason for the status of the resource response.   
int | [getStatus](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourceresponse-0000001091482860#ZH-CN_TOPIC_0000001091482860__getStatus--)​() |  Obtains the status of the resource response.   
void | [setData](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourceresponse-0000001091482860#ZH-CN_TOPIC_0000001091482860__setData-java_io_InputStream-java_lang_String-)​([InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420) data, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) charset) |  Sets the data of the resource response and the encoding.   
void | [setHeaders](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourceresponse-0000001091482860#ZH-CN_TOPIC_0000001091482860__setHeaders-java_util_Map-)​([Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460),[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)> headers) |  Sets HTTP header information for the resource response.   
void | [setMimeType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourceresponse-0000001091482860#ZH-CN_TOPIC_0000001091482860__setMimeType-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) mimeType) |  Sets the MIME type for the resource response.   
void | [setStatusAndReason](https://developer.harmonyos.com/cn/docs/documentation/doc-references/resourceresponse-0000001091482860#ZH-CN_TOPIC_0000001091482860__setStatusAndReason-int-java_lang_String-)​(int status, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) reason) |  Sets the status of the resource response and the reason.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]ResourceResponse

public ResourceResponse​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) mimeType, [InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420) data, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) charset)

A constructor used to create a ResourceResponse instance. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
mimeType  |  Indicates the MIME type of the resource response.  
data  |  Indicates the data of the resource response.  
charset  |  Indicates the encoding for the data of the resource response.  
  
**Since:**

5

#### Method Detail

#### [h2]getHeaders

public [Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460),[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)> getHeaders​()

Obtains HTTP header information of the resource response. 

**Returns:**

Returns HTTP header information of the resource response.

**Since:**

5

#### [h2]setHeaders

public void setHeaders​([Map](https://developer.harmonyos.com/cn/docs/documentation/doc-references/map-0000001054199858)<[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460),[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)> headers)

Sets HTTP header information for the resource response. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
headers  |  Indicates the HTTP header information.  
  
**Since:**

5

#### [h2]getData

public [InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420) getData​()

Obtains the data of the resource response. 

**Returns:**

Returns data of the resource response.

**Since:**

5

#### [h2]getCharset

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getCharset​()

Obtains the encoding for the data of the resource response. 

**Returns:**

Returns the encoding for the data of the resource response.

**Since:**

5

#### [h2]setData

public void setData​([InputStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/inputstream-0000001054358420) data, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) charset)

Sets the data of the resource response and the encoding. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
data  |  Indicates the data of the resource response.  
charset  |  Indicates the encoding for the data of the resource response.  
  
**Since:**

5

#### [h2]getMimeType

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getMimeType​()

Obtains the MIME type of the resource response. 

**Returns:**

Returns the MIME type.

**Since:**

5

#### [h2]setMimeType

public void setMimeType​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) mimeType)

Sets the MIME type for the resource response. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
mimeType  |  Indicates the MIME type of the resource response.  
  
**Since:**

5

#### [h2]getStatus

public int getStatus​()

Obtains the status of the resource response. 

**Returns:**

Returns the status code, which is a number in the range of [100, 299] or [400, 599].

**Since:**

5

#### [h2]getReason

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getReason​()

Obtains the reason for the status of the resource response. 

**Returns:**

Returns the reason for the status of the resource response.

**Since:**

5

#### [h2]setStatusAndReason

public void setStatusAndReason​(int status, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) reason)

Sets the status of the resource response and the reason. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
status  |  Indicates the status code, which is a number in the range of [100, 299] or [400, 599].  
reason  |  Indicates the reason for the status of the resource response.  
  
**Since:**

5
