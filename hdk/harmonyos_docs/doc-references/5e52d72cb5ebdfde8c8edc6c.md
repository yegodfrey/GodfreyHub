---
name: document/cn/doc-references/js-components-common-attributes-0000001281480654
title: 通用属性
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/js-components-common-attributes-0000001281480654
source: portal
---

# 通用属性  
  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172456.28252937323387470177352472957455:50001231000000:2800:B921F9903D7AA17F7A75C84801ED732501D796C40ECBCB5AC0EB5B95DB004D35.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

#### 常规属性

常规属性是指组件普遍支持的用来设置组件基本标识和外观显示特征的属性。

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
id | string | - | 否 | 组件的唯一标识。  
style | string | - | 否 | 组件的样式声明。  
class | string | - | 否 | 组件的样式类，用于引用样式表。  
ref | string | - | 否 | 用来指定指向子元素或子组件的引用信息，该引用将注册到父组件的$refs 属性对象上。  
disabled | boolean | false | 否 | 当前组件是否被禁用，在禁用场景下，组件将无法响应用户交互。  
data | string | - | 否 | 给当前组件设置data属性，进行相应的数据存储和读取。JS文件中： \- 在事件回调中使用 e.target.attr.data 读取数据，e为事件回调函数入参。 \- 使用$element或者$refs获取DOM元素后，通过attr.data 进行访问。 从API Version 6 开始，建议使用data-*。  
data-*6+ | string | - | 否 | 给当前组件设置data-*属性，进行相应的数据存储和读取。大小写不敏感，如data-A和data-a默认相同。JS文件中： \- 在事件回调中使用 e.target.dataSet.a读取数据，e为事件回调函数入参。 \- 使用$element或者$refs获取DOM元素后，通过dataSet.a进行访问。  
click-effect5+ | string | - | 否 | 通过这个属性可以设置组件的弹性点击效果，当前支持如下三种效果： \- spring-small：建议小面积组件设置，缩放(90%)。 \- spring-medium：建议中面积组件设置，缩放(95%)。 \- spring-large：建议大面积组件设置，缩放(95%)。  
dir6+ | string | auto | 否 | 设置元素布局模式，支持设置rtl、ltr和auto三种属性值： \- rtl：使用从右往左布局模式。 \- ltr：使用从左往右布局模式。 \- auto：跟随系统语言环境。  
  
#### 渲染属性

渲染属性是指组件普遍支持的用来设置组件是否渲染的属性。

名称 | 类型 | 默认值 | 描述  
---|---|---|---  
for | Array | - | 根据设置的数据列表，展开当前元素。  
if | boolean | - | 根据设置的boolean值，添加或移除当前元素。  
show | boolean | - | 根据设置的boolean值，显示或隐藏当前元素。  
  
#### 示例

#### [h2]示例1
    
    <!-- xxx.hml -->
    <div id="container">
        <button class="btn" type="capsule" value="toggleDisplay" onclick="toggleDisplay"></button>
    	<list class="list">
    		<list-item for="{{ array }}" class="listItem">
    			<text class="text" onclick="toggleShow" show="{{ visible }}"
                      if="{{ display }}">{{ $item.value }}</text>
    		</list-item>
    	</list>
    </div>
    
    /* xxx.css */
    #container {
        flex-direction: column;
        width: 100%;
        margin-top: 10px;
    }
    .text {
        font-size: 50px;
        font-weight: 500;
        margin-left: 12px;
    }
    .listItem {
        width: 100%;
        height: 100px;
        line-height: 60px;
        border-bottom: 1px solid #DEDEDE;
        font-size: 20px;
    }
    .btn{
        width: 280px;
        font-size: 26px;
        margin: 10px 0;
    }
    
    /* xxx.js */
    export default {
    	data: {
            visible: true,
            display: true,
            title: "",
            i: 4,
            array: [
                {"value": "列表文本0"},
                {"value": "列表文本1"},
                {"value": "列表文本2"},
                {"value": "列表文本3"},
            ],
        },
        toggleShow: function() {
            this.array.push({"value": "列表文本" + this.i })
            this.i++
        },
        toggleDisplay: function() {
            this.display = !this.display
        },
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172456.33160259696685459427253488051509:50001231000000:2800:3C13A502D157F87721346AE7DA020560289981357A3B1CFCF93F8FE664473E01.gif?needInitFileName=true?needInitFileName=true?needInitFileName=true)

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172456.84881198039571009518962058382162:50001231000000:2800:803E0BAC30260299E8FB35F2B5C9A9A33512F5935D0A14E5F23B1A40CC0E4F23.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

属性和样式不能混用，不能在属性字段中进行样式设置。

#### [h2]示例2
    
    <!-- xxx.hml -->
    <div class="container">
        <div>
            <text class="text1" dir='rtl' >hello world</text>
        </div>
        <div>
            <text class="text2" dir='ltr' >hello world</text>
        </div>
    </div>
    
    /* xxx.css */
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .text1{
        width: 90%;
        height: 100px;
        background-color: aqua;
    }
    .text2{
        width: 90%;
        height: 100px;
        background-color: blue;
    }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172456.05842468588163241559206271319141:50001231000000:2800:95171763C990326548BB568BE03D06E19A9ED228F5887945D7797E134AE21F43.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)
