---
name: document/cn/HMSCore-References/api-searchfragment-0000001050152850
title: SearchFragment
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/api-searchfragment-0000001050152850
---

# SearchFragment

|Class Info|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public class SearchFragment widget提供的SearchFragment类，继承自Fragment。 > 说明 > 正常使用SearchFragment需要调用[setApiKey](#section137310497543)(String apiKey)方法设置API密钥。如果API密钥为空，点击搜索框则不会进行跳转。|

## Public Constructor Summary

|Constructor Name|
|:------------------------|
|SearchFragment() 默认的构造方法。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:-----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[setApiKey](#section137310497543)(String apiKey) 设置SearchFragment的API密钥，必选。|
|void|[setHint](#section134943215512)(String hint) 设置搜索框的默认文本。|
|void|[setSearchFilter](#section647913151553)([SearchFilter](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-searchfilter-0000001050152846) filter) 设置搜索的限制条件。|
|void|[setOnSiteSelectedListener](#section28078299555)([SiteSelectionListener](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-siteselectionlistener-0000001050152858) siteSelectedListener) 设置搜索结果列表项的侦听器。|

## Public Methods

### setApiKey

|Method|
|:--------------------------------------------------------------|
|public void setApiKey(String apiKey) 设置SearchFragment的API密钥，必选。|

**Parameters**

|Name|Description|
|:-----|:----------|
|apiKey|设置API密钥。|

**Throw** **s**

|Name|Description|
|:-----------------------|:------------------|
|IllegalArgumentException|如果apiKey是null，抛出异常。|

### setHint

|Method|
|:--------------------------------------------------|
|public void setHint(String hint) 您调用此API设置搜索框的默认文本。|

**Parameters**

|Name|Description|
|:---|:----------|
|hint|搜索框的默认文本。|

### setSearchFilter

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setSearchFilter([SearchFilter](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-searchfilter-0000001050152846) filter) 您调用此API可以设置搜索的限制条件。|

**Parameters**

|Name|Description|
|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------|
|filter|[SearchFilter](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-searchfilter-0000001050152846)对象，地点搜索的限制条件。|

### setOnSiteSelectedListener

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void setOnSiteSelectedListener([SiteSelectionListener](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-siteselectionlistener-0000001050152858) siteSelectedListener) 您调用此API可以设置搜索结果列表项的侦听器。|

**Parameters**

|Name|Description|
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
|siteSelectedListener|[SiteSelectionListener](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-References/api-siteselectionlistener-0000001050152858)对象，搜索结果列表项的侦听器。|

