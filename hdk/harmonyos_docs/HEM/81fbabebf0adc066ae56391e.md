---
name: document/cn/HEM/hem-qyyyfl-0000002467258392
title: 常见应用分类
uri: https://developer.huawei.com/consumer/cn/doc/HEM/hem-qyyyfl-0000002467258392
---

# 常见应用分类

|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|应用分类|企业MDM应用|非公开发布应用|企业应用 （Normal应用）|定向应用|公开发布应用|in-house应用|
|应用说明|企业MDM（Mobile Device Management）应用从移动端设备管控应用延伸而来，在HarmonyOS中表示对1+8设备提供高级管控能力的应用，包括对设备、应用、外设等的管理，如禁止连接WiFi、禁止使用USB设备。企业MDM应用仅支持在企业场景下使用，设备需在华为HEM平台进行注册管理或者为搭载鸿蒙电脑专业版、企业版的PC设备。|1.BYOD项目使用的MDM应用 2.不适合面向所有客户公开分发的应用|企业应用指企业内部自研应用或者采购的三方应用，由于信息安全、网络保护等原因，无法上架华为应用市场，只能在企业内部通过企业私有应用商店或者本地离线安装等方式进行分发安装。|不适合面向所有用户公开分发，以及面向特定企业的私有化定制应用|在AG可搜索的应用|仅适用于在企业内部网络环境中分发专属应用给内部员工的场景，In-house应用不适合在任何公开渠道发布|
|是否上架应用市场|否|是|否|是|是|否|
|支持设备|手机/平板/PC|手机/平板/PC|PC/（平板待支持）|手机/平板/PC|手机/平板/PC|手机/平板/PC|
|安装方式|1.首次开机部署 2.离线安装|1.首次开机部署 2.链接从AG下载 <br />|1.首次开机部署、 2.离线安装 3.MDM应用分发|1.兑换码从AG下载 2.链接从AG下载|1.首次开机部署| |
|证书分发类型|enterprise_mdm|-|enterprise_normal|-|-|-|
|开发者类型|企业开发者 （需在HEM认证EMM厂商角色）|企业开发者|企业开发者|企业开发者|企业开发者 个人开发者|企业开发者 （开发者联盟的In-house应用分发账号）|
|AG应用操作指导|[申请企业MDM应用发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-mdm-cert-0000002283256801) [申请企业MDM应用发布Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-mdm-profile-0000002248341094)|[非公开发布](https://developer.huawei.com/consumer/cn/doc/app/agc-help-non-public-release-0000002278016482)|[申请企业应用发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-cert-0000002248177978) <br /> [申请企业应用发布Profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-profile-0000002248181282)|[定向应用发布](https://developer.huawei.com/consumer/cn/doc/app/agc-help-private-release-0000002353433008)|[发布HarmonyOS应用](https://developer.huawei.com/consumer/cn/doc/app/agc-help-release-app-0000002271695230)|[In-house应用发布指导](https://developer.huawei.com/consumer/cn/doc/app/agc-help-inhouse-0000002281532696)|
|适用场景|EMM APP部署COPE项目|1.EMM APP部署BYOD项目 2.开箱定制阶段预置应用|目前仅PC项目使用 <br />|仅企业组织内部需要下发 面向特定企业的私有化定制应用|开箱定制阶段预置应用| |

#### 企业类应用说明

企业类应用包括企业应用和企业MDM应用。  

#### 企业应用：

·企业应用指企业内部自研应用或者采购的三方应用，由于信息安全、网络保护等原因，无法上架华为应用市场，只能在企业内部通过企业私有应用商店或者本地离线安装等方式进行分发安装。

·企业应用发布开发指导：

[申请企业应用发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-cert-0000002248177978)、[申请企业应用发布profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-profile-0000002248181282)

·企业应用支持格式：

.hap、.app（ 如果包含多个hap、hsp文件，需[打包为.app格式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/packing-tool#app打包指令)，且需要在[工程级build-profile.json5文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app) 里配置[packOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app#section03812484215) 的[appWithSignedPkg属性为true](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app#section5494153192911)，保证APP里的HAP/HSP包均被签名 ）。  

#### 企业应用安装方式：

（1）通过上架企业私有应用商店（企业MDM应用）在企业内部进行统一分发安装；

（2）在搭载鸿蒙电脑专业版、企业版的PC设备上，[开启离线应用安装开关](https://developer.huawei.com/business/cn/doc/HEM/hem-kuaisukaitong-hemchangyongdingzhiosnext-0000002524002086#section6519173583111)后本地直接安装；

（3）设备注册纳管到华为HEM平台，在首次开机时通过[HEM平台批量部署](https://developer.huawei.com/business/cn/doc/HEM/hem-kuaisukaitong-osnext-cope-0000002268995666)；

（4）企业应用无法上架华为应用市场进行公开、非公开发布；

<br />

注意点：

（1）企业应用仅支持在搭载了[鸿蒙电脑专业版](https://qingyun.huawei.com/harmonyos-computer/harmonyos-enterprise/)、企业版["擎云"系列](https://qingyun.huawei.com/products-and-solutions/)设备上分发安装。

（2）鸿蒙系统以应用包名作为应用的唯一标识，不同的发布证书代表不同的应用版本，需创建不同的应用包名。

<br />

#### 企业MDM应用：

·企业MDM（Mobile Device Management）应用从移动端设备管控应用延伸而来，在HarmonyOS中表示对1+8设备提供高级管控能力的应用，包括对设备、应用、外设等的管理，如禁止连接WiFi、禁止使用USB设备。企业MDM应用仅支持在企业场景下使用，设备需在[华为HEM平台](https://developer.huawei.com/business/cn/support)进行注册管理或者为搭载鸿蒙电脑专业版、企业版的PC设备。

·企业MDM应用发布开发指导：

[申请企业MDM应用发布证书](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-mdm-cert-0000002283256801)、[申请企业MDM应用发布profile](https://developer.huawei.com/consumer/cn/doc/app/agc-help-enterprise-mdm-profile-0000002248341094)。

·企业MDM应用支持格式：

.hap、.app（ 如果包含多个hap、hsp文件，需[打包为.app格式](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/packing-tool#app打包指令)，且需要在[工程级build-profile.json5文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app) 里配置[packOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app#section03812484215) 的[appWithSignedPkg属性为true](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile-app#section5494153192911)，保证APP里的HAP/HSP有签名 ）。  

#### 企业MDM应用安装方式：

（1）设备注册纳管到华为HEM平台，在首次开机时通过[HEM平台批量部署](https://developer.huawei.com/business/cn/doc/HEM/hem-kuaisukaitong-osnext-cope-0000002268995666)；

（2）在搭载鸿蒙电脑专业版、企业版的PC设备上，[开启离线应用安装开关](https://developer.huawei.com/business/cn/doc/HEM/hem-kuaisukaitong-hemchangyongdingzhiosnext-0000002524002086#section6519173583111)后本地直接安装；

（3）通过上架企业私有应用商店（企业MDM应用）在企业内部进行统一分发安装；

（4）企业MDM应用无法上架华为应用市场进行公开、非公开发布。

<br />

注意点：

（1）鸿蒙系统以应用包名作为应用的唯一标识，不同的发布证书代表不同的应用版本，需创建不同的应用包名。  
