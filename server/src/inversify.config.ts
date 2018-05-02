import { Container } from 'inversify';
import { App } from './app';

const container: Container = new Container();

container.bind('App').to(App);

export { container };
