import { Component, Input, OnInit } from '@angular/core';
import { HeroAbility } from '../../../../service/type';

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
