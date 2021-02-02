import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Sector} from '../Classe/sector';
@Injectable({
  providedIn: 'root'
})
export class ServiceSectorService {
  sector: Sector;
  sectors: Sector[];
  url = 'https://localhost:44322/api/Sector';
    constructor(protected http: HttpClient) { }
    // tslint:disable-next-line:typedef
    get(){
      this.http.get(this.url, { withCredentials: true}).toPromise().then(res => {
        this.sectors = res as Sector[];
      }, err => {
        console.log(err);
      });
    }
    // tslint:disable-next-line:typedef
    Add(){
   return this.http.post(this.url, this.sector, { withCredentials: true});
    }
    // tslint:disable-next-line:typedef
    Delete(id){
      return this.http.delete(this.url + '/' + id, { withCredentials: true});
    }
    // tslint:disable-next-line:typedef
    Edit(id){
      return this.http.put(this.url + '/' + id , this.sector, { withCredentials: true});
    }
}
