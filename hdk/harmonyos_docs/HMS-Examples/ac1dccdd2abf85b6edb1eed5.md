---
name: document/cn/HMS-Examples/push-serverphpsdk
title: PHP 示例代码
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Examples/push-serverphpsdk
source: portal
---

# **1\. PHP示例代码介绍**

PHP示例代码对华为push的服务端接口进行封装，为开发者提供PHP程序接入华为Push的能力，其中包含丰富的示例程序，方便开发者参考或直接使用。

PHP示例代码主要包括以下组成：

包名| 说明  
---|---  
examples| 示例代码，各个php文件均可运行发送消息  
push_admin| Push服务端的接口封装  
  
PHP SDK接入前需确认是否安装PHP环境，SDK基于XAMPP(MySQL,PHP,Perl)**开发套件** 5.6.26上进行调试。

# 2\. 方法定义说明

PHP示例代码以push_admin包中的Application结构体为入口，Application结构体的核心方法完成了对华为Push服务端接口的调用；

Application包括以下方法：

方法名称| 说明  
---|---  
push_send_msg| 向设备推送消息  
common_send_msg| 订阅主题、退订主题、查询某设备订阅的主题列表  
__construc| 构造函数，获取发送必需的关键数据；  
  
# 3\. 配置参数说明

__construct的参数说明如下：

配置名称| 说明  
---|---  
appid| 应用的APP ID，从应用信息获取  
appsecret| 应用的SecretKey，从应用信息获取  
access_token| 华为OAuth2.0服务获取token接口地址，[请参考开放平台鉴权章节3.2客户端密码模式](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/30101#h2-3-2-)  
hw_token_server| 华为Push服务访问地址，[请参考服务端发送Push消息API](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/push-sendapi)  
  
# **4\. 示例代码**

GitHub上的示例代码：[链接](https://github.com/HMS-Core/hms-push-serverdemo-php)

下载PHP示例代码；

[pushkit-php-sample.zip](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyManage/011/111/111/0000000000011111111.20200725103250.63285014824590664928411777761228:50510726110140:2800:E80B3C56F83864F70F8E2E9F5267E2AC103D7479CC99375940DEF16D5CB356B4.zip?needInitFileName=true "pushkit-php-sample.zip")

  


1、发送Android透传消息

代码位置：examples/test_sample_push_passthrouth_msg.php  
---  
  
2、发送Android通知栏消息

代码位置：examples/test_sample_push_notification_msg.php  
---  
  
3、基于主题发送消息

代码位置：examples/test_sample_push_topic_msg.php  
---  
  
4、基于条件发送消息

代码位置：examples/test_sample_push_condition_msg.php  
---  
  
5、向华为快应用发送推送消息

代码位置：examples/ test_sample_push_instantce_app_msg.php  
---  
  
6、发送Web Push消息

代码位置：examples/ test_sample_push_webpush_msg.php  
---  
  
7、发送APNs消息

代码位置：examples/test_sample_apns_msg.php  
---  
  
8、发送验证消息  


代码位置：examples/test_sample_test_push_msg.php  
---  
  
  

