---
name: document/cn/SmartTravel-References/overview-0000001050161832
title: Overview
uri: https://developer.huawei.com/consumer/cn/doc/SmartTravel-References/overview-0000001050161832
source: portal
---

# Overview  
  
Return Type | Function Name  
---|---  
int32_t | DMSDPGetAudioHandler Obtains the audio (speaker and microphone) functions, and stores them in the **DMSDPAudioHandler** structure.  
int32_t | GetAudioCapability Obtains the attributes of available audio devices (including speakers and microphones) in the form of specified structure.  
char* | GetAudioCapabilityString Obtains the attributes of available audio devices (including speakers and microphones) in the form of JSON character string.  
int32_t | SetAudioParameter Sets audio parameters.  
int32_t | WriteStreamBuffer Plays the audio data.  
int32_t | CloseAudioTrack Releases the playback of an audio file.  
int32_t | OpenAudioRecord Opens the microphone.  
int32_t | ReadStreamBuffer Records audio data.  
int32_t | CloseAudioRecord Releases an audio recording device.  
void | Release Releases resources of a specified type. For example, the type of the resource released after capability query is **RELEASE_TYPE_QUERY_ABILITY**.  
int32_t | RegisterListener Registers a callback for audio device status changes and device behavior changes with the head unit.  
int32_t | BusinessControl Notifies the head unit of the audio device status changes.  
int32_t | RequestAudioFocus Requests focus from the head unit.  
int32_t | AbandonAudioFocus Instruct the head unit to release focus.
