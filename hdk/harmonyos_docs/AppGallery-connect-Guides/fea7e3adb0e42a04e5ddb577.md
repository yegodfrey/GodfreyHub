---
name: document/cn/AppGallery-connect-Guides/adx_dsp_api_get-start-0000001265631645
title: 接入前准备
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/adx_dsp_api_get-start-0000001265631645
---

# 接入前准备

1. 准备阶段
   1. ADX需要在AppGallery Connect（简称AGC）上[创建开发者账号](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)。
   2. 在AGC上[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)，获取客户端ID。  
      ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20221126115028.83839778792486085336135338351145:50531125054745:2800:75EE5A64403EA67DFBE774D3FE94E9D69AFED864C6FAABC7A86DC9C69CEE11A8.png?needInitFileName=true?needInitFileName=true)  
      创建API客户端时，"项目"保持默认值"N/A"，"角色"选择"管理员"。
   3. 在AGC上[查询开发者帐号ID](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-get-developerid-projectid-0000001166543063)，获取Developer ID。
   4. AG运营同学在媒体平台为ADX创建应⽤、展示位，设置屏蔽规则，并将展示位ID提供给ADX。
2. 开发阶段：ADX调用接口进行开发，并上报端侧的展示、点击、下载、安装等用户行为，AG研发同学会配合ADX进行联调。涉及接口如下：
   * [获取广告](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/adx_dsp_api_if-open-query-0000001265753497)
   * [获取应用详情页信息](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/adx_dsp_api_if-appinfo-query-0000001220833634)
   * [获取应用更新](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/adx_dsp_api_if-appinfo-update-0000001221153582)
   * [事件上报](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/adx_dsp_api_event-rpt-0000001223256328)

   接口调用流程如下：

   ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20221126115028.79699257495685671546485454395745:50531125054745:2800:6B64BF5BD91601D0E0BC987B8F34B8A9D2F92DA738D19D4E2CED8AB9075057D3.png?needInitFileName=true?needInitFileName=true "点击放大")
3. 灰度测试阶段：开发阶段后，进⾏⼩流量对数，本阶段的⽬标是确保双⽅联调数据（消耗、请求、返回、竞价成功、展现、点击）没有较⼤差异。
4. 正式上线阶段：在⼩流量对数阶段完成之后，即可正式上线。
