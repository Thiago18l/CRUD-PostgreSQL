"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'Shadow113',
    database: 'api',
    port: 5432
});
exports.default = pool;
