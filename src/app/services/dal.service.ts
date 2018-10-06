import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import { AppConfig } from '../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class DalService {
  constructor(
    private customHTTP: CustomHttpService,
    private appConfig: AppConfig
  ) {}

  getConfig() {
    return this.customHTTP.getRequest(
      this.appConfig.getUrlMap().getMap().GET_CONIFG
    );
  }

  getEnvSpecificConfig(url) {
    return this.customHTTP.getRequest(url);
  }
}
