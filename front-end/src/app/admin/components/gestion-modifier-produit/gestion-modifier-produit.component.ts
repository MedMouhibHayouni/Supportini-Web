import { Component, OnInit } from '@angular/core';
import {ToastService} from "../../../shared-service/toastService/toast.service";
import {ProduitserviceService} from "../../../shared-service/ProduitService/produitservice.service";
import {produit} from "../../../model/produit";
declare var $: any;@Component({
  selector: 'app-gestion-modifier-produit',
  templateUrl: './gestion-modifier-produit.component.html',
  styleUrls: ['./gestion-modifier-produit.component.css']
})
export class GestionModifierProduitComponent implements OnInit {
  produit!: produit
  constructor(private toastService: ToastService,
              private produitservice :ProduitserviceService) {
  }


  ngOnInit(): void {
    $(() => {
      $('.dropify').dropify({
        tpl: {
          wrap: '<div class="dropify-wrapper"></div>',
          loader: '<div class="dropify-loader"></div>',
          message: '<div class="dropify-message"><span class="file-icon" /> <p>Ajouter des photos pour votre salle de sport</p></div>',
          preview: '<div class="dropify-preview"><span class="dropify-render"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-infos-message">Ajouter une autre photo</p></div></div></div>',
          filename: '<p class="dropify-filename"><span class="file-icon"></span> <span class="dropify-filename-inner"></span></p>',
          clearButton: '<button type="button" class="dropify-clear">Supprimer</button>',
          errorLine: '<p class="dropify-error">Ooops, quelque chose qui cloche.</p>',
          errorsContainer: '<div class="dropify-errors-container"><ul></ul></div>'
        }
      })
    })
  }
  showSuccess() {
    this.toastService.successToast('Modification de produit avec succèss!', 'succes!')
  }
  updateProduct(){
    this.produitservice.createProduct(this.produit).subscribe();
    console.log(this.produitservice)
  }
}
