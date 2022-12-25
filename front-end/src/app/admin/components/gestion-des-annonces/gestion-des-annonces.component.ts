import { Component, OnInit } from '@angular/core';
import {AnnonceService} from "../../../shared-service/AnnonceService/annonce.service";
import {Annonce} from "../../../model/annonce";
import {ToastService} from "../../../shared-service/toastService/toast.service";

@Component({
  selector: 'app-gestion-des-annonces',
  templateUrl: './gestion-des-annonces.component.html',
  styleUrls: ['./gestion-des-annonces.component.css']
})
export class GestionDesAnnoncesComponent implements OnInit {
  public listAnnonces!: Annonce [] ;
id!:any
  annonce!:Annonce
  constructor(private annonceservice:AnnonceService,private toastService : ToastService) { }

  ngOnInit(): void {
    this.annonceservice.getAllAnnonces().subscribe(
        {
          next:(data) => {
            this.listAnnonces=data.annonces;
            console.log(this.listAnnonces)
          },
            error:(err)=>{console.log(err)}
        }

    )
  }

  deleteAnnonce(id:any){

    this.annonceservice.supprimerannonce(id).subscribe()
    this.toastService.successToast("Supprimer avec succès","success")
    this.ngOnInit()
  }


}
