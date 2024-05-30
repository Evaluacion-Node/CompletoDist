"use strict";

var _server = _interopRequireDefault(require("./server"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_server["default"].listen(3001, function () {
  console.log("Esta trabajando con el puerto: 3001");
});