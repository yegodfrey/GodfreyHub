---
name: document/cn/AppGallery-connect-Guides/agc-clouddb-agcconsole-managingdata-0000001080975864
title: 管理数据
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-clouddb-agcconsole-managingdata-0000001080975864
---

# 管理数据

您可基于AGC控制台对云数据库中的数据进行管理，支持新增、修改、导出/导入、备份/恢复、清空数据和管理回收站数据等功能。

云数据库后端服务采用分布式部署架构，通过ELB实现负载均衡。ELB对外提供HTTPS安全通道，但ELB和云数据库之间的内部通道按照业界惯例使用HTTP通道。所以，您在AGC控制台管理数据时，对于高度敏感数据，需要自主加密。

## 新增或修改数据

您可基于AGC控制台新增或者修改各对象类型中的数据。

新增和修改数据请注意如下事项：
> 注意
>
> 操作数据前，请先关注注意事项。

* 新增或者修改数据时，每条记录的数据大小不能超过2MB。
* 不支持新增或者修改对象类型中加密字段或敏感字段。
* 在新增和修改数据时，如果字段的"数据类型"为"String"，其字段值最大长度为200个字符。
* 在新增和修改数据时，如果字段的"数据类型"为"Text"，其字段值最大长度为100000000个字符。
* 在新增和修改数据时，如果字段的"数据类型"为"IntAutoIncrement"或"LongAutoIncrement"，其字段值需遵守以下规则：
  * 使用Server SDK开发应用时：
    * 其字段值未采用手动赋值时，系统自动为其分配值，分配的值为当前已分配最大值+1。
    * 其字段值采用手动赋值时：
      * 若该字段为主键字段，且数据库中没有相同值的主键，则可以写入成功，否则写入失败。 说明
        >
        > 若该字段为主键字段，本次采用手动赋值，且写入成功，下次系统自动赋值时需遵从以下约束：
        > * 若本次手动写入的值大于当前已分配的最大值，则下次系统分配的值以本次手动赋值为基准+1。
        > * 若本次手动写入的值小于或者等于当前已分配的最大值，则下次系统分配的值为当前已分配最大值+1。
      * 若该字段为非主键字段，则写入成功。
  * 使用Web SDK、快应用SDK、小程序SDK、小游戏SDK、HarmonyOS(ArkTS API 9及以上)时：
    * 该字段为主键，手动赋值会被忽略，系统会为其自动赋值，赋值为当前已分配最大值+1。
    * 该字段为非主键字段，允许对其手动赋值；若未手动赋值，则系统自动为其分配值，分配的值为已分配最大值+1。

**具体操作步骤如下：**

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中点击需要配置云数据库的项目。
3. 在左侧导航栏选择"云开发（Serverless）> 云数据库"，进入云数据库页面。
4. 点击"数据"页签。
5. 选择需要新增数据的"存储区名称"和"对象类型"，点击"查询"。
6. 根据需要执行以下操作：
   * 新增数据 点击"新增"。

   * 编辑已有的数据 在数据列表中的"操作"列，点击"修改"。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/42/v3/pRmGN1EtS7eojeXyHF82oA/zh-cn_image_0000001935274417.png?HW-CC-KV=V1&HW-CC-Date=20260916T021830Z&HW-CC-Expire=31536000000&HW-CC-Sign=80A18546793EF52A77FC904FD6B4CD4EFA9091B4CD8A55334C9E9A631DF2E463)
7. 输入字段的值，点击"确定"或"修改"。 说明
   > * 修改数据时，如果字段被设置为主键，则该字段的值不支持修改。
   > * 字段的数据类型为"Text"时，由于在数据列表中仅可查看前255个字符，因此，您如需要查看完整数据时，请点击该值旁的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e1/v3/ZfepDkBkQJ6gxUA-RprLRA/zh-cn_image_0000001569710369.png?HW-CC-KV=V1&HW-CC-Date=20260916T021830Z&HW-CC-Expire=31536000000&HW-CC-Sign=6C19BF6962FD82EC4B6EF4A8EC3163BC735A08B82BB6F5F4553D249F59E94D5C "点击放大")，下载文件查看该字段的完整数据。
   > * 字段的数据类型为"ByteArray"时，支持您上传文件作为该字段的值，在数据列表中，可查看上传文件的大小。同时，支持您在数据列表中点击该字段值旁的![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/59/v3/j2cLleHmT3eHlgDkO92XQg/zh-cn_image_0000001518550560.png?HW-CC-KV=V1&HW-CC-Date=20260916T021830Z&HW-CC-Expire=31536000000&HW-CC-Sign=1E3EC534F49B305BEB23A520B8CEC31297DDC39EE85B6079596134D419D4F474 "点击放大")，下载该文件并在更改其文件格式为上传前的文件格式后，查看或者修改该文件中的内容。

