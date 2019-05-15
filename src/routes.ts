import {RequestHandler} from "express-serve-static-core";
import healthCheckHandler from "./handlers/health";

enum Method{
    get = 'get',
    post = 'post',
}

export interface IRoute {
    path: string;
    handler: RequestHandler;
    method: Method;
}

const routes : IRoute[] = [
    {path: '/', handler: healthCheckHandler, method: Method.get},
];

export default routes;
