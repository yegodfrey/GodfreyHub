---
name: document/cn/AppGallery-connect-Guides/gamemme-riskcontrol-result-0000001734830161
title: 查看检测结果
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-riskcontrol-result-0000001734830161
---

# 查看检测结果

实时语音、实时信令文本消息和语音消息内容送检后，您可在AGC控制台查看到疑似违规的检测结果，并可根据使用需要下载录音或导出文本消息内容进行人工复审，以确保风控的审核准确率。

## 前提条件

* 您已[开启内容检测](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/gamemme-console-servicemanagement-0000001255134391#section17288256144510)功能。
* 您已通过自动送检或人工送检方式进行内容送检。

## 操作步骤

1. 点击"内容检测 > 检测结果"，并选择"服务类型"，设置筛选条件（如标签分类、检测评分、用户ID、房间ID等），点击"查询"可查看30天（最长存储时长）内的检测结果详情。 说明
   >
   > "检测评分"是置信度的概念，得分越高表示检测结果的置信度越高。
   * 服务类型一：实时语音 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260116110616.60547811403732340406424844198393:50001231000000:2800:428694BC64F997EA7024415737897AB7F3C9D9E2520BE79D8D90193F741A1FB3.png)


   * 服务类型二：RTM实时信令 说明
     >
     > "RTM实时信令"服务类型的内容检测，可针对游戏中的文本消息内容进行检测，帮助您重点发现外挂、广告拉人等违规行为。

     ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260116110616.52337054338616086234769098980663:50001231000000:2800:E1662C6A5BA1F4B9D9F5CBA0EE033FBEF92B15F3997D436D593A12A9F2F330CF.png)
   * 服务类型三：语音消息 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260116110616.35415085441093001521759097262182:50001231000000:2800:6C71828412579F2D9F78B5ED9D570A332D438EFD9370CC1EC1CE28F11D10FF9C.png)

2. 如对检测结果存疑或需要人工复审，您还可以进行下载录音或导出检测报告等操作。
   * 实时语音：点击语音流切片检测结果列表对应"操作"列的"录音下载"，可将指定语音流切片下载到本地进行二次审核。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260116110616.07399900731719686323052183303279:50001231000000:2800:96A64ECA0D731475B7260475ADE8104BF3428A53C588B73605ABE6BD3A8C5801.png)

   * RTM实时信令：点击"导出报告"，可将文本消息内容的检测结果下载到本地进行查看。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260116110616.79642889219952602673964326880933:50001231000000:2800:B3FD82AE9479D49F6FD4C5D5D5980CD9863592E063AA8829B0F93C702B8EA667.png)

   * 语音消息：点击语音消息检测结果列表对应"操作"列的"录音下载"，可将指定语音消息文件下载到本地进行二次审核。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260116110616.70077211929509954529107410612541:50001231000000:2800:6BF02D7D3DF11F58604A7DD7B87CF47D903420EC8E0078B12924DFFA4AD0AE10.png)

