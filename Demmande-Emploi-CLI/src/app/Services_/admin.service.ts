import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../Classe/user';
import { UserModel } from '../Classe/UserModel';
import { EditUserModel } from '../Classe/EditUserModel';
import { UserRoleModel } from '../Classe/UserRoleModel';
import { RoleModel } from '../Classe/RoleModel';
import { EditUserRoleModel } from '../Classe/EditUserRoleModel';
import { Category } from '../Classe/CategoryModel';
import { SubCategory } from '../Classe/SubCatgory';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient
  ) { }

  baseUrl = 'https://localhost:44322/api/Admin/';
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true,
  };

  GetAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl + 'GetAllUsers', this.headers).pipe();
  }

  AddUser(model: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.baseUrl + 'AddUser', model, this.headers).pipe();
  }

  GetUser(id: string): Observable<Users> {
    return this.http.get<Users>(this.baseUrl + 'GetUser/' + id, this.headers).pipe();
  }

  EditUser(model: EditUserModel): Observable<Users> {
    return this.http.put<Users>(this.baseUrl + 'EditUser', model, this.headers).pipe();
  }

  // tslint:disable-next-line:typedef
  DeleteAll(ids: string[]) {
    return this.http.post(this.baseUrl + 'DeleteUsers', ids, this.headers).pipe();
  }

  GetUserRole(): Observable<UserRoleModel[]> {
    return this.http.get<UserRoleModel[]>(this.baseUrl + 'GetUserRole', this.headers).pipe();
  }


  GelAllRoles(): Observable<RoleModel[]> {
    return this.http.get<RoleModel[]>(this.baseUrl + 'GetAllRoles', this.headers).pipe();
  }

  EditUserRole(model: EditUserRoleModel): Observable<EditUserRoleModel> {
    return this.http.put<EditUserRoleModel>(this.baseUrl + 'EditUserRole', model, this.headers).pipe();
  }

  GetAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'GetCategories', this.headers).pipe();
  }

  AddCategory(model: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl + 'AddCategory', model, this.headers).pipe();
  }

  EditCategory(model: Category): Observable<Category> {
    return this.http.put<Category>(this.baseUrl + 'EditCategory', model, this.headers).pipe();
  }

  // tslint:disable-next-line:typedef
  DeleteAllCategory(ids: string[]) {
    return this.http.post(this.baseUrl + 'DeleteCategory', ids, this.headers).pipe();
  }

  GetAllSubCategories(): Observable<SubCategory[]> {
    return this.http.get<SubCategory[]>(this.baseUrl + 'GetSubCategories', this.headers).pipe();
  }

  AddSubCategory(model: SubCategory): Observable<SubCategory> {
    return this.http.post<SubCategory>(this.baseUrl + 'AddSubCategory', model, this.headers).pipe();
  }

  EditSubCategory(model: SubCategory): Observable<SubCategory> {
    return this.http.put<SubCategory>(this.baseUrl + 'EditSubCategory', model, this.headers).pipe();
  }

  // tslint:disable-next-line:typedef
  DeleteAllSubCategory(ids: string[]) {
    return this.http.post(this.baseUrl + 'DeleteSubCategory', ids, this.headers).pipe();
  }
}
