import express, { Express } from 'express';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/user.contorller';
 
 export class App {
    app: Express;
    server: Server;
    port: number;
    logger: LoggerService;
    userController: UserController;

    constructor(
        logger: LoggerService,
        userController: UserController,
        ) {
        this.app = express();
        this.port = 8000;
        this.logger = logger;
        this.userController = userController;
    };

    userRoutes() {
        this.app.use('/users', this.userController.router);
    }

    public async init() {
        this.userRoutes();
        this.server = this.app.listen(this.port);
        this.logger.log(`Server up & running on: http://localhost:${ this.port }`)
    }
 }
