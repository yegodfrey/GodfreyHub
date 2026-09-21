---
name: document/cn/AppGallery-connect-Guides/smartperf-tool-device-haromnyos-0000002086884884
title: HarmonyOS 5.0及以上游戏
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/smartperf-tool-device-haromnyos-0000002086884884
---

# HarmonyOS 5.0及以上游戏

## 采集性能数据

1. 在手机/平板端点击桌面SmartPerf应用图标打开HiSmartPerf-Device工具。
2. 设置采集要求。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/t8GaQ2Z6TzKPTAIRTsME2w/zh-cn_image_0000002200789664.png?HW-CC-KV=V1&HW-CC-Date=20260910T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=AE34C858DB139AB65B306A59CDD8E9E65D027A08EEC1AC4988ED13B8468B4937)

3. 采集性能数据。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/8a1NgQ_6SPq_Ve7eWDD_mQ/zh-cn_image_0000002201081614.png?HW-CC-KV=V1&HW-CC-Date=20260910T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=833FC12C00DA0B7E5CFE6B187527EBCCD2EBF2FAE6D5AFD608733A9854AB6852)

## 查看测试报告

测试报告生成后，您可以在测试报告列表中，点击报告并在详情页查看性能数据。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/WCY3OxIsR9G_GEGjz1Slkg/zh-cn_image_0000002222400045.png?HW-CC-KV=V1&HW-CC-Date=20260910T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=868564C4AAD03B9D4F44EBD547FBDD6C4C7E4A4357FCBDCBB58317BBA64DB7B9)

## 手动上传测试报告

> 说明
>
> * 上传测试报告有自动上传和手动上传两种操作。
> * 在开始测试页面打开"自动上传报告"开关，采集结束后，报告会自动上传至云端。

首次使用上传测试报告功能，您需先登录华为开发者账号。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/DldL8ylRRYibZ4Afm4__ZQ/zh-cn_image_0000002222220777.png?HW-CC-KV=V1&HW-CC-Date=20260910T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=F4C88F74C0899D540546AED2E342857D164B4927C90206D6E30000D7195A1E9E)

## 分享测试报告

您可以在测试报告列表页面，点击分享按钮分享测试报告。

> 说明
>
> 测试报告必须上传云端后才能分享。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/OGcc7qFzSyuGxyb2Fw7nug/zh-cn_image_0000002249224854.png?HW-CC-KV=V1&HW-CC-Date=20260910T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=4B89CA7888DB72C21D13D0741CE001AE4F75D34233E7E6641839C79929695DFA)

您可以通过复制网址链接或扫描二维码图片，在浏览器打开，查看其他用户分享的测试报告。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/Hr5SEAtySGqIJVlRsJw6jA/zh-cn_image_0000002222826433.png?HW-CC-KV=V1&HW-CC-Date=20260910T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=A68DA2A04ECB53A276B1ADDE28071C0FCB3F9461875FDA9DCADFB64D665E06B5)

## 解析性能数据

### 概览

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/fQz4VEglSjWembP8_7dhXQ/zh-cn_image_0000002193325121.png?HW-CC-KV=V1&HW-CC-Date=20260910T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=38880B6F24B2BCD9A522762AF2E87C558A6BDE3BC65A8821271DA53519CAC843)

|数据指标|单位|含义|说明|
|:----------------|:--|:---------------------------------------|:-----------|
|归一化电流|mA|3.8V电压下的电流使用情况。|-|
|cpu温度|℃|采集过程中cpu温度的平均值。|数值越低越好。|
|整机温度|℃|采集过程中设备温度的平均值。|数值越低越好。|
|平均帧率|FPS|游戏画面在采集过程中平均每秒显示的帧数。|建议尽量达到屏幕刷新率。|
|屏幕刷新率|Hz|游戏画面在测试过程中采集的刷新次数范围。|-|
|抖动率|-|帧率变化的百分比。|数值越低越好。|
|卡顿次数（小卡顿/中卡顿/大卡顿）|次/h|平均每小时内出现的卡顿次数。（卡顿次数=小卡顿数+2*中卡顿数+3*大卡顿数。）|数值越低越好。|
|GPU使用率|-|GPU的使用率。|-|
|GPU频率|MHz|GPU的工作频率。|-|
|DDR频率|FPS|DDR内存的工作频率。|-|
|CPU 小核|MHz|CPU小核的平均工作频率。|数值越低越好。|
|CPU 中核|MHz|CPU中核的平均工作频率。|数值越低越好。|
|CPU 大核|MHz|CPU大核的平均工作频率。|数值越低越好。|
|平均内存|MB|使用的平均内存空间。若未采集内存数据项，将固定展示"-1"。|-|
|电量使用|-|开始采集到结束采集电量差，显示百分比。|-|
|累计上行|KB|上传带宽累计之和。|-|
|累计下行|KB|下载带宽累计之和。|-|

