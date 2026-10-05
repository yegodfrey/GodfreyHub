---
name: document/cn/doc-guides/ability-pasteboard-guidelines-0000001077784546
title: 剪贴板开发指导
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/ability-pasteboard-guidelines-0000001077784546
source: portal
---

# 剪贴板开发指导

#### 场景介绍

同一设备的应用程序A、B之间可以借助系统剪贴板服务完成简单数据的传递，即应用程序A向剪贴板服务写入数据后，应用程序B可以从中读取出数据。

**图1** 剪贴板服务示意图  
![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113819.19546480599255405199318188936229:50001231000000:2800:F2A93DB9A609BFF7D721D384CDA064ABD9933F2B4A4448AEBF14AB0CC94FF005.jpg?needInitFileName=true?needInitFileName=true)

在使用剪贴板服务时，需要注意以下几点：
     * 只有在前台获取到焦点的应用才有读取系统剪贴板的权限（系统默认输入法应用除外）。
     * 写入到剪贴板服务中的剪贴板数据不会随应用程序结束而销毁。
     * 对同一用户而言，写入剪贴板服务的数据会被下一次写入的剪贴板数据所覆盖。
     * 在同一设备内，剪贴板单次传递内容不应超过500KB。

#### 接口说明

SystemPasteboard提供系统剪贴板操作的相关接口，比如复制、粘贴、配置回调等。PasteData是剪贴板服务操作的数据对象，一个PasteData由若干个内容条目（PasteData.Record）和一个属性集合对象（PasteData.DataProperty）组成。Record是存放剪贴板数据内容信息的最小单位，每个Record都有其特定的MIME类型，如纯文本、HTML、URI、Intent。剪贴板数据的属性信息存放在PasteData.DataProperty中，包括标签、时间戳等。

#### [h2]SystemPasteboard

SystemPasteboard提供系统剪贴板服务的操作接口，比如复制、粘贴、配置回调等。 

**表1** SystemPasteboard的主要接口接口名 | 描述  
---|---  
getSystemPasteboard(Context context) | 获取系统剪切板服务的对象实例。  
getPasteData() | 读取当前系统剪贴板中的数据。  
hasPasteData() | 判断当前系统剪贴板中是否有内容。  
setPasteData(PasteData data) | 将剪贴板数据写入到系统剪贴板。  
clear() | 清空系统剪贴板数据。  
addPasteDataChangedListener(IPasteDataChangedListener listener) | 用户程序添加系统剪贴板数据变化的回调，当系统剪贴板数据发生变化时，会触发用户程序的回调实现。  
removePasteDataChangedListener(IPasteDataChangedListener listener) | 用户程序移除系统剪贴板数据变化的回调。  
  
#### [h2]PasteData

PasteData是剪贴板服务操作的数据对象，其中内容条目定义为PasteData.Record，属性集合定义为PasteData.DataProperty。 

**表2** PasteData的主要接口接口名 | 描述  
---|---  
PasteData() | 构造器，创建一个空内容数据对象。  
creatPlainTextData(CharSequence text) | 构建一个包含纯文本内容条目的数据对象。  
creatHtmlData(String htmlText) | 构建一个包含HTML内容条目的数据对象。  
creatUriData(Uri uri) | 构建一个包含URI内容条目的数据对象。  
creatIntentData(Intent intent) | 构建一个包含Intent内容条目的数据对象。  
getPrimaryMimeType() | 获取数据对象中首个内容条目的MIME类型，如果没有查询到内容，将返回一个空字符串。  
getPrimaryText() | 获取数据对象中首个内容条目的纯文本内容，如果没有查询到内容，将返回一个空对象。  
addTextRecord(CharSequence text) | 向数据对象中添加一个纯文本内容条目，该方法会自动更新数据属性中的MIME类型集合，最多只能添加128个内容条目。  
addRecord(Record record) | 向数据对象中添加一个内容条目，该方法会自动更新数据属性中的MIME类型集合，最多只能添加128个内容条目。  
getRecordCount() | 获取数据对象中内容条目的数量。  
getRecordAt(int index) | 获取数据对象在指定下标处的内容条目，如果操作失败会返回空对象。  
removeRecordAt(int index) | 移除数据对象在指定下标处的内容条目，如果操作成功会返回true，操作失败会返回false。  
getMimeTypes() | 获取数据对象中上所有内容条目的MIME类型列表，当内容条目为空时，返回列表为空对象。  
getProperty() | 获取该数据对象的属性集合成员。  
  
