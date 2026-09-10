---
name: document/cn/app/game-center-setup-activities-login-0000001608734802
title: 登录有奖
uri: https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-login-0000001608734802
---

# 登录有奖

为了提升用户新增注册量和活跃度，您可以创建登录有奖活动。在活动期间，首次使用华为账号登录应用的新用户或者使用同一华为账号连续登录指定天数的用户有机会获得奖励。  
![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251015105450.91727152482690738513292046116447:50001231000000:2800:331F6F28CC08D40D01886519E895FD130ECC2C31C1981271C2F07923A8472A39.png)  
已实名认证的企业开发者才能创建活动。  

#### 展示效果

登录有奖活动落地页展示效果如下。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251015105450.24101333818088848189695859938716:50001231000000:2800:33B503470BEB4D015BA8841A13FB78B4766FD67E6C4CD77DE9708BDC6E27BF2C.png)  

#### 接入流程

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251015105450.28091753726701937737638022278861:50001231000000:2800:A3A747AD4BCA1FBE096DC88FAAC0780D8D1652771AAD1DA73FA2A2360C36BCAA.png "点击放大")

<br />

#### 活动准备

* 已成功[创建应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717)，且软件包类型为"APK(Android应用)"或者"RPK(快应用)"，支持设备为"手机"。
* 含奖品的活动需提前准备奖品素材，详情请参见[奖品素材](https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-param-0000001608575030#section953762813448)。
* 提前准备活动落地页素材。  

  |准备项||说明|
  |:-|-|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |活动封面图片||要求宽高分辨率为1280px\*720px，且大小不超过200KB的JPG格式图片。 说明： * 设计图无需Logo和文字，尽量突出活动主题和元素，更详细要求可参照[活动素材规范](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251015105451.95383088925136093128298412530955:50001231000000:2800:9BAA15635789AFBEE459943C3CCCFA8D28E28970C0443CD21F025A50CC90D0B7.zip?needInitFileName=true)。 * 活动形式为"直接发奖"且落地页选择"活动详情页"时还需要准备一份同一设计图，尺寸为357px\*264px，大小不超过150KB的JPG格式图片。|

#### 配置活动奖品

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251015105450.77332480984339080491865994994318:50001231000000:2800:14933E9A78C84ADAFA4FF4E5A81A114E1CD691F6E67057DE0CD1FC18A8F81F30.png)  
若创建无奖品活动可跳过该步骤。

通过各类运营活动，为用户提供活动奖励，以不同活动形式向用户发放奖品，需先配置可添加至运营活动的活动奖品，配置活动奖品操作步骤如下。文中具体参数说明请参见[参数说明](https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-param-0000001608575030)。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"APP与元服务"，在应用列表中选择需要新增奖品的应用。
2. 新增奖品。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251015105450.88214688289557891460037994781915:50001231000000:2800:60FEF48EA9D5E75DA7671ED62A9701E307522153677F29E97887B5081C12EB5F.png)

<!-- -->

3. 填写奖品信息，完成后点击右上角"提交"提交审核。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251015105450.24755607851814602830433795928561:50001231000000:2800:5404C64731F6CC107FFCC5E9EBF9101BA4959A0C397CDB648C39EC456618A29D.png)

#### 创建活动

配置活动奖品并提交审核后，您可按如下步骤创建登录有奖活动。文中具体参数说明请参见[参数说明](https://developer.huawei.com/consumer/cn/doc/app/game-center-setup-activities-param-0000001608575030)。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"APP与元服务"，在应用列表中选择应用。
2. 新建活动。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251015105450.56927352780931413081681323601524:50001231000000:2800:CA51254D0306B2C4449A64A9EA09BFD8120C1012D4B557063C8C2058EFDB60B3.png)

3. 配置活动规则。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251015105450.56021516376383794072881012824670:50001231000000:2800:A332AA09554E238339739B918C92DCE453864BE27DFF9581C5E7C2966D31AA53.jpg)

4. 下滑页面至"活动奖品配置"区域配置活动奖品（若"活动形式"选择"无奖品H5"无需配置，不展示该内容）。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251015105451.09064902809644407983328708901872:50001231000000:2800:ED44A029B01A92C9364DE9330CEBBB04E2673376951D0AD81C1CBAAFA479A93C.png)

5. 配置活动落地页及其它信息。 ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251015105451.12418235432102747732579267807665:50001231000000:2800:4834323D987A2FF8851C636A6286FC1A19C3FED691218F692C578E24BE95901C.png)

6. 审核与上架。 点击页面右上角"提交审核"提交审核后，华为工作人员审核活动申请预计需要1\~3个工作日，请耐心等待。审核结果可在状态栏查看。

   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251015105451.93110005859587359262106083306900:50001231000000:2800:BBADBC4D238F8D414846F2303CB157122FB037F3303210C3E2144A2A53307E98.png)  
   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251015105451.39109348626328095805522149197305:50001231000000:2800:676E2446B705D08E37E68701C43E3BDFE5C42090F5C5651A4767E9642F66A91D.png)  
若想修改审核中的活动，请先撤销运营活动的申请，重新编辑活动后再提交审核。  
