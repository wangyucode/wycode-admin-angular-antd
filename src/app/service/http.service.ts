import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { CacheService } from './cache.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private cache: CacheService, private auth: AuthService) {
  }

  get(path: string, params?: HttpParams): Observable<any> {
    const cacheData = this.cache.getData(path, params);
    console.log(path + '-->', cacheData);
    if (cacheData) {
      return of(cacheData);
    } else {
      return this.http.get(environment.baseUrl + path, { params }).pipe(
        map((data) => {
          this.cache.setData({ path, params }, data);
          console.log('get:' + path, data);
          return data;
        })
      );
    }
  }

  post(path: string, params?: HttpParams) {
    if (this.auth.user) {
      return this.http.post(environment.baseUrl + path, params).pipe(
        map((data) => {
          this.cache.resetPathCache(path);
          console.log('post:' + path, data);
          return data;
        })
      );
    }
  }
}
