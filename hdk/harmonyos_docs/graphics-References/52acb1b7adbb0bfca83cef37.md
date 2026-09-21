---
name: document/cn/graphics-References/skeletoninfos-0000001110493950
title: SkeletonInfos
uri: https://developer.huawei.com/consumer/cn/doc/graphics-References/skeletoninfos-0000001110493950
---

# SkeletonInfos

|Struct Info|
|:-------------------------------------|
|struct SkeletonInfos FootIK所需的输入和输出数据。|

## Public Field Summary

|Qualifier and Type|Field and Description|
|:------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------|
|[Skeleton](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/skeleton-0000001156973811)[6]|skeletonData 出参&入参，骨骼点列表。 * 0：左髋。 * 1：左膝。 * 2：左踝。 * 3：右髋。 * 4：右膝。 * 5：右踝。|
|[RayHitInfo](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/rayhitinfo-0000001110653854)[2]|rayInfo 左踝和右踝向下方向射线和地面交点信息的数组。 * 0：左踝。 * 1：右踝。|
|[Vector3d](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/vector3d-0000001110493948)[2]|targetPoint 出参，FootIK调整后目标踝关节的三维坐标数组。 * 0：左踝。 * 1：右踝。|
|float|footHeight 脚高度。|
|float|footAngle 当前角色模型脚朝向的角度。|
|[Vector3d](https://developer.huawei.com/consumer/cn/doc/development/graphics-References/vector3d-0000001110493948)|pelvisOffset 出参，髋关节位移。|
|bool|isLeftFootIK 出参，表示是否左脚做了FootIK操作。 * true：左脚做了FootIK操作。 * false：右脚做了FootIK操作。|

