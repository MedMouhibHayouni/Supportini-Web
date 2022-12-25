import { Component, OnInit } from '@angular/core';
import {SalleDeSportService} from "../../../shared-service/salleDeSportService/salle-de-sport.service";
import {UserService} from "../../../shared-service/userService/user.service";
import {sallesport} from "../../../model/salleDeSport";

@Component({
  selector: 'app-gestion-salle-de-sport',
  templateUrl: './gestion-salle-de-sport.component.html',
  styleUrls: ['./gestion-salle-de-sport.component.css']
})
export class GestionSalleDeSportComponent implements OnInit {
  listeGym! : sallesport[]

  constructor(private salleDeSportService:SalleDeSportService ,private userService :UserService) { }




  ngOnInit(): void {
    this.salleDeSportService.getAllGym().subscribe(
      (data) => {this.listeGym=data.gyms;console.log(this.listeGym)}

    );
  }

}
