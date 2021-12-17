import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let userType=sessionStorage.getItem("user");
      let toRet: boolean=false;
      if(userType!=null){
        toRet=true;
      }
      if(toRet){
        return toRet;
      }
      else{
        this.router.navigate(["error"]);
        return toRet;
      } 
  }
  
}
