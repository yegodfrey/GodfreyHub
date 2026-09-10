---
name: document/cn/system-References/deviceemailmanager-api-0000001053242003
title: DeviceEmailManager
uri: https://developer.huawei.com/consumer/cn/doc/system-References/deviceemailmanager-api-0000001053242003
---

# DeviceEmailManager

|Class Info|
|:----------------------------------------|
|public class DeviceEmailManager 邮箱相关的管理类。|

#### Public Constructor Summary

|Constructor Name|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[EmailAccount](#section54753321808)(String emailAddress, String inComingProtocol, String inComingServerAddress, int inComingServerPort, String inComingServerLogin, String inComingServerPassword, String outGoingProtocol, String outGoingServerAddress, int outGoingServerPort, String outGoingServerLogin, String outGoingServerPassword) EmailAccount构造方法。|
|[EmailAccount](#section158117181801)(String emailAddress, String inComingProtocol, String inComingServerAddress, int inComingServerPort, String inComingServerLogin, String inComingServerPassword, boolean inComingServerUseSSL, boolean inComingServerUseTLS, boolean inComingServerAcceptAllCertificates, String inComingPathPrefix, String outGoingProtocol, String outGoingServerAddress, int outGoingServerPort, String outGoingServerLogin, String outGoingServerPassword, boolean outGoingServerUseSSL, boolean outGoingServerUseTLS, boolean outGoingServerAcceptAllCertificates, String outGoingPathPrefix, String senderName, String signature, boolean isDefault) EmailAccount构造方法。|
|[ExchangeAccount](#section1217520113177)(String emailAddress, String easUser, String easDomain, String serverAddress, String serverPassword) ExchangeAccount构造方法。|
|[ExchangeAccount](#section154144212016)(String displayName, String emailAddress, String easUser, String easDomain, int syncLookback, int syncInterval, boolean isDefault, String senderName, String protocolVersion, String signature, String serverAddress, boolean useSSL,boolean useTLS, boolean acceptAllCertificates, String serverPassword, String serverPathPrefix, int calendarPeriod, boolean displayHtmlDisabled, boolean forwardEmailDisabled, boolean screenShotDisabled) ExchangeAccount构造方法。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|boolean|[setAccountDeletionDisabled](#section7640424102217)(ComponentName admin, boolean isDisabled) 禁止删除邮箱帐户。|
|boolean|[isAccountDeletionDisabled](#section1281182318307)(ComponentName admin) 查询是否禁止删除邮箱帐户。|
|boolean|[setAccountAdditionDisabled](#section1632220210324)(ComponentName admin,boolean isDisabled) 禁止添加邮箱帐户。|
|boolean|[isAccountAdditionDisabled](#section16597638143411)(ComponentName admin) 查询添加邮箱帐户功能是否被禁用。|
|boolean|[setPop3ImapDisabled](#section1155618352583)(ComponentName admin,boolean isDisabled) 禁用 Pop3/Imap 协议。|
|boolean|[isPop3ImapDisabled](#section723163110011)(ComponentName admin) 查询 Pop3/Imap 协议是否被禁用。|
|void|[configEmailAccount](#section1046891515304)(ComponentName admin, EmailAccount emailAccount) 添加 Email 账户或更新 Email 账户配置。|
|void|[configExchangeAccount](#section183251613183312)(ComponentName admin,ExchangeAccount exchangeAccount) 添加Exchange账户或更新Exchange账户配置。|
|boolean|[setEmailForwardingDisabled](#section5946647421)(ComponentName admin, String emailAddress, boolean isDisabled) 禁止邮箱帐户转发。|
|boolean|[setExceptionListForAccountAddition](#section16170119134910)(ComponentName admin, boolean isDisabled, ArrayList\<String\> list) 禁止/允许添加账户设置例外名单。|
|ArrayList\<String\>|[getAccountsTrustListDisablingAddition](#section1283142015527)(ComponentName admin) 获取禁止添加账户设置白名单。|
|ArrayList\<String\>|[getAccountsWhiteListDisablingAddition](#section2943195021110)(ComponentName admin) EMUI 11.0.0该方法已废弃，请使用ArrayList\<String\> [getAccountsTrustListDisablingAddition](#section1283142015527)(ComponentName admin)。|
|ArrayList\<String\>|[getAccountsBlockListAllowingAddition](#section1528584516278)(ComponentName admin) 获取允许添加账户设置的黑名单。|
|ArrayList\<String\>|[getAccountsBlackListAllowingAddition](#section20678194913139)(ComponentName admin) EMUI 11.0.0该方法已废弃，请使用ArrayList\<String\> [getAccountsBlockListAllowingAddition](#section1528584516278)(ComponentName admin)。|
|boolean|[isAccountAdditionDisabled](#section13108852556)(ComponentName admin, String emailAddress) 查询邮箱地址为emailAddress的帐户添加功能是否被禁用。|
|boolean|[setExceptionListForAccountDeletion](#section6254133414911)(ComponentName admin, boolean isDisabled, ArrayList\<String\> list) 禁止/允许删除账户设置例外名单。|
|ArrayList\<String\>|[getAccountsTrustListDisablingDeletion](#section53076631513)(ComponentName admin) 获取禁止删除账户设置的白名单。|
|ArrayList\<String\>|[getAccountsWhiteListDisablingDeletion](#section9859131481315)(ComponentName admin) EMUI 11.0.0该方法已废弃，请使用ArrayList\<String\> [getAccountsTrustListDisablingDeletion](#section53076631513)(ComponentName admin)。|
|ArrayList\<String\>|[getAccountsBlockListAllowingDeletion](#section20418122974318)(ComponentName admin) 获取允许删除账户设置的黑名单。|
|ArrayList\<String\>|[getAccountsBlackListAllowingDeletion](#section163897251752)(ComponentName admin) EMUI 11.0.0该方法已废弃，请使用ArrayList\<String\> [getAccountsBlockListAllowingDeletion](#section20418122974318)(ComponentName admin)。|
|boolean|[isAccountDeletionDisabled](#section11731526181220)(ComponentName admin, String emailAddress) 查询邮箱地址为emailAddress的帐户删除功能是否已被禁用。|
|boolean|[isAccountAddedByMDM](#section822533114153)(Context context, String emailAddress, int userId) 查询电子邮箱地址是否通过MDM应用添加。|
|boolean|[setForceSMIMECertificateAlias](#section49842020193513)(ComponentName admin, String emailAddress, String alias, int type) 设置电子邮箱证书别名。|
|boolean|[isForceSMIMECertificateAlias](#section16990111034319)(Context context, String emailAddress, String alias, int type) 查询是否对电子邮箱证书指定的别名。|
|boolean|[setForceSMIMEMessages](#section99833125502)(ComponentName admin, String emailAddress, boolean isForced, int type) 设置对指定邮箱进行签名或者加密。|
|boolean|[isForceSMIMEMessages](#section1467913165615)(Context context, String emailAddress, int type) 查询是否对指定邮箱设置了签名或者加密。|
|boolean|[setForceRequiredSMIMEAndCertificateAlias](#section260821910811)(ComponentName admin, String emailAddress, String alias, boolean isForced, int type) 对邮箱设置SMIME证书别名并且强制打开SMIME。|

#### Public Constructors

#### EmailAccount(String, String, String, int, String, String, String, String, int, String, String)

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Constructor|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public EmailAccount(String emailAddress, String inComingProtocol, String inComingServerAddress, int inComingServerPort, String inComingServerLogin, String inComingServerPassword, String outGoingProtocol, String outGoingServerAddress, int outGoingServerPort, String outGoingServerLogin, String outGoingServerPassword) 构造EmailAccount。|

Parameters  

|Name|Description|
|:---------------------|:----------------|
|emailAddress|电子邮件地址。|
|inComingProtocol|接收设置协议：pop3/imap。|
|inComingServerAddress|接收设置主机名，不能为空。|
|inComingServerPort|接收设置端口，不能为空。|
|inComingServerLogin|接收设置用户名，不能为空。|
|inComingServerPassword|接收设置密码。|
|outGoingProtocol|外发设置协议，不能为空。|
|outGoingServerAddress|外发设置主机名。|
|outGoingServerPort|外发设置端口。|
|outGoingServerLogin|外发设置用户名。|
|outGoingServerPassword|外发设置密码。|

Throws  

|Name|Description|
|:-----------------------|:----------|
|IllegalArgumentException|参数错误。|

#### EmailAccount(String, String, String, int, String, String, boolean, boolean, boolean, String, String, String, int, String, String, boolean, boolean, boolean, String, String, String, boolean)

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Constructor|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public EmailAccount(String emailAddress, String inComingProtocol, String inComingServerAddress, int inComingServerPort, String inComingServerLogin, String inComingServerPassword, boolean inComingServerUseSSL, boolean inComingServerUseTLS, boolean inComingServerAcceptAllCertificates, String inComingPathPrefix, String outGoingProtocol, String outGoingServerAddress, int outGoingServerPort, String outGoingServerLogin, String outGoingServerPassword, boolean outGoingServerUseSSL, boolean outGoingServerUseTLS, boolean outGoingServerAcceptAllCertificates, String outGoingPathPrefix, String senderName, String signature, boolean isDefault 构造EmailAccount。|

Parameters  

|Name|Description|
|:----------------------------------|:----------------|
|emailAddress|电子邮件地址。|
|inComingProtocol|接收设置协议：pop3/imap。|
|inComingServerAddress|接收设置主机名，不能为空。|
|inComingServerPort|接收设置端口，不能为空。|
|inComingServerLogin|接收设置用户名，不能为空。|
|inComingServerPassword|接收设置密码。|
|inComingServerUseSSL|接收设置使用SSL。|
|inComingServerUseTLS|接收设置使用TSL。|
|inComingServerAcceptAllCertificates|接收设置使用所有证书。|
|inComingPathPrefix|接收设置路径前缀。|
|outGoingProtocol|外发设置协议，不能为空。|
|outGoingServerAddress|外发设置主机名。|
|outGoingServerPort|外发设置端口。|
|outGoingServerLogin|外发设置用户名。|
|outGoingServerPassword|外发设置密码。|
|outGoingServerUseSSL|外发设置使用SSL。|
|outGoingServerUseTLS|外发设置使用TSL。|
|outGoingServerAcceptAllCertificates|外发设置接收所有证书。|
|outGoingPathPrefix|外发设置路径前缀。|
|senderName|发件人名称。|
|signature|电子邮件签名。|
|isDefault|设置为默认账户。|

Throws  

|Name|Description|
|:-----------------------|:----------|
|IllegalArgumentException|参数错误。|

#### ExchangeAccount(String, String, String, String, String)

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Constructor|
|:--------------------------------------------------------------------------------------------------------------------------------------------|
|public ExchangeAccount(String emailAddress, String easUser, String easDomain, String serverAddress, String serverPassword) 构造ExchangeAccount。|

Parameters  

|Name|Description|
|:-------------|:-----------|
|emailAddress|电子邮件地址，不能为空。|
|easUser|用户名。|
|easDomain|域。|
|serverAddress|服务器，不能为空。|
|serverPassword|密码。|

Throws  

|Name|Description|
|:-----------------------|:----------|
|IllegalArgumentException|参数错误。|

#### ExchangeAccount(String, String, String, String, int, int, boolean, String, String, String, String, boolean,boolean, boolean, String, String, int, boolean, boolean, boolean)

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Constructor|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public ExchangeAccount(String displayName, String emailAddress, String easUser, String easDomain, int syncLookback, int syncInterval, boolean isDefault, String senderName, String protocolVersion, String signature, String serverAddress, boolean useSSL,boolean useTLS, boolean acceptAllCertificates, String serverPassword, String serverPathPrefix, int calendarPeriod, boolean displayHtmlDisabled, boolean forwardEmailDisabled, boolean screenShotDisabled) 构造ExchangeAccount。|

Parameters  

|Name↵|Description↵|
|:--------------------|:-------------------------------------------------------------------------------------------------------------|
|displayName|账户名称。|
|emailAddress|电子邮件地址，不能为空。|
|easUser|用户名。|
|easDomain|域。|
|syncLookback|同步天数。 * Value 1：1 day * Value 2：3 days * Value 3：1 week * Value 4：2 weeks * Value 5：1 month * Value 6：all|
|syncInterval|同步周期。 * Value -2：Automatic push * Value -1：Never * Value 15：15 minutes * Value 30：30 minutes * Value 60：1 hour|
|isDefault|设置为默认账户。|
|senderName|发件人名称。|
|protocolVersion|协议版本号。|
|signature|电子邮件签名。|
|serverAddress|服务器，不能为空。|
|useSSL|使用SSL。|
|useTLS|使用TSL。|
|acceptAllCertificates|接受所有证书。|
|serverPassword|密码。|
|serverPathPrefix|路径前缀。|
|calendarPeriod|同步日程。 * Value 1：2 weeks * Value 2 ：1 month * Value 3：3 months * Value 4：6 months * Value 5：All|
|displayHtmlDisabled|禁止HTML格式。|
|forwardEmailDisabled|禁止转发邮件。|
|screenShotDisabled|禁止截屏。|

Throws  

|Name|Description|
|:-----------------------|:----------|
|IllegalArgumentException|参数错误。|

#### Public Methods

#### setAccountDeletionDisabled

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setAccountDeletionDisabled(ComponentName admin, boolean isDisabled) 禁止删除邮箱帐户。如果禁止删除邮箱帐户，用户不能删除华为邮箱内已登录的帐户。 注意：需要申请com.huawei.permission.sec.MDM_EMAIL权限。|

Parameters  

|Name|Description|
|:---------|:---------------------------------|
|admin|调用该接口的组件名称，不能为null。|
|isDisabled|* true：禁止删除邮箱帐户。 * false：允许删除邮箱帐户。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:----------------|:--------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_EMAIL权限。|

#### isAccountDeletionDisabled

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Method|
|:---------------------------------------------------------------------------|
|public boolean isAccountDeletionDisabled(ComponentName admin) 查询是否已禁止删除邮箱帐户。|

Parameters  

|Name|Description|
|:----|:----------------------------------------------|
|admin|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:------|:----------------------------------------|
|boolean|* true：删除邮箱帐户功能被禁止。 * false：删除邮箱帐户功能未被禁止。|

#### setAccountAdditionDisabled

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setAccountAdditionDisabled (ComponentName admin,boolean isDisabled) 禁止添加邮箱帐户。如果禁止添加邮箱帐户，用户不能向华为邮箱中添加帐户。 注意：需要申请com.huawei.permission.sec.MDM_EMAIL权限。|

Parameters  

|Name|Description|
|:---------|:---------------------------------|
|admin|调用该接口的组件名称，不能为null。|
|isDisabled|* true：禁止添加邮箱帐户。 * false：允许添加邮箱帐户。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:----------------|:--------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_EMAIL权限。|

#### isAccountAdditionDisabled(ComponentName admin)

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Method|
|:------------------------------------------------------------------------------|
|public boolean isAccountAdditionDisabled(ComponentName admin) 查询添加邮箱帐户功能是否已被禁用。|

Parameters  

|Name|Description|
|:----|:----------------------------------------------|
|admin|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:------|:----------------------------------------|
|boolean|* true：添加邮箱帐户功能被禁止。 * false：添加邮箱帐户功能未被禁止。|

#### setPop3ImapDisabled

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setPop3ImapDisabled(ComponentName admin,boolean isDisabled) 禁用 Pop3/Imap 协议。如果禁用 Pop3/Imap 协议，用户在华为邮箱内不能添加Pop3/Imap 协议的帐户，已登录的 Pop3/Imap 帐户也会被从设备中删除。 注意：需要申请com.huawei.permission.sec.MDM_EMAIL权限。|

Parameters  

|Name|Description|
|:---------|:-------------------------------------------------|
|admin|调用该接口的组件名称，不能为null。|
|isDisabled|* true：禁用 Pop3/Imap 协议。 * false：允许使用 Pop3/Imap 协议。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:----------------|:--------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_EMAIL权限。|

#### isPop3ImapDisabled

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------------------|
|public boolean isPop3ImapDisabled (ComponentName admin) 查询Pop3/Imap协议是否被禁用。|

Parameters  

|Name|Description|
|:----|:----------------------------------------------|
|admin|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:------|:--------------------------------------------------|
|boolean|* true：Pop3/Imap协议功能被禁止。 * false：Pop3/Imap协议功能未被禁止。|

#### configEmailAccount

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------|
|public void configEmailAccount(ComponentName admin, EmailAccount emailAccount) 添加Email账户或更新Email账户配置。 注意：需要申请com.huawei.permission.sec.MDM_EMAIL权限。|

Parameters  

|Name|Description|
|:-----------|:------------------|
|admin|调用该接口的组件名称，不能为null。|
|emailAccount|EmailAccount，不能为空。|

Return  

|Type|Description|
|:---|:----------|
|void|-|

Throws  

|Name|Description|
|:-----------------------|:--------------------------------------------------------|
|IllegalArgumentException|参数错误。|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_EMAIL权限。|

#### configExchangeAccount

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.1及以上或HarmonyOS 2.0及以上|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void configExchangeAccount(ComponentName admin,ExchangeAccount exchangeAccount) 添加Exchange账户或更新Exchange账户配置。 注意：需要申请com.huawei.permission.sec.MDM_EMAIL权限。|

Parameters  

|Name|Description|
|:--------------|:--------------------|
|admin|调用该接口的组件名称，不能为null。|
|exchangeAccount|ExchangeAccount，不能为空。|

Return  

|Type|Description|
|:---|:----------|
|void|-|

Throws  

|Name|Description|
|:-----------------------|:--------------------------------------------------------|
|IllegalArgumentException|参数错误。|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_EMAIL权限。|

#### setEmailForwardingDisabled

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 8.0及以上或HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setEmailForwardingDisabled(ComponentName admin, String emailAddress, boolean isDisabled) 禁止邮箱帐户转发。当邮件账户被禁止转发时：1.该账户不能作为转发的发件人；2.该账户回复邮件时，不能更改收件人及抄送密送配置。 注意：需要申请com.huawei.permission.sec.MDM_EMAIL权限。|

Parameters  

|Name|Description|
|:-----------|:---------------------------------|
|admin|调用该接口的组件名称，不能为null。|
|emailAddress|被禁止转发的邮件地址。|
|isDisabled|* true：禁止邮箱帐户转发。 * false：允许邮箱帐户转发。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:-----------------------|:--------------------------------------------------------|
|IllegalArgumentException|参数错误。|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_EMAIL权限。|

#### setExceptionListForAccountAddition

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 8.0及以上或HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setExceptionListForAccountAddition(ComponentName admin, boolean isDisabled, ArrayList\<String\> list) 禁止/允许添加账户，设置例外名单。当禁止添加账户，设置白名单，白名单里账户可以添加；当允许添加账户，设置黑名单，黑名单里账户不允许添加。 注意：需要申请com.huawei.permission.sec.MDM_EMAIL权限。|

Parameters  

|Name|Description|
|:---------|:-----------------------------|
|admin|调用该接口的组件名称，不能为null。|
|isDisabled|* true：禁止添加账户。 * false：允许添加账户。|
|list|禁止/允许添加账户，要设置的例外名单列表。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:----------------|:--------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_EMAIL权限。|

#### getAccountsTrustListDisablingAddition

Supported Devices  

|Device Type|OS Version|
|:----------|:-------------------------|
|手机、平板|EMUI 11.0或HarmonyOS 2.0及以上|

|Method|
|:---------------------------------------------------------------------------------------------------|
|public ArrayList\<String\> getAccountsTrustListDisablingAddition(ComponentName admin) 获取禁止添加账户设置白名单。|

Parameters  

|Name|Description|
|:----|:----------------------------------------------|
|admin|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:------------------|:--------------|
|ArrayList\<String\>|禁止添加账户设置的白名单列表。|

Throws  

|Name|Description|
|:----------------|:------------|
|SecurityException|此APK未经设备管理激活。|

#### getAccountsWhiteListDisablingAddition

Supported Devices  

|Device Type|OS Version|
|:----------|:------------------|
|手机、平板|EMUI 8.0\~EMUI 10.1|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public ArrayList\<String\> getAccountsWhiteListDisablingAddition (ComponentName admin) EMUI 11.0.0该方法废弃，请使用[getAccountsTrustListDisablingAddition](#section1283142015527)。 获取禁止添加账户设置白名单。|

Parameters  

|Name|Description|
|:----|:----------------------------------------------|
|admin|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:------------------|:--------------|
|ArrayList\<String\>|禁止添加账户设置的白名单列表。|

Throws  

|Name|Description|
|:----------------|:------------|
|SecurityException|此APK未经设备管理激活。|

#### getAccountsBlockListAllowingAddition

Supported Devices  

|Device Type|OS Version|
|:----------|:-------------------------|
|手机、平板|EMUI 11.0或HarmonyOS 2.0及以上|

|Method|
|:---------------------------------------------------------------------------------------------------|
|public ArrayList\<String\> getAccountsBlockListAllowingAddition(ComponentName admin) 获取允许添加账户设置的黑名单。|

Parameters  

|Name|Description|
|:----|:----------------------------------------------|
|admin|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:------------------|:--------------|
|ArrayList\<String\>|允许添加账户设置的黑名单列表。|

Throws  

|Name|Description|
|:----------------|:------------|
|SecurityException|此APK未经设备管理激活。|

#### getAccountsBlackListAllowingAddition

Supported Devices  

|Device Type|OS Version|
|:----------|:------------------|
|手机、平板|EMUI 8.0\~EMUI 10.1|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public ArrayList\<String\> getAccountsBlackListAllowingAddition (ComponentName admin) EMUI 11.0.0该方法废弃，请使用[getAccountsBlockListAllowingAddition](#section1528584516278)。 获取允许添加账户设置的黑名单。|

Parameters  

|Name|Description|
|:----|:----------------------------------------------|
|admin|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:------------------|:--------------|
|ArrayList\<String\>|允许添加账户设置的黑名单列表。|

Throws  

|Name|Description|
|:----------------|:------------|
|SecurityException|此APK未经设备管理激活。|

#### isAccountAdditionDisabled

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 8.0及以上或HarmonyOS 2.0及以上|

|Method|
|:------------------------------------------------------------------------------------------------------------------|
|public boolean isAccountAdditionDisabled(ComponentName admin, String emailAddress) 查询邮箱地址为emailAddress的帐户添加功能是否被禁用。|

Parameters  

|Name|Description|
|:-----------|:---------------------------------------------|
|admin|调用接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|
|emailAddress|邮箱地址。|

Return  

|Type|Description|
|:------|:------------------------------------------------------------|
|boolean|* true：emailAdress账户的添加功能被禁止。 * false：emailAdress账户的添加功能未被禁止。|

Throws  

|Name|Description|
|:----------------|:------------|
|SecurityException|此APK未经设备管理激活。|

#### setExceptionListForAccountDeletion

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 8.0及以上或HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setExceptionListForAccountDeletion(ComponentName admin, boolean isDisabled, ArrayList\<String\> list) 允许/禁止删除账户，设置例外名单。当禁止删除账户，设置白名单，白名单里账户可以删除；当允许删除账户，设置黑名单，黑名单里账户不允许删除。 注意：需要申请com.huawei.permission.sec.MDM_EMAIL权限。|

Parameters  

|Name|Description|
|:---------|:-----------------------------|
|admin|调用该接口的组件名称，不能为null。|
|isDisabled|* true：禁止删除账户。 * false：允许删除账户。|
|list|允许/禁止删除账户，要设置的例外名单列表。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

Throws  

|Name|Description|
|:----------------|:--------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_EMAIL权限。|

#### getAccountsTrustListDisablingDeletion

Supported Devices  

|Device Type|OS Version|
|:----------|:-------------------------|
|手机、平板|EMUI 11.0或HarmonyOS 2.0及以上|

|Method|
|:---------------------------------------------------------------------------------------------------|
|public ArrayList\<String\> getAccountsTrustListDisablingDeletion(ComponentName admin) 获取禁止删除账户设置白名单。|

Parameters  

|Name|Description|
|:----|:----------------------------------------------|
|admin|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:------------------|:--------------|
|ArrayList\<String\>|禁止删除账户设置的白名单列表。|

Throws  

|Name|Description|
|:----------------|:------------|
|SecurityException|此APK未经设备管理激活。|

#### getAccountsWhiteListDisablingDeletion

Supported Devices  

|Device Type|OS Version|
|:----------|:------------------|
|手机、平板|EMUI 8.0\~EMUI 10.1|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public ArrayList\<String\> getAccountsWhiteListDisablingDeletion(ComponentName admin) EMUI 11.0.0该方法废弃，请使用[getAccountsTrustListDisablingDeletion](#section53076631513)。 获取禁止删除账户设置白名单。|

Parameters  

|Name|Description|
|:----|:----------------------------------------------|
|admin|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:------------------|:--------------|
|ArrayList\<String\>|禁止删除账户设置的白名单列表。|

Throws  

|-----------------|-------------|
|Name|Description|
|SecurityException|此APK未经设备管理激活。|

#### getAccountsBlockListAllowingDeletion

Supported Devices  

|Device Type|OS Version|
|:----------|:-------------------------|
|手机、平板|EMUI 11.0或HarmonyOS 2.0及以上|

|Method|
|:---------------------------------------------------------------------------------------------------|
|public ArrayList\<String\> getAccountsBlockListAllowingDeletion(ComponentName admin) 获取允许删除账户设置的黑名单。|

Parameters  

|Name|Description|
|:----|:----------------------------------------------|
|admin|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:------------------|:--------------|
|ArrayList\<String\>|允许删除账户设置的黑名单列表。|

Throws  

|Name|Description|
|:----------------|:------------|
|SecurityException|此APK未经设备管理激活。|

#### getAccountsBlackListAllowingDeletion

Supported Devices  

|Device Type|OS Version|
|:----------|:------------------|
|手机、平板|EMUI 8.0\~EMUI 10.1|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public ArrayList\<String\> getAccountsBlackListAllowingDeletion(ComponentName admin) EMUI 11.0.0该方法废弃，请使用[getAccountsBlockListAllowingDeletion](#section20418122974318)。 获取允许删除账户设置的黑名单。|

Parameters  

|Name|Description|
|:----|:----------------------------------------------|
|admin|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|

Return  

|Type|Description|
|:------------------|:--------------|
|ArrayList\<String\>|允许删除账户设置的黑名单列表。|

Throws  

|Name|Description|
|:----------------|:------------|
|SecurityException|此APK未经设备管理激活。|

#### isAccountDeletionDisabled(ComponentName admin, String emailAddress)

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 8.0及以上或HarmonyOS 2.0及以上|

|Method|
|:-------------------------------------------------------------------------------------------------------------------|
|public boolean isAccountDeletionDisabled(ComponentName admin, String emailAddress) 查询邮箱地址为emailAddress的帐户删除功能是否已被禁用。|

Parameters  

|Name|Description|
|:-----------|:----------------------------------------------|
|admin|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|
|emailAddress|邮箱地址。|

Return  

|Type|Description|
|:------|:--------------------------------------------------------------|
|boolean|* true：emailAddress账户的删除功能被禁止。 * false：emailAddress账户的删除功能未被禁止。|

Throws  

|Name|Description|
|:----------------|:------------|
|SecurityException|此APK未经设备管理激活。|

#### isAccountAddedByMDM

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 9.0及以上或HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------------------------------------------------|
|public boolean isAccountAddedByMDM(Context context, String emailAddress, int userId) 查询电子邮箱地址是否通过MDM应用添加。|

Parameters  

|Name|Description|
|:-----------|:----------|
|context|上下文。|
|emailAddress|邮箱地址。|
|userId|用户ID。|

Return  

|Type|Description|
|:------|:----------------------------------|
|boolean|* true：是通过MDM添加。 * false：不是通过MDM添加。|

#### setForceSMIMECertificateAlias

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 9.0及以上或HarmonyOS 2.0及以上|

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setForceSMIMECertificateAlias(ComponentName admin, String emailAddress, String alias, int type) 设置电子邮箱证书别名。 注意：需要申请com.huawei.permission.sec.MDM_EMAIL权限。|

Parameters  

|Name|Description|
|:-----------|:--------------------------|
|admin|调用该接口APK的组件名称，不能为null。|
|emailAddress|邮箱地址。|
|alias|证书别名。|
|type|证书类别。 * 1 ：签名证书。 * 2 ：加密证书。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：设置成功。 * false：设置失败。|

Throws  

|Name|Description|
|:-----------------------|:-----------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_EMAIL权限。 * 此APK不属于当前用户。|
|IllegalArgumentException|参数admin为null时。|

#### isForceSMIMECertificateAlias

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 9.0及以上或HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------------------------------------------------------------------|
|public boolean isForceSMIMECertificateAlias(Context context, String emailAddress, String alias, int type) 查询是否对电子邮箱证书指定的别名。|

Parameters  

|Name|Description|
|:-----------|:---------------------|
|context|上下文。|
|emailAddress|邮箱地址。|
|alias|证书别名。|
|type|证书类别 1 ：签名证书。 2 ：加密证书。|

Return  

|Type|Description|
|:------|:---------------------------------|
|boolean|* true：设置了指定的别名。 * false：未设置指定的别名。|

#### setForceSMIMEMessages

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 9.0及以上或HarmonyOS 2.0及以上|

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setForceSMIMEMessages(ComponentName admin, String emailAddress, boolean isForced, int type) 设置对指定邮箱进行签名或者加密。 注意：需要申请com.huawei.permission.sec.MDM_EMAIL权限。|

Parameters  

|Name|Description|
|:-----------|:--------------------------|
|admin|调用该接口APK的组件名称，不能为null。|
|emailAddress|邮箱地址。|
|isForced|* true：开启。 * false：关闭。|
|type|证书类别。 * 1 ：签名证书。 * 2 ：加密证书。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：设置成功。 * false：设置失败。|

Throws  

|Name|Description|
|:-----------------------|:-----------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_EMAIL权限。 * 此APK不属于当前用户。|
|IllegalArgumentException|参数admin为null时。|

#### isForceSMIMEMessages

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 9.0及以上或HarmonyOS 2.0及以上|

|Method|
|:------------------------------------------------------------------------------------------------------|
|public boolean isForceSMIMEMessages(Context context, String emailAddress, int type) 查询是否对指定邮箱设置了签名或者加密。|

Parameters  

|Name|Description|
|:-----------|:--------------------------|
|context|上下文。|
|emailAddress|邮箱地址。|
|type|证书类别。 * 1 ：签名证书。 * 2 ：加密证书。|

Return  

|Type|Description|
|:------|:-----------------------|
|boolean|* true：已设置。 * false：未设置。|

#### setForceRequiredSMIMEAndCertificateAlias

Supported Devices  

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 9.0及以上或HarmonyOS 2.0及以上|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setForceRequiredSMIMEAndCertificateAlias(ComponentName admin, String emailAddress, String alias, boolean isForced, int type) 对邮箱设置SMIME证书别名并且强制打开SMIME。 注意：需要申请com.huawei.permission.sec.MDM_EMAIL权限。|

Parameters  

|Name|Description|
|:-----------|:------------------------------------|
|admin|调用该接口APK的组件名称，不能为null。|
|emailAddress|邮箱地址。|
|alias|证书别名。|
|isForced|* true：强制打开SMIME。 * false：不强制打开SMIME。|
|type|证书类别。 * 1 ：签名证书。 * 2 ：加密证书。|

Return  

|Type|Description|
|:------|:-------------------------|
|boolean|* true：设置成功。 * false：设置失败。|

Throws  

|Name|Description|
|:-----------------------|:-----------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_EMAIL权限。 * 此APK不属于当前用户。|
|IllegalArgumentException|参数admin为null时。|

