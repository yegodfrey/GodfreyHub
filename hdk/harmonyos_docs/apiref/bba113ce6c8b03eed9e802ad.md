---
name: document/cn/apiref/js-framework-js-tag-0000000000611401
title: js标签配置
uri: https://developer.huawei.com/consumer/cn/doc/apiref/js-framework-js-tag-0000000000611401
source: portal
---

# js标签配置  
  
js标签中包含了实例名称、页面路由信息。

标签 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
name | string | default | 是 | 标识JS实例的名字。  
pages | Array | - | 是 | 路由信息，详见“**pages** ”。  
  
![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20210430141402.30512545319583347903740164654391:50520429081811:2800:53F3DC7156B081A44813815028FCC89C09195E0FA94322E23D1C263AE0959269.png?needInitFileName=true?needInitFileName=true)

name、pages标签配置需在[配置文件](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/basic-config-file-elements-0000000000034463)中的“js”标签中完成设置。

#### pages

定义每个页面的路由信息，每个页面由页面路径和页面名组成，页面的文件名就是页面名。比如：
    
    {
      ...
      "pages": [
        "pages/index/index",
        "pages/detail/detail"
      ]
      ...
    }

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20210430141402.95568316813382308333842624822850:50520429081811:2800:9A5C75015C24AC6E5901AF5F83AB84C8DB742CE441C9F2EECFE39687F31E62A7.png?needInitFileName=true?needInitFileName=true)

     * 应用首页固定为"pages/index/index"。
     * 页面文件名不能使用组件名称，比如：text.hml、button.hml等。

#### 示例
    
    {
      "app": {
        "bundleName": "com.huawei.player",
        "version": {
            "code": 1,
            "name": "1.0"
        },
        "vendor": "example"
      }
      "module": {
        ...
        "js": [
          {
            "name": "default",
            "pages": [
              "pages/index/index",
              "pages/detail/detail"
            ]
          }
        ],
        "abilities": [
          {
            ...
          }
        ]
      }
    }
