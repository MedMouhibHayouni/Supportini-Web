import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../shared-service/userService/user.service";
import {User} from "../../../model/user";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SuiviServiceService} from "../../../shared-service/suiviService/suivi-service.service";
import {FeedbackService} from "../../../shared-service/feedbackService/feedback.service";
import {Suivis} from "../../../model/Suivis";

@Component({
  selector: 'app-suivi-trainer',
  templateUrl: './suivi-trainer.component.html',
  styleUrls: ['./suivi-trainer.component.css'],
})
export class SuiviTrainerComponent implements OnInit {
  user!:any;
  su!:any;
  suivisEntr!: any;
  feedbackByIdSuivi!: any;
  weightCalcul :any;
  heightCalcul :any;
  bmiCalcul :any;
  bmiValue : any;


  constructor(private router: Router,private  act:ActivatedRoute,private userService:UserService,private modalService: NgbModal,private suiviService: SuiviServiceService, private feedbackService: FeedbackService) {

  }

  closeResult = '';

  titleHeaderPage!: string
  route!: string
  titleSecondPage!: string


  open(content:any) {
    this.modalService.open(content, { backdropClass: 'modal-backdrop fade hide' }).result.then(
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

  private getDismissReasonAddSuivi(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addSuivi(){
    const tailleInputs = document.getElementById('tailleInput') as HTMLInputElement | null;
    const poidsInputs = document.getElementById('poidsInput') as HTMLInputElement | null;

    this.suiviService.getSuiviByIdEntr().subscribe((data) => {
      this.su = data.suivis;

    //console.log(tailleInputs?.value)
    const taille = Number(tailleInputs?.value);
    const poids = Number(poidsInputs?.value);
    const formData = new FormData();
    //formData.set('taille' , taille);
    //formData.set('poids' , poids);
    const suiviModele = new Suivis();
    suiviModele.taille = taille;
    suiviModele.poids = poids;
    this.suiviService.addSuivi(this.su.fk_id_coach,suiviModele).subscribe()
    });

  }

  calculateBMI() {
    let height = this.heightCalcul
    let weight = this.weightCalcul
    console.log(height)
      let finalBmi = weight / (height / 100 * height / 100);
    console.log(Math.round(parseFloat(finalBmi.toFixed(2))))
    this.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage();
  }

  // setBMIMessage will set the text message based on the value of BMI
  private setBMIMessage() {
    if (this.bmiValue < 18.5) {
      this.bmiCalcul = "Underweight"
      console.log(this.bmiCalcul)
    }

    if (this.bmiValue > 18.5 && this.bmiValue < 25) {
      this.bmiCalcul = "Normal"
      console.log(this.bmiCalcul)

    }

    if (this.bmiValue > 25 && this.bmiValue < 30) {
      this.bmiCalcul = "Overweight"
      console.log(this.bmiCalcul)

    }

    if (this.bmiValue > 30) {
      this.bmiCalcul = "Obese"
      console.log(this.bmiCalcul)

    }
  }



  ngOnInit(): void {
    this.suiviService.getSuiviByIdEntr().subscribe((data) => {
      this.suivisEntr = data.suivis;
      this.feedbackService.getOneFeedbackByIdSuivi(this.suivisEntr.id).subscribe((dataset) => {
        this.feedbackByIdSuivi = dataset.feedbackBySuivi;

      });
    });

    this.user= this.userService.getUser()||JSON.parse(localStorage.getItem("user") || '{}')
  }
  changeTitleHeader (){
    this.titleHeaderPage=this.act.snapshot.firstChild?.data['header']
    this.route=this.act.snapshot.firstChild?.data['route']
    this.titleSecondPage=this.act.snapshot.firstChild?.data['second']

  }

}
