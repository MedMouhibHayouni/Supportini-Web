import { Component, OnInit } from '@angular/core';

import {AnnonceService} from "../../../shared-service/AnnonceService/annonce.service";
import {User} from "../../../model/user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../shared-service/userService/user.service";
@Component({
  selector: 'app-list-trainer-annonce',
  templateUrl: './list-trainer-annonce.component.html',
  styleUrls: ['./list-trainer-annonce.component.css']
})
export class ListTrainerAnnonceComponent implements OnInit {
  iduser!:Number;
  user ! :User;
  constructor(private userService:UserService,private annonceservice:AnnonceService, private ac:ActivatedRoute)
  {this.id  = this.ac.snapshot.params["id"]; }
 public listUser!:User[]
  id!:string


  ngOnInit(): void {
    this.user= this.userService.getUser()||JSON.parse(localStorage.getItem("user") || '{}')

    this.iduser= this.user.id;

    this.annonceservice.listTrainerByAnnonce(this.id).subscribe(
      (data)=> {this.listUser=data.users}
    )
  }


}
