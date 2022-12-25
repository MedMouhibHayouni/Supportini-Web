import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getUserUrl: string = 'http://localhost:8080/users/get';
  banUserUrl : string ="http://localhost:8080/users/ban/";
  updateUSerUrl : string ="http://localhost:8080/users/update/";
  getUserByRoleUrl : string = "http://localhost:8080/users/getByRole/"
  updateImageUrl : string ="http://localhost:8080/users/updateImageUser/"
  constructor(private httpClient: HttpClient) { }
  getAllUser ():any {
    return this.httpClient.get<any>(this.getUserUrl)
  }
  banUser (id:Number):any {
    return this.httpClient.get<any>(this.banUserUrl+id);
  }
  update (id:Number,user:User):any{
    return this.httpClient.put<any>(this.updateUSerUrl+id,user);
  }
  getUserByRole (role:Number){

    return this.httpClient.get<any>(this.getUserByRoleUrl+role)
  }
  onUpload(uploadData:any,id:Number){
   return  this.httpClient.post<any>(this.updateImageUrl+id,uploadData)
  }
}
