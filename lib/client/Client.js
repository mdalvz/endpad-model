"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const Invoker_1 = require("./Invoker");
const CreateSession_1 = require("../model/CreateSession");
const ConnectSession_1 = require("../model/ConnectSession");
const UpdateSession_1 = require("../model/UpdateSession");
class Client {
    constructor(endpoint) {
        this.createSession = new Invoker_1.Invoker(endpoint, CreateSession_1.CreateSessionResource, CreateSession_1.CreateSessionRequestSchema, CreateSession_1.CreateSessionResponseSchema);
        this.connectSession = new Invoker_1.Invoker(endpoint, ConnectSession_1.ConnectSessionResource, ConnectSession_1.ConnectSessionRequestSchema, ConnectSession_1.ConnectSessionResponseSchema);
        this.updateSession = new Invoker_1.Invoker(endpoint, UpdateSession_1.UpdateSessionResource, UpdateSession_1.UpdateSessionRequestSchema, UpdateSession_1.UpdateSessionResponseSchema);
    }
}
exports.Client = Client;
