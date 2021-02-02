import { Component, OnInit } from '@angular/core';
import { GestionAnnonceService } from 'src/app/Services_/gestion-annonce.service';

@Component({
  selector: 'app-annonce-refuser',
  templateUrl: './annonce-refuser.component.html',
  styleUrls: ['./annonce-refuser.component.css']
})
export class AnnonceRefuserComponent implements OnInit {

  constructor(public service: GestionAnnonceService) { }

  ngOnInit(): void {
    this.service.getAnnonceRefuser();
  }
  // tslint:disable-next-line:typedef
  getImage(img){
    return `https://localhost:44322/${img}`;
  }

}
