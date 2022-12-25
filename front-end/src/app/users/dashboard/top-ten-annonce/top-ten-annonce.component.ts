import {Component, Input, OnInit} from '@angular/core';
import {Annonce} from "../../../model/annonce";
import {AnnonceService} from "../../../shared-service/AnnonceService/annonce.service";
import {User} from "../../../model/user";

@Component({
  selector: 'app-top-ten-annonce',
  templateUrl: './top-ten-annonce.component.html',
  styleUrls: ['./top-ten-annonce.component.css']
})
export class TopTenAnnonceComponent implements OnInit {
  @Input()user!:User
   listAnnonces!: Annonce [] ;
  annonce!:Annonce
  constructor(private annonceservice:AnnonceService) { }

  ngOnInit(): void {
    console.log(this.user,"coa")

    this.annonceservice.topSix().subscribe(
      {next:(data) =>
    {
      this.listAnnonces = data.tenAnnonce

    },
        error:(err)=>{}
  },

    ) ;
    console.log(this.listAnnonces)

  }



}
