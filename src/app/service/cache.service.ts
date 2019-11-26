import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

interface CacheKey {
  path: string;
  params: HttpParams;
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() {
    this.cache = new Map();
  }

  cache: Map<CacheKey, any>;

  private static isParamEquals(a?: HttpParams, b?: HttpParams): boolean {
    if (a && b) { // a,b 都不为空比较所有key的值
      for (const key of a.keys()) {
        if (!b.has(key) || b.get(key) !== a.get(key)) {
          return false;
        }
      }
    } else { // a, b都为空时 返回true 否则false
      return !a && !b;
    }
  }

  getData(path: string, params?: HttpParams): any {
    for (const key of this.cache.keys()) {
      if (key.path === path && CacheService.isParamEquals(key.params, params)) {
        return this.cache.get(key);
      }
    }
    return false;
  }

  setData(key: { path: string; params: HttpParams }, data: any) {
    this.cache.set(key, data);
  }

  resetPathCache(path: string) {
    for (const key of this.cache.keys()) {
      if (key.path === path) {
        this.cache.delete(key);
      }
    }
  }
}
