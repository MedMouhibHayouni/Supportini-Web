import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {User} from "../../model/user";
import {UserService} from "../../shared-service/userService/user.service";
import { ChangeDetectorRef, AfterContentChecked} from '@angular/core';
import {AuthService} from "../../shared-service/authService/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  user  :User=new User()


  constructor(private userService:UserService ,private authService : AuthService,private router:Router ) {
    this.userService.selectFromStore((state:any)=>state).subscribe((res)=>{
      this.user=res})
  }


  ngOnInit(): void {
   this.user= this.userService.getUser()||JSON.parse(localStorage.getItem("user") || '{}')
  }
  async logout (){
    await localStorage.clear()
    this.userService.updateStore(null)
    this.authService.sendAuthentified(false)
    this.router.navigate(["/login"])
  }
}
