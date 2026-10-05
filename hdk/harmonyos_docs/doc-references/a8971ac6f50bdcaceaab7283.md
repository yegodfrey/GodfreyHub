---
name: document/cn/doc-references/js-components-canvas-canvasgradient-0000001281001190
title: CanvasGradient对象
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/js-components-canvas-canvasgradient-0000001281001190
source: portal
---

# CanvasGradient对象

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172514.05098039039038967397195984569116:50001231000000:2800:91BBD75DE7EEE349463C3CADB807FCCA30A3F96AF2955F4B4ABDEB6E18068D4C.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

从API version 4开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。

渐变对象。

#### addColorStop

addColorStop(offset: number, color: string): void

设置渐变断点值，包括偏移和颜色。

    * 参数

参数 | 类型 | 描述  
---|---|---  
offset | number | 设置渐变点距离起点的位置占总体长度的比例，范围为0到1。  
color | string | 设置渐变的颜色。  
  
    * 示例
          
          <!-- xxx.hml -->
          <div>
            <canvas ref="canvas" style="width: 500px; height: 500px; background-color: #ffff00;"></canvas>
            <input type="button" style="width: 180px; height: 60px;" value="fillStyle" onclick="handleClick" />
          </div>
          
          // xxx.js
          export default {
            handleClick() {
              const el =this.$refs.canvas;
              const ctx =el.getContext('2d');
              const gradient = ctx.createLinearGradient(0,0,100,0);
              gradient.addColorStop(0,'#00ffff');
              gradient.addColorStop(1,'#ffff00');
            }
          }

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230804172514.62499265327841396017813692322976:50001231000000:2800:EEA8B03CB835335355EE4F9942F8C30D41397F966E32AAEABDD87E0A9313793F.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)
