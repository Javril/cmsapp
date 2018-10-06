import { Injectable } from '@angular/core';
import { DalService } from '../services/dal.service';
import { AppConfig } from './app-config';

@Injectable({ providedIn: 'root' })
export class AppLoader {
  constructor(private dal: DalService, private appConfig: AppConfig) {}

  load() {
    this.dal.getConfig().subscribe(config => {
      console.log(config);
      this.dal
        .getEnvSpecificConfig(config['envMap'][config['env']])
        .subscribe(envConfig => {
          console.log(envConfig);
          this.appConfig.loadConfig(envConfig);
        });
    });
  }
}
