import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';

const config: YaConfig = {
  apikey: 'ad0f8b72-d7bf-4233-a8d2-a440f98ec836',
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), importProvidersFrom(AngularYandexMapsModule.forRoot(config))]
};
