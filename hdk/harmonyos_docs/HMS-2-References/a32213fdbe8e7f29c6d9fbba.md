---
name: document/cn/HMS-2-References/hmssdk_jointOper_api_reference_c9
title: login（废弃）
uri: https://developer.huawei.com/consumer/cn/doc/HMS-2-References/hmssdk_jointOper_api_reference_c9
source: portal
---

# 1. 接口功能

游戏类应用调用此接口接入华为帐号体系，使用用户的华为帐号登录游戏。

# 2. 调用场景

开发者提前在华为开发者联盟申请华为游戏服务。用户启动游戏后，应用即调用此接口拉起华为帐号登录页面，用户登录成功后，应用即可获得用户的游戏帐号信息。

警告：

联运游戏登录必须使用login接口，请勿使用联运应用的signIn接口。

# 3. 接口约束

● 调用本接口前，必须已经提前为应用申请华为游戏服务，参见[申请游戏服务](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_prepare_applygameservice)。

● 本接口当前支持的国家或地区请参见[游戏登录](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_gameLogin)中的“注意事项”。

# 4. 调用方法
      
      1. HMSAgent.Game.login(LoginHandler handler, int forceLogin);
    
    

# 5. 请求参数

参数名称| 必选(M)/可选(O)| 类型| 参数说明  
---|---|---|---  
handler| M| LoginHandler| 接口调用后的回调结果，查询结束后通过此回调实例回调给应用。回调结果中包含的具体参数参见结果回调。  
forceLogin| M| int| 玩家未登录华为帐号是否拉起登录页面。  
● 0：如果玩家未登录华为帐号，HMS SDK不会主动拉起华为帐号登录页面，适用于单机游戏的登录场景。  
● 1：如果玩家未登录华为帐号，HMS SDK会主动起华为帐号登录页面，适用于网游的登录场景和单机游戏支付前强制登录场景。  
  
# 6. 结果回调
      
      1. public interface LoginHandler{ 
        2.         /** 
        3.         * 登录结果回调，onResult方法将回调2次 
        4.         * @param retCode 返回码 
        5.         * @param userData 登录结果信息 
        6.         */ 
        7.         void onResult(int retCode, GameUserData userData); 
        8. }
    
    

参数名称| 必选(M)/可选(O)| 类型| 参数说明  
---|---|---|---  
retCode| M| int| 回调结果中登录结果的返回码，应用可以根据返回码判断登录是否成功或失败后如何处理，具体返回码处理参见返回码。  
userData| M| GameUserData| 包含游戏登录结果的对象信息。如果retCode不为0，该对象将返回null。  
获取userData对象中参数值时，请使用“对象名称.get参数名称()”的方式，参数名首字母大写。例如，“userData.getPlayerId()”为获取到的华为用户分配的游戏账户ID。  
  
**GameUserData**

参数名称| 必选(M)/可选(O)| 类型| 参数说明  
---|---|---|---  
playerId| M| string| 华为为用户分配的游戏帐户ID。该ID可应用内唯一标识该用户。  
● 如果用户非首次登录，应用需要根据onResult方法的2次回调结果对playerId进行不同处理。  
− 第1次回调：登录结果中仅包含playerId和isAuth，isAuth为0。应用如果要求快速登录且对安全性要求不高，可以使用此时的palyerId让用户进入游戏。待第2次回调的登录验签成功则允许用户继续游戏，验签失败则终止游戏并提示重新登录。  
− 第2次回调：isAuth为1，登录结果中包含所有信息，应用需要根据登录结果进行登录验签。如果游戏要求必须登录验签成功后才能允许用户进入游戏，可以忽略第1次的回调结果，直接等待第2次的回调结果。  
● 如果用户首次登录，isAuth为1，应用必须校验登录签名后才能允许用户登录。说明：登录验签的方法可参见[游戏登录](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_gameLogin)中“开发步骤”的步骤2。为保证安全性，强烈建议在应用的服务端进行登录验签。  
displayName| O| string| 用户昵称。  
只有isAuth为1时才返回。  
playerLevel| O| int| 玩家等级。  
只有isAuth为1时才返回。  
isAuth| M| int| 是否需要进行登录签名校验。  
● 0：不需要  
● 1：需要  
当isAuth为1的时候，应用需要校验gameAuthSign参数返回的登录签名。说明：登录验签的方法可参见[游戏登录](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_gameLogin)中“开发步骤”的步骤2。为保证安全性，强烈建议在应用的服务端进行登录验签。  
ts| O| string| 华为游戏服务器返回的时间戳，用于登录签名校验。  
只有isAuth为1时才返回。警告：ts的有效时间默认为5分钟，请在ts有效期内完成登录签名校验，否则将导致登录签名校验失败。  
gameAuthSign| O| string| 登录签名。  
只有isAuth为1时才返回。  
  
