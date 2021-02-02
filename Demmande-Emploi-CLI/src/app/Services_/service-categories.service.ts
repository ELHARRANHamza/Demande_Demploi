import { Injectable } from '@angular/core';
import { from } from 'rxjs';
// tslint:disable-next-line:import-spacing
import {Categories} from '../Classe/categories';
import {HttpClient} from '@angular/common/http';
import { Annonce } from '../Classe/annonce';

@Injectable({
  providedIn: 'root'
})
export class ServiceCategoriesService {
  categorie: Categories;
categories: Categories[];
url = 'https://localhost:44322/api/Categorie';
  constructor(protected http: HttpClient) { }
  // tslint:disable-next-line:typedef
  get(){
    this.http.get(this.url, {withCredentials: true}).toPromise().then(res => {
      this.categories = res as Categories[];
    }, err => {
      console.log(err);
    });
  }
  // tslint:disable-next-line:typedef
  Add(){
 return this.http.post(this.url, this.categorie, {withCredentials: true});
  }
  // tslint:disable-next-line:typedef
  Delete(id){
    return this.http.delete(this.url + '/' + id, {withCredentials : true});
  }
  // tslint:disable-next-line:typedef
  Edit(id){
    return this.http.put(this.url + '/' + id, this.categorie, {withCredentials : true});
  }
  // tslint:disable-next-line:typedef
  Find(id){
    this.http.get(`${this.url}/${id}`, {withCredentials : true}).toPromise().then(res => {
      this.categorie = res as Categories;
    }, err => {
      console.log(err);
    });
  }
}
