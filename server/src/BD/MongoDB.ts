import { MongoClient, Collection } from 'mongodb';
import { injectable } from 'inversify';

@injectable()
export class MongoDB {
    private uri: string;
    private _mongoClient: MongoClient;
    private _collection: Collection;

    public constructor(uri: string) {
        this.uri = uri;
        this._mongoClient = new MongoClient(this.uri, { useNewUrlParser: true });
        // this._schema = new Schema(sch);
        // this._model = this._mongoose.model(modelName, this._schema);
    }

    public async connectToBD(db: string, collection: string): Promise<void> {
        await this._mongoClient.connect().catch(() => {
            this._collection = this._mongoClient.db(db).collection(collection);
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
