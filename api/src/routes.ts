import {Application} from 'express';
import routes from '~routes';

const useRoutes = (app: Application) => {
  app.use('/', routes.health);
  app.use('/device', routes.device);
};

export default useRoutes;
