---
name: document/cn/AppGallery-connect-Guides/pgsmoment-open-0000001291688829
title: 打开社区
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/pgsmoment-open-0000001291688829
---

# 打开社区

您可以在游戏内设计社区入口，通过调用接口在游戏中显示游戏内嵌社区页面。  

#### 前提条件

内嵌社区已完成[初始化](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/pgsmoment-init-0000001244091880)。  

#### 开发步骤

调用[PgsMoment.open](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/gdpsdk-api-pgsmoment-0000001403658572#section1719413814186)打开游戏内嵌社区。  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230928155810.16392343518599540109542185854205:50001231000000:2800:77DA739B2D30C1A74BE22D70E5FE757764133E206B44F52B933C00F7DD9CABA9.png?needInitFileName=true?needInitFileName=true)  
若希望社区页面与游戏场景更契合，您可以为游戏内嵌社区[配置页面样式](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/pgsmoment-agc-config-0000001291569413#section1025518105717)。

```
// 打开内嵌社区
public void openForumPage() {
    PgsMoment.open(new PgsOpenCallback() {
        @Override
        public void onSuccess(Response rsp) {
            // 成功打开内嵌社区
        }
        @Override
        public void onFailure(Response rsp) {
            // 打开内嵌社区失败
            Log.e(TAG, "RtnCode: " + rsp.getRtnCode() + "; Msg: " + rsp.getMsg());
        }
    });
}
```

