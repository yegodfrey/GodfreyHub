---
name: document/cn/HMSCore-References/healthfields-0000001050092351
title: HealthFields
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-References/healthfields-0000001050092351
---

# HealthFields

|Class Info|
|:--------------------------------------|
|public final class HealthFields 健康属性常量。|

## Public Field Summary

|Qualifier and Type|Field and Description|
|:-----------------|:----------------------------------------------------------------------------------------------------------------------|
|static final Field|[FIELD_SYSTOLIC_PRESSURE](#section14849145919304) 收缩压。|
|static final Field|[FIELD_SYSTOLIC_PRESSURE_AVG](#section1685145917308) 平均收缩压。|
|static final Field|[FIELD_SYSTOLIC_PRESSURE_MIN](#section185375943015) 最小收缩压。|
|static final Field|[FIELD_SYSTOLIC_PRESSURE_MAX](#section1285535915307) 最大收缩压。|
|static final Field|[FIELD_DIASTOLIC_PRESSURE](#section785735943019) 舒张压。|
|static final Field|[FIELD_DIASTOLIC_PRESSURE_AVG](#section13858165913305) 平均舒张压。|
|static final Field|[FIELD_DIASTOLIC_PRESSURE_MIN](#section186115953014) 最小舒张压。|
|static final Field|[FIELD_DIASTOLIC_PRESSURE_MAX](#section16863459103010) 最大舒张压。|
|static final Field|[FIELD_BODY_POSTURE](#section1586413595300) 身体姿态。|
|static final Field|[FIELD_MEASURE_BODY_PART_OF_BLOOD_PRESSURE](#section687465910302) 血压测量位置。|
|static final Field|[FIELD_SPHYGMUS](#section13605172412115) 脉搏。|
|static final Field|[FIELD_MEASUREMENT_ANOMALY_FLAG](#section11647134921215) 测量异常事件。|
|static final Field|[FIELD_BEFORE_MEASURE_ACTIVITY](#section131381251131212) 测量前活动。|
|static final Field|[FIELD_LEVEL](#section188851559163020) 血糖级别。|
|static final Field|[FIELD_CORRELATION_WITH_MEALTIME](#section1288765910308) 膳食时间。|
|static final Field|[FIELD_CORRELATION_WITH_SLEEP_STATE](#section989765916300) 睡眠状态。|
|static final Field|[FIELD_SAMPLE_SOURCE](#section12907359193011) 血糖样本来源。|
|static final Field|[FIELD_SATURATION](#section18922175919309) 血氧饱和度。|
|static final Field|[FIELD_SATURATION_AVG](#section1923559153012) 平均血氧饱和度。|
|static final Field|[FIELD_SATURATION_MIN](#section69252596302) 最小血氧饱和度。|
|static final Field|[FIELD_SATURATION_MAX](#section15927195918301) 最大血氧饱和度。|
|static final Field|[FIELD_OXYGEN_SUPPLY_FLOW_RATE](#section17928135913017) 供氧流速。|
|static final Field|[FIELD_OXYGEN_SUPPLY_FLOW_RATE_AVG](#section11930145943020) 平均供氧流速。|
|static final Field|[FIELD_OXYGEN_SUPPLY_FLOW_RATE_MIN](#section1093225912302) 最小供氧流速。|
|static final Field|[FIELD_OXYGEN_SUPPLY_FLOW_RATE_MAX](#section16933105993019) 最大供氧流速。|
|static final Field|[FIELD_OXYGEN_THERAPY](#section093505983018) 氧疗法。|
|static final Field|[FIELD_SPO2_MEASUREMENT_MECHANISM](#section15939155919309) 血氧饱和测量方法。|
|static final Field|[FIELD_SPO2_MEASUREMENT_APPROACH](#section394245973010) 通过血氧饱和度测量。|
|static final Field|[FIELD_TEMPERATURE](#section1194675918306) 体温。|
|static final Field|[FIELD_MEASURE_BODY_PART_OF_TEMPERATURE](#section11948459133010) 测温位置。|
|static final Field|[FIELD_MEASURE_TIME](#section151415245101) 血糖测量时机 （枚举值） 取值范围： 1：早餐前（即空腹） 2：早餐后 3：午餐前 4：午餐后 5：晚餐前 6：晚餐后 7：睡前 8：凌晨 9：随机时段|
|static final Field|[FIELD_TEXTURE](#section199711359203020) 宫颈粘液质地。|
|static final Field|[FIELD_AMOUNT](#section2983759193017) 宫颈粘液量。|
|static final Field|[FIELD_POSITION](#section29901859153019) 宫颈位置。|
|static final Field|[FIELD_DILATION_STATUS](#section5999185943012) 宫颈扩张状态。|
|static final Field|[FIELD_FIRMNESS_LEVEL](#section4750193118) 宫颈硬度。|
|static final Field|[FIELD_VOLUME](#section1143010310) 月经量。|
|static final Field|[FIELD_DETECTION_RESULT](#section122530123114) 排卵期测试结果。|
|static final Field|[FIELD_THRESHOLD](#section854312576104) 心率阈值。|
|static final Field|[FIELD_AVG_HEART_RATE](#section170965801011) 平均心率值。|
|static final Field|[FIELD_MAX_HEART_RATE](#section156924590105) 最大心率值。|
|static final Field|[FIELD_MIN_HEART_RATE](#section52871702119) 最小心率值。|
|static final Field|[FIELD_RECORD_DAY](#section193958499174) 记录时间。|
|static final Field|[FIELD_STATUS](#section163961849101711) 当日主状态。|
|static final Field|[FIELD_SUB_STATUS](#section4397164912173) 当日子状态。|
|static final Field|[FIELD_REMARKS](#section13257165101710) 备注。|
|static final Field|[FIELD_TIME_ZONE](#section525785171720) 时区。|
|static final Field|[FIELD_DYSMENORRHOEA_LEVEL](#section425845112178) 痛经程度。|
|static final Field|[FIELD_PHYSICAL_SYMPTOMS](#section084813420511) 身体症状。|
|static final Field|[SYS_MODE](#section146014249168) 治疗模式。|
|static final Field|[SYS_SESSION_DATE](#section5384152610167) 生成报告的时间。|
|static final Field|[EVENT_AHI](#section1589228131618) AHI。|
|static final Field|[SYS_DURATION](#section7525112917162) 使用时长。|
|static final Field|[LUMIS_TIDVOL_MEDIAN](#section12156193041616) 潮气量-中位数。|
|static final Field|[LUMIS_TIDVOL](#section1695483020160) 潮气量-95％分位数。|
|static final Field|[LUMIS_TIDVOL_MAX](#section6483331101617) 潮气量-最大值。|
|static final Field|[CLINICAL_RESPRATE_MEDIAN](#section2862173171613) 每分钟呼吸频率中位数。|
|static final Field|[CLINICAL_RESP_RATE](#section1427623219169) 95%分位呼吸频率中位数。|
|static final Field|[CLINICAL_RESP_RATE_MAX](#section13699173211163) 每分钟呼吸频率最大值。|
|static final Field|[LUMIS_IERATIO_MEDIAN](#section1058173321615) 吸气时间：呼气时间⽐率-中位数。|
|static final Field|[LUMIS_IERATIO_QUANTILE](#section54278334161) 吸气时间：呼气时间⽐率-95％分位数。|
|static final Field|[LUMIS_IERATIO_MAX](#section167671033141614) 吸气时间：呼气时间⽐率-最大值。|
|static final Field|[MASK_OFF](#section1214863414167) 面罩脱落次数。|
|static final Field|[HYPOVENTILATION_INDEX](#section5615143415163) 低通气指数。|
|static final Field|[OBSTRUCTIVE_APNEA_INDEX](#section735113518162) 阻塞性呼吸暂停指数。|
|static final Field|[PRESSURE_BELOW](#section7449113521612) P95（95%的使用时间内的压力值，小于）。|
|static final Field|[HYPOVENTILATION_EVENT_TIMES](#section17854183516167) 低通气事件总次数。|
|static final Field|[SNORING_EVENT_TIMES](#section220783611617) 鼾声事件总次数。|
|static final Field|[CENTER_APNEA_EVENT_TIMES](#section137171736171611) 阻塞（阻塞性呼吸暂停）总次数。|
|static final Field|[OBSTRUCTIVE_APNEA_INDEX](#section735113518162) 中枢（开放式呼吸暂停）总次数。|
|static final Field|[AIR_FLOW_LIMIT_EVENT_TIMES](#section1568075313353) 气流受限总次数。|
|static final Field|[MASSIVE_LEAK_EVENT_TIMES](#section9643175415352) 大量漏气事件总次数。|
|static final Field|[UNKNOW_EVENT_TIMES](#section18645555183517) 未知事件总次数。|
|static final Field|[ALL_EVENT_TIMES](#section026755614351) 所有事件统计总数。|

## Public Fields

### FIELD_SYSTOLIC_PRESSURE

|**Field**|
|:-----------------------------------------------------|
|public static final Field FIELD_SYSTOLIC_PRESSURE 收缩压。|

### FIELD_SYSTOLIC_PRESSURE_AVG

|**Field**|
|:-----------------------------------------------------------|
|public static final Field FIELD_SYSTOLIC_PRESSURE_AVG 平均收缩压。|

### FIELD_SYSTOLIC_PRESSURE_MIN

|**Field**|
|:-----------------------------------------------------------|
|public static final Field FIELD_SYSTOLIC_PRESSURE_MIN 最小收缩压。|

### FIELD_SYSTOLIC_PRESSURE_MAX

|**Field**|
|:-----------------------------------------------------------|
|public static final Field FIELD_SYSTOLIC_PRESSURE_MAX 最大收缩压。|

### FIELD_DIASTOLIC_PRESSURE

|**Field**|
|:------------------------------------------------------|
|public static final Field FIELD_DIASTOLIC_PRESSURE 舒张压。|

### FIELD_DIASTOLIC_PRESSURE_AVG

|**Field**|
|:------------------------------------------------------------|
|public static final Field FIELD_DIASTOLIC_PRESSURE_AVG 平均舒张压。|

### FIELD_DIASTOLIC_PRESSURE_MIN

|**Field**|
|:------------------------------------------------------------|
|public static final Field FIELD_DIASTOLIC_PRESSURE_MIN 最小舒张压。|

### FIELD_DIASTOLIC_PRESSURE_MAX

|**Field**|
|:------------------------------------------------------------|
|public static final Field FIELD_DIASTOLIC_PRESSURE_MAX 最大舒张压。|

### FIELD_BODY_POSTURE

|**Field**|
|:-------------------------------------------------|
|public static final Field FIELD_BODY_POSTURE 身体姿态。|

### FIELD_MEASURE_BODY_PART_OF_BLOOD_PRESSURE

|**Field**|
|:--------------------------------------------------------------------------|
|public static final Field FIELD_MEASURE_BODY_PART_OF_BLOOD_PRESSURE 血压测量位置。|

### FIELD_SPHYGMUS

|**Field**|
|:-------------------------------------------|
|public static final Field FIELD_SPHYGMUS 脉搏。|

### FIELD_MEASUREMENT_ANOMALY_FLAG

|**Field**|
|:---------------------------------------------------------------|
|public static final Field FIELD_MEASUREMENT_ANOMALY_FLAG 测量异常事件。|

### FIELD_BEFORE_MEASURE_ACTIVITY

|**Field**|
|:-------------------------------------------------------------|
|public static final Field FIELD_BEFORE_MEASURE_ACTIVITY 测量前活动。|

### FIELD_LEVEL

|**Field**|
|:------------------------------------------|
|public static final Field FIELD_LEVEL 血糖级别。|

### FIELD_CORRELATION_WITH_MEALTIME

|**Field**|
|:--------------------------------------------------------------|
|public static final Field FIELD_CORRELATION_WITH_MEALTIME 膳食时间。|

### FIELD_CORRELATION_WITH_SLEEP_STATE

|**Field**|
|:-----------------------------------------------------------------|
|public static final Field FIELD_CORRELATION_WITH_SLEEP_STATE 睡眠状态。|

### FIELD_SAMPLE_SOURCE

|**Field**|
|:----------------------------------------------------|
|public static final Field FIELD_SAMPLE_SOURCE 血糖样本来源。|

### FIELD_SATURATION

|**Field**|
|:------------------------------------------------|
|public static final Field FIELD_SATURATION 血氧饱和度。|

### FIELD_SATURATION_AVG

|**Field**|
|:------------------------------------------------------|
|public static final Field FIELD_SATURATION_AVG 平均血氧饱和度。|

### FIELD_SATURATION_MIN

|**Field**|
|:------------------------------------------------------|
|public static final Field FIELD_SATURATION_MIN 最小血氧饱和度。|

### FIELD_SATURATION_MAX

|**Field**|
|:------------------------------------------------------|
|public static final Field FIELD_SATURATION_MAX 最大血氧饱和度。|

### FIELD_OXYGEN_SUPPLY_FLOW_RATE

|**Field**|
|:------------------------------------------------------------|
|public static final Field FIELD_OXYGEN_SUPPLY_FLOW_RATE 供氧流速。|

### FIELD_OXYGEN_SUPPLY_FLOW_RATE_AVG

|**Field**|
|:------------------------------------------------------------------|
|public static final Field FIELD_OXYGEN_SUPPLY_FLOW_RATE_AVG 平均供氧流速。|

### FIELD_OXYGEN_SUPPLY_FLOW_RATE_MIN

|**Field**|
|:------------------------------------------------------------------|
|public static final Field FIELD_OXYGEN_SUPPLY_FLOW_RATE_MIN 最小供氧流速。|

### FIELD_OXYGEN_SUPPLY_FLOW_RATE_MAX

|**Field**|
|:------------------------------------------------------------------|
|public static final Field FIELD_OXYGEN_SUPPLY_FLOW_RATE_MAX 最大供氧流速。|

### FIELD_OXYGEN_THERAPY

|**Field**|
|:--------------------------------------------------|
|public static final Field FIELD_OXYGEN_THERAPY 氧疗法。|

### FIELD_SPO2_MEASUREMENT_MECHANISM

|**Field**|
|:-------------------------------------------------------------------|
|public static final Field FIELD_SPO2_MEASUREMENT_MECHANISM 血氧饱和测量方法。|

### FIELD_SPO2_MEASUREMENT_APPROACH

|**Field**|
|:-------------------------------------------------------------------|
|public static final Field FIELD_SPO2_MEASUREMENT_APPROACH 通过血氧饱和度测量。|

### FIELD_TEMPERATURE

|**Field**|
|:----------------------------------------------|
|public static final Field FIELD_TEMPERATURE 体温。|

### FIELD_MEASURE_BODY_PART_OF_TEMPERATURE

|**Field**|
|:---------------------------------------------------------------------|
|public static final Field FIELD_MEASURE_BODY_PART_OF_TEMPERATURE 测温位置。|

### FIELD_MEASURE_TIME

|**Field**|
|:------------------------------------------------------------------------------------------------------------------------------------------|
|public static final Field FIELD_MEASURE_TIME 血糖测量时机（枚举值）取值如下： 1：早餐前血糖（即空腹血糖） 2：早餐后血糖 3：午餐前血糖 4：午餐后血糖 5：晚餐前血糖 6：晚餐后血糖 7：睡前血糖 8：凌晨血糖 9：随机时段血糖|

### FIELD_TEXTURE

|**Field**|
|:----------------------------------------------|
|public static final Field FIELD_TEXTURE 宫颈粘液质地。|

### FIELD_AMOUNT

|**Field**|
|:--------------------------------------------|
|public static final Field FIELD_AMOUNT 宫颈粘液量。|

### FIELD_POSITION

|**Field**|
|:---------------------------------------------|
|public static final Field FIELD_POSITION 宫颈位置。|

### FIELD_DILATION_STATUS

|**Field**|
|:------------------------------------------------------|
|public static final Field FIELD_DILATION_STATUS 宫颈扩张状态。|

### FIELD_FIRMNESS_LEVEL

|**Field**|
|:---------------------------------------------------|
|public static final Field FIELD_FIRMNESS_LEVEL 宫颈硬度。|

### FIELD_VOLUME

|**Field**|
|:------------------------------------------|
|public static final Field FIELD_VOLUME 月经量。|

### FIELD_DETECTION_RESULT

|**Field**|
|:--------------------------------------------------------|
|public static final Field FIELD_DETECTION_RESULT 排卵期测试结果。|

### FIELD_THRESHOLD

|**Field**|
|:----------------------------------------------|
|public static final Field FIELD_THRESHOLD 心率阈值。|

### FIELD_AVG_HEART_RATE

|**Field**|
|:-----------------------------------------------------|
|public static final Field FIELD_AVG_HEART_RATE 平均心率阈值。|

### FIELD_MAX_HEART_RATE

|**Field**|
|:----------------------------------------------------|
|public static final Field FIELD_MAX_HEART_RATE 最大心率值。|

### FIELD_MIN_HEART_RATE

|**Field**|
|:----------------------------------------------------|
|public static final Field FIELD_MIN_HEART_RATE 最小心率值。|

### FIELD_RECORD_DAY

|**Field**|
|:-----------------------------------------------|
|public static final Field FIELD_RECORD_DAY 记录时间。|

### FIELD_STATUS

|**Field**|
|:--------------------------------------------|
|public static final Field FIELD_STATUS 当日主状态。|

### FIELD_SUB_STATUS

|**Field**|
|:------------------------------------------------|
|public static final Field FIELD_SUB_STATUS 当日子状态。|

### FIELD_REMARKS

|**Field**|
|:------------------------------------------|
|public static final Field FIELD_REMARKS 备注。|

### FIELD_TIME_ZONE

|**Field**|
|:--------------------------------------------|
|public static final Field FIELD_TIME_ZONE 时区。|

### FIELD_DYSMENORRHOEA_LEVEL

|**Field**|
|:--------------------------------------------------------|
|public static final Field FIELD_DYSMENORRHOEA_LEVEL 痛经程度。|

### FIELD_PHYSICAL_SYMPTOMS

|**Field**|
|:------------------------------------------------------|
|public static final Field FIELD_PHYSICAL_SYMPTOMS 身体症状。|

### SYS_MODE

|**Field**|
|:---------------------------------------|
|public static final Field SYS_MODE 治疗模式。|

### SYS_SESSION_DATE

|**Field**|
|:--------------------------------------------------|
|public static final Field SYS_SESSION_DATE 生成报告的时间。|

### EVENT_AHI

|**Field**|
|:---------------------------------------|
|public static final Field EVENT_AHI AHI。|

### SYS_DURATION

|**Field**|
|:-------------------------------------------|
|public static final Field SYS_DURATION 使用时长。|

### LUMIS_TIDVOL_MEDIAN

|**Field**|
|:-----------------------------------------------------|
|public static final Field LUMIS_TIDVOL_MEDIAN 潮气量-中位数。|

### LUMIS_TIDVOL

|**Field**|
|:-------------------------------------------------|
|public static final Field LUMIS_TIDVOL 潮气量-95％分位数。|

### LUMIS_TIDVOL_MAX

|**Field**|
|:--------------------------------------------------|
|public static final Field LUMIS_TIDVOL_MAX 潮气量-最大值。|

### CLINICAL_RESPRATE_MEDIAN

|**Field**|
|:-------------------------------------------------------------|
|public static final Field CLINICAL_RESPRATE_MEDIAN 每分钟呼吸频率中位数。|

### CLINICAL_RESP_RATE

|**Field**|
|:---------------------------------------------------------|
|public static final Field CLINICAL_RESP_RATE 95%分位呼吸频率中位数。|

### CLINICAL_RESP_RATE_MAX

|**Field**|
|:-----------------------------------------------------------|
|public static final Field CLINICAL_RESP_RATE_MAX 每分钟呼吸频率最大值。|

### LUMIS_IERATIO_MEDIAN

|**Field**|
|:--------------------------------------------------------------|
|public static final Field LUMIS_IERATIO_MEDIAN 吸气时间：呼气时间⽐率-中位数。|

### LUMIS_IERATIO_QUANTILE

|**Field**|
|:-------------------------------------------------------------------|
|public static final Field LUMIS_IERATIO_QUANTILE 吸气时间：呼气时间⽐率-95％分位数。|

### LUMIS_IERATIO_MAX

|**Field**|
|:-----------------------------------------------------------|
|public static final Field LUMIS_IERATIO_MAX 吸气时间：呼气时间⽐率-最大值。|

### MASK_OFF

|**Field**|
|:-----------------------------------------|
|public static final Field MASK_OFF 面罩脱落次数。|

### HYPOVENTILATION_INDEX

|**Field**|
|:-----------------------------------------------------|
|public static final Field HYPOVENTILATION_INDEX 低通气指数。|

### OBSTRUCTIVE_APNEA_INDEX

|**Field**|
|:-----------------------------------------------------------|
|public static final Field OBSTRUCTIVE_APNEA_INDEX 阻塞性呼吸暂停指数。|

### PRESSURE_BELOW

|**Field**|
|:--------------------------------------------------------------|
|public static final Field PRESSURE_BELOW P95（95%的使用时间内的压力值，小于）。|

### HYPOVENTILATION_EVENT_TIMES

|**Field**|
|:--------------------------------------------------------------|
|public static final Field HYPOVENTILATION_EVENT_TIMES 低通气事件总次数。|

### SNORING_EVENT_TIMES

|**Field**|
|:-----------------------------------------------------|
|public static final Field SNORING_EVENT_TIMES 鼾声事件总次数。|

### CENTER_APNEA_EVENT_TIMES

|**Field**|
|:-----------------------------------------------------------------|
|public static final Field CENTER_APNEA_EVENT_TIMES 阻塞（阻塞性呼吸暂停总次数）。|

### OBSTRUCTIVE_APNEA_EVENT_TIMES

|**Field**|
|:----------------------------------------------------------------------|
|public static final Field OBSTRUCTIVE_APNEA_EVENT_TIMES 中枢（开放式呼吸暂停）总次数。|

### AIR_FLOW_LIMIT_EVENT_TIMES

|**Field**|
|:------------------------------------------------------------|
|public static final Field AIR_FLOW_LIMIT_EVENT_TIMES 气流受限总次数。|

### MASSIVE_LEAK_EVENT_TIMES

|**Field**|
|:------------------------------------------------------------|
|public static final Field MASSIVE_LEAK_EVENT_TIMES 大量漏气事件总次数。|

### UNKNOW_EVENT_TIMES

|**Field**|
|:----------------------------------------------------|
|public static final Field UNKNOW_EVENT_TIMES 未知事件总次数。|

### ALL_EVENT_TIMES

|**Field**|
|:--------------------------------------------------|
|public static final Field ALL_EVENT_TIMES 所有事件统计总数。|

