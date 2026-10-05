---
name: document/cn/HMS-Guides/FIDO2_IntegratingtheBioAuthnSDK
title: 集成本地生物认证（集成BioAuthn SDK）
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/FIDO2_IntegratingtheBioAuthnSDK
source: portal
---

# **1.指纹认证**

华为提供安全的指纹认证能力。如果系统安全存在问题，回调函数[BioAuthnCallback](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/BioAuthn_BioAuthnCallback).onAuthError()，会提供错误码[FingerprintManager](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/BioAuthn_FingerprintManager).ERROR_SYS_INTEGRITY_FAILED。如果设备运行环境安全，则执行指纹认证。指纹认证的错误码详情，请参考接口文档。

说明：

EMUI 4（API Level 23）及以上版本才支持指纹认证，另外请确保设备硬件支持指纹认证。

华为指纹认证能力使用方法，如以下代码片段所示：  

      
      1. import android.app.Activity;
        2. import android.view.View;
        3. import com.huawei.hms.support.api.fido.bioauthn.BioAuthnCallback;
        4. import com.huawei.hms.support.api.fido.bioauthn.BioAuthnResult;
        5. import com.huawei.hms.support.api.fido.bioauthn.FingerprintManager;
        6. import java.util.concurrent.Executors;
        7. public class MainActivity extends Activity {
        8.     public void btnFingerAuthenticateWithoutCryptoObjectClicked(View view) {
        9.         // 回调
        10.         BioAuthnCallback bioAuthnCallback = new BioAuthnCallback() {
        11.             @Override
        12.             public void onAuthError(int errMsgId, CharSequence errString) {
        13.                 // 认证错误
        14.             }
        15.             @Override
        16.             public void onAuthSucceeded(BioAuthnResult result) {
        17.                 // 认证成功
        18.             }
        19.             @Override
        20.             public void onAuthFailed() {
        21.                 // 认证失败
        22.             }
        23.         };
        24.         FingerprintManager fingerprintManager =
        25.             new FingerprintManager(this, Executors.newSingleThreadExecutor(), bioAuthnCallback);
        26.         // 是否支持认证
        27.         int errorCode = fingerprintManager.canAuth();
        28.         if (errorCode != 0) {
        29.             // 不支持认证
        30.             return;
        31.         }
        32.         // 执行认证
        33.         fingerprintManager.auth();
        34.     }
        35. }
    
    

# **2\. 3D面容认证**

华为提供安全的3D面容认证能力。如果系统安全存在问题，回调函数[BioAuthnCallback](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/BioAuthn_BioAuthnCallback).onAuthError，会提供错误码[FaceManager](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/BioAuthn_FaceManager).FACE_ERROR_SYS_INTEGRITY_FAILED。如果设备运行环境安全，则执行3D面容认证。3D面容认证的错误码详情，参考[接口文档](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/BioAuthn_Packagecomhuaweihmssupportapifidobioauthn)。

说明：

1\. EMUI 10（API Level 29）以上版本才支持面容认证，另外请确保设备硬件支持3D面容认证。

2\. 使用CryptoObject对象认证时，使用KeyGenParameterSpec.Builder创建key时setUserAuthenticationRequired()必须为false。当前版本中，KeyStore没有与面容认证结果关联。

华为3D面容认证能力使用方法，如以下代码片段所示：  

      
      1. import android.app.Activity;
        2. import android.os.CancellationSignal;
        3. import android.os.Handler;
        4. import android.view.View;
        5. import com.huawei.hms.support.api.fido.bioauthn.BioAuthnCallback;
        6. import com.huawei.hms.support.api.fido.bioauthn.BioAuthnResult;
        7. import com.huawei.hms.support.api.fido.bioauthn.CryptoObject;
        8. import com.huawei.hms.support.api.fido.bioauthn.FaceManager;
        9. public class MainActivity extends Activity {
        10.     public void btnFaceAuthenticateWithoutCryptoObjectClicked(View view) {
        11.         // 回调
        12.         BioAuthnCallback callback = new BioAuthnCallback() {
        13.             @Override
        14.             public void onAuthError(int errMsgId, CharSequence errString) {
        15.                 // 认证错误
        16.             }
        17.             @Override
        18.             public void onAuthHelp(int helpMsgId, CharSequence helpString) {
        19.                 // 帮助
        20.             }
        21.             @Override
        22.             public void onAuthSucceeded(BioAuthnResult result) {
        23.                 // 认证成功
        24.             }
        25.             @Override
        26.             public void onAuthFailed() {
        27.                 // 认证失败
        28.             }
        29.         };
        30.         // 取消信号
        31.         CancellationSignal cancellationSignal = new CancellationSignal();
        32.         FaceManager faceManager = new FaceManager(this);
        33.         int errorCode = faceManager.canAuth();
        34.         if (errorCode != 0) {
        35.             // 不支持认证
        36.             return;
        37.         }
        38.         // Flags.
        39.         int flags = 0;
        40.         // 认证消息处理器
        41.         Handler handler = null;
        42.         // 推荐CryptoObject传null，当前版本，KeyStore没有和面容识别关联。
        43.         // KeyGenParameterSpec.Builder.setUserAuthenticationRequired()必须设置为false。
        44.         CryptoObject crypto = null;
        45.         faceManager.auth(crypto, cancellationSignal, flags, callback, handler);
        46.     }
        47. }
    
    

说明：

更多Sample信息请参考: [fido-bioauthn-sample.zip](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyManage/011/111/111/0000000000011111111.20200722100453.71741423593062184913710116267636:50510722041848:2800:B20D0F9BC44FD4F0507566309576D071DE7585EA5A936DB3CEE3DDA262591314.zip?needInitFileName=true "fido-bioauthn-sample.zip")。
