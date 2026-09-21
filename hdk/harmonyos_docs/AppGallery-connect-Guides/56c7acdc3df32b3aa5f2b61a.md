---
name: document/cn/AppGallery-connect-Guides/agc-dynamicability-linstenstatus-0000001058092539
title: 监听动态加载状态
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-dynamicability-linstenstatus-0000001058092539
---

# 监听动态加载状态

动态特性开始安装后，为[FeatureInstallManager](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallmanager-0000001057944555)注册监听器，监听动态安装过程中的不同状态，例如用户是否同意协议、用户是否同意下载、下载进度、安装是否成功等。动态加载过程中有效的状态码可参见[FeatureInstallSessionStatus](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallsessionstatus-0000001058092553)。

## 用户授权协议提示

用户使用Dynamic Ability功能时需要同意华为应用市场的相关协议，动态特性下载前需要判断用户是否"同意协议"，您可以调用[FeatureInstallManager.registerInstallListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallmanager-0000001057944555#section62741512101)通过注册监听器[InstallStateListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/installstatelistener-0000001059050276)的方式，监测用户当前是否已经同意协议。

若用户尚未同意，则返回状态码8（[FeatureInstallSessionStatus.REQUIRES_USER_CONFIRMATION](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallsessionstatus-0000001058092553#ZH-CN_TOPIC_0000001059077692__p5321378)）。此时可以调用[FeatureInstallManager.triggerUserConfirm](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallmanager-0000001057944555#section379301617139)方法，弹出提示框，征求用户同意。

* 若用户同意，继续执行。
* 若用户拒绝协议，安装过程会终止。

```screen
mFeatureInstallManager.registerInstallListener(new InstallStateListener() {
    @Override
    public void onStateUpdate(InstallState state) {
        if (state.status() == FeatureInstallSessionStatus.REQUIRES_USER_CONFIRMATION) {
            try {
                // 需要指定activity
                boolean result = mFeatureInstallManager.triggerUserConfirm(state, activity, 1);
            } catch (IntentSender.SendIntentException e) {
                e.printStackTrace();
            }
        }
    }
});
```

## 用户同意下载提示

在正式开始下载安装前，会判断用户是否使用了移动网络。若正在使用移动网络，会触发流量消耗提醒，此时便需要用户手动确认"同意下载"。

因此，您可以调用[FeatureInstallManager.registerInstallListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallmanager-0000001057944555#section62741512101)注册监听器[InstallStateListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/installstatelistener-0000001059050276)。当监听到状态码10（[FeatureInstallSessionStatus.REQUIRES_PERSON_AGREEMENT](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallsessionstatus-0000001058092553#ZH-CN_TOPIC_0000001059077692__p17622742)），您可以调用[FeatureInstallManager.triggerUserConfirm](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallmanager-0000001057944555#section379301617139)方法，弹出提示框，征求用户同意。

* 若用户同意下载，则开始执行下载操作。
* 若用户拒绝下载，则下载任务终止。

```screen
mFeatureInstallManager.registerInstallListener(new FeatureInstallStateUpdatedListener() {
    @Override
    public void onStateUpdate(InstallState state) {
        if (state.status() == FeatureInstallSessionStatus.REQUIRES_PERSON_AGREEMENT) {
            try {
                // 需要指定activity
                boolean result = mFeatureInstallManager.triggerUserConfirm(state,
                        activity, myRequestCode);
            } catch (IntentSender.SendIntentException e) {
                e.printStackTrace();
            }
            return;
        }
    }
});
```

## 获取下载进度

可以调用[FeatureInstallManager.registerInstallListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallmanager-0000001057944555#section62741512101)注册监听器[InstallStateListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/installstatelistener-0000001059050276)，监测动态特性的下载进度。

```screen
mFeatureInstallManager.registerInstallListener(new InstallStateListener() {
    @Override
    public void onStateUpdate(InstallState state) {
        if (state.status() == FeatureInstallSessionStatus.DOWNLOADING) {
            int process = (int) (
                    ((state.bytesDownloaded() + 0.0) / state.totalBytesToDownload()) * 100);
            Log.d(TAG, "installed in Downloading :"+process);
        }
    }
});
```

## 监听器的注册和解注册

前面内容介绍了如何创建监听器，并且监听多种状态。对于创建的监听器需要注册到[FeatureInstallManager](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallmanager-0000001057944555)实例中，同时也需要在合适的时间进行解注册。

因此，建议您结合Activity的生命周期进行动态的注册（[FeatureInstallManager.registerInstallListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallmanager-0000001057944555#section62741512101)）和解注册（[FeatureInstallManager.unregisterInstallListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallmanager-0000001057944555#section145131851101017)）的动作。

```screen
@Override
protected void onResume() {
    super.onResume();
    if (mFeatureInstallManager != null) {
        mFeatureInstallManager.registerInstallListener(installStateListener);
    }
}
@Override
protected void onPause() {
    super.onPause();
    if (mFeatureInstallManager != null) {
        mFeatureInstallManager.unregisterInstallListener(installStateListener);
    }
}
```

## 监听器使用建议

FeatureInstallManager注册的监听器[InstallStateListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/installstatelistener-0000001059050276)中会返回[InstallState](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/installstate-0000001057642241)对象。该对象会根据实际的运行情况，包含当前不同的状态。因此，在实际开发中，开发者只需要注册监听器，然后在监听器中根据InstallState的值进行判断，再做出合适的动作。这样就无需注册多个监听器，减少冗余的代码。例如：
> 说明
>
> 开发者根据InstallState对象中包含的sessionId，确认该InstallState对象包含的状态归属于当前动态加载请求Task。

```screen
mFeatureInstallManager.registerInstallListener(new InstallStateListener() {
    @Override
    public void onStateUpdate(InstallState state) {
        if (state == null) {
            Log.e(TAG, "onStateUpdate: state is null");
            return;
        }
        Log.d(TAG, "onStateUpdate, state: " + state.toString() + ", session id: " + state.sessionId());
        if (state.sessionId() != sessionId) {
            Log.e(TAG, "onStateUpdate: session id is illegal");
            return;
        }

        if (state.status() == FeatureInstallSessionStatus.UNKNOWN) {
            Log.e(TAG,"installed in unknown status");
            return;
        }
        if (state.status() == FeatureInstallSessionStatus.INSTALLED) {
            Log.i(TAG,"installed success ,can use new feature");
            return;
        }
        if (state.status() == FeatureInstallSessionStatus.FAILED) {
            Log.e(TAG,"installed failed, errorcode: " + state.errorCode());
            return;
        }
        ... ...
    }
});
```

