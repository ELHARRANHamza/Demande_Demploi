import { Component, OnInit } from '@angular/core';
import { UserRoleModel } from 'src/app/Classe/UserRoleModel';
import { AdminService } from 'src/app/services_/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  constructor(
    private service: AdminService,
    private router: Router
  ) { }

  userRoles: UserRoleModel[];

  ngOnInit(): void {
    this.userRoles = [];

    this.GetUserRole();
  }

  // tslint:disable-next-line:typedef
  GetUserRole() {
    this.service.GetUserRole().subscribe(s => {
      this.userRoles = s;
      console.log(this.userRoles);
    }, ex => console.log(ex));
  }

  // tslint:disable-next-line:typedef
  EditUserRole(userId: string, roleId: string) {
    this.router.navigate(['edituserrole', userId, roleId]);
  }

}
