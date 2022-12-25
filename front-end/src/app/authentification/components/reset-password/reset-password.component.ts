import { Component, OnInit } from '@angular/core';
import {ParticlesServiceService} from "../../../shared-service/particle-service/particles-service.service";
import {AuthService} from "../../../shared-service/authService/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "../../../shared-service/toastService/toast.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  pwd!:string
  id!:string
  token!:string
  constructor(private particlesService:ParticlesServiceService,private authService:AuthService,private ac:ActivatedRoute,private toastService:ToastService,private route:Router) { }

  ngOnInit(): void {
    this.particlesService.invokeParticles();
    this.id=this.ac.snapshot.params["id"]
    this.token=this.ac.snapshot.params["token"]
  }
  resetNewPassword(){
    this.authService.resetPassword(this.pwd,this.id,this.token).subscribe({
      next:(result)=>{this.toastService.successToast(result.message,result.titre)
      this.route.navigate(["/login"])},
      error:(error)=>{this.toastService.errorToast(error.error.message,error.titre)},
      complete:()=>{}
    })
  }
}
