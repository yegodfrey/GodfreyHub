---
name: document/cn/HiCar-Guides/deinitialize-sdk-0000000000030703
title: 反初始化SDK
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/deinitialize-sdk-0000000000030703
---

# 反初始化SDK

## 场景说明

HiCar SDK的初始化会记录状态值，因此需要厂商HMI应用退出或者HiCar SDK底层执行发生异常时调用"deInit"接口进行状态重置。

## 接口说明

|类|方法|说明|
|:-----------|:--------------------|:---------------------------------------------------------|
|HiCarAdapter|unRegisterCarListener|厂商HMI应用应该在反初始化SDK之前取消HiCar注册事件侦听。|
|HiCarAdapter|deInit|厂商HMI应用应该在用户结束用车时（例如：用户熄火并关闭屏幕后）调用deInit接口进行HiCar SDK反初始化。|
[**表1**初始化相关接口]

## 开发步骤

1. 通过HiCarAdapter的unRegisterCarListener方法取消注册事件侦听。

   示例代码如下所示。

   ```screen
   //取消注册事件侦听 
   int retCode = mHiCarAdapter.unRegisterCarListener(mHiCarListener); 
   if (retCode != HiCarConst.SUCCESS) { 
       Log.d(TAG, "HiCar unreg listener failed"); 
   } 
   ```

2. 通过HiCarAdapter的deInit方法进行反初始化。

   示例代码如下所示。

   ```screen
   //重置HiCar SDK初始化状态 
   mHiCarAdapter.deInit(); 

   //置空初始化成功后保存的hicarAdapter实例 
   mHiCarAdapter = null;
   ```

