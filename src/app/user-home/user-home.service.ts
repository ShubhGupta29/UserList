import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRegisterRequest, LoginResponse } from 'src/app/Shared/Models/LoginRegister';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { List, Single } from '../Shared/Models/HomeModel';

@Injectable({
  providedIn: 'root'
})
export class UserHomeService {
  httpOptions= {headers : new HttpHeaders({ 'Content-Type' : 'application/json'})};
  constructor(private http:HttpClient, private router : Router) { }

  getListUsers(num:number): Observable<List>{
    const url=environment.getListUsers+num;
    return this.http.get<List>(url, this.httpOptions).pipe(map(
      res=>{
        return res;
      }
    ));
  }

  getSingleUser(num:number): Observable<Single>{
    const url=environment.getSingleUser+num;
    return this.http.get<Single>(url, this.httpOptions).pipe(map(
      res=>{
        return res;
      }
    ));
  }
}
