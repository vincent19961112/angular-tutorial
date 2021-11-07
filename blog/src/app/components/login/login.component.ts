import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  SignUp:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  GoSignUp(){
    this.SignUp =!this.SignUp;
  }

}
