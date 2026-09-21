---
name: document/cn/AppGallery-connect-References/harmonyos-ts-signinresult-0000001522278605
title: SignInResult
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-signinresult-0000001522278605
---

# SignInResult

登录结果。

## Method Summary

|Qualifier and Type|Method Name and Description|
|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------|
|[AGConnectUser](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-agconnectuser-0000001471398626)|[getUser](#section266352765)() 返回当前登录的用户信息。|

## Methods

### getUser

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|getUser():[AGConnectUser](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-agconnectuser-0000001471398626) 返回当前登录的用户信息。|

**Return**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[AGConnectUser](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-ts-agconnectuser-0000001471398626)|当前登录的用户信息。|

**Sample Code**

```screen
agconnect.auth().signIn(credential).then(result=>{
var user = result.getUser();
})
```

