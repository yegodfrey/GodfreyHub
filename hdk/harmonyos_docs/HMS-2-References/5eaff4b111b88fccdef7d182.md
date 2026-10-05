---
name: document/cn/HMS-2-References/hmssdk_jointOper_api_reference_c17
title: getTemperature（废弃）
uri: https://developer.huawei.com/consumer/cn/doc/HMS-2-References/hmssdk_jointOper_api_reference_c17
source: portal
---

# 1. 接口功能

应用调用此接口可以查询当前设备的运行温度，温度数据包含“高”、“中”、“低”3档。

# 2. 调用场景

为了使游戏应用与手机系统深度配合，游戏可以根据设备的温度主动适配系统状态，从而保障用户的流程体验，应用可以在切换到需要消耗较高资源的游戏场景时，提前调用此接口查询设备的温度。接口调用的时机请开发者自行根据游戏的场景自行设计。

# 3. 接口约束

● 在调用本接口前必须先向华为游戏中心提交开放硬件能力申请并通过审核，并成功调用[registerHardwareCapability](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_jointOper_api_reference_c18)接口申请注册开放硬件能力。  
    合作伙伴提交权限申请邮箱：game.business@huawei.com，华为游戏中心在3个工作日内回复。  
● 本接口只支持在中国大陆地区发布的应用。  


● 本接口只支持特定的华为手机（目前支持EMUI8.2及以上版本），并且HMS Core（APK）的版本需要大于2.6.1。

# 4. 调用方法
      
      1. HMSAgent.Game.getTemperature(GetTemperatureHandler handler);
    
    

# 5. 请求参数

参数名称| 必选(M)/可选(O)| 类型| 参数说明  
---|---|---|---  
handler| M| GetTemperatureHandler| 接口调用后的回调结果，查询结束后通过此回调实例回调给应用。回调结果中包含的具体参数参见结果回调。  
  
# 6. 结果回调
      
      1. public interface GetTemperatureHandler { 
        2.         /** 
        3.         * 结果回调 
        4.         * @param retCode 返回码 
        5.         * @param result 查询结果信息 
        6.         */ 
        7.        void onResult(int retCode, TemperatureResult result); 
        8. }
    
    

参数名称| 必选(M)/可选(O)| 类型| 参数说明  
---|---|---|---  
retCode| M| int| 回调结果中查询结果的返回码，应用可以根据返回码判断查询是否成功或失败后如何处理，具体返回码处理参见返回码。  
result| M| TemperatureResult| 包含温度信息查询结果的对象信息。  
获取result对象中参数值时，请使用“对象名称.get参数名称()”的方式，参数名首字母大写。例如，“result.getTemperature()”为获取到的温度数据。  
  
**TemperatureResult**

参数名称| 必选(M)/可选(O)| 类型| 参数说明  
---|---|---|---  
temperature| M| string| 当前设备的温度数据，值为JSON字符串，格式为“{"temperature":value}”，value取值范围如下：  
● 1：低  
● 2：中  
● 3：高  
应用可以使用JSONObject对象从JSON字符串中解析温度数据。  
当温度值为“3”时，应用需要根据实际情况降低游戏性能的参数，例如画质、特效等，以保障游戏的流畅度。  
  
# 7. 返回码

类型| 返回码常量| 返回码值| 返回码说明| 处理建议  
---|---|---|---|---  
通用返回码| 参见[通用返回码](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_jointOper_api_reference_errorcode)。  
业务返回码| GameStatusCodes.GAME_STATE_SUCCESS| 0| 查询成功。|   
GameStatusCodes.GAME_STATE_NOT_REGISTER| 7015| 未注册硬件能力。| 请确保调用registerHardwareCapability接口，并且该接口已经注册成功。  
  
# 8. 调用示例
      
      1. private void getTemperature() {
        2.     if(!isRegister) {
        3.         return;
        4.     }
        5.     showLog("getTemperature: begin");
        6.     HMSAgent.Game.getTemperature(new GetTemperatureHandler() {
        7.         @Override
        8.         public void onResult(int retCode, TemperatureResult result) {
        9.             showLog("getTemperature: onResult=" + retCode);
        10.             if(retCode == GameStatusCodes.GAME_STATE_SUCCESS && result != null) {
        11.                 showLog("getTemperature: onResult=" + result.getTemperature());
        12.                 String temperature = result.getTemperature();
        13.                 if(!TextUtils.isEmpty(temperature)) {
        14.                     try {
        15.                         JSONObject object = new JSONObject(temperature);
        16.                         int temperatureInfo = (int) object.getInt("temperature");
        17.                         if(temperatureInfo == 1) {
        18.                             //温度低 
        19.                         } else if(temperatureInfo == 2) {
        20.                             //温度中 
        21.                         } else if(temperatureInfo == 3) {
        22.                             //温度高 
        23.                         }
        24.                     } catch (JSONException e) {
        25.                         e.printStackTrace();
        26.                     }
        27.                 }
        28.             }
        29.         }
        30.     });
        31. }
    
    
