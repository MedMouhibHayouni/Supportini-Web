import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EquipementGymService {

  constructor(private httpClient : HttpClient) { }

  getEquipementGymUrl       :string ="http://localhost:8080/equipmentGym/affiche"
  getCreateEquipementGymUrl :string ="http://localhost:8080/equipmentGym/create"
  putUpdateEquipementGymUrl :string ="http://localhost:8080/equipmentGym/update"




  getCreateEquipementGym(id : any, equipement:any){
    return this.httpClient.post<any>(this.getCreateEquipementGymUrl+"/"+id,equipement)
  }

  getEquipementGym(id : any){
    return this.httpClient.get<any>(this.getEquipementGymUrl+"/"+id)
  }
  putUpdateEquipementGym(id : any, equipments:any){
    return this.httpClient.put<any>(this.putUpdateEquipementGymUrl+"/"+id,equipments)
  }

}
