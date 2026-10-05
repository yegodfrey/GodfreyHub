---
name: document/cn/harmonyos-center-guides/faqs-compiling-and-building-107-0000002002652088
title: 编译报错“Duplicated files found in module entry. This may cause unexpected errors at runtime”
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-center-guides/faqs-compiling-and-building-107-0000002002652088
source: portal
---

编译报错“Duplicated files found in module entry. This may cause unexpected errors at runtime” **问题现象** 编译构建时，报错“Duplicated files found in module entry. This may cause unexpected errors at runtime”。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/68/v3/J3VjcXBmQqidHgF_N6NClg/zh-cn_image_0000002623217631.png?HW-CC-KV=V1&HW-CC-Date=20261005T053100Z&HW-CC-Expire=86400&HW-CC-Sign=415032529EFD81EF29B23755E34E14F29A69CBB5C9A462AF0233CAA4BC48AABD) **解决措施** 该报错是从不同的包中收集到了相同名称的so包，导致so包冲突，可在模块级build-profile.json5文件中添加enableOverride字段并设置true。更多内容可参考[模块级build-profile.json5文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-build-profile)。
    
    "buildOption": {
      "nativeLib": {
        "filter": {
          "enableOverride": true
        }
      }
    },
