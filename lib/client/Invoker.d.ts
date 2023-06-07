import { z } from 'zod';
export declare class Invoker<TRequest, TResponse> {
    private readonly endpoint;
    private readonly resource;
    private readonly requestParser;
    private readonly responseParser;
    constructor(endpoint: string, resource: string, requestParser: z.ZodType<TRequest>, responseParser: z.ZodType<TResponse>);
    invoke(request: TRequest): Promise<TResponse>;
}
