---
name: document/cn/doc-references/pattern-0000001054439927
title: Pattern
uri: https://developer.huawei.com/consumer/cn/doc/doc-references/pattern-0000001054439927
source: portal
---

# Pattern

[java.lang.Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446) |---java.util.regex.Pattern
    
    public final class Pattern
    extends [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)
    implements [Serializable](https://developer.harmonyos.com/cn/docs/documentation/doc-references/serializable-0000001054358416)  
  
---  
A compiled representation of a regular expression. 

A regular expression, specified as a string, must first be compiled into an instance of this class. The resulting pattern can then be used to create a [Matcher](https://developer.harmonyos.com/cn/docs/documentation/doc-references/matcher-0000001054119898) object that can match arbitrary [character sequences](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) against the regular expression. All of the state involved in performing a match resides in the matcher, so many matchers can share the same pattern. 

A typical invocation sequence is thus 
    
    Pattern p = Pattern.[compile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__compile-java_lang_String-)("a*b");
     Matcher m = p.[matcher](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__matcher-java_lang_CharSequence-)("aaaaab");
     boolean b = m.[Matcher#matches](https://developer.harmonyos.com/cn/docs/documentation/doc-references/matcher-0000001054119898#ZH-CN_TOPIC_0000001054119898__matches--)();

A [matches](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__matches-java_lang_String-java_lang_CharSequence-) method is defined by this class as a convenience for when a regular expression is used just once. This method compiles an expression and matches an input sequence against it in a single invocation. The statement 
    
    boolean b = Pattern.matches("a*b", "aaaaab");

is equivalent to the three statements above, though for repeated matches it is less efficient since it does not allow the compiled pattern to be reused. 

Instances of this class are immutable and are safe for use by multiple concurrent threads. Instances of the [Matcher](https://developer.harmonyos.com/cn/docs/documentation/doc-references/matcher-0000001054119898) class are not safe for such use. 

**_Summary of regular-expression constructs_** **_Backslashes, escapes, and quoting_**

The backslash character ('\') serves to introduce escaped constructs, as defined in the table above, as well as to quote characters that otherwise would be interpreted as unescaped constructs. Thus the expression \\\ matches a single backslash and \\{ matches a left brace. 

It is an error to use a backslash prior to any alphabetic character that does not denote an escaped construct; these are reserved for future extensions to the regular-expression language. A backslash may be used prior to a non-alphabetic character regardless of whether that character is part of an unescaped construct. 

Backslashes within string literals in Java source code are interpreted as required by 《The Java™ Language Specification》 as either Unicode escapes (section 3.3) or other character escapes (section 3.10.6) It is therefore necessary to double backslashes in string literals that represent regular expressions to protect them from interpretation by the Java bytecode compiler. The string literal "\b", for example, matches a single backspace character when interpreted as a regular expression, while "\\\b" matches a word boundary. The string literal "\\(hello\\)" is illegal and leads to a compile-time error; in order to match the string (hello) the string literal "\\\\(hello\\\\)" must be used. 

**_Character Classes_**

Character classes may appear within other character classes, and may be composed by the union operator (implicit) and the intersection operator (&&). The union operator denotes a class that contains every character that is in at least one of its operand classes. The intersection operator denotes a class that contains every character that is in both of its operand classes. 

The precedence of character-class operators is as follows, from highest to lowest: 

Note that a different set of metacharacters are in effect inside a character class than outside a character class. For instance, the regular expression . loses its special meaning inside a character class, while the expression - becomes a range forming metacharacter. 

**_Line terminators_**

A _line terminator_ is a one- or two-character sequence that marks the end of a line of the input character sequence. The following are recognized as line terminators: 

    * A newline (line feed) character ('\n'), 
    * A carriage-return character followed immediately by a newline character ("\r\n"), 
    * A standalone carriage-return character ('\r'), 
    * A next-line character ('\u0085'), 
    * A line-separator character ('\u2028'), or 
    * A paragraph-separator character ('\u2029). 

If [UNIX_LINES](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__UNIX_LINES) mode is activated, then the only line terminators recognized are newline characters. 

The regular expression . matches any character except a line terminator unless the [DOTALL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__DOTALL) flag is specified. 

By default, the regular expressions ^ and $ ignore line terminators and only match at the beginning and the end, respectively, of the entire input sequence. If [MULTILINE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__MULTILINE) mode is activated then ^ matches at the beginning of input and after any line terminator except at the end of input. When in [MULTILINE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__MULTILINE) mode $ matches just before a line terminator or the end of the input sequence. 

**_Groups and capturing_** **_Group number_**

Capturing groups are numbered by counting their opening parentheses from left to right. In the expression ((A)(B(C))), for example, there are four such groups: 

Group zero always stands for the entire expression. 

Capturing groups are so named because, during a match, each subsequence of the input sequence that matches such a group is saved. The captured subsequence may be used later in the expression, via a back reference, and may also be retrieved from the matcher once the match operation is complete. 

**_Group name_**

A capturing group can also be assigned a "name", a named-capturing group, and then be back-referenced later by the "name". Group names are composed of the following characters. The first character must be a letter. 

    * The uppercase letters 'A' through 'Z' ('\u0041' through '\u005a'), 
    * The lowercase letters 'a' through 'z' ('\u0061' through '\u007a'), 
    * The digits '0' through '9' ('\u0030' through '\u0039'), 

A named-capturing group is still numbered as described in Group number. 

The captured input associated with a group is always the subsequence that the group most recently matched. If a group is evaluated a second time because of quantification then its previously-captured value, if any, will be retained if the second evaluation fails. Matching the string "aba" against the expression (a(b)?)+, for example, leaves group two set to "b". All captured input is discarded at the beginning of each match. 

Groups beginning with (? are either pure, _non-capturing_ groups that do not capture text and do not count towards the group total, or _named-capturing_ group. 

**Unicode support**

This class is in conformance with Level 1 of [_Unicode Technical Standard #18: Unicode Regular Expression_](http://www.unicode.org/reports/tr18/), plus RL2.1 Canonical Equivalents. 

**Unicode escape sequences** such as \u2014 in Java source code are processed as described in section 3.3 of 《The Java™ Language Specification》. Such escape sequences are also implemented directly by the regular-expression parser so that Unicode escapes can be used in expressions that are read from files or from the keyboard. Thus the strings "\u2014" and "\\\u2014", while not equal, compile into the same pattern, which matches the character with hexadecimal value 0x2014. 

A Unicode character can also be represented in a regular-expression by using its **Hex notation**(hexadecimal code point value) directly as described in construct \x{...}, for example a supplementary character U+2011F can be specified as \x{2011F}, instead of two consecutive Unicode escape sequences of the surrogate pair \uD840\uDD1F. 

Unicode scripts, blocks, categories and binary properties are written with the \p and \P constructs as in Perl. \p{_prop_} matches if the input has the property _prop_ , while \P{_prop_} does not match if the input has that property. 

Scripts, blocks, categories and binary properties can be used both inside and outside of a character class. 

**_Scripts_** are specified either with the prefix Is, as in IsHiragana, or by using the script keyword (or its short form sc)as in script=Hiragana or sc=Hiragana. 

The script names supported by Pattern are the valid script names accepted and defined by [UnicodeScript.forName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/character_unicodescript-0000001054439735#ZH-CN_TOPIC_0000001054439735__forName-java_lang_String-). 

**_Blocks_** are specified with the prefix In, as in InMongolian, or by using the keyword block (or its short form blk) as in block=Mongolian or blk=Mongolian. 

The block names supported by Pattern are the valid block names accepted and defined by [UnicodeBlock.forName](https://developer.harmonyos.com/cn/docs/documentation/doc-references/character_unicodeblock-0000001054678444#ZH-CN_TOPIC_0000001054678444__forName-java_lang_String-). 

**_Categories_** may be specified with the optional prefix Is: Both \p{L} and \p{IsL} denote the category of Unicode letters. Same as scripts and blocks, categories can also be specified by using the keyword general_category (or its short form gc) as in general_category=Lu or gc=Lu. 

The supported categories are those of [_The Unicode Standard_](http://www.unicode.org/unicode/standard/standard.html) in the version specified by the [Character](https://developer.harmonyos.com/cn/docs/documentation/doc-references/character-0000001054199716) class. The category names are those defined in the Standard, both normative and informative. 

**_Binary properties_** are specified with the prefix Is, as in IsAlphabetic. The supported binary properties by Pattern are 

    * Alphabetic 
    * Ideographic 
    * Letter 
    * Lowercase 
    * Uppercase 
    * Titlecase 
    * Punctuation 
    * Control 
    * White_Space 
    * Digit 
    * Hex_Digit 
    * Join_Control 
    * Noncharacter_Code_Point 
    * Assigned 

The following **Predefined Character classes** and **POSIX character classes** are in conformance with the recommendation of _Annex C: Compatibility Properties_ of [_Unicode Regular Expression_](http://www.unicode.org/reports/tr18/), when [UNICODE_CHARACTER_CLASS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__UNICODE_CHARACTER_CLASS) flag is specified. 

_Categories that behave like the java.lang.Character boolean is _methodname_ methods (except for the deprecated ones) are available through the same \p{_prop_} syntax where the specified property has the name java _methodname__. 

**Comparison to Perl 5**

The Pattern engine performs traditional NFA-based matching with ordered alternation as occurs in Perl 5. 

Perl constructs not supported by this class: 

    * Predefined character classes (Unicode character) 

\X Match Unicode [_extended grapheme cluster_](http://www.unicode.org/reports/tr18/#Default_Grapheme_Clusters)

    * The backreference constructs, \g{_n_} for the _n_ thcapturing group and \g{_name_} for named-capturing group. 

    * The named character construct, \N{_name_} for a Unicode character by its name. 

    * The conditional constructs (?(_condition_)_X_) and (?(_condition_)_X_ |_Y_), 

    * The embedded code constructs (?{_code_}) and (??{_code_}),

    * The embedded comment syntax (?#comment), and 

    * The preprocessing operations \l \u, \L, and \U. 

Constructs supported by this class but not by Perl: 

    * Character-class union and intersection as described above.

Notable differences from Perl: 

    * In Perl, \1 through \9 are always interpreted as back references; a backslash-escaped number greater than 9 is treated as a back reference if at least that many subexpressions exist, otherwise it is interpreted, if possible, as an octal escape. In this class octal escapes must always begin with a zero. In this class, \1 through \9 are always interpreted as back references, and a larger number is accepted as a back reference if at least that many subexpressions exist at that point in the regular expression, otherwise the parser will drop digits until the number is smaller or equal to the existing number of groups or it is one digit. 

    * Perl uses the g flag to request a match that resumes where the last match left off. This functionality is provided implicitly by the [Matcher](https://developer.harmonyos.com/cn/docs/documentation/doc-references/matcher-0000001054119898) class: Repeated invocations of the [Matcher#find](https://developer.harmonyos.com/cn/docs/documentation/doc-references/matcher-0000001054119898#ZH-CN_TOPIC_0000001054119898__find--) method will resume where the last match left off, unless the matcher is reset. 

    * In Perl, embedded flags at the top level of an expression affect the whole expression. In this class, embedded flags always take effect at the point at which they appear, whether they are at the top level or within a group; in the latter case, flags are restored at the end of the group just as in Perl. 

For a more precise description of the behavior of regular expression constructs, please see [_Mastering Regular Expressions, 3nd Edition_ , Jeffrey E. F. Friedl, O'Reilly and Associates, 2006.](http://www.oreilly.com/catalog/regex3/)

**Since:**

1.4

**See Also:**

[String.split(String, int)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460#ZH-CN_TOPIC_0000001054518460__split-java_lang_String-int-), [String.split(String)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460#ZH-CN_TOPIC_0000001054518460__split-java_lang_String-), 

#### Field Summary

Modifier and Type | Field | Description  
---|---|---  
static int | [CANON_EQ](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__CANON_EQ) |  Enables canonical equivalence.   
static int | [CASE_INSENSITIVE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__CASE_INSENSITIVE) |  Enables case-insensitive matching.   
static int | [COMMENTS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__COMMENTS) |  Permits whitespace and comments in pattern.   
static int | [DOTALL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__DOTALL) |  Enables dotall mode.   
static int | [LITERAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__LITERAL) |  Enables literal parsing of the pattern.   
static int | [MULTILINE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__MULTILINE) |  Enables multiline mode.   
static int | [UNICODE_CASE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__UNICODE_CASE) |  Enables Unicode-aware case folding.   
static int | [UNICODE_CHARACTER_CLASS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__UNICODE_CHARACTER_CLASS) |  Enables the Unicode version of _Predefined character classes_ and _POSIX character classes_.   
static int | [UNIX_LINES](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__UNIX_LINES) |  Enables Unix lines mode.   
  
#### Method Summary

Modifier and Type | Method | Description  
---|---|---  
[Predicate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/predicate-0000001054238629)<[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)> | [asPredicate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__asPredicate--)​() |  Creates a predicate which can be used to match a string.   
static [Pattern](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927) | [compile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__compile-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) regex) |  Compiles the given regular expression into a pattern.   
static [Pattern](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927) | [compile](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__compile-java_lang_String-int-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) regex, int flags) |  Compiles the given regular expression into a pattern with the given flags.   
int | [flags](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__flags--)​() |  Returns this pattern's match flags.   
[Matcher](https://developer.harmonyos.com/cn/docs/documentation/doc-references/matcher-0000001054119898) | [matcher](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__matcher-java_lang_CharSequence-)​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) input) |  Creates a matcher that will match the given input against this pattern.   
static boolean | [matches](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__matches-java_lang_String-java_lang_CharSequence-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) regex, [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) input) |  Compiles the given regular expression and attempts to match the given input against it.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [pattern](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__pattern--)​() |  Returns the regular expression from which this pattern was compiled.   
static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [quote](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__quote-java_lang_String-)​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) s) |  Returns a literal pattern String for the specified String.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] | [split](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__split-java_lang_CharSequence-)​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) input) |  Splits the given input sequence around matches of this pattern.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] | [split](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__split-java_lang_CharSequence-int-)​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) input, int limit) |  Splits the given input sequence around matches of this pattern.   
[Stream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream-0000001054518656)<[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)> | [splitAsStream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__splitAsStream-java_lang_CharSequence-)​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) input) |  Creates a stream from the given input sequence around matches of this pattern.   
[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) | [toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__toString--)​() |  Returns the string representation of this pattern.   
  
Methods inherited from class java.lang.[Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)  
---  
[clone](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__clone--), [equals](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__equals-java_lang_Object-), [finalize](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__finalize--), [getClass](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__getClass--), [hashCode](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__hashCode--), [notify](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notify--), [notifyAll](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__notifyAll--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait--), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-), [wait](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__wait-long-int-)  
  
#### Field Detail

#### [h2]CANON_EQ

public static final int CANON_EQ

Enables canonical equivalence. 

When this flag is specified then two characters will be considered to match if, and only if, their full canonical decompositions match. The expression "a\u030A", for example, will match the string "\u00E5" when this flag is specified. By default, matching does not take canonical equivalence into account. 

There is no embedded flag character for enabling canonical equivalence. 

Specifying this flag may impose a performance penalty. 

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_util_regex_Pattern_CANON_EQ)

#### [h2]CASE_INSENSITIVE

public static final int CASE_INSENSITIVE

Enables case-insensitive matching. 

By default, case-insensitive matching assumes that only characters in the US-ASCII charset are being matched. Unicode-aware case-insensitive matching can be enabled by specifying the [UNICODE_CASE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__UNICODE_CASE) flag in conjunction with this flag. 

Case-insensitive matching can also be enabled via the embedded flag expression (?i). 

Specifying this flag may impose a slight performance penalty. 

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_util_regex_Pattern_CASE_INSENSITIVE)

#### [h2]COMMENTS

public static final int COMMENTS

Permits whitespace and comments in pattern. 

In this mode, whitespace is ignored, and embedded comments starting with # are ignored until the end of a line. 

Comments mode can also be enabled via the embedded flag expression (?x).

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_util_regex_Pattern_COMMENTS)

#### [h2]DOTALL

public static final int DOTALL

Enables dotall mode. 

In dotall mode, the expression . matches any character, including a line terminator. By default this expression does not match line terminators. 

Dotall mode can also be enabled via the embedded flag expression (?s). (The s is a mnemonic for "single-line" mode, which is what this is called in Perl.) 

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_util_regex_Pattern_DOTALL)

