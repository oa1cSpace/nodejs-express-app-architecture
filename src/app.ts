import express, { Express } from 'express';
import { userRouter } from './users/user';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';
 
 export class App {
    app: Express;
    server: Server;
    port: number;
    logger: LoggerService;

    constructor(logger: LoggerService) {
        this.app = express();
        this.port = 8000;
        this.logger = logger;
    };

    userRoutes() {
        this.app.use('/users', userRouter);
    }

    public async init() {
        this.userRoutes();
        this.server = this.app.listen(this.port);
        this.logger.log(`Server up & running on: http://localhost:${ this.port }`)
    }
 }
