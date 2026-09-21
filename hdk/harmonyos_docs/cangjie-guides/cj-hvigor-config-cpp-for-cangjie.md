---
name: cangjie-guides/cj-hvigor-config-cpp-for-cangjie
title: 配置仓颉依赖模块内C++
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-guides/cj-hvigor-config-cpp-for-cangjie
nodePath: 构建应用 / 配置构建流程 / 配置仓颉依赖模块内C++
---

# 配置仓颉依赖模块内C++

同一个模块内，仓颉依赖C++时，可以在cjpm.toml中配置ffi.c指向模块内的libs目录，依赖的C++产物会被拷贝到libs目录下（arm64-v8a）：
    
    
    Project_name
    ├── .hvigor
    ├── .idea
    ├── AppScope
    └── entry
         ├── build
         ├── lib
         │    └── arm64-v8a
         ├── oh_modules
         ├── src
         ├── build-profile.json5
         ├── cjpm.lock
         ├── cjpm.toml
         ├── hvigorfile.ts
         ├── obfuscation-rules.txt
         ├── oh-package.json5
         └── oh-package-lock.json5

例如仓颉依赖了C++的编译产物lib arktscppcangjiehar1.so，cjpm.toml中配置如下：
    
    
    [ffi]
      [ffi.c]
        [ffi.c.arktscppcangjiehar1]
          path = "./libs/${ABI}"    # ABI在编译时会替换成对应的架构（arm64-v8a、x86_64）
