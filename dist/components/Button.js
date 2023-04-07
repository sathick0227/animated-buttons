"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles/buttonStyle.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = _ref => {
  let {
    type,
    className,
    style,
    isDisabled,
    value,
    onPress
  } = _ref;
  const disableBtn = !isDisabled ? "btn-normal" : "btn-disable";
  const NewclassName = className;
  console.log("done");
  console.log(onPress);
  return /*#__PURE__*/_react.default.createElement("button", {
    type: type,
    className: NewclassName != null ? "".concat(className, " ").concat(disableBtn) : "default-btn",
    style: style,
    disabled: isDisabled,
    onClick: onPress
  }, value);
};
Button.propTypes = {
  onPress: _propTypes.default.func.isRequired,
  value: _propTypes.default.string.isRequired
};
Button.defaultProps = {
  value: 'button'
};
var _default = Button;
exports.default = _default;