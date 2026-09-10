---
name: cangjie-references/cj-posix_package_overview
title: std.posix
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_overview
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.posix
---

# std.posix

#### 功能介绍

posix 包封装 POSIX 系统调用，提供跨平台的系统操作接口。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/10/v3/iIQSu2dXRiCOpyr2LcrGRw/caution_3.0-zh-cn.png?HW-CC-KV=V1&HW-CC-Date=20260908T090208Z&HW-CC-Expire=86400&HW-CC-Sign=1A84A52854CF933587D51B04DC1E4DCA5356D28966E4BA73EF7EE640CAFF77D3)

未来版本即将废弃本包全部内容。

#### API 列表

#### [h2]函数

函数名 | 功能  
---|---  
[open(String, Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-openstring-int32-deprecated) | 打开文件并为其返回新的文件描述符，或在失败时返回 -1。  
[open(String, Int32, UInt32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-openstring-int32-uint32-deprecated) | 打开文件并为其返回新的文件描述符，或在失败时返回 -1。  
[access(String, Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-accessstring-int32-deprecated) | 判断某个文件是否具有某种权限，具有返回 0，否则返回 -1。  
[chdir(String) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-chdirstring-deprecated) | 通过指定路径的方式，更改调用进程的当前工作目录。  
[chmod(String, UInt32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-chmodstring-uint32-deprecated) | 修改文件访问权限。  
[chown(String, UInt32, UInt32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-chownstring-uint32-uint32-deprecated) | 修改文件所有者和文件所有者所属组。  
[close(Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-closeint32-deprecated) | 关闭文件，close 将会触发数据写回磁盘，并释放文件占用的资源。  
[creat(String, UInt32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-creatstring-uint32-deprecated) | 创建文件并为其返回文件描述符，或在失败时返回 -1。  
[dup(Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-dupint32-deprecated) | 用于复制旧 fd 参数指定的文件描述符并返回。  
[dup2(Int32, Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-dup2int32-int32-deprecated) | 用于复制 oldfd 参数指定的文件描述符，并将其返回到 newfd 参数。  
[faccessat(Int32, String, Int32, Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-faccessatint32-string-int32-int32-deprecated) | 判断 fd 对应的文件是否具有某种权限，具有返回 0，否则返回 -1。  
[fchdir(Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchdirint32-deprecated) | 通过指定文件路径的描述符，更改调用进程的当前工作目录。  
[fchmod(Int32, UInt32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodint32-uint32-deprecated) | 修改文件描述符对应的文件访问权限。  
[fchmodat(Int32, String, UInt32, Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchmodatint32-string-uint32-int32-deprecated) | 修改文件描述符对应的文件访问权限。  
[fchown(Int32, UInt32, UInt32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchownint32-uint32-uint32-deprecated) | 修改 fd 对应的文件所有者和文件所有者所属组。  
[fchownat(Int32, String, UInt32, UInt32, Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-fchownatint32-string-uint32-uint32-int32-deprecated) | 修改文件描述符对应的文件所有者和文件所有者所属组。  
[getcwd() (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-getcwd-deprecated) | 获取当前执行进程工作目录的绝对路径。  
[getgid() (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-getgid-deprecated) | 获取用户组 ID。  
[getgroups(Int32, CPointer<UInt32>) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-getgroupsint32-cpointeruint32-deprecated) | 获取当前用户所属组的组 ID 列表。  
[gethostname() (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-gethostname-deprecated) | 获取主机名称，此名称通常是 TCP/IP 网络上主机的名称。  
[getlogin() (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-getlogin-deprecated) | 获取当前登录名。  
[getos() (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-getos-deprecated) | 从 /proc/version 文件中获取 Linux 系统的信息。  
[getpgid(Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-getpgidint32-deprecated) | 获取 pid 指定的进程的 PGID，如果 pid 为零，返回调用进程的进程 ID。  
[getpgrp() (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-getpgrp-deprecated) | 获取调用进程的进程组 ID。  
[getpid() (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-getpid-deprecated) | 获取调用进程的进程 ID(PID)。  
[getppid() (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-getppid-deprecated) | 获取调用进程的父进程 ID。  
[getuid() (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-getuid-deprecated) | 获取调用进程的真实用户 ID。  
[isBlk(String) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-isblkstring-deprecated) | 检查传入对象是否为块设备，并返回布尔类型。  
[isChr(String) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-ischrstring-deprecated) | 检查传入对象是否为字符设备，返回布尔类型。  
[isDir(String) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-isdirstring-deprecated) | 检查传入对象是否为文件夹，返回布尔类型。  
[isFIFO(String) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-isfifostring-deprecated) | 检查传入对象是否为 FIFO 文件，返回布尔类型。  
[isLnk(String) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-islnkstring-deprecated) | 检查传入对象是否为软链接，返回布尔类型。  
[isReg(String) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-isregstring-deprecated) | 检查传入对象是否为普通文件，返回布尔类型。  
[isSock(String) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-issockstring-deprecated) | 检查传入对象是否为套接字文件，返回布尔类型。  
[isType(String, UInt32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-istypestring-uint32-deprecated) | 检查文件是否为指定模式的文件。  
[isatty(Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-isattyint32-deprecated) | 用于测试文件描述符是否引用终端，成功时返回 true，否则返回 false。  
[kill(Int32, Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killint32-int32-deprecated) | 系统调用可用于向任何进程组或进程发送任何信号。  
[killpg(Int32, Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-killpgint32-int32-deprecated) | 将信号 sig 发送到进程组 pgrp，如果 pgrp 为 0，则 killpg() 将信号发送到调用进程的进程组。  
[lchown(String, UInt32, UInt32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-lchownstring-uint32-uint32-deprecated) | 修改文件链接本身所有者和所有者所属组。  
[link(String, String) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-linkstring-string-deprecated) | 为存在的文件创建链接，一个文件可以有多个指向其 i-node 的目录条目。  
[linkat(Int32, String, Int32, String, Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-linkatint32-string-int32-string-int32-deprecated) | 创建相对于目录文件描述符的文件链接。  
[lseek(Int32, Int64, Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-lseekint32-int64-int32-deprecated) | 当文件进行读或写时，读或写位置相应增加。  
[nice(Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-niceint32-deprecated) | 更改当前线程的优先级。  
[open64(String, Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-openstring-int32-deprecated) | 打开文件并为其返回新的文件描述符，或在失败时返回 -1。  
[open64(String, Int32, UInt32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-openstring-int32-uint32-deprecated) | 打开文件并为其返回新的文件描述符，或在失败时返回 -1。  
[openat(Int32, String, Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-openatint32-string-int32-deprecated) | 打开文件并为其返回新的文件描述符，或在失败时返回 -1。  
[openat(Int32, String, Int32, UInt32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-openatint32-string-int32-uint32-deprecated) | 打开文件并为其返回新的文件描述符，或在失败时返回 -1。  
[openat64(Int32, String, Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-openat64int32-string-int32-deprecated) | 打开文件并为其返回新的文件描述符，或在失败时返回 -1。  
[openat64(Int32, String, Int32, UInt32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-openat64int32-string-int32-uint32-deprecated) | 打开文件并为其返回新的文件描述符，或在失败时返回 -1。  
[pread(Int32, CPointer<UInt8>, UIntNative, Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-preadint32-cpointeruint8-uintnative-int32-deprecated) | 将 fd 指向的文件的 nbyte 字节传输到 buffer 指向的内存中。  
[pwrite(Int32, CPointer<UInt8>, UIntNative, Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-pwriteint32-cpointeruint8-uintnative-int32-deprecated) | 将 buffer 指向的内存中 nbyte 字节从指定偏移位置开始写入到 fd 指向的文件。  
[read(Int32, CPointer<UInt8>, UIntNative) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-readint32-cpointeruint8-uintnative-deprecated) | 将 fd 指向的文件的 nbyte 字节传输到 buffer 指向的内存中。  
[remove(String) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-removestring-deprecated) | 删除文件或目录。  
[rename(String, String) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-renamestring-string-deprecated) | 重命名文件，如果需要将会移动文件所在目录。  
[renameat(Int32, String, Int32, String) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-renameatint32-string-int32-string-deprecated) | 重命名文件，如果需要将会移动文件所在目录。  
[setgid(UInt32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-setgiduint32-deprecated) | 设置调用进程的有效组 ID，需要适当的权限。  
[sethostname(String) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-sethostnamestring-deprecated) | 设置主机名，仅超级用户可以调用。  
[setpgid(Int32, Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-setpgidint32-int32-deprecated) | 此函数将参数 pid 指定的组 ID 设置为参数 pgrp 指定的组 ID。  
[setpgrp() (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-setpgrp-deprecated) | 将当前进程所属的组 ID 设置为当前进程的进程 ID，此函数等同于调用 setpgid(0, 0)。  
[setuid(UInt32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-setuiduint32-deprecated) | 设置调用进程的有效用户 ID，需要适当的权限。  
[symlink(String, String) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-symlinkstring-string-deprecated) | 创建一个名为 symPath 链接到 path 所指定的文件。  
[symlinkat(String, Int32, String) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-symlinkatstring-int32-string-deprecated) | 创建一个名为 symPath 链接到 path 与 fd 所指定的文件。  
[ttyname(Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-ttynameint32-deprecated) | 返回终端名称。  
[umask(UInt32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-umaskuint32-deprecated) | 设置权限掩码。  
[unlink(String) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-unlinkstring-deprecated) | 从文件系统中删除文件。  
[unlinkat(Int32, String, Int32) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-unlinkatint32-string-int32-deprecated) | 从文件系统中删除文件。  
[write(Int32, CPointer<UInt8>, UIntNative) (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs#func-writeint32-cpointeruint8-uintnative-deprecated) | 将 buffer 指向的内存中 nbyte 字节写入到 fd 指向的文件。  
  
#### [h2]常量

常量名 | 功能  
---|---  
[AT_EMPTY_PATH (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-at_empty_path-deprecated) | 表示允许空路径作为路径名参数的标志，用于引用文件描述符本身，适用函数 open、open64、openat、openat64，所属函数参数 oflag。  
[AT_FDCWD (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-at_fdcwd-deprecated) | 表示在文件系统中相对路径操作的特殊文件描述符常量，用于在使用 *at() 系列系统调用时指定相对路径的解析起点。主要用于 fchmodat、 fchownat、linkat、renameat、symlinkat、unlinkat 等函数，所属函数参数 fd。  
[AT_REMOVEDIR (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-at_removedir-deprecated) | 如果指定了 AT_REMOVEDIR 标志，则对 pathname 执行等效于 rmdir(2) 的操作，适用函数 unlinkat，所属函数参数 ulflag。  
[AT_SYMLINK_FOLLOW (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-at_symlink_follow-deprecated) | 表示一个用于控制符号链接解析行为的标志，指定在操作符号链接时是否跟随链接指向的目标文件。通常与 AT_FDCWD 结合使用。若无该标志，大多数系统调用会直接操作符号链接本身（如读取链接路径）。使用该标志后，系统调用会先解析符号链接，然后操作其指向的目标文件。主要用于 linkat、unlinkat 等函数，所属函数参数 fd。  
[O_CLOEXEC (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_cloexec-deprecated) | 在某些多线程程序中，使用此标志是必不可少的。因为在一个线程同时打开文件描述符，而另一个线程执行 fork(2) 加 execve(2) 场景下使用单独的 fcntl(2) F_SETFD 操作设置 FD_CLOEXEC 标志并不足以避免竞争条件，适用函数 open、open64、openat、openat64，所属函数参数 oflag。  
[O_DIRECTORY (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_directory-deprecated) | 如果 pathname 指定的文件不是目录，则打开文件失败，适用函数 open、open64、openat、openat64，所属函数参数 oflag。  
[O_CREAT (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_creat-deprecated) | 如果要打开的文件不存在，则自动创建该文件，适用函数 open、open64、openat、openat64，所属函数参数 oflag。  
[O_DSYNC (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_dsync-deprecated) | 每次写入都会等待物理 I/O 完成，但如果写操作不影响读取刚写入的数据，则不等待文件属性更新，适用函数 open、open64、openat、openat64，所属函数参数 oflag。  
[O_EXCL (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_excl-deprecated) | 如同时设置 O_CREAT，则此指令检查文件是否存在。如果文件不存在，则创建文件。否则，打开文件出错。此外，如果同时设置了 O_CREAT 和 O_EXCL，并且要打开的文件是符号链接，则打开文件失败，适用函数 open、open64、openat、openat64，所属函数参数 oflag。  
[O_NOCTTY (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_noctty-deprecated) | 如要打开的文件是终端设备，则该文件不会成为这个进程的控制终端，适用函数 open、open64、openat、openat64，所属函数参数 oflag。  
[O_NOFOLLOW (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_nofollow-deprecated) | 如 pathname 指定的文件是符号链接，则打开文件失败，适用函数 open、open64、openat、openat64，所属函数参数 oflag。  
[O_NONBLOCK (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_nonblock-deprecated) | 以非阻塞的方式打开文件，即 I/O 操作不会导致调用进程等待，适用函数 open、open64、openat、openat64，所属函数参数 oflag。  
[O_SYNC (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_sync-deprecated) | 同步打开文件，适用函数 open、open64、openat、openat64，所属函数参数 oflag。  
[O_RDONLY (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdonly-deprecated) | 以只读方式打开文件，适用函数 open、open64、openat、openat64，所属函数参数 oflag。  
[O_RDWR (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rdwr-deprecated) | 以读写模式打开文件，适用函数 open、open64、openat、openat64，所属函数参数 oflag。  
[O_WRONLY (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_wronly-deprecated) | 以只写方式打开文件，适用函数 open、open64、openat、openat64，所属函数参数 oflag。  
[O_APPEND (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_append-deprecated) | 读取或写入文件时，数据将被写入到文件末尾，适用函数 open、open64、openat、openat64，所属函数参数 oflag。  
[O_RSYNC (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_rsync-deprecated) | 此标志仅影响读取操作，必须与 O_SYNC 或 O_DSYNC 结合使用。如果有必要，它将导致读取调用阻塞，直到正在读取的数据（可能还有元数据）刷新到磁盘，适用函数 open、open64、openat、openat64，所属函数参数 oflag。  
[O_TRUNC (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-o_trunc-deprecated) | 如果文件存在且打开可写，则此标志将文件长度清除为 0，文件中以前存储的数据消失，适用函数 open、open64、openat、openat64，所属函数参数 oflag。  
[R_OK (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-r_ok-deprecated) | 测试文件读权限，适用函数 access，faccessat，所属函数参数 mode。  
[W_OK (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-w_ok-deprecated) | 测试文件写权限，适用函数 access，faccessat，所属函数参数 mode。  
[X_OK (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-x_ok-deprecated) | 测试文件执行权限，适用函数 access，faccessat，所属函数参数 mode。  
[F_OK (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-f_ok-deprecated) | 测试文件是否存在，适用函数 access，faccessat，所属函数参数 mode。  
[SEEK_SET (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-seek_set-deprecated) | 偏移参数表示新的读写位置，适用函数 lseek，所属函数参数 whence。  
[SEEK_CUR (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-seek_cur-deprecated) | 向当前读或写位置添加偏移量，适用函数 lseek，所属函数参数 whence。  
[SEEK_END (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-seek_end-deprecated) | 将读写位置设置为文件末尾，并添加偏移量，适用函数 lseek，所属函数参数 whence。  
[SIGABRT (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigabrt-deprecated) | 异常终止，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGBUS (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigbus-deprecated) | 硬件故障，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGFPE (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigfpe-deprecated) | 算术错误，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGKILL (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigkill-deprecated) | 终止，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGCONT (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigcont-deprecated) | 继续暂停的进程，默认操作继续或忽略，适用函数 kill，killpg，所属函数参数 sig。  
[SIGHUP (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sighup-deprecated) | 挂起信号，当终端断开连接时发送，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGINT (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigint-deprecated) | 终端中断字符，默认动作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGQUIT (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigquit-deprecated) | 终端退出字符，默认动作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGILL (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigill-deprecated) | 硬件指令无效，默认动作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGTRAP (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigtrap-deprecated) | 跟踪/断点陷阱，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGIOT (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigiot-deprecated) | IOT 陷阱信号，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGIO (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigio-deprecated) | 异步 IO，默认操作忽略，适用函数 kill，killpg，所属函数参数 sig。  
[SIGPIPE (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigpipe-deprecated) | 写入未读进程的管道，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGALRM (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigalrm-deprecated) | 计时器到期，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGPWR (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigpwr-deprecated) | 电源故障或重启，系统调用无效，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGSEGV (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigsegv-deprecated) | 内存引用无效，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGSTOP (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigstop-deprecated) | 停止，默认操作停止进程，适用函数 kill，killpg，所属函数参数 sig。  
[SIGSYS (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigsys-deprecated) | 非法系统调用，默认操作终止进程并生成核心转储文件（core dump），用于调试分析，适用函数 kill，killpg，所属函数参数 sig。  
[SIGTERM (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigterm-deprecated) | 终止，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGSTKFLT (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigstkflt-deprecated) | 协处理器堆栈故障，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGCHLD (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigchld-deprecated) | 子进程状态更改，默认操作忽略，适用函数 kill，killpg，所属函数参数 sig。  
[SIGTSTP (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigtstp-deprecated) | 终端停止符号，默认操作停止进程，适用函数 kill，killpg，所属函数参数 sig。  
[SIGTTIN (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigttin-deprecated) | 后台读取控件 tty，默认操作停止进程，适用函数 kill，killpg，所属函数参数 sig。  
[SIGTTOU (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigttou-deprecated) | 后台写控制 tty，默认操作停止进程，适用函数 kill，killpg，所属函数参数 sig。  
[SIGURG (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigurg-deprecated) | 紧急情况（套接字），默认操作忽略，适用函数 kill，killpg，所属函数参数 sig。  
[SIGUSR1 (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigusr1-deprecated) | 用户定义的信号，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGUSR2 (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigusr2-deprecated) | 用户定义的信号，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGVTALRM (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigvtalrm-deprecated) | 虚拟时间警报，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGPROF (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigprof-deprecated) | 摘要超时，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGWINCH (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigwinch-deprecated) | 终端窗口大小更改，默认操作忽略，适用函数 kill，killpg，所属函数参数 sig。  
[SIGXCPU (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigxcpu-deprecated) | CPU 占用率超过上限，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[SIGXFSZ (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-sigxfsz-deprecated) | 文件长度超过上限，默认操作终止，适用函数 kill，killpg，所属函数参数 sig。  
[S_IRUSR (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_irusr-deprecated) | 表示文件所有者具有读权限，适用函数 open，open64，openat，openat64，chmod(mode)，fchmod(mode)，fchmodat(mode)，creat， 所属函数参数 flag。  
[S_IWUSR (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_iwusr-deprecated) | 表示文件所有者具有写权限，适用函数 open，open64，openat，openat64，chmod(mode)，fchmod(mode)，fchmodat(mode)，creat， 所属函数参数 flag。  
[S_IRGRP (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_irgrp-deprecated) | 表示文件用户组具有读权限，适用函数 open，open64，openat，openat64，chmod(mode)，fchmod(mode)，fchmodat(mode)，creat， 所属函数参数 flag。  
[S_IWGRP (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_iwgrp-deprecated) | 表示文件用户组具有写权限，适用函数 open，open64，openat，openat64，chmod(mode)，fchmod(mode)，fchmodat(mode)，creat， 所属函数参数 flag。  
[S_IFREG (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_ifreg-deprecated) | 文件类型为一般文件，适用函数 isType， 所属函数参数 mode。  
[S_IFBLK (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_ifblk-deprecated) | 文件类型为块设备，适用函数 isType， 所属函数参数 mode。  
[S_IFDIR (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_ifdir-deprecated) | 文件类型为目录，适用函数 isType， 所属函数参数 mode。  
[S_IFCHR (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_ifchr-deprecated) | 文件类型为字符设备，适用函数 isType， 所属函数参数 mode。  
[S_IFIFO (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_ififo-deprecated) | 文件类型为 FIFO 文件，适用函数 isType， 所属函数参数 mode。  
[S_IFLNK (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_iflnk-deprecated) | 文件类型为软连接，适用函数 isType， 所属函数参数 mode。  
[S_IFSOCK (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_ifsock-deprecated) | 文件类型为套接字文件，适用函数 isType， 所属函数参数 mode。  
[S_IROTH (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_iroth-deprecated) | 表示其他用户对文件具有读权限，适用函数 open，open64，openat，openat64，chmod(mode)，fchmod(mode)，fchmodat(mode)，creat， 所属函数参数 flag。  
[S_IRWXG (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_irwxg-deprecated) | 表示文件用户组具有读、写、执行权限，适用函数 open，open64，openat，openat64，chmod(mode)，fchmod(mode)，fchmodat(mode)，creat， 所属函数参数 flag。  
[S_IRWXU (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_irwxu-deprecated) | 表示文件所有者具有读、写和执行权限，适用函数 open，open64，openat，openat64，chmod(mode)，fchmod(mode)，fchmodat(mode)，creat， 所属函数参数 flag。  
[S_IWOTH (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_iwoth-deprecated) | 表示其他用户对文件具有写权限，适用函数 open，open64，openat，openat64，chmod(mode)，fchmod(mode)，fchmodat(mode)，creat， 所属函数参数 flag。  
[S_IXOTH (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_ixoth-deprecated) | 表示其他用户对文件具有执行权限，适用函数 open，open64，openat，openat64，chmod(mode)，fchmod(mode)，fchmodat(mode)，creat， 所属函数参数 flag。  
[S_IRWXO (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_irwxo-deprecated) | 表示其他用户对文件具有读、写和执行权限，适用函数 open，open64，openat，openat64，chmod(mode)，fchmod(mode)，fchmodat(mode)，creat， 所属函数参数 flag。  
[S_IXGRP (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_ixgrp-deprecated) | 表示文件用户组具有执行权限，适用函数 open，open64，openat，openat64，chmod(mode)，fchmod(mode)，fchmodat(mode)，creat， 所属函数参数 flag。  
[S_IXUSR (deprecated)](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars#const-s_ixusr-deprecated) | 表示文件所有者具有执行权限，适用函数 open，open64，openat，openat64，chmod(mode)，fchmod(mode)，fchmodat(mode)，creat， 所属函数参数 flag。  
  
  * **[常量&变量](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_constants_vars)**  

  * **[函数](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix_package_funcs)**  

  * **[示例教程](https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-posix-samples)**  



