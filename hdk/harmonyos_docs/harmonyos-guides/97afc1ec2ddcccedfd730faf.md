---
name: document/cn/harmonyos-guides/ide-cross-language-debugging
title: 跨语言调试
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-cross-language-debugging
---

# 跨语言调试

DevEco Studio支持C++和ArkTS的跨语言调试，可以同时调试这两种语言。整体操作体验与单一语言调试一致，无需额外在对应语言添加断点，提升了使用两种语言混合开发的调试效率。

1. 将DevEco Studio与设备进行连接。如果使用真机设备，请先对应用/元服务进行签名，具体请参考[为应用/元服务进行签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)。
2. 在菜单栏单击**Run > Edit Configurations** ，选择**Application** 下的模块名（如entry），然后在右侧窗口中选择**Debugger** ，将**Debug type**设置为"Dual(ArkTS/JS + Native)"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2e/v3/BhOQsV2eRG6cERopmmhVoA/zh-cn_image_0000002731543133.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=D618CEFEAB3736DBF3A7CA7C7AC13450C951CF1DC27C6C0000291F7ED844338A)

3. 代码调试执行到ArkTS调用C++方法处，点击Step Into可以进入到对应的C++方法的第一行代码处。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/tpEBR2oKT4GWuWevMPMNIA/zh-cn_image_0000002731383161.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=CA015F36939429B4E0DF06CD9A5B371E60E80C8BF8F43B422EB8292B9F05B912)

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2d/v3/v7lgi8GUQHusFNMG3k8uyA/zh-cn_image_0000002731543131.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=524CA7F9A09B1E9C94D5C9434790C49858A82E973D91C2AB1EA80002283DB362)

4. 进入到C++代码后，可以从左下角Frames区域查看C++的调用栈，如需查看对应的ArkTS调用栈，在Frames区域中单击鼠标右键，勾选**Show ArkTS Stack Frame。**点击调用栈可以跳转到对应的代码行。

   > 说明
   >
   > 从DevEco Studio 6.0.0 Beta3版本开始，支持查看ArkTS变量，其他变量相关的操作暂不支持。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/72/v3/_Tqdnjs8Sban2j1S5Y4KyQ/zh-cn_image_0000002701823858.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=88EC1BDC39560669624808C70677FFAED6FA38D962284A5FDB961C43974A275C)

5. ArkTS调用C++方法之后的代码存在断点时，点击Resume可以回到下一个ArkTS断点处，继续进行ArkTS代码调试。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/87/v3/aU6YFDw2QS6dvWxZpKgtEA/zh-cn_image_0000002701663936.png?HW-CC-KV=V1&HW-CC-Date=20260928T063033Z&HW-CC-Expire=31536000000&HW-CC-Sign=D836C7E51A1BAE9C85A802952A09EBFC1F863502FAD4A93485FFAF080D477061)

