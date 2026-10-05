---
name: document/cn/doc-references/js-components-basic-button-0000001333720893
title: button
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/js-components-basic-button-0000001333720893
source: portal
---

# button  
  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172504.94820059019301267731373526550555:50001231000000:2800:5F44FC148509077BE15D00DE62DCF41E2B23B0FBAE3CC3B6D147F5FD3C319EA7.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

提供按钮组件，包括胶囊按钮、圆形按钮、文本按钮、弧形按钮、下载按钮。

#### 子组件

不支持。

#### 示例

#### 属性

除支持[通用属性](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-attributes-0000001281480654)外，还支持如下属性：

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
type | string | - | 否 | 不支持动态修改。如果该属性缺省，展示类胶囊型按钮，不同于胶囊类型，四边圆角可以通过border-radius分别指定，如果需要设置该属性，则可选值包括如下： \- capsule：胶囊型按钮，带圆角按钮，有背景色和文本； \- circle：圆形按钮，支持放置图标； \- text：文本按钮，仅包含文本显示； \- arc：弧形按钮，仅支持智能穿戴； \- download：下载按钮，额外增加下载进度条功能。  
value | string | - | 否 | button的文本值。  
icon | string | - | 否 | button的图标路径，图标格式为jpg，png和svg。  
placement5+ | string | end | 否 | 仅在type属性为缺省时生效，设置图标位于文本的位置，可选值为： \- start：图标位于文本起始处； \- end：图标位于文本结束处； \- top：图标位于文本上方； \- bottom：图标位于文本下方。  
waiting | boolean | false | 否 | waiting状态，waiting为true时展现等待中转圈效果，位于文本左侧。类型为download时不生效。  
  
#### 样式

#### [h2]type设置为非arc

除支持[通用样式](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-styles-0000001281201106)外，还支持如下样式：

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
text-color | <color> | #ff007dff | 否 | 按钮的文本颜色。  
font-size | <length> | 16px | 否 | 按钮的文本尺寸。  
allow-scale | boolean | true | 否 | 按钮的文本尺寸是否跟随系统设置字体缩放尺寸进行放大缩小。 如果在config描述文件中针对ability配置了fontSize的config-changes标签，则应用不会重启而直接生效。  
font-style | string | normal | 否 | 按钮的字体样式。  
font-weight | number | string | normal | 否 | 按钮的字体粗细。见[text组件font-weight的样式属性](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-basic-text-0000001281480646#ZH-CN_TOPIC_0000001281480646__样式)。  
font-family | <string> | sans-serif | 否 | 按钮的字体列表，用逗号分隔，每个字体用字体名或者字体族名设置。列表中第一个系统中存在的或者通过[自定义字体](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-customizing-font-0000001281361074)指定的字体，会被选中作为文本的字体。  
icon-width | <length> | - | 否 | 设置圆形按钮内部图标的宽，默认填满整个圆形按钮。 icon使用svg图源时必须设置该样式。  
icon-height | <length> | - | 否 | 设置圆形按钮内部图标的高，默认填满整个圆形按钮。 icon使用svg图源时必须设置该样式。  
radius | <length> | - | 否 | 按钮圆角半径。在圆形按钮类型下该样式优先于通用样式的width和height样式。  
  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172504.02252127437873898430522081550829:50001231000000:2800:6F94C3CB5262375620400964C35705D2473028BDD5AE1765C436D5776C627C4B.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

    * 胶囊按钮（type=capsule）时，不支持border相关样式；

    * 圆形按钮（type=circle）时，不支持文本相关样式；

    * 文本按钮（type=text）时，自适应文本大小，不支持尺寸设置（radius，width，height），背景透明不支持background-color样式。

#### [h2]type设置为arc

除支持[通用样式](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-styles-0000001281201106)中background-color、opacity、display、visibility、position、[left|top|right|bottom外，还支持如下样式：

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
text-color | <color> | #de0000 | 否 | 弧形按钮的文本颜色。  
font-size | <length> | 37.5px | 否 | 弧形按钮的文本尺寸。  
allow-scale | boolean | true | 否 | 弧形按钮的文本尺寸是否跟随系统设置字体缩放尺寸进行放大缩小。  
font-style | string | normal | 否 | 弧形按钮的字体样式。  
font-weight | number | string | normal | 否 | 弧形按钮的字体粗细。见[text组件font-weight的样式属性](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-basic-text-0000001281480646#ZH-CN_TOPIC_0000001281480646__样式)。  
font-family | <string> | sans-serif | 否 | 按钮的字体列表，用逗号分隔，每个字体用字体名或者字体族名设置。列表中第一个系统中存在的或者通过[自定义字体](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-customizing-font-0000001281361074)指定的字体，会被选中作为文本的字体。  
  
#### 事件

支持[通用事件](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-events-0000001333720913)。

#### 方法

支持[通用方法](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-components-common-methods-0000001333321161)。

类型为download时，支持如下方法：

名称 | 参数 | 描述  
---|---|---  
setProgress | { progress:percent } | 设定下载按钮进度条进度，取值位于0-100区间内，当设置的值大于0时，下载按钮展现进度条。当设置的值大于等于100时，取消进度条显示。 浮在进度条上的文字通过value值进行变更。
