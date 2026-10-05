---
name: document/cn/doc-references/lite-wearable-file-storage-0000001176909960
title: 文件存储
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/lite-wearable-file-storage-0000001176909960
source: portal
---

# 文件存储  
  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231114142602.02907667727041908049669446238098:50001231000000:2800:2E51B17F25DDCEF2E1BB21253A6533E8AF2C83F944EC296CE1EE982A7596EEFD.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

    * 从API Version 6开始，该接口不再维护，推荐使用新接口['@ohos.fileio'](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fileio-0000001168366687)。 
    * 本模块首批接口从API version 4开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

涉及到文件目录的请参考[存储目录定义](https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-framework-file-0000001671873957#ZH-CN_TOPIC_0000001671873957__存储目录定义)。

#### 支持设备

API | 手机 | 平板 | 智慧屏 | 智能穿戴  
---|---|---|---|---  
file.move | 支持 | 支持 | 支持 | 支持  
file.copy | 支持 | 支持 | 支持 | 支持  
file.list | 支持 | 支持 | 支持 | 支持  
file.get | 支持 | 支持 | 支持 | 支持  
file.delete | 支持 | 支持 | 支持 | 支持  
file.writeText | 支持 | 支持 | 支持 | 支持  
file.writeArrayBuffer | 支持 | 支持 | 支持 | 支持  
file.readText | 支持 | 支持 | 支持 | 支持  
file.readArrayBuffer | 支持 | 支持 | 支持 | 支持  
file.access | 支持 | 支持 | 支持 | 支持  
file.mkdir | 支持 | 支持 | 支持 | 支持  
file.rmdir | 支持 | 支持 | 支持 | 支持  
  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20231114142602.67188749937807035554902024939467:50001231000000:2800:BAE19F2240A7B92429CF1A0222F2C1A2CF8401D115DD2DF28D12AE71764F2AA0.png?needInitFileName=true?needInitFileName=true?needInitFileName=true)

file.writeText、file.writeArrayBuffer、file.readText和file.readArrayBuffer仅支持文本文档读写。

#### 导入模块
    
    import file from '@system.file';

#### 权限列表

无

#### file.move

move(Object): void

将指定文件移动到其他指定位置。

    * 参数 

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
srcUri | string | 是 | 要移动的文件的uri。  
dstUri | string | 是 | 文件要移动到的位置的uri。  
success | Function | 否 | 接口调用成功的回调函数，返回文件要移动到的位置的uri。  
fail | Function | 否 | 接口调用失败的回调函数。  
complete | Function | 否 | 接口调用结束的回调函数。  
  
fail返回错误代码：

错误码 | 说明  
---|---  
202 | 出现参数错误。  
300 | 出现I/O错误。  
301 | 文件或目录不存在。  
  
    * 示例
          
          export default {    
            move() {        
              file.move({            
                srcUri: 'internal://app/myfiles1',            
                dstUri: 'internal://app/myfiles2',            
                success: function(uri) {                
                  console.log('call success callback success');            
                },            
                fail: function(data, code) {                
                  console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
                },        
              });    
            }
          }

#### file.copy

copy(Object): void

