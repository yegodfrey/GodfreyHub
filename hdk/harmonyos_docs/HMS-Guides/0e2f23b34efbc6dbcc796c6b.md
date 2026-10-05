---
name: document/cn/HMS-Guides/wallet-guide-uistrings-loyaltycard
title: 会员卡
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/wallet-guide-uistrings-loyaltycard
source: portal
---

# 1 概述

会员卡，即将各类实体会员卡添加到华为钱包。用户可通过华为钱包随时查看会员所拥有的的权益（如积分，等级），享受会员卡所规定的各类优惠（折扣价预订服务/购买商品等）

Wallet Kit已提供会员卡接入华为钱包的能力，商户可通过多种方式轻松将卡劵集成到华为钱包中。

# 2 流程概览

接入所需步骤：

步骤| 分类| 动作| 用途说明  
---|---|---|---  
1| 开发准备| [配置AppGallery Connect](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-preparations-agc)| 配置申请Wallet Kit相关服务。  
2| [安全组件申请](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-preparations-scret)| 获取加密数据所需的秘钥或证书。  
3| [服务创建](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-preparations-server)| 创建Wallet Kit服务。  
4| 卡劵接入| 卡劵领取| 用户可以根据指导进行卡劵领取操作。  
卡劵更新| 用户可以根据指导进行卡劵更新操作。  
处理过期卡券| 卡劵过期功能指导。  
关联优惠| 通过此能力会员卡可关联优惠券。  
地理围栏通知| 用户到达商户地理围栏附近时弹出通知栏提醒用户。  
链接到已保存的卡券| 链接到已添加的卡劵详情。  
跨设备同步能力| 用户领取卡劵后可通过此能力在多账号下共享此卡劵。  
UI设计| 用户可以根据JSON串映射字段来定制界面显示内容。  
5| 开发后自检| [开发后自检](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-guide-checktool)| 华为提供对应用自动检查的能力。  
6| 上架申请| [上架申请](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-guide-apprelease)| 开发完成后需要在AppGallery Connect中将应用信息补充完整并提交上架申请。  
  
# 3 功能实现

## 3.1 卡劵领取

Wallet Kit提供两种卡劵领取方式，商户开发者可根据接入方式的媒介来选择适合自己的接入方式。

场景| 功能| 实现方法| 步骤  
---|---|---|---  
会员卡| 通过网页、短信、Email、App应用内领取卡劵| [网页集成“添加到华为钱包”按钮领取卡劵](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-guide-webpage)| 

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




示例代码中定义的模板和用户特有信息实例是以会员卡为示例进行介绍，如商户需推送会员卡请按照下方给出的示例重新定义模板及用户特有信息实例。

**推送模板信息至华为服务器**

接口请参考[会员卡模板请求示例](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/wallet-api-server-loyaltycard-1)。

