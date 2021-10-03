import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.scss']
})
export class EnteteComponent implements OnInit {
  estConnecte:boolean;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.estConnecte = this.authService.log;
  }
 
  changement():void{
  
    this.authService.log = this.estConnecte;  // Setter

  }
}
