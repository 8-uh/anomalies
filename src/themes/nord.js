ace.define("ace/theme/nord",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-nord";
exports.cssText = `.ace-nord .ace_gutter {
background: #3B4251
}
.ace-nord .ace_gutter-cell {
  padding-top: 5px;
  margin-bottom: -5px;
  color: rgb(98, 111, 136);
  font-size: 10px;
}
.ace-nord .ace_print-margin {
width: 1px;
background: #434C5D
}
.ace-nord {
background-color: #3B4251;
color: #D8DEE9
}
.ace-nord .ace_cursor {
color: #EACA8F
}
.ace-nord .ace_marker-layer .ace_selection {
background: #4C5669;
}
.ace-nord.ace_multiselect .ace_selection.ace_start {
box-shadow: 0 0 3px 0px #151515;
}
.ace-nord .ace_paren {
  color: #82A2C0;
}
.ace-nord .ace_marker-layer .ace_bracket {
margin: -1px 0 0 -1px;
border: 1px solid #F5F5F5
}
.ace-nord .ace_marker-layer .ace_active-line {
background: rgb(27,30,37);
}
.ace-nord .ace_gutter-active-line {
  background-color: rgb(27,30,37);
}
.ace-nord .ace_marker-layer .ace_selected-word {
  background-color: rgba(234, 202, 132, 1.0);
}
.ace-nord .ace_invisible {
color: #4C5669
}
.ace-nord .ace_entity.ace_name.ace_tag,
.ace-nord .ace_keyword,
.ace-nord .ace_meta.ace_tag,
.ace-nord .ace_storage {
color: #82A2C0;
}
.ace-nord .ace_punctuation {
  color: #E5E9F0
}
.ace-nord .ace_punctuation.ace_tag {
  color: #82A2C0


}
.ace-nord .ace_constant.ace_character,
.ace-nord .ace_constant.ace_language,
.ace-nord .ace_constant.ace_numeric,
.ace-nord .ace_constant.ace_other {
color: #B38FAC;
}
.ace-nord .ace_invalid {
color: #151515;
background-color: #BD626B;
font-weight: bold;
}
.ace-nord .ace_invalid.ace_deprecated {
color: #202020;
background-color: #90BCBB;
font-weight: bold;
}
.ace-nord .ace_support.ace_constant,
.ace-nord .ace_support.ace_function {
color: #82A2C0;
}
.ace-nord .ace_fold {
background-color: #5F82AA;
border-color: #D8DEE9;
}
.ace-nord .ace_storage.ace_type,
.ace-nord .ace_support.ace_class,
.ace-nord .ace_support.ace_type {
font-style: bold;
color: #82A2C0;
}
.ace-nord .ace_entity.ace_name.ace_function,
.ace-nord .ace_entity.ace_other,
.ace-nord .ace_entity.ace_other.ace_attribute-name,
.ace-nord .ace_variable {
  color: #8AC0CF;
}
.ace-nord .ace_entity.ace_other.ace_attribute-name {
  font-style: italic;
}
.ace-nord .ace_variable.ace_parameter {
font-style: italic;
color: #EACA8F;
}
.ace-nord .ace_string {
color: #A4BD8E;
}
.ace-nord .ace_comment {
  color: #3B4251;
  background-color: rgb(96, 109, 134);
}
.ace-nord .ace_indent-guide {
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y
}
.ace_escape.ace_constant{
  color: #12CFC0;
}
.ace-nord .ace_identifier {
  color: #D8DEE9;
}
.ace-nord .ace_operator {
  color: #ECEFF4;
}
.ace-nord .ace_regexp {
  color: #CF8772;
}`;

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
