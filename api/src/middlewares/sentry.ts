import * as Sentry from '@sentry/node';
import {Application} from 'express';
import data from '~data';

export const sentry = (app: Application) => {
  const init = () => {
    Sentry.init({
      dsn: data.env.SENTRY_DSN,
      integrations: [
        new Sentry.Integrations.Express({
          app,
        }),
      ],
      tracesSampleRate: 1.0,
    });
  };

  const request = () => {
    return Sentry.Handlers.requestHandler({
      ip: true,
    });
  };

  const tracing = () => {
    return Sentry.Handlers.tracingHandler();
  };

  const error = () => {
    return Sentry.Handlers.errorHandler();
  };

  return {
    init,
    request,
    tracing,
    error,
  };
};
