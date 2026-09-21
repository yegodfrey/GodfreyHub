---
name: document/cn/connectivity-References/OneHopLinux-API
title: onehop_api.h
uri: https://developer.huawei.com/consumer/cn/doc/connectivity-References/OneHopLinux-API
---

|-----------------|
|File info|
|onehop_api.h|
|包含面向上层应用接口方法的头文件。|

## Method Summary

|-----------|--------------------------------------------------------------|
|Return type|Method name|
|int|GetKitVersion(char result, int len)获取OneHop SDK版本号|
|int|InitOneHop (const void context)初始化OneHop SDK运行时环境|
|void|UninitOneHop(void)释放系统资源|
|int|StartOneHopService(const OneHopKitHandlers callBack)启动OneHop服务|
|int|StopOneHopService(void)停止Onehop服务|
|int|OneHopConfirmFileRecv(const char  path)用户同意接收文件的处理|
|int|OneHopRefuseFileRecv(void)用户拒绝接收文件的处理|
|int|GetConnectedDeviceName(char* devName, int len)获取当前连接的对端设备名称|

## Structs

|-------------------|
|Struct|
|TransferResult|
|OneHop服务的文件传输结果枚举值。|

**Members**

|-----------------------|---------------|
|Member name|Member desc|
|RECV_SUCCESS = 0|全部文件均传输成功|
|RECV_FAIL = 1|全部文件均传输失败|
|RECV_PARTLY_SUCCESS = 2|多文件传输时，部分文件传输失败|

|---------------|
|Struct|
|OnehopErrorCode|
|Onehop服务的错误码。|

**Members**

|---------------------------------------|--------------|
|Member name|Member desc|
|ONEHOP_ERR_INPUT_PARAM_INVALID = 2|API输入参数非法|
|ONEHOP_ERR_CONFIG_INIT_FAIL = 3|Onehop配置初始化失败|
|ONEHOP_ERR_DRIVER_ADAPT_INIT_FAIL = 4|驱动适配初始化失败|
|ONEHOP_ERR_WIFI_WPA_CONNECT_FAIL = 2001|Wi-Fi WPA连接失败|
|ONEHOP_ERR_WIFI_P2P_ADD_FAIL = 2002|添加Wi-Fi P2P组失败|
|ONEHOP_ERR_TRANS_NO_SPACE = 3001|磁盘空间不足，文件传输失败|

|--------------|
|Struct|
|OnehopStatus|
|Onehop服务状态枚举值。|

**Members**

|--------------------------|-------------------|
|Member name|Member desc|
|ONEHOP_P2P_CONNECT = 0|OneHop p2p已连接|
|ONEHOP_P2P_DISCONNECT = 1|OneHop p2p已断开连接|
|ONEHOP_GO_STARTED = 2|OneHop Go已启动|
|ONEHOP_GO_REMOVED = 3|OneHop p2p group已移除|
|ONEHOP_SERVICE_ABORT = 4|OneHop服务异常终止|
|ONEHOP_SERVICE_FINSHED = 5|OneHop服务完成|

|-----------------|
|Struct|
|OneHopKitHandlers|
|Onehop服务的回调函数结构体。|

**Members**

|----------------------------|-----------------------------------------------|
|Member name|Member desc|
|statusChangedCallback|OneHop SDK连接状态变化的回调函数, 详见章节2.6.1|
|fileTransferRequestCallback|OneHop SDK将手机端已准备好传输文件的状态通知上层应用的回调函数, 详见章节2.6.2|
|fileTransferProgressCallback|OneHop SDK文件传输进度的回调函数, 详见章节2.6.3|
|fileTransferResultCallback|OneHop SDK文件传输结果的回调函数, 详见章节2.6.4|

## Public Methods

|--------------------------------------------|
|Method|
|int GetKitVersion (char *result, int len)|
|获取OneHop SDK版本号。此接口需要在调用InitOneHop()接口前进行调用。|

**Parameters**

|--------------|------------------------------|
|Parameter name|Parameter desc|
|result|版本号字符串。|
|len|输入参数result的字符串长度值。len的值不能小于20。|

**Return**

|----|------------|
|type|desc|
|int|0: 成功, -1:失败|

|---------------------------------------------------------|
|Method|
|int InitOneHop(const void context)|
|初始化OneHop服务运行所需的设备资源。此接口需要在调用StartOneHopService()接口前进行调用。|

Parameters

|--------------|--------------|
|Parameter name|Parameter desc|
|context|扩展预留|

