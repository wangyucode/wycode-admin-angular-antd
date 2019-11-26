import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpService) {
  }

  getError(day: string, code: string) {
    const params = new HttpParams()
      .append('day', day)
      .append('code', code);
    return this.http.get('/admin/dashboard/errorPath', params);
  }

  getAccess(day: string) {
    const params = new HttpParams()
      .append('day', day);
    return this.http.get('/admin/dashboard/visitors', params);
  }

  getAppUse(day: string) {
    const params = new HttpParams()
      .append('day', day);
    return this.http.get('/admin/dashboard/appUse', params);
  }

  getBlogAccess(day: string) {
    const params = new HttpParams()
      .append('day', day);
    return this.http.get('/admin/dashboard/blogAccess', params);
  }

  getAccessGeo(day: string) {
    const params = new HttpParams()
      .append('day', day);
    return this.http.get('/admin/dashboard/geo', params);
  }
}
