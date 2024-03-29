"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'To Do List API',
            version: '1.0.0',
            description: 'A simple API for managing To Do list',
        },
    },
    apis: ['./src/routes/*.ts'],
};
exports.default = options;
