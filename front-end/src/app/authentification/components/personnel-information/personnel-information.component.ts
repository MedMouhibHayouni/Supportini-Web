import { Component, OnInit } from '@angular/core';
import {ParticlesServiceService} from "../../../shared-service/particle-service/particles-service.service";
import {ToastService} from "../../../shared-service/toastService/toast.service";
import {User} from "../../../model/user";
import {UserService} from "../../../shared-service/userService/user.service";
import {Profil} from "../../../model/profil";
import {AuthService} from "../../../shared-service/authService/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-personnel-information',
  templateUrl: './personnel-information.component.html',
  styleUrls: ['./personnel-information.component.css']
})
export class PersonnelInformationComponent implements OnInit {

  constructor(private router: Router,private particlesService:ParticlesServiceService,private toastService:ToastService,private userService:UserService,private authService:AuthService) { }


  user!:User
  profil !: Profil
  ngOnInit(): void {
    this.profil =new Profil()
    this.particlesService.invokeParticles();
    this.user= this.userService.getUser()||JSON.parse(localStorage.getItem("user") || '{}')
    this.profil.fk_idUser=this.user.id
  }
  addInformation (check:any){

    if(check){

      this.authService.createProfil(this.profil,check).subscribe((res:any)=> {

        this.toastService.successToast('inscription succes', 'succes')
       this.router.navigate(["/login"])
      },
        (error:any)=>{
          console.log(error)
          this.toastService.errorToast('error','error')
        })
    }else {

      this.authService.createProfil(this.profil,check).subscribe((res:any)=> {

        this.toastService.successToast('inscription succes', 'succes')
        this.router.navigate(["/login"])
      },(error:any)=>{
        console.log(error)
        this.toastService.errorToast('error','error')
      })
    }

  }

  onCheckboxChange(e:any){


   this.profil.specialite.push(e.target.value)
  }
  login() {
    console.log(this.user)
    this.authService.login(this.user).subscribe(
      {
        next: (result: any) => {
          console.log(result)
          localStorage.setItem('token', result.token)
          this.toastService.successToast(result.message,'Connexion avec succées')
          this.router.navigate(["/dashboard"])
        },
        error: (err: any) => {
          this.toastService.errorToast(err.error.message, 'Erreur')
        },
        complete: () => {
          console.log('complete');
        }
      })
  }
}
