import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Suivis} from "../../../../model/Suivis";
import {SuiviServiceService} from "../../../../shared-service/suiviService/suivi-service.service";
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {list} from "postcss";
import {FeedbackService} from "../../../../shared-service/feedbackService/feedback.service";
import {FormBuilder} from "@angular/forms";
import {Button} from "primeng/button";
import {Feedback} from "../../../../model/Feedback";
import {ChartType} from "chart.js";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})


export class StatsComponent implements OnInit {


  suiviss!: any;
  listSuiviByEntr!: any;
  feedbackByIdSuivi!: any;
  barChartLabels: any;
  barChartData: any;
  feedbackGeted!:any;
  feedbackDataGeted!:any;
 feedbackData = new Feedback();
 getedCoachData:any;
 coachImage:any;

  @ViewChild('closebutton') closebutton!:any;
  @ViewChild('content') mymodal: ElementRef | undefined;
  @ViewChild('tailleInput') tailleInput!: any ;
  @ViewChild('poidsInput') poidsInput!: any ;
  @ViewChild('closeModalBtn') closeModalBtn:any;

  closeResult = '';
   Suivisss=new Suivis();
   idSuivisss!:any;
  constructor(private suiviService: SuiviServiceService, private feedbackService: FeedbackService,private modalService: NgbModal) {

  }

  open(content:any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }




  ngAfterViewInit(): void {

    }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType:ChartType = 'bar';
  public barChartLegend = true;

  public onSave() {
    this.closebutton.nativeElement.click();
  }
  getFeedback() {
    this.feedbackService.getFeedbackByIdSuivi(this.idSuivisss).subscribe((data) => {
      this.feedbackByIdSuivi = data?.feedbackBySuivi;

      //console.log(id_Suivi)

    });
  }


  ngOnInit(): void {
    /*Suivi By id Connected */


    this.suiviService.getSuiviByIdEntr().subscribe((data) => {
      this.suiviss = data?.suivis;
      this.feedbackService.getOneFeedbackByIdSuivi(this.suiviss.id).subscribe((data) => {
        this.feedbackByIdSuivi = data?.feedbackBySuivi;
        if(this.feedbackByIdSuivi.feedback==''){
        }else{
          this.open(this.mymodal)
        }
        console.log(data)
      });
      console.log(this.suiviss.fk_id_coach)
      this.suiviService.getCoachBySuivi(this.suiviss?.fk_id_coach).subscribe((data)=>{
        this.getedCoachData = data?.coachInUser;
        this.coachImage = this.getedCoachData?.image_name;

        console.log(this?.getedCoachData)
      });
      }
     );



    // this.suiviService.getSuiviAscByEntr().subscribe((dataSuivi) => {
    //   let su
    //   su = dataSuivi.sui;
    //   if(dataSuivi.sui.id == undefined){
    //     console.log('undefined Object');
    //   }else{
    //     console.log('Ok');
    //   }
    //   console.log(typeof su.imc)
    //
    // });

    this.suiviService.getSuiviAscByEntr().subscribe((dataset) => {
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
  }





}
