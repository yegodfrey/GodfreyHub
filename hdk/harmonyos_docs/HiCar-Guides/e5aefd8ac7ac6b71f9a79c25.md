---
name: document/cn/HiCar-Guides/vihicle-service-channel-0000001051620698
title: 车服务通道
uri: https://developer.huawei.com/consumer/cn/doc/HiCar-Guides/vihicle-service-channel-0000001051620698
---

# 车服务通道

## 场景说明

HiCar提供车厂的三方服务接入通道能力，三方车服务应用可以基于手机侧CarKit开放能力，使用车服务通道连接车机并发送自定义车控命令。

**图1**车服务通道架构示意   
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250630214108.16691640935123013902412844361292:50001231000000:2800:4378B6C3A8DA7271195E06F25525ADB8AF05A7BEB048019BF4A968106068E2B8.png "点击放大")

**图2**车服务交互流程   
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250630214108.79145458437641654117454151855355:50001231000000:2800:7CE7B0AD85A8D26B222D8C919F8C243AC4806EC3F1F8E871689E1F8454F770D9.jpg "点击放大")

车服务通道涉及到手机侧车服务应用、CarKit、HiCar App以及车机侧厂商HMI应用、HiCar SDK。实现完整的车服务通道功能需要车服务应用和厂商HMI应用协同集成开发。

车服务应用与车机间根据交互数据复杂度的不同，可选择两种不同的方式：

* 字符串类简单数据：通过HiCar SDK提供的命令报文进行数据传输。
* 其它例如图片、视频等复杂数据：通过自建传输通道的方式进行数据传输。

