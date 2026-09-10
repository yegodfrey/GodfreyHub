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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/de/v3/10Y4bmReT1eVagJmR6h3qQ/zh-cn_image_0000002713559028.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=AD382ACC0FCB5087429012D63BF35F6854EC60B810761EE20BF16A236062EB09)

  1. 在cangjie目录下，单击右键，选择 **New - > Cangjie File**。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/93/v3/gmy29EzZQWa3WXL8CtkM7g/zh-cn_image_0000002743197941.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=973C0A29EB95F7B7DB5CCF6E8AEF3390FBA9CCB3F0C0F0BA6663F596D3CB7BC0)

  2. 在弹出的窗口中输入要创建的文件名，文件名必须以_test结尾。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fe/v3/dK7KircKSOGv1HI298yZjQ/zh-cn_image_0000002743197935.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=71493F26629A5063795F5AFC05D58801C4C3C589B5C8547731BA7CFCE1A51EF0)

  3. 打开测试文件，输入测试代码。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/79/v3/MS17BJ8aSRW8qJyzmb5rGw/zh-cn_image_0000002713399060.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=8DFBB08220D79A40DCA0604472834E97A9FA5E66CD24D0ABD8E8304412D18049)




#### 运行测试用例

  1. 打开新建的测试文件，单击箭头，单击 **Run 'TestExample'** 按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/a-V7AFUrQD64_lvuTfdGOg/zh-cn_image_0000002713559024.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=693E1670330854F0862A2FD9E07E70DE1FB1CFB3848EC16EF0DE5F573BBD1077)

  2. 执行完测试任务后，可查看测试结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/83/v3/-K_-6swYRgeZWkirFIKE-A/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=F38597D8BE8BEBBB173EA0C8CC677517231DB5D329751F641B18972C25742AD9)

展示的测试结果中，执行时间以毫秒（ms）为单位，根据四舍五入的规则展示整数部分的时间。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/fcP5jEWsTvmrLy6R33oRrg/zh-cn_image_0000002743077991.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=2E514195719AD2A60163B7CF3862D6EEC83CA66F0ECD0A3D54440840C27F6003)




#### 调试测试用例

打开新建的测试文件，单击箭头，单击 **Debug 'TestExample'** 按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/VIJ-8C8yTay7jwWWbRfKUw/zh-cn_image_0000002713399056.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=2D77AF025B1E0BF658BDEBE1FB33643DF2D82CBDA1F807324BD0DCEE3AA5CD1C)

#### 代码覆盖率

  1. 打开新建的测试文件，单击箭头，单击 **Run 'TestExample' with Coverage** 按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/BMYV4IY5QB-e69l5VGTZRw/zh-cn_image_0000002743077987.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=8899CC25A95716EAF033342DFC2921F759C3977D8E1E4720B4A906696A366EE4)

  2. 执行完测试任务后，可在模块的 **.test** 目录下查看覆盖率输出结果，其中 **.test/output** 保存有覆盖率报告。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/StvwRLmjQDyhhDkNklmloQ/zh-cn_image_0000002713559030.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=A9BAF97A74314F26226F5E8D6ED7670A84706D107F674EFB1D41AA969E8E44EC)




#### 配置测试用例运行任务

  1. 打开新建的测试文件，单击箭头，单击 **Modify Run Configuration...** 按钮。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ba/v3/RnNPejfkQYae8lF0dxA5AA/zh-cn_image_0000002743197939.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=2A4F70AE0EE8B3D237D1C17BC97F7D6ABAC7CD54AC76675284F19BEC5171081F)

  2. 可根据下列提供的可配置项，配置自定义执行用例任务。

     * Name：运行任务的名称，可自定义设置
     * Module：当前工程的模块列表选择
     * Test：固定本次test任务的范围，分别是：
       * All in Package：指定文件夹下包括子文件夹的所有用例
       * Test file：指定文件下所有用例
       * Class：指定文件下的某个大类下的所有用例
       * Method：指定文件下的某个大类下的某个小用例

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/6b/v3/sAlBeOyTSE-DMmUkiiqj-w/zh-cn_image_0000002743197943.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=BFE84FDC439EA26E2310EE996019AB157945B282F491E1AA8AAC8F578772B12D)

  3. 在完成自定义执行用例任务配置后，在DevEco Studio右上角任务列表中可选择创建的自定义任务，并执行运行、调试、覆盖率生成等运行操作。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4a/v3/EPy9zqi6ToWCkvALCDioPg/zh-cn_image_0000002743077989.png?HW-CC-KV=V1&HW-CC-Date=20260908T090136Z&HW-CC-Expire=86400&HW-CC-Sign=CD9AF1445825A0F2E1278561E07D9F593D95DC5E6A2D0133493AFF86800E1A28)



