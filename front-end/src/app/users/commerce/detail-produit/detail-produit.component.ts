import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {produit} from "../../../model/produit";
import {ProduitserviceService} from "../../../shared-service/ProduitService/produitservice.service";
import {UserService} from "../../../shared-service/userService/user.service";

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  imageProd : any
  selectedFile!: File
   pro!: produit;
  idProduit!:string
  constructor(private prodser :ProduitserviceService,private  ac:ActivatedRoute,private userService: UserService) {
     this.idProduit  = this.ac.snapshot.params["id"];

  }

  ngOnInit(): void {

    this.prodser.getOneProduct(this.idProduit).subscribe(
      (data) => {this.pro=data;
        console.log(this.pro)})
    this.prodser.getImagesProduits(this.idProduit).subscribe(
      (data) => {this.imageProd = data.images}
    )

  }
  onFileChanged(e:any){
    this.selectedFile=e.target.files[0]

  }

  onUpload() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();

    uploadData.append('image_name', this.selectedFile, this.selectedFile.name);

    this.userService.onUpload(uploadData).subscribe({
      next:(result)=>{console.log(result)},
      error:(err)=>{console.log(err)},
      complete:()=>{}
    })
  }




}

