---
name: document/cn/doc-guides/ohos-openharmony-test-framework-0000001263160453
title: OpenHarmony测试框架
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/ohos-openharmony-test-framework-0000001263160453
source: portal
---

# OpenHarmony测试框架

DevEco Studio支持OpenHarmony应用/服务的自动化测试框架，提供测试用例执行能力，提供用例编写基础接口，输出测试结果，支持用户开发简洁易用的自动化测试脚本。

JS、eTS的操作步骤相同，以下以eTS为例介绍创建测试用例、运行测试用例。

#### 创建测试用例

     1. 在工程目录下打开待测试模块下的ets文件，将光标置于代码中任意位置，单击**右键 > Show Context Actions**** > Create Ohos Test**或快捷键**Alt+enter**** > Create Ohos Test**创建测试类。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113507.01053235281011278167439651978557:50001231000000:2800:DAFFD0EBC7327236FC10919F1E8407AEF65229E0596B7D343165D90DE3FE1694.png?needInitFileName=true?needInitFileName=true)

     2. 在弹出的Create Ohos Test窗口，输入或选择如下参数。
        * **Testing Type** ：测试类型，默认为DECC-ETSUnit，JS语言默认为DECC-JSUnit
        * **Ets name** ：创建的测试套件名称。测试套件为包含了测试用例的文件。测试套件名称要求在工程目录范围内具有唯一性，且不能使用逗号、横线、空格以及\ / : * ? “”< > | （）&等特殊字符。
        * **Destination package** ：测试套件存放的位置，建议存放在待测试模块的test目录下。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113507.06107051374659193602682539328687:50001231000000:2800:C6892CFD7C929048115DE7C0C9C1339E18AF3C68195A4055F88EC993743A713E.png?needInitFileName=true?needInitFileName=true)

     3. DevEco Studio在ohosTest目录下自动生成对应的测试类。在测试类中，DevEco Studio会生成对应方法的用例模板，具体测试代码需要开发者根据业务逻辑进行开发，具体请参考：[单元测试框架](https://gitee.com/openharmony/arkXtest/blob/master/README_zh.md#单元测试框架功能特性)和[UI测试框架](https://gitee.com/openharmony/arkXtest/blob/master/README_zh.md#ui测试框架功能特性)

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113507.78658980131913502785489098165874:50001231000000:2800:E2F133C681F3127D891286F86901CD9C097415724662887A9C401FF8B21835BB.png?needInitFileName=true?needInitFileName=true)

您也可以手动在ohosTest > ets > test文件夹下创建测试用例，手动创建后，需要在List.test.ets文件中添加创建的用例类。

测试用例名称应保持唯一性，并且不能使用逗号、横线、空格以及\ / : * ? “”< > | （）&等特殊字符。

#### 运行测试用例

使用DevEco Studio运行测试用例前，需要将设备与电脑进行连接，将工程编译成带签名信息的Hap包，再安装到真机设备上运行，具体请参考[应用/服务运行](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/ohos-running-app-0000001218760598)。

运行测试用例，可以采用如下几种方式来运行。
     * 在工程目录中，单击**右键 > Run'测试类名称'**，执行测试。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113507.47387526279770885635741026974545:50001231000000:2800:AD4A4A70043725F1F9E1634AAA0F3CBF93AAFCB2E7CD2985DA408AAD35314492.png?needInitFileName=true?needInitFileName=true)

     * 打开测试套件，单击对应方法左侧按钮。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113507.95875645609434613407941488440254:50001231000000:2800:5EC124EAC97EDACB7AE62EA1327C6575988D124004D5F0E29A14292A004111FB.png?needInitFileName=true?needInitFileName=true)

     * 如果要根据自定义的配置执行Ohos Test，在[创建测试用例运行任务](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/ohos-openharmony-test-framework-0000001263160453#section94251449131411)后，通过如下方式的其中之一，执行Ohos Test：
       * 在工具栏主菜单单击**Run > Run'测试名称'**。
       * 在DevEco Studio的右上角，选择测试任务，然后单击右侧的![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113507.12412751906222157485228569883083:50001231000000:2800:CB8ACC6F0598E1C1596007799F2173843B4E39E2A8A832F08B70D0CC875F627F.png?needInitFileName=true?needInitFileName=true)按钮，执行Ohos Test。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113507.99832196488222009883175352490577:50001231000000:2800:194A2BC61AF6C5B2C5C99FC5E81E7249E644FDAD20DD0720CCB0D35B51255780.png?needInitFileName=true?needInitFileName=true)

执行完测试任务后，查看测试结果。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113507.80604956111406580620778851397943:50001231000000:2800:5C0407BC502EBE2A3B55797425756313DD3B1699B08744C8C4EB494DDEAA5D0A.png?needInitFileName=true?needInitFileName=true)

#### 创建测试用例运行任务

可选操作，默认情况下，测试用例可直接运行，如果需要自定义测试用例运行任务，可通过如下方法进行设置。

     1. 在工具栏主菜单单击**Run** >**Edit Configurations** 进入Run/Debug Configurations界面。
     2. 在**Run/Debug Configurations** 界面，单击+按钮，在弹出的下拉菜单中，单击OpenHarmony Test。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113507.77859728658870987289115175753287:50001231000000:2800:49BE32A3AAF380522DC6085E3EB9A65358CE5533D2A1D10E21F9475E7F8F872B.png?needInitFileName=true?needInitFileName=true)

     3. 根据实际情况，配置Ohos Test的运行参数。 然后单击**OK** ，完成配置。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113507.82957787873254276591869227555686:50001231000000:2800:093400BF0682A934DA4DBAEC3D7292AF28EE3C86F6F6463D4AC58B70BEBBBC86.png?needInitFileName=true?needInitFileName=true)
