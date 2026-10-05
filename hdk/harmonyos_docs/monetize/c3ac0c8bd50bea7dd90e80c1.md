---
name: document/cn/monetize/agd_pro_api_get-ads-0000001216778368
title: 调试获取广告接口
uri: https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_get-ads-0000001216778368
source: portal
---

调试获取广告接口 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250314174003.29169947524181266872129993275499:50001231000000:2800:1E5E47F22D48D42D8AA8EAF9A1824DA7D74E2D1243298947DCFA0798297F5A08.png)
    * 获取广告接口的调用建议由开发或测试角色人员完成。
    * 为了提高广告的点击率、转化率及其带来的收入，请您尽可能多地提供请求参数（包括可选参数），AG能够根据开发者的请求，返回更相关、⽤⼾更喜欢的⼴告。
    * **如您无法获取相应参数，请不要随意填写参数** ，随意填写可能导致匹配到不相关的广告，进⽽降低点击率、转化率。对于接口中要求但媒体侧无法传递的参数，请同步知会到AG运营和产品人员。
    * 华为云侧已安装应用的过滤无法100%生效，为保证用户体验，建议媒体自行在设备端侧再做一层已安装过滤。
前提条件
    1. 以团队所有者帐号登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，并创建API客户端，详情请参见[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。
    2. 调用接口，获取访问API的Token，详情请参见[获取访问API的Token](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。
接口原型 承载协议 | HTTPS POST  
---|---  
接口方向 | 开发者服务器 > 应用市场服务端  
接口URL | https://connect-api.cloud.huawei.com/api/mas/v1/media/open/query
    * 中国站点domain：connect-api.cloud.huawei.com
    * 德国站点domain：connect-api-dre.cloud.huawei.com
    * 新加坡站点domain：connect-api-dra.cloud.huawei.com
    * 俄罗斯站点domain：connect-api-drru.cloud.huawei.com  
数据格式 | 请求消息：Content-Type: application/json 响应消息：Content-Type: application/json  
请求参数 [h2]header 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明  
---|---|---|---  
client_id | M | String | 客户端ID，获取方法请参见[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。  
Authorization | M | String | 认证信息，格式为“Authorization: Bearer ${access_token}”。access_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。  
[h2]Body 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明  
---|---|---|---  
requestId | M | String | 请求ID。 由媒体侧自行生成。每次请求需保证唯一性。 长度32位。  
apiVersion | M | String | API版本号。 当前暂不校验该字段，可自行传递，建议传入您的应用版本号。  
adSlot | M | [AdSlot](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_adslot-0000001247758004) | 展示位信息。  
deviceInfo | M | [DeviceInfo](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_deviceinfo-0000001294557021) | 设备信息。  
networkInfo | M | [NetworkInfo](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_networkinfo-0000001295036437) | 网络信息。  
mediaInfo | M | [MediaInfo](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_mediainfo-0000001248236748) | 媒体信息。  
请求示例
    
    POST https://connect-api.cloud.huawei.com/api/mas/v1/media/open/query
    Content-type: application/json
    Authorization: Bearer ********
    client_id: *******
    {
        "requestId":"f5c5fde9ba9f1639990344179", // 请替换为您自己生成的32位id
        "apiVersion":"2.0",
        "adSlot":{
            "slotId":"F7****8L9A",  // 请替换为您应用自己的展示位id
            "adCount":6,
            "pageNumber":1,
            "installedApp":1,
            "lastItemIds":[],
            "interactTypes":[
                 1,3,5
             ],
            "personalize":1,
            "downloadType":1,
            "keywords":"华为商城",
            "installType":6,
            "AssociatedApp":{
                "packageName":"com.vmall.client"
            }
        },
        "deviceInfo":{
            "oaid":"6ff9f7d9-****-5ced-9f75f7ff5913", // 如果是测试展示位，请注意添加测试设备的OAID
            "udid":"",
            "deviceId":"361049b0112***950d4e1bb325ef20f3",
            "deviceModel":"TNY-TL00",
            "deviceType":"0",
            "manufacturer":"HUAWEI",
            "locale":"zh-CN",
            "country":"CN",
            "mcc":"",
            "androidApiLevel":30,
            "harmonyApiLevel":6,
            "gmsSupport":0,
            "os":3,
            "osv":"",
            "abis":["armeabi-v7a", "arm64-v8a"]
        },
        "networkInfo":{
            "connectType":"5",
            "carrier":"1",
            "ip":"40.90.189.246"
        },
        "mediaInfo":{
            "mediaPkgName":"com.huawei.***a",  // 请替换为您自己的App包名
            "mediaVersion":"12.0.1.300"
        }
    }

响应参数 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明  
---|---|---|---  
rtnCode | M | Integer | 返回码。 0代表成功，其他返回请参见[错误码](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_error-code-0000001263223153)。  
rtnDesc | O | String | 返回描述。  
requestId | O | String | 请求时的requestId参数，原值返回。  
adInfos | O | Iist<[AdInfo](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_adinfo-0000001294726909)> | 广告信息。  
hasNextPage | O | Integer | 是否有下一页地址。 仅搜索场景返回此字段。 取值范围：
    * 0：无。
    * 1：有。  
defaultData | O | Integer | 是否是默认推荐数据。 仅关联推荐场景下使用此字段。 取值范围：
    * 0：表示返回的应用为宿主应用的关联推荐应用。
    * 1：表示没有宿主应用或宿主应用没有关联推荐应用，返回兜底应用  
响应示例
    
    {
        "adInfos": [
            {
                "adId": "promote.202211211441564l18f975064",
                "adTagDesc": "广告",
                "material": {
                    "adFlag": 1,
                    "appInfo": {
                        "appId": "C10049053",
                        "appName": "华为商城",
                        "clickDeepLink": "hiapp://com.huawei.appmarket?activityName=activityUri|appdetail.activity&params=****&referrer=agdproapilink",
                        "clickWapUrl": "https://appgallery.cloud.huawei.com/app/C10049053",
                        "description": "【华为商城（VMALL）】是华为公司旗下官方电商平台，秉持*******并努力改进。",
                        "developerName": "华为软件技术有限公司",
                        "downloadDesc": "143 亿次安装",
                        "downloadLink": "hiapplink://com.huawei.appmarket?appId=C10049053&callType=AGDAPI&channelId=com.huawei.photoplaza.agd&******&referrD",
                        "downloads": "14368117440",
                        "icon": "https://appimg.dbankcdn.com/application/icon144/634d52cb0a5b4e7fb5c2ef021126df96_1.png",
                        "memo": "智慧生活，精选好物",
                        "packageName": "com.vmall.client",
                        "packageType": 0,
                        "permission": [{
                        	"permissionDesc": "1.相机\n2.******\n16.读取日历\n17.新建/修改/删除日历",
                        	"permissionLabel": "检测出此应用获取 17 个敏感隐私权限："
                        },
                        {
                        	"permissionDesc": "1.允许应用拍摄照片和视频。\n2.允许应用*****应用新建、修改、删除或发起邀请他人的日历活动。",
                        	"permissionLabel": "敏感隐私权限用途说明："
                        }],
                        "privacyUrl": "https://agreement.itsec.hihonor.com/asm/agrFile/getHtmlFile?agrNo=1024&country=cn&branchId=0&langCode=zh-cn",
                        "releaseDate": "2022-10-31 15:05:16",
                        "secCategory": "购物比价",
                        "size": 111474763,
                        "sizeDesc": "106.3MB",
                        "thirdCategory": "商城",
                        "versionCode": "12210301",
                        "versionName": "1.22.10.301"
                    },
                    "interactType": 1,
                    "clickUrl": "https://store-drcn.hispace.dbankcloud.cn/agd/mediareport?clickType=__CLICKTYPE__&param=c2Vj******RJg%3D%3D&extInfo=__EXTINFO__",
                    "showUrl": "https://store-drcn.hispace.dbankcloud.cn/agd/mediareport?param=c2VjdXdH*****%3D%3D&event=show&time=__TIME__&extInfo=__EXTINFO__",
                    "styleType": 5
                }
            }
        ],
        "defaultData": 1,
        "requestId": "1f9cd8bf2ab4438772296a2d1806339",
        "rtnCode": 0,
        "rtnDesc": "SUCCESS"
    }

接口调用实例如果您想快速调试获取广告接口，可以使用PostMan工具导入示例文件进行调试。 ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250314174003.27572202809844070514479825667584:50001231000000:2800:C745B8AF155E30CD7A28B64405D100E1F657DFAE16B63CE0AE2D10F6F6F67C41.png) 需要使用公网环境进行调试。
    1. 下载[AGD Pro API接口调用示例文件.zip](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250314174004.05099281164613019621332294264045:50001231000000:2800:2BA2C8EF71118C38BC99030BDE70F7FAD6798B0D60810A24180BB4610BA85327.zip)文件，解压获取**AGDProAPI接口调用示例.postman_collection.json** 文件。
    2. 打开PostMan工具，在左上角选择“菜单 > File > Import”，导入接口调用示例文件**AGDProAPI接口调用示例.postman_collection.json** 。
    3. 点击项目名称，点击“Variables”页签，配置环境变量如下图所示。![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250314174003.86609065154542917971203973607517:50001231000000:2800:816613E267371CA327454E5A277D549293C5863A0CA12AF0552E37F51CE665C9.png) 具体配置说明如下：
       * 配置从AGC页面创建的**client_id** 、**client_secret** ，具体请参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。
       * 配置从AGC页面申请的媒体包名**mediaPkgName** ，以及媒体展示位**slotid** ，具体请参考[创建媒体及展示位](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_creat-media-display-position-0000001246432546)。
    4. 点击**获取Token** 的POST方法，点击“Send”进行Token的获取。
    5. 点击请求广告场景对应的POST方法，点击“Send”进行广告内容的请求。