#### [h2]LITERAL

public static final int LITERAL

Enables literal parsing of the pattern. 

When this flag is specified then the input string that specifies the pattern is treated as a sequence of literal characters. Metacharacters or escape sequences in the input sequence will be given no special meaning. 

The flags CASE_INSENSITIVE and UNICODE_CASE retain their impact on matching when used in conjunction with this flag. The other flags become superfluous. 

There is no embedded flag character for enabling literal parsing.

**Since:**

1.5

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_util_regex_Pattern_LITERAL)

#### [h2]MULTILINE

public static final int MULTILINE

Enables multiline mode. 

In multiline mode the expressions ^ and $ match just after or just before, respectively, a line terminator or the end of the input sequence. By default these expressions only match at the beginning and the end of the entire input sequence. 

Multiline mode can also be enabled via the embedded flag expression (?m). 

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_util_regex_Pattern_MULTILINE)

#### [h2]UNICODE_CASE

public static final int UNICODE_CASE

Enables Unicode-aware case folding. 

When this flag is specified then case-insensitive matching, when enabled by the [CASE_INSENSITIVE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__CASE_INSENSITIVE) flag, is done in a manner consistent with the Unicode Standard. By default, case-insensitive matching assumes that only characters in the US-ASCII charset are being matched. 

Unicode-aware case folding can also be enabled via the embedded flag expression (?u). 

