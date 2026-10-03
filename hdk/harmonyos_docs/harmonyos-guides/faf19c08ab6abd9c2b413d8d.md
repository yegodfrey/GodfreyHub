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

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/q7YMEH3uR4KDSL4n7BggKg/zh-cn_image_0000002701823456.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=4ECED34BA952BC00B2AA8F2CC2ADC58DCCB015A8F69A44B81198F00C73308472)

2. 如果有引用本地library，需在library模块的build-profile.json5文件中，配置arguments字段值为"-DOHOS_ENABLE_TSAN=ON"，表示以TSan模式编译so文件。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/LfdUbG3uR3G1bsPtDX8wzg/zh-cn_image_0000002731382767.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=11AD8AF334B1A6504C033C9F9B8C92F53A05F172D6AD6B7FA9B914E790305742)

### 方式二

1. 修改工程目录下AppScope/app.json5，添加TSan配置开关。

   ```json5
    "tsanEnabled": true
   ```

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/_OLAu863SsmadTUE29aPPg/zh-cn_image_0000002731382765.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=706130466C1262E59FDF116321F5B3994183D944E7D2C59F67BEF72C57916BC7)

2. 设置模块级构建TSan插桩。

   在需要开启TSan的模块中，通过添加构建参数开启TSan检测插桩，在对应模块的模块级build-profile.json5中添加命令参数：

   ```json5
   "arguments": "-DOHOS_ENABLE_TSAN=ON"
   ```

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f2/v3/FemQMRtcQG6ITh1zz5Bi4g/zh-cn_image_0000002731542733.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=31E0AE45CAEF6B35E1417DA7195A851DE2B8A0AE16F6B4804645915A5975E0D3)

## 使用TSan

1. 运行或调试当前应用。
2. 当程序出现线程错误时，弹出TSan log信息，点击信息中的链接即可跳转至引起线程错误的代码处。日志中的异常检测类型请参考[TSan异常检测类型](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-stability-tsan-detection#section1180812915516)。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/01/v3/B-8fRTrNRmS9eR3kNgBYMA/zh-cn_image_0000002731382761.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=91F194120FE936501852E51D0EEA5A3D13E42EF5C5CA0884AC711C96A91A3961)

3. 如果是release应用，本地无工程代码，可以使用AnalyzeStackTrace功能，提供要解析堆栈的so，解析结果为源码地址。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a1/v3/IRybLJ_dThaoVMlx15nIiQ/zh-cn_image_0000002701663538.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=11430E766D25E6ABCBE54D30C021B89DD16083418169F1CBE96EF28C0D1D2A16)