车服务通道相关的数据格式说明请参考《HUAWEI HiCar SDK API参考》"HiCar App与车机间接口"中[车服务通道](https://developer.huawei.com/consumer/cn/doc/HiCar-References/vehicle-service-access-0000001153460176)部分。

## 车机向HiCar App上报车服务应用权限报文

手机和车机成功连接并投屏后，车机需要通过**HiCarSendData**接口向HiCar App上报车服务应用权限报文。只有具有相应权限的车服务应用才可以与车机进行数据交互。报文示例如下所示：

```screen
{
    "serviceInfo": { 
        "permission":"com.android.demo", 
        "carBrand":"brand", 
        "carModel":"mode", 
        "version":"1.0" 
     }
}
```

车机向HiCar App发送报文示例代码如下所示：

```screen
...
CarListener carListener = {0};
carListener.DeviceServiceChange = DeviceServiceChange;
carListener.DataReceive = DataReceive;
...
//注册侦听HiCar应用发送数据事件
HiCarRegisterListener(&carListener);
...
...
...
void DeviceServiceChange(const char *serviceId, uint32_t idLen, int state)
{
    if (state == HICAR_DEVICE_DISPLAY_SERVICE_PLAYING) {
//上报车服务应用权限信息
         sendPermission();
    }
}

void DataReceive(const char *deviceId, uint32_t idLen, int dataType, char *data, uint32_t dataLen)
{
    switch (dataType) {
        case HICAR_DATA_SERVICE_CHANNEL:
            //TODO:这里处理手机发送的自定义车服务命令和自定义车服务通道
            break;
        default:
            break;
    }
}

void sendPermission()
{
    cJSON *jsonCommand = cJSON_CreateObject();
    if (jsonCommand == NULL) {
        return;
    }
    cJSON *jsonPermission = cJSON_AddObjectToObject(jsonData, "serviceInfo");
    cJSON_AddStringToObject(jsonPermission, "permission", "com.android.demo");
    cJSON_AddStringToObject(jsonPermission, "carBrand", "brand");
    cJSON_AddStringToObject(jsonPermission, "carModel", "mode");
    cJSON_AddStringToObject(jsonPermission, "version", "1.0");
    char *sendData = cJSON_PrintUnformatted(jsonCommand);
    if (sendData != NULL) {
        int sendDataLen = strnlen(sendData, MAX_DATA_LEN);
//发送车服务应用权限信息报文
        HiCarSendData(handle, HICAR_DATA_SERVICE_CHANNEL, sendData, sendDataLen);
    }
    cJSON_Delete(jsonCommand);
}
...
```

## 车服务应用通过CarKit注册侦听车服务事件

车服务应用启动后，检测到HiCar已经成功投屏，需要主动连接车机，注册侦听车服务事件。

```screen
// 连接车机
CarCommandMgr.getInstance().connectCar(mContext, new RequestCallBack<ConnectResponse>() {
    @Override
    public void onResult(ConnectResponse response) {
        if (response.getErrorCode() == ErrorCode.SUCCESS) {
// 连接成功，注册侦听自定义车服务命令
            CarCommandMgr.getInstance().listenCarReportData(mContext, new RequestCallBack<Response>() {
                @Override
                public void onResult(Response response) {
                    if (response.getErrorCode() == ErrorCode.SUCCESS) {
// 注册侦听成功
                    }
                }
            }, new CarEventListener<CarDataReport>() {
                    @Override
                    public void onListener(CarDataReport dataReport) {
// 接收自定义车服务命令
                    }
                    @Override
                    public void onDisconnect() {
// 该侦听器已失效请注意释放资源或者重新注册事件侦听
                    }
            });
        }
    }
});
```

## 车服务应用与车机间传递简单数据

车服务应用和车机之间可以通过自定义车服务命令报文，进行简单数据传输。

车服务应用通过HiCar App可以向车机发送的报文数据（即车机通过**DataReceive**方法接收到的数据）示例如下所示：

```screen
{
    "dataToCar":"123"
}
```

车机可以通过HiCar App向车服务应用发送的报文数据（即上一章节中车服务应用通过**onListener**方法接收到的数据）示例如下所示：

```screen
{
    "dataToApp":"123"
}
```

集成开发过程如下所示：

1. 车服务应用通过CarKit向HiCar App发送自定义车服务命令报文。示例代码如下所示：

   ```screen
   ...
   // 发送自定义车服务命令到车机
   CarCommandMgr.getInstance().sendCommand(mContext, "123", new RequestCallBack<Response>() {
       @Override
       public void onResult(Response response) {
           if (response.getErrorCode() == ErrorCode.SUCCESS) {
               // 发送成功
           }
       }
   });
   ...
   ```

2. 车机通过**DataReceive** 方法获取车服务命令报文内容，具体可参考前文[车机向HiCar App上报车服务应用权限报文](#section296014218206)中示例代码部分。
3. 车机通过**HiCarSendData**接口向HiCar App发送自定义车服务命令报文。示例代码如下所示：

   ```screen
   ...
   cJSON *jsonCommand = cJSON_CreateObject();
   if (jsonCommand == NULL) {
       return;
   }
   cJSON_AddStringToObject(jsonCommand, "dataToApp", "123");
   char *sendData = cJSON_PrintUnformatted(jsonCommand);
   if (sendData != NULL) {
       int sendDataLen = strnlen(sendData, MAX_DATA_LEN);
   //发送自定义车服务命令到手机
   HiCarSendData(handle, HICAR_DATA_SERVICE_CHANNEL, sendData, sendDataLen);
   }
   cJSON_Delete(jsonCommand);
   ...
   ```

4. 车服务应用通过CarKit注册侦听车服务事件后，通过**onListener** 方法获取车服务命令报文内容，具体可参考前文[车服务应用通过CarKit注册侦听车服务事件](#section876775913268)中示例代码部分。

## 车服务应用与车机间通过自定义通道传递复杂数据

车服务应用和车机之间可以通过自定义车服务通道，进行复杂数据传输。

集成开发过程如下所示：

1. 车服务应用通过CarKit向HiCar App请求自定义车通道服务。示例代码如下所示：

   ```screen
   ...
   //请求自定义服务
   CarCommandMgr.getInstance().openChannel(mContext, "request car service", new RequestCallBack<OpenChannelResponse>() {
       @Override
       public void onResult(OpenChannelResponse response) {
           if (response.getErrorCode() == ErrorCode.SUCCESS) {
               //请求成功,车服务APP可以通过车机响应的channelInfo和responseInfo去实现自定义服务
   String channelInfo = response.getChannelInfo();
   String responseInfo = response.getResponseInfo();
           }
       }
   });
   ...
   ```

2. 车机通过**DataReceive** 方法从HiCar App获取相应的报文数据。报文示例如下所示（其中，**requestInfo**由车服务应用提供，其它内容由HiCar App填充）：

   ```screen
   {    
       "requestService": {
             "requestInfo":"request car service",
             "serviceIp":"192.168.1.200",
             "clientIp":"192.168.1.100",
             "sessionId":"123"
       }
   }
   ```

3. 车机接收到自定义通道请求信息后，根据**requestInfo** 判断是否接受请求，如果接受则根据**serviceIp** ，**clientIp** 准备自定义通道，并通过**HiCarSendData**接口向HiCar App发送响应报文。

   响应报文示例如下：

   ```screen
   {
       "responseService": {
             "responseInfo":"response car service",
             "channelInfo":"192.168.1.100:100",
             "result":"accept",
             "sessionId":"123"
      }
   }
   ```

   示例代码如下所示：

   ```screen
   ...
   cJSON *jsonCommand = cJSON_CreateObject();
   if (jsonCommand == NULL) {
       return;
   }
   cJSON *jsonService = cJSON_AddObjectToObject(jsonData, "responseService");
   cJSON_AddStringToObject(jsonService, "responseInfo", "response car service");
   cJSON_AddStringToObject(jsonService, "channelInfo", "192.168.1.100:100");
   cJSON_AddStringToObject(jsonService, "result", "accept");
   cJSON_AddStringToObject(jsonService, "sessionId", "123");
   char *sendData = cJSON_PrintUnformatted(jsonCommand);
   if (sendData != NULL) {
       int sendDataLen = strnlen(sendData, MAX_DATA_LEN);
   //发送车服务自定义通道响应报文
       HiCarSendData(handle, HICAR_DATA_SERVICE_CHANNEL, sendData, sendDataLen);
   }
   cJSON_Delete(jsonCommand);
   ...
   ```

4. 车服务应用通过[步骤1](#ZH-CN_TOPIC_0000001051620698__li12843636112710)中的**onResult**方法获取从车机返回的响应信息。
5. 车服务应用与车机通过上述过程协商出的通道连接信息，建立自定义通道，并进行数据交互。该部分内容需要车服务应用和车机自行实现。

