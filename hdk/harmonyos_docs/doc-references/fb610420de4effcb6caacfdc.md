---
name: document/cn/doc-references/mathcontext-0000001054120114
title: MathContext
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/mathcontext-0000001054120114
source: portal
---

# MathContext

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---ohos.global.icu.math.MathContext
    
    public final class MathContext
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)
    implements [Serializable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/serializable-0000001054358416)  
  
---  
The MathContext immutable class encapsulates the settings understood by the operator methods of the [BigDecimal](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bigdecimal-0000001054120185) class (and potentially other classes). Operator methods are those that effect an operation on a number or a pair of numbers. 

The settings, which are not base-dependent, comprise: 

    1. digits: the number of digits (precision) to be used for an operation 
    2. form: the form of any exponent that results from the operation 
    3. lostDigits: whether checking for lost digits is enabled 
    4. roundingMode: the algorithm to be used for rounding. 

When provided, a MathContext object supplies the settings for an operation directly. 

When MathContext.DEFAULT is provided for a MathContext parameter then the default settings are used (9, SCIENTIFIC, false, ROUND_HALF_UP). 

In the BigDecimal class, all methods which accept a MathContext object defaults) also have a version of the method which does not accept a MathContext parameter. These versions carry out unlimited precision fixed point arithmetic (as though the settings were (0, PLAIN, false, ROUND_HALF_UP). 

The instance variables are shared with default access (so they are directly accessible to the BigDecimal class), but must never be changed. 

The rounding mode constants have the same names and values as the constants of the same name in java.math.BigDecimal, to maintain compatibility with earlier versions of BigDecimal.

**See Also:**

[BigDecimal](https://developer.harmonyos.com/cn/docs/documentation/doc-references/bigdecimal-0000001054120185), 

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static [MathContext](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114) | [DEFAULT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__DEFAULT) |  A MathContext object initialized to the default settings for general-purpose arithmetic.   
static int | [ENGINEERING](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ENGINEERING) |  Standard floating point notation (with engineering exponential format, where the power of ten is a multiple of 3).   
static int | [PLAIN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__PLAIN) |  Plain (fixed point) notation, without any exponent.   
static int | [ROUND_CEILING](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ROUND_CEILING) |  Rounding mode to round to a more positive number.   
static int | [ROUND_DOWN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ROUND_DOWN) |  Rounding mode to round towards zero.   
static int | [ROUND_FLOOR](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ROUND_FLOOR) |  Rounding mode to round to a more negative number.   
static int | [ROUND_HALF_DOWN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ROUND_HALF_DOWN) |  Rounding mode to round to nearest neighbor, where an equidistant value is rounded down.   
static int | [ROUND_HALF_EVEN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ROUND_HALF_EVEN) |  Rounding mode to round to nearest neighbor, where an equidistant value is rounded to the nearest even neighbor.   
static int | [ROUND_HALF_UP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ROUND_HALF_UP) |  Rounding mode to round to nearest neighbor, where an equidistant value is rounded up.   
static int | [ROUND_UNNECESSARY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ROUND_UNNECESSARY) |  Rounding mode to assert that no rounding is necessary.   
static int | [ROUND_UP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ROUND_UP) |  Rounding mode to round away from zero.   
static int | [SCIENTIFIC](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__SCIENTIFIC) |  Standard floating point notation (with scientific exponential format, where there is one digit before any decimal point).   
  
#### Constructor Summary

Constructor | Description  
---|---  
[MathContext](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__MathContext-int-)​(int setdigits) |  Constructs a new MathContext with a specified precision.   
[MathContext](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__MathContext-int-int-)​(int setdigits, int setform) |  Constructs a new MathContext with a specified precision and form.   
[MathContext](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__MathContext-int-int-boolean-)​(int setdigits, int setform, boolean setlostdigits) |  Constructs a new MathContext with a specified precision, form, and lostDigits setting.   
[MathContext](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__MathContext-int-int-boolean-int-)​(int setdigits, int setform, boolean setlostdigits, int setroundingmode) |  Constructs a new MathContext with a specified precision, form, lostDigits, and roundingMode setting.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
int | [getDigits](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__getDigits--)​() |  Returns the digits setting.   
int | [getForm](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__getForm--)​() |  Returns the form setting.   
boolean | [getLostDigits](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__getLostDigits--)​() |  Returns the lostDigits setting.   
int | [getRoundingMode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__getRoundingMode--)​() |  Returns the roundingMode setting.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__toString--)​() |  Returns the MathContext as a readable string.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]DEFAULT

public static final [MathContext](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114) DEFAULT

