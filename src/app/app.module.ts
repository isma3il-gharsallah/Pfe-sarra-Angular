import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

 

// components for views and layouts

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardBarChartComponent } from "./components/cards/card-bar-chart/card-bar-chart.component";
import { CardLineChartComponent } from "./components/cards/card-line-chart/card-line-chart.component";
import { CardPageVisitsComponent } from "./components/cards/card-page-visits/card-page-visits.component";
import { CardProfileComponent } from "./components/cards/card-profile/card-profile.component";
import { CardSettingsComponent } from "./components/cards/card-settings/card-settings.component";
import { CardSocialTrafficComponent } from "./components/cards/card-social-traffic/card-social-traffic.component";
import { CardStatsComponent } from "./components/cards/card-stats/card-stats.component";
import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { MapExampleComponent } from "./components/maps/map-example/map-example.component";
import { IndexDropdownComponent } from "./components/dropdowns/index-dropdown/index-dropdown.component";
import { TableDropdownComponent } from "./components/dropdowns/table-dropdown/table-dropdown.component";
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { NotificationDropdownComponent } from "./components/dropdowns/notification-dropdown/notification-dropdown.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserDropdownComponent } from "./components/dropdowns/user-dropdown/user-dropdown.component";
import { AdduserComponent } from './views/adduser/adduser.component';
import { GestionuserComponent } from './views/gestionuser/gestionuser.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
 import { DetailuserComponent } from './views/detailuser/detailuser.component';
import { EdituserComponent } from './views/edituser/edituser.component';
import { DeleteuserComponent } from './views/deleteuser/deleteuser.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DMWM_INTERCEPTOR } from "./token.interceptor";
import { AddcompetenceComponent } from './views/addcompetence/addcompetence.component';
import { GestioncompetenceComponent } from './views/gestioncompetence/gestioncompetence.component';
import { UpdatecompetenceComponent } from './views/updatecompetence/updatecompetence.component';
import { DeletecompetenceComponent } from './views/deletecompetence/deletecompetence.component';
import { AffectercompetenceComponent } from './views/affectercompetence/affectercompetence.component';
import { DetailcompetenceComponent } from './views/detailcompetence/detailcompetence.component';
import { ChefComponent } from './layouts/chef/chef.component';
import { SidebarChefComponent } from './components/sidebar-chef/sidebar-chef.component';
import { ChefNavbarComponent } from './components/navbars/chef-navbar/chef-navbar.component';
 import { DashbordChefComponent } from './views/dashbord-chef/dashbord-chef.component';
import { UserDropdownNotificationComponent } from "./components/dropdowns/user-dropdown-Notification/user-dropdown.component";
import { HeaderChefComponent } from './components/headers/header-chef/header-chef.component';
import { UserDropdownChefComponent } from "./components/dropdowns/user-dropdown-chef/user-dropdown.component";
import { GestionprojetsComponent } from './views/gestionprojets/gestionprojets.component';
import { AddprojetComponent } from './views/addprojet/addprojet.component';
import { AddprojetadminComponent } from './views/addprojetadmin/addprojetadmin.component';
import { DatePipe } from "@angular/common";
import { ListeprojetadminComponent } from './views/listeprojetadmin/listeprojetadmin.component';
import { DetailsprojetComponent } from './views/detailsprojet/detailsprojet.component';
import { GanttComponent } from './views/gantt/gantt.component';
import { ListeprojetschefComponent } from './views/listeprojetschef/listeprojetschef.component';
import { GestionequipeComponent } from './views/gestionequipe/gestionequipe.component';
import { ModifyequipeComponent } from './views/modifyequipe/modifyequipe.component';
import { GestionmoduleComponent } from './views/gestionmodule/gestionmodule.component';
import { ModifymoduleComponent } from './views/modifymodule/modifymodule.component';
import { ProjetComponent } from './layouts/projet/projet.component';
import { SidebarProjetComponent } from './components/sidebar-projet/sidebar-projet.component';
import { ProjetNavbarComponent } from './components/navbars/projet-navbar/projet-navbar.component';
import { AddmoduleComponent } from './views/addmodule/addmodule.component';
import { AddequipeComponent } from './views/addequipe/addequipe.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardBarChartComponent,
    CardLineChartComponent,
    IndexDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    NotificationDropdownComponent,
    UserDropdownComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardStatsComponent,
    CardTableComponent,
    HeaderStatsComponent,
    MapExampleComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    AdduserComponent,
    GestionuserComponent,
    DetailuserComponent,
    EdituserComponent,
    DeleteuserComponent,
    AddcompetenceComponent,
    GestioncompetenceComponent,
    UpdatecompetenceComponent,
    DeletecompetenceComponent,
    AffectercompetenceComponent,
    DetailcompetenceComponent,
    ChefComponent,
    SidebarChefComponent,
    ChefNavbarComponent,
     DashbordChefComponent,
     UserDropdownNotificationComponent,
     HeaderChefComponent,
     UserDropdownChefComponent,
     GestionprojetsComponent,
     AddprojetComponent,
     AddprojetadminComponent,
     ListeprojetadminComponent,
     DetailsprojetComponent,
     GanttComponent,
     ListeprojetschefComponent,
     GestionequipeComponent,
     ModifyequipeComponent,
     GestionmoduleComponent,
     ModifymoduleComponent,
     ProjetComponent,
     SidebarProjetComponent,
     ProjetNavbarComponent,
     AddmoduleComponent,
     AddequipeComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }),
    AppRoutingModule,
     FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    
    ],
    providers: [DMWM_INTERCEPTOR,DatePipe],
    bootstrap: [AppComponent],
})
export class AppModule {}
