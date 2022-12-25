import {Component, Input, OnInit} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-gestion-salle-de-sport-modification',
  templateUrl: './gestion-salle-de-sport-modification.component.html',
  styleUrls: ['./gestion-salle-de-sport-modification.component.css']
})
export class GestionSalleDeSportModificationComponent implements OnInit {
  @Input()gyms!:any
  constructor() { }
  id!:any;
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
  }

}
