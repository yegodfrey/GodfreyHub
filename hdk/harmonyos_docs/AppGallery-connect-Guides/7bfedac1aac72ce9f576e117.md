---
name: document/cn/AppGallery-connect-Guides/appgallerykit-paidapps-sdksecurity-0000001073783148
title: SDK数据安全说明
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/appgallerykit-paidapps-sdksecurity-0000001073783148
---

# SDK数据安全说明

#### SDK工作方式

移动端SDK需要在应用打包时，被加载在您的应用当中。SDK会随着客户应用的启动而自动开始进行用户行为数据。当用户关闭应用时，SDK会随着客户应用的关闭而关闭，不会在后台做任何额外动作。  

#### SDK权限说明

SDK需要使用以下权限，但已在内部对其进行了预设，因此开发人员无需再申请权限：

* android.permission.ACCESS_NETWORK_STATE：获取网络状态权限。

#### SDK收集数据

SDK会上报鉴权结果，包括设备唯一标识、应用包名、SDK版本号、开发者ID、鉴权结果码和鉴权失败原因。  

#### SDK数据安全保护

SDK端侧采集数据传输给华为应用市场，由华为应用市场负责上报，华为应用市场与采集服务器采用HTTPS安全协议，并在上报数据时加密传输。

华为严格遵循《一般数据保护条例》(GDPR) ，华为也致力于帮助开发者在遵循GDPR规定的前提下取得成功。GDPR规定了数据控制者和数据处理者的义务，使用该服务时，开发者扮演着"数据控制者"的角色，而华为是"数据处理者"。数据处于开发者的控制之下，华为只在"数据处理者"义务和权利范围内处理数据，而开发者有责任遵循GDPR规定，承担"数据控制者"的义务。
