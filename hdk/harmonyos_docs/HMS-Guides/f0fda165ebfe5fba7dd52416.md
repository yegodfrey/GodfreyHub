---
name: document/cn/HMS-Guides/07189836
title: 服务端操作
uri: https://developer.huawei.com/consumer/cn/doc/HMS-Guides/07189836
source: portal
---

DTM作为一个跟踪代码管理系统，可以帮助您便捷地对移动应用的跟踪代码进行管理。DTM配置是与移动应用一一对应的跟踪代码管理单元，DTM配置主要由用于事件跟踪的代码、用于判断何时上报事件的条件以及用于简化代码和条件管理的变量组成，您可以在DTM服务页面为您的应用创建DTM配置，在配置中添加变量、条件及代码，为配置创建版本等。使用DTM服务后，应用可自动从DTM服务端获取最新的已发布配置，实现跟踪代码的动态更新，即使在应用发布之后也是同样如此。

您可以通过以下步骤登录DTM管理界面：

1.登录[AppGallery Connect网站](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，点击“我的项目”图标。

2.在项目列表中找到需要使用动态标签管理器的应用。

3.在“项目设置”页面选择 “增长 > 动态标签管理器服务”，进入配置管理页面。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20201126145356.60272567956364828757412016736159:50511126091821:2800:B7E50D5F31DDDFB7D4EF7613E55374E501BBF90A9A1FC64F081D3C753874C3DF.png?needInitFileName=true?needInitFileName=true)

说明：

仅支持Chrome（推荐）、Firefox、Edge浏览器；

使用动态标签管理器服务前，您需要为您的应用[设置数据存储位置](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-data-storage-location)，若未设置数据存储位置，进入动态标签管理器服务页面时，您会收到相关提示。

# 1\. 权限

#### **权限管理**

