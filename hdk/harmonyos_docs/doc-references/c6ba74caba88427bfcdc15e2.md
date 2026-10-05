---
name: document/cn/doc-references/cookiestore-0000001091611340
title: CookieStore
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/cookiestore-0000001091611340
source: portal
---

# CookieStore

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.agp.components.webengine.CookieStore
    
    public abstract class CookieStore
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Manages cookies for WebView instances.

**Since:**

5

#### Constructor Summary

Constructor | Description  
---|---  
[CookieStore](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cookiestore-0000001091611340#ZH-CN_TOPIC_0000001091611340__CookieStore--)​() |     
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [getCookie](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cookiestore-0000001091611340#ZH-CN_TOPIC_0000001091611340__getCookie-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) url) |  Obtains the cookie of the specified URL.   
static [CookieStore](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cookiestore-0000001091611340) | [getInstance](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cookiestore-0000001091611340#ZH-CN_TOPIC_0000001091611340__getInstance--)​() |  Obtains a singleton instance of CookieStore.   
abstract boolean | [hasCookies](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cookiestore-0000001091611340#ZH-CN_TOPIC_0000001091611340__hasCookies--)​() |  Checks whether cookies exist.   
abstract boolean | [isCookieEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cookiestore-0000001091611340#ZH-CN_TOPIC_0000001091611340__isCookieEnable--)​() |  Checks whether cookies are enabled.   
abstract boolean | [isCrossDomainCookieEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cookiestore-0000001091611340#ZH-CN_TOPIC_0000001091611340__isCrossDomainCookieEnable-ohos_agp_components_webengine_WebView-)​([WebView](https://developer.harmonyos.com/cn/docs/documentation/doc-references/webview-0000001078480106) webView) |  Checks whether cross-domain cookies are enabled in a specified WebView object.   
abstract void | [persist](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cookiestore-0000001091611340#ZH-CN_TOPIC_0000001091611340__persist--)​() |  Saves cookies to the device's persistent storage.   
abstract void | [removeCookies](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cookiestore-0000001091611340#ZH-CN_TOPIC_0000001091611340__removeCookies-boolean-ohos_agp_components_webengine_AsyncCallback-)​(boolean isSessionCookiesOnly, [AsyncCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/asynccallback-0000001138633147)<[Boolean](https://developer.harmonyos.com/cn/docs/documentation/doc-references/boolean-0000001054119700)> callback) |  Removes session cookies or all cookies.   
abstract void | [setCookie](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cookiestore-0000001091611340#ZH-CN_TOPIC_0000001091611340__setCookie-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) url, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value) |  Sets a cookie for the specified URL.   
abstract void | [setCookieEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cookiestore-0000001091611340#ZH-CN_TOPIC_0000001091611340__setCookieEnable-boolean-)​(boolean isEnable) |  Sets whether to enable cookies.   
abstract void | [setCrossDomainCookieEnable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cookiestore-0000001091611340#ZH-CN_TOPIC_0000001091611340__setCrossDomainCookieEnable-ohos_agp_components_webengine_WebView-boolean-)​([WebView](https://developer.harmonyos.com/cn/docs/documentation/doc-references/webview-0000001078480106) webView, boolean isEnable) |  Sets whether to enable cross-domain cookies in a specified WebView object.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Constructor Detail

#### [h2]CookieStore

public CookieStore​()

#### Method Detail

#### [h2]setCookieEnable

public abstract void setCookieEnable​(boolean isEnable)

Sets whether to enable cookies. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
isEnable  |  Specifies whether to enable cookies. The value true means to enable cookies, and false means the opposite.  
  
**Since:**

5

#### [h2]removeCookies

public abstract void removeCookies​(boolean isSessionCookiesOnly, [AsyncCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/asynccallback-0000001138633147)<[Boolean](https://developer.harmonyos.com/cn/docs/documentation/doc-references/boolean-0000001054119700)> callback)

Removes session cookies or all cookies. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
isSessionCookiesOnly  |  Specifies whether to remove only session cookies. The value true indicates that only session cookies will be removed, and false indicates that all cookies will be removed.  
callback  |  Indicates the callback object to be invoked to receive the asynchronous result.  
  
**Since:**

5

#### [h2]getCookie

public abstract [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) getCookie​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) url)

Obtains the cookie of the specified URL. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
url  |  Indicates the specified URL.  
  
**Returns:**

Returns the cookie of the specified URL.

**Since:**

5

#### [h2]persist

public abstract void persist​()

Saves cookies to the device's persistent storage. 

**Since:**

5

#### [h2]setCookie

public abstract void setCookie​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) url, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) value)

Sets a cookie for the specified URL. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
url  |  Indicates the specified URL.  
value  |  Indicates the cookie to set.  
  
**Since:**

5

#### [h2]setCrossDomainCookieEnable

public abstract void setCrossDomainCookieEnable​([WebView](https://developer.harmonyos.com/cn/docs/documentation/doc-references/webview-0000001078480106) webView, boolean isEnable)

Sets whether to enable cross-domain cookies in a specified WebView object. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
webView  |  Indicates the WebView instance.  
isEnable  |  Specifies whether to enable cross-domain cookies in the specified WebView object. The value true means to enable cross-domain cookies, and false means the opposite.  
  
**Since:**

5

#### [h2]isCookieEnable

public abstract boolean isCookieEnable​()

Checks whether cookies are enabled. 

**Returns:**

Returns true if cookies are enabled; returns false otherwise.

**Since:**

5

#### [h2]isCrossDomainCookieEnable

public abstract boolean isCrossDomainCookieEnable​([WebView](https://developer.harmonyos.com/cn/docs/documentation/doc-references/webview-0000001078480106) webView)

Checks whether cross-domain cookies are enabled in a specified WebView object. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
webView  |  Indicates the WebView instance.  
  
**Returns:**

Returns true if cross-domain cookies are enabled; returns false otherwise.

**Since:**

5

#### [h2]hasCookies

public abstract boolean hasCookies​()

Checks whether cookies exist. 

**Returns:**

Returns true if cookies exist; returns false otherwise.

**Since:**

5

#### [h2]getInstance

public static [CookieStore](https://developer.harmonyos.com/cn/docs/documentation/doc-references/cookiestore-0000001091611340) getInstance​()

Obtains a singleton instance of CookieStore. 

**Returns:**

Returns the CookieStore instance.

**Since:**

5
