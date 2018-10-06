import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CacheStore {
  private localCache: Map<string, any>;

  constructor() {
    this.localCache = new Map<string, any>();
  }

  setCache(key: string, value: any) {
    console.log('Seeting cache', key);
    this.localCache[key] = value;
  }

  getFromCache(key: string) {
    console.log('Reading cache');
    return this.localCache[key];
  }

  deleteCache(key: string) {
    delete this.localCache[key];
  }
}