权限是对配置的访问控制，只有团队帐号持有者和管理员具有管理权限，其他的团队成员则根据其团队角色拥有相应的操作权限。团队成员管理的相关信息参见[帐号管理](https://developer.huawei.com/consumer/cn/doc/distribution/app/agc-team_account_mgt)。

**表1** 权限说明操作权限| 说明  
---|---  
查看DTM配置| 用户可以看到应用对应的配置，并且可以浏览配置中的分组、代码、条件和变量，但不能修改。  
编辑DTM配置| 用户可以修改配置中的分组、代码、条件和变量，能创建版本，但不能发布版本。  
发布DTM配置| 用户有权创建版本和修改配置中的分组、代码、条件和变量，创建版本和发布版本，但不能创建和删除配置。  
管理DTM配置| 用户拥有配置的所有权限。  
**表2** 团队成员权限说明操作权限| 帐号持有者| 管理员| App管理员| 运营| 开发  
---|---|---|---|---|---  
查看DTM配置| √| √| √| √| √  
编辑DTM配置| √| √| √| √| √  
发布DTM配置| √| √| √|   
|   
  
管理DTM配置| √| √|   
|   
|   
  
  
# 2\. 配置

配置是对DTM中所有资源——包括概览、变量、条件、代码、分组、版本。所有的操作都必须在配置中进行，因此在进行其他操作之前必须创建配置。配置管理功能包括权限管理、导入、导出、编辑和删除。

1\. 创建配置：您需要在使用DTM之前创建一个配置以实现对资源的管理。

2\. 导入配置：您可以将本地的配置数据直接导入以实现配置数据的快速同步。

3\. 导出配置：您可以对配置中任意版本或工作区的数据进行导出。

4\. 编辑配置：您可以对配置名称、操作记录存储时间以及是否上报HA进行修改。

5\. 删除配置：您可以删除未发布过版本的配置。

#### **创建配置**

1\. 点击“动态标签管理器服务”管理页面中的“创建配置”；

2\. 在弹出的“创建配置”对话框中填写配置名称并选择应用类型、操作记录保存时间和上报设置；

3\. 确认信息填写完成后，点击“确定”完成创建；

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221100408.63247648313783846943426792905624:50511126091821:2800:B998075C5C33D979450E19824945397FE5902E6E54A742588318864C8F36ADF6.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

4\. 配置创建成功后，在“配置管理”页面中查看到已创建的配置，点击已创建的配置名称可以进入配置页面。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221102551.21595106168873508785030657850471:50511126091821:2800:4DCC6DD0E96292644BE40C04119016F68468C2BE068EA684653E856553EFD3D7.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

说明：

  * 只有[团队主帐号](https://developer.huawei.com/consumer/cn/doc/2080101)才拥有创建配置的权限。

  * 应用包名与创建应用时填写的包名一致，DTM会根据您的应用自动关联，创建配置时不允许修改。

  * 应用类型目前仅支持Android。

  * 一个应用只允许创建一个配置，如果您已经完成配置创建，则无需再次创建。




#### **导入配置**

导入功能可以将指定文件中的配置信息导入至当前配置的草稿中。执行导入操作时，服务端会对导入文件的格式及完整性进行校验，为避免校验失败，请您直接使用导出配置的文件进行导入。

1\. 在“配置管理”页面，点击“导入”；

2\. 选择本地待导入的JSON文件并选中导入策略，点击“导入”。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200119103210.97550080041417787510786507316756:50511126091821:2800:21F3A837728C15883AB3D76D50E37B858590F6DC8C298B88D175A6BD2C904396.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

说明：

  * 导入的配置不允许为空，即导入的配置中至少应包含一个变量、条件或代码。

  * 导入策略分为覆盖和合并两种。其中，覆盖策略将删除配置草稿中的变量、条件、代码、分组，并使用导入的数据生成新的草稿。

  * 导入时如果选择合并策略，您需要进一步指定在遇到名称相同的变量、条件、代码、分组时的处理规则：

    * 新内容覆盖旧内容：以导入数据覆盖草稿中的数据，草稿中原有的数据将被删除。

    * 自动重命名新内容：自动对导入的重名数据进行重命名，可同时保留草稿中原有的数据和导入的数据。

    * 保留旧内容：重名数据仅保留草稿中原有的数据，丢弃导入的数据。




#### **导出配置**

导出功能可以将历史版本或当前草稿中的配置信息导出为JSON格式的文件，导出的文件可用于应用间的配置同步或将当前配置还原为某个历史版本数据，详情参见导入配置功能介绍。

1\. 在“配置管理”页面，点击“导出”；

2\. 选择一个待导出的版本，点击“导出”即可将配置信息保存至本地。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221102810.07943781899313299972434680035694:50511126091821:2800:1FE29E394CCA544E99C8C764DCB3FA87C94C21CAB3FC11098628A1C7ADD7CF6A.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

说明：

Draft version表示当前配置草稿中的数据，包含创建最新版本后的修改内容。

#### **编辑配置**

配置创建后，您可以对配置的名称及操作记录存储时间进行修改。

1\. 点击已创建配置右侧的“编辑”；

2\. 修改名称或操作记录后，点击“确定”。

#### **删除配置**

1\. 在“配置管理”页面，点击已创建配置右侧的“删除”；

2\. 确认对话框中的提示信息后点击“确定”。

说明：

当配置存在已发布版本时，不允许删除。

# 3\. 概览

概览是查看当前版本中变量、条件和代码历史状态与操作历史的集合。您可以在操作记录中看到用户对具体某个变量、条件、代码或分组的创建、修改或删除的记录和时间点，什么时间做出什么动作一目了然。修改记录中，您不仅可以看到变量、条件或代码在具体时间点是新增或是删除，更可以点击具体的名称查看当前版本中该变量、条件或是代码的当前状态，即具体内容，也可以通过点击“查看更改”，查看到该变量、条件或是代码与上个版本历史状态的对比。此外，您还可以在概览中创建版本。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20201126145453.00681888209000386182758819709783:50511126091821:2800:81F9A46FF922C1EC8A09E5411EAC5F4868F81477A0D743B9E8B81379983A0962.png?needInitFileName=true?needInitFileName=true)

#### **修改记录**

1\. 在变量、条件或是代码中进行新建、修改或是删除操作，然后点击“概览”，可以看到历史修改记录。以代码为例。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20201126145523.28178977406360583120101615880782:50511126091821:2800:A83C43434E6490E4D82BDC4E8907B4E8F13177AE95ECC86E2EDA8100E2DA6A75.png?needInitFileName=true?needInitFileName=true)

