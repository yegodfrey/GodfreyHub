---
name: document/cn/content/voicecommand-0000002499571314
title: 命令：AI语音互动<VoiceCommand>
uri: https://developer.huawei.com/consumer/cn/doc/content/voicecommand-0000002499571314
---

# 命令：AI语音互动\<VoiceCommand\>

#### 功能概述

该功能通过拉起小艺Agent，触发语音交互，匹配用户输入的关联词，根据匹配的关键词，触发指定命令。

通过把设计师提供的能力列表skills发送给小艺智能体，其再结合用户在小艺的语音输出，经过大模型处理后，匹配出用户需要的能力，小艺智能体通过全局变量matchSkill_value传递给主题引擎处理对应的逻辑。

创意场景

1.通过语音驱动，让锁屏卡通形象跳舞 。  

#### 支持范围

起始规范版本：HarmonyOS 7.0

是否平台特性：否  

| |锁屏（Lockscreen）|桌面（Wallpaper）|一镜到底（LongTake）|百变卡片（Widget）|充电动效（ChargingSkin）|
|:---|:------------:|:-----------:|:------------:|:----------:|:----------------:|
|是否支持|√|x|x|√|x|
[表1 支持根标签]

| |直板机|折叠屏|平板|
|:---|:-:|:-:|:-:|
|是否支持|√|√|√|
[表2 支持设备类型]

#### XML规范

```
<VoiceCommand skills="能力1|能力2|能力3" chipsExp="指令1|指令2|指令3" condition=""/>
```

#### 参数说明

|---------|---|--|------------------------------------------------------------------------------------------------------------|
|参数|类型|选项|注释|
|skills|字符串|必填|该能力下所能支持的技能列表。 用竖线作为分隔符。关键词内不建议包含空格、逗号等其他符号，避免影响AI识别。"未匹配"可用做在其他关键词未匹配时，触发默认指令，没有默认指令则不添加。|
|chipsExp|字符串|必填|快捷指令，与技能列表对应，个数不超过5个，文本最大长度为10，超过10无效不显示。用竖线\|作为分隔符。不支持转义字符。建议不超过3个，每个字数控制在5个以内，首尾无空格。 支持字符串表达式。单个条件结果要加单引号。|
|condition|表达式|选填|条件判断，支持表达式。当condition里的条件判断为非0或者为true时，该命令执行，为false或者0则不执行。默认：true|

![](https://media:901787895377909975)  
1. 设计触发识别入口时，建议只在Button-\>trigger内使用。

2. 需要使用统一的小艺图标（[小艺入口图标.zip](https://media:901787895377963976)），作为启用小艺的入口。

3. 一个根标签下，仅支持一个AI语音命令。

4. 建议制作首次使用引导说明，同时需要在预览图和简介中增加功能使用说明。  

#### 应用示例

示例一：用于简单指令

```
<?xml version="1.0" encoding="utf-8"?>
<Lockscreen version="1" frameRate="30" screenWidth="1440">
	<Var name="voice1" expression="#strIndexOf(#matchSkill_value,'唱歌')" type="string">
	<Button x="0" y="0" w="100" h="100">
		<Trigger action="down">
			<VoiceCommand skills="唱歌|隐藏|播放|停止|改变"/>
		</Trigger>
	</Button>
	<Image x="24" y="1189" src=""xiong/sing.png" visibility="eq(#voice1,0)"/>
</Lockscreen>
```

示例二：嵌入子命令（推荐）

```
<?xml version="1.0" encoding="utf-8"?>
<Lockscreen version="1" frameRate="30" screenWidth="1440">
	<Var name="voice1" expression="strIndexOf(#matchSkill_value,'显示')" type="string">
        <Var name="voice2" expression="strIndexOf(#matchSkill_value,'隐藏')" type="string">
        <Var name="voice3" expression="strIndexOf(#matchSkill_value,'播放')" type="string">
        <Var name="voice4" expression="strIndexOf(#matchSkill_value,'停止')" type="string">
        <Var name="voice5" expression="strIndexOf(#matchSkill_value,'改变')" type="string">
	<Button x="61" y="1650" w="985" h="346">
		<Trigger action="down">
			<VoiceCommand skills="显示|隐藏|播放|停止|改变">
                             <Command condition="eq(#voice1,0)" target="image1.visibility" value="true">
                             <Command condition="eq(#voice2,0)" target="image1.visibility" value="false">
 			     <VideoCommand condition="eq(#voice3,0)" name="sp1" play="true">
                             <VideoCommand condition="eq(#voice4,0)" name="sp1" play="false">
                             <VariableCommand condition="eq(#voice5,0)" name="textContext" expression="#textContext+1">
                        </VoiceCommand>
		</Trigger>
	</Button>
</Lockscreen>
```

