import { AfterViewInit, Component } from '@angular/core';
import { DotaService } from '../../../service/dota.service';
import { JsonResult, Version } from '../../../service/type';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements AfterViewInit {

  version = '版本号';
  modifyDate = '....-..-..';
  iconType = 'loading';
  disabled = true;

  constructor(private service: DotaService) {
  }

  ngAfterViewInit() {
    this.service.getVersion().subscribe((data: JsonResult<Version>) => {
      this.version = data.data.version;
      this.modifyDate = data.data.date;
      this.iconType = 'edit';
    });
  }

  buttonClick() {
    switch (this.iconType) {
      case 'edit':
        this.disabled = false;
        this.iconType = 'check';
        break;
      case 'check':
        this.disabled = true;
        this.iconType = 'loading';
        this.submit();
        break;
    }
  }

  private submit() {
    this.service.setVersion(this.version).subscribe((data: JsonResult<Version>) => {
      this.iconType = 'edit';
      this.modifyDate = data.data.date;
    }, () => {
      this.iconType = 'edit';
    });
  }
}
