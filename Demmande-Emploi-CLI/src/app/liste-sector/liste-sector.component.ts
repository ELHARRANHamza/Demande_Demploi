import { Component, OnInit } from '@angular/core';
import {ServiceSectorService} from '../Services_/service-sector.service';

@Component({
  selector: 'app-liste-sector',
  templateUrl: './liste-sector.component.html',
  styleUrls: ['./liste-sector.component.css']
})
export class ListeSectorComponent implements OnInit {
  constructor(public service: ServiceSectorService) { }
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
    this.service.sector = {
      id: item.id,
      sector_Nom: item.sector_Nom,
      annonces: null
    };
  }
  // tslint:disable-next-line:typedef
  Add(){
     this.message = '';
     this.service.Add().subscribe(res => {
       this.message = 'the operation Added Is Successfuly';
       this.service.sector.sector_Nom = '';
       this.service.get();
     }, err => {
      console.log(err);
     }
     );
  }
  // tslint:disable-next-line:typedef
  Test(){
    this.message = '';
    this.service.sector = {
      id: 0,
      sector_Nom: 'Undifined',
      annonces: null
    };
  }
  // tslint:disable-next-line:typedef
  Edit(){
    this.message = '';
    this.service.Edit(this.service.sector.id).subscribe(res => {
      this.message = 'The Operation Edit Is Successfuly';
      this.service.get();
    }, ex => {
      console.log(ex);
    });
  }
}