HwWalletObject字段定义请参考[服务器API](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/wallet-api-server-hwWalletObject-1)。
      
      1. HwWalletObject hwWalletObject = new HwWalletObject(); 
        2. hwWalletObject.setFormatVersion("10.0");
        3. hwWalletObject.setOrganizationName("xxx");
        4. hwWalletObject.setPassStyleIdentifier("Loyalty001"); // 模板标识，唯一值 
        5. hwWalletObject.setPassTypeIdentifier("hwpass.loyalty.merchant"); // 注册时的服务号 
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
        17. CommonFields cardImage = new CommonFields();
        18. cardImage.setKey("backgroundImage");
        19. cardImage.setValue("https://www.xxx.com/.../cardImage.png"); // 商户会员卡卡面图片URI 
        20. commonFields.add(cardImage); 
        21. CommonFields logo = new CommonFields(); 
        22. logo.setKey("logo"); 
        23. logo.setValue("https://www.xxx.com/.../logo.png"); // 商户LOGO URI 
        24. commonFields.add(logo); 
        25. // 商户名称，含多语言样例，例如此处设置字符串id为merchantNameI18N，用于在Localized中获取对应语言取值进行展示 CommonFields merchantName = new CommonFields();
        26. merchantName.setKey("merchantName");
        27. merchantName.setValue("Some merchant name"); 
        28. merchantName.setLocalizedValue("merchantNameI18N");
        29. commonFields.add(merchantName); 
        30. // 卡片名称 
        31. CommonFields name = new CommonFields(); 
        32. name.setKey("name"); 
        33. name.setValue("Loyalty Card"); 
        34. commonFields.add(name); 
        35. fields.setCommonFields(commonFields); 
        36. List<AppendFields> appendFields = new ArrayList<>();
        37. AppendFields nearbyLocations = new AppendFields();
        38. nearbyLocations.setKey("nearbyLocations");
        39. nearbyLocations.setValue("https://www.xxx.com/.../nearbyLocation.html"); // 附近门店地址URI 
        40. nearbyLocations.setLabel("Nearby Locations"); 
        41. appendFields.add(nearbyLocations); 
        42. AppendFields website = new AppendFields(); 
        43. website.setKey("website"); 
        44. website.setValue("https://www.xxx.com/.../merchantMainPage.html"); // 商户主页URI 
        45. website.setLabel("Website"); 
        46. appendFields.add(website); 
        47. AppendFields hotline = new AppendFields(); 
        48. hotline.setKey("hotline"); 
        49. hotline.setValue("400820XXXX"); // 商户热线 
        50. hotline.setLabel("Hotline"); 
        51. appendFields.add(hotline); 
        52. fields.setAppendFields(appendFields); 
        53. List<ValueObject> imageList = new ArrayList<>(); 
        54. ValueObject imagePic = new ValueObject(); 
        55. imagePic.setValue("https://www.xxx.com/.../banner.png"); // 推广图片
        56. imageList.add(imagePic); 
        57. fields.setImageList(imageList); 
        58. List<Localized> localizedList = new ArrayList<>(); 
        59. // 商户中文名称，例如中文语言时，通过上面指定的字符串Id merchantNameI18N匹配到此Value用于展示 
        60. Localized merchantNameChinese = new Localized();
        61. merchantNameChinese.setKey("merchantNameI18N");
        62. merchantNameChinese.setLanguage("zh-CN");
        63. merchantNameChinese.setValue("Merchant name in Chinese"); 
        64. localizedList.add(merchantNameChinese); 
        65. // 商户英文名称，例如英文语言时，通过上面指定的字符串Id merchantNameI18N匹配到此Value用于展示 
        66. Localized merchantNameEnglish = new Localized();
        67. merchantNameEnglish.setKey("merchantNameI18N");
        68. merchantNameEnglish.setLanguage("en-GB");
        69. merchantNameEnglish.setValue("Merchant name in English"); 
        70. localizedList.add(merchantNameEnglish); 
        71. fields.setLocalized(localizedList); 
        72. hwWalletObject.setFields(fields);
    
    

通过如下POST接口推送到华为服务器
      
      1. POST 
        2. https://{walletkit_server_url}/hmspass/v1/loyalty/model
    
    

**定义用户特有信息的实例**

接口定义请参考[会员卡实例请求示例](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/wallet-api-server-loyaltycard-7)。
      
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
        13. // 关联优惠券，填入关联优惠券的模板和实例标识 
        14. List<LinkedPassId> relatedPassIds = new ArrayList<>();
        15. LinkedPassId linkedCoupon = new LinkedPassId();
        16. linkedCoupon.setTypeId("Coupon template id"); 
        17. linkedCoupon.setId("Coupon instance id");
        18. relatedPassIds.add(linkedCoupon); 
        19. fields.setRelatedPassIds(relatedPassIdss); 
        20. // 条形码/二维码 
        21. BarCode barCode = new BarCode(); 
        22. barCode.setText("Refresh every ten minutes"); 
        23. barCode.setType("codabar"); // codabar or qrCode 
        24. barCode.setValue("829383819844342342");
        25. fields.setBarCode(barCode); 
        26. List<CommonFields> commonFields = new ArrayList<>(); 
        27. // 会员名称，含多语言样例 
        28. CommonFields accountName = new CommonFields();
        29. accountName.setKey("accountName");
        30. accountName.setValue("Member name");
        31. accountName.setLocalizedValue("accountName18N");
        32. commonFields.add(accountName); 
        33. // 卡号 
        34. CommonFields cardNumber = new CommonFields();
        35. cardNumber.setKey("cardNumber"); 
        36. cardNumber.setValue("4527809736");
        37. commonFields.add(cardNumber); 
        38. fields.setCommonFields(commonFields); 
        39. List<AppendFields> appendFields = new ArrayList<>(); 
        40. // 会员积分 
        41. AppendFields points = new AppendFields(); 
        42. points.setKey("points"); 
        43. points.setLabel("Points"); 
        44. points.setValue("1299"); 
        45. appendFields.add(points); 
        46. AppendFields balance = new AppendFields(); 
        47. balance.setKey("balance"); 
        48. balance.setValue("$19"); 
        49. balance.setLabel("Balance"); 
        50. appendFields.add(balance); 
        51. // 等级 
        52. AppendFields level = new AppendFields(); 
        53. level.setKey("level"); 
        54. level.setValue("Gloden"); 
        55. level.setLabel("Level"); 
        56. appendFields.add(level); 
        57. fields.setAppendFields(appendFields); 
        58. List<Localized> localizedList = new ArrayList<>(); 
        59. // 会员中文名称 
        60. Localized accountNameChinese = new Localized();
        61. accountNameChinese.setKey("accountName18N");
        62. accountNameChinese.setLanguage("zh-CN");
        63. accountNameChinese.setValue("Member name in Chinese"); 
        64. localizedList.add(accountNameChinese); 
        65. // 会员英文名称 
        66. Localized accountNameEnglish = new Localized();
        67. accountNameEnglish.setKey("accountName18N");
        68. accountNameEnglish.setLanguage("en-GB");
        69. accountNameEnglish.setValue("Member name in English"); 
        70. localizedList.add(accountNameEnglish); 
        71. fields.setImageList(localizedList); 
        72. hwWalletObject.setFields(fields);
    
    

