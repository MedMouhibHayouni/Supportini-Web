import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastService} from "../toastService/toast.service";

@Injectable({
  providedIn: 'root'
})
export class PanierServiceService {

  constructor(private httpClient: HttpClient, toastService: ToastService) {
  }

  getPanUrl: string = "http://localhost:8080/panier/affiche"
  deletePanUrl: string = "http://localhost:8080/panier/delete/"
  postPanUrl: string = "http://localhost:8080/panier/create/"
updateUrl : string= "http://localhost:8080/panier/updatequantite/"

  createPan(Lp: any, idPro: any) {


    // @ts-ignore
    return this.httpClient.post<any>(this.postPanUrl + idPro, Lp)
  }

  deletePan(idLP: any) {
    return this.httpClient.delete<any>(this.deletePanUrl + idLP)
  }

  getPAnier() {

    return this.httpClient.get<any>(this.getPanUrl);
  }
updatequantite(idProd:any,quantite:any){

    return this.httpClient.post<any>( this.updateUrl +idProd,{quantite});
}

}
