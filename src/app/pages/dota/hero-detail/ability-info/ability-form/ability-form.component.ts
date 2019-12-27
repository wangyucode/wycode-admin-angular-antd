import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroAbility } from '../../../../../service/type';
import { DotaService } from '../../../../../service/dota.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-ability-form',
  templateUrl: './ability-form.component.html',
  styleUrls: ['./ability-form.component.css']
})
export class AbilityFormComponent implements OnInit {

  @Input()
  ability: HeroAbility;
  @Input()
  saved = false;
  @Output()
  deleted = new EventEmitter();
  attributes: KeyValue<string, string>[] = [];
  inputModalVisible = false;
  inputKey?: string = null;

  loading = false;

  constructor(private dotaService: DotaService, private notification: NzNotificationService) {
  }

  ngOnInit() {
    this.saved = !!this.ability.name;
    if (this.ability.attributes) {
      Object.keys(this.ability.attributes).forEach((key) => {
        this.attributes.push({ key: key, value: this.ability.attributes[key] });
      });
    }
  }

  submitForm() {
    this.loading = true;
    const attributes = {};
    this.attributes.forEach(kv => attributes[kv.key] = kv.value);
    this.ability.attributes = attributes;
    this.dotaService.setAbility(this.ability).subscribe(() => {
      this.loading = false;
      this.notification.success('成功!', `${this.ability.name} 已保存`);
      this.saved = true;
    }, () => {
      this.loading = false;
    });
  }

  delete() {
    this.loading = true;
    this.dotaService.deleteAbility(this.ability.name).subscribe(() => {
      this.loading = false;
      this.notification.success('成功!', `${this.ability.name} 已删除`);
      this.deleted.emit();
    }, () => {
      this.loading = false;
    });
  }
}
