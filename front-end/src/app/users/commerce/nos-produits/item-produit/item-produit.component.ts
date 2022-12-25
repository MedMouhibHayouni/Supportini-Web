import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProduitserviceService} from "../../../../shared-service/ProduitService/produitservice.service";
import {produit} from "../../../../model/produit";
import {PanierServiceService} from "../../../../shared-service/PanierService/panier-service.service";
import {ProduitStoreService} from "../../../../shared-service/produit-store.service";
import {ToastService} from "../../../../shared-service/toastService/toast.service";


@Component({
  selector: 'app-item-produit',
  templateUrl: './item-produit.component.html',
  styleUrls: ['./item-produit.component.css']
})
export class ItemProduitComponent implements OnInit {
  @Input() produit: any
  @Input() data: any = {}
  item: any = {}
  panier: any = []
  AjouterauPanierButton: boolean = false;
  amount: number = 0
  Prod!: produit

  constructor(private panierserv: PanierServiceService,
              private produitStore: ProduitStoreService,
              private toastService: ToastService) {
    this.produitStore.selectFromStore((state: any) => state).subscribe((data) => this.panier = data|| JSON.parse(localStorage.getItem("cart")!))

    // this.amount=
  }

  ngOnInit(): void {

  }

  add() {
    this.item = {data: this.data, quantite: this.amount}

    this.panierserv.createPan({quantite: this.item.quantite, prix: this.item.data.prix}, this.item.data.id).subscribe({
      next: (result) => {
        this.panier.push(this.item)
     console.log(   this.panier,this.item,"panier")
        this.produitStore.updateStore(this.panier)
          localStorage.setItem("cart",JSON.stringify(this.panier))
      },
      error: (err) => {
        console.log(err)
      }
    });


  }


}
