"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
require("./textButton.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const FlushButtons = _ref => {
  let {
    type,
    className,
    style,
    isDisabled,
    value,
    onPress,
    successLabel,
    removeLabel
  } = _ref;
  const disableBtn = isDisabled ? "btn-disable" : "btn-normal";
  const NewclassName = className;
  const [success, setSuccess] = (0, _react.useState)(false);
  const handleClick = () => {
    if (success) {
      setSuccess(false);
    } else {
      setSuccess(true);
    }
    onPress();
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("a", {
    className: "button",
    style: style,
    href: "#",
    role: "button",
    onClick: () => handleClick()
  }, success ? /*#__PURE__*/_react.default.createElement("span", null, removeLabel || "Remove") : /*#__PURE__*/_react.default.createElement("span", {
    style: {
      backgroundColor: 'green'
    }
  }, successLabel || 'Done'), /*#__PURE__*/_react.default.createElement("div", {
    className: "icon"
  }, success ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-remove"
  })) : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: 'green'
    }
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-check"
  })))));
};
var _default = FlushButtons;
exports.default = _default;