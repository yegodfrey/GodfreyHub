---
name: document/cn/AppGallery-connect-Guides/harmonyos-arkts-call-func-0000001633454686
title: 调用函数
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/harmonyos-arkts-call-func-0000001633454686
---

# 调用函数

## 查询函数名和版本号

当您在创建的函数或函数别名中创建了一个HTTP类型的触发器后，在应用客户端调用函数时需要传入函数名和版本号，查询方法如下：

在函数的触发器页面点击"HTTP触发器"，查看"触发URL"的后缀，获取触发器的标识，格式为"函数名-版本号"。如下图所示，"myhandlerxxxx-$latest"即为HTTP触发器标识，其中"myhandlerxxxx"为函数名，"$latest"为版本号。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20241106152655.55953008369649246223441220895938:50001231000000:2800:15E54A3902494DEA5B80A9AC133E480AF1BF62D4B0C5BBA8944BB69BA7C8D195.png?needInitFileName=true?needInitFileName=true)

## 调用函数

应用集成了云函数SDK后，可以在应用内直接通过SDK API调用AGC中的云函数，云函数SDK与AGC的函数调用基于HTTPS的安全访问。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20241106152656.50034287809014276103682466911342:50001231000000:2800:C9B40E797EC57BA07E0534D6F9473507A9D8DF0712D23648A869509FDE15B514.png?needInitFileName=true?needInitFileName=true)

1. 调用[callFunction](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agccore-harmonyos-arkts-package-cloud-0000001635513476#section208869481431)方法设置函数，在方法中传入函数名称和函数版本，返回得到可执行结果。
2. （可选）可以通过设置timeout属性对云函数设置超时时长，单位为毫秒。
3. 如果函数有入参，可以将param参数转化为JSON对象或JSON字符串传入，如果没有参数则不传。 其中HTTP触发器传递给函数的数据格式，请参见[event对象说明](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudfunction-trigger-event-0000001620581529#section12463185072710)。

   ```screen
   let functionResult = await cloud.callFunction({
      name:"myhandlerxxxx",
      params:{
       "param1":"val1",
       "param2":"val2"
      }
   });
   ```

   > 注意
   >
   > 调用[callFunction](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agccore-harmonyos-arkts-package-cloud-0000001635513476#section208869481431)方法时支持对[FunctionOptions](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/arkts-cloudfunction-functionoptions-0000001676683049)进行配置，比如函数名称、函数版本号、函数执行超时时间、函数参数等。
   >
   > ```screen
   > let functionResult = await cloud.callFunction({
   >    name:"myhandlerxxxx",
   >    version:"17", //如果不传入版本号，默认为"$latest"。
   > timeout:10*1000,//单位为毫秒，默认为70*1000毫秒。
   >    params:{
   >     "param1":"val1",
   >     "param2":"val2"
   >    }
   > });
   > ```

4. 如果您需要关注函数的返回值，可调用[getValue](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/arkts-cloudfunction-functionresult-0000001628003412#section129183595453)方法获取。

   ```screen
   let returnValue = functionResult.getValue();
   ```

