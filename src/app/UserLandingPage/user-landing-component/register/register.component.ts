import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterRequest, RegisterResponse } from 'src/app/Shared/Models/LoginRegister';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginRegisterRequest: LoginRegisterRequest = {
    "email": "",
    "password": ""
  };
  email: string = "";
  password: string = "";
  registerRespone:RegisterResponse;
  

  constructor(private registerService: RegisterService,private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.loginRegisterRequest = {
      "email": this.email,
      "password": this.password
    }
    this.registerService.register(this.loginRegisterRequest).subscribe(
      res=>{
        console.log("res",res);
        if(res!=null){
          this.registerRespone=res;
          alert("Logged in Successfully with token "+this.registerRespone.token+ " with id "+this.registerRespone.id);
          this.router.navigate[('/webapp/login')];
        }
      },
      error=>{
        alert(error.error.error);
      }
    )
  }

}
