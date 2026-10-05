---
name: document/cn/doc-references/js-components-basic-toggle-0000001333720905
title: toggle
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/js-components-basic-toggle-0000001333720905
source: portal
---

# toggle

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172509.36391770687695914785659607735456:50001231000000:2800:C13489E9FE4C7599560AEC2488BBF66098E5A891E83DD81B043C6F9A0BEF7894.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

从API version 5开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

状态按钮用于从一组选项中进行选择，并可能在界面上实时显示选择后的结果。通常这一组选项都是由状态按钮构成。

#### 权限列表

无

#### 子组件

不支持。

#### 属性

除支持[通用属性](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-attributes-0000001281480654)外，还支持如下属性：

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
value | string | - | 是 | 状态按钮的文本值。  
checked | boolean | false | 否 | 状态按钮是否被选中。  
  
#### 样式

除支持[通用样式](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-styles-0000001281201106)外，还支持如下样式：

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
text-color | <color> | #E5000000 | 否 | 状态按钮的文本颜色。  
font-size | <length> | 16px | 否 | 状态按钮的文本尺寸。  
allow-scale | boolean | true | 否 | 状态按钮的文本尺寸是否跟随系统设置字体缩放尺寸进行放大缩小。 如果在config描述文件中针对ability配置了fontSize的config-changes标签，则应用不会重启而直接生效。  
font-style | string | normal | 否 | 状态按钮的字体样式。  
font-weight | number | string | normal | 否 | 状态按钮的字体粗细。见[text组件font-weight的样式属性](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-basic-text-0000001281480646#ZH-CN_TOPIC_0000001281480646__样式)。  
font-family | <string> | sans-serif | 否 | 状态按钮的字体列表，用逗号分隔，每个字体用字体名或者字体族名设置。列表中第一个系统中存在的或者通过[自定义字体](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-customizing-font-0000001281361074)指定的字体，会被选中作为文本的字体。  
  
#### 事件

除支持[通用事件](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-events-0000001333720913)外，还支持如下事件：

名称 | 参数 | 描述  
---|---|---  
change | { checked：isChecked } | 组件选中状态发生变化时触发。  
  
#### 方法

支持[通用方法](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-methods-0000001333321161)。

#### 示例
    
    <!-- xxx.hml -->
    <div style="flex-direction: column;">
      <text class="margin">1. Multiple choice example</text>
      <div style="flex-wrap: wrap">
        <toggle class="margin" for="{{toggles}}">{{$item}}</toggle>
      </div>
      <text class="margin">2. Single choice example</text>
      <div style="flex-wrap: wrap">
        <toggle class="margin" for="{{toggle_list}}" id="{{$item.id}}" checked="{{$item.checked}}" 
          value="{{$item.name}}" @change="allchange" @click="allclick({{$item.id}})"></toggle>
      </div>
    </div>
    
    /* xxx.css */
    .margin {
      margin: 7px;
    }
    
    // xxx.js
    export default {
      data: {
        toggle_list: [
          { "id":"1001", "name":"Living room", "checked":true },
          { "id":"1002", "name":"Bedroom", "checked":false },
          { "id":"1003", "name":"Second bedroom", "checked":false },
          { "id":"1004", "name":"Kitchen", "checked":false },
          { "id":"1005", "name":"Study", "checked":false },
          { "id":"1006", "name":"Garden", "checked":false },
          { "id":"1007", "name":"Bathroom", "checked":false },
          { "id":"1008", "name":"Balcony", "checked":false },
        ],
        toggles: ["Living room","Bedroom","Kitchen","Study"],
        idx: ""
      },
      allclick(arg) {
        this.idx = arg
      },
      allchange(e) {
        if (e.checked === true) {
          for (var i = 0; i < this.toggle_list.length; i++) {
            if (this.toggle_list[i].id === this.idx) {
              this.toggle_list[i].checked = true
            } else {
              this.toggle_list[i].checked = false
            }
          }
        }
      }
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172509.58706148780113891580461746706823:50001231000000:2800:119D4C7939842FA85E2F20FBBA9807B41106DE10930081492C9E151E5EAD9318.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)
