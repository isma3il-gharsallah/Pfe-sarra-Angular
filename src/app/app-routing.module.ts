import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { AdduserComponent } from './views/adduser/adduser.component';
import { GestionuserComponent } from './views/gestionuser/gestionuser.component';

// auth views
import { LoginComponent } from "./views/auth/login/login.component";

// no layouts views
import { DetailuserComponent } from "./views/detailuser/detailuser.component";
import { EdituserComponent } from "./views/edituser/edituser.component";
import { DeleteuserComponent } from "./views/deleteuser/deleteuser.component";
import { LoginGuard } from "./login.guard";
import { LogoutGuard } from "./logout.guard";
import { AddcompetenceComponent } from "./views/addcompetence/addcompetence.component";
import { GestioncompetenceComponent } from "./views/gestioncompetence/gestioncompetence.component";
import { UpdatecompetenceComponent } from "./views/updatecompetence/updatecompetence.component";
import { AffectercompetenceComponent } from "./views/affectercompetence/affectercompetence.component";
import { DetailcompetenceComponent } from "./views/detailcompetence/detailcompetence.component";
import { ChefComponent } from "./layouts/chef/chef.component";
import { DashbordChefComponent } from "./views/dashbord-chef/dashbord-chef.component";
import { GestionprojetsComponent } from "./views/gestionprojets/gestionprojets.component";
import { AddprojetComponent } from "./views/addprojet/addprojet.component";
import { AddprojetadminComponent } from "./views/addprojetadmin/addprojetadmin.component";
import { ListeprojetadminComponent } from "./views/listeprojetadmin/listeprojetadmin.component";
import { GanttComponent } from "./views/gantt/gantt.component";
import { DetailsprojetComponent } from "./views/detailsprojet/detailsprojet.component";
import { ListeprojetschefComponent } from "./views/listeprojetschef/listeprojetschef.component";
import { GestionequipeComponent } from "./views/gestionequipe/gestionequipe.component";
import { ModifyequipeComponent } from "./views/modifyequipe/modifyequipe.component";
import { GestionmoduleComponent } from "./views/gestionmodule/gestionmodule.component";



const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent , canActivate: [LoginGuard]},
      { path: "addCompetence", component: AddcompetenceComponent , canActivate: [LoginGuard]},
      { path: "adduser", component: AdduserComponent , canActivate: [LoginGuard]},
      { path: "gestionuser", component: GestionuserComponent , canActivate: [LoginGuard]},
      { path: "gestioncompetence", component: GestioncompetenceComponent , canActivate: [LoginGuard]},
      { path: "affectercompetence", component: AffectercompetenceComponent , canActivate: [LoginGuard]},
      { path: "detailuser/:id", component: DetailuserComponent , canActivate: [LoginGuard]},
      { path: "detailcompetence/:id", component: DetailcompetenceComponent , canActivate: [LoginGuard]},
      { path: "edituser/:id", component: EdituserComponent , canActivate: [LoginGuard]},
      { path: "updatecompetence/:id", component: UpdatecompetenceComponent , canActivate: [LoginGuard]},
      { path: "deleteuser/:id", component: DeleteuserComponent , canActivate: [LoginGuard]},
      { path: "AddProjet", component: AddprojetadminComponent , canActivate: [LoginGuard]},
      { path: "projets", component: ListeprojetadminComponent , canActivate: [LoginGuard]},
      { path: "datailprojet", component: DetailsprojetComponent  , canActivate: [LoginGuard] },
      //
      { path: "", redirectTo: "dashboard", pathMatch: "full"  },
    ],
  },
  {
    path: "chef",
    component: ChefComponent,
    children: [
      { path: "dashboard", component: DashbordChefComponent , canActivate: [LoginGuard]},
    //  { path: "addCompetence", component: AddcompetenceComponent , canActivate: [LoginGuard]},
      { path: "Addprojet", component: AddprojetComponent , canActivate: [LoginGuard]},
     { path: "gestionprojets", component: GestionprojetsComponent , canActivate: [LoginGuard]},
     { path: "projets", component: ListeprojetschefComponent , canActivate: [LoginGuard]},
     { path: "datailprojet/:id", component: DetailsprojetComponent  },
     { path: "gestion_equipe/:id", component: GestionequipeComponent  , canActivate: [LoginGuard] },
     { path: "modifier_equipe/:id", component: ModifyequipeComponent  , canActivate: [LoginGuard] },
     { path: "gestion_module/:id", component: GestionmoduleComponent  , canActivate: [LoginGuard] },

      { path: "", redirectTo: "dashboard", pathMatch: "full"  },
    ],
  },
 
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent , canActivate: [LogoutGuard]},
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  { path: "detail", component: DetailsprojetComponent },

  { path: "", component: LoginComponent  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
