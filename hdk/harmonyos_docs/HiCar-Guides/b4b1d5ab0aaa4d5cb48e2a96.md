---
name: document/cn/HiCar-Guides/shared-internet-access-0000001067267549
title: 共享上网
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/shared-internet-access-0000001067267549
---

# 共享上网

## 场景说明

当车机和手机建立HiCar连接后，车机可以请求使用手机的网络进行共享上网。过程可简要描述为：

1. 车机通过HiCar SDK向HiCar App发送共享上网请求。
2. HiCar App根据用户的共享上网配置进行授权。
3. 如果用户配置不同意，则拒绝车机的共享上网请求，整个流程结束；如果用户配置同意则继续下一步。
4. HiCar App向车机发送共享上网配置信息。
5. 车机接收配置信息后，启动共享上网。
6. 结束共享上网分为两种场景：
   1. 车机侧主动结束：车机主动发送停止消息，HiCar App响应。
   2. 用户在手机侧主动结束：HiCar App主动发送停止消息，车机响应。

共享上网相关的数据格式说明请参考《HUAWEI HiCar SDK API参考》"HiCar App与车机间接口"中[共享上网](https://developer.huawei.com/consumer/cn/doc/HiCar-References/share-internet-access-0000001199459871)部分。

## 开发步骤

1. 手机和车机成功连接并投屏后，车机需要通过**HiCarSendData**接口向HiCar App发送共享上网请求。车机发送的数据内容示例如下：

   ```screen
   {
       "service":"net",
       "subService":"internetShare",
       "command":0,
       "data":{
           "enable":1
       }
   }
   ```

2. 根据用户侧授权情况，车机将收到来自HiCar App的响应。

   1. 用户授权通过，车机将通过**DataReceive** 回调方法收到共享上网的配置信息，示例如下所示：

      ```screen
      {
          "service":"net",
          "subService":"internetShare",
          "command":0,
          "errorCode":100000,
          "data":{
              "gateway":"192.168.1.100",
              "dns":"192.168.1.100"
          }
      }
      ```

   2. 用户未授权通过，车机将通过**DataReceive** 回调方法收到错误码信息，示例如下所示：

      ```screen
      {
          "service":"net",
          "subService":"internetShare",
          "command":0,
          "errorCode":100002
      }
      ```

3. 车机主动结束共享上网场景。

   1. 车机需要通过**HiCarSendData** 接口向HiCar App发送停止共享上网信息，示例如下所示：

      ```screen
      {
          "service":"net",
          "subService":"internetShare",
          "command":0,
          "data":{
              "enable":0
          }
      }
      ```

   2. HiCar App在收到上述信息后，会返回相应信息，示例如下所示：

      ```screen
      {
          "service":"net",
          "subService":"internetShare",
          "command":0,
          "errorCode":100000
      }
      ```

4. 手机侧主动结束共享上网场景。

   1. HiCar App通过**DataReceive** 回调方法发送停止共享上网信息，示例如下所示：

      ```screen
      {
          "service":"net",
          "subService":"internetShare",
          "command":1,
          "data":{
              "enable":0
          }
      }
      ```

   2. 车机在收到上述信息后，应通过**HiCarSendData** 接口向HiCar App发送响应信息，示例如下所示：

      ```screen
      {
          "service":"net",
          "subService":"internetShare",
          "command":1,
          "errorCode":100000
      }
      ```

