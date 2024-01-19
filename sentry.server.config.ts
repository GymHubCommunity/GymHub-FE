import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://03231d2ce57a7f12c015403dffd08f22@o4506597156978688.ingest.sentry.io/4506597398020096",
  tracesSampleRate: 1.0,
});
