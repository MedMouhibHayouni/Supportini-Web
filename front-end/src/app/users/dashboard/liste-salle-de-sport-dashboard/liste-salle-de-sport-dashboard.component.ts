import { Component, OnInit } from '@angular/core';
import {SalleDeSportService} from "../../../shared-service/salleDeSportService/salle-de-sport.service";
import {sallesport} from "../../../model/salleDeSport";

@Component({
  selector: 'app-liste-salle-de-sport-dashboard',
  templateUrl: './liste-salle-de-sport-dashboard.component.html',
  styleUrls: ['./liste-salle-de-sport-dashboard.component.css']
})
export class ListeSalleDeSportDashboardComponent implements OnInit {
  responsiveOptions;
  empty!:boolean
  public listGyms! :sallesport[];
  constructor(private  salleDeSportService:SalleDeSportService) {
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
  ngOnInit() {
    this.salleDeSportService.getLastFiveGym().subscribe(
      {
        next:(result)=>{this.listGyms=result.fiveGyms;
          console.log(this.listGyms)
          this.empty=result.empty
        },
        error:(err)=>{this.empty=err.empty
        },
        complete:()=>{}
      }
    )

  }
}
