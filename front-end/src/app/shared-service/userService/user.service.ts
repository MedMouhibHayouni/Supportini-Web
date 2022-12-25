import { Injectable } from '@angular/core';
import {User} from "../../model/user";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getProfilWithUserUrl:string="http://localhost:8080/users/getOwnerProfil"
  updateUserUrl:string="http://localhost:8080/users/update"
  uploadUrl : string="http://localhost:8080/users/addImage"
  updateProfileUrl : string ="http://localhost:8080/users/update_profile"
  coachByUserUrl : string="http://localhost:8080/users/getIdCoachByIdUser"
  uploadGaleryUrl : string ="http://localhost:8080/users/addGalery"
   CoachInfoByIdUrl:string="http://localhost:8080/users/getCoachInformationById"

  constructor(private httpClient: HttpClient) { }
  user!:User;
  storeUser = new BehaviorSubject<any>(this.user)
  addUser(data:any){
    this.user=data
  }
  getUser(){
    return this.user
  }
  getUserWithProfil () {
    return   this.httpClient.get<any>(this.getProfilWithUserUrl)
  }
  updateUser (user:User){
    return this.httpClient.put<any>(this.updateUserUrl,user)
  }
  onUpload(uploadData:any){

    return this.httpClient.post<any>(this.uploadUrl,uploadData)

  }

  updateProfil(spec : any){
    return this.httpClient.put<any>(this.updateProfileUrl, {specialite:spec})
  }

  onUploadGalery (uploadData:any){
    const formData: FormData = new FormData();


    formData.append('image', uploadData);
    return this.httpClient.post<any>(this.uploadGaleryUrl,formData)

  }
  updateStore(v:any) {
    this.storeUser.next(v);
  }

  getValueFromStore() {
    return this.storeUser.value;
  }

  selectFromStore(selector:any) {
    return this.storeUser.asObservable()
  }
  coachByUser(){
    return   this.httpClient.get<any>(this.coachByUserUrl)
  }
  coachInfoById(id:any){
    return this.httpClient.get<any>(this.CoachInfoByIdUrl+"/"+id)
  }

}
