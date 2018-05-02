import * as express from 'express';
import * as bodyParser from 'body-parser';

export class App {
    private app: express.Application;

    public constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.mountRoutes();
    }

    private mountRoutes(): void {
        const router = express.Router();
        router.get('/', (req: express.Request, res: express.Response) => {
            res.send('Hello World!');
        });
        this.app.use('/', router);
    }
}