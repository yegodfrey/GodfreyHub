---
name: document/cn/hiai-Guides/supported-operators-0000001327003937
title: 支持的算子
uri: https://developer.huawei.com/consumer/cn/doc/hiai-Guides/supported-operators-0000001327003937
---

# 支持的算子

## hiai::op算子

hiai::op算子定义所在目录：" /ddk/ai_ddk_lib/include/graph/op/"。

|算子名|所属分类|所在文件|
|:------------------------------------------------------------|:-------------|:---------------|
|BatchToSpaceND|array_defs|array_defs.h|
|BroadcastTo|array_defs|array_defs.h|
|ConcatD|array_defs|array_defs.h|
|Data|array_defs|array_defs.h|
|DepthToSpace|array_defs|array_defs.h|
|Dequantize|array_defs|array_defs.h|
|DequantizeV2|array_defs|array_defs.h|
|ExpandDims|array_defs|array_defs.h|
|FakeQuantWithMinMaxVars|array_defs|array_defs.h|
|Fill|array_defs|array_defs.h|
|Flatten|array_defs|array_defs.h|
|FlattenV2|array_defs|array_defs.h|
|GatherNd|array_defs|array_defs.h|
|GatherV2D|array_defs|array_defs.h|
|MirrorPad|array_defs|array_defs.h|
|NetOutput|array_defs|array_defs.h|
|OneHot|array_defs|array_defs.h|
|Pack|array_defs|array_defs.h|
|Pad|array_defs|array_defs.h|
|PadV2|array_defs|array_defs.h|
|Quantize|array_defs|array_defs.h|
|QuantizeV2|array_defs|array_defs.h|
|Reshape|array_defs|array_defs.h|
|Select|array_defs|array_defs.h|
|Shape|array_defs|array_defs.h|
|Size|array_defs|array_defs.h|
|Slice|array_defs|array_defs.h|
|SpaceToBatchND|array_defs|array_defs.h|
|SpaceToDepth|array_defs|array_defs.h|
|SplitD|array_defs|array_defs.h|
|SplitV|array_defs|array_defs.h|
|Squeeze|array_defs|array_defs.h|
|StridedSlice|array_defs|array_defs.h|
|StridedSliceV2|array_defs|array_defs.h|
|Tile|array_defs|array_defs.h|
|Unpack|array_defs|array_defs.h|
|Const|const_defs|const_defs.h|
|QuantizedConst|const_defs|const_defs.h|
|Permute|detection_defs|detection_defs.h|
|SSDDetectionOutput|detection_defs|detection_defs.h|
|ConfigData|image_defs|image_defs.h|
|Crop|image_defs|image_defs.h|
|CropAndResize|image_defs|image_defs.h|
|DynamicImageData|image_defs|image_defs.h|
|GridSampler2D|image_defs|image_defs.h|
|ImageChannelSwap|image_defs|image_defs.h|
|ImageColorSpaceConvertion|image_defs|image_defs.h|
|ImageCrop|image_defs|image_defs.h|
|ImageData|image_defs|image_defs.h|
|ImageDataTypeConversion|image_defs|image_defs.h|
|ImagePadding|image_defs|image_defs.h|
|ImageResize|image_defs|image_defs.h|
|ImageRotation|image_defs|image_defs.h|
|ImageCropV2|image_defs|image_defs.h|
|ImageResizeV2|image_defs|image_defs.h|
|ImageDataTypeConvertionV2|image_defs|image_defs.h|
|ImageRotateV2|image_defs|image_defs.h|
|ImagePadV2|image_defs|image_defs.h|
|Interp|image_defs|image_defs.h|
|NonMaxSuppressionV3D|image_defs|image_defs.h|
|NonMaxSuppressionV6|image_defs|image_defs.h|
|ResizeBilinear|image_defs|image_defs.h|
|ResizeBilinearV2|image_defs|image_defs.h|
|ResizeNearestNeighbor|image_defs|image_defs.h|
|ResizeNearestNeighborV2|image_defs|image_defs.h|
|ROIAlignV2|image_defs|image_defs.h|
|Upsample|image_defs|image_defs.h|
|Acos|math_defs|math_defs.h|
|Add|math_defs|math_defs.h|
|ArgMaxExt2|math_defs|math_defs.h|
|Asin|math_defs|math_defs.h|
|Atan|math_defs|math_defs.h|
|BatchMatMul|math_defs|math_defs.h|
|CastT|math_defs|math_defs.h|
|Ceil|math_defs|math_defs.h|
|ClipByValue|math_defs|math_defs.h|
|Cos|math_defs|math_defs.h|
|Equal|math_defs|math_defs.h|
|Erf|math_defs|math_defs.h|
|Exp|math_defs|math_defs.h|
|Expm1|math_defs|math_defs.h|
|Floor|math_defs|math_defs.h|
|FloorDiv|math_defs|math_defs.h|
|FloorMod|math_defs|math_defs.h|
|GemmD|math_defs|math_defs.h|
|Greater|math_defs|math_defs.h|
|GreaterEqual|math_defs|math_defs.h|
|L2Normalize|math_defs|math_defs.h|
|Less|math_defs|math_defs.h|
|LessEqual|math_defs|math_defs.h|
|Log|math_defs|math_defs.h|
|Log1p|math_defs|math_defs.h|
|LogicalAnd|math_defs|math_defs.h|
|LogicalNot|math_defs|math_defs.h|
|LogicalOr|math_defs|math_defs.h|
|MatMul|math_defs|math_defs.h|
|Maximum|math_defs|math_defs.h|
|Minimum|math_defs|math_defs.h|
|Mul|math_defs|math_defs.h|
|Neg|math_defs|math_defs.h|
|NotEqual|math_defs|math_defs.h|
|Pow|math_defs|math_defs.h|
|Power|math_defs|math_defs.h|
|QuantizedMatMul|math_defs|math_defs.h|
|Range|math_defs|math_defs.h|
|RealDiv|math_defs|math_defs.h|
|Reciprocal|math_defs|math_defs.h|
|ReduceLogSumExp|math_defs|math_defs.h|
|ReduceL2D|math_defs|math_defs.h|
|ReduceMax|math_defs|math_defs.h|
|ReduceMean|math_defs|math_defs.h|
|ReduceMin|math_defs|math_defs.h|
|ReduceProdD|math_defs|math_defs.h|
|ReduceSum|math_defs|math_defs.h|
|Reduction|math_defs|math_defs.h|
|Rint|math_defs|math_defs.h|
|Round|math_defs|math_defs.h|
|Rsqrt|math_defs|math_defs.h|
|Sign|math_defs|math_defs.h|
|Sin|math_defs|math_defs.h|
|SparseToDense|math_defs|math_defs.h|
|Sqrt|math_defs|math_defs.h|
|Square|math_defs|math_defs.h|
|SquaredDifference|math_defs|math_defs.h|
|Sub|math_defs|math_defs.h|
|Tan|math_defs|math_defs.h|
|TruncateDiv|math_defs|math_defs.h|
|Xlogy|math_defs|math_defs.h|
|[Activation](#ZH-CN_TOPIC_0000001327003937__p172642049101212)|nn_defs|nn_defs.h|
|AxisAlignedBboxTransform|nn_defs|nn_defs.h|
|AvgPoolV2|nn_defs|nn_defs.h|
|BiasAdd|nn_defs|nn_defs.h|
|BNInference|nn_defs|nn_defs.h|
|Convolution|nn_defs|nn_defs.h|
|ConvolutionDepthwise|nn_defs|nn_defs.h|
|ConvTranspose|nn_defs|nn_defs.h|
|Eltwise|nn_defs|nn_defs.h|
|FullyConnection|nn_defs|nn_defs.h|
|[HardSwish](#ZH-CN_TOPIC_0000001327003937__p4222104145518)|nn_defs|nn_defs.h|
|InstanceNorm|nn_defs|nn_defs.h|
|LayerNorm|nn_defs|nn_defs.h|
|LogicalXor|nn_defs|nn_defs.h|
|[LogSoftmax](#ZH-CN_TOPIC_0000001327003937__p129850466514)|nn_defs|nn_defs.h|
|LRN|nn_defs|nn_defs.h|
|LSTM|nn_defs|nn_defs.h|
|Normalize|nn_defs|nn_defs.h|
|PoolingD|nn_defs|nn_defs.h|
|[PReLU](#ZH-CN_TOPIC_0000001327003937__p439412725512)|nn_defs|nn_defs.h|
|PriorBox|nn_defs|nn_defs.h|
|Proposal|nn_defs|nn_defs.h|
|QuantizedConvolution|nn_defs|nn_defs.h|
|QuantizedConvolutionDepthwise|nn_defs|nn_defs.h|
|QuantizedFullConnection|nn_defs|nn_defs.h|
|Rank|nn_defs|nn_defs.h|
|Scale|nn_defs|nn_defs.h|
|ScatterNd|nn_defs|nn_defs.h|
|ShuffleChannel|nn_defs|nn_defs.h|
|ShuffleChannelV2|nn_defs|nn_defs.h|
|[Softmax](#ZH-CN_TOPIC_0000001327003937__p374133015557)|nn_defs|nn_defs.h|
|SVDF|nn_defs|nn_defs.h|
|[Threshold](#ZH-CN_TOPIC_0000001327003937__p1388377201513)|nn_defs|nn_defs.h|
|TopK|nn_defs|nn_defs.h|
|[Mish](#ZH-CN_TOPIC_0000001327003937__p102091319477)|nn_defs|nn_defs.h|
|[Swish](#ZH-CN_TOPIC_0000001327003937__p1675143017559)|nn_defs|nn_defs.h|

## ge::op算子

ge::op命名空间下的算子定义所在目录： "/ddk/ai_ddk_lib/include/graph/compatible/"。

|算子名|所属分类|所在文件|
|:------------------------------------------------------------|:-------------|:---------------|
|BatchToSpaceND|array_defs|array_defs.h|
|Concat|array_defs|array_defs.h|
|Data|array_defs|array_defs.h|
|ExpandDims|array_defs|array_defs.h|
|Fill|array_defs|array_defs.h|
|Flatten|array_defs|array_defs.h|
|Gather|array_defs|array_defs.h|
|GatherNd|array_defs|array_defs.h|
|Pack|array_defs|array_defs.h|
|Reshape|array_defs|array_defs.h|
|Size|array_defs|array_defs.h|
|Slice|array_defs|array_defs.h|
|SpaceToBatchND|array_defs|array_defs.h|
|SpaceToDepth|array_defs|array_defs.h|
|Split|array_defs|array_defs.h|
|SplitV|array_defs|array_defs.h|
|StridedSlice|array_defs|array_defs.h|
|Tile|array_defs|array_defs.h|
|Unpack|array_defs|array_defs.h|
|Const|const_defs|const_defs.h|
|Permute|detection_defs|detection_defs.h|
|Crop|image_defs|image_defs.h|
|CropAndResize|image_defs|image_defs.h|
|Interp|image_defs|image_defs.h|
|ResizeBilinear|image_defs|image_defs.h|
|ResizeBilinearExt2|image_defs|image_defs.h|
|ResizeNearestNeighbor|image_defs|image_defs.h|
|Acos|math_defs|math_defs.h|
|Add|math_defs|math_defs.h|
|ArgMax|math_defs|math_defs.h|
|Asin|math_defs|math_defs.h|
|Cast|math_defs|math_defs.h|
|Ceil|math_defs|math_defs.h|
|Cos|math_defs|math_defs.h|
|Equal|math_defs|math_defs.h|
|Exp|math_defs|math_defs.h|
|Expm1|math_defs|math_defs.h|
|Floor|math_defs|math_defs.h|
|FloorDiv|math_defs|math_defs.h|
|FloorMod|math_defs|math_defs.h|
|GreaterEqual|math_defs|math_defs.h|
|Less|math_defs|math_defs.h|
|Log|math_defs|math_defs.h|
|Log1p|math_defs|math_defs.h|
|LogicalAnd|math_defs|math_defs.h|
|LogicalNot|math_defs|math_defs.h|
|LogicalOr|math_defs|math_defs.h|
|MatMul|math_defs|math_defs.h|
|Maximum|math_defs|math_defs.h|
|Minimum|math_defs|math_defs.h|
|Mul|math_defs|math_defs.h|
|Neg|math_defs|math_defs.h|
|Range|math_defs|math_defs.h|
|RealDiv|math_defs|math_defs.h|
|Reciprocal|math_defs|math_defs.h|
|ReduceAll|math_defs|math_defs.h|
|ReduceProd|math_defs|math_defs.h|
|ReduceSum|math_defs|math_defs.h|
|Rint|math_defs|math_defs.h|
|Round|math_defs|math_defs.h|
|Rsqrt|math_defs|math_defs.h|
|Sign|math_defs|math_defs.h|
|Sin|math_defs|math_defs.h|
|Sqrt|math_defs|math_defs.h|
|Square|math_defs|math_defs.h|
|Sub|math_defs|math_defs.h|
|Tan|math_defs|math_defs.h|
|[Activation](#ZH-CN_TOPIC_0000001327003937__p172642049101212)|nn_defs|nn_defs.h|
|BatchNorm|nn_defs|nn_defs.h|
|BatchNormExt2|nn_defs|nn_defs.h|
|BiasAdd|nn_defs|nn_defs.h|
|Convolution|nn_defs|nn_defs.h|
|ConvolutionDepthwise|nn_defs|nn_defs.h|
|Deconvolution|nn_defs|nn_defs.h|
|Eltwise|nn_defs|nn_defs.h|
|FullConnection|nn_defs|nn_defs.h|
|[LogSoftmax](#ZH-CN_TOPIC_0000001327003937__p129850466514)|nn_defs|nn_defs.h|
|LRN|nn_defs|nn_defs.h|
|Pooling|nn_defs|nn_defs.h|
|QuantizedConvolution|nn_defs|nn_defs.h|
|QuantizedConvolutionDepthwise|nn_defs|nn_defs.h|
|QuantizedFullConnection|nn_defs|nn_defs.h|
|Scale|nn_defs|nn_defs.h|
|ShuffleChannel|nn_defs|nn_defs.h|
|[Softmax](#ZH-CN_TOPIC_0000001327003937__p374133015557)|nn_defs|nn_defs.h|
|TopK|nn_defs|nn_defs.h|
|Multinomial|random_defs|random_defs.h|

## 激活算子说明

|算子名|函数公式|
|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Activation|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150609.66528468050799315323187699068780:50001231000000:2800:82FA2DED3402CAF73E3D34679147784E9E4813978127724CDF59234BE37E41D9.png "点击放大")|
|Activation|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150609.56963539431550159963946320506875:50001231000000:2800:4407BE2CA5FE86CA5B652E47AF19925C16C1AB6DCDD638475DF0390CF3CA0C3D.png "点击放大")|
|Activation|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150609.57865575824939476409215448709991:50001231000000:2800:14BFD7101150A29210A9C923BCEAFFC938502B7F4EF439C56665404A0A614C9C.png "点击放大")|
|Activation|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150609.85533001995495008263059216717102:50001231000000:2800:0F37DCC02903697B5EEB92E9FB448EAC14410603DAFDDDA0F63CAD705002612F.png "点击放大") > 说明 > z默认值是20.0，float类型。|
|Activation|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150609.85987720268404413126512982922728:50001231000000:2800:CF3FB8DE320264A7D6955C0F9617EC5434DF2FC19363772E274D988DE1A00AC8.png "点击放大")|
|Activation|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150610.60259499356487484987179338792416:50001231000000:2800:37F71EDEC2F223AA56CC9BAAB9A4C5EDDA72754ECAF18E5CF570690BF097C8D2.png "点击放大")|
|Activation|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150610.89468831686687920388395174836653:50001231000000:2800:6A9F45703657CB2E09072B1FAA974A82B2B817A478828F632586877A132389FD.png "点击放大")|
|Activation|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150610.71331127352922818741581462896153:50001231000000:2800:CC2C57F67D8660650F6382A4CDC5BE37FB9D8F81F9686F7D35B0A83E92A4B374.png "点击放大")|
|Activation|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150610.67903266892689557138997676058048:50001231000000:2800:B5616296EFCD27EF62770196E076433DF8181252C6938E4FF0DD317F56944B57.png "点击放大")|
|Activation|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150610.71374882698004334446567791380679:50001231000000:2800:C7942ACDD906E6A90847AA9127967D9C6E2DE05053EAE1B3D0861DFAD799EF2F.png "点击放大")|
|Activation|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150610.24747720372008407337115603699190:50001231000000:2800:E26078741AE52CDECC049D4AA77FCA1F0FAA3B67B1A4D733AB79453745A10A08.png "点击放大")|
|Activation|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150610.00371025151907525060159810797817:50001231000000:2800:0DFDB8F453B8A6EC68371B63B6444098DCB944C3C9FB42DEBED17527A7E8ACF4.png "点击放大")|
|Activation|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150610.04122376724966726896673111277486:50001231000000:2800:6EE3DF5D45DCDB22DF53FB3A0DC0D9F163652AB43213B088C2702605F3FA204B.png "点击放大")|
|HardSwish|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150610.75794231880863859775301299849689:50001231000000:2800:E1A128CB74F02587AC15FE12F4F5C6A16847141ED54FFA87CD301C01C132F460.png "点击放大")|
|LogSoftmax|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150610.32259622846342854602259338705125:50001231000000:2800:961EA9146EA23B6313E6E7273E907902BB5B339753719C8927A3B98EDD8271B2.png "点击放大")|
|Mish|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150610.90007594170217104594067180424884:50001231000000:2800:909580EF1C691AF02DD139425106AFE86ED7C5434E12952743875614F57CD4AE.png "点击放大")|
|PReLU|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150610.23365075397969731705847905698477:50001231000000:2800:E3D315F2E1304662DBCE8DC420419DE7CE3688B4B69580C1C9EDA9286A8542F4.png "点击放大")|
|Softmax|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150610.70752310897680930613275693530659:50001231000000:2800:609669ED06E5360B819C8CBCE3DA9394EF425DBC394A3F44F3C5FA3833B1F2EC.png "点击放大")|
|Swish|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150610.77307409111881574951029745828087:50001231000000:2800:4FD17CBBC9FE18B13376ED4B10A78E35367D75EBC64DDC52FFC43B298E3911B3.png "点击放大")|
|Threshold|![](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260104150610.96301064383221992267662716496145:50001231000000:2800:DF76912E0D4D7BA62475AB67FD1979AAD083C3BA2EFB0F6DBDE71FF59834D1BF.png "点击放大")|

