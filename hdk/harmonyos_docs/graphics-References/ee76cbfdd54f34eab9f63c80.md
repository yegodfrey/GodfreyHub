---
name: document/cn/graphics-References/quaternion-0000001050974003
title: Quaternion
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003
---

# Quaternion

|Class Info|
|:-------------------------------------------------------------|
|class Quaternion 四元数类。包含四元数的赋值、比较、加减乘除、点乘、求逆、归一化、转轴角对、转欧拉角等操作。|

## Public Field Summary

|Qualifier and Type|Field and Description|Value|
|:------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|:-----------|
|[f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604)|x 四元数的虚部X分量。|-|
|[f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604)|y 四元数的虚部Y分量。|-|
|[f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604)|z 四元数的虚部Z分量。|-|
|[f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604)|w 四元数的实部W分量。|-|
|static const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)|ZERO 实部和虚部均为0，记为ZERO。|(0, 0, 0, 0)|
|static const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)|IDENTITY 虚部为0，实部为1，记为IDENTITY。|(0, 0, 0, 1)|

## Public Constructor Summary

|Constructor Name|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Quaternion](#section2467mcpsimp)() 构造函数，四元数的X、Y、Z分量初始化为0，W分量初始化为1。|
|[Quaternion](#section882145834511)([f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) nx, [f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) ny, [f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) nz, [f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) nw) 构造函数，使用nx、ny、nz、nw初始化四元数的X、Y、Z、W分量。|
|[Quaternion](#section529501413543)(const [Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector4-0000001050693976)& vec) 构造函数，使用[Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector4-0000001050693976)初始化四元数的X、Y、Z、W分量。|

## Public Destructor Summary

|Destructor Name|
|:-----------------------------------------|
|[~Quaternion](#section2497mcpsimp)() 析构函数。|

## Public Method Summary

|Qualifier and Type|Method Name and Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|[operator=](#section2513mcpsimp)(const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& other) 重载赋值运算符，使用[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象给当前对象赋值。|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)|[operator+](#section2568mcpsimp)(const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& other) const 重载+运算符，用于当前对象和指定[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象间的加法运算。|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)|[operator-](#section2623mcpsimp)(const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& other) const 重载-运算符，用于当前对象和指定[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象间的减法运算。|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)|[operator*](#section2678mcpsimp)(const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& other) const 重载*运算符，用于当前对象和指定[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象间的乘法运算。|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|[operator*=](#section2733mcpsimp)(const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& other) 重载*=运算符，用于当前对象和指定[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象间的乘法运算。|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector3-0000001050734005)|[operator*](#section2788mcpsimp)(const [Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector3-0000001050734005)& value) const 重载*运算符，指定三维坐标绕四元数表示的旋转轴旋转四元数表示的旋转弧度。|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)|[operator*](#section2843mcpsimp)([f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) s) const 重载*运算符，用于当前对象与浮点数间的乘法运算。|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|[operator*=](#section2898mcpsimp)([f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) s) 重载*=运算符，用于当前对象与浮点数间的乘法运算。|
|bool|[operator==](#section2953mcpsimp)(const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& other) const 重载==运算符，比较当前对象和指定[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象是否相等，相等返回true，不相等返回false。|
|bool|[operator!=](#section3008mcpsimp)(const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& other) const 重载!=运算符，比较当前对象和指定[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象是否不相等，不相等返回true，相等返回false。|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|[Set](#section3063mcpsimp)([f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) nx, [f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) ny, [f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) nz, [f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) nw) 设置当前对象四个分量的值。|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|[Set](#section3133mcpsimp)(const [Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector3-0000001050734005)& euler) 通过欧拉角转四元数操作，使用指定欧拉角对当前四元数进行设置。|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|[Inverse](#section3188mcpsimp)() 计算当前四元数的逆，返回记录求逆结果的当前四元数的引用。|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)|[Inversed](#section3223mcpsimp)() const 计算当前四元数的逆，返回记录求逆结果的四元数。|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|[Normalize](#section3258mcpsimp)() 四元数归一化计算，返回归一化后的当前四元数的引用。|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)|[Normalized](#section3293mcpsimp)() const 四元数归一化计算，返回记录归一化结果的四元数。|
|[f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604)|[Dot](#section3328mcpsimp)(const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& q2) const 四元数的点乘运算。|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|[FromAngleAxisToQuat](#section3383mcpsimp)([f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) radianAngle, const [Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector3-0000001050734005)& axis) 轴角对转四元数。|
|void|[FromQuatToAngleAxis](#section3443mcpsimp)([f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604)& radianAngle, [Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector3-0000001050734005)& axis) const 四元数转轴角对。|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|[ReverseZ](#section1254813914718)() 旋转Z轴。|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector3-0000001050734005)|[ToEuler](#section3503mcpsimp)() const 四元数转换成欧拉角。|
|[String](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p841011101501)|[ToString](#section3538mcpsimp)() const 四元数类型转换成字符串类型，形如"(x, y, z, w)"。|

## Public Constructors

### Quaternion

|Constructor|
|:-------------------------------------------|
|Quaternion() 构造函数，四元数的X、Y、Z分量初始化为0，W分量初始化为1。|

### Quaternion(f32 nx, f32 ny, f32 nz, f32 nw)

|Constructor|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Quaternion([f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) nx, [f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) ny, [f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) nz, [f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) nw) 构造函数，使用nx、ny、nz、nw初始化四元数的X、Y、Z、W分量。|

**Parameters**

|Name|Description|
|:---|:----------|
|nx|初始化X分量的值。|
|ny|初始化Y分量的值。|
|nz|初始化Z分量的值。|
|nw|初始化W分量的值|

### Quaternion(const Vector4& vec)

|Constructor|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Quaternion(const [Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector4-0000001050693976)& vec) 构造函数，使用[Vector4](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector4-0000001050693976)初始化四元数的X、Y、Z、W分量。|

**Parameters**

|Name|Description|
|:---|:---------------|
|vec|用于初始化的Vector4的值。|

## Public Destructors

### ~Quaternion

|Destructor|
|:------------------|
|~Quaternion() 析构函数。|

## Public Methods

### operator=

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& operator=(const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& other) 重载赋值运算符，使用[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象给当前对象赋值。|

**Parameters**

|Name|Description|
|:----|:---------------------------------------------------------------------------------------------------------------------|
|other|给当前对象赋值的[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象。|

**Returns**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------|:-------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|返回赋值后对当前对象的引用。|

### operator+

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003) operator+(const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& other) const 重载+运算符，用于当前对象和指定[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象间的加法运算。|

**Parameters**

|Name|Description|
|:----|:-------------------------------------------------------------------------------------------------------------------------|
|other|与当前对象进行加法运算的[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)|返回记录加法结果的[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象。|

### operator-

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003) operator-(const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& other) const 重载-运算符，用于当前对象和指定[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象间的减法运算。|

**Parameters**

|Name|Description|
|:----|:------------------------------------------------------------------------------------------------------------------------------|
|other|与当前对象进行减法运算并作为减数的[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)|记录减法结果的[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象。|

### operator*

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003) operator*(const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& other) const 重载*运算符，用于当前对象和指定[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象间的乘法运算。|

**Parameters**

|Name|Description|
|:----|:-------------------------------------------------------------------------------------------------------------------------|
|other|与当前对象进行乘法运算的[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)|返回记录乘法结果的[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象。|

### operator*=

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& operator*=(const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& other) 重载*=运算符，用于当前对象和指定[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象间的乘法运算。|

**Parameters**

|Name|Description|
|:----|:-------------------------------------------------------------------------------------------------------------------------|
|other|与当前对象进行乘法运算的[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象。|

**Returns**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------|:----------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|返回记录乘法结果的当前对象的引用。|

### operator*(const Vector3& value)

|Method|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector3-0000001050734005) operator*(const [Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector3-0000001050734005)& value) const 重载*运算符，指定三维向量绕四元数表示的旋转轴旋转四元数表示的旋转弧度。|

**Parameters**

|Name|Description|
|:----|:----------|
|value|进行旋转的三维向量。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------|:----------|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector3-0000001050734005)|返回旋转后的三维向量。|

### operator*(f32 s)

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003) operator*([f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) s) const 重载*运算符，用于当前对象与浮点数间的乘法运算。|

**Parameters**

|Name|Description|
|:---|:---------------|
|s|与当前对象进行乘法运算的浮点数。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)|返回记录乘法结果的[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)对象。|

### operator*=(f32 s)

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& operator*=([f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) s) 重载*=运算符，用于当前对象与浮点数间的乘法运算。|

**Parameters**

|Name|Description|
|:---|:---------------|
|s|与当前对象进行乘法运算的浮点数。|

**Returns**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------|:----------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|返回记录乘法结果的当前对象的引用。|

### operator==

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|bool operator==(const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& other) const 重载==运算符，比较当前对象和指定[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象是否相等，相等返回true，不相等返回false。|

**Parameters**

|Name|Description|
|:----|:-----------------------------------------------------------------------------------------------------------------------|
|other|与当前对象进行比较的[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象。|

**Returns**

|Type|Description|
|:---|:----------------------|
|bool|* true：相等。 * false：不相等。|

### operator!=

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|bool operator!=(const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& other) const 重载!=运算符，比较当前对象和指定[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象是否不相等，不相等返回true，相等返回false。|

**Parameters**

|Name|Description|
|:----|:-----------------------------------------------------------------------------------------------------------------------|
|other|与当前对象进行比较的[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)类对象。|

**Returns**

|Type|Description|
|:---|:----------------------|
|bool|* true：不相等。 * false：相等。|

### Set(f32 nx, f32 ny, f32 nz, f32 nw)

|Method|
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& Set([f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) nx, [f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) ny, [f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) nz, [f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) nw) 设置当前对象的四个分量的值。|

**Parameters**

|Name|Description|
|:---|:----------|
|nx|设置X分量的值。|
|ny|设置Y分量的值。|
|nz|设置Z分量的值。|
|nw|设置W分量的值。|

**Returns**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------|:----------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|返回对当前对象的引用。|

### Set(const Vector3& euler)

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& Set(const [Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector3-0000001050734005)& euler) 通过欧拉角转四元数操作，使用指定欧拉角对当前四元数进行设置。|

**Parameters**

|Name|Description|
|:----|:----------|
|euler|指定欧拉角。|

**Returns**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------|:----------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|返回记录转换结果的当前对象的引用。|

### Inverse

|Method|
|:-------------------------------------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& Inverse() 计算当前四元数的逆，返回记录求逆结果的当前四元数的引用。|

**Returns**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------|:-----------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|返回记录求逆结果的当前四元数的引用。|

### Inversed

|Method|
|:--------------------------------------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003) Inversed() const 计算当前四元数的逆，返回记录求逆结果的四元数。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------|:------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)|返回记录求逆结果的四元数。|

### Normalize

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& Normalize() 四元数归一化计算，返回归一化后的当前四元数的引用。|

**Returns**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------|:---------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|返回归一化后的当前四元数的引用。|

### Normalized

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003) Normalized() const 四元数归一化计算，返回记录归一化结果的四元数。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------|:-------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)|返回记录归一化结果的四元数。|

### Dot

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) Dot(const [Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& q2) const 四元数的点乘运算。|

**Parameters**

|Name|Description|
|:---|:---------------|
|q2|与当前对象进行点乘运算的四元数。|

**Returns**

|Type|Description|
|:------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
|[f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604)|返回点乘运算结果。|

### FromAngleAxisToQuat

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& FromAngleAxisToQuat([f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604) radianAngle, const [Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector3-0000001050734005)& axis) 轴角对转四元数。|

**Parameters**

|Name|Description|
|:----------|:----------|
|radianAngle|旋转弧度。|
|axis|旋转轴。|

**Returns**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------|:----------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|返回记录转换结果的当前对象的引用。|

### FromQuatToAngleAxis

|Method|
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|void FromQuatToAngleAxis([f32](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p204103101604)& radianAngle, [Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector3-0000001050734005)& axis) const 四元数转轴角对。|

**Parameters**

|Name|Description|
|:----------|:----------|
|radianAngle|转换后的旋转弧度。|
|axis|转换后的旋转轴。|

### ReverseZ

|Method|
|:---------------------------------------------------------------------------------------------------------------------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)& ReverseZ() 旋转Z轴。|

**Returns**

|Type|Description|
|:----------------------------------------------------------------------------------------------------------|:-------------|
|[Quaternion](https://developer.huawei.com/consumer/cn/doc/graphics-References/quaternion-0000001050974003)&|返回旋转Z轴后的四元数引用。|

### ToEuler

|Method|
|:------------------------------------------------------------------------------------------------------------------------------|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector3-0000001050734005) ToEuler() const 四元数转换成欧拉角。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------|:--------------|
|[Vector3](https://developer.huawei.com/consumer/cn/doc/graphics-References/vector3-0000001050734005)|返回当前四元数转换成的欧拉角。|

### ToString

|Method|
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[String](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p841011101501) ToString() const 四元数类型转换成字符串类型，形如"(x, y, z, w)"。|

**Returns**

|Type|Description|
|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|
|[String](https://developer.huawei.com/consumer/cn/doc/graphics-References/type-alias-summary-0000001050286906#ZH-CN_TOPIC_0000001050286906__p841011101501)|返回四元数转换成的字符串，返回值形如"(x, y, z, w)"。|

