import {Component, OnInit} from '@angular/core';
import {planing} from "../../../model/planing";
import {Annonce} from "../../../model/annonce";
import {planingService} from "../../../shared-service/PlaningService/Planing.service";
import {UserService} from "../../../shared-service/userService/user.service";
import {User} from "../../../model/user";

@Component({
  selector: 'app-list-planning-dashboard',
  templateUrl: './list-planning-dashboard.component.html',
  styleUrls: ['./list-planning-dashboard.component.css']
})
export class ListPlanningDashboardComponent implements OnInit {
  public listplaning!: planing [];
  empty!:boolean
  user! :User
  constructor(private planingServ: planingService,private userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this.userService.getUser() || JSON.parse(localStorage.getItem("user") || '{}')
    console.log(this.user)


if(this.user.fk_idRole==3){
  this.planingServ.getTenPlaningOfCoach(this.user.id).subscribe(
    {
      next: (data) => {
        this.listplaning = data.TenDaysPlaning
        console.log( this.listplaning)
        this.empty=data.empty

      },
      error: (err) => {
        this.empty=err.empty
        console.log(this.empty)
      },
      complete: () => {
      }
    }
  )
}


    if(this.user.fk_idRole==2){
      this.planingServ.getTenPLaninOfTrainer(this.user.id).subscribe(
        {
          next: (data) => {
            this.listplaning = data.TenDaysPlaning
            this.empty=data.empty

          },
          error: (err) => {
            this.empty=err.empty
            console.log(this.empty)
          },
          complete: () => {
          }
        }
      )
    }

  }

}
