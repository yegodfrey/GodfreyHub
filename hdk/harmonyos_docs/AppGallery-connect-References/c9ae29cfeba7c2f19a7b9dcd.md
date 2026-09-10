---
name: document/cn/AppGallery-connect-References/agcapplinkingcomponents-0000001054853636
title: AGCAppLinkingComponents
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapplinkingcomponents-0000001054853636
---

# AGCAppLinkingComponents

|Class Info|
|:-----------------------------------------------------------------------------------------------------------------------------------|
|链接组装器。 OBJECTIVE-C ``` @interface AGCAppLinkingComponents : NSObject ``` SWIFT ``` open class AGCAppLinkingComponents : NSObject ```|

#### uriPrefix

链接前缀。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *uriPrefix;
```

SWIFT

```
var uriPrefix: String? { get set }
```

#### longLink

长链接。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *longLink;
```

SWIFT

```
var longLink: String? { get set }
```

#### deepLink

深度链接。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *deepLink;
```

SWIFT

```
var deepLink: String? { get set }
```

#### previewType

链接预览页样式。

OBJECTIVE-C

```
@property (nonatomic, assign, unsafe_unretained, readwrite)
    AGCLinkingPreviewType previewType;
```

SWIFT

```
var previewType: AGCLinkingPreviewType { get set }
```

#### isShowPreview

是否展示预览页。

OBJECTIVE-C

```
@property (nonatomic, assign, unsafe_unretained, readwrite)
    BOOL isShowPreview;
```

SWIFT

```
var isShowPreview : Bool { get set }
```

#### expireMinute

短链接失效时间，单位为分钟，默认两年失效。最短5分钟。

OBJECTIVE-C

```
@property (nonatomic, assign, unsafe_unretained, readwrite)
    NSInteger expireMinute;
```

SWIFT

```
var expireMinute: Int { get set }
```

#### androidPackageName

Android应用包名。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *androidPackageName;
```

SWIFT

```
var androidPackageName: String? { get set }
```

#### androidDeepLink

Android应用深度链接。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *androidDeepLink;
```

SWIFT

```
var androidDeepLink: String? { get set }
```

#### androidOpenType

Android应用未安装时打开行为。

OBJECTIVE-C

```
@property (nonatomic, assign, unsafe_unretained, readwrite)
    AGCLinkingAndroidOpenType androidOpenType;
```

SWIFT

```
var androidOpenType: AGCLinkingAndroidOpenType { get set }
```

#### androidFallbackUrl

Android应用未安装时打开的链接地址。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *androidFallbackUrl;
```

SWIFT

```
var androidFallbackUrl: String? { get set }
```

#### harmonyOSPackageName

HarmonyOS应用包名。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *harmonyOSPackageName;
```

SWIFT

```
var harmonyOSPackageName: String? { get set }
```

#### harmonyOSDeepLink

HarmonyOS应用深度链接。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *harmonyOSDeepLink;
```

SWIFT

```
var harmonyOSDeepLink: String? { get set }
```

#### harmonyOSFallbackUrl

HarmonyOS应用未安装时打开的链接地址。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *harmonyOSFallbackUrl;
```

SWIFT

```
var harmonyOSFallbackUrl: String? { get set }
```

#### iosBundleId

iOS应用的BundleID。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *iosBundleId;
```

SWIFT

```
var iosBundleId: String? { get set }
```

#### iosDeepLink

iOS应用的深度链接。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *iosDeepLink;
```

SWIFT

```
var iosDeepLink: String? { get set }
```

#### iosFallbackUrl

iOS应用未安装时打开的链接地址。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *iosFallbackUrl;
```

SWIFT

```
var iosFallbackUrl: String? { get set }
```

#### ipadBundleId

iPad应用的BundleID。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *ipadBundleId;
```

SWIFT

```
var ipadBundleId: String? { get set }
```

#### ipadFallbackUrl

iPad应用未安装时打开的链接地址。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *ipadFallbackUrl;
```

SWIFT

```
var ipadFallbackUrl: String? { get set }
```

#### iTunesConnectMediaType

App Store Connect的媒介类型。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable)
    NSString *iTunesConnectMediaType;
```

SWIFT

```
var iTunesConnectMediaType: String? { get set }
```

#### iTunesConnectAffiliateToken

App Store Connect的会员Token。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable)
    NSString *iTunesConnectAffiliateToken;
```

SWIFT

```
var iTunesConnectAffiliateToken: String? { get set }
```

#### iTunesConnectProviderToken

App Store Connect的提供商Token。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable)
    NSString *iTunesConnectProviderToken;
```

SWIFT

```
var iTunesConnectProviderToken: String? { get set }
```

#### iTunesConnectCampaignToken

App Store Connect的活动Token。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable)
    NSString *iTunesConnectCampaignToken;
```

SWIFT

```
var iTunesConnectCampaignToken: String? { get set }
```

#### socialTitle

社交媒体中分享的标题。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *socialTitle;
```

SWIFT

```
var socialTitle: String? { get set }
```

#### socialDescription

社交媒体中分享的描述。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *socialDescription;
```

SWIFT

```
var socialDescription: String? { get set }
```

#### socialImageUrl

社交媒体中分享的图片地址。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *socialImageUrl;
```

SWIFT

```
var socialImageUrl: String? { get set }
```

#### campaignName

活动名称。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *campaignName;
```

SWIFT

```
var campaignName: String? { get set }
```

#### campaignSource

活动来源。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *campaignSource;
```

SWIFT

```
var campaignSource: String? { get set }
```

#### campaignMedium

活动媒介。

OBJECTIVE-C

```
@property (nonatomic, strong, readwrite, nullable) NSString *campaignMedium;
```

SWIFT

```
var campaignMedium: String? { get set }
```

#### -buildLongLink

生成长链接。

OBJECTIVE-C

```
- (nonnull NSURL *)buildLongLink;
```

SWIFT

```
func buildLongLink() -> URL
```

#### -buildShortLink:

生成短链接。

OBJECTIVE-C

```
- (void)buildShortLink:(nonnull AGCShortAppLinkingCallBack)callback;
```

SWIFT

```
func buildShortLink(_ callback: @escaping AGCShortAppLinkingCallBack)
```

Parameters  

|Name|Description|
|:-------|:----------|
|callback|短链接回调。|

#### -buildShortLink:callback:

生成短链接。

OBJECTIVE-C

```
- (void)buildShortLink:(AGCShortLinkingLength)length
              callback:(nonnull AGCShortAppLinkingCallBack)callback;
```

SWIFT

```
func buildShortLink(_ length: AGCShortLinkingLength, callback: @escaping AGCShortAppLinkingCallBack)
```

Parameters  

|Name|Description|
|:-------|:----------|
|length|短链接长度。|
|callback|短链接回调。|

