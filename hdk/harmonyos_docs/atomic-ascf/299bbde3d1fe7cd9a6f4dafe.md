---
name: document/cn/atomic-ascf/apis-screen
title: 屏幕
uri: https://developer.huawei.com/consumer/cn/doc/atomic-ascf/apis-screen
---

# 屏幕

## has.setVisualEffectOnCapture

has.setVisualEffectOnCapture(Object object)

设置截屏/录屏时屏幕表现，设置元服务窗口不可截屏/录屏。仅在当前元服务处于前台状态下生效，其他未配置的元服务或窗口不生效。

**起始版本：** 2.0.1

**需要权限** ：在module.json5文件中声明**ohos.permission.PRIVACY_WINDOW**。

**参数：**

参数为Object对象，包括以下字段。

|参数|类型|默认值|必填|描述|
|:-----------|:-------|:---|:-|:-----------------------------------------------|
|visualEffect|string|none|否|截屏/录屏时的表现，仅支持none/hidden，传入hidden则表示在截屏/录屏时隐藏屏幕。|
|success|function|-|否|接口调用成功的回调函数。|
|fail|function|-|否|接口调用失败的回调函数。|
|complete|function|-|否|接口调用结束的回调函数（调用成功、失败都会执行）。|

**错误码信息：**

|错误码|错误信息|
|:-------|:----------------------------------|
|12005001|setVisualEffectOnCapture exception.|

**示例：**

```js
has.setVisualEffectOnCapture({
  visualEffect: 'hidden',
  success: () => {
    console.info('setVisualEffectOnCapture success.');
  },
  fail: (err) => {
    console.error('setVisualEffectOnCapture fail:', err);
  },
  complete: (res) => {
    console.info('setVisualEffectOnCapture complete.', res);
  }
});
```

## has.setScreenBrightness

has.setScreenBrightness (Object object)

设置屏幕亮度。仅在当前元服务生效，离开元服务后设置失效。

**起始版本：** 1.0.4

**参数：**

参数为Object对象，包括以下字段。

|参数|类型|必填|描述|
|:-------|:-------|:-|:---------------------------------------|
|value|number|是|屏幕亮度值，范围0 ~ 1，0最暗，1最亮。传入-1，表示屏幕亮度跟随系统变化。|
|success|function|否|接口调用成功的回调函数。|
|fail|function|否|接口调用失败的回调函数。|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）。|

**错误码信息：**

|错误码|错误信息|
|:-------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|102|The value is out of range.|
|12001301|1. setScreenBrightness error. 2. setScreenBrightness exception. 更多错误信息参考：[窗口错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-window)|

**示例：**

```js
has.setScreenBrightness({
  value: 0.5,
  success:() => {
    console.info('setScreenBrightness success');
  },
  fail: (err) => {
    console.error('setScreenBrightness fail', err)
  },
  complete: (res) => {
    console.info('setScreenBrightness complete', res);
  }
});
```

## has.setKeepScreenOn

has.setKeepScreenOn (Object object)

设置屏幕是否保持常亮状态。仅在当前元服务生效，离开元服务后设置失效。

**起始版本：** 1.0.4

**参数：**

参数为Object对象，包括以下字段。

|参数|类型|必填|描述|
|:-----------|:-------|:-|:------------------------|
|keepScreenOn|boolean|是|是否保持屏幕常亮。|
|success|function|否|接口调用成功的回调函数。|
|fail|function|否|接口调用失败的回调函数。|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）。|

**错误码信息：**

|错误码|错误信息|
|:-------|:------------------------------------------------------------------------------------------------------------------------------|
|101|Context is null or undefined.|
|12001401|setKeepScreenOn exception. 更多错误信息参考：[窗口错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-window)|

**示例：**

```js
has.setKeepScreenOn({
  keepScreenOn: true,
  success: () => {
    console.info('setKeepScreenOn success');
  },
  fail: (err) => {
    console.error('setKeepScreenOn fail', err);
  },
  complete: (res) => {
    console.info('setKeepScreenOn complete', res);
  }
});
```

## has.onUserCaptureScreen

has.onUserCaptureScreen (function callback)

监听用户主动截屏事件。用户使用系统截屏按键截屏时触发，只能注册一个监听。

**起始版本：** 1.0.4

**参数：**

|参数|类型|必填|描述|
|:-------|:-------|:-|:-------------|
|callback|function|是|用户主动截屏事件的回调函数。|

**错误码信息：**

|错误码|错误信息|
|:--|:----------------------------|
|101|Context is null or undefined.|

**示例：**

```js
has.onUserCaptureScreen(function() {
  console.info('监听用户截屏事件');
});
```

## has.offUserCaptureScreen

has.offUserCaptureScreen (function callback)

取消监听用户主动截屏事件。

**起始版本：** 1.0.4

**参数：**

|参数|类型|必填|描述|
|:-------|:-------|:-|:-------------|
|callback|function|否|用户主动截屏事件的回调函数。|

**错误码信息：**

|错误码|错误信息|
|:--|:----------------------------|
|101|Context is null or undefined.|

**示例：**

```js
const fun = () => {
  console.info('screenshotCallback');
};

has.onUserCaptureScreen(fun);
has.offUserCaptureScreen(fun);
```

## has.getScreenBrightness

has. getScreenBrightness (Object object)

获取元服务应用当前屏幕亮度。

**起始版本：** 1.0.4

**参数：**

参数为Object对象，包括以下字段。

|参数|类型|必填|描述|
|:-------|:-------|:-|:------------------------|
|success|function|否|接口调用成功的回调函数。|
|fail|function|否|接口调用失败的回调函数。|
|complete|function|否|接口调用结束的回调函数（调用成功、失败都会执行）。|

**success返回值：**

|属性|类型|描述|
|:----|:-----|:------------------------------------|
|value|number|屏幕亮度值，范围0 ~ 1，0最暗，1最亮。-1表示屏幕亮度跟随系统变化。|

**错误码信息：**

|错误码|错误信息|
|:-------|:------------------------------------------------------------------------------------------------------------------------------|
|101|Context is null or undefined.|
|12001201|getScreenBrightness error. 更多错误信息参考：[窗口错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-window)|

**示例：**

```js
has.getScreenBrightness({
  success: (res) => {
    console.info('getScreenBrightness success', res);
  },
  fail: (err) => {
    console.error('getScreenBrightness fail', err);
  },
  complete: (res) => {
    console.info('getScreenBrightness complete', res);
  }
});
```

