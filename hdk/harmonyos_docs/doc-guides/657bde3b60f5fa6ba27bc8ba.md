---
name: document/cn/doc-guides/ide-command-line-hdc-0000001237908229
title: hdc使用指导
uri: https://developer.huawei.com/consumer/cn/doc/doc-guides/ide-command-line-hdc-0000001237908229
source: portal
---

# hdc使用指导

#### 简介

hdc（HarmonyOS Device Connector）是HarmonyOS为开发人员提供的用于调试的命令行工具，通过该工具可以在windows/linux/mac系统上与真实设备或者模拟器进行交互。

#### 环境准备

hdc工具通过HarmonyOS sdk获取，存放于sdk的toolchains目录下，使用时将sdk的toolchains目录添加到环境变量。

#### 注意事项

     * 使用hdc，如果出现异常，可以尝试通过hdc kill -r命令杀掉并重启hdc服务。
     * 如果出现hdc list targets获取不到设备信息的情况，可以通过任务管理器查看是否有hdc进程存在。若进程存在，则通过hdc kill -r命令杀掉该进程。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113449.82750986604698762902336226071359:50001231000000:2800:F1E8029065D8421359F5479C1F99917F6DB46BE539BE342A951E0893709C87A1.png?needInitFileName=true?needInitFileName=true)

     * 命令行中被[]修饰的参数表示可选参数。
     * 命令行中的参数若是斜体，表示在使用时该参数需替换为具体的信息，例如：file send _local remote_ 命令中的local和remote，使用时需替换为本地待发送和远端待接收的文件路径。

#### 开发指导

#### [h2]全局option

Option | 说明  
---|---  
-t [key] [command] | 指定连接唯一标识的目标设备。  
-s SOCKSPEC | 指定服务监听的socket信息。  
-h | 打印hdc帮助信息。  
-v | 打印hdc版本信息。  
  
     1. 显示hdc相关的帮助信息，命令格式如下：
            
            **hdc -h**

        * 返回值：

返回hdc的帮助信息。

        * 使用方法：
              
              hdc -h

     2. 显示hdc的版本信息，命令格式如下：
            
            **hdc -v**

        * 返回值：

返回hdc的版本信息。

        * 使用方法：
              
              hdc -v

     3. 连接设备时，若仅有一台，无需指定设备标识。若有多台，一次仅能连接一台，每次连接时需要指定连接设备的标识，命令格式如下：
            
            **hdc********-t****[****key] [command]**

        * 参数： 

**参数** 名 | **说明**  
---|---  
key | IP地址或USB序列号。  
command | hdc支持的命令。  
  
        * 返回值：

若连接的设备不存在，返回 Invalid arguments ***。若附件的命令不存在，返回unknown command ***。

        * 使用方法：

该方法需要与具体的操作命令搭配使用，下面以shell命令举例：
              
              hdc list targets  （获取设备信息）
              hdc -t [key] shell （-t后面添加的 _key_ 需要替换为查询到的某一个设备信息）

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113449.91924712164009937114202373067539:50001231000000:2800:6F18DA988F5F66D8150A1637863E0CC1C8AAA5E9B71BDB091837A60FF4A267B8.png?needInitFileName=true?needInitFileName=true)

一台开发机可连接多个设备，每个设备有唯一的标识。如果通过网络连接设备，标识为IP地址，如果通过usb连接，标识为USB序列号。该命令需要跟随具体的操作命令。

#### [h2]查询相关命令行

命令 | 说明  
---|---  
help | 打印hdc帮助信息。  
version | 打印hdc版本信息。  
list targets [-v] | 查询已连接的所有目标设备，添加-v选项，则会打印设备详细信息。  
  
显示所有已经连接的设备列表，命令格式如下：
    
    **hdc list targets[-v]**

     * 返回值

若没有查询到设备信息，返回[Empty]。若查询到已经连接的的设备，返回设备列表。

     * 使用方法：
           
           hdc list targets
           hdc list targets -v

#### [h2]服务进程相关命令

命令 | 说明  
---|---  
target mount | 读写模式挂载系统分区。  
target boot | 重启目标设备，查看目标列表可用list targets命令。  
smode [off] | 授予设备端hdc后台服务进程root权限， 使用off参数取消授权。  
kill [-r] | 终止hdc服务进程，-r表示重启服务进程。  
  
     1. 以读写模式挂载系统分区，命令格式如下：
            
            **hdc target mount**

        * 返回值

挂载成功，返回remount succeeded。挂载失败，返回具体的失败信息。

        * 使用方法：
              
              hdc target mount

     2. 授予设备端hdc后台服务进程root权限，命令格式如下：
            
            **hdc smode [off]**

        * 使用方法：
              
              hdc smode  
              hdc smode off  // 取消root权限

     3. 终止hdc服务进程，命令格式如下：
            
            **hdc kill [-r]**

        * 返回值

服务进程终止成功，无返回值。服务进程终止失败，返回具体的失败信息。

        * 使用方法：
              
              hdc kill
              hdc kill -r

#### [h2]网络相关命令

