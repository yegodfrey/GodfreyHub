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

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/9b2plXNKRySKfw1232gETQ/zh-cn_image_0000002701823456.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=25101582A881CC0D8C50F3A04A29879958F671E3EADC7A3E6790E310AF5DE511)

2. 如果有引用本地library，需在library模块的build-profile.json5文件中，配置arguments字段值为"-DOHOS_ENABLE_TSAN=ON"，表示以TSan模式编译so文件。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c4/v3/vgrN0l-ETqOCUCW_UwSysg/zh-cn_image_0000002731382767.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=654465F70042660727A066FD93F913835F579279185FC8FDBE5D1F4B4C290809)

### 方式二

1. 修改工程目录下AppScope/app.json5，添加TSan配置开关。

   ```json5
    "tsanEnabled": true
   ```

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/be/v3/nCVTbmFATEO1o8m2S2iZCw/zh-cn_image_0000002731382765.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=D7AC863EA5756D2B080BBBBA3ED0822A4E1FB7D16F823E9F1A245C5379A59534)

2. 设置模块级构建TSan插桩。

   在需要开启TSan的模块中，通过添加构建参数开启TSan检测插桩，在对应模块的模块级build-profile.json5中添加命令参数：

   ```json5
   "arguments": "-DOHOS_ENABLE_TSAN=ON"
   ```

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b1/v3/6J0pYvUXS0CSRPugoSIGyw/zh-cn_image_0000002731542733.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=FB18051956DAEFE5E0073B7DB1069614109213F1E2572107AB77518C1FAC7DC5)

## 使用TSan

1. 运行或调试当前应用。
2. 当程序出现线程错误时，弹出TSan log信息，点击信息中的链接即可跳转至引起线程错误的代码处。日志中的异常检测类型请参考[TSan异常检测类型](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-tsan-detection#section1180812915516)。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/OZoE_jPgR_SSH4zYPn5b5Q/zh-cn_image_0000002731382761.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=65E2661D028104450A032E6A1B532D0B9290F5D8AB6B3A53D9DB584DBD8BA10D)

3. 如果是release应用，本地无工程代码，可以使用AnalyzeStackTrace功能，提供要解析堆栈的so，解析结果为源码地址。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/hgJgjnOvSM6G1HdO2XJWPg/zh-cn_image_0000002701663538.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=9ABE1FA277DA066845A975E740F0D677BA5C782B27091AFEEE8B238687FD2915)

