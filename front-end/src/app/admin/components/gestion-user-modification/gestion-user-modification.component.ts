import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../model/user";

@Component({
  selector: 'app-gestion-user-modification',
  templateUrl: './gestion-user-modification.component.html',
  styleUrls: ['./gestion-user-modification.component.css']
})
export class GestionUserModificationComponent implements OnInit {

  constructor() { }
@Input()user!:User
  ngOnInit(): void {

  }

  }





