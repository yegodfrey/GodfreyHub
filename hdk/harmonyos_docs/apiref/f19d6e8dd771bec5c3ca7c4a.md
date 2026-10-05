---
name: document/cn/apiref/js-components-basic-image-animator-0000001050066126
title: image-animator
uri: https://developer.huawei.com/consumer/cn/doc/apiref/js-components-basic-image-animator-0000001050066126
source: portal
---

# image-animator  
  
图片帧动画播放器。

#### 子组件

不支持。

#### 属性

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
images | Array<ImageFrame> | - | 是 | 设置图片帧信息集合。每一帧的帧信息包含图片路径、图片大小和图片位置信息。目前支持以下图片格式：png、jpg。ImageFrame的详细说明请见表1。 说明： 使用时需要使用数据绑定的方式，如images = {{images}}，js中声明相应变量：images: [{src: "/common/heart-rate01.png"}, {src: "/common/heart-rate02.png"}]。  
iteration | number | string | infinite | 否 | 设置帧动画播放次数。number表示固定次数，infinite枚举表示无限次数播放。  
reverse | boolean | false | 否 | 设置播放顺序。false表示从第1张图片播放到最后1张图片； true表示从最后1张图片播放到第1张图片。  
fixedsize | boolean | true | 否 | 设置图片大小是否固定为组件大小。 true表示图片大小与组件大小一致，此时设置图片的width 、height 、top 和left属性是无效的。false表示每一张图片的 width 、height 、top和left属性都要单独设置。  
duration | string | - | 是 | 设置单次播放时长。单位支持[s(秒)|ms(毫秒)]，默认单位为ms。 duration为0时，不播放图片。 值改变只会在下一次循环开始时生效。  
fillmode5+ | string | forwards | 否 | 指定帧动画执行结束后的状态。可选项有：
     * none：恢复初始状态。
     * forwards：保持帧动画结束时的状态（在最后一个关键帧中定义）。  
id | string | - | 否 | 组件的唯一标识。  
style | string | - | 否 | 组件的样式声明。  
class | string | - | 否 | 组件的样式类，用于引用样式表。  
ref | string | - | 否 | 用来指定指向子元素的引用信息，该引用将注册到父组件的$refs 属性对象上。  
  
**表1** ImageFrame说明名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
src | <uri> | - | 是 | 图片路径。  
width | <length> | 0 | 否 | 图片宽度。  
height | <length> | 0 | 否 | 图片高度。  
top | <length> | 0 | 否 | 图片相对于组件左上角的纵向坐标。  
left | <length> | 0 | 否 | 图片相对于组件左上角的横向坐标。  
  
#### 事件

