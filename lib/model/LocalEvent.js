"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalEventSchema = exports.LocalSelectEventSchema = exports.LocalDeleteEventSchema = exports.LocalInsertEventSchema = exports.LocalEventType = void 0;
const zod_1 = require("zod");
var LocalEventType;
(function (LocalEventType) {
    LocalEventType["INSERT"] = "insert";
    LocalEventType["DELETE"] = "delete";
    LocalEventType["SELECT"] = "select";
})(LocalEventType || (exports.LocalEventType = LocalEventType = {}));
exports.LocalInsertEventSchema = zod_1.z.object({
    type: zod_1.z.literal(LocalEventType.INSERT),
    index: zod_1.z.number().positive(),
    data: zod_1.z.string()
});
exports.LocalDeleteEventSchema = zod_1.z.object({
    type: zod_1.z.literal(LocalEventType.DELETE),
    index: zod_1.z.number().positive(),
    size: zod_1.z.number().positive()
});
exports.LocalSelectEventSchema = zod_1.z.object({
    type: zod_1.z.literal(LocalEventType.SELECT),
    index: zod_1.z.number().positive(),
    size: zod_1.z.number().positive()
});
exports.LocalEventSchema = zod_1.z.discriminatedUnion('type', [
    exports.LocalInsertEventSchema,
    exports.LocalDeleteEventSchema,
    exports.LocalSelectEventSchema
]);
