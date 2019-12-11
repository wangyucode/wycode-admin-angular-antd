import { Component, Input, OnInit } from '@angular/core';

export interface HeroAbility {
  annotation?: string;
  attributes?: Map<string, string>;
  coolDown?: string;
  description?: string;
  heroName?: string;
  imageUrl?: string;
  magicConsumption?: string;
  name?: string;
  num?: number;
  tips?: string;
}

@Component({
  selector: 'app-hero-ability-info',
  templateUrl: './ability-info.component.html',
  styleUrls: ['./ability-info.component.css']
})
export class AbilityInfoComponent implements OnInit {

  @Input()
  abilities: HeroAbility[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  add() {
    this.abilities.push({});
  }

}
