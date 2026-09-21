---
name: document/cn/harmonyos-releases/js-apidiff-locationkit-7001
title: Location Kit
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-releases/js-apidiff-locationkit-7001
---

# Location Kit

|操作|旧版本|新版本|d.ts文件|
|:----|:--|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|
|新增API|NA|类名：geoLocationManager； API声明：function isGnssServiceSupported(): boolean; 差异内容：function isGnssServiceSupported(): boolean;|api/@ohos.geoLocationManager.d.ts|
|新增API|NA|类名：geoLocationManager； API声明：function isGnssFenceServiceSupported(): boolean; 差异内容：function isGnssFenceServiceSupported(): boolean;|api/@ohos.geoLocationManager.d.ts|
|新增API|NA|类名：geoLocationManager； API声明：function isCachedGnssServiceSupported(): boolean; 差异内容：function isCachedGnssServiceSupported(): boolean;|api/@ohos.geoLocationManager.d.ts|
|新增API|NA|类名：geoLocationManager； API声明：function findMatchingWlan(wlanBssidArray: Array<string>, rssiThreshold: number, needStartScan: boolean): Promise<Array<MatchingWlanInfo>>; 差异内容：function findMatchingWlan(wlanBssidArray: Array<string>, rssiThreshold: number, needStartScan: boolean): Promise<Array<MatchingWlanInfo>>;|api/@ohos.geoLocationManager.d.ts|
|新增API|NA|类名：Poi； API声明：additionalInfo?: string; 差异内容：additionalInfo?: string;|api/@ohos.geoLocationManager.d.ts|
|新增API|NA|类名：geoLocationManager； API声明：export interface MatchingWlanInfo 差异内容：export interface MatchingWlanInfo|api/@ohos.geoLocationManager.d.ts|
|新增API|NA|类名：MatchingWlanInfo； API声明：index: number; 差异内容：index: number;|api/@ohos.geoLocationManager.d.ts|
|新增API|NA|类名：MatchingWlanInfo； API声明：ssid: string; 差异内容：ssid: string;|api/@ohos.geoLocationManager.d.ts|

