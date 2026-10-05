---
name: document/cn/doc-references/recorder_recorderoninfotype-0000001054358934
title: Recorder.RecorderOnInfoType
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/recorder_recorderoninfotype-0000001054358934
source: portal
---

# Recorder.RecorderOnInfoType

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.media.recorder.Recorder.RecorderOnInfoType
    
    public static final class Recorder.RecorderOnInfoType
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
  
---  
Describes recording framework info events and alarms.

**Since:**

1

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static int | [MEDIA_RECORDER_INFO_MAX_DURATION_REACHED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recorder_recorderoninfotype-0000001054358934#ZH-CN_TOPIC_0000001054358934__MEDIA_RECORDER_INFO_MAX_DURATION_REACHED) |  Indicates that the maximum recording duration is reached.   
static int | [MEDIA_RECORDER_INFO_MAX_FILESIZE_APPROACHING](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recorder_recorderoninfotype-0000001054358934#ZH-CN_TOPIC_0000001054358934__MEDIA_RECORDER_INFO_MAX_FILESIZE_APPROACHING) |  Indicates that the size of a recording file reaches 90% of the maximum.   
static int | [MEDIA_RECORDER_INFO_MAX_FILESIZE_REACHED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recorder_recorderoninfotype-0000001054358934#ZH-CN_TOPIC_0000001054358934__MEDIA_RECORDER_INFO_MAX_FILESIZE_REACHED) |  Indicates that the maximum recording file size is reached.   
static int | [MEDIA_RECORDER_INFO_NEXT_OUTPUT_FILE_STARTED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recorder_recorderoninfotype-0000001054358934#ZH-CN_TOPIC_0000001054358934__MEDIA_RECORDER_INFO_NEXT_OUTPUT_FILE_STARTED) |  Indicates that the maximum recording file size is reached and that a new recording file is used.   
static int | [MEDIA_RECORDER_INFO_UNKNOWN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recorder_recorderoninfotype-0000001054358934#ZH-CN_TOPIC_0000001054358934__MEDIA_RECORDER_INFO_UNKNOWN) |  Indicates an unknown recording info event.   
static int | [MEDIA_RECORDER_TRACK_INFO_COMPLETION_STATUS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recorder_recorderoninfotype-0000001054358934#ZH-CN_TOPIC_0000001054358934__MEDIA_RECORDER_TRACK_INFO_COMPLETION_STATUS) |  Indicates the end of an info event related to a track.   
static int | [MEDIA_RECORDER_TRACK_INFO_DATA_KBYTES](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recorder_recorderoninfotype-0000001054358934#ZH-CN_TOPIC_0000001054358934__MEDIA_RECORDER_TRACK_INFO_DATA_KBYTES) |  Indicates the size of encoded data, in KB.   
static int | [MEDIA_RECORDER_TRACK_INFO_DURATION_MS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recorder_recorderoninfotype-0000001054358934#ZH-CN_TOPIC_0000001054358934__MEDIA_RECORDER_TRACK_INFO_DURATION_MS) |  Indicates the track duration.   
static int | [MEDIA_RECORDER_TRACK_INFO_ENCODED_FRAMES](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recorder_recorderoninfotype-0000001054358934#ZH-CN_TOPIC_0000001054358934__MEDIA_RECORDER_TRACK_INFO_ENCODED_FRAMES) |  Indicates the total number of recorded frames.   
static int | [MEDIA_RECORDER_TRACK_INFO_INITIAL_DELAY_MS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recorder_recorderoninfotype-0000001054358934#ZH-CN_TOPIC_0000001054358934__MEDIA_RECORDER_TRACK_INFO_INITIAL_DELAY_MS) |  Indicates the time consumed from the start of track recording to the reception of the first frame, excluding the offset added to eliminate the recording sound, in milliseconds.   
static int | [MEDIA_RECORDER_TRACK_INFO_LIST_END](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recorder_recorderoninfotype-0000001054358934#ZH-CN_TOPIC_0000001054358934__MEDIA_RECORDER_TRACK_INFO_LIST_END) |  Indicates the size of media data, in bytes.   
static int | [MEDIA_RECORDER_TRACK_INFO_LIST_START](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recorder_recorderoninfotype-0000001054358934#ZH-CN_TOPIC_0000001054358934__MEDIA_RECORDER_TRACK_INFO_LIST_START) |  Indicates the start of an info event related to a track.   
static int | [MEDIA_RECORDER_TRACK_INFO_MAX_CHUNK_DUR_MS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recorder_recorderoninfotype-0000001054358934#ZH-CN_TOPIC_0000001054358934__MEDIA_RECORDER_TRACK_INFO_MAX_CHUNK_DUR_MS) |  Indicates the maximum recording duration of a track, in milliseconds.   
static int | [MEDIA_RECORDER_TRACK_INFO_PROGRESS_IN_TIME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recorder_recorderoninfotype-0000001054358934#ZH-CN_TOPIC_0000001054358934__MEDIA_RECORDER_TRACK_INFO_PROGRESS_IN_TIME) |  Indicates the recording duration, in milliseconds.   
static int | [MEDIA_RECORDER_TRACK_INFO_START_OFFSET_MS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recorder_recorderoninfotype-0000001054358934#ZH-CN_TOPIC_0000001054358934__MEDIA_RECORDER_TRACK_INFO_START_OFFSET_MS) |  Indicates the time difference between the start of the track and the start of film recording, in milliseconds.   
static int | [MEDIA_RECORDER_TRACK_INFO_TYPE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recorder_recorderoninfotype-0000001054358934#ZH-CN_TOPIC_0000001054358934__MEDIA_RECORDER_TRACK_INFO_TYPE) |  Indicates the track type.   
static int | [MEDIA_RECORDER_TRACK_INTER_CHUNK_TIME_MS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/recorder_recorderoninfotype-0000001054358934#ZH-CN_TOPIC_0000001054358934__MEDIA_RECORDER_TRACK_INTER_CHUNK_TIME_MS) |  Indicates the maximum interval between adjacent chunks of a track, in milliseconds.   
  
#### Method Summary

Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]MEDIA_RECORDER_INFO_MAX_DURATION_REACHED

public static final int MEDIA_RECORDER_INFO_MAX_DURATION_REACHED

Indicates that the maximum recording duration is reached. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_recorder_Recorder_RecorderOnInfoType_MEDIA_RECORDER_INFO_MAX_DURATION_REACHED)

#### [h2]MEDIA_RECORDER_INFO_MAX_FILESIZE_APPROACHING

public static final int MEDIA_RECORDER_INFO_MAX_FILESIZE_APPROACHING

Indicates that the size of a recording file reaches 90% of the maximum. An info event is reported for each file when its size reaches 90% of the maximum. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_recorder_Recorder_RecorderOnInfoType_MEDIA_RECORDER_INFO_MAX_FILESIZE_APPROACHING)

#### [h2]MEDIA_RECORDER_INFO_MAX_FILESIZE_REACHED

public static final int MEDIA_RECORDER_INFO_MAX_FILESIZE_REACHED

Indicates that the maximum recording file size is reached. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_recorder_Recorder_RecorderOnInfoType_MEDIA_RECORDER_INFO_MAX_FILESIZE_REACHED)

#### [h2]MEDIA_RECORDER_INFO_NEXT_OUTPUT_FILE_STARTED

public static final int MEDIA_RECORDER_INFO_NEXT_OUTPUT_FILE_STARTED

Indicates that the maximum recording file size is reached and that a new recording file is used. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_recorder_Recorder_RecorderOnInfoType_MEDIA_RECORDER_INFO_NEXT_OUTPUT_FILE_STARTED)

#### [h2]MEDIA_RECORDER_INFO_UNKNOWN

public static final int MEDIA_RECORDER_INFO_UNKNOWN

Indicates an unknown recording info event. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_recorder_Recorder_RecorderOnInfoType_MEDIA_RECORDER_INFO_UNKNOWN)

#### [h2]MEDIA_RECORDER_TRACK_INFO_COMPLETION_STATUS

public static final int MEDIA_RECORDER_TRACK_INFO_COMPLETION_STATUS

Indicates the end of an info event related to a track. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_recorder_Recorder_RecorderOnInfoType_MEDIA_RECORDER_TRACK_INFO_COMPLETION_STATUS)

#### [h2]MEDIA_RECORDER_TRACK_INFO_DATA_KBYTES

public static final int MEDIA_RECORDER_TRACK_INFO_DATA_KBYTES

Indicates the size of encoded data, in KB. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_recorder_Recorder_RecorderOnInfoType_MEDIA_RECORDER_TRACK_INFO_DATA_KBYTES)

#### [h2]MEDIA_RECORDER_TRACK_INFO_DURATION_MS

public static final int MEDIA_RECORDER_TRACK_INFO_DURATION_MS

Indicates the track duration. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_recorder_Recorder_RecorderOnInfoType_MEDIA_RECORDER_TRACK_INFO_DURATION_MS)

#### [h2]MEDIA_RECORDER_TRACK_INFO_ENCODED_FRAMES

public static final int MEDIA_RECORDER_TRACK_INFO_ENCODED_FRAMES

Indicates the total number of recorded frames. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_recorder_Recorder_RecorderOnInfoType_MEDIA_RECORDER_TRACK_INFO_ENCODED_FRAMES)

#### [h2]MEDIA_RECORDER_TRACK_INFO_INITIAL_DELAY_MS

public static final int MEDIA_RECORDER_TRACK_INFO_INITIAL_DELAY_MS

Indicates the time consumed from the start of track recording to the reception of the first frame, excluding the offset added to eliminate the recording sound, in milliseconds. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_recorder_Recorder_RecorderOnInfoType_MEDIA_RECORDER_TRACK_INFO_INITIAL_DELAY_MS)

#### [h2]MEDIA_RECORDER_TRACK_INFO_LIST_END

public static final int MEDIA_RECORDER_TRACK_INFO_LIST_END

Indicates the size of media data, in bytes. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_recorder_Recorder_RecorderOnInfoType_MEDIA_RECORDER_TRACK_INFO_LIST_END)

#### [h2]MEDIA_RECORDER_TRACK_INFO_LIST_START

public static final int MEDIA_RECORDER_TRACK_INFO_LIST_START

Indicates the start of an info event related to a track. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_recorder_Recorder_RecorderOnInfoType_MEDIA_RECORDER_TRACK_INFO_LIST_START)

#### [h2]MEDIA_RECORDER_TRACK_INFO_MAX_CHUNK_DUR_MS

public static final int MEDIA_RECORDER_TRACK_INFO_MAX_CHUNK_DUR_MS

Indicates the maximum recording duration of a track, in milliseconds. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_recorder_Recorder_RecorderOnInfoType_MEDIA_RECORDER_TRACK_INFO_MAX_CHUNK_DUR_MS)

#### [h2]MEDIA_RECORDER_TRACK_INFO_PROGRESS_IN_TIME

public static final int MEDIA_RECORDER_TRACK_INFO_PROGRESS_IN_TIME

Indicates the recording duration, in milliseconds. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_recorder_Recorder_RecorderOnInfoType_MEDIA_RECORDER_TRACK_INFO_PROGRESS_IN_TIME)

#### [h2]MEDIA_RECORDER_TRACK_INFO_START_OFFSET_MS

public static final int MEDIA_RECORDER_TRACK_INFO_START_OFFSET_MS

Indicates the time difference between the start of the track and the start of film recording, in milliseconds. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_recorder_Recorder_RecorderOnInfoType_MEDIA_RECORDER_TRACK_INFO_START_OFFSET_MS)

#### [h2]MEDIA_RECORDER_TRACK_INFO_TYPE

public static final int MEDIA_RECORDER_TRACK_INFO_TYPE

Indicates the track type. The value 0 indicates an audio track, and the value 1 indicates a video track. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_recorder_Recorder_RecorderOnInfoType_MEDIA_RECORDER_TRACK_INFO_TYPE)

#### [h2]MEDIA_RECORDER_TRACK_INTER_CHUNK_TIME_MS

public static final int MEDIA_RECORDER_TRACK_INTER_CHUNK_TIME_MS

Indicates the maximum interval between adjacent chunks of a track, in milliseconds. 

**Since:**

1

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_media_recorder_Recorder_RecorderOnInfoType_MEDIA_RECORDER_TRACK_INTER_CHUNK_TIME_MS)
