---
name: document/cn/HMSCore-Guides/pay-propose-sign-h5-dev-0000001827755624
title: 快速接入
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/pay-propose-sign-h5-dev-0000001827755624
---

# 快速接入

商户支付接入流程：

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/18/v3/G_dreOPdQRC5AcgCkpaBtQ/zh-cn_image_0000002480160124.png?HW-CC-KV=V1&HW-CC-Date=20260910T132631Z&HW-CC-Expire=31536000000&HW-CC-Sign=7A0A12E16E112C3CBFD1FC02AC1C86C69B10DD4385006CCA57801F31F9C42CAB)

1. 商户客户端请求商户服务器创建商品订单。
2. 商户服务器调用华为支付服务提供的[H5预下单](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-pay-propose-sign-h5app-prepay-0000001752641209)接口获取预下单号（prepayId和h5Url）返回给客户端。
3. 客户端调用加载h5Url调起华为支付服务收银台，完成支付。
4. 华为支付服务客户端引导用户完成签约。
5. 华为支付服务客户端展示支付结果页，用户关闭支付结果页后华为支付服务客户端会返回商户H5界面。
6. 支付成功后，华为支付服务器会调用回调接口返回支付结果信息给商户服务器；支付失败场景可能不会有支付结果回调通知。
7. 签约成功后，华为支付服务器会调用回调接口返回签约结果信息给商户服务器；取消签约和签约失败场景不会有回调结果通知。
8. 商户服务器收到支付和签约结果回调响应后，使用SM2验签方式对支付结果进行验签。

> 说明
>
> 支付是否成功可以通过回调通知中的orderStatus的返回状态判断：
>
> * TRX_SUCCESS：交易成功
> * TRX_FAILED：交易失败

## App内webView加载h5Url

商户客户端获取h5Url后通过应用webView组件加载该URL来拉起华为支付收银台完成支付。

* HarmonyOS应用WebView处理加载h5Url后的重定向示例如下：

  ```screen
  // API 9以下的代码示例
  webView.setWebAgent(new WebAgent() { 
          @Override 
          public boolean isNeedLoadUrl(WebView webView, ResourceRequest request) { 
              if (request == null || request.getRequestUrl() == null) { 
                  LogC.i(TAG,"WebAgent isNeedLoadUrl:request is null.", false); 
                  return false; 
              } 
              String url = request.getRequestUrl().toString(); 
              if (url.startsWith("hms:")) { 
                  Intent deepLinkIntent = new Intent(); 
                  Uri deeplink = Uri.parse(url); 
                  try { 
                      Operation operation = new Intent.OperationBuilder() 
                              .withUri(deeplink) 
                              .withDeviceId("") 
                              .withFlags(Intent.FLAG_NOT_OHOS_COMPONENT) 
                              .build(); 
                      deepLinkIntent.setOperation(operation); 
                      startAbility(deepLinkIntent); 
                      return  false; 
                  } catch (Exception e) { 
                      return false; 
                  } 
              } 
              webView.load(url); 
              return false; 
          } 
      });

  // API 9及以上的代码示例
   Web({
          src: '',
          controller: this.webviewController
        }).onInterceptRequest((event) => {
          // 拦截页面请求
          if (!event.request.getRequestUrl().startsWith("hms")) {
            return null;
          }
          payService.hwPayService.pay(getContext(this) as common.UIAbilityContext, event.request.getRequestUrl());
        })
  public async pay(context: common.UIAbilityContext, uri: string): Promise<void> {
      if (uri && context) {
        let want:Want =
          {
            action: "ohos.want.action.viewData",
            flags: 0x10000000,
            uri: uri // hmsdeeplink链接
          };
        await context.startAbility(want).then((data) => {
          Logger.info(HWPayServiceImpl.TAG, "aggr start pay");
        }).catch(e => {
          Logger.error(HWPayServiceImpl.TAG, "aggr start pay error: " + e.message);
        });
        return;
      }
      throw new Error('context or uri CANNOT be undefined or null');
    }
  ```

* Android应用webView处理加载h5Url后的重定向示例如下：

  ```screen
  public boolean shouldOverrideUrlLoading(WebView view, String url) { 
          Log.d(TAG, "WebView shouldOverrideUrlLoading" + url); 
          try { 
              if (url.startsWith("hms:")) { 
                  Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url)); 
                  startActivity(intent); 
                  return true; 
              } 
          } catch (Exception e) { 
              return true; 
          } 
          view.loadUrl(url); 
          return true; 
      }
  ```

## 支付结果获取

1. 商户在构建"直连商户H5预下单"请求时通过参数传入callbackUrl。 在华为支付服务器完成支付后，将以POST方式调用callbackUrl，将支付结果返回给商户服务器。参见[支付结果回调通知](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-notify-pay-result-0000001538536148)。

2. 商户可通过[查询支付订单](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-query-order-status-0000001589215985)接口主动查询华为支付服务器获取支付结果。

## API列表

H5支付API列表

|功能列表|描述|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|
|[H5预下单](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-pay-propose-sign-h5app-prepay-0000001752641209#section1089114712582)|此接口是H5应用用来获取华为支付预订单号prepayId。|
|[支付结果回调通知](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-pay-propose-sign-pay-callback-0000001970239385)|华为支付服务器调用APP预下单传入的callbackUrl回调接口，将用户支付成功的消息通知给商户。|
|[签约结果通知回调](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-pay-propose-sign-sign-callback-0000001943240250#ZH-CN_TOPIC_0000002480319890__zh-cn_topic_0000001961036128_section10267412717)|用户签约完成后，华为支付服务器调用开发者请求预签约接口时传入的Url向开发者服务器发送签约关键事件通知。|
|[查询支付订单](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-pay-propose-sign-query-order-0000001943080922#ZH-CN_TOPIC_0000002480159912__zh-cn_topic_0000001997597221_section139661559142215)|商户用此接口查询已经存在的交易订单状态。|
|[查询签约信息](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-pay-propose-sign-query-sign-order-0000001943240254)|商户通过调用此接口，获取签约信息。|
|[申请退款](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-pay-propose-sign-apply-refund-0000001970239393)|此接口提供给用户退款使用。|
|[退款结果通知](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-pay-propose-sign-refund-callback-0000001943240258)|开发者完成退款申请成功后，华为支付服务器调用开发者请求退款接口时传入的Url向开发者服务器发送退款关键事件。|
|[查询退款订单](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-pay-propose-sign-query-refund-0000001943080930)|调用退款申请后，调用此接口查询退款订单状态。|
|[申请解约](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-pay-propose-sign-apply-unsign-0000001943240262)|此接口提供给商户解除已经签约的订单。|
|[解约结果通知回调](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-pay-propose-sign-unsign-callback-0000001943080934)|开发者完成解约申请成功后，华为支付服务器调用开发者请求解约接口时传入的Url向开发者服务器发送解约关键事件通知。|
|[查询对账单](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-query-trade-bill-0000001589055969#section0108144213416)|提供给商户下载对账账单。|
|[查询结算账单](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-query-settle-bill-0000001589121257#section0108144213416)|提供给商户下载结算账单。|

