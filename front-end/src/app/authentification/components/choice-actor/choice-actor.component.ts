import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterEvent} from "@angular/router";
import {UserService} from "../../../shared-service/userService/user.service";
import {User} from "../../../model/user";
import {AuthService} from "../../../shared-service/authService/auth.service";
import {ToastService} from "../../../shared-service/toastService/toast.service";

@Component({
  selector: 'app-choice-actor',
  templateUrl: './choice-actor.component.html',
  styleUrls: ['./choice-actor.component.css']
})
export class ChoiceActorComponent implements OnInit {


  constructor(private ac: ActivatedRoute, private userService: UserService, private router: Router, private authService: AuthService, private toastService: ToastService) {
  }

  user!: User

  ngOnInit(): void {
    this.user = this.userService.getUser() || JSON.parse(localStorage.getItem("user") || '{}')
  }

  register(role: any) {
    this.user.fk_idRole=role
    this.authService.register(this.user).subscribe({
      next: (result: any) => {
        this.toastService.successToast('inscription succes', 'succes')
        localStorage.clear();;

        switch (role) {
          case 2
          : {
            this.userService.addUser(result.newUser)
            this.user=this.userService.getUser()

            localStorage.setItem('user', JSON.stringify(result.newUser))
            this.router.navigateByUrl("/personnel-info")
          }
            break
          case 3: {
            this.userService.addUser(result.newUser)
            this.user=this.userService.getUser()

            localStorage.setItem('user', JSON.stringify(result.newUser))
            this.router.navigateByUrl("/personnel-info")
          }
            break
        default : {
            {

              this.user=this.userService.getUser()
              console.log(this.user)
              localStorage.setItem('user', JSON.stringify(result.newUser))
              this.login()
            }
          }
        }
      },
      error: (err: any) => {
        this.toastService.errorToast('error', 'error')
      },
      complete: () => {
      console.log('complete');
      }
    })
  }

  login() {

    this.authService.login(this.user).subscribe(
      {
        next: (result: any) => {

          localStorage.setItem('token', result.token)
          this.authService.sendAuthentified(true)
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


//   navigate(){
// //do your any operations
//     this.router.navigate(['path']);
// //also you can pass like this,
//     this.router.navigateByURL(['path']);
//   }
}
