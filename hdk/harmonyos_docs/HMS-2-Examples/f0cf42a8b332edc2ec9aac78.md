---
name: document/cn/HMS-2-Examples/hmssdk_huaweiid_sample_code_c
title: 帐号服务示例代码（废弃）
uri: https://developer.huawei.com/consumer/cn/doc/HMS-2-Examples/hmssdk_huaweiid_sample_code_c
source: portal
---

# 1.客户端示例代码

帐号服务客户端端示例工程代码  [下载](https://appfile1.hicloud.com/FileServer/getFile/app/000/001/111/0000000000000001111.20191219224342.43947562694152327415968395900308:20471231000000:0001:05B85519260EBBFAFD13F6CFE255968C1371D7278153198D1920627ACF0F036B.zip?needInitFileName=true)

压缩包里面包含了一个AndroidStudio工程，此工程包含了多个HMS服务的SDK使用例子。  
帐号服务的客户端使用示例请参考：  


HwIDActivity.java
      
      1. package com.huawei.hmsagent;
        2. import android.graphics.Color;
        3. import android.os.Bundle;
        4. import android.view.View;
        5. import com.huawei.android.hms.agent.HMSAgent;
        6. import com.huawei.android.hms.agent.hwid.handler.SignInHandler;
        7. import com.huawei.android.hms.agent.hwid.handler.SignOutHandler;
        8. import com.huawei.hms.support.api.hwid.SignInHUAWEIId;
        9. import com.huawei.hms.support.api.hwid.SignOutResult;
        10. public class HwIDActivity extends AgentBaseActivity {
        11.     @Override
        12.     protected void onCreate(Bundle savedInstanceState) {
        13.         super.onCreate(savedInstanceState);
        14.         setContentView(R.layout.activity_hwid);
        15.         setTabBtnClickListener();
        16.         findViewById(R.id.btn_id).setBackgroundColor(Color.WHITE);
        17.         findViewById(R.id.btn_signin).setOnClickListener(this);
        18.         findViewById(R.id.btn_forcesignin).setOnClickListener(this);
        19.         findViewById(R.id.btn_signout).setOnClickListener(this);
        20.     }
        21.     /**
        22.      * 登录授权 | Login Authorization
        23.      *
        24.      * @param forceLogin 如果已经授权登录则直接回调结果，否则：forceLogin为true时会拉起界面，为false时直接回调错误码 | If the login is authorized, the result is directly callback, otherwise: When Forcelogin is true, the activity is pulled and the error code is directly invoked when false
        25.      */
        26.     private void signIn(boolean forceLogin) {
        27.         HMSAgent.Hwid.signIn(forceLogin, new SignInHandler() {
        28.             @Override
        29.             public void onResult(int rtnCode, SignInHUAWEIId signInResult) {
        30.                 if (rtnCode == HMSAgent.AgentResultCode.HMSAGENT_SUCCESS && signInResult != null) {
        31.                     //可以获取帐号的 openid，昵称，头像 at信息 | You can get the OpenID, nickname, Avatar, at etc information of HUAWEI Account
        32.                     showLog("signIn successful=========");
        33.                     showLog("Nickname:" + signInResult.getDisplayName());
        34.                     showLog("openid:" + signInResult.getOpenId());
        35.                     showLog("accessToken:" + signInResult.getAccessToken());
        36.                     showLog("Head pic URL:" + signInResult.getPhotoUrl());
        37.                 } else {
        38.                     showLog("signIn---error: " + rtnCode);
        39.                 }
        40.             }
        41.         });
        42.     }
        43.     /**
        44.      * 退出。此接口调用后，下次再调用signIn会拉起界面，请谨慎调用。如果不确定就不要调用了。 | Exit。 After this method is called, the next time you call signIn will pull the activity, please call carefully. Do not call if you are unsure.
        45.      */
        46.     private void signOut() {
        47.         HMSAgent.Hwid.signOut(new SignOutHandler() {
        48.             @Override
        49.             public void onResult(int rtnCode, SignOutResult signOutResult) {
        50.                 if (rtnCode == HMSAgent.AgentResultCode.HMSAGENT_SUCCESS && signOutResult != null) {
        51.                     showLog("SignOut successful");
        52.                 } else {
        53.                     showLog("SignOut fail:" + rtnCode);
        54.                 }
        55.             }
        56.         });
        57.     }
        58.     /**
        59.      * Called when a view has been clicked.
        60.      *
        61.      * @param v The view that was clicked.
        62.      */
        63.     @Override
        64.     public void onClick(View v) {
        65.         int id = v.getId();
        66.         if (id == R.id.btn_id) {
        67.             // 本页面切换到本页面的按钮事件不处理 | "This page switches to itself" button event does not need to be handled
        68.             return;
        69.         } else if (!onTabBtnClickListener(id)) {
        70.             // 如果不是tab切换按钮则处理业务按钮事件 | Handle Business button events without the TAB toggle button
        71.             switch (id) {
        72.                 case R.id.btn_signin:
        73.                     signIn(false);
        74.                     break;
        75.                 case R.id.btn_forcesignin:
        76.                     signIn(true);
        77.                     break;
        78.                 case R.id.btn_signout:
        79.                     signOut();
        80.                     break;
        81.                 default:
        82.             }
        83.         }
        84.     }
        85. }
    
    
