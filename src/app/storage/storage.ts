import { Injectable } from '@angular/core';
import { CacheStore } from './cache-storage';

@Injectable({ providedIn: 'root' })
export class Storage {
  constructor(private cacheStore: CacheStore) {
    this.readAllData();
  }

  public save(key: string, value: any): boolean {
    localStorage.setItem(key, value);
    return true;
  }

  public read(key: string): any {
    let cacheValue = this.cacheStore.getFromCache(key);
    if (cacheValue) return cacheValue;
    let localVal = localStorage.getItem(key);
    if (localVal) this.cacheStore.setCache(key, localVal);
    return localVal;
  }

  public delete(key: string): boolean {
    this.cacheStore.deleteCache(key);
    localStorage.removeItem(key);
    return true;
  }

  readAllData() {
    console.log('Object.keys(localStorage): ', Object.keys(localStorage));
    Object.keys(localStorage).map(k => {
      this.cacheStore.setCache(k, localStorage[k]);
    });
  }
}
