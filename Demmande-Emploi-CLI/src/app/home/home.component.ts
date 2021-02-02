import { Component, OnInit } from '@angular/core';
import { ServiceHomeService } from '../Services_/service-home.service';
import { ServiceSectorService } from '../Services_/service-sector.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
              // tslint:disable-next-line:variable-name
              public serveiceHome: ServiceHomeService, public service_Sect: ServiceSectorService){ }
  ngOnInit(): void {
    this.serveiceHome.home = {
    id: 0,
   sector_Nom: '',
   annonces: null
    };
    }
  // tslint:disable-next-line:typedef
getImage(img){
    return `https://localhost:44322/${img}`;
  }
  // tslint:disable-next-line:typedef
  details(id){
    this.serveiceHome.get(id);
  }
}
