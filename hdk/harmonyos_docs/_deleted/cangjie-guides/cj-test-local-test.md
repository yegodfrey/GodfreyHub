---
name: cangjie-guides/cj-test-local-test
title: Local Test
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-test-local-test
nodePath: 编写与调试应用 / 开发自测试 / 测试框架 / 代码测试 / Local Test
---

# Local Test

支持纯仓颉HAP和HAR模块下的Local Test。

#### 创建Local Test测试用例

在新建的纯仓颉HAP或HAR模块下，创建Local Test测试用例，其中 **src/test/cangjie** 是存放测试用例的目录。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b/v3/s4UdnsOYQYesYD58emXRKQ/zh-cn_image_0000002731378967.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=EBE6C7090D8F60AE26827F5D6C5C04D6A84EE0C0B5BC290F955FCF055534D00F)

  1. 在cangjie目录下，单击右键，选择 **New - > Cangjie File**。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7d/v3/ciZkgcNjTtmLXic9RnVbWw/zh-cn_image_0000002701819662.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=B563206A9682DEEF63188EF8AF4968715937C145352EBFD026D68672F3C624ED)

  2. 在弹出的窗口中输入要创建的文件名，文件名必须以_test结尾。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/68/v3/Iq38twGKSi2RymPNOrLrdg/zh-cn_image_0000002701819656.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=63B41D973E67C2B1AE098E3B0BCDD93869E4C9EC6B8CDC7A8099536985615958)

  3. 打开测试文件，输入测试代码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ce/v3/m6CPe6wFTaWNaW1CZujkaQ/zh-cn_image_0000002731538943.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=781AC02893506F527837AB771176EB8149D6176E5C7BA2F43981FFD38D2801EA)




#### 运行测试用例

  1. 打开新建的测试文件，单击箭头，单击 **Run 'TestExample'** 按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b2/v3/ZFpvI4QVQW2LklCzcXnHhQ/zh-cn_image_0000002731378963.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=7BC53050A80F314062B08BC7389CE8C708C674A7BB7078A57FE2B8F3D84416B5)

  2. 执行完测试任务后，可查看测试结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/rV5RJN0kTX2kx15luqKisw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=7DAFF058FF0A26182C82728445E33B897778484D55F0007FD44806AECD341B44)

展示的测试结果中，执行时间以毫秒（ms）为单位，根据四舍五入的规则展示整数部分的时间。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8d/v3/8BN74v2xSu6UOs439X3ZyA/zh-cn_image_0000002701659754.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=CC460BCA8660480B8D710848B06A1441A8AEA493BA720DE580E980E599E3201D)




#### 调试测试用例

打开新建的测试文件，单击箭头，单击 **Debug 'TestExample'** 按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/37/v3/CcuQ9R2HRW6TiM4bgbq8Rg/zh-cn_image_0000002731538939.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=E380818DA80904B47FDB7F361E5530E539295A40473A33248612D67CC680F15D)

#### 代码覆盖率

  1. 打开新建的测试文件，单击箭头，单击 **Run 'TestExample' with Coverage** 按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/cUJxVcfcRRKprLZyE4OGIQ/zh-cn_image_0000002701659750.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=7D775864DFC60157B1BA8F90940E439584D3673A8E22F6F75AEAC8422EAA6503)

  2. 执行完测试任务后，可在模块的 **.test** 目录下查看覆盖率输出结果，其中 **.test/output** 保存有覆盖率报告。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bd/v3/ErRufmoLRSK17CjX2EUuRg/zh-cn_image_0000002731378969.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=D850F243B9F491DB6D44393529144254A4184FA75422EC6AC16E96BEC58509C0)




#### 配置测试用例运行任务

  1. 打开新建的测试文件，单击箭头，单击 **Modify Run Configuration...** 按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/-RJiLRu5TrCII-qo5B6keA/zh-cn_image_0000002701819660.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=BF304AEF35AD8B09786A1E509154615038480EDCEADFA61E4AF800C8F4705691)

  2. 可根据下列提供的可配置项，配置自定义执行用例任务。

     * Name：运行任务的名称，可自定义设置
     * Module：当前工程的模块列表选择
     * Test：固定本次test任务的范围，分别是：
       * All in Package：指定文件夹下包括子文件夹的所有用例
       * Test file：指定文件下所有用例
       * Class：指定文件下的某个大类下的所有用例
       * Method：指定文件下的某个大类下的某个小用例

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/q-JXHla7S2GU382scpoM_Q/zh-cn_image_0000002701819664.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=3B19DB95800F64CC9FB65C32037E32266600E6F6504894B79B587ADE98E8CBBB)

  3. 在完成自定义执行用例任务配置后，在DevEco Studio右上角任务列表中可选择创建的自定义任务，并执行运行、调试、覆盖率生成等运行操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b9/v3/OpkmBvbaR960Kspix5VXoQ/zh-cn_image_0000002701659752.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=E75EE2C8ECC72CDA9C496031B28851B4BA8284B8ACAB74475D2B82CC2332C05B)



