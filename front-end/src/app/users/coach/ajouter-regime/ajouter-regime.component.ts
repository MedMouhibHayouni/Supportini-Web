import { Component, OnInit } from '@angular/core';
import {Regime} from "../../../model/Regime";
import {ActivatedRoute} from "@angular/router";
import {RegimeService} from "../../../shared-service/RegimeService/regime.service";
import {ToastService} from "../../../shared-service/toastService/toast.service";
@Component({
  selector: 'app-ajouter-regime',
  templateUrl: './ajouter-regime.component.html',
  styleUrls: ['./ajouter-regime.component.css']
})
export class AjouterRegimeComponent implements OnInit {
type!:string
regime!:Regime
  id!:any
  constructor(private ac:ActivatedRoute, private regimeService :RegimeService,private toastService: ToastService) {
    this.id  = this.ac.snapshot.params["id"]
  }

  ngOnInit(): void {
this.regime=new Regime()

    }
    choixRegime(a:any){
      switch (a.target.value){
        case "vegan":{
          this.regime.type="vegan"
        }break;
        case "vegetarien":{
          this.regime.type="vegetarien"
        }break;
        case "Omnivore":{
          this.regime.type="Omnivore"
        }break;

      }
console.log(this.regime.type)
    }

  ajouterRegime() {
    this.regimeService.createRegime(this.regime, this.id).subscribe({
      next:(result)=>{
        this.toastService.successToast("Ajout avec succès","success")
      },
      error:(erreur)=>{
        console.log(erreur)
      }
    })
  }
}