将指定文件拷贝并存储到指定位置，接口所使用的URI描述详见[存储目录定义](https://developer.harmonyos.com/cn/docs/documentation/doc-references/lite-wearable-file-0000001176751380#section1856519365229)。

    * 参数 

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
srcUri | string | 是 | 要拷贝的文件的uri。  
dstUri | string | 是 | 文件要拷贝到的位置的uri。 不支持用应用资源路径或tmp类型的uri。  
success | Function | 否 | 接口调用成功的回调函数，返回文件要拷贝到的位置的uri。  
fail | Function | 否 | 接口调用失败的回调函数。  
complete | Function | 否 | 接口调用结束的回调函数。  
  
fail返回错误代码：

错误码 | 说明  
---|---  
202 | 出现参数错误。  
300 | 出现I/O错误。  
301 | 文件或目录不存在。  
  
    * 示例
          
          export default {    
            copy() {        
              file.copy({            
                srcUri: 'internal://app/file.txt',            
                dstUri: 'internal://app/file_copy.txt',            
                success: function(uri) {                
                  console.log('call success callback success');            
                },            
                fail: function(data, code) {                
                  console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
                },
              });    
            }
          }

#### file.list

list(Object): void

获取指定路径下全部文件的列表，接口所使用的 URI 描述详见[存储目录定义](https://developer.harmonyos.com/cn/docs/documentation/doc-references/lite-wearable-file-0000001176751380#section1856519365229)。

    * 参数 

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
uri | string | 是 | 目录uri。  
success | Function | 否 | 接口调用成功的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
complete | Function | 否 | 接口调用结束的回调函数。  
  
success返回值：

参数名 | 类型 | 说明  
---|---|---  
fileList | Array<FileInfo> | 获取的文件列表，其中每个文件的信息的格式为： { uri:'file1', lastModifiedTime:1589965924479, length:10240, type: 'file' }  
  
**表1** FileInfo  参数名 | 类型 | 说明  
---|---|---  
uri | string | 文件的 uri。  
lastModifiedTime | number | 文件上一次保存时的时间戳，显示从1970/01/01 00:00:00 GMT到当前时间的毫秒数。  
length | number | 文件的大小，单位为字节。  
type | string | 文件的类型，可选值为：
      * dir：目录； 
      * file：文件。   
  
fail返回错误代码：

错误码 | 说明  
---|---  
202 | 出现参数错误。  
300 | 出现I/O错误。  
301 | 文件或目录不存在。  
  
    * 示例
          
          export default {    
            list() {        
              file.list({            
                uri: 'internal://app/pic',            
                success: function(data) {                
                  console.log(data.fileList);            
                },            
                fail: function(data, code) {                
                  console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
                },        
              });    
            }
          }

#### file.get

get(Object): void

获取指定本地文件的信息，URI请参考[存储目录定义](https://developer.harmonyos.com/cn/docs/documentation/doc-references/lite-wearable-file-0000001176751380#section1856519365229)。

    * 参数 

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
uri | string | 是 | 文件的uri。  
recursive | boolean | 否 | 是否进行递归获取子目录文件列表，缺省为false。  
success | Function | 否 | 接口调用成功的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
complete | Function | 否 | 接口调用结束的回调函数。  
  
success返回值：

参数名 | 类型 | 说明  
---|---|---  
uri | string | 文件的uri。  
length | number | 文件字节长。  
lastModifiedTime | number | 文件保存时的时间戳，从1970/01/01 00:00:00到当前时间的毫秒数。  
type | string | 文件类型，可选值为：
      * dir：目录； 
      * file：文件。   
subFiles | Array | 文件列表。  
  
fail返回错误代码：

错误码 | 说明  
---|---  
202 | 出现参数错误。  
300 | 出现I/O错误。  
301 | 文件或目录不存在。  
  
    * 示例
          
          export default {    
            get() {        
              file.get({            
                uri: 'internal://app/file',            
                success: function(data) {                
                  console.log(data.uri);            
                },            
                fail: function(data, code) {                
                  console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
                },
              });    
            }
          }

#### file.delete

delete(Object): void

删除本地文件，使用的URI参考[存储目录定义](https://developer.harmonyos.com/cn/docs/documentation/doc-references/lite-wearable-file-0000001176751380#section1856519365229)。

    * 参数 

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
uri | string | 是 | 删除文件的uri，不能是应用资源路径。  
success | Function | 否 | 接口调用成功的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
complete | Function | 否 | 接口调用结束的回调函数。  
  
fail返回错误代码：

错误码 | 说明  
---|---  
202 | 参数错误。  
300 | I/O错误。  
301 | 文件或目录不存在。  
  
    * 示例
          
          export default {    
            delete() {        
              file.delete({            
                uri: 'internal://app/my_file',            
                success: function() {                
                  console.log('call delete success.');            
                },            
                fail: function(data, code) {                
                  console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
                },
              });    
            }
          }

#### file.writeText

writeText(Object): void

写文本内容到指定文件。

    * 参数 

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
uri | string | 是 | 本地文件uri，如果文件不存在会创建文件。  
text | string | 是 | 写入的字符串。  
encoding | string | 否 | 编码格式，默认为UTF-8。  
append | boolean | 否 | 是否追加模式，默认为false。  
success | Function | 否 | 接口调用成功的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
complete | Function | 否 | 接口调用结束的回调函数。  
  
fail返回错误代码：

错误码 | 说明  
---|---  
202 | 参数错误。  
300 | I/O错误。  
  
    * 示例
          
          export default {    
            writeText() {        
              file.writeText({            
                uri: 'internal://app/test.txt',            
                text: 'Text that just for test.',            
                success: function() {                
                  console.log('call writeText success.');            
                },            
                fail: function(data, code) {                
                  console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
                },        
              });    
            }
          }

#### file.writeArrayBuffer

writeArrayBuffer(Object): void

写Buffer内容到指定文件。

    * 参数 

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
uri | string | 是 | 本地文件uri，如果文件不存在会创建文件。  
buffer | Uint8Array | 是 | 写入的Buffer。  
position | number | 否 | 文件开始写入数据的位置的偏移量，默认为0。  
append | boolean | 否 | 是否追加模式，默认为false。当设置为true时，position参数无效。  
success | Function | 否 | 接口调用成功的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
complete | Function | 否 | 接口调用结束的回调函数。  
  
fail返回错误代码：

错误码 | 说明  
---|---  
202 | 出现参数错误。  
300 | 出现I/O错误。  
  
    * 示例
          
          export default {    
            writeArrayBuffer() {       
              file.writeArrayBuffer({           
                uri: 'internal://app/test',           
                buffer: new Uint8Array(8), //buffer为Uint8Array类型           
                success: function() {                
                  console.log('call writeArrayBuffer success.');            
                },           
                fail: function(data, code) {                
                  console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
                },
              });    
            }
          }

#### file.readText

readText(Object): void

从指定文件中读取文本内容。

    * 参数 

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
uri | string | 是 | 本地文件uri。  
encoding | string | 否 | 编码格式，缺省为UTF-8。  
success | Function | 否 | 接口调用成功的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
complete | Function | 否 | 接口调用结束的回调函数。  
  
success返回值：

参数名 | 类型 | 说明  
---|---|---  
text | string | 读取到的文本内容。  
  
fail返回错误代码：

错误码 | 说明  
---|---  
202 | 出现参数错误。  
300 | 出现I/O错误。  
301 | 文件或目录不存在。  
  
    * 示例
          
          export default {    
            readText() {        
              file.readText({            
                uri: 'internal://app/text.txt',            
                success: function(data) {                
                  console.log('call readText success: ' + data.text);            
                },            
                fail: function(data, code) {                
                  console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
                },        
              });    
            }
          }

#### file.readArrayBuffer

readArrayBuffer(Object): void

从指定文件中读取Buffer内容。

    * 参数 

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
uri | string | 是 | 本地文件uri。  
position | number | 否 | 读取的起始位置，缺省为文件的起始位置。  
length | number | 否 | 需要读取的长度，缺省则读取到文件结尾。  
success | Function | 否 | 接口调用成功的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
complete | Function | 否 | 接口调用结束的回调函数。  
  
success返回值：

参数名 | 类型 | 说明  
---|---|---  
buffer | Uint8Array | 读取到的文件内容。  
  
fail返回错误代码：

错误码 | 说明  
---|---  
202 | 出现参数错误。  
300 | 出现I/O错误。  
301 | 文件或目录不存在。  
  
    * 示例
          
          export default {    
            readArrayBuffer() {        
              file.readArrayBuffer({            
                uri: 'internal://app/test',            
                position: 10,            
                length: 200,            
                success: function(data) {                
                  console.log('call readArrayBuffer success: ' + data.buffer);            
                },            
                fail: function(data, code) {                
                  console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
                },
              });    
            }
          }

#### file.access

access(Object): void

判断指定文件或目录是否存在。

    * 参数 

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
uri | string | 是 | 目录或文件uri。  
success | Function | 否 | 接口调用成功的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
complete | Function | 否 | 接口调用结束的回调函数。  
  
fail返回错误代码：

错误码 | 说明  
---|---  
202 | 出现参数错误。  
300 | 出现I/O 错误。  
301 | 文件或目录不存在。  
  
    * 示例
          
          export default {    
            access() {        
              file.access({            
                uri: 'internal://app/test',            
                success: function() {                
                  console.log('call access success.');            
                },            
                fail: function(data, code) {                
                  console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
                },        
              });    
            }
          }

#### file.mkdir

mkdir(Object): void

创建指定目录。

    * 参数 

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
uri | string | 是 | 目录的uri路径。  
recursive | boolean | 否 | 是否递归创建该目录的上级目录，缺省为false。  
success | Function | 否 | 接口调用成功的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
complete | Function | 否 | 接口调用结束的回调函数。  
  
fail返回错误代码：

错误码 | 说明  
---|---  
202 | 出现参数错误。  
300 | 出现I/O 错误。  
  
    * 示例
          
          export default {    
            mkdir() {        
              file.mkdir({            
                uri: 'internal://app/test_directory',            
                success: function() {                
                  console.log('call mkdir success.');            
                },            
                fail: function(data, code) {                
                  console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
                },
              });    
            }
          }

#### file.rmdir

rmdir(Object): void

删除指定目录。

    * 参数 

参数名 | 类型 | 必填 | 说明  
---|---|---|---  
uri | string | 是 | 目录的uri路径。  
recursive | boolean | 否 | 是否递归删除子文件和子目录，缺省为false。  
success | Function | 否 | 接口调用成功的回调函数。  
fail | Function | 否 | 接口调用失败的回调函数。  
complete | Function | 否 | 接口调用结束的回调函数。  
  
fail返回错误代码：

错误码 | 说明  
---|---  
202 | 出现参数错误。  
300 | 出现I/O 错误。  
301 | 文件或目录不存在。  
  
    * 示例
          
          export default {    
            rmdir() {        
              file.rmdir({            
                uri: 'internal://app/test_directory',            
                success: function() {                
                  console.log('call rmdir success.');            
                },            
                fail: function(data, code) {                
                  console.error('call fail callback fail, code: ' + code + ', data: ' + data);            
                },
              });    
            }
          }
