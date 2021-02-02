import { Component, OnInit } from '@angular/core';
import {ServiceCategoriesService} from '../Services_/service-categories.service';
@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styleUrls: ['./liste-categories.component.css']
})
export class ListeCategoriesComponent implements OnInit {
  constructor(public service: ServiceCategoriesService) { }
  test: boolean;
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
    this.service.categorie = {
      id: item.id,
      cat_Nom: item.cat_Nom,
      annonces: null
    };
    this.test = true;
  }
  // tslint:disable-next-line:typedef
  Add(){
     this.message = '';
     this.service.Add().subscribe(res => {
       this.message = 'the operation Added Is Successfuly';
       this.service.categorie.cat_Nom = '';
       this.service.get();
     }, err => {
      console.log(err);
     }
     );
  }
  // tslint:disable-next-line:typedef
  Test(){
    this.message = '';
    this.service.categorie = {
      id: 0,
      cat_Nom: 'Undifined',
      annonces: null
    };
  }
  // tslint:disable-next-line:typedef
  Edit(){
    this.message = '';
    this.service.Edit(this.service.categorie.id).subscribe(res => {
      this.message = 'The Operation Edit Is Successfuly';
      this.service.get();
    }, ex => {
      console.log(ex);
    });
  }
}
