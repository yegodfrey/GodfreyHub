---
name: document/cn/doc-guides/ability-service-widget-provider-optional-0000001104085286
title: 其他可选功能开发指引
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/ability-service-widget-provider-optional-0000001104085286
source: portal
---

# 其他可选功能开发指引

#### 卡片编辑功能

卡片提供方提供一个卡片的编辑页面，允许从卡片跳转至编辑页面。

卡片提供方在配置文件config.json中添加参数“formConfigAbility”，配置参数信息的规则如下。
     * 配置该参数的值，导航到编辑页面的Page ability，格式如下：

ability://单个ability名字

     * 如果不配置“formConfigAbility”参数，则无卡片编辑功能。

#### 卡片背景模糊

卡片可以在config.json中声明是否支持背景模糊。声明方式如下：

config.json的metaData中，在customizeData中增加一个name为needBlurBackgroundForLauncher的字符串类型的属性, value为“true”表示支持， 否则为不支持。
    
    "forms": [
      {
        "name": "Form_JS_DEMO",
        "description": "it is js form",
        "type": "JS",
        "jsComponentName": "card",
        "colorMode": "auto",
        "isDefault": true,
        "updateEnabled": true,
        "scheduledUpdateTime": "10:30",
        "defaultDimension": "2*2",
        "supportDimensions": [
          "2*2",
          "2*4"
        ],
        "metaData": {
          "customizeData": [
            {
              "name": "needBlurBackgroundForLauncher",
              "value": "true"
            }
          ]
        }
      }
    ]

卡片开发者可以从onCreateForm的回调中，获取是否支持背景模糊：
    
    protected ProviderFormInfo onCreateForm(Intent intent) {
            ......
            // 1. 获取自定义数据
            IntentParams intentParams = intent.getParam(AbilitySlice.PARAM_FORM_CUSTOMIZE_KEY);
    
            // 2. 从intentParams中获取是否支持背景模糊
            boolean isSupport = (boolean) intentParams.getParam("fa_card_background_blur_support");
            ......
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113851.04186078155527699250254337586565:50001231000000:2800:38DA4C6E47710B43886B20B65D174673116DE05214944E00DC6B28BE5A9EA4B4.png?needInitFileName=true?needInitFileName=true)

背景模糊限制：
     * 当前仅JS卡片支持背景模糊。
     * 卡片背景模糊需要硬件支持，目前支持搭载麒麟9000或高通骁龙865及以上型号CPU的机型。使用其他机型可能无法预览到背景模糊效果。
