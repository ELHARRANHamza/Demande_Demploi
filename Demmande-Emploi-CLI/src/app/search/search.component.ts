import { Component, OnInit } from '@angular/core';
import { ServiceHomeService } from '../Services_/service-home.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceSectorService } from '../Services_/service-sector.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public service: ServiceHomeService,
              private fb: FormBuilder) { }
  // tslint:disable-next-line:variable-name
 fg: FormGroup;
 idVille: number;
 idCat: number;
 idType: number;
  ngOnInit(): void {
    this.service.data = {
categories: null,
villes: null,
types: null
    };
    this.service.getData();
    this.fg = this.fb.group({
      idVille: 0,
      idCat: 0,
      idType: 0
    });
    this.load();
  }
  // tslint:disable-next-line:typedef
load(){
  this.service.homes = null;
  this.idCat = this.fg.get('idCat').value;
  this.idType = this.fg.get('idType').value;
  this.idVille = this.fg.get('idVille').value;
  this.service.Affiche(this.idCat, this.idVille, this.idType);
}

}
