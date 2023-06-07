import { Invoker } from './Invoker';
import { CreateSessionRequest, CreateSessionResponse } from '../model/CreateSession';
import { ConnectSessionRequest, ConnectSessionResponse } from '../model/ConnectSession';
import { UpdateSessionRequest, UpdateSessionResponse } from '../model/UpdateSession';
export declare class Client {
    readonly createSession: Invoker<CreateSessionRequest, CreateSessionResponse>;
    readonly connectSession: Invoker<ConnectSessionRequest, ConnectSessionResponse>;
    readonly updateSession: Invoker<UpdateSessionRequest, UpdateSessionResponse>;
    constructor(endpoint: string);
}
