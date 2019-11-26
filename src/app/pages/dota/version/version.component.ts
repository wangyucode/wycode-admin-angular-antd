import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DotaService } from '../../../service/dota.service';
import { JsonResult } from '../../../service/type';
import { HttpHeaders } from '@angular/common/http';

export interface Version {
  version: string;
  date: string;
}

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements AfterViewInit {

  version = '版本号';
  modifyDate = '....-..-..';
  iconType = 'sync';
  disabled = true;
  iconSpin = true;

  constructor(private service: DotaService) {
  }

  ngAfterViewInit() {
    this.service.getVersion().subscribe((data: JsonResult<Version>) => {
      this.version = data.data.version;
      this.modifyDate = data.data.date;
      this.iconSpin = false;
      this.iconType = 'edit';
    });
  }

  buttonClick() {
    switch (this.iconType) {
      case 'edit':
        this.disabled = false;
        this.iconType = 'check';
        this.iconSpin = false;
        break;
      case 'check':
        this.disabled = true;
        this.iconType = 'sync';
        this.iconSpin = true;
        this.submit();
        break;
    }
  }

  private submit() {
    this.service.setVersion(this.version).subscribe((data: JsonResult<Version>) => {
      this.iconSpin = false;
      this.iconType = 'edit';
    });
  }
}
