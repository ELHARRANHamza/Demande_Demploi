import { Component, OnInit } from '@angular/core';
import {RolesServiceService} from '../Services_/roles-service.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(public service: RolesServiceService) { }

  ngOnInit(): void {
    this.service.role = {
      id: '',
      name: 'Undifined'
    };
  }
}
