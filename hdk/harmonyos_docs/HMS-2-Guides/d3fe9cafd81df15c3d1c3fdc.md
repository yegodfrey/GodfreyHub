---
name: document/cn/HMS-2-Guides/hmssdk_huaweipush_devguide_server_agent
title: 服务端开发（废弃）
uri: https://developer.huawei.com/consumer/cn/doc/HMS-2-Guides/hmssdk_huaweipush_devguide_server_agent
source: portal
---

本章节主要介绍接入华为PUSH的服务端开发步骤，以帮助开发者快速了解华为PUSH提供的服务端接口及其调用方法，通过必选功能的开发快速实现服务器批量发送通知消息，通过可选功能的开发实现多样的个性化能力，例如“消息回执”和“应用角标”的能力。

主要包括：

1. 应用服务器获取AccessToken

2. 应用服务器发送PUSH消息

3. 通过消息回执实现自定义推送（可选）

4. 应用服务器发送应用角标（可选）

# 1\. 功能描述

开发者通过上一章节客户端的开发，已经完成了图 6-1中的STEP1和STEP2，具备了单条PUSH消息的发送和接收能力，本章节需要开发者完成STEP3和STEP4的开发，指导开发者如何完成开发者自己的应用服务器PUSH接口的开发工作，让开发者实现消息的批量推送能力。开发者可以通过[服务端示例代码下载](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Examples/hmssdk_huaweipush_sample_code_agent_s)结合本章节的开发指导完成服务端部分的开发。

**图6-1 开发流程图**

