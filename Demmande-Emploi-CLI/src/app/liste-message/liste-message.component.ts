import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../Services_/message-service.service';

@Component({
  selector: 'app-liste-message',
  templateUrl: './liste-message.component.html',
  styleUrls: ['./liste-message.component.css']
})
export class ListeMessageComponent implements OnInit {

  constructor(public service: MessageServiceService) { }

  ngOnInit(): void {
    this.service.getMessage();
  }
  // tslint:disable-next-line:typedef
  Delete(id){
this.service.delete(id).subscribe(res => {
  this.service.getMessage();
}, ex => {
  console.log(ex);
});
  }
}
