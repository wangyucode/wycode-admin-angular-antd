import { Component, Input, OnInit } from '@angular/core';
import { DotaItem } from '../../../../service/type';
import { DotaService } from '../../../../service/dota.service';
import { KeyValue } from '@angular/common';


@Component({
  selector: 'app-item-effect-info',
  templateUrl: './effect-info.component.html',
  styleUrls: ['./effect-info.component.css']
})
export class EffectInfoComponent implements OnInit {

  @Input()
  item: DotaItem = {};
  effects: KeyValue<string, string>[] = [];
  loading = false;
  inputModalVisible = false;
  inputKey = null;

  constructor(private dotaService: DotaService) {
  }

  ngOnInit(): void {
    Object.keys(this.item.desc).forEach((key) => {
      this.effects.push({ key: key, value: this.item.desc[key] });
    });
  }


}
