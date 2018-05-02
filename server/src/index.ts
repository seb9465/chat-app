import { App } from './app';
import 'reflect-metadata';
import { container } from './inversify.config';

const app: App = new App();

app.build();
