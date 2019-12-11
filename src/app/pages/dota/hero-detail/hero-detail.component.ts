import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../heroes/heroes.component';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  isCreate = true;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((paramMap: any) => {
      this.hero = paramMap.params;
      this.isCreate = !this.hero.name;
    });
  }

}
