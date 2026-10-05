---
name: document/cn/HMS-Guides/wallet-guide-uistrings-giftcard
title: 礼品卡
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/wallet-guide-uistrings-giftcard
source: portal
---

# 1 概述

礼品卡，即由商家发行的在指定商户和时间段内进行消费的预付费卡（如商超礼品卡等）。用户通过购买特定面额的礼品卡，并在结算时出示礼品卡所对应的付款码，即可完成消费。

Wallet Kit已提供礼品卡接入华为钱包的能力，商户可通过多种方式轻松将卡劵集成到华为钱包中。

# 2 流程概览

接入所需步骤：

步骤| 分类| 动作| 用途说明  
---|---|---|---  
1| 开发准备| [配置AppGallery Connect](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-preparations-agc)| 配置申请Wallet Kit相关服务。  
2| [安全组件申请](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-preparations-scret)| 获取加密数据所需的秘钥或证书。  
3| [服务创建](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-preparations-server)| 创建Wallet Kit服务。  
4| 卡劵接入| 卡劵领取| 用户可以根据指导进行卡劵领取操作。  
卡劵更新| 用户可以根据指导进行卡劵更新操作。  
处理过期卡券| 卡劵过期功能指导。  
地理围栏通知| 用户到达商户地理围栏附近时弹出通知栏提醒用户。  
链接到已保存的卡券| 链接到已添加的卡劵详情。  
跨设备同步能力| 用户领取卡劵后可通过此能力在多账号下共享此卡劵。  
UI设计| 用户可以根据JSON串映射字段来定制界面显示内容。  
5| 开发后自检| [开发后自检](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-guide-checktool)| 华为提供对应用自动检查的能力。  
6| 上架申请| [上架申请](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-guide-apprelease)| 开发完成后需要在AppGallery Connect中将应用信息补充完整并提交上架申请。  
  
# 3 功能实现

## 3.1 卡劵领取

Wallet Kit提供两种卡劵领取方式，商户开发者可根据接入方式的媒介来选择适合自己的接入方式。

场景| 功能| 实现方法| 步骤  
---|---|---|---  
礼品卡| 通过网页、短信、Email、App应用内领取卡劵| [网页集成“添加到华为钱包”按钮领取卡劵](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-guide-webpage)| 

  1. 模板推送至华为服务器，代码参考
  2. 实例用密钥加密为JWE数据推送给用户

注：模板为用户共有的字段信息，所有用户将共同享有模板信息字段，如logo、merchantName等。注：实例为用户特有的字段信息，如cardNumber。如果实例和模板中有相同字段则实例信息将覆盖模板信息内容。  
[在应用中集成链接领取卡劵](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-guide-app)  
[短信/邮件跳转链接领取卡券](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-guide-deeplink)  
[App应用集成Wallet Kit SDK后推送JWE数据到华为服务器](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-guide-integratingsdk)  
App应用内、快应用、华为钱包CardStore方式领取卡劵注：此方式当前仅支持中国大陆区域| [App应用集成Wallet Kit SDK后推送卡劵包到华为钱包应用](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/guide-app-sdk)| 

  1. 商户通过服务器示例代码生成卡劵包
  2. 推送给华为钱包应用

  
[伙伴快应用方式领取卡劵](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-guide-addcard-quickapp)  
[在华为钱包CardStore领取卡劵](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-guide-addcard-cardstore)  
  
  * 网页、短信、Email、App应用内领取卡劵




开发场景介绍中定义的模板和用户特有信息实例是以会员卡为示例进行介绍，如商户需推送礼品卡请按照下方给出的示例重新定义模板及用户特有信息实例。

**推送模板信息至华为服务器**

接口定义请参考[礼品卡模板请求示例](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/wallet-api-server-giftcard-1)。

