---
name: document/cn/HMSCore-References/appgallerykit-errorcode-0000001055450607
title: 错误码
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/appgallerykit-errorcode-0000001055450607
---

# 错误码

|错误码|值|描述|解决方法|
|:----------------------------------------------------------|:---|:----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|
|JosStatusCodes.APP_STATE_SUCCESS|0|成功。|-|
|JosStatusCodes.APP_STATE_ERROR|7001|一般错误。|请联系华为技术支持定位。|
|JosStatusCodes.APP_STATE_NETWORK_ERROR|7002|网络错误、应用市场服务地设置错误。|检查网络，检查应用市场客户端服务地设置是否正确。|
|JosStatusCodes.APP_STATE_PARAM_ERROR|7005|请求参数错误。|请检查参数后，重新调用，如果检查正确，请联系华为技术支持定位。|
|JosStatusCodes.APP_STATE_NO_SUPPORT|7006|当前区域不支持此业务。|请检查玩家所在的国家和地区是否支持联运服务。|
|JosStatusCodes.APP_STATE_NOT_LOGIN|7013|未登录华为帐号。|请先调用华为帐号授权接口，引导用户完成帐号授权。|
|JosStatusCodes.APP_STATE_NOT_INIT|7018|未调用初始化接口。|未调用init接口，请在调用联运服务接口之前，先调用初始化接口。|
|JosStatusCodes.APP_STATE_ACCOUNT_NOT_MATCH|7019|应用内登录帐号与系统当前帐号不一致。|华为帐号发生切换，请重新调用华为帐号授权接口完成用户授权，重新登录游戏。|
|JosStatusCodes.JOS_PRIVACY_PROTOCOL_NO_AGREE|7400|用户当前还未同意联运隐私协议。|重新调用[init](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/josappsclient-0000001050121680#section12941311162615)接口引导用户同意协议。|
|JosStatusCodes.JOS_PRIVACY_PROTOCOL_REJECTED|7401|用户在联运隐私协议界面拒绝同意联运隐私协议。|不允许用户进入游戏。|
|GamesStatusCodes.CHECK_IS_MEMBER|7402|已开通会员，且未触发登录限制。|-|
|GamesStatusCodes.CHECK_MEMBER_DEVICE_RESTRICT_CONTINUE_PLAY|7403|已开通会员，触发登录限制,继续游戏。|-|
|GamesStatusCodes.CHECK_MEMBER_DEVICE_RESTRICT_EXIT_GAME|7404|已开通会员，触发登录限制,退出游戏。|-|
|GamesStatusCodes.CHECK_NOT_MEMBER_OR_EXPIRED_EXIT|7405|非会员或会员已过期，点击退出游戏。|-|
|GamesStatusCodes.CHECK_NOT_MEMBER_WITH_BUY_MEMBER|7406|非会员或会员已过期，点击"开通会员"按钮或"去安装"按钮。|-|

