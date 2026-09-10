---
name: document/cn/hiai-References/cannkit-basic-data-structure-and-api-list-0000002123077446
title: 基础数据结构和接口列表
uri: https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-basic-data-structure-and-api-list-0000002123077446
---

# 基础数据结构和接口列表

本文档提供了进行算子开发和图开发时依赖的基础数据结构和接口说明，按照命名空间进行分类：

* ge（Graph Engine） ge是Graph Engine的缩写，代表一个通用的命名空间，专注于构图和图编译处理。此命名空间提供了一套丰富的API，用于构建和管理复杂的图结构。它的核心优势在于其通用性和灵活性，能够满足各种图处理需求，无论是在设计阶段还是在编译过程中。

* gert（GE Runtime） gert是GE Runtime的缩写，这个命名空间专门为运行时环境而设计，提供了一系列的高性能数据结构，以确保在执行时能够提供最佳性能。

#### gert命名空间

|分类|数据结构/接口名称|功能描述|
|:----|:-------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|类和结构体|[AnchorInstanceInfo](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-anchorinstanceinfo-0000002158477221)|用来描述一个算子的IR定义原型的输入信息与实际输入之间的关系。|
|类和结构体|[CompileTimeTensorDesc](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-compiletimetensordesc-0000002158595609)|用于描述编译时的Tensor描述信息，包含dtype信息以及format信息。|
|类和结构体|[ComputeNodeInfo](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-computenodeinfo-0000002123077474)|用于将算子的相关编译信息进行序列化保存，以便可以在图执行阶段能够高效地获取这些信息。|
|类和结构体|[ContinuousVectorVector](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-continuousvectorvector-0000002123235686)|在内存中开辟一块连续的空间，用于存储数据的描述信息以及实际的数据元素，元素类型为ContinuousVector结构。|
|类和结构体|[ContinuousVector](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-continuousvector-0000002158477325)|本类是一个POD类，在内存中开辟一块连续的空间用于存储描述信息以及实际内存数据。|
|类和结构体|[ExpandDimsType](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-expanddimstype-0000002123235750)|ExpandDimsType类基于补维后的shape，描述了补维规则。|
|类和结构体|[ExtendedKernelContext](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-extendedkernelcontext-0000002123077602)|[InferShapeContext](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-infershapecontext-0000002123235818)、[TilingContext](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-tilingcontext-0000002158477609)等的基类，ExtendedKernelContext中提供的方法如获取算子type、name、属性等接口均可以在InferShape、Tiling时调用。|
|类和结构体|[InferDataTypeContext](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-inferdatatypecontext-0000002158595785)|用于datatype推导的上下文结构。|
|类和结构体|[InferShapeContext](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-infershapecontext-0000002123235818)|用于shape推导的上下文结构。|
|类和结构体|[InferShapeRangeContext](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-infershaperangecontext-0000002158477421)|用于shape range推导的上下文结构。|
|类和结构体|[OpImplRegisterV2](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-opimpiregisterv2-0000002123077666)|OpImplRegisterV2类作为注册接口类，提供了一系列算子原型注册接口，供开发者注册指定算子类型的Tiling函数、Infershape函数、私有属性等信息。开发者调用算子原型注册接口进行注册时会间接使用到该类。|
|类和结构体|[Range](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-range-0000002123235874)|Range类用于描述一个对象的上下界。|
|类和结构体|[RuntimeAttrs](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-runtimeattrs-0000002123235886)|用于保存算子属性。|
|类和结构体|[Shape](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-shape-0000002123077726)|Shape结构体用于描述一个tensor的shape。|
|类和结构体|[StorageFormat](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-storageformat-0000002158595897)|StorageFormat格式包括原始格式、运行时格式、补维规则。|
|类和结构体|[StorageShape](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-storageshape-0000002123077766)|该类描述了tensor的shape，包含两个信息：origin_shape以及storage_shape。|
|类和结构体|[TilingData](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-tilingdata-0000002158596061)|用于存储Tensor数据。|
|类和结构体|[TensorPlacementUtils](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-tensorplacementutils-0000002158595949)|提供一组函数，用于判断TensorPlacement的位置。|
|类和结构体|[Tensor](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-tensor-0000002158477569)|Tensor类用来描述一个tensor对象的信息以及行为，包含：shape信息、format信息、datatype信息以及tensor数据内容tensordata。|
|类和结构体|[TilingContext](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-tilingcontext-0000002158477609)|用于算子Tiling的上下文结构。|
|类和结构体|[TilingData](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-tilingdata-0000002158596061)|用于存储Tiling数据。|
|类和结构体|[TypedContinuousVector](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-typedcontinuousvector-0000002123077938)|本类继承自ContinuousVector类，与ContinuousVector类不同的是MutableData和GetData返回的是指定类型的地址，而不是void \*。因此称为Typed。|
|枚举|[TensorPlacement](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-tensorplacement-0000002123077942)|表达Tensor存储位置的枚举值。|
[表1 gert命名空间]

