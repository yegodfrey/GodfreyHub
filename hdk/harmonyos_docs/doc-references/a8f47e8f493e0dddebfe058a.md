---
name: document/cn/doc-references/drawing__pen_8h-0000001360285594
title: drawing_pen.h
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/drawing__pen_8h-0000001360285594
source: portal
---

# drawing_pen.h  
  
#### 概述

文件中定义了与画笔相关的功能函数。

**起始版本：**

8

**相关模块：**

[Drawing](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457)

#### 汇总

#### [h2]枚举

枚举名称 | 描述  
---|---  
[OH_Drawing_PenLineCapStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__gafa9d815d933e0fd6aa7549d12080fa8f) { [LINE_FLAT_CAP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ggafa9d815d933e0fd6aa7549d12080fa8fa99c48cc6172088f1a86e8688e347933a), [LINE_SQUARE_CAP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ggafa9d815d933e0fd6aa7549d12080fa8fac9929c30114c046b75b844e459f1e69f), [LINE_ROUND_CAP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ggafa9d815d933e0fd6aa7549d12080fa8fa0efe3fb7b56d7407737c42aebe5b91e5) } | 枚举集合定义了画笔笔帽的样式，即画笔在绘制线段时，在线段头尾端点的样式  
[OH_Drawing_PenLineJoinStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__gad10001f23f6c42f97a392cba30011460) { [LINE_MITER_JOIN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ggad10001f23f6c42f97a392cba30011460a126e5fbae0f63b8431d3a6763035d488), [LINE_ROUND_JOIN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ggad10001f23f6c42f97a392cba30011460aa2bfcc7c744ab7a56c047942060ad3ba), [LINE_BEVEL_JOIN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ggad10001f23f6c42f97a392cba30011460a8ad7df33f8ff73c5c080fcf159631fde) } | 枚举集合定义了线条转角的样式，即画笔在绘制折线段时，在折线转角处的样式  
  
#### [h2]函数

函数名称 | 描述  
---|---  
[OH_Drawing_PenCreate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__gae52fe4132b90726d813661750948e2dd) (void) | 函数用于创建一个画笔对象  
[OH_Drawing_PenDestroy](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga907538d02a50836e8033a3f7bf12c80e) ([OH_Drawing_Pen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga88e73d9d7b62e6113237fc0f828910d2) *) | 函数用于销毁画笔对象并回收该对象占有的内存  
[OH_Drawing_PenIsAntiAlias](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga31dee499a3d1dd81e526bcc1dd620961) (const [OH_Drawing_Pen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga88e73d9d7b62e6113237fc0f828910d2) *) | 函数用于获取画笔是否设置抗锯齿属性，如果为真则说明画笔会启用抗锯齿功能，在绘制图形时会对图形的边缘像素进行半透明的模糊处理  
[OH_Drawing_PenSetAntiAlias](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga93dbc44cf424038a17ae311920550283) ([OH_Drawing_Pen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga88e73d9d7b62e6113237fc0f828910d2) *, bool) | 函数用于设置画笔的抗锯齿属性，设置为真则画笔在绘制图形时会对图形的边缘像素进行半透明的模糊处理  
[OH_Drawing_PenGetColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga8a8db886ecf41a729e40a1f760338220) (const [OH_Drawing_Pen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga88e73d9d7b62e6113237fc0f828910d2) *) | 函数用于获取画笔的颜色属性，颜色属性描述了画笔绘制图形轮廓时使用的颜色，用一个32位（ARGB）的变量表示  
[OH_Drawing_PenSetColor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga6e5b065f521dd9c41d5e7f2af5c379cb) ([OH_Drawing_Pen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga88e73d9d7b62e6113237fc0f828910d2) *, uint32_t color) | 函数用于设置画笔的颜色属性，颜色属性描述了画笔绘制图形轮廓时使用的颜色，用一个32位（ARGB）的变量表示  
[OH_Drawing_PenGetWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga3d898184f61b685d724e6d272fb12168) (const [OH_Drawing_Pen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga88e73d9d7b62e6113237fc0f828910d2) *) | 函数用于获取画笔的厚度属性，厚度属性描述了画笔绘制图形轮廓的宽度  
[OH_Drawing_PenSetWidth](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga562b5102bf599e640a94e104480df0f4) ([OH_Drawing_Pen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga88e73d9d7b62e6113237fc0f828910d2) *, float width) | 函数用于设置画笔的厚度属性，厚度属性描述了画笔绘制图形轮廓的宽度  
[OH_Drawing_PenGetMiterLimit](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga8f8a512b3930d8883dff59916eaaa72a) (const [OH_Drawing_Pen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga88e73d9d7b62e6113237fc0f828910d2) *) | 函数用于获取折线尖角的限制值，当画笔绘制一条折线，转角类型设置为尖角时，那么此时该属性用于限制出现尖角的长度范围，如果超出则平角显示，不超出依然为尖角  
[OH_Drawing_PenSetMiterLimit](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga73a96e3e9ca95a82f0de2076cb03ffba) ([OH_Drawing_Pen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga88e73d9d7b62e6113237fc0f828910d2) *, float miter) | 函数用于设置折线尖角的限制值，当画笔绘制一条折线，转角类型设置为尖角时，那么此时该属性用于限制出现尖角的长度范围，如果超出则平角显示，不超出依然为尖角  
[OH_Drawing_PenGetCap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga7db0d5ac28ac24db29fc49c113affc32) (const [OH_Drawing_Pen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga88e73d9d7b62e6113237fc0f828910d2) *) | 函数用于获取画笔笔帽的样式  
[OH_Drawing_PenSetCap](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__gaa0d8f5e75ec5fbc776c4e5e780e29af3) ([OH_Drawing_Pen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga88e73d9d7b62e6113237fc0f828910d2) *, [OH_Drawing_PenLineCapStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__gafa9d815d933e0fd6aa7549d12080fa8f)) | 函数用于设置画笔笔帽样式  
[OH_Drawing_PenGetJoin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga35b26a60ebf70c207f1e8fb8659a9103) (const [OH_Drawing_Pen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga88e73d9d7b62e6113237fc0f828910d2) *) | 函数用于获取画笔绘制折线转角的样式  
[OH_Drawing_PenSetJoin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga65e9826c39a847b22825e99af65afbb7) ([OH_Drawing_Pen](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__ga88e73d9d7b62e6113237fc0f828910d2) *, [OH_Drawing_PenLineJoinStyle](https://developer.harmonyos.com/cn/docs/documentation/doc-references/_drawing-0000001410125457#ZH-CN_TOPIC_0000001495587077__gad10001f23f6c42f97a392cba30011460)) | 函数用于设置画笔绘制转角的样式
