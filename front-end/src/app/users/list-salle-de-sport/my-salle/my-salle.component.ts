import { Component, OnInit } from '@angular/core';
import {sallesport} from "../../../model/salleDeSport";
import {SalleDeSportService} from "../../../shared-service/salleDeSportService/salle-de-sport.service";
import {ToastService} from "../../../shared-service/toastService/toast.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-my-salle',
  templateUrl: './my-salle.component.html',
  styleUrls: ['./my-salle.component.css']
})
export class MySalleComponent implements OnInit {
  id!:any;
  searchGym !: string
  listeGym! : sallesport[]
  constructor(private salleDeSportService:SalleDeSportService,
              private toastService:ToastService,
              private router: Router) { }

  ngOnInit(): void {
    this.salleDeSportService.getMyGym().subscribe(
      (data) => {this.listeGym=data.mygym; console.log(this.listeGym)}
    );
  }


  deleteGym(id:any){
    this.salleDeSportService.deleteSalle(id).subscribe(
      {
      next:(result)=>{this.toastService.successToast(result.message,result.titre)},
      error:(err)=>{this.toastService.successToast(err.error.message,"Erreur")},
      complete:()=>{this.router.navigate([""])}
      })
    this.ngOnInit()
}




  filterPrix(e : any){
    switch (e.target.value){
      case "1":{
        this.salleDeSportService.getGymSoetedAsc().subscribe(
          (data) => this.listeGym=data);
      }break;
      case "2":{
        this.salleDeSportService.getGymSoetedDesc().subscribe(
          (data) => {this.listeGym=data; console.log(this.listeGym)});
      }}}

  findGymWithLettre(searchGym : any){
    return this.salleDeSportService.getGymWithLettre(searchGym).subscribe(
      (data) =>{this.listeGym=data;console.log(data)});
  }
}
