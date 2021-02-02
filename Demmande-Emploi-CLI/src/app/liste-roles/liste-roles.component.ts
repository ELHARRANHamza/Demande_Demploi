import { Component, OnInit } from '@angular/core';
import {RolesServiceService} from '../Services_/roles-service.service';

@Component({
  selector: 'app-liste-roles',
  templateUrl: './liste-roles.component.html',
  styleUrls: ['./liste-roles.component.css']
})
export class ListeRolesComponent implements OnInit {

  constructor(public service: RolesServiceService) { }
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
    this.service.role = {
      id: item.id,
      name: item.name
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
    this.service.role = {
      id: '',
      name: 'Undifined'
    };
  }
  // tslint:disable-next-line:typedef
  Edit(){
    this.message = '';
    this.service.Edit(this.service.role.id).subscribe(res => {
      this.message = 'The Operation Edit Is Successfuly';
      this.service.get();
    }, ex => {
      console.log(ex);
    });
  }
}
