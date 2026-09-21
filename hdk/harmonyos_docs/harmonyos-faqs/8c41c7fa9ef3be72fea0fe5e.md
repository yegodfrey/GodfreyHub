---
name: document/cn/harmonyos-faqs/faqs-compiling-and-building-109
title: 构建报错“Duplicated files found in module xxx. This may cause unexpected errors at runtime”
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-109
---

# 构建报错"Duplicated files found in module xxx. This may cause unexpected errors at runtime"

**问题现象**

编译构建时，出现错误信息"Duplicated files found in module xxx. This may cause unexpected errors at runtime"。

构建时存在不同版本的同名SO文件会导致问题。例如，将har模块产物中的SO文件拷贝到entry模块的libs目录下，此时har模块和entry模块中都有一个名为libhar.so的文件。如果再配置entry依赖har，构建entry时就会出现错误。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/k-IGxQ3rR9-JSiodGwNLcg/zh-cn_image_0000002654797905.png?HW-CC-KV=V1&HW-CC-Date=20260916T082508Z&HW-CC-Expire=31536000000&HW-CC-Sign=453059A95407DA3039502251B3BD6F9A986369B1453CB9FB8BB3380002967A2F)

**解决措施**

使用select、pickFirsts、pickLasts等配置项选择要使用的.so文件。select提供对 native 产物的精准选择，优先级高于excludes、pickFirsts等配置项。pickFirsts和pickLasts按照.so文件的优先级顺序打包，优先级顺序基于依赖收集的顺序，越晚被收集的优先级越高。

具体可参考：[模块级build-profile.json5文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile)。

在entry/build-profile.json5中，配置select选中har模块中的so文件，package选中包名为har的模块，include选中libhar.so文件。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ce/v3/N8LK6wV4SKaFItjmzlzLPg/zh-cn_image_0000002624638450.png?HW-CC-KV=V1&HW-CC-Date=20260916T082508Z&HW-CC-Expire=31536000000&HW-CC-Sign=08CD1F6C2A2FAF4182F78CF46228032D3A1ED54A6FB593C2B75B93C01AFFD6EE)

