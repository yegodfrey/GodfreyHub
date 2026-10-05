---
name: document/cn/pay-docs/petalpay_api_5673_request_example-0000001325132489
title: 请求示例
uri: https://developer.huawei.com/consumer/cn/doc/pay-docs/petalpay_api_5673_request_example-0000001325132489
source: portal
---

请求示例  
      
    PayMercAuth payMercAuth = new PayMercAuth();
    String traceId = KeyGenUtils.getTraceId();
    Long time = System.currentTimeMillis();
    payMercAuth.setCallerId(mercNo);
    payMercAuth.setTraceId(traceId);
    payMercAuth.setTime(time);
    payMercAuth.setAuthId(authId);
     
    String bodySign = RSAUtils.signByRSAWithPSS(bodySourceData, priKey);
    String headerSourceData = "authId=" + authId + "&bodySign=" + bodySign + "&callerId=" + mercNo + "&time=" + time + "&traceId=" + traceId;
    String headerSign = RSAUtils.signByRSAWithPSS(headerSourceData, priKey);
    payMercAuth.setHeaderSign(headerSign);
    payMercAuth.setBodySign(bodySign);
    String payMercAuthJsonStr = JSONObject.toJSONString(payMercAuth);
     
    String settleDetailUri = "/merchant/api/merc/v3/merchant/settle/detail/query";
    String url = DemoKeys.HW_SERVER_ADDR + settleDetailUri;
    String response = HttpURLHelper.sendHttpPost(url, payMercAuthJsonStr, bodySourceData);
    SettleDetailResponse responses = JSONObject.parseObject(response, SettleDetailResponse.class);
