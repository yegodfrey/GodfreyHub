---
name: document/cn/HMSCore-References/navibroadinfo-0000001365422737
title: NaviBroadInfo
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navibroadinfo-0000001365422737
---

# NaviBroadInfo

|Class Info|
|:------------------------------------------------|
|public class NaviBroadInfo 导航中播报信息实体类，具体至单个播报的实体。|

## Public Constructor Summary

|Constructor Name|
|:----------------------------------------------------------------------------------|
|[NaviBroadInfo](#section4533121016713)() 使用无参构造方法创建NaviBroadInfo实例。|
|[NaviBroadInfo](#section33770915211)(NaviBroadInfo info) 根据传入信息创建创建NaviBroadInfo实例。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:--------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------|
|boolean|[equals](#section14934056164)(Object obj) 重写equal，比较播报信息是否相同。|
|String|[getBroadString](#section1442775215817)() 获取播报文言。|
|int|[getFurnitureType](#section9549511104412)() 获取当前播报所属的诱导点类型。|
|int|[getId](#section1971735015916)() 获取播报Id。|
|int|[getLimitSpeed](#section6263930131014)() 获取限速诱导点限速值。|
|int|[getMyDist2Event](#section118211310121220)() 获取到事件点的距离。|
|float|[getMyDist2Start](#section201261153148)() 获取到起点的距离。|
|float|[getMyPlay2Start](#section01745429145)() 获取播报位置距离起点距离。|
|String|[getMyTemplateText](#section366213236193)() 获取播报模板。|
|int|[getStepIndex](#section1039534310311)() 获取当前播报所属的路段索引。|
|List<[SupplementaryBroadInfo](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/supplementarybroadinfo-0000001512346118)>|[getSupplementaryBroadInfos](#section29901038474)() 获取补充播报模板信息。|
|String|[getTemplateSpeech](#section4790101910266)() 获取播报文字(含占位符)。|
|int|[getTtsType](#section166721545202618)() 获取播报优先级类型。|
|int|[getType](#section12626151217272)() 获取播报类型。|
|int|[hashCode](#section1766918454270)() 重写hashCode，获取哈希值。|
|boolean|[needE2Replay](#section9729433173712)() 获取是否需要重复播报E2播报点。|
|boolean|[needInduceReplay](#section14216102214017)() 获取是否需要重复播报诱导点播报。|
|boolean|[needReplay](#section785211334396)() 获取是否需要重复播报E1播报点。|
|void|[setBroadString](#section122092311448)(String text) 设置播报文言。|
|void|[setId](#section163825420452)(int id) 设置播报Id。|
|void|[setLimitSpeed](#section14822158194620)(int speed) 设置限速诱导点限速值。|
|void|[setMyDist2Event](#section104471154811)(int myDist2Event) 设置到事件点的距离。|
|void|[setMyDist2Start](#section19734327164811)(float myDist2Start) 设置到起点的距离。|
|void|[setMyPlay2Start](#section118164512482)(float myPlay2Start) 设置播报位置距离起点距离。|
|void|[setMyTemplateText](#section201251324144911)(String myTemplateText) 设置播报模板。|
|void|[setNeedE1Replay](#section495517483492)(boolean needE1Replay) 设置是否需要重复播报E1播报点。|
|void|[setNeedE2Replay](#section41672685014)(boolean needE2Replay) 设置是否需要重复播报E2播报点。|
|void|[setNeedInduceReplay](#section12437154965014)(boolean needInduceReplay) 设置是否需要重复播报诱导点播报。|
|void|[setTemplateSpeech](#section7738325165118)(String templateSpeech) 设置播报文字(含占位符)。|
|void|[setTtsType](#section1116665112512)(int type) 设置播报优先级类型。|
|void|[setType](#section1556561410525)(int type) 设置播报类型。|
|String|[toProductString](#section795255913521)() 获取播报信息字符串。|

## Public Constructors

### NaviBroadInfo

|Constructor|
|:------------------------------------------------|
|public NaviBroadInfo() 使用无参构造方法创建NaviBroadInfo实例。|

### NaviBroadInfo(NaviBroadInfo info)

|Constructor|
|:----------------------------------------------------------------|
|public NaviBroadInfo(NaviBroadInfo info) 根据入参信息创建NaviBroadInfo实例。|

**Parameters**

|Name|Description|
|:---|:-----------------------------------------------------------------------------------------------------------------|
|info|[NaviBroadInfo](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navibroadinfo-0000001365422737)实例。|

## Public Methods

### equals

|Method|
|:-------------------------------------------------------|
|public boolean equals(Object obj) 您可以通过调用此API比较播报信息是否相同。|

**Parameters**

|Name|Description|
|:---|:------------------------------------------------------------------------------------------------------------------------|
|obj|超类对象，此处比较[NaviBroadInfo](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navibroadinfo-0000001365422737)。|

**Return** **s**

|Type|Description|
|:------|:--------------------------|
|boolean|播报信息是否相同 * true：是 * false：否|

### getBroadString

|Method|
|:------------------------------------------------|
|public String getBroadString() 您可以通过调用此API获取播报文言。|

**Return** **s**

|Type|Description|
|:-----|:----------|
|String|播报文言字符串。|

### getFurnitureType

|Method|
|:-------------------------------------------------------|
|public int getFurnitureType() 您可以通过调用此API获取当前播报所属的诱导点类型。|

**Return** **s**

|Type|Description|
|:---|:-------------------------------------------------------------------------------------------------------------------------------------|
|int|诱导点类型，默认值-1，参见[RoadFurnitureType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/roadfurnituretype-0000001213166926)。|

### getId

|Method|
|:------------------------------------|
|public int getId() 您可以通过调用此API获取播报Id。|

**Return** **s**

|Type|Description|
|:---|:----------|
|int|播报Id。|

### getLimitSpeed

|Method|
|:------------------------------------------------|
|public int getLimitSpeed() 您可以通过调用此API获取限速诱导点限速值。|

**Return** **s**

|Type|Description|
|:---|:----------------|
|int|限速诱导点限速值，单位：km/h。|

### getMyDist2Event

|Method|
|:-------------------------------------------------|
|public int getMyDist2Event() 您可以通过调用此API获取到事件点的距离。|

**Return** **s**

|Type|Description|
|:---|:------------|
|int|到事件点的距离，单位：米。|

### getMyDist2Start

|Method|
|:--------------------------------------------------|
|public float getMyDist2Start() 您可以通过调用此API获取到起点的距离。|

**Return** **s**

|Type|Description|
|:----|:-----------|
|float|到起点的距离，单位：米。|

### getMyPlay2Start

|Method|
|:------------------------------------------------------|
|public float getMyPlay2Start() 您可以通过调用此API获取播报位置距离起点距离。|

**Return** **s**

|Type|Description|
|:----|:---------------|
|float|播报位置距离起点距离，单位：米。|

### getMyTemplateText

|Method|
|:---------------------------------------------------|
|public String getMyTemplateText() 您可以通过调用此API获取播报模板。|

**Return** **s**

|Type|Description|
|:-----|:----------|
|String|播报模板字符串。|

### getStepIndex

|Method|
|:--------------------------------------------------|
|public int getStepIndex() 您可以通过调用此API获取当前播报所属的路段索引。|

**Return** **s**

|Type|Description|
|:---|:-----------|
|int|当前播报所属的路段索引。|

### getSupplementaryBroadInfos

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public List<[SupplementaryBroadInfo](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/supplementarybroadinfo-0000001512346118)> getSupplementaryBroadInfos() 您可以通过调用此API获取补充播报模板信息。|

**Return** **s**

|Type|Description|
|:--------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
|List<[SupplementaryBroadInfo](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/supplementarybroadinfo-0000001512346118)>|补充播报模板信息，参见[SupplementaryBroadInfo](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/supplementarybroadinfo-0000001512346118)。|

### getTemplateSpeech

|Method|
|:---------------------------------------------------------|
|public String getTemplateSpeech() 您可以通过调用此API获取播报文字(含占位符)。|

**Return** **s**

|Type|Description|
|:-----|:----------|
|String|播报文字(含占位符)。|

### getTtsType

|Method|
|:---------------------------------------------------------|
|public int getTtsType() 您可以通过调用此API获取播报优先级类型，int值越小，优先级越高。|

**Return** **s**

|Type|Description|
|:---|:---------------------------------------------------------------------------------------------------------------------|
|int|播报优先级类型，参见[NaviTTSType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navittstype-0000001367463197)。|

### getType

|Method|
|:---------------------------------------------|
|public int getType() 您可以通过调用此API获取播报类型，用于区分播报。|

**Return** **s**

|Type|Description|
|:---|:--------------------------------------------------------------------------------------------------------------|
|int|播报类型，参见[GuideType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/guidetype-0000001316254586)。|

### hashCode

|Method|
|:--------------------------------------------|
|public int hashCode() 您可以通过调用此API获取播报信息对象哈希值。|

**Return** **s**

|Type|Description|
|:---|:----------|
|int|哈希值。|

### needE2Replay

|Method|
|:--------------------------------------------------------|
|public boolean needE2Replay() 您可以通过调用此API获取是否需要重复播报E2播报点。|

**Return** **s**

|Type|Description|
|:------|:-------------------------------|
|boolean|是否需要重复播报E2播报点 * true：是 * false：否|

### needInduceReplay

|Method|
|:------------------------------------------------------------|
|public boolean needInduceReplay() 您可以通过调用此API获取是否需要重复播报诱导点播报。|

**Return** **s**

|Type|Description|
|:------|:-------------------------------|
|boolean|是否需要重复播报诱导点播报 * true：是 * false：否|

### needReplay

|Method|
|:------------------------------------------------------|
|public boolean needReplay() 您可以通过调用此API获取是否需要重复播报E1播报点。|

**Return** **s**

|Type|Description|
|:------|:-------------------------------|
|boolean|是否需要重复播报E1播报点 * true：是 * false：否|

### setBroadString

|Method|
|:---------------------------------------------------------|
|public void setBroadString(String text) 您可以通过调用此API设置播报文言。|

**Parameters**

|Name|Description|
|:---|:----------|
|text|播报文言。|

### setId

|Method|
|:-------------------------------------------|
|public void setId(int id) 您可以通过调用此API设置播报Id。|

**Parameters**

|Name|Description|
|:---|:----------|
|id|播报Id。|

### setLimitSpeed

|Method|
|:----------------------------------------------------------|
|public void setLimitSpeed(int speed) 您可以通过调用此API设置限速诱导点限速值。|

**Parameters**

|Name|Description|
|:----|:----------------|
|speed|限速诱导点限速值，单位：km/h。|

### setMyDist2Event

|Method|
|:------------------------------------------------------------------|
|public void setMyDist2Event(int myDist2Event) 您可以通过调用此API设置到事件点的距离。|

**Parameters**

|Name|Description|
|:-----------|:------------|
|myDist2Event|到事件点的距离，单位：米。|

### setMyDist2Start

|Method|
|:-------------------------------------------------------------------|
|public void setMyDist2Start(float myDist2Start) 您可以通过调用此API设置到起点的距离。|

**Parameters**

|Name|Description|
|:-----------|:-----------|
|myDist2Start|到起点的距离，单位：米。|

### setMyPlay2Start

|Method|
|:-----------------------------------------------------------------------|
|public void setMyPlay2Start(float myPlay2Start) 您可以通过调用此API设置播报位置距离起点距离。|

**Parameters**

|Name|Description|
|:-----------|:---------------|
|myPlay2Start|播报位置距离起点距离，单位：米。|

### setMyTemplateText

|Method|
|:----------------------------------------------------------------------|
|public void setMyTemplateText(String myTemplateText) 您可以通过调用此API设置播报模板。|

**Parameters**

|Name|Description|
|:-------------|:----------|
|myTemplateText|播报模板字符串。|

### setNeedE1Replay

|Method|
|:----------------------------------------------------------------------------|
|public void setNeedE1Replay(boolean needE1Replay) 您可以通过调用此API设置是否需要重复播报E1播报点。|

**Parameters**

|Name|Description|
|:-----------|:-------------------------------|
|needE1Replay|是否需要重复播报E1播报点 * true：是 * false：否|

### setNeedE2Replay

|Method|
|:----------------------------------------------------------------------------|
|public void setNeedE2Replay(boolean needE2Replay) 您可以通过调用此API设置是否需要重复播报E2播报点。|

**Parameters**

|Name|Description|
|:-----------|:-------------------------------|
|needE2Replay|是否需要重复播报E2播报点 * true：是 * false：否|

### setNeedInduceReplay

|Method|
|:------------------------------------------------------------------------------------|
|public void setNeedInduceReplay(boolean needInduceReplay) 您可以通过调用此API设置是否需要重复播报诱导点播报。|

**Parameters**

|Name|Description|
|:---------------|:-------------------------------|
|needInduceReplay|是否需要重复播报诱导点播报 * true：是 * false：否|

### setTemplateSpeech

|Method|
|:----------------------------------------------------------------------------|
|public void setTemplateSpeech(String templateSpeech) 您可以通过调用此API设置播报文字(含占位符)。|

**Parameters**

|Name|Description|
|:-------------|:----------|
|templateSpeech|播报文字(含占位符)。|

### setTtsType

|Method|
|:-----------------------------------------------------|
|public void setTtsType(int type) 您可以通过调用此API设置播报优先级类型。|

**Parameters**

|Name|Description|
|:---|:---------------------------------------------------------------------------------------------------------------------|
|type|播报优先级类型，参见[NaviTTSType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navittstype-0000001367463197)。|

### setType

|Method|
|:-----------------------------------------------|
|public void setType(int type) 您可以通过调用此API设置播报类型。|

**Parameters**

|Name|Description|
|:---|:--------------------------------------------------------------------------------------------------------------|
|type|播报类型，参见[GuideType](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/guidetype-0000001316254586)。|

### toProductString

|Method|
|:----------------------------------------------------|
|public String toProductString() 您可以通过调用此API获取播报信息字符串。|

**Return** **s**

|Type|Description|
|:-----|:----------|
|String|播报信息字符串。|

