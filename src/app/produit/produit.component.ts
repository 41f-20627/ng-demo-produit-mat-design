import { Component, OnInit } from '@angular/core';
import { IListeProduit } from '../iliste-produit';
import { IProduit } from '../iproduit';
import { ProduitServService } from '../produit-serv.service';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  produits:IProduit[];
  estGlobalEditable:boolean = false;
  colonnesAffichees:string[] = ["id", "nom", "fabricant"];

  constructor(private servProduit:ProduitServService) { }

  ngOnInit(): void {
    this.servProduit.getDummy().subscribe(lesProduits=> {this.produits = lesProduits.data;});
  }
  
  

}
