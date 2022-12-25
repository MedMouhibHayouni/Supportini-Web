import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Suivis} from "../../model/Suivis";
import {map, Observable} from "rxjs";
import {Data} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SuiviServiceService {
  suivissss!:Suivis;
  showByIdEntr: string = 'http://localhost:8080/suivi/afficheOneByEntr'
  showAllSuivi: string = 'http://localhost:8080/suivi/afficheAsc'
  showAllSuiviByEntr:string='http://localhost:8080/suivi/afficheByEntr'
  showAllSuiviByIdEntr:string='http://localhost:8080/suivi/afficheByIdEntr'
  showSuiviByIdSuivi:string ='http://localhost:8080/suivi/afficheById'
  showSuiviByIdCoach:string ='http://localhost:8080/suivi/afficheByCoach'
  showFirstSuiviByIdCoach:string='http://localhost:8080/suivi/afficheFirstSuivi'
  showCoachBySuivi:string='http://localhost:8080/suivi/afficheUserBySuivi'
  showSuiviByLettreForCoach:string='http://localhost:8080/suivi/findSuiviByNameEntr?nom='
  addSuiviUri                 :string = 'http://localhost:8080/suivi/create'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getSuiviByIdEntr() {
    return this.http.get<any>(this.showByIdEntr);
  }
  getAllSuiviByIdEntr(idEntr:any){
    return this.http.get<any>(this.showAllSuiviByIdEntr+'/'+idEntr);
  }

  getSuiviAscendant(){
    return this.http.get<any>(this.showAllSuivi);
  }
  getSuiviAscByEntr(){
    return this.http.get<any>(this.showAllSuiviByEntr);
  }

  getSuiviByIdSuivi(id:any){
    return this.http.get<any>(this.showSuiviByIdSuivi+"/"+id)
  }
  getSuiviByIdCoach(){
    return this.http.get<any>(this.showSuiviByIdCoach);
  }
  getFirstSuiviByIdCoach(){
    return this.http.get<any>(this.showFirstSuiviByIdCoach);
  }

  getCoachBySuivi(idCoach:any){
    return this.http.get<any>(this.showCoachBySuivi+'/'+idCoach);

  }

  searchByEntrNameForCoach(nameEntr:any){
    return this.http.get<any>(this.showSuiviByLettreForCoach+nameEntr);
  }

  addSuivi(idCoach:any,suivi:Suivis){
    return this.http.post<any>(this.addSuiviUri+'/'+idCoach,suivi);
  }







  setSuivi(thisSuivi:any){
    this.suivissss=thisSuivi;
  }
  getSuivi(){
    return this.suivissss
  }



}
