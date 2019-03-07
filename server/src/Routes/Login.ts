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
        this._mongodb = new MongoDB('mongodb+srv://admin:admin@chat-test-zpcun.mongodb.net/test?retryWrites=true');
        
    }

    public get routes(): Router {
        const router: Router = Router();

        router.get('/', async (req: Request, res: Response) => {
            // tslint:disable-next-line:no-console
            await this._mongodb.connectToBD('chat-test', 'users');
            console.log(this._mongodb.isConnected());
            res.send('Connected to mongodb');
        });

        router.get('/all', async (req: Request, res: Response) => {
            await this._mongodb.connectToBD('chat-test', 'users');
            console.log(this._mongodb.isConnected());
            let tmp: Document[] = await this._mongodb.getAll();
            res.send(tmp);
            
        })
        return router;
    }
}