### 性能

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/CaAKQMDwT0W4vtWsFEyOcQ/zh-cn_image_0000002236716820.png?HW-CC-KV=V1&HW-CC-Date=20260910T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=EC29FEF07C2001678469C27FB1107D6A1598744C7C9527E4CD6BCF6B005C2243)

|数据指标|单位|含义|说明|
|:----------|:---|:-------------------|:------|
|fps|Hz|每秒游戏画面最大的刷新次数。|-|
|refreshRate|Hz|游戏画面在测试过程中采集的刷新次数范围。|-|
|丢帧|FPS|测试期间各丢帧个数对应的次数与占比。|数值越低越好。|
|上行带宽|kbps|游戏上传带宽。|-|
|下行带宽|kbps|游戏下载带宽。|-|

### 负载

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/w7jMYMtsQOyhxYrprlbA9g/zh-cn_image_0000002163192305.png?HW-CC-KV=V1&HW-CC-Date=20260910T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=140A5D80BB07607C0D8CC10DE512126A21434D14519229146FAA84FDD237C6BE)

|数据指标|单位|含义|
|:------------|:--|:-------|
|CPU Frequency|MHz|CPU频率。|
|CPU Load|-|CPU负载占比。|
|GPU Load|-|GPU负载占比。|
|GPU Frequency|MHz|GPU频率。|
|DDR Frequency|MHz|DDR频率。|

### 内存

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/T2zbSo81SUae0vXgye0qdg/zh-cn_image_0000002163033881.png?HW-CC-KV=V1&HW-CC-Date=20260910T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=A7C908BB870064C1312289A8091AF2F3437F6A2A2D2A7B6FA488678FBE646629)

|数据指标|单位|含义|
|:------------|:-|:-----------|
|pss|KB|应用实际使用的物理内存。|
|mem_avaliable|KB|整机可用内存。|
|mem_free|KB|整机空闲内存。|

### 功耗

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e1/v3/YySBZAuVQOGt6F0rYqa8Yw/zh-cn_image_0000002245547026.png?HW-CC-KV=V1&HW-CC-Date=20260910T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=0607C46355F02F643BC892B87FBCC7E42F8030E03B13A8CC8A396EEBA4E286FE)

|数据指标|单位|含义|
|:----|:-|:--------------------------------|
|归一化电流|mA|有效时间内的归一化电流（电压*电流/3.8）的绝对值之和除以时间。|
|最大电流|mA|有效时间内电流的最大值。|
|平均电压|V|有效时间内电压的平均值。|
|平均功率|mW|电流*电压。|

### 热

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9/v3/xLDH5kUMSsOhkX4z14H5ZA/zh-cn_image_0000002127794258.png?HW-CC-KV=V1&HW-CC-Date=20260910T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=DAA0C15A1060C3BACAC66CD6FD99E22DB1ADC46B27BF81B205F2122710CD547B)

|数据指标|单位|含义|说明|
|:-------------|:-|:----------------|:----|
|ShellFrontTemp|℃|采集过程中手机前壳的温度。|越低越好。|
|socThermalTemp|℃|采集过程中系统芯片温度的波动情况。|越低越好。|
|BatteryTemp|℃|采集过程中电池温度的波动情况。|越低越好。|
|ShellFrameTemp|℃|采集过程中手机壳的温度。|越低越好。|
|ShellBackTemp|℃|采集过程中手机后壳的温度。|越低越好。|
|GPUTemp|℃|GPU温度的波动情况。|越低越好。|

## 支持命令行形式调用Device

HiSmartPerf-Device支持下载单独的安装包，您可以通过命令行形式调用Device，集成到自身的游戏性能看护流水线。

### 获取游戏信息

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/)，点击"开发与服务"，在项目列表中找到需要获取游戏参数的项目及项目下的游戏。
2. 在"项目设置 > 常规"页面下记录**Client ID、Client Secret** 。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/PpGs7kVoQvW01PHnj56v1g/zh-cn_image_0000002420543384.png?HW-CC-KV=V1&HW-CC-Date=20260910T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=CC16298E262776FFEA30F139E4E6022D40A4998DAAF201BE40E9C3F74D4E0462)

