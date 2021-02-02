import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CryptService } from './crypt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email: string;
  expire: string;
  role: string;

  constructor(
    private http: HttpClient,
    private serivce: CryptService
  ) {
    if (this.isUserRegistered()) {
      this.expire = this.serivce.Decrypt(localStorage.getItem('expire'));
      this.email = this.serivce.Decrypt(localStorage.getItem('email'));
      this.role = this.serivce.Decrypt(localStorage.getItem('role'));
    }
  }

   // tslint:disable-next-line:typedef
   async installStorage(rem: boolean, email: string) {
    const day = new Date();
    if (rem) {
      day.setDate(day.getDate() + 10);
    } else {
      day.setMinutes(day.getMinutes() + 30);
    }

    localStorage.setItem('email', this.serivce.Encrypt(email));
    localStorage.setItem('expire', this.serivce.Encrypt(day.toString()));

    this.GetRoleName(email).subscribe(success => {
      localStorage.setItem('role', this.serivce.Encrypt(success));
    }, e => console.log(e));
  }

  // tslint:disable-next-line:typedef
  IsExpiredDate(day: string) {
    const dateNow = new Date();
    const dateExpire = new Date(Date.parse(day));
    if (dateExpire < dateNow) {
      return true;
    }
    return false;
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
  GetRoleName(email: string) {
    return this.http.get('https://localhost:44322/Account/GetRoleName/' + email, { responseType: 'text' }).pipe();
  }

  // tslint:disable-next-line:typedef
  ValidateUser(email: string, role: string) {
    return this.http.get('https://localhost:44322/Account/CheckUserClaims/' + email + '&' + role,
      { withCredentials: true }).pipe();
  }
}
