import { MongoClient, Collection, MongoError } from 'mongodb';
import { injectable } from 'inversify';

@injectable()
export class MongoDB {
    private uri: string;
    private _mongoClient: MongoClient;
    private _collection: Collection;

    public constructor(uri: string) {
        this.uri = uri;
        this._mongoClient = new MongoClient(this.uri);
        // this._schema = new Schema(sch);
        // this._model = this._mongoose.model(modelName, this._schema);
    }

    public async connectToBD(db: string, collection: string): Promise<void> {
        await this._mongoClient.connect().then(() => {
            this._collection = this._mongoClient.db(db).collection(collection);
        });
    }

    public isConnected(): boolean {
        return this._mongoClient.isConnected();
    }

    public async getAll(): Promise<Document[]> {
        const tmp: Document[] = [];

        this._collection.find().toArray((err: MongoError, res: Document[]) => {
            for (const doc of res) {
                tmp.push(doc);
            }
            console.log(tmp);
        });

        return tmp;
    }

    public async disconnectFromBD(): Promise<void> {
        await this._mongoClient.close();
    }
}
