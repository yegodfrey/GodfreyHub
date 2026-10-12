---
name: document/cn/SPPartnerCenter-develop-Guides/manage-platform-domain-0000002554247847
title: 配置平台级域名
uri: https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/manage-platform-domain-0000002554247847
---

# 配置平台级域名

## 域名概述

元服务会使用到如下两种域名：

* 服务器域名：主要用于通过网络接口访问服务器场景。 当用户使用元服务时，将根据该元服务的域名配置进行域名访问，为用户提供安全可靠的网络环境，从而提升用户信任度和满意度。域名管控支持定期自动导入全局禁止清单内的域名，实现域名数据的自动化更新，时刻确保网络的正常运行和信息的安全传输。

  服务器域名分为如下域名类型：
  * httpRequest服务器域名
  * webSocket服务器域名
  * download服务器域名
  * upload服务器域名
* 业务域名：主要用于元服务Web组件加载H5页面场景。 当用户使用元服务时，将根据该元服务的业务域名配置实现业务跳转，为用户提供安全可靠的网络环境，从而提升用户信任度和满意度。

第三方管理平台为服务商提供了平台级的域名，可实现一个第三方平台的域名批量给多个元服务复用。服务商在第三方平台配置域名后，后续就可以调用接口将域名配置给代开发的元服务使用。
> 说明
>
> * 一个第三方平台中每种域名类型的服务器域名最多可配置200个。
> * 一个第三方平台中最多可配置100个业务域名。
> * 服务商的一个域名默认可被5个服务商ID使用。

## 配置服务器域名

1. 进入第三方平台详情页，左侧导航选择"域名配置"。 说明
   >
   > 处于"待提交"或"审核中"状态的第三方平台不会展示"域名配置"菜单。
2. 选择"服务器域名"页签，当前支持配置httpRequest、webSocket、download、upload四种服务器类型的域名，点击"修改"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/TCnLOsACQ-aRdkcTt6aJfQ/zh-cn_image_0000002723355219.png?HW-CC-KV=V1&HW-CC-Date=20261008T181420Z&HW-CC-Expire=31536000000&HW-CC-Sign=CA6236E000771D64464F66390CEF7C8361DB9ACBE3A8D9C8A541BF94A3D8574C "点击放大")

