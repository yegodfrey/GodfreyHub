---
name: document/cn/HMSCore-Guides/android-config-agc-0000001050163815
title: 配置AppGallery Connect
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/android-config-agc-0000001050163815
source: portal
---

# 配置AppGallery Connect

#### 操作步骤

    1. 如果没有[华为开发者联盟](https://developer.huawei.com/consumer/cn/)帐号，需要先注册帐号并通过实名认证。详细操作请参见[ _帐号注册认证_](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)。
    2. 参见[创建项目](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createproject-0000001100334664)和在[项目中添加应用](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createapp-0000001146718717)完成应用的创建。
    3. 开通华为分析服务：
       1. 登录[ _AppGallery Connect_](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，点击“我的项目”图标。 
       2. 选择已创建完成的应用。 
       3. 点击“华为分析”下的任意菜单，并点击“启动分析服务”可开通分析服务。（注：需拥有产品管理权限才可开通服务。）![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115302.00797109710431966860756333260600:50001231000000:2800:709840DBD37857F34E29249B41EE42E60A47586F67CFFE58DF792D5F665EA407.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true)
       4. 进入“项目接入设置”页面，设置数据处理位置、设置用户数据留存时间、设置自然周定义后，点击“完成”，即完成Analytics Kit服务开通。  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115303.29660520184786036480519676925035:50001231000000:2800:969C2EB1048C2610DE8322CBDD413FE73E28F83119A30FB88BC9A1FEF9DD7E79.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true) 如果您的应用发布到全球多个国家，建议您启用多数据处理位置，使用[getInstance(Context context, String routePolicy)](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/android-api-hianalytics-0000001050707170#section123561840111517)初始化SDK，按照用户实际使用区域指定数据上报位置。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115303.44233648256058810989790568365017:50001231000000:2800:1AA9949BDACF19C6A95FBA2F3A11410E6C1010EB9155839A0D408CB7D7602DBA.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true) ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230926115303.70669463682709879284669711982546:50001231000000:2800:15428AB8F4668F340DB9261858D147C440CDE62427EACA7E2E505E96C360463C.png?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true?needInitFileName=true) 请打开[ _AppGallery Connect_](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)网站，选择“我的项目”，在项目列表中找到您要打开的项目并点击，在AppGallery Connect界面选择“项目设置  > API管理”查看是否开启华为分析。
