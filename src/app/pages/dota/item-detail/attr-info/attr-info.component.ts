import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DotaItem } from '../../../../service/type';
import { KeyValue } from '@angular/common';


@Component({
  selector: 'app-item-attr-info',
  templateUrl: './attr-info.component.html',
  styleUrls: ['./attr-info.component.css']
})
export class AttrInfoComponent implements OnInit {

  @Input()
  item: DotaItem = {};
  attrs: KeyValue<string, string>[] = [];
  inputModalVisible = false;
  inputKey = null;
  @Output()
  save = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    if (this.item.attrs) {
      Object.keys(this.item.attrs).forEach((key) => {
        this.attrs.push({ key: key, value: this.item.attrs[key] });
      });
    }
  }

  submitForm(): void {
    const attrs = {};
    this.attrs.forEach(kv => attrs[kv.key] = kv.value);
    this.item.attrs = attrs;
    this.save.emit();
  }

}
