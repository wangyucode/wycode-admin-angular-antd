import { Component, Input, OnInit } from '@angular/core';
import { HeroDetail } from '../../../../service/type';


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
