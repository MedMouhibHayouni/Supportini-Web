import { Component, OnInit } from '@angular/core';
import {sallesport} from "../../model/salleDeSport";
import {User} from "../../model/user";
import {SalleDeSportService} from "../../shared-service/salleDeSportService/salle-de-sport.service";
import {UserService} from "../../shared-service/userService/user.service";
// import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from "@techiediaries/ngx-qrcode";

import {Subscription} from "rxjs";





@Component({
  selector: 'app-list-salle-de-sport',
  templateUrl: './list-salle-de-sport.component.html',
  styleUrls: ['./list-salle-de-sport.component.css']
})
export class ListSalleDeSportComponent implements OnInit {
  id!:any;
   searchGym !: string
  listeGym! : sallesport[]
   user! : User;
  imageVitrine! : any
   private subscriptionUser : Subscription
  constructor(private salleDeSportService:SalleDeSportService ,private userService :UserService) {
    this.subscriptionUser=this.userService.selectFromStore((state:any)=>state).subscribe((res)=>{this.user=res})

    console.log(this. user)

  }

  ngOnInit(): void {
      this.user =new User()


    this.user= JSON.parse(localStorage.getItem('user')||'{}')

    this.salleDeSportService.getAllGym().subscribe(
      (data) => {this.listeGym=data.gyms;}
    );

  }

  filterPrix(e : any){
 switch (e.target.value){
   case "1":{
    this.salleDeSportService.getGymSoetedAsc().subscribe(
      (data) => this.listeGym=data);
   }break;
   case "2":{
     this.salleDeSportService.getGymSoetedDesc().subscribe(
       (data) => {this.listeGym=data; console.log(this.listeGym)});
   }}}

  findGymWithLettre(searchGym : any){
   return this.salleDeSportService.getGymWithLettre(searchGym).subscribe(
      (data) =>{this.listeGym=data;console.log(data)});
  }





}




