import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services_/register.service';
import { Router } from '@angular/router';
import { AuthService } from '../services_/auth.service';
import { CryptService } from '../services_/crypt.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private service: RegisterService,
    private route: Router,
    private auth: AuthService,
    private crypt: CryptService
  ) { }
email: string;
  // tslint:disable-next-line:typedef
  ngOnInit() {
    if (this.isUserRegistered()) {
      if (this.auth.IsExpiredDate(this.auth.expire) === true) {
        this.Logout();
      }

      this.auth.ValidateUser(this.auth.email, this.auth.role).subscribe(success => {
      }, err => {
        console.log(err);
        this.Logout();
      });
      this.email = this.crypt.Decrypt(localStorage.getItem('email').toString());
    }
  }

  // tslint:disable-next-line:typedef
  Logout() {
    this.service.LogoutUsers().subscribe(succ => {
      localStorage.clear();
      console.log('authoization return false');

      this.route.navigate(['home']);
    }, err => console.log((err))
    );
  }

  // tslint:disable-next-line:typedef
  isUserRegistered() {
    const email = !!localStorage.getItem('email');
    const exp = !!localStorage.getItem('expire');
    const role = !!localStorage.getItem('role');

    if (email && role && exp) {
      return true;
    }
    return false;
  }

  // tslint:disable-next-line:typedef
  IsAdmin() {
    const isAdmin = !!this.auth.role;
    if (isAdmin) {
      if (this.auth.role.toLowerCase() === 'admin') {
        return true;
      }
    }
    return false;
  }

}