Specifying this flag may impose a performance penalty. 

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_util_regex_Pattern_UNICODE_CASE)

#### [h2]UNICODE_CHARACTER_CLASS

public static final int UNICODE_CHARACTER_CLASS

Enables the Unicode version of _Predefined character classes_ and _POSIX character classes_. 

When this flag is specified then the (US-ASCII only) _Predefined character classes_ and _POSIX character classes_ are in conformance with [_Unicode Technical Standard #18: Unicode Regular Expression_](http://www.unicode.org/reports/tr18/) _Annex C: Compatibility Properties_. 

The UNICODE_CHARACTER_CLASS mode can also be enabled via the embedded flag expression (?U). 

The flag implies UNICODE_CASE, that is, it enables Unicode-aware case folding. 

Specifying this flag may impose a performance penalty. 

**Since:**

1.7

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_util_regex_Pattern_UNICODE_CHARACTER_CLASS)

#### [h2]UNIX_LINES

public static final int UNIX_LINES

Enables Unix lines mode. 

In this mode, only the '\n' line terminator is recognized in the behavior of ., ^, and $. 

Unix lines mode can also be enabled via the embedded flag expression (?d).

**See Also:**

[Constant Field Values](https://developer.harmonyos.com/cn/docs/documentation/doc-references/constant-values-0000001054359004#ZH-CN_TOPIC_0000001054359004__java_util_regex_Pattern_UNIX_LINES)

#### Method Detail

#### [h2]compile

public static [Pattern](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927) compile​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) regex)

