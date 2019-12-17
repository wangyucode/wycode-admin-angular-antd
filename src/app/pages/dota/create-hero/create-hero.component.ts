import { Component } from '@angular/core';
import { Hero } from '../../../service/type';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent {

  current = 0;
  hero: Hero = {};

  constructor() {
  }

}
