import * as express from 'express';

export class App {
    private app: express.Express;

    public constructor() {
        this.app = express();
    }

    private mountRoutes(): void {
        const router = express.Router();
        router.get('/', (req: express.Request, res: express.Response) => {
            res.send('Hello World!');
        });
        this.app.use('/', router);
    }
}