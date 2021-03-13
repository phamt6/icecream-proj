import express, { Application, Request, Response, NextFunction } from 'express';

export default function createServer() {
    const app: Application = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/', (req: Request, res: Response, next: NextFunction) => {
        res.send(200);
    });

    app.get('*', (req: Request, res: Response) => {
        res.status(404).send();
    });

    return app;
}