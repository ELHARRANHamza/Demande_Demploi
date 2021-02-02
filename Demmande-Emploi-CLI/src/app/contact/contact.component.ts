import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageServiceService } from '../Services_/message-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(protected fb: FormBuilder, protected service: MessageServiceService) { }
fg: FormGroup;
message: string;
  ngOnInit(): void {
    this.message = '';
    this.fg = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  // tslint:disable-next-line:typedef
  AddMessage(){
    this.load();
    this.service.post().subscribe(res => {
      this.message = 'the operation poste message is Successfully';
}, ex => {
  console.log(ex);
});
  }
  // tslint:disable-next-line:typedef
  load(){
this.service.message = {
  id: 0,
  message: this.fg.get('message').value,
  email: this.fg.get('email').value,
  name: this.fg.get('name').value
};
  }


}