## 导出数据至本地

当您需要修改较多数据时，可通过导出功能将数据导出至本地，并在导出文件中编辑。修改完成后，通过导入功能，将修改后的文件导入，即可实现数据的更新。

导出数据至本地请注意如下事项：
> 注意
>
> 操作数据前，请先关注注意事项。

* 单次导出文件中包含的数据记录条数不能超过1000条。
* 单个导出文件大小不能超过20MB。
* 导出数据时，如果对象类型中包含加密字段或敏感字段，系统会自动剔除加密字段和敏感字段的数据。
* 导出数据时，一次只能选择一个存储区和一个对象类型。

**具体操作步骤如下：**

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中点击需要配置云数据库的项目。
3. 在左侧导航栏选择"云开发（Serverless）> 云数据库"，进入云数据库页面。
4. 点击"数据"页签。
5. 根据需要执行以下操作：
   * 导出符合指定条件的数据。
     1. 选择需要导出数据的"存储区名称"和"对象类型"。
     2. 点击右侧菜单栏中"高级查询"。
     3. 点击"新增查询条件"，输入查询条件。
     4. 点击"确定"，点击"导出"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ff/v3/Jw0JBrUVTt2GUs6LXubvTA/zh-cn_image_0000001892519462.png?HW-CC-KV=V1&HW-CC-Date=20260916T021830Z&HW-CC-Expire=31536000000&HW-CC-Sign=68B2924073EB3ECAF72D0B5165124739CD537EFA9C076F38A9AFECB163DB545C)

   * 导出指定"存储区"和"对象类型"的所有数据。
     1. 点击"导出"。
     2. 选择需要导出数据的"存储区"和"对象类型"。
     3. 点击"下一步"。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/36/v3/55L0NgCoTT-5SpaKW8ZLVA/zh-cn_image_0000001897171426.png?HW-CC-KV=V1&HW-CC-Date=20260916T021830Z&HW-CC-Expire=31536000000&HW-CC-Sign=A7CD057DC67B878025993884124A8DA71E73F5C6C3CA0044DD38F8C8C3ECC923)
6. 输入"开始位置"和"条数"参数值。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/c8/v3/ecm7DzCKTLa3KUcLVlYGVw/zh-cn_image_0000001937595369.png?HW-CC-KV=V1&HW-CC-Date=20260916T021830Z&HW-CC-Expire=31536000000&HW-CC-Sign=1157A655C1D1D061546DE36730546916FD8212326CDF4467897D7193231D38B8)

   具体参数说明如下表。

   |参数|说明|
   |:---|:-----------------------------------------------------------------------|
   |总条数|选择存储区和对象类型后，系统会自动计算出当前选定对象类型中包含的数据总条数。|
   |加密导出|是否对导出的数据进行加密。为了保证数据安全，建议使用加密导出。 取值范围： * 是：以加密方式导出本次数据。 * 否：以非加密方式导出本次数据。|
   |开始位置|导出数据的起始条数。|
   |条数|选择本次需要导出的数据条数。|

7. 点击"确定"。 数据将会被导出至指定路径，文件格式为json格式。

## 导入本地数据

您可以通过导入本地数据实现新增或者修改数据的功能。

* 通过控制台提供的导入模板，您可完成数据的快速新增。
* 通过修改导出文件中的数据，您可实现数据的快速修改。

导入本地数据请注意如下事项：
> 注意
>
> 操作数据前，请先关注注意事项。

