import { Component, OnInit } from '@angular/core';
import {ServiceVilleService} from '../Services_/service-ville.service';

@Component({
  selector: 'app-liste-ville',
  templateUrl: './liste-ville.component.html',
  styleUrls: ['./liste-ville.component.css']
})
export class ListeVilleComponent implements OnInit {

  constructor(public service: ServiceVilleService) { }
  message: string;
  ngOnInit(): void {
    this.service.get();
    this.Test();
  }
  // tslint:disable-next-line:typedef
  Delete(id){
    this.message = '';
    this.service.Delete(id).subscribe(res => {
      this.message = 'the operation Delete Is Successfuly';
      this.service.get();
    }, err => {
      console.log(err);
    });
  }
  // tslint:disable-next-line:typedef
  select(item){
    this.message = '';
    this.service.ville = {
      id: item.id,
      ville_Name: item.ville_Name,
      annonces: null
    };
  }
  // tslint:disable-next-line:typedef
  Add(){
    this.service.Add().subscribe(res => {
      this.message = 'the operation Added Is Successfuly';
      this.service.ville.ville_Name = '';
      this.service.get();
    }, err => {
     console.log(err);
    }
    );
  }
  // tslint:disable-next-line:typedef
  Edit(){
    this.service.Edit(this.service.ville.id).subscribe(res => {
      this.message = 'The Operation Edit Is Successfuly';
      this.service.get();
    }, ex => {
      console.log(ex);
    });
  }
  // tslint:disable-next-line:typedef
  Test(){
    this.message = '';
    this.service.ville = {
      id: 0,
      ville_Name: 'Undifined',
      annonces: null
    };
  }
}
