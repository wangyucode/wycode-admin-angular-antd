import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {

  version = '版本号';
  modifyDate = '2019-11-25 17:55:58';
  iconType = 'edit';
  isEditing = false;

  constructor() {
  }

  ngOnInit() {
  }

  buttonClick() {
    if (!this.isEditing) {
      this.isEditing = true;
      this.iconType = 'check';
    } else {
      this.isEditing = false;
    }
  }

}
