"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSessionResponseSchema = exports.UpdateSessionRequestSchema = exports.UpdateSessionResource = void 0;
const zod_1 = require("zod");
const LocalEvent_1 = require("./LocalEvent");
const RemoteEvent_1 = require("./RemoteEvent");
exports.UpdateSessionResource = '/update-session';
exports.UpdateSessionRequestSchema = zod_1.z.object({
    sessionId: zod_1.z.string(),
    userId: zod_1.z.string(),
    token: zod_1.z.string(),
    eventId: zod_1.z.string().nullable(),
    events: zod_1.z.array(LocalEvent_1.LocalEventSchema)
});
exports.UpdateSessionResponseSchema = zod_1.z.object({
    events: zod_1.z.array(RemoteEvent_1.RemoteEventSchema)
});
