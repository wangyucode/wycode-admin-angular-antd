import { Component } from '@angular/core';
import { AuthService, AuthUser } from './service/auth.service';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  userTrigger: null | 'hover' = null;
  userAvatar: string;

  constructor(private authService: AuthService) {
    of(authService.user).subscribe((user?: AuthUser) => {
      if (user) {
        this.userTrigger = 'hover';
        this.userAvatar = user.avatar;
      } else {
        this.userTrigger = null;
        this.userAvatar = null;
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