A MathContext object initialized to the default settings for general-purpose arithmetic. That is, digits=9 form=SCIENTIFIC lostDigits=false roundingMode=ROUND_HALF_UP. 

**See Also:**

[SCIENTIFIC](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__SCIENTIFIC), [ROUND_HALF_UP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ROUND_HALF_UP)

#### [h2]ENGINEERING

public static final int ENGINEERING

Standard floating point notation (with engineering exponential format, where the power of ten is a multiple of 3). Used as a setting to control the form of the result of a BigDecimal operation. A zero result in plain form may have a decimal part of one or more zeros. 

**See Also:**

[PLAIN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__PLAIN), [SCIENTIFIC](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__SCIENTIFIC), [Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_global_icu_math_MathContext_ENGINEERING)

#### [h2]PLAIN

public static final int PLAIN

Plain (fixed point) notation, without any exponent. Used as a setting to control the form of the result of a BigDecimal operation. A zero result in plain form may have a decimal part of one or more zeros. 

**See Also:**

[ENGINEERING](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ENGINEERING), [SCIENTIFIC](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__SCIENTIFIC), [Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_global_icu_math_MathContext_PLAIN)

#### [h2]ROUND_CEILING

public static final int ROUND_CEILING

Rounding mode to round to a more positive number. Used as a setting to control the rounding mode used during a BigDecimal operation. 

If any of the discarded digits are non-zero then the result should be rounded towards the next more positive digit.

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_global_icu_math_MathContext_ROUND_CEILING)

#### [h2]ROUND_DOWN

public static final int ROUND_DOWN

Rounding mode to round towards zero. Used as a setting to control the rounding mode used during a BigDecimal operation. 

All discarded digits are ignored (truncated). The result is neither incremented nor decremented.

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_global_icu_math_MathContext_ROUND_DOWN)

#### [h2]ROUND_FLOOR

public static final int ROUND_FLOOR

Rounding mode to round to a more negative number. Used as a setting to control the rounding mode used during a BigDecimal operation. 

If any of the discarded digits are non-zero then the result should be rounded towards the next more negative digit.

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_global_icu_math_MathContext_ROUND_FLOOR)

#### [h2]ROUND_HALF_DOWN

public static final int ROUND_HALF_DOWN

Rounding mode to round to nearest neighbor, where an equidistant value is rounded down. Used as a setting to control the rounding mode used during a BigDecimal operation. 

If the discarded digits represent greater than half (0.5 times) the value of a one in the next position then the result should be rounded up (away from zero). Otherwise the discarded digits are ignored.

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_global_icu_math_MathContext_ROUND_HALF_DOWN)

#### [h2]ROUND_HALF_EVEN

public static final int ROUND_HALF_EVEN

Rounding mode to round to nearest neighbor, where an equidistant value is rounded to the nearest even neighbor. Used as a setting to control the rounding mode used during a BigDecimal operation. 

If the discarded digits represent greater than half (0.5 times) the value of a one in the next position then the result should be rounded up (away from zero). If they represent less than half, then the result should be rounded down. 

Otherwise (they represent exactly half) the result is rounded down if its rightmost digit is even, or rounded up if its rightmost digit is odd (to make an even digit).

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_global_icu_math_MathContext_ROUND_HALF_EVEN)

#### [h2]ROUND_HALF_UP

public static final int ROUND_HALF_UP

Rounding mode to round to nearest neighbor, where an equidistant value is rounded up. Used as a setting to control the rounding mode used during a BigDecimal operation. 

If the discarded digits represent greater than or equal to half (0.5 times) the value of a one in the next position then the result should be rounded up (away from zero). Otherwise the discarded digits are ignored.

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_global_icu_math_MathContext_ROUND_HALF_UP)

#### [h2]ROUND_UNNECESSARY

public static final int ROUND_UNNECESSARY

Rounding mode to assert that no rounding is necessary. Used as a setting to control the rounding mode used during a BigDecimal operation. 

Rounding (potential loss of information) is not permitted. If any of the discarded digits are non-zero then an ArithmeticException should be thrown.

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_global_icu_math_MathContext_ROUND_UNNECESSARY)

#### [h2]ROUND_UP

public static final int ROUND_UP

Rounding mode to round away from zero. Used as a setting to control the rounding mode used during a BigDecimal operation. 

If any of the discarded digits are non-zero then the result will be rounded up (away from zero).

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_global_icu_math_MathContext_ROUND_UP)

#### [h2]SCIENTIFIC

public static final int SCIENTIFIC

Standard floating point notation (with scientific exponential format, where there is one digit before any decimal point). Used as a setting to control the form of the result of a BigDecimal operation. A zero result in plain form may have a decimal part of one or more zeros. 

**See Also:**

