import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services_/admin.service';
import { Users } from 'src/app/Classe/user';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private service: AdminService,
    private router: Router
  ) { }

  users: Users[];
  num: number;

  ngOnInit(): void {
    this.users = null;
    this.num = 0;
    this.getUsers();
  }

  // tslint:disable-next-line:typedef
  getUsers() {
     this.service.GetAllUsers().subscribe((list) => {
      this.users = list;
    }, err => console.log(err));
  }

  // tslint:disable-next-line:typedef
  EditUserClick(id: string) {
    this.router.navigate(['/edituser', id]);
  }

  // tslint:disable-next-line:typedef
  SelectAll() {
    const tbl = $('#tbl');
    const header = tbl.find('thead .ckheader');
    const item = tbl.find('tbody .ckitem');
    $(function () {
      item.on('change', function() {
        if ($(this).is(':checked')) {
          $(this).closest('tr').addClass('NewRowColor');
        }
        else {
          $(this).closest('tr').removeClass('NewRowColor');
        }
      });

      header.change(function () {
        const c = this.checked;
        item.prop('checked', c);
        item.trigger('check');
        if ($(this).is(':checked')) {
          $(item).closest('tr').addClass('NewRowColor');
        }
        else {
          $(item).closest('tr').removeClass('NewRowColor');
        }
      });
    });
  }

  // tslint:disable-next-line:typedef
  IsDelete() {
    const checkboxes = document.getElementsByClassName('ckitem');
    if (checkboxes.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < checkboxes.length; i++) {
        if ($(checkboxes[i]).is(':checked')) {
          return true;
        }
      }
    }
    return false;
  }

  // tslint:disable-next-line:typedef
  DeleteCount() {
    const count = $('.ckitem:checked').length;
    this.num = count;
  }

  // tslint:disable-next-line:typedef
  DeleteConfirm() {
    const checkboxes = document.getElementsByClassName('ckitem');
    if (checkboxes.length > 0) {
      // tslint:disable-next-line:prefer-const
      let ids = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < checkboxes.length; i++) {
        if ($(checkboxes[i]).is(':checked')) {
          let id = $(checkboxes[i]).val();
          ids.push(id);
        }
      }

      this.service.DeleteAll(ids).subscribe(s => {
        this.getUsers();
        $('#btnClose').trigger('click');
      }, ex => console.log(ex));
    }
  }

}

