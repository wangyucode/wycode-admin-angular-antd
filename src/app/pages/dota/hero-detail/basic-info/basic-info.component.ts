import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../heroes/heroes.component';

@Component({
  selector: 'app-hero-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  @Input()
  hero: Hero = {};

  constructor() {
  }

  ngOnInit() {
  }

}
