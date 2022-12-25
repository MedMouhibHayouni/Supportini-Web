import {Component, Input, OnInit} from '@angular/core';
import {Regime} from "../../../model/Regime";
@Component({
  selector: 'app-item-regime',
  templateUrl: './item-regime.component.html',
  styleUrls: ['./item-regime.component.css']
})
export class ItemRegimeComponent implements OnInit {
  @Input() regime!:Regime
  constructor() { }

  ngOnInit(): void {
  }

}
