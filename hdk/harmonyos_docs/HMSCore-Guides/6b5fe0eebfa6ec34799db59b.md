---
name: document/cn/HMSCore-Guides/redelivering-consumables-0000001051356573
title: （必要）消耗型商品的补单流程
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/redelivering-consumables-0000001051356573
---

# （必要）消耗型商品的补单流程

在用户完成消耗型商品的支付之后，若出现异常（网络错误、进程被中止等）将导致应用无法知道用户实际是否支付成功，即出现掉单情况。华为应用内支付针对此场景，提供了消耗型商品的补单机制。您的应用可参考以下流程图进行处理：

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260206135219.43344740793174168594903999261059:50001231000000:2800:AA4330DC7CB4EE292E2E9A18630A057530BFDB712ED3C2ACF1ACA007DF5A57F9.png)  
你需要在以下场景触发补单机制：

* 应用启动时。
* 购买请求返回-1（OrderStatusCode.ORDER_STATE_FAILED）时。
* 购买请求返回60051（OrderStatusCode.ORDER_PRODUCT_OWNED）时。
* 购买请求返回1（OrderStatusCode.ORDER_STATE_DEFAULT_CODE）时。

开发步骤如下：

1. 使用[obtainOwnedPurchases](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/iapclient-0000001050137587#section15126153542812)获取用户已购未发货的消耗型商品的购买信息。您的应用需要在请求参数[OwnedPurchasesReq](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ownedpurchasesreq-0000001050135762)中指定查询的priceType为0。

   <br />

   当接口请求成功时，IAP将返回一个[OwnedPurchasesResult](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ownedpurchasesresult-0000001050135770)对象，该对象包含用户所有已购但未发货的商品购买信息及其签名数据，您需要使用在华为AppGallery Connect分配的公钥进行签名验证。为避免资金损失，您在验签成功后，必须校验[InAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/json-inapppurchasedata-0000001050986125)中的productId、price、currency等信息的一致性。验证方法请参见[验证InAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/verifying-inapppurchasedata-0000001494212281)。

   每个购买信息均以JSON格式的String形式呈现，包含的参数请参见[InAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/json-inapppurchasedata-0000001050986125)。验证成功后，您需要从[InAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/json-inapppurchasedata-0000001050986125)的字符串中解析出purchaseState字段，当purchaseState为0时表示此次交易是成功的，您的应用仅需要对这部分商品进行补发货操作。  
   ![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260206135219.29328039241869176406022781303308:50001231000000:2800:83E1F1DD2D057DA88CB0DD5371EA5C1829280D29CEB5083DD39365B70DE76C75.png)  
   IAP SDK的[InAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/inapppurchasedata-0000001050137635)类可用于解析[InAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/json-inapppurchasedata-0000001050986125)字符串，您可使用该类构造一个[InAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/inapppurchasedata-0000001050137635)对象并从[InAppPurchaseData](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/inapppurchasedata-0000001050137635)对象中获取相关信息。  

   ```
   "Java"
   // 构造一个OwnedPurchasesReq对象
   OwnedPurchasesReq ownedPurchasesReq = new OwnedPurchasesReq();
   // priceType: 0：消耗型商品; 1：非消耗型商品; 2：订阅型商品
   ownedPurchasesReq.setPriceType(0);
   // 获取调用接口的Activity对象
   final Activity activity = getActivity();
   // 调用obtainOwnedPurchases接口获取所有已购但未发货的消耗型商品的购买信息
   Task<OwnedPurchasesResult> task = Iap.getIapClient(activity).obtainOwnedPurchases(ownedPurchasesReq);
   task.addOnSuccessListener(new OnSuccessListener<OwnedPurchasesResult>() {
       @Override
       public void onSuccess(OwnedPurchasesResult result) {
           // 获取接口请求成功的结果
           if (result != null && result.getInAppPurchaseDataList() != null) {
               for (int i = 0; i < result.getInAppPurchaseDataList().size(); i++) {
                   String inAppPurchaseData = result.getInAppPurchaseDataList().get(i);
                   String inAppSignature = result.getInAppSignature().get(i);
                   // 使用应用的IAP公钥验证inAppPurchaseData的签名数据
                   // 如果验签成功，必须校验InAppPurchaseData中的productId、price、currency等信息的一致性
                   // 验证一致后，确认每个商品的购买状态。确认商品已支付后，检查此前是否已发过货，未发货则进行发货操作。发货成功后执行消耗操作
                   try {
                       InAppPurchaseData inAppPurchaseDataBean = new InAppPurchaseData(inAppPurchaseData);
                       int purchaseState = inAppPurchaseDataBean.getPurchaseState();
                   } catch (JSONException e) {
                   }
               }
           }
       }
   }).addOnFailureListener(new OnFailureListener() {
       @Override
       public void onFailure(Exception e) {
           if (e instanceof IapApiException) {
               IapApiException apiException = (IapApiException) e;
               Status status = apiException.getStatus();
               int returnCode = apiException.getStatusCode();
           } else {
               // 其他外部错误
           }
       }
   });
   ```

   ```
   "Kotlin"
   // 构造一个OwnedPurchasesReq对象
   val ownedPurchasesReq = OwnedPurchasesReq()
   // priceType: 0：消耗型商品; 1：非消耗型商品; 2：订阅型商品
   ownedPurchasesReq.setPriceType(0)
   // 获取调用接口的Activity对象
   val activity: Activity = getActivity()
   // 调用obtainOwnedPurchases接口获取所有已购但未发货的消耗型商品的购买信息
   val task = Iap.getIapClient(activity).obtainOwnedPurchases(ownedPurchasesReq)
   task.addOnSuccessListener { result ->
       // 获取接口请求成功的结果
       if (result != null && result.getInAppPurchaseDataList() != null) {
           for (i in result.getInAppPurchaseDataList().indices) {
               val inAppPurchaseData = result.getInAppPurchaseDataList()[i]
               val inAppSignature = result.getInAppSignature()[i]
               // 使用应用的IAP公钥验证inAppPurchaseData的签名数据
               // 如果验签成功，必须校验InAppPurchaseData中的productId、price、currency等信息的一致性
               // 验证一致后，确认每个商品的购买状态。确认商品已支付后，检查此前是否已发过货，未发货则进行发货操作。发货成功后执行消耗操作
               try {
                   val inAppPurchaseDataBean = InAppPurchaseData(inAppPurchaseData)
                   val purchaseState = inAppPurchaseDataBean.purchaseState
               } catch (e: JSONException) {
               }
           }
       }
   }.addOnFailureListener { e ->
       if (e is IapApiException) {
           val apiException = e as IapApiException
           val status: Status = apiException.status
           val returnCode = apiException.statusCode
       } else {
           // 其他外部错误
       }
   }
   ```

   <br />

2. 使用[consumeOwnedPurchase](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/iapclient-0000001050137587#section16784102213346)接口对已发货商品进行消耗。

   <br />

   您需要对[obtainOwnedPurchases](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/iapclient-0000001050137587#section15126153542812)返回的每个商品数据进行发货确认，确认已发货后使用[consumeOwnedPurchase](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/iapclient-0000001050137587#section16784102213346)接口消耗所有已发货商品，以此通知华为应用内支付服务器更新商品的发货状态。对于消耗型商品，应用成功执行消耗之后，华为服务器会将相应商品重新设置为可购买状态，用户即可再次购买该商品。

   <br />

