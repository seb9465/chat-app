import { Mongoose } from 'mongoose';
import { injectable } from 'inversify';

const DB_URL: string = 'mongodb+srv://admin:admin@chat-test-zpcun.mongodb.net/test?retryWrites=true';

@injectable()
export class MongoDB {
    private _mongoose: Mongoose;
    // private _schema: Schema;
    // private _model: Model<Document>;

    constructor() {
        this._mongoose = new Mongoose();
        // this._schema = new Schema(sch);
        // this._model = this._mongoose.model(modelName, this._schema);
        this.connectToBD();
    }

    private async connectToBD(): Promise<void> {
        await this._mongoose.connect(DB_URL).catch(() => {
            console.log("Error while connecting to the BD.");
        });
    }

    public isConnected(): boolean {
        return this._mongoose.connection.readyState === 1;
    }
}