**Return**

|----|------------|
|type|desc|
|int|0: 成功, -1:失败|

|----------------------------------------------------------|
|Method|
|void UninitOneHop(void)|
|去初始化OneHop服务运行所需的设备资源。此接口需要在调用StopOneHopService ()接口后进行调用。|

|--------------------------------------------------------|
|Method|
|int StartOneHopService(const OneHopKitHandlers callBack)|
|启动OneHop 服务。此接口需要在调用InitOneHop ()接口后进行调用。|

**Parameters**

|--------------|--------------|
|Parameter name|Parameter desc|
|callBack|Onehop服务回调|

**Return**

|----|-----------------------|
|type|desc|
|int|0:成功, 其他值:错误码 详见章节2.4.2|

|-------------------------------------------------|
|Method|
|int StopOneHopService(void)|
|停止OneHop 服务。此接口需要在调用StartOneHopService ()接口后进行调用。|

**Return**

|----|-------------|
|type|desc|
|int|0: 成功s, -1:失败|

|------------------------------------------------------------------|
|Method|
|int OneHopConfirmFileRecv(const char * path)|
|确认接收文件。当用户确认接收文件时调用此接口，以通知OneHop服务执行接收文件的相关操作，并将文件保存的路径信息告知OneHop。|

**Parameters**

|--------------|--------------------------------|
|Parameter name|Parameter desc|
|path|文件保存路径。path的字符串长度不能大于1024 bytes.|

**Return**

|----|------------|
|type|desc|
|int|0: 成功, -1:失败|

|-----------------------------------|
|Method|
|int OneHopRefuseFileRecv(void)|
|拒绝接收文件。当用户拒绝接收文件时调用此接口，以通知OneHop服务。|

**Return**

|----|------------|
|type|desc|
|int|0: 成功, -1:失败|

|--------------------------------------------------|
|Method|
|int GetConnectedDeviceName(char* devName, int len)|
|获取当前连接到OneHop服务的手机设备名称。|

**Parameters**

|--------------|---------------------------------|
|Parameter name|Parameter desc|
|devName|手机设备名称|
|len|输入参数devName的字符串长度值。len的值不能小于256。.|

**Return**

|----|------------|
|type|desc|
|int|0: 成功, -1:失败|

## Callback Methods

|---------------------------------------------------------------|
|Method|
|typedef void(*OnehopStatusCallback) (OnehopStatus status)|
|OneHop服务连接状态变化回调函数。当OneHop SDK的连接状态发生变化时，SDK通过此回调通知上层应用当前的连接状态。|

**Parameters**

|--------------|---------------|
|Parameter name|Parameter desc|
|status|状态值: 详见章节 2.4.3|

**Return**

|----|----|
|type|desc|
|void|无返回值|

|------------------------------------------------------------------------------------|
|Method|
|typedef void(OnehopRequestFileTransferCallback)( const char* fileNames, int fileNum)|
|OneHop服务请求文件传输回调函数。当手机端发起文件传输请求时，OneHop服务通过此回调通知上层应用。|

Parameters

|--------------|--------------|
|Parameter name|Parameter desc|
|fileNames|文件名列表|
|fileNum|文件数量|

**Return**

|----|----|
|type|desc|
|void|无返回值|

|------------------------------------------------------------------------------------|
|Method|
|typedef void(*OnehopTransferProgressCallback)(int finishedFileNum, int totalFileNum)|
|OneHop服务文件传输进度回调函数。通过此回调通知上层应用文件传输已完成数量及总文件数量。|

**Parameters**

|---------------|--------------|
|Parameter name|Parameter desc|
|finishedFileNum|已完成传输的文件数量|
|totalFileNum|本次传输任务的总文件数量|

**Return**

|----|----|
|type|desc|
|void|无返回值|

|-----------------------------------------------------------------------------------|
|Method|
|typedef void (*OnehopTransferResultCallback)( TransferResult result, int failedNum)|
|OneHop服务文件传输结果回调函数。当文件传输任务结束时，通过此回调通知上层应用文件传输的结果。|

**Parameters**

|--------------|---------------------------------------------------------------------------------------------------------|
|Parameter name|Parameter desc|
|result|传输结果: 详见章节2.4.1|
|failedNum|当参数result的值为RECV_SUCCESS,无需处理 failedNum.当参数result的值为RECV_PARTLY_SUCCESS 或RECV_FAIL时，failedNum表示传输失败的文件数量。|

**Return**

|----|----|
|type|desc|
|void|无返回值|

