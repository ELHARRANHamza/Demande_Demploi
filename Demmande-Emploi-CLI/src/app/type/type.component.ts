import { Component, OnInit } from '@angular/core';
import {ServiceTypeService} from '../Services_/service-type.service';
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  constructor(public service: ServiceTypeService) { }

  ngOnInit(): void {
    this.service.type = {
      id: 0,
      nom: 'Undifined',
      annonces: null
    };
  }
}
