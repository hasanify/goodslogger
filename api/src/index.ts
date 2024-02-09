import express from 'express';
import 'module-alias/register';
import data from '~data';
import middlewares from '~middlewares';
import useRoutes from './routes';

const app = express();
const Sentry = middlewares.sentry(app);

app.use(Sentry.request());
app.use(Sentry.tracing());

useRoutes(app);

app.use(Sentry.error());

app.listen(data.env.PORT, () => {
  console.log(`Server started at PORT:${data.env.PORT}`);
});