命令 | 说明  
---|---  
tconn _[host][:port]_ [-remove] | 通过指定ip地址+端口号连接目标设备。  
tmode usb | 配置设备端hdc后台服务，使用usb进行通信。  
tmode port _[port-number_] | 配置设备端hdc后台服务，使用tcp端口进行通信。  
fport list [-b] | 列出所有中继连接，-b选项下列出反向连接列表。  
fport _local remote_ [–b] | 建立中继连接，-b选项下进行反向连接。  
fport rm _local_ [-b] | 删除指定的local中继连接，无参数则删除所有连接，-b选项下进行反向连接删除。  
  
     1. 通过【ip地址：端口号】来指定连接的设备，命令格式如下：
            
            **hdc tconn _[host][:port]_[-remove]**

        * 参数 

**参数** 名 | **说明**  
---|---  
host:port | IP地址+端口号。  
-remove | 表示断开与指定设备的连接。  
  
        * 返回值

设备连接成功，无返回值。设备连接失败，返回具体的失败信息。

        * 使用方法：
              
              hdc tconn 192.168.0.100:8710

     2. 该命令执行后，设备端对应的daemon进程重启，并优先选用usb连接方式，命令格式如下：
            
            **hdc tmode usb**

        * 返回值

进程重启成功，无返回值。进程重启失败，返回具体的失败信息。

        * 使用方法：
              
              hdc tmode usb

     3. 该命令执行后，设备端对应的daemon进程重启，优先使用网络方式连接设备，若未连接成功，再选择usb连接。命令格式如下：
            
            **hdc tmode port _[port-number_** _**]**_

        * 参数 

**参数** 名 | 说明  
---|---  
port-number | 监听连接的网络端口号。  
  
        * 返回值

进程重启成功，无返回值。进程重启失败，返回具体的失败信息。

        * 使用方法：
              
              hdc tmode port 8710

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20230612113449.82780055607428710640867740009057:50001231000000:2800:B5FE0FA665504A4AE6BC600BEAA0347146AD3535687EE32F03C4377296051F75.png?needInitFileName=true?needInitFileName=true)

执行完毕后，远端daemon将会退出并重启，默认启用TCP连接，若未添加监听端口，则监听随机端口。

#### [h2]文件相关命令

命令 | 说明  
---|---  
file send _local remote_ | 从本地发送文件至远端设备。  
file recv [-a] _remote local_ | 从远端设备发送文件至本地。  
  
     1. 从本地发送文件至远端设备，命令格式如下：
            
            **hdc file send _l_**** _ocal_ remote**

        * 参数 

**参数** 名 | **说明**  
---|---  
local | 本地待发送的文件路径。  
remote | 远程待接收的文件路径。  
  
        * 返回值

文件发送成功，返回传输成功的结果信息。文件发送失败，返回传输失败的具体信息。

        * 使用方法：
              
              hdc file send E:\example.txt /data/local/tmp/example.txt

     2. 从远端设备发送文件至本地，命令格式如下：
            
            **hdc file recv [-a]_remote local_**

        * 参数 

**参数** 名 | **说明**  
---|---  
-a | 文件保留时间戳模式。  
local | 本地待接收的文件路径。  
remote | 远程待发送的文件路径。  
  
        * 返回值

文件接收成功，返回传输成功的结果信息。文件接收失败，返回传输失败的具体信息。

        * 使用方法：
              
              hdc file recv  /data/local/tmp/a.txt   ./a.txt

#### [h2]app相关命令

命令 | 说明  
---|---  
app install [-r/-d/-g] _package_ | 安装指定的应用package。  
app uninstall [-k]_package_ | 卸载指定的应用包package。  
  
     1. 安装HarmonyOS package，命令格式如下：
            
            **hdc app install [-r/-d/-g]_package_**

        * 参数 

**参数** 名 | **说明**  
---|---  
package | HarmonyOS应用安装包。  
-r | 替换已存在应用。  
-d | 允许降级安装。  
-g | 动态授权。  
  
        * 返回值：

package安装成功，无返回值。package安装失败，返回具体的失败信息。

        * 使用方法，以安装com.example.hello包为例：
              
              hdc app install com.example.hello

     2. 卸载HarmonyOS应用，命令格式如下：
            
            **hdc app uninstall [-k]_package_**

        * 参数： 

**参数** 名 | **说明**  
---|---  
package | HarmonyOS应用安装包。  
-k | 保留缓存数据。  
  
        * 返回值：

package卸载成功，无返回值。package卸载失败，返回具体的失败信息。

        * 使用方法，以卸载com.example.hello包为例：
              
              hdc app uninstall com.example.hello

#### [h2]调试相关命令

命令 | 说明  
---|---  
shell [COMMAND] | 进入交互命令环境，COMMAND表示需要执行的单次命令。  
listpid | 显示可调试应用列表。  
hilog [options] | 打印设备端的日志信息，options表示hilog支持的参数，可通过hdc hilog -h查阅支持的参数列表 。  
  
     1. 抓取log信息，命令格式如下：
            
            **hdc hilog** **[options]**

        * 返回值：

返回抓取到的日志信息。

        * 使用方法：
              
              hdc hilog 

     2. 进入交互命令环境，命令格式如下：
            
            **hdc shell [COMMAND]**

        * 返回值：

返回shell后面执行命令的结果信息。

        * 使用方法：
              
              hdc shell hilogcat
