---
name: document/cn/AppGallery-connect-References/applinking-socialcardinfo-builder-0000001054939429
title: AppLinking.SocialCardInfo.Builder
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/applinking-socialcardinfo-builder-0000001054939429
---

# AppLinking.SocialCardInfo.Builder

|Interface Info|
|:-----------------------------------------------------------------------------------------|
|public static final class AppLinking.SocialCardInfo.Builder AppLinking.SocialCardInfo的构造类。|

#### Constructor Summary

|Constructor Name And Description|
|:--------------------------------------------|
|public [Builder](#section17317239405)() 构造方法。|

#### Method Summary

|Qualifier and Type|Method Name and Description|
|:--------------------------------|:--------------------------------------------------------------------------------|
|AppLinking.SocialCardInfo|[build](#section1757025294212)() 生成社交分享标识信息。|
|AppLinking.SocialCardInfo.Builder|[setDescription](#section174961419121812)(String description) 设置社交分享标识信息中的预览说明信息。|
|AppLinking.SocialCardInfo.Builder|[setImageUrl](#section105492172116)(String imageUrl) 设置社交分享标识信息中的预览图片地址。|
|AppLinking.SocialCardInfo.Builder|[setTitle](#section9854835132112)(String title) 设置社交分享标识信息中的预览标题。|

#### Constructor

#### Builder

|Method|
|:---------------------|
|public Builder() 构造方法。|

#### Methods

#### build

|Method|
|:---------------------------------------------------------|
|public AppLinking.SocialCardInfo build() 生成聚合链接中的社交分享标识信息。|

Returns  

|Type|Description|
|:------------------------|:----------|
|AppLinking.SocialCardInfo|社交分享标识信息。|

#### setDescription

|Method|
|:----------------------------------------------------------------------------------------------|
|public AppLinking.SocialCardInfo.Builder setDescription(String description) 设置社交分享标识信息中的预览说明信息。|

Parameters  

|Name|Description|
|:----------|:--------------------|
|description|需要设置的在社交分享时展示的预览说明信息。|

Returns  

|Type|Description|
|:--------------------------------|:----------|
|AppLinking.SocialCardInfo.Builder|构造器。|

#### setImageUrl

|Method|
|:----------------------------------------------------------------------------------------|
|public AppLinking.SocialCardInfo.Builder setImageUrl(String imageUrl) 设置社交分享标识信息中的预览图片地址。|

Parameters  

|Name|Description|
|:-------|:------------------|
|imageUrl|需要设置的在社交分享时展示的图片地址。|

Returns  

|Type|Description|
|:--------------------------------|:----------|
|AppLinking.SocialCardInfo.Builder|构造器。|

#### setTitle

|Method|
|:--------------------------------------------------------------------------------|
|public AppLinking.SocialCardInfo.Builder setTitle(String title) 设置社交分享标识信息中的预览标题。|

Parameters  

|Name|Description|
|:----|:----------------|
|title|需要设置的在社交分享时展示的标题。|

Returns  

|Type|Description|
|:--------------------------------|:----------|
|AppLinking.SocialCardInfo.Builder|构造器。|

