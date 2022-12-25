import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

import {UserService} from "../../../shared-service/userService/user.service";

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  role ! :number;

  constructor( private route:Router ,private userService:UserService) {

   //this.userService.selectFromStore((state:any)=>state).subscribe((res)=>{this.role=res.fk_idRole})

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   this.role=JSON.parse(localStorage.getItem("user")|| '{}').fk_idRole

    if (localStorage.getItem("token")&&this.role==1) {
      return true;
    } else {
      this.route.navigate(["dashboard"])
      return false;
    }
  }
}
