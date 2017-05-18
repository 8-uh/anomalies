ace.define("ace/theme/lovecraft",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-lovecraft";
exports.cssText = ".ace-lovecraft .ace_gutter {\
background: #0B1C2C\
color: #405C79;\
}\
.ace-lovecraft .ace_print-margin {\
width: 2px;\
background: #223B54\
}\
.ace-lovecraft {\
background-color: #0B1C2C;\
color: #AABCCE\
}\
.ace-lovecraft .ace_cursor {\
color: #AABCCE\
}\
.ace-lovecraft .ace_marker-layer .ace_selection {\
background: #223B54;;\
}\
.ace-lovecraft.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #151515;\
}\
.ace-lovecraft .ace_paren {\
  color: #E5EBF1;\
}\
.ace-lovecraft .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #F5F5F5\
}\
.ace-lovecraft .ace_marker-layer .ace_active-line {\
background: #0B1C2C\
}\
.ace-lovecraft .ace_gutter-active-line {\
background-color: #223B54\
}\
.ace-lovecraft .ace_marker-layer .ace_selected-word {\
border: 1px solid #F5F5F5\
}\
.ace-lovecraft .ace_invisible {\
color: #223B54\
}\
.ace-lovecraft .ace_entity.ace_name.ace_tag,\
.ace-lovecraft .ace_keyword,\
.ace-lovecraft .ace_meta.ace_tag,\
.ace-lovecraft .ace_storage {\
color: #BF568B\
}\
.ace-lovecraft .ace_punctuation,\
.ace-lovecraft .ace_punctuation.ace_tag {\
color: #568BBF\
}\
.ace-lovecraft .ace_constant.ace_character,\
.ace-lovecraft .ace_constant.ace_language,\
.ace-lovecraft .ace_constant.ace_numeric,\
.ace-lovecraft .ace_constant.ace_other {\
color: #E8BF66;\
}\
.ace-lovecraft .ace_invalid {\
color: #151515;\
background-color: #FB9FB1;\
font-weight: bold;\
}\
.ace-lovecraft .ace_invalid.ace_deprecated {\
color: #202020;\
background-color: #12CFC0\
font-weight: bold;\
}\
.ace-lovecraft .ace_support.ace_constant,\
.ace-lovecraft .ace_support.ace_function {\
color: #12CFC0\
}\
.ace-lovecraft .ace_fold {\
background-color: #6FC2EF;\
border-color: #151515\
}\
.ace-lovecraft .ace_storage.ace_type,\
.ace-lovecraft .ace_support.ace_class,\
.ace-lovecraft .ace_support.ace_type {\
font-style: italic;\
color: #12CFC0\
}\
.ace-lovecraft .ace_entity.ace_name.ace_function,\
.ace-lovecraft .ace_entity.ace_other,\
.ace-lovecraft .ace_entity.ace_other.ace_attribute-name,\
.ace-lovecraft .ace_variable {\
  color: #568BBF;\
}\
.ace-lovecraft .ace_variable.ace_parameter {\
font-style: italic;\
color: #EDA987\
}\
.ace-lovecraft .ace_string {\
color: #56BF8B\
}\
.ace-lovecraft .ace_comment {\
color: #303030\
}\
.ace-lovecraft .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
}\
.ace_escape.ace_constant{\
  color: #12CFC0;\
}\
.ace-lovecraft .ace_identifier {\
  color: #8BBF56;\
}\
.ace-lovecraft .ace_operator {\
  color: #E5EBF1;\
}\
.ace-lovecraft .ace_regexp {\
  color: #8B56BF;\
}";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
