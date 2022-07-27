import express, { Express } from 'express';
import { userRouter } from './users/user';
import { Server } from 'http';
 
 export class App {
    app: Express;
    server: Server;
    port: number;

    constructor() {
        this.app = express();
        this.port = 8000;
    };

    userRoutes() {
        this.app.use('/users', userRouter);
    }

    public async init() {
        this.userRoutes();
        this.server = this.app.listen(this.port);
        console.info(`Server up & running on: http://localhost:${ this.port }`);
    }
 }
