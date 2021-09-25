"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _config = _interopRequireDefault(require("../../config"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const lib = _config.default.lib;

const Badge = props => {
  const {
    children,
    className,
    id,
    size,
    type
  } = props;
  const badgeType = type ? type : 'default';
  const badgeSize = size ? size : 'm';
  const classNames = className ? className : '';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(lib, "-badge ").concat(lib, "-badge--").concat(badgeType, " ").concat(lib, "-badge--").concat(badgeSize, " ").concat(classNames),
    "data-id": id
  }, children);
};

var _default = Badge;
exports.default = _default;