"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles/blobButton.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const BlobButton = _ref => {
  let {
    type,
    className,
    style,
    isDisabled,
    value,
    onPress
  } = _ref;
  const NewclassName = className;
  const disableBtn = !isDisabled ? "btn-normal" : "btn-disable";
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: type,
    className: NewclassName != null ? "".concat(className, " ").concat(disableBtn, " blob-btn") : "blob-btn",
    style: style,
    disabled: isDisabled,
    onClick: onPress
  }, !!value ? value : "button", /*#__PURE__*/_react.default.createElement("span", {
    className: "blob-btn__inner"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "blob-btn__blobs"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "blob-btn__blob"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "blob-btn__blob"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "blob-btn__blob"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "blob-btn__blob"
  })))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1"
  }, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("filter", {
    id: "goo"
  }, /*#__PURE__*/_react.default.createElement("feGaussianBlur", {
    in: "SourceGraphic",
    result: "blur",
    stdDeviation: "10"
  }), /*#__PURE__*/_react.default.createElement("feColorMatrix", {
    in: "blur",
    mode: "matrix",
    values: "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7",
    result: "goo"
  }), /*#__PURE__*/_react.default.createElement("feBlend", {
    in2: "goo",
    in: "SourceGraphic",
    result: "mix"
  })))));
};
BlobButton.propTypes = {
  onPress: _propTypes.default.func.isRequired,
  value: _propTypes.default.string.isRequired
};
BlobButton.defaultProps = {
  value: 'button'
};
var _default = BlobButton;
exports.default = _default;