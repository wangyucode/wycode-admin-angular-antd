import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroDetail, JsonResult } from '../../../../service/type';
import { DotaService } from '../../../../service/dota.service';
import { NzNotificationService } from 'ng-zorro-antd';


@Component({
  selector: 'app-hero-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.css']
})
export class DetailInfoComponent {

  @Input()
  heroDetail: HeroDetail = {};
  @Output()
  saveSuccess = new EventEmitter();

  loading = false;

  constructor(private dotaService: DotaService, private notification: NzNotificationService) {
  }

  submitForm() {
    this.loading = true;
    this.dotaService.setHeroDetail(this.heroDetail).subscribe((result: JsonResult<HeroDetail>) => {
      this.loading = false;
      this.notification.success('成功!', `${result.data.name} 详细信息已保存`);
      this.saveSuccess.emit();
    }, () => {
      this.loading = false;
    });
  }


}