名称 | 参数 | 描述  
---|---|---  
stop | - | 帧动画结束时触发。  
click | - | 点击动作触发该事件。  
longpress | - | 长按动作触发该事件。  
swipe | [SwipeEvent](https://device.harmonyos.com/cn/docs/develop/apiref/js-common-events-0000001051151132#ZH-CN_TOPIC_0000001058460527__table111811577714) | 组件上快速滑动后触发。  
  
#### 样式

名称 | 类型 | 默认值 | 必填 | 描述  
---|---|---|---|---  
width | <length> | <percentage>5+ | - | 否 | 设置组件自身的宽度。 未设置时组件宽度默认为0。  
height | <length> | <percentage>5+ | - | 否 | 设置组件自身的高度。 未设置时组件高度默认为0。  
padding | <length> | 0 | 否 | 使用简写属性设置所有的内边距属性。 该属性可以有1到4个值：
     * 指定一个值时，该值指定四个边的内边距。
     * 指定两个值时，第一个值指定上下两边的内边距，第二个指定左右两边的内边距。
     * 指定三个值时，第一个指定上边的内边距，第二个指定左右两边的内边距，第三个指定下边的内边距。
     * 指定四个值时分别为上、右、下、左边的内边距（顺时针顺序）。  
padding-[left|top|right|bottom] | <length> | 0 | 否 | 设置左、上、右、下内边距属性。  
margin | <length> | <percentage>5+ | 0 | 否 | 使用简写属性设置所有的外边距属性，该属性可以有1到4个值。
     * 只有一个值时，这个值会被指定给全部的四个边。
     * 两个值时，第一个值被匹配给上和下，第二个值被匹配给左和右。
     * 三个值时，第一个值被匹配给上, 第二个值被匹配给左和右，第三个值被匹配给下。
     * 四个值时，会依次按上、右、下、左的顺序匹配 (即顺时针顺序)。  
margin-[left|top|right|bottom] | <length> | <percentage>5+ | 0 | 否 | 设置左、上、右、下外边距属性。  
border-width | <length> | 0 | 否 | 使用简写属性设置元素的所有边框宽度。  
border-color | <color> | black | 否 | 使用简写属性设置元素的所有边框颜色。  
border-radius | <length> | - | 否 | border-radius属性是设置元素的外边框圆角半径。  
background-color | <color> | - | 否 | 设置背景颜色。  
opacity5+ | number | 1 | 否 | 元素的透明度，取值范围为0到1，1表示为不透明，0表示为完全透明。  
display | string | flex | 否 | 确定一个元素所产生的框的类型，可选值为：
     * flex：弹性布局。
     * none：不渲染此元素。  
[left|top] | <length> | - | 否 | left|top确定元素的偏移位置。
     * left属性规定元素的左边缘。该属性定义了定位元素左外边距边界与其包含块左边界之间的偏移。
     * top属性规定元素的顶部边缘。该属性定义了一个定位元素的上外边距边界与其包含块上边界之间的偏移。  
  
#### 方法

名称 | 参数 | 描述  
---|---|---  
start | - | 开始播放图片帧动画。再次调用，重新从第1帧开始播放。  
pause | - | 暂停播放图片帧动画。  
stop | - | 停止播放图片帧动画。  
resume | - | 继续播放图片帧。  
getState | - | 获取播放状态。可能值有：
     * playing：播放中
     * paused：已暂停
     * stopped：已停止。  
  
#### 示例
    
    <!-- xxx.hml -->
    <div class="container">
      <image-animator class="animator" ref="animator" images="{{frames}}" duration="1s" />
      <div class="btn-box">
        <input class="btn" type="button" value="start" @click="handleStart" />
        <input class="btn" type="button" value="stop" @click="handleStop" />
        <input class="btn" type="button" value="pause" @click="handlePause" />
        <input class="btn" type="button" value="resume" @click="handleResume" />
      </div>
    </div>
    
    /* xxx.css */
    .container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      left: 0px;
      top: 0px;
      width: 454px;
      height: 454px;
    }
    .animator {
      width: 70px;
      height: 70px;
    }
    .btn-box {
      width: 264px;
      height: 120px;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }
    .btn {
      border-radius: 8px;
      width: 120px;
      margin-top: 8px;
    }
    
    //xxx.js
    export default {
      data: {
        frames: [
          {
            src: "/common/asserts/heart78.png",
          },
          {
            src: "/common/asserts/heart79.png",
          },
          {
            src: "/common/asserts/heart80.png",
          },
          {
            src: "/common/asserts/heart81.png",
          },
          {
            src: "/common/asserts/heart82.png",
          },
          {
            src: "/common/asserts/heart83.png",
          },
          {
            src: "/common/asserts/heart84.png",
          },
          {
            src: "/common/asserts/heart85.png",
          },
          {
            src: "/common/asserts/heart86.png",
          },
          {
            src: "/common/asserts/heart87.png",
          },
          {
            src: "/common/asserts/heart88.png",
          },
          {
            src: "/common/asserts/heart89.png",
          },
          {
            src: "/common/asserts/heart90.png",
          },
          {
            src: "/common/asserts/heart91.png",
          },
          {
            src: "/common/asserts/heart92.png",
          },
          {
            src: "/common/asserts/heart93.png",
          },
          {
            src: "/common/asserts/heart94.png",
          },
          {
            src: "/common/asserts/heart95.png",
          },
          {
            src: "/common/asserts/heart96.png",
          },
        ],
      },
      handleStart() {
        this.$refs.animator.start();
      },
      handlePause() {
        this.$refs.animator.pause();
      },
      handleResume() {
        this.$refs.animator.resume();
      },
      handleStop() {
        this.$refs.animator.stop();
      },
    };

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20210430141403.49556942760604879480218865807636:50520429081811:2800:02316C15595973662A88333F5BB6FDD647F8C61065B13F556A1043D717B5ADCB.gif?needInitFileName=true?needInitFileName=true)
