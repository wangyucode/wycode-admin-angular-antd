import { Component, OnInit } from '@angular/core';
import { DotaService } from '../../../service/dota.service';
import { JsonResult } from '../../../service/type';

export interface Hero {
  name: string;
  imageUrl: string;
  type: string;
  icon: string;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  strengthHeroes: Hero[];
  intelligenceHeroes: Hero[];
  agileHeroes: Hero[];

  loading = true;

  constructor(private dotaService: DotaService) {
  }

  ngOnInit() {
    this.dotaService.getHeroes().subscribe((data: JsonResult<Hero[]>) => {
      this.strengthHeroes = data.data.filter(hero => hero.type === '力量');
      this.intelligenceHeroes = data.data.filter(hero => hero.type === '智力');
      this.agileHeroes = data.data.filter(hero => hero.type === '敏捷');
      this.loading = false;
    });
  }

}
