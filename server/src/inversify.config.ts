import { Container } from 'inversify';
import { App } from './app';
import { RoutesForm } from './RoutesForm';
import Types from './Types';
import { Login } from './Routes/Login';

const container: Container = new Container();

container.bind('App').to(App);
container.bind(Types.RoutesForm).to(RoutesForm);
container.bind(Types.Login).to(Login);

export { container };
