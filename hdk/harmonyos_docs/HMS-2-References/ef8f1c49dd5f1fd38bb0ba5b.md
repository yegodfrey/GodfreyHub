---
name: document/cn/HMS-2-References/hmssdk_jointOper_api_reference_c20
title: productPay（废弃）
uri: https://developer.huawei.com/consumer/cn/doc/HMS-2-References/hmssdk_jointOper_api_reference_c20
source: portal
---

# 1. 接口功能

应用可调用此接口完成托管商品的支付，托管商品是指在华为AppGallery Connect中维护的商品。

# 2. 调用场景

开发者提前在华为AppGallery Connect网站中创建虚拟商品，消费者在应用界面发起商品支付请求，应用根据已经配置的商品ID调用此接口即可拉起华为支付收银台，收银台中显示商品最新价格和支付方式，消费者付款成功后即可发放商品。

# 3. 接口约束

华为会根据国际汇率变动进行商品价格档调整，为了保证应用内商品价格显示一致，请开发者在调用productPay接口前使用getProductDetails接口获取商品当前最新的价格，避免由于国际汇率变动，导致应用显示的价格与实际支付的价格不一致。

举例：某应用使用华为托管商品，商品定价选择档位1，即0.99美元对应6.00元人民币，2019年1月，因美元对人民币汇率变动，PMS调整定价档位1，调整为0.99美元对应7.00元人民币。此时，如果开发者同时使用 getProductDetails 和 productPay 接口，可以保证应用内价格同步显示为7元人民币，如果需要，开发者也可以调整商品价格档（详见[配置商品信息](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_devprepare_configproduct)）。

如果开发者未按接入规范导致的消费者投诉或经济损失，由开发者自行承担。

# 4. 调用方法
      
      1. HMSAgent.Pay.productPay(ProductPayRequest request, final ProductPayHandler handler);
    
    

# 5. 请求参数

参数名称| 必选(M)/可选(O)| 类型| 参数说明  
---|---|---|---  
request| M| ProductPayRequest| 支付请求的参数信息。  
handler| M| ProductPayHandler| 接口调用后的回调结果，支付结束后，通过此回调实例回调给应用。回调结果中包含的具体参数参见结果回调。  
  
**ProductPayRequest**

参数名称| 必选(M)/可选(O)| 类型| 是否参与签名| 参数说明  
---|---|---|---|---  
productNo| M| string(0,50)| 是| 待支付的商品ID。  
商品ID来源于开发者在AppGallery Connect中配置商品信息时设置的“商品ID”，参见[配置商品信息](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_devprepare_configproduct)章节。  
applicationID| M| string| 是| 应用ID，在创建应用后由华为开发者联盟为应用分配的唯一标识。应用ID的查询方法请参见[查询应用ID](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_queryappid)。  
requestId| M| string(0,32)| 是| 商户侧的支付订单号，用于唯一标识一次支付请求。  
支付订单号由开发者自行生成，需由字母和数字组成，不能包含特殊字符，包括# " & / ? $ ^ *:) \ < > , | .并且不支持中文。  
支付订单号每次支付请求需唯一，即使订单被取消或支付失败订单号也不可重复。  
华为支付服务器在接口回调结果中会原样返回requestId的值。  
merchantId| M| string| 是| 商户ID，即华为开发者联盟给开发者分配的“支付ID”。  
支付ID的查询方法请参见[查询支付服务信息](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_querypayinfo)。  
serviceCatalog| M| string| 否| 商品类型。  
联运游戏请设置为“X6”，联运应用请设置为“X5”。  
如果传入类型错误，会影响风控，请开发者按照真实业务类型传入。  
merchantName| M| string(0,50)| 否| 商户名称，配置为注册开发者时配置的公司名。  
sdkChannel| M| int| 是| 渠道信息。  
● 0：自有应用，无渠道  
● 1：华为应用市场渠道  
● 2：预装渠道  
● 3：游戏中心  
游戏设置为3，普通应用设置为1。  
url| O| string(0,255)| 是| 支付结果回调地址，用于华为支付服务器在支付完成后调用[支付成功回调](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_jointOper_api_reference_s1)接口将支付结果通知给开发者服务器。  
如果开发者在[申请支付服务](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_prepare_applypayservice)时已配置“回调地址”，则华为支付服务器会优先使用申请支付服务时配置的回调地址。如果未配置，则使用此参数中的回调地址。  
回调地址必须是合法的url，长度最大255，不能以‘\’结尾，不能包含get参数。  
正确示例：http://domain.com/path  
错误示例：http://domain.com/path?key=value 说明：只有部署了自己开发者服务器的应用才需要配置本参数，单机应用无需配置。  
urlVer| O| string| 是| 支付结果回调版本。该参数可以不传，如果传值则必须传入固定值2，否则会导致支付不成功。警告：在生成签名字符串时该字段的名称必须修改为urlver, 字母v小写，否则会导致验签失败。  
extReserved| O| string(0, 128)| 否| 商户侧保留信息。如果该字段有值，在接口回调结果中原样返回。  
sign| M| string| 否| 用于支付验签的签名字符串。  
为防止请求被篡改，应用需要根据[支付签名的生成方法](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_generateSign)中的方法生成签名字符串，华为服务器在收到请求后会对签名字符串进行验签，验签成功后才会进行后续处理，否则将返回失败错误码。  
[查看视频讲解](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_devguide_vedio_payment_signature)。  
  
