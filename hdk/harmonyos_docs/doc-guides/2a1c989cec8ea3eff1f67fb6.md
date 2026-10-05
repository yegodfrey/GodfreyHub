---
name: document/cn/doc-guides/ohos-debugging-and-running-0000001263040487
title: 使用真机进行调试
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/ohos-debugging-and-running-0000001263040487
source: portal
---

# 使用真机进行调试

#### 调试流程

DevEco Studio提供了丰富的OpenHarmony应用/服务调试能力，帮助开发者更方便、高效的调试应用/服务。

OpenHarmony应用/服务调试支持使用真机设备调试。使用真机设备进行调试前，需要对HAP进行签名后进行调试。详细的调试流程如下图所示：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113503.86521810087160880688550552205126:50001231000000:2800:DDEA858837C2564A753EA6E8618FF2EE878C2B5ABF5B845BBBE122A2C9E3A076.png?needInitFileName=true?needInitFileName=true)

#### 配置签名信息

应用/服务在真机设备上运行，需要提前为应用/服务进行签名，DevEco Studio为开发者提供了自动化签名方案，可以一键完成应用/服务签名。请注意，自动化签名功能仅用于应用/服务调试阶段使用，不可用于发布上架应用市场。具体操作如下：

单击**File**** > ****Project Structure > ****Project > Signing** **Configs** 界面勾选“**Automatically generate signature** ”，等待自动签名完成即可，单击“**OK** ”。如下图所示：

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113503.72522048731996377416251463838326:50001231000000:2800:7DF12E2E4F506035A3466E093F02C0634142E92447764516889CF3B67140882A.png?needInitFileName=true?needInitFileName=true)

如果您的应用/服务使用了“system_basic”和“system_core”权限，请参考[修改应用权限等级](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/ohos-auto-configuring-signature-information-0000001271659465#section42735161005)修改签名模板。您使用到的应用权限，可以在自动化签名完成后，单击**Show Restricted Permissions** 进行查看。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113503.20507468063356538775704824853485:50001231000000:2800:413410580EEC4ABF2739D3D63BA7B77577C26DC797734626C72170F82E8C0631.png?needInitFileName=true?needInitFileName=true)

#### 调试设置

#### [h2]设置调试代码类型

OpenHarmony支持eTS、JS和C/C++代码调试，默认情况下调试器支持的调试类型为Js Only，支持调试eTS和JS代码。如果需要调试C/C++代码，请将调试器的调试类型选择Native Only。

修改调试类型的方法如下。

点击**Run > Edit Configurations > Debugger**，在OpenHarmony App中，选择相应模块，设置Debug type即可。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113503.92413743225385280991175932992032:50001231000000:2800:F58BB39BEA1D99C2F92D5B5C71D0EE18BD6B3E02D9DEA4F587F82ABA02FDDAE8.png?needInitFileName=true?needInitFileName=true)

#### [h2]设置HAP包安装方式

在调试阶段，HAP包在设备上的安装方式有2种，可以根据实际需要进行设置。

     * 安装方式一：先卸载应用/服务后，再重新安装，该方式会清除设备上的所有应用/服务缓存数据（**默认安装方式** ）。
     * 安装方式二：采用覆盖安装方式，不卸载应用/服务，该方式会保留应用/服务的缓存数据。

设置方法如下：

单击**Run > Edit Configurations**，设置指定模块的HAP包安装方式，勾选**Keep Application Data** ，则表示采用覆盖安装方式，保留应用/服务缓存数据。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113503.59817978393124152860739676703059:50001231000000:2800:56E5E268CB87EAE8B65363DC0A6ED42798CF9A69121939F83245CAA4E1B0C652.png?needInitFileName=true?needInitFileName=true)

#### [h2]设置多HAP包安装

如果工程中同时存在多个模块，且您的应用/服务存在跨模块间的调用时，在调试阶段需要同时安装多个模块的HAP包到设备中。此时，需要在任意模块的设置项中勾选**Deploy Multi Hap Packages** ，启动调试时，DevEco Studio会将所有的模块都安装到设备上。

设置方法如下：

单击**Run > Edit Configurations**，在OpenHarmony App下，建议在entry模块下，勾选**Deploy Multi Hap Packages** 。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113503.15563950075356819425348267444132:50001231000000:2800:3595E046B346A36CC481A111C5B41A9E0F1A10FF5B996B0D200EF3149A5DE0BB.png?needInitFileName=true?needInitFileName=true)

在启动调试时，请选择勾选了**Deploy Multi Hap Packages** 的模块（如上图中的entry），然后再启动调试。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.06400965033291893367683909586679:50001231000000:2800:3346D890906F11368FEA06A0E1B25EE37FC3B9C189E8F5AA6B3E31DBB80662D2.png?needInitFileName=true?needInitFileName=true)

