---
name: document/cn/SmartTravel-Guides/handle-video-stream-callback-0000000000105701
title: Handling Video Stream Callback
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-Guides/handle-video-stream-callback-0000000000105701
source: portal
---

# Handling Video Stream Callback

#### Scenario

After the connection is successful, the HiCar SDK automatically initiates the projection process. The HMI app can obtain the projection data via **GetVideoData**.

#### APIs

**Table 1** APIs involved in handling video stream callbackAPI | Method | Description  
---|---|---  
CarListener | GetVideoData | Obtains the data of the projected video stream.  
  
#### Development Procedure

Then the HMI app needs to decode the data and display it on the head unit screen.

The sample code is as follows:
    
    int32_t GetVideoData(const uint8_t *pPacket, uint32_t nPktSize, int64_t timeStamp, int64_t duration, VideoFrameInfo *info)
    {
      printf("GetVideoData\n");
      // Process, decode, and display the data.
      return 0;
    }
    CarListener carListener = {0};
    carListener.GetVideoData = GetVideoData;
    HiCarRegisterListener(&carListener);
