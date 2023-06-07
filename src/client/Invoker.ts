import { z } from 'zod';
import axios from 'axios';

export class Invoker<TRequest, TResponse> {

  private readonly endpoint: string;

  private readonly resource: string;

  private readonly requestParser: z.ZodType<TRequest>;

  private readonly responseParser: z.ZodType<TResponse>;

  public constructor(
    endpoint: string,
    resource: string,
    requestParser: z.ZodType<TRequest>, 
    responseParser: z.ZodType<TResponse>) {

    this.endpoint = endpoint;
    this.resource = resource;
    this.requestParser = requestParser;
    this.responseParser = responseParser;
  }

  public async invoke(request: TRequest): Promise<TResponse> {
    let requestParseResult = this.requestParser.safeParse(request);
    if (requestParseResult.success) {
      let response = await axios.post(this.endpoint + this.resource, requestParseResult.data);
      let responseParseResult = this.responseParser.safeParse(response.data);
      if (responseParseResult.success) {
        return responseParseResult.data;
      } else {
        console.log(responseParseResult.error);
        throw new Error('Invalid response body for resource: ' + this.resource);
      }
    } else {
      throw new Error('Invalid request body for resource: ' + this.resource);
    }
  }

}
