import { Component, OnInit } from '@angular/core';
import {categorie} from "../../../model/categorie";
import {ToastService} from "../../../shared-service/toastService/toast.service";
import {ProduitserviceService} from "../../../shared-service/ProduitService/produitservice.service";

@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.css']
})
export class AjoutCategorieComponent implements OnInit {
  categorie!:categorie
  constructor(private toastService:ToastService ,private produitservice:ProduitserviceService) { }

  ngOnInit(): void {
  }
  createcategorie(){
    this.produitservice.createCategorie(this.categorie).subscribe();

  }

showSuccess() {
  this.toastService.successToast('Ajout de categorie avec succèss!', 'succes!')
}
}
