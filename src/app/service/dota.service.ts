import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './http.service';
import { Hero, HeroAbility, HeroDetail } from './type';

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
    return this.http.post('/admin/dota/version', params, ['/dota/version']);
  }

  getHeroes() {
    return this.http.get('/dota/heroes');
  }

  getHeroDetail(heroName: string) {
    const params = new HttpParams()
      .append('heroName', heroName);
    return this.http.get('/dota/heroDetail', params);
  }

  deleteHero(heroName: string) {
    const params = new HttpParams()
      .append('name', heroName);
    return this.http.post('/admin/dota/hero/delete', params, ['/dota/heroes']);
  }

  setHeroBasic(heroBasic: Hero) {
    return this.http.post('/admin/dota/hero/basicInfo', heroBasic, ['/dota/heroes']);
  }

  setHeroDetail(heroDetail: HeroDetail) {
    return this.http.post('/admin/dota/hero/detailInfo', heroDetail, ['/dota/heroDetail']);
  }

  setAbility(ability: HeroAbility) {
    return this.http.post('/admin/dota/ability', ability, ['/dota/heroDetail']);
  }

  deleteAbility(abilityName: string) {
    const params = new HttpParams()
      .append('name', abilityName);
    return this.http.post('/admin/dota/deleteAbility', params, ['/dota/heroDetail']);
  }

  getItems() {
    return this.http.get('/dota/items');
  }

  getItemDetail(itemKey: string) {
    const params = new HttpParams()
      .append('itemKey', itemKey);
    return this.http.get('/dota/itemDetail', params);
  }

  deleteItem(itemKey: string) {
    const params = new HttpParams()
      .append('itemKey', itemKey);
    return this.http.post('/admin/dota/item/delete', params, ['/dota/items']);
  }

}
