---
name: document/cn/doc-references/js-components-basic-span-0000001281201094
title: span
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/js-components-basic-span-0000001281201094
source: portal
---

# span

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172508.41893215126654132709374228369793:50001231000000:2800:11275138512090909837F6DAE905489AB0A77CEBBB3A7B0FFB71E50AEDEF7FC7.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

作为<[text](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-basic-text-0000001281480646)>子组件提供文本修饰能力。

#### 权限列表

无

#### 子组件

支持子组件<span>。

#### 属性

支持[通用属性](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-attributes-0000001281480654)。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172508.74777990360400629578145071255508:50001231000000:2800:A6D109AACFC88F68B5240B2A34432F852D3E7A3CFF7CAD3210442CAA04DFE49C.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

不支持focusable和disabled属性。

#### 样式

仅支持如下样式：

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
color | <color> | - | 否 | 设置文本段落的文本颜色。  
font-size | <length> | 30px | 否 | 设置文本段落的文本尺寸。  
allow-scale | boolean | true | 否 | 设置文本段落的文本尺寸是否跟随系统设置字体缩放尺寸进行放大缩小。 如果在config描述文件中针对ability配置了fontSize的config-changes标签，则应用不会重启而直接生效。  
font-style | string | normal | 否 | 设置文本段落的字体样式，见[text组件font-style的样式属性](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-basic-text-0000001281480646#ZH-CN_TOPIC_0000001281480646__样式)。  
font-weight | number | string | normal | 否 | 设置文本段落的字体粗细，见[text组件font-weight的样式属性](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-basic-text-0000001281480646#ZH-CN_TOPIC_0000001281480646__样式)。  
text-decoration | string | none | 否 | 设置文本段落的文本修饰，见[text组件text-decoration样式属性](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-basic-text-0000001281480646#ZH-CN_TOPIC_0000001281480646__样式)。  
font-family | string | sans-serif | 否 | 设置文本段落的字体列表，用逗号分隔，每个字体用字体名或者字体族名设置。列表中第一个系统中存在的或者通过[自定义字体](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-customizing-font-0000001281361074)指定的字体，会被选中作为文本的字体。  
  
#### 事件

仅支持[通用事件](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-events-0000001333720913)中的click事件。

#### 方法

不支持。

#### 示例
    
    <!-- xxx.hml -->
    <div class="container">
      <text class="title">
        <span class="spanTxt">span</span>
      </text>
    </div>
    
    /* xxx.css */
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title {
      font-size: 30px;
      text-align: center;
      width: 100%;
      height: 100px;
    }
    .spanTxt{
      color: chartreuse;
      font-size: 50px;
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172508.41713523466851501768690770613169:50001231000000:2800:C9EDD246617F5278515C543C674F431CEC0D428E32B7C7F54D702150D8D448EB.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)
