import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { JsonResult } from './type';
import { Observable } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';

const LOGIN_PATH = '/admin/user/login';
const AUTH_KEY = 'AUTH_KEY';

export interface AuthUser {
  avatar: string;
  token: string;
  type: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private mUser: AuthUser;
  userEmit = new EventEmitter<AuthUser>();

  constructor(private http: HttpClient, private messageService: NzMessageService) {
    this.user = JSON.parse(window.localStorage.getItem(AUTH_KEY));
  }

  public get user() {
    return this.mUser && JSON.parse(window.localStorage.getItem(AUTH_KEY));
  }

  public set user(user: AuthUser) {
    this.mUser = user;
    window.localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    this.userEmit.emit(user);
  }

  login(username: string, password: string) {
    const params = new HttpParams()
      .append('username', username)
      .append('password', password);
    return this.http.get(environment.baseUrl + LOGIN_PATH, { params })
      .pipe(map((data: JsonResult<AuthUser>) => {
        if (data.success) {
          this.user = data.data;
          this.messageService.create('success', `欢迎回来： ${data.data.username}`);
        }
        return data;
      }));
  }

  logout() {
    this.user = undefined;
  }
}
