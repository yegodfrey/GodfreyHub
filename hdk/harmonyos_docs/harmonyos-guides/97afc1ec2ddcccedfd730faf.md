---
name: document/cn/harmonyos-guides/ide-cross-language-debugging
title: 跨语言调试
uri: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-cross-language-debugging
---

# 跨语言调试

DevEco Studio支持C++和ArkTS的跨语言调试，可以同时调试这两种语言。整体操作体验与单一语言调试一致，无需额外在对应语言添加断点，提升了使用两种语言混合开发的调试效率。

1. 将DevEco Studio与设备进行连接。如果使用真机设备，请先对应用/元服务进行签名，具体请参考[为应用/元服务进行签名](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-signing)。
2. 在菜单栏单击**Run > Edit Configurations** ，选择**Application** 下的模块名（如entry），然后在右侧窗口中选择**Debugger** ，将**Debug type**设置为"Dual(ArkTS/JS + Native)"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9e/v3/ieYHSdayRvGipTmfb_DnqQ/zh-cn_image_0000002731543133.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=281B3D53F5D0C817BD3DE897E9BD675F3E235E753C421E7BFD7FD1FEB62FCA19)

3. 代码调试执行到ArkTS调用C++方法处，点击Step Into可以进入到对应的C++方法的第一行代码处。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/U3_qknS5TSS6kMj2bbtBnw/zh-cn_image_0000002731383161.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=8DE1DEEC79EDDC8459D25AB3F8DB52ADE0AFBD22E99C5885F71F67C6D5E455DE)

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/MZSATUFRQbavZmOATre98A/zh-cn_image_0000002731543131.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=987D345C9258633056BE0AC050284E60FBF130A6DDE9F5E027E8031B327D45B9)

4. 进入到C++代码后，可以从左下角Frames区域查看C++的调用栈，如需查看对应的ArkTS调用栈，在Frames区域中单击鼠标右键，勾选**Show ArkTS Stack Frame。**点击调用栈可以跳转到对应的代码行。

   > 说明
   >
   > 从DevEco Studio 6.0.0 Beta3版本开始，支持查看ArkTS变量，其他变量相关的操作暂不支持。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e2/v3/MrqA4M6eSaiS1jIpNJ3TGw/zh-cn_image_0000002701823858.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=764476B3871F071E280BEE08D6809CDA7A9306EEF22AA56F502FC30B44193C7B)

5. ArkTS调用C++方法之后的代码存在断点时，点击Resume可以回到下一个ArkTS断点处，继续进行ArkTS代码调试。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9a/v3/fsn15llEQ_e72aYihFW-0w/zh-cn_image_0000002701663936.png?HW-CC-KV=V1&HW-CC-Date=20261010T073010Z&HW-CC-Expire=31536000000&HW-CC-Sign=A816AC2EE0889CA9DF51DF468458E1D16A67AFC1368CC1A7C25AE557BAB0CD17)

