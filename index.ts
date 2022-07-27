import express, { NextFunction, Request, Response } from 'express';
import { userRouter } from './src/users/user.js';

const port = 8000;
const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    console.info('Time: ', Date.now());
    next();
});

app.get('/', (req: Request, res: Response) => {
    res.send('Hollo!');
});

app.use('/users', userRouter);

app.listen(port, () => {
    console.info(`Server up & running on: http://localhost:${ port }`);
});