HwWalletObject字段定义请参考[服务器API](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/wallet-api-server-hwWalletObject-1)。
      
      1. HwWalletObject hwWalletObject = new HwWalletObject(); 
        2. hwWalletObject.setFormatVersion("10.0"); 
        3. hwWalletObject.setOrganizationName("xxx");
        4. hwWalletObject.setPassStyleIdentifier("gift001"); // 模板标识，唯一值 
        5. hwWalletObject.setPassTypeIdentifier("hwpass.gift.merchant"); // 注册时的服务号 
        6. hwWalletObject.setWebServiceURL("https://www.xxx.com"); // 用户领取卡券时的回调地址 
        7. Fields fields = new Fields(); 
        8. fields.setCountryCode("CN"); 
        9. // 地理围栏信息 
        10. List<Location> locationList = new ArrayList<>(); 
        11. Location location = new Location(); 
        12. location.setLongitude("11x.0679603815"); 
        13. location.setLatitude("2x.6592051284"); 
        14. locationList.add(location); 
        15. fields.setLocationList(locationList); 
        16. List<CommonFields> commonFields = new ArrayList<>(); 
        17. CommonFields eventNumber = new CommonFields(); 
        18. eventNumber.setKey("eventNumber"); 
        19. eventNumber.setValue("MU2887");
        20. eventNumber.setLabel("Event Number");
        21. commonFields.add(eventNumber); 
        22. CommonFields logo = new CommonFields();
        23. logo.setKey("logo");
        24. logo.setValue("https://www.xxx.com/.../logo.png"); // 商户LOGO URI
        25. commonFields.add(logo);
        26. // 商户名称，含多语言样例，例如此处设置字符串id为merchantNameI18N，用于在Localized中获取对应语言取值进行展示
        27. CommonFields merchantName = new CommonFields();
        28. merchantName.setKey("merchantName");
        29. merchantName.setValue("Some merchant name");
        30. merchantName.setLocalizedValue("merchantNameI18N");
        31. commonFields.add(merchantName);
        32. CommonFields name = new CommonFields();
        33. name.setKey("name");
        34. name.setValue("Gift Card");
        35. commonFields.add(name);
        36. List<AppendFields> appendFields = new ArrayList<>();
        37. AppendFields backgroundColor = new AppendFields();
        38. backgroundColor.setKey("backgroundColor");
        39. backgroundColor.setValue("#FF1C2635"); // 背景颜色
        40. appendFields.add(backgroundColor);
        41. AppendFields hotline = new AppendFields();
        42. hotline.setKey("hotline");
        43. hotline.setValue("8006011450");
        44. appendFields.add(hotline);
        45. AppendFields website = new AppendFields();
        46. website.setKey("website");
        47. website.setValue("https://www.huawei.com");
        48. appendFields.add(website);
        49. fields.setAppendFields(appendFields);
        50. List<ValueObject> imageList = new ArrayList<>();
        51. ValueObject imagePic = new ValueObject();
        52. imagePic.setValue("https://www.xxx.com/.../banner.png"); // 推广图片
        53. imageList.add(imagePic);
        54. fields.setImageList(imageList);
        55. List<ValueObject> messageList = new ArrayList<>();
        56. ValueObject message = new ValueObject();
        57. message.setKey("message[0]");
        58. message.setLabel("Welcome");
        59. message.setValue("Welcome to use this gift card.");
        60. messageList.add(message);
        61. fields.setMessageList(messageList);
        62. List<Localized> localizedList = new ArrayList<>();
        63. // 商户中文名称，例如中文语言时，通过上面指定的字符串Id merchantNameI18N匹配到此Value用于展示
        64. Localized merchantNameChinese = new Localized();
        65. merchantNameChinese.setKey("merchantNameI18N");
        66. merchantNameChinese.setLanguage("zh-CN");
        67. merchantNameChinese.setValue("Merchant name in Chinese");
        68. localizedList.add(merchantNameChinese);
        69. fields.setLocalized(localizedList);
        70. hwWalletObject.setFields(fields);
    
    

通过如下POST接口推送到华为服务器
      
      1. POST 
        2. https://{walletkit_server_url}/hmspass/v1/gift/model
    
    

**定义用户特有信息的实例**

