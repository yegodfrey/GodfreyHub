---
name: document/cn/quickApp-Guides/quickapp-applet-access-account-kit-0000001126445971
title: 接入账号服务
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-applet-access-account-kit-0000001126445971
source: portal
---

接入账号服务 简介 华为账号是用户访问华为云业务的凭证，拥有华为账号的用户，可以使用华为云业务，如华为云服务、华为游戏中心、华为应用市场等。 华为账号的开放基于OAuth2.0协议标准，在获得用户授权后，应用可以获取用户在华为账号系统的基本信息，如OpenID、Access Token、用户昵称、头像等。 OpenID：应用使用华为账号登录后，会获得当前登录的华为账号对这个应用开放的唯一标识，这个唯一标识就是OpenID。不同的应用使用相同的华为账号登录获得的OpenID是不同且唯一的。即同一个华为账号，不同应用，OpenID不同。 UnionID与OpenId的区别：使用同一个华为账号登录不同的应用，返回的OpenID值不同，但是UnionID是相同的。所以如果开发者需要在多个应用之间标识用户的唯一性，可以使用UnionID。 接入华为账号后即可获取OpenID，但是获取UnionID需要在申请账号服务时，勾选“启用UnionId”。 准入条件 接入华为账号服务前，需要完成如下准备工作：
    * 在华为开发者联盟上注册成为开发者，并完成实名认证，详细参见“[账号注册认证](https://developer.huawei.com/consumer/cn/doc/start/registration-and-verification-0000001053628148)”。
    * 在AppGallery Connect上完成快应用的创建，详细参见“[创建快应用](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-create-quickapp-0000001079835824)”。
    * 在AppGallery Connect上已[开通账号服务](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-enable-account-kit-0000001126786239)。
    * 华为账号服务是华为扩展接口，而非厂商联盟规范，请[安装华为快应用IDE](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-installtool-0000001126543467)进行接入。
    * 完成申请账号MCP权限。
接入指引 [h2]申请账号MCP权限 请通过[在线工单系统](https://developer.huawei.com/consumer/cn/support/feedback/#/add/13?level2=84)提交申请信息：
    * 是否包含终端用户数据：选择“不存在”。
    * 概述：填写“申请华为账号服务MCP权限”。
    * 问题描述：提供父应用的包名和快应用的APP ID、包名。 
      * 父应用的包名：固定填写“com.huawei.fastapp.dev和com.huawei.fastapp”
      * 快应用APP ID和包名：按实际情况反馈。
提交工单后，华为方将进行处理，请关注工单的处理进度。 [h2]简化模式
    1. 在快应用中调用 [qa.getAccountProvider](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwaccount-0000001126233125#section14951026165015) 接口判断当前设备是否支持华为账号服务。 调用接口返回 huawei 表示支持，否则表示不支持。后续功能开发和接口调用必须在设备支持账号服务的前提进行。
    2. 在快应用中调用 [qa.accountAuthorize](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwaccount-0000001126233125#section68221371135) 接口直接获取accessToken。 
       * type：设置为token。
       * scope：设置为scope.baseProfile。
    3. 通过 [qa.getAccountProfile](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwaccount-0000001126233125#section17781229201115) 获取用户基本信息，主要包括OpenID 和用户昵称、头像等。
[h2]授权码模式
    1. 在快应用中调用 [qa.getAccountProvider](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwaccount-0000001126233125#section14951026165015) 接口判断当前设备是否支持华为账号服务。 调用接口返回 huawei 表示支持，否则表示不支持。后续功能开发和接口调用必须在设备支持账号服务的前提进行。
    2. 判断是否需要重新获取Authorization Code。 
       1. 未获取过Authorization Code，则执行 步骤3。
       2. 获取过Authorization Code，由于Authorization Code存在有效期，所以使用Authorization Code前，调用 [qa.checkAccountUserSession](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwaccount-0000001126233125#section204734715218) 校验有效性，有效则执行 步骤4，无效则执行 步骤3。
    3. 在快应用中调用 [qa.accountAuthorize](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwaccount-0000001126233125#section68221371135) 接口直接获取accessToken。 
       * type：设置为code。
       * scope：如果获取用户基本信息，设置为“scope.baseProfile”。  ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e3/v3/KC_R_AOPTuOE8IMQoJvkng/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T053326Z&HW-CC-Expire=86400&HW-CC-Sign=AB97B212E5E44FC4F0D1F4CD3D503E95E604E2979BCDDB7CA8AF7E7C6D159C8D) 每一个Authorization Code的有效期为5分钟，并且只能使用一次，再次使用将无效。
    4. 快应用客户端将获取的Code存储到开发者的服务端，然后在服务端调用Code获取Access Token接口去获取Access Token，最后服务端将获取的Access Token返回给快应用客户端。 获取Access Token方式：应用在其服务端发送请求（必须使用POST方式）到华为OAuth2.0授权服务的“https://oauth-login.cloud.huawei.com/oauth2/v3/token”地址上，并在请求的body体中带上以下5个必选参数： ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/f7/v3/LW3kKJUoRC-5B-EQ1OYArw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T053326Z&HW-CC-Expire=86400&HW-CC-Sign=78578FB492167938C4667F6C28426914B9981C6B333DF208E2295D51F46BC260) 传入参数值需要先进行URLEncode编码处理。
       * grant_type：必选参数，此值固定为“authorization_code”。
       * code：必选参数，获取的Authorization Code。
       * client_id：必须参数，在华为开发者联盟创建应用后获取的APP ID。
       * client_secret：必选参数，在华为开发者联盟创建应用后获取的APP SECRET。
       * redirect_uri：必选参数，此值固定为“hms://redirect_url”。
    
    POST /oauth2/v3/token HTTP/1.1
    Host: login.cloud.huawei.com
    Content-Type: application/x-www-form-urlencoded
    grant_type=authorization_code&code=Etersdfasgh74ddga%3d&client_id=12345&client_secret=0rDdfgyhytRtznPQSzr5pVw2&redirect_uri=hms%3A%2F%2Fredirect_url

若参数无误，服务器将返回一段JSON文本，主要包含以下参数：
       * access_token：需要获取的Access Token（如果包含\，必须去除所有的\）。
       * expires_in：Access Token的有效期，以秒为单位。
       * refresh_token：用于刷新Access Token的Refresh Token，所有应用都会返回该参数。
       * scope：Access Token最终的访问范围，即用户实际授予的权限列表。
       * token_type：此值固定为“Bearer”。
示例代码如下：
    
    HTTP/1.1 200 OK
    Content-Type: application/json
    Cache-Control: no-store
    {
        "access_token": "CgB6e3x9vWbH14lMF16ofo80roi4YDHytsOl17fgjoI/67eOQgre7UfkniaWMPuK3j0Uvx369OhtdPR57HHE28dplowhhweNYg6p2V+9SWYv",
        "expires_in": 3600,
        "refresh_token": "CgB6e3x9wUMdDbx9a8Q7p6ZqaqmaN5ouXqn3mb1Txa5twbmi7NBS4hwiXYNaYeJ5DktHCrxNVx7kiRsJ51sOhDtywbVowbjEjaskmPc39FS2",
        "scope": "openid profile",
        "token_type": "Bearer"
    }

若请求错误，服务器将返回一段JSON文本，包含以下参数：
       * error：错误码。
       * error_description：错误描述信息。
示例代码如下：
    
    HTTP/1.1 400 Bad Request
    Content-Type: application/json
    Cache-Control: no-store
    {
      "error": "1102",
      "error_description": "A required parameter is missing in the request."
    }

Access Token有效期默认为3600秒，当Access Token过期后，需要使用Refresh Token去获取新的AccessToken。Refresh Token获取AccessToken请参见 步骤5。
    5. 若步骤4获取的Access Token过期失效，则可以调用服务端接口通过Refresh Token重新获取Access Token，然后服务端再将重新获取的Access Token返回给快应用客户端。 RefreshToken的有效期为半年。如果Refresh Token失效，则执行步骤3重新进行授权登录流程。 使用Refresh Token刷新获得新的Access Token，需要应用在其服务端发送请求（使用POST方式）到华为OAuth2.0授权服务的“https://oauth-login.cloud.huawei.com/oauth2/v3/token”地址上，并带上以下参数：
       * grant_type：必选参数，固定为“refresh_token”。
       * refresh_token：必选参数，用于刷新Access Token用的Refresh Token。
       * client_id：必选参数，在华为开发者联盟创建应用后获取的APP ID。
       * client_secret：必选参数，在华为开发者联盟创建应用后获取的APP SECRET。
![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ba/v3/53EEf06jSRKQ5E24DrqXOA/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T053326Z&HW-CC-Expire=86400&HW-CC-Sign=85A52AAFEF2F85DCAE36821667D5847DFEEA317B4E903BE211FD10683EE030FB) 传入参数值需要先进行URLEncode编码处理。 示例代码如下：
    
    POST /oauth2/v3/token HTTP/1.1
    Host: login.cloud.huawei.com
    Content-Type: application/x-www-form-urlencoded
    grant_type=refresh_token&client_id=12345&client_secret=bKaZ0VE3EYrXaXCdCe3d2k9few&refresh_token=2O9BSX675FGAJYK92KKGG

若参数无误，服务器将返回一段JSON文本，主要包含以下参数：
       * access_token：要获取的Access Token（如果包含\，必须去除所有的\）。
       * expires_in：Access Token的有效期，以秒为单位。
       * refresh_token：用于刷新Access Token的Refresh Token，并不是所有应用都会返回该参数（有效期为6个月）。
       * scope：用户实际授予的权限列表。
       * token_type：此值固定为“Bearer”。
示例代码如下：
    
    HTTP/1.1 200 OK
    Content-Type: application/json
    Cache-Control: no-store
    {
        "access_token": "CgB6e3x996fDubcAuHR09aL9AIpjHwogVLyQZmjjW+Qk77yf0sbwbowovPmusqd51u3ythe99sPIruol+L7V4pKK9T+3cqMJutpGt2PLwpnO",
        "expires_in": 3600,
        "refresh_token": "CgB6e3x9wUMdDbx9a8Q7p6ZqaqmaN5ouXqn3mb1Txa5twbmi7NBS4hwiXYNaYeJ5DktHCrxNVx7kiRsJ51sOhDtywbVowbjEjaskmPc39FS2",
        "scope": "openid profile",
        "token_type": "Bearer"
    }

若请求错误，服务器将返回一段JSON文本，包含以下参数：
       * error：错误码。
       * error_description：错误描述信息。
    
    HTTP/1.1 400 Bad Request
    Content-Type: application/json
    Cache-Control: no-store 
    {
    "error": "1102",
    "error_description": "A required parameter is missing in the request."
    }

    6. 通过Access Token调用 [qa.getAccountProfile](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwaccount-0000001126233125#section17781229201115) 接口获取华为账号用户信息。包括OpenId 和用户昵称、头像。
调试账号服务 华为快应用IDE的菜单选择“构建 > 构建快应用”进行调试。如果调试过程中出现异常，请参考如下操作进行定位。
    1. 检查是否已在“华为开发者联盟”申请华为账号服务。
    2. 调用account.getProvider，请确保获取返回值为huawei后，再调用其他接口。
    3. 参考如下常见错误码处理建议修改问题。  错误码 |  描述 |  处理建议  
---|---|---  
200 |  通用错误，一般是网关请求网络异常导致，具体错误描述可以在message中查看。 |  出现403网络异常错误码时，建议尝试切换网络，或者检查是否有传入scope。  
201 |  用户拒绝授权。 |  -  
202 |  接口传入参数错误。 |  请对传入参数进行检查。  
1002 |  签名校验失败。 | 
       * 检查在AppGallery Connect上配置的证书指纹是否与华为快应用IDE生成的签名信息一致。
       * 检查调试的rpk包是否为正式构建的版本，使用的签名是否与在AppGallery Connect上配置的证书指纹一致。  
2009 |  请求华为账号服务器失败。 |  联系快应用技术支持进行权限配置。  
其他 |  请参考华为账号“[通用错误码](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/account-apk-cn-common-error-codes-0000001050048616)”中的错误码进行处理。  
Demo ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ea/v3/OMWBZKd5Sqqy_zyUFnSEow/zh-cn_image_0000001180991704.png?HW-CC-KV=V1&HW-CC-Date=20261005T053326Z&HW-CC-Expire=86400&HW-CC-Sign=637BB0CB0C4BA3D30009209581C7C780C437D513AEB4393CB2BAC11469A50BC4) [查看视频教程](https://developer.huawei.com/consumer/cn/training/detail/C101637306423959107) **index.qxml文件****：**
    
    <view class="container">
    	<template is="head" data="{{title: 'action-sheet'}}" />
    	<view class="page-body">
    		<view class="btn-area">
    			<button type="default" bindtap="getAccountProvider">获取账号服务提供商</button>
    		</view>
    		<view class="btn-area">
    			<button type="default" bindtap="useAuthor">授权码模式登录账号</button>
    		</view>
    		<view class="btn-area">
    			<button type="default" bindtap="CodeToAT">Code获取AccessToken</button>
    		</view>
    		<view class="btn-area">
    			<button type="default" bindtap="getAccountProfile">获取账号信息</button>
    		</view>
    
    		<view class="btn-area">
    			<button type="default" bindtap="checkUserSession">checkUserSession</button>
    		</view>
    		<view class="btn-area">
    			<button type="default" bindtap="isAccountLogin">获取账号登录状态</button>
    		</view>
    	</view>
    	<template is="foot" />
    </view>

**index.js文件****：**
    
    Page({
      onShareAppMessage() {
        return {
          title: '账号授权',
          path: 'page/API/pages/account/account'
        }
      },
      data: {
        code: '',
        attoken: '',
      },
    
      //获取账号服务提供商
      getAccountProvider: function () {
        console.log("getAccountProvider: " + qa.getAccountProvider());
        qa.showToast({
          message: `${qa.getAccountProvider()}`
        })
      },
    
      //授权码模式登录账号
      useAuthor: function () {
        var that = this;
        qa.accountAuthorize({
          appid: "101315751",// "101315751",  
          type: "code",
          scope: "scope.baseProfile",
          state: 5,
          redirectUri: "https://www.example.com/",
          success: function (ret) {
            that.data.code = ret.code;
            that.data.attoken = ret.accessToken;
            console.log("授权结果：" + JSON.stringify(ret));
            qa.showToast({
              title: JSON.stringify(ret),
              icon: 'none',
              mask: true,
              duration: 3000
            })
          },
          fail: function (erromsg, errocode) {
            console.log('authorize fail --- ' + errocode + ':' + erromsg);
          }
        })
      },
    
      //Code获取AccessToken
      CodeToAT: function () {
        var that = this;
        console.log("code: " + that.data.code);
        qa.request({
          url: "https://oauth-login.cloud.huawei.com/oauth2/v3/token",
          data: {
            "grant_type": "authorization_code",
            "code": that.data.code,
            "client_id": "101315751",
            "client_secret": "c89303c08af19ce942d6c6b2262dfed9d205047723237887bf3e703fbba99529",// "c89303c08af19ce942d6c6b2262dfed9d205047723237887bf3e703fbba99529"--101315751, // "d3a045f83d2c1af9c5112388077899c76970508fa05e0bedd595e5fb129171bc"--101373095,
            "redirect_uri": "hms://redirect_url"
          },
          header: {
            'content-type': 'application/text'
          },
          responseType: 'json',
          method: "POST",
          success: function (ret) {
            console.log("获取数据：" + JSON.stringify(ret));
            that.data.attoken = ret.data.access_token;
            qa.showToast({
              title: JSON.stringify(ret),
              icon: 'none',
              mask: true,
              duration: 3000
            })
          },
          fail: function (msg, code) {
            console.log(msg, code);
          },
          complete: function () {
            console.log("complete");
          }
        })
      },
    
      //获取账号信息
      getAccountProfile: function () {
        var that = this;
        qa.getAccountProfile({
          appid: "101315751",
          token: that.data.attoken,
          success: function (ret) {
            console.log('getprofile --- ' + JSON.stringify(ret));
            qa.showToast({
              title: 'getprofile ' + JSON.stringify(ret),
              icon: 'none',
              mask: true,
              duration: 3000
            })
          },
          fail: function (erromsg, errocode) {
            console.log('getprofile fail --- ' + errocode + ':' + erromsg);
          }
        })
      },
    
      //校验当前会话是否有效
      checkUserSession: function () {
        qa.checkAccountUserSession({
          success: function (data2) {
            console.log('handling success profile: ' + JSON.stringify(data2));
            qa.showToast({
              title: 'checkUserSession success: ' + JSON.stringify(data2),
              icon: 'none',
              mask: true,
              duration: 3000
            })
          },
          fail: function (data, code) {
            console.log('handling fail, code =' + code + data);
          },
          complete: function () {
            console.log('complete');
          }
        });
      },
    
      //获取账号登录状态
      isAccountLogin: function () {
        qa.isAccountLogin({
          success(res) {
            console.log("isAccountLogin: ", res.isLogin)
            qa.showToast({
              message: "登录状态:" + res.isLogin
            })
          },
          fail(res) {
            console.log("authorize: fail", res)
          },
        })
      },
    })
