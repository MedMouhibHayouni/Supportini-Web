import {Component, OnInit} from '@angular/core';
import {ParticlesServiceService} from "../../../shared-service/particle-service/particles-service.service";
import {AuthService} from "../../../shared-service/authService/auth.service";
import {ToastService} from "../../../shared-service/toastService/toast.service";
import {Router} from "@angular/router";
import {User} from "../../../model/user";
import {UserService} from "../../../shared-service/userService/user.service";


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
 user!:User

  constructor(private particlesService: ParticlesServiceService,private authService: AuthService, private toastService: ToastService, private router: Router,
  private userService:UserService) {
  }

  ngOnInit(): void {
this.user=new User()
    this.particlesService.invokeParticles();
  }

  login() {
    this.authService.login(this.user).subscribe(
      {
        next: (result: any) => {

          localStorage.setItem('token', result.token)
          this.userService.updateUser(result)
          this.authService.sendAuthentified(true)
          this.toastService.successToast(result.message,'Connexion avec succées')

        },
        error: (err: any) => {
          this.toastService.errorToast(err.error.message, 'Erreur')
        },
        complete: () => {
          this.router.navigate(["/admin/gestion-user"]);
        }
      })
  }
}
