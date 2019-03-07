import { MongoClient, Collection } from 'mongodb';
import { injectable } from 'inversify';

const URI: string = 'mongodb+srv://admin:admin@chat-test-zpcun.mongodb.net/test?retryWrites=true';

@injectable()
export class MongoDB {
    private _mongoClient: MongoClient;
    private _collection: Collection;

    constructor() {
        this._mongoClient = new MongoClient(URI, { useNewUrlParser: true });
        // this._schema = new Schema(sch);
        // this._model = this._mongoose.model(modelName, this._schema);
        this.connectToBD();
    }

    private async connectToBD(): Promise<void> {
        await this._mongoClient.connect().catch(() => {
            this._collection = this._mongoClient.db('chat-test').collection('users');
            // tslint:disable-next-line:no-console
            console.log(this._collection);
        });
    }

    public isConnected(): boolean {
        return this._mongoClient.isConnected();
    }

    public async disconnectFromBD(): Promise<void> {
        await this._mongoClient.close();
    }
}
