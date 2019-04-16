import { Container } from 'inversify';
import { App } from './app';
import Types from './Types';
import { Login } from './Routes/Login';

const container: Container = new Container();

container.bind('App').to(App);
container.bind(Types.Login).to(Login);

export { container };
