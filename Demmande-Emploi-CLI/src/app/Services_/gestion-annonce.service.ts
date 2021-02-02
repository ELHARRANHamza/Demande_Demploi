import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from '../Classe/annonce';
import { GetGestionAnnonce } from '../Classe/get-gestion-annonce';

@Injectable({
  providedIn: 'root'
})
export class GestionAnnonceService {
  annoncesEnvoyer: GetGestionAnnonce[];
  annoncesAccepter: GetGestionAnnonce[];
  annoncesRefuser: GetGestionAnnonce[];
  annonce: Annonce;
  url = 'https://localhost:44322/gestionAnnonce';
  constructor(protected http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getAnnonceEnvoyer(){
this.http.get(`${this.url}/annonceEnvoyer`, {withCredentials: true}).toPromise().then(ann => {
  this.annoncesEnvoyer = ann as GetGestionAnnonce[];
}, ex => {
  console.log(ex);
});
  }
  // tslint:disable-next-line:typedef
  getAnnonceAccepter(){
    this.http.get(`${this.url}/annonceAccepter`, {withCredentials: true}).toPromise().then(ann => {
      this.annoncesAccepter = ann as GetGestionAnnonce[];
    }, ex => {
      console.log(ex);
    });
  }
  // tslint:disable-next-line:typedef
  getAnnonceRefuser(){
    this.http.get(`${this.url}/annonceRefuser`, {withCredentials: true}).toPromise().then(ann => {
      this.annoncesRefuser = ann as GetGestionAnnonce[];
    }, ex => {
      console.log(ex);
    });
  }
  // tslint:disable-next-line:typedef
  accepteAnnonce(id){
    return this.http.put(`${this.url}/accepteAnnonce/${id}`, this.annonce);
  }
   // tslint:disable-next-line:typedef
   refuserAnnonce(id){
    return this.http.put(`${this.url}/refuseAnnonce/${id}`, this.annonce);
  }
}
