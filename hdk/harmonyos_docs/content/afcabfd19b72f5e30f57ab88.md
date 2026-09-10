---
name: document/cn/content/themes-audio-spec-guide-type-0000002396307100
title: 电量类型
uri: https://developer.huawei.com/consumer/cn/doc/content/themes-audio-spec-guide-type-0000002396307100
---

# 电量类型

|参数|类型|注释|
|:------------------|:-|:---------------------------|
|leftOrSingleBattery|对象|左边耳机电量对象/单电量设备电量对象 注：不填写不显示。|
|rightBattery|对象|右边耳机电量对象 注：不填写不显示。|
|boxBattery|对象|盒子电量对象 注：不填写不显示。|
|unifyEarBattery|对象|Tws归一化显示的耳机电量对象 注：不填写不显示。|
|unifyBoxBattery|对象|Tws归一化显示的盒子电量对象 注：不填写不显示。|
[表1]

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251218103603.32497554363135788969159162527866:50001231000000:2800:061D13432AC16654F2F160779D2884751E2E3D83B2FF58379D384BEF150C06A0.png)

TWS耳机支持左、右耳机分开的三电量显示和归一化的双电量显示，所以leftOrSingleBattery、rightBattery、boxBattery、unifyEarBattery、unifyBoxBattery都需要设置。其他类型设备只有一个电量，只需要设置leftOrSingleBattery。

某些老型号耳机不支持电量归一，按3个电量来显示。  
