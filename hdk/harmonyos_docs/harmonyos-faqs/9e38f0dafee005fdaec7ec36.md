---
name: document/cn/harmonyos-faqs/faqs-compiling-and-building-20
title: 编译报错“please check deviceType or distroFilter/distributionFilter of the module”
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-20
---

# 编译报错"please check deviceType or distroFilter/distributionFilter of the module"

**问题现象**

HarmonyOS DevEco Studio编译时出现错误，提示如下之一：

* Module: (xxx) and Module: (xxx) are entry, please check deviceType or distroFilter of the module. ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/53/v3/_VriNmKnRg-NKrolhMfgtw/zh-cn_image_0000002654797849.png?HW-CC-KV=V1&HW-CC-Date=20260916T082507Z&HW-CC-Expire=31536000000&HW-CC-Sign=7244EBF599410269CD5734A90EEEB0C07B47FA8887D997BA532BFD31C43E72AE)

* Module: (xxx) and Module: (xxx) have the same moduleName, please check deviceType or distroFilter of the module. ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/MV9M_WTrSeOx6KbO-DgX0g/zh-cn_image_0000002624638394.png?HW-CC-KV=V1&HW-CC-Date=20260916T082507Z&HW-CC-Expire=31536000000&HW-CC-Sign=3550B1035DB7AC370D211A82617932B40B9FEECA5FD1B965CAD072A6A3981764)

* Module: (xxx) and Module: (xxx) have the same packageName, please check deviceType or distroFilter of the module. ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/61/v3/5IZhHaVoSOKc7VRyAR0P5w/zh-cn_image_0000002654837803.png?HW-CC-KV=V1&HW-CC-Date=20260916T082507Z&HW-CC-Expire=31536000000&HW-CC-Sign=7ADFE54B3302CAB63B18FE2AAC98FB70724780D0EB7103973138859366898E90)

* Module: (xxx) and Module: (xxx) have the same ability name. ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1d/v3/9r3vSlimTjiUF1VgilKg0w/zh-cn_image_0000002624478490.png?HW-CC-KV=V1&HW-CC-Date=20260916T082507Z&HW-CC-Expire=31536000000&HW-CC-Sign=38DBC27933745CF062F505EE85FC9FB62F4CCF37C902378800D5D05322127B7A)

**解决措施**

* 可能是打包时工程未满足HAP唯一性校验逻辑，请参考[HAP唯一性校验逻辑](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-verification-rule)修改工程配置，满足校验逻辑即可正常打包。
* 如果工程中仅有一种设备类型，请确保工程级build-profile.json5文件中，同一模块的不同目标target的applyToProducts字段对应的product不相同。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4f/v3/Ik4qTHDvQy-j7NDzMOVnSQ/zh-cn_image_0000002654797851.png?HW-CC-KV=V1&HW-CC-Date=20260916T082507Z&HW-CC-Expire=31536000000&HW-CC-Sign=6764CDBE11B1B5B4EBB70F75A65DC0341314F1E78B0F47FD93DB53B625B7E3C1)

