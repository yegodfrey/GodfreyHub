---
name: document/cn/AppGallery-connect-Guides/cloudfunction-0000001432886916
title: 云函数
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/cloudfunction-0000001432886916
---

# 云函数

云监控提供的日志服务功能可呈现和查询云函数的业务日志和接入日志两种日志类型，具体说明如下表所示。

|日志类型|说明|
|:---|:------------------------------------------------------------------------------------------------------------------------------------------------------|
|业务日志|即run日志，由开发者根据业务需要调用云函数提供的日志接口生成，主要记录系统的运行状况或业务执行流程中的一些关键信息，包括异常的状态、动作、关键事件等。|
|接入日志|即access日志，由云函数平台生成，主要记录客户端访问服务端的所有请求信息。针对特定情况下的问题定位，若基于业务日志不能定位到错误请求源头，您可查询接入日志，根据错误码（userCode）等关键信息找到调用异常的接口记录，再根据traceId查询具体的业务日志记录，从而快速地定位报错原因并解决问题。|

## 前提条件

若要查看云函数服务的业务日志或者接入日志，您首先需要[创建函数](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/create-and-configure-func-andrioid-0000001665054330)。

## 查看云函数业务日志

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中选择您的项目。
3. 在左侧导航栏选择"质量 > 云监控 > 日志服务"，进入"日志服务"主页面。
4. 在页面左上角，日志类型选择"业务日志"，下拉框选择"云函数"，即可查看云函数服务的业务日志。您可根据需要添加过滤条件、设置查询的时间范围，筛选出符合条件的日志信息，并可通过点击"查询"获取最新的业务日志。 说明
   >
   > 默认情况下，选择日志类型和服务名称后，系统会自动执行一次查询操作。时间选择框默认时间跨度为最近7天，查询结果按照分钟级时间从最新开始展示。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8b/v3/o0hFpUXPQ6izaJOJKnD6AA/zh-cn_image_0000001663587192.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=868453C44F67653EA5AB3D5251DD47FA17EBF52AD9091BF56C616BBE6EB9EC26)

   在该页面您可以执行以下操作：
   * 点击"增加过滤条件"，可添加traceId（调用ID）、logLevel（日志级别）、function_name（函数名）、message（日志内容）或version（函数版本）过滤器，对所有业务日志进行过滤查询。 说明
     > * 支持添加多个过滤条件。
     > * 增加过滤条件时，支持"等于"、"属于"、"不等于"和"不属于"四种运算符。
     >   * 选择"等于"或"不等于"运算符时只能输入一个条件值进行精确匹配。
     >   * 选择"属于"或"不属于"运算符时可以输入一个或多个条件值进行精确匹配。当输入多个条件值时，与其中任意一个条件值匹配成功，则显示满足该条件的日志。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/94/v3/JbPKnOUtRoasA9Usgtrb2Q/zh-cn_image_0000001711655321.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=51ED152539FF3DBD070CDD9A6628BAA5CC600441AB52660E8551CA87390E6066)

     点击"保存"后，添加的过滤条件处于启用状态，"查询结果"区域将展示指定时间范围内符合条件的日志信息。鼠标滑动至过滤器上，可对其进行禁用、删除和编辑操作，并且禁用后可再次启用。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ae/v3/MKsDsjkvTims-jqW_cxk_g/zh-cn_image_0000001625595849.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=BA0BFA016ABF0754C557BD94627F5BEFB5B0B8B0C9C5E1022CF2510A43B0C318)
   * 点击时间选择框，您可以在窗口左侧选择预定时间段，例如最近1小时，也可以自定义时间范围筛选日志。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/5e/v3/BDJnu7oiRyyZKwVbgFpTxQ/zh-cn_image_0000001663843304.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=6EE58BF9D6C9D16D0673BC8CD9ADFC341FAABAC025906EF19758BC9D2F0FA21C)

   * 点击"直方图"区域任一处，可展开或收起直方图，主要展示查询到的业务日志在时间上的分布情况。
   * 点击"查询结果"区域右侧的"展开"，日志表格将展开显示每条日志的详细信息，包含日志级别、日志内容、函数调用时间等。您也可点击"复制至剪贴板"以JSON格式复制您关心的某条日志内容，方便您筛选关键信息。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/82/v3/Fd67RJZhTou4tyIYEViGxw/zh-cn_image_0000001663435484.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=688493CA42D87DCC9DDCDDC1E65D4F3368281BA8CE6DD2227204E5AEDAE6B35C)

   * 点击"查询结果"区域右侧的"下载"，可将日志以txt格式导出到本地查看。
   * 点击日志末尾的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/71/v3/7LbpJZibRvumdH4yNNbrGw/zh-cn_image_0000001550181890.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=AA0B51AE8635CB0E3BC7415BAEBA798B00B708D4EF864A9A371E8D43704A9187 "点击放大")，相当于添加了traceId过滤器，可过滤出该traceId的所有日志。若想去除过滤，鼠标放置在页面顶端该traceId过滤器上，将其禁用或者删除即可。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f3/v3/GsQnvIb4QaKJnVsVp5R6OQ/zh-cn_image_0000001663596968.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=4D963FA7579707285F16543C4870AF2F115C8E1F4A0947791219EB4980A4FFBB)
