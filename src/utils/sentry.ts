import { init } from '@sentry/nextjs';

function SentryInit() {
  if (process.env.NODE_ENV === 'production') {
    init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      tracesSampleRate: 1.0,
      environment: process.env.NODE_ENV,
    });
  }
}

export default SentryInit;
