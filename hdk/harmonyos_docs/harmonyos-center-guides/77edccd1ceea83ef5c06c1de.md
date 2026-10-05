---
name: document/cn/harmonyos-center-guides/faqs-compiling-and-building-126-0000002061690856
title: 如何解决编译报错“Indexed access is not supported for fields(arkts-no-props-by-index)”的问题
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-center-guides/faqs-compiling-and-building-126-0000002061690856
source: portal
---

如何解决编译报错“Indexed access is not supported for fields(arkts-no-props-by-index)”的问题 **问题现象** 动态调用类或接口的字段会导致编译报错：Indexed access is not supported for fields (arkts-no-props-by-index)。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2d/v3/ne2SqgY1RKiJeSof_DWJwg/zh-cn_image_0000002592938024.png?HW-CC-KV=V1&HW-CC-Date=20261005T053101Z&HW-CC-Expire=86400&HW-CC-Sign=A84053BA5060AFE3EC7135570B2149363D1B51729687562FDBEF9802D602CA19) **解决方案** 修改代码：
    
    getValue(breakpoint: string): T {
      return Reflect.get(this.options, breakpoint) as T;
    }
