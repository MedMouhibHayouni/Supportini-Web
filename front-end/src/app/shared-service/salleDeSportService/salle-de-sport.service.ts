import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {config} from "rxjs";
import {sallesport} from "../../model/salleDeSport";

@Injectable({
  providedIn: 'root'
})
export class SalleDeSportService {

  constructor(private httpClient: HttpClient ) { }
  getGymUrl           : string = "http://localhost:8080/gym/affiche"
  getgymByIdUrl       :string  = "http://localhost:8080/gym/afficheById"
  getGymSoetedAscUrl  : string = "http://localhost:8080/gym/get-sorted-asc-price"
  getGymSoetedDescUrl : string = "http://localhost:8080/gym/get-sorted-desc-price"
  getGymWithLettreUrl : string = "http://localhost:8080/gym/get-gym-par-lettre-name?nomSalle="
  postGymCreatUrl     : string = "http://localhost:8080/gym/create"
  putGymUpdateUrl     : string = "http://localhost:8080/gym/update"
  deleteGymeUrl       : string = "http://localhost:8080/gym/delete"
  getGymByIdUserUrl   : string = "http://localhost:8080/gym/afficheByIdUser"
  getLastFiveGymUrl   : string = "http://localhost:8080/gym/afficheLastFiveGum"
  postImageGymUrl     : string = "http://localhost:8080/gym/updateImageGym"
  getImagesGymUrl     : string = "http://localhost:8080/gym/imagesGym"

  getAllGym(){
  return this.httpClient.get<any>(this.getGymUrl)
}
  getGymSoetedAsc(){
    return this.httpClient.get<any>(this.getGymSoetedAscUrl)
  }
  getGymSoetedDesc(){
    return this.httpClient.get<any>(this.getGymSoetedDescUrl)
  }
  getGymWithLettre(searchGym : any){
    console.log(searchGym)
    return this.httpClient.get<any>(this.getGymWithLettreUrl+searchGym)
  }
  createGym(s:any){
    return this.httpClient.post<any>(this.postGymCreatUrl,s)
  }
  getGymById(id :any){
    return this.httpClient.get<any>(this.getgymByIdUrl+"/"+id)
  }
  putGymUpdate(id:any,gym:any){
    return this.httpClient.put<any>(this.putGymUpdateUrl+"/"+id,gym);
}
  deleteSalle(id:any){
    return this.httpClient.delete<any>(this.deleteGymeUrl+"/"+id)
 }
  getMyGym(){
    return this.httpClient.get<any>(this.getGymByIdUserUrl)
 }
  getLastFiveGym(){
    return this.httpClient.get<any>(this.getLastFiveGymUrl)
 }
 //   postImageGym(id:any){
 //     return this.httpClient.post<any>(this.postImageGymUrl+"/"+id)
 //  }
  postImageGym(id:any,uploadData:any){
    return this.httpClient.post<any>(this.postImageGymUrl+"/"+id,uploadData)
 }
getImagesGym(id:any){
    return this.httpClient.get<any>(this.getImagesGymUrl+"/"+id)
}


}
