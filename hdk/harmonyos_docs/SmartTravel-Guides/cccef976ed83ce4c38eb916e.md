---
name: document/cn/SmartTravel-Guides/foreground-application-0000001486839781
title: Detection of Foreground Apps
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-Guides/foreground-application-0000001486839781
source: portal
---

# Detection of Foreground Apps

#### Scenario

The HiCar SDK notifies the head unit of the app running in the foreground, and the head unit then processes related service logic. For example, when the head unit is notified that a video app is running in the foreground, it adjusts the audio cache to ensure that the image and audio are always in sync.

For details about the related data formats, please refer to [Detection of Foreground Apps](https://developer.huawei.com/consumer/cn/doc/development/SmartTravel-References/foreground-application-0000001453328006) in the **APIs Between the HiCar App and Head Unit** section of the HUAWEI HiCar SDK API Reference.

#### Example

When the HiCar SDK detects that a video app is running in the foreground, it sends the detection result to the head unit, which then reduces the audio cache. When receiving a message indicating that no video app is running in the foreground, the head unit caches audio as normal, to ensure that the audio is always in sync with the image.

#### Development Procedure

     1. The HiCar app sends a message (**dataType** =**533**) to the head unit, notifying the head unit of the app running in the foreground. The following is an example:
            
            {
               "status":1,
               "appType":"video",
               "appName":"com.huawei.himovie"
            }

     2. The head unit determines the **dataType** using the **onDataReceive** method, and receives the above data. Then, the head unit processes its own service logic and returns the processing result.

If the service logic is processed properly, the head unit sends a message (**dataType** =**533**) indicating the processing result to HiCar, as shown below: 
            
            {
                " RespCode":100000
            }

If the service logic fails to be processed, the head unit sends a message (**dataType** =**533**) indicating the processing failure to HiCar, as shown below:
            
            {
                " RespCode":-100000
            }
