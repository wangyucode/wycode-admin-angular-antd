import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DotaService } from '../../../../service/dota.service';
import { Hero, JsonResult } from '../../../../service/type';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-hero-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent {

  @Input()
  hero: Hero = {};
  @Input()
  isCreate: boolean;
  @Output()
  saveSuccess = new EventEmitter();

  loading = false;

  constructor(private dotaService: DotaService, private notification: NzNotificationService) {
  }

  submitForm() {
    this.loading = true;
    this.dotaService.setHeroBasic(this.hero).subscribe((result: JsonResult<Hero>) => {
      this.loading = false;
      this.notification.success('成功!', `${result.data.name} 基本信息已保存`);
      this.saveSuccess.emit();
    }, () => {
      this.loading = false;
    });
  }
}
