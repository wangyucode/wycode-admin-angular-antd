import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

interface CacheKey {
  path: string;
  params: HttpParams;
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  cache: Map<CacheKey, any>;

  constructor(private http: HttpClient) {
    this.cache = new Map();
  }

  get(path: string, params: HttpParams): Observable<any> {
    const cacheData = this.getData(path, params);
    console.log(path + '-->', cacheData);
    if (cacheData) {
      return of(cacheData);
    } else {
      return this.http.get(environment.baseUrl + path, { params }).pipe(
        map((data) => {
          this.cache.set({ path, params }, data);
          console.log('get:' + path, data);
          return data;
        })
      );
    }
  }


  getData(path: string, params: HttpParams): any {
    for (const key of this.cache.keys()) {
      if (key.path === path && this.isParamEquals(key.params, params)) {
        return this.cache.get(key);
      }
    }
    return false;
  }

  private isParamEquals(params1: HttpParams, params2: HttpParams): boolean {
    params1.keys().forEach((key) => {
      if (!params2.has(key) || params2.get(key) !== params1.get(key)) {
        return false;
      }
    });
    return true;
  }
}
