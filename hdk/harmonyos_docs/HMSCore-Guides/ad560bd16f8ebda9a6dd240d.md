---
name: document/cn/HMSCore-Guides/huaweisead-0000001178866159
title: SEAD联运投放平台
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/huaweisead-0000001178866159
source: portal
---

# SEAD联运投放平台

如果您已在DTM配置了“SEAD联运投放平台”代码，SEAD联运投放平台将使用DTM来跟踪网站上的转化数据，当用户通过点击文字、图片广告或观看视频广告并参与您的广告互动时，SEAD联运投放平台会在落地页的URL中自动添加广告跟踪参数（“tracking_url”），当用户在您的落地页进行操作时，DTM会将相应转化信息以及URL中携带的广告跟踪参数发送回SEAD联运投放平台。

如果您的网站在特殊场景下，需要停止向SEAD联运投放平台上报转化信息（例如仅在获得用户Cookie Consent同意后，才允许DTM向SEAD联运投放平台上报转化信息），详情请参见停止向SEAD联运投放平台上报转化信息。

如果您的网站有多级页面或者跨网域，在从落地页跳转到其他子页面过程中，URL中的广告跟踪参数可能会丢失，将导致无法跟踪其他子页面中的转化信息。因此，您需要在DTM中配置跟踪链接器代码，以便将广告参数从落地页传递到二级、三级页面，确保DTM可以跟踪您网站中每个页面的转化信息。

DTM的“跟踪链接器”有两种方案来解决多级页面跳转跟踪的问题，您可以同时使用，也可以选择其中一种方案。建议您同时使用两种方案，以提升转化信息上报率。方案介绍如下：

#### 方案一：一方Cookie

DTM使用一方Cookie来存储广告跟踪参数。当您指定的落地页首次加载时，DTM会将广告跟踪参数写入一方Cookie。当用户在您的网站上完成转化时，您添加的转化跟踪代码会读取该Cookie，并将其与相应转化信息一起发送回SEAD联运投放平台。

DTM默认不会使用一方Cookie，您必须配置跟踪链接器中的“Cookie同意”参数，通过该参数设置DTM是否使用一方Cookie来存储广告跟踪参数。

如果您的网站允许使用一方Cookie，您可以在“跟踪链接器”中配置“Cookie同意”。

当该值为true时，表示用户同意；否则，表示不同意。仅当该字段为true时，DTM才会将跟踪参数保存到第一方Cookie中。

某些国家或地区在读写一方Cookie时，要求必须获得用户明示同意，例如欧洲经济区以及英国。因此，您需要根据各国或各地区对Cookie Consent明示同意要求的不同，选择如下一种配置场景进行配置：

#### [h2]场景一：网站不需要Cookie Consent明示同意

在“代码”中，新建“跟踪链接器”代码，将“Cookie同意”参数配置为“true”，DTM将使用一方Cookie，并始终上报转化信息给SEAD联运投放平台。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ba/v3/m3tquz8PSymz3pg_2Ut7UA/zh-cn_image_0000001475168974.png?HW-CC-KV=V1&HW-CC-Date=20261005T043038Z&HW-CC-Expire=86400&HW-CC-Sign=442BDFEC4CA1E6D56D21624A9C5E6288B17AEC4DE092497754E4A113E4549944)

#### [h2]场景二：网站需要Cookie Consent明示同意

您必须将Cookie Consent结果通知DTM，DTM仅当用户同意使用Cookie的情况下才会使用一方Cookie。具体配置步骤如下：

      1. 当网页重新加载或用户修改Cookie Consent结果后，您需要执行“跟踪链接器”代码，所以您需要两个触发条件：

         * **网页加载。** 即预置条件“Initialization - All pages”。
         * **Cookie Consent状态变更。** 若用户进入页面后仍可以修改同意结果，还需要监听用户同意结果并更新事件，获取用户最新的同意结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/65/v3/Gu_-VQ6fQ_Kjgo41JYxrDg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T043038Z&HW-CC-Expire=86400&HW-CC-Sign=E25E378C7AB0B2F628D5BE31C9E4DC62D360E45F520937E659468CAD20CE9113)

本步骤可选，但建议您配置本步骤。

