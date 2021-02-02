import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Sector } from '../Classe/sector';
import {Annonce} from '../Classe/annonce';
import { FindAnnonce } from '../Classe/find-annonce';
import { LoadSearch } from '../Classe/load-search';

@Injectable({
  providedIn: 'root'
})
export class ServiceHomeService {
  annonce: FindAnnonce;
  data: LoadSearch;
  homes: Sector[];
  home: Sector;
url = 'https://localhost:44322/api/Home';
  constructor(protected http: HttpClient) { }
  // tslint:disable-next-line:typedef
Affiche(idCat: number, id_Ville: number, id_Type: number ){
    this.http.get(`${this.url}/Affiche/${idCat}&${id_Ville}&${id_Type}`, { withCredentials: true}).toPromise().then(res => {
      this.homes = res as Sector[];
    }, err => {
      console.log(err);
    });
  }
  // tslint:disable-next-line:typedef
  get(id){
    this.http.get(`${this.url}/${id}`).toPromise().then(res => {
      this.annonce = res as FindAnnonce;
    }, err => {
      console.log(err);
    });
  }
  // tslint:disable-next-line:typedef
  getData(){
this.http.get(`${this.url}/loadData`).toPromise().then(res => {
this.data = res as LoadSearch;
}, ex => {
console.log(ex);
});
  }
}