3. 在"服务器域名配置"弹框中，根据您的服务器类型，在对应服务器域名输入框中输入要新增的域名。 注意
   > * 域名仅支持英文大小写字母、数字以及符号"-""."，且单个域名长度不能超过128个字符，不同域名之间以英文";"分隔。
   > * 域名只支持HTTPS和WSS协议。
   > * 域名不能使用IP地址或localhost。
   > * 不可配置全局禁止清单内的域名。
   > * 每一类服务器域名（例如：httpRequest合法域名）配置数量不能超过200个。

   |配置项|说明|
   |:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   |httpRequest合法域名|httpRequest服务器域名，以"https://"开头，支持两种配置方法： * 配置端口 例如域名配置为https://myserver.com:8080，后续只能向https://myserver.com:8080发起请求。如果向https://myserver.com、https://myserver.com:9091等URL发起请求则会失败。 * 不配置端口 例如域名配置为https://myserver.com，后续请求的URL中将不能包含端口，即使是向默认的443端口（https://myserver.com:443）发起请求也会失败。|
   |webSocket合法域名|webSocket服务器域名，以"wss://"开头，不需要配置端口，默认允许请求该域名下所有端口。|
   |download合法域名|download服务器域名，以"https://"开头，支持两种配置方法： * 配置端口 例如域名配置为https://myserver.org:8080，后续只能向https://myserver.org:8080发起请求。如果向https://myserver.org、https://myserver.download:9091等URL发起请求则会失败。 * 不配置端口 例如域名配置为https://myserver.org，后续请求的URL中将不能包含端口，即使是向默认的443端口（https://myserver.org:443）发起请求也会失败。|
   |upload合法域名|upload服务器域名，以"https://"开头，支持两种配置方法： * 配置端口 例如域名配置为https://myserver.net:8080，后续只能向https://myserver.net:8080发起请求。如果向https://myserver.net、https://myserver.net:9091等URL发起请求则会失败。 * 不配置端口 例如域名配置为https://myserver.net，后续请求的URL中将不能包含端口，即使是向默认的443端口（https://myserver.net:443）发起请求也会失败。|

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/YRRoU5CyRSuyxQNTXn5giQ/zh-cn_image_0000002523093900.png?HW-CC-KV=V1&HW-CC-Date=20261008T181420Z&HW-CC-Expire=31536000000&HW-CC-Sign=86D6B9E9D06E39524558809766385986485D0EA3D7E5B18435FE115B51829819 "点击放大")

   配置域名过程中，若提示"输入内容包含非法域名"，可按如下操作修改。
   1. 点击提示信息旁边的"查看详情"查看具体的错误信息。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/GWdR298FQyC2Y7y1cAfQ6A/zh-cn_image_0000002554293841.png?HW-CC-KV=V1&HW-CC-Date=20261008T181420Z&HW-CC-Expire=31536000000&HW-CC-Sign=CE1D3B74090044CA2AC75FBEC82C4B0718F9C0ED89B5A2E4F8CADF93A3757452 "点击放大")

   2. 根据"服务器域名错误信息"弹框提示信息，对报错域名进行修改。 常见的域名配置错误如下：

      |失败原因|解决方法|
      |:-------------------------|:-----------------------------------------------------------------------------------------------|
      |该域名协议头非法|按照服务器域名类型修改为合法协议头。 * httpRequest/download/upload服务器域名以"https://"开头。 * webSocket服务器域名以"wss://"开头。|
      |不能使用IP地址作为域名|设置为合法域名。|
      |不能使用本地域名localhost|设置为合法域名。|
      |域名格式只支持英文大小写字母、数字及符号"-""."|去除域名中包含的非法字符。|
      |webSocket域名不能包含端口号|webSocket服务器类型的域名不需要配置端口，默认允许请求该域名下所有端口，去除域名中包含的端口。|
      |域名长度超过128|单个域名长度不超过128个字符。|
      |为保障安全不可使用此域名地址|配置的域名存在于域名禁止清单内，已被全局禁用，需替换为合法域名。|
      |输入域名超出上限：200|每类服务器域名个数不要超过上限200个。|

      ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/09hEYHvERCqo3ndsyVjWew/zh-cn_image_0000002523253916.png?HW-CC-KV=V1&HW-CC-Date=20261008T181420Z&HW-CC-Expire=31536000000&HW-CC-Sign=3366F2BDF8BAC84F86A2AE42DBE78B48F66F6970C5B054211F8A1E36BEDB6DD4 "点击放大")
4. 域名配置完成后，点击"提交"。
5. 在服务器域名列表，可看到不同服务器下已配置的域名、已配置的域名数量、可配置的域名总数量信息。 后续若需要修改或删除已添加的域名，可点击"修改"进行刷新。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/Dz1GXxCoTUOsFpR_yxykag/zh-cn_image_0000002693555864.png?HW-CC-KV=V1&HW-CC-Date=20261008T181420Z&HW-CC-Expire=31536000000&HW-CC-Sign=FFB3447B4B617BE9F8DD84498C1344F5E465A078C104E845FA55644FB7F95299 "点击放大")

## 配置业务域名

1. 针对每个元服务，提前将业务域名的配置文件部署到域名服务器中。
   1. 调用[下载域名配置文件](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/download-domain-config-file-0000002057667017)接口，下载配置文件。

      如果元服务的APP ID为"6917****37162267256"，则下载的域名配置文件文件为"6917****37162267256.txt"。
   2. 将下载的本地配置文件放置到域名根目录下，例如"test.com.cn/6917****37162267256.txt"，并确保可以成功访问该配置文件。
2. 进入第三方平台详情页，左侧导航选择"域名配置"。 说明
   >
   > 处于"待提交"或"审核中"状态的第三方平台不会展示"域名配置"菜单。