5. （可选）点击直方图区域某处展开直方图，将鼠标悬浮在直方图某一蓝色数据块上时，您可查看到该数据块代表的时间范围和日志命中次数。 说明
   >
   > 若选择的时间范围跨度不同，系统返回的日志数据块细化粒度也不同。下文以7天时间跨度来说明通过直方图查看日志分布的方法。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/mxZ0W1snQPi35glxZMzb4A/zh-cn_image_0000001623497481.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=0DEB1E4524C00F9C2A2E68BA031270D0886AC85618FDEECEF95D93379D4E21A7)

   点击某一天的数据块，例如2023-06-02 00:00:00，系统返回这一天0点-3点的日志分布，您也可通过时间选择框修改小时跨度而细化展示这一天每小时的日志命中数。同时在"查询结果"区域会同步展示指定时间范围内的日志查询结果。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/62/v3/tCPx2fWMSVGavKhjH6Re5A/zh-cn_image_0000001572779432.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=05A26389C27EB1FAACFE35761D0B2F74ED3750B3AB2971A98354AF399471EE55)

   点击某一小时的蓝色数据块，例如2023-06-02 08:00:00，系统返回这一天8点00分-9点00分的日志分布。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b7/v3/SuR4buxIT_uqcVG_qHaoIA/zh-cn_image_0000001625428513.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=798A0D01CA13D83A657D999BFA0CE6C3923FAF558FC97308D270FD52EA23D63C)

