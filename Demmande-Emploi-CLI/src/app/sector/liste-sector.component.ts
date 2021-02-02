import { Component, OnInit } from '@angular/core';
import{ServiceSectorService} from '../Services_/service-sector.service';

@Component({
  selector: 'app-liste-sector',
  templateUrl: './liste-sector.component.html',
  styleUrls: ['./liste-sector.component.css']
})
export class ListeSectorComponent implements OnInit {
  constructor(public service:ServiceSectorService) { }

  ngOnInit(): void {
    this.service.get();
  }
  Delete(id){
    this.service.Delete(id).subscribe(res=>{
      this.service.get();
    },err=>{
      console.log(err);
    })
  }
  select(item){
    this.service.sector={
      id:item.id,
      sector_Nom:item.sector_Nom
    };
  }
}
