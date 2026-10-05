---
name: document/cn/SPPartnerCenter-develop-Guides/ho_sp-update_release-0000001945573681
title: 使用API更新发布HarmonyOS应用
uri: https://developer.huawei.com/consumer/cn/doc/SPPartnerCenter-develop-Guides/ho_sp-update_release-0000001945573681
source: portal
---

# 使用API更新发布HarmonyOS应用

如果您更新发布HarmonyOS应用，您需要按以下流程执行。

                * 更新在架应用详情：如果您需要更新已上架应用在华为应用市场客户端的详情页信息，但不想升级应用的版本，可以使用同版本更新的方式修改。
                * （可选）开放式测试：对于HarmonyOS应用，在正式更新现网版本前，可以向指定用户先发布开放式测试版本，收集使用意见，降低全网更新出现问题的风险。
                * 升级应用版本：您的应用新增了新的功能或修复了部分问题，需要重新上架新的应用软件包到华为应用市场，可以采用版本升级的方式上架。
                * 分阶段发布：在当前上架版本为全网发布时，您可以采用分阶段发布的方式进行应用升级。采用分阶段发布，您可以先向一定比例的用户发布更新的版本，然后再逐步提升用户比例，最终实现全网发布。通过对小范围进行版本更新，您可以快速获取用户对新版本的反馈意见，降低版本全网发布后出现问题的风险。

#### 更新在架应用详情

                1. 如果您需要在更新应用详情时查看当前在架应用的信息，可以调用[查询应用信息](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-app-info-query-0000001158365045)接口。
                2. 如需更新应用详情页的多语言描述信息，如应用名称、应用描述信息等，可调用[更新语言描述信息](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-language_info_update-0000001917023468)接口。如需更新应用的基本信息，如应用分类、应用支持的设备、应用的开发者信息等，可调用[更新应用基本信息](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-appinfo_update-0000001917016352)接口。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260126140031.29714444826612023796493929720897:50001231000000:2800:C4187011FE460242E5A3DFC3D49914D538B8C8B73088C2958441E053D58B7A86.png)

应用上架后不支持修改应用付费类型。

                3. 如需更新应用图标、应用介绍截图、推荐视频、版权图片等，您需要调用[获取上传文件地址](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-upload_url-0000001916890444)接口为每个文件获取上传地址，再调用[上传文件](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-upload-file-0000001947492341)接口将每个应用资源文件上传至华为服务器。
                4. 文件上传完成后，您需要调用[更新应用文件信息](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-app_file_update-0000001917217058)接口将应用文件信息与应用绑定。
                5. 应用文件信息绑定成功后，直接调用[提交发布](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-app_submit-0000001947512093)接口发布应用。

#### 开放式测试

                1. 调用[添加开放式测试用户群](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-add_test_group-0000001917247406)接口建立测试用户的群组。
                2. 调用[批量添加测试用户](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-add_test_user_batch-0000001917243938)接口向建立的测试用户群组中添加测试用户。
                3. 调用[查询测试用户群列表](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-query_test_user_group_list-0000001917085622)接口查询所有测试用户群ID。
                4. 调用[提交发布](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-app_submit-0000001947512093)接口提交开放式测试版本，其中releaseType设置为4，并传入开放式测试相关信息，包括开放式测试的起始时间、结束时间、参与测试用户群组、邀请链接有效时长等。

#### 升级应用版本

                1. 如需更新应用详情页的多语言描述信息，如应用名称、应用描述信息等，可调用[更新语言描述信息](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-language_info_update-0000001917023468)接口。如需更新应用的基本信息，如应用分类、应用支持的设备、应用的开发者信息等，可调用[更新应用基本信息](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-appinfo_update-0000001917016352)接口。

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260126140031.10033472518200453710217944084477:50001231000000:2800:D0F8D0E87AEF9ED547E0852ECDB81827EC6BD39EF644DCF6E144CF62DAB32E8C.png)

应用上架后不支持修改应用付费类型。

                2. 如需更新应用图标、应用介绍截图、推荐视频、版权图片等，您需要调用[获取上传文件地址](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-upload_url-0000001916890444)接口为每个文件获取上传地址，再调用[上传文件](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-upload-file-0000001947492341)接口将每个应用资源文件上传至华为服务器。
                3. 文件上传完成后，您需要调用[更新应用文件信息](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-app_file_update-0000001917217058)接口将应用文件信息与应用绑定。
                4. 选择一种发布方式升级应用。
                   * 如果您选择调用[提交发布](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-app_submit-0000001947512093)接口直接提交发布请求方式升级应用，您需要在执行步骤2和3时同时更新应用软件包。
                   * 如果您的应用软件包保存在自己的服务器中，您可以调用[通过下载方式提交发布](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-app_submit_with_file-0000001947519597)接口通知华为服务器从您传入的下载地址中下载应用对应的软件包后提交发布。此方式只支持发布地区包含中国大陆的应用或中国大陆开发者开发的应用。

#### 分阶段发布

                1. 通过升级版本的方式发布分阶段版本，具体请参见升级应用版本。调用接口时每个接口的发布方式都需要选择分阶段发布，即releaseType传入3。提交发布时必须携带分阶段发布信息，如分阶段发布生效开始时间和结束时间、分阶段发布百分比等。
                2. 当您需要将分阶段发布修改为全网发布时，可以调用[更新分阶段发布](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/ho_sp-phased_release-0000001917225138)接口，releaseType设为1。
