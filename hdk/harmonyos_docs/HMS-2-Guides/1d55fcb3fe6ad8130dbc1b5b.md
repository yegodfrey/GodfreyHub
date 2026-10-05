---
name: document/cn/HMS-2-Guides/hmssdk_huaweiiap_devguide_server_oversea
title: 服务端开发（废弃）
uri: https://developer.huawei.com/consumer/cn/doc/HMS-2-Guides/hmssdk_huaweiiap_devguide_server_oversea
source: portal
---

# 1\. 服务端支付签名处理

在客户端开发章节我们提到，对于有服务器的非单机应用，需要在应用的服务端完成支付参数的签名，以保障支付私钥的安全性，本章节介绍如何在服务端完成支付签名方法的开发，至于应用客户端和应用服务端之间的交互接口，由开发者自行实现。

## 1.1   开发步骤

**步骤1**   构造待签名支付参数字串

1、将支付参数中需要参与签名的参数（参与签名的参数是指[payreq](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-References/hmssdk_huaweiiap_api_reference_c1#h1-1575082326008)中标识需要签名的参数，值为空<包括null和"">的不参与签名），按参数名的ASCII码的增序排序，若遇到相同首字母，则看第二个字母，以此类推。

2、排序完成之后，再把所有数组值以“&”字符连接起来。

例如：

BankId=JUNNETNET&amount=2.00&notifyTime=1353317037173&orderId=918370122485714G&payType=2&productName=珍珠项链&requestId=1352286825177&result=0&userName=lilan

Java代码实现示例，以作参考：
    
    
    /**
     * 除了sign、signType以及回调中不存在的参数不参与签名，将其他的所有请求参数按照key的ASCII码进行升序排列，然后拼接成 
     * key1=value1&key2=value2&key3=value3..... 
     * 如果参数为null或空，写成key1=&key2=value2&key3=value3 
     * @param params 上面获取的所有请求参数 
     * @return 用于签名校验的字符串
     */
    public static String getSignData(Mapparams)
    {
        StringBuffer content = new StringBuffer();
        // 按照key做排序  
        Listkeys = new ArrayList(params.keySet());
        Collections.sort(keys);
        for (int i = 0; i < keys.size(); i++)
        {
            String key = (String) keys.get(i);
            if ("sign".equals(key)) // 如果是sign字段，不作为签名校验参数  
            {
                continue;
            }                
            if ("signType".equals(key)) // 如果是signType字段，不作为签名校验参数  
            {
                continue;
            }                
            String value = (String) params.get(key);
            if (value != null)
            {
                content.append((i == 0 ? "" : "&") + key + "=" + value);
            }
            else
            // 如果value为null，则写成：key=&key1=value1  
            {
                content.append((i == 0 ? "" : "&") + key + "=");
            }
        }
        return content.toString();
    }

**步骤2**   生成签名值

（a）将源串使用RSA算法（SHA256WithRSA）进行签名。

（b）将签名后的字符数组经过Base64.encode编码，生成签名值

详细代码请参见[服务端示例代码](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Examples/hmssdk_huaweiiap_sample_code_oversea_s)章节。

# 2\. 支付回调接口处理

 

说明：

对于无服务器的单机应用，开发者无需关注本章节，有服务器的非单机应用开发者需要实现本章节，以实现支付结果回调的处理。

支付回调是用户使用华为支付进行付款成功后，华为支付服务器将回调开发者的服务器通知支付结果。开发者需在华为开发者联盟上申请支付服务时，填入回调URL才可使用本功能，回调URL为开发者的应用服务器对外提供的服务地址。

本章节将介绍支付回调的接口以及CP如何实现该接口。

## 2.1 回调机制的说明

##### 回调重发：若开发者服务器对于支付回调返回结果为非成功响应（返回的result值为非0），将对同一笔订单的回调进行周期性重发。

##### 重发机制：共2天，前3次每20s尝试一次，4-20次每200s尝试一次，之后每3小时尝试一次；

## 2.2   回调接口协议描述

方向：华为支付平台->商户服务器

协议：HTTP

方法：POST  
POST请求接口数据格式：   application/x-www-form-urlencoded  
POST请求接口数据字符编码：UTF-8

响应接口数据格式：JSON

响应接口数据字符编码：UTF-8

 

注意：

1、请严格按接口定义返回相应的结果码，包括已经明确定义的错误情况。在有未明确的关键错误情况出现时，可以在群内讨论。具体结果码请参考回调响应约定。

2、不允许商户设置IP允许清单用于限制华为侧的出口IP地址。IP允许清单本身并不能提高安全性且会给业务发展带来约束，在消息层面已有更安全的RSA签名机制条件下，没有存在价值。商户不遵守该约定而导致的后果由商户承担。

## 2.3 回调接口请求参数

URL参数：无

Body参数：见下表

**名称** |  **类型** |  **描述** |  **是否必选**  
---|---|---|---  
result |  string(3) |  支付结果 “0”，表示支付成功 “1”，表示退款成功（商户应用上配置了退款回调url情况下存在退款回调） “1015”，订单处理中（仅CPG模式，另外需要第三方支持才有） 注：对于融资支付，具体订单状态请参考sysReserved信息。 |  是  
timeOffset |  long |  与零时区的时间差异，单位ms，为“28800000“时，也就是北京时区时不出现，以取得最大兼容性。 转化为时区的方法：timeOffset/1000/60/60。 其取值通过timeZone.getRawOffset()方法获取。 |  否  
userName |  string |  开发者社区用户名或联盟用户编号 终端sdk上报了联盟用户编号，即支付ID时，填写的内容是用户编号，反之是社区用户名。 |  是  
productName |  string(100) |  商品名称，支付接口开启支付特殊字符的情况下，商品名称中的特殊字符会被替换为下划线，被替换的特殊字符列表% + " & ? $ ^ * :<> | \ |  是  
payType |  int |  支付类型:  0：华为钱包 3：信用卡 4：支付宝 6：话费支付 13：PayPal 16：借记卡 17：微信 19：礼品卡 20：HuaweiPay零钱 21：华为充值卡 24：WP 31：HuaWeiPay 32：花呗 33：SHARINGPAY 34: Adyen(bankCard) 35: Ideal(Adyen) 36: OpenBK(Adyen) 37: Sofort(Adyen) 38: giropay(Adyen) 39: FPX(iPay88) 40: eNets(iPay88) 41: BOOST(iPay88) 42: Sberbank(Yandex) 43: eMoney(Yandex) 44：AntCreditPay（AliPay渠道花呗不分期） 45：Voucher(HMS优惠券支付) 200：MPESA 100-199：CUSTPAY1-100（支付定制支付方式） |  是  
tradeType |  String |  交易类型： toSign，签约，仅对支付宝、微信、HuaWei和HuaWeiPay。 unSign，取消签约，仅对支付宝、微信、HuaWei和HuaWeiPay。 refund，退款。 注：有值的时候才存在该参数，表示本回调通知为签约或者取消，并不是订单支付成功消息。refund情况下为针对wrapper的退款通知，通知地址为系统配置，全部参数才有urlencode编码。 |  否  
pactNo |  String |  签约协议号，仅在tradeType为toSign、unSign情况下存在。 注：考虑到参数格式多样化，本参数在”utf-8” urlencode后发送。 注：Java中request的getParameter()方法会隐含进行urldecode。 |  否  
channel |  String |  渠道信息，仅在tradeType为toSign、unSign情况下存在，取值： AliPay：支付宝 TenPay：微信 HuaWei：华为 HuaWeiPay：华为Pay支付 |  否  
distChannel |  String |  联运渠道 仅在客户端传入serviceCatalog为X5（可设置）时并且订单中有联运渠道信息时存在 |  否  
amount |  string(10) |  商品支付金额 (格式为：元.角分，最小金额为分， 例如：20.00)  注：退款通知下，为退款金额。 注：可能为0.00，为免费商品场景 |  是  
currency |  String |  国标货币，为空或者CNY情况下本参数不出现 |  否  
orderId |  string(50) |  华为订单号 |  是  
notifyTime |  string(15) |  通知时间。 (自1970年1月1日0时起的毫秒数)  |  是  
requestId |  string(50) |  商户侧请求ID，包括商户App调用支付SDK时填写的requestId参数值。 |  是  
bankId |  String(50) |  银行编码-支付通道信息，可选参数。如下情况会进行传递：  
 ● 参数有具体取值  
 ● 商户在前台sdk中指定了urlver配置项为“2” |  否  
orderTime |  String |  下单时间 yyyy-MM-dd hh:mm:ss |  否  
tradeTime |  String |  交易/退款时间 yyyy-MM-dd hh:mm:ss |  否  
accessMode |  String |  接入方式： 0: 移动 1: PC-Web 2:Mobile-Web 3:TV |  否  
spending |  String |  渠道开销，保留两位小数，单位元。 注：本参数依赖于上游支付平台的能力，进一步的信息请联系我们获取。 |  否  
extReserved |  String |  商户侧保留信息，原样返回商户调用支付sdk输入的保留信息。未输入时，不返回。 注：考虑到自选参数格式多样化，本参数在”utf-8” urlencode后发送。 注：Java中request的getParameter()方法会隐含进行urldecode。 |  否  
sysReserved |  String |  系统保留信息： 融资：融资结果和银行侧订单号，参考用法一。 微信：支付该笔订单的用户ID。 定制支付：透传定制支付系统的取值。 PayPal：传递PayPal的IPN参数protection_eligibility、payer_status，参考用法二。 华为充值卡：传递华为充值卡的卡号和是否赠送标记，参考用法三。 其他：不出现 注：考虑到自选参数格式多样化，本参数在”utf-8” urlencode后发送。 注：Java中request的getParameter()方法会隐含进行urldecode。 |  否  
signType |  String |  签名类型，不参与签名，非法值按缺省值处理： RSA：rsa签名，算法为SHA1WithRSA（缺省） RSA256：rsa签名，算法为SHA256WithRSA 注：本字段只有在cp调用支付sdk传入的signType参数为RSA256时出现。或者商户在开发者联盟已经确认其应用已经全面支持RSA256签名算法情况下出现。 |  否  
oriOrderId |  String |  仅退款场景有效，表示原始订单的华为侧订单号 |  否  
oriRequestId |  String |  仅退款场景有效，表示原始订单的商户侧订单号 |  否  
payMoney |  String |  实际支付金额 (格式为：元.角分，例如：20.00)，不包含优惠券金额 urlver=4的场景出现 |  否  
sign |  string |  RSA签名（使用开发者公钥进行验签，待验签内容生成方法见2.5签名机制）  注：考虑到自选参数格式多样化，本参数在”utf-8” urlencode后发送。 注：Java中request的getParameter()方法会隐含进行urldecode。 |  是  
  
 

 

Java中对本接口参数的处理建议：

关于payMoney字段说明：该字段记录用户的实际使用花币、微信、支付宝、现金等支付的金额，不包含优惠券金额，纯券支付场景下，该字段为0。

关于utf-8编码：在客户端传入参数urlver为“3和4”的情况下，本接口中所有参考的值均采用url utf-8编码方式发送，参数接收按标准方法处理即可；其他情况下本接口采用的是application/x-www-form-urlencoded格式，会在http层进行编码，同时接收端会自动解码。建议通过如下方法获得的get参数串，也就是我们发送的原始信息。而原始信息是没有urlencode的，验签也是需要使用原始内容参与的。而使用request. getParameter()会隐含进行urldecode，在部分情况下可能无法正确获取原始参数信息，比如参数取值中如果包含”%、+、&”等特殊符号。

支付服务器在2019年6月份版本上线后，如果产品名称中存在特殊字符，且客户端未urlver为3或4的情况下，支付回调消息中会替换productName名称为_或其他非特殊符号。如下为代码示例：
    
    
    String line = null;
    StringBuffer sb = new StringBuffer();
    try {
        request.setCharacterEncoding("UTF-8");
        InputStream stream=request.getInputStream();
        InputStreamReader isr=new InputStreamReader(stream);
        BufferedReader br=new BufferedReader(isr);
        while ((line = br.readLine()) != null) {
            if (sb.length() > 0) {
                sb.append("\r\n");
            }
            sb.append(line);
        }
        System.out.println("The original data is : " + sb.toString());
        br.close();
    } catch(Exception e) {
        e.printStackTrace();
    } catch (Throwable e) {
        e.printStackTrace();
    }
    String str = sb.toString();
    Map<String, Object> valueMap = new HashMap<String, Object>();
    if(null == str || "".equals(str)) {
        return valueMap;
    }
    String[]  valueKey = str.split("&");
    for(String temp : valueKey) {
        String[] single = temp.split("=");
        valueMap.put(single[0], single[1]);
    }
    System.out.println("The parameters in map are : " + valueMap);
    // 接口中，如下参数sign和extReserved是URLEncode的，所以需要decode，其他参数直接是原始信息发送，不需要decode，其他在接口描述中明确为编码后发送的参数，均需要解码后使用。
    try {
        String sign = (String) valueMap.get("sign");
        String extReserved = (String) valueMap.get("extReserved");
        String sysReserved =  (String) valueMap.get("sysReserved");
        if (null != sign) {
            sign = URLDecoder.decode(sign, "utf-8");
            valueMap.put("sign", sign);
        }
        if (null != extReserved) {
            extReserved = URLDecoder.decode(extReserved, "utf-8");
            valueMap.put("extReserved", extReserved);
        }
        if (null != sysReserved) {
            sysReserved = URLDecoder.decode(sysReserved, "utf-8");
            valueMap.put("sysReserved", sysReserved);
        }
    } catch(Exception e){
        e.printStackTrace();
    }

采用如上方法获取参数时，对于sign、sysReserved和extReserved参数需要进行urldecode处理，其余参数不需要处理。

## 2.4 回调响应约定

http返回码：200

Body参数：

名称 | 类型 | 描述 |  是否必选  
---|---|---|---  
result | int |  操作结果 0：成功  
1：验签失败  
2：超时  
3：业务信息错误，比如订单不存在  
94：系统错误  
95：IO 错误  
96：错误的url  
97：错误的响应  
98：参数错误  
99：其他错误 | 是  
  
 

注意：

对于重复的订单，要求返回0；另外，请严格按定义的结果码返回，包括各种已经明确定义的错误码。另外，商户收到通知消息时，在完成最小必要处理后，要立即返回响应，避免超时。

## 2.5 开发步骤

应用服务端的开发者需要完成对支付回调中支付结果的验签，验签方法参见上一章节服务端支付签名处理，并更新自己服务端的支付结果，此处逻辑应用自行实现，部分代码请参见[服务端示例代码](https://developer.huawei.com/consumer/cn/doc/development/HMS-2-Examples/hmssdk_huaweiiap_sample_code_oversea_s)。
