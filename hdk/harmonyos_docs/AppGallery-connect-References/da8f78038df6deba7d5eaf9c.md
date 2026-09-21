---
name: document/cn/AppGallery-connect-References/ios-remoteconfig-agcremoteconfigerror-0000001056646286
title: AGCRemoteConfigError
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/ios-remoteconfig-agcremoteconfigerror-0000001056646286
---

# AGCRemoteConfigError

Remote Config SDK的异常类。

```screen
@interface AGCRemoteConfigError : NSError
```

具体错误码参见[AGCRemoteConfigErrorCode](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/ios-remoteconfig-agcremoteconfigerrorcode-0000001057894326)。

## throttleEndTime

如果是本地流控错误，则返回流控剩余时间。

**OBJECTIVE-C**

```screen
@property (readonly, nonatomic) NSTimeInterval throttleEndTime;
```

**SWIFT**

```screen
var throttleEndTime: TimeInterval { get }
```

