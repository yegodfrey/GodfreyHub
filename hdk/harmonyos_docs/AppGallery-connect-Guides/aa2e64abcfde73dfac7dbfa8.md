---
name: document/cn/AppGallery-connect-Guides/agc-cloudmonitor-access-preparation-0000001264774700
title: 接入准备
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudmonitor-access-preparation-0000001264774700
---

# 接入准备

当您成功注册[华为开发者账号](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)和[创建项目](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-help-createproject-0000001100334664)后，将自动开通云监控服务。  

#### 开通接入云监控的服务

若您需要在云监控界面查看AGC服务，例如云函数、云数据库服务的监控指标或告警数据，您首先需要开通云函数、云数据库服务。如果您已经开通，可跳过本步骤。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中选择您的项目。
3. 根据实际需要开通云函数、云数据库服务，详细方法请参见[开通云函数服务](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/harmonyos-arkts-create-func-preparations-0000001712006001#section6307195214294) \| [开通云数据库服务](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-clouddb-createfirstclouddb-0000001569588629#section379484118716)。

#### 创建云函数

开通云函数服务后，您首先需要在AGC中创建函数，并添加函数执行的代码，详细步骤请参见[创建函数](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/create-and-config-harmonyos-arkts-0000001713008113)。  

#### 创建存储区和对象类型

存储区（即Cloud DB zone）是一个独立的数据存储区域，多个数据存储区互相独立。每个存储区拥有完全相同的对象类型定义，您可以根据业务的需要自定义存储区中存储的对象。对象类型是用于存放对象的集合，用于存储应用产生的数据信息。

在云监控界面查看云数据库的监控指标和配置告警之前，您首先需要创建存储区和对象类型，详细步骤请参见[新增存储区](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-clouddb-createfirstclouddb-0000001569588629#section176494298138)和[新增对象类型](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-clouddb-createfirstclouddb-0000001569588629#section1187312482820)。