![](https://obs.cn-north-2.myhwclouds.com/hms-ds-wf/b/3dbfec5c57364757bd264d1f365171a76966937220544831371.png)  

**客户端开发：**

STEP1开发者的APP集成HMS SDK，调用getToken接口从PUSH服务器获取到PUSH Token。  
STEP2开发者的APP对于获取到的PUSH Token需要上报到开发者自己的服务器APP Provider Server上。

**服务端开发：**  
STEP3开发者利用服务器上保存的PUSH Token向对应的终端设备发送通知消息。  
STEP4消息携带的PUSH Token作为鉴权和路由机制会通过华为PUSH平台将消息发送到最终用户设备上。

# 2\. 应用服务器获取AccessToken

## 2.1 接口说明

**接口名** ：<https://login.cloud.huawei.com/oauth2/v2/token>，接口详细定义参见请求[Access Token](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_huaweipush_api_reference_agent_s1)。

**接口说明：** 开发者应用服务器调用请求Access Token接口获取接入令牌，Access Token是应用服务器发送PUSH 消息的必须参数。

Access Token存在有效期，当前有效期为1个小时，未来可能有变动，有效期通过响应参数消息的expires_in参数传达。Access Token在有效期内请尽量复用，如果开发者应用服务器频繁的申请Access Token，可能会被流控。Access Token过期前，业务要根据这个有效时间提前去申请新Access Token。业务在API调用获知Access Token已经超过的情况下（NSP_STATUS=6），需要触发access_token的申请流程。

## 2.2 开发步骤

**示例代码：**
      
      1.  public class PushNcMsg
        2. { 
        3.     private static String appSecret = "appSecret";//用户在华为开发者联盟申请Push服务获取的服务参数
        4.     private static  String appId = "12345678";//用户在华为开发者联盟申请Push服务获取的服务参数
        5.     private static  String tokenUrl = "https://login.cloud.huawei.com/oauth2/v2/token"; //获取认证Token的URL
        6.     private static  String apiUrl = "https://api.push.hicloud.com/pushsend.do"; //应用级消息下发API
        7.     private static  String accessToken;//下发通知消息的认证Token
        8.     private static  long tokenExpiredTime;  //accessToken的过期时间
        9.    //省略部分代码
        10.    …
        11.     //获取Access Token
        12.     private static void refreshToken() throws IOException
        13.     {
        14.         String msgBody = MessageFormat.format(
        15.          "grant_type=client_credentials&client_secret={0}&client_id={1}", 
        16.          URLEncoder.encode(appSecret, "UTF-8"), appId);
        17.         String response = httpPost(tokenUrl, msgBody, 5000, 5000);
        18.         JSONObject obj = JSONObject.parseObject(response);
        19.         accessToken = obj.getString("access_token");
        20.         tokenExpiredTime = System.currentTimeMillis() + (obj.getLong("expires_in") - 5*60)*1000;
        21.     }
        22. }
    
    

# 3\. 应用服务器发送Push消息

## 3.1 接口说明

接口名：openpush.message.api.send，接口详细定义参见请求服务端发送PUSH消息。

通过上一章节客户端的开发，使用getToken接口获取到的PUSH Token已被保存到开发者自己的应用服务器了，接下来开发者可以在自己的服务器封装PUSH消息，通过调用服务端的openpush.message.api.send接口，给这些设备批量推送消息了。

## 3.2 开发步骤

此开发步骤主要指导开发者如何封装PUSH请求消息，对于“通知栏消息”和“透传消息”有不同的参数可选，本章节以“场景介绍”中的“点击PUSH消息打开指定APP”为例，其他场景的详细参数定义参见[服务端发送PUSH接口](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_huaweipush_api_reference_agent_s2)，里面提供了封装完成的消息样例供开发者参考。

Ø 通知栏消息的开发步骤如下：

**步骤1：**

发送PUSH消息前判断AT是否过期，如果过期需要重新申请。其中refreshToken()为上一章节实现的获取AT的方法。
      
      1. if (tokenExpiredTime <= System.currentTimeMillis())        
        2. { 
        3.      refreshToken();        
        4. }
    
    

**步骤2：**

封装PUSH Token，PUSH Token为客户端调用getToken()接口获取到保存到服务器的，开发者需要读取服务器上的token，将其放到JSONArray中。
      
      1. /*PushManager.requestToken为客户端申请token的方法，可以调用多次以防止申请token失败*/
        2. /*PushToken不支持手动编写，需使用客户端的onToken方法获取*/
        3. JSONArray deviceTokens = new JSONArray();//目标设备Token
        4. deviceTokens.add("12345678901234561234567890123456");
        5. deviceTokens.add("22345678901234561234567890123456");
        6. deviceTokens.add("32345678901234561234567890123456");
    
    

**步骤3：**

封装推送消息body，用于显示通知栏消息显示的标题和内容
      
      1. JSONObject body = new JSONObject();//仅通知栏消息需要设置标题和内容，透传消息key和value为用户自定义
        2. body.put("title", "Push message title");//消息标题
        3. body.put("content", "Push message content");//消息内容体
    
    

**步骤4：**

封装消息点击动作的参数，“com.huawei.hms.hmsdemo”为推送消息中需要打开的应用APK包名。请根据实际包名来修改。
      
      1. JSONObject param = new JSONObject();
        2. param.put("appPkgName", "com.huawei.hms.hmsdemo");//定义需要打开的appPkgName
    
    

**步骤5：**

封装消息点击动作，用于定义通知栏点击行为，param为步骤4封装的点击动作参数
      
      1. JSONObject action = new JSONObject();
        2. action.put("type", 3);//类型3为打开APP，其他行为请参考接口文档设置
        3. action.put("param", param);//消息点击动作参数
    
    

**步骤6：**

封装消息类型，用于定义消息类型，区分是通知栏消息还是透传消息，其中action和body分别是步骤5和步骤3封装的消息。
      
      1. JSONObject msg = new JSONObject();
        2. msg.put("type", 3);//3: 通知栏消息，异步透传消息请根据接口文档设置
        3. msg.put("action", action);//消息点击动作
        4. msg.put("body", body);//通知栏消息body内容示例代码
    
    

**步骤7：**

封装扩展消息，扩展消息中可以设置biTag用于消息打点，也可以携带customize参数用于触发通知栏点击事件的onEvent回调。
      
      1. JSONObject ext = new JSONObject();//扩展信息，含BI消息统计，特定展示风格，消息折叠。
        2. ext.put("biTag", "Trump");//设置消息标签，如果带了这个标签，会在回执中推送给CP用于检测某种类型消息的到达率和状态
        3. JSONObject temp= new JSONObject();
        4. temp.put("season","Spring");
        5. temp.put("weather","raining");
        6. JSONArray customize = new JSONArray();  
        7. customize.add(temp);
        8. ext.put("customize",customize);
    
    

**步骤8：**

封装整个消息体，可自定义实现单击消息后的跳转动作。封装完整的消息体请参考“payload消息体样例”。     
      
      1. JSONObject hps = new JSONObject();//华为PUSH消息总结构体
        2. hps.put("msg", msg);
        3. hps.put("ext", ext);
        4. JSONObject payload = new JSONObject();
        5. payload.put("hps", hps);
    
    

**步骤9：**

定义httpPost()方法，用于消息发送。
      
      1. public static String httpPost(String httpUrl, String data, int connectTimeout, int readTimeout) throws IOException
        2.     {
        3.         OutputStream outPut = null;
        4.         HttpURLConnection urlConnection = null;
        5.         InputStream in = null;
        6.         try
        7.         {
        8.             URL url = new URL(httpUrl);
        9.             urlConnection = (HttpURLConnection)url.openConnection();          
        10.             urlConnection.setRequestMethod("POST");
        11.             urlConnection.setDoOutput(true);
        12.             urlConnection.setDoInput(true);
        13.             urlConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        14.             urlConnection.setConnectTimeout(connectTimeout);
        15.             urlConnection.setReadTimeout(readTimeout);
        16.             urlConnection.connect();
        17.             // POST data
        18.             outPut = urlConnection.getOutputStream();
        19.             outPut.write(data.getBytes("UTF-8"));
        20.             outPut.flush();
        21.             // read response
        22.             if (urlConnection.getResponseCode() < 400)
        23.             {
        24.                 in = urlConnection.getInputStream();
        25.             }
        26.             else
        27.             {
        28.                 in = urlConnection.getErrorStream();
        29.             }
        30.             Listlines = IOUtils.readLines(in, urlConnection.getContentEncoding());
        31.             StringBuffer strBuf = new StringBuffer();
        32.             for (String line : lines)
        33.             {
        34.                 strBuf.append(line);
        35.             }
        36.             System.out.println(strBuf.toString());
        37.             return strBuf.toString();
        38.         }
        39.         finally
        40.         {
        41.             IOUtils.closeQuietly(outPut);
        42.             IOUtils.closeQuietly(in);
        43.             if (urlConnection != null)
        44.             {
        45.                 urlConnection.disconnect();
        46.             }
        47.         }
        48.     }
    
    

**步骤10：**

封装整个http消息并发送    
      
      1. String postBody = MessageFormat.format(
        2.             "access_token={0}&nsp_svc={1}&nsp_ts={2}&device_token_list={3}&payload={4}",
        3.             URLEncoder.encode(accessToken,"UTF-8"),
        4.             URLEncoder.encode("openpush.message.api.send","UTF-8"),
        5.             URLEncoder.encode(String.valueOf(System.currentTimeMillis() / 1000),"UTF-8"),
        6.             URLEncoder.encode(deviceTokens.toString(),"UTF-8"),
        7.             URLEncoder.encode(payload.toString(),"UTF-8"));
        8.         String postUrl = apiUrl + "?nsp_ctx=" + URLEncoder.encode("{\"ver\":\"1\", \"appId\":\"" + appId + "\"}", "UTF-8");
        9.         httpPost(postUrl, postBody, 5000, 5000);    //发送PUSH消息
    
    

Ø 透传消息开发步骤

透传消息相对于通知栏消息的请求参数封装少了很多，开发者只需要完成上面的步骤1、2、3、6、8、9、10

其中步骤3中对于透传消息不需要封装title和content只需要封装自定义的body内容。

封装透传消息的body
      
      1. JSONObject body = new JSONObject();
        2. body.put("key1", "value1");//透传消息自定义body内容
        3. body.put("key2", "value2");//透传消息自定义body内容
        4. body.put("key3", "value3");//透传消息自定义body内容
    
    

# 4\. 通过消息回执实现自定义推送（可选）

本章节介绍如何根据消息回执的状态，来给特定用户发送消息。开发者需先在开发者联盟为应用[开通消息回执](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_huaweipush_devprepare_agent#h1-1575517118190)。开发者还可以申请加入华为Push回执QQ群，便于后续联调功能以及沟通交流问题，QQ群号：224090622。

## 4.1 接口说明

消息回执是华为PUSH服务器提供的对应用服务器消息推送结果的通知。

例如，某开发者开发了一个APP，该APP的安装用户有100个。使用华为PUSH后，在开发者的服务器侧有100个对应PUSH Token，如果这100个用户中的10个用户已经将该APP卸载了，对于开发者是无法感知的，如果开发者还向这10个用户发送消息会存在问题，如图6-2所描述，在回执消息中会将状态为2的消息应答状态回执给开发者。这样开发者就知道这10个用户已经卸载应用了，开发者可以不给这些应用发送消息。

消息回执由华为PUSH服务器发往开发者服务器，开发者需自行实现接口接收华为PUSH服务器发送的回执消息，回执接口详细定义参见[消息回执API](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_huaweipush_api_reference_agent_s3)。

**图6-2  消息回执**

![](https://obs.cn-north-2.myhwclouds.com/hms-ds-wf/b/a82d474350064834a4714230b453c471-2676953674476347933.png) 

 

# 5\. 服务端发送应用角标（可选）

开发者可以在PUSH消息中封装角标参数来发送给客户端展示对应的角标数量。

**说明：**

客户端有展示应用角标的开发步骤，用于实现消息角标展示。请参考 5.2.3.8 

服务端发送PUSH角标需要在PUSH接口的Payload的ext中增加badgeAddNum、badgeClass配置参数，其他参数配置同正常的消息发送接口，消息封装方法参考“应用服务器发送PUSH消息”，接口详细参数定义参见[服务端发送PUSH接口](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_huaweipush_api_reference_agent_s2)。

示例消息样例：
      
      1. {                            
        2.     "hps": {                                         
        3.         "msg" : {                                        
        4.                 "type" : 3,                                        
        5.                 "body" : {                                        
        6.                         "content" : "Push message content", 
        7.                         "title" : "Push message content"                            
        8.                  },                                         
        9.                 "action" : {                                        
        10.                         "type" : 1,                                        
        11.                         "param" : {                                        
        12.                             "intent":"#Intent;compo=com.rvr/.Activity;S.W=U;end"
        13.                         }                                        
        14.                  }                        
        15.         },                                        
        16.        "ext" : {                                        
        17.                  "badgeAddNum" : "1",
        18.                  "badgeClass" : "com.test.badge.MainActivity"
        19.        }                                        
        20.    }
        21. }
    
    

关键参数说明【红色部分为填充参数】

badgeAddNum：角标累加数字非实际显示数字，取值范围1-99

badgeClass：桌面图标对应的应用入口Activity类

**使用限制：**

1.点击启动图标或通知栏系统并不会清理角标数，需应用在端侧通过角标API去清理角标。

2.下一条通知栏消息配置的badgeAddNum数会和之前角标数量进行累加（所以建议badgeAddNum 配置为1）。举例：badgeAddNum配置1，应用之前角标数为2，发送此角标消息后，应用角标数显示为3。

3\. PUSH角标消息支持EMUI 8.0 及以上。

# 6\. 下一步

至此开发者已完成所有客户端和服务端的开发工作，下一步可以通过调用应用服务器的接口测试PUSH消息能否正确的送达客户端。
