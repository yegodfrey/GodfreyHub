---
name: cangjie-guides/cj-determine-application-mode
title: 选择申请权限的方式
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-determine-application-mode
nodePath: 系统 / 安全 / 程序访问控制 / 应用权限管控 / 申请应用权限 / 选择申请权限的方式
---

# 选择申请权限的方式  
  
应用在访问数据或者执行操作时，需要评估该行为是否需要应用具备相关的权限。如果确认需要目标权限，则需要在应用安装包中申请目标权限。

每一个权限的权限等级、授权方式不同，申请权限的方式也不同，开发者在申请权限前，需要进行如下操作：

  1. 确认目标权限的**权限类型** 。可通过在对应的权限列表页面中检索确认。
  2. 参考对应的操作路径，申请权限。



应用可根据目标权限的开放范围、授权方式，参考以下操作路径申请对应权限。

#### 应用申请权限的方式

权限类型 | 授权方式 | 操作路径  
---|---|---  
[开放权限（系统授权）](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all) | system_grant | [声明权限](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-declare-permissions) > 访问接口  
[开放权限（用户授权）](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-permissions-for-all-user) | user_grant | [声明权限](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-declare-permissions) > [向用户申请授权](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-request-user-authorization) > 访问接口  
[受限开放权限](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-restricted-permissions) | system_grant | [申请使用受限权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions-in-acl) > [声明权限](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-declare-permissions) > 访问接口  
[受限开放权限](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-restricted-permissions) | user_grant | [申请使用受限权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/declare-permissions-in-acl) > [声明权限](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-declare-permissions) > [向用户申请授权](https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-request-user-authorization) > 访问接口
