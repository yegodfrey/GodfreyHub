---
name: document/cn/doc-references/parcelableex-0000001054678859
title: ParcelableEx
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/parcelableex-0000001054678859
source: portal
---

# ParcelableEx  
      
    public interface ParcelableEx  
  
---  
Provides an interface for data marshalling across platforms. If your application running in ohos needs to transmit a marshallable object with a process running in another platform, you need to implement the [marshallingEx(ohos.utils.Parcel)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcelableex-0000001054678859#ZH-CN_TOPIC_0000001054678859__marshallingEx-ohos_utils_Parcel-) method to marshal data into the Class name+data format. 

Sample code: 
    
    public class Example implements ParcelableEx {
         private int data = 0;
    
         @override
         public void marshallingEx(Parcel out) {
             out.writeString(getClass().getName());
             out.writeInt(data);
             return;
         }
     }
     
     

**Since:**

3

#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [marshallingEx](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcelableex-0000001054678859#ZH-CN_TOPIC_0000001054678859__marshallingEx-ohos_utils_Parcel-)​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) out) |  Writes a ParcelableEx object into a [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018).   
default void | [unmarshallingEx](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcelableex-0000001054678859#ZH-CN_TOPIC_0000001054678859__unmarshallingEx-ohos_utils_Parcel-)​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) in) |  Unmarshalls this ParcelableEx object from a [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018).   
  
#### Method Detail

#### [h2]marshallingEx

void marshallingEx​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) out) throws [ParcelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcelexception-0000001054200280)

Writes a ParcelableEx object into a [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
out  |  Indicates the [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) object to which the ParcelableEx object will be written.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[ParcelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcelexception-0000001054200280) |  Throws this exception if the operation fails.  
  
**Since:**

3

#### [h2]unmarshallingEx

default void unmarshallingEx​([Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) in) throws [ParcelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcelexception-0000001054200280)

Unmarshalls this ParcelableEx object from a [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018). 

To achieve successful data unmarshalling, you must provide a no-argument constructor for the class that inherits the ParcelableEx interface and write the class name to Parcel in the [marshallingEx(ohos.utils.Parcel)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcelableex-0000001054678859#ZH-CN_TOPIC_0000001054678859__marshallingEx-ohos_utils_Parcel-) method.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
in  |  Indicates the [Parcel](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcel-0000001054519018) object from which the ParcelableEx object will be unmarshaled.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[ParcelException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/parcelexception-0000001054200280) |  Throws this exception if the operation fails.  
  
**Since:**

3
