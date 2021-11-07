import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  SignUp = false;
  imgsrc = '../../../assets/image/brooke-lark-wMzx2nBdeng-unsplash.jpg';
  hide = true;
  email;
  password;
  errors='';
  AgainPassword;

  constructor(private fb:FormBuilder, private AuthApi:AuthService) { }
  FormGroup = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    AgainPassword:['',[Validators.required]]
  })

  ngOnInit(): void {
  }

  onSubmit(form){
    if(!this.SignUp){
      this.login(form);
    }else{
      this.signUp(form);
    }

  }

  login(form){
    let Email = form.value.email;
    let Password = form.value.password;
    this.AuthApi.loginWithEmail(Email,Password).then(()=>{
     console.log("登入用email跟password");
    }).catch((error)=>{
      this.errors = "帳號或密碼輸入錯誤";
      console.log(error.message);
    })
  }

  GoSignUp(){
    this.SignUp = !this.SignUp;
    this.errors = '';
  }
  GoSignIn(){
    this.SignUp = !this.SignUp;
    this.errors = '';
  }

  signUp(form){
    let Email = form.value.email;
    let Password = form.value.password;
    this.AuthApi.signUpWithEmail(Email,Password).then(()=>{
      console.log("註冊成功");
    }).catch((error)=>{
      console.log(error);
      this.errors = '帳號已存在';
    })
  }

  GoogleLogin(){
    this.AuthApi.signUpWithGoogle();
  }

}
