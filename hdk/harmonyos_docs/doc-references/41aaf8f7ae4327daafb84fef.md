---
name: document/cn/doc-references/avloggerconnection-0000001054238939
title: AVLoggerConnection
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/avloggerconnection-0000001054238939
source: portal
---

AVLoggerConnection [java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.media.photokit.metadata.AVLoggerConnection
    
    public class AVLoggerConnection
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Provides your application with methods for transferring newly created or downloaded media files to the scanning service. The scanning service reads metadata from the media file and adds the file to the media database.**Since:** 3Constructor Summary Constructor | Description  
---|---  
[AVLoggerConnection](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avloggerconnection-0000001054238939#ZH-CN_TOPIC_0000001054238939__AVLoggerConnection-ohos_app_Context-ohos_media_photokit_common_AVLoggerConnectionClient-)​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, [AVLoggerConnectionClient](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avloggerconnectionclient-0000001054120267) client) |  A constructor used to create an AVLoggerConnection instance.   
Method Summary Modifier and Type | Method | Description  
---|---|---  
void | [connect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avloggerconnection-0000001054238939#ZH-CN_TOPIC_0000001054238939__connect--)​() |  Connects to the scanning service.   
void | [disconnect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avloggerconnection-0000001054238939#ZH-CN_TOPIC_0000001054238939__disconnect--)​() |  Disconnects from the scanning service.   
boolean | [isConnected](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avloggerconnection-0000001054238939#ZH-CN_TOPIC_0000001054238939__isConnected--)​() |  Checks whether the scanning service is connected.   
void | [onServiceConnect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avloggerconnection-0000001054238939#ZH-CN_TOPIC_0000001054238939__onServiceConnect--)​() |  Called when the application connects to the scanning service.   
void | [onServiceDisconnect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avloggerconnection-0000001054238939#ZH-CN_TOPIC_0000001054238939__onServiceDisconnect--)​() |  Called when the application disconnects from the scanning service.   
void | [performLoggerFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avloggerconnection-0000001054238939#ZH-CN_TOPIC_0000001054238939__performLoggerFile-java_lang_String-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) mimeType) |  Requests to scan a media file based on the path and type of the file.   
static void | [performLoggerFile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avloggerconnection-0000001054238939#ZH-CN_TOPIC_0000001054238939__performLoggerFile-ohos_app_Context-java_lang_String:A-java_lang_String:A-ohos_media_photokit_common_AVLogCompletedListener-)​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] paths, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] mimeTypes, [AVLogCompletedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avlogcompletedlistener-0000001054358926) callback) |  Scans multiple media files at a time.   
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
Constructor Detail [h2]AVLoggerConnection public AVLoggerConnection​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, [AVLoggerConnectionClient](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avloggerconnectionclient-0000001054120267) client) A constructor used to create an AVLoggerConnection instance. **Parameters:** Parameter Name | Parameter Description  
---|---  
context  |  Indicates the context required for establishing a connection to the scanning service.  
client  |  Indicates the callback for receiving notifications from the scanner.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Parameter invalid exception.  
**Since:** 3 Method Detail [h2]performLoggerFile public void performLoggerFile​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) path, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) mimeType) Requests to scan a media file based on the path and type of the file. **Parameters:** Parameter Name | Parameter Description  
---|---  
path  |  Indicates the path of the file to scan.  
mimeType  |  Indicates the MIME media type. If this parameter is null, the media type will be determined by the file name extension.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if the file path is null.  
**Since:** 3 [h2]performLoggerFile public static void performLoggerFile​([Context](https://developer.harmonyos.com/cn/docs/documentation/doc-references/context-0000001054440065) context, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] paths, [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] mimeTypes, [AVLogCompletedListener](https://developer.harmonyos.com/cn/docs/documentation/doc-references/avlogcompletedlistener-0000001054358926) callback) Scans multiple media files at a time. **Parameters:** Parameter Name | Parameter Description  
---|---  
context  |  Indicates the caller context required for establishing a connection to the scanning service.  
paths  |  Indicates the array of paths to scan.  
mimeTypes  |  Indicates the array of the MIME media types matching the paths. If this parameter is null, the media types will be determined by the file name extensions.  
callback  |  Indicates the callback for receiving the scanned URIs.  
**Throws:** Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  Throws this exception if any parameter is invalid.  
**Since:** 3 [h2]connect public void connect​() Connects to the scanning service. **Since:** 3 [h2]disconnect public void disconnect​() Disconnects from the scanning service. **Since:** 3 [h2]isConnected public boolean isConnected​() Checks whether the scanning service is connected. **Returns:** Returns true if the connection is successful; returns false otherwise. **Since:** 3 [h2]onServiceConnect public void onServiceConnect​() Called when the application connects to the scanning service. This callback will not be triggered if the application has already connected to the scanning service or the scanning service crashes during the connection. Do not directly invoke this callback. Instead, override this callback via a subclass to define an operation after the connection. **Since:** 4 [h2]onServiceDisconnect public void onServiceDisconnect​() Called when the application disconnects from the scanning service. The disconnect() method does not trigger this callback. This callback is usually invoked when the process of the scanning service crashes or is terminated. In this case, the application is still connected to the scanning service, and onServiceConnect() will be invoked after the scanning service starts next time. Do not directly invoke this callback. Instead, override this callback via a subclass to define an operation after the disconnection. **Since:** 4