## 3.2 卡劵更新

  * 网页、短信、Email、App应用内方式更新卡劵




请参考“[调用华为服务器接口更新卡劵](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/guide-update-jwe-card)”章节来实现卡劵更新操作。

更新会员卡模板接口地址如下，请更换示例代码中的接口地址。
      
      1. url：https://xxx/hmspass/v1/loyalty/model/{modelId}
    
    

更新会员卡用户特有信息的实例（Instance）接口地址如下，请更换示例代码中的接口地址。  

      
      1. url：https://xxx/hmspass/v1/loyalty/instance/{instanceId}
    
    

  * App应用内、快应用、华为钱包CardStore方式更新卡劵




如果需要更新卡劵请参考“[商户服务器实现接口更新卡劵](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-guide-pushpass)”方式来实现卡劵更新功能。

注：此方式当前仅支持中国大陆区域。

## 3.3 处理过期卡券

在钱包应用的卡券详情页下如果卡劵已过期则会自动标记一个过期的Icon，其中包含所有已归档或无效的卡券。如果卡券至少满足下列一个条件，系统就会将其移至“过期卡券”部分。

在 PassObject.Status.expireTime过期后的 24 小时内，卡券会随时移至“过期卡券”。

PassObject.Status.state字段标记为Expired、Inactive或Complete。

## 3.4 关联优惠

商户可以在设置Instance信息时将优惠和会员卡进行关联。
      
      1. HwWalletObject hwWalletObject = new HwWalletObject(); 
        2. Fields fields = new Fields();
        3. …..
        4. // 关联优惠券，填入关联优惠券的模板和实例标识 
        5. List<LinkedPassId> relatedPassIds = new ArrayList<>(); 
        6. LinkedPassId linkedCoupon = new LinkedPassId();
        7. linkedCoupon.setTypeId("Coupon template id"); 
        8. linkedCoupon.setId("Coupon instance id");
        9. relatedPassIds.add(linkedCoupon); 
        10. fields.setRelatedPassIds(relatedPassIdss);
        11. ……hwWalletObject.setFields(fields);
    
    

## 3.5 地理围栏通知

当前地理围栏通知暂时只支持通过REST API方式添加的卡劵。

### **3.5.1 地理围栏概念**

基于华为定位能力，当用户通过REST API接口在模板中设置LocationList时，当前卡劵即具备了地理围栏通知的能力，当用户距离设定的目标200米范围内即可触发地理围栏通知。

每种卡劵每天最多通知5次，超过次数当天不会再下发地理围栏通知。

### **3.5.2 使用REST API****接口添加地理围栏坐标**

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
    
    

## 3.6 链接到已保存的卡券

用户保存某张卡券后，可以通过以下地址查看该卡劵：
      
      1. https//:{walletkit_website_url}/walletkit/consumer/pass/instance?issuerId=xxx&instanceId=xxxx
    
    

请求地址中的 _{walletkit_website_url}_ 变量需要开发者根据服务器所属区域自行选择，列表如下：

地区| 域名  
---|---  
China| walletpass-drcn.cloud.huawei.com  
Russia| walletpass-drru.cloud.huawei.com  
Asia, Africa, and Latin America| walletpass-dra.cloud.huawei.com  
Europe| walletpass-dre.cloud.huawei.com  
  
