import { Component, OnInit } from '@angular/core';
import { AuthService, AuthUser } from './service/auth.service';
import { LoginComponent } from './component/login/login.component';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  userAvatar: string;

  constructor(private authService: AuthService, private modalService: NzModalService) {
  }

  ngOnInit(): void {
    this.authService.userEmit.subscribe((user?: AuthUser) => {
      if (user) {
        this.userAvatar = user.avatar;
      } else {
        this.userAvatar = null;
      }
    });
  }

  accountClick() {
    if (!this.userAvatar) {
      this.modalService.create({
        nzContent: LoginComponent,
        nzFooter: null
      });
    }
  }

  logout() {
    this.authService.logout();
  }


}
