import { Component, Input, OnInit } from '@angular/core';
import { HeroAbility } from '../ability-info.component';

@Component({
  selector: 'app-ability-form',
  templateUrl: './ability-form.component.html',
  styleUrls: ['./ability-form.component.css']
})
export class AbilityFormComponent implements OnInit {

  @Input()
  ability: HeroAbility;

  constructor() {
  }

  ngOnInit() {
  }

}
