import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AffichagePoster } from '../Classe/affichage-poster';
import { Poster } from '../Classe/poster';

@Injectable({
  providedIn: 'root'
})
export class PosterServiceService {
poste: Poster;
postes: Poster[];
affichage: AffichagePoster;
url = 'https://localhost:44322/api/Poster';
  constructor(public http: HttpClient) { }
// tslint:disable-next-line:typedef
Add(files: File, email: string){
 const data: FormData = new FormData();
 data.append('files', files, files.name);
 data.append('Message', this.poste.Message);
 data.append('email', this.poste.email);
 data.append('num_Tile', this.poste.num_Tile);
 data.append('id_Ann', this.poste.id_Ann.toString());
 data.append('user_Email', email);
 return this.http.post(this.url, data, {withCredentials : true});
}
// tslint:disable-next-line:typedef
get(id){
  this.http.get(`${this.url}/${id}`, {withCredentials : true}).toPromise().then(res => {
    this.affichage = res as AffichagePoster;
  }, err => {
    console.log(err);
  });
}
// tslint:disable-next-line:typedef
delete(id){
  return this.http.delete(`${this.url}/${id}`, {withCredentials : true});
}
}
