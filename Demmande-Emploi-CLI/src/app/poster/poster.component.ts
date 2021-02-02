import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { PosterServiceService } from '../Services_/poster-service.service';
import { CryptService } from '../services_/crypt.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {

  constructor(public service: PosterServiceService,
              public router: ActivatedRoute,
              private crypt: CryptService,
              private route: Router) { }
id: any;
fileName: File = null;
email: string;
  ngOnInit(): void {

    const emailStor = localStorage.getItem('email');
    const expireStor = localStorage.getItem('expire');
    const roleStor = localStorage.getItem('role');
    if ((emailStor === '' || emailStor === null) ||
    (emailStor === '' || emailStor === null) ||
    (emailStor === '' || emailStor === null)){
    this.route.navigateByUrl('/Login');
    }

    this.id = this.router.snapshot.params['id'];
    this.service.poste = {
      id: 0,
      Message: 'Undifined',
      annonce: null,
      date_Poster: null,
      email: 'Undifined',
      num_Tile: 'Undifined',
      cv: 'Undifined',
      id_Ann: this.id,
      user_Email: 'Undifined'
    };
    this.email = this.crypt.Decrypt(localStorage.getItem('email'));
  }
  // tslint:disable-next-line:typedef
  UploadImage(files: FileList){
this.fileName = files.item(0);
console.log(this.fileName);
  }
  // tslint:disable-next-line:typedef
  Add(){
    this.service.Add(this.fileName, this.email).subscribe(res => {
      alert('Success');
    }, err => {
      console.log(err);
    });
  }

}
