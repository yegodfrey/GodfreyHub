---
name: document/cn/doc-references/keyboardevent-0000001054358944
title: KeyBoardEvent
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/keyboardevent-0000001054358944
source: portal
---

# KeyBoardEvent

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---[ohos.multimodalinput.event.MultimodalEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970) |---|---[ohos.multimodalinput.event.KeyEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285) |---|---|---ohos.multimodalinput.event.KeyBoardEvent
    
    public abstract class KeyBoardEvent
    extends [KeyEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285)  
  
---  
Defines all keyboard events. 

This class extends the [KeyEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285) class. It defines the keycodes and methods for various keyboard events.

**Since:**

1

**See Also:**

[KeyEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285)

#### Nested Class Summary

Nested classes/interfaces inherited from interface ohos.utils.[Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)  
---  
[Sequenceable.Producer](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable_producer-0000001054678971)<[T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable_producer-0000001054678971)>  
  
#### Field Summary

Fields inherited from class ohos.multimodalinput.event.[KeyEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285)  
---  
[KEY_0](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_0), [KEY_1](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_1), [KEY_2](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_2), [KEY_3](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_3), [KEY_4](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_4), [KEY_5](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_5), [KEY_6](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_6), [KEY_7](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_7), [KEY_8](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_8), [KEY_9](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_9), [KEY_A](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_A), [KEY_ALT_LEFT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_ALT_LEFT), [KEY_ALT_RIGHT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_ALT_RIGHT), [KEY_APOSTROPHE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_APOSTROPHE), [KEY_AT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_AT), [KEY_B](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_B), [KEY_BACK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_BACK), [KEY_BACKSLASH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_BACKSLASH), [KEY_BREAK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_BREAK), [KEY_BRIGHTNESS_DOWN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_BRIGHTNESS_DOWN), [KEY_BRIGHTNESS_UP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_BRIGHTNESS_UP), [KEY_C](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_C), [KEY_CALL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_CALL), [KEY_CAMERA](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_CAMERA), [KEY_CAPS_LOCK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_CAPS_LOCK), [KEY_CLEAR](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_CLEAR), [KEY_COMMA](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_COMMA), [KEY_CTRL_LEFT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_CTRL_LEFT), [KEY_CTRL_RIGHT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_CTRL_RIGHT), [KEY_CUSTOM1](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_CUSTOM1), [KEY_D](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_D), [KEY_DEL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_DEL), [KEY_DPAD_CENTER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_DPAD_CENTER), [KEY_DPAD_DOWN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_DPAD_DOWN), [KEY_DPAD_LEFT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_DPAD_LEFT), [KEY_DPAD_RIGHT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_DPAD_RIGHT), [KEY_DPAD_UP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_DPAD_UP), [KEY_E](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_E), [KEY_ENDCALL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_ENDCALL), [KEY_ENTER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_ENTER), [KEY_ENVELOPE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_ENVELOPE), [KEY_EQUALS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_EQUALS), [KEY_ESCAPE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_ESCAPE), [KEY_EXPLORER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_EXPLORER), [KEY_F](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_F), [KEY_F1](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_F1), [KEY_F10](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_F10), [KEY_F11](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_F11), [KEY_F12](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_F12), [KEY_F2](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_F2), [KEY_F3](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_F3), [KEY_F4](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_F4), [KEY_F5](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_F5), [KEY_F6](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_F6), [KEY_F7](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_F7), [KEY_F8](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_F8), [KEY_F9](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_F9), [KEY_FOCUS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_FOCUS), [KEY_FORWARD](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_FORWARD), [KEY_FORWARD_DEL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_FORWARD_DEL), [KEY_FUNCTION](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_FUNCTION), [KEY_G](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_G), [KEY_GRAVE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_GRAVE), [KEY_H](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_H), [KEY_HEADSETHOOK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_HEADSETHOOK), [KEY_HOME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_HOME), [KEY_I](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_I), [KEY_INSERT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_INSERT), [KEY_J](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_J), [KEY_K](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_K), [KEY_L](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_L), [KEY_LAUNCHER_MENU](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_LAUNCHER_MENU), [KEY_LEFT_BRACKET](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_LEFT_BRACKET), [KEY_LEFT_KNOB](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_LEFT_KNOB), [KEY_LEFT_KNOB_ROLL_DOWN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_LEFT_KNOB_ROLL_DOWN), [KEY_LEFT_KNOB_ROLL_UP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_LEFT_KNOB_ROLL_UP), [KEY_M](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_M), [KEY_MEDIA_CLOSE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_MEDIA_CLOSE), [KEY_MEDIA_EJECT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_MEDIA_EJECT), [KEY_MEDIA_FAST_FORWARD](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_MEDIA_FAST_FORWARD), [KEY_MEDIA_NEXT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_MEDIA_NEXT), [KEY_MEDIA_PAUSE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_MEDIA_PAUSE), [KEY_MEDIA_PLAY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_MEDIA_PLAY), [KEY_MEDIA_PLAY_PAUSE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_MEDIA_PLAY_PAUSE), [KEY_MEDIA_PREVIOUS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_MEDIA_PREVIOUS), [KEY_MEDIA_RECORD](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_MEDIA_RECORD), [KEY_MEDIA_REWIND](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_MEDIA_REWIND), [KEY_MEDIA_STOP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_MEDIA_STOP), [KEY_MENU](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_MENU), [KEY_META_LEFT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_META_LEFT), [KEY_META_RIGHT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_META_RIGHT), [KEY_MINUS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_MINUS), [KEY_MOVE_END](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_MOVE_END), [KEY_MOVE_HOME](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_MOVE_HOME), [KEY_N](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_N), [KEY_NOTIFICATION](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NOTIFICATION), [KEY_NUM_LOCK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUM_LOCK), [KEY_NUMPAD_0](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_0), [KEY_NUMPAD_1](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_1), [KEY_NUMPAD_2](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_2), [KEY_NUMPAD_3](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_3), [KEY_NUMPAD_4](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_4), [KEY_NUMPAD_5](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_5), [KEY_NUMPAD_6](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_6), [KEY_NUMPAD_7](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_7), [KEY_NUMPAD_8](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_8), [KEY_NUMPAD_9](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_9), [KEY_NUMPAD_ADD](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_ADD), [KEY_NUMPAD_COMMA](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_COMMA), [KEY_NUMPAD_DIVIDE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_DIVIDE), [KEY_NUMPAD_DOT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_DOT), [KEY_NUMPAD_ENTER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_ENTER), [KEY_NUMPAD_EQUALS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_EQUALS), [KEY_NUMPAD_LEFT_PAREN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_LEFT_PAREN), [KEY_NUMPAD_MULTIPLY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_MULTIPLY), [KEY_NUMPAD_RIGHT_PAREN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_RIGHT_PAREN), [KEY_NUMPAD_SUBTRACT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_NUMPAD_SUBTRACT), [KEY_O](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_O), [KEY_P](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_P), [KEY_PAGE_DOWN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_PAGE_DOWN), [KEY_PAGE_UP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_PAGE_UP), [KEY_PERIOD](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_PERIOD), [KEY_PLUS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_PLUS), [KEY_POUND](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_POUND), [KEY_POWER](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_POWER), [KEY_PRESSED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_PRESSED), [KEY_Q](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_Q), [KEY_R](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_R), [KEY_RELEASED](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_RELEASED), [KEY_RIGHT_BRACKET](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_RIGHT_BRACKET), [KEY_RIGHT_KNOB](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_RIGHT_KNOB), [KEY_RIGHT_KNOB_ROLL_DOWN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_RIGHT_KNOB_ROLL_DOWN), [KEY_RIGHT_KNOB_ROLL_UP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_RIGHT_KNOB_ROLL_UP), [KEY_S](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_S), [KEY_SCROLL_LOCK](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_SCROLL_LOCK), [KEY_SEARCH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_SEARCH), [KEY_SEMICOLON](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_SEMICOLON), [KEY_SHIFT_LEFT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_SHIFT_LEFT), [KEY_SHIFT_RIGHT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_SHIFT_RIGHT), [KEY_SLASH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_SLASH), [KEY_SPACE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_SPACE), [KEY_STAR](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_STAR), [KEY_SYM](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_SYM), [KEY_SYSRQ](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_SYSRQ), [KEY_T](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_T), [KEY_TAB](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_TAB), [KEY_U](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_U), [KEY_UNKNOWN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_UNKNOWN), [KEY_V](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_V), [KEY_VOICE_ASSISTANT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_VOICE_ASSISTANT), [KEY_VOICE_SOURCE_SWITCH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_VOICE_SOURCE_SWITCH), [KEY_VOLUME_DOWN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_VOLUME_DOWN), [KEY_VOLUME_MUTE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_VOLUME_MUTE), [KEY_VOLUME_UP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_VOLUME_UP), [KEY_W](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_W), [KEY_WEAR_1](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_WEAR_1), [KEY_X](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_X), [KEY_Y](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_Y), [KEY_Z](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__KEY_Z), [NOW_MAX_KEY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__NOW_MAX_KEY)  
  
