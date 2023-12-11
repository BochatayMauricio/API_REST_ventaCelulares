"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_PASSWORD = exports.DB_USER = exports.DB_HOST = exports.DB_NAME = exports.SECRET_KEY = exports.PORT = void 0;
exports.PORT = process.env.PORT || '3001';
exports.SECRET_KEY = '0Nx01@UVD9H$';
exports.DB_NAME = process.env.DB_NAME || 'rrhh';
exports.DB_HOST = process.env.DB_HOST || 'localhost';
exports.DB_USER = process.env.DB_USER || 'root';
exports.DB_PASSWORD = process.env.DB_PASSWORD || 'root';