* 单个导入文件大小不超过20MB，如超过20MB，需要分成多个文件导入。
* 导入数据时，每条记录的数据大小不能超过2MB。
* 导入数据时，如果对象类型中包含加密字段或敏感字段，系统会自动剔除加密字段和敏感字段的数据。

**具体操作步骤如下：**

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中点击需要配置云数据库的项目。
3. 在左侧导航栏选择"云开发（Serverless）> 云数据库"，进入云数据库页面。
4. 点击"数据"页签。
5. （可选）如果您没有现成的数据源，可以下载数据模板，编辑后导入。
   1. 点击"数据模板"，下载获取模板json文件。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/9d/v3/_CZX96K9Th6eeDs4oANRjA/zh-cn_image_0000001937512689.png?HW-CC-KV=V1&HW-CC-Date=20260916T021830Z&HW-CC-Expire=31536000000&HW-CC-Sign=C5B12B463FEDFC030C13E1AEE25D8384182C38F75E74B5161653BDC06442D508)

   2. 编辑模板文件内容后，保存在本地。
      * cloudDBZoneName：填写存储区的名称。名称为1~20个字符，只能包含字母和数字，并且必须以字母开头。名称不区分字母的大小写。不允许使用系统保留名称：privatedefault。
      * objectTypeName：填写对象类型名称。名称为为1~30个字符，只能包含字母、数字和_，并且必须以字母开头，以字母或者数字结尾。名称不区分字母的大小写。不允许以"sqlite_"开头，不允许使用系统保留名称：naturalbase_metadata、t_data_upgrade_info、ObjectTypeInfoHelper、t_index_schema、t_nstore_config、t_schema_negotiate_info、t_metadata_schema、t_nstore_permission和t_system_config。
      * objects：数据记录。每条数据记录可以为多个字段进行赋值。

      ```screen
      {
      	"cloudDBZoneName": "cloudDBZoneName1",
      	"objectTypeName": "testObjectTypeName",
      	"objects": [
      		{
      			"field1": "string1",
      			"field2": 100,
      			"field3": 100,
      			"field4": "text1",
      			"field5": 10.5,
      			"field6": 10
      		},
      		{
      			"field1": "string2",
      			"field2": 200,
      			"field3": 200,
      			"field4": "text2",
      			"field5": 20.5,
      			"field6": 20
      		}
      	]
      }
      ```

6. 点击"导入"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/a6/v3/zaJtxSJsT9SAMfZy_Tjuag/zh-cn_image_0000001896996130.png?HW-CC-KV=V1&HW-CC-Date=20260916T021830Z&HW-CC-Expire=31536000000&HW-CC-Sign=0BBC6E9C6B44B0C1D60938F532A93C8A001B37CA131EB87177A9C6E85E0314A3)

7. 选择"导入源"为"本地"。
8. 选择导入文件。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/96/v3/etbkuHDoTFOGOCZORbvYMg/zh-cn_image_0000001896998670.png?HW-CC-KV=V1&HW-CC-Date=20260916T021830Z&HW-CC-Expire=31536000000&HW-CC-Sign=2107BFBD452F90A2E074FDF0E8136F440C5C1EF35954CFEB892B3DA5493EB521)

9. 点击"确定"。 数据将会被导入，并更新相应对象类型中的数据。

## 备份数据至云存储

> 注意
>
> 使用免费额度的APP不支持将数据备份至云存储。

数据备份恢复是保护数据安全的重要手段之一，为了更好的保护数据安全，云数据库提供基于云存储服务的数据备份恢复方案。备份数据时，您可基于AppGallery Connect控制台进行数据的备份。云数据库支持全量数据备份或者部分数据备份，并会将备份的数据进行加密，防止数据在备份恢复的过程中发生数据泄露。同时，云数据库会将对象类型定义和数据备份至一个文件中。

备份数据至云存储请注意如下事项：
> 注意
>
> 操作数据前，请先关注注意事项。

* 备份数据时，请先启用云存储服务，详细请参见[开通服务](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudstorage-enable-service-0000001275330014)。
* 当备份文件的大小大于20MB或者包含的数据记录条数大于1000条，会被系统分为多个文件。
* 备份数据时，如果对象类型中包含加密字段或敏感字段，系统会自动剔除加密字段和敏感字段的数据。

