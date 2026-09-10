---
name: document/cn/harmonyos-releases/js-apidiff-adskit-b035
title: Ads Kit
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-adskit-b035
---

# Ads Kit

|操作|旧版本|新版本|d.ts文件|
|:----|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|
|错误码变更|类名：AdLoader； API声明：loadAd(adParam: AdRequestParams, adOptions: AdOptions, listener: AdLoadListener): void; 差异内容：21800001,21800003,401|类名：AdLoader； API声明：loadAd(adParam: AdRequestParams, adOptions: AdOptions, listener: AdLoadListener): void; 差异内容：21800001,21800003,401,801|api/@ohos.advertising.d.ts|
|错误码变更|类名：AdLoader； API声明：loadAdWithMultiSlots(adParams: AdRequestParams\[\], adOptions: AdOptions, listener: MultiSlotsAdLoadListener): void; 差异内容：21800001,21800003,401|类名：AdLoader； API声明：loadAdWithMultiSlots(adParams: AdRequestParams\[\], adOptions: AdOptions, listener: MultiSlotsAdLoadListener): void; 差异内容：21800001,21800003,401,801|api/@ohos.advertising.d.ts|
|错误码变更|类名：advertising； API声明：function getAdRequestBody(adParams: AdRequestParams\[\], adOptions: AdOptions): Promise\<string\>; 差异内容：21800001,401|类名：advertising； API声明：function getAdRequestBody(adParams: AdRequestParams\[\], adOptions: AdOptions): Promise\<string\>; 差异内容：21800001,401,801|api/@ohos.advertising.d.ts|
|错误码变更|类名：advertising； API声明：function parseAdResponse(adResponse: string, listener: MultiSlotsAdLoadListener, context: common.UIAbilityContext): void; 差异内容：21800001,21800005,401|类名：advertising； API声明：function parseAdResponse(adResponse: string, listener: MultiSlotsAdLoadListener, context: common.UIAbilityContext): void; 差异内容：21800001,21800005,401,801|api/@ohos.advertising.d.ts|

