---
name: document/cn/doc-references/itextdetector-0000001054200044
title: ITextDetector
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/itextdetector-0000001054200044
source: portal
---

# ITextDetector
    
    public interface ITextDetector
    extends [ICvBase](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icvbase-0000001054120093)  
  
---  
Detects and recognizes text in a given image, also known as Optical Character Recognition(OCR). 

Text can be extracted from screenshots with simple or complex backgrounds, from in-focus shots on documents, and from lighting shots on billboards, road signs, product packaging, and more. 

Currently, the maximum width and height of a screenshot that can be captured by OCR are 2200 px and 15210 px, respectively. If the image size is out of range, the error code 200 is returned. 

Currently, screenshot OCR can recognize text only in Chinese and English. 

The recommended resolution for snapshots is greater than 720 px, and the recommended length-to-width ratio is less than 2:1. If an input image is not of the recommended size, text recognition may not be as accurate as expected. 

This interface provides two process modes. The MODE_IN mode indicates that the SDK directly invokes the OCR function in the caller process. The MODE_OUT mode indicates that the SDK functions as a client to send a calling request to the HUAWEI HiAI Engine, which performs OCR and returns the result to the caller. 

This interface also provides two block modes. In synchronous mode, the calling is blocked in the detect method until the OCR processing is complete. In asynchronous mode, the detect method is returned immediately, and the OCR processing result is returned to the caller in callback mode.

**Since:**

1

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
int | [detect](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itextdetector-0000001054200044#ZH-CN_TOPIC_0000001054200044__detect-ohos_ai_cv_common_VisionImage-ohos_ai_cv_text_Text-ohos_ai_cv_common_VisionCallback-)​([VisionImage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/visionimage-0000001054838720) image, [Text](https://developer.harmonyos.com/cn/docs/documentation/doc-references/text-0000001054678772) result, [VisionCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/visioncallback-0000001054120022)<[Text](https://developer.harmonyos.com/cn/docs/documentation/doc-references/text-0000001054678772)> visionCallBack) |  Performs general text recognition on a given image and returns the result code.   
void | [setVisionConfiguration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/itextdetector-0000001054200044#ZH-CN_TOPIC_0000001054200044__setVisionConfiguration-ohos_ai_cv_text_TextConfiguration-)​([TextConfiguration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textconfiguration-0000001054558773) textConfiguration) |  Sets parameters for general text recognition.   
  
Methods inherited from interface ohos.ai.cv.common.[ICvBase](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icvbase-0000001054120093)  
---  
[getAvailability](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icvbase-0000001054120093#ZH-CN_TOPIC_0000001054120093__getAvailability--), [loadPlugin](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icvbase-0000001054120093#ZH-CN_TOPIC_0000001054120093__loadPlugin-ohos_ai_engine_pluginservice_ILoadPluginCallback-), [prepare](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icvbase-0000001054120093#ZH-CN_TOPIC_0000001054120093__prepare--), [release](https://developer.harmonyos.com/cn/docs/documentation/doc-references/icvbase-0000001054120093#ZH-CN_TOPIC_0000001054120093__release--)  
  
#### Method Detail

#### [h2]detect

int detect​([VisionImage](https://developer.harmonyos.com/cn/docs/documentation/doc-references/visionimage-0000001054838720) image, [Text](https://developer.harmonyos.com/cn/docs/documentation/doc-references/text-0000001054678772) result, [VisionCallback](https://developer.harmonyos.com/cn/docs/documentation/doc-references/visioncallback-0000001054120022)<[Text](https://developer.harmonyos.com/cn/docs/documentation/doc-references/text-0000001054678772)> visionCallBack)

Performs general text recognition on a given image and returns the result code. 

Currently, the maximum width and height allowed for a screenshot are 2200 px and 15210 px, respectively. The recommended resolution for snapshots is greater than 720 px, and the recommended length-to-width ratio is less than 2:1.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
image  |  Indicates an input image.  
result  |  Indicates the text result after OCR in synchronous mode.  
visionCallBack  |  Indicates the callback class to use. 
    * If this parameter is null, detect is called synchronously, and the text after OCR is output from the result parameter.
    * If this parameter is not null, detect is called asynchronously, and the result parameter should be null. When the asynchronous call is successful, the text after OCR can be obtained from onResult, or an error code is passed from onError.  
  
**Returns:**

Returns HwHiAIResultCode.AIRESULT_SUCCESS if the synchronous call is successful; returns an error code otherwise. 

Returns HwHiAIResultCode.AIRESULT_ASYNC_MODE if the asynchronous call is successful; returns an error code if any input parameter is invalid. 

For more information, see [HwHiAIResultCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/hwhiairesultcode-0000001054838728).

**Since:**

1

#### [h2]setVisionConfiguration

void setVisionConfiguration​([TextConfiguration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/textconfiguration-0000001054558773) textConfiguration)

Sets parameters for general text recognition. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
textConfiguration  |  Indicates the parameters to set, including region of interest (ROI), text level to return, and OCR engine type.  
  
**Since:**

1
