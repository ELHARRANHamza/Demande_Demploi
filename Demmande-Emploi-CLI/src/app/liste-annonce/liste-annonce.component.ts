import { Component, OnInit } from '@angular/core';
import { AnnonceServiceService } from '../Services_/annonce-service.service';
import { CryptService } from '../services_/crypt.service';
import { ServiceCategoriesService } from '../Services_/service-categories.service';

@Component({
  selector: 'app-liste-annonce',
  templateUrl: './liste-annonce.component.html',
  styleUrls: ['./liste-annonce.component.css']
})
export class ListeAnnonceComponent implements OnInit {

  constructor(public service: AnnonceServiceService,
              public serviceCat: ServiceCategoriesService,
              protected crypt: CryptService) { }
              email: string;
  ngOnInit(): void {
     this.email = this.crypt.Decrypt(localStorage.getItem('email'));
     this.service.getAnnonce(this.email);
  }
  // tslint:disable-next-line:typedef
  getImage(img: string){
    return `https://localhost:44322/${img}`;
  }
  // tslint:disable-next-line:typedef
  select(item){
    this.service.annonce = {
    id: item.id,
    nomStage: item.nomStage,
   descriptionStage: item.descriptionStage,
    image: item.image,
    id_Cat: item.id_Cat,
    id_sector: item.id_sector,
    id_type: item.id_type,
    id_ville: item.id_ville,
    datePub: item.datePub,
    emailUser: ''
     };
    this.service.selectedValueCat = item.id_Cat;
    this.service.selectedValueSector = item.id_sector;
    this.service.selectedValueType = item.id_type;
    this.service.selectedValueVille = item.id_ville;
  }
  // tslint:disable-next-line:typedef
  delete(id){
    this.service.delete(id).subscribe(re => {
      this.service.getAnnonce(this.email);
    }, err => {
      console.log(err);
    });
  }
  }
