---
name: document/cn/harmonyos-guides/ide-cross-language-debugging
title: 跨语言调试
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-cross-language-debugging
---

# 跨语言调试

DevEco Studio支持C++和ArkTS的跨语言调试，可以同时调试这两种语言。整体操作体验与单一语言调试一致，无需额外在对应语言添加断点，提升了使用两种语言混合开发的调试效率。

1. 将DevEco Studio与设备进行连接。如果使用真机设备，请先对应用/元服务进行签名，具体请参考[为应用/元服务进行签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)。
2. 在菜单栏单击**Run > Edit Configurations** ，选择**Application** 下的模块名（如entry），然后在右侧窗口中选择**Debugger** ，将**Debug type**设置为"Dual(ArkTS/JS + Native)"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/34/v3/wnR5Iw6oTF-rxweJ1QQcqw/zh-cn_image_0000002731543133.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=98230EB97928704E2EA1DEC11F9745E0B2EB61D924872E6CD453A757795345DF)

3. 代码调试执行到ArkTS调用C++方法处，点击Step Into可以进入到对应的C++方法的第一行代码处。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/be/v3/NuoaHKZcSw2c6zsNxsa4zQ/zh-cn_image_0000002731383161.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=6434689853D8D4361A10D82629073071E2485C1FDE2F7FFE902BDC378E9771A1)

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7c/v3/JE3cGMtNSfi0XoyxfnLKGA/zh-cn_image_0000002731543131.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=2DB5187A26197DAFF09B759CE49FA26C2F6E94085F83EADB35B0676F717D3A0E)

4. 进入到C++代码后，可以从左下角Frames区域查看C++的调用栈，如需查看对应的ArkTS调用栈，在Frames区域中单击鼠标右键，勾选**Show ArkTS Stack Frame。**点击调用栈可以跳转到对应的代码行。

   > 说明
   >
   > 从DevEco Studio 6.0.0 Beta3版本开始，支持查看ArkTS变量，其他变量相关的操作暂不支持。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/qn1HY2AYRs6Yzsq0OQ1svw/zh-cn_image_0000002701823858.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=955AACD576F765276110B686740FB63802A0706A7AF7F251F68D8AEA97F2665B)

5. ArkTS调用C++方法之后的代码存在断点时，点击Resume可以回到下一个ArkTS断点处，继续进行ArkTS代码调试。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/hrqNCLDXTpqpJ4mGhi7uCQ/zh-cn_image_0000002701663936.png?HW-CC-KV=V1&HW-CC-Date=20260915T011703Z&HW-CC-Expire=31536000000&HW-CC-Sign=FE445B859C1D0B843C5AEFF9EF39EE8B8381137DBB6EF0591829C545616F3E64)