2\. 点击变量、条件或是代码名称进入详情页面，查看当前历史状态。以代码为例。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20201126145711.77207360414328003943502624905454:50511126091821:2800:833D92400EAC6D29DD819E139BE7C70507016954D4D641241F2F2DA21FF4D180.png?needInitFileName=true?needInitFileName=true)

3\. 查看更改，即是当前版本与上个版本中变量、条件或是代码的差异性对比。

a. 点击“创建版本”，填写内容，确定，然后进入概览，可以看到当前版修改记录初始化。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20201126145742.88267310264103109460643628292137:50511126091821:2800:7347BE369FF6CBC940F5B1B1EB1DBE007CA9F724A4AE27EBA24ACD18D4AC1110.png?needInitFileName=true?needInitFileName=true)

b. 对上个版本中，存在的变量、条件或是代码进行修改操作，修改完毕后点击“概览”，在该变量、条件或是代码名称的右边点击“查看更改”。以代码为例。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20201126145835.72668744967868273857330054454398:50511126091821:2800:53819AFC2F9363B5DB1F1E5DBD8B3BF87C33721D9414B26E2366B030DA071B9C.png?needInitFileName=true?needInitFileName=true)

c. 进入“查看更改”页面，可以看到哪些内容进行了更改。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20201126145900.48016694876087372926195418881083:50511126091821:2800:C6F2A21387779C6A9F8C7A7F52E257F7CE7EFB511C7282CD724F3EE079871954.png?needInitFileName=true?needInitFileName=true)

#### **操作记录**

在变量、条件、代码或是分组中进行新建、修改或是删除操作，然后点击“概览”，滑至操作记录，可以看到具体时间的操作行为。此外，您还可以将操作记录导出为Excel文件。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20201126145927.23690015617441261625009429792476:50511126091821:2800:5E8B0D6947F9A7B0B81702ABA6BFC73DECCFB17FE0B4A614568CEA3FB891785D.png?needInitFileName=true?needInitFileName=true)

# 4\. 变量

变量是在条件、代码中使用的占位符，例如，“App Name”变量在Android应用中用来指代当前应用的名称。DTM提供了一些预定义的预设变量，可满足大多数代码和条件的配置需求。此外， 您还可以创建自定义变量，以满足预设变量可能无法涵盖的特定要求。目前总共支持了17种预设变量，以及6种自定义变量。预设变量与自定义变量的差别在于，预设变量无需用户指定任何信息便可以在应用系统中获取到相关的值，而自定义变量则需要您定义获取数据的方式。

