---
name: document/cn/FASP-by-Template-develop-References/recordal-createnewsubject-0000002489243862
title: CreateNewSubject
uri: https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/recordal-createnewsubject-0000002489243862
---

# CreateNewSubject

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:-----------------|:----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
|investor|O|String(255)|投资人或者主办单位。|
|remarks|O|String(1024)|备注。|
|orderId|O|Integer(64)|备案订单ID。 修改订单主体时需要传orderId。 说明： * 首次备案，不需要传orderId。 * 新增备案并且原备案在华为云，不需要传orderId。|
|subjectId|O|Integer(64)|主体信息的记录ID。 用于主体的唯一标识。 * 首次备案，不需要传subjectId。 * 新增备案并且原备案在华为云，需要传subjectId。|
|recordRegion|M|Integer(32)|备案地区。 最小值：100000 说明： 请务必根据设置地区的管局要求填写所需备案信息，详细参考[各地区管局备案要求](https://support.huaweicloud.com/prepare-icp/icp_02_0005.html)。|
|unitProperty|M|Integer(32)|主办者性质ID。 取值范围：\[1,999\]|
|certificateType|M|Integer(32)|主办单位或主办人的证件类型。|
|certificateNo|M|String(255)|证件号码。|
|certificateAddr|M|String(1024)|证件住址。|
|subjectName|M|String(255)|主办单位或主办人名称。|
|contactAddr|M|String(1024)|通讯地址。|
|leadingOfficial|M|[CreateLeadingOfficial](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/recordal-createleadingofficial-0000002521243677)|主办单位的责任人信息。|
|recordId|O|String(64)|备案号。 * 首次备案，不需要传recordId。 * 新增备案并且原备案在华为云，需要传recordId。|
|isLegalPerson|O|Integer(32)|主体是否为法人。 取值范围： * 0：否 * 1：是|
|subjectAttachments|O|List\<[AppOrderAttachment](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/recordal-apporderattachment-0000002489083868)\>|APP备案订单的主体附件。 数组最大长度为2。|

