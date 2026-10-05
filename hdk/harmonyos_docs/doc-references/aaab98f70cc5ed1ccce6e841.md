---
name: document/cn/doc-references/configtype-0000001054518860
title: ConfigType
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/configtype-0000001054518860
source: portal
---

# ConfigType

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[java.lang.Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)<[ConfigType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860)> |---|---ohos.global.config.ConfigType
    
    public enum ConfigType
    extends [Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)<[ConfigType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860)>  
  
---  
Indicates the type of a globalization configuration.

**Since:**

1

**See Also:**

[ConfigManager](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configmanager-0000001054440133)

#### Enum Constant Summary

Enum Constant | Description  
---|---  
[BRIDGE_ON_5GHZ](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860#ZH-CN_TOPIC_0000001054518860__BRIDGE_ON_5GHZ) |  Specifies whether a wireless bridge is allowed on 5 GHz Wi-Fi.   
[CAMERA_SOUND](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860#ZH-CN_TOPIC_0000001054518860__CAMERA_SOUND) |  Specifies whether a camera sound is mandatory when a photo is taken.   
[COUNTRY_REGION](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860#ZH-CN_TOPIC_0000001054518860__COUNTRY_REGION) |  Indicates the target country or region where the device is delivered.   
[FACE_CHANGING](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860#ZH-CN_TOPIC_0000001054518860__FACE_CHANGING) |  Specifies whether the camera displays Sichuan opera face-changing materials.   
[MUSLIM_CLOCK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860#ZH-CN_TOPIC_0000001054518860__MUSLIM_CLOCK) |  Specifies whether the Muslim alarm clock takes effect.   
[TABOO_ICON](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860#ZH-CN_TOPIC_0000001054518860__TABOO_ICON) |  Indicates taboo icons prohibited in certain regions.   
[VOICE_CFG](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860#ZH-CN_TOPIC_0000001054518860__VOICE_CFG) |  Indicates the parameter configurations of a voice call, which is specified to achieve certain certification.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
static [ConfigType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860) | [valueOf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860#ZH-CN_TOPIC_0000001054518860__valueOf-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name) |  Returns the enum constant of this type with the specified name.   
static [ConfigType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860)[] | [values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860#ZH-CN_TOPIC_0000001054518860__values--)​() |  Returns an array containing the constants of this enum type, in the order they are declared.   
  
Methods inherited from class java.lang.[Enum](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__clone--), [compareTo](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__compareTo-E-), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__finalize--), [getDeclaringClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__getDeclaringClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__hashCode--), [name](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__name--), [ordinal](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__ordinal--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__toString--), [valueOf](https://developer.harmonyos.com/cn/docs/documentation/doc-references/enum-0000001054838398#ZH-CN_TOPIC_0000001054838398__valueOf-java_lang_Class-java_lang_String-)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Enum Constant Detail

#### [h2]BRIDGE_ON_5GHZ

public static final [ConfigType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860) BRIDGE_ON_5GHZ

Specifies whether a wireless bridge is allowed on 5 GHz Wi-Fi. The value can be obtained by using the [ConfigManager.getBoolean(ConfigType type)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configmanager-0000001054440133#ZH-CN_TOPIC_0000001054440133__getBoolean-ohos_global_config_ConfigType-) method. 

**See Also:**

[ConfigManager.getBoolean(ConfigType type)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configmanager-0000001054440133#ZH-CN_TOPIC_0000001054440133__getBoolean-ohos_global_config_ConfigType-)

#### [h2]CAMERA_SOUND

public static final [ConfigType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860) CAMERA_SOUND

Specifies whether a camera sound is mandatory when a photo is taken. The value can be obtained by using the [ConfigManager.getBoolean(ConfigType type)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configmanager-0000001054440133#ZH-CN_TOPIC_0000001054440133__getBoolean-ohos_global_config_ConfigType-) method. 

**See Also:**

[ConfigManager.getBoolean(ConfigType type)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configmanager-0000001054440133#ZH-CN_TOPIC_0000001054440133__getBoolean-ohos_global_config_ConfigType-)

#### [h2]COUNTRY_REGION

public static final [ConfigType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860) COUNTRY_REGION

Indicates the target country or region where the device is delivered. The value can be obtained by using the [ConfigManager.getString(ConfigType type)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configmanager-0000001054440133#ZH-CN_TOPIC_0000001054440133__getString-ohos_global_config_ConfigType-) method. 

**See Also:**

[ConfigManager.getString(ConfigType type)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configmanager-0000001054440133#ZH-CN_TOPIC_0000001054440133__getString-ohos_global_config_ConfigType-)

#### [h2]FACE_CHANGING

public static final [ConfigType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860) FACE_CHANGING

Specifies whether the camera displays Sichuan opera face-changing materials. The value can be obtained by using the [ConfigManager.getBoolean(ConfigType type)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configmanager-0000001054440133#ZH-CN_TOPIC_0000001054440133__getBoolean-ohos_global_config_ConfigType-) method. 

**See Also:**

[ConfigManager.getBoolean(ConfigType type)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configmanager-0000001054440133#ZH-CN_TOPIC_0000001054440133__getBoolean-ohos_global_config_ConfigType-)

#### [h2]MUSLIM_CLOCK

public static final [ConfigType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860) MUSLIM_CLOCK

Specifies whether the Muslim alarm clock takes effect. The value can be obtained by using the [ConfigManager.getBoolean(ConfigType type)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configmanager-0000001054440133#ZH-CN_TOPIC_0000001054440133__getBoolean-ohos_global_config_ConfigType-) method. 

**See Also:**

[ConfigManager.getBoolean(ConfigType type)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configmanager-0000001054440133#ZH-CN_TOPIC_0000001054440133__getBoolean-ohos_global_config_ConfigType-)

#### [h2]TABOO_ICON

public static final [ConfigType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860) TABOO_ICON

Indicates taboo icons prohibited in certain regions. The value can be obtained by using the [ConfigManager.getString(ConfigType type)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configmanager-0000001054440133#ZH-CN_TOPIC_0000001054440133__getString-ohos_global_config_ConfigType-) method. 

**See Also:**

[ConfigManager.getString(ConfigType type)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configmanager-0000001054440133#ZH-CN_TOPIC_0000001054440133__getString-ohos_global_config_ConfigType-)

#### [h2]VOICE_CFG

public static final [ConfigType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860) VOICE_CFG

Indicates the parameter configurations of a voice call, which is specified to achieve certain certification. The value can be obtained by using the [ConfigManager.getString(ConfigType type)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configmanager-0000001054440133#ZH-CN_TOPIC_0000001054440133__getString-ohos_global_config_ConfigType-) method. 

**See Also:**

[ConfigManager.getString(ConfigType type)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configmanager-0000001054440133#ZH-CN_TOPIC_0000001054440133__getString-ohos_global_config_ConfigType-)

#### Method Detail

#### [h2]values

public static [ConfigType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860)[] values​()

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows: 
    
    for (ConfigType c : ConfigType.values())
        System.out.println(c);
    

**Returns:**

an array containing the constants of this enum type, in the order they are declared

#### [h2]valueOf

public static [ConfigType](https://developer.harmonyos.com/cn/docs/documentation/doc-references/configtype-0000001054518860) valueOf​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) name)

Returns the enum constant of this type with the specified name. The string must match _exactly_ an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.) 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
name  |  the name of the enum constant to be returned.  
  
**Returns:**

the enum constant with the specified name

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  if this enum type has no constant with the specified name  
[NullPointerException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/nullpointerexception-0000001054119710) |  if the argument is null
