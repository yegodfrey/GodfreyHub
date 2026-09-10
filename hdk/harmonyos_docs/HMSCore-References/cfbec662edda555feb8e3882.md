---
name: document/cn/HMSCore-References/word-0000001052542435
title: Word
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/word-0000001052542435
---

# Word

|Class Info|
|:-------------------------|
|public class Word 表示地点的单词。|

#### Public Constructor Summary

|Constructor Name|
|:---------------------------------------------------------------------------------------|
|[Word](#section114762417137)(int offset, String value) 使用单词在description里的偏移位和单词创建Word对象。|

#### Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:-------------------------------------------------------------------|
|int|[getOffset](#section727824917310)() 获取单词在description里的偏移位。|
|String|[getValue](#section1316144917312)() 获取单词。|
|void|[setOffset](#section231916491138)(int offset) 设置单词在description里的偏移位。|
|void|[setValue](#section632116492038)(String value) 设置单词。|

#### Public Constructors

#### Word

|Constructor|
|:---------------------------------------------------------------|
|Word(int offset, String value) 使用单词在description里的偏移位和单词创建Word对象。|

Parameters  

|Name|Description|
|:-----|:-------------------|
|offset|单词在description里的偏移位。|
|value|单词。|

#### Public Methods

#### getOffset

|Method|
|:-----------------------------------------------------|
|public int getOffset() 您调用此API可以获取单词在description里的偏移位。|

Returns  

|Type|Parameter desc|
|:---|:-------------------|
|int|单词在description里的偏移位。|

#### getValue

|Method|
|:--------------------------------------|
|public String getValue() 您调用此API可以获取单词。|

Returns  

|Type|Description|
|:-----|:----------|
|String|单词。|

#### setOffset

|Method|
|:----------------------------------------------------------------|
|public void setOffset(int offset) 您调用此API可以设置单词在description里的偏移位。|

Parameters  

|Name|Description|
|:-----|:-------------------|
|offset|单词在description里的偏移位。|

#### setValue

|Method|
|:------------------------------------------------|
|public void setValue(String value) 您调用此API可以设置单词。|

Parameters  

|Name|Description|
|:----|:----------|
|value|单词。|

