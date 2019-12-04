import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AuthService, AuthUser } from '../../service/auth.service';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isCollapsed = false;
  userAvatar: string;
  showDropdown = false;

  @Output() collapseChange = new EventEmitter<boolean>();

  constructor(private authService: AuthService, private modalService: NzModalService) {
    this.authService.userEmit.subscribe((user?: AuthUser) => {
      if (user) {
        this.userAvatar = user.avatar;
      } else {
        this.userAvatar = null;
      }
    });
  }

  ngOnInit() {
    const user = this.authService.user;
    if (user) {
      this.userAvatar = user.avatar;
    }
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
    this.collapseChange.emit(this.isCollapsed);
  }

  accountClick() {
    if (!this.userAvatar) {
      this.modalService.create({
        nzContent: LoginComponent,
        nzFooter: null
      });
    } else {
      this.showDropdown = !this.showDropdown;
    }
  }

  logout() {
    this.showDropdown = false;
    this.authService.logout();
  }

}
