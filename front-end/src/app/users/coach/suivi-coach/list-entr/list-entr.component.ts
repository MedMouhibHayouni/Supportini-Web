import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SuiviServiceService} from "../../../../shared-service/suiviService/suivi-service.service";
import {Suivis} from "../../../../model/Suivis";
import {Router} from "@angular/router";
import {type} from "os";
import {FeedbackService} from "../../../../shared-service/feedbackService/feedback.service";
import {Feedback} from "../../../../model/Feedback";
import {ChartType} from "chart.js";

@Component({
  selector: 'app-list-entr',
  templateUrl: './list-entr.component.html',
  styleUrls: ['./list-entr.component.scss']
})
export class ListEntrComponent implements OnInit {
  firstSuivi!:any;
   suiviss!:any;
  searchEntr !: string
   suivi!:any;
  searchedSuivi!:any
   date!:any;
   noFeedbackSuivi!:any;
  compareDateSuivi !: any;
   timestampSevenDaysAgo!:any
   dateSuivi!:any
  currentDate!:any
   btnVal = "Button";
  feedbackModel!:Feedback;
  listSuiviByEntr :any;
  barChartLabels:any;
  barChartData:any;
  feedbackByIdSuivi!:any;
  feedBackInputModel:any;
  @ViewChild('feedBackInput') feedBackInput!:any;
  //feedBackInput = document.getElementById('feedBackInput') as HTMLInputElement;
  constructor(private suiviService:SuiviServiceService,private router:Router,private feedbackService:FeedbackService) {
    this.timeCurrent(this.dateSuivi);

  }



  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType:ChartType = 'bar';
  public barChartLegend = true;

//   isMoreThan30DaysAgo(date:any) {
//     //                   days  hours min  sec  ms
//     const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
//     const timestampSevenDaysAgo = new Date().getTime() - sevenDaysInMs;
//
//
//
//     if (timestampSevenDaysAgo > date) {
//
//       console.log('date is more than 30 days into the past');
// return true;
//     } else {
//       console.log('date is NOT more than 30 days into the past');
//
//       return false;
//     }
//   }

  SearchByNameEntr (searchEntr:any){
    return this.suiviService.searchByEntrNameForCoach(searchEntr).subscribe(
      (data) =>{this.suiviss=data.newSuivis;console.log(data.newSuivis)});
  }

  addFeedback(idSuivi:any){
    const feedBackText = this.feedBackInput.nativeElement.value;
    console.log(feedBackText)
    const feedbackModele  =  new Feedback();
    feedbackModele.feedback=feedBackText;
    feedbackModele.id_suivi=idSuivi;
    this.feedbackService.createFeedback(idSuivi,feedbackModele).subscribe()
    console.log(feedbackModele);
  }





  showDetails(id:any){
    this.suiviService.getSuiviByIdSuivi(id).subscribe((data) => {
      this.suivi = data.suivis;
      console.log(this.suivi.date_suivi)
        this.feedbackService.getFeedbackByIdSuivi(this.suivi.id).subscribe((data) => {
          this.feedbackByIdSuivi = data.feedbacks.feedback;

          //console.log(this.feedbackByIdSuivi)
        });
        console.log('teeeeeest')
        this.suiviService.getCoachBySuivi(this.suivi.fk_id_coach).subscribe((data)=>{
          console.log(data)
        })
      this.suiviService.getAllSuiviByIdEntr(this.suivi.fk_id_entr).subscribe((dataset) => {
        this.listSuiviByEntr = dataset?.sui;
        let dataofimc= this.listSuiviByEntr.map((a:any)=> a.imc)
        let dataofDateSuivi= this.listSuiviByEntr.map((a:any)=> a.date_suivi)
        this.barChartLabels= dataofDateSuivi
        this.barChartData = [{data: dataofimc, label: 'IMC',
          backgroundColor: ["#ffa117"],
        }
        ];


        //console.log(this.listSuiviByEntr)
      });
    });

  }
  filterDate(e : any){
    switch (e.target.value){

      case "1":{

        this.suiviService.getSuiviByIdCoach().subscribe(
          (data) => {
            this.noFeedbackSuivi = data

            let currentDate = new Date(this.timestampSevenDaysAgo)
            let suiviDate = new Date(this.noFeedbackSuivi.date_suivi);
            for (let s of this.noFeedbackSuivi) {
                if(currentDate<=suiviDate){
                  let suiviFeedbackOn = this.noFeedbackSuivi
                  this.suiviService.setSuivi(suiviFeedbackOn)
                }
            }
          }

        );
      }break;
      case "2": {
        this.suiviService.getSuiviByIdCoach().subscribe(
          (data) => {
            this.noFeedbackSuivi = data
            for (let s of this.noFeedbackSuivi) {
              if(this.timestampSevenDaysAgo>this.noFeedbackSuivi.date_suivi){
                let suiviFeedbackOff = this.noFeedbackSuivi
                this.suiviService.setSuivi(suiviFeedbackOff)
              }
            }
          }

        );
      }}}

  // findGymWithLettre(search : any){
  //   return this.salleDeSportService.getGymWithLettre().subscribe(
  //     (data) =>this.listeGym=data);
  // }
  timeCurrent(dateSuivi:any) {
    this.date = new Date();

    let day = this.date.getDate();
    let month = this.date.getMonth() + 1;
    let year = this.date.getFullYear();
// This arrangement can be altered based on how we want the date's format to appear.
    this.currentDate = `${year}-${month}-${day-5}`;
    let dates = new Date(this.currentDate)
    this.timestampSevenDaysAgo = dates
    let datee = new Date(dateSuivi)
    dateSuivi = datee;
    console.log()

    if (this.timestampSevenDaysAgo >= dateSuivi) {

      return this.btnVal = "Achevé Suivi"
    }else{
      return this.btnVal = "Nouvelle Suivi"
    }


  }

  console(item:any){
     console.log(item);
  }

  ngOnInit(): void {
    this.feedbackService.getAllFeedback().subscribe((data) => {
      this.feedbackModel = data.feedbacks;
      console.log(this.feedbackModel)
    })
    this.suiviService.getSuiviByIdCoach().subscribe((data) => {
      this.suiviss = data.newSuivis;
    });
    this.suiviService.getFirstSuiviByIdCoach().subscribe((dataset) => {
      return this.firstSuivi = dataset.newSuivis;});






  }

}
