---
name: cangjie-guides/cj-test-instrument-test
title: Instrument Test
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-test-instrument-test
nodePath: 编写与调试应用 / 开发自测试 / 测试框架 / 代码测试 / Instrument Test
---

# Instrument Test

支持纯仓颉HAP和HAR模块下的Instrument Test。

#### 创建Instrument Test测试用例

在新建的纯仓颉HAP或HAR模块下，创建Instrument Test测试用例，其中 **src/ohosTest/cangjie** 是存放测试用例的目录。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0d/v3/bVESSKn4TWSD2ZPevedaaQ/zh-cn_image_0000002743077983.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=24890F4CAA8C049EC99812CE1FB4E4B6A2D515C9B863DB5B2A42D9D50A3DA668)

  1. 在cangjie目录下，单击右键，选择 **New - > Cangjie File**。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/MBbNr1P0R92z_2-HWMzA6g/zh-cn_image_0000002713559022.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=C2E362F19F884F1ACA2D659AFB99D2E5AA86C4BB3B819DB98C2B45E22E98F487)

  2. 在弹出的窗口中输入要创建的文件名，文件名必须以_test结尾。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ed/v3/0jOvvQ0sSFKvh7p3LOkvAQ/zh-cn_image_0000002743197935.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=AB227ABE54837C4BB4F26CF1166879F46653EE9B770422B09789FBAF71A78902)

  3. 打开测试文件，输入测试代码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/rXwVW07qSCyoGpbVldA-2g/zh-cn_image_0000002713399054.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=9D004E6CBDD500532ED25F493F0282C2F2E3847FBB9CCD9506E2224F26102DC9)

  4. 在同一个包目录下的list_test.cj文件中的testsuite函数，注册该测试用例，到此即可完成测试用例创建和注册。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/xXC8CBVmQEGuFnDCDSzaRQ/zh-cn_image_0000002743077985.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=20F53A098AB8BA4A9453C47C50E4579952F6907604BC826A508EED490993C543)




#### 运行测试用例

运行测试用例前，需要将设备与电脑进行连接，将工程编译成带签名信息的HAP，再安装到设备上运行。

  1. 打开新建的测试文件，单击箭头，单击 **Run 'TestExample'** 按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/89/v3/JH8zTBI_Qja2SM8oJbkqkw/zh-cn_image_0000002713559024.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=51D7FFF88B907A82C178F2FCECC7624DCA11977F5A0138F264D58E7231CB507B)

  2. 执行完测试任务后，可查看测试结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/GXgVv87TTFmW6W7OeuLWcQ/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=6373B465FBB06493C261B7CD6B552A07F3A58E1A7142DA6C486860138136E61D)

展示的测试结果中，执行时间以毫秒（ms）为单位，根据四舍五入的规则展示整数部分的时间。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ac/v3/6kA15bvoRq6DSQIy8oZEcg/zh-cn_image_0000002743197937.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=1F03F5699244C3F85C05CA35AC40458307295C604264140C2A22BC4907EC0372)




#### 调试测试用例

打开新建的测试文件，单击箭头，单击 **Debug 'TestExample'** 按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d7/v3/STA3KNMLSXGJqBTfCJZpWQ/zh-cn_image_0000002713399056.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=647F0EE96CFDD5BDF1288A32D654BD9292BADD19621E2CF5122A390227070B9D)

#### 代码覆盖率

  1. 打开新建的测试文件，单击箭头，单击 **Run 'TestExample' with Coverage** 按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/05/v3/hjMxI5KQQ7qHFhfTubIXzw/zh-cn_image_0000002743077987.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=C7D1239A312C2AF90C7272FD26AE97E2E6DCD835459FAE5C6460A84311D46387)

  2. 执行完测试任务后，可在模块的 **.test** 目录下查看覆盖率输出结果，其中 **.test/output** 保存有覆盖率报告。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/de/v3/E63GE_1iR62uf8-J80KwtA/zh-cn_image_0000002713559026.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=A090A09E9D2F81B39C67DD68642C0581EE0018BAD3B5E0D4D56B080BDA5CD9FC)




#### 配置测试用例运行任务

  1. 打开新建的测试文件，单击箭头，单击 **Modify Run Configuration...** 按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a9/v3/TOmN-92_SyGAorn5gb2b8w/zh-cn_image_0000002743197939.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=941AF0307074E36BE739FCE3249FF7D3B6ADA556D3509AE9701C8F242D9DD88D)

  2. 可根据下列提供的可配置项，配置自定义执行用例任务。

     * Name：运行任务的名称，可自定义设置

     * Module：当前工程的模块列表选择

     * Test：固定本次test任务的范围，分别是：

       * All in Package：指定文件夹下包括子文件夹的所有用例
       * Test file：指定文件下所有用例
       * Class：指定文件下的某个大类下的所有用例
       * Method：指定文件下的某个大类下的某个小用例

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/qgq5XKSOTq-weu0HBjAhuw/zh-cn_image_0000002713399058.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=B74BDFB58A5F546F1591C9DC54E9E6E1C76C57761368DE5C067C27E30C29A0F0)

  3. 在完成自定义执行用例任务配置后，在DevEco Studio右上角任务列表中可选择创建的自定义任务，并执行运行、调试、覆盖率生成等运行操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/JO1t0yGvQx-IHqptkV90DA/zh-cn_image_0000002743077989.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=043AFEB7A761387BCB5472E93E50B176BD72EC842356D617A2A599E5FD32500C)