接口定义请参考[礼品卡实例请求示例](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/wallet-api-server-giftcard-7)。
      
      1. HwWalletObject hwWalletObject = new HwWalletObject(); 
        2. hwWalletObject.setSerialNumber("854687156"); // 实例唯一标识，在模板下唯一
        3. hwWalletObject.setPassStyleIdentifier("Loyalty001"); // 模板标识，唯一
        4. hwWalletObject.setOrganizationPassId("1231");
        5. hwWalletObject.setPassTypeIdentifier("hwpass.loyalty.merchant"); // 注册时的服务号
        6. Fields fields = new Fields(); 
        7. // 状态，生效卡片才能添加
        8. Status status = new Status(); 
        9. status.setState("active"); 
        10. status.setEffectTime("2019-11-11T00:00:00.000Z"); 
        11. status.setExpireTime("2029-11-10T23:59:59.999Z"); 
        12. fields.setStatus(status); 
        13. // 条形码/二维码
        14. BarCode barCode = new BarCode(); 
        15. barCode.setText("Refresh every ten minutes"); 
        16. barCode.setType("codabar"); // codabar or qrCode 
        17. barCode.setValue("829383819844342342"); 
        18. fields.setBarCode(barCode); 
        19. List<CommonFields> commonFields = new ArrayList<>(); 
        20. CommonFields cardNumber = new CommonFields(); 
        21. cardNumber.setKey("cardNumber"); 
        22. cardNumber.setValue("23542543523");
        23. commonFields.add(cardNumber); 
        24. CommonFields balance = new CommonFields(); 
        25. balance.setKey("balance"); 
        26. balance.setValue("$199");
        27. commonFields.add(balance); 
        28. CommonFields balanceRefreshTime = new CommonFields(); 
        29. balanceRefreshTime.setKey("balanceRefreshTime"); 
        30. balanceRefreshTime.setValue("Thursday, Dec 12,2018"); 
        31. commonFields.add(balanceRefreshTime); 
        32. CommonFields pin = new CommonFields(); 
        33. pin.setKey("pin"); 
        34. pin.setValue("118.91"); 
        35. commonFields.add(pin); 
        36. hwWalletObject.setFields(fields);
    
    

## 3.2 卡劵更新

  * 网页、短信、Email、App应用内方式更新卡劵




请参考“[调用华为服务器接口更新卡劵](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/guide-update-jwe-card)”章节来实现卡劵更新操作。

更新会员卡模板接口地址如下，请更换示例代码中的接口地址。
      
      1. url：https://xxx/hmspass/v1/gift/model/{modelId}
    
    

更新会员卡用户特有信息的实例（Instance）接口地址如下，请更换示例代码中的接口地址。  

      
      1. url：https://xxx/hmspass/v1/gift/instance/{instanceId}
    
    

  * App应用内、快应用、华为钱包CardStore方式领取卡劵




如果需要更新卡劵请参考“[商户服务器实现接口更新卡劵](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/guide-update-jwe-card)”方式来实现卡劵更新操作。.

注：此方式当前仅支持中国大陆区域。

## 3.3 处理过期卡券

在钱包应用的卡券详情页下如果卡劵已过期则会自动标记一个过期的Icon，其中包含所有已归档或无效的卡券。如果卡券至少满足下列一个条件，系统就会将其移至“过期卡券”部分。在 PassObject.Status.expireTime过期后的 24 小时内，卡券会随时移至“过期卡券”。

PassObject.Status.state字段标记为Expired、Inactive或Complete。

## 3.4 地理围栏通知

当前地理围栏通知暂时只支持通过REST API方式添加的卡劵。

### **3.4.1 地理围栏概念**

基于华为定位能力，当用户通过REST API接口在模板中设置LocationList时，当前卡劵即具备了地理围栏通知的能力，当用户距离设定的目标200米范围内即可触发地理围栏通知。

注：每种卡劵每天最多通知5次，超过次数当天不会再下发地理围栏通知。

### **3.4.2 使用REST API****接口添加地理围栏坐标**

定义模板信息时商户可设置LocationList，每个模板LocationList最多可设置3个目标点。
      
      1. HwWalletObject hwWalletObject = new HwWalletObject(); 
        2. …..
        3. // 地理围栏信息 
        4. List<Location> locationList = new ArrayList<>(); 
        5. Location location = new Location(); 
        6. location.setLongitude("11x.0679603815");
        7. location.setLatitude("2x.6592051284");
        8. locationList.add(location); 
        9. fields.setLocationList(locationList); 
        10. ……
        11. hwWalletObject.setFields(fields);
    
    

## 3.5 链接到已保存的卡券

用户保存某张卡券后，可以通过以下地址查看该卡劵：
    
    
    https//:{walletkit_website_url}/walletkit/consumer/pass/instance?issuerId=xxx&instanceId=xxxx

请求地址中的 _{walletkit_website_url}_ 变量需要开发者根据服务器所属区域自行选择，列表如下：

