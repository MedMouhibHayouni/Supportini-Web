import {Component, OnInit} from '@angular/core';
import {SuiviServiceService} from "../../../../shared-service/suiviService/suivi-service.service";
import {Suivis} from "../../../../model/Suivis";
import {ActivatedRoute, Router} from "@angular/router";
import {NavigationExtras} from "@angular/router";
import {FeedbackService} from "../../../../shared-service/feedbackService/feedback.service";
import {UserService} from "../../../../shared-service/userService/user.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  suiviss!:Suivis;
  id!: any;
  listSuiviAsc!: Suivis[];
  listSuiviSuivi!: Suivis[];
  responsiveOptions!: any;
  feedbackByIdSuivi!:any;
  user !:any;

  constructor(private suiviService: SuiviServiceService,private feedbackService : FeedbackService, public actRoute: ActivatedRoute, public router: Router,private userService : UserService) {
    this.id = this.actRoute.snapshot.params['id']
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  loadIdData(id:any) {
    this.suiviService.getSuiviByIdSuivi(id).subscribe(
      (data: any) => {
        this.suiviss = data.suivis
        this.feedbackService.getFeedbackByIdSuivi(this.suiviss.id).subscribe((data) => {

          this.feedbackByIdSuivi = data.feedbacks.feedback;
          this.user = this.userService.getUser() || JSON.parse(localStorage.getItem("user") || '{}')


          //console.log(this.feedbackByIdSuivi)
          });
      }
    );

  }

  ngOnInit(): void {
    console.log("yoooooooooo")
    this.suiviService.getSuiviAscByEntr().subscribe((data) => {
      this.listSuiviAsc = data?.sui;
      this.suiviss=data?.suivis
      //this.suiviService.setSuivi(data.suivis[0])
    });


  }
}
