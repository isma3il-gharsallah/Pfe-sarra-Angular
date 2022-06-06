import { Component, OnInit, Input } from "@angular/core";
 import { Utilisateur } from "src/app/models/utilisateur/utilisateur.model";
import { UtilisateurService } from "src/app/services/utilisateur.service";

@Component({
  selector: 'app-gestionuser',
  templateUrl: './gestionuser.component.html',
  styleUrls: ['./gestionuser.component.css']
})
export class GestionuserComponent implements OnInit {
  listUtilisateur: Utilisateur[];
  search
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(public _utilisateurService:UtilisateurService) {}

  ngOnInit(): void {
   this.Listeusers();
  }

  Listeusers(){
    this._utilisateurService.All_utilisateur().subscribe(res => {
      this.listUtilisateur = res as Utilisateur[]
       
      })
  }

 
}
