---
name: document/cn/HMS-Guides/FIDO2_IntegratingtheFIDO2Client
title: 集成FIDO2客户端
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/FIDO2_IntegratingtheFIDO2Client
source: portal
---

FIDO2提供基于[WebAuthn](https://www.w3.org/TR/webauthn/#webauthn-client)标准的FIDO2客户端实现，这里仅演示对FIDO2客户端相关API的使用，涉及应用服务器及FIDO服务器的相关处理，这里不做介绍，请参考相关标准。

FIDO2分成两个操作，注册和认证，处理流程类似。过程如下：

  1. 创建一个Activity。

  2. 从FIDO服务器获取挑战值及相关策略，并组装请求消息。（这里仅提供FIDO客户端的API，涉及与FIDO服务器的交互，请参考相关规范，并联系FIDO服务器供应商获取相关接口说明。）

  3. 调用Fido2Client.getRegistrationIntent()发起注册。或调用Fido2Client.getAuthenticationIntent()发起认证。

  4. 上一步调用成功后，在回调中调用Fido2Intent.launchFido2Activity()，启动注册（requestCode为Fido2Client.REGISTRATION_REQUEST）或认证（requestCode为Fido2Client.AUTHENTICATION_REQUEST）。该回调在主线程中执行。

  5. 在回调Activity.onActivityResult()中，调用Fido2Client.getFido2RegistrationResponse()或Fido2Client.getFido2AuthenticationResponse()获取注册或认证的结果。

  6. 把注册或认证的结果发送给FIDO服务器进行验证。（这里仅提供FIDO客户端的API，涉及与FIDO服务器的交互，请参考相关规范，并联系FIDO服务器供应商获取相关接口说明。）




注意：

EMUI 4.0（API Level 23）及以上版本才支持FIDO2。

FIDO2 相关API使用方法，如以下代码片段所示：
      
      1. package com.huawei.hms.kit.fidocp;
        2. import android.app.Activity;
        3. import android.app.AlertDialog;
        4. import android.content.Intent;
        5. import android.os.Bundle;
        6. import android.view.View;
        7. import android.widget.TextView;
        8. import androidx.appcompat.app.AppCompatActivity;
        9. import com.huawei.hms.fidocp.R;
        10. import com.huawei.hms.support.api.fido.fido2.Algorithm;
        11. import com.huawei.hms.support.api.fido.fido2.AttestationConveyancePreference;
        12. import com.huawei.hms.support.api.fido.fido2.AuthenticatorSelectionCriteria;
        13. import com.huawei.hms.support.api.fido.fido2.Fido2;
        14. import com.huawei.hms.support.api.fido.fido2.Fido2AuthenticationRequest;
        15. import com.huawei.hms.support.api.fido.fido2.Fido2AuthenticationResponse;
        16. import com.huawei.hms.support.api.fido.fido2.Fido2Client;
        17. import com.huawei.hms.support.api.fido.fido2.Fido2Intent;
        18. import com.huawei.hms.support.api.fido.fido2.Fido2IntentCallback;
        19. import com.huawei.hms.support.api.fido.fido2.Fido2RegistrationRequest;
        20. import com.huawei.hms.support.api.fido.fido2.Fido2RegistrationResponse;
        21. import com.huawei.hms.support.api.fido.fido2.Fido2Response;
        22. import com.huawei.hms.support.api.fido.fido2.NativeFido2AuthenticationOptions;
        23. import com.huawei.hms.support.api.fido.fido2.NativeFido2RegistrationOptions;
        24. import com.huawei.hms.support.api.fido.fido2.PublicKeyCredentialCreationOptions;
        25. import com.huawei.hms.support.api.fido.fido2.PublicKeyCredentialDescriptor;
        26. import com.huawei.hms.support.api.fido.fido2.PublicKeyCredentialParameters;
        27. import com.huawei.hms.support.api.fido.fido2.PublicKeyCredentialRequestOptions;
        28. import com.huawei.hms.support.api.fido.fido2.PublicKeyCredentialRpEntity;
        29. import com.huawei.hms.support.api.fido.fido2.PublicKeyCredentialType;
        30. import com.huawei.hms.support.api.fido.fido2.PublicKeyCredentialUserEntity;
        31. import java.security.SecureRandom;
        32. import java.util.ArrayList;
        33. import java.util.Arrays;
        34. import java.util.List;
        35. import java.util.Locale;
        36. public class Fido2DemoActivity extends AppCompatActivity {
        37.     private TextView reusltView;
        38.     private Fido2Client fido2Client;
        39.     private byte[] regCredentialId = null;
        40.     private String rpId = "com.huawei.hms.fido2.test";
        41.     private String user = "fidoCp";
        42.     @Override
        43.     protected void onCreate(Bundle savedInstanceState) {
        44.         super.onCreate(savedInstanceState);
        45.         setContentView(R.layout.activity_fido2_demo);
        46.         reusltView = findViewById(R.id.reusltView);
        47.         fido2Client = Fido2.getFido2Client(this);
        48.     }
        49.     // 从FIDO服务获取挑战值及相关策略，并组装Fido2RegistrationRequest请求消息。
        50.     private Fido2RegistrationRequest assembleFido2RegistrationRequest() {
        51.         // TODO 从FIDO服务获取挑战值及相关策略。
        52.         byte[] challengeBytes = getChallege();
        53.         // 组装Fido2RegistrationRequest请求消息。
        54.         PublicKeyCredentialCreationOptions.Builder builder = new PublicKeyCredentialCreationOptions.Builder();
        55.         builder.setRp(new PublicKeyCredentialRpEntity(rpId, rpId, null))
        56.             .setUser(new PublicKeyCredentialUserEntity(user, user.getBytes()))
        57.             .setChallenge(challengeBytes)
        58.             .setAttestation(AttestationConveyancePreference.DIRECT)
        59.             .setAuthenticatorSelection(new AuthenticatorSelectionCriteria(null, null, null))
        60.             .setPubKeyCredParams(new ArrayList<PublicKeyCredentialParameters>(
        61.             Arrays.asList(
        62.             new PublicKeyCredentialParameters(PublicKeyCredentialType.PUBLIC_KEY, Algorithm.ES256),
        63.             new PublicKeyCredentialParameters(PublicKeyCredentialType.PUBLIC_KEY, Algorithm.RS256))))
        64.             .setTimeoutSeconds(60L);
        65.         if (regCredentialId != null) {
        66.             builder.setExcludeList(new ArrayList<PublicKeyCredentialDescriptor>(
        67.             Arrays.asList(
        68.             new PublicKeyCredentialDescriptor(PublicKeyCredentialType.PUBLIC_KEY, regCredentialId))));
        69.         }
        70.         return new Fido2RegistrationRequest(builder.build(), null);
        71.     }
        72.     public void btnRegistrationClicked(View view) {
        73.         if (!fido2Client.isSupported()) {
        74.             showMsg("不支持FIDO2。");
        75.             return;
        76.         }
        77.         Fido2RegistrationRequest request = assembleFido2RegistrationRequest();
        78.         // 调用Fido2Client.getRegistrationIntent获取一个Fido2Intent实例，并启动FIDO客户端注册流程。
        79.         fido2Client.getRegistrationIntent(request, NativeFido2RegistrationOptions.DEFAULT_OPTIONS,
        80.             new Fido2IntentCallback() {
        81.                 @Override
        82.                 public void onSuccess(Fido2Intent fido2Intent) {
        83.                     // 通过Fido2Client.REGISTRATION_REQUEST，启动FIDO客户端注册流程。
        84.                     fido2Intent.launchFido2Activity(Fido2DemoActivity.this, Fido2Client.REGISTRATION_REQUEST);
        85.                 }
        86.                 @Override
        87.                 public void onFailure(int errorCode, CharSequence errString) {
        88.                     showError("注册失败。" + errorCode + "=" + errString);
        89.                 }
        90.             });
        91.     }
        92.     // 从FIDO服务获取挑战值及相关策略，并组装Fido2AuthenticationRequest请求消息。
        93.     private Fido2AuthenticationRequest assembleFido2AuthenticationRequest() {
        94.         // TODO 从FIDO服务获取挑战值及相关策略。
        95.         byte[] challengeBytes = getChallege();
        96.         // 组装Fido2RegistrationRequest请求消息。
        97.         List<PublicKeyCredentialDescriptor> allowList = new ArrayList<>();
        98.         allowList.add(new PublicKeyCredentialDescriptor(PublicKeyCredentialType.PUBLIC_KEY, regCredentialId));
        99.         PublicKeyCredentialRequestOptions.Builder builder = new PublicKeyCredentialRequestOptions.Builder();
        100.         builder.setRpId(rpId).setChallenge(challengeBytes).setAllowList(allowList).setTimeoutSeconds(60L);
        101.         return new Fido2AuthenticationRequest(builder.build(), null);
        102.     }
        103.     public void btnAuthenticationClicked(View view) {
        104.         if (regCredentialId == null) {
        105.             showMsg("请先进行注册。");
        106.             return;
        107.         }
        108.         if (!fido2Client.isSupported()) {
        109.             showMsg("不支持FIDO2。");
        110.             return;
        111.         }
        112.         Fido2AuthenticationRequest request = assembleFido2AuthenticationRequest();
        113.         // 调用Fido2Client.getAuthenticationIntent获取一个Fido2Intent实例，并启动FIDO客户端认证流程。
        114.         fido2Client.getAuthenticationIntent(request, NativeFido2AuthenticationOptions.DEFAULT_OPTIONS,
        115.             new Fido2IntentCallback() {
        116.                 @Override
        117.                 public void onSuccess(Fido2Intent fido2Intent) {
        118.                     // 通过Fido2Client.AUTHENTICATION_REQUEST，启动FIDO客户端注册流程。
        119.                     fido2Intent.launchFido2Activity(Fido2DemoActivity.this, Fido2Client.AUTHENTICATION_REQUEST);
        120.                 }
        121.                 @Override
        122.                 public void onFailure(int errorCode, CharSequence errString) {
        123.                     showError("认证失败。" + errorCode + "=" + errString);
        124.                 }
        125.             });
        126.     }
        127.     @Override
        128.     protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        129.         super.onActivityResult(requestCode, resultCode, data);
        130.         if (resultCode != Activity.RESULT_OK) {
        131.             showMsg("未知错误。");
        132.             return;
        133.         }
        134.         switch (requestCode) {
        135.             // Receive registration response
        136.             case Fido2Client.REGISTRATION_REQUEST:
        137.                 Fido2RegistrationResponse fido2RegistrationResponse = fido2Client.getFido2RegistrationResponse(data);
        138.                 if (fido2RegistrationResponse.isSuccess()) {
        139.                     reusltView.append("注册\n");       reusltView.append(fido2RegistrationResponse.getAuthenticatorAttestationResponse().toJson());
        140.                     reusltView.append("\n");
        141.                     // save the credentialId
        142.                     regCredentialId = fido2RegistrationResponse.getAuthenticatorAttestationResponse().getCredentialId();
        143.                     showMsg("注册成功。");
        144.                 } else {
        145.                     showError("注册失败。", fido2RegistrationResponse);
        146.                 }
        147.                 break;
        148.             // Receive authentication response
        149.             case Fido2Client.AUTHENTICATION_REQUEST:
        150.                 Fido2AuthenticationResponse fido2AuthenticationResponse =
        151.                     fido2Client.getFido2AuthenticationResponse(data);
        152.                 if (fido2AuthenticationResponse.isSuccess()) {
        153.                     reusltView.append("认证\n");
        154.                     reusltView.append(fido2AuthenticationResponse.getAuthenticatorAssertionResponse().toJson());
        155.                     reusltView.append("\n");
        156.                     showMsg("认证成功。");
        157.                 } else {
        158.                     showError("认证失败。", fido2AuthenticationResponse);
        159.                 }
        160.         }
        161.     }
        162.     private void showError(String message) {
        163.         AlertDialog.Builder builder = new AlertDialog.Builder(Fido2DemoActivity.this);
        164.         builder.setTitle("错误");
        165.         builder.setMessage(message);
        166.         builder.setPositiveButton("确认", null);
        167.         builder.show();
        168.     }
        169.     private void showError(String message, Fido2Response fido2Response) {
        170.         StringBuilder errMsgBuilder = new StringBuilder();
        171.         errMsgBuilder.append(message)
        172.             .append(fido2Response.getFido2Status())
        173.             .append("=")
        174.             .append(fido2Response.getFido2StatusMessage())
        175.             .append(String.format(Locale.getDefault(), "(Ctap错误：0x%x=%s)", fido2Response.getCtapStatus(),
        176.                 fido2Response.getCtapStatusMessage()));
        177.         showError(errMsgBuilder.toString());
        178.     }
        179.     public void showMsg(String message) {
        180.         AlertDialog.Builder builder = new AlertDialog.Builder(Fido2DemoActivity.this);
        181.         builder.setTitle("提示");
        182.         builder.setMessage(message);
        183.         builder.setPositiveButton("确认", null);
        184.         builder.show();
        185.     }
        186.     public void btnClearLogClicked(View view) {
        187.         reusltView.setText("");
        188.         regCredentialId = null;
        189.     }
        190.     private byte[] getChallege() {
        191.         return SecureRandom.getSeed(16);
        192.     }
        193. }
    
    

说明：

更多Sample信息请参考:[fido2-sample.zip](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyManage/011/111/111/0000000000011111111.20200722100033.42067882728483015659889735484247:50510722041848:2800:60567A62737F30C3F65B38BAED1280E96A79280FB7084A717C8439833A3A611C.zip?needInitFileName=true "fido2-sample.zip")。