**表3** PasteData中定义的常量常量名 | 描述  
---|---  
MIMETYPE_TEXT_PLAIN= "text/plain" | 纯文本的MIME类型定义。  
MIMETYPE_TEXT_HTML= "text/html" | HTML的MIME类型定义。  
MIMETYPE_TEXT_URI= "text/uri" | URI的MIME类型定义。  
MIMETYPE_TEXT_INTENT= "text/ohos.intent" | Intent的MIME类型定义。  
MAX_RECORD_NUM=128 | 单个PasteData中所能包含的Record的数量上限。  
  
#### [h2]PasteData.Record

一个PasteData中包含若干个特定MIME类型的PasteData.Record，每个Record是存放剪贴板数据内容信息的最小单位。

**表4** PasteData.Record的主要接口接口名 | 描述  
---|---  
createPlainTextRecord(CharSequence text) | 构造一个MIME类型为纯文本的内容条目。  
createHtmlTextRecord(String htmlText) | 构造一个MIME类型为HTML的内容条目。  
createUriRecord(Uri uri) | 构造一个MIME类型为URI的内容条目。  
createIntentRecord(Intent intent) | 构造一个MIME类型为Intent的内容条目。  
getPlainText() | 获取该内容条目中的文本内容，如果没有内容将返回空对象。  
getHtmlText() | 获取该内容条目中的HTML内容，如果没有内容将返回空对象。  
getUri() | 获取该内容条目中的URI内容，如果没有内容将返回空对象。  
getIntent() | 获取该内容条目中的Intent内容，如果没有内容将返回空对象。  
getMimeType() | 获取该内容条目的MIME类型。  
convertToText(Context context) | 将该内容条目的内容转为文本形式。  
  
#### [h2]PasteData.DataProperty

每个PasteData中都有一个PasteData.DataProperty成员，其中存放着该数据对象的属性集合，例如自定义标签、MIME类型集合列表等。

**表5** PasteData.DataProperty的主要接口接口名 | 描述  
---|---  
getMimeTypes() | 获取所属数据对象的MIME类型集合列表，当内容条目为空时，返回列表为空对象。  
hasMimeType(String mimeType) | 判断所属数据对象中是否包含特定MIME类型的内容。  
getTimestamp() | 获取所属数据对象被写入系统剪贴板时的时间戳，如果该数据对象尚未被写入，则返回0。  
setTag(CharSequence tag) | 设置自定义标签。  
getTag() | 获取自定义标签。  
setAdditions(PacMap extraProps) | 设置一些附加键值对信息。  
getAdditions() | 获取附加键值对信息。  
  
#### [h2]IPasteDataChangedListener

IPasteDataChangedListener是定义剪贴板数据变化回调的接口类，开发者需要实现此接口来编码触发回调时的处理逻辑。

**表6** IPasteDataChangedListener的主要接口接口名 | 描述  
---|---  
onChanged() | 当系统剪贴板数据发生变化时的回调接口。  
  
#### 开发步骤

     1. 应用A获取系统剪贴板服务。
            
            SystemPasteboard pasteboard = SystemPasteboard.getSystemPasteboard(appContext);

     2. 应用A向系统剪贴板中写入一条纯文本数据。
            
            if (pasteboard != null) {
                pasteboard.setPasteData(PasteData.creatPlainTextData("Hello, world!"));
            }

     3. 应用B从系统剪贴板读取数据，将数据对象中的首个文本类型（纯文本/HTML）内容信息在控件中显示，忽略其他类型内容。
            
            PasteData pasteData = pasteboard.getPasteData();
            if (pasteData == null) {
                return;
            }
            DataProperty dataProperty = pasteData.getProperty();
            boolean hasHtml = dataProperty.hasMimeType(PasteData.MIMETYPE_TEXT_HTML);
            boolean hasText = dataProperty.hasMimeType(PasteData.MIMETYPE_TEXT_PLAIN);
            if (hasHtml || hasText) {
                Text text = (Text) findComponentById(ResourceTable.Id_text);
                for (int i = 0; i < pasteData.getRecordCount(); i++) {
                    PasteData.Record record = pasteData.getRecordAt(i);
                    String mimeType = record.getMimeType();
                    if (mimeType.equals(PasteData.MIMETYPE_TEXT_HTML)) {
                        text.setText(record.getHtmlText());
                        break;
                    } else if (mimeType.equals(PasteData.MIMETYPE_TEXT_PLAIN)) {
                        text.setText(record.getPlainText().toString());
                        break;
                    } else {
                        // skip records of other Mime type 
                    }
                }
            }

     4. 应用C注册添加系统剪贴板数据变化回调，当系统剪贴板数据发生变化时触发处理逻辑。
            
            IPasteDataChangedListener listener = new IPasteDataChangedListener() {
                @Override
                public void onChanged() {
                    PasteData pasteData = pasteboard.getPasteData();
                    if (pasteData == null) {
                        return;
                    }
                    // Operations to handle data change on the system pasteboard
                }
            };
            pasteboard.addPasteDataChangedListener(listener);
