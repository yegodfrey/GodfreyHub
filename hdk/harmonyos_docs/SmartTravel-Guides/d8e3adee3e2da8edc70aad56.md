---
name: document/cn/SmartTravel-Guides/handle-audio-distribution-policy-0000001073001025
title: Handling Audio Stream Distribution (Beta)
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-Guides/handle-audio-distribution-policy-0000001073001025
source: portal
---

# Handling Audio Stream Distribution (Beta)

#### Scenario

**Figure 1** Audio stream distribution  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230817210312.98499388288993646512731653904236:50001231000000:2800:BFC34440E99F734B4D7FE32494AF2B19D19EDC129CF4AA4D3EB03B51879A60DC.png?needInitFileName=true?needInitFileName=true)

The mobile phone audio framework and DMSDP distinguish different types of streams and send unmixed streams to the head unit via two channels. The audio framework supports up to four streams, and you can set one, two, or three stream distribution parameters (examples are provided below for reference) as needed.

(1) If only one parameter (for example, 8, 23) is set, the media stream is transmitted separately, and the remaining streams are mixed.

(2) If two parameters (for example, 8:4096, 23:212) are set, the navigation stream and the media stream are transmitted separately, and the remaining streams are mixed.

(3) If three parameters (for example, 8:34:5, 23: 21+25:20+22) are set, the media stream, the system & notification tone stream, and the call ringtone stream are transmitted separately, and the remaining streams are mixed.

After the SDK is successfully initialized, the head unit can call the API to enable the audio stream distribution policy. The head unit can read audio streams based on the HiCar audio stream open APIs and send them through different channels based on the audio stream type. If audio stream distribution is not required, skip this section. Note that audio stream distribution requires mobile phones running HarmonyOS 3.0 or later.

#### API Description

**Table 1** API for reporting the audio stream distribution capabilityAPI | Structure | Description  
---|---|---  
int32_t (*GetAudioCapability)(DMSDPAudioCapabilities** capabilities, uint32_t *num) | DMSDPAudioCapabilities.reserveds | You can report whether audio stream distribution is required via this API. Subsequently, data can be obtained via **WriteStreamBuffer** and audio streams can be distinguished based on **streamType**.  
  
The audio stream distribution policy supports a maximum of three audio stream policy groups. Audio streams are grouped by **StreamType**. The reserved field **reserveds** in **DMSDPAudioCapabilities** is used to report audio capabilities. The reserved field is reported in the Key-Value format. The following table lists the definitions of involved keys. For details, see the subsequent demo code.
    
    #define MULTI_AUDIO_BUS_CAP_KEY       "1000"  // Key value defined by the HiCar SDK, indicating whether audio stream distribution is supported.
    #define MULTI_AUDIO_BUS_CAP_VALUE     "true"  // The head unit returns **true** if audio stream distribution is supported; returns **false** otherwise.
    #define MULTI_AUDIO_BUS_POLICY_KEY    "1001"  // Key value defined by the HiCar SDK, indicating the audio stream distribution policy.
    #define MULTI_AUDIO_BUS_POLICY_VALUE  "8:16:1" // The head unit transfers the distribution capability based on the preceding description.
    #define MULTI_AUDIO_BUS_VERSION_KEY   "1002"  // Key value defined by the HiCar SDK, indicating the version number of the audio stream distribution capability.
    #define MULTI_AUDIO_BUS_VERSION_VALUE "1.0"   // The head unit returns the version number, which can be **1.0** or **2.0**.

Supported values of **StreamType** :

     * Audio stream of a phone call: AUDIO_STREAM_VOICE_CALL = 0
     * Audio stream of the system sound: AUDIO_STREAM_SYSTEM = 1
     * Audio stream of a ringtone: AUDIO_STREAM_RING = 2
     * Audio stream of music playback: AUDIO_STREAM_MUSIC = 3
     * Audio stream of an alarm: AUDIO_STREAM_ALARM = 4
     * Audio stream of a notification: AUDIO_STREAM_NOTIFICATION = 5
     * Audio stream generated when a button is pressed during a call: AUDIO_STREAM_DTMF = 8
     * Audio stream of text-to-speech (TTS): AUDIO_STREAM_TTS = 9
     * Audio stream of an accessibility feature: AUDIO_STREAM_ACCESSIBILITY = 10

