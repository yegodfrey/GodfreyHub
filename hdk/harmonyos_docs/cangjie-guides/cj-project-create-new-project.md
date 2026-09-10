---
name: cangjie-guides/cj-project-create-new-project
title: 创建一个新的工程
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-project-create-new-project
nodePath: 开发环境搭建 / 工程创建 / 创建一个新的工程
---

# 创建一个新的工程

当您开始开发一个仓颉应用时，首先需要根据工程创建向导，创建一个新的仓颉工程，工具会自动生成对应的代码和资源模板。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/84/v3/EKWSyujuTr6Wx2Q_YEYXxA/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090134Z&HW-CC-Expire=86400&HW-CC-Sign=9D42C333531E2E910C8B4D28AE8101CD2B270CCA108F200ABB17D3ED5D0150D4)

在运行DevEco Studio工程时，建议每一个运行窗口有2GB以上的可用内存空间。

#### 创建和配置新工程

DevEco Studio提供了基础的仓颉工程模板资源，不同模板支持的设备类型、API Version可能不同，在创建新工程前，请提前了解各模板的相关信息，具体请参考工程模板介绍。

#### [h2]创建仓颉工程

  1. 通过如下两种方式，打开工程创建向导界面。

     * 如果当前未打开任何工程，可以在DevEco Studio的欢迎页，选择**Create Project** 开始创建一个新工程。
     * 如果已经打开了工程，可以在菜单栏选择**File > New > Create Project**来创建一个新工程。
  2. 根据工程创建向导，选择 **[Cangjie] Empty Ability** 或 **[Cangjie] Hybrid Ability** 模板。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/NN2CyQDjTDa1Jz4H4EWzbg/zh-cn_image_0000002743197505.png?HW-CC-KV=V1&HW-CC-Date=20260908T090134Z&HW-CC-Expire=86400&HW-CC-Sign=15F1DD6E0AC66F071F6F78116154CC01FE707E4814E237C5B0526145AF405203)

  3. 在工程配置页面，需要根据向导配置工程的基本信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/f9M82NXETL6aWhorVluLUA/zh-cn_image_0000002713398624.png?HW-CC-KV=V1&HW-CC-Date=20260908T090134Z&HW-CC-Expire=86400&HW-CC-Sign=AA46464590AD41EC87253B8A117246E4199578BCF167832884D84322CB446C61)

     * **Project name** ：工程的名称，可以自定义，由大小写字母、数字和下划线组成。

     * **Bundle name** ：标识应用的包名，用于标识应用的唯一性。

应用包名要求：

       * 必须为以点号（.）分隔的字符串，且至少包含三段，每段中仅允许使用英文字母、数字、下划线（_），如“com.example.myapplication ”。
       * 首段以英文字母开头，非首段以数字或英文字母开头，每一段以数字或者英文字母结尾，如“com.01example.myapplication”。
       * 不允许多个点号（.）连续出现，如“com.example..myapplication ”。
       * 长度为7~128个字符。
     * **Save location** ：工程文件本地存储路径，由大小写字母、数字和下划线等组成，不能包含中文字符。

     * **Compatible SDK** ：兼容的最低 API Version。

     * **Module name** ： 模块的名称。

     * **Device type** ：该工程模板支持的设备类型。

对于开发应用过程中使用的某个API所支持的设备类型，可以通过下述方式进行查询：

       1. 在编辑器使用该API的位置，通过语言服务的点击跳转能力（windows：Ctrl + B；mac：command + B）跳转至cj.d文件中该API的声明位置。
       2. 通过API声明位置的注释头中syscap字段获取该API的syscap标签，比如：SystemCapability.Communication.NFC.CardEmulation。
       3. 在DevEco的SDK中查看所有设备支持的syscap能力，具体位置为:
          * hms: deveco-studio\sdk\default\hms\ets\api\device-define
          * ohos: deveco-studio\sdk\default\openharmony\ets\api\device-define
       4. 查找hms目录，按照设备类型{A}，同时查找{A}.json文件及{A}-hmos.json文件。

设备类型{A}支持的syscap规则如下：

          * 若上述两个文件同时存在，则设备{A}支持的syscap是{A}.json和{A}-hmos.json文件中列出的syscap并集。
          * 若上述只存在{A}-hmos.json文件，则需在ohos的目录下查找{A}.json文件，若找到则设备{A}支持的syscap是hms/{A}-hmos.json和ohos/{A}.json文件中列出的syscap并集，否则设备{A}只支持hms/{A}-hmos.json中的syscap。
          * 若上述只存在{A}.json文件，则设备{A}只支持hms/{A}.json中的syscap。

       5. 查看该API的syscap标签是否在设备类型{A}所支持的syscap集合中。
  4. 单击 **Finish** ，工具会自动生成示例代码和相关资源，等待工程初始化，完成新工程创建。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/57/v3/ETTx6-lRS6uyv56k3sKkEQ/zh-cn_image_0000002713398996.png?HW-CC-KV=V1&HW-CC-Date=20260908T090134Z&HW-CC-Expire=86400&HW-CC-Sign=E6445F99126C649F35AD5D4DF4C16A8F5BE3176A49838990C95D9F42422EA363)



