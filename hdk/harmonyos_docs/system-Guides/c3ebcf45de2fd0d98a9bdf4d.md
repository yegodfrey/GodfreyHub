---
name: document/cn/system-Guides/beacon-management-0000001050040616
title: 信标管理
uri: https://developer.huawei.com/consumer/cn/doc/system-Guides/beacon-management-0000001050040616
---

# 信标管理

近距离通信服务提供了两种管理信标设备的方法，一种是通过RESTful接口，接口的使用方法可以参见[REST](https://developer.huawei.com/consumer/cn/doc/system-References/overview2-0000001061766323)，接口使用的示例代码可参见[信标消息订阅示例代码](https://developer.huawei.com/consumer/cn/doc/system-Examples/sample-code-0000001050123413#section118543711344)。另一种通过开发者联盟管理界面进行信标管理，本章节主要讲解管理界面使用方法。开始管理信标设备之前，需要完成如下操作：

1. 开通近距离通信服务，请参见[开通服务](https://developer.huawei.com/consumer/cn/doc/system-Guides/enabling-service-0000001050042529)。

2. [创建服务账号密钥](#section14630152018478)。

3. [选择数据存储站点](#section135615420475)。

4. 注册信标设备，使用方法请参见[注册信标设备](https://developer.huawei.com/consumer/cn/doc/system-References/login-beacon-0000001050154445)。

## 创建服务账号密钥

给第三方用户创建服务账号密钥时，第三方用户可以使用该账号凭证管理信标。详情请参见[API Console操作指南](https://developer.huawei.com/consumer/cn/doc/start/api-0000001062522591)中[服务帐号密钥](https://developer.huawei.com/consumer/cn/doc/start/api-0000001062522591#ZH-CN_TOPIC_0000001062522591__section11695162765311)。
> 说明
>
> 在联盟创建服务账号密钥（Service Account Key）时，对应的clientID将会存储在四个站点（中国、亚非拉、欧洲、俄罗斯）的Nearby服务器。您将服务账号密钥分配给具体的用户时，需要在隐私声明中指明服务账号密钥的存储位置。

## 选择数据存储站点

1. 登录[华为开发者联盟](https://developer.huawei.com/consumer/cn/)后，点击并进入右上角的"[管理中心](https://developer.huawei.com/consumer/cn/console)"。点击并进入"我的API"页面，点击"近距离通信服务"，点击"更多管理"。
2. 点击下图红框处设置数据存储站点信息（目前支持中国/亚非拉/俄罗斯/欧洲4个站点，系统默认选择开发者联盟网站的站点位置作为初始值）。

   ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240906154603.13993328106097749706457858615908:50001231000000:2800:DAECF8ACB9BE17388996D5AA5FEDED90D82EA3C095CD1E2B644EDB8A20112E04.png?needInitFileName=true?needInitFileName=true "点击放大")
   > 说明
   >
   > 只有设置数据存储站点信息之后，才可获取到正确的信标设备信息，数据存储站点的设置原则可参见[设置数据存储位置](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-datalocation-0000001160439813)。

## 管理信标设备

信标设备的命名空间如下图所示，信标设备ID的命名规则请查看[数据模型](https://developer.huawei.com/consumer/cn/doc/system-References/common-datamodel-0000001050158333)。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240906154603.54654306078729169508349279586495:50001231000000:2800:7FB78005A06B70BAF7F43CBC193023906909355C4CFB4574941A8C1D5ADB65A6.png?needInitFileName=true?needInitFileName=true "点击放大")

当命名不符合规则时，系统会出现如下图所示的错误提醒。您还可以自定义独有的信标ID前缀，请根据系统提示"信标设备标识长度为16到40个字符，如6bff00f723fdf7471402"正确设置。
> 注意
>
> 若您在[华为开发者联盟](https://developer.huawei.com/consumer/cn/)页面修改信标设备标识的前缀，请同步更新已注册的信标设备ID（采用新的信标前缀），否则旧的信标设备标识无法被扫描识别。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240906154603.10735675246207439860066078849904:50001231000000:2800:8E10984492F8E8CA03A06352D6B86575AA62DB1ADB25D0B23DD8CBE8D1F47388.png?needInitFileName=true?needInitFileName=true "点击放大")

选择存储站点之后，可以看到该站点上所有注册的信标设备，通过该页面对信标设备进行管理。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240906154603.84609733470343705967363918586096:50001231000000:2800:ACD7949375460C0FE0FBA03DE2792771BE127783C3062C38D5B7A1FC2573776B.png?needInitFileName=true?needInitFileName=true "点击放大")

图中标识①的地方，可以对每个信标进行"详情"，"消息附件"，"删除"三个操作。

* 详情：修改信标的状态（激活、去激活和停用）和更新信标设备属性。
* 消息附件：配置消息附件和删除消息附件。
* 删除：删除信标设备。

### 详情

在"详情"操作界面中，标记①的位置可以修改信标的状态（激活，去激活和停用）。

经纬度信息，支持三种方式获取：

* 通过在地图上选点。
* 在标记②"位置信息"输入要搜索具体地点，通过搜索获取具体的地点的经纬度信息。
* 手动输入经纬度信息，对于华为地图不支持的地区，需要您手动输入。华为地图支持的地区请查询[支持的国家/地区](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/supported-countries-and-regions-0000001050160946)。

修改完信标设备的属性，在标记③点击"提交"即可生效。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240906154603.86467403593944049618286061081298:50001231000000:2800:620263AAEB42F0A7747E3B472481C4F8D501E73CAC7E803425B310A354B5F710.png?needInitFileName=true?needInitFileName=true "点击放大")

### 消息附件

在"消息附件"的配置页面中，标记①处，点击"配置"配置消息类型和消息内容；标记②处，点击"删除"删除该消息附件。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240906154603.56952459837172255829571301594572:50001231000000:2800:49F00CC352FE5A618E5032E0F5FEB923C4F05AEC56A2BB1262D70D6D44CD94F4.png?needInitFileName=true?needInitFileName=true "点击放大")

在消息附件的配置页面，填写相应的类型、内容，点击"提交"后即完成配置消息附件的操作。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20240906154603.57429365287835640160057289202069:50001231000000:2800:A910FFDC104E4C99C59ADC17ED2C038DB68444827FB8C4623FD6D2A5BB1E5936.png?needInitFileName=true?needInitFileName=true)
> 说明
>
> 一个信标设备最多可以配置9个消息附件。

