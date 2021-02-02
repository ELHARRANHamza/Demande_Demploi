import { Component, OnInit } from '@angular/core';
import { AnnonceServiceService } from '../Services_/annonce-service.service';
import { CryptService } from '../services_/crypt.service';
import { ServiceCategoriesService } from '../Services_/service-categories.service';
import { ServiceSectorService } from '../Services_/service-sector.service';
import { ServiceTypeService } from '../Services_/service-type.service';
import { ServiceVilleService } from '../Services_/service-ville.service';


@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

  fileName: File = null;
  email: string;
  btn: string;
  constructor(public service: AnnonceServiceService,
              public serviceType: ServiceTypeService,
              public serviceVille: ServiceVilleService,
              public serviceCat: ServiceCategoriesService,
              public serviceSector: ServiceSectorService,
              protected crypt: CryptService) { }

  ngOnInit(): void {
    this.btn = 'Create';
    this.serviceCat.get();
    this.serviceType.get();
    this.serviceVille.get();
    this.serviceSector.get();
    this.service.annonce = {
      id: 0,
      nomStage: 'Undifined',
      descriptionStage: 'Undifined',
      id_Cat: 0,
      id_sector: 0,
      id_type: 0,
      id_ville: 0,
      image: 'Undifined',
      datePub: null,
      emailUser: 'Undifined'
    };
    this.service.selectedValueCat = 1;
    this.service.selectedValueSector = 1;
    this.service.selectedValueType = 1;
    this.service.selectedValueVille = 1;
    this.email = localStorage.getItem('email');
  }
  // tslint:disable-next-line:typedef
  UploadImage(files: FileList){
    this.fileName = files.item(0);
    console.log(this.fileName);
  }
  // tslint:disable-next-line:typedef
  AddImage(){
    if (this.service.annonce.id_sector === 0){
      const email = this.crypt.Decrypt(localStorage.getItem('email'));
      this.service.annonce.id_Cat = this.service.selectedValueCat;
      this.service.annonce.id_sector = this.service.selectedValueSector;
      this.service.annonce.id_type = this.service.selectedValueType;
      this.service.annonce.id_ville = this.service.selectedValueVille;
      this.service.annonce.emailUser = email.toString();
      this.service.AddImage(this.fileName).subscribe(res => {
      this.service.getAnnonce(this.email);
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
  else{
    this.service.annonce.id_Cat = this.service.selectedValueCat;
    this.service.annonce.id_sector = this.service.selectedValueSector;
    this.service.annonce.id_type = this.service.selectedValueType;
    this.service.annonce.id_ville = this.service.selectedValueVille;
    this.service.update(this.service.annonce.id, this.fileName).subscribe(res => {
  this.service.getAnnonce(this.email);
  console.log(res);
}, err => {
  console.log(err);
});
  }
}
  // tslint:disable-next-line:typedef
  showImage(img: string){
    return `https://localhost:44322/${img}`;
  }
}
