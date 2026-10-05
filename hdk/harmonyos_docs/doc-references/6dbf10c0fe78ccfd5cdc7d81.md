---
name: document/cn/doc-references/js-components-container-tabs-0000001281480666
title: tabs
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/js-components-container-tabs-0000001281480666
source: portal
---

# tabs

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172503.22762712552228436143469138536923:50001231000000:2800:CEFA978EFEFB98829F5777EF0275F168793A0E47707D384B0702D8CD72D14E4D.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

tab页签容器。

#### 权限列表

无

#### 子组件

仅支持最多一个<[tab-bar](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-container-tab-bar-0000001281201114)>和最多一个<[tab-content](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-container-tab-content-0000001281001206)>。

#### 示例

#### 属性

除支持[通用属性](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-attributes-0000001281480654)外，还支持如下属性：

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
index | number | 0 | 否 | 当前处于激活态的tab索引。  
vertical | boolean | false | 否 | 是否为纵向的tab，默认为false，可选值为： \- false：tabbar和tabcontent上下排列。 \- true：tabbar和tabcontent左右排列。  
  
#### 样式

支持[通用样式](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-styles-0000001281201106)。

#### 事件

除支持[通用事件](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-events-0000001333720913)外，还支持如下事件：

名称 | 参数 | 描述  
---|---|---  
change | { index: indexValue } | tab页签切换后触发。动态修改index值不会触发该回调。  
  
#### 示例
    
    <!-- xxx.hml -->
    <div class="container">
      <tabs class = "tabs" index="0" vertical="false" onchange="change">
        <tab-bar class="tab-bar" mode="fixed">
          <text class="tab-text">Home</text>
          <text class="tab-text">Index</text>
          <text class="tab-text">Detail</text>
        </tab-bar>
        <tab-content class="tabcontent" scrollable="true">
          <div class="item-content" >
            <text class="item-title">First screen</text>
          </div>
          <div class="item-content" >
            <text class="item-title">Second screen</text>
          </div>
          <div class="item-content" >
            <text class="item-title">Third screen</text>
          </div>
        </tab-content>
      </tabs>
    </div>
    
    /* xxx.css */
    .container {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    .tabs {
      width: 100%;
    }
    .tabcontent {
      width: 100%;
      height: 80%;
      justify-content: center;
    }
    .item-content {
      height: 100%;
      justify-content: center;
    }
    .item-title {
      font-size: 60px;
    }
    .tab-bar {
      margin: 10px;
      height: 60px;
      border-color: #007dff;
      border-width: 1px;
    }
    .tab-text {
      width: 300px;
      text-align: center;
    }
    
    // xxx.js
    export default {
      change: function(e) {
        console.log("Tab index: " + e.index);
      },
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172503.52185401521230189271244348642312:50001231000000:2800:7F50615DB67D58561FC3F7ACE97E7CA554C7E9FC4F2A46BFBED587DB932A783B.gif?needInitFileName=true?needInitFileName=true?needInitFileName=true)