Compiles the given regular expression into a pattern. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
regex  |  The expression to be compiled  
  
**Returns:**

the given regular expression compiled into a pattern

**Throws:**

Throw Name | Throw Description  
---|---  
[PatternSyntaxException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/patternsyntaxexception-0000001054518654) |  If the expression's syntax is invalid  
  
#### [h2]compile

public static [Pattern](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927) compile​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) regex, int flags)

Compiles the given regular expression into a pattern with the given flags. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
regex  |  The expression to be compiled  
flags  |  Match flags, a bit mask that may include [CASE_INSENSITIVE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__CASE_INSENSITIVE), [MULTILINE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__MULTILINE), [DOTALL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__DOTALL), [UNICODE_CASE](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__UNICODE_CASE), [CANON_EQ](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__CANON_EQ), [UNIX_LINES](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__UNIX_LINES), [LITERAL](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__LITERAL), [UNICODE_CHARACTER_CLASS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__UNICODE_CHARACTER_CLASS) and [COMMENTS](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__COMMENTS)  
  
**Returns:**

the given regular expression compiled into a pattern with the given flags

**Throws:**

Throw Name | Throw Description  
---|---  
[IllegalArgumentException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/illegalargumentexception-0000001054199724) |  If bit values other than those corresponding to the defined match flags are set in flags  
[PatternSyntaxException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/patternsyntaxexception-0000001054518654) |  If the expression's syntax is invalid  
  
