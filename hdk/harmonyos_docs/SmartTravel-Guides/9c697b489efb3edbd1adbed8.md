---
name: document/cn/SmartTravel-Guides/audio-0000001050066783
title: Audio
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-Guides/audio-0000001050066783
source: portal
---

# Audio

#### Scenario

After the HiCar phone is connected to the head unit, the microphones and speakers of the head unit can be virtualized for use by the phone. For example, the phone can use the in-vehicle speaker to play music and the in-vehicle microphones to pick up sounds for recognition.

Implement the audio-related APIs based on the audio API header files provided by the HiCar SDK, and generate the **libdmsdpaudiohandler.so** file. When running, the HiCar SDK searches for the .so file. If the file is not found, it is considered that the audio-related APIs have not been implemented. If the file is found, the SDK dynamically loads the .so library.

The virtual audio capability is a prerequisite for accessing HiCar. There, the preceding functions must be implemented. For details about the implementation process, please refer to **dmsdp_audio_sdk_samples.c** in the HiCar SDK package.

#### Interaction Process

**Figure 1** Process of playing and pausing audio playback  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230817210315.56491751638811900779533811745397:50001231000000:2800:62E1C4C7C2EACF81AE141B3E447228F75F082C74BAF0E5D09D8C185AD8E61C6D.png?needInitFileName=true?needInitFileName=true)

     1. During initialization, the HiCar SDK searches for the **libdmsdpaudiohandler.so** file. If the file is found, it is considered that the audio functions have been implemented. The HiCar SDK then obtains the related audio capabilities, registers the status callback, and receives status events from the HMI app.
     2. When the user touches the play button on the HiCar UI, the HiCar SDK sets audio parameters based on negotiation results between the phone and the head unit. Then, the HiCar SDK starts to write data to the speaker. If the speaker is not enabled when the first frame of data is received, it must be enabled before writing data.
     3. When the user pauses music playback, calling **WriteStreamBuffer** stops.
     4. When the SDK calls **OpenAudioRecord** , the head unit needs to enable the vehicle-mounted microphone to pick up sound and send the collected sound data to the HiCar SDK based on the reported capability. When the SDK calls **CloseAudioRecord** , the vehicle-mounted microphone needs to be disabled. In addition, to ensure that the HiCar backend voice recognition is not affected, the microphone data amplitude cannot be less than 2K.

#### API Description

The audio APIs defined in the HiCar SDK can be used for obtaining audio capabilities, enabling/disabling the microphone, and reading/writing audio data.
    
    **dmsdp_business.h** : defines result codes and status codes.
    **dmsdp_audio_data_type.h** : defines the audio data types.
    **dmsdp_audio_handler.h** : defines the APIs for operating audio devices.

#### Development Procedure

     1. Sort out the audio hardware information of the head unit and determine the audio devices that require distributed virtualization for use by HiCar phones. Only audio information involved in distributed virtualization services needs to be reported. For details about capability reporting, see the **GetAudioCapability** API in **dmsdp_audio_sdk_samples.c**. Generally, the head unit needs to provide a microphone and a speaker for the HiCar SDK.
     2. Currently, the HiCar SDK provides the virtual phone capability. The microphone and speaker used by the virtual phone can use the same hardware device as that used in other audio scenarios. However, the device ID and type (**id** and **type** in the **DMSDPAudioCapabilities** structure) cannot be the same. For details, see the sample code in **dmsdp_audio_sdk_samples.c**. The **WriteStreamBuffer** and **ReadStreamBuffer** APIs cannot be blocked for a long time during implementation. Especially when the connection is disconnected, if the APIs are blocked for a long time, some messages may fail to be transmitted to the HMI app.
     3. The HiCar SDK needs to operate the microphone or speaker of the head unit through the device APIs. As the native services on the head unit may also operate the microphone or speaker, properly handle the conflict between different services with a carefully designed audio policy.
     4. After the head unit reports the audio capability to the phone, the audio device status may change, for example when the audio device is used by other services of the head unit. In this case, the **UpdateServiceStatus** and **UpdateServiceAction** APIs in **DMSDPListener** can be used to reversely notify the HiCar SDK of the status change.
