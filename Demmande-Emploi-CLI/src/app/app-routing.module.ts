import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsHomeComponent } from './details-home/details-home.component';
import { HomeComponent } from './home/home.component';
import { ListePosteComponent } from './liste-poste/liste-poste.component';
import { PosterComponent } from './poster/poster.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { DashboardGaurdService } from './gaurds/dashboard-gaurd.service';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AddUserComponent } from './Admin1/add-user/add-user.component';
import { EditUserRoleComponent } from './Admin1/edit-user-role/edit-user-role.component';
import { ForgtPasswordComponent } from './Account/forgt-password/forgt-password.component';



const routes: Routes = [

  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full'
  },
  { path: 'edituser/:id', component: AddUserComponent },
  { path: 'edituserrole/:id/:id1', component: EditUserRoleComponent },
  {
    path: 'Annonce',
    component: AnnonceComponent,
    pathMatch: 'full'
  },
  { path: 'forgetpassword', component: ForgtPasswordComponent },
  {
    path: 'Home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'Poster/:id',
    component: PosterComponent,
    pathMatch: 'full'
  },
  {
    path: 'Details/:id',
    component: DetailsHomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'MyPoster/:id',
    component: ListePosteComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'Login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'Register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  { path: 'controlpanel', component: DashBoardComponent, canActivate: [DashboardGaurdService] },
  { path: 'accessdenied', component: AccessdeniedComponent, pathMatch: 'full' },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
