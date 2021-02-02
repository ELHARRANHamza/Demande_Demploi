import { Component, OnInit } from '@angular/core';
import { GestionAnnonceService } from 'src/app/Services_/gestion-annonce.service';

@Component({
  selector: 'app-annonce-accepter',
  templateUrl: './annonce-accepter.component.html',
  styleUrls: ['./annonce-accepter.component.css']
})
export class AnnonceAccepterComponent implements OnInit {

  constructor(public service: GestionAnnonceService) { }

  ngOnInit(): void {
    this.service.getAnnonceAccepter();
  }
  // tslint:disable-next-line:typedef
  getImage(img){
    return `https://localhost:44322/${img}`;
  }

}
