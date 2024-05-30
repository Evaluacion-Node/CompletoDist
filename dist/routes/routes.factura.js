"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controller = require("../controllers/controller.factura");
var rutaFactura = (0, _express.Router)();
rutaFactura.get("/factura/:id", _controller.mostrarFactura);
rutaFactura.get("/factura", _controller.listarFactura);
rutaFactura.post("/factura", _controller.crearFactura);
rutaFactura.put("/factura", _controller.modificarFactura);
rutaFactura["delete"]("/factura", _controller.eliminarFactura);
var _default = exports["default"] = rutaFactura;