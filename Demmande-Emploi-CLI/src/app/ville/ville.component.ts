import { Component, OnInit } from '@angular/core';
import {ServiceVilleService} from '../Services_/service-ville.service';
@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  constructor(public service: ServiceVilleService) { }

  ngOnInit(): void {
    this.service.ville = {
      id: 0,
      ville_Name: 'Undifined',
      annonces: null
    };
  }
}
