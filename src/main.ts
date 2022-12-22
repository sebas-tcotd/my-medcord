import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import * as Sentry from '@sentry/angular';
import { BrowserTracing } from '@sentry/tracing';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

Sentry.init({
  dsn: 'https://0617d025324d426cbdfd189b5e89c593@o4504369500323840.ingest.sentry.io/4504369550721024',
  integrations: [
    new BrowserTracing({
      tracePropagationTargets: ['localhost', 'https://my-medcord.netlify.app'],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  tracesSampleRate: 1.0,
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
