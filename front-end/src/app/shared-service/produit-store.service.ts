import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProduitStoreService {
  storeProduit = new BehaviorSubject<any>([])
  constructor() { }
  updateStore(v:any) {
    this.storeProduit.next(v);
  }
  // t3abi store
  // tnedi this.produitStore.update(res mtaa create)
  //array panier  [ligne p 1 ,ligne p 2]
  getValueFromStore() {
    return this.storeProduit.value;
  }

  selectFromStore(selector:any) {
    return this.storeProduit.asObservable()
  }
}
