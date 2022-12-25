import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {config} from "rxjs";
import {planing} from "../../model/planing";
@Injectable({
  providedIn: 'root'
})
export class planingService {

  constructor(private httpClient: HttpClient ) { }
  getAllPlaningUrl: string = "http://localhost:8080/planing/affichePlaning"
  getTenPLaninOfTrainerUrl : string = "http://localhost:8080/planing/getsevenDayOfTrainer"
  getTenPLaninOfCoachUrl : string = "http://localhost:8080/planing/getsevenDayOfCoach"

  getAllplaning(){
    return this.httpClient.get<any>(this.getAllPlaningUrl)
  }
  getTenPLaninOfTrainer(id:any){
    return this.httpClient.get<any>(this.getTenPLaninOfTrainerUrl)
  }

getTenPlaningOfCoach(id:any){
  return this.httpClient.get<any>(this.getTenPLaninOfCoachUrl)
}

}
