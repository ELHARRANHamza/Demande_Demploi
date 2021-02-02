import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PosterServiceService } from '../Services_/poster-service.service';

@Component({
  selector: 'app-liste-poste',
  templateUrl: './liste-poste.component.html',
  styleUrls: ['./liste-poste.component.css']
})
export class ListePosteComponent implements OnInit {

  constructor(public router: ActivatedRoute, public service: PosterServiceService) { }
id: any;
  ngOnInit(): void {
this.id = this.router.snapshot.params['id'];
this.service.get(this.id);
  }
  // tslint:disable-next-line:typedef
  getCV(CV){
   return `https://localhost:44322/${CV}`;
  }
// tslint:disable-next-line:typedef
delete(id_){
  this.service.delete(id_).subscribe(re => {
    this.service.get(this.id);
  }, err => {
    console.log(err);
  });
}
}