#### ge命名空间

|分类|数据结构/接口名称|功能描述|
|:----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|类和结构体|[Allocator](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-allocator-0000002123236138)|支持使用开发者注册的外置allocator功能，所在头文件位于CANN软件安装后文件存储路径下的"include/ge/ge_allocator.h"路径。|
|类和结构体|[AscendString](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-ascendstring-0000002123077954)|用于存储字符串。 * 头文件位于CANN软件安装后文件存储路径下的include/graph/ascend_string.h * 库文件：libgraph.so|
|类和结构体|[AttrValue](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-attrvalue-0000002123236154)|用于存储属性值。 * 头文件位于CANN软件安装后文件存储路径下的include/graph/attr_value.h * 库文件：libgraph_base.so|
|类和结构体|[AutoMappingSubgraphIOIndexFuncRegister](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-automappingsubgraphioindexfuncregister-0000002123236162)|内部关联接口，插件适配API调用时间接调用，开发者不直接感知。|
|类和结构体|[FrameworkRegistry](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-frameworkregistry-0000002123077974)|内部关联接口，插件适配API调用时间接调用，开发者不直接感知。|
|类和结构体|[InferenceContext](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-inferencecontext-0000002123077982)|获取推理上下文对象，并设置相应对象的形状和数据类型，主要用于资源类算子。|
|类和结构体|[InferFormatFuncRegister](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-inferformatfuncregister-0000002123078010)|算子InferFormat函数注册接口，此接口被其他头文件引用，一般不用由算子开发者直接调用。|
|类和结构体|[InferShapeFuncRegister](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-infershapefuncregister-0000002158477789)|算子InferShape函数注册接口，此接口被其他头文件引用，一般不用由算子开发者直接调用。|
|类和结构体|[InferValueRangeFuncRegister](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-infervaluerangefuncregister-0000002123078046)|算子InferValueRangeFuncRegister函数注册接口，此接口被其他头文件引用，一般不由算子开发者直接调用。|
|类和结构体|[ListTensorType](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-listtensortype-0000002158477821)|ListTensorType类用以定义输入或者输出支持的数据类型，是TensorType的封装，用于标识支持多个数据类型的情况。|
|类和结构体|[MemBlock](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-memblock-0000002123236238)|配合[Allocator](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-allocator-0000002123236138)类使用，支持使用开发者注册的外置allocator功能，所在头文件位于CANN软件安装后文件存储路径下的"include/ge/ge_allocator.h"路径。|
|类和结构体|[OperatorCreatorRegister](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-operatorcreatorregister-0000002123078070)|算子注册接口，注册一个算子原型，此接口被其他头文件引用，一般不用由算子开发者直接调用。|
|类和结构体|[OperatorFactory](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-operatorfactory-0000002158477849)|内部关联接口，此接口被其他头文件引用，一般不用由算子开发者直接调用。|
|类和结构体|[Operator](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-ge-operator-0000002158477857)|算子类。 * 头文件位于CANN软件安装后文件存储路径下的include/graph/operator.h * 库文件：libgraph.so|
|类和结构体|[OpReceiver](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-opreceiver-0000002123236338)|用于算子编写适配插件进行AI框架适配时，进行映射关系注册。|
|类和结构体|[OpRegistrationData](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-opregistrationdata-0000002158596309)|用于算子编写适配插件进行AI框架适配时，进行映射关系注册。|
|类和结构体|[Promote](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-promote-0000002123078206)|Promote类用于表示输出数据类型为输入或属性指定的数据类型间的提升类型。|
|类和结构体|[ShapeAndType](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-shapeandtype-0000002158596361)|可设置、获取相应对象的形状和数据类型。|
|类和结构体|[Shape](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-ge-shape-0000002123236398)|用于存储Tensor的shape信息。 * 头文件位于CANN软件安装后文件存储路径下的include/graph/tensor.h * 库文件：libgraph_base.so|
|类和结构体|[TensorDescInfo](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-tensordescinfo-0000002158477997)|存储Tensor描述信息。|
|类和结构体|[TensorDesc](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-tensordesc-0000002123236410)|用于存取、管理Tensor描述信息。 * 头文件位于CANN软件安装后文件存储路径下的include/graph/tensor.h * 库文件：libgraph_base.so|
|类和结构体|[TensorType](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-tensortype-0000002123236458)|TensorType类用以定义输入或者输出支持的数据类型。|
|类和结构体|[Tensor](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-ge-tensor-0000002123078270)|Tensor结构。 * 头文件位于CANN软件安装后文件存储路径下的include/graph/tensor.h * 库文件：libgraph_base.so|
|类和结构体|[TypeUtils](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-typeutils-0000002123078314)|类型转换工具类。|
|类和结构体|[VerifyFuncRegister](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-verifyfuncregister-0000002123236518)|算子verifyFunc函数注册接口，此接口被其他头文件引用，一般不用由算子开发者直接调用。|
|函数|[ConvertToAscendString](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-converttoascendstring-0000002158596493)|模板函数，接受一个模板参数T，并将其转换为AscendString类型。这个函数的主要功能是将不同类型的字符串转换为AscendString类型。|
|函数|[ConvertToListAscendString](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-converttolistascendstring-0000002158478109)|定义了一个模板函数ConvertToListAscendString，用于将不同类型的字符串列表转换为AscendString类型的列表。|
|函数|[GetC0Format](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-getc0format-0000002123236526)|根据实际format获取C0 format的值。|
|函数|[GetC0Value](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-getc0value-0000002123078338)|从实际format中解析出c0 format信息。|
|函数|[GetFormatFromC0](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-getformatfromc0-0000002158596501)|根据传入的format和c0format信息得到实际的format。|
|函数|[GetFormatFromSub](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-getformatfromsub-0000002158478149)|根据传入的主format和子format信息得到实际的format。|
|函数|[GetFormatFromSubAndC0](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-getformatfromsubandc0-0000002123236566)|根据传入的主format，子format和c0format信息得到实际的format。|
|函数|[GetFormatName](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-getformatname-0000002123078382)|根据传入的format类型，获取format的字符串描述。|
|函数|[GetPrimaryFormat](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-getprimaryformat-0000002158596537)|从实际format中解析出主format信息。|
|函数|[GetSizeByDataType](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-getsizebydatatype-0000002158478153)|根据传入的data_type，获取该data_type所占用的内存大小。|
|函数|[GetSizeInBytes](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-getsizeinbytes-0000002123236574)|根据传入的element_count和data_type，获取element_count个该data_type所占用的内存总大小。|
|函数|[GetSubFormat](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-getsubformat-0000002123078386)|从实际format中解析出子format信息。|
|函数|[HasC0Format](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-hasc0format-0000002158596545)|判断实际format中是否包含C0 format。|
|函数|[HasSubFormat](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-hassubformat-0000002158478161)|判断实际format中是否包含子format。|
|类型定义|[ge::graphStatus](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-gegraphstatus-0000002123236578)|返回码状态说明。|
|枚举|[DataType](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-ge-datatype-0000002123078394)|数据类型枚举值。|
|枚举|[Format](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-ge-format-0000002158596549)|数据格式枚举值|
|宏|[BROADCAST_INFER](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-broadcast-infer-0000002158478165)|提供公共函数宏封装，供算子开发者开发InferShape函数。该函数基于2个输入的shape，设置输出的shape。该宏只是设置shape，未设置dtype。|
|宏|[COMMON_INFER_FUNC_REG](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-common-infer-func-reg-0000002123236586)|注册算子的InferShape函数。|
|宏|[DECLARE_ERRORNO](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-declare-errorno-0000002123078398)|错误码及描述注册宏。|
|宏|[ELMTWISE_INFER_SHAPEANDTYPE](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-elmtwise-infer-shapeandtype-0000002158596557)|提供公共函数宏封装，供算子开发者开发InferShape函数。该函数基于输入的shape和dtype，设置输出的shape和dtype。|
|宏|[IMPLEMT_COMMON_INFERFUNC](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-implemt-common-inferfunc-0000002158478173)|封装算子的Common_InferShape函数。|
|宏|[IMPLEMT_INFERFORMAT_FUNC](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-implemt-inferformat-func-0000002123236590)|封装算子的inferFormat函数。|
|宏|[IMPLEMT_INFERFUNC](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-implemt-inferfunc-0000002123078406)|封装算子的InferShape函数。|
|宏|[IMPLEMT_VERIFIER](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-implemt-verifier-0000002158596561)|封装算子的Verify函数。|
|宏|[INFER_FORMAT_FUNC_REG](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-infer-format-func-reg-0000002158478177)|注册算子的InferFormat实现。|
|宏|[INFER_FUNC_REG](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-infer-func-reg-0000002123236598)|注册算子的InferShape函数。|
|宏|[原型定义接口（REG_OP）](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-prototype-definition-api-0000002123078410)|原型定义接口。|
|宏|[原型定义衍生接口说明](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-prototype-definition-derivative-api-0000002158596569)|原型定义衍生接口。|
|宏|[VERIFY_FUNC_REG](https://developer.huawei.com/consumer/cn/doc/hiai-References/cannkit-verify-func-reg-0000002158478185)|注册算子的Verify函数。|
[表2 ge命名空间]

