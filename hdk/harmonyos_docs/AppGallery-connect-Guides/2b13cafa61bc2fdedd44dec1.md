---
name: document/cn/AppGallery-connect-Guides/miniprogram-create-and-config-func-0000001713088137
title: 创建并配置函数
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/miniprogram-create-and-config-func-0000001713088137
---

# 创建并配置函数

## 创建函数

开通云函数服务后，您首先需要在AGC中创建函数，并添加函数执行的代码。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中点击需要创建云函数的项目。
3. 在左侧导航栏选择"云开发（Serverless）> 云函数"，进入云函数主界面。
4. 选择"函数"页签，点击"创建函数"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7e/v3/cyQxfdcBQEyTtw65fZIETw/zh-cn_image_0000001978134481.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=AF054FBB75CF784C56B8DE49F7A0E8442CF17F8881818EC0E8AC592EB52DD392)

5. 页面右侧抽屉式滑出"创建函数"窗口，按照"函数配置 -> 触发器 -> 函数代码 -> 层配置"引导顺序配置函数。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/s5keZ3k-QCu-w_rQlXG3Ag/zh-cn_image_0000001978059125.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=449017802B5DF87E26520D7F77E017BF54C874A1E70F4B787174E55BA7DF9310)

## 函数配置

1. 在"函数配置"页面，配置"函数名称"、"触发方式"、"超时时长"等函数信息。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/88/v3/SU4eyDN_TPSKo_CI24E_Dw/zh-cn_image_0000001755850905.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=722CE4DB8BD7427932F36D76899EC8CC020155B854A524BEF198A60BE8E2291B)

   |配置项|**说明**|
   |:---|:--------------------------------------------------------------------------------------------------------|
   |函数名称|函数的名称。|
   |描述|函数的描述信息。|
   |触发方式|**请配置为"事件调用"。** "事件调用"表示通过触发器方式调用函数。|
   |超时时长|函数最大运行时长，超过该时长，则默认函数执行失败，单位为秒，取值范围为1~1800。 > 说明 > * "同步"调用方式时，函数最大运行时长为55秒。 > * "异步"调用方式时，函数最大运行时长为1800秒。|
   |实例并发|函数请求并发量上限，单位为个，取值范围为1~10000。|
   |环境变量|key-value形式，您可以将需要的变量配置信息传入函数执行环境中，用于函数在运行时读取和使用。|

2. （可选）您可根据需要添加环境变量，支持**表单格式** 和**JSON格式** 两种编辑方式。添加完成后，您还可以点击"JSON格式导出"，导出以"函数名称.json"格式命名的环境变量文件，以备后续使用。 说明
   > * 环境变量的key值具有唯一性，且"PROJECT_CREDENTIAL"和"AGC_"为系统级环境变量标识，不允许添加以其命名或以其为前缀的环境变量。
   > * 环境变量总数不超过1000个。
   * 表单格式编辑 点击"新增变量"，输入key和value值，如下图中所示，env1为环境变量的key值，test为value值。点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/dUJsb3zYRY-kjpQPaxk8Yg/zh-cn_image_0000001713575273.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=0E42F81DCF874CF69B3ED65EA8B152E9B08B6EECD64A47AAF5A8648D48E6BF92)可将变量删除。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ac/v3/KzRcTCIYQhu8pK0H4M7U8A/zh-cn_image_0000001724123061.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=42123419CF23BFB1B928E8C1678C9D78ECA562ADBCAFC90EC3CEE16D9DF56F0E)
   * JSON格式编辑 选中"JSON格式编辑"，在文本框中以key-value键值对JSON格式添加环境变量。当添加的环境变量比较多时，为了方便核对，可点击"format"对变量进行格式化排列。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ec/v3/3YAfyv34RMGHiyDrl9tAhw/zh-cn_image_0000001799109897.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=FF12B538E713BDCAB5270AD89ED83DAF9BC34292BDA52AEDF8C764BBA8D51D9A)
3. "函数配置"页面配置完成后点击"下一步"。

## 触发器

进入"触发器"页面，您可基于函数触发场景配置需要的触发器，本场景下添加HTTP触发器。"触发器类型"和"请求方式"保持默认选择，并配置"认证类型"，配置完成后点击"下一步"。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/24/v3/iMOuE3HFQFu2b0fj2Lr-Bw/zh-cn_image_0000001755902797.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=718191D8D6CCB470C10E93BC8447EEEF36981630B850F80E947BB20C596CD178)

