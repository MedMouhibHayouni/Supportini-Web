import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../shared-service/userService/user.service";
import {SuiviServiceService} from "../../shared-service/suiviService/suivi-service.service";
import {ProduitserviceService} from "../../shared-service/ProduitService/produitservice.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
user!:User
  suiviss!:any;
  listeProduit!:any;
  constructor(private userService: UserService,private suiviService:SuiviServiceService,private produitservice:ProduitserviceService) {

  }


  ngOnInit(): void {
    this.user = this.userService.getUser() || JSON.parse(localStorage.getItem("user") || '{}')

    this.suiviService.getSuiviByIdEntr().subscribe((data) => {
      this.suiviss = data?.suivis;
      });
    this.produitservice.getAllProduct().subscribe(
      (data)=>this.listeProduit=data
    )

  }


    //console.log(this.user)
  // secureDashboard (){
  // this.user= JSON.parse(localStorage.getItem('user')||'{}')
  //   if(this.user){
  //
  //   }
  // }
}
