import * as express from 'express';

import { WelcomeController } from './controllers';

const app: express.Application = express();

const port: number|string = (process.env.PORT || 3000);

app.use('/welcome', WelcomeController);

app.listen(port, () => {
    console.log('Listening on port ' + port);
})