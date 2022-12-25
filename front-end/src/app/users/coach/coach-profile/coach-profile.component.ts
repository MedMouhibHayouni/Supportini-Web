import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {UserService} from "../../../shared-service/userService/user.service";
import {Coach} from "../../../model/Coach";
import {ActivatedRoute} from "@angular/router";
import {LightGallery} from "lightgallery/lightgallery";
import lgZoom from "lightgallery/plugins/zoom";
import {ToastService} from "../../../shared-service/toastService/toast.service";
import {EmailService} from "../../../shared-service/EmailService/email.service";



@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.css']
})
export class CoachProfileComponent implements OnInit {
  user!:User
  coach!:Coach
  id!:any
emaile!:any

usermail!:String
  intro!:String
  constructor(private userService : UserService, private ac:ActivatedRoute, private toastService : ToastService,private emailService:EmailService) {

    this.id  = this.ac.snapshot.params["id"];
  }
  selectedFiles?: FileList;
  previews: string[] = [];
  infoUser:any={}
  size = '1400-933'
  private lightGallery!: LightGallery;
  private needRefresh = false;
  galery!:any[]

  ngOnInit(): void {
    this.userService.coachInfoById(this.id).subscribe(
      (data) => {
        this.coach = data.coachUser;

        this.galery=data.images

      }
    )

    this.user= this.userService.getUser()||JSON.parse(localStorage.getItem("user") || '{}')
   this.usermail = this.user.email
    console.log(this.usermail)

    this.intro='de la part de '+this.usermail
    console.log(this.intro)
    this.emaile=this.intro+" :"

  }
  onInit = (detail: any): void => {
    this.lightGallery = detail.instance;
  };


  settings = {
    counter: false,
    plugins: [lgZoom]
  };


  envoyer(){

    this.emailService.createAnnonce(this.emaile).subscribe({
      next:(result)=>{
        console.log(this.emaile)

      },
      error:(erreur)=>{
        console.log(erreur)
      },
      complete:()=>{
        this.emaile=""
      }

    })
  }



}
