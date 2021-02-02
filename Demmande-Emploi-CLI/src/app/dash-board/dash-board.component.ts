import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(protected router: ActivatedRoute) { }
  isUserList: boolean;
  isAddUser: boolean;
  isUserRolesList: boolean;
  isCategoryList: boolean;
  isVilleListe: boolean;
  isAnnonceListe: boolean;
  isSectorListe: boolean;
  isTypeListe: boolean;
  isAddRole: boolean;
  isAnnonceAccepter: boolean;
  isAnnonceEnvoyer: boolean;
  isAnnonceRefuser: boolean;
  isMessage: boolean;
  url: string;

  ngOnInit(): void {
    this.router.url.subscribe(res => {
     this.url = res.toString();
    });
    this.isAnnonceListe = false;
    this.isCategoryList = false;
    this.isSectorListe = false;
    this.isTypeListe = false;
    this.isVilleListe = false;
    this.isCategoryList = false;
    this.isAddUser = false;
    this.isUserRolesList = false;
    this.isUserList = false;
    this.isAddRole = false;
    this.isAnnonceAccepter = false;
    this.isAnnonceEnvoyer = true;
    this.isAnnonceRefuser = false;
    this.isMessage = false;
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });
    if (sessionStorage.getItem('editUserRole')) {
      this.CheckUserRoleList();
      sessionStorage.removeItem('editUserRole');
    }
  }

  CheckUser(): boolean {
    this.isMessage = false;
    this.isAnnonceListe = false;
    this.isAddRole = false;
    this.isCategoryList = false;
    this.isSectorListe = false;
    this.isTypeListe = false;
    this.isVilleListe = false;
    this.isCategoryList = false;
    this.isAddUser = false;
    this.isUserRolesList = false;
    this.isAnnonceAccepter = false;
    this.isAnnonceEnvoyer = false;
    this.isAnnonceRefuser = false;
    return this.isUserList = true;
  }

  // tslint:disable-next-line:typedef
  AddUser() {
    this.isMessage = false;
    this.isAnnonceListe = false;
    this.isAddRole = false;
    this.isCategoryList = false;
    this.isSectorListe = false;
    this.isTypeListe = false;
    this.isVilleListe = false;
    this.isCategoryList = false;
    this.isUserList = false;
    this.isUserRolesList = false;
    this.isAnnonceAccepter = false;
    this.isAnnonceEnvoyer = false;
    this.isAnnonceRefuser = false;
    return this.isAddUser = true;
  }

  CheckUserRoleList(): boolean {
    this.isMessage = false;
    this.isAnnonceListe = false;
    this.isAddRole = false;
    this.isCategoryList = false;
    this.isSectorListe = false;
    this.isTypeListe = false;
    this.isVilleListe = false;
    this.isCategoryList = false;
    this.isAddUser = false;
    this.isUserList = false;
    this.isAnnonceAccepter = false;
    this.isAnnonceEnvoyer = false;
    this.isAnnonceRefuser = false;
    return this.isUserRolesList = true;
  }

  // tslint:disable-next-line:typedef
  GetCategoryList() {
    this.isMessage = false;
    this.isAnnonceListe = false;
    this.isAddRole = false;
    this.isSectorListe = false;
    this.isTypeListe = false;
    this.isVilleListe = false;
    this.isUserRolesList = false;
    this.isAddUser = false;
    this.isUserList = false;
    this.isAnnonceAccepter = false;
    this.isAnnonceEnvoyer = false;
    this.isAnnonceRefuser = false;
    this.isCategoryList = true;
  }

  // tslint:disable-next-line:typedef
  GetAnnonceList() {
    this.isMessage = false;
    this.isCategoryList = false;
    this.isAddRole = false;
    this.isSectorListe = false;
    this.isTypeListe = false;
    this.isVilleListe = false;
    this.isCategoryList = false;
    this.isUserRolesList = false;
    this.isAddUser = false;
    this.isUserList = false;
    this.isAnnonceAccepter = false;
    this.isAnnonceEnvoyer = false;
    this.isAnnonceRefuser = false;
    return this.isAnnonceListe = true;
  }

  // tslint:disable-next-line:typedef
    GetSectorList() {
    this.isMessage = false;
    this.isAnnonceListe = false;
    this.isAddRole = false;
    this.isCategoryList = false;
    this.isTypeListe = false;
    this.isVilleListe = false;
    this.isUserRolesList = false;
    this.isAddUser = false;
    this.isUserList = false;
    this.isAnnonceAccepter = false;
    this.isAnnonceEnvoyer = false;
    this.isAnnonceRefuser = false;
    return this.isSectorListe = true;
  }

  // tslint:disable-next-line:typedef
  GetTypeList() {
    this.isMessage = false;
    this.isCategoryList = false;
    this.isAddRole = false;
    this.isSectorListe = false;
    this.isVilleListe = false;
    this.isCategoryList = false;
    this.isUserRolesList = false;
    this.isAddUser = false;
    this.isUserList = false;
    this.isAnnonceAccepter = false;
    this.isAnnonceEnvoyer = false;
    this.isAnnonceRefuser = false;
    return this.isTypeListe = true;
  }
  // tslint:disable-next-line:typedef
  GetVilleList() {
    this.isMessage = false;
    this.isAnnonceListe = false;
    this.isAddRole = false;
    this.isCategoryList = false;
    this.isSectorListe = false;
    this.isTypeListe = false;
    this.isUserRolesList = false;
    this.isAddUser = false;
    this.isUserList = false;
    this.isAnnonceAccepter = false;
    this.isAnnonceEnvoyer = false;
    this.isAnnonceRefuser = false;
    return this.isVilleListe = true;
  }
  // tslint:disable-next-line:typedef
  GetRoleListe() {
    this.isMessage = false;
    this.isAnnonceListe = false;
    this.isVilleListe = false;
    this.isCategoryList = false;
    this.isSectorListe = false;
    this.isTypeListe = false;
    this.isUserRolesList = false;
    this.isAddUser = false;
    this.isUserList = false;
    this.isAnnonceAccepter = false;
    this.isAnnonceEnvoyer = false;
    this.isAnnonceRefuser = false;
    return this.isAddRole = true;
  }

  // tslint:disable-next-line:typedef
  GetAnnonceEnvoyer() {
    this.isMessage = false;
    this.isCategoryList = false;
    this.isAddRole = false;
    this.isSectorListe = false;
    this.isVilleListe = false;
    this.isCategoryList = false;
    this.isUserRolesList = false;
    this.isAddUser = false;
    this.isUserList = false;
    this.isAnnonceAccepter = false;
    this.isTypeListe = false;
    this.isAnnonceRefuser = false;
    return this.isAnnonceEnvoyer = true;
  }
  // tslint:disable-next-line:typedef
  GetAnnonceAccepter() {
    this.isMessage = false;
    this.isAnnonceListe = false;
    this.isAddRole = false;
    this.isCategoryList = false;
    this.isSectorListe = false;
    this.isTypeListe = false;
    this.isUserRolesList = false;
    this.isAddUser = false;
    this.isUserList = false;
    this.isVilleListe = false;
    this.isAnnonceEnvoyer = false;
    this.isAnnonceRefuser = false;
    return this.isAnnonceAccepter = true;
  }
  // tslint:disable-next-line:typedef
  GetAnnonceRefuser() {
    this.isMessage = false;
    this.isAnnonceListe = false;
    this.isVilleListe = false;
    this.isCategoryList = false;
    this.isSectorListe = false;
    this.isTypeListe = false;
    this.isUserRolesList = false;
    this.isAddUser = false;
    this.isUserList = false;
    this.isAnnonceAccepter = false;
    this.isAnnonceEnvoyer = false;
    this.isAddRole = false;
    return this.isAnnonceRefuser = true;
  }
  // tslint:disable-next-line:typedef
  GetMessage() {
    this.isAnnonceRefuser = false;
    this.isAnnonceListe = false;
    this.isVilleListe = false;
    this.isCategoryList = false;
    this.isSectorListe = false;
    this.isTypeListe = false;
    this.isUserRolesList = false;
    this.isAddUser = false;
    this.isUserList = false;
    this.isAnnonceAccepter = false;
    this.isAnnonceEnvoyer = false;
    this.isAddRole = false;
    return this.isMessage = true;
  }
}
