import { Component, OnInit } from '@angular/core';
import {ParticlesServiceService} from "../../../shared-service/particle-service/particles-service.service";
import {ToastrService} from "ngx-toastr";
import {ToastService} from "../../../shared-service/toastService/toast.service";
import {User} from "../../../model/user";
import {UserService} from "../../../shared-service/userService/user.service";
import {Router} from "@angular/router";
import {stringify} from "postcss";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


user!:User
  constructor(private particlesService:ParticlesServiceService, private toastService:ToastService ,private userService:UserService ,private router: Router) {

  }

  ngOnInit(): void {
  this.user=new User()
    this.particlesService.invokeParticles();
  }


  showSuccess() {
    this.toastService.successToast('Inscription avec succées!','succes!')
  }


  validatorConfirmPassword ():boolean{

    return this.user.password==this.user.cPassword ? true : false

  }
  register(){
  this.userService.addUser(this.user)
    localStorage.setItem("user",JSON.stringify(this.user))
    this.router.navigateByUrl('/choice-profil')
  }
}