Fields inherited from class ohos.multimodalinput.event.[MultimodalEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970)  
---  
[BUILTIN_KEY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__BUILTIN_KEY), [DEFAULT_TYPE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__DEFAULT_TYPE), [highLevelEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__highLevelEvent), [KEYBOARD](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__KEYBOARD), [MOUSE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__MOUSE), [ROTATION](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__ROTATION), [SPEECH](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__SPEECH), [STYLUS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__STYLUS), [TOUCH_PANEL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__TOUCH_PANEL), [UNSUPPORTED_DEVICE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__UNSUPPORTED_DEVICE), [uuid](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__uuid)  
  
#### Constructor Summary

Constructor | Description  
---|---  
[KeyBoardEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyboardevent-0000001054358944#ZH-CN_TOPIC_0000001054358944__KeyBoardEvent--)​() |     
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
void | [disableIme](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyboardevent-0000001054358944#ZH-CN_TOPIC_0000001054358944__disableIme--)​() |  Closes the IME.   
void | [enableIme](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyboardevent-0000001054358944#ZH-CN_TOPIC_0000001054358944__enableIme--)​() |  Starts the input method editor (IME).   
abstract int | [getUnicode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyboardevent-0000001054358944#ZH-CN_TOPIC_0000001054358944__getUnicode--)​() |  Obtains the Unicode mapping to a key.   
boolean | [isHandledByIme](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyboardevent-0000001054358944#ZH-CN_TOPIC_0000001054358944__isHandledByIme--)​() |  Checks whether the IME is in use.   
abstract boolean | [isNoncharacterKeyPressed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyboardevent-0000001054358944#ZH-CN_TOPIC_0000001054358944__isNoncharacterKeyPressed-int-)​(int keycode) |  Checks whether a single input non-character key is pressed.   
abstract boolean | [isNoncharacterKeyPressed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyboardevent-0000001054358944#ZH-CN_TOPIC_0000001054358944__isNoncharacterKeyPressed-int-int-)​(int keycode1, int keycode2) |  Checks whether two input non-character keys are both pressed.   
abstract boolean | [isNoncharacterKeyPressed](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyboardevent-0000001054358944#ZH-CN_TOPIC_0000001054358944__isNoncharacterKeyPressed-int-int-int-)​(int keycode1, int keycode2, int keycode3) |  Checks whether three input non-character keys are all pressed.   
  
Methods inherited from class ohos.multimodalinput.event.[KeyEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285)  
---  
[getKeyCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__getKeyCode--), [getKeyDownDuration](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__getKeyDownDuration--), [getMaxKeyCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__getMaxKeyCode--), [isKeyDown](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyevent-0000001054120285#ZH-CN_TOPIC_0000001054120285__isKeyDown--)  
  
Methods inherited from class ohos.multimodalinput.event.[MultimodalEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970)  
---  
[getDeviceId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__getDeviceId--), [getInputDeviceId](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__getInputDeviceId--), [getOccurredTime](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__getOccurredTime--), [getSourceDevice](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__getSourceDevice--), [getUuid](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__getUuid--), [isSameEvent](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__isSameEvent-java_util_UUID-), [marshalling](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__marshalling-ohos_utils_Parcel-), [unmarshalling](https://developer.harmonyos.com/cn/docs/documentation/doc-references/multimodalevent-0000001054518970#ZH-CN_TOPIC_0000001054518970__unmarshalling-ohos_utils_Parcel-)  
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
Methods inherited from interface ohos.utils.[Sequenceable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001)  
---  
[hasFileDescriptor](https://developer.harmonyos.com/cn/docs/documentation/doc-references/sequenceable-0000001054239001#ZH-CN_TOPIC_0000001054239001__hasFileDescriptor--)  
  
#### Constructor Detail

#### [h2]KeyBoardEvent

public KeyBoardEvent​()

#### Method Detail

#### [h2]enableIme

public void enableIme​()

Starts the input method editor (IME). 

**Since:**

1

**See Also:**

[disableIme()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyboardevent-0000001054358944#ZH-CN_TOPIC_0000001054358944__disableIme--), [isHandledByIme()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyboardevent-0000001054358944#ZH-CN_TOPIC_0000001054358944__isHandledByIme--)

#### [h2]disableIme

public void disableIme​()

Closes the IME. 

**Since:**

1

**See Also:**

[enableIme()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyboardevent-0000001054358944#ZH-CN_TOPIC_0000001054358944__enableIme--), [isHandledByIme()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyboardevent-0000001054358944#ZH-CN_TOPIC_0000001054358944__isHandledByIme--)

#### [h2]isHandledByIme

public boolean isHandledByIme​()

Checks whether the IME is in use. 

**Returns:**

Returns true if the IME is in use; returns false otherwise.

**Since:**

1

**See Also:**

[enableIme()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyboardevent-0000001054358944#ZH-CN_TOPIC_0000001054358944__enableIme--), [disableIme()](https://developer.harmonyos.com/cn/docs/documentation/doc-references/keyboardevent-0000001054358944#ZH-CN_TOPIC_0000001054358944__disableIme--)

#### [h2]isNoncharacterKeyPressed

public abstract boolean isNoncharacterKeyPressed​(int keycode)

Checks whether a single input non-character key is pressed. 

A non-character key is any key except those with visible characters (such as A-Z, 0-9, space, comma, and period). Typical examples are the Ctrl, Alt, and Shift keys.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
keycode  |  Indicates the keycode of the first non-character key.  
  
**Returns:**

Returns true if the input non-character key mapping to the keycode is pressed; returns false otherwise.

**Since:**

1

#### [h2]isNoncharacterKeyPressed

public abstract boolean isNoncharacterKeyPressed​(int keycode1, int keycode2)

Checks whether two input non-character keys are both pressed. 

A non-character key is any key except those with visible characters (such as A-Z, 0-9, space, comma, and period). Typical examples are the Ctrl, Alt, and Shift keys.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
keycode1  |  Indicates the keycode of the first non-character key.  
keycode2  |  Indicates the keycode of the second non-character key.  
  
**Returns:**

Returns true if the two input non-character keys mapping to the keycodes are pressed; returns false otherwise.

**Since:**

1

#### [h2]isNoncharacterKeyPressed

public abstract boolean isNoncharacterKeyPressed​(int keycode1, int keycode2, int keycode3)

Checks whether three input non-character keys are all pressed. 

A non-character key is any key except those with visible characters (such as A-Z, 0-9, space, comma, and period). Typical examples are the Ctrl, Alt, and Shift keys.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
keycode1  |  Indicates the keycode of the first non-character key.  
keycode2  |  Indicates the keycode of the second non-character key.  
keycode3  |  Indicates the keycode of the third non-character key.  
  
**Returns:**

Returns true if the three input non-character keys mapping to the keycodes are pressed; returns false otherwise.

**Since:**

1

#### [h2]getUnicode

public abstract int getUnicode​()

Obtains the Unicode mapping to a key. 

A Unicode code is a combination of keys and non-character keys.

**Returns:**

Returns the Unicode mapping to the key; returns 0 if there is no matching Unicode.

**Since:**

1
