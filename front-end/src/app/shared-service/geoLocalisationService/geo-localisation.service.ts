import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeoLocalisationService {

  constructor() { }

  getLocationService():Promise<any>{
    return new Promise((resolve, reject)=>{
      navigator.geolocation.getCurrentPosition(resp=>{
        resolve({lng: resp.coords.longitude, lat: resp.coords.latitude})
        reject("erreur")
      })

    })
  }
}
