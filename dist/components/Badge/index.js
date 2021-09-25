"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _config = _interopRequireDefault(require("../config"));

var _index = _interopRequireDefault(require("./index.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Badge = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_config.default.lib, "-badge ").concat(_config.default.lib, "-badge--").concat(props.type, " ").concat(props.className),
    "data-id": props.id
  }, props.children);
};

var _default = Badge;
exports.default = _default;