**具体操作步骤如下：**

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中点击需要配置云数据库的项目。
3. 在左侧导航栏选择"云开发（Serverless）> 云数据库"，进入云数据库页面。
4. 点击"数据"页签。
5. 点击"导出"。
6. 选择单个或多个"存储区"和"对象类型"的数据进行备份。
7. 选择"导出目标"为"Cloud Storage"，点击"下一步"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1/v3/WGBrJBeLS4ajip7i31TU1Q/zh-cn_image_0000001937631301.png?HW-CC-KV=V1&HW-CC-Date=20260916T021830Z&HW-CC-Expire=31536000000&HW-CC-Sign=17504A88FA04E9447A4833D19E449AF1705ECA2B01F171F428DA718D6EA33C03)

8. 选择"存储实例"和文件存储路径。
   * 导出加密：是否对导出的数据进行加密。为了保证数据安全，建议使用加密导出。
   * 存储实例：云存储服务中创建的实例。
   * 文件存储路径：选择当前已有文件夹或者新增文件夹。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/8a/v3/ro3XmLjJSFmj2U8-J8PFDA/zh-cn_image_0000001897274288.png?HW-CC-KV=V1&HW-CC-Date=20260916T021830Z&HW-CC-Expire=31536000000&HW-CC-Sign=3542D14D375562B0681AC8B3BFA8B10A3325A846779BB2808A67387E12323B3E)

9. 点击"确定"。 进度条完成后表示数据导出完成，页面提示备份任务成功。可在对应云存储服务查看已导出数据。

## 恢复数据至云数据库

您可以通过导入云存储中的数据实现数据的恢复。恢复数据至云数据库时，系统会校验导入文件中的对象类型是否存在，若不存在，则自动创建对象类型，再执行数据恢复操作。

请注意如下事项：
> 注意
>
> 操作数据前，请先关注注意事项。

恢复数据时，如果对象类型的结构发生变更，即当前备份文件中的对象类型定义与云数据库中最新的对象类型定义相比：

* 如果云数据库中删除过字段，则会导致数据恢复失败。
* 恢复数据时，如果对象类型中包含加密字段或敏感字段，系统会自动剔除加密字段和敏感字段。
* 如果云数据库中字段未发生变化或者有新增字段时：
  * 若主键值相同，则以备份的数据覆盖原数据。
  * 若主键值不同，则写入新数据。

**具体操作步骤如下：**

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中点击需要配置云数据库的项目。
3. 在左侧导航栏选择"云开发（Serverless）> 云数据库"，进入云数据库页面。
4. 点击"数据"页签。
5. 点击"导入"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ca/v3/Kkz0bRhiSFOFnNJdLnVecQ/zh-cn_image_0000001896996130.png?HW-CC-KV=V1&HW-CC-Date=20260916T021830Z&HW-CC-Expire=31536000000&HW-CC-Sign=ABB262D001874D9F675A762C59A4EFB3CDD6C2450128B3A6D9D000448B6A150A)

6. 选择导入源为"Cloud Storage"。
7. 选择"存储实例"和文件存储路径。
   * 存储实例：云存储服务中创建的实例。
   * 文件存储路径：备份文件的存储路径，可选择同一备份下的一个或多个文件，暂不支持跨备份路径下的多个文件。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/46/v3/xmsjyL_KTo6j8cau8VuCPQ/zh-cn_image_0000001897232210.png?HW-CC-KV=V1&HW-CC-Date=20260916T021830Z&HW-CC-Expire=31536000000&HW-CC-Sign=CB55763B27405202F04251271014CE0E0828C733B8E6330FA57DC66596E4F57F)

8. 点击"确定"。 数据将会被导入，并更新相应对象类型中的数据。

## 管理回收站数据

您可基于AGC控制台为应用开启回收站，开启回收站后，您的应用将具备数据恢复能力。您需以"天"为单位设置数据保留天数，保留期间可以查询、恢复和永久删除回收站的数据。
> 注意
>
> 修改数据保留天数小于原保留天数或者禁用保留数据时，可能会导致回收站部分数据丢失，并且无法恢复，请谨慎修改。

