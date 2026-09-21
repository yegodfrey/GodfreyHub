---
name: document/cn/Security-Examples/client-sample-code-0000001053576815
title: CA示例代码
uri: https://developer.huawei.com/consumer/cn/doc/Security-Examples/client-sample-code-0000001053576815
---

# CA示例代码

CA为运行在REE环境中的应用程序，可以是动态库的形式集成到APK程序中或单独的执行文件。以下以独立可执行文件形式CA为例，展示CA与TA通信的简单流程。

```screen
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <sys/ioctl.h>
#include <fcntl.h>
#include <errno.h>
#include <string.h>
#include "tee_client_api.h"

#define VERSION_BUFFER_SIZE 256
#define OPERATION_START_FLAG 1

static const TEEC_UUID DEMO_TEMPLATE_UUID =
{
    0x58dbb3b9, 0x4a0c, 0x42d2,
    { 0xa8, 0x4d, 0x7c, 0x7a, 0xb1, 0x75, 0x39, 0xfc }
};

enum {
    CMD_GET_TA_VERSION = 1,
};

int main(void)
{
    TEEC_Context context = {0};
    TEEC_Session session = {0};
    TEEC_Result result = {0};
    TEEC_Operation operation = {0};
    uint32_t origin = {0};

    char versionBuf[VERSION_BUFFER_SIZE] = {0};
    unsigned int bufLen = VERSION_BUFFER_SIZE;

    result = TEEC_InitializeContext(NULL, &context);
    if (result != TEEC_SUCCESS) {
        TEEC_Error("teec initial failed");
        goto cleanup_1;
    }

    /* MUST use TEEC_LOGIN_IDENTIFY method */
    operation.started = OPERATION_START_FLAG;
    operation.paramTypes = TEEC_PARAM_TYPES(
        TEEC_NONE,
        TEEC_NONE,
        TEEC_MEMREF_TEMP_INPUT,
        TEEC_MEMREF_TEMP_INPUT);

    result = TEEC_OpenSession(
        &context, &session, &DEMO_TEMPLATE_UUID, TEEC_LOGIN_IDENTIFY, NULL, &operation, &origin);
    if (result != TEEC_SUCCESS) {
        TEEC_Error("teec open session failed");
        goto cleanup_2;
    } else {
        TEEC_Debug("teec open session successed");
    }

    operation.started = OPERATION_START_FLAG;
    operation.paramTypes = TEEC_PARAM_TYPES(
        TEEC_NONE,
        TEEC_NONE,
        TEEC_NONE,
        TEEC_MEMREF_TEMP_OUTPUT);
    operation.params[3].tmpref.buffer = versionBuf;
    operation.params[3].tmpref.size = bufLen;

    result = TEEC_InvokeCommand(&session, CMD_GET_TA_VERSION, &operation, &origin);
    if (result != TEEC_SUCCESS) {
        TEEC_Error("invoke failed, codes=0x%x, origin=0x%x", result, origin);
    } else {
        printf("Succeed to load TA, TA's version: %s.\n", versionBuf);
    }

    TEEC_CloseSession(&session);
cleanup_2:
    TEEC_FinalizeContext(&context);
cleanup_1:
    return 0;
}
```

