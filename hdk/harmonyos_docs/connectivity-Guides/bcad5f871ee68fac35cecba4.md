---
name: document/cn/connectivity-Guides/requesting-user-authorization-0000001050819181
title: 请求用户授权
uri: https://developer.huawei.com/consumer/cn/doc/connectivity-Guides/requesting-user-authorization-0000001050819181
---

# 请求用户授权

为保护用户隐私，Wear Engine的API需要用户授权才可以正常访问。建议开发者在用户首次调用Wear Engine开放能力的时候执行本章节操作。

## 查询用户授权结果

用于查询用户是否授予第三方应用权限。如果检测到用户未授权，请参见下一节[申请用户穿戴设备权限](#section7157142771512)向用户请求权限。

若用户的运动健康App版本为11.0.3.512及以上，且对第三方应用未进行过授权操作，则消息通知[NOTIFY](https://developer.huawei.com/consumer/cn/doc/connectivity-References/permission-0000001059433005#ZH-CN_TOPIC_0000001874111234__NOTIFY)、设备基础信息[DEVICE_MANAGER](https://developer.huawei.com/consumer/cn/doc/connectivity-References/permission-0000001059433005#ZH-CN_TOPIC_0000001874111234__DEVICE_MANAGER)将默认授予第三方应用。建议在请求用户授权前，先使用该接口查询应用是否已有相关权限。
> 说明
>
> 请确保权限已在[申请Wear Engine服务](https://developer.huawei.com/consumer/cn/doc/connectivity-Guides/applying-wearengine-0000001050777982)中审批通过，否则会遇到错误码为8的提示。

1. 第三方应用调用[HiWear](https://developer.huawei.com/consumer/cn/doc/connectivity-References/hiwear-0000001060938716)中的[getAuthClient](https://developer.huawei.com/consumer/cn/doc/connectivity-References/hiwear-0000001060938716#ZH-CN_TOPIC_0000001873951394__getAuthClient-android_content_Context-)方法，获取[AuthClient](https://developer.huawei.com/consumer/cn/doc/connectivity-References/authclient-0000001059980967)对象。
2. 调用[checkPermission](https://developer.huawei.com/consumer/cn/doc/connectivity-References/authclient-0000001059980967#ZH-CN_TOPIC_0000001919950749__checkPermission-com_huawei_wearengine_auth_Permission-)方法，查询权限是否授予，或调用[checkPermissions](https://developer.huawei.com/consumer/cn/doc/connectivity-References/authclient-0000001059980967#ZH-CN_TOPIC_0000001919950749__checkPermissions-com_huawei_wearengine_auth_Permission:A-)方法，查询一组权限是否授予。

   ```screen
   // 步骤1：获取AuthClient对象
   AuthClient authClient = HiWear.getAuthClient(this);

   // 步骤2：调用checkPermission方法，查询权限是否授予
   authClient.checkPermission(Permission.DEVICE_MANAGER).addOnSuccessListener(new OnSuccessListener<Boolean>() {
       @Override
       public void onSuccess(Boolean aBoolean) {
           // 返回权限是否授予，true为授予，false为未授予
       }
   }).addOnFailureListener(new OnFailureListener() {
       @Override
       public void onFailure(Exception e) {
           // 接口调用失败
       }
   });

   // 或调用checkPermissions方法，查询一组权限是否授予
   Permission[] permissions = {Permission.DEVICE_MANAGER,Permission.NOTIFY};
   authClient.checkPermissions(permissions).addOnSuccessListener(new OnSuccessListener<Boolean[]>() {
       @Override
       public void onSuccess(Boolean[] booleans) {
           // 返回权限是否授予，true为授予，false为未授予，按照权限的查询顺序返回对应的值。
       }
   }).addOnFailureListener(new OnFailureListener() {
       @Override
       public void onFailure(Exception e) {
           // 接口调用失败
       }
   });
   ```

## 申请用户穿戴设备权限

**图1**请求用户授权

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20251031091802.63605758341216448475533371660374:50001231000000:2800:DF9CC001CBD986922317285C489484E743557CE7F2F8316D337C1CBD0816E0E1.png)

1. 第三方应用调用[HiWear](https://developer.huawei.com/consumer/cn/doc/connectivity-References/hiwear-0000001060938716)中的[getAuthClient](https://developer.huawei.com/consumer/cn/doc/connectivity-References/hiwear-0000001060938716#ZH-CN_TOPIC_0000001873951394__getAuthClient-android_content_Context-)方法，获取[AuthClient](https://developer.huawei.com/consumer/cn/doc/connectivity-References/authclient-0000001059980967)对象。
2. 定义用户授权的回调对象authCallback。
3. 调用[requestPermission](https://developer.huawei.com/consumer/cn/doc/connectivity-References/authclient-0000001059980967#ZH-CN_TOPIC_0000001919950749__requestPermission-com_huawei_wearengine_auth_AuthCallback-com_huawei_wearengine_auth_Permission___-)方法，向用户请求权限。执行成功后，会弹出授权界面，让用户选择授予权限。当用户允许后才能正常使用接口，否则会遇到错误码为9的提示。

   > 说明
   > * 请确保向用户请求的权限已在[申请Wear Engine服务](https://developer.huawei.com/consumer/cn/doc/connectivity-Guides/applying-wearengine-0000001050777982)中审批通过，否则会遇到错误码为8的提示。
   > * 该功能可以多次调用，如果申请的权限之前已经授予了，不会再弹出授权页面，接口会返回已经授权的权限。
   > * 通过入参的[Permission](https://developer.huawei.com/consumer/cn/doc/connectivity-References/permission-0000001059433005)对象，获取第三方应用需要的权限。参见[获取的权限](https://developer.huawei.com/consumer/cn/doc/connectivity-Guides/applying-wearengine-0000001050777982#ZH-CN_TOPIC_0000001873951218__table99191256194614)了解应用所需请求的权限类型。
   > * 通过[AuthCallback](https://developer.huawei.com/consumer/cn/doc/connectivity-References/authcallback-0000001059850647)对象，返回用户的授权结果：onOk的回调返回用户授权的权限列表；onCancel表示取消授权。

   ```screen
   // 步骤1：获取AuthClient对象
   // this 表示应用上下文Context对象
   AuthClient authClient = HiWear.getAuthClient(this);

   // 步骤2：定义用户授权的回调对象
   AuthCallback authCallback = new AuthCallback() {
       @Override
       public void onOk(Permission[] permissions) {
           // 返回用户授予的权限列表
       }
       @Override
       public void onCancel() {
           // 用户取消授权
       }
   };

   // 步骤3：请求用户授权指定的权限（如：DEVICE_MANAGER，设备管理权限）
   authClient.requestPermission(authCallback, Permission.DEVICE_MANAGER)
       .addOnSuccessListener(new OnSuccessListener<Void>() {
           @Override
           public void onSuccess(Void successVoid) {
               // 请求授权任务执行成功
           }
       })
       .addOnFailureListener(new OnFailureListener() {
           @Override
           public void onFailure(Exception e) {
               // 请求授权任务执行失败
           }
       });

   // 说明：可一次申请多个权限，多个权限之间用逗号分隔：authClient.requestPermission(authCallback, Permission.DEVICE_MANAGER,Permission.NOTIFY,其他权限)
   // 说明：调用该API后，会弹出授权界面，让用户选择授予权限
   ```

