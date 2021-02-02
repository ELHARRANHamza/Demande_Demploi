import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Message} from '../Classe/message-';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  message: Message;
  messages: Message[];
  url = 'https://localhost:44322/Message';
  constructor(protected http: HttpClient) { }
// tslint:disable-next-line:typedef
post(){
  return this.http.post(this.url, this.message);
}
// tslint:disable-next-line:typedef
getMessage(){
  this.http.get(this.url).toPromise().then(res => {
      this.messages = res as Message[];
  }, ex => {
    console.log(ex);
  }
  );
}
// tslint:disable-next-line:typedef
delete(id){
  return this.http.delete(`${this.url}/${id}`);
}
}
