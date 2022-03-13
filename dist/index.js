"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api = (0, express_1.default)();
api.use('/test', (request, response) => {
    response.json({ success: true });
});
api.listen(3000, () => console.log('Servidor rodando'));
