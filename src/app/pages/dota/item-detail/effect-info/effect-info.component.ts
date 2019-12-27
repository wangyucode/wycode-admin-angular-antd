import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DotaItem } from '../../../../service/type';
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
  inputModalVisible = false;
  inputKey = null;
  @Output()
  save = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    if (this.item.desc) {
      Object.keys(this.item.desc).forEach((key) => {
        this.effects.push({ key: key, value: this.item.desc[key] });
      });
    }
  }

  submitForm(): void {
    const effects = {};
    this.effects.forEach(kv => effects[kv.key] = kv.value);
    this.item.desc = effects;
    this.save.emit();
  }

}
