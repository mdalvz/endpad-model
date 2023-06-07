"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSessionResponseSchema = exports.CreateSessionRequestSchema = exports.CreateSessionResource = void 0;
const zod_1 = require("zod");
exports.CreateSessionResource = '/create-session';
exports.CreateSessionRequestSchema = zod_1.z.object({});
exports.CreateSessionResponseSchema = zod_1.z.object({
    sessionId: zod_1.z.string()
});
