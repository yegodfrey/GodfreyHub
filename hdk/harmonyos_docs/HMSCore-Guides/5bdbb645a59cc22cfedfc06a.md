---
name: document/cn/HMSCore-Guides/ios-variable-management-example-0000001089146269
title: 场景化示例
uri: https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/ios-variable-management-example-0000001089146269
source: portal
---

# 场景化示例  
  
#### 函数调用

“函数调用”自定义变量，可以调用应用中的某个类方法，传入对应参数键的值。比如某商城App，在点击购买某商品的事件中只设置了商品名称的信息。现在希望点击购买时，上报商品库存的信息，那么可以用如下方式实现。

                1. 假如App中已有一个获取商品库存的通用类RoomTypeVariable（如果没有这个类，可以先实现这个通用类,继承[CustomVariable](https://developer.huawei.com/consumer/cn/doc/HMSCore-References/ios-icustomvariable-0000001061142220)），通过传入商品名称可以获取商品库存信息。那么可以在App中创建如下类实现 _-(NSString *)getValue:(NSDictionary <NSString *,NSObject *> *)params_方法，获取商品库存信息。
                       
                       RoomTypeVariable.h
                       #import <DTMSDK/DTMSDK.h>
                       NS_ASSUME_NONNULL_BEGIN
                       @interface RoomTypeVariable : CustomVariable
                       @end
                        
                       RoomTypeVariable.m
                       #import "RoomTypeVariable.h" 
                       @implementation RoomTypeVariable 
                       - (NSString *)getValue:(NSDictionary<NSString *,NSObject *> *)params {
                       NSString *value = @""; 
                       if (params == nil) { 
                       NSLog(@"RoomTypeVariable execute: param null");
                       } else {
                       if ([params.allKeys containsObject:key]) { 
                       NSObject *obj = params[@"goodname"]; 
                       value = [obj isKindOfClass:[NSString class]] ? (NSString *) obj : @"UNKNOWN"; 
                       }      
                       }
                       return value;
                       }
                       @end

                2. 创建一个“事件参数”类型的自定义变量，用于获取购买的商品名称。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/ab/v3/kSgsyTeCTRGn3a9QfqAwEw/zh-cn_image_0000001089420609.png?HW-CC-KV=V1&HW-CC-Date=20261005T043048Z&HW-CC-Expire=86400&HW-CC-Sign=AD3099A96B06EA47FEFD4A108B9AA72CF0F62F0001FE425AF8C383E68BBA5440)

                3. 创建一个“函数调用”类型的自定义变量，用于获取商品库存信息。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/61/v3/mECRK9TyQNe5rPS0bHJauw/zh-cn_image_0000001089263015.png?HW-CC-KV=V1&HW-CC-Date=20261005T043048Z&HW-CC-Expire=86400&HW-CC-Sign=21C6DC4EB4EF5270B760BF799D469DF23ED3BD15092A65BEEF401CAFE0DF4799)