#### 启动调试

     1. 在工具栏中，选择调试的设备，并单击**Debug** ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.89308084998819734253002799687978:50001231000000:2800:5338E5BC7F310A5D840A11CA0628F3085A5E7B5D1732ECE12FD2BE4B208ECD12.png?needInitFileName=true?needInitFileName=true)或**Attach Debugger to Process**![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.52880410620241631939444254252566:50001231000000:2800:AC3618A6D950767D2149B1CFA6180902B3F491298E7F3A10E79440F069DC1F25.png?needInitFileName=true?needInitFileName=true) 启动调试。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.50775643974851874994916563627353:50001231000000:2800:9125FBEE004A983A2980ED1F044E41265407D0D4C3AC600202505B5B28B783C5.png?needInitFileName=true?needInitFileName=true)

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.12996678375504515143391128337698:50001231000000:2800:45E4942726B23B8A2BA27EABE08D53D1D602A22EBC78F63745F5932091FCDFD2.png?needInitFileName=true?needInitFileName=true)

Debug和Attach Debugger的区别在于，Attach Debugger to Process可以先运行应用/服务，然后再启动调试，或者直接启动设备上已安装的应用/服务进行调试；而Debug是直接运行应用/服务后立即启动调试。

     2. 如果需要设置断点调试，则需要选定要设置断点的有效代码行，在行号（比如：5行）的区域后，单击鼠标左键设置断点（如图示的红点）。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.15889446125665851128673384631637:50001231000000:2800:597C03DB4724D2B68A353AA5975C99BA8D7C55E65B6596DA715F18D885D34E59.png?needInitFileName=true?needInitFileName=true)

设置断点后，调试能够在正确的断点处中断，并高亮显示该行。

     3. 启动调试后，开发者可以通过调试器进行代码调试。调试器的功能说明如下表所示：

**表1** 调试器按钮按钮 | 名称 | 快捷键 | 功能  
---|---|---|---  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.20565963071514405432016922180562:50001231000000:2800:6275D16F8FBC74DC79B42127B5D63EA87F6F84395C7C8FC792A9CE0B0448717E.png?needInitFileName=true?needInitFileName=true) | Resume Program | **F9** （macOS为**Option+Command+R** ） | 当程序执行到断点时停止执行，单击此按钮程序继续执行。  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.95179233165020648156837998611808:50001231000000:2800:A6F130061E9FC8D50E0155F6828E4F2B642D2669FBB93295B69DEF53026DAC48.png?needInitFileName=true?needInitFileName=true) | Step Over | **F8** （macOS为**F8** ） | 在单步调试时，直接前进到下一行（如果在函数中存在子函数时，不会进入子函数内单步执行，而是将整个子函数当作一步执行）。  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.17645193335217375952124689822156:50001231000000:2800:3D69AD52053FB0600BB14B63C95817BBAAD5DEAB872B1CDC1221BD59AADE848B.png?needInitFileName=true?needInitFileName=true) | Step Into | **F7** （macOS为**F7** ） | 在单步调试时，遇到子函数后，进入子函数并继续单步执行。  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.25129189949483810735613484425810:50001231000000:2800:A67033B7C74A912AAAB98A8CB7EA3398359602910DE2D734FBCFFBC6497B716C.png?needInitFileName=true?needInitFileName=true) | Step Out | **Shift+F8** （macOS为**Shift+F8** ） | 在单步调试执行到子函数内时，单击Step Out会执行完子函数剩余部分，并跳出返回到上一层函数。  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.86679141773152858362384306941160:50001231000000:2800:0CD887502D645298FC2F62F7FB2D349F9A98F913ED8630D479C09185ADC48FAA.png?needInitFileName=true?needInitFileName=true) | Stop | **Ctrl+F2** （macOS为**Command+F2** ） | 停止调试任务。  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.38901423592142686766770828956873:50001231000000:2800:BFB69377C6420819CE9A694C25EDFD27F6D37E9BF61C17886DA2ADD21186A6C7.png?needInitFileName=true?needInitFileName=true) | Run To Cursor | **Alt+F9** （macOS为**Option+F9** ） | 断点执行到鼠标停留处。  
  
#### 断点管理

在设置的程序断点红点处，单击鼠标右键，然后单击**More** 或按快捷键**Ctrl+Shift+F8** （macOS为**Shift+Command+F8** ），可以管理断点。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113504.70221846180572574356564471671802:50001231000000:2800:D81D67B833C53444D88F1D6CFE3398EF7D12E034E25C31E974E38583CB47E7F0.png?needInitFileName=true?needInitFileName=true)

**表2** 不同代码类型的断点管理功能代码类型 | 断点管理  
---|---  
JS（JavaScript）、eTS | 
     * 普通行断点
     * Exception（异常）断点  
C/C++ | 
     * 普通行断点
     * Exception（异常）断点
     * Symbolic（符号）断点
