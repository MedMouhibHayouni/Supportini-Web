import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RegimeService} from "../../../shared-service/RegimeService/regime.service";
import {Regime} from "../../../model/Regime";
@Component({
  selector: 'app-listregime',
  templateUrl: './listregime.component.html',
  styleUrls: ['./listregime.component.css']
})
export class ListregimeComponent implements OnInit {
  id!:string
  listRegime!:Regime[]
  constructor(private ac:ActivatedRoute,private regimeService : RegimeService) {
    this.id  = this.ac.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.regimeService.getRegimeByAnnonce(this.id).subscribe(
      (data)=> {this.listRegime=data.listRegime;
      console.log(this.listRegime)}
    )
  }


}