如果不配置本触发条件，当用户修改Cookie Consent同意结果后，DTM仍会使用以前的Cookie Consent同意结果。一旦用户刷新了当前页面或发生了页面跳转，便会自动使用触发条件一，自动刷新Cookie Consent状态。

           1. 在“条件”中新建条件，设置“条件名称”为“OnConsentChanged”，“条件类型”为“自定义事件”，“事件名称”为“OnConsentChanged”。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/98/v3/U4SUG1bNRw-0G6R9BhbQCQ/zh-cn_image_0000001129302052.png?HW-CC-KV=V1&HW-CC-Date=20261005T043038Z&HW-CC-Expire=86400&HW-CC-Sign=9EF8B77FDD88C822331AF8B78B207805629F035B71C52B48697E725E61033119)

           2. 在“代码”中新建“自定义 HTML”代码，用于绑定OneTrust的Consent更改事件，即跟踪用户对隐私同意的更改。

建议将代码的“触发条件”设置为“Initialization - All pages”，表示所有页面的浏览均会触发。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/51/v3/N9vygC4KTqmtBMNO77LZ5g/zh-cn_image_0000001308451802.png?HW-CC-KV=V1&HW-CC-Date=20261005T043038Z&HW-CC-Expire=86400&HW-CC-Sign=F5BB7F582D22BBBA5AB16DFEA7571813418C96EAC08F56E23C8A5F719F73552A)

“自定义HTML”代码用于将DTM的回调方法绑定到OneTrust的OnConsentChanged接口中。

即当OneTrust的Consent状态发生变更后，OneTrust会自动调用**window.recordTier.push({eventName: 'OnConsentChanged'})** ，将向DTM发送自定义事件“OnConsentChanged”，用于通知DTM。请确保push的eventName的取值与“条件”中的“事件名称”一致。

“自定义HTML代码”示例：
                  
                  <script type="text/javascript"> 
                      Optanon.OnConsentChanged(function () { 
                          window.recordTier.push({eventName: 'OnConsentChanged'}); 
                      }); 
                  </script>

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/VuOuXY1ZQueIM-Aa9Xjcpg/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T043038Z&HW-CC-Expire=86400&HW-CC-Sign=586E4F4168D13756E5D561083075C9A73590551C357E3E1A087DDF09D5498B6F)

上述方法仅适用于[OneTrust Consent配置](https://community.cookiepro.com/s/topic/0TO1Q000000bCetWAE/cookie-compliance)方案，您需要根据您自己选择的Consent厂家的方案进行相应调整和修改。

      2. 读取用户隐私同意结果。

在“变量”中新建一个“自定义JavaScript”变量，用于读取用户隐私同意结果。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/0e/v3/8KVvSNn-Ss-ZkRoFZKmaPA/zh-cn_image_0000001175421545.png?HW-CC-KV=V1&HW-CC-Date=20261005T043038Z&HW-CC-Expire=86400&HW-CC-Sign=7747EA089C3B3C638ECEDD2F38BC9B089FC739232C0F2180C6F9D58B0275070C)

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/df/v3/k5d_tx96TUC9cSfZrxE1kw/note_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20261005T043038Z&HW-CC-Expire=86400&HW-CC-Sign=1C61DFE94F3D4E03D67A6868F259E0C4981715D0333BD560FD021984F42BD9D9)

自定义JS中的“OneTrustGroupID”，请根据实际在OneTrust平台配置的分组ID值进行修改。

根据Cookie Consent提供商的方案，读取Consent结果，如果返回值为“true”，则表示同意；否则，表示不同意。

如下为使用OneTrust Cookie方案的样例，您需要根据您使用的Cookie Consent提供商的方案进行修改：
             
             function () { 
                 var OneTrustGroupID = '4'; 
                 if (window.OnetrustActiveGroups && window.OnetrustActiveGroups.indexOf(',' + _OneTrustGroupID_ + ',') != -1) { 
                     return true; 
                 } 
             }

      3. 在“代码”中新建一个“跟踪链接器”代码，将“Cookie同意”设置为“Read_OneTrust_Consent”，并建议将代码的“触发条件”设置为“Initialization - All pages”和“OnConsentChanged”。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/26/v3/FCCOLGeTRuK11n5e5ZDBmg/zh-cn_image_0000001475330018.png?HW-CC-KV=V1&HW-CC-Date=20261005T043038Z&HW-CC-Expire=86400&HW-CC-Sign=F5EF79CBC83C00ACC3FC7507AA05D62F1BCC4A6C74F2FE69DF4573C43F449A89)

