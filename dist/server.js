"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _routes = _interopRequireDefault(require("./routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/", _routes["default"]);
var _default = exports["default"] = app;