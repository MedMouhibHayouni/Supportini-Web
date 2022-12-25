import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient ) { }

  emailUrl:string='http://localhost:8080/email/send'
  createAnnonce(a:any){
    return this.httpClient.post(this.emailUrl, {emaile:a})
  }
}
