import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { NzModalRef } from 'ng-zorro-antd';

const MAX_TRY_COUNT = 5;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  loading = false;
  error = undefined;
  private tryCount = 0;

  constructor(private authService: AuthService, private modal: NzModalRef) {
  }


  submitForm(): void {
    if (this.tryCount >= MAX_TRY_COUNT - 1) {
      this.error = '尝试次数过多！';
      return;
    }
    this.loading = true;
    this.error = undefined;
    this.authService.login(this.username, this.password).subscribe(data => {
      this.loading = false;
      if (data.success) {
        this.modal.close();
      } else {
        this.tryCount++;
        this.error = `${data.error}，还能尝试${MAX_TRY_COUNT - this.tryCount}次`;
      }
    });
  }

}
