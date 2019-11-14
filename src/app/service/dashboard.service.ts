import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient, private cache: CacheService) {
  }

  getError(day: string, code: string) {
    const params = new HttpParams()
      .append('day', day)
      .append('code', code);
    return this.cache.get('/admin/dashboard/errorPath', params);
  }

  getAccess(day: string) {
    const params = new HttpParams()
      .append('day', day);
    return this.cache.get('/admin/dashboard/visitors', params);
  }

  getAppUse(day: string) {
    const params = new HttpParams()
      .append('day', day);
    return this.cache.get('/admin/dashboard/appUse', params);
  }

  getBlogAccess(day: string) {
    const params = new HttpParams()
      .append('day', day);
    return this.cache.get('/admin/dashboard/blogAccess', params);
  }

  getAccessGeo(day: string) {
    const params = new HttpParams()
      .append('day', day);
    return this.cache.get('/admin/dashboard/geo', params);
  }
}
