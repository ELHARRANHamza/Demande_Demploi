import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {Roles} from '../Classe/roles';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RolesServiceService {
role: Roles;
roles: Roles[];
url = 'https://localhost:44322/api/GestionRole';
  constructor(protected http: HttpClient) { }
  // tslint:disable-next-line:typedef
  get(){
    this.http.get(this.url, {withCredentials : true}).toPromise().then(res => {
      this.roles = res as Roles[];
    }, err => {
      console.log(err);
    });
  }
  // tslint:disable-next-line:typedef
  Add(){
 return this.http.post(this.url, this.role, {withCredentials : true});
  }
  // tslint:disable-next-line:typedef
  Delete(id){
    return this.http.delete(this.url + '/' + id, {withCredentials : true});
  }
  // tslint:disable-next-line:typedef
  Edit(id){
    return this.http.put(this.url + '/' + id, this.role, {withCredentials : true});
  }
}
