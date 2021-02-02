import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from '../Classe/annonce';

@Injectable({
  providedIn:  'root'
})
export class AnnonceServiceService {
annonce: Annonce;
annonces: Annonce[];
url = 'https://localhost:44322/api/Annonce';
selectedValueCat: number;
selectedValueSector: number;
selectedValueVille: number;
selectedValueType: number;
  constructor(protected http: HttpClient) { }
  // tslint:disable-next-line:typedef
  AddImage(files: File){
    // tslint:disable-next-line:prefer-const
    const data: FormData = new FormData();
    data.append('files', files, files.name);
    data.append('nomStage', this.annonce.nomStage);
    data.append('descriptionStage', this.annonce.descriptionStage);
    data.append('id_Cat', this.annonce.id_Cat.toString());
    data.append('id_sector', this.annonce.id_sector.toString());
    data.append('id_type', this.annonce.id_type.toString());
    data.append('id_ville', this.annonce.id_ville.toString());
    data.append('emailUser', this.annonce.emailUser.toString());
    return this.http.post(this.url, data, {withCredentials : true});
  }
  // tslint:disable-next-line:typedef
  getAnnonce(email){
    this.http.get(`${this.url}/getAnnonce/${email}`, {withCredentials : true}).toPromise().then(res => {
this.annonces = res as Annonce[];
    }, err => {
      console.log(err);
    });
  }
  // tslint:disable-next-line:typedef
  delete(id){
    return this.http.delete(`${this.url}/${id}`, {withCredentials : true});
  }
  // tslint:disable-next-line:typedef
  update(id, files: File){
    if (files === null){
      return this.http.put(this.url + '/EditWithoutFile/' + id , this.annonce, { withCredentials: true});
    }
    else{
    const data: FormData = new FormData();
    data.append('files', files, files.name);
    data.append('nomStage', this.annonce.nomStage);
    data.append('descriptionStage', this.annonce.descriptionStage);
    data.append('id_Cat', this.annonce.id_Cat.toString());
    data.append('id_sector', this.annonce.id_sector.toString());
    data.append('id_type', this.annonce.id_type.toString());
    data.append('id_ville', this.annonce.id_ville.toString());
    return this.http.put(`${this.url}/Edit/${id}`, data, {withCredentials : true});
    }
  }
}