## 3.7 跨设备同步能力

当前能力只开放给通过“App应用内、快应用、华为钱包CardStore方式”添加的卡劵。

通过卡劵包添加时卡片是以端到端的形式将卡劵保存到华为钱包，华为服务器没有保存用户推送的卡劵，所以无法做到账号间共享。如果商户需要实现账号间共享卡劵能力则需要实现Wallet Kit提供的托管能力。

  * 在开发者联盟开放跨设备同步能力。




在“接入准备”-“服务创建”章节配置应用数据时可以选择是否开放跨设备同步能力，此时商户如果想实现此功能则需要开通此服务。

![](http://10.116.132.176:8080/idp-edit-service/editor/image/1032914/1_zh-cn_image_0000001050167523.jpg)

  


  * 实现下载卡劵包接口。




商户打开跨设备同步能力后，当商户推送卡劵到华为钱包时，华为钱包会将卡劵部分信息托管至华为服务器（只上传下载卡劵的部分信息）。当用户在当前账号下的其他设备登录时，华为钱包应用会去商户服务器下载已领取过的卡劵包，商户服务器需实现“[商户服务器实现接口更新卡劵](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/wallet-guide-pushpass)”步骤供华为钱包调用下载卡劵包。

# 4 UI设计

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200226181034.87855467107092388639472566739735:50510603111338:2800:4C4AB4BDC421614BE77F1EA72DAE6BDC00803482F5C816854B7EF43AC7E8C90E.png?needInitFileName=true)

  


编号| 名称| JSON串映射字段| 注释| 说明  
---|---|---|---|---  
1| 卡面底图| fields.commonFields[key=  backgroundImage]| 图片规格：1248*780px大小：小于等于40kb| value传入图片URI  
2| 卡面LOGO| fields.commonFields[key=  logo]| 图片规格：90*90px大小：小于等于20kb| value传入图片URI  
3| 商户名称| fields.commonFields[key=  merchantName]| 长度：小于256字节| 1\.  value传入默认取值2\.  value支持多语言，在localizedValue设置字符串Id，并在fields.localized[key="字符串Id"]处设置各个语言的取值  
4| 卡名称| fields.commonFields[key=  name]| 长度：小于256字节| 1\.  value传入默认取值2\.  value支持多语言  
5| 卡号| fields.commonFields[key=  cardNumber]| 长度：小于256字节限制:不允许有特殊字符| 卡号  
6| 余额| fields.appendFields[key=  balance]| 长度：小于256字节限制:数字| 1\.  会员卡余额，取值直接展示2\.  label支持多语言  
7| 关联优惠券| fields.relatedPassIds| 长度：小于256字节限制:不允许有特殊字符| 1\.  仅在会员卡详情展示2\.  展示数量为本地实际存在且状态为生效的优惠券数量3\.  点击可以查看关联的优惠券列表4\.  label为固定值优惠券  
8| 积分| fields.appendFields[key=  points]| 长度：小于256字节限制:数字| 1\.  会员积分，取值直接展示2\.  label支持多语言  
9| 条形/二维码| fields.barCode.typefields.barCode.value| 长度：小于256字节| 1\.  type为codabar时，展示条形码，取值为qrCode展示二维码2\.  取值为fields.barCode.value  
10| 备注说明| fields.barCode.text| 长度：小于256字节| 条形/二维码下内容  
11| 会员名| fields.commonFields[key=  memberName]| 长度：小于256字节| 1\.  label支持多语言2\.  value支持多语言  
12| 会员卡号| fields.commonFields[key=  cardNumber]| 长度：小于256字节| label支持多语言  
13| 会员等级| fields.appendFields[key=  level]| 长度：小于256字节| 1\.  label支持多语言2\.  value支持多语言  
14| 消息| fields.messageList| 长度：小于256字节| 1\.  获取第一条消息展示2\.  label支持多语言3\.  value支持多语言  
15| 轮播图| fields.imageList| 限制：尺寸保持一致| 多张图片时，在华为钱包详情页面自动轮播  
16| 附近门店| fields.appendFields[key=  nearbyLocations]| 长度：小于256字节| 1\.  label支持多语言2\.  value为跳转URI  
17| 主页| fields.appendFields[key=  website]| 长度：小于256字节| 1\.  label支持多语言2\.  value为跳转URI  
18| 热线电话| fields.appendFields[key=  hotline]| 长度：小于256字节| 1\.  label支持多语言2\.  value为电话号码  
  
  

