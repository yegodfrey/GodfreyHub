---
name: document/cn/HMSCore-Guides/freediving-0000001165859810
title: 潜水
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/freediving-0000001165859810
---

# 潜水

#### 自由潜水

自由潜水相关运动记录类型如下：  

|运动类型|描述|运动类型常量|数据来源|
|:---------|:---|:-----|:-------------------|
|freediving|自由潜水|154|HUAWEI WATCH GT3 pro|

#### 专业运动特征统计数据

自由潜水运动特征统计数据类型：com.huawei.activity.feature.freediving  

|字段列表|字段描述|类型|可选/必选|单位|取值范围|
|:----------------|:-------|:----|:----|:-|:--------------------|
|divingTime|潜水时间|int|M|秒|-|
|divingCount|潜水次数|int|O|次|-|
|maxDepth|潜水最大深度|float|M|米|-|
|avgDepth|潜水平均深度|float|O|米|-|
|maxUnderwaterTime|单次水下最长时间|int|O|秒|-|
|noFlyTime|禁飞时间|int|O|小时|-|
|waterType|水体类型|int|O|-|* 0：自定义 * 1：淡水 * 2：海水|
|surfaceTime|水上时间|int|M|秒|-|

#### 关联的采样统计数据类型说明

作为ActivityRecord概要数据的一部分，统一使用运动记录权限，无需每种关联的采样统计数据类型使用单独OAuth权限。  

|采样统计数据类型|描述|可选/必选|备注|
|:--------------------------------------|:-----|:----|:-|
|com.huawei.location.statistics|位置统计|O|-|
|com.huawei.diving_depth.statistics|潜水深度统计|O|-|
|com.huawei.water_temperature.statistics|水温统计|O|-|

#### 关联的原子采样数据说明

关联的原子采样数据权限请参考[OAuth权限说明](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/introduction-fitness-record-data-0000001131831088#section27171294263)。  

|原子采样数据类型|描述|可选/必选|备注|
|:---------------------------|:---|:----|:-|
|com.huawei.diving_depth|潜水深度|O|-|
|com.huawei.water_temperature|水温|O|-|

#### 自由潜水数据分段说明

作为ActivityRecord概要数据的一部分，统一使用运动记录权限，无需每种关联的采样统计数据类型使用单独OAuth权限。  

|分段统计数据类型|描述|可选/必选|备注|
|:--------------------------------------|:---|:----|:--------|
|com.huawei.diving.statistics|潜水统计|O|按潜水趟数自动分段|
|com.huawei.water_temperature.statistics|水温统计|O|-|

潜水统计数据类型：com.huawei.diving.statistics  

|字段列表|字段描述|类型|可选/必选|单位|取值范围|
|:----------------|:-----|:----|:----|:-|:---|
|maxDepth|潜水最大深度|float|M|米|-|
|maxUnderwaterTime|水下最长时间|int|M|秒|-|
|surfaceTime|水上时间|int|M|秒|-|

#### 场景示例

[自由潜水运动记录](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/freediving-sence-0000001332936493)

<br />

#### 水肺潜水

水肺潜水相关运动记录类型如下：  

|运动类型|描述|运动类型常量|数据来源|
|:-----------|:---|:-----|:--------------------|
|scuba_diving|水肺潜水|59|HUAWEI WATCH Ultimate|

#### 专业运动特征统计数据

水肺潜水运动特征统计数据类型：com.huawei.activity.feature.scuba_diving  

|字段列表|字段描述|类型|可选/必选|单位|取值范围|
|:----------------|:--------------|:----|:----|:---|:--------------------------------------------|
|divingTime|潜水时间|int|M|秒|-|
|divingCount|潜水次数|int|M|次|-|
|divingMode|潜水模式|int|M|NA|* 0：自由潜水 * 1：休闲水肺潜水 * 2：技术水肺潜水 * 3：仪表潜水|
|maxUnderwaterTime|单次水下最长时间|int|O|秒|-|
|underwaterTime|水下时间|int|O|秒|-|
|noFlyTime|禁飞时间|int|O|小时|-|
|cns|CNS(中枢神经系统毒性等级)|int|O|百分比|精度：1% 等级： * 一：0%-79% * 二：80%-99% * 三：大于等于100%|
|otu|OTU(氧气毒性单元)|int|O|NA|精度：1 等级： * 一：0-249 * 二：250-299 * 三：大于等于300|
|waterType|水体类型|int|O|-|* 0：自定义 * 1：淡水 * 2：海水|
|waterDensity|水密度|float|O|kg/L|-|
|maxAscentSpeed|最大上升速度|float|O|m/s|-|
|maxDescentSpeed|最大下降速度|float|O|m/s|-|

#### 关联的采样统计数据类型说明

作为ActivityRecord概要数据的一部分，统一使用运动记录权限，无需每种关联的采样统计数据类型使用单独OAuth权限。  

|采样统计数据类型|描述|可选/必选|备注|
|:--------------------------------------|:-----|:----|:-|
|com.huawei.location.statistics|位置统计|O|-|
|com.huawei.diving_depth.statistics|潜水深度统计|O|-|
|com.huawei.water_temperature.statistics|水温统计|O|-|

#### 关联的原子采样数据说明

关联的原子采样数据权限请参考[OAuth权限说明](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/introduction-fitness-record-data-0000001131831088#section27171294263)。  

|原子采样数据类型|描述|可选/必选|备注|
|:---------------------------|:---|:----|:-|
|com.huawei.diving_depth|潜水深度|O|-|
|com.huawei.water_temperature|水温|O|-|

#### 水肺潜水数据分段说明

作为ActivityRecord概要数据的一部分，统一使用运动记录权限，无需每种关联的采样统计数据类型使用单独OAuth权限。  

|分段统计数据类型|描述|可选/必选|备注|
|:--------------------------------------|:---|:----|:--------|
|com.huawei.diving.statistics|潜水统计|O|按潜水趟数自动分段|
|com.huawei.water_temperature.statistics|水温统计|O|-|

潜水统计数据类型：com.huawei.diving.statistics  

|字段列表|字段描述|类型|可选/必选|单位|取值范围|
|:----------------|:-----|:----|:----|:-|:---|
|maxDepth|潜水最大深度|float|M|米|-|
|maxUnderwaterTime|水下最长时间|int|M|秒|-|
|surfaceTime|水上时间|int|M|秒|-|

