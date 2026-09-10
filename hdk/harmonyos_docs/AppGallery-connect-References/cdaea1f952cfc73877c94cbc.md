---
name: document/cn/AppGallery-connect-References/clouddb-agconnectclouddb-0000001542275989
title: AGConnectCloudDB
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddb-0000001542275989
---

# AGConnectCloudDB

|class info|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|com.huawei.agconnect.cloud.database.AGConnectCloudDB Cloud DB入口类，为多个数据处理位置提供AGConnectCloudDB实例。初始化AGConnectCloudDB后，您需要先获取对应数据处理位置的实例，然后基于该实例，可实现新建、打开、关闭或者删除CloudDBZone等功能。|

#### Nested Class Summary

|Type|Name|Desc|
|:--------|:----------------------------------------------------------|:----------------------------------------------------------------------------------------------|
|Class|[EventType](#section38571657193812)|定义变更事件类型。|
|interface|[OnDataEncryptionKeyChangeListener](#section72891136122317)|定义了一个数据密钥侦听器接口，如需侦听数据密钥修改，则必须实现此接口，定义自己的侦听器。实现该接口时，需要同时调用addDataEncryptionKeyListener()方法来注册侦听。|
|interface|[EventListener](#section181811627183111)|定义了一个用户密码变更事件侦听器接口，如需侦听用户密码的变更，则必须实现此接口，定义自己的侦听器。实现该接口时，需要同时调用addEventListener()方法来注册侦听。|

#### Public Method Summary

|Return type|Method name|
|:---------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void|[initialize](#section143012224110)(Context context) 初始化AGConnectCloudDB。|
|AGConnectCloudDB|[getInstance](#section0538202416117)()（已废弃） 获取一个AGConnectCloudDB实例。该方法已废弃，建议使用[getInstance(AGConnectInstance connectInstance, AGConnectAuth auth)](#section367483894317)|
|AGConnectCloudDB|[getInstance(AGConnectInstance connectInstance, AGConnectAuth auth)](#section367483894317) 获取对应数据处理位置的AGConnectCloudDB实例。|
|void|[createObjectType](#section114216263118)(ObjectTypeInfo objectTypeInfo) throws AGConnectCloudDBException 创建或修改对象类型，定义存储CloudDBZoneObject的集合。|
|List\<CloudDBZoneConfig\>|[getCloudDBZoneConfigs](#section14989283119)() throws AGConnectCloudDBException 获取端侧AGConnectCloudDB实例中的全部CloudDBZoneConfig列表。|
|CloudDBZone|[openCloudDBZone](#section17758417116)([CloudDBZoneConfig](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzoneconfig-0000001542355945) config, boolean isAllowToCreate) throws AGConnectCloudDBException（已废弃） 创建或者打开一个CloudDBZone对象，一个CloudDBZone对象表示一个唯一的数据存储区域。该方法已废弃，请使用[openCloudDBZone2](#section139511251101214)。|
|Harmony[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<CloudDBZone\>|[openCloudDBZone2](#section139511251101214)([CloudDBZoneConfig](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzoneconfig-0000001542355945) config, boolean isAllowToCreate) 异步创建或者打开一个CloudDBZone对象，一个CloudDBZone对象表示一个唯一的数据存储区域。|
|void|[closeCloudDBZone](#section1891354151219)(CloudDBZone zone) throws AGConnectCloudDBException 关闭端侧打开的CloudDBZone对象。|
|void|[deleteCloudDBZone](#section16246155791210)(String zoneName) throws AGConnectCloudDBException 删除端侧不再使用的CloudDBZone对象。|
|void|[enableNetwork](#section1189885820128)(String zoneName) 打开端云之间的数据同步开关，开关打开后，端侧和云侧之间才能进行数据同步。|
|void|[disableNetwork](#section46283061317)(String zoneName) 关闭端云之间的数据同步开关，关闭开关后，端侧和云侧之间不再进行数据同步。|
|Harmony[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Boolean\>|[setUserKey](#section15131219135)(String userKey, String userReKey)（已废弃） 设置或者修改Cloud DB数据全程加密的用户密码，默认进行用户密码弱校验。该方法已废弃，建议使用[setUserKey](#section11436154514211)(final String userKey, String userReKey, final boolean needStrongCheck)|
|Harmony[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Boolean\>|[setUserKey](#section11436154514211)(final String userKey, String userReKey, final boolean needStrongCheck) 设置或者修改Cloud DB数据全程加密的用户密码，允许自定义用户密码强弱校验。|
|Harmony[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Boolean\>|[updateDataEncryptionKey](#section1736344141310)() 更新数据密钥。|
|void|[addDataEncryptionKeyListener](#section185701762132)(OnDataEncryptionKeyChangeListener dataEncryptionKeyListener) 注册数据密钥变更的侦听。|
|void|[addEventListener](#section4699318118)(EventListener eventListener) 注册用户密码变更事件的侦听。|

#### Public Methods

#### initialize

|Method|
|:----------------------------------------------------------------------------------|
|public static void initialize(Context context) 调用此方法初始化AGConnectCloudDB，该方法是一个静态方法。|

Parameters  

|Parameter name|Parameter desc|
|:-------------|:-------------------------------|
|context|程序执行的上下文环境，是一个场景，代表与操作系统交互的一种过程。|

Throws  

|Exception name|Exception desc|
|:--------------------|:-------------------------|
|IllegalStateException|获取数据库或者初始化元数据库路径失败时，抛出异常。|
|NullPointerException|当传入的Context为null时，失败并抛出异常。|

#### getInstance（已废弃）

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static AGConnectCloudDB getInstance() 调用此方法获取一个AGConnectCloudDB实例。获取实例后，才能使用云数据库服务进行应用开发和数据管理，如新建、打开、关闭和删除CloudDBZone等。一个应用只有一个AGConnectCloudDB实例。|

Return  

|type|desc|
|:---------------|:------------------|
|AGConnectCloudDB|AGConnectCloudDB实例。|

#### getInstance

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static AGConnectCloudDB getInstance(AGConnectInstance connectInstance, AGConnectAuth auth) 调用此方法获取对应数据处理位置的AGConnectCloudDB实例。获取实例后，才能使用云数据库服务进行应用开发和数据管理，如新建、打开、关闭和删除CloudDBZone等。每个数据处理位置对应只有一个AGConnectCloudDB实例。|

Parameters  

|Parameter name|Parameter desc|
|:--------------|:----------------------------------------------------------------|
|connectInstance|AGConnectInstance实例，可以设置不同的数据处理位置等项目信息。|
|auth|AGConnectAuth实例，您可以通过不同的AGConnectInstance实例来获取不同的AGConnectAuth实例。|

Return  

|type|desc|
|:---------------|:------------------|
|AGConnectCloudDB|AGConnectCloudDB实例。|

#### createObjectType

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void createObjectType(ObjectTypeInfo objectTypeInfo) throws AGConnectCloudDBException 调用此方法在端侧创建或修改对象类型，定义存储CloudDBZoneObject的集合，存储应用产生的数据信息。 您从AppGallery Connect控制台导出的对象类型定义文件中包含全部对象类型定义文件和ObjectTypeInfoHelper文件。对象类型定义文件是各个对象类型的定义；ObjectTypeInfoHelper文件主要包含版本信息和对象类型信息。在您添加导出文件至应用对应目录下后，通过设置createObjectType()即可获取到对象类型信息，实现对象类型的定义和创建。 对象类型版本升级时，从AppGallery Connect控制台下载的对象类型版本需要高于当前已存在的对象类型版本。如果该方法的入参与已有并持久化的对象类型不一致时，系统将会自动升级该对象类型。|

Parameters  

|Parameter name|Parameter desc|
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------|
|objectTypeInfo|不需要手动构建该参数，只需要从AppGallery Connect控制台下载java格式的对象类型定义文件，并添加至应用对应目录下，然后将参数值设置为"ObjectTypeInfoHelper.getObjectTypeInfo()"，即可获取到对象类型信息。|

Throws  

|Exception name|Exception desc|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|
|[AGConnectCloudDBException](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddbexception-0000001491276084)|云数据库异常基类，创建或修改对象类型失败时，会抛出异常。您必须显式地捕获并处理此异常。|
|IllegalArgumentException|当传入的对象类型定义不符合规格要求导致失败时，抛出异常，比如主键未定义、索引定义不规范和字段属性定义不规范等。|
|NullPointerException|当传入的ObjectTypeInfo为null，失败并抛出异常。|

#### getCloudDBZoneConfigs

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------|
|public List\<CloudDBZoneConfig\> getCloudDBZoneConfigs() throws AGConnectCloudDBException 调用此方法获取端侧AGConnectCloudDB实例中的全部CloudDBZoneConfig列表。|

Return  

|type|desc|
|:------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|List\<CloudDBZoneConfig\>|返回CloudDBZoneConfig对象列表，对象包含信息请参见[CloudDBZoneConfig](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzoneconfig-0000001542355945)。 * 已创建CloudDBZone时，列表值为CloudDBZoneConfig对象的列表。 * 未创建CloudDBZone时，列表值为空。|

Throws  

|Exception name|Exception desc|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------|
|[AGConnectCloudDBException](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddbexception-0000001491276084)|云数据库异常基类，获取端侧实例中的全部CloudDBZoneConfig列表失败时，会抛出异常。您必须显式地捕获并处理此异常。|

#### openCloudDBZone（已废弃）

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public CloudDBZone openCloudDBZone([CloudDBZoneConfig](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzoneconfig-0000001542355945) config, boolean isAllowToCreate) throws AGConnectCloudDBException 调用此方法在端侧创建或者打开一个CloudDBZone对象，一个CloudDBZone对象表示一个唯一的数据存储区域。一个应用在端侧最多支持创建4个CloudDBZone。 您可以多次打开某个CloudDBZone，但每次使用完CloudDBZone后，都需要关闭该CloudDBZone，即每个打开操作需要一个对应的关闭操作，否则，会在删除CloudDBZone时，抛出异常。 当使用CloudDBZoneConfig对象打开一个已有的CloudDBZone时，需要保证CloudDBZoneConfig中指定的属性与已有CloudDBZone的属性一致，如果不一致，系统会抛出异常。|

Parameters  

|Parameter name|Parameter desc|
|:--------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|config|CloudDBZoneConfig对象，用于创建或者打开CloudDBZone，该对象包含的配置参数请参见[CloudDBZoneConfig](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzoneconfig-0000001542355945)。|
|isAllowToCreate|是否允许创建CloudDBZone对象。 boolean类型，取值包含： * true：当CloudDBZoneConfig对象中CloudDBZone存在时，打开已存在的CloudDBZone。当CloudDBZoneConfig对象中CloudDBZone不存在时，创建新的CloudDBZone对象。 * false：打开已存在的CloudDBZone。如果CloudDBZone不存在，将会抛出异常。|

Return  

|type|desc|
|:----------|:----------------------------------------|
|CloudDBZone|CloudDBZone对象，您可通过该对象实现数据增、删、改、查和数据侦听等功能。|

Throws  

|Exception name|Exception desc|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|
|[AGConnectCloudDBException](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddbexception-0000001491276084)|云数据库异常基类，创建或者打开一个CloudDBZone对象失败时，会抛出异常。您必须显式地捕获并处理此异常。|
|IllegalArgumentException|检查CloudDBZoneConfig中的持久化选项和同步属性时，如果不符合规范，则失败并抛出异常。|
|IllegalStateException|初始化过程中，未创建对象类型就调用本接口时，会抛出异常。|
|NullPointerException|当传入CloudDBZoneConfig为null时，会抛出异常。|

#### openCloudDBZone2

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public Harmony[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<CloudDBZone\> openCloudDBZone2([CloudDBZoneConfig](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzoneconfig-0000001542355945) config, boolean isAllowToCreate) 调用此方法在端侧异步创建或者打开一个CloudDBZone对象，一个CloudDBZone对象表示一个唯一的数据存储区域。一个应用在端侧最多支持创建4个CloudDBZone。 您可以多次打开某个CloudDBZone，但每次使用完CloudDBZone后，都需要关闭该CloudDBZone，即每个打开操作需要一个对应的关闭操作，否则，会在删除CloudDBZone时，抛出异常。 当使用CloudDBZoneConfig对象打开一个已有的CloudDBZone时，需要保证CloudDBZoneConfig中指定的属性与已有CloudDBZone的属性一致，如果不一致，系统会抛出异常。|

Parameters  

|Parameter name|Parameter desc|
|:--------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|config|CloudDBZoneConfig对象，用于创建或者打开CloudDBZone，该对象包含的配置参数请参见[CloudDBZoneConfig](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-clouddbzoneconfig-0000001542355945)。|
|isAllowToCreate|是否允许创建CloudDBZone对象。 boolean类型，取值包含： * true：当CloudDBZoneConfig对象中CloudDBZone存在时，打开已存在的CloudDBZone。当CloudDBZoneConfig对象中CloudDBZone不存在时，创建新的CloudDBZone对象。 * false：打开已存在的CloudDBZone。如果CloudDBZone不存在，将会抛出异常。|

Return  

|type|desc|
|:---------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------|
|Harmony[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<CloudDBZone\>|返回一个HarmonyTask对象，对象中封装了创建或者打开操作执行的状态、结果以及异常信息等。比如基于该对象可调用isSuccessful()方法判断创建或者打开操作是否成功；调用getResult()方法得到CloudDBZone对象。|

#### closeCloudDBZone

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void closeCloudDBZone(CloudDBZone zone) throws AGConnectCloudDBException 调用此方法关闭端侧打开的CloudDBZone对象。 使用本方法关闭某个CloudDBZone前，需要确保当前基于该CloudDBZone的数据的写入、删除、查询和快照侦听操作已完成，否则会无法关闭。 您在使用一个CloudDBZone进行数据增、删、改、查操作之后，可以根据需要选择是否暂时关闭该CloudDBZone，从而释放该CloudDBZone占有的资源。关闭CloudDBZone不删除底层的数据文件。关闭某个不存在的CloudDBZone，或者重复关闭时，系统均返回成功，不会抛出异常。|

Parameters  

|Parameter name|Parameter desc|
|:-------------|:------------------|
|zone|需要关闭的CloudDBZone对象。|

Throws  

|Exception name|Exception desc|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|
|[AGConnectCloudDBException](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddbexception-0000001491276084)|云数据库异常基类，关闭端侧打开的CloudDBZone对象失败时，会抛出异常。您必须显式地捕获并处理此异常。|
|IllegalStateException|关闭端侧打开的CloudDBZone对象中存在未注销的侦听器时会失败，并抛出异常。|

#### deleteCloudDBZone

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void deleteCloudDBZone(String zoneName) throws AGConnectCloudDBException 调用此方法删除端侧不再使用的CloudDBZone对象。仅在关闭CloudDBZone之后，才能执行删除CloudDBZone的操作。 当您无需继续使用某个CloudDBZone和其内的数据时，可以调用本方法彻底删除该CloudDBZone。您删除该CloudDBZone后，在释放内存资源的同时，还会同时删除其在磁盘上存储的数据文件。重复删除或者删除不存在的CloudDBZone，均返回成功，不会发生异常错误。|

Parameters  

|Parameter name|Parameter desc|
|:-------------|:--------------|
|zoneName|CloudDBZone的名称。|

Throws  

|Exception name|Exception desc|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------|
|[AGConnectCloudDBException](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddbexception-0000001491276084)|云数据库异常基类，删除端侧不再使用的CloudDBZone对象失败时，会抛出异常。您必须显式地捕获并处理此异常。|

#### enableNetwork

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void enableNetwork(String zoneName) 调用此方法打开端云之间的数据同步开关，开关打开后，端侧和云侧之间才能进行数据同步。 AGConnectCloudDB初始化后，所有CloudDBZone的端云数据同步开关默认为打开状态，不需要应用显式调用。通常，在检测到网络状态良好且为WIFI网络时调用本方法。也可在用户授权使用移动数据网络时调用，具体需要以用户的网络授权为准。当端侧打开数据同步开关后，端侧会检查当前是否有未同步的数据，如果有未同步的数据则会触发端云数据同步操作。|

Parameters  

|Parameter name|Parameter desc|
|:-------------|:--------------|
|zoneName|CloudDBZone的名称。|

Throws  

|Exception name|Exception desc|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|
|[AGConnectCloudDBException](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddbexception-0000001491276084)|云数据库异常基类，打开端云之间的数据同步开关失败时，会抛出异常。|
|IllegalArgumentException|当入参不符合规范时会抛出异常。|

#### disableNetwork

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void disableNetwork(String zoneName) 调用此方法在端侧关闭端云之间的数据同步开关，关闭开关后，端侧和云侧之间不再进行数据同步。 数据同步开关仅控制单个CloudDBZone是否进行数据同步，仅在所有的CloudDBZone同步开关都关闭后，AGConnectCloudDB才会断开与云侧的连接，不再进行数据同步。同步开关的关闭状态不会持久化，当应用关闭，再次打开后，同步开关会默认为打开状态。通常，应用检测到用户使用移动数据网络（如4G网络）时调用，避免同步数据时使用用户的移动数据流量。是否关闭开关，具体需要以用户的网络授权为准。|

Parameters  

|Parameter name|Parameter desc|
|:-------------|:--------------|
|zoneName|CloudDBZone的名称。|

Throws  

|Exception name|Exception desc|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|
|[AGConnectCloudDBException](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddbexception-0000001491276084)|云数据库异常基类，打开端云之间的数据同步开关失败时，会抛出异常。|
|IllegalArgumentException|当入参不符合规范时会抛出异常。|

#### setUserKey（已废弃）

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public Harmony[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Boolean\> setUserKey(String userKey, String userReKey) 调用此方法设置或者修改Cloud DB数据全程加密的用户密码，默认进行用户密码弱校验。对于缓存模式，我们建议您在端侧开启本地数据库加密，保障本地数据安全。如果您在AppGallery Connect控制台上创建的对象类型包含加密字段，但是您未使用setUserKey()方法设置用户密码，则该对象类型的数据将无法同步至云侧，且无法对云侧该对象类型的数据进行操作。 根据请求参数值的不同，分为如下三种情况： * 当参数"userKey"的值不为null或者空字符串，且参数"userReKey"的值为null或者空字符串时，设置Cloud DB全程加密的用户密码。 * 当参数"userKey"的值不为null或者空字符串，且参数"userReKey"的值不为null或者空字符串时，将该Cloud DB的原全程加密密码修改为新设置全程加密密码。 * 当参数"userKey"的值为null或者空字符串，为非法入参，系统会发生异常错误。|

Parameters  

|Parameter name|Parameter desc|
|:-------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|userKey|用户密码，长度为6\~32个字符，密码只能包含数字、小写字母、大写字母、空格和特殊字符（特殊字符的列表请参见[表 特殊字符](#ZH-CN_TOPIC_0000001542275989__td155108abad045599d1006fb56454aff)）。|
|userReKey|修改后的用户密码，长度为6\~32个字符，密码只能包含数字、小写字母、大写字母、空格和特殊字符（特殊字符的列表请参见[表 特殊字符](#ZH-CN_TOPIC_0000001542275989__td155108abad045599d1006fb56454aff)）。 修改密码时，该参数值必填；否则，该参数值为null或者空字符串。|

|编号|字符|编号|字符|编号|字符|编号|字符|
|:-|:-|:-|:-|:-|:-|:-|:-|
|1|\`|9|\&|17|\\|25|'|
|2|\~|10|\*|18|\||26|"|
|3|!|11|(|19|\[|27|,|
|4|@|12|)|20|{|28|\<|
|5|#|13|-|21|}|29|.|
|6|$|14|_|22|\]|30|\>|
|7|%|15|=|23|;|31|/|
|8|\^|16|+|24|:|32|?|
[表1 特殊字符]

Return  

|type|desc|
|:-----------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------|
|Harmony[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Boolean\>|返回一个HarmonyTask对象，对象中封装了设置或修改用户密码的状态、结果以及异常信息等。比如基于该对象可调用isSuccessful()方法判断设置用户密码是否成功，调用getResult()方法获取设置用户密码的结果。|

Throws  

|Exception name|Exception desc|
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Exception|Exception封装在返回值Harmony[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)对象中，不需要显式地捕获该异常，可通过HarmonyTask类中的getException()来检查本次操作是否发生异常，如果成功，则getException()返回null，否则返回异常对象。异常对象分为[AGConnectCloudDBException](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddbexception-0000001491276084)以及其它RuntimeException异常，通过AGConnectCloudDBException可以获取异常信息描述和错误码信息。|
|NullPointerException|当入参"userKey"为null时，会抛出异常。|

#### setUserKey

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public Harmony[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Boolean\> setUserKey(final String userKey, String userReKey, final boolean needStrongCheck) 调用此方法设置或者修改Cloud DB数据全程加密的用户密码，并指定用户密码是否进行强校验。对于缓存模式，我们建议您在端侧开启本地数据库加密，保障本地数据安全。如果您在AppGallery Connect控制台上创建的对象类型包含加密字段，但是您未使用setUserKey()方法设置用户密码，则该对象类型的数据将无法同步至云侧，且无法对云侧该对象类型的数据进行操作。 根据请求参数值的不同，分为如下三种情况： * 当参数"userKey"的值不为null或者空字符串，且参数"userReKey"的值为null或者空字符串时，设置Cloud DB全程加密的用户密码。 * 当参数"userKey"的值不为null或者空字符串，且参数"userReKey"的值不为null或者空字符串时，将该Cloud DB的原全程加密密码修改为新设置全程加密密码。 * 当参数"userKey"的值为null或者空字符串，为非法入参，系统会发生异常错误。|

Parameters  

|Parameter name|Parameter desc|
|:--------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|userKey|用户密码。|
|userReKey|修改后的用户密码。修改密码时，该参数值必填；否则，该参数值为null或者空字符串。|
|needStrongCheck|是否开启用户密码强校验。强弱校验用户密码设置规则如下： * 弱校验：密码长度为6\~32个字符，密码只能包含数字、小写字母、大写字母、空格和特殊字符（特殊字符的列表请参见[表 特殊字符](#ZH-CN_TOPIC_0000001542275989__table1544018450425)）。 * 强校验：长度为8\~32个字符，密码只能包含数字、小写字母、大写字母、空格和特殊字符（特殊字符的列表请参见[表 特殊字符](#ZH-CN_TOPIC_0000001542275989__table1544018450425)）并至少包含两种字符组合。 说明： 只有在创建用户密码和修改用户密码且开启强校验，才会对密码复杂度做强校验，其他场景都是弱校验。|

|编号|字符|编号|字符|编号|字符|编号|字符|
|:-|:-|:-|:-|:-|:-|:-|:-|
|1|\`|9|\&|17|\\|25|'|
|2|\~|10|\*|18|\||26|"|
|3|!|11|(|19|\[|27|,|
|4|@|12|)|20|{|28|\<|
|5|#|13|-|21|}|29|.|
|6|$|14|_|22|\]|30|\>|
|7|%|15|=|23|;|31|/|
|8|\^|16|+|24|:|32|?|
[表2 特殊字符]

Return  

|type|desc|
|:-----------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------|
|Harmony[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Boolean\>|返回一个HarmonyTask对象，对象中封装了设置或修改用户密码的状态、结果以及异常信息等。比如基于该对象可调用isSuccessful()方法判断设置用户密码是否成功，调用getResult()方法获取设置用户密码的结果。|

Throws  

|Exception name|Exception desc|
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Exception|Exception封装在返回值Harmony[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)对象中，不需要显式地捕获该异常，可通过HarmonyTask类中的getException()来检查本次操作是否发生异常，如果成功，则getException()返回null，否则返回异常对象。异常对象分为[AGConnectCloudDBException](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddbexception-0000001491276084)以及其它RuntimeException异常，通过AGConnectCloudDBException可以获取异常信息描述和错误码信息。|
|NullPointerException|当入参"userKey"为null时，会抛出异常。|

#### updateDataEncryptionKey

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public Harmony[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Boolean\> updateDataEncryptionKey() 数据密钥用于加密用户数据，该密钥由系统自动生成。为避免长期使用同一密钥发生密钥被破解的风险，您可以调用该方法更新数据密钥。|

Return  

|type|desc|
|:-----------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------|
|Harmony[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)\<Boolean\>|返回一个HarmonyTask对象，对象中封装了更新数据密钥的状态、结果以及异常信息等。比如基于该对象可调用isSuccessful()方法判断更新数据密钥是否成功，调用getResult()方法获取更新数据密钥的结果。|

Throws  

|Exception name|Exception desc|
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Exception|Exception封装在返回值Harmony[Task](https://developer.huawei.com/consumer/cn/doc/hmscore-common-References/task_tresult-0000001050121148)对象中，开发者不需要显式地捕获该异常，可通过HarmonyTask类中的getException()来检查本次操作是否发生异常，如果成功，则getException()返回null，否则返回异常对象。异常对象分为[AGConnectCloudDBException](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/clouddb-agconnectclouddbexception-0000001491276084)以及其它RuntimeException异常，通过AGConnectCloudDBException可以获取异常信息描述和错误码信息。|

#### addDataEncryptionKeyListener

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public void addDataEncryptionKeyListener(OnDataEncryptionKeyChangeListener dataEncryptionKeyListener) 调用此方法注册数据密钥变更的侦听。 注册侦听后，如果同一个用户拥有多台不同设备，其中一个在线设备更新数据密钥后，云侧会通知到该用户其它的在线设备，数据密钥已变更。|

Parameters  

|Parameter name|Parameter desc|
|:------------------------|:-------------|
|dataEncryptionKeyListener|数据密钥侦听器对象。|

Throws  

|Exception name|Exception desc|
|:-------------------|:---------------|
|NullPointerException|当入参为null时，会抛出异常。|

#### addEventListener

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------|
|public void addEventListener(EventListener eventListener) 调用此方法注册用户密码变更事件的侦听。 注册侦听后，如果同一个用户拥有多台不同设备时，用户在其中一个在线设备更新用户密码后，云侧会通知到该用户其它的在线设备，其密码已变更。|

Parameters  

|Parameter name|Parameter desc|
|:-------------|:-------------|
|eventListener|事件侦听器对象。|

#### EventType

|values|
|:------------------------------------------------|
|public enum EventType USER_KEY_CHANGED 用户密码的变更事件。|

#### OnDataEncryptionKeyChangeListener

|interface info|
|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|public interface OnDataEncryptionKeyChangeListener 定义了一个数据密钥侦听器接口，如需侦听数据密钥修改，则必须实现此接口，定义自己的侦听器。实现该接口时，需要同时调用addDataEncryptionKeyListener()方法来注册侦听。|

#### Public Method Summary

|Return type|Method name|
|:----------|:---------------------------------------------------------------|
|boolean|[needFetchDataEncryptionKey](#section123892041917)() 是否需要更新数据密钥。|

#### Public Methods

#### needFetchDataEncryptionKey

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------|
|boolean needFetchDataEncryptionKey() 是否需要更新数据密钥。同一个用户拥有多台不同设备时，其中一个在线设备更新数据密钥后，云侧会通知到该用户其它的在线设备。此时，需要决定是否将更新后的数据密钥同步到该用户的其它设备。或者更新数据密钥中断后，需要决定是否继续更新密钥。|

Return  

|type|desc|
|:------|:------------------------------------------|
|boolean|是否更新数据密钥。 取值包含： * true：需要更新。 * false：不需要更新。|

#### EventListener

|interface info|
|:----------------------------------------------------------------------------------------------------------------------|
|public interface EventListener 定义了一个用户密码变更事件侦听器接口，如需侦听用户密码的变更，则必须实现此接口，定义自己的侦听器。实现该接口时，需要同时调用addEventListener()方法来注册侦听。|

#### Public Method Summary

|Return type|Method name|
|:----------|:-------------------------------------------------------------------------------------------------------|
|void|[onEvent](#section44121234395)(EventType eventType) 注册用户密码变更事件侦听后，当用户密码发生变更时，Cloud DB会自动调用此方法来执行您自定义的操作。|

#### Public Methods

#### onEvent

|Method|
|:-------------------------------------------------------------------------------------|
|void onEvent(EventType eventType) 注册用户密码变更事件侦听后，当用户密码发生变更时，Cloud DB会自动调用此方法来执行您自定义的操作。|

Parameters  

|Parameter name|Parameter desc|
|:-------------|:--------------------|
|eventType|发生的变更事件类型，包含用户密码变更事件。|

