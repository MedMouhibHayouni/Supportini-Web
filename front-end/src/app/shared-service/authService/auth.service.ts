import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../model/user";
import {Observable, Subject} from "rxjs";
import {Profil} from "../../model/profil";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl: string = 'http://localhost:8080/auth/register'
  loginUrl :string = "http://localhost:8080/auth/login"
  currentUser:string = 'http://localhost:8080/users/getcurrent'
  sendLinkUrl :string = "http://localhost:8080/auth/password_reset"

  private subjectName = new Subject<any>(); //need to create a subject
  constructor(private httpClient: HttpClient  ) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  register(u:User): Observable<User> {

    return this.httpClient.post<User>(this.registerUrl, u)
  }
  createProfil(p:Profil,check:any){

    return this.httpClient.post<Profil>(`http://localhost:8080/users/create-profile/${check}`, p)
  }
  login(u:User):Observable<any>{
      return this.httpClient.post<any>(this.loginUrl,u)
  }
  getCurrentUser(): Observable<any>{
    return this.httpClient.get<any> (this.currentUser)
  }


  sendAuthentified(authentified: boolean) { //the component that wants to update something, calls this fn
    this.subjectName.next(authentified); //next() will feed the value in Subject
  }

  getAuthentified(): Observable<any> { //the receiver component calls this function
    return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }
  sendLink(email:string):any {

    return this.httpClient.post<any>(this.sendLinkUrl,{email})
  }
  resetPassword (pwd:string,id:string,token:string){
    return this.httpClient.post<any>(this.sendLinkUrl+"/"+id+"/"+token,{password:pwd})
  }
}
