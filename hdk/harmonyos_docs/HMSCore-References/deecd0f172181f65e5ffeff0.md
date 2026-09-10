---
name: document/cn/HMSCore-References/appupdateclient-0000001050123641
title: AppUpdateClient
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/appupdateclient-0000001050123641
---

# AppUpdateClient

|Interface Info|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public interface AppUpdateClient AppUpdateClient类定义了应用升级相关功能的方法，在调用[JosApps.getAppUpdateClient](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/josapps-0000001050123631#section1377613116239)类时会返回该实例。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[checkAppUpdate](#section15712187193218)(Context context, CheckUpdateCallBack callBack) 检测应用新版本。|
|void|[showUpdateDialog](#section1113567144514)(Context context, [ApkUpgradeInfo](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/apkupgradeinfo-0000001050121688) info,boolean mustBtnOne) 弹出应用升级提示框。|
|void|[releaseCallBack](#section16647184024517)() 释放回调。|

#### Public Methods

#### checkAppUpdate

|Method|
|:---------------------------------------------------------------------------------------------------------------|
|public void checkAppUpdate(Context context, CheckUpdateCallBack callBack) 应用启动并完成初始化后，或用户主动检测更新时，应用可以调用此方法查询新版本。|

Parameters  

|Name|Description|
|:-------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|context|应用客户端的Context。|
|callBack|检测版本更新的回调结果。CheckUpdateCallBack定义如下： ``` public interface CheckUpdateCallBack { //从应用市场获取的更新状态信息。 //intent中包含参数见intent表。 void onUpdateInfo(Intent intent); //以下方法预留，无需处理 void onMarketInstallInfo(Intent intent); //以下方法预留，无需处理 void onMarketStoreError(int responseCode); //以下方法预留，无需处理 void onUpdateStoreError(int responseCode); } ```|

intent说明  

|参数名|获取方法|类型|说明|
|:-----------|:---------------------------------------------------------------------------------------------------------------|:-----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|status|intent.getIntExtra(UpdateKey.STATUS, DEFAULT_VALUE) 说明：DEFAULT_VALUE为获取不到UpdateKey.STATUS时自定义的默认值。|int|应用更新的状态信息，取值如下： * 1：常量值PARAMER_ERROR，表示参数错误。 * 2：常量值CONNECT_ERROR，表示网络连接错误。 * 3：常量值NO_UPGRADE_INFO，表示没有升级信息。 * 4：常量值CANCEL，表示用户取消了升级。 * 5：常量值INSTALL_FAILED，表示升级时应用安装失败。 * 6：常量值CHECK_FAILED ，表示查询更新信息失败。 * 7：常量值HAS_UPGRADE_INFO，表示查询到有更新信息。 * 8：常量值MARKET_FORBID ，表示华为应用市场被禁用。 * 9：常量值IN_MARKET_UPDATING，表示应用正在应用市场中更新，只适用于进度条的形式。|
|rtnCode|intent.getIntExtra(UpdateKey.FAIL_CODE, DEFAULT_VALUE) 说明：DEFAULT_VALUE为获取不到UpdateKey.FAIL_CODE时自定义的默认值。|int|更新操作返回的错误码。 * 0：正常 * 1：无网络 * 2：Json异常 * 3：参数异常 * 4：IO异常 * 5：网络异常 * 6：未知异常 * 7：没有排除混淆|
|reason|intent.getStringExtra(UpdateKey.FAIL_REASON)|String|错误码对应的失败描述。|
|isExit|intent.getBooleanExtra(UpdateKey.MUST_UPDATE, false)|boolean|强制更新状态下用户是否取消了更新。 * true：用户取消更新退出应用。 * false：用户点击了更新。|
|buttonStatus|intent.getIntExtra(UpdateKey.BUTTON_STATUS, DEFAULT_VALUE) 说明：DEFAULT_VALUE为获取不到UpdateKey.BUTTON_STATUS时自定义的默认值。|int|非强制更新状态用户点击立即更新还是以后再说。 * 100：以后再说，此时用户可以不立即更新应用或游戏而继续使用。 * 101：立即更新，启动应用或游戏的更新。|
|info|intent.getSerializableExtra(UpdateKey.INFO)|Serializable|检查到更新后应用的更新信息，参见[ApkUpgradeInfo](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/apkupgradeinfo-0000001050121688)。|

Sample Code

```
private static class UpdateCallBack implements CheckUpdateCallBack {
    public void onUpdateInfo(Intent intent) {
        if (intent != null) {
            //更新状态信息
            int status = intent.getIntExtra(UpdateKey.STATUS, -1);
            //返回错误码，建议打印
            int rtnCode = intent.getIntExtra(UpdateKey.FAIL_CODE, -1);
            //失败信息，建议打印
            String reason = intent.getStringExtra(UpdateKey.FAIL_REASON);
            //是否强制更新应用，弹出对话框后按了返回键，整个应用退出
            boolean isExit = intent.getBooleanExtra(UpdateKey.MUST_UPDATE, false);
            //更新弹框点击，点击立即更新还是以后再说
            int buttonStatus = intent.getIntExtra(UpdateKey.BUTTON_STATUS, -1);
            //获取更新信息
            Serializable info = intent.getSerializableExtra(UpdateKey.INFO);
            String updateContent = null;
            if (info instanceof ApkUpgradeInfo) {
                ApkUpgradeInfo upgradeInfo = (ApkUpgradeInfo) info;
                //弹出升级提示框
                client.showUpdateDialog(this, upgradeInfo, false);
                updateContent = upgradeInfo.toString();
                Log.e(TAG, "onUpdateInfo status: " + status + ",failcause: " + rtnCode + ",isExit: "
                        + isExit + ",updateInfo: " + info.toString());
            }
        }
    }
     public void onMarketInstallInfo (Intent intent){
            //预留方法，无需处理
     }
     public void onMarketStoreError ( int responseCode){
            //预留方法，无需处理
     }
     public void onUpdateStoreError ( int responseCode){
            //预留方法，无需处理
     }
}
```

#### showUpdateDialog

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void showUpdateDialog(Context context, [ApkUpgradeInfo](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/apkupgradeinfo-0000001050121688) info,boolean mustBtnOne) 在检测到应用有新版本更新时，应用可以调用此方法手动弹出应用升级提示框。|

Parameters  

|Name|Description|
|:---------|:--------------------------------------------------------------------------------------------------------------------------------|
|context|应用客户端的Context。|
|info|检测到的更新信息，具体参数参见[ApkUpgradeInfo](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/apkupgradeinfo-0000001050121688)。|
|mustBtnOne|强制更新按钮选择。 * true：升级提示框只有升级按钮，无取消按钮，用户只能选择升级。 * false：升级提示框有升级按钮和取消按钮，用户可选择不升级。|

#### releaseCallBack

|Method|
|:-------------------------------------------------------------------------------|
|public void releaseCallBack() 在destroy中调用此方法，释放掉回调，避免内存泄露。如果是静态内部类的方式，这个方法可以不调用。|

