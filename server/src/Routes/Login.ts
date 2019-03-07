import { injectable } from 'inversify';
import { WebService } from '../WebService';
import { MongoDB } from '../BD/MongoDB';
import { Router, Request, Response } from 'express';

@injectable()
export class Login extends WebService {
    public readonly mainRoute: string = '/login';
    private _mongodb: MongoDB;

    public constructor() {
        super();
        this._mongodb = new MongoDB();
    }

    public get routes(): Router {
        const router: Router = Router();

        router.get('/', async (req: Request, res: Response) => {
            // tslint:disable-next-line:no-console
            console.log(this._mongodb.isConnected());
            res.send('Connected to mongodb');
        });

        return router;
    }
}
