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
2. 选择"服务器域名"页签，当前支持配置httpRequest、webSocket、download、upload四种服务器类型的域名，点击"修改"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/4e/v3/TCnLOsACQ-aRdkcTt6aJfQ/zh-cn_image_0000002723355219.png?HW-CC-KV=V1&HW-CC-Date=20260914T111900Z&HW-CC-Expire=31536000000&HW-CC-Sign=0D1F4DE204DFFA12AF5FAEF8BB24E3DE994C204E0116B7CC4D7806B7F8757BE6 "点击放大")

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

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/40/v3/YRRoU5CyRSuyxQNTXn5giQ/zh-cn_image_0000002523093900.png?HW-CC-KV=V1&HW-CC-Date=20260914T111900Z&HW-CC-Expire=31536000000&HW-CC-Sign=D4A20195F280E2A552F4E44DCD568F3EC9D6DFA01480B706B9F7EC200E816898 "点击放大")

   配置域名过程中，若提示"输入内容包含非法域名"，可按如下操作修改。
   1. 点击提示信息旁边的"查看详情"查看具体的错误信息。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/54/v3/GWdR298FQyC2Y7y1cAfQ6A/zh-cn_image_0000002554293841.png?HW-CC-KV=V1&HW-CC-Date=20260914T111900Z&HW-CC-Expire=31536000000&HW-CC-Sign=EDFFB7ECA602661EA90B0EEA56F0187330856A933314D07180F717A97BAE2ADA "点击放大")

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

      ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d9/v3/09hEYHvERCqo3ndsyVjWew/zh-cn_image_0000002523253916.png?HW-CC-KV=V1&HW-CC-Date=20260914T111900Z&HW-CC-Expire=31536000000&HW-CC-Sign=2850DE7D78FEC2A0F4D1DD12483A308B7651B77543E3A9DCA11C2E6408F42A30 "点击放大")
4. 域名配置完成后，点击"提交"。
5. 在服务器域名列表，可看到不同服务器下已配置的域名、已配置的域名数量、可配置的域名总数量信息。 后续若需要修改或删除已添加的域名，可点击"修改"进行刷新。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/eb/v3/Dz1GXxCoTUOsFpR_yxykag/zh-cn_image_0000002693555864.png?HW-CC-KV=V1&HW-CC-Date=20260914T111900Z&HW-CC-Expire=31536000000&HW-CC-Sign=90B0023D3CE86FA7523C7B89684929867E945AFC1930BD26FB8224988F80D02C "点击放大")

## 配置业务域名

1. 针对每个元服务，提前将业务域名的配置文件部署到域名服务器中。
   1. 调用[下载域名配置文件](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/download-domain-config-file-0000002057667017)接口，下载配置文件。

      如果元服务的APP ID为"6917****37162267256"，则下载的域名配置文件文件为"6917****37162267256.txt"。
   2. 将下载的本地配置文件放置到域名根目录下，例如"test.com.cn/6917****37162267256.txt"，并确保可以成功访问该配置文件。
2. 进入第三方平台详情页，左侧导航选择"域名配置"。 说明
   >
   > 处于"待提交"或"审核中"状态的第三方平台不会展示"域名配置"菜单。
3. 选择"业务域名"页签，点击"修改"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/bc/v3/LJdFjSZYRguY1Z42yoX72Q/zh-cn_image_0000002723235297.png?HW-CC-KV=V1&HW-CC-Date=20260914T111900Z&HW-CC-Expire=31536000000&HW-CC-Sign=83F17E224ED83D63D00119845A4117D0A5AFA5651626539B0026720F6E1E2617 "点击放大")

4. 在"业务域名配置"弹框中配置业务域名。 注意
   > * 业务域名须以"https://"开头，仅支持英文大小写字母、数字以及符号"-""."，且单个域名长度不能超过128个字符。多个业务域名配置时请用英文符号";"分隔。
   > * 域名只支持HTTPS协议。
   > * 域名不支持使用IP地址或localhost。
   > * 网页内iframe的域名也需要配置。
   > * 业务域名配置数量最多不超过100个。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/19/v3/LiiTfWNgTu-VWtoU3-v6AA/zh-cn_image_0000002523254224.png?HW-CC-KV=V1&HW-CC-Date=20260914T111900Z&HW-CC-Expire=31536000000&HW-CC-Sign=B23A11DBDACFA64E55704C6205BD31155943F57CBE07EBD001D027BBB77FCD9E "点击放大")

   配置域名过程中，若提示"输入内容包含非法域名"，可按如下操作修改。
   1. 点击提示信息旁边的"查看详情"查看具体的错误信息。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/yXiccp8CTMyk2LikI78URg/zh-cn_image_0000002554294153.png?HW-CC-KV=V1&HW-CC-Date=20260914T111900Z&HW-CC-Expire=31536000000&HW-CC-Sign=F91EB15A061A34B61A3DE5840243B8A398AAFB69F3472CDB9F31C37C014FA041 "点击放大")

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

      ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/69/v3/wDAUu2mUTlmm38TkEbWKig/zh-cn_image_0000002523094222.png?HW-CC-KV=V1&HW-CC-Date=20260914T111900Z&HW-CC-Expire=31536000000&HW-CC-Sign=C85672A682A0D4D244EE809F8795BA1B8054AA6FDD5629E5C6E232B454EF30A8 "点击放大")
5. 域名配置完成后，点击"提交"。
6. 在业务域名列表，可看到已配置的域名、已配置的域名数量、可配置的域名总数量信息。 后续若需要修改或删除已添加的域名，可点击"修改"进行刷新。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/92/v3/DwTq9MTKTyusOnH-kgHEPg/zh-cn_image_0000002693715752.png?HW-CC-KV=V1&HW-CC-Date=20260914T111900Z&HW-CC-Expire=31536000000&HW-CC-Sign=C706BA4502311817FE8E4EBEFDBA480A5B55D5328014930F92E5989044A60F2B "点击放大")

## 跳过域名校验

在开发过程中，如果需要临时跳过域名校验，可在HarmonyOS设备端临时开启"**开发中元服务豁免管控**"选项，操作如下：

1. 打开"设置 > 关于本机"，多次点击版本号，打开开发者模式。
2. 打开"设置 > 系统"，在下方找到"开发人员选项"并点击进入。
3. 在下方"应用"区域，打开"开发中元服务豁免管控"开关。

服务器域名和业务域名配置成功后，建议您关闭此选项进行测试，以确认元服务域名配置正确。