|参数|说明|
|:-------|:---------------------------------------------------------------------------------------------------------------------------|
|触发器类型|HTTP触发器。|
|请求方式|HTTP触发器目前仅支持POST请求方式。|
|认证类型|HTTP触发器的认证类型。 * API客户端鉴权（Client适用）：端侧网关认证，适用于来自APP客户端侧（即本地应用或者项目）的函数调用。 * API客户端鉴权（Server适用）：云侧网关认证，适用于来自APP服务器侧（即云函数）的函数调用。|
|启用decode|通过HTTP触发器触发函数时，对于contentType为"application/x-www-form-urlencoded"的触发请求，是否使用URLDecoder对请求body进行解码再传入到函数中。|

## 函数代码

进入"函数代码"页面，配置"运行环境"、"内存配置"、"代码输入类型"等信息，配置完成后点击"下一步"。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b3/v3/eU1aGfTIQ6GKJep90IPzhw/zh-cn_image_0000001751468510.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=881A43533311D33538772FD435FA17E67AF49C8EC2234B61020BB6D9C6AA19FB)

|配置项|**说明**|
|:-----|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|运行环境|函数容器的运行环境。 因业务调整需要，新创建的函数不再支持java、python、custom-runtime运行环境，仅支持选择nodejs 20.x/latest（选择latest时表示使用最新版本）。|
|内存配置|函数容器所占有的内存大小，单位为MB，取值范围：500，1000，2000，4000。|
|代码输入类型|包括"在线编辑"与"*.zip文件"两种方式，默认值为"在线编辑"。 * 运行环境java和custom-runtime仅支持ZIP包上传。 * 如选择"*.zip文件"方式部署云函数，入口方法文件的编写方法和函数部署包结构，请参见"[开发函数](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/develop-func-introduction-0000001665113808#ZH-CN_TOPIC_0000001665113808)"下对应运行环境的"入口方法"和"准备函数部署包"章节。|
|函数入口|包括入口文件名称和入口方法名称，通过"."连接。例如handler.myHandler，其中handler为入口文件名称，myHandler为入口方法名称。 * nodejs和python运行环境下入口文件必须放置在函数部署包的根目录下。具体请参见"[开发函数](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/develop-func-introduction-0000001665113808#ZH-CN_TOPIC_0000001665113808)"下对应运行环境的"准备函数部署包"章节。 * java运行环境下函数入口支持包名.入口类::入口方法和包名.入口类两种格式，包名、类名、方法名均以字母或下划线开头，支持数字字母下划线，且长度不能超过64个字符，包的层级不超过16。例如faas.HelloPojo::handleRequest，其中faas为包名，HelloPojo为入口类名，handleRequest为入口方法名。 * custom-runtime运行环境下函数入口默认为"/invoke"，且不支持修改。|
|代码文件|用于在线编辑函数代码或上传函数部署包。 * "代码输入类型"配置项选择"在线编辑"时，您可在创建函数界面集成的WebIDE区域在线编辑函数代码。WebIDE的详细使用方法请参见[WebIDE](#ZH-CN_TOPIC_0000001713088137__zh-cn_topic_0000001658831162_p13419714105311)。 * "代码输入类型"配置项选择"*.zip文件"时，点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f3/v3/jrRFfdWITwq95_v6Nl6zAQ/zh-cn_image_0000001939225149.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=7146E32E4C962673E3D70378ED97DFA417B8533F294A387BBA77C3DAC18B7A06)即可上传函数部署包，也可直接拖曳zip文件至虚线框内。|

WebIDE

当"代码输入类型"配置项选择"在线编辑"时，创建函数界面中集成了WebIDE功能，支持在线编辑函数代码。
> 注意
>
> 如果在函数实例已经运行的情况下进行函数代码或配置更新，AGC后台会滚动更新函数实例，请您耐心等待10-20秒。

WebIDE从左至右分两个部分：目录树、代码编辑器和最大化，如下图所示。编辑完成后平台会生成部署包并上传。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/01/v3/s7xwV3H-S-mCAV6x6P172g/zh-cn_image_0000002225329673.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=B8E69BB37740001CCAD0CBAE83C59E468FDFFDCE8F4C2380F705102CC748521B)

