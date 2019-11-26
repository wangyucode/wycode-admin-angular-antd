import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

const LOGIN_PATH = '/admin/user/login';

interface AuthUser {
  avatar: string;
  token: string;
  type: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: AuthUser;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const params = new HttpParams()
      .append('username', username)
      .append('password', password);
    this.http.get(environment.baseUrl + LOGIN_PATH, { params }).subscribe((data) => {
      console.log('login->', data);
    });
  }
}
