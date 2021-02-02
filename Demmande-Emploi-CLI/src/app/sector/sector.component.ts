import { Component, OnInit } from '@angular/core';
import {ServiceSectorService} from '../Services_/service-sector.service';
@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  constructor(public service: ServiceSectorService) { }

  ngOnInit(): void {
    this.service.sector = {
      id: 0,
      sector_Nom: 'Undifined',
      annonces: null
    };
  }
}
