"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "".concat(_config.default.lib, "-btn ").concat(_config.default.lib, "-btn--").concat(props.type, " ").concat(props.className),
    "data-id": props.id,
    type: props.type,
    name: props.name,
    value: props.value,
    disabled: props.disabled,
    onClick: props.onClick
  }, props.children);
};

var _default = Button;
exports.default = _default;