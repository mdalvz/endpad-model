"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectSessionResponseSchema = exports.ConnectSessionRequestSchema = exports.ConnectSessionResource = void 0;
const zod_1 = require("zod");
exports.ConnectSessionResource = '/connect-session';
exports.ConnectSessionRequestSchema = zod_1.z.object({
    sessionId: zod_1.z.string()
});
exports.ConnectSessionResponseSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    token: zod_1.z.string()
});
