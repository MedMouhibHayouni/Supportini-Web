import { Component, OnInit } from '@angular/core';
import {ParticlesServiceService} from "../../../shared-service/particle-service/particles-service.service";
import {AuthService} from "../../../shared-service/authService/auth.service";
import {ToastService} from "../../../shared-service/toastService/toast.service";
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  emailUser!:string
  constructor(private particlesService:ParticlesServiceService,private authService:AuthService, private toastService:ToastService) {

  }

  ngOnInit(): void {
    this.particlesService.invokeParticles();
  }
  sendLinkReset(){
   this.authService.sendLink(this.emailUser).subscribe({
     next:(result:any)=>{this.toastService.successToast(result.message,result.titre)},
     error:(error:any)=>{this.toastService.errorToast(error.error.message,error.titre)},
     complete:()=>{}
   })
  }
}
