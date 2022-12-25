import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EventsModel} from "../../model/EventsModel";
import {EventClickArg} from "@fullcalendar/angular";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  getAllPlaningUrl: string = "http://localhost:8080/planing/affichePlaning"
  getAllPLaninOfTrainerUrl : string = "http://localhost:8080/events/afficheEventsByEntr"
  getEventToDeleteUrl : string = "http://localhost:8080/events/getEventToDelete"
  deleteEventUri : string ="http://localhost:8080/events/deleteEvent"
  createEventUri : string ="http://localhost:8080/events/createEvent"


  constructor(private httpClient:HttpClient) { }
  getEventByEntr(){
    return this.httpClient.get<any>(this.getAllPLaninOfTrainerUrl)}

  getEventToDelete(){
    return this.httpClient.get<any>(this.getEventToDeleteUrl)}

  createEvent(eventAdded:any){
    return this.httpClient.post(this.createEventUri,eventAdded);
  }


  deleteEvents(idEvent:any){
    return this.httpClient.delete(this.deleteEventUri+'/'+idEvent);
  }
}

