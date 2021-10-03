import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { IListeProduit } from './iliste-produit';
import { Observable, Observer } from 'rxjs';
import { IProduit } from './iproduit';

@Injectable({
  providedIn: 'root'
})
export class ProduitServService {
  produits:IListeProduit;
  obser:Observable<IListeProduit>;

  constructor(private http:HttpClient) {
    this.produits = {data : [...Array(10)].map(function(element, index) {
      return {"id" : index , 
              "nom" : ("test "+ index), 
              "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu nisl cursus, luctus nulla eu, cursus augue. Curabitur in nulla id nulla porttitor ullamcorper at posuere urna. Donec ut malesuada velit, a vulputate risus. Morbi in magna accumsan felis auctor pellentesque. Etiam malesuada justo magna, a pretium libero semper vel. Duis scelerisque lectus ut faucibus consectetur. Quisque eget imperdiet felis. Vivamus nulla tellus, auctor eget lobortis vel, scelerisque sit amet lectus.",
              "fabricant" : "fabricant " + index}
    })}
    
    this.obser = new Observable<IListeProduit>((observer:Observer<IListeProduit>)=>{
      observer.next(this.produits);
      observer.complete();
    });
  }
  
  getDummy():Observable<IListeProduit>{
    return this.obser;
  }

  
}
