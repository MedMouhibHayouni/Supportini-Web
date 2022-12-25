import {Component, Input, OnInit} from '@angular/core';
import {AnnonceService} from "../../../../shared-service/AnnonceService/annonce.service";
import {User} from "../../../../model/user";
@Component({
  selector: 'app-item-trainer',
  templateUrl: './item-trainer.component.html',
  styleUrls: ['./item-trainer.component.css']
})
export class ItemTrainerComponent implements OnInit {
  @Input() user:any
  constructor() { }

  ngOnInit(): void {
  }

}
