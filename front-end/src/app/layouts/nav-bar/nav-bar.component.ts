import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../shared-service/userService/user.service";
import {User} from "../../model/user";
import {Emitters} from "../../emitter/EmitterAuth";
import {AuthService} from "../../shared-service/authService/auth.service";
import {lignePanier} from "../../model/lignePanier";
import {ProduitStoreService} from "../../shared-service/produit-store.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
@Input()authentified!:boolean
  user ! :User;
  panier:any=[]
  constructor(private router:Router,private userService:UserService , private authService:AuthService ,private ps:ProduitStoreService) {
    this.ps.selectFromStore((state:any)=>state).subscribe((data)=>this.panier=data)

  }

  ngOnInit(): void {
   this.panier=JSON.parse(localStorage.getItem("cart")!)
    this.user= this.userService.getUser()||JSON.parse(localStorage.getItem("user") || '{}')
  }

  async logout (){
    await localStorage.clear()
    //this.userService.updateStore(null)
    this.authService.sendAuthentified(false)
    this.router.navigate(["/login"])
  }

}


