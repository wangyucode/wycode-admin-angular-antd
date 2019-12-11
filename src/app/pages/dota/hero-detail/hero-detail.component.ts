import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../heroes/heroes.component';
import { DotaService } from '../../../service/dota.service';
import { HeroDetail } from './detail-info/detail-info.component';
import { JsonResult } from '../../../service/type';
import { HeroAbility } from './ability-info/ability-info.component';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  heroDetail: HeroDetail;
  heroAbilities: HeroAbility[];
  loading = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dotaService: DotaService) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((paramMap: any) => {
      this.hero = paramMap.params;
      this.loading = true;
      this.dotaService.getHeroDetail(this.hero.name).subscribe((data: JsonResult<HeroDetail & { abilities: HeroAbility[] }>) => {
        this.heroDetail = data.data;
        this.heroAbilities = data.data.abilities;
        this.loading = false;
      });
    });
  }


  onBack() {
    this.router.navigate(['/dota/heroes']);
  }

}