[ENGINEERING](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ENGINEERING), [PLAIN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__PLAIN), [Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__ohos_global_icu_math_MathContext_SCIENTIFIC)

#### Constructor Detail

#### [h2]MathContext

public MathContext​(int setdigits)

Constructs a new MathContext with a specified precision. The other settings are set to the default values (see [DEFAULT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__DEFAULT)). An IllegalArgumentException is thrown if the setdigits parameter is out of range (<0 or >999999999). 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
setdigits  |  The int digits setting for this MathContext.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  parameter out of range.  
  
#### [h2]MathContext

public MathContext​(int setdigits, int setform)

Constructs a new MathContext with a specified precision and form. The other settings are set to the default values (see [DEFAULT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__DEFAULT)). An IllegalArgumentException is thrown if the setdigits parameter is out of range (<0 or >999999999), or if the value given for the setform parameter is not one of the appropriate constants. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
setdigits  |  The int digits setting for this MathContext.  
setform  |  The int form setting for this MathContext.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  parameter out of range.  
  
#### [h2]MathContext

public MathContext​(int setdigits, int setform, boolean setlostdigits)

Constructs a new MathContext with a specified precision, form, and lostDigits setting. The roundingMode setting is set to its default value (see [DEFAULT](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__DEFAULT)). An IllegalArgumentException is thrown if the setdigits parameter is out of range (<0 or >999999999), or if the value given for the setform parameter is not one of the appropriate constants. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
setdigits  |  The int digits setting for this MathContext.  
setform  |  The int form setting for this MathContext.  
setlostdigits  |  The boolean lostDigits setting for this MathContext.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  parameter out of range.  
  
#### [h2]MathContext

public MathContext​(int setdigits, int setform, boolean setlostdigits, int setroundingmode)

Constructs a new MathContext with a specified precision, form, lostDigits, and roundingMode setting. An IllegalArgumentException is thrown if the setdigits parameter is out of range (<0 or >999999999), or if the value given for the setform or setroundingmode parameters is not one of the appropriate constants. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
setdigits  |  The int digits setting for this MathContext.  
setform  |  The int form setting for this MathContext.  
setlostdigits  |  The boolean lostDigits setting for this MathContext.  
setroundingmode  |  The int roundingMode setting for this MathContext.  
  
**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  parameter out of range.  
  
#### Method Detail

#### [h2]getDigits

public int getDigits​()

Returns the digits setting. This value is always non-negative. 

**Returns:**

an int which is the value of the digits setting

#### [h2]getForm

public int getForm​()

Returns the form setting. This will be one of [ENGINEERING](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ENGINEERING), [PLAIN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__PLAIN), or [SCIENTIFIC](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__SCIENTIFIC). 

**Returns:**

an int which is the value of the form setting

#### [h2]getLostDigits

public boolean getLostDigits​()

Returns the lostDigits setting. This will be either true (enabled) or false (disabled). 

**Returns:**

a boolean which is the value of the lostDigits setting

#### [h2]getRoundingMode

public int getRoundingMode​()

Returns the roundingMode setting. This will be one of [ROUND_CEILING](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ROUND_CEILING), [ROUND_DOWN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ROUND_DOWN), [ROUND_FLOOR](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ROUND_FLOOR), [ROUND_HALF_DOWN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ROUND_HALF_DOWN), [ROUND_HALF_EVEN](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ROUND_HALF_EVEN), [ROUND_HALF_UP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ROUND_HALF_UP), [ROUND_UNNECESSARY](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ROUND_UNNECESSARY), or [ROUND_UP](https://developer.harmonyos.com/cn/docs/documentation/doc-references/mathcontext-0000001054120114#ZH-CN_TOPIC_0000001054120114__ROUND_UP). 

**Returns:**

an int which is the value of the roundingMode setting

#### [h2]toString

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) toString​()

Returns the MathContext as a readable string. The String returned represents the settings of the MathContext object as four blank-delimited words separated by a single blank and with no leading or trailing blanks, as follows: 
    1. digits=, immediately followed by the value of the digits setting as a numeric word. 
    2. form=, immediately followed by the value of the form setting as an uppercase word (one of SCIENTIFIC, PLAIN, or ENGINEERING). 
    3. lostDigits=, immediately followed by the value of the lostDigits setting (1 if enabled, 0 if disabled). 
    4. roundingMode=, immediately followed by the value of the roundingMode setting as a word. This word will be the same as the name of the corresponding public constant. 

For example: digits=9 form=SCIENTIFIC lostDigits=0 roundingMode=ROUND_HALF_UP 

Additional words may be appended to the result of toString in the future if more properties are added to the class.

**Overrides:**

[toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

a String representing the context settings.
