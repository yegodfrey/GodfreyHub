---
name: document/cn/HMSCore-Guides/payment-merchant-alloc-api-0000001586792264
title: API列表
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/payment-merchant-alloc-api-0000001586792264
---

# API列表

资金分账API列表  

|功能列表|描述|
|:------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|
|[申请分账](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-apply-alloc-0000001637437829#section95771727125814)|交易订单成功后，分账方商户调用此接口发起分账请求，将结算后的资金分账给指定的分账接收方。|
|[查询分账结果](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-query-alloc-result-sysallocorderno-0000001643538197#section1089114712582)|商户发起分账请求后，调用此接口查询订单分账状态。|
|[申请分账回收](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-apply-alloc-reclaim-0000001637638473#section95771727125814)|已经分账的订单，可以调用此接口将已分账的资金从分账接收方账户退回给分账方。|
|[查询分账回收结果](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-query-alloc-reclaim-result-to-sys-0000001593939474#section1089114712582)|商户想核实分账回退结果，可调用此接口查询分账回收的结果。|
|[解冻剩余可分账金额](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-alloc-finish-to-sys-0000001594257406#section1089114712582)|不需要再分账的订单，可调用此接口将订单剩余可分账金额全部解冻给收单商户。|
|[查询剩余可分账金额](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-query-alloc-amounts-to-sys-0000001643697605#section1089114712582)|调用此接口可查询订单剩余的可分账金额。|
|[分账结果回调通知](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-alloc-notify-result-0000001587278012#section10267412717)|华为支付服务器调用申请分账请求传入的callbackUrl回调接口，将分账成功消息通知给商户。|
|[分账回收结果回调通知](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-alloc-recaim-notify-result-0000001587437952#section10267412717)|华为支付服务器调用申请分账回收请求传入的callbackUrl回调接口，将分账回收成功消息通知给商户。|

