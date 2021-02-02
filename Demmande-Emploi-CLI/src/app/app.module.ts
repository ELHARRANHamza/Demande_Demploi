import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VilleComponent } from './ville/ville.component';
import { ListeVilleComponent } from './liste-ville/liste-ville.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { SectorComponent } from './sector/sector.component';
import { TypeComponent } from './type/type.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { ListeSectorComponent } from './liste-sector/liste-sector.component';
import { ListeTypeComponent } from './liste-type/liste-type.component';
import { RolesComponent } from './roles/roles.component';
import { ListeRolesComponent } from './liste-roles/liste-roles.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { HomeComponent } from './home/home.component';
import { DetailsHomeComponent } from './details-home/details-home.component';
import { PosterComponent } from './poster/poster.component';
import { ListePosteComponent } from './liste-poste/liste-poste.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { ForgtPasswordComponent } from './Account/forgt-password/forgt-password.component';
import { PasswordconfirmComponent } from './Account/passwordconfirm/passwordconfirm.component';
import { RegisterconfirmComponent } from './Account/registerconfirm/registerconfirm.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { from } from 'rxjs';
import { DashboardGaurdService } from './gaurds/dashboard-gaurd.service';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AnnonceEnvoyerComponent } from './GestionAnnonce/annonce-envoyer/annonce-envoyer.component';
import { AnnonceAccepterComponent } from './GestionAnnonce/annonce-accepter/annonce-accepter.component';
import { AnnonceRefuserComponent } from './GestionAnnonce/annonce-refuser/annonce-refuser.component';
import { UserRolesComponent } from './Admin1/user-roles/user-roles.component';
import { EditUserRoleComponent } from './Admin1/edit-user-role/edit-user-role.component';
import { AddUserComponent } from './Admin1/add-user/add-user.component';
import { UsersComponent } from './Admin1/users/users.component';
import { SearchComponent } from './search/search.component';
import { SliderComponent } from './slider/slider.component';
import { ContactComponent } from './contact/contact.component';
import { ListeMessageComponent } from './liste-message/liste-message.component';
@NgModule({
  declarations: [
    AppComponent,
    VilleComponent,
    ListeVilleComponent,
    CategoriesComponent,
    SectorComponent,
    TypeComponent,
    ListeCategoriesComponent,
    ListeSectorComponent,
    ListeTypeComponent,
    RolesComponent,
    ListeRolesComponent,
    AnnonceComponent,
    ListeAnnonceComponent,
    HomeComponent,
    DetailsHomeComponent,
    PosterComponent,
    ListePosteComponent,
    LoginComponent,
    RegisterComponent,
    RegisterconfirmComponent,
    ForgtPasswordComponent,
    PasswordconfirmComponent,
    NavbarComponent,
    FooterComponent,
    NavMenuComponent,
    AccessdeniedComponent,
    DashBoardComponent,
    AnnonceEnvoyerComponent,
    AnnonceAccepterComponent,
    AnnonceRefuserComponent,
    UserRolesComponent,
    EditUserRoleComponent,
    AddUserComponent,
    UsersComponent,
    SearchComponent,
    SliderComponent,
    ContactComponent,
    ListeMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [DashboardGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
