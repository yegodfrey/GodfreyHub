---
name: document/cn/other/news_scenarios-0000001262651236
title: 新闻资讯类场景
uri: https://developer.huawei.com/consumer/cn/doc/other/news_scenarios-0000001262651236
source: portal
---

# 新闻资讯类场景

新闻资讯类应用，本质是信息的聚合。各类首页和详情页是此类应用的典型核心场景。在折叠屏展开态中，首页需要进行延伸布局、重复布局等适配，以确保浏览效率更高或不降低；详情页需要进行布局的适配以确保核心信息完整。

#### 首页

#### [h2]（1）左右图文布局

此类布局常用于新闻等应用。有两种推荐的页面适配方式。

方式一：从折叠态到展开态，维持该页面的图文结构不变，内容从单列变为双列，标题栏通过延伸布局横向展示更多，底部页签增大间距。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161855.28567551378723273554648487267790:50530628094615:2800:740A114068684561F9319FEA7841DF0A15273FD44C0183C93D3B74D12CBD7043.png?needInitFileName=true?needInitFileName=true) 推荐（内容从单列变为双列）  
---  
  
方式二：从折叠态到展开态，维持该页面的图文结构不变，文本内容使用延伸布局横向显示更多内容。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161855.98403573266047219842341481309020:50530628094615:2800:0078DB63E46F586EF9B6FB29A053E1D8F2778A2C216CC52D94E9995290B68A76.png?needInitFileName=true?needInitFileName=true) 推荐（文本内容使用延伸布局）  
---  
![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161855.42996179441582774235097834800101:50530628094615:2800:E2CE2C3B989A2F8C6864A0D645CAC3A0717BF6C07A79403484EF72FFE58CDDEB.jpg?needInitFileName=true?needInitFileName=true) ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161856.08512161566985644403226128661195:50530628094615:2800:247C75C31E930FF9ABDA0F5663361090B82608A84A9E8D5B27741F3BF94DA56D.png?needInitFileName=true?needInitFileName=true) 不推荐（整体内容放大导致一屏幕显示信息太少，浏览效率低）  
  
#### [h2]（2）上下图文布局

此类布局常用于新闻等应用。

从折叠态到展开态，维持该页面的图文结构不变。带多张图片内容的，在展开态横向展示更多图片；仅单张图片内容的，在展开态图片居左/居右对齐。不建议在展开态直接将内容等比放大。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161856.02799752497902561527900356179213:50530628094615:2800:6B94469B7AFB8289E9F553DB905D6146FD680AED9BF7BEC1B5AA513A70D1D0D0.jpg?needInitFileName=true?needInitFileName=true) ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161857.11299361739626856008211046283722:50530628094615:2800:FE2F543324D7FD8985A7F360B41FEF82203E0D7D44C27AEEF0062DD5D12A5D51.png?needInitFileName=true?needInitFileName=true) 推荐（横向展示更多图片内容）  
---  
![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161857.79560548475554264913068447231937:50530628094615:2800:E840D2DC4451DCB5C469D9D24A7F22CFDE5BACF64DDCEA1CBA73EEC33923E020.jpg?needInitFileName=true?needInitFileName=true) ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161857.60118683257587683180577096278880:50530628094615:2800:984CB48BCD09147896F6C144E03B18973969CA29ACEBFCFFE20826F61C4680A5.png?needInitFileName=true?needInitFileName=true) 不推荐（直接等比放大，导致一屏幕显示信息太少）  
  
#### 详情页

#### [h2]（1）图文详情页

折叠屏展开态屏幕比折叠态和手机更宽，在详情页若直接等比放大图片，往往会导致图片占据过多屏幕空间，核心信息无法显示完整。因此，建议开发者通过限制图片的最大高度来优化用户体验。

主要建议包括：图片高度不要超过80%的屏幕高度；图片居中/居左/居右对齐，使其图文匹配更适合阅读；有多张图片内容的，横向平铺展示更多图片。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161857.70618950626538999229886608282350:50530628094615:2800:94619FE2D317E251D42285F65F4ACD54860538FCFF25474990B8552522B3C7F3.jpg?needInitFileName=true?needInitFileName=true) ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161858.82667851318470263449107046008886:50530628094615:2800:7D2D30EDEB36A93A30424044F3505D5CAC969C84DB0B752B0F2B83A8FF76B7C0.png?needInitFileName=true?needInitFileName=true) 推荐（图文详情页，单张图片居中对齐，不超过80%的屏幕高度）  
---  
![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161858.74758828231578672153176935759631:50530628094615:2800:10FCC77092316764BA1DD72EB35B0675310969EB364282200B49F54E65927E94.jpg?needInitFileName=true?needInitFileName=true) ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161859.91176805071139940120897589696282:50530628094615:2800:62B7CADDCF5D0BA31F4A9C1EA779BDB5E0F3EB457059EA87B1C6148AE7269731.png?needInitFileName=true?needInitFileName=true) 推荐（图文详情页，多张图片，向左右平铺显示，支持滑动）  
![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161859.69740194940656498432982696457560:50530628094615:2800:FF1C8EC1EB8797C54E6868CC847FDD94A728FA3EDDC3D031F0A5FC6DCB1437C0.jpg?needInitFileName=true?needInitFileName=true) ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161859.22992030613442739514111361720310:50530628094615:2800:15149A139D28B7EF609147F444970D0A565FB093DFC1AF9114AA52DBBC44B164.png?needInitFileName=true?needInitFileName=true) 不推荐（直接放大图片，导致核心信息一屏幕显示不全）  
  
#### [h2]（2）图片详情页

当用户想查看内容中的图片细节时，往往会点击图片查看详情。在图片详情页中，务必保证图片默认在一屏内显示完整。超长图等特殊情况除外。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161859.86550380263658229708043524881909:50530628094615:2800:08A56FBADB790B20A36E747C64A1AFFE23F525E772A111DA143CA34B707B5723.jpg?needInitFileName=true?needInitFileName=true) ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161900.92818270968937741583215899599739:50530628094615:2800:469D0BFDAB3A01DBC8697270A3070E81C7740AAC6DD997FD25BC70E5DF2A06CA.png?needInitFileName=true?needInitFileName=true) 推荐（保证图片默认在一屏幕内显示完整）  
---  
![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161900.56508950036484861708429325110842:50530628094615:2800:B92C72A50123510FCF328932ABD95353FEE67EE88C4C51CC9F1E019E46762E41.jpg?needInitFileName=true?needInitFileName=true) ![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20220629161901.84295127683630086394489269585700:50530628094615:2800:A0916ACAA039EBB772C183A0DA24121DED12021316EB2450642B4BAA0F707BDD.png?needInitFileName=true?needInitFileName=true) 不推荐（图片默认在一屏幕内显示不完整）
