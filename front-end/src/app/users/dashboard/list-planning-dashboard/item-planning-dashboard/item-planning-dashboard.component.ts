import {Component, Input, OnInit} from '@angular/core';
import {planingService} from "../../../../shared-service/PlaningService/Planing.service";
import {planing} from "../../../../model/planing";
@Component({
  selector: 'app-item-planning-dashboard',
  templateUrl: './item-planning-dashboard.component.html',
  styleUrls: ['./item-planning-dashboard.component.css']
})
export class ItemPlanningDashboardComponent implements OnInit {

  constructor() { }
  @Input() planing!:any;
  ngOnInit(): void {

  }

}
