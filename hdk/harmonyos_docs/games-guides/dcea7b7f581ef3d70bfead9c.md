---
name: document/cn/games-guides/pgp-dynamic-render-test-0000002624457130
title: 测试验证收益
uri: https://developer.huawei.com/consumer/cn/doc/games-guides/pgp-dynamic-render-test-0000002624457130
---

# 测试验证收益

动态渲染SDK通过获取和汇总系统和游戏状态信息，识别玩家所处的环境和游戏场景，例如玩家挂机场景（如静置挂机、运动挂机）、环境光昏暗场景、系统组件（如虚拟键盘）覆盖游戏画面、物体（如手掌）覆盖游戏画面等场景。

SDK返回针对这些场景的分辨率、帧率和屏幕亮度建议，由游戏引擎根据建议调整渲染分辨率、渲染帧率和屏幕亮度，以降低游戏发热，提升玩家手机续航。

## 测试游戏

* 测试优化后游戏场景的功耗、性能。
* 测试游戏整体的稳定性、安全性、兼容性。

## 验证优化收益

验证整个游戏优化收益的步骤如下：

1. 获取**底电流** 。请把游戏优化场景截图当手机桌面壁纸，关闭手机所有的后台任务，调整屏幕亮度至最高并保持亮屏，由此测出无游戏运行时的系统底电流。 说明
   >
   > 因系统功耗影响因素较多，尤其是显示功耗影响较大，因此在收益测试过程中可以选择排除干扰。
2. 使用开源性能工具，例如[游戏性能诊断（HiSmartPerf）](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/smartperf-tool-0000001873208929)，分别抓取整个游戏优化前、后的数据指标。请保持相同配置项、使用相同场景进行优化前、后的对比测试，抓取并填写[游戏优化效果验收报告](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260812152032.56670445598201399110535871783772:50001231000000:2800:4F7C4AF833879A1E02B8F361FD9F160D5195C20AEAC565B1E3A53531F489CC16.xlsx?needInitFileName=true)中的数据指标。您可以优先选取**性能** 和**功耗** 相关指标作为主要测试指标，**CPU** 、**GPU** 、**DDR**相关指标作为参考数值。
3. 验收报告将会自动计算优化后的效果和收益。优化差异/效果计算公式如下：

   |优化数据||计算公式|
   |:---|---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   |优化差异绝对值||![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/25/v3/FVnlnOfzTGCh8fJdsIlZcA/zh-cn_formulaimage_0000002678415895.png?HW-CC-KV=V1&HW-CC-Date=20260920T025432Z&HW-CC-Expire=31536000000&HW-CC-Sign=DBF886B2E89996104F84EEC09D6F3BB60797B21D6D58D0AD4C5A385A784B19FC)|
   |优化效果|帧率|-|
   |优化效果|功率/电流|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/wHgoDbLfSWCAnJRBy9jaWQ/zh-cn_formulaimage_0000002648176294.png?HW-CC-KV=V1&HW-CC-Date=20260920T025432Z&HW-CC-Expire=31536000000&HW-CC-Sign=3EF24B8E474B49197A3D8022C8E317BE7720EE31710DAA2B83005697A9F20DE1)|
   |优化效果|单帧功率|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/NjpolvhGTmahKefBVOEJHQ/zh-cn_formulaimage_0000002678415897.png?HW-CC-KV=V1&HW-CC-Date=20260920T025432Z&HW-CC-Expire=31536000000&HW-CC-Sign=276BBBF797C169A9D85F3529DE4947C66387E6B4620E1466CBB2CDA445B0E39D "点击放大")|
   |优化效果|CPU、GPU、DDR核心参数|![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c2/v3/dsIDo7kNSO2EkzU5EBCOQw/zh-cn_formulaimage_0000002648176296.png?HW-CC-KV=V1&HW-CC-Date=20260920T025432Z&HW-CC-Expire=31536000000&HW-CC-Sign=F892117F34D1BB116998353E28919ACE7C7F8FE78B83A731CD1D7EC8998BB570)|

