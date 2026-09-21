---
name: document/cn/system-Guides/json_file_as_input_parameter-0000001089822959
title: JSON文件作为输入参数
uri: https://developer.huawei.com/consumer/cn/doc/system-Guides/json_file_as_input_parameter-0000001089822959
---

# JSON文件作为输入参数

## 开发步骤

1. 导入需要的包。

   ```screen
   import android.content.res.AssetManager;
   import android.util.Log;
   import com.huawei.devices.hapticsengine.HapticAttributes;
   import com.huawei.devices.hapticsengine.HapticPlayer;
   import java.io.IOException;
   import java.io.InputStream;
   ```

2. 创建HapticPlayer对象。

   ```screen
   HapticPlayer mHapticPlayer = new HapticPlayer(this);
   ```

3. JSON文件设置振动波形，参见[11.2-JSON文件格式说明](https://developer.huawei.com/consumer/cn/doc/development/system-Guides/json_file_format_description-0000001089822893)。

   ```screen
   private boolean parseStream(String fileName) {
       boolean ret = false;
       // 获取asset资源管理的对象
       AssetManager assetManager = getAssets();
       if (assetManager != null) {
           try {
               // 通过assetManager打开asset目录的json文件
   	    InputStream inputStream = assetManager.open(fileName);
   	    HapticAttributes attr = new HapticAttributes();
               // 设置波形的使用场景
   	    attr.setUsage(HapticAttributes.USAGE_GAME);
               // 加载配置文件，获取文件输入流，调用波形配置文件接口
   	    ret = mHapticPlayer.setHapticWave(attr, inputStream);
   	} catch (IOException e) {
   	    Log.e(TAG, "Failed to open file");
   	    return false;
   	}
       }
       return ret;
   }
   ```

4. 设置循环振动与振动播放。
   1. 设置循环播放，true是循环播放，false是停止循环播放。

      ```screen
      mHapticPlayer.setLooping(true);
      ```


   2. 查询是否循环播放。

      ```screen
      boolean isLoop = mHapticPlayer.isLooping();
      ```

5. 启动振动播放。
   1. 启动播放。

      ```screen
      int ret = mHapticPlayer.play();
      ```

   2. 查询播放状态。

      ```screen
      boolean isPlaying = mHapticPlayer.isPlaying();
      ```

   3. 查询播放时长。

      ```screen
      int duration = mHapticPlayer.getDuration();
      ```

6. (可选) 如果需要动态调节振动波形，参见[动态调节振动波形](https://developer.huawei.com/consumer/cn/doc/development/system-Guides/dynamically_adjust_the_vibration_waveform-0000001089837553)。
7. 停止振动播放。

   ```screen
   mHapticPlayer.stop();
   ```

