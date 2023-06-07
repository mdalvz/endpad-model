"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteEventSchema = exports.RemoteConnectEventSchema = exports.RemoteResetEventSchema = exports.RemoteActiveEventSchema = exports.RemoteSelectEventSchema = exports.RemoteDeleteEventSchema = exports.RemoteInsertEventSchema = exports.RemoteEventType = void 0;
const zod_1 = require("zod");
var RemoteEventType;
(function (RemoteEventType) {
    RemoteEventType["INSERT"] = "insert";
    RemoteEventType["DELETE"] = "delete";
    RemoteEventType["SELECT"] = "select";
    RemoteEventType["ACTIVE"] = "active";
    RemoteEventType["RESET"] = "reset";
    RemoteEventType["CONNECT"] = "connect";
})(RemoteEventType || (exports.RemoteEventType = RemoteEventType = {}));
exports.RemoteInsertEventSchema = zod_1.z.object({
    type: zod_1.z.literal(RemoteEventType.INSERT),
    eventId: zod_1.z.string(),
    userId: zod_1.z.string(),
    index: zod_1.z.number().int().nonnegative(),
    data: zod_1.z.string()
});
exports.RemoteDeleteEventSchema = zod_1.z.object({
    type: zod_1.z.literal(RemoteEventType.DELETE),
    eventId: zod_1.z.string(),
    userId: zod_1.z.string(),
    index: zod_1.z.number().int().nonnegative(),
    size: zod_1.z.number().int().nonnegative()
});
exports.RemoteSelectEventSchema = zod_1.z.object({
    type: zod_1.z.literal(RemoteEventType.SELECT),
    eventId: zod_1.z.string(),
    userId: zod_1.z.string(),
    index: zod_1.z.number().int().nonnegative(),
    size: zod_1.z.number().int().nonnegative()
});
exports.RemoteActiveEventSchema = zod_1.z.object({
    type: zod_1.z.literal(RemoteEventType.ACTIVE),
    eventId: zod_1.z.string(),
    userId: zod_1.z.string(),
    active: zod_1.z.boolean()
});
exports.RemoteResetEventSchema = zod_1.z.object({
    type: zod_1.z.literal(RemoteEventType.RESET),
    eventId: zod_1.z.string(),
    data: zod_1.z.string(),
    users: zod_1.z.array(zod_1.z.object({
        userId: zod_1.z.string(),
        active: zod_1.z.boolean(),
        index: zod_1.z.number().int().nonnegative(),
        size: zod_1.z.number().int().nonnegative()
    }))
});
exports.RemoteConnectEventSchema = zod_1.z.object({
    type: zod_1.z.literal(RemoteEventType.CONNECT),
    eventId: zod_1.z.string(),
    userId: zod_1.z.string()
});
exports.RemoteEventSchema = zod_1.z.discriminatedUnion('type', [
    exports.RemoteInsertEventSchema,
    exports.RemoteDeleteEventSchema,
    exports.RemoteSelectEventSchema,
    exports.RemoteActiveEventSchema,
    exports.RemoteResetEventSchema,
    exports.RemoteConnectEventSchema
]);