**表3** 预设变量  
**变量名称**| **变量含义**  
---|---  
Event Name| 返回条件触发的事件名称  
Random Number| 生成一个0到2147483647之间的随机整数  
Configuration ID| 提供配置ID  
Configuration Version| 发布的配置版本  
SDK Version| SDK版本  
App ID| 应用ID（“Android”），需设置应用包名  
App Name| 应用名称  
App Version Name| 应用版本名称  
App Version Code| 应用版本号  
Screen Resolution| 当前运行应用的设备的屏幕分辨率，格式为“宽x高”  
Platform| 操作系统（“Android”）  
OS Version| 应用所在的操作系统版本，返回结果为字符串，例如：“8.1.0”  
Device ID| 设备ID  
Device Name| 设备名称  
Language| 用户设置的语言  
OAID| 华为广告ID  
Limit OAID tracking| 是否启用广告跟踪  
**表4  **自定义变量**变量类型**| **变量含义**  
---|---  
用户属性| 用于在执行跟踪代码时获取用户属性值，[用户属性](https://developer.huawei.com/consumer/cn/doc/HMS-References/3021008#setUserProfile)值是由华为分析平台设置，您也可以在DTM管理界面为用户属性设置默认值，如果在代码运行期间获取不到用户属性，采用默认值，否则对应的属性值为空。  
事件参数| 通常用于代码运行期间从事件上下文中获取上报事件的参数值。  
映射表| 是一组键值对，根据输入的键值从映射表中获取对应的参数值，通过映射表，您可以令变量值随输入的变量值自动变化。如映射表示例，当应用已发布多个版本，版本号“App Version Code”分别为1.0、2.0、3.0，假设此时您定义的变量“Version ID”在不同的应用版本中需要设置不同的参数值，那么您可以通过映射表定义出各个版本的参数值映射关系，代码执行时，通过匹配版本号获取参数值。  
常量| 将变量值设置为您指定的常量值。  
函数调用| 当您需要获取一个自定义的变量值时，可以选择函数调用变量，此时您需要指定一个实现了[ICustomVariable接口](https://developer.huawei.com/consumer/cn/doc/development/HMS-References/24055276)的类的路径，代码运行时将变量值设置为您指定这个类的返回值。在DTM界面配置函数调用变量时，可以配置参数输入值，在您实现接口的类中可以使用这些参数值。  
[Branch](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/63636033/#h1-1589533764885)  
| Branch变量提供了整型、浮点型、布尔型、字符型、数组和键值对这些不同的数据类型。当您使用Branch模板时，您可以根据Branch模板字段的取值范围引用对应类型的Branch变量。  
**表5  **映射表示例如果{{App Version Code}}等于| 将{{Version ID}}设置为  
---|---  
1.0| value_version1.0  
2.0| value_version2.0  
3.0| value_version3.0  
  
#### **创建预设变量**

1\. 在“变量管理”页面，点击预设变量右侧的“配置”；

2\. 在弹出的“配置预设变量”页面中，选中待创建的预设变量，点击“确定”；

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221103201.48229298107872899237918126228426:50511126091821:2800:D6D31891B2CC7B4244B22EE1AA649836DED7142796944D3231288ABB3F1FA0E0.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

3\. 创建成功后，在“变量管理”页面可查看到已创建的预设变量。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221103302.38338332203873977047401899661933:50511126091821:2800:8CACB9F5F92192FEDF2CDE7F18CF288617749ACB73CA9971E1E27295DBA57AC9.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

说明：

点击已创建预设变量的名称，进入查看预设变量页面，可查看引用该变量的资源。

#### **删除预设变量**

1\. 在“变量管理”页面，点击预设变量右侧的“配置”；

2\. 在弹出的“配置预设变量”页面中，取消待删除预设变量的勾选，点击“确定”。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221103340.35432513556542916331197351862597:50511126091821:2800:51DD795E99959E225D2318F61C4A47FB141BB17BE6F2C9A2B921E5EA9269645C.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### **创建自定义变量**

1\. 在“变量管理”页面，点击“自定义变量”右侧的“新建”；

2\. 在“新建自定义变量”页面中输入变量名称，选择变量类型并输入对应的参数，填写完成后点击“保存”；

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221103437.83667717536788320589100395288026:50511126091821:2800:19867044B218F8A0D0DD424FD31E139ECE691A0DCC40DBC32019BE161DF30AA9.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

3\. 创建成功后，在“变量管理”页面可查看到已创建的自定义变量。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221103607.98050935415884012198803026695151:50511126091821:2800:14A5A18546F1DB41F2BF986F672C4C1582A35A1876E09EF742A9B9329D1FB9C7.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

说明：

  * 配置变量参数时，若输入框右侧有引用符号“![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221103704.59989284666872138829373565382114:50511126091821:2800:454FA3B1C19FFB6C911C8174833889021CF5FF2FB7443A065499C287BA163A91.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)”，点击该符号可以对其他已创建变量进行引用。对于引用变量，页面中使用“{{}}”进行标注。

  * 变量间不能存在循环引用，也不可以自引用，否则会导致变量创建失败。




#### **编辑自定义变量**

1\. 在“变量管理”页面，点击已创建自定义变量的名称；

2\. 在“编辑自定义变量”页面中可以对变量名称、变量类型及变量参数进行修改，修改完成后点击“保存”。

说明：

在自定义变量编辑页面，可查看引用该变量的资源。

#### **删除自定义变量**

1\. 在“变量管理”页面，点击已创建变量右侧的“删除”；

2\. 确认对话框中的提示信息后点击“确定”。

说明：

如果变量已经被其他资源引用，则无法删除，需要移除引用关系后再执行删除。

  


# 5\. 条件

条件是代码触发执行的前提，决定了代码的执行时机，任一代码至少包含一个触发条件。

条件由三个要素组成：条件名称，条件类型，触发条件。

  * 条件名称与条件类型为必填项。

  * 当触发条件选择“所有事件”时，代表所有选定类型的事件均会触发，如果选择为“部分事件”则需要进一步指定事件的触发条件。

  * 每一条触发条件由三部分组成：变量、操作符和属性值。目前条件支持2种条件类型，16种操作符。




条件管理当前包含了新建条件、复制条件、删除条件。

  * 新建条件：您可以创建一个条件以作为代码的触发前提。

  * 复制条件：您可以对任一个已创建的条件进行复制，实现快速修改以增加新的条件。

  * 删除条件：您可以删除未被代码引用的条件。


**表6  **条件类型**类型名称**| **说明**  
---|---  
自定义| 自行设置自定义条件。  
配置已加载| 配置加载完成时会匹配条件。  
**表7** 操作符**操作名称**  
---  
等于  
包含  
开头是  
结尾是  
正则表达式  
正则表达式（忽略大小写）  
不等于  
不包含  
开头不是  
结尾不是  
与正则表达式不匹配  
与正则表达式不匹配（忽略大小写）  
小于  
小于或等于  
大于  
大于或等于  
  
#### **创建条件**

1\. 在“条件管理”页面，点击“新建”；

2\. 在“新建条件”页面中输入条件名称，选择条件类型并输入对应的参数；

3\. 如果您选定条件类型后并设置触发条件为“部分事件”，此时您需要依次选择触发条件的变量和操作符，并填写触发条件需要的属性值。如果您需要填写多个触发条件，点击“添加”可增加条件输入框；

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221103756.31467891138224513716671423028812:50511126091821:2800:9E7869CF332A5890D6BB5D891DFDDAFD9A62A8A1AD370EBD7A2E71DE14D10996.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

4\. 填写完成后，点击“保存”；

5\. 创建成功后，您可以在“条件管理”页面中查看到已创建的条件。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221103837.04941220596572581695131186413159:50511126091821:2800:C527CCDDE58D6FBCB31B4AFBD444EBBE9525E1DCD8F622D167370919D17FAF1F.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

说明：

当一个条件中配置了多条触发条件，必须要同时满足才会触发。

#### **修改条件**

1\. 在“条件管理”页面，点击已创建条件的名称；

2\. 在“修改条件”页面可以对条件名称、条件类型及触发条件进行修改；

3\. 修改完成后，点击“保存”。

说明：

在“修改条件”页面，可查看引用该条件的资源。

#### **复制条件**

1\. 在“条件管理”页面，点击已创建条件右侧的“复制”；

2\. 在“复制条件”页面可以对条件名称、条件类型及触发条件进行编辑；

3\. 编辑完成后，点击“保存”。

#### **删除条件**

1\. 在“条件管理”页面，点击已创建条件右侧的“删除”；

2\. 确认对话框中的提示信息后点击“确定”。

说明：

如果条件已经被其他资源引用，则无法删除，需要移除引用关系后再执行删除。

  


# 6\. 代码  


代码是指用于您应用中提供事件跟踪的相关代码配置，DTM支持“华为分析”、“自定义函数”及多种第三方代码扩展类型。使用DTM服务后，您无需在移动应用中额外添加第三方的跟踪代码片段，只需在DTM管理界面中配置代码参数及触发条件，并发布配置版本即可实现对事件的跟踪。即使在应用上架发布后，您仍然可以通过DTM管理界面进行更新、发布代码，以实现代码配置的动态调整。

**表8**  DTM支持的代码扩展类型代码扩展类型  
---  
[华为分析](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/64646044/#h1-1589532637780)  
[Adjust](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/64646044/#h1-1589534700210)  
[AppsFlyer](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/64646044/#h1-1589534086930)  
[Google Analytics (Firebase)](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/64646044/#h1-1589534913379)  
[自定义函数](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/64646044/#h1-1589534146398)  
[自定义网址](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/64646044/#h1-1589534164244)  
[Kochava 事件跟踪](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/64646044/#h1-1589534101255)  
[Floodlight 计数器](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/64646044/#h1-1589534117756)  
[Floodlight 销售](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/64646044/#h1-1589534132459)  
[Google Ads 再营销](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/64646044/#h1-1589534182386)  
[Singular](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/64646044/#h1-1589534201443)  
[Branch](https://developer.huawei.com/consumer/cn/doc/development/HMS-Guides/64646044/#h1-1589534217676)  
  
  


#### **创建代码**

1\. 在“代码管理”页面，点击“新建”；

2\. 在“新建代码”页面中输入代码名称，选择代码扩展类型并输入对应的参数；

3\. 在“新建代码”页面中设置代码的“触发条件”和“例外条件”。“触发条件”满足时将上报事件至分析平台，“例外条件”满足时将阻止事件上报；

4\. 设置完成后，点击“保存”。

说明：

  * 配置代码参数时，若输入框右侧有引用符号“![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221103917.87448030564745075202736452869331:50511126091821:2800:39A2E7D842F0AA08B4B4BB4FC2A8C09D4C00CA16815B4601C27EDC31FB835304.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)”，点击该符号可以对已创建变量进行引用。对于引用变量，页面中使用“{{}}”进行标注。

  * 代码配置应至少包含一个触发条件，若同时配置了触发条件和例外条件，优先触发例外条件。




#### **创建代码示例-华为分析**

代码主要由参数及条件两部分组成，对于不同的扩展类型，需要设置的参数也不尽相同，下文以“华为分析”为例对创建代码操作进行详细介绍：

1\. 在“新建代码”页面中输入代码名称后，将“扩展”类型选择为“华为分析”；

2\. 扩展类型选择为“华为分析”后，您需要选择对应的“操作”类型，“华为分析”支持添加事件、修改事件和阻塞事件三种操作，此处默认为修改事件；

**表9**  华为分析的操作类型  
操作类型| 操作说明  
---|---  
添加事件| 当满足条件的事件发生时，应用发送一个附加的指定事件至华为分析平台。支持配置附加事件的名称，附加事件的事件参数默认继承自源事件，您也可以添加、修改、删除事件参数。  
修改事件| 当满足条件的事件发生时，将该事件名称修改为新的名称后发送至华为分析平台，您同样可以对事件参数进行添加、修改和删除。  
阻塞事件| 可以阻止系统将相应数据发送至华为分析平台。  
  
3\. （可选）在“指定新的事件名称”后的输入框中填写修改后的事件名称；

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221104002.51423927101817710848409705176309:50511126091821:2800:5E2C1924515E2680DF1BCC32B31DCAEED4F2F2462E86497DDD3421BEE7D06C71.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

说明：

事件名称必须以字母或引用开头，且只能包含数字、字母和下划线。如果事件名称引用了变量，您需要确保被引用变量的取值满足事件名称约束条件，否则可能导致事件上报失败。

4.（可选）点击“待添加/修改的参数”后的“添加”，在输入框中填写参数的键值对。如果原始事件参数中包含输入的键名，则修改其参数值，否则在事件参数中添加输入的键值对；

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221104043.20163077278193214261627426026990:50511126091821:2800:A298D0F6682A6132D41A86264F597CF13511FAAD2CBD87A2E23280996BA3E83A.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

5.（可选）点击“待删除的参数”后的“添加”，在输入框中填写参数键名，如果原始事件参数中包含输入的键名，则将其删除；

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221104128.62390977786380069634439504177853:50511126091821:2800:905BB7B3D2E81F6B019072CAFB06D970FACEE9F7A23BC7EBCA06A46979A1933B.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

6\. 点击“触发条件”后的“添加”，选择代码的触发条件；

7\. （可选）点击“例外条件”后的“添加”，选择代码的例外条件;

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221104210.57995925258931803956736750848986:50511126091821:2800:6A76115DC8458562D07BE8E2160FCF056669B0233AC2D930BC0492BABBFD5161.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

8.配置完成后，点击“保存”。创建成功后，在“代码管理”页面可查看到已创建的代码。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221104457.26227363896567161399383399092494:50511126091821:2800:DE1BA9C80F2ADE999F8A4B902170A6BB2ADB8DBD0B9C45CC7738554F3196E2C6.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)  


#### **修改代码**

1\. 在“代码管理”页面，点击已创建代码的名称；

2\. 在“编辑代码”页面可以对代码的配置和条件进行修改；

3\. 修改完成后，点击“保存”。

#### **复制代码**

1\. 在“代码管理”页面，点击已创建代码右侧的“复制”；

2\. 在“复制代码”页面可以对代码的配置和条件进行修改；

3\. 修改完成后，点击“保存”。

#### **暂停/执行代码**

1\. 在“代码管理”页面，点击已创建代码右侧的“暂停”，确认对话框中的提示信息后点击“确定”。代码置为暂停状态后，代码名称前会出现暂停标识，暂停状态下的代码在后续创建的版本中不会触发事件上报；

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221104556.74829544652931958186639787631587:50511126091821:2800:0882559D055C4A7A217758E8560EAD254CFCF9118482F0E27E6CD8D5787931AB.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

2\. 点击已暂停代码右侧的“执行”，代码恢复为可执行状态。代码恢复后，代码名称前的暂停标识会自动取消，在后续创建的版本中将正常触发事件上报。

#### **删除代码**

1\. 在“代码管理”页面，点击已创建代码右侧的“删除”；

2\. 确认对话框中的提示信息后点击“确定”。

警告：

代码删除后将不可恢复，删除前请确认代码已不再使用。如果您只是暂时不使用该代码，您可以使用暂停/执行代码功能。

  


# 7\. 分组

#### **创建分组**

1\. 在“分组管理”页面，点击“新建”；

2\. 在“新建分组”页面中输入分组名称，点击“确定”；

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221104657.85728977908714637307375094737244:50511126091821:2800:574E1BB4AB3B9CA731E9D2EE0874DAF5D342BD2420589955294F7F28117D97D1.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

3\. 分组创建成功后，在“分组管理”页面可查看已创建的分组。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221104740.56634634052340151157696312252414:50511126091821:2800:7E49E93DA00407AA6B65204B5DBCE9C6DB4CD9C14F4023CA94EA0A949B893FF3.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

说明：

系统默认已创建一个名称为“未归档的项目”的分组，所有未分组的资源都归档在这个组内。

#### **移动资源分组**

1\. 在“分组管理”页面，从资源当前所在分组中，选中资源；

2\. 点击分组右侧的“移动到”，并选择目的分组；

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221104822.39797270325539737445277537297893:50511126091821:2800:F46ED8E09F62B977D729CDAAC44D5E8FDF5C404DFAB742700D664D7A3388CD75.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

3\. 移动完成后，您可以在目的分组中查看到对应的资源。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221104947.19051416785628308212488965127004:50511126091821:2800:A78FC53858B1D77CCBC79CE034B8A71809BE53582EA0718C8C7EF7A907B38C6E.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### **修改分组**

1\. 在“分组管理”页面，点击已创建分组右侧的“操作>重命名分组”；

2\. 在“重命名分组”页面可对分组名称进行修改；

3\. 修改完成后，点击“确定”。

#### **删除分组**

1\. 在“分组管理”页面，点击分组右侧的“操作>删除分组”；

2\. 确认对话框中的提示信息后，点击“确定”。

说明：

如果分组中有资源，需要将资源移出后再删除分组。

  


  


# 8\. 版本

版本是配置在某一个时间点的快照，可用于对配置的不同阶段进行记录，您可以在任何时候为配置创建版本以保存当前配置的最新状态。版本创建后，可以点击版本名称进入到版本详情页面查看版本信息。在版本详情页面，您还可以执行版本下载、预览、发布等操作，版本需要发布后才能被终端设备上的应用自动加载。

#### **创建版本**

1\. 在“概览”页面点击“创建版本”或者在“版本管理”页面点击“新建”；

2\. 在“创建版本”页面输入版本名称和描述后，点击“确定”；

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221105033.54157679582663036229672735848377:50511126091821:2800:6938C7645D6E7492D4629CE4BB7BFBAE30187074098FBE11D51FFB8361969664.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

3\. 版本创建成功后，在“版本管理”页面查看到已创建的版本。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221105219.12859042287955875561177188340996:50511126091821:2800:9C7E70087B8C3EB6DBDCEF48C4B7B737607CC380C2B6E29B6AF16961BC4A13E0.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### **查看版本详情**

1\. 在“版本管理”页面，点击已创建版本名称；

2\. 在“版本详情”页面可以查看到版本的概要、操作记录以及版本中包含的变量、条件和代码，并且还可以执行版本下载、预览、发布、导出、修改、删除等操作。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221105332.38344411404630937628022087256802:50511126091821:2800:9734374EEB9A8EE7FF900513600093AAC24440EED65ECE7B8DD659C17DB7B014.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### **下载版本**

1\. 在“版本详情”页面，点击“下载”；

2\. 选定本地保存目录后，点击“保存”，将配置版本保存为DTM SDK可加载运行的JSON格式文件。

#### **预览版本**

预览模式可用于调试配置版本是否在应用中按预期逻辑运行。通过版本预览页面中提供的启动方式在调试终端上打开应用，应用会自动加载当前版本配置，便于您在发布版本前，对版本的功能进行验证。

1\. 在“版本详情”页面，点击“预览”；

2\. 在“版本预览”页面，默认以配置绑定的应用生成预览链接。如果您需要修改应用包名，可以在“包名”输入框中输入您需要启动预览的应用包名，点击“生成预览信息”；

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221105603.29542550665824069237950265662077:50511126091821:2800:E958CA92A6FB6B4078E4DCB291DBE9214850A2FBAF8F3AA08CC5CBD71F7057F3.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

3\. 在“开始预览”下方展示了三种启动预览的方式，您可以选择任意一种启动应用的方式进入版本预览模式；

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221105654.95335151810641153198390036209147:50511126091821:2800:536DF64A9FF7E4BBF910DEE58329EFC09CA9E2419FB044B4E2B6ECD55DB337FD.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

**表10**  预览版本的启动方式  
启动方式| 说明  
---|---  
通过浏览器启动预览| 点击“通过浏览器启动预览”下的“复制”按钮，将预览地址复制到浏览器中，访问该地址启动应用。  
手机浏览器扫描二维码| 使用手机浏览器的二维码扫描功能，扫描二维码启动应用。  
通过adb命令启动预览| 将终端设备连接至PC，点击“通过adb命令启动预览”下的“复制”按钮，将预览地址复制到PC端的命令行中，执行命令启动应用。  
  
说明：

版本预览页面提供的启动方式只能用于启动调试终端上对应包名的应用。

4\. 在“结束预览”下方展示了三种退出预览的方式，当您完成版本调试后，可选择任意一种关闭应用的方式退出版本预览模式，使用方法与启动预览模式一致。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221105824.12266414482872278011619300864141:50511126091821:2800:3C91F98DC9222F263AB6D49F06B842FF6C657FBE0DEEDB101F8DF0D3DD948F0C.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

#### **发布版本**

创建版本后，您需要对版本执行发布，DTM SDK会在下一个更新周期自动加载该版本配置。如果配置存在多个已发布版本，DTM SDK始终加载最新发布的版本。为确保版本发布后，运行结果符合预期，您可以在发布前使用预览版本功能对配置版本进行调试。

1\. 在“版本详情”页面，点击“发布”；

2\. 确认对话框中待发布版本信息后，点击“确定”；

3\. 发布成功后，版本信息中会展示发布者及发布时间。

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221105909.24078986523210794638810845904219:50511126091821:2800:EC6710E241F3A52534EC0D9062B916585FFBD37F8205CF889AC21B44C9284E98.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

说明：

DTM SDK自动加载配置的周期为6小时。

#### **修改版本**

1\. 在“版本详情”页面，点击“操作>修改描述”；

2\. 在“更新版本”页面可对版本名称和描述进行修改；

3\. 修改完成后，点击“确定”。

#### **导出版本**

导出版本与导出配置中选择版本导出功能一致，用于将当前版本中的变量、条件、代码等信息导出为JSON格式文件，导出的文件可用于导入配置。

1\. 在“版本详情”页面，点击“操作>导出版本”；

![](https://communityfile-drcn.op.hicloud.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20200221110012.81342648592055510126350068151957:50511126091821:2800:506C4CB5843448BD8FB7A43146E3EB1D901ED85C04DD2223F4C787E2AD3E1574.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

2\. 选定本地保存目录后，点击“保存”。

#### **删除版本**

1\. 在“版本详情”页面，点击“操作>删除版本”；

2\. 确认对话框中的提示信息后，点击“确定”。

说明：

配置的最新版本和当前在线的已发布版本不能删除。
