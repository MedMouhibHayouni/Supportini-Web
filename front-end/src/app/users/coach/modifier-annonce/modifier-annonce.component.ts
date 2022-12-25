import { Component, OnInit } from '@angular/core';
import {AnnonceService} from "../../../shared-service/AnnonceService/annonce.service";
import {Annonce} from "../../../model/annonce";
import {ActivatedRoute} from "@angular/router";
import {ToastService} from "../../../shared-service/toastService/toast.service";
declare var $: any;
@Component({
  selector: 'app-modifier-annonce',
  templateUrl: './modifier-annonce.component.html',
  styleUrls: ['./modifier-annonce.component.css']
})
export class ModifierAnnonceComponent implements OnInit {
  oneannonce !: Annonce
  id!:string
  constructor(private serviceAnnonce : AnnonceService, private ac:ActivatedRoute,private toastService: ToastService) {
    this.id  = this.ac.snapshot.params["id"];
  }

  ngOnInit(): void {
    $(()=>{
      $('.dropify').dropify({  tpl: {
          wrap:            '<div class="dropify-wrapper"></div>',
          loader:          '<div class="dropify-loader"></div>',
          message:         '<div class="dropify-message"><span class="file-icon" /> <p>Ajouter des photos pour votre salle de sport</p></div>',
          preview:         '<div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-infos-message">Ajouter une autre photo</p></div></div></div>',
          filename:        '<p class="dropify-filename"><span class="file-icon"></span> <span class="dropify-filename-inner"></span></p>',
          clearButton:     '<button type="button" class="dropify-clear">Supprimer</button>',
          errorLine:       '<p class="dropify-error">Ooops, quelque chose qui cloche.</p>',
          errorsContainer: '<div class="dropify-errors-container"><ul></ul></div>'
        }})
    })

    this.serviceAnnonce.getAnnonceById( this.id).subscribe(
      (data)=> {this.oneannonce=data.annonceData;

      }
    )
  }

  updateAnnonce()
  {

    this.serviceAnnonce.modifierannonce(this.id,this.oneannonce).subscribe(
      (data)=> {this.oneannonce=data.updated;
        this.toastService.successToast("Modification avec succès","success")}
    )
  }
}
