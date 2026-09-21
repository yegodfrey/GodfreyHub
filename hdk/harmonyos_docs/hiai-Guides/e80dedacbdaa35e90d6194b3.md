---
name: document/cn/hiai-Guides/parameters-in-the-dynamic-aipp-0000001073137922
title: 动态AIPP配置文件参数
uri: https://developer.huawei.com/consumer/cn/doc/hiai-Guides/parameters-in-the-dynamic-aipp-0000001073137922
---

# 动态AIPP配置文件参数

动态AIPP配置采用json文件格式。crop、resize、padding、dtc支持多batch配置。配置文件参数如下：

```screen
{
    "input_para":
    {
        "//": "输入图片类型，取值范围[YUV420SP_U8, XRGB8888_U8, ARGB8888_U8, YUYV_U8, YUV422SP_U8, AYUV444_U8, YUV400_U8, RGB888_U8]",
        "format": "YUV420SP_U8",  
        "shape":
        {
            "//": "输入图片宽度",
            "src_image_size_w": 192,
            "//": "输入图片高度",
            "src_image_size_h": 300
        }
    },
    "crop":
    [
        {
            "//": "裁剪使能开关",
            "switch": true,
            "//": "裁剪起始位置水平方向坐标",
            "start_pos_w": 0,
            "//": "裁剪起始位置垂直方向坐标",
            "start_pos_h": 0,
            "//": "裁剪出的图像宽度",
            "size_w": 180,
            "//": "裁剪出的图像高度",
            "size_h": 300
        },
        {
            "switch": false,
            "start_pos_w": 100,
            "start_pos_h": 100,
            "size_w": 180,
            "size_h": 300
        }
    ],
    "resize":
    [
        {
            "//": "缩放使能开关",
            "switch": true,
            "//": "缩放后图像宽度",
            "resize_output_w" : 180,
            "//": "缩放后图像高度",
            "resize_output_h" : 300
        },
        {
            "switch": false,
            "resize_output_w" : 200,
            "resize_output_h" : 300
        }
    ],
    "padding":
    [
        {
            "//": "补边使能开关",
            "switch": true,
            "//": "图像左侧补边像素数",
            "left_padding_size": 0,
            "//": "图像右侧补边像素数",
            "right_padding_size": 0,
            "//": "图像上侧补边像素数",
            "top_padding_size": 0,
            "//": "图像下侧补边像素数",
            "bottom_padding_size": 0
        },
        {
            "switch": false,
            "left_padding_size": -180,
            "right_padding_size": 0,
            "top_padding_size": 0,
            "bottom_padding_size": 0
        }
    ],
    "csc":
    {
        "//": "色域转换使能开关",
        "switch": true,
        "//": "色域转换矩阵元素",
        "matrix_r0c0": 0,
        "matrix_r0c1": 0,                 
        "matrix_r0c2": 0,                 
        "matrix_r1c0": 0,                 
        "matrix_r1c1": 0,                 
        "matrix_r1c2": 0,                 
        "matrix_r2c0": 0,                 
        "matrix_r2c1": 0,                 
        "matrix_r2c2": 0,
        "//": "YUV转RGB时的输入偏移",                 
        "input_bias_0": 0,
        "input_bias_1": 0,                
        "input_bias_2": 0,
        "//": "RGB转YUV时的输出偏移",
        "output_bias_0": 0,
        "output_bias_1": 0,
        "output_bias_2": 0
    },
    "dtc":
    [
        {
            "//": "通道0均值",
            "mean_chn_0": 104,
            "//": "通道1均值",
            "mean_chn_1": 117,
            "//": "通道2均值",
            "mean_chn_2": 123,
            "//": "通道3均值",
            "mean_chn_3": 0,
            "//": "通道0最小值",
            "min_chn_0": 0.0,
            "//": "通道1最小值",
            "min_chn_1": 0.0,
            "//": "通道2最小值",
            "min_chn_2": 0.0,
            "//": "通道3最小值",
            "min_chn_3": 0.0,
            "//": "通道0方差",
            "var_reci_chn_0": 1.0,
            "//": "通道1方差",
            "var_reci_chn_1": 1.0,
            "//": "通道2方差",
            "var_reci_chn_2": 1.0,
            "//": "通道3方差",
            "var_reci_chn_3": 1.0
        }
    ],
    "channnel_swap":
    {
        "//": "RB/UV通道交换开关",
        "rbuv_swap_switch": false,
        "//": "AX通道交换开关",
        "ax_swap_switch": false
    }
}
```

