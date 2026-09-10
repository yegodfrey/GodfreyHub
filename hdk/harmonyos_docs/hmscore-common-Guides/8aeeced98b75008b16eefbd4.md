---
name: document/cn/hmscore-common-Guides/oobe-0000001266629341
title: OOBE设置
uri: https://developer.huawei.com/consumer/cn/doc/hmscore-common-Guides/oobe-0000001266629341
---

# OOBE设置

由于HMS Core是系统基础服务，因此需要在设备的OOBE（首次开机向导）流程中增加HMS Core的引导过程，本章节介绍各品类设备上OOBE的要求和对接方式。  

#### 手机/平板品类

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230403172201.91206450070110643277473347579049:50001231000000:2800:AF1787918EC4104C73A434EC19E6CA74DC80A0D0E8ED91068B70C1B94950AB42.png?needInitFileName=true?needInitFileName=true "点击放大")

1. 在"网络配置"页面之后引导HMS Core的相关页面。
2. 中国大陆地区发货的设备，引导页面流程："华为帐号 \> 华为移动服务"。
3. 中国大陆地区以外发货的设备，引导页面流程："华为帐号 \> 华为移动服务 \> 统计与分析"。
4. 当用户在OOBE阶段未配置联网，可以跳过"华为帐号"页面。

下面给出各页面引导的代码示例。  

#### 华为帐号页面

```
Intent intent = new Intent("com.huawei.hwid.START_BY_OOBE");
intent.putExtra("isOobe", 1);
startActivityForResult(intent,10000);
```

#### 华为移动服务页面

```
Intent intent = new Intent("com.huawei.hms.action.oobe.HW_HMS_STATEMENT");
intent.putExtra("isOOBE", 1);
startActivityForResult(intent, 10000);
```

#### 统计与分析页面

```
Intent intent = new Intent("com.huawei.hms.action.oobe.HW_HMS_APP_ANALYTICS_STATEMENT");
intent.setPackage("com.huawei.hwid");
intent.putExtra("isOOBE", 1); 
startActivityForResult(intent, 10000); 
```

#### 返回值说明

resultCode为Activity.RESULT_OK 表示【下一步】，为Activity.RESULT_CANCELED 表示【上一步】。

```
@Override
protected void onActivityResult(int requestCode, int resultCode, Intent data) {
     switch (requestCode) {
         case 10000:
             if (resultCode == Activity.RESULT_OK) {
                 //下一步;
             } else if(resultCode == Activity.RESULT_CANCELED) {
                 //上一步;
             }
             break;
        default:
             break;
     }
 }
```

