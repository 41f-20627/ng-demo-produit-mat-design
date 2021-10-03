import { Component, Input, OnInit } from '@angular/core';
import { IProduit } from '../iproduit';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.scss']
})

export class DetailsProduitComponent implements OnInit {
  @Input() produit:IProduit;

  @Input() estEditable:boolean = false;

  constructor() { }
  
  ngOnInit(): void {
  }
  
}
