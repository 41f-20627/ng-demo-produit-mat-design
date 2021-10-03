import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EnteteComponent } from '../entete/entete.component';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GardienConnexionGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){}  // Injection de dépendances. 
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let res: boolean | UrlTree;
      if(this.authService.log){
        res = true;
      }
      else{
        res = this.router.parseUrl("/login");
      }
        //return this.authService.statut()
      //return this.authService.log;
      return res;
  }
  
}
