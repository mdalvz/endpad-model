"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoker = void 0;
const axios_1 = require("axios");
class Invoker {
    constructor(endpoint, resource, requestParser, responseParser) {
        this.endpoint = endpoint;
        this.resource = resource;
        this.requestParser = requestParser;
        this.responseParser = responseParser;
    }
    invoke(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let requestParseResult = this.requestParser.safeParse(request);
            if (requestParseResult.success) {
                let response = yield axios_1.default.post(this.endpoint + this.resource, requestParseResult.data);
                let responseParseResult = this.responseParser.safeParse(response.data);
                if (responseParseResult.success) {
                    return responseParseResult.data;
                }
                else {
                    console.log(responseParseResult.error);
                    throw new Error('Invalid response body for resource: ' + this.resource);
                }
            }
            else {
                throw new Error('Invalid request body for resource: ' + this.resource);
            }
        });
    }
}
exports.Invoker = Invoker;
