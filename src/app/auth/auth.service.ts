import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estConnecte:boolean = true;

  constructor(private router:Router) { }

  statut():boolean{
    return this.estConnecte;
  }

  get log():boolean{
    return this.estConnecte;
  }

  set log(param:boolean){
    this.estConnecte = param;
    if(!this.estConnecte){
      this.router.navigate(["/login"]);
    }
  }

  login():void{
    this.estConnecte = true;
  }

  logout():void{
    this.estConnecte = false;
    this.router.navigate(["/login"]);
  }

}
