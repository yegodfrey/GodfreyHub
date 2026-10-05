---
name: document/cn/quickApp-Guides/quickapp-applet-access-ad-kit-0000001337473142
title: 接入广告服务
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-applet-access-ad-kit-0000001337473142
source: portal
---

接入广告服务 简介鲸鸿动能流量变现服务（以下简称为流量变现服务）是依托华为终端强大的平台与数据能力为开发者提供的App流量变现服务，开发者通过该服务可以在自己的App中获取并向用户展示精准的、精美的、高价值的广告内容，并从中获得广告收益。 华为快应用支持接入原生广告：以原生形式植入到应用本身的信息或服务内容中，广告内容的植入和呈现不会破坏页面本身的和谐，对用户干扰度低。 接入流程如下： ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111533.34510822913075757283429812764441:50001231000000:2800:A7778E526DE2671710D678E148B408A79ECA25F8C9F5366564DDC1A8203317F6.png) 接入受限说明鲸鸿动能流量变现服务对其接入主体、媒体、设备及服务区域都有一定的限制，详细内容参见“[鲸鸿动能流量变现服务受限说明](https://developer.huawei.com/consumer/cn/doc/distribution/monetize/shouxianshuoming-0000001085379360)”。 准入条件 [h2]注册账号、开通商户服务和签署协议鲸鸿动能流量变现服务的主体必须是已经完成实名认证及开通商户服务的企业开发者或个人开发者，并且签署《鲸鸿动能媒体服务协议》，详细内容参见“[注册认证](https://developer.huawei.com/consumer/cn/doc/distribution/monetize/zhucerenzheng-0000001132395957)”。 [h2]了解业务规范在接入鲸鸿动能流量变现服务前，请务必详细了解相关“[业务规则](https://developer.huawei.com/consumer/cn/doc/monetize/yewuzongze-0000001132177047)”。 [h2]为应用添加媒体为需要接入鲸鸿动能流量变现服务的应用添加媒体，详细操作参见“[媒体管理](https://developer.huawei.com/consumer/cn/doc/distribution/monetize/meitiguanli-0000001132278779)”。 [h2]为应用添加展示位为需要接入鲸鸿动能流量变现服务的应用添加展示位，详细操作参见“[展示位创建](https://developer.huawei.com/consumer/cn/doc/monetize/zhanshiweichuangjian-0000001132700049)”。 集成鲸鸿动能SDK [h2]征求用户意见![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111533.68241175746084800176151089583118:50001231000000:2800:915ADFD102C244A66714EE5EBA2C6263DA97B5AF8AF16D9957576CA56C2AD83E.png)
    * 应用发布中国大陆地区对接入此功能不做要求。
    * 应用发布非中国大陆地区，请根据当地法律要求，自行选择是否接入。
鲸鸿动能投放的广告包括个性化广告和非个性化广告。为了征求用户意见，鲸鸿动能提供了相关接口征求用户意见，以及在征得用户意见后如何根据用户意见获取广告。
    1. 首次启动快应用时，确定是否需要针对用户弹框以征得用户同意。
    * 需要：执行 [qa.setAdUnderAgeOfPromise(false)](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwads-0000001309497712#section45941522152814)。
    * 不需要：执行 [qa.setAdUnderAgeOfPromise(true)](https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/webview-api-hwads-0000001309497712#section45941522152814)。一旦将此设置置为true，表明为“未达到法定年龄用户”，只能请求非个性化广告，每次[qa.requestAdConsentUpdate](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwads-0000001309497712#section23891513115219)请求均会回调fail方法，此时不需要再展示征求用户意见弹框。设置为false表明用户已达到法定承诺年龄。
    2. 调用[qa.requestAdConsentUpdate](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwads-0000001309497712#section23891513115219)更新用户意见状态。
       * 进入失败回调，则请求非个性化广告。
       * 进入成功回调，返回广告技术提供商等信息，并进一步判断isNeedConsent的值。
         * isNeedConsent为false，则不需要征求意见，可以请求个性化广告。
         * isNeedConsent为true，且consentStatus=2，则需要弹框征求用户意见。
    3. 征求用户意见。开发者需要自定义弹框等方式向用户征求意见，并展示广告技术提供商的完整列表。示例demo效果图如下（仅供参考）： ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111533.25059412698654655274231413254225:50001231000000:2800:D755D2E0A4B0631E60D311696D3F1316C2B42D537B3D2A3871035D3861C2212F.png) | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111533.47857236515542776921703096854118:50001231000000:2800:08B39BD9F61A595B3B4EF932D7A9048D3E8EC8315794453BE49447E6120B8D2B.png)  
---|---  
**图一** 弹框效果 | **图二** 点图一中here后展示广告提供商  
    4. 调用[qa.setAdConsentStatus](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwads-0000001309497712#section10342513193112)设置步骤3通过弹框获取的用户意见。![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111533.26709438250710295977826938252884:50001231000000:2800:05DB78C8F6AC2A4B1F1D8C636C19359D77635D89A5A4B8990B3EBBFF04DAB690.png) 请务必让用户可以随时更改或撤消意见，并将用户更新后的意见再次调用该接口进行设置。
    5. 根据广告类型调用[qa.setAdTagForUnderAgeOfPromise](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwads-0000001309497712#section1393594010568)设置未达到法定年龄用户的标记。
    6. 根据广告类型调用[qa.setNonPersonalizedAd](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwads-0000001309497712#section193934035615)设置请求广告类型（个性化或者非个性化）。
    7. 请求广告。（如果获取用户意见时，用户未给出选择，则只能请求非个性化广告）通过调用开发的接口，接入原生广告。
[h2]原生广告
    1. 调用[qa.getAdProvider](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwads-0000001309497712#section4719144914456)判断是否支持广告服务，如果返回空字符串，则无法使用广告服务。
    2. 通过 const nativeAd=[qa.createNativeAd](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwads-0000001309497712#section443419211957)创建广告。
    3. 调用[nativeAd.load](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwads-0000001309497712#section15261346684)拉取广告数据。成功执行[nativeAd.onLoad](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwads-0000001309497712#section1528411518185)回调。
           
           nativeAd.onLoad((adlist) => {
           })

失败执行[nativeAd.onError](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwads-0000001309497712#section19331824172513)回调。
           
           nativeAd.onError((errorObj) => {
           })

    4. 使用组件[ad-button](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-component-ad-button-0000001388256145)实现下载原生广告中的广告主App。
    5. 调用[nativeAd.reportAdShow](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwads-0000001309497712#section64121517151117)上报广告曝光。![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250507111534.86766029168242194187672901456120:50001231000000:2800:D4840E113812CAC1D45F092705B8E7F5CBF44C678FAD80FDACA7378130BC7078.png) 页面从后台切回到前台时（如切到桌面再返回、进入落地页后返回等），如果广告依然展示，都需要调用该接口进行上报。
    6. 每次用户点击广告后调用[nativeAd.reportAdClick](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwads-0000001309497712#section18941134151715)进行上报。
    7. 当应用页面销毁时，调用[nativeAd.destroy](https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-hwads-0000001309497712#section176531949854)销毁原生广告。
