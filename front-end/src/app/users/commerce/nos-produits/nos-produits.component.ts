import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {produit} from "../../../model/produit";
import {ProduitserviceService} from "../../../shared-service/ProduitService/produitservice.service";


@Component({
  selector: 'app-nos-produits',
  templateUrl: './nos-produits.component.html',
  styleUrls: ['./nos-produits.component.css']
})

export class NosProduitsComponent implements OnInit {
public listeProduit!: produit[];
  searchProduit !: string
cartProducts: any[]=[]

  constructor(private produitservice:ProduitserviceService) { }


  filterByName(name:any){
    this.produitservice.filterProduitByName(name).subscribe(
      (data)=>this.listeProduit=data
    )
  }
  produit!: produit
  ngOnInit(): void {



this.produitservice.getAllProduct().subscribe(
  (data)=> {
    this.listeProduit = data
    console.log(this.listeProduit)
  }
  )
  }

  filterPrix(e : any){
    switch (e.target.value){
      case "1":{
        this.produitservice.getProdSoetedAsc().subscribe(
          (data) => {this.listeProduit=data; console.log(this.listeProduit)});

      }break;
  case "2":{
      this.produitservice.getSortedProdWithPriceDesc().subscribe(
        (data) => this.listeProduit=data);
      }}}

  AjouterauPanier(event:any){
if ("cart" in localStorage){
  this.cartProducts =JSON.parse(localStorage.getItem("cart")!)
  let exist =this.cartProducts.find(item =>item.item.id==event.item.id)
  if (exist){
    alert ("Product is already exist in your cart ")
  }
  else {
    this.cartProducts.push(event)
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

} else{
  this.cartProducts.push(event)
  localStorage.setItem("cart", JSON.stringify(this.cartProducts))
}

  }
}

