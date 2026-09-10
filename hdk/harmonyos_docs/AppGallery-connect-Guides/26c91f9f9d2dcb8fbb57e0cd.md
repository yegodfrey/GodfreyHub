---
name: document/cn/AppGallery-connect-Guides/agc-auth-harmonyos-tokenlistener-0000001151530118
title: Token变更事件监听
uri: https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-auth-harmonyos-tokenlistener-0000001151530118
---

# Token变更事件监听

您可以调用[AGConnectAuth.addTokenListener](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/harmonyos-java-agconnectauth-0000001151371572#section146816253)注册Token事件监听，当发生以下事件时，开发者将会收到通知：

* 取得AGC授权后，取得授权 (SIGNED_IN)
* AGC Token过了有效期后，AGC Token更新 (TOKEN_UPDATED)
* AGC Token过了有效期或者用户登出后，AGC Token失效 (TOKEN_INVALID)
* 用户登出或者销户后，AGC 注销 (SIGNED_OUT)

```
"Java"
AGConnectAuth.getInstance().addTokenListener(new OnTokenListener() {
        public void onChanged(TokenSnapshot tokenSnapshot) {
                State state = tokenSnapshot.getState();
                if (state == State.TOKEN_UPDATED) {
                        String token = tokenSnapshot.getToken();
                }
        }
});
```

