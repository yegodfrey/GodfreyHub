---
name: document/cn/doc-references/player_mediatimeinfo-0000001054358932
title: Player.MediaTimeInfo
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/player_mediatimeinfo-0000001054358932
source: portal
---

# Player.MediaTimeInfo

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.media.player.Player.MediaTimeInfo
    
    public static class Player.MediaTimeInfo
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Represents media time information.

**Since:**

3

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
float | [clockRate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/player_mediatimeinfo-0000001054358932#ZH-CN_TOPIC_0000001054358932__clockRate) |  Indicates the rate of the media clock relative to the system clock.   
long | [mediaTimeUs](https://developer.harmonyos.com/cn/docs/documentation/doc-references/player_mediatimeinfo-0000001054358932#ZH-CN_TOPIC_0000001054358932__mediaTimeUs) |  Indicates the media data timestamp, in microseconds.   
long | [nanoTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/player_mediatimeinfo-0000001054358932#ZH-CN_TOPIC_0000001054358932__nanoTime) |  Indicates the media data timestamp, in nanoseconds.   
  
#### Constructor Summary

Constructor | Description  
---|---  
[MediaTimeInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/player_mediatimeinfo-0000001054358932#ZH-CN_TOPIC_0000001054358932__MediaTimeInfo--)​() |     
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
static [Player.MediaTimeInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/player_mediatimeinfo-0000001054358932) | [createFromParcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/player_mediatimeinfo-0000001054358932#ZH-CN_TOPIC_0000001054358932__createFromParcel-ohos_utils_Parcel-)​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) parcel) |  Creates a [MediaTimeInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/player_mediatimeinfo-0000001054358932) instance based on the specified [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) instance.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]clockRate

public float clockRate

Indicates the rate of the media clock relative to the system clock. 

Value 1.0 means that the media clock is synchronized with the system time. A value greater than 1.0 means that the media clock is faster than the system time. A value smaller than 1.0 means that the media clock is slower than the system time.

**Since:**

3

#### [h2]mediaTimeUs

public long mediaTimeUs

Indicates the media data timestamp, in microseconds. 

**Since:**

3

#### [h2]nanoTime

public long nanoTime

Indicates the media data timestamp, in nanoseconds. 

**Since:**

3

#### Constructor Detail

#### [h2]MediaTimeInfo

public MediaTimeInfo​()

#### Method Detail

#### [h2]createFromParcel

public static [Player.MediaTimeInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/player_mediatimeinfo-0000001054358932) createFromParcel​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) parcel)

Creates a [MediaTimeInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/player_mediatimeinfo-0000001054358932) instance based on the specified [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) instance. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
parcel  |  Indicates the [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) instance, which cannot be null.  
  
**Returns:**

Returns the [MediaTimeInfo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/player_mediatimeinfo-0000001054358932) instance if the creation is successful; returns null otherwise.

**Since:**

3
