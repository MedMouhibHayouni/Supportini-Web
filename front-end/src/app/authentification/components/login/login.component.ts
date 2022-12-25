import { Component, OnInit } from '@angular/core';
import {ParticlesServiceService} from "../../../shared-service/particle-service/particles-service.service";
import {User} from "../../../model/user";
import {AuthService} from "../../../shared-service/authService/auth.service";
import {ToastService} from "../../../shared-service/toastService/toast.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: User;
  adminAdresse:string='admin@admin.com'
  constructor(private particlesService: ParticlesServiceService, private authService: AuthService, private toastService: ToastService, private router: Router) {

  }

  ngOnInit(): void {
    this.user = new User()
    this.particlesService.invokeParticles();
  }

  login() {
    if(this.user.email==='admin@admin.com'){
      return this.toastService.errorToast("Adresse email ou mot de passe invalide", 'Erreur')
    }
    this.authService.login(this.user).subscribe(
      {
        next: (result: any) => {
          localStorage.setItem('token', result.token)
          this.authService.sendAuthentified(true)
          this.toastService.successToast(result.message,'Connexion avec succées')
          this.router.navigate(["dashboard"])
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
