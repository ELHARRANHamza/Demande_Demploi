import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Register } from 'src/app/Classe/Register';
import { RegisterService } from 'src/app/services_/register.service';
import { Users } from 'src/app/Classe/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: RegisterService
  ) { }

  userForm: FormGroup;
  reg: Register;
  regex: RegExp;
  message: string;
  isbusy: boolean;
  messageValidate = {
    userName: {
      required: 'اسم المستخدم مطلوب',
      matchUserName: '',
    },
    email: {
      required: 'البريد الالكتروني مطلوب',
      notValid: 'البريد الالكتورني المدخل غير صحيح',
      matchEmail: ''
    },
    pass: {
      required: 'كلمة المرور مطلوبة',
      minLength: 'الحد الأدني لكلمة المرور هي 6 مقاطع',
      notMatch: 'كلمة المرور يجب ان تحتوي علي رقم - حرف كبير - حرف صغير - حرف ممبز',
    },
    passConfirm: {
      required: 'تأكيد كلمة المرور مطلوب',
      minLength: 'الحد الأدني لكلمة المرور هي 6 مقاطع',
      isMatch: 'كلمتا المرور غير متطابقتين'
    }
  };

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.isbusy = false;
    this.message = '';
    this.reg = {
      userName: '',
      email: '',
      password: ''
    };

    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.userForm.valueChanges.subscribe(x => {
      if (this.userForm.status === 'VALID') {
        this.isbusy = true;
      }
    }, ex => console.log(ex))
  }

  // tslint:disable-next-line:typedef
  register() {
    if (this.userForm.valid) {
      this.validateRegisterModel();
      this.service.Register(this.reg).subscribe(succes => {
        this.message = 'تم اضافة البيانات بنجاح حتي تفعيل البريد المرسل الي بريدكم الالكتروني';
        this.userForm.reset();
        this.userForm.value.password = '';
      }, err => console.log(err));
    }
  }

  // tslint:disable-next-line:typedef
  validateRegisterModel() {
    this.reg.userName = this.userForm.value.userName;
    this.reg.email = this.userForm.value.email;
    this.reg.password = this.userForm.value.password;
  }

  // tslint:disable-next-line:typedef
  isPasswordMatch() {
    if (this.userForm.value.password !== '' && this.userForm.value.passwordConfirm !== '') {
      if ((this.userForm.value.password !== this.userForm.value.passwordConfirm) &&
        this.userForm.value.password.length > 5 && this.userForm.value.passwordConfirm.length > 5) {
        return true;
      }
    }
    return false;
  }

  // tslint:disable-next-line:typedef
  isPasswordValid() {
    const pass = this.userForm.value.password;
    if (pass !== '' && pass.length > 5) {
      this.regex = new RegExp('[a-z]');
      if (!this.regex.test(pass)) {
        this.messageValidate.pass.notMatch = 'كلمة المرور يجب ان تحتوي علي حرف صغير علي الأقل';
        return false;
      }
      this.regex = new RegExp('[A-Z]');
      if (!this.regex.test(pass)) {
        this.messageValidate.pass.notMatch = 'كلمة المرور يجب ان تحتوي علي حرف كبير علي الأقل';
        return false;
      }
      this.regex = new RegExp('[~!@#$%^&*()+<>{}]');
      if (!this.regex.test(pass)) {
        this.messageValidate.pass.notMatch = 'كلمة المرور يجب ان تحتوي علي حرف مميز علي الأقل';
        return false;
      }
      this.regex = new RegExp('[0-9]');
      if (!this.regex.test(pass)) {
        this.messageValidate.pass.notMatch = 'كلمة المرور يجب ان تحتوي علي رقم واحد علي الأقل';
        return false;
      }
    }
    return true;
  }

  // tslint:disable-next-line:typedef
  isUserNameExist() {
    const name = this.userForm.value.userName;
    if (name != null && name !== '' && this.isbusy === false) {
      this.service.UserNameExist(name).subscribe(x => {
        this.messageValidate.userName.matchUserName = 'اسم المستخدم هذا مستعمل';
      }, ex => console.log(ex));
      return true;
    } else {
      this.messageValidate.userName.matchUserName = null;
    }
    return false;
  }

  // tslint:disable-next-line:typedef
  isEmailExist() {
    const email = this.userForm.value.email;
    if (email != null && email !== '' && this.isbusy === false) {
      this.service.EmailExist(email).subscribe(x => {
        this.messageValidate.email.matchEmail = 'البريد الالكتروني هذا مستعمل';
      }, ex => console.log(ex));
      return true;
    } else {
      this.messageValidate.email.matchEmail = null;
    }
    return false;
  }
}
