import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DotaService {

  constructor(private http: HttpService) {
  }

  getVersion() {
    return this.http.get('/dota/version');
  }

  setVersion(version: string) {
    const params = new HttpParams()
      .append('version', version);
    return this.http.post('/admin/dota/version', params);
  }

  getHeroes() {
    return this.http.get('/dota/heroes');
  }
}
