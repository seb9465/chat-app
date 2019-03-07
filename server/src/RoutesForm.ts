import { injectable } from 'inversify';
import { Router, Request, Response } from 'express';
import { MongoDB } from './BD/MongoDB';
import { WebService } from './WebService';

@injectable()
export class RoutesForm extends WebService {
    public readonly mainRoute: string = '/test';
    private _mongodb: MongoDB;

    public constructor() {
        super();
        this._mongodb = new MongoDB('UN_URI_RANDOM');
    }

    public get routes(): Router {
        const router: Router = Router();

        router.get('/', async (req: Request, res: Response) => {
            // tslint:disable-next-line:no-console
            console.log(this._mongodb.isConnected());
        });

        return router;
    }
}