3. 选择"业务域名"页签，点击"修改"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bc/v3/LJdFjSZYRguY1Z42yoX72Q/zh-cn_image_0000002723235297.png?HW-CC-KV=V1&HW-CC-Date=20261008T181420Z&HW-CC-Expire=31536000000&HW-CC-Sign=74873EF79732AEE9EEEB8470CF3AC2DC6390FAC98BA0B9AB31FB79B9F7EE7B7F "点击放大")

4. 在"业务域名配置"弹框中配置业务域名。 注意
   > * 业务域名须以"https://"开头，仅支持英文大小写字母、数字以及符号"-""."，且单个域名长度不能超过128个字符。多个业务域名配置时请用英文符号";"分隔。
   > * 域名只支持HTTPS协议。
   > * 域名不支持使用IP地址或localhost。
   > * 网页内iframe的域名也需要配置。
   > * 业务域名配置数量最多不超过100个。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/LiiTfWNgTu-VWtoU3-v6AA/zh-cn_image_0000002523254224.png?HW-CC-KV=V1&HW-CC-Date=20261008T181420Z&HW-CC-Expire=31536000000&HW-CC-Sign=5E6C8695D83A0C002CFB22FD4ED126B2F20F77E042A62A9989F1AF31AA2AF186 "点击放大")

   配置域名过程中，若提示"输入内容包含非法域名"，可按如下操作修改。
   1. 点击提示信息旁边的"查看详情"查看具体的错误信息。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/yXiccp8CTMyk2LikI78URg/zh-cn_image_0000002554294153.png?HW-CC-KV=V1&HW-CC-Date=20261008T181420Z&HW-CC-Expire=31536000000&HW-CC-Sign=BB8D17D6615F6CFC924100AC242192962FEA791C287C1FA701AC8C6EAC7BB491 "点击放大")

   2. 根据提示信息，对报错域名进行修改。 常见的域名配置错误如下：

      |失败原因|解决方法|
      |:---------------------------|:-----------------------------------|
      |该域名未把配置文件放在域名根目录下|下载元服务的配置文件，并放置到域名根目录下，并确保可成功访问该配置文件。|
      |该域名协议头非法|域名以"https://"开头。|
      |不能使用IP地址作为域名|设置为合法域名。|
      |不能使用本地域名localhost|设置为合法域名。|
      |域名格式只支持英文大小写字母、数字及符号"- " "."|去除域名中包含的非法字符。|
      |域名长度超过128|单个域名长度不超过128个字符。|
      |为保障安全不可使用此域名地址|配置的域名存在于域名禁止清单内，已被全局禁用，需替换为合法域名。|
      |输入域名超出上限：100|设置业务域名个数不要超过100个。|
      |域名不能包含端口号|配置业务域名时，域名中不能包含端口号。|

      ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/wDAUu2mUTlmm38TkEbWKig/zh-cn_image_0000002523094222.png?HW-CC-KV=V1&HW-CC-Date=20261008T181420Z&HW-CC-Expire=31536000000&HW-CC-Sign=0F788FE76EBB3BE4A88470D07C428EA90918FA179CFB8A53452FF277632D39E9 "点击放大")
5. 域名配置完成后，点击"提交"。
6. 在业务域名列表，可看到已配置的域名、已配置的域名数量、可配置的域名总数量信息。 后续若需要修改或删除已添加的域名，可点击"修改"进行刷新。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/DwTq9MTKTyusOnH-kgHEPg/zh-cn_image_0000002693715752.png?HW-CC-KV=V1&HW-CC-Date=20261008T181420Z&HW-CC-Expire=31536000000&HW-CC-Sign=8D9CB7964B000A37AA581F218C180D4D1E26A305F9087D67EEA0BC20E4F1587A "点击放大")

## 跳过域名校验

在开发过程中，如果需要临时跳过域名校验，可在HarmonyOS设备端临时开启"**开发中元服务豁免管控**"选项，操作如下：

1. 打开"设置 > 关于本机"，多次点击版本号，打开开发者模式。
2. 打开"设置 > 系统"，在下方找到"开发人员选项"并点击进入。
3. 在下方"应用"区域，打开"开发中元服务豁免管控"开关。

服务器域名和业务域名配置成功后，建议您关闭此选项进行测试，以确认元服务域名配置正确。

