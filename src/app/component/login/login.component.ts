import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    console.log('submitForm->', this.password, this.password);
  }

}
