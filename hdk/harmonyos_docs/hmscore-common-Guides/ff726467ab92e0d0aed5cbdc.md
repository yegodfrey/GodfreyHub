---
name: document/cn/hmscore-common-Guides/account-tls-0000001771717837
title: 华为帐号相关域名的TLS1.0和TLS1.1协议及加密套件关闭通知
uri: https://developer.huawei.com/consumer/cn/doc/hmscore-common-Guides/account-tls-0000001771717837
---

# 华为帐号相关域名的TLS1.0和TLS1.1协议及加密套件关闭通知

尊敬的开发者，您好！

为了更安全的网络访问，华为帐号服务预计于2024年10月30日0点关闭帐号相关域名（域名参见下表）的TLS1.0、TLS1.1协议及规定之外的加密套件。关闭后，应用使用低于TLS1.2的协议或不支持规定的加密套件，将导致无法登录华为帐号。

为保证您能正常访问华为帐号，使用华为帐号能力访问其他Kit服务，若您的应用访问华为帐号相关域名使用协议是TLS1.0或TLS1.1，**请您务必在2024年10月30日0点之前升级到TLS1.2及以上版本。**

**涉及的华为帐号相关域名：**

|**序号**|**域名**|
|:-----|:---------------------------------------|
|1|login.cloud.huawei.com|
|2|login.vmall.com|
|3|oauth-login.cloud.huawei.com|
|4|oauth-login.platform.dbankcloud.com|
|5|oauth-login.platform.hicloud.com|
|6|oauth-login1.cloud.huawei.com|
|7|oauth-login-drcn.platform.dbankcloud.com|
|8|api.cloud.huawei.com|
|9|api.vmall.com|
|10|oauth-api.cloud.huawei.com|
|11|oauth-api.platform.dbankcloud.com|
|12|hwid-drcn.platform.hicloud.com|
|13|hwid.platform.hicloud.com|
|14|setting1.hicloud.com|
|15|setting.hicloud.com|
|16|id.cloud.huawei.com|
|17|account.cloud.huawei.com|
|18|account-cn.hicloud.com|
|19|account-drcn.platform.dbankcloud.com|
|20|openrealname.cloud.huawei.com|
|21|realname-drcn.platform.dbankcloud.com|

**支持的加密套件：**

|TLS版本|加密套件（IANA名称）|
|:-----|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
|TLS1.2|TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384|

调整过程中您遇到任何问题，可通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/add/13?level2=2022000020&level3=84&keyWord=华为帐号服务)咨询。给您带来的不便敬请谅解，感谢您的理解与支持！

## FAQ

以开发语言为JAVA进行举例。

### 如何确定TLS协议是否为1.0或1.1版本？

JDK为1.7或更低版本，或建立SSLSocket前指定了TLSv1或TLSv1.1。

### 确认TLS为1.0或1.1，如何升级？

升级JDK为1.8或更高版本，且建立SSLSocket前指定TLSv1.2或不指定（JDK 1.8默认使用TLSv1.2），参考如下：

```screen
context = SSLContext.getInstance("TLSv1.2");
context.init(null,null,null);
SSLContext.setDefault(context);
SSLSocketFactory factory = (SSLSocketFactory)context.getSocketFactory();
SSLSocket socket = (SSLSocket)factory.createSocket();
protocols = socket.getEnabledProtocols();
```

