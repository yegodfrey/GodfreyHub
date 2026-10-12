---
name: document/cn/AppGallery-connect-Guides/smartperf-tool-device-haromnyos-0000002086884884
title: HarmonyOS 5.0及以上游戏
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/smartperf-tool-device-haromnyos-0000002086884884
---

# HarmonyOS 5.0及以上游戏

## 采集性能数据

1. 在手机/平板端点击桌面SmartPerf应用图标打开HiSmartPerf-Device工具。
2. 设置采集要求。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b8/v3/t8GaQ2Z6TzKPTAIRTsME2w/zh-cn_image_0000002200789664.png?HW-CC-KV=V1&HW-CC-Date=20261010T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=F7FC0919CDF9D8241A05E911CDA08C527B009E1B836A8F940FB030C9291C8526)

3. 采集性能数据。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/8a1NgQ_6SPq_Ve7eWDD_mQ/zh-cn_image_0000002201081614.png?HW-CC-KV=V1&HW-CC-Date=20261010T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=6B00B7463BF66AE31E437EAF39C7790331E5EBF5056C8C9B9286822EA7D74F62)

## 查看测试报告

测试报告生成后，您可以在测试报告列表中，点击报告并在详情页查看性能数据。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/WCY3OxIsR9G_GEGjz1Slkg/zh-cn_image_0000002222400045.png?HW-CC-KV=V1&HW-CC-Date=20261010T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=F7A726C97C35E16BD5FBCF18B94D66E4617B3B7EAFDE6B39EB0CE6EA3553CC89)

## 手动上传测试报告

> 说明
>
> * 上传测试报告有自动上传和手动上传两种操作。
> * 在开始测试页面打开"自动上传报告"开关，采集结束后，报告会自动上传至云端。

首次使用上传测试报告功能，您需先登录华为开发者账号。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/74/v3/DldL8ylRRYibZ4Afm4__ZQ/zh-cn_image_0000002222220777.png?HW-CC-KV=V1&HW-CC-Date=20261010T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=8265B0F45882D5F245FAA8FDD62CB0A08853245A96E716B022A8E5E269134EA1)

## 分享测试报告

您可以在测试报告列表页面，点击分享按钮分享测试报告。

> 说明
>
> 测试报告必须上传云端后才能分享。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/29/v3/OGcc7qFzSyuGxyb2Fw7nug/zh-cn_image_0000002249224854.png?HW-CC-KV=V1&HW-CC-Date=20261010T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=CCD22C58FC7DB3294D3CF83C658DF13A83BBBBB84794B8D3EBADCC37B6F7B8F2)

您可以通过复制网址链接或扫描二维码图片，在浏览器打开，查看其他用户分享的测试报告。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f4/v3/Hr5SEAtySGqIJVlRsJw6jA/zh-cn_image_0000002222826433.png?HW-CC-KV=V1&HW-CC-Date=20261010T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=3D851E45EAEF23A11F909D3888A8DD6030AFE1564B83D49906AC63846EF1F85C)

## 解析性能数据

### 概览

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/90/v3/fQz4VEglSjWembP8_7dhXQ/zh-cn_image_0000002193325121.png?HW-CC-KV=V1&HW-CC-Date=20261010T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=49B37BCF99DE3344E82F60F801F3A29BD10A4537823E63641C672AD8C612668E)

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

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4d/v3/CaAKQMDwT0W4vtWsFEyOcQ/zh-cn_image_0000002236716820.png?HW-CC-KV=V1&HW-CC-Date=20261010T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=75EF99868BE65A98CC50B84ECF1AA6F24660B4F361611CCBAC37E56A0BE93CA3)

|数据指标|单位|含义|说明|
|:----------|:---|:-------------------|:------|
|fps|Hz|每秒游戏画面最大的刷新次数。|-|
|refreshRate|Hz|游戏画面在测试过程中采集的刷新次数范围。|-|
|丢帧|FPS|测试期间各丢帧个数对应的次数与占比。|数值越低越好。|
|上行带宽|kbps|游戏上传带宽。|-|
|下行带宽|kbps|游戏下载带宽。|-|