|组成|说明|
|:--|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|目录树|目录树支持如下能力： * 新增文件夹：选中一个文件或文件夹，点击右上角新增文件夹按钮"![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/14/v3/V95rI5cfSCGWIQlXzTvcgQ/zh-cn_image_0000001665786094.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=F08CFE99FE05654311B2304F72D45EA8570A63E37AD41C410293B50CA63C96FE)"。若选中的是文件夹，则新增一个子文件夹。若选中的是文件，则新增一个同级文件夹。 * 新增文件：选中一个文件或文件夹，点击右上角新增文件按钮"![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/53/v3/-hyXT27lQTuOUsUbk8J9eg/zh-cn_image_0000001665626410.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=80796FD98954D84CCB4BF62AA9D720BB4EBD22165AE7DFF2F01A646D6E83D9E0)"。若选中的是文件夹，则新增一个子文件。若选中的是文件，则新增一个同级文件。 * 删除文件：选中一个文件或文件夹，点击右侧删除按钮"![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d1/v3/PC9S3-JSSmWm9E7Ndj3KWg/zh-cn_image_0000001658857056.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=2BBA140E608B9C3AA091C833D4200685D4E36B2F7A2C1BBAE1E003AA8D47CA16)"，删除文件或文件夹。不允许删除根目录。 * 重命名：双击文件或文件夹，输入新名称（仅支持字母、数字、下划线和中划线），完毕后按Enter键完成重命名。|
|编辑器|编辑器具有如下能力： * 语法高亮：按照node.js或python语法高亮显示代码。 * 语法校验：语法有错误时会给出错误提示。 * 代码提示：输出代码自动给出相关代码提示。 * 代码填充：选择后系统代码可自动填充。 * 格式化：快捷键Ctrl+Shift+B。 * 支持快捷键操作：Ctrl+v, Ctrl+c, Ctrl+z, Ctrl+x, Ctrl+f, Ctrl+/等。|
|最大化|点击最大化按钮![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9f/v3/awht2hqVS_q9Uc-CSdq-4Q/zh-cn_image_0000001673586164.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=D64F27C7E13D046EB105803C66C0EDC8738714D7781E211FBC002125838CD818)，可以最大化在线编辑区，再次点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d3/v3/l6bxo0OeSgGyKD-gdfFb2w/zh-cn_image_0000001721625721.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=793306BE83FDEA6792214C7EBFC7A08D86815227F106612551D68FEFB76DD60F)按钮或按ESC键退出最大化。|

## 层配置

层可以为您提供公共依赖库的发布与部署能力。您可以将函数依赖的公共库和相关依赖项提炼到层，通过为函数绑定层，便可以在函数中使用库，而不必将库包含在函数的代码包中，从而达到缩小函数代码包体积与缩短函数部署时间的效果，也避免了使用函数代码安装和打包依赖项时可能出现的错误。详细的层管理功能，请参见[层管理](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloud-function-layer-0000001517762624)。

如果您尚未创建层，可跳过下述步骤，直接点击页面底部的"创建"完成函数定义，后续创建层之后可在函数详情页再进行层配置，为函数绑定层。如果您在创建函数之前已创建层，可按照下述步骤进行操作。

1. 进入"层配置"页面，点击"绑定层"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cc/v3/Mzx_L4g-QzSx8eifwJ-uPg/zh-cn_image_0000001755876669.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=94F746EA861AEA4ED93760214E1DAE095C7C0970ACBD347722B680823C8EB934)

2. 在右侧弹出的"绑定层"界面中，下拉框选择"层名称"和"版本"，"层范围"等信息根据层的配置将被自动填充，完成层绑定后点击"确定"。一个函数最多可以绑定5个层。 说明
   >
   > 选择层时，层的兼容运行时需与函数运行环境相符，系统会自动完成过滤。若无匹配的层供您选择，请参考[创建层](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloud-function-layer-0000001517762624#section11358162018572)创建相同运行环境的层后再进行绑定。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/2d/v3/5DPaROc4RlODbYvOCXmjYg/zh-cn_image_0000001673746780.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=CCFD56F0E2F1059550C6CE540480674276C90D601164F139C6370489280E06DA)

   |参数|说明|
   |:----|:--------------------------------------------------|
   |层名称|层的名称。重复时自动在同名的层中创建一个新版本。|
   |版本|存在多个层版本时，选择函数绑定的层版本。|
   |层范围|层的共享范围。 * 项目内共享 * 团队内共享|
   |兼容运行时|层使用的语言环境。 * nodejs * java * python * custom-runtime|
   |层描述|层的附加说明，长度不超过1024位。|

3. 返回到"层配置"界面，绑定成功的层将展示在层列表中。若您需要解除层与函数的绑定关系，点击"解绑"即可。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/Yx41EoBJShWxoXdQdyWSsQ/zh-cn_image_0000001755917469.png?HW-CC-KV=V1&HW-CC-Date=20260916T040231Z&HW-CC-Expire=31536000000&HW-CC-Sign=C98D0D77262FC9A5FFDF01F2EA3EEA748D9ACD6FC1B92388BC729BEBA433BA50)

4. 按照"函数配置 -> 触发器 -> 函数代码 -> 层配置"顺序配置过程中，您若需要修改前面步骤中的配置，可点击"上一步"进行回退，配置完成后点击"创建"提交函数定义。

## 更多信息

函数配置完成后，您可以[查看函数实例](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/view-function-instances-0000001681828396)、[修改函数高级配置](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/modify-function-advanced-config-0000001734287937)。

