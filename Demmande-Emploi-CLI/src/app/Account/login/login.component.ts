import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services_/register.service';
import { loginModel } from 'src/app/Classe/LoginModel';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services_/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: RegisterService,
    private route: Router,
    private auth: AuthService
  ) { }

  message: string;
  loginForm: FormGroup;
  logModel: loginModel;
  messageValidate = {
    email: {
      required: 'البريد الالكتروني مطلوب',
    },
    pass: {
      required: 'كلمة المرور مطلوبة',
    },
  };

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.message = '';

    this.logModel = {
      email: '',
      password: '',
      remember: false
    };

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: false
    });

  }

  // tslint:disable-next-line:typedef
  Login() {
    if (this.loginForm.valid) {
      this.ValidateModel();
      this.service.UserLogin(this.logModel).subscribe(success => {
        const rem = !!this.loginForm.value.rememberMe;
        const email = this.loginForm.value.email;
        this.auth.installStorage(rem, email);
        this.route.navigate(['Home']).then(x => {window.location.reload()});
      }, err => {
        console.log(err);
        this.message = err.error;
      });
    }
  }

  // tslint:disable-next-line:typedef
  ValidateModel() {
    this.logModel.email = this.loginForm.value.email;
    this.logModel.password = this.loginForm.value.password;
    this.logModel.remember = this.loginForm.value.rememberMe;
  }
}