### 负载

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/49/v3/w7jMYMtsQOyhxYrprlbA9g/zh-cn_image_0000002163192305.png?HW-CC-KV=V1&HW-CC-Date=20261010T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=290B0971997CCCFBCBEE4E2EC05ED0515334393F347F7197CE9C1E22D5D4B8B2)

|数据指标|单位|含义|
|:------------|:--|:-------|
|CPU Frequency|MHz|CPU频率。|
|CPU Load|-|CPU负载占比。|
|GPU Load|-|GPU负载占比。|
|GPU Frequency|MHz|GPU频率。|
|DDR Frequency|MHz|DDR频率。|

### 内存

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/66/v3/T2zbSo81SUae0vXgye0qdg/zh-cn_image_0000002163033881.png?HW-CC-KV=V1&HW-CC-Date=20261010T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=C059CB78C3318E2B579BADA562BBAD17A2C377F2D758B8E50352C19BDCCCD863)

|数据指标|单位|含义|
|:------------|:-|:-----------|
|pss|KB|应用实际使用的物理内存。|
|mem_avaliable|KB|整机可用内存。|
|mem_free|KB|整机空闲内存。|

### 功耗

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e1/v3/YySBZAuVQOGt6F0rYqa8Yw/zh-cn_image_0000002245547026.png?HW-CC-KV=V1&HW-CC-Date=20261010T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=60E21FEE616021632B629E80662A2278BAD5E9CB366550BE17D8A589F5538ABC)

|数据指标|单位|含义|
|:----|:-|:--------------------------------|
|归一化电流|mA|有效时间内的归一化电流（电压*电流/3.8）的绝对值之和除以时间。|
|最大电流|mA|有效时间内电流的最大值。|
|平均电压|V|有效时间内电压的平均值。|
|平均功率|mW|电流*电压。|

### 热

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9/v3/xLDH5kUMSsOhkX4z14H5ZA/zh-cn_image_0000002127794258.png?HW-CC-KV=V1&HW-CC-Date=20261010T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=52EE2F5512233BED4C0430278392C557208820B8106D24CC52C6F2FB23E506BE)

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

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5d/v3/PpGs7kVoQvW01PHnj56v1g/zh-cn_image_0000002420543384.png?HW-CC-KV=V1&HW-CC-Date=20261010T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=9DDB6DEEE2B86F84E5430560E79E2266F8D4A9941FCB976DEF4B7537C7946505)

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
     3. 在"开发者选项"页面点击"无线调试"，查看IP地址和端口。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/3b/v3/tW5prn8GQR-uPnxjpkpUXQ/zh-cn_image_0000002453936921.png?HW-CC-KV=V1&HW-CC-Date=20261010T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=FD67C94B77E6142009C0B2941AAF5EE20D68AC3D6DF8DA25E4166F3E7129A6CC)

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

   * 回调显示 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5b/v3/fxbcc5PQRJG6N_Vw4jNvcA/zh-cn_image_0000002223231089.png?HW-CC-KV=V1&HW-CC-Date=20261010T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=1BB066C1B335B793CDB695374EF450192671B09BE7F89291E5014A1B84BFC070)

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

   * 回调显示 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4b/v3/nqKtQRBcTkCd8zv4zsxUhw/zh-cn_image_0000002223364333.png?HW-CC-KV=V1&HW-CC-Date=20261010T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=C84306DBED57A6EED9C323FA89911F39767F3A24FDEFD1EBD610E2C5E417434C)

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

   * 回调显示 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/11/v3/kG_9W0xiSK6JznPwyTicRg/zh-cn_image_0000002187924108.png?HW-CC-KV=V1&HW-CC-Date=20261010T014830Z&HW-CC-Expire=31536000000&HW-CC-Sign=12305F8C208F0124F0D1CD198D06B99262325DD92EE6C92284D061A7D938AF45)

