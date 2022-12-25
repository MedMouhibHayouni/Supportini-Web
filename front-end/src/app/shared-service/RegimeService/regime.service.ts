import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegimeService {

  constructor(private httpClient: HttpClient) { }
  createRegimeUrl: string = "http://localhost:8080/regime/create"
  getRegimeByAnnoneUrl:string="http://localhost:8080/regime/afficheById"

  createRegime(a:any,id:any){
    return this.httpClient.post(this.createRegimeUrl+"/"+id,a)
  }

getRegimeByAnnonce(id:any){
  return this.httpClient.get<any>( this.getRegimeByAnnoneUrl+"/"+id)
}

}
