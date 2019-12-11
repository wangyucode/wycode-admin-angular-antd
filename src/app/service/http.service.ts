import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { CacheService } from './cache.service';
import { AuthService } from './auth.service';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
import { LoginComponent } from '../component/login/login.component';
import { JsonResult, ServerError } from './type';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
              private cache: CacheService,
              private auth: AuthService,
              private modalService: NzModalService,
              private notification: NzNotificationService) {
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
        }),
        catchError(this.handleError)
      );
    }
  }

  post(path: string, params?: HttpParams, getPath?: string): Observable<any> {
    const user = this.auth.user;
    if (user) {
      const headers = new HttpHeaders({ 'X-Auth-Token': user.token });
      return this.http.post<JsonResult<any>>(environment.baseUrl + path, params, { headers }).pipe(
        map((data) => {
          if (!data.success) {
            throwError(data);
          }
          this.cache.resetPathCache(getPath);
          console.log('post:' + path, data);
          return data;
        }),
        catchError(this.handleError)
      );
    } else {
      this.modalService.create({
        nzContent: LoginComponent,
        nzFooter: null
      });
      return of(null);
    }
  }

  handleError = (error: HttpErrorResponse | ServerError) => {
    console.error('HttpService::handleError-->', error);
    if (error instanceof HttpErrorResponse) {
      error = error.error;
    }
    if (error.status === 403) {
      this.auth.user = null;
      this.modalService.create({
        nzContent: LoginComponent,
        nzFooter: null
      });
    }
    this.notification.error('请求错误：', error.error);
    return throwError(error);
  };
}
