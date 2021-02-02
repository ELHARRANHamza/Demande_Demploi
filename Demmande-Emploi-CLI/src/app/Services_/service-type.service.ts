import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Type} from '../Classe/type';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {
  type: Type;
  types: Type[];
  url = 'https://localhost:44322/api/Type';
    constructor(protected http: HttpClient) { }
    // tslint:disable-next-line:typedef
    get(){
      this.http.get(this.url, { withCredentials: true}).toPromise().then(res => {
        this.types = res as Type[];
      }, err => {
        console.log(err);
      });
    }
    // tslint:disable-next-line:typedef
    Add(){
   return this.http.post(this.url, this.type, { withCredentials: true});
    }
    // tslint:disable-next-line:typedef
    Delete(id){
      return this.http.delete(this.url + '/' + id);
    }
    // tslint:disable-next-line:typedef
    Edit(id){
      return this.http.put(this.url + '/' + id, this.type);
    }
}
