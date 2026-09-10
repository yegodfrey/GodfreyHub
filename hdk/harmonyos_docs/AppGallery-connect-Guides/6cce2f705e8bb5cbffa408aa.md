---
name: document/cn/AppGallery-connect-Guides/adx_dsp_api_dspreportinfo-0000001430920598
title: DspReportInfo
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/adx_dsp_api_dspreportinfo-0000001430920598
---

# DspReportInfo

|参数名称|必选(M)/可选(O)|类型|参数说明|
|:-----------------|:----------|:-----|:-------------------------------------------------------------------------------------------------------|
|mediaPkgName|M|String|媒体包名。|
|slotIds|M|String|展示位ID。|
|time|M|String|报表对应日期。 * 按天统计格式：YYYY-MM-DD * 按小时统计格式：YYYY-MM-DD:HH 说明： 按天统计时，开始时间和结束时间跨度不超过30天。按小时统计时，开始时间和结束时间跨度不超过7天。|
|impression|M|String|媒体上报曝光量。|
|clickAmount|M|String|媒体上报点击量。|
|promotionDownloads|M|String|推广下载量。|
|naturalDownloads|M|String|自然下载量。|
|totalDownloads|M|String|总下载量，即推广下载量+自然下载量。|
|reportedDownloads|M|String|媒体上报下载量。|
|perDownloadPrice|M|String|下载均价。|
|estimatedBenefits|M|String|预估收益。 单位：元 实际结算金额请以结算单为准。|