# 7. 返回码

类型| 返回码常量| 返回码值| 返回码说明| 处理建议  
---|---|---|---|---  
通用返回码| 参见[通用返回码](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_jointOper_api_reference_errorcode)。  
业务返回码| GameStatusCodes.GAME_STATE_SUCCESS| 0| 返回结果成功。| 表明操作成功。  
GameStatusCodes.GAME_STATE_ERROR| 7001| 游戏进程异常或HMS Core进程异常。| 终止游戏进程或者HMS Core进程后重试。  
GameStatusCodes.GAME_STATE_NETWORK_ERROR| 7002| 网络错误。| 请检查网络状态后重试。  
GameStatusCodes.GAME_STATE_USER_CANCEL_LOGIN| 7004| 用户取消登录操作。| 用户取消登录，应用需要等待用户下一次登录游戏时重新调用login接口。  
GameStatusCodes.GAME_STATE_PARAM_ERROR| 7005| 请求参数错误。| 请检查入参的有效性。  
常见错误：Manifest文件中application节点未配置开发者的支付ID，详细配置请参考[配置工程文件](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_gameProFile)。  
GameStatusCodes.GAME_STATE_NO_SUPPORT| 7006| 当前区域不提供游戏服务。| 您所在的地区目前还不支持接入华为游戏服务。如果是非华为手机出现此错误码，请尝试升级HMS Core至最新版本。  
GameStatusCodes.GAME_STATE_PARAM_NULL| 7011| 入参为空。| login接口传入的参数中存在空值，请检查入参的有效性。  
GameStatusCodes.GAME_STATE_CALL_REPEAT| 7012| 重复调用login接口。| 如果已经调用了login接口，并且没有返回结果之前，应用再次调用login接口，并且与上次调用时间差在10秒之内，就会拒绝后一次的登录请求。  
GameStatusCodes.GAME_STATE_DISAGREE_PROTOCOL| 7014| 用户取消授权或授权失败。| 当调用游戏服务接口，弹出用户授权界面需要用户确认的时候，用户选择了取消授权，则会返回该错误码。  
  
# 8. 调用示例
      
      1.     showLog("game login: begin");
        2.     HMSAgent.Game.login(new LoginHandler() {
        3.         @Override
        4.         public void onResult(int retCode, GameUserData userData) {
        5.             if (retCode == HMSAgent.AgentResultCode.HMSAGENT_SUCCESS && userData != null) {
        6.                 showLog("game login: onResult: retCode=" + retCode + "  user=" + userData.getDisplayName() + "|" + userData.getPlayerId() + "|" + userData.getIsAuth() + "|" + userData.getPlayerLevel());
        7.                // 当登录成功时，此方法会回调2次
        8.             // 第1次：只回调playerId，userData.getIsAuth()为0，在要求快速登录时可以用此playerId登录
        9.             // 第2次：回调所有信息，userData.getIsAuth()为1，此时需要对登录结果进行验签
        10.                 if (userData.getIsAuth() == 1) {
        11.            // 如果需要对登录结果进行验签，建议发送请求到开发者服务器进行。
        12.                                                   // 下面的示例代码为在客户端验签的示例代码，实际验签建议放在应用的服务端。
        13.                     GameLoginSignUtil.checkLoginSign(appId, cpId, game_priv_key, game_public_key, userData, new ICheckLoginSignHandler() {
        14.                         @Override
        15.                         public void onCheckResult(String code, String resultDesc, boolean isCheckSuccess) {
        16.                             showLog("game login check sign: onResult: retCode=" + code + "  resultDesc=" + resultDesc + "  isCheckSuccess=" + isCheckSuccess);
        17.                         }
        18.                     });
        19.                 }
        20.             } else {
        21.                 showLog("game login: onResult: retCode=" + retCode);
        22.             }
        23.         }
        24.         @Override
        25.         public void onChange() {
        26.             //主子帐号登录发生变化时，需要重新登录
        27.             showLog("game login: login changed!");
        28.             login();
        29.         }
        30.     }, 1);
        31. }
    
    
