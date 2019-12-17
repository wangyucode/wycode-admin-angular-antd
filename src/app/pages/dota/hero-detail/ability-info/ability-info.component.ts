import { Component, Input } from '@angular/core';
import { HeroAbility } from '../../../../service/type';

@Component({
  selector: 'app-hero-ability-info',
  templateUrl: './ability-info.component.html',
  styleUrls: ['./ability-info.component.css']
})
export class AbilityInfoComponent {

  @Input()
  abilities: HeroAbility[] = [];
  @Input()
  heroName: string;

  constructor() {
  }

  add() {
    this.abilities.push({ heroName: this.heroName });
  }

}
