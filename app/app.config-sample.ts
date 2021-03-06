import { OpaqueToken } from '@angular/core';

export interface AppConfig {
  appDefaultRoute: string
  userServiceHost: string
}
export let AppConfig = new OpaqueToken('app.config');
export let APP_CONFIG: AppConfig = {
  appDefaultRoute: 'worker/manage',
  userServiceHost: '<enter workercrm-site host here>'
};
