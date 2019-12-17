import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero, HeroAbility, JsonResult } from '../../../../../service/type';
import { DotaService } from '../../../../../service/dota.service';
import { NzNotificationService } from 'ng-zorro-antd';

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

  loading = false;

  constructor(private dotaService: DotaService, private notification: NzNotificationService) {
  }

  ngOnInit() {
    this.saved = !!this.ability.name;
  }

  submitForm() {
    this.loading = true;
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
