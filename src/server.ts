import express, { Application, Request, Response, NextFunction } from 'express';
import routes from './routes/index';

export default function createServer() {
    const app: Application = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/api/v1', routes);

    app.get('*', (req: Request, res: Response) => {
        res.status(404).send();
    });

    return app;
}