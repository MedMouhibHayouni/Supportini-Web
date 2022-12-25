import { Component, OnInit } from '@angular/core';
import {AnnonceService} from "../../../shared-service/AnnonceService/annonce.service";
import {Annonce} from "../../../model/annonce";

@Component({
  selector: 'app-mes-annonce',
  templateUrl: './mes-annonce.component.html',
  styleUrls: ['./mes-annonce.component.css']
})
export class MesAnnonceComponent implements OnInit {
  public listAnnonces!: Annonce [] ;
  constructor(private annonceservice:AnnonceService) { }

  ngOnInit(): void {
    this.annonceservice.getAnnonceByCoach().subscribe(
      {
      next:(data) => {
        console.log(data,"my")
        this.listAnnonces = data.mesCoaching
      },
      error:(err)=>{console.log(err)}
  }
    )

  }

}
