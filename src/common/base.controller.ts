import { Router, Response } from "express";
import { LoggerService } from "../logger/logger.service";
import { IContorllerRoute } from "./route.interface";

export class BaseController {
    private readonly _router: Router;

    constructor(private logger: LoggerService) {
        this._router = Router();
    }

    get router() {   
        return this._router;
    }

    public send<T>(res: Response, code: number, message: T) {
        res.type('application/json');
        return res.status(code).send(message);
    }

    public ok<T>(res: Response, message: T) {
        return this.send(res, 200, message);
    }

    public created<T>(res: Response) {
        return res.sendStatus(201);
    }

    protected buildRoutes(routes: IContorllerRoute[]) {
        for (const route of routes) {
            this.logger.log(`[${ route.method }] ${ route.path }`);
            const handler = route.func.bind(this);
            this.router[route.method](route.path, handler);
        }
    }
}
