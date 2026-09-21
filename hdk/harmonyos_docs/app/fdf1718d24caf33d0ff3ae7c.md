---
name: document/cn/app/agc-help-integrate-service-0000001146438653
title: 集成服务
uri: https://developer.huawei.com/consumer/cn/doc/app/agc-help-integrate-service-0000001146438653
---

# 集成服务

部分开发类服务需要您集成对应的SDK，您需要在您的应用中调用SDK的接口实现对应功能。

## AppGallery Connect开发服务

需要集成SDK或进行服务端开发的AGC开发服务如下表，具体集成方法请参考各服务的集成文档。

|分类|服务|说明|
|:--|:-----------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|云开发|[认证服务](https://developer.huawei.com/consumer/cn/agconnect/auth-service)|认证服务可以帮助您统一管理包括华为帐号、微信、邮箱、匿名帐号等多种帐号类型的用户，使您免于自行搭建用户认证系统。|
|云开发|[云函数](https://developer.huawei.com/consumer/cn/agconnect/cloud-function)|云函数是一项Serverless计算服务，提供FaaS（Function as a Service）能力，一方面云函数将开发测试的对象聚焦到函数级别，可以帮助您大幅简化应用开发与运维相关的事务，另一方面您可以通过在应用中集成云函数SDK，便捷操作云数据库、云存储等，提升业务功能构建的便利性。|
|云开发|[云数据库](https://developer.huawei.com/consumer/cn/agconnect/cloud-base)|云数据库是一款端云协同的数据库产品，提供端云数据的协同管理、统一的数据模型和丰富的数据管理API接口等能力。在保证数据的可用性、可靠性、一致性，以及安全等特性基础上，能够实现数据在客户端和云端之间的无缝同步，并为应用提供离线支持，以帮助开发者快速构建端云、多端协同的应用。|
|云开发|[云存储](https://developer.huawei.com/consumer/cn/agconnect/cloud-storage)|云存储是一种可伸缩、免维护的云端存储服务，您可以用于存储图片、音频、视频或其他由用户生成的内容。借助云存储服务，您可以无需关心存储服务器的开发、部署、运维、扩容等事务，大大降低了应用使用存储的门槛，让您可以专注于应用的业务能力构建，助力您的商业成功。|
|云开发|[云托管](https://developer.huawei.com/consumer/cn/agconnect/cloud-hosting)|云托管服务是一项提供内容托管的服务，包括网站托管和存储加速功能，为用户提供安全快速的内容访问能力。云托管服务提供了方便快捷的网页应用部署能力，您只需聚焦界面交互、页面样式和业务逻辑，无需关注域名申请、证书管理等安全配置，也不需要关注页面分发，即可构建高安全、快速访问的网站。|
|云开发|[预加载](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-prefetch-overview)|适用于应用安装后首页或任意页面的加载提速，可提前加载资源数据到本地进行缓存，有效提升应用页面打开速度，改善用户体验。|
|构建|[Dynamic Ability](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agc-dynamicability-introduction-0000001057944549)|Dynamic Ability是华为应用市场基于Android App Bundle技术实现的动态加载特性的一套解决方案，第三方应用通过集成Dynamic Ability SDK，可以在需要时动态从华为应用市场下载应用的某个特性或语言包，从而减少不必要的网络流量与终端设备存储空间消耗。|
|构建|[Connect API](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-overview-0000001158245083)|Connect API是一套RESTful API，利用这些API，您可以定制AppGallery Connect提供的服务，或是实现流程自动化，从而提升工作效率。|
|增长|[A/B测试](https://developer.huawei.com/consumer/cn/agconnect/abtest-introduction)|使用A/B测试，可以让科学的实验数据来帮助您优化应用体验、提升关键转化及增长指标。您可以为不同的用户群体创建一组或多组对比实验，通过实验得出关键对比数据，选择更符合用户需求的应用界面、文案、产品功能或营销活动，从而根据用户反馈做出方案选择，提高决策准确率，降低决策风险。|
|增长|[远程配置](https://developer.huawei.com/consumer/cn/agconnect/remote-configuration)|使用远程配置服务，您的应用即可无需升级，也可以在云端灵活修改应用的行为和外观，从而快速响应用户的需求。|
|增长|[应用内消息](https://developer.huawei.com/consumer/cn/agconnect/app-messaging)|应用内消息可以在用户使用应用时，基于用户使用情景向用户发送有针对性的消息，鼓励用户使用应用的某些关键功能，也可以借助应用内消息发送更具吸引力的营销内容，增强用户粘性。|
|增长|[App Linking](https://developer.huawei.com/consumer/cn/agconnect/App-linking)|App Linking是一种支持Android、iOS、Web等多种平台的跳转链接，无论用户是否已经安装您的应用，App Linking都能够按照您指定的方式进行跳转。用户在Android或iOS设备上点击App Linking后，即可跳转到链接指定的内容。用户在PC端浏览器中打开相同的链接地址，也可以跳转到网站上的同等内容。|
|增长|[应用下载直达](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agdlink-introduction-0000001164321879)|应用下载直达是华为应用市场对外提供的官方下载服务，广告平台、媒体、开发者等均可通过应用下载直达服务安全、快捷推广应用，并可通过数据归因对推广效果进行数据分析。|
|质量|[性能管理](https://developer.huawei.com/consumer/cn/agconnect/apm)|性能管理（APM，App Performance Management）服务提供分钟级应用性能监控能力，您可以在AGC查看和分析APM收集到的应用性能数据，实时全面掌握应用在线的性能表现，帮助您快速闭环应用的性能问题，持续提升应用的用户体验。|
|质量|[云测试](https://developer.huawei.com/consumer/cn/agconnect/cloud-test)|华为云测试致力于为您提供便捷的一站式移动应用测试服务，解决您在移动应用开发、测试过程中面临的成本、技术和效率问题，保障您的App在华为手机上获得优质的用户体验。华为云测试为您提供了华为热门移动终端设备，有针对性地向您提供应用在华为手机上的兼容性测试、稳定性测试、性能测试和功耗测试，快速出具专业且详细的测试报告，帮助您提前发现并精准定位解决应用在华为手机上运行的各种问题。|
|质量|[云调试](https://developer.huawei.com/consumer/cn/agconnect/cloud-adjust)|华为云调试致力于为您免费提供高效的云端设备调试解决方案，解决您设备机型不足、设备管理困难及bug无法复现等问题，降低您的采购及管理成本。华为云调试提供不同型号的机型，让您可随时随地直观了解应用在不同机型上的运行表现。|
|质量|[开放式测试](https://developer.huawei.com/consumer/cn/agconnect/open-test)|开放式测试，可以让您的应用在正式上架华为应用市场前，提前发布一个测试版本给您信任的测试用户。测试版本仅对您指定的测试用户可见，这样您就可以提前收到用户反馈，并在应用正式上架前改进您的应用。|
|质量|[接入检测](https://developer.huawei.com/consumer/cn/doc/app/agc-help-self-check-0000001100158786)|应用上架申请提交后，可能会因审核不通过而被驳回。您需要按要求修改后重新提交审核，直至审核通过后才可成功上架应用。为避免影响您的应用上架计划，在正式提交应用审核前，您可先通过接入检测服务对您的应用软件包进行自检。|
|盈利|[联运服务](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/appgallerykit-introduction-0000001055521414)|联运服务是指华为和开发者在华为应用市场联合运营应用，并进行分成的合作服务。华为向您提供华为应用市场平台能力接入、数据报表、活动运营、用户运营等一系列服务，您可以借此获取多种优质华为应用市场推荐资源。|
|盈利|[付费下载](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/appgallerykit-paidapps-introduction-0000001073582987)|付费下载是华为为开发者和消费者推出的精品应用付费下载服务，支持多种多样的支付渠道，为消费者提供优质的精品应用，同时也为开发者变现提供了更好的途径。|

## HMS Core开发服务

需要集成SDK或进行服务端开发的HMS Core开发服务如下表。

|分类|能力名称|描述|
|:-----------|:----------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
|App Services|[华为帐号服务](https://developer.huawei.com/consumer/cn/hms/huawei-accountkit)|支持您的用户在手机、平板、电视、车机等多平台上，使用华为帐号快速便捷地登录您的应用。双因素认证具备高安全性，为您的用户提供数字资产和个人隐私的安全保护能力。|
|App Services|[广告服务](https://developer.huawei.com/consumer/cn/hms/huawei-adskit)|致力于打造一个开放、合规的广告生态。您可以通过流量变现服务在应用内广告中获得更多收益；通过广告标识服务，可以全方位保护用户隐私，也可以帮助广告平台和三方监测平台合规地开展个性化广告和转化归因。|
|App Services|[分析服务](https://developer.huawei.com/consumer/cn/hms/huawei-analyticskit)|基于开发者上报的用户行为和属性数据，提供多种分析能力。|
|App Services|[App Linking](https://developer.huawei.com/consumer/cn/agconnect/App-linking)|创建跨平台的深度链接直达应用内内容，可用于广告投放，社交邀请等，用户点击链接直达内容，在各种平台均可按照所需方式工作，应用未安装可重定向到应用市场下载安装，同时可统计链接点击次数、应用安装次数等数据。|
|App Services|[情景感知服务](https://developer.huawei.com/consumer/cn/hms/huawei-awarenesskit)|获取用户当前情景状态，如所处位置、当天是否节日、天气情况、是在跑步还是静止、耳机是否插入、环境光强度、车载蓝牙设备是否连接、是否有已注册信标连接等。|
|App Services|[服务号](https://developer.huawei.com/consumer/cn/hms/huawei-businesstouchkit/)|提供华为统一的商家服务阵地，通过服务分发，用户互动连接，多样化的营销工具，促进您的商业闭环。|
|App Services|[云空间服务](https://developer.huawei.com/consumer/cn/hms/huawei-drivekit)|为应用提供方便、快捷的云端存储能力，让您的用户可以方便地对图片、视频、文件等进行上传、下载、同步、查看等操作。|
|App Services|[动态标签管理器服务](https://developer.huawei.com/consumer/cn/hms/huawei-dynamic-tag-manager)|动态标签管理器可让您快速配置更新测量代码及相关代码片段，您可以基于Web界面轻松地进行分析、测量代码的配置，实现营销活动数据随需监控。|
|App Services|[游戏服务](https://developer.huawei.com/consumer/cn/hms/huawei-game)|支持快速低成本构建成就、排行榜、存档等基础游戏功能，提升游戏测试、管理和发布效率，协助您通过数据分析持续进行优化。|
|App Services|[运动健康服务](https://developer.huawei.com/consumer/cn/hms/huaweihealth/)|提供运动健康数据服务，联合优秀的应用服务与三方设备，打造"智能运动健康设备+华为终端+应用服务"生态，为用户带来安全、智慧、便捷的运动健康体验。|
|App Services|[用户身份服务](https://developer.huawei.com/consumer/cn/hms/huawei-identitykit)|华为用户身份服务为用户提供统一的地址管理与选择服务，您可通过用户授权直接获取其已有地址信息，高效便利。|
|App Services|[应用内支付服务](https://developer.huawei.com/consumer/cn/hms/huawei-iap/)|为您提供支付服务，让您聚焦应用本身能力，更关注于应用创新。大大降低支付渠道、全球化合规等开发引入和产品上线环节的投入。助力您的商业变现。|
|App Services|[定位服务](https://developer.huawei.com/consumer/cn/hms/huawei-locationkit)|华为定位服务采用GPS、Wi-Fi、基站等多种混合定位模式进行定位，赋予您的应用程序快速、精准地获取用户位置信息的能力。|
|App Services|[地图服务](https://developer.huawei.com/consumer/cn/hms/huawei-MapKit)|助力全球开发者实现个性化地图呈现与交互，全面提升您应用的LBS体验。|
|App Services|[会员开放服务](https://developer.huawei.com/consumer/cn/hms/huawei-membership)|通过开放卡券等多样化的营销能力，打造跨业态多场景的会员生态，帮助您实现用户运营与增量创收的目标。|
|App Services|[推送服务](https://developer.huawei.com/consumer/cn/hms/huawei-pushkit)|建立云端到手机端的消息推送通道，为您提供即时消息推送平台。|
|App Services|[快应用](https://developer.huawei.com/consumer/cn/quickApp)|快应用是一种基于行业标准开发的新型免安装应用，开发者开发一次即可在所有支持行业标准的手机运行。|
|App Services|[统一扫码服务](https://developer.huawei.com/consumer/cn/hms/huawei-scankit)|提供便捷的二维码与条形码扫描、解析、生成能力，帮助您快速构建应用内的扫码功能。得益于华为在计算机视觉领域能力的积累，Scan kit可以实现远距离二维码的检测与自动放大，针对常见复杂扫码场景，如：强光照、污损、柱面等，做了针对性识别优化，提升扫码成功率与用户体验。|
|App Services|[搜索服务](https://developer.huawei.com/consumer/cn/hms/huawei-searchkit/)|提供通用、新闻、视频等网页的搜索，同时也提供图片搜索、划词搜索、文本补全以及拼写检查等搜索服务。|
|App Services|[位置服务](https://developer.huawei.com/consumer/cn/hms/huawei-sitekit/)|提供位置查询服务，帮助您的用户更加方便的使用位置相关服务，以及帮助您快速获取用户。|
|App Services|[HUAWEI UI Engine](https://developer.huawei.com/consumer/cn/huawei-ui-kit/)|华为提供的一套UI开发工具包，可以帮助应用开发者快速开发UI界面，同时自动地适配多种不同的屏幕形态，以达到一次开发多设备自动适配运行的效果。|
|App Services|[钱包服务](https://developer.huawei.com/consumer/cn/hms/huawei-walletkit/)|Wallet Kit是集成了终端"芯-端-云"全栈技术的开放能力，可实现卡、证、券、票、钥匙等各类凭证电子化，为传统行业变革注入新的创新元素，帮助您利用跨行业场景能力，为您的用户打造All in One Wallet的数字生活方式。|
|Graphics|[计算加速服务](https://developer.huawei.com/consumer/cn/hms/huawei-acceleratekit/)|充分利用异构多核硬件，帮助您轻松解决应用性能问题，使程序更快更高效的运行。|
|Graphics|[HUAWEI AR Engine](https://developer.huawei.com/consumer/cn/hms/huawei-arengine/)|为您的应用提供运动跟踪、人体和人脸跟踪、环境跟踪等AR能力，助力应用融合虚拟世界与现实世界，打造全新的视觉体验和交互方式。|
|Graphics|[图形计算服务](https://developer.huawei.com/consumer/cn/hms/huawei-computer-graphics/)|提供高性能的渲染框架，图形渲染组件，以及前沿计算机图形学、计算机视觉和深度学习相结合的技术研究成果。|
|Graphics|[游戏加速能力](https://developer.huawei.com/consumer/cn/game-kit)|通过游戏App给系统提供精细化场景信息、配置信息、网络信息等，系统给游戏App反馈系统状态信息等，使得双方能够利用这些信息进行更紧密和深入的协作，在系统资源有限的情况下进一步改善玩家的游戏体验。|
|Graphics|[图形引擎服务](https://developer.huawei.com/consumer/cn/hms/huawei-scenekit/)|提供高性能、低功耗的3D图形渲染引擎。为游戏、AR&VR等应用提供易于使用的渲染接口，给用户带来精致酷炫的视觉体验。|
|Graphics|[HUAWEI VR](https://developer.huawei.com/consumer/cn/vr)|是面向VR内容开发者开放的一站式内容开发和上传平台。通过集成VR Engine SDK，直接为消费者提供内容。|
|Media|[音频编辑服务](https://developer.huawei.com/consumer/cn/hms/huawei-audio-editor/)|华为提供丰富的音频编辑能力，用于语音、音乐创作、配乐等场景，通过集成音频编辑服务，您的应用可轻松实现变声、降噪、音源分离，空间渲染和AI配音等音频编辑功能。|
|Media|[音频能力](https://developer.huawei.com/consumer/cn/audioengine)|提供了低延时K歌耳返、多路录音等增强音频体验能力。通过集成华为Audio Engine，您的应用可以便捷的使用华为K歌耳返等功能，带来更加完美的K歌体验。|
|Media|[音频服务](https://developer.huawei.com/consumer/cn/hms/huawei-audiokit/)|聚焦播放、音效、音频数据三大领域开放，为您提供丰富的音频服务。|
|Media|[多媒体管线服务](https://developer.huawei.com/consumer/cn/hms/huawei-av-pipeline)|多媒体管线服务为您提供多媒体开发框架以及跨平台、高性能的多媒体处理能力，支持通过自定义插件和自定义流水线编排来实现业务场景拓展，降低多媒体业务的开发难度，让应用更加聚焦于业务竞争力。|
|Media|[相机能力](https://developer.huawei.com/consumer/cn/CameraKit)|是华为影像能力开放接口，旨在帮助三方简单、高效使用相机系统强大能力，为用户带来丰富的相机功能及拍照体验。通过提供一套高级编程API，支持三方实现大光圈、人像、HDR、视频HDR、视频人物虚化、超级夜景等特性，达成华为相机同样的拍照效果。|
|Media|[图像服务](https://developer.huawei.com/consumer/cn/hms/huawei-imagekit/)|为您提供图片编辑和场景化动效功能，高效的实现图片内容再生产。|
|Media|[全景服务](https://developer.huawei.com/consumer/cn/hms/huawei-panoramakit)|提供全景图像在三维立体空间的展示和交互能力，为用户提供沉浸式的全景浏览体验，使观者犹如身在其中。|
|Media|[视频编辑服务](https://developer.huawei.com/consumer/cn/hms/huawei-video-editor)|视频编辑服务提供视频导入、编辑、渲染、导出、媒资管理等一站式视频处理能力，功能丰富，稳定可靠，助力开发者轻松高效搭建应用。|
|Media|[视频能力](https://developer.huawei.com/consumer/cn/hms/huawei-videoengine)|提供基于芯片和算法的视频个性化调节能力。帮助您实现电影级色彩调节、编码器控制等功能，带来视频播放、视频通话和直播等场景下的优质体验。|
|Media|[视频服务](https://developer.huawei.com/consumer/cn/hms/huawei-videokit/)|提供用于视频播放的服务，低卡顿、高清晰度、无缝切换，让用户畅享稳定高清的视频新体验。|
|Media|[数字版权服务](https://developer.huawei.com/consumer/cn/hms/huawei-wiseplay)|为合作伙伴提供内容的数字版权保护。|
|AI|[HUAWEI HiAI Foundation](https://developer.huawei.com/consumer/cn/hiai#Foundation)|芯片能力开放，快速转化和迁移已有模型，借助异构调度和NPU加速获得更佳性能。|
|AI|[HUAWEI HiAI Engine](https://developer.huawei.com/consumer/cn/hiai#Engine)|应用能力开放，构筑全连接服务和全场景应用，轻松将多种AI能力和APP结合，让APP更加智能强大。|
|AI|[HUAWEI HiAI Service](https://developer.huawei.com/consumer/cn/hiai#Service)|服务能力开放，根据用户需求，适时适地推送服务，更好的联接用户与服务。|
|AI|[机器学习服务](https://developer.huawei.com/consumer/cn/hms/huawei-mlkit)|为您提供丰富的文本类、语音语言类、图像类和人脸人体类服务API，打造AI新体验，轻松构建您的AI应用。|
|Smart Device|[畅连能力](https://developer.huawei.com/consumer/cn/caas-kit)|基于华为终端畅连业务，面向应用开发者和硬件开发者提供的开放接口，CaaS Kit帮助华为智能手机、海量应用、合作伙伴的智能设备实现系统级音视频通话功能，构建庞大实时通信网络，致力为消费者打造更佳的通信体验。|
|Smart Device|[投屏能力](https://developer.huawei.com/consumer/cn/cast-kit)|华为提供的以手机为中心的多屏协同能力。通过集成华为Cast+ Kit，可以实现手机与大屏类设备屏幕的快速、稳定、低时延协同， 带来多屏协同场景下的优质体验。|
|Smart Device|[设备虚拟化能力](https://developer.huawei.com/consumer/cn/device-virtualization)|通过虚拟化技术将相关设备或器件打造成手机器件或能力的延伸，可以将家中的电视、摄像头和音箱虚拟为手机的屏幕、Camera和Mic/Speaker，将穿戴设备作为手机的虚拟Sensor，实现手机为中心的全场景体验。|
|Smart Device|[HUAWEI HiCar](https://developer.huawei.com/consumer/cn/HiCar)|华为提供的人-车-家全场景智慧互联解决方案，HUAWEI HiCar将移动设备和汽车连接起来，利用汽车和移动设备的强属性以及多设备互联能力，在手机和汽车之间建立管道，把手机的应用和服务延展到汽车，实现手机为核心的全场景体验，给消费者创造智慧出行体验。|
|Smart Device|[碰一碰能力](https://developer.huawei.com/consumer/cn/onehop-kit)|是多终端业务协同的解决方案技术，依托NFC短距通信协议，向手机端应用和三方设备开放多设备触碰交互能力，将手机和全场景设备连接起来，致力为用户提供手机到周边设备多种业务无缝切换的高效体验，解决了APP跨设备接续难、设备配网难、传输难的问题。|
|Smart Device|[手写笔能力](https://developer.huawei.com/consumer/cn/hms/huawei-pencilengine)|HUAWEI Pencil Engine是华为提供的一套手写套件，提供笔刷效果、笔迹编辑、报点预测、一笔成形和手写笔双击功能，让开发者轻松集成实现手写功能，带来优质的手写体验，为开发者创造更多的手写应用场景。|
|Smart Device|[文件分享能力](https://developer.huawei.com/consumer/cn/share-kit)|通过蓝牙实现设备之间发现及连接鉴权，建立P2P WiFi通道，实现手机、PC、第三方设备间文件高速分享无线传输。在第三方设备处理能力及传输环境有保障的情况下，传输速度最高可达80MB/s。|
|Smart Device|[穿戴能力](https://developer.huawei.com/consumer/cn/hms/huawei-wearengine)|Wear Engine 将手机上的生态应用和服务延展到智能穿戴设备，也将智能穿戴的设备能力开放给手机应用，实现手机与穿戴设备能力共享，为用户带来更丰富的交互体验。|
|Security|[线上快速身份验证服务](https://developer.huawei.com/consumer/cn/hms/huawei-fido)|为应用提供安全可信的本地生物特征认证和安全便捷的线上快速身份验证能力。|
|Security|[钥匙环服务](https://developer.huawei.com/consumer/cn/hms/huawei-keyring/)|提供用户认证凭据本地存储和跨应用、跨形态共享能力，帮助您在安卓应用、快应用、Web应用之间构建无缝登录体验。|
|Security|[安全检测服务](https://developer.huawei.com/consumer/cn/hms/huawei-safetydetectkit/)|安全检测服务（Safety Detect）目前提供系统完整性检测（SysIntegrity）、恶意URL检测（URLCheck）、应用安全检测（AppsCheck）、虚假用户检测（UserDetect）、恶意WiFi检测, 帮助您快速构建应用安全。|
|Security|[数据安全能力](https://developer.huawei.com/consumer/cn/hms/huawei-datasecurity-engine/)|提供数据安全能力，提升开发效率、保障用户数据安全。|
|Security|[设备安全能力](https://developer.huawei.com/consumer/cn/hms/huawei-devicesecurity-engine/)|为您提供基于硬件隔离的程序运行环境。保障程序运行及业务数据的安全性。|
|Security|[本地认证能力](https://developer.huawei.com/consumer/cn/hms/huawei-localauthentication-engine/)|基于深度神经网络开发，结合3D结构光技术，为您提供安全、可靠的本地人脸认证能力。|
|System|[5G Modem Kit](https://developer.huawei.com/consumer/cn/hms/huawei-5g-modem)|提供华为先进、专业化的5G通信服务，为您的应用提供5G小区信息服务。|
|System|[线性马达能力](https://developer.huawei.com/consumer/cn/haptics-kit)|将华为终端的线性马达振动能力封装为开发接口，开放给应用开发者使用， 可以帮助开发者快速实现应用内调用华为线性马达振动能力。Haptics Kit面向用户场景提供海量振动波形，同时提供自定义波形接口，帮助应用开发者实现更加逼真、快速、流畅的触感反馈。|
|System|[HEM Kit](https://developer.huawei.com/consumer/cn/hms/huawei-hemkit/)|提供OOBE自动部署设备的能力，精准部署应用到您所需的工作设备上。|
|System|[双网聚合能力](https://developer.huawei.com/consumer/cn/link-turbo-kit)|华为端云协同网络加速的技术品牌，通过在端侧将Wi-Fi和蜂窝网络同时并发使用，为消费者用户带来聚合高网速、稳定低时延的通信体验。为了让更多的应用更好地使用该技术，华为将该通信能力通过Kit方式开放给合作伙伴实现对系统资源的合理调度。|
|System|[MDM能力](https://developer.huawei.com/consumer/cn/hms/right-sign)|MDM能力API，包括设备管理类API和应用权限管理类API，为安装在华为设备上的应用提供了系统级权限的管理的功能。|
|System|[近距离通信服务](https://developer.huawei.com/consumer/cn/hms/huawei-nearbyservice)|让您便捷地实现周边手机自主发现、自主互联，传输数据。 让您便捷地获取周边蓝牙信标消息，向用户提供场景化的服务。|
|System|[Network Kit](https://developer.huawei.com/consumer/cn/hms/huawei-networkkit)|聚合远场网络通信优秀实践，辅以RESTful、文件上传下载等场景化接口，为您提供简单易用、低时延、高吞吐和高安全的端云传输通道。|
|System|[无线传输服务](https://developer.huawei.com/consumer/cn/hms/huawei-wirelesskit/)|提供华为先进的、定制化的无线通信优化服务，如5G、Wi-Fi等。为您的应用带来大宽带、低时延、高可靠的网络体验。|

