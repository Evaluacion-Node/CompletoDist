"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _routes = _interopRequireDefault(require("./routes.factura"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ruta = (0, _express.Router)();
ruta.use("/api", _routes["default"]);
var _default = exports["default"] = ruta;