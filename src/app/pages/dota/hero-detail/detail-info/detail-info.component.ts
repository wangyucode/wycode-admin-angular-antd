import { Component, Input, OnInit } from '@angular/core';

export interface HeroDetail {
  agilityGrow?: string;
  agilityStart?: number;
  armor?: number;
  attackPower?: number;
  attackSpeed?: number;
  attackType?: string;
  intelligenceGrow?: string;
  intelligenceStart?: number;
  name?: string;
  otherName?: string;
  speed?: number;
  story?: string;
  strengthGrow?: string;
  strengthStart?: number;
  talent10Left?: string;
  talent10Right?: string;
  talent15Left?: string;
  talent15Right?: string;
  talent20Left?: string;
  talent20Right?: string;
  talent25Left?: string;
  talent25Right?: string;
}

@Component({
  selector: 'app-hero-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.css']
})
export class DetailInfoComponent implements OnInit {

  @Input()
  heroDetail: HeroDetail = {};

  constructor() {
  }

  ngOnInit() {
  }

}
