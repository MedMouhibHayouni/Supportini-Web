import {Component, OnInit} from '@angular/core';
import {lignePanier} from "../../model/lignePanier";
import {panier} from "../../model/Panier";
import {PanierServiceService} from "../../shared-service/PanierService/panier-service.service";
import {produit} from "../../model/produit";
import {ProduitStoreService} from "../../shared-service/produit-store.service";
import {ToastService} from "../../shared-service/toastService/toast.service";

@Component({

  selector: 'app-Panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']


})
export class PanierComponent implements OnInit {
Panier!:panier
  panier!: panier[]
  produit!: produit
  Total: any = 0

  constructor(private PanierService: PanierServiceService, private produitStore: ProduitStoreService, private toastService: ToastService) {
    this.produitStore.selectFromStore((state: any) => state).subscribe((data) => {
      this.cartProducts = data
      this.getCartTotal()
    })

  }

  cartProducts: any[] = []

  ngOnInit(): void {

    this.cartProducts = JSON.parse(localStorage.getItem("cart")!)


    this.getCartProducts()
  }

  detectedChange(check:boolean,index:number) {
let newQte =0

    if(check){

      newQte=this.cartProducts[index].quantite++
      this.PanierService.updatequantite(this.cartProducts[index].data.id,newQte).subscribe({
        next:(res)=>{ localStorage.setItem("cart", JSON.stringify(this.cartProducts))
        this.Total=this.Total+this.cartProducts[index].data.prix},
        error:(err)=>{console.log(err)},
        complete:()=>{}
      })
    }else {
      newQte=this.cartProducts[index].quantite--
      this.PanierService.updatequantite(this.cartProducts[index].data.id,newQte).subscribe({
        next:(res)=>{ localStorage.setItem("cart", JSON.stringify(this.cartProducts))
          this.Total=this.Total-this.cartProducts[index].data.prix},
        error:(err)=>{console.log(err)},
        complete:()=>{}
      })
    }
  }

  getCartProducts() {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    }
    this.getCartTotal()
  }

  getCartTotal() {

    for (let x in this.cartProducts) {
      this.Total += this.cartProducts[x].data.prix * this.cartProducts[x].quantite;
    }

  }








  delete(idLP: Number,index:number) {
    this.PanierService.deletePan(idLP).subscribe({
      next: (result) => {

        this.toastService.successToast("Produit supprimé", "Suppression ")
        this.produitStore.updateStore(this.cartProducts)
        this.cartProducts.splice(index, 1)
       this.Total=0
        this.getCartTotal()
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      },
      //   console.log(this.cartProducts)
      //   localStorage.removeItem("cart")
      //   localStorage.setItem("cart",JSON.stringify(this.cartProducts))
      // },
      error: (err) => {
        console.log(err)
        this.toastService.errorToast(err.error.message, "Erreur")
      },
      complete: () => {

      }

    });



  }
  showSuccess() {
    this.toastService.successToast('Votre commande a été enregistrée avec succées!', 'succes!')
  }
}
