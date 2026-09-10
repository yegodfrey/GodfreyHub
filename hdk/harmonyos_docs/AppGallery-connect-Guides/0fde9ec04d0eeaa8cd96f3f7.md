---
name: document/cn/AppGallery-connect-Guides/agc-auth-server-exportuser-0000001775188677
title: 导出用户
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-server-exportuser-0000001775188677
---

# 导出用户

您可以通过认证服务的Server SDK导出认证服务中的用户信息。  

#### 前提条件

您需要在您的开发工程中集成认证服务的Server SDK，请参见[集成SDK](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-server-js-integration-sdk-0000001727548354)。

<br />

#### 开发步骤

调用[Auth.exportUserData](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/nodejs-auth-0000001732781480#section15272171382118)方法导出用户，指定导出用户数据文件具体路径。  
服务器进程执行用户需要具备导出用户数据文件的写权限，且导出文件必须为空文件，默认导出所有用户。

```
const result = cloud.auth().exportUserData({filePath: "/home/auth/export/userdata.json"})
```

或者

```
const result = cloudInstance.auth().exportUserData({filePath: "/home/auth/export/userdata.json"})
```

导出的用户数据结构与导入用户数据结构相同，具体字段说明请参见[导入用户](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-server-importuser-0000001727388958)中json文件的字段说明。

导出用户结果说明：  

|字段|类型|说明|
|:-------------|:---------|:-----------|
|successUsers|number|导出成功用户数量。|
|errorUsers|number|导出失败用户数量。|
|errorUsersList|string\[\]|导出失败用户uid列表。|