## 查看云函数接入日志

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中选择您的项目。
3. 在左侧导航栏选择"质量 > 云监控 > 日志服务"，进入"日志服务"主页面。
4. 日志类型选择"接入日志"，下拉框自动填充为"云函数"。您可根据需要添加过滤条件、设置查询的时间范围，筛选出符合条件的日志信息，并可通过点击"查询"获取最新的接入日志。 说明
   >
   > 默认情况下，选择日志类型后，系统会自动执行一次查询操作。时间选择框默认时间跨度为最近7天，查询结果按照分钟级时间从最新开始展示。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/70/v3/J7RzaCOAQ8CWPPbms2qo-Q/zh-cn_image_0000001663593936.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=8B2512D926EFD7E63A2DAAC275C003DDEB6D927F575E91DE5B8B42E659941A0A)

   在该页面您可以执行以下操作：
   * 点击"增加过滤条件"，可根据需要设置过滤器，对所有接入日志进行筛选。当前支持的过滤条件全集如下表所示。 说明
     > * 支持添加多个过滤条件。
     > * 增加过滤条件时，支持"等于"、"属于"、"不等于"和"不属于"四种运算符。
     >   * 选择"等于"或"不等于"运算符时只能输入一个条件值进行精确匹配。
     >   * 选择"属于"或"不属于"运算符时可以输入一个或多个条件值进行精确匹配。当输入多个条件值时，与其中任意一个条件值匹配成功，则显示满足该条件的日志。

     |字段名称|字段含义|字段示例|备注|
     |:------------|:--------------|:-----------------------------------|:----|
     |code|调用函数返回的HTTP状态码。|200|-|
     |userCode|用户自定义的HTTP状态码。|200|-|
     |version|函数版本。|1|-|
     |alias|函数别名。|final|可能为空。|
     |function_name|函数名称。|mhtest-shijian|-|
     |trace_id|调用ID。|79fc85ce-5c63-4751-84b8-e16957d6c7c4|-|

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e4/v3/0SJ9BW_rRI6HtMcxlirhaA/zh-cn_image_0000001622187494.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=ABF270DC11F7E078E8EA987EEB2F8AEAA4627D8B44D69C85085B08FF7AF1FD68)

     点击"保存"后，添加的过滤条件处于启用状态，"查询结果"区域将展示指定时间范围内符合条件的日志信息。鼠标滑动至过滤器上，可对其进行禁用、删除和编辑操作，并且禁用后可再次启用。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/56/v3/ecopaGRcR_OGwZopKpyhDg/zh-cn_image_0000001575276968.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=67988E5F7F4C6D9E8740206360EC6A9B8A57F3635DBDCD95B16CF14F9069A526)
   * 点击时间选择框，您可以在窗口左侧选择预定时间段，例如最近1小时，也可以自定义时间范围筛选日志。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/da/v3/sV_LamqSS4aLLFwNptXfjw/zh-cn_image_0000001711643229.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=0D7FB9B0C6D19AAC2A4FA2AD526F9BBF616EFF8D475D18BAC44CDBE6B5AE2447)

   * 点击"直方图"区域任一处，可展开或收起直方图，主要展示查询到的接入日志在时间上的分布情况。
   * 点击"查询结果"区域右侧的"展开"，日志表格将展开显示每条日志的详细信息，包含函数调用时间、HTTP请求方法名、调用函数返回的HTTP状态码等。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/cf/v3/dyhsSOzET-yaxFS7o7wkNg/zh-cn_image_0000001682601377.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=46672B72DE3F5ABD079ED1D5A2A31D7A6D2823F53FFFCE4A1D87FE2E09B00A6A)

   * 点击"查询结果"区域右侧的"下载"，可将日志以txt格式导出到本地查看。
   * 点击日志末尾的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/39/v3/qI1THIYFTB-Akuy7MK38NQ/zh-cn_image_0000001604762157.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=93EE1B141C822A6F1C4DE62E30E2B75233BC1D61095187131D4AAFF78FDF639A "点击放大")，相当于添加了traceId的过滤条件，可过滤出该traceId的所有日志。若想去除过滤，鼠标放置在页面顶端该traceId过滤器上，将其禁用或者删除即可。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/45/v3/aDva3PYWRhCc0KgSg5GC2g/zh-cn_image_0000001625438049.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=B63DD5BC9C1738DC64BA690357FFB6D2550F6F19B10349ADADE7BCEE52DFC228)
5. （可选）点击直方图区域某处展开直方图，将鼠标悬浮在直方图某一蓝色数据块上时，您可查看到该数据块代表的时间范围和日志命中次数。 说明
   >
   > 若您想通过直方图查看更细时间粒度的日志分布情况，操作方法与业务日志一致，详情请参见[通过直方图查看日志分布情况](#ZH-CN_TOPIC_0000001432886916__li16636165985613)。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/fb/v3/Hs8n81hKQJGyafnpyg0adQ/zh-cn_image_0000001622031498.png?HW-CC-KV=V1&HW-CC-Date=20260909T173714Z&HW-CC-Expire=31536000000&HW-CC-Sign=ADBC840E86C3D491DDDFEE059E96059E37C7B6433766B8B29A7F4370D1D8E549)