#### [h2]pattern

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) pattern​()

Returns the regular expression from which this pattern was compiled. 

**Returns:**

The source of this pattern

#### [h2]toString

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) toString​()

Returns the string representation of this pattern. This is the regular expression from which this pattern was compiled.

**Overrides:**

[toString](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446#ZH-CN_TOPIC_0000001054678446__toString--) in class [Object](https://developer.harmonyos.com/cn/docs/documentation/doc-references/object-0000001054678446)

**Returns:**

The string representation of this pattern

**Since:**

1.5

#### [h2]matcher

public [Matcher](https://developer.harmonyos.com/cn/docs/documentation/doc-references/matcher-0000001054119898) matcher​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) input)

Creates a matcher that will match the given input against this pattern. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
input  |  The character sequence to be matched  
  
**Returns:**

A new matcher for this pattern

#### [h2]flags

public int flags​()

Returns this pattern's match flags. 

**Returns:**

The match flags specified when this pattern was compiled

#### [h2]matches

public static boolean matches​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) regex, [CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) input)

Compiles the given regular expression and attempts to match the given input against it. 

An invocation of this convenience method of the form 
    
    Pattern.matches(regex, input);

behaves in exactly the same way as the expression 
    
    Pattern.compile(regex).matcher(input).matches()

If a pattern is to be used multiple times, compiling it once and reusing it will be more efficient than invoking this method each time. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
regex  |  The expression to be compiled  
input  |  The character sequence to be matched  
  
