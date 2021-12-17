import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRegisterRequest, LoginResponse, RegisterResponse } from 'src/app/Shared/Models/LoginRegister';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  httpOptions= {headers : new HttpHeaders({ 'Content-Type' : 'application/json'})};
  constructor(private http:HttpClient, private router : Router) { }

  register(loginRegisterRequest:LoginRegisterRequest): Observable<RegisterResponse>{
    const url=environment.postRegister;
    return this.http.post<RegisterResponse>(url,loginRegisterRequest, this.httpOptions).pipe(map(
      res=>{
        return res;
      }
    ));
  }
}
