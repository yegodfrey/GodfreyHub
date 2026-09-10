---
name: document/cn/FASP-by-Template-develop-References/publish-opentestinfo-0000002657935600
title: OpenTestInfo
uri: https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/publish-opentestinfo-0000002657935600
---

# OpenTestInfo

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:-----------|:----------|:-------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|
|startTime|M|Integer(64)|测试版本开始时间。 时间是与1970年1月1日午夜之间的差值。 单位：毫秒 示例：1704211200000|
|endTime|M|Integer(64)|测试版本结束时间。 时间是与1970年1月1日午夜之间的差值。 单位：毫秒 示例：1704211200000|
|testDesc|O|String(50)|测试版本描述。|
|testTaskInfo|O|[TestTaskInfo](https://developer.huawei.com/consumer/cn/doc/FASP-by-Template-develop-References/publish-testtaskinfo-0000002687939035)|测试发布信息。|