**Returns:**

whether or not the regular expression matches on the input

**Throws:**

Throw Name | Throw Description  
---|---  
[PatternSyntaxException](https://developer.harmonyos.com/cn/docs/documentation/doc-references/patternsyntaxexception-0000001054518654) |  If the expression's syntax is invalid  
  
#### [h2]split

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] split​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) input, int limit)

Splits the given input sequence around matches of this pattern. 

The array returned by this method contains each substring of the input sequence that is terminated by another subsequence that matches this pattern or is terminated by the end of the input sequence. The substrings in the array are in the order in which they occur in the input. If this pattern does not match any subsequence of the input then the resulting array has just one element, namely the input sequence in string form. 

When there is a positive-width match at the beginning of the input sequence then an empty leading substring is included at the beginning of the resulting array. A zero-width match at the beginning however never produces such empty leading substring. 

The limit parameter controls the number of times the pattern is applied and therefore affects the length of the resulting array. If the limit _n_ is greater than zero then the pattern will be applied at most _n_ \- 1 times, the array's length will be no greater than _n_ , and the array's last entry will contain all input beyond the last matched delimiter. If _n_ is non-positive then the pattern will be applied as many times as possible and the array can have any length. If _n_ is zero then the pattern will be applied as many times as possible, the array can have any length, and trailing empty strings will be discarded. 

The input "boo:and:foo", for example, yields the following results with these parameters: 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
input  |  The character sequence to be split  
limit  |  The result threshold, as described above  
  
**Returns:**

The array of strings computed by splitting the input around matches of this pattern

#### [h2]split

public [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)[] split​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) input)

Splits the given input sequence around matches of this pattern. 

This method works as if by invoking the two-argument [split](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__split-java_lang_CharSequence-int-) method with the given input sequence and a limit argument of zero. Trailing empty strings are therefore not included in the resulting array. 

The input "boo:and:foo", for example, yields the following results with these expressions: 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
input  |  The character sequence to be split  
  
**Returns:**

The array of strings computed by splitting the input around matches of this pattern

#### [h2]quote

public static [String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) quote​([String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460) s)

Returns a literal pattern String for the specified String. 

This method produces a String that can be used to create a Pattern that would match the string s as if it were a literal pattern.

Metacharacters or escape sequences in the input sequence will be given no special meaning. 

**Parameters:**

Parameter Name | Parameter Description  
---|---  
s  |  The string to be literalized  
  
**Returns:**

A literal string replacement

**Since:**

1.5

#### [h2]asPredicate

public [Predicate](https://developer.harmonyos.com/cn/docs/documentation/doc-references/predicate-0000001054238629)<[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)> asPredicate​()

Creates a predicate which can be used to match a string. 

**Returns:**

The predicate which can be used for matching on a string

**Since:**

1.8

#### [h2]splitAsStream

public [Stream](https://developer.harmonyos.com/cn/docs/documentation/doc-references/stream-0000001054518656)<[String](https://developer.harmonyos.com/cn/docs/documentation/doc-references/string-0000001054518460)> splitAsStream​([CharSequence](https://developer.harmonyos.com/cn/docs/documentation/doc-references/charsequence-0000001054678442) input)

Creates a stream from the given input sequence around matches of this pattern. 

The stream returned by this method contains each substring of the input sequence that is terminated by another subsequence that matches this pattern or is terminated by the end of the input sequence. The substrings in the stream are in the order in which they occur in the input. Trailing empty strings will be discarded and not encountered in the stream. 

If this pattern does not match any subsequence of the input then the resulting stream has just one element, namely the input sequence in string form. 

When there is a positive-width match at the beginning of the input sequence then an empty leading substring is included at the beginning of the stream. A zero-width match at the beginning however never produces such empty leading substring. 

If the input sequence is mutable, it must remain constant during the execution of the terminal stream operation. Otherwise, the result of the terminal stream operation is undefined.

**Parameters:**

Parameter Name | Parameter Description  
---|---  
input  |  The character sequence to be split  
  
**Returns:**

The stream of strings computed by splitting the input around matches of this pattern

**Since:**

1.8

**See Also:**

[split(CharSequence)](https://developer.harmonyos.com/cn/docs/documentation/doc-references/pattern-0000001054439927#ZH-CN_TOPIC_0000001054439927__split-java_lang_CharSequence-)
