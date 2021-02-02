import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VilleCl} from '../Classe/ville-cl';
@Injectable({
  providedIn: 'root'
})
export class ServiceVilleService {
ville: VilleCl;
villes: VilleCl[];
url = 'https://localhost:44322/api/Ville';
  constructor(protected http: HttpClient) { }
  // tslint:disable-next-line:typedef
  get(){
    this.http.get(this.url, { withCredentials: true}).toPromise().then(res => {
      this.villes = res as VilleCl[];
    }, err => {
      console.log(err);
    });
  }
  // tslint:disable-next-line:typedef
  Add(){
 return this.http.post(this.url, this.ville, { withCredentials: true});
  }
  // tslint:disable-next-line:typedef
  Delete(id){
    return this.http.delete(this.url + '/' + id, { withCredentials: true});
  }
  // tslint:disable-next-line:typedef
  Edit(id){
    return this.http.put(this.url + '/' + id, this.ville, { withCredentials: true});
  }
}
