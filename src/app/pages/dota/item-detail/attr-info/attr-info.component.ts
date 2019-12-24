import { Component, Input, OnInit } from '@angular/core';
import { DotaItem } from '../../../../service/type';
import { DotaService } from '../../../../service/dota.service';
import { NzNotificationService } from 'ng-zorro-antd';
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
  loading = false;
  inputModalVisible = false;
  inputKey = null;

  constructor(private dotaService: DotaService, private notification: NzNotificationService) {
  }

  ngOnInit(): void {
    Object.keys(this.item.attrs).forEach((key) => {
      this.attrs.push({ key: key, value: this.item.attrs[key] });
    });
  }

  add() {

  }


}