#### Development Procedure

The sample code for reporting the audio stream distribution capability is as follows:
    
    // Note that the following sample code does not consider the memory release operation.
    #define MULTI_AUDIO_BUS_CAP_KEY       "1000"  // Key value defined by the HiCar SDK, indicating whether audio stream distribution is supported.
    #define MULTI_AUDIO_BUS_CAP_VALUE     "true"  // The head unit returns **true** if audio stream distribution is supported; returns **false** otherwise.
    #define MULTI_AUDIO_BUS_POLICY_KEY    "1001"  // Key value defined by the HiCar SDK, indicating the audio stream distribution policy.
    #define MULTI_AUDIO_BUS_POLICY_VALUE  "8:16:1" // The head unit transfers the distribution capability based on the preceding description.
    #define MULTI_AUDIO_BUS_VERSION_KEY   "1002"  // Key value defined by the HiCar SDK, indicating the version number of the audio stream distribution capability.
    #define MULTI_AUDIO_BUS_VERSION_VALUE "1.0"   // The head unit returns the version number, which can be **1.0** or **2.0**.
    
    DMSDPReserved *policyReserved = NULL;
    policyReserved = (DMSDPReserved *)malloc((sizeof(DMSDPReserved)) * 3);
    
    DMSDPAudioCapabilities *capabilities; // The memory has been allocated.
    capabilities->reserveds.num = 3;
    capabilities->reserveds.reserveds = policyReserved;
    
    // Fill in whether audio stream distribution is supported.
    uint32_t len = strlen(MULTI_AUDIO_BUS_CAP_KEY);
    char *capKey = (char *)malloc(len + 1);
    strcpy_s(capKey, len + 1, MULTI_AUDIO_BUS_CAP_KEY);
    policyReserved[0].key = capKey;
    policyReserved[0].keyLen = len;
    
    len = strlen(MULTI_AUDIO_BUS_CAP_VALUE);
    char *capValue = (char *)malloc(len + 1);
    strcpy_s(capValue, len + 1, MULTI_AUDIO_BUS_CAP_VALUE);
    policyReserved[0].value = capValue;
    policyReserved[0].valueLen = len;
    
    // Fill in the audio stream distribution policy.
    len = strlen(MULTI_AUDIO_BUS_POLICY_KEY);
    char *policyKey = (char *)malloc(len + 1);
    strcpy_s(policyKey, len + 1, MULTI_AUDIO_BUS_POLICY_KEY);
    policyReserved[1].key = policyKey;
    policyReserved[1].keyLen = len;
    
    len = strlen(MULTI_AUDIO_BUS_POLICY_VALUE);
    char *policyValue = (char *)malloc(len + 1);
    strcpy_s(policyValue, len + 1, MULTI_AUDIO_BUS_POLICY_VALUE);
    policyReserved[1].value = policyValue;
    policyReserved[1].valueLen = len;
    
    // Fill in the audio stream distribution version number.
    len = strlen(MULTI_AUDIO_BUS_VERSION_KEY);
    char *versionKey = (char *)malloc(len + 1);
    strcpy_s(versionKey, len + 1, MULTI_AUDIO_BUS_VERSION_KEY);
    policyReserved[2].key = versionKey;
    policyReserved[2].keyLen = len;
    
    len = strlen(MULTI_AUDIO_BUS_VERSION_VALUE);
    char *versionValue = (char *)malloc(len + 1);
    strcpy_s(versionValue, len + 1, MULTI_AUDIO_BUS_VERSION_VALUE);
    policyReserved[2].value = versionValue;
    policyReserved[2].valueLen = len;
    
    // Fill in the reserved field, and report it to the HiCar SDK via the **GetAudioCapability** API.
