"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _config = _interopRequireDefault(require("../../../config"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const lib = _config.default.lib;

const Button = props => {
  const {
    children,
    className,
    disabled,
    id,
    onClick,
    size,
    type
  } = props;
  const btnType = type ? type : 'default';
  const btnSize = size ? size : 'm';
  const classNames = className ? className : '';
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "".concat(lib, "-btn ").concat(lib, "-btn--").concat(btnType, " ").concat(lib, "-btn--").concat(btnSize, " ").concat(classNames),
    "data-id": id,
    disabled: disabled,
    onClick: onClick
  }, children);
};

var _default = Button;
exports.default = _default;