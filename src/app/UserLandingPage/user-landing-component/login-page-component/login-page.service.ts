import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRegisterRequest, LoginResponse } from 'src/app/Shared/Models/LoginRegister';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  httpOptions= {headers : new HttpHeaders({ 'Content-Type' : 'application/json'})};
  constructor(private http:HttpClient, private router : Router) { }

  login(loginRegisterRequest:LoginRegisterRequest): Observable<LoginResponse>{
    const url=environment.postLogin;
    return this.http.post<LoginResponse>(url,loginRegisterRequest, this.httpOptions).pipe(map(
      res=>{
        return res;
      }
    ));
  }
}
