import { injectable } from 'inversify';
import { WebService } from '../WebService';
import { Router, Request, Response } from 'express';
@injectable()
export class Login extends WebService {
    public readonly mainRoute: string = '/login';

    // tslint:disable-next-line:typedef
    private _database;

    public constructor() {
        super();
        // tslint:disable-next-line:typedef
        const config = {
            apiKey: 'AIzaSyALRAUy5Zj4e6mXI6hH0Mlgx4q_rtzQ44A',
            authDomain: 'chat-test-97dcb.firebaseapp.com',
            databaseURL: 'https://chat-test-97dcb.firebaseio.com',
            projectId: 'chat-test-97dcb',
            storageBucket: 'chat-test-97dcb.appspot.com',
            messagingSenderId: '96088593960'
        };

        firebase.initializeApp(config);

        this._database = firebase.firestore();
    }

    public get routes(): Router {
        const router: Router = Router();

        router.get('/', async (req: Request, res: Response) => {
            this._database.collection('test').get()
                // tslint:disable-next-line:no-any
                .then((snapshot: any) => {
                    // tslint:disable-next-line:no-any
                    snapshot.forEach((element: any) => {
                        // tslint:disable-next-line:no-console
                        console.log(element.id, ' => ', element.data());
                    });
                })
                // tslint:disable-next-line:no-any
                .catch((err: any) => {
                    // tslint:disable-next-line:no-console
                    console.log(err);
                });
            // tslint:disable-next-line:no-console
            res.send('Hi');
        });

        return router;
    }
}
