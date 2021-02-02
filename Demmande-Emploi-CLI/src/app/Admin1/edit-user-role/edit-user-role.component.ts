import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services_/admin.service';
import { RoleModel } from 'src/app/Classe/RoleModel';
import { EditUserRoleModel } from 'src/app/Classe/EditUserRoleModel';

@Component({
  selector: 'app-edit-user-role',
  templateUrl: './edit-user-role.component.html',
  styleUrls: ['./edit-user-role.component.css']
})
export class EditUserRoleComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private service: AdminService
  ) { }

  userForm: FormGroup;
  roles: RoleModel[];
  userId: string;
  roleId: string;
  userRole: EditUserRoleModel;
  userName: string;

  messageValidate = {
    userName: {
      required: 'اسم المستخدم مطلوب',
    },
    roleName: {
      required: 'نوع الصلاحية مطلوب',
    },
  };

  ngOnInit(): void {
    this.userRole = {
      roleId: '',
      userId: ''
    };
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      roleName: ['', [Validators.required]],
    });

    this.activateRoute.paramMap.subscribe(param => {
      const userId = param.get('id');
      const roleId = param.get('id1');

      if (userId && roleId) {
        this.service.GetUser(userId).subscribe(x => {
          this.userId = x.id;
          this.userName = x.userName;
          this.roleId = roleId;
          this.AddUserData();
        }, ex => console.log(ex));
        this.service.GelAllRoles().subscribe(s => {
          this.roles = s;
        }, ex => console.log(ex));
      } else {
        this.router.navigate(['notfound']).then(x => { window.location.reload(); });
      }
    });
  }

  // tslint:disable-next-line:typedef
  AddUserData() {
    this.userForm.setValue({
      userName: this.userName,
      roleName: this.roleId
    });
  }

  // tslint:disable-next-line:typedef
  EditRoles() {
    if (this.userId && this.roleId && this.userForm.valid) {
      this.userRole.roleId = this.roleId;
      this.userRole.userId = this.userId;
      this.service.EditUserRole(this.userRole).subscribe(s => {
        sessionStorage.setItem('editUserRole', 'true');
        this.router.navigate(['controlpanel']);
      }, ex => console.log(ex));
    }
  }

  // tslint:disable-next-line:typedef
  onRolesChange() {
    this.roleId = this.userForm.value.roleName;
    console.log(this.roleId);
  }

}
