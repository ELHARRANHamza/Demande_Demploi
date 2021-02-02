import { Injectable } from '@angular/core';
import { Register } from '../Classe/Register';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { usersModel } from '../Classe/usersModel';
import { FormGroup } from '@angular/forms';
import { loginModel } from '../Classe/LoginModel';
import { ResetPassword } from '../Classe/reset-password';
import { Users } from '../Classe/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://localhost:44322/Account/';
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true,
  };

  Register(reg: Register): Observable<Register> {
    return this.http.post<Register>(this.baseUrl + 'Register', reg, this.headers).pipe();
  }

  GetAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl + 'GetAllUsers').pipe();
  }

  UserLogin(log: loginModel): Observable<loginModel> {
    return this.http.post<loginModel>(this.baseUrl + 'Login', log, this.headers).pipe();
  }

  // tslint:disable-next-line:typedef
  LogoutUsers() {
    return this.http.get(this.baseUrl + 'Logout', { withCredentials: true }).pipe();
  }

  // tslint:disable-next-line:typedef
  EmailConfirm(id: string, token: string) {
    return this.http.get(this.baseUrl + 'RegistrationConfirm?ID=' + id + '&Token=' + token).pipe();
  }

  // tslint:disable-next-line:typedef
  UserNameExist(username: string) {
    return this.http.get(this.baseUrl + 'UserExists?username=' + username).pipe();
  }

  // tslint:disable-next-line:typedef
  EmailExist(email: string) {
    return this.http.get(this.baseUrl + 'EmailExists?email=' + email).pipe();
  }

  // tslint:disable-next-line:typedef
  ForgetPassword(email: string) {
    return this.http.get(this.baseUrl + 'ForgetPassword/' + email).pipe();
  }

  ApiResetPassword(passModel: ResetPassword): Observable<ResetPassword> {
    return this.http.post<ResetPassword>(this.baseUrl + 'ResetPassword', passModel, this.headers).pipe();
  }
}
