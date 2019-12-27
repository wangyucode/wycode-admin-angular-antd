import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DotaService } from '../../../../service/dota.service';
import { ADVANCE_ITEM_TYPES, BASIC_ITEM_TYPES, DotaItem, SECRET_ITEM_TYPES } from '../../../../service/type';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-item-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  @Input()
  item: DotaItem = {};
  @Input()
  isCreate: boolean;
  @Output()
  save = new EventEmitter();

  types = BASIC_ITEM_TYPES;

  constructor() {
  }

  ngOnInit(): void {
    this.cnameChange();
  }

  cnameChange(): void {
    switch (this.item.cname) {
      case '基础物品':
        this.types = BASIC_ITEM_TYPES;
        break;
      case '升级物品':
        this.types = ADVANCE_ITEM_TYPES;
        break;
      case '神秘商店':
        this.types = SECRET_ITEM_TYPES;
        break;
      default:
        this.types = BASIC_ITEM_TYPES;
        break;
    }
  }

  submitForm() {
    this.save.emit();
  }

}
