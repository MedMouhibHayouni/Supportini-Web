import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Feedback} from "../../model/Feedback";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  addFeedbackUri  : string = 'http://localhost:8080/suivi/feedback/createFeedbackSuivi'
  getFeedbackByIdUri :string = 'http://localhost:8080/suivi/feedback/afficheById'
  getAllFeedbackUri : string = 'http://localhost:8080/suivi/feedback/affiche'
  getFeedbackByIdSuiviUri : string = 'http://localhost:8080/suivi/feedback/getBySuivi'
  getOneFeedbackByIdSuiviUri : string = 'http://localhost:8080/suivi/feedback/getFeedbackBySuivi'
  constructor(private http: HttpClient) { }

  getOneFeedback(feedbackId : any){
    return this.http.get<any>(this.getFeedbackByIdUri+"/"+feedbackId);
  }

  getFeedbackByIdSuivi(suiviId:any){
    return this.http.get<any>(this.getFeedbackByIdUri+"/"+suiviId);
  }

  getOneFeedbackByIdSuivi(suiviId:any){
    return this.http.get<any>(this.getOneFeedbackByIdSuiviUri+"/"+suiviId);
  }



  getAllFeedback(){
    return this.http.get<any>(this.getAllFeedbackUri);
  }

  createFeedback(suiviId:any,feedback:Feedback){
    return this.http.post(this.addFeedbackUri+"/"+suiviId,feedback);
  }




}
