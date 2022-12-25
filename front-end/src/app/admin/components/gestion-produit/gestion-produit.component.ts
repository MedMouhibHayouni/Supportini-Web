import { Component, OnInit } from '@angular/core';
import {produit} from "../../../model/produit";
import {ProduitserviceService} from "../../../shared-service/ProduitService/produitservice.service";
import {ToastService} from "../../../shared-service/toastService/toast.service";
import {identity} from "rxjs";

@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrls: ['./gestion-produit.component.css']
})
export class GestionProduitComponent implements OnInit {
  Produits!: produit[]
  produit!: produit
  id: any

  constructor(private PC: ProduitserviceService,
              private toastService: ToastService,
              private produitservice: ProduitserviceService,
              private prodcatserv: ProduitserviceService) {
  }


  ngOnInit(): void {
    this.PC.getAllProduct().subscribe(
      (data) => this.Produits = data)
    this.getAllProduct()
  }

  getAllProduct() {
    this.produitservice.getAllProduct().subscribe(
      {
        next: (result: any) => {
          this.Produits = result

        },
        error: (err: any) => {
        },
        complete: () => {
          this.getEditProduit(this.Produits[0])
        }
      }
    )
  }




  deleteProduct(id:Number){
    this.PC.deleteProduct(id).subscribe({
      next:(result)=>{this.toastService.successToast("Produit supprimé","Suppression ")},
      error:(err)=>{this.toastService.errorToast(err.error.message,"Erreur")},
      complete:()=>{this.ngOnInit()}
    } );

  }
  getEditProduit (produit:produit){

    this.produit=produit
  }

  updateProduct (id:Number){
    return this.prodcatserv.update(id,this.produit).subscribe({
      next: ( result:any)=>{this.toastService.successToast(result.message,result.titre)},
      error: (err:any)=>{this.toastService.errorToast(err.error.message,"Erreur")},
      complete:()=>{this.ngOnInit()}
    })
  }
}
