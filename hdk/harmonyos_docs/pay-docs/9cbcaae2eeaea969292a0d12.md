---
name: document/cn/pay-docs/petalpay_app_5616_error_code-0000001274532734
title: 错误码
uri: https://developer.huawei.com/consumer/cn/doc/pay-docs/petalpay_app_5616_error_code-0000001274532734
source: portal
---

错误码 **错误码** | **值(String)** | **描述** | **解决办法**  
---|---|---|---  
PayResult. PAY_SUCCESS | 0 | 支付成功 | 不涉及  
PayResult. PAY_FAIL | -1 | 支付通用失败 | 请查看华为钱包版本  
PayResult. PAY_CANCEL | 30000 | 取消支付 | 重新调用支付接口  
PayResult. PAY_PARAM_ERROR | 30001 | 参数错误 | 检查请求参数长度、类型、签名算法是否符合要求  
PayResult. PAY_UNKNOWN | 30004 | 支付结果状态未知 | 支付请求处理中，稍后重试  
PayResult. PAY_ DUPLICATE_REQUEST | 30010 | 重复请求 | 不允许相同订单发送支付请求，请重新生成订单号后发送请求