请注意如下事项：
> 注意
>
> 操作数据前，请先关注注意事项。

* 回收站数据会占用数据存储空间配额。
* 回收站默认为禁用状态，需手动开启后，应用才具备数据恢复能力。
* 回收站为禁用状态时，对应的数据保留天数为0天，删除的数据会被立即删除，数据不可恢复。
* 回收站为开启状态时，删除的数据会被保留在回收站，且在数据保留期间，可在AppGallery Connect控制台和Server SDK查看，其他端均无法查看已删除的数据。
* 数据保留天数从数据被删除的次日0点开始计算，数据被删除当日不计入保留天数。


* 数据保留天数到期之后，回收站的数据会被自动删除。
* 回收站为开启状态时，若更新或插入与回收站中相同主键的数据，使用新数据覆盖已删除的数据。原数据从回收站中移除，无法在回收站中查询得到。

**具体操作步骤如下：**

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中点击需要配置云数据库的项目。
3. 在左侧导航栏选择"云开发（Serverless）> 云数据库"，进入云数据库页面。
4. 点击"数据"页签。
5. 点击"回收站"。 ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/e8/v3/js5MF_L9TAe0qMNxF-smOQ/zh-cn_image_0000001897225570.png?HW-CC-KV=V1&HW-CC-Date=20260916T021830Z&HW-CC-Expire=31536000000&HW-CC-Sign=84ABD95AC78DFA9E8E7AE24C62360B967483A45532575BDD5CEE8286354D9D75)

6. 点击![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/dc/v3/KvCi4TsrRe6G7FQDDzEACw/zh-cn_image_0000001518394580.png?HW-CC-KV=V1&HW-CC-Date=20260916T021830Z&HW-CC-Expire=31536000000&HW-CC-Sign=1BA71E902D250C2911A07966E8E28507191057155925F0778BA4EC99F9803F8E)或者右侧菜单栏中的"设置"，开启回收站并设置数据保留天数。
   * 回收站默认为禁用状态，对应的数据保留天数为0天，删除的数据会被立即删除，数据不可恢复。
   * 回收站为开启状态时，表示数据删除后将被保留在回收站。数据保留期间可以对回收站的数据进行查询、恢复和彻底删除等操作。
     * "数据保留天数"，默认值为30，可设置为大于或等于1小于或等于60。
     * 保留天数从数据被删除的次日0点开始计算，数据被删除当日不计入保留天数。

     ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/1a/v3/TIJI0nw5RJaBTbeUV4y_rA/zh-cn_image_0000001897389970.png?HW-CC-KV=V1&HW-CC-Date=20260916T021830Z&HW-CC-Expire=31536000000&HW-CC-Sign=07B8A6F9E6D01445E6CA5C8819F39B371FB6A71633366476DC8D835C4E4B6A2E)
7. 点击"保存"。 应用开启回收站，您可以对回收站的数据进行查询、恢复和永久删除等操作。

## 清空数据

您可基于AGC控制台清空指定存储区中对象类型的数据，清空数据以存储区和对象类型为粒度。
> 注意
>
> 清空数据后，数据将会从磁盘上删除，并且无法恢复，请谨慎使用。

1. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击"开发与服务"。
2. 在项目列表中点击需要配置云数据库的项目。
3. 在左侧导航栏选择"云开发（Serverless）> 云数据库"，进入云数据库页面。
4. 点击"数据"页签。
5. 选择需要清空数据的"存储区名称"和"对象类型"，点击"查询"。
6. 点击"清空"。 注意
   > * 清空数据后时，数据类型为IntAutoIncrement和LongAutoIncrement的字段序列将会重置。
   > * 清空数据时，回收站数据也将清空。

   ![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/77/v3/qrgO9aAqSL-j8OYBEa-a7g/zh-cn_image_0000001897463366.png?HW-CC-KV=V1&HW-CC-Date=20260916T021830Z&HW-CC-Expire=31536000000&HW-CC-Sign=D4F7BBDC7BB21BD4C09BA798DDD56C50EE6F773F599F31A77B6984357E4591A8)
7. 点击弹出框中的"确定"，清空当前存储区中指定对象类型的数据。

