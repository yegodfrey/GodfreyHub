---
name: document/cn/harmonyos-faqs/faqs-compiling-and-building-20
title: 编译报错“please check deviceType or distroFilter/distributionFilter of the module”
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-20
---

# 编译报错"please check deviceType or distroFilter/distributionFilter of the module"

**问题现象**

HarmonyOS DevEco Studio编译时出现错误，提示如下之一：

* Module: (xxx) and Module: (xxx) are entry, please check deviceType or distroFilter of the module. ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/53/v3/_VriNmKnRg-NKrolhMfgtw/zh-cn_image_0000002654797849.png?HW-CC-KV=V1&HW-CC-Date=20261008T192134Z&HW-CC-Expire=31536000000&HW-CC-Sign=1EAC0976DA70836DC23480A32B8EA2F937058D217FC4BF5BC8030EB045C65B27)

* Module: (xxx) and Module: (xxx) have the same moduleName, please check deviceType or distroFilter of the module. ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/MV9M_WTrSeOx6KbO-DgX0g/zh-cn_image_0000002624638394.png?HW-CC-KV=V1&HW-CC-Date=20261008T192134Z&HW-CC-Expire=31536000000&HW-CC-Sign=06BBD41EFFF290BBB2B31E3E368270973D5470E02C7DF3AC0598DC93D58C8B04)

* Module: (xxx) and Module: (xxx) have the same packageName, please check deviceType or distroFilter of the module. ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/61/v3/5IZhHaVoSOKc7VRyAR0P5w/zh-cn_image_0000002654837803.png?HW-CC-KV=V1&HW-CC-Date=20261008T192134Z&HW-CC-Expire=31536000000&HW-CC-Sign=97F5C1A3EDCEB5FDA198E9EF802ADC199658432F96C400C94B80E8EB3853D63B)

* Module: (xxx) and Module: (xxx) have the same ability name. ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1d/v3/9r3vSlimTjiUF1VgilKg0w/zh-cn_image_0000002624478490.png?HW-CC-KV=V1&HW-CC-Date=20261008T192134Z&HW-CC-Expire=31536000000&HW-CC-Sign=1F5096EEF502501BC17D6C4C39B6D2E3D9C95476A16529B09DE973002E62D7FA)

**解决措施**

* 可能是打包时工程未满足HAP唯一性校验逻辑，请参考[HAP唯一性校验逻辑](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-verification-rule)修改工程配置，满足校验逻辑即可正常打包。
* 如果工程中仅有一种设备类型，请确保工程级build-profile.json5文件中，同一模块的不同目标target的applyToProducts字段对应的product不相同。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/Ik4qTHDvQy-j7NDzMOVnSQ/zh-cn_image_0000002654797851.png?HW-CC-KV=V1&HW-CC-Date=20261008T192134Z&HW-CC-Expire=31536000000&HW-CC-Sign=740181682A5CF4ECDF3AC5151D98D93476CC12A405759D4C52DFE5DA0FF45E88)

