---
name: document/cn/quickApp-References/quickgame-api-file-0000001084194212
title: 文件
uri: https://developer.huawei.com/consumer/cn/doc/quickApp-References/quickgame-api-file-0000001084194212
---

# 文件

![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260121135252.99065151561496623180950872573910:50001231000000:2800:DB03D208AB13BDA64BA06CB9B8CF89CAB94E1BA0E83B4F3CC76DEDAFB56FAA94.png)  
从1078版本开始，接口前缀由hbs调整为qg，原hbs仍支持。  

#### 接口定义

|接口|描述|
|:-----------------------------------------------------------------------------------------------------------------|:-----------------------------------|
|[qg.getFileSystemManager()](#section10341171144119)|获取全局唯一的文件管理器，返回FileSystemManager对象。|
|[FileSystemManager.access(Object object)](#section16835114744317)|判断文件/目录是否存在。|
|[FileSystemManager.accessSync(string path)](#section598113562464)|判断文件/目录是否存在（同步方法）。|
|[FileSystemManager.copyFile(Object object)](#section133093296490)|复制文件。|
|[FileSystemManager.copyFileSync(string srcPath, string destPath)](#section108355345414)|复制文件（同步方法）。|
|[FileSystemManager.mkdir(Object object)](#section138631329185712)|创建目录。|
|[FileSystemManager.mkdirSync(string dirPath, boolean recursive)](#section5460152414011)|创建目录（同步方法）。|
|[FileSystemManager.rmdir(Object object)](#section24842533716)|删除目录。|
|[FileSystemManager.rmdirSync(Object object)](#section10335199141115)|删除目录（同步方法）。|
|[FileSystemManager.readdir(Object object)](#section5668155201515)|读取目录内文件列表。|
|[Array FileSystemManager.readdirSync(string dirPath)](#section203828481815)|读取目录内文件列表（同步方法）。|
|[FileSystemManager.readFile(Object object)](#section1364511142512)|读取本地文件内容。|
|[string\|ArrayBuffer FileSystemManager.readFileSync(string filePath, string encoding)](#section159564163333)|读取本地文件内容（同步方法）。|
|[FileSystemManager.rename(Object object)](#section167117244351)|重命名文件，可以把文件从oldPath移动到newPath。|
|[FileSystemManager.renameSync(string oldPath, string newPath)](#section11229128113711)|重命名文件，可以把文件从oldPath移动到newPath（同步方法）。|
|[FileSystemManager.stat(Object object)](#section63881619204019)|获取文件stats对象。|
|[Stats\|Array FileSystemManager.statSync(string path, boolean recursive)](#section118961049134412)|获取文件stats对象（同步方法）。|
|[FileSystemManager.unlink(Object object)](#section6341125634614)|删除文件。|
|[FileSystemManager.unlinkSync(string path)](#section18213143245617)|删除文件（同步方法）。|
|[FileSystemManager.unzip(Object object)](#section10435456105819)|解压缩文件。|
|[FileSystemManager.writeFile(Object object)](#section1485820518210)|写文件，写入内容将覆盖原有内容。|
|[FileSystemManager.writeFileSync(string filePath, string\|ArrayBuffer data, string encoding)](#section16609015764)|写文件（同步方法）。|
|[FileSystemManager.saveFile(Object object)](#section177563353918)|保存临时文件到本地。|
|[FileSystemManager.saveFileSync(string tempFilePath, string filePath)](#section19158114731211)|保存临时文件到本地（同步方法）。|
|[FileSystemManager.appendFile(Object object)](#section5810142314160)|在文件结尾追加内容。|
|[FileSystemManager.appendFileSync(Object object)](#section19450217225)|FileSystemManager.appendFile的同步版本。|
|[FileSystemManager.getFileInfo(Object object)](#section1560164214256)|获取本地临时文件或本地用户文件的文件信息。|
|[FileSystemManager.removeSavedFile(Object object)](#section1609130102719)|删除该快游戏下已保存的本地缓存文件。|
|[FileSystemManager.readCompressedFile(Object object)](#section143431121168)|读取指定压缩类型的本地文件内容。|
|[FileSystemManager.readCompressedFileSync(Object object)](#section202811369211)|同步读取指定压缩类型的本地文件内容。|
|[Stats](#section192211048122811)|描述文件状态的对象。|
|[FileStats](#section1487715573011)|每个FileStats对象包含path和Stats。|

#### qg.getFileSystemManager()

* 描述 获取全局唯一的文件管理器，返回FileSystemManager对象。

#### FileSystemManager.access(Object object)

* 描述 判断文件/目录是否存在。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:---------------------------------------------------------------------------|
  |path|string|M|要判断是否存在的文件/目录路径。|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function|O|接口调用失败的回调函数，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001084194212__li1538274410316)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * fail回调函数参数  

    |参数名称|说明|
    |:------|:----------------------------|
    |errCode|[错误码](#section1953819108125)。|
    |errMsg|错误信息。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  fileSystemManager.access({
      path : "file path",
      success : function() {
          console.log("access success" );
      },
      fail : function(data) {
          console.log("access fail " + JSON.stringify(data));
      },
      complete : function() {
          console.log("access complete" );
      }
  })
  ```

#### FileSystemManager.accessSync(string path)

* 描述 判断文件/目录是否存在（同步方法）。

* 参数  

  |参数|类型|说明|
  |:---|:-----|:---------------|
  |path|string|要判断是否存在的文件/目录路径。|

* 错误码  

  |错误码|错误信息|说明|
  |:--|:------------------------|:--------|
  |1|no such file or directory|文件/目录不存在。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  try {
      fileSystemManager.accessSync('file path');
  } catch (error) {
      console.log('error = ' + error);
  }
  ```

#### FileSystemManager.copyFile(Object object)

* 描述 复制文件。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:--------------------------------------------------------------------------------------|
  |srcPath|string|M|源文件路径，只可以是本地文件，如果非本地文件，需调用[FileSystemManager.saveFile](#section177563353918)接口将文件保存到本地。|
  |destPath|string|M|目标文件路径。|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function|O|接口调用失败的回调函数，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001084194212__li1286933173413)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * fail回调函数参数  

    |参数名称|说明|
    |:------|:----------------------------|
    |errCode|[错误码](#section1953819108125)。|
    |errMsg|错误信息。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  fileSystemManager.copyFile({
      srcPath : 'source file',  //源文件路径，只可以是普通文件
      destPath : 'target path',
      success : function() {
          console.log("copy success" );
      },
      fail : function(data) {
          console.log("copy fail " + JSON.stringify(data));
      },
      complete : function() {
          console.log("copy complete" );
      }
  })
  ```

#### FileSystemManager.copyFileSync(string srcPath, string destPath)

* 描述 复制文件（同步方法）。

* 参数  

  |参数|类型|说明|
  |:-------|:-----|:--------------------------------------------------------------------------------------|
  |srcPath|string|源文件路径，只可以是本地文件，如果非本地文件，需调用[FileSystemManager.saveFile](#section177563353918)接口将文件保存到本地。|
  |destPath|string|目标文件路径。|

* 错误码  

  |错误码|错误信息|说明|
  |:--|:------------------------|:----------------------|
  |1|no such file or directory|源文件不存在，或目标文件路径的上层目录不存在。|
  |2|permission denied|指定目标文件路径没有写权限。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  try {
      fileSystemManager.copyFileSync('file path', 'dest path');
  } catch (error) {
      console.log('error = ' + error);
  }
  ```

#### FileSystemManager.mkdir(Object object)

* 描述 创建目录。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:--------|:-------|:----------|:--------------------------------------------------------------------------|
  |dirPath|string|M|创建的目录路径。|
  |recursive|boolean|O|是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。默认值为false。|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function|O|接口调用失败的回调函数，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001084194212__li349102315366)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * fail回调函数参数  

    |参数名称|说明|
    |:------|:----------------------------|
    |errCode|[错误码](#section1953819108125)。|
    |errMsg|错误信息。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  fileSystemManager.mkdir({
      dirPath: 'file path',
      success : function() {
          console.log("mkdir success" );
      },
      fail : function(data) {
          console.log("mkdir fail " + JSON.stringify(data));
      },
      complete : function() {
          console.log("mkdir complete" );
      }
  })
  ```

#### FileSystemManager.mkdirSync(string dirPath, boolean recursive)

* 描述 创建目录（同步方法）。

* 参数  

  |参数|类型|说明|
  |:--------|:------|:--------------------------------------------------------|
  |dirPath|string|创建的目录路径。|
  |recursive|boolean|是否在递归创建该目录的上级目录后再创建该目录。如果对应的上级目录已经存在，则不创建该上级目录。默认值为false。|

* 错误码  

  |错误码|错误信息|说明|
  |:--|:------------------------|:-------------|
  |1|no such file or directory|上级目录不存在。|
  |2|permission denied|指定目标文件路径没有写权限。|
  |3|file already exists|有同名文件或目录。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  try {
      fileSystemManager.mkdirSync('dir path', false);
  } catch (error) {
      console.log('error = ' + error);
  }
  ```

#### FileSystemManager.rmdir(Object object)

* 描述 删除目录。

<!-- -->

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:--------|:-------|:----------|:----------------------------------------------------------------------------|
  |dirPath|string|M|要删除的目录路径。|
  |recursive|boolean|O|是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。默认值为false。|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function|O|接口调用失败的回调函数，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001084194212__li11209141719386)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * fail回调函数参数  

    |参数名称|说明|
    |:------|:----------------------------|
    |errCode|[错误码](#section1953819108125)。|
    |errMsg|错误信息。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  fileSystemManager.rmdir({
      dirPath : 'file path',
      success : function() {
          console.log("rmdir success");
      },
      fail : function(data) {
          console.log("rmdir fail " + JSON.stringify(data));
      },
      complete : function() {
          console.log("rmdir complete" );
      }
  })
  ```

#### FileSystemManager.rmdirSync(Object object)

* 描述 删除目录（同步方法）。

* 参数object  

  |参数|类型|说明|
  |:--------|:------|:-------------------------------------------------|
  |dirPath|string|要删除的目录路径。|
  |recursive|boolean|是否递归删除目录。如果为 true，则删除该目录和该目录下的所有子目录以及文件。默认值为false。|

* 错误码  

  |错误码|错误信息|说明|
  |:--|:------------------------|:-----|
  |1|no such file or directory|目录不存在。|
  |7|directory not empty|目录不为空。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  try {
      fileSystemManager.rmdirSync('dir path', false);
  } catch (error) {
      console.log('error = ' + error);
  }
  ```

#### FileSystemManager.readdir(Object object)

* 描述 读取目录内文件列表。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:----------------------------------------------------------------------------|
  |dirPath|string|M|要读取的目录路径。|
  |success|function|O|接口调用成功的回调函数，请参见[success回调函数参数](#ZH-CN_TOPIC_0000001084194212__li14326399404)。|
  |fail|function|O|接口调用失败的回调函数，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001084194212__li8383945184011)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * success回调函数参数  

    |参数|类型|说明|
    |:----|:----------|:-----------|
    |files|arraystring|指定目录下的文件名数组。|

  * fail回调函数参数  

    |参数名称|说明|
    |:------|:----------------------------|
    |errCode|[错误码](#section1953819108125)。|
    |errMsg|错误信息。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  fileSystemManager.readdir({
      dirPath : 'file path',
      success : function(res) {
          console.log("readdir success res = " + JSON.stringify(res));
      },
      fail : function(data) {
          console.log("readdir fail " + JSON.stringify(data));
      },
      complete : function() {
          console.log("readdir complete" );
      }
  })
  ```

#### Array FileSystemManager.readdirSync(string dirPath)

* 描述 读取目录内文件列表（同步方法）。

* 参数  

  |参数|类型|说明|
  |:------|:-----|:--------|
  |dirPath|string|要读取的目录路径。|

* 返回参数 Array files。

* 错误码  

  |错误码|错误信息|说明|
  |:--|:------------------------|:-----|
  |1|no such file or directory|目录不存在。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  try {
      var result = fileSystemManager.readdirSync('dir path');
      console.log('result = ' + JSON.stringify(result));
  } catch (error) {
      console.log('error = ' + error);
  }
  ```

#### FileSystemManager.readFile(Object object)

* 描述 读取本地文件内容。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:----------------------------------------------------------------------------|
  |filePath|string|M|要读取的文件的路径。 说明： 路径中请勿包含@, #, %等特殊字符。|
  |encoding|string|O|指定读取文件的字符编码，合法值为binary和utf8，默认为 binary。|
  |success|function|O|接口调用成功的回调函数，请参见[success回调函数参数](#ZH-CN_TOPIC_0000001084194212__li16388858457)。|
  |fail|function|O|接口调用失败的回调函数，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001084194212__li14816312134519)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * success回调函数参数  

    |参数|类型|说明|
    |:---|:-----------------|:----|
    |data|string/arraybuffer|文件内容。|

  * fail回调函数参数  

    |参数名称|说明|
    |:------|:----------------------------|
    |errCode|[错误码](#section1953819108125)。|
    |errMsg|错误信息。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  fileSystemManager.readFile({
      filePath : 'file path',
      success : function(res) {
          console.log("readFile success res = " + JSON.stringify(res));
      },
      fail : function(data) {
          console.log("readFile fail " + JSON.stringify(data));
      },
      complete : function() {
          console.log("readFile complete" );
      }
  })
  ```

#### string\|ArrayBuffer FileSystemManager.readFileSync(string filePath, string encoding)

* 描述 读取本地文件内容（同步方法）。

* 参数  

  |参数|类型|说明|
  |:-------|:-----|:----------------------------------|
  |filePath|string|要读取的文件的路径。 说明： 路径中请勿包含@, #, %等特殊字符。|
  |encoding|string|指定读取文件的字符编码，合法值为binary和utf8。|

* 返回参数 string\|ArrayBuffer data

* 错误码  

  |错误码|错误信息|说明|
  |:--|:------------------------|:-----|
  |1|no such file or directory|目录不存在。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  try {
      var result = fileSystemManager.readFileSync('file path', 'binary');
      console.log('result = ' + JSON.stringify(result));
  } catch (error) {
      console.log('error = ' + error);
  }
  ```

#### FileSystemManager.rename(Object object)

* 描述 重命名文件，可以把文件从oldPath移动到newPath。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:--------------------------------------------------------------------------|
  |oldPath|string|M|源文件路径，可以是普通文件或目录。|
  |newPath|string|M|新文件路径。|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function|O|接口调用失败的回调函数，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001084194212__li196701554711)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * fail回调函数参数  

    |参数名称|说明|
    |:------|:----------------------------|
    |errCode|[错误码](#section1953819108125)。|
    |errMsg|错误信息。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  fileSystemManager.rename({
      oldPath : 'file path',
      newPath : 'target path',
      success : function() {
          console.log("rename success" );
      },
      fail : function(data) {
          console.log("rename fail " + JSON.stringify(data));
      },
      complete : function() {
          console.log("rename complete" );
      }
  })
  ```

#### FileSystemManager.renameSync(string oldPath, string newPath)

* 描述 重命名文件，可以把文件从oldPath移动到newPath（同步方法）。

* 参数  

  |参数|类型|说明|
  |:------|:-----|:----------------|
  |oldPath|string|源文件路径，可以是普通文件或目录。|
  |newPath|string|新文件路径。|

* 错误码  

  |错误码|错误信息|说明|
  |:--|:------------------------|:----------------------|
  |1|no such file or directory|源文件不存在，或目标文件路径的上层目录不存在。|
  |2|permission denied|没有写权限。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  try {
      fileSystemManager.renameSync('old path', 'new path');
  } catch (error) {
      console.log('error = ' + error);
  }
  ```

#### FileSystemManager.stat(Object object)

* 描述 获取文件stats对象。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:--------|:-------|:----------|:-------------------------------------------------------------------------------|
  |path|string|M|文件/目录路径。|
  |recursive|boolean|O|是否递归获取目录下的每个文件的stats信息。默认值为false。|
  |success|function|O|接口调用成功的回调函数，请参见[success回调函数参数](#ZH-CN_TOPIC_0000001084194212__li54381436104812)。|
  |fail|function|O|接口调用失败的回调函数，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001084194212__li592021412493)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * success回调函数参数  

    |参数|类型|说明|
    |:----|:---------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
    |stats|[Stats](#section192211048122811)/Array\<[FileStats](#section1487715573011)\>|* 当recursive为false时，返回一个[Stats](#section192211048122811)对象。 * 当recursive 为true，且path是一个目录的路径时，res.stats 是一个Array，数组的每一项是一个对象，每个对象包含path和stats。|

  * fail回调函数参数  

    |参数名称|说明|
    |:------|:----------------------------|
    |errCode|[错误码](#section1953819108125)。|
    |errMsg|错误信息。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  fileSystemManager.stat({
      path: 'file path',
      success : function(res) {
          //当 recursive 为 false 时，res.stats 是一个 Stats 对象
          var st = res.stats;
      },
      fail : function(data) {
          console.log("rename fail " + JSON.stringify(data));
      },
      complete : function() {
          console.log("stat complete" );
      }
  })
  ```

#### Stats\|Array FileSystemManager.statSync(string path, boolean recursive)

* 描述 获取文件stats对象（同步方法）。

* 参数  

  |参数|类型|说明|
  |:--------|:------|:----------------------|
  |path|string|文件/目录路径。|
  |recursive|boolean|是否递归获取目录下的每个文件的stats信息。|

* 返回参数  

  |类型|说明|
  |:----------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------|
  |[Stats](#section192211048122811)\|Array\<[FileStats](#section1487715573011)\>|* 当recursive为 false 时，res.stats是一个[Stats](#section192211048122811)对象。 * 当recursive 为 true且path 是一个目录的路径时，res.stats是一个Array，数组的每一项是一个对象，每个对象包含path和stats。|

* 错误码  

  |错误码|错误信息|说明|
  |:--|:------------------------|:-----|
  |1|no such file or directory|文件不存在。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  try {
      var result = fileSystemManager.statSync('path', false);
      console.log('result = ' + JSON.stringify(result));
  } catch (error) {
      console.log('error = ' + error);
  }
  ```

#### FileSystemManager.unlink(Object object)

* 描述 删除文件。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------|:----------|:---------------------------------------------------------------------------|
  |filePath|string|M|要删除的文件路径。|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function|O|接口调用失败的回调函数，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001084194212__li1553121075113)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * fail回调函数参数  

    |参数名称|说明|
    |:------|:----------------------------|
    |errCode|[错误码](#section1953819108125)。|
    |errMsg|错误信息。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  fileSystemManager.unlink({
      filePath : 'file path',
      success : function() {
          console.log("unlink success" );
      },
      fail : function(data) {
          console.log("unlink fail " + JSON.stringify(data));
      },
      complete : function() {
          console.log("unlink complete" );
      }
  })
  ```

#### FileSystemManager.unlinkSync(string path)

* 描述 删除文件（同步方法）。

* 参数  

  |参数|类型|说明|
  |:-------|:-----|:--------|
  |filePath|string|要删除的文件路径。|

* 错误码  

  |错误码|错误信息|说明|
  |:--|:------------------------|:-----|
  |1|no such file or directory|文件不存在。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  try {
      fileSystemManager.unlinkSync('path');
  } catch (error) {
      console.log('error = ' + error);
  }
  ```

#### FileSystemManager.unzip(Object object)

* 描述 解压缩文件。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:----------|:-------|:----------|:-------------------------------------------------------------------------|
  |zipFilePath|string|M|源文件路径，只可以是 zip 压缩文件。|
  |targetPath|string|M|目标目录路径。|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function|O|接口调用失败的回调函数，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001084194212__li92103346520)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * fail回调函数参数  

    |参数名称|说明|
    |:------|:----------------------------|
    |errCode|[错误码](#section1953819108125)。|
    |errMsg|错误信息。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  fileSystemManager.unzip({
      zipFilePath: 'file path',
      targetPath: 'target_path',
      success : function() {console.log("unzip success" );},
      fail : function(data) {console.log("unzip fail " + JSON.stringify(data));},
      complete : function() {console.log("unzip complete" );}
  })
  ```

#### FileSystemManager.writeFile(Object object)

* 描述 写文件，写入内容将覆盖原有内容。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-----------------|:----------|:--------------------------------------------------------------------------|
  |filePath|string|M|要写入的文件路径。|
  |data|string/arraybuffer|M|要写入的文本或二进制数据。|
  |encoding|string|O|指定写入文件的字符编码。合法值为utf8和binary，默认值为utf8。|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function|O|接口调用失败的回调函数，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001084194212__li541182516536)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * fail回调函数参数  

    |参数名称|说明|
    |:------|:----------------------------|
    |errCode|[错误码](#section1953819108125)。|
    |errMsg|错误信息。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  fileSystemManager.writeFile({
      filePath : 'file path',
      data: 'data string or arraybuffer',
      success : function() {
          console.log("writeFile success" );
      },
      fail : function(data) {
          console.log("writeFile fail " + JSON.stringify(data));
      },
      complete : function() {
          console.log("writeFile complete" );
      }
  })
  ```

#### FileSystemManager.writeFileSync(string filePath, string\|ArrayBuffer data, string encoding)

* 描述 写文件（同步方法）。

* 参数  

  |参数|类型|说明|
  |:-------|:-----------------|:---------------------------|
  |filePath|string|要写入的文件路径。|
  |data|string/arraybuffer|要写入的文本或二进制数据。|
  |encoding|string|指定写入文件的字符编码。合法值为utf8和binary。|

* 错误码  

  |错误码|错误信息|说明|
  |:--|:------------------------|:----------------|
  |1|no such file or directory|指定的文件不存在, 或是一个目录。|
  |2|permission denied|指定目标文件路径没有写权限。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  try {
      fileSystemManager.writeFileSync('file path', 'data', 'binary');
  } catch (error) {
      console.log('error = ' + error);
  }
  ```

#### FileSystemManager.saveFile(Object object)

* 描述 保存临时文件到本地。此接口会移动临时文件，因此调用成功后，tempFilePath将不可用。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-----------|:-------|:----------|:-----------------------------------------------------------------------------|
  |tempFilePath|string|M|临时存储文件路径。|
  |filePath|string|M|要存储的文件路径。|
  |success|function|O|接口调用成功的回调函数，请参见[success回调函数参数](#ZH-CN_TOPIC_0000001084194212__li162825447545)。|
  |fail|function|O|接口调用失败的回调函数，[fail回调函数参数](#ZH-CN_TOPIC_0000001084194212__li1739015719544)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * success回调函数参数  

    |参数|类型|说明|
    |:------------|:-----|:--------|
    |savedFilePath|string|存储后的文件路径。|

  * fail回调函数参数  

    |参数名|说明|
    |:------|:----------------------------|
    |errCode|[错误码](#section1953819108125)。|
    |errMsg|错误信息。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  fileSystemManager.saveFile({
      tempFilePath: 'temp file path',
      filePath: 'target file path',
      success : function(res) {
          console.log("saveFile success res = " + JSON.stringify(res));
      },
      fail : function(data) {
          console.log("saveFile fail " + JSON.stringify(data));
      },
      complete : function() {
          console.log("saveFile complete" );
      }
  })
  ```

#### FileSystemManager.saveFileSync(string tempFilePath, string filePath)

* 描述 保存临时文件到本地（同步方法）。此接口会移动临时文件，因此调用成功后，tempFilePath将不可用。

* 参数  

  |参数|类型|说明|
  |:-----------|:-----|:--------|
  |tempFilePath|string|临时存储文件路径。|
  |filePath|string|要存储的文件路径。|

* 错误码  

  |错误码|错误信息|说明|
  |:--|:------------------------|:----------------|
  |1|no such file or directory|指定的文件不存在, 或是一个目录。|
  |2|permission denied|指定目标文件路径没有写权限。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  try {
      fileSystemManager.saveFileSync('temp file path', 'file path');
  } catch (error) {
      console.log('error = ' + error);
  }
  ```

#### FileSystemManager.appendFile(Object object)

* 描述 在文件结尾追加内容。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-----------------|:----------|:---------------------------------------------------------------------------|
  |filePath|string|M|要写入的文件路径。|
  |data|string/arraybuffer|M|要写入的文本或二进制数据。|
  |encoding|string|O|指定写入文件的字符编码，合法值为binary和utf8，默认为 utf8。|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function|O|接口调用失败的回调函数，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001084194212__li1376942335614)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * fail回调函数参数  

    |参数名|说明|
    |:------|:----------------------------|
    |errCode|[错误码](#section1953819108125)。|
    |errMsg|错误信息。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  fileSystemManager.appendFile({
      filePath: 'file path',
      data: 'data',
      encoding: 'binary',
      success : function() {
          console.log("appendFile success ");
      },
      fail : function(data) {
          console.log("appendFile fail " + JSON.stringify(data));
      },
      complete : function() {
          console.log("appendFile  complete" );
      }
  })
  ```

#### FileSystemManager.appendFileSync(Object object)

* 描述 FileSystemManager.appendFile的同步版本。

* 参数object  

  |参数|类型|说明|
  |:-------|:-----------------|:---------------------------|
  |filePath|string|要写入的文件路径。|
  |data|string/arraybuffer|要写入的文本或二进制数据。|
  |encoding|string|指定写入文件的字符编码，合法值为binary和utf8。|

* 错误码  

  |错误码|错误信息|说明|
  |:--|:------------------------|:---------------|
  |1|no such file or directory|指定的文件不存在，或是一个目录。|
  |2|permission denied|指定目标文件路径没有写权限。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  try {
      fileSystemManager.appendFileSync('file path', 'data', 'binary');
  } catch (error) {
      console.log('error = ' + error);
  }
  ```

#### FileSystemManager.getFileInfo(Object object)

* 描述 获取本地临时文件或本地用户文件的文件信息。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------------------|:----------|:-------------------------------------------------------------------------------|
  |filePath|string|M|要读取的文件路径。|
  |success|function|O|接口调用成功的回调函数，请参见[success回调函数参数](#ZH-CN_TOPIC_0000001084194212__li59991756155711)。|
  |fail|function(object res)|O|接口调用失败的回调函数，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001084194212__li1699945645710)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * success回调函数参数  

    |参数|类型|说明|
    |:---|:-----|:-----------|
    |size|number|文件大小，以字节为单位。|

  * fail回调函数参数  

    |参数名|说明|
    |:------|:----------------------------|
    |errCode|[错误码](#section1953819108125)。|
    |errMsg|错误信息。|

#### FileSystemManager.removeSavedFile(Object object)

* 描述 删除该快游戏下已保存的本地缓存文件。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------|:-------------------|:----------|:-------------------------------------------------------------------------|
  |filePath|string|M|要删除的文件路径。|
  |success|function|O|接口调用成功的回调函数。|
  |fail|function(Object res)|O|接口调用失败的回调函数，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001084194212__li43418525583)。|
  |complete|function|O|若有函数传入，将在成功、失败后调用该函数。|

  * fail回调函数参数  

    |参数名|说明|
    |:------|:----------------------------|
    |errCode|[错误码](#section1953819108125)。|
    |errMsg|错误信息。|

#### FileSystemManager.readCompressedFile(Object object)

* 描述 读取指定压缩类型的本地文件内容。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------------------|:-------|:----------|:------------------------------------------------------------------------------|
  |filePath|string|M|要写入的文件路径。|
  |compressionAlgorithm|string|M|文件的压缩类型。目前仅支持填写"br"，即brotli压缩文件。|
  |success|function|O|接口调用成功的回调函数，请参见[success回调函数参数](#ZH-CN_TOPIC_0000001084194212__li1512314192511)。|
  |fail|function|O|接口调用失败的回调函数，请参见[fail回调函数参数](#ZH-CN_TOPIC_0000001084194212__li152381223102515)。|
  |complete|function|O|接口调用完成的回调函数。当有函数传入时，将在调用成功和调用失败后调用该函数。|

  * success回调函数参数  

    |参数名|类型|说明|
    |:---|:----------|:----|
    |data|arraybuffer|文件内容。|

  * fail回调函数参数  

    |参数名|说明|
    |:------|:----------------------------|
    |errCode|[错误码](#section1953819108125)。|
    |errMsg|错误信息。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  fileSystemManager.readCompressedFile({
      filePath :`${rt.env.USER_DATA_PATH}/test.br`,
      compressionAlgorithm: 'br',
      success : function(res) {
          console.log("readCompressedFile success data: " + JSON.stringify(res?.data));
      },
      fail : function(data) {
          console.log("readCompressedFile fail: " + JSON.stringify(data));
      },
      complete : function() {
          console.log("readCompressedFile complete");
      }
  })
  ```

#### FileSystemManager.readCompressedFileSync(Object object)

* 描述 同步读取指定压缩类型的本地文件内容。

* 参数object  

  |参数|类型|必填(M)/选填(O)|说明|
  |:-------------------|:-----|:----------|:-------------------------------|
  |filePath|string|M|要写入的文件路径。|
  |compressionAlgorithm|string|M|文件的压缩类型。目前仅支持填写"br"，即brotli压缩文件。|

* 返回参数  

  |参数名|类型|说明|
  |:---|:----------|:----|
  |data|arraybuffer|文件内容。|

* 示例代码

  ```
  var fileSystemManager = qg.getFileSystemManager();
  try {
      var result = fileSystemManager.readCompressedFileSync({
          filePath :`${rt.env.USER_DATA_PATH}/test.br`,
          compressionAlgorithm: 'br',
      });
      console.log("readCompressedFileSync success data: " + JSON.stringify(result));
  } catch (error) {
      console.log('readCompressedFileSync error: ' + JSON.stringify(error));
  }
  ```

#### Stats

* 描述 描述文件状态的对象。

* 属性  

  |属性|类型|说明|
  |:---------------|:-----|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
  |mode|string|文件的类型和存取的权限，对应POSIX stat.st_mode。|
  |size|number|文件大小，单位：B，对应POSIX stat.st_size。 说明： 如果您在manifest.json中指定的minPlatformVersion大于或等于1126，该字段会返回准确的文件字节数。如果您指定的minPlatformVersion小于1126，则该字段返回的值会比实际值多一个字节。|
  |lastAccessedTime|number|文件最近一次被存取或被执行的时间，UNIX时间戳，对应POSIX stat.st_atime。|
  |lastModifiedTime|number|文件最后一次被修改的时间，UNIX时间戳，对应POSIX stat.st_mtime。|

* 方法  

  |方法名称|说明|
  |:--------------------------|:---------------|
  |boolean Stats.isDirectory()|判断当前文件是否是一个目录。|
  |boolean Stats.isFile()|判断当前文件是否是一个普通文件。|

#### FileStats

* 描述 每个FileStats对象包含path和Stats。

* 属性  

  |属性|类型|说明|
  |:----|:-------------------------------|:-------------------|
  |path|string|文件/目录路径。|
  |stats|[Stats](#section192211048122811)|Stats 对象，即描述文件状态的对象。|

#### 错误码

|错误码|错误信息|说明|
|:--|:-----------------------------------------------------|:-----------------------------------------------------------------------------------------------------------|
|-1|unknown error occurred|未知错误。|
|0|file operate success|成功。|
|1|no such file or directory|找不到文件或目录。|
|2|permission denied|权限错误。|
|3|file already exists|文件已存在。|
|4|not a directory|非文件路径。|
|5|not a file|非文件。|
|6|the maximum size of the file storage limit is exceeded|超过了文件存储空间限制。|
|7|directory not empty|目录非空。|
|8|create directory fail|创建文件路径失败。|
|9|unsupported compression algorithm|不支持的文件压缩类型。|
|10|decompress fail|解压失败。例如，压缩文件已损坏，或者压缩文件实际使用的压缩算法与传入的[compressionAlgorithm](#ZH-CN_TOPIC_0000001084194212__p2099214992116)不一致。|

#### 相关链接

#### FAQ

* [调用FileSystemManager.rmdir删除目录，执行返回成功，但实际上并没有清除缓存，如何处理？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-faq-api-0000002453354829#section1214133153817)
* [快游戏使用 FileSystemManager.readfile 读文件，日志显示file operate success，但没打印数据，如何处理？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-faq-api-0000002453354829#section20303631123812)
* [调用FileSystemManager.rmdirSync时出现"no such file or directory"的错误，如何处理？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-faq-api-0000002453354829#section10758731193811)
* [调用FileSystemManager.copyFile将文件写入缓存，出现"no such file or directory"，如何处理？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-faq-api-0000002453354829#section8911163193815)
* [调用FileSystemManager.saveFile接口时出现"{"errCode":6,"errMsg":"the maximum size of the file storage limit is exceeded"}"的错误，如何处理？](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickgame-faq-api-0000002453354829#section1210233243810)  
