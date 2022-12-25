import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-iteam-salle-dashboard',
  templateUrl: './iteam-salle-dashboard.component.html',
  styleUrls: ['./iteam-salle-dashboard.component.css']
})
export class IteamSalleDashboardComponent implements OnInit {

  constructor() { }
@Input() Gyms!:any;
  ngOnInit(): void {
  }

}
