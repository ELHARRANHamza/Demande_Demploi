import { Component, OnInit } from '@angular/core';
import {ServiceTypeService} from '../Services_/service-type.service';
@Component({
  selector: 'app-liste-type',
  templateUrl: './liste-type.component.html',
  styleUrls: ['./liste-type.component.css']
})
export class ListeTypeComponent implements OnInit {

  constructor(public service: ServiceTypeService) { }
  message: string;

  ngOnInit(): void {
    this.service.get();
    this.Test();
    this.message = '';
  }
  // tslint:disable-next-line:typedef
  Delete(id){
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
    this.service.type = {
      id: item.id,
      nom: item.nom,
      annonces: null
    };
  }
  // tslint:disable-next-line:typedef
  Add(){
     this.message = '';
     this.service.Add().subscribe(res => {
       this.message = 'the operation Added Is Successfuly';
       this.service.get();
     }, err => {
      console.log(err);
     }
     );
  }
  // tslint:disable-next-line:typedef
  Test(){
    this.message = '';
    this.service.type = {
      id: 0,
      nom: 'Undifined',
      annonces: null
    };
  }
  // tslint:disable-next-line:typedef
  Edit(){
    this.message = '';
    this.service.Edit(this.service.type.id).subscribe(res => {
      this.message = 'The Operation Edit Is Successfuly';
      this.service.get();
    }, ex => {
      console.log(ex);
    });
  }
}
