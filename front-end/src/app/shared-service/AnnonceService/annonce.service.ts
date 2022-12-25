import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {config} from "rxjs";
import {Annonce} from "../../model/annonce";
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private httpClient: HttpClient ) { }
  getAllAnnoncesUrl: string = "http://localhost:8080/annonce/affiche"
  createAnnonceUrl: string = "http://localhost:8080/annonce/create"
  getAnnonceByIdUrl: string = "http://localhost:8080/annonce/afficheById"
  modifierUrl: string = "http://localhost:8080/annonce/update"
  supprimerUrl:string = "http://localhost:8080/annonce/deleteById"
  filterUrl:string = "http://localhost:8080/annonce/filter"
  prixAscUrl:string="http://localhost:8080/annonce/getSortedByPriceAsc"
  prixDEscUrl:string="http://localhost:8080/annonce/getSortedByPriceDesc"
  listTrainerByAnnonceUrl:string= "http://localhost:8080/annonce/afficheTrainerByAnnonce"
  getAnnonceByCoachUrl:string="http://localhost:8080/annonce/getAnnonceByCoach"
gettopSixAnnonceUrl:string="http://localhost:8080/annonce/affichetopten"
  getCoachInformationByIdAnnoncerl:string="http://localhost:8080/annonce/getCoachInformationByIdAnnonce"
pariciperUrl:string="http://localhost:8080/annonce/participer"


  topSix(){
    return this.httpClient.get<any>(this.gettopSixAnnonceUrl)
  }

  participerAndSuivi(id:any){
    return this.httpClient.get<any>(this.pariciperUrl+"/"+id)
  }


  getAllAnnonces(){
    return this.httpClient.get<any>(this.getAllAnnoncesUrl)
  }


  createAnnonce(a:any){
    return this.httpClient.post(this.createAnnonceUrl,a)
  }

  getAnnonceById(id : any){

    return this.httpClient.get<any>( this.getAnnonceByIdUrl+"/"+id)
  }

  modifierannonce(id : any,annonce:Annonce){
    return this.httpClient.put<any>( this.modifierUrl+"/"+id,annonce)
  }

  supprimerannonce(id : any){
    return this.httpClient.delete<any>( this.supprimerUrl+"/"+id)
  }
filter(annonce:any){

  return this.httpClient.post<any>(this.filterUrl,annonce)
}

  prixAnnonceAsc(){
    return this.httpClient.get<any>(this.prixAscUrl)
  }
  prixAnnonceDesc(){
    return this.httpClient.get<any>(this.prixDEscUrl)
  }

  listTrainerByAnnonce(id:any){
    console.log(id)
    return this.httpClient.get<any>(this.listTrainerByAnnonceUrl+"/"+id);

  }

  getAnnonceByCoach(){
    return this.httpClient.get<any>(this.getAnnonceByCoachUrl)
  }


  getCoachInformationByIdAnnonce(id:any){
    return this.httpClient.get<any>( this.getCoachInformationByIdAnnoncerl+"/"+id)
  }

}