# 6. 结果回调
      
      1. final interface ProductPayHandler { 
        2.         /** 
        3.         * 支付结果回调 
        4.         * @param retCode 返回码 
        5.         * @param payInfo 支付结果信息 
        6.         */ 
        7.        void onResult(int retCode, ProductPayResultInfo payInfo); 
        8. }
    
    

参数名称| 必选(M)/可选(O)| 类型| 参数说明  
---|---|---|---  
retCode| M| int| 回调结果中支付结果的返回码，应用可以根据返回码判断支付是否成功或失败后如何处理，具体返回码处理参见返回码。  
payInfo| M| ProductPayResultInfo| 支付结果的对象信息。  
获取payInfo对象中参数值时，请使用“对象名称.get参数名称()”的方式，参数名首字母大写。例如，“payInfo.Time()”为本次支付完成的时间。  
  
**ProductPayResultInfo**

参数名称| 必选(M)/可选(O)| 类型| 是否参与验签| 参数说明  
---|---|---|---|---  
returnCode| M| int| 是| 支付结果的业务返回码，即与当前支付业务相关而非HMS SDK错误导致的返回码。  
当有业务返回码时，HMS SDK会将此值赋值给retCode，具体请参见返回码中的业务错误码。  
errMsg| O| string| 是| 返回码描述信息。  
merchantId| M| string| 是| 商户ID，即华为开发者联盟为开发者分配的“支付ID”。  
orderID| O| string| 是| 华为支付平台生成的支付订单号。  
当出现异常需要华为协助定位时，开发者可提供华为支付平台的订单号作为依据。  
requestId| M| string| 是| 商户侧的支付订单号，与请求参数中的requestId一致。  
productNo| M| string| 是| 所购买商品的商品ID。  
microsAmount| M| long| 是| 商品微单位价格。  
值为商品实际价格乘以1,000,000。例如某个商品实际价格是1.99美元，则该商品对应的微单位价格为：1.99*1000000=1990000。  
currency| M| string| 是| 本次支付的币种。必须符合[ISO 4217](https://www.iso.org/iso-4217-currency-codes.html)标准，例如USD、CNY、MYR。  
country| M| string| 是| 本次支付的国家码。必须符合[ISO 3166](https://www.iso.org/iso-3166-country-codes.html)标准，如US、CN、MY。  
time| M| string| 是| 本次支付完成的时间戳，即支付完成时间距离1970年的毫秒数。  
sign| O| string| 否| 响应消息中的签名字符串。  
应用可以参考[对响应消息验签的方法](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Guides/hmssdk_jointOper_verifySign)对签名字符串进行验签，确认响应消息是否被篡改。  
  
# 7. 返回码

类型| 返回码常量| 返回码值| 返回码说明| 处理建议  
---|---|---|---|---  
通用返回码|  参见[通用返回码](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_jointOper_api_reference_errorcode)。  
业务返回码| PayStatusCodes.PAY_STATE_SUCCESS| 0| 支付成功。|   
PayStatusCodes.PAY_STATE_FAILED| -1| 通用支付失败错误码。| 支付失败，支付流程结束，需重新调用支付接口。  
PayStatusCodes.PAY_STATE_CANCEL| 30000| 用户取消支付。| 记录订单号，待用户再次执行支付操作时再执行支付流程。  
PayStatusCodes.PAY_STATE_PARAM_ERROR| 30001| 参数错误（包含无参）。| 请检查请求参数是否遗漏，参数值格式是否正确。  
PayStatusCodes.PAY_STATE_TIME_OUT| 30002| 执行支付后HMS SDK向支付服务器查询支付结果超时。| 应用保存当前订单号，定时调用getOrderDetail接口查询订单支付状态，直到结果为支付成功或支付失败。  
PayStatusCodes.PAY_STATE_NET_ERROR| 30005| 网络连接异常。| 应用向用户给出提示请用户检查网络，并保存当前订单号，立即调用getOrderDetail接口查询订单支付状态。  
PayResult.PAY_RESULT_ACCOUNT_ERROR| 30008| 用户使用第三方帐号（QQ、微信）登录，支付时HMS SDK引导用户关联华为帐号时，用户取消。| 记录订单号，待用户再次执行支付操作时再执行支付流程。  
PayStatusCodes.PAY_STATE_ERROR| 30099| 华为服务器返回给HMS SDK的数据格式错误，查询结果未知。| 请联系华为技术支持定位。  
PayStatusCodes.HWPAY_COUNTRY_CODE_ERROR| 30011| 支付服务不可用，请切换华为帐号服务地。| 帐号服务地与商户传递的国家码不一致导致无法使用支付服务，需要切换帐号服务地。  
PayStatusCodes.ORDER_STATUS_HANDLING| 30012| 执行支付后支付订单的状态为订单处理中。| 应用保存当前订单号，定时调用getOrderDetail接口查询订单支付状态，直到结果为支付成功或支付失败。  
PayStatusCodes.ORDER_STATUS_UNTREATED| 30013| 执行支付后支付订单的状态为订单还未处理。| 应用保存当前订单号，定时调用getOrderDetail接口查询订单支付状态，直到结果为支付成功或支付失败。  
PayStatusCodes.PRODUCT_NOT_EXIST| 40001| 商品ID在对应商户查询的应用中不存在。| 请检查productNos中的商品ID对应的商品是否已创建。  
PayStatusCodes.PRODUCT_SERVER_INTERNAL_EXCEPTION| 40003| 商品服务器内部异常。| 执行支付操作时查询商品时商品服务器异常，请稍后重试，如仍未解决请联系华为技术支持定位。  
ReturnCodeStatus.HUAWEIPAY_ERROR_900042| 900042| ● 支付参数requestId重复。  
● 使用同一个华为帐号重复购买非消耗商品。| ● requestId在一个开发者帐号下所有应用中必须保持唯一。  
● 请勿使用同一个华为帐号重复购买相同的的非消耗商品。  
PayStatusCodes.PAY_OTHER_ERROR| 30006| 除以上错误以外的其他异常错误。| 请联系华为技术支持定位。  
  
# 8. 调用示例
      
      1. private void pmsPay(String productNo) {
        2.     showLog("PMS pay: begin");
        3.     ProductPayRequest payReq = createProductPayReq(productNo);
        4.     HMSAgent.Pay.productPay(payReq, new ProductPayHandler() {
        5.         @Override
        6.         public void onResult(int retCode, ProductPayResultInfo payInfo) {
        7.             if (retCode == HMSAgent.AgentResultCode.HMSAGENT_SUCCESS && payInfo != null) {
        8.                 boolean checkRst = PaySignUtil.checkSign(payInfo, pay_pub_key);
        9.                 showLog("PMS pay: onResult: pay success and checksign=" + checkRst + "\n");
        10.                 if (checkRst) {
        11.                     // TODO: 支付成功并且验签成功，发放商品 
        12.                 } else {
        13.                     // TODO: 签名失败，需要查询订单状态：对于没有服务器的单机应用，调用查询订单接口查询；其他应用到开发者服务器查询订单状态。
        14.                 }
        15.             } else if (retCode == HMSAgent.AgentResultCode.ON_ACTIVITY_RESULT_ERROR
        16.                         || retCode == PayStatusCodes.PAY_STATE_TIME_OUT
        17.                         || retCode == PayStatusCodes.PAY_STATE_NET_ERROR) {
        18.                 showLog("PMS pay: onResult: need wait for result, rstcode=" + retCode + "\n");
        19.                 // TODO: 需要查询订单状态：对于没有服务器的单机应用，调用查询订单接口查询；其他应用到开发者服务器查询订单状态。
        20.             } else {
        21.                 showLog("PMS pay: onResult: pay fail=" + retCode + "\n");
        22.                 // 其他错误码意义参照支付api参考
        23.             }
        24.         }
        25.     });
        26.     //将requestid缓存，供查询订单
        27.     addRequestIdToCache(payReq.getRequestId());
        28. }
    
    
