import dotenv from 'dotenv';
dotenv.config();

export const env = {
  PORT: process.env.PORT || 3000,
  TZ: process.env.TZ,
  SENTRY_DSN: process.env.SENTRY_DSN || '',
};
