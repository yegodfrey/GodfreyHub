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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/85/v3/58QF0s92Qkuly25Wk5wEJw/zh-cn_image_0000002701659746.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=92234374661EE317CAD83AB9960E32EE8C8EF24267576FBF6B4C0A8A07288FDF)

  1. 在cangjie目录下，单击右键，选择 **New - > Cangjie File**。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/WsNqxlaESdCjs6Sa8rfbSg/zh-cn_image_0000002731378961.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=47450EF9FEE34F7766A9AE4606408D1423DE0CB6A2C22B783C171A95F0F96672)

  2. 在弹出的窗口中输入要创建的文件名，文件名必须以_test结尾。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c6/v3/UqWJqbPZRNm2LbT2WiyWPg/zh-cn_image_0000002701819656.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=5D285FB3E20AA389C06CD3AF0C11F817AB1C70DDDC3BC9704D5A653C0D0B10BB)

  3. 打开测试文件，输入测试代码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5a/v3/0_LyoYGATRSafzYftdmDQw/zh-cn_image_0000002731538937.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=61757E03DEF0BCFB01CB411872B6BAA8D58B3A4E1EB088F7EBA2255AB8E69476)

  4. 在同一个包目录下的list_test.cj文件中的testsuite函数，注册该测试用例，到此即可完成测试用例创建和注册。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/47/v3/_4tz6KNWRvWqvn9ku8gD1w/zh-cn_image_0000002701659748.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=A9E46B4A5CE58CF3CCDD844EF8B87C6A71EDC983E55146766553C184210455BA)




#### 运行测试用例

运行测试用例前，需要将设备与电脑进行连接，将工程编译成带签名信息的HAP，再安装到设备上运行。

  1. 打开新建的测试文件，单击箭头，单击 **Run 'TestExample'** 按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/Kz1YVtTwSTynho1g97KcEA/zh-cn_image_0000002731378963.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=5CD7ECD53608E6D1E38D45BFDD9BB74544BCA00E4D9C34366DA8C5298C8A5FDE)

  2. 执行完测试任务后，可查看测试结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2c/v3/n1uFTQeESCuuCAG090x0bw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=8E7048A01E4715F0BDD9FE0E7748DE8DEB98C0C4B49D2ED2AE975C6D23CBA381)

展示的测试结果中，执行时间以毫秒（ms）为单位，根据四舍五入的规则展示整数部分的时间。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6d/v3/pk1cfu7CThiWybKOvctrLw/zh-cn_image_0000002701819658.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=F48CA97C64ADBC77C184C26FFD9D6F12F8FAB97BE9DC5FDA75CBFE9CD6D8876F)




#### 调试测试用例

打开新建的测试文件，单击箭头，单击 **Debug 'TestExample'** 按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/bNmsfKbOTomS04USq58bdg/zh-cn_image_0000002731538939.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=15DEAC1EC5BB11AD40097F1E148F1B8F34E2C950E852CA5039B3963ABF0BA027)

#### 代码覆盖率

  1. 打开新建的测试文件，单击箭头，单击 **Run 'TestExample' with Coverage** 按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/de/v3/XIH9z43qSFOcPaQfNiq5IA/zh-cn_image_0000002701659750.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=04FBFC14219177DE1B2AADE044A7A5292A63948DB834D240AE14B83E3C175496)

  2. 执行完测试任务后，可在模块的 **.test** 目录下查看覆盖率输出结果，其中 **.test/output** 保存有覆盖率报告。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/MEbbDYylQ8av4oIEVKqKAg/zh-cn_image_0000002731378965.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=74907DA0DCCBEA76C1919C890C0A20A5AC76724D2CA18AB83F5F30C1BDB3D310)




#### 配置测试用例运行任务

  1. 打开新建的测试文件，单击箭头，单击 **Modify Run Configuration...** 按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/44/v3/ugbiw_6WTdinG-eus9gApg/zh-cn_image_0000002701819660.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=7D7FABFB714F6F4DFF474458BE542B0132E5D7BF7BD847DD3986F5A985A23862)

  2. 可根据下列提供的可配置项，配置自定义执行用例任务。

     * Name：运行任务的名称，可自定义设置

     * Module：当前工程的模块列表选择

     * Test：固定本次test任务的范围，分别是：

       * All in Package：指定文件夹下包括子文件夹的所有用例
       * Test file：指定文件下所有用例
       * Class：指定文件下的某个大类下的所有用例
       * Method：指定文件下的某个大类下的某个小用例

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/QaI0KYjZQWCjK3PREdxphQ/zh-cn_image_0000002731538941.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=BF658BBC8DCE934E7E7A30F369FD0F29161714C5CFFC964391AC3A759D3C33C8)

  3. 在完成自定义执行用例任务配置后，在DevEco Studio右上角任务列表中可选择创建的自定义任务，并执行运行、调试、覆盖率生成等运行操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/IVUZhPKPSC-adc0184kmaQ/zh-cn_image_0000002701659752.png?HW-CC-KV=V1&HW-CC-Date=20260903T111621Z&HW-CC-Expire=86400&HW-CC-Sign=1D8C3BD463E3466327457897DE41D8A54B1A49E0892C0FB445A00453BB2BC3B4)