#### 方案二：URL传递参数

如果您的网站是跨域的或者本域内有多级页面跳转，在一些情况下，如部分用户的浏览器设置不允许使用一方Cookie，或者您的网站不允许DTM使用Cookie等，导致用于存储广告互动信息的Cookie方案不可用。此时，您可以使用URL传递参数方案。

      * 若您的网站在本域内有多级页面跳转

您可以将跟踪链接器中的“URL传递参数”配置为“true”，如果用户点击的是链接或表单提交，则DTM会把当前页面URL中的广告跟踪参数自动附加到下级网页链接和表单URL中。

如果将“URL传递参数”配置为“false”，则DTM不会将广告跟踪参数自动附加到下级网页链接和表单URL中。

建议将这个参数配置为“true”，以最大程度提升转化信息上报率。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/d2/v3/dLztF1caTtCJ5-N0e_LXaA/zh-cn_image_0000001525610709.png?HW-CC-KV=V1&HW-CC-Date=20261005T043038Z&HW-CC-Expire=86400&HW-CC-Sign=AB04F6EB92B8E39FED21A8FB347DB93EAC96BF3D9BD9A11325DDBF07173F3E6B)

      * 若您的网站需要跨域

如果从本网域（如www.a.com）跳转到第三方网域(例如www.b.com)，您可以在跟踪链接器中的“链接网域”添加第三方网域的域名。在跨网域跳转过程中，DTM自动将广告跟踪参数附加到下级网页链接和表单URL里。

如果只在本网域内跳转，则不需要配置“链接网域”。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/7f/v3/4NWCu1f_QzeOm5krNSmLCA/zh-cn_image_0000001525490857.png?HW-CC-KV=V1&HW-CC-Date=20261005T043038Z&HW-CC-Expire=86400&HW-CC-Sign=235ED4627C85DFB265CC0EF3A9F3572C2530403A99D22223D9D5440E9DC11B90)

#### 停止向SEAD联运投放平台上报转化信息

用户进入落地页后，DTM会自动根据落地页URL地址中的广告跟踪参数，默认上报转化信息到SEAD联运投放平台。

      * 如果您的网站要求暂时停止向SEAD联运投放平台上报转化信息，相关配置如下：

在“代码”中新建一个“自定义 HTML”代码，建议将代码的“触发条件”设置为“Initialization - All pages”。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/b/v3/DHrxf3oARqSRrhf4QhrG-A/zh-cn_image_0000001361640197.png?HW-CC-KV=V1&HW-CC-Date=20261005T043038Z&HW-CC-Expire=86400&HW-CC-Sign=DFECFCE78225EACE43DCDEF40FB8BEA0028C05EB559A998E3581993DE353CB57)

自定义HTML代码示例如下：
            
            <script>
            window.recordTier.push({'report_enable': 'false'});
            </script>

      * 如果您的网站要求，仅在获得用户Cookie Consent同意后，才允许DTM向SEAD联运投放平台上报转化信息，您需要使用**window.recordTier.push** 函数设置“report_enable”上报开关值。如果上报开关设置为“false”，DTM将不会向SEAD联运投放平台上报任何转化信息；如果上报开关设置为“true”，DTM才会将转化信息上报给SEAD联运投放平台

如下是使用OneTrust Cookie方案的样例，您需要根据您使用的Cookie Consent提供商的方案进行修改。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/21/v3/4eQTyrxZRuuSPr5pPpCysQ/zh-cn_image_0000001308477836.png?HW-CC-KV=V1&HW-CC-Date=20261005T043038Z&HW-CC-Expire=86400&HW-CC-Sign=F03B3B819B1573F2382A764A93EBFA29BF073A72E8CACEEBFEFCD681FE02A67E)

自定义HTML代码示例如下：
            
            <script>
            window.recordTier.push({'report_enable': 'false'}); 
            
            Optanon.OnConsentChanged(function () {   
            var OneTrustGroupID = '4';   
                if (window.OnetrustActiveGroups && window.OnetrustActiveGroups.indexOf(',' + OneTrustGroupID + ',') != -1) { 
                    window.recordTier.push({'report_enable': 'true'});   
            } 
            else { 
            window.recordTier.push({'report_enable': 'false'});   
            } 
                }); 
            </script>