地区| 域名  
---|---  
China| walletpass-drcn.cloud.huawei.com  
Russia| walletpass-drru.cloud.huawei.com  
Asia, Africa, and Latin America| walletpass-dra.cloud.huawei.com  
Europe| walletpass-dre.cloud.huawei.com  
  
## 3.4 跨设备同步能力

当前能力只开放给通过“App应用内、快应用、华为钱包CardStore方式”添加的卡劵。

通过卡劵包添加时卡片是以端到端的形式将卡劵保存到华为钱包，华为服务器没有保存用户推送的卡劵，所以无法做到账号间共享。如果商户需要实现账号间共享卡劵能力则需要实现Wallet Kit提供的托管能力。

  * 在开发者联盟开放跨设备同步能力。




在“接入准备”-“服务创建”章节配置应用数据时可以选择是否开放跨设备同步能力，此时商户如果想实现此功能则需要开通此服务。

![](http://10.116.132.176:8080/idp-edit-service/editor/image/1032914/1_zh-cn_image_0000001050167523.jpg)

  * 实现下载卡劵包接口。




商户打开跨设备同步能力后，当商户推送卡劵到华为钱包时，华为钱包会将卡劵部分信息托管至华为服务器（只上传下载卡劵的部分信息）。当用户在当前账号下的其他设备登录时，华为钱包应用会去商户服务器下载已领取过的卡劵包，商户服务器需实现“[商户服务器实现接口更新卡劵](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-guide-pushpass)”步骤供华为钱包调用下载卡劵包。

# 4 UI设计  


![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200226181528.89496327794546930702307980201637:50510603111339:2800:E2F571704996A2F18086A8084AF0A10DDE003204963C1B71499CD55B515480D8.png?needInitFileName=true)

  


编号| 名称| JSON串映射字段| 注释| 说明  
---|---|---|---|---  
1| 卡面底图| fields.commonFields[key= backgroundImage]| 图片规格：1248*780px大小：小于等于40kb| value传入图片URI  
2| 卡面LOGO| fields.commonFields[key= logo]| 图片规格：90*90px大小：小于等于20kb| value传入图片URI  
3| 商户名称| fields.commonFields[key= merchantName]| 长度：小于256字节| 1\. value传入默认取值2\. value支持多语言，在localizedValue设置字符串Id，并在fields.localized[key="字符串Id"]处设置各个语言的取值  
4| 卡名称| fields.commonFields[key= name]| 长度：小于256字节| 1\. value传入默认取值2\. value支持多语言  
5| 卡号| fields.commonFields[key= cardNumber]| 长度：小于256字节限制:不允许特殊字符| 卡号  
6| 余额| fields.commonFields[key = balance]| 长度：小于256字节限制:数字| 1\. 礼品卡余额，取值直接展示2\. label支持多语言  
7| 条形/二维码| fields.barCode.typefields.barCode.value| 长度：小于256字节| 1\. type为codabar时，展示条形码，取值为qrCode展示二维码2\. 取值为fields.barCode.value  
8| 备注说明| fields.barCode.text| 长度：小于256字节| 条形/二维码下内容  
9| 余额更新时间| fields.commonFields[key =  balanceRefreshTime]| 长度：小于256字节| 1\.  label支持多语言2\.  传入UTC时间，格式为格式为yyyy-MM-ddTHH:mm:ss.SSSZ  
10| PIN码| fields.commonFields[key = pin]| 长度：小于256字节| label支持多语言  
11| 活动编码| fields.appendFields[key = eventNumber]| 长度：小于256字节| label支持多语言  
12| 消息| fields.messageList| 长度：小于256字节| 1\. 获取第一条消息展示2\. label支持多语言3\. value支持多语言  
13| 轮播图| fields.imageList| 长度：小于256字节限制:所有轮播图尺寸保持一致| 多张图片时，在华为钱包详情页面自动轮播  
14| 附近门店| fields.appendFields[key= nearbyLocations]| 长度：小于256字节| 1\. label支持多语言2\. value为跳转URI  
15| 主页| fields.appendFields[key= website]| 长度：小于256字节| 1\. label支持多语言2\. value为跳转URI  
16| 热线电话| fields.appendFields[key= hotline]| 长度：小于256字节| 1\. label支持多语言2\. value为电话号码  
  
  

