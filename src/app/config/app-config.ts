import { Urls } from './urls';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppConfig {
  config: {
    urlMap: Urls;
  };

  constructor() {
    this.config = {
      urlMap: new Urls()
    };
  }

  loadConfig(configObj: any) {
    if (configObj && configObj.urlMap) {
      this.config.urlMap.populateMap(configObj.urlMap);
    }
  }

  getUrlMap() {
    console.log(this.config);
    return this.config.urlMap;
  }

  getUserInfo() {
    return null;
  }

  getAppToken() {
    return null;
  }
}
