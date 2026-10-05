---
name: document/cn/quickApp-References/webview-api-addphonecalendar-0000001604648721
title: qa.addPhoneCalendar（1106+）
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-References/webview-api-addphonecalendar-0000001604648721
source: portal
---

qa.addPhoneCalendar（1106+） 接口描述向系统日历添加事件。 使用限制 限制条件 | 说明  
---|---  
适用终端 | 手机、平板  
适用区域 | 中国  
接口定义 [h2]qa.addPhoneCalendar(Object object)**描述** 向系统日历添加事件。 **OBJECT参数** 参数 | 类型 | 是否必填 | 描述  
---|---|---|---  
title | string | 是 | 日历事件标题。  
startTime | number | 是 | 开始时间的 unix 时间戳 （1970年1月1日开始所经过的秒数）。  
allDay | boolean | 否 | 是否全天事件，默认为false。  
description | string | 否 | 事件说明。  
location | string | 否 | 事件位置。  
endTime | string | 否 | 结束时间的 unix 时间戳，默认与开始时间相同。  
alarm | boolean | 否 | 是否提醒，默认为true。  
alarmOffset | number | 否 | 提醒提前量，单位秒。 默认值为0，表示开始时提醒。  
success | function | 否 | 接口调用成功的回调函数。  
fail | function | 否 | 接口调用失败的回调函数。  
complete | function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）。  
**示例代码**
    
    qa.addPhoneCalendar({
        title: '向系统日历添加事件',
        startTime: (new Date()).getTime() / 1000 + 10,
        endTime: (new Date()).getTime() / 1000 + 600,
        alarmOffset: 60,
        allDay: false,
        location: '位置',
        alarm: true,
        description: '事件描述',   
        success(res) {
            console.info('succeed to addPhoneCalendar.', res)
        },
        fail(err) {
            console.info('failed to addPhoneCalendar.', err)
        },
        complete(res) {
            console.info('finished to addPhoneCalendar.', res)
        }
    })
