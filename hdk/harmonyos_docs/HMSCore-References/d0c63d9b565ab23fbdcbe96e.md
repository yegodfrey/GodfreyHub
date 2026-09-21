---
name: document/cn/HMSCore-References/navittstype-0000001367463197
title: NaviTTSType
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/navittstype-0000001367463197
---

# NaviTTSType

|Class Info|
|:----------------------------------------------|
|public class NaviTTSType 导航播报优先级类型，标识值越小，优先级越高。|

## Public Field Summary

|Qualifier and Type|Field and Description|Value|
|:----------------------|:------------------------------------------------------------------------------------|:----|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_E0_TURNING](#section35243734610) 机动点前E0播报（不满足E1距离）。|0|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_TURNING](#section19250192319483) 机动点前最后一个转向播报即E1播报。|1|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_TWO_TURNING](#section9615155084015) 机动点前两次转向播报即E2播报。|2|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_THREE_TURNING](#section66514111429) 机动点前三次转向播报即E3播报。|3|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_FIRST](#section1487751204110) 机动点前第一个转向播报即B1播报。|4|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_STRONG_FORWARD](#section114241051124813) 强顺行播报。|5|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_START](#section14223162811430) 开始导航。|6|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_END](#section156622401446) 结束导航。|7|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_ROUTE_RECOMMEND](#section769682441018) 更优路线推荐。|8|
|public static final int|[GUIDE_PRIORITY_LEVEL_OVER_SPEED_NOTICE](#section159121956104513) 超速播报。|9|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_PASSIVE_YAW](#section1291010473463) 偏航播报。|10|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_INNER_TUNNEL_FORK](#section1759211497493) 隧道内分歧。|11|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_AFTER_TUNNEL](#section12439124935011) 隧道后分歧或八方向。|12|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_MANUALLY_REFRESH_REMIND](#section10946104513516) 提醒用户手动刷新路线。|13|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_SELF_IMPORT_ROAD](#section356755845217) 汇入提示点：汇入主路。|98|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_OTHER_IMPORT_ROAD](#section15541325185419) 汇入提示点：有车辆汇入主路。|99|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_GPS_WEAK](#section1250429409) GPS信号弱。|100|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_TRAFFIC_JAM](#section1550425818011) 事件点拥堵播报。|101|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_TRAFFIC_INCIDENT](#section1272713461912) 路况事件播报。|102|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_SD_PLUS_GUIDE](#section971415282215) 进入车道级引导大图事件播报。|103|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_INDUCE_RAILWAY](#section26051040175515) 铁道口诱导点。|190|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_SPEED_BUMP](#section1554114417585) 减速带。|199|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_TOLL_STATION](#section1933415261837) 诱导点收费站播报。|200|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_TUNNEL](#section20842310349) 诱导点隧道播报。|201|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_SERVICE_AREA](#section173421540956) 诱导点服务区播报。|202|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_SPEED_LIMIT](#section18462124212617) 诱导点限速播报。|203|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_SHARP_TURN](#section46255251377) 诱导点急转弯播报。|204|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_LONG_LINE](#section239312169818) 长实线诱导点播报。|205|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_RED_LIGHT_CAM](#section1771634414119) 闯红灯拍照。|206|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_RESTRICTION_CAM](#section10288158123) 违章拍照。|207|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_DANGER_ZONE](#section11679137911) 事故多发地段诱导点播报。|208|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_MERGE_CAM](#section123601881140) 违章拍照合并。|209|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_INDUCE_BRIDGE](#section14245121612510) 桥梁诱导点。|210|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_LONG_DOWNHILL](#section29109507910) 长下坡诱导点播报。|211|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_CONTINUOUS_DOWNHILL](#section16623413105) 连续下坡诱导点播报。|212|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_NARROW](#section2087310189110) 道路变窄或窄桥。|213|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_INDUCE_AREA_BOUNDARY](#section3745161615613) 行政边界。|215|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_EIGHT_DIR_GUIDE](#section114972118107) 八方向诱导点。|216|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_BUS_LANE](#section2940565409) 优先级BUS_LANE:公交车道诱导点。|220|
|public static final int|[NAVIINFO_PRIORITY_LEVEL_NULL](#section84361019126) 最低优先级。|1000|

## Public Fields

### NAVIINFO_PRIORITY_LEVEL_E0_TURNING

|Fields|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_E0_TURNING 机动点前E0播报（不满足E1距离）。 NAVIINFO_PRIORITY_LEVEL_E0_TURNING：0，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_TURNING

|Fields|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_TURNING 机动点前最后一个转向播报即E1播报。 NAVIINFO_PRIORITY_LEVEL_TURNING：1，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_TWO_TURNING

|Fields|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_TWO_TURNING 机动点前两次转向播报即E2播报。 NAVIINFO_PRIORITY_LEVEL_TWO_TURNING：2，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_THREE_TURNING

|Fields|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_THREE_TURNING 机动点前三次转向播报即E3播报。 NAVIINFO_PRIORITY_LEVEL_THREE_TURNING：3，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_FIRST

|Fields|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_FIRST 机动点前第一个转向播报即B1播报。 NAVIINFO_PRIORITY_LEVEL_FIRST：4，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_STRONG_FORWARD

|Fields|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_STRONG_FORWARD 强顺行播报。 NAVIINFO_PRIORITY_LEVEL_STRONG_FORWARD：5，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_START

|Fields|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_START 开始导航。 NAVIINFO_PRIORITY_LEVEL_START：6，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_END

|Fields|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_END 结束导航。 NAVIINFO_PRIORITY_LEVEL_END：7，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_ROUTE_RECOMMEND

|Fields|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_ROUTE_RECOMMEND 更优路线。 NAVIINFO_PRIORITY_LEVEL_ROUTE_RECOMMEND：8，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### GUIDE_PRIORITY_LEVEL_OVER_SPEED_NOTICE

|Fields|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int GUIDE_PRIORITY_LEVEL_OVER_SPEED_NOTICE 超速播报。 GUIDE_PRIORITY_LEVEL_OVER_SPEED_NOTICE：9，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_PASSIVE_YAW

|Fields|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_PASSIVE_YAW 偏航播报。 NAVIINFO_PRIORITY_LEVEL_PASSIVE_YAW：10，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_INNER_TUNNEL_FORK

|Fields|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_INNER_TUNNEL_FORK 隧道内分歧。 NAVIINFO_PRIORITY_LEVEL_INNER_TUNNEL_FORK：11，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_AFTER_TUNNEL

|Fields|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_AFTER_TUNNEL 隧道后分歧或八方向。 NAVIINFO_PRIORITY_LEVEL_AFTER_TUNNEL：12，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_MANUALLY_REFRESH_REMIND

|Fields|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_MANUALLY_REFRESH_REMIND 提醒用户手动刷新路线。 NAVIINFO_PRIORITY_LEVEL_MANUALLY_REFRESH_REMIND：13，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_SELF_IMPORT_ROAD

|Fields|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_SELF_IMPORT_ROAD 汇入提示点：汇入主路。 NAVIINFO_PRIORITY_LEVEL_SELF_IMPORT_ROAD：98，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_OTHER_IMPORT_ROAD

|Fields|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_OTHER_IMPORT_ROAD 汇入提示点：有车辆汇入主路。 NAVIINFO_PRIORITY_LEVEL_OTHER_IMPORT_ROAD：99，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_GPS_WEAK

|Fields|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_GPS_WEAK GPS信号弱。 NAVIINFO_PRIORITY_LEVEL_GPS_WEAK：100，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_TRAFFIC_JAM

|Fields|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_TRAFFIC_JAM 事件点拥堵播报。 NAVIINFO_PRIORITY_LEVEL_TRAFFIC_JAM：101，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_TRAFFIC_INCIDENT

|Fields|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_TRAFFIC_INCIDENT 路况事件播报。 NAVIINFO_PRIORITY_LEVEL_TRAFFIC_INCIDENT：102，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_SD_PLUS_GUIDE

|Fields|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_SD_PLUS_GUIDE 进入车道级引导大图事件播报。 NAVIINFO_PRIORITY_LEVEL_SD_PLUS_GUIDE：103，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_INDUCE_RAILWAY

|Fields|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_INDUCE_RAILWAY 铁道口诱导点。 NAVIINFO_PRIORITY_LEVEL_INDUCE_RAILWAY：190，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_SPEED_BUMP

|Fields|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_SPEED_BUMP 减速带。 NAVIINFO_PRIORITY_LEVEL_SPEED_BUMP：199，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_TOLL_STATION

|Fields|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_TOLL_STATION 诱导点收费站播报。 NAVIINFO_PRIORITY_LEVEL_TOLL_STATION：200，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_TUNNEL

|Fields|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_TUNNEL 诱导点隧道播报。 NAVIINFO_PRIORITY_LEVEL_TUNNEL：201，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_SERVICE_AREA

|Fields|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_SERVICE_AREA 诱导点服务区播报。 NAVIINFO_PRIORITY_LEVEL_SERVICE_AREA：202，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_SPEED_LIMIT

|Fields|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_SPEED_LIMIT 诱导点限速播报。 NAVIINFO_PRIORITY_LEVEL_SPEED_LIMIT：203，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_SHARP_TURN

|Fields|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_SHARP_TURN 诱导点急转弯播报。 NAVIINFO_PRIORITY_LEVEL_SHARP_TURN：204，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_LONG_LINE

|Fields|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_LONG_LINE 长实线诱导点播报。 NAVIINFO_PRIORITY_LEVEL_LONG_LINE：205，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_RED_LIGHT_CAM

|Fields|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_RED_LIGHT_CAM 闯红灯拍照。 NAVIINFO_PRIORITY_LEVEL_RED_LIGHT_CAM：206，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_RESTRICTION_CAM

|Fields|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_RESTRICTION_CAM 违章拍照。 NAVIINFO_PRIORITY_LEVEL_RESTRICTION_CAM：207，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_DANGER_ZONE

|Fields|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_DANGER_ZONE 事故多发地段诱导点播报。 NAVIINFO_PRIORITY_LEVEL_DANGER_ZONE：208，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_MERGE_CAM

|Fields|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_MERGE_CAM 违章拍照合并。 NAVIINFO_PRIORITY_LEVEL_MERGE_CAM：209，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_INDUCE_BRIDGE

|Fields|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_INDUCE_BRIDGE 桥梁诱导点。 NAVIINFO_PRIORITY_LEVEL_INDUCE_BRIDGE：210，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_LONG_DOWNHILL

|Fields|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_LONG_DOWNHILL 长下坡诱导点播报。 NAVIINFO_PRIORITY_LEVEL_LONG_DOWNHILL：211，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_CONTINUOUS_DOWNHILL

|Fields|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_CONTINUOUS_DOWNHILL 连续下坡诱导点播报。 NAVIINFO_PRIORITY_LEVEL_CONTINUOUS_DOWNHILL：212，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_NARROW

|Fields|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_NARROW 道路变窄或窄桥。 NAVIINFO_PRIORITY_LEVEL_NARROW：213，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_INDUCE_AREA_BOUNDARY

|Fields|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_INDUCE_AREA_BOUNDARY 行政边界。 NAVIINFO_PRIORITY_LEVEL_INDUCE_AREA_BOUNDARY：215，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_EIGHT_DIR_GUIDE

|Fields|
|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_EIGHT_DIR_GUIDE 八方向诱导点。 NAVIINFO_PRIORITY_LEVEL_EIGHT_DIR_GUIDE：216，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_BUS_LANE

|Fields|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_BUS_LANE 公交车道诱导点。 NAVIINFO_PRIORITY_LEVEL_BUS_LANE：220，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

### NAVIINFO_PRIORITY_LEVEL_NULL

|Fields|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|public static final int NAVIINFO_PRIORITY_LEVEL_NULL 最低优先级。 NAVIINFO_PRIORITY_LEVEL_NULL：1000，其余常量值参阅：[Constant-values](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/constant-values-0000001280465745#section2301925101316)。|

