"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = void 0;
var _promise = require("mysql2/promise");
var pool = exports.pool = (0, _promise.createPool)({
  host: process.env.MYSQL_HOST || "db4free.net",
  port: process.env.MYSQL_PORT || 3306,
  user: process.env.MYSQL_USER || "dbpaulinaweb",
  password: process.env.MYSQL_PASSWORD || "104057rm",
  database: process.env.MYSQL_DATABASE || "db_p_web"
});