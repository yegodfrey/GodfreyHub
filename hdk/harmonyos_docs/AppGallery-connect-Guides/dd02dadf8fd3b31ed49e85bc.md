---
name: document/cn/AppGallery-connect-Guides/agc-dynamicability-initfeature-0000001057492589
title: 请求安装特性
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-dynamicability-initfeature-0000001057492589
---

# 请求安装特性

初始化Dynamic Ability SDK之后，您可以根据业务需求，调用Dynamic Ability SDK的API向华为应用市场请求安装动态特性模块，实现按需加载的功能。  
![](https://media:101782971762873145)  
自1.0.20.300版本开始，对使用SDK下载安装的特性包，在安装过程中新增如下限制：

* so文件路径不能包含特殊字符：".."，"."，"null"（空字符串），"../"，"..\\"，"./"。
* so文件数量不超过500个。
* 单个so文件大小不超过100MB。  

#### 前提条件

您已在您配置的Application 和动态特性模块的Activity中[初始化SDK](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-dynamicability-initsdk-0000001058890660#section13627171016481)。  

#### 实例化FeatureInstallManager

调用[FeatureInstallManagerFactory.create](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallmanagerfactory-0000001057642235#section129211014744)方法实例化[FeatureInstallManager](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallmanager-0000001057944555)对象，统一管理动态加载的整个过程。

```
FeatureInstallManager mFeatureInstallManager;
mFeatureInstallManager = FeatureInstallManagerFactory.create(this);
```

#### 构造请求FeatureInstallRequest

构造请求[FeatureInstallRequest](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallrequest-0000001057642233)，明确指定动态加载的相关模块。

通过FeatureInstallRequest类可以构造一个动态加载的请求。在该请求中，可以指定一个或多个动态特性的名称。例如，下例中请求加载一个名为"SplitSampleFeature01"的动态特性模块。

```
FeatureInstallRequest request = FeatureInstallRequest.newBuilder()
        // 添加特性名称
        .addModule("SplitSampleFeature01")
        .build();
```

#### 请求安装特性

[FeatureInstallManager](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallmanager-0000001057944555)和[FeatureInstallRequest](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallrequest-0000001057642233)实例化完成后，可以调用[FeatureInstallManager.installFeature](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featureinstallmanager-0000001057944555#section1023303221120)方法开始安装特性模块。开始安装前，会创建一个[FeatureTask](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featuretask-0000001057492597)。

```
//首先判断是否已经安装了此特性。如果没安装，再调用installFeature()方法
if (!mFeatureInstallManager.getAllInstalledModules().contains("SplitSampleFeature01")){
    FeatureTask<Integer> task = mFeatureInstallManager.installFeature(request);
}
```

#### 为FeatureTask注册监听器

为创建的[FeatureTask](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featuretask-0000001057492597)注册监听器，监控请求特性安装的状态。一个Task可以注册三类Listener：OnFeatureCompleteListener、OnFeatureSuccessListener和OnFeatureFailureListener。

* OnFeatureCompleteListener：无论成功或者失败，接收到应用市场的响应就会回调。需要开发者自己判断Task是否返回成功，如果在失败的情况下调用[FeatureTask.getResult](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/featuretask-0000001057492597#section8596597287)会抛出异常。
* OnFeatureSuccessListener：应用市场成功响应请求后，才会回调。回调结果中包含sessionId，sessionId是一次动态加载请求Task的唯一标识。通过该sessionId，可以随时获取动态加载的进度，也可以在加载过程中随时取消Task的执行，参见[获取指定加载任务的执行状态](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-dynamicability-getstate-0000001059210260)和[取消安装](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-dynamicability-abortinstall-0000001057642231)。
* OnFeatureFailureListener：应用市场响应失败信息，才会回调。您可以查看回调异常，获取动态加载失败错误码。

```
task.addOnListener(new OnFeatureSuccessListener<Integer>() {
    @Override
    public void onSuccess(Integer integer) {
        Log.d(TAG, "load feature onSuccess.session id:" + integer);
        if (integer == 0) {
            return;
        }
        sessionId = integer;
    }
});
task.addOnListener(new OnFeatureFailureListener<Integer>() {
    @Override
    public void onFailure(Exception exception) {
        if (exception instanceof FeatureInstallException) {
            int errorCode = ((FeatureInstallException) exception).getErrorCode();
            Log.d(TAG, "load feature onFailure.errorCode:" + errorCode);
        } else {
            exception.printStackTrace();
        }
    }
});
task.addOnListener(new OnFeatureCompleteListener<Integer>() {
    @Override
    public void onComplete(FeatureTask<Integer> featureTask) {
        if (featureTask.isComplete()) {
            Log.d(TAG, "complete to start install.");
            if (featureTask.isSuccessful()) {
                // 注意：这里的result是指sessionId
                Integer result = featureTask.getResult();
                Log.d(TAG, "succeed to start install. session id :" + result);
            } else {
                Log.d(TAG, "fail to start install.");
                Exception exception = featureTask.getException();
                exception.printStackTrace();
            }
        }
    }
});
```

