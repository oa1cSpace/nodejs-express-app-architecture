import { NextFunction, Request, Response } from "express";
import { BaseController } from "../common/base.controller";
import { LoggerService } from "../logger/logger.service";

export class UserController extends BaseController {
   constructor(logger: LoggerService) {
    super(logger);
    this.buildRoutes([
        { path: '/register', func: this.register, method: 'post' },
        { path: '/login', func: this.login, method: 'post' },
    ]);
   }

   async register(req: Request, res: Response, next: NextFunction) {
    this.send(res, 201, 'register');
   }

   async login(req: Request, res: Response, next: NextFunction) {
    this.send(res, 200, 'login');
   }
}
