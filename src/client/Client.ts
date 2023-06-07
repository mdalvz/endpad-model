import { Invoker } from './Invoker';
import {
  CreateSessionRequestSchema,
  CreateSessionRequest,
  CreateSessionResponseSchema,
  CreateSessionResponse,
  CreateSessionResource
} from '../model/CreateSession';
import {
  ConnectSessionRequestSchema,
  ConnectSessionRequest,
  ConnectSessionResponseSchema,
  ConnectSessionResponse,
  ConnectSessionResource
} from '../model/ConnectSession';
import {
  UpdateSessionRequestSchema,
  UpdateSessionRequest,
  UpdateSessionResponseSchema,
  UpdateSessionResponse,
  UpdateSessionResource
} from '../model/UpdateSession';

export class Client {

  public readonly createSession: Invoker<CreateSessionRequest, CreateSessionResponse>;

  public readonly connectSession: Invoker<ConnectSessionRequest, ConnectSessionResponse>;

  public readonly updateSession: Invoker<UpdateSessionRequest, UpdateSessionResponse>;

  public constructor(endpoint: string) {
    this.createSession = new Invoker(
      endpoint,
      CreateSessionResource,
      CreateSessionRequestSchema,
      CreateSessionResponseSchema
    );
    this.connectSession = new Invoker(
      endpoint,
      ConnectSessionResource,
      ConnectSessionRequestSchema,
      ConnectSessionResponseSchema
    );
    this.updateSession = new Invoker(
      endpoint,
      UpdateSessionResource,
      UpdateSessionRequestSchema,
      UpdateSessionResponseSchema
    );
  }

}
