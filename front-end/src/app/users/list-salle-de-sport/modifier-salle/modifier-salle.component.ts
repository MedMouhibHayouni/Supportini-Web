import { Component, OnInit } from '@angular/core';
import {ToastService} from "../../../shared-service/toastService/toast.service";
import {SalleDeSportService} from "../../../shared-service/salleDeSportService/salle-de-sport.service";
import {sallesport} from "../../../model/salleDeSport";



declare var $: any;
@Component({
  selector: 'app-modifier-salle',
  templateUrl: './modifier-salle.component.html',
  styleUrls: ['./modifier-salle.component.css']
})
export class ModifierSalleComponent implements OnInit {

  constructor(private toastService:ToastService,
              private salleDeSportService:SalleDeSportService) { }
  gym! : sallesport
  id! : string
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
    this.salleDeSportService.getGymById(this.id).subscribe(
      (data) => {this.gym=data.gym;console.log(data)});
    // lightGallery(document.getElementById('lightgallery'))
  }

  // updateGym(){
  //   this.salleDeSportService.putGymUpdate(this.id).subscribe(
  //   )
  // }
}
