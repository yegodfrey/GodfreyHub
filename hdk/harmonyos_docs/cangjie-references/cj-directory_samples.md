---
name: cangjie-references/cj-directory_samples
title: Directory 示例
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-references/cj-directory_samples
nodePath: 应用框架 / Cangjie（仓颉） / 仓颉标准库API / std.fs / 示例教程 / Directory 示例
---

# Directory 示例

#### Directory 一些基础操作演示

示例：
    
    
    import std.fs.*
    
    main() {
        let testDirPath: Path = Path("./testDir")
        let subDirPath: Path = Path("./testDir/subDir")
        if (exists(testDirPath)) {
            remove(testDirPath, recursive: true)
        }
    
        /* 递归创建目录 和 "./testDir/subDir" */
        Directory.create(subDirPath, recursive: true)
        if (exists(subDirPath)) {
            println("The directory './testDir/subDir' is successfully created recursively in current directory.")
        }
    
        /* 在 "./testDir" 下创建临时目录 */
        let tempDirPath: Path = Directory.createTemp(testDirPath)
        if (exists(tempDirPath)) {
            println("The temporary directory is created successfully in directory './testDir'.")
        }
    
        /* 将 "subDir" 移动到临时目录下并重命名为 "subDir_new" */
        let newSubDirPath: Path = tempDirPath.join("subDir_new")
        rename(subDirPath, to: newSubDirPath)
        if (exists(newSubDirPath) && !exists(subDirPath)) {
            println(
                "The directory './testDir/subDir' is moved successfully to the temporary directory and renamed 'subDir_new'.")
        }
    
        /* 将 "subDir_new" 拷贝到 "./testDir" 下并重命名为 "subDir" */
        copy(newSubDirPath, to: subDirPath, overwrite: false)
        if (exists(subDirPath) && exists(newSubDirPath)) {
            println("The directory 'subDir_new' is copied successfully to directory './testDir' and renamed 'subDir'.")
        }
    
        remove(testDirPath, recursive: true)
        return 0
    }

运行结果：
    
    
    The directory './testDir/subDir' is successfully created recursively in current directory.
    The temporary directory is created successfully in directory './testDir'.
    The directory './testDir/subDir' is moved successfully to the temporary directory and renamed 'subDir_new'.
    The directory 'subDir_new' is copied successfully to directory './testDir' and renamed 'subDir'.
