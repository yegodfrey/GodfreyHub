---
name: document/cn/system-References/devicenetworkmanager-api-0000001053680684
title: DeviceNetworkManager
uri: https://developer.huawei.com/consumer/cn/doc/system-References/devicenetworkmanager-api-0000001053680684
---

# DeviceNetworkManager

|Class Info|
|:------------------------------------------|
|public class DeviceNetworkManager 网络管理相关的类。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[addApn](#section837045114119)(ComponentName admin, Map<String, String> apnInfo) 增加APN。|
|void|[deleteApn](#section7638522112510)(ComponentName admin, String apnId) 删除指定标识符的APN。|
|void|[updateApn](#section46425615318)(ComponentName admin, Map<String, String> apnInfo, String apnId) 更新指定标识符的APN。|
|List<String>|[queryApn](#section1160617451010)(ComponentName admin, Map<String, String> apnInfo) 查询已匹配参数的APN的标识符。|
|Map<String, String>|[getApnInfo](#section1539135517202)(ComponentName admin, String apnId) 获取指定APN信息。|
|void|[setPreferApn](#section16869348162110)(ComponentName admin, String apnId) 设置指定标识符的APN为默认APN。|
|void|[addNetworkAccessWhitelist](#section119801187338)(ComponentName admin, List<String> addrList) EMUI10.1.0该方法已废弃，请使用boolean [addNetworkList](#section54961813579)(ComponentName admin, boolean isTrustList, boolean isDomainList, ArrayList<String> addrList)。|
|void|[removeNetworkAccessWhitelist](#section851473684110)(ComponentName admin, List<String> addrList) EMUI10.1.0该方法已废弃，请使用boolean [removeNetworkList](#section13429191802012)(ComponentName admin, boolean isTrustList, boolean isDomainList, ArrayList<String> addrList)。|
|List<String>|[getNetworkAccessWhitelist](#section617042993615)(ComponentName admin) EMUI10.1.0该方法已废弃，请使用boolean [getNetworkList](#section198171736795)(ComponentName admin, boolean isTrustList, boolean isDomainList)。|
|boolean|[addNetworkAccessBlockList](#section8253144214520)(ComponentName admin, ArrayList<String> addDomainList) 设置网页访问黑名单。|
|boolean|[addNetworkAccessBlackList](#section35701544118)(ComponentName admin, ArrayList<String> addDomainList) EMUI 11.0.0该方法已废弃，请使用boolean [addNetworkAccessBlockList](#section8253144214520)(ComponentName admin, ArrayList<String> addDomainList)。|
|boolean|[removeNetworkAccessBlockList](#section13786196556)(ComponentName admin, ArrayList<String> removeDomainList) 删除网络访问黑名单。|
|boolean|[removeNetworkAccessBlackList](#section144179711211)(ComponentName admin, ArrayList<String> removeDomainList) EMUI 11.0.0该方法已废弃，请使用boolean [removeNetworkAccessBlockList](#section13786196556)(ComponentName admin, ArrayList<String> removeDomainList)。|
|List<String>|[getNetworkAccessBlockList](#section164861027161917)(ComponentName admin) 获取网页访问黑名单。|
|List<String>|[getNetworkAccessBlackList](#section7919172191513)(ComponentName admin) EMUI 11.0.0该方法已废弃，请使用List<String> [getNetworkAccessBlockList](#section164861027161917)(ComponentName admin)。|
|List<String>|[queryBrowsingHistory](#section9273124785020)(ComponentName admin) 获取系统浏览器的网页访问记录。|
|void|[resetNetworkSetting](#section1360519429531)(ComponentName admin) 重置网络设置。|
|boolean|[addNetworkList](#section54961813579)(ComponentName admin, boolean isTrustList, boolean isDomainList, ArrayList<String> addrList) 添加网络地址黑白名单。|
|boolean|[getNetworkList](#section198171736795)(ComponentName admin, boolean isTrustList, boolean isDomainList) 获取网络黑白名单。|
|boolean|[removeNetworkList](#section13429191802012)(ComponentName admin, boolean isTrustList, boolean isDomainList, ArrayList<String> addrList) 删除网络黑白名单。|
|boolean|[clearNetworkList](#section142681218305)(ComponentName admin) 清空网络黑白名单。|
|boolean|[setEthernetConfiguration](#section11489153363216)(ComponentName admin, DeviceEthernetProfile deviceEthernetProfile) 配置以太网。|
|DeviceEthernetProfile|[getEthernetConfiguration](#section1852314844013)(ComponentName admin, String interfaceName) 获取以太网配置。|
|boolean|[addBrowserNetworkList](#section412915010115)(ComponentName admin, boolean isTrustList, ArrayList<String> addrList)tList) 添加浏览器网址信任列表或者阻止列表。|
|boolean|[removeBrowserNetworkList](#section20682357191616)(ComponentName admin, boolean isTrustList, ArrayList<String> addrList) 移除浏览器网址信任列表或者阻止列表。|
|boolean|[clearBrowserNetworkList](#section1843064916275)(ComponentName admin) 清除浏览器网址信任列表与阻止列表。|
|List<String>|[getBrowserNetworkList](#section166628127302)(ComponentName admin, boolean isTrustList) 获取浏览器网址信任列表或者阻止列表。|
|boolean|[addNetworkAccessAppList](#section12442030203815)(ComponentName admin, ArrayList<String> appList, boolean isTrustList) 添加应用上网白名单。|
|boolean|[removeNetworkAccessAppList](#section520613714224)(ComponentName admin, ArrayList<String> appList, boolean isTrustList) 删除应用上网白名单。|
|boolean|[clearNetworkAccessAppList](#section55699125284)(ComponentName admin) 清空应用上网白名单。|
|ArrayList<String>|[getNetworkAccessAppList](#section161221922143117)(ComponentName admin, boolean isTrustList) 获取应用上网白名单。|
|boolean|[turnOnEthDhcpServerMode](#section145042733510)(ComponentName admin, boolean isOn) 开启/关闭以太网DHCP Server模式。|
|boolean|[isEthDhcpServerModeTurnedOn](#section12411112115215)(ComponentName admin) 查询以太网DHCP Server模式开启状态。|
|boolean|[setDhcpOption](#section1761134218134)(ComponentName admin, String dhcpOption) 设置DHCP option60字段的值。|
|boolean|[clearDhcpOption](#section526135642912) (ComponentName admin) 清除已设置的DHCP option60字段的值。|
|String|[getDhcpOption](#section125376611371)(ComponentName admin) 获取已设置的DHCP option60字段的值。|
|boolean|[configNtpTrustedTimeServer](#section1641185219423)(ComponentName admin, String serverName) 配置NTP时间同步服务器。|
|String|[getNtpTrustedTimeServer](#section1153202114218)(ComponentName admin) 获取已配置的NTP时间同步服务器。|
|boolean|[setBrowserBookMarks](#section731219365350)(ComponentName admin, String bookMarks) 设置华为浏览器书签。|
|String|[getBrowserBookMarks](#section8845146161612)(ComponentName admin) 获取设置的华为浏览器书签数据。|
|boolean|[setBrowserHomePage](#section66301214112010)(ComponentName admin, String homePage) 设置华为浏览器主页。|
|String|[getBrowserHomePage](#section9834111552615)(ComponentName admin) 获取设置的华为浏览器主页。|

## Public Methods

### addApn

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.0及以上或HarmonyOS 2.0及以上|

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void addApn(ComponentName admin, Map<String, String> apnInfo) 增加APN，需要提供的详细参数包括(name、apn、mcc、mnc、numeric、user、password、server、proxy、port、mmsport、mmsproxy、mmsc、authtype、current、Type)等。 注意：需要申请com.huawei.permission.sec.MDM_APN权限。|

**Parameters**

|Name|Description|
|:------|:----------------------------------------|
|admin|调用该接口APK的组件名称，不能为null。|
|apnInfo|要增加的apn参数字段-值键值对，其中name、apn、mcc、mnc为必选字段。|

|apnInfo字段名称（注意大小写）|说明|
|:-----------------|:----------------------------------------------------------------------------------|
|name|apn名称。|
|apn|Apn。|
|user|用户名。|
|password|密码。|
|proxy|代理地址。|
|port|代理端口。|
|server|服务器。|
|mmsproxy|彩信代理。|
|mmsport|彩信端口。|
|mmsc|彩信中心。|
|mcc|Sim卡的mcc。|
|mnc|Sim卡的mnc。|
|numeric|Sim卡的plmn，需要与mcc+mnc匹配。|
|authtype|身份验证类型，取值范围： * 0：无 * 1：PAP * 2：CHAP * 3：PAP或CHAP 若未指定则系统自动设置为-1，在使用时当做0处理。|
|type|apn类型，可以为下面的一个或多个字段组合，用逗号分隔。 * default * mms * supl * dun * ia * fota * cbs * hipri|
|protocol|Apn协议，取值范围： * IP * IPV6 * IPV4V6 为空则系统默认设置为IP。|
|roaming_protocol|Apn漫游协议，取值范围同上。|
|bearer|承载系统。|
|mvno_type|MVNO类型，取值范围： * 无 * spn * imsi * gid|

**Return**

|Type|Description|
|:---|:----------|
|void|-|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APN权限。|
|IllegalArgumentException|* 参数admin为null时。 * 参数apnInfo为null或空时。|

### deleteApn

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.0及以上或HarmonyOS 2.0及以上|

|Method|
|:----------------------------------------------------------------------------------------------------------------|
|public void deleteApn(ComponentName admin, String apnId) 删除指定标识符的APN。 注意：需要申请com.huawei.permission.sec.MDM_APN权限。|

**Parameters**

|Name|Description|
|:----|:---------------------|
|admin|调用该接口APK的组件名称，不能为null。|
|apnId|要删除的apn的id。|

**Return**

|Type|Description|
|:---|:----------|
|void|-|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APN权限。|
|IllegalArgumentException|* 参数admin为null时。 * 参数apnId为null或空时。|

### updateApn

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.0及以上或HarmonyOS 2.0及以上|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------|
|public void updateApn(ComponentName admin, Map<String, String> apnInfo, String apnId) 更新指定标识符的APN。 注意：需要申请com.huawei.permission.sec.MDM_APN权限。|

**Parameters**

|Name|Description|
|:------|:--------------------------------------------------------------------------------------|
|admin|调用该接口APK的组件名称，不能为null。|
|apnInfo|要修改的apn参数字段-值（字段列表参见[apnInfo字段表](#ZH-CN_TOPIC_0000001306817634__table197923531817)）键值对。|
|apnId|要修改的apn的id。|

**Return**

|----|-----------|
|Type|Description|
|void|-|

**Throws**

|Name|Description|
|:-----------------------|:-------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APN权限。|
|IllegalArgumentException|* 参数admin为null时。 * 参数apnInfo为null或空时。 * 参数apnId为null或空时。|

### queryApn

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.0及以上或HarmonyOS 2.0及以上|

|Method|
|:----------------------------------------------------------------------------------------------|
|public List<String> queryApn(ComponentName admin, Map<String, String> apnInfo) 查询已匹配参数的APN的标识符。|

**Parameters**

|Name|Description|
|:------|:--------------------------------------------------------------------------------------|
|admin|调用该接口APK的组件名称。|
|apnInfo|要查询的apn参数字段-值（字段列表参见[apnInfo字段表](#ZH-CN_TOPIC_0000001306817634__table197923531817)）键值对。|

**Return**

|Type|Description|
|:-----------|:---------------|
|List<String>|满足查询条件的所有apn id。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------|
|SecurityException|此APK未经设备管理激活。|
|IllegalArgumentException|* 参数admin为null时。 * 参数apnInfo为null或空时。|

### getApnInfo

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.0及以上或HarmonyOS 2.0及以上|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public Map<String, String> getApnInfo(ComponentName admin, String apnId) 查询指定标识符的APN的详细参数，详细参数包括(name、apn、mcc、mnc、numeric、user、password、server、proxy、port、mmsport、mmsproxy、mmsc、authtype、current、Type)等。|

**Parameters**

|Name|Description|
|:----|:-------------|
|admin|调用该接口APK的组件名称。|
|apnId|要查询的apn的id。|

**Return**

|Type|Description|
|:------------------|:-----------|
|Map<String, String>|查询到的apn参数信息。|

**Throws**

|Name|Description|
|:-----------------------|:----------------------------------|
|SecurityException|此APK未经设备管理激活。|
|IllegalArgumentException|* 参数admin为null时。 * 参数apnId为null或空时。|

### setPreferApn

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 5.0及以上或HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------------------------------------------------------------------|
|public void setPreferApn(ComponentName admin, String apnId) 设置指定标识符的APN的为默认APN。 注意：需要申请com.huawei.permission.sec.MDM_APN权限。|

**Parameters**

|Name|Description|
|:----|:---------------------|
|admin|调用该接口APK的组件名称，不能为null。|
|apnId|要设置的apn的id。|

**Return**

|Type|Description|
|:---|:----------|
|void|-|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_APN权限。|
|IllegalArgumentException|* 参数admin为null时。 * 参数apnId为null或空时。|

### addNetworkAccessWhitelist

**Supported Devices**

|Device Type|OS Version|
|:----------|:-----------------|
|手机、平板|EMUI 5.0~EMUI 10.0|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void addNetworkAccessWhitelist(ComponentName admin, List<String> addrList) EMUI 10.1.0该方法废弃，请使用[addNetworkList](#section54961813579)。 增加IP到IP地址白名单里面，只可访问IP白名单包含的网址。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:-------|:---------------------|
|admin|调用该接口APK的组件名称，不能为null。|
|addrList|要增加的ip地址列表。|

**Return**

|Type|Description|
|:---|:----------|
|void|-|

**Throws**

|Name|Description|
|:-----------------------|:-------------------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|* 参数admin为null时。 * 参数addrList为null或空时。 * addrList中包含非法ip地址时。 * 增加之后白名单总数超过1000时。|

### removeNetworkAccessWhitelist

**Supported Devices**

|Device Type|OS Version|
|:----------|:-----------------|
|手机、平板|EMUI 5.0~EMUI 10.0|

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void removeNetworkAccessWhitelist(ComponentName admin, List<String> addrList) EMUI 10.1.0该方法废弃，请使用[removeNetworkList](#section13429191802012)。 删除网络访问白名单。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:-------|:---------------------|
|admin|调用该接口APK的组件名称，不能为null。|
|addrList|要删除的ip地址列表。|

**Return**

|Type|Description|
|:---|:----------|
|void|-|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|* 参数admin为null时。 * 参数addrList为null或空时。 * addrList中包含非法ip地址时。|

### getNetworkAccessWhitelist

**Supported Devices**

|Device Type|OS Version|
|:----------|:-----------------|
|手机、平板|EMUI 5.0~EMUI 10.0|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------|
|public List<String> getNetworkAccessWhitelist(ComponentName admin) EMUI 10.1.0该方法废弃，请使用[getNetworkList](#section198171736795)。 获取网络访问白名单。|

**Parameters**

|Name|Description|
|:----|:-------------|
|admin|调用该接口APK的组件名称。|

**Return**

|Type|Description|
|:-----------|:----------|
|List<String>|网络访问白名单列表。|

**Throws**

|Name|Description|
|:----------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

### addNetworkAccessBlockList

**Supported Devices**

|Device Type|OS Version|
|:----------|:-------------------------|
|手机、平板|EMUI 11.0或HarmonyOS 2.0及以上|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean addNetworkAccessBlockList(ComponentName admin, ArrayList<String> addDomainList) 设置网页访问黑名单。黑名单中的域名将无法打开。仅预装浏览器生效。 * 该接口为当前应用添加网络访问黑名单。 * 如果有多个应用设置了网页访问黑名单，则采用全局策略，取各个应用所设置的网页黑名单的合集。 * 网络访问黑名单为域名的集合。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:------------|:---------------------|
|admin|调用该接口APK的组件名称，不能为null。|
|addDomainList|要增加到黑名单的域名表。|

**Return**

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|当前设置完成后，设备总体黑名单中域名数目超过1000。|

### addNetworkAccessBlackList

**Supported Devices**

|Device Type|OS Version|
|:----------|:-----------------|
|手机、平板|EMUI 5.1~EMUI 10.1|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean addNetworkAccessBlackList(ComponentName admin, ArrayList<String> addDomainList) EMUI 11.0.0该方法废弃，请使用[addNetworkAccessBlockList](#section8253144214520)。 设置网页访问黑名单。黑名单中的域名将无法打开。仅预装浏览器生效。 * 该接口为当前应用添加网络访问黑名单。 * 如果有多个应用设置了网页访问黑名单，则采用全局策略，取各个应用所设置的网页黑名单的合集。 * 网络访问黑名单为域名的集合。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:------------|:---------------------|
|admin|调用该接口APK的组件名称，不能为null。|
|addDomainList|要增加到黑名单的域名表。|

**Return**

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|参数admin为null。|

### removeNetworkAccessBlockList

**Supported Devices**

|Device Type|OS Version|
|:----------|:-------------------------|
|手机、平板|EMUI 11.0或HarmonyOS 2.0及以上|

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean removeNetworkAccessBlockList(ComponentName admin, ArrayList<String> removeDomainList) 删除网络访问黑名单。 * 该接口删除应用的网络访问黑名单。 * 如果有多个应用设置了网页访问黑名单，则全局生效的配置是取各个应用设置的合集。 * removeDomainList为域名的集合。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:------------|:---------------------|
|admin|调用该接口APK的组件名称，不能为null。|
|addDomainList|要删除黑名单域名的列表。|

**Return**

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|当前设置完成后，设备总体黑名单中域名数目超过1000。|

### removeNetworkAccessBlackList

**Supported Devices**

|Device Type|OS Version|
|:----------|:-----------------|
|手机、平板|EMUI 5.1~EMUI 10.1|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean removeNetworkAccessBlackList(ComponentName admin, ArrayList<String> removeDomainList) 从EMUI 5.1开始支持，EMUI 11.0.0该方法废弃，请使用[removeNetworkAccessBlockList](#section13786196556)。 删除网络访问黑名单。 * 该接口删除应用的网络访问黑名单。 * 如果有多个应用设置了网页访问黑名单，则全局生效的配置是取各个应用设置的合集。 * removeDomainList为域名的集合。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:------------|:---------------------|
|admin|调用该接口APK的组件名称，不能为null。|
|addDomainList|要删除黑名单域名的列表。|

**Return**

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|当前设置完成后，设备总体黑名单中域名数目超过1000。|

### getNetworkAccessBlockList

**Supported Devices**

|Device Type|OS Version|
|:----------|:-------------------------|
|手机、平板|EMUI 11.0或HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public List<String> getNetworkAccessBlockList(ComponentName admin) 获取网页访问黑名单。 * 当admin为null 时，获取的是全局生效的网络访问黑名单的配置。 * 当admin不为null时，获取的是该APK 设置的网络访问黑名单的配置。 * 网络访问黑名单为域名的集合。|

**Parameters**

|Name|Description|
|:----|:-----------|
|admin|调用该接口的的组件名称。|

**Return**

|Type|Description|
|:-----------|:----------|
|List<String>|黑名单中的所有网址。|

### getNetworkAccessBlackList

**Supported Devices**

|Device Type|OS Version|
|:----------|:-----------------|
|手机、平板|EMUI 5.1~EMUI 10.1|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public List<String> getNetworkAccessBlackList(ComponentName admin) EMUI 11.0.0该方法废弃，请使用[getNetworkAccessBlockList](#section164861027161917)。 获取网页访问黑名单。 * 当admin为null 时，获取的是全局生效的网络访问黑名单的配置。 * 当admin不为null时，获取的是该APK 设置的网络访问黑名单的配置。 * 网络访问黑名单为域名的集合。|

**Parameters**

|Name|Description|
|:----|:-----------|
|admin|调用该接口的的组件名称。|

**Return**

|Type|Description|
|:-----------|:----------|
|List<String>|黑名单中的所有网址。|

### queryBrowsingHistory

**Supported Devices**

|Device Type|OS Version|
|:----------|:-----------------|
|手机、平板|EMUI 5.1~EMUI 11.0|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
|public List<String> queryBrowsingHistory(ComponentName admin) 获取系统浏览器的网页访问记录。获取的网页访问记录为网页的URL集合。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:----|:----------|
|admin|调用该接口的组件名称。|

**Return**

|Type|Description|
|:-----------|:----------|
|List<String>|浏览器历史访问记录。|

**Throws**

|Name|Description|
|:----------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

### resetNetworkSetting

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------------------|
|手机、平板|EMUI 8.0及以上或HarmonyOS 2.0及以上|

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------|
|public void resetNetworkSetting(ComponentName admin) 重置网络设置，包括WLAN、移动数据网络、蓝牙。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:----|:------------------|
|admin|调用该接口的组件名称，不能为null。|

**Return**

|Type|Description|
|:---|:----------|
|void|-|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|入参为null。|

### addNetworkList

**Supported Devices**

|Device Type|OS Version|
|:----------|:------------------------------|
|手机、平板|EMUI 10.1.0及以上或HarmonyOS 2.0及以上|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean addNetworkList(ComponentName admin, boolean isWhiteList, boolean isDomainList, ArrayList<String> addrList) 添加网络地址黑白名单。 注意： 1. 需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。 2. addrList总数在EMUI 10.1.0~ HarmonyOS 3.1上限为200条，在HarmonyOS 4.0及以上上限为1000条。 3. 不能同时设置黑名单和白名单。|

**Parameters**

|Name|Description|
|:-----------|:----------------------------------------------------|
|admin|调用该接口的组件名称，不能为null。|
|isWhiteList|* true：需要添加的网络地址名单是白名单。 * false：需要添加的网络地址名单是黑名单。|
|isDomainList|* true : 需要添加的网络地址名单是域名名单。 * false: 添加的网络地址名单是IP地址名单。|
|addrList|需要添加到网络黑白名单中的地址名单列表。|

**Return**

|Type|Description|
|:------|:-------------------------------------|
|boolean|* true：添加网络黑白名单成功。 * false：添加网络黑白名单失败。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|超出网络黑白名单策略数量限制或者添加的地址参数不合法。|

### getNetworkList

**Supported Devices**

|Device Type|OS Version|
|:----------|:------------------------------|
|手机、平板|EMUI 10.1.0及以上或HarmonyOS 2.0及以上|

|Method|
|:-----------------------------------------------------------------------------------------------------------|
|public List<String> getNetworkList(ComponentName admin, boolean isWhiteList, boolean isDomainList) 获取网络黑白名单。|

**Parameters**

|Name|Description|
|:-----------|:----------------------------------------------|
|admin|调用该接口的组件名称，查询该应用配置的策略；参数为null时，获取所有应用设置的综合策略结果。|
|isWhiteList|* true：需要获取的接口是白名单。 * false：需要获取的接口是黑名单。|
|isDomainList|* true : 需要获取的接口是域名名单。 * false: 需要获取的接口是IP地址名单。|

**Return**

|------------|------------------|
|Type|Description|
|List<String>|获取到的网络黑白名单，可能为空列表。|

### removeNetworkList

**Supported Devices**

|Device Type|OS Version|
|:----------|:------------------------------|
|手机、平板|EMUI 10.1.0及以上或HarmonyOS 2.0及以上|

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean removeNetworkList(ComponentName admin, boolean isWhiteList, boolean isDomainList, ArrayList<String> addrList) 删除网络黑白名单。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:-----------|:----------------------------------------------|
|admin|调用该接口的组件名称，不能为null。|
|isWhiteList|* true：需要删除的接口是白名单。 * false：需要删除的接口是黑名单。|
|isDomainList|* true : 需要删除的接口是域名名单。 * false: 需要删除的接口是IP地址名单。|
|addrList|需要删除到网络黑白名单中的地址列表。|

**Return**

|Type|Description|
|:------|:-------------------------------------|
|boolean|* true：删除网络黑白名单成功。 * false：删除网络黑白名单失败。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|* 参数admin为null时。 * 参数addrList为null或空时。 * addrList中包含非法ip地址时。|

### clearNetworkList

**Supported Devices**

|Device Type|OS Version|
|:----------|:------------------------------|
|手机、平板|EMUI 10.1.0及以上或HarmonyOS 2.0及以上|

|Method|
|:---------------------------------------------------------------------------------------------------------------------|
|public boolean clearNetworkList(ComponentName admin) 清空网络黑白名单。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:----|:------------------|
|admin|调用该接口的组件名称，不能为null。|

**Return**

|Type|Description|
|:------|:-------------------------------------|
|boolean|* true：删除网络黑白名单成功。 * false：删除网络黑白名单失败。|

**Throws**

|Name|Description|
|:----------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

### setEthernetConfiguration

**Supported Devices**

|Device Type|OS Version|
|:----------|:-------------------------|
|手机、平板|EMUI 11.0或HarmonyOS 2.0及以上|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setEthernetConfiguration(ComponentName admin, DeviceEthernetProfile deviceEthernetProfile) 配置以太网，包含代理设置、IP获取方式（DHCP/静态配置），静态配置时可指定ip地址、网关、网络前缀长度、dns服务器等。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:--------------------|:------------------|
|admin|调用该接口的组件名称，不能为null。|
|deviceEthernetProfile|以太网配置参数。|

|**DeviceEthernetProfile**字段|说明|
|:---------------------------|:-------------------|
|IpAssignment ipAssignment|网络接入方式(DHCP/STATIC)。|
|String interfaceName|网络接口名称。|
|String ipAddress|IP地址。|
|String subnetMask|掩码信息。|
|String gateway|网关。|
|ArrayList<String> dnsServers|dns服务器。|
|String proxyHost|代理主机。|
|int proxyPort|代理端口。|

**Return**

|Type|Description|
|:------|:-------------------------------|
|boolean|* true：配置以太网成功。 * false：配置以太网失败。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|参数错误。|

### getEthernetConfiguration

**Supported Devices**

|Device Type|OS Version|
|:----------|:-------------------------|
|手机、平板|EMUI 11.0或HarmonyOS 2.0及以上|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public DeviceEthernetProfile getEthernetConfiguration(ComponentName admin, String interfaceName) 获取以太网配置。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:------------|:----------|
|admin|调用该接口的组件名称。|
|interfaceName|网络接口名称。|

**Return**

|Type|Description|
|:--------------------|:----------|
|DeviceEthernetProfile|以太网配置。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|参数错误。|

### addBrowserNetworkList

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 2.0及以上|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean addBrowserNetworkList(ComponentName admin, boolean isTrustList, ArrayList<String> addrList) 添加浏览器网址信任列表或者阻止列表。只对华为浏览器生效。 注意： 1. 需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。 2. 信任列表与阻止列表只能同时添加一种。 3. addrList大小不能超过200。|

**Parameters**

|Name|Description|
|:----------|:-------------------------------------------|
|admin|调用该接口的组件名称，不能为null。|
|isTrustList|* true：添加的浏览器列表为信任列表。 * false：添加的浏览器列表为阻止列表。|
|addrList|需要添加的浏览器访问域名与ip列表。|

**Return**

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|参数错误。|

### removeBrowserNetworkList

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 2.0及以上|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean removeBrowserNetworkList(ComponentName admin, boolean isTrustList, ArrayList<String> addrList) 移除浏览器网址信任列表或者阻止列表。只对华为浏览器生效。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:----------|:-------------------------------------------|
|admin|调用该接口的组件名称，不能为null。|
|isTrustList|* true：移除的浏览器列表为信任列表。 * false：移除的浏览器列表为阻止列表。|
|addrList|需要移除的浏览器访问域名与ip列表。|

**Return**

|Type|Description|
|:------|:-------------------------|
|boolean|* true：移除成功。 * false：移除失败。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|参数错误。|

### clearBrowserNetworkList

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean clearBrowserNetworkList(ComponentName admin) 清除浏览器信任列表与阻止列表。只对华为浏览器生效。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:----|:------------------|
|admin|调用该接口的组件名称，不能为null。|

**Return**

|Type|Description|
|:------|:-------------------------|
|boolean|* true：清除成功。 * false：清除失败。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|参数错误。|

### getBrowserNetworkList

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 2.0及以上|

|Method|
|:---------------------------------------------------------------------------------------------------------------|
|public List<String> getBrowserNetworkList(ComponentName admin, boolean isTrustList) 获取浏览器网址信任列表或者阻止列表。只对华为浏览器生效。|

**Parameters**

|Name|Description|
|:----------|:-----------------------------------|
|admin|调用该接口的组件名称。|
|isTrustList|* true：获取浏览器信任列表。 * false：获取浏览器阻止列表。|

**Return**

|Type|Description|
|:-----------|:-----------------|
|List<String>|浏览器网址访问信任列表或者阻止列表。|

**Throws**

|Name|Description|
|:-----------------------|:------------|
|SecurityException|此APK未经设备管理激活。|
|IllegalArgumentException|参数错误。|

### addNetworkAccessAppList

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 2.0及以上|

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean addNetworkAccessAppList(ComponentName admin, ArrayList<String> appList, boolean isTrustList) 添加应用上网白名单。 注意： 1. 需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。 2. isTrustList只支持设置为true，设置为false时接口不起作用。 3. addNetworkList、addBrowserNetworkList、addNetworkAccessAppList的区别： * addNetworkList：系统上网控制接口，只能设置黑名单或者白名单中的一种，支持域名与ip同时配置，对所有App都生效（appList为域名时已经做了DNS防劫持的除外）。 * addBrowserNetworkList：华为浏览器上网控制接口，只能设置黑名单或者白名单中的一种，支持域名与ip同时配置。 * addNetworkAccessAppList：App上网控制接口，设置可以上网的App，不在列表中的App无法访问网络。|

**Parameters**

|Name|Description|
|:----------|:-------------------|
|admin|调用该接口的组件名称，不能为null。|
|appList|需要添加的应用上网白名单包名列表。|
|isTrustList|只能设置为true，添加应用上网白名单。|

**Return**

|Type|Description|
|:------|:-------------------------|
|boolean|* true：添加成功。 * false：添加失败。|

**Throws**

|Name|Description|
|:----------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

### removeNetworkAccessAppList

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 2.0及以上|

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean removeNetworkAccessAppList(ComponentName admin, ArrayList<String> appList, boolean isTrustList) 删除应用上网白名单。 注意： 1. 需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。 2. isTrustList只能设置为true，设置为false时该接口返回false，接口不起作用。|

**Parameters**

|Name|Description|
|:----------|:-------------------|
|admin|调用该接口的组件名称，不能为null。|
|appList|需要删除的应用联网白名单包名列表。|
|isTrustList|只能设置为true，删除应用上网白名单。|

**Return**

|Type|Description|
|:------|:-------------------------|
|boolean|* true：删除成功。 * false：删除失败。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|* 参数admin为null时。 * 参数appList为null或空时。 * appList中包含非法应用包名时。|

### clearNetworkAccessAppList

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 2.0及以上|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------|
|public boolean clearNetworkAccessAppList(ComponentName admin) 清空应用上网白名单。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:----|:------------------|
|admin|调用该接口的组件名称，不能为null。|

**Return**

|Type|Description|
|:------|:-------------------------|
|boolean|* true：清空成功。 * false：清空失败。|

**Throws**

|Name|Description|
|:----------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

### getNetworkAccessAppList

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 2.0及以上|

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------|
|public ArrayList<String> getNetworkAccessAppList(ComponentName admin, boolean isTrustList) 获取应用上网白名单。 注意：isTrustList只能设置为true，设置为false时该接口返回空列表。|

**Parameters**

|Name|Description|
|:----------|:-------------------|
|admin|调用该接口的组件名称。|
|isTrustList|只能设置为true，获取应用上网白名单。|

**Return**

|Type|Description|
|:----------------|:----------|
|ArrayList<String>|获取的应用上网白名单。|

### turnOnEthDhcpServerMode

**Supported Devices**

|Device Type|OS Version|
|:----------|:------------|
|手机、平板|HarmonyOS 2.0|

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean turnOnEthDhcpServerMode(ComponentName admin, boolean isOn) 开启/关闭以太网DHCP Server模式。 注意： 1. 需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。 2. 需要重新插拔以太网卡才能生效，该功能不能与setEthernetConfigeration配置以太网功能同时使用。|

**Parameters**

|Name|Description|
|:----|:------------------------------------------------------------------|
|admin|调用该接口的组件名称，不能为null。|
|isOn|* true：开启以太网DHCP Server模式。 * false：关闭以太网DHCP Server模式（默认为Client模式）。|

**Return**

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|参数错误。|

### isEthDhcpServerModeTurnedOn

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 2.0及以上|

|Method|
|:--------------------------------------------------------------------------------------|
|public boolean isEthDhcpServerModeTurnedOn(ComponentName admin) 查询以太网DHCP Server模式开启状态。|

**Parameters**

|Name|Description|
|:----|:----------|
|admin|调用该接口的组件名称。|

**Return**

|Type|Description|
|:------|:------------------------------------------------------|
|boolean|* true：以太网DHCP Server功能开启。 * false：以太网DHCP Server功能未开启。|

### setDhcpOption

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|智慧屏|HarmonyOS 3.1及以上|

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setDhcpOption(ComponentName admin, String dhcpOption) 设置DHCP option60字段的值。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:---------|:---------------------------------------------------------------|
|admin|调用该接口的组件名称，不能为null。|
|dhcpOption|需要设置的DHCP option60字段的值。 * 不能为null。 * 长度不能超过255个字节。 * 编码必须是ASCII。|

**Return**

|Type|Description|
|:------|:-------------------------|
|boolean|* true：设置成功。 * false：设置失败。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|* 参数admin为null。 * 参数dhcpOption为null、或者长度超过255字节、或者编码不是ASCII。|

### clearDhcpOption

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|智慧屏|HarmonyOS 3.1及以上|

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------|
|public boolean clearDhcpOption(ComponentName admin) 清除已设置的DHCP option60字段的值。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:----|:------------------|
|admin|调用该接口的组件名称，不能为null。|

**Return**

|Type|Description|
|:------|:-------------------------|
|boolean|* true：清除成功。 * false：清除失败。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|参数admin为null。|

### getDhcpOption

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|智慧屏|HarmonyOS 3.1及以上|

|Method|
|:------------------------------------------------------------------------|
|public String getDhcpOption(ComponentName admin) 获取已设置的DHCP option60字段的值。|

**Parameters**

|Name|Description|
|:----|:----------|
|admin|调用该接口的组件名称。|

**Return**

|Type|Description|
|:-----|:----------------------------------|
|String|已设置的DHCP option60字段的值，若没有设置则返回null。|

**Throws**

|Name|Description|
|:----------------|:--------------------------|
|SecurityException|* 指定的admin未激活。 * 参数admin非法。|

### configNtpTrustedTimeServer

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|智慧屏|HarmonyOS 3.1及以上|

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean configNtpTrustedTimeServer(ComponentName admin, String serverName) 配置NTP时间同步服务器。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:---------|:--------------------|
|admin|调用该接口的组件名称，不能为null。|
|serverName|要配置的NTP时间同步服务器的IP或域名。|

**Return**

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|参数admin为null。|

### getNtpTrustedTimeServer

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|智慧屏|HarmonyOS 3.1及以上|

|Method|
|:----------------------------------------------------------------------------|
|public boolean getNtpTrustedTimeServer(ComponentName admin) 获取已配置的NTP时间同步服务器。|

**Parameters**

|Name|Description|
|:----|:----------|
|admin|调用该接口的组件名称。|

**Return**

|Type|Description|
|:-----|:--------------------|
|String|已配置的NTP时间同步服务器的IP或域名。|

**Throws**

|Name|Description|
|:----------------|:--------------------------|
|SecurityException|* 指定的admin未激活。 * 参数admin非法。|

### setBrowserBookMarks

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 4.0及以上|

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setBrowserBookMarks(ComponentName admin, String bookMarks) 设置华为浏览器书签。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:--------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|admin|调用该接口的组件名称，不能为null。|
|bookMarks|需要设置的书签数据，格式为：{"hashValue":"","bookMarksFolders":[{"folderName":"","bookMarks":[{"name": "","url": ""}]}]}，其中hashValue、folderName、name上限为50字符，bookMarksFolders上限十个元素，url需携带http或https协议头，总数上限为200条。|

**Return**

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|admin为null。|

### getBrowserBookMarks

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 4.0及以上|

|Method|
|:---------------------------------------------------------------------|
|public String getBrowserBookMarks(ComponentName admin) 获取设置的华为浏览器书签数据。|

**Parameters**

|Name|Description|
|:----|:------------------|
|admin|调用该接口的组件名称，不能为null。|

**Return**

|Type|Description|
|:-----|:--------------------------------------------------------------------------------------------------------------------------------------|
|String|设置的浏览器书签的json数据，格式为：格式为：{"hashValue":"","bookMarksFolders":[{"folderName":"","bookMarks":[{"name": "","url": ""}]}]}，若浏览器未设置书签，则返回null。|

**Throws**

|Name|Description|
|:----------------|:------------|
|SecurityException|此APK未经设备管理激活。|

### setBrowserHomePage

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 4.0及以上|

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------|
|public boolean setBrowserHomePage(ComponentName admin, String homePage) 设置华为浏览器主页。 注意：需要申请com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|

**Parameters**

|Name|Description|
|:-------|:---------------------------|
|admin|调用该接口的组件名称，不能为null。|
|homePage|需要设置成主页的地址，需携带http或https协议头。|

**Return**

|Type|Description|
|:------|:-------------------------|
|boolean|* true：配置成功。 * false：配置失败。|

**Throws**

|Name|Description|
|:-----------------------|:------------------------------------------------------------------|
|SecurityException|* 此APK未经设备管理激活。 * 无com.huawei.permission.sec.MDM_NETWORK_MANAGER权限。|
|IllegalArgumentException|admin为null。|

### getBrowserHomePage

**Supported Devices**

|Device Type|OS Version|
|:----------|:---------------|
|手机、平板|HarmonyOS 4.0及以上|

|Method|
|:------------------------------------------------------------------|
|public String getBrowserHomePage(ComponentName admin) 获取设置的华为浏览器主页。|

**Parameters**

|Name|Description|
|:----|:----------|
|admin|调用该接口的组件名称。|

**Return**

|Type|Description|
|:-----|:-----------------------|
|String|浏览器主页。若未设置浏览器主页，则返回null。|

**Throws**

|Name|Description|
|:----------------|:------------|
|SecurityException|此APK未经设备管理激活。|

