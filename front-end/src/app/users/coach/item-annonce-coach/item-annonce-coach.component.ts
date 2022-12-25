import {Component, Input, OnInit} from '@angular/core';
import {AnnonceService} from "../../../shared-service/AnnonceService/annonce.service";
import {Annonce} from "../../../model/annonce";

@Component({
  selector: 'app-item-annonce',
  templateUrl: './item-annonce-coach.component.html',
  styleUrls: ['./item-annonce-coach.component.css']
})
export class ItemAnnonceCoachComponent implements OnInit {
@Input() annonce:any

  constructor( private serviceAnnonce : AnnonceService) {

  }



oneannonce !: Annonce
  annonceId!:string
  ngOnInit(): void {

  }

}