### 操作步骤

1. [下载HiSmartPerf-Device](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/smartperf-tool-download-0000001530830070)
2. （可选）安装HiSmartPerf-Device

   输入以下命令在电脑端安装HiSmartPerf-Device hap包。

   ```screen
   hdc -t [connect-key] install [hap文件名]
   ```

3. 连接手机设备
   * USB 连接 参考[手机设备如何成功连接电脑](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/smartperf-tool-faq-0000001530510854#section935516916145)连接工具和手机。

   * Wi-Fi 连接 说明
     >
     > 确保手机和电脑必须处于同一Wi-Fi下。
     1. 打开手机的"设置"应用，进入"关于手机"页面。
     2. 快速、连续、多次点击"软件版本"，直到提示"您正处于开发者模式！"或"您已处于开发者模式，无需进行此操作"，表示您已进入当前手机设备的开发者模式。
     3. 在"开发者选项"页面点击"无线调试"，查看IP地址和端口。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/tW5prn8GQR-uPnxjpkpUXQ/zh-cn_image_0000002453936921.png?HW-CC-KV=V1&HW-CC-Date=20260910T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=7F72A22CD42E486152DE78C616FDB6C44DB2BA9994A8AF7DD645B76422205896)

     4. 在电脑端执行以下命令

        ```screen
        hdc tconn ip:port
        ```

4. 确认手机设备已连接

   在电脑端执行以下命令查询已连接的设备列表信息，确保目标设备已连接。

   ```screen
   hdc list targets -v
   ```

5. 调用python脚本

### python 脚本说明

1. 初始化 说明
   >
   > 需联网操作。
   * 参数

     |参数|必填（M）/选填（O）|说明|
     |:-----------|:----------|:------------------------------------------------------------------------|
     |taskName|M|任务名。固定填init。|
     |clientId|M|客户端ID。具体获取参见[获取游戏信息](#ZH-CN_TOPIC_0000002086884884__li1385153419385)。|
     |clientSecret|M|客户端Secret。具体获取参见[获取游戏信息](#ZH-CN_TOPIC_0000002086884884__li1385153419385)。|
     |connectkey|O|目标设备的标识符。连接多个设备时，需指定该参数。|

   * 示例代码（以windows批处理为例）

     ```screen
     @REM 初始化
     set clientId=********
     set clientSecret=*********
     python %~dp0AutoTest.py init %clientId% %clientSecret%
     ```

   * 回调显示 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/fxbcc5PQRJG6N_Vw4jNvcA/zh-cn_image_0000002223231089.png?HW-CC-KV=V1&HW-CC-Date=20260910T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=5EC06C236AC336073829F6651B5262E608A8DA19B4B4DFBD092CC3EB9E5483CE)

2. 开始采集
   * 参数

     |参数|必填（M）/选填（O）|说明|
     |:---------|:----------|:--------------------------|
     |taskName|M|任务名。固定填start。|
     |bundleName|M|待测试游戏的包名。|
     |testname|O|自定义保存的报告名称，报告名称不能包含中文和特殊字符。|
     |connectkey|O|目标设备的标识符。|

   * 示例代码（以windows批处理为例）

     ```screen
     @REM 开始采集
     set bundleName=**********
     python %~dp0AutoTest.py start %bundleName%
     ```

   * 回调显示 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/nqKtQRBcTkCd8zv4zsxUhw/zh-cn_image_0000002223364333.png?HW-CC-KV=V1&HW-CC-Date=20260910T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=CDF64DF36025C3D06BA93927A0F01C333D55CA8DA8DFDD6E052D86C18BCCC34B)

3. 结束采集
   * 参数

     |参数|必填（M）/选填（O）|说明|
     |:----------|:----------|:-----------|
     |taskName|M|任务名。固定填stop。|
     |reportPath|M|报告保存的目录。|
     |connect-key|O|目标设备的标识符。|

   * 示例代码（以windows批处理为例）

     ```screen
     @REM 采集停止
     set savePath=reports
     python %~dp0AutoTest.py stop %savePath%
     ```

   * 回调显示 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/kG_9W0xiSK6JznPwyTicRg/zh-cn_image_0000002187924108.png?HW-CC-KV=V1&HW-CC-Date=20260910T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=F3BC06CDFFA2109B3EFFF93A8EA0330C66A97C4C10AFF54756A1D2EC07A52D67)

