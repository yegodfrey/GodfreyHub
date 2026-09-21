---
name: document/cn/AppGallery-connect-References/agcapplinkingcomponents-0000001054853636
title: AGCAppLinkingComponents
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapplinkingcomponents-0000001054853636
---

# AGCAppLinkingComponents

|Class Info|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
|链接组装器。 **OBJECTIVE-C** ```screen @interface AGCAppLinkingComponents : NSObject ``` **SWIFT** ```screen open class AGCAppLinkingComponents : NSObject ```|

## uriPrefix

链接前缀。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *uriPrefix;
```

**SWIFT**

```screen
var uriPrefix: String? { get set }
```

## longLink

长链接。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *longLink;
```

**SWIFT**

```screen
var longLink: String? { get set }
```

## deepLink

深度链接。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *deepLink;
```

**SWIFT**

```screen
var deepLink: String? { get set }
```

## previewType

链接预览页样式。

**OBJECTIVE-C**

```screen
@property (nonatomic, assign, unsafe_unretained, readwrite)
    AGCLinkingPreviewType previewType;
```

**SWIFT**

```screen
var previewType: AGCLinkingPreviewType { get set }
```

## isShowPreview

是否展示预览页。

**OBJECTIVE-C**

```screen
@property (nonatomic, assign, unsafe_unretained, readwrite)
    BOOL isShowPreview;
```

**SWIFT**

```screen
var isShowPreview : Bool { get set }
```

## expireMinute

短链接失效时间，单位为分钟，默认两年失效。最短5分钟。

**OBJECTIVE-C**

```screen
@property (nonatomic, assign, unsafe_unretained, readwrite)
    NSInteger expireMinute;
```

**SWIFT**

```screen
var expireMinute: Int { get set }
```

## androidPackageName

Android应用包名。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *androidPackageName;
```

**SWIFT**

```screen
var androidPackageName: String? { get set }
```

## androidDeepLink

Android应用深度链接。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *androidDeepLink;
```

**SWIFT**

```screen
var androidDeepLink: String? { get set }
```

## androidOpenType

Android应用未安装时打开行为。

**OBJECTIVE-C**

```screen
@property (nonatomic, assign, unsafe_unretained, readwrite)
    AGCLinkingAndroidOpenType androidOpenType;
```

**SWIFT**

```screen
var androidOpenType: AGCLinkingAndroidOpenType { get set }
```

## androidFallbackUrl

Android应用未安装时打开的链接地址。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *androidFallbackUrl;
```

**SWIFT**

```screen
var androidFallbackUrl: String? { get set }
```

## harmonyOSPackageName

HarmonyOS应用包名。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *harmonyOSPackageName;
```

**SWIFT**

```screen
var harmonyOSPackageName: String? { get set }
```

## harmonyOSDeepLink

HarmonyOS应用深度链接。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *harmonyOSDeepLink;
```

**SWIFT**

```screen
var harmonyOSDeepLink: String? { get set }
```

## harmonyOSFallbackUrl

HarmonyOS应用未安装时打开的链接地址。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *harmonyOSFallbackUrl;
```

**SWIFT**

```screen
var harmonyOSFallbackUrl: String? { get set }
```

## iosBundleId

iOS应用的BundleID。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *iosBundleId;
```

**SWIFT**

```screen
var iosBundleId: String? { get set }
```

## iosDeepLink

iOS应用的深度链接。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *iosDeepLink;
```

**SWIFT**

```screen
var iosDeepLink: String? { get set }
```

## iosFallbackUrl

iOS应用未安装时打开的链接地址。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *iosFallbackUrl;
```

**SWIFT**

```screen
var iosFallbackUrl: String? { get set }
```

## ipadBundleId

iPad应用的BundleID。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *ipadBundleId;
```

**SWIFT**

```screen
var ipadBundleId: String? { get set }
```

## ipadFallbackUrl

iPad应用未安装时打开的链接地址。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *ipadFallbackUrl;
```

**SWIFT**

```screen
var ipadFallbackUrl: String? { get set }
```

## iTunesConnectMediaType

App Store Connect的媒介类型。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable)
    NSString *iTunesConnectMediaType;
```

**SWIFT**

```screen
var iTunesConnectMediaType: String? { get set }
```

## iTunesConnectAffiliateToken

App Store Connect的会员Token。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable)
    NSString *iTunesConnectAffiliateToken;
```

**SWIFT**

```screen
var iTunesConnectAffiliateToken: String? { get set }
```

## iTunesConnectProviderToken

App Store Connect的提供商Token。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable)
    NSString *iTunesConnectProviderToken;
```

**SWIFT**

```screen
var iTunesConnectProviderToken: String? { get set }
```

## iTunesConnectCampaignToken

App Store Connect的活动Token。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable)
    NSString *iTunesConnectCampaignToken;
```

**SWIFT**

```screen
var iTunesConnectCampaignToken: String? { get set }
```

## socialTitle

社交媒体中分享的标题。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *socialTitle;
```

**SWIFT**

```screen
var socialTitle: String? { get set }
```

## socialDescription

社交媒体中分享的描述。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *socialDescription;
```

**SWIFT**

```screen
var socialDescription: String? { get set }
```

## socialImageUrl

社交媒体中分享的图片地址。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *socialImageUrl;
```

**SWIFT**

```screen
var socialImageUrl: String? { get set }
```

## campaignName

活动名称。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *campaignName;
```

**SWIFT**

```screen
var campaignName: String? { get set }
```

## campaignSource

活动来源。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *campaignSource;
```

**SWIFT**

```screen
var campaignSource: String? { get set }
```

## campaignMedium

活动媒介。

**OBJECTIVE-C**

```screen
@property (nonatomic, strong, readwrite, nullable) NSString *campaignMedium;
```

**SWIFT**

```screen
var campaignMedium: String? { get set }
```

## -buildLongLink

生成长链接。

**OBJECTIVE-C**

```screen
- (nonnull NSURL *)buildLongLink;
```

**SWIFT**

```screen
func buildLongLink() -> URL
```

## -buildShortLink:

生成短链接。

**OBJECTIVE-C**

```screen
- (void)buildShortLink:(nonnull AGCShortAppLinkingCallBack)callback;
```

**SWIFT**

```screen
func buildShortLink(_ callback: @escaping AGCShortAppLinkingCallBack)
```

**Parameters**

|Name|Description|
|:-------|:----------|
|callback|短链接回调。|

## -buildShortLink:callback:

生成短链接。

**OBJECTIVE-C**

```screen
- (void)buildShortLink:(AGCShortLinkingLength)length
              callback:(nonnull AGCShortAppLinkingCallBack)callback;
```

**SWIFT**

```screen
func buildShortLink(_ length: AGCShortLinkingLength, callback: @escaping AGCShortAppLinkingCallBack)
```

**Parameters**

|Name|Description|
|:-------|:----------|
|length|短链接长度。|
|callback|短链接回调。|

