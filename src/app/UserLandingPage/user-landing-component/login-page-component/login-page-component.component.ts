import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginError, LoginRegisterRequest, LoginResponse } from 'src/app/Shared/Models/LoginRegister';
import { LoginPageService } from './login-page.service';

@Component({
  selector: 'app-login-page-component',
  templateUrl: './login-page-component.component.html',
  styleUrls: ['./login-page-component.component.css']
})
export class LoginPageComponentComponent implements OnInit {

  loginRegisterRequest:LoginRegisterRequest={
    "email":"",
    "password":""
  };
  loginForm: FormGroup;

  constructor( private fb : FormBuilder, private router : Router, private loginPageService:LoginPageService) { }

  ngOnInit(): void {
  }

  tryLogin:boolean=false;
  errorMessage:loginError={"error":""};
  successMessage: string="";
  loginResponse:LoginResponse;
  email:string="";
  password:string="";
  login(){
    this.loginRegisterRequest={
      "email":this.email,
      "password":this.password
    };
    this.loginPageService.login(this.loginRegisterRequest).subscribe(
      res=>{
        if(res!=null){
          this.loginResponse=res;
          sessionStorage.setItem("user", JSON.stringify(this.loginRegisterRequest));
          this.tryLogin=false;
          alert("Logged in Successfully with token "+this.loginResponse.token);
          this.router.navigate[('../home/login')];
        }
      },
      error=>{
        this.errorMessage=error;
        alert(error.error.error);
      }
    )
  }

}
