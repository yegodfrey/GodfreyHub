---
name: document/cn/harmonyos-guides/ide-tsan
title: 使用TSan检测线程错误
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-tsan
---

# 使用TSan检测线程错误

TSan（ThreadSanitizer）是一个检测数据竞争的工具。它包含一个编译器插桩模块和一个运行时库。TSan开启后，会使性能降低5到15倍，同时使内存占用率提高5到10倍。关于TSan的检测原理请参考[TSan](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-tsan-detection)。

## 使用约束

* ASan、TSan、UBSan、HWASan不能同时开启，只能开启其中一个。
* TSan开启后会申请大量虚拟内存，其他申请大虚拟内存的功能（如gpu图形渲染）可能会受影响。
* TSan不支持静态链接libc或libc++库。

## 开启TSan

可通过以下两种方式开启TSan。

### 方式一

1. 点击**Run > Edit Configurations >** **Diagnostics** ，勾选**Thread Sanitizer**。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/33/v3/rJkdYC9uSwqxcldGwAlICA/zh-cn_image_0000002701823456.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=FF2615C52480B9963E79C3FD92DD6755BBDAC8F840963F759F7CC878E6B8F5CE)

2. 如果有引用本地library，需在library模块的build-profile.json5文件中，配置arguments字段值为"-DOHOS_ENABLE_TSAN=ON"，表示以TSan模式编译so文件。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/15/v3/XISUR7Q4Ss2FEFExj9m2ig/zh-cn_image_0000002731382767.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=DFF97565006EA6118BC82EC4C23CFA01839A313CE2F15E22FE45DC2F00BE0536)

### 方式二

1. 修改工程目录下AppScope/app.json5，添加TSan配置开关。

   ```json5
    "tsanEnabled": true
   ```

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/LV8Lwj6KTBm4eX3N_Bu5Kw/zh-cn_image_0000002731382765.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=5D6763FEE2EBDBB22545C832DB976490A18051F90FC0ADFE00D27868F969F36A)

2. 设置模块级构建TSan插桩。

   在需要开启TSan的模块中，通过添加构建参数开启TSan检测插桩，在对应模块的模块级build-profile.json5中添加命令参数：

   ```json5
   "arguments": "-DOHOS_ENABLE_TSAN=ON"
   ```

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9c/v3/en7GmRxZRR66UWwb06e5HA/zh-cn_image_0000002731542733.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=FBB6DB35B21204D70D013ECA26D7D60F4437DF92E9B94CBF3A2974129FB7A346)

## 使用TSan

1. 运行或调试当前应用。
2. 当程序出现线程错误时，弹出TSan log信息，点击信息中的链接即可跳转至引起线程错误的代码处。日志中的异常检测类型请参考[TSan异常检测类型](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-tsan-detection#section1180812915516)。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3f/v3/1dRTRvSNRxm8Fxilsn-NhQ/zh-cn_image_0000002731382761.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=A87CCF25D969E49ED7554C906E706B72EC30D356A3D80DD0A2D80E9AAA5F9130)

3. 如果是release应用，本地无工程代码，可以使用AnalyzeStackTrace功能，提供要解析堆栈的so，解析结果为源码地址。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/BsYFSu8SQamKZJhL1Xrnig/zh-cn_image_0000002701663538.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=80DAC7EF483993577D7B54546105C21A31002C164D6E43C48BD38D2667943969)

