import express, { NextFunction, Request, Response } from 'express';

export const userRouter = express.Router();

userRouter.use((req: Request, res: Response, next: NextFunction) => {
    console.log('user router');
    next();
});

userRouter.use('/register', (req: Request, res: Response) => {
    res.send('register');
});

userRouter.use('/login', (req: Request, res: Response) => {
    res.send('login');
});
