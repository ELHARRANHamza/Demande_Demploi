import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceCategoriesService } from '../Services_/service-categories.service';
import { ServiceHomeService } from '../Services_/service-home.service';

@Component({
  selector: 'app-details-home',
  templateUrl: './details-home.component.html',
  styleUrls: ['./details-home.component.css']
})
export class DetailsHomeComponent implements OnInit {

  constructor(protected route:ActivatedRoute,
    public service:ServiceHomeService,
    public service_Cat:ServiceCategoriesService) { }
id:any;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.get(this.id);
  }
  getImage(img){
    return `https://localhost:44322/${img}`;
  }

}
