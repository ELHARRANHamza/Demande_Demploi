import { Component, OnInit } from '@angular/core';
import { GestionAnnonceService } from 'src/app/Services_/gestion-annonce.service';

@Component({
  selector: 'app-annonce-envoyer',
  templateUrl: './annonce-envoyer.component.html',
  styleUrls: ['./annonce-envoyer.component.css']
})
export class AnnonceEnvoyerComponent implements OnInit {

  constructor(public service: GestionAnnonceService) { }

  ngOnInit(): void {
    this.service.getAnnonceEnvoyer();
    console.log(this.service.annoncesEnvoyer)
  }
  // tslint:disable-next-line:typedef
  getImage(img){
    return `https://localhost:44322/${img}`;
  }
// tslint:disable-next-line:typedef
Accepter(id){
  this.service.accepteAnnonce(id).subscribe(res => {
    this.service.getAnnonceAccepter();
  }, ex => {
    console.log(ex);
  });
}
// tslint:disable-next-line:typedef
Refuser(id){
  this.service.refuserAnnonce(id).subscribe(res => {
    this.service.getAnnonceAccepter();
  }, ex =>{
    console.log(ex);
  });
}
}
