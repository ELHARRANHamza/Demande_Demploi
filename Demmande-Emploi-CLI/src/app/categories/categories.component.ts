import { Component, OnInit } from '@angular/core';
import {ServiceCategoriesService} from '../Services_/service-categories.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(public service: ServiceCategoriesService) { }

  ngOnInit(): void {
    this.service.categorie = {
      id: 0,
      cat_Nom: 'Undifined',
      annonces: null
    };
  }
  // tslint:disable-next-line:typedef
  AddCat(){
    if (this.service.categorie.id === 0){
    this.service.Add().subscribe(res => {
      this.service.get();
    }, err => {
      console.log(err);
    }
    );
  }
  else{
    this.service.Edit(this.service.categorie.id).subscribe(res => {
      this.service.get();
    }, err => {
      console.log(err);
    }
    );
  }
  }
}
