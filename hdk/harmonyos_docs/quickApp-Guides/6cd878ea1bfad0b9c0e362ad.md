---
name: document/cn/quickApp-Guides/quickapp-applet-sandbox-test-0000001161741241
title: 沙盒测试
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-applet-sandbox-test-0000001161741241
source: portal
---

沙盒测试 沙盒测试允许开发者在接入应用内支付服务联调过程中无需真实支付即可完成端到端的测试。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111531.14372906582282847574788002018287:50001231000000:2800:BCD412D0F7108DD7D231C8CBBFCF3E48208EB255994EC1F26FBD08226716A636.png) 目前沙盒测试功能要求测试设备必须安装3.0以上版本的HMSCore（APK）。 配置沙盒测试环境 在进行测试前，需要在AppGallery Connect中添加测试账号，这些测试账号都是真实的华为账号。详细内容请参见[管理测试账号](https://developer.huawei.com/consumer/cn/doc/app/agc-help-testaccount-0000001146438651)。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111531.19502275384255300507371979604473:50001231000000:2800:AD6150C20C0CD9353B93BAA8EAA5D0A5FA65E6E2865D37DB9FC96D2EF3B9769A.png) 沙盒测试账号添加完成之后需要30min~1h才能生效。使用时请检查当前的账号是否支持沙盒测试。 测试非订阅型商品支付 在设备上登录已配置的测试账号，打开测试应用。发起普通商品（非订阅型商品）购买时，IAP会检测到该用户为测试用户，跳过实际支付环节，直接支付成功。
    * 沙盒测试场景下的购买流程与正式环境的购买流程一致。
    * IAP购买成功后的收据信息中，会携带值为0的purchaseType字段，标识此次购买为沙盒测试的记录。
    * 当HMS Core（APK）版本小于4.0.2.300时，在沙盒环境下创建普通商品订单，本质是创建一个已经完成的支付订单，所以即使中途取消还是会成功购买这个商品。
    * 沙盒环境下购买非消耗型商品，购买之后可以执行消耗，之后可以再次购买，以方便测试。
    * 沙盒测试拉起收银台时会弹出沙盒环境标志的弹框，收银台和成功页也均有沙盒环境的标志，如下图所示。  ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111531.25244589902213353832754965673438:50001231000000:2800:D088EF91E46CCE48E222DF71B5645F23328E6C9CB70277E140BE2544D2BB249C.png) 如果未显示截图的提示页面，表示本次交易未进入沙盒测试环境，继续测试会实际扣费。请检查测试账号是否添加成功，也可以调用[qa.isSandboxActivated](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#section163918117591)来检查当前沙盒环境是否可用。
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111531.53322519430112814825451336001307:50001231000000:2800:EEA8CC45CC2913BC1B6DAA775414DE536955691FDEEC29FD6799DC083857A31D.png) ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111532.03211878216613865032686136922146:50001231000000:2800:EEBF2E0A3EF6E6FD1EBF9F897D76E17F7AD18889B51B7B296FFA2A630986FE9E.png) ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111532.91337146829923339657601972615000:50001231000000:2800:9BF421A7C9F22E38CD903AC9CD3B7CF0AAD98BE0F307E687DB72111A1944ED4D.png) 测试订阅商品续订 订阅商品的购买流程和普通商品的购买流程类似，但订阅还有其他细节场景，比如续订成功或失败，续订周期时长。为了快速测试应用的订阅场景，沙盒环境下的订阅续订时间会比正常情况更快，引入“**时光机** ”概念。“**时光机** ”仅针对订阅商品的续期时间，不影响订阅商品的生效时间（比如订阅周期为1周，商品在3分钟后发生续期，此时订阅商品有效期延长了1周）。 实际时限 |  测试时限  
---|---  
1周 |  3分钟  
1个月 |  5分钟  
2个月 |  10分钟  
3个月 |  15分钟  
6个月 |  30分钟  
1年 |  1小时  
    * 沙盒环境下发起订阅时仍需要完成签约或绑卡，但该过程不会真实扣费。
    * 自动续期处理不需要完成真实扣款，IAP会直接返回成功。
    * 订阅在沙盒场景下会自动续期6次，6次之后需要用户主动发起恢复订阅，恢复订阅一次，则订阅商品会再续期一次。
    * 沙盒测试拉起收银台时会弹出沙盒标志的弹框，收银台和成功页均有沙盒标志。
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111532.59083899241916567000086179920258:50001231000000:2800:83B70220F092F0182EBC874843D1099B6EA7E14AB1C618DA48225DA5CBFB7D18.png) 如果未显示截图的提示页面，表示本次交易未进入沙盒测试环境，继续测试会实际扣费。请检查测试账号是否添加成功，也可以调用[qa.isSandboxActivated](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwpayment-4-0000001079530786#section163918117591)来检查当前沙盒环境是否可用。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111532.07426029330818792796470747335861:50001231000000:2800:00F4A2D930755B10CB0A1DA159051E88F4A02060E99E876F826CDA543EE44DD8.png) ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111532.51687421908519423249911362784150:50001231000000:2800:8D6BEAF724602D824EF4005A3FACE914F8D5B30C84FD29D1C175DA4236921127.png) ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111532.67731656926529743753580796286051:50001231000000:2800:B22C98C16FF636CB55EA3C3062AF108455DCEB1AB0C111C67E8475556C0CF0FC.png)
